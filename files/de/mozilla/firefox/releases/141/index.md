---
title: Versionshinweise zu Firefox 141 für Entwickler
short-title: Firefox 141
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: caf0af16c9f615fb0b2e73a44493a074a2007073
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox für Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein Element [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) die Auswahl von Verzeichnissen statt Dateien anbieten soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) immer einen leeren String enthalten. Dies bedeutet, dass die Verwendung von `webkitdirectory` für Anwendungsfälle, in denen Informationen über die Verzeichnisstruktur benötigt werden, nicht geeignet ist ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Accessor-Eigenschaft [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird jetzt auf Instanzen von {{jsxref("Intl.Locale")}} unterstützt.
  Diese Eigenschaft gibt die mit einem Gebietsschema verknüpften Varianten als String von durch Bindestriche (`-`) getrennten Bezeichnern zurück.
  Sie bietet eine robustere Möglichkeit, Variant-Subtags eines Sprachbezeichners abzurufen und festzulegen, anstatt einen Gebietsschema-String manuell zu parsen oder zu ändern ([Firefox-Bug 1970161](https://bugzil.la/1970161)).
- Die API für explizite [Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management), die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}, die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}} und {{jsxref("SuppressedError")}} sowie die wohlbekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} umfasst, wird jetzt unterstützt. Diese Funktionen gewährleisten die automatische Bereinigung von Ressourcen wie Dateihandles oder Stream-Readern, wenn diese ihren Gültigkeitsbereich verlassen, wodurch Lecks reduziert und die Fehlerbehandlung vereinfacht wird ([Firefox-Bug 1967744](https://bugzil.la/1967744)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des Antwort-Headers {{httpheader("Clear-Site-Data")}} leert jetzt den {{Glossary("bfcache", "bfcache")}} (Rückwärts-Vorwärts-Cache).
  Dadurch kann eine Website sicherstellen, dass private Details, die während der ursprünglichen Sitzung sichtbar waren, nicht offengelegt werden, wenn jemand nach der Abmeldung eines Benutzers rückwärts navigiert. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der Schnittstelle [`PointerEvent`](/de/docs/Web/API/PointerEvent) wird jetzt unterstützt. Sie gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Sie bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der Schnittstelle [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) wird jetzt unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Root-Elements des Observers einen Rand hinzu, sodass Ziele innerhalb dieser Elemente beobachtet werden können, bevor (oder nachdem) sie in den sichtbaren Bereich gescrollt werden – anstatt erst dann, wenn sie erstmals sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des Elements {{htmlelement("dialog")}} werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen einen Dialog schließen können, beispielsweise Benutzerinteraktion außerhalb des Dialogs („light dismiss“) oder programmgesteuertes Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) akzeptieren jetzt ein Argument [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert außerdem das Argument [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2). ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  ([Firefox-Bug 1936411](https://bugzil.la/1936411))
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Aufrufer (Steuerelement) her.
    Ebenso wie das entsprechende deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) macht dies das Popover für Tastaturbenutzer besser zugänglich (siehe [Funktionen zur Popover-Barrierefreiheit](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt außerdem eine implizite Ankerreferenz zwischen beiden, die eine natürlichere Positionierung von Popovern relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover zwangsweise zu öffnen oder zu schließen, und werden ignoriert, wenn sich das Popover bereits im erzwungenen Zustand befindet.
    Anders als `showPopover()` und `hidePopover()` wird keine Ausnahme ausgelöst, wenn sich das Popover bereits im Zielzustand befindet.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird jetzt unter Windows vollständig unterstützt, in allen Kontexten mit Ausnahme von Service Workern. Dadurch können Entwickler Berechnungen und Grafik-Rendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) eines Benutzercomputers durchführen. ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die experimentelle CDP-Implementierung (Chrome DevTools Protocol) wurde aus Firefox entfernt. Damit wurde auch die Unterstützung für die Einstellung `remote.active-protocols` entfernt. Weitere Details zu diesem Thema finden Sie unter [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox-Bug 1882096](https://bugzil.la/1882096)).
- Die temporäre Einstellung `remote.system-access-check.enabled` wurde entfernt. Diese Einstellung kann nicht mehr verwendet werden, um Systemzugriffsprüfungen bei der Verwendung von WebDriver im Chrome-Gültigkeitsbereich von Firefox während Tests zu deaktivieren ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das Argument „proxy“ des Befehls `browser.createUserContext` wurde hinzugefügt. Dadurch können Clients beim Erstellen eines Benutzerkontexts (d.h. eines Firefox-Containers) entweder einen „direct“- oder einen „manual“-Proxy einrichten. Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue Ereignis `browsingContext.historyUpdated` wurde implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung, die beim Versuch angezeigt wird, eine entpackte, unsignierte Web-Erweiterung dauerhaft zu installieren, wurde verbessert ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` wurden aktualisiert, sodass sie bei Verwendung der Bedingung „none“ für „wait“ auf das Ereignis `browsingContext.navigationCommitted` warten ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver-BiDi-Cookie-APIs wurden aktualisiert, um den Wert „default“ in der Eigenschaft „sameSite“ zu unterstützen. Damit werden aktuelle Änderungen in der Plattform-API berücksichtigt, die das Setzen eines Cookies mit „sameSite=None“ und „secure=false“ auf HTTP-Seiten nicht mehr erlauben ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige Verzögerungen von 200 ms bei jedem Aufruf von `WebDriver:ElementClick` zu vermeiden – selbst wenn keine Navigation stattfindet –, wurde das Click-and-Wait-Timeout für eine mögliche Navigation aus Gründen der Abwärtskompatibilität auf 50 ms reduziert. Das [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/remote/marionette/Prefs.html#marionette-navigate-after-click-timeout) und kann von Benutzern über eine Einstellung [vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/remote/marionette/Prefs.html#marionette-navigate-after-click-enabled) ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- In Marionette wurde Unterstützung für die Interaktion mit CHIPS-Cookies (Cookies Having Independent Partitioned State) hinzugefügt ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemata des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, das Details zu den im Browser festgelegten Gebietsschemata zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))
- Fügt die Möglichkeit hinzu, Ergebnisse in {{WebExtAPIRef('tabs.onUpdated')}} nach Cookie-Store-ID zu filtern. ([Firefox-Bug 1960011](https://bugzil.la/1960011))

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 141 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":active-view-transition")}} ermöglicht es Ihnen, Inhalte zu gestalten, während ein [View Transition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
