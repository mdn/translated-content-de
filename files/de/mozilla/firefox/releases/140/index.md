---
title: Firefox 140 für Entwickler
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 8a6d1f1b62c78a5f83b0557e6dd9f056e3946a58
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

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

- Ein Teil der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird jetzt unterstützt ([Firefox-Bug 1958875](https://bugzil.la/1958875)).

  Die API ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann. Der unterstützte Teil der API umfasst:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore)-Interface zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) zum Abrufen von `CookieStore`-Instanzen.
  - Das [`change` event](/de/docs/Web/API/CookieStore/change_event) (und sein Interface [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Hauptthread und in Service-Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

    Beachten Sie, dass bei den von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) zurückgegebenen Cookie-Objekten sowie im `change`-Event alle anderen Eigenschaften außer `name` und `value` weggelassen werden (entspricht den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).

  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

### Escape < und > in Attributen bei der Serialisierung von HTML

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen nun die Zeichen `<` und `>` beim Serialisieren des HTMLs in einen String durch `&lt;` und `&gt;`. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann wieder in den DOM injiziert wird.
  ([Firefox-Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate` event](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Ereignis bietet typischerweise einen niedrigeren Latenzzugang zu Zeigerbewegungseigenschaften im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen und wird ausgelöst, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine hochpräzise Eingabeverarbeitung erfordern und die mit zusammengefassten `pointermove`-Ereignissen allein keine flüssige Interaktion erreichen können.
  Da das Anhören dieses Ereignisses die Leistung beeinträchtigen kann, sollten Sie es für andere Anwendungsfälle vermeiden.
  ([Firefox-Bug 1550462](https://bugzil.la/1550462)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Zusätzlich ist `unspecified` jetzt der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox-Bug 1550032](https://bugzil.la/1550032))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features werden in Firefox 140 bereitgestellt, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt das Browserlimit für die Anzahl der Aktionen zurück, die mit einer `Notification` verknüpft werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde frühzeitig in Firefox Version 138 eingeführt, und diese Änderung macht es nur im Nightly-Build verfügbar. ([Firefox-Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um zu spezifizieren, welche Mechanismen in der Lage sind, die Dialoge zu schließen, wie z.B. Benutzerinteraktionen außerhalb des Dialogs ("leichtes Schließen") oder programmatisches Schließen.
  ([Firefox-Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einer gemeinsamen Speicherstelle und gibt ein Objekt zurück, das das Ergebnis des Vorgangs darstellt.
  Sie ist nicht blockierend und im Hauptthread nutzbar.
  ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

- **API zur priorisierten Aufgabenplanung** (Nightly-Release).
  Die [API zur priorisierten Aufgabenplanung](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers, in Drittanbieter-Bibliotheken oder Frameworks definiert sind.
  Dies fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist jetzt vollständig implementiert.
  ([Firefox-Bug 1964407](https://bugzil.la/1964407)).

## Ältere Versionen

{{Firefox_for_developers}}
