---
title: Firefox 121 für Entwickler
short-title: Firefox 121
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>`-Elementen wird nun unterstützt, was es Entwicklern ermöglicht, darauf hinzuweisen, dass bestimmte `<iframe>`-Elemente nur geladen werden sollten, wenn (und falls) sie sichtbar werden. Dies kann die anfängliche Ladezeit verkürzen, indem die Ressourcen reduziert werden, die beim Laden der Seite abgerufen werden müssen (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht geladen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-Attribut am [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element oder in JavaScript mit [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading) bereitgestellt werden.
  ([Firefox Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung für die Werte `balance` und `stable` aktualisiert. Der Wert `balance` wird für kurze Inhaltsblöcke wie Überschriften verwendet und stellt sicher, dass der Inhalt ausgewogen und leicht lesbar ist, wenn er über mehrere Zeilen verteilt wird. Der Wert `stable` stellt sicher, dass sich bearbeitbare Inhalte beim Editieren durch den Benutzer nicht verschieben ([Firefox Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, allgemein als _Parent-Selektor_ bezeichnet, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element basierend auf verwandten Elementen anzuwenden, z.B. `li:has(ul)` wird eine Liste markieren, die eine Unterliste enthält, oder `h1:has(+ p)` wird eine Überschrift markieren, auf die direkt ein Absatz folgt.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt jetzt die Werte [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) ([Firefox Bug 784648](https://bugzil.la/784648)), was es Entwicklern erleichtert, bestimmte Text-Einrückungsstile festzulegen. Darüber hinaus können Entwickler jetzt mehrere `text-indent`-Eigenschaftswerte für mehr Kreativität kombinieren, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die statische Methode {{jsxref("Promise.withResolvers()")}} wird jetzt unterstützt. Diese stellt die `resolve`- und `reject`-Callback-Funktionen im gleichen Gültigkeitsbereich wie das zurückgegebene {{jsxref("Promise")}} bereit, sodass Code, der das Versprechen erfüllt oder ablehnt, nach seiner Konstruktion definiert werden kann ([Firefox Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:
  - Jahr > 9999 für das `YYYY-MMM-DD`-Format (z.B. `19999-Jan-01`) ([Firefox Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die zuvor abgelehnt wurden, wie:
    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder überhaupt ein Wochentag sein; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:
  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen wie ein ISO-Datum `YYYY-MM-DD` ([Firefox Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Ziffern abgeschnitten, anstatt gerundet zu werden ([Firefox Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt, sodass die relative Priorität ausgehender _bidirektionaler_ Streams der [WebTransport-API](/de/docs/Web/API/WebTransport_API) nach dem Erstellen des Streams gelesen und geändert werden kann. Beachten Sie, dass dies nicht verwendet werden kann, um die Priorität unidirektionaler Streams zu ändern, da Firefox sie als [`WritableStream`](/de/docs/Web/API/WritableStream) anstelle von [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen finden Sie unter [Firefox Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)-Elemente auf Android ([Firefox Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt Tail-Call-Optimierung über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Anweisung. Dies verbessert die Leistung, reduziert den Stapelspeicherplatz und erhöht die Kompatibilität mit Programmiersprachen, die Tail-Calls verwenden. ([Firefox Bug 1858855](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation`-Parameter für die Befehle [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) wurde hinzugefügt, was die Ausführung von JavaScript bei Emulation der Benutzerinteraktion erlaubt ([Firefox Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue`-Feld für das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened)-Ereignis wurde hinzugefügt, was Benutzern ermöglicht, den Standardwert von Eingabeaufforderungen abzurufen ([Firefox Bug 1851761](https://bugzil.la/1851761)).
- Der Parameter `viewportOptions` für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde in `boxOptions` umbenannt ([Firefox Bug 1859258](https://bugzil.la/1859258)).
- Der Parameter `scrollIntoView` für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde entfernt zugunsten des unten stehenden `origin`-Parameters ([Firefox Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin`-Parameter für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde hinzugefügt, welcher die Definition des Ursprungs und der Begrenzungen des Screenshots erlaubt. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID für das `Window`-Objekt gesetzt ist, welche auch mit Marionette ausgetauscht werden kann, um spezifische Fenster und Frames zu referenzieren ([Firefox Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem die Serialisierung eines Knotens, der in einer Datenstruktur (Array, Map usw.) verschachtelt ist, fehlschlug ([Firefox Bug 1861000](https://bugzil.la/1861000)).
- Ein Fehler wurde behoben, bei dem der Befehl [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) eine falsche Navigations-ID zurückgeben konnte ([Firefox Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für das Serialisieren und Deserialisieren von `Window`- und `Frame`-Objekten wurde hinzugefügt ([Firefox Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 121, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- Custom Element State Pseudo-Klasse: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) anzeigen. Eine CSS-Custom-Status-Pseudoklasse wie `:--some-state` kann dem Zustand des Elements entsprechen. ([Firefox Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Auswahlelemente: `dom.select.showPicker.enabled`
  - : Die [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)-Methode öffnet programmgesteuert die Browser-Auswahl für ein {{HTMLElement("select")}}-Element, ausgelöst durch Benutzerinteraktion. ([Firefox Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, bei dem Hintergrundseiten nicht gestartet wurden, wenn ein manifest.json-`background`-Schlüssel `service_worker`- und `scripts`-Deklarationen enthält ([Firefox Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Zufälligerweise ignoriert eine Änderung in Chrome 121 die `scripts`-Eigenschaft, wenn sie zusammen mit der `service_worker`-Eigenschaft angegeben ist. Zuvor weigerte sich Chrome, Erweiterungen zu laden, die beide Eigenschaften enthielten ([Chromium-Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browser-Unterstützung des `background`-Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).
