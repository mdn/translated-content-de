---
title: Firefox 91 Versionshinweise für Entwickler
short-title: Firefox 91
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 91, die Entwickler betreffen werden. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Eine Korrektur, wie der {{cssxref("@counter-style/pad")}}-Deskriptor das negative Vorzeichen behandelt ([Firefox-Bug 1714445](https://bugzil.la/1714445)).
- Die Eigenschaft `-moz-tab-size` wurde auf die standardmäßige {{cssxref("tab-size")}} unpräfixiert, wobei die präfixierte Version als Alias beibehalten wurde ([Firefox-Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht standardisierte Eigenschaft `-moz-outline-radius` wurde entfernt ([Firefox-Bug 1715984](https://bugzil.la/1715984)). Die Eigenschaft war seit Firefox 88 für Webentwickler nicht mehr nutzbar, dies vervollständigt die Entfernung.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden jetzt in den Release-Builds unterstützt. Die Methode `formatRange()` gibt eine lokalisierte und formatierte Zeichenkette für den Bereich zwischen zwei {{jsxref("Date")}}-Objekten zurück (z. B. "1/05/21 – 1/10/21"). Die Methode `formatRangeToParts()` gibt ein Array zurück, das die lokalisierungsspezifischen _Teile_ eines formatierten Datumsbereichs enthält ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}-Konstruktor erlaubt vier neue `timeZoneName`-Optionen für die Formatierung der Anzeige der Zeitzone. Dazu gehören die lokalisierten GMT-Formate `shortOffset` und `longOffset` sowie die generischen Nicht-Standort-Formate `shortGeneric` und `longGeneric` ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}}-Konstruktor kann nun die Fehlerursache als Wert im `option`-Parameter übernehmen.
  Dies ermöglicht es, Fehler abzufangen und neue/modifizierte Versionen auszulösen, die den ursprünglichen Fehler und den Stack-Trace beibehalten ([Firefox-Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert jetzt einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ([Firefox-Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/VisualViewport) ist nun standardmäßig in den Firefox-Desktop-Versionen aktiviert (sie ist in Firefox für Android seit Version 68 aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position des {{Glossary("visual_viewport", "visuellen Viewports")}} relativ zum Dokument sowie zum Inhaltsbereich des Fensters beschreiben.
  Sie bietet außerdem Ereignisse, die es ermöglichen, Änderungen am Viewport zu überwachen. ([Firefox-Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) ist jetzt durch `Feature-Policy: gamepad` geschützt.
  Wenn dies durch die [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) nicht erlaubt ist, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen,
  und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.
  Die Standard-`allowlist` ist `*`; diese Vorgabe wird in einer zukünftigen Version auf `self` aktualisiert, um der Spezifikation zu entsprechen. ([Firefox-Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um die neuesten Spezifikationsänderungen zu berücksichtigen und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox-Bug 1717072](https://bugzil.la/1717072)).
- Die Änderung der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Reference/Elements/video) oder [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio)) über das [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate)-Attribut funktioniert jetzt, wenn das Medienelement zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) erfasst wird ([Firefox-Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` für Benutzeraufforderungen in einem Popup-Fenster hängen blieben ([Firefox-Bug 1721982](https://bugzil.la/1721982)).
- Ein unangemessenes Verhalten der `webSocketUrl`-Fähigkeit wurde behoben, das `true` zurückgeben würde, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox-Bug 1713775](https://bugzil.la/1713775)).
