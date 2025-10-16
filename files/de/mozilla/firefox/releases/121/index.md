---
title: Firefox 121 Versionshinweise für Entwickler
short-title: Firefox 121
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>`-Elementen wird jetzt unterstützt. Dadurch können Entwickler angeben, dass bestimmte `<iframe>`-Elemente nur geladen werden sollen, wenn (und falls) sie sichtbar werden. Dies kann die anfängliche Ladezeit beschleunigen, indem die Ressourcen reduziert werden, die beim Laden der Seite abgerufen werden müssen (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht abgerufen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-Attribut im [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element oder in JavaScript mit [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading) bereitgestellt werden.
  ([Firefox Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung der Werte `balance` und `stable` aktualisiert. Der `balance`-Wert wird für kurze Inhaltsblöcke wie Überschriften verwendet und stellt sicher, dass der Inhalt ausgewogen und leicht zu lesen ist, wenn er auf mehrere Zeilen verteilt wird. Der `stable`-Wert sorgt dafür, dass bearbeitbare Inhalte beim Bearbeiten durch den Benutzer nicht umfließen ([Firefox Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, allgemein bekannt als _Parent-Selektor_, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Styles auf ein Element basierend auf verwandten Elementen anzuwenden, z.B. `li:has(ul)` wird eine Liste mit einer Unterliste abgleichen, oder `h1:has(+ p)` wird eine Überschrift mit einem direkt darauf folgenden Absatz abgleichen.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt jetzt die Werte [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) ([Firefox Bug 784648](https://bugzil.la/784648)), was es Entwicklern erleichtert, bestimmte Text-Einrückungsstile anzugeben. Darüber hinaus können Entwickler jetzt mehrere `text-indent`-Eigenschaftswerte für mehr Kreativität kombinieren, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die {{jsxref("Promise.withResolvers()")}}-statische Methode wird jetzt unterstützt. Sie bietet Zugriff auf die `resolve`- und `reject`-Callback-Funktionen im selben Bereich wie das zurückgegebene {{jsxref("Promise")}}, sodass der Code, der das Versprechen erfüllt oder ablehnt, nach seiner Konstruktion definiert werden kann ([Firefox Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:
  - Jahr > 9999 im `YYYY-MMM-DD`-Format (z.B. `19999-Jan-01`) ([Firefox Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox Bug 1863125](https://bugzil.la/1863125))
  - Wochentag zu Beginn von Formaten, die zuvor abgelehnt wurden, wie z.B.:
    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder überhaupt ein Wochentag; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:
  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen, wie es ein ISO-Datum `YYYY-MM-DD` wäre ([Firefox Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden werden für alle Formate nach 3 Ziffern abgeschnitten, anstatt gerundet zu werden ([Firefox Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt, sodass die relative Priorität ausgehender _bidirektionaler_ Streams der [WebTransport API](/de/docs/Web/API/WebTransport_API) gelesen und nach der Erstellung des Streams geändert werden kann. Beachten Sie, dass dies nicht zur Änderung der Priorität von unidirektionalen Streams verwendet werden kann, da Firefox diese als [`WritableStream`](/de/docs/Web/API/WritableStream) anstatt als [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen finden Sie in [Firefox Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)-Elemente auf Android ([Firefox Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt die Tail-Call-Optimierung über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Anweisung. Dies verbessert die Leistung, reduziert den Speicherplatzbedarf des Stacks und verbessert die Kompatibilität mit Programmiersprachen, die Tail-Calls verwenden. ([Firefox Bug 1858855](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed)-Ereignis wurde hinzugefügt, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation`-Parameter für die [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate)-Befehle hinzugefügt, die die Ausführung von JavaScript unter Emulation der Benutzeraktion erlauben. ([Firefox Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue`-Feld für das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened)-Ereignis hinzugefügt, das es Benutzern ermöglicht, den Standardwert von Eingabeaufforderungen abzurufen ([Firefox Bug 1851761](https://bugzil.la/1851761)).
- Der `viewportOptions`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde in `boxOptions` umbenannt ([Firefox Bug 1859258](https://bugzil.la/1859258)).
- Der `scrollIntoView`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde zugunsten des `origin`-Parameters entfernt ([Firefox Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl hinzugefügt, der die Definition des Ursprungs und der Grenzen des Screenshots ermöglicht. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert nun eine `context`-Eigenschaft, die auf die Kontext-ID für das `Window`-Objekt gesetzt ist, die auch mit Marionette ausgetauscht werden kann, um auf bestimmte Fenster und Frames zu verweisen ([Firefox Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem die Serialisierung eines in einer Datenstruktur (Array, Map usw.) verschachtelten Node fehlschlug ([Firefox Bug 1861000](https://bugzil.la/1861000)).
- Ein Fehler wurde behoben, bei dem der [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)-Befehl eine falsche Navigations-ID zurückgeben konnte ([Firefox Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für das Serialisieren und Deserialisieren von `Window`- und `Frame`-Objekten hinzugefügt ([Firefox Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 121, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudo-Klasse für benutzerdefinierten Elementzustand: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) offenlegen. Eine CSS-Pseudoklasse für benutzerdefinierte Zustände wie `:--some-state` kann mit dem Zustand dieses Elements übereinstimmen. ([Firefox Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Auswahlelemente: `dom.select.showPicker.enabled`
  - : Die [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)-Methode startet programmatisch den Browser-Picker für ein {{HTMLElement("select")}}-Element, ausgelöst durch eine Benutzerinteraktion. ([Firefox Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, der dazu führte, dass Hintergrundseiten nicht gestartet wurden, wenn ein manifest.json-`background`-Schlüssel `service_worker` und `scripts`-Deklarationen enthält ([Firefox Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Zufälligerweise führt eine Änderung in Chrome 121 dazu, dass die `scripts`-Eigenschaft ignoriert wird, wenn sie mit der `service_worker`-Eigenschaft angegeben wird. Zuvor weigerte sich Chrome, Erweiterungen zu laden, die beide Eigenschaften enthalten ([Chromium Bug 1418934](https://crbug.com/1418934)).
  > Für weitere Informationen siehe [Browserunterstützung des `background`-Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).
