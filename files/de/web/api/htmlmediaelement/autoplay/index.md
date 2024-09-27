---
title: "HTMLMediaElement: autoplay-Eigenschaft"
short-title: autoplay
slug: Web/API/HTMLMediaElement/autoplay
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.autoplay`**
Eigenschaft spiegelt das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) HTML-Attribut wider und zeigt an,
ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien verfügbar sind, um dies
ohne Unterbrechung zu tun.

Ein Medienelement, dessen Quelle ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist und dessen
`autoplay`-Eigenschaft `true` ist, wird die Wiedergabe beginnen, wenn es aktiv wird
(das heißt, wenn [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) `true` wird).

> [!NOTE]
> Websites, die automatisch Audio (oder Videos mit einer Audiospur) abspielen, können eine unangenehme Erfahrung für Benutzer darstellen und sollten nach Möglichkeit vermieden werden. Wenn Sie die Autoplay-Funktionalität anbieten müssen, sollten Sie sie optional machen (erforderlich, dass ein Benutzer sie speziell aktiviert). Autoplay kann jedoch nützlich sein, wenn Sie Medienelemente erstellen, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird.

Für einen detaillierteren Überblick über Autoplay, Autoplay-Blockierung und wie man reagiert, wenn Autoplay vom Browser des Benutzers blockiert wird, lesen Sie unseren Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

## Wert

Ein boolescher Wert, der `true` ist, wenn das Medienelement die Wiedergabe beginnt, sobald genügend Inhalt geladen ist, um dies ohne Unterbrechung zu ermöglichen.

> [!NOTE]
> Einige Browser bieten Benutzern die Möglichkeit, `autoplay` zu überschreiben, um störendes Audio oder Video zu verhindern, das ohne Erlaubnis oder im Hintergrund abgespielt wird. Verlassen Sie sich nicht darauf, dass `autoplay` die Wiedergabe tatsächlich startet, und verwenden Sie stattdessen das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis.

## Beispiele

```html
<video id="video" controls>
  <source
    src="https://player.vimeo.com/external/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&profile_id=165" />
</video>
```

```js
// Disable autoplay (recommended)
// false is the default value
document.querySelector("#video").autoplay = false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.autoplay`-Eigenschaft zu definieren
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
