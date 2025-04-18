---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 041c86f9460d9b9e37e01af754e380a2d67e945a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Reference/Elements/base#target)-Attribut des `<base>` Elements erlaubt nun keine ASCII-Neuzeilen, Tabs oder das `<` Zeichen mehr und ändert den Wert in `_blank`, falls diese vorhanden sind. Dies verhindert Angriffe durch hängende Markups, die ein nicht geschlossenes `target` Attribut nutzen ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Diese Syntax erlaubt es, einen Farbwert relativ zu einer Ausgangsfarbe zu erstellen und ermöglicht das Ändern einer Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mithilfe von [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt nun [alternativen Text](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der alternative Text wird dann dem Accessibility-Tree des Browsers hinzugefügt. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}} @-Regel unterstützt nun den `<string>`-Syntax-Komponenten-Namen. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernte Funktionen

- Die Eigenschaften `align-tracks` und `justify-tracks` für Mauerwerk-Layout wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und erweiterbare {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es ermöglicht, die Größe von Puffern zu ändern, ohne einen neuen Puffer zuzuweisen und Daten hineinkopieren zu müssen ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:

  - Erweitern Sie {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal erlaubte Größe des Puffers wird mittels des `options.maxByteLength`-Parameters an den [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer erweiterbar ist und seine maximal erlaubte Größe.
  - Verändern Sie die Größe von {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal erlaubte Größe des Puffers wird mittels des `options.maxByteLength`-Parameters an den [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} zeigen an, ob der Puffer größenveränderbar ist, und seine maximal erlaubte Größe.

### HTTP

- Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) enthält nun den MIME-Typ `image/svg+xml` ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority)-Anfrage- und Antwort-Headers, der es Clienten erlaubt, die erwartete relative Priorität von Ressourcen, die über eine Verbindung gesendet werden, anzugeben, sowie die HTTP/2 und HTTP/3 `PRIORITY_UPDATE`-Frames, die es erlauben, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt und geben ein Objekt zurück, das die aktuell verwendeten Codecs zur Kodierung und Übertragung von Medien auf den Empfänger- und Senderstrecken beschreibt. ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt als bequeme Methode unterstützt, um ein {{jsxref("Uint8Array")}} aus einem [`Request`](/de/docs/Web/API/Request) und einer [`Response`](/de/docs/Web/API/Response) zu erhalten, jeweils. ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten einer Push-Nachricht als Array von Bytes in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten aus einem [`Blob`](/de/docs/Web/API/Blob) als Array von Bytes in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, welches zur Entschlüsselung von DRM-geschütztem Inhalt verwendet wird, die Präsentation verschlüsselter Mediendaten für einen „hypothetischen“ Schlüssel basierend auf angegebenen Richtlinienanforderungen wie der vom System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version erlauben würde.
  Dies bietet einer Anwendung einen einfachen Mechanismus, um im Voraus zu wissen, ob das Abspielen in optimaler Auflösung erlaubt wird, ohne eine Medienschlüsselsitzung erstellen oder eine reale Lizenz abrufen zu müssen. ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird nun unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer zur Dekodierung empfangener Daten in ihrer bevorzugten Codecreihenfolge verwenden kann. Webanwendungen können dies verwenden, um den entfernten Peer zu veranlassen, einen bevorzugten Codec auszuwählen und die Aushandlung bestimmter Codecs – einschließlich derjenigen, die für die Übertragung, Redundanz und Fehlerkorrektur verwendet werden – zu deaktivieren. ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Die Serialisierung von [deklarem Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML), und der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle wird jetzt standardmäßig unterstützt und repräsentiert eine CSS [`@property`](/de/docs/Web/CSS/@property) @-Regel. Die Schnittstelle ermöglicht es Ihnen, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Benutzereigenschaften abzurufen, die mit der `@property`-Regel definiert wurden ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird nun standardmäßig unterstützt. Sie ermöglicht es Ihnen, [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, was dem Verwenden der `@property`-Regel in CSS ähnlich ist ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web Audio

#### Entfernte Funktionen

- Die nicht-standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird nun von keinem Browser mehr unterstützt. ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver-BiDi, Marionette)

#### Allgemein

- Wir unterstützen nun die erweiterte Fähigkeit „unhandledPromptBehavior“, die entweder ein String (WebDriver klassisch) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie z.B. das Handling von „beforeunload“-Eingabeaufforderungen. ([Firefox Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Unterstützung für das „BiDi-Flag“ einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver-BiDi-Spezifikation übereinzustimmen. Dies ermöglicht es, Sitzungen zu identifizieren, die für oder aufgerüstet zu WebDriver BiDi erstellt wurden. ([Firefox Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den `network.continueRequest`-Befehl hinzugefügt, der es nun erlaubt, Header, Cookies, Methode und Body einer Anfrage zu modifizieren, bevor sie über das Netzwerk gesendet wird. ([Firefox Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, der es erlaubt, eine Erlaubnis an einen bestimmten Benutzerkontext zu isolieren (in Firefox als Container implementiert). ([Firefox Bug 1894217](https://bugzil.la/1894217))
- Ein Fehler in `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite lud und nachfolgende Befehle fehlschlagen ließ. ([Firefox Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted`-Ereignisse für Weiterleitungen emittiert werden. Das ursprüngliche Anfrage-`responseCompleted` wird nun immer vor den Ereignissen für die Weiterleitung emittiert. ([Firefox Bug 1879580](https://bugzil.la/1879580))
- Um mit dem aktuellen Firefox-Verhalten übereinzustimmen, haben wir den Workaround eingeführt, um Cookies nicht zu partitionieren, die mit dem „storage.setCookie“-Befehl für die gleiche Domain wie die im Zielkontext geladene Seite hinzugefügt werden. ([Firefox Bug 1898222](https://bugzil.la/1898222))
- Der `input.setFiles`-Befehl wurde aktualisiert, um einen `UnsupportedOperation`-Fehler auszugeben, wenn die angegebene Datei nicht existiert. ([Firefox Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das „HTTP-Flag“ einer WebDriver-Sitzung hinzugefügt, um mit der WebDriver-Klasse-Spezifikation überein zu stimmen. Dies ermöglicht es, Sitzungen zu identifizieren, die für WebDriver Klasse erstellt wurden. ([Firefox Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API in WebDriver Classic hinzugefügt. ([Firefox Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Fähigkeit hinzu, Regeln in statischen Deklarativen Netzwerkanfragerichtlinien-Sätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren, sowie deaktivierte Regeln für einen statischen Regeln-Satz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische Deklarative Netzwerkanfragerichtlinie, die durch den [`declarative_net_request`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert wurde, wird nun geladen, wenn sie nicht erkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} zu {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, das jetzt veraltet ist ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der {{WebExtAPIRef("proxy.settings")}}-Eigenschaft `proxyDNS` ist nun `false` bei der Verwendung von SOCKS4 und `true` bei der Verwendung von SOCKS5. Bisher war sie für SOCKS4 und SOCKS5 standardmäßig `false` ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Es wird nun Unterstützung für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanforderungen asynchron zu bearbeiten, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der [optional_host_permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions)-Manifest-Schlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht zur Laufzeit Anfragen für den Zugriff (Zugriff, der vom Benutzer nach der Installation einer Erweiterung gewährt wird) für die APIs in der Erweiterung, die Host-Daten lesen oder ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht-standardisierten Web-API-Ereignisse `overflow` und `underflow` wurden veraltet. Die Verwendung dieser Ereignisse sollte aus Erweiterungsdokumenten entfernt werden, bevor Firefox 131 veröffentlicht wird ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird nun bereitgestellt, damit Skripte in der Webseitenausführungsumgebung laufen. Dies wird durch Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}} API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}} API und Unterstützung für `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel bereitgestellt ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}} API kann nun Skripte und CSS in sandboxed Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs einfügen. Dies wurde implementiert für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}}.
- Inhaltsskripte laufen nun auf [sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:` URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der [Manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, was es ermöglicht, Skripte in `about:`, `data:`, und `blob:` Seiten einzufügen, wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe-Sandbox nicht transparent ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Darüber hinaus können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert wurden, jetzt nur in `blob:` Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` hinzugefügt ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, laden nun mit einer Warnung. Bisher führten diese Erweiterungen zu einem Fehler bei der Installation. Dies stellt sicher, dass, wenn eine neue `browser_specific_settings.gecko` Eigenschaft hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen ab dieser Veröffentlichung geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).
- Kontextmenüs, die mit {{WebExtAPIRef("menus.create")}} in Erweiterungen erstellt werden, die ein nicht-persistentes Hintergrundskript verwenden, bleiben nun zuverlässiger über Erweiterungs-Neustarts hinweg erhalten. Bisher gab es Fälle, in denen die Menü-Registrierung nach Neustarts verschwand ([Firefox Bug 1771328](https://bugzil.la/1771328)).

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 128 neu ausgeliefert, sind jedoch standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Sie können weitere solcher Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) finden.

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um Unterstützung für den `image/jxl`-MIME-Typ anzuzeigen. ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Cookies mit unabhängigem partitioniertem Zustand (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partitionierte Cookies", erlauben es Entwicklern, ein Cookie unter Verwendung der [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie` HTTP-Headers in eine partitionierte Speicherung zu optieren. Wenn gesetzt, haben Cookies eine separate Speicherung für jede Top-Level-Site und können nur innerhalb der gleichen Top-Level-Site und deren Subdomains gelesen werden, auf der sie gesetzt wurden. Dies blockiert das Cross-Site-Tracking, während legitime Verwendungen von Drittcookies wie das Persistieren des Zustands von eingebetteten Karten oder Chat-Widgets über verschiedene Subdomains einer Site hinweg erhalten bleiben. ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzertargeting zur Werbezuschreibung mit dem neuen Objekt `navigator.privateAttribution` mit den Methoden `saveImpression()` und `measureConversion()`. Lesen Sie mehr über PPA [im Erklärer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Websites via [origin trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser aktiviert werden, indem die Einstellung auf `1` gesetzt wird. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
