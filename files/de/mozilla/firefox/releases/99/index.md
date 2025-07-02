---
title: Firefox 99 für Entwickler
slug: Mozilla/Firefox/Releases/99
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 99, die Entwickler betreffen werden. Firefox 99 wurde am 5. April 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) ist jetzt aktiviert und die empfohlene Methode, um festzustellen, ob ein Browser die Inline-Anzeige von PDF-Dateien beim Navigieren zu ihnen unterstützt.
  Websites, die die veralteten Eigenschaften [`navigator.plugins`](/de/docs/Web/API/Navigator/plugins) und [`navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) verwenden, um die Unterstützung des PDF-Viewers zu ermitteln, sollten nun die neue Eigenschaft verwenden, obwohl diese jetzt fest codierte Signalwerte zurückgeben, die mit dem von `pdfViewerEnabled` bereitgestellten Signal übereinstimmen ([Firefox-Bug 1720353](https://bugzil.la/1720353)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) wird jetzt unterstützt.
  Unter anderem ermöglicht dies Websites, die Konfiguration an sich ändernde Netzwerkbedingungen anzupassen ([Firefox-Bug 1253706](https://bugzil.la/1253706)).

#### Entfernungen

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) war zuvor nur auf Android aktiviert, ist nun aber standardmäßig auf allen Plattformen deaktiviert.
  Diese API soll entfernt werden, da sie eine erhebliche Menge an Benutzerinformationen offenlegt, die möglicherweise für Fingerprinting verwendet werden können.
  ([Firefox-Bug 1637922](https://bugzil.la/1637922)).

### WebDriver-Konformität (Marionette)

- Es wurde ein Fehler behoben, bei dem die Umschalttaste nicht korrekt gehandhabt wurde, wenn sie Teil einer Tastenfolge des `WebDriver:ElementSendKeys`-Befehls war ([Firefox-Bug 1757636](https://bugzil.la/1757636)).

## Änderungen für Add-on-Entwickler

## Ältere Versionen

{{Firefox_for_developers}}
