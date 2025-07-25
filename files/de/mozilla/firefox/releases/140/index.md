---
title: Firefox 140 für Entwickler
short-title: Firefox 140
slug: Mozilla/Firefox/Releases/140
l10n:
  sourceCommit: bd4faec13d4e90c342bededd2378671311f186a0
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 140, die Entwickler betreffen. Firefox 140 wurde am [24. Juni 2025](https://whattrainisitnow.com/release/?version=140) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) wird nun unterstützt. Sie bietet einen Mechanismus zur Gestaltung beliebiger Textbereiche in einem Dokument und verallgemeinert das Verhalten anderer Highlight-Pseudoelemente wie {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}} und {{cssxref('::target-text')}}.
  Sie definieren Textbereiche in JavaScript mit Hilfe von [`Range`](/de/docs/Web/API/Range)-Instanzen, die in einem [`Highlight`](/de/docs/Web/API/Highlight) gruppiert sind, und registrieren sie dann mit einem Namen mittels [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry).
  Sie können Stile auf ein registriertes Highlight mit dem CSS- Pseudoelement [`::highlight`](/de/docs/Web/CSS/::highlight) anwenden. ([Firefox Bug 1964089](https://bugzil.la/1964089)).

#### Entfernungen

- Die UA-Stile für `<h1>`-Elemente, die innerhalb von [sectioning elements](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) verschachtelt sind, wurden entfernt, nach der [Entfernung des Outline-Algorithmus](https://github.com/whatwg/html/pull/7829) aus der HTML-Spezifikation. Zuvor erschienen die `<h1>`-Überschriften, die innerhalb von `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt waren, kleiner. Jetzt haben `<h1>`-Elemente eine konsistente Schriftgröße, unabhängig von der Verschachtelung. ([Firefox Bug 1964922](https://bugzil.la/1964922)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Das SVG-Attribut {{SVGAttr("fetchpriority")}} wird nun für die SVG-Elemente {{SVGElement("feimage")}}, {{SVGElement("image")}} und {{SVGElement("script")}} unterstützt. Es erlaubt Ihnen, den Browser auf die relative Priorität einer externen Ressource hinzuweisen. Dies funktioniert genauso wie das `fetchpriority`-Attribut für die HTML-Elemente {{HTMLElement("img", "", "#fetchpriority")}} und {{HTMLElement("script", "", "#fetchpriority")}}. ([Firefox Bug 1847712](https://bugzil.la/1847712)).

### APIs

- Die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) wird nun unterstützt ([Firefox Bug 1958875](https://bugzil.la/1958875)).

  Diese bietet eine moderne, {{Glossary("asynchronous", "asynchrone")}} {{jsxref("Promise")}}-basierte Methode zur Verwaltung von Cookies, die sowohl im Hauptthread als auch in [Service Workern](/de/docs/Web/API/Service_Worker_API) verwendet werden kann.
  Die API wird mit der Ausnahme unterstützt, dass Cookie-Objekte, die von den Methoden [`get()`](/de/docs/Web/API/CookieStore/get) und [`getAll()`](/de/docs/Web/API/CookieStore/getAll) der [`CookieStore`](/de/docs/Web/API/CookieStore)-Schnittstelle zurückgegeben werden, sowie im `change`-Ereignis, alle Eigenschaften außer `name` und `value` weglassen (entsprechend den Informationen, die von [`document.cookie`](/de/docs/Web/API/Document/cookie) zurückgegeben werden). Die anderen Cookie-Eigenschaften können weiterhin [gesetzt](/de/docs/Web/API/CookieStore/set) werden und werden intern verwendet.

### Maskierung von < und > in Attributen bei der HTML-Serialisierung

- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML), [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) und [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) ersetzen nun die Zeichen `<` und `>` durch `&lt;` und `&gt;` (jeweils) bei der Serialisierung der HTML zu einer Zeichenkette. Dies verhindert bestimmte Exploits, bei denen HTML serialisiert und dann wieder in den DOM eingefügt wird.
  ([Firefox Bug 1962084](https://bugzil.la/1962084)).

#### DOM

- Das [`pointerrawupdate`-Ereignis](/de/docs/Web/API/Element/pointerrawupdate_event) wird jetzt unterstützt.
  Dieses Ereignis bietet in der Regel einen geringeren Latenzzugriff auf Zeigebewegungseigenschaften im Vergleich zu den entsprechenden [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignissen und tritt auf, sobald die Zeigerdaten verfügbar sind.
  Es ist für Anwendungen gedacht, die eine hochpräzise Eingabeverarbeitung benötigen und mit vermittelten `pointermove`-Ereignissen allein keine reibungslose Interaktion erreichen können.
  Da das Hören auf dieses Ereignis die Leistung beeinträchtigen kann, sollten Sie es für andere Anwendungsfälle vermeiden.
  ([Firefox Bug 1550462](https://bugzil.la/1550462)).

#### Entfernungen

- Die Schnittstelle [`MutationEvent`](/de/docs/Web/API/MutationEvent) und ihre zugehörigen Ereignisse (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) wurden entfernt. ([Firefox Bug 1963043](https://bugzil.la/1963043)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Verbesserung der Actions-Implementierung sowohl in Marionette als auch in WebDriver BiDi, um zu verhindern, dass Mikrotasks blockiert werden, während einzelne Ereignisse versendet werden. ([Firefox Bug 1965183](https://bugzil.la/1965183))
- Ein Fehler wurde behoben, bei dem WebDriver Classic und BiDi-Befehle - insbesondere Action-Befehle - beim Warten auf ein RequestAnimationFrame auslaufen konnten. ([Firefox Bug 1947402](https://bugzil.la/1947402))

#### WebDriver BiDi

- Unterstützung für das `acceptInsecureCerts`-Argument für den Befehl `browser.createUserContext` hinzugefügt. Dieses Argument ermöglicht es Clients, die zertifikatsbezogenen Sicherheitseinstellungen für einen bestimmten Benutzerkontext (auch Firefox-Container genannt) zu deaktivieren oder zu aktivieren und die für eine Sitzung angegebenen Einstellungen zu überschreiben. ([Firefox Bug 1959372](https://bugzil.la/1959372))
- Ein neues `browsingContext`-Ereignis implementiert, `browsingContext.navigationCommitted`, das ausgegeben werden sollte, sobald ein neues Dokument für eine Navigation erstellt wurde. ([Firefox Bug 1945184](https://bugzil.la/1945184))
- Ein Fehler für verschiedene `browsingContext`-Ereignisse behoben, die unerwartet für Webextension-Browsing-Kontexte gesendet wurden. ([Firefox Bug 1903272](https://bugzil.la/1903272))
- Der Befehl `webExtension.uninstall` wurde aktualisiert, um einen `NoSuchWebExtensionError` zu werfen, wenn eine leere Zeichenfolge als Erweiterungs-ID angegeben wird. ([Firefox Bug 1956945](https://bugzil.la/1956945))
- Die Ereignisse `browsingContext.contextCreated` und `browsingContext.contextDestroyed` wurden aktualisiert, um die `clientWindow`-Eigenschaft in allen verbleibenden Fällen zurückzugeben (einschließlich Firefox für Android). Diese Eigenschaft entspricht der ID des Fensters, das den Browsing-Kontext besitzt. ([Firefox Bug 1953743](https://bugzil.la/1953743))

## Änderungen für Add-on-Entwickler

- Unterstützung für `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}} hinzugefügt. Zusätzlich ist `unspecified` nun der Standardwert für `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox Bug 1550032](https://bugzil.la/1550032))

## Experimentelle Web-Funktionen

Diese Funktionen wurden in Firefox 140 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  Die schreibgeschützte statische Eigenschaft [`Notification.maxActions`](/de/docs/Web/API/Notification/maxActions_static) gibt das Browser-Limit für die Anzahl von Aktionen zurück, die mit einer `Notification` verknüpft werden können, die Sie mit [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) erstellen.
  Dies wurde vorzeitig in Firefox Version 138 veröffentlicht, und diese Änderung macht es nur im Nightly-Build verfügbar. ([Firefox Bug 1963263](https://bugzil.la/1963263)).

- **`closedBy`-Attribut für `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen in der Lage sind, die Dialoge zu schließen, wie z.B. Benutzerinteraktion außerhalb des Dialogs ("leichtes Schließen") oder programmatisches Schließen.
  ([Firefox Bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  Die statische Methode {{jsxref("Atomics.waitAsync()")}} wartet asynchron an einem gemeinsam genutzten Speicherort und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt.
  Es ist nicht blockierend und kann im Haupt-Thread verwendet werden.
  ([Firefox Bug 1467846](https://bugzil.la/1467846)).

- **API zur priorisierten Aufgabenplanung** (Nightly Release).
  Die [API zur priorisierten Aufgabenplanung](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers definiert sind oder in Drittanbieter-Bibliotheken und -Frameworks.
  Dies fügt Unterstützung für die statische Methode [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) hinzu, die ein Signal zurückgibt, das ausgelöst wird, wenn eines der `TaskSignal`-Objekte, aus denen es erstellt wurde, ausgelöst wird.
  Die API ist nun funktionskomplett.
  ([Firefox Bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - nur Desktop): `dom.closewatcher.enabled`.
  Die Schnittstelle [`CloseWatcher`](/de/docs/Web/API/CloseWatcher) ermöglicht es Ihnen, Komponenten zu implementieren, die mit geräte-eigenen Mechanismen geschlossen werden können, auf die gleiche Weise wie integrierte Komponenten. Unter Windows können Sie zum Beispiel diese Schnittstelle verwenden, um eine benutzerdefinierte Seitenleiste zu schließen, wenn Benutzer die <kbd>Esc</kbd>-Taste drücken. ([Firefox Bug 1966459](https://bugzil.la/1966459)).
