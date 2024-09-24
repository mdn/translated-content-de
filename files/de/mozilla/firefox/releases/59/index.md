---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Die Registerkarte [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) Antwort zeigt nun eine [Vorschau des gerenderten HTMLs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an — wenn die Antwort HTML ist ([Firefox Bug 1353319](https://bugzil.la/1353319)).
- In den im Storage Inspector angezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) wird nun eine _sameSite_ Spalte angezeigt, die den Same-Site-Status jedes Cookies zeigt ([Firefox Bug 1298370](https://bugzil.la/1298370)).
- Das [Rulers](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) Werkzeug enthält nun eine Anzeige der aktuellen Dimensionen des Ansichtsfensters ([Firefox Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie nun die Bildschirmabmessungen mit den Cursortasten einstellen ([Firefox Bug 1421663](https://bugzil.la/1421663)). Weitere Informationen finden Sie im Abschnitt [Setting screen size](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- Die Anzeige _Raw headers_ im Tab _Headers_ des [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun den Statuscode der Antwort an ([Firefox Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das {{HTMLElement("textarea")}} Element unterstützt jetzt das [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete) Attribut. Dies ermöglicht das Aktivieren oder Deaktivieren der automatischen Formularausfüllung für das Element.

### CSS

- Die {{cssxref("overscroll-behavior")}} Eigenschaft und ihre zugehörigen Langformen — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Bug 951793](https://bugzil.la/951793)) und sind jetzt standardmäßig in allen Versionen aktiviert ([Firefox Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein durch CSS-Box-Konzepte wie ersetzte Elemente gerendert werden) bei Verwendung eines {{cssxref("display")}} Werts von `contents` wurde gemäß der Spezifikation aktualisiert ([Firefox Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die genau spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird jetzt auf geeigneten [HTML tabellen](/de/docs/Learn/HTML/Tables) Teilen unterstützt (z. B. {{htmlelement("th")}} Elemente) ([Firefox Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird jetzt in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Queries](/de/docs/Web/CSS/CSS_media_queries) Werten wird jetzt unterstützt [Firefox Bug 1396057](https://bugzil.la/1396057).
- Die {{cssxref("@document")}} Atregel wurde auf die Verwendung in Benutzer- und UA-Stylesheets beschränkt ([Firefox Bug 1035091](https://bugzil.la/1035091)).
- Die {{cssxref("font-optical-sizing")}} Eigenschaft wurde implementiert ([Firefox Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- {{domxref("PointerEvent", "PointerEvents")}} wurden im Firefox Desktop aktiviert ([Firefox Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der {{domxref("EventTarget.EventTarget()", "EventTarget()")}} Konstruktor wurde implementiert ([Firefox Bug 1379688](https://bugzil.la/1379688)).
- Der {{domxref("Response.Response()", "Response()")}} Konstruktor kann jetzt einen `null` Wert für seinen `body` Parameter akzeptieren, gemäß der Spezifikation ([Firefox Bug 1303025](https://bugzil.la/1303025)).

#### DOM Events

- Die Methode {{domxref("Event.composedPath()")}} wurde implementiert ([Firefox Bug 1412775](https://bugzil.la/1412775)).

#### Service Workers

- Die Service Worker [Clients API](/de/docs/Web/API/Clients) kann nun Fenster in einem separaten Browserprozess finden und mit ihnen kommunizieren ([Firefox Bug 1293277](https://bugzil.la/1293277)).
- Eingebettete about:blank und about:srcdoc iframes erben nun den kontrollierenden Service Worker ihres übergeordneten Elements. Behoben in ([Firefox Bug 1293277](https://bugzil.la/1293277)) und ([Firefox Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine {{domxref("Response")}} an {{domxref("FetchEvent.respondWith()")}} bereitstellt, wird nun der {{domxref("Response.url")}} Wert an die abgefangene Netzwerk-Anfrage als final aufgelöste URL weitergegeben. In der Vergangenheit wurde stattdessen die {{domxref("Request.url", "FetchEvent.request.url")}} dafür verwendet. Dies bedeutet beispielsweise, wenn ein Service Worker ein Stylesheet oder Skript abfängt, dann wird die bereitgestellte `Response.url` verwendet, um alle relativen {{cssxref("@import")}} oder {{domxref("WorkerGlobalScope.importScripts()", "importScripts()")}} Subressourcen-Ladungen aufzulösen ([Firefox Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird nun einen Netzwerkausfall auslösen, wenn der {{domxref("Request.mode", "FetchEvent.request.mode")}} `"same-origin"` ist und die bereitgestellte {{domxref("Response.type")}} `"cors"` ist. ([Firefox Bug 1222008](https://bugzil.la/1222008))

#### Media und WebRTC

- Die {{domxref("MediaStreamTrack")}} Eigenschaft {{domxref("MediaStreamTrack.muted")}}, zusammen mit den Ereignissen {{domxref("MediaStreamTrack.mute_event", "mute")}} und {{domxref("MediaStreamTrack.unmute_event", "unmute")}} und den entsprechenden Ereignis-Handlern, {{domxref("MediaStreamTrack.mute_event", "onmute")}} und {{domxref("MediaStreamTrack.unmute_event", "onunmute")}}, wurden implementiert. Der `muted` Zustand eines Tracks zeigt an, dass der Track derzeit keine Mediendaten bereitstellen kann.

  > [!NOTE]
  > Der `muted` Zustand eines Tracks ist nicht nützlich für das, was typischerweise als Stummschaltung angesehen wird. Stattdessen verwenden Sie die {{domxref("MediaStreamTrack.enabled", "enabled")}} Eigenschaft; durch Setzen von `enabled` auf `false` wird der Track so eingestellt, dass er nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt das Apple HTTPS Live Streaming (HLS)-Protokoll für sowohl Audio als auch Video. Dieses nicht standardmäßige Protokoll wird auf Mobilgeräten unterstützt, um die Kompatibilität mit Seiten, die es für mobiles Streaming erfordern, zu verbessern. Derzeit gibt es keinen Plan, es auf dem Firefox Desktop zu implementieren.
- Die {{domxref("RTCRtpReceiver")}} Methoden {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} und {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Eine Spezifikationsänderung trat jedoch vor der Veröffentlichung ein und wir haben diese standardmäßig hinter der Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Bug 1363667](https://bugzil.la/1363667), [Firefox Bug 1430213](https://bugzil.la/1430213), und [Firefox Bug 1433236](https://bugzil.la/1433236).
- Die {{domxref("RTCRtpTransceiver")}} Schnittstelle wurde nun implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceivers unterstützt, wobei `RTCPeerConnection` und andere Schnittstellen aktualisiert wurden, um sie gemäß der neuesten Spezifikation zu verwenden.
- Die Methode {{domxref("RTCPeerConnection.addTransceiver()")}} wurde hinzugefügt. Zudem wurde das Verhalten von {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Jetzt sind sie standardmäßig verfügbar ([Firefox Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt nun WebVTT `REGION` Definitionsblöcke, deren Einstellungsliste eine Einstellung pro Zeile hat, statt alle Einstellungen auf der gleichen Zeile der WebVTT Datei zu haben ([Firefox Bug 1415821](https://bugzil.la/1415821).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die {{domxref("CSSNamespaceRule")}} Schnittstelle und ihre `namespaceURL` und `prefix` Eigenschaften wurden implementiert ([Firefox Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die oberste Navigation zu `data:` URLs wurde blockiert [Firefox Bug 1401895](https://bugzil.la/1401895). Weitere Details finden Sie unter [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).
- Die `SAMEORIGIN` Direktive des {{httpheader("X-Frame-Options")}} Headers wurde so geändert, dass nicht nur geprüft wird, ob das oberste IFrame im selben Ursprung ist, sondern auch all seine Vorfahren ([Firefox Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die von anderen Ursprüngen als das aktuelle Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)).
- HTTP-Authentifizierung verwendet jetzt `utf-8` Kodierung für Benutzernamen und Passwörter (anstelle von `ISO-8859-1`) für Übereinstimmung mit anderen Browsern und um potenzielle Probleme zu vermeiden, wie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben.
- Täglich wird die [HSTS Preload-Liste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise erfordert dies keinen Hinweis, aber in dieser Veröffentlichung wurden neue TLDs einbezogen, insbesondere `.app` und `.dev`. Obwohl sie neue TLDs sind, haben Entwickler sie möglicherweise für die lokale Entwicklung verwendet und könnten von dieser Änderung überrascht sein. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) stattdessen für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### HTML

Der nicht standardmäßige `version` Parameter des [`type`](/de/docs/Web/HTML/Element/script#type) Attributs des {{htmlelement("script")}} Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` Eigenschaften wurden auf die Verwendung im Chrome Code beschränkt ([Firefox Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht standardmäßige [bedingte Catch Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht standardmäßige Methode `Event.getPreventDefault()` wurde entfernt. Stattdessen sollten Sie die {{domxref("Event.defaultPrevented")}} Eigenschaft verwenden, um zu bestimmen, ob {{domxref("Event.preventDefault", "preventDefault()")}} auf dem {{domxref("Event")}} aufgerufen wurde.
- Die proprietäre [`Navigator.mozNotification`](/de/docs/Archive/API/Navigator/mozNotification) Eigenschaft und die `DesktopNotification` Schnittstelle wurden zugunsten der standardmäßigen [Notifications API](/de/docs/Web/API/Notifications_API) entfernt ([Firefox Bug 952453](https://bugzil.la/952453)).
- Die proprietäre `window.external.addSearchEngine()` Methode wurde entfernt ([Firefox Bug 862147](https://bugzil.la/862147)). Siehe auch {{domxref("Window.sidebar")}} für weitere Details.
- Die nicht standardmäßige, nur für Firefox verfügbare {{domxref("HTMLMediaElement")}} Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Unterstützung für das `accessKey` Feature von SMIL wurde entfernt ([Firefox Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Unterstützung für die nicht standardmäßigen `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Aktualisierungen:

  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen nun sowohl Chrome-Arrays als auch CSS-Farbwerte.

- Neue [Browser-Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API unterstützt jetzt einen ["Bookmark"-Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Registrierung von Inhalts-Skripten zur Laufzeit.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:

  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren nun `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) um Seitenaktionen standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
