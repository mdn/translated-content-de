---
title: Firefox 5 für Entwickler
slug: Mozilla/Firefox/Releases/5
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 5, basierend auf Gecko 5.0, wurde am 21. Juni 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Alle HTML-Elemente verfügen jetzt über das [`accessKey`](/de/docs/Web/API/HTMLElement/accessKey)-Attribut sowie die Methoden [`blur()`](/de/docs/Web/API/HTMLElement/blur), [`click()`](/de/docs/Web/API/HTMLElement/click) und [`focus()`](/de/docs/Web/API/HTMLElement/focus). Diese sind in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle spezifiziert.
- Um der HTML5-Spezifikation zu entsprechen, wurde die Unterstützung für die UTF-7 und UTF-32 [Zeichensätze](/de/docs/Character_Sets_Supported_by_Gecko) entfernt.
- Im Quirks-Modus werden leere {{ HTMLElement("map") }}s jetzt nicht mehr zugunsten von nicht leeren übersprungen, wenn sie übereinstimmen. Siehe die [Gecko-Hinweise](/de/docs/Web/HTML/Reference/Elements/map#gecko_notes) zum {{ HTMLElement("map") }}-Element für Details.
- Firefox Mobile auf Android unterstützt nun WOFF-Schriftarten für {{ cssxref("@font-face") }}.
- WebGL [lädt keine Texturen mehr von anderen Domains als der Ursprungsdomain](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures) als Sicherheitsmaßnahme. [HTTP-Zugriffskontrolle](/de/docs/Web/HTTP_access_control)-Unterstützung sollte in Zukunft bereitgestellt werden, um dies sicherer zu ermöglichen.

#### Verbesserungen bei Canvas

- Der 2D-Zeichenkontext des {{ HTMLElement("canvas") }} unterstützt jetzt die Angabe eines `ImageData`-Objekts als Eingabe für die Methode `createImageData()`; dies [erstellt ein neues `ImageData`-Objekt](/de/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object) mit den gleichen Abmessungen wie das angegebene Objekt, aber mit allen Pixeln auf transparentes Schwarz voreingestellt. Dies wurde bereits als implementiert dokumentiert, war es aber nicht.
- Das Spezifizieren von nicht-endlichen Werten beim Hinzufügen von Farbverläufen über einen Aufruf der [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Methode `addColorStop()` wirft jetzt korrekt `INDEX_SIZE_ERR` statt `SYNTAX_ERR`.
- Die Methode [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) `toDataURL()` konvertiert den angegebenen MIME-Typ jetzt korrekt in Kleinbuchstaben vor dem Abgleichen.
- `getImageData()` akzeptiert jetzt korrekt Rechtecke, die über die Grenzen der Leinwand hinausgehen; Pixel außerhalb der Leinwand werden als transparentes Schwarz zurückgegeben.
- `drawImage()` und `createImageData()` behandeln jetzt negative Argumente gemäß der Spezifikation, indem sie das Rechteck um die entsprechende Achse drehen. **Wir benötigen einen Artikel über [CSS-Größen](https://drafts.csswg.org/css-images-3/) und wie das funktioniert.**
- Nicht-endliche Werte bei Aufrufen von `createImageData()` verursachen jetzt korrekt eine `NOT_SUPPORTED_ERR`-Ausnahme.
- `createImageData()` und `getImageData()` geben nun korrekt mindestens ein Pixel Bilddaten zurück, wenn ein Rechteck kleiner als ein Pixel spezifiziert wurde.
- Das Einfügen eines negativen Radius bei Aufruf von `createRadialGradient()` wirft jetzt korrekt `INDEX_SIZE_ERR`.
- Das Einfügen eines `null` oder `undefined` Bildes bei Aufruf von `createPattern()` oder `drawImage()` wirft jetzt korrekt `TYPE_MISMATCH_ERR`.
- Das Einfügen ungültiger Werte für `globalAlpha` wirft keine `SYNTAX_ERR`-Ausnahme mehr; diese werden nun korrekt stillschweigend ignoriert.
- Das Einfügen ungültiger Werte bei Aufruf von `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()` oder `arc()` wirft keine Ausnahme mehr; diese Aufrufe werden jetzt korrekt stillschweigend ignoriert.
- Das Setzen des Werts von `shadowOffsetX`, `shadowOffsetY` oder `shadowBlur` auf einen ungültigen Wert wird jetzt stillschweigend ignoriert.
- Das Setzen des Werts von `rotate` oder `scale` auf einen ungültigen Wert wird jetzt stillschweigend ignoriert.

### CSS

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Unterstützung für CSS-Animationen wurde hinzugefügt, vorerst mit dem Präfix `-moz-`.

### DOM

- Die Methode [`modify()`](/de/docs/Web/API/Selection/modify) des [`Selection`](/de/docs/Web/API/Selection)-Objekts wurde geändert, sodass die Granularität der "word"-Selektion keine nachfolgenden Leerzeichen mehr einschließt; dies macht es plattformübergreifend konsistenter und entspricht dem Verhalten der WebKit-Implementierung.
- Die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) sind jetzt auf maximal einen Timeout pro Sekunde in inaktiven Tabs begrenzt. Darüber hinaus ist es jetzt möglich, geschachtelte Timeouts auf den kleinsten Wert zu beschränken, den die HTML5-Spezifikation erlaubt: 4 ms (statt der 10 ms, auf die es zuvor begrenzt war).
- Ähnlich wird die Methode [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) jetzt in inaktiven Tabs auf maximal ein Intervall pro Sekunde begrenzt.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) unterstützt jetzt das [`loadend`-Ereignis](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#detecting_any_load_end_condition) für Fortschrittsbeobachter. Dieses wird gesendet, nachdem ein Transfer abgeschlossen ist (das heißt, nach dem `abort`, `error` oder `load` Ereignis). Sie können dies verwenden, um Aufgaben zu erledigen, die unabhängig vom Erfolg oder Misserfolg eines Transfers ausgeführt werden müssen.
- Die Methode `slice()` der [`Blob`](/de/docs/Web/API/Blob)- und in der Erweiterung [`File`](/de/docs/Web/API/File)-Objekte wurde entfernt und durch eine neue, vorgeschlagene Syntax ersetzt, die sie konsistenter mit den Methoden [`Array.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) und [`String.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) in JavaScript macht. Diese Methode wird vorerst als `mozSlice()` bezeichnet.
- Der Wert von [`Navigator.language`](/de/docs/Web/API/Navigator/language) wird jetzt durch den Wert des `Accept-Language` [HTTP-Headers](/de/docs/Web/HTTP/Reference/Headers) bestimmt.
- Die Eigenschaft [`Element.prefix`](/de/docs/Web/API/Element/prefix) ist jetzt schreibgeschützt, wie es die DOM-Spezifikation fordert.
- Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) unterstützt jetzt experimentelle Eigenschaften, um Informationen über Videomalstatistiken wie Bildraten zu erhalten.

### JavaScript

- Reguläre Ausdrücke sind nicht mehr aufrufbar, als ob sie Funktionen wären; diese Änderung wurde in Zusammenarbeit mit dem WebKit-Team vorgenommen, um die Kompatibilität zu gewährleisten (siehe [WebKit bug 28285](https://webkit.org/b/28285)). Diese Funktion hatte lange existiert, wurde aber nie dokumentiert (zumindest nicht hier auf MDC).
- Die Methode `Function.prototype.isGenerator()` wird jetzt unterstützt; dies ermöglicht Ihnen festzustellen, ob eine Funktion ein [Generator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) ist.
- Die folgenden [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) wurden zuvor nur im strikten Modus als reserviert behandelt; jetzt werden sie immer als reserviert behandelt: `class`, `enum`, `export`, `extends`, `import` und `super`.
- DOM-Dokumente, die im Chrome-Code erstellt wurden, dürfen nicht mehr an gesandboxte Skripte weitergegeben werden.
- Der JSON-Parser wurde neu geschrieben, um die Geschwindigkeit und Konformität zu verbessern. Dies umfasst eine Fix für [Firefox bug 572279](https://bugzil.la/572279).

### SVG

- Das {{ SVGAttr("class") }} SVG-Attribut kann jetzt animiert werden.
- Die folgenden SVG-bezogenen DOM-Schnittstellen, die Listen von Objekten darstellen, sind jetzt indizierbar und können wie Arrays zugegriffen werden; darüber hinaus haben sie eine `length`-Eigenschaft, die die Anzahl der Elemente in den Listen angibt: [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPathSegList`](/de/docs/Web/API/SVGPathSegList) und [`SVGPointList`](/de/docs/Web/API/SVGPointList).

### HTTP

- Firefox sendet den `Keep-Alive` HTTP-Header nicht mehr; wir haben ihn nicht korrekt formatiert und er war überflüssig, da wir auch den Header {{ httpheader("Connection") }} oder {{ httpheader("Proxy-Connection") }} mit dem Wert "keep-alive" gesendet haben.
- Das HTTP-Transaktionsmodell wurde aktualisiert, um intelligenter im Wiederverwenden von Verbindungen im persistenten Verbindungspool zu sein; anstatt den Pool als [FIFO](https://en.wikipedia.org/wiki/FIFO)-Warteschlange zu behandeln, versucht Necko jetzt, den Pool so zu sortieren, dass Verbindungen mit dem größten [Congestion-Window](https://en.wikipedia.org/wiki/Congestion_window) (CWND) zuerst kommen. Dies kann die Round-Trip-Zeit (RTT) von HTTP-Transaktionen reduzieren, indem vermieden wird, dass die Fenster von Verbindungen in vielen Fällen vergrößert werden müssen.
- Firefox behandelt jetzt den `Content-Disposition` HTTP-Response-Header effektiver, wenn sowohl die Parameter `filename` als auch `filename*` bereitgestellt werden; es durchsucht alle bereitgestellten Namen und verwendet den `filename*`-Parameter, falls verfügbar, auch wenn zuerst ein `filename`-Parameter enthalten ist. Zuvor wurde der erste passende Parameter verwendet, wodurch eine passendere Bezeichnung nicht genutzt wurde. Siehe [Firefox bug 588781](https://bugzil.la/588781).

### MathML

- Unterstützung für [verzierte Operatoren](https://w3c.github.io/mathml/spec.html#dfn-embellished-operator)

### Entwicklertools

- Das [`Console`-Objekt der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) hat jetzt eine `debug()`-Methode, die ein Alias für seine `log()`-Methode ist; dies erhöht die Kompatibilität mit bestimmten bestehenden Websites.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Leitfaden zur Aktualisierung Ihres Add-ons für Firefox 5, lesen Sie bitte [Aktualisieren von Add-ons für Firefox 5](/de/docs/Mozilla/Firefox/Updating_add-ons).

> [!NOTE]
> Firefox 5 erfordert, dass Binärkomponenten neu kompiliert werden, wie es auch bei allen Hauptversionen von Firefox der Fall ist. Details finden Sie unter [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### Änderungen an JavaScript-Code-Modulen

#### Neue JavaScript-Code-Module

- Das [`Dict.jsm`](/de/docs/JavaScript_code_modules/Dict.jsm)-Code-Modul wurde hinzugefügt; es bietet eine API für Wörterbücher von Schlüssel/Wert-Paaren.

#### NetUtil.jsm

- Die Methode `asyncFetch()` unterstützt jetzt die Angabe der Eingabequelle als `nsIInputStream`.

### Schnittstellenänderungen

- Die Schnittstelle `nsIHttpChannelInternal` hat neue Attribute, die auf Informationen über die Adressen und Ports der Endpunkte der Kanäle zugreifen. Diese Informationen werden hauptsächlich zu Debuggingzwecken bereitgestellt.
- Die Attribute `width` und `height` des {{ HTMLElement("canvas") }}-Elements werden jetzt in IDL als unsigned Integers statt signed reflektiert (siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)).
- Die Schnittstellen `nsIAppStartup2` und `nsIAppStartup_MOZILLA_2_0` wurden in die Schnittstelle `nsIAppStartup` integriert.
- Die Schnittstelle `nsIDocShell_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIDocShell` integriert.
- Die Schnittstelle `nsIFocusManager_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIFocusManager` integriert.
- Die Schnittstelle `nsIHTMLEditor_MOZILLA_2_0_BRANCH` wurde in die Schnittstelle `nsIHTMLEditor` integriert.

#### Neue Schnittstellen

- `nsIDOMAnimationEvent` hinzugefügt. [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsICiter` (siehe [Firefox bug 633066](https://bugzil.la/633066))
- `nsIDOM3Document` (siehe [Firefox bug 639849](https://bugzil.la/639849))
- `nsIFIXptrEvaluator`
- `nsISelectElement` (siehe [Firefox bug 619996](https://bugzil.la/619996))

### Debugging-Hilfen

- Der neue [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E) Helfer ermöglicht es, Variablen nur für `DEBUG`-Builds zu deklarieren.

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) und [`JS_DoubleToUint32()`](/de/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToUint32) wurden hinzugefügt, um [`jsdouble`](/de/docs/SpiderMonkey/JSAPI_Reference/jsdouble)-Werte in C-Integers und Unsigned-Integers zu konvertieren.

### Änderungen im Buildsystem

- Sie können jetzt Firefox ohne eine `mozconfig`-Datei bauen; die [`--enable-application` Einstellung](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html#choose_an_application) hat jetzt die Standardeinstellung "browser". Nachdem Sie den Code gezogen oder heruntergeladen haben, können Sie `configure && make` (oder `make -f client.mk`) verwenden, um Firefox zu bauen.

## Siehe auch

{{Firefox_for_developers}}
