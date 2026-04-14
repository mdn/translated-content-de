---
title: Firefox 146 Versionshinweise für Entwickler
short-title: Firefox 146
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: d9e71f8b15265a041b550a54a1d0970f049053e4
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 146, die Entwickler betreffen. Firefox 146 wurde am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- In der Regelansicht des Inspektors werden, wenn ein angezeigtes Regelset 10 oder mehr [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) enthält, die ungenutzt sind, diese Eigenschaften standardmäßig ausgeblendet. Dies reduziert das Durcheinander und beschleunigt in einigen Fällen auch die Darstellung des Inspektor-Panels. In solchen Fällen können die ausgeblendeten Eigenschaften über eine "Anzeigen..."-Schaltfläche am unteren Rand des Regelsets angezeigt werden. ([Firefox Bug 1719461](https://bugzil.la/1719461)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

- Operatorenspiegelung in Rechts-nach-Links (RTL)-Modi und Streckung funktionieren jetzt einwandfrei, wenn sie in Kombination verwendet werden. ([Firefox Bug 1994172](https://bugzil.la/1994172)).
- Die {{cssxref("math-shift")}}-Eigenschaft wird jetzt unterstützt. Dies ermöglicht es Entwicklern anzugeben, ob Hochstellerrendering in MathML-Formeln normal oder kompakt sein sollte, wodurch die Höhe beeinflusst wird, auf die der hochgestellte Text verschoben wird. ([Firefox Bug 1994171](https://bugzil.la/1994171)).

### CSS

- Die {{cssxref("color_value/contrast-color()")}}-Funktion wird jetzt unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Wert und gibt eine Kontrastfarbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) gewährleistet. ([Firefox Bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp unterstützt nun den `display-p3-linear` Farbraum. Dieser Raum ist dem {{Glossary("Color_space#display-p3", "`display-p3`")}} ähnlich, außer dass er eine lineare Lichtübertragungsfunktion verwendet und keine Gamma-Kodierung hat, was eine höhere Präzision bei den angezeigten Farben ermöglicht. ([Firefox Bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset) Eigenschaft wird nun unterstützt, was es ermöglicht, die Anfangs- und Endpunkte der {{cssxref("text-decoration")}} eines Elements anzupassen, sodass sie verkürzt, verlängert oder ihre Position in Bezug auf den gerenderten Text verschoben werden kann. ([Firefox Bug 1979915](https://bugzil.la/1979915), [Firefox Bug 1997157](https://bugzil.la/1997157), [Firefox Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht Ihnen, Elemente in spezifischen DOM-Teilbäumen auszuwählen, sodass Sie Elemente präzise ansprechen können, ohne übermäßig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu eng mit der DOM-Struktur zu koppeln. ([Firefox Bug 1991105](https://bugzil.la/1991105)).

- Das veraltete [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) Schlüsselwort wird jetzt als Wert für die CSS {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften unterstützt, um die Web-Kompatibilität zu verbessern. Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird. ([Firefox Bug 1988938](https://bugzil.la/1988938), [Firefox Bug 1789477](https://bugzil.la/1789477)).

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}} Objekte als Schlüssel, abgesehen von denen, die [registriert](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind. ([Firefox Bug 1966745](https://bugzil.la/1966745)).

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) erlaubt jetzt das Importieren von Schlüsseln, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) Algorithmen verwendet werden. ([Firefox Bug 1971499](https://bugzil.la/1971499)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `emulation.setLocaleOverride` Befehl wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` neben JS-APIs zu überschreiben. ([Firefox Bug 1994396](https://bugzil.la/1994396)).
- Die Reset-Verhalten der `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` Befehle wurden aktualisiert, um die jüngsten Spezifikationsänderungen zu berücksichtigen. Wenn dieser Befehl aufgerufen wird, um die Überschreibung für einen bestimmten Browsing-Kontext zurückzusetzen, werden die für einen Benutzerkontext konfigurierten Überschreibungen, die diesen Browsing-Kontext besitzen, weiterhin angewendet. ([Firefox Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context` Locator wurde zum `browsingContext.locateNodes` Befehl hinzugefügt, der es ermöglicht, den Container von nicht-top-level Browsing-Kontexten abzurufen, wie z.B. iframe Elemente. ([Firefox Bug 1941270](https://bugzil.la/1941270)).
- Der `network.setExtraHeaders` Befehl wurde implementiert, mit dem Sie Anforderungsheader angeben können, die automatisch zu Anforderungen hinzugefügt werden, die in den bereitgestellten Browsing-Kontexten oder Benutzerkontexten ausgelöst werden. ([Firefox Bug 1979731](https://bugzil.la/1979731)).
- Alle unsere Netzwerkdatensammlungsbefehle (`network.addDataCollector`, `network.getData` und `network.disownData`) wurden aktualisiert, um den `request` Datentyp zu unterstützen, der es ermöglicht, Anfragedaten zu sammeln und abzurufen. ([Firefox Bug 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` wurde verbessert, sodass auch Anforderungen mit dem `data:` Schema unterstützt werden. ([Firefox Bug 1992210](https://bugzil.la/1992210)).
- Ein Fehler in `network.getData` wurde behoben, bei dem nicht der erwartete `no such network data` Fehler für nicht unterstützte Anfragen ausgeworfen wurde. ([Firefox Bug 1992214](https://bugzil.la/1992214)).
- Ein Fehler in unseren `network` Ereignissen wurde behoben, bei dem verschiedene Anfragen dieselbe ID wiederverwendet haben, was hauptsächlich Daten-URLs oder zwischengespeicherte Anfragen betraf. ([Firefox Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Ein Rückschritt in `WebDriver:GetElementText` behoben, der dazu führte, dass Text mit Akzentzeichen (z.B. "ó") falsch großgeschrieben wurde. ([Firefox Bug 1986392](https://bugzil.la/1986392)).
- Ein Fehler in der `WebFrame` JSON Deserialisierung wurde behoben, der fälschlicherweise einen `no such window` Fehler anstatt `no such frame` geworfen hat, wenn ungültige Frames behandelt wurden. ([Firefox Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung hinzugefügt, um das [Global Privacy Control](https://w3c.github.io/gpc/) Signal zu steuern. ([Firefox Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus dem [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox Bug 1886894](https://bugzil.la/1886894))
- Die {{WebExtAPIRef("proxy.onRequest")}} API fügt Unterstützung für MASQUE-Proxies (Proxy-Tunnel über QUIC) im {{WebExtAPIRef("proxy.ProxyInfo")}} Rückgabetyp hinzu. ([Firefox Bug 1988988](https://bugzil.la/1988988) und Firefox Bug 1998894](https://bugzil.la/1998894))

## Experimentelle Web Features

Diese Features werden in Firefox 146 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach dem entsprechenden Präferenznamen und setzen Sie ihn auf `true`. Weitere solcher Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` und `security.restrict_to_adults.respect_platform`

  Das `<meta name="rating">` Element ermöglicht es Websites, sich selbst als eingeschränkte/erwachsene Inhalte zu identifizieren. Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, die Inhalte anzuzeigen. Weitere Details finden Sie unter [Einschränken von Inhalten für Erwachsene mit `<meta name="rating">`](/de/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating). ([Firefox Bug 1991135](https://bugzil.la/1991135)).

- **Navigations-API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen nun die [Navigations-API](/de/docs/Web/API/Navigation_API), die die Möglichkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Sie kann auch die Einträge im Verlauf einer Anwendung untersuchen. Dies ist der Nachfolger früherer Web-Plattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die ihre Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgelegt ist. ([Firefox Bug 1979288](https://bugzil.la/1979288)).

- **Relative Kontrollpunkte in CSS `shape()` Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()` Funktion angeben. Diese Werte ermöglichen es, Kontrollpunkte anzugeben, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird, positioniert sind.
