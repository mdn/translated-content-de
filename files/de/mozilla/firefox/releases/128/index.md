---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Element/base#target)-Attribut des `<base>`-Elements erlaubt nun keine ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen mehr. Wenn diese vorhanden sind, wird der Wert auf `_blank` geändert. Dies verhindert nicht abgeschlossene `target`-Attribut Angriffe durch eingefügtes Markup ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative-Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist nun standardmäßig aktiviert. Diese Syntax ermöglicht es, einen Farbwert relativ zu einer Ausgangsfarbe zu erstellen, und kann das Ändern einer Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} durch Verwendung von [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) ermöglichen ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt nun [Alternativtext](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann im Barrierefreiheitsbaum der Browser sichtbar gemacht. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).

#### Entfernungen

- Die Masonry-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften wurden nur in Firefox implementiert und kürzlich aus der Spezifikation [entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizeable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es ermöglicht, die Größe von Buffern zu ändern, ohne einen neuen Buffer zuzuweisen und Daten hinein zu kopieren ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:

  - Wachsen Sie {{jsxref("SharedArrayBuffer")}} mithilfe der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode.
    Die maximale erlaubte Größe des Buffers wird mit dem `options.maxByteLength`-Parameter im [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) spezifiziert.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer wachsen kann und seine maximal erlaubte Größe.
  - Ändern Sie die Größe von {{jsxref("ArrayBuffer")}} mit der {{jsxref("ArrayBuffer.prototype.resize()")}}-Methode.
    Die maximale erlaubte Größe des Buffers wird mit dem `options.maxByteLength`-Parameter im [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) spezifiziert.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer neu dimensioniert werden kann und seine maximal erlaubte Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Headers/Accept) in [Standard- und Bildanforderungen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) enthält nun den MIME-Typ `image/svg+xml` ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Erweiterbare Priorisierungsschema für HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Request- und Response-Headers [`Priority`](/de/docs/Web/HTTP/Headers/Priority), der es Clients ermöglicht, die erwartete relative Priorität für Ressourcen, die über eine Verbindung gesendet werden, anzugeben, sowie die HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es erlauben, die Priorität nach dem Senden des Headers zu ändern ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Kodierung und Übertragung von Medien auf den Empfänger- und Sender-Spuren verwendet werden. ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt, um auf einfache Weise ein {{jsxref("Uint8Array")}} von einem [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschützten Inhalten verwendet wird, die Präsentation von verschlüsselten Mediendaten entsprechend den angegebenen Richtlinienanforderungen, wie der vom System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version erlauben würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne eine Medienschlüssel-Session zu erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer zum Dekodieren empfangener Daten in seiner bevorzugten Codec-Reihenfolge verwenden kann. Webanwendungen können dies nutzen, um den Remote-Peer zur Auswahl eines bevorzugten Codecs zu veranlassen und die Aushandlung bestimmter Codecs zu deaktivieren – einschließlich derjenigen, die für Retransmissions, Redundanz und Fehlerkorrektur verwendet werden. ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Die Serialisierung des [deklarativen Shadow DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), und der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die Schnittstelle [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) wird nun standardmäßig unterstützt und repräsentiert eine CSS-[`@property`](/de/docs/Web/CSS/@property)-Atregel. Die Schnittstelle ermöglicht es Ihnen, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Benutzerdefinierten Eigenschaften abzufragen, die mit der `@property`-Atregel definiert wurden ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird nun standardmäßig unterstützt. Sie ermöglicht es, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, was der Verwendung der `@property`-Atregel in CSS ähnelt ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht-standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird von keinem Browser mehr unterstützt. ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Eigenschaft, die entweder ein String (WebDriver klassisch) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Möglichkeiten für WebDriver BiDi, wie das Behandeln von "beforeunload"-Prompten. ([Firefox-Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Session hinzugefügt, um mit der WebDriver-BiDi-Spezifikation übereinzustimmen. Dies ermöglicht die Identifizierung von Sessions, die für WebDriver BiDi erstellt oder aufgerüstet wurden. ([Firefox-Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente des `network.continueRequest`-Befehls hinzugefügt, wodurch es jetzt möglich ist, Header, Cookies, Methode und Body einer Anforderung zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox-Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, das es ermöglicht, eine Berechtigung auf einen spezifischen Benutzerkontext zu beschränken (implementiert als Container in Firefox). ([Firefox-Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler im `browsingContext.navigate`-Befehl wurde behoben, bei dem ein Navigationsfehler zu einer Fehlerseite führte und nachfolgende Befehle zum Scheitern brachte. ([Firefox-Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted`-Ereignisse für Weiterleitungen ausgelöst werden. Die `responseCompleted` des ursprünglichen Requests wird jetzt immer vor den Ereignissen für die Weiterleitung ausgelöst. ([Firefox-Bug 1879580](https://bugzil.la/1879580))
- Um mit dem aktuellen Firefox-Verhalten übereinzustimmen, haben wir den Workaround eingeführt, keine Cookies zu partitionieren, die mit dem "storage.setCookie"-Befehl für die gleiche Domain wie die im Zielkontext geladene Seite hinzugefügt wurden. ([Firefox-Bug 1898222](https://bugzil.la/1898222))
- Der `input.setFiles`-Befehl wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox-Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Session hinzugefügt, um mit der WebDriver klassischen Spezifikation übereinzustimmen. Dies ermöglicht die Identifizierung von Sessions, die für WebDriver klassisch erstellt wurden. ([Firefox-Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions-API in WebDriver Classic hinzugefügt. ([Firefox-Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzwerk-Anforderungs-Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren sowie deaktivierte Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerk-Anforderungsregel, die durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wurde, wird nun geladen, wenn sie unerkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften geben die maximale Anzahl dynamischer und sitzungsgebundener Regeln an, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, die jetzt veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der Eigenschaft {{WebExtAPIRef("proxy.settings")}} `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war er bei SOCKS4 und SOCKS5 `false` ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanforderungen asynchron zu bearbeiten, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanforderungen für den Zugriff (Zugriff, der vom Benutzer nach der Installation einer Erweiterung gewährt wird) für die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht-standardisierten Web-API-Ereignisse `overflow` und `underflow` wurden veraltet. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt für Skripte bereitgestellt, die in der Ausführungsumgebung der Webseite laufen. Dies wird durch die Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API, und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel bewerkstelligt ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sandboxed Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox-Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox-Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` in {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhaltsskripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:` URLs ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der Manifest-Schlüssel [content_scripts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, um Skripte zu ermöglichen, die in `about:`, `data:`, und `blob:` Seiten injiziert werden, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, jetzt nur in `blob:` Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}} Eigenschaft `domainType` hinzugefügt ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Bisher verursachten diese Erweiterungen bei der Installation einen Fehler. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu diesem Release geladen werden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 128 ausgeliefert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanforderungen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Headers/Accept) in [Standard- und Bildanforderungen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen. ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängig partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) oder "partitionierte Cookies" ermöglichen es Entwicklern, ein Cookie in den partitionierten Speicher mit der [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie` HTTP-Headers einzubeziehen. Wenn gesetzt, haben Cookies separaten Speicher für jede oberste Website und können nur innerhalb der gleichen obersten Website gelesen werden, auf der sie gesetzt wurden, und deren Subdomains. Dies blockiert Cross-Site-Tracking, ermöglicht aber dennoch legitime Verwendungen von Drittanbieter-Cookies wie das Persistieren des Status von eingebetteten Karten oder Chat-Widgets auf verschiedenen Subdomains einer Seite. ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Nutzer-Tracking für die Werbungsauswertung mit dem neuen `navigator.privateAttribution`-Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Erklärer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
