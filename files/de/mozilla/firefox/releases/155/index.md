---
title: Firefox 155 Versionshinweise für Entwickler (Beta)
short-title: Firefox 155 (Beta)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: d02d57f4af091794c37872de969ee609b118045c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

### Entwickler-Tools

- Die Medieneigenschafts-Emulations-Schaltflächen in der [Regel-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) werden jetzt in einem eigenen Emulations-Panel gesammelt, das über die `@`-Schaltfläche geöffnet wird.
  Das Panel fügt auch die Emulation der Media-Funktion {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} hinzu.
  ([Firefox Bug 1692434](https://bugzil.la/1692434) und [Firefox Bug 1477920](https://bugzil.la/1477920)).
- Der [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) öffnet jetzt [JSON Lines](https://jsonlines.org/) (NDJSON) Dokumente, die als `application/jsonlines`, `application/x-ndjson` oder `text/jsonl` bereitgestellt werden, oder eine `.jsonl` Dateierweiterung haben.
  Jede Zeile wird separat in einem eigenen einklappbaren Eintrag geparst, der mit der Zeilennummer gekennzeichnet ist, aus der sie stammt, und eine Zeile, die nicht geparst werden kann, wird inline gemeldet, ohne den Rest des Dokuments zu beeinträchtigen.
  ([Firefox Bug 2055774](https://bugzil.la/2055774), [Firefox Bug 2060972](https://bugzil.la/2060972) und [Firefox Bug 2060529](https://bugzil.la/2060529)).
- Eine Tastenkombination zum Deaktivieren von Haltepunkten im [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde hinzugefügt.
  ([Firefox Bug 1642578](https://bugzil.la/1642578)).

### CSS

- Die {{cssxref("attr")}} CSS-Funktion kann jetzt in jeder CSS-Eigenschaft verwendet werden, nicht nur in {{cssxref("content")}}.
  Dies ermöglicht es, das Styling von HTML-Attributen abzuleiten, wie z.B. `width: attr(data-size px)`, ohne JavaScript zu verwenden.
  [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type) Werte (einschließlich Einheitsbezeichner wie `px` und `s`), [Fallback-Werte](/de/docs/Web/CSS/Reference/Values/attr#fallback-value) und [Namensraum-Attribute](/de/docs/Web/CSS/Reference/Values/attr#namespaces) werden jetzt unterstützt.
  Sie können `attr()` jetzt auch innerhalb von [Container-Stilabfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries) verwenden.
  ([Firefox Bug 2038940](https://bugzil.la/2038940)).
- Die {{cssxref("progress")}} CSS-Funktion wird jetzt unterstützt.
  Diese gibt eine {{cssxref("number")}} zurück, die angibt, wie weit ein Wert zwischen einem Start- und einem Endwert fortgeschritten ist.
  Das Ergebnis kann dann verwendet werden, um andere Werte zu berechnen, z.B. `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([Firefox Bug 2047345](https://bugzil.la/2047345)).
- Die {{cssxref("color_value/alpha", "alpha()")}} CSS-Funktion wird jetzt unterstützt.
  Sie können eine Farbe übergeben und erhalten die Farbe mit einem anderen Alpha- (Transparenz) Wert zurück, wobei andere Farbkomponenten unverändert bleiben.
  Innerhalb der Funktion können Sie das `alpha` Schlüsselwort verwenden, um auf den Alpha-Kanal der Originalfarbe zu verweisen, z.B. `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([Firefox Bug 2059738](https://bugzil.la/2059738) und [Firefox Bug 2059988](https://bugzil.la/2059988)).
- Die {{cssxref("font-width")}} CSS-Eigenschaft wird jetzt unterstützt, zusammen mit dem {{cssxref("@font-face/font-width", "font-width")}} {{cssxref("@font-face")}} Deskriptor und der `CSSStyleDeclaration.fontWidth` Eigenschaft.
  Dies ist der neue Name für die {{cssxref("font-stretch")}} Eigenschaft, die weiterhin als veraltetes Alias funktioniert.
  Beachten Sie, dass die Enumerierung des berechneten Stils jetzt `font-width` statt `font-stretch` zurückgibt.
  ([Firefox Bug 1911075](https://bugzil.la/1911075)).

### JavaScript

- Die {{jsxref("Promise.allKeyed()")}} und {{jsxref("Promise.allSettledKeyed()")}} statischen Methoden werden jetzt unterstützt, wie im [TC39 Await Dictionary Proposal](https://github.com/tc39/proposal-await-dictionary) definiert.
  Diese verhalten sich ähnlich wie {{jsxref("Promise.all()")}} und {{jsxref("Promise.allSettled()")}}, außer dass sie ein Objekt von Promises anstatt eines iterierbaren Wertes übernehmen. Sie werden mit einem Objekt erfüllt, das dieselben Schlüssel hat, so dass Ergebnisse nach Namen statt nach Position gelesen werden können.
  ([Firefox Bug 2057270](https://bugzil.la/2057270)).
- Ein [Modul](/de/docs/Web/JavaScript/Guide/Modules), das aufgrund eines Netzwerkfehlers oder eines falschen [MIME-Typs](/de/docs/Web/HTTP/Guides/MIME_types) nicht geladen werden kann, wird nicht mehr als Fehler gecached, so dass das Importieren desselben Modulspezifizierers erneut erfolgreich sein kann, wenn der Server sich erholt.
  Dies gilt für JavaScript-, [JSON](/de/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json)-, [CSS](/de/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css)- und [Text](/de/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text)-Module, die entweder statisch oder mit [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) geladen werden, sowohl in Fenstern als auch in Workern.
  In diesem Zusammenhang löst [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) jetzt das [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis statt [`error`](/de/docs/Web/API/HTMLElement/error_event) für Module aus, die bereits abgerufen werden oder noch abgerufen werden, und ein Modulskript lädt jetzt auch dann, wenn ein vorheriges `modulepreload` derselben URL seine [Integritätsprüfung](/de/docs/Web/Security/Defenses/Subresource_Integrity) nicht bestanden hat.
  ([Firefox Bug 2055211](https://bugzil.la/2055211) und [Firefox Bug 2052949](https://bugzil.la/2052949)).

### HTTP

- Firefox verwendet jetzt [Happy Eyeballs Version 3](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3) beim Aufbau von Verbindungen, indem IPv6- und IPv4-Adressen gegeneinander antreten, sodass der Verbindungsaufbau nicht durch eine unerreichbare Adressfamilie verzögert wird.
  Beachten Sie, dass dies derzeit nur auf einigen Plattformen unterstützt wird.
  ([Firefox Bug 2062892](https://bugzil.la/2062892)).
- {{Glossary("QUIC", "QUIC")}}-Version-Negotiation wird jetzt unterstützt, was es [[HTTP/3]](/de/docs/Glossary/HTTP_3)-Verbindungen ermöglicht, QUIC Version 2 zu verhandeln.
  ([Firefox Bug 2059947](https://bugzil.la/2059947)).

### APIs

- Mehrere [WebTransport API](/de/docs/Web/API/WebTransport_API)-Funktionen werden jetzt unterstützt:
  - Sendegruppen ermöglichen es Ihnen, Streams zu gruppieren, die Bandbreite teilen sollten, und Streams relativ zueinander innerhalb einer Gruppe zu priorisieren.
    Sie können eine mithilfe von [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellen. Übergibt dann die zurückgegebene [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) in der `sendGroup`-Option von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) oder [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream).
    ([Firefox Bug 2007165](https://bugzil.la/2007165)).
  - Die `WebTransport.exportKeyingMaterial()` Methode leitet Material für die Schlüsselableitung aus der zugrundeliegenden TLS-Verbindung für ein gegebenes Label und einen Kontext ab, sodass beide Endpunkte dasselbe gemeinsame Geheimnis erhalten können.
    ([Firefox Bug 2007200](https://bugzil.la/2007200)).
  - Die [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) Methode gibt einen [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Stream zum Senden von Datagrammen zurück, mit [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) und [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) Eigenschaften, um ihn gegen andere Sender zu priorisieren.
    ([Firefox Bug 2007174](https://bugzil.la/2007174)).
  - Der [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) Konstruktor akzeptiert eine `protocols` Option, die die unterstützten Anwendungsprotokolle des Clients auflistet, die an den Server im `wt-available-protocols` Anfrageheader gesendet wird. Das vom Server gewählte Protokoll wird in der `WebTransport.protocol` Eigenschaft angezeigt.
    ([Firefox Bug 2007150](https://bugzil.la/2007150)).
  - Die [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) Eigenschaft zeigt an, wenn der Server den Client gebeten hat, eine geordnete Beendigung der Sitzung zu beginnen.
    ([Firefox Bug 2007160](https://bugzil.la/2007160)).
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API) unterstützt jetzt die [`dual-source-blending`](/de/docs/Web/API/GPUSupportedFeatures#available_features) Funktion auf Desktops, die in [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden kann.
  Dies ermöglicht `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` in den [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) und [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) Eigenschaften von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zu spezifizieren. Die WGSL `dual_source_blending` Erweiterung wird auch unterstützt.
  ([Firefox Bug 1924328](https://bugzil.la/1924328)).

#### DOM

- Die [`SVGAElement`](/de/docs/Web/API/SVGAElement) Schnittstelle implementiert jetzt das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) Mixin. Infolgedessen zeigen SVG {{SVGElement("a")}} Elemente dieselben URL-Komponenteneigenschaften wie HTML {{HTMLElement("a")}} Elemente an: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte [`origin`](/de/docs/Web/API/SVGAElement/origin) Eigenschaft wird ebenfalls angezeigt.
  ([Firefox Bug 2058578](https://bugzil.la/2058578)).
- Die Schnittstellen [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) unterstützen jetzt indizierte Setter. Das bedeutet, dass Sie ein Element in der Liste mit der Klammernotation ersetzen können, z.B. `transformList[0] = newTransform`, anstatt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Die [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) Schnittstelle unterstützt bereits indizierte Setter.
  ([Firefox Bug 2059426](https://bugzil.la/2059426)).
- Die [`SVGGraphicsElement.getBBox()`](/de/docs/Web/API/SVGGraphicsElement/getBBox) Methode berücksichtigt jetzt ihr [`options`](/de/docs/Web/API/SVGGraphicsElement/getBBox#options) Argument mit den Eigenschaften `fill`, `stroke`, `markers` und `clipped`.
  Dadurch können Sie ein Begrenzungsrechteck erhalten, das den angewendeten Strich, Marker und das Clipping eines Elements berücksichtigt, anstatt nur seine Füllgeometrie.
  ([Firefox Bug 2060873](https://bugzil.la/2060873)).
- Elemente, die nicht dargestellt werden, wie diejenigen innerhalb von {{svgelement("mask")}}, {{svgelement("clipPath")}}, {{svgelement("marker")}}, {{svgelement("symbol")}} und {{svgelement("defs")}}, geben jetzt ein leeres Rechteck von [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) und eine leere Liste von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) zurück, anstatt ein nicht gemaltes Feld zu melden.
  ([Firefox Bug 2061646](https://bugzil.la/2061646)).

#### Media, WebRTC und Web Audio

- Das [`error`](/de/docs/Web/API/RTCDataChannel/error_event) Ereignis, das auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail) Eigenschaft melden, wenn der Transport aufgrund eines Fehlers geschlossen wird.
  Darüber hinaus sind [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Workern verfügbar (diese Exposition ist noch nicht in der Spezifikation).
  ([Firefox Bug 1814460](https://bugzil.la/1814460)).
- Die [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) Eigenschaft gibt jetzt zu den vom Standard geforderten Zeiten ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) zurück, einschließlich im `have-remote-offer` Signalisierungszustand, wo es zuvor `null` war.
  Der Transport erreicht jetzt auch die `connected` und `closed` Zustände, und seine [`maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) und [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) Eigenschaften sind korrekt angefüllt.
  ([Firefox Bug 2019361](https://bugzil.la/2019361) und [Firefox Bug 2056412](https://bugzil.la/2056412)).
- Zwei-Byte-RTP-Header-Erweiterungen werden jetzt unterstützt, sodass Header-Erweiterungen mit einer ID von 15 oder höher ausgehandelt werden können, anstatt einen `OperationError` zu verursachen.
  ([Firefox Bug 2014357](https://bugzil.la/2014357)).
- Die [`selectedCandidatePairChanges`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairChanges) Eigenschaft wird jetzt in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) gemeldet.
  ([Firefox Bug 2055911](https://bugzil.la/2055911)).
- Die `transport` Statistiken, die von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben werden, sind jetzt vor der Verhandlung korrekt, also nach dem Aufrufen von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aber bevor eine Remote-Beschreibung gesetzt wurde.
  Die [`dtlsRole`](/de/docs/Web/API/RTCTransportStats/dtlsRole) Eigenschaft wird jetzt als `unknown` gemeldet, bis das DTLS-Handshake eine Rolle auswählt, wo sie zuvor überhaupt nicht gemeldet wurde ([Firefox Bug 2053296](https://bugzil.la/2053296)), und die [`iceState`](/de/docs/Web/API/RTCTransportStats/iceState) Eigenschaft beginnt jetzt als `new` anstatt `checking`, was fälschlicherweise angab, dass bereits Konnektivitätsprüfungen im Gange waren ([Firefox Bug 2053297](https://bugzil.la/2053297)).

### WebAssembly

- Die [Compact Import Section](https://github.com/WebAssembly/compact-import-section) Binärformat-Erweiterung wird jetzt unterstützt, was die Größe von Modulen reduziert, die viele Importe haben.
  ([Firefox Bug 2062344](https://bugzil.la/2062344)).
- Der [Wide Arithmetic](https://github.com/WebAssembly/wide-arithmetic) Vorschlag wird jetzt unterstützt und fügt die `i64.add128`, `i64.sub128`, `i64.mul_wide_s` und `i64.mul_wide_u` Instruktionen hinzu.
  Diese erzeugen 128-Bit-Ergebnisse aus 64-Bit-Operanden, die zuvor in Code, der in WebAssembly kompiliert wurde, emuliert werden mussten, wie z.B. in Bignum- und Kryptographiebibliotheken.
  ([Firefox Bug 2062374](https://bugzil.la/2062374)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Download-Panel wurde deaktiviert, um zu verhindern, dass das aktuelle Dokument den Fokus verliert, wenn ein Download beginnt. ([Firefox Bug 2035439](https://bugzil.la/2035439)).
- Die Actions-API wurde so korrigiert, dass das `dblclick` Ereignis ausgelöst wird, wenn ein Doppelklick bei gedrückter `Ctrl`-Taste auf Nicht-macOS-Plattformen ausgeführt wird. ([Firefox Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozilla-spezifische `moz:debugging` Modul wurde aktualisiert, sodass es nicht mehr von derselben verschachtelten Ereignisschleifen-API wie DevTools abhängt, was Konflikte vermeidet, wenn WebDriver BiDi und DevTools parallel genutzt werden. ([Firefox Bug 2041335](https://bugzil.la/2041335)).
- Der `browsingContext.reload` Befehl wurde behoben, der fehlschlägt, wenn er für Frames verwendet wird. ([Firefox Bug 2030909](https://bugzil.la/2030909)).
- Die Unterstützung für das `contexts` Argument im `session.unsubscribe` Befehl wurde entfernt. Von nun an können sich Clients nur durch Ereignisname oder Abonnement-ID abbestellen. ([Firefox Bug 1988723](https://bugzil.la/1988723)).

## Änderungen für Add-on-Entwickler

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 155 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie den entsprechenden Eintrag auf der `about:config` Seite und setzen Sie ihn auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Scroll-gesteuerte Animationen**: `layout.css.scroll-driven-animations.enabled`

  [Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) lassen eine Animation mit der Scroll-Position eines Scrollers oder mit der Position eines Elements innerhalb seines Scrollers fortschreiten, anstatt mit der Zeit.
  Diese Einstellung umfasst die {{cssxref("scroll-timeline")}} und {{cssxref("view-timeline")}} Eigenschaften und ihre Langformen, einschließlich der {{cssxref("view-timeline-inset")}} Eigenschaft, zusammen mit den {{cssxref("animation-timeline/scroll", "scroll()")}} und {{cssxref("animation-timeline/view", "view()")}} funktionalen Notationen.
  In dieser Version wurde das `view-timeline-inset` Langhand zu `view-timeline` zugefügt. ([Firefox Bug 2046602](https://bugzil.la/2046602)).

- **CSS Typed Object Model Level 1**: `layout.css.typed-om.enabled`

  Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) stellt CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereit, was die Manipulation von CSS über Skripte vereinfacht. ([Firefox Bug 1278697](https://bugzil.la/1278697)).

- **`at-rule()` Unterstützungsabfragen**: `layout.css.supports.at-rule.enabled`

  Die [`at-rule()`](/de/docs/Web/CSS/Reference/At-rules/@supports#at-rule) Funktion in der {{cssxref("@supports")}} At-Regel ermöglicht es Ihnen zu testen, ob der Browser eine bestimmte CSS-At-Regel unterstützt, z.B. `@supports at-rule(@scope)`. ([Firefox Bug 2060754](https://bugzil.la/2060754)).

- **Audio Session API**: `dom.audio_session.enabled`

  Die [Audio Session API](/de/docs/Web/API/Audio_Session_API) ermöglicht es einer Website anzugeben, wie ihr Audio im Verhältnis zu anderem auf dem Gerät abgespielten Audio verhalten soll, z.B. ob es mitmischen, absenken oder anderes Audio unterbrechen soll. ([Firefox Bug 2055710](https://bugzil.la/2055710)).

- **CSS Grundformen erlauben `farthest-corner` und `closest-corner` Schlüsselwörter**: `layout.css.ellipse-corners.enabled`

  Die Schlüsselwörter `farthest-corner` und `closest-corner` können verwendet werden, um die Radienwerte der {{cssxref("basic-shape/ellipse", "ellipse()")}} und {{cssxref("basic-shape/circle", "circle()")}} CSS-Grundformen anzugeben. ([Firefox Bug 2037673](https://bugzil.la/2037673)).

- **Inhalt mit `line-clamp` abschneiden**: `layout.css.line-clamp.enabled`

  Die {{cssxref("line-clamp")}} CSS-Eigenschaft funktioniert ohne das `-webkit-` Vendor-Präfix und unterstützt jetzt auch das `no-ellipsis` Schlüsselwort und `<string>` Werte zur Auswahl, was angezeigt wird, wo der Text abgeschnitten wird. ([Firefox Bug 2042999](https://bugzil.la/2042999) und [Firefox Bug 2043000](https://bugzil.la/2043000)).

- **Bereichsbasierte benutzerdefinierte Element-Registrierungen**: `dom.scoped-custom-element-registries.enabled`

  Ein [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) kann erstellt und an [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) übergeben werden, sodass eine Shadow-Root benutzerdefinierte Elemente definieren kann, die nicht mit denjenigen im globalen Registry kollidieren. ([Firefox Bug 2018900](https://bugzil.la/2018900)).
  Diese Version fügt auch das `customelementregistry` globale Attribut hinzu, um das Registry auszuwählen, mit dem ein Element aus dem Markup verbunden ist. ([Firefox Bug 2029965](https://bugzil.la/2029965)).

- **Puffer-Grenz-Behauptungen in regulären Ausdrücken**: (Nur Nightly) `javascript.options.experimental.regexp_buffer_boundaries`

  Der [TC39 RegExp buffer boundaries proposal](https://github.com/tc39/proposal-regexp-buffer-boundaries) fügt die [`\A`, `\z`, und `\Z` Behauptungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) zu regulären Ausdrücken hinzu. Diese stimmen mit dem Beginn oder dem Ende der gesamten Eingabe überein, unabhängig davon, ob das {{jsxref("RegExp/multiline", "m")}}-Flag gesetzt ist. ([Firefox Bug 2047706](https://bugzil.la/2047706)).

- **`border-area` Wert für `background-clip`**: `layout.css.background-clip.border-area.enabled`

  Der [`border-area`](/de/docs/Web/CSS/Reference/Properties/background-clip#border-area) Wert der {{cssxref("background-clip")}} CSS-Eigenschaft schneidet den Hintergrund auf den Bereich des vom Element gemalten Rands, was es ermöglicht, ein Verlauf oder Bild als Rand zu verwenden. ([Firefox Bug 2045230](https://bugzil.la/2045230)).
