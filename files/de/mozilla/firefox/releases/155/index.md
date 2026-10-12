---
title: Firefox 155 – Versionshinweise für Entwickler
short-title: Firefox 155
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 0d8aa789fef46572ea27b9929625f298aff0416b
---

Dieser Artikel informiert über die Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 wurde am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Die Schaltflächen zur Emulation von Medienmerkmalen in der [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sind jetzt in einem eigenen Emulationsbereich zusammengefasst, der über die Schaltfläche `@` geöffnet wird.
  Der Bereich ermöglicht außerdem die Emulation des Medienmerkmals {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}.
  ([Firefox-Bug 1692434](https://bugzil.la/1692434) und [Firefox-Bug 1477920](https://bugzil.la/1477920)).
- Der [JSON-Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet jetzt [JSON-Lines](https://jsonlines.org/)-Dokumente (NDJSON), die mit `application/jsonl`, `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` ausgeliefert werden oder die Dateiendung `.jsonl` haben.
  Jede Zeile wird einzeln geparst und als eigener aufklappbarer Eintrag mit ihrer Zeilennummer angezeigt. Ein Parsing-Fehler in einer Zeile wird direkt an dieser Stelle gemeldet, ohne sich auf den Rest des Dokuments auszuwirken.
  ([Firefox-Bug 2055774](https://bugzil.la/2055774), [Firefox-Bug 2060972](https://bugzil.la/2060972) und [Firefox-Bug 2060529](https://bugzil.la/2060529)).
- Zum Deaktivieren von Breakpoints im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde ein Tastenkürzel hinzugefügt.
  ([Firefox-Bug 1642578](https://bugzil.la/1642578)).

### HTML

Keine nennenswerten Änderungen.

### CSS

- Die CSS-Funktion {{cssxref("attr")}} kann jetzt in jeder CSS-Eigenschaft verwendet werden, nicht mehr nur in {{cssxref("content")}}.
  So lässt sich die Gestaltung ohne JavaScript anhand von HTML-Attributen steuern, beispielsweise mit `width: attr(data-size px)`.
  [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)-Werte (einschließlich Einheitenbezeichnern wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [Attribute mit Namensraum](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden jetzt unterstützt.
  Sie können `attr()` jetzt auch innerhalb von [Container-Style-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden.
  ([Firefox-Bug 2038940](https://bugzil.la/2038940)).
- Die CSS-Funktion {{cssxref("progress")}} wird jetzt unterstützt.
  Sie gibt einen {{cssxref("number")}}-Wert zurück, der angibt, wie weit ein Wert zwischen einem Anfangs- und einem Endwert fortgeschritten ist.
  Das Ergebnis kann anschließend zur Berechnung anderer Werte verwendet werden, beispielsweise in `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox-Bug 2047345](https://bugzil.la/2047345)).
- Die CSS-Funktion {{cssxref("color_value/alpha", "alpha()")}} wird jetzt unterstützt.
  Sie nimmt eine Farbe entgegen und gibt diese mit einem anderen Alpha-Wert (Transparenzwert) zurück, ohne die übrigen Farbkomponenten zu verändern.
  Innerhalb der Funktion können Sie mit dem Schlüsselwort `alpha` auf den Alphakanal der ursprünglichen Farbe verweisen, beispielsweise mit `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox-Bug 2059738](https://bugzil.la/2059738) und [Firefox-Bug 2059988](https://bugzil.la/2059988)).
- Die CSS-Eigenschaft {{cssxref("font-width")}} wird jetzt unterstützt, ebenso der {{cssxref("@font-face/font-width", "font-width")}}-Deskriptor für {{cssxref("@font-face")}} und die Eigenschaft `CSSStyleDeclaration.fontWidth`.
  `font-width` ist der neue Name für die Eigenschaft {{cssxref("font-stretch")}}, die als veralteter Alias weiterhin funktioniert.
  Beachten Sie, dass beim Auflisten berechneter Styles jetzt `font-width` statt `font-stretch` zurückgegeben wird.
  ([Firefox-Bug 1911075](https://bugzil.la/1911075)).
- Die in [Firefox 153](/de/docs/Mozilla/Firefox/Releases/153#css) eingeführte teilweise Unterstützung für das nicht standardisierte Pseudoelement {{cssxref("::-webkit-scrollbar")}} ist jetzt auf eine kleine Liste von Websites beschränkt, statt für das gesamte Web zu gelten. Firefox verwaltet diese Liste in der Einstellung `layout.css.fake-webkit-scrollbar.enabled-domains`. Die Domain des Dokuments wird mit den Einträgen der Liste abgeglichen. Wenn sie mit keinem Eintrag übereinstimmt, gibt `@supports selector(::-webkit-scrollbar)` `false` zurück.

  Diese Einschränkung nimmt die Änderung aus Firefox 153 zurück, mit der die teilweise Unterstützung für `::-webkit-scrollbar` auf allen Websites eingeführt wurde und die auf manchen Websites zu fehlerhaften Scrollleisten führte. Diese Websites nutzten zur Gestaltung weitere `::-webkit-scrollbar-*`-Pseudoelemente, die Firefox nicht unterstützt. Firefox berücksichtigt nur `display: none`, wodurch die Scrollleiste ausgeblendet wird, sowie einen `width`- oder `height`-Wert ungleich null, wodurch Overlay-Scrollleisten für den betreffenden Scroll-Container deaktiviert werden.

  Verwenden Sie zur Gestaltung von Scrollleisten in Firefox die standardisierten Eigenschaften {{cssxref("scrollbar-color")}} und {{cssxref("scrollbar-width")}}. ([Firefox-Bug 2061547](https://bugzil.la/2061547)).

### JavaScript

- Die statischen Methoden {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} werden jetzt gemäß dem [TC39-Vorschlag für Await Dictionaries](https://github.com/tc39/proposal-await-dictionary) unterstützt.
  Sie verhalten sich wie {{jsxref("Promise.all()")}} beziehungsweise {{jsxref("Promise.allSettled()")}}, nehmen jedoch statt eines Iterable ein Objekt mit Promises entgegen. Sie werden mit einem Objekt mit denselben Schlüsseln erfüllt, sodass Ergebnisse über ihren Namen statt über ihre Position gelesen werden können.
  ([Firefox-Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), dessen Laden aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) fehlschlägt, wird nicht mehr als fehlgeschlagen zwischengespeichert. Dadurch kann ein erneuter Import desselben Modulspezifizierers erfolgreich sein, sobald der Server wieder funktioniert.
  Dies gilt für JavaScript-, [JSON-](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json), [CSS-](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) und [Textmodule](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text), die statisch oder per [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Fenstern als auch in Workern.
  Außerdem löst [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) für Module, die bereits abgerufen wurden oder noch abgerufen werden, jetzt das Ereignis [`load`](/de/docs/Web/API/HTMLElement/load_event) statt [`error`](/de/docs/Web/API/HTMLElement/error_event) aus. Ein Modulskript wird jetzt auch dann geladen, wenn ein vorheriges `modulepreload` derselben URL bei der [Integritätsprüfung](/de/docs/Web/Security/Defenses/Subresource_Integrity) fehlgeschlagen ist.
  ([Firefox-Bug 2055211](https://bugzil.la/2055211) und [Firefox-Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet beim Verbindungsaufbau jetzt [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3). Dabei werden IPv6- und IPv4-Adressen parallel ausprobiert, damit eine nicht erreichbare Adressfamilie den Verbindungsaufbau nicht verzögert.
  Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird.
  ([Firefox-Bug 2062892](https://bugzil.la/2062892)).
- Die Versionsaushandlung für {{Glossary("QUIC", "QUIC")}} wird jetzt unterstützt. Dadurch können {{Glossary("HTTP_3", "HTTP/3")}}-Verbindungen QUIC Version 2 aushandeln.
  ([Firefox-Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere Funktionen der [WebTransport API](/de/docs/Web/API/WebTransport_API) werden jetzt unterstützt:
  - Mit Sendegruppen können Sie Streams gruppieren, die sich Bandbreite teilen sollen, und Streams innerhalb einer Gruppe relativ zueinander priorisieren.
    Sie können eine Gruppe mit [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen. Übergeben Sie anschließend die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) über die Option `sendGroup` an [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream).
    ([Firefox-Bug 2007165](https://bugzil.la/2007165)).
  - Die Methode `WebTransport.exportKeyingMaterial()` leitet für ein bestimmtes Label und einen bestimmten Kontext Schlüsselmaterial aus der zugrunde liegenden TLS-Verbindung ab, sodass beide Endpunkte dasselbe gemeinsame Geheimnis erhalten können.
    Damit kann beispielsweise ein Handshake auf Anwendungsebene MITM-Angriffe erkennen, wenn eine Anwendung eine Verbindung zu einem Peer herstellt, der nur ein selbstsigniertes Zertifikat besitzt.
    ([Firefox-Bug 2007200](https://bugzil.la/2007200)).
  - Die Methode [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Stream zum Senden von Datagrammen zurück. Über dessen Eigenschaften [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) lässt sich der Stream gegenüber anderen Sendern priorisieren.
    ([Firefox-Bug 2007174](https://bugzil.la/2007174)).
  - Der Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) akzeptiert eine Option [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols), die die vom Client unterstützten Anwendungsprotokolle auflistet.
    Das vom Server ausgewählte Protokoll wird, sofern eines ausgewählt wurde, in der Eigenschaft [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) zurückgegeben, wenn die Verbindung hergestellt ist und das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt wird.
    ([Firefox-Bug 2007150](https://bugzil.la/2007150)).
  - Die Eigenschaft [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) zeigt an, wann der Server den Client aufgefordert hat, die Sitzung geordnet zu beenden.
    ([Firefox-Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt auf Desktop-Systemen jetzt das Feature [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features), das über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden kann.
  Dadurch können `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den Eigenschaften [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) angegeben werden. Die WGSL-Erweiterung `dual_source_blending` wird ebenfalls unterstützt.
  ([Firefox-Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Das Interface [`SVGAElement`](/de/docs/Web/API/SVGAElement) implementiert jetzt das Mixin [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils). Dadurch stellen SVG-Elemente {{SVGElement("a")}} dieselben Eigenschaften für URL-Bestandteile bereit wie HTML-Elemente {{HTMLElement("a")}}: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Auch die schreibgeschützte Eigenschaft [`origin`](/de/docs/Web/API/SVGAElement/origin) wird bereitgestellt.
  ([Firefox-Bug 2058578](https://bugzil.la/2058578)).
- Die Interfaces [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) unterstützen jetzt indizierte Setter. Das bedeutet, dass Sie einen Listeneintrag mit der Klammernotation, etwa `transformList[0] = newTransform`, ersetzen können, statt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Das Interface [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) unterstützt indizierte Setter bereits.
  ([Firefox-Bug 2059426](https://bugzil.la/2059426)).
- Die Methode [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) berücksichtigt jetzt ihr Argument [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options) mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`.
  Dadurch können Sie ein umschließendes Rechteck abrufen, das auch die auf ein Element angewendete Kontur, Marker und Beschneidung berücksichtigt, statt nur dessen Füllgeometrie.
  ([Firefox-Bug 2060873](https://bugzil.la/2060873)).
- Nicht gerenderte Elemente, beispielsweise innerhalb von {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}} und {{svgelement("defs")}}, geben über [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) jetzt ein leeres Rechteck und über [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) eine leere Liste zurück, statt ein Rechteck für einen Bereich zu melden, der nie gezeichnet wurde.
  ([Firefox-Bug 2061646](https://bugzil.la/2061646)).

#### Medien, WebRTC und Web Audio

- Das Ereignis [`error`](/de/docs/Web/API/RTCDataChannel/error_event), das für ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt ausgelöst wird, kann in seiner Eigenschaft [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail) jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) melden, wenn der Transport aufgrund eines Fehlers geschlossen wird.
  Außerdem stehen [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in Dedicated Workern zur Verfügung (diese Verfügbarkeit ist noch nicht in der Spezifikation festgelegt).
  ([Firefox-Bug 1814460](https://bugzil.la/1814460)).
- Die Eigenschaft [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) gibt jetzt zu den in der Spezifikation vorgeschriebenen Zeitpunkten ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zurück, auch im Signalisierungszustand `have-remote-offer`, in dem sie zuvor `null` zurückgab.
  Der Transport erreicht jetzt außerdem die Zustände `connected` und `closed`, und seine Eigenschaften [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) werden korrekt befüllt.
  ([Firefox-Bug 2019361](https://bugzil.la/2019361) und [Firefox-Bug 2056412](https://bugzil.la/2056412)).
- Zwei Byte lange RTP-Header-Erweiterungen werden jetzt unterstützt. Dadurch können Header-Erweiterungen mit einer ID von 15 oder höher ausgehandelt werden, statt einen `OperationError` auszulösen.
  ([Firefox-Bug 2014357](https://bugzil.la/2014357)).
- Die Eigenschaft [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) wird jetzt in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet.
  ([Firefox-Bug 2055911](https://bugzil.la/2055911)).
- Die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegebenen `transport`-Statistiken sind jetzt auch vor der Aushandlung korrekt, also nach [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), aber bevor eine Remote Description festgelegt wurde.
  Die Eigenschaft [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) wird jetzt als `unknown` gemeldet, bis beim DTLS-Handshake eine Rolle ausgewählt wird; zuvor wurde sie überhaupt nicht gemeldet ([Firefox-Bug 2053296](https://bugzil.la/2053296)). Die Eigenschaft [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) beginnt jetzt mit `new` statt mit `checking`, was fälschlicherweise anzeigte, dass bereits Verbindungsprüfungen liefen ([Firefox-Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die Binärformat-Erweiterung [compact import section](https://github.com/WebAssembly/compact-import-section) wird jetzt unterstützt. Sie verkleinert Module mit vielen [`import`](/de/docs/WebAssembly/Reference/Definitions/import)-Anweisungen.
  ([Firefox-Bug 2062344](https://bugzil.la/2062344)).
- Der Vorschlag [wide arithmetic](https://github.com/WebAssembly/wide-arithmetic) wird jetzt unterstützt und ergänzt die Anweisungen [`i64.add128`](/de/docs/WebAssembly/Reference/Numeric/add128), [`i64.sub128`](/de/docs/WebAssembly/Reference/Numeric/sub128), [`i64.mul_wide_s`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_s) und [`i64.mul_wide_u`](/de/docs/WebAssembly/Reference/Numeric/mul_wide_u).
  Sie erzeugen 128-Bit-Ergebnisse aus 64-Bit-Operanden. Zuvor musste dies in zu WebAssembly kompiliertem Code emuliert werden, etwa in Bibliotheken für große Ganzzahlen und Kryptografie.
  ([Firefox-Bug 2062374](https://bugzil.la/2062374)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Download-Panel wurde deaktiviert, damit das aktuelle Dokument beim Beginn eines Downloads nicht den Fokus verliert. ([Firefox-Bug 2035439](https://bugzil.la/2035439)).
- Die Actions API wurde korrigiert, sodass beim Doppelklicken mit gedrückter `Ctrl`-Taste auf anderen Plattformen als macOS das Ereignis `dblclick` ausgelöst wird. ([Firefox-Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozilla-spezifische Modul `moz:debugging` wurde so aktualisiert, dass es nicht mehr dieselbe API für verschachtelte Ereignisschleifen wie DevTools verwendet. Dadurch werden Konflikte bei der parallelen Nutzung von WebDriver BiDi und DevTools vermieden. ([Firefox-Bug 2041335](https://bugzil.la/2041335)).
- Ein Fehler wurde behoben, durch den der Befehl `browsingContext.reload` bei Frames fehlschlug. ([Firefox-Bug 2030909](https://bugzil.la/2030909)).
- Die Unterstützung für das Argument `contexts` im Befehl `session.unsubscribe` wurde entfernt. Clients können Abonnements künftig nur noch über den Ereignisnamen oder die Abonnement-ID beenden. ([Firefox-Bug 1988723](https://bugzil.la/1988723)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 155 enthalten, aber standardmäßig deaktiviert.
Wenn Sie sie ausprobieren möchten, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scrollgesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  Mit [scrollgesteuerten Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) hängt der Fortschritt einer Animation statt von der Zeit von der Scrollposition eines Scroll-Containers oder von der Position eines Elements innerhalb seines Scroll-Containers ab.
  Diese Einstellung umfasst die Eigenschaften {{cssxref("scroll-timeline")}} und {{cssxref("view-timeline")}} sowie ihre Langformen, einschließlich der Eigenschaft {{cssxref("view-timeline-inset")}}, und außerdem die funktionalen Notationen {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view", "view()")}}.
  In dieser Version wurde die Langform `view-timeline-inset` zur Kurzform `view-timeline` hinzugefügt. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) stellt CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereit. Das vereinfacht die Bearbeitung von CSS per Skript. ([Firefox-Bug 1278697](https://bugzil.la/1278697)).

- **Unterstützungsabfragen mit `at-rule()`**: `layout.css.supports.at-rule.enabled`

  Mit der Funktion [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) innerhalb der At-Regel {{cssxref("@supports")}} können Sie prüfen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, beispielsweise mit `@supports at-rule(@scope)`. ([Firefox-Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Mit der [Audio Session API](/de/docs/Web/API/Audio_Session_API) kann eine Website festlegen, wie sich ihre Audiowiedergabe gegenüber anderen auf dem Gerät abgespielten Audiosignalen verhalten soll, etwa ob sie mit ihnen gemischt, vorübergehend abgesenkt oder unterbrochen werden sollen. ([Firefox-Bug 2055710](https://bugzil.la/2055710)).

- **CSS-Grundformen erlauben die Schlüsselwörter `farthest-corner` und `closest-corner`**: `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können verwendet werden, um die Radien der CSS-Grundformen {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} anzugeben. ([Firefox-Bug 2037673](https://bugzil.la/2037673)).

- **Inhalte mit `line-clamp` kürzen**: `layout.css.line-clamp.enabled`

  Die CSS-Eigenschaft {{cssxref("line-clamp")}} funktioniert ohne das Herstellerpräfix `-webkit-` und unterstützt jetzt auch das Schlüsselwort `no-ellipsis` sowie `<string>`-Werte, mit denen festgelegt wird, was an der Kürzungsstelle angezeigt wird. ([Firefox-Bug 2042999](https://bugzil.la/2042999) und [Firefox-Bug 2043000](https://bugzil.la/2043000)).

- **Geltungsbereichsgebundene Registries für Custom Elements**: `dom.scoped-custom-element-registries.enabled`

  Eine [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann erstellt und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden. So kann eine Shadow Root Custom Elements definieren, die nicht mit den in der globalen Registry definierten Elementen kollidieren. ([Firefox-Bug 2018900](https://bugzil.la/2018900)).
  Diese Version ergänzt außerdem das globale Attribut `customelementregistry`, mit dem sich im Markup auswählen lässt, welcher Registry ein Element zugeordnet ist. ([Firefox-Bug 2029965](https://bugzil.la/2029965)).

- **Puffergrenzen-Assertions in regulären Ausdrücken**: (nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39-Vorschlag zu RegExp-Puffergrenzen](https://github.com/tc39/proposal-regexp-buffer-boundaries) ergänzt reguläre Ausdrücke um die [Assertions `\A`, `\z` und `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion). Diese entsprechen dem Anfang oder Ende der gesamten Eingabe, unabhängig davon, ob das Flag {{jsxref("RegExp/multiline", "m")}} gesetzt ist. ([Firefox-Bug 2047706](https://bugzil.la/2047706)).

- **Wert `border-area` für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der Wert [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area) der CSS-Eigenschaft {{cssxref("background-clip")}} beschneidet den Hintergrund auf den vom Rand des Elements gezeichneten Bereich. Dadurch kann ein Farbverlauf oder Bild als Rand verwendet werden. ([Firefox-Bug 2045230](https://bugzil.la/2045230)).

- **`view-timeline` umfasst `view-timeline-inset`**: `layout.css.scroll-driven-animations.enabled`

  Die Kurzform-Eigenschaft {{cssxref("view-timeline")}} unterstützt jetzt die Eigenschaft {{cssxref("view-timeline-inset")}}. Mit der Kurzform können Sie einen Versatz nach innen oder außen am Anfang und/oder Ende angeben, um die Position der View-Progress-Timeline anzupassen. ([Firefox-Bug 2046602](https://bugzil.la/2046602)).

- **Das Interface `MathMLAnchorElement`**: `mathml.a.element.enabled`

  Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a) wird im DOM jetzt korrekt durch das Interface [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) statt durch das allgemeine Interface [`MathMLElement`](/de/docs/Web/API/MathMLElement) repräsentiert. ([Firefox-Bug 2059312](https://bugzil.la/2059312)).

- **Namen für `timeline-scope` sind jetzt standardmäßig global**: `layout.css.scroll-driven-animations.enabled`

  Das Standardverhalten für den Geltungsbereich benannter Timelines wurde auf global geändert. Mit der CSS-Eigenschaft {{cssxref("timeline-scope")}} und dem Wert von {{cssxref("scroll-timeline-name")}} oder {{cssxref("view-timeline-name")}} lässt sich der Geltungsbereich auf Elemente und ihre Unterelemente beschränken ([Firefox-Bug 2024012](https://bugzil.la/2024012)).

- **`<script type="speculationrules">`**: `dom.speculation_rules.enabled`

  Die nur in Nightly aktivierte [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) bietet einen Mechanismus, um die Leistung künftiger Navigationen zu verbessern. Dazu wird anhand von Faktoren wie dem Nutzerverhalten gegenüber Links festgelegt, welche Ressourcen vorgeladen oder vorab gerendert werden sollen.

  Die anfängliche Unterstützung umfasste nur [`prefetch`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#prefetch). Ressourcen wurden dabei über eine [`urls`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#urls)-Liste und die Prioritätsstufe [`immediate`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#immediate) angegeben. Dazu gehört auch die Unterstützung für den Wert `navigational-prefetch` der Eigenschaft [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType). ([Firefox-Bug 2041381](https://bugzil.la/2041381)).
