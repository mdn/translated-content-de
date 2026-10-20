---
title: Firefox 91 – Versionshinweise für Entwickler
short-title: Firefox 91
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: 6d79bbcef5344fc28331ecae7b5fd21ba7790fb7
---

Dieser Artikel informiert über die Änderungen in Firefox 91, die für Entwickler relevant sind. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Die Verarbeitung des negativen Vorzeichens durch den Deskriptor {{cssxref("@counter-style/pad")}} wurde korrigiert ([Firefox-Bug 1714445](https://bugzil.la/1714445)).
- Die Eigenschaft `-moz-tab-size` ist nun ohne Präfix als standardisierte Eigenschaft {{cssxref("tab-size")}} verfügbar. Die Version mit Präfix bleibt als Alias erhalten ([Firefox-Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht standardisierte Eigenschaft `-moz-outline-radius` wurde entfernt ([Firefox-Bug 1715984](https://bugzil.la/1715984)). Webentwickler konnten die Eigenschaft bereits seit Firefox 88 nicht mehr verwenden; damit ist ihre Entfernung abgeschlossen.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden nun in regulären Versionen unterstützt. Die Methode `formatRange()` gibt eine lokalisierte und formatierte Zeichenfolge für den Zeitraum zwischen zwei {{jsxref("Date")}}-Objekten zurück (z. B. „1/05/21 – 1/10/21“). Die Methode `formatRangeToParts()` gibt ein Array mit den gebietsschemaspezifischen _Bestandteilen_ eines formatierten Datumsbereichs zurück ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der Konstruktor {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} unterstützt vier neue `timeZoneName`-Optionen für die Darstellung der Zeitzone. Dazu gehören die lokalisierten GMT-Formate `shortOffset` und `longOffset` sowie die allgemeinen, nicht ortsbezogenen Formate `shortGeneric` und `longGeneric` ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der Konstruktor {{jsxref("Global_Objects/Error/Error", "Error()")}} kann nun die Fehlerursache `cause` als Wert im Parameter `option` entgegennehmen.
  Dadurch kann Code Fehler abfangen und neue oder geänderte Versionen auslösen, die den ursprünglichen Fehler und den Stacktrace beibehalten ([Firefox-Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert nun einen [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) ([Firefox-Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/VisualViewport) ist in den Desktop-Versionen von Firefox nun standardmäßig aktiviert (in Firefox für Android ist sie seit Version 68 aktiviert).
  Die API stellt Informationen über die Position des {{Glossary("visual_viewport", "visuellen Viewports")}} relativ zum Dokument sowie über den Inhaltsbereich des Fensters bereit.
  Außerdem stellt sie Events bereit, mit denen sich Änderungen am Viewport überwachen lassen ([Firefox-Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird nun durch `Feature-Policy: gamepad` geschützt.
  Wenn die [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) den Zugriff untersagt, lösen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SecurityError` aus,
  und die Events [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.
  Die standardmäßige `allowlist` ist `*`. Dieser Standardwert wird in einer zukünftigen Version zu `self` geändert, um der Spezifikation zu entsprechen ([Firefox-Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um aktuellen Änderungen der Spezifikation zu entsprechen und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox-Bug 1717072](https://bugzil.la/1717072)).
- Das Ändern der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Reference/Elements/video) oder [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio)) über das Attribut [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) funktioniert nun auch, wenn das Medienelement in einem [`MediaStream`](/de/docs/Web/API/MediaStream) erfasst oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) eingebunden wird ([Firefox-Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, durch den die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` bei Benutzerabfragen hängen blieben, die in einem Popup-Fenster geöffnet wurden ([Firefox-Bug 1721982](https://bugzil.la/1721982)).
- Die fehlerhafte Behandlung der Capability `webSocketUrl` wurde korrigiert: Zuvor wurde `true` zurückgegeben, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox-Bug 1713775](https://bugzil.la/1713775)).

## Änderungen für Add-on-Entwickler

- Die APIs `menus` und `contextMenus` unterstützen nun dieselben Werte in {{WebExtAPIRef("menus.ContextType")}}. Damit wird `tools_menu` auch im Namespace `contextMenus` unterstützt ([Firefox-Bug 1706398](https://bugzil.la/1706398#c11)).
