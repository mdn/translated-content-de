---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen.
Firefox 141 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung. Sie können den [Projekt-Tracker für diese Version hier einsehen](https://github.com/mdn/mdn/issues/698).

## Änderungen für Webentwickler

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt auf Firefox Android unterstützt.
  Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file) Element die Auswahl von Verzeichnissen anstelle von Dateien anbieten soll. ([Firefox Bug 1887878](https://bugzil.la/1887878)).

### HTTP

- Die Direktive [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) des {{httpheader("Clear-Site-Data")}} Antwort-Headers löscht nun den {{Glossary("bfcache", "bfcache")}} (Backwards-Forwards-Cache).
  Dies ermöglicht es einer Seite sicherzustellen, dass wenn jemand zurück navigiert, nachdem ein Benutzer sich abgemeldet hat, keine privaten Details, die während der ursprünglichen Sitzung sichtbar waren, preisgegeben werden. ([Firefox Bug 1930501](https://bugzil.la/1930501)).

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Dies ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, welche Details über die im Browser eingestellten Gebietsschemas zurückgibt. ([Firefox Bug 1888486](https://bugzil.la/1888486))

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der Seite `about:config` und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
