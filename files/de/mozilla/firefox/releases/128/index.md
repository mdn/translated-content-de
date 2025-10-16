---
title: Firefox 128 Versionshinweise für Entwickler
short-title: Firefox 128
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>` Elements verhindert nun ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen und ändert den Wert in `_blank`, wenn eines dieser Zeichen vorhanden ist. Dies verhindert hängende Markup-Injektionsangriffe, die ein offenes `target`-Attribut nutzen ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- [Relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Die relative Farbsyntax ermöglicht es, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen und eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} zu ändern, indem [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) verwendet werden ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt jetzt [Alternativtext](/de/docs/Web/CSS/content#alternative_text_string_counter) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann im Barrierefreiheitsbaum des Browsers angezeigt. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>`-Syntax-Komponentennamen. (Siehe [Firefox-Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerk-Layouteigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich aus der Spezifikation [entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden nun unterstützt, sodass die Größe von Buffern geändert werden kann, ohne einen neuen Buffer zuzuweisen und Daten hineinzukopieren ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Grow {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal erlaubte Größe des Buffers wird mit dem Parameter `options.maxByteLength` im [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer wachsen kann und seine maximal erlaubte Größe.
  - Resize {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal erlaubte Größe des Buffers wird mit dem Parameter `options.maxByteLength` im [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer geändert werden kann und seine maximal erlaubte Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält jetzt den MIME-Typ `image/svg+xml` ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Request- und -Response-Headers [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority), der es Clients ermöglicht, die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen anzugeben, sowie der HTTP/2- und HTTP/3-Frames `PRIORITY_UPDATE`, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Kodierung und Übertragung von Medien auf den Empfänger- bzw. Sender-Spuren verwendet werden. ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt als bequemer Weg unterstützt, um ein {{jsxref("Uint8Array")}} von einer [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zur Entschlüsselung von DRM-geschützten Inhalten verwendet wird, die Präsentation von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf angegebenen Richtlinienanforderungen wie der [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version erlaubt, die vom System unterstützt wird.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt ist, ohne eine Medienkey-Sitzung erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein WebRTC-Lokaler Peer zum Dekodieren empfangener Daten in seiner bevorzugten Codec-Reihenfolge verwenden kann. Webanwendungen können dies nutzen, um den Remote-Peer dazu zu bringen, einen bevorzugten Codec auszuwählen und die Aushandlung bestimmter Codecs zu deaktivieren — einschließlich der für Retransmission, Redundanz und Forward Error Correction verwendeten. ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung des [deklarativen Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), und der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Das Interface [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) wird jetzt standardmäßig unterstützt und repräsentiert eine CSS-[`@property`](/de/docs/Web/CSS/@property)-At-Regel. Das Interface ermöglicht es, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Custom-Eigenschaften abzurufen, die mit der `@property`-At-Regel definiert wurden ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht das Definieren von [CSS-Custom-Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript, ähnlich wie die Verwendung der `@property`-At-Regel in CSS ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser mehr unterstützt. ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte Fähigkeit "unhandledPromptBehavior", die entweder ein String (WebDriver klassisch) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi wie die Behandlung von "beforeunload"-Prompts. ([Firefox-Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um sich an die WebDriver BiDi-Spezifikation anzupassen. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver BiDi erstellt oder darauf aktualisiert wurden. ([Firefox-Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den Befehl `network.continueRequest` hinzugefügt, der es jetzt erlaubt, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox-Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das Argument `userContext` im Befehl `permissions.setPermission` hinzugefügt, das es ermöglicht, eine Erlaubnis zu isolieren, um sie auf einen bestimmten Benutzerkontext zu beschränken (in Firefox als Container implementiert). ([Firefox-Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler im `browsingContext.navigate` Befehl behoben, bei dem ein Navigationsfehler eine Fehlerseite geladen hat und nachfolgende Befehle nicht ausgeführt wurden. ([Firefox-Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge der `network.responseCompleted`-Ereignisse für Redirects korrigiert. Die `responseCompleted` des Originalrequests wird jetzt immer vor den Ereignissen für das Redirect ausgegeben. ([Firefox-Bug 1879580](https://bugzil.la/1879580))
- Um sich dem aktuellen Verhalten von Firefox anzupassen, haben wir eine Lösung eingeführt, um Cookies, die mit dem Befehl "storage.setCookie" für dieselbe Domain wie die in den Zielkontext geladene Seite hinzugefügt wurden, nicht zu partionieren. ([Firefox-Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszugeben, wenn die angegebene Datei nicht existiert. ([Firefox-Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um sich an die WebDriver Klassische Spezifikation anzupassen. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver klassisch erstellt wurden. ([Firefox-Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API in WebDriver Klassisch hinzugefügt. ([Firefox-Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Ermöglicht das Aktivieren und Deaktivieren von Regeln in statischen deklarativen Netzanforderungsregelsets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} und das Auflisten von deaktivierten Regeln für ein statisches Regelset mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzanforderungsregel, die durch den [`declarative_net_request` manifest key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wird, wird jetzt geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl an dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, die jetzt veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war der Standardwert `false` für SOCKS4 und SOCKS5 ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} geboten, um Authentifizierungsanforderungen asynchron zu verarbeiten, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen nach Zugriff (Zugriff, der vom Benutzer nach der Installation einer Erweiterung gewährt wird) für die APIs in der Erweiterung, die Host-Daten lesen oder ändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web API-Ereignisse `overflow` und `underflow` sind veraltet. Die Verwendung dieser Ereignisse sollte vor der Veröffentlichung von Firefox 131 aus den Erweiterung-Dokumenten entfernt werden ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt für Skripte geboten, die in der Ausführungsumgebung der Webseite ausgeführt werden. Dies wird durch Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API, und durch Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel gewährleistet ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sandboxed Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs injizieren. Dies wurde in [Firefox-Bug 1475831](https://bugzil.la/1475831) für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} implementiert und in [Firefox-Bug 1853411](https://bugzil.la/1853411) für {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} durch die Einführung von `matchOriginAsFallback` in {{WebExtAPIRef("scripting.RegisteredContentScript")}}.
- Inhaltsskripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:` URLs ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der Manifest-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was es ermöglicht, Skripte in `about:`, `data:` und `blob:` Seiten zu injizieren, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Außerdem können Skripte, die mit dem `content_scripts` Manifest-Schlüssel registriert sind, jetzt nur dann in `blob:` Seiten ausgeführt werden, wenn `match_origin_as_fallback` `true` ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung hinzugefügt für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führten diese Erweiterungen beim Installieren zu einem Fehler. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Versionen von Firefox bis zu dieser Veröffentlichung geladen werden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht persistentes Hintergrundskript verwenden, bestehen jetzt zuverlässiger über Erweiterungsneustarts hinweg. Zuvor gab es Fälle, in denen die Menüregistrierung bei Neustarts verschwand ([Firefox-Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 128 enthalten, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Voreinstellung und setzen Sie sie auf `true`. Sie können weitere solcher Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanforderungen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er Unterstützung für den `image/jxl` MIME-Typ anzeigt. ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen Entwicklern, ein Cookie in partitionierten Speicher zu setzen, indem die [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive im `Set-Cookie` HTTP-Header verwendet wird. Wenn gesetzt, haben Cookies separaten Speicher für jede oberste Webseite und können nur innerhalb derselben Webseite und ihrer Subdomains gelesen werden, auf der sie gesetzt wurden. Dies blockiert das Tracking über Webseiten hinweg, ermöglicht jedoch weiterhin legitime Verwendungen von Cookies Dritter, z.B. das Speichern des Zustands eingebetteter Karten oder Chat-Widgets auf verschiedenen Subdomains einer Seite. ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Datenschutzfreundliche Attributions-API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Werbeattribution mit dem neuen `navigator.privateAttribution`-Objekt mit `saveImpression()` und `measureConversion()`-Methoden. Lesen Sie mehr über die PPA [im originalen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Webseiten über [Origin-Trials](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Voreinstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).
