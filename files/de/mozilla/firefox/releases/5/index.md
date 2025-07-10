---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente haben nun das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die Zeichensätze UTF-7 und UTF-32 entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s nicht mehr zugunsten von nicht-leeren bei der Zuordnung übersprungen.
- Firefox Mobile auf Android unterstützt jetzt WOFF-Schriften für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungsdomain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control)-Unterstützung soll in Zukunft kommmen, um dies sicherer zu ermöglichen.

#### Verbesserungen am Canvas

- Der {{ HTMLElement("canvas") }} 2D-Zeichnungskontext unterstützt nun die Angabe eines `ImageData`-Objekts als Eingabe für die Methode `createImageData()`; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object), das mit denselben Abmessungen wie das angegebene Objekt initialisiert ist, aber immer noch alle Pixel auf transparentes Schwarz voreingestellt hat. Dies war bereits dokumentiert, aber nicht implementiert.
- Bei der Angabe nicht-finiten Werten beim Hinzufügen von Farbstopps durch einen Aufruf der `CanvasGradient`-Methode `addColorStop()` wird jetzt korrekt `INDEX_SIZE_ERR` statt `SYNTAX_ERR` ausgelöst.
- Die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Methode `toDataURL()` kleinschreibt jetzt korrekt den angegebenen MIME-Typ vor dem Abgleichen.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über den Rand der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln jetzt negative Argumente gemäß der Spezifikation, indem sie das Rechteck um die entsprechende Achse umklappen. **Es ist ein Artikel über [CSS-Größenanpassung](https://drafts.csswg.org/css-images-3/) und wie dies funktioniert, notwendig.**
- Die Angabe nicht-finiten Werten beim Aufrufen von `createImageData()` löst nun korrekt eine `NOT_SUPPORTED_ERR`-Ausnahme aus.
- `createImageData()` und `getImageData()` geben nun korrekt zumindest ein Pixelbilddaten zurück, wenn ein Rechteck kleiner als ein Pixel angegeben wird.
- Die Angabe eines negativen Radius beim Aufrufen von `createRadialGradient()` löst nun korrekt `INDEX_SIZE_ERR` aus.
- Die Angabe eines `null` oder `undefined` Bildes beim Aufrufen von `createPattern()` oder `drawImage()` löst nun korrekt eine `TYPE_MISMATCH_ERR`-Ausnahme aus.
- Das Angabe ungültiger Werte für `globalAlpha` löst keine `SYNTAX_ERR`-Ausnahme mehr aus.; diese werden nun korrekt stillschweigend ignoriert.
- Die Angabe ungültiger Werte beim Aufrufen von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` löst keine Ausnahme mehr aus; diese Aufrufe werden nun korrekt stillschweigend ignoriert.
- Das Setzen eines ungültigen Wertes für `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` wird nun stillschweigend ignoriert.
- Das Setzen eines ungültigen Wertes für `rotate` oder `scale` wird nun stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, unter Verwendung des `-moz-` Prädikats vorerst.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde geändert, sodass die Auswahlgranularität "Wort" keine nachfolgenden Leerzeichen mehr umfasst; dies macht es über Plattformen hinweg konsistenter und entspricht der Verhaltensweise von WebKits Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind jetzt darauf beschränkt, nicht mehr als ein Timeout pro Sekunde in inaktiven Tabs zu senden. Zusätzlich klemmt es nun geschachtelte Timeouts auf den kleinsten Wert, der in der HTML5-Spezifikation erlaubt ist: 4 ms (anstatt der 10 ms, auf die es früher klemmte).
- Ebenso klemmen die Methoden [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) auf nicht mehr als ein Intervall pro Sekunde in inaktiven Tabs.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt das [`loadend`-Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) für Fortschrittslistener. Dies wird gesendet, nachdem ein Transfer jeglicher Art abgeschlossen ist (d.h. nach dem `abort`, `error` oder `load`-Ereignis). Sie können es verwenden, um Aufgaben zu bearbeiten, die unabhängig vom Erfolg oder Misserfolg eines Transfers durchgeführt werden müssen.
- Die `slice()`-Methode der [`Blob`](/de/docs/Web/API/Blob)- und damit verbundenen [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode ist vorerst als `mozSlice()` benannt.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt durch das Ansehen des Werts der `Accept-Language` [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist jetzt schreibgeschützt, wie in der DOM-Spezifikation gefordert.
- Das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Video-Malstatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr aufrufbar, als wären sie Funktionen; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team vorgenommen, um die Kompatibilität sicherzustellen (siehe [WebKit Bug 28285](https://webkit.org/b/28285)). Dieses Feature existierte seit langem, wurde aber nie dokumentiert (zumindest hier auf MDC nicht).
- Die Methode `Function.prototype.isGenerator()` wird jetzt unterstützt; mit dieser können Sie feststellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden bisher nur dann als reserviert betrachtet, wenn sie im strengen Modus genutzt wurden; jetzt werden sie immer als reserviert betrachtet: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, können nicht mehr für gesandte Skripte exponiert sein.
- Der JSON-Parser wurde neu geschrieben, um die Geschwindigkeit und Konformität zu verbessern. Dies schließt eine Behebung für [Firefox Bug 572279](https://bugzil.la/572279) ein.

### SVG

- Die SVG-Attribut {{ SVGAttr("class") }} kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indizierbar und können wie Arrays aufgerufen werden; zusätzlich haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen anzeigt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), `SVGPathSegList`, und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive` HTTP-Header nicht mehr; wir haben ihn nicht korrekt formatiert, und er war redundant, da wir zusätzlich den {{ httpheader("Connection") }} oder `Proxy-Connection` Header mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter mit der Wiederverwendung von Verbindungen im Persistent-Connection-Pool umzugehen; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko jetzt, den Pool so zu sortieren, dass Verbindungen mit dem größten [Stau-Fenster](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst kommen. Dies kann die Rundreisezeit (RTT) von HTTP-Transaktionen reduzieren, indem die Notwendigkeit vermieden wird, Verbindungsvollfenster zu vergrößern.
- Firefox behandelt den HTTP-Response-Header `Content-Disposition` effektiver, wenn sowohl die Parameter `filename` als auch `filename*` bereitgestellt werden; es sieht sich alle bereitgestellten Namen an und benutzt den `filename*`-Parameter, falls vorhanden, selbst wenn zuvor ein `filename`-Parameter inkludiert ist. Bisher wurde der erste passende Parameter verwendet, was verhinderte, dass ein passender Name genutzt wurde. Siehe [Firefox Bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [geschmückte Operatoren](https://w3c.github.io/mathml/spec.html#dfn-embellished-operator)

### Entwicklertools

- Das [Web Console's `Console`-Objekt](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat jetzt eine `debug()`-Methode, die ein Alias für die `log()`-Methode ist; dies verbessert die Kompatibilität mit bestimmten bestehenden Seiten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5, siehe [Aktualisieren von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Releases/5/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass binäre Komponenten neu kompiliert werden, wie es bei allen großen Veröffentlichungen von Firefox der Fall ist. Siehe [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm)-Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die `asyncFetch()`-Methode unterstützt jetzt die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die `nsIHttpChannelInternal`-Schnittstelle hat neue Attribute, die Zugriff auf Informationen über die Adressen und Ports der Endpunkte der Kanäle bieten. Diese Informationen werden hauptsächlich zu Debugging-Zwecken bereitgestellt.
- Die Attribute [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height) des {{ HTMLElement("canvas") }}-Elements werden jetzt im IDL als unsignierte Ganzzahlen anstelle von signierten reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
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

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E)-Helfer macht es möglich, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript-API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Ganzzahlen und unsignierte Ganzzahlen zu konvertieren.

### Änderungen am Build-System

- Sie können jetzt Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) hat jetzt als Standard "browser". Nachdem Sie den Code heruntergeladen oder heruntergeladen haben, können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
