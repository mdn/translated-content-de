---
title: Firefox 127 Versionshinweise für Entwickler
short-title: Firefox 127
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript)-URLs sind jetzt im [`href`](/de/docs/Web/HTML/Reference/Elements/base#href)-Attribut des `<base>`-Elements verboten ([Firefox-Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method) wird jetzt in mit [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/radial-gradient) erstellten Verläufen und in den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient) für sich wiederholende Verläufe unterstützt ([Firefox-Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden Methoden des [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) werden jetzt unterstützt ([Firefox-Bug 1868423](https://bugzil.la/1868423)):
  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt ein neues Set zurück, das Elemente enthält, die in diesem Set und im gegebenen Set vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt ein neues Set zurück, das alle Elemente aus diesem Set und dem gegebenen Set enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt ein neues Set zurück, das Elemente aus diesem Set enthält, die nicht im gegebenen Set sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set oder im gegebenen Set sind, aber nicht in beiden.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente dieses Sets im gegebenen Set enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente des gegebenen Sets in diesem Set enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der anzeigt, ob dieses Set keine gemeinsamen Elemente mit dem gegebenen Set hat.

### SVG

- Die Einheiten für Linienhöhe [`lh`](/de/docs/Web/CSS/Reference/Values/length#lh) und [`rlh`](/de/docs/Web/CSS/Reference/Values/length#rlh), die zuerst in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden jetzt auch in SVG unterstützt. Sie können sowohl in CSS-Werteigenschaften `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox-Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird Anfragen für Audio-, Video- und Bild-Unterreseourcen in sicherem Inhalt automatisch von HTTP auf HTTPS upgraden und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine hochgestufte Anfrage fehlschlägt, weil der Host des Mediums kein HTTPS unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, auch alle Unterressourcen entweder sicher bereitgestellt oder gar nicht bereitgestellt werden.
  Da Seiten keinen [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content) mehr anzeigen, hat Firefox auch das Icon entfernt, das anzeigt, wann eine Seite Mixed Content enthält, und die Mixed Content-Konsolenwarnung wurde durch eine ersetzt, die anzeigt, wann Anfragen hochgestuft werden.
  ([Firefox-Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt. Das [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Interface zusammen mit den Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces wurden aktiviert. ([Firefox-Bug 1887845](https://bugzil.la/1887845), [Firefox-Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden jetzt in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Hinweisen, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt. ([Firefox-Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen in sowohl WebDriver klassisch als auch BiDi korrigiert, um Modifikatoren wie `ctrl`, `shift` usw. korrekt zu handhaben ([Firefox-Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Hinzufügen des Befehls `permissions.setPermission`, der es ermöglicht, Browserberechtigungen (wie `geolocation`) zu aktualisieren. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [definiert in der Berechtigungsspezifikation](https://w3c.github.io/permissions/#webdriver-bidi-module-permissions) ([Firefox-Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für a11y-Attribute `name` und `role` als Locator für den Befehl `browsingContext.locateNodes` hinzugefügt ([Firefox-Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das Argument `devicePixelRatio` zu `browsingContext.setViewport` hinzugefügt, das es ermöglicht, das Verhalten von Bildschirmen mit unterschiedlichen Geräte-Pixel-Verhältnissen zu emulieren ([Firefox-Bug 1857961](https://bugzil.la/1857961)).
- `browsingContext.navigate` verbessert, um Race Conditions zu vermeiden, die dazu führen, dass unnötig gewartet wird, bevor der Befehl aufgelöst wird ([Firefox-Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- Behebung von `WebDriver:ElementClear` für Elemente, die in einem deaktivierten Fieldset gefunden werden ([Firefox-Bug 1863266](https://bugzil.la/1863266)).
- Behebung eines Fehlers, bei dem `WebDriver:GetElementText` nicht in der Lage war, Text mit einem Unterstrich korrekt zu kapitalisieren ([Firefox-Bug 1888004](https://bugzil.la/1888004)).
- Behebung eines Fehlers in `WebDriver:SwitchToFrame`, der fehlschlagen konnte, wenn der Tab mitten in einer Navigation war ([Firefox-Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den Wert `"split"` im `manifest.json`-Schlüssel [`"incognito"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) angeben. Da Firefox jedoch den Split-Modus nicht unterstützt und um die Integrität des Inkognito-Browsings zu bewahren, wird `"split"` als Alias des Werts `"not_allowed"` behandelt ([Firefox-Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt nun den `install_type` von `"admin"` zurück, wenn ein Add-on unter Verwendung einer Unternehmensrichtlinie installiert wird ([Firefox-Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der es ermöglicht, die Liste der zurückgegebenen Regeln nach ID zu filtern ([Firefox-Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest-V3-Erweiterungen werden nun bei der Installation den Benutzern angezeigt ([Firefox-Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungsupdate neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verbundenen Kontexte zurückgibt ([Firefox-Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest-V3-Erweiterungen wird fallback auf die benutzerdefinierten Shortcuts für den speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) Befehl hinzugefügt, falls keine benutzerdefinierten Shortcuts für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 zu V3 migrieren, alle benutzerdefinierten Shortcuts für die Browser-Aktion zu bewahren ([Firefox-Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen nun das automatische Umschalten auf das dunkle Thema basierend auf Benutzerpräferenzen ([Firefox-Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 127 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Sie finden mehr solcher Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrische Abstände mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt jetzt die angegebene Buchstabenabstände gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem die Abstände hauptsächlich auf eine Seite hinzugefügt werden ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

- **`calc()` Farbkanalunterstützung in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) parsen ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, und der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere für Anwendungsfälle, bei denen es Sinn macht, Präzision gegen Speicherverbrauch abzuwägen. ([Firefox-Bug 1833647](https://bugzil.la/1833647).)
