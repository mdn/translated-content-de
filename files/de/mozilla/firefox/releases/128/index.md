---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements verbietet nun ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen. Wenn solche Zeichen vorhanden sind, wird der Wert auf `_blank` geändert. Dies verhindert Angriffe durch nicht abgeschlossene `target`-Attribute, die zu schwebenden Markup-Injektionen führen könnten ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative-Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Die Relative-Farbsyntax ermöglicht es, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen und kann es ermöglichen, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mittels [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt jetzt [alternativen Text](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der alternative Text wird dann an den Barrierefreiheitsbaum des Browsers übermittelt. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>`-Syntaxkomponenten-Namen. (Siehe [Firefox-Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Anordnungs-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich aus der Spezifikation [entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und wachstumsfähige {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es ermöglicht, die Größe von Puffern zu ändern, ohne einen neuen Puffer zuzuordnen und Daten hineinzukopieren ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:

  - Wachsen des {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximale erlaubte Größe des Puffers wird mit dem `options.maxByteLength`-Parameter des [`SharedArrayBuffer()`]-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer wachsen kann und welche maximale Größe er haben darf.
  - Resize des {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal erlaubte Größe des Puffers wird mit dem `options.maxByteLength`-Parameter des [`ArrayBuffer()`]-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer geändert werden kann und welche maximale Größe er haben darf.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält nun den MIME-Typ `image/svg+xml` ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Erweiterbares Priorisierungsschema für HTTP")}} wird nun unterstützt, einschließlich des HTTP-Anfrage- und Antwort-Headers [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority), der es Clients ermöglicht, die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen anzugeben, sowie der HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, mit denen die Priorität nach dem Senden des Headers nachträglich geändert werden kann ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Kodierung und Übertragung von Medien auf den Empfangs- bzw. Senderstrecken verwendet werden ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt als bequeme Möglichkeit unterstützt, ein {{jsxref("Uint8Array")}} von einer [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Präsentation verschlüsselter Mediendaten für einen "hypothetischen" Schlüssel basierend auf angegebenen Richtlinienanforderungen wie der vom System unterstützten Version des [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection) zulässt.
  Dies bietet einer Anwendung einen einfachen Mechanismus zu wissen, ob die Wiedergabe in optimaler Auflösung zulässig ist, ohne eine Medien-Key-Sitzung zu erstellen oder eine echte Lizenz zu erhalten ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein WebRTC-lokaler Peer für das Dekodieren empfangener Daten verwenden kann, in der bevorzugten Codec-Reihenfolge. Webanwendungen können dies verwenden, um den Remotepeer zu veranlassen, einen bevorzugten Codec auszuwählen und die Aushandlung bestimmter Codecs zu deaktivieren — einschließlich derer, die für Wiederübertragung, Redundanz und Vorwärtsfehlerkorrektur verwendet werden ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Die Serialisierung von [deklarativem Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), sowie der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Das [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Interface wird jetzt standardmäßig unterstützt und repräsentiert eine CSS-At-Regel [`@property`](/de/docs/Web/CSS/@property). Das Interface ermöglicht es, die Werte zu erhalten, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), die mit der `@property`-At-Regel definiert sind ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht die Definition von [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) über JavaScript, ähnlich wie mit der `@property`-At-Regel in CSS ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser mehr unterstützt ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder ein String (WebDriver klassisch) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Funktionen für WebDriver BiDi, wie die Handhabung von "beforeunload"-Aufforderungen ([Firefox-Bug 1884650](https://bugzil.la/1884650)).

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung zur Angleichung an die Spezifikation von WebDriver BiDi hinzugefügt. Dies ermöglicht die Identifikation von Sitzungen, die für WebDriver BiDi erstellt oder aufgerüstet wurden ([Firefox-Bug 1898719](https://bugzil.la/1898719)).
- Unterstützung für mehrere Argumente für den `network.continueRequest`-Befehl hinzugefügt, der nun die Möglichkeit bietet, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird ([Firefox-Bug 1850680](https://bugzil.la/1850680)).
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, das es ermöglicht, eine Berechtigung für einen bestimmten Benutzerkontext zu isolieren (in Firefox als Container implementiert) ([Firefox-Bug 1894217](https://bugzil.la/1894217)).
- Ein Fehler im `browsingContext.navigate`-Befehl behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle fehlschlagen ließ ([Firefox-Bug 1878690](https://bugzil.la/1878690)).
- Die Reihenfolge, in der `network.responseCompleted`-Ereignisse für Weiterleitungen emittiert werden, wurde behoben. Das `responseCompleted` des ursprünglichen Antrags wird jetzt immer vor den Ereignissen für die Weiterleitung emittiert ([Firefox-Bug 1879580](https://bugzil.la/1879580)).
- Um dem aktuellen Firefox-Verhalten zu entsprechen, wurde die Umgehung eingeführt, Cookies, die mit dem `storage.setCookie`-Befehl für dieselbe Domain wie die im Zielkontext geladene Seite hinzugefügt wurden, nicht zu partitionieren ([Firefox-Bug 1898222](https://bugzil.la/1898222)).
- Der `input.setFiles`-Befehl wurde aktualisiert, sodass ein `UnsupportedOperation`-Fehler ausgelöst wird, wenn die angegebene Datei nicht existiert ([Firefox-Bug 1887644](https://bugzil.la/1887644)).

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung zur Angleichung an die WebDriver klassisch-Spezifikation hinzugefügt. Dies ermöglicht die Identifikation von Sitzungen, die für WebDriver klassisch erstellt wurden ([Firefox-Bug 1884090](https://bugzil.la/1884090)).
- Unterstützung für die Permissions API im WebDriver Classic hinzugefügt ([Firefox-Bug 1524074](https://bugzil.la/1524074)).

## Änderungen für Add-On-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzwerkanforderungsregelsets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für ein statisches Regelset mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerkanforderungsregel, die durch den [`declarative_net_request` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wird, wird jetzt geladen, wenn sie unerkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften stellen die maximale Anzahl an dynamischen und sitzungsgebundenen Regeln dar, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, das jetzt veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false` bei der Verwendung von SOCKS4 und `true` bei der Verwendung von SOCKS5. Zuvor war er auf `false` für SOCKS4 und SOCKS5 voreingestellt ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung hinzugefügt für {{WebExtAPIRef("webRequest.onAuthRequired")}}, um Authentifizierungsanfragen asynchron zu behandeln, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` spezifiziert wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für Zugriff (Zugriff, der dem Nutzer nach der Installation einer Erweiterung gewährt wird) für die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web-API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung jetzt für Skripte, die in der Ausführungsumgebung der Webseite laufen. Dies wird durch Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}} API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}} API und Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel bereitgestellt ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann nun Skripte und CSS in sandboxierte Seiten mit `about:blank`, `about:srcdoc` und `data:`-URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox-Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox-Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` in {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhalts-Skripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:`-URLs ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der [Manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:` und `blob:`-Seiten injiziert werden können, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Darüber hinaus können Skripte, die mit dem `content_scripts` Manifest-Schlüssel registriert sind, nun nur auf `blob:`-Seiten laufen, wenn `match_origin_as_fallback` auf `true` gesetzt ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung hinzugefügt für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine unerkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden nun mit einer Warnung geladen. Zuvor traten bei der Installation solcher Erweiterungen Fehler auf. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu dieser Veröffentlichung geladen werden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht-persistentes Hintergrundskript verwenden, bleiben nun bei Erweiterungsneustarts zuverlässiger bestehen. Zuvor gab es Fälle, in denen die Menüregistrierung bei Neustarts verschwand ([Firefox-Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 128 ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er Unterstützung für den MIME-Typ `image/jxl` anzeigt ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Status (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie in den partitionierten Speicher durch die [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie` HTTP-Headers einzubinden. Wenn gesetzt, haben Cookies einen separaten Speicher für jede Website auf oberster Ebene und können nur innerhalb derselben obersten Website gelesen werden, auf der sie gesetzt wurden, und ihren Subdomains. Dies blockiert cross-site Tracking, ermöglicht jedoch weiterhin legitime Verwendungen von Drittanbieter-Cookies, wie das Bewahren des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Website hinweg ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Tracking von Benutzern für die Werbezuordnung unter Verwendung des neuen `navigator.privateAttribution`-Objekts mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Webseiten über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
