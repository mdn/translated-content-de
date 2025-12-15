---
title: Firefox 146 Versionshinweise für Entwickler (Stable)
short-title: Firefox 146 (Stable)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: a463028f1236abd253169f5cb5ddf3445089d6e8
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 wurde am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- In der Regelansicht des Inspektors werden, wenn ein angezeigtes Regelset 10 oder mehr [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) deklariert, die ungenutzt sind, diese Eigenschaften standardmäßig ausgeblendet. Dies verringert die Unübersichtlichkeit und beschleunigt in einigen Fällen auch das Rendering des Inspektor-Panels. In solchen Fällen können die ausgeblendeten Eigenschaften über eine "Anzeigen..."-Schaltfläche am Ende des Regelsets angezeigt werden.
  ([Firefox-Bug 1719461](https://bugzil.la/1719461)).

### HTML

Keine bemerkenswerten Änderungen.

### MathML

- Das Spiegeln von Operatoren im Rechts-nach-Links (RTL) Modus und das Strecken funktionieren jetzt ordnungsgemäß in Kombination.
  ([Firefox-Bug 1994172](https://bugzil.la/1994172)).
- Die {{cssxref("math-shift")}}-Eigenschaft wird jetzt unterstützt. Dies ermöglicht es Entwicklern, anzugeben, ob die hochgestellte Darstellung in MathML-Formeln normal oder kompakt sein soll und beeinflusst die Höhe, auf die hochgestellte Texte verschoben werden.
  ([Firefox-Bug 1994171](https://bugzil.la/1994171)).

### CSS

- Die {{cssxref("color_value/contrast-color()")}}-Funktion wird jetzt unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) gewährleistet.
  ([Firefox-Bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp unterstützt jetzt den `display-p3-linear`-Farbraum. Dieser Farbraum ähnelt {{Glossary("Color_space#display-p3", "`display-p3`")}}, verwendet jedoch eine lineare Transferfunktion und keine Gamma-Kodierung, was eine höhere Präzision der angezeigten Farben ermöglicht.
  ([Firefox-Bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset)-Eigenschaft wird jetzt unterstützt, was es ermöglicht, die Start- und Endpunkte einer {{cssxref("text-decoration")}} eines Elements anzupassen, sodass sie verkürzt, verlängert oder in Bezug auf den gerenderten Text verschoben werden kann.
  ([Firefox-Bug 1979915](https://bugzil.la/1979915), [Firefox-Bug 1997157](https://bugzil.la/1997157), [Firefox-Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht es, Elemente in spezifischen DOM-Teilbäumen auszuwählen, indem gezielt Elemente angesprochen werden, ohne zu spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne Ihre Selektoren zu stark an die DOM-Struktur zu binden. ([Firefox-Bug 1991105](https://bugzil.la/1991105)).

- Das Legacy-Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird jetzt als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Web-Kompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch`-Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox-Bug 1988938](https://bugzil.la/1988938), [Firefox-Bug 1789477](https://bugzil.la/1789477)).

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}}-Objekte als Schlüssel, außer für diejenigen, die [registriert](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind. ([Firefox-Bug 1966745](https://bugzil.la/1966745)).

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) ermöglicht es jetzt, Schlüssel zu importieren, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)- oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)-Algorithmen verwendet werden. ([Firefox-Bug 1971499](https://bugzil.la/1971499)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `emulation.setLocaleOverride`-Befehl wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` neben JS-APIs zu überschreiben. ([Firefox-Bug 1994396](https://bugzil.la/1994396)).
- Die Rücksetzverhalten der Befehle `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` wurde aktualisiert, um den aktuellen Spezifikationsänderungen zu entsprechen. Wenn dieser Befehl aufgerufen wird, um die Überschreibung für einen bestimmten Browsing-Kontext zurückzusetzen, gelten weiterhin die für einen Benutzerkontext konfigurierten Überschreibungen, der diesen Browsing-Kontext besitzt. ([Firefox-Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context`-Lokator zum `browsingContext.locateNodes`-Befehl hinzugefügt, der das Abrufen des Containers von nicht obersten Browsing-Kontexten, wie iframe-Elemente, ermöglicht. ([Firefox-Bug 1941270](https://bugzil.la/1941270)).
- Implementierung des `network.setExtraHeaders`-Befehls, der verwendet werden kann, um Anforderungsheader anzugeben, die automatisch zu Anfragen hinzugefügt werden, die in den bereitgestellten Browsing-Kontexten oder Benutzerkontexten ausgelöst werden. ([Firefox-Bug 1979731](https://bugzil.la/1979731)).
- Alle unsere Netzwerkdaten-Sammlungsbefehle (`network.addDataCollector`, `network.getData` und `network.disownData`) wurden aktualisiert, um den `request`-Datentyp zu unterstützen, der es ermöglicht, Anforderungs-Post-Daten zu sammeln und abzurufen. ([Firefox-Bug 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` wurde verbessert, um auch Anfragen mit dem `data:`-Schema zu unterstützen. ([Firefox-Bug 1992210](https://bugzil.la/1992210)).
- Ein Fehler in `network.getData` wurde behoben, der nicht den erwarteten `no such network data`-Fehler für nicht unterstützte Anfragen auslöste. ([Firefox-Bug 1992214](https://bugzil.la/1992214)).
- Ein Fehler in unseren `network`-Ereignissen wurde behoben, bei dem verschiedene Anfragen die gleiche ID wieder verwendeten, was hauptsächlich Auswirkungen auf Daten-URLs oder zwischengespeicherte Anfragen hatte. ([Firefox-Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Ein Rückschritt in `WebDriver:GetElementText` wurde behoben, der verursachte, dass Text mit Akzentzeichen (z.B. "ó") falsch großgeschrieben wurde. ([Firefox-Bug 1986392](https://bugzil.la/1986392)).
- Ein Fehler in der `WebFrame`-JSON-Deserialisierung wurde behoben, der fälschlicherweise einen `no such window`-Fehler anstelle eines `no such frame`-Fehlers auslöste, wenn ungültige Frames verarbeitet wurden. ([Firefox-Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung zur Steuerung des [Global Privacy Control](https://w3c.github.io/gpc/)-Signals wurde hinzugefügt. ([Firefox-Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen jetzt Objekte aus dem [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox-Bug 1886894](https://bugzil.la/1886894))

## Experimentelle Webfeatures

Diese Funktionen werden in Firefox 146 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite für [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` und `security.restrict_to_adults.respect_platform`

  Das `<meta name="rating">`-Element ermöglicht es Websites, sich selbst als eingeschränkter/erwachsener Inhalt zu identifizieren. Browser, die dieses Element erkennen, können dann Maßnahmen ergreifen, um Benutzer daran zu hindern, den Inhalt anzusehen. Weitere Details finden Sie unter [Einschränkung von Inhalten für Erwachsene mit `<meta name="rating">`](/de/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating).
  ([Firefox-Bug 1991135](https://bugzil.la/1991135)).

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly-Builds unterstützen jetzt die [Navigation API](/de/docs/Web/API/Navigation_API), die die Fähigkeit bietet, Browser-Navigationsaktionen zu initiieren, zu unterbrechen und zu verwalten. Es kann auch die Historieneinträge einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Web-Plattform-Funktionen wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel behebt und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Applications (SPAs)")}} ausgerichtet ist.
  ([Firefox-Bug 1979288](https://bugzil.la/1979288)).

- **Relative Kontrollpunkte in CSS `shape()`-Kurvenbefehlen**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point)-Werte verwenden, wenn Sie einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()`-Funktion angeben. Diese Werte ermöglichen es Ihnen, Kontrollpunkte zu spezifizieren, die relativ zum Start- oder Endpunkt des aktuellen Befehls oder relativ zum Ursprung (oben-links) des Containers, in dem die Form gezeichnet wird, positioniert sind.

- **Benutzerdefinierte Medienabfragen**: `layout.css.custom-media.enabled`

  Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS-At-Regel definiert Aliase für lange oder komplexe Medienabfragen. Anstatt die gleiche hartkodierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und überall im Stylesheet bei Bedarf referenziert werden. ([Firefox-Bug 1744292](https://bugzil.la/1744292)).
