---
title: "TextTrack: cuechange Ereignis"
short-title: cuechange
slug: Web/API/TextTrack/cuechange_event
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Das **`cuechange`**-Ereignis wird ausgelöst, wenn ein [`TextTrack`](/de/docs/Web/API/TextTrack) die derzeit angezeigten Cues geändert hat. Das Ereignis wird sowohl auf dem `TextTrack` als auch auf dem [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) ausgelöst, in dem es präsentiert wird, falls vorhanden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("cuechange", (event) => {});

oncuechange = (event) => {};
```

## Eventtyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Sie können einen Listener für das `cuechange`-Ereignis auf einem `TextTrack` mithilfe der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

```js
track.addEventListener("cuechange", () => {
  const cues = track.activeCues; // array of current cues
  // …
});
```

Oder Sie können die `oncuechange` Ereignis-Handler-Eigenschaft setzen:

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
