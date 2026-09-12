---
title: Firefox 117 – Versionshinweise für Entwickler
short-title: Firefox 117
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: f37e438c6dece2b381d2b9f35dc53af21a916a75
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### CSS

- Das Modul [CSS Nesting](/de/docs/Web/CSS/Guides/Nesting) wird jetzt in Firefox unterstützt, zusammen mit dem [Verschachtelungsselektor `&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector). Dadurch können Entwickler verschachteltes CSS schreiben, was die Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets verbessert. Zudem kann dies potenziell die Größe von CSS-Dateien reduzieren und damit die Downloadgröße verringern. ([Firefox-Bug 1835066](https://bugzil.la/1835066), [Firefox-Bug 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) und [`math-depth`](/de/docs/Web/CSS/Reference/Properties/math-depth) werden jetzt unterstützt, ebenso wie der Wert `math` für die Eigenschaft [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#values) ([Firefox-Bug 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) wird jetzt unterstützt. Sie ermöglicht, sofern möglich, die Verwendung der zuletzt gemerkten Größe eines Elements und greift andernfalls auf `contain-intrinsic-size: none` zurück.
  Dies ist für Grid- und mehrspaltige Layouts nützlich, damit Elemente so angeordnet werden können, als hätten sie keinen Inhalt, anstatt eine Höhe von 0px zu erhalten ([Firefox-Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine nennenswerten Änderungen.

### SVG

- Inline-SVGs unterstützen jetzt `<script>`-Elemente mit den Attributen `type="module"`, `defer` und `async`.
  Dadurch können SVGs moderne JavaScript-Funktionen einschließlich ES-Modulen verwenden und Skripte asynchron laden ([Firefox-Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, durch den der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP)-Quellausdruck `'strict-dynamic'` in `default-src`-Direktiven nicht durchgesetzt wurde.
  Das Verhalten entspricht nun der Spezifikation, nach der Werte der `default-src`-Direktive als Fallback verwendet werden, wenn `script-src` nicht angegeben ist ([Firefox-Bug 1313937](https://bugzil.la/1313937)).

- Der Header `Range` ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}, wenn sein Wert ein einzelner Byte-Bereich ist, beispielsweise `bytes=100-200`.
  Dadurch kann der Header `Range` in ursprungsübergreifenden Anfragen verwendet werden, ohne eine Preflight-Anfrage auszulösen. Dies ist beim Anfordern von Medien und beim Fortsetzen von Downloads nützlich ([Firefox-Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann jetzt verwendet werden, um die vom Browser verwendeten 2D-Kontextattribute abzurufen ([Firefox-Bug 1517786](https://bugzil.la/1517786)).
- Das statische Member [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird jetzt unterstützt und ermöglicht Entwicklern, einen lesbaren Stream aus jedem iterierbaren oder asynchron iterierbaren Objekt zu erstellen ([Firefox-Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden jetzt unterstützt. Dadurch können Webanwendungen eingehende und ausgehende codierte WebRTC-Video- und Audioframes mithilfe eines in einem Worker ausgeführten [`TransformStream`](/de/docs/Web/API/TransformStream) ändern.
  Zu den unterstützten Interfaces gehören: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sowie das Ereignis [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und das Worker-Ereignis [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) ([Firefox-Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt jetzt von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) statt direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) sowie die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox-Bug [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `browser.close` wurde hinzugefügt, mit dem Benutzer alle WebDriver-Sitzungen beenden und den Browser schließen können ([Firefox-Bug 1829334](https://bugzil.la/1829334)).
- Der Befehl `browsingContext.setViewport` wurde hinzugefügt, mit dem Benutzer die Abmessungen eines Browsing-Kontexts der obersten Ebene ändern können ([Firefox-Bug 1838664](https://bugzil.la/1838664)).
- Das Ereignis `browsingContext.fragmentNavigated` wurde hinzugefügt, das bei Navigationen innerhalb desselben Dokuments ausgelöst wird ([Firefox-Bug 1841039](https://bugzil.la/1841039)).
- Unterstützung für das Argument `background` des Befehls `browsingContext.create` wurde hinzugefügt, das erzwingt, dass der neue Kontext im Hintergrund erstellt wird. Dieses Argument ist optional und hat standardmäßig den Wert `false`, was bedeutet, dass `browsingContext.create` neue Kontexte nun standardmäßig im Vordergrund öffnet ([Firefox-Bug 1843507](https://bugzil.la/1843507)).
- Unterstützung für das Argument `clip` des Befehls `browsingContext.captureScreenshot` wurde hinzugefügt. Damit können Sie den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element beschränken. Beim Zuschneiden auf ein Element können Sie das Element optional vor der Aufnahme des Screenshots in den sichtbaren Bereich scrollen ([Firefox-Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse im Zusammenhang mit einer Navigation stellen jetzt eine `navigation`-ID bereit, bei der es sich um eine `UUID` handelt, die eine bestimmte Navigation identifiziert. Diese Eigenschaft ist in der Antwort von `browsingContext.navigate`, in den Ereignissen `browsingContext.load`, `browsingContext.domContentLoaded` und `browsingContext.fragmentNavigated` sowie in allen für eine Navigationsanfrage erstellten `network`-Ereignissen verfügbar ([Firefox-Bug 1763122](https://bugzil.la/1763122), [Firefox-Bug 1789484](https://bugzil.la/1789484), [Firefox-Bug 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network`-Ereignissen werden jetzt als `network.BytesValue` serialisiert, was eine bessere Unterstützung für Nicht-UTF8-Werte bietet ([Firefox-Bug 1842619](https://bugzil.la/1842619)).
- Der Befehl `browsingContext.create` wartet jetzt, bis der erstellte Kontext eine gültige Größe hat ([Firefox-Bug 1847044](https://bugzil.la/1847044)).

### Entwicklertools

- Der Netzwerkmonitor zeigt jetzt Informationen über per Proxy weitergeleitete Anfragen an, einschließlich der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version im [Tab „Headers“](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox-Bug 1707192](https://bugzil.la/1707192)).

- Der mit dem [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählte Bereich kann jetzt mithilfe von Tastenkombinationen in der Größe verändert und verschoben werden.
  Durch Drücken der Pfeiltasten wird der ausgewählte Bereich verschoben, während <kbd>Ctrl</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) die Größe des ausgewählten Bereichs verändern.
  Das Gedrückthalten der Taste <kbd>Shift</kbd> beschleunigt die Verschiebe- und Größenänderungsaktionen bei Verwendung dieser Tastenkombinationen ([Firefox-Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Highlight-Pseudoelementen nicht unterstützt werden ([`::highlight()`](/de/docs/Web/CSS/Reference/Selectors/::highlight), [`::target-text`](/de/docs/Web/CSS/Reference/Selectors/::target-text), [`::spelling-error`](/de/docs/Web/CSS/Reference/Selectors/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/Reference/Selectors/::grammar-error) und [`::selection`](/de/docs/Web/CSS/Reference/Selectors/::selection)), werden jetzt im CSS-Regelbereich des [Seiteninspektors](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) gemeldet ([Firefox-Bug 1842157](https://bugzil.la/1842157)).
