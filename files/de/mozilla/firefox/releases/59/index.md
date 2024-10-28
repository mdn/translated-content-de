---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 83266dac8d670b493141002c825f7fb8876dd29d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 59, die Entwickler betreffen. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt im Antwort-Tab nun eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview), wenn die Antwort HTML ist ([Firefox Fehler 1353319](https://bugzil.la/1353319)).
- Cookie-Informationen im Speicher-Inspektor (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) beinhalten jetzt eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox Fehler 1298370](https://bugzil.la/1298370)).
- Das [Lineal](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) Werkzeug zeigt nun die aktuellen Dimensionen des Viewports an ([Firefox Fehler 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmdimensionen mit den Cursortasten einstellen ([Firefox Fehler 1421663](https://bugzil.la/1421663)). Weitere Details finden Sie im Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- Die Anzeige _Raw headers_ im _Headers_ Tab des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) beinhaltet jetzt den Statuscode der Antwort ([Firefox Fehler 1419401](https://bugzil.la/1419401)).

### HTML

- Das {{HTMLElement("textarea")}} Element unterstützt jetzt das [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete) Attribut. Dies ermöglicht es, das automatische Ausfüllen des Formulars für das Element zu aktivieren oder zu deaktivieren.

### CSS

- Die {{cssxref("overscroll-behavior")}} Eigenschaft und ihre assoziierten Langhand-Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Fehler 951793](https://bugzil.la/951793)) und standardmäßig in allen Versionen aktiviert ([Firefox Fehler 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht ausschließlich durch CSS-Boxen-Konzepte gerendert werden, wie ersetzte Elemente), wenn ihnen ein {{cssxref("display")}} Wert von `contents` zugewiesen wurde, wurde gemäß der Spezifikation aktualisiert ([Firefox Fehler 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Effekte von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird nun auf entsprechenden [HTML-Tabellen](/de/docs/Learn/HTML/Tables) Teilen unterstützt (z.B. {{htmlelement("th")}} Elemente) ([Firefox Fehler 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird nun in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Fehler 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Query](/de/docs/Web/CSS/CSS_media_queries) Werten wird nun unterstützt [Firefox Fehler 1396057](https://bugzil.la/1396057).
- Die {{cssxref("@document")}} At-Regel wurde auf die Verwendung nur in Benutzer- und UA-Stylesheets beschränkt ([Firefox Fehler 1035091](https://bugzil.la/1035091)).
- Die {{cssxref("font-optical-sizing")}} Eigenschaft wurde implementiert ([Firefox Fehler 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox für den Desktop aktiviert ([Firefox Fehler 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) Konstruktor wurde implementiert ([Firefox Fehler 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response) Konstruktor kann nun einen `null` Wert für seinen `body` Parameter akzeptieren, gemäß der Spezifikation ([Firefox Fehler 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) Methode wurde implementiert ([Firefox Fehler 1412775](https://bugzil.la/1412775)).

#### Service Workers

- Der Service Worker [Clients API](/de/docs/Web/API/Clients) kann nun Fenster in einem separaten Browser-Prozess finden und mit ihnen kommunizieren ([Firefox Fehler 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc IFrames erben nun den Service Worker des Elternteils. Korrigiert in ([Firefox Fehler 1293277](https://bugzil.la/1293277)) und ([Firefox Fehler 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) liefert, wird der [`Response.url`](/de/docs/Web/API/Response/url) Wert nun an die abgefangene Netzwerkanforderung als endgültige aufgelöste URL weitergegeben. In der Vergangenheit wurde hierfür [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet zum Beispiel, wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt, wird die bereitgestellte `Response.url` verwendet, um relative {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcen zu laden ([Firefox Fehler 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird nun einen Netzwerkfehler auslösen, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) auf `"same-origin"` gesetzt ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox Fehler 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) sowie die Ereignisse [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und die entsprechenden Ereignishandler [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) wurden implementiert. Der `muted` Zustand einer Spur zeigt an, dass die Spur derzeit keine Mediendaten liefern kann.

  > [!NOTE]
  > Der `muted` Zustand einer Spur ist nicht nützlich für das, was typischerweise als Stumm- und Lautschaltung einer Spur angesehen wird. Verwenden Sie stattdessen die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft; das Setzen von `enabled` auf `false` bewirkt, dass die Spur nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt Apples HTTPS Live Streaming (HLS)-Protokoll sowohl für Audio als auch Video. Dieses nicht-standardisierte Protokoll wird auf mobilen Geräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die es für mobiles Streaming benötigen. Derzeit gibt es keine Pläne, es auf Firefox Desktop zu implementieren.
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Es gab jedoch vor der Veröffentlichung eine Änderung in der Spezifikation, und wir haben diese standardmäßig hinter der Einstellung `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Fehler 1363667](https://bugzil.la/1363667), [Firefox Fehler 1430213](https://bugzil.la/1430213), und [Firefox Fehler 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Schnittstelle wurde implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceiver unterstützt, wobei `RTCPeerConnection` und andere Schnittstellen aktualisiert wurden, um sie gemäß der neuesten Spezifikation zu verwenden.
- Die [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) Methode wurde hinzugefügt. Zudem wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Die Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox Fehler 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt nun WebVTT `REGION` Definitionsblöcke, deren Einstellungsliste eine Einstellung pro Zeile statt alle Einstellungen in einer Zeile der WebVTT-Datei aufweist ([Firefox Fehler 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) Schnittstelle und ihre `namespaceURL` und `prefix` Eigenschaften wurden implementiert ([Firefox Fehler 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Navigation auf oberster Ebene zu `data:` URLs wurde blockiert ([Firefox Fehler 1401895](https://bugzil.la/1401895)). Siehe [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für weitere Details.
- Die `SAMEORIGIN` Direktive des {{httpheader("X-Frame-Options")}} Headers wurde so geändert, dass sie nicht nur überprüft, ob das übergeordnete IFrame im gleichen Ursprung ist, sondern auch alle seine Vorfahren ([Firefox Fehler 725490](https://bugzil.la/725490)).
- Bildressourcen, die von einer anderen Domäne als das aktuelle Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Fehler 1423146](https://bugzil.la/1423146)).
- HTTP-Authentifizierung verwendet nun `utf-8` Kodierung für Benutzernamen und Passwörter (anstelle von `ISO-8859-1`) für Parität mit anderen Browsern und zur Vermeidung potenzieller Probleme wie in [Firefox Fehler 1419658](https://bugzil.la/1419658) beschrieben.
- Der [HSTS Preload List](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) wird täglich von Google aktualisiert. Normalerweise ist dies nicht erwähnenswert, aber in dieser Version wurden neue TLDs eingeschlossen, insbesondere `.app` und `.dev`. Während sie neue TLDs sind, könnten Entwickler sie für die lokale Entwicklung genutzt haben und durch diese Änderung überrascht werden. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) stattdessen für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### HTML

Der nicht standardisierte `version` Parameter des {{htmlelement("script")}} Elements für das [`type`](/de/docs/Web/HTML/Element/script#type) Attribut (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Fehler 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox Fehler 1416564](https://bugzil.la/1416564)).
- Die proprietären `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors`, und `-moz-border-left-colors` Eigenschaften wurden auf die Verwendung nur in Chrome-Code beschränkt ([Firefox Fehler 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht-standardisierte [bedingte catch-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox Fehler 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Sie sollten stattdessen die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification` Eigenschaft und das `DesktopNotification` Interface wurden zugunsten der standardisierten [Notifications API](/de/docs/Web/API/Notifications_API) entfernt ([Firefox Fehler 952453](https://bugzil.la/952453)).
- Die proprietäre `window.external.addSearchEngine()` Methode wurde entfernt ([Firefox Fehler 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für weitere Details.
- Die nicht standardisierte ausschließlich in Firefox vorhandene [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Die Unterstützung für das SMIL-Feature `accessKey` wurde entfernt ([Firefox Fehler 1423098](https://bugzil.la/1423098)).

### Sonstiges

Die Unterstützung für die nicht standardisierten `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox Fehler 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Updates:

  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Stil Arrays als auch CSS-Farbwerte.

- Neue [Browsereinstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API unterstützt jetzt einen ["bookmark" Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Registrierung von Inhalts-Skripten zur Laufzeit.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:

  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren jetzt `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um page actions standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt Kommunikationen
  - "dat" für DATprojekt
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
