---
title: Firefox 121 für Entwickler
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>` Elementen wird jetzt unterstützt und ermöglicht es Entwicklern, Hinweise zu geben, dass bestimmte `<iframe>`-Elemente nur geladen werden sollten, wenn sie sichtbar werden. Dies kann die anfängliche Ladezeit beschleunigen, indem die benötigten Ressourcen beim Seitenladen reduziert werden (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht geladen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Element/iframe#loading) Attribut im [`<iframe>`](/de/docs/Web/HTML/Element/iframe) Element oder in JavaScript mittels [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading) bereitgestellt werden.
  ([Firefox-Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}} Eigenschaft wurde aktualisiert und unterstützt nun die Werte `balance` und `stable`. Der `balance` Wert wird für kurze Inhaltsblöcke, wie Überschriften, verwendet und stellt sicher, dass der Inhalt ausgewogen und leicht lesbar ist, wenn er auf mehrere Zeilen verteilt wird. Der `stable` Wert stellt sicher, dass bearbeitbarer Inhalt während der Bearbeitung durch den Benutzer nicht umbrochen wird ([Firefox-Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}} Selektor, häufig als _Parent-Selektor_ bezeichnet, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element basierend auf verwandten Elementen anzuwenden, z.B. `li:has(ul)` wird eine Liste erfassen, die eine Unterliste enthält, oder `h1:has(+ p)` wird eine Überschrift erfassen, nach der direkt ein Absatz folgt.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent) CSS-Eigenschaft unterstützt nun die Werte [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) ([Firefox-Bug 784648](https://bugzil.la/784648)), was es Entwicklern erleichtert, bestimmte Text-Einrückungsstile zu spezifizieren. Zusätzlich können Entwickler jetzt mehrere `text-indent` Eigenschaftswerte kombinieren, um kreativer zu sein, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die {{jsxref("Promise.withResolvers()")}} statische Methode wird jetzt unterstützt. Diese stellt die `resolve` und `reject` Rückruffunktionen im selben Gültigkeitsbereich wie das zurückgegebene {{jsxref("Promise")}} bereit, sodass Code, der das Promise auflöst oder ablehnt, nach seiner Konstruktion definiert werden kann ([Firefox-Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Jahr > 9999 für das Format `YYYY-MMM-DD` (z.B. `19999-Jan-01`) ([Firefox-Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox-Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datenformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox-Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die bisher abgelehnt wurden, wie:

    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder ein Wochentag sein; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox-Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}} Korrekturen:

  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht länger als GMT angenommen, wie es bei einem ISO-Datum `YYYY-MM-DD` der Fall wäre ([Firefox-Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Ziffern abgeschnitten, anstatt gerundet zu werden ([Firefox-Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder) Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) Schnittstelle wird jetzt unterstützt, wodurch die relative Priorität von ausgehenden [WebTransport API](/de/docs/Web/API/WebTransport_API) _bidirektionalen_ Streams gelesen und geändert werden kann, nachdem der Stream erstellt wurde. Beachten Sie, dass dies nicht zur Änderung der Priorität unidirektionaler Streams verwendet werden kann, da Firefox diese als [`WritableStream`](/de/docs/Web/API/WritableStream) statt als [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen finden Sie in [Firefox-Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Element/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month) Elemente unter Android ([Firefox-Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt Tail-Call-Optimierung über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call) Anweisung. Dies verbessert die Leistung, reduziert den Stapelspeicherbedarf und verbessert die Kompatibilität mit Programmiersprachen, die Tail-Calls nutzen. ([Firefox-Bug 1858855](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox-Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation` Parameter für die [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) Befehle wurde hinzugefügt, wodurch die Bewertung von JavaScript unter Emulation der Benutzeraktion ermöglicht wird. ([Firefox-Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue` Feld für das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) Ereignis wurde hinzugefügt, das es Benutzern ermöglicht, den Standardwert von Eingabeaufforderungen abzurufen ([Firefox-Bug 1851761](https://bugzil.la/1851761)).
- Der `viewportOptions` Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) Befehl wurde in `boxOptions` umbenannt ([Firefox-Bug 1859258](https://bugzil.la/1859258)).
- Der `scrollIntoView` Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) Befehl wurde entfernt, zugunsten des unten angegebenen Parameters `origin` ([Firefox-Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin` Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) Befehl wurde hinzugefügt, der es ermöglicht, den Ursprung und die Grenzen des Screenshots zu definieren. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox-Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window` Objekten enthält der serialisierte Wert jetzt eine `context` Eigenschaft, die auf die Kontext-ID für das `Window` Objekt gesetzt ist, die auch mit Marionette ausgetauscht werden kann, um spezifische Fenster und Frames zu referenzieren ([Firefox-Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem die Serialisierung eines in einer Datenstruktur (Array, Map, etc.) verschachtelten Node fehlschlug ([Firefox-Bug 1861000](https://bugzil.la/1861000)).
- Ein Fehler wurde behoben, bei dem der [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) Befehl eine falsche Navigations-ID zurückgeben konnte ([Firefox-Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für die Serialisierung und Deserialisierung von `Window` und `Frame` Objekten wurde hinzugefügt ([Firefox-Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 121 ausgeliefert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudo-Klasse für benutzerdefinierten Elementzustand: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) darstellen. Eine CSS-Benutzerzustand-Pseudo-Klasse wie `:--some-state` kann den Zustand dieses Elements erfassen. ([Firefox-Bug 1861466](https://bugzil.la/1861466))
- `showPicker()` Methode für HTML-Auswahlelemente: `dom.select.showPicker.enabled`
  - : Die [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) Methode startet programmgesteuert den Browser-Auswahldialog für ein {{HTMLElement("select")}} Element, ausgelöst durch Benutzerinteraktion. ([Firefox-Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, der dazu führte, dass Hintergrundseiten nicht gestartet wurden, wenn ein `background` Schlüssel in der manifest.json die Deklarationen `service_worker` und `scripts` enthält ([Firefox-Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Nebenbei bemerkt sieht eine Änderung in Chrome 121 vor, dass die `scripts` Eigenschaft ignoriert wird, wenn sie zusammen mit der `service_worker` Eigenschaft angegeben wird. Bisher weigerte sich Chrome, Erweiterungen zu laden, die beide Eigenschaften enthalten ([Chromium-Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browserunterstützung des `background` Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Ältere Versionen

{{Firefox_for_developers}}
