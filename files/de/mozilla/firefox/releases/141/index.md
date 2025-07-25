---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: ca93613d23aef19ea80f1e0b34eab44e5faf54d1
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen. Firefox 141 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und wird am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung. Sie können das [Projekt-Tracking für diese Version hier einsehen](https://github.com/mdn/mdn/issues/698).

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise in Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)). Das Attribut kann festgelegt werden, um anzuzeigen, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten soll. Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer einen leeren String im ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass `webkitdirectory` nicht geeignet ist für Anwendungsfälle, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die Zugriffsoroperty [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird jetzt bei Instanzen von {{jsxref("Intl.Locale")}} unterstützt. Diese Eigenschaft gibt die Varianten zurück, die mit einem Gebietsschema verbunden sind, als String von Bindestrichen (`-`) getrennten Identifikatoren. Sie bietet eine robustere Möglichkeit, Variantensubtags eines Sprachkennzeichens zu erhalten und zu setzen, anstatt eine Sprachzeichenfolge manuell zu parsen oder zu ändern ([Firefox-Bug 1970161](https://bugzil.la/1970161)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des {{httpheader("Clear-Site-Data")}} Antwort-Headers löscht jetzt den {{Glossary("bfcache", "bfcache")}} (vorwärts-rückwärts Cache). Dadurch kann eine Seite sicherstellen, dass, wenn jemand zurück navigiert, nachdem ein Benutzer sich abgemeldet hat, keine privaten Details, die während der anfänglichen Sitzung sichtbar waren, offengelegt werden ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) des [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interface wird nun unterstützt. Dies gibt jedem Eingabegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Eingabegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Interface wird nun unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Observers einen Rand hinzu, was ermöglicht, dass Ziele innerhalb dieser Elemente beobachtet werden können, bevor (oder nachdem) sie gescrollt werden und in den Sichtbereich gelangen—anstatt nur, wenn sie zum ersten Mal sichtbar werden ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Interface und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}} Elements werden unterstützt. Entwickler können diese nutzen, um zu spezifizieren, welche Mechanismen einen Dialog schließen können, wie z.B. Benutzerinteraktion außerhalb des Dialogs („leichtes Schließen“) oder programmatisches Schließen. ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface nehmen nun ein [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) Argument, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) nimmt auch die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2). ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Auslöser (Steuerelement) her. Genau wie das entsprechende deklarative Attribut, [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), macht dies das Popover zugänglicher für Tastaturnutzer (siehe [Popover-Accessibility-Funktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es schafft auch einen impliziten Ankerbezug zwischen den beiden, wodurch eine natürlichere Positionierung von Popovers relativ zu ihren Steuerelementen ermöglicht wird (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) zu `togglePopover()` können verwendet werden, um das Popover gewaltsam zu öffnen oder zu schließen und wird ignoriert, wenn das Popover bereits im erzwungenen Zustand ist. Im Gegensatz zu `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn das Popover bereits im Zielzustand ist.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird nun vollständig auf Windows unterstützt, in allen Kontexten mit Ausnahme von Service-Workern. Dies ermöglicht es Entwicklern, Berechnungen und Grafikdarstellungen mit der [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) des Computers eines Benutzers durchzuführen ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die temporäre `remote.system-access-check.enabled` Präferenz wurde entfernt. Diese Präferenz kann nicht länger verwendet werden, um Systemzugriffsüberprüfungen zu deaktivieren, wenn WebDriver im Chrome-Scope von Firefox während Tests verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy"-Argument des `browser.createUserContext` Kommandos hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy beim Erstellen eines Benutzerkontexts (z.B. Firefox Container) einzurichten. Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated` Ereignis implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine nicht gepackte, nicht signierte Web-Erweiterung dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Kommandos `browsingContext.navigate` und `browsingContext.reload` aktualisiert, um auf das `browsingContext.navigationCommitted` Ereignis zu warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi Cookie-APIs aktualisiert, um den "default"-Wert im "sameSite" Property zu unterstützen, um jüngste Änderungen in der Plattform-API zu adressieren, die es nicht mehr ermöglichen würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige Verzögerungen von 200 ms bei jedem Aufruf von `WebDriver:ElementClick` zu vermeiden – selbst wenn keine Navigation erfolgt – haben wir das Timeout für das Klicken und Warten auf eine potenzielle Navigation auf 50 ms für die Abwärtskompatibilität gesenkt. Das [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann durch Benutzer komplett deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) über eine Präferenz ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette für die Interaktion mit CHIPS-Cookies (Cookies Having Independent Partitioned State) hinzugefügt ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemata des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details der im Browser gesetzten Gebietsschemata zurückgibt ([Firefox-Bug 1888486](https://bugzil.la/1888486)).

## Experimentelle Web-Features

Diese Features werden in Firefox 141 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-Pseudoklasse {{CSSXRef(":active-view-transition")}} ermöglicht es Ihnen, Inhalte zu gestalten, während ein [View-Transition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
