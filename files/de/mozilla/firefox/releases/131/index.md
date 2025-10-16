---
title: Firefox 131 Versionshinweise für Entwickler
short-title: Firefox 131
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in Vorbereitung auf die weitere Implementierung von [Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) zu {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zur Wertanalyse verwendet. Die Funktionen für Anchor Positioning werden schrittweise hinter einer Einstellung eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS Anchor Positioning](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox Bug 1909358](https://bugzil.la/1909358) und [Firefox Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese Helfer ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dass Zwischenschritte mit `Array`-Objekten erstellt werden müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen die Erstellung eines Zwischen-`Array`-Objekts nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none) muss nun auch das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure)-Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt werden, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, betrifft diese Einschränkung auch Cookies, die `SameSite` nicht spezifizieren. ([Firefox Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängig partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt.
  Diese Funktion erlaubt es Entwicklern, ein Cookie über die [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Anweisung des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in partitionierten Speicher zu übergeben. Bei Aktivierung haben Cookies einen getrennten Speicher für jede oberste Website und können nur innerhalb derselben obersten Website gelesen werden, auf der sie gesetzt wurden, sowie deren Subdomains. Dies verhindert Tracking über Websites hinweg, ermöglicht aber dennoch legitime Anwendungen von Drittanbieter-Cookies, wie das Beibehalten von Zuständen eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Website hinweg. ([Firefox Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle werden nun unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) bzw. die Rotation des Stifts über dem Bildschirm relativ zu seiner x-Achse an. ([Firefox Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden nun unterstützt, wodurch Benutzer bestimmte Textabschnitte auf einer Webseite direkt verlinken und hervorheben können. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), um das Ziel basierend auf Mustern im gerenderten Text zu identifizieren.
  Entwickler können nun auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Schnittstelle) verwenden, um die Unterstützung für Textfragmente zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}}-Pseudo-Element verwendet werden, um Text auszuwählen und zu stylen, der mit einem Textfragment-Link ausgewählt wurde. ([Firefox Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wurde aktualisiert, um den Textknoten und den Versatz für eine Cursorposition innerhalb eines Shadow DOM zurückzugeben, vorausgesetzt, die zugehörige Schattenwurzel wurde der Methode übergeben. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte können an die Methode mithilfe der `shadowRoots`-Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Ausnahme-Referenzwert `exnref` kann nun verwendet werden, um beim [Exception Handling](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beiden Richtungen zu helfen. ([Firefox Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi werden die `keyUp`- und `keyDown`-Aktionen keine Mehrfachzeichen mehr für den `value` akzeptieren. ([Firefox Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für die verbleibenden Argumente des `network.continueResponse`-Befehls wurde hinzugefügt:
  - Die Argumente Cookies und Headers. ([Firefox Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Nicht modifiziert"). ([Firefox Bug 1913737](https://bugzil.la/1913737)).
- Der `browsingContext.navigate`-Befehl wird nun zurückkehren, wenn das `wait`-Argument `none` ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox Bug 1763134](https://bugzil.la/1763134)).
- Der `browsingContext.navigate`-Befehl wird einen `unknown error` in allen Fällen zurückgeben, in denen ein Navigationsfehler auftritt, wie es in der Spezifikation erforderlich ist. ([Firefox Bug 1905083](https://bugzil.la/1905083)).
- Der `session.new`-Befehl wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seiner Antwort enthalten, wenn sie nicht vom Client als Argument angegeben wurde. ([Firefox Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10-MB-Limit für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird nun in Firefox Nightly 131 durchgesetzt. Bisher hat Firefox dieses Limit nicht implementiert. Diese Durchsetzung wird ab Version 137 auf die freigegebenen Versionen von Firefox ausgerollt ([Firefox Bug 1915688](https://bugzil.la/1915688)). Dies ermöglicht Erweiterungen, die sich auf das vorherige Verhalten verlassen, mögliche Probleme zu beheben. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt nun die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} Eigenschaft. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` auf `-1` gesetzt, um `openerTabId` zu löschen ([Firefox Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 131 enthalten, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite die entsprechende Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdrucksmodifikatoren (?ims-ims:...):** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regulären Ausdrucksmodifikatoren erlauben es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die [Berechtigungen](/de/docs/Web/API/Permissions_API) für `microphone` und `camera` können nun in der [`Permissions.query()`](/de/docs/Web/API/Permissions/query)-Methode verwendet werden, um zu prüfen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch die Zustimmung des Benutzers erforderlich ist. ([Firefox Bug 1609427](https://bugzil.la/1609427) und [Firefox Bug 1915222](https://bugzil.la/1915222)).
