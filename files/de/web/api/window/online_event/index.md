---
title: "Window: online-Ereignis"
short-title: online
slug: Web/API/Window/online_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`online`**-Ereignis der [`Window`](/de/docs/Web/API/Window)-Schnittstelle wird ausgelöst, wenn der Browser Zugriff auf das Netzwerk erhält und der Wert von [`Navigator.onLine`](/de/docs/Web/API/Navigator/onLine) zu `true` wechselt.

> [!NOTE]
> Dieses Ereignis sollte nicht verwendet werden, um die Erreichbarkeit einer bestimmten Website zu bestimmen. Netzwerkprobleme oder Firewalls können weiterhin verhindern, dass die Website erreicht wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("online", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
ononline = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Aliase für Event-Handler

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `ononline` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

```js
// addEventListener version
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

// ononline version (but note that this replaces other event listeners
// added using ononline, if any)
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
