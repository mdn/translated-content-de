---
title: Firefox 121 für Entwickler
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: dc26ca2696c311b12c98df1511900612449dcb51
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) von `<iframe>`-Elementen wird nun unterstützt. Dies ermöglicht Entwicklern, zu signalisieren, dass bestimmte `<iframe>`-Elemente nur geladen werden sollten, wenn (und falls) sie sichtbar werden. Dies kann die anfängliche Ladezeit beschleunigen, indem die Ressourcen reduziert werden, die beim Laden der Seite abgerufen werden müssen (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht abgerufen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Element/iframe#loading)-Attribut am [`<iframe>`](/de/docs/Web/HTML/Element/iframe)-Element oder in JavaScript mittels {{domxref("HTMLIFrameElement.loading")}} bereitgestellt werden.
  ([Firefox Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung für die Werte `balance` und `stable` aktualisiert. Der Wert `balance` wird für kurze Inhaltsblöcke, wie Überschriften, verwendet und stellt sicher, dass der Inhalt ausgeglichen und leicht lesbar ist, wenn er über mehrere Zeilen verteilt wird. Der Wert `stable` sorgt dafür, dass bearbeitbare Inhalte während der Bearbeitung nicht umfließen ([Firefox Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, häufig als _Elternselektor_ bezeichnet, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element basierend auf verwandten Elementen anzuwenden, z.B. `li:has(ul)` passt zu einer Liste, die eine Unterliste enthält, oder `h1:has(+ p)` passt zu einer Überschrift mit einem direkt danach folgenden Absatz.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt nun die Werte [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) ([Firefox Bug 784648](https://bugzil.la/784648)), was es Entwicklern erleichtert, bestimmte Text-Einzug-Stile festzulegen. Zusätzlich können Entwickler nun mehrere `text-indent`-Eigenschaftswerte für mehr Kreativität kombinieren, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die statische Methode {{jsxref("Promise.withResolvers()")}} wird jetzt unterstützt. Diese Methode gibt die `resolve`- und `reject`-Rückruffunktionen im selben Bereich wie das zurückgegebene {{jsxref("Promise")}} frei, was es ermöglicht, Code, der das Versprechen auflöst oder ablehnt, nach dessen Erstellung zu definieren ([Firefox Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert nun mehrere zusätzliche Datumsformate:

  - Jahr > 9999 für das `YYYY-MMM-DD`-Format (z.B. `19999-Jan-01`) ([Firefox Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die zuvor abgelehnt wurden, wie:

    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder ein Wochentag überhaupt; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:

  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen, wie es bei einem ISO-Datum `YYYY-MM-DD` der Fall wäre ([Firefox Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Ziffern abgeschnitten, anstatt gerundet zu werden ([Firefox Bug 746529](https://bugzil.la/746529)).

### APIs

- Die {{domxref("WebTransportSendStream.sendOrder", "sendOrder")}}-Eigenschaft der {{domxref("WebTransportSendStream")}}-Schnittstelle wird jetzt unterstützt. Dies ermöglicht es, die relative Priorität ausgehender [WebTransport API](/de/docs/Web/API/WebTransport_API)-_Bidirektional_-Streams nach der Erstellung des Streams zu lesen und zu ändern. Beachten Sie, dass dies nicht verwendet werden kann, um die Priorität unidirektionaler Streams zu ändern, da Firefox sie als {{domxref("WritableStream")}} anstelle von {{domxref("WebTransportSendStream")}} implementiert. (Weitere Informationen siehe [Firefox Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- {{domxref("HTMLInputElement.showPicker()")}} funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Element/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)-Elemente auf Android ([Firefox Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt die Optimierung von Abschlussaufrufen über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Anweisung. Dies verbessert die Leistung, reduziert die Stapelspeichernutzung und erhöht die Kompatibilität mit Programmiersprachen, die Abschlussaufrufe verwenden. ([Firefox Bug 1858855](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das Ereignis [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed) wurde hinzugefügt, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation`-Parameter für die Befehle [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) hinzugefügt, die es ermöglichen, JavaScript unter Emulation der Benutzeraktion auszuführen. ([Firefox Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue`-Feld für das Ereignis [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) hinzugefügt, wodurch Benutzer die Standardeinstellung von Aufforderungen abrufen können ([Firefox Bug 1851761](https://bugzil.la/1851761)).
- Der Parameter `viewportOptions` für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde in `boxOptions` umbenannt ([Firefox Bug 1859258](https://bugzil.la/1859258)).
- Der Parameter `scrollIntoView` für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde zugunsten des folgenden `origin`-Parameters entfernt ([Firefox Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin`-Parameter für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) hinzugefügt, der es ermöglicht, den Ursprung und die Grenzen des Screenshots zu definieren. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID des `Window`-Objekts gesetzt ist, die auch mit Marionette ausgetauscht werden kann, um spezifische Fenster und Frames zu referenzieren ([Firefox Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem die Serialisierung eines in einer Datenstruktur verschachtelten Knotens (Array, Map usw.) fehlschlug ([Firefox Bug 1861000](https://bugzil.la/1861000)).
- Ein Fehler wurde behoben, bei dem der Befehl [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) eine falsche Navigations-ID zurückgeben konnte ([Firefox Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für das Serialisieren und Deserialisieren von `Window`- und `Frame`-Objekten hinzugefügt ([Firefox Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 121, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudoklasse für benutzerdefinierten Elementzustand: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die {{domxref("ElementInternals.states","states")}}-Eigenschaft als {{domxref("CustomStateSet")}} offenlegen. Eine CSS-Pseudoklasse für benutzerdefinierte Zustände wie `:--somestate` kann den Zustand dieses Elements abgleichen. ([Firefox Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Auswahlelemente: `dom.select.showPicker.enabled`
  - : Die {{domxref("HTMLSelectElement.showPicker()")}}-Methode startet programmgesteuert den Browser-Picker für ein {{HTMLElement("select")}}-Element, ausgelöst durch Benutzerinteraktion. ([Firefox Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, der dazu führte, dass Hintergrundseiten nicht gestartet wurden, wenn ein `background`-Schlüssel in der manifest.json sowohl `service_worker`- als auch `scripts`-Deklarationen enthält ([Firefox Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Zufälligerweise führt eine Änderung in Chrome 121 dazu, dass die `scripts`-Eigenschaft ignoriert wird, wenn sie zusammen mit der `service_worker`-Eigenschaft angegeben wird. Zuvor weigerte sich Chrome, Erweiterungen zu laden, die beide Eigenschaften enthalten ([Chromium Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browseruntersützung des `background`-manifests](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Ältere Versionen

{{Firefox_for_developers}}
