---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: fcd1d9c502e8a56f0002637b157df0eff493c34f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) und erscheint am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung. Sie können den [Projekt-Tracker für diese Version hier ansehen](https://github.com/mdn/mdn/issues/698).

<!-- Autoren: Bitte heben Sie alle Überschriften hervor, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwickler-Tools -->

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzuzeigen, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen statt Dateien ermöglichen soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht geeignet ist, wenn Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

<!-- #### Entfernungen -->

### CSS

- Die CSS-Eigenschaft {{CSSXRef("font-variant-emoji")}} ermöglicht es Ihnen, einen Standarddarstellungsstil für die Anzeige von Emojis festzulegen ([Firefox-Bug 1954214](https://bugzil.la/1954214)).

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

### JavaScript

- Die Lesezugriffseigenschaft [`variants`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) wird jetzt bei Instanzen von {{jsxref("Intl.Locale")}} unterstützt.
  Diese Eigenschaft gibt die Varianten zurück, die mit einem Gebietsschema verbunden sind, als eine Zeichenkette, die durch Bindestriche (`-`) getrennte Kennungen enthält.
  Es bietet eine robustere Möglichkeit, Variantensubtags eines Sprachkennzeichens zu ermitteln und festzulegen, anstatt ein Gebietsschema-String manuell zu analysieren oder zu ändern ([Firefox-Bug 1970161](https://bugzil.la/1970161)).

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des Antwort-Headers {{httpheader("Clear-Site-Data")}} löscht jetzt den {{Glossary("bfcache", "bfcache")}} (Vorwärts-Rückwärts-Cache).
  Dies ermöglicht es einer Website sicherzustellen, dass wenn jemand nach einer Abmeldung rückwärts navigiert, keine privaten Details der ursprünglichen Sitzung offengelegt werden. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der Schnittstelle [`PointerEvent`](/de/docs/Web/API/PointerEvent) wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung beibehalten wird. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der Schnittstelle [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) wird jetzt unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Observers einen Rand hinzu, was es ermöglicht, Ziele innerhalb dieser Elemente zu beobachten, bevor (oder nachdem) sie in den Sichtbereich gescrollt werden – anstatt nur dann, wenn sie erstmals sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der Schnittstelle [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen ein Dialog schließen können, wie etwa Benutzerinteraktionen außerhalb des Dialogs ("leichtes Verwerfen") oder programmatisches Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) akzeptieren nun ein Argument [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert auch die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2). ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  ([Firefox-Bug 1936411](https://bugzil.la/1936411))
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Auslöser (Steuerelement) her.
    Genau wie das gleichwertige deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) macht dies das Popover für Tastaturnutzer zugänglicher (siehe [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es schafft auch eine implizite Ankerreferenz zwischen den beiden, welche eine natürlichere Positionierung von Popovers relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover zwangsweise zu öffnen oder zu schließen, und werden ignoriert, wenn das Popover bereits im erzwungenen Zustand ist.
    Im Gegensatz zu `showPopover()` und `hidePopover()` löst dies keine Ausnahme aus, wenn das Popover bereits im Zielzustand ist.

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die temporäre Einstellung `remote.system-access-check.enabled` wurde entfernt. Diese Einstellung kann nicht mehr verwendet werden, um Systemzugriffsprüfungen beim Verwenden von WebDriver im Chrome-Bereich von Firefox während Tests zu deaktivieren ([Firefox-Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das Argument "proxy" des Befehls `browser.createUserContext` hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy beim Erstellen eines Benutzerkontexts (z.B. Firefox Container) festzulegen. Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox-Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated`-Ereignis implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` im Kontext einer Webseite aufgerufen wird ([Firefox-Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine nicht signierte, nicht gepackte Web-Erweiterung dauerhaft zu installieren ([Firefox-Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` aktualisiert, um auf das Ereignis `browsingContext.navigationCommitted` zu warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox-Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi-Cookie-APIs aktualisiert, um den "default"-Wert in der "sameSite"-Eigenschaft zu unterstützen, um auf die jüngsten Änderungen in der Plattform-API zu reagieren, welche es nicht mehr erlauben, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox-Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200-ms-Verzögerungen bei jedem Aufruf von `WebDriver:ElementClick` zu vermeiden – selbst wenn keine Navigation erfolgt – haben wir das Klick-und-Warte-Timeout für eine potenzielle Navigation zur Rückwärtskompatibilität auf 50 ms gesenkt. Der [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann durch Nutzer vollständig deaktiviert werden](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) ([Firefox-Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette für die Interaktion mit CHIPS-Cookies (Cookies Having Independent Partitioned State) hinzugefügt ([Firefox-Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-On-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, welche Details zu den im Browser eingestellten Gebietsschemas zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

<!-- ### Entfernungen -->

<!-- ### Weitere -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 141 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  Die CSS-{{CSSXRef(":active-view-transition")}}-Pseudoklasse ermöglicht es Ihnen, Inhalte zu stylen, während eine [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) in einer Single-Page-App (SPA) stattfindet. ([Firefox-Bug 1956140](https://bugzil.la/1956140)).
