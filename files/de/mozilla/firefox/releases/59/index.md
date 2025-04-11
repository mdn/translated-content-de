---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt im Reiter "Antwort" nun eine [Vorschau der gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an, wenn die Antwort HTML ist ([Firefox Fehler 1353319](https://bugzil.la/1353319)).
- Die Cookie-Informationen, die im Speicher-Inspektor angezeigt werden (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)), beinhalten nun eine _sameSite_ Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox Fehler 1298370](https://bugzil.la/1298370)).
- Das [Lineale](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) Tool enthält nun eine Anzeige, die die aktuellen Abmessungen des Viewports zeigt ([Firefox Fehler 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie nun die Bildschirmabmessungen mit den Pfeiltasten einstellen ([Firefox Fehler 1421663](https://bugzil.la/1421663)). Weitere Einzelheiten finden Sie im Abschnitt [Bildschirmgröße einstellen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size).
- Die Anzeige der _rohen Header_ im Reiter "Header" des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) beinhaltet nun den Statuscode der Antwort ([Firefox Fehler 1419401](https://bugzil.la/1419401)).

### HTML

- Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete) des `{{HTMLElement("textarea")}}` Elements wurde implementiert. Dies ermöglicht Ihnen das Ein- oder Ausschalten der automatischen Formularausfüllung für das Element.

### CSS

- Die Eigenschaft {{cssxref("overscroll-behavior")}} und ihre zugehörigen Langformen — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Fehler 951793](https://bugzil.la/951793)) und sie wurde standardmäßig für alle Versionen aktiviert ([Firefox Fehler 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein durch Konzepte der CSS-Box modelliert werden, wie z.B. ersetzte Elemente), wenn ihnen ein {{cssxref("display")}} Wert von `contents` zugewiesen wird, wurde gemäß Spezifikation aktualisiert ([Firefox Fehler 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die genauen spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird nun auf den entsprechenden Teilen von [HTML Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) unterstützt (z.B. {{htmlelement("th")}} Elemente) ([Firefox Fehler 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird nun in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()` und `hsla()` ([Firefox Fehler 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Query](/de/docs/Web/CSS/CSS_media_queries) Werten wird nun unterstützt ([Firefox Fehler 1396057](https://bugzil.la/1396057)).
- Die {{cssxref("@document")}} Regle darf nur noch in Benutzer- und UA-Stilen verwendet werden ([Firefox Fehler 1035091](https://bugzil.la/1035091)).
- Implementierung der Eigenschaft {{cssxref("font-optical-sizing")}} ([Firefox Fehler 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden für Firefox Desktop aktiviert ([Firefox Fehler 1411467](https://bugzil.la/1411467)).

#### DOM

- Der Konstruktor [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) wurde implementiert ([Firefox Fehler 1379688](https://bugzil.la/1379688)).
- Der Konstruktor [`Response()`](/de/docs/Web/API/Response/Response) kann nun einen `null` Wert für seinen `body` Parameter akzeptieren, gemäß Spezifikation ([Firefox Fehler 1303025](https://bugzil.la/1303025)).

#### DOM Ereignisse

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox Fehler 1412775](https://bugzil.la/1412775)).

#### Service Worker

- Der Service Worker [Clients API](/de/docs/Web/API/Clients) kann nun Fenster in einem separaten Browserprozess finden und mit ihnen kommunizieren ([Firefox Fehler 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc Iframes werden nun den controlling Service Worker ihres übergeordneten Dokuments erben. Behoben in ([Firefox Fehler 1293277](https://bugzil.la/1293277)) und ([Firefox Fehler 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) gibt, wird der Wert von [`Response.url`](/de/docs/Web/API/Response/url) nun an die abgefangene Netzwerkanfrage als endgültige aufgelöste URL weitergegeben. In der Vergangenheit wurde stattdessen die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) dafür verwendet. Dies bedeutet zum Beispiel, wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt, dann wird die bereitgestellte `Response.url` verwendet, um alle relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcen-Ladevorgänge aufzulösen ([Firefox Fehler 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird nun einen Netzwerkfehler auslösen, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox Fehler 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und den entsprechenden Ereignis-Handlern [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `mute` Status einer Spur zeigt an, dass die Spur momentan keine Mediendaten bereitstellen kann.

  > [!NOTE]
  > Der `mute` Status einer Spur ist nicht nützlich, um das zu tun, was typischerweise als Stumm- und Entstumm-Schalten einer Spur angesehen wird. Stattdessen verwenden Sie die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) Eigenschaft; das Setzen von `enabled` auf `false` sorgt dafür, dass die Spur nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt nun Apples HTTPS Live Streaming (HLS) Protokoll für sowohl Audio als auch Video. Dieses nicht-standardisierte Protokoll wird auf mobilen Geräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die es für mobiles Streaming erfordern. Derzeit gibt es keinen Plan, es auf Firefox Desktop zu implementieren.
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Vor der Veröffentlichung erfolgte jedoch eine Spezifikationsänderung, und wir haben diese standardmäßig hinter der Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Fehler 1363667](https://bugzil.la/1363667), [Firefox Fehler 1430213](https://bugzil.la/1430213) und [Firefox Fehler 1433236](https://bugzil.la/1433236)).
- Die Schnittstelle [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) wurde nun implementiert, da die Firefox Implementierung von WebRTC nun Transceiver unterstützt, mit `RTCPeerConnection` und anderen Schnittstellen, die aktualisiert wurden, um sie gemäß der neuesten Spezifikation zu verwenden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Außerdem wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind nun standardmäßig verfügbar ([Firefox Fehler 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt nun WebVTT `REGION` Definitionsblöcke, deren Einstellungslisten eine Einstellung pro Zeile anstatt aller Einstellungen auf derselben Zeile der WebVTT-Datei enthalten ([Firefox Fehler 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die Schnittstelle [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) und ihre Eigenschaften `namespaceURL` und `prefix` wurden implementiert ([Firefox Fehler 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Navigation zu `data:` URLs auf oberster Ebene wurde blockiert ([Firefox Fehler 1401895](https://bugzil.la/1401895)). Siehe [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für weitere Details.
- Die `SAMEORIGIN` Direktive im {{httpheader("X-Frame-Options")}} Header wurde geändert, sodass nicht nur überprüft wird, dass der IFrame auf oberster Ebene im gleichen Origin ist, sondern auch alle seine Vorfahren ([Firefox Fehler 725490](https://bugzil.la/725490)).
- Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Fehler 1423146](https://bugzil.la/1423146)).
- Die HTTP-Authentifizierung verwendet nun `utf-8` Kodierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`), um mit anderen Browsern gleichzuziehen und mögliche Probleme zu vermeiden, wie in [Firefox Fehler 1419658](https://bugzil.la/1419658) beschrieben.
- Jeden Tag wird die [HSTS Vorausladeliste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise verdient dies keine Erwähnung, aber in dieser Veröffentlichung wurden neue TLDs aufgenommen, insbesondere `.app` und `.dev`. Während sie neue TLDs sind, könnten Entwickler sie für die lokale Entwicklung verwendet haben und von dieser Änderung überrascht sein. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) stattdessen für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### HTML

Der nicht-standardmäßige `version` Parameter des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) des `{{htmlelement("script")}}` Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Fehler 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox Fehler 1416564](https://bugzil.la/1416564)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` dürfen nur noch in Chrome-Code verwendet werden ([Firefox Fehler 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht-standardmäßige [bedingte Catch-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox Fehler 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht-standardmäßige Methode `Event.getPreventDefault()` wurde entfernt. Sie sollten stattdessen die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft verwenden, um zu bestimmen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification` Eigenschaft und das `DesktopNotification` Interface wurden zugunsten der standardmäßigen [Notifications API](/de/docs/Web/API/Notifications_API) entfernt ([Firefox Fehler 952453](https://bugzil.la/952453)).
- Die proprietäre Methode `window.external.addSearchEngine()` wurde entfernt ([Firefox Fehler 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für weitere Details.
- Die nicht-standardmäßige Firefox-exklusive [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Unterstützung für das SMIL `accessKey` Feature wurde entfernt ([Firefox Fehler 1423098](https://bugzil.la/1423098)).

### Sonstiges

Unterstützung für die nicht-standardmäßigen `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox Fehler 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on und Mozilla Entwickler

### WebExtensions

- [Theme](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Updates:

  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen nun sowohl Chrome-ähnliche Arrays als auch CSS-Farbwerte.

- Neue [Browser-Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API unterstützt nun einen ["Lesezeichen"-Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Laufzeitregistrierung von Inhalts-Skripten.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:

  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren nun `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um Seitenaktionen standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt Kommunikationen
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
