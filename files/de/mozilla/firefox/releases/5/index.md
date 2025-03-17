---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Veränderungen, die Entwickler in dieser Ausgabe betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente verfügen jetzt über das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die Zeichensatzkodierungen UTF-7 und UTF-32 [entfernt](/de/docs/Character_Sets_Supported_by_Gecko).
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten nicht-leerer übersprungen, wenn sie übereinstimmen. Weitere Informationen finden Sie in den [Gecko-Hinweisen](/de/docs/Web/HTML/Element/map#gecko_notes) zum {{ HTMLElement("map") }}-Element.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriftarten für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungs-Domain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control)-Unterstützung sollte in Zukunft verfügbar sein, um dies sicherer zu ermöglichen.

#### Verbesserungen der Canvas

- Der 2D-Zeichnungskontext von {{ HTMLElement("canvas") }} unterstützt nun die Angabe eines `ImageData`-Objekts als Eingabe für die `createImageData()`-Methode; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit denselben Abmessungen wie das angegebene Objekt initialisiert ist, aber immer noch mit allen Pixeln auf transparentes Schwarz vorgesetzt ist. Dies war bereits als implementiert dokumentiert, war es aber nicht.
- Die Angabe von nicht-finiten Werten beim Hinzufügen von Farbstopps über einen Aufruf der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Methode `addColorStop()` wirft jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR`.
- Die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Methode `toDataURL()` konvertiert jetzt korrekt den angegebenen MIME-Type in Kleinbuchstaben, bevor sie ihn vergleicht.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln jetzt negative Argumente gemäß der Spezifikation, indem sie das Rechteck um die entsprechende Achse spiegeln. **Wir benötigen einen Artikel über [CSS-Größenanpassung](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe von nicht-finiten Werten beim Aufrufen von `createImageData()` löst jetzt ordnungsgemäß eine `NOT_SUPPORTED_ERR`-Ausnahme aus.
- `createImageData()` und `getImageData()` geben jetzt korrekt mindestens ein Pixel-Bilddaten zurück, wenn ein kleineres als ein Pixel großes Rechteck angegeben wird.
- Die Angabe eines negativen Radius beim Aufruf von `createRadialGradient()` löst jetzt korrekt `INDEX_SIZE_ERR` aus.
- Die Angabe eines `null` oder `undefined` Bildes beim Aufruf von `createPattern()` oder `drawImage()` löst jetzt korrekt eine `TYPE_MISMATCH_ERR`-Ausnahme aus.
- Die Angabe ungültiger Werte für `globalAlpha` löst keine `SYNTAX_ERR`-Ausnahme mehr aus; diese werden jetzt korrekt stillschweigend ignoriert.
- Die Angabe ungültiger Werte beim Aufruf von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` löst keine Ausnahme mehr aus; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Das Festlegen eines ungültigen Wertes für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird jetzt stillschweigend ignoriert.
- Das Festlegen eines ungültigen Wertes für `rotate` oder `scale` wird jetzt stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Die Unterstützung für CSS-Animationen wurde hinzugefügt, derzeit mit dem Präfix `-moz-`.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde so geändert, dass die Granularität "Wort" keine nachlaufenden Leerzeichen mehr einschließt; dies macht sie plattformübergreifend konsistenter und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind jetzt darauf begrenzt, nicht mehr als ein Timeout pro Sekunde in inaktiven Tabs zu senden. Darüber hinaus begrenzt es jetzt verschachtelte Timeouts auf den kleinsten, von der HTML5-Spezifikation erlaubten Wert: 4 ms (statt der zuvor verwendeten 10 ms).
- Ebenso begrenzt die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) jetzt auf nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt [das `loadend` Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschrittsbeobachter. Dies wird gesendet, nachdem ein Transfer abgeschlossen ist (d.h. nach dem `abort`, `error` oder `load` Ereignis). Sie können dies nutzen, um Aufgaben zu behandeln, die unabhängig vom Erfolg oder Misserfolg eines Transfers ausgeführt werden müssen.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)- und in der Erweiterung der [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode heißt vorerst `mozSlice()`.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt durch den Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist jetzt schreibgeschützt, wie es die DOM-Spezifikation verlangt.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt nun experimentelle Eigenschaften, um Informationen über Videodarstellungsstatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke können nicht mehr aufgerufen werden, als ob sie Funktionen wären; diese Änderung wurde in Abstimmung mit dem WebKit-Team vorgenommen, um die Kompatibilität zu gewährleisten (siehe [WebKit bug 28285](https://webkit.org/b/28285)). Diese Funktion existierte schon lange, wurde aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird jetzt unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden zuvor nur im strikten Modus als reserviert behandelt; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, können jetzt nicht mehr an gesandboxten Skripten weitergegeben werden.
- Der JSON-Parser wurde für verbesserte Geschwindigkeit und Konformität neu geschrieben. Dies beinhaltet eine Korrektur für [Firefox bug 572279](https://bugzil.la/572279).

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann nun animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indexierbar und können wie Arrays angesprochen werden; außerdem haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList) und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet nicht mehr den `Keep-Alive` HTTP-Header; wir haben ihn nicht korrekt formatiert, und er war redundant, da wir auch den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }}-Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter mit der Wiederverwendung von Verbindungen im persistenten Verbindungspool umzugehen; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko jetzt, den Pool nach Verbindungen mit dem größten [Stau-Fenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zu sortieren. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen reduzieren, indem in vielen Fällen das Wachsen der Fenster von Verbindungen vermieden wird.
- Firefox verarbeitet den `Content-Disposition` HTTP-Antwort-Header jetzt effektiver, wenn sowohl die `filename` als auch die `filename*` Parameter bereitgestellt werden; es durchläuft alle bereitgestellten Namen und verwendet den `filename*`-Parameter, wenn einer verfügbar ist, selbst wenn ein `filename`-Parameter zuerst enthalten ist. Bisher wurde der erste übereinstimmende Parameter verwendet, was verhinderte, dass ein angemessenerer Name verwendet wurde. Siehe [Firefox bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Entwicklerwerkzeuge

- Das [Konsolenobjekt der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) verfügt jetzt über eine `debug()`-Methode, die ein Alias für die `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5 lesen Sie bitte [Aktualisierung von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, ebenso wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das Modul [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm) wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die `asyncFetch()`-Methode unterstützt nun die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle verfügt über neue Attribute, die den Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen werden hauptsächlich für Debugging-Zwecke bereitgestellt.
- Die [`width`](/de/docs/Web/HTML/Element/canvas#width)- und [`height`](/de/docs/Web/HTML/Element/canvas#height)-Attribute des {{ HTMLElement("canvas") }} Elements werden jetzt in IDL als unsignierte Ganzzahlen anstelle von signierten reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die `nsIAppStartup2`- und `nsIAppStartup_MOZILLA_2_0`-Schnittstellen wurden in die `nsIAppStartup`-Schnittstelle zusammengeführt.
- Die `nsIDocShell_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIDocShell`-Schnittstelle zusammengeführt.
- Die `nsIFocusManager_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIFocusManager`-Schnittstelle zusammengeführt.
- Die `nsIHTMLEditor_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIHTMLEditor`-Schnittstelle zusammengeführt.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [Hilfsdienst `DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E) macht es möglich, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Ganzzahlen und unsignierte Ganzzahlen zu konvertieren.

### Änderungen im Build-System

- Sie können nun Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) wird jetzt standardmäßig auf "browser" gesetzt. Nach dem Abrufen oder Herunterladen des Codes können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
