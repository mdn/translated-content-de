---
title: Firefox 117 Versionshinweise für Entwickler
short-title: Firefox 117
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Das [CSS Nesting](/de/docs/Web/CSS/CSS_nesting) Modul wird nun in Firefox unterstützt, zusammen mit dem [`&` nesting selector](/de/docs/Web/CSS/Nesting_selector). Dies ermöglicht es Entwicklern, verschachteltes CSS zu schreiben, was zur Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets beiträgt. Es kann auch die CSS-Dateigröße potenziell reduzieren, was die Downloadgrößen verringert. ([Firefox Bug 1835066](https://bugzil.la/1835066), [Firefox Bug 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/math-style) und [`math-depth`](/de/docs/Web/CSS/math-depth) werden jetzt unterstützt, ebenso wie der `math` Wert für die [`font-size`](/de/docs/Web/CSS/font-size#values) Eigenschaft ([Firefox Bug 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/contain-intrinsic-size) wird jetzt unterstützt, was es ermöglicht, die zuletzt erinnerten Größen eines Elements zu verwenden, falls möglich, und ansonsten auf `contain-intrinsic-size: none` zurückzufallen. Dies ist nützlich für Grid- und mehrspaltige Layouts, um Elemente so auszulegen, als hätten sie keinen Inhalt anstelle einer Höhe von 0px ([Firefox Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine nennenswerten Änderungen.

### SVG

- Inline SVGs unterstützen nun `<script>` Elemente mit `type="module"`, `defer` und `async` Attributen. Dies ermöglicht SVGs die Nutzung moderner JavaScript-Funktionen, einschließlich ES-Module, und das asynchrone Laden von Skripten ([Firefox Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) `'strict-dynamic'` Quellenausdruck in `default-src` Direktiven nicht durchgesetzt wurde. Das Verhalten entspricht jetzt der Spezifikation, bei der `default-src` Direktivwerte als Fallback verwendet werden, wenn `script-src` nicht bereitgestellt wird ([Firefox Bug 1313937](https://bugzil.la/1313937)).

- Der `Range` Header ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn der Wert ein einzelner Bytebereich ist (z.B. `bytes=100-200`). Dies ermöglicht die Verwendung des `Range` Headers bei Cross-Origin-Anfragen, ohne eine Vorab-Anfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen ([Firefox Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann jetzt verwendet werden, um die 2D-Kontextattribute zu erhalten, die vom Browser genutzt werden ([Firefox Bug 1517786](https://bugzil.la/1517786)).
- Das statische Mitglied [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird nun unterstützt. Dies erlaubt Entwicklern, einen lesbaren Stream aus jedem iterierbaren oder asynchron iterierbaren Objekt zu erstellen ([Firefox Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden nun unterstützt. Dies ermöglicht Webanwendungen, eingehende und ausgehende WebRTC-kodierte Video- und Audio-Frames mithilfe eines in einem Worker laufenden [`TransformStream`](/de/docs/Web/API/TransformStream) zu modifizieren. Die unterstützten Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und den Worker [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Event ([Firefox Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt jetzt von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstelle von direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/deleteRule) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox Bug [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browser.close` Befehl wurde hinzugefügt, der es Benutzern ermöglicht, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox Bug 1829334](https://bugzil.la/1829334)).
- Der `browsingContext.setViewport` Befehl wurde hinzugefügt, der es Benutzern erlaubt, die Abmessungen eines Top-Level-Browsing-Kontextes zu ändern ([Firefox Bug 1838664](https://bugzil.la/1838664)).
- Das `browsingContext.fragmentNavigated` Ereignis wurde hinzugefügt, das für gleichseitige Navigationen ausgelöst wird ([Firefox Bug 1841039](https://bugzil.la/1841039)).
- Unterstützung für das `background` Argument des `browsingContext.create` Befehls wurde hinzugefügt, was erzwingen wird, dass der neue Kontext im Hintergrund erstellt wird. Dieses Argument ist optional und standardmäßig `false`, was bedeutet, dass `browsingContext.create` jetzt standardmäßig neue Kontexte im Vordergrund öffnet ([Firefox Bug 1843507](https://bugzil.la/1843507)).
- Unterstützung für das `clip` Argument des `browsingContext.captureScreenshot` Befehls wurde hinzugefügt, das es ermöglicht, den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element zu beschränken. Beim Zurechtschneiden auf ein Element können Sie optional das Element vor der Aufnahme des Screenshots in den sichtbaren Bereich scrollen ([Firefox Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse im Zusammenhang mit einer Navigation werden jetzt eine `navigation` ID bereitstellen, die eine `UUID` zur Identifizierung einer spezifischen Navigation ist. Diese Eigenschaft ist in der `browsingContext.navigate` Antwort, in den `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` Ereignissen sowie in allen `network` Ereignissen, die für eine Navigationsanfrage erstellt wurden, verfügbar ([Firefox Bug 1763122](https://bugzil.la/1763122), [Firefox Bug 1789484](https://bugzil.la/1789484), [Firefox Bug 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network` Ereignissen werden jetzt als `network.BytesValue` serialisiert, was eine bessere Unterstützung für nicht-UTF8-Werte bietet ([Firefox Bug 1842619](https://bugzil.la/1842619)).
- Der `browsingContext.create` Befehl wartet jetzt, bis der erstellte Kontext eine gültige Größe hat ([Firefox Bug 1847044](https://bugzil.la/1847044)).

### Entwicklerwerkzeuge

- Der Netzwerk-Monitor zeigt nun Informationen über Proxyanfragen an, inklusive der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version im [Headers Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox Bug 1707192](https://bugzil.la/1707192)).

- Das vom [Measuring Tool](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählte Gebiet kann nun mit Tastenkombinationen angepasst und verschoben werden. Mit den Pfeiltasten wird das ausgewählte Gebiet verschoben, während das Drücken von <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) das ausgewählte Gebiet vergrößert. Das Halten der <kbd>Shift</kbd>-Taste beschleunigt die Bewegungs- und Größenänderungsaktionen bei Verwendung dieser Tastenkombinationen ([Firefox Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Pseudo-Elementen für Hervorhebungen nicht unterstützt werden ([`::highlight()`](/de/docs/Web/CSS/::highlight), [`::target-text`](/de/docs/Web/CSS/::target-text), [`::spelling-error`](/de/docs/Web/CSS/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/::grammar-error), und [`::selection`](/de/docs/Web/CSS/::selection)), werden jetzt im CSS-Regel-Panel des [Seiten-Inspektors](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) gemeldet ([Firefox Bug 1842157](https://bugzil.la/1842157)).
