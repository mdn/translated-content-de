---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 65f868c9be01412e35efc373ef0d8b4c9781e031
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 141, die Entwickler betreffen. Firefox 141 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und wird am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung. Sie können [hier den Projekt-Tracker für diese Version einsehen](https://github.com/mdn/mdn/issues/698).

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)). Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten soll. Beachten Sie, dass die zurückgegebenen Datei-Einträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht für Anwendungsfälle geeignet ist, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standardpräsentationsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des {{httpheader("Clear-Site-Data")}}-Antwort-Headers löscht jetzt den {{Glossary("bfcache", "bfcache")}} (Vorwärts-Rückwärts-Cache). Dies ermöglicht es einer Website sicherzustellen, dass private Details, die während der ursprünglichen Sitzung sichtbar waren, nicht preisgegeben werden, wenn jemand nach dem Abmelden eines Nutzers rückwärts navigiert. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine einzigartige ID, die für die Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle wird jetzt unterstützt. Sie fügt eine Marge zu allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Observers hinzu, was es ermöglicht, Ziele innerhalb dieser Elemente zu beobachten, bevor (oder nachdem) sie in den sichtbaren Bereich gescrollt werden—anstatt nur, wenn sie erstmalig sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}}-Elements werden unterstützt. Entwickler können diese verwenden, um festzulegen, welche Mechanismen einen Dialog schließen können, wie z.B. Benutzerinteraktionen außerhalb des Dialogs ("leichte Ablehnung") oder programmgesteuertes Schließen. ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle akzeptieren jetzt ein [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source)-Argument, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert auch das [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2)-Argument. ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Aufrufer (Steuerelement) her. Ähnlich wie das entsprechende deklarative Attribut, [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), macht dies das Popover für Tastaturnutzer zugänglicher (siehe [Popover Accessibility Features](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erzeugt auch eine implizite Ankerreferenz zwischen den beiden, die eine natürlichere Positionierung von Popovers in Bezug auf ihre Steuerungen ermöglicht (siehe [Popover-Anker-Positionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) Argumente für `togglePopover()` können verwendet werden, um das Popover zu erzwingen zu öffnen oder zu schließen und wird ignoriert, wenn das Popover bereits im erzwungenen Zustand ist. Anders als `showPopover()` und `hidePopover()` wird keine Ausnahme geworfen, wenn sich das Popover bereits im Zielzustand befindet.

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Entfernt die temporäre `remote.system-access-check.enabled`-Präferenz. Diese Präferenz kann nicht mehr verwendet werden, um Systemzugriffsprüfungen zu deaktivieren, wenn WebDriver im Chrom-Scope von Firefox während Tests verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy"-Argument des Befehls `browser.createUserContext` hinzugefügt. Damit können Clients entweder einen "direkten" oder "manuellen" Proxy einrichten, wenn sie einen Benutzerkontext (also einen Firefox-Container) erstellen. Unterstützung für zusätzliche Proxytypen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated`-Ereignis implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine nicht signierte Webextension dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` aktualisiert, sodass sie auf das Ereignis `browsingContext.navigationCommitted` warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi-Cookie-APIs aktualisiert, um den "default"-Wert in der "sameSite"-Eigenschaft zu unterstützen, um aktuelle Änderungen in der Plattform-API zu adressieren, die es nicht mehr erlauben, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms-Verzögerungen bei jedem Aufruf von `WebDriver:ElementClick` zu vermeiden - selbst wenn keine Navigation erfolgt - haben wir das Klick-und-Warte-Timeout für eine potenzielle Navigation auf 50ms für Abwärtskompatibilität gesenkt. Das [Timeout ist nun auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) von Nutzern durch eine Präferenz ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung für die Interaktion mit CHIPS-Cookies (Cookies mit unabhängigem Partitionierten Zustand) in Marionette hinzugefügt ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemata des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details der im Browser gesetzten Gebietsschemata zurückgeben. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

## Experimentelle Webfunktionen

Diese Funktionen werden in Firefox 141 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere dieser Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":active-view-transition")}} ermöglicht es Ihnen, Inhalte zu stylen, während ein [Ansichtstransitions](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
