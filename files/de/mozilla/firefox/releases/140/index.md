---
title: Firefox 140 für Entwickler
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: b30a619902914a5444ad075de601790933edc84f
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Nightly-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Ein Teil der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird jetzt unterstützt ([Firefox-Fehler 1958875](https://bugzil.la/1958875)).

  Die API ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann. Der unterstützte Teil der API umfasst:

  - Die Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore) zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Event](/de/docs/Web/API/CookieStore/change_event) (und seine Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Hauptthread- und Service-Worker-Kontext ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

    Beachten Sie, dass zwar alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekte und im `change`-Event nur die Eigenschaften `name` und `value` enthalten (entspricht den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).

  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

### Escape < und > in Attributen bei der HTML-Serialisierung

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` (entsprechend) bei der Serialisierung des HTML zu einem String. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann zurück in das DOM injiziert wird. ([Firefox-Fehler 1962084](https://bugzil.la/1962084)).

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

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} eingeführt. Zudem ist `unspecified` nun der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox-Fehler 1550032](https://bugzil.la/1550032))

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 140 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt das Browserlimit für die Anzahl der Aktionen zurück, die mit einer `Notification` verbunden werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Diese Funktion wurde in Firefox Version 138 verfrüht freigegeben, und diese Änderung macht sie nur in der Nightly-Build verfügbar. ([Firefox-Fehler 1963263](https://bugzil.la/1963263)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsam genutzten Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht blockierend und kann im Hauptthread verwendet werden.
  ([Firefox-Fehler 1467846](https://bugzil.la/1467846)).

- **Priorisierte Task-Scheduling-API** (Nightly-Version).
  Die [Priorisierte Task-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode zur Priorisierung aller Aufgaben, die zu einer Anwendung gehören, unabhängig davon, ob sie im Code eines Webseitenentwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.
  Dies fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist jetzt funktionskomplett.
  ([Firefox-Fehler 1964407](https://bugzil.la/1964407)).

## Ältere Versionen

{{Firefox_for_developers}}
