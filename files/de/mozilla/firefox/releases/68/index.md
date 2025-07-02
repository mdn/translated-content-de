---
title: Firefox 68 für Entwickler
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser/Web-Konsole

- Die Webkonsole zeigt jetzt [mehr Informationen über CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css) an, einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt Inhalte in der Webkonsole mithilfe von regulären Ausdrücken filtern ([Firefox Bug 1441079](https://bugzil.la/1441079)).
- Die Browser-Konsole ermöglicht es jetzt, Nachrichten aus dem Inhaltsprozess ein- oder auszublenden, indem Sie das Kontrollkästchen _Inhaltsnachrichten anzeigen_ aktivieren oder deaktivieren ([Firefox Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können jetzt [in allen Dateien im aktuellen Projekt vom Debugger aus](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files) suchen, indem Sie `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Der [Anfrageliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) im Netzwerkmonitor ermöglicht es Ihnen jetzt, eine bestimmte URL zu blockieren ([Firefox Bug 1151368](https://bugzil.la/1151368)).
- Sie können jetzt eine Netzwerkanfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü der [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Registerkarte des Netzwerkmonitors ermöglicht es jetzt, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Ein Button wurde zum [Regel-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors hinzugefügt, der es ermöglicht, die Anzeige sämtlicher Druck-Media-Queries umzuschalten ([Firefox Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriften-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler, um `letter-spacing` zu ändern ([Firefox Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln, die ungültige Werte haben, um Ihnen zu helfen, zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [Einträge im Local und Session Storage löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage), indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox Bug 1522893](https://bugzil.la/1522893)).

#### Andere

- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt eine neue Funktion _Nach Problemen suchen_, die eine Reihe von Prüfwerkzeugen umfassen wird, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Die erste verfügbare Prüfung ist _Kontrast_, um Farbkontrastprobleme hervorzuheben.
- Die Einstellung, die die Sichtbarkeit interner Erweiterungen (System-Add-Ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox Bug 1544372](https://bugzil.la/1544372)).
- Der [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde überarbeitet — der _Geräteeinstellungen_-Dialog (Geräteauswahlmenü > _Liste bearbeiten…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Das Kontrollkästchen "Add-On-Debugging aktivieren" wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite entfernt ([Firefox Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — repräsentiert durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält jetzt ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event) Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn die Textspur von einem Medien-Element enthalten ist ([Firefox Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} Elemente unterstützen wieder das `disabled`-Attribut, allerdings mit verändertem Verhalten. Wenn `disabled` auf einem `<link>`-Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet nicht während des Seitenladens geladen und auf Anforderung geladen, wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird ([Firefox Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht mehr unterstützt ([Firefox Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox Bug 1312163](https://bugzil.la/1312163)) und ([Firefox Bug 1544136](https://bugzil.la/1544136)), dies umfasst:
  - Die `scroll-padding` Eigenschaft ([Firefox Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaft ([Firefox Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}} Eigenschaft ([Firefox Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}} Eigenschaft wurde für die Kompatibilität mit anderen Browsern implementiert ([Firefox Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudo-Element hinzugefügt ([Firefox Bug 205202](https://bugzil.la/205202)) sowie Animationen für `::marker` Pseudoelemente ([Firefox Bug 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} zu einem berechneten Wert (mit Ausnahme der {{cssxref("color")}}-Eigenschaft) geändert ([Firefox Bug 760345](https://bugzil.la/760345)).
- Unterstützung für die `ch` Längeneinheit wurde so korrigiert, dass sie nun der Spezifikation entspricht (Fallback für kein '0'-Glyph, vertikale Metriken) ([Firefox Bug 282126](https://bugzil.la/282126)).
- Die {{CSSxRef("counter-set")}}-Eigenschaft wurde implementiert ([Firefox Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Nummerierung von Listen mit einem eingebauten "list-item"-Zähler; dies behebt Fehler bei der Nummerierung von Listen ([Firefox Bug 288704](https://bugzil.la/288704)).
- Selektorenabgleich und Parsing-Unterstützung wurden für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox Bug 1545430](https://bugzil.la/1545430)) und ([Firefox Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) werden jetzt für indirekt gerenderte Dinge unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox Bug 1323962](https://bugzil.la/1323962)).
- Während wir die vorgepräfixte Versionen verschiedener Gradienteneigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen weiterhin verfügbar halten, haben wir überprüft, wie sie geparst werden, sodass sie viel mehr wie die nicht vorgepräfixte Versionen behandelt werden. Das bedeutet, dass bestimmte bestehende Stile nicht mehr korrekt funktionieren werden.

  Besonders gilt dies für die komplizierte Syntax, die sowohl einen Winkel als auch eine Position nimmt, die nun nicht mehr funktionieren wird, und das `to`-Schlüsselwort im `<side-or-corner>`-Parameter ist nicht erforderlich für die vorgepräfixte Gradienteneigenschaften. Es wird dringend empfohlen, stattdessen die standardisierten, nicht vorgepräfixte Gradienteneigenschaften zu verwenden, da sie jetzt weitgehend unterstützt werden ([Firefox Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}} Eigenschaft ist jetzt eine Langform, sodass die alte Kurzform wie `scroll-snap-type:mandatory` nicht mehr funktioniert.

### SVG

_Keine Änderungen._

### JavaScript

- Das neue {{jsxref("BigInt")}}-Primitive ist standardmäßig aktiviert ([Firefox Bug 1527902](https://bugzil.la/1527902)).
- [String-generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veralteten [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und wurden nie vollständig ausgerottet, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz der Sites zu verbessern, die sie noch verwenden ([Firefox Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig auf Android aktiviert ([Firefox Bug 1512813](https://bugzil.la/1512813)). Die Hinzufügung dieser API zu Desktop-Versionen von Firefox wird im [Firefox Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window) Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn sie angegeben wird, wird der Inhalt des neuen Fensters ohne Freigabe des Hostnamen, der IP-Adresse, der URL oder anderer identifizierender Informationen über das Hostgerät geladen ([Firefox Bug 1527287](https://bugzil.la/1527287)).
- Die [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) Methode auf `HTMLImageElement` ist jetzt implementiert. Diese kann verwendet werden, um das Laden und Dekodieren eines Bildes zu initiieren, bevor es dem DOM hinzugefügt wird ([Firefox Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um den nicht standardmäßigen `moz-chunked-arraybuffer` Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht mehr zu akzeptieren. Code, der dies noch verwendet, sollte aktualisiert werden, um [die Fetch API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` zeigt jetzt eine Warnung in der Konsole an, wenn Sie eine synchrone Anfrage während der Behandlung eines [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignisses ausführen ([Firefox Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle zur [`Document`](/de/docs/Web/API/Document) Schnittstelle verschoben, sodass Dokumente, die keine {{Glossary("HTML", "HTML")}} sind, Cookies verwenden können ([Firefox Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, um anzugeben, ob der Browser daran gehindert werden soll, das neu fokussierte Element in den Ansichtsbereich zu scrollen ([Firefox Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) sendet das [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis nicht mehr fälschlicherweise, bis nach dem ersten Frame gerendert wurde; dies verbessert die Webkompatibilität mit Sites, die nicht erwarten, dass dieses Ereignis auftritt ([Firefox Bug 1528052](https://bugzil.la/1528052)).
- Die Disposition von Ereignissen für nicht primäre Maustasten folgt jetzt stärker der Spezifikation; das [`click`](/de/docs/Web/API/Element/click_event) Ereignis wird nicht mehr gesendet, wenn nicht primäre Tasten geklickt werden, sondern stattdessen [`auxclick`](/de/docs/Web/API/Element/auxclick_event). Darüber hinaus wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr für nicht primäre Tasten ausgelöst ([Firefox Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre Eigenschaft `mozPressure` wurde veraltet, und wird nun eine Warnung in der Konsole auslösen ([Firefox Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores, ab Firefox 68 für Android, kann der OpenH264-Codec, der zum Behandeln von AVC/H.264-Video in WebRTC-Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert werden. Daher unterstützen frische Installationen von Firefox auf Android-Geräten keinen AVC in WebRTC-Anrufen mehr. Wenn Sie von früheren Versionen von Firefox aktualisieren und den Codec bereits heruntergeladen haben, wird er weiterhin funktionieren. Dies betrifft _nicht_ andere Plattformen. Für weitere Details siehe [diesen Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null` Kandidat im [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignishandler, der den Empfang eines Kandidaten anzeigt, stattdessen angibt, dass keine weiteren Kandidaten kommen; wenn dies passiert, erreicht der ICE-Gathering-Status ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) `complete` ([Firefox Bug 1318167](https://bugzil.la/1318167)).
- Die Methoden [`RTCRtpReceiver.getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`RTCRtpReceiver.getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) unterstützen jetzt Videospuren; bisher funktionierten sie nur für Audio ([Firefox Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API-Schnittstelle [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) wird jetzt unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox Bug 1529695](https://bugzil.la/1529695)).
- Der Konstruktor [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) wurde aktualisiert, um die aktuelle Definition der Spezifikation zu entsprechen, dass die "erste Audiospur" im Stream die Spur ist, deren ID zuerst in lexikografischer Reihenfolge kommt ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht mehr aus einem unsicheren Kontext verwendet werden; der Versuch, dies zu tun, wirft jetzt eine `NotAllowedError`-Ausnahme. Sichere Kontexte sind solche, die über HTTPS geladen werden, solche, die über das `file:///` Schema lokalisiert werden, und solche, die von `localhost` geladen werden. Wenn Sie es vorübergehend doch tun müssen, können Sie die Fähigkeit, unsichere Aufrufe von `getUserMedia()` durchzuführen, durch Setzen der Präferenz `media.getusermedia.insecure.enabled` auf `true` reaktivieren ([Firefox Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft in unsicheren Kontexten entfernen, wodurch jeglicher Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices) APIs verhindert wird. **Dies ist bereits in Nightly-Builds der Fall.**

#### Entfernungen

- Die nicht standardisierte Methode `XMLDocument.load()` wurde entfernt ([Firefox Bug 332175](https://bugzil.la/332175)).
- Die nicht standardisierte Eigenschaft `XMLDocument.async` wurde entfernt ([Firefox Bug 1328138](https://bugzil.la/1328138)).
- Der `token`-Wert von `RTCIceServer.credentialType` wurde entfernt ([Firefox Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt nicht mehr die `executionContexts` Direktive. Diese wurde aufgrund von Problemen mit den Interaktionen zwischen Verknüpfungen verschiedener Datenarten an verschiedenen Punkten im Navigationsprozess und der Art und Weise, wie die Spezifikation gestaltet ist, entfernt. Es wurde [vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), diese Direktive aus der Spezifikation zu entfernen, aus diesem und anderen Gründen ([Firefox Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}} Direktive `require-sri-for` wird nicht mehr unterstützt, da es Bedenken über ihren Standardisierungsstatus gibt. Sie war zuvor nur hinter einer Präferenz verfügbar, die standardmäßig deaktiviert war ([Firefox Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin Policy behandelt alle Dateien in einem Verzeichnis als gleichen Ursprung](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), wurden Änderungen vorgenommen, sodass Firefox jetzt Dateien im gleichen Verzeichnis als von verschiedenen Ursprüngen betrachtet. Dies hat eine Reihe von Nebenwirkungen darauf, was in Dokumenten, die über file:// URLs geladen werden, funktionieren wird (siehe [Firefox Bug 1558299](https://bugzil.la/1558299) für hilfreiche Hintergrundrecherchen). Beispielsweise können jetzt keine Worker mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl auf ein anderes Fenster ändert, wartet es jetzt auf seine `focus` und `activate` Ereignisse, bevor es zurückkehrt ([Firefox Bug 1335085](https://bugzil.la/1335085)).
- Der Fehler `TypeError: this.tabModal is null`, der manchmal beim Interagieren mit modalen Dialogen oder Benutzereingabeaufforderungen auftrat, wurde behoben ([Firefox Bug 1538782](https://bugzil.la/1538782)).

#### Andere

- Die Funktion zum erzwingen des Entladens von Tabs im Hintergrund bei wenig Speicherbedingungen wurde deaktiviert, um zu vermeiden, dass oberste Browser-Kontexte magisch verschwinden ([Firefox Bug 1553748](https://bugzil.la/1553748)).
- Bevorzugte Inhaltsprozesse, die dazu führten, dass HTTP-Authentifizierungsdialoge nicht erschienen, wenn Sie zu einer Website navigierten, nachdem Sie einen neuen Tab geöffnet hatten, wurden deaktiviert ([Firefox Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-On-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden veraltet und werden aus Firefox 71 entfernt ([Firefox Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean`-Flag, `incognito`, wurde dem [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). Objekt hinzugefügt. Wenn `true`, zeigt es an, dass dies eine Anfrage im privaten Modus war ([Firefox Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen incognito-Parameter beinhalten. Wenn angegeben, werden Anfragen, die nicht den angegebenen Incognito-Zustand (`true` oder `false`) erfüllen, herausgefiltert ([Firefox Bug 1548177](https://bugzil.la/1548177)).
- Ein `string`-Wert, `cookieStoreId`, der die Cookie-Speicher-ID des aktuellen Kontexts darstellt, wurde dem [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). Objekt hinzugefügt ([Firefox Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-On versucht, einen Lesezeichenordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox Bug 1512171](https://bugzil.la/1512171)).
- Das Versprechen, das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegeben wird, wird jetzt sofort erfüllt, bevor die Tabs vollständig geladen sind ([Firefox Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, wodurch Web-Extension-Einstellungen über Unternehmensrichtlinien implementiert werden können ([Firefox Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur für HTTPS-Proxies ([Firefox Bug 1549368](https://bugzil.la/1549368)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 68: BigInts, Kontrastprüfungen, und die QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Ältere Versionen

{{Firefox_for_developers}}
