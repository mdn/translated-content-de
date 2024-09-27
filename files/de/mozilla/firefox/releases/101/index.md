---
title: Firefox 101 für Entwickler
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen werden. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Medienfunktion, die verwendet wird, um festzustellen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast in der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Diese Funktion ermöglicht es Benutzern jetzt auch, ein Farbschema für den Kontrast durch den neuen `custom`-Wert festzulegen ([Firefox-Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozentlängeneinheiten](/de/docs/Web/CSS/length) zusätzlich zu den bestehenden Einheiten - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozentlängeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox-Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox-Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/contain#inline-size) Wert für die `contain`-Eigenschaft wurde hinzugefügt. Weitere Informationen finden Sie in ([Firefox-Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt. `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, aber er ist veraltet und kann in zukünftigen Versionen entfernt werden ([Firefox-Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt und ermöglicht das Anzeigen des Pickers für ein Input-Element, wenn ein Benutzer mit einem anderen Element, wie einem Button, interagiert ([Firefox-Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein [serialisierbares Objekt](/de/docs/Glossary/serializable_object), sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox-Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktorfähige Stylesheets_ werden jetzt unterstützt, was das Erstellen wiederverwendbarer Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) erheblich erleichtert. Das Update beinhaltet die Ergänzung eines [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zum Erstellen neuer Stylesheets, die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) zum Hinzufügen/Ersetzen von CSS-Regeln in dem Sheet sowie die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets mit einem Dokument und seinen Shadow-DOM-Unterbäumen zu teilen. Weitere Informationen finden Sie in [Firefox-Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1-Codec-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#av1) werden jetzt in Medienunterstützungsanfragen korrekt analysiert. Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) jetzt die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den bereitgestellten Codec-Parametern genau darstellen. [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird auch die Informationen verwenden, um die "effiziente Dekodierung" von AV1-Videos genau darzustellen. Weitere Informationen finden Sie in [Firefox-Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Framerate festzulegen, die zur Sendung einer Codierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)). Beachten Sie, dass null als gültiger Framerate-Wert interpretiert wird, aber von Firefox als "kein Framerate-Limit" angesehen wird. Weitere Informationen finden Sie in [Firefox-Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestaltet sind, werden das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Einbettungsprogramms respektieren (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettungsprogramms und löste entweder das Geräte- oder Browser-Thema aus). Dies stellt sicher, dass ein Favicon, zum Beispiel, immer so gestaltet ist, dass es zum Thema der Elemente passt, die es umgeben, und nicht unbedingt zum (möglicherweise anderen) Thema des Geräts ([Firefox-Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Mit dieser Veröffentlichung von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi)-Protokoll standardmäßig aktiviert. Eine WebDriver BiDi-Sitzung kann angefordert werden, indem WebDriver Classic (geckodriver, Marionette) verwendet und die Fähigkeit [`webSocketURL`](/de/docs/Web/WebDriver/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Die gleiche Fähigkeit enthält dann den WebSocket-Endpunkt, mit dem BiDi-Clients eine Verbindung herstellen können.

Folgende Befehle und Ereignisse sind verfügbar:

- Fügt das [`session`-Modul](https://w3c.github.io/webdriver-bidi/#module-session) hinzu, einschließlich einer teilweisen Implementierung für die Befehle zum globalen Abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und Abbestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) von Ereignissen sowie die Möglichkeit, eine direkte WebDriver BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn nicht WebDriver Classic verwendet wird.

- Fügt das [`browsingContext`-Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) hinzu, einschließlich der Befehle zum Öffnen eines neuen Tabs oder Fensters ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zum Schließen eines solchen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), zum Abrufen geöffneter Browsing-Kontexte ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) sowie zur Navigation innerhalb eines Browsing-Kontextes ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Fügt das [`log`-Modul](https://w3c.github.io/webdriver-bidi/#module-log) hinzu, einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Für weitere Informationen siehe die [vollständige Fehlerliste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Ergänzung des {{WebExtAPIRef("storage.StorageArea.onChanged")}}-Ereignisses, das es Ihnen ermöglicht, auf Änderungen im Inhalt der Bereichen `local` und `sync` zu reagieren ([Firefox-Bug 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Ergänzung des {{WebExtAPIRef("scripting")}}-API, das Funktionen bietet, um ein Skript auszuführen, CSS einzufügen und zu entfernen und die Registrierung von Inhalts-Skripten zu verwalten ([Firefox-Bug 1687764](https://bugzil.la/1687764)). Dieses API ist für Manifest V3-Erweiterungen verfügbar und übernimmt die Skriptausführung sowie CSS-Einfügungs- und -Entfernungsfunktionen von der {{WebExtAPIRef("tabs")}}-API.
  - Ergänzung des {{WebExtAPIRef("action")}}-API, das die Funktionen der {{WebExtAPIRef("browserAction")}}-API in Manifest V3-Erweiterungen übernimmt. Ergänzung des entsprechenden [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssels und [`_execute_action` besonderer Schnellzugriff](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) mit dem Manifest `commands`-Schlüssel. Beachten Sie, dass das {{WebExtAPIRef("browserAction")}}-API und [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüsseleigenschaft `"persistent"` kann auf `false` unter Präferenzeinstellungen gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code>-Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code>-Präferenz.
  - Ergänzung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssels, der für Manifest V3-Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung für Inhalts-Skripte hat sich für Manifest V3-Erweiterungen geändert:
    - Inhalts-Skripte können sich nicht mehr auf Host-Erlaubnisse zur Durchführung von Cross-Origin-Anfragen verlassen. Cross-Origin-Anfragen von Inhalts-Skripten sind mit [CORS](/de/docs/Web/HTTP/CORS) möglich.
    - Das `content`-Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` anbot) wird aus der Ausführungsumgebung der Inhalts-Skripte entfernt.

## Ältere Versionen

{{Firefox_for_developers}}
