---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: ad40e26d0c73635f7803d88ec29caffd9c873697
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte heben Sie alle Überschriften hervor, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Im Regelansichtsmodus des Inspectors werden 10 oder mehr nicht verwendete [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*) standardmäßig ausgeblendet. Dies reduziert Unordnung und beschleunigt in einigen Fällen auch die Darstellung des Inspector-Panels. In solchen Fällen können die ausgeblendeten Eigenschaften über eine "Anzeigen..."-Schaltfläche am Ende des Regelsets sichtbar gemacht werden.
  ([Firefox Bug 1719461](https://bugzil.la/1719461)).

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

- Operatorenspiegelung in Rechts-nach-Links (RTL) Modi und Stretchen funktionieren nun korrekt, wenn sie in Kombination verwendet werden.
  ([Firefox Bug 1994172](https://bugzil.la/1994172)).
- Die {{cssxref("math-shift")}} Eigenschaft wird nun unterstützt. Diese erlaubt es Entwicklern zu bestimmen, ob das Superscript-Rendering in MathML-Formeln normal oder kompakt sein soll, was die Höhe beeinflusst, auf die Superscript-Text verschoben wird.
  ([Firefox Bug 1994171](https://bugzil.la/1994171)).

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("color_value/contrast-color()")}} Funktion wird nun unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Wert und liefert eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox Bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp unterstützt nun den `display-p3-linear` Farbraum. Dieser Raum ähnelt {{Glossary("Color_space#display-p3", "`display-p3`")}}, verwendet jedoch eine linearlichte Transferfunktion und hat keine Gamma-Kodierung, was eine höhere Präzision der angezeigten Farben ermöglicht.
  ([Firefox Bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset) Eigenschaft wird nun unterstützt, was es ermöglicht, die Anfangs- und Endpunkte eines Elements {{cssxref("text-decoration")}} anzupassen, sodass es gekürzt, verlängert oder seine Position im Verhältnis zum angezeigten Text verschoben werden kann.
  ([Firefox Bug 1979915](https://bugzil.la/1979915), [Firefox Bug 1997157](https://bugzil.la/1997157), [Firefox Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird nun standardmäßig unterstützt. Dies ermöglicht Ihnen, Elemente in bestimmten DOM-Teilbäumen zu selektieren, um Elemente präzise zu zielen, ohne übermäßig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren eng an die DOM-Struktur zu koppeln. ([Firefox Bug 1991105](https://bugzil.la/1991105)).

- Das Legacy-Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird nun als Wert für die CSS {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften unterstützt, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox Bug 1988938](https://bugzil.la/1988938), [Firefox Bug 1789477](https://bugzil.la/1789477)).

<!-- #### Entfernungen -->

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren nun {{jsxref("Symbol")}} Objekte als Schlüssel, mit Ausnahme derjenigen, die [registriert](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind. ([Firefox Bug 1966745](https://bugzil.la/1966745)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) ermöglicht es nun, Schlüssel zu importieren, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) Algorithmen verwendet werden. ([Firefox Bug 1971499](https://bugzil.la/1971499)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Aktualisierte den `emulation.setLocaleOverride` Befehl, um den Rückgabewert von `navigator.language` und `navigator.languages` neben JS-APIs zu überschreiben. ([Firefox Bug 1994396](https://bugzil.la/1994396)).
- Aktualisierte das Rücksetzverhalten der `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` Befehle, um den jüngsten Änderungen der Spezifikationen zu entsprechen. Wenn dieser Befehl aufgerufen wird, um die Überschreibung für einen bestimmten Browsing-Kontext zurückzusetzen, gelten Überschreibungen, die für einen Benutzerkontext konfiguriert sind, dem dieser Browsing-Kontext gehört, weiterhin. ([Firefox Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context` Locator zum `browsingContext.locateNodes` Befehl hinzugefügt, der es ermöglicht, den Container von nicht-Top-Level-Browsing-Kontexten wie iframe-Elementen abzurufen. ([Firefox Bug 1941270](https://bugzil.la/1941270)).
- Implementierte den `network.setExtraHeaders` Befehl, der verwendet werden kann, um Anforderungsheader zu spezifizieren, die automatisch zu Anfragen in den bereitgestellten Browsing-Kontexten oder Benutzerkontexten hinzugefügt werden. ([Firefox Bug 1979731](https://bugzil.la/1979731)).
- Alle unsere Netzwerkdaten-Erfassungsbefehle (`network.addDataCollector`, `network.getData` und `network.disownData`) aktualisiert, um den `request` Datentyp zu unterstützen, der es ermöglicht, Anforderungsdaten zu sammeln und abzurufen. ([Firefox Bug 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` verbessert, um auch Anfragen zu unterstützen, die das `data:` Schema verwenden. ([Firefox Bug 1992210](https://bugzil.la/1992210)).
- Fehler in `network.getData` behoben, der nicht den erwarteten `no such network data` Fehler für nicht unterstützte Anfragen auslöste. ([Firefox Bug 1992214](https://bugzil.la/1992214)).
- Fehler in unseren `network` Ereignissen behoben, bei dem verschiedene Anfragen dieselbe ID wiederverwendeten, was hauptsächlich Daten-URLs oder gespeicherte Anfragen beeinflusste. ([Firefox Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Regression in `WebDriver:GetElementText` behoben, die dazu führte, dass Text mit Akzentbuchstaben (z.B. "ó") falsch großgeschrieben wurde. ([Firefox Bug 1986392](https://bugzil.la/1986392)).
- Fehler im `WebFrame` JSON-Deserialisierung behoben, bei dem fälschlicherweise ein `no such window` Fehler statt `no such frame` angezeigt wurde, wenn ungültige Frames verarbeitet wurden. ([Firefox Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung hinzugefügt, um das [Global Privacy Control](https://w3c.github.io/gpc/) Signal zu steuern. ([Firefox Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox Bug 1886894](https://bugzil.la/1886894))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 146 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` und `security.restrict_to_adults.respect_platform`

  Das `<meta name="rating">` Element ermöglicht es Websites, sich selbst als eingeschränkte/erwachsene Inhalte zu identifizieren. Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, die Inhalte anzuzeigen. Siehe [Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`](/de/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating) für weitere Details.
  ([Firefox Bug 1991135](https://bugzil.la/1991135)).

- **Navigations-API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen jetzt die Navigations-API, die die Fähigkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Einträge des Anwendungs-Verlaufs untersuchen. Dies ist ein Nachfolger früherer Funktionen der Webplattform wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), welche deren Schwächen löst und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.
  ([Firefox Bug 1979288](https://bugzil.la/1979288)).

- **Relative Kontrollepunkte in CSS `shape()` Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte erlauben es Ihnen, Kontrollpunkte zu spezifizieren, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers positioniert sind, in dem die Form gezeichnet wird.

- **Benutzerdefinierte Medienabfragen**: `layout.css.custom-media.enabled`

  Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS-At-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dieselbe festkodierte `<media-query-list>` in mehreren `@media` At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und überall im Stylesheet bei Bedarf referenziert werden. ([Firefox Bug 1744292](https://bugzil.la/1744292)).
