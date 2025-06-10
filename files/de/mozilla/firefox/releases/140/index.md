---
title: Firefox 140 für Entwickler
short-title: Firefox 140 (Beta)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 335a6f38068e697c64009243648c75fb97650402
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und erscheint am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140).

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird jetzt unterstützt. Sie bietet eine Möglichkeit, beliebige Textbereiche in einem Dokument zu stylen und verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}.
  Sie definieren Textbereiche in JavaScript mithilfe von [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und registrieren sie dann mit einem Namen mittels [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können Stile auf ein registriertes Highlight mit dem CSS-Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) anwenden. ([Firefox-Bug 1964089](https://bugzil.la/1964089)).

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

- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird jetzt unterstützt ([Firefox-Bug 1958875](https://bugzil.la/1958875)).

  Dies bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Die API wird mit der Ausnahme unterstützt, dass Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) der Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore) und im `change`-Event zurückgegeben werden, alle Eigenschaften außer `name` und `value` weglassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können weiterhin [gesetzt](/de/docs/Web/API/CookieStore/set) werden und werden intern verwendet.

### Escape < und > in Attributen bei der Serialisierung von HTML

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` (jeweils), wenn HTML in einen String serialisiert wird. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann zurück in das DOM injiziert wird.
  ([Firefox-Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Event](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Event bietet in der Regel einen schnelleren Zugriff auf Zeigerbewegungseigenschaften im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Events, da es ausgelöst wird, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine hochpräzise Eingabeverarbeitung erfordern und die mit koaleszierten `pointermove`-Events alleine keine reibungslose Interaktion erreichen können.
  Da das Hören auf dieses Event die Leistung beeinträchtigen kann, sollten Sie es nicht für andere Anwendungsfälle verwenden.
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

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Darüber hinaus ist `unspecified` jetzt der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox-Bug 1550032](https://bugzil.la/1550032))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind in Firefox 140 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt das Browser-Limit für die Anzahl der Aktionen zurück, die mit einer `Notification` verbunden werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde vorzeitig in Firefox-Version 138 veröffentlicht, und diese Änderung macht es nur im Nightly-Build verfügbar. ([Firefox-Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um anzugeben, welche Mechanismen in der Lage sind, die Dialoge zu schließen, wie z.B. Benutzerinteraktion außerhalb des Dialogs ("leichte Verwerfung") oder programmatisches Schließen.
  ([Firefox-Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron auf eine gemeinsame Speicherstelle und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht blockierend und auf dem Hauptthread verwendbar.
  ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

- **API für priorisiertes Task-Scheduling** (Nightly-Version).
  Die [API für priorisiertes Task-Scheduling](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Webseitendesigners oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, von denen es erstellt wurde, ausgelöst wird.
  Die API ist nun vollständig funktionsfähig.
  ([Firefox-Bug 1964407](https://bugzil.la/1964407)).

## Ältere Versionen

{{Firefox_for_developers}}
