---
title: "HTMLMediaElement: autoplay-Eigenschaft"
short-title: autoplay
slug: Web/API/HTMLMediaElement/autoplay
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.autoplay`**-Eigenschaft spiegelt das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay)-HTML-Attribut wider und zeigt an, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien geladen sind, um dies ohne Unterbrechung zu tun.

Ein Medienelement, dessen Quelle ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist und dessen `autoplay`-Eigenschaft `true` ist, beginnt die Wiedergabe, wenn es aktiv wird (das heißt, wenn [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) `true` wird).

> [!NOTE]
> Webseiten, die automatisch Audio (oder Videos mit einem Audiotrack) abspielen, können für Benutzer eine unangenehme Erfahrung sein und sollten nach Möglichkeit vermieden werden. Wenn Sie die Autoplay-Funktionalität anbieten müssen, sollten Sie diese als Opt-in bereitstellen (erfordern, dass ein Benutzer sie spezifisch aktiviert). Autoplay kann jedoch nützlich sein, wenn Medien-Elemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird.

Für einen viel detaillierteren Blick auf Autoplay, Autoplay-Blockierung und wie Sie reagieren, wenn Autoplay vom Browser des Benutzers blockiert wird, lesen Sie unseren Artikel [Leitfaden zum Autoplay für Media- und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

## Wert

Ein Boolean-Wert, der `true` ist, wenn das Medienelement mit der Wiedergabe beginnt, sobald genügend Inhalt geladen ist, um dies ohne Unterbrechung zu ermöglichen.

> [!NOTE]
> Einige Browser bieten Benutzern die Möglichkeit, `autoplay` zu überschreiben, um zu verhindern, dass störende Audio- oder Video-Inhalte ohne Erlaubnis oder im Hintergrund abgespielt werden. Verlassen Sie sich nicht darauf, dass `autoplay` die Wiedergabe tatsächlich startet, sondern verwenden Sie stattdessen das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.autoplay`-Eigenschaft
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
