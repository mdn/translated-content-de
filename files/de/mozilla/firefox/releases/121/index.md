---
title: Firefox 121 für Entwickler
slug: Mozilla/Firefox/Releases/121
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 121, die Entwickler betreffen. Firefox 121 wurde am [19. Dezember 2023](https://whattrainisitnow.com/release/?version=121) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von `<iframe>`-Elementen wird jetzt unterstützt. Dadurch können Entwickler andeuten, dass bestimmte `<iframe>`-Elemente nur geladen werden sollen, wenn sie sichtbar werden. Dies kann die anfängliche Ladezeit beschleunigen, indem die Anzahl der beim Laden einer Seite abgerufenen Ressourcen reduziert wird (einige `<iframe>`-Elemente müssen möglicherweise gar nicht abgerufen werden). Der Hinweis kann über das [`loading`](/de/docs/Web/HTML/Element/iframe#loading)-Attribut am [`<iframe>`](/de/docs/Web/HTML/Element/iframe)-Element oder in JavaScript mit [`HTMLIFrameElement.loading`](/de/docs/Web/API/HTMLIFrameElement/loading) gegeben werden. ([Firefox-Bug 1622090](https://bugzil.la/1622090)).

### CSS

- Die {{CSSXRef("text-wrap")}}-Eigenschaft wurde mit Unterstützung für die Werte `balance` und `stable` aktualisiert. Der `balance`-Wert wird für kurze Inhaltsblöcke wie Überschriften verwendet und stellt sicher, dass der Inhalt beim Umbruch in mehrere Zeilen ausgewogen und leicht lesbar ist. Der `stable`-Wert sorgt dafür, dass sich editierbarer Inhalt während der Bearbeitung durch den Benutzer nicht umfließt ([Firefox-Bug 1731541](https://bugzil.la/1731541)).
- Der {{cssxref(":has", ":has()")}}-Selektor, allgemein als _übergeordneter Selektor_ bekannt, wird jetzt unterstützt. Er erlaubt es Entwicklern, einem Element basierend auf verwandten Elementen Stile zuzuweisen, z.B. `li:has(ul)` passt zu einer Liste, die eine Unterliste enthält, oder `h1:has(+ p)` passt zu einer Überschrift mit einem direkt darauf folgenden Absatz.
- Die [`text-indent`](/de/docs/Web/CSS/text-indent)-CSS-Eigenschaft unterstützt nun die Werte [`each-line`](/de/docs/Web/CSS/text-indent#each-line) und [`hanging`](/de/docs/Web/CSS/text-indent#hanging) ([Firefox-Bug 784648](https://bugzil.la/784648)), was es Entwicklern erleichtert, bestimmte Einrückungsstile anzugeben. Darüber hinaus können Entwickler nun mehrere `text-indent`-Eigenschaftswerte für mehr Kreativität kombinieren, z.B. `text-indent: 3em hanging each-line`.

### JavaScript

- Die {{jsxref("Promise.withResolvers()")}}-statische Methode wird jetzt unterstützt. Diese bietet die `resolve`- und `reject`-Rückruffunktionen im gleichen Bereich wie das zurückgegebene {{jsxref("Promise")}}, sodass der Code, der das Promise auflöst oder ablehnt, nach seiner Erstellung definiert werden kann ([Firefox-Bug 1845586](https://bugzil.la/1845586)).

- {{jsxref("Date.parse()")}} akzeptiert jetzt mehrere zusätzliche Datumsformate:

  - Jahr > 9999 für das `YYYY-MMM-DD`-Format (z.B. `19999-Jan-01`) ([Firefox-Bug 1858851](https://bugzil.la/1858851))
  - `MMM-DD-YYYY` (z.B. `Jan-01-1970`) ([Firefox-Bug 1863489](https://bugzil.la/1863489))
  - Millisekunden für nicht-ISO-Datumsformate (z.B. `Jan 1 1970 10:00:00.050`) ([Firefox-Bug 1863125](https://bugzil.la/1863125))
  - Wochentag am Anfang von Formaten, die zuvor abgelehnt wurden, wie:

    - `Wed, 1970-01-01`
    - `Wed, 1970-Jan-01`

    Der Wochentag muss nicht korrekt oder überhaupt ein Wochentag sein; zum Beispiel funktioniert `foo 1970-01-01` ([Firefox-Bug 1617562](https://bugzil.la/1617562)).

- Weitere {{jsxref("Date.parse()")}}-Korrekturen:

  - `YYYY-M-DD` und `YYYY-MM-D` werden nicht mehr als GMT angenommen, wie es ein ISO-Datum `YYYY-MM-DD` wäre ([Firefox-Bug 1783731](https://bugzil.la/1783731)).
  - Millisekunden für alle Formate werden nach 3 Stellen abgeschnitten, anstatt gerundet zu werden ([Firefox-Bug 746529](https://bugzil.la/746529)).

### APIs

- Die [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle wird jetzt unterstützt. Sie erlaubt es, die relative Priorität von ausgehenden _bidirektionalen_ Streams der [WebTransport API](/de/docs/Web/API/WebTransport_API) nach der Erstellung des Streams zu lesen und zu ändern. Beachten Sie, dass dies nicht verwendet werden kann, um die Priorität von unidirektionalen Streams zu ändern, da Firefox sie als [`WritableStream`](/de/docs/Web/API/WritableStream) anstelle von [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) implementiert. (Weitere Informationen siehe [Firefox-Bug 1853444](https://bugzil.la/1853444).)

#### DOM

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) funktioniert jetzt für [`<input type="week">`](/de/docs/Web/HTML/Element/input/month)- und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)-Elemente auf Android ([Firefox-Bug 1853797](https://bugzil.la/161853797)).

### WebAssembly

- WebAssembly unterstützt jetzt die Tail Call Optimization über neue `return_call`- und `return_call_indirect`-Alternativen zur [`call`](/de/docs/WebAssembly/Reference/Control_flow/call)-Anweisung. Dies verbessert die Leistung, reduziert den Stack-Speicherbedarf und erhöht die Kompatibilität mit Programmiersprachen, die Tail Calls verwenden. ([Firefox-Bug 1858855](https://bugzil.la/1846789)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das [`browsingContext.contextDestroyed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextDestroyed)-Ereignis, das ausgelöst wird, wenn ein Browsing-Kontext verworfen wird, wurde hinzugefügt ([Firefox-Bug 1694390](https://bugzil.la/1694390)).
- Unterstützung für den `userActivation`-Parameter für die [`script.callFunction`](https://w3c.github.io/webdriver-bidi/#command-script-callFunction)- und [`script.evaluate`](https://w3c.github.io/webdriver-bidi/#command-script-evaluate)-Befehle wurde hinzugefügt. Damit lässt sich JavaScript unter Emulation einer Benutzeraktion ausführen. ([Firefox-Bug 1845488](https://bugzil.la/1845488)).
- Unterstützung für das `defaultValue`-Feld für das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened)-Ereignis wurde hinzugefügt, damit Benutzer den Standardwert von Eingabeaufforderungen abrufen können ([Firefox-Bug 1851761](https://bugzil.la/1851761)).
- Der `viewportOptions`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde in `boxOptions` umbenannt ([Firefox-Bug 1859258](https://bugzil.la/1859258)).
- Der `scrollIntoView`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde zugunsten des unten stehenden `origin`-Parameters entfernt ([Firefox-Bug 1862649](https://bugzil.la/1862649)).
- Unterstützung für den `origin`-Parameter für den [`browsingContext.captureScreenshot`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-captureScreenshot)-Befehl wurde hinzugefügt. Dieser erlaubt es, den Ursprung und die Grenzen des Screenshots zu definieren. Gültige Werte sind `"document"` und `"viewport"` ([Firefox-Bug 1840999](https://bugzil.la/1840999)).
- Beim Serialisieren von `Window`-Objekten enthält der serialisierte Wert jetzt eine `context`-Eigenschaft, die auf die Kontext-ID des `Window`-Objekts gesetzt ist. Diese kann auch mit Marionette ausgetauscht werden, um spezifische Fenster und Frames zu referenzieren ([Firefox-Bug 1841049](https://bugzil.la/1841049)).
- Ein Fehler wurde behoben, bei dem die Serialisierung eines in eine Datenstruktur (Array, Map, etc.) eingebetteten Knotens fehlschlug ([Firefox-Bug 1861000](https://bugzil.la/1861000)).
- Es wurde ein Fehler behoben, bei dem der [`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)-Befehl eine inkorrekte Navigations-ID zurückgeben konnte ([Firefox-Bug 1861655](https://bugzil.la/1861655)).

#### Marionette

- Unterstützung für das Serialisieren und Deserialisieren von `Window`- und `Frame`-Objekten wurde hinzugefügt ([Firefox-Bug 1274251](https://bugzil.la/1274251)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 121 eingeführt worden, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie in der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- Pseudo-Klasse für benutzerdefinierte Elementzustände: `dom.element.customstateset.enabled`
  - : Benutzerdefinierte Elemente können ihren internen Zustand über die [`states`](/de/docs/Web/API/ElementInternals/states)-Eigenschaft als [`CustomStateSet`](/de/docs/Web/API/CustomStateSet) ausgeben. Eine CSS-Pseudoklasse für benutzerdefinierte Zustände wie `:--some-state` kann dem Zustand des Elements entsprechen. ([Firefox-Bug 1861466](https://bugzil.la/1861466))
- `showPicker()`-Methode für HTML-Select-Elemente: `dom.select.showPicker.enabled`
  - : Die [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)-Methode startet programmgesteuert den Auswahl-Dialog der Browsers für ein {{HTMLElement("select")}}-Element, ausgelöst durch Benutzerinteraktion. ([Firefox-Bug 1854112](https://bugzil.la/1854112))

## Änderungen für Add-on-Entwickler

- Ein Fehler wurde behoben, der dazu führte, dass Hintergrundseiten nicht gestartet wurden, wenn ein `background`-Schlüssel in der Datei manifest.json sowohl `service_worker`- als auch `scripts`-Deklarationen enthielt ([Firefox-Bug 1860304](https://bugzil.la/1860304)).

  > [!NOTE]
  > Gelegentlich sieht eine Änderung in Chrome 121 vor, dass die `scripts`-Eigenschaft ignoriert wird, wenn sie mit der `service_worker`-Eigenschaft angegeben wird. Bisher weigerte sich Chrome, Erweiterungen zu laden, die beide Eigenschaften enthalten ([Chromium-Bug 1418934](https://crbug.com/1418934)).
  > Weitere Informationen finden Sie unter [Browserunterstützung des `background`-Manifests-Schlüssels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background#browser_support).

## Ältere Versionen

{{Firefox_for_developers}}
