---
title: Firefox 91 für Entwickler
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 91, die Entwickler betreffen. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Ein Fix für die {{cssxref("@counter-style/pad")}}-Descriptor, der das negative Vorzeichen verarbeitet ([Firefox-Bug 1714445](https://bugzil.la/1714445)).
- Die Eigenschaft `-moz-tab-size` wurde zur standardmäßigen {{cssxref("tab-size")}} entprefixt, und die vorangestellte Version als Alias beibehalten ([Firefox-Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht standardmäßige Eigenschaft `-moz-outline-radius` wurde entfernt ([Firefox-Bug 1715984](https://bugzil.la/1715984)). Die Eigenschaft war seit Firefox 88 nicht mehr für Webentwickler nutzbar, dies vervollständigt die Entfernung.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden jetzt in den Release-Builds unterstützt. Die Methode `formatRange()` gibt einen lokalisierten und formatierten String für den Bereich zwischen zwei {{jsxref("Date")}}-Objekten zurück (z. B. "1/05/21 – 1/10/21"). Die Methode `formatRangeToParts()` gibt ein Array zurück, das die lokal spezifischen _Teile_ eines formatierten Datumsbereichs enthält ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}-Konstruktor erlaubt vier neue `timeZoneName`-Optionen für die Formatierung der Anzeige der Zeitzone. Diese beinhalten die lokalisierten GMT-Formate `shortOffset` und `longOffset` sowie die generischen nicht-lokationsgebundenen Formate `shortGeneric` und `longGeneric` ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}}-Konstruktor kann jetzt die Fehlerursache als Wert im `option`-Parameter übernehmen.
  Dies ermöglicht es Code, Fehler zu erfassen und neue/modifizierte Versionen zu werfen, die den ursprünglichen Fehler und den Stack-Trace beibehalten ([Firefox-Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox-Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig in den Firefox-Desktop-Veröffentlichungen aktiviert (sie ist seit Version 68 auf Firefox für Android aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position des {{Glossary("visual viewport")}} relativ zum Dokument sowie zum Inhaltsbereich des Fensters beschreiben.
  Sie bietet auch Ereignisse, die es ermöglichen, Änderungen am Viewport zu überwachen. ([Firefox-Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird jetzt durch {{httpheader('Feature-Policy/gamepad','Feature-Policy: gamepad')}} geschützt.
  Wenn sie durch die [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) nicht erlaubt ist, werden Aufrufe von {{domxref('Navigator.getGamepads()')}} einen `SecurityError` {{domxref('DOMException')}} werfen,
  und die Ereignisse {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} werden nicht ausgelöst.
  Die standardmäßige `allowlist` ist `*`; dieses Standardverhalten wird in einer zukünftigen Veröffentlichung auf `self` aktualisiert, um die Spezifikation zu erfüllen. ([Firefox-Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für {{domxref("Window.navigator")}} hinzugefügt, um den aktuellen Spezifikationsänderungen zu entsprechen und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox-Bug 1717072](https://bugzil.la/1717072)).
- Die Änderung der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Element/video) oder [`<audio>`](/de/docs/Web/HTML/Element/audio)) mit dem Attribut [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) funktioniert jetzt, wenn das Medienelement auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) erfasst wird ([Firefox-Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` für Benutzer-Prompts, die in einem Popup-Fenster geöffnet wurden, hingen blieben ([Firefox-Bug 1721982](https://bugzil.la/1721982)).
- Eine unangemessene Behandlung der `webSocketUrl`-Fähigkeit wurde behoben, die `true` zurückgab, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox-Bug 1713775](https://bugzil.la/1713775)).

## Ältere Versionen

{{Firefox_for_developers}}
