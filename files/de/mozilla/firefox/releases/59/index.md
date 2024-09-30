---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt im Response-Tab eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an — falls die Antwort HTML ist ([Firefox Bug 1353319](https://bugzil.la/1353319)).
- Die Cookie-Informationen, die im Speicherinspektor angezeigt werden (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)), beinhalten jetzt eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox Bug 1298370](https://bugzil.la/1298370)).
- Das [Lineal](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) Tool zeigt jetzt die aktuellen Abmessungen des Ansichtsfensters an ([Firefox Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmabmessungen mit den Cursortasten festlegen ([Firefox Bug 1421663](https://bugzil.la/1421663)). Sehen Sie sich den Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size) für weitere Details an.
- Die Anzeige _Roh-Header_ im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) im Register _Headers_ enthält jetzt den Statuscode der Antwort ([Firefox Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das Attribut [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete) des {{HTMLElement("textarea")}} Elements wurde implementiert. Dies ermöglicht es Ihnen, die Formular-Autoausfüllfunktion für das Element zu aktivieren oder zu deaktivieren.

### CSS

- Die {{cssxref("overscroll-behavior")}} Eigenschaft und ihre zugehörigen Einzelhand-Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Bug 951793](https://bugzil.la/951793)), und sie wurden standardmäßig in allen Versionen aktiviert ([Firefox Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente) bei der Zuweisung eines {{cssxref("display")}} Wertes von `contents` wurde gemäß Spezifikation aktualisiert ([Firefox Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die genau spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird jetzt auf den entsprechenden [HTML-Tabelle](/de/docs/Learn/HTML/Tables) Bestandteilen unterstützt (z.B. {{htmlelement("th")}} Elemente) ([Firefox Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird jetzt in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Query](/de/docs/Web/CSS/CSS_media_queries) Werten wird jetzt unterstützt ([Firefox Bug 1396057](https://bugzil.la/1396057)).
- Die {{cssxref("@document")}} At-Regel wurde auf die Nutzung nur in Benutzer- und UA-Stilen beschränkt ([Firefox Bug 1035091](https://bugzil.la/1035091)).
- Implementieren der {{cssxref("font-optical-sizing")}} Eigenschaft ([Firefox Bug 1435692](https://bugzil.la/1435692)).

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

#### Service Worker

- Die Service Worker [Clients API](/de/docs/Web/API/Clients) kann nun Fenster in einem separaten Browserprozess finden und mit ihnen kommunizieren ([Firefox Bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc Iframes übernehmen nun den Service Worker des übergeordneten Elements. Behoben in ([Firefox Bug 1293277](https://bugzil.la/1293277)) und ([Firefox Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) liefert, wird der Wert [`Response.url`](/de/docs/Web/API/Response/url) nun an die abgefangene Netzwerkanfrage als endgültige aufgelöste URL weitergegeben. In der Vergangenheit wurde dafür [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet beispielsweise, dass wenn ein Service Worker ein Stylesheet oder Worker-Skript abfängt, die bereitgestellte `Response.url` zur Auflösung von relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Unterressourcenladungen verwendet wird ([Firefox Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird jetzt einen Netzwerkfehler auslösen, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox Bug 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und den entsprechenden Ereignishandlern, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted`-Status einer Spur zeigt an, dass die Spur derzeit keine Mediendaten bereitstellen kann.

  > [!NOTE]
  > Der `muted`-Status einer Spur ist nicht nützlich für das, was typischerweise als Stummschalten und Aufheben der Stummschaltung einer Spur angesehen wird. Stattdessen sollte die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft verwendet werden; das Setzen von `enabled` auf `false` bewirkt, dass die Spur nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt das HTTPS Live Streaming (HLS)-Protokoll von Apple für sowohl Audio als auch Video. Dieses nicht-standardisierte Protokoll wird auf Mobilgeräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die es für mobiles Streaming erfordern. Derzeit gibt es keinen Plan, es auf Firefox Desktop zu implementieren.
- Die Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) wurden implementiert, um Informationen über die Quellen jeder RTP-Stream bereitzustellen. Allerdings erfolgte vor der Freigabe eine Spezifikationsänderung und wir haben diese standardmäßig hinter der Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Bug 1363667](https://bugzil.la/1363667), [Firefox Bug 1430213](https://bugzil.la/1430213) und [Firefox Bug 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Schnittstelle wurde nun implementiert, da die Firefox-Implementierung von WebRTC nun Transceiver unterstützt, wobei `RTCPeerConnection` und andere Schnittstellen aktualisiert wurden, um sie gemäß der neuesten Spezifikation zu verwenden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Zusätzlich wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt jetzt WebVTT `REGION` Definitionsblöcke, deren Einstellungslisten eine Einstellung pro Zeile haben, anstatt alle Einstellungen in derselben Zeile der WebVTT-Datei zu haben ([Firefox Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Das [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) Interface und seine Eigenschaften `namespaceURL` und `prefix` wurden implementiert ([Firefox Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Navigationen auf oberster Ebene zu `data:` URLs wurden blockiert ([Firefox Bug 1401895](https://bugzil.la/1401895)). Siehe [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für weitere Details.
- Die `SAMEORIGIN` Direktive des {{httpheader("X-Frame-Options")}} Headers wurde geändert, sodass nicht nur geprüft wird, ob das IFrame der obersten Ebene im gleichen Ursprung ist, sondern auch alle seine Vorfahren ([Firefox Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die von verschiedenen Ursprüngen als das aktuelle Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)).
- HTTP-Authentifizierung verwendet jetzt `utf-8` Kodierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`) zur Übereinstimmung mit anderen Browsern und zur Vermeidung potenzieller Probleme, wie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben.
- Jeden Tag wird die [HSTS Preload-Liste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise ist dies nicht erwähnenswert, aber in dieser Version wurden neue TLDs eingeschlossen, insbesondere `.app` und `.dev`. Während es sich um neue TLDs handelt, könnten Entwickler sie für lokale Entwicklungsprozesse verwendet haben und von dieser Änderung überrascht werden. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernte Funktionen der Webplattform

### HTML

Der nicht-standardisierte `version` Parameter des [`type`](/de/docs/Web/HTML/Element/script#type) Attributs des {{htmlelement("script")}} Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors`, und `-moz-border-left-colors` Eigenschaften wurden auf die Nutzung im Chrome-Code beschränkt ([Firefox Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht-standardisierte [Bedingte catch-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht-standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Stattdessen sollten Sie die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre [`Navigator.mozNotification`](/de/docs/Archive/API/Navigator/mozNotification) Eigenschaft und das `DesktopNotification` Interface wurden entfernt, zugunsten der standardisierten [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API) ([Firefox Bug 952453](https://bugzil.la/952453)).
- Die proprietäre `window.external.addSearchEngine()` Methode wurde entfernt ([Firefox Bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.sidebar`](/de/docs/Web/API/Window/sidebar) für weitere Details.
- Die nicht-standardisierte Firefox-only [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Die Unterstützung für das SMIL `accessKey` Merkmal wurde entfernt ([Firefox Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Die Unterstützung für die nicht-standardisierten `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-On und Mozilla-Entwickler

### WebExtensions

- [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) aktualisiert:

  - Neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - Alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Stil-Arrays als auch CSS-Farbwerte.

- Neue [Browsereinstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API unterstützt jetzt einen ["Bookmark" Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Laufzeitregistrierung von Inhaltsskripten.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:

  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren jetzt `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um Seitenaktionen standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [Erstparteienisolierung](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
