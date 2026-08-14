---
title: Firefox 141 Release Notes für Entwickler
short-title: Firefox 141
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox Fehler 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten. Das bedeutet, dass die Verwendung von `webkitdirectory` nicht für Anwendungsfälle geeignet ist, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox Fehler 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} erlaubt es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox Fehler 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Zugriffseigenschaft [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird nun auf {{jsxref("Intl.Locale")}}-Instanzen unterstützt.
  Diese Eigenschaft gibt die Varianten zurück, die mit einer Locale als String von durch Bindestriche (`-`) getrennten Identifikatoren verknüpft sind.
  Sie bietet eine robustere Möglichkeit, Variantensubtags einer Sprachkennung zu erhalten und zu setzen, im Gegensatz zum manuellen Parsen oder Ändern eines Locale-Strings ([Firefox Fehler 1970161](https://bugzil.la/1970161)).
- Die explizite [Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)-API, die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}, die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}} und {{jsxref("SuppressedError")}} sowie die bekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} umfasst, wird jetzt unterstützt. Diese Funktionen sorgen für eine automatische Bereinigung von Ressourcen wie Dateihandles oder Stream-Readern, wenn sie außerhalb des Bereichs gelangen, reduzieren Lecks und vereinfachen die Fehlerbehandlung ([Firefox Fehler 1967744](https://bugzil.la/1967744)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des {{httpheader("Clear-Site-Data")}}-Antwort-Headers löscht jetzt den {{Glossary("bfcache", "bfcache")}} (Vorwärts-Rückwärts-Cache).
  Dies ermöglicht es einer Seite sicherzustellen, dass, wenn jemand nach dem Abmelden eines Benutzers zurücknavigiert, private Details, die während der ursprünglichen Sitzung sichtbar waren, nicht offengelegt werden. ([Firefox Fehler 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren ([Firefox Fehler 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Interfaces wird jetzt unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Rollcontainer")}} innerhalb des Wurzelelements des Beobachters einen Rand hinzu, was es ermöglicht, Ziele innerhalb dieser Elemente zu beobachten, bevor (oder nachdem) sie in den sichtbaren Bereich gerollt werden – anstatt nur, wenn sie zuerst sichtbar werden ([Firefox Fehler 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Interfaces und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um anzugeben, welche Mechanismen einen Dialog schließen können, wie z.B. Benutzerinteraktion außerhalb des Dialogs ("Light Dismiss") oder programmgesteuertes Schließen.
  ([Firefox Fehler 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces akzeptieren jetzt ein [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source)-Argument, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert auch das [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) Argument. ([Firefox Fehler 1936411](https://bugzil.la/1936411)).
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Auslöser (Steuerelement) her.
    In ähnlicher Weise wie das gleichwertige deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) macht dies das Popover zugänglicher für Tastaturbenutzer (siehe [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt auch eine implizite Ankerreferenz zwischen den beiden, die eine natürlichere Positionierung von Popovers relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover zu zwingen, offen oder geschlossen zu werden, und wird ignoriert, wenn das Popover bereits im erzwungenen Zustand ist.
    Im Gegensatz zu `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn das Popover bereits im Zielzustand ist.
- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API) wird jetzt vollständig auf Windows in allen Kontexten außer für Service Worker unterstützt. Dies ermöglicht es Entwicklern, Berechnungen und Grafikrenderings unter Verwendung der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Computers eines Benutzers durchzuführen. ([Firefox Fehler 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die experimentelle CDP (Chrome DevTools Protocol)-Implementierung wurde aus Firefox entfernt. Damit wurde auch die Unterstützung für die Einstellung `remote.active-protocols` entfernt. Weitere Details zu diesem Thema finden Sie unter [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox Fehler 1882096](https://bugzil.la/1882096)).
- Die temporäre Einstellung `remote.system-access-check.enabled` wurde entfernt. Diese Einstellung kann nicht mehr verwendet werden, um Systemzugriffsprüfungen zu deaktivieren, wenn WebDriver im Chrome-Bereich von Firefox während des Testens verwendet wird ([Firefox Fehler 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das Argument "proxy" des Befehls `browser.createUserContext` hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy beim Erstellen eines Benutzerkontexts (z.B. Firefox Container) einzurichten. Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox Fehler 1967653](https://bugzil.la/1967653)).
- Das neue Ereignis `browsingContext.historyUpdated` implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox Fehler 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine nicht gepackte, unsignierte Erweiterung dauerhaft zu installieren ([Firefox Fehler 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` wurden aktualisiert, um auf das Ereignis `browsingContext.navigationCommitted` zu warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox Fehler 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi-Cookie-APIs wurden aktualisiert, um den Wert "default" im "sameSite"-Eigentum zu unterstützen, um jüngste Änderungen in der Plattform-API zu adressieren, die nicht mehr erlauben würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox Fehler 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms Verzögerungen für jeden Aufruf von `WebDriver:ElementClick` zu vermeiden – selbst wenn keine Navigation erfolgt – haben wir das Zeitlimit für Klick-und-Warte auf eine potenzielle Navigation auf 50ms für die Rückwärtskompatibilität gesenkt. Das [Zeitlimit ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/remote/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/remote/marionette/Prefs.html#marionette-navigate-after-click-enabled) durch Nutzer durch eine Einstellung ([Firefox Fehler 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette für die Interaktion mit CHIPS-Cookies (Cookies Having Independent Partitioned State) hinzugefügt ([Firefox Fehler 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Sprachumgebungen des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details zu den in den Browser eingestellten Sprachumgebungen zurückgibt. ([Firefox Fehler 1888486](https://bugzil.la/1888486))
- Fügt die Fähigkeit hinzu, die Ergebnisse in {{WebExtAPIRef('tabs.onUpdated')}} nach Cookie-Store-ID zu filtern. ([Firefox Fehler 1960011](https://bugzil.la/1960011))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie in der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-{{CSSXRef(":active-view-transition")}}-Pseudoklasse ermöglicht es Ihnen, Inhalte zu stylen, während ein [View-Übergang](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox Fehler 1956140](https://bugzil.la/1956140)).
