---
title: Firefox 101 für Entwickler
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Medienmerkmal, das verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast in der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Dieses Merkmal ermöglicht es Benutzern nun auch, eine Reihe von Farben für den Kontrast mit dem neuen `custom`-Wert festzulegen ([Firefox Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozent löschen Einheiten](/de/docs/Web/CSS/length) zusätzlich zu den bestehenden - `vh`, `vw`, `vmax` und `vmin` hinzugefügt. Die neuen Viewport-Prozent löschen Einheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den `inline-size` Wert für die `contain` Eigenschaft wurde hinzugefügt. Für weitere Informationen siehe ([Firefox Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt.
  `mozPreservesPitch` ist nun ein Alias von `preservesPitch`, ist jedoch veraltet und könnte in zukünftigen Versionen entfernt werden ([Firefox Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, sodass der Picker für ein Eingabeelement angezeigt werden kann, wenn ein Benutzer mit einem anderen Element, wie z.B. einem Button, interagiert ([Firefox Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox Bug 1561357](https://bugzil.la/1561357)).

- _Konstruierbare Stylesheets_ werden jetzt unterstützt, was es viel einfacher macht, wiederverwendbare Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) zu erstellen.
  Das Update umfasst die Ergänzung eines [`CSSStyleSheet()` Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zum Erstellen neuer Stylesheets, der Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die zum Hinzufügen/Ersetzen von CSS-Regeln in das Stylesheet verwendet werden können, sowie die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets in einem Dokument und seinen Shadow-DOM-Teilbäumen zu teilen.
  Weitere Informationen finden Sie im [Firefox Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1 Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt ordnungsgemäß in Medienunterstützungsabfragen verarbeitet.
  Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) nun genau die Unterstützung für die Wiedergabe von AV1-Quellen anhand der bereitgestellten Codec-Parameter melden werden.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird auch die Informationen nutzen, um genau über eine "effiziente Dekodierung" von AV1-Videos zu berichten.
  Weitere Informationen finden Sie im [Firefox Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird nun unterstützt, um die maximale Bildfrequenz festzulegen, die zum Senden einer Kodierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)).
  Beachten Sie, dass null ein gültiger Rahmenfrequenzwert ist, aber von Firefox als "kein Rahmenfrequenzlimit" interpretiert wird.
  Weitere Informationen finden Sie im [Firefox Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestylt sind, respektieren das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Einbettungssystems (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettungssystems und richtete sich entweder nach dem Geräte- oder Browser-Theme).
  Dies stellt sicher, dass ein Favicon beispielsweise immer so gestylt ist, dass es zum Theme der verschachtelnden Elemente passt und nicht unbedingt zum (möglicherweise anderen) Theme des Geräts. ([Firefox Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi) Protokoll standardmäßig aktiviert. Eine WebDriver BiDi Sitzung kann angefordert werden, indem der klassische WebDriver (geckodriver, Marionette) verwendet wird und die [`webSocketURL` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Dieselbe Fähigkeit wird dann den WebSocket-Endpunkt für BiDi-Clients enthalten, um eine Verbindung herzustellen.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Fügt das [`session` Modul](https://w3c.github.io/webdriver-bidi/#module-session) hinzu, einschließlich einer Teilimplementierung für die Befehle zum globalen Abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und Abbestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) von Ereignissen, sowie die Möglichkeit, eine direkte WebDriver BiDi Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)) wenn der klassische WebDriver nicht verwendet wird.

- Fügt das [`browsingContext` Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) hinzu, einschließlich der Befehle zum Öffnen eines neuen Tabs oder Fensters ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zum Schließen eines solchen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), zum Abrufen geöffneter Browsing-Kontexte ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und zur Navigation innerhalb eines Browsing-Kontexts ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wird ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Fügt das [`log` Modul](https://w3c.github.io/webdriver-bidi/#module-log) hinzu, einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Für weitere Informationen siehe die [vollständige Bug-Liste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Ergänzung des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das es ermöglicht, Änderungen im Inhalt in den `local` und `sync` Speicherbereichen zu überwachen ([Firefox Bug 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Ergänzung der {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen von Skripten, Einfügen und Entfernen von CSS sowie zum Verwalten der Registrierung von Inhaltsskripten bietet ([Firefox Bug 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3 Erweiterungen verfügbar und übernimmt die Funktionalitäten zum Ausführen von Skripten sowie zum Einfügen und Entfernen von CSS aus der {{WebExtAPIRef("tabs")}} API.
  - Ergänzung der {{WebExtAPIRef("action")}} API, die die Funktionalitäten der {{WebExtAPIRef("browserAction")}} API in Manifest V3 Erweiterungen übernimmt. Entsprechende Ergänzung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifestschlüssels und des [`_execute_action` speziellen Kürzels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands` Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifestschlüssel nur in Manifest V2 Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifestschlüssel-Eigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Ergänzung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifestschlüssels, der für Manifest V3 Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung für Inhaltsskripte hat sich für Manifest V3 Erweiterungen geändert:
    - Inhaltsskripte können sich nicht mehr auf Host-Berechtigungen verlassen, um Cross-Origin-Anfragen durchzuführen. Cross-Origin-Anfragen von Inhaltsskripten sind mit [CORS](/de/docs/Web/HTTP/Guides/CORS) möglich.
    - Das `content` Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` anbot) ist aus der Ausführungsumgebung von Inhaltsskripten entfernt worden.

## Ältere Versionen

{{Firefox_for_developers}}
