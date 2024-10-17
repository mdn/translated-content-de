---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Firefox 4, der am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, erweitert die Unterstützung für HTML5 und andere fortschreitende Web-Technologien und erhöht die Sicherheit. Dieser Artikel bietet Informationen über diese Version und welche Funktionen sowohl für Webentwickler als auch für Add-on-Entwickler und Gecko-Plattformentwickler zur Verfügung stehen.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler korrigiert, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht auch das direkte Einbetten von [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) in das HTML-Markup.

### HTML

- [Treffen Sie den HTML5-Parser](/de/docs/Learn/HTML)
  - : Ein Blick darauf, was der HTML5-Parser für Sie bedeutet und wie Sie SVG und MathML in Ihre Inhalte inline einbetten können.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Eine Betrachtung der Verbesserungen an Webformularen. Zu diesen Änderungen gehören hinzugefügte Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5-Verstecktes Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das für alle Elemente üblich ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die derzeit für den Benutzer nicht relevant sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets in Firefox 4 nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Verbesserungen des Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation zu bringen:

- Die Angabe eines negativen Radius bei einem Aufruf von `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Unendliche Werte bei der Verwendung von `createLinearGradient()` und `createRadialGradient()` werfen jetzt `NOT_SUPPORTED_ERR` statt `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht positive Werte ordnungsgemäß ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht positive Werte ordnungsgemäß ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig abänderbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische Methode `mozGetAsFile()`, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild des Inhalts des Canvas enthält. Details finden Sie in [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen unbekannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird und unterstützt den nicht-standardmäßigen Wert `darker` nicht mehr.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element, das durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Sehen Sie sich das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications) an.
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und passt das Verhalten an andere Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge in Firefox 4.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht das Spezifizieren von {{cssxref("length")}}-Werten als mathematische Ausdrücke.
- Selektorgruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Subrechtecke von Hintergrundbildern
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht die Verwendung von Subrechtecken von Bildern als {{cssxref("background-image")}}.
- CSS-Touches-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Arbiträre Elemente als CSS-Hintergründe verwenden](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Änderungen wurden daran vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren abgefragt werden können. Dies kann einige Webanwendungen betreffen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht die Anpassung erweiterter Funktionen von OpenType-Schriften.</td>
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
        Ermöglicht Ihnen, zu steuern, in welchen Dimensionen ein Element
        angepasst werden kann.
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
        Wird auf den Absenden-Button in Formularen angewendet, wenn eines oder mehrere der Formularfelder
        nicht validieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, wenn
        ihr Inhalt ungültig ist.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch angewendet auf {{HTMLElement("input")}}-Felder, die
        das <code>required</code>-Attribut nicht spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch angewendet auf {{HTMLElement("input")}}-Felder, die
        das <code>required</code>-Attribut spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch angewendet auf {{HTMLElement("input")}}-Felder, wenn
        ihr Inhalt erfolgreich validiert wird.
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
        Ermöglicht es Ihnen, das Aussehen eines Elements anzugeben, wenn Gecko der Meinung ist, dass es
        eine Fokusanzeige gerendert haben sollte.
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
        Ermöglicht es Ihnen,
        {{cssxref("length")}}-Werte als
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                                           |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht länger unterstützt.                                                                                                                                                                        |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen die Gelegenheit zu geben, Ihre Websites zu aktualisieren. Es wurden auch Rendering-Änderungen vorgenommen, um der neuesten Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                                       |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Unschärferadius aus Gründen der Vernunft und Leistung auf 300 Pixel.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Gruppen von Tabellenelementen (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der ein rahmenloses Aero-Glas-Aussehen auf ein Element anwendet.
- Das [Medienmerkmal `-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) wurde hinzugefügt, wodurch das Gerät-Pixel-pro-CSS-Pixel-Verhältnis in [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Umgang mit CSS {{cssxref("length")}}-Einheiten wurde überarbeitet, um andere Browser besser zu entsprechen, und um absolute Längen basierend auf der DPI des Geräts genauer in Bildschirmpixelanzahlen zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird nun von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks zur optimalen Nutzung der Grafik- und Videoleistungen in Firefox 4.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können nun SVG mit dem {{htmlelement("img")}}-Element sowie als CSS {{cssxref("background-image")}} verwenden.
- Medien-`buffered`-Attributunterstützung
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien-`preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen zur SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy`-Eigenschaften auf SVG {{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen angeben. Dadurch können Sie die Positionierung jedes Zeichens in einer Zeichenkette individuell steuern.

### DOM

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-typisierte Arrays wurde hinzugefügt; dies ermöglicht die Manipulation von Puffern, die rohe Daten mit nativen Datentypen enthalten. Mehrere APIs verwenden dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Abrufen von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen an beliebigen Elementen
  - : Unterstützung für die Internet Explorer-ursprünglichen APIs `setCapture()` und `releaseCapture()` wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlaufsobjekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt nun die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Support für Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### Die DOM-Schnittstellen von HTML-Elementen haben sich geändert

Einige HTML-Elemente haben ihre DOM-Schnittstellen entsprechend den Anforderungen der HTML5-Spezifikation geändert, wie unten angegeben.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Sonstige DOM-Änderungen

- Das Wrapping eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM gesteuert werden, über das `wrap`-DOM-Attribut. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich jetzt standardmäßig nach der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden sofort ausgeführt, sobald sie verfügbar sind (ohne Reihenfolge beizubehalten), und Skripte ohne das `src`-Attribut synchron. Um die Ausführung in Einfügereihenfolge für Skripte zu erzwingen, setzen Sie `.async=false` auf diese.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die Eigenschaft [`Element.isContentEditable`](/de/docs/Web/API/Element/isContentEditable) wurde implementiert.
- Die Eigenschaft [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) ermöglicht es Ihnen festzustellen, welches {{HTMLElement("script")}}-Element aktuell ein Skript ausführt. Die neuen Ereignisse [`element.onbeforescriptexecute`](/de/docs/Web/API/Element/onbeforescriptexecute) und [`element.onafterscriptexecute`](/de/docs/Web/API/Element/onafterscriptexecute) werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die Eigenschaft `mozSourceNode` wurde dem [`DragTransfer`](/de/docs/Web/API/DragTransfer)-Objekt hinzugefügt.
- Die Methode [`Selection.modify()`](/de/docs/Web/API/Selection/modify) wurde zum [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; damit können Sie die aktuelle Texthervorhebung oder die Cursorposition in einem Browserfenster einfach ändern.
- Unterstützung für das `window.directories`-Objekt und die `directories`-Funktion für [`window.open`](/de/docs/Web/API/Window/open), die von keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die Eigenschaft [`Event.mozInputSource`](/de/docs/Web/API/Event/mozInputSource) wurde zu Benutzeroberflächenereignissen im DOM hinzugefügt; diese nicht-standardisierte Eigenschaft lässt Sie den Typ des Geräts bestimmen, das ein Ereignis erzeugt hat.
- Das `readystatechange`-Ereignis für das [`Document`](/de/docs/Web/API/Document) wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert im Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, wodurch Elemente weiterhin Mausereignisse verfolgen können, auch wenn sich die Maus außerhalb ihres normalen Nachverfolgungsbereichs befindet, nachdem ein `mousedown`-Ereignis aufgetreten ist.
- Die Eigenschaft `window.mozPaintCount` wurde hinzugefügt; sie lässt Sie feststellen, wie oft ein Dokument gerendert wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Content_negotiation)-Header stattdessen. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gibt die Antwort jetzt als JavaScript-typisiertes Array sowie als String über die Gecko-spezifische Eigenschaft `mozResponseArrayBuffer` aus.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druck auf unterstützte druckempfindliche Eingabegeräte angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die lokale Dateien referenzieren.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- [`Node.mozMatchesSelector()`](/de/docs/Web/API/Node/mozMatchesSelector) wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektorstring ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit derselben Kurzbefehlssyntax wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`element.style`](/de/docs/Web/API/Element/style) für Details.
- Die Dokumentwurzel hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Browsing-Modus beschreibt, einschließlich einer Angabe darüber, ob das private Browsen vorübergehend oder dauerhaft für die Sitzung ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie in jedem anderen großen Browser.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimal zulässige Verzögerung für die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann wieder aktiviert werden, indem eine Präferenz gesetzt wird.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Content Security Policy (CSP) ist ein Mozilla-Vorschlag, der Webdesignern und Serveradministratoren helfen soll zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und abzumildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist ein Sicherheitsmerkmal, das einer Website ermöglicht, den Browsern mitzuteilen, dass sie nur über HTTPS kommuniziert werden sollen, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS-Antwortheader](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwortheader, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzugeben, ob ihre Seiten in Frames verwendet werden dürfen und wenn ja, ob sie dies auf denselben Ursprung beschränken möchten.
- [Benutzeragenten-String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox) Änderungen
  - : Um die Menge an Daten und Entropie zu reduzieren, die in HTTP-Anfragen gesendet werden (siehe [Firefox Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke- und Sprach-Token aus dem Benutzeragenten-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen, siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Einhaltung des ECMAScript 5 Standards haben.

### Entwicklerwerkzeuge

- [Die Webkonsole verwenden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Werkzeug ist ein nützliches Debugging-Hilfsmittel sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig ab Gecko 2.0 deaktiviert. Sie können sie durch Ändern der Präferenz `devtools.errorconsole.enabled` auf `true` und Neustarten des Browsers wieder aktivieren.

## Änderungen für Mozilla und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4, siehe [Erweiterungen für Firefox 4 aktualisieren](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die bestehende Add-ons inkompatibel machen, also lesen Sie diesen Artikel.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Sie kennen müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Referenzen zu häufig genutzten Diensten wie dem Präferenzservice oder dem Fenstervermittler zu erhalten, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes-API ermöglicht das Aufrufen von C-kompatiblen Funktionen aus fremden Bibliotheken ohne Verwendung von XPCOM.
- [Add-ons-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungen-Modul macht es einfach, dem Benutzer attraktive, nicht-modale Benachrichtigungen zu präsentieren. Sie können sehen, wie Sie diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwenden.
- [Laden von Code-Modulen von chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:** URLs laden, auch innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul bietet die globale Variable `gDownloadLastDir`, die den Pfad des Verzeichnisses, in das der letzte Download stattfand, als Zeichenkette enthält. Dieses Modul kümmert sich um Probleme im Zusammenhang mit dem privaten Surfen.
- [Leistungsmessung mithilfe des PerfMeasurement.jsm-Code-Moduls](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API zur Messung von CPU-Leistungsdaten in JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in eine Zeichenkette zu lesen, auch wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt die Hilfsfunktionen IterSimpleEnumerator() und IterStringEnumerator() zur Iteration über XPCOM-Enumeratoren.
- Sie können jetzt [Workers in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- [`ChromeWorker`](/de/docs/Web/API/ChromeWorker)
  - : Ein neuer Workertyp für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Workern in Erweiterungen und Anwendungscode zu nutzen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht-standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen das Verfolgen mehrerer Finger, die sich gleichzeitig auf einem Touchscreen bewegen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn ein Dokumentwurzelelement erstellt wird, jedoch bevor Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Erweiterungen betreffen, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs verändern diese Änderungen auch die Tableiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Werkzeugleistenschaltflächen hineinzuziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` blubbern nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`). Ereignislistener für diese Ereignisse sollten `gBrowser.tabContainer` hinzugefügt werden, anstatt `gBrowser` direkt.
- Das Tab-Kontextmenü ist kein anonymes Kind mehr des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch in JavaScript über `gBrowser.tabContextMenu` direkter zugegriffen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für mehr Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, sodass Sie ein Array der aktuell sichtbaren Tabs erhalten können; dies ermöglicht es Ihnen zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; diese wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die es ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element aufzurufen.
- Die neue `tabbrowser.tabs`-Eigenschaft wurde hinzugefügt, die es Ihnen ermöglicht, eine Liste der Tabs in einem `<xul:tabbrowser>`-Element einfach zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es, Tabs anzuheften und zu lösen (d. h. sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden dem `<xul:tabbrowser>` hinzugefügt, um Tab-modale Benachrichtigungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie `popup` weiterhin verwenden, werden Sie auf Fehler stoßen, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die den Knoten angibt, auf dem das Ereignis aufgetreten ist, das dazu führte, dass das Popup geöffnet wurde. Dies erforderte auch die Hinzufügung eines auslösenden Ereignisparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der bei der Erstellung des Popups spezifiziert wurde.
- Das `<xul:panel>`-Element bietet jetzt die Attribute `fade` und `flip`, die verwendet werden, um das Verhalten neuer "Pfeil"-Benachrichtigungspanels zu konfigurieren.

#### Entfernte Unterstützung für Remote-XUL

Remote-XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können Sie XUL-Dokumente nicht mehr mit `file://`-URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen diese auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains das Laden von Remote-XUL zu ermöglichen.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen jetzt, das `element`-Attribut zu verwenden, um ein Element anzugeben, das anstelle des Fensters geändert werden soll.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das Ihnen erlaubt, anzugeben, dass der Resizer für ein Fenster und nicht für ein Element ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `“active”“`-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue Pseudo-Klasse `:-moz-window-inactive` verwenden, um verschiedenen Fenstern im Hintergrund unterschiedliche Stile zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element hat jetzt ein `accelerated`-Attribut; wenn dies wahr ist, darf der Hardware-Schichtmanager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der Anpassung von `<xul:toolbox>` ausgelöst, sodass Sie Änderungen an den Werkzeugleisten erkennen können.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die Pseudo-Klasse `:-moz-tree-row` stattdessen verwenden.
- Die Schaltfläche für das Überlaufmenü der Lesezeichen-Symbolleiste mit „anonid“ chevronPopup ist nicht mehr anonym; sie hat eine ID von „PlacesChevron“.
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dies auf `true` gesetzt ist, beinhaltet der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, die es Ihnen ermöglichen zu erkennen, wann Tabs angeheftet oder gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das es Ihnen ermöglicht zu bestimmen, ob ein Tab aktuell angeheftet ist oder nicht.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hat seit geraumer Zeit nichts mehr bewirkt; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, mit dem Sie den Abstand zwischen Chrome- und Inhaltsseiten eines Fensters auf jeder Seite festlegen können; dies kann beispielsweise zum Zeichnen in die Titelleiste verwendet werden.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; es wird verwendet, um den größten Teil des Chrome in einem Fenster zu verbergen, wenn es verwendet wird, um UI innerhalb des Browsers darzustellen, beispielsweise `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, mit dem Sie die Suchleiste in einem Fenster deaktivieren können, wenn der Inhalt sie nicht unterstützt. Dies wird beispielsweise durch das Add-ons-Panel verwendet.
- Werkzeugleisten können jetzt außerhalb von Werkzeugkästen sein, während sie immer noch als Mitglied des `<xul:toolbox>` betrachtet werden, durch Setzen der `toolboxid`-Eigenschaft von `<xul:toolbar>`. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens betrachtet werden.
- Unterstützung für das Protokollieren von XUL-Vorlagen für Debug-Zwecke wurde hinzugefügt.

### Änderungen der Benutzeroberfläche, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Wenn Sie in der Vergangenheit UI zur Statusleiste hinzugefügt haben, müssen Sie Ihre Erweiterung aktualisieren, um diese zu verwenden.
- Verbergen des Browser-Chrome
  - : Sie können nun das Chrome des Browsers ausblenden, wenn es wünschenswert ist, dies zu tun; beispielsweise `about:addons` tut dies.

### Speicher

#### Verschiedene Speicher-API-Änderungen

- Die `mozIStorageBindingParamsArray`-Schnittstelle hat jetzt ein Länge-Attribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Callback an, um benachrichtigt zu werden, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es Ihnen erlaubt, die Menge anzugeben, um die eine Datenbankdatei jeweils vergrößert wird, um SQLite zu helfen, die Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstelle als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den spezifischen Änderungen, die unten referenziert werden, ist es wichtig zu beachten, dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt ungefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details über Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt assoziiert ist; dies ersetzt ein häufiges Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`-, `nsINavHistoryQueryOptions`- und `nsINavHistoryContainerResultNode`-Schnittstellen gegeben hat. Wesentlich bedeutender ist, dass die Schnittstelle `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Shutdown-Prozess des Places-Service zuverlässiger zu verfolgen. Davon sind die meisten nur für den internen Gebrauch, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu erfahren, wann der Places-Service seinen Shutdown-Prozess abgeschlossen hat.
- Der Array-Größen-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und füllen, anstatt dies für Sie erledigen zu lassen. Siehe [Anzeige von Places-Informationen mithilfe von Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell`- und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um den Codepfad für Dokumente, die derzeit nicht sichtbar sind, zu optimieren.
- Die `nsIMemory`-Methode `nsIMemory.isLowMemory()` wurde abgelehnt. Sie sollten ["Speicherdruck"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Situationen mit wenig Arbeitsspeicher zu achten.
- Die API zur Behandlung von Weiterleitungen auf HTTP-Kanälen wurde geändert, um diese asynchron zu verarbeiten. Jeder Code, der die Weiterleitungsverarbeitung mithilfe von `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` stattdessen zu verwenden. Dies akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die es ermöglicht, Places-Operationen in Batches zu gruppieren und die Anzahl der Update-Benachrichtigungen zu reduzieren, die geliefert werden, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben durchführen (wie z. B. das Aktualisieren von Ansichten).
- Die längst veraltete `nsIPref`-Schnittstelle wurde endlich entfernt. Wenn Sie nicht bereits auf `nsIPrefService` umgestiegen sind, ist jetzt der richtige Zeitpunkt.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` erhielten Änderungen, um die On-Demand-Sitzungswiederherstellung zu unterstützen. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie die Attribute `origin`, `csp` und `URI` der `nsIPrincipal`-Schnittstelle sind jetzt von Skript aus verfügbar; zuvor waren sie nur vom nativen Code aus verfügbar.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt Tab-modale Benachrichtigungen; siehe [Verwendung von Tab-modalen Benachrichtigungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt Hostnamen, die mit einem Punkt (".") beginnen, korrekt ab.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, mit dem Sie die Zeichenkodierung des Skripts angeben können; wird keine angegeben, wird ASCII angenommen (wie bisher immer angenommen).
- Die Schnittstelle `nsIAccessProxy` wurde entfernt. Es handelt sich um ein Implementierungsdetail, das seine Nützlichkeit überdauert hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Sie repräsentieren eine scrollbare Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die Schnittstelle `nsIDiskCacheStreamInternal` wurde hinzugefügt.
- Die Schnittstelle `nsIExternalURLHandlerService` wurde hinzugefügt.
- Die Schnittstelle `nsISyncJPAKE` wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Infallible Memory Allocation](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt fehlerfreie Speicher-Allocatoren, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit fehleranfällige versus fehlerfreie Speicherallokation anfragen.

### Sonstige Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einzelnes JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung verbessert, indem die E/A reduziert wird. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Präferenz `accessibility.disablecache` wird nicht mehr unterstützt; sie war nur zu Debugging-Zwecken verfügbar und wird nicht mehr verwendet.
- Add-ons, deren GUID sich von einer Version zur anderen ändert, können nun ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung von plattformspezifischen Verzeichnissen in Add-on-Bundles können Sie keine unterschiedlichen Standardpräferenzen für jede Plattform mehr bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern stattdessen direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Erweiterungen, die binäre Komponenten, mit [js-ctypes](/de/docs/js-ctypes) geladene DLLs, [Such-Plugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenstersymbole verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die eine [SQLite-Datenbank erstellen](/de/docs/XUL_School/Local_Storage#sqlite), oder Dinge relativ zum Extension-Verzeichnis vom Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einschließen, die [automatisch beim Start der Anwendung installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines angepassten Firefox.

## Sonstige Änderungen

- Nur die Root `chrome.manifest`-Datei wird geladen
  - : Nur die Root-`chrome.manifest`-Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrem Root-`chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Die Unterstützung bleibt über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Inhaltsprozessereignishandhabung](/de/docs/The_message_manager)
  - : Um Out-of-Process-Plugins und andere Mehrprozessmerkmale zu unterstützen, wurde eine neue API zur Unterstützung des Versendens von Nachrichten zwischen Prozessen eingeführt.
- [Bootstrapped-Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder heruntergestuft) werden können, ohne dass ein Neustart des Browsers erforderlich ist.
- Standard-Plug-in entfernt
  - : Das Standard-Plug-in wurde entfernt. Der Anwendungs-Plugins-Ordner wurde ebenfalls standardmäßig entfernt, jedoch ist die Unterstützung für die Installation von Plugins über diesen Ordner weiterhin vorhanden. Siehe [Firefox Bug 533891](https://bugzil.la/533891).
- Erweiterungs-Manager ersetzt durch Addon Manager
  - : `nsIExtensionManager` wurde durch den [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child-HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Child-HWNDs mehr für seine interne Verwendung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung unter Firefox 4 nicht funktionieren. Sie müssen entweder aufhören, HWNDs zu verwenden, oder Ihren Code, der auf HWNDs angewiesen ist, in ein [NPAPI](/de/docs/NPAPI)-Plug-in einwickeln. Das ist eine Menge Arbeit, also wenn Sie die direkte Verwendung von HWNDs vermeiden können, sollten Sie das tun.
- Gestenänderungen
  - : Die Dreifinger-Aufwärts- und Abwärtsstreichgesten auf Trackpads wurden so geändert, dass standardmäßig die Firefox-Panoramaansicht geöffnet und geschlossen wird (neé TabCandy). Um dies auf die vorherigen Befehle „Scroll-to-Top“ und „Scroll-to-Bottom“ zurückzustellen, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
