---
title: Firefox 5 für Entwickler
short-title: Firefox 5
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel enthält Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente verfügen nun über das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um die HTML5-Spezifikation zu erfüllen, wurde die Unterstützung für die Zeichensätze UTF-7 und UTF-32 [entfernt](/de/docs/Character_Sets_Supported_by_Gecko).
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s bei der Zuordnung nicht länger zugunsten von nicht-leeren übersprungen.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriften für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Herkunfts-Domain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control)-Unterstützung sollte bald hinzukommen, um dies sicherer zu gestalten.

#### Verbesserungen für Canvas

- Der 2D-Zeichnungskontext des {{ HTMLElement("canvas") }} unterstützt jetzt die Angabe eines `ImageData`-Objekts als Eingabe für die `createImageData()`-Methode; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit den gleichen Abmessungen wie das angegebene Objekt initialisiert ist, jedoch immer noch mit allen Pixeln auf transparentes Schwarz voreingestellt. Dies war bereits als implementiert dokumentiert, jedoch nicht umgesetzt.
- Werden nicht-endliche Werte beim Hinzufügen von Farbverläufen über einen Aufruf der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Methode `addColorStop()` angegeben, wird jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR` geworfen.
- Die Methode `toDataURL()` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wandelt nun den angegebenen MIME-Typ vor der Übereinstimmung korrekt in Kleinbuchstaben um.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen des Canvas hinausgehen; Pixel außerhalb des Canvas werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln negative Argumente nun gemäß der Spezifikation, indem sie das Rechteck um die entsprechende Achse spiegeln. **Wir benötigen einen Artikel über [CSS-Sizing](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe von nicht-endlichen Werten beim Aufruf von `createImageData()` wirft nun korrekt eine `NOT_SUPPORTED_ERR`-Ausnahme.
- `createImageData()` und `getImageData()` geben jetzt korrekt mindestens ein Pixelbild zurück, wenn ein Rechteck kleiner als ein Pixel angegeben wird.
- Beim Aufruf von `createRadialGradient()` mit einem negativen Radius wird nun korrekt `INDEX_SIZE_ERR` geworfen.
- Die Angabe eines `null` oder `undefined` Bildes beim Aufruf von `createPattern()` oder `drawImage()` wirft nun korrekt eine `TYPE_MISMATCH_ERR`-Ausnahme.
- Die Angabe ungültiger Werte für `globalAlpha` wirft keine `SYNTAX_ERR`-Ausnahme mehr; diese werden nun korrekt stillschweigend ignoriert.
- Die Angabe ungültiger Werte bei den Aufrufen von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` wirft keine Ausnahme mehr; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Das Setzen eines ungültigen Wertes für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird nun stillschweigend ignoriert.
- Das Setzen eines ungültigen Wertes für `rotate` oder `scale` wird nun stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, vorerst mit dem Präfix `-moz-`.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde geändert, sodass die Granularität der "word"-Auswahl keine nachfolgenden Leerzeichen mehr umfasst; dies macht es plattformübergreifend konsistenter und bringt es in Einklang mit dem Verhalten von WebKits Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) werden nun auf maximal einen Timeout pro Sekunde in inaktiven Tabs geklammert. Darüber hinaus wird jetzt auch für verschachtelte Timeouts der kleinste vom HTML5-Standard erlaubte Wert eingehalten: 4 ms (statt der bisher 10 ms).
- Ähnlich wird die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) auf maximal ein Intervall pro Sekunde in inaktiven Tabs geklammert.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) [unterstützt nun das `loadend`-Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) für Fortschritts-Listener. Dies wird gesendet, nachdem jede Übertragung abgeschlossen ist (d.h. nach dem Ereignis `abort`, `error` oder `load`). Sie können dies verwenden, um alle Aufgaben zu erledigen, die unabhängig vom Erfolg oder Misserfolg einer Übertragung ausgeführt werden müssen.
- Die Methode `slice()` der Objekte [`Blob`](/de/docs/Web/API/Blob) und in Erweiterung auch der Objekte [`File`](/de/docs/Web/API/File) wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode trägt vorerst den Namen `mozSlice()`.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird nun durch den Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist nun schreibgeschützt, wie von der DOM-Spezifikation gefordert.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt nun experimentelle Eigenschaften, um Informationen über Video-Rahmenraten wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr aufrufbar, als wären sie Funktionen; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team vorgenommen, um Kompatibilität sicherzustellen (siehe [WebKit bug 28285](https://webkit.org/b/28285)). Dieses Feature existierte schon lange, wurde jedoch nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird nun unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden bisher nur im Strict-Modus als reserviert behandelt; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, dürfen nicht mehr in Sandbox-Skripten offengelegt werden.
- Der JSON-Parser wurde für verbesserte Geschwindigkeit und Konformität neu geschrieben. Dies beinhaltet eine Korrektur für [Firefox bug 572279](https://bugzil.la/572279).

### SVG

- Das `{{ SVGAttr("class") }}`-Attribut von SVG kann nun animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind nun indizierbar und können wie Arrays zugegriffen werden; darüber hinaus haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), `SVGPathSegList` und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den HTTP-Header `Keep-Alive` nicht mehr; wir haben ihn nicht korrekt formatiert, und er war redundant, da wir sowieso den Header {{ httpheader("Connection") }} oder `Proxy-Connection` mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter mit der Wiederverwendung von Verbindungen im persistenten Verbindungspool umzugehen; statt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Queue zu behandeln, versucht Necko nun, den Pool mit Verbindungen mit dem größten [Stau-Fenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst zu sortieren. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen reduzieren, indem es in vielen Fällen das Wachstum der Verbindungsfenster vermeidet.
- Firefox behandelt den HTTP-Antwort-Header `Content-Disposition` nun effektiver, wenn sowohl die Parameter `filename` als auch `filename*` vorhanden sind; es durchsucht alle bereitgestellten Namen und verwendet den Parameter `filename*`, wenn einer verfügbar ist, auch wenn zuerst ein `filename`-Parameter enthalten ist. Zuvor wurde der erste passende Parameter verwendet, wodurch verhindert wurde, dass ein geeigneterer Name verwendet wird. Siehe [Firefox bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://w3c.github.io/mathml/spec.html#dfn-embellished-operator).

### Entwicklerwerkzeuge

- Das [Web Console `Console`-Objekt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat jetzt eine `debug()`-Methode, die alias für seine `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zum Aktualisieren Ihres Add-ons für Firefox 5 lesen Sie bitte [Aktualisieren von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Releases/5/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox. Weitere Einzelheiten finden Sie in den [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm)-Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher aus Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die Methode `asyncFetch()` unterstützt nun das Angeben der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die Schnittstelle `nsIHttpChannelInternal` hat neue Attribute, die den Zugriff auf Informationen über die Adressen und Ports der Kanalendpunkte ermöglichen. Diese Informationen werden hauptsächlich zu Debugging-Zwecken bereitgestellt.
- Die Attribute `width` und `height` des {{ HTMLElement("canvas") }}-Elements werden nun in IDL als unsignierte Ganzzahlen anstelle von signierten reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
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

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Ganzzahlen und unsignierte Ganzzahlen zu konvertieren.

### Änderungen am Build-System

- Sie können jetzt Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application`-Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) ist nun standardmäßig auf "browser" gesetzt. Nach dem Herunterladen oder Pullen des Codes können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.
