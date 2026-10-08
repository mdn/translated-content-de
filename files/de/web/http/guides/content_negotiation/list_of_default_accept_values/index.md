---
title: Liste der Standardwerte für Accept
short-title: Standardwerte für Accept
slug: Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values
l10n:
  sourceCommit: 7b642841e72ef94e8723f26892000383513b550d
---

Dieser Artikel dokumentiert die Standardwerte des HTTP-Headers [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) für bestimmte Anfragen und Browserversionen.

## Standardwerte

Diese Werte werden gesendet, wenn der Kontext keine genaueren Informationen liefert.
Beachten Sie, dass alle Browser den MIME-Typ `*/*` hinzufügen, um alle Fälle abzudecken.
Dies gilt üblicherweise für Anfragen, die über die Adressleiste eines Browsers oder ein HTML-{{HTMLElement("a")}}-Element ausgelöst werden.

| User-Agent                | Wert                                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 132 und neuer [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Firefox 128 bis 131       | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8`                           |
| Firefox 92 bis 127        | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                                   |
| Firefox 72 bis 91 [2]     | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                              |
| Firefox 66 bis 71 [2]     | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Firefox 65 [2]            | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                              |
| Firefox 64 und älter [2]  | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Safari 13.1 bis 18.1+ [4] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Chrome 131+ [4]           | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7` |
| Safari, Chrome [4]        | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                                   |
| Safari 5 [3]              | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                         |
| Edge                      | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                        |
| Opera                     | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1`       |

\[1] Der Wert kann über die Einstellung `network.http.accept` (`about:config`) auf eine beliebige Zeichenfolge gesetzt werden.

\[2] Der Wert kann über die Einstellung [`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default) (`about:config`) auf eine beliebige Zeichenfolge gesetzt werden.

\[3] Dies ist eine Verbesserung gegenüber früheren `Accept`-Headern, da `image/png` nicht mehr höher gewichtet wird als `text/html`.

\[4] Die Werte für Safari 13.1 bis 18.1 und Chrome 131 wurden erneut geprüft und ergänzt. Die Werte können sich bereits vor den angegebenen Versionen geändert haben.

## Werte für Bilder

Wenn ein Bild angefordert wird, etwa über ein HTML-{{HTMLElement("img")}}-Element, gibt der User-Agent häufig eine bestimmte Liste akzeptierter Medientypen an.

| User-Agent                    | Wert                                                                              |
| ----------------------------- | --------------------------------------------------------------------------------- |
| Firefox 158 und neuer [1]     | `image/avif,image/jxl,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5` |
| Firefox 128 bis 157 [1]       | `image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`           |
| Firefox 92 bis 127 [1]        | `image/avif,image/webp,*/*`                                                       |
| Firefox 65 bis 91 [1]         | `image/webp,*/*`                                                                  |
| Firefox 47 bis 63 [1]         | `*/*`                                                                             |
| Firefox vor Version 47 [1]    | `image/png,image/*;q=0.8,*/*;q=0.5`                                               |
| Safari (seit Mac OS Big Sur)  | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`        |
| Safari (vor Mac OS Big Sur)   | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`                   |
| Chrome und Edge 121 und neuer | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                              |

\[1] Der Wert kann über den Parameter `image.http.accept` auf eine beliebige Zeichenfolge gesetzt werden (_[Quelle](https://searchfox.org/firefox-main/search?q=image.http.accept)_).

## Werte für Videos

Wenn ein Video über das HTML-Element {{HTMLElement("video")}} angefordert wird, verwenden die meisten Browser bestimmte Werte.

| User-Agent              | Wert                                                                               |
| ----------------------- | ---------------------------------------------------------------------------------- |
| Firefox 3.6 und neuer   | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox vor Version 3.6 | _keine Unterstützung für {{HTMLElement("video")}}_                                 |
| Chrome                  | `*/*`                                                                              |

## Werte für Audioressourcen

Wenn eine Audiodatei angefordert wird, etwa über das HTML-Element {{HTMLElement("audio")}}, verwenden die meisten Browser bestimmte Werte.

| User-Agent                | Wert                                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 und neuer [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome            | `*/*`                                                                                        |

\[1] Siehe [Bug 489071](https://bugzil.la/489071).

## Werte für Skripte

Wenn ein Skript angefordert wird, etwa über das HTML-Element {{HTMLElement("script")}}, verwenden einige Browser bestimmte Werte.

| User-Agent     | Wert  |
| -------------- | ----- |
| Firefox [1]    | `*/*` |
| Safari, Chrome | `*/*` |

\[1] Siehe [Bug 170789](https://bugzil.la/170789).

## Werte für CSS-Stylesheets

Wenn ein CSS-Stylesheet über das HTML-Element `<link rel="stylesheet">` angefordert wird, verwenden die meisten Browser bestimmte Werte.

| User-Agent     | Wert                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]  | `text/css,*/*;q=0.1`                                                                                                                |
| Safari, Chrome | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10    | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6  | `text/css,*/*;q=0.1`                                                                                                                |

\[1] Siehe [Bug 170789](https://bugzil.la/170789).

## Siehe auch

- [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
