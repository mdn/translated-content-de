---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 wurde am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}}-Eigenschaft unterstützt jetzt den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).
- CSS unterstützt jetzt die [verschachtelte Deklarationsregel](/de/docs/Web/API/CSSNestedDeclarations), was bedeutet, dass verschachteltes CSS jetzt in der korrekten Reihenfolge geparst wird ([Firefox-Bug 1918408](https://bugzil.la/1918408)).

#### Entfernen

- Die [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) CSS-Eigenschaft wurde entfernt. Diese Eigenschaft wurde zugunsten des [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) globalen Attributs als veraltet erklärt. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Die [`(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) Regulärausdruckmodifikatoren ermöglichen es, Änderungen so vorzunehmen, dass sie nur in einem spezifischen Teil eines Regex-Musters wirksam werden. ([Firefox-Bug 1913752](https://bugzil.la/1913752) & [Firefox-Bug 1899813](https://bugzil.la/1899813)).

### HTTP

- Der [Standardwert/Dokumentwert](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values) des HTTP-{{httpheader("Accept")}}-Headers wurde auf `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8` geändert. Dies entfernt MIME-Typen für Bilder, die manchmal Kompatibilitätsprobleme verursacht haben, und entspricht der Fetch-Spezifikation und Safari. ([Firefox-Bug 1917177](https://bugzil.la/1917177)).

#### Entfernung

- HTTP/2 Server Push ist standardmäßig deaktiviert, wobei die Einstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist. Dieses Feature wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version komplett entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Datenschutz

- Alle [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) werden jetzt in [Strenger Verbesserter Schutz vor Verfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox-Bug 1918037](https://bugzil.la/1918037)).

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese spezifizieren den Farbraum des WebGL-Zeichenpuffers und den Farbraum, in den beim Importieren von Texturen konvertiert werden soll. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die [`Notification.silent`](/de/docs/Web/API/Notification/silent)-Eigenschaft wird jetzt unterstützt, die steuert, ob Systembenachrichtigungen stummgeschaltet werden sollen. Wenn `silent: true` im [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Töne oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority`-Attribut der {{htmlelement("link")}}, {{htmlelement("script")}} und {{htmlelement("img")}}-Elemente, die `fetchPriority`-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstellen, der [`options.priority`](/de/docs/Web/API/RequestInit#priority)-Parameter, der an den [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority`-Direktive im HTTP-{{httpheader("Link")}}-Header werden jetzt unterstützt. Diese ermöglichen es Entwicklern, einen Hinweis auf die relative Priorität für das Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen desselben Typs zu geben und können neben anderen Methoden zur Einstellung der Priorität verwendet werden, wie z.B. Preloading. ([Firefox-Bug 1854077](https://bugzil.la/1854077)).
- Die [`CSSNestedDeclarations`](/de/docs/Web/API/CSSNestedDeclarations)-Schnittstelle und die zugehörige [`CSSNestedDeclarations.style`](/de/docs/Web/API/CSSNestedDeclarations/style)-Eigenschaft werden jetzt unterstützt ([Firefox-Bug 1918408](https://bugzil.la/1918408)).
- Die `microphone`- und `camera`-[Berechtigungen](/de/docs/Web/API/Permissions_API) können jetzt in der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet werden, um zu prüfen, ob der Zugriff auf die entsprechende Hardware gewährt, abgelehnt wurde oder noch eine Benutzerzustimmung erfordert. ([Firefox-Bug 1609427](https://bugzil.la/1609427) und [Firefox-Bug 1915222](https://bugzil.la/1915222)).

#### Medien, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle werden jetzt unterstützt. Die `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Entwickler können diese Funktion verwenden, um Operationen auf jedem Videoframe durchzuführen, was eine effizientere Darstellung auf einer Leinwand, Videoanalyse, Synchronisation mit externen Audioquellen und mehr ermöglicht. Die Methode gibt einen Callback-Handle zurück, der an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anforderung abzubrechen. ([Firefox-Bug 1919367](https://bugzil.la/1919367), [Firefox-Bug 1800882](https://bugzil.la/1800882)).
- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Sie gibt ein Objekt zurück, das die akzeptierten Werte oder Wertbereiche für jede beschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mehrere Verbesserungen wurden implementiert, um WebDriver BiDi-Kommandos zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Zuvor waren Kommandos wie `browsingContext.setViewport` wahrscheinlich fehleranfällig aufgrund eines `AbortError`, sie werden jetzt einige Male wiederholt, um solche Probleme zu vermeiden. ([Firefox-Bug 1854942](https://bugzil.la/1854942), [Firefox-Bug 1918287](https://bugzil.la/1918287), [Firefox-Bug 1918672](https://bugzil.la/1918672), [Firefox-Bug 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated` Ereignis wird jetzt korrekt für lazy-geladene Frames ausgelöst. Zuvor wurde das Ereignis nur ausgelöst, wenn das iframe tatsächlich damit begann, seinen Inhalt zu laden. ([Firefox-Bug 1878166](https://bugzil.la/1878166))
- Netzwerkevents werden jetzt korrekt für gecachte Stylesheet-Anfragen ausgelöst. ([Firefox-Bug 1879438](https://bugzil.la/1879438))
- Netzwerk-Event-Timings nutzten zuvor die falsche Einheit und wurden in Mikrosekunden angegeben. Sie werden jetzt korrekt in Millisekunden gesetzt. ([Firefox-Bug 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerk-Event-Timings sollte jetzt genauer sein und wirklich der Zeit entsprechen, zu der die Anfrage tatsächlich gestartet wurde. ([Firefox-Bug 1922390](https://bugzil.la/1922390))

## Experimentelle Web-Features

Diese Features sind neu in Firefox 132, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie-Store-API:** `dom.cookieStore.enabled`.

  Die [Cookie-Store-API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher Dienstarbeitern [Service Worker](/de/docs/Web/API/Service_Worker_API) zur Verfügung gestellt werden). Ab Firefox 132 wurde ein Teil der Cookie-Store-API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:
  - Die [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle, jedoch wird `partitioned` nicht in Rückgabewerten enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Schnittstelle, mit Ausnahme der `partitioned`-Eigenschaften.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore)-Eigenschaft.
  - Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore)-Eigenschaft.

- **Die `fetch()` `keepalive`-Option:** `dom.fetchKeepalive.enabled`.

  Die globale [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive)-Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, bricht der Browser die zugehörige Anfrage nicht ab, wenn die Seite, die sie initiiert hat, entladen wird, bevor die Anfrage abgeschlossen ist.

  Dies ermöglicht es einer Fetch-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn Analysen am Ende einer Sitzung gesendet werden, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}} zugreifen). Es steht auch in [Dienstarbeitern](/de/docs/Web/API/Service_Worker_API) zur Verfügung. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>. Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Entwicklern, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, auf die gleiche Weise wie eingebettete Komponenten. Zum Beispiel können Sie auf Android einen Dialog mit der Zurück-Taste schließen: Diese Schnittstelle ermöglicht es Ihnen, auf ähnliche Weise eine benutzerdefinierte Seitenleiste zu schließen. ([Firefox-Bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine Komfortmethode, die einen Callback jeglicher Art (gibt zurück oder löst aus, synchron oder asynchron) entgegennimmt und sein Ergebnis in ein {{jsxref("Promise")}} einwickelt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu behandeln ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` mit Quelle**: <code>javascript.options.experimental.json_parse_with_source</code>. Der [`JSON.parse` Vorschlag für den Zugriff auf Quelltext](https://github.com/tc39/proposal-json-parse-with-source) erweitert das Verhalten von `JSON.parse`, um Funktionen bereitzustellen, die Probleme im Zusammenhang mit dem Präzisionsverlust bei der Umwandlung von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox-Bug 1913085](https://bugzil.la/1913085), [Firefox-Bug 1925334](https://bugzil.la/1925334)). Insbesondere die folgenden Funktionen sind jetzt verfügbar:
  - Der [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter) von `JSON.parse()`: Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beizubehalten, wenn dieses Objekt serialisiert wird.

## Ältere Versionen

{{Firefox_for_developers}}
