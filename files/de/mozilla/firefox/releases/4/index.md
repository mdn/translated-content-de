---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und verbessert die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Entwickler der Gecko-Plattform verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet nun den [HTML5](/de/docs/Glossary/HTML5)-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht es auch, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in das HTML-Markup einzubetten.

### HTML

- [Den HTML5-Parser kennenlernen](/de/docs/Learn/HTML)
  - : Ein Überblick darüber, was der HTML5-Parser für Sie bedeutet und wie Sie SVG und MathML direkt in Ihren Inhalt einbetten können.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Ein Blick auf die Verbesserungen für Webformulare. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt nun die neuen HTML5-Elemente in Bezug auf Abschnitte in einem Dokument: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden Attribut](/de/docs/Web/HTML/Global_attributes#hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Benutzer derzeit nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt nun auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass die in Firefox 4 implementierten WebSockets nicht mit dem endgültigen Standard kompatibel sind und in der Regel nicht verwendet werden sollten.

#### Verbesserungen an Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung besser an die Spezifikation anzupassen:

- Das Angeben eines negativen Radius beim Aufruf von `arc()` führt nun korrekt zu einer `INDEX_SIZE_ERR` Ausnahme.
- Die Angabe von nicht-finiten Werten beim Aufruf von `createLinearGradient()` und `createRadialGradient()` löst nun `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte einfach ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte einfach ignoriert.
- Die Methode `putImageData()` unterstützt nun die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind nun standardmäßig größenveränderbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt nun die Mozilla-spezifische `mozGetAsFile()`-Methode, mit der Sie eine speicherbasierte Datei erhalten, die ein Bild des Canvas-Inhalts enthält. Weitere Details finden Sie unter [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `canvas2dcontext.lineCap` und `canvas2dcontext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `canvas2dcontext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt den nicht standardmäßigen `darker`-Wert nicht mehr.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das {{HTMLElement("isindex")}}-Element, wenn es durch den Aufruf von [`document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird nun als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt nun das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Sehen Sie sich das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) an.
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie die Bezeichnung für die Eingabetaste auf virtuellen Tastaturen festlegen können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} werden nun ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und stimmt mit dem Verhalten anderer Browser überein.

### CSS

- [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Transitions ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es, {{cssxref("length")}}-Werte als mathematische Ausdrücke anzugeben.
- Selektorgruppierung
  - : Unterstützung für `:-moz-any` zur Gruppierung von Selektoren und Faktorisierung von Kombinatoren.
- Unterstützung für Hintergrundbild-Subrechtecke
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht es, Subrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und richtige Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)-DOM-Methode verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Es wurden Änderungen vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren erlangt werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht die Anpassung der erweiterten Funktionen von OpenType-Schriftarten.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichenen an, die ein Tabulatorzeichen (U+0009) beim Rendern von Text einnimmt.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es Ihnen, die Dimensionen zu steuern, in denen ein Element geändert werden darf.
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
      <td>Wird auf Platzhaltertext in Formularfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf die Schaltfläche "Senden" in Formularen angewendet, wenn eines oder mehrere der Formularfelder nicht gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, wenn deren Inhalte ungültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die nicht das <code>required</code>-Attribut angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die das <code>required</code>-Attribut angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, wenn deren Inhalte erfolgreich validieren.
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
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements festzulegen, wenn Gecko der Meinung ist, dass ein Fokusindikator angezeigt werden sollte.
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
      <td>Ermöglicht die Gruppierung von Selektoren und die Faktorisierung von Kombinatoren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht die Angabe von
        {{cssxref("length")}}-Werten als
        mathematische Ausdrücke.
      </td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>
        Ermöglicht es Ihnen, ein beliebiges Element als Hintergrund für
        {{cssxref("background-image")}} und
        {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        Ermöglicht es Ihnen, ein Subrechteck eines Bildes als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                        |
| ---------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                       |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird eine begrenzte Zeit lang unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Es wurden auch Rendering-Änderungen vorgenommen, um die Spezifikation anzupassen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                    |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt den Unschärferadius jetzt aus Gründen der Vernunft und Leistung auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellen-Elemente (`<thead>`, `<tbody>` und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt nun den Wert `-moz-win-borderless-glass`, der einem Element ein randloses Aero-Glass-Aussehen verleiht.
- Die Medienfunktion [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) wurde hinzugefügt, die das Verhältnis der Gerätepixel zu CSS-Pixeln in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendbar macht.
- Geckos Umgang mit CSS-{{cssxref("length")}}-Einheiten wurde revidiert, um besser zu anderen Browsern zu passen und absolute Längen genauer in Bildschirmpixelanzahlen basierend auf der DPI des Geräts zu übersetzen.

### Grafiken und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird nun von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Video-Performance in Firefox 4 herauszuholen.
- [Unterstützung des WebM-Videos](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist nun verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können SVG nun mit dem {{htmlelement("img")}}-Element sowie als CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung des `buffered` Attributs für Medien
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird nun unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Das [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Interface wurde implementiert, um dies zu unterstützen.
- Attribut `preload` für Medien
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elemente sowie das `nsIDOMHTMLMediaElement`-Interface.
- Verbesserungen zur SVG-Textpositionierung
  - : Sie können nun Listen für die Werte der Eigenschaften `x`, `y`, `dx` und `dy` auf SVG-{{SVGElement("text")}} und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht die individuelle Positionierung jedes Zeichens in einem String.

### DOM

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-typisierte Arrays wurde hinzugefügt; dies ermöglicht die Manipulation von Puffern mit Rohdaten unter Verwendung nativer Datentypen. Mehrere APIs nutzen dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Abrufen von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt verfügt nun über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die ursprünglich von Internet Explorer stammenden `setCapture()` und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumentverlaufsobjekt, verfügbar über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt, unterstützt nun die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Kombination mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, synchronisierte Animationen zu erstellen.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen wurden geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die in der HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Elemente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Wrapping eines {{HTMLElement("textarea")}}-Elements kann nun über das DOM gesteuert werden, über das `wrap`-DOM-Attribut. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich nun standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden sofort ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten), und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um sicherzustellen, dass Skripte, die mit dem `src`-Attribut eingefügt werden, in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` auf sie.
- DOM [`file`](/de/docs/Web/API/File)-Objekte bieten nun eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die [`element.isContentEditable`](/de/docs/Web/API/Element/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es Ihnen zu bestimmen, welches {{HTMLElement("script")}}-Element derzeit ausgeführt wird. Die neuen [`element.onbeforescriptexecute`](/de/docs/Web/API/Element/onbeforescriptexecute) und [`element.onafterscriptexecute`](/de/docs/Web/API/Element/onafterscriptexecute)-Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde zum [`DragTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die Methode [`selection.modify()`](/de/docs/Web/API/Selection/modify) wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition in einem Browserfenster leicht zu ändern.
- Die Unterstützung für das `window.directories`-Objekt und das `directories`-Merkmal für [`window.open`](/de/docs/Web/API/Window/open), das in keinem anderen Browser unterstützt wird, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die [`event.mozInputSource`](/de/docs/Web/API/Event/mozInputSource)-Eigenschaft wurde zu DOM-Benutzerschnittstellenereignissen hinzugefügt; diese nicht standardmäßige Eigenschaft ermöglicht es Ihnen, den Typ des Geräts zu bestimmen, das ein Ereignis erzeugt hat.
- Das [`document.onreadystatechange`](/de/docs/Web/API/Document/onreadystatechange)-Ereignis wurde implementiert.
- Die [`document.createElement`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert in Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die [`element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)-Methoden wurden hinzugefügt, um es Elementen zu ermöglichen, Mausevents zu verfolgen, auch wenn sich die Maus nach einem `mousedown`-Ereignis außerhalb ihres normalen Nachverfolgungsbereichs befindet.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie ermöglicht es Ihnen zu bestimmen, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, um die Leistung Ihrer Webanwendung zu testen.
- Der Sprach-Token wurde aus [`window.navigator.appVersion`](/de/docs/Web/API/Window/navigator/appVersion) und [`window.navigator.userAgent`](/de/docs/Web/API/Window/navigator/userAgent) entfernt. Verwenden Sie stattdessen [`window.navigator.language`](/de/docs/Web/API/Window/navigator/language) oder den [Accept-Language-Header](/de/docs/Web/HTTP/Content_negotiation). [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)-Objekt gibt jetzt die Antwort sowohl als JavaScript typisiertes Array als auch als String über die Gecko-spezifische `mozResponseArrayBuffer`-Eigenschaft weiter.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die die Druckmenge auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- [`Node.mozMatchesSelector()`](/de/docs/Web/API/Node/mozMatchesSelector) wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit derselben Kurzformsyntax wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Weitere Informationen finden Sie unter [`element.style`](/de/docs/Web/API/Element/style).
- Die Dokumentenwurzel hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Status des privaten Surfmodus beschreibt, einschließlich eines Hinweises darauf, ob das private Surfen für die Sitzung temporär oder permanent ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie es in allen anderen großen Browsern der Fall ist.
- Das DOM [`StorageEvent`](/de/docs/DOM/event/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimale erlaubte Verzögerung für die Methode [`setTimeout()`](/de/docs/Web/API/SetTimeout) ist jetzt eine Voreinstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch Setzen einer Voreinstellung wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla vorgeschlagener Ansatz, der Webdesignern und Serveradministratoren helfen soll, festzulegen, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting- und Dateninjektionsangriffe zu erkennen und zu mildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browsern mitzuteilen, dass nur HTTPS und nicht HTTP verwendet werden soll.
- [Der X-FRAME-OPTIONS Antworte-Header](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS-HTTP-Antwortheader, der in Internet Explorer 8 eingeführt wurde, wird nun von Firefox unterstützt. Dies ermöglicht es Websites anzugeben, ob ihre Seiten in Rahmen verwendet werden können und, falls ja, ob die Verwendung auf denselben Ursprung beschränkt werden soll.
- [Änderungen am User-Agent-String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
  - : Um die Menge an Daten und Entropie, die in HTTP-Anfragen gesendet wird, zu reduzieren (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden der Kryptostärke- und Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die Änderungen in JavaScript 1.8.5, siehe [Neues in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird eine zusätzliche Adhärenz zum ECMAScript 5 Standard haben.

### Entwicklerwerkzeuge

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Tool ist eine nützliche Debugginghilfe sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie durch Änderung der `devtools.errorconsole.enabled` Einstellung auf `true` und Neustart des Browsers wieder aktivieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung bestehender Erweiterungen für Firefox 4, siehe [Aktualisierung von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wesentliche Änderungen, die die Kompatibilität mit bestehenden Add-ons beeinträchtigen, daher sollten Sie diesen Artikel lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Referenzen auf häufig genutzte Dienste, wie z. B. den Einstellungendienst oder den Fenstervermittler, unter anderem, zu erhalten.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes-API ermöglicht es, C-kompatible Fremdbibliotheksfunktionen ohne Verwendung von XPCOM aufzurufen.
- [Add-ons Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons Manager bietet Informationen über installierte Add-ons, unterstützt die Verwaltung und bietet Möglichkeiten, Add-ons zu installieren und zu entfernen.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul erleichtert es, attraktive, nicht modale Benachrichtigungen an den Benutzer zu präsentieren. Wie man diese API verwendet, finden Sie in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications).
- [Laden von Code-Modulen aus Chrome-URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können nun JavaScript-Code-Module über **chrome:**-URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, mit dem Sie den Pfad des Verzeichnisses erfahren können, in das der letzte Download stattgefunden hat. Dieses Modul kümmert sich um Probleme im Zusammenhang mit dem privaten Browsen.
- [Leistungsmessung mit dem PerfMeasurement.jsm-Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API, um Leistungsdaten auf CPU-Ebene im JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die Methode `readInputStreamToString()`, mit der Sie beliebige Bytes aus einem Stream in einen String lesen können, auch wenn der Stream Nullbytes enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt die Helfer IterSimpleEnumerator() und IterStringEnumerator(), um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- [`ChromeWorker`](/de/docs/Web/API/ChromeWorker)
  - : Ein neuer Worker-Typ für privilegierten Code; damit können Sie Dinge wie [js-ctypes](/de/docs/js-ctypes) aus Arbeitern in Erweiterungen und Anwendungscode verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es, mehrere Finger zu verfolgen, die sich gleichzeitig auf einem Touchscreen bewegen.

#### Weitere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, aber bevor darauf Skripte ausgeführt werden.

### XUL

#### Änderungen am `<xul:tabbrowser>`-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Neben der Unterstützung für App-Tabs ändern diese Änderungen auch die Tableiste in eine Standardwerkzeugleiste, die es dem Benutzer ermöglicht, darin Werkzeugleistentasten zu ziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` blubbern nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`). Ereignisüberwacher für diese Ereignisse sollten `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist nicht mehr ein anonymes Kind des `<xul:tabbrowser>`. Daher kann es direkt mit XUL-Overlays überlagert werden. Es kann auch direkter über JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blog-Post](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für mehr Details.
- Die neue Eigenschaft `visibleTabs` wurde hinzugefügt, um ein Array der aktuell sichtbaren Tabs zu erhalten; dies ermöglicht es, festzustellen, welche Tabs im aktuellen Tab-Satz sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; diese wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` ermöglicht es Ihnen, ein Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element heraufziehen zu müssen.
- Die neue Eigenschaft `tabbrowser.tabs` ermöglicht es Ihnen, einfach eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs anzuheften und zu lösen (das heißt, sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die Methode `getTabModalPromptBox` und das Attribut `tabmodalPromptShowing` wurden zum `<xul:tabbrowser>` hinzugefügt, um tabmodale Warnungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie `popup` weiterhin verwenden, treten Fehler auf, da das Element keine spezielle Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die den Knoten angibt, bei dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch das Hinzufügen eines Trigger-Ereignisparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt die Verankerung zurück, die beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade`- und `flip`-Attribute, die verwendet werden, um das Verhalten neuer "Pfeil" -Benachrichtigungspanels zu konfigurieren.

#### Entfernte Unterstützung für Fern-XUL

Fern-XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können XUL-Dokumente nicht mehr über `file://-URLs geladen werden, es sei denn, Sie erstellen die Einstellung `dom.allow_XUL_XBL_for_file`und setzen sie auf`true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains das Laden von Fern-XUL zu erlauben.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert nun korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen jetzt, das `element`-Attribut zu verwenden, um ein zu veränderndes Element anzugeben, anstelle das Fenster zu ändern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es ermöglicht anzugeben, dass der Resizer für ein Fenster statt für ein Element ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Dem aktiven XUL-Fenster wird das `"active"`-Attribut nicht mehr gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive`-Pseudoklasse verwenden, um verschiedenen Hintergrundfenstern unterschiedliche Stile zuzuweisen.
- Das Attribut `emptytext` ist nun veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet nun ein `accelerated`-Attribut; wenn wahr, darf der Hardware Layer Manager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt nun die Attribute `bottom` und `right`.
- Ereignisse werden nun während der Anpassung des `<xul:toolbox>` ausgelöst, sodass Sie Änderungen an Werkzeugleisten erkennen können.
- Das Attribut `alternatingbackground` für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können stattdessen die Pseudoklasse `:-moz-tree-row` verwenden.
- Die Schaltfläche "Überlauf" der Lesezeichen-Symbolleiste mit anonid chevronPopup ist nicht mehr anonym; sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat nun eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, mit denen Sie erkennen können, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, mit dem Sie feststellen können, ob ein Tab derzeit angeheftet ist.
- Die `setDirectionIndicator`-Klasse von `<xul:tree>`-Elementen wurde schon seit einiger Zeit nicht mehr verwendet; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das es Ihnen ermöglicht, den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dieses verwenden, um z.B. in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um das meiste Chrome in einem Fenster zu verbergen, wenn es verwendet wird, um UI im Browser anzuzeigen, wie z. B. `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn die Inhalte diese nicht unterstützen. Dies wird beispielsweise im Add-on-Panel verwendet.
- Werkzeugleisten können jetzt extern zu Toolboxes sein, während sie immer noch als Mitglied der `<xul:toolbox>` angesehen werden, indem die Eigenschaft `toolboxid` der `<xul:toolbar>` festgelegt wird. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder der Toolbox angesehen werden.
- Unterstützung wurde hinzugefügt, um XUL-Vorlagen für Debugging-Zwecke zu protokollieren.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie Benutzeroberflächen in der Vergangenheit zur Statusleiste hinzugefügt haben.
- Verschleierung des Browser-Chromes
  - : Sie können das Browser-Chrome jetzt ausblenden, wenn es sinnvoll ist; beispielsweise macht dies `about:addons`.

### Speicher

#### Verschiedene Änderungen der Speicher-API

- Das `mozIStorageBindingParamsArray` Interface hat nun ein Längen-Attribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Rückruf an, um benachrichtigt zu werden, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es ermöglicht, die Menge anzugeben, um die eine Datenbankdatei jeweils vergrößert wird, um SQLite zu helfen, die Fragmentierung zu reduzieren.
- Der Fehler `SQLITE_CONSTRAINT` wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstelle als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den spezifischen Änderungen, die weiter unten referenziert werden, ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht eingefroren, unabhängig davon, was die Dokumentation sagen könnte. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt assoziiert ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den Interfaces `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gegeben hat. Wesentlicher ist, dass das Interface `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Herunterfahrvorgang des Places-Dienstes zuverlässiger zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch, aber die Benachrichtigung `places-connection-closed` ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrvorgang abgeschlossen hat.
- Der Arraygrößenausgabeparameter einiger Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü erstellen und mit Places-Informationen manuell bevölkern, anstatt dies automatisch zu erledigen. Details finden Sie unter [Anzeige von Places-Informationen mithilfe von Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view).

### Interface-Änderungen

- Die Interfaces `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive`-Attribut, das zur Optimierung von Codepfaden für Dokumente verwendet wird, die derzeit nicht sichtbar sind.
- Die Methode `nsIMemory.isLowMemory()` der `nsIMemory`-Schnittstelle wurde als veraltet erklärt. Sie sollten stattdessen [Low-Memory-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Speicherplatzmangelsituationen zu achten.
- Die API für die Behandlung von Weiterleitungen auf HTTP-Kanälen wurde geändert, um sie asynchron zu verarbeiten. Jeder Code, der die Umleitungshandhabung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um stattdessen `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Rückrufhandler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Batches zu gruppieren, wodurch die Anzahl der Update-Benachrichtigungen reduziert wird, was die Leistung verbessern kann, wenn Beobachter relativ aufwändige Aufgaben durchführen (wie z.B. das Aktualisieren von Ansichten).
- Die seit langem veraltete `nsIPref`-Schnittstelle wurde endlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestiegen sind, ist jetzt die Zeit dafür gekommen.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` erhielten Änderungen zur Unterstützung der bedarfsgesteuerten Sitzungswiederherstellung. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die `nsIPrincipal`-Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie ihre `origin`-, `csp`- und `URI`-Attribute, sind jetzt von Skripten aus zugänglich; zuvor waren sie nur aus nativem Code zugänglich.
- Die Schnittstelle `nsIPrompt` unterstützt nun tabmodale Warnungen; siehe [Verwendung tabmodaler Aufforderungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt nun korrekt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat nun ein optionales Argument, das es Ihnen ermöglicht, die Zeichencodierung des Skripts anzugeben; falls keine angegeben wird, wird ASCII angenommen (wie zuvor immer angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Es war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Es stellt eine scrollbare Inhaltansicht dar, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die Schnittstelle `nsIINIParserWriter` wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Infallible memory allocation](/de/docs/Infallible_memory_allocation)
  - : Mozilla stellt jetzt unfehlbare Speicher-Allocatoren zur Verfügung, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu verstehen, wie sie funktionieren und wie man explizit fallible gegenüber infallible Speicherallokation anfordert.

### Sonstige Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden zu einem einzigen JAR-Archiv, `omni.jar`, zusammengefasst, was die Startzeit verbessert, indem der I/O-Aufwand reduziert wird. Details finden Sie in [Über omni.jar](/de/docs/About_omni.jar).
- Die Voreinstellung `accessibility.disablecache` wird nicht mehr unterstützt; sie war nur zu Debug-Zwecken ausgesetzt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur nächsten ändert, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung plattform-spezifischer Verzeichnisse in Add-on-Bundles können Sie keine unterschiedlichen Standardeinstellungen mehr für jede Plattform bereitstellen.
- Standardmäßig werden [Erweiterungen beim Installieren nicht mehr entpackt](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Erweiterungen, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen werden, [Such-Plugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Pfadverzeichnis der Erweiterung kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einbinden, die [automatisch beim Start der Anwendung installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) in einer angepassten Firefox-Version.

## Weitere Änderungen

- Nur die Hauptdatei chrome.manifest wird geladen
  - : Es wird jetzt nur noch die Hauptdatei `chrome.manifest` geladen; wenn Sie zusätzliche Manifestdateien benötigen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrem Haupt-`chrome.manifest` verwenden, um diese zu laden.
- Entfernte Gopher-Unterstützung
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Die Unterstützung bleibt jedoch über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung erhalten.
- [Nachrichtenprozess-Event-Handling](/de/docs/The_message_manager)
  - : Um Plugins außerhalb von Prozessen und andere Mehrprozessor-Funktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrap-Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne dass ein Browser-Neustart erforderlich ist.
- Entferntes Standard-Plugin
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugin-Ordner wurde standardmäßig auch entfernt, jedoch bleibt die Unterstützung der Plugin-Installation über diesen Ordner erhalten. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Ersetzen des Erweiterungsmanagers durch den Addon Manager
  - : Der `nsIExtensionManager` wurde durch den [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Keine Verwendung von Child HWNDs mehr
  - : Firefox erstellt keine Child HWNDs mehr für den internen Gebrauch unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung unter Firefox 4 nicht funktionieren. Sie müssen entweder auf die Verwendung von HWNDs verzichten oder Ihren Code, der auf HWNDs angewiesen ist, in einem [NPAPI](/de/docs/NPAPI)-Plugin umschließen. Das ist eine Menge Arbeit, also sollten Sie vermeiden, HWNDs direkt zu verwenden, wenn möglich.
- Änderungen an Gesten
  - : Die Wischgesten mit drei Fingern nach oben und unten auf Trackpads haben als Standardverhalten nun das Öffnen und Schließen der Firefox-Panoramaansicht (ehem. TabCandy). Um diese Änderungen wieder auf die vorherigen Befehle zum Scrollen nach oben und unten zu ändern, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
