---
title: Firefox 141 für Entwickler
short-title: Firefox 141 (Nightly)
slug: Mozilla/Firefox/Releases/141
l10n:
  sourceCommit: e482e164bfb8135fd1c957bb62d816f41a4659dc
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 141, die Entwickler betreffen. Firefox 141 ist die aktuelle [Nightly-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [22. Juli 2025](https://whattrainisitnow.com/release/?version=141) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

### HTML

- Das HTML-Attribut [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) und die entsprechende Eigenschaft [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory) werden jetzt auf Firefox Android unterstützt. Das Attribut kann gesetzt werden, um anzugeben, dass ein [`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)-Element die Auswahl von Verzeichnissen anstelle von Dateien ermöglichen soll. ([Firefox Bug 1887878](https://bugzil.la/1887878)).

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

- Die [`"cache"`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache)-Direktive des {{httpheader("Clear-Site-Data")}} Antwort-Headers löscht nun den {{Glossary("bfcache", "bfcache")}} (Backwards-Forwards-Cache). Dies ermöglicht es einer Website sicherzustellen, dass, wenn jemand nach der Abmeldung des Benutzers rückwärts navigiert, private Details, die während der Initialsitzung sichtbar waren, nicht offengelegt werden. ([Firefox Bug 1930501](https://bugzil.la/1930501)).

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

- Fügt die Methode {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} hinzu, um die bevorzugten Gebietsschemas des Betriebssystems abzurufen. Diese ergänzt {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die Details der im Browser gesetzten Gebietsschemas zurückgibt. ([Firefox Bug 1888486](https://bugzil.la/1888486))

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 141 enthalten, aber standardmäßig deaktiviert. Um sie zu testen, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
