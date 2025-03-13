---
title: Firefox 128 für Entwickler
slug: Mozilla/Firefox/Releases/128
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 128, die Entwickler betreffen. Firefox 128 wurde am [9. Juli 2024](https://whattrainisitnow.com/release/?version=128) veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`target`](/de/docs/Web/HTML/Element/base#target)-Attribut des `<base>`-Elements erlaubt nun keine ASCII-Zeilenumbrüche, Tabulatoren oder das `<`-Zeichen mehr. Sollte eines dieser Zeichen vorhanden sein, wird der Wert zu `_blank` geändert. Dies verhindert hängende Markup-Injektionen, die ein nicht geschlossenes `target`-Attribut nutzen ([Firefox Bug 1835157](https://bugzil.la/1835157)).

### CSS

- Die [Relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors) ist jetzt standardmäßig aktiviert. Relative Farbsyntax ermöglicht es, einen Farbwert relativ zu einer Ausgangsfarbe zu erstellen, und erlaubt es, eine Farbe in einem anderen {{Glossary("Color_space", "Farbraum")}} mit [Farb-Funktionen](/de/docs/Web/CSS/CSS_colors#functions) zu ändern ([Firefox Bug 1900251](https://bugzil.la/1900251)).
- Die [`content`](/de/docs/Web/CSS/content)-Eigenschaft unterstützt nun [Alternativtext](/de/docs/Web/CSS/content#alternative_text) für Inhalte, die ein Bild enthalten. Der Alternativtext wird dann in den Zugänglichkeitsbaum des Browsers aufgenommen. (Siehe [Firefox Bug 1281158](https://bugzil.la/1281158) und [Firefox Bug 1896047](https://bugzil.la/1896047)).
- Der [`syntax`](/de/docs/Web/CSS/@property/syntax)-Deskriptor der {{cssxref("@property")}}-Regel unterstützt jetzt den `<string>`-Syntaxkomponenten-Namen. (Siehe [Firefox Bug 1846635](https://bugzil.la/1846635)).

#### Entfernungen

- Die Mauerlayout-Eigenschaften `align-tracks` und `justify-tracks` wurden entfernt. Diese Eigenschaften waren nur in Firefox implementiert und wurden kürzlich [aus der Spezifikation entfernt](https://github.com/w3c/csswg-drafts/issues/8208) ([Firefox Bug 1900195](https://bugzil.la/1900195)).

### JavaScript

- Resizable {{jsxref("ArrayBuffer")}} und growable {{jsxref("SharedArrayBuffer")}} werden jetzt unterstützt, was es ermöglicht, die Größe von Puffern zu ändern, ohne einen neuen Puffer zuzuweisen und Daten hinein zu kopieren ([Firefox Bug 1884150](https://bugzil.la/1884150)).
  Die relevanten Methoden und Eigenschaften sind:

  - Vergrößerung des {{jsxref("SharedArrayBuffer")}} mit der Methode {{jsxref("SharedArrayBuffer.prototype.grow()")}}.
    Die maximal zulässige Größe des Puffers wird durch den Parameter `options.maxByteLength` beim [`SharedArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("SharedArrayBuffer.prototype.growable")}} und {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer vergrößert werden kann, und seine maximal zulässige Größe.
  - Anpassung des {{jsxref("ArrayBuffer")}} mit der Methode {{jsxref("ArrayBuffer.prototype.resize()")}}.
    Die maximal zulässige Größe des Puffers wird durch den Parameter `options.maxByteLength` beim [`ArrayBuffer()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer#maxbytelength) angegeben.
    Die Eigenschaften {{jsxref("ArrayBuffer.prototype.resizable")}} und {{jsxref("ArrayBuffer.prototype.maxByteLength")}} geben an, ob der Puffer resized werden kann, und seine maximal zulässige Größe.

### HTTP

- Der HTTP-Header [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) schließt nun den MIME-Typ `image/svg+xml` ein ([Firefox Bug 1711622](https://bugzil.la/1711622)).
- Das {{rfc("9218", "Extensible Prioritization Scheme for HTTP")}} wird jetzt unterstützt, einschließlich des HTTP-Request- und Response-Headers [`Priority`](/de/docs/Web/HTTP/Reference/Headers/Priority), der es Clients erlaubt, auf die erwartete relative Priorität für über eine Verbindung gesendete Ressourcen hinzuweisen, und die HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die es ermöglichen, die Priorität nach dem Senden des Headers zu ändern ([Firefox Bug 1865040](https://bugzil.la/1865040)).

### APIs

- [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) und [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) werden jetzt unterstützt, indem sie ein Objekt zurückgeben, das die aktuellen Codecs beschreibt, die für das Encoding und die Übertragung von Medien auf den Empfänger- und Sender-Tracks verwendet werden. ([Firefox Bug 1534687](https://bugzil.la/1534687)).
- [`Request.bytes()`](/de/docs/Web/API/Request/bytes) und [`Response.bytes()`](/de/docs/Web/API/Response/bytes) werden jetzt unterstützt und bieten eine bequeme Möglichkeit, ein {{jsxref("Uint8Array")}} aus einem [`Request`](/de/docs/Web/API/Request) und [`Response`](/de/docs/Web/API/Response) zu erhalten. ([Firefox Bug 1896475](https://bugzil.la/1896475)).
- [`PushMessageData.bytes()`](/de/docs/Web/API/PushMessageData/bytes) wird jetzt unterstützt, um die Daten aus einer Push-Nachricht als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1897871](https://bugzil.la/1897871)).
- [`Blob.bytes()`](/de/docs/Web/API/Blob/bytes) wird unterstützt, um die Daten aus einem [`Blob`](/de/docs/Web/API/Blob) als Byte-Array in einem {{jsxref("Uint8Array")}}-Objekt zurückzugeben. ([Firefox Bug 1896509](https://bugzil.la/1896509)).
- [`MediaKeys.getStatusForPolicy()`](/de/docs/Web/API/MediaKeys/getStatusForPolicy) wird jetzt unterstützt, um zu überprüfen, ob das CDM-Modul, das zum Entschlüsseln von DRM-geschütztem Inhalt verwendet wird, die Präsentation von verschlüsselten Mediadaten für einen "hypothetischen" Schlüssel basierend auf festgelegten Richtlinienanforderungen wie der vom System unterstützten [High-bandwidth Digital Content Protection (HDCP)](https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection)-Version ermöglichen würde.
  Dies bietet einer Anwendung eine einfache Möglichkeit, im Voraus zu wissen, ob die Wiedergabe in optimaler Auflösung erlaubt wird, ohne eine Mediaschlüsselsitzung erstellen oder eine echte Lizenz abrufen zu müssen. ([Firefox Bug 1878714](https://bugzil.la/1878714)).
- [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) wird jetzt unterstützt, um die Codecs festzulegen, die ein lokaler WebRTC-Peer zum Dekodieren empfangener Daten verwenden kann, in der bevorzugten Codec-Reihenfolge. Webanwendungen können dies nutzen, um den Remote-Peer zu veranlassen, einen bevorzugten Codec auszuwählen und die Aushandlung bestimmter Codecs zu deaktivieren – einschließlich derer, die für Retransmission, Redundanz und Vorwärtsfehlerkorrektur verwendet werden. ([Firefox Bug 1396922](https://bugzil.la/1396922)).
- Serialisierung von [deklarativem Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html), einschließlich der Methoden [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) und [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) und der zugehörigen Eigenschaften [`ShadowRoot.serializable`](/de/docs/Web/API/ShadowRoot/serializable) und [`HTMLTemplateElement.shadowRootSerializable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootSerializable).
- Die [`CSSPropertyRule`](/de/docs/Web/API/CSSPropertyRule)-Schnittstelle wird jetzt standardmäßig unterstützt und repräsentiert eine CSS- [`@property`](/de/docs/Web/CSS/@property)-At-Regel. Die Schnittstelle ermöglicht es, die Werte, einschließlich [`name`](/de/docs/Web/API/CSSPropertyRule/name), [`syntax`](/de/docs/Web/API/CSSPropertyRule/syntax), [`inherits`](/de/docs/Web/API/CSSPropertyRule/inherits) und [`initialValue`](/de/docs/Web/API/CSSPropertyRule/initialValue), von CSS-Benutzereigenschaften zu erhalten, die mit der `@property`-Regel definiert sind ([Firefox Bug 1864818](https://bugzil.la/1864818)).
- Die Methode [`registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static) wird jetzt standardmäßig unterstützt. Sie ermöglicht es, [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) über JavaScript zu definieren, ähnlich wie die Verwendung der `@property`-Regel in CSS ([Firefox Bug 1864818](https://bugzil.la/1864818)).

#### Medien, WebRTC und Web-Audio

#### Entfernungen

- Die nicht standardisierte Methode [`HTMLMediaElement.seekToNextFrame()`](/de/docs/Web/API/HTMLMediaElement/seekToNextFrame) wurde entfernt und wird von keinem Browser mehr unterstützt. ([Firefox Bug 1336404](https://bugzil.la/1336404)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Die erweiterte "unhandledPromptBehavior"-Fähigkeit wird nun unterstützt, die entweder ein String (klassisches WebDriver) oder ein JSON-Objekt (WebDriver BiDi) sein kann. Der Objekttyp bietet mehr Fähigkeiten für WebDriver BiDi, wie die Handhabung von "beforeunload"-Eingabeaufforderungen. ([Firefox Bug 1884650](https://bugzil.la/1884650))

#### WebDriver BiDi

- Es wurde Unterstützung für das "BiDi-Flag" einer WebDriver-Sitzung hinzugefügt, um eine Vereinheitlichung mit der WebDriver-BiDi-Spezifikation zu erreichen. Dies ermöglicht es, Sitzungen zu identifizieren, die für oder zu WebDriver BiDi erstellt oder hochgestuft wurden. ([Firefox Bug 1898719](https://bugzil.la/1898719))
- Unterstützung für mehrere Argumente für den `network.continueRequest`-Befehl hinzugefügt, der nun ermöglicht, Header, Cookies, Methode und Body einer Anfrage zu ändern, bevor sie über das Netzwerk gesendet wird. ([Firefox Bug 1850680](https://bugzil.la/1850680))
- Unterstützung für das `userContext`-Argument im `permissions.setPermission`-Befehl hinzugefügt, das es ermöglicht, eine Berechtigung für einen bestimmten Benutzerkontext (implementiert als Container in Firefox) zu isolieren. ([Firefox Bug 1894217](https://bugzil.la/1894217))
- Es wurde ein Fehler in `browsingContext.navigate` behoben, bei dem ein Navigationsfehler eine Fehlerseite laden und nachfolgende Befehle fehlschlagen ließ. ([Firefox Bug 1878690](https://bugzil.la/1878690))
- Wir haben die Reihenfolge korrigiert, in der `network.responseCompleted`-Ereignisse für Weiterleitungen emittiert werden. Die ursprüngliche Anfrage's `responseCompleted` wird jetzt immer vor den Ereignissen für die Weiterleitung emittiert. ([Firefox Bug 1879580](https://bugzil.la/1879580))
- Um mit dem aktuellen Firefox-Verhalten übereinzustimmen, haben wir die Umgehung eingeführt, um keine Cookies zu partitionieren, die mit dem Befehl "storage.setCookie" für dieselbe Domain hinzugefügt werden wie die geladene Seite im Zielkontext. ([Firefox Bug 1898222](https://bugzil.la/1898222))
- Der `input.setFiles`-Befehl wurde so aktualisiert, dass er einen `UnsupportedOperation`-Fehler auslöst, wenn die angegebene Datei nicht existiert. ([Firefox Bug 1887644](https://bugzil.la/1887644))

#### Marionette

- Unterstützung für das "HTTP-Flag" einer WebDriver-Sitzung hinzugefügt, um eine Vereinheitlichung mit der klassischen WebDriver-Spezifikation zu erreichen. Dies ermöglicht es, Sitzungen zu identifizieren, die für das klassische WebDriver erstellt wurden. ([Firefox Bug 1884090](https://bugzil.la/1884090))
- Unterstützung für die Permissions API im klassischen WebDriver hinzugefügt. ([Firefox Bug 1524074](https://bugzil.la/1524074))

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, Regeln in statischen deklarativen Netzwerkanforderungs-Regelsätzen mit {{WebExtAPIRef("declarativeNetRequest.updateStaticRules")}} zu aktivieren und zu deaktivieren und deaktivierte Regeln für einen statischen Regelsatz mit {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds")}} aufzulisten ([Firefox Bug 1810762](https://bugzil.la/1810762)).
- Eine statische deklarative Netzwerkanforderungsregel, die über den [`declarative_net_request`](manifest_key) definiert wurde, wird jetzt geladen, wenn sie unerkannte Eigenschaften enthält, aber ansonsten gültig ist ([Firefox Bug 1886608](https://bugzil.la/1886608)).
- Führt {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}} in {{WebExtAPIRef("declarativeNetRequest")}} ein. Diese Eigenschaften repräsentieren die maximale Anzahl von dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann. Sie ersetzen {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}, welches jetzt veraltet ist ([Firefox Bug 1894128](https://bugzil.la/1894128)).
- Der Standardwert der Eigenschaft {{WebExtAPIRef("proxy.settings")}} `proxyDNS` ist jetzt `false` bei Verwendung von SOCKS4 und `true` bei Verwendung von SOCKS5. Bisher war es bei SOCKS4 und SOCKS5 standardmäßig `false` ([Firefox Bug 1741375](https://bugzil.la/1741375)).
- Unterstützung wird jetzt für {{WebExtAPIRef("webRequest.onAuthRequired")}} bereitgestellt, um Authentifizierungsanfragen asynchron zu bearbeiten, indem `"asyncBlocking"` im `addListener`-Parameter `extraInfoSpec` angegeben wird ([Firefox Bug 1889897](https://bugzil.la/1889897)).
- Der manifestierte `optional_host_permissions`-Schlüssel wurde hinzugefügt. Dieser Schlüssel ermöglicht Laufzeitanfragen für den Zugriff (Zugriff gewährt vom Benutzer nach der Installation einer Erweiterung) für die APIs in der Erweiterung, die Hostdaten lesen oder ändern ([Firefox Bug 1766026](https://bugzil.la/1766026)).
- Die nicht standardisierten Web API-Ereignisse `overflow` und `underflow` wurden als veraltet markiert. Die Verwendung dieser Ereignisse sollte vor der Veröffentlichung von Firefox 131 aus Erweiterungsdokumenten entfernt werden ([Firefox Bug 1898445](https://bugzil.la/1898445)).
- Unterstützung wird jetzt bereitgestellt, damit Skripte in der Ausführungsumgebung der Webseite ausgeführt werden können. Dies wird durch die Unterstützung für `MAIN` in {{WebExtAPIRef("scripting.executionWorld","ExecutionWorld")}} für die {{WebExtAPIRef("scripting")}}-API, die Hinzufügung von `world` zur {{WebExtAPIRef("contentScripts.register()")}}-API und die Unterstützung von `world` im [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Manifest-Schlüssel bereitgestellt ([Firefox Bug 1736575](https://bugzil.la/1736575)).
- Die {{WebExtAPIRef("scripting")}}-API kann jetzt Skripte und CSS in Sandbox-Seiten mit `about:blank`, `about:srcdoc` und `data:` URLs injizieren. Dies wurde für {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, und {{WebExtAPIRef("scripting.removeCSS")}} in [Firefox Bug 1475831](https://bugzil.la/1475831) und {{WebExtAPIRef("scripting.registerContentScripts")}} und {{WebExtAPIRef("scripting.updateContentScripts")}} in [Firefox Bug 1853411](https://bugzil.la/1853411) durch die Einführung von `matchOriginAsFallback` zu {{WebExtAPIRef("scripting.RegisteredContentScript")}} implementiert.
- Inhaltsskripte laufen jetzt auf [Sandboxed](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) `http`, `https`, und `file:` URLs ([Firefox Bug 1411641](https://bugzil.la/1411641)).
- Der [Manifest-Schlüssel `content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) unterstützt jetzt `match_origin_as_fallback` und {{WebExtAPIRef("contentScripts.register")}} `matchOriginAsFallback`, wodurch Skripte in `about:`, `data:`, und `blob:` Seiten injiziert werden können, wenn der Dokumentenursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist ([Firefox Bug 1475831](https://bugzil.la/1475831) und [Firefox Bug 1896669](https://bugzil.la/1896669)). Zusätzlich können Skripte, die mit dem `content_scripts`-Manifest-Schlüssel registriert sind, nur in `blob:` Seiten laufen, wenn `match_origin_as_fallback` `true` ist ([Firefox Bug 1897113](https://bugzil.la/1897113)).
- Unterstützung hinzugefügt für die {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}-Eigenschaft `domainType` ([Firefox Bug 1797408](https://bugzil.la/1797408)).
- Erweiterungen, die eine nicht erkannte Eigenschaft im [Manifest-Schlüssel `browser_specific_settings.gecko`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) enthalten, werden nun mit einer Warnung geladen. Bisher führten diese Erweiterungen zu einem Fehler bei der Installation. Dies stellt sicher, dass, wenn eine neue Eigenschaft `browser_specific_settings.gecko` hinzugefügt wird, Erweiterungen, die diese neue Eigenschaft verwenden, in Firefox-Versionen zurück zu dieser Version geladen werden ([Firefox Bug 1757293](https://bugzil.la/1757293)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 128 verfügbar, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der Seite `about:config` und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **`image/jxl` MIME-Typ im Accept-Header für Standard- und Bildanfragen:** `image.jxl.enabled`.

  Der HTTP [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept)-Header in [Standardanfragen und Bildanfragen](/de/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) kann konfiguriert werden, um Unterstützung für den `image/jxl`-MIME-Typ anzuzeigen. ([Firefox Bug 1711622](https://bugzil.la/1711622)).

- **Unabhängig partitionierter Cookie-Status (CHIPS):** `network.cookie.CHIPS.enabled`.

  [CHIPS](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies), oder "partionierte Cookies", ermöglichen es Entwicklern, einen Cookie über die [`partitioned`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#partitioned)-Direktive des `Set-Cookie`-HTTP-Headers in einen partitionierten Speicher zu optieren. Wenn gesetzt, haben Cookies einen separaten Speicher für jede Top-Level-Seite und können nur innerhalb der gleichen Top-Level-Seite gelesen werden, auf der sie gesetzt wurden, und deren Subdomains. Dies blockiert das Cross-Site-Tracking, ermöglicht aber weiterhin legitime Verwendungsmöglichkeiten von Drittanbieter-Cookies wie das Speichern des Zustands eingebetteter Karten oder Chat-Widgets über verschiedene Subdomains einer Seite hinweg. ([Firefox Bug 1898253](https://bugzil.la/1898253)).

- **Privacy Preserving Attribution API (PPA):** `dom.origin-trials.private-attribution.state`.

  Die [PPA API](https://support.mozilla.org/en-US/kb/privacy-preserving-attribution) bietet eine Alternative zum Benutzer-Tracking für Anzeigenzuordnung durch die neue `navigator.privateAttribution`-Objekt mit `saveImpression()` und `measureConversion()`-Methoden. Lesen Sie mehr über PPA [im Erklärer](https://github.com/mozilla/explainers/tree/main/ppa-experiment). Dieses Experiment kann für Webseiten über [Origin Trial](https://wiki.mozilla.org/Origin_Trials) oder im Browser durch Setzen der Präferenz auf `1` aktiviert werden. ([Firefox Bug 1900929](https://bugzil.la/1900929)).

## Ältere Versionen

{{Firefox_for_developers}}
