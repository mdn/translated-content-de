---
title: "TrustedTypePolicyFactory: Eigenschaft emptyHTML"
short-title: emptyHTML
slug: Web/API/TrustedTypePolicyFactory/emptyHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`emptyHTML`** Leseeigenschaft der {{domxref("TrustedTypePolicyFactory")}}-Schnittstelle gibt ein {{domxref("TrustedHTML")}}-Objekt zurück, das eine leere Zeichenkette enthält.

Dieses Objekt kann verwendet werden, wenn die Anwendung eine leere Zeichenkette in einen Injection-Sink einfügen muss.

## Wert

Ein {{domxref("TrustedHTML")}}-Objekt.

## Beispiele

Im folgenden Beispiel soll eine leere Zeichenkette in das Element eingefügt werden. Daher ist es nicht notwendig, eine Richtlinie zu erstellen, und die `emptyHTML`-Eigenschaft kann verwendet werden, um das leere Element einzufügen, wenn ein Trusted Types-Objekt erwartet wird.

```js
el.innerHTML = trustedTypes.emptyHTML;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
