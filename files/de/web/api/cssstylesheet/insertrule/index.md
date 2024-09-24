---
title: "CSSStyleSheet: Methode insertRule()"
short-title: insertRule()
slug: Web/API/CSSStyleSheet/insertRule
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("CSSOM")}}

Die **`CSSStyleSheet.insertRule()`** Methode fügt eine neue [CSS-Regel](/de/docs/Web/API/CSSRule) in das [aktuelle Stylesheet](/de/docs/Web/API/CSSStyleSheet) ein.

> [!NOTE]
> Obwohl `insertRule()` ausschließlich eine Methode von
> {{domxref("CSSStyleSheet")}} ist, fügt sie die Regel tatsächlich in
> `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` ein — seine interne
> {{domxref("CSSRuleList")}}.

## Syntax

```js-nolint
insertRule(rule)
insertRule(rule, index)
```

### Parameter

- `rule`

  - : Ein String, der die einzufügende Regel enthält. Was die eingefügte
    Regel enthalten muss, hängt von ihrem Typ ab:

    - **Für [Regelsätze](/de/docs/Web/CSS/Syntax#css_statements)**, sowohl
      ein [Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors) als auch eine
      Stil-Deklaration.
    - **Für [At-Regeln](/de/docs/Web/CSS/At-rule)**, sowohl ein
      At-Identifier als auch der Regelinhalt.

- `index` {{optional_inline}}
  - : Eine positive ganze Zahl, die kleiner oder gleich `stylesheet.cssRules.length` ist und die Position der neu eingefügten Regel in
    `{{domxref("CSSStyleSheet", "", "", "1")}}.cssRules` repräsentiert. Der Standardwert ist `0`. (In älteren Implementierungen war dies erforderlich. Einzelheiten finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität)).

### Rückgabewert

Der Index der neu eingefügten Regel innerhalb der Regel-Liste des Stylesheets.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `index` > `{{domxref("CSSRuleList", "", "", "1")}}.length`.
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `rule` aufgrund einer CSS-Beschränkung nicht an `index` `0` eingefügt werden kann.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn mehr als eine Regel im Parameter `rule` angegeben wird.
- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, eine {{cssxref("@import")}} At-Regel nach einer Stilregel einzufügen.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `rule` {{cssxref("@namespace")}} ist und die Regel-Liste mehr als nur `@import` At-Regeln und/oder `@namespace` At-Regeln enthält.

## Beispiele

### Einfügen einer neuen Regel

Dieses Code-Snippet fügt eine neue Regel an den Anfang meines Stylesheets hinzu.

```js
myStyle.insertRule("#blanc { color: white }", 0);
```

### Funktion zum Hinzufügen einer Stylesheet-Regel

```js
/**
 * Fügt dem Dokument eine Stylesheet-Regel hinzu (es kann bessere Praxis sein,
 * Klassen dynamisch zu ändern, sodass Stilinformationen in
 * echten Stylesheets aufbewahrt werden und das Hinzufügen zusätzlicher Elemente zum DOM vermieden wird).
 * Beachten Sie, dass ein Array für Deklarationen und Regeln benötigt wird, da ECMAScript keine
 * vorhersehbare Objektiterationsreihenfolge garantiert und CSS
 * reihenfolgeabhängig ist.
 * @param {Array} rules Akzeptiert ein Array von JSON-codierten Deklarationen
 * @example
addStylesheetRules([
  ['h2', // Akzeptiert auch ein zweites Argument als Array von Arrays
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' für !wichtige Regeln
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
*/
function addStylesheetRules(rules) {
  const styleEl = document.createElement("style");

  // Fügen Sie das <style> Element zum <head> hinzu
  document.head.appendChild(styleEl);

  // Erhalten Sie das Stylesheet des Stil-Elements
  const styleSheet = styleEl.sheet;

  for (let i = 0; i < rules.length; i++) {
    let j = 1,
      rule = rules[i],
      selector = rule[0],
      propStr = "";
    // Wenn das zweite Argument einer Regel ein Array von Arrays ist, korrigieren Sie unsere Variablen.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      j = 0;
    }

    for (let pl = rule.length; j < pl; j++) {
      const prop = rule[j];
      propStr += `${prop[0]}: ${prop[1]}${prop[2] ? " !important" : ""};\n`;
    }

    // Fügen Sie die CSS-Regel hinzu
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

- {{domxref("CSSStyleSheet.deleteRule")}}
- [Konstruktive Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
