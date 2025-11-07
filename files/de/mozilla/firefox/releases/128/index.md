---
title: Firefox 128 Versionshinweise für Entwickler
short-title: Firefox 128
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Dieser Artikel enthält Informationen über Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt jetzt keine ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen mehr und ändert den Wert auf `_blank`, falls solche Zeichen vorhanden sind. Dies verhindert „dangling markup“-Injection-Angriffe, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox Fehler 1835157](https://bugzil.la/1835157)).

### CSS

- Die [relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Diese Syntax ermöglicht es, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen, und ermöglicht es, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mit [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox Fehler 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft unterstützt jetzt [Alternativtext](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann dem Barrierefreiheitsbaum des Browsers zugänglich gemacht. (Siehe [Firefox Fehler 1281158](https://bugzil.la/1281158) und [Firefox Fehler 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/Reference/At-rules/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>`-Syntaxkomponenten-Namen. (Siehe [Firefox Fehler 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerk-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich aus den Spezifikationen [gestrichen](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Fehler 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, wodurch Sie die Größe der Puffer ändern können, ohne einen neuen Puffer zuzuweisen und Daten in diesen zu kopieren ([Firefox Fehler 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Anpassen von {{jsxref("SharedArrayBuffer")}} mithilfe der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximale erlaubte Größe des Puffers wird durch den `options.maxByteLength`-Parameter des [`SharedArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) bestimmt.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer erweiterbar ist und seine maximal erlaubte Größe.
  - Anpassung von {{jsxref("ArrayBuffer")}} mithilfe der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximale erlaubte Größe des Puffers wird durch den `options.maxByteLength`-Parameter des [`ArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) bestimmt.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer anpassbar ist und seine maximal erlaubte Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält jetzt den MIME-Typ `image/svg+xml` ([Firefox Fehler 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Headers [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority) für Anfragen und Antworten, der es Clients ermöglicht, die erwartete relative Priorität von Ressourcen anzudeuten, die über eine Verbindung gesendet werden sollen, sowie der HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox Fehler 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Codierung und Übertragung von Medien auf den Empfangs- bzw. Sendespuren verwendet werden. ([Firefox Fehler 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt und bieten eine bequeme Möglichkeit, ein {{jsxref("Uint8Array")}} von einer [`Request`](/de/docs/Web/API/Request) bzw. [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox Fehler 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Fehler 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten von einem [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Fehler 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zur Entschlüsselung von DRM-geschützten Inhalten verwendet wird, die Wiedergabe von verschlüsselten Mediendaten basierend auf angegebenen Richtlinienanforderungen wie der von Ihrem System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://de.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version ermöglichen würde.
  Dies bietet eine einfache Methode für Anwendungen, im Voraus zu wissen, ob das Abspielen in optimaler Auflösung erlaubt ist, ohne eine Mediensitzung oder eine echte Lizenz erstellen zu müssen. ([Firefox Fehler 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer für das Decodieren empfangener Daten in der bevorzugten Codec-Reihenfolge verwenden kann. Webanwendungen können dies nutzen, um den entfernten Peer dazu zu veranlassen, einen bevorzugten Codec auszuwählen, und um die Aushandlung bestimmter Codecs zu deaktivieren — einschließlich derjenigen, die für die erneute Übertragung, Redundanz und Forward-Error-Correction verwendet werden. ([Firefox Fehler 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklarativem Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), und zugehöriger Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle wird jetzt standardmäßig unterstützt und stellt eine CSS-`@property`-At-Regel dar. Die Schnittstelle ermöglicht es Ihnen, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Benutzerdefinierten Eigenschaften abzurufen, die mit der `@property`-At-Regel definiert wurden ([Firefox Fehler 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es Ihnen, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) über JavaScript zu definieren, was der Verwendung der `@property`-At-Regel in CSS ähnelt ([Firefox Fehler 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht-standardmäßige Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird von keinem Browser mehr unterstützt. ([Firefox Fehler 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder ein Zeichenfolgenwert (WebDriver Classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Möglichkeiten für WebDriver BiDi, wie z. B. das Handling von "beforeunload"-Prompts. ([Firefox Fehler 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver BiDi-Spezifikation in Einklang zu stehen. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver BiDi erstellt oder aufgerüstet wurden. ([Firefox Fehler 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den `network.continueRequest`-Befehl hinzugefügt, der jetzt ermöglicht, die Header, Cookies, Methode und den Inhalt einer Anforderung zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox Fehler 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, das ermöglicht, eine Berechtigung auf einen spezifischen Benutzerkontext zu isolieren (in Firefox als Container implementiert). ([Firefox Fehler 1894217](https://bugzil.la/1894217))
- Ein Fehler in `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite lud und nachfolgende Befehle fehlschlugen. ([Firefox Fehler 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge, in der `network.responseCompleted`-Ereignisse für Redirects ausgesendet werden, korrigiert. Das `responseCompleted` des ursprünglichen Requests wird jetzt immer vor den Ereignissen für den Redirect ausgesendet. ([Firefox Fehler 1879580](https://bugzil.la/1879580))
- Um mit dem aktuellen Firefox-Verhalten in Einklang zu kommen, haben wir das Workaround eingeführt, keine Cookies zu partitionieren, die mit dem "storage.setCookie"-Befehl für dieselbe Domain hinzugefügt wurden, wie die auf dem Zielkontext geladene Seite. ([Firefox Fehler 1898222](https://bugzil.la/1898222))
- Der `input.setFiles`-Befehl wurde aktualisiert, um einen `UnsupportedOperation`-Fehler zu werfen, wenn die angegebene Datei nicht existiert. ([Firefox Fehler 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver-Classic-Spezifikation in Einklang zu stehen. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver Classic erstellt wurden. ([Firefox Fehler 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions-API in WebDriver Classic hinzugefügt. ([Firefox Fehler 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen Deklarativen Netzwerkanforderungs-Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln eines statischen Regelsatzes mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox Fehler 1810762](https://bugzil.la/1810762)).
- Eine statische Deklarative Netzwerkanforderungsregel, die durch den [`declarative_net_request`-Manifestsystemschlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wurde, wird jetzt geladen, wenn sie unverstandene Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Fehler 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsgebundenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, welches jetzt veraltet ist ([Firefox Fehler 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false` bei der Verwendung von SOCKS4 und `true` bei der Verwendung von SOCKS5. Zuvor war der Standardwert `false` für SOCKS4 und SOCKS5 ([Firefox Fehler 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für das asynchrone Handling von Authentifizierungsanfragen mit {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox Fehler 1889897](https://bugzil.la/1889897)).
- Der [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifestsystemschlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für Zugriff (Zugriff gewährt durch den Benutzer nach der Installation einer Erweiterung) für die APIs in der Erweiterung, die Host-Daten lesen oder ändern ([Firefox Fehler 1766026](https://bugzil.la/1766026)).
- Die nicht-standardmäßigen Web-API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Entfernen Sie die Nutzung dieser Ereignisse aus Erweiterungsdokumenten vor der Veröffentlichung von Firefox 131 ([Firefox Fehler 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt für Skripte bereitgestellt, die in der Ausführungsumgebung der Webseite laufen. Dies wird durch die Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API, und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifestsystemschlüssel bereitgestellt ([Firefox Fehler 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sanboxierte Seiten mit `about:blank`, `about:srcdoc` und `data:`-URLs injizieren. Dies wurde in [Firefox Fehler 1475831](https://bugzil.la/1475831) für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} und in [Firefox Fehler 1853411](https://bugzil.la/1853411) für {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} durch die Einführung von `matchOriginAsFallback` in {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhalts-Skripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:` URLs ([Firefox Fehler 1411641](https://bugzil.la/1411641)).
- Der [Manifestsystemschlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:` und `blob:`-Seiten injiziert werden können, wenn der Dokumentenursprung aufgrund der Nutzung von CSP oder iframe-Sandbox undurchsichtig ist ([Firefox Fehler 1475831](https://bugzil.la/1475831) und [Firefox Fehler 1896669](https://bugzil.la/1896669)). Zudem können Skripte, die mit dem `content_scripts`-Manifestsystemschlüssel registriert sind, nur in `blob:`-Seiten ausgeführt werden, wenn `match_origin_as_fallback` `true` ist ([Firefox Fehler 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox Fehler 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine unverstandene Eigenschaft in [Manifestsystemschlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor ergaben solche Erweiterungen einen Fehler bei der Installation. Dies stellt sicher, dass wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft nutzen, in Versionen von Firefox bis zu diesem Release geladen werden ([Firefox Fehler 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht-persistentes Hintergrundskript verwenden, bestehen jetzt zuverlässiger über Erweiterungs-Neustarts. Zuvor gab es Fälle, in denen die Menüregistrierung bei Neustarts verschwand ([Firefox Fehler 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 128 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um die Unterstützung für den MIME-Typ `image/jxl` anzugeben. ([Firefox Fehler 1711622](https://bugzil.la/1711622)).

- **Unabhängiger partitionierter Status von Cookies (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", erlauben Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktiv des `Set-Cookie` HTTP-Headers in eine partitionierte Speicherung einzubeziehen. Wenn gesetzt, haben Cookies für jede Top-Level-Site einen separaten Speicher und können nur innerhalb derselben Top-Level-Site, auf der sie gesetzt wurden, und ihren Subdomains gelesen werden. Dies blockiert das Cross-Site-Tracking, während es noch legitime Nutzungen von Drittanbieter-Cookies ermöglicht, wie das Persistieren von Zustandsdaten eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg. ([Firefox Fehler 1898253](https://bugzil.la/1898253)).

- **Datenschutzfreundliche Zuordnungs-API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA-API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenzuordnung mithilfe des neuen `navigator.privateAttribution`-Objekts mit `saveImpression()` und `measureConversion()`-Methoden. Lesen Sie mehr über die PPA [in der ursprünglichen Erklärung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und in der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites via [Origin-Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Einstellen der Präferenz auf `1` aktiviert werden. ([Firefox Fehler 1900929](https://bugzil.la/1900929)).
