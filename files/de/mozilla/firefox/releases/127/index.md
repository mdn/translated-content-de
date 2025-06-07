---
title: Firefox 127 für Entwickler
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind jetzt im [`href`](/de/docs/Web/HTML/Reference/Elements/base#href)-Attribut des `<base>`-Elements verboten ([Firefox-Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird jetzt in mit [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) erstellten Verläufen sowie in den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) für sich wiederholende Verläufe unterstützt ([Firefox-Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Methoden werden jetzt unterstützt ([Firefox-Bug 1868423](https://bugzil.la/1868423)):

  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt ein neues Set zurück, das Elemente enthält, die sowohl in diesem Set als auch in dem angegebenen Set vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt ein neues Set zurück, das alle Elemente dieses Sets und des angegebenen Sets enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt ein neues Set zurück, das Elemente enthält, die in diesem Set, aber nicht im angegebenen Set vorhanden sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set oder in dem angegebenen Set vorhanden sind, aber nicht in beiden.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der angibt, ob alle Elemente dieses Sets im angegebenen Set vorhanden sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der angibt, ob alle Elemente des angegebenen Sets in diesem Set vorhanden sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der angibt, ob dieses Set keine gemeinsamen Elemente mit dem angegebenen Set hat.

### SVG

- Die in CSS [ab Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützten [`lh` und `rlh`](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units) Zeilenhöhe-Einheiten werden jetzt auch in SVG unterstützt. Sie können in CSS-Werteigenschaften `stroke-width: 0.5lh` und in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox-Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird nun automatisch Anforderungen für Audio-, Video- und Bild-Untersubressourcen von HTTP zu HTTPS in sicheren Inhalten upgraden und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine aktualisierte Anfrage fehlschlägt, weil der Host des Mediums HTTPS nicht unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, alle ihre Untersubressourcen ebenfalls sicher bereitgestellt oder gar nicht bereitgestellt werden.
  Da Seiten keine [gemischten Inhalte](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox auch das Icon entfernt, das anzeigt, wann eine Seite gemischte Inhalte enthält, und die gemischte Inhaltskonsolenwarnung wurde durch eine ersetzt, die anzeigt, wann Anfragen aktualisiert werden.
  ([Firefox-Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird nun vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle sowie die [`read()`](/de/docs/Web/API/Clipboard/read)- und [`write()`](/de/docs/Web/API/Clipboard/write)-Methoden der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wurden aktiviert. ([Firefox-Bug 1887845](https://bugzil.la/1887845), [Firefox-Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden jetzt in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Hinweisen, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt. ([Firefox-Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen sowohl in WebDriver classic als auch in BiDi behoben, um Modifikatoren wie `ctrl`, `shift` usw. korrekt zu behandeln ([Firefox-Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der Befehl `permissions.setPermission` wurde hinzugefügt, der es ermöglicht, Browser-Berechtigungen zu aktualisieren (wie z.B. `geolocation`). Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [definiert in der Berechtigungsspezifikation](https://w3c.github.io/permissions/#webdriver-bidi-module-permissions) ([Firefox-Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für die a11y Attribute `name` und `role` als Lokatoren für den Befehl `browsingContext.locateNodes` hinzugefügt ([Firefox-Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das Argument `devicePixelRatio` zu `browsingContext.setViewport` hinzugefügt, das es ermöglicht, das Verhalten von Bildschirmen mit unterschiedlichen Device-Pixel-Verhältnissen zu emulieren ([Firefox-Bug 1857961](https://bugzil.la/1857961)).
- `browsingContext.navigate` verbessert, um Race-Conditions zu vermeiden, die dazu führen, dass unnötig gewartet wird, bevor der Befehl aufgelöst wird ([Firefox-Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente in einem deaktivierten fieldset behoben ([Firefox-Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler behoben, bei dem `WebDriver:GetElementText` es nicht gelungen ist, Text mit einem Unterstrich korrekt zu kapitalisieren ([Firefox-Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame` behoben, der fehlschlagen konnte, wenn der Tab mitten in einer Navigation war ([Firefox-Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den `"split"`-Wert des `manifest.json`-Schlüssels [`"incognito"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) spezifizieren. Da Firefox jedoch den Split-Modus nicht unterstützt und um die Integrität des Inkognito-Browsings zu wahren, wird `"split"` als Alias des `"not_allowed"`-Werts behandelt ([Firefox-Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` von `"admin"` zurück, wenn ein Add-on unter Verwendung einer Unternehmensrichtlinie installiert wird ([Firefox-Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der es ermöglicht, die Liste der zurückgegebenen Regeln nach ID zu filtern ([Firefox-Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden nun den Benutzern während der Installation angezeigt ([Firefox-Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungs-Update neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verknüpften Kontexte zurückgibt ([Firefox-Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird ein Fallback auf die benutzerdefinierten Shortcuts für den speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts)-Befehl hinzugefügt, wenn es keine benutzerdefinierten Shortcuts für `_execute_action` gibt. Dies ermöglicht es Erweiterungen, die von Manifest V2 zu V3 migrieren, jede benutzerdefinierte Verknüpfung für die Browseraktion beizubehalten ([Firefox-Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen jetzt das automatische Umschalten auf das dunkle Thema basierend auf Benutzerpräferenzen ([Firefox-Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 127 ausgeliefert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrisches Spacing mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt nun das angegebene Buchstabensperren gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem das Spacing hauptsächlich auf einer Seite hinzugefügt wird ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

- **`calc()` Farbkanalunterstützung in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/calc) kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array` Werten aus einer {{jsxref("DataView")}}, und der {{jsxref("Math.f16round()")}} statischen Methode, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision gegen Speicherverbrauch zu tauschen. ([Firefox-Bug 1833647](https://bugzil.la/1833647).)

## Ältere Versionen

{{Firefox_for_developers}}
