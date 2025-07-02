---
title: Firefox 140 für Entwickler
short-title: Firefox 140 (Stabil)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 wurde am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird nun unterstützt. Sie bietet einen Mechanismus zum Stylen beliebiger Textbereiche in einem Dokument, der das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}} verallgemeinert.
  Sie definieren Textbereiche in JavaScript mit Instanzen von [`Range`](/de/docs/Web/API/Range), die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und registrieren sie dann mit einem Namen über [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können Stile auf ein registriertes Highlight mit dem CSS-Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) anwenden. ([Firefox Bug 1964089](https://bugzil.la/1964089)).

#### Entfernte Funktionen

- Die UA-Stile für `<h1>`-Elemente, die innerhalb von [Abschnittelementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt sind, wurden entfernt, nachdem der [Gliederungsalgorithmus](https://github.com/whatwg/html/pull/7829) aus der HTML-Spezifikation entfernt wurde. Zuvor erschienen die `<h1>`-Überschriften, die innerhalb von `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt waren, kleiner. Jetzt haben `<h1>`-Elemente eine einheitliche Schriftgröße, unabhängig von der Verschachtelung. ([Firefox Bug 1964922](https://bugzil.la/1964922)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Das SVG-Attribut {{SVGAttr("fetchpriority")}} wird jetzt für die SVG-Elemente {{SVGElement("feimage")}}, {{SVGElement("image")}} und {{SVGElement("script")}} unterstützt. Es ermöglicht es Ihnen, dem Browser Hinweise auf die relative Priorität einer externen Ressource zu geben. Dies funktioniert genauso wie das `fetchpriority`-Attribut für die HTML-Elemente {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}}. ([Firefox Bug 1847712](https://bugzil.la/1847712)).

### APIs

- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird jetzt unterstützt ([Firefox Bug 1958875](https://bugzil.la/1958875)).

  Dies bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service-Arbeitern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Die API wird mit der Ausnahme unterstützt, dass Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) des [`CookieStore`](/de/docs/Web/API/CookieStore) Interface zurückgegeben werden, und im `change`-Event alle Eigenschaften außer `name` und `value` weglassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können weiterhin [gesetzt](/de/docs/Web/API/CookieStore/set) werden, und diese werden intern verwendet.

### Escape < und > in Attributen beim Serialisieren von HTML

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML), und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen jetzt die Zeichen `<` und `>` beim Serialisieren des HTML in einen String mit `&lt;` und `&gt;` (jeweils). Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann zurück in das DOM injiziert wird.
  ([Firefox Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Ereignis bietet typischerweise einen Zugriff mit geringerer Latenz auf Zeigerbewegungseigenschaften im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen und tritt auf, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine hochpräzise Eingabeverarbeitung benötigen und die mit koaleszierten `pointermove`-Ereignissen allein keine reibungslose Interaktion erreichen können.
  Da das Anhören dieses Ereignisses die Leistung beeinträchtigen kann, sollten Sie es für andere Anwendungsfälle vermeiden.
  ([Firefox Bug 1550462](https://bugzil.la/1550462)).

#### Entfernte Funktionen

- Das [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Interface und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) wurden entfernt. ([Firefox Bug 1963043](https://bugzil.la/1963043)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Implementierung von Actions in sowohl Marionette als auch WebDriver BiDi wurde verbessert, um zu verhindern, dass Mikroaufgaben blockiert werden, während einzelne Ereignisse gesendet werden. ([Firefox Bug 1965183](https://bugzil.la/1965183))
- Ein Fehler wurde behoben, bei dem WebDriver Classic und BiDi-Befehle - insbesondere Action-Befehle - beim Warten auf eine RequestAnimationFrame-Zeitüberschreitung hatten. ([Firefox Bug 1947402](https://bugzil.la/1947402))

#### WebDriver BiDi

- Unterstützung für das `acceptInsecureCerts`-Argument zum `browser.createUserContext`-Befehl hinzugefügt. Dieses Argument ermöglicht es Clients, sicherheitsbezogene Zertifikateinstellungen für einen bestimmten Benutzerkontext (auch als Firefox-Container bekannt) zu deaktivieren oder zu aktivieren und die für eine Sitzung angegebenen Einstellungen zu überschreiben. ([Firefox Bug 1959372](https://bugzil.la/1959372))
- Ein neues `browsingContext`-Ereignis `browsingContext.navigationCommitted` wurde implementiert, das sofort ausgegeben werden soll, wenn ein neues Dokument für eine Navigation erstellt wurde. ([Firefox Bug 1945184](https://bugzil.la/1945184))
- Ein Fehler wurde behoben, bei dem verschiedene `browsingContext`-Ereignisse unerwartet für Webextension-Browsing-Kontexte ausgegeben wurden. ([Firefox Bug 1903272](https://bugzil.la/1903272))
- Der `webExtension.uninstall`-Befehl wurde aktualisiert, um einen `NoSuchWebExtensionError` auszulösen, wenn eine leere Zeichenfolge als Erweiterungs-ID angegeben wird. ([Firefox Bug 1956945](https://bugzil.la/1956945))
- Die `browsingContext.contextCreated`- und `browsingContext.contextDestroyed`-Ereignisse wurden aktualisiert, um die `clientWindow`-Eigenschaft in allen verbleibenden Fällen (einschließlich Firefox für Android) zurückzugeben. Diese Eigenschaft entspricht der ID des Fensters, das den Browsing-Kontext besitzt. ([Firefox Bug 1953743](https://bugzil.la/1953743))

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Darüber hinaus ist `unspecified` jetzt der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox Bug 1550032](https://bugzil.la/1550032))

## Experimentelle Web-Features

Diese Features wurden in Firefox 140 implementiert, sind jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie in der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt das Browser-Limit für die Anzahl der Aktionen zurück, die mit einer `Notification` verknüpft werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde vorzeitig in Firefox-Version 138 veröffentlicht, und diese Änderung macht es nur im Nightly-Build verfügbar. ([Firefox Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um zu spezifizieren, welche Mechanismen in der Lage sind, die Dialoge zu schließen, wie z.B. Benutzerinteraktionen außerhalb des Dialogs ("leichtes Schließen") oder programmatisches Schließen.
  ([Firefox Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die {{jsxref("Atomics.waitAsync()")}}-statische Methode wartet asynchron auf einen geteilten Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht blockierend und im Hauptthread verwendbar.
  ([Firefox Bug 1467846](https://bugzil.la/1467846)).

- **API zur priorisierten Aufgabenscheduling** (Nightly-Veröffentlichung).

  Die [API zur priorisierten Aufgabenscheduling](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind.
  Dies fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist jetzt funktionsmäßig vollständig.
  ([Firefox Bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - nur Desktop): `dom.closewatcher.enabled`.

  Das [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Interface ermöglicht es Ihnen, Komponenten zu implementieren, die mit geräte-nativen Mechanismen geschlossen werden können, genauso wie eingebaute Komponenten. Unter Windows können Sie dieses Interface beispielsweise verwenden, um eine benutzerdefinierte Seitenleiste zu schließen, wenn Benutzer die <kbd>Esc</kbd>-Taste drücken. ([Firefox Bug 1966459](https://bugzil.la/1966459)).

## Ältere Versionen

{{Firefox_for_developers}}
