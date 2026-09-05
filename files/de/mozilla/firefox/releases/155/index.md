---
title: Firefox 155 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 155 (Stabil)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 1a1ae3db9b94004fef31e64cef0f27c6116356e2
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 wurde am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Emulationsschaltflächen für Medienfunktionen in der [Regeln-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sind nun in einem speziellen Emulationspanel gesammelt, das mit der `@`-Schaltfläche geöffnet wird.
  Das Panel unterstützt nun auch die Emulation der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Medienfunktion.
  ([Firefox-Bug 1692434](https://bugzil.la/1692434) und [Firefox-Bug 1477920](https://bugzil.la/1477920)).
- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet nun [JSON Lines](https://jsonlines.org/) (NDJSON) Dokumente, die als `application/jsonl`, `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` bereitgestellt werden, oder eine `.jsonl` Dateierweiterung haben.
  Jede Zeile wird separat in einen eigenen zusammenklappbaren Eintrag geparst, der mit der Zeilennummer, aus der er stammt, gekennzeichnet ist, und eine Zeile, die nicht geparst werden kann, wird inline gemeldet, ohne den Rest des Dokuments zu beeinträchtigen.
  ([Firefox-Bug 2055774](https://bugzil.la/2055774), [Firefox-Bug 2060972](https://bugzil.la/2060972) und [Firefox-Bug 2060529](https://bugzil.la/2060529)).
- Eine Tastenkombination zum Deaktivieren von Haltepunkten wurde im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) hinzugefügt.
  ([Firefox-Bug 1642578](https://bugzil.la/1642578)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("attr")}} CSS-Funktion kann nun in jeder CSS-Eigenschaft verwendet werden, nicht nur in {{cssxref("content")}}.
  Dies ermöglicht es Ihnen, Styling von HTML-Attributen zu steuern, wie zum Beispiel `width: attr(data-size px)`, ohne JavaScript zu verwenden.
  [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte (einschließlich Einheitskennungen wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [namensraumunterstützte Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden nun unterstützt.
  Sie können `attr()` jetzt auch in [Container-Style Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden.
  ([Firefox-Bug 2038940](https://bugzil.la/2038940)).
- Die {{cssxref("progress")}} CSS-Funktion wird jetzt unterstützt.
  Diese gibt eine {{cssxref("number")}} zurück, die anzeigt, wie weit ein Wert zwischen einem Start- und einem Endwert fortgeschritten ist.
  Das Ergebnis kann dann zur Berechnung anderer Werte verwendet werden, zum Beispiel `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox-Bug 2047345](https://bugzil.la/2047345)).
- Die {{cssxref("color_value/alpha", "alpha()")}} CSS-Funktion wird nun unterstützt.
  Sie können eine Farbe übergeben und die Farbe mit einem anderen Alpha-Wert (Transparenz) zurückerhalten, während andere Bestandteile der Farbe unverändert bleiben.
  Innerhalb der Funktion können Sie das `alpha`-Schlüsselwort verwenden, um auf den Alpha-Kanal der Originalfarbe zu verweisen, zum Beispiel `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox-Bug 2059738](https://bugzil.la/2059738) und [Firefox-Bug 2059988](https://bugzil.la/2059988)).
- Die {{cssxref("font-width")}} CSS-Eigenschaft wird nun unterstützt, zusammen mit dem {{cssxref("@font-face/font-width", "font-width")}} {{cssxref("@font-face")}} Deskriptor und der `CSSStyleDeclaration.fontWidth` Eigenschaft.
  Dies ist der neue Name für die {{cssxref("font-stretch")}} Eigenschaft, die weiterhin als Legacy-Alias funktioniert.
  Beachten Sie, dass die Berechnung der Stil-Aufzählung nun `font-width` statt `font-stretch` zurückgibt.
  ([Firefox-Bug 1911075](https://bugzil.la/1911075)).

### JavaScript

- Die {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} statischen Methoden werden nun unterstützt, wie im [TC39 await dictionary proposal](https://github.com/tc39/proposal-await-dictionary) definiert.
  Diese verhalten sich wie {{jsxref("Promise.all()")}} und {{jsxref("Promise.allSettled()")}}, nehmen jedoch ein Objekt von Versprechen statt eines Iterables. Sie erfüllen sich mit einem Objekt, das die gleichen Schlüssel hat, sodass Ergebnisse nach Name anstatt nach Position gelesen werden können.
  ([Firefox-Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), das aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) nicht geladen werden kann, wird nicht mehr als Fehler im Cache gespeichert, sodass das Importieren derselben Modulspezifikation erneut erfolgreich sein kann, sobald der Server sich erholt hat.
  Dies gilt für JavaScript-, [JSON](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json)-, [CSS](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css)- und [Text](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) Module, die entweder statisch oder mit [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Fenstern als auch in Workern.
  In diesem Zusammenhang löst [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) jetzt das [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis anstelle von [`error`](/de/docs/Web/API/HTMLElement/error_event) aus für Module, die bereits abgerufen wurden oder noch abgerufen werden, und ein Modulskript lädt nun auch dann, wenn ein früheres `modulepreload` derselben URL seine [Integritätsprüfung](/de/docs/Web/Security/Defenses/Subresource_Integrity) nicht bestanden hat.
  ([Firefox-Bug 2055211](https://bugzil.la/2055211) und [Firefox-Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet jetzt [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3) bei der Verbindungsherstellung, um IPv6- und IPv4-Adressen zu vergleichen, sodass die Verbindungseinrichtung nicht durch eine unerreichbare Adressfamilie verzögert wird.
  Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird.
  ([Firefox-Bug 2062892](https://bugzil.la/2062892)).
- {{Glossary("QUIC", "QUIC")}} Versionsverhandlung wird jetzt unterstützt, sodass {{Glossary("HTTP_3", "HTTP/3")}} Verbindungen QUIC Version 2 verhandeln können.
  ([Firefox-Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere [WebTransport API](/de/docs/Web/API/WebTransport_API) Funktionen werden jetzt unterstützt:
  - Send-Gruppen ermöglichen es Ihnen, Streams zu gruppieren, die Bandbreite teilen und Streams relativ zueinander innerhalb einer Gruppe priorisieren sollen.
    Sie können eine solche Gruppe mit [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen. Übergeben Sie dann die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) in der `sendGroup` Option von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream).
    ([Firefox-Bug 2007165](https://bugzil.la/2007165)).
  - Die `WebTransport.exportKeyingMaterial()` Methode leitet Schlüsselinformationen von der zugrunde liegenden TLS-Verbindung für ein gegebenes Label und Kontext ab, sodass beide Endpunkte dasselbe gemeinsame Geheimnis erhalten können.
    Dies ermöglicht beispielsweise einen handshakedetektor auf Anwendungsebene, um MITM-Angriffe zu erkennen, in Fällen, in denen eine Anwendung sich mit einem Peerserver verbindet, der nur ein selbstsigniertes Zertifikat besitzt.
    ([Firefox-Bug 2007200](https://bugzil.la/2007200)).
  - Die [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) Methode gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Stream zum Senden von Datagrammen zurück, mit [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) Eigenschaften, um es gegenüber anderen Sendern zu priorisieren.
    ([Firefox-Bug 2007174](https://bugzil.la/2007174)).
  - Der [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) Konstruktor akzeptiert eine [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) Option, die die Anwendungsprotokolle auflistet, die der Client unterstützt.
    Das vom Server ausgewählte Protokoll, falls vorhanden, wird in der [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) Eigenschaft zurückgegeben, sobald die Verbindung hergestellt ist und das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Protokoll erfüllt ist.
    ([Firefox-Bug 2007150](https://bugzil.la/2007150)).
  - Die [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) Eigenschaft zeigt an, wann der Server den Client gebeten hat, einen geordneten Sitzungsabschluss einzuleiten.
    ([Firefox-Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt jetzt das [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features) Feature auf dem Desktop, das in [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden kann.
  Dies ermöglicht es, `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) Eigenschaften von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zu spezifizieren. Die WGSL `dual_source_blending` Erweiterung wird ebenfalls unterstützt.
  ([Firefox-Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Das [`SVGAElement`](/de/docs/Web/API/SVGAElement) Interface implementiert nun das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) Mixin. Dadurch haben SVG {{SVGElement("a")}} Elemente die gleichen URL-Komponenteneigenschaften wie HTML {{HTMLElement("a")}} Elemente: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte [`origin`](/de/docs/Web/API/SVGAElement/origin) Eigenschaft wird ebenfalls bereitgestellt.
  ([Firefox-Bug 2058578](https://bugzil.la/2058578)).
- Die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) Schnittstellen unterstützen nun indexierte Setter. Das bedeutet, dass Sie ein Element in der Liste mit Hilfe der eckigen Klammernnotation ersetzen können, wie `transformList[0] = newTransform`, statt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Die [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) Schnittstelle unterstützt bereits indexierte Setter.
  ([Firefox-Bug 2059426](https://bugzil.la/2059426)).
- Die [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) Methode respektiert nun ihr [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options) Argument, mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`.
  Dies ermöglicht es Ihnen, ein Begrenzungsrechteck zu erhalten, das die angewendeten Füllung, Striche und Clip berücksichtigt, statt nur den Füllgeometrie.
  ([Firefox-Bug 2060873](https://bugzil.la/2060873)).
- Elemente, die nicht gerendert werden, wie sie in {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}} und {{svgelement("defs")}}, geben nun ein leeres Rechteck von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) und eine leere Liste von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurück, statt ein Rechteck zu melden, das nie gezeichnet wurde.
  ([Firefox-Bug 2061646](https://bugzil.la/2061646)).

#### Medien, WebRTC und Web Audio

- Das [`error`](/de/docs/Web/API/RTCDataChannel/error_event) Ereignis, das auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail) Eigenschaft melden, falls der Transport aufgrund eines Fehlers geschlossen wird.
  Darüber hinaus sind [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Workern verfügbar (diese Exposition ist noch nicht in der Spezifikation).
  ([Firefox-Bug 1814460](https://bugzil.la/1814460)).
- Die [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) Eigenschaft gibt jetzt auf ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) in den Zeiten zurück, die von der Spezifikation erforderlich sind, einschließlich im `have-remote-offer`-Signalisierungsstatus, wo es zuvor `null` war.
  Der Transport erreicht auch jetzt die `connected` und `closed` Zustände, und seine [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) Eigenschaften werden korrekt gefüllt.
  ([Firefox-Bug 2019361](https://bugzil.la/2019361) und [Firefox-Bug 2056412](https://bugzil.la/2056412)).
- Zwei-Byte-RTP-Header-Erweiterungen werden jetzt unterstützt, sodass Header-Erweiterungen mit einer ID von 15 oder mehr verhandelt werden können, statt einen `OperationError` zu verursachen.
  ([Firefox-Bug 2014357](https://bugzil.la/2014357)).
- Die [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) Eigenschaft wird jetzt in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet.
  ([Firefox-Bug 2055911](https://bugzil.la/2055911)).
- Die `transport`-Statistiken, die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben werden, sind nun korrekt vor der Verhandlung, also nach [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), aber bevor eine entfernte Beschreibung festgelegt wurde.
  Die [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) Eigenschaft wird jetzt als `unknown` berichtet, bis das DTLS-Handshake eine Rolle auswählt, wobei sie zuvor überhaupt nicht gemeldet wurde ([Firefox-Bug 2053296](https://bugzil.la/2053296)), und die [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) Eigenschaft beginnt jetzt als `new` statt `checking`, was fälschlicherweise angezeigt hat, dass die Konnektivitätsprüfungen bereits im Gange waren ([Firefox-Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die [kompakte Importsektion](https://github.com/WebAssembly/compact-import-section) binäre Format-Erweiterung wird jetzt unterstützt, die die Größe von Modulen reduziert, die viele [`import`](/de/docs/WebAssembly/Reference/Definitions/import) Anweisungen haben.
  ([Firefox-Bug 2062344](https://bugzil.la/2062344)).
- Der [Weite Arithmetik](https://github.com/WebAssembly/wide-arithmetic) Vorschlag wird jetzt unterstützt, mit den Instruktionen [`i64.add128`](/de/docs/WebAssembly/Reference/Numeric/add128), [`i64.sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128), [`i64.mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s) und [`i64.mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u).
  Diese produzieren 128-Bit-Ergebnisse aus 64-Bit-Operanden, die zuvor in Code kompiliert werden mussten, der in WebAssembly emuliert wurde, wie bignum und Kryptografiebibliotheken.
  ([Firefox-Bug 2062374](https://bugzil.la/2062374)).

### WebDriver-Komformität (WebDriver BiDi, Marionette)

#### Allgemein

- Deaktivierte das Download-Panel, um zu verhindern, dass das aktuelle Dokument den Fokus verliert, wenn ein Download beginnt. ([Firefox-Bug 2035439](https://bugzil.la/2035439)).
- Korrigierte die Actions API, sodass das `dblclick` Ereignis ausgelöst wird, wenn ein Doppelklick bei gedrückter `Ctrl`-Taste auf Nicht-macOS-Plattformen ausgeführt wird. ([Firefox-Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Aktualisierte das Mozilla-spezifische `moz:debugging` Modul, das nicht mehr von der selben geschachtelten Eventschleife-API wie die Entwicklertools abhängt, was Konflikte verhindert, wenn WebDriver BiDi und Entwicklertools parallel verwendet werden. ([Firefox-Bug 2041335](https://bugzil.la/2041335)).
- Behob das Problem, dass der Befehl `browsingContext.reload` fehlschlug, wenn er für Frames verwendet wurde. ([Firefox-Bug 2030909](https://bugzil.la/2030909)).
- Unterstützung für das `contexts` Argument im `session.unsubscribe` Befehl entfernt. Ab sofort können Clients nur noch durch Ereignisname oder Abonnement-ID abmelden. ([Firefox-Bug 1988723](https://bugzil.la/1988723)).

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 155 enthalten, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scrollgesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  [Scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) ermöglichen es, dass eine Animation mit der Scroll-Position eines Scrollers oder mit der Position eines Elements innerhalb seines Scrollers fortschreitet, anstatt mit der Zeit.
  Diese Einstellung umfasst die {{cssxref("scroll-timeline")}} und {{cssxref("view-timeline")}} Eigenschaften und ihre Langformen, einschließlich der {{cssxref("view-timeline-inset")}} Eigenschaft, sowie die {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view", "view()")}} funktionalen Notationen.
  In dieser Version wurde die Langform `view-timeline-inset` zur Kurzform `view-timeline` hinzugefügt. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) stellt CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereit, was die Manipulation von CSS aus Skripten vereinfacht. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()` Unterstützungsabfragen**: `layout.css.supports.at-rule.enabled`

  Die [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) Funktion in der {{cssxref("@supports")}} Regel ermöglicht es Ihnen zu testen, ob der Browser eine gegebene CSS-Regel unterstützt, zum Beispiel `@supports at-rule(@scope)`. ([Firefox-Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Website, zu deklarieren, wie ihr Audio sich im Vergleich zu anderem Audio auf dem Gerät verhalten soll, beispielsweise ob es mitmischen, reduzieren oder anderes Audio unterbrechen soll. ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

- **CSS-Grundformen erlauben `farthest-corner` und `closest-corner` Schlüsselwörter**: `layout.css.ellipse-corners.enabled`

  Die `farthest-corner` und `closest-corner` Schlüsselwörter können für die Angabe von Radienwerten der {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} CSS Grundformen verwendet werden. ([Firefox-Bug 2037673](https://bugzil.la/2037673)).

- **Inhalt mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert ohne das `-webkit-` Vendor-Präfix und unterstützt jetzt auch das `no-ellipsis` Schlüsselwort und `<string>` Werte zur Auswahl dessen, was angezeigt wird, wo der Text abgeschnitten wird. ([Firefox-Bug 2042999](https://bugzil.la/2042999) und [Firefox-Bug 2043000](https://bugzil.la/2043000)).

- **Gescopte benutzerdefinierte Elementregister**: `dom.scoped-custom-element-registries.enabled`

  Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann erstellt und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden, sodass ein Shadow-Root benutzerdefinierte Elemente definieren kann, die nicht mit den im globalen Register definierten kollidieren.
  ([Firefox-Bug 2018900](https://bugzil.la/2018900)).
  Diese Version fügt auch das globale `customelementregistry` Attribut hinzu, um das Register auszuwählen, mit dem ein Element aus dem Markup verbunden ist. ([Firefox-Bug 2029965](https://bugzil.la/2029965)).

- **Puffergrenzen-Assertions in regulären Ausdrücken**: (Nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39 RegExp Buffer Boundaries Vorschlag](https://github.com/tc39/proposal-regexp-buffer-boundaries) fügt die [`\A`, `\z` und `\Z` Assertionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) zu regulären Ausdrücken hinzu. Diese passen zum Anfang oder Ende der gesamten Eingabe, unabhängig davon, ob das {{jsxref("RegExp/multiline", "m")}}-Flag gesetzt ist. ([Firefox-Bug 2047706](https://bugzil.la/2047706)).

- **`border-area` Wert für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area) Wert der {{cssxref("background-clip")}} CSS-Eigenschaft schneidet den Hintergrund auf den Bereich, der vom Rahmen eines Elements gemalt wird, was es ermöglicht, ein Gradient oder Bild als Rahmen zu verwenden. ([Firefox-Bug 2045230](https://bugzil.la/2045230)).

- **`view-timeline` beinhaltet `view-timeline-inset`**: `layout.css.scroll-driven-animations.enabled`

  Die {{cssxref("view-timeline")}} Kurzform-Eigenschaft unterstützt jetzt die {{cssxref("view-timeline-inset")}} Eigenschaft. Die Kurzform ermöglicht es Ihnen, Start- und/oder End-Inset (oder Outset)-Werte anzugeben, um die Position der Fortschrittsanzeige anzupassen. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).
