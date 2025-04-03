---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun im Reiter Response eine [Vorschau des gerenderten HTMLs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) — wenn die Antwort HTML ist ([Firefox bug 1353319](https://bugzil.la/1353319)).
- Die im Speicherinspektor angezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) beinhalten jetzt eine _sameSite_ Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox bug 1298370](https://bugzil.la/1298370)).
- Das [Lineal-Tool](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) zeigt nun eine Anzeige der aktuellen Abmessungen des Ansichtsfensters an ([Firefox bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie nun die Bildschirmabmessungen mit den Pfeiltasten einstellen ([Firefox bug 1421663](https://bugzil.la/1421663)). Siehe den Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size) für weitere Details.
- Die Anzeige _Raw headers_ im Reiter _Headers_ des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) beinhaltet jetzt den Statuscode der Antwort ([Firefox bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das Attribut [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete) des {{HTMLElement("textarea")}}-Elements wurde implementiert. Dies ermöglicht es Ihnen, die automatische Vervollständigung von Formularen für das Element zu aktivieren oder zu deaktivieren.

### CSS

- Die {{cssxref("overscroll-behavior")}}-Eigenschaft und ihre zugehörigen Langschreibweisen — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox bug 951793](https://bugzil.la/951793)) und standardmäßig in allen Versionen aktiviert ([Firefox bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein durch CSS-Boxkonzepte gerendert werden, wie ersetzte Elemente) mit einem {{cssxref("display")}}-Wert von `contents` wurde gemäß Spezifikation aktualisiert ([Firefox bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox), um genau zu sehen, was die spezifizierten Verhaltensweisen sind.
- {{cssxref("position")}} `sticky` wird nun auf geeigneten [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)-Teilen unterstützt (z.B. {{htmlelement("th")}}-Elemente) ([Firefox bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird nun in {{cssxref("&lt;color&gt;")}}-Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Werten wird nun unterstützt [Firefox bug 1396057](https://bugzil.la/1396057).
- Die {{cssxref("@document")}} At-Regel wurde auf die Verwendung nur in Benutzer- und UA-Stilen beschränkt ([Firefox bug 1035091](https://bugzil.la/1035091)).
- Die {{cssxref("font-optical-sizing")}} Eigenschaft wurde implementiert ([Firefox bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) Konstruktor wurde implementiert ([Firefox bug 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response) Konstruktor kann nun einen `null` Wert für seinen `body`-Parameter akzeptieren, gemäß Spezifikation ([Firefox bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox bug 1412775](https://bugzil.la/1412775)).

#### Service-Arbeiter

- Der Service-Arbeiter [Clients API](/de/docs/Web/API/Clients) kann nun Fenster in einem separaten Browser-Prozess finden und mit ihnen kommunizieren ([Firefox bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank- und about:srcdoc-Iframes erben nun den Service-Arbeiter des übergeordneten Fensters. Dies wurde behoben in ([Firefox bug 1293277](https://bugzil.la/1293277)) und ([Firefox bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service-Arbeiter eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereitstellt, wird der Wert [`Response.url`](/de/docs/Web/API/Response/url) nun an die abgefangene Netzwerk-Anforderung als endgültige aufgelöste URL weitergegeben. In der Vergangenheit wurde dafür [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Das bedeutet zum Beispiel, wenn ein Service-Arbeiter ein Stylesheet oder ein Worker-Skript abfängt, dann wird die bereitgestellte `Response.url` verwendet, um alle relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcen-Ladungen aufzulösen ([Firefox bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird nun einen Netzwerkausfall auslösen, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox bug 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) sowie den entsprechenden Ereignis-Handlern, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted`-Status eines Tracks zeigt an, dass der Track derzeit keine Mediendaten bereitstellen kann.

  > [!NOTE]
  > Der `muted`-Status eines Tracks ist nicht sinnvoll für das, was typischerweise als Stummschalten und Aufheben der Stummschaltung eines Tracks angesehen wird. Verwenden Sie stattdessen die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft; indem Sie `enabled` auf `false` setzen, wird der Track nur leere Frames ausgeben.

- Firefox 59 auf Android unterstützt jetzt Apples HTTPS Live Streaming (HLS)-Protokoll sowohl für Audio als auch für Video. Dieses nicht-standardisierte Protokoll wird auf mobilen Geräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die es für das mobile Streaming erfordern. Derzeit gibt es keine Pläne, es auf Firefox Desktop zu implementieren.
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Vor der Veröffentlichung trat jedoch eine Änderung der Spezifikation auf, und wir haben diese standardmäßig hinter der Einstellung `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox bug 1363667](https://bugzil.la/1363667), [Firefox bug 1430213](https://bugzil.la/1430213), und [Firefox bug 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Schnittstelle wurde implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceiver unterstützt, wobei `RTCPeerConnection` und andere Schnittstellen aktualisiert wurden, um sie gemäß der neuesten Spezifikation zu verwenden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Darüber hinaus wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API)-Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt nun WebVTT-`REGION`-Definitionsblöcke, deren Einstellungslisten eine Einstellung pro Zeile haben, anstatt alle Einstellungen in einer Zeile der WebVTT-Datei zu haben ([Firefox bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die Schnittstelle [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) und ihre `namespaceURL`- und `prefix`-Eigenschaften wurden implementiert ([Firefox bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Top-Level-Navigation zu `data:`-URLs wurde blockiert [Firefox bug 1401895](https://bugzil.la/1401895). Siehe [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für weitere Details.
- Die `SAMEORIGIN`-Direktive des {{httpheader("X-Frame-Options")}}-Headers wurde geändert, sodass sie nicht nur überprüft, ob das Top-Level-IFrame denselben Ursprung hat, sondern auch alle seine Vorfahren ([Firefox bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die aus anderen Ursprüngen als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox bug 1423146](https://bugzil.la/1423146)).
- HTTP-Authentifizierung verwendet jetzt `utf-8`-Codierung für Benutzernamen und Passwörter (statt `ISO-8859-1`), um mit anderen Browsern gleichzuziehen und mögliche Probleme zu vermeiden, wie in [Firefox bug 1419658](https://bugzil.la/1419658) beschrieben.
- Jeden Tag wird die [HSTS-Preload-Liste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise würde dies keine Erwähnung rechtfertigen, aber in dieser Version wurden neue TLDs aufgenommen, insbesondere `.app` und `.dev`. Obwohl sie neue TLDs sind, könnten Entwickler sie für die lokale Entwicklung genutzt haben und von dieser Änderung überrascht sein. Beachten Sie, dass für die lokale Entwicklung [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstige

_Keine Änderungen._

## Entfernungen aus der Web-Plattform

### HTML

Der nicht standardisierte `version`-Parameter des `type`-Attributs des {{htmlelement("script")}}-Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}}-Einheit wurde entfernt ([Firefox bug 1416564](https://bugzil.la/1416564)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors`, und `-moz-border-left-colors` wurden auf die Verwendung in Chrome-Code beschränkt ([Firefox bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht standardisierte [bedingte Catch-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Stattdessen sollten Sie die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented)-Eigenschaft verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification`-Eigenschaft und die `DesktopNotification`-Schnittstelle wurden entfernt, zugunsten der standardisierten [Benachrichtigungen-API](/de/docs/Web/API/Notifications_API) ([Firefox bug 952453](https://bugzil.la/952453)).
- Die proprietäre Methode `window.external.addSearchEngine()` wurde entfernt ([Firefox bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für weitere Details.
- Die nicht standardisierte Firefox-only [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Unterstützung für das SMIL-`accessKey`-Feature wurde entfernt ([Firefox bug 1423098](https://bugzil.la/1423098)).

### Sonstige

Unterstützung für die nicht standardisierten Protokolle `pcast:` und `feed:` wurde aus Firefox entfernt ([Firefox bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Updates:

  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Style-Arrays als auch CSS-Farbwerte.

- Neue [Browsereinstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)-APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus)-API unterstützt jetzt einen ["Lesezeichen"-Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts)-API ermöglicht die Registrierung von Inhaltsskripten zur Laufzeit.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)-APIs:

  - `browserAction/pageAction/sidebarAction.set*`-Funktionen akzeptieren nun `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen)-Funktionen.

- Neue Option im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um Seitenaktionen standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt-Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)-Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies)-API für [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
