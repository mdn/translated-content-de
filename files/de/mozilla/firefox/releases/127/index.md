---
title: Firefox 127 für Entwickler
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Entwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind jetzt im [`href`](/de/docs/Web/HTML/Reference/Elements/base#href)-Attribut des `<base>`-Elements verboten ([Firefox-Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird jetzt in Gradienten unterstützt, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) sowie den Funktionen für wiederholende Gradienten [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) erstellt werden ([Firefox-Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Methoden werden jetzt unterstützt ([Firefox-Bug 1868423](https://bugzil.la/1868423)):
  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt ein neues Set zurück, das Elemente enthält, die sowohl in diesem Set als auch im angegebenen Set enthalten sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt ein neues Set zurück, das alle Elemente dieses Sets und des angegebenen Sets enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt ein neues Set zurück, das Elemente enthält, die in diesem Set, aber nicht im angegebenen Set enthalten sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set oder im angegebenen Set enthalten sind, jedoch nicht in beiden.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der angibt, ob alle Elemente dieses Sets im angegebenen Set enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der angibt, ob alle Elemente des angegebenen Sets in diesem Set enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der angibt, ob dieses Set keine gemeinsamen Elemente mit dem angegebenen Set hat.

### SVG

- Die [`lh`](/de/docs/Web/CSS/length#lh)- und [`rlh`](/de/docs/Web/CSS/length#rlh)-Zeilenhöheneinheiten, die erstmals in CSS unterstützt wurden [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css), werden jetzt auch in SVG unterstützt. Sie können sowohl in CSS-Werte von Eigenschaften `stroke-width: 0.5lh` als auch in SVG-Attributwerte `stroke-width="0.5lh"` verwendet werden. ([Firefox-Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird nun automatisch Anforderungen für Audio-, Video- und Bild-Unterressourcen von HTTP auf HTTPS umstellen in sicherem Inhalt, und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine aktualisierte Anfrage fehlschlägt, weil der Host des Mediums HTTPS nicht unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass alle Unterressourcen sicher bereitgestellt werden oder gar nicht, wenn der Inhalt sicher über HTTPS bereitgestellt wird.
  Da Seiten keinen [Mixed-Content](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox das Symbol entfernt, um anzuzeigen, wann eine Seite gemischten Inhalt enthält, und die gemischte Inhaltswarnung in der Konsole wurde durch eine ersetzt, die anzeigt, wann Anfragen aktualisiert werden.
  ([Firefox-Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle, zusammen mit den Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle, sind aktiviert. ([Firefox-Bug 1887845](https://bugzil.la/1887845), [Firefox-Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden jetzt in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Hinweisen, Titeltext, Kommentaren, Anmerkungen und so weiter unterstützt. ([Firefox-Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen in sowohl WebDriver classic als auch BiDi verbessert, um Modifier wie `ctrl`, `shift` usw. korrekt zu behandeln ([Firefox-Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der `permissions.setPermission`-Befehl wurde hinzugefügt, der es erlaubt, Browser-Berechtigungen (wie `geolocation`) zu aktualisieren. Das Berechtigungsmodul ist eine Erweiterung zur WebDriver BiDi-Spezifikation [definiert in der Berechtigungs-Spezifikation](https://w3c.github.io/permissions/#webdriver-bidi-module-permissions) ([Firefox-Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für a11y-Attribute `name` und `role` als Locator für den `browsingContext.locateNodes`-Befehl hinzugefügt ([Firefox-Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das `devicePixelRatio`-Argument zu `browsingContext.setViewport` hinzugefügt, das es ermöglicht, das Verhalten von Bildschirmen mit unterschiedlichen Geräte-Pixelverhältnissen zu emulieren ([Firefox-Bug 1857961](https://bugzil.la/1857961)).
- `browsingContext.navigate` verbessert, um Race-Conditions zu vermeiden, die dazu führten, dass der Befehl unnötig spät aufgelöst wurde ([Firefox-Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente, die in einem deaktivierten Fieldset platziert wurden, behoben ([Firefox-Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler behoben, bei dem `WebDriver:GetElementText` den Text, der einen Unterstrich enthält, nicht korrekt großschrieb ([Firefox-Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame` behoben, der fehlschlagen konnte, wenn der Tab mitten in einer Navigation war ([Firefox-Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den Wert `"split"` im Schlüssel `"incognito"` der manifest.json angeben. Da Firefox jedoch den Split-Modus nicht unterstützt und um die Integrität des Inkognito-Browsings zu wahren, wird `"split"` als Alias für den Wert `"not_allowed"` behandelt ([Firefox-Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` von `"admin"` zurück, wenn ein Add-on mit einer Unternehmensrichtlinie installiert wird ([Firefox-Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der es ermöglicht, die Liste der zurückgegebenen Regeln nach ID zu filtern ([Firefox-Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden den Benutzern jetzt während der Installation angezeigt ([Firefox-Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungsupdate neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügung der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verbundenen Kontexte zurückgibt ([Firefox-Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird auf die benutzerdefinierten Tastenkombinationen für den speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts)-Befehl zurückgegriffen, wenn keine benutzerdefinierten Tastenkombinationen für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 auf V3 migrieren, benutzerdefinierte Tastenkombinationen für die Browserschaltfläche beizubehalten ([Firefox-Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen jetzt das automatische Umschalten auf das dunkle Thema basierend auf Benutzerpräferenzen ([Firefox-Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 127, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrischer Abstand mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-{{cssxref("letter-spacing")}}-Eigenschaft verteilt den angegebenen Buchstabenabstand nun gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

- **Unterstützung von `calc()`-Farbkanälen in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-[`calc()`](/de/docs/Web/CSS/calc)-Funktion kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} typisierte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array`-Werten aus einem {{jsxref("DataView")}}, und der statischen Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bits zu runden. Der neue Typ ist nützlich für das Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Präzision gegen Speicherverbrauch abzuwägen. ([Firefox-Bug 1833647](https://bugzil.la/1833647).)

## Ältere Versionen

{{Firefox_for_developers}}
