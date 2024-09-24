---
title: Liste der Standard-Accept-Werte
slug: Web/HTTP/Content_negotiation/List_of_default_Accept_values
l10n:
  sourceCommit: e843500803b73cbf179b84864cd9c159c7d4d81c
---

{{HTTPSidebar}}

Dieser Artikel dokumentiert die Standardwerte für den HTTP-Header [`Accept`](/de/docs/Web/HTTP/Headers/Accept) für spezifische Eingaben und Browserversionen.

## Standardwerte

Dies sind die Werte, die gesendet werden, wenn der Kontext keine besseren Informationen liefert. Beachten Sie, dass alle Browser den MIME-Typ `*/*` hinzufügen, um alle Fälle abzudecken. Dies wird typischerweise für Anfragen verwendet, die über die Adressleiste eines Browsers oder über ein HTML-{{HTMLElement("a")}}-Element initiiert werden.

| User-Agent                 | Wert                                                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 128 und später [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8`                     |
| Firefox 92 bis 127 [1]     | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                             |
| Firefox 72 bis 91 [2]      | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                        |
| Firefox 66 bis 71 [2]      | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Firefox 65 [2]             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                        |
| Firefox 64 und früher [2]  | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Safari, Chrome             | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                             |
| Safari 5 [3]               | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Edge                       | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                  |
| Opera                      | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |

\[1] Der Wert kann über die `network.http.accept`-Einstellung (`about:config`) auf eine beliebige Zeichenfolge gesetzt werden.

\[2] Der Wert kann über die [`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default)-Einstellung (`about:config`) auf eine beliebige Zeichenfolge gesetzt werden.

\[3] Dies ist eine Verbesserung gegenüber früheren `Accept`-Headern, da `image/png` nicht mehr über `text/html` rangiert wird.

## Werte für ein Bild

Wenn ein Bild angefordert wird, wie durch ein HTML-{{HTMLElement("img")}}-Element, setzt der User-Agent oft eine spezifische Liste von Medientypen, die akzeptiert werden.

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

\[1] Der Wert kann über den `image.http.accept`-Parameter (_[source](https://searchfox.org/mozilla-central/search?q=image.http.accept)_) auf eine beliebige Zeichenfolge gesetzt werden.

## Werte für ein Video

Wenn ein Video angefordert wird, über das {{HTMLElement("video")}}-HTML-Element, verwenden die meisten Browser spezifische Werte.

| User-Agent               | Wert                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------- |
| Firefox 3.6 und später   | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox früher als 3.6   | _keine Unterstützung für {{HTMLElement("video")}}_                                 |
| Chrome                   | `*/*`                                                                              |

## Werte für Audiodateien

Wenn eine Audiodatei angefordert wird, wie über das {{HTMLElement("audio")}}-HTML-Element, verwenden die meisten Browser spezifische Werte.

| User-Agent               | Wert                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 und später [1]| `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari, Chrome           | `*/*`                                                                                        |

\[1] Siehe [Bug 489071](https://bugzil.la/489071).

## Werte für Skripte

Wenn ein Skript angefordert wird, wie über das {{HTMLElement("script")}}-HTML-Element, verwenden einige Browser spezifische Werte.

| User-Agent    | Wert |
| ------------- | ----- |
| Firefox [1]   | `*/*` |
| Safari, Chrome| `*/*` |

\[1] Siehe [Bug 170789](https://bugzil.la/170789).

## Werte für ein CSS Stylesheet

Wenn ein CSS-Stylesheet angefordert wird, über das `<link rel="stylesheet">` HTML-Element, verwenden die meisten Browser spezifische Werte.

| User-Agent    | Wert                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1] | `text/css,*/*;q=0.1`                                                                                                                |
| Safari, Chrome| `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10   | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6 | `text/css,*/*;q=0.1`                                                                                                                |

\[1] Siehe [Bug 170789](https://bugzil.la/170789).
