---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Element/base#target) Attribut des `<base>` Elements erlaubt nun keine ASCII-Zeilenumbrüche, Tabs oder das `<` Zeichen mehr. Wenn solche Zeichen vorhanden sind, wird der Wert in `_blank` geändert. Dies verhindert Angriffe durch unverarbeiteten Markup-Injection, die ein nicht geschlossenes `target` Attribut nutzen ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Die relative Farbsyntax ermöglicht es, einen Farbwert relativ zu einer Ursprungfarbe zu erstellen und erlaubt, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mit [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content) Eigenschaft unterstützt nun [Alternativtext](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann in den Barrierefreiheitsbaum des Browsers eingefügt. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax) Deskriptor der {{cssxref("@property")}} At-Regel unterstützt jetzt den `<string>` Syntaxkomponenten-Namen. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Masonry-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Größere {{jsxref("ArrayBuffer")}} und wachsende {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, wodurch die Größe von Puffern geändert werden kann, ohne einen neuen Puffer zuzuweisen und Daten hineinzukopieren ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die zugehörigen Methoden und Eigenschaften sind:

  - Vergrößern Sie den {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal zulässige Größe des Puffers wird mit dem `options.maxByteLength` Parameter des [`SharedArrayBuffer()` Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} Eigenschaften geben an, ob der Puffer vergrößert werden kann und seine maximal erlaubte Größe.
  - Passen Sie die Größe des {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} an.
    Die maximal zulässige Größe des Puffers wird mit dem `options.maxByteLength` Parameter des [`ArrayBuffer()` Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} Eigenschaften zeigen an, ob der Puffer in der Größe verändert werden kann, und seine maximal erlaubte Größe.

### HTTP

- Der HTTP [`Accept`](/de/docs/Web/HTTP/Headers/Accept) Header in [Standard- und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) schließt jetzt den MIME-Typ `image/svg+xml` ein ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "erweiterbare Priorisierungsschema für HTTP")}} wird jetzt unterstützt, einschließlich des HTTP [`Priority`](/de/docs/Web/HTTP/Headers/Priority) Request- und Response-Headers, der es Clients ermöglicht, auf die erwartete relative Priorität von über eine Verbindung gesendeten Ressourcen hinzuweisen, und der HTTP/2 und HTTP/3 `PRIORITY_UPDATE` Frames, die es erlauben, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Kodierung und Übertragung von Medien auf den Empfangs- bzw. Sendespuren verwendet werden. ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt als bequemes Mittel, um ein {{jsxref("Uint8Array")}} von einem [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als ein Byte-Array in einem {{jsxref("Uint8Array")}} Objekt zurückzugeben. ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als ein Byte-Array in einem {{jsxref("Uint8Array")}} Objekt zurückzugeben. ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Wiedergabe von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf den angegebenen Richtlinienanforderungen wie der [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection) Version, die vom System unterstützt wird, erlauben würde.
  Dies gibt einer Anwendung ein einfaches Mittel, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne eine Mediaschlüsselsitzung erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokales WebRTC-Peer zum Dekodieren empfangener Daten verwenden kann, in seiner bevorzugten Codec-Reihenfolge. Webanwendungen können dies verwenden, um das entfernte Peer zu veranlassen, einen bevorzugten Codec auszuwählen und die Verhandlung bestimmter Codecs zu deaktivieren — einschließlich derjenigen, die für Retransmission, Redundanz und Forward Error Correction verwendet werden. ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Die Serialisierung von [deklarativem Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), und zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Das [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) Interface wird jetzt standardmäßig unterstützt und repräsentiert eine CSS [`@property`](/de/docs/Web/CSS/@property) At-Regel. Die Schnittstelle ermöglicht es Ihnen, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS benutzerdefinierten Eigenschaften abzurufen, die mithilfe der `@property` At-Regel definiert sind ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es, [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, was dem Verwenden der `@property` At-Regel in CSS ähnelt ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardmäßige Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird von keinem Browser mehr unterstützt. ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior" Fähigkeit, die entweder ein String (WebDriver classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi wie das Handling von "beforeunload" Eingabeaufforderungen. ([Firefox Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi Flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver BiDi-Spezifikation konform zu sein. Dies ermöglicht die Identifizierung von Sitzungen, die für oder zu WebDriver BiDi erstellt oder aktualisiert wurden. ([Firefox Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den `network.continueRequest` Befehl hinzugefügt, der es jetzt ermöglicht, Header, Cookies, Methode und den Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext` Argument im `permissions.setPermission` Befehl hinzugefügt, das es erlaubt, eine Berechtigung auf einen bestimmten Benutzerkontext zu isolieren (umgesetzt als Container in Firefox). ([Firefox Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler im `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle fehlschlagen würde. ([Firefox Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted` Ereignisse bei Umleitungen ausgegeben werden. Das `responseCompleted` der ursprünglichen Anfrage wird jetzt immer vor den Ereignissen für die Umleitung ausgegeben. ([Firefox Bug 1879580](https://bugzil.la/1879580))
- Um sich mit dem aktuellen Firefox-Verhalten abzustimmen, haben wir den Workaround eingeführt, Cookies, die mit dem "storage.setCookie" Befehl für dieselbe Domain wie die geladene Seite im Zielkontext hinzugefügt werden, nicht zu partitionieren. ([Firefox Bug 1898222](https://bugzil.la/1898222))
- Der `input.setFiles` Befehl wurde aktualisiert, um einen `UnsupportedOperation` Fehler auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP Flag" einer WebDriver Session hinzugefügt, um mit der WebDriver classic Spezifikation konform zu sein. Dies ermöglicht die Identifikation von Sitzungen, die für WebDriver classic erstellt wurden. ([Firefox Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API in WebDriver Classic hinzugefügt. ([Firefox Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Erweiterungsentwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzanforderungsregelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren sowie deaktivierte Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzanforderungsregel, die durch den [`declarative_net_request` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wird, wird jetzt geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl dynamischer und sitzungsübergreifender Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, das jetzt veraltet ist ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}} Eigenschaft `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Bisher war der Standardwert sowohl für SOCKS4 als auch für SOCKS5 `false` ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanforderungen asynchron zu bearbeiten, indem `"asyncBlocking"` im `addListener` Parameter `extraInfoSpec` angegeben wird ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (vom Nutzer gewährter Zugriff nach der Installation einer Erweiterung) auf die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardmäßigen Web-API-Events `overflow` und `underflow` wurden als veraltet erklärt. Die Verwendung dieser Events sollte vor der Veröffentlichung von Firefox 131 aus den Erweiterungsdokumenten entfernt werden ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt bereitgestellt für Skripte um im Ausführungsumfeld der Webseite zu laufen. Dies wird durch Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}} API, die Ergänzung von `world` zur {{WebExtAPIRef("contentScripts.register()")}} API und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel umgesetzt ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}} API kann jetzt Skripte und CSS in sandboxed Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs einfügen. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhalte-Skripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:` URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der [Manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was das Injizieren von Skripten in `about:`, `data:` und `blob:` Seiten ermöglicht, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe-Sandboxing undurchsichtig ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können Skripte, die mit dem `content_scripts` Manifest-Schlüssel registriert sind, jetzt nur in `blob:` Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung hinzugefügt für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}} Eigenschaft `domainType` ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, laden jetzt mit einer Warnung. Zuvor verursachten diese Erweiterungen bei der Installation einen Fehler. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko` Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen ab dieser Veröffentlichung geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 128 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP [`Accept`](/de/docs/Web/HTTP/Headers/Accept) Header in [Standard- und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er Unterstützung für den `image/jxl` MIME-Typ signalisiert. ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", erlauben es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned) Befehl des `Set-Cookie` HTTP-Headers in einen partitionierten Speicher einzuoptieren. Wenn gesetzt, haben Cookies getrennte Speicher für jede Top-Level-Site und können nur innerhalb derselben Top-Level-Site gelesen werden, auf der sie gesetzt wurden, sowie deren Subdomains. Dies blockiert Cross-Site-Tracking, während es legitime Anwendungen von Drittanbieter-Cookies wie das Beibehalten des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site ermöglicht. ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Datenschutzerhaltende Attributions-API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für Anzeigenattribution mit dem neuen `navigator.privateAttribution` Objekt, das die Methoden `saveImpression()` und `measureConversion()` enthält. Lesen Sie mehr über PPA [im Erklärer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Einstellung auf `1` gesetzt wird. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
