---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Veränderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}}-Eigenschaft unterstützt jetzt den `auto`-Wert, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [Nested declaration rule](/de/docs/Web/API/CSSNestedDeclarations#nested_declarations_rule), was bedeutet, dass verschachteltes CSS jetzt in der richtigen Reihenfolge geparst wird ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Entfernungen

- Die CSS-Eigenschaft [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) veraltet. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regulären Ausdrucksmodifikatoren ermöglichen es Ihnen, Änderungen vorzunehmen, die nur in einem bestimmten Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Default-Wert/Dokumentenwert](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-{{httpheader("Accept")}}-Headers wurde auf `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert. Diese Änderung entfernt MIME-Typen für Bilder, die manchmal Kompatibilitätsprobleme verursachten, und stimmt mit der Fetch-Spezifikation und Safari überein. ([Firefox-Bug 1917177](https://bugzil.la/1917177)).

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert mit der Einstellung `network.http.http2.allow-push`, die jetzt auf `false` gesetzt ist. Dieses Feature wird von keinem anderen wichtigen Browser mehr unterstützt und die Implementierung wird möglicherweise in einer zukünftigen Version vollständig entfernt. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) sind jetzt in der [Strengen Erweiterten Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese spezifizieren den Farbraum des WebGL-Zeichenpuffers und den Farbraum, in den beim Importieren von Texturen konvertiert werden soll. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird jetzt unterstützt, die steuert, ob Systembenachrichtigungen stummgeschaltet werden sollen. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben ist, wird die resultierende Systembenachrichtigung ohne begleitende Sounds oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority`-Attribut der Elemente {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}}, die Eigenschaft `fetchPriority` der Schnittstellen [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), der Parameter [`options.priority`](/de/docs/Web/API/RequestInit#priority), der im [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die Direktive `fetchpriority` im HTTP-{{httpheader("Link")}}-Header werden nun unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität für das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben, und können neben anderen Möglichkeiten zur Prioritätensetzung verwendet werden, wie z.B. Preloading. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).
- Die Schnittstelle [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations) und die zugehörige Eigenschaft [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style) werden jetzt unterstützt ([Firefox-Bug 1918408](https://bugzil.la/1918408)).
- Die Berechtigungen `microphone` und `camera` können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu testen, ob der Zugriff auf die entsprechende Hardware gewährt, verweigert oder noch von der Benutzerzustimmung abhängig ist. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der Schnittstelle [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) werden jetzt unterstützt. Die `requestVideoFrameCallback()`-Methode registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Entwickler können diese Funktion nutzen, um Operationen auf jedem Videoframe auszuführen, was eine effizientere Bearbeitung auf einer Zeichenfläche, Videoanalyse, Synchronisation mit externen Audioquellen und vieles mehr ermöglicht. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anforderung abzubrechen. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert beschreibt ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Es wurden mehrere Verbesserungen implementiert, um WebDriver BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Zuvor waren Befehle wie `browsingContext.setViewport` wahrscheinlich mit einem `AbortError` fehlgeschlagen, sie werden jetzt einige Male wiederholt, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das Ereignis `browsingContext.contextCreated` wird jetzt korrekt für lazy-geladene Frames ausgelöst. Zuvor wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich mit dem Laden seines Inhalts begann. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkevents werden jetzt korrekt für zwischengespeicherte Stylesheet-Anfragen ausgelöst. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Netzwerk-Ereignis-Timings verwendeten zuvor die falsche Einheit und wurden in Mikrosekunden angegeben. Diese werden jetzt korrekt in Millisekunden gesetzt. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerkereignis-Timings sollte jetzt genauer sein und wirklich der Zeit entsprechen, in der die Anfrage tatsächlich begann. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 132 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Merkmale](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die den Event-Loop nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore), aber `partitioned` ist nicht in den Rückgabewerten enthalten.
  - Die Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent), ohne `partitioned` Eigenschaften.
  - Die Eigenschaft [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore).
  - Die Eigenschaft [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore).

- **Die `fetch()` `keepalive`-Option:** `dom.fetchKeepalive.enabled`.

  Die globale Methode [`fetch()`](/de/docs/Web/API/Window/fetch) hat eine Initialisierungsoption [`keepalive`](/de/docs/Web/API/RequestInit#keepalive). Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird.

  Dies ermöglicht es, eine Fetch-Anfrage als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu nutzen, um Analysedaten am Ende einer Sitzung zu senden, was einige Vorteile hat (Sie können HTTP-Methoden andere als [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}} zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, auf die gleiche Weise wie eingebaute Komponenten. Auf Android können Sie beispielsweise ein Dialogfeld mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es Ihnen, ähnlich eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine bequeme Methode, die einen Callback jeglicher Art (gibt zurück oder löst aus, synchron oder asynchron) nimmt und das Ergebnis in einem {{jsxref("Promise")}} umhüllt, sodass Promisesemantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um dieses zu behandeln ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der Vorschlag [`JSON.parse`-Quelltextzugriff](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme im Zusammenhang mit dem Verlust von Genauigkeit beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `reviver`-Parameter `context`-Argument von `JSON.parse()` bietet Zugang zum ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "raw JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu bewahren, wenn dieses Objekt serialisiert wird.

## Ältere Versionen

{{Firefox_for_developers}}
