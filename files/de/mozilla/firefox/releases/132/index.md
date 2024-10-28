---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: fc594f0be75a7dd74beec04ab71c59a447a00987
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}} Eigenschaft unterstützt jetzt den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox Bug 1919658](https://bugzil.la/1919658)).

#### Entfernungen

- Die [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) CSS-Eigenschaft wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) veraltet. ([Firefox Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, der darauf abzielt, Funktionen bereitzustellen, um Probleme bei der Verlust der Genauigkeit beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Texten zu mildern ([Firefox Bug 1913085](https://bugzil.la/1913085)). Insbesondere sind folgende Funktionen jetzt verfügbar:
  - Das `JSON.parse()` [`reviver` parameter `context` argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Ermöglicht den Zugriff auf den ursprünglichen JSON-Quelltext, der analysiert wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, welches dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu erhalten, wenn dieses Objekt in einen String umgewandelt wird.
- Die [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regulären Ausdrucksmodifikatoren ermöglichen es, Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam werden zu lassen. ([Firefox Bug 1913752](https://bugzil.la/1913752) & [Firefox Bug 1899813](https://bugzil.la/1899813)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Voreinstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist. Diese Funktion wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox Bug 1915848](https://bugzil.la/1915848)).

### Sicherheit

#### Entfernungen

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) werden nun im [Erweiterten Schutz vor Aktivitätenverfolgung im Strikten Modus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Schnittstellen werden jetzt unterstützt. Diese geben den Farbraum des WebGL-Zeichenpuffers sowie den Farbraum an, in den beim Importieren von Texturen konvertiert werden soll. ([Firefox Bug 1885491](https://bugzil.la/1885491), [Firefox Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird jetzt unterstützt und steuert, ob Systembenachrichtigungen stumm sein sollen. Wenn `silent: true` im Konstruktor [`Notification()`](/de/docs/Web/API/Notification/Notification) angegeben wird, erfolgt die resultierende Systembenachrichtigung ohne begleitende Töne oder Vibrationen, unabhängig von den Geräteeinstellungen ([Firefox Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority` Attribut der {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}} Elemente, die `fetchPriority` Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstellen, der [`options.priority`](/de/docs/Web/API/RequestInit#priority) Parameter, der an den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority` Direktive im HTTP {{httpheader("Link")}} Header werden jetzt unterstützt. Diese erlauben es Entwicklern, einen Hinweis auf die relative Priorität zum Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben und können neben anderen Methoden zur Einstellung der Priorität verwendet werden, wie z.B. Preloading. ([Firefox Bug 1854077](https://bugzil.la/1854077)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle werden jetzt unterstützt. Die `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Entwickler können diese Funktion nutzen, um Operationen auf jedem Videoframe durchzuführen, was effizienteres Zeichnen auf eine Leinwand, Videoanalyse, Synchronisation mit externen Audioquellen usw. ermöglicht. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anfrage zu stornieren. ([Firefox Bug 1919367](https://bugzil.la/1919367), [Firefox Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreibt ([Firefox Bug 1179084](https://bugzil.la/1179084)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mehrere Verbesserungen wurden implementiert, um WebDriver BiDi Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Zuvor schlugen Befehle wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError` fehl, sie werden nun ein paar Mal wiederholt, um solche Probleme zu vermeiden. ([Firefox Bug 1854942](https://bugzil.la/1854942), [Firefox Bug 1918287](https://bugzil.la/1918287), [Firefox Bug 1918672](https://bugzil.la/1918672), [Firefox Bug 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated` Ereignis wird jetzt korrekt für Lazy-Loaded Frames ausgelöst. Zuvor wurde das Ereignis nur ausgelöst, wenn das Iframe tatsächlich begann, seine Inhalte zu laden. ([Firefox Bug 1878166](https://bugzil.la/1878166))
- Netzwerkereignisse werden jetzt korrekt für zwischengespeicherte Stylesheet-Anfragen ausgelöst. ([Firefox Bug 1879438](https://bugzil.la/1879438))
- Die Netzwerkereigniszeiten verwendeten zuvor die falsche Einheit und wurden in Mikrosekunden angegeben. Sie sind jetzt korrekt in Millisekunden gesetzt. ([Firefox Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` von Netzwerkereigniszeiten sollte jetzt genauer sein und wirklich mit der Zeit übereinstimmen, zu der die Anfrage tatsächlich begann. ([Firefox Bug 1922390](https://bugzil.la/1922390))

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 132, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox Bug 1800882](https://bugzil.la/1800882)). Dazu gehört:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, jedoch ist `partitioned` nicht in den Rückgabewerten enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, ohne `partitioned` Eigenschaften.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
  - Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie ausgelöst hat, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht es einer Fetch-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn Analysen am Ende einer Sitzung gesendet werden, was einige Vorteile hat (Sie können HTTP-Methoden verwenden, die nicht [`POST`](/de/docs/Web/HTTP/Methods/POST) sind, Anfrageeigenschaften anpassen und über die Erfüllung des Fetch-{{jsxref("Promise")}} auf die Serverantwort zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) Schnittstelle erlaubt es Entwicklern, Komponenten zu implementieren, die mit geräte-eigenen Mechanismen geschlossen werden können, ähnlich wie eingebaute Komponenten. Auf Android können Sie beispielsweise einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es Ihnen, ähnlich eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine praktische Methode, die einen beliebigen Callback annimmt (gibt zurück oder löst aus, synchron oder asynchron) und ihr Ergebnis in ein {{jsxref("Promise")}} einwickelt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu handhaben ([Firefox Bug 1905364](https://bugzil.la/1905364)).

## Ältere Versionen

{{Firefox_for_developers}}
