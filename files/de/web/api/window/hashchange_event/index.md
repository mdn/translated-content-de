---
title: "Window: hashchange Ereignis"
short-title: hashchange
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das **`hashchange`**-Ereignis wird ausgelöst, wenn sich der Fragment-Identifikator der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und diesem folgt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

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
  - : Ein String, der die vorherige URL repräsentiert, von der das Fenster navigiert wurde.

## Aliasnamen für Ereignis-Handler

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onhashchange` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Sie können das `hashchange`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
window.addEventListener(
  "hashchange",
  () => {
    console.log("The hash has changed!");
  },
  false,
);
```

Oder Sie verwenden die `onhashchange`-Ereignis-Handler-Eigenschaft:

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
