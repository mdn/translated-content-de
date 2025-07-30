---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Stabil)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 8b87b06605b284890952ac15b98c588b0b3bd9de
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen. Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden nun teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten sollte.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht für Anwendungsfälle geeignet ist, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standard-Präsentationsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Zugriffs-Property [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird jetzt auf {{jsxref("Intl.Locale")}} Instanzen unterstützt. Diese Eigenschaft gibt die Varianten zurück, die einem Gebietsschema als Zeichenkette von durch Bindestrich (`-`) getrennten Bezeichnern zugeordnet sind. Sie bietet eine robustere Möglichkeit, Varianten-Subtags eines Sprachkennzeichens zu erhalten und zu setzen, anstatt einen Gebietsschema-String manuell zu analysieren oder zu ändern ([Firefox-Bug 1970161](https://bugzil.la/1970161)).
- Die explizite [Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management) API, die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}, die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}} und {{jsxref("SuppressedError")}} sowie die wohlbekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} umfasst, wird nun unterstützt. Diese Funktionen gewährleisten eine automatische Bereinigung von Ressourcen wie Dateihandles oder Streamlesern, wenn sie außer Gültigkeitsbereich geraten, reduzieren Lecks und vereinfachen die Fehlerbehandlung ([Firefox-Bug 1967744](https://bugzil.la/1967744)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des {{httpheader("Clear-Site-Data")}} Antwort-Headers löscht nun den {{Glossary("bfcache", "bfcache")}} (rückwärts-vorwärts Cache). Dies ermöglicht es einer Website sicherzustellen, dass private Details, die während der anfänglichen Sitzung sichtbar waren, nicht offengelegt werden, wenn jemand nach dem Abmelden rückwärts navigiert. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle wird nun unterstützt. Dies gibt jedem Eingabegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere gleichzeitig interagierende Eingabegeräte (wie Stifte) zu identifizieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) Eigenschaft der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Schnittstelle wird nun unterstützt. Sie fügt allen geschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Observers einen Rand hinzu, wodurch Ziele innerhalb dieser Elemente beobachtet werden können, bevor (oder nachdem) sie ins Sichtfenster gescrollt werden—anstatt nur, wenn sie erstmals sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}} Elements werden unterstützt. Entwickler können diese verwenden, um festzulegen, welche Mechanismen ein Dialog schließen können, wie z.B. Benutzerinteraktion außerhalb des Dialogs ("light dismiss") oder programmatisches Schließen. ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle nehmen nun ein Argument [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) an, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert auch die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2). ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und dessen Auslöser (Steuerelement) her. Ähnlich dem äquivalenten deklarativen Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), macht dies das Popover für Tastaturbenutzer zugänglicher (siehe [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es schafft auch eine implizite Verankerungsreferenz zwischen den beiden, die eine natürlichere Positionierung von Popovern relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Verankerungspositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) zu `togglePopover()` können verwendet werden, um das Popover gezwungenermaßen zu öffnen oder zu schließen und wird ignoriert, wenn das Popover bereits im erzwungenen Zustand ist. Anders als `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn das Popover bereits im Zielzustand ist.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird nun vollständig auf Windows unterstützt, in allen Kontexten außer für Service-Worker. Dies ermöglicht es Entwicklern, Berechnung und Grafikwiedergabe mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Computers eines Benutzers durchzuführen. ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die temporäre Präferenz `remote.system-access-check.enabled` wurde entfernt. Diese Präferenz kann nicht mehr verwendet werden, um Systemzugriffskontrollen zu deaktivieren, wenn WebDriver im Firefox-Chrome-Scope während Tests verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy"-Argument des Befehls `browser.createUserContext` hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy einzurichten, wenn sie einen Benutzerkontext erstellen (d.h. Firefox-Container). Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated` Ereignis implementiert, welches ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine nicht gepackte, unsignierte Web-Erweiterung dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` aktualisiert, um auf das `browsingContext.navigationCommitted` Ereignis zu warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi Cookie-APIs aktualisiert, um den "default"-Wert in der "sameSite"-Eigenschaft zu unterstützen, um auf kürzliche Änderungen in der Plattform-API zu reagieren, die es nicht mehr erlauben würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige Verzögerungen von 200 ms für jeden Aufruf von `WebDriver:ElementClick` zu vermeiden - selbst wenn keine Navigation erfolgt - haben wir das Timeout für Klicken-und-Warten bei einer potenziellen Navigation für die Rückwärtskompatibilität auf 50 ms gesenkt. Das [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) von Benutzern durch eine Präferenz ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette für den Umgang mit CHIPS-Cookies (Cookies Having Independent Partitioned State) hinzugefügt ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} Methode hinzu, um die bevorzugten Gebietsschemata des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details zu den im Browser festgelegten Gebietsschemata zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 141 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":active-view-transition")}} ermöglicht es Ihnen, Inhalte zu stylen, während ein [View Transition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-Application (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
