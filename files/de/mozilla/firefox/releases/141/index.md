---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit. Sie können [das Projekt-Tracker für diese Veröffentlichung hier einsehen](https://github.com/mdn/mdn/issues/698).

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox Fehler 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element die Auswahl von Verzeichnissen anstelle von Dateien ermöglichen soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht geeignet ist für Anwendungsfälle, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox Fehler 1973726](https://bugzil.la/1973726)).

<!-- #### Entfernen -->

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernen -->

<!-- ### SVG -->

<!-- #### Entfernen -->

### HTTP

- Die [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) Direktive des {{httpheader("Clear-Site-Data")}} Antwort-Headers löscht jetzt den {{Glossary("bfcache", "bfcache")}} (vorwärts-rückwärts Cache).
  Dies ermöglicht es einer Seite sicherzustellen, dass, wenn jemand zurück navigiert, nachdem ein Benutzer sich abgemeldet hat, private Details, die während der Anfangssitzung sichtbar waren, nicht offengelegt werden. ([Firefox Fehler 1930501](https://bugzil.la/1930501)).

<!-- #### Entfernen -->

<!-- ### Sicherheit -->

<!-- #### Entfernen -->

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) des [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interfaces wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung besteht. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren. ([Firefox Fehler 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Interfaces wird jetzt unterstützt. Es fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Wurzelelements des Beobachters einen Rand hinzu, was es ermöglicht, Ziele innerhalb dieser Elemente zu beobachten, bevor (oder nachdem) sie in Sicht gescrollt werden, anstatt nur, wenn sie zuerst sichtbar werden. ([Firefox Fehler 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Interfaces und das entsprechende Attribut [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) des {{htmlelement("dialog")}} Elements werden unterstützt.
  Entwickler können diese verwenden, um zu spezifizieren, welche Mechanismen einen Dialog schließen können, wie z.B. Benutzerinteraktion außerhalb des Dialogs ("light dismiss") oder programmgesteuertes Schließen. ([Firefox Fehler 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interfaces nehmen jetzt ein Argument [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) an, und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) akzeptiert auch das Argument [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2). ([Firefox Fehler 1936411](https://bugzil.la/1936411)).
  ([Firefox Fehler 1936411](https://bugzil.la/1936411))
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Auslöser (Steuerelement) her.
    In gleicher Weise wie das entsprechende deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget) macht es das Popover für Tastaturbenutzer zugänglicher (siehe [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es erstellt auch eine implizite Ankerreferenz zwischen den beiden, was eine natürlichere Positionierung von Popovers relativ zu ihren Steuerelementen ermöglicht (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die Argumente [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) für `togglePopover()` können verwendet werden, um das Popover gezwungen zu öffnen oder zu schließen, und wird ignoriert, wenn das Popover bereits im erzwungenen Zustand ist.
    Anders als `showPopover()` und `hidePopover()` wirft dies keine Ausnahme, wenn das Popover bereits im Zielzustand ist.

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernen -->

<!-- ### WebAssembly -->

<!-- #### Entfernen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details zu den im Browser gesetzten Gebietsschemas zurückgibt. ([Firefox Fehler 1888486](https://bugzil.la/1888486))

<!-- ### Entfernen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie im `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).
