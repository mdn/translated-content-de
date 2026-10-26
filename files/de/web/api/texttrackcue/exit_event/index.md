---
title: "TextTrackCue: exit-Ereignis"
short-title: exit
slug: Web/API/TextTrackCue/exit_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("WebVTT")}}

Das **`exit`**-Ereignis wird ausgelöst, wenn ein Cue nicht mehr aktiv ist.

## Syntax

Verwenden Sie den Ereignisnamen mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("exit", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onexit = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel gibt `cue` eine Meldung in der Konsole aus, wenn es nicht mehr als aktives Cue angezeigt wird.

```js
cue.addEventListener("enter", (event) => {
  console.log("Cue 1 has left the building.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
