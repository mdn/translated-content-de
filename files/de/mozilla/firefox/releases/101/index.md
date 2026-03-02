---
title: Firefox 101 Versionshinweise für Entwickler
short-title: Firefox 101
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Das [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) Medieneigenschaft, die verwendet wird, um zu erkennen, ob der Nutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast bei der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Diese Funktion ermöglicht es Nutzern jetzt auch, eine Reihe von Farben für den Kontrast über den neuen `custom`-Wert festzulegen ([Firefox Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozentlängen-Einheiten](/de/docs/Web/CSS/Reference/Values/length) in Ergänzung zu den bestehenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozentlängen-Einheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) Wert für die `contain`-Eigenschaft wurde hinzugefügt. Für weitere Informationen siehe ([Firefox Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine nennenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt.
  `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, ist jedoch veraltet und könnte in zukünftigen Versionen entfernt werden ([Firefox Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, sodass der Picker für ein Eingabeelement angezeigt werden kann, wenn ein Nutzer mit einem anderen Element, wie zum Beispiel einer Schaltfläche, interagiert ([Firefox Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Arbeitern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktorfähige Stylesheets_ werden jetzt unterstützt, was es viel einfacher macht, wiederverwendbare Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) zu erstellen.
  Das Update umfasst die Ergänzung eines [`CSSStyleSheet()` Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zur Erstellung neuer Stylesheets, die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), mit denen CSS-Regeln im Sheet hinzugefügt/ersetzt werden können, sowie die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Sheets mit einem Dokument und dessen Shadow-DOM-Unterbäumen zu teilen.
  Weitere Informationen finden Sie unter [Firefox Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1 Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt korrekt in Medienunterstützungsabfragen geparst.
  Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) jetzt die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den bereitgestellten Codec-Parametern genau berichten.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird auch die Informationen verwenden, um genau über die "effiziente Dekodierung" von AV1-Videos zu berichten.
  Weitere Informationen finden Sie unter [Firefox Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Framerate festzulegen, die zum Senden einer Codierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)).
  Beachten Sie, dass null zwar ein gültiger Frame-Rate-Wert ist, aber von Firefox als "kein Frame-Rate-Limit" interpretiert wird.
  Weitere Informationen finden Sie unter [Firefox Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) gestylt sind, respektieren das [`color-scheme`](/de/docs/Web/CSS/Reference/Properties/color-scheme) des Einbettenden (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettenden und löste entweder vom Geräte- oder Browser-Theme aus).
  Dies stellt sicher, dass z. B. ein Favicon immer so gestylt wird, dass es zum Thema der es umgebenden Elemente passt und nicht unbedingt zum (möglicherweise unterschiedlichen) Thema des Geräts passt. ([Firefox Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi) Protokoll standardmäßig aktiviert. Eine WebDriver BiDi-Sitzung kann angefordert werden, indem der WebDriver classic (geckodriver, Marionette) verwendet und die [`webSocketURL` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Die gleiche Fähigkeit enthält dann den WebSocket-Endpunkt, für den sich BiDi-Clients verbinden können.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Fügt das [`session` Modul](https://w3c.github.io/webdriver-bidi/#module-session) hinzu, das eine partielle Implementierung für die Befehle enthält, um sich global für Ereignisse anzumelden ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und abzumelden ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)), sowie die Möglichkeit, eine direkte WebDriver BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn nicht WebDriver classic verwendet wird.

- Fügt das [`browsingContext` Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) hinzu, einschließlich der Befehle zum Öffnen eines neuen Tabs oder Fensters ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zum Schließen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), zum Abrufen offener Kontextfenster ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und zum Navigieren innerhalb eines Browsing-Kontextes ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Unterstützung gibt es auch für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Fügt das [`log` Modul](https://w3c.github.io/webdriver-bidi/#module-log) hinzu, einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Weitere Informationen finden Sie in der [vollständigen Bug-Liste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Hinzufügen des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das Ihnen ermöglicht, Änderungen im Inhalt der `local` und `sync` Speicherbereiche zu überwachen ([Firefox Bug 1758475](https://bugzil.la/1758475)).

- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Hinzufügen der {{WebExtAPIRef("scripting")}} API, die Funktionen bietet, um ein Skript auszuführen, CSS einzufügen und zu entfernen sowie die Registrierung von Inhalts-Skripten zu verwalten ([Firefox Bug 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3-Erweiterungen verfügbar und übernimmt die Funktionen des Skript-Ausführens sowie des Einfügens und Entfernens von CSS aus der {{WebExtAPIRef("tabs")}} API.
  - Hinzufügen der {{WebExtAPIRef("action")}} API, die die Funktionen der {{WebExtAPIRef("browserAction")}} API in Manifest V3-Erweiterungen übernimmt. Entsprechende Hinzufügung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssels und der speziellen [`_execute_action` Abkürzung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) für den Manifest-`commands`-Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Der [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüsselt kann die Eigenschaft `"persistent"` auf `false` setzen, unter Kontrolle der Präferenzen: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz, und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Hinzufügen des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssels, der für Manifest V3-Erweiterungen verfügbar ist.
  - Die Umgebung zur Ausführung von Inhalts-Skripten hat sich für Manifest V3-Erweiterungen geändert:
    - Inhalts-Skripte können sich nicht mehr auf Host-Berechtigungen verlassen, um Anfragen über Ursprung hinweg durchzuführen. Anfragen über Ursprung hinweg von Inhalts-Skripten sind mit [CORS](/de/docs/Web/HTTP/Guides/CORS) möglich.
    - Das `content`-Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` anbot) wird aus der Umgebung zur Ausführung von Inhalts-Skripten entfernt.
