---
title: Firefox 68 für Entwickler
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 6c8e52645dd3bc28340fbfd57439600b4fcba4d3
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 68, die Entwickler beeinflussen. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

#### Browser-/Webkonsole

- Die Webkonsole zeigt jetzt [mehr Informationen zu CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css) an, einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox-Bug 1093953](https://bugzil.la/1093953)).
- Sie können Inhalte in der Webkonsole jetzt mit regulären Ausdrücken filtern ([Firefox-Bug 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole ermöglicht es nun, Nachrichten des Inhaltsprozesses anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen _Show Content Messages_ aktivieren oder deaktivieren ([Firefox-Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können jetzt im Debugger in allen Dateien im aktuellen Projekt suchen, indem Sie `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox-Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Die [Anfrageliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) des Netzwerkmonitors ermöglicht es jetzt, eine spezifische URL zu blockieren ([Firefox-Bug 1151368](https://bugzil.la/1151368)).
- Sie können nun eine Netzwerk-Anfrage erneut senden, ohne Methode, URL, Parameter und Header zu bearbeiten, indem Sie den Befehl [Resend](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu) im Kontextmenü verwenden ([Firefox-Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Tabs im Netzwerkmonitor ermöglicht jetzt, alle oder einige Header-Informationen als JSON-Format in die Zwischenablage zu kopieren ([Firefox-Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Im [Regel-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors wurde ein Button hinzugefügt, mit dem Sie die Anzeige von Print-Media-Queries umschalten können ([Firefox-Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Slider zur Anpassung des `letter-spacing` ([Firefox-Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox-Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [Einträge im lokalen und Sitzungs-Speicher löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage), indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox-Bug 1522893](https://bugzil.la/1522893)).

#### Sonstiges

- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt ein neues Feature _Check for issues_, welches verschiedene Audit-Tools umfasst, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Der erste verfügbare Check ist _contrast_, um Farbkontrastprobleme aufzuzeigen.
- Die Einstellung zur Sichtbarkeit von internen Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) wurde von `devtools.aboutdebugging.showSystemAddons` in `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox-Bug 1544372](https://bugzil.la/1544372)).
- Der [modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde überarbeitet. Der Dialog _Device Settings_ (Geräteauswahl-Menü > _Edit List…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox-Bug 1487857](https://bugzil.la/1487857)).

#### Entfernt

- Die Checkbox "Enable add-on debugging" wurde von der Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) entfernt ([Firefox-Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — dargestellt durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält nun ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)-Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn die Textspur von einem Medienelement enthalten ist ([Firefox-Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}}-Elemente unterstützen wieder das `disabled`-Attribut, jedoch mit verändertem Verhalten. Wenn `disabled` auf einem `<link>`-Element in Kombination mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet nicht beim Laden der Seite geladen und auf Abruf geladen, wenn das Attribut `disabled` auf `false` gesetzt oder entfernt wird ([Firefox-Bug 1281135](https://bugzil.la/1281135)).

#### Entfernt

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Element/meta) wird nicht länger unterstützt ([Firefox-Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox-Bug 1312163](https://bugzil.la/1312163)) und ([Firefox-Bug 1544136](https://bugzil.la/1544136)). Dies schließt ein:

  - Die Eigenschaft `scroll-padding` ([Firefox-Bug 1373832](https://bugzil.la/1373832))
  - Die Eigenschaft `scroll-margin` ([Firefox-Bug 1373833](https://bugzil.la/1373833))
  - Die Eigenschaft {{CSSxRef("scroll-snap-align")}} ([Firefox-Bug 1373835](https://bugzil.la/1373835))

- Die Eigenschaft {{CSSxRef("line-clamp", "-webkit-line-clamp")}} wurde für die Kompatibilität mit anderen Browsern implementiert ([Firefox-Bug 866102](https://bugzil.la/866102)).
- Unterstützung für die Pseudoelemente {{CSSxRef("::marker")}} wurde hinzugefügt ([Firefox-Bug 205202](https://bugzil.la/205202)) einschließlich Animationen von `::marker`-Pseudoelementen ([Firefox-Bug 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} in einen berechneten Wert geändert (außer für die Eigenschaft {{cssxref("color")}}) ([Firefox-Bug 760345](https://bugzil.la/760345)).
- Die Unterstützung für die `ch`-Längeneinheit wurde angepasst, sodass sie nun der Spezifikation entspricht (Fallback für kein '0'-Glyph, vertikale Metriken) ([Firefox-Bug 282126](https://bugzil.la/282126)).
- Die Eigenschaft {{CSSxRef("counter-set")}} wurde implementiert ([Firefox-Bug 1518201](https://bugzil.la/1518201)).
- Listennummerierungen werden nun mit einem eingebauten "list-item"-Zähler implementiert, was Fehler in der Listennummerierung behebt ([Firefox-Bug 288704](https://bugzil.la/288704)).
- Selektormatching und Parsing-Unterstützung wurden für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox-Bug 1545430](https://bugzil.la/1545430)) und ([Firefox-Bug 1545425](https://bugzil.la/1545425)).
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) werden jetzt in indirekt gerenderten Elementen unterstützt, z. B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox-Bug 1323962](https://bugzil.la/1323962)).
- Obwohl die mit Präfix versehenen Versionen der verschiedenen Gradienteigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen weiterhin verfügbar bleiben, haben wir deren Parsing neugestaltet, sodass sie viel mehr wie die nicht-präfixierten Versionen behandelt werden. Das bedeutet, dass bestimmte bestehende Stile nicht mehr korrekt funktionieren.

  Insbesondere funktioniert die komplexe Syntax mit sowohl einem Winkel als auch einer Position nicht mehr, und das `to`-Schlüsselwort im `<side-or-corner>`-Parameter ist nicht mehr erforderlich für die präfixierten Gradienteigenschaften. Es wird empfohlen, die standardmäßigen, nicht-präfixierten Gradienteigenschaften zu verwenden, da diese nun breit unterstützt werden ([Firefox-Bug 1547939](https://bugzil.la/1547939)).

#### Entfernt

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die Eigenschaft {{CSSxRef("scroll-snap-type")}} wurde in eine Langform geändert, daher funktioniert die alte Kurzsyntax wie `scroll-snap-type:mandatory` nicht mehr.

### SVG

_Keine Änderungen._

### JavaScript

- Die neue {{jsxref("BigInt")}}-Primitive ist standardmäßig aktiviert ([Firefox-Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox-Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veraltete Eigenschaft [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) sowie die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden zur [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Schnittstelle hinzugefügt. Diese wurden ursprünglich durch Internet Explorer 9 eingeführt und konnten nie vollständig entfernt werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Seiten zu verbessern, die sie noch verwenden ([Firefox-Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) wurde jetzt auf Android standardmäßig aktiviert ([Firefox-Bug 1512813](https://bugzil.la/1512813)). Die Hinzufügung zu Desktop-Versionen von Firefox wird im [Firefox-Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Das [`Window`](/de/docs/Web/API/Window)-Feature [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; falls angegeben, wird der Inhalt des neuen Fensters geladen, ohne dass der Hostname, die IP-Adresse, die URL oder andere identifizierende Informationen des Host-Geräts geteilt werden ([Firefox-Bug 1527287](https://bugzil.la/1527287)).
- Die Methode [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) auf `HTMLImageElement` ist nun implementiert. Diese kann dazu verwendet werden, das Laden und Dekodieren eines Bildes vor dem Hinzufügen zum DOM auszulösen ([Firefox-Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) akzeptiert nicht länger den nicht-standardmäßigen Wert `moz-chunked-arraybuffer` für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType). Code, der dies noch verwendet, sollte aktualisiert werden, um [die Fetch-API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox-Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in der Konsole aus, falls eine synchrone Anfrage während der Verarbeitung eines [`unload`](/de/docs/Web/API/Window/unload_event)-, [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)- oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignisses durchgeführt wird ([Firefox-Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle zur [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschoben, was es anderen als {{Glossary("HTML", "HTML")}}-Dokumenten ermöglicht, Cookies zu verwenden ([Firefox-Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine booleanische Option `preventScroll` enthalten kann, welche spezifiziert, ob das Scrollen des Browsers zum neugewählten Element blockiert werden soll ([Firefox-Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) sendet das [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis nicht länger fälschlicherweise vor dem ersten gemalten Frame; dies verbessert die Webkompatibilität mit Seiten, die nicht erwarten, dass dieses Ereignis auftritt ([Firefox-Bug 1528052](https://bugzil.la/1528052)).
- Die Aussendung von Ereignissen für nicht-primäre Maustasten wurde so angepasst, dass sie die Spezifikation genauer befolgt; das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wird nicht mehr ausgelöst, wenn nicht-primäre Tasten geklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Außerdem wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr für nicht-primäre Tasten ausgelöst ([Firefox-Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre Eigenschaft `mozPressure` wurde veraltet, und wird nun eine Warnung in der Konsole auslösen ([Firefox-Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen an den Richtlinien des Google Play Stores wird ab Firefox 68 für Android der OpenH264-Codec, der für AVC/H.264-Videos in WebRTC-Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert. Daher unterstützen frische Installationen von Firefox auf Android-Geräten kein AVC in WebRTC-Anrufen mehr. Werden ältere Versionen von Firefox aktualisiert, funktioniert der Codec weiterhin, falls er bereits heruntergeladen wurde. Andere Plattformen sind davon **nicht** betroffen. Weitere Details entnehmen Sie bitte [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox-Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde so aktualisiert, dass ein `null`-Kandidat, der an den Handler des [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisses übergeben wird, das keine weiteren Kandidaten kommen, anzeigt; wenn dies geschieht, erreicht der ICE-Gathering-Status ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) `complete` ([Firefox-Bug 1318167](https://bugzil.la/1318167)).
- Die Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützen jetzt Videospuren; zuvor funktionierten diese nur bei Audio ([Firefox-Bug 1534466](https://bugzil.la/1534466)).
- Die [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Schnittstelle der Web-Audio-API sowie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) werden jetzt unterstützt ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) wurde nun implementiert ([Firefox-Bug 1529695](https://bugzil.la/1529695)).
- Der [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode)-Konstruktor wurde aktualisiert, um die aktuelle Definition der Spezifikation zu übernehmen, dass die "erste Audio-Spur" im Stream die Spur ist, deren ID zuerst alphabetisch kommt ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht länger aus einem unsicheren Kontext heraus verwendet werden; der Versuch, dies zu tun, führt nun zu einer `NotAllowedError`-Exception. Sichere Kontexte sind diejenigen, die per HTTPS geladen werden, diejenigen, die unter Verwendung des `file:///`-Schemas lokalisiert werden, und diejenigen, die von `localhost` geladen werden. Für den Moment können Sie, falls nötig, die Möglichkeit unsicherer `getUserMedia()`-Aufrufe wieder aktivieren, indem Sie die Einstellung `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox-Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft in unsicheren Kontexten entfernen, wodurch jeglicher Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices)-APIs verhindert wird. **Dies ist bereits in Nightly-Builds der Fall.**

#### Entfernt

- Die nicht-standardisierte Methode `XMLDocument.load()` wurde entfernt ([Firefox-Bug 332175](https://bugzil.la/332175)).
- Die nicht-standardisierte Eigenschaft `XMLDocument.async` wurde entfernt ([Firefox-Bug 1328138](https://bugzil.la/1328138)).
- Der `token`-Wert des `RTCIceServer.credentialType` wurde entfernt ([Firefox-Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP)-{{HTTPHeader("Clear-Site-Data")}}-Header unterstützt das `executionContexts`-Direktiv nicht mehr. Dies wurde aufgrund von Problemen mit Interaktionen zwischen verschiedenen Arten von Daten an verschiedenen Punkten im Navigationsprozess und dem Design der Spezifikation entfernt. Es wurde [vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), dass dieses Direktiv aus der Spezifikation entfernt wird, unter anderem aus diesem Grund ([Firefox-Bug 1548034](https://bugzil.la/1548034)).

#### Entfernt

- Die {{HTTPHeader("Content-Security-Policy")}}-Direktive `require-sri-for` wird nicht länger unterstützt aufgrund von Bedenken hinsichtlich ihres Standardisierungsstatus. Sie war zuvor nur hinter einer Einstellung verfügbar, die standardmäßig deaktiviert war ([Firefox-Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) behandelt Firefox nun Dateien im gleichen Verzeichnis als aus unterschiedlichen Ursprüngen stammend. Dies hat verschiedene Nebeneffekte auf das, was in Dokumenten funktioniert, die über file://-URLs geladen werden (nützliche Hintergrundinformationen finden Sie unter [Firefox-Bug 1558299](https://bugzil.la/1558299)). Zum Beispiel können keine Worker mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl auf ein anderes Fenster ändert, wartet es nun auf die `focus`- und `activate`-Ereignisse, bevor es zurückkehrt ([Firefox-Bug 1335085](https://bugzil.la/1335085)).
- Der Fehler `TypeError: this.tabModal is null`, der manchmal beim Interagieren mit modalen Dialogen oder Benutzeraufforderungen auftrat, wurde behoben ([Firefox-Bug 1538782](https://bugzil.la/1538782)).

#### Sonstiges

- Die Funktion zum Forcieren des Entladens von Hintergrund-Tabs bei niedrigen Speichervoraussetzungen wurde deaktiviert, um zu verhindern, dass Top-Level-Browser-Kontexte plötzlich verschwinden ([Firefox-Bug 1553748](https://bugzil.la/1553748)).
- Privilegierte Inhaltsprozesse, die dazu führten, dass HTTP-Authentifizierungsdialoge beim Navigieren auf eine Webseite nach dem Öffnen eines neuen Tabs nicht erschienen, wurden deaktiviert ([Firefox-Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden als veraltet markiert und werden in Firefox 71 entfernt ([Firefox-Bug 1545811](https://bugzil.la/1545811)).
- Eine `boolean` Variable, `incognito`, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt. Wenn `true`, zeigt dies an, dass es sich um eine Anfrage im privaten Browsermodus handelt ([Firefox-Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter von [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen incognito-Parameter enthalten. Falls angegeben, werden Anfragen herausgefiltert, die nicht mit dem Incognito-Status übereinstimmen (`true` oder `false`) ([Firefox-Bug 1548177](https://bugzil.la/1548177)).
- Ein `string`-Wert, `cookieStoreId`, der die Cookie-Speicher-ID des aktuellen Kontexts darstellt, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt ([Firefox-Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammverzeichnis hinzuzufügen, ist die resultierende Fehlermeldung jetzt wesentlich intuitiver ([Firefox-Bug 1512171](https://bugzil.la/1512171)).
- Das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegebene Promise wird jetzt unmittelbar aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox-Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung für `chrome.storage.managed` wurde hinzugefügt, was die Implementierung von Webextensions-Einstellungen durch Unternehmensrichtlinien ermöglicht ([Firefox-Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur für HTTPS-Proxys ([Firefox-Bug 1549368](https://bugzil.la/1549368)).

### Änderungen am Manifest

_Keine Änderungen._

## Siehe auch

- Hacks-Veröffentlichungsartikel: [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Ältere Versionen

{{Firefox_for_developers}}
