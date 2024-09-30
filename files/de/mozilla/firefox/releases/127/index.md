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

- [`data:`](/de/docs/Web/URI/Schemes/data)- und [`javascript:`](/de/docs/Web/URI/Schemes/javascript)-URLs sind jetzt im [`href`](/de/docs/Web/HTML/Element/base#href)-Attribut des `<base>`-Elements nicht mehr erlaubt ([Firefox Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird jetzt in Verläufen unterstützt, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) sowie den Funktionen für wiederholte Verläufe [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) erstellt wurden ([Firefox Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden Methoden der [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Klasse werden nun unterstützt ([Firefox Bug 1868423](https://bugzil.la/1868423)):

  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser Menge als auch in der angegebenen Menge enthalten sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt eine neue Menge zurück, die alle Elemente dieser Menge und der angegebenen Menge enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt eine neue Menge zurück, die Elemente enthält, die in dieser Menge, aber nicht in der angegebenen Menge sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser Menge oder in der angegebenen Menge, aber nicht in beiden sind.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente dieser Menge in der angegebenen Menge enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente der angegebenen Menge in dieser Menge enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der anzeigt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.

### SVG

- Die [`lh` und `rlh`](/de/docs/Learn/CSS/Building_blocks/Values_and_units#line_height_units)-Zeilenhöhe-Einheiten, die zuerst in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden nun ebenfalls in SVG unterstützt. Sie können sowohl in CSS-Eigenschaftswerten `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird nun automatisch Anfragen für Audio-, Video- und Bild-Unterressourcen von HTTP auf HTTPS in sicherem Inhalt upgraden und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine upgrade-Anfrage fehlschlägt, weil der Host des Mediums kein HTTPS unterstützt, wird das Medium nicht gefunden.
  Dadurch wird sichergestellt, dass, wenn Inhalte sicher über HTTPS serviert werden, auch alle Unterressourcen sicher serviert werden oder gar nicht.
  Da Seiten keinen [Mixed Content](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox auch das Icon entfernt, das anzeigte, ob eine Seite Mixed Content enthält, und die Mixed Content-Konsolenwarnung wurde durch eine ersetzt, die anzeigt, wann Anfragen upgegradet werden.
  ([Firefox Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird nun vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle zusammen mit den Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wurden aktiviert. ([Firefox Bug 1887845](https://bugzil.la/1887845), [Firefox Bug 1858788](https://bugzil.la/1858788)).
- Alle [HTML-Zeichenreferenzen](/de/docs/Glossary/character_reference) werden nun in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Hinweisen, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt. ([Firefox Bug 1395924](https://bugzil.la/1395924)).
- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. ([Firefox Bug 1885491](https://bugzil.la/1885491)).

### WebDriver-Komformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `Rad`-Aktionen im klassischen WebDriver und BiDi wurde korrigiert, um Modifikatoren wie `ctrl`, `shift` usw. korrekt zu verarbeiten ([Firefox Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der `permissions.setPermission`-Befehl wurde hinzugefügt, der das Aktualisieren von Browserberechtigungen (wie `geolocation`) ermöglicht. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [wie in der Permissions specification definiert](https://www.w3.org/TR/permissions/#webdriver-bidi-module-permissions) ([Firefox Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für a11y-Attribute `name` und `role` als Lokatoren für den `browsingContext.locateNodes`-Befehl hinzugefügt ([Firefox Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das Argument `devicePixelRatio` zu `browsingContext.setViewport` hinzugefügt, das das Verhalten von Bildschirmen mit unterschiedlichen Gerätepixelverhältnissen emuliert ([Firefox Bug 1857961](https://bugzil.la/1857961)).
- Verbesserte `browsingContext.navigate`, um Race-Conditions zu vermeiden, die zu unnötigem Warten vor der Auflösung des Befehls führen ([Firefox Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente, die in einem deaktivierten Fieldset liegen, korrigiert ([Firefox Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` den Text mit einem unterstrichenen Zeichen nicht korrekt großschrieb ([Firefox Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame` behoben, der fehlschlagen konnte, wenn der Tab während einer Navigation war ([Firefox Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den `"split"`-Wert des Schlüssels `"incognito"` der manifest.json angeben. Da Firefox jedoch keinen geteilten Modus unterstützt und um die Integrität des Inkognito-Browsers zu wahren, wird `"split"` als Alias des Werts `"not_allowed"` behandelt ([Firefox Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` von `"admin"` zurück, wenn ein Add-on über eine Unternehmensrichtlinie installiert wird ([Firefox Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügen eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der es ermöglicht, die Liste der zurückgegebenen Regeln nach ID zu filtern ([Firefox Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden nun den Benutzern während der Installation angezeigt ([Firefox Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungs-Update neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügen der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verbundenen Kontexte zurückgibt ([Firefox Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird auf die vom Benutzer definierten Shortcuts für den speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts)-Befehl zurückgegriffen, wenn keine vom Benutzer definierten Shortcuts für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 auf V3 migrieren, alle vom Benutzer definierten Shortcuts für die Browseraktion beizubehalten ([Firefox Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen jetzt das automatische Umschalten auf das dunkle Thema basierend auf den Benutzereinstellungen ([Firefox Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 127 bereitgestellt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrische Abstände mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt nun den angegebenen Leerraum gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf eine Seite hinzugefügt wird ([Firefox Bug 1891446](https://bugzil.la/1891446)).

- **Unterstützung von Farbkanälen in relativen Farben mit `calc()`:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/calc) kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array:** `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} getypte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, und der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einem GPU zu teilen, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision gegen Speicherverbrauch einzutauschen. ([Firefox Bug 1833647](https://bugzil.la/1833647).)

## Ältere Versionen

{{Firefox_for_developers}}
