---
title: "TextTrackCue: exit-Ereignis"
short-title: exit
slug: Web/API/TextTrackCue/exit_event
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Das **`exit`**-Ereignis wird ausgelöst, wenn eine Cue nicht mehr aktiv ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("exit", (event) => {});

onexit = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel gibt `cue1` eine Ausgabe in der Konsole aus, wenn es nicht mehr als aktives Cue angezeigt wird.

```js
cue1.addEventListener("enter", (event) => {
  console.log("Cue 1 has left the building.");
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
