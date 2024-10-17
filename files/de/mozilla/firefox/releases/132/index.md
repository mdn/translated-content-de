---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 527e1a55794fd458ea07f0d0b95e6f121e244704
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) ausgeliefert.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die {{CSSXRef("text-emphasis-position")}}-Eigenschaft unterstützt jetzt den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).

#### Entfernungen

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, was darauf abzielt, Funktionen bereitzustellen, um Probleme im Zusammenhang mit dem Präzisionsverlust bei der Umwandlung von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mindern ([Firefox-Bug 1913085](https://bugzil.la/1913085)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wurde.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beizubehalten, wenn dieses Objekt serialisiert wird.

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Einstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist. Diese Funktion wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Sicherheit

#### Entfernungen

### APIs

- Die [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) Eigenschaften der [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Schnittstellen werden jetzt unterstützt. Diese spezifizieren den Farbraum des WebGL-Zeichnungsbuffers und den Farbraum, in den beim Importieren von Texturen konvertiert werden soll ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die [`Notification.silent`](/de/docs/Web/API/Notification/silent) Eigenschaft wird jetzt unterstützt, die steuert, ob Systembenachrichtigungen stummgeschaltet werden sollen. Wenn `silent: true` im [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor angegeben wird, wird die resultierende Systembenachrichtigung ohne begleitende Töne oder Vibrationen ausgestellt, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder den Wertebereich für jede einschränkbare Eigenschaft der zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) enthält ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 132 neu veröffentlicht, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, auf {{jsxref("Promise")}} basierende Methode zur Verwaltung von Cookies, die den Ereignisschleifen nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, jedoch ist `partitioned` nicht in den Rückgabewerten enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, mit Ausnahme der `partitioned` Eigenschaften.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
  - Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der zugehörige Antrag vom Browser nicht abgebrochen, wenn die Seite, die ihn initiiert hat, entladen wird, bevor der Antrag abgeschlossen ist.

  Dies ermöglicht es einer Fetch-Anforderung, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn am Ende einer Sitzung Analysen gesendet werden, was einige Vorteile bietet (Sie können andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anforderungseigenschaften anpassen und über die Erfüllung des Fetch-{{jsxref("Promise")}} auf die Serverantwort zugreifen). Es ist auch in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine praktische Methode, die einen Rückruf jeglicher Art annimmt (gibt zurück oder wirft, synchron oder asynchron) und ihr Ergebnis in einem {{jsxref("Promise")}} einpackt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu verarbeiten ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

## Ältere Versionen

{{Firefox_for_developers}}
