---
title: Firefox 68 für Entwickler
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 68, die Entwickler betreffen. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser-/Webkonsole

- Die Webkonsole zeigt nun [mehr Informationen zu CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css) an, einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox-Bug 1093953](https://bugzil.la/1093953)).
- Sie können nun Inhalte in der Webkonsole mithilfe von regulären Ausdrücken filtern ([Firefox-Bug 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole ermöglicht es jetzt, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen _Show Content Messages_ aktivieren oder deaktivieren ([Firefox-Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können nun [in allen Dateien des aktuellen Projekts suchen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files), indem Sie im Debugger `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox-Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Die Anfrageliste im Netzwerkmonitor ermöglicht es Ihnen jetzt, eine bestimmte URL zu blockieren ([Firefox-Bug 1151368](https://bugzil.la/1151368)).
- Sie können nun eine Netzwerkanfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, mithilfe des [Resend](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehls im Kontextmenü ([Firefox-Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des Netzwerkmonitors im [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Tab ermöglicht es jetzt, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox-Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Im [Regeln-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors wurde ein Button hinzugefügt, der Ihnen ermöglicht, die Anzeige von Print Media Queries umzuschalten ([Firefox-Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält nun einen Schieberegler zur Anpassung des `letter-spacing` ([Firefox-Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox-Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [Lokalspeicher- und Sitzungspeichereinträge löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage), indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox-Bug 1522893](https://bugzil.la/1522893)).

#### Andere

- Der [Barrierefreiheitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt eine neue Funktion _Check for issues_, die eine Reihe von Auditing-Tools umfasst, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Der erste verfügbare Check ist _contrast_, um Farbkontrastprobleme hervorzuheben.
- Die Präferenz, die die Sichtbarkeit interner Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)-Seite steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox-Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet – der _Device Settings_-Dialog (Geräteauswahlmenü > _Edit List…_) ist nun intuitiver und einfacher zu verwenden ([Firefox-Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Die Checkbox "Enable add-on debugging" wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html)-Seite entfernt ([Firefox-Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — repräsentiert durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält nun ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)-Ereignis zusätzlich zum eigentlichen [`TextTrack`](/de/docs/Web/API/TextTrack), wenn die Textspur von einem Medienelement enthalten wird ([Firefox-Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} Elemente unterstützen erneut das `disabled` Attribut, wenn auch mit anderem Verhalten. Wenn `disabled` auf einem `<link>`-Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet nicht während des Ladevorgangs geladen und auf Anforderung geladen, wenn das `disabled` Attribut auf `false` geändert oder entfernt wird ([Firefox-Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht mehr unterstützt ([Firefox-Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox-Bug 1312163](https://bugzil.la/1312163)) und ([Firefox-Bug 1544136](https://bugzil.la/1544136)), dies umfasst:

  - Die `scroll-padding` Eigenschaft ([Firefox-Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaft ([Firefox-Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}} Eigenschaft ([Firefox-Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}} Eigenschaft wurde für die Kompatibilität mit anderen Browsern implementiert ([Firefox-Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudoelement hinzugefügt ([Firefox-Bug 205202](https://bugzil.la/205202)) und Animationen für `::marker` Pseudoelemente ([Firefox-Bug 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} in einen berechneten Wert geändert (außer für die {{cssxref("color")}} Eigenschaft) ([Firefox-Bug 760345](https://bugzil.la/760345)).
- Unterstützung für die Längeneinheit `ch` wurde korrigiert, um jetzt der Spezifikation zu entsprechen (Fallback für kein '0'-Glyph, vertikale Metriken) ([Firefox-Bug 282126](https://bugzil.la/282126)).
- Die {{CSSxRef("counter-set")}} Eigenschaft wurde implementiert. ([Firefox-Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Listen-Numerierung mit einem eingebauten "list-item" Counter; dies behebt Listennummerierungsfehler ([Firefox-Bug 288704](https://bugzil.la/288704)).
- Selektormatching und Parsunterstützung wurde für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox-Bug 1545430](https://bugzil.la/1545430)) und ([Firefox-Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) werden nun in indirekt gerenderten Objekten unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox-Bug 1323962](https://bugzil.la/1323962)).
- Während wir die vorgeprefixten Versionen der verschiedenen Gradienteigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}} und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen beibehalten, haben wir deren Parsing überarbeitet, sodass sie nun viel mehr wie die nicht-prefixten Versionen behandelt werden. Das bedeutet, dass bestimmte vorhandene Stile nicht korrekt funktionieren werden.

  Insbesondere die komplizierte Syntax, die sowohl einen Winkel als auch eine Position enthält, wird nicht mehr funktionieren, und das `to` Schlüsselwort im `<side-or-corner>` Parameter ist für die prefiixten Gradienteigenschaften nicht erforderlich. Sie werden ermutigt, stattdessen die standardmäßigen, nicht-prefiixten Gradienteigenschaften zu verwenden, da sie nun weitgehend unterstützt werden ([Firefox-Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}} Eigenschaft ist zu einer Langform geworden, sodass die alte Kurzformsyntax wie `scroll-snap-type:mandatory` nicht mehr funktionieren wird.

### SVG

_Keine Änderungen._

### JavaScript

- Der neue {{jsxref("BigInt")}}-Primitive ist standardmäßig aktiviert ([Firefox-Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox-Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veraltete [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden zur [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und konnten nie vollständig beseitigt werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Websites zu verbessern, die sie noch verwenden ([Firefox-Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) wurde nun standardmäßig auf Android aktiviert ([Firefox-Bug 1512813](https://bugzil.la/1512813)). Die Hinzufügung dieser API zu Desktop-Versionen von Firefox wird in [Firefox-Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Das [`Window`](/de/docs/Web/API/Window) Feature [`noreferrer`](/de/docs/Web/API/Window/open) wird nun unterstützt; falls angegeben, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere identifizierende Informationen über das Hostgerät zu teilen ([Firefox-Bug 1527287](https://bugzil.la/1527287)).
- Die [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) Methode auf `HTMLImageElement` ist nun implementiert. Diese kann verwendet werden, um das Laden und Decodieren eines Bildes zu initiieren, bevor es zum DOM hinzugefügt wird ([Firefox-Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um den nicht-standardmäßigen `moz-chunked-arraybuffer` Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht mehr zu akzeptieren. Code, der diesen noch verwendet, sollte aktualisiert werden, um [die Fetch API als Stream zu nutzen](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox-Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in der Konsole aus, wenn Sie eine synchronisierte Anfrage ausführen, während Sie ein [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignis behandeln ([Firefox-Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle zur [`Document`](/de/docs/Web/API/Document) Schnittstelle verschoben, sodass Dokumente, die keine {{Glossary("HTML", "HTML")}} sind, Cookies verwenden können ([Firefox-Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, die angibt, ob der Browser davon abgehalten wird, das neu fokussierte Element in den sichtbaren Bereich zu scrollen ([Firefox-Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) sendet nun nicht mehr versehentlich ein [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis, bis nach dem ersten Frame gemalt ist; dies verbessert die Web-Kompatibilität mit Websites, die dieses Ereignis nicht erwarten ([Firefox-Bug 1528052](https://bugzil.la/1528052)).
- Das Dispatchen von Ereignissen für nicht-primäre Maustasten wurde so angepasst, dass es der Spezifikation näher folgt; das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wird nicht mehr gesendet, wenn nicht-primäre Tasten geklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Darüber hinaus wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) für nicht-primäre Tasten nicht mehr ausgelöst ([Firefox-Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure` Eigenschaft wurde als veraltet erklärt und löst nun eine Warnung in der Konsole aus ([Firefox-Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores kann ab Firefox 68 für Android der OpenH264-Codec, der zur Verarbeitung von AVC/H.264-Video in WebRTC-Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert werden. Daher unterstützen frische Installationen von Firefox auf Android-Geräten nicht mehr AVC in WebRTC-Anrufen. Wenn Sie von früheren Versionen von Firefox aktualisieren und den Codec bereits heruntergeladen haben, wird er weiterhin funktionieren. Dies betrifft _nicht_ andere Plattformen. Für weitere Details siehe [diesen Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox-Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null` Kandidat, der in den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis-Handler übergeben wird, anzeigt, dass keine weiteren Kandidaten kommen werden; wenn dies passiert, erreicht der ICE-Gathering-Zustand ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) `complete` ([Firefox-Bug 1318167](https://bugzil.la/1318167)).
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) unterstützen nun Videospuren; zuvor funktionierten sie nur mit Audio ([Firefox-Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) Schnittstelle wird nun unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist nun implementiert ([Firefox-Bug 1529695](https://bugzil.la/1529695)).
- Der [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode)-Konstruktor wurde aktualisiert, um der aktuellen Spezifikation zu entsprechen, dass die "erste Audiospur" im Stream die Spur ist, deren ID in lexikografischer Reihenfolge an erster Stelle steht ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) darf nicht mehr in einem unsicheren Kontext verwendet werden; der Versuch führt nun zu einer `NotAllowedError` Ausnahme. Sichere Kontexte sind jene, die über HTTPS geladen werden, über das `file:///` Schema verortet sind und von `localhost` geladen werden. Wenn Sie diese Möglichkeit dennoch benötigen, können Sie die Fähigkeit, unsichere Aufrufe an `getUserMedia()` durchzuführen, vorübergehend wieder aktivieren, indem Sie die Einstellung `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox-Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft in unsicheren Kontexten entfernen, um jeglichen Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices) APIs zu verhindern. **Dies ist bereits im Nightly Build der Fall.**

#### Entfernungen

- Die nicht standardmäßige `XMLDocument.load()` Methode wurde entfernt ([Firefox-Bug 332175](https://bugzil.la/332175)).
- Die nicht standardmäßige `XMLDocument.async` Eigenschaft wurde entfernt ([Firefox-Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType` `token` Wert wurde entfernt ([Firefox-Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt die Direktive `executionContexts` nicht mehr. Diese wurde entfernt aufgrund von Problemen mit den Interaktionen zwischen Verknüpfungen verschiedener Datentypen zu unterschiedlichen Zeitpunkten im Navigationsprozess und der Art und Weise, wie die Spezifikation aufgebaut ist. Es wurde [vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), dass diese Direktive aus der Spezifikation entfernt wird, aus diesem und anderen Gründen ([Firefox-Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}} Direktive `require-sri-for` wird nicht mehr unterstützt wegen Bedenken bezüglich ihres Standardisierungsstatus. Sie war bisher nur hinter einer Einstellung verfügbar, die standardmäßig deaktiviert war ([Firefox-Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) wurden Änderungen vorgenommen, sodass Firefox nun Dateien im gleichen Verzeichnis als von unterschiedlichen Ursprüngen stammend behandelt. Dies hat eine Reihe von Nebenwirkungen auf das, was in Dokumenten funktioniert, die über file:// URLs geladen werden (siehe [Firefox-Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundinformationen). Zum Beispiel können Worker nicht mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Falls `WebDriver:SwitchToWindow` die Auswahl auf ein anderes Fenster ändert, wartet es nun auf seine `focus` und `activate` Ereignisse, bevor es zurückkehrt ([Firefox-Bug 1335085](https://bugzil.la/1335085)).
- Der `TypeError: this.tabModal is null` Fehler, der manchmal beim Interagieren mit modalen Dialogen oder Benutzeraufforderungen auftrat, wurde behoben ([Firefox-Bug 1538782](https://bugzil.la/1538782)).

#### Andere

- Die Funktion, Hintergrund-Tabs in Niedrigspeicherbedingungen zwangsweise zu entladen, wurde deaktiviert, um zu verhindern, dass oberste Browserebenen auf magische Weise verschwinden ([Firefox-Bug 1553748](https://bugzil.la/1553748)).
- Bevorzugte Inhaltsprozesse, die dazu führten, dass HTTP-Authentifizierungsdialoge beim Navigieren zu einer Website nach dem Öffnen eines neuen Tabs nicht erschienen, wurden deaktiviert ([Firefox-Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden als veraltet erklärt und werden in Firefox 71 entfernt ([Firefox-Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean` Flag, `incognito`, wurde den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails).objekten hinzugefügt. Wenn `true`, zeigt es an, dass es sich um eine private Browsing-Anfrage handelte ([Firefox-Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter von [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen incognito-Parameter enthalten. Falls angegeben, werden Anfragen, die nicht den Inkognito-Status (`true` oder `false`) erfüllen, herausgefiltert ([Firefox-Bug 1548177](https://bugzil.la/1548177)).
- Ein `string` Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontextes darstellt, wurde den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails).objekten hinzugefügt ([Firefox-Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichnungsordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung nun deutlich intuitiver ([Firefox-Bug 1512171](https://bugzil.la/1512171)).
- Das Versprechen, das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegeben wird, wird jetzt sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox-Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, sodass Webextensons-Einstellungen über Unternehmensrichtlinien implementiert werden können ([Firefox-Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur für HTTPS-Proxy ([Firefox-Bug 1549368](https://bugzil.la/1549368).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks-Veröffentlichungs-Beitrag: [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Ältere Versionen

{{Firefox_for_developers}}
