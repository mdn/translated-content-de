---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 4163a227e2c4b42139056a3474b146fe90876cbf
---

{{FirefoxSidebar}}

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und verbessert die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Erweiterungsentwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung erhöht. Er erlaubt es auch, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einzubinden.

### HTML

- [Treffen Sie den HTML5-Parser](/de/docs/Learn/HTML)
  - : Ein Blick darauf, was der HTML5-Parser für Sie bedeutet und wie Sie SVG und MathML in Ihren Inhalt einbetten können.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Ein Blick auf Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}} Element, Datenvalidierung und mehr.
- [HTML5 Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die mit Abschnitten in einem Dokument zusammenhängen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden Attribut](/de/docs/Web/HTML/Global_attributes#hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Benutzer derzeit nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Nutzung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel und nicht allgemein zu verwenden sind.

#### Verbesserungen bei Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}} Implementierung näher an die Spezifikation anzugleichen:

- Bei Angabe eines negativen Radius bei der Verwendung von `arc()` wird jetzt korrekt eine `INDEX_SIZE_ERR` Ausnahme ausgelöst.
- Bei unendlichen Werten bei `createLinearGradient()` und `createRadialGradient()` wird nun `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` ausgelöst.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Die `putImageData()` Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}} Elemente sind jetzt standardmäßig anpassbar; mit der {{cssxref("resize")}} CSS Eigenschaft können Sie dies deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` lösen keine Ausnahme mehr aus, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}} Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()` Methode, die es Ihnen ermöglicht, eine speicherbasierte Datei mit einem Bild des Canvas-Inhalts zu erhalten. Weitere Informationen finden Sie unter [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `canvas2dcontext.lineCap` und `canvas2dcontext.lineJoin` lösen keine Ausnahme mehr aus, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `canvas2dcontext.globalCompositeOperation` löst keine Ausnahme mehr aus, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt nicht mehr den nicht standardisierten `darker` Wert.
- Die Unterstützung für das veraltete `<spacer>` Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>` Element, wenn es durch Aufrufen von [`document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}} Elemente, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Dateien aus Webanwendungen verwenden](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}} Element unterstützt ein neues `mozactionhint` Attribut, mit dem Sie das Etikett für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}} Elemente in {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies steht im Einklang mit der Spezifikation und entspricht dem Verhalten anderer Browser.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht die Angabe von {{cssxref("length")}} Werten als mathematische Ausdrücke.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zusammenzufassen.
- Unterstützung für Hintergrundbild-Subrechtecke
  - : Die {{cssxref("-moz-image-rect")}} Funktion ermöglicht es, Subrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Toucheigenschaften wurde hinzugefügt. Einzelheiten und reale Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Änderungen wurden vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren gewonnen werden können. Dies kann sich auf einige Webanwendungen auswirken.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht die Anpassung von erweiterten Funktionen von OpenType-Schriftarten.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichen eines Tabulators (U+0009) bei der Textdarstellung an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht die Kontrolle der Dimensionen, in denen ein Element geändert werden kann.
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
        Wird auf den Absende-Button von Formularen angewendet, wenn eines oder mehrere der
        Formularfelder nicht validieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Automatisch angewendet auf {{HTMLElement("input")}} Felder, wenn
        deren Inhalte ungültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Automatisch angewendet auf {{HTMLElement("input")}} Felder, die
        das <code>required</code> Attribut nicht angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Automatisch angewendet auf {{HTMLElement("input")}} Felder, die
        das <code>required</code> Attribut angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Automatisch angewendet auf {{HTMLElement("input")}} Felder, wenn
        deren Inhalte erfolgreich validieren.
      </td>
    </tr>
  </tbody>
</table>

#### Neue CSS-Pseudo-Selektoren

<table>
  <tbody>
    <tr>
      <td>Pseudo-Selektor</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>{{cssxref(":focus-visible", ":-moz-focusring")}}</td>
      <td>
        Ermöglicht die Spezifikation des Aussehens eines Elements, wenn Gecko glaubt,
        dass eine Fokusanzeige gerendert werden sollte.
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
        {{cssxref("length")}} Werten als
        mathematische Ausdrücke.
      </td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>
        Ermöglicht die Verwendung eines beliebigen Elements als Hintergrund für
        {{cssxref("background-image")}} und
        {{cssxref("background")}}.
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        Ermöglicht die Verwendung eines Teilbereichs eines Bildes als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}}.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name              | Neuer Name                    | Anmerkungen                                                                                                                                                                      |
| ----------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size`  | {{cssxref("background-size")}}| Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                      |
| `-moz-border-radius`    | {{cssxref("border-radius")}}  | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Seiten zu aktualisieren. Rendering-Änderungen wurden auch vorgenommen, um die neueste Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`       | {{cssxref("box-shadow")}}     |                                                                                                                                                                                  |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}} Eigenschaft begrenzt jetzt den Unschärferadius auf 300px aus Gründen der Vernunft und der Leistung.
- Die {{cssxref("overflow")}} Eigenschaft gilt nicht mehr für Tabellen-Gruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance` Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element einen randlosen Aero-Glass-Look verleiht.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) Medienmerkmal wurde hinzugefügt, wodurch das Verhältnis von Gerätepixeln pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Die Handhabung von Längeneinheiten in CSS {{cssxref("length")}} durch Gecko wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirmpixelanzahlen basierend auf der DPI des Geräts zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimieren der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um die Grafik- und Videoleistung in Firefox 4 optimal zu nutzen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}} Element sowie als CSS {{cssxref("background-image")}} verwenden.
- Unterstützung des Medien-Attribute `buffered`
  - : Das `buffered` Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei zwischengespeichert wurden. Das [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Interface wurde zur Unterstützung dieser Funktion implementiert.
- `preload` Attribut für Medien
  - : Das `preload` Attribut aus der HTML5-Spezifikation wurde implementiert, wodurch das zuvor implementierte (und nicht mehr unterstützte) `autobuffer` Attribut ersetzt wurde. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elemente sowie das `nsIDOMHTMLMediaElement` Interface.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen angeben. Dies ermöglicht die individuelle Steuerung der Positionierung jedes Zeichens in einem String.

### DOM

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript typisierte Arrays wurde hinzugefügt; dies ermöglicht das Manipulieren von Puffern, die rohe Daten enthalten, mittels nativer Datentypen. Mehrere APIs nutzen dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Abrufen von Begrenzungsrechtecken für Bereiche
  - : Objekte der Klasse [`Range`](/de/docs/Web/API/Range) verfügen jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumentverlaufsobjekt, verfügbar über das Objekt [`window.history`](/de/docs/Web/API/Window/history), unterstützt nun die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Multitouch-Ereignisse
  - : Unterstützung für Touch- und Multitouch-Ereignisse wurde hinzugefügt.

#### Änderungen an den DOM-Interfaces von HTML-Elementen

Mehrere HTML-Elemente haben ihr DOM-Interface auf die in der HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Interface in Firefox 3.6                                     | Interface in Firefox 4                               | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)      | [`HTMLElement`](/de/docs/Web/API/HTMLElement)     | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)        | [`HTMLElement`](/de/docs/Web/API/HTMLElement)     | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)            | [`HTMLElement`](/de/docs/Web/API/HTMLElement)     | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Die Umbrucheigenschaft eines {{HTMLElement("textarea")}} Elements kann jetzt über das DOM gesteuert werden, über das `wrap` DOM-Attribut. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}} Elemente, die mit [`document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardmäßig nach der HTML5-Spezifikation. Skripte mit dem `src` Attribut werden so bald wie verfügbar ausgeführt (ohne Reihenfolge beizubehalten) und Skripte ohne das `src` Attribut werden synchron ausgeführt. Um zu erreichen, dass eingefügte Skripte mit dem `src` Attribut in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` auf sie.
- DOM [`file`](/de/docs/Web/API/File) Objekte bieten jetzt eine `url` Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects) Unterstützung für XMLHttpRequest.
- Die [`element.isContentEditable`](/de/docs/Web/API/Element/isContentEditable) Eigenschaft wurde implementiert.
- Die [`document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft ermöglicht es Ihnen zu bestimmen, welches {{HTMLElement("script")}} Element Skript derzeit ausgeführt wird. Die neuen Ereignisse [`element.onbeforescriptexecute`](/de/docs/Web/API/Element/onbeforescriptexecute) und [`element.onafterscriptexecute`](/de/docs/Web/API/Element/onafterscriptexecute) werden vor und nach dem Ausführen eines Skriptelements ausgelöst.
- Die `mozSourceNode` Eigenschaft wurde dem [`DragTransfer`](/de/docs/Web/API/DataTransfer) Objekt hinzugefügt.
- Die Methode [`selection.modify()`](/de/docs/Web/API/Selection/modify) wurde dem [`Selection`](/de/docs/Web/API/Selection) Objekt hinzugefügt; damit können Sie die aktuelle Textauswahl oder Cursorposition im Browserfenster einfach ändern.
- Die Unterstützung für das `window.directories` Objekt und das `directories` Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die [`event.mozInputSource`](/de/docs/Web/API/Event/mozInputSource) Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es, den Typ des Geräts zu bestimmen, das ein Ereignis erzeugt hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert keine `<` und `>` mehr um den Tag-Namen im Quirks-Modus.
- Die Methoden [`element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, um es Elementen zu ermöglichen, Mausereignisse weiter zu verfolgen, selbst wenn sich die Maus außerhalb ihres normalen Tracking-Bereichs befindet, nachdem ein `mousedown` Ereignis aufgetreten ist.
- Die Eigenschaft `window.mozPaintCount` wurde hinzugefügt; damit können Sie feststellen, wie oft ein Dokument gemalt wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprach-Token wurde von [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Content_negotiation) Header. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt bietet jetzt die Antwort als JavaScript typisiertes Array sowie als String über die Gecko-spezifische `mozResponseArrayBuffer` Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure` Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es, Objekt-URLs zu erstellen, die lokale Dateien referenzieren.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- [`Node.mozMatchesSelector()`](/de/docs/Web/API/Node/mozMatchesSelector) wirft jetzt eine `SYNTAX_ERR` Ausnahme, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit derselben Kurzschreibesyntax wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Weitere Informationen finden Sie unter [`element.style`](/de/docs/Web/API/Element/style).
- Die Dokumentwurzel hat nun [ein `privatebrowsingmode` Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Status des privaten Browsing-Modus beschreibt, einschließlich eines Hinweises darauf, ob das private Browsing vorübergehend oder dauerhaft für die Sitzung ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie in jedem anderen Hauptbrowser.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimal erlaubte Verzögerung für die Methode [`setTimeout()`](/de/docs/Web/API/Settimeout) ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das Ereignis [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) wird standardmäßig nicht mehr gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann durch Setzen einer Präferenz erneut aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Content Security Policy (CSP) ist ein Vorschlag von Mozilla, der Webdesigner und Serveradministratoren dabei helfen soll, zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Das Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser anzuweisen, nur über HTTPS mit ihr zu kommunizieren, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwort-Header, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies ermöglicht Websites anzugeben, ob ihre Seiten in Frames verwendet werden können, und wenn ja, ob dies auf denselben Ursprung beschränkt werden soll.
- [Änderungen am User Agent-String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
  - : Als Mittel zur Reduzierung der in HTTP-Anfragen gesendeten Datenmenge und Entropie (siehe [Firefox Bug 572650](https://bugzil.la/572650)) wurden die Kryptostärke- und Sprach-Token aus dem User Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Konformität mit dem ECMAScript 5 Standard haben.

### Entwicklerwerkzeuge

- [Verwendung der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web-Konsole-Tool ist eine nützliche Debugging-Hilfe sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie erneut aktivieren, indem Sie die Präferenz `devtools.errorconsole.enabled` auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla- und Erweiterungsentwickler

Für hilfreiche Tipps zur Aktualisierung vorhandener Erweiterungen für Firefox 4, siehe [Aktualisierung der Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons brechen, daher lesen Sie diesen Artikel unbedingt.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Ihnen bewusst sein sollten.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Code-Modul bietet Getter, die es einfach machen erhalten Zugriff auf häufig verwendete Dienste, wie den Präferenzdienst oder den Fenstervermittler, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible fremde Bibliotheksfunktionen ohne Verwendung von XPCOM aufzurufen.
- [Add-ons Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und Möglichkeiten zum Installieren und Entfernen von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht modale Benachrichtigungen für den Benutzer zu präsentieren. Sie können sehen, wie Sie diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) nutzen.
- [Laden von Code-Modulen aus chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:** URLs laden, sogar in JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm) Code-Modul bietet die globale Variable `gDownloadLastDir`, die eine Zeichenkette enthält, mit der Sie den Pfad des Verzeichnisses erfahren können, in das der letzte Download erfolgte. Dieses Modul kümmert sich um Fragen im Zusammenhang mit dem privaten Surfen für Sie.
- [Leistungsmessung mit dem PerfMeasurement.jsm Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm) Code-Modul bietet eine API, um CPU-Level-Leistungsdaten im JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm` Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es ermöglicht, beliebige Bytes aus einem Stream in eine Zeichenkette zu lesen, sogar wenn der Stream Nullwerte enthält.
- Das XPCOMUtils.jsm Code-Modul bietet jetzt die Hilfsmethoden IterSimpleEnumerator() und IterStringEnumerator() zum Durchlaufen von XPCOM-Enumeratoren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- [`ChromeWorker`](/de/docs/Web/API/ChromeWorker)
  - : Ein neuer Typ von Worker für privilegierten Code; damit können Sie Dinge wie [js-ctypes](/de/docs/js-ctypes) aus Workern in Erweiterungen und Anwendungscode verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es, mehrere Finger zu verfolgen, die sich gleichzeitig auf einem Touchscreen bewegen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn ein Dokumentes Wurzelelement erstellt wird, jedoch bevor auf ihm irgendwelche Skripte ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>` Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Neben der Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Toolbuttons hinein zu ziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` blubbern nicht mehr zum `<xul:tabbrowser>` Element (`gBrowser`). Ereignislistener für diese Ereignisse sollten zu `gBrowser.tabContainer` hinzugefügt werden, statt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind mehr von `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` angesprochen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs` Eigenschaft wurde hinzugefügt, um Ihnen zu ermöglichen, ein Array der aktuell sichtbaren Tabs zu erhalten; dies ermöglicht Ihnen zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Methode `showOnlyTheseTabs` hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` ermöglicht es, das Favicon eines Tabs zu erhalten, ohne zum `<xul:browser>` Element zu greifen.
- Die neue `tabbrowser.tabs` Eigenschaft ermöglicht es Ihnen, einfach eine Liste der Tabs in einem `<xul:tabbrowser>` Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` erlauben es Ihnen, Tabs zu fixieren und nicht zu fixieren (d.h. zwischen App-Tabs und regulären Tabs umzuschalten).
- Die Methode `getTabModalPromptBox` und das Attribut `tabmodalPromptShowing` wurden zum `<xul:tabbrowser>` hinzugefügt, um tabmodale Alarme zu unterstützen.

#### Änderungen bei Popups

- Das `<xul:popup>` Element wird nicht mehr unterstützt; Sie sollten `<xul:menupopup>` stattdessen verwenden. (Wenn Sie weiterhin `popup` verwenden, stoßen Sie auf Störungen, da das Element keine spezielle Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>` XUL Element hat jetzt eine `triggerNode` Eigenschaft, die das Node angibt, auf dem das Ereignis aufgetreten ist, das das Popup öffnete. Dies erforderte auch die Hinzufügung eines Trigger-Ereignisses Parameter zur Methode `openPopup`. Außerdem wurde die Eigenschaft `anchorNode` hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>` Element bietet jetzt die Attribute `fade` und `flip`, die zum Konfigurieren des Verhaltens neuer "Pfeil"-Stil-Benachrichtigungspanels verwendet werden.

#### Entfernte Unterstützung für Remote-XUL

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; auch können Sie keine XUL-Dokumente mehr mit `file://` URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains zu erlauben, Remote XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly` Attribut funktioniert jetzt korrekt für XBL Felder.
- Das `<xul:resizer>` Element erlaubt jetzt die Verwendung des `element` Attributs zum Spezifizieren eines Elements, das anstelle des Fensters angepasst werden soll.
- Das `<xul:resizer>` Element hat jetzt ein `type` Attribut, mit dem Sie angeben können, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer doppelt gezeichnet wird.
- Das `"active"` Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive` Pseudoklasse verwenden, um unterschiedlichen Hintergrundfenstern verschiedene Stile zuzuweisen.
- Das `emptytext` Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>` Element bietet jetzt ein `accelerated` Attribut; wenn dies wahr ist, darf der Hardware-Layer-Manager das Fenster beschleunigen.
- Das `<xul:stack>` Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der Anpassung von `<xul:toolbox>` ausgelöst, wodurch Sie Änderungen an Werkzeugleisten erkennen können.
- Das `alternatingbackground` Attribut für `<xul:tree>` Elemente wird nicht mehr unterstützt; Sie können stattdessen die `:-moz-tree-row` Pseudoklasse verwenden.
- Die Schaltfläche für das Überlauf-Menü der Lesezeichenleiste mit dem Anonid chevronPopup ist nicht mehr anonym; sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>` Element hat jetzt eine `tabbox` Eigenschaft, die die alte `_tabbox` Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>` Elemente haben jetzt das `drawintitlebar` Attribut; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned` Ereignisse sind verfügbar, die es Ihnen ermöglichen, zu erkennen, wann Tabs fixiert und nicht fixiert werden.
- Das neue `TabAttrModified` Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs ändern.
- `<xul:tab>` Elemente haben jetzt ein `pinned` Attribut, das es Ihnen ermöglicht, festzustellen, ob ein Tab derzeit fixiert ist oder nicht.
- Die `setDirectionIndicator` Klasse bei `<xul:tree>` Elementen tat schon seit einiger Zeit nichts mehr; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>` Element hat jetzt ein `chromemargin` Attribut, das es Ihnen ermöglicht, den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dies nutzen, um beispielsweise in die Titelleiste zu zeichnen.
- Das `<xul:window>` Element hat jetzt ein `disablechrome` Attribut; dies wird verwendet, um den größten Teil des Chrome in einem Fenster zu verbergen, wenn es verwendet wird, um UI im Browser anzuzeigen, wie `about:addons`.
- Das `<xul:window>` Element hat jetzt ein `disablefastfind` Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt diese nicht unterstützt. Dies wird beispielsweise vom Add-ons Panel verwendet.
- Werkzeugleisten können jetzt extern zu Werkzeugkästen sein, während sie weiterhin als Mitglied der `<xul:toolbox>` betrachtet werden, indem die `toolboxid` Eigenschaft des `<xul:toolbar>` gesetzt wird. Außerdem hat das `<xul:toolbox>` Element jetzt eine `externalToolbars` Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens betrachtet werden.
- Unterstützung für das Protokollieren von XUL-Vorlagen für Debugging-Zwecke hinzugefügt.

### Änderungen an der Benutzeroberfläche, die sich auf Entwickler auswirken

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie zuvor UI in die Statusleiste hinzugefügt haben.
- Verbergen von Browser-Chrome
  - : Sie können jetzt das Chrome des Browsers verbergen, wenn es wünschenswert ist; zum Beispiel tut `about:addons` dies.

### Speicher

#### Verschiedene API-Änderungen für Speicher

- Das `mozIStorageBindingParamsArray` Interface hat jetzt ein Länge-Attribut, das die Anzahl der `mozIStorageBindingParams` Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die `mozIStorageConnection.clone()` Methode wurde hinzugefügt, die es ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die `mozIStorageConnection.asyncClose()` Methode wurde hinzugefügt, die das Schließen einer Datenbankverbindung asynchron ermöglicht; Sie geben einen Rückruf an, um benachrichtigt zu werden, wenn die Schließoperation abgeschlossen ist.
- Die `mozIStorageConnection.setGrowthIncrement()` Methode wurde hinzugefügt, die es Ihnen ermöglicht, die Menge anzugeben, um die eine Datenbankdatei auf einmal wächst, um SQLite zu helfen, Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT` Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` statt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den spezifischen Änderungen, die unten erwähnt werden, ist es wichtig zu beachten, dass es keine eingefrorenen Interfaces mehr gibt. Alle Interfaces sind jetzt nicht eingefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinträchtigen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt assoziiert ist; dies ersetzt einen häufigen Anwendungsfall des nun entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen am `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` Interfaces gegeben hat. Wesentlich bedeutender ist, dass das `nsINavHistoryResultViewer` Interface umbenannt wurde zu `nsINavHistoryResultObserver`.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Shutdown-Prozess des Places-Dienstes zuverlässiger zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch bestimmt, aber die `places-connection-closed` Benachrichtigung ist verfügbar, um zu erfahren, wann der Places-Dienst seinen Shutdown-Prozess abgeschlossen hat.
- Der Arraygrößen-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und füllen, anstatt es für Sie erledigen zu lassen. Siehe [Anzeige von Places-Informationen unter Verwendung von Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Interface-Änderungen

- Die `nsIDocShell` und `nsIWebBrowser` Interfaces haben jetzt ein neues `isActive` Attribut, das verwendet wird, um die Optimierung von Codepfaden für nicht sichtbare Dokumente zu ermöglichen.
- Die Methode `nsIMemory.isLowMemory()` des `nsIMemory` Interfaces wurde als veraltet erklärt. Sie sollten stattdessen ["memory-pressure" Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Speichermangelsituationen zu achten.
- Die API für die Handhabung von Umleitungen bei HTTP-Kanälen wurde geändert, um sie asynchron zu verarbeiten. Jeder Code, der die Umleitungshandhabung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss auf `nsIChannelEventSink.asyncOnChannelRedirect()` aktualisiert werden. Dies akzeptiert einen Rückruf-Handler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Batches zu gruppieren und die Anzahl der Update-Benachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben durchführen (wie das Aktualisieren von Ansichten).
- Das schon lange veraltete `nsIPref` Interface wurde endlich entfernt. Wenn Sie nicht schon auf `nsIPrefService` umgestellt haben, ist jetzt der richtige Zeitpunkt.
- Die Interfaces `nsISessionStore` und `nsISessionStartup` erhielten Änderungen zur Unterstützung der On-Demand-Sitzungswiederherstellung. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie die Eigenschaften `origin`, `csp` und `URI` des `nsIPrincipal` Interfaces sind jetzt von Skripten aus zugänglich; vorher waren sie nur aus nativen Code zugänglich.
- Das `nsIPrompt` Interface unterstützt jetzt tabmodale Alarme; siehe [Verwendung von tabmodalen Alarms](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, die Zeichencodierung des Skripts anzugeben; wenn keine angegeben wird, wird ASCII angenommen (wie es immer angenommen wurde).
- Das `nsIAccessProxy` Interface wurde entfernt. Es war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die Interfaces `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Sie repräsentieren eine scrollbare Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Das `nsIDiskCacheStreamInternal` Interface wurde hinzugefügt.
- Das `nsIExternalURLHandlerService` Interface wurde hinzugefügt.
- Das `nsISyncJPAKE` Interface wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Das `nsIINIParserWriter` Interface wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Fehlersichere Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt fehlersichere Speicher-Allocator an, die garantiert keine null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie man explizit fehlertolerante versus fehlersichere Speicherzuweisungen anfordert.

### Weitere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einziges JAR-Archiv, `omni.jar`, zusammengefügt, was die Startperformance verbessert, indem I/O reduziert wird. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die `accessibility.disablecache` Präferenz wird nicht mehr unterstützt; sie wurde nur zu Debugging
