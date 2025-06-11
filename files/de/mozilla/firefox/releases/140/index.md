---
title: Firefox 140 für Entwickler
short-title: Firefox 140 (Beta)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 43e4a94410d02871ecca56c4a7e015275708c6be
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und erscheint am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140).

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird jetzt unterstützt. Sie bietet einen Mechanismus zum Stylen beliebiger Textranges in einem Dokument und generalisiert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}.
  Sie definieren Textranges in JavaScript mit Hilfe von [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind und registrieren sie dann mit einem Namen mithilfe von [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können einem registrierten Highlight mit dem CSS-Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) Stile zuweisen. ([Firefox-Bug 1964089](https://bugzil.la/1964089)).

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

  Diese bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service-Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Die API wird unterstützt, mit der Ausnahme, dass von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle sowie im `change`-Ereignis zurückgegebene Cookie-Objekte alle Eigenschaften außer `name` und `value` weglassen (was den Informationen entspricht, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können dennoch [gesetzt](/de/docs/Web/API/CookieStore/set) werden und werden intern verwendet.

### Escape < und > in Attributen beim Serialisieren von HTML

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` (jeweils), wenn das HTML in einen String serialisiert wird. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann wieder in den DOM injiziert wird.
  ([Firefox-Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Ereignis bietet typischerweise einen Zugriff mit niedriger Latency auf Zeigebewegungseigenschaften im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen und wird ausgelöst, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine hochpräzise Eingabeverarbeitung erfordern und keine gleichmäßige Interaktion mit allein koaleszierten `pointermove`-Ereignissen erreichen können.
  Da das Abhören dieses Ereignisses die Leistung beeinträchtigen kann, sollten Sie es für andere Anwendungsfälle vermeiden.
  ([Firefox-Bug 1550462](https://bugzil.la/1550462)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle und ihre zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) wurden entfernt. ([Firefox-Bug 1963043](https://bugzil.la/1963043)).

### WebAssembly

#### Entfernungen

### WebDriver-Kompatibilität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} wurde hinzugefügt. Zusätzlich ist `unspecified` jetzt der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox-Bug 1550032](https://bugzil.la/1550032))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Features sind in Firefox 140 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt die Grenze des Browsers für die Anzahl der Aktionen zurück, die mit einer `Notification` verbunden werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde in Firefox-Version 138 verfrüht veröffentlicht und diese Änderung macht es nur im Nightly-Build verfügbar. ([Firefox-Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen in der Lage sind, die Dialoge zu schließen, wie z.B. Benutzerinteraktion außerhalb des Dialogs („leichtes Verwerfen“) oder programmgesteuertes Schließen.
  ([Firefox-Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsam genutzten Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht blockierend und im Haupt-Thread verwendbar.
  ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

- **Priorisierte Aufgabenplanung API** (Nightly-Version).
  Die [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode zur Priorisierung aller Aufgaben einer Anwendung, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und Frameworks definiert sind.
  Diese fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen sie erstellt wurde, ausgelöst wird.
  Die API ist nun funktionsbereit.
  ([Firefox-Bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - nur Desktop): `dom.closewatcher.enabled`.
  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Ihnen, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, genauso wie integrierte Komponenten. Unter Windows können Sie beispielsweise diese Schnittstelle verwenden, um eine benutzerdefinierte Seitenleiste zu schließen, wenn Benutzer die <kbd>Esc</kbd>-Taste drücken. ([Firefox-Bug 1966459](https://bugzil.la/1966459)).

## Ältere Versionen

{{Firefox_for_developers}}
