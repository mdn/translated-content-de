---
title: "Document: caretPositionFromPoint()-Methode"
short-title: caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
l10n:
  sourceCommit: 90ba95cc125ac547dcefb72b72ff19b25882ea00
---

{{APIRef("CSSOM View")}}

Die **`caretPositionFromPoint()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt zurück, das den DOM-Knoten sowie die Einfügemarke und den Zeichenoffset der Einfügemarke innerhalb dieses Knotens enthält.

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

Ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt.

## Beispiele

Klicken Sie irgendwo im **Demo**-Absatz unten, um an der Stelle, an der Sie klicken, einen Zeilenumbruch einzufügen. Der Code dafür befindet sich unterhalb der Demo.

### Demo

{{EmbedLiveSample('Examples')}}

Der untenstehende Code prüft zunächst die Unterstützung von `document.caretPositionFromPoint`, aber wenn der Browser dies nicht unterstützt, wird stattdessen [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) geprüft und verwendet.

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
    // Use WebKit-proprietary fallback method
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // Neither method is supported, do nothing
    return;
  }
  // Only split TEXT_NODEs
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
    "This browser supports the standard document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "This browser supports the non-standard document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

### HTML

```html hidden
<div id="message">
  This browser supports neither document.caretRangeFromPoint nor
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

- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
