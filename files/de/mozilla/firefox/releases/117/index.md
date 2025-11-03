---
title: Firefox 117 Versionshinweise für Entwickler
short-title: Firefox 117
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting) wird jetzt in Firefox unterstützt, zusammen mit dem [`&`-Nesting-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector). Dies ermöglicht es Entwicklern, verschachtelte CSS-Strukturen zu schreiben, was zur Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets beiträgt. Es kann auch helfen, die Dateigröße von CSS zu reduzieren und somit die Downloadgrößen zu verringern. ([Firefox Fehler 1835066](https://bugzil.la/1835066), [Firefox Fehler 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) und [`math-depth`](/de/docs/Web/CSS/Reference/Properties/math-depth) werden nun unterstützt, ebenso wie der `math`-Wert für die [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#values)-Eigenschaft ([Firefox Fehler 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) wird nun unterstützt, wodurch, wenn möglich, die zuletzt gespeicherte Größe eines Elements verwendet wird, andernfalls wird auf `contain-intrinsic-size: none` zurückgegriffen.
  Dies ist nützlich für Grid- und Multi-Column-Layouts, um Elemente so anzuordnen, als hätten sie keine Inhalte statt 0px Höhe ([Firefox Fehler 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Inline SVGs unterstützen nun `<script>`-Elemente mit den Attributen `type="module"`, `defer` und `async`.
  Dadurch können SVGs moderne JavaScript-Funktionen nutzen, einschließlich ES-Module, und Skripte asynchron laden ([Firefox Fehler 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) `'strict-dynamic'`-Quellen-Ausdruck in `default-src`-Direktiven nicht durchgesetzt wurde.
  Das Verhalten entspricht nun der Spezifikation, bei der `default-src`-Direktivenwerte als Fallback verwendet werden, wenn `script-src` nicht bereitgestellt wird ([Firefox Fehler 1313937](https://bugzil.la/1313937)).

- Der `Range`-Header ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn der Wert ein einzelner Bytebereich ist (z. B. `bytes=100-200`).
  Dies ermöglicht die Verwendung des `Range`-Headers in Cross-Origin-Anfragen, ohne eine Preflight-Anfrage auszulösen, was nützlich ist, um Medien abzurufen und Downloads fortzusetzen ([Firefox Fehler 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann nun verwendet werden, um die 2D-Kontextattribute abzufragen, die vom Browser verwendet werden ([Firefox Fehler 1517786](https://bugzil.la/1517786)).
- Das statische Mitglied [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird nun unterstützt und ermöglicht Entwicklern, einen lesbaren Stream aus jedem iterierbaren oder asynchron iterierbaren Objekt zu erstellen ([Firefox Fehler 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden jetzt unterstützt, sodass Webanwendungen eingehende und ausgehende codierte WebRTC-Video- und Audioframes mit einem [`TransformStream`](/de/docs/Web/API/TransformStream) in einem Worker modifizieren können.
  Die unterstützten Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und das Workerereignis [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) ([Firefox Fehler 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt nun von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstatt direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox Fehler [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der `browser.close`-Befehl wurde hinzugefügt, der es Benutzern ermöglicht, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox Fehler 1829334](https://bugzil.la/1829334)).
- Der `browsingContext.setViewport`-Befehl wurde hinzugefügt, der es Benutzern erlaubt, die Abmessungen eines obersten Browsing-Kontexts zu ändern ([Firefox Fehler 1838664](https://bugzil.la/1838664)).
- Das Ereignis `browsingContext.fragmentNavigated` wurde hinzugefügt, das für gleiche Dokumentennavigationen ausgelöst wird ([Firefox Fehler 1841039](https://bugzil.la/1841039)).
- Unterstützung für das `background`-Argument des `browsingContext.create`-Befehls wurde hinzugefügt, welches den neuen Kontext im Hintergrund erstellt. Dieses Argument ist optional und hat standardmäßig den Wert `false`, was bedeutet, dass `browsingContext.create` nun standardmäßig neue Kontexte im Vordergrund öffnet ([Firefox Fehler 1843507](https://bugzil.la/1843507)).
- Unterstützung für das `clip`-Argument des `browsingContext.captureScreenshot`-Befehls wurde hinzugefügt, das es ermöglicht, den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element zu beschränken. Beim Zuschneiden auf ein Element können Sie optional das Element in den Sichtbereich scrollen, bevor Sie den Screenshot erstellen ([Firefox Fehler 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse, die mit einer Navigation in Verbindung stehen, geben nun eine `navigation`-ID zurück, die eine `UUID` darstellt und eine spezifische Navigation identifiziert. Diese Eigenschaft ist in der `browsingContext.navigate`-Antwort, in den Ereignissen `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` sowie in allen für eine Navigationsanfrage erstellten `network`-Ereignissen verfügbar ([Firefox Fehler 1763122](https://bugzil.la/1763122), [Firefox Fehler 1789484](https://bugzil.la/1789484), [Firefox Fehler 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network`-Ereignissen werden nun als `network.BytesValue` serialisiert, was eine bessere Unterstützung für nicht-UTF8-Werte bietet ([Firefox Fehler 1842619](https://bugzil.la/1842619)).
- Der `browsingContext.create`-Befehl wartet nun, bis der erstellte Kontext eine gültige Größe hat ([Firefox Fehler 1847044](https://bugzil.la/1847044)).

### Entwickler-Tools

- Der Netzwerkanalysator zeigt nun Informationen über Proxy-Anfragen an, einschließlich der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version im [Header-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox Fehler 1707192](https://bugzil.la/1707192)).

- Der vom [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählte Bereich kann nun mit Tastenkombinationen verschoben und in der Größe geändert werden.
  Durch Drücken der Pfeiltasten wird der ausgewählte Bereich verschoben, während <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) den ausgewählten Bereich in der Größe ändern.
  Durch Halten der <kbd>Shift</kbd>-Taste werden die Bewegungs- und Größenänderungsaktionen bei Verwendung dieser Tastenkombinationen beschleunigt ([Firefox Fehler 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Highlight-Pseudoelementen ([`::highlight()`](/de/docs/Web/CSS/Reference/Selectors/::highlight), [`::target-text`](/de/docs/Web/CSS/Reference/Selectors/::target-text), [`::spelling-error`](/de/docs/Web/CSS/Reference/Selectors/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/Reference/Selectors/::grammar-error) und [`::selection`](/de/docs/Web/CSS/Reference/Selectors/::selection)) nicht unterstützt werden, werden nun im CSS-Regel-Panel des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) gemeldet ([Firefox Fehler 1842157](https://bugzil.la/1842157)).
