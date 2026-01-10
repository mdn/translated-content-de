---
title: Firefox 128 Versionshinweise für Entwickler
short-title: Firefox 128
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 5ebca2edd6095fb3f61d442ed3146fa37fffbf7d
---

Dieser Artikel gibt Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt jetzt keine ASCII-Zeilenumbrüche, Tabulatoren oder das `<`-Zeichen mehr und ändert den Wert zu `_blank`, wenn eines davon vorhanden ist. Dies verhindert Angriffe durch hängendes Markup, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) ist jetzt standardmäßig aktiviert. Die relative Farbsyntax ermöglicht es Ihnen, einen Farbwert relativ zu einer Ausgangsfarbe zu erstellen und ermöglicht es, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mithilfe von [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) zu ändern ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft unterstützt jetzt [alternativen Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter_attr) für Inhalte, die ein Bild enthalten. Der alternative Text wird dann an den Barrierefreiheitsbaum des Browsers weitergegeben. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/Reference/At-rules/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>`-Syntaxkomponenten-Namen. (Siehe [Firefox-Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerkslayout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften wurden nur in Firefox implementiert und kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Die größenveränderbaren {{jsxref("ArrayBuffer")}} und wachsenden {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es ermöglicht, die Größe von Puffern zu ändern, ohne einen neuen Puffer zuzuweisen und Daten hineinzukopieren ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Vergrößern Sie {{jsxref("SharedArrayBuffer")}} mithilfe der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximale erlaubte Größe des Puffers wird mit dem Parameter `options.maxByteLength` des [`SharedArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer wachsen kann und seine maximal erlaubte Größe an.
  - Passen Sie die Größe von {{jsxref("ArrayBuffer")}} mithilfe der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} an.
    Die maximale erlaubte Größe des Puffers wird mit dem Parameter `options.maxByteLength` des [`ArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer geändert werden kann und seine maximal erlaubte Größe an.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält jetzt den MIME-Typ `image/svg+xml` ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Request- und Response-Headers [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority), das es Clients ermöglicht, die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen zu signalisieren, sowie die HTTP/2 und HTTP/3-`PRIORITY_UPDATE`-Frames, die eine nachträgliche Änderung der Priorität ermöglichen, nachdem der Header gesendet wurde ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuell für die Codierung und Übertragung von Medien auf den Empfänger- und Sender-Tracks verwendeten Codecs beschreibt. ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt, um bequem ein {{jsxref("Uint8Array")}} von einer [`Request`](/de/docs/Web/API/Request) und einer [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten aus einer Push-Nachricht als Array von Bytes in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten von einem [`Blob`](/de/docs/Web/API/Blob) als Array von Bytes in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu prüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschützten Inhalten verwendet wird, die Präsentation von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf festgelegten Richtlinienanforderungen wie der vom System unterstützten Version des [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection) zulassen würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt sein wird, ohne eine Medien-Schlüsselsitzung erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein WebRTC-Lokalkontakt zum Dekodieren empfangener Daten verwenden kann, in seiner bevorzugten Codec-Reihenfolge. Webanwendungen können dies verwenden, um den entfernten Partner zu veranlassen, einen bevorzugten Codec auszuwählen und die Aushandlung bestimmter Codecs zu deaktivieren — einschließlich derjenigen, die für Übertragung, Redundanz und Fehlerkorrektur verwendet werden. ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung des [deklarativen Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), und zugehöriger Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle wird jetzt standardmäßig unterstützt und repräsentiert eine CSS-[`@property`](/de/docs/Web/CSS/Reference/At-rules/@property)-At-Regel. Die Schnittstelle ermöglicht es, die Werte zu erhalten, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von in der `@property`-At-Regel definierten CSS-Benutzereigenschaften ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie erlaubt es, [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) über JavaScript zu definieren, was dem Verwenden der `@property`-At-Regel in CSS ähnelt ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Media, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird von keinem Browser mehr unterstützt. ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder eine Zeichenkette (WebDriver klassisch) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie die Behandlung von "beforeunload"-Eingabeaufforderungen. ([Firefox-Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um sich an die WebDriver BiDi-Spezifikation anzupassen. Dies ermöglicht es, Sitzungen zu identifizieren, die für WebDriver BiDi erstellt wurden oder auf WebDriver BiDi aktualisiert wurden. ([Firefox-Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den Befehl `network.continueRequest` hinzugefügt, der jetzt das Modifizieren von Headern, Cookies, Methode und Körper einer Anfrage ermöglicht, bevor sie über das Netzwerk gesendet wird. ([Firefox-Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im Befehl `permissions.setPermission` hinzugefügt, das es ermöglicht, eine Erlaubnis zu isolieren, damit sie auf einen bestimmten Benutzerkontext angewendet wird (in Firefox als Container implementiert). ([Firefox-Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler in `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite laden würde und nachfolgende Befehle fehlschlagen ließ. ([Firefox-Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge behoben, in der `network.responseCompleted`-Ereignisse für Umleitungen ausgegeben werden. Die `responseCompleted` des ursprünglichen Antrags wird nun immer vor den Ereignissen für die Umleitung ausgegeben. ([Firefox-Bug 1879580](https://bugzil.la/1879580))
- Um sich an das aktuelle Firefox-Verhalten anzupassen, haben wir die Umgehungslösung eingeführt, um keine Cookies zu partitionieren, die mit dem Befehl "storage.setCookie" für dieselbe Domain hinzugefügt werden wie die aufgeladene Seite im zielgerichteten Kontext. ([Firefox-Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation` Fehler auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox-Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung der "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um sich an die WebDriver-Klassik-Spezifikation anzupassen. Dies ermöglicht es, Sitzungen zu identifizieren, die für WebDriver Klassik erstellt wurden. ([Firefox-Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions-API in WebDriver Klassik hinzugefügt. ([Firefox-Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen Deklarativen-Netzwerkanforderungsregelsets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für ein statisches Regelset mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerkanforderungsregel, die durch den [`declarative_net_request` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wird, wird jetzt geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, die jetzt veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war er sowohl für SOCKS4 als auch für SOCKS5 auf `false` eingestellt ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanfragen asynchron zu behandeln, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) Manifest-Schlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (Zugriff, der von der Benutzerin oder dem Benutzer nach der Installation einer Erweiterung gewährt wird) für die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web-API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor der Firefox 131 veröffentlicht wird ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt für Skripte bereitgestellt, um in der Ausführungsumgebung der Webseite zu laufen. Dies wird durch die Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und die Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel erreicht ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sandboxed Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox-Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox-Bug 1853411](https://bugzil.la/1853411) implementiert, durch die Einführung von `matchOriginAsFallback` in {{WebExtAPIRef("scripting.RegisteredContentScript")}}.
- Inhaltsskripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:` URLs ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der Manifests-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was es ermöglicht, Skripte in `about:`, `data:` und `blob:` Seiten zu injizieren, wenn der Dokumenten-Ursprung aufgrund der Verwendung von CSP oder dem IFrame-Sandboxing undurchsichtig ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können mit dem Manifests-Schlüssel `content_scripts` registrierte Skripten jetzt nur in `blob:` Seiten ausgeführt werden, wenn `match_origin_as_fallback` auf `true` gesetzt ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führten diese Erweiterungen zu einem Fehler bei der Installation. Dies stellt sicher, dass wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu diesem Release geladen werden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht-persistentes Hintergrundskript verwenden, bleiben jetzt zuverlässiger über Erweiterungs-Neustarts hinweg bestehen. Zuvor gab es Fälle, in denen die Menüregistrierung bei Neustarts verschwand ([Firefox-Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 128 verfügbar, jedoch standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie diese auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er die Unterstützung für den MIME-Typ `image/jxl` anzeigt. ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies Having Independent Partitioned State (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie über die [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie` HTTP-Headers in einen partitionierten Speicher einzubinden. Wenn eingestellt, haben Cookies für jede Top-Level-Site einen getrennten Speicher und können nur innerhalb derselben Top-Level-Site gelesen werden, auf der sie gesetzt wurden, und deren Subdomains. Dies blockiert das Tracking über Websites hinweg, während dennoch legitime Verwendungen von Drittanbieter-Cookies ermöglicht werden, wie die Aufrechterhaltung des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg. ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Nutzer-Tracking für die Werbezuordnung, indem das neue `navigator.privateAttribution`-Objekt mit den Methoden `saveImpression()` und `measureConversion()` verwendet wird. Lesen Sie mehr über PPA [im Original-Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Herkunftstests](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).
