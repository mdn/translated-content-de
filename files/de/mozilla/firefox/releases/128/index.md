---
title: Firefox 128 Versionshinweise für Entwickler
short-title: Firefox 128
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt jetzt keine ASCII-Zeilenumbrüche, Tabulatoren oder das `<`-Zeichen mehr. Der Wert wird auf `_blank` geändert, wenn eines davon vorhanden ist. Dies verhindert einhängende Markup-Injektionsangriffe, die ein ungeschlossenes `target`-Attribut verwenden ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) ist jetzt standardmäßig aktiviert. Relativfarbsyntax ermöglicht das Erstellen eines Farbwerts relativ zu einer Ausgangsfarbe und kann es ermöglichen, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mithilfe von [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) zu ändern ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft unterstützt jetzt [Alternativtext](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann für den Barrierefreiheitsbaum des Browsers offengelegt. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/Reference/At-rules/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den Syntax-Komponenten-Namen `<string>`. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerk Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizebare {{jsxref("ArrayBuffer")}} und erweiterbare {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, sodass die Größe von Puffern geändert werden kann, ohne einen neuen Puffer zuzuweisen und Daten hineinzukopieren ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Erweitern von {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal zulässige Größe des Puffers wird mit dem Parameter `options.maxByteLength` für den [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer wachsen kann, und seine maximal zulässige Größe an.
  - Ändern der Größe von {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal zulässige Größe des Puffers wird mit dem Parameter `options.maxByteLength` für den [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer geändert werden kann, und seine maximal zulässige Größe, jeweils.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) beinhaltet jetzt den MIME-Typ `image/svg+xml` ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Erweiterbare Priorisierungsschema für HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Headers [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority) für Anfragen und Antworten, der es Clients ermöglicht, Hinweise auf die erwartete relative Priorität für Ressourcen zu geben, die über eine Verbindung gesendet werden, und die HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es erlauben, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuell verwendeten Codecs für die Kodierung und Übertragung von Medien auf den Empfangs- und Sendespuren beschreibt. ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt, um einfach ein {{jsxref("Uint8Array")}} von einer [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu prüfen, ob das CDM-Modul, das verwendet wird, um DRM-geschützte Inhalte zu entschlüsseln, die Präsentation von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf den angegebenen Richtlinienanforderungen wie der vom System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://de.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version erlauben würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus zu wissen, ob die Wiedergabe in optimaler Auflösung im Voraus erlaubt sein wird, ohne eine Medienschlüssel-Sitzung erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein WebRTC-Lokalteilnehmer für das Decodieren empfangener Daten verwenden kann, in der bevorzugten Codec-Reihenfolge. Webanwendungen können dies verwenden, um den Remote-Teilnehmer zu veranlassen, einen bevorzugten Codec zu wählen und die Aushandlung bestimmter Codecs zu deaktivieren — einschließlich derer, die für Übertragungswiederholungen, Redundanz und Vorwärtsfehlerkorrektur verwendet werden. ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung des [declarative shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), und zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Das [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) Interface wird jetzt standardmäßig unterstützt und repräsentiert eine CSS-`@property`-At-Regel. Das Interface ermöglicht es, die Werte zu erhalten, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue) von CSS-Benutzerdefinierten Eigenschaften, die mit der `@property`-At-Regel definiert sind ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) über JavaScript zu definieren, was dem Verwenden der `@property`-At-Regel in CSS ähnelt ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht-standardmäßige Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser unterstützt. ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Funktion, die entweder ein String (WebDriver classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Funktionen für WebDriver BiDi, wie das Bearbeiten von "beforeunload"-Eingabeaufforderungen. ([Firefox Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um die WebDriver BiDi-Spezifikation zu erfüllen. Dies ermöglicht die Identifizierung von Sitzungen, die für oder auf WebDriver BiDi umgestellt wurden. ([Firefox Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den `network.continueRequest`-Befehl hinzugefügt, der es jetzt erlaubt, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor diese über das Netzwerk gesendet wird. ([Firefox Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, welches es erlaubt, eine Berechtigung auf einen spezifischen Benutzerkontext zu isolieren (in Firefox als Container implementiert). ([Firefox Bug 1894217](https://bugzil.la/1894217))
- Einen Fehler in `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle fehlschlagen lassen würde. ([Firefox Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge der `network.responseCompleted`-Ereignisse für Umleitungen angepasst. Die Antwort der ursprünglichen Anfrage wird jetzt immer vor den Ereignissen für die Umleitung ausgegeben. ([Firefox Bug 1879580](https://bugzil.la/1879580))
- Um sich an das aktuelle Firefox-Verhalten anzupassen, haben wir die Umgehungslösung eingeführt, Cookies nicht zu partitionieren, die mit dem Kommando "storage.setCookie" für dieselbe Domain hinzugefügt werden, wie die im Zielkontext geladene Seite. ([Firefox Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver classic Spezifikation in Einklang zu stehen. Dies erlaubt es, Sitzungen zu identifizieren, die für WebDriver classic erstellt wurden. ([Firefox Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions-API in WebDriver Classic hinzugefügt. ([Firefox Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzanforderungs-Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzanforderungsregel, die über den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wird, wird jetzt geladen, wenn sie nicht anerkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften stellen die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln dar, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, das jetzt als veraltet gilt ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false`, wenn SOCKS4 verwendet wird, und `true` bei der Verwendung von SOCKS5. Zuvor war der Standardwert `false` für SOCKS4 und SOCKS5 ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} zur Verfügung gestellt, um Authentifizierungsanfragen asynchron zu bearbeiten, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifest-Schlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (Zugriff, der vom Benutzer nach der Installation einer Erweiterung gewährt wird) für die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht-standardmäßigen Web-API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird nun bereitgestellt, damit Skripte in der Ausführungsumgebung der Webseite laufen. Dies wird durch die Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API zur Verfügung gestellt, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API, und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sandboxed-Seiten mit `about:blank`, `about:srcdoc`, und `data:`-URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} im [Firefox Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} im [Firefox Bug 1853411](https://bugzil.la/1853411) umgesetzt, indem `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} eingeführt wurde.
- Inhaltsskripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:` URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der [manifest Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:`, und `blob:`-Seiten injiziert werden können, wenn der Dokumenten-Ursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Außerdem können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, jetzt nur in `blob:`-Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führten diese Erweiterungen bei der Installation zu einem Fehler. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu dieser Veröffentlichung geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen mit einem nicht-persistenten Hintergrundskript erstellt wurden, bleiben jetzt zuverlässiger über Erweiterungsneustarts hinweg bestehen. Zuvor gab es Fälle, in denen die Menüregistrierung beim Neustart verschwand ([Firefox Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 128 enthalten, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um die Unterstützung für den `image/jxl` MIME-Typ anzuzeigen. ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Cookies Having Independent Partitioned State (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie mit Hilfe der [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie`-HTTP-Headers in eine partitionierte Speicherung umzuwandeln. Wenn gesetzt, haben Cookies separate Speicher für jede Top-Level-Website und können nur innerhalb derselben Top-Level-Website, auf der sie gesetzt wurden, und ihren Subdomains gelesen werden. Dies blockiert Cross-Site-Tracking, ermöglicht jedoch weiterhin legitime Verwendungen von Drittanbieter-Cookies, wie das Persistieren des Status von eingebetteten Karten oder Chat-Widgets über verschiedene Subdomains einer Website hinweg. ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Privatsphäre schonende Attributions-API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenattribution, indem das neue Objekt `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()` verwendet wird. Lesen Sie mehr über PPA [im ursprünglichen Erklärungstext](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).
