---
title: "Element: Methode closest()"
short-title: closest()
slug: Web/API/Element/closest
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{APIRef('DOM')}}

Die **`closest()`**-Methode der {{domxref("Element")}}-Schnittstelle durchläuft das Element und seine Eltern (in Richtung des Dokumentenwurzels), bis sie einen Knoten findet, der dem angegebenen [CSS-Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors) entspricht.

## Syntax

```js-nolint
closest(selectors)
```

### Parameter

- `selectors`
  - : Ein String eines gültigen [CSS-Selektors](/de/docs/Learn/CSS/Building_blocks/Selectors), um das {{domxref("Element")}} und seine Vorfahren zu vergleichen.

### Rückgabewert

Das nächste übergeordnete {{domxref("Element")}} oder das Element selbst, das den `selectors` entspricht. Wenn es kein solches Element gibt, `null`.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die `selectors` kein gültiger CSS-Selektor sind.

## Beispiele

### HTML

```html
<article>
  <div id="div-01">
    Hier ist div-01
    <div id="div-02">
      Hier ist div-02
      <div id="div-03">Hier ist div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
const el = document.getElementById("div-03");

// der nächste Vorfahre mit der ID "div-02"
console.log(el.closest("#div-02")); // <div id="div-02">

// der nächste Vorfahre, der ein div in einem div ist
console.log(el.closest("div div")); // <div id="div-03">

// der nächste Vorfahre, der ein div ist und ein Eltern-Artikel hat
console.log(el.closest("article > div")); // <div id="div-01">

// der nächste Vorfahre, der kein div ist
console.log(el.closest(":not(div)")); // <article>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- In Edge 15-18 wird `document.createElement(tagName).closest(tagName)`
  `null` zurückgeben, wenn das Element nicht zuerst (direkt oder
  indirekt) mit dem Kontextobjekt verbunden ist, zum Beispiel dem {{domxref("Document")}}-Objekt im
  Fall des normalen DOM.

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- Weitere {{domxref("Element")}}-Methoden, die Selektoren verwenden: {{domxref("Element.querySelector()")}}, {{domxref("Element.querySelectorAll()")}} und {{domxref("Element.matches()")}}.
