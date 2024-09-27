---
title: "Window: hashchange-Ereignis"
short-title: hashchange
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das **`hashchange`** Ereignis wird ausgelöst, wenn sich der Fragmentidentifier der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und ihm folgt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("hashchange", (event) => {});
onhashchange = (event) => {};
```

## Ereignistyp

Ein [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HashChangeEvent")}}

## Ereigniseigenschaften

- [`HashChangeEvent.newURL`](/de/docs/Web/API/HashChangeEvent/newURL) {{ReadOnlyInline}}
  - : Ein String, der die neue URL darstellt, zu der das Fenster navigiert.
- [`HashChangeEvent.oldURL`](/de/docs/Web/API/HashChangeEvent/oldURL) {{ReadOnlyInline}}
  - : Ein String, der die vorherige URL darstellt, von der das Fenster navigiert wurde.

## Ereignishandler-Aliasse

Zusätzlich zum `Window`-Interface ist die Ereignishandler-Eigenschaft `onhashchange` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Sie können das `hashchange` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

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
