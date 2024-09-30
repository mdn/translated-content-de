---
title: "Document: hasFocus()-Methode"
short-title: hasFocus()
slug: Web/API/Document/hasFocus
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef}}

Die **`hasFocus()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Dokument oder ein beliebiges Element innerhalb des Dokuments den Fokus hat. Diese Methode kann verwendet werden, um festzustellen, ob das aktive Element in einem Dokument den Fokus hat.

> [!NOTE]
> Beim Betrachten eines Dokuments ist ein Element mit Fokus immer das [aktive Element](/de/docs/Web/API/Document/activeElement) im Dokument, aber ein aktives Element hat nicht unbedingt den Fokus.
> Ein Beispiel hierfür ist ein aktives Element innerhalb eines Popup-Fensters, das nicht im Vordergrund ist und somit keinen Fokus hat.

## Syntax

```js-nolint
hasFocus()
```

### Parameter

Keine.

### Rückgabewert

`false`, wenn das aktive Element im Dokument keinen Fokus hat;
`true`, wenn das aktive Element im Dokument den Fokus hat.

## Beispiele

Das folgende Beispiel prüft, ob das Dokument Fokus hat oder nicht. Eine Funktion namens `checkPageFocus()` aktualisiert ein Absatz-Element abhängig vom Ergebnis von `document.hasFocus()`. Das Öffnen eines neuen Fensters führt dazu, dass das Dokument den Fokus verliert, und das Zurückwechseln zum ursprünglichen Fenster führt dazu, dass das Dokument den Fokus wiedererlangt.

### HTML

```html
<p id="log">Focus check results are shown here.</p>
<button id="newWindow">Open new window</button>
```

```css hidden
body {
  padding: 1rem;
  background: gray;
  text-align: center;
  font-size: 1.5rem;
}
```

### JavaScript

```js
const body = document.querySelector("body");
const log = document.getElementById("log");

function checkDocumentFocus() {
  if (document.hasFocus()) {
    log.textContent = "This document has focus.";
    body.style.background = "white";
  } else {
    log.textContent = "This document does not have focus.";
    body.style.background = "gray";
  }
}

function openWindow() {
  window.open(
    "https://developer.mozilla.org/",
    "MDN",
    "width=640,height=320,left=150,top=150",
  );
}

document.getElementById("newWindow").addEventListener("click", openWindow);
setInterval(checkDocumentFocus, 300);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)
- [Verwendung der Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
