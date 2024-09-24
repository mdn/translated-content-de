---
title: "Dokument: hasFocus()-Methode"
short-title: hasFocus()
slug: Web/API/Document/hasFocus
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef}}

Die **`hasFocus()`**-Methode des {{domxref("Document")}}-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Dokument oder ein beliebiges Element im Dokument den Fokus hat.
Diese Methode kann verwendet werden, um festzustellen, ob das aktive Element in einem Dokument den Fokus hat.

> [!NOTE]
> Beim Anzeigen eines Dokuments ist ein Element mit Fokus immer das [aktive Element](/de/docs/Web/API/Document/activeElement) im Dokument, aber ein aktives Element hat nicht notwendigerweise Fokus.
> Zum Beispiel hat ein aktives Element innerhalb eines Popup-Fensters, das nicht im Vordergrund ist, keinen Fokus.

## Syntax

```js-nolint
hasFocus()
```

### Parameter

Keine.

### Rückgabewert

`false`, wenn das aktive Element im Dokument keinen Fokus hat;
`true`, wenn das aktive Element im Dokument Fokus hat.

## Beispiele

Das folgende Beispiel überprüft, ob das Dokument Fokus hat oder nicht.
Eine Funktion namens `checkPageFocus()` aktualisiert ein Absatz-Element basierend auf dem Ergebnis von `document.hasFocus()`.
Das Öffnen eines neuen Fensters führt dazu, dass das Dokument den Fokus verliert, und das Zurückschalten zum ursprünglichen Fenster führt dazu, dass das Dokument den Fokus wiedererlangt.

### HTML

```html
<p id="log">Die Fokusergebnisse werden hier angezeigt.</p>
<button id="newWindow">Neues Fenster öffnen</button>
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
    log.textContent = "Dieses Dokument hat den Fokus.";
    body.style.background = "white";
  } else {
    log.textContent = "Dieses Dokument hat keinen Fokus.";
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

- {{domxref("Document.activeElement")}}
- [Verwendung der Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
