---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 6834ad69f8844894e0578ea06375e3e1e1e17e73
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Element/base#target)-Attribut des `<base>`-Elements erlaubt jetzt keine ASCII-Zeilenumbrüche, Tabulatoren oder das `<`-Zeichen mehr und ändert den Wert auf `_blank`, falls diese vorhanden sind. Dies verhindert Angriffe durch unvollständige `target`-Attribute, die ungültige Markup-Injektionen nutzen ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative color syntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Diese Syntax ermöglicht es, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen und in einem anderen {{Glossary("Color_space", "Farbraum")}} mit Hilfe von [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt jetzt [Alternativtext](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann in den Accessibility-Tree des Browsers aufgenommen. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}}-Regel unterstützt jetzt den `<string>`-Syntax-Komponenten-Namen. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerks-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, sodass die Größe der Puffer geändert werden kann, ohne einen neuen Puffer zuzuweisen und Daten hineinzukopieren ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:

  - {{jsxref("SharedArrayBuffer")}} mittels der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} vergrößern.
    Die maximal zulässige Größe des Puffers wird mit dem `options.maxByteLength`-Parameter im [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer vergrößert werden kann und seine maximal zulässige Größe.
  - {{jsxref("ArrayBuffer")}} mittels der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} anpassen.
    Die maximal zulässige Größe des Puffers wird mit dem `options.maxByteLength`-Parameter im [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer geändert werden kann und seine maximal zulässige Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Headers/Accept) in [Standard- und Bildanforderungen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) enthält jetzt den MIME-Typ `image/svg+xml` ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Headers [`Priority`](/de/docs/Web/HTTP/Headers/Priority), der es Clients ermöglicht, die erwartete relative Priorität von Ressourcen über eine Verbindung anzudeuten, sowie der HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es erlauben, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuellen Codecs beschreibt, die für die Kodierung und Übertragung von Medien auf den Empfänger- und Sendertracks verwendet werden. ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- Die Methoden [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) sind jetzt eine bequeme Möglichkeit, ein {{jsxref("Uint8Array")}} von einem [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Array von Bytes in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten eines [`Blob`](/de/docs/Web/API/Blob) als Array von Bytes in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Wiedergabe verschlüsselter Mediendaten für einen "hypothetischen" Schlüssel basierend auf den angegebenen Richtlinienanforderungen wie der vom System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://de.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version ermöglichen würde. Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in der optimalen Auflösung erlaubt wird, ohne eine Medienschlüsselsitzung zu erstellen oder eine reale Lizenz anzufordern. ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein WebRTC-Lokalpeers für das Decodieren empfangener Daten in seiner bevorzugten Codec-Reihenfolge verwenden kann. Webanwendungen können das nutzen, um den Remote-Peer dazu zu bringen, einen bevorzugten Codec zu wählen und die Aushandlung spezifischer Codecs zu deaktivieren — einschließlich solcher, die für Retransmission, Redundanz und Forward Error Correction verwendet werden. ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklarativem Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), und der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle ist jetzt standardmäßig unterstützt und repräsentiert eine CSS-`@property`-Regel. Die Schnittstelle erlaubt den Zugriff auf die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von in CSS definierten benutzerdefinierten Eigenschaften mithilfe der `@property`-Regel ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es, [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, ähnlich wie bei der Verwendung der `@property`-Regel in CSS ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser unterstützt. ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Funktion, die entweder ein String (WebDriver Classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Funktionen für WebDriver BiDi, wie das Handling von "beforeunload"-Prompts. ([Firefox Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für den "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um sich mit der WebDriver BiDi-Spezifikation abzustimmen. Dies ermöglicht, Sitzungen zu identifizieren, die für WebDriver BiDi erstellt oder aktualisiert wurden. ([Firefox Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den Befehl `network.continueRequest` hinzugefügt, der es jetzt ermöglicht, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im Befehl `permissions.setPermission` hinzugefügt, das es ermöglicht, eine Berechtigung auf einen spezifischen Benutzerkontext zu isolieren (implementiert als Container in Firefox). ([Firefox Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler im `browsingContext.navigate`-Befehl wurde behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle fehlschlagen ließ. ([Firefox Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge, in der `network.responseCompleted`-Ereignisse für Redirects ausgegeben werden, korrigiert. Das `responseCompleted` des ursprünglichen Antrags wird jetzt immer vor den Ereignissen für den Redirect ausgegeben. ([Firefox Bug 1879580](https://bugzil.la/1879580))
- Um das aktuelle Firefox-Verhalten anzugleichen, haben wir den Workaround eingeführt, Cookies, die mit dem Befehl "storage.setCookie" hinzugefügt wurden, für dieselbe Domain wie die im anvisierten Kontext geladene Seite nicht zu partitionieren. ([Firefox Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für den "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um sich mit der WebDriver Classic-Spezifikation abzustimmen. Dies ermöglicht, Sitzungen zu identifizieren, die für WebDriver Classic erstellt wurden. ([Firefox Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API in WebDriver Classic hinzugefügt. ([Firefox Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Möglichkeit zur Aktivierung und Deaktivierung von Regeln in statischen deklarativen Netzwerkanforderungsregel-Sets mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} hinzugefügt und das Auflisten deaktivierter Regeln für ein statisches Regelset mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerkanforderungsregel, die über den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wurde, wird jetzt geladen, auch wenn sie unerkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl dynamischer und sitzungsmäßig eingegrenzter Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, was jetzt veraltet ist ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false`, wenn SOCKS4 und `true`, wenn SOCKS5 verwendet wird. Zuvor wurde standardmäßig `false` für sowohl SOCKS4 als auch SOCKS5 verwendet ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung für {{WebExtAPIRef("webRequest.onAuthRequired")}} wird jetzt geboten, um Authentifizierungsanforderungen asynchron zu behandeln, indem `"asyncBlocking"` in der `addListener`-Parameter-`extraInfoSpec` angegeben wird ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifest-Schlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht zur Laufzeit Anfragen für den Zugriff (Zugriff, der vom Benutzer gewährt wurde, nachdem eine Erweiterung installiert wurde) für die APIs in der Erweiterung, die auf Host-Daten lesen oder diese ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web-API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung für Skripte, die in der Ausführungsumgebung der Webseite laufen, wird jetzt geboten. Dies geschieht durch Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, die Ergänzung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sandboxed Pages mit `about:blank`, `about:srcdoc` und `data:`-URLs einfügen. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}} und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Content-Skripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) `http`-, `https`- und `file:`-URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der [Manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:` und `blob:`-Seiten injiziert werden können, wenn der Dokumentenursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können mit dem `content_scripts`-Manifest-Schlüssel registrierte Skripte jetzt nur in `blob:`-Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führte dies zu einem Fehler bei der Installation. Dies stellt sicher, dass wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen bis zu dieser Veröffentlichung geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 128 ausgeliefert worden, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **MIME-Type `image/jxl` im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Headers/Accept) in [Standard- und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um Unterstützung für den MIME-Type `image/jxl` anzuzeigen. ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitionierten Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", erlauben es Entwicklern, ein Cookie durch die [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie`-HTTP-Headers in den partitionierten Speicher aufzunehmen. Wenn gesetzt, haben Cookies separate Speicher für jede Top-Level-Website und können nur innerhalb derselben Top-Level-Website, auf der sie gesetzt wurden, und ihren Subdomains gelesen werden. Dies blockiert das Tracking über Websites hinweg, während gleichzeitig legitime Verwendungen von Drittanbieter-Cookies wie die Beibehaltung der Zustände eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Website ermöglicht werden. ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA-API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Nutzer-Tracking für Werbung durch das neue `navigator.privateAttribution`-Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über die PPA [im Erläuterungsdokument](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
