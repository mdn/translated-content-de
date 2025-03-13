---
title: Firefox 101 für Entwickler
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen werden. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media-Feature, die genutzt wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast in der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Diese Funktion ermöglicht es Benutzern jetzt auch, einen Satz von Farben für den Kontrast durch den neuen Wert `custom` anzugeben ([Firefox Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozentuale Längeneinheiten](/de/docs/Web/CSS/length) zusätzlich zu den bestehenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozentuale Längeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/contain#inline-size) Wert für die `contain`-Eigenschaft wurde hinzugefügt. Für weitere Informationen siehe ([Firefox Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt. `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, ist jedoch veraltet und könnte in zukünftigen Versionen entfernt werden ([Firefox Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, was es ermöglicht, dass der Picker für ein Eingabeelement angezeigt wird, wenn ein Benutzer mit einem anderen Element, wie einem Button, interagiert ([Firefox Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktible Stylesheets_ werden jetzt unterstützt, was es erheblich einfacher macht, wiederverwendbare Stylesheets für den Einsatz mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) zu erstellen. Das Update umfasst die Ergänzung eines [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zum Erstellen neuer Stylesheets, die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die genutzt werden können, um CSS-Regeln im Stylesheet hinzuzufügen/zu ersetzen, sowie die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die genutzt werden, um Stylesheets zu einem Dokument und seinen Shadow-DOM-Teilbäumen zu teilen. Weitere Informationen finden Sie unter [Firefox Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1 Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt in Medienunterstützungsanfragen korrekt geparst. Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) nun die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den bereitgestellten Codec-Parametern genau berichten. [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird die Informationen auch nutzen, um genau über die "effiziente Decodierung" von AV1-Videos zu berichten. Weitere Informationen finden Sie unter [Firefox Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Bildrate zu setzen, die für das Senden einer Kodierung genutzt werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)). Beachten Sie, dass Null ein gültiger Frame-Ratenwert ist, aber von Firefox als "keine Frame-Raten-Beschränkung" interpretiert wird. Weitere Informationen finden Sie unter [Firefox Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Oberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestylt werden, beachten das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Einbettenden. (Zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettenden und basierte sich entweder auf dem Gerät oder dem Browser-Theme). Dies gewährleistet, dass ein Favicon beispielsweise immer thematisch zu den einbettenden Elementen passt und nicht unbedingt das (möglicherweise unterschiedliche) Thema des Geräts widerspiegelt. ([Firefox Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi)-Protokoll standardmäßig aktiviert. Eine WebDriver BiDi-Sitzung kann angefordert werden, indem WebDriver Classic (geckodriver, Marionette) verwendet und die [`webSocketURL` capability](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Die gleiche Fähigkeit wird dann den WebSocket-Endpunkt für BiDi-Clients enthalten, um sich zu verbinden.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Ergänzt das [`session` Modul](https://w3c.github.io/webdriver-bidi/#module-session) einschließlich einer teilweisen Implementierung der Befehle, um sich global für Ereignisse zu abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und abzubestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)), sowie um eine direkte WebDriver BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn kein WebDriver Classic verwendet wird.

- Ergänzt das [`browsingContext` Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) einschließlich der Befehle, um einen neuen Tab oder ein Fenster zu öffnen ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder ein solches zu schließen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), um offene Browsing-Kontexte abzurufen ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und um innerhalb eines Browsing-Kontexts zu navigieren ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Ergänzt das [`log` Modul](https://w3c.github.io/webdriver-bidi/#module-log) einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Weitere Informationen finden Sie in der [vollständigen Bug-Liste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Ergänzung des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das es Ihnen ermöglicht, Änderungen im Inhalt in den Speicherräumen `local` und `sync` zu überwachen ([Firefox Bug 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Ergänzung der {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen eines Skripts, Einfügen und Entfernen von CSS sowie zur Verwaltung der Registrierung von Inhaltsskripten bietet ([Firefox Bug 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3-Erweiterungen verfügbar und übernimmt die Ausführungsskript- sowie CSS-Einfügungs- und Entfernungsfunktionen von der {{WebExtAPIRef("tabs")}} API.
  - Ergänzung der {{WebExtAPIRef("action")}} API, die die Funktionen der {{WebExtAPIRef("browserAction")}} API in Manifest V3-Erweiterungen übernimmt. Entsprechende Ergänzung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssels und [`_execute_action` spezielle Abkürzung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands` Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüsseleigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Ergänzung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssels, der für Manifest V3-Erweiterungen verfügbar ist.
  - Die Inhaltskript-Ausführungsumgebung hat sich für Manifest V3-Erweiterungen geändert:
    - Inhaltskripte können sich nicht mehr auf Host-Berechtigungen verlassen, um Cross-Origin-Anfragen auszuführen. Cross-Origin-Anfragen aus Inhaltskripten sind mit [CORS](/de/docs/Web/HTTP/Guides/CORS) möglich.
    - Das `content` Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` angeboten hat) wird aus der Inhaltskript-Ausführungsumgebung entfernt.

## Ältere Versionen

{{Firefox_for_developers}}
