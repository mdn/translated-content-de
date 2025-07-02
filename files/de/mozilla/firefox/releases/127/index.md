---
title: Firefox 127 für Entwickler
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind jetzt im [`href`](/de/docs/Web/HTML/Reference/Elements/base#href) Attribut des `<base>` Elements verboten ([Firefox Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird nun in Verläufen, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) erstellt wurden, unterstützt, sowie in den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) für wiederholte Verläufe ([Firefox Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Methoden werden nun unterstützt ([Firefox Bug 1868423](https://bugzil.la/1868423)):
  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser Menge als auch in der angegebenen Menge vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt eine neue Menge zurück, die alle Elemente dieser Menge und der angegebenen Menge enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt eine neue Menge zurück, die Elemente enthält, die in dieser Menge, aber nicht in der angegebenen Menge vorhanden sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser Menge oder in der angegebenen Menge vorhanden sind, aber nicht in beiden.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente dieser Menge in der angegebenen Menge enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente der angegebenen Menge in dieser Menge enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der anzeigt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.

### SVG

- Die [`lh`](/de/docs/Web/CSS/length#lh) und [`rlh`](/de/docs/Web/CSS/length#rlh) Zeilenhöhe-Einheiten, die zuerst in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden jetzt auch in SVG unterstützt. Sie können sowohl in CSS-Property-Werten `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird jetzt automatisch Anfragen für Audio-, Video- und Bild-Subressourcen von HTTP zu HTTPS in sicheren Inhalten upgraden und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine hochgestufte Anfrage fehlschlägt, weil der Medienhost HTTPS nicht unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, alle zugehörigen Subressourcen ebenfalls sicher bereitgestellt werden oder gar nicht bereitgestellt werden.
  Da Seiten keinen [Mixed Content](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox auch das Icon entfernt, das anzeigt, wenn eine Seite Mixed Content enthält, und die Mixed-Content-Konsolenwarnung wurde durch eine Warnung ersetzt, die anzeigt, wann Anfragen hochgestuft werden.
  ([Firefox Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Schnittstelle, zusammen mit den Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle, wurden aktiviert. ([Firefox Bug 1887845](https://bugzil.la/1887845), [Firefox Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Character References")}} werden jetzt in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API) Cues, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt. ([Firefox Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel` Aktionen sowohl in WebDriver Classic als auch BiDi wurde behoben, um Modifikatoren wie `ctrl`, `shift` etc. korrekt zu verarbeiten. ([Firefox Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der Befehl `permissions.setPermission` wurde hinzugefügt, der das Aktualisieren von Browser-Berechtigungen (wie zum Beispiel `geolocation`) erlaubt. Das Berechtigungsmodul ist eine Erweiterung zur WebDriver BiDi Spezifikation [wie in der Berechtigungsspezifikation definiert](https://w3c.github.io/permissions/#webdriver-bidi-module-permissions) ([Firefox Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für die a11y-Attribute `name` und `role` als Lokatoren für den Befehl `browsingContext.locateNodes` wurde hinzugefügt ([Firefox Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das Argument `devicePixelRatio` zu `browsingContext.setViewport` wurde hinzugefügt, das das Emulieren des Verhaltens von Bildschirmen mit unterschiedlichen Geräte-Pixelraten erlaubt ([Firefox Bug 1857961](https://bugzil.la/1857961)).
- `browsingContext.navigate` wurde verbessert, um Rennbedingungen zu vermeiden, die dazu führen, dass unnötig gewartet wird, bevor der Befehl ausgeführt wird ([Firefox Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente, die in einem deaktivierten Fieldset platziert sind, wurde behoben ([Firefox Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` fehlschlug, Text korrekt zu kapitalisieren, der einen Unterstrich enthält ([Firefox Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame` wurde behoben, der dazu führen konnte, dass das Umschalten fehlschlug, wenn die Registerkarte sich mitten in einer Navigation befand ([Firefox Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den `"split"` Wert im `"incognito"` Key der manifest.json angeben. Da Firefox den Split-Modus nicht unterstützt und um die Integrität des anonymen Browsens zu wahren, wird `"split"` als Alias des Wertes `"not_allowed"` behandelt ([Firefox Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` von `"admin"` zurück, wenn ein Add-on über eine Unternehmensrichtlinie installiert wird ([Firefox Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter` Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, wodurch die Liste der zurückgegebenen Regeln nach ID gefiltert werden kann ([Firefox Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3 Erweiterungen werden den Benutzer während der Installation angezeigt ([Firefox Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungsupdate neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verbundenen Kontexte zurückgibt ([Firefox Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3 Erweiterungen gibt es einen Rückfall auf die vom Benutzer definierten Tastenkombinationen für den besonderen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) Befehl, wenn es keine vom Benutzer definierten Tastenkombinationen für `_execute_action` gibt. Dies ermöglicht es Erweiterungen, die von Manifest V2 auf V3 migrieren, alle benutzerdefinierten Tastenkombinationen für die Browseraktion beizubehalten ([Firefox Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen jetzt das automatische Umschalten auf das dunkle Thema basierend auf den Benutzereinstellungen ([Firefox Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 127 veröffentlicht, aber standardmäßig deaktiviert. Um sie zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Sie können mehr solcher Funktionen auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite finden.

- **Symmetrische Abstände mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird ([Firefox Bug 1891446](https://bugzil.la/1891446)).

- **`calc()` Unterstützung für Farbkanäle in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS [`calc()`](/de/docs/Web/CSS/calc) Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} für das Lesen und Setzen von `Float16Array` Werten aus einem {{jsxref("DataView")}}, und die statische Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich für das Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision gegen Speicherverbrauch auszutauschen. ([Firefox Bug 1833647](https://bugzil.la/1833647).)

## Ältere Versionen

{{Firefox_for_developers}}
