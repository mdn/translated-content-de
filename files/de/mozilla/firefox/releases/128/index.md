---
title: Firefox 128 Versionshinweise für Entwickler
short-title: Firefox 128
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt jetzt keine ASCII-Neuzeilen, Tabs oder das `<`-Zeichen mehr und ändert den Wert auf `_blank`, wenn welche vorhanden sind. Dies verhindert Hänge-Markup-Injektionsangriffe, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors) ist jetzt standardmäßig aktiviert. Die relative Farbsyntax ermöglicht es Ihnen, einen Farbwert relativ zu einer Ursprungfarbe zu erstellen und erlaubt es, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mithilfe von [Farbfunktionen](/de/docs/Web/CSS/Guides/Colors#functions) zu ändern ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft unterstützt nun [alternativen Text](/de/docs/Web/CSS/Reference/Properties/content#alternative_text_string_counter) für Inhalte, die ein Bild enthalten. Der alternative Text wird dann im Barrierefreiheitsbaum der Browser sichtbar gemacht. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/Reference/At-rules/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>`-Syntax-Komponenten-Namen. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Eigenschaften `align-tracks` und `justify-tracks` des Mauerwerkslayouts wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden nun unterstützt, was es ermöglicht, die Größe von Buffern zu ändern, ohne einen neuen Buffer zuzuweisen und Daten hinein zu kopieren ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Wachsen Sie {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal zulässige Größe des Buffers wird mit dem Parameter `options.maxByteLength` für den [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer wachsen kann und seine maximal zulässige Größe an.
  - Passen Sie {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} an.
    Die maximal zulässige Größe des Buffers wird mit dem Parameter `options.maxByteLength` für den [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer veränderbar ist und seine maximal zulässige Größe an.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bilderanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) umfasst jetzt den MIME-Typ `image/svg+xml` ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Erweiterbare Priorisierungsschema für HTTP")}} wird jetzt unterstützt, einschließlich des HTTP [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority) Anfrage- und Antwort-Headers, der es Kunden ermöglicht, die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen anzudeuten, sowie der HTTP/2 und HTTP/3 `PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die derzeit verwendeten Codecs für die Kodierung und Übertragung von Medien auf den Empfänger- bzw. Senderstrecken beschreibt. ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt als bequemer Weg unterstützt, um von einer [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) ein {{jsxref("Uint8Array")}} zu erhalten. ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Präsentation von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf bestimmten Politikvorgaben wie der [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection) Version, die vom System unterstützt wird, zulassen würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne eine Medien-Schlüsselsitzung zu erstellen oder eine echte Lizenz abzurufen. ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer für das Dekodieren empfangener Daten verwenden kann, in der bevorzugten Codec-Reihenfolge. Webanwendungen können dies verwenden, um den Remote-Peer dazu zu bringen, einen bevorzugten Codec auszuwählen und die Aushandlung spezifischer Codecs zu deaktivieren — einschließlich derer, die für die Übertragung, Redundanz und Vorwärtsfehlerkorrektur verwendet werden. ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklarativen Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) sowie der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Das [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Interface wird jetzt standardmäßig unterstützt und repräsentiert eine CSS-[`@property`](/de/docs/Web/CSS/Reference/At-rules/@property)-At-Regel. Das Interface ermöglicht es Ihnen, die Werte von CSS-Custom-Properties abzurufen, die mit der `@property`-At-Regel definiert wurden, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue) ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es Ihnen, [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*) über JavaScript zu definieren, was ähnlich der Verwendung der `@property`-At-Regel in CSS ist ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser mehr unterstützt. ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder ein String (WebDriver classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie die Behandlung von "beforeunload"-Prompt. ([Firefox Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung wurde hinzugefügt, um sich an die WebDriver BiDi-Spezifikation anzupassen. Dies ermöglicht die Identifizierung von Sitzungen, die für oder auf WebDriver BiDi aktualisiert wurden. ([Firefox Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den `network.continueRequest`-Befehl wurde hinzugefügt, der jetzt Kopfzeilen, Cookies, Methode und Inhalt einer Anfrage ändern kann, bevor sie über das Netzwerk gesendet wird. ([Firefox Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das Argument `userContext` im `permissions.setPermission`-Befehl wurde hinzugefügt, das es ermöglicht, eine Erlaubnis auf einen spezifischen Benutzerkontext zu isolieren (in Firefox als Container implementiert). ([Firefox Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler in `browsingContext.navigate` wurde behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle zum Fehlschlagen bringen würde. ([Firefox Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge, in der `network.responseCompleted`-Ereignisse für Weiterleitungen ausgesendet werden, behoben. Das `responseCompleted` der ursprünglichen Anfrage wird jetzt immer vor den Ereignissen für die Weiterleitung ausgesendet. ([Firefox Bug 1879580](https://bugzil.la/1879580))
- Um sich dem aktuellen Firefox-Verhalten anzupassen, wurde der Workaround eingeführt, um keine Cookies zu partitionieren, die mit dem `storage.setCookie`-Befehl für dieselbe Domain hinzugefügt wurden, wie die Seite im Zielkontext geladen war. ([Firefox Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen Fehler `UnsupportedOperation` auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung wurde hinzugefügt, um sich an die WebDriver classic-Spezifikation anzupassen. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver classic erstellt wurden. ([Firefox Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions-API in WebDriver Classic wurde hinzugefügt. ([Firefox Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzanforderungs-Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren, und listet deaktivierte Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} auf ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzanforderungsregel, die durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wurde, wird jetzt geladen, wenn sie nicht erkannte Eigenschaften enthält, aber sonst gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und session-beschränkten Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, die jetzt veraltet sind ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false`, wenn SOCKS4 verwendet wird, und `true`, wenn SOCKS5 verwendet wird. Zuvor war er für SOCKS4 und SOCKS5 `false` ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanforderungen asynchron zu behandeln, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifest-Schlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für Zugriff (Zugriff, der vom Benutzer genehmigt wird, nachdem eine Erweiterung installiert wurde) für die APIs in der Erweiterung, die Host-Daten lesen oder ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web-API-Ereignisse `overflow` und `underflow` sind jetzt veraltet. Die Verwendung dieser Ereignisse sollte vor der Veröffentlichung von Firefox 131 aus den Erweiterungsdokumenten entfernt werden ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt bereitgestellt, um Skripte in der Ausführungsumgebung von Webseiten laufen zu lassen. Dies wird durch die Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, das Hinzufügen von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel bereitgestellt ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in isolierte Seiten mit `about:blank`, `about:srcdoc` und `data:`-URLs einfügen. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhalts-Skripte laufen jetzt auf [isolierten](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:`-URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der [Manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:` und `blob:`-Seiten injiziert werden können, wenn der Dokumentenursprung aufgrund der Verwendung des CSP oder des iframe-Sandboxes undurchsichtig ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, jetzt nur auf `blob:`-Seiten ausgeführt werden, wenn `match_origin_as_fallback` `true` ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führten diese Erweiterungen bei der Installation zu Fehlern. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu dieser Version geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht-persistentes Hintergrundskript verwenden, sind jetzt zuverlässiger über Erweiterungsneustarts hinweg verfügbar. Zuvor gab es Fälle, in denen die Menüregistrierung bei Neustarts verschwand ([Firefox Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 128 integriert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie nach der entsprechenden Präferenz auf der `about:config` Seite und setzen Sie sie auf `true`. Weitere solche Features finden Sie auf der [Seite für experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanforderungen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er Unterstützung für den `image/jxl` MIME-Typ angibt. ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", erlauben es Entwicklern, ein Cookie mit dem Direktive [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned) des `Set-Cookie` HTTP-Headers in partitionierten Speicher zu übergeben. Wenn es gesetzt wird, haben Cookies einen getrennten Speicher für jede Top-Level-Site und können nur innerhalb derselben Top-Level-Site gelesen werden, auf der sie gesetzt wurden, und deren Subdomains. Dies blockiert Cross-Site-Tracking, ermöglicht aber immer noch legitime Verwendungen von Drittanbieter-Cookies wie das Aufrechterhalten des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Seite hinweg. ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Datenschutzwahrende Attributions-API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA-API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Werbemaßnahmen mithilfe des neuen `navigator.privateAttribution`-Objekts mit `saveImpression()` und `measureConversion()` Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erklärungsdokument](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Präferenz auf `1` gesetzt wird. ([Firefox Bug 1900929](https://bugzil.la/1900929)).
