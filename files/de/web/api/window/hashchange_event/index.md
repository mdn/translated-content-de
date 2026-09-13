---
title: "Window: hashchange-Event"
short-title: hashchange
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das **`hashchange`**-Event wird ausgelöst, wenn sich der Fragmentbezeichner der URL geändert hat (der Teil der URL, der mit dem `#`-Symbol beginnt und ihm folgt).

Dieses Event wird nicht ausgelöst, wenn der Hash mit [`history.pushState()`](/de/docs/Web/API/History/pushState) oder [`history.replaceState()`](/de/docs/Web/API/History/replaceState) modifiziert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("hashchange", (event) => { })

onhashchange = (event) => { }
```

## Ereignistyp

Ein [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HashChangeEvent")}}

## Ereignis-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignisbehandlereigenschaft `onhashchange` auch auf folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Sie können das `hashchange`-Event in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
window.addEventListener("hashchange", () => {
  console.log("The hash has changed!");
});
```

Oder verwenden Sie die `onhashchange`-Ereignisbehandlereigenschaft:

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

- [`popstate`](/de/docs/Web/API/Window/popstate_event)-Event
