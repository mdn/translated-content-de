---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 5907e150b76a3bf271636342fcb66210107b4220
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt, wodurch die formatierte, lokalisierungssensible Darstellung von Zeitdauern möglich ist. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt bei Anfragen nach einer Seitenaktualisierung gesendet, die zu einer neuen Seite weiterleitet (falls durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.
  Die Seitenaktualisierung kann durch den {{httpheader("Refresh")}} Antwort-Header oder das äquivalente {{htmlelement("meta")}} Element im Markup ausgelöst werden (z. B. `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Seitenaktualisierungen auf derselben Seite als Navigation zu einem Seitenfragment behandelt werden: Da die Seite dabei nicht erneut angefragt wird, wird kein {{httpheader("Referer")}} gesendet.
  ([Firefox-Bug 1928291](https://bugzil.la/1928291))

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die maximale Größe von [Data URLs](/de/docs/Web/URI/Schemes/data) wurde von 32MB auf 512MB erhöht, was dem Limit von Chromium-Browsern entspricht ([Firefox-Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die sowohl im Hauptthread als auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox-Bug 1937477](https://bugzil.la/1937477)). Dazu gehören:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change` Ereignis](/de/docs/Web/API/CookieStore/change_event) (und dessen Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das sowohl im Hauptthread als auch im Service-Worker-Kontext ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass zwar alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/get) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und die im Ereignis `change` enthaltenen Objekte jedoch nur die Eigenschaften `name` und `value` enthalten (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).
  Die folgenden Interfaces und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie die Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} geben jetzt einen Fehler zurück, wenn das Menüelement nicht existiert. Zuvor wurde der Fehler ignoriert und das Promise erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 136 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie diese auf `true`. Weitere derartige Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Error.captureStackTrace()**: <code>javascript.options.experimental.error_capture_stack_trace</code>.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Stacktrace-Informationen auf einem bereitgestellten Objekt als {{jsxref("Error.stack")}}-Eigenschaft.
  Der Hauptanwendungsfall besteht darin, einen Stacktrace auf einem benutzerdefinierten Fehlerobjekt zu installieren, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox-Bug 1886820](https://bugzil.la/1886820)).

## Ältere Versionen

{{Firefox_for_developers}}
