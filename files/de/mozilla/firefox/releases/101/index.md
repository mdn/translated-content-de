---
title: Firefox 101 für Entwickler
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media-Feature, das verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast bei der Präsentation von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Dieses Feature ermöglicht es Benutzern jetzt auch, über den neuen `custom`-Wert einen Satz von Farben für den Kontrast anzugeben ([Firefox-Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Ansichtsgrößen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen fügen den bestehenden [Viewport-Prozent-Längeneinheiten](/de/docs/Web/CSS/length) - `vh`, `vw`, `vmax` und `vmin` - neue Einheiten hinzu. Die neuen Viewport-Prozent-Längeneinheiten beinhalten `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox-Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox-Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/contain#inline-size) Wert für die `contain`-Eigenschaft wurde hinzugefügt. Für weitere Informationen, siehe ([Firefox-Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt.
  `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, wird aber als veraltet betrachtet und könnte in zukünftigen Versionen entfernt werden ([Firefox-Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, wodurch der Picker für ein Eingabeelement angezeigt werden kann, wenn ein Benutzer mit einem anderen Element, wie z.B. einem Button, interagiert ([Firefox-Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}} und kann daher mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden ([Firefox-Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktible Stylesheets_ werden jetzt unterstützt, was das Erstellen von wiederverwendbaren Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) erheblich erleichtert.
  Das Update beinhaltet die Ergänzung eines [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zur Erstellung neuer Stylesheets, die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die verwendet werden können, um CSS-Regeln im Sheet hinzuzufügen/zu ersetzen, sowie die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Sheets auf ein Dokument und dessen Shadow DOM-Subtrees zu teilen.
  Weitere Informationen finden Sie unter [Firefox-Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1-Codec-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#av1) werden jetzt korrekt in Medienunterstützungsabfragen geparst.
  Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) jetzt die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den angegebenen Codec-Parametern genau melden.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird auch die Informationen nutzen, um die "effiziente Dekodierung" von AV1-Videos genau zu berichten.
  Für weitere Informationen siehe [Firefox-Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Bildwiederholrate festzulegen, die zum Senden einer Kodierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)).
  Beachten Sie, dass null ein gültiger Wert für die Bildwiederholrate ist, von Firefox jedoch als "keine Beschränkung der Bildwiederholrate" interpretiert wird.
  Weitere Informationen finden Sie unter [Firefox-Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestylt werden, respektieren das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Einbettungselements (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettungselements und richtete sich entweder nach dem Gerät oder dem Browser-Theme).
  Dies gewährleistet, dass z. B. ein Favicon immer so gestylt wird, dass es zum Thema der Elemente passt, die es einbetten, und nicht unbedingt zum (möglicherweise unterschiedlichen) Thema des Geräts. ([Firefox-Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Mit dieser Firefox-Version wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi)-Protokoll standardmäßig aktiviert. Eine WebDriver-BiDi-Sitzung kann durch Verwendung des klassischen WebDriver (geckodriver, Marionette) angefordert werden, indem die [`webSocketURL`-Fähigkeit](/de/docs/Web/WebDriver/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Dieselbe Fähigkeit enthält dann den WebSocket-Endpunkt, an den BiDi-Clients sich anschließen können.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Fügt das [`session`-Modul](https://w3c.github.io/webdriver-bidi/#module-session) hinzu, einschließlich einer Teilimplementierung der Befehle zum globalen Abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und Abbestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) von Ereignissen sowie der Möglichkeit, eine direkte WebDriver-BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn nicht der klassische WebDriver verwendet wird.

- Fügt das [`browsingContext`-Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) hinzu, einschließlich der Befehle zum Öffnen eines neuen Tabs oder Fensters ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zum Schließen eines solchen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), zum Abrufen offener Browsing-Kontexte ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und zum Navigieren innerhalb eines Browsing-Kontexts ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Fügt das [`log`-Modul](https://w3c.github.io/webdriver-bidi/#module-log) hinzu, einschließlich der Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Für weitere Informationen, siehe die [vollständige Bug-Liste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Ergänzung des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das es Ihnen ermöglicht, Änderungen an Inhalten in den Speicherbereichen `local` und `sync` nachzuvollziehen ([Firefox-Bug 1758475](https://bugzil.la/1758475)).
- Vorschau von Manifest V3 [Features](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/):
  - Ergänzung der {{WebExtAPIRef("scripting")}} API, die Funktionen bietet, um ein Skript auszuführen, CSS einzufügen und zu entfernen sowie die Registrierung von Inhalts-Skripten zu verwalten ([Firefox-Bug 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3-Erweiterungen verfügbar und übernimmt die Skript-Ausführung sowie das Einfügen und Entfernen von CSS-Funktionen von der {{WebExtAPIRef("tabs")}} API.
  - Ergänzung der {{WebExtAPIRef("action")}} API, die die Funktionen der {{WebExtAPIRef("browserAction")}} API in Manifest V3-Erweiterungen übernimmt. Entsprechende Ergänzung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssels und der [`_execute_action` spezialen Verknüpfung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum `commands`-Schlüssel des Manifests. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Die Eigenschaft `"persistent"` des [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüssels kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Hinzufügung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssels, der für Manifest V3-Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung für Inhaltsskripte hat sich für Manifest V3-Erweiterungen geändert:
    - Inhaltsskripte können sich nicht mehr auf Host-Berechtigungen verlassen, um Cross-Origin-Anfragen durchzuführen. Cross-Origin-Anfragen von Inhaltsskripten sind mit [CORS](/de/docs/Web/HTTP/CORS) möglich.
    - Das `content` Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` bot) wurde aus der Ausführungsumgebung für Inhaltsskripte entfernt.

## Ältere Versionen

{{Firefox_for_developers}}
