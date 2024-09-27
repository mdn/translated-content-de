---
title: "VirtualKeyboard: geometrychange Ereignis"
short-title: geometrychange
slug: Web/API/VirtualKeyboard/geometrychange_event
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`geometrychange`** Ereignis des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interfaces wird ausgelöst, wenn die Bildschirmtastatur zwischen den Zuständen "angezeigt" und "versteckt" umgeschaltet wird.

Das `geometrychange` Ereignis ist nützlich, um zu erkennen, wann die Bildschirmtastatur erscheint und verschwindet, sodass Sie das Layout entsprechend anpassen können. Dies ist notwendig, wenn Sie die [Virtual Keyboard API](/de/docs/Web/API/VirtualKeyboard_API) verwenden, um das automatische Anpassen der Größe des Ansichtsfensters durch den Browser beim Anzeigen und Verbergen der Bildschirmtastatur zu deaktivieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {});

navigator.virtualKeyboard.ongeometrychange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Der folgende Codeausschnitt verwendet das `geometrychange` Ereignis, um zu erkennen, wann sich die Geometrie der Bildschirmtastatur ändert, und greift dann auf die [`boundingRect`](/de/docs/Web/API/VirtualKeyboard/boundingRect) Eigenschaft zu, um die Größe und Position der Bildschirmtastatur abzufragen:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
