---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements verbietet jetzt ASCII-Zeilenumbrüche, Tabulatoren oder das `<`-Zeichen. Der Wert wird auf `_blank` geändert, wenn eines davon vorhanden ist. Dies verhindert hängende Markup-Injektionsangriffe, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- [Relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Die relative Farbsyntax ermöglicht es Ihnen, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen und in einem anderen {{Glossary("Color_space", "Farbraum")}} mithilfe von [Farbfunktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt jetzt [alternativen Text](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der alternative Text wird dann dem Barrierefreiheitstree der Browser zugänglich gemacht. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}} At-Regel unterstützt nun den `<string>` Syntaxkomponenten-Namen. (Siehe [Firefox-Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerk-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften wurden nur in Firefox implementiert und kürzlich aus der Spezifikation [entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizebare {{jsxref("ArrayBuffer")}} und wachsbare {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es ermöglicht, die Größe von Puffern zu ändern, ohne einen neuen Puffer zuzuweisen und Daten hinein zu kopieren ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Wachstum von {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal zulässige Größe des Puffers wird mithilfe des `options.maxByteLength`-Parameters an den [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer wachsen kann und seine maximal zulässige Größe.
  - Größenänderung von {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal zulässige Größe des Puffers wird mithilfe des `options.maxByteLength`-Parameters an den [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer resizebar ist und seine maximal zulässige Größe.

### HTTP

- Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält jetzt den MIME-Typ `image/svg+xml` ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority)-Anfrage- und Antwortheaders, der es Clients ermöglicht, auf die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen hinzuweisen, sowie die HTTP/2 und HTTP/3 `PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Kodierung und Übertragung von Medien auf den Empfänger- und Sendertracks verwendet werden ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt als komfortable Möglichkeit unterstützt, ein {{jsxref("Uint8Array")}} aus einem [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten aus einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten aus einem [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Präsentation von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel auf der Grundlage spezifizierter Richtlinienanforderungen wie der vom System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version ermöglichen würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne eine Medienschlüsselsitzung erstellen oder eine echte Lizenz abrufen zu müssen ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein WebRTC-Lokalpeer zum Dekodieren empfangener Daten in der bevorzugten Codec-Reihenfolge verwenden kann. Webanwendungen können dies verwenden, um den Remote-Peer dazu zu bewegen, einen bevorzugten Codec zu wählen und die Verhandlung spezifischer Codecs zu deaktivieren – einschließlich der für die Retransmission, Redundanz und Vorwärtsfehlerkorrektur verwendeten ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklarativem Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), sowie der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die Schnittstelle [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) wird jetzt standardmäßig unterstützt und repräsentiert eine CSS- [`@property`](/de/docs/Web/CSS/@property) At-Regel. Die Schnittstelle ermöglicht es Ihnen, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Benutzerdefinierten Eigenschaften abzurufen, die mithilfe der `@property` At-Regel definiert wurden ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es Ihnen, [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, was ähnlich der Verwendung der `@property` At-Regel in CSS ist ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Media, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardmäßige Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser mehr unterstützt. ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder ein String (WebDriver classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi wie die Handhabung von "beforeunload"-Eingabeaufforderungen ([Firefox-Bug 1884650](https://bugzil.la/1884650)).

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver BiDi-Spezifikation übereinzustimmen. Dies ermöglicht die Identifizierung von Sitzungen, die für oder auf WebDriver BiDi aktualisiert wurden ([Firefox-Bug 1898719](https://bugzil.la/1898719)).
- Unterstützung für mehrere Argumente für den Befehl `network.continueRequest` hinzugefügt, der jetzt das Ändern von Headern, Cookies, Methode und Körper einer Anfrage ermöglicht, bevor sie über das Netzwerk gesendet wird ([Firefox-Bug 1850680](https://bugzil.la/1850680)).
- Unterstützung für das Argument `userContext` im Befehl `permissions.setPermission` hinzugefügt, das es ermöglicht, eine Berechtigung für einen bestimmten Benutzerkontext zu isolieren (implementiert als Container in Firefox) ([Firefox-Bug 1894217](https://bugzil.la/1894217)).
- Ein Fehler im `browsingContext.navigate`-Befehl behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle zum Scheitern bringen würde ([Firefox-Bug 1878690](https://bugzil.la/1878690)).
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted`-Ereignisse für Umleitungen ausgegeben werden. Die `responseCompleted` des ursprünglichen Antrags wird jetzt immer vor den Ereignissen für die Umleitung ausgegeben ([Firefox-Bug 1879580](https://bugzil.la/1879580)).
- Um dem aktuellen Firefox-Verhalten zu entsprechen, haben wir einen Workaround eingeführt, um keine Cookies zu partitionieren, die mit dem Befehl "storage.setCookie" für die gleiche Domain wie die im Zielkontext geladene Seite hinzugefügt wurden ([Firefox-Bug 1898222](https://bugzil.la/1898222)).
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszulösen, wenn die angegebene Datei nicht existiert ([Firefox-Bug 1887644](https://bugzil.la/1887644)).

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver-Classic-Spezifikation übereinzustimmen. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver classic erstellt wurden ([Firefox-Bug 1884090](https://bugzil.la/1884090)).
- Unterstützung für die API "Permissions" in WebDriver Classic hinzugefügt ([Firefox-Bug 1524074](https://bugzil.la/1524074)).

## Änderungen für Add-On-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzanforderungsregelsets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für ein statisches Regelset mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzanforderungsregel, die durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert ist, wird jetzt geladen, wenn sie unverstandene Eigenschaften enthält, aber ansonsten gültig ist ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsbasierten Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, welches jetzt veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der Eigenschaft {{WebExtAPIRef("proxy.settings")}} `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war er bei SOCKS4 und SOCKS5 auf `false` eingestellt ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanfragen asynchron zu bearbeiten, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für Zugriff (Zugriff, der durch den Benutzer gewährt wird, nachdem eine Erweiterung installiert wurde) für die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardmäßigen Web-API-Ereignisse `overflow` und `underflow` wurden veraltet. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt für Skripte geboten, die in der Ausführungsumgebung der Webseite laufen. Dies wird durch die Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}} API bereitgestellt, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}} API und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}} API kann jetzt Skripte und CSS in sandboxed Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs einfügen. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox-Bug 1475831](https://bugzil.la/1475831) sowie für {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox-Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` für {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhaltsskripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:` URLs ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der Manifest-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was es ermöglicht, Skripte in `about:`-, `data:`- und `blob:`-Seiten einzufügen, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframesandbox undurchsichtig ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können Skripte, die mit dem `content_scripts` Manifest-Schlüssel registriert sind, jetzt nur in `blob:`-Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine unverstandene Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor traten bei der Installation dieser Erweiterungen Fehler auf. Dies stellt sicher, dass, wenn eine neue Eigenschaft `browser_specific_settings.gecko` hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu diesem Release geladen werden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht-persistentes Hintergrundskript verwenden, bleiben jetzt zuverlässiger über Erweiterung-Neustarts hinweg bestehen. Zuvor gab es Fälle, in denen die Menüregistrierung bei Neustarts verlorenging ([Firefox-Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Features

Diese Features werden neu in Firefox 128 geliefert, sind jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanforderungen:** `image.jxl.enabled`.

  Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standard- und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ anzuzeigen. ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) Direktive des `Set-Cookie` HTTP-Headers in den partitionierten Speicher aufzunehmen. Wenn gesetzt, haben Cookies für jede Top-Level-Site einen separaten Speicher und können nur innerhalb derselben Top-Level-Site gelesen werden, auf der sie gesetzt wurden, und deren Subdomains. Dies blockiert cross-site tracking, ermöglicht aber immer noch legitime Verwendungen von Drittanbieter-Cookies wie das Beibehalten des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg. ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für die Anzeigenerfassung mithilfe des neuen `navigator.privateAttribution`-Objekts mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und der [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
