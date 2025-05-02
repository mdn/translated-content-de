---
title: "TextTrackCue: exit Ereignis"
short-title: exit
slug: Web/API/TextTrackCue/exit_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebVTT")}}

Das **`exit`**-Ereignis wird ausgelöst, wenn ein Cue nicht mehr aktiv ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("exit", (event) => { })

onexit = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel wird `cue1` auf die Konsole ausgegeben, wenn es nicht mehr als aktiver Cue angezeigt wird.

```js
cue1.addEventListener("enter", (event) => {
  console.log("Cue 1 has left the building.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
