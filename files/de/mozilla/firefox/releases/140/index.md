---
title: Firefox 140 für Entwickler
short-title: Firefox 140 (Beta)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 2babe42ac6abfe3d44616d52cb3279e273a8a2fd
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

### HTML

#### Entfernungen

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird jetzt unterstützt. Sie bietet einen Mechanismus zur Gestaltung beliebiger Textbereiche in einem Dokument und verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}.
  Sie definieren Textbereiche in JavaScript mithilfe von [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und registrieren sie anschließend mit einem Namen unter Verwendung von [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können einem registrierten Highlight mit dem CSS-Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) Stile zuweisen. ([Firefox Bug 1964089](https://bugzil.la/1964089)).

#### Entfernungen

- Die Benutzeragenten-Stile für `<h1>`-Elemente, die innerhalb von [Strukturierungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt sind, wurden entfernt, im Anschluss an die [Entfernung des Outline-Algorithmus](https://github.com/whatwg/html/pull/7829) aus der HTML-Spezifikation. Früher erschienen `<h1>`-Überschriften, die innerhalb von `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt waren, kleiner. Jetzt haben `<h1>`-Elemente eine konsistente Schriftgröße, unabhängig von der Verschachtelung. ([Firefox Bug 1964922](https://bugzil.la/1964922)).

### JavaScript

#### Entfernungen

### SVG

- Das SVG-Attribut {{SVGAttr("fetchpriority")}} wird nun für die SVG-Elemente {{SVGElement("feimage")}}, {{SVGElement("image")}} und {{SVGElement("script")}} unterstützt. Es ermöglicht Ihnen, dem Browser einen Hinweis auf die relative Priorität einer externen Ressource zu geben. Dies funktioniert auf die gleiche Weise wie das `fetchpriority`-Attribut für die HTML-Elemente {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}}. ([Firefox Bug 1847712](https://bugzil.la/1847712)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird jetzt unterstützt ([Firefox Bug 1958875](https://bugzil.la/1958875)).

  Dies bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann. Die API wird mit der Ausnahme unterstützt, dass Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle und im `change`-Ereignis zurückgegeben werden, alle Eigenschaften außer `name` und `value` auslassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können weiterhin [gesetzt](/de/docs/Web/API/CookieStore/set) werden und werden intern verwendet.

### Escape < und > in Attributen beim Serialisieren von HTML

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen nun die `<` und `>` Zeichen durch `&lt;` und `&gt;` (jeweils), wenn das HTML in einen String serialisiert wird. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann zurück in den DOM injiziert wird. ([Firefox Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Ereignis bietet in der Regel einen Zugang zu den Zeigerbewegungseigenschaften mit niedriger Latenz im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen und löst aus, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine hochpräzise Eingabeverarbeitung erfordern und mit zusammengeführten `pointermove`-Ereignissen alleine keine reibungslose Interaktion erreichen können.
  Da das Lauschen dieses Ereignisses die Leistung beeinträchtigen kann, sollten Sie es für andere Anwendungsfälle vermeiden.
  ([Firefox Bug 1550462](https://bugzil.la/1550462)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle und ihre zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) wurden entfernt. ([Firefox Bug 1963043](https://bugzil.la/1963043)).

### WebAssembly

#### Entfernungen

### WebDriver-Kompatibilität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Außerdem ist `unspecified` jetzt der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox Bug 1550032](https://bugzil.la/1550032))

### Entfernungen

### Sonstiges

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 140 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt die Begrenzung des Browsers für die Anzahl der Aktionen zurück, die mit einer `Notification` verknüpft werden können, die Sie mithilfe von [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde vorzeitig in der Firefox-Version 138 veröffentlicht und mit dieser Änderung wird es nur im Nightly-Build verfügbar gemacht. ([Firefox Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen in der Lage sind, die Dialoge zu schließen, wie z.B. Benutzerinteraktionen außerhalb des Dialogs ("light dismiss") oder programmgesteuertes Schließen.
  ([Firefox Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsamen Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht blockierend und kann im Hauptthread verwendet werden.
  ([Firefox Bug 1467846](https://bugzil.la/1467846)).

- **Priorisierte Task-Scheduling-API** (Nightly-Version).
  Die [Priorisierte Task-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.
  Dies fügt die Unterstützung der statischen Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist jetzt voll funktionsfähig.
  ([Firefox Bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - Nur Desktop): `dom.closewatcher.enabled`.
  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Ihnen, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, genauso wie integrierte Komponenten. Auf Windows können Sie beispielsweise diese Schnittstelle verwenden, um eine benutzerdefinierte Sidebar zu schließen, wenn Benutzer die <kbd>Esc</kbd>-Taste drücken. ([Firefox Bug 1966459](https://bugzil.la/1966459)).

## Ältere Versionen

{{Firefox_for_developers}}
