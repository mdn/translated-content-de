---
title: Firefox 127 Versionshinweise für Entwickler
short-title: Firefox 127
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data)- und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript)-URLs sind jetzt im [`href`](/de/docs/Web/HTML/Reference/Elements/base#href)-Attribut des `<base>`-Elements verboten ([Firefox Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird nun in Verläufen unterstützt, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) erstellt wurden, sowie in den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) für sich wiederholende Verläufe ([Firefox Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Methoden werden nun unterstützt ([Firefox Bug 1868423](https://bugzil.la/1868423)):
  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt ein neues Set zurück, das Elemente enthält, die sowohl in diesem Set als auch im angegebenen Set vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt ein neues Set zurück, das alle Elemente in diesem Set und im angegebenen Set enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt ein neues Set zurück, das Elemente in diesem Set, aber nicht im angegebenen Set enthält.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt ein neues Set zurück, das Elemente enthält, die entweder in diesem Set oder im angegebenen Set vorhanden sind, aber nicht in beiden.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente dieses Sets im angegebenen Set vorhanden sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente des angegebenen Sets in diesem Set vorhanden sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der anzeigt, ob dieses Set keine gemeinsamen Elemente mit dem angegebenen Set hat.

### SVG

- Die [`lh`](/de/docs/Web/CSS/length#lh)- und [`rlh`](/de/docs/Web/CSS/length#rlh)-Zeilenhöheeinheiten, die zuerst in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden nun auch in SVG unterstützt. Sie können sowohl in CSS-Werteigenschaften `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden ([Firefox Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird nun Anfragen für Audio-, Video- und Bild-Subressourcen von HTTP auf HTTPS in sicherem Inhalt automatisch upgraden und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine upgrade-Anfrage fehlschlägt, weil der Host des Mediums HTTPS nicht unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalt sicher über HTTPS serviert wird, auch alle Subressourcen sicher serviert werden oder gar nicht.
  Da Seiten keinen [gemischten Inhalt](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox das Symbol entfernt, das anzeigt, wenn eine Seite gemischten Inhalt enthält, und die Warnung in der Konsole bezüglich gemischtem Inhalt wurde durch eine Warnung ersetzt, die anzeigt, wann Anfragen aktualisiert werden.
  ([Firefox Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird nun vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle zusammen mit den Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wurden aktiviert. ([Firefox Bug 1887845](https://bugzil.la/1887845), [Firefox Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden nun in Web Video Text Tracks Format (WebVTT)-Hinweisen, -Titeltexten, -Kommentaren und -Anmerkungen usw. unterstützt. ([Firefox Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen in beiden WebDriver-Versionen, klassisch und BiDi, behoben, um Modifier wie `ctrl`, `shift` usw. korrekt zu handhaben ([Firefox Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Befehl `permissions.setPermission` hinzugefügt, der es erlaubt, Browserberechtigungen (wie `geolocation`) zu aktualisieren. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [definiert in der Berechtigungsspezifikation](https://w3c.github.io/permissions/#webdriver-bidi-module-permissions) ([Firefox Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für a11y-Attribute `name` und `role` als Locator für den Befehl `browsingContext.locateNodes` hinzugefügt ([Firefox Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das `devicePixelRatio`-Argument zu `browsingContext.setViewport` hinzugefügt, das es erlaubt, das Verhalten von Bildschirmen mit unterschiedlichen Geräte-Pixel-Verhältnissen zu emulieren ([Firefox Bug 1857961](https://bugzil.la/1857961)).
- Verbesserung von `browsingContext.navigate`, um Rennbedingungen zu vermeiden, die zu unnötigem Warten führen, bevor der Befehl aufgelöst wird ([Firefox Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente, die sich in einem deaktivierten `fieldset` befinden, behoben ([Firefox Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler behoben, bei dem `WebDriver:GetElementText` nicht in der Lage war, Text mit einem Unterstrich korrekt zu kapitalisieren ([Firefox Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame` behoben, der dazu führen konnte, dass der Wechsel fehlschlug, wenn der Tab mitten in einer Navigation war ([Firefox Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den `"split"`-Wert des manifest.json [`"incognito"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito)-Schlüssels angeben. Da Firefox jedoch den Split-Modus nicht unterstützt und um die Integrität des Inkognito-Browsings zu bewahren, wird `"split"` als Alias für den Wert `"not_allowed"` behandelt ([Firefox Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt nun den `install_type` von `"admin"` zurück, wenn ein Add-on mittels einer Unternehmensrichtlinie installiert wird ([Firefox Bug 1895341](https://bugzil.la/1895341)).
- Hinzufügung eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der es ermöglicht, die Liste der zurückgegebenen Regeln nach ID zu filtern ([Firefox Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3-Erweiterungen werden nun den Benutzern während der Installation angezeigt ([Firefox Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Erweiterungs-Update neue Host-Berechtigungen anfordert, werden diese dem Benutzer nicht angezeigt. Siehe ([Firefox Bug 1893232](https://bugzil.la/1893232)).
- Hinzufügen der Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die Kontexte zurückgibt, die mit der Erweiterung verbunden sind ([Firefox Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest V3-Erweiterungen wird auf benutzerdefinierte Shortcuts für den speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts)-Befehl zurückgegriffen, wenn keine benutzerdefinierten Shortcuts für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 zu V3 migrieren, alle benutzerdefinierten Shortcuts für die Browseraktion beizubehalten ([Firefox Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen jetzt das automatische Umschalten zum dunklen Thema basierend auf den Benutzereinstellungen ([Firefox Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 127 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der passenden Einstellung und setzen Sie sie auf `true`. Weitere Informationen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrischer Abstand mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt jetzt den spezifizierten Zeichenabstand gleichmäßig auf beide Seiten jedes Zeichens auf. Dies unterscheidet sich vom bisherigen Verhalten, bei dem der Abstand hauptsächlich zu einer Seite hinzugefügt wurde ([Firefox Bug 1891446](https://bugzil.la/1891446)).

- **Unterstützung von `calc()`-Farbkanälen in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/calc) kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` getyptes Array:** `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} getypte Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} für das Lesen und Einstellen von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, sowie die statische Methode {{jsxref("Math.f16round()")}}, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich für das Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, in denen es sinnvoll ist, Präzision gegen Speicherverbrauch einzutauschen. ([Firefox Bug 1833647](https://bugzil.la/1833647)).
