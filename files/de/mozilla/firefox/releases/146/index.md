---
title: Firefox 146 Versionshinweise für Entwickler
short-title: Firefox 146
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: fa422ef89f5da5c7bc10a03f8e84b01b8132061c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 wurde am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Im Regel-Ansicht des Inspektors werden, wenn ein angezeigtes Regelset 10 oder mehr ungenutzte [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) deklariert, diese Eigenschaften standardmäßig ausgeblendet. Dies reduziert die Unübersichtlichkeit und beschleunigt in einigen Fällen auch das Rendern des Inspektor-Panels. In solchen Fällen können die ausgeblendeten Eigenschaften über eine Schaltfläche "Anzeigen..." am unteren Rand des Regelsets angezeigt werden.
  ([Firefox Fehler 1719461](https://bugzil.la/1719461)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

- Die Spiegelung von Operatoren in Rechts-nach-Links (RTL)-Modi und das Dehnen funktionieren jetzt ordnungsgemäß, wenn sie in Kombination genutzt werden.
  ([Firefox Fehler 1994172](https://bugzil.la/1994172)).
- Die {{cssxref("math-shift")}}-Eigenschaft wird nun unterstützt. Dies ermöglicht es Entwicklern anzugeben, ob die Hochstellung in MathML-Formeln normal oder kompakt sein soll, was die Höhe beeinflusst, auf die der hochgestellte Text verschoben wird.
  ([Firefox Fehler 1994171](https://bugzil.la/1994171)).

### CSS

- Die {{cssxref("color_value/contrast-color()")}}-Funktion wird jetzt unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox Fehler 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Datentyp unterstützt jetzt den `display-p3-linear` Farbraum. Dieser Raum ähnelt {{Glossary("Color_space#display-p3", "`display-p3`")}}, verwendet jedoch eine lineare Lichtübertragungsfunktion und hat keine Gamma-Codierung, was eine höhere Präzision bei den angezeigten Farben ermöglicht.
  ([Firefox Fehler 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset)-Eigenschaft wird jetzt unterstützt, was ermöglicht, die Anfangs- und Endpunkte einer Element-{{cssxref("text-decoration")}} anzupassen, um sie zu verkürzen, zu verlängern oder ihre Position im Verhältnis zum angezeigten Text zu verschieben.
  ([Firefox Fehler 1979915](https://bugzil.la/1979915), [Firefox Fehler 1997157](https://bugzil.la/1997157), [Firefox Fehler 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}}-Regel wird jetzt standardmäßig unterstützt. Dies ermöglicht es, Elemente in bestimmten DOM-Teilbäumen auszuwählen, Elemente gezielt anzusprechen, ohne übermäßig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne die Selektoren zu eng mit der DOM-Struktur zu koppeln. ([Firefox Fehler 1991105](https://bugzil.la/1991105)).

- Das veraltete [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values)-Schlüsselwort wird jetzt als Wert für die CSS-{{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch`-Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox Fehler 1988938](https://bugzil.la/1988938), [Firefox Fehler 1789477](https://bugzil.la/1789477)).

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}}-Objekte als Schlüssel, mit Ausnahme der [registrierten](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry). ([Firefox Fehler 1966745](https://bugzil.la/1966745)).

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) erlaubt es jetzt, Schlüssel zu importieren, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)- oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)-Algorithmen verwendet werden. ([Firefox Fehler 1971499](https://bugzil.la/1971499)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `emulation.setLocaleOverride`-Befehl wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` zusammen mit JS-APIs zu überschreiben. ([Firefox Fehler 1994396](https://bugzil.la/1994396)).
- Die Reset-Verhaltensweise der `emulation.setLocaleOverride`- und `emulation.setTimezoneOverride`-Befehle wurde aktualisiert, um den jüngsten Spezifikationsänderungen zu entsprechen. Wenn dieser Befehl aufgerufen wird, um die Überschreibung für einen bestimmten Browsing-Kontext zurückzusetzen, gelten weiterhin Überschreibungen, die für einen Benutzerkontext konfiguriert sind, der diesen Browsing-Kontext besitzt. ([Firefox Fehler 1988725](https://bugzil.la/1988725)).
- Unterstützung für das `context`-Locator zur Verfügung gestellt, der es ermöglicht, den Container von nicht-Top-Level Browsing-Kontexten, wie z.B. `<iframe>`-Elemente, abzurufen. ([Firefox Fehler 1941270](https://bugzil.la/1941270)).
- Der `network.setExtraHeaders`-Befehl wurde implementiert, der verwendet werden kann, um Anforderungsheader anzugeben, die automatisch zu Anfragen hinzugefügt werden, die in den bereitgestellten Browsing-Kontexten oder Benutzerkontexten ausgelöst werden. ([Firefox Fehler 1979731](https://bugzil.la/1979731)).
- Alle unsere Befehle zur Netzwerkdatensammlung (`network.addDataCollector`, `network.getData` und `network.disownData`) wurden aktualisiert, um den `request`-Datentyp zu unterstützen, der es ermöglicht, Anforderungs-Post-Daten zu sammeln und abzurufen. ([Firefox Fehler 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` wurde verbessert, um auch Anfragen zu unterstützen, die das `data:`-Schema verwenden. ([Firefox Fehler 1992210](https://bugzil.la/1992210)).
- Ein Fehler bei `network.getData` wurde behoben, das nicht den erwarteten `no such network data`-Fehler bei nicht unterstützten Anfragen warf. ([Firefox Fehler 1992214](https://bugzil.la/1992214)).
- Ein Fehler in unseren `network`-Events wurde behoben, bei dem unterschiedliche Anfragen dieselbe ID wiederverwendeten, was hauptsächlich Daten-URLs oder zwischengespeicherte Anfragen betraf. ([Firefox Fehler 1992348](https://bugzil.la/1992348)).

#### Marionette

- Ein Rückschritt in `WebDriver:GetElementText` wurde behoben, durch den Text, der Akzentzeichen enthält (z.B. "ó") falsch großgeschrieben wurde. ([Firefox Fehler 1986392](https://bugzil.la/1986392)).
- Ein Fehler bei der JSON-Deserialisierung von `WebFrame` wurde behoben, der fälschlicherweise einen `no such window`-Fehler anstelle eines `no such frame`-Fehlers auslöste, wenn ungültige Frames verarbeitet wurden. ([Firefox Fehler 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung wurde hinzugefügt, um das [Global Privacy Control](https://w3c.github.io/gpc/)-Signal zu steuern. ([Firefox Fehler 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox Fehler 1886894](https://bugzil.la/1886894))
- Die {{WebExtAPIRef("proxy.onRequest")}}-API fügt Unterstützung für MASQUE-Proxys (Proxy-Tunnel über QUIC) im {{WebExtAPIRef("proxy.ProxyInfo")}}-Rückgabetyp hinzu. ([Firefox Fehler 1988988](https://bugzil.la/1988988) und Firefox Fehler 1998894](https://bugzil.la/1998894))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 146 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` und `security.restrict_to_adults.respect_platform`

  Das `<meta name="rating">`-Element erlaubt es Websites, sich selbst als beschränkt/erwachsenen Inhalte zu kennzeichnen. Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt anzusehen. Einzelheiten finden Sie unter [Beschränkung von Erwachseneninhalten mit `<meta name="rating">`](/de/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating).
  ([Firefox Fehler 1991135](https://bugzil.la/1991135)).

- **Navigations-API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen nun die [Navigation API](/de/docs/Web/API/Navigation_API), die die Möglichkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Einträge im Verlauf einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Webplattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), der deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} zugeschnitten ist.
  ([Firefox Fehler 1979288](https://bugzil.la/1979288)).

- **Relative Kontrollpunkte in CSS-`shape()`-Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point)-Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()`-Funktion angeben. Diese Werte ermöglichen es, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben-links) des Containers positioniert sind, in dem die Form gezeichnet wird.

- **Benutzerdefinierte Medienabfragen**: `layout.css.custom-media.enabled`

  Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media)-CSS-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt dasselbe fest codierte `<media-query-list>` in mehreren `@media`-Regeln zu wiederholen, kann es einmal in einer `@custom-media`-Regel definiert und im gesamten Stylesheet bei Bedarf referenziert werden. ([Firefox Fehler 1744292](https://bugzil.la/1744292)).
