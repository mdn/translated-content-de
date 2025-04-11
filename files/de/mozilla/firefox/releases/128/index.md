---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die sich auf Entwickler auswirken. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt nun keine ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen mehr. Falls diese enthalten sind, wird der Wert auf `_blank` geändert. Dies verhindert nicht geschlossene `target`-Attribut-Injektionen, die für Markup-Angriffe genutzt werden können ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- [Relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Diese Syntax ermöglicht es, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen und eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} zu ändern, indem [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) verwendet werden ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt jetzt [alternativen Text](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die Bilder enthalten. Der alternative Text wird dann dem Barrierefreiheitsbaum des Browsers zugänglich gemacht. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>`-Syntaxkomponenten-Namen. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernte Features

- Die Mauerlayout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizebare {{jsxref("ArrayBuffer")}} und erweiterbare {{jsxref("SharedArrayBuffer")}} werden nun unterstützt, was es erlaubt, die Größe von Buffern zu ändern, ohne einen neuen Buffer zuzuweisen und Daten hinein zu kopieren ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:

  - Vergrößern Sie {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal erlaubte Größe des Buffers wird mit dem Parameter `options.maxByteLength` im [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer erweiterbar ist und seine maximal erlaubte Größe.
  - Resize {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal erlaubte Größe des Buffers wird mit dem Parameter `options.maxByteLength` im [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer resizebar ist, und seine maximal erlaubte Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält nun den MIME-Typ `image/svg+xml` ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Erweiterbare Priorisierungsschema für HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Headers [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority), der es Clients ermöglicht, die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen anzudeuten, und der HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Kodierung und Übertragung von Medien auf den Empfänger- und Senderstrecken verwendet werden ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt als bequemer Weg, um ein {{jsxref("Uint8Array")}} aus einem [`Request`](/de/docs/Web/API/Request) und einem [`Response`](/de/docs/Web/API/Response) zu erhalten ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten aus einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt für die Rückgabe der Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu prüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Präsentation von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf den angegebenen Richtlinienanforderungen wie der vom System unterstützten Version des [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection) zulassen würde.
  Dadurch wird einer Anwendung ein einfacher Mechanismus zur Verfügung gestellt, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne eine Medienschlüsselsitzung erstellen oder eine reale Lizenz abrufen zu müssen ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer für die Dekodierung empfangener Daten verwenden kann, in seiner bevorzugten Codec-Reihenfolge. Webanwendungen können dies verwenden, um den entfernten Peer dazu zu veranlassen, einen bevorzugten Codec auszuwählen und die Aushandlung bestimmter Codecs zu deaktivieren — einschließlich derjenigen, die für Retransmission, Redundanz und Vorwärtsfehlerkorrektur verwendet werden ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung des [deklarativen Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) und zugehöriger Eigenschaften wie [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die Schnittstelle [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) wird jetzt standardmäßig unterstützt und repräsentiert eine CSS-`@property`-At-Regel. Die Schnittstelle ermöglicht es Ihnen, die Werte von mit der `@property`-At-Regel definierten CSS benutzerdefinierten Eigenschaften, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue) abzurufen ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es Ihnen, [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, was der Verwendung der `@property`-At-Regel in CSS ähnlich ist ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernte Features

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird nun von keinem Browser mehr unterstützt ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder eine Zeichenkette (WebDriver Classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie die Behandlung von "beforeunload"-Eingabeaufforderungen ([Firefox Bug 1884650](https://bugzil.la/1884650)).

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver-BiDi-Spezifikation abzustimmen. Dies ermöglicht es, Sitzungen zu identifizieren, die für oder auf WebDriver BiDi aktualisiert wurden ([Firefox Bug 1898719](https://bugzil.la/1898719)).
- Unterstützung für mehrere Argumente für den `network.continueRequest`-Befehl hinzugefügt, der nun erlaubt, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird ([Firefox Bug 1850680](https://bugzil.la/1850680)).
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, der es ermöglicht, eine Berechtigung einem spezifischen Benutzerkontext zu isolieren (in Firefox als Container implementiert) ([Firefox Bug 1894217](https://bugzil.la/1894217)).
- Ein Fehler im `browsingContext.navigate`-Befehl behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle fehlschlagen ließ ([Firefox Bug 1878690](https://bugzil.la/1878690)).
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted`-Ereignisse für Weiterleitungen ausgesendet werden. Das ursprüngliche `responseCompleted` der Anfrage wird nun immer vor den Ereignissen für die Weiterleitung ausgesendet ([Firefox Bug 1879580](https://bugzil.la/1879580)).
- Um das aktuelle Firefox-Verhalten abzustimmen, haben wir die Umgehungslösung eingeführt, um Cookies, die mit dem Befehl "storage.setCookie" für dieselbe Domain wie die im Zielkontext geladene Seite hinzugefügt wurden, nicht zu partitionieren ([Firefox Bug 1898222](https://bugzil.la/1898222)).
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszulösen, wenn die angegebene Datei nicht vorhanden ist ([Firefox Bug 1887644](https://bugzil.la/1887644)).

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver-Classic-Spezifikation abzustimmen. Dies ermöglicht es, Sitzungen zu identifizieren, die für WebDriver Classic erstellt wurden ([Firefox Bug 1884090](https://bugzil.la/1884090)).
- Unterstützung für die Permissions-API in WebDriver Classic hinzugefügt ([Firefox Bug 1524074](https://bugzil.la/1524074)).

## Änderungen für Add-on-Entwickler

- Hinzufügen der Möglichkeit, Regeln in statischen deklarativen Netzanfrage-Regelsets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren sowie deaktivierte Regeln für ein statisches Regelset mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzanfrage-Regel, die durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wird, wird nun geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, das jetzt veraltet ist ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}} Eigenschaft `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war es standardmäßig auf `false` für SOCKS4 und SOCKS5 eingestellt ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt bereitgestellt für {{WebExtAPIRef("webRequest.onAuthRequired")}}, um Authentifizierungsanforderungen asynchron zu behandeln, indem `"asyncBlocking"` im Parameter `extraInfoSpec` des `addListener` angegeben wird ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (durch den Benutzer nach der Installation einer Erweiterung gewährt) auf die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web-API-Ereignisse `overflow` und `underflow` wurden veraltet. Die Nutzung dieser Ereignisse sollte vor der Veröffentlichung von Firefox 131 aus den Erweiterungsdokumenten entfernt werden ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Es wird nun Unterstützung bereitgestellt für Skripte, die in der Ausführungsumgebung der Webseite laufen. Dies wird durch Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel bereitgestellt ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in isolierte Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox Bug 1853411](https://bugzil.la/1853411) implementiert, durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}}.
- Inhalts-Scripts laufen jetzt auf [isolierten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:`-URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der Manifest-Schlüssel [content_scripts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was es ermöglicht, Skripte in `about:`, `data:` und `blob:` Seiten zu injizieren, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder IFrame-Sandkasten undurchsichtig ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Darüber hinaus können Skripte, die mit dem Manifest-Schlüssel `content_scripts` registriert wurden, jetzt nur in `blob:` Seiten ausgeführt werden, wenn `match_origin_as_fallback` `true` ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führten diese Erweiterungen bei der Installation zu einem Fehler. Dies stellt sicher, dass, wenn ein neuer `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen ab dieser Veröffentlichung geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 128 verfügbar, jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Mehr solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er Unterstützung für den MIME-Typ `image/jxl` anzeigt ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Status (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie in einen partitionierten Speicher mithilfe der [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie`-HTTP-Headers aufzunehmen. Bei Aktivierung haben Cookies getrennte Speicher für jede Top-Level-Site und können nur innerhalb derselben Top-Level-Site, auf der sie gesetzt wurden, und deren Subdomains gelesen werden. Dies blockiert die verfolgung über verschiedene Seiten, während es weiterhin legitimen Verwendungsmöglichkeiten von Drittanbieter-Cookies ermöglicht, den Zustand eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg zu behalten ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Datenschutzbewahrende Attributions-API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zur Benutzerverfolgung für die Anzeigenattribution mit dem neuen Objekt `navigator.privateAttribution` und den Methoden `saveImpression()` und `measureConversion()`. Weitere Informationen zur PPA finden Sie [in der Erläuterung](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über [Origin-Trials](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden ([Firefox Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
