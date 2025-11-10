---
title: Liste der Standardwerte für "Accept"
short-title: Standardwerte für "Accept"
slug: Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Dieser Artikel dokumentiert die Standardwerte für den HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) für spezifische Eingaben und Browserversionen.

## Standardwerte

Dies sind die Werte, die gesendet werden, wenn der Kontext keine genaueren Informationen liefert. Beachten Sie, dass alle Browser den MIME-Typ `*/*` hinzufügen, um alle Fälle abzudecken. Dies wird typischerweise bei Anfragen verwendet, die über die Adressleiste eines Browsers oder ein HTML-Element {{HTMLElement("a")}} initiiert werden.

| User-Agent                 | Wert                                                                                                                                      |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 132 und später [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Firefox 128 bis 131        | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8`                           |
| Firefox 92 bis 127         | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                                   |
| Firefox 72 bis 91 [2]      | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                              |
| Firefox 66 bis 71 [2]      | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Firefox 65 [2]             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                              |
| Firefox 64 und früher [2]  | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Safari 13.1 bis 18.1+ [4]  | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Chrome 131+ [4]            | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7` |
| Safari, Chrome [4]         | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                                   |
| Safari 5 [3]               | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Edge                       | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                        |
| Opera                      | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1`       |

\[1] Der Wert kann mithilfe der Einstellung `network.http.accept` auf einen beliebigen String gesetzt werden (`about:config`).

\[2] Der Wert kann mithilfe der Einstellung [`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default) auf einen beliebigen String gesetzt werden (`about:config`).

\[3] Dies ist eine Verbesserung gegenüber früheren `Accept`-Headern, da `image/png` nicht länger über `text/html` rangiert.

\[4] Überprüfte und hinzugefügte Werte für Safari 13.1 bis 18.1 und Chrome 131. Werte können vor den angegebenen Versionen geändert worden sein.

## Werte für ein Bild

Wenn ein Bild angefordert wird, z.B. über ein HTML-Element {{HTMLElement("img")}}, setzt der User-Agent oft eine spezifische Liste von akzeptierten Medientypen.

| User-Agent                     | Wert                                                                       |
| ------------------------------ | -------------------------------------------------------------------------- |
| Firefox 128 und später [1]     | `image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`    |
| Firefox 92 bis 127 [1]         | `image/avif,image/webp,*/*`                                                |
| Firefox 65 bis 91 [1]          | `image/webp,*/*`                                                           |
| Firefox 47 bis 63 [1]          | `*/*`                                                                      |
| Firefox vor 47 [1]             | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| Safari (seit Mac OS Big Sur)   | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| Safari (vor Mac OS Big Sur)    | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| Chrome und Edge 121 und später | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |

\[1] Der Wert kann mithilfe des Parameters `image.http.accept` auf einen beliebigen String gesetzt werden (_[source](https://searchfox.org/firefox-main/search?q=image.http.accept)_).

## Werte für ein Video

Wenn ein Video angefordert wird, über das HTML-Element {{HTMLElement("video")}}, verwenden die meisten Browser spezifische Werte.

| User-Agent             | Wert                                                                               |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Firefox 3.6 und später | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox vor 3.6        | _keine Unterstützung für {{HTMLElement("video")}}_                                 |
| Chrome                 | `*/*`                                                                              |

## Werte für Audio-Ressourcen

Wenn eine Audiodatei angefordert wird, z.B. über das HTML-Element {{HTMLElement("audio")}}, verwenden die meisten Browser spezifische Werte.

| User-Agent                 | Wert                                                                                         |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 und später [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome             | `*/*`                                                                                        |

\[1] Siehe [Bug 489071](https://bugzil.la/489071).

## Werte für Skripte

Wenn ein Skript angefordert wird, z.B. über das HTML-Element {{HTMLElement("script")}}, verwenden einige Browser spezifische Werte.

| User-Agent     | Wert  |
| -------------- | ----- |
| Firefox [1]    | `*/*` |
| Safari, Chrome | `*/*` |

\[1] Siehe [Bug 170789](https://bugzil.la/170789).

## Werte für ein CSS Stylesheet

Wenn ein CSS-Stylesheet über das `<link rel="stylesheet">`-HTML-Element angefordert wird, verwenden die meisten Browser spezifische Werte.

| User-Agent     | Wert                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]  | `text/css,*/*;q=0.1`                                                                                                                |
| Safari, Chrome | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10    | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6  | `text/css,*/*;q=0.1`                                                                                                                |

\[1] Siehe [Bug 170789](https://bugzil.la/170789).

## Siehe auch

- [Content negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation)
