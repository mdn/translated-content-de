---
title: Versionshinweise für Entwickler zu Firefox 5
short-title: Firefox 5
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel enthält Links zu Informationen über Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente verfügen nun über das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die UTF-7- und UTF-32-[Zeichensätze](https://web.archive.org/web/20210612224236/https://developer.mozilla.org/de/docs/Gecko/Character_sets_supported_by_Gecko) entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten von nicht-leeren Elementen übersprungen, wenn sie abgeglichen werden.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriften für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungsdomain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP/Guides/CORS) wird in Zukunft erwartet, um dies sicherer zu ermöglichen.

#### Verbesserungen am Canvas

- Der {{ HTMLElement("canvas") }} 2D-Zeichnungskontext unterstützt nun die Angabe eines `ImageData`-Objekts als Eingabe für die `createImageData()`-Methode; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit denselben Dimensionen wie das angegebene Objekt initialisiert wird, jedoch mit allen Pixeln als transparentes Schwarz voreingestellt. Dies war bereits dokumentiert, aber noch nicht implementiert.
- Das Angeben von unendlichen Werten beim Hinzufügen von Farbstopps durch einen Aufruf der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Methode `addColorStop()` wirft jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR`.
- Die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Methode `toDataURL()` konvertiert jetzt die angegebenen MIME-Typen korrekt in Kleinbuchstaben, bevor ein Abgleich erfolgt.
- `getImageData()` akzeptiert nun korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln jetzt negative Argumente gemäß der Spezifikation, indem sie das Rechteck um die entsprechende Achse spiegeln. **Wir benötigen einen Artikel über [CSS-Größen](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Das Angeben von unendlichen Werten beim Aufrufen von `createImageData()` wirft nun korrekt eine `NOT_SUPPORTED_ERR`-Ausnahme.
- `createImageData()` und `getImageData()` geben jetzt korrekt mindestens einen Pixelbildwert zurück, wenn ein Rechteck kleiner als ein Pixel angegeben wird.
- Beim Aufrufen von `createRadialGradient()` wirft das Angeben eines negativen Radius nun korrekt `INDEX_SIZE_ERR`.
- Das Angeben eines `null`- oder `undefined`-Bildes beim Aufrufen von `createPattern()` oder `drawImage()` wirft nun korrekt eine `TYPE_MISMATCH_ERR`-Ausnahme.
- Das Angeben ungültiger Werte für `globalAlpha` wirft keine `SYNTAX_ERR`-Ausnahme mehr; diese werden jetzt korrekt stillschweigend ignoriert.
- Das Angeben ungültiger Werte beim Aufrufen von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` wirft keine Ausnahme mehr; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Das Setzen ungültiger Werte für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird jetzt stillschweigend ignoriert.
- Das Setzen ungültiger Werte für `rotate` oder `scale` wird jetzt stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Die Unterstützung für CSS-Animationen wurde hinzugefügt, vorerst mit dem `-moz-` Präfix.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde so geändert, dass die Granularität der "Wort"-Auswahl keine Leerzeichen mehr am Ende einbezieht; dies macht es konsistenter auf verschiedenen Plattformen und entspricht der Implementierung von WebKit.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) werden jetzt so eingestellt, dass sie in inaktiven Tabs nicht mehr als einmal pro Sekunde ausgeführt werden. Zusätzlich werden verschachtelte Timeouts nun auf den kleinsten Wert, der von der HTML5-Spezifikation erlaubt ist, von 4 ms (anstatt der vorherigen 10 ms) geklemmt.
- Ebenso wird die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) auf nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs geklemmt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt [das `loadend`-Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) für Fortschrittslistener. Dieses wird nach dem Abschluss eines Transfers gesendet (das heißt nach dem `abort`, `error` oder `load`-Ereignis). Sie können dies nutzen, um Aufgaben zu handhaben, die unabhängig vom Erfolg oder Misserfolg eines Transfers durchgeführt werden müssen.
- Die Methode `slice()` der [`Blob`](/de/docs/Web/API/Blob)- und in der Verlängerung die [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode heißt vorläufig `mozSlice()`.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt durch den Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist nun schreibgeschützt, wie es von der DOM-Spezifikation gefordert ist.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen zu Videowiedergabestatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr aufrufbar, als ob sie Funktionen wären; diese Änderung wurde in Abstimmung mit dem WebKit-Team durchgeführt, um die Kompatibilität sicherzustellen (siehe [WebKit Fehler 28285](https://webkit.org/b/28285)). Diese Funktion existierte lange Zeit, wurde aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird nun unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden bislang nur im strengen Modus als reserviert behandelt; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, dürfen nicht mehr an gesandboxte Skripte weitergegeben werden.
- Der JSON-Parser wurde neu geschrieben, um die Geschwindigkeit und Konformität zu verbessern. Dies schließt eine Korrektur für [Firefox Fehler 572279](https://bugzil.la/572279) ein.

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indizierbar und können wie Arrays aufgerufen werden; außerdem haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), `SVGPathSegList` und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive` HTTP-Header nicht mehr; wir haben ihn nicht korrekt formatiert, und er war redundant, da wir auch den {{ httpheader("Connection") }}- oder `Proxy-Connection`-Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter beim Wiederverwenden von Verbindungen im persistenten Verbindungspool zu sein; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko nun, den Pool mit Verbindungen mit dem größten [Stau-Fenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst zu sortieren. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen reduzieren, indem in vielen Fällen das Wachstum der Verbindungsfenster vermieden wird.
- Firefox handhabt den `Content-Disposition` HTTP-Antwort-Header jetzt effizienter, wenn sowohl die Parameter `filename` als auch `filename*` bereitgestellt werden; es durchsucht alle bereitgestellten Namen und verwendet den `filename*`-Parameter, wenn einer verfügbar ist, selbst wenn ein `filename`-Parameter zuerst enthalten ist. Zuvor wurde der erste passende Parameter verwendet, was verhinderte, dass ein geeigneterer Name verwendet wurde. Siehe [Firefox Fehler 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://w3c.github.io/mathml/spec.html#dfn-embellished-operator)

### Entwickler-Tools

- Das [`Console`-Objekt der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) verfügt jetzt über eine `debug()`-Methode, die ein Alias für ihre `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-On-Entwickler

Für einen Leitfaden zum Aktualisieren Ihres Add-Ons für Firefox 5, siehe bitte [Add-Ons für Firefox 5 aktualisieren](/de/docs/Mozilla/Firefox/Releases/5/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass Binärkomponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox. Einzelheiten finden Sie unter [Binary Interfaces](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](https://web.archive.org/web/20210517202711/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Dict.jsm)-Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die `asyncFetch()`-Methode unterstützt jetzt die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle hat neue Attribute, die Zugang zu Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen sind in erster Linie für Debugging-Zwecke vorgesehen.
- Die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height) des {{ HTMLElement("canvas") }}-Elements werden jetzt im IDL als unsigned Integer anstelle von signed Integern widergespiegelt (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in die `nsIAppStartup`-Schnittstelle zusammengeführt.
- Die `nsIDocShell_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIDocShell`-Schnittstelle zusammengeführt.
- Die `nsIFocusManager_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIFocusManager`-Schnittstelle zusammengeführt.
- Die `nsIHTMLEditor_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIHTMLEditor`-Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox Fehler 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox Fehler 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox Fehler 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](https://web.archive.org/web/20160805223656/https://developer.mozilla.org/de/docs/Archive/Mozilla/Namespace/Mozilla)-Helfer ermöglicht das Deklarieren von Variablen nur für `DEBUG`-Builds.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](https://web.archive.org/web/20210124042726/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](https://web.archive.org/web/20210124042726/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) wurden hinzugefügt, um [`jsdouble`](https://web.archive.org/web/20210512110527/https://developer.mozilla.org/de/docs/Mozilla/Projects/SpiderMonkey/JSAPI_reference/jsdouble)-Werte in C-Integer und unsigned Integer zu konvertieren.

### Änderungen am Build-System

- Sie können jetzt Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application`-Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) ist jetzt standardmäßig auf "browser" gesetzt. Nach dem Abrufen oder Herunterladen des Codes können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.
