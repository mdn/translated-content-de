---
title: Firefox 121 Versionshinweise für Entwickler
short-title: Firefox 121
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>`-Elementen wird jetzt unterstützt, sodass Entwickler darauf hinweisen können, dass bestimmte `<iframe>`-Elemente nur geladen werden sollten, wenn (und falls) sie sichtbar werden. Dies kann die anfängliche Ladezeit beschleunigen, indem die Ressourcen reduziert werden, die beim Laden der Seite abgerufen werden müssen (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht abgerufen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-Attribut des [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Elements oder in JavaScript mit [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading) bereitgestellt werden.
  ([Firefox-Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung für die Werte `balance` und `stable` aktualisiert. Der Wert `balance` wird für kurze Inhaltsblöcke wie Überschriften verwendet und sorgt dafür, dass der Inhalt ausgeglichen und leicht lesbar ist, wenn er über mehrere Zeilen verteilt ist. Der Wert `stable` sorgt dafür, dass editierbarer Inhalt während der Bearbeitung durch den Benutzer nicht umbricht ([Firefox-Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, gemeinhin als _Elternselektor_ bezeichnet, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element anzuwenden, basierend auf verwandten Elementen, z. B. wird `li:has(ul)` eine Liste markieren, die eine Unterliste enthält, oder `h1:has(+ p)` wird eine Überschrift mit einem darauf folgenden Absatz markieren.
- Die CSS-Eigenschaft [`text-indent`](/de/docs/Web/CSS/Reference/Properties/text-indent) unterstützt jetzt die Eigenschaftswerte [`each-line`](/de/docs/Web/CSS/Reference/Properties/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/Reference/Properties/text-indent#hanging) ([Firefox-Bug 784648](https://bugzil.la/784648)), was es Entwicklern einfacher macht, bestimmte Texteinzugsstile festzulegen. Darüber hinaus können Entwickler jetzt mehrere `text-indent`-Eigenschaftswerte für mehr Kreativität kombinieren, z. B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die {{jsxref("Promise.withResolvers()")}} statische Methode wird jetzt unterstützt. Dies ermöglicht den Zugriff auf die `resolve` und `reject` Rückruffunktionen im gleichen Bereich wie das zurückgegebene {{jsxref("Promise")}}, wodurch Code, der das Versprechen auflöst oder ablehnt, nach seiner Erstellung definiert werden kann ([Firefox-Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:
  - Jahr > 9999 für das `YYYY-MMM-DD`-Format (z. B. `19999-Jan-01`) ([Firefox-Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z. B. `Jan-01-1970`) ([Firefox-Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z. B. `Jan 1 1970 10:00:00.050`) ([Firefox-Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die bisher abgelehnt wurden, wie:
    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder überhaupt ein Wochentag sein; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox-Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:
  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen, wie es bei einem ISO-Datum `YYYY-MM-DD` der Fall wäre ([Firefox-Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Ziffern abgeschnitten, anstatt gerundet zu werden ([Firefox-Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt, was es ermöglicht, die relative Priorität ausgehender _bidirektionaler_ Streams der [WebTransport API](/de/docs/Web/API/WebTransport_API) nach Erstellung des Streams zu lesen und zu ändern. Beachten Sie, dass dies nicht verwendet werden kann, um die Priorität unidirectional Streams zu ändern, da Firefox sie als [`WritableStream`](/de/docs/Web/API/WritableStream) anstelle von [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen finden Sie unter [Firefox-Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)-Elemente auf Android ([Firefox-Bug 1853797](https://bugzil.la/1853797)).

### WebAssembly

- WebAssembly unterstützt jetzt Tail-Call-Optimierung über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call) Anweisung. Dies verbessert die Leistung, reduziert die Stapelspeichernutzung und erhöht die Kompatibilität mit Programmiersprachen, die Tail-Calls verwenden. ([Firefox-Bug 1846789](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox-Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation`-Parameter für die [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) Befehle hinzugefügt, die die Bewertung von JavaScript beim Emulieren der Benutzeraktion ermöglichen. ([Firefox-Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue`-Feld für das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) Ereignis hinzugefügt, das es Benutzern ermöglicht, den Standardwert von Eingabeaufforderungen abzurufen ([Firefox-Bug 1851761](https://bugzil.la/1851761)).
- Der `viewportOptions`-Parameter für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde in `boxOptions` umbenannt ([Firefox-Bug 1859258](https://bugzil.la/1859258)).
- Der `scrollIntoView`-Parameter für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde zugunsten des unten stehenden `origin`-Parameters entfernt ([Firefox-Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin`-Parameter für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) hinzugefügt, der es ermöglicht, den Ursprung und die Grenzen des Screenshots zu definieren. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox-Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID für das `Window`-Objekt gesetzt ist, was ebenfalls mit Marionette ausgetauscht werden kann, um bestimmte Fenster und Frames zu referenzieren ([Firefox-Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem die Serialisierung eines in einer Datenstruktur (Array, Karte, etc.) verschachtelten Knotens fehlschlug ([Firefox-Bug 1861000](https://bugzil.la/1861000)).
- Ein Fehler wurde behoben, bei dem der Befehl [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) eine falsche Navigations-ID zurückgeben konnte ([Firefox-Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für die Serialisierung und Deserialisierung von `Window`- und `Frame`-Objekten hinzugefügt ([Firefox-Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 121, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere derartige Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudoklasse für benutzerdefinierten Elementstatus: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states) Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) offenlegen. Eine CSS-Pseudoklasse für benutzerdefinierte Zustände wie `:--some-state` kann den Zustand dieses Elements entsprechen. ([Firefox-Bug 1861466](https://bugzil.la/1861466))
- `showPicker()` Methode für HTML-Auswahlelemente: `dom.select.showPicker.enabled`
  - : Die [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) Methode startet programmatisch den Browser-Auswahldialog für ein {{HTMLElement("select")}} Element, ausgelöst durch Benutzerinteraktion. ([Firefox-Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, der dazu führte, dass Hintergrundseiten nicht gestartet wurden, wenn ein manifest.json `background` Schlüssel `service_worker` und `scripts` Deklarationen enthält ([Firefox-Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Zufälligerweise sieht man in Chrome 121 eine Änderung, bei der die `scripts`-Eigenschaft ignoriert wird, wenn sie zusammen mit der `service_worker`-Eigenschaft angegeben wird. Zuvor verweigerte Chrome das Laden von Erweiterungen, die beide Eigenschaften enthalten ([Chromium-Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browser-Unterstützung des `background`-Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).
