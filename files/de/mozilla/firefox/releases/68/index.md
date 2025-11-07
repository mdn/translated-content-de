---
title: Firefox 68 Versionshinweise für Entwickler
short-title: Firefox 68
slug: Mozilla/Firefox/Releases/68
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 68, die Entwickler betreffen. Firefox 68 wurde am 9. Juli 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

#### Browser/Webkonsole

- Die Webkonsole zeigt nun [mehr Informationen über CSS-Warnungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#css) an, einschließlich einer Knotenliste der DOM-Elemente, die die Regel verwendet haben ([Firefox Fehler 1093953](https://bugzil.la/1093953)).
- Sie können nun Inhalte in der Webkonsole mithilfe regulärer Ausdrücke filtern ([Firefox Fehler 1441079](https://bugzil.la/1441079)).
- Die Browserkonsole erlaubt es jetzt, Nachrichten aus dem Inhaltsprozess durch Setzen oder Löschen des Kontrollkästchens _Inhaltsnachrichten anzeigen_ ein- oder auszublenden ([Firefox Fehler 1260877](https://bugzil.la/1260877)).

#### JavaScript-Debugger

- Sie können nun [in allen Dateien](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/search/index.html#searching-in-all-files) des aktuellen Projekts aus dem Debugger heraus suchen, indem Sie `Shift` + `Strg` + `F` (Windows oder Linux) oder `Shift` + `Cmd` + `F` (macOS) drücken ([Firefox Fehler 1320325](https://bugzil.la/1320325)).

#### Netzwerk-Monitor

- Die [Anfrageliste](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#filtering-requests) des Netzwerk-Monitors erlaubt jetzt das Blockieren einer bestimmten URL ([Firefox Fehler 1151368](https://bugzil.la/1151368)).
- Sie können nun eine Netzwerkanfrage erneut senden, ohne Methode, URL, Parameter und Header zu bearbeiten, über den [Erneut senden](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#context-menu) Befehl im Kontextmenü ([Firefox Fehler 1422014](https://bugzil.la/1422014)).
- Das Kontextmenü des [Header-Tabs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#headers) im Netzwerk-Monitor erlaubt es Ihnen nun, alle oder einige Header-Informationen im JSON-Format in die Zwischenablage zu kopieren ([Firefox Fehler 1442249](https://bugzil.la/1442249)).

#### Seiteninspektor

- Ein Button wurde im [Regel-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#examine-css-rules) des Seiteninspektors hinzugefügt, der es ermöglicht, die Anzeige von Print-Media-Queries umzuschalten ([Firefox Fehler 1534984](https://bugzil.la/1534984)).
- Das [Schriftarten-Panel](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_fonts/index.html) enthält jetzt einen Schieberegler, um das `letter-spacing` zu ändern ([Firefox Fehler 1536237](https://bugzil.la/1536237)).
- Ein Warnsymbol erscheint neben nicht unterstützten CSS-Eigenschaften oder Regeln mit ungültigen Werten, um Ihnen zu helfen zu verstehen, warum bestimmte Stile nicht angewendet werden ([Firefox Fehler 1306054](https://bugzil.la/1306054)).

#### Speicherinspektor

- Sie können nun [lokale und Session-Speicher](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#local-storage-session-storage) Einträge löschen, indem Sie das Element im Speicherinspektor auswählen und die Rücktaste drücken ([Firefox Fehler 1522893](https://bugzil.la/1522893)).

#### Sonstige

- Der [Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html) enthält jetzt eine neue Funktion _Probleme überprüfen_, die eine Reihe von Prüfwerkzeugen umfasst, um Barrierefreiheitsprobleme auf Ihren Webseiten hervorzuheben. Der erste verfügbare Check ist _Kontrast_, um Farbkontrastprobleme zu markieren.
- Die Einstellung, die die Sichtbarkeit interner Erweiterungen (System-Add-ons und versteckte Erweiterungen) auf der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite steuert, wurde von `devtools.aboutdebugging.showSystemAddons` zu `devtools.aboutdebugging.showHiddenAddons` geändert ([Firefox Fehler 1544372](https://bugzil.la/1544372)).
- Der [Modus Responsive Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) wurde neu gestaltet - der Dialog _Device Settings_ (Geräteauswahlmenü > _Liste bearbeiten…_) ist jetzt intuitiver und einfacher zu bedienen ([Firefox Fehler 1487857](https://bugzil.la/1487857)).

#### Entfernungen

- Das Kontrollkästchen "Enable add-on debugging" (Add-on-Debugging aktivieren) wurde von der [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) Seite entfernt ([Firefox Fehler 1544813](https://bugzil.la/1544813)).

### HTML

- Das {{HTMLElement("track")}} Element — repräsentiert durch [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement) — erhält nun ein [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event) Ereignis zusätzlich zum [`TextTrack`](/de/docs/Web/API/TextTrack) selbst, wenn das Text-Track von einem Mediaelement gebunden ist ([Firefox Fehler 1548731](https://bugzil.la/1548731)).
- {{htmlelement("link")}} Elemente unterstützen wieder das `disabled` Attribut, jedoch mit anderem Verhalten. Wenn `disabled` auf einem `<link>` Element zusammen mit `rel="stylesheet"` gesetzt ist, wird das referenzierte Stylesheet während des Seitenaufbaus nicht geladen und wird nach Bedarf geladen, wenn das `disabled` Attribut auf `false` geändert oder entfernt wird ([Firefox Fehler 1281135](https://bugzil.la/1281135)).

#### Entfernungen

- [`<meta http-equiv="set-cookie">`](/de/docs/Web/HTML/Reference/Elements/meta) wird nicht länger unterstützt ([Firefox Fehler 1457503](https://bugzil.la/1457503)).

### CSS

- [CSS Scroll Snapping](/de/docs/Web/CSS/CSS_scroll_snap) wurde auf die neueste Version der Spezifikation aktualisiert ([Firefox Fehler 1312163](https://bugzil.la/1312163)) und ([Firefox Fehler 1544136](https://bugzil.la/1544136)). Dies beinhaltet:
  - Die `scroll-padding` Eigenschaft ([Firefox Fehler 1373832](https://bugzil.la/1373832))
  - Die `scroll-margin` Eigenschaft ([Firefox Fehler 1373833](https://bugzil.la/1373833))
  - Die {{CSSxRef("scroll-snap-align")}} Eigenschaft ([Firefox Fehler 1373835](https://bugzil.la/1373835))

- Die {{CSSxRef("line-clamp", "-webkit-line-clamp")}} Eigenschaft wurde zur Kompatibilität mit anderen Browsern implementiert ([Firefox Fehler 866102](https://bugzil.la/866102)).
- Unterstützung wurde für das {{CSSxRef("::marker")}} Pseudo-Element hinzugefügt ([Firefox Fehler 205202](https://bugzil.la/205202)) und Animationen für `::marker` Pseudoelemente ([Firefox Fehler 1538618](https://bugzil.la/1538618)).
- Wir haben {{CSSxRef("color_value#currentcolor_keyword", "currentColor")}} in einen berechneten Wert geändert (außer für die {{cssxref("color")}} Eigenschaft) ([Firefox Fehler 760345](https://bugzil.la/760345)).
- Unterstützung wurde für die `ch` Längeneinheit behoben, sodass sie jetzt mit der Spezifikation übereinstimmt (Fallback für kein '0' Zeichen, vertikale Metriken) ([Firefox Fehler 282126](https://bugzil.la/282126)).
- Die {{CSSxRef("counter-set")}} Eigenschaft wurde implementiert ([Firefox Fehler 1518201](https://bugzil.la/1518201)).
- Wir implementieren jetzt die Listennummerierung mit einem integrierten "list-item" Zähler; dies behebt Fehler in der Listennummerierung ([Firefox Fehler 288704](https://bugzil.la/288704)).
- Selektor-Matching und Parsing-Unterstützung wurden für [`::part()`](/de/docs/Web/CSS/Reference/Selectors/::part) implementiert ([Firefox Fehler 1545430](https://bugzil.la/1545430)) und ([Firefox Fehler 1545425](https://bugzil.la/1545425)).
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) werden jetzt in indirekt gerenderten Dingen unterstützt, z.B. {{SVGElement("mask")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{SVGElement("clipPath")}} ([Firefox Fehler 1323962](https://bugzil.la/1323962)).
- Während wir die vorangestellten Versionen der verschiedenen Gradienteigenschaften {{cssxref("gradient/linear-gradient")}}, {{cssxref("gradient/radial-gradient")}} und {{cssxref("gradient/repeating-radial-gradient")}} aus Kompatibilitätsgründen verfügbar halten, haben wir ihre Parsings überarbeitet, sodass sie viel mehr wie die nicht-vorangestellten Versionen behandelt werden. Dies bedeutet, dass bestimmte vorhandene Stile nicht korrekt funktionieren.

  Insbesondere wird die komplizierte Syntax, die sowohl einen Winkel als auch eine Position verlangt, nicht mehr funktionieren, und das `to` Schlüsselwort im `<side-or-corner>` Parameter ist nicht mehr erforderlich für die vorangestellten Gradienteigenschaften. Sie werden ermutigt, stattdessen die standardmäßigen, nicht-vorangestellten Gradienteigenschaften zu verwenden, da sie jetzt weit verbreitet unterstützt werden ([Firefox Fehler 1547939](https://bugzil.la/1547939)).

#### Entfernungen

- `scroll-snap-coordinate`, `scroll-snap-destination`, `scroll-snap-type-x` und `scroll-snap-type-y` wurden entfernt.
- Die {{CSSxRef("scroll-snap-type")}} Eigenschaft ist ein Langschrift-Eigenschaft geworden, sodass die alte Kurzschrift-Syntax wie `scroll-snap-type:mandatory` nicht mehr funktionieren wird.

### SVG

_Keine Änderungen._

### JavaScript

- Die neue {{jsxref("BigInt")}} Primitive ist standardmäßig aktiviert ([Firefox Fehler 1527902](https://bugzil.la/1527902)).
- [String generische Methoden](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#string_2) wurden entfernt ([Firefox Fehler 1222552](https://bugzil.la/1222552)).

### APIs

#### CSS Object Model (CSSOM)

- Die veralteten [`rules`](/de/docs/Web/API/CSSStyleSheet/rules) Eigenschaft und die Methoden [`addRule()`](/de/docs/Web/API/CSSStyleSheet/addRule) und [`removeRule()`](/de/docs/Web/API/CSSStyleSheet/removeRule) wurden in die [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Schnittstelle hinzugefügt. Diese wurden von Internet Explorer 9 eingeführt und konnten nie ganz entfernt werden, sodass sie hinzugefügt wurden, um die Kompatibilität mit dem kleinen Prozentsatz an Websites zu verbessern, die sie noch verwenden ([Firefox Fehler 1545823](https://bugzil.la/1545823)).

#### DOM

- Die [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API) wurde nun standardmäßig auf Android aktiviert ([Firefox Fehler 1512813](https://bugzil.la/1512813)). Die Einfügung dieser API in Desktop-Versionen von Firefox wird unter [Firefox Fehler 1551302](https://bugzil.la/1551302) verfolgt.
- Das [`Window`](/de/docs/Web/API/Window) Feature [`noreferrer`](/de/docs/Web/API/Window/open) wird jetzt unterstützt; wenn angegeben, wird der Inhalt des neuen Fensters ohne Weitergabe des Hostnamens, der IP-Adresse, URL oder anderer Informationen über das Hostgerät geladen ([Firefox Fehler 1527287](https://bugzil.la/1527287)).
- Die Methode [`decode()`](/de/docs/Web/API/HTMLImageElement/decode) auf `HTMLImageElement` ist jetzt implementiert. Diese kann verwendet werden um das Laden und Dekodieren eines Bildes vor dem Hinzufügen zum DOM auszulösen ([Firefox Fehler 1501794](https://bugzil.la/1501794)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde aktualisiert, um nicht länger den nicht standardmäßigen `moz-chunked-arraybuffer` Wert für [`responseType`](/de/docs/Web/API/XMLHttpRequest/responseType) zu akzeptieren. Code, der ihn noch verwendet, sollte aktualisiert werden, um [die Fetch API als Stream zu verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_stream) ([Firefox Fehler 1120171](https://bugzil.la/1120171)).
- `XMLHttpRequest` gibt jetzt eine Warnung in der Konsole aus, wenn Sie eine synchronisierte Anfrage während der Behandlung eines [`unload`](/de/docs/Web/API/Window/unload_event),[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignisses durchführen ([Firefox Fehler 980902](https://bugzil.la/980902)).
- Die [`cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft wurde von der [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Schnittstelle zur [`Document`](/de/docs/Web/API/Document) Schnittstelle verschoben, wodurch Dokumente, die keine {{Glossary("HTML", "HTML")}} sind, Cookies verwenden können ([Firefox Fehler 144795](https://bugzil.la/144795)).
- Die Methoden [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus) und [`SVGElement.focus()`](/de/docs/Web/API/SVGElement/focus) akzeptieren jetzt ein optionales Objekt, das eine boolesche `preventScroll` Option enthalten kann, die angibt, ob der Browser vom Scrollen des neu fokussierten Elements in den Ansichtsbereich abgehalten werden soll ([Firefox Fehler 1374045](https://bugzil.la/1374045)).

#### DOM-Ereignisse

- [Firefox für Android](https://firefox-source-docs.mozilla.org/mobile/android/index.html) sendet nun fälschlicherweise kein [`resize`](/de/docs/Web/API/Window/resize_event) Ereignis mehr, bis nach dem ersten gerenderten Frame; dies verbessert die Webkompatibilität mit Websites, die dieses Ereignis nicht erwarten ([Firefox Fehler 1528052](https://bugzil.la/1528052)).
- Die Ereigniszustellung für nicht primäre Maustasten wurde angeglichen, um der Spezifikation näher zu folgen; das [`click`](/de/docs/Web/API/Element/click_event) Ereignis wird nicht mehr gesendet, wenn nicht primäre Tasten geklickt werden, stattdessen wird [`auxclick`](/de/docs/Web/API/Element/auxclick_event) verwendet. Zudem wird [`dblclick`](/de/docs/Web/API/Element/dblclick_event) nicht mehr für nicht primäre Tasten ausgelöst ([Firefox Fehler 1379466](https://bugzil.la/1379466)).
- Die proprietäre `mozPressure` Eigenschaft wurde veraltet, und löst nun eine Warnung in der Konsole aus ([Firefox Fehler 1165211](https://bugzil.la/1165211)).

#### Medien, Web Audio und WebRTC

- Aufgrund von Änderungen in den Richtlinien des Google Play Stores kann ab Firefox 68 für Android der OpenH264 Codec, der zum Umgang mit AVC/H.264 Videos in WebRTC Verbindungen verwendet wird, nicht mehr heruntergeladen und installiert werden. Daher unterstützen frische Installationen von Firefox auf Android-Geräten keine AVC in WebRTC-Anrufen mehr. Wenn Sie von früheren Versionen von Firefox aktualisieren und den Codec bereits heruntergeladen haben, wird er weiterhin funktionieren. Dies hat _keine_ Auswirkungen auf andere Plattformen. Weitere Details finden Sie in [diesem Artikel auf SUMO](https://support.mozilla.org/en-US/kb/firefox-android-openh264) oder [Firefox Fehler 1548679](https://bugzil.la/1548679).
- WebRTC wurde aktualisiert, um zu erkennen, dass ein `null` Kandidat, der an den [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis-Handler übergeben wird, was darauf hinweist, dass es keine weiteren Kandidaten gibt; wenn dies geschieht, erreicht der Zustand der ICE-Sammlung ([`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)) den `complete` Zustand ([Firefox Fehler 1318167](https://bugzil.la/1318167)).
- Die [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Methoden [`getContributingSources()`](/de/docs/Web/API/RTCRtpReceiver/getContributingSources) und [`getSynchronizationSources()`](/de/docs/Web/API/RTCRtpReceiver/getSynchronizationSources) unterstützen jetzt Video-Tracks; bisher funktionierten sie nur bei Audio ([Firefox Fehler 1534466](https://bugzil.la/1534466)).
- Die Web Audio API [`MediaStreamTrackAudioSourceNode`](/de/docs/Web/API/MediaStreamTrackAudioSourceNode) Schnittstelle wird jetzt unterstützt, ebenso die Methode [`AudioContext.createMediaStreamTrackSource()`](/de/docs/Web/API/AudioContext/createMediaStreamTrackSource) ([Firefox Fehler 1324548](https://bugzil.la/1324548)).
- [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) ist jetzt implementiert ([Firefox Fehler 1529695](https://bugzil.la/1529695)).
- Der [`MediaStreamAudioSourceNode()`](/de/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode) Konstruktor wurde aktualisiert, um die Definition der aktuellen Spezifikation abzugleichen, dass "erster Audiotrack" im Stream der Track ist, dessen ID im lexikografischen Vergleich zuerst kommt ([Firefox Fehler 1324548](https://bugzil.la/1324548)).
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) darf nicht mehr aus einem unsicheren Kontext heraus verwendet werden; der Versuch erzeugt jetzt eine `NotAllowedError` Ausnahme. Sichere Kontexte sind solche, die mit HTTPS geladen werden, solche, die mit dem `file:///` Schema lokalisiert sind und solche, die von `localhost` geladen werden. Für den Moment können Sie, wenn nötig, die Möglichkeit, unsichere Aufrufe von `getUserMedia()` durchzuführen, durch Setzen der Präferenz `media.getusermedia.insecure.enabled` auf `true` wieder aktivieren ([Firefox Fehler 1335740](https://bugzil.la/1335740)).

  > [!NOTE]
  > In der Zukunft wird Firefox auch die [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) Eigenschaft in unsicheren Kontexten entfernen, um jeden Zugriff auf die [`MediaDevices`](/de/docs/Web/API/MediaDevices) APIs zu verhindern. **Dies ist bereits in Nightly-Builds der Fall.**

#### Entfernungen

- Die nicht standardmäßige `XMLDocument.load()` Methode wurde entfernt ([Firefox Fehler 332175](https://bugzil.la/332175)).
- Die nicht standardmäßige `XMLDocument.async` Eigenschaft wurde entfernt ([Firefox Fehler 1328138](https://bugzil.la/1328138)).
- Der `RTCIceServer.credentialType` `token` Wert wurde entfernt ([Firefox Fehler 1529595](https://bugzil.la/1529595)).

### HTTP

- Der [HTTP](/de/docs/Web/HTTP) {{HTTPHeader("Clear-Site-Data")}} Header unterstützt das `executionContexts` Richtlinie nicht länger. Dies wurde aufgrund von Problemen mit Wechselwirkungen zwischen verschiedenen Arten von Daten zu unterschiedlichen Zeitpunkten im Navigationsprozess und der Art und Weise, wie die Spezifikation gestaltet ist, entfernt. Es [wurde vorgeschlagen](https://github.com/w3c/webappsec-clear-site-data/issues/59), diese Richtlinie aus der Spezifikation zu entfernen, aus diesem und anderen Gründen ([Firefox Fehler 1548034](https://bugzil.la/1548034)).

#### Entfernungen

- Die {{HTTPHeader("Content-Security-Policy")}} Richtlinie `require-sri-for` wird nicht mehr unterstützt aufgrund von Bedenken über den Stand der Standardisierung. Sie war zuvor nur hinter einer Präferenz verfügbar, die standardmäßig deaktiviert war ([Firefox Fehler 1386214](https://bugzil.la/1386214)).

### Sicherheit

- Aufgrund von [CVE-2019-11730: Die Same-Origin-Richtlinie behandelt alle Dateien in einem Verzeichnis als von derselben Herkunft](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) wurden Änderungen vorgenommen, sodass Firefox nun Dateien im selben Verzeichnis als von unterschiedlichen Ursprüngen stammend behandelt. Dies hat eine Reihe von Nebeneffekten darauf, was in Dokumenten funktioniert, die über file:// URLs geladen werden (siehe [Firefox Fehler 1558299](https://bugzil.la/1558299) für nützliche Hintergrundforschungen). Zum Beispiel können keine Worker mehr geladen werden.

### WebDriver-Konformität (Marionette)

#### Fehlerbehebungen

- Wenn `WebDriver:SwitchToWindow` die Auswahl auf ein anderes Fenster wechselt, wartet es nun auf seine `focus` und `activate` Ereignisse bevor es zurückkehrt ([Firefox Fehler 1335085](https://bugzil.la/1335085)).
- Der `TypeError: this.tabModal is null` Fehler, der manchmal beim Interagieren mit modalen Dialogen oder Benutzeraufforderungen auftrat, wurde behoben ([Firefox Fehler 1538782](https://bugzil.la/1538782)).

#### Sonstige

- Die Funktion zum erzwungenen Entladen von Hintergrund-Tabs unter niedrigen Speicherbedingungen wurde deaktiviert, um zu verhindern, dass oberste Browser-Kontexte magisch verschwinden ([Firefox Fehler 1553748](https://bugzil.la/1553748)).
- Bevorzugte Inhalteprozesse, die das Erscheinen von HTTP-Authentifizierungsdialogen verhinderten, beim Navigieren zu einer Website nach dem Öffnen eines neuen Tabs, wurden deaktiviert ([Firefox Fehler 1558763](https://bugzil.la/1558763)).

### Plugins

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die Funktionen [`proxy.register()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) und [`proxy.unregister()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy) wurden als veraltet markiert und werden in Firefox 71 entfernt ([Firefox Fehler 1545811](https://bugzil.la/1545811)).
- Ein `boolean` Flag, `incognito`, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt. Objekt hinzugefügt. Wenn `true`, weist es darauf hin, dass dies eine private Browseranfrage war ([Firefox Fehler 1545163](https://bugzil.la/1545163)).
- Die [webRequest.RequestFilter](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter) Parameter können einen Inkognito-Parameter enthalten. Wenn angegeben, werden Anfragen, die nicht dem Inkognito-Status (`true` oder `false`) entsprechen, herausgefiltert ([Firefox Fehler 1548177](https://bugzil.la/1548177)).
- Ein `string` Wert, `cookieStoreId`, der die Cookie-Store-ID des aktuellen Kontexts repräsentiert, wurde zu [proxy.RequestDetails](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/RequestDetails) hinzugefügt ([Firefox Fehler 1545420](https://bugzil.la/1545420)).
- Wenn ein Add-on versucht, einen Lesezeichenordner zum Stammverzeichnis hinzuzufügen, ist die resultierende Fehlermeldung jetzt viel intuitiver ([Firefox Fehler 1512171](https://bugzil.la/1512171)).
- Das Versprechen, das von [`browser.tabs.duplicate()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate) zurückgegeben wird, wird jetzt sofort aufgelöst, bevor die Tabs vollständig geladen sind ([Firefox Fehler 1394376](https://bugzil.la/1394376)).
- Unterstützung wurde für chrome.storage.managed hinzugefügt, wodurch Webextension-Einstellungen über Unternehmensrichtlinien implementiert werden können ([Firefox Fehler 1230802](https://bugzil.la/1230802)).
- `proxyAuthorization` und `connectionIsolation` in {{WebExtAPIRef("proxy.onRequest")}} gelten jetzt nur für HTTPS-Proxies ([Firefox Fehler 1549368](https://bugzil.la/1549368)).

### Manifeständerungen

_Keine Änderungen._

## Siehe auch

- Hacks Release Beitrag: [Firefox 68: BigInts, Contrast Checks, und die QuantumBar](https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/)
