---
title: "TextTrackCue: enter-Ereignis"
short-title: enter
slug: Web/API/TextTrackCue/enter_event
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Das **`enter`**-Ereignis wird ausgelöst, wenn eine Cue aktiv wird. Im Falle von Untertiteln oder einer Bildunterschrift ist dies der Zeitpunkt, an dem sie über dem Medium angezeigt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("enter", (event) => {});

onenter = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel wird `cue1` in die Konsole geschrieben, wenn es die aktive Cue ist.

```js
cue1.addEventListener("enter", (event) => {
  console.log("Cue 1 has displayed");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
