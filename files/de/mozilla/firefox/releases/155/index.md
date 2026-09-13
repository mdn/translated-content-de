---
title: Firefox-155-Versionshinweise für Entwickler (Stable)
short-title: Firefox 155 (Stable)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: fb3b56f801565812abdb36d5adbbcadb10ab5fae
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 wurde am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Die Schaltflächen zur Emulation von Medien-Features in der [Rules-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sind jetzt in einem eigenen Emulationspanel zusammengefasst, das über die Schaltfläche `@` geöffnet wird.
  Das Panel fügt außerdem die Emulation des Medien-Features {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} hinzu.
  ([Firefox-Bug 1692434](https://bugzil.la/1692434) und [Firefox-Bug 1477920](https://bugzil.la/1477920)).
- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet jetzt [JSON Lines](https://jsonlines.org/)-Dokumente (NDJSON), die als `application/jsonl`, `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` bereitgestellt werden oder die Dateierweiterung `.jsonl` haben.
  Jede Zeile wird separat in einen eigenen einklappbaren Eintrag geparst, der mit der Zeilennummer gekennzeichnet ist, aus der sie stammt. Eine Zeile, die nicht geparst werden kann, wird inline gemeldet, ohne den Rest des Dokuments zu beeinträchtigen.
  ([Firefox-Bug 2055774](https://bugzil.la/2055774), [Firefox-Bug 2060972](https://bugzil.la/2060972) und [Firefox-Bug 2060529](https://bugzil.la/2060529)).
- Ein Tastaturkürzel zum Deaktivieren von Breakpoints im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde hinzugefügt.
  ([Firefox-Bug 1642578](https://bugzil.la/1642578)).

### HTML

Keine nennenswerten Änderungen.

### CSS

- Die CSS-Funktion {{cssxref("attr")}} kann jetzt in jeder CSS-Eigenschaft verwendet werden, statt nur in {{cssxref("content")}}.
  Dadurch können Sie das Styling über HTML-Attribute steuern, etwa mit `width: attr(data-size px)`, ohne JavaScript zu verwenden.
  Werte des Typs [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) (einschließlich Einheitenbezeichnern wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [namespaced attributes](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden jetzt unterstützt.
  Sie können `attr()` jetzt außerdem innerhalb von [Container-Style-Queries](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden.
  ([Firefox-Bug 2038940](https://bugzil.la/2038940)).
- Die CSS-Funktion {{cssxref("progress")}} wird jetzt unterstützt.
  Sie gibt eine {{cssxref("number")}} zurück, die angibt, wie weit ein Wert zwischen einem Start- und einem Endwert fortgeschritten ist.
  Das Ergebnis kann anschließend zur Berechnung anderer Werte verwendet werden, beispielsweise `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox-Bug 2047345](https://bugzil.la/2047345)).
- Die CSS-Funktion {{cssxref("color_value/alpha", "alpha()")}} wird jetzt unterstützt.
  Sie ermöglicht es Ihnen, eine Farbe zu übergeben und die Farbe mit einem anderen Alpha-Wert (Transparenz) zurückzuerhalten, während die anderen Komponenten der Farbe unverändert bleiben.
  Innerhalb der Funktion können Sie das Schlüsselwort `alpha` verwenden, um auf den Alpha-Kanal der ursprünglichen Farbe zu verweisen, beispielsweise `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox-Bug 2059738](https://bugzil.la/2059738) und [Firefox-Bug 2059988](https://bugzil.la/2059988)).
- Die CSS-Eigenschaft {{cssxref("font-width")}} wird jetzt unterstützt, zusammen mit dem {{cssxref("@font-face/font-width", "font-width")}}-Deskriptor von {{cssxref("@font-face")}} und der Eigenschaft `CSSStyleDeclaration.fontWidth`.
  Dies ist der neue Name für die Eigenschaft {{cssxref("font-stretch")}}, die weiterhin als Legacy-Alias funktioniert.
  Beachten Sie, dass die Aufzählung berechneter Styles jetzt `font-width` statt `font-stretch` zurückgibt.
  ([Firefox-Bug 1911075](https://bugzil.la/1911075)).
- Die teilweise Unterstützung des nicht standardmäßigen Pseudo-Elements {{cssxref("::-webkit-scrollbar")}}, die in [Firefox 153](/de/docs/Mozilla/Firefox/Releases/153#css) hinzugefügt wurde, ist jetzt auf eine kleine Liste von Websites beschränkt, statt für das gesamte Web zu gelten. Firefox verwaltet diese Liste in der Einstellung `layout.css.fake-webkit-scrollbar.enabled-domains`. Die Domain des Dokuments wird mit den Einträgen in der Liste abgeglichen; wenn sie mit keinem Eintrag übereinstimmt, gibt `@supports selector(::-webkit-scrollbar)` `false` zurück.

  Diese Einschränkung macht die Änderung aus Firefox 153 rückgängig, die eine teilweise Unterstützung für `::-webkit-scrollbar` auf allen Websites einführte und auf einigen Websites zu fehlerhaften Scrollbars führte. Diese Websites stützten sich auf Styling mit anderen `::-webkit-scrollbar-*`-Pseudo-Elementen, die Firefox nicht unterstützt. Die einzigen Deklarationen, auf die Firefox reagiert, sind `display: none`, wodurch die Scrollbar ausgeblendet wird, sowie ein von null verschiedener Wert für `width` oder `height`, wodurch Overlay-Scrollbars für diesen Scroll-Container deaktiviert werden.

  Verwenden Sie die standardmäßigen Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}}, um Scrollbars in Firefox zu gestalten. ([Firefox-Bug 2061547](https://bugzil.la/2061547)).

### JavaScript

- Die statischen Methoden {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} werden jetzt unterstützt, wie im [TC39-await-dictionary-Vorschlag](https://github.com/tc39/proposal-await-dictionary) definiert.
  Sie verhalten sich jeweils wie {{jsxref("Promise.all()")}} und {{jsxref("Promise.allSettled()")}}, nehmen jedoch ein Objekt mit Promises statt eines Iterables entgegen. Sie werden mit einem Objekt erfüllt, das dieselben Schlüssel besitzt, sodass Ergebnisse anhand ihres Namens statt ihrer Position gelesen werden können.
  ([Firefox-Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), das aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) nicht geladen werden kann, wird nicht länger als fehlgeschlagen gecacht. Daher kann das erneute Importieren desselben Modulspezifizierers erfolgreich sein, sobald der Server wieder verfügbar ist.
  Dies gilt für JavaScript-, [JSON](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json)-, [CSS](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css)- und [Text](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text)-Module, die entweder statisch oder mit [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Windows als auch in Workern.
  In diesem Zusammenhang löst [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) jetzt das Ereignis [`load`](/de/docs/Web/API/HTMLElement/load_event) statt [`error`](/de/docs/Web/API/HTMLElement/error_event) für Module aus, die bereits abgerufen wurden oder noch abgerufen werden. Außerdem wird ein Modulsystem-Skript jetzt geladen, selbst wenn ein vorheriges `modulepreload` derselben URL seine [Integritätsprüfung](/de/docs/Web/Security/Defenses/Subresource_Integrity) nicht bestanden hat.
  ([Firefox-Bug 2055211](https://bugzil.la/2055211) und [Firefox-Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet beim Herstellen von Verbindungen jetzt [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3). IPv6- und IPv4-Adressen werden parallel getestet, sodass der Verbindungsaufbau nicht durch eine nicht erreichbare Adressfamilie verzögert wird.
  Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird.
  ([Firefox-Bug 2062892](https://bugzil.la/2062892)).
- Die Versionsaushandlung von {{Glossary("QUIC", "QUIC")}} wird jetzt unterstützt, wodurch {{Glossary("HTTP_3", "HTTP/3")}}-Verbindungen die QUIC-Version 2 aushandeln können.
  ([Firefox-Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere Funktionen der [WebTransport API](/de/docs/Web/API/WebTransport_API) werden jetzt unterstützt:
  - Send-Gruppen ermöglichen es Ihnen, Streams zu gruppieren, die Bandbreite gemeinsam nutzen sollen, und Streams innerhalb einer Gruppe relativ zueinander zu priorisieren.
    Sie können eine Gruppe mit [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen. Übergeben Sie anschließend die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) in der Option `sendGroup` von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream).
    ([Firefox-Bug 2007165](https://bugzil.la/2007165)).
  - Die Methode `WebTransport.exportKeyingMaterial()` leitet Schlüsselmaterial aus der zugrunde liegenden TLS-Verbindung für ein bestimmtes Label und einen bestimmten Kontext ab, sodass beide Endpunkte dasselbe gemeinsame Geheimnis erhalten können.
    Dies ermöglicht beispielsweise einem Handshake auf Anwendungsebene, MITM-Angriffe zu erkennen, wenn eine Anwendung eine Verbindung zu einem Peer herstellt, der nur über ein selbstsigniertes Zertifikat verfügt.
    ([Firefox-Bug 2007200](https://bugzil.la/2007200)).
  - Die Methode [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Stream zum Senden von Datagrammen zurück, mit den Eigenschaften [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder), um ihn gegenüber anderen Sendern zu priorisieren.
    ([Firefox-Bug 2007174](https://bugzil.la/2007174)).
  - Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert eine Option [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols), die die Anwendungsprotokolle auflistet, welche der Client unterstützt.
    Das vom Server ausgewählte Protokoll wird, falls vorhanden, in der Eigenschaft [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) zurückgegeben, wenn die Verbindung hergestellt ist und das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt wird.
    ([Firefox-Bug 2007150](https://bugzil.la/2007150)).
  - Die Eigenschaft [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) zeigt an, wenn der Server den Client aufgefordert hat, eine ordnungsgemäße Beendigung der Sitzung einzuleiten.
    ([Firefox-Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt jetzt auf Desktop-Systemen das Feature [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features), das in [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden kann.
  Dadurch können `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den Eigenschaften [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) angegeben werden. Die WGSL-Erweiterung `dual_source_blending` wird ebenfalls unterstützt.
  ([Firefox-Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Das Interface [`SVGAElement`](/de/docs/Web/API/SVGAElement) implementiert jetzt das Mixin [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils). Daher stellen SVG-{{SVGElement("a")}}-Elemente dieselben URL-Komponenteneigenschaften wie HTML-{{HTMLElement("a")}}-Elemente bereit: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte Eigenschaft [`origin`](/de/docs/Web/API/SVGAElement/origin) wird ebenfalls bereitgestellt.
  ([Firefox-Bug 2058578](https://bugzil.la/2058578)).
- Die Interfaces [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) unterstützen jetzt indizierte Setter. Das bedeutet, dass Sie ein Element in der Liste mittels Klammernotation ersetzen können, etwa mit `transformList[0] = newTransform`, statt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Das Interface [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) unterstützt indizierte Setter bereits.
  ([Firefox-Bug 2059426](https://bugzil.la/2059426)).
- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt jetzt ihr Argument [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options) mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`.
  Dadurch können Sie eine Bounding Box erhalten, die die auf ein Element angewendeten Konturen, Markierungen und Beschneidungen berücksichtigt, statt nur dessen Füllgeometrie.
  ([Firefox-Bug 2060873](https://bugzil.la/2060873)).
- Elemente, die nicht gerendert werden, etwa solche innerhalb von {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}} und {{svgelement("defs")}}, geben jetzt ein leeres Rechteck von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) sowie eine leere Liste von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurück, statt eine Box zu melden, die niemals gezeichnet wurde.
  ([Firefox-Bug 2061646](https://bugzil.la/2061646)).

#### Media, WebRTC und Web Audio

- Das Ereignis [`error`](/de/docs/Web/API/RTCDataChannel/error_event), das auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner Eigenschaft [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail) melden, wenn der Transport aufgrund eines Fehlers geschlossen wird.
  Zusätzlich sind [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Workern verfügbar (diese Bereitstellung ist noch nicht in der Spezifikation enthalten).
  ([Firefox-Bug 1814460](https://bugzil.la/1814460)).
- Die Eigenschaft [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) gibt jetzt zu den von der Spezifikation geforderten Zeitpunkten einen [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zurück, einschließlich im Signalisierungszustand `have-remote-offer`, in dem sie zuvor `null` war.
  Der Transport erreicht jetzt außerdem die Zustände `connected` und `closed`, und seine Eigenschaften [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) werden korrekt befüllt.
  ([Firefox-Bug 2019361](https://bugzil.la/2019361) und [Firefox-Bug 2056412](https://bugzil.la/2056412)).
- RTP-Header-Erweiterungen mit zwei Byte werden jetzt unterstützt, sodass Header-Erweiterungen mit einer ID von 15 oder höher ausgehandelt werden können, statt einen `OperationError` zu verursachen.
  ([Firefox-Bug 2014357](https://bugzil.la/2014357)).
- Die Eigenschaft [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) wird jetzt in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet.
  ([Firefox-Bug 2055911](https://bugzil.la/2055911)).
- Die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegebenen `transport`-Statistiken sind jetzt vor der Aushandlung korrekt, also nach [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), aber bevor eine Remote-Beschreibung gesetzt wurde.
  Die Eigenschaft [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) wird jetzt als `unknown` gemeldet, bis der DTLS-Handshake eine Rolle auswählt; zuvor wurde sie überhaupt nicht gemeldet ([Firefox-Bug 2053296](https://bugzil.la/2053296)). Die Eigenschaft [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) beginnt jetzt mit `new` statt mit `checking`, was zuvor fälschlicherweise anzeigte, dass Konnektivitätsprüfungen bereits liefen ([Firefox-Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die Binärformat-Erweiterung [compact import section](https://github.com/WebAssembly/compact-import-section) wird jetzt unterstützt. Sie reduziert die Größe von Modulen, die viele [`import`](/de/docs/WebAssembly/Reference/Definitions/import)-Anweisungen haben.
  ([Firefox-Bug 2062344](https://bugzil.la/2062344)).
- Der Vorschlag [wide arithmetic](https://github.com/WebAssembly/wide-arithmetic) wird jetzt unterstützt und fügt die Instruktionen [`i64.add128`](/de/docs/WebAssembly/Reference/Numeric/add128), [`i64.sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128), [`i64.mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s) und [`i64.mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u) hinzu.
  Diese erzeugen 128-Bit-Ergebnisse aus 64-Bit-Operanden, die zuvor in zu WebAssembly kompiliertem Code emuliert werden mussten, etwa in Bignum- und Kryptografie-Bibliotheken.
  ([Firefox-Bug 2062374](https://bugzil.la/2062374)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Download-Panel wurde deaktiviert, damit das aktuelle Dokument nicht den Fokus verliert, wenn ein Download beginnt. ([Firefox-Bug 2035439](https://bugzil.la/2035439)).
- Die Actions API wurde korrigiert, sodass das Ereignis `dblclick` ausgelöst wird, wenn auf Nicht-macOS-Plattformen bei gedrückter `Ctrl`-Taste ein Doppelklick ausgeführt wird. ([Firefox-Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozilla-spezifische Modul `moz:debugging` wurde aktualisiert, sodass es nicht länger auf dieselbe verschachtelte Event-Loop-API wie DevTools angewiesen ist. Dies verhindert Konflikte, wenn WebDriver BiDi und DevTools parallel verwendet werden. ([Firefox-Bug 2041335](https://bugzil.la/2041335)).
- Der Fehler wurde behoben, durch den der Befehl `browsingContext.reload` bei Verwendung für Frames fehlschlug. ([Firefox-Bug 2030909](https://bugzil.la/2030909)).
- Die Unterstützung für das Argument `contexts` im Befehl `session.unsubscribe` wurde entfernt. Ab jetzt können Clients sich nur anhand des Ereignisnamens oder der Abonnement-ID abmelden. ([Firefox-Bug 1988723](https://bugzil.la/1988723)).

## Experimentelle Web-Features

Diese Features werden in Firefox 155 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scroll-gesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) ermöglichen es, dass eine Animation mit der Scrollposition eines Scrollers oder mit der Position eines Elements innerhalb seines Scrollers fortschreitet, statt mit der Zeit.
  Diese Einstellung umfasst die Eigenschaften {{cssxref("scroll-timeline")}} und {{cssxref("view-timeline")}} sowie deren Longhands, einschließlich der Eigenschaft {{cssxref("view-timeline-inset")}}, sowie die funktionalen Notationen {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view", "view()")}}.
  In dieser Version wurde das Longhand `view-timeline-inset` zum Shorthand `view-timeline` hinzugefügt. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) stellt CSS-Werte als typisierte JavaScript-Objekte statt als Strings bereit, was die Manipulation von CSS aus Skripten vereinfacht. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()`-Support-Queries**: `layout.css.supports.at-rule.enabled`

  Die Funktion [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) in der At-Regel {{cssxref("@supports")}} ermöglicht es Ihnen zu testen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, beispielsweise `@supports at-rule(@scope)`. ([Firefox-Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Website zu deklarieren, wie ihr Audio im Verhältnis zu anderem auf dem Gerät wiedergegebenem Audio funktionieren soll, beispielsweise ob es mit anderem Audio gemischt, abgesenkt oder unterbrochen werden soll. ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

- **CSS-Basisformen erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`**: `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können verwendet werden, um die Radienwerte der CSS-Basisformen {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} festzulegen. ([Firefox-Bug 2037673](https://bugzil.la/2037673)).

- **Inhalte mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert ohne das Herstellerpräfix `-webkit-` und unterstützt jetzt außerdem das Schlüsselwort `no-ellipsis` sowie Werte des Typs `<string>`, um auszuwählen, was an der Stelle angezeigt wird, an der der Text abgeschnitten wird. ([Firefox-Bug 2042999](https://bugzil.la/2042999) und [Firefox-Bug 2043000](https://bugzil.la/2043000)).

- **Bereichsbezogene Registries für Custom Elements**: `dom.scoped-custom-element-registries.enabled`

  Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann konstruiert und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden, sodass ein Shadow Root Custom Elements definieren kann, die nicht mit den in der globalen Registry definierten kollidieren. ([Firefox-Bug 2018900](https://bugzil.la/2018900)).
  Diese Version fügt außerdem das globale Attribut `customelementregistry` hinzu, um aus dem Markup die Registry auszuwählen, mit der ein Element verknüpft ist. ([Firefox-Bug 2029965](https://bugzil.la/2029965)).

- **Assertions für Puffergrenzen in regulären Ausdrücken**: (nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39-Vorschlag für RegExp-Puffergrenzen](https://github.com/tc39/proposal-regexp-buffer-boundaries) fügt regulären Ausdrücken die [Assertions `\A`, `\z` und `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) hinzu. Diese entsprechen dem Anfang oder Ende der gesamten Eingabe, unabhängig davon, ob das Flag {{jsxref("RegExp/multiline", "m")}} gesetzt ist. ([Firefox-Bug 2047706](https://bugzil.la/2047706)).

- **Wert `border-area` für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der Wert [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area) der CSS-Eigenschaft {{cssxref("background-clip")}} beschneidet den Hintergrund auf den Bereich, der vom Rahmen des Elements gezeichnet wird. Dadurch kann ein Farbverlauf oder Bild als Rahmen verwendet werden. ([Firefox-Bug 2045230](https://bugzil.la/2045230)).

- **`view-timeline` schließt `view-timeline-inset` ein**: `layout.css.scroll-driven-animations.enabled`

  Die Shorthand-Eigenschaft {{cssxref("view-timeline")}} unterstützt jetzt die Eigenschaft {{cssxref("view-timeline-inset")}}. Mit dem Shorthand können Sie Anfangs- und/oder Endwerte für Insets (oder Outsets) angeben, um die Position der View-Progress-Timeline anzupassen. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

- **Das Interface `MathMLAnchorElement`**: `mathml.a.element.enabled`

  Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) wird im DOM jetzt korrekt durch das Interface [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch das generische Interface [`MathMLElement`](/de/docs/Web/API/MathMLElement) repräsentiert. ([Firefox-Bug 2059312](https://bugzil.la/2059312)).
