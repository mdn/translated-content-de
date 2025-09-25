---
title: "Dokument: hasFocus()-Methode"
short-title: hasFocus()
slug: Web/API/Document/hasFocus
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Die **`hasFocus()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das Dokument oder ein beliebiges Element innerhalb des Dokuments den Fokus hat. Diese Methode kann verwendet werden, um festzustellen, ob das aktive Element in einem Dokument den Fokus hat.

> [!NOTE]
> Wenn Sie ein Dokument betrachten, ist ein Element mit Fokus immer das [aktive Element](/de/docs/Web/API/Document/activeElement) im Dokument, aber ein aktives Element hat nicht unbedingt den Fokus.
> Zum Beispiel hat ein aktives Element innerhalb eines Popup-Fensters, das nicht im Vordergrund ist, keinen Fokus.

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

### Überprüfen, ob das Dokument den Fokus hat

Das folgende Beispiel überprüft, ob das Dokument Fokus hat oder nicht. Eine Funktion namens `checkPageFocus()` aktualisiert ein Absatz-Element abhängig vom Ergebnis von `document.hasFocus()`. Das Öffnen eines neuen Fensters führt dazu, dass das Dokument den Fokus verliert, und das Zurückkehren zum ursprünglichen Fenster führt dazu, dass das Dokument den Fokus wiedererlangt.

```html live-sample___has-focus
<p id="log">Focus check results are shown here.</p>
<button id="newWindow">Open new window</button>
```

```css hidden live-sample___has-focus
body {
  padding: 1rem;
  background: gray;
  text-align: center;
  font: 1.5rem sans-serif;
}
```

```js live-sample___has-focus
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

{{EmbedLiveSample('has-focus', , , , , , , 'allow-popups')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)
- [Verwendung der Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
