---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt der Reiter "Response" nun eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an – wenn die Antwort HTML ist ([Firefox Bug 1353319](https://bugzil.la/1353319)).
- Die im Storage Inspector angezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) beinhalten jetzt eine _sameSite_ Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox Bug 1298370](https://bugzil.la/1298370)).
- Das [Rulers](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) Werkzeug zeigt jetzt die aktuellen Abmessungen des Viewport an ([Firefox Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie nun die Bildschirmabmessungen mit den Cursortasten einstellen ([Firefox Bug 1421663](https://bugzil.la/1421663)). Weitere Details finden Sie im Abschnitt [Setting screen size](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- Die Anzeige _Raw headers_ im Reiter _Headers_ des [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) umfasst jetzt den Statuscode der Antwort ([Firefox Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete) des {{HTMLElement("textarea")}} Elements wurde implementiert. Damit können Sie das automatische Ausfüllen von Formularen für das Element aktivieren oder deaktivieren.

### CSS

- Die Eigenschaft {{cssxref("overscroll-behavior")}} und ihre zugehörigen Langform-Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Bug 951793](https://bugzil.la/951793)) und standardmäßig in allen Versionen aktiviert ([Firefox Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht ausschließlich durch CSS-Box-Konzepte wie ersetzte Elemente gerendert werden) bei einem {{cssxref("display")}} Wert von `contents` wurde gemäß Spezifikation aktualisiert ([Firefox Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Effekte von display: contents auf Ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die genau spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird nun auf geeigneten Teilen von [HTML table](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) unterstützt (z.B. {{htmlelement("th")}} Elementen) ([Firefox Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird nun in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} wird nun in [Media Query](/de/docs/Web/CSS/CSS_media_queries) Werten unterstützt ([Firefox Bug 1396057](https://bugzil.la/1396057)).
- Die {{cssxref("@document")}} Regel ist nun auf die Verwendung in User- und UA-Stilvorlagen beschränkt ([Firefox Bug 1035091](https://bugzil.la/1035091)).
- Die Eigenschaft {{cssxref("font-optical-sizing")}} wurde implementiert ([Firefox Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) Konstruktor wurde implementiert ([Firefox Bug 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response) Konstruktor kann nun einen `null` Wert für seinen `body` Parameter akzeptieren, gemäß Spezifikation ([Firefox Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Events

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox Bug 1412775](https://bugzil.la/1412775)).

#### Service-Worker

- Der Service-Worker [Clients API](/de/docs/Web/API/Clients) kann nun Fenster in einem separaten Browser-Prozess finden und mit ihnen kommunizieren ([Firefox Bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc iframes erben nun den controlling Service Worker ihres übergeordneten Elements. Behoben in ([Firefox Bug 1293277](https://bugzil.la/1293277)) und ([Firefox Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service-Worker eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) liefert, wird der [`Response.url`](/de/docs/Web/API/Response/url) Wert nun an die abgefangene Netzwerkanfrage als endgültige aufgelöste URL weitergegeben. In der Vergangenheit wurde dafür [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet z.B., wenn ein Service-Worker ein Stylesheet oder Worker-Skript abfängt, wird die bereitgestellte `Response.url` verwendet, um alle relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcen zu laden ([Firefox Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` löst jetzt einen Netzwerkfehler aus, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist ([Firefox Bug 1222008](https://bugzil.la/1222008)).

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und den entsprechenden Ereignishandlern, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted`-Status eines Tracks zeigt an, dass der Track momentan nicht in der Lage ist, Mediendaten bereitzustellen.

  > [!NOTE]
  > Der `muted`-Status eines Tracks ist nicht nützlich für das, was typischerweise als Stummschalten und Einschalten eines Tracks angesehen wird. Stattdessen sollten Sie die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwenden; das Setzen von `enabled` auf `false` führt dazu, dass der Track nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt das Apple HTTPS Live Streaming (HLS) Protokoll für sowohl Audio als auch Video. Dieses nicht standardisierte Protokoll wird auf mobilen Geräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die es für das mobile Streaming erfordern. Es gibt derzeit keine Pläne, es in Firefox Desktop zu implementieren.
- Die Methoden [`RTCRtpReceiver.getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams zu liefern. Allerdings fand vor der Veröffentlichung eine Änderung in der Spezifikation statt, und wir haben diese standardmäßig hinter der Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Bug 1363667](https://bugzil.la/1363667), [Firefox Bug 1430213](https://bugzil.la/1430213), und [Firefox Bug 1433236](https://bugzil.la/1433236)).
- Die Schnittstelle [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) wurde jetzt implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceiver unterstützt, mit `RTCPeerConnection` und anderen Schnittstellen, die aktualisiert wurden, um sie gemäß der neuesten Spezifikation zu verwenden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Darüber hinaus wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt nun WebVTT `REGION` Definitionsblöcke, deren Einstellungslisten eine Einstellung pro Zeile enthalten, anstatt dass alle Einstellungen in derselben Zeile der WebVTT-Datei sind ([Firefox Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die Schnittstelle [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) und ihre Eigenschaften `namespaceURL` und `prefix` wurden implementiert ([Firefox Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Navigation auf oberster Ebene zu `data:` URLs wurde blockiert ([Firefox Bug 1401895](https://bugzil.la/1401895)). Weitere Details siehe [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).
- Die `SAMEORIGIN` Direktive des {{httpheader("X-Frame-Options")}} Headers wurde so geändert, dass nicht nur das IFrame auf oberster Ebene in derselben Herkunft überprüft wird, sondern auch alle seine Vorfahren ([Firefox Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die aus anderen Herkünften als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)).
- HTTP-Authentifizierung verwendet jetzt die `utf-8` Kodierung für Benutzernamen und Passwörter (anstelle von `ISO-8859-1`) für die Parität mit anderen Browsern und um potenziellen Problemen, wie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben, vorzubeugen.
- Täglich wird die [HSTS Preload Liste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise ist dies keine Erwähnung wert, aber in dieser Version wurden neue TLDs aufgenommen, insbesondere `.app` und `.dev`. Obwohl sie neue TLDs sind, haben Entwickler sie möglicherweise für lokale Entwicklungsumgebungen verwendet und könnten von dieser Änderung überrascht sein. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) stattdessen für lokale Entwicklungen verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### HTML

Der nicht-standardisierte `version` Parameter des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des {{htmlelement("script")}} Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden auf die Verwendung in Chrome-Code beschränkt ([Firefox Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Die nicht-standardisierten [bedingten Catch-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Stattdessen sollten Sie die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification` Eigenschaft und die `DesktopNotification` Schnittstelle wurden zugunsten der standardisierten [Notifications API](/de/docs/Web/API/Notifications_API) entfernt ([Firefox Bug 952453](https://bugzil.la/952453)).
- Die proprietäre `window.external.addSearchEngine()` Methode wurde entfernt ([Firefox Bug 862147](https://bugzil.la/862147)). Weitere Details finden Sie unter [`Window.external`](/de/docs/Web/API/Window/external).
- Die nicht standardisierte ausschließlich Firefox-spezifische [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Unterstützung für SMILs `accessKey` Funktion wurde entfernt ([Firefox Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Unterstützung für die nicht standardisierten `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-ons und Mozilla-Entwickler

### WebExtensions

- [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Aktualisierungen:

  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Arrays als auch CSS-Farbwerte.

- Neue [browser settings](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API unterstützt jetzt einen ["Lesezeichen-Kontext"](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Eine neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Laufzeitregistrierung von Inhalts-Skripten.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:

  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren jetzt `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um Page Actions standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
