---
title: Firefox 68 für Entwickler
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: dc26ca2696c311b12c98df1511900612449dcb51
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser-/Web-Konsole

- Die Web-Konsole zeigt nun [mehr Informationen zu CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox-Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt den Inhalt in der Web-Konsole mit regulären Ausdrücken filtern ([Firefox-Bug 1441079](https://bugzil.la/1441079)).
- Die Browser-Konsole ermöglicht es Ihnen jetzt, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen _Inhaltsnachrichten anzeigen_ aktivieren oder deaktivieren ([Firefox-Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können nun [in allen Dateien des aktuellen Projekts suchen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files), indem Sie im Debugger `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox-Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerküberwachung

- Die Anfrageliste in der Netzwerküberwachung erlaubt es jetzt, eine spezifische URL zu blockieren ([Firefox-Bug 1151368](https://bugzil.la/1151368)).
- Sie können jetzt eine Netzwerk-Anfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox-Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des Registerkarten „Header“ in der Netzwerküberwachung erlaubt es Ihnen jetzt, alle oder einige Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox-Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Im [Regeln-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors wurde ein Button hinzugefügt, der es Ihnen erlaubt, die Anzeige von Druckmedien-Abfragen umzuschalten ([Firefox-Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler zum Anpassen des `letter-spacing` ([Firefox-Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox-Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [lokale und Sitzungs-Speicher](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage)-Einträge löschen, indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox-Bug 1522893](https://bugzil.la/1522893)).

#### Sonstiges

- Der [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt eine neue Funktion _Auf Fehler überprüfen_, die eine Reihe von Audit-Tools beinhaltet, um Zugänglichkeitsprobleme auf Ihren Webseiten hervorzuheben. Der erste verfügbare Check ist _Kontrast_, um Farbkontrastprobleme hervorzuheben.
- Die Präferenz, die die Sichtbarkeit interner Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)-Seite kontrolliert, wurde von `devtools.aboutdebugging.showSystemAddons` in `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox-Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet — der Dialog „Geräteeinstellungen“ (Geräteauswahlmenü > „Liste bearbeiten…“) ist nun intuitiver und einfacher zu benutzen ([Firefox-Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Das Kontrollkästchen „Add-on-Debuggen aktivieren“ wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite entfernt ([Firefox-Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — dargestellt durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält nun ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)-Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn der Text-Track von einem Media-Element enthalten wird ([Firefox-Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} Elemente unterstützen wieder das `disabled` Attribut, wenn auch mit anderem Verhalten. Wenn `disabled` auf einem `<link>` Element gesetzt ist, zusammen mit `rel="stylesheet"`, wird das referenzierte Stylesheet während des Seitenladens nicht geladen und wird bei Bedarf geladen, wenn das `disabled` Attribut auf `false` geändert oder entfernt wird ([Firefox-Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Element/meta) wird nicht mehr unterstützt ([Firefox-Bug 1457503](https://bugzil.la/1457503)).

### CSS

- Das [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox-Bug 1312163](https://bugzil.la/1312163)) und ([Firefox-Bug 1544136](https://bugzil.la/1544136)), dies umfasst:

  - Die `scroll-padding` Eigenschaften ([Firefox-Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaften ([Firefox-Bug 1373833](https://bugzil.la/1373833))
  - {{CSSxRef("scroll-snap-align")}} ([Firefox-Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("-webkit-line-clamp")}} Eigenschaft wurde zur Kompatibilität mit anderen Browsern implementiert ([Firefox-Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudo-Element hinzugefügt ([Firefox-Bug 205202](https://bugzil.la/205202)) sowie Animationen für `::marker` Pseudos ([Firefox-Bug 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} als berechneten Wert geändert (außer für die {{cssxref("color")}} Eigenschaft) ([Firefox-Bug 760345](https://bugzil.la/760345)).
- Die Unterstützung für die Längeneinheit `ch` wurde behoben, sodass sie jetzt der Spezifikation entspricht (Fallback für kein '0'-Glyph, vertikale Metriken) ([Firefox-Bug 282126](https://bugzil.la/282126)).
- Die {{CSSxRef("counter-set")}} Eigenschaft wurde implementiert ([Firefox-Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Listennummerierung mithilfe eines eingebauten "list-item" Zählers; dies behebt Fehler bei der Listennummerierung ([Firefox-Bug 288704](https://bugzil.la/288704)).
- Die Auswahlübereinstimmung und Parsing-Unterstützung wurde für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox-Bug 1545430](https://bugzil.la/1545430)) und ([Firefox-Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) werden nun in indirekt gerenderten Elementen unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox-Bug 1323962](https://bugzil.la/1323962)).
- Während wir die mit Präfix versehenen Versionen der verschiedenen Gradienteneigenschaften ({{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}} und {{cssxref("gradient/repeating-radial-gradient")}}) aus Kompatibilitätsgründen verfügbar halten, haben wir ihre Parsing-Weise überarbeitet, sodass sie mehr wie die nicht-präfixierten Versionen behandelt werden. Dies bedeutet, dass bestimmte bestehende Stile nicht mehr korrekt funktionieren werden.

  Insbesondere wird die komplexe Syntax, die sowohl einen Winkel als auch eine Position annimmt, nicht mehr funktionieren, und das `to` Schlüsselwort im `<side-or-corner>` Parameter ist für die präfixierten Gradienteigenschaften nicht mehr erforderlich. Sie werden ermutigt, die standardisierten, nicht-präfixierten Gradienteigenschaften zu verwenden, da diese jetzt weitgehend unterstützt werden ([Firefox-Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}} Eigenschaft ist zu einer Langform geworden, sodass die alte Kurzform-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktioniert.

### SVG

_Keine Änderungen._

### JavaScript

- Der neue {{jsxref("BigInt")}} Typ ist standardmäßig aktiviert ([Firefox-Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox-Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veralteten [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) Eigenschaften und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und konnten nie ganz abgeschafft werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz an Webseiten zu verbessern, die sie noch verwenden ([Firefox-Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) wurde nun standardmäßig auf Android aktiviert ([Firefox-Bug 1512813](https://bugzil.la/1512813)). Das Hinzufügen dieser API zu Desktop-Versionen von Firefox wird in [Firefox-Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window) Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere identifizierende Informationen über das Hostgerät zu teilen ([Firefox-Bug 1527287](https://bugzil.la/1527287)).
- Die [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) Methode auf `HTMLImageElement` ist jetzt implementiert. Diese kann verwendet werden, um das Laden und Dekodieren eines Bildes vor dem Hinzufügen zum DOM auszulösen ([Firefox-Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um den nicht-standardisierten `moz-chunked-arraybuffer` Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht mehr zu akzeptieren. Der Code, der ihn noch verwendet, sollte auf die Verwendung der [Fetch API als Stream](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) aktualisiert werden ([Firefox-Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in der Konsole aus, wenn Sie eine synchrone Anfrage durchführen, während ein [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignis verarbeitet wird ([Firefox-Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle zur [`Document`](/de/docs/Web/API/Document) Schnittstelle verschoben, wodurch es auch anderen Dokumenten als [HTML](/de/docs/Glossary/HTML) ermöglicht wird, Cookies zu verwenden ([Firefox-Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, die angibt, ob der Browser daran gehindert werden soll, das neu fokussierte Element in die Ansicht zu scrollen ([Firefox-Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) sendet nun nicht mehr fälschlicherweise ein [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis, bis nach dem ersten Frame gezeichnet wurde; dies verbessert die Webkompatibilität mit Seiten, die dieses Ereignis nicht erwarten ([Firefox-Bug 1528052](https://bugzil.la/1528052)).
- Das Auslösen von Ereignissen für nicht-primäre Maustasten wurde angepasst, um der Spezifikation näher zu kommen; das [`click`](/de/docs/Web/API/Element/click_event) Ereignis wird nicht mehr gesendet, wenn nicht-primäre Tasten geklickt werden, sondern der [`auxclick`](/de/docs/Web/API/Element/auxclick_event) wird verwendet. Darüber hinaus wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr für nicht-primäre Tasten ausgelöst ([Firefox-Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure` Eigenschaft wurde veraltet, und wird nun eine Warnung in der Konsole auslösen ([Firefox-Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play-Stores kann der OpenH264-Codec, der zum Verarbeiten von AVC/H.264-Videos in WebRTC-Verbindungen verwendet wird, ab Firefox 68 für Android nicht mehr heruntergeladen und installiert werden. Daher unterstützen Neuinstallationen von Firefox auf Android-Geräten kein AVC mehr in WebRTC-Anrufen. Wenn Sie von früheren Firefox-Versionen aktualisieren und der Codec bereits heruntergeladen wurde, funktioniert er weiterhin. Dies betrifft _nicht_ andere Plattformen. Weitere Details finden Sie in [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox-Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null` Kandidat, übergeben an den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler, nicht mehr bedeutet, dass ein Kandidat empfangen wurde, sondern dass keine weiteren Kandidaten kommen werden; wenn dies passiert, erreicht der ICE-Sammelzustand ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) `complete` ([Firefox-Bug 1318167](https://bugzil.la/1318167)).
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) unterstützen jetzt Videospuren; zuvor funktionierten sie nur bei Audio ([Firefox-Bug 1534466](https://bugzil.la/1534466)).
- Die Web-Audio-API-[`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) Schnittstelle wird jetzt unterstützt, sowie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox-Bug 1529695](https://bugzil.la/1529695)).
- Der [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) Konstruktor wurde aktualisiert, um der aktuellen Spezifikationsdefinition zu entsprechen, dass die "erste Audiospur" in dem Stream die Spur ist, deren ID zuerst in lexikographischer Reihenfolge kommt ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) darf nicht mehr von einem unsicheren Kontext aus verwendet werden; der Versuch, dies zu tun, wirft jetzt eine `NotAllowedError` Ausnahme. Sichere Kontexte sind diejenigen, die über HTTPS geladen werden, die mit dem `file:///` Schema lokalisierte und die von `localhost` geladenen. Vorläufig, falls unbedingt notwendig, können Sie die Fähigkeit, unsichere Aufrufe an `getUserMedia()` durchzuführen, wieder aktivieren, indem Sie die Präferenz `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox-Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In der Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft in unsicheren Kontexten entfernen, was den gesamten Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices) APIs verhindert. **Dies ist bereits der Fall in Nightly-Builds.**

#### Entfernungen

- Die nicht-standardisierte `XMLDocument.load()` Methode wurde entfernt ([Firefox-Bug 332175](https://bugzil.la/332175)).
- Die nicht-standardisierte `XMLDocument.async` Eigenschaft wurde entfernt ([Firefox-Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType` `token` Wert wurde entfernt ([Firefox-Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt das `executionContexts` Direktive nicht mehr. Dies wurde aufgrund von Problemen mit den Interaktionen zwischen Verbindungen verschiedener Arten von Daten zu verschiedenen Zeitpunkten im Navigationsprozess und in der Spezifikationsgestaltung entfernt. Es wurde [vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), dass dieses Direktive aus der Spezifikation entfernt wird, aus diesem Grund und anderen ([Firefox-Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Das {{HTTPHeader("Content-Security-Policy")}} Direktive `require-sri-for` wird aufgrund von Bedenken hinsichtlich seines Standardisierungsstatus nicht mehr unterstützt. Es war zuvor nur hinter einer Präferenz verfügbar, die standardmäßig deaktiviert war ([Firefox-Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin policy behandelt alle Dateien in einem Verzeichnis als aus demselben Ursprung stammend](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), wurden Änderungen vorgenommen, sodass Firefox jetzt Dateien im selben Verzeichnis als aus verschiedenen Ursprüngen stammend betrachtet. Dies hat eine Reihe von Nebenwirkungen darauf, was in Dokumenten funktioniert, die über file:// URLs geladen werden (sehen Sie sich [Firefox-Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundforschung an). Zum Beispiel können keine Worker mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl auf ein anderes Fenster ändert, wartet es jetzt auf dessen `focus` und `activate` Ereignisse, bevor es zurückkehrt ([Firefox-Bug 1335085](https://bugzil.la/1335085)).
- Der `TypeError: this.tabModal is null` Fehler, der manchmal bei der Interaktion mit Modaldialogen oder Benutzeraufforderungen auftrat, wurde behoben ([Firefox-Bug 1538782](https://bugzil.la/1538782)).

#### Sonstiges

- Die Funktion, Hintergrund-Tabs bei geringem Speicherzustand zu entladen, wurde deaktiviert, um zu verhindern, dass oberste Browser-Kontexte auf magische Weise verschwinden ([Firefox-Bug 1553748](https://bugzil.la/1553748)).
- Privilegierte Inhaltsprozesse, die dazu führten, dass HTTP-Authentifizierungsdialoge nicht angezeigt wurden, wenn zu einer Website navigiert wurde, nachdem ein neuer Tab geöffnet wurde, wurden deaktiviert ([Firefox-Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden als veraltet markiert und werden in Firefox 71 entfernt ([Firefox-Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean`-Flag, `incognito`, wurde zu den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). hinzugefügt. Wenn `true`, zeigt dies an, dass dies eine private Browsing-Anfrage war ([Firefox-Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter der [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen inkognito-Parameter enthalten. Wenn angegeben, werden Anfragen, die nicht mit dem Inkognito-Status übereinstimmen (`true` oder `false`), herausgefiltert ([Firefox-Bug 1548177](https://bugzil.la/1548177)).
- Ein `string` Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontexts darstellt, wurde den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). hinzugefügt ([Firefox-Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichen-Ordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox-Bug 1512171](https://bugzil.la/1512171)).
- Das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegebene Versprechen wird nun sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox-Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, wodurch Einstellungen von Erweiterungen über Unternehmensrichtlinien umgesetzt werden können ([Firefox-Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten nun nur noch für HTTPS-Proxies ([Firefox-Bug 1549368](https://bugzil.la/1549368)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks Release-Beitrag: [Firefox 68: BigInts, Kontrastprüfungen und die QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Ältere Versionen

{{Firefox_for_developers}}
