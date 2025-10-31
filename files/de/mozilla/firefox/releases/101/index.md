---
title: Entwicklerhinweise zu Firefox 101
short-title: Firefox 101
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Media-Eigenschaft, die verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder geringeren (`less`) Kontrast in der Darstellung von Webinhalten angegeben hat, ist jetzt standardmäßig verfügbar. Diese Funktion erlaubt es jetzt auch, Benutzern eine Farbsatz für den Kontrast durch den neuen `custom` Wert anzugeben ([Firefox Fehler 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozentlängeneinheiten](/de/docs/Web/CSS/length) zusätzlich zu den bestehenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozentlängeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox Fehler 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox Fehler 1610815](https://bugzil.la/1610815)).

- Unterstützung für den Wert [`inline-size`](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) der `contain` Eigenschaft wurde hinzugefügt. Für weitere Informationen siehe ([Firefox Fehler 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz` Präfix unterstützt.
  `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, ist aber veraltet und könnte in zukünftigen Versionen entfernt werden ([Firefox Fehler 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt, wodurch der Picker für ein Eingabeelement angezeigt werden kann, wenn ein Benutzer mit einem anderen Element, z.B. einem Button, interagiert ([Firefox Fehler 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox Fehler 1561357](https://bugzil.la/1561357)).

- _Konstruierbare Stylesheets_ werden jetzt unterstützt, was es viel einfacher macht, wiederverwendbare Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) zu erstellen.
  Die Aktualisierung umfasst die Hinzufügung eines [`CSSStyleSheet()` Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zur Erstellung neuer Stylesheets, die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die zum Hinzufügen/Ersetzen von CSS-Regeln im Sheet verwendet werden können, sowie die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets zu einem Dokument und seinen Shadow DOM Unterbäumen zu teilen. Siehe [Firefox Fehler 1520690](https://bugzil.la/1520690) für weitere Informationen.

#### Medien, WebRTC und Web Audio

- [AV1-Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt in Medienunterstützungsabfragen korrekt analysiert.
  Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) nun die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den bereitgestellten Codec-Parametern genau berichten werden.
  [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird auch die Informationen verwenden, um genau über das "effiziente Decoding" von AV1-Videos zu berichten.
  Für weitere Informationen siehe [Firefox Fehler 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Bildrate festzulegen, die zum Senden einer Codierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)).
  Beachten Sie, dass null ein gültiger Bildratenwert ist, aber von Firefox als "kein Bildratenlimit" interpretiert wird.
  Für weitere Informationen siehe [Firefox Fehler 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mithilfe von [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestaltet sind, respektieren das [`color-scheme`](/de/docs/Web/CSS/Reference/Properties/color-scheme) des Einbettenden (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettenden und wurde entweder durch das Gerät oder das Browser-Thema ausgelöst).
  Dies stellt sicher, dass z.B. ein Favicon immer so gestaltet ist, dass es zum Thema der Elemente passt, die es einbetten, und nicht unbedingt dem (möglicherweise anderen) Thema des Geräts entspricht. ([Firefox Fehler 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox ist das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi) Protokoll standardmäßig aktiviert. Eine WebDriver BiDi Sitzung kann angefordert werden, indem WebDriver classic (geckodriver, Marionette) verwendet wird und die [`webSocketURL` Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) beim Erstellen einer neuen WebDriver-Sitzung auf `true` gesetzt wird. Diese Fähigkeit enthält dann den WebSocket-Endpunkt, mit dem BiDi-Clients eine Verbindung herstellen können.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Fügt das [`session` Modul](https://w3c.github.io/webdriver-bidi/#module-session) hinzu, einschließlich einer teilweisen Implementierung für die Befehle zum globalen Abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und Abbestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) von Ereignissen sowie die Möglichkeit, eine direkte WebDriver BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn WebDriver classic nicht verwendet wird.

- Fügt das [`browsingContext` Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) hinzu, einschließlich der Befehle, um einen neuen Tab oder ein neues Fenster zu öffnen ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder ein solches zu schließen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), offene Browsing-Kontexte abzurufen ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und innerhalb eines Browsing-Kontextes zu navigieren ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Fügt das [`log` Modul](https://w3c.github.io/webdriver-bidi/#module-log) hinzu, einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Für weitere Informationen siehe die [vollständige Fehlerliste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Hinzufügung des {{WebExtAPIRef("storage.StorageArea.onChanged")}} Ereignisses, das es Ihnen ermöglicht, auf Änderungen in den `local` und `sync` Speicherbereichen zu hören ([Firefox Fehler 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/) Funktionen:
  - Hinzufügung der {{WebExtAPIRef("scripting")}} API, die Funktionen bietet, um ein Skript auszuführen, CSS einzufügen und zu entfernen sowie die Registrierung von Inhalts-Skripten zu verwalten ([Firefox Fehler 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3 Erweiterungen verfügbar und übernimmt die Skriptausführungs- sowie die Einfüge- und Entfernungseigenschaften von CSS aus der {{WebExtAPIRef("tabs")}} API.
  - Hinzufügung der {{WebExtAPIRef("action")}} API, die die Funktionen der {{WebExtAPIRef("browserAction")}} API in Manifest V3 Erweiterungen übernimmt. Entsprechende Hinzufügung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssel und [`_execute_action` spezieller Shortcut](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands` Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2 Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüsseleigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz, und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Hinzufügung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssel, der für Manifest V3 Erweiterungen verfügbar ist.
  - Die Umgebung für die Ausführung von Inhalts-Skripten hat sich für Manifest V3 Erweiterungen geändert:
    - Inhalts-Skripte können sich nicht mehr auf Host-Berechtigungen verlassen, um cross-origin Anfragen durchzuführen. Cross-origin Anfragen aus Inhalts-Skripten sind mit [CORS](/de/docs/Web/HTTP/Guides/CORS) möglich.
    - Das `content` Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` anbot) ist aus der Umgebung für die Ausführung von Inhalts-Skripten entfernt.
