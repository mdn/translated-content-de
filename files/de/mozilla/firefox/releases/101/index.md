---
title: Firefox 101 Veröffentlichungsnotizen für Entwickler
short-title: Firefox 101
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen werden. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media-Feature, das verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast bei der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Dieses Feature ermöglicht es Benutzern nun auch, eine Farbpalette für den Kontrast über den neuen `custom`-Wert festzulegen ([Firefox Fehler 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozentlängeneinheiten](/de/docs/Web/CSS/length) zusätzlich zu den vorhandenen - `vh`, `vw`, `vmax` und `vmin`. Die neuen Viewport-Prozentlängeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox Fehler 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox Fehler 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/contain#inline-size)-Wert für die `contain`-Eigenschaft wurde hinzugefügt. Weitere Informationen finden Sie unter ([Firefox Fehler 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt.
  `mozPreservesPitch` ist jetzt ein Alias für `preservesPitch`, wird jedoch als veraltet betrachtet und könnte in zukünftigen Versionen entfernt werden ([Firefox Fehler 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt und ermöglicht es, den Picker für ein Eingabeelement anzuzeigen, wenn ein Benutzer mit einem anderen Element, wie einem Button, interagiert ([Firefox Fehler 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox Fehler 1561357](https://bugzil.la/1561357)).

- _Konstruktive Stylesheets_ werden jetzt unterstützt, was es erheblich erleichtert, wiederverwendbare Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) zu erstellen.
  Das Update umfasst die Ergänzung eines [`CSSStyleSheet()` Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zum Erstellen neuer Stylesheets, sowie die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die verwendet werden können, um CSS-Regeln im Stylesheet hinzuzufügen oder zu ersetzen, und die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets mit einem Dokument und seinen Shadow DOM-Unterbäumen zu teilen.
  Weitere Informationen finden Sie in [Firefox Fehler 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1 Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt korrekt in Mediensupport-Anfragen analysiert.
  Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) nun genau die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den bereitgestellten Codec-Parametern berichten werden.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird die Informationen auch nutzen, um präzise über die "effiziente Decodierung" von AV1-Videos zu berichten.
  Weitere Informationen finden Sie in [Firefox Fehler 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Bildfrequenz festzulegen, die für das Senden einer Kodierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)).
  Beachten Sie, dass null ein gültiger Bildfrequenzwert ist, von Firefox jedoch als "keine Bildfrequenzbegrenzung" interpretiert wird.
  Weitere Informationen finden Sie in [Firefox Fehler 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mithilfe von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestylt werden, beachten jetzt die [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Embedders (früher ignorierte `prefers-color-scheme` die `color-scheme` des Embedders und löste entweder das Gerät oder das Browser-Thema aus).
  Dies stellt sicher, dass ein Favicon beispielsweise immer so gestylt wird, dass es zum Thema der Elemente passt, die es einbetten, und nicht unbedingt zum (potenziell unterschiedlichen) Thema des Geräts. ([Firefox Fehler 1764354](https://bugzil.la/1764354)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

Ab dieser Firefox-Version wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi)-Protokoll standardmäßig aktiviert sein. Eine WebDriver BiDi-Session kann angefordert werden, indem man WebDriver klassisch (geckodriver, Marionette) verwendet und die [`webSocketURL` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) auf `true` setzt, wenn eine neue WebDriver-Session erstellt wird. Die gleiche Fähigkeit enthält dann den WebSocket-Endpunkt für BiDi-Clients zum Verbinden.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Fügt das [`session` Modul](https://w3c.github.io/webdriver-bidi/#module-session) hinzu, einschließlich einer teilweisen Implementierung für die Befehle zum allgemeinen Abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und Abbestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) von Ereignissen, sowie die Möglichkeit, eine direkte WebDriver BiDi-Session zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn WebDriver klassisch nicht verwendet wird.

- Fügt das [`browsingContext` Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) hinzu, einschließlich der Befehle zum Öffnen eines neuen Tabs oder Fensters ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zum Schließen eines solchen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), zum Abrufen offener Browsing-Kontexte ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und zum Navigieren innerhalb eines Browsing-Kontexts ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Fügt das [`log` Modul](https://w3c.github.io/webdriver-bidi/#module-log) hinzu, einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Weitere Informationen finden Sie in der [vollständigen Fehlerliste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Ergänzung des {{WebExtAPIRef("storage.StorageArea.onChanged")}}-Ereignisses, das es ermöglicht, Änderungen im Inhalt der Speicherbereiche `local` und `sync` zu überwachen ([Firefox Fehler 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Ergänzung der {{WebExtAPIRef("scripting")}}-API, die Funktionen bietet, um ein Skript auszuführen, CSS einzufügen und zu entfernen, und die Registrierung von Inhaltsskripten zu verwalten ([Firefox Fehler 1687764](https://bugzil.la/1687764)). Diese API steht Manifest V3-Erweiterungen zur Verfügung und übernimmt die Skriptausführungs- sowie die CSS-Einfüge- und Entfernungsfunktionen von der {{WebExtAPIRef("tabs")}}-API.
  - Ergänzung der {{WebExtAPIRef("action")}}-API, die in Manifest V3-Erweiterungen die Funktionen der {{WebExtAPIRef("browserAction")}}-API übernimmt. Ergänzung des entsprechenden [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifests und des speziellen Shortcuts [`_execute_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum manifestierten `commands`-Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}}-API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Manifest-Schlüsseleigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Ergänzung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifests, das für Manifest V3-Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung für Inhaltsskripte hat sich für Manifest V3-Erweiterungen geändert:
    - Inhalte dürfen nicht mehr auf Host-Berechtigungen vertrauen, um Cross-Origin-Anfragen auszuführen. Cross-Origin-Anfragen von Inhaltsskripten sind mit [CORS](/de/docs/Web/HTTP/Guides/CORS) möglich.
    - Das `content`-Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` angeboten hat) wird aus der Inhaltsskript-Ausführungsumgebung entfernt.
