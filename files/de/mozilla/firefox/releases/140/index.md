---
title: Firefox 140 für Entwickler
short-title: Firefox 140 (Beta)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: c13fbde8628842d09c1de3ef03575fe67e94a7d8
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernungen

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird nun unterstützt. Sie bietet einen Mechanismus zum Stylen von beliebigen Textbereichen in einem Dokument und verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}.
  Sie definieren Textbereiche in JavaScript mit [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert werden, und registrieren sie dann mit einem Namen über [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können einem registrierten Highlight mit dem CSS-Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) Stile zuweisen. ([Firefox bug 1964089](https://bugzil.la/1964089)).

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

- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird nun unterstützt ([Firefox bug 1958875](https://bugzil.la/1958875)).

  Dies bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Die API wird unterstützt, mit der Ausnahme, dass Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) der Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore) sowie im `change`-Ereignis zurückgegeben werden, alle Eigenschaften außer `name` und `value` auslassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können weiterhin [gesetzt](/de/docs/Web/API/CookieStore/set) werden und werden intern verwendet.

### Escape < und > in Attributen beim Serialisieren von HTML

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen nun die Zeichen `<` und `>` mit `&lt;` und `&gt;` (jeweils) beim Serialisieren des HTML in einen String. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann zurück in das DOM eingefügt wird. ([Firefox bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird nun unterstützt.
  Dieses Ereignis bietet typischerweise einen Zugang zu Zeigerbewegungseigenschaften mit niedrigerer Latenz im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen und wird ausgelöst, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine hochpräzise Eingabesteuerung benötigen und die eine sanfte Interaktion mit alleine gesammelten `pointermove`-Ereignissen nicht erreichen können.
  Da das Lauschen auf dieses Ereignis die Leistung beeinträchtigen kann, sollten Sie es für andere Anwendungsfälle vermeiden.
  ([Firefox bug 1550462](https://bugzil.la/1550462)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} wurde hinzugefügt. Darüber hinaus ist `unspecified` nun der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox bug 1550032](https://bugzil.la/1550032))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features werden in Firefox 140 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt das Browser-Limit für die Anzahl von Aktionen zurück, die mit einer `Notification` verknüpft werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde vorzeitig in der Firefox-Version 138 veröffentlicht, und diese Änderung macht es nur im Nightly-Build verfügbar. ([Firefox bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen die Dialoge schließen können, wie Benutzereingaben außerhalb des Dialogs ("light dismiss") oder programmatisches Schließen.
  ([Firefox bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einer gemeinsam genutzten Speicherstelle und gibt ein Objekt zurück, das das Ergebnis der Operation repräsentiert.
  Sie ist nicht blockierend und kann im Hauptthread verwendet werden.
  ([Firefox bug 1467846](https://bugzil.la/1467846)).

- **Prioritized Task Scheduling API** (Nightly-Version).
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind.
  Dies fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist jetzt vollständig funktionsfähig.
  ([Firefox bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - nur Desktop): `dom.closewatcher.enabled`.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Ihnen, Komponenten zu implementieren, die mit geräte-eigenen Mechanismen geschlossen werden können, auf dieselbe Weise wie eingebaute Komponenten. Auf Windows können Sie beispielsweise diese Schnittstelle verwenden, um eine benutzerdefinierte Seitenleiste zu schließen, wenn Benutzer die <kbd>Esc</kbd>-Taste drücken. ([Firefox bug 1966459](https://bugzil.la/1966459)).

## Ältere Versionen

{{Firefox_for_developers}}
