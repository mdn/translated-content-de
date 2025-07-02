---
title: Firefox 118 für Entwickler
slug: Mozilla/Firefox/Releases/118
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 118, die Entwickler betreffen. Firefox 118 wurde am 26. September 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement('search')}}-Element wird jetzt unterstützt. Das `<search>`-Element ist ein Gruppenelement, das dazu dient, alle Elemente zu enthalten, die in einer Such- oder Filteroperation verwendet werden ([Firefox-Bug 1824121](https://bugzil.la/1824121)).

### CSS

- Die {{cssxref("font-synthesis-position")}}-Eigenschaft und der `position`-Wert für die {{cssxref("font-synthesis")}}-Kurzschreibweise werden jetzt unterstützt. Diese ermöglichen das Deaktivieren von Tief- und Hochstellenschriften für Schriftarten, die keine entsprechenden Glyphen haben, wenn {{cssxref("font-variant-position")}} verwendet wird ([Firefox-Bug 1849010](https://bugzil.la/1849010)).
- Mehrere CSS-[Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) werden jetzt unterstützt: [`abs()`](/de/docs/Web/CSS/abs), [`sign()`](/de/docs/Web/CSS/sign), [`round()`](/de/docs/Web/CSS/round), [`mod()`](/de/docs/Web/CSS/mod), [`rem()`](/de/docs/Web/CSS/rem), [`pow()`](/de/docs/Web/CSS/pow), [`sqrt()`](/de/docs/Web/CSS/sqrt), [`hypot()`](/de/docs/Web/CSS/hypot), [`log()`](/de/docs/Web/CSS/log) und [`exp()`](/de/docs/Web/CSS/exp) (Firefox-Bug [1814589](https://bugzil.la/1814589)).
- Ein neues Schlüsselwort `from-font` in der CSS-Eigenschaft [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust) ermöglicht das Auswählen des gewünschten `<font-metric>` aus der ersten verfügbaren Schriftart (Firefox-Bug [1708240](https://bugzil.la/1708240)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box`-Wert die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box), und der `stroke-box`-Wert verwendet die Strichabgrenzungsbox, die die Form eines SVGs enthält (Firefox-Bug [1819464](https://bugzil.la/1819464)).
- Die CSS-Eigenschaft [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust) unterstützt das Schlüsselwort `from-font`, das das Auswählen des gewünschten `<font-metric>` aus der ersten verfügbaren Schriftart ermöglicht (Firefox-Bug [1708240](https://bugzil.la/1708240)).

### JavaScript

Keine nennenswerten Änderungen.

### HTTP

- Der HTTP [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Header unterstützt jetzt die [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get)-Direktive, die verwendet werden kann, um die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)-Schnittstelle für das Abrufen von Public-Key-Zertifikaten in einem Cross-Origin-iFrame zu aktivieren ([Firefox-Bug 1460986](https://bugzil.la/1460986)).

### MathML

- Die [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics)- und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction)-Elemente geben jetzt standardmäßig nur das erste Kindelement wieder. Die Präferenz `mathml.legacy_maction_and_semantics_implementations.disabled` wurde entfernt (Firefox-Bug [1788223](https://bugzil.la/1788223)).
- Alle Werte des Attributs [`mathvariant`](/de/docs/Web/MathML/Reference/Element/mi#mathvariant) außer `normal` sind jetzt veraltet. Außerdem ist die Verwendung des Attributs jetzt auf das `<mi>`-Element beschränkt (Firefox-Bug [1845461](https://bugzil.la/1845461)).

### APIs

- Die <kbd>⊞ Windows Logo</kbd>-Taste unter Windows und die <kbd>Befehlstaste</kbd> auf macOS geben jetzt einen Wert von `"Meta"` für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) zurück, anstelle von `"OS"`, und [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) gibt `MetaLeft`/`MetaRight` anstelle von `OSLeft`/`OSRight` zurück (Firefox-Bug [1232918](https://bugzil.la/1232918)).
- Die Eigenschaften [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) und [`RTCRtpTransceiver.direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) unterstützen jetzt den `"stopped"`-Wert, um anzuzeigen, ob ein Transceiver gestoppt wurde. Dieser Wert sollte jetzt anstelle der veralteten Eigenschaft [`RTCRtpTransceiver.stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) verwendet werden ([Firefox-Bug 1568296](https://bugzil.la/1568296)).
- Das von [`RTCPeerConnection.getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers) zurückgegebene Array lässt gestoppte Transceiver jetzt aus. Ebenso lassen [`RTCPeerConnection.getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers) und [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) die Empfänger und Sender aus, die mit einem gestoppten Transceiver verbunden sind ([Firefox-Bug 1568296](https://bugzil.la/1568296)).
- Die Eigenschaften [`TextMetrics.emHeightDescent`](/de/docs/Web/API/TextMetrics/emHeightDescent) und [`TextMetrics.emHeightAscent`](/de/docs/Web/API/TextMetrics/emHeightAscent) werden jetzt unterstützt (Firefox-Bug [1841692](https://bugzil.la/1841692)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Es wurde ein internes Race-Condition-Problem für Android behoben, das dazu führte, dass der zurückgegebene Benutzereingabetext sowohl für WebDriver BiDi als auch für Marionette leer war ([Firefox-Bug 1848167](https://bugzil.la/1848167)).
- Sowohl der `WebDriver:PerformActions`-Befehl in Marionette als auch der `browsingContext.performActions`-Befehl in WebDriver BiDi konnten in Umgebungen, die mit einem hochauflösenden Display verbunden sind, nicht korrekt für eine `wheel`-Eingabequelle scrollen ([Firefox-Bug 1849229](https://bugzil.la/1849229)).

#### WebDriver BiDi

- Der Befehl [`browsingContext.activate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate) wurde hinzugefügt, der es Benutzern ermöglicht, den gegebenen Hintergrund-Tab in den Vordergrund zu bringen ([Firefox-Bug 1841004](https://bugzil.la/1841004)).
- Der Befehl [`browsingContext.handleUserPrompt`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt) wurde hinzugefügt, der es Benutzern ermöglicht, eine offene Benutzereingabeaufforderung vom Typ `alert`, `confirm` oder `prompt` anzunehmen oder abzulehnen ([Firefox-Bug 1824197](https://bugzil.la/1824197)).
- Das Ereignis [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) wurde hinzugefügt, das ausgelöst wird, wenn eine Benutzereingabeaufforderung vom Typ `alert`, `confirm` oder `prompt` geöffnet wurde ([Firefox-Bug 1824224](https://bugzil.la/1824224)).
- Ein `type`-Feld wurde der JSON-Nutzlast hinzugefügt, die an Clients zurückgegeben wird, um `event`-Nachrichten oder den Erfolgsstatus eines Befehls zu identifizieren, der entweder `success` oder `error` sein kann ([Firefox-Bug 1844009](https://bugzil.la/1844009)).

#### Marionette

- Unterstützung für alle [Web Authentication-Erweiterungsbefehle](https://w3c.github.io/webauthn/#sctn-automation) hinzugefügt, die es Benutzern ermöglichen, sich mit Public Key Credentials zu authentifizieren ([Firefox-Bug 1846574](https://bugzil.la/1846574)).

## Änderungen für Add-On-Entwickler

### Entfernungen

- Die Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3-Erweiterungen wurde entfernt ([Firefox-Bug 1830711](https://bugzil.la/1830711)). Siehe [Browser Styles' Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über den Übergang von `browser_style` in Manifest V3-Erweiterungen.

## Ältere Versionen

{{Firefox_for_developers}}
