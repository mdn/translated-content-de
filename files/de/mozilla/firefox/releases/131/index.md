---
title: Firefox 131 für Entwickler
short-title: Firefox 131
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in Vorbereitung auf die weitere Implementierung der [Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zum Parsen von Werten verwendet. Die Funktionen der Verankerungspositionierung werden schrittweise hinter einer Einstellung eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: Verankerungspositionierung in CSS](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox Bug 1909358](https://bugzil.la/1909358) und [Firefox Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Der Support für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese Hilfsmittel ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne zwischengeschaltete `Array`-Objekte erstellen zu müssen. Sie können auch mit sehr großen Datenmengen verwendet werden, bei denen die Erstellung eines zwischengeschalteten `Array` nicht einmal möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none) muss jetzt auch das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut enthalten. Dadurch wird sichergestellt, dass Cookies, die mit `SameSite=None` gesetzt sind, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, gelten für Cookies, die `SameSite` nicht spezifizieren, die gleichen Einschränkungen. ([Firefox Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt. Diese Funktion ermöglicht es Entwicklern, ein Cookie durch die Verwendung der [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in einen partitionierten Speicher zu integrieren. Sobald gesetzt, haben Cookies einen separaten Speicher für jede Top-Level-Site und können nur innerhalb der Top-Level-Site und ihrer Subdomains gelesen werden, auf der sie gesetzt wurden. Dies blockiert das Cross-Site-Tracking, während legitime Verwendungen von Drittanbieter-Cookies, wie das Beibehalten des Status von eingebetteten Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg, weiterhin möglich sind. ([Firefox Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle werden jetzt unterstützt. Diese liefern den Winkel zwischen dem Zeigegerät/Stylus und dem Bildschirm (X-Y-Ebene) sowie die Drehung des Stylus über dem Bildschirm relativ zur x-Achse. ([Firefox Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt, was es den Benutzern erlaubt, auf bestimmte Textabschnitte einer Webseite zu verlinken und diese hervorzuheben. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert. Entwickler können jetzt auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle) nutzen, um die Unterstützung von Textfragmenten zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}} Pseudo-Element verwendet werden, um Text auszuwählen und zu stylen, der mittels eines Textfragment-Links ausgewählt wurde. ([Firefox Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wurde aktualisiert, um den Textknoten und den Versatz für eine Cursorposition innerhalb eines Shadow DOM zurückzugeben, sofern das zum Punkt gehörende Shadow-Root der Methode übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte können an die Methode unter Verwendung der `shadowRoots`-Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Ausnahmereferenzwert `exnref` kann jetzt zur Unterstützung der [Fehlerbehandlung](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen verwendet werden. ([Firefox Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi akzeptieren die `keyUp` und `keyDown` Aktionen nicht mehr mehrere Zeichen für den `value`. ([Firefox Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse` Befehls hinzugefügt:
  - Die Argumente `cookies` und `headers`. ([Firefox Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Not modified"). ([Firefox Bug 1913737](https://bugzil.la/1913737)).
- Der Befehl `browsingContext.navigate` wird jetzt zurückkehren, wenn das `wait` Argument `none` ist und ein `beforeunload` Prompt ausgelöst wird. ([Firefox Bug 1763134](https://bugzil.la/1763134)).
- Der Befehl `browsingContext.navigate` wird einen `unknown error` in allen Fällen zurückgeben, in denen ein Navigationsfehler auftritt, wie es die Spezifikation erfordert. ([Firefox Bug 1905083](https://bugzil.la/1905083)).
- Der Befehl `session.new` wird das `unhandledPromptBehavior` Attribut nicht mehr in seiner Antwort enthalten, wenn es nicht vom Client als Argument spezifiziert wurde. ([Firefox Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10 MB-Limit für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt in Firefox Nightly 131 durchgesetzt. Zuvor hat Firefox dieses Limit nicht implementiert. Diese Durchsetzung wird in den Veröffentlichungen von Firefox ab Version 137 implementiert ([Firefox Bug 1915688](https://bugzil.la/1915688)). Dies ermöglicht es Erweiterungen, die auf das bisherige Verhalten angewiesen sind, eventuelle Probleme zu korrigieren. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt nun die API {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} und die Eigenschaft {{WebExtAPIRef("storage.session.QUOTA_BYTES")}}. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` gesetzt auf `-1`, um `openerTabId` zu löschen ([Firefox Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 131 integriert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdrucks-Modifikatoren (?ims-ims:...):** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren für reguläre Ausdrücke erlauben Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die Berechtigungen `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugang zur entsprechenden Hardware gewährt, verweigert oder noch der Zustimmung des Benutzers bedarf. ([Firefox Bug 1609427](https://bugzil.la/1609427) und [Firefox Bug 1915222](https://bugzil.la/1915222)).
