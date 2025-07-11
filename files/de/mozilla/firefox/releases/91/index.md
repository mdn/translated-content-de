---
title: Firefox 91 für Entwickler
slug: Mozilla/Firefox/Releases/91
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 91, die Entwickler betreffen werden. Firefox 91 wurde am 10. August 2021 veröffentlicht.

> [!NOTE]
> Siehe auch [Hopping on Firefox 91](https://hacks.mozilla.org/2021/08/hopping-on-firefox-91/) auf Mozilla Hacks.

## Änderungen für Webentwickler

### HTML

Keine Änderungen

### CSS

- Ein Fix für das Verhalten des {{cssxref("@counter-style/pad")}} Deskriptors im Umgang mit dem Minuszeichen ([Firefox-Bug 1714445](https://bugzil.la/1714445)).
- Die `-moz-tab-size` Eigenschaft wurde standardisiert auf {{cssxref("tab-size")}}, und die prefixed Version bleibt als Alias erhalten ([Firefox-Bug 737785](https://bugzil.la/737785)).

#### Entfernungen

- Die nicht-standardisierte `-moz-outline-radius` Eigenschaft wurde entfernt ([Firefox-Bug 1715984](https://bugzil.la/1715984)). Die Eigenschaft war für Webentwickler seit Firefox 88 nicht mehr nutzbar, dies vervollständigt die Entfernung.

### JavaScript

- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}} und {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}} werden jetzt in den Release-Builds unterstützt. Die `formatRange()` Methode gibt einen lokalisierten und formatierten String für den Bereich zwischen zwei {{jsxref("Date")}} Objekten zurück (z.B. "1/05/21 – 1/10/21"). Die `formatRangeToParts()` Methode gibt ein Array zurück, das die lokalspezifischen _Teile_ eines formatierten Datumsbereichs enthält ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} Konstruktor erlaubt vier neue `timeZoneName` Optionen zum Formatieren, wie die Zeitzone angezeigt wird. Diese schließen die lokalisierten GMT-Formate `shortOffset` und `longOffset`, sowie die generischen Orts-unabhängigen Formate `shortGeneric` und `longGeneric` ein ([Firefox-Bug 1653024](https://bugzil.la/1653024)).
- Der {{jsxref("Global_Objects/Error/Error", "Error()")}} Konstruktor kann jetzt die Fehlerursache `cause` als Wert im `option` Parameter annehmen.
  Dies ermöglicht es dem Code, Fehler abzufangen und neue/modifizierte Versionen zu werfen, die den ursprünglichen Fehler und Stapelverfolgung beibehalten ([Firefox-Bug 1679653](https://bugzil.la/1679653)).

### HTTP

- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) erfordert jetzt einen [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) ([Firefox-Bug 1704005](https://bugzil.la/1704005)).

### APIs

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig in Firefox Desktop-Versionen aktiviert (sie ist seit Version 68 in Firefox für Android aktiviert).
  Die API bietet Zugriff auf Informationen, die die Position des {{Glossary("visual_viewport", "Visual Viewport")}} relativ zum Dokument sowie auf das Inhaltsbereichs-Fenster beschreiben.
  Sie bietet auch Ereignisse, die Änderungen des Viewport überwachen lassen ([Firefox-Bug 1551302](https://bugzil.la/1551302)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird jetzt durch {{httpheader('Permissions-Policy/gamepad','Feature-Policy: gamepad')}} geschützt.
  Falls dies durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) nicht erlaubt ist, werfen Aufrufe an [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException),
  und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.
  Die Standard-`allowlist` ist `*`; dieses Standard wird in einer zukünftigen Veröffentlichung auf `self` geändert, um die Spezifikation zu erfüllen. ([Firefox-Bug 1704005](https://bugzil.la/1704005)).
- `Window.clientInformation` wurde als Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator) hinzugefügt, um mit den jüngsten Spezifikations-Updates übereinzustimmen und die Kompatibilität mit anderen großen Browsern zu verbessern ([Firefox-Bug 1717072](https://bugzil.la/1717072)).
- Die Änderung der Wiedergabegeschwindigkeit eines Medienelements ([`<video>`](/de/docs/Web/HTML/Reference/Elements/video) oder [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio)) mit dem [`playbackRate`](/de/docs/Web/API/HTMLMediaElement/playbackRate) Attribut funktioniert nun, wenn das Medienelement in einen [`MediaStream`](/de/docs/Web/API/MediaStream) oder über [`AudioContext.createMediaElementSource`](/de/docs/Web/API/AudioContext/createMediaElementSource) eingebunden wird ([Firefox-Bug 1517199](https://bugzil.la/1517199)).

### WebDriver-Konformität (Marionette)

- Ein Fehler wurde behoben, der dazu führte, dass die Befehle `WebDriver:AcceptAlert` und `WebDriver:DismissAlert` bei Benutzeraufforderungen hängenblieben, die in einem Popup-Fenster geöffnet wurden ([Firefox-Bug 1721982](https://bugzil.la/1721982)).
- Ein unangemessenes Handling der `webSocketUrl`-Fähigkeit wurde behoben, das `true` zurückgab, wenn `webSocketUrl` nicht unterstützt wurde ([Firefox-Bug 1713775](https://bugzil.la/1713775)).

## Ältere Versionen

{{Firefox_for_developers}}
