---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Element/base#target)-Attribut des `<base>`-Elements erlaubt nun keine ASCII-Newlines, Tabs oder das `<`-Zeichen mehr. Der Wert wird zu `_blank` geändert, wenn eines dieser Zeichen vorhanden ist. Dies verhindert Angriffe durch unvollständige `target`-Attribute, die zu schwebendem Markup führen ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative-Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Sie ermöglicht es, einen Farbwert relativ zu einer Ausgangsfarbe zu erstellen und eine Farbe in einem anderen [Farbraum](/de/docs/Glossary/Color_space) mit [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt nun [Alt-Text](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der Alt-Text wird dann im Barrierefreiheitsbaum des Browsers angezeigt. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).

#### Entfernungen

- Die Mauerwerkslayout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizeable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden nun unterstützt, was es ermöglicht, die Größe von Buffern zu ändern, ohne einen neuen Buffer zuordnen und Daten hinein kopieren zu müssen ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:

  - Vergrößern Sie {{jsxref("SharedArrayBuffer")}} mit der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode.
    Die maximal zulässige Größe des Buffers wird mit dem `options.maxByteLength`-Parameter an den Konstruktor [`SharedArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer wachsen kann und seine maximal zulässige Größe.
  - Ändern Sie die Größe von {{jsxref("ArrayBuffer")}} mit der {{jsxref("ArrayBuffer.prototype.resize()")}}-Methode.
    Die maximal zulässige Größe des Buffers wird mit dem `options.maxByteLength`-Parameter an den Konstruktor [`ArrayBuffer()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer vergrößert werden kann und seine maximal zulässige Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) umfasst nun den MIME-Typ `image/svg+xml` ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Headers [`Priority`](/de/docs/Web/HTTP/Headers/Priority) für Anfragen und Antworten, der es den Clients ermöglicht, die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen anzugeben, sowie die HTTP/2 und HTTP/3 `PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die gegenwärtig verwendeten Codecs für das Kodieren und Übertragen von Medien auf den Empfänger- und Senderstrecken beschreibt. ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt als bequeme Möglichkeit unterstützt, ein {{jsxref("Uint8Array")}} von einer [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln DRM-geschützter Inhalte verwendet wird, die Wiedergabe verschlüsselter Mediendaten für einen „hypothetischen“ Schlüssel basierend auf den angegebenen Richtlinienanforderungen wie der [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version, die vom System unterstützt wird, zulassen würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt sein wird, ohne eine Medien-Schlüsselsitzung erstellen oder eine echte Lizenz anfordern zu müssen. ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer zum Dekodieren empfangener Daten in der bevorzugten Codec-Reihenfolge verwenden kann. Webanwendungen können dies verwenden, um den Remote-Peer zu veranlassen, einen bevorzugten Codec auszuwählen und um die Aushandlung spezifischer Codecs zu deaktivieren — einschließlich derjenigen, die für die Neuausstrahlung, Redundanz und Vorwärtsfehlerkorrektur verwendet werden. ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Die Serialisierung von [declarative shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), inklusive der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), sowie der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable) wird unterstützt.
- Die Schnittstelle [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) wird jetzt standardmäßig unterstützt und repräsentiert eine CSS [`@property`](/de/docs/Web/CSS/@property)-Regel. Die Schnittstelle ermöglicht es, die Werte zu erhalten, darunter [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Benutzerdefinierten Eigenschaften, die mit der `@property`-Regel definiert wurden ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, was ähnlich ist wie die Verwendung der `@property`-Regel in CSS ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird nun von keinem Browser mehr unterstützt. ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte Fähigkeit „unhandledPromptBehavior“, die entweder ein String (klassisches WebDriver) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Möglichkeiten für WebDriver BiDi, wie zum Beispiel das Bearbeiten von „beforeunload“-Aufforderungen. ([Firefox-Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das „BiDi-Flag“ einer WebDriver-Sitzung wurde hinzugefügt, um die WebDriver BiDi-Spezifikation auszurichten. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver BiDi erstellt oder darauf aktualisiert wurden. ([Firefox-Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente des `network.continueRequest`-Befehls wurde hinzugefügt, was nun ermöglicht, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox-Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das Argument `userContext` im `permissions.setPermission`-Befehl wurde hinzugefügt, wodurch sich eine Berechtigung auf einen spezifischen Benutzerkontext isolieren lässt (in Firefox als Container implementiert). ([Firefox-Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler in `browsingContext.navigate`, bei dem ein Navigationsfehler eine Fehlerseite geladen und nachfolgende Befehle fehlschlagen ließ, wurde behoben. ([Firefox-Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted`-Ereignisse für Umleitungen ausgegeben werden. Das `responseCompleted` der ursprünglichen Anfrage wird jetzt immer vor den Ereignissen für die Umleitung ausgegeben. ([Firefox-Bug 1879580](https://bugzil.la/1879580))
- Um sich am aktuellen Firefox-Verhalten auszurichten, haben wir die Umgehung eingeführt, um keine Cookies zu partitionieren, die mit dem Befehl „storage.setCookie“ für dieselbe Domain wie die im Zielkontext geladene Seite hinzugefügt werden. ([Firefox-Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler zu werfen, wenn die angegebene Datei nicht existiert. ([Firefox-Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das „HTTP-Flag“ einer WebDriver-Sitzung wurde hinzugefügt, um die WebDriver-Klassik-Spezifikation auszurichten. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver-Klassik erstellt wurden. ([Firefox-Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions-API in WebDriver Classic wurde hinzugefügt. ([Firefox-Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Es wurde die Möglichkeit hinzugefügt, Regeln in statischen declarative net request rulesets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für ein statisches Ruleset mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische declarative net request-Regel, die durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wird, wird jetzt geladen, wenn sie nicht erkannte, aber sonst gültige Eigenschaften enthält ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften stellen die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln dar, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, das jetzt veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war er sowohl bei SOCKS4 als auch bei SOCKS5 auf `false` gesetzt ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird nun für {{WebExtAPIRef("webRequest.onAuthRequired")}} geboten, um Authentifizierungsanfragen asynchron zu bearbeiten, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (vom Benutzer gewährter Zugriff nach der Installation einer Erweiterung) auf die APIs in der Erweiterung, die Host-Daten lesen oder ändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web-API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird nun für Skripte geboten, die im Ausführungsumfeld der Webseite ausgeführt werden sollen. Dies wird durch Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel bereitgestellt ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sandboxed Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox-Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox-Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhaltsskripte werden jetzt auf [sandboxed](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:` URLs ausgeführt ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der Manifest-Schlüssel `content_scripts` unterstützt nun `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was es ermöglicht, Skripte in `about:`, `data:`, und `blob:` Seiten zu injizieren, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe sandbox opak ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, jetzt nur auf `blob:` Seiten ausgeführt werden, wenn `match_origin_as_fallback` `true` ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung wurde für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden nun mit einer Warnung geladen. Zuvor führten solche Erweiterungen beim Installieren zu einem Fehler. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu dieser Veröffentlichung geladen werden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 128 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Sie finden weitere solche Features auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er die Unterstützung für den MIME-Typ `image/jxl` angibt. ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), oder „partitionierte Cookies“, ermöglichen es Entwicklern, ein Cookie in partitionierten Speicher mit der [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie` HTTP-Headers zu übernehmen. Wenn gesetzt, haben Cookies für jede Top-Level-Site getrennten Speicher und können nur innerhalb der gleichen Top-Level-Site gelesen werden, auf der sie gesetzt wurden, sowie deren Subdomains. Dies blockiert das Cross-Site-Tracking, ermöglicht jedoch immer noch legitime Verwendungen von Drittanbieter-Cookies, wie das Speichern des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Website hinweg. ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Datenschutzwahrende Attributions-API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für Anzeigenzuordnung unter Verwendung des neuen Objekts `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Erklärer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Webseiten über [Origin Trials](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Einstellung auf `1` gesetzt wird. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
