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

- [`data:`](/de/docs/Web/URI/Schemes/data)- und [`javascript:`](/de/docs/Web/URI/Schemes/javascript)-URLs sind jetzt im [`href`](/de/docs/Web/HTML/Element/base#href)-Attribut des `<base>`-Elements verboten ([Firefox-Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird jetzt in Gradienten, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) sowie den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) für wiederholende Gradienten erstellt wurden, unterstützt ([Firefox-Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden Methoden des [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) werden jetzt unterstützt ([Firefox-Bug 1868423](https://bugzil.la/1868423)):

  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser als auch in der angegebenen Menge vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt eine neue Menge zurück, die alle Elemente aus dieser und der angegebenen Menge enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt eine neue Menge zurück, die Elemente enthält, die in dieser, aber nicht in der angegebenen Menge vorhanden sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser oder in der angegebenen Menge, aber nicht in beiden vorhanden sind.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen Booleschen Wert zurück, der anzeigt, ob alle Elemente dieser Menge in der angegebenen Menge enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen Booleschen Wert zurück, der anzeigt, ob alle Elemente der angegebenen Menge in dieser Menge enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen Booleschen Wert zurück, der anzeigt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.

### SVG

- Die [`lh` und `rlh`](/de/docs/Learn/CSS/Building_blocks/Values_and_units#line_height_units) Zeilenhöhen-Einheiten, die zuerst im CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden jetzt auch in SVG unterstützt. Sie können sowohl in CSS-Eigenschaftswerten `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox-Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird jetzt automatisch Anfragen für Audio-, Video- und Bild-Subressourcen von HTTP zu HTTPS in sicheren Inhalten hochstufen und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine hochgestufte Anfrage fehlschlägt, weil der Host des Mediums HTTPS nicht unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, alle zugehörigen Subressourcen ebenfalls sicher bereitgestellt oder gar nicht bereitgestellt werden.
  Da Seiten keinen [gemischten Inhalt](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox auch das Symbol entfernt, das anzeigt, wenn eine Seite gemischte Inhalte enthält, und die Warnmeldung der gemischten Inhalte in der Konsole wurde durch eine ersetzt, die anzeigt, wann Anfragen hochgestuft werden.
  ([Firefox-Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt. Die {{domxref('ClipboardItem')}}-Schnittstelle sowie die Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) der {{domxref('Clipboard')}}-Schnittstelle wurden aktiviert. ([Firefox-Bug 1887845](https://bugzil.la/1887845), [Firefox-Bug 1858788](https://bugzil.la/1858788)).
- Alle {{glossary("character reference","HTML-Zeichenreferenzen")}} werden jetzt in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Hinweisen, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt. ([Firefox-Bug 1395924](https://bugzil.la/1395924)).
- {{domxref('WebGLRenderingContext.drawingBufferColorSpace')}} und [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. ([Firefox-Bug 1885491](https://bugzil.la/1885491)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen in sowohl WebDriver Classic als auch BiDi wurde behoben, um Modifikatoren wie `ctrl`, `shift` usw. korrekt zu verarbeiten ([Firefox-Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Hinzufügung des `permissions.setPermission` Befehls, der es ermöglicht, Browserberechtigungen (wie `geolocation`) zu aktualisieren. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [definiert in der Berechtigungsspezifikation](https://www.w3.org/TR/permissions/#webdriver-bidi-module-permissions) ([Firefox-Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für a11y-Attribute `name` und `role` als Suchkriterien für den `browsingContext.locateNodes` Befehl hinzugefügt ([Firefox-Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das `devicePixelRatio` Argument zu `browsingContext.setViewport` hinzugefügt, das es ermöglicht, das Verhalten von Bildschirmen mit unterschiedlichen Gerätepixelverhältnissen zu emulieren ([Firefox-Bug 1857961](https://bugzil.la/1857961)).
- Verbesserung von `browsingContext.navigate`, um Rennbedingungen zu vermeiden, die zu unnötigem Warten vor der Ausführung des Befehls führen ([Firefox-Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- Behebung von `WebDriver:ElementClear` für Elemente, die in einem deaktivierten fieldset positioniert sind ([Firefox-Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` es nicht schaffte, Text korrekt zu kapitalisieren, der einen Unterstrich enthielt ([Firefox-Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler im `WebDriver:SwitchToFrame` wurde behoben, der fehlschlagen konnte, wenn der Tab mitten in einer Navigation war ([Firefox-Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den `"split"` Wert im manifest.json [`"incognito"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) Schlüssel spezifizieren. Da Firefox den Split-Modus nicht unterstützt und um die Integrität des Inkognito-Browsens zu wahren, wird `"split"` als Alias für den `"not_allowed"` Wert behandelt ([Firefox-Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` von `"admin"` zurück, wenn ein Add-on mittels einer Unternehmensrichtlinie installiert wird ([Firefox-Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter` Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der es ermöglicht, die Liste der zurückgegebenen Regeln nach ID zu filtern ([Firefox-Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden Benutzern während der Installation jetzt angezeigt ([Firefox-Bug 1889402](https://bugzil.la/1889402)). Wenn ein Erweiterungsupdate neue Hostberechtigungen anfordert, werden diese dem Benutzer jedoch nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verbundenen Kontexte zurückgibt ([Firefox-Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird ein Fallback auf die benutzerdefinierten Shortcuts für den speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) Befehl hinzugefügt, wenn keine benutzerdefinierten Shortcuts für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 auf V3 migrieren, alle benutzerdefinierten Shortcuts für die Browseraktion beizubehalten ([Firefox-Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionen-Seite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen jetzt das automatische Umschalten auf das dunkle Thema basierend auf Benutzereinstellungen ([Firefox-Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 127 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrische Abstände mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt jetzt den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

- **Unterstützung für `calc()` Farbkanäle in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS [`calc()`](/de/docs/Web/CSS/calc)-Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, und der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich zum Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, in denen es sinnvoll ist, Präzision gegen Speicherverbrauch abzuwägen. ([Firefox-Bug 1833647](https://bugzil.la/1833647).)

## Ältere Versionen

{{Firefox_for_developers}}
