---
title: Firefox 117 Versionshinweise für Entwickler
short-title: Firefox 117
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [CSS Nesting](/de/docs/Web/CSS/CSS_nesting) Modul wird jetzt in Firefox unterstützt, zusammen mit dem [`&` nesting selector](/de/docs/Web/CSS/Nesting_selector). Dies ermöglicht es Entwicklern, verschachteltes CSS zu schreiben, was die Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets verbessert. Es kann auch helfen, die Dateigröße von CSS zu reduzieren und somit die Downloadgrößen zu senken. ([Firefox Bug 1835066](https://bugzil.la/1835066), [Firefox Bug 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) und [`math-depth`](/de/docs/Web/CSS/Reference/Properties/math-depth) werden jetzt unterstützt, ebenso wie der `math` Wert für die [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#values) Eigenschaft ([Firefox Bug 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) wird nun unterstützt, was ermöglicht, die zuletzt gemerkte Größe eines Elements zu verwenden, wenn möglich, und andernfalls auf `contain-intrinsic-size: none` zurückzugreifen.
  Dies ist nützlich für Grid- und Multispalten-Layouts, um Elemente so zu layouten, als ob sie keine Inhalte hätten, statt mit 0px Höhe ([Firefox Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Inline-SVGs unterstützen jetzt `<script>` Elemente mit den Attributen `type="module"`, `defer` und `async`.
  Dies ermöglicht SVGs die Nutzung moderner JavaScript-Features, einschließlich ES-Modulen, und das asynchrone Laden von Skripten ([Firefox Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) `'strict-dynamic'` Quellen-Ausdruck in `default-src` Direktiven nicht durchgesetzt wurde.
  Das Verhalten entspricht jetzt der Spezifikation, in der die Werte der `default-src` Direktive als Ersatz verwendet werden, wenn `script-src` nicht angegeben ist ([Firefox Bug 1313937](https://bugzil.la/1313937)).

- Der `Range` Header ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn der Wert ein einzelner Byte-Bereich ist (z.B. `bytes=100-200`).
  Dies ermöglicht die Verwendung des `Range` Headers in Cross-Origin-Anfragen, ohne eine Preflight-Anfrage auszulösen, was nützlich ist für Medienanforderungen und das Fortsetzen von Downloads ([Firefox Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann jetzt verwendet werden, um die 2D-Kontextattribute abzurufen, die vom Browser verwendet werden ([Firefox Bug 1517786](https://bugzil.la/1517786)).
- Das statische Mitglied [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird jetzt unterstützt, was es Entwicklern ermöglicht, einen lesbaren Stream aus allen iterierbaren oder asynchron iterierbaren Objekten zu konstruieren ([Firefox Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden jetzt unterstützt, was es Webanwendungen ermöglicht, eingehende und ausgehende WebRTC kodierte Video- und Audio-Frames mithilfe eines [`TransformStream`](/de/docs/Web/API/TransformStream), das in einem Worker läuft, zu ändern.
  Die unterstützten Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame), und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame), sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und das Worker-Event [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) ([Firefox Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt nun von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstelle von direkt [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) sowie die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox Bug [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browser.close` Befehl wurde hinzugefügt, der es Nutzern ermöglicht, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox Bug 1829334](https://bugzil.la/1829334)).
- Der `browsingContext.setViewport` Befehl wurde hinzugefügt, der es Nutzern erlaubt, die Abmessungen eines obersten Browsing-Kontexts zu ändern ([Firefox Bug 1838664](https://bugzil.la/1838664)).
- Das `browsingContext.fragmentNavigated` Ereignis wurde hinzugefügt, das bei gleichseitigen Dokumenten-Navigationen ausgelöst wird ([Firefox Bug 1841039](https://bugzil.la/1841039)).
- Unterstützung für das `background` Argument des `browsingContext.create` Befehls wurde hinzugefügt, das den neuen Kontext zwingt, im Hintergrund erstellt zu werden. Dieses Argument ist optional und standardmäßig auf `false` gesetzt, was bedeutet, dass `browsingContext.create` nun standardmäßig neue Kontexte im Vordergrund öffnet ([Firefox Bug 1843507](https://bugzil.la/1843507)).
- Unterstützung für das `clip` Argument des `browsingContext.captureScreenshot` Befehls wurde hinzugefügt, welches es erlaubt, den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element zu beschränken. Beim Zuschneiden auf ein Element kann optional das Element vor dem Screenshot in den Sichtbereich gescrollt werden ([Firefox Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse, die mit einer Navigation zusammenhängen, liefern nun eine `navigation` id, die eine `UUID` ist, die eine spezifische Navigation identifiziert. Diese Eigenschaft ist in der Antwort von `browsingContext.navigate`, in den `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` Ereignissen, sowie in allen `network` Ereignissen verfügbar, die für eine Navigationsanforderung erstellt wurden ([Firefox Bug 1763122](https://bugzil.la/1763122), [Firefox Bug 1789484](https://bugzil.la/1789484), [Firefox Bug 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network` Ereignissen werden nun als `network.BytesValue` serialisiert, was eine bessere Unterstützung für nicht-UTF8 Werte bietet ([Firefox Bug 1842619](https://bugzil.la/1842619)).
- Der `browsingContext.create` Befehl wartet nun, bis der erstellte Kontext eine gültige Größe hat ([Firefox Bug 1847044](https://bugzil.la/1847044)).

### Entwicklertools

- Der Netzwerk-Monitor zeigt nun Informationen über verproxte Anfragen, einschließlich der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version im [Kopfzeilen-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox Bug 1707192](https://bugzil.la/1707192)).

- Der vom [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählte Bereich kann jetzt mit Tastaturkürzeln in der Größe verändert und verschoben werden.
  Durch Drücken der Pfeiltasten wird der ausgewählte Bereich verschoben, während durch Drücken von <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) der ausgewählte Bereich in der Größe verändert wird.
  Durch Halten der <kbd>Shift</kbd> Taste werden die Bewegungs- und Größenänderungsaktionen bei Verwendung dieser Tastenkombinationen beschleunigt ([Firefox Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Highlight-Pseudo-Elementen nicht unterstützt werden ([`::highlight()`](/de/docs/Web/CSS/::highlight), [`::target-text`](/de/docs/Web/CSS/::target-text), [`::spelling-error`](/de/docs/Web/CSS/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/::grammar-error), und [`::selection`](/de/docs/Web/CSS/::selection)) werden nun im CSS-Regel-Panel des [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) gemeldet ([Firefox Bug 1842157](https://bugzil.la/1842157)).
