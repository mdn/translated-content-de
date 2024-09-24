---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: d27be65a297aa82a1eceb024be325b1385a498e5
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in Vorbereitung auf die weitere Implementierung der [Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zum Parsen von Werten verwendet. Die Anchor Positioning-Funktionen werden schrittweise hinter einer Voreinstellung eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS Anchor Positioning](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox-Bug 1909358](https://bugzil.la/1909358) und [Firefox-Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsfunktionen wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese Helfer ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dass Zwischen-`Array`-Objekte erstellt werden müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen die Erstellung eines Zwischen-`Array` nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsfunktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) in der `Iterator`-Schnittstelle. ([Firefox-Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss jetzt auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure)-Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt werden, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, gelten dieselben Einschränkungen auch für Cookies, die `SameSite` nicht spezifizieren. ([Firefox-Bug 1909673](https://bugzil.la/1909673)).
- [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) oder "partitionierte Cookies" werden jetzt unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie mithilfe der [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned)-Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in den partitionierten Speicher zu integrieren. Bei Aktivierung erhalten Cookies einen separaten Speicher für jede Top-Level-Site und sind nur innerhalb derselben Top-Level-Site lesbar, auf der sie gesetzt wurden, und deren Subdomains. Dies blockiert die Webseiten-übergreifende Nachverfolgung, während legitime Nutzungen von Drittanbieter-Cookies, wie das Speichern des Status eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg, weiterhin ermöglicht werden. ([Firefox-Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle werden jetzt unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Drehung des Stifts über den Bildschirm relativ zu seiner x-Achse an. ([Firefox-Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) werden jetzt unterstützt und ermöglichen es Benutzern, auf bestimmte Textabschnitte einer Webseite zu verlinken und diese hervorzuheben. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert.
  Entwickler können jetzt auch das Vorhandensein der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Schnittstelle) verwenden, um die Unterstützung von Textfragmenten zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}} Pseudoelement verwendet werden, um den Text auszuwählen und zu stylen, der mit einem Textfragment-Link ausgewählt wurde. ([Firefox-Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wurde aktualisiert, um den Textknoten und den Offset für eine Cursorposition innerhalb eines Shadow DOM zurückzugeben, sofern das Shadow Root, das dem Punkt entspricht, der Methode übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte können der Methode mithilfe der `shadowRoots`-Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Ausnahmeverweis mit dem Wert `exnref` kann jetzt verwendet werden, um das [Exception Handling](/de/docs/WebAssembly/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen zu unterstützen. ([Firefox-Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

- Sowohl für WebDriver Classic als auch BiDi akzeptieren die `keyUp`- und `keyDown`-Aktionen keine Mehrfachzeichen mehr für den `value`. ([Firefox-Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für die verbleibenden Argumente des `network.continueResponse`-Befehls hinzugefügt:
  - Die Arguments cookies und headers. ([Firefox-Bug 1853887](https://bugzil.la/1853887)).
  - Die Arguments `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Not modified"). ([Firefox-Bug 1913737](https://bugzil.la/1913737)).
- Der Befehl `browsingContext.navigate` wird jetzt zurückgeben, wenn das `wait`-Argument `none` ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox-Bug 1763134](https://bugzil.la/1763134)).
- Der Befehl `browsingContext.navigate` wird einen `unknown error` in allen Fällen zurückgeben, in denen ein Navigationsfehler auftritt, wie es von der Spezifikation gefordert wird. ([Firefox-Bug 1905083](https://bugzil.la/1905083)).
- Der Befehl `session.new` wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seine Antwort aufnehmen, wenn sie nicht vom Client als Argument angegeben wurde. ([Firefox-Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10 MB-Kontingent für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt in Firefox Nightly 131 durchgesetzt. Bisher hat Firefox dieses Kontingent nicht implementiert. Diese Durchsetzung wird in Release-Versionen von Firefox ab Version 134 eingeführt ([Firefox-Bug 1915688](https://bugzil.la/1915688)). Dadurch können Erweiterungen, die sich auf das vorherige Verhalten verlassen, etwaige Probleme korrigieren. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt jetzt die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} Eigenschaft. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox-Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert nun `openerTabId` mit dem Wert `-1`, um `openerTabId` zu löschen ([Firefox-Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 131 verfügbar, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Voreinstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdrucksmodifikatoren (?ims-ims:...):** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Reguläre Ausdrucksmodifikatoren erlauben es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die [Berechtigungen](/de/docs/Web/API/Permissions_API) `microphone` und `camera` können jetzt in der [`Permissions.query()`](/de/docs/Web/API/Permissions/query)-Methode verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch von der Zustimmung des Benutzers abhängig ist. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
