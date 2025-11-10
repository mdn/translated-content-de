---
title: Firefox 101 Versionshinweise für Entwickler
short-title: Firefox 101
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 101, die Entwickler betreffen. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) Media-Feature, welches dazu verwendet wird, zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast bei der Darstellung von Webinhalten angegeben hat, ist nun standardmäßig verfügbar. Dieses Feature erlaubt es Benutzern nun auch, einen Satz von Farben für den Kontrast über den neuen `custom`-Wert festzulegen ([Firefox Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozent-Längeneinheiten](/de/docs/Web/CSS/Reference/Values/length) zusätzlich zu den bereits existierenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozent-Längeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` nun standardmäßig unterstützt ([Firefox Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`](/de/docs/Web/CSS/Reference/Properties/contain#inline-size) Wert für die `contain`-Eigenschaft wurde hinzugefügt. Weitere Informationen finden Sie unter ([Firefox Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird nun ohne das `moz`-Präfix unterstützt. `mozPreservesPitch` ist jetzt ein Alias für `preservesPitch`, ist jedoch veraltet und könnte in zukünftigen Versionen entfernt werden ([Firefox Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt und ermöglicht es, den Picker für ein Eingabe-Element anzuzeigen, wenn ein Benutzer mit einem anderen Element, wie beispielsweise einem Button, interagiert ([Firefox Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktierbare Stylesheets_ werden nun unterstützt, was das Erstellen wiederverwendbarer Stylesheets für die Verwendung mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) erheblich erleichtert. Das Update umfasst die Hinzufügung eines [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zum Erstellen neuer Stylesheets, der Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die zum Hinzufügen/Ersetzen von CSS-Regeln im Sheet verwendet werden können, sowie der Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets mit einem Dokument und dessen Shadow DOM-Unterbäumen zu teilen. Weitere Informationen finden Sie unter [Firefox Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1-Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden nun korrekt in Medienunterstützungsanfragen geparst. Dies bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) nun genau die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den angegebenen Codec-Parametern melden werden. [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird ebenfalls die Informationen verwenden, um eine genaue Meldung über die „effiziente Dekodierung“ von AV1-Videos zu liefern. Weitere Informationen finden Sie unter [Firefox Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Bildfrequenz festzulegen, die zum Senden einer Codierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)). Beachten Sie, dass Null ein gültiger Bildfrequenzwert ist, aber von Firefox als „kein Bildfrequenzlimit“ interpretiert wird. Weitere Informationen finden Sie unter [Firefox Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) gestylt werden, respektieren nun das [`color-scheme`](/de/docs/Web/CSS/Reference/Properties/color-scheme) des Einbettungs-Objekts (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettungs-Objekts und basierte entweder auf dem Geräte- oder Browser-Thema). Dies stellt sicher, dass ein Favicon zum Beispiel immer so gestaltet ist, dass es zum Thema der es umgebenden Elemente passt und nicht notwendigerweise (potenziell unterschiedlichen) Thema des Geräts. ([Firefox Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Ab dieser Version von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi)-Protokoll standardmäßig aktiviert. Eine WebDriver BiDi-Sitzung kann angefordert werden, indem WebDriver Classic (geckodriver, Marionette) verwendet wird und die [`webSocketURL`-Fähigkeit](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Dieselbe Fähigkeit enthält dann den WebSocket-Endpunkt, mit dem BiDi-Clients eine Verbindung herstellen können.

Die folgenden Befehle und Ereignisse sind verfügbar:

- Fügt das [`session`-Modul](https://w3c.github.io/webdriver-bidi/#module-session) hinzu, einschließlich einer teilweisen Implementierung für die Befehle, um global Ereignisse zu abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und abzubestellen ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)), und der Fähigkeit, eine direkte WebDriver BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn WebDriver Classic nicht verwendet wird.

- Fügt das [`browsingContext`-Modul](https://w3c.github.io/webdriver-bidi/#module-browsingContext) hinzu, einschließlich der Befehle, um einen neuen Tab oder ein neues Fenster zu öffnen ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zu schließen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), offene Browsing-Kontexte abzurufen ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und sich innerhalb eines Browsing-Kontexts zu bewegen ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wurde ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Fügt das [`log`-Modul](https://w3c.github.io/webdriver-bidi/#module-log) hinzu, einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Weitere Informationen finden Sie im [vollständigen Bugliste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Hinzufügung des {{WebExtAPIRef("storage.StorageArea.onChanged")}}-Ereignisses, das es ermöglicht, auf Änderungen im Inhalt der `local` und `sync` Speicherbereiche zu hören ([Firefox Bug 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/)-Funktionen:
  - Hinzufügung der {{WebExtAPIRef("scripting")}} API, die Funktionen zum Ausführen eines Skripts, Einfügen und Entfernen von CSS und Verwalten der Registrierung von Inhaltsskripten bietet ([Firefox Bug 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3-Erweiterungen verfügbar und übernimmt die Funktionen zur Ausführung von Skripten sowie zur Einfügung und Entfernung von CSS von der {{WebExtAPIRef("tabs")}} API.
  - Hinzufügung der {{WebExtAPIRef("action")}} API, die in Manifest V3-Erweiterungen die Funktionen der {{WebExtAPIRef("browserAction")}} API übernimmt. Entsprechende Hinzufügung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)-Manifest-Schlüssels und des [`_execute_action`-Spezialkürzels](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands`-Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}} API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)-Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Manifest-Schlüsseleigenschaft `"persistent"` kann unter der Steuerung von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code>-Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code>-Präferenz.
  - Hinzufügung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)-Manifest-Schlüssels, welcher für Manifest V3-Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung für Inhaltsskripte hat sich für Manifest V3-Erweiterungen geändert:
    - Inhaltsskripte können sich nicht mehr auf Host-Berechtigungen verlassen, um Cross-Origin-Anfragen auszuführen. Cross-Origin-Anfragen von Inhaltsskripten sind mit [CORS](/de/docs/Web/HTTP/Guides/CORS) möglich.
    - Das `content`-Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` anbot) wird aus der Ausführungsumgebung des Inhaltsskripts entfernt.
