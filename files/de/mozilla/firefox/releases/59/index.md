---
title: Firefox 59 für Entwickler
slug: Mozilla/Firefox/Releases/59
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 59, die Entwickler betreffen werden. Firefox 59 wurde am 13. März 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt im Tab "Antwort" jetzt eine [Vorschau des gerenderten HTML](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#html-preview) an — falls die Antwort HTML ist ([Firefox Bug 1353319](https://bugzil.la/1353319)).
- Die im Speicherinspektor angezeigten Cookie-Informationen (siehe [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#cookies)) beinhalten nun eine _sameSite_-Spalte, die den Same-Site-Status jedes Cookies anzeigt ([Firefox Bug 1298370](https://bugzil.la/1298370)).
- Das [Linealwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) zeigt nun die aktuellen Dimensionen des Viewports an ([Firefox Bug 1402633](https://bugzil.la/1402633)).
- Im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) können Sie jetzt die Bildschirmabmessungen mit den Cursortasten einstellen ([Firefox Bug 1421663](https://bugzil.la/1421663)). Siehe den Abschnitt [Einstellen der Bildschirmgröße](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#setting-screen-size) für weitere Details.
- Die Anzeige _Roh-Header_ im _Header_ Tab des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) enthält nun den Statuscode der Antwort ([Firefox Bug 1419401](https://bugzil.la/1419401)).

### HTML

- Das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete) des {{HTMLElement("textarea")}}-Elements wurde implementiert. Damit können Sie die automatische Formularausfüllung für das Element aktivieren oder deaktivieren.

### CSS

- Die Eigenschaft {{cssxref("overscroll-behavior")}} und ihre zugehörigen Longhand-Eigenschaften — {{cssxref("overscroll-behavior-x")}} und {{cssxref("overscroll-behavior-y")}} — wurden implementiert ([Firefox Bug 951793](https://bugzil.la/951793)) und in allen Versionen standardmäßig aktiviert ([Firefox Bug 1428879](https://bugzil.la/1428879)).
- Das Verhalten von "ungewöhnlichen Elementen" (Elemente, die nicht rein über CSS-Box-Konzepte gerendert werden, wie z.B. ersetzte Elemente) wurde aktualisiert, wenn sie einen {{cssxref("display")}} Wert von `contents` erhalten, gemäß der Spezifikation ([Firefox Bug 1427292](https://bugzil.la/1427292)). Siehe [Anhang B: Auswirkungen von display: contents auf ungewöhnliche Elemente](https://drafts.csswg.org/css-display/#unbox) für die genauen festgelegten Verhaltensweisen.
- {{cssxref("position")}} `sticky` wird nun auf geeigneten [HTML-Tabelle](/de/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics) Teilen unterstützt (z.B. {{htmlelement("th")}}-Elementen) ([Firefox Bug 975644](https://bugzil.la/975644)).
- {{cssxref("calc", "calc()")}} wird nun für {{cssxref("&lt;color&gt;")}} Werte unterstützt — `rgb()`, `rgba()`, `hsl()`, und `hsla()` ([Firefox Bug 984021](https://bugzil.la/984021)).
- {{cssxref("calc", "calc()")}} in [Media Queries](/de/docs/Web/CSS/CSS_media_queries) Werten wird nun unterstützt [Firefox Bug 1396057](https://bugzil.la/1396057).
- Die {{cssxref("@document")}} At-Regel wurde auf die Nutzung in Nutzer- und UA-Stylesheets beschränkt ([Firefox Bug 1035091](https://bugzil.la/1035091)).
- Die Eigenschaft {{cssxref("font-optical-sizing")}} wurde implementiert ([Firefox Bug 1435692](https://bugzil.la/1435692)).

### SVG

_Keine Änderungen._

### JavaScript

_Keine Änderungen._

### APIs

#### Neue APIs

- [`PointerEvents`](/de/docs/Web/API/PointerEvent) wurden im Firefox Desktop aktiviert ([Firefox Bug 1411467](https://bugzil.la/1411467)).

#### DOM

- Der Konstruktor [`EventTarget()`](/de/docs/Web/API/EventTarget/EventTarget) wurde implementiert ([Firefox Bug 1379688](https://bugzil.la/1379688)).
- Der Konstruktor [`Response()`](/de/docs/Web/API/Response/Response) kann nun einen `null` Wert für seinen `body` Parameter akzeptieren, gemäß der Spezifikation ([Firefox Bug 1303025](https://bugzil.la/1303025)).

#### DOM-Ereignisse

- Die Methode [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath) wurde implementiert ([Firefox Bug 1412775](https://bugzil.la/1412775)).

#### Service Worker

- Die [Clients API](/de/docs/Web/API/Clients) des Service Workers kann nun Fenster in einem separaten Browserprozess finden und mit ihnen kommunizieren ([Firefox Bug 1293277](https://bugzil.la/1293277)).
- Verschachtelte about:blank und about:srcdoc IFrames werden nun den Service Worker des übergeordneten Elements erben. Korrigiert in ([Firefox Bug 1293277](https://bugzil.la/1293277)) und ([Firefox Bug 1426979](https://bugzil.la/1426979)).
- Wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) zu [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) liefert, wird der Wert [`Response.url`](/de/docs/Web/API/Response/url) nun an die abgefangene Netzwerkanfrage als endgültige aufgelöste URL übergeben. In der Vergangenheit wurde dafür [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) verwendet. Das bedeutet zum Beispiel, wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt, wird die angegebene `Response.url` verwendet, um beliebige relative {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressourcen zu laden ([Firefox Bug 1222008](https://bugzil.la/1222008)).
- `FetchEvent.respondWith()` wird nun einen Netzwerkfehler auslösen, wenn der [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) `"same-origin"` ist und der bereitgestellte [`Response.type`](/de/docs/Web/API/Response/type) `"cors"` ist. ([Firefox Bug 1222008](https://bugzil.la/1222008))

#### Medien und WebRTC

- Die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Eigenschaft [`MediaStreamTrack.muted`](/de/docs/Web/API/MediaStreamTrack/muted), zusammen mit den Ereignissen [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) und den entsprechenden Ereignishandlern, [`onmute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`onunmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event), wurden implementiert. Der `muted` Zustand eines Tracks gibt an, dass der Track momentan nicht in der Lage ist, Mediendaten bereitzustellen.

  > [!NOTE]
  > Der `muted` Zustand eines Tracks ist für das, was typischerweise als Stummschalten und Aufheben der Stummschaltung eines Tracks gedacht ist, nicht nützlich. Verwenden Sie stattdessen die Eigenschaft [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled); durch Setzen von `enabled` auf `false` wird der Track nur leere Frames ausgeben.

- Firefox 59 auf Android unterstützt nun das HTTPS Live Streaming (HLS) Protokoll von Apple für Audio und Video. Dieses nicht-standardisierte Protokoll wird auf mobilen Geräten unterstützt, um die Kompatibilität mit Seiten zu verbessern, die es für mobiles Streaming benötigen. Es gibt derzeit keinen Plan, es in Firefox Desktop zu implementieren.
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) wurden implementiert, um Informationen über die Quellen jedes RTP-Streams zu liefern. Allerdings gab es vor der Veröffentlichung eine Spezifikationsänderung und wir haben diese standardmäßig durch die Präferenz `media.peerconnection.rtpsourcesapi.enable` deaktiviert ([Firefox Bug 1363667](https://bugzil.la/1363667), [Firefox Bug 1430213](https://bugzil.la/1430213) und [Firefox Bug 1433236](https://bugzil.la/1433236)).
- Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Schnittstelle wurde nun implementiert, da die Firefox-Implementierung von WebRTC nun Transceiver unterstützt, mit `RTCPeerConnection` und anderen Schnittstellen, die gemäß der neuesten Spezifikation angepasst wurden.
- Die Methode [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver) wurde hinzugefügt. Zusätzlich wurde das Verhalten von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aktualisiert, um bei Bedarf einen Transceiver zu erstellen.
- Die Unterstützung für [WebVTT](/de/docs/Web/API/WebVTT_API) Regionen wurde in Firefox 58 implementiert, war jedoch standardmäßig deaktiviert. Sie sind jetzt standardmäßig verfügbar ([Firefox Bug 1415805](https://bugzil.la/1415805)).
- Firefox unterstützt jetzt WebVTT `REGION` Definitionsblöcke, deren Einstellungslisten eine Einstellung pro Zeile enthalten, anstatt dass alle Einstellungen in der selben Zeile der WebVTT Datei stehen ([Firefox Bug 1415821](https://bugzil.la/1415821).

#### Canvas und WebGL

_Keine Änderungen._

### CSSOM

Die Schnittstelle [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) und ihre Eigenschaften `namespaceURL` und `prefix` wurden implementiert ([Firefox Bug 1326514](https://bugzil.la/1326514)).

### HTTP

_Keine Änderungen._

### Sicherheit

- Die Navigation auf oberster Ebene zu `data:` URLs wurde blockiert ([Firefox Bug 1401895](https://bugzil.la/1401895)). Weitere Details finden Sie unter [Blockierung von Top-Level-Navigations zu data URLs für Firefox 59](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).
- Die `SAMEORIGIN` Direktive des {{httpheader("X-Frame-Options")}} Headers wurde geändert, sodass nicht nur die Top-Level-IFrame im selben Ursprung geprüft wird, sondern auch alle ihre Vorfahren ([Firefox Bug 725490](https://bugzil.la/725490)).
- Bildressourcen, die von anderen Ursprüngen als dem aktuellen Dokument geladen werden, können keine HTTP-Authentifizierungsdialoge mehr auslösen ([Firefox Bug 1423146](https://bugzil.la/1423146)).
- Die HTTP-Authentifizierung verwendet nun `utf-8` Codierung für Benutzernamen und Passwörter (anstatt `ISO-8859-1`), um mit anderen Browsern paritätisch zu sein und potentielle Probleme zu vermeiden, wie in [Firefox Bug 1419658](https://bugzil.la/1419658) beschrieben.
- Täglich wird die [HSTS-Preload-Liste](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc) von Google aktualisiert. Normalerweise rechtfertigt dies keine Notiz, aber in dieser Version wurden neue TLDs aufgenommen, insbesondere `.app` und `.dev`. Während sie neue TLDs sind, könnten Entwickler sie für lokale Entwicklung genutzt haben und von dieser Änderung überrascht sein. Beachten Sie, dass [reservierte TLDs](https://datatracker.ietf.org/doc/html/rfc2606) stattdessen für die lokale Entwicklung verwendet werden sollten.

### Plugins

_Keine Änderungen._

### Sonstiges

_Keine Änderungen._

## Entfernungen aus der Webplattform

### HTML

Der nicht-standardmäßige `version` Parameter des [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) Attributs des {{htmlelement("script")}} Elements (z.B. `type="application/javascript;version=1.8"`) wurde entfernt ([Firefox Bug 1428745](https://bugzil.la/1428745)).

### CSS

- Die proprietäre `mozmm` {{cssxref("&lt;length&gt;")}} Einheit wurde entfernt ([Firefox Bug 1416564](https://bugzil.la/1416564)).
- Die proprietären `-moz-border-top-colors`, `-moz-border-right-colors`, `-moz-border-bottom-colors` und `-moz-border-left-colors` Eigenschaften sind nun auf den Einsatz im Chrome-Code beschränkt ([Firefox Bug 1417200](https://bugzil.la/1417200)).

### JavaScript

- Nicht-standardmäßige [konditionale Catch-Klauseln](/de/docs/Web/JavaScript/Reference/Statements/try...catch#conditional_catch_clauses) wurden entfernt ([Firefox Bug 1228841](https://bugzil.la/1228841)).

### APIs

- Die nicht-standardisierte Methode `Event.getPreventDefault()` wurde entfernt. Sie sollten stattdessen die Eigenschaft [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) verwenden, um festzustellen, ob [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem [`Event`](/de/docs/Web/API/Event) aufgerufen wurde.
- Die proprietäre `Navigator.mozNotification` Eigenschaft und das `DesktopNotification` Interface wurden entfernt zugunsten der standardmäßigen [Notifications API](/de/docs/Web/API/Notifications_API) ([Firefox Bug 952453](https://bugzil.la/952453)).
- Die proprietäre Methode `window.external.addSearchEngine()` wurde entfernt ([Firefox Bug 862147](https://bugzil.la/862147)). Siehe auch [`Window.external`](/de/docs/Web/API/Window/external) für weitere Details.
- Die nicht-standardmäßige Firefox-only [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Eigenschaft `mozAutoplayEnabled` wurde entfernt.

### SVG

Die Unterstützung für die SMIL `accessKey` Funktion wurde entfernt ([Firefox Bug 1423098](https://bugzil.la/1423098)).

### Sonstiges

Die Unterstützung für die nicht-standardmäßigen `pcast:` und `feed:` Protokolle wurde aus Firefox entfernt ([Firefox Bug 1420622](https://bugzil.la/1420622)).

## Änderungen für Add-on- und Mozilla-Entwickler

### WebExtensions

- Aktualisierungen bei [Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme):
  - neue Eigenschaften: `colors.background_tab_text`, `colors.toolbar_field_border`
  - alle Farbeigenschaften unterstützen nun sowohl Array-Stile aus Chrome als auch CSS-Farbwerte.

- Neue [Browsereinstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings):
  - [`contextMenuShowEvent`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent)
  - [`openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs)
  - [`openSearchResultsInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs)
  - [`proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings)

- Neue [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs) APIs:
  - [`tabs.captureTab()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
  - [`tabs.hide()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
  - [`tabs.show()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)

- Die [`contextMenus`](/de/docs/Archive/Add-ons/Legacy_Firefox_for_Android/API/NativeWindow/contextmenus) API unterstützt nun einen ["bookmark" Kontext](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).
- Die neue [`contentScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts) API ermöglicht die Registrierung von Inhalts-Skripten zur Laufzeit.
- Neue [`pageAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction), [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction), [`SidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction) APIs:
  - `browserAction/pageAction/sidebarAction.set*` Funktionen akzeptieren nun `null`, um Änderungen rückgängig zu machen.
  - [`browserAction.isEnabled()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled), [`pageAction.isShown()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/isShown), [`sidebarAction.isOpen()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen) Funktionen.

- Neue Option in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) um Seitenelemente standardmäßig anzuzeigen.
- Neue Werte für `protocol_handlers`:
  - "ssb" für Secure Scuttlebutt Kommunikation
  - "dat" für DATproject
  - "ipfs", "ipns", "dweb" für IPFS

- Neues [`privacy.websites`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites) Einstellung "cookieConfig".
- Unterstützung in der [`cookies`](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API für [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
- Neue Option `upgradeToSecure` in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest).

## Ältere Versionen

{{Firefox_for_developers}}
