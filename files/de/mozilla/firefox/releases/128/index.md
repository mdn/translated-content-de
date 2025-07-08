---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>`-Elements verbietet jetzt das Vorhandensein von ASCII-Zeilenumbrüchen, Tabulatoren oder dem `<`-Zeichen. Wenn eines dieser Zeichen vorhanden ist, wird der Wert auf `_blank` geändert. Dies verhindert Angriffe durch hängende Markup-Injection, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Sie ermöglicht es, einen Farbwert relativ zu einer Ursprungsfarbe zu erzeugen und erlaubt es, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mit [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt nun [alternativen Text](/de/docs/Web/CSS/content#alternative_text_string_counter) für Inhalte, die ein Bild enthalten. Der alternative Text wird dann im Zugänglichkeitsbaum des Browsers angezeigt. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}}-At-Regel unterstützt nun die `<string>`-Syntaxkomponenten-Namen. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerwerks-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation gestrichen](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} and growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es ermöglicht, die Größe von Puffern zu ändern, ohne einen neuen Puffer anlegen und Daten kopieren zu müssen ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:
  - {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}} vergrößern.
    Die maximale zulässige Größe des Puffers wird mit dem Parameter `options.maxByteLength` beim [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer wachsen kann und wie groß er maximal sein darf.
  - {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}} ändern.
    Die maximale zulässige Größe des Puffers wird mit dem Parameter `options.maxByteLength` beim [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer geändert werden kann und wie groß er maximal sein darf.

### HTTP

- Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) schließt jetzt den MIME-Typ `image/svg+xml` ein ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority)-Request- und Response-Headers, der es Clients ermöglicht, einen Hinweis auf die erwartete relative Priorität von über eine Verbindung gesendeten Ressourcen zu geben, sowie die HTTP/2 und HTTP/3 `PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuell verwendeten Codecs für das Codieren und Übertragen von Medien auf den Empfänger- und Sender-Spuren beschreibt. ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt, um auf einfache Weise eine {{jsxref("Uint8Array")}} von einem [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten von einem [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das für das Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Wiedergabe von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel basierend auf spezifischen Richtlinienanforderungen, wie der vom System unterstützten Version des [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection), zulassen würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt sein wird, ohne eine Mediaschlüssel-Session erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer für das Dekodieren empfangener Daten verwenden kann, in der bevorzugten Codec-Reihenfolge. Webanwendungen können dies verwenden, um den entferntem Peer zu veranlassen, einen bevorzugten Codec zu wählen, und um die Aushandlung spezifischer Codecs zu deaktivieren — einschließlich derjenigen, die für die Rückübertragung, Redundanz und Fehlerkorrektur verwendet werden. ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklariertem Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), sowie assoziierte Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle wird jetzt standardmäßig unterstützt und repräsentiert eine CSS[`@property`](/de/docs/Web/CSS/@property)-At-Regel. Die Schnittstelle ermöglicht es, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits), und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS benutzerdefinierten Eigenschaften abzurufen, die mit der `@property`-At-Regel definiert wurden ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es, [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--) über JavaScript zu definieren, was der Verwendung der `@property`-At-Regel in CSS ähnelt ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht standardmäßige Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird jetzt von keinem Browser mehr unterstützt. ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder ein String (WebDriver classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Möglichkeiten für WebDriver BiDi, wie das Handling von "beforeunload"-Eingabeaufforderungen. ([Firefox Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Session hinzugefügt, um mit der WebDriver BiDi-Spezifikation übereinzustimmen. Dies ermöglicht die Identifizierung von Sitzungen, die für WebDriver BiDi erstellt oder dafür hochgestuft wurden. ([Firefox Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente des `network.continueRequest`-Befehls hinzugefügt, der es jetzt ermöglicht, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, der es ermöglicht, eine Berechtigung auf einen spezifischen Benutzerkontext zu isolieren (in Firefox als Container implementiert). ([Firefox Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler wurde im `browsingContext.navigate`-Befehl behoben, bei dem ein Navigationsfehler eine Fehlerseite geladen hat und dazu führte, dass nachfolgende Befehle fehlschlugen. ([Firefox Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge geändert, in der `network.responseCompleted`-Ereignisse für Umleitungen ausgestrahlt werden. Das `responseCompleted` des ursprünglichen Antrags wird jetzt immer vor den Ereignissen für die Umleitung gesendet. ([Firefox Bug 1879580](https://bugzil.la/1879580))
- Um mit dem aktuellen Verhalten von Firefox übereinzustimmen, haben wir die Umgehung eingeführt, Cookies nicht zu partitionieren, die mit dem Befehl "storage.setCookie" für dieselbe Domain hinzugefügt werden wie die aufgerufene Seite im Zielkontext. ([Firefox Bug 1898222](https://bugzil.la/1898222))
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszulösen, wenn die angegebene Datei nicht existiert. ([Firefox Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Session hinzugefügt, um mit der WebDriver-klassischen Spezifikation übereinzustimmen. Dies ermöglicht die Identifikation von Sitzungen, die für WebDriver Classic erstellt wurden. ([Firefox Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API in WebDriver Classic hinzugefügt. ([Firefox Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on Entwickler

- Ermöglicht das Aktivieren und Deaktivieren von Regeln in statischen deklarativen Netzwerkanfrage-Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} und das Auflisten deaktivierter Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerkanfrage-Regel, definiert durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request), wird jetzt geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsgebundenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, was jetzt veraltet ist ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Zuvor war der Standardwert für SOCKS4 und SOCKS5 `false` ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanforderungen asynchron zu bearbeiten, durch Angabe von `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der Manifest-Schlüssel [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (vom Benutzer beim Installieren einer Erweiterung gewährter Zugriff) für die APIs in der Erweiterung, die Host-Daten lesen oder ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardmäßigen Web-API-Ereignisse `overflow` und `underflow` wurden veraltet. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt bereitgestellt, um Skripte in der Ausführungsumgebung einer Webseite auszuführen. Dies wird durch die Unterstützung von `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API bereitgestellt, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und die Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in sandboxed Pages mit `about:blank`, `about:srcdoc` und `data:`-URLs injizieren. Dies wurde in [Firefox Bug 1475831](https://bugzil.la/1475831) für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} implementiert und in [Firefox Bug 1853411](https://bugzil.la/1853411) für {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}}.
- Inhaltsskripte laufen jetzt auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:`-URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der [Manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was es ermöglicht, Skripte in `about:`, `data:`, und `blob:`-Seiten zu injizieren, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe sandbox undurchsichtig ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Zudem können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, nur in `blob:`-Seiten laufen, wenn `match_origin_as_fallback` auf `true` gesetzt ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung hinzugefügt für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor gab es bei der Installation dieser Erweiterungen einen Fehler. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Versionen von Firefox bis zu dieser Veröffentlichung geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt wurden, die ein nicht-persistentes Hintergrundskript verwenden, bleiben jetzt bei Erweiterungs-Neustarts zuverlässiger bestehen. Zuvor gab es Fälle, in denen die Menü-Registrierung bei Neustarts verschwand ([Firefox Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 128 eingeführt, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um Unterstützung für den `image/jxl` MIME-Typ zu signalisieren. ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", erlauben es Entwicklern, ein Cookie mit dem [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie` HTTP-Headers in die partitionierte Speicherung aufzunehmen. Wenn gesetzt, haben Cookies getrennte Speicher für jede Top-Level-Seite und können nur innerhalb der gleichen Top-Level-Seite gelesen werden, auf der sie gesetzt wurden, und ihren Subdomains. Dies blockiert das seitenübergreifende Tracking, während dennoch legitime Verwendungen von Drittanbieter-Cookies wie die Persistenz des Zustands von eingebetteten Karten oder Chat-Widgets über verschiedene Subdomains einer Seite ermöglicht werden. ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzertracking für die Werbeerfolgsbewertung mit dem neuen `navigator.privateAttribution`-Objekt mit den `saveImpression()` und `measureConversion()`-Methoden. Lesen Sie mehr über PPA [im ursprünglichen Erklärer](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) und die [vorgeschlagene Spezifikation](https://w3c.github.io/ppa/). Dieses Experiment kann über [origin trial](https://wiki.mozilla.org/Origin_Trials) für Webseiten oder im Browser durch Setzen der Einstellung auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
