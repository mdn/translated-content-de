---
title: Firefox 128 Versionshinweise für Entwickler
short-title: Firefox 128
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt nun keine ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen mehr. Wenn diese vorhanden sind, wird der Wert zu `_blank` geändert. Dies verhindert hängende Markup-Injektion-Angriffe, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative Color Syntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) ist jetzt standardmäßig aktiviert. Diese Syntax ermöglicht es, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen und eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mithilfe von [Farb-Funktionen](/de/docs/Web/CSS/Guides/Colors#functions) zu ändern ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft unterstützt jetzt [Alternativtext](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann im Accessibility-Tree des Browsers angezeigt. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/Reference/At-rules/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>`-Syntax-Komponentennamen. (Siehe [Firefox-Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerk-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und ausbaufähige {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, wodurch die Größe von Puffern verändert werden kann, ohne einen neuen Puffer zuzuweisen und Daten hineinzukopieren ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Grow {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximale erlaubte Größe des Puffers wird mithilfe des Parameters `options.maxByteLength` im [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) festgelegt.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer wachsen kann und seine maximal erlaubte Größe.
  - Resize {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximale erlaubte Größe des Puffers wird mithilfe des Parameters `options.maxByteLength` im [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) festgelegt.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer vergrößert werden kann und seine maximal erlaubte Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält jetzt den MIME-Typ `image/svg+xml` ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Erweiterbare Priorisierungs-Schema für HTTP")}} wird jetzt unterstützt, einschließlich des HTTP [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority) Anfrage- und Antwort-Headers, der es Clients ermöglicht, einen Hinweis auf die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen zu geben, sowie der HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die derzeit verwendeten Codecs für das Kodieren und Übertragen von Medien auf den Empfänger- und Sender-Spuren beschreibt. ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt als bequemer Weg unterstützt, um einen {{jsxref("Uint8Array")}} von einem [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten, jeweils. ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zur Entschlüsselung von DRM-geschütztem Inhalt verwendet wird, die Präsentation von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf festgelegten Richtlinienanforderungen wie der [High-bandwidth Digital Content Protection (HDCP)](https://de.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version, die vom System unterstützt wird, zulassen würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne eine Medienschlüsselsitzung erstellen oder eine reale Lizenz abrufen zu müssen. ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein WebRTC-Lokaler Peer zum Dekodieren empfangener Daten verwenden kann, in seiner bevorzugten Codec-Reihenfolge. Webanwendungen können dies verwenden, um den Remote-Peer dazu zu bringen, einen bevorzugten Codec auszuwählen, und um die Aushandlung bestimmter Codecs zu deaktivieren, einschließlich der für Rückübertragungen, Redundanz und Vorwärtsfehlerkorrektur verwendeten. ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Die Serialisierung des [deklarierten Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) sowie der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die Schnittstelle [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) wird nun standardmäßig unterstützt und repräsentiert eine CSS-[`@property`](/de/docs/Web/CSS/Reference/At-rules/@property)-At-Regel. Die Schnittstelle ermöglicht es, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue) von CSS-Benutzerdefinierten Eigenschaften zu erhalten, die mit der `@property` At-Regel definiert sind ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht Ihnen die Definition von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) über JavaScript, ähnlich wie die Verwendung der `@property` At-Regel in CSS ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird nun von keinem Browser mehr unterstützt. ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Funktionalität, die entweder ein String (WebDriver klassisch) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Möglichkeiten für WebDriver BiDi, wie z.B. die Handhabung von "beforeunload" Aufforderungen. ([Firefox-Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung wurde hinzugefügt, um sich mit der WebDriver-BiDi-Spezifikation abzustimmen. Dies ermöglicht die Identifizierung von Sitzungen, die für oder auf WebDriver BiDi aktualisiert wurden. ([Firefox-Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den Befehl `network.continueRequest` wurde hinzugefügt, der es nun ermöglicht, Header, Cookies, Methode und Körper einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox-Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das Argument `userContext` im Befehl `permissions.setPermission` wurde hinzugefügt, um eine Berechtigung auf einen bestimmten Benutzerkontext (in Firefox als Container implementiert) zu isolieren. ([Firefox-Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler in `browsingContext.navigate` wurde behoben, bei dem ein Navigationsfehler eine Fehlerseite lud und nachfolgende Befehle fehlschlugen. ([Firefox-Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted` Ereignisse für Weiterleitungen ausgegeben werden. Die ursprüngliche Anfrage's `responseCompleted` wird nun immer vor den Ereignissen für die Weiterleitung ausgegeben. ([Firefox-Bug 1879580](https://bugzil.la/1879580))
- Um sich mit dem aktuellen Firefox-Verhalten abzustimmen, haben wir den Workaround eingeführt, um Cookies nicht zu partitionieren, die mit dem Befehl "storage.setCookie" für dieselbe Domain wie die im Zielkontext geladene Seite hinzugefügt werden. ([Firefox-Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszugeben, wenn die angegebene Datei nicht existiert. ([Firefox-Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung wurde hinzugefügt, um sich mit den WebDriver Classic Spezifikationen abzustimmen. Dies ermöglicht die Identifizierung von Sitzungen, die für das klassische WebDriver erstellt wurden. ([Firefox-Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API in WebDriver Classic wurde hinzugefügt. ([Firefox-Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzanfrage-Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzanfrage-Regel, die durch den [`declarative_net_request` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wurde, wird jetzt geladen, selbst wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsgültigen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, das jetzt veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der Eigenschaft {{WebExtAPIRef("proxy.settings")}} `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor betrug der Standardwert `false` für sowohl SOCKS4 als auch SOCKS5 ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Es wird nun Unterstützung für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanforderungen asynchron zu behandeln, indem `"asyncBlocking"` im `addListener` Parameter `extraInfoSpec` angegeben wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (Zugriff, der durch den Benutzer nach der Installation einer Erweiterung gewährt wird) für die APIs in der Erweiterung, die Host-Daten lesen oder verändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht-standardmäßigen Web-API-Ereignisse `overflow` und `underflow` wurden veraltet. Die Verwendung dieser Ereignisse sollte vor der Veröffentlichung von Firefox 131 aus Erweitungsdokumenten entfernt werden ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird nun bereitgestellt, um Skripte in der Ausführungsumgebung der Webseite laufen zu lassen. Dies wird durch die Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}} API bereitgestellt, die Ergänzung von `world` zur {{WebExtAPIRef("contentScripts.register()")}} API und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}} API kann jetzt Skripte und CSS in sandboxed Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox-Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox-Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Content-Skripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:` URLs ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der [Manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:` und `blob:` Seiten injiziert werden können, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe-Sandbox opak ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Darüber hinaus können Skripte, die mit dem `content_scripts` Manifest-Schlüssel registriert sind, jetzt nur dann auf `blob:` Seiten ausgeführt werden, wenn `match_origin_as_fallback` `true` ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}} Eigenschaft `domainType` wurde hinzugefügt ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Früher führten diese Erweiterungen bei der Installation zu einem Fehler. Dies stellt sicher, dass wenn eine neue `browser_specific_settings.gecko` Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, rückwirkend ab dieser Veröffentlichung in Firefox geladen werden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen mit einem nicht-persistenten Hintergrundskript erstellt wurden, bleiben jetzt zuverlässiger über Neustarts der Erweiterung hinweg bestehen. Früher gab es Fälle, in denen die Menu-Registrierung bei Neustarts verschwand ([Firefox-Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 128 implementiert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um Unterstützung für den MIME-Typ `image/jxl` anzuzeigen. ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) Direktive im `Set-Cookie` HTTP-Header in den partitionierten Speicher aufzunehmen. Wenn es gesetzt ist, haben Cookies separate Speicher für jede Top-Level-Website und können nur innerhalb derselben Top-Level-Website, auf der sie gesetzt wurden, und deren Subdomains gelesen werden. Dies verhindert Cross-Site-Tracking und ermöglicht gleichzeitig legitime Verwendungen von Third-Party-Cookies, wie das Beibehalten des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Seite hinweg. ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Nutzerverfolgung für Anzeigen-Attribution unter Verwendung des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über die PPA [in der ursprünglichen Erklärung](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und in der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Webseiten über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).
