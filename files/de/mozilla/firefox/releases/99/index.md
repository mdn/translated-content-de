---
title: Firefox 99 Versionshinweise für Entwickler
short-title: Firefox 99
slug: Mozilla/Firefox/Releases/99
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel informiert über die Änderungen in Firefox 99, die Entwickler betreffen werden. Firefox 99 wurde am 5. April 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

Keine bemerkenswerten Änderungen.

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

- [`navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) ist jetzt aktiviert und die empfohlene Methode, um festzustellen, ob ein Browser die Inline-Anzeige von PDF-Dateien unterstützt, wenn zu ihnen navigiert wird.
  Websites, die die veralteten Eigenschaften [`navigator.plugins`](/de/docs/Web/API/Navigator/plugins) und [`navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) verwenden, um die Unterstützung von PDF-Viewern abzuleiten, sollten jetzt die neue Eigenschaft verwenden, auch wenn diese jetzt fest codierte Scheinwerte zurückgeben, die mit dem von `pdfViewerEnabled` bereitgestellten Signal übereinstimmen ([Firefox Bug 1720353](https://bugzil.la/1720353)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) wird jetzt unterstützt.
  Unter anderem ermöglicht dies Websites, die Konfiguration an sich ändernde Netzwerkbedingungen anzupassen ([Firefox Bug 1253706](https://bugzil.la/1253706)).

#### Entfernungen

- Die [Network Information API](/de/docs/Web/API/Network_Information_API), die bisher nur auf Android aktiviert war, ist jetzt standardmäßig auf allen Plattformen deaktiviert.
  Diese API befindet sich auf dem Weg zur Entfernung, da sie eine erhebliche Menge an Benutzerinformationen offenlegt, die für Fingerprinting verwendet werden könnten.
  ([Firefox Bug 1637922](https://bugzil.la/1637922)).

### WebDriver-Konformität (Marionette)

- Es wurde ein Fehler behoben, bei dem die Umschalttaste nicht richtig gehandhabt wurde, wenn sie Teil einer Tastenfolge des `WebDriver:ElementSendKeys`-Befehls war ([Firefox Bug 1757636](https://bugzil.la/1757636)).

## Änderungen für Add-on-Entwickler

Keine bemerkenswerten Änderungen.
