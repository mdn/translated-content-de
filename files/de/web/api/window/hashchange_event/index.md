---
title: "Window: hashchange-Ereignis"
short-title: hashchange
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`hashchange`**-Ereignis wird ausgelöst, wenn sich der Fragmentbezeichner der URL ändert (der Teil der URL, der mit dem Symbol `#` beginnt und darauf folgt).

Dieses Ereignis wird nicht ausgelöst, wenn der Hash mit [`history.pushState()`](/de/docs/Web/API/History/pushState) oder [`history.replaceState()`](/de/docs/Web/API/History/replaceState) geändert wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("hashchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onhashchange = (event) => { }
```

## Ereignistyp

Ein [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HashChangeEvent")}}

## Aliase für Event-Handler

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onhashchange` auch für die folgenden Ziele verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Sie können das `hashchange`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
window.addEventListener("hashchange", () => {
  console.log("The hash has changed!");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onhashchange`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onhashchange` hinzugefügte Event-Listener ersetzt werden:

```js
function locationHashChanged() {
  if (location.hash === "#cool-feature") {
    console.log("You're visiting a cool feature!");
  }
}

window.onhashchange = locationHashChanged;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis
