---
title: "Event: defaultPrevented-Eigenschaft"
short-title: defaultPrevented
slug: Web/API/Event/defaultPrevented
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`defaultPrevented`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob der Aufruf von [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abgebrochen hat oder nicht.

## Wert

Ein boolescher Wert, wobei `true` anzeigt, dass die Standardaktion des {{Glossary("user_agent", "user agent")}} verhindert wurde, und `false`, dass sie nicht verhindert wurde.

## Beispiel

Dieses Beispiel protokolliert Versuche, Links von zwei {{htmlElement("a")}}-Elementen zu besuchen. JavaScript wird verwendet, um den zweiten Link funktionsunfähig zu machen.

### HTML

```html
<p><a id="link1" href="#link1">Visit link 1</a></p>
<p><a id="link2" href="#link2">Try to visit link 2</a> (you can't)</p>
<p id="log"></p>
```

### JavaScript

```js
function stopLink(event) {
  event.preventDefault();
}

function logClick(event) {
  const log = document.getElementById("log");

  if (event.target.tagName === "A") {
    log.innerText = event.defaultPrevented
      ? `Sorry, but you cannot visit this link!\n${log.innerText}`
      : `Visiting link…\n${log.innerText}`;
  }
}

const a = document.getElementById("link2");
a.addEventListener("click", stopLink);
document.addEventListener("click", logClick);
```

### Ergebnis

{{EmbedLiveSample("Example")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
