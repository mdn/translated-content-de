---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) unter dem Antwort-Tab zeigt jetzt eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an, wenn die Antwort HTML ist ([Firefox Bug 1353319](https://bugzil.la/1353319)).
- Die im Speicher-Inspektor angezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) beinhalten jetzt eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies zeigt ([Firefox Bug 1298370](https://bugzil.la/1298370)).
- Das [Lineale](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html)-Werkzeug beinhaltet jetzt eine Anzeige, die die aktuellen Dimensionen des Viewports zeigt ([Firefox Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmabmessungen mit den Pfeiltasten festlegen ([Firefox Bug 1421663](https://bugzil.la/1421663)). Siehe den Abschnitt [Bildschirmgröße festlegen](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size) für weitere Details.
- Die Anzeige _Raw headers_ im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) unter dem _Headers_-Tab enthält jetzt den Statuscode der Antwort ([Firefox Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das {{HTMLElement("textarea")}}-Element Attribut [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete) wurde implementiert. Dies ermöglicht das Ein- oder Ausschalten der Formular-Autoausfüllung für das Element.

### CSS

- Die {{cssxref("overscroll-behavior")}}-Eigenschaft und ihre zugehörigen Langform-Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Bug 951793](https://bugzil.la/951793)) und sind nun standardmäßig in allen Versionen aktiviert ([Firefox Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht nur durch CSS-Box-Konzepte gerendert werden, wie ersetzte Elemente), wenn ihnen ein {{cssxref("display")}}-Wert von `contents` zugewiesen wird, wurde entsprechend der Spezifikation aktualisiert ([Firefox Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Effekte von display: contents auf Ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die spezifizierten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird jetzt auf geeigneten [HTML-Tabellen](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)-Teilen (z.B. {{htmlelement("th")}}-Elemente) unterstützt ([Firefox Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird jetzt in {{cssxref("&lt;color&gt;")}} Werten unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} wird jetzt in [Media Query](/de/docs/Web/CSS/CSS_media_queries)-Werten unterstützt [Firefox Bug 1396057](https://bugzil.la/1396057).
- Die {{cssxref("@document")}}-Regel wurde auf die Nutzung nur in Benutzer- und UA-Stilen beschränkt ([Firefox Bug 1035091](https://bugzil.la/1035091)).
- Die {{cssxref("font-optical-sizing")}}-Eigenschaft wurde implementiert ([Firefox Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden in Firefox Desktop aktiviert ([Firefox Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget)-Konstruktor wurde implementiert ([Firefox Bug 1379688](https://bugzil.la/1379688)).
- Der [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor kann jetzt einen `null` Wert für seinen `body`-Parameter akzeptieren, wie in der Spezifikation festgelegt ([Firefox Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox Bug 1412775](https://bugzil.la/1412775)).

#### Servicearbeiter

- Der Service Worker [Clients API](/de/docs/Web/API/Clients) kann jetzt Fenster in einem separaten Browser-Prozess finden und mit ihnen kommunizieren ([Firefox Bug 1293277](https://bugzil.la/1293277)).
- Eingebettete about:blank und about:srcdoc iframes erben nun den kontrollierenden Service Worker des übergeordneten Elements. Behoben in ([Firefox Bug 1293277](https://bugzil.la/1293277)) und ([Firefox Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) liefert, wird jetzt der Wert von [`Response.url`](/de/docs/Web/API/Response/url) an die abgefangene Netzwerkanfrage als endgültige aufgelöste URL weitergegeben. In der Vergangenheit wurde dafür die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Dies bedeutet zum Beispiel, wenn ein Service Worker ein Stylesheet oder Skript abfängt, dann wird die bereitgestellte `Response.url` verwendet, um relative {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcen zu laden ([Firefox Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird jetzt einen Netzwerkfehler auslösen, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox Bug 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und den entsprechenden Ereignishandlern, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted`-Zustand einer Spur zeigt an, dass die Spur derzeit keine Mediendaten bereitstellen kann.

  > [!NOTE]
  > Der `muted`-Zustand einer Spur ist nicht nützlich für das, was typischerweise als Stummschalten und Entstummen einer Spur gedacht wird. Stattdessen verwenden Sie die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft; das Setzen von `enabled` auf `false` bewirkt, dass die Spur nur leere Frames ausgibt.

- Firefox 59 auf Android unterstützt jetzt Apples HTTPS Live Streaming (HLS)-Protokoll für Audio und Video. Dieses nicht-standardisierte Protokoll wird auf Mobilgeräten unterstützt, um die Kompatibilität mit Websites zu verbessern, die es für das mobile Streaming erfordern. Es gibt derzeit keinen Plan, es in Firefox Desktop zu implementieren.
- Die Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams bereitzustellen. Jedoch fand vor der Veröffentlichung eine Änderung der Spezifikation statt und wir haben diese standardmäßig hinter der Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Bug 1363667](https://bugzil.la/1363667), [Firefox Bug 1430213](https://bugzil.la/1430213), und [Firefox Bug 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle wurde nun implementiert, da die Firefox-Implementierung von WebRTC jetzt Transceiver unterstützt, mit `RTCPeerConnection` und anderen Schnittstellen, die aktualisiert wurden, um die neuesten Spezifikationen zu verwenden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Zusätzlich wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API)-Regionen wurde in Firefox 58 implementiert, aber standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt jetzt WebVTT `REGION` Definitions-Blöcke, deren Einstellungslisten eine Einstellung pro Zeile enthalten, anstatt dass alle Einstellungen in derselben Zeile der WebVTT-Datei stehen ([Firefox Bug 1415821](https://bugzil.la/1415821)).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule)-Schnittstelle und ihre Eigenschaften `namespaceURL` und `prefix` wurden implementiert ([Firefox Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Navigation auf oberster Ebene zu `data:` URLs wurde blockiert [Firefox Bug 1401895](https://bugzil.la/1401895). Weitere Details finden Sie unter [Blocking Top-Level Navigations to data URLs for Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).
- Die `SAMEORIGIN`-Direktive des {{httpheader("X-Frame-Options")}} Headers wurde so geändert, dass sie nicht nur überprüft, ob das oberste IFrame im gleichen Ursprung ist, sondern auch alle seine Vorfahren ([Firefox Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die aus anderen Ursprüngen als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)).
- Die HTTP-Authentifizierung verwendet jetzt `utf-8`-Codierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`) um mit anderen Browsern gleichzuziehen und potenzielle Probleme zu vermeiden, wie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben.
- Täglich wird die [HSTS-Preload-Liste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise ist dies keine Erwähnung wert, aber in dieser Version wurden neue TLDs aufgenommen, insbesondere `.app` und `.dev`. Da sie neue TLDs sind, könnten Entwickler sie für lokale Entwicklung verwendet haben und von dieser Änderung überrascht werden. Beachten Sie, dass stattdessen [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### HTML

Der nicht standardisierte `version`-Parameter des {{htmlelement("script")}}-Elements im [`type`](/de/docs/Web/HTML/Element/script/type)-Attribut (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären Eigenschaften `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors`, und `-moz-border-left-colors` wurden auf die Verwendung nur im Chrome-Code beschränkt ([Firefox Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht-standardisierte [Bedingte Catch-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht-standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Stattdessen sollten Sie die [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented)-Eigenschaft verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf der [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre Eigenschaft `Navigator.mozNotification` und die `DesktopNotification`-Schnittstelle wurden entfernt, zugunsten der standardisierten [Notifications API](/de/docs/Web/API/Notifications_API) ([Firefox Bug 952453](https://bugzil.la/952453)).
- Die proprietäre Methode `window.external.addSearchEngine()` wurde entfernt ([Firefox Bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für weitere Details.
- Die nicht standardisierte, nur in Firefox vorhandene [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Die Unterstützung für das SMIL-Feature `accessKey` wurde entfernt ([Firefox Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Die Unterstützung für die nicht standardisierten Protokolle `pcast:` und `feed:` wurde aus Firefox entfernt ([Firefox Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- [Thema](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Aktualisierungen:

  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen jetzt sowohl Chrome-Stil Arrays als auch CSS-Farbwerte.

- Neue [Browser-Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):

  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)-APIs:

  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus)-API unterstützt jetzt einen ["Lesezeichen"-Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts)-API ermöglicht die Laufzeitregistrierung von Inhalts-Skripten.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)-APIs:

  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren jetzt `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action), um page actions standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:

  - "ssb" für Secure Scuttlebutt-Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neue [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)-Einstellung "cookieConfig".
- Unterstützung in [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies)-API für [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
