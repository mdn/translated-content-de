---
title: "TextTrackCue: exit Ereignis"
short-title: exit
slug: Web/API/TextTrackCue/exit_event
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Das **`exit`** Ereignis wird ausgelöst, wenn eine Markierung aufhört, aktiv zu sein.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("exit", (event) => {});

onexit = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel wird `cue1` in der Konsole ausgegeben, wenn es nicht mehr als aktive Markierung angezeigt wird.

```js
cue1.addEventListener("enter", (event) => {
  console.log("Cue 1 has left the building.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
