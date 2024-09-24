---
title: "HTMLMediaElement: autoplay Eigenschaft"
short-title: autoplay
slug: Web/API/HTMLMediaElement/autoplay
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.autoplay`** Eigenschaft spiegelt das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) HTML-Attribut wider. Sie zeigt an, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien verfügbar sind, um dies ohne Unterbrechung zu ermöglichen.

Ein Media-Element, dessen Quelle ein {{domxref("MediaStream")}} ist und dessen `autoplay` Eigenschaft `true` ist, beginnt mit der Wiedergabe, wenn es aktiv wird (also wenn {{domxref("MediaStream.active")}} `true` wird).

> [!NOTE]
> Webseiten, die automatisch Audio (oder Videos mit einer Tonspur) abspielen, können für Benutzer eine unangenehme Erfahrung sein und sollten daher nach Möglichkeit vermieden werden. Wenn Sie die Autoplay-Funktion anbieten müssen, sollten Sie es als Opt-in gestalten (wobei der Benutzer es speziell aktivieren muss). Autoplay kann jedoch nützlich sein, wenn Sie Media-Elemente erstellen, deren Quelle später unter Benutzerkontrolle festgelegt wird.

Für einen ausführlicheren Blick auf Autoplay, das Blockieren von Autoplay und wie darauf reagiert werden kann, wenn Autoplay vom Browser des Benutzers blockiert wird, lesen Sie unseren Artikel [Autoplay-Leitfaden für Medien und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide).

## Wert

Ein boolescher Wert, der `true` ist, wenn das Media-Element die Wiedergabe beginnt, sobald genügend Inhalt geladen wurde, um dies ohne Unterbrechung zu ermöglichen.

> [!NOTE]
> Einige Browser bieten Benutzern die Möglichkeit, das `autoplay` zu überschreiben, um störende Audio- oder Video-Wiedergaben ohne Erlaubnis oder im Hintergrund zu verhindern. Verlassen Sie sich nicht darauf, dass `autoplay` tatsächlich die Wiedergabe startet, sondern nutzen Sie das {{domxref("HTMLMediaElement.play_event", 'play')}}-Ereignis.

## Beispiele

```html
<video id="video" controls>
  <source
    src="https://player.vimeo.com/external/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&profile_id=165" />
</video>
```

```js
// Autoplay deaktivieren (empfohlen)
// false ist der Standardwert
document.querySelector("#video").autoplay = false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle zum Definieren der `HTMLMediaElement.autoplay` Eigenschaft
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
