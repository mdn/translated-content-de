---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: e48a27cb504c21927f441fff67e3b28ac6246cc9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte entfernen Sie die Kommentare von Überschriften, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("color_value/contrast-color()")}} Funktion wird jetzt unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Wert und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp unterstützt nun den `display-p3-linear` Farbraum. Dieser Raum ist dem {{Glossary("Color_space#display-p3", "`display-p3`")}} ähnlich, verwendet jedoch eine lineare Transferfunktion und keine Gamma-Kodierung, was eine höhere Präzision bei den angezeigten Farben ermöglicht.
  ([Firefox bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset) Eigenschaft wird nun unterstützt, was es ermöglicht, die Anfangs- und Endpunkte einer {{cssxref("text-decoration")}} eines Elements anzupassen, sodass diese verkürzt, verlängert oder in ihrer Position gegenüber dem gerenderten Text verschoben werden können.
  ([Firefox bug 1979915](https://bugzil.la/1979915), [Firefox bug 1997157](https://bugzil.la/1997157), [Firefox bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht das Auswählen von Elementen in bestimmten DOM-Subtrees, um Elemente präzise zu zielen, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne dass die Selektoren zu stark an die DOM-Struktur gekoppelt sind. ([Firefox bug 1991105](https://bugzil.la/1991105)).

- Das Legacy-Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird nun als Wert für die CSS {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox bug 1988938](https://bugzil.la/1988938), [Firefox bug 1789477](https://bugzil.la/1789477)).

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` im {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage).
  ([Firefox bug 1886894](https://bugzil.la/1886894))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 146 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Navigations-API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen nun die Navigations-API, die die Fähigkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Verlaufs-Einträge einer Anwendung durchsuchen. Dies ist ein Nachfolger früherer Webplattform-Funktionen wie die [History-API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), welche deren Mängel löst und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgelegt ist.
  ([Firefox bug 1979288](https://bugzil.la/1979288)).
