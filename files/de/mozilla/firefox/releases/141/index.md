---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: e1217eb34cc06e8dd50bc4ecbaac12e06b69f64f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) ausgeliefert.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit. Sie können [den Projekt-Tracker für diese Version hier ansehen](https://github.com/mdn/mdn/issues/698).

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzuzeigen, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element Verzeichnisse statt Dateien zur Auswahl anbieten sollte.
  Beachten Sie, dass die zurückgegebenen Datei-Einträge für den ausgewählten Ordner immer eine leere Zeichenkette in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht geeignet ist für Anwendungsfälle, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox Bug 1973726](https://bugzil.la/1973726)).

### HTTP

- Die [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Anweisung des Antwort-Headers {{httpheader("Clear-Site-Data")}} löscht nun den {{Glossary("bfcache", "bfcache")}} (Rück- und Vorwärts-Zwischenspeicher).
  Dies ermöglicht es einer Site sicherzustellen, dass wenn jemand rückwärts navigiert, nachdem ein Benutzer sich abgemeldet hat, private Details, die während der ersten Sitzung sichtbar waren, nicht offen gelegt werden. ([Firefox Bug 1930501](https://bugzil.la/1930501)).

### APIs

- Die [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId)-Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle wird nun unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren. ([Firefox Bug 1968400](https://bugzil.la/1968400)).
- Die [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin)-Eigenschaft der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle wird nun unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Beobachters einen Rand hinzu, wodurch Ziele innerhalb dieser Elemente beobachtet werden können, bevor (oder nachdem) sie in den sichtbaren Bereich gescrollt werden — statt nur, wenn sie erstmals sichtbar werden. ([Firefox Bug 1860030](https://bugzil.la/1860030)).
- Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy)-Attribut der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen einen Dialog schließen können, wie z. B. Benutzerinteraktionen außerhalb des Dialogs ("Light-Dismiss") oder das programmatische Schließen.
  ([Firefox Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle nehmen nun ein Argument [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) auch die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) entgegen. ([Firefox Bug 1936411](https://bugzil.la/1936411)).
  ([Firefox Bug 1936411](https://bugzil.la/1936411))
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Aufrufer (Steuerelement) her.
    Genauso wie das entsprechende deklarative Attribut, [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), macht dies das Popover für Tastaturnutzer zugänglicher (siehe [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt auch eine implizite Ankerreferenz zwischen den beiden, was eine natürlichere Positionierung von Popovers relativ zu ihren Steuerungen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2)-Argumente zu `togglePopover()` können verwendet werden, um das Popover zwangsweise zu öffnen oder zu schließen, und werden ignoriert, wenn sich das Popover bereits im erzwungenen Zustand befindet.
    Im Gegensatz zu `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn sich das Popover bereits im Zielzustand befindet.

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die temporäre Einstellung `remote.system-access-check.enabled` wurde entfernt. Diese Einstellung kann nicht mehr verwendet werden, um Systemzugriffsprüfungen zu deaktivieren, wenn WebDriver im Chrome-Bereich von Firefox während Tests verwendet wird ([Firefox Bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Unterstützung für das "proxy"-Argument des `browser.createUserContext`-Befehls hinzugefügt. Dies ermöglicht es Clients, entweder einen "direkten" oder "manuellen" Proxy beim Erstellen eines Benutzerkontexts (z.B. Firefox Container) einzurichten. Unterstützung für zusätzliche Proxy-Typen wird später hinzugefügt ([Firefox Bug 1967653](https://bugzil.la/1967653)).
- Das neue `browsingContext.historyUpdated`-Ereignis implementiert, das ausgelöst wird, wenn `history.pushState()`, `history.replaceState()` oder `document.open()` innerhalb des Kontexts einer Webseite aufgerufen wird ([Firefox Bug 1906051](https://bugzil.la/1906051)).
- Die Fehlermeldung verbessert, die angezeigt wird, wenn versucht wird, eine nicht gepackte, nicht signierte Web-Erweiterung dauerhaft zu installieren ([Firefox Bug 1958723](https://bugzil.la/1958723)).
- Die Befehle `browsingContext.navigate` und `browsingContext.reload` aktualisiert, um auf das `browsingContext.navigationCommitted`-Ereignis zu warten, wenn die "wait"-Bedingung "none" verwendet wird ([Firefox Bug 1967469](https://bugzil.la/1967469)).
- Die WebDriver BiDi Cookie-APIs aktualisiert, um die "default"-Werteigenschaft im "sameSite"-Eigenschaftsbereich zu unterstützen, um kürzliche Änderungen in der Plattform-API zu adressieren, die es nicht mehr erlauben würden, ein Cookie mit "sameSite=None" und "secure=false" auf HTTP-Seiten zu setzen ([Firefox Bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- Um unnötige 200ms Verzögerungen bei jedem Aufruf von `WebDriver:ElementClick` zu vermeiden - auch wenn keine Navigation stattfindet - haben wir das Timeout für das Klicken-und-Warten auf eine potenzielle Navigation für die Rückwärtskompatibilität auf 50ms gesenkt. Das [Timeout ist jetzt auch konfigurierbar](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) und [kann komplett deaktiviert](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) werden durch Benutzer über eine Einstellung ([Firefox Bug 1972271](https://bugzil.la/1972271)).
- Unterstützung in Marionette für die Interaktion mit CHIPS-Cookies (Cookies Having Independent Partitioned State) hinzugefügt ([Firefox Bug 1972830](https://bugzil.la/1972830)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, welche Details der im Browser gesetzten Gebietsschemas zurückgibt. ([Firefox Bug 1888486](https://bugzil.la/1888486))

## Experimentelle Web-Features

Diese Features sind in Firefox 141 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
