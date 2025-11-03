---
title: Firefox 68 Versionshinweise für Entwickler
short-title: Firefox 68
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser-/Webkonsole

- Die Webkonsole zeigt jetzt [mehr Informationen zu CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt Inhalte in der Webkonsole mit regulären Ausdrücken filtern ([Firefox Bug 1441079](https://bugzil.la/1441079)).
- Die Browser-Konsole erlaubt es Ihnen jetzt, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen _Inhaltsnachrichten anzeigen_ aktivieren oder deaktivieren ([Firefox Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können jetzt in allen Dateien im aktuellen Projekt vom Debugger aus [suchen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files), indem Sie `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Der Netzwerkmonitor [Anfrageliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) erlaubt es Ihnen jetzt, eine spezifische URL zu blockieren ([Firefox Bug 1151368](https://bugzil.la/1151368)).
- Sie können jetzt eine Netzwerk-Anfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, mithilfe des [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu) Befehls im Kontextmenü ([Firefox Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des Netzwerkmonitor [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers) Tabs ermöglicht es Ihnen jetzt, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Im [Regel-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors wurde eine Schaltfläche hinzugefügt, die es ermöglicht, die Anzeige von Print-Media-Queries umzuschalten ([Firefox Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriften-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler, um `letter-spacing` zu ändern ([Firefox Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln, die ungültige Werte haben, um Ihnen zu helfen, zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [Einträge im lokalen und Sitzungsspeicher löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage), indem Sie den Eintrag im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox Bug 1522893](https://bugzil.la/1522893)).

#### Sonstiges

- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt ein neues Feature _Check for issues_, welches eine Reihe von Audit-Tools umfassen wird, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Der erste verfügbare Check ist _Kontrast_, um Farbkontrastprobleme hervorzuheben.
- Die Voreinstellung, die die Sichtbarkeit von internen Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet — der _Geräteeinstellungen_ Dialog (Geräteauswahlmenü > _Liste bearbeiten…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Das Kontrollkästchen "Add-on-Debugging aktivieren" wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite entfernt ([Firefox Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}} Element — repräsentiert durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält jetzt ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event) Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn der Text-Track von einem Media-Element enthalten wird ([Firefox Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} Elemente unterstützen wieder das `disabled` Attribut, jedoch mit anderem Verhalten. Wenn `disabled` auf einem `<link>` Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet nicht während des Seitenladevorgangs geladen und wird bei Bedarf geladen, wenn das `disabled` Attribut auf `false` geändert oder entfernt wird ([Firefox Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht mehr unterstützt ([Firefox Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll-Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox Bug 1312163](https://bugzil.la/1312163)) und ([Firefox Bug 1544136](https://bugzil.la/1544136)), dies umfasst:
  - Die `scroll-padding` Eigenschaft ([Firefox Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaft ([Firefox Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}} Eigenschaft ([Firefox Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}} Eigenschaft wurde für die Kompatibilität mit anderen Browsern implementiert ([Firefox Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudo-Element hinzugefügt ([Firefox Bug 205202](https://bugzil.la/205202)) und Animation für `::marker` Pseudos ([Firefox Bug 1538618](https://bugzil.la/1538618))
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentColor")}} geändert, um ein berechneter Wert zu sein (außer für die {{cssxref("color")}} Eigenschaft) ([Firefox Bug 760345](https://bugzil.la/760345)).
- Unterstützung für die `ch` Längeneinheit wurde verbessert, sodass sie jetzt mit der Spezifikation übereinstimmt (Fallback für kein '0' Glyph, vertikale Metriken) ([Firefox Bug 282126](https://bugzil.la/282126))
- Die {{CSSxRef("counter-set")}} Eigenschaft wurde implementiert. ([Firefox Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Nummerierung von Listen mit einem eingebauten "list-item" Zähler; dies behebt Fehler in der Listennummerierung ([Firefox Bug 288704](https://bugzil.la/288704)).
- Support für die Auswahl- und Parsing-Unterstützung der [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) Selektor wurde implementiert ([Firefox Bug 1545430](https://bugzil.la/1545430)) und ([Firefox Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transformations](/de/docs/Web/CSS/CSS_transforms) werden jetzt bei indirekt gerenderten Dingen wie {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} unterstützt ([Firefox Bug 1323962](https://bugzil.la/1323962)).
- Während wir die prefixierten Versionen der verschiedenen Gradienteneigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen verfügbar halten, haben wir ihre Parsing-Weise überarbeitet, sodass sie viel mehr wie die nicht-prefixierten Versionen behandelt werden. Dies bedeutet, dass bestimmte bestehende Stile nicht mehr korrekt funktionieren.

  Insbesondere wird die komplizierte Syntax, die sowohl einen Winkel als auch eine Position akzeptiert, nicht mehr funktionieren, und das `to` Schlüsselwort im `<side-or-corner>` Parameter ist für die prefixierten Gradienten-Eigenschaften nicht erforderlich. Es wird empfohlen, die Standard-, nicht-präfixierten Gradienteigenschaften zu verwenden, da diese jetzt weit verbreitet unterstützt werden ([Firefox Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}} Eigenschaft ist zu einer Langhandschreibweise geworden, sodass die alte Kurzhand-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktioniert.

### SVG

_Keine Änderungen._

### JavaScript

- Das neue {{jsxref("BigInt")}} Primitive ist standardmäßig aktiviert ([Firefox Bug 1527902](https://bugzil.la/1527902)).
- [Allgemeine Methoden für Strings](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veralteten [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) Eigenschaft und [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) sowie [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) Methoden wurden zur [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle hinzugefügt. Diese wurden ursprünglich von Internet Explorer 9 eingeführt und sind nie vollständig verschwunden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Websites zu verbessern, die sie noch verwenden ([Firefox Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig auf Android aktiviert ([Firefox Bug 1512813](https://bugzil.la/1512813)). Die Hinzufügung dieser API zu Desktop-Versionen von Firefox wird in [Firefox Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window) Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters ohne die Weitergabe von Hostnamen, IP-Adresse, URL oder anderen identifizierenden Informationen über das Host-Gerät geladen ([Firefox Bug 1527287](https://bugzil.la/1527287)).
- Die [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) Methode auf `HTMLImageElement` ist jetzt implementiert. Dies kann verwendet werden, um das Laden und Dekodieren eines Bildes auszulösen, bevor es dem DOM hinzugefügt wird ([Firefox Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um nicht länger den nicht-standardmäßigen `moz-chunked-arraybuffer` Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) zu akzeptieren. Code, der dies noch verwendet, sollte aktualisiert werden, um [die Fetch API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in der Konsole aus, wenn Sie eine synchronisierte Anfrage während der Behandlung eines [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignisses durchführen ([Firefox Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle zur [`Document`](/de/docs/Web/API/Document) Schnittstelle verschoben, sodass Dokumente außer {{Glossary("HTML", "HTML")}} Cookies verwenden können ([Firefox Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, ob der Browser daran gehindert werden soll, das neu fokussierte Element in den Blick zu scrollen ([Firefox Bug 1374045](https://bugzil.la/1374045)).

#### DOM Ereignisse

- [Firefox für Android](https://firefox-source-docs.mozilla.org/mobile/android/index.html) sendet nicht länger ein [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis, bevor der erste Frame gerendert ist; dies verbessert die Webkompatibilität mit Websites, die nicht erwarten, dass dieses Ereignis auftritt ([Firefox Bug 1528052](https://bugzil.la/1528052)).
- Das Auslösen von Ereignissen für nicht-prime Mausknöpfe wurde so hergestellt, dass es der Spezifikation näher folgt; das [`click`](/de/docs/Web/API/Element/click_event) Ereignis wird nicht mehr gesendet, wenn nicht-prime Tasten angeklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Zusätzlich wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr für nicht-prime Tasten ausgelöst ([Firefox Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure` Eigenschaft wurde veraltet und wird jetzt eine Warnung in der Konsole auslösen ([Firefox Bug 1165211](https://bugzil.la/1165211)).

#### Media, Web Audio, und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores kann der für AVC/H.264 Video in WebRTC-Verbindungen verwendete OpenH264 Codec ab Firefox 68 für Android nicht mehr heruntergeladen und installiert werden. Daher unterstützen frische Installationen von Firefox auf Android-Geräten keine AVC in WebRTC-Anrufen mehr. Wenn Sie von früheren Firefox-Versionen aktualisieren und der Codec bereits heruntergeladen wurde, wird er weiterhin funktionieren. Dies betrifft _nicht_ andere Plattformen. Weitere Details finden Sie in [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null` Bewerber, der in den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Event-Handler eingegeben wird, der Empfang eines Kandidaten anzeigt, stattdessen bedeutet, dass keine weiteren Kandidaten kommen; wenn dies passiert, erreicht der ICE Gathering ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) Status `complete` ([Firefox Bug 1318167](https://bugzil.la/1318167)).
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) unterstützen jetzt Videospuren; zuvor funktionierten sie nur bei Audio ([Firefox Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) Schnittstelle wird jetzt unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox Bug 1529695](https://bugzil.la/1529695)).
- Der [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) Konstruktor wurde aktualisiert, um die aktuelle Spezifikationsdefinition zu erfüllen, dass die "erste Audiospur" im Stream die Spur ist, deren ID zuerst in lexikographischer Reihenfolge kommt ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht mehr von einem unsicheren Kontext verwendet werden; der Versuch, dies zu tun, wirft jetzt eine `NotAllowedError` Ausnahme. Sicher Kontexte sind die über HTTPS geladene, die mit dem `file:///` Schema lokalisierte und die von `localhost` geladene. Vorerst, wenn Sie müssen, können Sie die Fähigkeit wieder aktivieren, unsichere Aufrufe von `getUserMedia()` zu tätigen, indem Sie die Präferenz `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft in unsicheren Kontexten entfernen, was den Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices) APIs verhindert. **Dies ist bereits der Fall in Nightly Builds.**

#### Entfernungen

- Die nicht standardmäßige `XMLDocument.load()` Methode wurde entfernt ([Firefox Bug 332175](https://bugzil.la/332175)).
- Die nicht standardmäßige `XMLDocument.async` Eigenschaft wurde entfernt ([Firefox Bug 1328138](https://bugzil.la/1328138)).
- Die `RTCIceServer.credentialType` `token` Wert wurde entfernt ([Firefox Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt die `executionContexts` Direktive nicht mehr. Diese wurde aufgrund von Problemen mit Interaktionen zwischen Verbindungen verschiedener Arten von Daten zu verschiedenen Punkten im Navigationsprozess und der Weise, wie die Spezifikation entworfen ist, entfernt. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), dass diese Direktive aus der Spezifikation aus den genannten Gründen, unter anderem, entfernt wird ([Firefox Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}} Direktive `require-sri-for` wird aufgrund von Bedenken bezüglich ihres Standardisierungsstatus nicht mehr unterstützt. Sie war zuvor nur hinter einer Präferenz verfügbar, die standardmäßig deaktiviert war ([Firefox Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Die gleiche Ursprungsrichtlinie behandelt alle Dateien in einem Verzeichnis als aus demselben Ursprung](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), wurden Änderungen vorgenommen, sodass Firefox jetzt Dateien im selben Verzeichnis als aus verschiedenen Ursprüngen kommend behandelt. Dies hat eine Reihe von Nebeneffekten auf das, was in Dokumenten, die über file:// URLs geladen werden, funktioniert (siehe [Firefox Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundforschung). Zum Beispiel können Arbeiter nicht mehr geladen werden.

### WebDriver Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl zu einem anderen Fenster ändert, wartet es jetzt auf dessen `focus` und `activate` Ereignisse, bevor es zurückkehrt ([Firefox Bug 1335085](https://bugzil.la/1335085)).
- Der `TypeError: this.tabModal is null` Fehler, der manchmal beim Interagieren mit modalen Dialogen oder Benutzerabfragen aufgetreten ist, wurde behoben ([Firefox Bug 1538782](https://bugzil.la/1538782))

#### Sonstiges

- Die Funktion zum erzwungenen Entladen von Hintergrund-Tabs bei niedrigem Speicherzustand wurde deaktiviert, um zu verhindern, dass oberste Browser-Kontexte magisch verschwinden ([Firefox Bug 1553748](https://bugzil.la/1553748)).
- Bevorzugte Inhalte werden deaktiviert, da sie dazu führten, dass HTTP-Authentifizierungsdialoge nicht erschienen, wenn zu einer Website navigiert wurde, nachdem ein neuer Tab geöffnet wurde ([Firefox Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden veraltet und werden aus Firefox 71 entfernt ([Firefox Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean` Flag, `incognito`, wurde zum [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) Objekt hinzugefügt. Wenn `true`, zeigt es an, dass dies eine private Browsing-Anfrage war ([Firefox Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen Inkognito-Parameter enthalten. Wenn angegeben, werden Anfragen, die nicht mit dem Inkognito-Zustand übereinstimmen (`true` oder `false`), herausgefiltert ([Firefox Bug 1548177](https://bugzil.la/1548177)).
- Ein `string` Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontexts darstellt, wurde zum [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) Objekt hinzugefügt ([Firefox Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox Bug 1512171](https://bugzil.la/1512171)).
- Das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegebene Versprechen wird jetzt sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, sodass Weberweiterungseinstellungen über Unternehmensrichtlinien implementiert werden können ([Firefox Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur noch für HTTPS-Proxys ([Firefox Bug 1549368](https://bugzil.la/1549368).

### Änderungen im Manifest

_Keine Änderungen._

## Siehe auch

- Hacks Release-Artikel: [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)
