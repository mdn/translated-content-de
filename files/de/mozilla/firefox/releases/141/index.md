---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 80344d893d920d2424cbf8c1c4aea8f45dd9e7b1
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und erscheint am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit. Sie können [den Projekt-Tracker für diese Version hier ansehen](https://github.com/mdn/mdn/issues/698).

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien ermöglichen soll.
  Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner immer eine leere Zeichenfolge in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` für Anwendungsfälle, bei denen Informationen über die Verzeichnisstruktur benötigt werden, nicht geeignet ist ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des {{httpheader("Clear-Site-Data")}}-Response-Headers löscht jetzt den {{Glossary("bfcache", "bfcache")}} (Vor- und Zurück-Cache).
  Dies ermöglicht es einer Website sicherzustellen, dass, wenn jemand nach dem Abmelden eines Benutzers zurück navigiert, keine privaten Details, die während der ersten Sitzung sichtbar waren, offenbart werden. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die Eigenschaft [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle wird jetzt unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Die Eigenschaft [`scrollMargin`](/de/docs/Web/API/IntersectionObserver/scrollMargin) der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle wird jetzt unterstützt. Sie fügt allen verschachtelten {{Glossary("scroll_container", "Scroll-Containern")}} innerhalb des Root-Elements des Observers einen Rand hinzu, wodurch Ziele innerhalb dieser Elemente beobachtet werden können, bevor (oder nachdem) sie in den Sichtbereich gescrollt werden—anstatt nur dann, wenn sie erstmals sichtbar werden. ([Firefox-Bug 1860030](https://bugzil.la/1860030)).
- Das Attribut [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) der [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)-Schnittstelle und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby)-Attribut des {{htmlelement("dialog")}}-Elements werden unterstützt.
  Entwickler können diese verwenden, um festzulegen, welche Mechanismen einen Dialog schließen können, wie z.B. Benutzerinteraktionen außerhalb des Dialogs ("leichtes Schließen") oder das programmatische Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).
- Die Methoden [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle akzeptieren jetzt ein [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source)-Argument, und `togglePopover()` akzeptiert außerdem das [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2)-Argument. ([Firefox-Bug 1936411](https://bugzil.la/1936411)).
  ([Firefox-Bug 1936411](https://bugzil.la/1936411))
  - [`options.source`](/de/docs/Web/API/HTMLElement/showPopover#source) stellt eine Beziehung zwischen einem Popover und seinem Aufrufer (Steuerelement) her.
    In gleicher Weise wie das entsprechende deklarative Attribut [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget), macht dies das Popover zugänglicher für Tastaturbenutzer (siehe [Popover-Zugänglichkeitsfunktionen](/de/docs/Web/API/Popover_API/Using#popover_accessibility_features)). Es schafft auch eine implizite Ankerreferenz zwischen den beiden, wodurch eine natürlichere Positionierung von Popovers relativ zu ihren Steuerelementen ermöglicht wird (siehe [Popover-Ankerpositionierung](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - Die [`force`](/de/docs/Web/API/HTMLElement/togglePopover#force) oder [`options.force`](/de/docs/Web/API/HTMLElement/togglePopover#force_2) Argumente bei `togglePopover()` können verwendet werden, um das Popover zwangsweise zu öffnen oder zu schließen, und wird ignoriert, wenn sich das Popover bereits im erzwungenen Zustand befindet.
    Im Gegensatz zu `showPopover()` und `hidePopover()` wird hierbei keine Ausnahme ausgelöst, wenn sich das Popover bereits im Zielzustand befindet.

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, das Details zu den im Browser festgelegten Gebietsschemas zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
