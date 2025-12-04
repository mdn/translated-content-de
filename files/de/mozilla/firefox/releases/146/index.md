---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 6e23feb9bf66f4734947d7cea5e4fe59dac028ce
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

### MathML

- Das Spiegeln von Operatoren in Rechts-nach-Links-Modi (RTL) und das Dehnen funktionieren nun korrekt, wenn sie in Kombination verwendet werden.
  ([Firefox-Bug 1994172](https://bugzil.la/1994172)).
- Die Eigenschaft {{cssxref("math-shift")}} wird jetzt unterstützt. Diese erlaubt es Entwicklern, anzugeben, ob die hochgestellte Darstellung in MathML-Formeln normal oder kompakt sein soll, was sich darauf auswirkt, in welche Höhe der hochgestellte Text verschoben wird.
  ([Firefox-Bug 1994171](https://bugzil.la/1994171)).

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

### CSS

- Die Funktion {{cssxref("color_value/contrast-color()")}} wird jetzt unterstützt. Diese Funktion nimmt einen `<color>`-Wert entgegen und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) gewährleistet.
  ([Firefox-Bug 1682439](https://bugzil.la/1682439)).

- Der `<color>`-Datentyp unterstützt jetzt den Farbraum `display-p3-linear`. Dieser Raum ähnelt {{Glossary("Color_space#display-p3", "`display-p3`")}}, verwendet jedoch eine lineare Lichtübertragungsfunktion und keine Gamma-Kodierung, was eine höhere Präzision bei den angezeigten Farben ermöglicht.
  ([Firefox-Bug 1996318](https://bugzil.la/1996318)).

- Die Eigenschaft [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset) wird nun unterstützt, was es ermöglicht, die Start- und Endpunkte einer {{cssxref("text-decoration")}} eines Elements anzupassen, sodass sie verkürzt, verlängert oder ihre Position im Verhältnis zum dargestellten Text verschoben werden kann.
  ([Firefox-Bug 1979915](https://bugzil.la/1979915), [Firefox-Bug 1997157](https://bugzil.la/1997157), [Firefox-Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht die Auswahl von Elementen in bestimmten DOM-Unterbäumen, wodurch Elemente präzise anvisiert werden können, ohne allzu spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne die Selektoren zu eng an die DOM-Struktur zu binden. ([Firefox-Bug 1991105](https://bugzil.la/1991105)).

- Das veraltete Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird nun als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch`-Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), welches in Firefox noch nicht unterstützt wird.
  ([Firefox-Bug 1988938](https://bugzil.la/1988938), [Firefox-Bug 1789477](https://bugzil.la/1789477)).

<!-- #### Entfernt -->

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}}-Objekte als Schlüssel, außer solche, die [registriert](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind. ([Firefox-Bug 1966745](https://bugzil.la/1966745)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) erlaubt es jetzt, Schlüssel zu importieren, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die Algorithmen [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) verwendet werden. ([Firefox-Bug 1971499](https://bugzil.la/1971499)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, und Web Audio -->

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

### WebDriver-Übereinstimmung (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `emulation.setLocaleOverride` wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` zusammen mit JS-APIs zu überschreiben. ([Firefox-Bug 1994396](https://bugzil.la/1994396)).
- Das Reset-Verhalten der Befehle `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` wurde aktualisiert, um den jüngsten Spezifikationsänderungen zu entsprechen. Wenn dieser Befehl aufgerufen wird, um die Überschreibung für einen bestimmten Browsing-Kontext zurückzusetzen, werden die für einen Benutzer-Kontext verfügten Überschreibungen weiterhin angewendet. ([Firefox-Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context`-Locator wurde dem Befehl `browsingContext.locateNodes` hinzugefügt, der es ermöglicht, den Container von nicht-Top-Level-Browsing-Kontexten wie iframe-Elementen abzurufen. ([Firefox-Bug 1941270](https://bugzil.la/1941270)).
- Der Befehl `network.setExtraHeaders` wurde implementiert, der verwendet werden kann, um Anforderungsheader anzugeben, die automatisch zu Anfragen in den angegebenen Browsing-Kontexten oder Benutzer-Kontexten hinzugefügt werden. ([Firefox-Bug 1979731](https://bugzil.la/1979731)).
- Alle unsere Befehle zur Netzwerkdatenerfassung (`network.addDataCollector`, `network.getData` und `network.disownData`) wurden aktualisiert, um den Datentyp `request` zu unterstützen, der es ermöglicht, Anforderungs-Post-Daten zu sammeln und abzurufen. ([Firefox-Bug 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` wurde verbessert, um auch Anfragen mit dem `data:`-Schema zu unterstützen. ([Firefox-Bug 1992210](https://bugzil.la/1992210)).
- Ein Fehler für `network.getData` wurde behoben, der nicht den erwarteten Fehler `no such network data` für nicht unterstützte Anfragen auslöste. ([Firefox-Bug 1992214](https://bugzil.la/1992214)).
- Ein Fehler in unseren `network`-Ereignissen wurde behoben, bei dem verschiedene Anfragen dieselbe ID wiederverwendeten, was vor allem Daten-URLs oder zwischengespeicherte Anfragen betraf. ([Firefox-Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Eine Regression in `WebDriver:GetElementText`, die dazu führte, dass Text mit Akzentzeichen (z.B. "ó") falsch großgeschrieben wurde, wurde behoben. ([Firefox-Bug 1986392](https://bugzil.la/1986392)).
- Ein Fehler in der JSON-Deserialisierung von `WebFrame`, der fälschlicherweise einen `no such window`-Fehler anstelle von `no such frame` auslöste, wenn ungültige Frames behandelt wurden, wurde behoben. ([Firefox-Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung zur Steuerung des [Global Privacy Control](https://w3c.github.io/gpc/)-Signals wurde hinzugefügt. ([Firefox-Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox-Bug 1886894](https://bugzil.la/1886894))

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 146 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen jetzt die Navigation API, die die Möglichkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Verlaufseinträge einer Anwendung prüfen. Dies ist ein Nachfolger zu früheren Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Unzulänglichkeiten löst und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet ist.
  ([Firefox-Bug 1979288](https://bugzil.la/1979288)).

- **Relative Steuerpunkte in CSS `shape()`-Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können `<relative-control-point>`-Werte verwenden, wenn Sie einen `<curve-command>` oder `<smooth-command>` in einer CSS `shape()`-Funktion angeben. Diese Werte ermöglichen es, Steuerpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind.

- **Benutzerdefinierte Medienabfragen**: `layout.css.custom-media.enabled`

  Die CSS-At-Regel [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dieselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden. ([Firefox-Bug 1991105](https://bugzil.la/1744292)).
