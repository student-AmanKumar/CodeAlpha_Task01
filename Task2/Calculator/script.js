/* =========================================================
   CODEALPHA — CALCULATOR
   TASK 02
========================================================= */

"use strict";


/* =========================================================
   STATE
========================================================= */

const akcalcState = {

    expression: "",

    currentInput: "0",

    previousValue: null,

    justCalculated: false,

    error: false,

    history: []

};


/* =========================================================
   DOM
========================================================= */

const akcalcExpression =
    document.getElementById(
        "akcalcExpression"
    );


const akcalcResult =
    document.getElementById(
        "akcalcResult"
    );


const akcalcKeypad =
    document.getElementById(
        "akcalcKeypad"
    );


const akcalcHistoryList =
    document.getElementById(
        "akcalcHistoryList"
    );


const akcalcClearHistory =
    document.getElementById(
        "akcalcClearHistory"
    );


const akcalcCopy =
    document.getElementById(
        "akcalcCopy"
    );


const akcalcToast =
    document.getElementById(
        "akcalcToast"
    );


/* =========================================================
   CONSTANTS
========================================================= */

const AKCALC_OPERATORS = [
    "+",
    "-",
    "*",
    "/"
];


const AKCALC_OPERATOR_LABELS = {

    "+": "+",

    "-": "−",

    "*": "×",

    "/": "÷"

};


/* =========================================================
   HELPERS
========================================================= */

function akcalcIsOperator(value) {

    return AKCALC_OPERATORS.includes(
        value
    );

}


function akcalcFormatNumber(value) {

    if (
        !Number.isFinite(value)
    ) {

        return "Error";

    }


    const cleanValue =
        Number(
            Number(value).toPrecision(12)
        );


    return String(cleanValue);

}


function akcalcFormatExpression(expression) {

    return expression

        .replaceAll("*", " × ")

        .replaceAll("/", " ÷ ")

        .replaceAll("+", " + ")

        .replaceAll("-", " − ")

        .replace(/\s+/g, " ")

        .trim();

}


function akcalcEscapeHtml(value) {

    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* =========================================================
   DISPLAY
========================================================= */

function akcalcUpdateDisplay() {

    akcalcExpression.textContent =
        akcalcState.expression || "0";


    akcalcResult.textContent =
        akcalcState.currentInput || "0";


    akcalcResult.classList.remove(
        "akcalc-updated"
    );


    requestAnimationFrame(() => {

        akcalcResult.classList.add(
            "akcalc-updated"
        );

    });

}


/* =========================================================
   RESET AFTER ERROR
========================================================= */

function akcalcResetError() {

    if (
        !akcalcState.error
    ) {

        return;

    }


    akcalcState.expression = "";

    akcalcState.currentInput = "0";

    akcalcState.previousValue = null;

    akcalcState.justCalculated = false;

    akcalcState.error = false;

}


/* =========================================================
   INPUT NUMBER
========================================================= */

function akcalcInputNumber(number) {

    akcalcResetError();


    if (
        akcalcState.justCalculated
    ) {

        akcalcState.expression = "";

        akcalcState.currentInput = "0";

        akcalcState.previousValue = null;

        akcalcState.justCalculated = false;

    }


    if (
        akcalcState.currentInput === "0"
    ) {

        akcalcState.currentInput =
            number;

    } else {

        akcalcState.currentInput +=
            number;

    }


    akcalcRebuildExpression();

    akcalcUpdateDisplay();

}


/* =========================================================
   DECIMAL
========================================================= */

function akcalcInputDecimal() {

    akcalcResetError();


    if (
        akcalcState.justCalculated
    ) {

        akcalcState.expression = "";

        akcalcState.currentInput = "0";

        akcalcState.previousValue = null;

        akcalcState.justCalculated = false;

    }


    if (
        akcalcState.currentInput.includes(".")
    ) {

        return;

    }


    akcalcState.currentInput += ".";


    akcalcRebuildExpression();

    akcalcUpdateDisplay();

}


/* =========================================================
   REBUILD EXPRESSION
========================================================= */

function akcalcRebuildExpression() {

    let base =
        akcalcState.expression;


    base =
        base.replace(
            /(-?\d*\.?\d+)$|(\d+\.?\d*)$/,
            ""
        );


    akcalcState.expression =
        base +
        akcalcState.currentInput;

}


/* =========================================================
   OPERATOR
========================================================= */

function akcalcInputOperator(operator) {

    akcalcResetError();


    if (
        akcalcState.justCalculated
    ) {

        akcalcState.expression =
            akcalcState.currentInput;

        akcalcState.justCalculated =
            false;

    }


    let expression =
        akcalcState.expression;


    if (
        !expression
    ) {

        expression =
            akcalcState.currentInput;

    }


    if (
        /[+\-*/]$/.test(expression)
    ) {

        expression =
            expression.slice(
                0,
                -1
            );

    }


    akcalcState.expression =
        expression +
        operator;


    akcalcState.currentInput =
        "0";


    akcalcUpdateDisplay();

}


/* =========================================================
   CLEAR
========================================================= */

function akcalcClear() {

    akcalcState.expression = "";

    akcalcState.currentInput = "0";

    akcalcState.previousValue = null;

    akcalcState.justCalculated = false;

    akcalcState.error = false;

    akcalcUpdateDisplay();

}


/* =========================================================
   BACKSPACE
========================================================= */

function akcalcBackspace() {

    if (
        akcalcState.error
    ) {

        akcalcClear();

        return;

    }


    if (
        akcalcState.justCalculated
    ) {

        akcalcClear();

        return;

    }


    if (
        akcalcState.currentInput.length > 1
    ) {

        akcalcState.currentInput =
            akcalcState.currentInput.slice(
                0,
                -1
            );

    } else {

        akcalcState.currentInput =
            "0";

    }


    akcalcRebuildExpression();

    akcalcUpdateDisplay();

}


/* =========================================================
   SIGN
========================================================= */

function akcalcToggleSign() {

    akcalcResetError();


    if (
        akcalcState.currentInput === "0"
    ) {

        return;

    }


    if (
        akcalcState.currentInput.startsWith("-")
    ) {

        akcalcState.currentInput =
            akcalcState.currentInput.slice(1);

    } else {

        akcalcState.currentInput =
            "-" +
            akcalcState.currentInput;

    }


    akcalcRebuildExpression();

    akcalcUpdateDisplay();

}


/* =========================================================
   PERCENT
========================================================= */

function akcalcPercent() {

    akcalcResetError();


    const value =
        parseFloat(
            akcalcState.currentInput
        );


    if (
        Number.isNaN(value)
    ) {

        return;

    }


    /*
        Standard calculator percentage behavior:

        200 + 10% = 220
        200 - 10% = 180
        200 * 10% = 20
        200 / 10% = 2000
    */

    const expression =
        akcalcState.expression;


    const operatorMatch =
        expression.match(
            /([+\-*/])[^+\-*/]*$/
        );


    if (
        operatorMatch
    ) {

        const operator =
            operatorMatch[1];


        const beforeOperator =
            expression.slice(
                0,
                operatorMatch.index
            );


        const base =
            parseFloat(
                beforeOperator
            );


        if (
            Number.isFinite(base)
        ) {

            if (
                operator === "+" ||
                operator === "-"
            ) {

                akcalcState.currentInput =
                    akcalcFormatNumber(
                        base *
                        (value / 100)
                    );

            } else {

                akcalcState.currentInput =
                    akcalcFormatNumber(
                        value / 100
                    );

            }

        } else {

            akcalcState.currentInput =
                akcalcFormatNumber(
                    value / 100
                );

        }

    } else {

        akcalcState.currentInput =
            akcalcFormatNumber(
                value / 100
            );

    }


    akcalcRebuildExpression();

    akcalcUpdateDisplay();

}


/* =========================================================
   SAFE EXPRESSION EVALUATOR
========================================================= */

function akcalcEvaluate(expression) {

    const cleanExpression =
        expression.trim();


    if (
        !cleanExpression
    ) {

        throw new Error(
            "Empty expression"
        );

    }


    /*
        Only numbers, decimal points,
        spaces and arithmetic operators
        are accepted.
    */

    if (
        !/^[0-9+\-*/.\s]+$/.test(
            cleanExpression
        )
    ) {

        throw new Error(
            "Invalid expression"
        );

    }


    if (
        /[+\-*/.]$/.test(
            cleanExpression
        )
    ) {

        throw new Error(
            "Incomplete expression"
        );

    }


    /*
        The expression has already been
        strictly validated above.
    */

    const result =
        Function(
            `"use strict"; return (${cleanExpression})`
        )();


    if (
        !Number.isFinite(result)
    ) {

        throw new Error(
            "Invalid calculation"
        );

    }


    return result;

}


/* =========================================================
   CALCULATE
========================================================= */

function akcalcCalculate() {

    if (
        akcalcState.error
    ) {

        return;

    }


    let expression =
        akcalcState.expression;


    if (
        !expression
    ) {

        return;

    }


    /*
        Remove trailing operator.
    */

    expression =
        expression.replace(
            /[+\-*/]+$/,
            ""
        );


    if (
        !expression
    ) {

        return;

    }


    try {

        const result =
            akcalcEvaluate(
                expression
            );


        const formattedResult =
            akcalcFormatNumber(
                result
            );


        akcalcAddHistory(
            expression,
            formattedResult
        );


        akcalcState.expression =
            expression +
            " =";


        akcalcState.currentInput =
            formattedResult;


        akcalcState.previousValue =
            result;


        akcalcState.justCalculated =
            true;


        akcalcState.error =
            false;


        akcalcUpdateDisplay();

    }

    catch (error) {

        akcalcState.expression =
            expression;


        akcalcState.currentInput =
            "Error";


        akcalcState.previousValue =
            null;


        akcalcState.justCalculated =
            true;


        akcalcState.error =
            true;


        akcalcUpdateDisplay();

    }

}


/* =========================================================
   HISTORY
========================================================= */

function akcalcAddHistory(
    expression,
    result
) {

    akcalcState.history.unshift({

        expression,

        result,

        time:
            new Date().toLocaleTimeString(
                [],
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            )

    });


    /*
        Keep latest 20 calculations.
    */

    akcalcState.history =
        akcalcState.history.slice(
            0,
            20
        );


    akcalcRenderHistory();

}


/* =========================================================
   RENDER HISTORY
========================================================= */

function akcalcRenderHistory() {

    if (
        !akcalcState.history.length
    ) {

        akcalcHistoryList.innerHTML = `

            <div class="akcalc-history-empty">

                <span>∅</span>

                <p>
                    Calculations will<br>
                    appear here.
                </p>

            </div>

        `;

        return;

    }


    akcalcHistoryList.innerHTML =
        akcalcState.history
            .map(
                (item, index) => `

                    <div
                        class="akcalc-history-item"
                        data-history-index="${index}"
                    >

                        <div>

                            <div class="akcalc-history-expression">
                                ${akcalcEscapeHtml(
                                    akcalcFormatExpression(
                                        item.expression
                                    )
                                )}
                            </div>

                            <small class="akcalc-history-time">
                                ${akcalcEscapeHtml(
                                    item.time
                                )}
                            </small>

                        </div>

                        <div class="akcalc-history-answer">
                            ${akcalcEscapeHtml(
                                item.result
                            )}
                        </div>

                    </div>

                `
            )
            .join("");

}


/* =========================================================
   HISTORY CLICK
========================================================= */

akcalcHistoryList.addEventListener(
    "click",
    event => {

        const item =
            event.target.closest(
                ".akcalc-history-item"
            );


        if (
            !item
        ) {

            return;

        }


        const index =
            Number(
                item.dataset.historyIndex
            );


        const selected =
            akcalcState.history[index];


        if (
            !selected
        ) {

            return;

        }


        akcalcState.expression =
            selected.expression +
            " =";


        akcalcState.currentInput =
            selected.result;


        akcalcState.justCalculated =
            true;


        akcalcState.error =
            false;


        akcalcUpdateDisplay();

    }
);


/* =========================================================
   CLEAR HISTORY
========================================================= */

akcalcClearHistory.addEventListener(
    "click",
    () => {

        akcalcState.history = [];

        akcalcRenderHistory();

    }
);


/* =========================================================
   KEYPAD
========================================================= */

akcalcKeypad.addEventListener(
    "click",
    event => {

        const key =
            event.target.closest(
                ".akcalc-key"
            );


        if (
            !key
        ) {

            return;

        }


        const value =
            key.dataset.value;


        const action =
            key.dataset.action;


        /*
            Numbers / decimal / operators
        */

        if (
            value !== undefined
        ) {

            if (
                /^[0-9]$/.test(value)
            ) {

                akcalcInputNumber(
                    value
                );

                return;

            }


            if (
                value === "."
            ) {

                akcalcInputDecimal();

                return;

            }


            if (
                akcalcIsOperator(value)
            ) {

                akcalcInputOperator(
                    value
                );

                return;

            }

        }


        /*
            Actions
        */

        switch (action) {

            case "clear":

                akcalcClear();

                break;


            case "backspace":

                akcalcBackspace();

                break;


            case "percent":

                akcalcPercent();

                break;


            case "sign":

                akcalcToggleSign();

                break;


            case "equals":

                akcalcCalculate();

                break;

        }

    }
);


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const key =
            event.key;


        /*
            Numbers
        */

        if (
            /^[0-9]$/.test(key)
        ) {

            event.preventDefault();

            akcalcInputNumber(
                key
            );

            return;

        }


        /*
            Decimal
        */

        if (
            key === "."
        ) {

            event.preventDefault();

            akcalcInputDecimal();

            return;

        }


        /*
            Operators
        */

        if (
            AKCALC_OPERATORS.includes(key)
        ) {

            event.preventDefault();

            akcalcInputOperator(
                key
            );

            return;

        }


        /*
            Equals
        */

        if (
            key === "Enter" ||
            key === "="
        ) {

            event.preventDefault();

            akcalcCalculate();

            return;

        }


        /*
            Backspace
        */

        if (
            key === "Backspace"
        ) {

            event.preventDefault();

            akcalcBackspace();

            return;

        }


        /*
            Escape
        */

        if (
            key === "Escape"
        ) {

            event.preventDefault();

            akcalcClear();

            return;

        }


        /*
            Percentage
        */

        if (
            key === "%"
        ) {

            event.preventDefault();

            akcalcPercent();

        }

    }
);


/* =========================================================
   COPY RESULT
========================================================= */

akcalcCopy.addEventListener(
    "click",
    async () => {

        const result =
            akcalcState.currentInput;


        if (
            !result ||
            result === "Error"
        ) {

            return;

        }


        try {

            await navigator.clipboard.writeText(
                result
            );

            akcalcShowToast();

        }

        catch (error) {

            const textarea =
                document.createElement(
                    "textarea"
                );


            textarea.value =
                result;


            textarea.style.position =
                "fixed";


            textarea.style.opacity =
                "0";


            document.body.appendChild(
                textarea
            );


            textarea.select();


            document.execCommand(
                "copy"
            );


            textarea.remove();


            akcalcShowToast();

        }

    }
);


/* =========================================================
   TOAST
========================================================= */

let akcalcToastTimer;


function akcalcShowToast() {

    akcalcToast.classList.add(
        "akcalc-show"
    );


    clearTimeout(
        akcalcToastTimer
    );


    akcalcToastTimer =
        setTimeout(
            () => {

                akcalcToast.classList.remove(
                    "akcalc-show"
                );

            },
            1600
        );

}


/* =========================================================
   INITIALIZE
========================================================= */

akcalcUpdateDisplay();

akcalcRenderHistory();