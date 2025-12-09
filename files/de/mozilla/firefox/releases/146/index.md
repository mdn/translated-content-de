---
title: Firefox 146 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 146 (Stabil)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 30487c754854c3f21157827914eefb94d0e5bd4d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 wurde am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- In der Regelansicht des Inspectors werden, wenn ein angezeigtes Regelset 10 oder mehr [CSS-Custom-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) deklariert, die nicht verwendet werden, diese Eigenschaften standardmäßig ausgeblendet. Dies reduziert die Unordnung und beschleunigt in einigen Fällen auch das Rendering des Inspector-Panels. In solchen Fällen können die verborgenen Eigenschaften über einen "Anzeigen..."-Button am unteren Ende des Regelsets angezeigt werden.
  ([Firefox-Bug 1719461](https://bugzil.la/1719461)).

### HTML

Keine nennenswerten Änderungen.

### MathML

- Das Spiegeln von Operatoren in Rechts-nach-Links-Modi (RTL) und das Strecken funktionieren jetzt korrekt, wenn sie in Kombination verwendet werden.
  ([Firefox-Bug 1994172](https://bugzil.la/1994172)).
- Die Eigenschaft {{cssxref("math-shift")}} wird nun unterstützt. Dies ermöglicht Entwicklern anzugeben, ob die Hochstellungsdarstellung in MathML-Formeln normal oder kompakt sein soll, was die Höhe beeinflusst, auf die der Hochstellungstext verschoben wird.
  ([Firefox-Bug 1994171](https://bugzil.la/1994171)).

### CSS

- Die Funktion {{cssxref("color_value/contrast-color()")}} wird nun unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox-Bug 1682439](https://bugzil.la/1682439)).

- Der Datentyp [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) unterstützt nun den Farbraum `display-p3-linear`. Dieser Raum ist dem {{Glossary("Color_space#display-p3", "`display-p3`")}} ähnlich, verwendet jedoch eine linear-light Transferfunktion und keine Gamma-Kodierung, was eine höhere Präzision der angezeigten Farben ermöglicht.
  ([Firefox-Bug 1996318](https://bugzil.la/1996318)).

- Die Eigenschaft [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset) wird nun unterstützt, wodurch das Anpassen der Start- und Endpunkte der {{cssxref("text-decoration")}} eines Elements ermöglicht wird, damit diese verkürzt, verlängert oder in Bezug auf den gerenderten Text verschoben werden können.
  ([Firefox-Bug 1979915](https://bugzil.la/1979915), [Firefox-Bug 1997157](https://bugzil.la/1997157), [Firefox-Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht die Auswahl von Elementen in spezifischen DOM-Unterbäumen, um Elemente präzise zu adressieren, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne die Selektoren zu stark an die DOM-Struktur zu koppeln. ([Firefox-Bug 1991105](https://bugzil.la/1991105)).

- Das veraltete Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird nun als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte Schlüsselwort `stretch` (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox-Bug 1988938](https://bugzil.la/1988938), [Firefox-Bug 1789477](https://bugzil.la/1789477)).

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren nun {{jsxref("Symbol")}}-Objekte als Schlüssel, außer für diejenigen, die [registriert](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind. ([Firefox-Bug 1966745](https://bugzil.la/1966745)).

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) ermöglicht nun das Importieren von Schlüsseln, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die Algorithmen [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) verwendet werden. ([Firefox-Bug 1971499](https://bugzil.la/1971499)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `emulation.setLocaleOverride`-Befehl wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` zusammen mit JS-APIs zu überschreiben. ([Firefox-Bug 1994396](https://bugzil.la/1994396)).
- Der Rücksetzmechanismus der Befehle `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` wurde aktualisiert, um Änderungen in den neuesten Spezifikationen zu entsprechen. Wenn dieser Befehl aufgerufen wird, um die Überschreibung für einen spezifischen Browsing-Kontext zurückzusetzen, gelten Überschreibungen, die für einen Benutzerkontext konfiguriert sind, dem dieser Browsing-Kontext gehört, weiterhin. ([Firefox-Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context`-Locator im `browsingContext.locateNodes`-Befehl hinzugefügt, der es ermöglicht, den Container von nicht-Top-Level-Browsing-Kontexten, wie iframe-Elementen, abzurufen. ([Firefox-Bug 1941270](https://bugzil.la/1941270)).
- Der Befehl `network.setExtraHeaders` wurde implementiert, der verwendet werden kann, um Anforderungsheader zu spezifizieren, die automatisch zu Anfragen in den bereitgestellten Browsing-Kontexten oder Benutzerkontexten hinzugefügt werden. ([Firefox-Bug 1979731](https://bugzil.la/1979731)).
- Unsere Befehle zur Sammlung von Netzwerkdaten (`network.addDataCollector`, `network.getData` und `network.disownData`) wurden aktualisiert, um den `request`-Datentyp zu unterstützen, der das Sammeln und Abrufen von Anforderungs-Postdaten ermöglicht. ([Firefox-Bug 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` wurde verbessert, um auch Anfragen zu unterstützen, die das `data:`-Schema verwenden. ([Firefox-Bug 1992210](https://bugzil.la/1992210)).
- Ein Fehler für `network.getData` wurde behoben, der nicht den erwarteten Fehler `no such network data` für nicht unterstützte Anfragen geworfen hat. ([Firefox-Bug 1992214](https://bugzil.la/1992214)).
- Ein Fehler in unseren `network`-Ereignissen wurde behoben, bei dem unterschiedliche Anfragen dieselbe ID wiederverwendeten, was hauptsächlich Daten-URLs oder zwischengespeicherte Anfragen betraf. ([Firefox-Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Eine Regression in `WebDriver:GetElementText` wurde behoben, die dazu führte, dass Text mit Akzentzeichen (z.B. "ó") falsch großgeschrieben wurde. ([Firefox-Bug 1986392](https://bugzil.la/1986392)).
- Ein Fehler in der JSON-Deserialisierung von `WebFrame` wurde behoben, der fälschlicherweise einen `no such window`-Fehler anstelle eines `no such frame`-Fehlers beim Umgang mit ungültigen Frames hervorrief. ([Firefox-Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung zum Steuern des [Global Privacy Control](https://w3c.github.io/gpc/)-Signals wurde hinzugefügt. ([Firefox-Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox-Bug 1886894](https://bugzil.la/1886894))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 146 enthalten, jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` und `security.restrict_to_adults.respect_platform`

  Das `<meta name="rating">`-Element ermöglicht es Websites, sich selbst als eingeschränkter/erwachsener Inhalt zu identifizieren. Browser, die dieses Element erkennen, können daraufhin Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt anzusehen. Siehe [Einschränken von Inhalten für Erwachsene mit `<meta name="rating">`](/de/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating) für weitere Details.
  ([Firefox-Bug 1991135](https://bugzil.la/1991135)).

- **Navigations-API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen jetzt die Navigations-API, die die Fähigkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Es kann auch die Verlaufseinträge einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Webplattform-Features wie der [History-API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), der ihre Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applikationen (SPAs)")}} zugeschnitten ist.
  ([Firefox-Bug 1979288](https://bugzil.la/1979288)).

- **Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point)-Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS-`shape()`-Funktion spezifizieren. Diese Werte ermöglichen es Ihnen, Kontrollpunkte zu definieren, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben-links) des Containers, in dem die Form gezeichnet wird, positioniert sind.

- **Custom Media Queries**: `layout.css.custom-media.enabled`

  Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS-At-Regel definiert Aliase für lange oder komplexe Media Queries. Anstatt dieselbe hartcodierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).
