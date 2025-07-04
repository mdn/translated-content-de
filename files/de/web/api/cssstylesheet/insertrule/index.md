---
title: "CSSStyleSheet: insertRule() Methode"
short-title: insertRule()
slug: Web/API/CSSStyleSheet/insertRule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}

Die **`CSSStyleSheet.insertRule()`**-Methode fügt eine neue [CSS-Regel](/de/docs/Web/API/CSSRule) in das [aktuelle Stylesheet](/de/docs/Web/API/CSSStyleSheet) ein.

> [!NOTE]
> Obwohl `insertRule()` ausschließlich eine Methode von
> [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) ist, wird die Regel tatsächlich in
> `[CSSStyleSheet](/de/docs/Web/API/CSSStyleSheet).cssRules` eingefügt – seine interne
> [`CSSRuleList`](/de/docs/Web/API/CSSRuleList).

## Syntax

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### Parameter

- `rule`

  - : Ein String, der die einzufügende Regel enthält. Was die eingefügte Regel enthalten muss, hängt von ihrem Typ ab:
    - **Für [Regel-Sets](/de/docs/Web/CSS/CSS_syntax/Syntax#css_statements)**, sowohl
      ein [Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) als auch eine Stil-Deklaration.
    - **Für [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)**, sowohl ein
      At-Identifikator als auch der Regelinhalt.

- `index` {{optional_inline}}
  - : Eine positive ganze Zahl, die kleiner oder gleich `stylesheet.cssRules.length` ist und die Position der neu eingefügten Regel in `[CSSStyleSheet](/de/docs/Web/API/CSSStyleSheet).cssRules` darstellt. Der Standardwert ist `0`. (Bei älteren Implementierungen war dies erforderlich. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.)

### Rückgabewert

Der Index der neu eingefügten Regel innerhalb der Regel-Liste des Stylesheets.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` > `[CSSRuleList](/de/docs/Web/API/CSSRuleList).length`.
- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `rule` aufgrund einer CSS-Einschränkung nicht an der angegebenen Position eingefügt werden kann; zum Beispiel: der Versuch, eine {{cssxref("@import")}} At-Regel nach einer Stilregel einzufügen.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn mehr als eine Regel im `rule`-Parameter angegeben wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `rule` {{cssxref("@namespace")}} ist und die Regel-Liste mehr als nur `@import` At-Regeln und/oder `@namespace` At-Regeln enthält.

## Beispiele

### Einfügen einer neuen Regel

Dieses Snippet fügt eine neue Regel an die Spitze meines Stylesheets ein.

```js
myStyle.insertRule("#blanc { color: white }", 0);
```

### Funktion zum Hinzufügen einer Stylesheetregel

```js
/**
 * Add a stylesheet rule to the document (it may be better practice
 * to dynamically change classes, so style information can be kept in
 * genuine stylesheets and avoid adding extra elements to the DOM).
 * Note that an array is needed for declarations and rules since ECMAScript does
 * not guarantee a predictable object iteration order, and since CSS is
 * order-dependent.
 * @param {Array} rules Accepts an array of JSON-encoded declarations
 * @example
addStylesheetRules([
  ['h2', // Also accepts a second argument as an array of arrays instead
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
*/
function addStylesheetRules(rules) {
  const styleEl = document.createElement("style");

  // Append <style> element to <head>
  document.head.appendChild(styleEl);

  // Grab style element's sheet
  const styleSheet = styleEl.sheet;

  for (let rule of rules) {
    let i = 1,
      selector = rule[0],
      propStr = "";
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      i = 0;
    }

    for (; i < rule.length; i++) {
      const prop = rule[i];
      propStr += `${prop[0]}: ${prop[1]}${prop[2] ? " !important" : ""};\n`;
    }

    // Insert CSS Rule
    styleSheet.insertRule(
      `${selector}{${propStr}}`,
      styleSheet.cssRules.length,
    );
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleSheet.deleteRule`](/de/docs/Web/API/CSSStyleSheet/deleteRule)
- [Konstruktionsfähige Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
