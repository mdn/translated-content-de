---
title: Firefox 146 Versionshinweise für Entwickler
short-title: Firefox 146
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 13fd8fb0c8553a8bf34b37f4952d911fad5a0d6b
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 wurde am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- In der Regelansicht des Inspectors werden, wenn ein angezeigtes Regelset 10 oder mehr [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) deklariert, die nicht verwendet werden, diese Eigenschaften standardmäßig ausgeblendet. Dies verringert das Durcheinander und beschleunigt in einigen Fällen auch die Darstellung des Inspector-Panels. In solchen Fällen können die ausgeblendeten Eigenschaften über eine "Anzeigen..."-Schaltfläche am Ende des Regelsets angezeigt werden.
  ([Firefox-Bug 1719461](https://bugzil.la/1719461)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

- Spiegelung von Operatoren in Rechts-nach-Links (RTL)-Modi und das Strecken funktionieren jetzt ordnungsgemäß, wenn sie kombiniert verwendet werden.
  ([Firefox-Bug 1994172](https://bugzil.la/1994172)).
- Die {{cssxref("math-shift")}} Eigenschaft wird jetzt unterstützt. Dies ermöglicht es Entwicklern anzugeben, ob die Darstellung von Hochstellen in MathML-Formeln normal oder kompakt sein soll, was sich auf die Höhe auswirkt, zu der hochgestellter Text verschoben wird.
  ([Firefox-Bug 1994171](https://bugzil.la/1994171)).

### CSS

- Die {{cssxref("color_value/contrast-color()")}} Funktion wird jetzt unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert und gibt eine kontrastierende Farbe zurück, die mindestens [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox-Bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp unterstützt jetzt den `display-p3-linear` Farbraum. Dieser Raum ist ähnlich wie {{Glossary("Color_space#display-p3", "`display-p3`")}}, außer dass er eine lineare Lichtübertragungsfunktion verwendet und keine Gamma-Codierung besitzt, was eine höhere Präzision bei den angezeigten Farben ermöglicht.
  ([Firefox-Bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset)-Eigenschaft wird jetzt unterstützt, womit die Start- und Endpunkte der {{cssxref("text-decoration")}} eines Elements angepasst werden können, sodass sie verkürzt, verlängert oder ihre Position in Bezug auf den gerenderten Text verschoben werden können.
  ([Firefox-Bug 1979915](https://bugzil.la/1979915), [Firefox-Bug 1997157](https://bugzil.la/1997157), [Firefox-Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht die Auswahl von Elementen in bestimmten DOM-Subtrees, um Elemente präzise zu zielen, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu stark an die DOM-Struktur zu koppeln. ([Firefox-Bug 1991105](https://bugzil.la/1991105)).

- Das Legacy-Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird jetzt als Wert für die CSS {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften unterstützt, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox-Bug 1988938](https://bugzil.la/1988938), [Firefox-Bug 1789477](https://bugzil.la/1789477)).

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}} Objekte als Schlüssel, außer für solche, die [registriert](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind. ([Firefox-Bug 1966745](https://bugzil.la/1966745)).

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) erlaubt jetzt das Importieren von Schlüsseln, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) Algorithmen verwendet werden. ([Firefox-Bug 1971499](https://bugzil.la/1971499)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `emulation.setLocaleOverride` Befehl wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` neben JS-APIs zu überschreiben. ([Firefox-Bug 1994396](https://bugzil.la/1994396)).
- Die Reset-Verhaltensweise der Befehle `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` wurde aktualisiert, um den neuesten Spezifikationsänderungen zu entsprechen. Wenn dieser Befehl aufgerufen wird, um die Überschreibung für einen bestimmten Browsingkontext zurückzusetzen, gelten weiterhin Überschreibungen, die für einen Benutzerkontext konfiguriert sind, dem dieser Browsingkontext gehört. ([Firefox-Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context` Lokator zum Befehl `browsingContext.locateNodes` hinzugefügt, der es ermöglicht, den Container von nicht obersten Browsing-Kontexten zu ermitteln, wie z. B. iframe-Elemente. ([Firefox-Bug 1941270](https://bugzil.la/1941270)).
- Der Befehl `network.setExtraHeaders` wurde implementiert, mit dem Anforderungsheader spezifiziert werden können, die automatisch zu Anfragen hinzugefügt werden, die in den bereitgestellten Browsing-Kontexten oder Benutzerkontexten ausgelöst werden. ([Firefox-Bug 1979731](https://bugzil.la/1979731)).
- Alle unsere Netzwerkdatensammlungsbefehle (`network.addDataCollector`, `network.getData` und `network.disownData`) wurden aktualisiert, um den `request` Datentyp zu unterstützen, der das Sammeln und Abrufen von Anfragedaten ermöglicht. ([Firefox-Bug 1988955](https://bugzil.la/1988955)).
- Unserer Implementierung von `network.getData` wurde verbessert, um auch Anfragen mit dem `data:`-Schema zu unterstützen. ([Firefox-Bug 1992210](https://bugzil.la/1992210)).
- Ein Fehler in `network.getData` wurde behoben, der nicht den erwarteten `no such network data` Fehler für nicht unterstützte Anfragen warf. ([Firefox-Bug 1992214](https://bugzil.la/1992214)).
- Ein Fehler in unseren `network` Ereignissen wurde behoben, bei dem unterschiedliche Anfragen die gleiche ID benutzten, was hauptsächlich Daten-URLs oder zwischengespeicherte Anfragen betraf. ([Firefox-Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Ein Rückschritt in `WebDriver:GetElementText`, der dazu führte, dass Text mit Akzentzeichen (z. B. "ó") falsch kapitalisiert wurde, wurde behoben. ([Firefox-Bug 1986392](https://bugzil.la/1986392)).
- Ein Fehler in der JSON-Deserialisierung des `WebFrame` wurde behoben, der fälschlicherweise einen `no such window` Fehler statt `no such frame` bei der Behandlung ungültiger Frames auslöste. ([Firefox-Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung zur Steuerung des [Global Privacy Control](https://w3c.github.io/gpc/) Signals wurde hinzugefügt. ([Firefox-Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-On-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen jetzt Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox-Bug 1886894](https://bugzil.la/1886894))
- Die {{WebExtAPIRef("proxy.onRequest")}} API fügt Unterstützung für MASQUE-Proxys (Proxy-Tunnel über QUIC) im {{WebExtAPIRef("proxy.ProxyInfo")}} Rückgabetyp hinzu. ([Firefox-Bug 1988988](https://bugzil.la/1988988) und [Firefox-Bug 1998894](https://bugzil.la/1998894))

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 146 ausgeliefert, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` und `security.restrict_to_adults.respect_platform`

  Das `<meta name="rating">` Element ermöglicht es Websites, sich als eingeschränkte/inhaltsbeschränkte Inhalte selbst zu identifizieren. Browser, die dieses Element erkennen, können dann Schritte unternehmen, um die Nutzer daran zu hindern, die Inhalte anzusehen. Weitere Informationen finden Sie unter [Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`](/de/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating).
  ([Firefox-Bug 1991135](https://bugzil.la/1991135)).

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  In Nightly-Versionen wird jetzt die [Navigation API](/de/docs/Web/API/Navigation_API) unterstützt, die es ermöglicht, Browser-Navigationsaktionen einzuleiten, abzufangen und zu verwalten. Diese API kann auch die Verlaufsdaten einer Anwendung prüfen. Sie ist der Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Schwächen behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.
  ([Firefox-Bug 1979288](https://bugzil.la/1979288)).

- **Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie ein [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte ermöglichen es, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers positioniert sind, in dem die Form gezeichnet wird.
