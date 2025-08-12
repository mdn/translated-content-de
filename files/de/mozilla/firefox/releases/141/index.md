---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Stabil)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 0bdd754e62773ea78e72e84aabe505d6163a266b
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 wurde am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) Eigenschaft werden jetzt teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzuzeigen, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht geeignet ist für Anwendungsfälle, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

### CSS

- Die CSS {{CSSXRef("font-variant-emoji")}} Eigenschaft ermöglicht es, einen Standard-Präsentationsstil zum Anzeigen von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- Die [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) Zugriffs-Eigenschaft wird jetzt auf {{jsxref("Intl.Locale")}} Instanzen unterstützt.
  Diese Eigenschaft gibt die Varianten zurück, die mit einem Gebietsschema als eine Zeichenkette von durch Bindestriche (`-`) getrennten Identifikatoren verbunden sind.
  Sie bietet eine robustere Methode, um Varianten-Untertags eines Sprachidentifikators zu erhalten und festzulegen, anstatt manuell einen Gebietsschema-String zu parsen oder zu bearbeiten ([Firefox-Bug 1970161](https://bugzil.la/1970161)).
- Die explizite [resource management](/de/docs/Web/JavaScript/Guide/Resource_management) API, die die Deklarationen {{jsxref("Statements/using", "using")}} und {{jsxref("Statements/await_using", "await using")}}, die Objekte {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}}, und {{jsxref("SuppressedError")}} sowie die wohlbekannten Symbole {{jsxref("Symbol.dispose")}} und {{jsxref("Symbol.asyncDispose")}} umfasst, wird jetzt unterstützt. Diese Funktionen sorgen für die automatische Bereinigung von Ressourcen wie Dateihandles oder Stream-Lesern, wenn sie aus dem Gültigkeitsbereich fallen, reduzieren Lecks und vereinfachen die Fehlerbehandlung ([Firefox-Bug 1967744](https://bugzil.la/1967744)).

### HTTP

- Die [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) Direktive des {{httpheader("Clear-Site-Data")}} Antwort-Headers leert jetzt den {{Glossary("bfcache", "bfcache")}} (Vorwärts-Rückwärts-Cache).
  Dadurch kann eine Seite sicherstellen, dass wenn jemand nach dem Abmelden eines Benutzers zurück navigiert, private Details der ursprünglichen Sitzung nicht mehr sichtbar sind. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Dies bietet eine zuverlässige Methode zur Identifizierung mehrerer Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) Eigenschaft der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Schnittstelle wird jetzt unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "scroll containers")}} innerhalb des Wurzelelements des Beobachters einen Rand hinzu, der es ermöglicht, Ziele innerhalb dieser Elemente zu beobachten, bevor (oder nachdem) sie in den Sichtbereich gescrollt werden - anstatt nur, wenn sie erstmals sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) Attribut des {{htmlelement("dialog")}} Elements werden unterstützt.
  Entwickler können diese verwenden, um anzugeben, welche Mechanismen einen Dialog schließen können, z.B. Benutzerinteraktionen außerhalb des Dialogs ("Light Dismiss") oder programmatisches Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle akzeptieren jetzt ein [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) Argument, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert auch das [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) bzw. [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) Argument. ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Auslöser (Steuerelement) her.
    Ähnlich wie das entsprechende deklarative Attribut, [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), macht dies das Popover für Tastaturnutzer besser zugänglich (siehe [Popover-Zugänglichkeitsfeatures](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt auch eine implizite Ankerreferenz zwischen den beiden, was eine natürlichere Positionierung der Popovers relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) Argumente zu `togglePopover()` können verwendet werden, um das Popover gezwungen zu öffnen oder zu schließen und werden ignoriert, wenn das Popover bereits im erzwungenen Zustand ist.
    Anders als `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn das Popover bereits im Zielzustand ist.
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) wird jetzt vollständig auf Windows unterstützt, in allen Kontexten außer für Service Worker. Dies ermöglicht es Entwicklern, Berechnungen und Grafikdarstellungen mit der [Graphics Processing Unit](https://de.wikipedia.org/wiki/Grafikprozessor) (GPU) eines Benutzercomputers durchzuführen. ([Firefox-Bug 1972486](https://bugzil.la/1972486)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die experimentelle CDP (Chrome DevTools Protocol) Implementierung wurde aus Firefox entfernt. Damit wurde auch die Unterstützung für die Einstellung `remote.active-protocols` entfernt. Weitere Details zu diesem Thema finden Sie auf [fxdx.dev](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox-Bug 1882096](https://bugzil.la/1882096)).
- Die temporäre Einstellung `remote.system-access-check.enabled` wurde entfernt. Diese Einstellung kann nicht mehr verwendet werden, um Systemzugriffskontrollen zu deaktivieren, wenn WebDriver im Chrome-Bereich von Firefox während Tests verwendet wird ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy" Argument des Befehls `browser.createUserContext` hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy bei der Erstellung eines Benutzerkontexts (z.B. Firefox Container) einzurichten. Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated` Ereignis implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, dauerhaft eine ungepackte, unsignierte Web-Erweiterung zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` aktualisiert, um auf das `browsingContext.navigationCommitted` Ereignis zu warten, wenn die "wait" Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi-Cookie-APIs aktualisiert, um den "default" Wert in der "sameSite" Eigenschaft zu unterstützen, um jüngste Änderungen in der Plattform-API zu adressieren, die es nicht mehr erlauben würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms Verzögerungen bei jedem Aufruf von `WebDriver:ElementClick` - selbst wenn keine Navigation erfolgt - zu vermeiden, wurde das Zeitlimit für Klicken-und-Warten für eine potenzielle Navigation für die Rückwärtskompatibilität auf 50ms gesenkt. Das [Zeitlimit ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) von Benutzern über eine Einstellung ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette hinzugefügt, um mit CHIPS-Cookies (Cookies Having Independent Partitioned State) zu interagieren ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details der im Browser gesetzten Gebietsschemas zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

## Experimentelle Webfeatures

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS {{CSSXRef(":active-view-transition")}} Pseudoklasse ermöglicht es Ihnen, Inhalte zu stylen, während ein [Ansichtstransition](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
