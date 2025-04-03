---
title: Firefox 68 für Entwickler
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

#### Browser/Web-Konsole

- Die Web-Konsole zeigt jetzt [mehr Informationen über CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css) an, einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox Bug 1093953](https://bugzil.la/1093953)).
- Sie können jetzt Inhalte in der Web-Konsole mittels regulärer Ausdrücke filtern ([Firefox Bug 1441079](https://bugzil.la/1441079)).
- Die Browser-Konsole ermöglicht es jetzt, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen _Show Content Messages_ setzen oder löschen ([Firefox Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können jetzt im Debugger in allen Dateien des aktuellen Projekts suchen, indem Sie `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Die [Anfrageliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) des Netzwerkmonitors ermöglicht es Ihnen jetzt, eine spezifische URL zu blockieren ([Firefox Bug 1151368](https://bugzil.la/1151368)).
- Sie können jetzt eine Netzwerk-Anfrage erneut senden, ohne die Methode, URL, Parameter und Header zu bearbeiten, indem Sie den [Resend](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Tabs im Netzwerkmonitor ermöglicht es Ihnen jetzt, alle oder einige Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox Bug 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Ein Button wurde im [Regel-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors hinzugefügt, mit dem Sie die Anzeige von Druckmedienabfragen umschalten können ([Firefox Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) beinhaltet jetzt einen Schieberegler zum Modifizieren der `letter-spacing` ([Firefox Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox Bug 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können jetzt [lokale und Sitzungsdaten löschen](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage), indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox Bug 1522893](https://bugzil.la/1522893)).

#### Sonstiges

- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt ein neues Feature _Check for issues_, das eine Reihe von Prüfwerkzeugen beinhaltet, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Der erste verfügbare Check ist _contrast_ für Farbkontrastprobleme.
- Die Voreinstellung, die die Sichtbarkeit interner Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite kontrolliert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox Bug 1544372](https://bugzil.la/1544372)).
- Der [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet — das _Device Settings_ Dialog (Geräte-Auswahlmenü > _List bearbeiten…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox Bug 1487857](https://bugzil.la/1487857)).

#### Entfernt

- Das Kontrollkästchen "Enable add-on debugging" wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite entfernt ([Firefox Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}}-Element — repräsentiert durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält jetzt ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)-Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn der Texttrack von einem Media-Element enthalten wird ([Firefox Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}}-Elemente unterstützen das `disabled`-Attribut wieder, allerdings mit anderem Verhalten. Wenn `disabled` auf einem `<link>`-Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet während der Seitenladung nicht geladen und wird bei Bedarf geladen, wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird ([Firefox Bug 1281135](https://bugzil.la/1281135)).

#### Entfernt

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Element/meta) wird nicht mehr unterstützt ([Firefox Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox Bug 1312163](https://bugzil.la/1312163)) und ([Firefox Bug 1544136](https://bugzil.la/1544136)), das beinhaltet:

  - Die `scroll-padding`-Eigenschaft ([Firefox Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin`-Eigenschaft ([Firefox Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}}-Eigenschaft ([Firefox Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}}-Eigenschaft wurde zur Kompatibilität mit anderen Browsern implementiert ([Firefox Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudoelement hinzugefügt ([Firefox Bug 205202](https://bugzil.la/205202)) und Animationen für `::marker` Pseudos ([Firefox Bug 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentcolor")}} geändert, um ein berechneter Wert zu sein (außer für die {{cssxref("color")}}-Eigenschaft) ([Firefox Bug 760345](https://bugzil.la/760345)).
- Unterstützung für die `ch` Längeneinheit wurde behoben, sodass sie nun der Spezifikation entspricht (Fallback für kein '0' Glyph, vertikale Metriken) ([Firefox Bug 282126](https://bugzil.la/282126)).
- Die {{CSSxRef("counter-set")}}-Eigenschaft wurde implementiert ([Firefox Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Nummerierung von Listen mithilfe eines eingebauten "list-item"-Zählers; dies behebt Listennummerierungsfehler ([Firefox Bug 288704](https://bugzil.la/288704)).
- Unterstützung für Selektor-Matching und Parsing wurde für [`::part()`](/de/docs/Web/CSS/::part) implementiert ([Firefox Bug 1545430](https://bugzil.la/1545430)) und ([Firefox Bug 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) werden jetzt in indirekt gerenderten Dingen unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox Bug 1323962](https://bugzil.la/1323962)).
- Obwohl wir die mit Präfix versehenen Versionen der verschiedenen Gradienteneigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen beibehalten, haben wir ihre Parsing-Methoden überarbeitet, sodass sie viel mehr wie die nicht präfixierten Versionen gehandhabt werden. Das bedeutet, dass bestimmte bestehende Styles nicht mehr korrekt funktionieren.

  Insbesondere wird die komplizierte Syntax, die sowohl einen Winkel als auch eine Position verwendet, nicht mehr funktionieren, und das `to`-Schlüsselwort im `<side-or-corner>`-Parameter ist für die mit Präfix versehenen Gradienten-Eigenschaften nicht erforderlich. Es wird empfohlen, die standardmäßigen, nicht mit Präfix versehenen Gradienten-Eigenschaften zu verwenden, da sie jetzt weithin unterstützt werden ([Firefox Bug 1547939](https://bugzil.la/1547939)).

#### Entfernt

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft ist zu einer Langform geworden, sodass die alte Kurzform-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktioniert.

### SVG

_Keine Änderungen._

### JavaScript

- Der neue {{jsxref("BigInt")}}-Primitive ist standardmäßig aktiviert ([Firefox Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veraltete [`rules`](/de/docs/Web/API/CSSStyleSheet/rules)-Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden zur [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und konnten nie komplett beseitigt werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Websites zu verbessern, die sie immer noch verwenden ([Firefox Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) wurde nun standardmäßig auf Android aktiviert ([Firefox Bug 1512813](https://bugzil.la/1512813)). Die Hinzufügung dieser API zu Desktop-Versionen von Firefox wird in [Firefox Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window)-Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere Informationen über das Hostgerät zu teilen ([Firefox Bug 1527287](https://bugzil.la/1527287)).
- Die [`decode()`](/de/docs/Web/API/HTMLImageElement/decode)-Methode auf `HTMLImageElement` ist jetzt implementiert. Diese kann verwendet werden, um das Laden und Dekodieren eines Bildes auszulösen, bevor es zum DOM hinzugefügt wird ([Firefox Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um nicht mehr den nicht standardmäßigen `moz-chunked-arraybuffer`-Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) zu akzeptieren. Code, der es noch verwendet, sollte aktualisiert werden, um [die Fetch-API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in der Konsole aus, wenn Sie eine synchrone Anfrage ausführen, während Sie ein[`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignis handhaben ([Firefox Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Schnittstelle zur [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschoben, sodass Dokumente, die nicht {{Glossary("HTML", "HTML")}} sind, Cookies verwenden können ([Firefox Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll`-Option enthalten kann, die angibt, ob das Scrollen des neu fokussierten Elements durch den Browser blockiert werden soll ([Firefox Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](/de/docs/Mozilla/Firefox_for_Android) sendet nun nicht mehr fälschlicherweise ein [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignis, bis das erste Frame gemalt wird; dies verbessert die Webkompatibilität mit Sites, die nicht erwarten, dass dieses Ereignis auftritt ([Firefox Bug 1528052](https://bugzil.la/1528052)).
- Das Versenden von Ereignissen für nicht-primäre Maustasten wurde der Spezifikation nähergebracht; das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis wird nicht mehr gesendet, wenn nicht-primäre Tasten geklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Darüber hinaus feuert [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr für nicht-primäre Tasten ([Firefox Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure`-Eigenschaft wurde als veraltet markiert und löst jetzt eine Warnung in der Konsole aus ([Firefox Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores kann ab Firefox 68 für Android der OpenH264-Codec, der zur Handhabung von AVC/H.264-Video in WebRTC-Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert werden. Daher unterstützen Neuinstallationen von Firefox auf Android-Geräten keinen AVC mehr in WebRTC-Anrufen. Wenn Sie von früheren Versionen von Firefox aktualisieren und den Codec bereits heruntergeladen haben, wird er weiterhin funktionieren. Dies betrifft _nicht_ andere Plattformen. Für weitere Details sehen Sie [diesen Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null`-Kandidat, der in den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis-Handler übergeben wird, anzeigt, dass es keine weiteren Kandidaten gibt; wenn dies passiert, erreicht der ICE-Gathering-Zustand ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) `complete` ([Firefox Bug 1318167](https://bugzil.la/1318167)).
- Die Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützen jetzt Videospuren; vorher funktionierten sie nur für Audio ([Firefox Bug 1534466](https://bugzil.la/1534466)).
- Die Web Audio API [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode)-Schnittstelle wird nun unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox Bug 1529695](https://bugzil.la/1529695)).
- Der [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode)-Konstruktor wurde aktualisiert, um der aktuellen Spezifikationsdefinition zu entsprechen, bei der die "erste Audiospur" im Stream die Spur ist, deren ID zuerst in lexikographischer Reihenfolge kommt ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht mehr von einem unsicheren Kontext aus verwendet werden; der Versuch dies zu tun wirft jetzt eine `NotAllowedError`-Ausnahme. Sichere Kontexte sind solche, die mit HTTPS geladen werden, diejenigen, die mit dem `file:///`-Schema lokalisiert sind, und diejenigen, die von `localhost` geladen werden. Zurzeit können Sie, wenn unbedingt nötig, die Fähigkeit zur Durchführung unsicherer Anrufe bei `getUserMedia()` wieder aktivieren, indem Sie die Voreinstellung `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Eigenschaft in unsicheren Kontexten entfernen, wodurch der Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices)-APIs verhindert wird. **Dies ist bereits in Nightly-Builds der Fall.**

#### Entfernt

- Die nicht-standardisierte Methode `XMLDocument.load()` wurde entfernt ([Firefox Bug 332175](https://bugzil.la/332175)).
- Die nicht-standardisierte `XMLDocument.async`-Eigenschaft wurde entfernt ([Firefox Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType`-Wert `token` wurde entfernt ([Firefox Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}}-Header unterstützt das `executionContexts`-Directive nicht mehr. Dies wurde aufgrund von Problemen mit den Interaktionen zwischen verschiedenen Arten von Daten zu verschiedenen Zeitpunkten im Navigationsprozess und der Art und Weise, wie die Spezifikation gestaltet ist, entfernt. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), dieses Directive aus der Spezifikation aus genau diesem Grund und aus anderen Gründen zu entfernen ([Firefox Bug 1548034](https://bugzil.la/1548034)).

#### Entfernt

- Das {{HTTPHeader("Content-Security-Policy")}}-Directive `require-sri-for` wird nicht mehr unterstützt, da Bedenken bezüglich seines Standardisierungsstatus bestehen. Es war zuvor nur hinter einer Voreinstellung verfügbar, die standardmäßig deaktiviert war ([Firefox Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund der [CVE-2019-11730: Same-origin policy treats all files in a directory as having the same-origin](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) wurden Veränderungen vorgenommen, sodass Firefox jetzt Dateien im gleichen Verzeichnis als von unterschiedlichen Ursprüngen betrachtet. Dies hat eine Reihe von Nebenwirkungen auf das, was in Dokumenten funktioniert, die über file:// URLs geladen werden (siehe [Firefox Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundforschung). Zum Beispiel können Arbeiter nicht mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl auf ein anderes Fenster ändert, wartet es jetzt auf seine `focus`- und `activate`-Ereignisse, bevor es zurückkehrt ([Firefox Bug 1335085](https://bugzil.la/1335085)).
- Der `TypeError: this.tabModal is null` Fehler, der manchmal beim Interagieren mit modalen Dialogen oder Benutzeraufforderungen auftrat, wurde behoben ([Firefox Bug 1538782](https://bugzil.la/1538782))

#### Sonstiges

- Die Funktion zum erzwingen des Entladens von Hintergrundtabs bei niedrigen Speicherbedingungen wurde deaktiviert, um zu verhindern, dass oberste Browerkontexte magisch verschwinden ([Firefox Bug 1553748](https://bugzil.la/1553748)).
- Bevorzugte Inhaltsprozesse wurden deaktiviert, die dazu führten, dass HTTP-Authentifizierungsdialoge nicht erschienen, wenn eine Webseite nach dem Öffnen eines neuen Tabs navigiert wurde ([Firefox Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) sind veraltet und werden in Firefox 71 entfernt ([Firefox Bug 1545811](https://bugzil.la/1545811)).
- Eine `boolean`-Flag, `incognito`, wurde zu den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails).-Objekt hinzugefügt. Wenn `true`, zeigt es an, dass dies eine private Browsing-Anfrage war ([Firefox Bug 1545163](https://bugzil.la/1545163)).
- Die [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter)-Parameter können einen incognito-Parameter enthalten. Wenn angegeben, werden Anfragen, die nicht dem Incognito-Status entsprechen (`true` oder `false`), herausgefiltert ([Firefox Bug 1548177](https://bugzil.la/1548177)).
- Ein `string`-Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontexts repräsentiert, wurde zu den [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails).-Objekt hinzugefügt ([Firefox Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammordner hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox Bug 1512171](https://bugzil.la/1512171)).
- Das zurückgegebene Versprechen von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) wird jetzt sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, wodurch Web-Erweiterungseinstellungen über eine Unternehmensrichtlinie implementiert werden können ([Firefox Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur für HTTPS-Proxys ([Firefox Bug 1549368](https://bugzil.la/1549368)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks-Release-Post: [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)

## Ältere Versionen

{{Firefox_for_developers}}
