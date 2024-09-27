---
title: Firefox 131 für Entwickler
slug: Mozilla/Firefox/Releases/131
l10n:
  sourceCommit: f03f446e23a3f84a0b06579781c0600cde53ee28
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 131, die Entwickler betreffen. Firefox 131 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [1. Oktober 2024](https://whattrainisitnow.com/release/?version=131) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die CSS-Eigenschaft `inset-area` wurde in Vorbereitung auf die weitere Implementierung der [Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) in {{CSSXRef("position-area")}} umbenannt. Derzeit wird diese Eigenschaft nur intern zur Wertanalyse verwendet. Die Features der Ankerpositionierung werden schrittweise hinter einer Präferenz eingeführt. Weitere Informationen finden Sie unter [Experimentelle Features in Firefox: CSS-Ankerpositionierung](/de/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning). ([Firefox-Bug 1909358](https://bugzil.la/1909358) und [Firefox-Bug 1838746](https://bugzil.la/1838746)).

#### Entfernungen

### JavaScript

- Unterstützung für synchrone Iterator-Helper, einschließlich: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, und {{jsxref("Iterator.prototype.take()")}}. Diese ermöglichen Array-ähnliche Operationen auf Iteratoren, ohne zwischenzeitliche Array-Objekte zu erstellen, und können auch mit sehr großen Datensätzen verwendet werden, bei denen die Erstellung eines zwischenzeitlichen Arrays nicht möglich wäre. Weitere Informationen finden Sie unter [Iterator-Helper](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) in der `Iterator`-Schnittstelle. ([Firefox-Bug 1896390](https://bugzil.la/1896390)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Ein {{httpheader("Set-Cookie")}}-HTTP-Header mit dem Attributwert [`SameSite=None`](/de/docs/Web/HTTP/Headers/Set-Cookie#none) muss nun auch das [`Secure`](/de/docs/Web/HTTP/Headers/Set-Cookie#secure)-Attribut enthalten. Dies stellt sicher, dass Cookies, die mit `SameSite=None` gesetzt sind, nur über HTTPS-Kanäle gesendet werden. Da Firefox einen nicht spezifizierten `SameSite`-Wert als `SameSite=None` interpretiert, haben Cookies, die `SameSite` nicht festlegen, die gleiche Einschränkung. ([Firefox-Bug 1909673](https://bugzil.la/1909673)).
- [Cookies mit unabhängig partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", werden jetzt unterstützt. Dieses Feature ermöglicht es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned)-Directive des {{HTTPHeader("Set-Cookie")}}-HTTP-Headers in partitionierten Speicher aufzunehmen. Wenn gesetzt, haben Cookies einen separaten Speicher für jede Top-Level-Site und können nur innerhalb der gleichen Top-Level-Site, auf der sie gesetzt wurden, und deren Subdomains gelesen werden. Dies blockiert das Tracking über Sites hinweg, während immer noch legitime Verwendungen von Drittanbieter-Cookies wie das Aufrechterhalten des Status von eingebetteten Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg möglich sind. ([Firefox-Bug 1908160](https://bugzil.la/1908160)).

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) Eigenschaften der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle werden unterstützt und geben den Winkel zwischen Zeiger/Stift und dem Bildschirm (X-Y-Ebene) bzw. die Drehung des Stifts über dem Bildschirm relativ zu seiner X-Achse an. ([Firefox-Bug 1656377](https://bugzil.la/1656377)).
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) werden jetzt unterstützt, was es Benutzern ermöglicht, auf spezifische Textstellen in einer Webseite zu verlinken und diese hervorzuheben. Dieses Feature verwendet eine spezielle Syntax im [URL-Fragment](/de/docs/Web/URI/Fragment), die das Ziel basierend auf Mustern im gerenderten Text identifiziert.
  Webentwickler können auch die Existenz der [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective)-Eigenschaft (eine Instanz der [`FragmentDirective`](/de/docs/Web/API/FragmentDirective)-Schnittstelle) verwenden, um die Unterstützung für Textfragmente zu überprüfen, und das {{CSSxRef("::target-text")}}-Pseudoelement verwenden, um Text auszuwählen und zu gestalten, der mit einem Textfragment-Link ausgewählt wurde. ([Firefox-Bug 1914877](https://bugzil.la/1914877))
- Die Methode [`caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wurde so aktualisiert, dass sie den Textknoten und Offset für eine Caret-Position innerhalb eines Shadow DOM zurückgeben kann, vorausgesetzt, dass dem Methodensaufruf das entsprechende `shadowRoot` übergeben wurde. [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte können der Methode über die `shadowRoots`-Eigenschaft des neu hinzugefügten `options`-Arguments übergeben werden. ([Firefox-Bug 1914596](https://bugzil.la/1914596)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Für sowohl WebDriver Classic als auch BiDi akzeptieren die `keyUp`- und `keyDown`-Aktionen keine multiplen Zeichen mehr für den `value` ([Firefox-Bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Unterstützung für verbleibende Argumente des `network.continueResponse`-Befehls hinzugefügt:
  - Die Argumente für Cookies und Header ([Firefox-Bug 1853887](https://bugzil.la/1853887)).
  - Die Argumente `statusCode` (z.B. 200, 304) und `reasonPhrase` (z.B. "OK", "Not modified") ([Firefox-Bug 1913737](https://bugzil.la/1913737)).
- Der `browsingContext.navigate`-Befehl gibt jetzt zurück, wenn das `wait`-Argument `none` ist und eine `beforeunload`-Eingabeaufforderung ausgelöst wird ([Firefox-Bug 1763134](https://bugzil.la/1763134)).
- Der `browsingContext.navigate`-Befehl wird nun in allen Fällen, in denen ein Navigationsfehler auftritt, einen `unknown error` zurückgeben, wie es die Spezifikation fordert ([Firefox-Bug 1905083](https://bugzil.la/1905083)).
- Der `session.new`-Befehl wird die Fähigkeit `unhandledPromptBehavior` nicht mehr in seiner Antwort einschließen, wenn sie nicht als Argument vom Client angegeben wurde ([Firefox-Bug 1909455](https://bugzil.la/1909455)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("tabs.onUpdated")}} wird jetzt ausgelöst, wenn `openerTabId` durch `tabs.update()` geändert wird ([Firefox-Bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} akzeptiert jetzt `openerTabId` auf `-1` gesetzt, um `openerTabId` zurückzusetzen ([Firefox-Bug 1409262](https://bugzil.la/1409262)).

### Entfernungen

### Sonstiges

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 131 enthalten, aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie auf der `about:config`-Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Reguläre Ausdrucksmodifikatoren (?ims-ims:...):** `javascript.options.experimental.regexp_modifiers`

  Die [(?ims-ims:...)](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Modifikatoren für reguläre Ausdrücke ermöglichen es, Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam werden zu lassen. ([Firefox-Bug 1899813](https://bugzil.la/1899813)).

- **Berechtigungen für Mikrofon und Kamera:** `permissions.media.query.enabled`

  Die Berechtigungen für `microphone` und `camera` [permissions](/de/docs/Web/API/Permissions_API) können nun in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechenden Hardware gewährt, verweigert wurde oder noch eine Benutzergenehmigung benötigt wird ([Firefox-Bug 1609427](https://bugzil.la/1609427), [Firefox-Bug 1915222](https://bugzil.la/1915222)).

## Ältere Versionen

{{Firefox_for_developers}}
