---
title: Firefox 101 für Entwickler
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über Änderungen in Firefox 101, die Entwickler betreffen. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media-Feature, das verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast in der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Dieses Feature ermöglicht es Benutzern nun auch, einen Satz von Farben für den Kontrast über den neuen Wert `custom` anzugeben ([Firefox-Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozentlängeneinheiten](/de/docs/Web/CSS/length) zusätzlich zu den bestehenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozentlängeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox-Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox-Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/contain#inline-size) Wert für die `contain` Eigenschaft wurde hinzugefügt. Weitere Informationen finden Sie unter ([Firefox-Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt.
  `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, ist jedoch veraltet und könnte in zukünftigen Versionen entfernt werden ([Firefox-Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, sodass der Picker für ein Eingabeelement angezeigt werden kann, wenn ein Benutzer mit einem anderen Element, wie z. B. einem Button, interagiert ([Firefox-Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable object")}}, sodass er mit {{domxref("structuredClone()")}} geklont oder zwischen [workern](/de/docs/Web/API/Worker) mit {{domxref("Worker.postMessage()", "postMessage()")}} kopiert werden kann ([Firefox-Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktierbare Stylesheets_ werden jetzt unterstützt, was das Erstellen wiederverwendbarer Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) erheblich erleichtert.
  Die Aktualisierung umfasst die Hinzufügung eines [`CSSStyleSheet()` Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zum Erstellen neuer Stylesheets, die {{domxref("CSSStyleSheet.replace()")}} und {{domxref("CSSStyleSheet.replaceSync()")}} Methoden, die verwendet werden können, um CSS-Regeln im Sheet hinzuzufügen/zu ersetzen, sowie die [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets) Eigenschaften, die verwendet werden, um Stylesheets an ein Dokument und dessen Shadow-DOM-Subtrees weiterzugeben.
  Weitere Informationen finden Sie unter [Firefox-Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1 Codec-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#av1) werden jetzt in Medienunterstützungsanfragen richtig geparst.
  Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) nun die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den angegebenen Codec-Parametern genau berichten.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird die Informationen auch nutzen, um eine genaue Berichterstattung über die "effiziente Dekodierung" von AV1-Videos bereitzustellen.
  Weitere Informationen finden Sie unter [Firefox-Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Bildrate festzulegen, die zum Senden einer Kodierung verwendet werden kann (in {{domxref("RTCPeerConnection.addTransceiver()")}} und {{domxref("RTCRtpSender.setParameters()")}}).
  Beachten Sie, dass Null ein gültiger Bildratwert ist, aber von Firefox als "kein Bildratenlimit" interpretiert wird.
  Weitere Informationen finden Sie unter [Firefox-Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestylt sind, respektieren das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Einbettenden (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettenden und wurde entweder durch das Geräte- oder Browser-Thema ausgelöst).
  Dies stellt sicher, dass ein Favicon zum Beispiel immer so gestylt wird, dass es zum Thema der Elemente passt, die es umgeben, und nicht unbedingt zum (möglicherweise unterschiedlichen) Thema des Geräts ([Firefox-Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi) Protokoll standardmäßig aktiviert sein. Eine WebDriver BiDi-Session kann angefordert werden, indem WebDriver Classic (geckodriver, Marionette) verwendet und die [`webSocketURL` Fähigkeit](/de/docs/Web/WebDriver/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Dieselbe Fähigkeit wird dann den WebSocket-Endpunkt für BiDi-Clients enthalten, um sich zu verbinden.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Hinzufügung des [`session` Moduls](https://w3c.github.io/webdriver-bidi/#module-session), einschließlich einer teilweisen Implementierung der Befehle zum globalen Abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und Abbestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) von Ereignissen, sowie der Möglichkeit, eine direkte WebDriver BiDi-Session zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn WebDriver Classic nicht verwendet wird.

- Hinzufügung des [`browsingContext` Moduls](https://w3c.github.io/webdriver-bidi/#module-browsingContext) einschließlich der Befehle zum Öffnen eines neuen Tabs oder Fensters ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zum Schließen desselben ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), Abrufen geöffneter Browsing-Kontexte ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und zum Navigieren innerhalb eines Browsing-Kontexts ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Hinzufügung des [`log` Moduls](https://w3c.github.io/webdriver-bidi/#module-log) einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Weitere Informationen finden Sie in der [vollständigen Bugliste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Hinzufügung des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das es Ihnen ermöglicht, auf Änderungen im Inhalt der `local` und `sync` Speicherbereiche zu lauschen ([Firefox-Bug 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Hinzufügung der {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen eines Skripts, Einfügen und Entfernen von CSS und zur Verwaltung der Registrierung von Inhalts-Skripten bietet ([Firefox-Bug 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3-Erweiterungen verfügbar und übernimmt die Ausführung und das Einfügen und Entfernen von CSS-Funktionen von der {{WebExtAPIRef("tabs")}} API.
  - Hinzufügung der {{WebExtAPIRef("action")}} API, die in Manifest V3-Erweiterungen die Funktionen der {{WebExtAPIRef("browserAction")}} API übernimmt. Entsprechende Hinzufügung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssels und [`_execute_action` spezieller Shortcut](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands` Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüssel Eigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Hinzufügung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssels, der für Manifest V3-Erweiterungen verfügbar ist.
  - Die Umgebung für die Ausführung von Inhalts-Skripten hat sich für Manifest V3-Erweiterungen geändert:
    - Inhalts-Skripte können sich nicht mehr auf Host-Berechtigungen verlassen, um Cross-Origin-Anfragen auszuführen. Cross-Origin-Anfragen aus Inhalts-Skripten sind mit [CORS](/de/docs/Web/HTTP/CORS) möglich.
    - Das `content` Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` angeboten hat) ist aus der Ausführungsumgebung des Inhalts-Skripts entfernt worden.

## Ältere Versionen

{{Firefox_for_developers}}
