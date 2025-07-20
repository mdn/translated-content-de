---
title: "TextTrackCue: enter Ereignis"
short-title: enter
slug: Web/API/TextTrackCue/enter_event
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Das **`enter`** Ereignis wird ausgelöst, wenn ein Treffer aktiv wird. Im Falle von Untertiteln oder einer Bildunterschrift ist dies der Fall, wenn es über dem Medium angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("enter", (event) => { })

onenter = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel wird `cue` in die Konsole ausgegeben, wenn es der aktive Treffer ist.

```js
cue.addEventListener("enter", (event) => {
  console.log("Cue 1 has displayed");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
