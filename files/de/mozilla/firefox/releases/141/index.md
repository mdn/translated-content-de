---
title: Firefox 141 für Entwickler
short-title: Firefox 141
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 36522b6e730a3517a0060106610ef00e79953044
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox für Android unterstützt ([Firefox Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzuzeigen, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass `webkitdirectory` für Anwendungsfälle, in denen Informationen über die Verzeichnisstruktur benötigt werden, nicht geeignet ist ([Firefox Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) Zugriffseigenschaft wird nun auf {{jsxref("Intl.Locale")}}-Instanzen unterstützt.
  Diese Eigenschaft gibt die mit einem Gebietsschema verbundenen Varianten als einen String von durch Bindestriche (`-`) getrennten Identifikatoren zurück.
  Sie bietet eine robustere Möglichkeit, Varianten-Subtags eines Sprachidentifikators zu erhalten und festzulegen, im Gegensatz dazu, ein Gebietsschema-String manuell zu parsen oder zu ändern ([Firefox Bug 1970161](https://bugzil.la/1970161)).
- Die explizite [Ressourcenverwaltungs-API](/de/docs/Web/JavaScript/Guide/Resource_management), die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}, die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}}, und {{jsxref("SuppressedError")}}, sowie die allgemein bekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} umfasst, wird nun unterstützt. Diese Funktionen sorgen für eine automatische Bereinigung von Ressourcen wie Dateihandles oder Stream-Reader, wenn sie aus dem Gültigkeitsbereich verschwinden, was Lecks reduziert und die Fehlerbehandlung vereinfacht ([Firefox Bug 1967744](https://bugzil.la/1967744)).

### HTTP

- Die [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) Direktive des {{httpheader("Clear-Site-Data")}} Antwort-Headers löscht jetzt das {{Glossary("bfcache", "bfcache")}} (Vorwärts-Rückwärts-Cache).
  Dies ermöglicht es einer Seite sicherzustellen, dass falls jemand nach dem Abmelden eines Benutzers zurück navigiert, keine privaten Details, die während der anfänglichen Sitzung sichtbar waren, offengelegt werden. ([Firefox Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle wird nun unterstützt. Diese gibt jedem Eingabegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Dies bietet eine zuverlässige Möglichkeit, mehrere auf dem Bildschirm gleichzeitig interagierende Eingabegeräte (wie Stifte) zu identifizieren. ([Firefox Bug 1968400](https://bugzil.la/1968400)).
- Die [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) Eigenschaft der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Schnittstelle wird nun unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Beobachters einen Rand hinzu, was es ermöglicht, Ziele innerhalb dieser Elemente zu beobachten, bevor (oder nachdem) sie in den Sichtbereich gescrollt werden—anstatt nur, wenn sie erstmals sichtbar werden. ([Firefox Bug 1860030](https://bugzil.la/1860030)).
- Die [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) Eigenschaft der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) Attribut des {{htmlelement("dialog")}} Elements werden unterstützt.
  Entwickler können diese verwenden, um zu spezifizieren, welche Mechanismen einen Dialog schließen können, wie Anwenderinteraktionen außerhalb des Dialogs ("Lichtdimmen") oder programmatisches Schließen.
  ([Firefox Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle akzeptieren jetzt ein [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) Argument, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) nimmt auch die [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) Argumente an. ([Firefox Bug 1936411](https://bugzil.la/1936411)).
  ([Firefox Bug 1936411](https://bugzil.la/1936411))
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Auslöser (Steuerelement) her.
    In ähnlicher Weise wie das entsprechende deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) macht dies den Popover für Tastaturbenutzer zugänglicher (siehe [Popover-Zugänglichkeitsmerkmale](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt auch einen impliziten Ankerbezug zwischen den beiden, was eine natürlichere Positionierung von Popovern relativ zu ihren Steuerungen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) Argumente für `togglePopover()` können verwendet werden, um den Popover zwangsweise zu öffnen oder zu schließen, und werden ignoriert, wenn der Popover bereits im erzwungenen Zustand ist.
    Im Gegensatz zu `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn der Popover bereits im Zielzustand ist.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird jetzt auf Windows vollständig unterstützt, in allen Kontexten außer Servicearbeitern. Dadurch können Entwickler Berechnungen und Grafikrendering mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Computers eines Benutzers durchführen. ([Firefox Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die experimentelle CDP (Chrome DevTools Protocol) Implementierung wurde aus Firefox entfernt. Mit ihr wurde auch die Unterstützung für die `remote.active-protocols` Präferenz entfernt. Weitere Details zu diesem Thema finden Sie auf [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox Bug 1882096](https://bugzil.la/1882096)).
- Die temporäre Präferenz `remote.system-access-check.enabled` wurde entfernt. Diese Präferenz kann nicht mehr verwendet werden, um Systemzugriffskontrollen beim Testen mit WebDriver im Chrome-Scope von Firefox zu deaktivieren ([Firefox Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy"-Argument des `browser.createUserContext` Befehls wurde hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy beim Erstellen eines Benutzerkontextes (z.B. Firefox Container) einzurichten. Unterstützung für zusätzliche Proxytypen wird später hinzugefügt ([Firefox Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated` Ereignis wurde implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung wurde verbessert, wenn versucht wird, eine nicht gepackte, unsignierte Web-Erweiterung dauerhaft zu installieren ([Firefox Bug 1958723](https://bugzil.la/1958723)).
- Die `browsingContext.navigate` und `browsingContext.reload` Befehle wurden aktualisiert, um das `browsingContext.navigationCommitted` Ereignis abzuwarten, wenn die Warteoption "keine" verwendet wird ([Firefox Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi Cookie-APIs wurden aktualisiert, um den "default"-Wert im "sameSite"-Eigenschaft zu unterstützen, um auf die neuesten Änderungen in der Plattform-API zu reagieren, die es nicht mehr erlauben würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms-Verzögerungen für jeden Aufruf von `WebDriver:ElementClick` zu vermeiden - selbst wenn keine Navigation erfolgt - haben wir das Click-and-Wait-Timeout für eine mögliche Navigation auf 50ms gesenkt, um die Rückwärtskompatibilität zu gewährleisten. Der [Timeout ist nun auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann von Benutzern durch eine Präferenz vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) ([Firefox Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung für die Interaktion mit CHIPS-Cookies (Cookies mit unabhängigem partitioniertem Zustand) wurde in Marionette hinzugefügt ([Firefox Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemata des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, das Details zu den im Browser festgelegten Gebietsschemata zurückgibt. ([Firefox Bug 1888486](https://bugzil.la/1888486))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 141 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudo-Klasse {{CSSXRef(":active-view-transition")}} ermöglicht es Ihnen, Inhalte zu stylen, während ein [View Transition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-Anwendung (SPA) stattfindet. ([Firefox Bug 1956140](https://bugzil.la/1956140)).
