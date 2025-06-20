---
title: Firefox 140 für Entwickler
short-title: Firefox 140 (Beta)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 310061cf6293b55a8ae851f9ead8e1685f500141
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird jetzt unterstützt. Sie bietet einen Mechanismus zum Stylen beliebiger Textranges in einem Dokument und verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}.
  Sie definieren Textranges in JavaScript anhand von [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und registrieren sie dann mit einem Namen über [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können Stile auf ein registriertes Highlight mithilfe des CSS-Pseudoelements [`::highlight`](/de/docs/Web/CSS/::highlight) anwenden. ([Firefox-Bug 1964089](https://bugzil.la/1964089)).

#### Entfernungen

- Die UA-Stile für `<h1>`-Elemente, die in [sectioning elements](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt sind, wurden entfernt, nachdem der [Outline-Algorithmus entfernt](https://github.com/whatwg/html/pull/7829) wurde aus der HTML-Spezifikation. Zuvor erschienen die `<h1>`-Überschriften, die in `<article>`, `<aside>`, `<nav>`, und `<section>` eingebettet waren, kleiner. Jetzt haben `<h1>`-Elemente eine einheitliche Schriftgröße, unabhängig von der Verschachtelung. ([Firefox-Bug 1964922](https://bugzil.la/1964922)).

### JavaScript

#### Entfernungen

### SVG

- Das SVG {{SVGAttr("fetchpriority")}}-Attribut wird jetzt für die SVG-Elemente {{SVGElement("feimage")}}, {{SVGElement("image")}}, und {{SVGElement("script")}} unterstützt. Damit können Sie dem Browser einen Hinweis auf die relative Priorität einer externen Ressource geben. Dies funktioniert genauso wie das `fetchpriority`-Attribut für die HTML-Elemente {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}}. ([Firefox-Bug 1847712](https://bugzil.la/1847712)).

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird jetzt unterstützt ([Firefox-Bug 1958875](https://bugzil.la/1958875)).

  Dies bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Die API wird unterstützt, mit der Ausnahme, dass die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle zurückgegebenen Cookie-Objekte und im `change`-Ereignis alle Eigenschaften außer `name` und `value` auslassen (entsprechend den Informationen, die durch [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können weiterhin [gesetzt](/de/docs/Web/API/CookieStore/set) werden, und diese werden intern verwendet.

### < und > in Attributen beim Serialisieren von HTML entkommen

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML), und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` (jeweils), wenn das HTML in einen String serialisiert wird. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann zurück in den DOM eingefügt wird. ([Firefox-Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Ereignis bietet in der Regel einen Zugang zu den Zeigereigenschaften mit niedrigerer Latenz im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen und wird ausgelöst, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine präzise Eingabeverarbeitung erfordern und die keine flüssige Interaktion nur mit koaleszierten `pointermove`-Ereignissen erreichen können.
  Da das Abhören dieses Ereignisses die Leistung beeinträchtigen kann, sollten Sie es nicht für andere Anwendungsfälle verwenden.
  ([Firefox-Bug 1550462](https://bugzil.la/1550462)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle und deren zugehörige Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) wurden entfernt. ([Firefox-Bug 1963043](https://bugzil.la/1963043)).

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Implementierung von Aktionen in sowohl Marionette als auch WebDriver BiDi wurde verbessert, um zu verhindern, dass Mikrotasks blockiert werden, während einzelne Ereignisse versendet werden. ([Firefox-Bug 1965183](https://bugzil.la/1965183))
- Ein Fehler wurde behoben, bei dem WebDriver Classic und BiDi-Befehle, insbesondere Aktionsbefehle, während des Wartens auf ein RequestAnimationFrame-Timeout fehlschlugen. ([Firefox-Bug 1947402](https://bugzil.la/1947402))

#### WebDriver BiDi

- Unterstützung für das `acceptInsecureCerts`-Argument beim `browser.createUserContext`-Befehl hinzugefügt. Dieses Argument ermöglicht es Clients, die sicherheitsbezogenen Zertifikateinstellungen für einen bestimmten Benutzerkontext (auch bekannt als Firefox-Container) zu deaktivieren oder zu aktivieren und die für eine Sitzung angegebenen Einstellungen zu überschreiben. ([Firefox-Bug 1959372](https://bugzil.la/1959372))
- Ein neues `browsingContext`-Ereignis, `browsingContext.navigationCommitted`, implementiert, das ausgelöst werden sollte, sobald ein neues Dokument für eine Navigation erstellt wurde. ([Firefox-Bug 1945184](https://bugzil.la/1945184))
- Ein Fehler für verschiedene `browsingContext`-Ereignisse behoben, die unerwartet für das Browsing von Kontexten von Webextensions ausgelöst wurden. ([Firefox-Bug 1903272](https://bugzil.la/1903272))
- Der Befehl `webExtension.uninstall` wurde aktualisiert, um einen `NoSuchWebExtensionError` zu werfen, wenn eine leere Zeichenkette als Erweiterungs-ID angegeben wird. ([Firefox-Bug 1956945](https://bugzil.la/1956945))
- Die Ereignisse `browsingContext.contextCreated` und `browsingContext.contextDestroyed` wurden aktualisiert, um die `clientWindow`-Eigenschaft in allen verbleibenden Fällen (einschließlich Firefox für Android) zurückzugeben. Diese Eigenschaft entspricht der ID des Fensters, dem der Browsing-Kontext gehört. ([Firefox-Bug 1953743](https://bugzil.la/1953743))

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Zusätzlich ist `unspecified` nun der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox-Bug 1550032](https://bugzil.la/1550032))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 140 enthalten, jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt das Browser-Limit für die Anzahl der Aktionen zurück, die mit einer `Notification` verknüpft werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde versehentlich in Firefox Version 138 veröffentlicht, und diese Änderung macht es nur im Nightly-Build verfügbar. ([Firefox-Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können sie verwenden, um anzugeben, welche Mechanismen Dialoge schließen können, etwa durch Benutzerinteraktion außerhalb des Dialogs ("leichtes Schließen") oder durch programmatisches Schließen.
  ([Firefox-Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsamen Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht blockierend und im Hauptthread verwendbar.
  ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

- **API für priorisierte Aufgabenplanung** (Nightly-Release).
  Die [API für priorisierte Aufgabenplanung](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist nun komplett funktionsfähig.
  ([Firefox-Bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - nur Desktop): `dom.closewatcher.enabled`.
  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Ihnen, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, auf die gleiche Weise wie eingebaute Komponenten. Auf Windows beispielsweise können Sie diese Schnittstelle verwenden, um eine benutzerdefinierte Seitenleiste zu schließen, wenn Benutzer die <kbd>Esc</kbd>-Taste drücken. ([Firefox-Bug 1966459](https://bugzil.la/1966459)).

## Ältere Versionen

{{Firefox_for_developers}}
