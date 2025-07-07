---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 049e72b26fe20067dd70799ef4b4fc49d7636c04
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit. Sie können [das Projektprotokoll für diese Version hier einsehen](https://github.com/mdn/mdn/issues/698).

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden nun teilweise auf Firefox Android unterstützt ([Firefox-Bug 1887878](https://bugzil.la/1887878)).
Das Attribut kann gesetzt werden, um anzuzeigen, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten soll.
Beachten Sie, dass die zurückgegebenen Dateieinträge für den ausgewählten Ordner stets einen leeren String in ([`File.webkitRelativePath`](/de/docs/Web/API/File/webkitRelativePath)) enthalten. Das bedeutet, dass `webkitdirectory` nicht für Anwendungsfälle geeignet ist, bei denen Informationen über die Verzeichnisstruktur benötigt werden ([Firefox-Bug 1973726](https://bugzil.la/1973726)).
<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### HTTP

- Die [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Direktive des {{httpheader("Clear-Site-Data")}}-Antwort-Headers löscht nun den {{Glossary("bfcache", "bfcache")}} (Vorwärts-Rückwärts-Cache).
  Dies ermöglicht es einer Website, sicherzustellen, dass private Details, die während der ursprünglichen Sitzung sichtbar waren, nicht angezeigt werden, wenn jemand nach der Benutzerabmeldung rückwärts navigiert. ([Firefox-Bug 1930501](https://bugzil.la/1930501)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

<!-- ### APIs -->

<!-- #### DOM -->

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details der im Browser eingestellten Gebietsschemas zurückgibt. ([Firefox-Bug 1888486](https://bugzil.la/1888486))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solche Funktionen finden Sie auf der Seite für [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
