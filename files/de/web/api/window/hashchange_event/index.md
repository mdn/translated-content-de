---
title: "Window: hashchange-Ereignis"
short-title: hashchange
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das **`hashchange`**-Ereignis wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und ihm folgt).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("hashchange", (event) => {});
onhashchange = (event) => {};
```

## Ereignistyp

Ein {{domxref("HashChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("HashChangeEvent")}}

## Ereigniseigenschaften

- {{domxref("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : Ein String, der die neue URL repräsentiert, zu der das Fenster navigiert.
- {{domxref("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : Ein String, der die vorherige URL repräsentiert, von der das Fenster aus navigiert wurde.

## Ereignishandler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignishandler-Eigenschaft `onhashchange` auch auf den folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Beispiele

Sie können das `hashchange`-Ereignis in einer {{domxref("EventTarget/addEventListener", "addEventListener")}}-Methode verwenden:

```js
window.addEventListener(
  "hashchange",
  () => {
    console.log("The hash has changed!");
  },
  false,
);
```

Oder verwenden Sie die `onhashchange`-Ereignishandler-Eigenschaft:

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

- {{domxref("Window/popstate_event", "popstate")}}-Ereignis
