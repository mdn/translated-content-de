---
title: Firefox 132 für Entwickler
slug: Mozilla/Firefox/Releases/132
l10n:
  sourceCommit: 5d887f80dfffb987220e421cd7da0bab2c97d6b3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 132, die Entwickler betreffen. Firefox 132 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [29. Oktober 2024](https://whattrainisitnow.com/release/?version=132) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernte Funktionen

### CSS

- Die Eigenschaft {{CSSXRef("text-emphasis-position")}} unterstützt nun den Wert `auto`, um sie mit {{CSSXRef("text-underline-position")}} in Einklang zu bringen ([Firefox-Bug 1919658](https://bugzil.la/1919658)).

#### Entfernte Funktionen

- Die CSS-Eigenschaft [`-moz-user-modify`](/de/docs/Web/CSS/user-modify) wurde entfernt. Diese Eigenschaft wurde zugunsten des globalen Attributs [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) veraltet. ([Firefox-Bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, der darauf abzielt, Funktionen bereitzustellen, um Probleme im Zusammenhang mit Präzisionsverlust beim Konvertieren von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Texten zu mildern ([Firefox-Bug 1913085](https://bugzil.la/1913085)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das `JSON.parse()` [`reviver`-Parameter-`context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der analysiert wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das einen Teil des JSON-Textes enthält, der dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu bewahren, wenn dieses Objekt in eine Zeichenkette umgewandelt wird.

#### Entfernte Funktionen

### SVG

#### Entfernte Funktionen

### HTTP

#### Entfernte Funktionen

- HTTP/2 Server Push ist standardmäßig deaktiviert, da die Einstellung `network.http.http2.allow-push` jetzt auf `false` gesetzt ist. Diese Funktion wird von keinem anderen großen Browser mehr unterstützt, und die Implementierung könnte in einer zukünftigen Version komplett entfernt werden. ([Firefox-Bug 1915848](https://bugzil.la/1915848)).

### Sicherheit

#### Entfernte Funktionen

### APIs

- Die Eigenschaften [`drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace) und [`unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) der Schnittstellen [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) werden jetzt unterstützt. Diese spezifizieren den Farbraum des WebGL-Zeichenpuffers und den Farbraum, in den beim Import von Texturen konvertiert werden soll. ([Firefox-Bug 1885491](https://bugzil.la/1885491), [Firefox-Bug 1885446](https://bugzil.la/1885446)).
- Die Eigenschaft [`Notification.silent`](/de/docs/Web/API/Notification/silent) wird jetzt unterstützt und steuert, ob Systembenachrichtigungen lautlos sein sollen. Wenn `silent: true` im [`Notification()`](/de/docs/Web/API/Notification/Notification)-Konstruktor angegeben ist, wird die resultierende Systembenachrichtigung ohne begleitende Geräusche oder Vibrationen ausgegeben, unabhängig von den Geräteeinstellungen ([Firefox-Bug 1809028](https://bugzil.la/1809028)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Methode [`MediaStreamTrack.getCapabilities()`](/de/docs/Web/API/MediaStreamTrack/getCapabilities) wird jetzt unterstützt. Diese gibt ein Objekt zurück, das die akzeptierten Werte oder Wertbereiche für jede beschränkbare Eigenschaft des zugehörigen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) detailliert beschreibt ([Firefox-Bug 1179084](https://bugzil.la/1179084)).

#### Entfernte Funktionen

### WebAssembly

#### Entfernte Funktionen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernte Funktionen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen werden neu in Firefox 132 ausgeliefert, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Cookie Store API:** `dom.cookieStore.enabled`.

  Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die die Ereignisschleife nicht blockiert und nicht auf [`Document`](/de/docs/Web/API/Document) angewiesen ist (sie kann daher für [Service Worker](/de/docs/Web/API/Service_Worker_API) verfügbar gemacht werden). Ab Firefox 132 wurde ein Teil der Cookie Store API implementiert. ([Firefox-Bug 1800882](https://bugzil.la/1800882)). Dies umfasst:

  - Die [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle, jedoch ist `partitioned` in den Rückgabewerten nicht enthalten.
  - Die [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)-Schnittstelle, ohne `partitioned`-Eigenschaften.
  - Die [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore)-Eigenschaft.
  - Die [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore)-Eigenschaft.

- **Die `fetch()`-`keepalive`-Option:** `dom.fetchKeepalive.enabled`.

  Die globale [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode hat eine [`keepalive`](/de/docs/Web/API/RequestInit#keepalive)-Initialisierungsoption. Wenn `keepalive` auf `true` gesetzt ist, wird der Browser die zugehörige Anfrage nicht abbrechen, wenn die Seite, die sie initiiert hat, vor Abschluss der Anfrage entladen wird.

  Dies ermöglicht es einer Fetch-Anfrage, als Alternative zu [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon) zu fungieren, wenn Analysen am Ende einer Sitzung gesendet werden, was einige Vorteile bietet (Sie können andere HTTP-Methoden als [`POST`](/de/docs/Web/HTTP/Methods/POST) verwenden, Anfrageeigenschaften anpassen und auf die Serverantwort über die Erfüllung des Fetch-{{jsxref("Promise")}}-Versprechens zugreifen). Es ist auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verfügbar. ([Firefox-Bug 1906952](https://bugzil.la/1906952)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} ist eine praktische Methode, die ein Callback jeglicher Art (gibt zurück oder löst aus, synchron oder asynchron) nimmt und das Ergebnis in ein {{jsxref("Promise")}} einwickelt, sodass Promise-Semantiken (z. B. {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) verwendet werden können, um es zu handhaben. ([Firefox-Bug 1905364](https://bugzil.la/1905364)).

## Ältere Versionen

{{Firefox_for_developers}}
