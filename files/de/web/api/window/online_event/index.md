---
title: "Fenster: online-Ereignis"
short-title: online
slug: Web/API/Window/online_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das **`online`**-Ereignis des [`Window`](/de/docs/Web/API/Window)-Interfaces wird ausgelöst, wenn der Browser Zugang zum Netzwerk erhält und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) auf `true` wechselt.

> [!NOTE]
> Dieses Ereignis sollte nicht verwendet werden, um die Verfügbarkeit einer bestimmten Website zu bestimmen. Netzwerkprobleme oder Firewalls könnten dennoch verhindern, dass die Website erreichbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("online", (event) => { })

ononline = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Ereignishandler-Aliase

Zusätzlich zum `Window`-Interface ist die Ereignis-Handler-Eigenschaft `ononline` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

```js
// addEventListener version
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

// ononline version
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offline`](/de/docs/Web/API/Window/offline_event)
