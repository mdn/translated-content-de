---
title: Firefox 101 Versionshinweise für Entwickler
short-title: Firefox 101
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) Media-Feature, das verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast in der Präsentation von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Diese Funktion ermöglicht es Benutzern nun auch, eine Reihe von Farben für den Kontrast über den neuen `custom`-Wert anzugeben ([Firefox Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Ansichtsfenstergrößen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozentsatz-Längeneinheiten](/de/docs/Web/CSS/Reference/Values/length) zusätzlich zu den bestehenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozentsatz-Längeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) Wert der `contain`-Eigenschaft wurde hinzugefügt. Weitere Informationen finden Sie unter ([Firefox Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt. `mozPreservesPitch` ist jetzt ein Alias für `preservesPitch`, ist jedoch veraltet und könnte in zukünftigen Versionen entfernt werden ([Firefox Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, sodass der Picker für ein Eingabeelement angezeigt werden kann, wenn ein Benutzer mit einem anderen Element, z. B. einem Button, interagiert ([Firefox Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workern](/de/docs/Web/API/Worker) mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox Bug 1561357](https://bugzil.la/1561357)).

- _Erstellbare Stylesheets_ werden jetzt unterstützt, was die Erstellung wiederverwendbarer Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) wesentlich erleichtert.
  Das Update beinhaltet die Hinzufügung eines [`CSSStyleSheet()` Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zur Erstellung neuer Stylesheets, die [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync) Methoden, die verwendet werden können, um CSS-Regeln im Sheet hinzuzufügen/zu ersetzen, und die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets mit einem Dokument und seinen Shadow-DOM-Unterbäumen zu teilen.
  Weitere Informationen finden Sie unter [Firefox Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1-Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt in Medienunterstützungsabfragen korrekt geparst.
  Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) jetzt genau die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den angegebenen Codec-Parametern berichten werden.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird auch die Informationen verwenden, um genau über "effiziente Dekodierung" von AV1-Videos zu berichten.
  Weitere Informationen finden Sie unter [Firefox Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Bildwiederholrate einzustellen, die für das Senden einer Kodierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)).
  Beachten Sie, dass Null ein gültiger Wert für die Bildrate ist, aber von Firefox als "keine Bildratenbeschränkung" interpretiert wird.
  Weitere Informationen finden Sie unter [Firefox Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) gestaltet sind, werden das [`color-scheme`](/de/docs/Web/CSS/Reference/Properties/color-scheme) des Einbettenden respektieren (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettenden und löste entweder das Geräte- oder Browser-Thema aus).
  Dies stellt sicher, dass ein Favicon beispielsweise immer so gestaltet wird, dass es zum Thema der Elemente passt, die es einrahmen, und nicht notwendigerweise zum (möglicherweise anderen) Thema des Geräts. ([Firefox Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi)-Protokoll standardmäßig aktiviert. Eine WebDriver BiDi-Sitzung kann durch die Verwendung von WebDriver Classic (geckodriver, Marionette) und Festlegen der [`webSocketURL`-Einstellung](/de/docs/Web/WebDriver/Reference/Classic/Capabilities/webSocketUrl) auf `true` beim Erstellen einer neuen WebDriver-Sitzung angefordert werden. Dieselbe Einstellung wird dann den WebSocket-Endpunkt für BiDi-Clients enthalten, zu dem sich verbunden werden kann.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Hinzufügung des [`session` Moduls](https://w3c.github.io/webdriver-bidi/#module-session), einschließlich einer Teilimplementierung für die Befehle zum globalen Abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und Abbestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) von Ereignissen sowie der Möglichkeit, eine direkte WebDriver BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn WebDriver Classic nicht verwendet wird.

- Hinzufügung des [`browsingContext` Moduls](https://w3c.github.io/webdriver-bidi/#module-browsingContext), einschließlich der Befehle zum Öffnen eines neuen Tabs oder Fensters ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zum Schließen eines solchen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), Abrufen offener Browsing-Kontexte ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und zum Navigieren innerhalb eines Browsing-Kontexts ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Hinzufügung des [`log` Moduls](https://w3c.github.io/webdriver-bidi/#module-log), einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Für weitere Informationen siehe die [vollständige Fehlerliste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Hinzufügung des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das es Ihnen ermöglicht, Änderungen in den Inhalten in den `local` und `sync` Speicherbereichen zu überwachen ([Firefox Bug 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Hinzufügung der {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen eines Skriptes, Hinzufügen und Entfernen von CSS sowie zur Verwaltung der Registrierung von Inhalteskripten bietet ([Firefox Bug 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3 Erweiterungen verfügbar und übernimmt die Ausführungs- und Hinzufügefunktionen von Skripten und das Einfügen sowie Entfernen von CSS-Features aus der {{WebExtAPIRef("tabs")}} API.
  - Hinzufügung der {{WebExtAPIRef("action")}} API, die die Funktionen der {{WebExtAPIRef("browserAction")}} API in Manifest V3 Erweiterungen übernimmt. Entsprechende hinzufügen des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifestschlüssels und des [`_execute_action` speziellen Shortcuts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands` Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifestschlüssel nur in Manifest V2 Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifestschlüsseleigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz, und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Hinzufügung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifestschlüssels, der für Manifest V3 Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung für Inhalteskripte hat sich für Manifest V3 Erweiterungen geändert:
    - Inhalteskripte können sich nicht mehr auf Hostberechtigungen verlassen, um Cross-Origin-Anfragen auszuführen. Cross-Origin-Anfragen von Inhalteskripten sind mit [CORS](/de/docs/Web/HTTP/Guides/CORS) möglich.
    - Das `content` Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` bot) wird aus der Ausführungsumgebung für Inhalteskripte entfernt.
