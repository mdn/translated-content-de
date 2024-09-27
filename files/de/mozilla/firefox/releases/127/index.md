---
title: Firefox 127 für Entwickler
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: a3f3d029ddd98553160f20b927b1c5bc0c90d46b
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Schemes/javascript) URLs sind jetzt im [`href`](/de/docs/Web/HTML/Element/base#href)-Attribut des `<base>`-Elements verboten ([Firefox-Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird jetzt in Verläufen unterstützt, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) sowie den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) für wiederholende Verläufe erstellt wurden ([Firefox-Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden Methoden des [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) werden jetzt unterstützt ([Firefox-Bug 1868423](https://bugzil.la/1868423)):

  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt ein neues Set zurück, das Elemente sowohl in diesem als auch im angegebenen Set enthält.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt ein neues Set zurück, das alle Elemente in diesem und im angegebenen Set enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt ein neues Set zurück, das Elemente in diesem Set, aber nicht im angegebenen Set enthält.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem oder im angegebenen Set sind, aber nicht in beiden.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der angibt, ob alle Elemente dieses Sets im angegebenen Set enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der angibt, ob alle Elemente des angegebenen Sets in diesem Set enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der angibt, ob dieses Set keine gemeinsamen Elemente mit dem angegebenen Set hat.

### SVG

- Die [`lh` und `rlh`](/de/docs/Learn/CSS/Building_blocks/Values_and_units#line_height_units) Zeilenhöhe-Einheiten, die erstmals in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden jetzt auch in SVG unterstützt. Sie können sowohl in CSS-Eigenschaftswerten `stroke-width: 0.5lh` als auch SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox-Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird nun automatisch Anfragen für Audio-, Video- und Bild-Subressourcen von HTTP auf HTTPS aktualisieren und HTTP-Anfragen für andere Medientypen blockieren. Wenn eine aktualisierte Anfrage fehlschlägt, weil der Host des Mediums HTTPS nicht unterstützt, wird das Medium nicht gefunden. Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, alle deren Subressourcen ebenfalls sicher oder gar nicht bereitgestellt werden. Da Seiten keinen [gemischten Inhalt](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox auch das Symbol entfernt, das anzeigt, wenn eine Seite gemischte Inhalte enthält, und die Konsolenwarnung für gemischte Inhalte wurde durch eine Warnung ersetzt, die anzeigt, wann Anfragen aktualisiert werden. ([Firefox-Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird nun vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle sowie die Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wurden aktiviert. ([Firefox-Bug 1887845](https://bugzil.la/1887845), [Firefox-Bug 1858788](https://bugzil.la/1858788)).
- Alle [HTML-Zeichenreferenzen](/de/docs/Glossary/character_reference) werden jetzt in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Hinweisen, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt. ([Firefox-Bug 1395924](https://bugzil.la/1395924)).
- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. ([Firefox-Bug 1885491](https://bugzil.la/1885491)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen sowohl in WebDriver Classic als auch in BiDi wurde behoben, um Modifier wie `ctrl`, `shift` usw. korrekt zu handhaben. ([Firefox-Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der Befehl `permissions.setPermission`, der das Aktualisieren von Browser-Berechtigungen (wie `geolocation`) ermöglicht, wurde hinzugefügt. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [definiert in der Permissions-Spezifikation](https://www.w3.org/TR/permissions/#webdriver-bidi-module-permissions) ([Firefox-Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für die a11y-Attribute `name` und `role` als Locator für den Befehl `browsingContext.locateNodes` hinzugefügt ([Firefox-Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das `devicePixelRatio`-Argument zu `browsingContext.setViewport`, das das Emulieren der Bildschirmverhaltensweisen mit unterschiedlichen Device-Pixel-Ratio ermöglicht, hinzugefügt ([Firefox-Bug 1857961](https://bugzil.la/1857961)).
- Verbesserung von `browsingContext.navigate`, um Rennbedingungen zu vermeiden, die zu unnötigen Wartezeiten vor der Auflösung des Befehls führen könnten ([Firefox-Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- Der Fehler `WebDriver:ElementClear` wurde für Elemente in einem deaktivierten Fieldset behoben ([Firefox-Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler, bei dem `WebDriver:GetElementText` den Text mit Unterstrichen nicht korrekt großgeschrieben hat, wurde behoben ([Firefox-Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame`, der auftreten konnte, wenn der Tab während einer Navigation in der Mitte war, wurde behoben ([Firefox-Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den `"split"`-Wert des Schlüssels `"incognito"` in der manifest.json angeben. Da Firefox jedoch den Split-Modus nicht unterstützt und um die Integrität des Inkognito-Modus zu wahren, wird `"split"` als Alias für den Wert `"not_allowed"` behandelt ([Firefox-Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` von `"admin"` zurück, wenn ein Add-on über eine Unternehmensrichtlinie installiert wird ([Firefox-Bug 1895341](https://bugzil.la/1895341)).
- Ergänzung eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der die Liste der zurückgegebenen Regeln nach ID gefiltert ermöglicht ([Firefox-Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden Benutzern während der Installation angezeigt ([Firefox-Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungs-Update neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Ergänzung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen zu den mit der Erweiterung verbundenen Kontexten zurückgibt ([Firefox-Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird ein Fallback auf die benutzerdefinierten Tastenkombinationen für den speziellen Befehl [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) hinzugefügt, wenn keine benutzerdefinierten Verknüpfungen für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 zu V3 migrieren, alle benutzerdefinierten Tastenkombinationen für die Browser-Aktion beizubehalten ([Firefox-Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen nun automatisch den Umschalt des dunklen Themas basierend auf den Benutzereinstellungen ([Firefox-Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 127 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrische Abstände mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-{{cssxref("letter-spacing")}}-Eigenschaft verteilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beide Seiten jedes Zeichens. Dies unterscheidet sich von dem bisherigen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

- **Unterstützung von `calc()`-Farbkanälen in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-`calc()`-Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) analysieren ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}}-typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, sowie der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bits zu runden. Der neue Typ ist nützlich zum Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Genauigkeit gegen Speicherverbrauch auszutauschen. ([Firefox-Bug 1833647](https://bugzil.la/1833647).)

## Ältere Versionen

{{Firefox_for_developers}}
