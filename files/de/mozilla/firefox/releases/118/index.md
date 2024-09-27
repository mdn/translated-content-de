---
title: Firefox 118 für Entwickler
slug: Mozilla/Firefox/Releases/118
l10n:
  sourceCommit: f6d38a35950a07266a18518506a7fc20b358492c
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen über die Änderungen in Firefox 118, die Entwickler betreffen. Firefox 118 wurde am 26. September 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das {{HTMLElement('search')}} Element wird jetzt unterstützt. Das `<search>` Element ist ein Gruppenelement, das dazu dient, alle Elemente zu enthalten, die bei einer Such- oder Filteroperation verwendet werden ([Firefox Fehler 1824121](https://bugzil.la/1824121)).

### CSS

- Die {{cssxref("font-synthesis-position")}} Eigenschaft und der `position` Wert für die {{cssxref("font-synthesis")}} Kurzschreibweise werden jetzt unterstützt. Diese ermöglichen es, tiefgestellte und hochgestellte Schriftschnitte für Schriften zu deaktivieren, die keine Glyphen dafür haben, wenn {{cssxref("font-variant-position")}} verwendet wird ([Firefox Fehler 1849010](https://bugzil.la/1849010)).
- Mehrere CSS [Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) werden jetzt unterstützt: [`abs()`](/de/docs/Web/CSS/abs), [`sign()`](/de/docs/Web/CSS/sign), [`round()`](/de/docs/Web/CSS/round), [`mod()`](/de/docs/Web/CSS/mod), [`rem()`](/de/docs/Web/CSS/rem), [`pow()`](/de/docs/Web/CSS/pow), [`sqrt()`](/de/docs/Web/CSS/sqrt), [`hypot()`](/de/docs/Web/CSS/hypot), [`log()`](/de/docs/Web/CSS/log) und [`exp()`](/de/docs/Web/CSS/exp) (Firefox Fehler [1814589](https://bugzil.la/1814589)).
- Ein neues Schlüsselwort `from-font` in der CSS-Eigenschaft [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust) ermöglicht die Auswahl der gewünschten `<font-metric>` aus der ersten verfügbaren Schriftart (Firefox Fehler [1708240](https://bugzil.la/1708240)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box` Wert die [Inhaltsbox](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) und der `stroke-box` Wert verwendet die Strichbegrenzungsbox, die die Form eines SVGs enthält (Firefox Fehler [1819464](https://bugzil.la/1819464)).
- Die CSS-Eigenschaft [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust) unterstützt das Schlüsselwort `from-font`, das ermöglicht, die gewünschte `<font-metric>` aus der ersten verfügbaren Schriftart zu wählen (Firefox Fehler [1708240](https://bugzil.la/1708240)).

### JavaScript

Keine bemerkenswerten Änderungen.

### HTTP

- Die HTTP [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy) Header-Direktive [`publickey-credentials-get`](/de/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get) wird jetzt unterstützt, was verwendet werden kann, um die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) Schnittstelle zum Abrufen von Public-Key-Zertifikaten in einem Cross-Origin-iframe zu aktivieren ([Firefox Fehler 1460986](https://bugzil.la/1460986)).

### MathML

- Die [`<semantics>`](/de/docs/Web/MathML/Element/semantics) und [`<maction>`](/de/docs/Web/MathML/Element/maction) Elemente rendern nun standardmäßig nur das erste Kindelement. Die Einstellung `mathml.legacy_maction_and_semantics_implementations.disabled` wurde entfernt (Firefox Fehler [1788223](https://bugzil.la/1788223)).
- Alle Werte des [`mathvariant`](/de/docs/Web/MathML/Element/mi#mathvariant) Attributs außer `normal` sind nun veraltet. Zusätzlich ist die Verwendung des Attributs jetzt auf das `<mi>` Element beschränkt (Firefox Fehler [1845461](https://bugzil.la/1845461)).

### APIs

- Die <kbd>⊞ Windows Logo</kbd> Taste auf Windows und die <kbd>Befehl</kbd>-Taste auf macOS geben jetzt den Wert `"Meta"` für [`KeyboardEvent.key`](/de/docs/Web/API/KeyboardEvent/key) zurück, anstatt `"OS"`, und [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) gibt `MetaLeft`/`MetaRight` anstelle von `OSLeft`/`OSRight` zurück (Firefox Fehler [1232918](https://bugzil.la/1232918)).
- Die [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) und [`RTCRtpTransceiver.direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) Eigenschaften unterstützen nun den Wert `"stopped"`, um anzuzeigen, ob ein Transceiver gestoppt wurde. Dieser Wert sollte jetzt anstelle der veralteten [`RTCRtpTransceiver.stopped`](/de/docs/Web/API/RTCRtpTransceiver/stopped) Eigenschaft verwendet werden ([Firefox Fehler 1568296](https://bugzil.la/1568296)).
- Das von [`RTCPeerConnection.getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers) zurückgegebene Array lässt jetzt gestoppte Transceiver aus. Ebenso lassen [`RTCPeerConnection.getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers) und [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) die Empfänger und Sender weg, die mit einem gestoppten Transceiver verbunden sind ([Firefox Fehler 1568296](https://bugzil.la/1568296)).
- Die [`TextMetrics.emHeightDescent`](/de/docs/Web/API/TextMetrics/emHeightDescent) und [`TextMetrics.emHeightAscent`](/de/docs/Web/API/TextMetrics/emHeightAscent) Eigenschaften werden nun unterstützt (Firefox Fehler [1841692](https://bugzil.la/1841692)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Ein internes Race-Condition für Android wurde behoben, das dazu führte, dass der zurückgegebene Text des Benutzeraufforderungs für sowohl WebDriver BiDi als auch Marionette leer war ([Firefox Fehler 1848167](https://bugzil.la/1848167)).
- Sowohl der `WebDriver:PerformActions` Befehl in Marionette als auch der `browsingContext.performActions` Befehl in WebDriver BiDi konnten in Umgebungen mit angeschlossenem hochauflösenden Display nicht korrekt für eine `wheel` Eingabequelle scrollen ([Firefox Fehler 1849229](https://bugzil.la/1849229)).

#### WebDriver BiDi

- Der [`browsingContext.activate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-activate) Befehl wurde hinzugefügt, der es Benutzern erlaubt, den Hintergrund-Tab in den Vordergrund zu bringen ([Firefox Fehler 1841004](https://bugzil.la/1841004)).
- Der [`browsingContext.handleUserPrompt`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-handleUserPrompt) Befehl wurde hinzugefügt, der es Benutzern erlaubt, eine offene Benutzeraufforderung des Typs `alert`, `confirm` oder `prompt` zu akzeptieren oder abzulehnen ([Firefox Fehler 1824197](https://bugzil.la/1824197)).
- Das Ereignis [`browsingContext.userPromptOpened`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptOpened) wurde hinzugefügt, das ausgelöst wird, wenn eine Benutzeraufforderung des Typs `alert`, `confirm` oder `prompt` geöffnet wurde ([Firefox Fehler 1824224](https://bugzil.la/1824224)).
- Ein `type` Feld wurde der JSON-Nutzlast hinzugefügt, die an Clients zurückgegeben wird, um `event` Nachrichten oder den Erfolgsstatus eines Befehls zu identifizieren, der entweder `success` oder `error` sein kann ([Firefox Fehler 1844009](https://bugzil.la/1844009)).

#### Marionette

- Unterstützung für alle [Web Authentication Extension Commands](https://www.w3.org/TR/webauthn-2/#sctn-automation) wurde hinzugefügt, die es Benutzern erlauben, sich durch Public Key Credentials zu authentifizieren ([Firefox Fehler 1846574](https://bugzil.la/1846574))

## Änderungen für Add-on Entwickler

### Entfernungen

- Unterstützung für [`browser_style`](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) in den Manifest-Schlüsseln [`action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action), [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui), [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) für Manifest V3 Erweiterungen wurde entfernt ([Firefox Fehler 1830711](https://bugzil.la/1830711)). Siehe [Browser Styles' Manifest v3 Migration](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration) für Informationen über den Übergang von `browser_style` in Manifest V3 Erweiterungen.

## Ältere Versionen

{{Firefox_for_developers}}
