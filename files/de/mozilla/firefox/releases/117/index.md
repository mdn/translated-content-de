---
title: Firefox 117 Versionshinweise für Entwickler
short-title: Firefox 117
slug: Mozilla/Firefox/Releases/117
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 117, die Entwickler betreffen. Firefox 117 wurde am 29. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Das [CSS Nesting](/de/docs/Web/CSS/Guides/Nesting) Modul wird jetzt in Firefox unterstützt, zusammen mit dem [`&` Nesting-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector). Dies ermöglicht es Entwicklern, verschachteltes CSS zu schreiben, was zur Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets beiträgt. Es kann auch dazu beitragen, die Dateigröße von CSS zu reduzieren und somit die Downloadgröße zu verringern. ([Firefox Bug 1835066](https://bugzil.la/1835066), [Firefox Bug 1840781](https://bugzil.la/1840781))

- Die Eigenschaften [`math-style`](/de/docs/Web/CSS/Reference/Properties/math-style) und [`math-depth`](/de/docs/Web/CSS/Reference/Properties/math-depth) werden jetzt unterstützt, ebenso der Wert `math` für die Eigenschaft [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#values) ([Firefox Bug 1845516](https://bugzil.la/1845516)).

- Die Syntax [`contain-intrinsic-size: auto none`](/de/docs/Web/CSS/Reference/Properties/contain-intrinsic-size) wird jetzt unterstützt, die es erlaubt, wenn möglich, die zuletzt gespeicherte Größe eines Elements zu verwenden und andernfalls auf `contain-intrinsic-size: none` zurückzugreifen.
  Dies ist nützlich für Raster- und Mehrspaltenlayouts, um Elemente so anzuordnen, als hätten sie keine Inhalte, anstatt 0px Höhe ([Firefox Bug 1835813](https://bugzil.la/1835813)).

### JavaScript

Keine bemerkenswerten Änderungen.

### SVG

- Inline-SVGs unterstützen nun `<script>` Elemente mit den Attributen `type="module"`, `defer` und `async`.
  Dadurch können SVGs moderne JavaScript-Funktionen nutzen, einschließlich ES-Module und asynchrones Laden von Skripten ([Firefox Bug 1839954](https://bugzil.la/1839954)).

### HTTP

- Ein Fehler wurde behoben, bei dem der [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) Quellenausdruck `'strict-dynamic'` in `default-src` Direktiven nicht durchgesetzt wurde.
  Das Verhalten entspricht jetzt der Spezifikation, wo `default-src` Direktivwerte als Rückfallebene verwendet werden, wenn `script-src` nicht bereitgestellt wird ([Firefox Bug 1313937](https://bugzil.la/1313937)).

- Der `Range`-Header ist jetzt ein {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}, wenn der Wert ein einzelner Bytebereich ist (z.B. `bytes=100-200`).
  Dies erlaubt es, den `Range`-Header in Cross-Origin-Anfragen ohne vorgelagerte Anfragen zu verwenden, was nützlich ist für das Anfordern von Medien und das Fortsetzen von Downloads ([Firefox Bug 1733981](https://bugzil.la/1733981)).

### APIs

- Die Methode [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) kann nun verwendet werden, um die 2D-Kontextattribute abzurufen, die vom Browser verwendet werden ([Firefox Bug 1517786](https://bugzil.la/1517786)).
- Das statische Mitglied [`ReadableStream.from()`](/de/docs/Web/API/ReadableStream/from_static) wird jetzt unterstützt und ermöglicht es Entwicklern, einen lesbaren Stream aus einem beliebigen iterierbaren oder asynchron iterierbaren Objekt zu erstellen ([Firefox Bug 1772772](https://bugzil.la/1772772)).
- [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) werden jetzt unterstützt, wodurch Webanwendungen eingehende und ausgehende WebRTC-kodierte Video- und Audioframes mithilfe eines [`TransformStream`](/de/docs/Web/API/TransformStream) in einem Worker modifizieren können.
  Die unterstützten Schnittstellen umfassen: [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform), [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform), [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame), und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame), sowie das [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent) und das Worker [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis ([Firefox Bug 1631263](https://bugzil.la/1631263)).
- [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule) erbt jetzt von [`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule) anstelle direkt von [`CSSRule`](/de/docs/Web/API/CSSRule). Dadurch implementiert sie zusätzlich die Eigenschaft [`cssRules`](/de/docs/Web/API/CSSGroupingRule/cssRules) und die Methoden [`deleteRule()`](/de/docs/Web/API/CSSGroupingRule/cssRules) und [`insertRule()`](/de/docs/Web/API/CSSGroupingRule/insertRule) (Firefox Bug [1846251](https://bugzil.la/1846251)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `browser.close`, der es Benutzern ermöglicht, alle WebDriver-Sitzungen zu beenden und den Browser zu schließen, wurde hinzugefügt ([Firefox Bug 1829334](https://bugzil.la/1829334)).
- Der Befehl `browsingContext.setViewport`, der es Benutzern erlaubt, die Dimensionen eines Top-Level-Browsing-Kontexts zu ändern, wurde hinzugefügt ([Firefox Bug 1838664](https://bugzil.la/1838664)).
- Das Ereignis `browsingContext.fragmentNavigated`, das für gleichbleibende Dokumentnavigierungen ausgelöst wird, wurde hinzugefügt ([Firefox Bug 1841039](https://bugzil.la/1841039)).
- Unterstützung für das Argument `background` des Befehls `browsingContext.create` wurde hinzugefügt, welches den neuen Kontext zwingt, im Hintergrund erstellt zu werden. Dieses Argument ist optional und hat standardmäßig den Wert `false`, was bedeutet, dass `browsingContext.create` jetzt standardmäßig neue Kontexte im Vordergrund öffnet ([Firefox Bug 1843507](https://bugzil.la/1843507)).
- Unterstützung für das Argument `clip` des Befehls `browsingContext.captureScreenshot` wurde hinzugefügt, welches es erlaubt, den Screenshot entweder auf einen bestimmten Bereich oder auf ein Element zu beschränken. Beim Beschneiden auf ein Element können Sie optional das Element vor dem Aufnehmen des Screenshots in den Blickfeld scrollen ([Firefox Bug 1840998](https://bugzil.la/1840998)).
- Alle Befehle und Ereignisse im Zusammenhang mit einer Navigation liefern nun eine `navigation`-ID, die eine `UUID` zur Identifizierung einer spezifischen Navigation ist. Diese Eigenschaft ist verfügbar in der Antwort von `browsingContext.navigate`, in den Ereignissen `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated`, sowie in allen `network`-Ereignissen, die für eine Navigationsanfrage erstellt wurden ([Firefox Bug 1763122](https://bugzil.la/1763122), [Firefox Bug 1789484](https://bugzil.la/1789484), [Firefox Bug 1805405](https://bugzil.la/1805405)).
- `headers` und `cookies` in `network` Ereignissen werden jetzt als `network.BytesValue` serialisiert, was eine bessere Unterstützung für Werte, die nicht UTF-8 sind, bietet ([Firefox Bug 1842619](https://bugzil.la/1842619)).
- Der Befehl `browsingContext.create` wartet nun, bis der erstellte Kontext eine gültige Größe hat ([Firefox Bug 1847044](https://bugzil.la/1847044)).

### Entwicklerwerkzeuge

- Der Netzwerk-Monitor zeigt nun Informationen über gespiegelte Anfragen an, einschließlich der Proxy-Adresse, des Proxy-Status und der Proxy-HTTP-Version im [Header-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html) ([Firefox Bug 1707192](https://bugzil.la/1707192)).

- Der vom [Messwerkzeug](https://firefox-source-docs.mozilla.org/devtools-user/measure_a_portion_of_the_page/index.html) ausgewählte Bereich kann jetzt mit Tastenkombinationen verändert und verschoben werden.
  Mit den Pfeiltasten verschieben Sie den ausgewählten Bereich, während Sie mit <kbd>Strg</kbd> + Pfeiltasten (oder <kbd>Cmd</kbd> + Pfeiltasten auf einem Mac) den ausgewählten Bereich größenmäßig anpassen.
  Durch Halten der <kbd>Umschalttaste</kbd> wird die Bewegungs- und Größenänderungsaktion bei Verwendung dieser Tastenkombinationen beschleunigt ([Firefox Bug 1262782](https://bugzil.la/1262782)).

- Eigenschaften, die in Highlight-Pseudoelementen nicht unterstützt werden ([`::highlight()`](/de/docs/Web/CSS/Reference/Selectors/::highlight), [`::target-text`](/de/docs/Web/CSS/Reference/Selectors/::target-text), [`::spelling-error`](/de/docs/Web/CSS/Reference/Selectors/::spelling-error), [`::grammar-error`](/de/docs/Web/CSS/Reference/Selectors/::grammar-error) und [`::selection`](/de/docs/Web/CSS/Reference/Selectors/::selection)), werden im [Seiteninspektor](https://firefox-source-docs.mozilla.org/devtools-user/#page-inspector) CSS-Regelfenster gemeldet ([Firefox Bug 1842157](https://bugzil.la/1842157)).
