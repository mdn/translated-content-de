---
title: "Ereignis: defaultPrevented Eigenschaft"
short-title: defaultPrevented
slug: Web/API/Event/defaultPrevented
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`defaultPrevented`** Eigenschaft der {{domxref("Event")}}-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der Aufruf von {{ domxref("Event.preventDefault()") }} das Ereignis abgebrochen hat oder nicht.

## Wert

Ein boolescher Wert, wobei `true` anzeigt, dass die Standardaktion des {{glossary("user agent")}} verhindert wurde, und `false` anzeigt, dass dies nicht der Fall war.

## Beispiel

Dieses Beispiel protokolliert Versuche, Links von zwei {{htmlElement("a")}}-Elementen zu besuchen. JavaScript wird verwendet, um zu verhindern, dass der zweite Link funktioniert.

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