---
title: "Dokument: caretPositionFromPoint()-Methode"
short-title: caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
l10n:
  sourceCommit: 90ba95cc125ac547dcefb72b72ff19b25882ea00
---

{{APIRef("CSSOM View")}}

Die **`caretPositionFromPoint()`**-Methode des {{domxref("Document")}}-Interfaces gibt ein {{domxref('CaretPosition')}}-Objekt zurück, das den DOM-Knoten zusammen mit dem Caret und dem Zeichenoffset des Carets innerhalb dieses Knotens enthält.

## Syntax

```js-nolint
caretPositionFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes.
- `y`
  - : Die vertikale Koordinate eines Punktes.

### Rückgabewert

Ein {{domxref('CaretPosition')}}-Objekt.

## Beispiele

Klicken Sie irgendwo in den **Demo**-Absatz unten, um an der Stelle, an der Sie klicken, einen Zeilenumbruch einzufügen. Der Code dafür befindet sich unter der Demo.

### Demo

{{EmbedLiveSample('Examples')}}

Der untenstehende Code überprüft zuerst die Unterstützung von `document.caretPositionFromPoint`, aber falls der Browser dies nicht unterstützt, wird stattdessen {{domxref("Document.caretRangeFromPoint", "document.caretRangeFromPoint")}} geprüft und verwendet.

### JavaScript

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // Verwenden Sie die proprietäre WebKit-Fallback-Methode
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // Keine der Methoden wird unterstützt, nichts tun
    return;
  }
  // Nur TEXT_NODEs teilen
  if (textNode?.nodeType === 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  }
}

let paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint, false);
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "Dieser Browser unterstützt die Standardmethode document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "Dieser Browser unterstützt die nicht standardisierte Methode document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

### HTML

```html hidden
<div id="message">
  Dieser Browser unterstützt weder document.caretRangeFromPoint noch
  document.caretPositionFromPoint
</div>
```

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('CaretPosition')}}
