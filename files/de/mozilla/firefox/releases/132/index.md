---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 1f8ad5499126f6f837b489f843dc8a7173771e76
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}} Eigenschaft unterstützt jetzt den `auto` Wert, um sie zur {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox Fehler 1919658](https://bugzil.la/1919658)).

#### Entfernungen

- Die [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) CSS-Eigenschaft wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) veraltet. ([Firefox Fehler 1920118](https://bugzil.la/1920118)).

### JavaScript

- Der [JSON parse with source Vorschlag](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, der darauf abzielt, Funktionen bereitzustellen, um Probleme mit dem Verlust von Genauigkeit beim Konvertieren von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox Fehler 1913085](https://bugzil.la/1913085)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `JSON.parse()` [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "roh JSON"-Objekt, das ein Stück JSON-Text enthält, der dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beim Stringifizieren des Objekts zu erhalten.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Einstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist.
  Dieses Feature wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox Fehler 1915848](https://bugzil.la/1915848)).

### Sicherheit

#### Entfernungen

### Datenschutz

- Alle [Third-Party-Cookies](/de/docs/Web/Privacy/Third-party_cookies) werden jetzt im [Strengen erweiterten Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert. ([Firefox Fehler 1918037](https://bugzil.la/1918037)).

### APIs

- Die [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) Eigenschaften der [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Schnittstellen werden jetzt unterstützt. Diese geben den Farbraum des WebGL-Zeichenpuffers und den Farbraum an, in den beim Importieren von Texturen konvertiert werden soll. ([Firefox Fehler 1885491](https://bugzil.la/1885491), [Firefox Fehler 1885446](https://bugzil.la/1885446)).
- Die [`Notification.silent`](/de/docs/Web/API/Notification/silent) Eigenschaft wird jetzt unterstützt und steuert, ob Systembenachrichtigungen stumm sein sollen. Wenn `silent: true` im [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Sounds oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox Fehler 1809028](https://bugzil.la/1809028)).
- Das `fetchpriority` Attribut der {{htmlelement("link")}}, {{htmlelement("script")}}, und {{htmlelement("img")}} Elemente, die `fetchPriority` Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement), [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement), und [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstellen, der [`options.priority`](/de/docs/Web/API/RequestInit#priority) Parameter, der an den [`Request()` Konstruktor](/de/docs/Web/API/Request/Request) übergeben wird, und die `fetchpriority` Direktive im HTTP {{httpheader("Link")}} Header, werden jetzt unterstützt. Diese erlauben es Entwicklern, einen Hinweis auf die relative Priorität zum Abrufen einer bestimmten Ressource im Vergleich zu anderen Ressourcen des gleichen Typs zu geben, und können zusammen mit anderen Möglichkeiten verwendet werden, um die Priorität festzulegen, wie z. B. Preloading. ([Firefox Fehler 1854077](https://bugzil.la/1854077)).

#### DOM

#### Media, WebRTC und Web Audio

- Die Methoden [`requestVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) und [`cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle werden jetzt unterstützt. `requestVideoFrameCallback()` registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Entwickler können diese Funktion verwenden, um Operationen auf jedem Videobild durchzuführen, was effizienteres Malen auf einer Leinwand, Videoanalysen, Synchronisation mit externen Audioquellen und dergleichen ermöglicht. Die Methode gibt ein Callback-Handle zurück, das an `cancelVideoFrameCallback()` übergeben werden kann, um die ausstehende Callback-Anfrage abzubrechen. ([Firefox Fehler 1919367](https://bugzil.la/1919367), [Firefox Fehler 1800882](https://bugzil.la/1800882)).
- Die [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) Methode wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) beschreibt ([Firefox Fehler 1179084](https://bugzil.la/1179084)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Mehrere Verbesserungen wurden implementiert, um WebDriver-BiDi-Befehle zuverlässiger zu machen, wenn sie während der Navigation oder mit neu erstellten Tabs verwendet werden. Zuvor führten Befehle wie `browsingContext.setViewport` wahrscheinlich aufgrund eines `AbortError` zu einem Fehler, sie werden jetzt ein paar Mal wiederholt, um solche Probleme zu vermeiden. ([Firefox Fehler 1854942](https://bugzil.la/1854942), [Firefox Fehler 1918287](https://bugzil.la/1918287), [Firefox Fehler 1918672](https://bugzil.la/1918672), [Firefox Fehler 1921756](https://bugzil.la/1921756))
- Das `browsingContext.contextCreated` Ereignis wird jetzt korrekt für lazy-geladene Frames ausgegeben. Zuvor wurde das Ereignis nur ausgelöst, wenn das `iframe` tatsächlich begann, seinen Inhalt zu laden. ([Firefox Fehler 1878166](https://bugzil.la/1878166))
- Netwerkereignisse werden jetzt korrekt für zwischengespeicherte Stylesheet-Anfragen ausgegeben. ([Firefox Fehler 1879438](https://bugzil.la/1879438))
- Netzwerkereignis-Timings verwendeten zuvor die falsche Einheit und wurden in Mikrosekunden angegeben. Sie werden jetzt korrekt in Millisekunden angegeben. ([Firefox Fehler 1916685](https://bugzil.la/1916685))
- Die `requestTime` aus den Netzwerkereignis-Timings sollten jetzt genauer sein und tatsächlich die Zeit entsprechen, zu der die Anfrage tatsächlich begonnen wurde. ([Firefox Fehler 1922390](https://bugzil.la/1922390))

## Änderungen für Add-on-Entwickler

### Entfernungen

### Andere

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 132 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher bei [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox Fehler 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, aber `partitioned` ist in Rückgabewerten nicht enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, ausgenommen `partitioned` Eigenschaften.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
  - Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode verfügt über eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird.

  Dies ermöglicht es einer `fetch`-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) beim Senden von Analysen am Ende einer Sitzung zu funktionieren, was einige Vorteile hat (Sie können HTTP-Methoden außer [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und auf die Serverantwort über die Erfüllung des `fetch`-{{jsxref("Promise")}}-Objekts zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox Fehler 1906952](https://bugzil.la/1906952)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine bequeme Methode, die einen Rückruf jeglicher Art (gibt zurück oder wirft, synchron oder asynchron) nimmt und ihr Ergebnis in ein {{jsxref("Promise")}} einwickelt, so dass Promise-Semantik (z. B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden kann, um es zu handhaben ([Firefox Fehler 1905364](https://bugzil.la/1905364)).

## Ältere Versionen

{{Firefox_for_developers}}
