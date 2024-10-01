---
title: Firefox 68 für Entwickler
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: dc26ca2696c311b12c98df1511900612449dcb51
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser-/Webkonsole

- Die Webkonsole zeigt jetzt [mehr Informationen zu CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox-Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt Inhalte in der Webkonsole mit regulären Ausdrücken filtern ([Firefox-Bug 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole erlaubt es Ihnen nun, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen _Inhaltsnachrichten anzeigen_ aktivieren oder deaktivieren ([Firefox-Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können jetzt im Debugger in allen Dateien des aktuellen Projekts suchen, indem Sie `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox-Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Der [Anforderungslisten](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) des Netzwerkmonitors erlaubt es Ihnen nun, eine spezifische URL zu blockieren ([Firefox-Bug 1151368](https://bugzil.la/1151368)).
- Sie können jetzt eine Netzwerk-Anfrage erneut senden, ohne Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox-Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü auf der [Header](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Registerkarte des Netzwerkmonitors erlaubt es Ihnen jetzt, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox-Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Ein Button wurde zum [Regel-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors hinzugefügt, der es Ihnen erlaubt, die Anzeige von Print-Media-Abfragen umzuschalten ([Firefox-Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler zur Änderung des `letter-spacing` ([Firefox-Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox-Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [lokale und Sitzungs-Speicher](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage) Einträge löschen, indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox-Bug 1522893](https://bugzil.la/1522893)).

#### Sonstiges

- Der [Zugänglichkeitsinspektor](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt eine neue Funktion _Überprüfen auf Probleme_, die eine Reihe von Prüfwerkzeugen enthalten wird, um Zugänglichkeitsprobleme auf Ihren Webseiten hervorzuheben. Die erste verfügbare Prüfung ist _Kontrast_, um Farbkontrastprobleme hervorzuheben.
- Die Voreinstellung, die die Sichtbarkeit interner Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox-Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet — der _Geräteeinstellungen_ Dialog (Gerätauswahlmenü > _Liste bearbeiten..._) ist jetzt intuitiver und einfacher zu verwenden ([Firefox-Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Das Kontrollkästchen "Aktivieren von Add-on-Debugging" wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite entfernt ([Firefox-Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — dargestellt durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält nun ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event) Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn der Texttrack von einem Medienelement enthalten wird ([Firefox-Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}}-Elemente unterstützen wieder das `disabled`-Attribut, wenn auch mit anderem Verhalten. Wenn `disabled` auf einem `<link>`-Element gesetzt ist zusammen mit `rel="stylesheet"`, wird das referenzierte Stylesheet nicht während des Seitenladens geladen und wird auf Abruf geladen, wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird ([Firefox-Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Element/meta) wird nicht mehr unterstützt ([Firefox-Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox-Bug 1312163](https://bugzil.la/1312163)) und ([Firefox-Bug 1544136](https://bugzil.la/1544136)), dies beinhaltet:

  - Die `scroll-padding` Eigenschaften ([Firefox-Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaften ([Firefox-Bug 1373833](https://bugzil.la/1373833))
  - {{CSSxRef("scroll-snap-align")}} ([Firefox-Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("-webkit-line-clamp")}}-Eigenschaft wurde für die Kompatibilität mit anderen Browsern implementiert ([Firefox-Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudoelement hinzugefügt ([Firefox-Bug 205202](https://bugzil.la/205202)) und Animation für `::marker` Pseudos ([Firefox-Bug 1538618](https://bugzil.la/1538618))
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} geändert, um ein berechneter Wert zu sein (außer für die {{cssxref("color")}}-Eigenschaft) ([Firefox-Bug 760345](https://bugzil.la/760345)).
- Die Unterstützung für die `ch`-Längeneinheit wurde korrigiert, sodass sie jetzt der Spezifikation entspricht (Fallback für kein '0'-Glyph, vertikale Metriken) ([Firefox-Bug 282126](https://bugzil.la/282126))
- Die {{CSSxRef("counter-set")}}-Eigenschaft wurde implementiert. ([Firefox-Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Nummerierung von Listen-Elementen mit einem eingebauten "list-item"-Zähler; dies behebt Nummerierungsfehler bei Listen ([Firefox-Bug 288704](https://bugzil.la/288704)).
- Selektormatching und Parsingunterstützung wurden für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox-Bug 1545430](https://bugzil.la/1545430)) und ([Firefox-Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) werden jetzt in indirekt gerenderten Dingen unterstützt, z.B.) {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox-Bug 1323962](https://bugzil.la/1323962)).
- Während wir die präfixierten Versionen der verschiedenen Gradienten-Eigenschaften ({{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen verfügbar halten, haben wir die Art und Weise, wie sie analysiert werden, so überarbeitet, dass sie wesentlich mehr wie die nicht-präfixierten Versionen behandelt werden. Dies bedeutet, dass einige bestehende Stile nicht korrekt funktionieren werden.

  Insbesondere wird die komplizierte Syntax, die sowohl einen Winkel als auch eine Position angibt, nicht mehr funktionieren, und das `to`-Schlüsselwort im `<side-or-corner>`-Parameter ist für die präfixierten Gradienten-Eigenschaften nicht erforderlich. Es wird empfohlen, die standardmäßigen, nicht-präfixierten Gradienten-Eigenschaften zu verwenden, da sie jetzt weitgehend unterstützt werden ([Firefox-Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft ist zu einer Langform-Eigenschaft geworden, sodass die alte Kurzform-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktionieren wird.

### SVG

_Keine Änderungen._

### JavaScript

- Die neue {{jsxref("BigInt")}}-Primitive ist standardmäßig aktiviert ([Firefox-Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox-Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veraltete [`rules`](/de/docs/Web/API/CSSStyleSheet/rules)-Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden zur [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und haben es nie geschafft, vollständig abgestempelt zu werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz an Seiten zu verbessern, die sie noch nutzen ([Firefox-Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) wurde jetzt auf Android standardmäßig aktiviert ([Firefox-Bug 1512813](https://bugzil.la/1512813)). Die Aufnahme dieser API in Desktop-Versionen von Firefox wird im [Firefox-Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window)-Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere identifizierende Informationen über das Hostgerät zu teilen ([Firefox-Bug 1527287](https://bugzil.la/1527287)).
- Die [`decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode auf `HTMLImageElement` ist jetzt implementiert. Dies kann verwendet werden, um das Laden und Dekodieren eines Bildes vor dem Hinzufügen zum DOM auszulösen ([Firefox-Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um den nicht-standardmäßigen `moz-chunked-arraybuffer`-Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht mehr zu akzeptieren. Code, der ihn noch verwendet, sollte aktualisiert werden, um [die Fetch API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox-Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung an die Konsole aus, wenn Sie eine synchrone Anfrage durchführen, während ein [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignis behandelt wird ([Firefox-Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle auf die [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschoben, was es Dokumenten, die nicht {{Glossary("HTML", "HTML")}} sind, erlaubt, Cookies zu verwenden ([Firefox-Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll`-Option enthalten kann, die angibt, ob der Browser daran gehindert werden soll, das neu fokussierte Element in den Blick zu scrollen ([Firefox-Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) sendet das [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis nicht mehr fälschlicherweise, bis das erste Bild gezeichnet ist; dies verbessert die Webkompatibilität bei Seiten, die nicht damit rechnen, dass dieses Ereignis auftritt ([Firefox-Bug 1528052](https://bugzil.la/1528052)).
- Das Senden von Ereignissen für nicht-primäre Maustasten wurde so angepasst, dass es der Spezifikation stärker folgt; das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wird nicht mehr gesendet, wenn nicht-primäre Tasten geklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Außerdem wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) für nicht-primäre Tasten nicht mehr ausgelöst ([Firefox-Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure`-Eigenschaft wurde als veraltet erklärt und löst nun eine Warnung in der Konsole aus ([Firefox-Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Auf Grund von Änderungen an den Richtlinien des Google Play Store kann der OpenH264-Codec, der zur Verarbeitung von AVC/H.264-Video in WebRTC-Verbindungen verwendet wird, ab Firefox 68 für Android nicht mehr heruntergeladen und installiert werden. Daher unterstützen frische Installationen von Firefox auf Android-Geräten AVC in WebRTC-Anrufen nicht mehr. Wenn Sie von früheren Versionen von Firefox updaten und den Codec bereits heruntergeladen haben, wird er weiterhin funktionieren. Dies betrifft _nicht_ andere Plattformen. Für mehr Details, siehe [diesen Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox-Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null`-Kandidat, der in den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis-Handler übergeben wird, was den Empfang eines Kandidaten bedeutet, stattdessen anzeigt, dass keine weiteren Kandidaten kommen; wenn dies geschieht, erreicht der ICE-Gathering-Status ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) `complete` ([Firefox-Bug 1318167](https://bugzil.la/1318167)).
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) unterstützen jetzt Videospuren; vorher funktionierten sie nur auf Audio ([Firefox-Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) Schnittstelle wird jetzt unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox-Bug 1529695](https://bugzil.la/1529695)).
- Der [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) Konstruktor wurde aktualisiert, um die aktuelle Spezifikationsdefinition zu erfüllen, dass die "erste Audiospur" im Stream die Spur ist, deren ID zuerst in lexikographischer Reihenfolge kommt ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht mehr von einem unsicheren Kontext aus verwendet werden; der Versuch führt jetzt zu einer `NotAllowedError`-Ausnahme. Sichere Kontexte sind solche, die über HTTPS geladen werden, die über das `file:///`-Schema und diejenigen, die von `localhost` geladen werden. Zunächst, wenn es unbedingt notwendig ist, können Sie die Möglichkeit, unsichere Aufrufe an `getUserMedia()` auszuführen, wieder aktivieren, indem Sie die Voreinstellung `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox-Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft auf unsicheren Kontexten entfernen, um jeglichen Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices)-APIs zu verhindern. **Dies ist bereits der Fall in Nightly-Builds.**

#### Entfernungen

- Die nicht-standardmäßige Methode `XMLDocument.load()` wurde entfernt ([Firefox-Bug 332175](https://bugzil.la/332175)).
- Die nicht-standardmäßige Eigenschaft `XMLDocument.async` wurde entfernt ([Firefox-Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType`-Wert `token` wurde entfernt ([Firefox-Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt die `executionContexts` Direktive nicht mehr. Diese wurde entfernt aufgrund von Problemen mit Interaktionen zwischen verschiedenen Arten von Daten zu verschiedenen Zeitpunkten im Navigationsprozess und wie die Spezifikation gestaltet ist. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), dass diese Direktive aus der Spezifikation entfernt wird, aus diesem Grund und anderen ([Firefox-Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}} Direktive `require-sri-for` wird aufgrund von Bedenken bezüglich ihres Standardisierungsstatus nicht mehr unterstützt. Sie war zuvor nur hinter einer Voreinstellung verfügbar, die standardmäßig ausgeschaltet war ([Firefox-Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-Origin-Policy behandelt alle Dateien in einem Verzeichnis als aus derselben Herkunft](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) wurden Änderungen vorgenommen, sodass Firefox jetzt Dateien im selben Verzeichnis als aus verschiedenen Herkünften stammend behandelt. Dies hat eine Reihe von Nebeneffekten auf das, was in Dokumenten funktioniert, die über file:// URLs geladen werden (siehe [Firefox-Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundforschung). Zum Beispiel können Worker nicht mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl auf ein anderes Fenster ändert, wartet es jetzt auf seine `focus` und `activate` Ereignisse, bevor es zurückkehrt ([Firefox-Bug 1335085](https://bugzil.la/1335085)).
- Der Fehler `TypeError: this.tabModal ist null`, der manchmal bei der Interaktion mit modalen Dialogen oder Benutzeraufforderungen erschien, wurde behoben ([Firefox-Bug 1538782](https://bugzil.la/1538782)).

#### Sonstiges

- Die Funktion zum Erzwingen des Entladens von Hintergrundtabs bei niedrigen Speicherbedingungen wurde deaktiviert, um zu verhindern, dass übergeordnete Browserkontexte magisch verschwinden ([Firefox-Bug 1553748](https://bugzil.la/1553748)).
- Privilegierte Inhaltsprozesse, die dazu führten, dass HTTP-Authentifizierungsdialoge nicht erschienen, wenn man zu einer Website navigierte, nachdem man einen neuen Tab geöffnet hatte, wurden deaktiviert ([Firefox-Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden als veraltet erklärt und werden aus Firefox 71 entfernt ([Firefox-Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean`-Flag, `incognito`, wurde zu den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt. Wenn `true`, zeigt es an, dass dies eine Anfrage im privaten Modus war ([Firefox-Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter von [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen Inkognito-Parameter enthalten. Wenn bereitgestellt, werden Anfragen, die nicht mit dem Inkognito-Zustand übereinstimmen (`true` oder `false`), ausgefiltert ([Firefox-Bug 1548177](https://bugzil.la/1548177)).
- Ein `string` Wert, `cookieStoreId`, der die Cookie Store ID des aktuellen Kontexts darstellt, wurde zu den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt ([Firefox-Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichen-Ordner in den Stammordner hinzuzufügen, ist die resultierende Fehlermeldung nun viel intuitiver ([Firefox-Bug 1512171](https://bugzil.la/1512171)).
- Das Promise, das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegeben wird, wird jetzt sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox-Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, was die Implementierung von Web-Erweiterungseinstellungen über Unternehmensrichtlinien ermöglicht ([Firefox-Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur noch für HTTPS-Proxies ([Firefox-Bug 1549368](https://bugzil.la/1549368)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Release-Beitrag: [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Ältere Versionen

{{Firefox_for_developers}}
