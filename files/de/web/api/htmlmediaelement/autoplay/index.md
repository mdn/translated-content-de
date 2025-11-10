---
title: "HTMLMediaElement: autoplay-Eigenschaft"
short-title: autoplay
slug: Web/API/HTMLMediaElement/autoplay
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.autoplay`**-Eigenschaft spiegelt das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/video#autoplay) HTML-Attribut wider und gibt an, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medien vorhanden sind, um dies ohne Unterbrechung zu tun.

Ein Medienelement, dessen Quelle ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist und dessen `autoplay`-Eigenschaft `true` ist, wird mit der Wiedergabe beginnen, wenn es aktiv wird (das heißt, wenn [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) `true` wird).

> [!NOTE]
> Websites, die automatisch Audio oder Videos mit einem Audiotrack abspielen, können eine unangenehme Erfahrung für die Nutzer sein, daher sollte dies vermieden werden, wenn möglich. Wenn Sie dennoch eine Autoplay-Funktionalität anbieten müssen, sollten Sie diese als Opt-in-Option gestalten (die Nutzer müssen sie explizit aktivieren). Allerdings kann Autoplay nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt unter Benutzerkontrolle festgelegt wird.

Für einen ausführlicheren Einblick in Autoplay, die Blockierung von Autoplay und wie zu reagieren ist, wenn Autoplay vom Browser des Nutzers blockiert wird, lesen Sie unseren Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay).

## Wert

Ein boolescher Wert, der `true` ist, wenn das Medienelement mit der Wiedergabe beginnt, sobald genügend Inhalt geladen ist, um die Wiedergabe ohne Unterbrechung zu ermöglichen.

> [!NOTE]
> Einige Browser bieten Nutzern die Möglichkeit, `autoplay` zu überschreiben, um zu verhindern, dass störendes Audio oder Video ohne Erlaubnis oder im Hintergrund abgespielt wird. Verlassen Sie sich nicht darauf, dass `autoplay` tatsächlich die Wiedergabe startet, und verwenden Sie stattdessen das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis.

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
