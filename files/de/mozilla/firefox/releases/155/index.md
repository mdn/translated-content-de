---
title: Firefox 155 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 155 (Stabil)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 113c012aab0a694ee2c489ce9b0dab8c94edf36c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 wurde am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Emulations-Buttons für Medienfunktionen im [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sind jetzt in einem eigenen Emulations-Panel gesammelt, das mit dem `@`-Button geöffnet wird.
  Das Panel fügt auch die Emulation der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Medienfunktion hinzu.
  ([Firefox Bug 1692434](https://bugzil.la/1692434) und [Firefox Bug 1477920](https://bugzil.la/1477920)).
- Die [JSON-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet jetzt [JSON Lines](https://jsonlines.org/) (NDJSON)-Dokumente, die als `application/jsonl`, `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` bereitgestellt werden, oder eine `.jsonl` Dateiendung haben.
  Jede Zeile wird separat in einen eigenen aufklappbaren Eintrag geparst, der mit der entsprechenden Zeilennummer gekennzeichnet ist. Eine Zeile, die nicht geparst werden kann, wird inline gemeldet, ohne dass der Rest des Dokuments betroffen ist.
  ([Firefox Bug 2055774](https://bugzil.la/2055774), [Firefox Bug 2060972](https://bugzil.la/2060972) und [Firefox Bug 2060529](https://bugzil.la/2060529)).
- Eine Tastenkombination zum Deaktivieren von Haltepunkten im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde hinzugefügt.
  ([Firefox Bug 1642578](https://bugzil.la/1642578)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("attr")}} CSS-Funktion kann jetzt in jeder CSS-Eigenschaft verwendet werden und nicht nur im {{cssxref("content")}}.
  Dies ermöglicht es, Styling von HTML-Attributen zu steuern, wie zum Beispiel `width: attr(data-size px)`, ohne JavaScript zu verwenden.
  [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte (einschließlich Einheitskennungen wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [namensraumbezogene Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden jetzt unterstützt.
  Sie können `attr()` jetzt auch innerhalb von [Container-Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden.
  ([Firefox Bug 2038940](https://bugzil.la/2038940)).
- Die {{cssxref("progress")}} CSS-Funktion wird nun unterstützt.
  Diese gibt eine {{cssxref("number")}} zurück, die anzeigt, wie weit ein Wert zwischen einem Start- und Endwert fortgeschritten ist.
  Das Ergebnis kann dann verwendet werden, um andere Werte zu berechnen, zum Beispiel `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox Bug 2047345](https://bugzil.la/2047345)).
- Die {{cssxref("color_value/alpha", "alpha()")}} CSS-Funktion wird jetzt unterstützt.
  Sie können eine Farbe übergeben und erhalten die Farbe mit einem anderen Alpha-Wert (Transparenz) zurück, wobei die anderen Komponenten der Farbe unverändert bleiben.
  Innerhalb der Funktion können Sie das `alpha` Schlüsselwort verwenden, um auf den Alpha-Kanal der ursprünglichen Farbe zu verweisen, zum Beispiel `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox Bug 2059738](https://bugzil.la/2059738) und [Firefox Bug 2059988](https://bugzil.la/2059988)).
- Die {{cssxref("font-width")}} CSS-Eigenschaft wird jetzt unterstützt, zusammen mit dem {{cssxref("@font-face/font-width", "font-width")}} {{cssxref("@font-face")}}-Deskriptor und der `CSSStyleDeclaration.fontWidth` Eigenschaft.
  Dies ist der neue Name für die {{cssxref("font-stretch")}} Eigenschaft, die weiterhin als Legacy-Alias funktioniert.
  Beachten Sie, dass die Aufzählung der berechneten Stil jetzt `font-width` statt `font-stretch` zurückgibt.
  ([Firefox Bug 1911075](https://bugzil.la/1911075)).

### JavaScript

- Die statischen Methoden {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} werden nun unterstützt, wie im [TC39 await dictionary proposal](https://github.com/tc39/proposal-await-dictionary) definiert.
  Diese verhalten sich wie {{jsxref("Promise.all()")}} bzw. {{jsxref("Promise.allSettled()")}}, außer dass sie ein Objekt von Promises statt eines iterierbaren Objekts nehmen. Sie erfüllen sich mit einem Objekt, das dieselben Schlüssel hat, sodass Ergebnisse namentlich statt positionsbasiert gelesen werden können.
  ([Firefox Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), das aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) nicht geladen werden kann, wird nicht mehr als Fehlschlag zwischengespeichert, sodass der Import desselben Modulspezifikators erneut erfolgreich sein kann, sobald der Server wiederhergestellt ist.
  Dies gilt für JavaScript, [JSON](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json), [CSS](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) und [Text](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) Module, die entweder statisch oder mit [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Fenstern als auch in Arbeitern.
  Zudem löst `<link rel="modulepreload">` nun das [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis anstelle von [`error`](/de/docs/Web/API/HTMLElement/error_event) für bereits abgerufene oder noch abgerufene Module aus, und ein Modulskript wird nun geladen, selbst wenn ein früheres `modulepreload` derselben URL seinen [Integritäts-Check](/de/docs/Web/Security/Defenses/Subresource_Integrity) nicht bestanden hat.
  ([Firefox Bug 2055211](https://bugzil.la/2055211) und [Firefox Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet jetzt [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3), wenn Verbindungen hergestellt werden, indem IPv6- und IPv4-Adressen parallel getestet werden, sodass der Verbindungsaufbau nicht durch eine unerreichbare Adressfamilie verzögert wird.
  Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird.
  ([Firefox Bug 2062892](https://bugzil.la/2062892)).
- Die {{Glossary("QUIC", "QUIC")}} Versionsverhandlung wird jetzt unterstützt, sodass {{Glossary("HTTP_3", "HTTP/3")}} Verbindungen die QUIC Version 2 aushandeln können.
  ([Firefox Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere [WebTransport API](/de/docs/Web/API/WebTransport_API) Funktionen werden jetzt unterstützt:
  - Send-Gruppen ermöglichen es, Streams zu gruppieren, die Bandbreite teilen sollten, und Streams innerhalb einer Gruppe relativ zueinander zu priorisieren.
    Sie können eine mit [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen und dann die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) in der `sendGroup` Option von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) übergeben.
    ([Firefox Bug 2007165](https://bugzil.la/2007165)).
  - Die `WebTransport.exportKeyingMaterial()` Methode leitet Schlüsselmaterial von der zugrunde liegenden TLS-Verbindung für ein gegebenes Label und Kontext ab, sodass beide Endpunkte dasselbe geteilte Geheimnis erhalten können.
    Dies ermöglicht z.B. einen handshake auf Anwendungsebene, um MITM-Angriffe zu erkennen, wenn eine Anwendung eine Verbindung zu einem Peer herstellt, der nur ein selbstsigniertes Zertifikat hat.
    ([Firefox Bug 2007200](https://bugzil.la/2007200)).
  - Die [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) Methode gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Stream zum Senden von Datagrammen zurück, mit [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) Eigenschaften zur Priorisierung gegen andere Sender.
    ([Firefox Bug 2007174](https://bugzil.la/2007174)).
  - Der [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) Konstruktor akzeptiert eine [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) Option, die die Anwendungsprotokolle auflistet, die der Client unterstützt.
    Das vom Server ausgewählte Protokoll, falls vorhanden, wird in der [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) Eigenschaft zurückgegeben, wenn die Verbindung hergestellt ist und das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Protokoll erfüllt ist.
    ([Firefox Bug 2007150](https://bugzil.la/2007150)).
  - Die [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) Eigenschaft zeigt an, wann der Server den Client gebeten hat, eine vereinfachte Beendigung der Sitzung zu starten.
    ([Firefox Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt jetzt die [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features) Funktion auf dem Desktop. Diese kann in [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden.
  Dies ermöglicht `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) Eigenschaften von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) anzugeben. Die WGSL `dual_source_blending` Erweiterung wird ebenfalls unterstützt.
  ([Firefox Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Das [`SVGAElement`](/de/docs/Web/API/SVGAElement) Interface implementiert nun das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) Mixin. Daher exponieren SVG {{SVGElement("a")}} Elemente dieselben URL-Komponenteigenschaften wie HTML {{HTMLElement("a")}} Elemente: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte Eigenschaft [`origin`](/de/docs/Web/API/SVGAElement/origin) wird ebenfalls exponiert.
  ([Firefox Bug 2058578](https://bugzil.la/2058578)).
- Die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) Schnittstellen unterstützen jetzt indizierte Setzer. Das bedeutet, dass Sie ein Element in der Liste mit eckigen Klammern ersetzen können, z. B. `transformList[0] = newTransform`, anstatt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) zu verwenden.
  Die [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) Schnittstelle unterstützt bereits indizierte Setzer.
  ([Firefox Bug 2059426](https://bugzil.la/2059426)).
- Die [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) Methode beachtet jetzt ihr [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options) Argument mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`.
  Dies ermöglicht es Ihnen, eine Begrenzungsbox zu erhalten, die den angewendeten Strich, die Markierungen und das Clipping eines Elements berücksichtigt, anstatt nur seine Füllgeometrie.
  ([Firefox Bug 2060873](https://bugzil.la/2060873)).
- Elemente, die nicht gerendert werden, wie solche innerhalb von {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}} und {{svgelement("defs")}}, geben nun ein leeres Rechteck von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) und eine leere Liste von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurück, anstatt eine Box zu melden, die niemals gemalt wurde.
  ([Firefox Bug 2061646](https://bugzil.la/2061646)).

#### Media, WebRTC und Web Audio

- Das [`error`](/de/docs/Web/API/RTCDataChannel/error_event) Ereignis, das auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail) Eigenschaft melden, wenn der Transport aufgrund eines Fehlers geschlossen wird.
  Zusätzlich sind [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Workern verfügbar (diese Exposition ist noch nicht in der Spezifikation enthalten).
  ([Firefox Bug 1814460](https://bugzil.la/1814460)).
- Die [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) Eigenschaft gibt jetzt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zu den Zeiten zurück, die von der Spezifikation gefordert werden, einschließlich im Signalzustand `have-remote-offer`, wo sie zuvor `null` war.
  Der Transport erreicht jetzt auch die Zustände `connected` und `closed`, und seine [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) Eigenschaften sind korrekt gefüllt.
  ([Firefox Bug 2019361](https://bugzil.la/2019361) und [Firefox Bug 2056412](https://bugzil.la/2056412)).
- Zweibyte-RTP-Header-Erweiterungen werden jetzt unterstützt, sodass Header-Erweiterungen mit einer ID von 15 oder höher verhandelt werden können, anstatt einen `OperationError` zu verursachen.
  ([Firefox Bug 2014357](https://bugzil.la/2014357)).
- Die [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) Eigenschaft wird jetzt in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet.
  ([Firefox Bug 2055911](https://bugzil.la/2055911)).
- Die `transport` Statistiken, die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben werden, sind jetzt korrekt vor der Verhandlung, also nach [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), aber bevor eine Remote-Beschreibung festgelegt wurde.
  Die [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) Eigenschaft wird jetzt als `unknown` gemeldet, bis der DTLS-Handshake eine Rolle auswählt, wo sie zuvor überhaupt nicht gemeldet wurde ([Firefox Bug 2053296](https://bugzil.la/2053296)), und die [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) Eigenschaft beginnt jetzt als `new` anstatt `checking`, was fälschlicherweise angab, dass Konnektivitätsprüfungen bereits im Gange waren ([Firefox Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die [kompakte Import-Sektion](https://github.com/WebAssembly/compact-import-section) Erweiterung des Binärformats wird jetzt unterstützt, was die Größe von Modulen reduziert, die viele Importe haben.
  ([Firefox Bug 2062344](https://bugzil.la/2062344)).
- Der [Wide Arithmetic](https://github.com/WebAssembly/wide-arithmetic) Vorschlag wird jetzt unterstützt und fügt die Anweisungen `i64.add128`, `i64.sub128`, `i64.mul_wide_s` und `i64.mul_wide_u` hinzu.
  Diese liefern 128-Bit-Ergebnisse von 64-Bit-Operanden, die zuvor im in WebAssembly kompilierten Code emuliert werden mussten, wie z.B. in Bignum- und Kryptographiebibliotheken.
  ([Firefox Bug 2062374](https://bugzil.la/2062374)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Download-Panel wurde deaktiviert, um zu verhindern, dass das aktuelle Dokument den Fokus verliert, wenn ein Download beginnt. ([Firefox Bug 2035439](https://bugzil.la/2035439)).
- Die Actions-API wurde so korrigiert, dass das `dblclick` Ereignis ausgelöst wird, wenn ein Doppelklick bei gedrückter `Ctrl`-Taste auf nicht macOS-Plattformen ausgeführt wird. ([Firefox Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozilla-spezifische `moz:debugging` Modul wurde aktualisiert, um nicht mehr von derselben verschachtelten Ereignisschleifen-API wie DevTools abhängig zu sein, was Konflikte verhindert, wenn WebDriver BiDi und DevTools gleichzeitig verwendet werden. ([Firefox Bug 2041335](https://bugzil.la/2041335)).
- Der `browsingContext.reload` Befehl wurde so korrigiert, dass er nicht fehlschlägt, wenn er für Frames verwendet wird. ([Firefox Bug 2030909](https://bugzil.la/2030909)).
- Die Unterstützung für das `contexts` Argument im `session.unsubscribe` Befehl wurde entfernt. Fortan können Clients nur noch nach Ereignisname oder Abonnement-ID abmelden. ([Firefox Bug 1988723](https://bugzil.la/1988723)).

## Änderungen für Add-on-Entwickler

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 155 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scroll-gesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) lassen eine Animation mit der Scrollposition eines Scrollers oder der Position eines Elements innerhalb seines Scrollers fortlaufen, statt mit der Zeit.
  Diese Einstellung umfasst die {{cssxref("scroll-timeline")}} und {{cssxref("view-timeline")}} Eigenschaften und deren Langformen, einschließlich der {{cssxref("view-timeline-inset")}} Eigenschaft, sowie die {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view", "view()")}} Funktionalnotationen.
  In dieser Version wurde die `view-timeline-inset` Langform der `view-timeline` Kurzform hinzugefügt. ([Firefox Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) exponiert CSS-Werte als typisierte JavaScript-Objekte statt als Strings, was die Manipulation von CSS aus Skripten vereinfacht. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()` Unterstützung in Abfragen**: `layout.css.supports.at-rule.enabled`

  Die [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) Funktion in der {{cssxref("@supports")}} At-Regel ermöglicht es Ihnen, zu testen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, zum Beispiel `@supports at-rule(@scope)`. ([Firefox Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Website anzugeben, wie ihr Audio sich im Vergleich zu anderen auf dem Gerät abgespielten Audios verhalten soll, beispielsweise ob es sich mischen, absenken oder unterbrechen soll. ([Firefox Bug 2055710](https://bugzil.la/2055710)).

- **CSS Grundformen erlauben `farthest-corner` und `closest-corner` Schlüsselwörter**: `layout.css.ellipse-corners.enabled`

  Die `farthest-corner` und `closest-corner` Schlüsselwörter können verwendet werden, um die Radii-Werte der {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} CSS Grundformen anzugeben. ([Firefox Bug 2037673](https://bugzil.la/2037673)).

- **Inhalt mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS Eigenschaft funktioniert ohne das `-webkit-` Vendor-Präfix und unterstützt jetzt auch das `no-ellipsis` Schlüsselwort und `<string>` Werte, um auszuwählen, was dort angezeigt wird, wo der Text abgeschnitten ist. ([Firefox Bug 2042999](https://bugzil.la/2042999) und [Firefox Bug 2043000](https://bugzil.la/2043000)).

- **Gescopte benutzerdefinierte Elementregistern**: `dom.scoped-custom-element-registries.enabled`

  Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann erstellt und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden, sodass eine Schattenwurzel benutzerdefinierte Elemente definieren kann, die nicht mit denen im globalen Register kollidieren. ([Firefox Bug 2018900](https://bugzil.la/2018900)).
  Diese Version fügt auch das `customelementregistry` globale Attribut hinzu, um das Register auszuwählen, mit dem ein Element aus Markup verbunden ist. ([Firefox Bug 2029965](https://bugzil.la/2029965)).

- **Puffer-Grenzbedingungen in regulären Ausdrücken**: (Nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39 RegExp Puffer-Grenzbedingungen Vorschlag](https://github.com/tc39/proposal-regexp-buffer-boundaries) fügt die [`\A`, `\z` und `\Z` Aussagen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) zu regulären Ausdrücken hinzu. Diese passen zum Start oder Ende der gesamten Eingabe unabhängig davon, ob das {{jsxref("RegExp/multiline", "m")}} Flag gesetzt ist. ([Firefox Bug 2047706](https://bugzil.la/2047706)).

- **`border-area` Wert für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area) Wert der {{cssxref("background-clip")}} CSS-Eigenschaft schneidet den Hintergrund auf den Bereich zu, der von der Grenze des Elements gemalt wird, was es möglich macht, einen Verlauf oder ein Bild als Grenze zu verwenden. ([Firefox Bug 2045230](https://bugzil.la/2045230)).

- **`view-timeline` schließt `view-timeline-inset` ein**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("view-timeline")}} Kurzformeigenschaft unterstützt jetzt die {{cssxref("view-timeline-inset")}} Eigenschaft. Die Kurzform ermöglicht es Ihnen, Start- und/oder End-Randwerte (oder Außensetzwerte) anzugeben, um die Position der Fortschrittszeitachse anzupassen. ([Firefox Bug 2046602](https://bugzil.la/2046602)).
