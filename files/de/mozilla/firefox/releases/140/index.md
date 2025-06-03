---
title: Firefox 140 für Entwickler
short-title: Firefox 140 (Beta)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 8827bbbc544491e3b0b23a6b2c85b7a8db9b41bb
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernt

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird nun unterstützt. Sie bietet eine Möglichkeit, beliebige Textbereiche in einem Dokument zu stylen, und verallgemeinert das Verhalten anderer Highlight-Pseudo-Elemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}.
  Sie definieren Textbereiche in JavaScript mit [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert werden, und registrieren sie dann unter einem Namen mit [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können einem registrierten Highlight Styles mit dem CSS [`::highlight`](/de/docs/Web/CSS/::highlight) Pseudo-Element zuweisen. ([Firefox-Bug 1964089](https://bugzil.la/1964089)).

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

- Ein Teil der [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird nun unterstützt ([Firefox-Bug 1958875](https://bugzil.la/1958875)).

  Die API ist eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann. Der unterstützte Teil der API umfasst:

  - Das [`CookieStore`](/de/docs/Web/API/CookieStore) Interface, zum Abrufen, Setzen und Löschen von Cookies.
  - Die Eigenschaften [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) und [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore), um `CookieStore`-Instanzen zu erhalten.
  - Das [`change`-Ereignis](/de/docs/Web/API/CookieStore/change_event) (und seine Schnittstelle [`CookieChangeEvent`](/de/docs/Web/API/CookieChangeEvent)), das im Hauptthread und in Service Worker-Kontexten ausgelöst wird, wenn Cookies gesetzt oder gelöscht werden.

    Beachten Sie, dass zwar alle unterstützten Cookie-Eigenschaften [gesetzt](/de/docs/Web/API/CookieStore/set) werden können, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) und im `change`-Ereignis zurückgegebenen Cookie-Objekte jedoch alle Eigenschaften außer `name` und `value` weglassen (entsprechend den Informationen, die durch [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden).

  Die folgenden Schnittstellen und Eigenschaften sind nicht implementiert: [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager) und [`ExtendableCookieChangeEvent`](/de/docs/Web/API/ExtendableCookieChangeEvent).

### Entschärfen von < und > in Attributen bei der HTML-Serialisierung

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen jetzt die `<`- und `>`-Zeichen durch `&lt;` und `&gt;` (jeweils) bei der Serialisierung von HTML in einen String. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann zurück in den DOM eingefügt wird. ([Firefox-Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Ereignis bietet in der Regel einen niedrigeren Latenzzugang zu Zeigerbewegungseigenschaften im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen und wird ausgelöst, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine präzise Eingabeverarbeitung erfordern und mit allein koalisierten `pointermove`-Ereignissen keine reibungslose Interaktion erreichen können.
  Da das Hören dieses Ereignisses die Leistung beeinflussen kann, sollten Sie es nicht für andere Anwendungsfälle verwenden. ([Firefox-Bug 1550462](https://bugzil.la/1550462)).

#### Medien, WebRTC und Web Audio

#### Entfernt

### WebAssembly

#### Entfernt

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-On-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Darüber hinaus ist `unspecified` nun der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox-Bug 1550032](https://bugzil.la/1550032))

### Entfernt

### Sonstiges

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 140 enthalten, jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt die Begrenzung des Browsers für die Anzahl der Aktionen zurück, die mit einer `Notification`, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen, verbunden werden können.
  Diese Funktion wurde in Firefox-Version 138 voreilig veröffentlicht, und diese Änderung macht sie nur im Nightly-Build verfügbar. ([Firefox-Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen die Dialoge schließen können, wie z.B. Benutzerinteraktionen außerhalb des Dialogs ("leichtes Schließen") oder programmatisches Schließen.
  ([Firefox-Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsam genutzten Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht blockierend und im Hauptthread verwendbar.
  ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

- **Priorisierte Aufgabenplanungs-API** (Nightly-Release).
  Die [Priorisierte Aufgabenplanungs-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode, um alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Diese fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist nun vollständig funktional.
  ([Firefox-Bug 1964407](https://bugzil.la/1964407)).

## Ältere Versionen

{{Firefox_for_developers}}
