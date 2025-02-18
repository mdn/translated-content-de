---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in {{CSSXRef("position-area")}} umbenannt, um die weitere Implementierung von [Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) vorzubereiten. Derzeit wird diese Eigenschaft nur intern zum Parsen von Werten verwendet. Die Funktionen der Anchor Positioning werden schrittweise und hinter einer Einstellung eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS Anchor Positioning](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox-Bug 1909358](https://bugzil.la/1909358) und [Firefox-Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese Hilfsmethoden ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dass Zwischenergebnisse als `Array` erstellt werden müssen. Sie können auch bei sehr großen Datensätzen verwendet werden, bei denen das Erstellen eines Zwischen-`Array` nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox-Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss jetzt auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure)-Attribut enthalten. Dies stellt sicher, dass Cookies mit `SameSite=None` nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht angegebenen `SameSite`-Wert als `SameSite=None` interpretiert, gilt diese Einschränkung auch für Cookies, die `SameSite` nicht spezifizieren. ([Firefox-Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie mit Hilfe der [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned)-Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in eine partitionierte Speicherung aufzunehmen. Wenn gesetzt, haben Cookies getrennte Speicher für jede Top-Level-Seite und können nur innerhalb der gleichen Top-Level-Seite, auf der sie gesetzt wurden, und ihrer Subdomains gelesen werden. Dies blockiert Cross-Site-Tracking, ermöglicht jedoch weiterhin legitime Verwendungen von Drittanbieter-Cookies, wie das Beibehalten des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Website. ([Firefox-Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle werden jetzt unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Drehung des Stifts über dem Bildschirm relativ zu seiner X-Achse an. ([Firefox-Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt, sodass Benutzer zu bestimmten Textteilen in einer Webseite verlinken und diese hervorheben können. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert.
  Entwickler können jetzt auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Schnittstelle) verwenden, um die Unterstützung für Textfragmente zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}}-Pseudo-Element verwendet werden, um Text auszuwählen und zu formatieren, der mit einem Textfragment-Link ausgewählt wurde. ([Firefox-Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wurde aktualisiert, um den Textknoten und den Offset für eine Cursorposition innerhalb eines Shadow DOM zurückzugeben, sofern die entsprechende Shadow-Root zur Methode übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte können der Methode über die `shadowRoots`-Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Ausnahmeverweis mit dem Wert `exnref` kann jetzt verwendet werden, um zwischen WebAssembly und JavaScript in beide Richtungen [Ausnahmen zu behandeln](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception). ([Firefox-Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi werden `keyUp`- und `keyDown`-Aktionen keine Mehrfachzeichen für den `value`-Wert mehr akzeptieren. ([Firefox-Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für restliche Argumente des `network.continueResponse`-Kommandos hinzugefügt:
  - Die Argumente `cookies` und `headers`. ([Firefox-Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z. B. 200, 304) und `reasonPhrase` (z. B. "OK", "Not modified"). ([Firefox-Bug 1913737](https://bugzil.la/1913737)).
- Das Kommando `browsingContext.navigate` gibt jetzt zurück, wenn das Argument `wait` `none` ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox-Bug 1763134](https://bugzil.la/1763134)).
- Das Kommando `browsingContext.navigate` gibt einen `unknown error` zurück, wenn ein Navigationsfehler auftritt, wie in der Spezifikation gefordert. ([Firefox-Bug 1905083](https://bugzil.la/1905083)).
- Das Kommando `session.new` wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seiner Antwort enthalten, wenn sie nicht explizit vom Client als Argument spezifiziert wurde. ([Firefox-Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Die 10-MB-Grenze für Daten, die von der {{WebExtAPIRef("storage.session")}}-API gespeichert werden, wird jetzt in Firefox Nightly 131 erzwungen. Zuvor wurde diese Grenze nicht implementiert. Diese Durchsetzung wird ab Version 134 auf Release-Versionen von Firefox ausgerollt. ([Firefox-Bug 1915688](https://bugzil.la/1915688)). Dadurch können Erweiterungen, die sich auf das bisherige Verhalten verlassen, diese Probleme belegen und korrigieren. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt jetzt die API {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} und die Eigenschaft {{WebExtAPIRef("storage.session.QUOTA_BYTES")}}. ([Firefox-Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox-Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` mit dem Wert `-1`, um `openerTabId` zu löschen ([Firefox-Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 131 neu ausgeliefert, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Regex-Modifikatoren (?ims-ims:...):** `javascript.options.experimental.regexp_modifiers`.

  Die Regex-Modifikatoren [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) erlauben Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die [Berechtigungen](/de/docs/Web/API/Permissions_API) für `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch eine Zustimmung des Benutzers erforderlich ist. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
