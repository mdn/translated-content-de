---
title: Firefox 128 Versionshinweise für Entwickler
short-title: Firefox 128
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt jetzt keine ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen mehr und ändert den Wert auf `_blank`, falls solche Zeichen vorkommen. Dies verhindert "dangling markup injection"-Angriffe, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox-Fehler 1835157](https://bugzil.la/1835157)).

### CSS

- [Relative Color Syntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Relative Color Syntax ermöglicht es, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen und kann es Ihnen ermöglichen, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mit [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox-Fehler 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft unterstützt jetzt [alternativen Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter) für Inhalte, die ein Bild enthalten. Der alternative Text wird dann in den Zugänglichkeitsbaum des Browsers aufgenommen. (Siehe [Firefox-Fehler 1281158](https://bugzil.la/1281158) und [Firefox-Fehler 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}} at-rule unterstützt jetzt den `<string>` Syntax-Komponenten-Namen. (Siehe [Firefox-Fehler 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Masonry-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Fehler 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es ermöglicht, die Größe von Buffern zu ändern, ohne einen neuen Puffer erstellen und Daten in ihn kopieren zu müssen ([Firefox-Fehler 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Wachsen Sie {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximale erlaubte Größe des Puffers wird mit dem Parameter `options.maxByteLength` zum [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer wachsen kann, und seine maximal erlaubte Größe.
  - Passen Sie die Größe von {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} an.
    Die maximale erlaubte Größe des Puffers wird mit dem Parameter `options.maxByteLength` zum [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer resize-fähig ist, und seine maximal erlaubte Größe.

### HTTP

- Der HTTP-[`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält jetzt den `image/svg+xml` MIME-Typ ([Firefox-Fehler 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-[`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority)-Anfrage- und Antwort-Headers, welcher es Clients ermöglicht, die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen anzugeben, sowie der HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es erlauben, die Priorität nach dem Senden des Headers zu ändern ([Firefox-Fehler 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Kodierung und Übertragung von Medien auf den Empfangs- bzw. Sender-Tracks verwendet werden. ([Firefox-Fehler 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt als bequeme Möglichkeit, ein {{jsxref("Uint8Array")}} von einem [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox-Fehler 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten von einer Push-Benachrichtigung als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Fehler 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten von einem [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Fehler 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das für das Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Präsentation von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf den angegebenen Policy-Anforderungen wie der [High-bandwidth Digital Content Protection (HDCP)](https://de.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version, die vom System unterstützt wird, zulassen würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt ist, ohne eine Medien-Schlüsselsitzung erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox-Fehler 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer für das Decodieren empfangener Daten verwenden kann, in der bevorzugten Codec-Reihenfolge. Webanwendungen können dies nutzen, um den Remote-Peer zu veranlassen, einen bevorzugten Codec auszuwählen, und um die Aushandlung spezifischer Codecs zu deaktivieren – einschließlich derjenigen, die für die Wiederübertragung, Redundanz und Fehlerkorrektur verwendet werden. ([Firefox-Fehler 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklarativem Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) sowie der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Das [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Interface wird jetzt standardmäßig unterstützt und repräsentiert eine CSS-[`@property`](/de/docs/Web/CSS/@property)-at-rule. Das Interface erlaubt das Abrufen der Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Custom-Properties, die mit der `@property`-at-rule definiert wurden ([Firefox-Fehler 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht das Definieren von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) über JavaScript, was ähnlich wie die Verwendung der `@property`-at-rule in CSS ist ([Firefox-Fehler 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser mehr unterstützt. ([Firefox-Fehler 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

- Wir unterstützen jetzt die erweiterte Fähigkeit "unhandledPromptBehavior", die entweder ein String (WebDriver classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie das Handling von "beforeunload"-Aufforderungen. ([Firefox-Fehler 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Session hinzugefügt, um mit der WebDriver-BiDi-Spezifikation in Einklang zu stehen. Dies ermöglicht die Identifikation von Sitzungen, die für WebDriver BiDi erstellt wurden oder auf diese Version upgegradet wurden. ([Firefox-Fehler 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den Befehl `network.continueRequest` hinzugefügt, der jetzt ermöglicht, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox-Fehler 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im Befehl `permissions.setPermission` hinzugefügt, welches erlaubt, eine Erlaubnis auf einen spezifischen Benutzerkontext zu isolieren (in Firefox als Container implementiert). ([Firefox-Fehler 1894217](https://bugzil.la/1894217))
- Einen Fehler im `browsingContext.navigate`-Befehl behoben, bei dem ein Navigationsfehler eine Fehlerseite lud und nachfolgende Befehle scheitern ließ. ([Firefox-Fehler 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge, in der `network.responseCompleted`-Ereignisse für Umleitungen emittiert werden, korrigiert. Das `responseCompleted` der ursprünglichen Anfrage wird jetzt immer vor den Ereignissen für die Umleitung emittiert. ([Firefox-Fehler 1879580](https://bugzil.la/1879580))
- Um mit dem aktuellen Firefox-Verhalten in Einklang zu stehen, haben wir das Workaround eingeführt, um keine Cookies zu partitionieren, die mit dem "storage.setCookie"-Befehl hinzugefügt werden, für die gleiche Domain wie die im Zielkontext geladene Seite. ([Firefox-Fehler 1898222](https://bugzil.la/1898222))
- Der `input.setFiles`-Befehl wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox-Fehler 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Session hinzugefügt, um mit der WebDriver-Classic-Spezifikation übereinzustimmen. Dadurch können Sie Sitzungen identifizieren, die für WebDriver classic erstellt wurden. ([Firefox-Fehler 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API in WebDriver Classic hinzugefügt. ([Firefox-Fehler 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen derskriptive Netzanforderungsregel-Sets zu aktivieren und zu deaktivieren mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} und listet deaktivierte Regeln für ein statisches Regel-Sets mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} ([Firefox-Fehler 1810762](https://bugzil.la/1810762)).
- Eine statische derskriptive Netzanforderungsregel, die über den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wurde, wird jetzt geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox-Fehler 1886608](https://bugzil.la/1886608)).
- Stellt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} vor. Diese Eigenschaften stellen die maximale Anzahl dynamischer und sitzungsbasierter Regeln dar, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, die jetzt veraltet ist ([Firefox-Fehler 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor wurde für SOCKS4 und SOCKS5 `false` voreingestellt ([Firefox-Fehler 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanfragen asynchron zu bearbeiten, indem `"asyncBlocking"` im Parameter `extraInfoSpec` von `addListener` angegeben wird ([Firefox-Fehler 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel erlaubt Laufzeitanfragen für den Zugriff (zugelassen vom Benutzer nach der Installation der Erweiterung) für die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox-Fehler 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web-API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox-Fehler 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt bereitgestellt, um Skripte in der Ausführungsumgebung der Webseite auszuführen. Dies wird durch Support für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}} API, das Hinzufügen von `world` zu der {{WebExtAPIRef("contentScripts.register()")}} API und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel bereitgestellt ([Firefox-Fehler 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sandboxed Pages mit `about:blank`, `about:srcdoc` und `data:`-URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox-Fehler 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox-Fehler 1853411](https://bugzil.la/1853411) implementiert durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}}.
- Inhalts-Skripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:`-URLs ([Firefox-Fehler 1411641](https://bugzil.la/1411641)).
- Der Manifest-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:` und `blob:`-Seiten injiziert werden können, wenn der Dokumentenursprung durch die Nutzung von CSP oder iframe sandbox opak ist ([Firefox-Fehler 1475831](https://bugzil.la/1475831) und [Firefox-Fehler 1896669](https://bugzil.la/1896669)). Darüber hinaus können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, jetzt nur in `blob:`-Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox-Fehler 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox-Fehler 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Bisher führten diese Erweiterungen zu einem Fehler bei der Installation. Dadurch wird sichergestellt, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu diesem Release geladen werden ([Firefox-Fehler 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht persistentes Hintergrundskript verwenden, bleiben jetzt zuverlässiger über Erweiterungsneustarts bestehen. Bisher gab es Fälle, in denen die Menüregistrierung bei Neustarts verschwand ([Firefox-Fehler 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 128 neu bereitgestellt, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie das entsprechende Präferenz auf der `about:config`-Seite und setzen Sie es auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP-[`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er Unterstützung für den `image/jxl` MIME-Typ angibt. ([Firefox-Fehler 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder „partitionierte Cookies“ erlauben es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie`-HTTP-Headers in einen partitionierten Speicher zu optieren. Sobald gesetzt, haben Cookies für jede Top-Level-Site einen separaten Speicher und können nur innerhalb der gleichen Top-Level-Site, auf der sie gesetzt wurden, und deren Subdomänen gelesen werden. Dies blockiert das Cross-Site-Tracking, während es dennoch legitime Verwendungen von Drittanbieter-Cookies ermöglicht, wie das Persistieren von Zuständen eingebetteter Karten oder Chat-Widgets über unterschiedliche Subdomänen einer Website hinweg. ([Firefox-Fehler 1898253](https://bugzil.la/1898253)).

- **Datenschutzschonende Attributions-API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA-API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum User-Tracking für die Attribution von Werbung mithilfe des neuen `navigator.privateAttribution`-Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA im [originalen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox-Fehler 1900929](https://bugzil.la/1900929)).
