---
title: Firefox 117 für Entwickler
short-title: Firefox 117
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [CSS Nesting](/de/docs/Web/CSS/CSS_nesting) Modul wird jetzt in Firefox unterstützt, zusammen mit dem [`&` nesting selector](/de/docs/Web/CSS/Nesting_selector). Dies ermöglicht es Entwicklern, verschachteltes CSS zu schreiben, was die Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets verbessert. Es kann auch dazu beitragen, die CSS-Dateigröße zu verringern, wodurch die Download-Größen reduziert werden. ([Firefox Bug 1835066](https://bugzil.la/1835066), [Firefox Bug 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/math-style) und [`math-depth`](/de/docs/Web/CSS/math-depth) werden jetzt unterstützt, ebenso wie der `math` Wert für die [`font-size`](/de/docs/Web/CSS/font-size#values) Eigenschaft ([Firefox Bug 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/contain-intrinsic-size) wird jetzt unterstützt, was es ermöglicht, die zuletzt gemerkte Größe eines Elements zu verwenden, wenn möglich, und andernfalls auf `contain-intrinsic-size: none` zurückzufallen.
  Dies ist nützlich für Grid- und Mehrspalten-Layouts, um Elemente so anzuordnen, als ob sie keinen Inhalt hätten, anstatt eine Höhe von 0px zu haben ([Firefox Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Inline SVGs unterstützen jetzt `<script>` Elemente mit den Attributen `type="module"`, `defer` und `async`.
  Dadurch können SVGs moderne JavaScript-Funktionen nutzen, einschließlich ES-Module, und Skripte asynchron laden ([Firefox Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) `'strict-dynamic'` Quellausdruck in `default-src` Direktiven nicht durchgesetzt wurde.
  Das Verhalten entspricht jetzt der Spezifikation, bei der `default-src` Direktivenwerte als Fallback verwendet werden, wenn `script-src` nicht angegeben ist ([Firefox Bug 1313937](https://bugzil.la/1313937)).

- Der `Range` Header ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn der Wert einen einzelnen Byterahmen darstellt (z.B. `bytes=100-200`).
  Dadurch kann der `Range` Header in Cross-Origin-Anfragen verwendet werden, ohne eine Preflight-Anfrage auszulösen, was nützlich ist für das Anfordern von Medien und das Fortsetzen von Downloads ([Firefox Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann jetzt verwendet werden, um die 2D-Kontextattribute abzufragen, die vom Browser verwendet werden ([Firefox Bug 1517786](https://bugzil.la/1517786)).
- Das statische Mitglied [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird jetzt unterstützt, wodurch Entwickler einen lesbaren Stream von jedem iterierbaren oder asynchron iterierbaren Objekt konstruieren können ([Firefox Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden jetzt unterstützt, sodass Webanwendungen eingehende und ausgehende WebRTC-kodierte Video- und Audioframes mithilfe eines [`TransformStream`](/de/docs/Web/API/TransformStream) modifizieren können, der in einem Worker läuft.
  Unterstützte Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame), sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und das Worker-Event [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) ([Firefox Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt jetzt von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstatt direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox Bug [1846251](https://bugzil.la/1846251)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browser.close` Befehl wurde hinzugefügt, der es Benutzern ermöglicht, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox Bug 1829334](https://bugzil.la/1829334)).
- Der `browsingContext.setViewport` Befehl wurde hinzugefügt, der es Benutzern ermöglicht, die Dimensionen eines obersten Browsing-Kontextes zu ändern ([Firefox Bug 1838664](https://bugzil.la/1838664)).
- Das `browsingContext.fragmentNavigated` Ereignis wurde hinzugefügt, das für gleiche Dokumentnavigationen emittiert wird ([Firefox Bug 1841039](https://bugzil.la/1841039)).
- Unterstützung für das `background` Argument des `browsingContext.create` Befehls wurde hinzugefügt, das den neuen Kontext im Hintergrund erstellt. Dieses Argument ist optional und standardmäßig auf `false` gesetzt, was bedeutet, dass `browsingContext.create` jetzt neue Kontexte standardmäßig im Vordergrund öffnet ([Firefox Bug 1843507](https://bugzil.la/1843507)).
- Unterstützung für das `clip` Argument des `browsingContext.captureScreenshot` Befehls wurde hinzugefügt, das es ermöglicht, den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element zu beschränken. Beim Beschneiden auf ein Element kann man optional das Element in den Sichtbereich scrollen, bevor der Screenshot erstellt wird ([Firefox Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse im Zusammenhang mit einer Navigation liefern jetzt eine `navigation` ID, die eine `UUID` ist, die eine spezifische Navigation identifiziert. Diese Eigenschaft ist in der Antwort `browsingContext.navigate`, in den Ereignissen `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` sowie in allen `network` Ereignissen, die für eine Navigationsanfrage erstellt wurden, verfügbar ([Firefox Bug 1763122](https://bugzil.la/1763122), [Firefox Bug 1789484](https://bugzil.la/1789484), [Firefox Bug 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network` Ereignissen werden jetzt als `network.BytesValue` serialisiert, was eine bessere Unterstützung für nicht-UTF8-Werte bietet ([Firefox Bug 1842619](https://bugzil.la/1842619)).
- Der `browsingContext.create` Befehl wartet jetzt, bis der erstellte Kontext eine gültige Größe hat ([Firefox Bug 1847044](https://bugzil.la/1847044)).

### Entwicklerwerkzeuge

- Der Netzwerkmonitor zeigt jetzt Informationen über Proxyanfragen an, einschließlich der Proxyadresse, des Proxystatus und der Proxy-HTTP-Version im [Header-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox Bug 1707192](https://bugzil.la/1707192)).

- Der vom [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählte Bereich kann jetzt mit Tastaturkürzeln verschoben und in seiner Größe verändert werden.
  Durch Drücken der Pfeiltasten wird der ausgewählte Bereich verschoben, während <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) den ausgewählten Bereich vergrößern oder verkleinern.
  Durch Halten der <kbd>Umschalt</kbd>-Taste werden die Bewegungs- und Größenänderungsaktionen bei Verwendung dieser Tastenkombinationen beschleunigt ([Firefox Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Highlight-Pseudoelementen ([`::highlight()`](/de/docs/Web/CSS/::highlight), [`::target-text`](/de/docs/Web/CSS/::target-text), [`::spelling-error`](/de/docs/Web/CSS/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/::grammar-error) und [`::selection`](/de/docs/Web/CSS/::selection)) nicht unterstützt werden, werden jetzt im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) im CSS-Regelpaneel gemeldet ([Firefox Bug 1842157](https://bugzil.la/1842157)).
