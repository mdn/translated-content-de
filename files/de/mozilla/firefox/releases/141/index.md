---
title: Firefox 141 für Entwickler
short-title: Firefox 141
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 3aa70b693c9440a00c9400b0e1a42aa80bd235b0
---

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 141, die Entwickler betreffen. Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden nun teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten sollte. Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` für Anwendungsfälle, bei denen Informationen über die Verzeichnisstruktur benötigt werden, nicht geeignet ist ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht das Festlegen eines Standarddarstellungsstils für die Anzeige von Emojis ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Zugriffs-Eigenschaft [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird nun auf {{jsxref("Intl.Locale")}}-Instanzen unterstützt. Diese Eigenschaft gibt die Varianten zurück, die mit einem Gebietsschema als eine durch Bindestriche (`-`) getrennte Identifikatoren-Zeichenkette verknüpft sind. Sie bietet eine robustere Möglichkeit, Variant-Subtags eines Sprachidentifikators zu erhalten und zu setzen, im Gegensatz zu manuellen Analysen oder Modifikationen eines Gebietsschemastrings ([Firefox-Bug 1970161](https://bugzil.la/1970161)).
- Die explizite [Ressourcenverwaltungs-API](/de/docs/Web/JavaScript/Guide/Resource_management), die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}} umfasst, sowie die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}}, und {{jsxref("SuppressedError")}}, und die bekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}}, wird nun unterstützt. Diese Funktionen gewährleisten die automatische Bereinigung von Ressourcen wie Dateihandles oder Stream-Lesern, wenn sie aus dem Gültigkeitsbereich fallen, was Lecks reduziert und die Fehlermeldung vereinfacht ([Firefox-Bug 1967744](https://bugzil.la/1967744)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des Reaktions-Headers {{httpheader("Clear-Site-Data")}} leert nun den {{Glossary("bfcache", "bfcache")}} (vor- und rückwärts Cache). Dies ermöglicht es einer Website sicherzustellen, dass, wenn jemand nach einem Benutzer-Logout rückwärts navigiert, private Details, die während der ursprünglichen Sitzung sichtbar waren, nicht offengelegt werden. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle wird nun unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung erhalten bleibt. Sie bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle wird nun unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scrollcontainern")}} innerhalb des Stamm-Elements des Beobachters einen Rand hinzu, was es ermöglicht, Ziele innerhalb dieser Elemente zu beobachten, bevor (oder nachdem) sie in die Ansicht gescrollt werden – anstatt nur, wenn sie erstmals sichtbar werden ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}}-Elements werden unterstützt. Entwickler können diese verwenden, um festzulegen, welche Mechanismen ein Dialog schließen können, wie Benutzereingriffe außerhalb des Dialogs ("light dismiss") oder programmatisches Schließen ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle nehmen nun ein Argument [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) nimmt auch das Argument [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) an. ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Aufrufer (Steuerelement) her. Ebenso wie das gleichwertige deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) macht dies das Popover für Tastaturnutzer zugänglicher (siehe [Popover Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt auch einen impliziten Ankerverweis zwischen den beiden, was eine natürlichere Positionierung von Popovern relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover zu erzwingen, dass es geöffnet oder geschlossen wird, und werden ignoriert, wenn das Popover bereits im erzwungenen Zustand ist. Im Gegensatz zu `showPopover()` und `hidePopover()` wird keine Ausnahme ausgelöst, wenn das Popover bereits im Zielzustand ist.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird nun vollständig auf Windows unterstützt, in allen Kontexten außer für Service-Arbeiter. Dies ermöglicht es Entwicklern, Berechnungen und Grafikrenderings mit der [Grafikverarbeitungseinheit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) eines Benutzercomputers durchzuführen ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die experimentelle CDP (Chrome DevTools Protocol)-Implementierung wurde aus Firefox entfernt. Damit wurde auch die Unterstützung für die Einstellung `remote.active-protocols` entfernt. Weitere Details zu diesem Thema finden Sie auf [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox-Bug 1882096](https://bugzil.la/1882096)).
- Die temporäre Einstellung `remote.system-access-check.enabled` wurde entfernt. Diese Einstellung kann nicht mehr verwendet werden, um Systemzugriffskontrollen zu deaktivieren, wenn WebDriver im Chrome-Bereich von Firefox während des Testens verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das Argument "proxy" des Befehls `browser.createUserContext` hinzugefügt. Dadurch können Clients entweder einen "direkten" oder "manuellen" Proxy beim Erstellen eines Benutzerkontexts (z. B. Firefox-Container) einrichten. Unterstützung für zusätzliche Proxytypen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated`-Ereignis implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine ausgepackte, nicht signierte Web-Erweiterung dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` aktualisiert, um auf das Ereignis `browsingContext.navigationCommitted` zu warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi Cookie-APIs aktualisiert, um den "default"-Wert im "sameSite"-Eigentum zu unterstützen, um kürzliche Änderungen in der Plattform-API zu berücksichtigen, die es nicht mehr erlauben würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms-Verzögerungen für jeden Aufruf von `WebDriver:ElementClick` zu vermeiden - selbst wenn keine Navigation erfolgt - haben wir das Click-and-Wait-Timeout für eine potenzielle Navigation auf 50 ms für die Rückwärtskompatibilität gesenkt. Das [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) von Benutzern durch eine Einstellung ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette hinzugefügt, um mit CHIPS-Cookies (Cookies mit unabhängiger partitionierter Zustandsfunktionalität) zu interagieren ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Diese ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details zu den im Browser festgelegten Gebietsschemas zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))
- Fügt die Möglichkeit hinzu, Ergebnisse in {{WebExtAPIRef('tabs.onUpdated')}} nach Cookie-Speicher-ID zu filtern. ([Firefox-Bug 1960011](https://bugzil.la/1960011))

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 141 ausgeliefert, sind aber standardmäßig deaktiviert. Um diese Funktionen zu testen, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":active-view-transition")}} ermöglicht es Ihnen, Inhalte zu stylen, während ein [Ansichtstransition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
