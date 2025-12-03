---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: f23e90a5b82439a1a587bf7e4c0f8f78f49238e2
---

Dieser Artikel bietet Informationen über Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Hinweise schreiben. -->

## Änderungen für Web-Entwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

- Operatorenspiegelung in Rechts-nach-Links-Modi (RTL) und Streckung funktionieren jetzt korrekt, wenn sie in Kombination verwendet werden.
  ([Firefox-Bug 1994172](https://bugzil.la/1994172)).

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die {{cssxref("color_value/contrast-color()")}}-Funktion wird jetzt unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox-Bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Datentyp unterstützt jetzt den `display-p3-linear`-Farbraum. Dieser Raum ist ähnlich wie {{Glossary("Color_space#display-p3", "`display-p3`")}}, verwendet jedoch eine lineare Lichtübertragungsfunktion und keine Gamma-Codierung, wodurch eine höhere Präzision bei den angezeigten Farben ermöglicht wird.
  ([Firefox-Bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset)-Eigenschaft wird jetzt unterstützt, die es ermöglicht, die Start- und Endpunkte einer {{cssxref("text-decoration")}} so anzupassen, dass sie verkürzt, verlängert oder ihre Position in Bezug auf den gerenderten Text verschoben werden kann.
  ([Firefox-Bug 1979915](https://bugzil.la/1979915), [Firefox-Bug 1997157](https://bugzil.la/1997157), [Firefox-Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht es Ihnen, Elemente in bestimmten DOM-Subbäumen auszuwählen, um Elemente präzise anzusprechen, ohne unnötig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu binden. ([Firefox-Bug 1991105](https://bugzil.la/1991105)).

- Das veraltete Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird jetzt als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch`-Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox-Bug 1988938](https://bugzil.la/1988938), [Firefox-Bug 1789477](https://bugzil.la/1789477)).

<!-- #### Entfernungen -->

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}}-Objekte als Schlüssel, außer für diejenigen, die im [globalen Symbol-Registry](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) registriert sind. ([Firefox-Bug 1966745](https://bugzil.la/1966745)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) ermöglicht jetzt den Import von Schlüsseln, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)- oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)-Algorithmen verwendet werden. ([Firefox-Bug 1971499](https://bugzil.la/1971499)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `emulation.setLocaleOverride` wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` zusammen mit JS-APIs zu überschreiben. ([Firefox-Bug 1994396](https://bugzil.la/1994396)).
- Das Zurücksetzverhalten der Befehle `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` wurde aktualisiert, um den neuesten Spezifikationsänderungen zu entsprechen. Wenn der Befehl aufgerufen wird, um die Überschreibung für einen spezifischen Browsing-Kontext zurückzusetzen, werden die für einen Benutzerkontext konfigurierten Überschreibungen, die diesen Browsing-Kontext besitzen, weiterhin angewendet. ([Firefox-Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context`-Locator wurde dem Befehl `browsingContext.locateNodes` hinzugefügt, der es ermöglicht, den Container von nicht obersten Browsing-Kontexten, wie z.B. iframe-Elemente, abzurufen. ([Firefox-Bug 1941270](https://bugzil.la/1941270)).
- Der Befehl `network.setExtraHeaders` wurde implementiert, mit dem Anforderungsheader spezifiziert werden können, die automatisch zu in den angegebenen Browsing-Kontexten oder Benutzerkontexten ausgelösten Anfragen hinzugefügt werden. ([Firefox-Bug 1979731](https://bugzil.la/1979731)).
- Alle unsere Netzwerkdatenerfassungsbefehle (`network.addDataCollector`, `network.getData` und `network.disownData`) wurden aktualisiert, um den `request`-Datentyp zu unterstützen, der es ermöglicht, Anforderungsdatenabruf zu sammeln und abzurufen. ([Firefox-Bug 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` wurde verbessert, um auch Anfragen mit dem `data:`-Schema zu unterstützen. ([Firefox-Bug 1992210](https://bugzil.la/1992210)).
- Ein Fehler für `network.getData` wurde behoben, der nicht den erwarteten `no such network data`-Fehler für nicht unterstützte Anfragen auslöste. ([Firefox-Bug 1992214](https://bugzil.la/1992214)).
- Ein Fehler in unseren `network`-Ereignissen wurde behoben, bei dem verschiedene Anfragen dieselbe ID wiederverwendeten, was sich hauptsächlich auf Daten-URLs oder zwischengespeicherte Anfragen auswirkte. ([Firefox-Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Eine Regression in `WebDriver:GetElementText` wurde behoben, die dazu führte, dass Text mit Akzentzeichen (z.B. "ó") falsch kapitalisiert wurde. ([Firefox-Bug 1986392](https://bugzil.la/1986392)).
- Ein Fehler in der `WebFrame`-JSON-Deserialisierung wurde behoben, der fälschlicherweise einen `no such window`-Fehler statt `no such frame` auslöste, wenn ungültige Frames behandelt wurden. ([Firefox-Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung wurde hinzugefügt, um das Signal für die [Global Privacy Control](https://w3c.github.io/gpc/) zu steuern. ([Firefox-Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` im {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen jetzt Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox-Bug 1886894](https://bugzil.la/1886894))

<!-- ### Entfernungen -->

<!-- ### Andere -->

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 146 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite über [experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen jetzt die Navigation API, die die Möglichkeit bietet, Navigationsaktionen des Browsers zu initiieren, abzufangen und zu verwalten. Sie kann auch Einträge der Anwendungsverlaufseinträge untersuchen. Dies ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.
  ([Firefox-Bug 1979288](https://bugzil.la/1979288)).

- **Relative Kontrollpunkte in CSS `shape()`-Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point)-Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS-`shape()`-Funktion angeben. Diese Werte ermöglichen es Ihnen, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers positioniert sind, in dem die Form gezeichnet wird.

- **Benutzerdefinierte Media Queries**: `layout.css.custom-media.enabled`

  Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS-At-Regel definiert Aliase für lange oder komplexe Media Queries. Anstatt dieselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und in der gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox-Bug 1991105](https://bugzil.la/1744292)).
