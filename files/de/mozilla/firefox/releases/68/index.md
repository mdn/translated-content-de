---
title: Firefox 68 Versionshinweise für Entwickler
short-title: Firefox 68
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 68, die Entwickler betreffen werden. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

#### Browser/Webkonsole

- Die Webkonsole zeigt nun [mehr Informationen über CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css), einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox Bug 1093953](https://bugzil.la/1093953)).
- Sie können nun Inhalte in der Webkonsole mithilfe von regulären Ausdrücken filtern ([Firefox Bug 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole ermöglicht es nun, Nachrichten aus dem Inhaltsprozess anzuzeigen oder auszublenden, indem Sie das Kontrollkästchen _Show Content Messages_ setzen oder löschen ([Firefox Bug 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können nun [in allen Dateien](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files) im aktuellen Projekt vom Debugger aus suchen, indem Sie `Shift` + `Ctrl` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox Bug 1320325](https://bugzil.la/1320325)).

#### Netzwerkmonitor

- Die [Anforderungsliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) im Netzwerkmonitor erlaubt es nun, eine spezifische URL zu blockieren ([Firefox Bug 1151368](https://bugzil.la/1151368)).
- Sie können nun eine Netzwerkanforderung erneut senden, ohne Methode, URL, Parameter, und Header zu bearbeiten, indem Sie den [Resend](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu)-Befehl im Kontextmenü verwenden ([Firefox Bug 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des [Headers](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers)-Tabs im Netzwerkmonitor ermöglicht es nun, alle oder einige der Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox Bug 1442249](https://bugzil.la/1442249)).

#### Seiten-Inspektor

- Im [Regeln-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiten-Inspektors wurde eine Schaltfläche hinzugefügt, die es erlaubt, die Anzeige von Druckmedienabfragen umzuschalten ([Firefox Bug 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler zum Ändern des `letter-spacing` ([Firefox Bug 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen, zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox Bug 1306054](https://bugzil.la/1306054)).

#### Speicher-Inspektor

- Sie können nun [lokale und Session-Speicherung](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage) Einträge löschen, indem Sie das Element im Speicher-Inspektor auswählen und die Rücktaste drücken ([Firefox Bug 1522893](https://bugzil.la/1522893)).

#### Andere

- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) beinhaltet nun eine neue Funktion _Check for issues_, die einige Prüfwerkzeuge enthalten wird, um Zugänglichkeitsprobleme auf Ihren Webseiten hervorzuheben. Der erste verfügbare Check ist _contrast_, um Farbkontrastprobleme hervorzuheben.
- Die Voreinstellung, die die Sichtbarkeit von internen Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox Bug 1544372](https://bugzil.la/1544372)).
- Der [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet — der Dialog _Device Settings_ (Geräteauswahlmenü > _Liste bearbeiten…_) ist jetzt intuitiver und einfacher zu verwenden ([Firefox Bug 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Die Checkbox "Enable add-on debugging" wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite entfernt ([Firefox Bug 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}} Element — repräsentiert durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — empfängt nun ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event) Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, falls die Textspur von einem Media-Element umschlossen ist ([Firefox Bug 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} Elemente unterstützen wieder das `disabled` Attribut, allerdings mit geändertem Verhalten. Wenn `disabled` auf einem `<link>` Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet nicht während des Seitenladens geladen und wird auf Anfrage geladen, wenn das `disabled` Attribut auf `false` geändert oder entfernt wird ([Firefox Bug 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht mehr unterstützt ([Firefox Bug 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/Guides/Scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox Bug 1312163](https://bugzil.la/1312163)) und ([Firefox Bug 1544136](https://bugzil.la/1544136)), dies schließt ein:

  - Die `scroll-padding` Eigenschaft ([Firefox Bug 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaft ([Firefox Bug 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}} Eigenschaft ([Firefox Bug 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}} Eigenschaft wurde für Kompatibilität mit anderen Browsern implementiert ([Firefox Bug 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudo-Element hinzugefügt ([Firefox Bug 205202](https://bugzil.la/205202)) und Animation für `::marker` Pseudoelemente ([Firefox Bug 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentColor")}} geändert, um ein berechneter Wert zu sein (mit Ausnahme der {{cssxref("color")}} Eigenschaft) ([Firefox Bug 760345](https://bugzil.la/760345)).
- Unterstützung wurde für die `ch` Längeneinheit behoben, sodass sie jetzt der Spezifikation entspricht (Fallback für kein '0' Glyph, vertikale Metriken) ([Firefox Bug 282126](https://bugzil.la/282126)).
- Die {{CSSxRef("counter-set")}} Eigenschaft wurde implementiert ([Firefox Bug 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Listenaufzählung mit einem eingebauten „list-item“ Zähler; dies behebt Listenzählungsfehler ([Firefox Bug 288704](https://bugzil.la/288704)).
- Selektorenabgleich und Parsing-Unterstützung wurden für [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) implementiert ([Firefox Bug 1545430](https://bugzil.la/1545430)) und ([Firefox Bug 1545425](https://bugzil.la/1545425)).
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) werden jetzt in indirekt gerenderten Dingen unterstützt, z. B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox Bug 1323962](https://bugzil.la/1323962)).
- Während wir die prefixed Versionen der verschiedenen Gradienten-Eigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}}, und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen verfügbar halten, haben wir ihre Parsing-Methode so überarbeitet, dass sie viel mehr wie die nicht geprefixten Versionen behandelt werden. Dies bedeutet, dass bestimmte bestehende Stile nicht mehr korrekt funktionieren werden.

  Insbesondere wird die komplizierte Syntax, die sowohl einen Winkel als auch eine Position verwendet, nicht mehr funktionieren, und das `to` Schlüsselwort im `<side-or-corner>` Parameter ist für die prefixed Gradienten-Eigenschaften nicht erforderlich. Sie werden ermutigt, die standardmäßigen, nicht geprefixten Gradienteigenschaften zu verwenden, da sie jetzt weit verbreitet unterstützt werden ([Firefox Bug 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}} Eigenschaft ist jetzt eine Langform, sodass die alte Kurzform-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktionieren wird.

### SVG

_Keine Änderungen._

### JavaScript

- Der neue {{jsxref("BigInt")}} Primitive ist standardmäßig aktiviert ([Firefox Bug 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox Bug 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veraltete [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden zur [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und konnten nie ganz beseitigt werden, daher wurden sie hinzugefügt, um die Kompatibilität mit dem kleinen Prozentsatz von Websites zu verbessern, die sie noch verwenden ([Firefox Bug 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) ist jetzt standardmäßig auf Android aktiviert ([Firefox Bug 1512813](https://bugzil.la/1512813)). Die Hinzufügung dieser API zu den Desktop-Versionen von Firefox wird in [Firefox Bug 1551302](https://bugzil.la/1551302) verfolgt.
- Die [`Window`](/de/docs/Web/API/Window) Funktion [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters geladen, ohne den Hostnamen, die IP-Adresse, die URL oder andere identifizierende Informationen über das Host-Gerät zu teilen ([Firefox Bug 1527287](https://bugzil.la/1527287)).
- Die [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) Methode auf `HTMLImageElement` ist jetzt implementiert. Dies kann verwendet werden, um das Laden und Dekodieren eines Bildes auszulösen, bevor es zum DOM hinzugefügt wird ([Firefox Bug 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert und akzeptiert nicht mehr den nicht standardmäßigen `moz-chunked-arraybuffer` Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType). Code, der es noch verwendet, sollte auf [die Verwendung der Fetch API als Stream](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) aktualisiert werden ([Firefox Bug 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt nun eine Warnung in die Konsole aus, wenn Sie eine synchrone Anforderung ausführen, während Sie ein [`unload`](/de/docs/Web/API/Window/unload_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignis behandeln ([Firefox Bug 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle zur [`Document`](/de/docs/Web/API/Document) Schnittstelle verschoben, wodurch Dokumente, die keine {{Glossary("HTML", "HTML")}} darstellen, Cookies verwenden können ([Firefox Bug 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, die angibt, ob der Browser daran gehindert werden soll, das neu fokussierte Element in den sichtbaren Bereich zu scrollen ([Firefox Bug 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](https://firefox-source-docs.mozilla.org/mobile/android/index.html) sendet nicht mehr fälschlicherweise ein [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis, bis nach dem ersten Frame gezeichnet wurde; dies verbessert die Web-Kompatibilität mit Websites, die nicht erwarten, dass dieses Ereignis auftritt ([Firefox Bug 1528052](https://bugzil.la/1528052)).
- Das Senden von Ereignissen für nicht-primäre Maustasten wurde aktualisiert, um der Spezifikation näher zu kommen; das [`click`](/de/docs/Web/API/Element/click_event) Ereignis wird nicht mehr gesendet, wenn nicht-primäre Tasten geklickt werden, sondern verwendet stattdessen [`auxclick`](/de/docs/Web/API/Element/auxclick_event). Zusätzlich wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr für nicht-primäre Tasten ausgelöst ([Firefox Bug 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure` Eigenschaft wurde veraltet, und löst jetzt eine Warnung in der Konsole aus ([Firefox Bug 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores kann, beginnend mit Firefox 68 für Android, der OpenH264-Codec, der zur Verarbeitung von AVC/H.264-Videos in WebRTC-Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert werden. Daher unterstützen frische Installationen von Firefox auf Android-Geräten kein AVC mehr in WebRTC-Anrufen. Wenn Sie von früheren Versionen von Firefox upgraden und den Codec bereits heruntergeladen haben, wird dieser weiterhin funktionieren. Dies betrifft _nicht_ andere Plattformen. Weitere Details finden Sie in [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox Bug 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null` Kandidat, der an den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignishandler übergeben wird, der Eingang eines Kandidaten anzeigt, sondern vielmehr anzeigt, dass keine weiteren Kandidaten mehr kommen; wenn dies geschieht, erreicht der ICE-Sammelzustand ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) den `complete` Zustand ([Firefox Bug 1318167](https://bugzil.la/1318167)).
- Die Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützen nun Videospuren; zuvor funktionierten sie nur bei Audio ([Firefox Bug 1534466](https://bugzil.la/1534466)).
- Die [Web Audio API](https://firefox-source-docs.mozilla.org/devtools-user/browser/debugger/index.html)-Schnittstelle [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) wird jetzt unterstützt, ebenso wie die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox Bug 1529695](https://bugzil.la/1529695)).
- Der Konstruktor [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) wurde aktualisiert, um der aktuellen Definition der Spezifikation zu entsprechen, dass die "erste Audiostrecke" im Stream die ist, deren ID in lexikografischer Reihenfolge zuerst kommt ([Firefox Bug 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) kann nicht mehr von einem nicht sicheren Kontext aus verwendet werden; der Versuch, dies zu tun, löst jetzt eine `NotAllowedError` Ausnahme aus. Sichere Kontexte sind diejenigen, die über HTTPS geladen werden, diejenigen, die über das `file:///` Schema lokalisiert werden, und diejenigen, die von `localhost` geladen werden. Für den Moment können Sie, wenn unbedingt notwendig, die Möglichkeit, unsichere Aufrufe von `getUserMedia()` auszuführen, wieder aktivieren, indem Sie die Präferenz `media.getusermedia.insecure.enabled` auf `true` setzen ([Firefox Bug 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft in unsicheren Kontexten entfernen, um den Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices) APIs zu verhindern. **Dies ist bereits in Nightly Builds der Fall.**

#### Entfernungen

- Die nicht standardmäßige `XMLDocument.load()` Methode wurde entfernt ([Firefox Bug 332175](https://bugzil.la/332175)).
- Die nicht standardmäßige `XMLDocument.async` Eigenschaft wurde entfernt ([Firefox Bug 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType` `token` Wert wurde entfernt ([Firefox Bug 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt nicht mehr die `executionContexts` Direktive. Dies wurde aufgrund von Problemen mit den Interaktionen zwischen unterschiedlichen Arten von Daten zu verschiedenen Zeitpunkten im Navigationsprozess und der Art und Weise, wie die Spezifikation gestaltet ist, entfernt. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), diese Direktive aus der Spezifikation zu entfernen, aus diesem und anderen Gründen ([Firefox Bug 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}} Direktive `require-sri-for` wird nicht mehr unterstützt, aufgrund von Bedenken über ihren Standardisierungsstatus. Sie war zuvor nur hinter einer Präferenz verfügbar, die standardmäßig deaktiviert war ([Firefox Bug 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Same-origin policy behandelt alle Dateien in einem Verzeichnis als gleichbürtiger Ursprung](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730), wurden Änderungen vorgenommen, sodass Firefox jetzt Dateien im selben Verzeichnis als von verschiedenen Ursprüngen stammend behandelt. Dies hat eine Vielzahl von Nebeneffekten auf das, was in Dokumenten funktioniert, die über file:// URLs geladen werden (siehe [Firefox Bug 1558299](https://bugzil.la/1558299) für nützliche Hintergrundrecherchen). Zum Beispiel können keine Worker mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl auf ein anderes Fenster ändert, wartet es jetzt, bis seine `focus` und `activate` Ereignisse vor der Rückgabe eintreten ([Firefox Bug 1335085](https://bugzil.la/1335085)).
- Der Fehler `TypeError: this.tabModal is null`, der manchmal beim Umgang mit modalen Dialogen oder Benutzeraufforderungen auftrat, wurde behoben ([Firefox Bug 1538782](https://bugzil.la/1538782)).

#### Andere

- Das Feature zum Erzwingen des Entladens von Hintergrund-Tabs bei geringem Speicherbedarf wurde deaktiviert, um zu verhindern, dass der übergeordnete Browserkontext unerwartet verschwindet ([Firefox Bug 1553748](https://bugzil.la/1553748)).
- Privilegierte Inhaltsprozesse, die HTTP-Authentifizierungsdialoge verhinderten, wurden deaktiviert, als nach dem Öffnen eines neuen Tabs zu einer Webseite navigiert wurde ([Firefox Bug 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) sind veraltet und werden aus Firefox 71 entfernt ([Firefox Bug 1545811](https://bugzil.la/1545811)).
- Eine `boolesche` Flagge, `incognito`, wurde dem [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) Objekt hinzugefügt. Wenn `true`, zeigt es an, dass es sich um eine private Browsing-Anfrage handelt ([Firefox Bug 1545163](https://bugzil.la/1545163)).
- Die Parameter [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) können einen Incognito-Parameter enthalten. Wenn angegeben, werden Anfragen, die nicht dem Inkognito-Status (`true` oder `false`) entsprechen, herausgefiltert ([Firefox Bug 1548177](https://bugzil.la/1548177)).
- Ein `string` Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontexts darstellt, wurde dem [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) Objekt hinzugefügt ([Firefox Bug 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Root-Ordner hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox Bug 1512171](https://bugzil.la/1512171)).
- Das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegebene Promise wird jetzt sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox Bug 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, wodurch Web-Extension-Einstellungen über Unternehmensrichtlinien implementiert werden können ([Firefox Bug 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur noch für HTTPS-Proxies ([Firefox Bug 1549368](https://bugzil.la/1549368)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Release-Post: [Firefox 68: BigInts, Contrast Checks, and the QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)
