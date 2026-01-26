---
title: Firefox 131 Versionshinweise für Entwickler
short-title: Firefox 131
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 891ca0872fffab7dfec25bc56243e6f89d6089ab
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in Vorbereitung auf die weitere Implementierung der [Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zum Parsen von Werten verwendet. Die Funktionen der Ankerpositionierung werden schrittweise hinter einer Einstellung eingeführt. ([Firefox Bug 1909358](https://bugzil.la/1909358) und [Firefox Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese Helfer ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dass dabei Zwischen-`Array`-Objekte erstellt werden müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen die Erstellung eines Zwischen-`Array` nicht möglich wäre. Für weitere Informationen siehe [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#none) muss jetzt auch das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt wurden, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, haben Cookies, die `SameSite` nicht angeben, die gleiche Einschränkung. ([Firefox Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder „partitionierte Cookies“, werden jetzt unterstützt. Diese Funktion ermöglicht es Entwicklern, ein Cookie mithilfe der [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in den partitionierten Speicher aufzunehmen. Wenn sie gesetzt ist, haben Cookies separaten Speicher für jede Top-Level-Site und können nur innerhalb derselben Top-Level-Site, auf der sie gesetzt wurden, und deren Subdomains gelesen werden. Dies blockiert das Tracking über Websites hinweg, ermöglicht jedoch weiterhin legitime Verwendungen von Drittanbieter-Cookies, wie das Beibehalten des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Website hinweg. ([Firefox Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) Eigenschaften der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle werden jetzt unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Drehung des Stifts über den Bildschirm relativ zur x-Achse an. ([Firefox Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt, was es Benutzern ermöglicht, auf bestimmte Textabschnitte einer Webseite zu verlinken und diese hervorzuheben. Diese Funktion verwendet eine bestimmte Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), die das Ziel anhand von Mustern im gerenderten Text identifiziert. Entwickler können auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle) verwenden, um die Unterstützung von Textfragmenten zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}} Pseudo-Element verwendet werden, um Text auszuwählen und zu stylen, der mit einem Textfragment-Link ausgewählt wurde. ([Firefox Bug 1914877](https://bugzil.la/1914877))
- Die [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle wurde aktualisiert, um den Textknoten und den Versatz für eine Einfügemarke innerhalb eines Shadow DOM zurückzugeben, vorausgesetzt, die zur Position gehörende Shadow-Root wurde der Methode bereitgestellt. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte können der Methode über die `shadowRoots` Eigenschaft des neu hinzugefügten `options` Arguments übergeben werden. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Die neue Ausnahme-Referenz mit dem Wert `exnref` kann jetzt verwendet werden, um bei der [Ausnahmesteuerung](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen zu helfen. ([Firefox Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi akzeptieren die `keyUp` und `keyDown` Aktionen keine mehreren Zeichen mehr für den `value`. ([Firefox Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse` Befehls hinzugefügt:
  - Die Cookies- und Header-Argumente. ([Firefox Bug 1853887](https://bugzil.la/1853887)).
  - Die `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Not modified") Argumente. ([Firefox Bug 1913737](https://bugzil.la/1913737)).
- Der `browsingContext.navigate` Befehl wird nun zurückkehren, wenn das `wait` Argument `none` ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox Bug 1763134](https://bugzil.la/1763134)).
- Der `browsingContext.navigate` Befehl wird einen `unknown error` in allen Fällen zurückgeben, in denen ein Navigationsfehler auftritt, wie es in der Spezifikation gefordert wird. ([Firefox Bug 1905083](https://bugzil.la/1905083)).
- Der `session.new` Befehl wird die `unhandledPromptBehavior` Fähigkeit nicht mehr in seiner Antwort enthalten, wenn sie vom Client nicht als Argument angegeben wurde. ([Firefox Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Die 10-MB-Quote für Daten, die von der {{WebExtAPIRef("storage.session")}} API gespeichert werden, wird jetzt in Firefox Nightly 131 durchgesetzt. Zuvor hatte Firefox diese Quote nicht implementiert. Diese Durchsetzung rollt ab Version 137 auf die Release-Versionen von Firefox aus ([Firefox Bug 1915688](https://bugzil.la/1915688)). Dies ermöglicht es Erweiterungen, die auf das vorherige Verhalten angewiesen sind, eventuelle Probleme zu korrigieren. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt jetzt die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} Eigenschaft. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` auf `-1` gesetzt, um `openerTabId` zu löschen ([Firefox Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 131, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdrücke (?ims-ims:...) Modifikatoren:** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren für reguläre Ausdrücke ermöglichen es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die `microphone` und `camera` [Berechtigungen](/de/docs/Web/API/Permissions_API) können jetzt in der [`Permissions.query()`](/de/docs/Web/API/Permissions/query) Methode verwendet werden, um zu testen, ob der Zugriff auf die entsprechenden Hardwarekomponenten gewährt, verweigert oder noch von der Benutzerzustimmung abhängig ist. ([Firefox Bug 1609427](https://bugzil.la/1609427) und [Firefox Bug 1915222](https://bugzil.la/1915222)).
