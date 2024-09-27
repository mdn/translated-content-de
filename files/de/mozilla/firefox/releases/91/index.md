---
title: Firefox 91 für Entwickler
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 91, die Entwickler betreffen werden. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Eine Korrektur, wie der {{cssxref("@counter-style/pad")}} Deskriptor das Minuszeichen behandelt ([Firefox-Bug 1714445](https://bugzil.la/1714445)).
- Die `-moz-tab-size` Eigenschaft wurde in die standardisierte {{cssxref("tab-size")}} umgewandelt, und die vorgezeichnete Version bleibt als Alias erhalten ([Firefox-Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht standardisierte `-moz-outline-radius` Eigenschaft wurde entfernt ([Firefox-Bug 1715984](https://bugzil.la/1715984)). Diese Eigenschaft war seit Firefox 88 nicht mehr von Webentwicklern nutzbar und wird hiermit vollständig entfernt.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden nun in Release-Builds unterstützt. Die `formatRange()` Methode gibt eine lokalisierte und formatierte Zeichenkette für den Bereich zwischen zwei {{jsxref("Date")}} Objekten zurück (z.B. "1/05/21 – 1/10/21"). Die `formatRangeToParts()` Methode liefert ein Array, das die _Teile_ eines formatierten Datumsbereichs in ortsspezifischer Darstellung enthält ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} Konstruktor erlaubt vier neue `timeZoneName` Optionen, um zu formatieren, wie die Zeitzone angezeigt wird. Diese umfassen die lokalisierten GMT-Formate `shortOffset` und `longOffset` sowie die allgemeinen, ortsungebundenen Formate `shortGeneric` und `longGeneric` ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}} Konstruktor kann nun den Fehler `cause` als Wert im `option` Parameter übernehmen.
  Dies ermöglicht es, Fehler zu erfassen und neue/modifizierte Versionen zu werfen, die den ursprünglichen Fehler und den Stack-Trace beibehalten ([Firefox-Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) erfordert nun einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox-Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist nun standardmäßig in den Firefox-Desktop-Versionen aktiviert (sie ist seit Version 68 in Firefox für Android aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position des [visuellen Viewports](/de/docs/Glossary/visual_viewport) relativ zum Dokument sowie zum Inhaltsbereich des Fensters beschreiben.
  Sie bietet auch Ereignisse, die Änderungen am Viewport überwachen lassen. ([Firefox-Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad-API](/de/docs/Web/API/Gamepad_API) wird nun durch {{httpheader('Feature-Policy/gamepad','Feature-Policy: gamepad')}} geschützt.
  Wenn sie durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) nicht zugelassen wird, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) eine `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen,
  und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse werden nicht ausgelöst.
  Die Standard-`allowlist` ist `*`; dieser Standard wird in einer zukünftigen Version auf `self` aktualisiert, um der Spezifikation zu entsprechen. ([Firefox-Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um kürzliche Spezifikationsänderungen zu berücksichtigen und die Kompatibilität mit anderen führenden Browsern zu verbessern ([Firefox-Bug 1717072](https://bugzil.la/1717072)).
- Die Änderung der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Element/video) oder [`<audio>`](/de/docs/Web/HTML/Element/audio)) über das [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Attribut funktioniert jetzt, wenn das Medienelement in einen [`MediaStream`](/de/docs/Web/API/MediaStream) erfasst wird oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) ([Firefox-Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` bei Benutzerabfragen, die in einem Popup-Fenster geöffnet wurden, hängen blieben ([Firefox-Bug 1721982](https://bugzil.la/1721982)).
- Eine unangemessene Behandlung der `webSocketUrl` Fähigkeit wurde behoben, die `true` zurückgab, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox-Bug 1713775](https://bugzil.la/1713775)).

## Ältere Versionen

{{Firefox_for_developers}}
