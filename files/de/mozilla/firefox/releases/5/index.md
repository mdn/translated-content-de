---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{FirefoxSidebar}}

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente haben jetzt das Attribut [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey) sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind im [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die Zeichensätze UTF-7 und UTF-32 [entfernt](/de/docs/Character_Sets_Supported_by_Gecko).
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}-Elemente nicht mehr zugunsten nicht leerer beim Matching übersprungen. Siehe die [Gecko-Hinweise](/de/docs/Web/HTML/Reference/Elements/map#gecko_notes) zum {{ HTMLElement("map") }}-Element für Details.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriftarten für {{ cssxref("@font-face") }}.
- Aus Sicherheitsgründen [lädt WebGL keine Texturen mehr von Domains außer der ursprünglichen Domain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures). [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control)-Unterstützung sollte in Zukunft verfügbar gemacht werden, um dies sicherer zu ermöglichen.

#### Verbesserungen der Canvas

- Der 2D-Zeichenkontext der {{ HTMLElement("canvas") }} unterstützt jetzt die Angabe eines `ImageData`-Objekts als Eingabe für die Methode `createImageData()`; dies [erzeugt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit denselben Dimensionen wie das angegebene Objekt initialisiert ist, wobei alle Pixel jedoch weiterhin auf transparentes Schwarz voreingestellt sind. Dies war bereits als implementiert dokumentiert, aber nicht umgesetzt.
- Die Angabe von nicht-finiten Werten beim Hinzufügen von Farbverläufen durch einen Aufruf der `addColorStop()`-Methode des [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) löst jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR` aus.
- Die Methode `toDataURL()` der [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wandelt den angegebenen MIME-Typ jetzt korrekt in Kleinbuchstaben um, bevor er abgeglichen wird.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen der Canvas hinausreichen; Pixel außerhalb der Canvas werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` gehen jetzt mit negativen Argumenten gemäß der Spezifikation um, indem das Rechteck um die entsprechende Achse gespiegelt wird. **Wir benötigen einen Artikel über [CSS-Größenanpassung](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe von nicht-finiten Werten beim Aufrufen von `createImageData()` löst jetzt ordnungsgemäß eine `NOT_SUPPORTED_ERR`-Ausnahme aus.
- `createImageData()` und `getImageData()` geben jetzt korrekt mindestens ein Pixel Bilddaten zurück, wenn ein Rechteck kleiner als ein Pixel angegeben ist.
- Die Angabe eines negativen Radius beim Aufrufen von `createRadialGradient()` löst jetzt korrekt `INDEX_SIZE_ERR` aus.
- Die Angabe eines `null`- oder `undefined`-Bildes beim Aufrufen von `createPattern()` oder `drawImage()` löst jetzt korrekt eine `TYPE_MISMATCH_ERR`-Ausnahme aus.
- Die Angabe ungültiger Werte für `globalAlpha` löst keine `SYNTAX_ERR`-Ausnahme mehr aus; diese werden jetzt korrekt stillschweigend ignoriert.
- Die Angabe ungültiger Werte beim Aufrufen von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` löst keine Ausnahme mehr aus; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Das Setzen des Wertes von `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` auf einen ungültigen Wert wird jetzt stillschweigend ignoriert.
- Das Setzen des Wertes von `rotate` oder `scale` auf einen ungültigen Wert wird jetzt stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, vorerst mit dem `-moz-` Präfix.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde so geändert, dass die "word"-Granularität der Auswahl keine nachgestellten Leerzeichen mehr einschließt; dies macht es plattformübergreifend konsistenter und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind jetzt so angepasst, dass sie in inaktiven Tabs nicht mehr als ein Timeout pro Sekunde senden. Außerdem werden verschachtelte Timeouts jetzt auf den kleinsten Wert eingeklammert, der von der HTML5-Spezifikation erlaubt ist: 4 ms (anstatt der bisher verwendeten 10 ms).
- Ebenso werden die Methoden [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) in inaktiven Tabs auf nicht mehr als ein Intervall pro Sekunde eingeklammert.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt das [`loadend` Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschritts-Listener. Dieses wird gesendet, nachdem ein Transfer abgeschlossen ist (d.h. nach dem `abort`, `error` oder `load` Ereignis). Sie können dies verwenden, um Aufgaben zu behandeln, die unabhängig vom Erfolg oder Misserfolg eines Transfers durchgeführt werden müssen.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob) und, in der Erweiterung, der [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice)-Methoden in JavaScript macht. Diese Methode heißt vorerst `mozSlice()`.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt bestimmt, indem der Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) betrachtet wird.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist jetzt schreibgeschützt, wie von der DOM-Spezifikation gefordert.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Video-Wiedergabe-Statistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht länger aufrufbar, als wären sie Funktionen; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team vorgenommen, um die Kompatibilität zu gewährleisten (siehe [WebKit bug 28285](https://webkit.org/b/28285)). Dieser Feature existierte schon lange, war aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird jetzt unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden zuvor nur als reserviert behandelt, wenn sie im Strict-Modus verwendet wurden; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import`, und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, können möglicherweise nicht mehr an sandboxed Scripts weitergegeben werden.
- Der JSON-Parser wurde für verbesserte Geschwindigkeit und Konformität neu geschrieben. Dies schließt eine Behebung für [Firefox Bug 572279](https://bugzil.la/572279) ein.

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Interfaces, die Listen von Objekten darstellen, sind jetzt indizierbar und können wie Arrays zugegriffen werden; zusätzlich haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList) und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive` HTTP-Header nicht mehr; wir haben ihn nicht korrekt formatiert, und er war überflüssig, da wir auch den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }} Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter bei der Wiederverwendung von Verbindungen im persistenten Verbindungspool zu sein; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko jetzt den Pool mit Verbindungen mit dem größten [Stau-Fenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst zu sortieren. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen reduzieren, indem es in vielen Fällen das Wachstum der Verbindungen-Fenster vermeidet.
- Firefox verarbeitet jetzt den `Content-Disposition` HTTP-Response-Header effektiver, wenn sowohl die `filename` als auch die `filename*` Parameter bereitgestellt werden; es werden alle bereitgestellten Namen durchgesehen und der `filename*` Parameter verwendet, wenn einer verfügbar ist, selbst wenn ein `filename` Parameter zuerst enthalten ist. Zuvor wurde der erste übereinstimmende Parameter verwendet, was verhinderte, dass ein geeignetere Name verwendet werden konnte. Siehe [Firefox Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verschmückte Operatoren](https://w3c.github.io/mathml/spec.html#dfn-embellished-operator)

### Entwicklerwerkzeuge

- Das [Webkonsole `Console`-Objekt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat jetzt eine `debug()`-Methode, die ein Alias für die `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Webseiten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5, siehe [Aktualisierung von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das Code-Modul [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm) wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die `asyncFetch()`-Methode unterstützt jetzt die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die Schnittstelle `nsIHttpChannelInternal` hat neue Attribute, die Zugang zu Informationen über die Adressen und Ports der Endpunkte der Kanäle gewähren. Diese Informationen werden hauptsächlich für Debugging-Zwecke bereitgestellt.
- Die Attribute `width` und `height` des {{ HTMLElement("canvas") }}-Elements werden jetzt im IDL als unsigned Integers anstelle von signed Integers reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in die `nsIAppStartup`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in die `nsIDocShell`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in die `nsIFocusManager`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in die `nsIHTMLEditor`-Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox Bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox Bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox Bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E) Helfer ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Integer und unsigned Integers zu konvertieren.

### Änderungen im Build-System

- Sie können Firefox jetzt ohne eine `mozconfig`-Datei bauen; die [`--enable-application`-Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) ist jetzt standardmäßig auf "browser" gesetzt. Nach dem Herunterladen oder Klonen des Codes können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
