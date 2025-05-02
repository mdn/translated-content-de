---
title: "TextTrackCue: enter Ereignis"
short-title: enter
slug: Web/API/TextTrackCue/enter_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebVTT")}}

Das **`enter`** Ereignis wird ausgelöst, wenn ein `cue` aktiv wird. Im Fall von Untertiteln oder einer Bildunterschrift passiert dies, wenn sie über dem Medium angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("enter", (event) => { })

onenter = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel wird `cue1` bei Aktivierung des Cues in der Konsole ausgegeben.

```js
cue1.addEventListener("enter", (event) => {
  console.log("Cue 1 has displayed");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
