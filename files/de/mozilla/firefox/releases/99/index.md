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

Keine nennenswerten Änderungen.

### CSS

Keine nennenswerten Änderungen.

### JavaScript

Keine nennenswerten Änderungen.

### APIs

- [`navigator.pdfViewerEnabled`](/de/docs/Web/API/Navigator/pdfViewerEnabled) ist jetzt aktiviert und wird als empfohlene Methode angesehen, um festzustellen, ob ein Browser die Inline-Anzeige von PDF-Dateien beim Navigieren zu ihnen unterstützt.
  Websites, die die veralteten Eigenschaften [`navigator.plugins`](/de/docs/Web/API/Navigator/plugins) und [`navigator.mimeTypes`](/de/docs/Web/API/Navigator/mimeTypes) verwenden, um die Unterstützung des PDF-Viewers abzuleiten, sollten nun die neue Eigenschaft verwenden, auch wenn diese nun fest kodierte Scheinwerte zurückgeben, die dem Signal von `pdfViewerEnabled` entsprechen ([Firefox-Bug 1720353](https://bugzil.la/1720353)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) wird jetzt unterstützt.
  Dies ermöglicht es Websites unter anderem, die Konfiguration an sich ändernde Netzwerkbedingungen anzupassen ([Firefox-Bug 1253706](https://bugzil.la/1253706)).

#### Entfernte Funktionen

- Die [Network Information API](/de/docs/Web/API/Network_Information_API) war zuvor nur auf Android aktiviert, ist jetzt jedoch standardmäßig auf allen Plattformen deaktiviert.
  Diese API soll entfernt werden, weil sie eine beträchtliche Menge an Benutzerinformationen offenlegt, die für Fingerprinting genutzt werden könnten.
  ([Firefox-Bug 1637922](https://bugzil.la/1637922)).

### WebDriver-Konformität (Marionette)

- Es wurde ein Fehler behoben, bei dem die Umschalttaste nicht ordnungsgemäß behandelt wurde, wenn sie Teil einer Tastensequenz des Befehls `WebDriver:ElementSendKeys` war ([Firefox-Bug 1757636](https://bugzil.la/1757636)).

## Änderungen für Add-on Entwickler

## Ältere Versionen

{{Firefox_for_developers}}
