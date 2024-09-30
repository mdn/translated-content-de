---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente haben nun das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey) Attribut, sowie die Methoden [`blur()`](/de/docs/Web/API/Element/blur), [`click()`](/de/docs/Web/API/Element/click) und [`focus()`](/de/docs/Web/API/Element/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die UTF-7 und UTF-32 [Zeichenkodierungen](/de/docs/Character_Sets_Supported_by_Gecko) entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten von nicht-leeren übersprungen, wenn sie abgeglichen werden. Siehe die [Gecko Hinweise](/de/docs/Web/HTML/Element/map#gecko_notes) zum {{ HTMLElement("map") }} Element für Details.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriftarten für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungsdomain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) aus Sicherheitsgründen. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control) Unterstützung sollte in Zukunft kommen, um dies sicherer zu ermöglichen.

#### Canvas-Verbesserungen

- Der {{ HTMLElement("canvas") }} 2D-Zeichnungskontext unterstützt jetzt die Angabe eines `ImageData`-Objekts als Eingabe für die Methode `createImageData()`; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object) mit denselben Abmessungen wie das angegebene Objekt, jedoch immer noch mit allen Pixeln, die auf transparentes Schwarz voreingestellt sind. Dies war bereits dokumentiert, aber nicht umgesetzt.
- Die Angabe nicht endlicher Werte bei der Hinzufügung von Farbverläufen durch einen Aufruf der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) Methode `addColorStop()` wirft nun korrekt `INDEX_SIZE_ERR` statt `SYNTAX_ERR`.
- Die Methode `toDataURL()` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) setzt nun korrekt den angegebenen MIME-Typ in Kleinbuchstaben um, bevor er abgeglichen wird.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` verarbeiten nun negative Argumente entsprechend der Spezifikation, indem sie das Rechteck um die passende Achse spiegeln. **Wir benötigen einen Artikel über [CSS Größe](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe nicht endlicher Werte beim Aufruf von `createImageData()` wirft nun korrekt eine `NOT_SUPPORTED_ERR` Ausnahme.
- `createImageData()` und `getImageData()` geben nun korrekt mindestens ein Pixel Bilddaten zurück, wenn ein Rechteck kleiner als ein Pixel angegeben wird.
- Die Angabe eines negativen Radius beim Aufruf von `createRadialGradient()` wirft nun korrekt `INDEX_SIZE_ERR`.
- Die Angabe eines `null` oder `undefined` Bilds beim Aufruf von `createPattern()` oder `drawImage()` wirft nun korrekt eine `TYPE_MISMATCH_ERR` Ausnahme.
- Die Angabe ungültiger Werte für `globalAlpha` wirft keine `SYNTAX_ERR` Ausnahme mehr; diese werden nun korrekt stillschweigend ignoriert.
- Die Angabe ungültiger Werte beim Aufruf von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()`, oder `arc()` wirft keine Ausnahme mehr; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Das Setzen eines ungültigen Wertes für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird nun stillschweigend ignoriert.
- Das Setzen eines ungültigen Wertes für `rotate` oder `scale` wird nun stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, vorerst mit dem `-moz-` Präfix.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`selection`](/de/docs/Web/API/Selection) Objekts wurde so geändert, dass die Granularität der Markierung "Word" keine nachfolgenden Leerzeichen mehr einschließt; dies macht es über verschiedene Plattformen hinweg konsistenter und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methode [`setTimeout()`](/de/docs/Web/API/SetTimeout) wird jetzt auf maximal einmal pro Sekunde in inaktiven Registerkarten eingeschränkt. Zusätzlich wird es nun auf den kleinsten durch die HTML5-Spezifikation erlaubten Wert begrenzt: 4 ms (anstelle der früheren 10 ms).
- Ebenso wird die Methode [`setInterval()`](/de/docs/Web/API/SetInterval) jetzt auf nicht mehr als ein Intervall pro Sekunde in inaktiven Registerkarten begrenzt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt [das `loadend` Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschritts-Listener. Dieses wird gesendet, nachdem jeder Transfer abgeschlossen ist (das heißt, nach dem `abort`, `error`, oder `load` Ereignis). Sie können es verwenden, um alle Aufgaben zu erledigen, die unabhängig vom Erfolg oder Misserfolg eines Transfers ausgeführt werden müssen.
- Die Methode `slice()` der [`Blob`](/de/docs/Web/API/Blob) und damit auch der [`File`](/de/docs/Web/API/File) Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode heißt vorerst `mozSlice()`.
- Der Wert von [`window.navigator.language`](/de/docs/Web/API/Window/navigator/language) wird nun durch den Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist nun, wie in der DOM-Spezifikation gefordert, schreibgeschützt.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Videomalanzeige-Statistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr wie Funktionen aufrufbar; diese Änderung wurde zusammen mit dem WebKit-Team vorgenommen, um die Kompatibilität zu gewährleisten (siehe [Webkit Bug 28285](https://webkit.org/b/28285)). Dieses Feature existierte schon lange, wurde jedoch nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode [`Function.prototype.isGenerator()`](/de/docs/JavaScript/Reference/Global_Objects/Function/isGenerator) wird nun unterstützt; damit können Sie bestimmen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden bisher nur im strikten Modus als reserviert behandelt; jetzt werden sie immer als reserviert angesehen: `class`, `enum`, `export`, `extends`, `import`, und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, durften möglicherweise nicht mehr für in Sandboxes ausgeführte Skripte freigegeben werden.
- Der JSON-Parser wurde für verbesserte Geschwindigkeit und Compliance neu geschrieben. Dies beinhaltet eine Behebung für [Firefox Bug 572279](https://bugzil.la/572279).

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indexierbar und können wie Arrays zugegriffen werden; zusätzlich haben sie eine `length` Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList), und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive` HTTP-Header nicht mehr; wir haben ihn nicht korrekt formatiert, und er war redundant, da wir auch den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }} Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter beim Wiederverwenden von Verbindungen im permanenten Verbindungspool zu sein; statt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO) Warteschlange zu behandeln, versucht Necko jetzt, den Pool nach Verbindungen mit dem größten [Stau-Fenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst zu sortieren. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen reduzieren, indem in vielen Fällen das Wachsen der Fenster von Verbindungen vermieden wird.
- Firefox verarbeitet den `Content-Disposition` HTTP-Antwortheader nun effektiver, wenn sowohl die `filename`- als auch die `filename*`-Parameter bereitgestellt werden; es durchsucht alle angegebenen Namen und verwendet den `filename*`-Parameter, wenn einer vorhanden ist, selbst wenn ein `filename`-Parameter zuerst enthalten ist. Früher wurde der erste passende Parameter verwendet, wodurch verhindert wurde, dass ein passenderer Name verwendet wird. Siehe [Firefox Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Entwickler-Tools

- Das [Web Konsolen `Console`-Objekt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat nun eine `debug()` Methode, die ein Alias für seine `log()` Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Seiten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihrer Add-ons für Firefox 5, schauen Sie bitte in [Aktualisieren von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_5).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm) Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die Methode `asyncFetch()` unterstützt jetzt die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal` Schnittstelle hat neue Attribute, die den Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle ermöglichen. Diese Informationen werden hauptsächlich zu Debug-Zwecken bereitgestellt.
- Die Attribute [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height) des {{ HTMLElement("canvas") }} Elements werden jetzt im IDL als unsigne Integers anstelle von signten Integern reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in der `nsIAppStartup` Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in der `nsIDocShell` Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in der `nsIFocusManager` Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in der `nsIHTMLEditor` Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox Bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox Bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox Bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E) Helper ermöglicht das Deklarieren von Variablen nur für `DEBUG` Builds.

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble) Werte in C-Integer und unsigned Integer zu konvertieren.

### Änderungen im Build-System

- Sie können Firefox jetzt ohne eine `mozconfig` Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) wird nun standardmäßig auf "browser" gesetzt. Nachdem Sie den Code gezogen oder heruntergeladen haben, können Sie `configure && make` (oder `make -f client.mk`) ausführen, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
