---
title: "Element: closest() Methode"
short-title: closest()
slug: Web/API/Element/closest
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{APIRef('DOM')}}

Die **`closest()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces durchläuft das Element und seine Eltern (auf das Dokumentwurzel zugehend), bis ein Knoten gefunden wird, der mit dem angegebenen [CSS-Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors) übereinstimmt.

## Syntax

```js-nolint
closest(selectors)
```

### Parameter

- `selectors`
  - : Ein String eines gültigen [CSS-Selektors](/de/docs/Learn/CSS/Building_blocks/Selectors), um das [`Element`](/de/docs/Web/API/Element) und seine Vorfahren zu prüfen.

### Rückgabewert

Das nächste übergeordnete [`Element`](/de/docs/Web/API/Element) oder es selbst, das dem `selectors` entspricht. Wenn kein solches Element vorhanden ist, wird `null` zurückgegeben.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `selectors` kein gültiger CSS-Selektor ist.

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

- In Edge 15-18 wird `document.createElement(tagName).closest(tagName)` `null` zurückgeben, wenn das Element nicht zuerst (direkt oder indirekt) mit dem Kontextobjekt verbunden ist, zum Beispiel dem [`Document`](/de/docs/Web/API/Document)-Objekt im Falle des normalen DOM.

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- Andere [`Element`](/de/docs/Web/API/Element)-Methoden, die Selektoren verwenden: [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector), [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) und [`Element.matches()`](/de/docs/Web/API/Element/matches).
