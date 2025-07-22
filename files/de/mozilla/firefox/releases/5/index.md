---
title: Firefox 5 für Entwickler
short-title: Firefox 5
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente haben nun das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey) Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die UTF-7 und UTF-32 [Zeichensätze](https://web.archive.org/web/20210612224236/https://developer.mozilla.org/de/docs/Gecko/Character_sets_supported_by_Gecko) entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten von nicht-leeren übersprungen.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriftarten für {{ cssxref("@font-face") }}.
- Aus Sicherheitsgründen [lädt WebGL keine Texturen mehr von anderen Domains als der Ursprungsdomain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures). [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS) Unterstützung soll in Zukunft eingeführt werden, um dies sicherer zu ermöglichen.

#### Canvas-Verbesserungen

- Der 2D-Zeichnungskontext des {{ HTMLElement("canvas") }} unterstützt nun das Angeben eines `ImageData` Objekts als Eingabe für die Methode `createImageData()`; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit den gleichen Abmessungen wie das angegebene Objekt initialisiert wird, jedoch mit allen Pixeln in transparentem Schwarz. Dies war dokumentiert, aber nicht umgesetzt.
- Das Angeben von nicht-endlichen Werten beim Hinzufügen von Farbverläufen durch einen Aufruf der `addColorStop()` Methode von [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) wirft nun korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR`.
- Die Methode `toDataURL()` von [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wandelt nun die angegebene MIME-Type korrekt in Kleinbuchstaben vor dem Abgleichen um.
- `getImageData()` akzeptiert nun korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` verarbeiten nun negative Argumente gemäß der Spezifikation, indem sie das Rechteck um die entsprechende Achse spiegeln. **Wir benötigen einen Artikel über [CSS-Sizing](https://drafts.csswg.org/css-images-3/) und wie das funktioniert.**
- Nicht-endliche Werte beim Aufrufen von `createImageData()` werfen nun korrekt eine `NOT_SUPPORTED_ERR` Ausnahme.
- `createImageData()` und `getImageData()` geben nun korrekt mindestens ein Pixel Bilddaten zurück, wenn ein kleineres Rechteck als ein Pixel angegeben wird.
- Das Angeben eines negativen Radius bei `createRadialGradient()` wirft nun korrekt `INDEX_SIZE_ERR`.
- Ein `null` oder `undefined` Bild bei `createPattern()` oder `drawImage()` anzugeben, wirft nun korrekt eine `TYPE_MISMATCH_ERR` Ausnahme.
- Ungültige Werte für `globalAlpha` werfen keine `SYNTAX_ERR` Ausnahme mehr; sie werden nun korrekt stillschweigend ignoriert.
- Ungültige Werte bei `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` werfen keine Ausnahme mehr; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Das Setzen eines ungültigen Wertes für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird nun stillschweigend ignoriert.
- Das Setzen eines ungültigen Wertes für `rotate` oder `scale` wird nun stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, vorerst mit dem `-moz-` Präfix.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection) Objekts wurde geändert, sodass die Granularität der "Wort"-Auswahl keine Nachlaufzeichen mehr einschließt; dies macht sie konsistenter über Plattformen hinweg und passt zum Verhalten von WebKits Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind nun darauf beschränkt, nicht mehr als ein Timeout pro Sekunde in inaktiven Tabs zu senden. Zusätzlich wird jetzt auf verschachtelte Timeouts auf den kleinsten, von der HTML5-Spezifikation erlaubten Wert von 4 ms gegrenzt (anstelle der vorher 10 ms).
- Ebenso wird die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) nun darauf beschränkt, nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs zu senden.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt [das `loadend` Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) für Fortschritt-Listener. Dies wird gesendet, nachdem jeder Transfer abgeschlossen ist (d.h. nach dem `abort`, `error` oder `load` Ereignis). Sie können dies verwenden, um alle Aufgaben zu erledigen, die unabhängig vom Erfolg oder Misserfolg eines Transfers durchgeführt werden müssen.
- Die Methode `slice()` der [`Blob`](/de/docs/Web/API/Blob) und dadurch auch der [`File`](/de/docs/Web/API/File) Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode heißt vorerst `mozSlice()`.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird nun durch das Betrachten des Wertes des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist nun schreibgeschützt, wie es die DOM-Spezifikation erfordert.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Video-Darstellungsstatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke können nicht mehr aufgerufen werden, als wären sie Funktionen; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team vorgenommen, um Kompatibilität sicherzustellen (siehe [WebKit-Bug 28285](https://webkit.org/b/28285)). Diese Funktion existierte schon lange, war aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird nun unterstützt; damit können Sie bestimmen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden zuvor nur in strict mode als reserviert behandelt; jetzt werden sie immer als reserviert betrachtet: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, können nicht mehr auf gesandboxte Skripte zugreifen.
- Der JSON-Parser wurde neu geschrieben, um Geschwindigkeit und Konformität zu verbessern. Dazu gehört auch ein Fix für [Firefox-Bug 572279](https://bugzil.la/572279).

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann nun animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten repräsentieren, sind jetzt indexierbar und können wie Arrays angesprochen werden; zudem haben sie eine `length` Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), `SVGPathSegList` und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive` HTTP-Header nicht mehr; wir haben ihn nicht korrekt formatiert, und er war überflüssig, da wir auch den {{ httpheader("Connection") }} oder `Proxy-Connection` Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um klüger mit der Wiederverwendung von Verbindungen im persistenten Verbindungspool umzugehen; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO) Warteschlange zu behandeln, versucht Necko nun, den Pool mit Verbindungen mit dem größten [Stauwindow](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst zu sortieren. Dies kann die Round-Trip-Time (RTT) von HTTP-Transaktionen reduzieren, indem die Notwendigkeit, Fenster von Verbindungen zu vergrößern, vermieden wird.
- Firefox verarbeitet den `Content-Disposition` HTTP-Antwort-Header nun effektiver, wenn sowohl die `filename` als auch die `filename*` Parameter angegeben sind; es schaut durch alle bereitgestellten Namen und nutzt den `filename*` Parameter, wenn einer verfügbar ist, selbst wenn ein `filename` Parameter zuerst enthalten ist. Bisher wurde der erste passende Parameter verwendet, was verhinderte, dass ein passenderer Name verwendet wurde. Siehe [Firefox-Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://w3c.github.io/mathml/spec.html#dfn-embellished-operator)

### Entwickler-Tools

- Das [`Console`-Objekt der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat nun eine `debug()` Methode, die ein Alias für die `log()` Methode ist; dies verbessert die Kompatibilität mit bestimmten existierenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5 lesen Sie bitte [Aktualisieren von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Releases/5/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox. Einzelheiten finden Sie unter [Binary Interfaces](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](https://web.archive.org/web/20210517202711/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Dict.jsm) Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher mit Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die Methode `asyncFetch()` unterstützt nun das Angeben der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal` Schnittstelle hat neue Attribute, die den Zugriff auf Informationen über die Endpunkte der Kanäle und deren Adressen und Ports bieten. Diese Informationen werden hauptsächlich zu Debugging-Zwecken bereitgestellt.
- Die `width` und `height` Attribute des {{ HTMLElement("canvas") }} Elements sind nun in IDL als vorzeichenlose Ganzzahlen anstelle von signierten reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` Schnittstellen wurden in die `nsIAppStartup` Schnittstelle zusammengeführt.
- Die `nsIDocShell_MOZILLA_2_0_BRANCH` Schnittstelle wurde in die `nsIDocShell` Schnittstelle zusammengeführt.
- Die `nsIFocusManager_MOZILLA_2_0_BRANCH` Schnittstelle wurde in die `nsIFocusManager` Schnittstelle zusammengeführt.
- Die `nsIHTMLEditor_MOZILLA_2_0_BRANCH` Schnittstelle wurde in die `nsIHTMLEditor` Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox-Bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox-Bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox-Bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](https://web.archive.org/web/20160805223656/https://developer.mozilla.org/de/docs/Archive/Mozilla/Namespace/Mozilla) Helfer ermöglicht es, Variablen nur für `DEBUG` Builds zu deklarieren.

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](https://web.archive.org/web/20210124042726/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](https://web.archive.org/web/20210124042726/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) wurden hinzugefügt, um [`jsdouble`](https://web.archive.org/web/20210512110527/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_reference/jsdouble) Werte in C-Ganzzahlen und vorzeichenlose Ganzzahlen zu konvertieren.

### Änderungen im Build-System

- Sie können jetzt Firefox ohne eine `mozconfig` Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) wird nun standardmäßig auf "browser" gesetzt. Nach dem Herunterladen oder Klonen des Codes, können Sie `configure && make` (oder `make -f client.mk`) nutzen, um Firefox zu bauen.
