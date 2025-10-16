---
title: Firefox 140 Versionshinweise für Entwickler
short-title: Firefox 140
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 wurde am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird nun unterstützt. Sie bietet einen Mechanismus zum Stilieren beliebiger Textranges in einem Dokument und generalisiert das Verhalten anderer Highlight-Pseudo-Elemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}.
  Sie definieren Textranges in JavaScript unter Verwendung von [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und registrieren sie dann mit einem Namen über [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können einem registrierten Highlight über das CSS-Pseudo-Element [`::highlight`](/de/docs/Web/CSS/::highlight) Styles zuweisen. ([Firefox-Bug 1964089](https://bugzil.la/1964089)).

#### Entfernung

- Die UA-Stile für `<h1>`-Elemente, die innerhalb von [Sectioning-Elementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt sind, wurden entfernt, nachdem der [Entfernungsalgorithmus für Gliederungen](https://github.com/whatwg/html/pull/7829) aus der HTML-Spezifikation entfernt wurde. Zuvor erschienen die `<h1>`-Überschriften, die innerhalb von `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt waren, kleiner. Nun haben `<h1>`-Elemente eine einheitliche Schriftgröße, unabhängig von der Verschachtelung. ([Firefox-Bug 1964922](https://bugzil.la/1964922)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Das SVG-Attribut {{SVGAttr("fetchpriority")}} wird nun für die SVG-Elemente {{SVGElement("feimage")}}, {{SVGElement("image")}} und {{SVGElement("script")}} unterstützt. Es ermöglicht Ihnen, dem Browser einen Hinweis auf die relative Priorität einer externen Ressource zu geben. Dies funktioniert genauso wie das `fetchpriority`-Attribut für die HTML-Elemente {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}}. ([Firefox-Bug 1847712](https://bugzil.la/1847712)).

### APIs

- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird nun unterstützt ([Firefox-Bug 1958875](https://bugzil.la/1958875)).

  Dies bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zum Verwalten von Cookies, die sowohl im Hauptthread als auch in [Service Worker](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Die API wird mit der Ausnahme unterstützt, dass Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) des [`CookieStore`](/de/docs/Web/API/CookieStore)-Interfaces sowie im `change`-Ereignis zurückgegeben werden, alle Eigenschaften außer `name` und `value` auslassen (entspricht den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können immer noch [gesetzt](/de/docs/Web/API/CookieStore/set) werden und werden intern verwendet.

### Escape < and > in attributes when serializing HTML

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen nun die Zeichen `<` und `>` durch `&lt;` und `&gt;` (bzw.) beim Serialisieren von HTML in einen String. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann wieder in das DOM injiziert wird.
  ([Firefox-Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird nun unterstützt.
  Dieses Ereignis bietet im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen typischerweise einen Zugriff mit geringerer Latenz auf Zeigereigenschaften und wird ausgelöst, sobald die Zeigerdaten verfügbar sind.
  Es richtet sich an Anwendungen, die eine hochpräzise Eingabeverarbeitung erfordern und eine flüssige Interaktion nicht allein mit koaleszierten `pointermove`-Ereignissen erreichen können.
  Da das Abhören dieses Ereignisses die Leistung beeinträchtigen kann, sollten Sie es für andere Anwendungsfälle vermeiden.
  ([Firefox-Bug 1550462](https://bugzil.la/1550462)).

#### Entfernung

- Das Interface [`MutationEvent`](/de/docs/Web/API/MutationEvent) und seine zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) wurden entfernt. ([Firefox-Bug 1963043](https://bugzil.la/1963043)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserung der Aktionen-Implementation sowohl in Marionette als auch in WebDriver BiDi, um zu verhindern, dass Microtasks blockiert werden, während einzelne Ereignisse versendet werden. ([Firefox-Bug 1965183](https://bugzil.la/1965183))
- Behoben: Ein Fehler, bei dem WebDriver Classic und BiDi-Befehle, insbesondere Aktionsbefehle, auslaufen konnten, während auf ein RequestAnimationFrame gewartet wurde. ([Firefox-Bug 1947402](https://bugzil.la/1947402))

#### WebDriver BiDi

- Unterstützung für das `acceptInsecureCerts`-Argument beim `browser.createUserContext`-Befehl hinzugefügt. Dieses Argument ermöglicht es Clients, die Zertifikatsicherheitseinstellungen für einen spezifischen Benutzerkontext (alias Firefox-Container) zu deaktivieren oder zu aktivieren und die für eine Sitzung angegebenen Einstellungen zu überschreiben. ([Firefox-Bug 1959372](https://bugzil.la/1959372))
- Implementierung eines neuen `browsingContext`-Ereignisses, `browsingContext.navigationCommitted`, das ausgegeben werden soll, sobald ein neues Dokument für eine Navigation erstellt wurde. ([Firefox-Bug 1945184](https://bugzil.la/1945184))
- Behoben: Ein Fehler bei verschiedenen `browsingContext`-Ereignissen, die unerwartet für WebExtension Browsing Kontexte ausgegeben wurden. ([Firefox-Bug 1903272](https://bugzil.la/1903272))
- Beim `webExtension.uninstall`-Befehl wird nun ein `NoSuchWebExtensionError` ausgelöst, wenn eine leere Zeichenfolge als Erweiterungs-ID angegeben wird. ([Firefox-Bug 1956945](https://bugzil.la/1956945))
- Aktualisierung der Ereignisse `browsingContext.contextCreated` und `browsingContext.contextDestroyed`, um die Eigenschaft `clientWindow` in allen verbleibenden Fällen (einschließlich Firefox für Android) zurückzugeben. Diese Eigenschaft entspricht der ID des Fensters, das den Browsing Context besitzt. ([Firefox-Bug 1953743](https://bugzil.la/1953743))

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Außerdem ist `unspecified` jetzt der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox-Bug 1550032](https://bugzil.la/1550032))

## Experimentelle Web-Features

Diese Features wurden in Firefox 140 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt die vom Browser festgelegte Grenze für die Anzahl der Aktionen zurück, die mit einer `Notification` verknüpft werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Diese Funktion wurde vorzeitig in Firefox-Version 138 veröffentlicht, und diese Änderung macht sie nur im Nightly-Build verfügbar. ([Firefox-Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um zu spezifizieren, welche Mechanismen in der Lage sind, Dialoge zu schließen, wie Benutzerinteraktionen außerhalb des Dialogs ("light dismiss") oder programmatisches Schließen.
  ([Firefox-Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem Speicherort im gemeinschaftlich genutzten Speicher und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Sie ist nicht blockierend und auf dem Hauptthread verwendbar.
  ([Firefox-Bug 1467846](https://bugzil.la/1467846)).

- **Priorisierte Task Scheduling API** (Nightly-Veröffentlichung).
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben zu priorisieren, die zu einer Anwendung gehören, sei es im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks.
  Diese fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist jetzt funktionsfertig.
  ([Firefox-Bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - nur Desktop): `dom.closewatcher.enabled`.
  Die [`CloseWatcher`](/de/docs/Web/API/CloseWatcher)-Schnittstelle ermöglicht es Ihnen, Komponenten zu implementieren, die mit gerätenativen Mechanismen, ähnlich wie integrierte Komponenten, geschlossen werden können. Unter Windows können Sie beispielsweise mit dieser Schnittstelle eine benutzerdefinierte Seitenleiste schließen, wenn Benutzer die <kbd>Esc</kbd>-Taste drücken. ([Firefox-Bug 1966459](https://bugzil.la/1966459)).
