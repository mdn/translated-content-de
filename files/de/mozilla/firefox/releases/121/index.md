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

- Das [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) von `<iframe>`-Elementen wird jetzt unterstützt, wodurch Entwickler andeuten können, dass bestimmte `<iframe>`-Elemente nur geladen werden sollten, wenn (und falls) sie sichtbar werden. Dies kann die anfängliche Ladezeit verkürzen, indem die zu ladenden Ressourcen beim Seitenaufruf reduziert werden (einige `<iframe>`-Elemente müssen möglicherweise gar nicht geladen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Element/iframe#loading)-Attribut auf dem [`<iframe>`](/de/docs/Web/HTML/Element/iframe)-Element oder in JavaScript mittels [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading) gegeben werden.
  ([Firefox-Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung der Werte `balance` und `stable` aktualisiert. Der `balance`-Wert wird für kurze Inhaltsblöcke, wie Überschriften, verwendet und stellt sicher, dass der Inhalt ausgeglichen und leicht lesbar ist, wenn er über mehrere Zeilen verteilt ist. Der `stable`-Wert stellt sicher, dass bearbeitbarer Inhalt nicht umfließt, während der Benutzer ihn bearbeitet ([Firefox-Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, oft als _Parent-Selektor_ bezeichnet, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element basierend auf verwandten Elementen anzuwenden, z.B. `li:has(ul)` wird eine Liste mit einer Unterliste ansprechen, oder `h1:has(+ p)` wird eine Überschrift mit einem direkt darauf folgenden Absatz ansprechen.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt jetzt die Werte [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) ([Firefox-Bug 784648](https://bugzil.la/784648)), was es Entwicklern erleichtert, bestimmte Formate für den Einzug von Text anzugeben. Außerdem können Entwickler jetzt mehrere `text-indent`-Eigenschaftswerte für mehr Kreativität kombinieren, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die statische Methode {{jsxref("Promise.withResolvers()")}} wird nun unterstützt. Diese gibt die `resolve` und `reject` Callback-Funktionen im selben Gültigkeitsbereich wie das zurückgegebene {{jsxref("Promise")}} frei, sodass Code, der das Versprechen auflöst oder ablehnt, nach dessen Konstruktion definiert werden kann ([Firefox-Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Jahr > 9999 für das Format `YYYY-MMM-DD` (z.B. `19999-Jan-01`) ([Firefox-Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox-Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für Nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox-Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die abgelehnt wurden, wie:

    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder überhaupt vorhanden sein; beispielsweise funktioniert `foo 1970-01-01` ([Firefox-Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:

  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen, wie es ISO-Datum `YYYY-MM-DD` wäre ([Firefox-Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Ziffern abgeschnitten, anstatt gerundet ([Firefox-Bug 746529](https://bugzil.la/746529)).

### APIs

- Die Eigenschaft [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder) der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt, sodass die relative Priorität ausgehender _bidirektionaler_ Streams der [WebTransport API](/de/docs/Web/API/WebTransport_API) nach der Erstellung des Streams gelesen und geändert werden kann. Beachten Sie, dass dies nicht verwendet werden kann, um die Priorität unidirektionaler Streams zu ändern, da Firefox diese als [`WritableStream`](/de/docs/Web/API/WritableStream) anstelle von [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen finden Sie im [Firefox-Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Element/input/month)- und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)-Elemente auf Android ([Firefox-Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt Tail Call Optimierung über neue `return_call`- und `return_call_indirect`-Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Anweisung. Dies verbessert die Leistung, reduziert den Speicherplatzbedarf des Stacks und steigert die Kompatibilität mit Programmiersprachen, die Tail Calls verwenden. ([Firefox-Bug 1858855](https://bugzil.la/1846789)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das Ereignis [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed) wurde hinzugefügt, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox-Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den Parameter `userActivation` für die Befehle [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) hinzugefügt, der es ermöglicht, JavaScript auszuführen, während Benutzeraktionen emuliert werden. ([Firefox-Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das Feld `defaultValue` für das Ereignis [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) hinzugefügt, das Benutzern ermöglicht, den Standardwert von Eingabeaufforderungen abzurufen ([Firefox-Bug 1851761](https://bugzil.la/1851761)).
- Der Parameter `viewportOptions` für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde in `boxOptions` umbenannt ([Firefox-Bug 1859258](https://bugzil.la/1859258)).
- Der Parameter `scrollIntoView` für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) wurde zugunsten des folgenden `origin`-Parameters entfernt ([Firefox-Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den Parameter `origin` für den Befehl [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot) hinzugefügt, der es ermöglicht, Ursprung und Grenzen des Screenshots zu definieren. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox-Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID des `Window`-Objekts gesetzt ist, was auch mit Marionette ausgetauscht werden kann, um bestimmte Fenster und Frames zu referenzieren ([Firefox-Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem das Serialisieren eines Knotens, der in einer Datenstruktur (Array, Karte, etc.) geschachtelt ist, fehlschlagen würde ([Firefox-Bug 1861000](https://bugzil.la/1861000)).
- Ein Fehler wurde behoben, bei dem der Befehl [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate) eine falsche Navigations-ID zurückgeben konnte ([Firefox-Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für die Serialisierung und Deserialisierung von `Window`- und `Frame`-Objekten hinzugefügt ([Firefox-Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 121 verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- Benutzerdefinierte Zustandspseudoklasse: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) anzeigen. Eine CSS-Benutzerzustandspseudoklasse wie `:--somestate` kann den Zustand dieses Elements abgleichen. ([Firefox-Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Select-Elemente: `dom.select.showPicker.enabled`
  - : Die Methode [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker) startet programmgesteuert den Browser-Auswahldialog für ein {{HTMLElement("select")}}-Element, ausgelöst durch Benutzerinteraktion. ([Firefox-Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, der dazu führte, dass Hintergrundseiten nicht gestartet wurden, wenn ein manifest.json-`background`-Schlüssel `service_worker`- und `scripts`-Deklarationen enthält ([Firefox-Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > In Chrome 121 wird die `scripts`-Eigenschaft ignoriert, wenn sie zusammen mit der `service_worker`-Eigenschaft angegeben ist. Zuvor verweigerte Chrome das Laden von Erweiterungen, die beide Eigenschaften enthalten ([Chromium-Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browser-Unterstützung des `background`-Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Ältere Versionen

{{Firefox_for_developers}}
