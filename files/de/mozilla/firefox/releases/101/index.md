---
title: Firefox 101 für Entwickler
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 101, die Entwickler betreffen werden. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media-Feature, die verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast in der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Diese Funktion ermöglicht es Benutzern nun auch, einen Satz von Farben anzugeben, die für den Kontrast verwendet werden sollen, durch den neuen `custom` Wert ([Firefox-Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewportgrößen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [viewport-prozentuale Längeneinheiten](/de/docs/Web/CSS/length) zusätzlich zu den bereits bestehenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen viewport-prozentualen Längeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox-Bug 1610815](https://bugzil.la/1610815)). Darüber hinaus werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox-Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/contain#inline-size) Wert für die `contain` Eigenschaft wurde hinzugefügt. Weitere Informationen finden Sie unter ([Firefox-Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt.
  `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, ist aber veraltet und könnte in zukünftigen Versionen entfernt werden ([Firefox-Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, sodass der Picker für ein Eingabeelement angezeigt werden kann, wenn ein Benutzer mit einem anderen Element, wie etwa einem Button, interagiert ([Firefox-Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [workers](/de/docs/Web/API/Worker) mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox-Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktionsfähige Stylesheets_ werden jetzt unterstützt, wodurch es viel einfacher wird, wiederverwendbare Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) zu erstellen.
  Das Update umfasst die Hinzufügung eines [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zur Erstellung neuer Stylesheets, die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die verwendet werden können, um CSS-Regeln im Sheet hinzuzufügen/zu ersetzen, sowie die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets auf ein Dokument und seine Shadow DOM-Subtrees zu teilen.
  Weitere Informationen finden Sie im [Firefox-Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1-Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt in Medienunterstützungsabfragen korrekt geparst.
  Dies bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) jetzt die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den bereitgestellten Codec-Parametern genau berichten.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird auch die Informationen verwenden, um genau über die "effiziente Dekodierung" von AV1-Videos zu berichten.
  Weitere Informationen finden Sie im [Firefox-Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Framerate festzulegen, die zum Senden einer Kodierung (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)) verwendet werden kann.
  Beachten Sie, dass null ein gültiger Framerate-Wert ist, aber von Firefox als "kein Framerate-Limit" interpretiert wird.
  Weitere Informationen finden Sie im [Firefox-Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Oberfläche, die mithilfe von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestaltet sind, berücksichtigen das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Einbettenden (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettenden und orientierte sich entweder am Geräte- oder Browser-Theme).
  Dies stellt sicher, dass zum Beispiel ein Favicon immer so gestaltet ist, dass es zum Thema der Elemente passt, die es umgeben, und nicht notwendigerweise zum (möglicherweise unterschiedlichen) Thema des Geräts passt. ([Firefox-Bug 1764354](https://bugzil.la/1764354)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi) Protokoll standardmäßig aktiviert. Eine WebDriver BiDi-Sitzung kann durch die Nutzung des klassischen WebDriver (geckodriver, Marionette) und das Setzen der [`webSocketURL`-Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) auf `true` angefordert werden, wenn eine neue WebDriver-Sitzung erstellt wird. Die gleiche Fähigkeit enthält dann den WebSocket-Endpunkt, mit dem sich BiDi-Clients verbinden können.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Fügt das [`session`-Modul](https://w3c.github.io/webdriver-bidi/#module-session) hinzu, einschließlich einer Teilimplementierung für die Befehle, um global auf Ereignisse zu abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und das Abonnement zu kündigen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)), sowie die Möglichkeit, eine direkte WebDriver BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn der klassische WebDriver nicht verwendet wird.

- Fügt das [`browsingContext`-Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) hinzu, einschließlich der Befehle, um einen neuen Tab oder ein neues Fenster zu öffnen ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zu schließen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), offene Browsing-Kontexte abzurufen ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und innerhalb eines Browsing-Kontexts zu navigieren ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Fügt das [`log`-Modul](https://w3c.github.io/webdriver-bidi/#module-log) hinzu, einschließlich Unterstützung für Ereignisse im Log ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Weitere Informationen finden Sie in der [vollständigen Bugliste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Hinzufügen des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das es Ihnen ermöglicht, Änderungen im Inhalt der `local` und `sync` Speicherbereiche zu verfolgen ([Firefox-Bug 1758475](https://bugzil.la/1758475)).
- Vorschau der Manifest V3 [Funktionen](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/):
  - Hinzufügen der {{WebExtAPIRef("scripting")}} API, die Funktionen bietet, um ein Skript auszuführen, CSS einzufügen und zu entfernen sowie die Registrierung von Inhalts-Skripten zu verwalten ([Firefox-Bug 1687764](https://bugzil.la/1687764)). Diese API steht Erweiterungen in Manifest V3 zur Verfügung und übernimmt die Ausführungs-, Einfüge- und Entfernungsmöglichkeiten von CSS aus der {{WebExtAPIRef("tabs")}} API.
  - Hinzufügen der {{WebExtAPIRef("action")}} API, die die Funktionen der {{WebExtAPIRef("browserAction")}} API in Manifest V3 Erweiterungen übernimmt. Entsprechende Hinzufügung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssels und des [`_execute_action` speziellen Shortcuts](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands` Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2 Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüsseleigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz, und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Hinzufügen des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssels, der für Manifest V3 Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung von Inhaltsskripten hat sich für Manifest V3 Erweiterungen geändert:
    - Inhaltsskripte können sich nicht mehr auf Host-Berechtigungen verlassen, um Cross-Origin-Anfragen auszuführen. Cross-Origin-Anfragen aus Inhaltsskripten sind mit [CORS](/de/docs/Web/HTTP/CORS) möglich.
    - Das `content` Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` anbot) wird aus der Ausführungsumgebung des Inhaltsskripts entfernt.

## Ältere Versionen

{{Firefox_for_developers}}
