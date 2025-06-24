---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}}-Eigenschaft unterstützt jetzt den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [Verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations#nested_declarations_rule), was bedeutet, dass verschachteltes CSS jetzt in der richtigen Reihenfolge geparst wird ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Entfernung

- Die [`-moz-user-modify`](/de/docs/Web/CSS/user-modify)-CSS-Eigenschaft wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) als veraltet markiert. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Mit den regulären Ausdrucksmodifikatoren [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) können Sie Änderungen vornehmen, die nur in einem bestimmten Teil eines regex-Musters wirksam werden. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Standardwert](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-Headers {{httpheader("Accept")}} wurde auf `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert.
  Dadurch werden MIME-Typen für Bilder entfernt, die gelegentlich Kompatibilitätsprobleme verursachten, und es wird mit der Fetch-Spezifikation und Safari in Einklang gebracht. ([Firefox-Bug 1917177](https://bugzil.la/1917177)).

#### Entfernung

- HTTP/2 Server Push ist standardmäßig deaktiviert, und die Einstellung `network.http.http2.allow-push` ist jetzt auf `false` gesetzt.
  Diese Funktion wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einem zukünftigen Release vollständig entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) sind nun in der [Strengen Erweiterten Schutzmaßnahmen gegen Verfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese geben den Farbraum des WebGL-Zeichenpuffers bzw. den Farbraum an, in den beim Import von Texturen konvertiert werden soll. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird jetzt unterstützt, die regelt, ob Systembenachrichtigungen stumm sein sollten. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Töne oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das Attribut `fetchpriority` der Elemente {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}}, die Eigenschaft `fetchPriority` der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der Parameter [`options.priority`](/de/docs/Web/API/RequestInit#priority), der an den Konstruktor [`Request()`](/de/docs/Web/API/Request/Request) übergeben wird, und die Direktive `fetchpriority` im HTTP-Header {{httpheader("Link")}} werden jetzt unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität beim Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben und können neben anderen Möglichkeiten verwendet werden, die Priorität festzulegen, wie z.B. beim Preloading. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die zugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden jetzt unterstützt ([Firefox-Bug 1918408](https://bugzil.la/1918408)).
- Die Berechtigungen `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert wurde oder noch die Genehmigung des Benutzers erfordert. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden jetzt unterstützt. Die Methode `requestVideoFrameCallback()` registriert eine Rückruffunktion, die ausgeführt wird, wenn ein neuer Videoframe an den Kompositor gesendet wird. Entwickler können diese Funktion nutzen, um Operationen auf jedem Videoframe durchzuführen und so effizienteres Malen auf eine Leinwand, Videoanalysen, Synchronisation mit externen Audioquellen usw. zu ermöglichen. Die Methode gibt eine Rückruf-Handle zurück, das an `cancelVideoFrameCallback()` übergeben werden kann, um den noch ausstehenden Rückrufe zu stornieren. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurden mehrere Verbesserungen implementiert, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Zuvor schlugen Befehle wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError` fehl, sie werden jetzt ein paar Mal wiederholt, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated`-Ereignis wird jetzt korrekt für lazy-geladene Frames ausgelöst. Zuvor wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich begonnen hatte, seinen Inhalt zu laden. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkevents werden jetzt korrekt für zwischengespeicherte Stylesheet-Anfragen ausgelöst. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Netzwerk-Ereignistimings verwendeten früher die falsche Einheit und wurden in Mikrosekunden angegeben. Sie sind jetzt korrekt auf Millisekunden eingestellt. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerk-Ereignistimings sollte jetzt genauer sein und wirklich die Zeit entsprechen, zu der die Anfrage tatsächlich begonnen hat. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 132 ausgeliefert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Mehr solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die den Event-Loop nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore), aber `partitioned` ist in den Rückgabewerten nicht enthalten.
  - Das Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent), exklusive `partitioned` Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()`-Option `keepalive`:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive). Wenn `keepalive` auf `true` gesetzt ist, wird der zugehörige Request von dem Browser nicht abgebrochen, wenn die Seite, die ihn initiiert hat, entladen wird, bevor der Request abgeschlossen ist.

  Dies ermöglicht es einem Fetch-Request, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn Analysematerial am Ende einer Sitzung gesendet wird, was einige Vorteile hat (Sie können HTTP-Methoden verwenden, die nicht [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) sind, Anforderungseigenschaften anpassen und auf die Serverantwort über die Fetch-{{jsxref("Promise")}}-Erfüllung zugreifen). Es ist auch in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, auf dieselbe Weise wie integrierte Komponenten. Beispielsweise können Sie auf Android einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es Ihnen, auf ähnliche Weise eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine Komfortmethode, die einen Rückruf jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) entgegennimmt und ihr Ergebnis in einem {{jsxref("Promise")}} umschließt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) zur Handhabung verwendet werden können ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der [Vorschlag für Zugriff auf `JSON.parse`-Quelldaten](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Merkmale bereitzustellen, die Probleme im Zusammenhang mit Verlust von Präzision beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text mindern können ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Genauer gesagt sind die folgenden Merkmale jetzt verfügbar:
  - Der `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, der dann in einem Objekt enthalten sein kann, um den angegebenen Wert beim Serialisieren des Objekts zu erhalten.

## Ältere Versionen

{{Firefox_for_developers}}
