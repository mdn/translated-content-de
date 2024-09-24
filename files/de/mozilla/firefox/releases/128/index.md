---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Element/base#target)-Attribut des `<base>`-Elements erlaubt jetzt nicht mehr ASCII-Zeilenumbrüche, Tabs oder das `<`-Zeichen. Der Wert wird zu `_blank` geändert, wenn solche Zeichen vorhanden sind. Dies verhindert unsichere Markup-Injektionen, die ein nicht geschlossenes `target`-Attribut verwenden ([Firefox-Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relativfarbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Relativfarbsyntax ermöglicht es Ihnen, einen Farbwert relativ zu einer Ursprungsfarbe zu erstellen und eine Farbe in einem anderen [Farbraum](/de/docs/Glossary/Color_space) mithilfe von [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox-Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt jetzt [Alternativtext](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann dem Barrierefreiheitsbaum des Browsers zugänglich gemacht. (Siehe [Firefox-Bug 1281158](https://bugzil.la/1281158) und [Firefox-Bug 1896047](https://bugzil.la/1896047)).

#### Entfernungen

- Die Mauerwerk-Layout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich aus der Spezifikation [entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox-Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizeable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was die Größe von Puffern ohne die Notwendigkeit eines neuen Buffers und das Kopieren von Daten erlaubt ([Firefox-Bug 1884150](https://bugzil.la/1884150)).
  Die entsprechenden Methoden und Eigenschaften sind:

  - Vergrößern Sie {{jsxref("SharedArrayBuffer")}} mit der {{jsxref("SharedArrayBuffer.prototype.grow()")}}-Methode.
    Die maximale erlaubte Größe des Buffers wird durch den Parameter `options.maxByteLength` an den [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Buffer vergrößerbar ist, und seine maximal erlaubte Größe.
  - Passen Sie {{jsxref("ArrayBuffer")}} mit der {{jsxref("ArrayBuffer.prototype.resize()")}}-Methode an.
    Die maximale erlaubte Größe des Buffers wird durch den Parameter `options.maxByteLength` an den [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Buffer anpassbar ist, und seine maximal erlaubte Größe.

### HTTP

- Der HTTP [`Accept`](/de/docs/Web/HTTP/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) enthält jetzt den `image/svg+xml` MIME-Typ ([Firefox-Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP [`Priority`](/de/docs/Web/HTTP/Headers/Priority)-Anfrage- und Antwort-Headers, der es Clients ermöglicht, auf die erwartete relative Priorität von über eine Verbindung gesendeten Ressourcen hinzuweisen. Außerdem werden die `PRIORITY_UPDATE`-Frames für HTTP/2 und HTTP/3 unterstützt, die nachträglich die Priorität ändern können, nachdem der Header gesendet wurde ([Firefox-Bug 1865040](https://bugzil.la/1865040)).

### APIs

- {{domxref('RTCRtpReceiver.getParameters()')}} und {{domxref('RTCRtpSender.getParameters()')}} werden jetzt unterstützt und geben ein Objekt zurück, das die derzeit verwendeten Codecs für die Kodierung und Übertragung von Medien auf den Empfangs- und Sendespuren beschreibt ([Firefox-Bug 1534687](https://bugzil.la/1534687)).
- {{domxref("Request.bytes()")}} und {{domxref("Response.bytes()")}} werden jetzt als bequeme Möglichkeit unterstützt, um ein {{jsxref("Uint8Array")}} von einer {{domxref("Request")}} und {{domxref("Response")}} zu erhalten ([Firefox-Bug 1896475](https://bugzil.la/1896475)).
- {{domxref("PushMessageData.bytes()")}} wird jetzt unterstützt, um die Daten einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben ([Firefox-Bug 1897871](https://bugzil.la/1897871)).
- {{domxref('Blob.bytes()')}} wird unterstützt, um die Daten von einem {{domxref('Blob')}} als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben ([Firefox-Bug 1896509](https://bugzil.la/1896509)).
- {{domxref('MediaKeys.getStatusForPolicy()')}} wird jetzt unterstützt, um zu prüfen, ob das verwendete CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Wiedergabe von verschlüsselten Mediendaten für einen "hypothetischen" Schlüssel auf Basis der angegebenen Richtlinienanforderungen wie der vom System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version erlauben würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne dass eine Mediensitzung erstellt oder eine echte Lizenz abgerufen werden muss ([Firefox-Bug 1878714](https://bugzil.la/1878714)).
- {{domxref('RTCRtpTransceiver.setCodecPreferences()')}} wird jetzt unterstützt, um die Codecs festzulegen, die ein WebRTC-Lokales Peer zum Dekodieren empfangener Daten in seiner bevorzugten Codec-Reihenfolge verwenden kann. Webanwendungen können dies verwenden, um den Remote-Peer zu veranlassen, einen bevorzugten Codec auszuwählen, und um die Aushandlung spezifischer Codecs zu deaktivieren — einschließlich derer, die für Übertragungen, Redundanz und Vorwärtsfehlerkorrektur verwendet werden ([Firefox-Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklariertem Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden {{domxref('ShadowRoot.getHTML()')}} und {{domxref('Element.getHTML()')}}, und zugehöriger Eigenschaften {{domxref('ShadowRoot.serializable')}} und {{domxref('HTMLTemplateElement.shadowRootSerializable')}}.
- Die [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle wird jetzt standardmäßig unterstützt und repräsentiert eine CSS [`@property`](/de/docs/Web/CSS/@property)-At-Regel. Die Schnittstelle ermöglicht es Ihnen, die Werte einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue) von CSS-Benutzerdefinierten Eigenschaften zu erhalten, die mit der `@property`-Regel definiert sind ([Firefox-Bug 1864818](https://bugzil.la/1864818)).
- Die [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)-Methode wird jetzt standardmäßig unterstützt. Sie ermöglicht es Ihnen, [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, ähnlich wie mit der `@property`-Regel in CSS ([Firefox-Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernungen

- Die nicht-standardisierte {{domxref('HTMLMediaElement.seekToNextFrame()')}}-Methode wurde entfernt und wird jetzt von keinem Browser mehr unterstützt ([Firefox-Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Wir unterstützen jetzt die erweiterte "unhandledPromptBehavior"-Fähigkeit, die entweder ein String (WebDriver classic) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie das Behandeln von "beforeunload"-Eingabeaufforderungen ([Firefox-Bug 1884650](https://bugzil.la/1884650)).

#### WebDriver BiDi

- Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um den Spezifikationen von WebDriver BiDi zu entsprechen. Dies ermöglicht es, Sitzungen zu identifizieren, die für WebDriver BiDi erstellt oder aufgerüstet wurden ([Firefox-Bug 1898719](https://bugzil.la/1898719)).
- Unterstützung für mehrere Argumente für den Befehl `network.continueRequest` hinzugefügt, der es jetzt ermöglicht, Header, Cookies, Methode und Body einer Anfrage vor dem Übermitteln über das Netzwerk zu ändern ([Firefox-Bug 1850680](https://bugzil.la/1850680)).
- Unterstützung für das `userContext`-Argument im Befehl `permissions.setPermission` hinzugefügt, das es erlaubt, eine Berechtigung auf einen bestimmten Benutzerkontext zu isolieren (in Firefox als Container implementiert) ([Firefox-Bug 1894217](https://bugzil.la/1894217)).
- Ein Fehler im `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle zum Scheitern bringen würde ([Firefox-Bug 1878690](https://bugzil.la/1878690)).
- Die Reihenfolge der Emittierung der `network.responseCompleted`-Ereignisse für Weiterleitungen wurde korrigiert. Die ursprüngliche Anfrage `responseCompleted` wird jetzt immer vor den Ereignissen für die Weiterleitung ausgegeben ([Firefox-Bug 1879580](https://bugzil.la/1879580)).
- Um das aktuelle Firefox-Verhalten anzugleichen, führten wir das Workaround ein, Cookies nicht zu partitionieren, die mit dem Befehl "storage.setCookie" für dieselbe Domain hinzugefügt werden wie die Seite, die im Zielkontext geladen ist ([Firefox-Bug 1898222](https://bugzil.la/1898222)).
- Der Befehl `input.setFiles` wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszugeben, wenn die angegebene Datei nicht existiert ([Firefox-Bug 1887644](https://bugzil.la/1887644)).

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um den Spezifikationen des WebDriver classic zu entsprechen. Dies ermöglicht es, Sitzungen zu identifizieren, die für WebDriver classic erstellt wurden ([Firefox-Bug 1884090](https://bugzil.la/1884090)).
- Unterstützung für die Permissions API in WebDriver Classic hinzugefügt ([Firefox-Bug 1524074](https://bugzil.la/1524074)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzwerkanforderungsregelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren sowie deaktivierte Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox-Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerkanforderungsregel, die durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert ist, wird jetzt geladen, auch wenn sie nicht erkannte Eigenschaften, aber ansonsten gültig ist ([Firefox-Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, die jetzt veraltet ist ([Firefox-Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist jetzt `false` bei der Verwendung von SOCKS4 und `true` bei der Verwendung von SOCKS5. Zuvor war es für SOCKS4 und SOCKS5 standardmäßig `false` ([Firefox-Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanfragen asynchron zu bearbeiten, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox-Bug 1889897](https://bugzil.la/1889897)).
- Der [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifest-Schlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (Zugriff, der dem Benutzer nach der Installation einer Erweiterung gewährt wird) für die APIs in der Erweiterung, die Host-Daten lesen oder ändern ([Firefox-Bug 1766026](https://bugzil.la/1766026)).
- Die nicht-standardisierten Web-API-Ereignisse `overflow` und `underflow` sind veraltet. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox-Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt bereitgestellt, um Skripte in der Ausführungsumgebung von Webseiten auszuführen. Dies wird durch Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API bereitgestellt, durch die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und die Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel ([Firefox-Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in Sandbox-Seiten mit `about:blank`, `about:srcdoc` und `data:`-URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox-Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox-Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhalts-Skripte werden jetzt auf [sandboxed](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) `http`, `https` und `file:`-URLs ausgeführt ([Firefox-Bug 1411641](https://bugzil.la/1411641)).
- Der [manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was es ermöglicht, Skripte in `about:`, `data:` und `blob:`-Seiten zu injizieren, wenn der Dokumentenursprung aufgrund der Verwendung von CSP oder iframe sandbox undurchsichtig ist ([Firefox-Bug 1475831](https://bugzil.la/1475831) und [Firefox-Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, jetzt nur dann in `blob:`-Seiten ausgeführt werden, wenn `match_origin_as_fallback` `true` ist ([Firefox-Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung hinzugefügt für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` ([Firefox-Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden jetzt mit einer Warnung geladen. Zuvor führten solche Erweiterungen zu einem Fehler bei der Installation. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko`-Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, bis zur Version dieses Releases von Firefox laden ([Firefox-Bug 1757293](https://bugzil.la/1757293)).

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 128, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Sie können weitere solche Funktionen auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP [`Accept`](/de/docs/Web/HTTP/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values) kann so konfiguriert werden, dass er Unterstützung für den `image/jxl` MIME-Typ anzeigt. ([Firefox-Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Status (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", ermöglichen es Entwicklern, ein Cookie über die [`partitioned`](/de/docs/Web/HTTP/Headers/Set-Cookie#partitioned)-Direktive des HTTP-Set-Cookie-Headers in einen partitionierten Speicher zu überführen. Wenn gesetzt, haben Cookies getrennten Speicher für jede Top-Level-Site und können nur innerhalb der gleichen Top-Level-Site, auf der sie gesetzt wurden, und ihren Subdomains gelesen werden. Dies blockiert das Tracking zwischen verschiedenen Seiten, während legitime Verwendungen von Drittanbieter-Cookies wie die Persistenz des Status von eingebetteten Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg ermöglicht werden ([Firefox-Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Nutzer-Tracking für Anzeigenerfassung durch das neue `navigator.privateAttribution`-Objekt mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Erklärungstext](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites über das [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser ermöglicht werden, indem die Einstellung auf `1` gesetzt wird ([Firefox-Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
