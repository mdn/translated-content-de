---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 25544baf59024e6b33879f4b303acf4539a94415
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Reiter „Antwort“ im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an — wenn die Antwort HTML ist ([Firefox Bug 1353319](https://bugzil.la/1353319)).
- Cookie-Informationen, die im Speicherinspektor angezeigt werden (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)), enthalten jetzt eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox Bug 1298370](https://bugzil.la/1298370)).
- Das [Rulers](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) Werkzeug enthält jetzt eine Anzeige, die die aktuellen Abmessungen des Ansichtsfensters zeigt ([Firefox Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmabmessungen mit den Cursortasten festlegen ([Firefox Bug 1421663](https://bugzil.la/1421663)). Weitere Details finden Sie im Abschnitt [Screengröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- Die Anzeige _Raw headers_ im Reiter _Headers_ des [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun den Statuscode der Antwort an ([Firefox Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das Attribut [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete) des {{HTMLElement("textarea")}} Elements wurde implementiert. Dies ermöglicht das Aktivieren oder Deaktivieren der Formular-Autovervollständigung für das Element.

### CSS

- Die {{cssxref("overscroll-behavior")}} Eigenschaft und ihre zugehörigen Langform-Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Bug 951793](https://bugzil.la/951793)) und standardmäßig in allen Versionen aktiviert ([Firefox Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht ausschließlich durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente) mit einem {{cssxref("display")}} Wert von `contents` wurde gemäß Spezifikation aktualisiert ([Firefox Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Effekte von display: contents auf Ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die spezifisch festgelegten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird jetzt auf geeigneten [HTML Tabellen](/de/docs/Learn/HTML/Tables) Teilen unterstützt (z.B. {{htmlelement("th")}} Elemente) ([Firefox Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird jetzt in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Query](/de/docs/Web/CSS/CSS_media_queries) Werten wird jetzt unterstützt [Firefox Bug 1396057](https://bugzil.la/1396057).
- Die {{cssxref("@document")}} Regel wurde auf die Verwendung nur in Benutzer- und UA-Stilen beschränkt ([Firefox Bug 1035091](https://bugzil.la/1035091)).
- Die {{cssxref("font-optical-sizing")}} Eigenschaft wurde implementiert ([Firefox Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) Konstruktor wurde implementiert ([Firefox Bug 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response) Konstruktor kann jetzt einen `null` Wert für seinen `body` Parameter akzeptieren, gemäß Spezifikation ([Firefox Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) Methode wurde implementiert ([Firefox Bug 1412775](https://bugzil.la/1412775)).

#### Service Workers

- Die Service Worker [Clients API](/de/docs/Web/API/Clients) kann jetzt Fenster in einem separaten Browserprozess finden und mit ihnen kommunizieren ([Firefox Bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc iFrames erben jetzt den steuernden Service Worker ihres Elternteils. Behoben in ([Firefox Bug 1293277](https://bugzil.la/1293277)) und ([Firefox Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) auf [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereitstellt, wird der [`Response.url`](/de/docs/Web/API/Response/url) Wert jetzt zur abgefangenen Netzwerkanfrage als endgültige aufgelöste URL übermittelt. In der Vergangenheit wurde dafür die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet beispielsweise, dass wenn ein Service Worker ein Stylesheet oder Worker-Skript abfängt, dann die bereitgestellte `Response.url` verwendet wird, um alle relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcenladeanfragen aufzulösen ([Firefox Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` löst jetzt einen Netzwerkfehler aus, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist ([Firefox Bug 1222008](https://bugzil.la/1222008)).

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und den entsprechenden Ereignishandlern, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted` Zustand eines Tracks zeigt an, dass der Track derzeit keine Mediendaten bereitstellen kann.

  > [!NOTE]
  > Der `muted` Zustand eines Tracks ist nicht nützlich für das, was typischerweise als Stummschalten und Aufheben der Stummschaltung eines Tracks angesehen wird. Verwenden Sie stattdessen die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft; das Setzen von `enabled` auf `false` führt dazu, dass der Track nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt das HTTPS Live Streaming (HLS) Protokoll von Apple für sowohl Audio als auch Video. Dieses nicht standardmäßige Protokoll wird auf Mobilgeräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die dies für mobiles Streaming erfordern. Derzeit gibt es keinen Plan, es in Firefox Desktop zu implementieren.
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Aufgrund einer Spezifikationsänderung vor der Veröffentlichung haben wir diese jedoch standardmäßig hinter der Einstellung `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Bug 1363667](https://bugzil.la/1363667), [Firefox Bug 1430213](https://bugzil.la/1430213), und [Firefox Bug 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Schnittstelle wurde jetzt implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceiver unterstützt und `RTCPeerConnection` und andere Schnittstellen gemäß der neuesten Spezifikation aktualisiert wurden, um sie zu verwenden.
- Die [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) Methode wurde hinzugefügt. Darüber hinaus wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Die Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt jetzt WebVTT `REGION` Definitionsblöcke, deren Einstellungsliste eine Einstellung pro Zeile hat, anstatt dass alle Einstellungen in der gleichen Zeile der WebVTT-Datei stehen müssen ([Firefox Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) Schnittstelle und ihre `namespaceURL` und `prefix` Eigenschaften wurden implementiert ([Firefox Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Top-Level-Navigation zu `data:` URLs wurde blockiert ([Firefox Bug 1401895](https://bugzil.la/1401895)). Weitere Details finden Sie unter [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).
- Die `SAMEORIGIN` Direktive des {{httpheader("X-Frame-Options")}} Headers wurde geändert, sodass sie nicht nur überprüft, ob der oberste IFrame im gleichen Ursprung ist, sondern auch alle seine Vorfahren ([Firefox Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die aus verschiedenen Ursprüngen als das aktuelle Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)).
- Die HTTP-Authentifizierung verwendet jetzt `utf-8` Kodierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`), um mit anderen Browsern im Einklang zu stehen und potenzielle Probleme zu vermeiden, wie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben.
- Täglich wird die [HSTS Preload-Liste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise ist dies nicht erwähnenswert, aber in dieser Version wurden neue TLDs aufgenommen, insbesondere `.app` und `.dev`. Da sie neue TLDs sind, könnten Entwickler sie für lokale Entwicklung verwendet haben und von dieser Änderung überrascht werden. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) stattdessen für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Web-Plattform

### HTML

Der nicht standardmäßige `version` Parameter des [`type`](/de/docs/Web/HTML/Element/script#type) Attributs des {{htmlelement("script")}} Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors`, und `-moz-border-left-colors` Eigenschaften sind jetzt auf die Verwendung im Chrome-Code beschränkt ([Firefox Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht standardmäßige [bedingte Fange-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht standardmäßig Methode `Event.getPreventDefault()` wurde entfernt. Stattdessen sollten Sie die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre [`Navigator.mozNotification`](/de/docs/Archive/API/Navigator/mozNotification) Eigenschaft und die `DesktopNotification` Schnittstelle wurden zugunsten der Standard [Notifications API](/de/docs/Web/API/Notifications_API) entfernt ([Firefox Bug 952453](https://bugzil.la/952453)).
- Die proprietäre `window.external.addSearchEngine()` Methode wurde entfernt ([Firefox Bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für weitere Details.
- Die nicht standardmäßige, nur in Firefox vorhandene [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Unterstützung für die `accessKey` Funktionalität von SMIL wurde entfernt ([Firefox Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Unterstützung für die nicht standardmäßigen `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Updates:

  - Neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - Alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Stil-Arrays als auch CSS-Farbwerte.

- Neue [Browser-Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API unterstützt jetzt einen ["bookmark" context](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Registrierung von Inhalts-Scripts zur Laufzeit.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:

  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren jetzt `null` um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) zur Standardanzeige von Page-Actions.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
