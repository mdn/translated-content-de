---
title: Firefox 117 Versionshinweise für Entwickler
short-title: Firefox 117
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Das [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/Guides/Nesting) wird jetzt in Firefox unterstützt, zusammen mit dem [`&`-Verschachtelungsauswahl](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector). Dies ermöglicht es Entwicklern, verschachtelte CSS zu schreiben, was die Lesbarkeit, Modularität und Wartbarkeit von CSS-Stilblättern verbessert. Es kann auch helfen, die CSS-Dateigröße zu reduzieren und somit die Download-Größe zu verringern. ([Firefox-Bug 1835066](https://bugzil.la/1835066), [Firefox-Bug 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) und [`math-depth`](/de/docs/Web/CSS/Reference/Properties/math-depth) werden jetzt unterstützt, ebenso wie der `math`-Wert für die [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#values)-Eigenschaft ([Firefox-Bug 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) wird jetzt unterstützt, wodurch die letzte gemerkte Größe eines Elements verwendet wird, wenn möglich, und ansonsten auf `contain-intrinsic-size: none` zurückgegriffen wird. Dies ist nützlich für Raster- und Mehrspaltenlayouts, um Elemente so zu layouten, als hätten sie keinen Inhalt anstelle von 0px Höhe ([Firefox-Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine nennenswerten Änderungen.

### SVG

- Inline-SVGs unterstützen jetzt `<script>`-Elemente mit den Attributen `type="module"`, `defer` und `async`. Dies ermöglicht es SVGs, moderne JavaScript-Funktionen zu nutzen, einschließlich ES-Module, und Skripte asynchron zu laden ([Firefox-Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Bug wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) `'strict-dynamic'`-Quellenausdruck in `default-src`-Direktiven nicht durchgesetzt wurde. Das Verhalten entspricht nun der Spezifikation, bei der `default-src`-Direktivenwerte als Fallback verwendet werden, wenn `script-src` nicht bereitgestellt wird ([Firefox-Bug 1313937](https://bugzil.la/1313937)).

- Der `Range`-Header ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anforderungs-Header")}}, wenn der Wert ein einzelner Bytebereich ist (z. B. `bytes=100-200`). Dies ermöglicht es, den `Range`-Header in Cross-Origin-Anfragen zu verwenden, ohne eine Voranfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen ([Firefox-Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann jetzt verwendet werden, um die vom Browser verwendeten 2D-Kontextattribute abzurufen ([Firefox-Bug 1517786](https://bugzil.la/1517786)).
- Das statische Mitglied [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird jetzt unterstützt und ermöglicht es Entwicklern, einen lesbaren Stream aus einem beliebigen iterierbaren oder asynchronen iterierbaren Objekt zu erstellen ([Firefox-Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden jetzt unterstützt, was es Webanwendungen ermöglicht, eingehende und ausgehende WebRTC-kodierte Video- und Audio-Frames mit einem [`TransformStream`](/de/docs/Web/API/TransformStream) zu modifizieren, der in einem Worker ausgeführt wird. Die unterstützten Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame), und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und das Worker-Event [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) ([Firefox-Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt jetzt von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstelle direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert sie zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox-Bug [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browser.close`-Befehl wurde hinzugefügt, der es Benutzern ermöglicht, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox-Bug 1829334](https://bugzil.la/1829334)).
- Der `browsingContext.setViewport`-Befehl wurde hinzugefügt, der es Benutzern ermöglicht, die Dimensionen eines obersten Browsing-Kontexts zu ändern ([Firefox-Bug 1838664](https://bugzil.la/1838664)).
- Das Ereignis `browsingContext.fragmentNavigated` wurde hinzugefügt, das bei Navigierungen im selben Dokument ausgelöst wird ([Firefox-Bug 1841039](https://bugzil.la/1841039)).
- Unterstützung für das Argument `background` des Befehls `browsingContext.create` wurde hinzugefügt, das den neuen Kontext im Hintergrund erstellen lässt. Dieses Argument ist optional und standardmäßig auf `false`, was bedeutet, dass `browsingContext.create` jetzt standardmäßig neue Kontexte im Vordergrund öffnet ([Firefox-Bug 1843507](https://bugzil.la/1843507)).
- Unterstützung für das Argument `clip` des Befehls `browsingContext.captureScreenshot` wurde hinzugefügt, das es ermöglicht, den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element zu beschränken. Beim Clipping auf ein Element kann optional das Element ins Sichtfeld gescrollt werden, bevor der Screenshot aufgenommen wird ([Firefox-Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse, die mit einer Navigation zusammenhängen, geben jetzt eine `navigation`-ID an, die eine `UUID` ist, die eine spezifische Navigation identifiziert. Diese Eigenschaft ist in der Antwort von `browsingContext.navigate`, in den Ereignissen `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` sowie in allen `network`-Ereignissen vorhanden, die für eine Navigationsanforderung erstellt wurden ([Firefox-Bug 1763122](https://bugzil.la/1763122), [Firefox-Bug 1789484](https://bugzil.la/1789484), [Firefox-Bug 1805405](https://bugzil.la/1805405)).
- `Headers` und `Cookies` in `network`-Ereignissen werden jetzt als `network.BytesValue` serialisiert, was eine bessere Unterstützung für nicht-UTF8-Werte bietet ([Firefox-Bug 1842619](https://bugzil.la/1842619)).
- Der Befehl `browsingContext.create` wartet jetzt, bis der erstellte Kontext eine gültige Größe hat ([Firefox-Bug 1847044](https://bugzil.la/1847044)).

### Entwicklerwerkzeuge

- Der Netzwerk-Monitor zeigt jetzt Informationen über über Proxy weitergeleitete Anfragen, einschließlich der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version, im [Header-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox-Bug 1707192](https://bugzil.la/1707192)).

- Der Bereich, der durch das [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählt wurde, kann jetzt mit Tastenkombinationen verschoben und in der Größe verändert werden. Durch Drücken der Pfeiltasten wird der ausgewählte Bereich verschoben, während durch Drücken von <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) der ausgewählte Bereich in der Größe verändert wird. Das Gedrückthalten der <kbd>Umschalttaste</kbd> beschleunigt das Bewegen und Ändern der Größe beim Verwenden dieser Tastenkombinationen ([Firefox-Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Highlight-Pseudoelementen nicht unterstützt werden ([`::highlight()`](/de/docs/Web/CSS/Reference/Selectors/::highlight), [`::target-text`](/de/docs/Web/CSS/Reference/Selectors/::target-text), [`::spelling-error`](/de/docs/Web/CSS/Reference/Selectors/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/Reference/Selectors/::grammar-error), und [`::selection`](/de/docs/Web/CSS/Reference/Selectors/::selection)), werden jetzt im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) CSS-Regel-Panel gemeldet ([Firefox-Bug 1842157](https://bugzil.la/1842157)).
