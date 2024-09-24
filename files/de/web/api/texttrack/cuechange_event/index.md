---
title: "TextTrack: cuechange-Ereignis"
short-title: cuechange
slug: Web/API/TextTrack/cuechange_event
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Das **`cuechange`**-Ereignis wird ausgelöst, wenn ein {{domxref("TextTrack")}} die aktuell angezeigten Cues geändert hat. Das Ereignis wird sowohl auf dem `TextTrack` als auch auf dem {{domxref("HTMLTrackElement")}}, in dem es präsentiert wird, ausgelöst, falls vorhanden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("cuechange", (event) => {});

oncuechange = (event) => {};
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

Sie können einen Listener für das `cuechange`-Ereignis auf einem `TextTrack` unter Verwendung der Methode {{domxref("EventTarget.addEventListener", "addEventListener()")}} einrichten:

```js
track.addEventListener("cuechange", () => {
  const cues = track.activeCues; // array of current cues
  // …
});
```

Oder Sie können die `oncuechange`-Ereignis-Handler-Eigenschaft setzen:

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

- {{glossary("WebVTT")}}
- Dasselbe Ereignis auf {{domxref("HTMLTrackElement")}}: {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}}
