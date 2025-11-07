---
title: Firefox 117 Versionshinweise für Entwickler
short-title: Firefox 117
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Dieser Artikel bietet Informationen zu Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [CSS Nesting](/de/docs/Web/CSS/CSS_nesting) Modul wird jetzt in Firefox unterstützt, zusammen mit dem [`&` nesting selector](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector). Dies ermöglicht es Entwicklern, verschachteltes CSS zu schreiben, was zur Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets beiträgt. Es kann auch helfen, die Dateigröße von CSS zu reduzieren, was wiederum die Downloadzeiten verkürzt. ([Firefox Bug 1835066](https://bugzil.la/1835066), [Firefox Bug 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) und [`math-depth`](/de/docs/Web/CSS/Reference/Properties/math-depth) werden nun unterstützt, ebenso wie der `math`-Wert für die Eigenschaft [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#values) ([Firefox Bug 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) wird jetzt unterstützt. Diese erlaubt die Verwendung der zuletzt gemerkten Größe eines Elements, falls möglich, und wechselt andernfalls zu `contain-intrinsic-size: none`. Dies ist nützlich für Grid- und Mehrspaltenlayouts, um Elemente so anzuordnen, als hätten sie keinen Inhalt, anstatt eine Höhe von 0px zu haben ([Firefox Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Inline-SVGs unterstützen jetzt `<script>`-Elemente mit den Attributen `type="module"`, `defer` und `async`. Damit können SVGs moderne JavaScript-Funktionen nutzen, einschließlich ES-Module, und Skripte asynchron laden ([Firefox Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) `'strict-dynamic'` Quellausdruck in `default-src` Direktiven nicht durchgesetzt wurde. Das Verhalten entspricht nun der Spezifikation, bei der die `default-src`-Direktiven als Fallback verwendet werden, wenn `script-src` nicht angegeben ist ([Firefox Bug 1313937](https://bugzil.la/1313937)).

- Der `Range`-Header ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn der Wert ein einzelner Bytebereich ist (z. B. `bytes=100-200`). Dies ermöglicht die Verwendung des `Range`-Headers in Cross-Origin-Anfragen, ohne eine Preflight-Anfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen ([Firefox Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann jetzt verwendet werden, um die im Browser verwendeten 2D-Kontextattribute zu erhalten ([Firefox Bug 1517786](https://bugzil.la/1517786)).
- Das statische Element [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird jetzt unterstützt, sodass Entwickler einen lesbaren Stream aus jedem iterierbaren oder asynchron iterierbaren Objekt konstruieren können ([Firefox Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden nun unterstützt. Damit können Webanwendungen eingehende und ausgehende WebRTC-codierte Video- und Audiorahmen mit einem [`TransformStream`](/de/docs/Web/API/TransformStream) in einem Worker modifizieren. Die unterstützten Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame), und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame), sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und das Worker [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis ([Firefox Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt nun von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstatt direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox Bug [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browser.close`-Befehl wurde hinzugefügt, der es Benutzern ermöglicht, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox Bug 1829334](https://bugzil.la/1829334)).
- Der `browsingContext.setViewport`-Befehl wurde hinzugefügt, der es Benutzern ermöglicht, die Dimensionen eines obersten Browsing-Context zu ändern ([Firefox Bug 1838664](https://bugzil.la/1838664)).
- Das Ereignis `browsingContext.fragmentNavigated` wurde hinzugefügt, das für gleichnamige Dokumentnavigationen ausgegeben wird ([Firefox Bug 1841039](https://bugzil.la/1841039)).
- Unterstützung für das `background`-Argument des Befehls `browsingContext.create` wurde hinzugefügt. Dieses Argument erzwingt, dass der neue Kontext im Hintergrund erstellt wird. Dieses Argument ist optional und standardmäßig `false`, was bedeutet, dass `browsingContext.create` jetzt neue Kontexte standardmäßig im Vordergrund öffnet ([Firefox Bug 1843507](https://bugzil.la/1843507)).
- Unterstützung für das `clip`-Argument des Befehls `browsingContext.captureScreenshot` wurde hinzugefügt, das es ermöglicht, den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element zu beschränken. Beim Zuschneiden auf ein Element können Sie optional das Element in den Sichtbereich scrollen, bevor der Screenshot gemacht wird ([Firefox Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse, die mit einer Navigation zusammenhängen, werden nun eine `navigation`-ID bereitstellen, die eine `UUID` ist, die eine spezifische Navigation identifiziert. Diese Eigenschaft ist verfügbar in der `browsingContext.navigate`-Antwort, in den `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated`-Ereignissen sowie in allen `network`-Ereignissen, die für eine Navigationsanfrage erstellt wurden ([Firefox Bug 1763122](https://bugzil.la/1763122), [Firefox Bug 1789484](https://bugzil.la/1789484), [Firefox Bug 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network`-Ereignissen werden jetzt als `network.BytesValue` serialisiert, was eine bessere Unterstützung für nicht-UTF8-Werte bietet ([Firefox Bug 1842619](https://bugzil.la/1842619)).
- Der `browsingContext.create`-Befehl wird nun warten, bis der erstellte Kontext eine gültige Größe hat ([Firefox Bug 1847044](https://bugzil.la/1847044)).

### Entwicklertools

- Der Netzwerkmonitor zeigt jetzt Informationen über vermittelte Anfragen an, einschließlich der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version im [Headers-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox Bug 1707192](https://bugzil.la/1707192)).

- Der Bereich, der mit dem [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählt wurde, kann nun mit Tastenkombinationen verändert und verschoben werden. Durch Drücken der Pfeiltasten wird der ausgewählte Bereich verschoben, während <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) den ausgewählten Bereich vergrößern oder verkleinern. Mit der <kbd>Umschalt</kbd>-Taste werden die Bewegungs- und Größenänderungsaktionen bei Verwendung dieser Tastenkombinationen beschleunigt ([Firefox Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Highlight-Pseudoelementen nicht unterstützt werden ([`::highlight()`](/de/docs/Web/CSS/Reference/Selectors/::highlight), [`::target-text`](/de/docs/Web/CSS/Reference/Selectors/::target-text), [`::spelling-error`](/de/docs/Web/CSS/Reference/Selectors/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/Reference/Selectors/::grammar-error) und [`::selection`](/de/docs/Web/CSS/Reference/Selectors/::selection)), werden nun im [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) CSS-Regel-Panel gemeldet ([Firefox Bug 1842157](https://bugzil.la/1842157)).
