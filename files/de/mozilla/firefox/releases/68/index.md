---
title: Firefox 68 für Entwickler
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser/Webkonsole

- Die Webkonsole zeigt jetzt [mehr Informationen über CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt Inhalte in der Webkonsole mit regulären Ausdrücken filtern ([Firefox Bug 1441079](https://bugzil.la/1441079)).
- Die Browser-Konsole ermöglicht es Ihnen jetzt, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen mit der Bezeichnung _Show Content Messages_ ein- oder ausschalten ([Firefox Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können jetzt [in allen Dateien im aktuellen Projekt suchen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files), indem Sie im Debugger `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Die [Anfrageliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) im Netzwerkmonitor ermöglicht es Ihnen jetzt, eine spezifische URL zu blockieren ([Firefox Bug 1151368](https://bugzil.la/1151368)).
- Sie können jetzt eine Netzwerkanfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Tabs im Netzwerkmonitor erlaubt es Ihnen jetzt, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Ein Button wurde zum [Regel-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors hinzugefügt, der es erlaubt, die Anzeige von Druckmedienabfragen umzuschalten ([Firefox Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriften-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler zur Änderung des `letter-spacing` ([Firefox Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln, die ungültige Werte haben, um Ihnen zu helfen zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [lokale und Sitzungsspeicher](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage)-Einträge löschen, indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox Bug 1522893](https://bugzil.la/1522893)).

#### Sonstiges

- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt eine neue Funktion _Check for issues_, die eine Reihe von Audit-Tools umfasst, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Die erste verfügbare Prüfung ist _Kontrast_, um Farbkontrastprobleme hervorzuheben.
- Die Präferenz, die die Sichtbarkeit interner Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)-Seite steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet – der Dialog _Device Settings_ (Geräteeinstellungen) (Geräteauswahlmenü > _List bearbeiten…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Das Kontrollkästchen "Add-on-Debugging aktivieren" wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)-Seite entfernt ([Firefox Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}} Element – dargestellt durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) – erhält jetzt ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event) Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn der Texttrack von einem Media-Element enthalten ist ([Firefox Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} Elemente unterstützen das `disabled` Attribut erneut, wenn auch mit unterschiedlichem Verhalten. Wenn `disabled` auf einem `<link>` Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet während des Seitenladens nicht geladen und auf Aufforderung geladen, wenn das `disabled` Attribut auf `false` geändert oder entfernt wird ([Firefox Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht mehr unterstützt ([Firefox Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox Bug 1312163](https://bugzil.la/1312163) und [Firefox Bug 1544136](https://bugzil.la/1544136)), dies beinhaltet:

  - Die `scroll-padding` Eigenschaft ([Firefox Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaft ([Firefox Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}} Eigenschaft ([Firefox Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}} Eigenschaft wurde für die Kompatibilität mit anderen Browsern implementiert ([Firefox Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudoelement hinzugefügt ([Firefox Bug 205202](https://bugzil.la/205202)) und Animation für `::marker` Pseudos ([Firefox Bug 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} in einen berechneten Wert geändert (außer für die {{cssxref("color")}} Eigenschaft) ([Firefox Bug 760345](https://bugzil.la/760345)).
- Unterstützung wurde für die `ch` Längeneinheit korrigiert, sodass sie jetzt der Spezifikation entspricht (Fallback für kein '0'-Glyph, vertikale Metriken) ([Firefox Bug 282126](https://bugzil.la/282126)).
- Die {{CSSxRef("counter-set")}} Eigenschaft wurde implementiert. ([Firefox Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Nummerierung von Listen mit einem eingebauten "list-item" Zähler; dies behebt Nummerierungsfehler bei Listen ([Firefox Bug 288704](https://bugzil.la/288704)).
- Selektorabgleich und Parsing-Unterstützung wurden für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox Bug 1545430](https://bugzil.la/1545430) und [Firefox Bug 1545425](https://bugzil.la/1545425)).
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) werden jetzt in indirekt gerenderten Dingen unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox Bug 1323962](https://bugzil.la/1323962)).
- Während wir die vorangestellten Versionen der verschiedenen Gradienteigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen verfügbar halten, haben wir ihre Parsingweise überarbeitet, sodass sie jetzt viel mehr wie die nicht vorangestellten Versionen behandelt werden. Dies bedeutet, dass bestimmte vorhandene Stile nicht korrekt funktionieren.

  Insbesondere wird die komplexe Syntax, die sowohl einen Winkel als auch eine Position verwenden, nicht mehr funktionieren, und das `to` Schlüsselwort im `<side-or-corner>` Parameter ist nicht mehr erforderlich für die vorangestellten Gradienteigenschaften. Sie werden ermutigt, die standardmäßigen, nicht vorangestellten Gradienteigenschaften zu verwenden, da diese jetzt weitgehend unterstützt werden ([Firefox Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}} Eigenschaft ist zu einer Langform geworden, so dass die alte Kurzform-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktionieren wird.

### SVG

_Keine Änderungen._

### JavaScript

- Der neue {{jsxref("BigInt")}} Primitive ist standardmäßig aktiviert ([Firefox Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS-Objektmodell (CSSOM)

- Die veraltete [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden zur [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und haben es nie geschafft, vollständig ausgemerzt zu werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Seiten zu verbessern, die sie immer noch verwenden ([Firefox Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) wurde jetzt standardmäßig auf Android aktiviert ([Firefox Bug 1512813](https://bugzil.la/1512813)). Das Hinzufügen dieser API zu den Desktop-Versionen von Firefox wird in [Firefox Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Das [`Window`](/de/docs/Web/API/Window) Feature [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn es angegeben wird, wird der Inhalt des neuen Fensters geladen, ohne den Hostname, die IP-Adresse, die URL oder andere identifizierende Informationen über das Hostgerät zu teilen ([Firefox Bug 1527287](https://bugzil.la/1527287)).
- Die Methode [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) auf `HTMLImageElement` ist jetzt implementiert. Diese kann verwendet werden, um das Laden und Decodieren eines Bildes auszulösen, bevor es zum DOM hinzugefügt wird ([Firefox Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um den nicht-Standardwert `moz-chunked-arraybuffer` für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht mehr zu akzeptieren. Der immer noch verwendete Code sollte aktualisiert werden, um [die Fetch-API als Stream](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) zu verwenden ([Firefox Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in der Konsole aus, wenn Sie eine synchrone Anfrage während des Handlings eines [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignisses durchführen ([Firefox Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle zur [`Document`](/de/docs/Web/API/Document) Schnittstelle verschoben, sodass andere Dokumente als {{Glossary("HTML", "HTML")}} Cookies verwenden können ([Firefox Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren nun ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, die angibt, ob der Browser am Scrollen des neu fokussierten Elements in die Ansicht gehindert werden soll ([Firefox Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) sendet nicht mehr irrtümlich ein [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis, bis der erste Frame gezeichnet ist; dies verbessert die Webkompatibilität mit Seiten, die nicht damit rechnen, dass dieses Ereignis auftritt ([Firefox Bug 1528052](https://bugzil.la/1528052)).
- Die Versendung von Ereignissen für nicht primäre Maustasten wurde so geändert, dass sie der Spezifikation näher folgt; das [`click`](/de/docs/Web/API/Element/click_event) Ereignis wird nicht mehr gesendet, wenn nicht primäre Knöpfe geklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Darüber hinaus wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) für nicht primäre Knöpfe nicht mehr ausgelöst ([Firefox Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure` Eigenschaft wurde veraltet und löst jetzt eine Warnung in der Konsole aus ([Firefox Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen der Richtlinien des Google Play Store kann ab Firefox 68 für Android der OpenH264-Codec, der zur Verarbeitung von AVC/H.264-Video in WebRTC-Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert werden. Daher unterstützen frische Installationen von Firefox auf Android-Geräten AVC in WebRTC-Anrufen nicht mehr. Wenn Sie von früheren Versionen von Firefox aktualisieren und den Codec bereits heruntergeladen haben, wird er weiterhin funktionieren. Dies betrifft _keine_ anderen Plattformen. Weitere Details finden Sie in [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null` Kandidat, der an den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignishandler übergeben wird, was auf den Empfang eines Kandidaten hinweist, stattdessen bedeutet, dass keine weiteren Kandidaten kommen; wenn dies passiert, wird der ICE-Sammelzustand ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) zu `complete` ([Firefox Bug 1318167](https://bugzil.la/1318167)).
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) unterstützen jetzt Videospuren; vorher funktionierten sie nur auf Audio ([Firefox Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) Schnittstelle wird jetzt unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox Bug 1529695](https://bugzil.la/1529695)).
- Der [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) Konstruktor wurde aktualisiert, um der aktuellen Spezifikation zu entsprechen, die definiert, dass die "erste Audiospur" im Stream die Spur ist, deren ID zuerst in lexikographischer Reihenfolge kommt ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) darf nicht mehr aus einem unsicheren Kontext verwendet werden; der Versuch, dies zu tun, wirft jetzt eine `NotAllowedError` Ausnahme. Sichere Kontexte sind jene, die über HTTPS geladen werden, jene, die über das `file:///` Schema gefunden werden, und solche, die von `localhost` geladen werden. Wenn Sie es derzeit zwingend benötigen, können Sie die Fähigkeit, unsichere Aufrufe von `getUserMedia()` auszuführen, wieder aktivieren, indem Sie die Präferenz `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft in unsicheren Kontexten entfernen, was sämtlichen Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices) APIs verhindert. **Dies ist bereits der Fall in Nightly Builds.**

#### Entfernungen

- Die nicht standardmäßige Methode `XMLDocument.load()` wurde entfernt ([Firefox Bug 332175](https://bugzil.la/332175)).
- Die nicht standardmäßige `XMLDocument.async` Eigenschaft wurde entfernt ([Firefox Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType` `token` Wert wurde entfernt ([Firefox Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt nicht mehr die `executionContexts` Direktive. Diese wurde aufgrund von Problemen mit den Interaktionen zwischen Verbindungen unterschiedlicher Datenarten zu verschiedenen Zeitpunkten im Navigationsprozess und der Art, wie die Spezifikation gestaltet ist, entfernt. Es wurde [vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), dass diese Direktive aus der Spezifikation aus ähnlichen Gründen entfernt werden sollte ([Firefox Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}} Direktive `require-sri-for` wird aufgrund von Bedenken bezüglich ihres Standardisierungsstatus nicht mehr unterstützt. Sie war zuvor nur hinter einer Präferenz verfügbar, die standardmäßig ausgeschaltet war ([Firefox Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Die Same-Origin-Policy behandelt alle Dateien in einem Verzeichnis als gleiche Herkunft](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), wurden Änderungen vorgenommen, sodass Firefox jetzt Dateien im selben Verzeichnis als von unterschiedlichen Ursprüngen stammend behandelt. Dies hat eine Reihe von Nebeneffekten darauf, was in Dokumenten, die über file:// URLs geladen werden, funktionieren wird (siehe [Firefox Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundforschung). Zum Beispiel können keine Worker mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerkorrekturen

- Wenn `WebDriver:SwitchToWindow` die Auswahl zu einem anderen Fenster ändert, wartet es jetzt auf seine `focus` und `activate` Ereignisse, bevor es zurückkehrt ([Firefox Bug 1335085](https://bugzil.la/1335085)).
- Der Fehler `TypeError: this.tabModal is null`, der manchmal bei der Interaktion mit modalen Dialogen oder Benutzerhinweisen auftrat, wurde behoben ([Firefox Bug 1538782](https://bugzil.la/1538782)).

#### Sonstiges

- Die Funktion, Hintergrundtabs unter niedrigen Speicherbedingungen gezwungen zu entladen, wurde deaktiviert, um zu verhindern, dass oberste Browserkontexte magisch verschwinden ([Firefox Bug 1553748](https://bugzil.la/1553748)).
- Bevorzugte Inhaltsprozesse wurden deaktiviert, die dazu führten, dass HTTP-Authentifizierungsdialoge nicht erschienen, wenn zu einer Website navigiert wurde, nachdem ein neuer Tab geöffnet wurde ([Firefox Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden veraltet und werden in Firefox 71 entfernt ([Firefox Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean`-Flag, `incognito`, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt. Wenn `true`, zeigt es an, dass es sich um eine private Browsing-Anfrage handelt ([Firefox Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter von [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen Inkognito-Parameter beinhalten. Wenn bereitgestellt, werden Anfragen, die nicht dem Inkognito-Status entsprechen (`true` oder `false`), herausgefiltert ([Firefox Bug 1548177](https://bugzil.la/1548177)).
- Ein `string`-Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontextes darstellt, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt ([Firefox Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox Bug 1512171](https://bugzil.la/1512171)).
- Das zurückgegebene Versprechen von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) löst sich jetzt sofort auf, bevor die Tabs vollständig geladen sind ([Firefox Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, wodurch Web-Erweiterungseinstellungen über Unternehmensrichtlinie implementiert werden können ([Firefox Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur für HTTPS-Proxies ([Firefox Bug 1549368](https://bugzil.la/1549368)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Release Post: [Firefox 68: BigInts, Kontrastprüfungen und die QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Ältere Versionen

{{Firefox_for_developers}}
