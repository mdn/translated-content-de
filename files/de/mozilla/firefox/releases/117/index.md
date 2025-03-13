---
title: Firefox 117 für Entwickler
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [CSS Nesting](/de/docs/Web/CSS/CSS_nesting)-Modul wird nun in Firefox unterstützt, zusammen mit dem [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector). Dies ermöglicht es Entwicklern, verschachtelte CSS zu schreiben, was zur Lesbarkeit, Modularität und Wartbarkeit von CSS-Stilen beiträgt. Es kann auch helfen, die Dateigröße von CSS zu reduzieren und damit die Downloadzeiten zu verkürzen. ([Firefox Bug 1835066](https://bugzil.la/1835066), [Firefox Bug 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/math-style) und [`math-depth`](/de/docs/Web/CSS/math-depth) werden nun unterstützt, ebenso wie der `math`-Wert für die Eigenschaft [`font-size`](/de/docs/Web/CSS/font-size#values) ([Firefox Bug 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/contain-intrinsic-size) wird nun unterstützt, was es ermöglicht, die zuletzt verwendete Größe eines Elements zu nutzen, falls möglich, und andernfalls auf `contain-intrinsic-size: none` zurückzufallen. Dies ist nützlich für Raster- und Mehrspaltenlayout, um Elemente so anzuordnen, als ob sie keine Inhalte hätten, anstatt eine Höhe von 0px zu nutzen ([Firefox Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Inline-SVGs unterstützen jetzt `<script>`-Elemente mit den Attributen `type="module"`, `defer` und `async`. Dies ermöglicht es SVGs, moderne JavaScript-Funktionen zu nutzen, einschließlich ES-Module, und Skripte asynchron zu laden ([Firefox Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP)-Quellenausdruck `'strict-dynamic'` in `default-src`-Direktiven nicht durchgesetzt wurde.
  Das Verhalten entspricht nun der Spezifikation, bei der `default-src`-Direktivwerte als Fallback verwendet werden, wenn `script-src` nicht angegeben ist ([Firefox Bug 1313937](https://bugzil.la/1313937)).

- Der `Range`-Header ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn der Wert ein einzelner Bytebereich ist (z.B. `bytes=100-200`).
  Dies ermöglicht es, den `Range`-Header in Cross-Origin-Anfragen zu verwenden, ohne eine Optionsabfrage auszulösen, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen ([Firefox Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann nun verwendet werden, um die im Browser verwendeten 2D-Kontextattribute abzurufen ([Firefox Bug 1517786](https://bugzil.la/1517786)).
- Das statische Element [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird nun unterstützt, was es Entwicklern ermöglicht, einen lesbaren Stream aus jedem iterierbaren oder asynchron iterierbaren Objekt zu erstellen ([Firefox Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden nun unterstützt, wodurch Webanwendungen eingehende und ausgehende WebRTC-kodierte Video- und Audioframes mit einem [`TransformStream`](/de/docs/Web/API/TransformStream), das in einem Worker ausgeführt wird, modifizieren können.
  Die unterstützten Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame), und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame), sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und Worker-Event [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) ([Firefox Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt nun von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstatt direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox Bug [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browser.close`-Befehl wurde hinzugefügt, der es Nutzern ermöglicht, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox Bug 1829334](https://bugzil.la/1829334)).
- Der `browsingContext.setViewport`-Befehl wurde hinzugefügt, der es Nutzern ermöglicht, die Abmessungen eines Browsing-Contexts auf oberster Ebene zu ändern ([Firefox Bug 1838664](https://bugzil.la/1838664)).
- Das `browsingContext.fragmentNavigated`-Ereignis wurde hinzugefügt, das bei Navigationen im selben Dokument ausgelöst wird ([Firefox Bug 1841039](https://bugzil.la/1841039)).
- Unterstützung für das `background`-Argument des `browsingContext.create`-Befehls wurde hinzugefügt, das erzwingt, dass der neue Kontext im Hintergrund erstellt wird. Dieses Argument ist optional und standardmäßig `false`, was bedeutet, dass `browsingContext.create` nun standardmäßig neue Kontexte im Vordergrund öffnet ([Firefox Bug 1843507](https://bugzil.la/1843507)).
- Unterstützung für das `clip`-Argument des `browsingContext.captureScreenshot`-Befehls wurde hinzugefügt, das es ermöglicht, den Screenshot entweder auf einen bestimmten Bereich oder ein Element zu beschränken. Beim Beschneiden auf ein Element können Sie optional das Element in den Ansichtsbereich scrollen, bevor der Screenshot aufgenommen wird ([Firefox Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse im Zusammenhang mit einer Navigation werden nun eine `navigation`-ID bereitstellen, die eine `UUID` ist, die eine spezifische Navigation identifiziert. Diese Eigenschaft ist in der `browsingContext.navigate`-Antwort, in den Ereignissen `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` sowie in allen bei einer Navigationsanfrage erstellten `network`-Ereignissen verfügbar ([Firefox Bug 1763122](https://bugzil.la/1763122), [Firefox Bug 1789484](https://bugzil.la/1789484), [Firefox Bug 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network`-Ereignissen werden nun als `network.BytesValue` serialisiert, was eine bessere Unterstützung für Nicht-UTF8-Werte bietet ([Firefox Bug 1842619](https://bugzil.la/1842619)).
- Der `browsingContext.create`-Befehl wird nun warten, bis der erstellte Kontext eine gültige Größe hat ([Firefox Bug 1847044](https://bugzil.la/1847044)).

### Entwicklertools

- Der Netzwerk-Monitor zeigt jetzt Informationen über Proxy-Anfragen, einschließlich der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version im [Header-Bereich](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) an ([Firefox Bug 1707192](https://bugzil.la/1707192)).

- Der Bereich, der vom [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählt wurde, kann jetzt mit Tastenkombinationen verschoben und in der Größe verändert werden.
  Das Drücken der Pfeiltasten bewegt den ausgewählten Bereich, während <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) den ausgewählten Bereich vergrößern oder verkleinern.
  Das Halten der <kbd>Umschalttaste</kbd> beschleunigt die Bewegungs- und Größenänderungsaktionen bei Verwendung dieser Tastenkombinationen ([Firefox Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Hervorhebungs-Pseudo-Elementen ([`::highlight()`](/de/docs/Web/CSS/::highlight), [`::target-text`](/de/docs/Web/CSS/::target-text), [`::spelling-error`](/de/docs/Web/CSS/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/::grammar-error), und [`::selection`](/de/docs/Web/CSS/::selection)) nicht unterstützt werden, werden nun im CSS-Regelbereich des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) gemeldet ([Firefox Bug 1842157](https://bugzil.la/1842157)).

## Ältere Versionen

{{Firefox_for_developers}}
