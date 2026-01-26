---
title: Firefox 127 Versionshinweise für Entwickler
short-title: Firefox 127
slug: Mozilla/Firefox/Releases/127
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 127, die Entwickler betreffen. Firefox 127 wurde am [11. Juni 2024](https://whattrainisitnow.com/release/?version=127) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [`data:`](/de/docs/Web/URI/Reference/Schemes/data) und [`javascript:`](/de/docs/Web/URI/Reference/Schemes/javascript) URLs sind nun im [`href`](/de/docs/Web/HTML/Reference/Elements/base#href) Attribut des `<base>` Elements verboten ([Firefox Fehler 1850967](https://bugzil.la/1850967)).

### CSS

- Die Verwendung einer [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method) wird nun in mit [`conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient), [`linear-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient) und [`radial-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/radial-gradient) Funktionen erstellten Verläufen sowie den [`repeating-conic-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-conic-gradient), [`repeating-linear-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-linear-gradient) und [`repeating-radial-gradient()`](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient) Funktionen für wiederholte Verläufe unterstützt ([Firefox Fehler 1861363](https://bugzil.la/1861363)).

### JavaScript

- Die folgenden [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Methoden werden nun unterstützt ([Firefox Fehler 1868423](https://bugzil.la/1868423)):
  - [`Set.prototype.intersection()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection) — Gibt eine neue Menge zurück, die Elemente enthält, die sowohl in dieser Menge als auch in der gegebenen Menge vorhanden sind.
  - [`Set.prototype.union()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/union) — Gibt eine neue Menge zurück, die alle Elemente dieser Menge und der gegebenen Menge enthält.
  - [`Set.prototype.difference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/difference) — Gibt eine neue Menge zurück, die Elemente enthält, die in dieser Menge, aber nicht in der gegebenen Menge vorhanden sind.
  - [`Set.prototype.symmetricDifference()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference) — Gibt eine neue Menge zurück, die Elemente enthält, die entweder in dieser Menge oder in der gegebenen Menge vorhanden sind, aber nicht in beiden.
  - [`Set.prototype.isSubsetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente dieser Menge in der gegebenen Menge vorhanden sind.
  - [`Set.prototype.isSupersetOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf) — Gibt einen booleschen Wert zurück, der anzeigt, ob alle Elemente der gegebenen Menge in dieser Menge vorhanden sind.
  - [`Set.prototype.isDisjointFrom()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom) — Gibt einen booleschen Wert zurück, der anzeigt, ob diese Menge keine gemeinsamen Elemente mit der gegebenen Menge hat.

### SVG

- Die [`lh`](/de/docs/Web/CSS/Reference/Values/length#lh) und [`rlh`](/de/docs/Web/CSS/Reference/Values/length#rlh) Zeilenhöheneinheiten, die erstmals in CSS [in Firefox 120](/de/docs/Mozilla/Firefox/Releases/120#css) unterstützt wurden, werden nun auch in SVG unterstützt. Sie können sowohl in CSS-Eigenschaftswerten `stroke-width: 0.5lh` als auch in SVG-Attributwerten `stroke-width="0.5lh"` verwendet werden. ([Firefox Fehler 1892089](https://bugzil.la/1892089)).

### Sicherheit

- Firefox wird nun automatisch Anfragen für Audio-, Video- und Bildunterressourcen von HTTP auf HTTPS in sicherem Inhalt upgraden und HTTP-Anfragen für andere Arten von Medien blockieren. Wenn eine aktualisierte Anfrage fehlschlägt, weil der Medienhost HTTPS nicht unterstützt, wird das Medium nicht gefunden.
  Dies stellt sicher, dass, wenn Inhalte sicher über HTTPS bereitgestellt werden, auch alle Unterressourcen sicher bereitgestellt werden oder gar nicht.
  Da Seiten kein [mixed content](/de/docs/Web/Security/Defenses/Mixed_content) mehr anzeigen, hat Firefox das Symbol entfernt, das anzeigt, wann eine Seite gemischte Inhalte enthält, und die Warnung in der Konsole zu gemischten Inhalten wurde durch eine ersetzt, die anzeigt, wann Anfragen aktualisiert werden.
  ([Firefox Fehler 1779757](https://bugzil.la/1779757)).

### APIs

- Die asynchrone [Clipboard API](/de/docs/Web/API/Clipboard_API) wird nun vollständig unterstützt. Die [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Schnittstelle sowie die [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) Methoden der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wurden aktiviert. ([Firefox Fehler 1887845](https://bugzil.la/1887845), [Firefox Fehler 1858788](https://bugzil.la/1858788)).
- Alle {{Glossary("character_reference", "HTML-Zeichenreferenzen")}} werden nun in [Web Video Text Tracks Format (WebVTT)](/de/docs/Web/API/WebVTT_API) Cues, Titeltexten, Kommentaren, Anmerkungen usw. unterstützt. ([Firefox Fehler 1395924](https://bugzil.la/1395924)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für `wheel`-Aktionen in sowohl WebDriver klassisch als auch BiDi wurde behoben, um Modifikatoren wie `ctrl`, `shift` usw. korrekt zu handhaben. ([Firefox Fehler 1885542](https://bugzil.la/1885542)).

#### WebDriver BiDi

- Der `permissions.setPermission` Befehl wurde hinzugefügt, der es erlaubt, Berechtigungen des Browsers (z.B. `geolocation`) zu aktualisieren. Das Berechtigungsmodul ist eine Erweiterung der WebDriver BiDi-Spezifikation [definiert in der Berechtigungsspezifikation](https://w3c.github.io/permissions/#webdriver-bidi-module-permissions) ([Firefox Fehler 1875065](https://bugzil.la/1875065)).
- Unterstützung für a11y-Attribute `name` und `role` als Locator für den `browsingContext.locateNodes` Befehl wurde hinzugefügt ([Firefox Fehler 1885577](https://bugzil.la/1885577)).
- Unterstützung für das `devicePixelRatio` Argument für `browsingContext.setViewport`, das das Verhalten der Bildschirme mit unterschiedlichen Device-Pixel-Verhältnissen simuliert, wurde hinzugefügt ([Firefox Fehler 1857961](https://bugzil.la/1857961)).
- `browsingContext.navigate` wurde verbessert, um Race Conditions zu vermeiden, die dazu führen, dass unnötig gewartet wird, bevor der Befehl aufgelöst wird ([Firefox Fehler 1894305](https://bugzil.la/1894305)).

#### Marionette

- `WebDriver:ElementClear` für Elemente, die in einem deaktivierten fieldset lokalisiert sind, wurde behoben ([Firefox Fehler 1863266](https://bugzil.la/1863266)).
- Ein Fehler wurde behoben, bei dem `WebDriver:GetElementText` Text mit einem Unterstrich nicht korrekt großgeschrieben hat ([Firefox Fehler 1888004](https://bugzil.la/1888004)).
- Ein Fehler in `WebDriver:SwitchToFrame`, der fehlschlagen konnte, wenn der Tab während einer Navigation war, wurde behoben ([Firefox Fehler 1817820](https://bugzil.la/1817820)).

## Änderungen für Add-on-Entwickler

- Firefox installiert nun Erweiterungen, die den `"split"` Wert des manifest.json [`"incognito"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) Schlüssels angeben. Da Firefox jedoch den Split-Modus nicht unterstützt und um die Integrität des Inkognito-Modus zu wahren, wird `"split"` als Alias des `"not_allowed"` Werts behandelt ([Firefox Fehler 1876924](https://bugzil.la/1876924)).
- {{WebExtAPIRef("management.ExtensionInfo")}} gibt nun den `install_type` von `"admin"` zurück, wenn ein Add-on mithilfe einer Unternehmensrichtlinie installiert wird ([Firefox Fehler 1895341](https://bugzil.la/1895341)).
- Hinzufügen eines `filter`-Parameters zu {{WebExtAPIRef("declarativeNetRequest.getDynamicRules")}} und {{WebExtAPIRef("declarativeNetRequest.getSessionRules")}}, der es ermöglicht, die Liste der zurückgegebenen Regeln nach ID zu filtern ([Firefox Fehler 1820870](https://bugzil.la/1820870)).
- [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Manifest V3 Erweiterungen werden nun den Benutzern während der Installation angezeigt ([Firefox Fehler 1889402](https://bugzil.la/1889402)). Wenn ein Update der Erweiterung neue Hostberechtigungen anfordert, werden diese jedoch nicht dem Benutzer angezeigt. Siehe ([Firefox Fehler 1893232](https://bugzil.la/1893232)).
- Hinzufügen der {{WebExtAPIRef("runtime.getContexts")}} Funktion, die Informationen über die mit der Erweiterung verbundenen Kontexte zurückgibt ([Firefox Fehler 1875480](https://bugzil.la/1875480)).
- Für Manifest V3 Erweiterungen wird bei speziellen [`_execute_browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) Befehlen auf die vom Benutzer definierten Shortcuts zurückgegriffen, wenn keine benutzerdefinierten Shortcuts für `_execute_action` vorhanden sind. Dies ermöglicht es Erweiterungen, die von Manifest V2 zu V3 migrieren, alle benutzerdefinierten Shortcuts für die Browser-Aktion zu bewahren ([Firefox Fehler 1797811](https://bugzil.la/1797811)).
- Erweiterungen mit einer eingebetteten [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) unterstützen nun das automatische Umschalten zum dunklen Thema basierend auf den Benutzereinstellungen ([Firefox Fehler 1888866](https://bugzil.la/1888866)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 127 bereitgestellt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Symmetrischer Abstand mit CSS `letter-spacing`:** `layout.css.letter-spacing.model`.

  Die CSS {{cssxref("letter-spacing")}} Eigenschaft teilt nun den angegebenen Buchstabenabstand gleichmäßig auf beiden Seiten jedes Zeichens. Dies unterscheidet sich vom aktuellen Verhalten, bei dem der Abstand hauptsächlich auf einer Seite hinzugefügt wird ([Firefox Fehler 1891446](https://bugzil.la/1891446)).

- **`calc()` Unterstützung für Farbkanäle in relativen Farben:** `layout.css.relative-color-syntax.enabled`.

  Die CSS [`calc()`](/de/docs/Web/CSS/Reference/Values/calc) Funktion kann nun Farbkanäle in [relativen Farben](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions) parsen ([Firefox Fehler 1889561](https://bugzil.la/1889561)).

- **JavaScript `Float16Array` typisiertes Array**: `javascript.options.experimental.float16array`.

  {{jsxref("Float16Array")}} typisierte Arrays werden nun unterstützt, zusammen mit {{jsxref("DataView.prototype.getFloat16()")}} und {{jsxref("DataView.prototype.setFloat16()")}} zum Lesen und Setzen von `Float16Array` Werten aus einem {{jsxref("DataView")}}, und der {{jsxref("Math.f16round()")}} statischen Methode, die verwendet werden kann, um Zahlen auf 16 Bit zu runden. Der neue Typ ist nützlich, um Daten mit einer GPU zu teilen, insbesondere für Anwendungsfälle, bei denen es Sinn macht, Präzision gegen Speicherverbrauch abzuwägen. ([Firefox Fehler 1833647](https://bugzil.la/1833647)).
