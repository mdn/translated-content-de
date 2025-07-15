---
title: Firefox 128 für Entwickler
short-title: Firefox 128
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt nun keine ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen mehr. Ist eines dieser Zeichen vorhanden, wird der Wert in `_blank` geändert. Dadurch werden Injektionsangriffe mithilfe eines nicht geschlossenen `target`-Attributs verhindert ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative-Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Die Relative-Farbsyntax ermöglicht es Ihnen, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen, und erlaubt es, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mit [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt jetzt [Alternativtext](/de/docs/Web/CSS/content#alternative_text_string_counter) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann dem Zugriffspfad des Browsers hinzugefügt. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>` Syntax-Komponenten-Namen. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerks-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es erlaubt, die Größe von Buffern zu ändern, ohne einen neuen Buffer zuzuweisen und Daten hineinzukopieren ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Erweitern Sie {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal erlaubte Größe des Buffers wird mit dem `options.maxByteLength`-Parameter des [`SharedArrayBuffer()` Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer wachsen kann und seine maximal erlaubte Größe.
  - Ändern Sie die Größe von {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal erlaubte Größe des Buffers wird mit dem `options.maxByteLength`-Parameter des [`ArrayBuffer()` Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer geändert werden kann und seine maximal erlaubte Größe.

### HTTP

- Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) umfasst jetzt den MIME-Typ `image/svg+xml` ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority) Anfragen- und Antwort-Headers, der es Clients ermöglicht, den erwarteten relativen Prioritätsgrad für über eine Verbindung gesendete Ressourcen anzuzeigen, sowie der `PRIORITY_UPDATE`-Frames von HTTP/2 und HTTP/3, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Codierung und Übertragung von Medien auf den Empfangs- und Sendertracks verwendet werden. ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt als bequemer Weg unterstützt, um ein {{jsxref("Uint8Array")}} aus einer [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Darstellung von verschlüsseltem Mediendaten für einen „hypothetischen“ Schlüssel auf der Grundlage der angegebenen Richtlinienanforderungen wie der vom System unterstützten HDCP-Version erlauben würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne eine Medienschlüssel-Sitzung erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die eine WebRTC-Lokaleinheit zum Decodieren empfangener Daten in ihrer bevorzugten Codec-Reihenfolge verwenden kann. Webanwendungen können dies verwenden, um den Remote-Peer zu veranlassen, einen bevorzugten Codec auszuwählen, und um die Aushandlung bestimmter Codecs zu deaktivieren – einschließlich derjenigen, die für Übertragung, Redundanz und Fehlerkorrektur verwendet werden. ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung des [deklarativen Schatten-DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), sowie zugehöriger Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Das [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Interface wird jetzt standardmäßig unterstützt und repräsentiert eine CSS [`@property`](/de/docs/Web/CSS/@property) At-Regel. Das Interface ermöglicht Ihnen, die Werte einzuholen, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), der mit der `@property`-At-Regel definierten benutzerdefinierten CSS-Eigenschaften ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht die Definition von [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript, was der Verwendung der `@property`-At-Regel in CSS ähnelt ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht-standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser mehr unterstützt. ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder ein String (WebDriver classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie das Bearbeiten von "beforeunload"-Aufforderungen. ([Firefox Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um es mit der WebDriver BiDi-Spezifikation abzustimmen. Dies ermöglicht die Identifikation von Sitzungen, die für oder auf WebDriver BiDi aktualisiert wurden. ([Firefox Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den `network.continueRequest`-Befehl hinzugefügt, der es jetzt erlaubt, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, das es erlaubt, eine Erlaubnis auf einen spezifischen Benutzerkontext zu isolieren (in Firefox als Container implementiert). ([Firefox Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler in `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle zum Scheitern bringen würde. ([Firefox Bug 1878690](https://bugzil.la/1878690))
- Die Reihenfolge, in der `network.responseCompleted`-Ereignisse für Umleitungen gesendet werden, wurde behoben. Die `responseCompleted` des ursprünglichen Antrags wird jetzt immer vor den Ereignissen der Umleitung gesendet. ([Firefox Bug 1879580](https://bugzil.la/1879580))
- Um das aktuelle Firefox-Verhalten auszurichten, haben wir die Umgehung eingerichtet, um Cookies nicht zu partitionieren, die mit dem "storage.setCookie"-Befehl für die gleiche Domain wie die im Zielkontext geladene Seite hinzugefügt werden. ([Firefox Bug 1898222](https://bugzil.la/1898222))
- Der `input.setFiles`-Befehl wurde aktualisiert, um einen `UnsupportedOperation`-Fehler zu werfen, wenn die angegebene Datei nicht existiert. ([Firefox Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um es mit der WebDriver-classic-Spezifikation abzustimmen. Dies ermöglicht die Identifikation von Sitzungen, die für WebDriver classic erstellt wurden. ([Firefox Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API im WebDriver classic hinzugefügt. ([Firefox Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzwerkanforderungs-Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerkanforderungsregel, die über den [`declarative_net_request` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert ist, wird jetzt geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl dynamischer und sitzungsbezogener Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, das jetzt veraltet ist ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}} Eigenschaft `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war er `false` für SOCKS4 und SOCKS5 ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanforderungen asynchron zu verarbeiten, indem `"asyncBlocking"` im Parameter `extraInfoSpec` von `addListener` angegeben wird ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für Zugriff (der Zugriff wird durch den Benutzer nach der Installation einer Erweiterung gewährt) für die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht-standardkonformen Web-API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Die Verwendung dieser Ereignisse sollte vor der Veröffentlichung von Firefox 131 aus Erweiterungsdokumenten entfernt werden ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Skripte können jetzt im Ausführungsumfeld der Webseite ausgeführt werden. Dies wird durch die Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}} API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}} API, und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel bereitgestellt ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}} API kann jetzt Skripte und CSS in sandboxed-Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhalte Skripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:` URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der Manifest-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:`, und `blob:` Seiten eingebettet werden können, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe sandbox undurchsichtig ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Darüber hinaus können mit dem `content_scripts` Manifest-Schlüssel registrierte Skripte jetzt nur in `blob:` Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}} Eigenschaft `domainType` hinzugefügt ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führten diese Erweiterungen beim Installieren zu einem Fehler. Das stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen ab diesem Release geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht-persistenten Hintergrundskript verwenden, bleiben nach Erweiterungs-Neustarts zuverlässiger bestehen. Zuvor gab es Fälle, in denen die Menüregistrierung bei Neustarts verschwand ([Firefox Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Webfunktionen

Diese Funktionen werden neu in Firefox 128 eingeführt, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite für [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanforderungen:** `image.jxl.enabled`.

  Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um Unterstützung für den MIME-Typ `image/jxl` anzuzeigen. ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Status (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie mithilfe der [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) Direktive des `Set-Cookie` HTTP-Headers in den partitionierten Speicher einzuschreiben. Wenn festgelegt, haben Cookies einen separaten Speicher für jede oberste Site und können nur innerhalb derselben obersten Site gelesen werden, auf der sie gesetzt wurden, sowie deren Subdomains. Dies blockiert das plattformübergreifende Tracking, während legitime Verwendungen von Drittanbieter-Cookies wie das Speichern des Zustands eingebetteter Karten- oder Chat-Widgets über verschiedene Subdomains einer Site hinweg weiterhin ermöglicht werden. ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Nutzer-Tracking für Werbezuordnungen mithilfe des neuen `navigator.privateAttribution` Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Mehr über PPA erfahren Sie [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Webseiten über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).
