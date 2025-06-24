---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements erlaubt jetzt keine ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen mehr und ändert den Wert in `_blank`, wenn diese vorhanden sind. Dies verhindert hängende Markup-Injection-Angriffe, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- [Relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist nun standardmäßig aktiviert. Relative Farbsyntax ermöglicht es, einen Farbwert relativ zu einer Ausgangsfarbe zu erstellen und in einem anderen {{Glossary("Color_space", "Farbraum")}} mithilfe von [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt nun [alternativen Text](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der alternative Text wird dann dem Zugänglichkeits-Tree des Browsers zugänglich gemacht. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt jetzt den `<string>`-Syntax-Komponenten-Namen. (Siehe [Firefox-Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Masonry-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich aus der Spezifikation entfernt ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was erlaubt, die Größe von Buffern zu ändern, ohne einen neuen Buffer allokieren und Daten hinein kopieren zu müssen ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - Vergrößern von {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal zulässige Größe des Buffers wird mit dem Parameter `options.maxByteLength` des [`SharedArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer vergrößert werden kann und seine maximal zulässige Größe.
  - Resize von {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal zulässige Größe des Buffers wird mit dem Parameter `options.maxByteLength` des [`ArrayBuffer()`-Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer vergrößert werden kann und seine maximal zulässige Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält nun den MIME-Typ `image/svg+xml` ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird nun unterstützt, einschließlich des HTTP-Request- und -Response-Headers [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority), der es den Clients ermöglicht, einen Hinweis auf die erwartete relative Priorität für Ressourcen über eine Verbindung zu senden, sowie die HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden nun unterstützt und geben ein Objekt zurück, das die aktuell verwendeten Codecs für die Kodierung und Übertragung von Medien auf den Receiver- und Sender-Tracks beschreibt. ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden nun als bequeme Möglichkeit unterstützt, ein {{jsxref("Uint8Array")}} von einer [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird nun unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird nun unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Darstellung verschlüsselter Mediendaten für einen "hypothetischen" Schlüssel basierend auf spezifischen Richtlinienanforderungen wie der vom System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version erlauben würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung möglich ist, ohne eine Medien-Schlüsselsitzung erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird nun unterstützt, um die Codecs festzulegen, die ein WebRTC-Lokalpeer verwenden kann, um empfangene Daten in der bevorzugten Codec-Reihenfolge zu dekodieren. Webanwendungen können dies nutzen, um den Remote-Peer dazu zu veranlassen, einen bevorzugten Codec auszuwählen und um die Aushandlung bestimmter Codecs — einschließlich derer, die für die Retransmission, Redundanz und Fehlerkorrektur verwendet werden — zu deaktivieren. ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklarativem Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) sowie der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die Schnittstelle [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule) wird nun standardmäßig unterstützt und repräsentiert eine CSS-`@property`-At-Regel. Die Schnittstelle ermöglicht es, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Custom-Properties zu erhalten, die mit der `@property`-At-Regel definiert wurden ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird nun standardmäßig unterstützt. Sie ermöglicht es, [CSS-Custom-Properties](/de/docs/Web/CSS/--*) über JavaScript zu definieren, ähnlich wie bei der Verwendung der `@property`-At-Regel in CSS ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird nun von keinem Browser mehr unterstützt. ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte Fähigkeit "unhandledPromptBehavior", die entweder eine Zeichenkette (WebDriver klassisch) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie das Behandeln von "beforeunload"-Aufforderungen. ([Firefox-Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver-BiDi-Spezifikation in Einklang zu stehen. Dies ermöglicht die Identifizierung von Sitzungen, die für oder auf WebDriver BiDi aktualisiert wurden. ([Firefox-Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den Befehl `network.continueRequest` hinzugefügt, der es nun ermöglicht, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox-Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das Argument `userContext` im Befehl `permissions.setPermission` hinzugefügt, das es ermöglicht, eine Berechtigung zu einem bestimmten Benutzerkontext zu isolieren (implementiert als Container in Firefox). ([Firefox-Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler in `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite laden würde und nachfolgende Befehle zum Scheitern brachte. ([Firefox-Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted`-Ereignisse für Weiterleitungen ausgegeben werden. Die `responseCompleted` des ursprünglichen Antrags wird jetzt immer vor den Ereignissen für die Weiterleitung ausgegeben. ([Firefox-Bug 1879580](https://bugzil.la/1879580))
- Um mit dem aktuellen Firefox-Verhalten übereinzustimmen, wurde das Workaround eingeführt, Cookies, die mit dem Befehl "storage.setCookie" für die gleiche Domäne wie die geladene Seite im Zielkontext hinzugefügt werden, nicht zu partitionieren. ([Firefox-Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox-Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um mit der klassischen WebDriver-Spezifikation übereinzustimmen. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver klassisch erstellt wurden. ([Firefox-Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions-API in WebDriver Classic hinzugefügt. ([Firefox-Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzwerkanfrageregel-Sets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für ein statisches Regel-Set mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerkanfrageregel, die durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wird, wird jetzt geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} werden in {{WebExtAPIRef("declarativeNetRequest")}} eingeführt. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, was nun veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist nun `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war es standardmäßig `false` für SOCKS4 und SOCKS5 ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird nun für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanfragen asynchron zu behandeln, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (Zugriff wird vom Benutzer nach der Installation einer Erweiterung gewährt) auf die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardmäßigen Web-API-Ereignisse `overflow` und `underflow` wurden veraltet. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird nun bereitgestellt, damit Skripte in der Ausführungsumgebung einer Webseite laufen können. Dies wird durch die Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API bereitgestellt, der Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und der Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann nun Skripte und CSS in sandboxed-Seiten mit `about:blank`, `about:srcdoc` und `data:`-URLs einfügen. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} im [Firefox-Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} im [Firefox-Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} bereitgestellt.
- Inhaltsskripte laufen nun auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:` URLs ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der Manifest-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt nun `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:`, und `blob:`-Seiten injiziert werden können, wenn der Dokumentursprung durch die Verwendung von CSP oder iframe-sandboxing undurchsichtig ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Darüber hinaus können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, nur dann in `blob:`-Seiten ausgeführt werden, wenn `match_origin_as_fallback` `true` ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung hinzugefügt für das {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führten diese Erweiterungen zu einem Fehler bei der Installation. Dies stellt sicher, dass, wenn ein neuer `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen zurück zu dieser Veröffentlichung geladen werden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen mit einem nicht-persistenten Hintergrundskript erstellt werden, bleiben jetzt zuverlässiger über Erweiterungsneustarts hinweg erhalten. Zuvor gab es Fälle, in denen die Menüregistrierung bei Neustarts verschwand ([Firefox-Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 128 ausgeliefert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Seite zu experimentellen Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanforderungen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanforderungen und Bildanforderungen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er Unterstützung für den MIME-Typ `image/jxl` anzeigt. ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktiv des `Set-Cookie`-HTTP-Headers in partitionierten Speicher zu optieren. Wenn sie gesetzt sind, haben Cookies separaten Speicher für jede Top-Level-Site und können nur innerhalb derselben Top-Level-Site, auf der sie gesetzt wurden, und deren Subdomains gelesen werden. Dies blockiert ein Cross-Site-Tracking, während es dennoch legitime Verwendungen von Drittanbieter-Cookies ermöglicht, wie z.B. den Zustand eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Site zu erhalten. ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA-API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenzuordnung mithilfe des neuen Objekts `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über die PPA im [ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und im [vorgeschlagenen Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann für Websites über [Origin-Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen des Präferenzwerts auf `1` aktiviert werden. ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
