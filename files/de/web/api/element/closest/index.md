---
title: "Element: closest() Methode"
short-title: closest()
slug: Web/API/Element/closest
l10n:
  sourceCommit: a659a31a9dda9d90cf4df1ed5a7ef216d0ad56ba
---

{{APIRef("DOM")}}

Die **`closest()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle traversiert das Element und seine Eltern (in Richtung des Wurzelelements des Dokuments), bis sie einen Knoten findet, der mit dem angegebenen [CSS-Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) übereinstimmt.

## Syntax

```js-nolint
closest(selectors)
```

### Parameter

- `selectors`
  - : Ein String mit gültigen [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), um das [`Element`](/de/docs/Web/API/Element) und seine Vorfahren zu überprüfen.

### Rückgabewert

Das nächste übergeordnete [`Element`](/de/docs/Web/API/Element) oder es selbst, das mit den `selectors` übereinstimmt. Wenn kein solches Element vorhanden ist, wird `null` zurückgegeben.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `selectors` kein gültiger CSS-Selektor sind.

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

### Kompatibilitätshinweise

- In Edge 15-18 wird `document.createElement(tagName).closest(tagName)`
  `null` zurückgeben, wenn das Element nicht zuerst (direkt oder
  indirekt) mit dem Kontextobjekt verbunden ist, zum Beispiel dem [`Document`](/de/docs/Web/API/Document) Objekt im Fall des normalen DOMs.

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- Andere Methoden der [`Element`](/de/docs/Web/API/Element) Schnittstelle, die Selektoren verwenden: [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector), [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll), und [`Element.matches()`](/de/docs/Web/API/Element/matches).
