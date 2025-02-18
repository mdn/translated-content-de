---
title: Firefox 127 für Entwickler
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data)- und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript)-URLs sind jetzt im [`href`](/de/docs/Web/HTML/Element/base#href)-Attribut des `<base>`-Elements verboten ([Firefox-Bug 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method) wird jetzt in Gradienten unterstützt, die mit den Funktionen [`conic-gradient()`](/de/docs/Web/CSS/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/gradient/radial-gradient) erstellt wurden. Dies gilt auch für wiederholte Gradienten mit den Funktionen [`repeating-conic-gradient()`](/de/docs/Web/CSS/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/gradient/repeating-radial-gradient) ([Firefox-Bug 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden Methoden des [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekts werden jetzt unterstützt ([Firefox-Bug 1868423](https://bugzil.la/1868423)):

  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser Menge als auch in der gegebenen Menge enthalten sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt eine neue Menge zurück, die alle Elemente dieser Menge und der gegebenen Menge enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt eine neue Menge zurück, die Elemente dieser Menge, aber nicht der gegebenen Menge enthält.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser oder der gegebenen Menge, aber nicht in beiden enthalten sind.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen boolean-Wert zurück, der angibt, ob alle Elemente dieser Menge in der gegebenen Menge enthalten sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen boolean-Wert zurück, der angibt, ob alle Elemente der gegebenen Menge in dieser Menge enthalten sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen boolean-Wert zurück, der angibt, ob diese Menge keine gemeinsamen Elemente mit der gegebenen Menge hat.

### SVG

- Die [`lh` und `rlh`](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#line_height_units)-Einheiten zur Zeilenhöhe, die zuerst in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, sind nun auch in SVG unterstützt. Sie können sowohl in CSS-Eigenschaftswerten `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox-Bug 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird nun automatisch Anfragen für Audio-, Video- und Bildunterressourcen von HTTP auf HTTPS in sicherem Inhalt umstellen und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine aktualisierte Anfrage fehlschlägt, weil der Host der Medien HTTPS nicht unterstützt, werden die Medien als nicht gefunden angezeigt. Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS ausgeliefert werden, auch alle zugehörigen Unterressourcen sicher bereitgestellt werden oder überhaupt nicht.
  Da Seiten keinen [Mixed Content](/de/docs/Web/Security/Mixed_content) mehr anzeigen, hat Firefox das Symbol entfernt, das angibt, wann eine Seite gemischte Inhalte enthält. Stattdessen wird eine Konsolenwarnung angezeigt, die angibt, wann Anfragen aktualisiert werden.
  ([Firefox-Bug 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird jetzt vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Schnittstelle sowie die Methoden [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wurden aktiviert ([Firefox-Bug 1887845](https://bugzil.la/1887845), [Firefox-Bug 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden jetzt in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API)-Untertitel, Titeltexten, Kommentaren, Annotationen usw. unterstützt ([Firefox-Bug 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung von `wheel`-Aktionen sowohl in WebDriver Classic als auch in BiDi wurde behoben, sodass Modifier wie `ctrl`, `shift` usw. korrekt verarbeitet werden ([Firefox-Bug 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der Befehl `permissions.setPermission` wurde hinzugefügt, der das Aktualisieren von Browserberechtigungen ermöglicht (z. B. `geolocation`). Das Berechtigungsmodul ist eine Erweiterung der WebDriver-BiDi-Spezifikation [definiert in der Permissions-Spezifikation](https://www.w3.org/TR/permissions/#webdriver-bidi-module-permissions) ([Firefox-Bug 1875065](https://bugzil.la/1875065)).
- Unterstützung für die a11y-Attribute `name` und `role` als Suchparameter für den Befehl `browsingContext.locateNodes` wurde hinzugefügt ([Firefox-Bug 1885577](https://bugzil.la/1885577)).
- Unterstützung für das `devicePixelRatio`-Argument im Befehl `browsingContext.setViewport` wurde hinzugefügt, wodurch das Verhalten von Bildschirmen mit unterschiedlichen Gerät-Pixel-Verhältnissen emuliert werden kann ([Firefox-Bug 1857961](https://bugzil.la/1857961)).
- Verbesserung von `browsingContext.navigate`, um Race-Conditions zu vermeiden, die dazu führen könnten, dass der Befehl unnötig lange bis zur Auflösung wartet ([Firefox-Bug 1894305](https://bugzil.la/1894305)).

#### Marionette

- Fehlerbehebung für `WebDriver:ElementClear` bei Elementen in einem deaktivierten Fieldset ([Firefox-Bug 1863266](https://bugzil.la/1863266)).
- Ein Fehler, bei dem `WebDriver:GetElementText` Text mit einem Unterstrich nicht korrekt kapitalisierte, wurde behoben ([Firefox-Bug 1888004](https://bugzil.la/1888004)).
- Ein Fehler im Befehl `WebDriver:SwitchToFrame`, der fehlschlagen konnte, wenn der Tab mitten in einer Navigation war, wurde behoben ([Firefox-Bug 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert jetzt Erweiterungen, die den Wert `"split"` für den Schlüssel `"incognito"` in der Datei `manifest.json` angeben. Da Firefox jedoch keinen Split-Modus unterstützt und um die Integrität des privaten Surfens zu wahren, wird `"split"` als Alias für `"not_allowed"` behandelt ([Firefox-Bug 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt jetzt den `install_type` `"admin"` zurück, wenn ein Add-on über eine Unternehmensrichtlinie installiert wurde ([Firefox-Bug 1895341](https://bugzil.la/1895341)).
- Ein `filter`-Parameter wurde hinzugefügt zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der die Liste der zurückgegebenen Regeln nach ID filtern kann ([Firefox-Bug 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest-V3-Erweiterungen werden den Nutzern jetzt bei der Installation angezeigt ([Firefox-Bug 1889402](https://bugzil.la/1889402)). Wenn jedoch ein Update einer Erweiterung neue Host-Berechtigungen anfordert, werden diese dem Nutzer nicht angezeigt. Siehe ([Firefox-Bug 1893232](https://bugzil.la/1893232)).
- Die Funktion {{WebExtAPIRef("runtime.getContexts")}}, die Informationen über die mit der Erweiterung verknüpften Kontexte zurückgibt, wurde hinzugefügt ([Firefox-Bug 1875480](https://bugzil.la/1875480)).
- Für Manifest-V3-Erweiterungen wird ein Fallback auf benutzerdefinierte Tastenkürzel für den speziellen Befehl [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) hinzugefügt, falls keine benutzerdefinierten Tastenkürzel für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 zu V3 migrieren, bereits definierte Tastenkürzel für die Browseraktion zu bewahren ([Firefox-Bug 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionenseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen nun das automatische Umschalten auf das dunkle Design basierend auf Benutzerpräferenzen ([Firefox-Bug 1888866](https://bugzil.la/1888866)).

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 127, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrisches Spacing mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS-Eigenschaft {{cssxref("letter-spacing")}} teilt den angegebenen Buchstabenabstand jetzt gleichmäßig auf beiden Seiten jedes Zeichens auf. Dies unterscheidet sich vom bisherigen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wurde ([Firefox-Bug 1891446](https://bugzil.la/1891446)).

- **Unterstützung von Farbkanälen in `calc()` bei relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS-Funktion [`calc()`](/de/docs/Web/CSS/calc) kann jetzt Farbkanäle in [relativen Farben](/de/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) parsen ([Firefox-Bug 1889561](https://bugzil.la/1889561)).

- **JavaScript-Typed-Array `Float16Array`:** `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}}-Typed-Arrays werden jetzt unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zur Lese- und Einstellung von `Float16Array`-Werten aus einer {{jsxref("DataView")}}, sowie der statischen Methode {{jsxref("Math.f16round()")}}, die zur Rundung von Zahlen auf 16 Bit verwendet werden kann. Der neue Typ ist nützlich zum Teilen von Daten mit einer GPU, insbesondere für Anwendungsfälle, bei denen es sinnvoll ist, Genauigkeit gegen Speicherverbrauch einzutauschen ([Firefox-Bug 1833647](https://bugzil.la/1833647)).

## Ältere Versionen

{{Firefox_for_developers}}
