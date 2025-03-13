---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und verbessert die Sicherheit. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Es ermöglicht auch, dass Inhalte [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einbetten.

### HTML

- [Webformularen](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Überblick über Verbesserungen an Webformularen. Zu diesen Änderungen gehören hinzugefügte Eingabetypen im {{HTMLElement("input")}} Element, Datenvalidierung und mehr.
- [HTML5 Sektionen](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die mit Sektionen in einem Dokument zusammenhängen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Benutzer momentan nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch folgende neue HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass die in Firefox 4 implementierten WebSockets nicht mit dem finalen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Verbesserungen an Canvas

Folgende Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}} Implementierung näher an die Spezifikation heranzuführen:

- Das Angeben eines negativen Radius beim Aufrufen von `arc()` wirft nun korrekt eine `INDEX_SIZE_ERR` Ausnahme.
- Das Angeben von nicht-finiten Werten beim Aufrufen von `createLinearGradient()` und `createRadialGradient()` wirft jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert wirft keine Ausnahme mehr; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert wirft keine Ausnahme mehr; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Die `putImageData()` Methode unterstützt nun die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}} Elemente sind jetzt standardmäßig skalierbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}} Element unterstützt nun die Mozilla-spezifische Methode `mozGetAsFile()`, die es ermöglicht, eine speicherbasierte Datei zu erhalten, die ein Bild des Canvas-Inhalts enthält. Weitere Details siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr bei der Festlegung auf einen nicht erkannten Wert und unterstützt den nicht standardmäßigen Wert `darker` nicht mehr.
- Die Unterstützung für das veraltete `<spacer>` Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>` Element, wenn es durch den Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt den Aufruf von `click()` auf {{HTMLElement("input")}} Elementen, um den Datei-Auswahldialog zu öffnen. Sehen Sie sich das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications) an.
- Das {{HTMLElement("input")}} Element unterstützt ein neues `mozactionhint` Attribut, das es Ihnen ermöglicht, das Label für die Eingabetaste auf virtuellen Tastaturen anzugeben.
- {{HTMLElement("script")}} Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und gleicht das Verhalten anderer Browser an.

### CSS

- [CSS Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es Ihnen, {{cssxref("length")}} Werte als mathematische Ausdrücke zu spezifizieren.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any` zur Gruppierung von Selektoren und zur Faktorisierung von Kombinatoren.
- Unterstützung für Hintergrundbild-Unterrechtecke
  - : Die {{cssxref("-moz-image-rect")}} Funktion ermöglicht es, Teilrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und echte Artikelnamen folgen später.
- [Verwenden von beliebigen Elementen als CSS Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Privatsphäre und der :visited Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Es wurden Änderungen daran vorgenommen, welche Informationen über den Stil besuchter Links mit Hilfe von CSS-Selektoren gewonnen werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht Ihnen, erweiterte Funktionen von OpenType-Schriftarten anzupassen.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Geben Sie die Breite in Leerzeichen eines Tab-Zeichens (U+0009) beim Text rendering an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht Ihnen die Steuerung der Dimensionen, in denen ein Element skalierbar ist.
      </td>
    </tr>
  </tbody>
</table>

#### Neue CSS-Pseudoklassen

<table>
  <tbody>
    <tr>
      <td>Pseudoklasse</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-handler-crashed")}}</td>
      <td>Wird verwendet, um Elemente zu stylen, deren Plugins abgestürzt sind.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formularelementen angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf den Submit-Button von Formularen angewendet, wenn eines oder mehrere der Formularelemente nicht validieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, wenn
        deren Inhalte ungültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet,
        die das <code>required</code> Attribut nicht spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet,
        die das <code>required</code> Attribut spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, wenn
        deren Inhalte erfolgreich validiert werden.
      </td>
    </tr>
  </tbody>
</table>

#### Neue CSS-Pseudoselektoren

<table>
  <tbody>
    <tr>
      <td>Pseudoselektor</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>{{cssxref(":focus-visible", ":-moz-focusring")}}</td>
      <td>
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements zu spezifizieren, wenn Gecko glaubt, dass es einen Fokus-Indikator gerendert haben sollte.
      </td>
    </tr>
  </tbody>
</table>

#### Neue CSS-Funktionen

<table>
  <tbody>
    <tr>
      <td>Funktion</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>:-moz-any</code></td>
      <td>Ermöglicht es Ihnen, Selektoren zu gruppieren und Kombinatoren zu faktorisieren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht es Ihnen, {{cssxref("length")}} Werte als mathematische Ausdrücke zu spezifizieren.
      </td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>
        Ermöglicht es Ihnen, ein beliebiges Element als Hintergrund für {{cssxref("background-image")}} und {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        Ermöglicht es Ihnen, ein Teilrechteck eines Bildes als {{cssxref("background-image")}} oder {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Hinweise                                                                                                                                                                                                  |
| ---------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                              |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Sites zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um die neueste Spezifikation zu erfüllen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                           |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}} Eigenschaft begrenzt jetzt den Weichzeichnungsradius auf 300px aus Gründen der Vernunft und Leistung.
- Die {{cssxref("overflow")}} Eigenschaft wird nicht mehr auf Tabellengruppen-Elemente (`<thead>`, `<tbody>`, und `<tfoot>`) angewendet.
- Die `-moz-appearance` Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der ein randloses Aero-Glass-Erscheinungsbild auf ein Element anwendet.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) Medienfunktion wurde hinzugefügt, die es ermöglicht, das Verhältnis der Gerät-Pixel pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu verwenden.
- Geckos Verarbeitung von CSS {{cssxref("length")}} Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen in Bildschirmpixelzählungen basierend auf der DPI des Geräts genauer zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}} Element verwenden, sowie als CSS {{cssxref("background-image")}}.
- Unterstützung des Media `buffered` Attributs
  - : Das `buffered` Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen wird jetzt unterstützt, so dass Sie bestimmen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde zur Unterstützung dessen implementiert.
- Media `preload` Attribut
  - : Das `preload` Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer` Attribut. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elemente sowie die `nsIDOMHTMLMediaElement` Schnittstelle.
- Verbesserungen der Positionierung von SVG-Text
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen angeben. Dies ermöglicht Ihnen die Positionierung jedes Zeichens in einer Zeichenfolge individuell zu steuern.

### DOM

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript typisierte Arrays wurde hinzugefügt; dies ermöglicht es Ihnen, Puffer mit Rohdaten mit nativen Datentypen zu manipulieren. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Abrufen von Grenzrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range) Objekt verfügt jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassung von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlaufsobjekt, das über das [`window.history`](/de/docs/Web/API/Window/history) Objekt verfügbar ist, unterstützt jetzt die neuen HTML5 `pushState()` und `replaceState()` Methoden.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Kombination mit der `window.mozRequestAnimationFrame()` Methode und der `window.mozAnimationStartTime` Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die durch die HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Elemente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchsverhalten eines {{HTMLElement("textarea")}} Elements kann jetzt über das DOM gesteuert werden, über das `wrap` DOM-Attribut. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}} Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src` Attribut werden sobald sie verfügbar sind ausgeführt (ohne die Reihenfolge beizubehalten), und Skripte ohne das `src` Attribut werden synchron ausgeführt. Um das Skripte mit `src` Attribut, die eingefügt wurden, in der Reihenfolge der Einfügungen auszuführen, setzen Sie `.async=false` auf ihnen.
- DOM [`File`](/de/docs/Web/API/File) Objekte bieten jetzt eine `url` Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects) Unterstützung für XMLHttpRequest.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft erlaubt es Ihnen, zu bestimmen, welches {{HTMLElement("script")}} Element aktuell ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute) Ereignisse werden vor und nach dem Ausführen eines Skriptelements ausgelöst.
- Die `mozSourceNode` Eigenschaft wurde zum [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify) Methode wurde zum [`Selection`](/de/docs/Web/API/Selection) Objekt hinzugefügt; damit können Sie die aktuelle Textauswahl oder die Cursorposition im Browserfenster einfach ändern.
- Unterstützung für das `window.directories` Objekt und das `directories` Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardisierte Eigenschaft erlaubt es Ihnen zu bestimmen, welche Art von Gerät ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert keine `<` und `>` um den Tag-Namen im Quirks-Modus mehr.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, um es Elementen zu ermöglichen, Mausereignisse zu verfolgen, auch wenn die Maus sich außerhalb ihres normalen Tracking-Bereichs befindet, nachdem ein `mousedown` Ereignis aufgetreten ist.
- Die `window.mozPaintCount` Eigenschaft wurde hinzugefügt; sie erlaubt es Ihnen, zu bestimmen, wie oft ein Dokument bemalt wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Der Sprach-Token wurde von [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder die [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation) Header stattdessen. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt gibt jetzt die Antwort als JavaScript typisiertes Array sowie als Zeichenfolge aus, mithilfe der Gecko-spezifischen `mozResponseArrayBuffer` Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure` Eigenschaft, die den Druckgrad auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR` Ausnahme, wenn der spezifizierte Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit demselben Kurzschrift-Syntax wie bei CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Das Dokumentenwurzel hat jetzt ein [privates Browsing-Modus Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Browsing-Modus beschreibt, einschließlich eines Hinweises, ob das private Browsing für die Sitzung vorübergehend oder permanent ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode ist jetzt optional, wie in jedem anderen großen Browser.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimale zulässige Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) Methode ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann durch Setzen einer Präferenz wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla vorgeschlagener Standard, der Webdesignern und Serveradministratoren helfen soll, festzulegen, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist ein Sicherheitsmerkmal, das es einer Website ermöglicht, dem Browser mitzuteilen, dass sie nur über HTTPS und nicht über HTTP kommunizieren sollte.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte X-FRAME-OPTIONS HTTP-Antwort-Header wird jetzt von Firefox unterstützt. Dies ermöglicht es Sites anzugeben, ob ihre Seiten in Frames verwendet werden können und, falls ja, ob dies auf die gleiche Herkunft beschränkt werden sollte.
- [User Agent String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox) Änderungen
  - : Um die Menge der in HTTP-Anfragen gesendeten Daten und Entropie zu reduzieren (siehe [Firefox Bug 572650](https://bugzil.la/572650)), wurden der Kryptostärkentoken und die Sprach-Token aus dem User Agent-String entfernt.

### JavaScript

Eine Übersicht über die in JavaScript 1.8.5 implementierten Änderungen finden Sie unter [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird die ECMAScript 5-Standarddokumente weiter einhalten.

### Entwicklerwerkzeuge

- [Verwendung der Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web Console Tool ist ein nützliches Debugging-Tool für Webentwickler und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Ab Gecko 2.0 ist die Fehlerkonsole standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die Präferenz `devtools.errorconsole.enabled` auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 lesen Sie [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons unterbrechen, daher sollten Sie diesen Artikel auf jeden Fall lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, auf die Sie achten müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Code-Modul bietet Getter, die es einfach machen, Referenzen auf häufig verwendete Dienste zu erhalten, wie zum Beispiel den Präferenzdienst oder den Fenstervermittler und andere.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible fremde Bibliotheksfunktionen aufzurufen, ohne XPCOM zu verwenden.
- [Add-ons-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und bietet Möglichkeiten zum Installieren und Entfernen von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht modale Benachrichtigungen für den Benutzer zu präsentieren. Sehen Sie, wie Sie diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwenden.
- [Laden von Code-Modulen aus chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:** URLs laden, auch innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm) Code-Modul stellt die globale Variable `gDownloadLastDir` bereit, die einen String enthält, mit dem Sie den Pfad des Verzeichnisses erfahren können, in das der letzte Download stattgefunden hat. Dieses Modul kümmert sich um Probleme im Zusammenhang mit dem privaten Browsen für Sie.
- [Leistungsmessung mit dem PerfMeasurement.jsm Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm) Code-Modul bietet eine API, um CPU-Leistungsdaten im JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm` Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in einen String zu lesen, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm Code-Modul bietet jetzt IterSimpleEnumerator() und IterStringEnumerator() Hilfsfunktionen zum Iterieren über XPCOM-Enumeratoren.
- Sie können jetzt [Workers in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Arbeitertyp für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Workern in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Fingerbewegungen auf einem Touchscreen gleichzeitig zu verfolgen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, aber bevor irgendwelche Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>` Element vorgenommen, die Erweiterungen beeinflussen, die mit Tabs interagieren. Neben der Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Schaltflächen hinein zu ziehen.

- Die `TabClose`, `TabSelect` und `TabOpen` Ereignisse sprudeln nicht mehr zum `<xul:tabbrowser>` Element (`gBrowser`). Ereignis-Listener für diese Ereignisse sollten dem `gBrowser.tabContainer` hinzugefügt werden, statt direkt dem `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` erreicht werden. Siehe [diesen Blogeintrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für mehr Details.
- Die neue `visibleTabs` Eigenschaft wurde hinzugefügt, um Ihnen ein Array der aktuell sichtbaren Tabs zu geben; dies ermöglicht es, zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die es ermöglicht, ein Tab-Favicon zu erhalten, ohne auf das `<xul:browser>` Element zurückgreifen zu müssen.
- Die neue Eigenschaft `tabbrowser.tabs` wurde hinzugefügt, die es ermöglicht, einfach eine Liste der Tabs in einem `<xul:tabbrowser>` Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs zu pinnen und zu entpinnen (das heißt, sie zwischen App-Tabs und regulären Tabs umzuschalten).
- Die Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden zum `<xul:tabbrowser>` hinzugefügt, um tab-modale Benachrichtigungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>` Element wird nicht mehr unterstützt; Sie sollten `<xul:menupopup>` stattdessen verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Störungen stoßen, da das Element keine besondere Bedeutung mehr hat. Beispielsweise kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>` XUL-Element hat jetzt eine `triggerNode` Eigenschaft, die den Knoten angibt, auf dem das Ereignis stattgefunden hat, das das Popup geöffnet hat. Dies erforderte auch die Hinzufügung eines Triggerereignisparameters zur `openPopup` Methode. Auch die `anchorNode` Eigenschaft wurde hinzugefügt; es gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>` Element bietet jetzt die `fade` und `flip` Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil Benachrichtigungspanels zu konfigurieren.

#### Entfernung des Remote-XUL-Supports

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; Sie können auch keine XUL-Dokumente mehr mit `file://` URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains das Laden von Remote-XUL zu ermöglichen.

#### Verschiedene XUL-Änderungen

- Das `readonly` Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>` Element ermöglicht es Ihnen jetzt, das `element` Attribut zu verwenden, um ein zu skalierendes Element anzugeben, anstatt das gesamte Fenster zu skalieren.
- Das `<xul:resizer>` Element hat jetzt ein `type` Attribut, das es Ihnen ermöglicht anzugeben, dass der Resizer für ein Fenster statt für ein Element ist, um zu verhindern, dass der Fensterresizer zweimal gezeichnet wird.
- Das `"active"` Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive` Pseudoklasse verwenden, um unterschiedliche Stile für Hintergrundfenster festzulegen.
- Das `emptytext` Attribut ist jetzt veraltet; Sie sollten `placeholder` stattdessen verwenden.
- Das `<xul:window>` Element bietet jetzt ein `accelerated` Attribut; wenn dies wahr ist, ist der Hardware-Ebenen-Manager erlaubt, das Fenster zu beschleunigen.
- Das `<xul:stack>` Element unterstützt jetzt die `bottom` und `right` Attribute.
- Ereignisse werden jetzt während der `<xul:toolbox>` Anpassung ausgelöst, sodass Sie Änderungen an Werkzeugleisten erkennen können.
- Das `alternatingbackground` Attribut für `<xul:tree>` Element wird nicht mehr unterstützt; Sie können die `:-moz-tree-row` Pseudoklasse stattdessen verwenden.
- Der Überlauf-Button der Lesezeichen-Symbolleiste mit anonid chevronPopup ist nicht mehr anonym; er hat eine ID von "PlacesChevron".
- Das `<xul:tabs>` Element hat jetzt eine `tabbox` Eigenschaft, die die alte `_tabbox` Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>` Elemente haben jetzt das `drawintitlebar` Attribut; wenn dies wahr ist, enthält der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned` Ereignisse sind verfügbar, die es Ihnen ermöglichen, zu erkennen, wann Tabs angepinnt und entpinnt werden.
- Das neue `TabAttrModified` Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image` oder `selected` Attribute eines Tabs ändern.
- `<xul:tab>` Elemente haben jetzt ein `pinned` Attribut, das es Ihnen ermöglicht zu bestimmen, ob ein Tab derzeit angepinnt ist.
- Die `setDirectionIndicator` Klasse auf `<xul:tree>` Elementen hat schon seit geraumer Zeit nichts mehr gemacht; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>` Element hat jetzt ein `chromemargin` Attribut, das es Ihnen ermöglicht, den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters zu setzen; Sie können dies verwenden, um in die Fenstertitelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>` Element hat jetzt ein `disablechrome` Attribut; dies wird verwendet, um das meiste des Chromes in einem Fenster auszublenden, wenn es dazu verwendet wird, browserinterne Benutzeroberflächen anzuzeigen, wie `about:addons`.
- Das `<xul:window>` Element hat jetzt ein `disablefastfind` Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird zum Beispiel vom Add-ons-Panel verwendet.
- Werkzeugleisten können jetzt außerhalb von Werkzeugleistenkästen sein, während sie immer noch als Mitglied der `<xul:toolbox>` betrachtet werden, indem Sie die `toolboxid` Eigenschaft des `<xul:toolbar>` setzen. Auch das `<xul:toolbox>` Element hat jetzt eine `externalToolbars` Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkasten betrachtet werden.
- Unterstützung wurde zur Protokollierung von XUL-Vorlagen zu Debugging-Zwecken hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, wenn Sie in der Vergangenheit Benutzeroberflächen-Elemente zur Statusleiste hinzugefügt haben.
- Chrome des Browsers ausblenden
  - : Sie können jetzt das Chrome des Browsers ausblenden, wenn es wünschenswert ist; zum Beispiel macht `about:addons` dies.

### Speicherung

#### Verschiedene Änderungen an der Speicher-API

- Die `mozIStorageBindingParamsArray` Schnittstelle hat jetzt ein Längenattribut, das die Anzahl der `mozIStorageBindingParams` Objekte im Array angibt.
- Die `mozIStorageStatement.bindParameters()` Methode gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die `mozIStorageConnection.clone()` Methode wurde hinzugefügt, mit der Sie eine bestehende Datenbankverbindung klonen können.
- Die `mozIStorageConnection.asyncClose()` Methode wurde hinzugefügt, mit der Sie eine Datenbankverbindung asynchron schließen können; Sie geben einen Rückruf an, um benachrichtigt zu werden, wenn die Schließung abgeschlossen ist.
- Die `mozIStorageConnection.setGrowthIncrement()` Methode wurde hinzugefügt, die es Ihnen ermöglicht, die Größe anzugeben, um die eine Datenbankdatei gleichzeitig vergrößert wird, um SQLite zu helfen, Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT` Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` und nicht mehr als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den spezifischen Änderungen, die unten aufgeführt sind, ist es wichtig zu beachten, dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt ungefroren, unabhängig davon, was in der Dokumentation steht. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die Einfluss auf die Kompatibilität in Firefox 4 haben.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall des nun entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` Schnittstellen gegeben hat. Wesentlicher ist jedoch, dass die `nsINavHistoryResultViewer` Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um es dem Browser zu ermöglichen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Die meisten davon sind nur zur internen Verwendung bestimmt, aber die `places-connection-closed` Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Arraysgrößen-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und füllen, anstatt es für Sie erledigen zu lassen. Siehe [Anzeigen von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell` und `nsIWebBrowser` Schnittstellen haben nun ein neues `isActive` Attribut, das verwendet wird, um Codepfade für Dokumente zu optimieren, die derzeit nicht sichtbar sind.
- Die `nsIMemory` Methode `nsIMemory.isLowMemory()` wurde veraltet. Sie sollten ["memory-pressure" Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Situationen mit niedrigem Speicherverbrauch zu achten.
- Die API zur Behandlung von Umleitungen auf HTTP-Kanäle hat sich geändert, um sie asynchron verarbeiten zu können. Jeder Code, der die Umleitungshandhabung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss auf `nsIChannelEventSink.asyncOnChannelRedirect()` aktualisiert werden. Dies akzeptiert einen Rückruf-Handler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Chargen zu gruppieren, wodurch die Anzahl der bereitgestellten Aktualisierungsbenachrichtigungen reduziert wird, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben ausführen (wie das Aktualisieren von Ansichten).
- Die längst veraltete `nsIPref` Schnittstelle wurde endlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestiegen sind, ist jetzt die Zeit dafür.
- Die `nsISessionStore` und `nsISessionStartup` Schnittstellen wurden geändert, um die sitzungsbezogene Wiederherstellung auf Anfrage zu unterstützen. Siehe die `nsISessionStore.restoreLastSession()` Methode.
- Die `nsIPrincipal` Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie ihre `origin`, `csp` und `URI` Attribute sind jetzt von Skripten aus zugänglich; zuvor waren sie nur von nativen Code aus zugänglich.
- Die `nsIPrompt` Schnittstelle unterstützt jetzt tab-modale Benachrichtigungen; siehe [Verwenden von tab-modalen Benachrichtigungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die `nsIEffectiveTLDService.getPublicSuffixFromHost()` Methode lehnt jetzt korrekt Hostnamen ab, die mit einem Punkt (".") beginen.
- Die `mozIJSSubScriptLoader.loadSubScript()` Methode hat jetzt ein optionales Argument, mit dem Sie die Zeichencodierung des Skriptes angeben können; wenn keine angegeben wird, wird ASCII angenommen (wie es immer der Fall war).
- Die `nsIAccessProxy` Schnittstelle wurde entfernt. Sie war ein implementierungsbedingtes Detail, das seinen Zweck überlebt hat.
- Die `nsIContentView` und `nsIContentViewManager` Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie repräsentieren eine scrollbar Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal` Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService` Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE` Schnittstelle wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter` Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuweiser, die garantiert keinen Null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit fehlbare gegenüber unfehlbaren Speicherzuweisungen anfordern können.

### Weitere Änderungen

- Der Großteil der in Firefox enthaltenen Ressourcen wurde in ein einzelnes JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung verbessert, indem E/A reduziert wird. Details finden Sie unter [Über omni.jar](/de/docs/About_omni.jar).
- Die `accessibility.disablecache` Präferenz wird nicht mehr unterstützt; sie wurde nur für Debugging-Zwecke bereitgestellt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung plattformspezifischer Verzeichnisse in Add-on-Bundles können Sie keine unterschiedlichen Standardvorgaben mehr für jede Plattform bereitstellen.
- Standardmäßig [werden Erweiterungen nach der Installation nicht mehr entpackt](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack) Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die Binärkomponenten verwenden, DLLs laden mithilfe von [js-ctypes](/de/docs/js-ctypes), [Suchplugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole müssen spezifizieren, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Extension-Verzeichnis vom Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einfügen, die [automatisch beim Start des Programms installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines angepassten Firefox.

## Weitere Änderungen

- Nur die Wurzel chrome.manifest Datei wird geladen
  - : Nur die Wurzel `chrome.manifest` Datei wird jetzt geladen; wenn Sie benötigen, dass sekundäre Manifestdateien geladen werden, können Sie den [`manifest`](/de/docs/Mozilla/Chrome_registration/Manifest#Manifest) Befehl in Ihrer Wurzel `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Die Unterstützung kann weiterhin über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) Erweiterung hinzugefügt werden.
- [Inhaltsprozesseignishandhabung](/de/docs/The_message_manager)
  - : Um Out-of-Process-Plugins und andere Mehrprozessfunktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrap-Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne einen Browserneustart zu erfordern.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde auch standardmäßig entfernt, jedoch existiert die Unterstützung für Plugins über diesen Ordner zu installieren weiterhin. Siehe [Firefox Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager ersetzt durch Addon-Manager
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Keine HWNDs für Kindprozesse mehr unter Windows verwendet
  - : Firefox erstellt keine HWNDs mehr für Kindprozesse zu internen Zwecken unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, funktioniert Ihre Erweiterung nicht unter Firefox 4. Sie müssen entweder die Verwendung von HWNDs vermeiden oder Ihren Code, der sich auf HWNDs verlässt, in ein [NPAPI](/de/docs/NPAPI) Plug-in einpacken. Da das viel Arbeit macht, sollten Sie, wenn möglich, die direkte Verwendung von HWNDs vermeiden.
- Gesten-Änderungen
  - : Die Drei-Finger-Auf- und Abwärtswischgesten auf Trackpads wurden standardmäßig geändert, um die Firefox Panorama-Ansicht (ehemals TabCandy) zu öffnen und zu schließen. Um dies auf die vorherigen Scrollen auf Oben- und Unten-Kommandos zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
