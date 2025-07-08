---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 79b9c98cd248eabe2936293ee6ea68ffd943dbc1
---

Dieser Artikel informiert über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 ist die aktuelle [Betaversion von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit. Sie können [hier den Projekt-Tracker für diese Version einsehen](https://github.com/mdn/mdn/issues/698).

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden nun teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
  Das Attribut kann gesetzt werden, um anzuzeigen, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien ermöglichen soll.
  Beachten Sie, dass die zurückgegebenen Datei-Einträge für den ausgewählten Ordner immer einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten, was bedeutet, dass die Verwendung von `webkitdirectory` nicht für Anwendungsfälle geeignet ist, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).

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

- Die [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) Direktive des {{httpheader("Clear-Site-Data")}} Antwort-Headers löscht nun den {{Glossary("bfcache", "bfcache")}} (Backwards-Forwards-Cache).
  Dadurch kann eine Seite sicherstellen, dass, wenn jemand nach dem Abmelden eines Benutzers rückwärts navigiert, keine privaten Details, die in der ursprünglichen Sitzung sichtbar waren, offengelegt werden. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die [`persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interfaces wird nun unterstützt. Dies gibt jedem Zeigegerät, das mit dem Bildschirm interagiert, eine eindeutige ID, die für die Sitzung bestehen bleibt. Es bietet eine zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren. ([Firefox-Bug 1968400](https://bugzil.la/1968400)).
- Das [`closedBy`](/de/docs/Web/API/HTMLDialogElement/closedBy) Attribut des [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement) Interfaces und das entsprechende [`closedby`](/de/docs/Web/HTML/Reference/Elements/dialog#closedby) Attribut des {{htmlelement("dialog")}} Elements werden unterstützt.
  Entwickler können diese verwenden, um anzugeben, welche Mechanismen ein Dialog schließen können, wie z.B. die Benutzereingabe außerhalb des Dialogs ("leichte Verweigerung") oder das programmatische Schließen.
  ([Firefox-Bug 1964078](https://bugzil.la/1964078)).

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

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemata des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details der im Browser eingestellten Gebietsschemata zurückgeben. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 141 verfügbar, aber standardmäßig deaktiviert.
Um sie zu testen, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
