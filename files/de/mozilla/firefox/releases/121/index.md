---
title: Firefox 121 für Entwickler
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>`-Elementen wird jetzt unterstützt, sodass Entwickler angeben können, dass bestimmte `<iframe>`-Elemente nur geladen werden sollten, wenn sie sichtbar werden. Dies kann die anfängliche Ladezeit verkürzen, indem der Abruf von Ressourcen beim Seitenaufbau reduziert wird (einige `<iframe>`-Elemente müssen möglicherweise überhaupt nicht abgerufen werden).
  Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Reference/Elements/iframe#loading)-Attribut im [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe)-Element angegeben werden oder in JavaScript mit [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading).
  ([Firefox Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung für die Werte `balance` und `stable` aktualisiert. Der Wert `balance` wird für kurze Inhaltsblöcke, wie Überschriften, verwendet und stellt sicher, dass der Inhalt ausgewogen und leicht lesbar ist, wenn er über mehrere Zeilen verteilt ist. Der Wert `stable` stellt sicher, dass sich editierbarer Inhalt nicht neu anordnet, während der Nutzer ihn bearbeitet ([Firefox Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, allgemein als _Elternselektor_ bezeichnet, wird jetzt unterstützt. Er ermöglicht es Entwicklern, Stile auf ein Element basierend auf verwandten Elementen anzuwenden, z.B. `li:has(ul)` passt auf eine Liste, die eine Unterliste enthält, oder `h1:has(+ p)` passt auf eine Überschrift mit einem direkt darauf folgenden Absatz.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt jetzt die Werte [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) ([Firefox Bug 784648](https://bugzil.la/784648)), wodurch Entwickler bestimmte Text-Einzugstile einfacher spezifizieren können. Zudem können Entwickler nun mehrere `text-indent`-Eigenschaftswerte für mehr Kreativität kombinieren, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die statische Methode {{jsxref("Promise.withResolvers()")}} wird jetzt unterstützt. Diese Methode gibt die `resolve`- und `reject`-Callback-Funktionen im gleichen Geltungsbereich wie das zurückgegebene {{jsxref("Promise")}} frei, was es ermöglicht, Code, der das Promise auflöst oder ablehnt, nach dessen Erstellung zu definieren ([Firefox Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Jahr > 9999 für das Format `YYYY-MMM-DD` (z.B. `19999-Jan-01`) ([Firefox Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die abgelehnt wurden, wie:

    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt sein oder überhaupt ein Wochentag; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:
  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen wie es ein ISO-Datum `YYYY-MM-DD` wäre ([Firefox Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Ziffern abgeschnitten, statt gerundet ([Firefox Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt, was es ermöglicht, die relative Priorität ausgehender [WebTransport API](/de/docs/Web/API/WebTransport_API) _bidirektionaler_ Streams nach der Erstellung des Streams zu lesen und zu ändern. Beachten Sie, dass dies nicht verwendet werden kann, um die Priorität von unidirektionalen Streams zu ändern, da Firefox sie als [`WritableStream`](/de/docs/Web/API/WritableStream) statt als [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen siehe [Firefox Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/month) und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)-Elemente auf Android ([Firefox Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt Tail-Call-Optimierung über neue `return_call` und `return_call_indirect` Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Anweisung. Dies verbessert die Leistung, reduziert den Stapelspeicherplatzverbrauch und erhöht die Kompatibilität mit Programmiersprachen, die Tail-Calls verwenden. ([Firefox Bug 1858855](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed)-Ereignis wurde hinzugefügt, welches ausgelöst wird, wenn ein Browsing-Kontext verworfen wird ([Firefox Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation`-Parameter in den Befehlen [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction) und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate) hinzugefügt, die es ermöglichen, JavaScript unter Nachahmung einer Benutzeraktion auszuführen ([Firefox Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue`-Feld im [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened)-Ereignis hinzugefügt, das es Benutzern ermöglicht, den Standardwert von Eingabeaufforderungen abzurufen ([Firefox Bug 1851761](https://bugzil.la/1851761)).
- Der `viewportOptions`-Parameter des [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehls wurde in `boxOptions` umbenannt ([Firefox Bug 1859258](https://bugzil.la/1859258)).
- Der `scrollIntoView`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde zugunsten des folgenden `origin`-Parameters entfernt ([Firefox Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl hinzugefügt, der es ermöglicht, den Ursprung und die Grenzen des Screenshots zu definieren. Die akzeptierten Werte sind `"document"` und `"viewport"` ([Firefox Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID des `Window`-Objekts gesetzt ist, welches auch mit Marionette ausgetauscht werden kann, um spezifische Fenster und Frames zu referenzieren ([Firefox Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem die Serialisierung eines in einer Datenstruktur (Array, Map etc.) verschachtelten Knotens fehlschlug ([Firefox Bug 1861000](https://bugzil.la/1861000)).
- Ein Fehler wurde behoben, bei dem der [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)-Befehl eine falsche Navigations-ID zurückgeben konnte ([Firefox Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für das Serialisieren und Deserialisieren von `Window`- und `Frame`-Objekten hinzugefügt ([Firefox Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 121 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudoklasse für den Zustand benutzerdefinierter Elemente: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) offenlegen. Eine CSS-Pseudoklasse für den benutzerdefinierten Zustand wie `:--some-state` kann auf den Zustand dieses Elements passen. ([Firefox Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Select-Elemente: `dom.select.showPicker.enabled`
  - : Die [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)-Methode startet programmgesteuert den Browser-Auswahl-Dialog für ein {{HTMLElement("select")}}-Element, ausgelöst durch Benutzerinteraktion. ([Firefox Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, der dazu führte, dass Hintergrundseiten nicht gestartet wurden, wenn ein `manifest.json`-Schlüssel `background` sowohl `service_worker`- als auch `scripts`-Deklarationen enthält ([Firefox Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Zufällig sieht eine Änderung in Chrome 121 vor, dass die `scripts`-Eigenschaft ignoriert wird, wenn sie mit der `service_worker`-Eigenschaft angegeben wird. Zuvor weigerte sich Chrome, Erweiterungen zu laden, die beide Eigenschaften enthalten ([Chromium Bug 1418934](https://crbug.com/1418934)).
  > Für weitere Informationen siehe [Browser-Support des `background`-Manifest-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Ältere Versionen

{{Firefox_for_developers}}
