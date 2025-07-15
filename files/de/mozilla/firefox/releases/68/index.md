---
title: Firefox 68 für Entwickler
short-title: Firefox 68
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

#### Browser/Web-Konsole

- Die Webkonsole zeigt jetzt [mehr Informationen über CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendeten ([Firefox-Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt Inhalte in der Webkonsole mit regulären Ausdrücken filtern ([Firefox-Bug 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole ermöglicht es nun, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen _Inhaltsnachrichten anzeigen_ aktivieren oder deaktivieren ([Firefox-Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können jetzt [in allen Dateien im aktuellen Projekt suchen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files), indem Sie im Debugger `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox-Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerküberwachung

- Die [Anfrageliste in der Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) erlaubt es Ihnen nun, eine spezifische URL zu blockieren ([Firefox-Bug 1151368](https://bugzil.la/1151368)).
- Sie können jetzt eine Netzwerk-Anfrage erneut senden, ohne Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox-Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Tabs in der Netzwerküberwachung erlaubt es Ihnen nun, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox-Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Ein Button wurde zum [Regelpanel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors hinzugefügt, der das Umschalten der Anzeige von Print-Media-Queries ermöglicht ([Firefox-Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Slider zur Änderung des `letter-spacing` ([Firefox-Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint nun neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen zu verstehen, warum bestimmte Styles nicht angewendet werden ([Firefox-Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [Einträge im lokalen und Sitzungs-Speicher löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage), indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox-Bug 1522893](https://bugzil.la/1522893)).

#### Sonstiges

- Der [Barrierefreiheits-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) beinhaltet jetzt eine neue Funktion _Auf Probleme prüfen_, die eine Reihe von Prüfwerkzeugen beinhaltet, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Die erste verfügbare Prüfung ist _Kontrast_, zum Hervorheben von Farbkontrastproblemen.
- Die Präferenz, die die Sichtbarkeit interner Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)-Seite steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox-Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet – das _Geräteeinstellungen_ Dialogfeld (Geräteauswahlmenü > _Liste bearbeiten…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox-Bug 1487857](https://bugzil.la/1487857)).

#### Entfernt

- Das Kontrollkästchen "Addon-Debugging aktivieren" wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)-Seite entfernt ([Firefox-Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}} Element – repräsentiert durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) – erhält jetzt ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)-Event zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn der Texttrack von einem Medienelement enthalten ist ([Firefox-Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} Elemente unterstützen wieder das `disabled` Attribut, allerdings mit verändertem Verhalten. Wenn `disabled` auf einem `<link>` Element zusammen mit `rel="stylesheet"` gesetzt wird, wird das referenzierte Stylesheet während des Seitenladevorgangs nicht geladen und nur auf Nachfrage geladen, wenn das `disabled` Attribut auf `false` geändert wird oder entfernt ([Firefox-Bug 1281135](https://bugzil.la/1281135)).

#### Entfernt

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht mehr unterstützt ([Firefox-Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox-Bug 1312163](https://bugzil.la/1312163)) und ([Firefox-Bug 1544136](https://bugzil.la/1544136)), dies beinhaltet:
  - Die `scroll-padding` Eigenschaft ([Firefox-Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaft ([Firefox-Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}} Eigenschaft ([Firefox-Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}} Eigenschaft wurde für die Kompatibilität mit anderen Browsern implementiert ([Firefox-Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudoelement hinzugefügt ([Firefox-Bug 205202](https://bugzil.la/205202)) und Animation für `::marker` Pseudos ([Firefox-Bug 1538618](https://bugzil.la/1538618))
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} so geändert, dass es ein berechneter Wert ist (außer für die {{cssxref("color")}} Eigenschaft) ([Firefox-Bug 760345](https://bugzil.la/760345)).
- Unterstützung für die `ch` Längeneinheit wurde korrigiert, sodass sie jetzt der Spezifikation entspricht (Backup für keine '0' Glyphe, vertikale Metriken) ([Firefox-Bug 282126](https://bugzil.la/282126))
- Die {{CSSxRef("counter-set")}} Eigenschaft wurde implementiert. ([Firefox-Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt Listennummerierung mit einem eingebauten "list-item" Zähler; dies behebt Fehler bei der Listennummerierung ([Firefox-Bug 288704](https://bugzil.la/288704)).
- Selektormatching und Parsenunterstützung wurde für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox-Bug 1545430](https://bugzil.la/1545430)) und ([Firefox-Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) werden jetzt in indirekt gerenderten Dingen unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox-Bug 1323962](https://bugzil.la/1323962)).
- Während wir die vorgeprägten Versionen der verschiedenen Gradienten-Eigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen verfügbar halten, haben wir deren Parsing überarbeitet, sodass sie viel mehr wie die nicht-vorgeprägten Versionen behandelt werden. Das bedeutet, dass bestimmte bestehende Styles nicht korrekt funktionieren.

  Insbesondere funktioniert die komplizierte Syntax, die sowohl einen Winkel als auch eine Position erfordert, nicht mehr, und das `to` Schlüsselwort im `<side-or-corner>` Parameter ist für die vorgeprägten Gradienten-Eigenschaften nicht erforderlich. Es wird empfohlen, stattdessen die standardmäßigen, nicht-vorgeprägten Gradienten-Eigenschaften zu verwenden, da diese nun weit verbreitet unterstützt werden ([Firefox-Bug 1547939](https://bugzil.la/1547939)).

#### Entfernt

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}} Eigenschaft wurde zu einer Langform gemacht, sodass die alte Kurzschreibweise wie `scroll-snap-type:mandatory` nicht mehr funktioniert.

### SVG

_Keine Änderungen._

### JavaScript

- Der neue {{jsxref("BigInt")}} Primitive ist standardmäßig aktiviert ([Firefox-Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox-Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veraltete [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) Eigenschaft sowie die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden zur Schnittstelle [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und haben es nie ganz geschafft, eliminiert zu werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Websites zu verbessern, die sie noch verwenden ([Firefox-Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) wurde jetzt standardmäßig auf Android aktiviert ([Firefox-Bug 1512813](https://bugzil.la/1512813)). Die Hinzufügung dieser API zu Desktop-Versionen von Firefox wird in [Firefox-Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window) Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird nun unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere identifizierende Informationen über das Hostgerät zu teilen ([Firefox-Bug 1527287](https://bugzil.la/1527287)).
- Die Methode [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) auf `HTMLImageElement` wird jetzt implementiert. Damit kann das Laden und Dekodieren eines Bildes ausgelöst werden, bevor es zum DOM hinzugefügt wird ([Firefox-Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um den nicht-standardmäßigen Wert `moz-chunked-arraybuffer` für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht mehr zu akzeptieren. Code, der ihn noch verwendet, sollte aktualisiert werden, um [die Fetch-API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox-Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt nun eine Warnung in der Konsole aus, wenn Sie eine synchrone Anfrage ausführen, während Sie ein [`unload`](/de/docs/Web/API/Window/unload_event), ein [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder ein [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Event behandeln ([Firefox-Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft wurde von der Schnittstelle [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) zur Schnittstelle [`Document`](/de/docs/Web/API/Document) verschoben, sodass Dokumente, die keine {{Glossary("HTML", "HTML")}} sind, Cookies verwenden können ([Firefox-Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, die angibt, ob der Browser daran gehindert werden soll, das neu fokussierte Element in den sichtbaren Bereich zu scrollen ([Firefox-Bug 1374045](https://bugzil.la/1374045)).

#### DOM Events

- [Firefox für Android](https://firefox-source-docs.mozilla.org/mobile/android/index.html) sendet ein [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis nicht mehr fälschlicherweise bis nach dem ersten Bild; dies verbessert die Web-Kompatibilität mit Websites, die nicht erwarten, dass dieses Ereignis auftritt ([Firefox-Bug 1528052](https://bugzil.la/1528052)).
- Die Auslösung von Ereignissen für nicht-primäre Maustasten wurde so angepasst, dass sie die Spezifikation genauer befolgen; das [`click`](/de/docs/Web/API/Element/click_event) Ereignis wird nicht mehr gesendet, wenn nicht-primäre Tasten gedrückt werden, sondern stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Zusätzlich wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr bei nicht-primären Tasten ausgelöst ([Firefox-Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre Eigenschaft `mozPressure` wurde als veraltet markiert und löst nun eine Warnung in der Konsole aus ([Firefox-Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores kann der OpenH264-Codec, der zur Handhabung von AVC/H.264-Videos in WebRTC-Verbindungen verwendet wird, ab Firefox 68 für Android nicht mehr heruntergeladen und installiert werden. Daher unterstützen neue Installationen von Firefox auf Android-Geräten kein AVC mehr in WebRTC-Anrufen. Wenn Sie von früheren Versionen von Firefox aktualisieren und den Codec bereits heruntergeladen haben, wird er weiterhin funktionieren. Dies betrifft keine anderen Plattformen. Weitere Details finden Sie in [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox-Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null` Kandidat, der an den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis-Handler übergeben wird, um anzuzeigen, dass ein Kandidat eingegangen ist, stattdessen anzeigt, dass keine weiteren Kandidaten eingehen werden; wenn dies passiert, erreicht der ICE-Gathering ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) Status `complete` ([Firefox-Bug 1318167](https://bugzil.la/1318167)).
- Die Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützen jetzt Videotracks; bisher funktionierten sie nur bei Audio ([Firefox-Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API Schnittstelle [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) wird nun unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist nun implementiert ([Firefox-Bug 1529695](https://bugzil.la/1529695)).
- Der Konstruktor [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) wurde aktualisiert, um der aktuellen Spezifikationsdefinition zu folgen, dass der "erste Audiotrack" im Stream der Track ist, dessen ID zuerst in lexikographischer Reihenfolge erscheint ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht mehr von einem unsicheren Kontext aus verwendet werden; der Versuch, dies zu tun, löst jetzt eine `NotAllowedError` Ausnahme aus. Sichere Kontexte sind diejenigen, die über HTTPS geladen werden, diejenigen, die über das `file:///` Schema lokalisiert sind, und diejenigen, die von `localhost` geladen werden. Wenn Sie unbedingt müssen, können Sie die Möglichkeit, unsichere Aufrufe von `getUserMedia()` durchzuführen, wieder aktivieren, indem Sie die Präferenz `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox-Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft in unsicheren Kontexten entfernen, um den gesamten Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices) APIs zu verhindern. **Dies ist bereits in Nightly-Builds der Fall.**

#### Entfernt

- Die nicht-standardisierte `XMLDocument.load()` Methode wurde entfernt ([Firefox-Bug 332175](https://bugzil.la/332175)).
- Die nicht-standardisierte `XMLDocument.async` Eigenschaft wurde entfernt ([Firefox-Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType` `token` Wert wurde entfernt ([Firefox-Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt die `executionContexts` Direktive nicht mehr. Diese wurde aufgrund von Problemen mit den Wechselwirkungen zwischen verschiedenen Arten von Daten zu unterschiedlichen Zeitpunkten im Navigationsprozess und der Art und Weise, wie die Spezifikation gestaltet ist, entfernt. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), diese Direktive aus der Spezifikation zu entfernen, aus diesem Grund und anderen ([Firefox-Bug 1548034](https://bugzil.la/1548034)).

#### Entfernt

- Die {{HTTPHeader("Content-Security-Policy")}} Direktive `require-sri-for` wird aufgrund von Bedenken hinsichtlich ihres Standardisierungsstatus nicht mehr unterstützt. Sie war zuvor nur hinter einer Präferenz verfügbar, die standardmäßig deaktiviert war ([Firefox-Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin policy behandeln alle Dateien in einem Verzeichnis als gleiche Ursprungsart](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), wurde Firefox so geändert, dass Dateien im gleichen Verzeichnis als von unterschiedlichen Ursprüngen behandelt werden. Dies hat eine Reihe von Nebenwirkungen auf das, was in Dokumenten geladen über file:// URLs funktionieren wird (siehe [Firefox-Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundinformationen). Zum Beispiel können Worker nicht mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl zu einem anderen Fenster ändert, wartet es nun auf die `focus` und `activate` Ereignisse, bevor es zurückkehrt ([Firefox-Bug 1335085](https://bugzil.la/1335085)).
- Der `TypeError: this.tabModal is null` Fehler, der manchmal beim Interagieren mit modalen Dialogen oder Benutzeraufforderungen auftrat, wurde behoben ([Firefox-Bug 1538782](https://bugzil.la/1538782)).

#### Sonstiges

- Die Funktion zum Erzwingen des Entladens von Hintergrund-Tabs unter niedriger Speicherbedingung wurde deaktiviert, um zu verhindern, dass Browserkontexte auf oberster Ebene magisch verschwinden ([Firefox-Bug 1553748](https://bugzil.la/1553748)).
- Bevorzugte Inhaltsprozesse, die dazu führten, dass HTTP-Authentifizierungsdialoge nicht erschienen, wenn zu einer Website navigiert wurde, nachdem ein neuer Tab geöffnet wurde, wurden deaktiviert ([Firefox-Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden als veraltet markiert und werden ab Firefox 71 entfernt ([Firefox-Bug 1545811](https://bugzil.la/1545811)).
- Eine `boolean`-Flagge `incognito` wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). Objekt hinzugefügt. Wenn `true`, zeigt es an, dass dies eine Anfrage im privaten Modus war ([Firefox-Bug 1545163](https://bugzil.la/1545163)).
- Die [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) Parameter können einen incognito-Parameter enthalten. Wenn angegeben, werden Anfragen, die nicht dem Inkognito-Zustand entsprechen (`true` oder `false`), herausgefiltert ([Firefox-Bug 1548177](https://bugzil.la/1548177)).
- Ein `string` Wert, `cookieStoreId`, der die Cookie-Speicher-ID des aktuellen Kontextes darstellt, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). Objekt hinzugefügt ([Firefox-Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox-Bug 1512171](https://bugzil.la/1512171)).
- Das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegebene Versprechen wird jetzt sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox-Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung für chrome.storage.managed wurde hinzugefügt, sodass Web-Erweiterungseinstellungen über Unternehmensrichtlinien implementiert werden können ([Firefox-Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur noch für HTTPS-Proxies ([Firefox-Bug 1549368](https://bugzil.la/1549368)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Release Beitrag: [Firefox 68: BigInts, Kontrastprüfungen und die QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)
