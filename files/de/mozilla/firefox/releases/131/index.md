---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die `inset-area` CSS-Eigenschaft wurde in Vorbereitung auf die weitere Implementierung des [Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zur Wertanalyse verwendet. Die Funktionen zur Verankerungspositionierung werden schrittweise hinter einer Einstellung eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS Anchor Positioning](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox-Bug 1909358](https://bugzil.la/1909358) und [Firefox-Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iteratoren-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, und {{jsxref("Iterator.prototype.take()")}}. Diese Helfer ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dass Zwischen-`Array`-Objekte erstellt werden müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen das Erstellen eines Zwischen-Arrays nicht einmal möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox-Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss jetzt auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt sind, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht angegebenen `SameSite`-Wert als `SameSite=None` interpretiert, haben auch Cookies, die `SameSite` nicht spezifizieren, dieselbe Einschränkung. ([Firefox-Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie über die [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in partitionierten Speicher einzuwählen. Wenn gesetzt, haben Cookies getrennte Speicher für jede Top-Level-Site und können nur innerhalb derselben Top-Level-Site gelesen werden, auf der sie festgelegt wurden, sowie deren Subdomains. Dies blockiert das Cross-Site-Tracking, während gleichzeitig legitime Verwendungen von Drittanbieter-Cookies wie das Speichern des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site ermöglicht wird. ([Firefox-Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle werden nun unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Drehung des Stifts über dem Bildschirm relativ zu seiner x-Achse an. ([Firefox-Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) werden jetzt unterstützt und ermöglichen es Benutzern, auf spezifische Textabschnitte in einer Webseite zu verlinken und diese hervorzuheben. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert.
  Entwickler können jetzt auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Schnittstelle) zur Funktionsüberprüfung für Textfragmentunterstützung verwenden. Zusätzlich kann das {{CSSxRef("::target-text")}}-Pseudoelement verwendet werden, um Text zu wählen und zu stylen, der mit einem Textfragment-Link ausgewählt wurde. ([Firefox-Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wurde aktualisiert, um den Textknoten und den Versatz für eine Caret-Position innerhalb eines Schatten-DOM zurückzugeben, vorausgesetzt, dass die dem Punkt entsprechende Schattenwurzel der Methode übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte können der Methode über die `shadowRoots`-Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Ausnahmeverweis mit dem Wert `exnref` kann jetzt verwendet werden, um [Fehlerbehandlung](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen zu unterstützen. ([Firefox-Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi akzeptieren die Aktionen `keyUp` und `keyDown` keine mehreren Zeichen mehr für den `value`. ([Firefox-Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse`-Befehls hinzugefügt:
  - Die Argumente Cookies und Header. ([Firefox-Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Nicht geändert"). ([Firefox-Bug 1913737](https://bugzil.la/1913737)).
- Der `browsingContext.navigate`-Befehl gibt nun zurück, ob das `wait`-Argument `none` ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox-Bug 1763134](https://bugzil.la/1763134)).
- Der `browsingContext.navigate`-Befehl wird einen `unknown error` in allen Fällen zurückgeben, in denen ein Navigationsfehler auftritt, wie es in der Spezifikation verlangt wird. ([Firefox-Bug 1905083](https://bugzil.la/1905083)).
- Der `session.new`-Befehl wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seine Antwort aufnehmen, wenn sie nicht von der Client als Argument angegeben wurde. ([Firefox-Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10 MB-Kontingent für Daten, die von der {{WebExtAPIRef("storage.session")}}-API gespeichert werden, wird nun in Firefox Nightly 131 durchgesetzt. Zuvor hat Firefox dieses Kontingent nicht umgesetzt. Diese Durchsetzung wird ab Version 134 auf die Veröffentlichungs-Versionen von Firefox ausgerollt ([Firefox-Bug 1915688](https://bugzil.la/1915688)). Dies ermöglicht Erweiterungen, die auf das vorherige Verhalten angewiesen sind, eventuelle Probleme zu korrigieren. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt nun die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}-API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}}-Eigenschaft. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird nun ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox-Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert nun `openerTabId` gesetzt auf `-1`, um `openerTabId` zu löschen ([Firefox-Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 131 neu eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck (?ims-ims:...) Modifikatoren:** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren für reguläre Ausdrücke ermöglichen Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die Berechtigungen für `microphone` und `camera` können jetzt in der [`Permissions.query()`](/de/docs/Web/API/Permissions/query)-Methode verwendet werden, um zu testen, ob der Zugriff auf die entsprechenden Hardware gewährt, verweigert oder noch die Zustimmung des Benutzers erfordert. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
