---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 16197cb644d8ec528220e8291b7d4e74cc494c1a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Web-Entwickler

### Entwickler-Tools

### HTML

#### Entfernt

### CSS

#### Entfernt

### JavaScript

- Der [Vorschlag für JSON-Parse mit Quellenangabe](https://github.com/tc39/proposal-json-parse-with-source) wird nun unterstützt, um Funktionen bereitzustellen, die Probleme beim Verlust der Genauigkeit bei der Umwandlung von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text adressieren ([Firefox-Bug 1913085](https://bugzil.la/1913085)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `JSON.parse()` [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Überprüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, das in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu erhalten, wenn dieses Objekt in einen String umgewandelt wird.

#### Entfernt

### SVG

#### Entfernt

### HTTP

#### Entfernt

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Einstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist. Diese Funktion wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version vollständig entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Sicherheit

#### Entfernt

### APIs

- Die [`Notification.silent`](/de/docs/Web/API/Notification/silent) Eigenschaft wird jetzt unterstützt, welche steuert, ob Systembenachrichtigungen stumm sein sollen. Wenn `silent: true` im [`Notification()`](/de/docs/Web/API/Notification/Notification) Konstruktor angegeben ist, wird die resultierende Systembenachrichtigung ohne begleitende Geräusche oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder Wertbereiche für jede einschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernt

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 132, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die nicht das Ereignisloop blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore) Schnittstelle, jedoch ohne dass `partitioned` in den Rückgabewerten enthalten ist.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent) Schnittstelle, ohne `partitioned`-Eigenschaften.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) Eigenschaft.
  - Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) Eigenschaft.

- **Die `fetch()` `keepalive` Option:** `dom.fetchKeepalive.enabled`.

  Die globale [`fetch()`](/de/docs/Web/API/Window/fetch) Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive) Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der zugehörige Request vom Browser nicht abgebrochen, auch wenn die Seite, die ihn initiiert hat, vor Abschluss des Requests entladen wird.

  Dies ermöglicht einen Fetch-Request als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) für das Senden von Analysen am Ende einer Sitzung, was einige Vorteile hat (man kann andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Request-Eigenschaften anpassen und auf die Serverantwort über die Erfüllung des fetch-{{jsxref("Promise")}}-Objekts zugreifen). Er ist auch in [Service Workers](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine bequeme Methode, die einen Rückruf jeglicher Art (rückgibt oder wirft, synchron oder asynchron) nimmt und dessen Ergebnis in einem {{jsxref("Promise")}} einwickelt, sodass Promise-Semantiken (z.B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um damit umzugehen ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

## Ältere Versionen

{{Firefox_for_developers}}
