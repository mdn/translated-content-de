---
title: Firefox 91 für Entwickler
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 91, die Entwickler betreffen. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Eine Korrektur, wie der {{cssxref("@counter-style/pad")}} Descriptor das negative Vorzeichen behandelt ([Firefox Bug 1714445](https://bugzil.la/1714445)).
- Die `-moz-tab-size` Eigenschaft wurde auf die standardisierte {{cssxref("tab-size")}} umbenannt, und die voreingestellte Version wurde als Alias beibehalten ([Firefox Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht standardisierte `-moz-outline-radius` Eigenschaft wurde entfernt ([Firefox Bug 1715984](https://bugzil.la/1715984)). Seit Firefox 88 war die Eigenschaft für Webentwickler nicht mehr nutzbar, dies vervollständigt die Entfernung.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden jetzt in den Release-Builds unterstützt. Die `formatRange()`-Methode gibt eine lokalisierte und formatierte Zeichenkette für den Bereich zwischen zwei {{jsxref("Date")}} Objekten zurück (z. B. "1/05/21 – 1/10/21"). Die `formatRangeToParts()`-Methode gibt ein Array zurück, das die lokalspezifischen _Teile_ eines formatierten Datumsbereichs enthält ([Firefox Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} Konstruktor ermöglicht vier neue `timeZoneName` Optionen für die Formatierung, wie die Zeitzone angezeigt wird. Dazu gehören die lokalisierten GMT-Formate `shortOffset` und `longOffset`, sowie die generischen, nicht standortbezogenen Formate `shortGeneric` und `longGeneric` ([Firefox Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}} Konstruktor kann jetzt die Fehlerursache `cause` als Wert im `option` Parameter aufnehmen. Dadurch kann der Code Fehler abfangen und neue/veränderte Versionen werfen, die den ursprünglichen Fehler und den Stack-Trace beibehalten ([Firefox Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig in den Firefox-Desktop-Versionen aktiviert (sie ist seit Version 68 in Firefox für Android aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position des {{Glossary("visual_viewport", "visual viewport")}} relativ zum Dokument sowie zum Inhaltsbereich des Fensters beschreiben.
  Sie bietet auch Ereignisse, die es ermöglichen, Änderungen am Viewport zu überwachen ([Firefox Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird jetzt durch {{httpheader('Feature-Policy/gamepad','Feature-Policy: gamepad')}} geschützt.
  Wenn sie durch die [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) abgelehnt wird, lösen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) aus,
  und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.
  Die Standard-Zulassungsliste (`allowlist`) ist `*`; diese Standardeinstellung wird in einer zukünftigen Version auf `self` aktualisiert, um der Spezifikation zu entsprechen ([Firefox Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um die jüngsten Spezifikationsänderungen abzudecken und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox Bug 1717072](https://bugzil.la/1717072)).
- Die Änderung der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Element/video) oder [`<audio>`](/de/docs/Web/HTML/Element/audio)) mittels des [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Attributs funktioniert nun auch, wenn das Medienelement zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) erfasst wird ([Firefox Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` für Benutzeraufforderungen, die in einem Popup-Fenster geöffnet wurden, hängen blieben ([Firefox Bug 1721982](https://bugzil.la/1721982)).
- Eine unangemessene Behandlung der `webSocketUrl` Fähigkeit wurde behoben, die `true` zurückgeben würde, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox Bug 1713775](https://bugzil.la/1713775)).

## Ältere Versionen

{{Firefox_for_developers}}
