---
title: "Fenster: hashchange Ereignis"
short-title: hashchange
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: 4fcf580f28adc7852f9ae08fc437d0974d5e0dd9
---

{{APIRef}}

Das **`hashchange`** Ereignis wird ausgelöst, wenn sich der Fragmentbezeichner der URL ändert (der Teil der URL, der mit dem `#`-Symbol beginnt und diesem folgt).

Dieses Ereignis wird nicht ausgelöst, wenn der Hash mit [`history.pushState()`](/de/docs/Web/API/History/pushState) oder [`history.replaceState()`](/de/docs/Web/API/History/replaceState) geändert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("hashchange", (event) => {});
onhashchange = (event) => {};
```

## Ereignistyp

Ein [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HashChangeEvent")}}

## Ereigniseigenschaften

- [`HashChangeEvent.newURL`](/de/docs/Web/API/HashChangeEvent/newURL) {{ReadOnlyInline}}
  - : Ein String, der die neue URL repräsentiert, zu der das Fenster navigiert.
- [`HashChangeEvent.oldURL`](/de/docs/Web/API/HashChangeEvent/oldURL) {{ReadOnlyInline}}
  - : Ein String, der die vorherige URL repräsentiert, von der aus das Fenster navigiert wurde.

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onhashchange` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Sie können das `hashchange` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
window.addEventListener(
  "hashchange",
  () => {
    console.log("The hash has changed!");
  },
  false,
);
```

Oder die `onhashchange` Ereignishandler-Eigenschaft verwenden:

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

- [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis
