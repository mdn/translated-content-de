---
title: Firefox 127 für Entwickler
short-title: Firefox 127
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind jetzt im [`href`](/de/docs/Web/HTML/Reference/Elements/base#href)-Attribut des `<base>`-Elements verboten ([Firefox-Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird jetzt in Gradienten unterstützt, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) erzeugt wurden, sowie in den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) für wiederholende Gradienten ([Firefox-Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden Methoden von [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) werden jetzt unterstützt ([Firefox-Bug 1868423](https://bugzil.la/1868423)):
  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser Menge als auch in der angegebenen Menge vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt eine neue Menge zurück, die alle Elemente in dieser Menge und der angegebenen Menge enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt eine neue Menge zurück, die Elemente in dieser Menge enthält, aber nicht in der angegebenen Menge.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser Menge oder der angegebenen Menge sind, aber nicht in beiden.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente dieser Menge in der angegebenen Menge enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente der angegebenen Menge in dieser Menge enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der anzeigt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.

### SVG

- Die [`lh`](/de/docs/Web/CSS/length#lh) und [`rlh`](/de/docs/Web/CSS/length#rlh) Zeilenhöhe-Einheiten, die zuerst in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden nun auch in SVG unterstützt. Sie können sowohl in CSS-Eigenschaftswerten `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox-Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird jetzt automatisch Anfragen für Audio-, Video- und Bild-Subressourcen von HTTP auf HTTPS in sicheren Inhalten upgraden und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine hochgestufte Anfrage fehlschlägt, weil der Host der Medien kein HTTPS unterstützt, werden die Medien nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, alle zugehörigen Subressourcen ebenfalls sicher bereitgestellt werden oder überhaupt nicht.
  Da Seiten nun keinen [Mixed Content](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox auch das Symbol entfernt, das anzeigt, wann eine Seite gemischte Inhalte enthält, und die Warnung in der Konsole für gemischte Inhalte wurde durch eine ersetzt, die anzeigt, wann Anfragen hochgestuft werden.
  ([Firefox-Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird nun vollständig unterstützt. Das [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Interface zusammen mit den Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) des [`Clipboard`](/de/docs/Web/API/Clipboard) Interface wurden aktiviert. ([Firefox-Bug 1887845](https://bugzil.la/1887845), [Firefox-Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden nun in den Hinweisen, Titeln, Kommentaren, Anmerkungen usw. im [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API) unterstützt. ([Firefox-Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen in sowohl klassischem WebDriver als auch BiDi wurde behoben, um Modifikatoren wie `ctrl`, `shift` usw. korrekt zu handhaben ([Firefox-Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der Befehl `permissions.setPermission` wurde hinzugefügt, der es ermöglicht, Browserberechtigungen (wie `geolocation`) zu aktualisieren. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [in der Berechtigungsspezifikation definiert](https://w3c.github.io/permissions/#webdriver-bidi-module-permissions) ([Firefox-Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für die a11y-Attribute `name` und `role` als Locator für den Befehl `browsingContext.locateNodes` hinzugefügt ([Firefox-Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das Argument `devicePixelRatio` zu `browsingContext.setViewport` hinzugefügt, das es ermöglicht, das Verhalten von Bildschirmen mit unterschiedlichen Gerätepixelverhältnissen zu emulieren ([Firefox-Bug 1857961](https://bugzil.la/1857961)).
- `browsingContext.navigate` verbessert, um Rennbedingungen zu vermeiden, die dazu führen, dass unnötig gewartet wird, bevor der Befehl aufgelöst wird ([Firefox-Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente, die in einem deaktivierten Feldsatz gefunden wurden, behoben ([Firefox-Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler behoben, bei dem `WebDriver:GetElementText` die korrekte Großschreibung von Text mit einem Unterstrich nicht gelang ([Firefox-Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame` behoben, der fehlschlagen konnte, wenn der Tab mitten in einer Navigation war ([Firefox-Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den `"split"`-Wert des `manifest.json` [`"incognito"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito)-Schlüssels angeben. Da Firefox jedoch keinen Split-Modus unterstützt und um die Integrität des privaten Surfens zu erhalten, wird `"split"` als Alias für den Wert `"not_allowed"` behandelt ([Firefox-Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` von `"admin"` zurück, wenn ein Add-on unter Verwendung einer Unternehmensrichtlinie installiert wird ([Firefox-Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der die gefilterte Rückgabe von Regeln nach ID ermöglicht ([Firefox-Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden nun den Benutzern während der Installation angezeigt ([Firefox-Bug 1889402](https://bugzil.la/1889402)). Wenn ein Erweiterungs-Update jedoch neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verbundenen Kontexte zurückgibt ([Firefox-Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird als Fallback auf die vom Benutzer definierten Tastenkombinationen für den speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) Befehl zurückgegriffen, wenn keine benutzerdefinierten Tastenkombinationen für `_execute_action` vorhanden sind. Dies ermöglicht Erweiterungen, die von Manifest V2 auf V3 migrieren, alle benutzerdefinierten Tastenkombinationen für die Browser-Aktion beizubehalten ([Firefox-Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen jetzt den automatischen Wechsel zum dunklen Thema basierend auf den Benutzerpräferenzen ([Firefox-Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 127 enthalten, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der [Seite Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrischer Abstand mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-Eigenschaft {{cssxref("letter-spacing")}} verteilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

- **`calc()`-Farbkanalunterstützung in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/calc) kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array:** `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, und die statische Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich für das Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, in denen es sinnvoll ist, Genauigkeit gegen Speicherverbrauch einzutauschen. ([Firefox-Bug 1833647](https://bugzil.la/1833647).)
