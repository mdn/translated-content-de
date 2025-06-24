---
title: Firefox 140 für Entwickler
short-title: Firefox 140 (Stabil)
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 90fe07f7d8a790094d90eddf70071dd64f821c76
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 wurde am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird jetzt unterstützt. Sie bietet einen Mechanismus zur Gestaltung beliebiger Textranges in einem Dokument und verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, und {{cssxref('::target-text')}}.
  Sie definieren Textranges in JavaScript mit Hilfe von [`Range`](/de/docs/Web/API/Range)-Objekten, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert werden, und registrieren sie dann mit einem Namen über [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können einem registrierten Highlight Stile durch das CSS-Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) zuweisen. ([Firefox-Bug 1964089](https://bugzil.la/1964089)).

#### Entfernt

- Die UA-Stile für `<h1>`-Elemente, die innerhalb von [Strukturelementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt sind, wurden entfernt, nachdem der [Entwurf der Outline-Algorithmus](https://github.com/whatwg/html/pull/7829) aus der HTML-Spezifikation entfernt wurde. Zuvor erschienen `<h1>`-Überschriften, die innerhalb von `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt waren, kleiner. Jetzt haben `<h1>`-Elemente eine einheitliche Schriftgröße, unabhängig von der Verschachtelung. ([Firefox-Bug 1964922](https://bugzil.la/1964922)).

### JavaScript

Keine nennenswerten Änderungen.

### SVG

- Das `fetchpriority`-Attribut für die SVG-Elemente {{SVGElement("feimage")}}, {{SVGElement("image")}} und {{SVGElement("script")}} wird jetzt unterstützt. Es gibt dem Browser einen Hinweis auf die relative Priorität einer externen Ressource, ähnlich wie das `fetchpriority`-Attribut für die HTML-Elemente {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}}. ([Firefox-Bug 1847712](https://bugzil.la/1847712)).

### APIs

- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird jetzt unterstützt ([Firefox-Bug 1958875](https://bugzil.la/1958875)).

  Diese bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Haupt-Thread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Die API wird mit der Ausnahme unterstützt, dass Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) der Schnittstelle [`CookieStore`](/de/docs/Web/API/CookieStore) und im `change`-Ereignis zurückgegeben werden, alle Eigenschaften außer `name` und `value` weglassen (was den Informationen entspricht, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können nach wie vor [gesetzt werden](/de/docs/Web/API/CookieStore/set) und werden intern verwendet.

### Escape < und > in Attributen bei der HTML-Serialisierung

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML), und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen jetzt die Zeichen `<` und `>` durch `&lt;` und `&gt;` (jeweils), wenn das HTML in eine Zeichenfolge serialisiert wird. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann zurück in das DOM eingefügt wird.
  ([Firefox-Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Ereignis bietet in der Regel einen geringer latenten Zugriff auf Zeigerbewegungseigenschaften als die entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignisse und wird ausgelöst, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine hochpräzise Eingabebehandlung erfordern und keine reibungslose Interaktion mit nur zusammengefügten `pointermove`-Ereignissen erreichen können.
  Da das Lauschen dieses Ereignisses die Leistung beeinträchtigen kann, sollten Sie es für andere Anwendungsfälle vermeiden.
  ([Firefox-Bug 1550462](https://bugzil.la/1550462)).

#### Entfernt

- Die [`MutationEvent`](/de/docs/Web/API/MutationEvent)-Schnittstelle und ihre zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) wurden entfernt. ([Firefox-Bug 1963043](https://bugzil.la/1963043)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die Implementierung von Aktionen in sowohl Marionette als auch WebDriver BiDi wurde verbessert, um zu verhindern, dass Microtasks blockiert werden, während einzelne Ereignisse versendet werden. ([Firefox-Bug 1965183](https://bugzil.la/1965183))
- Ein Fehler wurde behoben, bei dem WebDriver Classic- und BiDi-Befehle - insbesondere Aktionsbefehle - während des Wartens auf einen RequestAnimationFrame in einen Timeout fallen konnten. ([Firefox-Bug 1947402](https://bugzil.la/1947402))

#### WebDriver BiDi

- Unterstützung für das `acceptInsecureCerts`-Argument zum `browser.createUserContext`-Befehl hinzugefügt. Dieses Argument ermöglicht es Clients, zertifikatbezogene Sicherheitseinstellungen für einen bestimmten Benutzerkontext (alias Firefox-Container) zu deaktivieren oder zu aktivieren und die für eine Sitzung festgelegten Einstellungen zu überschreiben. ([Firefox-Bug 1959372](https://bugzil.la/1959372))
- Ein neues `browsingContext`-Ereignis, `browsingContext.navigationCommitted`, implementiert, das ausgelöst werden sollte, sobald ein neues Dokument für eine Navigation erstellt wurde. ([Firefox-Bug 1945184](https://bugzil.la/1945184))
- Ein Fehler wurde behoben, bei dem verschiedene `browsingContext`-Ereignisse unerwartet für Webextension-Browsing-Kontexte ausgelöst wurden. ([Firefox-Bug 1903272](https://bugzil.la/1903272))
- Der `webExtension.uninstall`-Befehl wurde aktualisiert, um einen `NoSuchWebExtensionError` auszulösen, wenn eine leere Zeichenfolge als Erweiterungs-ID bereitgestellt wird. ([Firefox-Bug 1956945](https://bugzil.la/1956945))
- Die `browsingContext.contextCreated` und `browsingContext.contextDestroyed`-Ereignisse wurden aktualisiert, um die `clientWindow`-Eigenschaft in allen verbleibenden Fällen (einschließlich Firefox für Android) zurückzugeben. Diese Eigenschaft entspricht der ID des Fensters, das den Browsing-Kontext besitzt. ([Firefox-Bug 1953743](https://bugzil.la/1953743))

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Außerdem ist `unspecified` jetzt der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox-Bug 1550032](https://bugzil.la/1550032))

## Experimentelle Webfeatures

Diese Funktionen wurden in Firefox 140 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt das Browser-Limit für die Anzahl von Aktionen zurück, die mit einer `Notification` verbunden werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde vorzeitig in Firefox Version 138 veröffentlicht, und diese Änderung macht es nur in der Nightly-Version verfügbar. ([Firefox-Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy` Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen in der Lage sind, die Dialoge zu schließen, wie z.B. Benutzerinteraktion außerhalb des Dialogs ("light dismiss") oder programmatisches Schließen.
  ([Firefox-Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsamen Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation repräsentiert.
  Sie ist nicht blockierend und auf dem Haupt-Thread nutzbar.
  ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

- **Priorisierte Task-Scheduling-API** (Nightly-Version).
  Die [Priorisierte Task-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.
  Dies fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist jetzt funktionskomplett.
  ([Firefox-Bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - nur Desktop): `dom.closewatcher.enabled`.
  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Ihnen, Komponenten zu implementieren, die mit gerätenativen Mechanismen geschlossen werden können, ähnlich wie eingebaute Komponenten. Auf Windows können Sie z. B. diese Schnittstelle verwenden, um eine benutzerdefinierte Seitenleiste zu schließen, wenn Benutzer die <kbd>Esc</kbd>-Taste drücken. ([Firefox-Bug 1966459](https://bugzil.la/1966459)).

## Ältere Versionen

{{Firefox_for_developers}}
