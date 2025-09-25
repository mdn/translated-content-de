---
title: "Element: Methode closest()"
short-title: closest()
slug: Web/API/Element/closest
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Die **`closest()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle durchläuft das Element und seine Eltern (in Richtung Dokumentwurzel), bis sie einen Knoten findet, der dem angegebenen [CSS-Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) entspricht.

## Syntax

```js-nolint
closest(selectors)
```

### Parameter

- `selectors`
  - : Ein String gültiger [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), um das [`Element`](/de/docs/Web/API/Element) und seine Vorfahren daraufhin zu überprüfen.

### Rückgabewert

Das nächste übergeordnete [`Element`](/de/docs/Web/API/Element) oder das Element selbst, das den `selectors` entspricht. Wenn kein solches Element vorhanden ist, `null`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft eine Ausnahme, wenn die `selectors` kein gültiger CSS-Selektor sind.

## Beispiele

### HTML

```html
<article>
  <div id="div-01">
    Here is div-01
    <div id="div-02">
      Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
const el = document.getElementById("div-03");

// the closest ancestor with the id of "div-02"
console.log(el.closest("#div-02")); // <div id="div-02">

// the closest ancestor which is a div in a div
console.log(el.closest("div div")); // <div id="div-03">

// the closest ancestor which is a div and has a parent article
console.log(el.closest("article > div")); // <div id="div-01">

// the closest ancestor which is not a div
console.log(el.closest(":not(div)")); // <article>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- In Edge 15-18 wird `document.createElement(tagName).closest(tagName)` `null` zurückgeben, wenn das Element nicht zuerst direkt oder indirekt mit dem Kontextobjekt verbunden ist, z. B. dem [`Document`](/de/docs/Web/API/Document)-Objekt im Fall des normalen DOM.

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- Andere Methoden der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, die Selektoren benötigen: [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector), [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) und [`Element.matches()`](/de/docs/Web/API/Element/matches).
