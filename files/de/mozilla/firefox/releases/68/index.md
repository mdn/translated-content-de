---
title: Firefox 68 für Entwickler
short-title: Firefox 68
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser/Webkonsole

- Die Webkonsole zeigt jetzt [mehr Informationen zu CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt Inhalte in der Webkonsole mit regulären Ausdrücken filtern ([Firefox Bug 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole erlaubt Ihnen jetzt, Nachrichten aus dem Inhaltsprozess ein- oder auszublenden, indem Sie das Kontrollkästchen _Nachrichten anzeigen_ aktivieren oder deaktivieren ([Firefox Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können jetzt in allen Dateien des aktuellen Projekts aus dem Debugger heraus [suchen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files), indem Sie `Shift` + `Strg` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerk-Monitor

- Der Netzwerk-Monitor [Anfrageliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) erlaubt es Ihnen jetzt, eine spezifische URL zu blockieren ([Firefox Bug 1151368](https://bugzil.la/1151368)).
- Sie können jetzt eine Netzwerkanfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des Netzwerk-Monitors auf der [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Registerkarte erlaubt es Ihnen nun, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Ein Button wurde zum [Regeln-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors hinzugefügt, der es erlaubt, die Anzeige von Druckmedienqueries umzuschalten ([Firefox Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler, um den `letter-spacing` zu ändern ([Firefox Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen, zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [Einträge im lokalen und Sitzungs-Speicher löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage), indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox Bug 1522893](https://bugzil.la/1522893)).

#### Weiteres

- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt eine neue Funktion _Probleme prüfen_, die eine Reihe von Prüfungstools beinhalten wird, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Die erste verfügbare Prüfung ist _Kontrast_, um Farbkontrastprobleme hervorzuheben.
- Die Einstellung, die die Sichtbarkeit von internen Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) steuert, wurde von `devtools.aboutdebugging.showSystemAddons` in `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet - der Dialog _Geräteeinstellungen_ (Menü zur Gerätauswahl > _Liste bearbeiten…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox Bug 1487857](https://bugzil.la/1487857)).

#### Entferntes

- Das Kontrollkästchen "Add-on-Debugging aktivieren" wurde von der Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) entfernt ([Firefox Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — dargestellt durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält nun ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)-Ereignis zusätzlich zu dem [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn das Text-Track von einem Medienelement enthalten ist ([Firefox Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}}-Elemente unterstützen das `disabled`-Attribut wieder, allerdings mit unterschiedlichem Verhalten. Wenn `disabled` auf einem `<link>`-Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet während des Seitenladens nicht geladen und auf Nachfrage geladen, wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird ([Firefox Bug 1281135](https://bugzil.la/1281135)).

#### Entferntes

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht mehr unterstützt ([Firefox Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox Bug 1312163](https://bugzil.la/1312163)) und ([Firefox Bug 1544136](https://bugzil.la/1544136)), dies umfasst:
  - Die `scroll-padding`-Eigenschaft ([Firefox Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin`-Eigenschaft ([Firefox Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}}-Eigenschaft ([Firefox Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}}-Eigenschaft wurde für die Kompatibilität mit anderen Browsern implementiert ([Firefox Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}}-Pseudoelement hinzugefügt ([Firefox Bug 205202](https://bugzil.la/205202)) und Animationen für `::marker`-Pseudoelemente ([Firefox Bug 1538618](https://bugzil.la/1538618))
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentColor")}} geändert, um ein berechneter Wert zu sein (außer für die {{cssxref("color")}}-Eigenschaft) ([Firefox Bug 760345](https://bugzil.la/760345)).
- Unterstützung für die `ch`-Längeneinheit wurde so behoben, dass sie nun der Spezifikation entspricht (Fallback für kein '0'-Glyph, vertikale Metriken) ([Firefox Bug 282126](https://bugzil.la/282126))
- Die {{CSSxRef("counter-set")}}-Eigenschaft wurde implementiert. ([Firefox Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Listennummerierung mit einem eingebauten "list-item"-Zähler; dies behebt Fehler in der Listennummerierung ([Firefox Bug 288704](https://bugzil.la/288704)).
- Selektormatching- und Parsing-Unterstützung wurde für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox Bug 1545430](https://bugzil.la/1545430)) und ([Firefox Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) werden jetzt in indirekt gerenderten Dingen unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox Bug 1323962](https://bugzil.la/1323962)).
- Während wir die mit Präfix versehenen Versionen der verschiedenen Verlaufseigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Gründen der Kompatibilität beibehalten, haben wir ihre Parsing-Methoden überarbeitet, sodass sie viel mehr wie die nicht mit Präfix versehenen Versionen behandelt werden. Dies bedeutet, dass bestimmte bestehende Stile nicht korrekt funktionieren werden.

  Insbesondere wird die komplizierte Syntax, die sowohl einen Winkel als auch eine Position annimmt, nicht mehr funktionieren, und das `to`-Schlüsselwort im \<side-or-corner>-Parameter ist für die gepräfxten Verlaufseigenschaften nicht erforderlich. Es wird empfohlen, die standardmäßigen, nicht mit Präfix versehenen Verlaufseigenschaften zu verwenden, da diese jetzt weitgehend unterstützt werden ([Firefox Bug 1547939](https://bugzil.la/1547939)).

#### Entferntes

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft wurde zu einer Langform, sodass die alte Kurzform-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktioniert.

### SVG

_Keine Änderungen._

### JavaScript

- Der neue {{jsxref("BigInt")}}-Primitive ist standardmäßig aktiviert ([Firefox Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veraltete [`rules`](/de/docs/Web/API/CSSStyleSheet/rules)-Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden dem [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Interface hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und konnten nie vollständig ausgemerzt werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz der Websites zu verbessern, die sie noch verwenden ([Firefox Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig auf Android aktiviert ([Firefox Bug 1512813](https://bugzil.la/1512813)). Das Hinzufügen dieser API zu den Desktop-Versionen von Firefox wird in [Firefox Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window)-Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn sie angegeben ist, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere identifizierende Informationen über das Hostgerät zu teilen ([Firefox Bug 1527287](https://bugzil.la/1527287)).
- Die [`decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode bei `HTMLImageElement` ist jetzt implementiert. Diese kann verwendet werden, um das Laden und Dekodieren eines Bildes auszulösen, bevor es dem DOM hinzugefügt wird ([Firefox Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um den nicht standardmäßig `moz-chunked-arraybuffer`-Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht mehr zu akzeptieren. Code, der ihn noch verwendet, sollte aktualisiert werden, um [die Fetch-API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in der Konsole aus, wenn Sie eine synchrone Anfrage ausführen, während Sie ein [`unload`](/de/docs/Web/API/Window/unload_event)-, [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)- oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis bearbeiten ([Firefox Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle auf die [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschoben, sodass auch Dokumente, die keine {{Glossary("HTML", "HTML")}} sind, Cookies verwenden können ([Firefox Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll`-Option enthalten kann, die angibt, ob das Browser-Scrolling des neu fokussierten Elements in den sichtbaren Bereich verhindert werden soll oder nicht ([Firefox Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](https://firefox-source-docs.mozilla.org/mobile/android/index.html) sendet nicht mehr inkorrekt ein [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis, bis der erste Frame gemalt ist; das verbessert die Webkompatibilität mit Websites, die dieses Ereignis nicht erwarten ([Firefox Bug 1528052](https://bugzil.la/1528052)).
- Das Dispatching von Ereignissen für nicht-primäre Maustasten wurde so angepasst, dass es der Spezifikation genauer folgt; das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wird nicht mehr gesendet, wenn nicht-primäre Tasten angeklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Außerdem wird das [`dblclick`](/de/docs/Web/API/Element/dblclick_event)-Ereignis nicht mehr für nicht-primäre Tasten ausgelöst ([Firefox Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure`-Eigenschaft wurde als veraltet markiert und löst nun eine Warnung in der Konsole aus ([Firefox Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores kann der OpenH264-Codec, der zur Handhabung von AVC/H.264-Video in WebRTC-Verbindungen verwendet wird, ab Firefox 68 für Android nicht mehr heruntergeladen und installiert werden. Daher unterstützen Neuinstallationen von Firefox auf Android-Geräten keinen AVC mehr in WebRTC-Anrufen. Wenn Sie von früheren Versionen von Firefox aktualisieren und der Codec bereits heruntergeladen wurde, wird er weiterhin funktionieren. Dies betrifft _nicht_ andere Plattformen. Für weitere Details siehe [diesen Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein über den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler übergebener `null`-Kandidat, der den Empfang eines Kandidaten anzeigt, stattdessen anzeigt, dass keine weiteren Kandidaten kommen; wenn dies passiert, erreicht der ICE-Sammelzustand ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) `complete` ([Firefox Bug 1318167](https://bugzil.la/1318167)).
- Die Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützen jetzt Videospuren; zuvor funktionierten sie nur für Audio ([Firefox Bug 1534466](https://bugzil.la/1534466)).
- Die Schnittstelle [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) der Web Audio API wird jetzt unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox Bug 1529695](https://bugzil.la/1529695)).
- Der Konstruktor [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) wurde aktualisiert, um der aktuellen Spezifikationsdefinition zu entsprechen, dass die "erste Audiospur" in dem Stream diejenige ist, deren ID lexikographisch zuerst kommt ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht mehr aus einem nicht sicheren Kontext verwendet werden; der Versuch dies zu tun, wirft jetzt eine `NotAllowedError`-Ausnahme. Sichere Kontexte sind solche, die über HTTPS geladen werden, solche, die über das `file:///`-Schema lokalisiert sind, und solche, die von `localhost` geladen werden. Für den Moment, falls unbedingt notwendig, können Sie die Möglichkeit, unsichere Aufrufe von `getUserMedia()` auszuführen, wieder aktivieren, indem Sie die Präferenz `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft in unsicheren Kontexten entfernen, wobei der Zugriff auf alle [`MediaDevices`](/de/docs/Web/API/MediaDevices)-APIs verhindert wird. **Dies ist bereits bei Nightly-Builds der Fall.**

#### Entferntes

- Die nicht standardisierte `XMLDocument.load()`-Methode wurde entfernt ([Firefox Bug 332175](https://bugzil.la/332175)).
- Die nicht standardisierte `XMLDocument.async`-Eigenschaft wurde entfernt ([Firefox Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType`-Wert `token` wurde entfernt ([Firefox Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}}-Header unterstützt die `executionContexts`-Anweisung nicht mehr. Diese wurde aufgrund von Problemen mit der Interaktion zwischen Verbindungen verschiedener Arten von Daten zu verschiedenen Zeitpunkten im Navigationsprozess und der Art und Weise, wie die Spezifikation gestaltet ist, entfernt. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), dass diese Anweisung aus der Spezifikation entfernt wird, unter anderem aus diesem Grund ([Firefox Bug 1548034](https://bugzil.la/1548034)).

#### Entferntes

- Die {{HTTPHeader("Content-Security-Policy")}}-Anweisung `require-sri-for` wird nicht mehr unterstützt, aufgrund von Bedenken hinsichtlich des Standardisierungsstatus. Sie war zuvor nur hinter einer Präferenz verfügbar, die standardmäßig deaktiviert war ([Firefox Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) wurden Änderungen vorgenommen, sodass Firefox jetzt Dateien im selben Verzeichnis als von unterschiedlichen Ursprüngen behandelt. Dies hat eine Reihe von Nebeneffekten auf das, was in Dokumenten funktioniert, die über file:// URLs geladen werden (siehe [Firefox Bug 1558299](https://bugzil.la/1558299) für hilfreiche Hintergrundforschung). Zum Beispiel können Worker nicht mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl zu einem anderen Fenster ändert, wartet es jetzt auf seine `focus`- und `activate`-Ereignisse, bevor es zurückkehrt ([Firefox Bug 1335085](https://bugzil.la/1335085)).
- Der `TypeError: this.tabModal is null`-Fehler wurde behoben, der manchmal beim Interagieren mit modalen Dialogen oder Benutzeraufforderungen auftrat ([Firefox Bug 1538782](https://bugzil.la/1538782))

#### Weiteres

- Die Funktion, Hintergrundregisterkarten bei wenig Speichererweiterungen zwangsweise zu entladen, wurde deaktiviert, um zu verhindern, dass oberste Browserkontexte magisch verschwinden ([Firefox Bug 1553748](https://bugzil.la/1553748)).
- Bevorzugte Inhaltsbearbeitungsprozesse, die dazu führten, dass HTTP-Authentifizierungsdialoge beim Navigieren zu einer Webseite nach dem Öffnen eines neuen Tabs nicht erschienen, wurden deaktiviert ([Firefox Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden als veraltet markiert und werden in Firefox 71 entfernt ([Firefox Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean`-Flag, `incognito`, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt. Wenn `true`, zeigt es an, dass dies eine Anfrage im privaten Modus war ([Firefox Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen incognito-Parameter enthalten. Wenn angegeben, werden Anfragen, die nicht dem Incognito-Status entsprechen (`true` oder `false`), herausgefiltert ([Firefox Bug 1548177](https://bugzil.la/1548177)).
- Ein `string`-Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontexts darstellt, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt ([Firefox Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung nun viel intuitiver ([Firefox Bug 1512171](https://bugzil.la/1512171)).
- Das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegebene Versprechen wird jetzt sofort erfüllt, bevor die Registerkarten vollständig geladen sind ([Firefox Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung für chrome.storage.managed wurde hinzugefügt, sodass Web-Extension-Einstellungen über Richtlinien implementiert werden können ([Firefox Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur noch für HTTPS-Proxys ([Firefox Bug 1549368](https://bugzil.la/1549368)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks-Release-Post: [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)
