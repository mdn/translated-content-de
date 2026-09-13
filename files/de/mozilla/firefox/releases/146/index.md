---
title: Firefox 146 Veröffentlichungsnotizen für Entwickler
short-title: Firefox 146
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 wurde am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- In der Regelansicht des Inspektors werden, wenn ein angezeigtes Regelset 10 oder mehr nicht verwendete [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) deklariert, diese standardmäßig ausgeblendet. Dies reduziert Unordnung und beschleunigt in manchen Fällen auch das Rendern des Inspektorpenals. In solchen Fällen können die ausgeblendeten Eigenschaften über eine bereitgestellte Schaltfläche "Anzeigen..." am unteren Ende des Regelsets sichtbar gemacht werden.
  ([Firefox Bug 1719461](https://bugzil.la/1719461)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

- Das Spiegeln von Operatoren in Rechts-nach-Links-Modi (RTL) und das Dehnen funktionieren jetzt ordnungsgemäß, wenn sie in Kombination verwendet werden.
  ([Firefox Bug 1994172](https://bugzil.la/1994172)).
- Die {{cssxref("math-shift")}}-Eigenschaft wird jetzt unterstützt. Dies ermöglicht Entwicklern anzugeben, ob die Hochstellung in MathML-Formeln normal oder kompakt gerendert werden soll, was die Höhe beeinflusst, in die hochgestellter Text verschoben wird.
  ([Firefox Bug 1994171](https://bugzil.la/1994171)).

### CSS

- Die {{cssxref("color_value/contrast-color()")}}-Funktion wird jetzt unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert und gibt eine Kontrastfarbe zurück, die mindestens den [WCAG AA minimalen Kontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) gewährleistet.
  ([Firefox Bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Datentyp unterstützt jetzt den `display-p3-linear`-Farbraum. Dieser Raum ähnelt {{Glossary("Color_space#display-p3", "`display-p3`")}}, verwendet jedoch eine linear-geführte Transferfunktion und keine Gammakodierung, was eine höhere Präzision bei den angezeigten Farben ermöglicht.
  ([Firefox Bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset)-Eigenschaft wird jetzt unterstützt, was das Anpassen der Start- und Endpunkte einer {{cssxref("text-decoration")}} eines Elements ermöglicht, so dass sie verkürzt, verlängert oder ihre Position im Vergleich zum gerenderten Text verschoben werden kann.
  ([Firefox Bug 1979915](https://bugzil.la/1979915), [Firefox Bug 1997157](https://bugzil.la/1997157), [Firefox Bug 1993043](https://bugzil.la/1993043)).

- Der {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht es Ihnen, Elemente in spezifischen DOM-Teilbäumen auszuwählen, um Elemente präzise zu steuern, ohne übermäßig spezifische Selektoren schreiben zu müssen, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng an die DOM-Struktur zu koppeln. ([Firefox Bug 1991105](https://bugzil.la/1991105)).

- Das Legacy-Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird jetzt als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch`-Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox Bug 1988938](https://bugzil.la/1988938), [Firefox Bug 1789477](https://bugzil.la/1789477)).

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}}-Objekte als Schlüssel, außer für die, die [registriert](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind. ([Firefox Bug 1966745](https://bugzil.la/1966745)).

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) ermöglicht jetzt das Importieren von Schlüsseln, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)- oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)-Algorithmen verwendet werden. ([Firefox Bug 1971499](https://bugzil.la/1971499)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `emulation.setLocaleOverride` wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` zusammen mit JS-APIs zu überschreiben. ([Firefox Bug 1994396](https://bugzil.la/1994396)).
- Das Rücksetzverhalten der Befehle `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` wurde aktualisiert, um den jüngsten Spezifikationsänderungen zu entsprechen. Wenn dieser Befehl aufgerufen wird, um die Überschreibung für einen bestimmten Browsing-Kontext zurückzusetzen, gelten die Überschreibungen, die für einen Benutzungskontext konfiguriert sind, der diesen Browsing-Kontext besitzt, weiterhin. ([Firefox Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context`-Locator zum Befehl `browsingContext.locateNodes` hinzugefügt, der es Ihnen ermöglicht, den Container von Nicht-Top-Level-Browsing-Kontexten, wie z. B. iframe-Elemente, abzurufen. ([Firefox Bug 1941270](https://bugzil.la/1941270)).
- Der Befehl `network.setExtraHeaders` wurde implementiert, der verwendet werden kann, um Anforderungsheader anzugeben, die automatisch zu in den bereitgestellten Browsing-Kontexten oder Benutzungskontexten ausgelösten Anfragen hinzugefügt werden. ([Firefox Bug 1979731](https://bugzil.la/1979731)).
- Alle unsere Netzwerkdaten-Sammlungsbefehle (`network.addDataCollector`, `network.getData` und `network.disownData`) wurden aktualisiert, um den `request`-Datentyp zu unterstützen, der es Ihnen ermöglicht, Anforderungs-Postdaten zu sammeln und abzurufen. ([Firefox Bug 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` wurde verbessert, um auch Anfragen zu unterstützen, die das `data:`-Schema verwenden. ([Firefox Bug 1992210](https://bugzil.la/1992210)).
- Ein Fehler für `network.getData` wurde behoben, der nicht den erwarteten `no such network data`-Fehler für nicht unterstützte Anfragen geworfen hat. ([Firefox Bug 1992214](https://bugzil.la/1992214)).
- Ein Fehler in unseren `network`-Ereignissen wurde behoben, bei dem unterschiedliche Anfragen dieselbe ID verwendeten, was sich hauptsächlich auf Daten-URLs oder zwischengespeicherte Anfragen auswirkte. ([Firefox Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Eine Regression in `WebDriver:GetElementText` wurde behoben, die dazu führte, dass Text mit Akzentzeichen (z. B. "ó") falsch großgeschrieben wurde. ([Firefox Bug 1986392](https://bugzil.la/1986392)).
- Ein Fehler in der `WebFrame`-JSON-Deserialisierung wurde behoben, der fälschlich einen `no such window`-Fehler anstelle von `no such frame` auslöste, wenn mit ungültigen Frames umgegangen wurde. ([Firefox Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung zur Steuerung des [Global Privacy Control](https://w3c.github.io/gpc/)-Signals wurde hinzugefügt. ([Firefox Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen jetzt Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox Bug 1886894](https://bugzil.la/1886894))
- Die {{WebExtAPIRef("proxy.onRequest")}}-API fügt Unterstützung für MASQUE-Proxys (Proxy-Tunnel über QUIC) im Rückgabetyp {{WebExtAPIRef("proxy.ProxyInfo")}} hinzu. ([Firefox Bug 1988988](https://bugzil.la/1988988) und [Firefox Bug 1998894](https://bugzil.la/1998894))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 146 enthalten, jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` und `security.restrict_to_adults.respect_platform`

  Das `<meta name="rating">`-Element ermöglicht es Websites, sich selbst als eingeschränkten/erwachsenen Inhalt zu kennzeichnen. Browser, die dieses Element erkennen, können dann Schritte unternehmen, um zu verhindern, dass Benutzer den Inhalt ansehen. Weitere Einzelheiten finden Sie unter [Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`](/de/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating).
  ([Firefox Bug 1991135](https://bugzil.la/1991135)).

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen jetzt die [Navigation API](/de/docs/Web/API/Navigation_API), die die Fähigkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Historieneinträge einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Webplattformfunktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die ihre Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} zugeschnitten ist.
  ([Firefox Bug 1979288](https://bugzil.la/1979288)).

- **Relative Steuerpunkte in CSS-`shape()`-Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point)-Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS-`shape()`-Funktion angeben. Diese Werte ermöglichen es Ihnen, Steuerpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind.
