---
title: Firefox 101 für Entwickler
short-title: Firefox 101
slug: Mozilla/Firefox/Releases/101
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 101, die Entwickler betreffen werden. Firefox 101 wurde am 31. Mai 2022 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) Medienfunktion, die verwendet wird, um zu erkennen, ob der Benutzer eine Präferenz für höheren (`more`) oder niedrigeren (`less`) Kontrast bei der Darstellung von Webinhalten angegeben hat, steht jetzt standardmäßig zur Verfügung. Diese Funktion ermöglicht es Benutzern jetzt auch, eine Farbauswahl für den Kontrast durch den neuen Wert `custom` festzulegen ([Firefox-Bug 1656363](https://bugzil.la/1656363)).

- Drei neue Viewport-Größen wurden eingeführt: klein (`s`), groß (`l`) und dynamisch (`d`). Diese neuen Größen haben neue [Viewport-Prozent-Längeneinheiten](/de/docs/Web/CSS/length) zusätzlich zu den bestehenden - `vh`, `vw`, `vmax` und `vmin` - hinzugefügt. Die neuen Viewport-Prozent-Längeneinheiten umfassen `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin` und `dvmin` ([Firefox-Bug 1610815](https://bugzil.la/1610815)). Zusätzlich werden die Einheiten `vb` und `vi` jetzt standardmäßig unterstützt ([Firefox-Bug 1610815](https://bugzil.la/1610815)).

- Unterstützung für den [`inline-size`]-Wert (/de/docs/Web/CSS/contain#inline-size) für die `contain`-Eigenschaft wurde hinzugefügt. Für weitere Informationen siehe ([Firefox-Bug 1755565](https://bugzil.la/1755565)).

### JavaScript

Keine bemerkenswerten Änderungen.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/de/docs/Web/API/HTMLMediaElement/preservesPitch) wird jetzt ohne das `moz`-Präfix unterstützt. `mozPreservesPitch` ist jetzt ein Alias von `preservesPitch`, wird aber als veraltet angesehen und könnte in zukünftigen Versionen entfernt werden ([Firefox-Bug 1652950](https://bugzil.la/1652950)).

- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker) wird jetzt unterstützt und ermöglicht es, den Picker für ein Eingabeelement anzuzeigen, wenn ein Benutzer mit einem anderen Element, wie einem Button, interagiert ([Firefox-Bug 1745005](https://bugzil.la/1745005)).

- [`DOMException`](/de/docs/Web/API/DOMException) ist jetzt ein {{Glossary("serializable_object", "serielles Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann ([Firefox-Bug 1561357](https://bugzil.la/1561357)).

- _Konstruktive Stylesheets_ werden jetzt unterstützt, was es viel einfacher macht, wiederverwendbare Stylesheets für den Einsatz mit [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) zu erstellen. Die Aktualisierung umfasst die Hinzufügung eines [`CSSStyleSheet()`-Konstruktors](/de/docs/Web/API/CSSStyleSheet/CSSStyleSheet) zur Erstellung neuer Stylesheets, die Methoden [`CSSStyleSheet.replace()`](/de/docs/Web/API/CSSStyleSheet/replace) und [`CSSStyleSheet.replaceSync()`](/de/docs/Web/API/CSSStyleSheet/replaceSync), die verwendet werden können, um CSS-Regeln im Sheet hinzuzufügen/zu ersetzen, sowie die Eigenschaften [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets) und [`ShadowRoot.adoptedStyleSheets`](/de/docs/Web/API/ShadowRoot/adoptedStyleSheets), die verwendet werden, um Stylesheets an ein Dokument und seine Shadow-DOM-Unterbäume weiterzugeben. Weitere Informationen siehe [Firefox-Bug 1520690](https://bugzil.la/1520690).

#### Medien, WebRTC und Web Audio

- [AV1-Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#av1) werden jetzt in Medienunterstützungsanfragen korrekt geparst. Das bedeutet, dass [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) nun akkurat die Unterstützung für die Wiedergabe von AV1-Quellen basierend auf den bereitgestellten Codec-Parametern berichten. [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo) wird die Informationen auch nutzen, um eine genaue Berichterstattung zur "effizienten Dekodierung" von AV1-Videos zu liefern. Weitere Informationen siehe [Firefox-Bug 1757861](https://bugzil.la/1757861).

- `maxFramerate` wird jetzt unterstützt, um die maximale Framerate festzulegen, die zur Sendung einer Kodierung verwendet werden kann (in [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters)). Beachten Sie, dass null einen gültigen Frameratenwert darstellt, aber von Firefox als "kein Frameratenlimit" interpretiert wird. Weitere Informationen siehe [Firefox-Bug 1611957](https://bugzil.la/1611957).

#### SVG

- SVG-Bilder in der Firefox-Benutzeroberfläche, die mit [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) gestylt sind, werden das [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Einbettungselements berücksichtigen (zuvor ignorierte `prefers-color-scheme` das `color-scheme` des Einbettungselements und richtete sich entweder nach dem Geräte- oder Browser-Thema). Dies sorgt dafür, dass ein Favicon beispielsweise immer passend zum Thema der es umgebenden Elemente gestylt wird und nicht notwendigerweise zum (möglicherweise unterschiedlichen) Thema des Gerätes ([Firefox-Bug 1764354](https://bugzil.la/1764354)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

Mit diesem Release von Firefox wird das [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi)-Protokoll standardmäßig aktiviert. Eine WebDriver-BiDi-Sitzung kann angefordert werden, indem WebDriver Classic (geckodriver, Marionette) verwendet und die Fähigkeit [`webSocketURL` capability](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) auf `true` gesetzt wird, wenn eine neue WebDriver-Sitzung erstellt wird. Diese Fähigkeit wird dann den WebSocket-Endpunkt für BiDi-Clients enthalten, um eine Verbindung herzustellen.

Die folgenden Befehle und Ereignisse stehen zur Verfügung:

- Hinzufügung des [`session`-Moduls](https://w3c.github.io/webdriver-bidi/#module-session), einschließlich einer teilweisen Implementierung der Befehle, um global Ereignisse zu abonnieren ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) und das Abonnement von Ereignissen aufzuheben ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)), sowie die Möglichkeit, eine direkte WebDriver-BiDi-Sitzung zu erstellen ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)), wenn WebDriver Classic nicht verwendet wird.

- Hinzufügung des [`browsingContext`-Moduls](https://w3c.github.io/webdriver-bidi/#module-browsingContext), einschließlich der Befehle zum Öffnen eines neuen Tabs oder Fensters ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) oder zum Schließen eines solchen ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), zum Abrufen geöffneter Browsing-Kontexte ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) und zum Navigieren innerhalb eines Browsing-Kontextes ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). Es gibt auch Unterstützung für das Ereignis, wenn ein Browsing-Kontext erstellt wird ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Hinzufügung des [`log`-Moduls](https://w3c.github.io/webdriver-bidi/#module-log), einschließlich Unterstützung für Log-Ereignisse ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

Für weitere Informationen siehe die [vollständige Bug-Liste](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Änderungen für Add-on-Entwickler

- Hinzufügung des {{WebExtAPIRef("storage.StorageArea.onChanged")}}-Ereignisses, das es Ihnen ermöglicht, auf Änderungen im Inhalt der `local` und `sync` Speicherbereiche zu hören ([Firefox-Bug 1758475](https://bugzil.la/1758475)).
- Manifest V3 [Vorschau](https://blog.mozilla.org/addons/2022/06/08/manifest-v3-firefox-developer-preview-how-to-get-involved/)-Funktionen:
  - Hinzufügung der {{WebExtAPIRef("scripting")}}-API, die Funktionen zum Ausführen eines Skripts, Einfügen und Entfernen von CSS und Verwalten der Registrierung von Content-Skripten bereitstellt ([Firefox-Bug 1687764](https://bugzil.la/1687764)). Diese API ist für Manifest V3-Erweiterungen verfügbar und übernimmt die Funktionen zum Ausführen von Skripten und Einfügen und Entfernen von CSS aus der {{WebExtAPIRef("tabs")}}-API.
  - Hinzufügung der {{WebExtAPIRef("action")}}-API, die die Funktionen der {{WebExtAPIRef("browserAction")}}-API in Manifest V3-Erweiterungen übernimmt. Entsprechende Hinzufügung des [`"action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) Manifest-Schlüssels und [`_execute_action` spezielles Shortcut](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#special_shortcuts) zum Manifest `commands` Schlüssel. Beachten Sie, dass die {{WebExtAPIRef("browserAction")}}-API und der [`"browser_action"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) Manifest-Schlüssel nur in Manifest V2-Erweiterungen verfügbar sind.
  - Die [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) Manifest-Schlüsseleigenschaft `"persistent"` kann unter der Kontrolle von Präferenzen auf `false` gesetzt werden: für Manifest V2 die <code>extensions.eventPages.enabled</code> Präferenz und in Manifest V3 die <code>extensions.manifestV3.enabled</code> Präferenz.
  - Hinzufügung des [`"host_permissions"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) Manifest-Schlüssels, der für Manifest V3-Erweiterungen verfügbar ist.
  - Die Ausführungsumgebung für Content-Skripte hat sich für Manifest V3-Erweiterungen geändert:
    - Content-Skripte können sich nicht mehr auf Host-Berechtigungen verlassen, um Cross-Origin-Anfragen durchzuführen. Cross-Origin-Anfragen von Content-Skripten sind mit [CORS](/de/docs/Web/HTTP/Guides/CORS) möglich.
    - Das `content`-Objekt (das `content.fetch`, `content.XMLHttpRequest` und `content.WebSocket` anbot) wurde aus der Ausführungsumgebung für Content-Skripte entfernt.
