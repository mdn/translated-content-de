---
title: Firefox 59 Versionshinweise für Entwickler
short-title: Firefox 59
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel liefert Informationen zu den Änderungen in Firefox 59, die Entwickler beeinflussen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt im Antwort-Tab jetzt eine [Vorschau des gerenderten HTMLs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an — falls die Antwort HTML ist ([Firefox Bug 1353319](https://bugzil.la/1353319)).
- In den im Speicherinspektor angezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) gibt es jetzt eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies zeigt ([Firefox Bug 1298370](https://bugzil.la/1298370)).
- Das [Lineal-Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) zeigt jetzt die aktuellen Dimensionen des Viewports an ([Firefox Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmabmessungen mit den Pfeiltasten einstellen ([Firefox Bug 1421663](https://bugzil.la/1421663)). Details finden Sie im Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- In der Anzeige der _rohen Header_ im _Header_-Tab des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) wird jetzt der Statuscode der Antwort angezeigt ([Firefox Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das `autocomplete`-Attribut des {{HTMLElement("textarea")}}-Elements wurde implementiert. Dies ermöglicht es, die Formular-autofill-Funktion für das Element zu aktivieren oder zu deaktivieren.

### CSS

- Die {{cssxref("overscroll-behavior")}}-Eigenschaft und ihre zugehörigen Langformen — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Bug 951793](https://bugzil.la/951793)) und in allen Veröffentlichungen standardmäßig aktiviert ([Firefox Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein durch CSS-Boxen-Konzepte gerendert werden, wie etwa ersetzte Elemente) wurde aktualisiert, wenn ihnen ein {{cssxref("display")}}-Wert von `contents` zugewiesen wurde, gemäß Spezifikation ([Firefox Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die genauen spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird jetzt bei geeigneten [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)-Teilen unterstützt (z.B. {{htmlelement("th")}}-Elementen) ([Firefox Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird jetzt in {{cssxref("&lt;color&gt;")}}-Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} wird jetzt in [Media-Query](/de/docs/Web/CSS/Guides/Media_queries)-Werten unterstützt ([Firefox Bug 1396057](https://bugzil.la/1396057)).
- Die {{cssxref("@document")}}-Regel wurde darauf beschränkt, nur in Benutzer- und UA-Stylesheets verwendet zu werden ([Firefox Bug 1035091](https://bugzil.la/1035091)).
- Die Eigenschaft {{cssxref("font-optical-sizing")}} wurde implementiert ([Firefox Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget)-Konstruktor wurde implementiert ([Firefox Bug 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor kann jetzt einen `null`-Wert für seinen `body`-Parameter akzeptieren, gemäß Spezifikation ([Firefox Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox Bug 1412775](https://bugzil.la/1412775)).

#### Service-Worker

- Der Service Worker [Clients API](/de/docs/Web/API/Clients) kann jetzt Fenster in einem separaten Browser-Prozess finden und mit ihnen kommunizieren ([Firefox Bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc iframes erben jetzt den steuernden Service-Worker ihres Elternteils. Gelöst in ([Firefox Bug 1293277](https://bugzil.la/1293277)) und ([Firefox Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) liefert, wird der Wert [`Response.url`](/de/docs/Web/API/Response/url) jetzt an die abgefangene Netzwerk-Anforderung als finale aufgelöste URL weitergegeben. In der Vergangenheit wurde hierfür stattdessen [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet zum Beispiel, dass, wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt, die bereitgestellte `Response.url` zur Auflösung von relativen {{cssxref("@import")}}- oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)-Unterressourcen verwendet wird ([Firefox Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird jetzt einen Netzwerkfehler auslösen, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox Bug 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und den entsprechenden Ereignis-Handlern [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted`-Zustand eines Tracks zeigt an, dass der Track derzeit nicht in der Lage ist, Mediendaten bereitzustellen.

  > [!NOTE]
  > Der `muted`-Zustand eines Tracks ist nicht nützlich für das, was typischerweise als Stummschalten und Aufheben der Stummschaltung eines Tracks angesehen wird. Verwenden Sie stattdessen die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft; das Setzen auf `false` führt dazu, dass der Track nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt Apples HTTPS Live Streaming (HLS)-Protokoll sowohl für Audio als auch für Video. Dieses nicht standardisierte Protokoll wird auf Mobilgeräten unterstützt, um die Kompatibilität mit Seiten zu verbessern, die es für mobiles Streaming erfordern. Es gibt derzeit keinen Plan, es in Firefox Desktop zu implementieren.
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Vor der Veröffentlichung trat jedoch eine Spezifikationsänderung auf, und wir haben diese standardmäßig hinter der Einstellung `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Bug 1363667](https://bugzil.la/1363667), [Firefox Bug 1430213](https://bugzil.la/1430213) und [Firefox Bug 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle wurde nun implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceiver unterstützt, wobei `RTCPeerConnection` und andere Schnittstellen aktualisiert wurden, um gemäß der neuesten Spezifikation verwendet zu werden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Darüber hinaus wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API)-Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt jetzt WebVTT `REGION`-Definitionsblöcke, deren Einstellungslisten ein Einstellung pro Zeile enthalten, anstatt dass alle Einstellungen in derselben Zeile der WebVTT-Datei sind ([Firefox Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Das Interface [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) und seine Eigenschaften `namespaceURL` und `prefix` wurden implementiert ([Firefox Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Top-Level-Navigationen zu `data:`-URLs wurden blockiert [Firefox Bug 1401895](https://bugzil.la/1401895). Weitere Details finden Sie unter [Blockierung von Top-Level-Navigationen zu data-URLs für Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).
- Die `SAMEORIGIN`-Richtlinie des {{httpheader("X-Frame-Options")}}-Headers wurde so geändert, dass nicht nur überprüft wird, ob das Top-Level-IFrame im selben Ursprung ist, sondern auch alle seine Vorfahren ([Firefox Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die aus anderen Ursprüngen als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)).
- HTTP-Authentifizierung verwendet jetzt `utf-8`-Kodierung für Benutzernamen und Passwörter (anstelle von `ISO-8859-1`) zur Angleichung an andere Browser und zur Vermeidung potenzieller Probleme, wie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben.
- Jeden Tag wird die [HSTS-Preload-Liste](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise verdient dies keine Notiz, aber in dieser Version wurden neue TLDs hinzugefügt, insbesondere `.app` und `.dev`. Während sie neue TLDs sind, könnten Entwickler sie für lokale Entwicklung genutzt haben und von dieser Änderung überrascht sein. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) stattdessen für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### HTML

Der nicht standardisierte `version`-Parameter des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attributs des {{htmlelement("script")}}-Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}}-Einheit wurde entfernt ([Firefox Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` wurden auf die Nutzung in Chrome-Code beschränkt ([Firefox Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht standardisierte bedingte catch-Klauseln wurden entfernt ([Firefox Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Sie sollten stattdessen die Eigenschaft [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) bei dem [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification`-Eigenschaft und `DesktopNotification`-Schnittstelle wurden zugunsten der standardisierten [Notifications API](/de/docs/Web/API/Notifications_API) entfernt ([Firefox Bug 952453](https://bugzil.la/952453)).
- Die proprietäre `window.external.addSearchEngine()`-Methode wurde entfernt ([Firefox Bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für weitere Details.
- Die nicht standardisierte Firefox-eigene [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Die Unterstützung für das SMIL `accessKey`-Feature wurde entfernt ([Firefox Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Die Unterstützung für die nicht standardisierten `pcast:`- und `feed:`-Protokolle wurde aus Firefox entfernt ([Firefox Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Updates zu [Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme):
  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Style Arrays als auch CSS-Farbwerte.

- Neue [Browsereinstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):
  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)-APIs:
  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die `contextMenus`-API unterstützt jetzt einen ["bookmark" Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts)-API ermöglicht die laufzeitliche Registrierung von Content Scripts.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:
  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren jetzt `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um Page Actions standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:
  - "ssb" für Secure Scuttlebutt Kommunikationen
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).
