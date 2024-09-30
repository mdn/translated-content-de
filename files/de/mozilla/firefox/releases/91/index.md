---
title: Firefox 91 für Entwickler
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 91, die Entwickler betreffen werden. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Eine Korrektur zur Behandlung des negativen Vorzeichens durch den Deskriptor {{cssxref("@counter-style/pad")}} ([Firefox-Bug 1714445](https://bugzil.la/1714445)).
- Die Eigenschaft `-moz-tab-size` wurde ohne Präfix zur standardmäßigen {{cssxref("tab-size")}} gemacht, wobei die Version mit Präfix als Alias beibehalten wurde ([Firefox-Bug 737785](https://bugzil.la/737785)).

#### Entfernung

- Die nicht standardisierte Eigenschaft `-moz-outline-radius` wurde entfernt ([Firefox-Bug 1715984](https://bugzil.la/1715984)). Diese Eigenschaft war seit Firefox 88 für Webentwickler nicht mehr nutzbar, was hiermit abgeschlossen wurde.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden jetzt in Release-Builds unterstützt. Die Methode `formatRange()` gibt eine lokalisierte und formatierte Zeichenkette für den Bereich zwischen zwei {{jsxref("Date")}}-Objekten zurück (z. B. "1/05/21 – 1/10/21"). Die Methode `formatRangeToParts()` gibt ein Array zurück, das die lokal spezifischen _Teile_ eines formatierten Datumsbereichs enthält ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}-Konstruktor erlaubt vier neue `timeZoneName`-Optionen zur Formatierung der Anzeige der Zeitzone. Diese beinhalten die lokalisierten GMT-Formate `shortOffset` und `longOffset` sowie die generischen nicht-ortsgebundenen Formate `shortGeneric` und `longGeneric` ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}}-Konstruktor kann jetzt die Fehlerursache als Wert im `option`-Parameter übernehmen.
  Dies ermöglicht es dem Code, Fehler abzufangen und neue/veränderte Versionen zu werfen, die den ursprünglichen Fehler und den Stack-Trace beibehalten ([Firefox-Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox-Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig in Desktop-Veröffentlichungen von Firefox aktiviert (sie ist seit Version 68 auf Firefox für Android aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position des [Visual Viewport](/de/docs/Glossary/visual_viewport) relativ zum Dokument sowie zum Inhaltsbereich des Fensters beschreiben.
  Sie bietet auch Ereignisse, die es ermöglichen, Änderungen am Viewport zu überwachen. ([Firefox-Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird nun durch {{httpheader('Feature-Policy/gamepad','Feature-Policy: gamepad')}} geschützt.
  Wenn sie durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) nicht erlaubt ist, werfen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException),
  und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.
  Die standardmäßige `Allowlist` ist `*`; dieses Standard wird in einer zukünftigen Version auf `self` aktualisiert, um die Spezifikation zu erfüllen. ([Firefox-Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um die Spezifikationsänderungen anzupassen und die Kompatibilität mit anderen wichtigen Browsern zu verbessern ([Firefox-Bug 1717072](https://bugzil.la/1717072)).
- Die Änderung der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Element/video) oder [`<audio>`](/de/docs/Web/HTML/Element/audio)) mit dem Attribut [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) funktioniert nun, wenn das Medienelement auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) erfasst wird ([Firefox-Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` bei Benutzeraufforderungen, die in einem Popup-Fenster geöffnet wurden, hängen blieben ([Firefox-Bug 1721982](https://bugzil.la/1721982)).
- Ein unangemessenes Handling der `webSocketUrl`-Fähigkeit wurde behoben, das `true` zurückgeben würde, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox-Bug 1713775](https://bugzil.la/1713775)).

## Ältere Versionen

{{Firefox_for_developers}}
