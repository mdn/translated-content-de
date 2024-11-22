---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente haben nun das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey) Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die Zeichensätze UTF-7 und UTF-32 [entfernt](/de/docs/Character_Sets_Supported_by_Gecko).
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten nicht-leerer ignoriert, wenn sie übereinstimmen. Weitere Details finden Sie in den [Gecko-Hinweisen](/de/docs/Web/HTML/Element/map#gecko_notes) zum {{ HTMLElement("map") }} Element.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriftarten für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungsdomain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control) Unterstützung sollte künftig verfügbar sein, um dies sicherer zu ermöglichen.

#### Canvas-Verbesserungen

- Der {{ HTMLElement("canvas") }} 2D-Zeichnungskontext unterstützt jetzt die Angabe eines `ImageData`-Objekts als Eingabe für die `createImageData()` Methode; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit den gleichen Dimensionen wie das angegebene Objekt initialisiert ist, jedoch weiterhin alle Pixel auf transparentes Schwarz voreingestellt hat. Dies war dokumentiert, aber nicht implementiert.
- Bei der Angabe nicht-endlicher Werte bei der Farbstopp-Zugabe durch einen Aufruf der `CanvasGradient` Methoden `addColorStop()`, wird jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR` ausgelöst.
- Die `HTMLCanvasElement` Methode `toDataURL()` schreibt jetzt den angegebenen MIME-Typ vor dem Abgleich korrekt klein.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln nun negative Argumente gemäß der Spezifikation, indem sie das Rechteck um die entsprechende Achse drehen. **Wir benötigen einen Artikel über [CSS-Sizing](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe nicht-endlicher Werte bei der `createImageData()` Methode wirft jetzt korrekt eine `NOT_SUPPORTED_ERR` Ausnahme.
- `createImageData()` und `getImageData()` geben nun korrekt mindestens ein Pixel Bilddaten zurück, wenn ein kleineres als ein Pixel großes Rechteck angegeben wird.
- Die Angabe eines negativen Radius bei der `createRadialGradient()` Methode erzeugt nun korrekt `INDEX_SIZE_ERR`.
- Die Angabe eines `null` oder `undefined` Bildes bei den `createPattern()` oder `drawImage()` Methoden erzeugt nun korrekt eine `TYPE_MISMATCH_ERR` Ausnahme.
- Die Angabe ungültiger Werte für `globalAlpha` löst keine `SYNTAX_ERR` Ausnahme mehr aus; diese werden nun korrekt stillschweigend ignoriert.
- Ungültige Werte bei Aufrufen von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()`, oder `arc()` lösen keine Ausnahme mehr aus; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Das Setzen ungültiger Werte für `shadowOffsetX`, `shadowOffsetY`, oder `shadowBlur` wird nun stillschweigend ignoriert.
- Das Setzen ungültiger Werte für `rotate` oder `scale` wird nun stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, derzeit mit dem `-moz-` Präfix.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection) Objekts wurde geändert, sodass die "word" Auswahlgranularität keine nachfolgenden Leerzeichen mehr einschließt; dies macht es konsistenter zwischen Plattformen und entspricht dem Verhalten von WebKits Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) werden nun so geklammert, dass sie in inaktiven Tabs nicht mehr als ein Timeout pro Sekunde senden. Zusätzlich klammern sie jetzt geschachtelte Timeouts auf den kleinsten von der HTML5 Spezifikation erlaubten Wert: 4 ms (anstelle der bisherigen 10 ms).
- Ebenso klammert die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) ebenfalls auf nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt nun [das `loadend` Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschritts-Listener. Dies wird nach jedem Transfer gesendet (also nach dem `abort`, `error`, oder `load` Ereignis). Sie können dies verwenden, um Aufgaben zu behandeln, die unabhängig vom Erfolg oder Fehlschlag eines Transfers durchgeführt werden müssen.
- Die `slice()` Methode der [`Blob`](/de/docs/Web/API/Blob) und somit der [`File`](/de/docs/Web/API/File) Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die mehr Konsistenz mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript bietet. Diese Methode ist derzeit als `mozSlice()` benannt.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt durch den Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist nun nur lesbar, wie es die DOM-Spezifikation erfordert.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt nun experimentelle Eigenschaften, um Informationen über Video-Paint-Statistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr aufrufbar, als ob sie Funktionen wären; diese Änderung wurde zusammen mit dem WebKit-Team vorgenommen, um die Kompatibilität sicherzustellen (siehe [WebKit Bug 28285](https://webkit.org/b/28285)). Dieses Feature existierte seit langem, wurde jedoch nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird jetzt unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden bisher nur im strengen Modus als reserviert behandelt; jetzt werden sie immer als reserviert betrachtet: `class`, `enum`, `export`, `extends`, `import`, und `super`.
- DOM-Dokumente, die in Chrome-Code erstellt wurden, dürfen nicht mehr an gesandboxte Skripte weitergegeben werden.
- Der JSON-Parser wurde neu geschrieben für verbesserte Geschwindigkeit und Konformität. Dies umfasst eine Korrektur für [Firefox Bug 572279](https://bugzil.la/572279).

### SVG

- Das SVG-Attribut {{ SVGAttr("class") }} kann nun animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind nun indexierbar und können wie Arrays zugegriffen werden; zusätzlich haben sie eine `length` Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList), und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet nicht mehr den `Keep-Alive` HTTP-Header; wir haben ihn nicht korrekt formatiert, und er war redundant, da wir auch den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }} Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter mit der Wiederverwendung von Verbindungen im Persistent-Connection-Pool umzugehen; anstatt den Pool wie eine [FIFO](https://en.wikipedia.org/wiki/FIFO) Queue zu behandeln, versucht Necko nun, den Pool so zu sortieren, dass Verbindungen mit dem größten [Congestion Window](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst kommen. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen reduzieren, indem die Notwendigkeit vermieden wird, Fenster von Verbindungen in vielen Fällen zu vergrößern.
- Firefox behandelt nun den `Content-Disposition` HTTP-Response-Header effektiver, wenn sowohl die `filename` als auch die `filename*` Parameter bereitgestellt werden; es durchsucht alle bereitgestellten Namen und verwendet den `filename*` Parameter, wenn einer verfügbar ist, auch wenn zuerst ein `filename` Parameter enthalten ist. Früher wurde der erste übereinstimmende Parameter verwendet, wodurch ein geeigneterer Name möglicherweise nicht verwendet wurde. Siehe [Firefox Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Entwicklerwerkzeuge

- Das [Konsolenobjekt der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) verfügt nun über eine `debug()` Methode, die ein Alias für die `log()` Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5, lesen Sie bitte [Updating add-ons for Firefox 5](/de/docs/Mozilla/Firefox/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle großen Firefox-Veröffentlichungen. Siehe [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm) Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die Methode `asyncFetch()` unterstützt nun die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal` Schnittstelle hat neue Attribute, die Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen werden hauptsächlich zu Debugging-Zwecken bereitgestellt.
- Die Attribute `width` und `height` des {{ HTMLElement("canvas") }} Elements werden nun in IDL als unsignierte Ganzzahlen anstelle von signierten widergespiegelt (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in die `nsIAppStartup` Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in die `nsIDocShell` Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in die `nsIFocusManager` Schnittstelle zusammengeführt.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in die `nsIHTMLEditor` Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox Bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox Bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox Bug 619996](https://bugzil.la/619996))

### Debug-Hilfen

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E) Helper ermöglicht es, Variablen nur für `DEBUG` Builds zu deklarieren.

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, für die Umwandlung von [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble) Werten in C Ganzzahlen und unsignierte Ganzzahlen.

### Änderungen im Build-System

- Sie können nun Firefox ohne eine `mozconfig` Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) standardmäßig auf "browser". Nach dem Pullen oder Herunterladen des Codes können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
