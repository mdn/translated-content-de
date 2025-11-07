---
title: Firefox 118 Versionshinweise für Entwickler
short-title: Firefox 118
slug: Mozilla/Firefox/Releases/118
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 118, die Entwickler betreffen. Firefox 118 wurde am 26. September 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement('search')}}-Element wird jetzt unterstützt. Das `<search>`-Element ist ein Gruppenelement, das dazu dient, alle Elemente zu enthalten, die in einem Such- oder Filtervorgang verwendet werden ([Firefox-Bug 1824121](https://bugzil.la/1824121)).

### CSS

- Die Eigenschaft {{cssxref("font-synthesis-position")}} und der `position`-Wert für die {{cssxref("font-synthesis")}}-Kurzform werden jetzt unterstützt. Diese ermöglichen das Deaktivieren von Tief- und Hochstellungen bei Schrifttypen, die keine Glyphen dafür enthalten, wenn {{cssxref("font-variant-position")}} verwendet wird ([Firefox-Bug 1849010](https://bugzil.la/1849010)).
- Mehrere CSS-[Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) werden jetzt unterstützt: [`abs()`](/de/docs/Web/CSS/Reference/Values/abs), [`sign()`](/de/docs/Web/CSS/Reference/Values/sign), [`round()`](/de/docs/Web/CSS/Reference/Values/round), [`mod()`](/de/docs/Web/CSS/Reference/Values/mod), [`rem()`](/de/docs/Web/CSS/Reference/Values/rem), [`pow()`](/de/docs/Web/CSS/Reference/Values/pow), [`sqrt()`](/de/docs/Web/CSS/Reference/Values/sqrt), [`hypot()`](/de/docs/Web/CSS/Reference/Values/hypot), [`log()`](/de/docs/Web/CSS/Reference/Values/log) und [`exp()`](/de/docs/Web/CSS/Reference/Values/exp) (Firefox-Bug [1814589](https://bugzil.la/1814589)).
- Ein neues Schlüsselwort `from-font` in der CSS-Eigenschaft [`font-size-adjust`](/de/docs/Web/CSS/Reference/Properties/font-size-adjust) ermöglicht die Auswahl des gewünschten `<font-metric>` aus der ersten verfügbaren Schriftart (Firefox-Bug [1708240](https://bugzil.la/1708240)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/Reference/Properties/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Bezugsbox verwendet der `content-box`-Wert die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der `stroke-box`-Wert verwendet die Umrandung der Umrahmung, die die Form eines SVGs enthält (Firefox-Bug [1819464](https://bugzil.la/1819464)).
- Die CSS-Eigenschaft [`font-size-adjust`](/de/docs/Web/CSS/Reference/Properties/font-size-adjust) unterstützt das Schlüsselwort `from-font`, das es ermöglicht, das gewünschte `<font-metric>` aus der ersten verfügbaren Schriftart auszuwählen (Firefox-Bug [1708240](https://bugzil.la/1708240)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Der HTTP-Header [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) unterstützt jetzt die Direktive [`publickey-credentials-get`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get), die verwendet werden kann, um die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) Schnittstelle für das Abrufen öffentlicher Schlüsselnachweise in einem Cross-Origin-iframe zu aktivieren ([Firefox-Bug 1460986](https://bugzil.la/1460986)).

### MathML

- Die [`<semantics>`](/de/docs/Web/MathML/Reference/Element/semantics)- und [`<maction>`](/de/docs/Web/MathML/Reference/Element/maction)-Elemente rendern jetzt standardmäßig nur das erste Kind-Element. Die Präferenz `mathml.legacy_maction_and_semantics_implementations.disabled` wurde entfernt (Firefox-Bug [1788223](https://bugzil.la/1788223)).
- Alle Werte des [`mathvariant`](/de/docs/Web/MathML/Reference/Element/mi#mathvariant)-Attributes außer `normal` sind jetzt veraltet. Darüber hinaus ist die Verwendung des Attributes jetzt auf das `<mi>`-Element beschränkt (Firefox-Bug [1845461](https://bugzil.la/1845461)).

### APIs

- Die <kbd>⊞ Windows Logo</kbd>-Taste unter Windows und die <kbd>Befehl</kbd>-Taste auf macOS geben jetzt den Wert `"Meta"` für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) zurück, anstelle von `"OS"`, und [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) gibt `MetaLeft`/`MetaRight` anstelle von `OSLeft`/`OSRight` zurück (Firefox-Bug [1232918](https://bugzil.la/1232918)).
- Die Eigenschaften [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) und [`RTCRtpTransceiver.direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) unterstützen jetzt den Wert `"stopped"` zur Angabe, ob ein Transceiver gestoppt wurde. Dieser Wert sollte jetzt anstelle der veralteten Eigenschaft [`RTCRtpTransceiver.stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) verwendet werden ([Firefox-Bug 1568296](https://bugzil.la/1568296)).
- Das Array, das von [`RTCPeerConnection.getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers) zurückgegeben wird, lässt gestoppte Transceiver jetzt weg. Ebenso lassen [`RTCPeerConnection.getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers) und [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) die Empfänger und Sender weg, die mit einem gestoppten Transceiver verbunden sind ([Firefox-Bug 1568296](https://bugzil.la/1568296)).
- Die Eigenschaften [`TextMetrics.emHeightDescent`](/de/docs/Web/API/TextMetrics/emHeightDescent) und [`TextMetrics.emHeightAscent`](/de/docs/Web/API/TextMetrics/emHeightAscent) werden jetzt unterstützt (Firefox-Bug [1841692](https://bugzil.la/1841692)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein interner Race-Condition-Fehler für Android wurde behoben, der dazu führte, dass der zurückgegebene Benutzereingabetext sowohl für WebDriver BiDi als auch für Marionette leer war ([Firefox-Bug 1848167](https://bugzil.la/1848167)).
- Sowohl der Befehl `WebDriver:PerformActions` in Marionette als auch der Befehl `browsingContext.performActions` in WebDriver BiDi funktionierten nicht korrekt für eine Bildlauf-Quelle `wheel` in Umgebungen, in denen ein hochauflösender Bildschirm angeschlossen ist ([Firefox-Bug 1849229](https://bugzil.la/1849229)).

#### WebDriver BiDi

- Der Befehl [`browsingContext.activate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate) wurde hinzugefügt, der es Benutzern ermöglicht, den gegebenen Hintergrund-Tab in den Vordergrund zu bringen ([Firefox-Bug 1841004](https://bugzil.la/1841004)).
- Der Befehl [`browsingContext.handleUserPrompt`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt) wurde hinzugefügt, der es Benutzern ermöglicht, eine geöffnete Benutzereingabeaufforderung des Typs `alert`, `confirm` oder `prompt` zu akzeptieren oder abzulehnen ([Firefox-Bug 1824197](https://bugzil.la/1824197)).
- Das Ereignis [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) wurde hinzugefügt, das ausgelöst wird, wenn eine Benutzereingabeaufforderung des Typs `alert`, `confirm` oder `prompt` geöffnet wurde ([Firefox-Bug 1824224](https://bugzil.la/1824224)).
- Ein `type`-Feld wurde zu der JSON-Nutzlast hinzugefügt, die an Clients zurückgegeben wird, um `event`-Nachrichten zu identifizieren oder den Erfolgsstatus eines Befehls anzuzeigen, der entweder `success` oder `error` sein kann ([Firefox-Bug 1844009](https://bugzil.la/1844009)).

#### Marionette

- Unterstützung für alle [Verlängerungsbefehle der Web-Authentifizierung](https://w3c.github.io/webauthn/#sctn-automation) hinzugefügt, die es Benutzern ermöglichen, sich mit öffentlichen Schlüsselnachweisen zu authentifizieren ([Firefox-Bug 1846574](https://bugzil.la/1846574))

## Änderungen für Add-on-Entwickler

### Entfernungen

- Die Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest-V3-Erweiterungen wurde entfernt ([Firefox-Bug 1830711](https://bugzil.la/1830711)). Sehen Sie sich die [Browser Styles-Manifest v3-Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) an, um Informationen zu erhalten, wie Sie von `browser_style` in Manifest-V3-Erweiterungen migrieren können.
