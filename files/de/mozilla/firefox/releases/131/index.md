---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in Vorbereitung auf die weitere Implementierung von [Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zur Wertanalyse verwendet. Die Funktionen von Anchor Positioning werden schrittweise hinter einer Einstellung eingeführt. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS Anchor Positioning](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox Fehler 1909358](https://bugzil.la/1909358) und [Firefox Fehler 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, und {{jsxref("Iterator.prototype.take()")}}. Diese Helfer ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne Zwischenergebnisse als `Array`-Objekte erstellen zu müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen das Erstellen eines Zwischen-`Array`s nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox Fehler 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss nun auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt sind, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht angegebenen `SameSite`-Wert als `SameSite=None` interpretiert, haben Cookies, die `SameSite` nicht spezifizieren, die gleiche Einschränkung. ([Firefox Fehler 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden nun unterstützt. Diese Funktion ermöglicht es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in den partitionierten Speicher aufzunehmen. Wenn gesetzt, haben Cookies getrennte Speicher für jede Top-Level-Site und können nur innerhalb der Top-Level-Site, auf der sie gesetzt wurden, und deren Subdomains gelesen werden. Dies blockiert das Tracking über mehrere Seiten hinweg, ermöglicht jedoch legitime Verwendungen von Drittanbieter-Cookies, wie das Speichern des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Seite. ([Firefox Fehler 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle werden jetzt unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stylus und dem Bildschirm (X-Y-Ebene) bzw. die Rotation des Stylus über dem Bildschirm relativ zu seiner x-Achse an. ([Firefox Fehler 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) werden jetzt unterstützt, was es Benutzern ermöglicht, auf bestimmte Textstellen in einer Webseite zu verlinken und diese hervorzuheben. Diese Funktion verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert. Entwickler können nun auch das Vorhandensein der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Schnittstelle) verwenden, um die Unterstützung für Textfragmente zu überprüfen. Darüber hinaus kann das {{CSSxRef("::target-text")}} Pseudo-Element verwendet werden, um Text, der über einen Textfragmentlink ausgewählt wurde, auszuwählen und zu stylen. ([Firefox Fehler 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wurde aktualisiert, um den Textknoten und den Versatz für eine Caret-Position innerhalb eines Shadow DOM zurückzugeben, vorausgesetzt, das Shadow-Root, das dem Punkt entspricht, wurde der Methode übergeben. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte können der Methode über die `shadowRoots`-Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox Fehler 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Ausnahme-Referenztyp mit dem Wert `exnref` kann jetzt verwendet werden, um bei der [Ausnahmebehandlung](/de/docs/WebAssembly/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen zu helfen. ([Firefox Fehler 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi werden die `keyUp` und `keyDown` Aktionen keine Mehrfachzeichen mehr für den `value` akzeptieren. ([Firefox Fehler 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für die verbleibenden Argumente des `network.continueResponse`-Kommandos hinzugefügt:
  - Die Argumente für Cookies und Header. ([Firefox Fehler 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z. B. 200, 304) und `reasonPhrase` (z. B. "OK", "Not modified"). ([Firefox Fehler 1913737](https://bugzil.la/1913737)).
- Das Kommando `browsingContext.navigate` gibt nun zurück, wenn das `wait`-Argument `none` ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox Fehler 1763134](https://bugzil.la/1763134)).
- Das Kommando `browsingContext.navigate` wird einen `unknown error` in allen Fällen zurückgeben, in denen ein Navigationsfehler auftritt, wie es von der Spezifikation gefordert wird. ([Firefox Fehler 1905083](https://bugzil.la/1905083)).
- Das Kommando `session.new` wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seiner Antwort einschließen, wenn sie nicht vom Client als Argument spezifiziert wurde. ([Firefox Fehler 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Die 10 MB-Quote für von der {{WebExtAPIRef("storage.session")}} API gespeicherte Daten wird nun in Firefox Nightly 131 durchgesetzt. Zuvor hatte Firefox diese Quote nicht implementiert. Diese Durchsetzung wird ab Version 134 auf Release-Versionen von Firefox ausgeweitet ([Firefox Fehler 1915688](https://bugzil.la/1915688)). Dies ermöglicht es Erweiterungen, die sich auf das vorherige Verhalten stützten, etwaige Probleme zu beheben. ([Firefox Fehler 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt nun die API {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} und die Eigenschaft {{WebExtAPIRef("storage.session.QUOTA_BYTES")}}. ([Firefox Fehler 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird nun ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox Fehler 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert nun `openerTabId` gesetzt auf `-1`, um `openerTabId` zu löschen ([Firefox Fehler 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 131, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die passende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere dieser Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck (?ims-ims:...) Modifikatoren:** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regulären Ausdruck-Modifikatoren erlauben Ihnen Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox Fehler 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die Berechtigungen für `microphone` und `camera` [Berechtigungen](/de/docs/Web/API/Permissions_API) können nun in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch von der Benutzerzustimmung abhängt. ([Firefox Fehler 1609427](https://bugzil.la/1609427) und [Firefox Fehler 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
