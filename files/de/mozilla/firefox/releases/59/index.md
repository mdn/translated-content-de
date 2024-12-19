---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Auswirkungen auf Entwickler haben werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt im Antwort-Tab eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) — wenn die Antwort HTML ist ([Firefox-Bug 1353319](https://bugzil.la/1353319)).
- Die in der Speichern-Inspektor gezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) umfassen jetzt eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox-Bug 1298370](https://bugzil.la/1298370)).
- Das [Lineale](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) Werkzeug enthält jetzt eine Anzeige, die die aktuellen Abmessungen des Ansichtsfensters zeigt ([Firefox-Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmabmessungen mit den Pfeiltasten festlegen ([Firefox-Bug 1421663](https://bugzil.la/1421663)). Weitere Details finden Sie im Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- Die Anzeige _Rohüberschriften_ im _Headers_-Tab des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt den Statuscode der Antwort ([Firefox-Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das {{HTMLElement("textarea")}} Element hat jetzt das Attribut [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete) implementiert. Damit können Sie die automatische Formularvervollständigung für das Element ein- oder ausschalten.

### CSS

- Die {{cssxref("overscroll-behavior")}} Eigenschaft und die zugehörigen Langform-Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox-Bug 951793](https://bugzil.la/951793)) und sie ist standardmäßig in allen Versionen aktiviert ([Firefox-Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten "außergewöhnlicher Elemente" (Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden wie ersetzte Elemente), wenn ihnen ein {{cssxref("display")}} Wert von `contents` zugewiesen wird, wurde gemäß der Spezifikation aktualisiert ([Firefox-Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf außergewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die genau spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird jetzt auf geeigneten Teilen von [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) unterstützt (z.B. {{htmlelement("th")}} Elemente) ([Firefox-Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird jetzt in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox-Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} wird nun auch in [Media Queries](/de/docs/Web/CSS/CSS_media_queries) unterstützt ([Firefox-Bug 1396057](https://bugzil.la/1396057)).
- Die {{cssxref("@document")}} Regel wurde auf die Verwendung in Benutzer- und UA-Stilen beschränkt ([Firefox-Bug 1035091](https://bugzil.la/1035091)).
- Die {{cssxref("font-optical-sizing")}} Eigenschaft wurde implementiert ([Firefox-Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox-Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) Konstruktor wurde implementiert ([Firefox-Bug 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response) Konstruktor kann nun einen `null` Wert für seinen `body` Parameter akzeptieren, gemäß der Spezifikation ([Firefox-Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox-Bug 1412775](https://bugzil.la/1412775)).

#### Service Workers

- Der Service Worker [Clients API](/de/docs/Web/API/Clients) kann jetzt Fenster in einem separaten Browser-Prozess finden und mit ihnen kommunizieren ([Firefox-Bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc IFrames werden nun den kontrollierenden Service Worker ihres Elternteils erben. Behoben in ([Firefox-Bug 1293277](https://bugzil.la/1293277)) und ([Firefox-Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) zu [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereitstellt, wird der Wert von [`Response.url`](/de/docs/Web/API/Response/url) nun zur abgefangenen Netzwerkanfrage als endgültige aufgelöste URL weitergegeben. In der Vergangenheit wurde hierfür [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet zum Beispiel, wenn ein Service Worker ein Stylesheet oder ein Workerskript abfängt, wird die bereitgestellte `Response.url` verwendet, um alle relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcenladevorgänge aufzulösen ([Firefox-Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird nun einen Netzwerkfehler auslösen, wenn [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox-Bug 1222008](https://bugzil.la/1222008)).

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und den entsprechenden Ereignis-Handlern, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted` Zustand einer Spur zeigt an, dass die Spur momentan nicht in der Lage ist, Mediendaten bereitzustellen.

  > [!NOTE]
  > Der `muted` Zustand einer Spur ist nicht nützlich für das, was typischerweise als Stummschalten und Aufheben der Stummschaltung einer Spur gedacht ist. Stattdessen verwenden Sie die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft; das Setzen von `enabled` auf `false` bewirkt, dass die Spur nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt nun das HTTPS Live Streaming (HLS) Protokoll von Apple sowohl für Audio als auch für Video. Dieses nicht-standardisierte Protokoll wird auf mobilen Geräten unterstützt, um die Kompatibilität mit Seiten zu verbessern, die es für mobiles Streaming erfordern. Derzeit gibt es keinen Plan, es in Firefox Desktop zu implementieren.
- Die Methoden [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Eine Spezifikationsänderung trat jedoch vor der Veröffentlichung auf, und wir haben diese standardmäßig hinter der Einstellung `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox-Bug 1363667](https://bugzil.la/1363667), [Firefox-Bug 1430213](https://bugzil.la/1430213), und [Firefox-Bug 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Schnittstelle wurde nun implementiert, da die Firefox-Implementierung von WebRTC nun Transceiver unterstützt, und `RTCPeerConnection` sowie andere Schnittstellen entsprechend der neuesten Spezifikation aktualisiert wurden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Darüber hinaus wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox-Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt jetzt WebVTT `REGION` Definitionsblöcke, deren Einstellungsübersicht jede Einstellung pro Zeile hat, anstatt alle Einstellungen auf derselben Zeile der WebVTT-Datei ([Firefox-Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) Schnittstelle und ihre `namespaceURL` und `prefix` Eigenschaften wurden implementiert ([Firefox-Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Navigation auf oberster Ebene zu `data:` URLs wurde blockiert ([Firefox-Bug 1401895](https://bugzil.la/1401895)). Siehe [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für weitere Details.
- Die `SAMEORIGIN` Direktive des {{httpheader("X-Frame-Options")}} Headers wurde geändert, sodass sie nicht nur das oberste IFrame überprüft, sondern alle seine Vorfahren ([Firefox-Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)).
- HTTP-Authentifizierung verwendet jetzt `utf-8` Kodierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`) um Parität mit anderen Browsern zu erreichen und um potenzielle Probleme wie in [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben zu vermeiden.
- Jeden Tag wird die [HSTS preload list](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise ist dies keine Erwähnung wert, aber in dieser Version wurden neue TLDs hinzugefügt, insbesondere `.app` und `.dev`. Da sie neue TLDs sind, könnten Entwickler überrascht sein, dass sie sie für die lokale Entwicklung verwendet haben. Bitte beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Web-Plattform

### HTML

Der nicht-standardisierte `version` Parameter des [`type`](/de/docs/Web/HTML/Element/script#type) Attributs des {{htmlelement("script")}} Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox-Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox-Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden auf die Verwendung im Chrome-Code beschränkt ([Firefox-Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht-standardisierte [bedingte Catch-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox-Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht-standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Sie sollten stattdessen die Eigenschaft [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification` Eigenschaft und die `DesktopNotification` Schnittstelle wurden zugunsten der standardmäßigen [Notifications API](/de/docs/Web/API/Notifications_API) entfernt ([Firefox-Bug 952453](https://bugzil.la/952453)).
- Die proprietäre Methode `window.external.addSearchEngine()` wurde entfernt ([Firefox-Bug 862147](https://bugzil.la/862147)). Weitere Details finden Sie unter [`Window.external`](/de/docs/Web/API/Window/external).
- Die nicht-standardisierte Firefox-exklusive [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Unterstützung für SMILs `accessKey` Funktion wurde entfernt ([Firefox-Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Unterstützung für die nicht-standardisierten `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox-Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Aktualisierungen:

  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Style-Arrays als auch CSS-Farbwerte.

- Neue [Browser-Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API unterstützt jetzt ein ["bookmark" Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Registrierung von Inhalts-Scripts zur Laufzeit.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:

  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren jetzt `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um Seitenaktionen standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung im [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` im [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
