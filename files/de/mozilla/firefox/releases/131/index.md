---
title: Firefox 131 Versionshinweise für Entwickler
short-title: Firefox 131
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde zu {{CSSXRef("position-area")}} umbenannt, als Vorbereitung für die weitere Implementierung der [Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning). Derzeit wird diese Eigenschaft nur intern zum Parsen von Werten verwendet. Die Funktionen zur Anker-Positionierung werden schrittweise hinter einer Einstellung eingeführt. ([Firefox bug 1909358](https://bugzil.la/1909358) und [Firefox bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, und {{jsxref("Iterator.prototype.take()")}}. Diese Helfer ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dass zwischengeschaltete `Array`-Objekte erstellt werden müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen die Erstellung eines zwischengeschalteten `Array` nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none) muss nun auch das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies mit `SameSite=None` nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, unterliegen auch Cookies, die `SameSite` nicht spezifizieren, dieser Einschränkung. ([Firefox bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies), oder "partitionierte Cookies", werden nun unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie über die [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in partitionierten Speicher zu überführen. Wenn festgelegt, haben Cookies für jede oberste Ebene der Website einen eigenen Speicher und können nur innerhalb derselben obersten Ebene der Website gelesen werden, für die sie gesetzt wurden, sowie deren Subdomains. Dies blockiert das Tracking über Websites hinweg, während legitime Verwendungen von Drittanbieter-Cookies, wie das Speichern von Zuständen eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Website hinweg, ermöglicht werden. ([Firefox bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle werden nun unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Rotation des Stiftes über dem Bildschirm relativ zu seiner x-Achse an. ([Firefox bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt, was es den Nutzern ermöglicht, Links zu bestimmten Textstellen auf einer Webseite zu setzen und diese hervorzuheben. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert.
  Entwickler können nun auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Schnittstelle) verwenden, um die Unterstützung für Textfragmente zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}} Pseudoelement verwendet werden, um Text auszuwählen und zu stylen, der über einen Textfragment-Link ausgewählt wurde. ([Firefox bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wurde aktualisiert, um den Textknoten und den Offset für eine Karetposition innerhalb eines Shadow DOM zurückzugeben, vorausgesetzt, das entsprechende Shadow-Root zum Punkt wurde an die Methode übergeben. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte können der Methode über die `shadowRoots`-Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Die neue Ausnahme-Referenz mit dem Wert `exnref` kann nun für das [Fehlerbehandeln](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen verwendet werden. ([Firefox bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi werden die Aktionen `keyUp` und `keyDown` nicht länger mehrere Zeichen für den `value` akzeptieren. ([Firefox bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse`-Befehls hinzugefügt:
  - Die Argumente cookies und headers. ([Firefox bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z.B., 200, 304) und `reasonPhrase` (z.B., "OK", "Not modified"). ([Firefox bug 1913737](https://bugzil.la/1913737)).
- Der `browsingContext.navigate`-Befehl wird nun zurückkehren, wenn das `wait`-Argument auf `none` gesetzt ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox bug 1763134](https://bugzil.la/1763134)).
- Der `browsingContext.navigate`-Befehl wird einen `unknown error` in allen Fällen zurückgeben, in denen ein Navigationsfehler auftritt, wie es die Spezifikation verlangt. ([Firefox bug 1905083](https://bugzil.la/1905083)).
- Der `session.new`-Befehl wird die `unhandledPromptBehavior`-Fähigkeit in seiner Antwort nicht mehr einschließen, wenn sie nicht vom Client als Argument angegeben wurde. ([Firefox bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Die 10 MB-Quote für von der {{WebExtAPIRef("storage.session")}} API gespeicherte Daten wird nun in Firefox Nightly 131 durchgesetzt. Bisher hat Firefox diese Quote nicht implementiert. Diese Durchsetzung wird in Release-Versionen von Firefox ab Version 137 eingeführt ([Firefox bug 1915688](https://bugzil.la/1915688)). Dies ermöglicht Erweiterungen, die sich auf das vorherige Verhalten verlassen, eventuelle Probleme zu korrigieren. ([Firefox bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt nun die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} Eigenschaft. ([Firefox bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird nun ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert nun `openerTabId` auf `-1` gesetzt, um `openerTabId` zu löschen ([Firefox bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 131 implementiert, aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck (?ims-ims:...) Modifizierer:** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifizierer für reguläre Ausdrücke ermöglichen Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die Berechtigungen für `microphone` und `camera` können jetzt in der [`Permissions.query()`](/de/docs/Web/API/Permissions/query) Methode verwendet werden, um zu testen, ob der Zugriff auf die entsprechenden Hardware gewährt, abgelehnt oder noch die Zustimmung des Nutzers erforderlich ist. ([Firefox bug 1609427](https://bugzil.la/1609427) und [Firefox bug 1915222](https://bugzil.la/1915222)).
