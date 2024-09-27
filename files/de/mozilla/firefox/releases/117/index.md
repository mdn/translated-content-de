---
title: Firefox 117 für Entwickler
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: f6d38a35950a07266a18518506a7fc20b358492c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [CSS Nesting](/de/docs/Web/CSS/CSS_nesting) Modul wird jetzt in Firefox unterstützt, zusammen mit dem [`&` nesting selector](/de/docs/Web/CSS/Nesting_selector). Dies ermöglicht es Entwicklern, verschachteltes CSS zu schreiben, was zur Lesbarkeit, Modularität und Wartbarkeit von CSS-Stilvorlagen beiträgt. Es hilft auch potenziell, die CSS-Dateigröße zu reduzieren, wodurch sich die Downloadgrößen verringern. ([Firefox Bug 1835066](https://bugzil.la/1835066), [Firefox Bug 1840781](https://bugzil.la/1840781))

- Die [`math-style`](/de/docs/Web/CSS/math-style) und [`math-depth`](/de/docs/Web/CSS/math-depth) Eigenschaften werden jetzt unterstützt, ebenso wie der `math` Wert für die [`font-size`](/de/docs/Web/CSS/font-size#values) Eigenschaft ([Firefox Bug 1845516](https://bugzil.la/1845516)).

- Die [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/contain-intrinsic-size) Syntax wird jetzt unterstützt, was ermöglicht, die zuletzt gespeicherte Größe eines Elements zu verwenden, falls möglich, und andernfalls auf `contain-intrinsic-size: none` zurückzufallen.
  Dies ist nützlich für Grid- und Mehrspaltenlayouts, um Elemente so zu layouten, als hätten sie keinen Inhalt statt einer Höhe von 0px ([Firefox Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Inline-SVGs unterstützen nun `<script>` Elemente mit den Attributen `type="module"`, `defer` und `async`.
  Dies ermöglicht SVGs, moderne JavaScript-Funktionen einschließlich ES-Module zu nutzen und Skripte asynchron zu laden ([Firefox Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Bug wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/CSP) `'strict-dynamic'` Quellen-Ausdruck in `default-src` Direktiven nicht durchgesetzt wurde.
  Das Verhalten entspricht nun der Spezifikation, bei der `default-src` Direktivenwerte als Fallback verwendet werden, wenn `script-src` nicht angegeben ist ([Firefox Bug 1313937](https://bugzil.la/1313937)).

- Der `Range` Header ist jetzt ein [CORS-safelisted request header](/de/docs/Glossary/CORS-safelisted_request_header), wenn der Wert einen einzelnen Bytebereich darstellt (z. B. `bytes=100-200`).
  Dadurch kann der `Range` Header in Cross-Origin-Anfragen verwendet werden, ohne eine Vorauswahl-Anfrage auszulösen, was nützlich zum Anfordern von Medien und Fortsetzen von Downloads ist ([Firefox Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann jetzt verwendet werden, um die im Browser verwendeten 2D-Kontextattribute abzurufen ([Firefox Bug 1517786](https://bugzil.la/1517786)).
- Der statische Member [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird jetzt unterstützt und erlaubt es Entwicklern, einen lesbaren Stream aus jedem iterierbaren oder asynchron iterierbaren Objekt zu konstruieren ([Firefox Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden nun unterstützt, wodurch Webanwendungen eingehende und ausgehende WebRTC-codierte Video- und Audioframes mit einem [`TransformStream`](/de/docs/Web/API/TransformStream) verarbeitend in einem Worker modifizieren können.
  Die unterstützten Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame), und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame), sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und das Worker [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis ([Firefox Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt nun von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstatt direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Als Ergebnis implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) ([Firefox Bug 1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `browser.close` wurde hinzugefügt, der es Benutzern erlaubt, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox Bug 1829334](https://bugzil.la/1829334)).
- Der Befehl `browsingContext.setViewport` wurde hinzugefügt, der es Benutzern erlaubt, die Dimensionen eines Top-Level-Browsing-Kontextes zu ändern ([Firefox Bug 1838664](https://bugzil.la/1838664)).
- Das Ereignis `browsingContext.fragmentNavigated` wurde hinzugefügt, welches für gleichzeitige Dokumentnavigationen ausgelöst wird ([Firefox Bug 1841039](https://bugzil.la/1841039)).
- Die Unterstützung für das `background` Argument des Befehls `browsingContext.create` wurde hinzugefügt, wodurch der neue Kontext im Hintergrund erstellt wird. Dieses Argument ist optional und standardmäßig `false`, was bedeutet, dass `browsingContext.create` jetzt neue Kontexte standardmäßig im Vordergrund öffnet ([Firefox Bug 1843507](https://bugzil.la/1843507)).
- Die Unterstützung für das `clip` Argument des Befehls `browsingContext.captureScreenshot` wurde hinzugefügt, wodurch der Screenshot entweder auf einen spezifischen Bereich oder auf ein Element eingeschränkt werden kann. Beim Eingrenzen auf ein Element kann es optional in die Ansicht gescrollt werden, bevor der Screenshot aufgenommen wird ([Firefox Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse im Zusammenhang mit einer Navigation werden jetzt eine `navigation` ID bereitstellen, die eine `UUID` ist, die eine spezifische Navigation identifiziert. Diese Eigenschaft ist in der Antwort von `browsingContext.navigate`, in den Ereignissen `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` sowie in allen `network` Ereignissen für eine Navigationsanfrage verfügbar ([Firefox Bug 1763122](https://bugzil.la/1763122), [Firefox Bug 1789484](https://bugzil.la/1789484), [Firefox Bug 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network` Ereignissen werden jetzt als `network.BytesValue` serialisiert, was eine bessere Unterstützung für Nicht-UTF8-Werte bietet ([Firefox Bug 1842619](https://bugzil.la/1842619)).
- Der Befehl `browsingContext.create` wird jetzt warten, bis der erstellte Kontext eine gültige Größe hat ([Firefox Bug 1847044](https://bugzil.la/1847044)).

### Entwicklerwerkzeuge

- Der Netzwerkmonitor zeigt nun Informationen über Proxyanfragen, einschließlich der Proxyadresse, des Proxystatus und der Proxy-HTTP-Version im [Headers-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox Bug 1707192](https://bugzil.la/1707192)).

- Der vom [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählte Bereich kann jetzt mit Tastaturkürzeln verschoben und verändert werden.
  Mit den Pfeiltasten wird der ausgewählte Bereich verschoben, während <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) den ausgewählten Bereich vergrößern oder verkleinern.
  Wenn die <kbd>Shift</kbd> Taste gedrückt gehalten wird, werden die Bewegungs- und Größenänderungsaktionen bei Verwendung dieser Tastenkombinationen beschleunigt ([Firefox Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Highlight-Pseudoelementen ([`::highlight()`](/de/docs/Web/CSS/::highlight), [`::target-text`](/de/docs/Web/CSS/::target-text), [`::spelling-error`](/de/docs/Web/CSS/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/::grammar-error), und [`::selection`](/de/docs/Web/CSS/::selection)) nicht unterstützt werden, werden nun im CSS-Regelbereich des [Page Inspectors](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) gemeldet ([Firefox Bug 1842157](https://bugzil.la/1842157)).

## Ältere Versionen

{{Firefox_for_developers}}
