---
title: Firefox 146 Versionshinweise für Entwickler (Beta)
short-title: Firefox 146 (Beta)
slug: Mozilla/Firefox/Releases/146
l10n:
  sourceCommit: 90ef657588dd961881a459e576fb3635d6868d49
---

Dieser Artikel bietet Informationen zu Änderungen in Firefox 146, die Entwickler betreffen.
Firefox 146 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [9. Dezember 2025](https://whattrainisitnow.com/release/?version=146) veröffentlicht.

> [!NOTE]
> Die Versionshinweise zu dieser Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Im Regel-Ansicht des Inspektors werden in einem angezeigten Regelset, das 10 oder mehr nicht verwendete [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) deklariert, diese Eigenschaften standardmäßig ausgeblendet. Dies reduziert Unordnung und beschleunigt in einigen Fällen das Rendering des Inspektor-Panels. In solchen Fällen können die ausgeblendeten Eigenschaften über eine am unteren Rand des Regelsets bereitgestellte "Anzeigen..."-Schaltfläche sichtbar gemacht werden.
  ([Firefox-Bug 1719461](https://bugzil.la/1719461)).

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

### MathML

- Die Spiegelung von Operatoren in Rechts-nach-Links (RTL)-Modi und das Dehnen funktionieren jetzt ordnungsgemäß, wenn sie in Kombination verwendet werden.
  ([Firefox-Bug 1994172](https://bugzil.la/1994172)).
- Die {{cssxref("math-shift")}}-Eigenschaft wird jetzt unterstützt. Dies ermöglicht Entwicklern anzugeben, ob die Hochstellung in MathML-Formeln normal oder kompakt sein soll, was die Höhe beeinflusst, um die der Hochtext verschoben wird.
  ([Firefox-Bug 1994171](https://bugzil.la/1994171)).

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

### CSS

- Die {{cssxref("color_value/contrast-color()")}}-Funktion wird jetzt unterstützt. Diese Funktion nimmt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Wert und gibt eine kontrastierende Farbe zurück, die mindestens den [WCAG AA Mindestkontrast](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) sicherstellt.
  ([Firefox-Bug 1682439](https://bugzil.la/1682439)).

- Der [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Datentyp unterstützt jetzt den `display-p3-linear`-Farbraum. Dieser Raum ähnelt dem {{Glossary("Color_space#display-p3", "`display-p3`")}}, verwendet jedoch eine linear-light-Transferfunktion und keine Gamma-Kodierung, was eine höhere Präzision bei den angezeigten Farben ermöglicht.
  ([Firefox-Bug 1996318](https://bugzil.la/1996318)).

- Die [`text-decoration-inset`](/de/docs/Web/CSS/Reference/Properties/text-decoration-inset)-Eigenschaft wird jetzt unterstützt, was es ermöglicht, die Anfangs- und Endpunkte einer {{cssxref("text-decoration")}} eines Elements anzupassen, sodass sie verkürzt, verlängert oder ihre Position im Verhältnis zum gerenderten Text verschoben werden kann.
  ([Firefox-Bug 1979915](https://bugzil.la/1979915), [Firefox-Bug 1997157](https://bugzil.la/1997157), [Firefox-Bug 1993043](https://bugzil.la/1993043)).

- Die {{cssxref("@scope")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) wird jetzt standardmäßig unterstützt. Dies ermöglicht es, Elemente in bestimmten DOM-Teilbäumen auszuwählen, um Elemente präzise zu zielen, ohne übermäßig spezifische Selektoren zu schreiben, die schwer zu überschreiben sind, und ohne die Selektoren zu eng an die DOM-Struktur zu koppeln. ([Firefox-Bug 1991105](https://bugzil.la/1991105)).

- Das veraltete Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/Reference/Webkit_extensions#-webkit-prefixed_property_values) wird jetzt als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte `stretch` Schlüsselwort (d.h. [`width: stretch`](/de/docs/Web/CSS/Reference/Properties/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/Reference/Properties/height#stretch)), das in Firefox noch nicht unterstützt wird.
  ([Firefox-Bug 1988938](https://bugzil.la/1988938), [Firefox-Bug 1789477](https://bugzil.la/1789477)).

<!-- #### Entfernt -->

### JavaScript

- {{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} akzeptieren jetzt {{jsxref("Symbol")}}-Objekte als Schlüssel, außer für solche, die im [globalen Symbolregister](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) registriert sind. ([Firefox-Bug 1966745](https://bugzil.la/1966745)).

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) erlaubt jetzt den Import von Schlüsseln, die als komprimierte elliptische Kurvenpunkte definiert sind, wenn die [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)- oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh)-Algorithmen verwendet werden. ([Firefox-Bug 1971499](https://bugzil.la/1971499)).

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web-Audio -->

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das `emulation.setLocaleOverride`-Kommando wurde aktualisiert, um den Rückgabewert von `navigator.language` und `navigator.languages` neben JS-APIs zu überschreiben. ([Firefox-Bug 1994396](https://bugzil.la/1994396)).
- Das Verhalten des Zurücksetzens von `emulation.setLocaleOverride` und `emulation.setTimezoneOverride` wurde aktualisiert, um den neuesten Spezifikationsänderungen zu entsprechen. Wenn dieses Kommando aufgerufen wird, um die Überschreibung für einen bestimmten Browsing-Kontext zurückzusetzen, gelten die Überschreibungen, die für einen Benutzerkontext, der diesen Browsing-Kontext besitzt, konfiguriert wurden, weiterhin. ([Firefox-Bug 1988725](https://bugzil.la/1988725)).
- Unterstützung für den `context`-Locator zum Kommando `browsingContext.locateNodes` hinzugefügt, der es ermöglicht, den Container von nicht zu obersten Ebenen gehörenden Browsing-Kontexten, wie z.B. `<iframe>`-Elemente, abzurufen. ([Firefox-Bug 1941270](https://bugzil.la/1941270)).
- Das `network.setExtraHeaders`-Kommando implementiert, das verwendet werden kann, um Anforderungsheader zu spezifizieren, die automatisch zu Anfragen hinzugefügt werden, die in den bereitgestellten Browsing-Kontexten oder Benutzerkontexten ausgelöst werden. ([Firefox-Bug 1979731](https://bugzil.la/1979731)).
- Alle unsere Netzwerkdatensammlungskommandos (`network.addDataCollector`, `network.getData` und `network.disownData`) aktualisiert, um den `request`-Datentyp zu unterstützen, der es erlaubt, Anforderungs-Postdaten zu sammeln und abzurufen. ([Firefox-Bug 1988955](https://bugzil.la/1988955)).
- Unsere Implementierung für `network.getData` verbessert, um auch Anfragen mit dem `data:`-Schema zu unterstützen. ([Firefox-Bug 1992210](https://bugzil.la/1992210)).
- Einen Fehler für `network.getData` behoben, der nicht den erwarteten Fehler `no such network data` für nicht unterstützte Anfragen geworfen hat. ([Firefox-Bug 1992214](https://bugzil.la/1992214)).
- Einen Fehler in unseren `network`-Ereignissen behoben, bei dem verschiedene Anfragen dieselbe ID wiederverwendeten, was hauptsächlich Daten-URLs oder zwischengespeicherte Anfragen betraf. ([Firefox-Bug 1992348](https://bugzil.la/1992348)).

#### Marionette

- Eine Regression in `WebDriver:GetElementText` behoben, die dazu führte, dass Text mit Akzentzeichen (z.B. "ó") falsch großgeschrieben wurde. ([Firefox-Bug 1986392](https://bugzil.la/1986392)).
- Einen Fehler in der `WebFrame` JSON-Deserialisierung behoben, der fälschlicherweise einen `no such window`-Fehler statt `no such frame` beim Umgang mit ungültigen Frames ausgelöst hat. ([Firefox-Bug 1996540](https://bugzil.la/1996540)).
- Eine WebDriver-Erweiterung hinzugefügt, um das [Global Privacy Control](https://w3c.github.io/gpc/)-Signal zu steuern. ([Firefox-Bug 1969865](https://bugzil.la/1969865)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} und {{WebExtAPIRef("browsingData.remove")}} (wenn `localStorage` in {{WebExtAPIRef("browsingData.DataTypeSet")}} gesetzt ist) löschen nun Objekte aus dem [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage). ([Firefox-Bug 1886894](https://bugzil.la/1886894))

<!-- ### Entfernt -->

<!-- ### Andere -->

## Experimentelle Web-Features

Diese Features werden in Firefox 146 veröffentlicht, sind aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **`<meta name="rating">`** (Nightly): `security.restrict_to_adults.always` und `security.restrict_to_adults.respect_platform`

  Das `<meta name="rating">`-Element ermöglicht es Websites, sich selbst als eingeschränkte/adult Inhalte zu identifizieren. Browser, die dieses Element erkennen, können dann Schritte unternehmen, um Benutzer daran zu hindern, die Inhalte zu sehen. Siehe [Einschränken von Inhalten für Erwachsene mit `<meta name="rating">`](/de/docs/Mozilla/Firefox/Experimental_features#restricting_adult_content_with_meta_namerating) für weitere Details.
  ([Firefox-Bug 1991135](https://bugzil.la/1991135)).

- **Navigation API** (Nightly): `dom.navigation.webidl.enabled`

  Nightly Builds unterstützen jetzt die Navigation API, die die Möglichkeit bietet, Browser-Navigationsaktionen zu initiieren, abzufangen und zu verwalten. Es kann auch die Verlaufseinträge einer Anwendung untersuchen. Dies ist ein Nachfolger früherer Webplattform-Features wie der [History API](/de/docs/Web/API/History_API) und [`window.location`](/de/docs/Web/API/Window/location), die deren Mängel beheben und speziell auf die Bedürfnisse von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} ausgerichtet sind.
  ([Firefox-Bug 1979288](https://bugzil.la/1979288)).

- **Relative Kontrollpunkte in CSS `shape()`-Kurvenkommandos**: `layout.css.basic-shape-shape.enabled`

  Sie können [`<relative-control-point>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point)-Werte verwenden, um einen [`<curve-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) oder [`<smooth-command>`](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) in einer CSS `shape()`-Funktion zu spezifizieren. Diese Werte ermöglichen es Ihnen, Kontrollpunkte zu spezifizieren, die relativ zum Start- oder Endpunkt des aktuellen Kommandos positioniert sind oder relativ zum Ursprung (oben links) des Containers, in dem die Form gezeichnet wird.

- **Benutzerdefinierte Media Queries**: `layout.css.custom-media.enabled`

  Die [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) CSS-At-Regel definiert Aliase für lange oder komplexe Media Queries. Anstatt dasselbe fest codierte `<media-query-list>` in mehreren `@media`-At-Regeln zu wiederholen, kann es einmal in einer `@custom-media`-At-Regel definiert und im Stylesheet bei Bedarf referenziert werden. ([Firefox-Bug 1991105](https://bugzil.la/1744292)).
