---
title: Firefox 121 für Entwickler
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Unterstützt wird jetzt das [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>`-Elementen, wodurch Entwickler andeuten können, dass bestimmte `<iframe>`-Elemente nur geladen werden sollten, wenn (und falls) sie sichtbar werden. Dies kann die anfängliche Ladezeit beschleunigen, indem die Ressourcen reduziert werden, die beim Laden der Seite abgerufen werden müssen (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht abgerufen werden). Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-Attribut auf dem [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element oder in JavaScript mit [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading) gegeben werden. ([Firefox Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung für die Werte `balance` und `stable` aktualisiert. Der Wert `balance` wird für kurze Inhaltsblöcke wie Überschriften verwendet und stellt sicher, dass der Inhalt ausgeglichen und leicht lesbar ist, wenn er über mehrere Zeilen verteilt ist. Der Wert `stable` stellt sicher, dass bearbeitbare Inhalte beim Bearbeiten nicht umbrochen werden ([Firefox Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, oft als _Parent-Selektor_ bezeichnet, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element basierend auf verwandten Elementen anzuwenden, z.B. `li:has(ul)` passt auf eine Liste, die eine Unterliste enthält, oder `h1:has(+ p)` passt auf eine Überschrift mit einem direkt darauf folgenden Absatz.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt jetzt die Werte [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) ([Firefox Bug 784648](https://bugzil.la/784648)), wodurch Entwickler bestimmte Texteinzugsstile leichter festlegen können. Darüber hinaus können Entwickler jetzt mehrere Werte für `text-indent` kombinieren, um mehr Kreativität zu ermöglichen, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die statische Methode {{jsxref("Promise.withResolvers()")}} wird jetzt unterstützt. Sie bietet Zugriff auf die `resolve` und `reject` Rückruffunktionen im selben Geltungsbereich wie das zurückgegebene {{jsxref("Promise")}}, sodass der Code, der das Promise auflöst oder ablehnt, nach dessen Konstruktion definiert werden kann ([Firefox Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert nun mehrere zusätzliche Datumsformate:

  - Jahr > 9999 für das `YYYY-MMM-DD`-Format (z.B. `19999-Jan-01`) ([Firefox Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die bisher abgelehnt wurden, wie:

    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder überhaupt ein Wochentag; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:

  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen, wie es bei einem ISO-Datum `YYYY-MM-DD` der Fall wäre ([Firefox Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Ziffern abgeschnitten, anstatt gerundet zu werden ([Firefox Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt, wodurch die relative Priorität von ausgehenden [WebTransport API](/de/docs/Web/API/WebTransport_API) _bidirektionalen_ Streams nach der Erstellung des Streams gelesen und geändert werden kann. Beachten Sie, dass dies nicht verwendet werden kann, um die Priorität von unidirektionalen Streams zu ändern, da Firefox diese als [`WritableStream`](/de/docs/Web/API/WritableStream) anstelle von [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen finden Sie unter [Firefox Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)-Elemente auf Android ([Firefox Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt Tail Call Optimierung über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Anweisung. Dies verbessert die Leistung, reduziert den Stapelspeicherplatz und verbessert die Kompatibilität mit Programmiersprachen, die Tail Calls verwenden. ([Firefox Bug 1858855](https://bugzil.la/1846789)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed)-Ereignis wurde hinzugefügt, welches ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation`-Parameter für die [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate)-Befehle wurde hinzugefügt, welche die Ausführung von JavaScript bei Emulation der Benutzeraktion erlauben. ([Firefox Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue`-Feld für das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened)-Ereignis wurde hinzugefügt, welches es Benutzern ermöglicht, den Standardwert von Eingabeaufforderungen abzurufen ([Firefox Bug 1851761](https://bugzil.la/1851761)).
- Der Parameter `viewportOptions` für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde in `boxOptions` umbenannt ([Firefox Bug 1859258](https://bugzil.la/1859258)).
- Der `scrollIntoView`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde zugunsten des untenstehenden `origin`-Parameters entfernt ([Firefox Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde hinzugefügt, welcher die Definition des Ursprungs und der Grenzen des Screenshots erlaubt. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID für das `Window`-Objekt gesetzt ist, welches auch mit Marionette ausgetauscht werden kann, um spezifische Fenster und Frames zu referenzieren ([Firefox Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem die Serialisierung eines innerhalb einer Datenstruktur (Array, Map etc.) verschachtelten Knotens fehlschlug ([Firefox Bug 1861000](https://bugzil.la/1861000)).
- Ein Fehler wurde behoben, bei dem der [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)-Befehl eine falsche Navigations-ID zurückgeben konnte ([Firefox Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für die Serialisierung und Deserialisierung von `Window` und `Frame` Objekten wurde hinzugefügt ([Firefox Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 121 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudo-Klasse für den benutzerdefinierten Elementstatus: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Status über die [`states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) offenlegen. Eine CSS-Pseudo-Klasse für benutzerdefinierte Zustände wie `:--some-state` kann den Status dieses Elements anpassen. ([Firefox Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Select-Elemente: `dom.select.showPicker.enabled`
  - : Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) startet programmgesteuert den Browser-Auswahldialog für ein {{HTMLElement("select")}}-Element, das durch Benutzerinteraktion ausgelöst wird. ([Firefox Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, bei dem Hintergrundseiten nicht gestartet wurden, wenn ein `background`-Schlüssel in der manifest.json sowohl `service_worker` als auch `scripts`-Deklarationen enthielt ([Firefox Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Zufälligerweise wurde in Chrome 121 die `scripts`-Eigenschaft ignoriert, wenn sie zusammen mit der `service_worker`-Eigenschaft angegeben wird. Früher lud Chrome Erweiterungen nicht, die beide Eigenschaften enthielten ([Chromium Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browser-Support für den `background`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Ältere Versionen

{{Firefox_for_developers}}
