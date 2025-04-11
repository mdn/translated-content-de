---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente verfügen nun über das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die Zeichensätze UTF-7 und UTF-32 entfernt. Weitere Informationen zu unterstützen Zeichensätzen finden Sie [hier](/de/docs/Character_Sets_Supported_by_Gecko).
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten nicht-leerer übergangen. Siehe die [Gecko-Hinweise](/de/docs/Web/HTML/Reference/Elements/map#gecko_notes) zum {{ HTMLElement("map") }}-Element für Details.
- Firefox Mobile auf Android unterstützt nun WOFF-Schriften für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungsdomain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control) sollte in Zukunft hinzugefügt werden, um dies sicherer zu machen.

#### Canvas-Verbesserungen

- Der 2D-Zeichnungskontext des {{ HTMLElement("canvas") }} unterstützt jetzt die Angabe eines `ImageData`-Objekts als Eingabe für die Methode `createImageData()`. Dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object) mit denselben Abmessungen wie das angegebene Objekt, aber immer noch mit allen Pixeln, die auf transparentes Schwarz voreingestellt sind. Dies war bereits dokumentiert, aber nicht implementiert.
- Das Angeben von nicht-endlichen Werten beim Hinzufügen von Farbverläufen über einen Aufruf der `addColorStop()`-Methode von [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) wirft jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR`.
- Die Methode `toDataURL()` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) verwendet nun korrekt Kleinbuchstaben für den angegebenen MIME-Typ, bevor ein Vergleich erfolgt.
- `getImageData()` akzeptiert nun korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` handhaben negative Argumente nun gemäß der Spezifikation, indem sie das Rechteck um die entsprechende Achse spiegeln. **Wir benötigen einen Artikel über [CSS-Größen](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Bei der Angabe von nicht-endlichen Werten beim Aufrufen von `createImageData()` wird nun korrekt eine `NOT_SUPPORTED_ERR`-Ausnahme geworfen.
- `createImageData()` und `getImageData()` geben nun korrekt mindestens ein Pixel Bilddaten zurück, wenn ein kleineres Rechteck als ein Pixel angegeben wird.
- Wird ein negativer Radius beim Aufruf von `createRadialGradient()` angegeben, wird nun korrekt `INDEX_SIZE_ERR` geworfen.
- Das Angeben eines `null` oder `undefined` Bildes beim Aufruf von `createPattern()` oder `drawImage()` führt nun korrekt zu einer `TYPE_MISMATCH_ERR`-Ausnahme.
- Ungültige Werte für `globalAlpha` werfen keine `SYNTAX_ERR`-Ausnahme mehr; diese werden nun korrekt stillschweigend ignoriert.
- Ungültige Werte beim Aufruf von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` werfen keine Ausnahme mehr; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Die Einstellung eines ungültigen Wertes für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird nun stillschweigend ignoriert.
- Die Einstellung eines ungültigen Wertes für `rotate` oder `scale` wird jetzt stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, vorerst mit dem Präfix `-moz-`.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde geändert, sodass die Granularität der "Wort"-Auswahl keine nachfolgenden Leerzeichen mehr einschließt; dies macht sie konsistenter über verschiedene Plattformen hinweg und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind jetzt so begrenzt, dass sie nicht mehr als ein Timeout pro Sekunde in inaktiven Tabs senden. Zusätzlich wird nun verschachtelten Timeouts der kleinste von der HTML5-Spezifikation erlaubte Wert von 4 ms auferlegt (anstelle der früheren 10 ms).
- Ähnlich dazu wird die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) ebenfalls auf nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs begrenzt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt das [`loadend`-Event](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschritts-Listener. Dieses wird gesendet, nachdem ein Transfer beendet ist (d.h. nach dem `abort`-, `error`- oder `load`-Ereignis). Sie können dies verwenden, um alle Vorgänge zu behandeln, die unabhängig vom Erfolg oder Misserfolg eines Transfers durchgeführt werden müssen.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)- und damit der [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die es konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode heißt jetzt `mozSlice()`.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird nun ermittelt, indem der Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) betrachtet wird.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist nun schreibgeschützt, wie es von der DOM-Spezifikation gefordert wird.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt nun experimentelle Eigenschaften, um Informationen über Videostatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke können nicht mehr aufgerufen werden, als ob sie Funktionen wären; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team durchgeführt, um Kompatibilität zu gewährleisten (siehe [WebKit bug 28285](https://webkit.org/b/28285)). Dieses Feature existierte schon lange, wurde aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird nun unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden zuvor nur im Strict-Modus als reserviert behandelt; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt werden, dürfen Skripten in einer Sandbox nicht mehr ausgesetzt werden.
- Der JSON-Parser wurde neu geschrieben, um eine verbesserte Geschwindigkeit und Konformität zu erreichen. Dies umfasst auch eine Verbesserung für [Firefox bug 572279](https://bugzil.la/572279).

### SVG

- Das SVG-Attribut {{ SVGAttr("class") }} kann nun animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indizierbar und können wie Arrays angesprochen werden; zusätzlich haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList) und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet nicht mehr den `Keep-Alive` HTTP-Header; wir haben ihn nicht korrekt formatiert, und er war redundant, da wir auch den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }} Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter beim Wiederverwenden von Verbindungen in der persistenten Verbindungspool zu sein; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko nun, den Pool so zu sortieren, dass Verbindungen mit dem größten [Congestion Window](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst folgen. Dies kann die Rundreisezeit (RTT) von HTTP-Transaktionen verkürzen, indem häufig die Notwendigkeit vermieden wird, Verbindungen zu vergrößern.
- Firefox behandelt nun die `Content-Disposition` HTTP-Response-Header effektiver, wenn sowohl die Parameter `filename` als auch `filename*` bereitgestellt werden; es werden alle bereitgestellten Namen durchgesehen, wobei der `filename*`-Parameter verwendet wird, falls einer verfügbar ist, selbst wenn zuerst ein `filename`-Parameter enthalten ist. Zuvor wurde der erste übereinstimmende Parameter verwendet, wodurch ein geeigneterer Name möglicherweise nicht verwendet wurde. Siehe [Firefox bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Entwicklerwerkzeuge

- Das [Web-Konsolen-Objekt `Console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat nun eine `debug()`-Methode, die ein Alias für seine `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5 lesen Sie bitte [Aktualisierung von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle größeren Firefox-Versionen. Siehe [Binärkomponenten](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm)-Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die `asyncFetch()`-Methode unterstützt nun die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle hat neue Attribute, die den Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle ermöglichen. Diese Informationen werden hauptsächlich zu Debugging-Zwecken bereitgestellt.
- Die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height) des {{ HTMLElement("canvas") }}-Elements werden jetzt in IDL als vorzeichenlose Ganzzahlen anstelle von signierten Ganzzahlen reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in die `nsIAppStartup`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in die `nsIDocShell`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in die `nsIFocusManager`-Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in die `nsIHTMLEditor`-Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E)-Helfer ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Ganzzahlen und vorzeichenlose Ganzzahlen zu konvertieren.

### Änderungen im Build-System

- Sie können jetzt Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) hat jetzt standardmäßig den Wert "browser". Nach dem Herunterladen oder Klonen des Codes können Sie `configure && make` (oder `make -f client.mk`) ausführen, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
