---
title: Firefox 59 für Entwickler
short-title: Firefox 59
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt im Reiter "Antwort" nun eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview), wenn die Antwort HTML ist ([Firefox-Bug 1353319](https://bugzil.la/1353319)).
- Die im Speicherinspektor angezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) beinhalten jetzt eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox-Bug 1298370](https://bugzil.la/1298370)).
- Das [Lineal](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html)-Werkzeug zeigt jetzt die aktuellen Abmessungen des Ansichtsfensters an ([Firefox-Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmabmessungen mit den Cursortasten einstellen ([Firefox-Bug 1421663](https://bugzil.la/1421663)). Weitere Einzelheiten finden Sie im Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- Die Anzeige der _Raw headers_ im Reiter _Headers_ des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) beinhaltet jetzt den Statuscode der Antwort ([Firefox-Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das {{HTMLElement("textarea")}} Element unterstützt jetzt das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete) Attribut. Dies ermöglicht es, die automatische Formularausfüllung für das Element zu aktivieren oder zu deaktivieren.

### CSS

- Die {{cssxref("overscroll-behavior")}} Eigenschaft und ihre zugehörigen langformigen Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox-Bug 951793](https://bugzil.la/951793)) und sind standardmäßig in allen Versionen aktiviert ([Firefox-Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente) wurde aktualisiert, wenn ein {{cssxref("display")}} Wert von `contents` zugewiesen wird, gemäß Spezifikation ([Firefox-Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die genauen spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird jetzt auf geeigneten Teilen von [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) unterstützt (z.B. {{htmlelement("th")}} Elemente) ([Firefox-Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird jetzt in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox-Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} wird jetzt in [Media-Query](/de/docs/Web/CSS/CSS_media_queries) Werten unterstützt [Firefox-Bug 1396057](https://bugzil.la/1396057).
- Die {{cssxref("@document")}} Regel wurde darauf beschränkt, nur in Nutzer- und UA-Stylesheets verwendet zu werden ([Firefox-Bug 1035091](https://bugzil.la/1035091)).
- Implementierung der {{cssxref("font-optical-sizing")}} Eigenschaft ([Firefox-Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox-Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) Konstruktor wurde implementiert ([Firefox-Bug 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response) Konstruktor kann jetzt einen `null` Wert für seinen `body` Parameter akzeptieren, gemäß Spezifikation ([Firefox-Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) Methode wurde implementiert ([Firefox-Bug 1412775](https://bugzil.la/1412775)).

#### Service Worker

- Der Service-Worker [Clients API](/de/docs/Web/API/Clients) kann nun Fenster in einem separaten Browserprozess finden und mit ihnen kommunizieren ([Firefox-Bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc Iframes werden jetzt den übergeordneten Service Worker übernehmen. Geändert in ([Firefox-Bug 1293277](https://bugzil.la/1293277)) und ([Firefox-Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) zu [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereitstellt, wird der [`Response.url`](/de/docs/Web/API/Response/url) Wert jetzt an die abgefangene Netzwerk-Anfrage als endgültige aufgelöste URL weitergeleitet. In der Vergangenheit wurde hierfür [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet zum Beispiel, wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt, dann wird `Response.url` verwendet, um alle relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subresource-Ladungen zu lösen ([Firefox-Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird nun einen Netzwerkfehler auslösen, wenn [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) "same-origin" ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) "cors" ist. ([Firefox-Bug 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) sowie den dazugehörigen Ereignis-Handlern, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted` Zustand eines Tracks zeigt an, dass der Track momentan keine Mediendaten liefern kann.

  > [!NOTE]
  > Der `muted` Zustand eines Tracks ist nicht nützlich für das, was üblicherweise als Stummschalten und Aufheben der Stummschaltung eines Tracks gedacht ist. Verwenden Sie stattdessen die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft; das Setzen von `enabled` auf `false` führt dazu, dass der Track nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt nun Apples HTTPS Live Streaming (HLS) Protokoll für sowohl Audio- als auch Videostreaming. Dieses nicht-standardisierte Protokoll wird auf mobilen Geräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die es für mobiles Streaming erfordern. Es gibt derzeit keine Pläne, es in Firefox Desktop zu implementieren.
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams zu bieten. Allerdings gab es eine Spezifikationsänderung vor der Veröffentlichung, und wir haben diese standardmäßig hinter der Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox-Bug 1363667](https://bugzil.la/1363667), [Firefox-Bug 1430213](https://bugzil.la/1430213), und [Firefox-Bug 1433236](https://bugzil.la/1433236)).
- Das [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Interface wurde nun implementiert, da die Firefox-Implementierung von WebRTC nun Transceiver unterstützt, wobei `RTCPeerConnection` und andere Schnittstellen gemäß der neuesten Spezifikation aktualisiert wurden.
- Die [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) Methode wurde hinzugefügt. Außerdem wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, war aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox-Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt nun WebVTT `REGION` Definitionsblöcke, deren Einstellungslisten eine Einstellung pro Zeile enthalten, anstatt alle Einstellungen in derselben Zeile der WebVTT-Datei ([Firefox-Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Das [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) Interface und seine `namespaceURL` und `prefix` Eigenschaften wurden implementiert ([Firefox-Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Navigation auf oberster Ebene zu `data:` URLs wurde blockiert [Firefox-Bug 1401895](https://bugzil.la/1401895). Weitere Einzelheiten finden Sie unter [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).
- Die `SAMEORIGIN` Direktive des {{httpheader("X-Frame-Options")}} Headers wurde geändert, sodass nicht nur das IFrame auf oberster Ebene im selben Ursprung ist, sondern auch alle dessen Vorfahren ([Firefox-Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die aus anderen Ursprüngen als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox-Bug 1423146](https://bugzil.la/1423146)).
- Die HTTP-Authentifizierung verwendet nun `utf-8` Kodierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`), um gleiche Bedingungen mit anderen Browsern zu schaffen und potenzielle Probleme zu vermeiden, wie in [Firefox-Bug 1419658](https://bugzil.la/1419658) beschrieben.
- Täglich wird die [HSTS-Preload-Liste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise ist dies keine Erwähnung wert, aber in dieser Version wurden neue TLDs eingeschlossen, insbesondere `.app` und `.dev`. Während sie neue TLDs sind, könnten Entwickler sie für lokale Entwicklung genutzt haben und von dieser Änderung überrascht sein. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) stattdessen für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernung von der Webplattform

### HTML

Das nicht-standardisierte `version` Parameter des {{htmlelement("script")}} Elements im [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attribut (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox-Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox-Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors`, und `-moz-border-left-colors` wurden auf die Verwendung im Chrome-Code beschränkt ([Firefox-Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Die nicht standardmäßigen bedingten catch-Klauseln wurden entfernt ([Firefox-Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht standardmäßige Methode `Event.getPreventDefault()` wurde entfernt. Sie sollten stattdessen die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft verwenden, um zu bestimmen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) bei dem [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification` Eigenschaft und die `DesktopNotification` Schnittstelle wurden entfernt, zugunsten der standardisierten [Notifications API](/de/docs/Web/API/Notifications_API) ([Firefox-Bug 952453](https://bugzil.la/952453)).
- Die proprietäre Methode `window.external.addSearchEngine()` wurde entfernt ([Firefox-Bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für weitere Details.
- Die nicht standardmäßige Firefox-spezifische [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Unterstützung für das `accessKey` Feature von SMIL wurde entfernt ([Firefox-Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Unterstützung für die nicht standardmäßigen `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox-Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on und Mozilla Entwickler

### WebExtensions

- [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Updates:
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

- Die `contextMenus` API unterstützt nun einen ["bookmark" Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Registrierung von Contentskripten zur Laufzeit.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:
  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren jetzt `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) um Seitenaktionen standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:
  - "ssb" für Secure Scuttlebutt Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
