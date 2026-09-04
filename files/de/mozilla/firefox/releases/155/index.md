---
title: Firefox 155 Versionshinweise für Entwickler (Stable)
short-title: Firefox 155 (Stable)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 62363e17443a327a2b10525560a5886534a631b7
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 155, die Entwickler betreffen. Firefox 155 wurde am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Medieneigenschafts-Emulationsbuttons in der [Regel-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sind jetzt in einem eigenen Emulationspanel gesammelt, das mit dem `@`-Button geöffnet wird.
  Das Panel fügt auch die Emulation der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Medieneigenschaft hinzu.
  ([Firefox-Bug 1692434](https://bugzil.la/1692434) und [Firefox-Bug 1477920](https://bugzil.la/1477920)).
- Der [JSON-Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet jetzt [JSON Lines](https://jsonlines.org/) (NDJSON) Dokumente, die als `application/jsonl`, `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` bereitgestellt werden oder die Dateiendung `.jsonl` haben.
  Jede Zeile wird separat in einen eigenen aufklappbaren Eintrag geparst, der mit der Zeilennummer gekennzeichnet ist, aus der sie stammt. Eine Zeile, die nicht geparst werden kann, wird inline gemeldet, ohne den Rest des Dokuments zu beeinflussen.
  ([Firefox-Bug 2055774](https://bugzil.la/2055774), [Firefox-Bug 2060972](https://bugzil.la/2060972) und [Firefox-Bug 2060529](https://bugzil.la/2060529)).
- Ein Tastenkürzel zum Deaktivieren von Breakpoints im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde hinzugefügt.
  ([Firefox-Bug 1642578](https://bugzil.la/1642578)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("attr")}} CSS-Funktion kann jetzt in jeder CSS-Eigenschaft verwendet werden, nicht nur in {{cssxref("content")}}.
  Dies ermöglicht es, Stiländerungen basierend auf HTML-Attributen vorzunehmen, wie z.B. `width: attr(data-size px)`, ohne JavaScript zu verwenden.
  [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte (einschließlich Einheitsbezeichner wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [namensraumbezogene Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden jetzt unterstützt.
  Sie können jetzt auch `attr()` innerhalb von [Containerstilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden.
  ([Firefox-Bug 2038940](https://bugzil.la/2038940)).
- Die {{cssxref("progress")}} CSS-Funktion wird jetzt unterstützt.
  Diese Funktion gibt eine {{cssxref("number")}} zurück, die angibt, wie weit ein Wert zwischen einem Start- und Endwert fortgeschritten ist.
  Das Ergebnis kann dann verwendet werden, um andere Werte zu berechnen, z.B. `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox-Bug 2047345](https://bugzil.la/2047345)).
- Die {{cssxref("color_value/alpha", "alpha()")}} CSS-Funktion wird jetzt unterstützt.
  Sie ermöglicht es, eine Farbe zu übergeben und die Farbe mit einem anderen Alpha (Transparenz) Wert zurückzubekommen, wobei die anderen Komponenten der Farbe unverändert bleiben.
  Innerhalb der Funktion können Sie das `alpha`-Schlüsselwort verwenden, um auf den Alphakanal der Originalfarbe zu verweisen, z.B. `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox-Bug 2059738](https://bugzil.la/2059738) und [Firefox-Bug 2059988](https://bugzil.la/2059988)).
- Die {{cssxref("font-width")}} CSS-Eigenschaft wird jetzt unterstützt, zusammen mit dem {{cssxref("@font-face/font-width", "font-width")}} {{cssxref("@font-face")}} Deskriptor und der Eigenschaft `CSSStyleDeclaration.fontWidth`.
  Dies ist der neue Name für die {{cssxref("font-stretch")}} Eigenschaft, die weiterhin als ältere Alias funktioniert.
  Beachten Sie, dass die Aufzählung des berechneten Stils jetzt `font-width` anstelle von `font-stretch` zurückgibt.
  ([Firefox-Bug 1911075](https://bugzil.la/1911075)).

### JavaScript

- Die statischen Methoden {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} werden jetzt unterstützt, wie im [TC39 await dictionary proposal](https://github.com/tc39/proposal-await-dictionary) definiert.
  Diese verhalten sich ähnlich wie {{jsxref("Promise.all()")}} und {{jsxref("Promise.allSettled()")}}, außer dass sie ein Objekt von Versprechen anstelle eines Iterables übernehmen. Sie erfüllen sich mit einem Objekt, das die gleichen Schlüssel hat, sodass Ergebnisse nach Name statt nach Position gelesen werden können.
  ([Firefox-Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), das aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) nicht geladen werden kann, wird nicht mehr als Fehler zwischengespeichert, sodass das Importieren desselben Modulspezifikators erneut erfolgreich sein kann, sobald der Server sich erholt hat.
  Dies gilt für JavaScript-, [JSON](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json)-, [CSS](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) und [Text-](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) Module, die entweder statisch oder mit [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Fenstern als auch in Workern.
  Zur gleichen Zeit löst [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) nun das [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis aus, anstatt [`error`](/de/docs/Web/API/HTMLElement/error_event) für Module, die bereits abgerufen werden oder noch abgerufen werden, und ein Modulskript lädt nun, selbst wenn ein früheres `modulepreload` derselben URL seine [Integritätsüberprüfung](/de/docs/Web/Security/Defenses/Subresource_Integrity) fehlgeschlagen hat.
  ([Firefox-Bug 2055211](https://bugzil.la/2055211) und [Firefox-Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet jetzt [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3) beim Verbindungsaufbau und konkurriert IPv6- und IPv4-Adressen, sodass der Verbindungsaufbau nicht durch eine unerreichbare Adressfamilie verzögert wird.
  Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird.
  ([Firefox-Bug 2062892](https://bugzil.la/2062892)).
- Die Versionsverhandlung von {{Glossary("QUIC", "QUIC")}} wird jetzt unterstützt, sodass {{Glossary("HTTP_3", "HTTP/3")}} Verbindungen die QUIC Version 2 verhandeln können.
  ([Firefox-Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere Funktionen der [WebTransport API](/de/docs/Web/API/WebTransport_API) werden jetzt unterstützt:
  - Send-Gruppen ermöglichen es Ihnen, Streams zu gruppieren, die Bandbreite teilen und Streams relativ zueinander innerhalb einer Gruppe priorisieren sollen.
    Sie können eine solche Gruppe mit [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen. Übergeben Sie dann die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) in der `sendGroup` Option von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream).
    ([Firefox-Bug 2007165](https://bugzil.la/2007165)).
  - Die Methode `WebTransport.exportKeyingMaterial()` leitet den Schlüsselmaterial von der zugrunde liegenden TLS-Verbindung für ein gegebenes Label und Kontext ab, sodass beide Endpunkte denselben gemeinsamen geheimen Schlüssel erhalten können.
    Dies ermöglicht z.B. einen anwendungsspezifischen Handshake, um MITM-Angriffe zu erkennen, falls eine Anwendung zu einem Peer verbindet, der nur über ein selbstsigniertes Zertifikat verfügt.
    ([Firefox-Bug 2007200](https://bugzil.la/2007200)).
  - Die Methode [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Stream zum Senden von Datagrammen zurück, mit den Eigenschaften [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) zum Priorisieren gegenüber anderen Sendern.
    ([Firefox-Bug 2007174](https://bugzil.la/2007174)).
  - Der [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) Konstruktor akzeptiert eine [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) Option, die die unterstützten Anwendungsprotokolle des Clients auflistet.
    Das vom Server ausgewählte Protokoll wird, falls vorhanden, in der [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) Eigenschaft zurückgegeben, wenn die Verbindung hergestellt wird und das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Protokoll erfüllt ist.
    ([Firefox-Bug 2007150](https://bugzil.la/2007150)).
  - Die [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) Eigenschaft zeigt an, wann der Server den Client gebeten hat, einen ordnungsgemäßen Sitzungsabbau zu starten.
    ([Firefox-Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt jetzt das [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features) Feature auf dem Desktop, das in [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden kann.
  Dies ermöglicht es, `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den Eigenschaften [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) anzugeben. Die WGSL `dual_source_blending` Erweiterung wird ebenfalls unterstützt.
  ([Firefox-Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Das [`SVGAElement`](/de/docs/Web/API/SVGAElement) Interface implementiert jetzt das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) Mixin. Dadurch stellen SVG {{SVGElement("a")}} Elemente die gleichen URL-Komponenteneigenschaften wie HTML {{HTMLElement("a")}} Elemente bereit: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte [`origin`](/de/docs/Web/API/SVGAElement/origin) Eigenschaft wird ebenfalls bereitgestellt.
  ([Firefox-Bug 2058578](https://bugzil.la/2058578)).
- Die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) Interfaces unterstützen jetzt indizierte Setzer. Das bedeutet, dass Sie ein Element in der Liste mit Listen-Notation ersetzen können, wie `transformList[0] = newTransform`, anstatt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Das [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) Interface unterstützt bereits indizierte Setzer.
  ([Firefox-Bug 2059426](https://bugzil.la/2059426)).
- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt jetzt ihr [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options) Argument, mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`.
  Dadurch können Sie ein Begrenzungsrechteck erhalten, das die angewandten Striche, Markierungen und Clippings eines Elements berücksichtigt, anstatt nur seine Füllgeometrie.
  ([Firefox-Bug 2060873](https://bugzil.la/2060873)).
- Elemente, die nicht gerendert werden, wie solche innerhalb von {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}}, und {{svgelement("defs")}}, geben jetzt ein leeres Rechteck von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) und eine leere Liste von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurück, anstatt einen Kasten zu melden, der nie gezeichnet wurde.
  ([Firefox-Bug 2061646](https://bugzil.la/2061646)).

#### Medien, WebRTC und Web Audio

- Das [`error`](/de/docs/Web/API/RTCDataChannel/error_event) Ereignis, das auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail) Eigenschaft melden, falls der Transport aufgrund eines Fehlers geschlossen wird.
  Zusätzlich stehen [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Workern zur Verfügung (diese Exposition ist noch nicht in der Spezifikation).
  ([Firefox-Bug 1814460](https://bugzil.la/1814460)).
- Die [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) Eigenschaft gibt jetzt einen [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zu den Zeiten zurück, die die Spezifikation erfordert, einschließlich im `have-remote-offer` Signalisierungszustand, wo sie vorher `null` war.
  Der Transport erreicht jetzt auch die Zustände `connected` und `closed`, und seine Eigenschaften [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) werden korrekt ausgefüllt.
  ([Firefox-Bug 2019361](https://bugzil.la/2019361) und [Firefox-Bug 2056412](https://bugzil.la/2056412)).
- Zwei-Byte RTP-Header-Erweiterungen werden jetzt unterstützt, sodass Header-Erweiterungen mit einer ID von 15 oder höher verhandelt werden können, anstatt einen `OperationError` zu verursachen.
  ([Firefox-Bug 2014357](https://bugzil.la/2014357)).
- Die [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) Eigenschaft wird jetzt in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet.
  ([Firefox-Bug 2055911](https://bugzil.la/2055911)).
- Die `transport` Statistiken, die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben werden, sind jetzt vor der Verhandlung korrekt, also nachdem [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aber bevor eine Remote-Beschreibung festgelegt wurde.
  Die [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) Eigenschaft wird jetzt als `unknown` gemeldet, bis der DTLS-Handshake eine Rolle auswählt, wo sie vorher überhaupt nicht gemeldet wurde ([Firefox-Bug 2053296](https://bugzil.la/2053296)), und die [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) Eigenschaft startet jetzt als `new` statt `checking`, was fälschlicherweise anzeigte, dass bereits Konnektivitätsprüfungen durchgeführt wurden ([Firefox-Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die Binärformaterweiterung [kompakt Import-Abschnitt](https://github.com/WebAssembly/compact-import-section) wird jetzt unterstützt, was die Größe von Modulen reduziert, die viele [`import`](/de/docs/WebAssembly/Reference/Definitions/import) Anweisungen haben.
  ([Firefox-Bug 2062344](https://bugzil.la/2062344)).
- Der Vorschlag [weite Arithmetik](https://github.com/WebAssembly/wide-arithmetic) wird jetzt unterstützt und fügt die Instruktionen [`i64.add128`](/de/docs/WebAssembly/Reference/Numeric/add128), [`i64.sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128), [`i64.mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s) und [`i64.mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u) hinzu.
  Diese erzeugen 128-Bit-Ergebnisse aus 64-Bit-Operanden, die zuvor in Code kompiliert zu WebAssembly emuliert werden mussten, wie z.B. Bignum- und Kryptographiebibliotheken.
  ([Firefox-Bug 2062374](https://bugzil.la/2062374)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Download-Panel wurde deaktiviert, um zu verhindern, dass das aktuelle Dokument den Fokus verliert, wenn ein Download beginnt. ([Firefox-Bug 2035439](https://bugzil.la/2035439)).
- Die Actions API wurde so repariert, dass das `dblclick` Ereignis ausgelöst wird, wenn ein Doppelklick bei gedrückter `Ctrl`-Taste auf Nicht-macOS-Plattformen ausgeführt wird. ([Firefox-Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozilla-spezifische `moz:debugging` Modul wurde aktualisiert, um nicht mehr von derselben verschachtelten Ereignisschleifen-API wie DevTools abhängig zu sein, was Konflikte verhindert, wenn WebDriver BiDi und DevTools parallel genutzt werden. ([Firefox-Bug 2041335](https://bugzil.la/2041335)).
- Das `browsingContext.reload` Kommando, das beim Gebrauch für Frames fehlschlug, wurde repariert. ([Firefox-Bug 2030909](https://bugzil.la/2030909)).
- Unterstützung für das `contexts` Argument im `session.unsubscribe` Kommando wurde entfernt. Ab sofort können Clients nur noch durch den Ereignisnamen oder die Abonnement-ID abbestellen. ([Firefox-Bug 1988723](https://bugzil.la/1988723)).

## Änderungen für Add-on-Entwickler

## Experimentelle Web-Features

Diese Features werden in Firefox 155 ausgeliefert, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Scroll-gesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) lassen eine Animation mit der Scrollposition eines Scrollers oder mit der Position eines Elements innerhalb seines Scrollers fortschreiten, anstatt mit der Zeit.
  Diese Einstellung umfasst die Eigenschaften {{cssxref("scroll-timeline")}} und {{cssxref("view-timeline")}} und deren Langformen, einschließlich der Eigenschaft {{cssxref("view-timeline-inset")}}, sowie die funktionalen Notationen {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view", "view()")}}.
  In dieser Version wurde die Langform `view-timeline-inset` zur Kurzform `view-timeline` hinzugefügt. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) stellt CSS-Werte als typisierte JavaScript-Objekte anstelle von Zeichenfolgen bereit, was die Manipulation von CSS aus Skripten vereinfacht. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()` Unterstützungsabfragen**: `layout.css.supports.at-rule.enabled`

  Die [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) Funktion in der {{cssxref("@supports")}} At-Regel erlaubt es, zu testen, ob der Browser eine gegebene CSS-At-Regel unterstützt, zum Beispiel `@supports at-rule(@scope)`. ([Firefox-Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) erlaubt es einer Website, zu deklarieren, wie ihr Audio im Verhältnis zu anderen auf dem Gerät abgespielten Audio behandelt werden soll, wie z.B. ob es mit anderem Audio gemischt, geduckt oder unterbrochen werden soll. ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

- **CSS Grundformen erlauben `farthest-corner` und `closest-corner` Schlüsselwörter**: `layout.css.ellipse-corners.enabled`

  Die `farthest-corner` und `closest-corner` Schlüsselwörter können verwendet werden, um die Radiuswerte der {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} CSS Grundformen anzugeben. ([Firefox-Bug 2037673](https://bugzil.la/2037673)).

- **Inhalt mit `line-clamp` kürzen**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert ohne das `-webkit-` Vendor-Präfix und unterstützt jetzt auch das Schlüsselwort `no-ellipsis` und `<string>` Werte, um auszuwählen, was dort angezeigt wird, wo der Text gekürzt wird. ([Firefox-Bug 2042999](https://bugzil.la/2042999) und [Firefox-Bug 2043000](https://bugzil.la/2043000)).

- **Gescopte benutzerdefinierte Elementregistern**: `dom.scoped-custom-element-registries.enabled`

  Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann erstellt und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden, damit eine Shadow-Dom-Wurzel benutzerdefinierte Elemente definieren kann, die nicht mit denen im globalen Register kollidieren. ([Firefox-Bug 2018900](https://bugzil.la/2018900)).
  Diese Version fügt auch das globale Attribut `customelementregistry` hinzu, um das Register auszuwählen, mit dem ein Element im Markup verbunden ist. ([Firefox-Bug 2029965](https://bugzil.la/2029965)).

- **Pufferboundary-Assertions in regulären Ausdrücken**: (Nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39-RegExp-Puffergrenzen-Vorschlag](https://github.com/tc39/proposal-regexp-buffer-boundaries) fügt die [`\A`, `\z`, und `\Z` Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) zu regulären Ausdrücken hinzu. Diese passen den Anfang oder das Ende der gesamten Eingabe, unabhängig davon, ob das {{jsxref("RegExp/multiline", "m")}} Flag gesetzt ist. ([Firefox-Bug 2047706](https://bugzil.la/2047706)).

- **`border-area` Wert für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area) Wert der {{cssxref("background-clip")}} CSS-Eigenschaft beschneidet den Hintergrund zu dem Bereich, der vom Rand des Elements bemalt wird, was es möglich macht, einen Verlauf oder ein Bild als Rand zu verwenden. ([Firefox-Bug 2045230](https://bugzil.la/2045230)).

- **`view-timeline` beinhaltet `view-timeline-inset`**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("view-timeline")}} Kurzform-Eigenschaft unterstützt jetzt die {{cssxref("view-timeline-inset")}} Eigenschaft. Die Kurzform ermöglicht es Ihnen, Start- und/oder End-Einrückungswerte festzulegen, um die Position der Sichtbarkeits-Fortschrittszeitachse anzupassen. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).
