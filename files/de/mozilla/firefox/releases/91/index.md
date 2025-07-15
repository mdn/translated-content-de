---
title: Firefox 91 für Entwickler
short-title: Firefox 91
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 91, die Entwickler betreffen werden. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Eine Korrektur, wie der {{cssxref("@counter-style/pad")}} Deskriptor das Minuszeichen behandelt ([Firefox-Bug 1714445](https://bugzil.la/1714445)).
- Die `-moz-tab-size` Eigenschaft wurde auf die standardmäßige {{cssxref("tab-size")}} geändert, und die präfixierte Version wurde als Alias beibehalten ([Firefox-Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht-standardmäßige `-moz-outline-radius` Eigenschaft wurde entfernt ([Firefox-Bug 1715984](https://bugzil.la/1715984)). Diese Eigenschaft war seit Firefox 88 für Webentwickler nicht mehr nutzbar, was die Entfernung vervollständigt.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden jetzt in Release-Builds unterstützt. Die `formatRange()` Methode liefert eine lokalisierte und formatierte Zeichenkette für den Bereich zwischen zwei {{jsxref("Date")}} Objekten (z. B. "1/05/21 – 1/10/21"). Die `formatRangeToParts()` Methode liefert ein Array mit den lokalspezifischen _Teilen_ eines formatierten Datumsbereichs ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} Konstruktor erlaubt vier neue `timeZoneName` Optionen zur Formatierung, wie die Zeitzone angezeigt wird. Diese beinhalten die lokalisierten GMT-Formate `shortOffset` und `longOffset`, sowie die generischen Nicht-Ort-Formate `shortGeneric` und `longGeneric` ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}} Konstruktor kann nun den Fehler `cause` als Wert im `option` Parameter verwenden. Dies erlaubt es dem Code, Fehler abzufangen und neue/veränderte Versionen zu werfen, die den ursprünglichen Fehler und den Stack-Trace beibehalten ([Firefox-Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert nun einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox-Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig in Firefox-Desktop-Versionen aktiviert (sie war seit Version 68 in Firefox für Android aktiviert). Die API bietet Zugang zu Informationen, die die Position des {{Glossary("visual_viewport", "visuellen Viewports")}} relativ zum Dokument sowie zum Inhaltsbereich des Fensters beschreiben. Sie bietet auch Ereignisse, die es ermöglichen, Änderungen am Viewport zu überwachen. ([Firefox-Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird jetzt durch `Feature-Policy: gamepad` geschützt. Wenn die Verwendung durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) untersagt ist, werfen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException), und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst. Die Standard-`allowlist` ist `*`; dieses Standard wird in einer zukünftigen Version auf `self` aktualisiert, um der Spezifikation zu entsprechen. ([Firefox-Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um jüngste Spezifikationsupdates zu entsprechen und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox-Bug 1717072](https://bugzil.la/1717072)).
- Das Ändern der Wiedergabegeschwindigkeit eines Media-Elements ([`<video>`](/de/docs/Web/HTML/Reference/Elements/video) oder [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio)) mit dem Attribut [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) funktioniert jetzt, wenn das Media-Element zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) erfasst wird ([Firefox-Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` bei Benutzeraufforderungen hängen blieben, die in einem Popup-Fenster geöffnet wurden ([Firefox-Bug 1721982](https://bugzil.la/1721982)).
- Eine unangemessene Behandlung der `webSocketUrl` Fähigkeit wurde behoben, die `true` zurückgab, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox-Bug 1713775](https://bugzil.la/1713775)).
