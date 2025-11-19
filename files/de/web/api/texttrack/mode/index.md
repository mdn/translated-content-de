---
title: "TextTrack: mode-Eigenschaft"
short-title: mode
slug: Web/API/TextTrack/mode
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("WebVTT")}}

Die **`mode`**-Eigenschaft des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces ist ein Zeichenfolgenwert, der den Modus der Textspur angibt und steuert: `disabled`, `hidden` oder `showing`. Sie können diesen Wert lesen, um den aktuellen Modus zu bestimmen, und Sie können diesen Wert ändern, um die Modi zu wechseln.

Safari erfordert zusätzlich, dass das boolesche Attribut **`default`** auf true gesetzt wird, wenn Sie Ihre eigenen Videoplayer-Steuerelemente implementieren, damit die Untertitel angezeigt werden.

## Wert

Eine Zeichenfolge, die den aktuellen Modus der Spur angibt. Einer von:

- `disabled`
  - : Die Textspur ist derzeit deaktiviert. Obwohl die Anwesenheit der Spur im DOM sichtbar ist, wird sie ansonsten vom User-Agent ignoriert. Keine Cues sind aktiv, es werden keine Ereignisse ausgelöst, und der User-Agent wird nicht versuchen, die Cues der Spur zu erhalten. Dies ist der Standardwert, es sei denn, die Textspur hat das boolesche Attribut [`default`](/de/docs/Web/HTML/Reference/Elements/track#default) spezifiziert, in welchem Fall der Standardwert `showing` ist.
- `hidden`
  - : Die Textspur ist derzeit aktiv, aber die Cues werden nicht angezeigt. Wenn der User-Agent noch nicht versucht hat, die Cues der Spur zu erhalten, wird er dies bald tun (und damit die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues)-Eigenschaft der Spur auffüllen). Der User-Agent behält eine Liste der aktiven Cues (in der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Eigenschaft der Spur) und es werden Ereignisse zu den entsprechenden Zeiten ausgelöst, auch wenn der Text nicht angezeigt wird.
- `showing`
  - : Die Textspur ist derzeit aktiviert und sichtbar. Wenn die Liste der Cues der Spur noch nicht abgerufen wurde, wird dies bald geschehen. Die Liste der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues) wird geführt und Ereignisse werden zu den entsprechenden Zeiten ausgelöst; der Text der Spur wird auch entsprechend den Stileinstellungen und dem [`kind`](/de/docs/Web/API/TextTrack/kind) der Spur gezeichnet. Dies ist der Standardwert, wenn das boolesche Attribut [`default`](/de/docs/Web/HTML/Reference/Elements/track#default) der Textspur angegeben ist.

## Anwendungshinweise

Der Standardwert für `mode` ist `disabled`, es sei denn, das boolesche Attribut [`default`](/de/docs/Web/HTML/Reference/Elements/track#default) ist angegeben, in welchem Fall der Standardwert `showing` ist. Wenn eine Textspur im `disabled`-Zustand geladen ist, wird die entsprechende WebVTT-Datei erst geladen, wenn der Zustand zu `showing` oder `hidden` geändert wird. Auf diese Weise werden das Abrufen der Ressource und die Speichernutzung vermieden, es sei denn, die Cues werden tatsächlich benötigt.

Das bedeutet jedoch, dass, wenn Sie Aktionen in Bezug auf die Cues der Spur ausführen möchten, während Sie beispielsweise das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis behandeln – um einen Aspekt der Cues beim Laden der Seite zu verarbeiten – und der Modus der Spur ursprünglich `disabled` war, Sie den `mode` in `hidden` oder `showing` ändern müssen, um das Laden der Cues auszulösen.

Wenn der Modus `showing` ist, werden Textspuren dargestellt. Das genaue Aussehen und die Art dieser Darstellung variieren je nach dem [`kind`](/de/docs/Web/API/TextTrack/kind) der jeweiligen Textspur. Im Allgemeinen:

- Spuren, deren `kind` `"subtitles"` oder `"captions"` ist, werden mit den Cues über dem Video überlagert.
- Spuren, deren `kind` `"descriptions"` ist, werden in nicht-visueller Form dargestellt (zum Beispiel könnte der Text gesprochen werden, um die Aktion im Video zu beschreiben).
- Spuren, deren `kind` `"chapters"` ist, werden vom User-Agent oder der Website/Anwendung verwendet, um eine Oberfläche zum Navigieren durch die benannten Kapitel zu erstellen und darzustellen, wobei jede Cue in der Liste ein Kapitel im Medium darstellt. Der Benutzer kann dann zum gewünschten Kapitel navigieren, das an der Startposition der Cue beginnt und an der Endposition endet.

## Beispiel

In diesem Beispiel konfigurieren wir die Cues der Textspur so, dass jedes Mal, wenn ein Cue beendet ist, die Videowiedergabe automatisch pausiert. Dies wird erreicht, indem die [`pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseOnExit)-Eigenschaft jeder Cue auf `true` gesetzt wird. Um jedoch sicherzustellen, dass die Cues der Spur verfügbar sind, setzen wir zuerst den `mode` auf `showing`.

```js
let trackElem = document.querySelector("track");
let track = trackElem.track;

track.mode = "showing";

for (const cue of track.cues) {
  cue.pauseOnExit = true;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVTT](/de/docs/Web/API/WebVTT_API)
- [`TextTrack`](/de/docs/Web/API/TextTrack)
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
- [`VTTCue`](/de/docs/Web/API/VTTCue)
- {{HTMLElement("track")}}
- [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)
