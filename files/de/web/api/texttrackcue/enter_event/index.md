---
title: "TextTrackCue: enter-Ereignis"
short-title: enter
slug: Web/API/TextTrackCue/enter_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("WebVTT")}}

Das **`enter`**-Ereignis wird ausgelöst, wenn ein Cue aktiv wird. Bei Untertiteln oder Bildunterschriften geschieht dies, wenn sie über dem Medium angezeigt werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("enter", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onenter = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiel

Im folgenden Beispiel gibt `cue` eine Meldung in der Konsole aus, wenn der Cue aktiv ist.

```js
cue.addEventListener("enter", (event) => {
  console.log("Cue 1 has displayed");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
