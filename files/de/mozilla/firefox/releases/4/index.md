---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, fügt mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien hinzu und verbessert die Sicherheit weiter. Dieser Artikel enthält Informationen über diese Veröffentlichung und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet nun den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er erlaubt es auch, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in das HTML-Markup einzubetten.

### HTML

- [Lernen Sie den HTML5-Parser kennen](/de/docs/Learn/HTML)
  - : Ein Blick darauf, was der HTML5-Parser für Sie bedeutet und wie Sie SVG und MathML inline in Ihren Inhalt einbetten können.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Ein Blick auf Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt nun die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das für alle Elemente gebräuchlich ist, wird verwendet, um Inhalt auf einer Webseite zu verbergen, der derzeit nicht für den Benutzer relevant ist.
- Andere HTML5-Elemente
  - : Gecko unterstützt nun auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Nutzung der neuen WebSockets API für Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie in Firefox 4 implementiert, nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden an der Schnittstelle [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung mehr an die Spezifikation anzupassen:

- Die Angabe eines negativen Radius beim Aufrufen von `arc()` wirft jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme.
- Die Angabe nicht-endlicher Werte beim Aufrufen von `createLinearGradient()` und `createRadialGradient()` wirft nun `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert wirft keine Ausnahme mehr; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert wirft keine Ausnahme mehr; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind nun standardmäßig anpassbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft nutzen, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt nun die Mozilla-spezifische `mozGetAsFile()` Methode, die es Ihnen ermöglicht, eine speicherbasierte Datei zu erhalten, die ein Bild des Canvas-Inhalts enthält. Details finden Sie in [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt den nicht standardmäßigen `darker` Wert nicht mehr.
- Die Unterstützung für das veraltete `<spacer>` Element, das in allen anderen Browsern nicht vorhanden war, wurde entfernt.
- Das `<isindex>` Element, wenn es durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erzeugt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt nun den Aufruf von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint` Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente, die sich innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} Elementen befinden, werden nun ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und passt sich dem Verhalten anderer Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es Ihnen, {{cssxref("length")}}-Werte als mathematische Ausdrücke anzugeben.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any` zur Gruppierung von Selektoren und zur Faktorisierung von Kombinatoren.
- Unterstützung von Subrechtecken im Hintergrundbild
  - : Die Funktion {{cssxref("-moz-image-rect")}} ermöglicht es, Subrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und echte Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Privatsphäre und der :visited Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Es wurden Änderungen vorgenommen, welche Informationen über den Stil von besuchten Links mithilfe von CSS-Selektoren abgerufen werden können. Dies könnte einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht die Anpassung von erweiterten Funktionen von OpenType-Schriften.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichen eines Tabulatorzeichens (U+0009) beim
        Rendern von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht die Kontrolle der Dimensionen, in denen ein Element
        verändert werden kann.
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
        Wird auf den Senden-Button in Formularen angewendet, wenn eines oder
        mehrere Felder des Formulars nicht validieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet,
        wenn deren Inhalte ungültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet,
        die nicht das <code>required</code> Attribut spezifizieren.
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
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet,
        wenn deren Inhalte erfolgreich validieren.
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
        Ermöglicht es Ihnen, das Aussehen eines Elements zu spezifizieren,
        wenn Gecko glaubt, dass es eine Fokusanzeige gerendert haben sollte.
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
        Ermöglicht es Ihnen, {{cssxref("length")}}-Werte als
        mathematische Ausdrücke zu spezifizieren.
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                              |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                             |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um die neueste Version der Spezifikation zu erfüllen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                          |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Unschärferadius aus Gründen der Vernunft und Leistung auf maximal 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellen-Gruppen-Elemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den `-moz-win-borderless-glass`-Wert, der ein randloses Aero Glass-Aussehen auf ein Element anwendet.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) Medienfunktion wurde hinzugefügt, wodurch das Verhältnis der Gerätepixel pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Umgang mit CSS-{{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirmpixel-Anzahlen basierend auf der DPI des Geräts zu übersetzen.

### Grafiken und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um die beste Grafik- und Video-Performance in Firefox 4 zu erzielen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie einem CSS-{{cssxref("background-image")}} verwenden.
- Medien `buffered`-Attribut-Unterstützung
  - : Das `buffered`-Attribut in {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, was Ihnen erlaubt festzustellen, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload`-Attribut
  - : Das `preload`-Attribut der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- SVG Textpositionierungs-Verbesserungen
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy`-Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}}-Elementen angeben. Dadurch können Sie die Positionierung jedes Zeichens in einer Zeichenfolge einzeln steuern.

### DOM

- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript Typed-Arrays wurde hinzugefügt; dies ermöglicht die Manipulation von Puffern, die rohe Daten mit nativen Datentypen enthalten. Mehrere APIs nutzen dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalten von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulieren des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumentverlauf-Objekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### Änderungen an den DOM-Schnittstellen von HTML-Elementen

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die HTML5-Spezifikationen geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Wrapping eines {{HTMLElement("textarea")}} Elements kann jetzt über das DOM gesteuert werden, über das `wrap` DOM-Attribut. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich nun standardmäßig nach der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten), und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um Skript-eingefügte Skripte mit dem `src`-Attribut zur Ausführung in Einfügereihenfolge zu bringen, setzen Sie `.async=false` auf diesen.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft lässt Sie bestimmen, welches {{HTMLElement("script")}}-Elementskript gerade ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute) Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode` Eigenschaft wurde zum [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify) Methode wurde zum [`Selection`](/de/docs/Web/API/Selection) Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition in einem Browserfenster einfach zu ändern.
- Die Unterstützung für das `window.directories` Objekt und die `directories`-Funktion für [`window.open`](/de/docs/Web/API/Window/open), welche in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie statt dessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu den DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es Ihnen festzustellen, welcher Gerätetyp ein Ereignis erzeugt hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert keine `<` und `>` um den Tag-Namen im Quirks-Modus mehr.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, wodurch Elemente auch außerhalb ihres normalen Tracking-Bereichs weiterhin Mausereignisse verfolgen können, nachdem ein `mousedown`-Ereignis aufgetreten ist.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie ermöglicht es Ihnen festzustellen, wie oft ein Dokument gemalt wurde. Dies kann bei Leistungsvergleichstests Ihrer Webanwendung nützlich sein.
- Der Sprach-Token wurde von [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Content_negotiation)-Header stattdessen. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt zeigt jetzt die Antwort als JavaScript-Typed-Array sowie als Zeichenfolge an, mithilfe der Gecko-spezifischen `mozResponseArrayBuffer`-Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten anzeigt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die lokale Dateien referenzieren.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektorzeichenfolgen ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt SVG-Eigenschaftswerte eines Elements mit der gleichen Kurzschreibersyntax wie CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Die Dokumentwurzel hat jetzt [ein `privatebrowsingmode` Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Status des privaten Modus beschreibt, einschließlich eines Indikators dafür, ob der private Modus für die Sitzung vorübergehend oder dauerhaft ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie in jedem anderen großen Browser.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Der Mindestwert für die Verzögerung in den Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) Ereignis wird nicht mehr standardmäßig gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch Setzen einer Präferenz reaktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla vorgeschlagenes Konzept, das Webdesignern und Serveradministratoren dabei helfen soll, zu bestimmen, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektion zu erkennen und zu mildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist ein Sicherheitsmerkmal, das es einer Website ermöglicht, Browser anzuweisen, nur mit HTTPS statt HTTP zu kommunizieren.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwort-Header, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzuzeigen, ob ihre Seiten in Frames verwendet werden können und, falls ja, ob dies auf denselben Ursprung beschränkt werden soll.
- [Benutzer-Agent-String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)-Änderungen
  - : Um die Menge an gesendeten Daten und die Entropie bei HTTP-Anfragen zu reduzieren (siehe [Firefox Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke und Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen, siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird noch stärker dem ECMAScript 5 Standard entsprechen.

### Entwickler-Tools

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsolen-Werkzeug ist eine nützliche Debugging-Hilfe für Webentwickler und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig ab Gecko 2.0 deaktiviert. Sie können sie reaktivieren, indem Sie die `devtools.errorconsole.enabled` Präferenz auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4, siehe [Erweiterungen für Firefox 4 aktualisieren](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wesentliche Änderungen, die die Kompatibilität mit bestehenden Erweiterungen brechen, lesen Sie also unbedingt diesen Artikel.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Ihnen bewusst sein sollten.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Code-Modul liefert Getter, die es leicht machen, Referenzen auf häufig verwendete Dienste, wie den Präferenzendienst oder den Fenstervermittler, unter anderem zu erhalten.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible Bibliotheksfunktionen aufzurufen, ohne XPCOM zu verwenden.
- [Add-ons Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager liefert Informationen über installierte Add-ons, unterstützt ihre Verwaltung und bietet Möglichkeiten, Add-ons zu installieren und zu entfernen.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Pop-up-Benachrichtigungsmodul macht es einfach, dem Benutzer ansprechende, nicht modale Benachrichtigungen anzuzeigen. Sie können sehen, wie Sie diese API in [Verwendung von Pop-up-Benachrichtigungen](/de/docs/Using_popup_notifications) verwenden.
- [Laden von Code-Modulen über Chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module über **chrome:** URLs laden, selbst innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm) Code-Modul stellt die globale Variable `gDownloadLastDir` bereit, die einen String enthält, den Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download stattgefunden hat. Dieses Modul behandelt Themen im Zusammenhang mit privatem Browsen für Sie.
- [Messung der Leistung mithilfe des PerfMeasurement.jsm-Code-Moduls](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm) Code-Modul bietet eine API zur Messung von CPU-Level-Leistungsdaten im JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm` Code-Modul bietet nun die Methode `readInputStreamToString()`, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in einen String zu lesen, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm Code-Modul bietet nun IterSimpleEnumerator() und IterStringEnumerator() Helfer, um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Worker-Typ für privilegierten Code; dieser ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) aus Workern in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Fingerbewegungen auf einem Touch-Bildschirm gleichzeitig zu verfolgen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, jedoch bevor Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs, ändern diese Änderungen auch die Tableiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Werkzeugleisten-Schaltflächen darin zu ziehen.

- Die `TabClose`, `TabSelect`, und `TabOpen` Ereignisse steigen nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`) auf. Ereignislistener für diese Ereignisse sollten dem `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt `gBrowser`.
- Das Tab-Kontextmenü ist nicht mehr ein anonymes Kind des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blogpost](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs` Eigenschaft wurde hinzugefügt, um Ihnen ein Array der aktuell sichtbaren Tabs zu geben; dies ermöglicht es Ihnen, festzustellen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Die neue `showOnlyTheseTabs` Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon` Methode wurde hinzugefügt, die es Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element öffnen zu müssen.
- Der neue `tabbrowser.tabs`-Eigenschaft ermöglicht es Ihnen, einfach eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen `pinTab` und `unpinTab` Methoden ermöglichen es Ihnen, Tabs anzuheften und zu lösen (also von App-Tabs zu regulären Tabs zu wechseln).
- Die Methoden `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden dem `<xul:tabbrowser>` hinzugefügt, um tab-modale Alerts zu unterstützen.

#### Änderungen an Pop-ups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Glitches stoßen, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>` XUL-Element hat jetzt eine `triggerNode` Eigenschaft, die den Knoten angibt, auf dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch die Hinzufügung eines Trigger-Ereignisparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode` Eigenschaft hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Pop-ups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade` und `flip` Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil-Benachrichtigungspanele zu konfigurieren.

#### Remote XUL-Unterstützung entfernt

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können XUL-Dokumente nicht mehr mit `file://` URLs geladen werden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains das Laden von Remote XUL zu erlauben.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert nun korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es nun, das `element` Attribut zu verwenden, um ein zu vergrößerndes Element zu spezifizieren, anstatt das Fenster zu vergrößern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es Ihnen ermöglicht anzugeben, dass der Resizer für ein Fenster statt für ein Element ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das "`active`" Attribut wird nicht mehr auf aktiven XUL-Fenstern gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive` Pseudoklasse verwenden, um Hintergrundfenstern unterschiedliche Stile zuzuweisen.
- Das `emptytext` Attribut ist nun veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated` Attribut; wenn es wahr ist, ist es dem Hardware-Layer-Manager erlaubt, das Fenster zu beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der `<xul:toolbox>`-Anpassung ausgelöst, sodass Sie Änderungen an Werkzeugleisten erkennen können.
- Das `alternatingbackground` Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die `:-moz-tree-row` Pseudoklasse verwenden.
- Die Bookmarks Toolbar Overflow-Schaltfläche mit Anonid ChevronPopup ist nicht mehr anonym; sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox` Eigenschaft, die die alte `_tabbox` Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert war).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar` Attribut; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned` Ereignisse sind verfügbar, die es Ihnen ermöglichen zu erkennen, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs geändert werden.
- `<xul:tab>`-Elemente haben jetzt ein `pinned` Attribut, mit dem Sie feststellen können, ob ein Tab derzeit angeheftet ist oder nicht.
- Die Klasse `setDirectionIndicator` auf `<xul:tree>`-Elementen hat seit einiger Zeit nichts mehr bewirkt; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das es Ihnen erlaubt, den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dies verwenden, um zum Beispiel in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome` Attribut; dies wird verwendet, um das meiste Chrome in einem Fenster auszublenden, wenn es zur Anzeige von In-Browser-UI verwendet wird, wie zum Beispiel `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind` Attribut, das es Ihnen erlaubt, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt diese nicht unterstützt. Dies wird zum Beispiel von dem Add-ons-Panel verwendet.
- Werkzeugleisten können jetzt außerhalb von Werkzeugkästen, aber dennoch als Mitglied des `<xul:toolbox>` betrachtet werden, indem die `toolboxid` Eigenschaft der `<xul:toolbar>` gesetzt wird. Außerdem hat das `<xul:toolbox>` Element jetzt eine `externalToolbars` Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens betrachtet werden.
- Unterstützung für die Protokollierung von XUL-Vorlagen für Debugging-Zwecke wurde hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Wenn Sie Benutzerschnittstellen zur Statusleiste hinzugefügt haben, müssen Sie Ihre Erweiterung aktualisieren, um diese zu verwenden.
- Verbergen des Browser-Chromes
  - : Sie können jetzt das Chrome des Browsers ausblenden, wenn es wünschenswert ist; zum Beispiel tut dies `about:addons`.

### Speicher

#### Verschiedene Speicher-API-Änderungen

- Die `mozIStorageBindingParamsArray` Schnittstelle hat jetzt ein `length`-Attribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die `mozIStorageStatement.bindParameters()` Methode gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die `mozIStorageConnection.clone()` Methode wurde hinzugefügt, die es ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die `mozIStorageConnection.asyncClose()` Methode wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie spezifizieren einen Rückruf, der benachrichtigt wird, wenn die Schließungsoperation abgeschlossen ist.
- Die `mozIStorageConnection.setGrowthIncrement()` Methode wurde hinzugefügt, die es Ihnen ermöglicht, die Menge anzugeben, um die eine Datenbankdatei jedes Mal vergrößert wird, um SQLite bei der Reduzierung von Fragmentierungen zu helfen.
- Der `SQLITE_CONSTRAINT` Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstelle von `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den nachfolgend spezifisch genannten Änderungen ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht eingefroren, unabhängig davon, was die Dokumentation möglicherweise sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details über Änderungen an XPCOM, die sich auf die Kompatibilität in Firefox 4 auswirken.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit welchem ein Objekt assoziiert ist; dies ersetzt einen häufigen Anwendungsfall der jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können nun von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Das bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gibt. Noch bedeutender ist, dass die Schnittstelle `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, damit der Browser den Herunterfahrprozess des Places-Dienstes zuverlässiger verfolgen kann. Davon sind die meisten nur für den internen Gebrauch gedacht, aber die Benachrichtigung `places-connection-closed` ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Array-Größenausgabeparameter in mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und füllen, anstatt dies für Sie zu erledigen. Siehe [Places-Informationen mit Ansichten anzeigen: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die Schnittstellen `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um die Optimierung von Codepfaden für Dokumente zu ermöglichen, die derzeit nicht sichtbar sind.
- Die Methode `nsIMemory.isLowMemory()` der `nsIMemory`-Schnittstelle wurde veraltet. Sie sollten ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um Speichermangelsituationen zu überwachen.
- Die API zur Behandlung von Weiterleitungen auf HTTP-Channels hat sich geändert, um ihre Verarbeitung asynchron zu ermöglichen. Jeder Code, der die Weiterleitungshandhabung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um stattdessen `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Diese akzeptiert einen Rückruf-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, wodurch eine Möglichkeit zum Gruppieren von Places-Operationen in Stapel bereitgestellt wird, was die Anzahl der bereitgestellten Aktualisierungsbenachrichtigungen reduziert, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben ausführen (wie z.B. Ansichten auffrischen).
- Die lange veraltete `nsIPref` Schnittstelle wurde schließlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestellt haben, ist jetzt der richtige Zeitpunkt dafür.
- Die `nsISessionStore` und `nsISessionStartup` Schnittstellen erhielten Änderungen, um die auf Abruf basierte Sitzungserneuerung zu unterstützen. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die `nsIPrincipal` Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie deren Attribute `origin`, `csp`, und `URI` sind jetzt aus Skripten verfügbar; vorher waren sie nur aus nativem Code zugänglich.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Alarme; für Details siehe [Verwendung von Tab-Modal-Prompts](/de/docs/Using_tab-modal_prompts).
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt Hostnamen ab, die mit einem Punkt (".") beginnen, korrekt ab.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, mit dem Sie die Zeichencodierung des Skripts angeben können; wenn keine angegeben wird, wird ASCII angenommen (wie bisher immer angenommen).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Es war ein Implementierungsdetail, das seinen Nutzen überlebt hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Sie repräsentiert eine scrollbare Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal` Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService` Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE` Schnittstelle wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter` Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben von INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuweiser, die garantiert keinen Nullwert zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie ausdrücklich eine fehlerhafte gegenüber einer unfehlbaren Speicherzuweisung anfordern können.

### Sonstige Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einziges JAR-Archiv, `omni.jar`, zusammengeführt, was die Startleistung verbessert, indem die Anzahl der E/A-Vorgänge reduziert wird. Einzelheiten finden Sie unter [Über omni.jar](/de/docs/About_omni.jar).
- Die Präferenz `accessibility.disablecache` wird nicht mehr unterstützt; sie war nur zu Debugging-Zwecken offen und wird nicht mehr verwendet.
- Addons, deren GUID von einer Version zur anderen wechselt, können jetzt ordnungsgemäß aktualisiert werden.
- Im Rahmen der Entfernung von plattformspezifischen Verzeichnissen in Add-on-Bundles können Sie jetzt keine unterschiedlichen Standardpräferenzen mehr für jede Plattform bereitstellen.
- Standardmäßig werden [Erweiterungen beim Installieren nicht mehr entpackt](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen werden, [Such-Plugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenstersymbole verwenden, müssen angeben, dass sie entpackt werden sollen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Verzeichnis der Erweiterung von der Festplatte kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einschließen, die [automatisch beim Anwendungsstart installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer benutzerdefinierten Firefox Distribution.

## Sonstige Änderungen

- Es wird nur die root chrome.manifest Datei geladen
  - : Es wird jetzt nur die root `chrome.manifest`-Datei geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrer root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Die Unterstützung steht weiterhin über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung zur Verfügung.
- [Ereignisbehandlung im Inhaltsprozess](/de/docs/The_message_manager)
  - : Um die Unterstützung von aus-Prozess-Plugins und anderen Mehrprozess-Funktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten zwischen Prozessen zu unterstützen.
- [Bootstrapped-Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne dass ein Browser-Neustart erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde ebenfalls standardmäßig entfernt, jedoch besteht weiterhin die Unterstützung für die Installation von Plugins über diesen Ordner. Siehe [Firefox Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Child HWNDs mehr für den internen Gebrauch unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung mit Firefox 4 nicht funktionieren. Sie müssen entweder aufhören, HWNDs zu verwenden, oder Ihren Code, der sich auf HWNDs verlässt, in ein [NPAPI](/de/docs/NPAPI) Plugin einwickeln. Das ist ein großer Aufwand, so dass Sie, wenn möglich, den direkten Einsatz von HWNDs vermeiden sollten.
- Gestenänderungen
  - : Die Drei-Finger-Aufwärts- und -Abwärts-Wischgesten auf Trackpads wurden standardmäßig geändert, um die Firefox-Panorama-Ansicht (neé TabCandy) zu öffnen und zu schließen. Um diese zurück auf die vorherigen Befehle zum Scrollen nach oben und Scrollen nach unten zu ändern, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
