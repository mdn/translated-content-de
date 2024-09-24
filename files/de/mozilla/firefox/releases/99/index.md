---
title: Firefox 99 für Entwickler
slug: Mozilla/Firefox/Releases/99
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 99, die Entwickler betreffen. Firefox 99 wurde am 5. April 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- {{domxref("navigator.pdfViewerEnabled")}} ist nun aktiviert und wird als empfohlene Methode betrachtet, um festzustellen, ob ein Browser die Inline-Anzeige von PDF-Dateien unterstützt, wenn zu diesen navigiert wird.
  Websites, die die veralteten Eigenschaften {{domxref("navigator.plugins")}} und {{domxref("navigator.mimeTypes")}} verwenden, um die Unterstützung von PDF-Viewern zu ermitteln, sollten jetzt die neue Eigenschaft verwenden, auch wenn diese Eigenschaften nun fest kodierte Scheinwerte zurückgeben, die dem Signal entsprechen, das durch `pdfViewerEnabled` bereitgestellt wird ([Firefox-Bug 1720353](https://bugzil.la/1720353)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) wird nun unterstützt.
  Unter anderem ermöglicht dies Websites, die Konfiguration an sich ändernde Netzwerkbedingungen anzupassen ([Firefox-Bug 1253706](https://bugzil.la/1253706)).

#### Entfernungen

- Die [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API) war zuvor nur auf Android aktiviert, ist jetzt aber standardmäßig auf allen Plattformen deaktiviert.
  Diese API befindet sich auf dem Weg zur Entfernung, da sie eine erhebliche Menge an Benutzerinformationen preisgibt, die zum Fingerprinting verwendet werden könnten.
  ([Firefox-Bug 1637922](https://bugzil.la/1637922)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, bei dem die Umschalttaste nicht richtig behandelt wurde, wenn sie Teil einer Tastenfolge des `WebDriver:ElementSendKeys`-Befehls war ([Firefox-Bug 1757636](https://bugzil.la/1757636)).

## Änderungen für Add-on-Entwickler

## Ältere Versionen

{{Firefox_for_developers}}
