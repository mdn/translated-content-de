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

- Das [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting)-Modul wird jetzt in Firefox unterstützt, zusammen mit dem [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector). Dies erlaubt Entwicklern, verschachteltes CSS zu schreiben, was zur Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets beiträgt. Es kann auch helfen, die CSS-Dateigröße zu reduzieren und dadurch die Downloadgrößen zu verringern. ([Firefox Fehler 1835066](https://bugzil.la/1835066), [Firefox Fehler 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/math-style) und [`math-depth`](/de/docs/Web/CSS/math-depth) werden nun unterstützt, ebenso wie der `math`-Wert für die [`font-size`](/de/docs/Web/CSS/font-size#values)-Eigenschaft ([Firefox Fehler 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/contain-intrinsic-size) wird jetzt unterstützt, was die Verwendung der zuletzt gespeicherten Größe eines Elements ermöglicht, falls möglich, und andernfalls auf `contain-intrinsic-size: none` zurückgreift. Dies ist nützlich für Raster- und Mehrspalten-Layouts, um Elemente so anzuordnen, als hätten sie keine Inhalte anstatt 0px Höhe ([Firefox Fehler 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Inline-SVGs unterstützen jetzt `<script>`-Elemente mit den Attributen `type="module"`, `defer` und `async`.
  Dies ermöglicht es SVGs, moderne JavaScript-Funktionen zu verwenden, einschließlich ES-Module, und Skripte asynchron zu laden ([Firefox Fehler 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/CSP) `'strict-dynamic'`-Quellenausdruck in `default-src`-Direktiven nicht durchgesetzt wurde.
  Das Verhalten entspricht nun der Spezifikation, wobei `default-src`-Direktivenwerte als Rückfall genutzt werden, wenn `script-src` nicht bereitgestellt wird ([Firefox Fehler 1313937](https://bugzil.la/1313937)).

- Der `Range`-Header ist nun ein [CORS-safelisted Request-Header](/de/docs/Glossary/CORS-safelisted_request_header), wenn der Wert ein einzelner Bytebereich ist (z.B. `bytes=100-200`).
  Dadurch kann der `Range`-Header in Cross-Origin-Anfragen verwendet werden, ohne dass eine Preflight-Anfrage ausgelöst wird, was nützlich ist, um Medien anzufordern und Downloads fortzusetzen ([Firefox Fehler 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode {{domxref("CanvasRenderingContext2D.getContextAttributes()")}} kann jetzt verwendet werden, um die 2D-Kontextattribute zu erhalten, die vom Browser verwendet werden ([Firefox Fehler 1517786](https://bugzil.la/1517786)).
- Das statische Mitglied {{domxref("ReadableStream/from_static", "ReadableStream.from()")}} wird jetzt unterstützt, sodass Entwickler einen lesbaren Stream aus jedem iterierbaren oder asynchron iterierbaren Objekt erstellen können ([Firefox Fehler 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden jetzt unterstützt, wodurch Webanwendungen eingehende und ausgehende WebRTC-kodierte Video- und Audioframes mit einem {{DOMxRef("TransformStream")}} ändern können, der in einem Worker läuft.
  Die unterstützten Schnittstellen umfassen: {{domxref("RTCRtpScriptTransform")}}, {{domxref("RTCRtpScriptTransformer")}}, {{domxref("RTCRtpSender.transform")}}, {{domxref("RTCRtpReceiver.transform")}}, {{domxref("RTCEncodedVideoFrame")}}, und {{domxref("RTCEncodedAudioFrame")}}, sowie das {{domxref("RTCTransformEvent")}} und das Worker-{{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Ereignis ([Firefox Fehler 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt jetzt von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstelle direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert es zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox Fehler [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `browser.close` wurde hinzugefügt, der es Anwendern erlaubt, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen ([Firefox Fehler 1829334](https://bugzil.la/1829334)).
- Der Befehl `browsingContext.setViewport` wurde hinzugefügt, der es Anwendern erlaubt, die Abmessungen eines Top-Level-Browsing-Kontextes zu ändern ([Firefox Fehler 1838664](https://bugzil.la/1838664)).
- Das Ereignis `browsingContext.fragmentNavigated` wurde hinzugefügt, das bei Navigationen im selben Dokument ausgelöst wird ([Firefox Fehler 1841039](https://bugzil.la/1841039)).
- Unterstützung für das Argument `background` des `browsingContext.create`-Befehls wurde hinzugefügt, welches den neuen Kontext zwingt, im Hintergrund erstellt zu werden. Dieses Argument ist optional und hat standardmäßig `false`, was bedeutet, dass `browsingContext.create` jetzt neue Kontexte standardmäßig im Vordergrund öffnet ([Firefox Fehler 1843507](https://bugzil.la/1843507)).
- Unterstützung für das Argument `clip` des `browsingContext.captureScreenshot`-Befehls wurde hinzugefügt, das es erlaubt, den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element zu beschränken. Beim Beschneiden auf ein Element können Sie optional das Element in den Viewport scrollen, bevor der Screenshot aufgenommen wird ([Firefox Fehler 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse, die mit einer Navigation zusammenhängen, liefern nun eine `navigation`-ID, die eine `UUID` ist und eine spezifische Navigation identifiziert. Diese Eigenschaft ist in der Antwort von `browsingContext.navigate`, in den Ereignissen `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` sowie in allen `network`-Ereignissen verfügbar, die für eine Navigationsanfrage erstellt wurden ([Firefox Fehler 1763122](https://bugzil.la/1763122), [Firefox Fehler 1789484](https://bugzil.la/1789484), [Firefox Fehler 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network`-Ereignissen werden jetzt als `network.BytesValue` serialisiert, was eine bessere Unterstützung für nicht-UTF8-Werte bietet ([Firefox Fehler 1842619](https://bugzil.la/1842619)).
- Der Befehl `browsingContext.create` wartet nun, bis der erstellte Kontext eine gültige Größe hat ([Firefox Fehler 1847044](https://bugzil.la/1847044)).

### Entwickler-Tools

- Der Netzwerkmonitor zeigt jetzt Informationen über proxyisierte Anfragen an, einschließlich der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version im [Kopfzeilen-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox Fehler 1707192](https://bugzil.la/1707192)).

- Der von der [Messtool](/https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählte Bereich kann jetzt mit Tastenkombinationen verschoben und in der Größe geändert werden. Das Drücken der Pfeiltasten bewegt den ausgewählten Bereich, während das Drücken der Tasten <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) den ausgewählten Bereich vergrößert oder verkleinert. Das Halten der <kbd>Shift</kbd>-Taste beschleunigt die Bewegungs- und Größenänderungsaktionen bei der Verwendung dieser Tastenkombinationen ([Firefox Fehler 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Hervorhebungs-Pseudo-Elementen ([`::highlight()`](/de/docs/Web/CSS/::highlight), [`::target-text`](/de/docs/Web/CSS/::target-text), [`::spelling-error`](/de/docs/Web/CSS/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/::grammar-error), und [`::selection`](/de/docs/Web/CSS/::selection)) nicht unterstützt werden, werden jetzt im CSS-Regel-Panel des [Page Inspectors](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) angezeigt ([Firefox Fehler 1842157](https://bugzil.la/1842157)).

## Ältere Versionen

{{Firefox_for_developers}}
