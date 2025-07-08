---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente verfügen jetzt über das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um mit der HTML5-Spezifikation konform zu sein, wurde die Unterstützung für die Zeichensätze UTF-7 und UTF-32 [entfernt](/de/docs/Character_Sets_Supported_by_Gecko).
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten nicht leerer übersprungen, wenn sie übereinstimmen.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriftarten für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungsdomain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Access-Control](/de/docs/Web/HTTP_access_control) wird in Zukunft unterstützt, um dies sicherer zu ermöglichen.

#### Canvas-Verbesserungen

- Der 2D-Zeichenkontext von {{ HTMLElement("canvas") }} unterstützt nun das Angeben eines `ImageData`-Objekts als Eingabe für die Methode `createImageData()`; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit denselben Dimensionen wie das angegebene Objekt initialisiert ist, aber dennoch alle Pixel auf transparentes Schwarz voreingestellt. Dies wurde bereits dokumentiert, aber nicht implementiert.
- Gibt man nicht-finite Werte hinzu, wenn man Farbunterbrechungen über einen Aufruf der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Methode `addColorStop()` hinzufügt, wird jetzt korrekt `INDEX_SIZE_ERR` anstelle von `SYNTAX_ERR` ausgelöst.
- Die Methode [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) `toDataURL()` schreibt jetzt den angegebenen MIME-Typ korrekt in Kleinbuchstaben um, bevor er abgeglichen wird.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln nun negative Argumente entsprechend der Spezifikation, indem sie das Rechteck um die entsprechende Achse umkehren. **Wir benötigen einen Artikel über [CSS-Größenanpassung](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert.**
- Die Angabe nicht-finitiver Werte bei einem Aufruf von `createImageData()` löst jetzt korrekt eine `NOT_SUPPORTED_ERR`-Ausnahme aus.
- `createImageData()` und `getImageData()` geben jetzt bei Angabe eines Rechtecks kleiner als ein Pixel korrekt mindestens ein Pixel an Bilddaten zurück.
- Die Angabe eines negativen Radius bei einem Aufruf von `createRadialGradient()` löst jetzt korrekt `INDEX_SIZE_ERR` aus.
- Die Angabe eines `null` oder `undefined` Bildes bei einem Aufruf von `createPattern()` oder `drawImage()` löst jetzt korrekt eine `TYPE_MISMATCH_ERR` Ausnahme aus.
- Die Angabe ungültiger Werte für `globalAlpha` löst keine `SYNTAX_ERR`-Ausnahme mehr aus; diese werden jetzt korrekt still ignoriert.
- Die Angabe ungültiger Werte bei einem Aufruf von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` löst keine Ausnahme mehr aus; diese Aufrufe werden nun korrekt still ignoriert.
- Das Setzen eines ungültigen Wertes für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird jetzt still ignoriert.
- Das Setzen eines ungültigen Wertes für `rotate` oder `scale` wird jetzt still ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, zunächst mit dem `-moz-`-Präfix.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde geändert, sodass die Granularität der "Wort"-Auswahl keine nachgestellten Leerzeichen mehr umfasst; dies macht sie konsistenter über Plattformen hinweg und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind nun so begrenzt, dass sie nicht mehr als eine Timeout pro Sekunde in inaktiven Tabs senden. Darüber hinaus wird es jetzt auf den kleinsten vom HTML5-Spezifikationen erlaubten Wert begrenzt: 4 ms (anstatt der 10 ms, die bisher verwendet wurden).
- Ähnlich wird die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) jetzt auf nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs begrenzt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt das [`loadend`-Event](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) für Fortschritts-Listener. Dieses wird gesendet, nachdem ein Transfer abgeschlossen ist (das heißt, nach dem `abort`-, `error`- oder `load`-Event). Sie können dies nutzen, um Aufgaben zu bearbeiten, die unabhängig vom Erfolg oder Misserfolg eines Transfers durchgeführt werden müssen.
- Die Methode `slice()` der [`Blob`](/de/docs/Web/API/Blob)- und damit der [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode wird vorerst als `mozSlice()` bezeichnet.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt bestimmt, indem der Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) betrachtet wird.
- Die [`Element.prefix`](/de/docs/Web/API/Element/prefix)-Eigenschaft ist jetzt nur lesbar, wie es die DOM-Spezifikation erfordert.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Video-Malstatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr aufrufbar, als ob sie Funktionen wären; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team durchgeführt, um Kompatibilität sicherzustellen (siehe [WebKit-Bug 28285](https://webkit.org/b/28285)). Diese Funktion existierte seit langer Zeit, wurde aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird jetzt unterstützt; damit können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [Reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden zuvor nur im Strict-Modus als reserviert behandelt; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, können nicht mehr in einem Sandbox-Skript zugänglich gemacht werden.
- Der JSON-Parser wurde für verbesserte Geschwindigkeit und Konformität neu geschrieben. Dies beinhaltet eine Lösung für [Firefox-Bug 572279](https://bugzil.la/572279).

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indizierbar und können wie Arrays angesprochen werden; außerdem haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList) und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet nicht mehr den `Keep-Alive` HTTP-Header; wir haben ihn nicht korrekt formatiert, und er war redundant, da wir auch den {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }} Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter über die Wiederverwendung von Verbindungen im persistenten Verbindungs-Pool zu sein; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko jetzt, den Pool so zu sortieren, dass Verbindungen mit dem größten [Kongestionsfenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst kommen. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen verkürzen, indem der Bedarf an der Anlaufvergrößerung der Fenster der Verbindungen in vielen Fällen vermieden wird.
- Firefox behandelt jetzt den `Content-Disposition` HTTP-Response-Header effektiver, wenn sowohl die Parameter `filename` als auch `filename*` bereitgestellt werden; es prüft alle bereitgestellten Namen und verwendet den `filename*`-Parameter, wenn einer verfügbar ist, auch wenn ein `filename`-Parameter zuerst enthalten ist. Zuvor wurde der erste passende Parameter verwendet, was eine passendere Namensverwendung verhinderte. Siehe [Firefox-Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://w3c.github.io/mathml/spec.html#dfn-embellished-operator)

### Entwickler-Tools

- Das [Web-Konsole `Console`-Objekt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat jetzt eine `debug()`-Methode, die ein Alias für seine `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten vorhandenen Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5, lesen Sie bitte [Aktualisierung von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm)-Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die Methode `asyncFetch()` unterstützt jetzt die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle hat neue Attribute, die Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen werden hauptsächlich zu Debugging-Zwecken bereitgestellt.
- Die `width`- und `height`-Attribute des {{ HTMLElement("canvas") }} Elements werden jetzt in IDL als unsigned integers anstelle von signed dargestellt (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in der `nsIAppStartup`-Schnittstelle zusammengeführt.
- Die `nsIDocShell_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIDocShell`-Schnittstelle integriert.
- Die `nsIFocusManager_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIFocusManager` Schnittstelle integriert.
- Die `nsIHTMLEditor_MOZILLA_2_0_BRANCH`-Schnittstelle wurde in die `nsIHTMLEditor`-Schnittstelle integriert.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox-Bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox-Bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox-Bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E)-Helfer ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Integer und unsigned Integer zu konvertieren.

### Änderungen am Build-System

- Sie können jetzt Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) ist nun standardmäßig "browser". Nach dem Pullen oder Herunterladen des Codes können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
