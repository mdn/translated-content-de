---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die `inset-area` CSS-Eigenschaft wurde in Vorbereitung auf die weitere Implementierung von [Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zum Parsen von Werten verwendet. Die Features von Anchor Positioning werden schrittweise hinter einer Präferenz eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS Anchor Positioning](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox-Bug 1909358](https://bugzil.la/1909358) und [Firefox-Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, und {{jsxref("Iterator.prototype.take()")}}. Diese Hilfsmethoden erlauben `Array`-ähnliche Operationen auf Iteratoren, ohne Zwischen-`Array`-Objekte erstellen zu müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen das Erstellen eines Zwischen-`Array` nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox-Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert von [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none) muss jetzt auch das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt werden, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, unterliegen Cookies, die `SameSite` nicht angeben, derselben Einschränkung. ([Firefox-Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie mithilfe der [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in einen partitionierten Speicher zu überführen. Wenn gesetzt, haben Cookies einen separaten Speicher für jede Top-Level-Site und können nur innerhalb derselben Top-Level-Site, auf der sie gesetzt wurden, und ihren Subdomains gelesen werden. Dies blockiert ein Tracking über mehrere Websites, ermöglicht aber legitime Nutzungen von Drittanbieter-Cookies, wie das Fortbestehen von Zuständen eingebetteter Karten oder Chat-Widgets über unterschiedliche Subdomains einer Website hinweg. ([Firefox-Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle werden jetzt unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) bzw. die Drehung des Stifts über dem Bildschirm relativ zu seiner x-Achse an. ([Firefox-Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt, wodurch Benutzer auf bestimmte Textabschnitte in einer Webseite verlinken und diese hervorheben können. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), die das Ziel anhand von Mustern im gerenderten Text identifiziert.
  Entwickler können jetzt auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle) verwenden, um die Unterstützung von Textfragmenten zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}} Pseudoelement verwendet werden, um den mit einem Textfragment-Link ausgewählten Text auszuwählen und zu stylen. ([Firefox-Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wurde aktualisiert, um den Textknoten und den Offset für eine Caret-Position innerhalb eines Shadow DOM zurückzugeben, sofern die Shadow-Root, die dem Punkt entspricht, an die Methode übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte können mithilfe der `shadowRoots` Eigenschaft des neu hinzugefügten `options` Arguments an die Methode übergeben werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Ausnahme-Referenzwert `exnref` kann jetzt verwendet werden, um beim [Exception-Handling](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen zu unterstützen. ([Firefox-Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Sowohl für WebDriver Classic als auch BiDi akzeptieren die `keyUp` und `keyDown` Aktionen keine mehrfachen Zeichen mehr für den `value`. ([Firefox-Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für die restlichen Argumente des `network.continueResponse` Befehls hinzugefügt:
  - Die Argumente cookies und headers. ([Firefox-Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Not modified"). ([Firefox-Bug 1913737](https://bugzil.la/1913737)).
- Der `browsingContext.navigate` Befehl wird jetzt zurückkehren, wenn das `wait` Argument `none` ist und ein `beforeunload` Hinweis ausgelöst wird. ([Firefox-Bug 1763134](https://bugzil.la/1763134)).
- Der `browsingContext.navigate` Befehl wird in allen Fällen, in denen ein Navigationsfehler auftritt, einen `unknown error` zurückgeben, wie in der Spezifikation erforderlich. ([Firefox-Bug 1905083](https://bugzil.la/1905083)).
- Der `session.new` Befehl wird die `unhandledPromptBehavior` Fähigkeit nicht mehr in seine Antwort aufnehmen, wenn sie nicht vom Client als Argument spezifiziert wurde. ([Firefox-Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10 MB Kontingent für die von der {{WebExtAPIRef("storage.session")}} API gespeicherten Daten wird jetzt in Firefox Nightly 131 durchgesetzt. Bisher hat Firefox dieses Kontingent nicht implementiert. Diese Durchsetzung wird in Freigabeversionen von Firefox ab Version 137 eingeführt ([Firefox-Bug 1915688](https://bugzil.la/1915688)). Dies ermöglicht es Erweiterungen, die sich auf das vorherige Verhalten verlassen, etwaige Probleme zu korrigieren. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt jetzt die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} Eigenschaft. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox-Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` auf `-1` gesetzt, um `openerTabId` zu löschen ([Firefox-Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Technologien

Diese Funktionen sind neu in Firefox 131 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite die entsprechende Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Reguläre Ausdrucksmodifikatoren (?ims-ims:...):** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regulären Ausdrucksmodifikatoren erlauben es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die `microphone` und `camera` [Berechtigungen](/de/docs/Web/API/Permissions_API) können jetzt in der [`Permissions.query()`](/de/docs/Web/API/Permissions/query) Methode verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch eine Benutzerzustimmung erforderlich ist. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
