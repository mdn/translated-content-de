---
title: Firefox 133 für Entwickler
slug: Mozilla/Firefox/Releases/133
l10n:
  sourceCommit: 0267e5a42d6e0ecadfe20cb3cc0bfa3c9e660d7f
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 133, die Entwickler betreffen. Firefox 133 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) und wird am [26. November 2024](https://whattrainisitnow.com/release/?version=133) veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

### HTML

#### Entfernungen

### CSS

#### Entfernungen

### JavaScript

#### Entfernungen

### SVG

#### Entfernungen

### HTTP

#### Entfernungen

### Sicherheit

#### Entfernungen

### APIs

- Die [`WorkerNavigator.permissions`](/de/docs/Web/API/WorkerNavigator/permissions)-Eigenschaft wird nun unterstützt, was es ermöglicht, die [Permissions API](/de/docs/Web/API/Permissions_API) sowohl in [Workern](/de/docs/Web/API/Web_Workers_API) als auch im Hauptfenster-Thread zu verwenden. ([Firefox Bug 1193373](https://bugzil.la/1193373)).
- Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle zur Verarbeitung von [servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events) wird nun in [Service Workern](/de/docs/Web/API/Service_Worker_API) unterstützt. ([Firefox Bug 1681218](https://bugzil.la/1681218)).
- Die [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-, [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)- und [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Schnittstellen der [WebCodecs API](/de/docs/Web/API/WebCodecs_API) werden nun unterstützt, was das Dekodieren von Bildern sowohl vom Haupt- als auch vom Worker-Thread aus ermöglicht. ([Firefox Bug 1923755](https://bugzil.la/1923755)).

#### DOM

#### Medien, WebRTC und Web Audio

#### Entfernungen

### WebAssembly

#### Entfernungen

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

#### WebDriver BiDi

#### Marionette

## Änderungen für Add-on-Entwickler

### Entfernungen

### Sonstiges

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 133, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite für [experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

## Ältere Versionen

{{Firefox_for_developers}}
