---
title: "TextTrack: cuechange-Ereignis"
short-title: cuechange
slug: Web/API/TextTrack/cuechange_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebVTT")}}

Das **`cuechange`**-Ereignis wird ausgelöst, wenn sich die aktuell angezeigten Cues eines [`TextTrack`](/de/docs/Web/API/TextTrack) ändern. Das Ereignis wird sowohl auf dem `TextTrack` als auch auf dem [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) ausgelöst, in dem er dargestellt wird, sofern vorhanden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("cuechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncuechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

Mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) können Sie einen Listener für das `cuechange`-Ereignis auf einem `TextTrack` einrichten:

```js
track.addEventListener("cuechange", () => {
  const cues = track.activeCues; // array of current cues
  // …
});
```

Alternativ können Sie die Event-Handler-Eigenschaft `oncuechange` festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `oncuechange` hinzugefügte Event-Listener ersetzt werden:

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
