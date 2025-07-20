---
title: "TextTrackCue: exit-Ereignis"
short-title: exit
slug: Web/API/TextTrackCue/exit_event
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Das **`exit`**-Ereignis wird ausgelöst, wenn eine Textspur («cue») nicht mehr aktiv ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("exit", (event) => { })

onexit = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel wird `cue` in die Konsole ausgegeben, wenn es nicht mehr als aktive Textspur angezeigt wird.

```js
cue.addEventListener("enter", (event) => {
  console.log("Cue 1 has left the building.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
