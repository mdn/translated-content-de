---
title: "MouseEvent: metaKey-Eigenschaft"
short-title: metaKey
slug: Web/API/MouseEvent/metaKey
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`MouseEvent.metaKey`**-Eigenschaft ist ein boolescher Wert, der angibt, ob die <kbd>meta</kbd>-Taste gedrückt war oder nicht, als ein bestimmtes Mausereignis auftrat.

Beachten Sie, dass viele Betriebssysteme spezielle Funktionen an die <kbd>meta</kbd>-Taste binden. Daher kann es sein, dass diese Eigenschaft `false` ist, auch wenn die Taste tatsächlich gedrückt ist.
Unter Windows kann diese Taste beispielsweise das Startmenü öffnen.

> [!NOTE]
> Auf Macintosh-Tastaturen ist diese Taste die <kbd>Befehl</kbd>-Taste (<kbd>⌘</kbd>).
> Auf Windows-Tastaturen ist es die Windows-Taste (<kbd>⊞</kbd>).

## Wert

Ein boolescher Wert, bei dem `true` anzeigt, dass die Taste gedrückt ist, und `false`, dass die Taste _nicht_ gedrückt ist.

## Beispiele

Dieses Beispiel protokolliert die `metaKey`-Eigenschaft, wenn Sie ein {{domxref("Element/click_event", "Klick")}}-Ereignis auslösen.

### HTML

```html
<p>Klicken Sie irgendwo, um die <code>metaKey</code>-Eigenschaft zu testen.</p>
<p id="log"></p>
```

### JavaScript

```js
let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `The meta key is pressed: ${e.metaKey}`;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("MouseEvent") }}
