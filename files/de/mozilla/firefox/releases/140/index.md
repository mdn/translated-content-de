---
title: Firefox 140 für Entwickler
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 05a220b3155a2755ebcd2229eb094db5ad4ae9f4
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernt

### CSS

#### Entfernt

### JavaScript

#### Entfernt

### SVG

#### Entfernt

### HTTP

#### Entfernt

### Sicherheit

#### Entfernt

### APIs

- Ein Teil der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird jetzt unterstützt ([Firefox Bug 1958875](https://bugzil.la/1958875)).

  Die API ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann. Der unterstützte Teil der API umfasst:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Haupt-Thread- und Service-Worker-Kontext ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

  Beachten Sie, dass während alle unterstützten Cookie-Eigenschaften mit [set](/de/docs/Web/API/CookieStore/set) gesetzt werden können, die Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegeben werden, sowie im `change`-Ereignis, nur die Eigenschaften `name` und `value` enthalten (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).

  Die folgenden Interfaces und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

### Maskierung von < und > in Attributen bei der Serialisierung von HTML

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` (jeweils), wenn das HTML in einen String serialisiert wird. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann wieder in das DOM eingefügt wird.
  ([Firefox Bug 1962084](https://bugzil.la/1962084)).

#### DOM

#### Medien, WebRTC und Web-Audio

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Außerdem ist `unspecified` jetzt der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox Bug 1550032](https://bugzil.la/1550032))

### Entfernt

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 140 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) schreibgeschützte statische Eigenschaft gibt die Browserobergrenze der Anzahl von Aktionen zurück, die mit einer `Notification` verbunden werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde vorzeitig in der Firefox-Version 138 veröffentlicht, und diese Änderung macht es nur im Nightly-Build verfügbar. ([Firefox Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen in der Lage sind, die Dialoge zu schließen, wie z.B. Benutzerinteraktionen außerhalb des Dialogs ("leichte Ablehnung") oder Programm-Schließungen.
  ([Firefox Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die {{jsxref("Atomics.waitAsync()")}} statische Methode wartet asynchron an einer gemeinsam genutzten Speicherstelle und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht-blockierend und auf dem Haupt-Thread nutzbar.
  ([Firefox Bug 1467846](https://bugzil.la/1467846)).

- **API für priorisierte Aufgabenplanung** (Nightly-Version).
  Die [API für priorisierte Aufgabenplanung](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben, die zu einer Anwendung gehören, zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies fügt Unterstützung für die [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) statische Methode hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist jetzt vollständig implementiert.
  ([Firefox Bug 1964407](https://bugzil.la/1964407)).

## Ältere Versionen

{{Firefox_for_developers}}
