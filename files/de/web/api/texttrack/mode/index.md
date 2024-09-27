---
title: "TextTrack: modus Eigenschaft"
short-title: modus
slug: Web/API/TextTrack/mode
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebVTT")}}

Die **`mode`**-Eigenschaft der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle ist ein String, der den Modus der Textspur angibt und steuert: `disabled`, `hidden` oder `showing`. Sie können diesen Wert lesen, um den aktuellen Modus zu bestimmen, und Sie können diesen Wert ändern, um den Modus zu wechseln.

Safari erfordert zusätzlich das Setzen des **`default`**-Boolean-Attributs auf true, wenn Sie Ihre eigenen Videoplayer-Steuerelemente implementieren, damit die Untertitel angezeigt werden.

### Wert

Ein String, der den aktuellen Modus der Spur angibt. Einer der folgenden:

- `disabled`
  - : Die Textspur ist derzeit deaktiviert. Während die Existenz der Spur im DOM sichtbar ist, ignoriert der Benutzeragent sie sonst. Es sind keine Hinweise aktiv, es werden keine Ereignisse ausgelöst und der Benutzeragent wird nicht versuchen, die Hinweise der Spur zu erhalten. Dies ist der Standardwert, es sei denn, die Textspur hat das [`default`](/de/docs/Web/HTML/Element/track#default) Boolean-Attribut angegeben, in diesem Fall ist der Standard `showing`.
- `hidden`
  - : Die Textspur ist derzeit aktiv, aber die Hinweise werden nicht angezeigt. Wenn der Benutzeragent noch nicht versucht hat, die Hinweise der Spur zu erhalten, wird er dies bald tun (und dadurch die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues)-Eigenschaft der Spur befüllen). Der Benutzeragent führt eine Liste der aktiven Hinweise (in der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues)-Eigenschaft der Spur) und Ereignisse werden zu den entsprechenden Zeiten ausgelöst, auch wenn der Text nicht angezeigt wird.
- `showing`
  - : Die Textspur ist derzeit aktiviert und sichtbar. Wenn die Liste der Hinweise der Spur noch nicht abgerufen wurde, wird dies bald geschehen. Die Liste der [`activeCues`](/de/docs/Web/API/TextTrack/activeCues) wird gepflegt und Ereignisse werden zu den entsprechenden Zeiten ausgelöst; der Text der Spur wird auch entsprechend der Formatierung und dem [`kind`](/de/docs/Web/API/TextTrack/kind) der Spur angezeigt. Dies ist der Standardwert, wenn das [`default`](/de/docs/Web/HTML/Element/track#default) Boolean-Attribut der Textspur angegeben ist.

## Verwendungshinweise

Der Standardmodus ist `disabled`, es sei denn, das [`default`](/de/docs/Web/HTML/Element/track#default) Boolean-Attribut ist angegeben, in welchem Fall der Standardmodus `showing` ist. Wenn eine Textspur im `disabled`-Zustand geladen wird, wird die entsprechende WebVTT-Datei nicht geladen, bis sich der Zustand zu `showing` oder `hidden` ändert. Auf diese Weise werden das Abrufen von Ressourcen und die Speichernutzung vermieden, es sei denn, die Hinweise werden tatsächlich benötigt.

Das bedeutet jedoch, dass Sie, wenn Sie Aktionen durchführen möchten, die die Hinweise der Spur betreffen, während Sie beispielsweise das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis behandeln, um einen Aspekt der Hinweise beim Laden der Seite zu verarbeiten, und der Spurmodus ursprünglich `disabled` war, den `mode` auf entweder `hidden` oder `showing` ändern müssen, um das Laden der Hinweise auszulösen.

Wenn der Modus `showing` ist, werden die Textspuren ausgeführt. Das genaue Erscheinungsbild und die Art dieser Ausführung variieren je nach [`kind`](/de/docs/Web/API/TextTrack/kind) jeder Textspur. Im Allgemeinen:

- Spuren, deren `kind` `"subtitles"` oder `"captions"` ist, werden mit den Hinweisen über das Video gelegt.
- Spuren, deren `kind` `"descriptions"` ist, werden in einer nicht-visuellen Form präsentiert (zum Beispiel könnte der Text gesprochen werden, um die Handlung im Video zu beschreiben).
- Spuren, deren `kind` `"chapters"` ist, werden vom Benutzeragent oder der Website oder Web-App verwendet, um eine Schnittstelle zum Navigieren der benannten Kapitel zu erstellen und anzuzeigen, wobei jeder Hinweis in der Liste ein Kapitel im Medium darstellt. Der Benutzer kann dann zum gewünschten Kapitel navigieren, das an der Startposition des Hinweises beginnt und an dessen Endposition endet.

## Beispiel

In diesem Beispiel konfigurieren wir die Hinweise der Textspur so, dass jedes Mal, wenn ein Hinweis beendet ist, das Video die Wiedergabe automatisch pausiert. Dies geschieht, indem die [`pauseOnExit`](/de/docs/Web/API/TextTrackCue/pauseonExit)-Eigenschaft jedes Hinweises auf `true` gesetzt wird. Um jedoch sicherzustellen, dass die Hinweise der Spur verfügbar sind, setzen wir zuerst den `mode` auf `showing`.

```js
window.addEventListener("load", (event) => {
  let trackElem = document.querySelector("track");
  let track = trackElem.track;

  track.mode = "showing";

  for (const cue of track.cues) {
    cue.pauseOnExit = true;
  }
});
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
