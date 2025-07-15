---
title: Firefox 99 für Entwickler
short-title: Firefox 99
slug: Mozilla/Firefox/Releases/99
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 99, die Entwickler betreffen. Firefox 99 wurde am 5. April 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) ist jetzt aktiviert und die empfohlene Methode, um zu bestimmen, ob ein Browser die Inline-Anzeige von PDF-Dateien beim Navigieren zu ihnen unterstützt.
  Websites, die die veralteten Eigenschaften [`navigator.plugins`](/de/docs/Web/API/Navigator/plugins) und [`navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) verwenden, um Unterstützung für PDF-Viewer zu ermitteln, sollten jetzt die neue Eigenschaft verwenden, auch wenn diese jetzt fest kodierte Mock-Werte zurückgeben, die mit dem Signal übereinstimmen, das durch `pdfViewerEnabled` bereitgestellt wird ([Firefox-Bug 1720353](https://bugzil.la/1720353)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) wird jetzt unterstützt.
  Unter anderem ermöglicht dies Websites, die Konfiguration an sich ändernde Netzwerkbedingungen anzupassen ([Firefox-Bug 1253706](https://bugzil.la/1253706)).

#### Entfernungen

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) war bisher nur auf Android aktiviert, ist jetzt aber standardmäßig auf allen Plattformen deaktiviert.
  Diese API befindet sich auf dem Weg zur Entfernung, da sie eine erhebliche Menge an Benutzerinformationen offenlegt, die für Fingerprinting verwendet werden könnten.
  ([Firefox-Bug 1637922](https://bugzil.la/1637922)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, bei dem die Umschalttaste nicht ordnungsgemäß behandelt wurde, wenn sie Teil einer Tastenfolge des `WebDriver:ElementSendKeys`-Befehls war ([Firefox-Bug 1757636](https://bugzil.la/1757636)).

## Änderungen für Add-on-Entwickler

Keine bemerkenswerten Änderungen.
