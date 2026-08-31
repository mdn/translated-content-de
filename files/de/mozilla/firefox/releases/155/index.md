---
title: Firefox 155 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 155 (Stabil)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: d38616f73d7bfbd6c6f698390657da14a92bbb2f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 wurde am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Werkzeuge

- Die Medienfeature-Emulations-Buttons in der [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sind jetzt in einem eigenen Emulationspanel gesammelt, das mit dem `@`-Button geöffnet wird.
  Das Panel fügt auch die Emulation des {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Medienfeatures hinzu.
  ([Firefox Bug 1692434](https://bugzil.la/1692434) und [Firefox Bug 1477920](https://bugzil.la/1477920)).
- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet nun [JSON Lines](https://jsonlines.org/) (NDJSON)-Dokumente, die als `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` bereitgestellt werden oder die Dateiendung `.jsonl` haben.
  Jede Zeile wird separat in ihren eigenen zusammenklappbaren Eintrag analysiert, der mit der Zeilennummer versehen ist, aus der sie stammt, und eine Zeile, die nicht analysiert werden kann, wird inline gemeldet, ohne den Rest des Dokuments zu beeinflussen.
  ([Firefox Bug 2055774](https://bugzil.la/2055774), [Firefox Bug 2060972](https://bugzil.la/2060972) und [Firefox Bug 2060529](https://bugzil.la/2060529)).
- Eine Tastenkombination zum Deaktivieren von Breakpoints im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde hinzugefügt.
  ([Firefox Bug 1642578](https://bugzil.la/1642578)).

### HTML

Keine nennenswerten Änderungen.

### CSS

- Die {{cssxref("attr")}} CSS-Funktion kann jetzt in jeder CSS-Eigenschaft verwendet werden, anstatt nur in {{cssxref("content")}}.
  Dies ermöglicht es, das Styling von HTML-Attributen wie `width: attr(data-size px)` zu steuern, ohne JavaScript zu verwenden.
  [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte (einschließlich Einheitenkennungen wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [namensbasierte Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden jetzt unterstützt.
  Sie können nun auch `attr()` in [Container-Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden.
  ([Firefox Bug 2038940](https://bugzil.la/2038940)).
- Die {{cssxref("progress")}} CSS-Funktion wird jetzt unterstützt.
  Diese gibt eine {{cssxref("number")}} zurück, die anzeigt, wie weit ein Wert zwischen einem Anfangs- und einem Endwert fortgeschritten ist.
  Das Ergebnis kann dann verwendet werden, um andere Werte zu berechnen, zum Beispiel `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox Bug 2047345](https://bugzil.la/2047345)).
- Die {{cssxref("color_value/alpha", "alpha()")}} CSS-Funktion wird jetzt unterstützt.
  Sie ermöglicht es, eine Farbe zu übergeben und die Farbe mit einem anderen Alpha- (Transparenz-) Wert zurückzubekommen, wobei andere Bestandteile der Farbe unverändert bleiben.
  Innerhalb der Funktion können Sie das `alpha` Schlüsselwort verwenden, um den Alphakanal der Originalfarbe zu referenzieren, zum Beispiel `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox Bug 2059738](https://bugzil.la/2059738) und [Firefox Bug 2059988](https://bugzil.la/2059988)).
- Die {{cssxref("font-width")}} CSS-Eigenschaft wird jetzt unterstützt, zusammen mit dem {{cssxref("@font-face/font-width", "font-width")}} {{cssxref("@font-face")}} Deskriptor und der `CSSStyleDeclaration.fontWidth` Eigenschaft.
  Dies ist der neue Name für die {{cssxref("font-stretch")}} Eigenschaft, die weiterhin als veralteter Alias funktioniert.
  Beachten Sie, dass die Enumeration des berechneten Stils jetzt `font-width` statt `font-stretch` zurückgibt.
  ([Firefox Bug 1911075](https://bugzil.la/1911075)).

### JavaScript

- Die statischen Methoden {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} werden jetzt unterstützt, wie in dem [TC39 await dictionary proposal](https://github.com/tc39/proposal-await-dictionary) definiert.
  Diese verhalten sich wie {{jsxref("Promise.all()")}} und {{jsxref("Promise.allSettled()")}}, mit dem Unterschied, dass sie ein Objekt von Versprechen anstelle eines Iterables annehmen. Sie werden mit einem Objekt erfüllt, das dieselben Schlüssel hat, sodass Ergebnisse nach Namen und nicht nach Position gelesen werden können.
  ([Firefox Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), das aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) nicht geladen werden kann, wird nicht mehr als Fehlschlag zwischengespeichert, sodass das erneute Importieren desselben Modulspezifikators erfolgreich sein kann, sobald der Server sich erholt.
  Dies gilt für JavaScript-, [JSON](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json)-, [CSS](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css)- und [Text](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text)-Module, die entweder statisch oder mit [dynaimischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Fenstern als auch in Workern.
  In diesem Zusammenhang löst [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) nun das [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis aus, anstatt [`error`](/de/docs/Web/API/HTMLElement/error_event) für Module, die bereits abgerufen werden oder noch abgerufen werden, und ein Modulskript wird jetzt geladen, auch wenn ein vorheriges `modulepreload` der gleichen URL seine [Integritätsprüfung](/de/docs/Web/Security/Defenses/Subresource_Integrity) nicht bestanden hat.
  ([Firefox Bug 2055211](https://bugzil.la/2055211) und [Firefox Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet jetzt [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3) beim Herstellen von Verbindungen, indem IPv6 und IPv4 Adressen parallel abgefragt werden, sodass der Verbindungsaufbau nicht durch eine unerreichbare Adressfamilie verzögert wird.
  Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird.
  ([Firefox Bug 2062892](https://bugzil.la/2062892)).
- {{Glossary("QUIC", "QUIC")}}-Versionsverhandlungen werden jetzt unterstützt, sodass {{Glossary("HTTP_3", "HTTP/3")}}-Verbindungen QUIC Version 2 verhandeln können.
  ([Firefox Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere [WebTransport API](/de/docs/Web/API/WebTransport_API)-Funktionen werden jetzt unterstützt:
  - Send-Gruppen ermöglichen es Ihnen, Streams zu gruppieren, die sich die Bandbreite teilen und Streams innerhalb einer Gruppe zueinander relativ priorisieren sollten.
    Sie können eine mit [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen. Dann geben Sie die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) in der `sendGroup`-Option von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) an.
    ([Firefox Bug 2007165](https://bugzil.la/2007165)).
  - Die `WebTransport.exportKeyingMaterial()`-Methode leitet Schlüsselmateriel aus der zugrunde liegenden TLS-Verbindung für ein gegebenes Label und Kontext ab, sodass beide Endpunkte dasselbe gemeinsame Geheimnis erhalten können.
    Dies ermöglicht beispielsweise einen anwendungsseitigen Handshake, um MITM-Angriffe zu erkennen, wenn eine Anwendung eine Verbindung zu einem Peer herstellt, der nur ein selbstsigniertes Zertifikat hat.
    ([Firefox Bug 2007200](https://bugzil.la/2007200)).
  - Die [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)-Methode gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Stream zum Senden von Datagrammen zurück, mit den Eigenschaften [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) für die Priorisierung gegenüber anderen Sendern.
    ([Firefox Bug 2007174](https://bugzil.la/2007174)).
  - Der [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor akzeptiert eine [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols)-Option, die die Anwendungsprotokolle auflistet, die der Client unterstützt.
    Das vom Server ausgewählte Protokoll, falls vorhanden, wird in der [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol)-Eigenschaft zurückgegeben, wenn die Verbindung hergestellt ist, und das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Protokoll wird erfüllt.
    ([Firefox Bug 2007150](https://bugzil.la/2007150)).
  - Die [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining)-Eigenschaft zeigt an, wann der Server den Client gebeten hat, mit einem sanften Herunterfahren der Sitzung zu beginnen.
    ([Firefox Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt jetzt das [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features)-Feature auf Desktops, das in [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden kann.
  Dies ermöglicht es, `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den Eigenschaften [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) anzugeben. Die WGSL `dual_source_blending` Erweiterung wird ebenfalls unterstützt.
  ([Firefox Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Das [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interface implementiert jetzt das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils)-Mixin. Infolgedessen zeigen SVG {{SVGElement("a")}}-Elemente dieselben URL-Komponenteneigenschaften wie HTML {{HTMLElement("a")}}-Elemente: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte [`origin`](/de/docs/Web/API/SVGAElement/origin)-Eigenschaft wird ebenfalls angezeigt.
  ([Firefox Bug 2058578](https://bugzil.la/2058578)).
- Die Interfaces [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) unterstützen jetzt indizierte Setter. Das bedeutet, dass Sie ein Element in der Liste mit Notation in eckigen Klammern, wie `transformList[0] = newTransform`, ersetzen können, anstatt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Das [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interface unterstützt bereits indizierte Setter.
  ([Firefox Bug 2059426](https://bugzil.la/2059426)).
- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt jetzt ihr [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options)-Argument, mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`.
  Dadurch können Sie eine Begrenzungsbox erhalten, die den Strich, die Markierungen und das auf ein Element angewendete Clipping berücksichtigt, anstatt nur die Füllgeometrie.
  ([Firefox Bug 2060873](https://bugzil.la/2060873)).
- Elemente, die nicht gerendert werden, wie die innerhalb von {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}} und {{svgelement("defs")}}, geben jetzt ein leeres Rechteck von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) und eine leere Liste von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurück, anstatt einen Bereich zu melden, der nie gezeichnet wurde.
  ([Firefox Bug 2061646](https://bugzil.la/2061646)).

#### Medien, WebRTC und Web Audio

- Das [`error`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis, das auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft melden, wenn der Transport aufgrund eines Fehlers geschlossen wird.
  Darüber hinaus stehen [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Workern zur Verfügung (diese Bereitstellung ist noch nicht in der Spezifikation).
  ([Firefox Bug 1814460](https://bugzil.la/1814460)).
- Die [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)-Eigenschaft gibt jetzt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zu den in der Spezifikation festgelegten Zeiten zurück, einschließlich im `have-remote-offer`-Signalisierungszustand, wo es bisher `null` war.
  Der Transport erreicht nun auch die `connected`- und `closed`-Zustände, und seine Eigenschaften [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) werden korrekt befüllt.
  ([Firefox Bug 2019361](https://bugzil.la/2019361) und [Firefox Bug 2056412](https://bugzil.la/2056412)).
- Zwei-Byte RTP-Header-Erweiterungen werden jetzt unterstützt, sodass Header-Erweiterungen mit einer ID von 15 oder höher verhandelt werden können, anstatt einen `OperationError` auszulösen.
  ([Firefox Bug 2014357](https://bugzil.la/2014357)).
- Die [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges)-Eigenschaft wird jetzt in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet.
  ([Firefox Bug 2055911](https://bugzil.la/2055911)).
- Die `transport`-Statistiken, die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben werden, sind jetzt vor der Verhandlung korrekt, das heißt, nach [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), aber bevor eine Remote-Beschreibung festgelegt wurde.
  Die [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole)-Eigenschaft wird jetzt als `unknown` gemeldet, bis der DTLS-Handshake eine Rolle auswählt, wo sie zuvor überhaupt nicht gemeldet wurde ([Firefox Bug 2053296](https://bugzil.la/2053296)), und die [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState)-Eigenschaft beginnt nun als `new` anstelle `checking`, was fälschlicherweise angab, dass die Konnektivitätsprüfungen bereits im Gange waren ([Firefox Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die [kompakte Import-Sektion](https://github.com/WebAssembly/compact-import-section)-Binary-Format-Erweiterung wird jetzt unterstützt, was die Größe von Modulen reduziert, die viele Importe haben.
  ([Firefox Bug 2062344](https://bugzil.la/2062344)).
- Der [Wide Arithmetic](https://github.com/WebAssembly/wide-arithmetic)-Vorschlag wird jetzt unterstützt, der die `i64.add128`, `i64.sub128`, `i64.mul_wide_s` und `i64.mul_wide_u`-Instruktionen hinzufügt.
  Diese erzeugen 128-Bit-Ergebnisse aus 64-Bit-Operandien, die zuvor in Code kompiliert werden mussten, der in WebAssembly verwendet wird, wie zum Beispiel Bignum- und Kryptographiebibliotheken.
  ([Firefox Bug 2062374](https://bugzil.la/2062374)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Download-Panel wurde deaktiviert, um zu verhindern, dass das aktuelle Dokument den Fokus verliert, wenn ein Download beginnt. ([Firefox Bug 2035439](https://bugzil.la/2035439)).
- Die Actions API wurde korrigiert, sodass das `dblclick`-Ereignis ausgelöst wird, wenn ein Doppelklick bei gedrückter `Strg`-Taste auf Nicht-macOS-Plattformen durchgeführt wird. ([Firefox Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozila-spezifische `moz:debugging`-Modul wurde aktualisiert, sodass es nicht mehr auf die gleiche verschachtelte Ereignisschleifen-API wie DevTools angewiesen ist, was Konflikte verhindert, wenn WebDriver BiDi und DevTools parallel verwendet werden. ([Firefox Bug 2041335](https://bugzil.la/2041335)).
- Der `browsingContext.reload`-Befehl wurde korrigiert, da er beim Gebrauch für Frames fehlschlug. ([Firefox Bug 2030909](https://bugzil.la/2030909)).
- Unterstützung für das `contexts`-Argument im `session.unsubscribe`-Befehl wurde entfernt. Fortan können Clients nur noch nach Ereignisnamen oder Abonnement-ID abbestellen. ([Firefox Bug 1988723](https://bugzil.la/1988723)).

## Änderungen für Add-on-Entwickler

## Experimentelle Webfeatures

Diese Features sind in Firefox 155 vorhanden, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scroll-gesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) lassen eine Animation mit der Scroll-Position eines Scrollers oder mit der Position eines Elements innerhalb seines Scrollers fortschreiten, anstatt mit der Zeit.
  Diese Einstellung umfasst die {{cssxref("scroll-timeline")}}- und {{cssxref("view-timeline")}}-Eigenschaften und deren Langformen, einschließlich der {{cssxref("view-timeline-inset")}}-Eigenschaft, zusammen mit den {{cssxref("animation-timeline/scroll", "scroll()")}}- und {{cssxref("animation-timeline/view", "view()")}} funktionalen Notationen.
  In dieser Version wurde die `view-timeline-inset` Langform zur `view-timeline` Kurzform hinzugefügt. ([Firefox Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) gibt CSS-Werte als typisierte JavaScript-Objekte anstelle von Strings aus, was die Manipulation von CSS aus Skripten vereinfacht. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()` Support-Abfragen**: `layout.css.supports.at-rule.enabled`

  Die [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule)-Funktion in der {{cssxref("@supports")}} At-Regel ermöglicht es Ihnen, zu testen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, zum Beispiel `@supports at-rule(@scope)`. ([Firefox Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) lässt eine Site deklarieren, wie ihr Audio sich relativ zu anderem auf dem Gerät abgespieltem Audio verhalten sollte, zum Beispiel ob es mitmischen, reduzieren oder unterbrechen sollte. ([Firefox Bug 2055710](https://bugzil.la/2055710)).

- **CSS-Basisshapes erlauben `farthest-corner` und `closest-corner` Schlüsselwörter**: `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können verwendet werden, um die Radienwerte der {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} CSS-Basisshapes zu spezifizieren. ([Firefox Bug 2037673](https://bugzil.la/2037673)).

- **Inhalte mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert ohne das `-webkit-` Vendor-Präfix und unterstützt jetzt auch das `no-ellipsis` Schlüsselwort und `<string>` Werte, um auszuwählen, was angezeigt wird, wo der Text abgeschnitten wird. ([Firefox Bug 2042999](https://bugzil.la/2042999) und [Firefox Bug 2043000](https://bugzil.la/2043000)).

- **Gescopte benutzerdefinierte Elementregister**: `dom.scoped-custom-element-registries.enabled`

  Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann erstellt und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden, sodass eine Shadow-Root benutzerdefinierte Elemente definieren kann, die nicht mit denen im globalen Register kollidieren. ([Firefox Bug 2018900](https://bugzil.la/2018900)).
  Diese Version fügt das `customelementregistry`- globale Attribut hinzu, um das Register auszuwählen, mit dem ein Element aus der Markierung verknüpft ist. ([Firefox Bug 2029965](https://bugzil.la/2029965)).

- **Puffergrenzenassertionen in regulären Ausdrücken**: (Nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39 RegExp Puffergrenzen-Vorschlag](https://github.com/tc39/proposal-regexp-buffer-boundaries) fügt die [`\A`, `\z` und `\Z`-Assertionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) zu regulären Ausdrücken hinzu. Diese passen den gesamten Eingabestart oder -ende unabhängig davon an, ob das {{jsxref("RegExp/multiline", "m")}}-Flag gesetzt ist. ([Firefox Bug 2047706](https://bugzil.la/2047706)).

- **`border-area` Wert für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area)-Wert der {{cssxref("background-clip")}} CSS-Eigenschaft schneidet den Hintergrund auf den Bereich zu, der vom Rahmen des Elements gemalt wird, was es ermöglicht, einen Farbverlauf oder ein Bild als Rahmen zu verwenden. ([Firefox Bug 2045230](https://bugzil.la/2045230)).
