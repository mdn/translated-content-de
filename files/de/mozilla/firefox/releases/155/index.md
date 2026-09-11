---
title: Firefox-155-Release-Notes für Entwickler (Stable)
short-title: Firefox 155 (Stable)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 155, die sich auf Entwickler auswirken.
Firefox 155 wurde am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Schaltflächen zur Emulation von Medienmerkmalen in der [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sind nun in einem speziellen Emulationsbereich zusammengefasst, der über die Schaltfläche `@` geöffnet wird.
  Der Bereich fügt außerdem die Emulation des Medienmerkmals {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} hinzu.
  ([Firefox-Bug 1692434](https://bugzil.la/1692434) und [Firefox-Bug 1477920](https://bugzil.la/1477920)).
- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet nun [JSON Lines](https://jsonlines.org/)-Dokumente (NDJSON), die als `application/jsonl`, `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` bereitgestellt werden oder die Dateierweiterung `.jsonl` haben.
  Jede Zeile wird separat in einen eigenen auf- und zuklappbaren Eintrag analysiert, der mit der Zeilennummer gekennzeichnet ist, aus der sie stammt. Eine Zeile, die nicht analysiert werden kann, wird inline gemeldet, ohne den Rest des Dokuments zu beeinträchtigen.
  ([Firefox-Bug 2055774](https://bugzil.la/2055774), [Firefox-Bug 2060972](https://bugzil.la/2060972) und [Firefox-Bug 2060529](https://bugzil.la/2060529)).
- Ein Tastaturkürzel zum Deaktivieren von Breakpoints im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde hinzugefügt.
  ([Firefox-Bug 1642578](https://bugzil.la/1642578)).

### HTML

Keine nennenswerten Änderungen.

### CSS

- Die CSS-Funktion {{cssxref("attr")}} kann nun in jeder CSS-Eigenschaft verwendet werden, statt nur in {{cssxref("content")}}.
  Dadurch können Sie das Styling anhand von HTML-Attributen steuern, etwa mit `width: attr(data-size px)`, ohne JavaScript zu verwenden.
  Werte von [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) (einschließlich Einheitenbezeichnern wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [namensraumbezogene Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden nun unterstützt.
  Sie können `attr()` nun auch innerhalb von [Container-Style-Queries](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden.
  ([Firefox-Bug 2038940](https://bugzil.la/2038940)).
- Die CSS-Funktion {{cssxref("progress")}} wird nun unterstützt.
  Sie gibt eine {{cssxref("number")}} zurück, die darstellt, wie weit ein Wert zwischen einem Start- und einem Endwert fortgeschritten ist.
  Das Ergebnis kann anschließend zur Berechnung anderer Werte verwendet werden, beispielsweise `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox-Bug 2047345](https://bugzil.la/2047345)).
- Die CSS-Funktion {{cssxref("color_value/alpha", "alpha()")}} wird nun unterstützt.
  Sie ermöglicht es Ihnen, eine Farbe zu übergeben und diese Farbe mit einem anderen Alpha-Wert (Transparenz) zurückzuerhalten, während die übrigen Komponenten der Farbe unverändert bleiben.
  Innerhalb der Funktion können Sie das Schlüsselwort `alpha` verwenden, um auf den Alpha-Kanal der ursprünglichen Farbe zu verweisen, beispielsweise `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox-Bug 2059738](https://bugzil.la/2059738) und [Firefox-Bug 2059988](https://bugzil.la/2059988)).
- Die CSS-Eigenschaft {{cssxref("font-width")}} wird nun unterstützt, zusammen mit dem {{cssxref("@font-face/font-width", "font-width")}}-Deskriptor von {{cssxref("@font-face")}} und der Eigenschaft `CSSStyleDeclaration.fontWidth`.
  Dies ist der neue Name für die Eigenschaft {{cssxref("font-stretch")}}, die weiterhin als Legacy-Alias funktioniert.
  Beachten Sie, dass die Aufzählung berechneter Stile nun `font-width` statt `font-stretch` zurückgibt.
  ([Firefox-Bug 1911075](https://bugzil.la/1911075)).

### JavaScript

- Die statischen Methoden {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} werden nun unterstützt, wie im [TC39-Vorschlag await dictionary](https://github.com/tc39/proposal-await-dictionary) definiert.
  Sie verhalten sich wie {{jsxref("Promise.all()")}} beziehungsweise {{jsxref("Promise.allSettled()")}}, nehmen jedoch ein Objekt von Promises statt eines Iterables entgegen. Sie werden mit einem Objekt erfüllt, das dieselben Schlüssel besitzt, sodass Ergebnisse anhand ihres Namens statt ihrer Position gelesen werden können.
  ([Firefox-Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), das aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) nicht geladen werden kann, wird nicht länger als Fehlschlag zwischengespeichert. Daher kann das erneute Importieren desselben Modulspezifizierers erfolgreich sein, sobald der Server wieder verfügbar ist.
  Dies gilt für JavaScript-, [JSON](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json)-, [CSS](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css)- und [Text](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text)-Module, die entweder statisch oder mit [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Fenstern als auch in Workern.
  Darüber hinaus löst [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) nun das Ereignis [`load`](/de/docs/Web/API/HTMLElement/load_event) statt [`error`](/de/docs/Web/API/HTMLElement/error_event) für Module aus, die bereits abgerufen wurden oder noch abgerufen werden. Außerdem wird ein Modulskript nun geladen, selbst wenn ein früheres `modulepreload` derselben URL seine [Integritätsprüfung](/de/docs/Web/Security/Defenses/Subresource_Integrity) nicht bestanden hat.
  ([Firefox-Bug 2055211](https://bugzil.la/2055211) und [Firefox-Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet nun [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3), wenn Verbindungen hergestellt werden. IPv6- und IPv4-Adressen werden parallel ausprobiert, damit der Verbindungsaufbau nicht durch eine nicht erreichbare Adressfamilie verzögert wird.
  Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird.
  ([Firefox-Bug 2062892](https://bugzil.la/2062892)).
- Die Versionsaushandlung von {{Glossary("QUIC", "QUIC")}} wird nun unterstützt, wodurch {{Glossary("HTTP_3", "HTTP/3")}}-Verbindungen QUIC-Version 2 aushandeln können.
  ([Firefox-Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere Funktionen der [WebTransport API](/de/docs/Web/API/WebTransport_API) werden nun unterstützt:
  - Send-Gruppen ermöglichen es Ihnen, Streams zu gruppieren, die Bandbreite teilen sollen, und Streams innerhalb einer Gruppe relativ zueinander zu priorisieren.
    Sie können eine solche Gruppe mit [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen. Übergeben Sie anschließend die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) in der Option `sendGroup` von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream).
    ([Firefox-Bug 2007165](https://bugzil.la/2007165)).
  - Die Methode `WebTransport.exportKeyingMaterial()` leitet Schlüsselmaterial aus der zugrunde liegenden TLS-Verbindung für ein bestimmtes Label und einen Kontext ab, sodass beide Endpunkte dasselbe gemeinsame Geheimnis erhalten können.
    Dies ermöglicht beispielsweise, dass ein Handshake auf Anwendungsebene MITM-Angriffe erkennt, wenn eine Anwendung eine Verbindung mit einem Peer herstellt, der nur über ein selbstsigniertes Zertifikat verfügt.
    ([Firefox-Bug 2007200](https://bugzil.la/2007200)).
  - Die Methode [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Stream zum Senden von Datagrammen zurück, mit den Eigenschaften [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder), um ihn gegenüber anderen Sendern zu priorisieren.
    ([Firefox-Bug 2007174](https://bugzil.la/2007174)).
  - Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert eine Option [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols), die die vom Client unterstützten Anwendungsprotokolle auflistet.
    Das vom Server ausgewählte Protokoll wird, falls vorhanden, in der Eigenschaft [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) zurückgegeben, wenn die Verbindung hergestellt wird und das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt wird.
    ([Firefox-Bug 2007150](https://bugzil.la/2007150)).
  - Die Eigenschaft [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) gibt an, wann der Server den Client aufgefordert hat, ein geordnetes Herunterfahren der Sitzung zu beginnen.
    ([Firefox-Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt nun die Funktion [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features) auf Desktop-Systemen, die in [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden kann.
  Dadurch können `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den Eigenschaften [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) angegeben werden. Die WGSL-Erweiterung `dual_source_blending` wird ebenfalls unterstützt.
  ([Firefox-Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Die Schnittstelle [`SVGAElement`](/de/docs/Web/API/SVGAElement) implementiert nun das Mixin [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils). Dadurch stellen SVG-{{SVGElement("a")}}-Elemente dieselben URL-Komponenteneigenschaften wie HTML-{{HTMLElement("a")}}-Elemente bereit: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte Eigenschaft [`origin`](/de/docs/Web/API/SVGAElement/origin) wird ebenfalls bereitgestellt.
  ([Firefox-Bug 2058578](https://bugzil.la/2058578)).
- Die Schnittstellen [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) unterstützen nun indexierte Setter. Das bedeutet, dass Sie ein Element in der Liste mittels Klammernotation ersetzen können, etwa `transformList[0] = newTransform`, statt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Die Schnittstelle [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) unterstützt indexierte Setter bereits.
  ([Firefox-Bug 2059426](https://bugzil.la/2059426)).
- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt nun ihr Argument [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options) mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`.
  Dadurch können Sie eine Bounding Box abrufen, die den auf ein Element angewendeten Strich, Marker und Beschnitt berücksichtigt, statt nur dessen Füllgeometrie.
  ([Firefox-Bug 2060873](https://bugzil.la/2060873)).
- Nicht gerenderte Elemente, etwa solche innerhalb von {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}} und {{svgelement("defs")}}, geben nun ein leeres Rechteck von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) und eine leere Liste von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurück, statt eine Box zu melden, die nie gezeichnet wurde.
  ([Firefox-Bug 2061646](https://bugzil.la/2061646)).

#### Medien, WebRTC und Web Audio

- Das Ereignis [`error`](/de/docs/Web/API/RTCDataChannel/error_event), das für ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt ausgelöst wird, kann nun [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner Eigenschaft [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail) melden, wenn der Transport aufgrund eines Fehlers geschlossen wird.
  Zusätzlich sind [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) nun in dedizierten Workern verfügbar. Diese Bereitstellung ist noch nicht in der Spezifikation enthalten.
  ([Firefox-Bug 1814460](https://bugzil.la/1814460)).
- Die Eigenschaft [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) gibt nun zu den von der Spezifikation geforderten Zeitpunkten einen [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zurück, einschließlich im Signalisierungsstatus `have-remote-offer`, in dem sie zuvor `null` war.
  Der Transport erreicht nun außerdem die Status `connected` und `closed`, und seine Eigenschaften [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) werden korrekt befüllt.
  ([Firefox-Bug 2019361](https://bugzil.la/2019361) und [Firefox-Bug 2056412](https://bugzil.la/2056412)).
- RTP-Header-Erweiterungen mit zwei Bytes werden nun unterstützt, sodass Header-Erweiterungen mit einer ID von 15 oder höher ausgehandelt werden können, statt einen `OperationError` auszulösen.
  ([Firefox-Bug 2014357](https://bugzil.la/2014357)).
- Die Eigenschaft [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) wird nun in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet.
  ([Firefox-Bug 2055911](https://bugzil.la/2055911)).
- Die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegebenen `transport`-Statistiken sind nun vor der Aushandlung korrekt, also nach [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), aber bevor eine Remote-Beschreibung festgelegt wurde.
  Die Eigenschaft [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) wird nun als `unknown` gemeldet, bis der DTLS-Handshake eine Rolle auswählt, während sie zuvor gar nicht gemeldet wurde ([Firefox-Bug 2053296](https://bugzil.la/2053296)). Die Eigenschaft [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) beginnt nun mit `new` statt mit `checking`, was zuvor fälschlicherweise anzeigte, dass Konnektivitätsprüfungen bereits liefen ([Firefox-Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die Binärformat-Erweiterung [compact import section](https://github.com/WebAssembly/compact-import-section) wird nun unterstützt. Sie reduziert die Größe von Modulen mit vielen [`import`](/de/docs/WebAssembly/Reference/Definitions/import)-Anweisungen.
  ([Firefox-Bug 2062344](https://bugzil.la/2062344)).
- Der Vorschlag [wide arithmetic](https://github.com/WebAssembly/wide-arithmetic) wird nun unterstützt und fügt die Anweisungen [`i64.add128`](/de/docs/WebAssembly/Reference/Numeric/add128), [`i64.sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128), [`i64.mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s) und [`i64.mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u) hinzu.
  Diese erzeugen 128-Bit-Ergebnisse aus 64-Bit-Operanden, die zuvor in zu WebAssembly kompiliertem Code emuliert werden mussten, etwa in Bignum- und Kryptografie-Bibliotheken.
  ([Firefox-Bug 2062374](https://bugzil.la/2062374)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Download-Panel wurde deaktiviert, damit das aktuelle Dokument beim Beginn eines Downloads nicht den Fokus verliert. ([Firefox-Bug 2035439](https://bugzil.la/2035439)).
- Die Actions API wurde korrigiert, sodass das Ereignis `dblclick` ausgelöst wird, wenn auf Nicht-macOS-Plattformen ein Doppelklick ausgeführt wird, während die Taste `Ctrl` gedrückt gehalten wird. ([Firefox-Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozilla-spezifische Modul `moz:debugging` wurde aktualisiert, sodass es nicht länger auf dieselbe API für verschachtelte Ereignisschleifen wie DevTools angewiesen ist. Dies verhindert Konflikte, wenn WebDriver BiDi und DevTools parallel verwendet werden. ([Firefox-Bug 2041335](https://bugzil.la/2041335)).
- Der Fehler wurde behoben, dass der Befehl `browsingContext.reload` bei Verwendung für Frames fehlschlug. ([Firefox-Bug 2030909](https://bugzil.la/2030909)).
- Die Unterstützung für das Argument `contexts` im Befehl `session.unsubscribe` wurde entfernt. Von nun an können Clients nur anhand des Ereignisnamens oder der Abonnement-ID abbestellen. ([Firefox-Bug 1988723](https://bugzil.la/1988723)).

## Experimentelle Webfunktionen

Diese Funktionen werden mit Firefox 155 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scroll-gesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) ermöglichen es einer Animation, mit der Scrollposition eines Scroll-Containers oder mit der Position eines Elements innerhalb seines Scroll-Containers fortzuschreiten, statt mit der Zeit.
  Diese Einstellung umfasst die Eigenschaften {{cssxref("scroll-timeline")}} und {{cssxref("view-timeline")}} sowie deren Longhands, einschließlich der Eigenschaft {{cssxref("view-timeline-inset")}}, zusammen mit den funktionalen Notationen {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view", "view()")}}.
  In dieser Version wurde das Longhand `view-timeline-inset` zum Shorthand `view-timeline` hinzugefügt. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) stellt CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereit, was die Manipulation von CSS durch Skripte vereinfacht. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()`-Support-Queries**: `layout.css.supports.at-rule.enabled`

  Die Funktion [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) in der At-Regel {{cssxref("@supports")}} ermöglicht es Ihnen zu testen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, beispielsweise `@supports at-rule(@scope)`. ([Firefox-Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Website zu deklarieren, wie sich ihr Audio im Verhältnis zu anderem auf dem Gerät abgespieltem Audio verhalten soll, etwa ob es mit anderem Audio gemischt, abgesenkt oder dieses unterbrochen werden soll. ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

- **CSS-Grundformen erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`**: `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können zur Angabe der Radiuswerte der CSS-Grundformen {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} verwendet werden. ([Firefox-Bug 2037673](https://bugzil.la/2037673)).

- **Inhalte mit `line-clamp` kürzen**: `layout.css.line-clamp.enabled`

  Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert ohne das Vendor-Präfix `-webkit-` und unterstützt nun auch das Schlüsselwort `no-ellipsis` sowie `<string>`-Werte zur Auswahl dessen, was an der Stelle angezeigt wird, an der der Text abgeschnitten wird. ([Firefox-Bug 2042999](https://bugzil.la/2042999) und [Firefox-Bug 2043000](https://bugzil.la/2043000)).

- **Bereichsbezogene Registrierungen benutzerdefinierter Elemente**: `dom.scoped-custom-element-registries.enabled`

  Eine [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann erstellt und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden, sodass eine Shadow Root benutzerdefinierte Elemente definieren kann, die nicht mit den in der globalen Registrierung definierten Elementen kollidieren. ([Firefox-Bug 2018900](https://bugzil.la/2018900)).
  Diese Version fügt außerdem das globale Attribut `customelementregistry` hinzu, um aus dem Markup die Registrierung auszuwählen, mit der ein Element verbunden ist. ([Firefox-Bug 2029965](https://bugzil.la/2029965)).

- **Assertions für Puffergrenzen in regulären Ausdrücken**: (nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39-Vorschlag RegExp buffer boundaries](https://github.com/tc39/proposal-regexp-buffer-boundaries) fügt regulären Ausdrücken die [Assertions `\A`, `\z` und `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) hinzu. Diese entsprechen dem Anfang oder Ende der gesamten Eingabe, unabhängig davon, ob das Flag {{jsxref("RegExp/multiline", "m")}} gesetzt ist. ([Firefox-Bug 2047706](https://bugzil.la/2047706)).

- **Wert `border-area` für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der Wert [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area) der CSS-Eigenschaft {{cssxref("background-clip")}} beschneidet den Hintergrund auf den Bereich, der durch den Rahmen des Elements gezeichnet wird. Dadurch ist es möglich, einen Farbverlauf oder ein Bild als Rahmen zu verwenden. ([Firefox-Bug 2045230](https://bugzil.la/2045230)).

- **`view-timeline` umfasst `view-timeline-inset`**: `layout.css.scroll-driven-animations.enabled`

  Die Shorthand-Eigenschaft {{cssxref("view-timeline")}} unterstützt nun die Eigenschaft {{cssxref("view-timeline-inset")}}. Mit dem Shorthand können Sie Anfangs- und/oder End-Inset-Werte (oder Outset-Werte) angeben, um die Position der View-Progress-Timeline anzupassen. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

- **Die Schnittstelle `MathMLAnchorElement`**: `mathml.a.element.enabled`

  Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) wird im DOM nun korrekt durch die Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch die generische Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) dargestellt. ([Firefox-Bug 2059312](https://bugzil.la/2059312)).
