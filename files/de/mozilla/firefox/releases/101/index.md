---
title: Firefox 101 für Entwickler
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die sich auf Entwickler auswirken. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media-Feature, die verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast in der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Diese Funktion ermöglicht es den Benutzern nun auch, eine Reihe von Farben für den Kontrast durch den neuen `custom`-Wert anzugeben ([Firefox Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozentlängeneinheiten](/de/docs/Web/CSS/length) zusätzlich zu den bestehenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozentlängeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox Bug 1610815](https://bugzil.la/1610815)). Darüber hinaus werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/contain#inline-size) Wert für die `contain` Eigenschaft wurde hinzugefügt. Weitere Informationen finden Sie unter ([Firefox Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt.
  `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, wird jedoch als veraltet angesehen und könnte in zukünftigen Versionen entfernt werden ([Firefox Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, was es ermöglicht, den Picker für ein Eingabeelement anzuzeigen, wenn ein Benutzer mit einem anderen Element, wie z. B. einem Button, interagiert ([Firefox Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktionsfähige Stylesheets_ werden jetzt unterstützt, was die Erstellung wiederverwendbarer Stylesheets für die Verwendung mit dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) erheblich erleichtert.
  Das Update umfasst die Ergänzung eines [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zur Erstellung neuer Stylesheets, die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die verwendet werden können, um CSS-Regeln im Stylesheet hinzuzufügen/zu ersetzen, und die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets auf ein Dokument und seine Shadow-DOM-Unterbäume zu übertragen.
  Weitere Informationen finden Sie unter [Firefox Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1-Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt in Medienunterstützungsabfragen korrekt geparst.
  Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) jetzt die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den bereitgestellten Codec-Parametern genau melden.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird die Informationen auch verwenden, um über die "effiziente Dekodierung" von AV1-Videos genau zu berichten.
  Weitere Informationen finden Sie unter [Firefox Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Bildrate festzulegen, die zum Senden einer Kodierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)).
  Beachten Sie, dass Null ein gültiger Frame-rate-Wert ist, aber von Firefox als "kein Frame-rate-Limit" interpretiert wird.
  Weitere Informationen finden Sie unter [Firefox Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestylt sind, respektieren das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Einbettenden (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettenden und richtete sich nach dem Gerät oder dem Browser-Theme).
  Dies stellt sicher, dass z. B. ein Favicon immer so gestylt ist, dass es zum Theme der Elemente passt, die es verschachteln, und nicht unbedingt zum (möglicherweise abweichenden) Theme des Geräts. ([Firefox Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox wird das [WebDriver BiDi-Protokoll](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi) standardmäßig aktiviert. Eine WebDriver BiDi-Sitzung kann angefragt werden, indem der klassische WebDriver (geckodriver, Marionette) verwendet und die [`webSocketURL`-Fähigkeit](/de/docs/Web/WebDriver/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Diese Fähigkeit wird dann den WebSocket-Endpunkt enthalten, zu dem BiDi-Clients eine Verbindung herstellen können.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Hinzufügung des [`session`-Moduls](https://w3c.github.io/webdriver-bidi/#module-session), einschließlich einer Teilimplementierung für die Befehle zum globalen Abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und Abbestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) von Ereignissen sowie der Möglichkeit, eine direkte WebDriver BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn der klassische WebDriver nicht verwendet wird.

- Hinzufügung des [`browsingContext`-Moduls](https://w3c.github.io/webdriver-bidi/#module-browsingContext), einschließlich der Befehle, um einen neuen Tab oder ein neues Fenster zu öffnen ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zu schließen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), offene Browsing-Kontexte zu erhalten ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und innerhalb eines Browsing-Kontexts zu navigieren ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Hinzufügung des [`log`-Moduls](https://w3c.github.io/webdriver-bidi/#module-log), einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Weitere Informationen finden Sie in der [vollständigen Bugliste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Hinzufügung des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das es Ihnen ermöglicht, Änderungen im Inhalt der `local` und `sync` Speicherbereiche zu überwachen ([Firefox Bug 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Hinzufügung der {{WebExtAPIRef("scripting")}} API, die Funktionen bietet, um ein Skript auszuführen, CSS einzufügen und zu entfernen sowie die Registrierung von Inhalts-Skripten zu verwalten ([Firefox Bug 1687764](https://bugzil.la/1687764)). Diese API steht Erweiterungen von Manifest V3 zur Verfügung und übernimmt die Funktionen zum Ausführen von Skripten und Einfügen und Entfernen von CSS von der {{WebExtAPIRef("tabs")}} API.
  - Hinzufügung der {{WebExtAPIRef("action")}} API, die in Manifest V3-Erweiterungen die Funktionen der {{WebExtAPIRef("browserAction")}} API übernimmt. Entsprechende Hinzufügung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssels und [`_execute_action` Spezialkurzbefehl](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands` Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüsseleigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Hinzufügung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssels, der für Manifest V3-Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung für Inhalts-Skripte hat sich für Manifest V3-Erweiterungen geändert:
    - Inhalts-Skripte können sich nicht mehr auf Hostberechtigungen verlassen, um Cross-Origin-Anfragen durchzuführen. Cross-Origin-Anfragen von Inhalts-Skripten sind mit [CORS](/de/docs/Web/HTTP/CORS) möglich.
    - Das `content` Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` anbot) wird aus der Ausführungsumgebung für Inhalts-Skripte entfernt.

## Ältere Versionen

{{Firefox_for_developers}}
