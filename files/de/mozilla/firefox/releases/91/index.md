---
title: Firefox 91 für Entwickler
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 91, die Entwickler betreffen werden. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Ein Fix für die Handhabung des negativen Vorzeichens durch den {{cssxref("@counter-style/pad")}} Deskriptor ([Firefox-Bug 1714445](https://bugzil.la/1714445)).
- Die `-moz-tab-size` Eigenschaft wurde zur Standard {{cssxref("tab-size")}} entprefixed und die prefixed Version als Alias beibehalten ([Firefox-Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht standardisierte `-moz-outline-radius` Eigenschaft wurde entfernt ([Firefox-Bug 1715984](https://bugzil.la/1715984)). Die Eigenschaft konnte seit Firefox 88 nicht mehr von Webentwicklern genutzt werden, dies vervollständigt die Entfernung.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden nun in den Release-Builds unterstützt. Die Methode `formatRange()` gibt einen lokalisierten und formatierten String für den Bereich zwischen zwei {{jsxref("Date")}} Objekten zurück (z.B., "1/05/21 – 1/10/21"). Die Methode `formatRangeToParts()` gibt ein Array mit den lokal spezifischen _Teilen_ eines formatierten Datumbereichs zurück ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} Konstruktor erlaubt vier neue `timeZoneName` Optionen zur Formatierung der Anzeige der Zeitzone. Diese beinhalten die lokalisierten GMT-Formate `shortOffset` und `longOffset`, sowie die generischen nicht-ortspezifischen Formate `shortGeneric` und `longGeneric` ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}} Konstruktor kann nun den Fehler `cause` als Wert im Parameter `option` aufnehmen.
  Dadurch kann Code Fehler abfangen und neue/modifizierte Versionen werfen, die den ursprünglichen Fehler und die Stacktrace behalten ([Firefox-Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox-Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig in Firefox-Desktop-Versionen aktiviert (sie ist seit Version 68 in Firefox für Android aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position des {{Glossary("visual_viewport", "visual viewport")}} relativ zum Dokument sowie zum Inhaltsbereich des Fensters beschreiben.
  Sie bietet auch Ereignisse, die es ermöglichen, Änderungen des Viewports zu überwachen. ([Firefox-Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird nun durch {{httpheader('Feature-Policy/gamepad','Feature-Policy: gamepad')}} geschützt.
  Wenn durch die [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) nicht erlaubt, werfen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException),
  und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse werden nicht ausgelöst.
  Die standardmäßige `allowlist` ist `*`; diese Standardeinstellung wird in einer zukünftigen Version auf `self` aktualisiert, um der Spezifikation zu entsprechen. ([Firefox-Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um den jüngsten Spezifikations-Updates zu entsprechen und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox-Bug 1717072](https://bugzil.la/1717072)).
- Das Ändern der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Reference/Elements/video) oder [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio)) mit dem Attribut [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) funktioniert jetzt, wenn das Medienelement auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) aufgenommen wird ([Firefox-Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` für Benutzeraufforderungen, die in einem Popup-Fenster geöffnet wurden, hängen blieben ([Firefox-Bug 1721982](https://bugzil.la/1721982)).
- Eine unangemessene Behandlung der `webSocketUrl` Fähigkeit wurde behoben, die `true` zurückgab, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox-Bug 1713775](https://bugzil.la/1713775)).

## Ältere Versionen

{{Firefox_for_developers}}
