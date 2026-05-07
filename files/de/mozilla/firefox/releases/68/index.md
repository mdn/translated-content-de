---
title: Firefox 68 Versionshinweise für Entwickler
short-title: Firefox 68
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: ee9431bdd896f41c2860ef340f01554c75fd7f29
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 68, die Entwickler betreffen. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser-/Webkonsole

- Die Webkonsole zeigt nun [mehr Informationen zu CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css) an, einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox-Bug 1093953](https://bugzil.la/1093953)).
- Sie können nun Inhalte in der Webkonsole mit regulären Ausdrücken filtern ([Firefox-Bug 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole erlaubt es nun, Nachrichten aus dem Inhaltsprozess ein- oder auszublenden, indem Sie das Kontrollkästchen _Show Content Messages_ aktivieren oder deaktivieren ([Firefox-Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können nun im Debugger [in allen Dateien des aktuellen Projekts suchen](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files), indem Sie `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox-Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerk-Monitor

- Die [Anfragen-Liste im Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) erlaubt es nun, eine spezifische URL zu blockieren ([Firefox-Bug 1151368](https://bugzil.la/1151368)).
- Sie können nun eine Netzwerkanfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox-Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü auf der [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Registerkarte des Netzwerk-Monitors ermöglicht es Ihnen nun, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox-Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Ein Button wurde dem [Regeln-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors hinzugefügt, der es Ihnen erlaubt, die Anzeige von Print-Medienanfragen umzuschalten ([Firefox-Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriften-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält nun einen Regler zur Änderung der `letter-spacing` ([Firefox-Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen, zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox-Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [Einträge des lokalen und Sitzungs-Speichers](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage) löschen, indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox-Bug 1522893](https://bugzil.la/1522893)).

#### Andere

- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält nun eine neue Funktion _Check for issues_, die eine Reihe von Prüftools enthalten wird, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Die erste verfügbare Prüfung ist _Kontrast_, um Farbkontrastprobleme hervorzuheben.
- Die Voreinstellung, die die Sichtbarkeit von internen Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) steuert, wurde von `devtools.aboutdebugging.showSystemAddons` in `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox-Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet – der Dialog _Geräteeinstellungen_ (Geräteauswahlmenü > _Liste bearbeiten…_) ist nun intuitiver und einfacher zu verwenden ([Firefox-Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Das Kontrollkästchen "Enable add-on debugging" wurde von der Seite [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) entfernt ([Firefox-Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — repräsentiert durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält jetzt ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)-Ereignis zusätzlich zu dem [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn der Texttrack durch ein Medienelement enthalten ist ([Firefox-Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}}-Elemente unterstützen wieder das `disabled`-Attribut, jedoch mit anderem Verhalten. Wenn `disabled` auf einem `<link>`-Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet während des Seitenladens nicht geladen und wird auf Anfrage geladen, wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird ([Firefox-Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht mehr unterstützt ([Firefox-Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox-Bug 1312163](https://bugzil.la/1312163)) und ([Firefox-Bug 1544136](https://bugzil.la/1544136)), einschließlich:
  - Die `scroll-padding`-Eigenschaft ([Firefox-Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin`-Eigenschaft ([Firefox-Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}}-Eigenschaft ([Firefox-Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}}-Eigenschaft wurde für Kompatibilität mit anderen Browsern implementiert ([Firefox-Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}}-Pseudo-Element hinzugefügt ([Firefox-Bug 205202](https://bugzil.la/205202)) und Animationen für `::marker`-Pseudos ([Firefox-Bug 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentColor")}} geändert, um ein berechneter Wert zu sein (außer für die {{cssxref("color")}}-Eigenschaft) ([Firefox-Bug 760345](https://bugzil.la/760345)).
- Die Unterstützung für die `ch`-Längeneinheit wurde behoben, sodass sie jetzt der Spezifikation entspricht (Fallback für kein '0'-Glyph, vertikale Metriken) ([Firefox-Bug 282126](https://bugzil.la/282126)).
- Die {{CSSxRef("counter-set")}}-Eigenschaft wurde implementiert. ([Firefox-Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Nummerierung von Listen mit einem eingebauten "list-item"-Zähler, was Bugs bei der Listennummerierung behebt ([Firefox-Bug 288704](https://bugzil.la/288704)).
- Die Unterstützung für Selektor-Matching und Parsing wurde für [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) implementiert ([Firefox-Bug 1545430](https://bugzil.la/1545430)) und ([Firefox-Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/Guides/Transforms) werden nun in indirekt gerenderten Dingen unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox-Bug 1323962](https://bugzil.la/1323962)).
- Obwohl wir die mit Präfix versehenen Versionen der verschiedenen Gradient-Eigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}} und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen verfügbar halten, haben wir überarbeitet, wie sie geparst werden, sodass sie nun ähnlich wie die nicht mit Präfix versehenen Versionen behandelt werden. Dies bedeutet, dass bestimmte bestehende Stile möglicherweise nicht mehr korrekt funktionieren.

  Insbesondere funktioniert die komplizierte Syntax, die sowohl einen Winkel als auch eine Position verwendet, nicht mehr, und das `to`-Schlüsselwort im `<side-or-corner>`-Parameter ist nicht mehr erforderlich für die mit Präfix versehenen Gradient-Eigenschaften. Sie werden ermutigt, die standardisierten, nicht mit Präfix versehenen Gradient-Eigenschaften zu verwenden, da diese mittlerweile breit unterstützt werden ([Firefox-Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft wurde zu einer Langform, sodass die alte Kurzform-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktioniert.

### SVG

_Keine Änderungen._

### JavaScript

- Der neue {{jsxref("BigInt")}}-Primitive wird standardmäßig aktiviert ([Firefox-Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox-Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veraltete [`rules`](/de/docs/Web/API/CSSStyleSheet/rules)-Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden dem [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Interface hinzugefügt. Diese wurden mit Internet Explorer 9 eingeführt und konnten nie ganz durchgesetzt werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Websites zu verbessern, die sie noch verwenden ([Firefox-Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/VisualViewport) ist jetzt standardmäßig auf Android aktiviert ([Firefox-Bug 1512813](https://bugzil.la/1512813)). Die Hinzufügung dieser API zu Desktop-Versionen von Firefox wird in [Firefox-Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window)-Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere identifizierende Informationen über das Hostgerät zu teilen ([Firefox-Bug 1527287](https://bugzil.la/1527287)).
- Die Methode [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) auf `HTMLImageElement` wird jetzt implementiert. Diese kann verwendet werden, um das Laden und Dekodieren eines Bildes vor dem Hinzufügen zum DOM auszulösen ([Firefox-Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um den nicht standardisierten `moz-chunked-arraybuffer`-Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) nicht mehr zu akzeptieren. Code, der es noch verwendet, sollte aktualisiert werden, um die [Fetch-API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox-Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt nun eine Warnung in der Konsole aus, wenn Sie eine synchronen Anforderung während der Verarbeitung eines [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignisses ausführen ([Firefox-Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle auf die [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschoben, sodass nun auch Dokumente, die keine {{Glossary("HTML", "HTML")}} sind, Cookies verwenden können ([Firefox-Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren nun ein optionales Objekt, das eine boolesche `preventScroll`-Option enthalten kann, die angibt, ob das Scrollen des neu fokussierten Elements durch den Browser blockiert werden soll oder nicht ([Firefox-Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](https://firefox-source-docs.mozilla.org/mobile/android/index.html) sendet nun nicht mehr fälschlicherweise ein [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis, bevor der erste Frame gezeichnet wurde; dies verbessert die Webkompatibilität mit Websites, die nicht erwarten, dass dieses Ereignis eintritt ([Firefox-Bug 1528052](https://bugzil.la/1528052)).
- Das Auslösen von Ereignissen für nicht-primäre Maustasten wurde den Spezifikationen angeglichen; das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wird nicht mehr gesendet, wenn nicht-primäre Tasten geklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Ebenso wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr für nicht-primäre Tasten ausgelöst ([Firefox-Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure`-Eigenschaft wurde veraltet, und löst nun eine Warnung in der Konsole aus ([Firefox-Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores, beginnend mit Firefox 68 für Android, kann der OpenH264-Codec, der für das Handling von AVC/H.264-Video in WebRTC-Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert werden. Daher unterstützen frische Installationen von Firefox auf Android-Geräten kein AVC in WebRTC-Anrufen mehr. Wenn Sie von früheren Versionen von Firefox aktualisieren und den Codec bereits heruntergeladen haben, wird er weiterhin funktionieren. Dies betrifft _nicht_ andere Plattformen. Weitere Einzelheiten dazu finden Sie in [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um `null`-Kandidaten zu erkennen, die in den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler übergeben werden, was darauf hindeutet, dass es keine weiteren Kandidaten gibt; wenn dies geschieht, erreicht der ICE-Sammlungszustand ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) `complete` ([Firefox-Bug 1318167](https://bugzil.la/1318167)).
- Die Methoden des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) unterstützen nun Videospuren; zuvor funktionierten sie nur mit Audio ([Firefox-Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API-Schnittstelle [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) wird nun unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) wird nun implementiert ([Firefox-Bug 1529695](https://bugzil.la/1529695)).
- Der Konstruktor [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) wurde aktualisiert, um der aktuellen Spezifikationsdefinition zu entsprechen, dass die "erste Audiospur" im Stream die Spur ist, deren ID lexikografisch zuerst kommt ([Firefox-Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht mehr aus einem unsicheren Kontext verwendet werden; der Versuch, dies zu tun, wirft jetzt eine `NotAllowedError`-Ausnahme. Sichere Kontexte sind jene, die mit HTTPS geladen werden, jene, die mit dem `file:///`-Schema lokalisiert sind, und jene, die von `localhost` geladen werden. Vorläufig, wenn Sie müssen, können Sie die Möglichkeit, unsichere Aufrufe von `getUserMedia()` durchzuführen, wieder aktivieren, indem Sie die Voreinstellung `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox-Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft in unsicheren Kontexten entfernen und den gesamten Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices)-APIs verhindern. **Dies ist bereits in Nightly-Builds der Fall.**

#### Entfernungen

- Die nicht standardisierte Methode `XMLDocument.load()` wurde entfernt ([Firefox-Bug 332175](https://bugzil.la/332175)).
- Die nicht standardisierte Eigenschaft `XMLDocument.async` wurde entfernt ([Firefox-Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType`-Wert `token` wurde entfernt ([Firefox-Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}}-Header unterstützt die `executionContexts`-Direktive nicht mehr. Diese wurde aufgrund von Problemen mit den Interaktionen zwischen verschiedenen Arten von Daten zu unterschiedlichen Zeitpunkten im Navigationsprozess und der Art, wie die Spezifikation entworfen ist, entfernt. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), diese Direktive aus der Spezifikation zu entfernen, aus diesem und anderen Gründen ([Firefox-Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}}-Direktive `require-sri-for` wird aufgrund von Bedenken bezüglich ihres Standardisierungsstatus nicht mehr unterstützt. Sie war zuvor nur hinter einer Voreinstellung verfügbar, die standardmäßig deaktiviert war ([Firefox-Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin policy behandelt alle Dateien in einem Verzeichnis als selben Ursprung](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), wurden Änderungen vorgenommen, sodass Firefox nun Dateien im selben Verzeichnis als von unterschiedlichen Ursprüngen kommend behandelt. Dies hat verschiedene Auswirkungen darauf, was in Dokumenten, die über `file://` URLs geladen werden, funktioniert (siehe [Firefox-Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundinformationen). Zum Beispiel können keine Arbeiter mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl zu einem anderen Fenster wechselt, wartet es nun auf dessen `focus`- und `activate`-Ereignisse, bevor es zurückgibt ([Firefox-Bug 1335085](https://bugzil.la/1335085)).
- Der Fehler `TypeError: this.tabModal is null`, der manchmal beim Interagieren mit modalen Dialogen oder Benutzereingabeaufforderungen auftrat, wurde behoben ([Firefox-Bug 1538782](https://bugzil.la/1538782)).

#### Andere

- Die Funktion zum Erzwingen des Entladens von Hintergrund-Tabs bei niedrigen Speicherbedingungen wurde deaktiviert, um zu verhindern, dass oberste Browser-Kontexte magisch verschwinden ([Firefox-Bug 1553748](https://bugzil.la/1553748)).
- Der privilegierte Inhaltsprozess, der dazu führte, dass HTTP-Authentifizierungsdialoge nicht erschienen, wenn man nach dem Öffnen eines neuen Tabs zu einer Website navigiert, wurde deaktiviert ([Firefox-Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden veraltet und werden in Firefox 71 entfernt ([Firefox-Bug 1545811](https://bugzil.la/1545811)).
- Ein `boolean`-Flag, `incognito`, wurde zu den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt. objekt hinzugefügt. Wenn `true`, weist es darauf hin, dass dies eine private Browsing-Anfrage war ([Firefox-Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen incognito-Parameter einschließen. Wenn vorhanden, werden Anfragen, die nicht mit dem Inkognito-Zustand (`true` oder `false`) übereinstimmen, herausgefiltert ([Firefox-Bug 1548177](https://bugzil.la/1548177)).
- Ein `string`-Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontexts repräsentiert, wurde zu den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails). objekt hinzugefügt ([Firefox-Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung nun viel intuitiver ([Firefox-Bug 1512171](https://bugzil.la/1512171)).
- Das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegebene Versprechen löst sich nun sofort auf, bevor die Tabs vollständig geladen sind ([Firefox-Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, sodass Web-Erweiterungseinstellungen über Unternehmensrichtlinien implementiert werden können ([Firefox-Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten nun nur noch für HTTPS-Proxys ([Firefox-Bug 1549368](https://bugzil.la/1549368).

### Manifest-Änderungen

- Unterstützung für den [`dark_theme`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) hinzugefügt. Dieser Schlüssel ermöglicht es einem statischen Thema, sein Aussehen zu definieren, wenn Firefox das dunkle Farbschema verwendet ([Firefox-Bug 1525762](https://bugzil.la/1525762)).

## Siehe auch

- Hacks-Release-Post: [Firefox 68: BigInts, Kontrastprüfungen und die QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)
