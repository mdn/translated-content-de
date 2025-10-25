---
title: Firefox 121 Versionshinweise für Entwickler
short-title: Firefox 121
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: b63437e072cf5eac5d56e54454116bcc41b5c28b
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>`-Elementen wird jetzt unterstützt und ermöglicht es Entwicklern, darauf hinzuweisen, dass bestimmte `<iframe>`-Elemente nur geladen werden sollten, wenn (und falls) sie sichtbar werden. Dies kann die initiale Ladezeit beschleunigen, indem die Ressourcen reduziert werden, die beim Laden der Seite abgerufen werden müssen (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht abgerufen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-Attribut auf dem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element oder in JavaScript mit [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading) angegeben werden.
  ([Firefox-Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung für die Werte `balance` und `stable` aktualisiert. Der Wert `balance` wird für kurze Inhaltsblöcke, wie Überschriften, verwendet und stellt sicher, dass der Inhalt bei mehreren Zeilen ausbalanciert und leicht lesbar ist. Der Wert `stable` sorgt dafür, dass bearbeitbarer Inhalt nicht umbricht, während der Benutzer diesen bearbeitet ([Firefox-Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, allgemein als _Parent-Selektor_ bezeichnet, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element basierend auf verwandten Elementen anzuwenden, z.B. `li:has(ul)` wird eine Liste mit einer Unterliste erkennen oder `h1:has(+ p)` wird eine Überschrift mit einem direkt dahinterstehenden Absatz erkennen.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt jetzt die [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) Eigenschaftswerte ([Firefox-Bug 784648](https://bugzil.la/784648)), was es Entwicklern erleichtert, bestimmte Texteinrückungsstile anzugeben. Außerdem können Entwickler jetzt mehrere `text-indent`-Eigenschaftswerte kombinieren, um kreativer zu sein, z.B.: `text-indent: 3em hanging each-line`.

### JavaScript

- Die {{jsxref("Promise.withResolvers()")}}-statische Methode wird jetzt unterstützt. Diese gibt die `resolve`- und `reject`-Callback-Funktionen im selben Bereich wie das zurückgegebene {{jsxref("Promise")}}-Objekt frei, sodass der Code, der das Promise auflöst oder ablehnt, nach dessen Erstellung definiert werden kann ([Firefox-Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:
  - Jahr > 9999 für das `YYYY-MMM-DD` Format (z.B. `19999-Jan-01`) ([Firefox-Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox-Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox-Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die zuvor abgelehnt wurden, wie:
    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder überhaupt ein Wochentag; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox-Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:
  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen, wie es ein ISO-Datum `YYYY-MM-DD` wäre ([Firefox-Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Stellen abgeschnitten, anstatt gerundet zu werden ([Firefox-Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt und ermöglicht es, die relative Priorität ausgehender [WebTransport API](/de/docs/Web/API/WebTransport_API) _bidirektionaler_ Streams zu lesen und zu ändern, nachdem der Stream erstellt wurde. Beachten Sie, dass dies nicht benutzt werden kann, um die Priorität unidirektionaler Streams zu ändern, da Firefox diese als [`WritableStream`](/de/docs/Web/API/WritableStream) anstatt [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen finden Sie im [Firefox-Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month) Elemente auf Android ([Firefox-Bug 1853797](https://bugzil.la/1853797)).

### WebAssembly

- WebAssembly unterstützt jetzt Tail Call Optimization über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Instruktion. Dies verbessert die Leistung, reduziert den Stapelspeicherverbrauch und verbessert die Kompatibilität mit Programmiersprachen, die Tail Calls verwenden. ([Firefox-Bug 1846789](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox-Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den Parameter `userActivation` für die [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) Befehle wurde hinzugefügt, was die Auswertung von JavaScript unter Emulation der Benutzeraktion ermöglicht ([Firefox-Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das Feld `defaultValue` für das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) Ereignis wurde hinzugefügt, das es Benutzern ermöglicht, den Standardwert von Aufforderungen abzurufen ([Firefox-Bug 1851761](https://bugzil.la/1851761)).
- Der Parameter `viewportOptions` für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) Befehl wurde in `boxOptions` umbenannt ([Firefox-Bug 1859258](https://bugzil.la/1859258)).
- Der Parameter `scrollIntoView` für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) Befehl wurde entfernt, zugunsten des darunter befindlichen Parameters `origin` ([Firefox-Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin` Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) Befehl wurde hinzugefügt, der es ermöglicht, den Ursprung und die Grenzen des Screenshots zu definieren. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox-Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID für das `Window`-Objekt gesetzt ist, welche auch mit Marionette ausgetauscht werden kann, um spezifische Fenster und Frames zu referenzieren ([Firefox-Bug 1841049](https://bugzil.la/1841049)).
- Es wurde ein Fehler behoben, bei dem die Serialisierung eines Knotens, der in einer Datenstruktur (Array, Map, etc.) verschachtelt ist, fehlschlug ([Firefox-Bug 1861000](https://bugzil.la/1861000)).
- Es wurde ein Fehler behoben, bei dem der [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) Befehl eine falsche Navigations-ID zurückgeben konnte ([Firefox-Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für die Serialisierung und Deserialisierung von `Window` und `Frame` Objekten wurde hinzugefügt ([Firefox-Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 121 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Voreinstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudo-Klasse für benutzerdefinierte Elementzustände: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) offenlegen. Eine CSS-Pseudoklasse für benutzerdefinierte Zustände wie `:--some-state` kann den Zustand dieses Elements erkennen. ([Firefox-Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Auswahlelemente: `dom.select.showPicker.enabled`
  - : Die [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)-Methode startet programmgesteuert den Browser-Picker für ein {{HTMLElement("select")}}-Element, ausgelöst durch Benutzerinteraktion. ([Firefox-Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Es wurde ein Fehler behoben, der dazu führte, dass Hintergrundseiten nicht starteten, wenn ein `background`-Schlüssel in der manifest.json die Angaben `service_worker` und `scripts` enthielt ([Firefox-Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Übrigens führt eine Änderung in Chrome 121 dazu, dass die `scripts`-Eigenschaft ignoriert wird, wenn sie zusammen mit der `service_worker`-Eigenschaft angegeben ist. Zuvor weigerte sich Chrome, Erweiterungen zu laden, die beide Eigenschaften enthalten ([Chromium-Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browser-Unterstützung des `background` Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).
