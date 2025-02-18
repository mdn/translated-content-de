---
title: Firefox 136 für Entwickler
slug: Mozilla/Firefox/Releases/136
l10n:
  sourceCommit: 347da2b26f88a66a48ec4c9cf22c1867dce52dd1
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 136, die Entwickler betreffen. Firefox 136 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [4. März 2025](https://whattrainisitnow.com/release/?version=136) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

- Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) erlaubt die Autokorrektur in bearbeitbaren Textelementen, einschließlich: der meisten Arten von Text-{{htmlelement("input")}}-Elementen, {{htmlelement("textarea")}}-Elementen und Elementen, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben. Das spezifische Verhalten der Autokorrektur hängt vom User-Agent und dem darunterliegenden Betriebssystem ab. ([Firefox-Bug 1927977](https://bugzil.la/1927977)).

#### Entfernt

### CSS

#### Entfernt

### JavaScript

- {{jsxref("Intl.DurationFormat")}} wird jetzt unterstützt und ermöglicht eine lokalsensitive Formatierung von Zeitdauern. ([Firefox-Bug 1933303](https://bugzil.la/1933303)).

#### Entfernt

### SVG

#### Entfernt

### HTTP

- Der {{httpheader("Referer")}} HTTP-Header wird jetzt bei Anfragen gesendet, die einem Seiten-Refresh folgen, der zu einer neuen Seite weiterleitet (wenn es von der {{httpheader("Referrer-Policy")}} erlaubt ist), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL gesetzt, nachdem die Navigation erfolgt ist.
  Der Seiten-Refresh kann durch den {{httpheader("Refresh")}}-Antwort-Header oder durch ein entsprechendes {{htmlelement("meta")}} im Markup ausgelöst werden (zum Beispiel `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Beachten Sie, dass Seitenaktualisierungen auf derselben Seite als Navigation zu einem Fragment derselben Seite behandelt werden: Da die Seite nicht erneut angefordert wird, wird der {{httpheader("Referer")}}-Header nicht gesendet.
  ([Firefox-Bug 1928291](https://bugzil.la/1928291))

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

- Die maximale Größe von [Data URLs](/de/docs/Web/URI/Schemes/data) wurde von 32 MB auf 512 MB erhöht, um dem Limit von Chromium-Browsern zu entsprechen ([Firefox-Bug 1911300](https://bugzil.la/1911300)).
- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Ein Teil der Cookie Store API wurde implementiert ([Firefox-Bug 1937477](https://bugzil.la/1937477)). Dazu gehören:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Haupt-Thread und in Service-Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass, obwohl beliebige unterstützte Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und das `change`-Ereignis nur die Eigenschaften `name` und `value` enthalten (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die folgenden Interfaces und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("menus.update")}} und {{WebExtAPIRef("menus.remove")}} sowie deren Aliase {{WebExtAPIRef("contextMenus.update")}} und {{WebExtAPIRef("contextMenus.remove")}} schlagen jetzt mit einem Fehler fehl, wenn das Menü-Element nicht existiert. Bisher wurde der Fehler ignoriert und die Promise erfüllt. ([Firefox-Bug 1688743](https://bugzil.la/1688743)).

### Entfernt

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 136 integriert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Error.captureStackTrace()**: <code>javascript.options.experimental.error_capture_stack_trace</code>.
  Die statische Methode {{jsxref("Error.captureStackTrace()")}} installiert Informationen zum Stack-Trace auf einem bereitgestellten Objekt als Eigenschaft {{jsxref("Error.stack")}}.
  Ihr Hauptanwendungsfall ist das Installieren eines Stack-Traces auf einem benutzerdefinierten Fehlerobjekt, das nicht von der {{jsxref("Error")}}-Schnittstelle abgeleitet ist.
  ([Firefox-Bug 1886820](https://bugzil.la/1886820)).

## Ältere Versionen

{{Firefox_for_developers}}
