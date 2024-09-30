---
title: Firefox 99 für Entwickler
slug: Mozilla/Firefox/Releases/99
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 99, die Entwickler betreffen werden. Firefox 99 wurde am 5. April 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) ist jetzt aktiviert und es wird empfohlen, diese Eigenschaft zu verwenden, um festzustellen, ob ein Browser die Inline-Anzeige von PDF-Dateien beim Navigieren zu ihnen unterstützt.
  Webseiten, die die veralteten Eigenschaften [`navigator.plugins`](/de/docs/Web/API/Navigator/plugins) und [`navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) verwenden, um die Unterstützung des PDF-Viewers zu ermitteln, sollten jetzt die neue Eigenschaft nutzen, auch wenn diese nun festkodierte Mock-Werte zurückgeben, die dem Signal von `pdfViewerEnabled` entsprechen ([Firefox-Bug 1720353](https://bugzil.la/1720353)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) wird jetzt unterstützt.
  Dies ermöglicht es unter anderem, dass Webseiten die Konfiguration an sich ändernde Netzwerkbedingungen anpassen können ([Firefox-Bug 1253706](https://bugzil.la/1253706)).

#### Entfernungen

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) war zuvor nur auf Android aktiviert, ist jetzt jedoch standardmäßig auf allen Plattformen deaktiviert.
  Diese API befindet sich auf dem Weg zur Entfernung, da sie eine beträchtliche Menge an Benutzerinformationen offenbart, die zum Fingerprinting verwendet werden könnten.
  ([Firefox-Bug 1637922](https://bugzil.la/1637922)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, bei dem die Umschalttaste nicht korrekt verarbeitet wurde, wenn sie Teil einer Tastenfolge des `WebDriver:ElementSendKeys`-Befehls war ([Firefox-Bug 1757636](https://bugzil.la/1757636)).

## Änderungen für Add-on-Entwickler

## Ältere Versionen

{{Firefox_for_developers}}
