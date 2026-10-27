---
title: "HTMLTrackElement: cuechange-Ereignis"
short-title: cuechange
slug: Web/API/HTMLTrackElement/cuechange_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("WebVTT")}}

Das **`cuechange`**-Ereignis wird ausgelöst, wenn sich die aktuell angezeigten Cues eines [`TextTrack`](/de/docs/Web/API/TextTrack) ändern. Das Ereignis wird sowohl auf dem `TextTrack` als auch auf dem [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) ausgelöst, in dem er gegebenenfalls dargestellt wird.

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

Der zugrunde liegende [`TextTrack`](/de/docs/Web/API/TextTrack), auf den die Eigenschaft [`track`](/de/docs/Web/API/HTMLTrackElement/track) verweist, empfängt jedes Mal ein `cuechange`-Ereignis, wenn sich der aktuell angezeigte Cue ändert. Dies geschieht auch dann, wenn der Track keinem Medienelement zugeordnet ist.

Wenn der Track einem Medienelement zugeordnet ist, indem das {{HTMLElement("track")}}-Element als Kindelement des {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Elements verwendet wird, wird das `cuechange`-Ereignis auch an das [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) gesendet.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Alternativ können Sie den `oncuechange`-Event-Handler verwenden. Beachten Sie jedoch, dass dadurch andere gegebenenfalls über `oncuechange` hinzugefügte Event-Listener ersetzt werden:

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("WebVTT", "WebVTT")}}
- Dasselbe Ereignis auf [`TextTrack`](/de/docs/Web/API/TextTrack): [`cuechange`](/de/docs/Web/API/TextTrack/cuechange_event)
