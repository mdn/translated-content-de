---
title: Firefox 91 Versionshinweise für Entwickler
short-title: Firefox 91
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 91, die Entwickler betreffen werden. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Eine Korrektur für die Handhabung des Minuszeichens durch den {{cssxref("@counter-style/pad")}} Deskriptor ([Firefox Bug 1714445](https://bugzil.la/1714445)).
- Die Eigenschaft `-moz-tab-size` wurde in die standardisierte {{cssxref("tab-size")}} umbenannt, und die vorgezeichnete Version wird als Alias beibehalten ([Firefox Bug 737785](https://bugzil.la/737785)).

#### Entfernen

- Die nicht standardisierte Eigenschaft `-moz-outline-radius` wurde entfernt ([Firefox Bug 1715984](https://bugzil.la/1715984)). Die Eigenschaft war seit Firefox 88 für Webentwickler nicht mehr nutzbar, dies vervollständigt die Entfernung.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden jetzt in den Release-Versionen unterstützt. Die Methode `formatRange()` gibt einen lokalisierten und formatierten String für den Bereich zwischen zwei {{jsxref("Date")}} Objekten zurück (z.B. "1/05/21 – 1/10/21"). Die Methode `formatRangeToParts()` gibt ein Array zurück, das die lokalspezifischen _Teile_ eines formatierten Datumsbereichs enthält ([Firefox Bug 1653024](https://bugzil.la/1653024)).
- Der Konstruktor {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} ermöglicht vier neue `timeZoneName` Optionen für die Formatierung, wie die Zeitzone angezeigt wird. Diese beinhalten die lokalisierten GMT-Formate `shortOffset` und `longOffset` sowie die generischen nicht-ortsbezogenen Formate `shortGeneric` und `longGeneric` ([Firefox Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}} Konstruktor kann jetzt die Fehlerursache als Wert im `option` Parameter übernehmen.
  Dies ermöglicht es, Code zu schreiben, der Fehler abfängt und neue/geänderte Versionen auswirft, die den ursprünglichen Fehler und den Stack-Trace beibehalten ([Firefox Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig in den Firefox-Desktop-Versionen aktiviert (sie war seit Version 68 auf Firefox für Android aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position des {{Glossary("visual_viewport", "visuellen Ansichtsfensters")}} relativ zum Dokument sowie zum Inhaltsbereich des Fensters beschreiben.
  Sie bietet auch Ereignisse, die es ermöglichen, Änderungen des Ansichtsfensters zu überwachen. ([Firefox Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird jetzt durch `Feature-Policy: gamepad` geschützt.
  Wenn es durch die [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) nicht erlaubt ist, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen,
  und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.
  Die Standard-`allowlist` ist `*`; diese Standardeinstellung wird in einer zukünftigen Version auf `self` aktualisiert, um der Spezifikation zu entsprechen. ([Firefox Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um aktuelle Spezifikations-Updates zu entsprechen und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox Bug 1717072](https://bugzil.la/1717072)).
- Die Änderung der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Reference/Elements/video) oder [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio)) mittels des Attributs [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) funktioniert jetzt, wenn das Medienelement in einen [`MediaStream`](/de/docs/Web/API/MediaStream) erfasst oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) erfasst wird ([Firefox Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` bei Benutzeraufforderungen hängen blieben, wenn diese in einem Popup-Fenster geöffnet wurden ([Firefox Bug 1721982](https://bugzil.la/1721982)).
- Eine unangemessene Handhabung der `webSocketUrl` Fähigkeit wurde behoben, die `true` zurückgab, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox Bug 1713775](https://bugzil.la/1713775)).
