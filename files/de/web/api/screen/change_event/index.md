---
title: "Screen: Änderungsevent"
short-title: Änderung
slug: Web/API/Screen/change_event
l10n:
  sourceCommit: e089abbca14964a8ce945135d954cbfd098fd6f7
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`change`**-Ereignis der {{domxref("Screen")}}-Schnittstelle wird auf einem bestimmten Bildschirm ausgelöst, wenn eine oder mehrere der folgenden Eigenschaften geändert werden:

- {{domxref("Screen.width", "width")}}
- {{domxref("Screen.height", "height")}}
- {{domxref("Screen.availWidth", "availWidth")}}
- {{domxref("Screen.availHeight", "availHeight")}}
- {{domxref("Screen.colorDepth", "colorDepth")}}
- {{domxref("Screen.orientation", "orientation")}}

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
const firstScreen = (await window.getScreenDetails()).screens[0];
firstScreen.addEventListener("change", (event) => {
  console.log("The first screen has changed.", event, firstScreen);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
