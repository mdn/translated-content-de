---
title: "TrustedTypePolicyFactory: emptyHTML-Eigenschaft"
short-title: emptyHTML
slug: Web/API/TrustedTypePolicyFactory/emptyHTML
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`emptyHTML`**-Schreibgeschützte Eigenschaft der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Schnittstelle gibt ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt zurück, das einen leeren String enthält.

Dieses Objekt kann verwendet werden, wenn die Anwendung einen leeren String in ein Injektionsziel einsetzen muss.

## Wert

Ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt.

## Beispiele

Im folgenden Beispiel soll ein leerer String in das Element eingesetzt werden. Daher ist es nicht notwendig, eine Richtlinie zu erstellen, und die `emptyHTML`-Eigenschaft kann verwendet werden, um das leere Element einzufügen, wenn ein Trusted Types-Objekt erwartet wird.

```js
el.innerHTML = trustedTypes.emptyHTML;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
