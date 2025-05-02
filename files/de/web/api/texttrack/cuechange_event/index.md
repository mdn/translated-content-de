---
title: "TextTrack: cuechange Ereignis"
short-title: cuechange
slug: Web/API/TextTrack/cuechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebVTT")}}

Das **`cuechange`**-Ereignis wird ausgelöst, wenn ein [`TextTrack`](/de/docs/Web/API/TextTrack) die aktuell angezeigten Cues geändert hat. Das Ereignis wird sowohl auf dem `TextTrack` als auch dem [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) ausgelöst, in dem es präsentiert wird, falls vorhanden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cuechange", (event) => { })

oncuechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können einen Listener für das `cuechange`-Ereignis auf einem `TextTrack` mithilfe der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

```js
track.addEventListener("cuechange", () => {
  const cues = track.activeCues; // array of current cues
  // …
});
```

Oder Sie können die `oncuechange`-Ereignishandler-Eigenschaft setzen:

```js
track.oncuechange = (event) => {
  let cues = track.activeCues; // array of current cues
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("WebVTT", "WebVTT")}}
- Dasselbe Ereignis auf [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement): [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)
