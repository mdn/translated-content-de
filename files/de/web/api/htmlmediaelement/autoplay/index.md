---
title: "HTMLMediaElement: autoplay-Eigenschaft"
short-title: autoplay
slug: Web/API/HTMLMediaElement/autoplay
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.autoplay`**-Eigenschaft spiegelt das [`autoplay`](/de/docs/Web/HTML/Element/video#autoplay) HTML-Attribut wider und gibt an, ob die Wiedergabe automatisch beginnen soll, sobald genügend Medieninhalte verfügbar sind, um ununterbrochen abzuspielen.

Ein Medienelement, dessen Quelle ein [`MediaStream`](/de/docs/Web/API/MediaStream) ist und dessen `autoplay`-Eigenschaft `true` ist, beginnt mit der Wiedergabe, wenn es aktiv wird (das heißt, wenn [`MediaStream.active`](/de/docs/Web/API/MediaStream/active) `true` wird).

> [!NOTE]
> Websites, die automatisch Audio (oder Videos mit einer Tonspur) abspielen, können für Benutzer ein unangenehmes Erlebnis darstellen. Daher sollte dies möglichst vermieden werden. Wenn Sie die Autoplay-Funktionalität anbieten müssen, sollten Sie diese optional gestalten (erfordern, dass ein Benutzer sie speziell aktiviert). Autoplay kann jedoch nützlich sein, wenn Medienelemente erstellt werden, deren Quelle zu einem späteren Zeitpunkt, unter Benutzerkontrolle, festgelegt wird.

Für einen viel ausführlicheren Blick auf Autoplay, das Blockieren von Autoplay und darauf, wie man reagiert, wenn Autoplay durch den Browser des Benutzers blockiert wird, lesen Sie unseren Artikel [Autoplay-Leitfaden für Media- und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay).

## Wert

Ein boolean-Wert, der `true` ist, wenn das Medienelement die Wiedergabe beginnt, sobald genügend Inhalte geladen wurden, um dies ohne Unterbrechung zu ermöglichen.

> [!NOTE]
> Einige Browser bieten Benutzern die Möglichkeit, `autoplay` zu überschreiben, um zu verhindern, dass störende Audio- oder Videoinhalte ohne Erlaubnis oder im Hintergrund abgespielt werden. Verlassen Sie sich nicht darauf, dass `autoplay` tatsächlich die Wiedergabe startet, sondern verwenden Sie stattdessen das [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)-Ereignis.

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
