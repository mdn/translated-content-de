---
title: Firefox 131 Versionshinweise für Entwickler
short-title: Firefox 131
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Web-Entwickler

### CSS

- Die `inset-area` CSS-Eigenschaft wurde in Vorbereitung auf die weitere Implementierung von [Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zum Parsen von Werten verwendet. Die Funktionen der Verankerungspositionierung werden schrittweise hinter einer Vorzugsoption eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS-Verankerungspositionierung](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox Fehler 1909358](https://bugzil.la/1909358) und [Firefox Fehler 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese Helfer ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dazwischen liegende `Array`-Objekte erstellen zu müssen. Sie können auch mit sehr großen Datenmengen verwendet werden, bei denen die Erstellung eines Zwischen-Arrays nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox Fehler 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none) muss jetzt auch das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt werden, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht angegebenen `SameSite`-Wert als `SameSite=None` interpretiert, unterliegen auch Cookies, bei denen `SameSite` nicht spezifiziert ist, derselben Einschränkung. ([Firefox Fehler 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in die partitionierte Speicherung einzubeziehen. Wenn eingestellt, haben Cookies getrennte Speicher für jede Top-Level-Site und können nur innerhalb der gleichen Top-Level-Site und deren Subdomains, auf der sie gesetzt wurden, gelesen werden. Dies blockiert das Tracking über Websites hinweg, ermöglicht jedoch weiterhin legitime Verwendungen von Drittanbieter-Cookies, z. B. das Speichern von Zuständen eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Website hinweg. ([Firefox Fehler 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle werden jetzt unterstützt. Diese Eigenschaften geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Drehung des Stiftes über dem Bildschirm relativ zu seiner x-Achse an. ([Firefox Fehler 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt und ermöglichen es Benutzern, zu bestimmten Textabschnitten auf einer Webseite zu verlinken und sie hervorzuheben. Diese Funktion verwendet eine bestimmte Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert.
  Entwickler können jetzt auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle) verwenden, um die Unterstützung von Textfragmenten zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}} Pseudoelement verwendet werden, um Text auszuwählen und zu stylen, der mit einem Textfragment-Link ausgewählt wurde. ([Firefox Fehler 1914877](https://bugzil.la/1914877)).
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wurde aktualisiert, um den Textknoten und den Offset für eine Kursorposition innerhalb eines Shadow DOM zurückzugeben, vorausgesetzt, dass das Shadow-Root, das dem Punkt entspricht, der Methode übergeben wird. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte können der Methode unter Verwendung der `shadowRoots` Eigenschaft des neu hinzugefügten `options` Parameters übergeben werden. ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Ausnahmeverweis mit dem Wert `exnref` kann jetzt verwendet werden, um das [Ausnahmehandling](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen zu unterstützen. ([Firefox Fehler 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Sowohl für WebDriver Classic als auch BiDi akzeptieren die `keyUp` und `keyDown` Aktionen keine mehreren Zeichen mehr für den `value`. ([Firefox Fehler 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse` Befehls wurde hinzugefügt:
  - Die Argumente cookies und headers. ([Firefox Fehler 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z. B. 200, 304) und `reasonPhrase` (z. B. "OK", "Nicht modifiziert"). ([Firefox Fehler 1913737](https://bugzil.la/1913737)).
- Der `browsingContext.navigate` Befehl wird jetzt zurückgegeben, wenn das `wait` Argument `none` ist und ein `beforeunload` Dialog ausgelöst wird. ([Firefox Fehler 1763134](https://bugzil.la/1763134)).
- Der `browsingContext.navigate` Befehl gibt einen `unknown error` in allen Fällen zurück, in denen ein Navigationsfehler auftritt, wie es die Spezifikation erfordert. ([Firefox Fehler 1905083](https://bugzil.la/1905083)).
- Der `session.new` Befehl wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seine Antwort einschließen, wenn diese nicht vom Client als Argument angegeben wurde. ([Firefox Fehler 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10 MB-Limit für Daten, die durch die {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt in Firefox Nightly 131 durchgesetzt. Vorher implementierte Firefox dieses Limit nicht. Diese Durchsetzung wird ab Version 137 auf die Release-Versionen von Firefox ausgerollt ([Firefox Fehler 1915688](https://bugzil.la/1915688)). Dies ermöglicht Erweiterungen, die sich auf das vorherige Verhalten verlassen haben, ggf. vorhandene Probleme zu korrigieren. ([Firefox Fehler 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt jetzt die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} Eigenschaft. ([Firefox Fehler 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox Fehler 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` auf `-1` gesetzt, um `openerTabId` zu löschen ([Firefox Fehler 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 131 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Option auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck (?ims-ims:...) Modifikatoren:** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren für reguläre Ausdrücke ermöglichen Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox Fehler 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die `Mikrofon`- und `Kamera`-[Berechtigungen](/de/docs/Web/API/Permissions_API) können jetzt in der [`Permissions.query()`](/de/docs/Web/API/Permissions/query) Methode verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch die Genehmigung des Benutzers erforderlich ist. ([Firefox Fehler 1609427](https://bugzil.la/1609427) und [Firefox Fehler 1915222](https://bugzil.la/1915222)).
