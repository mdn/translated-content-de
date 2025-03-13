---
title: Firefox 118 für Entwickler
slug: Mozilla/Firefox/Releases/118
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 118, die Entwickler betreffen. Firefox 118 wurde am 26. September 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement('search')}}-Element wird nun unterstützt. Das `<search>`-Element ist ein Gruppenelement, das dazu dient, alle Elemente zu enthalten, die in einem Such- oder Filtervorgang verwendet werden ([Firefox Bug 1824121](https://bugzil.la/1824121)).

### CSS

- Die {{cssxref("font-synthesis-position")}}-Eigenschaft und der `position`-Wert für die {{cssxref("font-synthesis")}}-Kurzschrift-Eigenschaft werden nun unterstützt. Diese ermöglichen es, tiefgestellte und hochgestellte Schriftarten für Schriften zu deaktivieren, die keine Glyphen dafür haben, wenn {{cssxref("font-variant-position")}} verwendet wird ([Firefox Bug 1849010](https://bugzil.la/1849010)).
- Mehrere CSS [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) werden jetzt unterstützt: [`abs()`](/de/docs/Web/CSS/abs), [`sign()`](/de/docs/Web/CSS/sign), [`round()`](/de/docs/Web/CSS/round), [`mod()`](/de/docs/Web/CSS/mod), [`rem()`](/de/docs/Web/CSS/rem), [`pow()`](/de/docs/Web/CSS/pow), [`sqrt()`](/de/docs/Web/CSS/sqrt), [`hypot()`](/de/docs/Web/CSS/hypot), [`log()`](/de/docs/Web/CSS/log) und [`exp()`](/de/docs/Web/CSS/exp) (Firefox Bug [1814589](https://bugzil.la/1814589)).
- Ein neues Schlüsselwort `from-font` in der CSS-Eigenschaft [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust) ermöglicht es, das gewünschte `<font-metric>` von der ersten verfügbaren Schriftart auszuwählen (Firefox Bug [1708240](https://bugzil.la/1708240)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box` Wert die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der `stroke-box` Wert verwendet die Umbruchbox, die die Form eines SVG enthält (Firefox Bug [1819464](https://bugzil.la/1819464)).
- Die CSS-Eigenschaft [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust) unterstützt das Schlüsselwort `from-font`, das es ermöglicht, das gewünschte `<font-metric>` von der ersten verfügbaren Schriftart auszuwählen (Firefox Bug [1708240](https://bugzil.la/1708240)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die HTTP-Header [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) Direktive [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get) wird jetzt unterstützt und kann verwendet werden, um die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) Schnittstelle zum Abrufen von Public-Key-Referenzen in einem Cross-Origin iframe zu aktivieren ([Firefox Bug 1460986](https://bugzil.la/1460986)).

### MathML

- Die [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction) Elemente rendern jetzt standardmäßig nur das erste Kindelement. Die Präferenz `mathml.legacy_maction_and_semantics_implementations.disabled` wurde entfernt (Firefox Bug [1788223](https://bugzil.la/1788223)).
- Alle Werte des [`mathvariant`](/de/docs/Web/MathML/Reference/Element/mi#mathvariant)-Attributs, außer `normal`, sind jetzt veraltet. Außerdem ist die Verwendung des Attributs jetzt auf das `<mi>` Element beschränkt (Firefox Bug [1845461](https://bugzil.la/1845461)).

### APIs

- Die <kbd>⊞ Windows Logo</kbd>-Taste unter Windows und die <kbd>Befehl</kbd>-Taste unter macOS geben jetzt den Wert `"Meta"` für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) zurück, anstelle von `"OS"`, und [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) gibt `MetaLeft`/`MetaRight` anstelle von `OSLeft`/`OSRight` zurück (Firefox Bug [1232918](https://bugzil.la/1232918)).
- Die Eigenschaften [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) und [`RTCRtpTransceiver.direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) unterstützen jetzt den Wert `"stopped"`, um anzuzeigen, ob ein Transceiver gestoppt wurde. Dieser Wert sollte jetzt anstelle der veralteten [`RTCRtpTransceiver.stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) Eigenschaft verwendet werden ([Firefox Bug 1568296](https://bugzil.la/1568296)).
- Das von [`RTCPeerConnection.getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers) zurückgegebene Array lässt nun gestoppte Transceiver aus. Ebenso lassen [`RTCPeerConnection.getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers) und [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) die Empfänger und Absender weg, die mit einem gestoppten Transceiver verbunden sind ([Firefox Bug 1568296](https://bugzil.la/1568296)).
- Die Eigenschaften [`TextMetrics.emHeightDescent`](/de/docs/Web/API/TextMetrics/emHeightDescent) und [`TextMetrics.emHeightAscent`](/de/docs/Web/API/TextMetrics/emHeightAscent) werden jetzt unterstützt (Firefox Bug [1841692](https://bugzil.la/1841692)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein internes Race-Condition-Problem für Android wurde behoben, das dazu führte, dass der zurückgegebene Benutzereingabetext sowohl für WebDriver BiDi als auch für Marionette leer war ([Firefox Bug 1848167](https://bugzil.la/1848167)).
- Sowohl der `WebDriver:PerformActions` Befehl in Marionette als auch der `browsingContext.performActions` Befehl in WebDriver BiDi scollten nicht korrekt für eine `wheel` Eingabequelle in Umgebungen, die ein hochauflösendes Display angeschlossen haben ([Firefox Bug 1849229](https://bugzil.la/1849229)).

#### WebDriver BiDi

- Der [`browsingContext.activate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate) Befehl wurde hinzugefügt, mit dem Benutzer den angegebenen Hintergrund-Tab in den Vordergrund bringen können ([Firefox Bug 1841004](https://bugzil.la/1841004)).
- Der [`browsingContext.handleUserPrompt`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt) Befehl wurde hinzugefügt, der es Benutzern ermöglicht, eine offene Benutzereingabeaufforderung des Typs `alert`, `confirm` oder `prompt` anzunehmen oder abzulehnen ([Firefox Bug 1824197](https://bugzil.la/1824197)).
- Das [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) Ereignis wurde hinzugefügt, das ausgelöst wird, wenn eine Benutzereingabeaufforderung des Typs `alert`, `confirm` oder `prompt` geöffnet wurde ([Firefox Bug 1824224](https://bugzil.la/1824224)).
- Ein `type` Feld wurde dem JSON-Payload hinzugefügt, das an die Clients zurückgegeben wird, um `event` Nachrichten oder den Erfolgsstatus eines Befehls zu identifizieren, der entweder `success` oder `error` sein kann ([Firefox Bug 1844009](https://bugzil.la/1844009)).

#### Marionette

- Unterstützung für alle [Web Authentication Erweiterungsbefehle](https://www.w3.org/TR/webauthn-2/#sctn-automation) hinzugefügt, die es Benutzern ermöglichen, sich durch Public Key Credentials zu authentifizieren ([Firefox Bug 1846574](https://bugzil.la/1846574))

## Änderungen für Add-on-Entwickler

### Entfernte Funktionen

- Die Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3 Erweiterungen wurde entfernt ([Firefox Bug 1830711](https://bugzil.la/1830711)). Lesen Sie [Browser Styles' Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über den Übergang von `browser_style` in Manifest V3 Erweiterungen.

## Ältere Versionen

{{Firefox_for_developers}}
