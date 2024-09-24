---
title: "Window: online-Ereignis"
short-title: online
slug: Web/API/Window/online_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Das **`online`**-Ereignis des {{domxref("Window")}}-Interfaces wird ausgelöst, wenn der Browser Zugang zum Netzwerk erhält und der Wert von {{domxref("Navigator.onLine")}} auf `true` wechselt.

> [!NOTE]
> Dieses Ereignis sollte nicht verwendet werden, um die Verfügbarkeit einer bestimmten Website zu bestimmen. Netzwerkprobleme oder Firewalls können weiterhin den Zugriff auf die Website verhindern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("online", (event) => {});
ononline = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Ereignis-Handler-Alternativen

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `ononline` auch bei den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Beispiele

```js
// addEventListener Version
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

// ononline Version
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
