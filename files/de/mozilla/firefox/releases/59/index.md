---
title: Firefox 59 für Entwickler
short-title: Firefox 59
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt im Antwort-Tab nun eine [Vorschau des gerenderten HTMLs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) — falls die Antwort HTML ist ([Firefox Bug 1353319](https://bugzil.la/1353319)).
- Die im Speicherinspektor angezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) enthalten nun eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox Bug 1298370](https://bugzil.la/1298370)).
- Das [Lineale](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html)-Tool enthält jetzt eine Anzeige, die die aktuellen Dimensionen des Viewports zeigt ([Firefox Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmabmessungen mit den Pfeiltasten einstellen ([Firefox Bug 1421663](https://bugzil.la/1421663)). Siehe den Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size) für weitere Details.
- Die Anzeige der _Roh-Header_ im Tab _Header_ des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enthält jetzt den Statuscode der Antwort ([Firefox Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete) des {{HTMLElement("textarea")}}-Elements wurde implementiert. Dies ermöglicht es Ihnen, das automatische Ausfüllen von Formularen für das Element zu aktivieren oder zu deaktivieren.

### CSS

- Die Eigenschaft {{cssxref("overscroll-behavior")}} und die zugehörigen Langschreibeigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Bug 951793](https://bugzil.la/951793)) und in allen Versionen standardmäßig aktiviert ([Firefox Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente) beim Geben eines {{cssxref("display")}}-Werts von `contents` wurde gemäß Spezifikation aktualisiert ([Firefox Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox), um genau zu erfahren, welche Verhaltensweisen spezifiziert sind.
- {{cssxref("position")}} `sticky` wird jetzt auf geeigneten [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)-Teilen unterstützt (z.B. {{htmlelement("th")}}-Elemente) ([Firefox Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird nun in {{cssxref("&lt;color&gt;")}}-Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Werten wird jetzt unterstützt ([Firefox Bug 1396057](https://bugzil.la/1396057)).
- Die {{cssxref("@document")}} At-Regel ist auf die Verwendung nur in Benutzer- und UA-Stilen beschränkt ([Firefox Bug 1035091](https://bugzil.la/1035091)).
- Die Eigenschaft {{cssxref("font-optical-sizing")}} wurde implementiert ([Firefox Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der Konstruktor [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) wurde implementiert ([Firefox Bug 1379688](https://bugzil.la/1379688)).
- Der Konstruktor [`Response()`](/de/docs/Web/API/Response/Response) kann jetzt gemäß Spezifikation einen `null`-Wert für seinen `body`-Parameter akzeptieren ([Firefox Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox Bug 1412775](https://bugzil.la/1412775)).

#### Service Worker

- Die Service Worker [Clients API](/de/docs/Web/API/Clients) kann jetzt Fenster in einem separaten Browser-Prozess finden und mit ihnen kommunizieren ([Firefox Bug 1293277](https://bugzil.la/1293277)).
- Eingebettete about:blank- und about:srcdoc-IFrames erben nun den steuernden Service Worker ihrer übergeordneten Elemente. Ein Fix wurde in ([Firefox Bug 1293277](https://bugzil.la/1293277)) und ([Firefox Bug 1426979](https://bugzil.la/1426979)) vorgenommen.
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) liefert, wird der Wert [`Response.url`](/de/docs/Web/API/Response/url) nun als endgültige URL zur abgefangenen Netzwerkanfrage propagiert. In der Vergangenheit wurde dafür [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet, dass beispielsweise, wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt, die bereitgestellte `Response.url` verwendet wird, um alle relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)-Unterressourcenladungen aufzulösen ([Firefox Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` löst jetzt einen Netzwerkfehler aus, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox Bug 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) sowie die Ereignisse [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und die entsprechenden Ereignis-Handler, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted`-Zustand einer Spur zeigt an, dass die Spur derzeit keine Mediendaten liefern kann.

  > [!NOTE]
  > Der `muted`-Zustand einer Spur ist nicht nützlich für das, was typischerweise als Stummschaltung und Aufhebung der Stummschaltung einer Spur angesehen wird. Stattdessen sollte die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft verwendet werden; das Setzen von `enabled` auf `false` führt dazu, dass die Spur nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt Apples HTTPS Live Streaming (HLS)-Protokoll für sowohl Audio- als auch Video. Dieses nicht standardisierte Protokoll wird auf Mobilgeräten unterstützt, um die Kompatibilität mit Seiten zu verbessern, die es für mobiles Streaming erfordern. Derzeit gibt es keinen Plan, es in Firefox Desktop zu implementieren.
- Die Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Es gab jedoch eine Spezifikationsänderung vor der Veröffentlichung und wir haben diese standardmäßig hinter der Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Bug 1363667](https://bugzil.la/1363667), [Firefox Bug 1430213](https://bugzil.la/1430213), und [Firefox Bug 1433236](https://bugzil.la/1433236)).
- Das [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Interface wurde nun implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceiver unterstützt, wobei `RTCPeerConnection` und andere Schnittstellen aktualisiert wurden, um sie gemäß der neuesten Spezifikation zu verwenden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Zudem wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API)-Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Jetzt sind sie standardmäßig verfügbar ([Firefox Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt nun WebVTT `REGION` Definitionsblöcke, deren Liste der Einstellungen ein Attribut pro Zeile hat, anstatt dass alle Einstellungen in derselben Zeile der WebVTT-Datei sind ([Firefox Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Das Interface [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) und die zugehörigen Eigenschaften `namespaceURL` und `prefix` wurden implementiert ([Firefox Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Navigation auf oberster Ebene zu `data:`-URLs wurde blockiert ([Firefox Bug 1401895](https://bugzil.la/1401895)). Siehe [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für weitere Details.
- Die `SAMEORIGIN`-Direktive des {{httpheader("X-Frame-Options")}}-Headers wurde geändert, sodass sie nicht nur überprüft, ob das umgebende IFrame auf derselben Domain ist, sondern auch alle Vorgänger ([Firefox Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die von anderen Ursprüngen als das aktuelle Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)).
- HTTP-Authentifizierung verwendet nun `utf-8`-Codierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`), um mit anderen Browsern gleichzuziehen und potenzielle Probleme zu vermeiden, wie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben.
- Täglich wird die [HSTS-Vorliste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise erfordert das keine Notiz, aber in dieser Version wurden neue TLDs eingeschlossen, insbesondere `.app` und `.dev`. Da sie neue TLDs sind, könnten Entwickler sie für die lokale Entwicklung verwendet haben und von dieser Änderung überrascht sein. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### HTML

Der nicht standardisierte `version`-Parameter des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des {{htmlelement("script")}}-Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre Länge Einheit `mozmm` {{cssxref("&lt;length&gt;")}} wurde entfernt ([Firefox Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden auf die Verwendung nur im Chrome-Code beschränkt ([Firefox Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht standardisierte bedingte Catch-Klauseln wurden entfernt ([Firefox Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Stattdessen sollten Sie die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented)-Eigenschaft verwenden, um zu bestimmen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre Eigenschaft `Navigator.mozNotification` und das `DesktopNotification`-Interface wurden entfernt, zugunsten der Standard-[Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) ([Firefox Bug 952453](https://bugzil.la/952453)).
- Die proprietäre Methode `window.external.addSearchEngine()` wurde entfernt ([Firefox Bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für mehr Details.
- Die nicht standardisierte Firefox-exklusive [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Die Unterstützung für das `accessKey`-Feature von SMIL wurde entfernt ([Firefox Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Die Unterstützung für die nicht standardisierten Protokolle `pcast:` und `feed:` wurde aus Firefox entfernt ([Firefox Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Updates:
  - Neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - Alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Arrays als auch CSS-Farbwerte.

- Neue [Browser-Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):
  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)-APIs:
  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus)-API unterstützt jetzt einen ["bookmark"-Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts)-API ermöglicht die Registrierung von Inhaltsskripten zur Laufzeit.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)-APIs:
  - Funktionen `browserAction/pageAction/sidebarAction.set*` akzeptieren jetzt `null`, um Änderungen rückgängig zu machen.
  - Funktionen [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen).

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um Seitenaktionen standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:
  - "ssb" für Secure Scuttlebutt-Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue Einstellung "cookieConfig" in [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites).
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies)-API für [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
