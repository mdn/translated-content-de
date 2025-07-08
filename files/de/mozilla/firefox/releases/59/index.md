---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Die Registerkarte „Antwort“ im [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an — sofern die Antwort HTML ist ([Firefox-Bug 1353319](https://bugzil.la/1353319)).
- Die im Speicherinspektor gezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) beinhalten nun eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox-Bug 1298370](https://bugzil.la/1298370)).
- Das [Lineal-Werkzeug](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) enthält jetzt eine Anzeige, die die aktuellen Abmessungen des Viewports zeigt ([Firefox-Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie nun die Bildschirmabmessungen mit den Cursor-Tasten einstellen ([Firefox-Bug 1421663](https://bugzil.la/1421663)). Weitere Details finden Sie im Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- Die Anzeige _Rohe Header_ in der Registerkarte _Header_ des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enthält jetzt den Statuscode der Antwort ([Firefox-Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete) des {{HTMLElement("textarea")}}-Elements wurde implementiert. Dies ermöglicht das Aktivieren oder Deaktivieren der automatischen Formularausfüllung für das Element.

### CSS

- Die {{cssxref("overscroll-behavior")}}-Eigenschaft und die zugehörigen Longhand-Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox-Bug 951793](https://bugzil.la/951793)) und sind ab jetzt standardmäßig in allen Releases aktiviert ([Firefox-Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein durch CSS-Konzepte gerendert werden wie ersetzte Elemente) mit einem {{cssxref("display")}}-Wert von `contents` wurde gemäß der Spezifikation aktualisiert ([Firefox-Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für mehr Details über das spezifizierte Verhalten.
- {{cssxref("position")}} `sticky` wird nun auf geeigneten Teilen von [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) unterstützt (z.B. {{htmlelement("th")}}-Elemente) ([Firefox-Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird nun in {{cssxref("&lt;color&gt;")}}-Werten unterstützt — `rgb()`, `rgba()`, `hsl()` und `hsla()` ([Firefox-Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Queries](/de/docs/Web/CSS/CSS_media_queries) wird jetzt unterstützt [Firefox-Bug 1396057](https://bugzil.la/1396057).
- Die {{cssxref("@document")}}-Regel ist nun auf die Verwendung in User- und UA-Stilen beschränkt ([Firefox-Bug 1035091](https://bugzil.la/1035091)).
- Die {{cssxref("font-optical-sizing")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox-Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget)-Konstruktor wurde implementiert ([Firefox-Bug 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor kann jetzt einen `null` Wert für seinen `body`-Parameter akzeptieren, gemäß der Spezifikation ([Firefox-Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox-Bug 1412775](https://bugzil.la/1412775)).

#### Service Workers

- Der Service-Worker-[Clients-API](/de/docs/Web/API/Clients) kann jetzt Fenster in einem separaten Browserprozess finden und mit ihnen kommunizieren ([Firefox-Bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank- und about:srcdoc-Iframes erben jetzt den controlling Service Worker ihres Elternteils. Behoben in ([Firefox-Bug 1293277](https://bugzil.la/1293277)) und ([Firefox-Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) liefert, wird der [`Response.url`](/de/docs/Web/API/Response/url)-Wert jetzt auf die abgefangene Netzwerkanforderung als endgültig aufgelöste URL übertragen. In der Vergangenheit wurde dafür die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet zum Beispiel, dass, falls ein Service Worker ein Stylesheet oder Workskript abfängt, die bereitgestellte `Response.url` zum Auflösen von relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcen verwendet wird ([Firefox-Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` löst nun einen Netzwerkfehler aus, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist ([Firefox-Bug 1222008](https://bugzil.la/1222008)).

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) sowie die Ereignisse [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) sowie die entsprechenden Ereignishandler, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted`-Status eines Tracks zeigt an, dass der Track derzeit keine Mediendaten bereitstellen kann.

  > [!NOTE]
  > Der `muted`-Zustand eines Tracks ist nicht nützlich für das, was typischerweise als Stummschalten und Aufheben der Stummschaltung eines Tracks angesehen wird. Stattdessen sollten Sie die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwenden; das Setzen von `enabled` auf `false` bewirkt, dass der Track nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt Apples HTTPS Live Streaming (HLS)-Protokoll für sowohl Audio als auch Video. Dieses nicht-standardisierte Protokoll wird auf mobilen Geräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die es für das mobile Streaming erfordern. Derzeit gibt es keinen Plan, es auf Firefox Desktop zu implementieren.
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Allerdings fand vor der Veröffentlichung eine Spezifikationsänderung statt, und wir haben sie standardmäßig hinter der Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox-Bug 1363667](https://bugzil.la/1363667), [Firefox-Bug 1430213](https://bugzil.la/1430213), und [Firefox-Bug 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle wurde jetzt implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceiver unterstützt, wobei `RTCPeerConnection` und andere Schnittstellen entsprechend der neuesten Spezifikation aktualisiert wurden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Darüber hinaus wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API)-Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox-Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt jetzt WebVTT `REGION`-Definitionsblöcke, deren Einstellungslisten ein Setting pro Zeile haben, anstatt dass alle Einstellungen in derselben Zeile der WebVTT-Datei stehen ([Firefox-Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule)-Schnittstelle und ihre `namespaceURL`- und `prefix`-Eigenschaften wurden implementiert ([Firefox-Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Navigation auf oberster Ebene zu `data:`-URLs wurde blockiert [Firefox-Bug 1401895](https://bugzil.la/1401895). Siehe [Blockieren von Top-Level-Navigationen zu Daten-URLs für Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für mehr Details.
- Die `SAMEORIGIN`-Direktive des {{httpheader("X-Frame-Options")}}-Headers wurde so geändert, dass sie überprüft, ob nicht nur das oberste IFrame im gleichen Ursprung ist, sondern auch alle seine Vorfahren ([Firefox-Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)).
- Die HTTP-Authentifizierung verwendet nun `utf-8`-Codierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`), um Gleichwertigkeit mit anderen Browsern zu erreichen und potenziellen Problemen aus dem Weg zu gehen, wie sie in [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben sind.
- Jeden Tag wird die [HSTS-Vorladeliste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise erfordert dies keine Notiz, aber in dieser Veröffentlichung wurden neue TLDs eingeschlossen, insbesondere `.app` und `.dev`. Während sie neue TLDs sind, könnten Entwickler sie für die lokale Entwicklung genutzt haben und von dieser Änderung überrascht sein. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entferntes von der Web-Plattform

### HTML

Der nicht-standardmäßige `version` Parameter des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) des {{htmlelement("script")}}-Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox-Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox-Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` Eigenschaften wurden auf die Verwendung in Chrome-Code beschränkt ([Firefox-Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht-standardmäßige konditionale Catch-Klauseln wurden entfernt ([Firefox-Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht-standardmäßige Methode `Event.getPreventDefault()` wurde entfernt. Sie sollten stattdessen die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented)-Eigenschaft verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification` Eigenschaft und das `DesktopNotification` Interface wurden zugunsten der Standard [Notifications API](/de/docs/Web/API/Notifications_API) entfernt ([Firefox-Bug 952453](https://bugzil.la/952453)).
- Die proprietäre Methode `window.external.addSearchEngine()` wurde entfernt ([Firefox-Bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für mehr Details.
- Die nicht-standardmäßige Firefox-exklusive [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Unterstützung für die SMIL-Funktion `accessKey` wurde entfernt ([Firefox-Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Unterstützung für die nicht-standardmäßigen Protokolle `pcast:` und `feed:` wurde aus Firefox entfernt ([Firefox-Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Design](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Aktualisierungen:
  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Array als auch CSS-Farbwerte.

- Neue [Browservoreinstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):
  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:
  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [API contextMenus](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) unterstützt jetzt einen ["bookmark" Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Registrierung von Inhalts-Skripten zur Laufzeit.
- Neue APIs [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction):
  - Die `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren nun `null`, um Änderungen rückgängig zu machen.
  - Funktionen wie [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen).

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um Seitenaktionen standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:
  - "ssb" für sichere Scuttlebutt-Kommunikation
  - "dat" für das DATprojekt
  - "ipfs", "ipns", "dweb" für IPFS

- Neuer [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)-Einstellung „cookieConfig“.
- Unterstützung im [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
