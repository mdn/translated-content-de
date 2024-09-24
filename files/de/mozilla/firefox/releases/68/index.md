---
title: Firefox 68 für Entwickler
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: dc26ca2696c311b12c98df1511900612449dcb51
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

#### Browser-/Webkonsole

- Die Webkonsole zeigt jetzt [mehr Informationen zu CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css) an, einschließlich einer Node-Liste der DOM-Elemente, die die Regel verwendet haben ([Firefox-Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt Inhalte in der Webkonsole mit regulären Ausdrücken filtern ([Firefox-Bug 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole erlaubt es Ihnen nun, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen mit der Bezeichnung _Inhaltsnachrichten anzeigen_ setzen oder löschen ([Firefox-Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können nun [suchen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files) in allen Dateien des aktuellen Projekts vom Debugger aus, indem Sie `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox-Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Der Anfragenliste im Netzwerkmonitor [request list](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) erlaubt es Ihnen nun, eine spezifische URL zu blockieren ([Firefox-Bug 1151368](https://bugzil.la/1151368)).
- Sie können nun eine Netzwerk-Anfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox-Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des Headers im Netzwerkmonitor-[Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Tab erlaubt es Ihnen nun, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox-Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Dem [Regel-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors wurde ein Schaltknopf hinzugefügt, der es ermöglicht, die Anzeige von Druckmedien-Abfragen umzuschalten ([Firefox-Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler zur Änderung des `letter-spacing` ([Firefox-Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint jetzt neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen, zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox-Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [lokale und Sessionstorage-Einträge löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage), indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox-Bug 1522893](https://bugzil.la/1522893)).

#### Sonstiges

- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt eine neue Funktion „Auf Probleme prüfen“, die eine Reihe von Prüftools zur Hervorhebung von Barrierefreiheitsproblemen auf Ihren Webseiten umfasst. Die erste verfügbare Überprüfung bezieht sich auf den _Kontrast_, um Probleme mit dem Farbkontrast hervorzuheben.
- Die Voreinstellung, die die Sichtbarkeit von internen Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox-Bug 1544372](https://bugzil.la/1544372)).
- Der [responsive Designmodus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet – das _Geräteeinstellungen_-Dialogfeld (Geräteauswahlmenü > _Liste bearbeiten…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox-Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Das Kontrollkästchen "Add-on Debugging aktivieren" wurde von der Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) entfernt ([Firefox-Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — dargestellt durch {{domxref("HTMLTrackElement")}} — erhält jetzt ein {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}}-Ereignis zusätzlich zu dem {{domxref("TextTrack")}} selbst, falls das Text-Track von einem Medienelement enthalten ist ([Firefox-Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}}-Elemente unterstützen wieder das `disabled`-Attribut, jedoch mit anderem Verhalten. Wenn `disabled` bei einem `<link>`-Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet beim Seitenladen nicht geladen und wird auf Abruf geladen, wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird ([Firefox-Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Element/meta) wird nicht mehr unterstützt ([Firefox-Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Spezifikationsversion aktualisiert ([Firefox-Bug 1312163](https://bugzil.la/1312163)) und ([Firefox-Bug 1544136](https://bugzil.la/1544136)), dies umfasst:

  - Die `scroll-padding`-Eigenschaften ([Firefox-Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin`-Eigenschaften ([Firefox-Bug 1373833](https://bugzil.la/1373833))
  - {{CSSxRef("scroll-snap-align")}} ([Firefox-Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("-webkit-line-clamp")}}-Eigenschaft wurde zur Kompatibilität mit anderen Browsern implementiert ([Firefox-Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudoelement hinzugefügt ([Firefox-Bug 205202](https://bugzil.la/205202)) und Animation für `::marker` Pseudos ([Firefox-Bug 1538618](https://bugzil.la/1538618))
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} zu einem berechneten Wert geändert (außer für die {{cssxref("color")}}-Eigenschaft) ([Firefox-Bug 760345](https://bugzil.la/760345)).
- Unterstützung für die `ch`-Längeneinheit wurde so behoben, dass sie jetzt der Spezifikation entspricht (Fallback für kein '0'-Glyph, vertikale Metrik) ([Firefox-Bug 282126](https://bugzil.la/282126))
- Die {{CSSxRef("counter-set")}}-Eigenschaft wurde implementiert. ([Firefox-Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Listennummerierung mit einem integrierten "list-item"-Zähler; dies behebt Bugs in der Listennummerierung ([Firefox-Bug 288704](https://bugzil.la/288704)).
- Selektorenabgleich und Parsingunterstützung wurden für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox-Bug 1545430](https://bugzil.la/1545430)) und ([Firefox-Bug 1545425](https://bugzil.la/1545425)).
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) werden jetzt in indirekt gerenderten Dingen unterstützt, z. B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox-Bug 1323962](https://bugzil.la/1323962)).
- Während wir die mit Präfix versehenen Versionen der verschiedenen Gradienten-Eigenschaften ({{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}} und {{cssxref("gradient/repeating-radial-gradient")}}) aus Kompatibilitätsgründen verfügbar halten, haben wir die Art und Weise, wie sie geparst werden, überarbeitet, sodass sie viel mehr wie die nicht mit Prefixes versehenen Versionen behandelt werden. Das bedeutet, dass bestimmte bestehende Stile nicht mehr korrekt funktionieren.

  Insbesondere funktioniert die komplizierte Syntax, die sowohl einen Winkel als auch eine Position enthält, nicht mehr, und das `to`-Schlüsselwort im `<side-or-corner>`-Parameter ist für die mit Prefixes versehenen Gradienten-Eigenschaften nicht erforderlich. Es wird empfohlen, die standardmäßigen, nicht mit Präfixen versehenen Gradienten-Eigenschaften zu verwenden, da diese jetzt weitgehend unterstützt werden ([Firefox-Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft ist zu einer Langform geworden, sodass die alte Kurzformatsyntax wie `scroll-snap-type:mandatory` nicht mehr funktioniert.

### SVG

_Keine Änderungen._

### JavaScript

- Die neue {{jsxref("BigInt")}}-Primitive ist standardmäßig aktiviert ([Firefox-Bug 1527902](https://bugzil.la/1527902)).
- [Allgemeine String-Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox-Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die legacy {{domxref("CSSStyleSheet.rules", "rules")}}-Eigenschaft und die Methoden {{domxref("CSSStyleSheet.addRule", "addRule()")}} und {{domxref("CSSStyleSheet.removeRule", "removeRule()")}} wurden zur {{domxref("CSSStyleSheet")}}-Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und konnten nie ganz ausgemerzt werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Websites zu verbessern, die sie noch verwenden ([Firefox-Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist nun standardmäßig auf Android aktiviert ([Firefox-Bug 1512813](https://bugzil.la/1512813)). Das Hinzufügen dieser API zu Desktop-Versionen von Firefox wird in [Firefox-Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die {{domxref("Window")}}-Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere identifizierende Informationen über das Host-Gerät zu teilen ([Firefox-Bug 1527287](https://bugzil.la/1527287)).
- Die {{domxref("HTMLImageElement.decode", "decode()")}}-Methode an `HTMLImageElement` ist nun implementiert. Sie kann verwendet werden, um das Laden und Dekodieren eines Bildes vor dem Hinzufügen zum DOM auszulösen ([Firefox-Bug 1501794](https://bugzil.la/1501794)).
- {{domxref("XMLHttpRequest")}} wurde aktualisiert, um den nicht standardmäßigen `moz-chunked-arraybuffer` Wert für {{domxref("XMLHttpRequest.responseType", "responseType")}} nicht länger zu akzeptieren. Code, der ihn noch verwendet, sollte aktualisiert werden, um [die Fetch-API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox-Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in die Konsole aus, wenn Sie eine synchrone Anfrage während der Verarbeitung eines {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}}, oder {{domxref("Window.pagehide_event", "pagehide")}}-Ereignisses durchführen ([Firefox-Bug 980902](https://bugzil.la/980902)).
- Die {{domxref("Document.cookie", "cookie")}}-Eigenschaft wurde von der {{domxref("HTMLDocument")}}-Schnittstelle zur {{domxref("Document")}}-Schnittstelle verschoben, wodurch auch Dokumente, die nicht {{Glossary("HTML")}} sind, Cookies verwenden können ([Firefox-Bug 144795](https://bugzil.la/144795)).
- Die {{domxref("HTMLElement.focus()")}} und {{domxref("SVGElement.focus()")}}-Methoden akzeptieren nun ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, welche angibt, ob verhindert werden soll, dass der Browser das neu fokussierte Element in den Blick scrollt ([Firefox-Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) sendet kein {{domxref("Window.resize_event", "resize")}}-Ereignis mehr, bis nach dem ersten Frame gemalt wurde; dies verbessert die Webkompatibilität mit Websites, die nicht erwarten, dass dieses Ereignis auftritt ([Firefox-Bug 1528052](https://bugzil.la/1528052)).
- Das Auslösen von Ereignissen für nicht-primäre Maustasten wurde so angepasst, dass es der Spezifikation näher entspricht; das {{domxref("Element.click_event", "click")}}-Ereignis wird beim Klicken auf nicht-primäre Tasten nicht mehr gesendet, stattdessen wird {{domxref("Element.auxclick_event", "auxclick")}} verwendet. Zudem wird {{domxref("Element.dblclick_event", "dblclick")}} bei nicht-primären Tasten nicht mehr ausgelöst ([Firefox-Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure`-Eigenschaft wurde als veraltet markiert und führt nun eine Warnung in der Konsole aus ([Firefox-Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Store kann ab Firefox 68 für Android der OpenH264-Codec, der zur Verarbeitung von AVC/H.264-Videos in WebRTC-Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert werden. Daher unterstützen Neuinstallationen von Firefox auf Android-Geräten kein AVC in WebRTC-Anrufen mehr. Wenn Sie von früheren Versionen von Firefox aktualisieren und den Codec bereits heruntergeladen haben, funktioniert er weiterhin. Dies betrifft _nicht_ andere Plattformen. Weitere Details finden Sie in [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox-Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null`-Kandidat, der dem {{domxref("RTCPeerConnection/icecandidate_event", "icecandidate")}}-Ereignishandler übergeben wird, nicht anzeigt, dass kein Kandidat mehr kommt; wenn dies geschieht, erreicht der Zustand der ICE-Sammlung ({{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}) `complete` ([Firefox-Bug 1318167](https://bugzil.la/1318167)).
- Die {{domxref("RTCRtpReceiver")}}-Methoden {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} und {{domxref("RTCRtpReceiver.getSynchronizationSources", "getSynchronizationSources()")}} unterstützen nun Videospuren; zuvor funktionierten sie nur bei Audio ([Firefox-Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API {{domxref("MediaStreamTrackAudioSourceNode")}}-Schnittstelle wird jetzt unterstützt, ebenso wie die Methode {{domxref("AudioContext.createMediaStreamTrackSource()")}} ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- {{domxref("RTCDataChannel.negotiated")}} ist jetzt implementiert ([Firefox-Bug 1529695](https://bugzil.la/1529695)).
- Der {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode", "MediaStreamAudioSourceNode()")}}-Konstruktor wurde aktualisiert, um der aktuellen Spezifikationsdefinition zu entsprechen, dass die "erste Audiospur" im Stream die Spur ist, deren ID zuerst in lexikographischer Reihenfolge kommt ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} kann nicht mehr aus einem unsicheren Kontext verwendet werden; der Versuch, dies zu tun, wirft jetzt eine `NotAllowedError`-Ausnahme. Sichere Kontexte sind diejenigen, die über HTTPS geladen werden, diejenigen, die mit dem „file:///“-Schema lokalisiert sind, und diejenigen, die von `localhost` geladen werden. Vorläufig, falls notwendig, können Sie die Möglichkeit, unsichere Anrufe an `getUserMedia()` vorzunehmen, wieder aktivieren, indem Sie die Voreinstellung `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox-Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die {{domxref("navigator.mediaDevices")}}-Eigenschaft in unsicheren Kontexten entfernen, wodurch der Zugriff auf die {{domxref("MediaDevices")}} APIs verhindert wird. **Dies ist bereits in Nightly-Builds der Fall.**

#### Entfernungen

- Die nicht-standardisierte `XMLDocument.load()`-Methode wurde entfernt ([Firefox-Bug 332175](https://bugzil.la/332175)).
- Die nicht-standardisierte `XMLDocument.async`-Eigenschaft wurde entfernt ([Firefox-Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType` `token` Wert wurde entfernt ([Firefox-Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}}-Header unterstützt nicht mehr die `executionContexts`-Direktive. Diese wurde aufgrund von Problemen mit Interaktionen zwischen Verbindungen zwischen verschiedenen Datenarten an verschiedenen Punkten im Navigationsprozess und der Art und Weise, wie die Spezifikation gestaltet ist, entfernt. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), diese Direktive aus der Spezifikation aus diesem Grund, unter anderem, zu entfernen ([Firefox-Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}}-Direktive `require-sri-for` wird nicht mehr unterstützt aufgrund von Bedenken hinsichtlich ihres Standardisierungsstatus. Sie war zuvor nur hinter einer Voreinstellung verfügbar, die standardmäßig deaktiviert war ([Firefox-Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) wurden Änderungen vorgenommen, sodass Firefox jetzt Dateien im selben Verzeichnis als von unterschiedlichen Ursprüngen behandelte Dateien ansieht. Dies hat eine Reihe von Nebeneffekten darauf, was in Dokumenten funktioniert, die über file:// URLs geladen werden (siehe [Firefox-Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundforschung). Beispielsweise können Worker nicht mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl in einem anderen Fenster ändert, wartet es jetzt auf seine `focus`- und `activate`-Ereignisse, bevor es zurückkehrt ([Firefox-Bug 1335085](https://bugzil.la/1335085)).
- Der `TypeError: this.tabModal is null`-Fehler, der manchmal beim Interagieren mit Modaldialogen oder Benutzeraufforderungen auftrat, wurde behoben ([Firefox-Bug 1538782](https://bugzil.la/1538782)).

#### Sonstige

- Die Funktion zum Erzwingen des Entladens von Hintergrund-Tabs bei wenig Speicher wurde deaktiviert, um zu verhindern, dass übergeordnete Browserkontexte wie von Zauberhand verschwinden ([Firefox-Bug 1553748](https://bugzil.la/1553748)).
- Prozeduren zum Erzwingen von Berechtigungen für privilegierte Navigationsinhalte, die dazu führten, dass HTTP-Authentifizierungsdialoge nicht erschienen, wenn zu einer Webseite navigiert wurde, nachdem ein neuer Tab geöffnet wurde, wurden deaktiviert ([Firefox-Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden als veraltet erklärt und werden aus Firefox 71 entfernt ([Firefox-Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean`-Flag, `incognito`, wurde zum [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) Objekt hinzugefügt. Wenn `true`, weist es darauf hin, dass dies eine private Browsing-Anfrage war ([Firefox-Bug 1545163](https://bugzil.la/1545163)).
- Die [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)-Parameter können einen incognito-Parameter enthalten. Falls angegeben, werden Anfragen, die nicht dem Inkognito-Status entsprechen (`true` oder `false`), herausgefiltert ([Firefox-Bug 1548177](https://bugzil.la/1548177)).
- Ein `string`-Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontexts darstellt, wurde dem [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) Objekt hinzugefügt ([Firefox-Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammverzeichnis hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox-Bug 1512171](https://bugzil.la/1512171)).
- Das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegebene Versprechen wird jetzt sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox-Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, die es ermöglicht, Web-Erweiterungseinstellungen über Unternehmensrichtlinien zu implementieren ([Firefox-Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur für HTTPS-Proxys ([Firefox-Bug 1549368](https://bugzil.la/1549368)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 68: BigInts, Kontrastprüfungen und die QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Ältere Versionen

{{Firefox_for_developers}}
