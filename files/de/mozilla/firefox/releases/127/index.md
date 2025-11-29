---
title: Firefox 127 Versionshinweise für Entwickler
short-title: Firefox 127
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind jetzt im [`href`](/de/docs/Web/HTML/Reference/Elements/base#href)-Attribut des `<base>`-Elements verboten ([Firefox-Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method) wird jetzt in mit [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/radial-gradient) erzeugten Farbverläufen sowie in den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient) für wiederholende Farbverläufe unterstützt ([Firefox-Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden Methoden von [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) werden jetzt unterstützt ([Firefox-Bug 1868423](https://bugzil.la/1868423)):
  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser als auch in der angegebenen Menge vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt eine neue Menge zurück, die alle Elemente dieser und der angegebenen Menge enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt eine neue Menge zurück, die Elemente enthält, die in dieser, aber nicht in der angegebenen Menge vorhanden sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser oder in der angegebenen Menge, aber nicht in beiden enthalten sind.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen Booleschen Wert zurück, der angibt, ob alle Elemente dieser Menge in der angegebenen Menge enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen Booleschen Wert zurück, der angibt, ob alle Elemente der angegebenen Menge in dieser Menge enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen Booleschen Wert zurück, der angibt, ob diese Menge keine gemeinsamen Elemente mit der angegebenen Menge hat.

### SVG

- Die Einheiten für Linienhöhe [`lh`](/de/docs/Web/CSS/Reference/Values/length#lh) und [`rlh`](/de/docs/Web/CSS/Reference/Values/length#rlh), die erstmals in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, sind jetzt auch in SVG unterstützt. Sie können sowohl in CSS-Eigenschaftswerten `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden ([Firefox-Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird jetzt Anfragen für Audio-, Video- und Bildressourcen automatisch von HTTP auf HTTPS in sicheren Inhalten hochstufen und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine hochgestufte Anfrage fehlschlägt, weil der Host des Mediums kein HTTPS unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, alle seine Ressourcen ebenfalls sicher bereitgestellt oder überhaupt nicht bereitgestellt werden.
  Da Seiten keinen [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content) mehr anzeigen, hat Firefox auch das Symbol entfernt, das anzeigt, wenn eine Seite Gemischte Inhalte enthält, und die Mixed-Content-Konsolenwarnung wurde durch eine ersetzt, die anzeigt, wenn Anfragen hochgestuft werden.
  ([Firefox-Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard-API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle sowie die Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wurden aktiviert ([Firefox-Bug 1887845](https://bugzil.la/1887845), [Firefox-Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden jetzt in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Marken, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt ([Firefox-Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen in sowohl dem klassischen WebDriver als auch BiDi wurde behoben, um Modifikatoren wie `ctrl`, `shift` usw. korrekt zu handhaben ([Firefox-Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der `permissions.setPermission` Befehl wurde hinzugefügt, der es ermöglicht, die Browser-Berechtigungen (wie `geolocation`) zu aktualisieren. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [definiert in der Berechtigungsspezifikation](https://w3c.github.io/permissions/#webdriver-bidi-module-permissions) ([Firefox-Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für a11y-Attribute `name` und `role` als Locator für den Befehl `browsingContext.locateNodes` wurde hinzugefügt ([Firefox-Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das Argument `devicePixelRatio` für `browsingContext.setViewport`, das es ermöglicht, das Verhalten von Bildschirmen mit unterschiedlichen Gerätepixelverhältnissen zu emulieren, wurde hinzugefügt ([Firefox-Bug 1857961](https://bugzil.la/1857961)).
- `browsingContext.navigate` wurde verbessert, um Race Conditions zu vermeiden, die zu unnötigem Warten vor der Auflösung des Befehls führen können ([Firefox-Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente, die sich in einem deaktivierten Fieldset befinden, wurde behoben ([Firefox-Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` es nicht schaffte, Text, der einen Unterstrich enthielt, korrekt zu kapitalisieren ([Firefox-Bug 1888004](https://bugzil.la/1888004)).
- Ein Bug in `WebDriver:SwitchToFrame`, der fehlschlagen konnte, wenn der Tab in der Mitte einer Navigation war, wurde behoben ([Firefox-Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-On-Entwickler

- Firefox installiert jetzt Erweiterungen, die den `"split"`-Wert des manifest.json [`"incognito"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito)-Schlüssels angeben. Da Firefox jedoch keinen Split-Modus unterstützt und um die Integrität des Inkognito-Browsens zu bewahren, wird `"split"` als Alias des Wertes `"not_allowed"` behandelt ([Firefox-Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` von `"admin"` zurück, wenn ein Add-On mit einer Unternehmensrichtlinie installiert wird ([Firefox-Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der es ermöglicht, die zurückgegebene Liste der Regeln nach ID zu filtern ([Firefox-Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden jetzt während der Installation den Nutzern angezeigt ([Firefox-Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungs-Update neue Hostberechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verbundenen Kontexte zurückgibt ([Firefox-Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird auf die vom Benutzer definierten Tastenkombinationen für den speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts)-Befehl zurückgegriffen, wenn keine vom Benutzer definierten Tastenkombinationen für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 auf V3 migrieren, eventuelle vom Benutzer definierte Tastenkombinationen für die Browseraktion beizubehalten ([Firefox-Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen jetzt das automatische Umschalten auf das dunkle Thema basierend auf den Benutzerpräferenzen ([Firefox-Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 127 implementiert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrische Abstände mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS {{cssxref("letter-spacing")}}-Eigenschaft verteilt den angegebenen Zeichenabstand nun gleichmäßig auf beide Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wird ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

- **`calc()` Farbkanalunterstützung in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) analysieren ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}}-typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, und der {{jsxref("Math.f16round()")}}-statischen Methode, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich zum Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision gegen Speicherverbrauch einzutauschen. ([Firefox-Bug 1833647](https://bugzil.la/1833647).)
