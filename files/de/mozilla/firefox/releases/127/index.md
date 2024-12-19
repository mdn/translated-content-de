---
title: Firefox 127 für Entwickler
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Schemes/javascript) URLs sind nun im [`href`](/de/docs/Web/HTML/Element/base#href)-Attribut des `<base>`-Elements verboten ([Firefox Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird nun in Gradienten unterstützt, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) sowie [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) erstellt werden ([Firefox Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden Methoden des [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) werden nun unterstützt ([Firefox Bug 1868423](https://bugzil.la/1868423)):

  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt ein neues Set zurück, das Elemente enthält, die sowohl in diesem Set als auch im angegebenen Set vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt ein neues Set zurück, das alle Elemente in diesem Set und im angegebenen Set enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt ein neues Set zurück, das Elemente enthält, die in diesem Set, aber nicht im angegebenen Set vorhanden sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set oder im angegebenen Set, aber nicht in beiden enthalten sind.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der angibt, ob alle Elemente dieses Sets im angegebenen Set vorhanden sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der angibt, ob alle Elemente des angegebenen Sets in diesem Set vorhanden sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der anzeigt, ob dieses Set keine gemeinsamen Elemente mit dem angegebenen Set hat.

### SVG

- Die [`lh` und `rlh`](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units) Zeilenhöhe-Einheiten, die zuerst in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden nun auch in SVG unterstützt. Sie können sowohl in den CSS-Eigenschaftswerten `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird nun automatisch Anfragen für Audio-, Video- und Bild-Unterrressourcen von HTTP zu HTTPS in sicherem Inhalt upgraden und HTTP-Anfragen für andere Medienarten blockieren. Wenn eine upgegradete Anfrage fehlschlägt, weil der Host des Mediums HTTPS nicht unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, auch alle Unterressourcen sicher bereitgestellt oder gar nicht bereitgestellt werden.
  Da Seiten keinen [Mixed Content](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox das Symbol entfernt, das angibt, wann eine Seite Mixed Content enthält, und die Mixed Content-Konsole-Warnung wurde durch eine ersetzt, die angibt, wann Anfragen upgegradet werden.
  ([Firefox Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird nun vollständig unterstützt. Das [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Interface sowie die Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) des [`Clipboard`](/de/docs/Web/API/Clipboard) Interface sind aktiviert. ([Firefox Bug 1887845](https://bugzil.la/1887845), [Firefox Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden nun in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Hinweisen, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt. ([Firefox Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Unterstützung für `wheel`-Aktionen wurde sowohl in WebDriver classic als auch in BiDi behoben, um Modifikatoren wie `ctrl`, `shift` und andere korrekt zu handhaben ([Firefox Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der Befehl `permissions.setPermission` wurde hinzugefügt, der es erlaubt, Browser-Berechtigungen (wie `geolocation`) zu aktualisieren. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [wie in der Berechtigungsspezifikation definiert](https://www.w3.org/TR/permissions/#webdriver-bidi-module-permissions) ([Firefox Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für a11y-Attribute `name` und `role` als Locator für den Befehl `browsingContext.locateNodes` hinzugefügt ([Firefox Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das `devicePixelRatio`-Argument zu `browsingContext.setViewport` hinzugefügt, das es erlaubt, das Verhalten von Bildschirmen mit unterschiedlichen Device-Pixel-Verhältnissen zu emulieren ([Firefox Bug 1857961](https://bugzil.la/1857961)).
- `browsingContext.navigate` verbessert, um Rennbedingungen zu vermeiden, die zu unnötigen Wartezeiten führen, bevor der Befehl aufgelöst wird ([Firefox Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente in einem deaktivierten Fieldset behoben ([Firefox Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` den Text mit Unterstrichen nicht korrekt kapitalisierte ([Firefox Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame` behoben, der fehlschlagen konnte, wenn der Tab in der Mitte einer Navigation war ([Firefox Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert nun Erweiterungen, die den Wert `"split"` des [`"incognito"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito)-Schlüssel im manifest.json angeben. Da Firefox jedoch den Split-Modus nicht unterstützt und um die Unversehrtheit des Inkognito-Browsings zu wahren, wird `"split"` als Alias für den Wert `"not_allowed"` behandelt ([Firefox Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt nun den `install_type` als `"admin"` zurück, wenn ein Add-on mittels einer Unternehmensrichtlinie installiert wird ([Firefox Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, wodurch die Liste der zurückgegebenen Regeln nach ID gefiltert werden kann ([Firefox Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden den Benutzern nun während der Installation angezeigt ([Firefox Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungsupdate neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Sehen Sie ([Firefox Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verbundenen Kontexte liefert ([Firefox Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird auf die benutzerdefinierten Shortcuts für den speziellen Befehl [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zurückgegriffen, wenn keine benutzerdefinierten Shortcuts für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 auf V3 migrieren, benutzerdefinierte Shortcuts für die Browseraktion beizubehalten ([Firefox Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionen-Seite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen nun den automatischen Wechsel zum dunklen Thema basierend auf den Benutzereinstellungen ([Firefox Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 127 enthalten, aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrisches Spacing mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt das angegebene Zeichenabstand jetzt gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich von dem aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird ([Firefox Bug 1891446](https://bugzil.la/1891446)).

- **`calc()`-Unterstützung für Farbkanäle in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/calc) kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` getyped Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} getypte Arrays werden nun unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} für das Lesen und Setzen von `Float16Array`-Werten von einem {{jsxref("DataView")}} sowie der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich zum Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision gegen Speicherverbrauch einzutauschen. ([Firefox Bug 1833647](https://bugzil.la/1833647).)

## Ältere Versionen

{{Firefox_for_developers}}
