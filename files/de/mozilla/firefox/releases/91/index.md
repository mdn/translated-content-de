---
title: Firefox 91 für Entwickler
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 91, die Entwickler betreffen. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Ein Fix, wie der {{cssxref("@counter-style/pad")}} Deskriptor das negative Vorzeichen behandelt ([Firefox Bug 1714445](https://bugzil.la/1714445)).
- Die `-moz-tab-size` Eigenschaft wurde zum Standard {{cssxref("tab-size")}} ohne Präfix und die Version mit Präfix wird als Alias beibehalten ([Firefox Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht standardisierte Eigenschaft `-moz-outline-radius` wurde entfernt ([Firefox Bug 1715984](https://bugzil.la/1715984)). Die Eigenschaft war seit Firefox 88 für Webentwickler nicht mehr nutzbar, dies vervollständigt die Entfernung.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden jetzt in Release-Builds unterstützt. Die Methode `formatRange()` gibt eine lokalisierte und formatierte Zeichenkette für den Bereich zwischen zwei {{jsxref("Date")}} Objekten zurück (z. B. "1/05/21 – 1/10/21"). Die Methode `formatRangeToParts()` gibt ein Array zurück, das die lokal spezifischen _Teile_ eines formatierten Datumsbereichs enthält ([Firefox Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} Konstruktor erlaubt vier neue `timeZoneName` Optionen für die Formatierung der Anzeige der Zeitzone. Dazu gehören die lokalisierten GMT-Formate `shortOffset` und `longOffset` sowie die generischen nicht-standortbezogenen Formate `shortGeneric` und `longGeneric` ([Firefox Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}} Konstruktor kann jetzt die Fehlerursache als Wert im `option` Parameter annehmen. Dies ermöglicht es, Fehler zu fangen und neue/modifizierte Versionen zu werfen, die den ursprünglichen Fehler und den Stack-Trace beibehalten ([Firefox Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig in Firefox-Desktop-Versionen aktiviert (sie ist seit Version 68 in Firefox für Android aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position der {{Glossary("visual_viewport", "visuellen Ansichtsfläche")}} relativ zum Dokument sowie zur Inhaltsfläche des Fensters beschreiben.
  Sie bietet auch Ereignisse, die es ermöglichen, Änderungen an der Ansichtsfläche zu überwachen ([Firefox Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird jetzt durch {{httpheader('Feature-Policy/gamepad','Feature-Policy: gamepad')}} geschützt.
  Wenn sie durch die [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) nicht erlaubt ist, werden Aufrufe an [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) werfen,
  und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.
  Die Standard-`allowlist` ist `*`; diese Standardliste wird in einem zukünftigen Release auf `self` aktualisiert, um der Spezifikation zu entsprechen ([Firefox Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um kürzlichen Spezifikationsupdates zu entsprechen und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox Bug 1717072](https://bugzil.la/1717072)).
- Das Ändern der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Element/video) oder [`<audio>`](/de/docs/Web/HTML/Element/audio)) mithilfe des Attributs [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) funktioniert jetzt, wenn das Medienelement in einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) erfasst wurde ([Firefox Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` bei Benutzeraufforderungen in einem Popup-Fenster blockierten ([Firefox Bug 1721982](https://bugzil.la/1721982)).
- Eine unangemessene Behandlung der `webSocketUrl` Fähigkeit wurde behoben, die `true` zurückgab, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox Bug 1713775](https://bugzil.la/1713775)).

## Ältere Versionen

{{Firefox_for_developers}}
