---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: e6665b4bf55a22306925c2e5155bac126ed8662a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in Vorbereitung auf die weitere Implementierung von [Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zur Wertanalyse verwendet. Die Anchor Positioning-Funktionen werden schrittweise hinter einer Voreinstellung eingeführt. Weitere Informationen finden Sie unter [Experimentelle Features in Firefox: CSS Anchor Positioning](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox Bug 1909358](https://bugzil.la/1909358) und [Firefox Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchronisierte Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}} und {{jsxref("Iterator.prototype.take()")}}. Diese Hilfsmethoden ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dass Zwischen-`Array`-Objekte erstellt werden müssen. Sie können auch mit sehr großen Datensätzen verwendet werden, bei denen die Erstellung eines Zwischen-`Array` nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss jetzt auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` festgelegt sind, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, wird dieselbe Einschränkung auf Cookies angewendet, die `SameSite` nicht spezifizieren. ([Firefox Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder „partitionierte Cookies“, werden jetzt unterstützt.
  Diese Funktion ermöglicht es Entwicklern, ein Cookie durch das [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers in einen partitionierten Speicher zu integrieren. Wenn es gesetzt ist, haben Cookies einen separaten Speicher für jede oberste Webseite und können nur innerhalb derselben obersten Webseite und ihrer Subdomains gelesen werden, auf denen sie gesetzt wurden. Dies blockiert das Cross-Site-Tracking, ermöglicht jedoch weiterhin legitime Nutzung von Drittanbieter-Cookies, wie das Fortbestehen von eingebetteten Karten oder Chat-Widgets über unterschiedliche Subdomains einer Seite. ([Firefox Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle werden jetzt unterstützt. Diese geben den Winkel zwischen dem Zeiger/Stift und dem Bildschirm (X-Y-Ebene) sowie die Rotation des Stifts über dem Bildschirm relativ zu seiner x-Achse an. ([Firefox Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt, wodurch es Benutzern ermöglicht wird, Links zu spezifischen Textabschnitten auf einer Webseite zu erstellen und diese hervorzuheben. Diese Funktion nutzt eine bestimmte Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert.
  Entwickler können jetzt auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle) nutzen, um die Unterstützung von Textfragmenten zu überprüfen. Zusätzlich kann das {{CSSxRef("::target-text")}} Pseudo-Element verwendet werden, um Text auszuwählen und zu stylen, der mit einem Textfragment-Link ausgewählt wurde. ([Firefox Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wurde aktualisiert, um den Textknoten und den Versatz für eine Caret-Position innerhalb eines Shadow DOM zurückzugeben, vorausgesetzt, dass das Schattenwurzel-Element, das dem Punkt entspricht, der Methode übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte können der Methode über die `shadowRoots` Eigenschaft des neu hinzugefügten `options` Arguments übergeben werden. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Die neue Ausnahme-Referenz mit dem Wert `exnref` kann jetzt verwendet werden, um die [Ausnahmebehandlung](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen zu unterstützen. ([Firefox Bug 1908375](https://bugzil.la/1908375)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Sowohl für WebDriver Classic als auch BiDi werden die Aktionen `keyUp` und `keyDown` keine Mehrfachzeichen für den `value` mehr akzeptieren. ([Firefox Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für die verbleibenden Argumente des `network.continueResponse` Befehls hinzugefügt:
  - Die Argumente für Cookies und Header. ([Firefox Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z. B. 200, 304) und `reasonPhrase` (z. B. "OK", "Nicht modifiziert"). ([Firefox Bug 1913737](https://bugzil.la/1913737)).
- Der Befehl `browsingContext.navigate` wird nun zurückkehren, wenn das `wait` Argument `none` ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox Bug 1763134](https://bugzil.la/1763134)).
- Der Befehl `browsingContext.navigate` wird einen `unknown error` zurückgeben, in allen Fällen, in denen ein Navigationsfehler auftritt, wie es die Spezifikation verlangt. ([Firefox Bug 1905083](https://bugzil.la/1905083)).
- Der Befehl `session.new` wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seine Antwort aufnehmen, wenn sie nicht vom Client als Argument angegeben wurde. ([Firefox Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10 MB-Kontingent für von der {{WebExtAPIRef("storage.session")}} API gespeicherte Daten wird jetzt in Firefox Nightly 131 durchgesetzt. Zuvor hat Firefox dieses Kontingent nicht umgesetzt. Diese Durchsetzung wird ab Version 137 in den Veröffentlichungs-Versionen von Firefox eingeführt ([Firefox Bug 1915688](https://bugzil.la/1915688)). Dies ermöglicht Erweiterungen, die sich auf das vorherige Verhalten verlassen, auftretende Probleme zu beheben. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- Die {{WebExtAPIRef("storage.session")}} API unterstützt jetzt die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die Eigenschaft {{WebExtAPIRef("storage.session.QUOTA_BYTES")}}. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` auf `-1` gesetzt, um `openerTabId` zu löschen ([Firefox Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 131, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Voreinstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck (?ims-ims:...) Modifikatoren:** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Reguläre Ausdruck Modifikatoren erlauben es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die `microphone` und `camera` [Berechtigungen](/de/docs/Web/API/Permissions_API) können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu prüfen, ob der Zugriff auf die entsprechende Hardware gewährt, abgelehnt oder noch die Zustimmung des Benutzers erforderlich ist. ([Firefox Bug 1609427](https://bugzil.la/1609427) und [Firefox Bug 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
