---
title: Firefox 121 für Entwickler
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>`-Elementen wird jetzt unterstützt. Dies ermöglicht es Entwicklern zu kennzeichnen, dass bestimmte `<iframe>`-Elemente nur geladen werden sollen, wenn (und falls) sie sichtbar werden. Dies kann die anfängliche Ladezeit durch Reduzierung der Ressourcen, die beim Laden der Seite abgerufen werden müssen, beschleunigen (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht abgerufen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-Attribut am [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element angegeben werden oder in JavaScript mit [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading).
  ([Firefox-Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde aktualisiert, um die Werte `balance` und `stable` zu unterstützen. Der `balance`-Wert wird für kurze Inhaltsblöcke wie Überschriften verwendet und sorgt dafür, dass der Inhalt ausgeglichen und leicht lesbar ist, wenn er über mehrere Zeilen verteilt ist. Der `stable`-Wert stellt sicher, dass editierbarer Inhalt während der Bearbeitung nicht neu umbrochen wird ([Firefox-Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, allgemein als _Eltern-Selektor_ bezeichnet, wird nun unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element basierend auf verwandte Elemente anzuwenden, z.B. `li:has(ul)` wird eine Liste markieren, die eine Unterliste enthält, oder `h1:has(+ p)` wird eine Überschrift mit einem direkt folgenden Absatz markieren.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt nun die [`each-line`](/de/docs/Web/CSS/text-indent#each-line)- und [`hanging`](/de/docs/Web/CSS/text-indent#hanging)-Eigenschaftswerte ([Firefox-Bug 784648](https://bugzil.la/784648)), was es Entwicklern erleichtert, bestimmte Einzugsstile anzugeben. Darüber hinaus können Entwickler jetzt mehrere `text-indent`-Eigenschaftswerte für mehr Kreativität kombinieren, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die {{jsxref("Promise.withResolvers()")}}-statische Methode wird jetzt unterstützt. Diese Methode gibt die `resolve`- und `reject`-Callback-Funktionen im gleichen Gültigkeitsbereich wie das zurückgegebene {{jsxref("Promise")}}, was es ermöglicht, den Promise nach seiner Konstruktion zu lösen oder abzulehnen ([Firefox-Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:
  - Jahr > 9999 für das `YYYY-MMM-DD`-Format (z.B. `19999-Jan-01`) ([Firefox-Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox-Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox-Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die abgelehnt wurden, wie:
    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder überhaupt ein Wochentag sein; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox-Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:
  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen, wie ein ISO-Datum `YYYY-MM-DD` ([Firefox-Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Stellen abgeschnitten, anstatt gerundet zu werden ([Firefox-Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt, was es ermöglicht, die relative Priorität ausgehender [WebTransport API](/de/docs/Web/API/WebTransport_API) _bidirektionaler_ Streams nach der Erstellung zu lesen und zu ändern. Beachten Sie, dass dies nicht verwendet werden kann, um die Priorität von unidirektionalen Streams zu ändern, da Firefox diese als [`WritableStream`](/de/docs/Web/API/WritableStream) anstelle von [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen finden Sie im [Firefox-Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)-Elemente auf Android ([Firefox-Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt Tail-Call-Optimierung über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Anweisung. Dies verbessert die Leistung, reduziert den Stack-Speicherverbrauch und erhöht die Kompatibilität mit Programmiersprachen, die Tail-Calls verwenden. ([Firefox-Bug 1858855](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox-Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation`-Parameter für die [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction)- und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate)-Befehle wurde hinzugefügt, was die Ausführung von JavaScript beim Emulieren der Benutzeraktion erlaubt. ([Firefox-Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue`-Feld für das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened)-Ereignis wurde hinzugefügt, das es Benutzern ermöglicht, den Standardwert von Eingabeaufforderungen abzurufen ([Firefox-Bug 1851761](https://bugzil.la/1851761)).
- Der `viewportOptions`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde in `boxOptions` umbenannt ([Firefox-Bug 1859258](https://bugzil.la/1859258)).
- Der `scrollIntoView`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde entfernt, zugunsten des unten genannten `origin`-Parameters ([Firefox-Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde hinzugefügt, der es ermöglicht, den Ursprung und die Grenzen des Screenshots zu definieren. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox-Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID des `Window`-Objekts gesetzt ist, die auch mit Marionette ausgetauscht werden kann, um spezifische Fenster und Frames zu referenzieren ([Firefox-Bug 1841049](https://bugzil.la/1841049)).
- Es wurde ein Fehler behoben, bei dem die Serialisierung eines in einer Datenstruktur (Array, Map, etc.) verschachtelten Nodes fehlschlug ([Firefox-Bug 1861000](https://bugzil.la/1861000)).
- Es wurde ein Fehler behoben, bei dem der [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)-Befehl eine falsche Navigations-ID zurückgeben konnte ([Firefox-Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für das Serialisieren und Deserialisieren von `Window`- und `Frame`-Objekten wurde hinzugefügt ([Firefox-Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 121 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der [Seite für experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudo-Klasse für benutzerdefinierte Elementzustände: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft als ein [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) anzeigen. Eine CSS-Pseudo-Klasse für benutzerdefinierte Zustände wie `:--some-state` kann den Zustand dieses Elements zuordnen. ([Firefox-Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Select-Elemente: `dom.select.showPicker.enabled`
  - : Die [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)-Methode startet programmgesteuert den Browserauswahldialog für ein {{HTMLElement("select")}}-Element, das durch Benutzerinteraktion ausgelöst wird. ([Firefox-Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, der dazu führte, dass Hintergrundseiten nicht starteten, wenn ein `manifest.json` `background`-Schlüssel `service_worker` und `scripts`-Deklarationen enthält ([Firefox-Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Zufälligerweise ignoriert eine Änderung in Chrome 121 die `scripts`-Eigenschaft, wenn sie zusammen mit der `service_worker`-Eigenschaft angegeben wird. Zuvor weigerte sich Chrome, Erweiterungen zu laden, die beide Eigenschaften enthalten ([Chromium-Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browser-Unterstützung des `background`-Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Ältere Versionen

{{Firefox_for_developers}}
