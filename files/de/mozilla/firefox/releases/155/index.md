---
title: Firefox 155 Versionshinweise für Entwickler (Stabil)
short-title: Firefox 155 (Stabil)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 964ebb6f0fd25a84d5158a69b72e1d7610151214
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 155, die Entwickler betreffen. Firefox 155 wurde am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Medieneigenschaften-Emulations-Schaltflächen in der [Regeln Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sind jetzt in einem speziellen Emulations-Panel gesammelt, das über die `@`-Schaltfläche geöffnet wird. Das Panel fügt auch die Emulation der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Medienfunktion hinzu. ([Firefox Bug 1692434](https://bugzil.la/1692434) und [Firefox Bug 1477920](https://bugzil.la/1477920)).
- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet jetzt [JSON Lines](https://jsonlines.org/) (NDJSON) Dokumente, die als `application/jsonl`, `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` serviert werden, oder die eine `.jsonl` Dateierweiterung haben. Jede Zeile wird separat in ihren eigenen einklappbaren Eintrag geparst, der mit der Zeilennummer beschriftet ist, aus der er stammt, und eine Zeile, die nicht geparst werden kann, wird inline gemeldet, ohne den Rest des Dokuments zu beeinflussen. ([Firefox Bug 2055774](https://bugzil.la/2055774), [Firefox Bug 2060972](https://bugzil.la/2060972) und [Firefox Bug 2060529](https://bugzil.la/2060529)).
- Ein Tastaturkürzel zum Deaktivieren von Haltepunkten im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde hinzugefügt. ([Firefox Bug 1642578](https://bugzil.la/1642578)).

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("attr")}} CSS-Funktion kann jetzt in jeder CSS-Eigenschaft verwendet werden, anstatt nur in {{cssxref("content")}}. Dies ermöglicht es, das Styling von HTML-Attributen abzuleiten, wie z.B. `width: attr(data-size px)`, ohne JavaScript zu verwenden. [`<attr-typ>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)-Werte (einschließlich Einheit-Identifikatoren wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [namensraumbezogene Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden jetzt unterstützt. Sie können jetzt auch `attr()` innerhalb von [container style queries](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden. ([Firefox Bug 2038940](https://bugzil.la/2038940)).
- Die {{cssxref("progress")}} CSS-Funktion wird jetzt unterstützt. Diese gibt eine {{cssxref("number")}} zurück, die angibt, wie weit ein Wert zwischen einem Start- und einem Endwert fortgeschritten ist. Das Ergebnis kann dann verwendet werden, um andere Werte zu berechnen, z.B. `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`. ([Firefox Bug 2047345](https://bugzil.la/2047345)).
- Die {{cssxref("color_value/alpha", "alpha()")}} CSS-Funktion wird jetzt unterstützt. Sie ermöglicht es Ihnen, eine Farbe zu übergeben und die Farbe mit einem anderen Alphawert (Transparenz) zurückzubekommen, wobei andere Komponenten der Farbe unverändert bleiben. Innerhalb der Funktion können Sie das `alpha`-Schlüsselwort verwenden, um auf den Alphakanal der Originalfarbe zu verweisen, z.B. `alpha(from var(--brand) / calc(alpha * 0.5))`. ([Firefox Bug 2059738](https://bugzil.la/2059738) und [Firefox Bug 2059988](https://bugzil.la/2059988)).
- Die {{cssxref("font-width")}} CSS-Eigenschaft wird jetzt unterstützt, zusammen mit dem {{cssxref("@font-face/font-width", "font-width")}} {{cssxref("@font-face")}} Deskriptor und der `CSSStyleDeclaration.fontWidth` Eigenschaft. Dies ist der neue Name für die {{cssxref("font-stretch")}}-Eigenschaft, die weiterhin als Legacy-Alias funktioniert. Beachten Sie, dass die Aufzählung der computierten Stile jetzt `font-width` anstelle von `font-stretch` zurückgibt. ([Firefox Bug 1911075](https://bugzil.la/1911075)).

### JavaScript

- Die {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} statischen Methoden werden jetzt unterstützt, wie sie im [TC39 await dictionary proposal](https://github.com/tc39/proposal-await-dictionary) definiert sind. Diese verhalten sich wie {{jsxref("Promise.all()")}} und {{jsxref("Promise.allSettled()")}}, nehmen jedoch ein Objekt von Promises anstelle eines iterierbaren Objekts. Sie erfüllen sich mit einem Objekt, das die gleichen Schlüssel hat, sodass Ergebnisse nach Namen statt nach Position gelesen werden können. ([Firefox Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), das aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) nicht geladen werden kann, wird nicht mehr als Fehler zwischengespeichert, sodass der erneute Import des gleichen Moduls erfolgreich sein kann, sobald der Server sich erholt hat. Dies gilt für JavaScript-, [JSON](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json)-, [CSS](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css)- und [Text](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) Module, die entweder statisch oder mit [dynamic import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Fenstern als auch in Workern. In diesem Zusammenhang löst [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) nun das [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis anstelle des [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignisses aus für Module, die bereits geladen werden oder noch geladen werden, und ein Modul-Skript wird nun geladen, selbst wenn eine vorherige `modulepreload` des gleichen URL seine [Integritätsprüfung](/de/docs/Web/Security/Defenses/Subresource_Integrity) nicht bestanden hat. ([Firefox Bug 2055211](https://bugzil.la/2055211) und [Firefox Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet nun [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3) bei der Herstellung von Verbindungen, indem IPv6- und IPv4-Adressen parallel ausprobiert werden, sodass der Verbindungsaufbau nicht durch eine nicht erreichbare Adressfamilie verzögert wird. Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird. ([Firefox Bug 2062892](https://bugzil.la/2062892)).
- Die {{Glossary("QUIC", "QUIC")}} Version Aushandlung wird nun unterstützt, wodurch {{Glossary("HTTP_3", "HTTP/3")}} Verbindungen die QUIC Version 2 verhandeln können. ([Firefox Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere [WebTransport API](/de/docs/Web/API/WebTransport_API)-Funktionen werden jetzt unterstützt:
  - Send-Gruppen ermöglichen das Gruppieren von Streams, die Bandbreite teilen sollten, und das Priorisieren von Streams relativ zueinander innerhalb einer Gruppe. Sie können eine mit [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen. Übergeben Sie dann die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) in der `sendGroup`-Option von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream). ([Firefox Bug 2007165](https://bugzil.la/2007165)).
  - Die `WebTransport.exportKeyingMaterial()` Methode leitet Schlüsselinformationen aus der zugrundeliegenden TLS-Verbindung für ein gegebenes Label und einen Kontext ab, sodass beide Endpunkte das gleiche geteilte Geheimnis erhalten können. Dies erlaubt z.B. einen anwendungsseitigen Handshake zum Erkennen von MITM-Angriffen in Fällen, in denen eine Anwendung eine Verbindung zu einem Peer herstellt, der lediglich ein selbstsigniertes Zertifikat besitzt. ([Firefox Bug 2007200](https://bugzil.la/2007200)).
  - Die Methode [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Stream zurück, mit dem Datagramme gesendet werden können, zusammen mit den Eigenschaften [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) zum Priorisieren im Vergleich zu anderen Sendern. ([Firefox Bug 2007174](https://bugzil.la/2007174)).
  - Der [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) Konstruktor akzeptiert jetzt eine [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols)-Option, die die Anwendungsprotokolle auflistet, die der Client unterstützt. Das vom Server ausgewählte Protokoll, falls vorhanden, wird in der [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) Eigenschaft zurückgegeben, wenn die Verbindung hergestellt ist und das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Protokoll erfüllt wird. ([Firefox Bug 2007150](https://bugzil.la/2007150)).
  - Die [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) Eigenschaft gibt an, wann der Server den Client aufgefordert hat, eine geordnete Abschaltung der Sitzung zu starten. ([Firefox Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt nun das [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features)-Feature auf dem Desktop, welches im [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden kann. Dies erlaubt es, `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den Eigenschaften [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zu spezifizieren. Die WGSL `dual_source_blending`-Erweiterung wird ebenfalls unterstützt. ([Firefox Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Das [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interface implementiert jetzt das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils)-Mixin. Dadurch exponieren SVG {{SVGElement("a")}} Elemente die gleichen URL-Komponenteigenschaften wie HTML {{HTMLElement("a")}} Elemente: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte [`origin`](/de/docs/Web/API/SVGAElement/origin)-Eigenschaft wird ebenfalls exponiert. ([Firefox Bug 2058578](https://bugzil.la/2058578)).
- Die Interfaces [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) unterstützen jetzt indexierte Setzer. Dies bedeutet, dass Sie einen Eintrag in der Liste mit der Klammernotation ersetzen können, z.B. `transformList[0] = newTransform`, anstatt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen. Das [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interface unterstützt bereits indexierte Setzer. ([Firefox Bug 2059426](https://bugzil.la/2059426)).
- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt jetzt ihr [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options)-Argument mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`. Dies ermöglicht es Ihnen, eine Begrenzungsbox zu erhalten, die den angewendeten Stroke, die Marker und das Clipping an einem Element berücksichtigt, anstatt nur die Füllgeometrie. ([Firefox Bug 2060873](https://bugzil.la/2060873)).
- Elemente, die nicht gerendert werden, wie diejenigen innerhalb von {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}} und {{svgelement("defs")}}, geben jetzt ein leeres Rechteck von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) und eine leere Liste von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurück, anstatt eine Box zu melden, die nie dargestellt wurde. ([Firefox Bug 2061646](https://bugzil.la/2061646)).

#### Medien, WebRTC und Web Audio

- Das [`error`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis, das auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft berichten, wenn der Transport aufgrund eines Fehlers geschlossen wird. Darüber hinaus sind [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Workern verfügbar (diese Exposition ist noch nicht in der Spezifikation). ([Firefox Bug 1814460](https://bugzil.la/1814460)).
- Die Eigenschaft [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) gibt jetzt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zurück, in den von der Spezifikation geforderten Zeiten, einschließlich im `have-remote-offer`-Signaling-Zustand, wo es vorher `null` war. Der Transport erreicht jetzt auch die Zustände `connected` und `closed`, und seine Eigenschaften [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) sind korrekt befüllt. ([Firefox Bug 2019361](https://bugzil.la/2019361) und [Firefox Bug 2056412](https://bugzil.la/2056412)).
- Zwei-Byte-RTP-Header-Erweiterungen werden jetzt unterstützt, sodass Header-Erweiterungen mit einer ID von 15 oder höher verhandelt werden können, anstatt einen `OperationError` zu verursachen. ([Firefox Bug 2014357](https://bugzil.la/2014357)).
- Die Eigenschaft [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) wird jetzt in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet. ([Firefox Bug 2055911](https://bugzil.la/2055911)).
- Die `transport` Statistiken, die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben werden, sind jetzt vor der Verhandlung korrekt, also nach [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aber bevor eine entfernte Beschreibung gesetzt wurde. Die Eigenschaft [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) wird jetzt als `unknown` gemeldet, bis die DTLS-Verbindung eine Rolle auswählt, wo zuvor überhaupt nichts gemeldet wurde ([Firefox Bug 2053296](https://bugzil.la/2053296)), und die Eigenschaft [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) beginnt nun als `new` anstatt `checking`, das fälschlicherweise angezeigt hat, dass Konnektivitätsprüfungen bereits stattgefunden haben ([Firefox Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die [kompakte Import-Sektion](https://github.com/WebAssembly/compact-import-section) Binär-Format-Erweiterung wird jetzt unterstützt, was die Größe von Modulen reduziert, die viele Importe haben. ([Firefox Bug 2062344](https://bugzil.la/2062344)).
- Der [weite Arithmetik](https://github.com/WebAssembly/wide-arithmetic)-Vorschlag wird jetzt unterstützt und fügt die Instruktionen `i64.add128`, `i64.sub128`, `i64.mul_wide_s` und `i64.mul_wide_u` hinzu. Diese erzeugen 128-Bit-Ergebnisse aus 64-Bit-Operanden, die zuvor in Code emuliert werden mussten, der in WebAssembly kompiliert wurde, wie z.B. Bignum- und Kryptografiebibliotheken. ([Firefox Bug 2062374](https://bugzil.la/2062374)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Download-Panel wurde deaktiviert, um zu verhindern, dass das aktuelle Dokument den Fokus verliert, wenn ein Download beginnt. ([Firefox Bug 2035439](https://bugzil.la/2035439)).
- Das Actions API wurde so korrigiert, dass das `dblclick`-Ereignis ausgelöst wird, wenn beim Doppelklick die `Ctrl`-Taste auf Nicht-MacOS-Plattformen gedrückt gehalten wird. ([Firefox Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozilla-spezifische `moz:debugging`-Modul wurde so aktualisiert, dass es nicht mehr auf die gleiche verschachtelte Ereignisschleifen-API wie DevTools angewiesen ist, um Konflikte zu vermeiden, wenn WebDriver BiDi und DevTools parallel verwendet werden. ([Firefox Bug 2041335](https://bugzil.la/2041335)).
- Der Befehl `browsingContext.reload` wurde korrigiert, der beim Verwenden für Frames fehlschlug. ([Firefox Bug 2030909](https://bugzil.la/2030909)).
- Die Unterstützung für das `contexts`-Argument im Befehl `session.unsubscribe` wurde entfernt. Von nun an können Clients nur noch nach Ereignisname oder Abonnement-ID abmelden. ([Firefox Bug 1988723](https://bugzil.la/1988723)).

## Änderungen für Add-on-Entwickler

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 155 enthalten, jedoch standardmäßig deaktiviert. Um sie zu testen, suchen Sie nach der entsprechenden Einstellung auf der `about:config`-Seite und setzen Sie diese auf `true`. Weitere solcher Funktionen finden Sie auf der [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **Scroll-gesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) lassen eine Animation mit der Scrollposition eines Scrollers oder mit der Position eines Elements innerhalb seines Scrollers fortschreiten, anstatt mit der Zeit. Diese Einstellung deckt die {{cssxref("scroll-timeline")}} und {{cssxref("view-timeline")}} Eigenschaften und ihre Langformen ab, einschließlich der {{cssxref("view-timeline-inset")}} Eigenschaft, zusammen mit den {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view", "view()")}} funktionalen Notationen. In dieser Version wurde die `view-timeline-inset` Langform zur `view-timeline` Kurzform hinzugefügt. ([Firefox Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) exponiert CSS-Werte als typisierte JavaScript-Objekte anstatt als Strings, was die Manipulation von CSS aus Skripten vereinfacht. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()` Support-Anfragen**: `layout.css.supports.at-rule.enabled`

  Die [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) Funktion in der {{cssxref("@supports")}} At-Regel ermöglicht es Ihnen zu testen, ob der Browser eine gegebene CSS at-Regel unterstützt, z.B. `@supports at-rule(@scope)`. ([Firefox Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Seite zu deklarieren, wie ihr Audio sich relativ zu anderem auf dem Gerät abgespieltem Audio verhalten soll, z.B. ob es gemischt, abgesenkt oder unterbrochen werden soll. ([Firefox Bug 2055710](https://bugzil.la/2055710)).

- **CSS-Basisshapes erlauben `farthest-corner` und `closest-corner` Schlüsselwörter**: `layout.css.ellipse-corners.enabled`

  Die `farthest-corner` und `closest-corner` Schlüsselwörter können zum Spezifizieren der Radien-Werte der {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} CSS Basisshapes verwendet werden. ([Firefox Bug 2037673](https://bugzil.la/2037673)).

- **Inhalte mit `line-clamp` kürzen**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert ohne den `-webkit-`-Vendor-Präfix und unterstützt jetzt auch das `no-ellipsis` Schlüsselwort und `<string>` Werte dafür, was an der Stelle angezeigt wird, an der der Text abgeschnitten wird. ([Firefox Bug 2042999](https://bugzil.la/2042999) und [Firefox Bug 2043000](https://bugzil.la/2043000)).

- **Scoped custom element registries**: `dom.scoped-custom-element-registries.enabled`

  Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann konstruiert und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden, sodass eine Shadow-Root benutzerdefinierte Elemente definieren kann, die nicht mit denen in der globalen Registry kollidieren. ([Firefox Bug 2018900](https://bugzil.la/2018900)). Diese Version fügt auch das `customelementregistry` globale Attribut hinzu, um die Registry auszuwählen, mit der ein Element aus dem Markup verknüpft ist. ([Firefox Bug 2029965](https://bugzil.la/2029965)).

- **Puffergrenzen-Bestätigungen in regulären Ausdrücken**: (Nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39 RegExp Puffergrenzen-Vorschlag](https://github.com/tc39/proposal-regexp-buffer-boundaries) fügt die [`\A`, `\z`, und `\Z` Bestätigungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) zu regulären Ausdrücken hinzu. Diese stimmen mit dem Anfang oder Ende der gesamten Eingabe überein, unabhängig davon, ob das {{jsxref("RegExp/multiline", "m")}}-Flag gesetzt ist. ([Firefox Bug 2047706](https://bugzil.la/2047706)).

- **`border-area` Wert für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area)-Wert der {{cssxref("background-clip")}} CSS-Eigenschaft schneidet den Hintergrund auf den Bereich zu, der von der Umrandung des Elements bemalt wird, was es möglich macht, einen Farbverlauf oder ein Bild als Umrandung zu verwenden. ([Firefox Bug 2045230](https://bugzil.la/2045230)).
