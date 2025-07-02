---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde zu {{CSSXRef("position-area")}} umbenannt, um die weitere Implementierung der [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) vorzubereiten. Derzeit wird diese Eigenschaft nur intern zur Wertanalyse verwendet. Die Funktionen zur Ankerpositionierung werden schrittweise hinter einer Präferenz eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS-Ankerpositionierung](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox-Bug 1909358](https://bugzil.la/1909358) und [Firefox-Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchronisierte Iterator-Hilfemethoden wurde hinzugefügt, darunter: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese Hilfsmethoden ermöglichen `Array`-ähnliche Operationen an Iteratoren, ohne zwischenzeitliche `Array`-Objekte erstellen zu müssen. Sie können auch bei sehr großen Datensätzen verwendet werden, bei denen die Erstellung eines Zwischen-Arrays nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) im `Iterator`-Interface. ([Firefox-Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none) muss nun auch das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt werden, nur über HTTPS-Kanäle gesendet werden. Darüber hinaus interpretiert Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None`, was für Cookies, die `SameSite` nicht angeben, die gleiche Einschränkung zur Folge hat. ([Firefox-Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt. Diese Funktion ermöglicht es Entwicklern, ein Cookie durch die [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in den partitionierten Speicher einzubinden. Wenn gesetzt, verfügen Cookies über einen separaten Speicher für jede Seite der obersten Ebene und können nur innerhalb derselben obersten Seite und ihrer Subdomains gelesen werden, auf der sie gesetzt wurden. Dies blockiert Cross-Site-Tracking, ermöglicht jedoch weiterhin die legitime Nutzung von Drittanbieter-Cookies wie z.B. das Speichern des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Seite hinweg. ([Firefox-Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) des [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interfaces werden jetzt unterstützt. Diese bieten den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Rotation des Stifts über dem Bildschirm relativ zur X-Achse. ([Firefox-Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt, wodurch Benutzer spezifische Textabschnitte auf einer Webseite verlinken und hervorheben können. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert. Entwickler können jetzt auch das Vorhandensein der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft (eine Instanz des [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Interface) verwenden, um die Unterstützung von Textfragmenten zu überprüfen. Darüber hinaus kann das {{CSSxRef("::target-text")}} Pseudo-Element verwendet werden, um Text auszuwählen und zu gestalten, der über einen Textfragment-Link ausgewählt wurde. ([Firefox-Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) des [`Document`](/de/docs/Web/API/Document) Interfaces wurde aktualisiert, um die Textknoten und den Offset für eine Cursorposition innerhalb eines Shadow DOM zurückzugeben, sofern das entsprechende Shadow-Root der Methode bereitgestellt wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte können der Methode mit der `shadowRoots` Eigenschaft des neu hinzugefügten `options` Arguments übergeben werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Die neue Ausnahme-Referenz mit dem Wert `exnref` kann jetzt zur Unterstützung der [Ausnahmebehandlung](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beiden Richtungen verwendet werden. ([Firefox-Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Sowohl bei WebDriver Classic als auch BiDi werden die Aktionen `keyUp` und `keyDown` keine mehrere Zeichen mehr für den Wert `value` akzeptieren. ([Firefox-Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse` Kommandos wurde hinzugefügt:
  - Die Cookies- und Header-Argumente. ([Firefox-Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z. B. 200, 304) und `reasonPhrase` (z. B. "OK", "Nicht modifiziert"). ([Firefox-Bug 1913737](https://bugzil.la/1913737)).
- Der Befehl `browsingContext.navigate` wird nun zurückkehren, wenn das `wait` Argument `none` ist und ein `beforeunload` Prompt ausgelöst wird. ([Firefox-Bug 1763134](https://bugzil.la/1763134)).
- Der Befehl `browsingContext.navigate` wird in allen Fällen, in denen ein Navigationsfehler auftritt, einen `unknown error` zurückgeben, wie es die Spezifikation vorschreibt. ([Firefox-Bug 1905083](https://bugzil.la/1905083)).
- Der Befehl `session.new` wird die `unhandledPromptBehavior` Fähigkeit nicht mehr in seiner Antwort einschließen, wenn sie vom Client nicht als Argument angegeben wurde. ([Firefox-Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10-MB-Limit für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird nun in Firefox Nightly 131 durchgesetzt. Zuvor hatte Firefox dieses Limit nicht implementiert. Diese Durchsetzung wird in den Freigabenversionen von Firefox ab Version 137 eingeführt ([Firefox-Bug 1915688](https://bugzil.la/1915688)). Dies ermöglicht Erweiterungen, die auf das bisherige Verhalten angewiesen sind, etwaige Probleme zu beheben. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt jetzt die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} Eigenschaft. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird nun ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox-Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` auf `-1` gesetzt, um `openerTabId` zu löschen ([Firefox-Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 131 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck (?ims-ims:...) Modifikatoren:** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren von regulären Ausdrücken erlauben Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die Berechtigungen für `microphone` und `camera` können nun in der [`Permissions.query()`](/de/docs/Web/API/Permissions/query) Methode verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert wurde oder noch die Zustimmung des Benutzers erfordert. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
