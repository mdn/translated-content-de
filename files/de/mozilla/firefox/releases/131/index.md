---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 wurde am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in {{CSSXRef("position-area")}} umbenannt als Vorbereitung für die weitere Implementierung der [Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning). Derzeit wird diese Eigenschaft nur intern zur Wertanalyse verwendet. Die Funktionen zur Anker-Positionierung werden schrittweise hinter einem Pref herausgegeben. Weitere Informationen finden Sie unter [Experimentelle Funktionen in Firefox: CSS Anchor Positioning](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox Bug 1909358](https://bugzil.la/1909358) und [Firefox Bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Unterstützung für synchrone Iterator-Hilfsmethoden wurde hinzugefügt, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, und {{jsxref("Iterator.prototype.take()")}}. Diese Hilfsfunktionen ermöglichen `Array`-ähnliche Operationen auf Iteratoren, ohne dass Zwischenergebnisse als `Array`-Objekte erstellt werden müssen. Sie können auch mit sehr großen Datenmengen verwendet werden, bei denen das Erstellen eines Zwischenergebnis-Arrays nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in der `Iterator`-Schnittstelle. ([Firefox Bug 1896390](https://bugzil.la/1896390)).

### HTTP

- Ein {{httpheader("Set-Cookie")}} HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss nun auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure) Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt wurden, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, unterliegen Cookies, die `SameSite` nicht spezifizieren, derselben Einschränkung. ([Firefox Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt. Diese Funktion ermöglicht es Entwicklern, ein Cookie in den partitionierten Speicher über die [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned) Direktive des {{HTTPHeader("Set-Cookie")}} HTTP-Headers einzuschließen. Wenn gesetzt, haben Cookies einen separaten Speicher für jede Top-Level-Site und können nur innerhalb derselben Top-Level-Site gelesen werden, auf der sie gesetzt wurden, und deren Subdomains. Dies blockiert das Cross-Site-Tracking, ermöglicht aber dennoch die legitime Nutzung von Drittanbieter-Cookies, wie das Speichern des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg. ([Firefox Bug 1908160](https://bugzil.la/1908160)).

### APIs

- Die Eigenschaften [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle werden jetzt unterstützt. Diese bieten den Winkel zwischen dem Pointer/Stift und dem Bildschirm (X-Y-Ebene) sowie die Drehung des Stifts über dem Bildschirm relativ zu seiner X-Achse. ([Firefox Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) werden jetzt unterstützt, sodass Benutzer auf bestimmte Textabschnitte auf einer Webseite verlinken und diese hervorheben können. Diese Funktion nutzt eine besondere Syntax im [URL-Fragment](/de/docs/Web/URI/Reference/Fragment), um das Ziel basierend auf Mustern im gerenderten Text zu identifizieren. Entwickler können jetzt auch mit Hilfe der Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) Schnittstelle) überprüfen, ob es Unterstützung für Textfragmente gibt. Außerdem kann das {{CSSxRef("::target-text")}} Pseudo-Element verwendet werden, um Text auszuwählen und zu gestalten, der über einen Textfragment-Link ausgewählt wurde. ([Firefox Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document) Schnittstelle wurde aktualisiert, um den Textknoten und den Versatz für eine Cursorposition innerhalb eines Schatten-DOM zurückzugeben, vorausgesetzt, dass die dem Punkt entsprechende Schattenwurzel der Methode übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte können der Methode über die `shadowRoots` Eigenschaft des neu hinzugefügten `options` Arguments übergeben werden. ([Firefox Bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- Der neue Exception-Referenzwert `exnref` kann jetzt zur Unterstützung der [Ausnahmebehandlung](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zwischen WebAssembly und JavaScript in beide Richtungen verwendet werden. ([Firefox Bug 1908375](https://bugzil.la/1908375)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi akzeptieren die Aktionen `keyUp` und `keyDown` keine mehreren Zeichen für den `value` mehr. ([Firefox Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse`-Befehls hinzugefügt:
  - Die Argumente für Cookies und Header. ([Firefox Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Not modified"). ([Firefox Bug 1913737](https://bugzil.la/1913737)).
- Der Befehl `browsingContext.navigate` wird jetzt zurückkehren, wenn das `wait` Argument `none` ist und ein `beforeunload`-Prompt ausgelöst wird. ([Firefox Bug 1763134](https://bugzil.la/1763134)).
- Der Befehl `browsingContext.navigate` wird bei jedem Navigationsfehler einen `unknown error` zurückgeben, wie es die Spezifikation erfordert. ([Firefox Bug 1905083](https://bugzil.la/1905083)).
- Der Befehl `session.new` wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seiner Antwort enthalten, wenn sie nicht vom Client als Argument spezifiziert wurde. ([Firefox Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- Das 10 MB Kontingent für die durch die {{WebExtAPIRef("storage.session")}} API gespeicherten Daten wird jetzt in Firefox Nightly 131 durchgesetzt. Zuvor hat Firefox dieses Kontingent nicht implementiert. Diese Durchsetzung wird ab Version 134 auf Release-Versionen von Firefox ausgerollt ([Firefox Bug 1915688](https://bugzil.la/1915688)). Dadurch können Erweiterungen, die auf das vorherige Verhalten angewiesen sind, eventuelle Probleme beheben. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} unterstützt jetzt die {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API und die {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} Eigenschaft. ([Firefox Bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` gesetzt auf `-1`, um `openerTabId` zu löschen ([Firefox Bug 1409262](https://bugzil.la/1409262)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 131 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Voreinstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdruck (?ims-ims:...) Modifikatoren:** `javascript.options.experimental.regexp_modifiers`.

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Regulärer Ausdruck-Modifikatoren ermöglichen Änderungen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`.

  Die [Berechtigungen](/de/docs/Web/API/Permissions_API) `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch genehmigt werden muss. ([Firefox Bug 1609427](https://bugzil.la/1609427) und [Firefox Bug 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
