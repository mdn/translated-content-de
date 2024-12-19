---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

Firefox 4, der am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattformentwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht auch das Einbetten von [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Überblick über Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}} Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt nun die neuen HTML5-Elemente in Bezug auf Dokumentenabschnitte: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das zu allen Elementen gehört, wird verwendet, um Inhalte auf einer Webseite auszublenden, die für den Benutzer momentan nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel sind und generell nicht verwendet werden sollten.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden am [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface vorgenommen, um unsere {{HTMLElement("canvas")}} Implementierung näher an die Spezifikation zu bringen:

- Die Angabe eines negativen Radius beim Aufruf von `arc()` gibt jetzt korrekt eine `INDEX_SIZE_ERR` Ausnahme aus.
- Die Angabe von unendlichen Werten beim Aufruf von `createLinearGradient()` und `createRadialGradient()` gibt jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert wirft keine Ausnahme mehr; stattdessen werden nicht positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert wirft keine Ausnahme mehr; stattdessen werden nicht positive Werte korrekt ignoriert.
- Die `putImageData()` Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}} Elemente sind jetzt standardmäßig anpassbar; Sie können dies mit der {{cssxref("resize")}} CSS-Eigenschaft deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}} Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()` Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild des Canvas-Inhalts enthält. Weitere Details finden Sie unter [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn er auf einen nicht erkannten Wert gesetzt wird, und unterstützt den nicht standardmäßigen `darker` Wert nicht mehr.
- Die Unterstützung für das veraltete `<spacer>` Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>` Element, das durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}} Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}} Element unterstützt ein neues `mozactionhint` Attribut, das es ermöglicht, das Label für die Eingabetaste auf virtuellen Tastaturen festzulegen.
- {{HTMLElement("script")}} Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}}, und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Firefox-Versionen nicht der Fall war. Dies entspricht der Spezifikation und passt sich dem Verhalten anderer Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht die Angabe von {{cssxref("length")}} Werten als mathematische Ausdrücke.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zusammenzufassen.
- Unterstützung für Unterrechteck von Hintergrundbildern
  - : Die {{cssxref("-moz-image-rect")}} Funktion ermöglicht es, Unterrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Verwendung von willkürlichen Elementen als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Änderungen wurden vorgenommen an den Informationen, die über den Stil besuchter Links mit CSS-Selektoren erhalten werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht die Anpassung erweiterter Funktionen von OpenType-Schriftarten.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichen eines Tab-Zeichens (U+0009) beim
        Rendern von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht die Steuerung der Dimensionen, in denen ein Element vergrößert werden kann.
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
        Wird auf den Absenden-Button von Formularen angewendet, wenn eines oder mehrere der Formularfelder nicht gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, wenn deren Inhalt ungültig ist.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die nicht über das <code>required</code> Attribut verfügen.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die das <code>required</code> Attribut festlegen.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, wenn deren Inhalt erfolgreich validiert.
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
        Ermöglicht, das Aussehen eines Elements zu spezifizieren, wenn Gecko der Meinung ist, dass eine Fokusanzeige gerendert werden sollte.
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
      <td>Ermöglicht das Gruppieren von Selektoren und Kombinatoren zusammenzufassen.</td>
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
        Ermöglicht die Verwendung eines Unterrechtecks eines Bildes als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}}.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name              | Neuer Name                    | Anmerkungen                                                                                                                                                                        |
| ----------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size`  | {{cssxref("background-size")}}| Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                      |
| `-moz-border-radius`    | {{cssxref("border-radius")}}  | Der alte Name wird für eine begrenzte Zeit unterstützt, um Zeit für die Aktualisierung Ihrer Websites zu geben. Rendering-Änderungen wurden ebenfalls vorgenommen, um der neuesten Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`       | {{cssxref("box-shadow")}}     |                                                                                                                                                                                  |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}} Eigenschaft begrenzt jetzt den Unschärferadius aus Vernunft- und Leistungsgründen auf 300px.
- Die {{cssxref("overflow")}} Eigenschaft gilt nicht mehr für Tabellengruppen-Elemente (`<thead>`, `<tbody>` und `<tfoot>`).
- Die `-moz-appearance` Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element ein randloses Aero Glass Aussehen verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) Media-Funktion wurde hinzugefügt, um das Verhältnis von Gerätepixeln zu CSS-Pixeln in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu verwenden.
- Die Handhabung von CSS {{cssxref("length")}} Einheiten in Gecko wurde überarbeitet, um besser zu anderen Browsern zu passen und absolute Längen genauer in Pixelanzahl auf dem Bildschirm basierend auf der DPI des Geräts zu übersetzen.

### Grafiken und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}} Element sowie als CSS {{cssxref("background-image")}} verwenden.
- Unterstützung des `buffered` Attributs für Medien
  - : Das `buffered` Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload` Attribut
  - : Das `preload` Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer` Attribut. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elemente sowie die `nsIDOMHTMLMediaElement` Schnittstelle.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen angeben. Dadurch können Sie die Positionierung jedes Zeichens in einer Zeichenkette individuell steuern.

### DOM

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-typisierte Arrays wurde hinzugefügt; damit können Sie Puffer mit Rohdaten unter Verwendung nativer Datentypen manipulieren. Mehrere APIs nutzen dies, einschließlich der [Datei-API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalten von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range) Objekt verfügt jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden APIs `setCapture()` und `releaseCapture()` wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumentverlaufsobjekt, verfügbar über das [`window.history`](/de/docs/Web/API/Window/history) Objekt, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das zusammen mit der `window.mozRequestAnimationFrame()` Methode und der `window.mozAnimationStartTime` Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### Die DOM-Schnittstellen der HTML-Elemente haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die in der HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                              | Schnittstelle in Firefox 4                          | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)  | [`HTMLElement`](/de/docs/Web/API/HTMLElement)    | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)    | [`HTMLElement`](/de/docs/Web/API/HTMLElement)    | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)        | [`HTMLElement`](/de/docs/Web/API/HTMLElement)    | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Der Zeilenumbruch eines {{HTMLElement("textarea")}} Elements kann jetzt über das DOM gesteuert werden, über das `wrap` DOM-Attribut. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}} Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardgemäß gemäß der HTML5-Spezifikation. Skripte mit dem `src` Attribut werden ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten), und Skripte ohne das `src` Attribut werden synchron ausgeführt. Um Skripte, die mit dem `src` Attribut eingefügt wurden, in der Einfügereihenfolge auszuführen, setzen Sie `.async=false` auf sie.
- DOM [`File`](/de/docs/Web/API/File) Objekte bieten nun eine `url` Eigenschaft.
- [FormularDatenn](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects) Unterstützung für XMLHttpRequest.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft ermöglicht es Ihnen festzustellen, welches {{HTMLElement("script")}} Element gerade ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute) Ereignisse werden vor und nach der Ausführung eines Skript-Elements ausgelöst.
- Die `mozSourceNode` Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify) Methode wurde dem [`Selection`](/de/docs/Web/API/Selection) Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition in einem Browserfenster einfach zu ändern.
- Die Unterstützung für das `window.directories` Objekt und das `directories` Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht-standardisierte Eigenschaft ermöglicht es Ihnen, den Typ des Geräts zu bestimmen, das ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement) Methode akzeptiert im Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) Methoden wurden hinzugefügt, wodurch es Elementen ermöglicht wird, Mausereignisse auch außerhalb ihres normalen Verfolgungsbereichs zu verfolgen, nachdem ein `mousedown` Ereignis stattgefunden hat.
- Die `window.mozPaintCount` Eigenschaft wurde hinzugefügt; sie ermöglicht es Ihnen festzustellen, wie oft ein Dokument bereits gerendert wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Content_negotiation) Header. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt zeigt nun die Antwort als JavaScript typisiertes Array sowie als Zeichenfolge an, mit der Gecko-spezifischen `mozResponseArrayBuffer` Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) beinhalten jetzt eine `mozPressure` Eigenschaft, die die Druckmenge auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) lässt Sie ein neues HTML-Dokument erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR` Ausnahme, wenn die angegebene Selektorzeichenkette ungültig ist, anstatt fälschlicherweise `false` zu zurückzugeben.
- Sie können nun die Werte der SVG-Eigenschaften eines Elements mit derselben Kurzschreibweise wie bei CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Weitere Details finden Sie unter [`style`](/de/docs/Web/API/HTMLElement/style).
- Der Wurzelknoten des Dokuments hat jetzt [ein `privatebrowsingmode` Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Status des privaten Browserverlaufs beschreibt, einschließlich eines Hinweises darauf, ob das private Browsen für die Sitzung vorübergehend oder dauerhaft ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode ist jetzt optional, so wie es bei jedem anderen großen Browser der Fall ist.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimal erlaubte Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Methode ist jetzt eine Voreinstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann reaktiviert werden, indem eine Voreinstellung gesetzt wird.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Content Security Policy (CSP) ist ein Mozilla-Vorschlag, der Webdesignern und Serveradministratoren dabei helfen soll, zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und zu mildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browsern mitzuteilen, dass sie nur mit HTTPS und nicht mit HTTP kommunizieren sollen.
- [Der X-FRAME-OPTIONS Antwortheader](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwortheader, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites, anzugeben, ob ihre Seiten in Frames verwendet werden können und wenn ja, ob dies auf die gleiche Herkunft beschränkt werden soll oder nicht.
- [Änderungen am User Agent String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
  - : Um die Menge an Daten und Entropie in HTTP-Anfragen zu reduzieren (siehe [Firefox Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke und Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird eine zusätzliche Einhaltung des ECMAScript 5 Standards haben.

### Entwickler-Tools

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsolen-Tool ist eine nützliche Debugging-Hilfe sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie reaktivieren, indem Sie die Voreinstellung `devtools.errorconsole.enabled` auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 lesen Sie [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons beeinträchtigen, daher sollten Sie diesen Artikel unbedingt lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Änderungen an Themes in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige wichtige Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Code-Modul bietet Getter, die es einfach machen, Referenzen zu häufig verwendeten Diensten wie dem Präferenzdienst oder dem Fenstermediator zu erhalten, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht das Aufrufen von C-kompatiblen Fremdbibliotheksfunktionen ohne Verwendung von XPCOM.
- [Addon-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Addon-Manager bietet Informationen über installierte Add-ons, Unterstützung für die Verwaltung dieser und Möglichkeiten, Add-ons zu installieren und zu entfernen.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht-modale Benachrichtigungen dem Benutzer zu präsentieren. Sie können sehen, wie man diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwendet.
- [Laden von Code-Modulen von chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können nun JavaScript-Code-Module mit **chrome:** URLs laden, auch innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm) Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen Zeichenstring enthält, mit dem Sie den Pfad des Verzeichnisses erfahren können, in das der letzte Download stattgefunden hat. Dieses Modul kümmert sich um Probleme im Zusammenhang mit dem privaten Surfen für Sie.
- [Leistungsmessung unter Verwendung des PerfMeasurement.jsm Code-Moduls](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm) Code-Modul bietet eine API, um Leistungsdaten auf CPU-Ebene in JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm` Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es ermöglicht, beliebige Bytes aus einem Stream in eine Zeichenkette zu lesen, selbst wenn der Stream Nullwerte enthält.
- Das XPCOMUtils.jsm Code-Modul bietet jetzt die Hilfsfunktionen IterSimpleEnumerator() und IterStringEnumerator(), um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Worker für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Worker in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht-standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger zu verfolgen, die gleichzeitig auf einem Touchscreen bewegt werden.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, jedoch bevor ein Skript darauf ausgeführt wird.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>` Element vorgenommen, die Erweiterungen betreffen, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Toolbar, die es dem Benutzer ermöglicht, Toolbar-Tasten hinein zu ziehen.

- Die Ereignisse `TabClose`, `TabSelect`, und `TabOpen` blubbern nicht mehr bis zum `<xul:tabbrowser>` Element (`gBrowser`). Ereignis-Listener für diese Ereignisse sollten dem `gBrowser.tabContainer` hinzugefügt werden, statt direkt `gBrowser`.
- Das Kontextmenü der Tabs ist kein anonymer Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL Overlays überlagert werden. Es kann auch direkter im JavaScript über `gBrowser.tabContextMenu` angesprochen werden. Weitere Details finden Sie in [diesem Blogpost](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).
- Die neue Eigenschaft `visibleTabs` wurde hinzugefügt, um ein Array der aktuell sichtbaren Tabs zu erhalten; dies lässt Sie feststellen, welche Tabs im aktuellen Tab-Satz sichtbar sind. Dies wird von Firefox Panorama, zum Beispiel, verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die es ermöglicht das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>` Element hochzuziehen.
- Die neue Eigenschaft `tabbrowser.tabs` wurde hinzugefügt, die es Ihnen ermöglicht, eine Liste der Tabs in einem `<xul:tabbrowser>` Element einfach zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen das Anheften und Lösen von Tabs (das heißt, das Umschalten zwischen App-Tabs und regulären Tabs).
- Die Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden dem `<xul:tabbrowser>` hinzugefügt, um tab-modale Alarme zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>` Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, stoßen Sie auf Darstellungsprobleme, da dem Element keine spezielle Bedeutung mehr zukommt. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>` XUL-Element hat jetzt eine `triggerNode` Eigenschaft, die das Knoten angibt, auf dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch die Hinzufügung eines Trigger-Ereignis-Parameters zur `openPopup` Methode. Außerdem wurde die Eigenschaft `anchorNode` hinzugefügt; sie gibt den Anker an, der beim Erstellen des Popups spezifiziert wurde.
- Das `<xul:panel>` Element bietet jetzt `fade` und `flip` Attribute, die zum Konfigurieren des Verhaltens neuer "Pfeil"-Stil-Benachrichtigungspanels verwendet werden.

#### Entfernte Remote-XUL Unterstützung

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; auch können Sie keine XUL-Dokumente mehr mit `file://` URLs laden, es sei denn, Sie erstellen die Voreinstellung `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains das Laden von remote XUL zu erlauben.

#### Verschiedene XUL-Änderungen

- Das `readonly` Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>` Element erlaubt es Ihnen nun das `element` Attribut zu verwenden, um ein Element zum Resizen anzugeben, anstatt das Fenster zu resizen.
- Das `<xul:resizer>` Element verfügt jetzt über ein `type` Attribut, das es ermöglicht, anzugeben, dass der Resizer für ein Fenster statt einem Element ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `"active"` Attribut wird nicht mehr für aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive` Pseudoklasse verwenden, um verschiedenen Hintergrundfensterstilen zuzuordnen.
- Das `emptytext` Attribut ist jetzt veraltet; stattdessen sollte `placeholder` verwendet werden.
- Das `<xul:window>` Element bietet jetzt ein `accelerated` Attribut; wenn dieses wahr ist, kann der Hardware-Layer-Manager das Fenster beschleunigen.
- Das `<xul:stack>` Element unterstützt jetzt die `bottom` und `right` Attribute.
- Ereignisse werden nun während der `<xul:toolbox>` Anpassung ausgelöst, was es ermöglicht, Änderungen an Toolbars zu erkennen.
- Das `alternatingbackground` Attribut für `<xul:tree>` Elemente wird nicht mehr unterstützt; Sie können stattdessen die Pseudoklasse `:-moz-tree-row` verwenden.
- Der Bookmarks Toolbar Overflow-Button mit dem anonymen ID ChevronPopup ist nicht mehr anonym; er hat eine ID von "PlacesChevron".
- Das `<xul:tabs>` Element hat jetzt eine `tabbox` Eigenschaft, die die alte `_tabbox` Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert war).
- XUL `<xul:window>` Elemente haben jetzt das `drawintitlebar` Attribut; wenn dies wahr ist, enthält der Inhaltsbereich des Fensters die Titelleiste, sodass hinein gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned` Ereignisse ermöglichen es, zu erkennen, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified` Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image` oder `selected` Attribute eines Tabs ändern.
- `<xul:tab>` Elemente haben jetzt ein `pinned` Attribut, mit dem Sie feststellen können, ob ein Tab aktuell angeheftet ist oder nicht.
- Die `setDirectionIndicator` Klasse auf `<xul:tree>` Elementen hat schon lange nichts mehr gemacht; jetzt wird sie gar nicht mehr verwendet.
- Das `<xul:window>` Element hat jetzt ein `chromemargin` Attribut, das es Ihnen ermöglicht den Rand zwischen Chrome und Inhalt auf jeder Seite eines Fensters zu setzen; Sie können dies verwenden, um in die Titelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>` Element hat jetzt ein `disablechrome` Attribut; dies wird verwendet, um einen Großteil des Chrome in einem Fenster zu verstecken, wenn es für den in-Browser UI verwendet wird, wie `about:addons`.
- Das `<xul:window>` Element hat jetzt ein `disablefastfind` Attribut, mit dem Sie die Suchleiste in einem Fenster deaktivieren können, wenn der Inhalt diese nicht unterstützt. Dies wird zum Beispiel von dem Add-ons-Panel verwendet.
- Toolbars können jetzt außerhalb von Toolboxes sein, während sie immer noch als Mitglied der `<xul:toolbox>` betrachtet werden, indem die `toolboxid` Eigenschaft der `<xul:toolbar>` gesetzt wird. Außerdem hat das `<xul:toolbox>` Element jetzt eine `externalToolbars` Eigenschaft, die alle Toolbars auflistet, die als Mitglieder der Toolbox betrachtet werden.
- Unterstützung für das Debuggen von XUL-Templates wurde hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie bisher Benutzeroberflächen zur Statusleiste hinzugefügt haben.
- Verstecken des Browser-Chromes
  - : Sie können nun das Chrome des Browsers verbergen, wenn es wünschenswert ist, wie z.B. bei `about:addons`.

### Speicher

#### Verschiedene Speicher-API-Änderungen

- Das `mozIStorageBindingParamsArray` Interface hat jetzt ein Length-Attribut, das die Anzahl der `mozIStorageBindingParams` Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es ermöglicht, eine bestehende Datenbankverbindung zu duplizieren.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie spezifizieren einen Rückruf, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es ermöglicht, die Menge festzulegen, um die eine Datenbankdatei wächst, um SQLite-Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT` Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` statt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den spezifischen Änderungen, die unten angegeben sind, ist es wichtig zu beachten dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt unfreezere, unabhängig davon, was die Dokumentation sagen mag. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 betreffen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verbunden ist; dies ersetzt einen häufigen Anwendungsfall der jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gab. Bedeutender ist, dass das Interface `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser die Verfolgung des Herunterfahrens des Places-Dienstes zuverlässiger zu ermöglichen. Davon sind die meisten nur für den internen Gebrauch bestimmt, aber die Benachrichtigung `places-connection-closed` ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Arraygröße-Ausgabeparameter in mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü manuell mit Places-Informationen erstellen und füllen, anstatt es für Sie erledigen zu lassen. Weitere Details finden Sie in [Darstellung von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view).

### Schnittstellenänderungen

- Die Schnittstellen `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive` Attribut, das verwendet wird, um die Optimierung der Codepfade für nicht sichtbare Dokumente zu erlauben.
- Die Methode `nsIMemory.isLowMemory()` in `nsIMemory` wurde als veraltet markiert. Sie sollten ["memory-pressure" Notifikationen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um Situationen mit wenig Speicher zu beobachten.
- Die API zur Behandlung von Umleitungen auf HTTP-Kanälen hat sich geändert, um diese asynchron zu verarbeiten. Jeder Code, der Umleitungshand 

ling unter Verwendung von `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Rückrufhandler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen wurde.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, um eine Möglichkeit zur Gruppierung von Places-Operationen in Chargen bereitzustellen, wodurch die Anzahl der gelieferten Aktualisierungsbenachrichtigungen reduziert wird, was die Leistung verbessern kann, wenn Beobachter relativ aufwändige Aufgaben ausführen (wie z.B. das Aktualisieren von Ansichten).
- Die seit langem veraltete `nsIPref` Schnittstelle wurde schließlich entfernt. Wenn Sie noch nicht zu `nsIPrefService` gewechselt sind, ist jetzt der richtige Zeitpunkt.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` erhielten Änderungen, um die Sitzungswiederherstellung auf Abruf zu unterstützen. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` sowie die Attribute `origin`, `csp` und `URI` des `nsIPrincipal` sind jetzt aus Skripten verfügbar; zuvor waren sie nur aus nativen Code verfügbar.
- Die `nsIPrompt` Schnittstelle unterstützt jetzt tab-modale Alarme; siehe [Verwendung von tab-modalen Prompts](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt Hostnamen, die mit einem Punkt (".") beginnen, korrekt ab.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, den Zeichensatz des Skripts anzugeben; wenn keiner bereitgestellt wird, wird ASCII angenommen (wie immer zuvor angenommen).
- Die `nsIAccessProxy` Schnittstelle wurde entfernt. Es war ein Implementierungsdetail, das seinen Nutzen überlebt hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Es stellt eine scrollbare Inhaltsansicht dar, deren Inhalte von einem separaten Prozess gezeichnet werden.
- Das `nsIDiskCacheStreamInternal` Interface wurde hinzugefügt.
- Das `nsIExternalURLHandlerService` Interface wurde hinzugefügt.
- Das `nsISyncJPAKE` Interface wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Das Interface `nsIINIParserWriter`, wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Infallible Memory Allocation](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt infallible Memory Allocators, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie arbeiten und wie man explizit fallible versus infallible Memory Allocation anfordert.

### Andere Änderungen

- Die meisten Ressourcen innerhalb von Firefox wurden zu einem einzigen JAR-Archiv zusammengefasst, `omni.jar`, was die Startleistung durch reduzierte E/A verbessert. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die `accessibility.disablecache`-Einstellung wird nicht mehr unterstützt; sie war nur für Debug-Zwecke verfügbar und wird nicht mehr verwendet.
- Addons, deren GUID von einer Version zur anderen wechselt, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebenwirkung der Entfernung von plattformspezifischen Verzeichnissen in Add-on-Bundles können Sie keine unterschiedlichen Standardeinstellungen für jede Plattform mehr bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack) Eigenschaft im [install manifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die 

binäre Komponenten, mit [js-ctypes](/de/docs/js-ctypes) geladene DLLs, [Suchplugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenstersymbole verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite), oder Dinge relativ zum Verzeichnis der Erweiterung vom Dateisystem kopieren, müssen möglicherweise ebenfalls ihren Code ändern.
- Sie können jetzt Erweiterungen einschließen, die [beim Starten der Anwendung automatisch installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines benutzerdefinierten Firefox.

## Weitere Änderungen

- Nur die Root `chrome.manifest` Datei wird geladen
  - : Nur die Root `chrome.manifest` Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien geladen haben müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest) Befehl in Ihrer Root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) Erweiterung verfügbar.
- [Content Process Event Handling](/de/docs/The_message_manager)
  - : Um die Unterstützung von Out-of-Process-Plugins und anderen Features mit mehreren Prozessen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapped Extensions](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder zurückgestuft) werden können, ohne dass ein Browser-Neustart erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde ebenfalls standardmäßig entfernt, jedoch existiert weiterhin Unterstützung für die Installation von Plugins über diesen Ordner. Siehe [Firefox Bug 533891](https://bugzil.la/533891).
- Erweiterungs-Manager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Child HWNDs mehr für die interne Nutzung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung nicht unter Firefox 4 funktionieren. Sie müssen entweder auf die Verwendung von HWNDs verzichten oder Ihren Code, der von HWNDs abhängt, in ein [NPAPI](/de/docs/NPAPI) Plugin 

einhüllen. Das ist viel Arbeit, deshalb sollten Sie, wenn möglich, die direkte Verwendung von HWNDs vermeiden.
- Gestenänderungen
  - : Die Drei-Finger-hoch und -runter Wischgesten auf Trackpads wurden geändert, um standardmäßig die Firefox Panorama Ansicht (früher TabCandy genannt) zu öffnen und zu schließen. Um diese wieder auf die vorherigen scroll-to-top und scroll-to-bottom Befehle zu ändern, öffnen Sie `about:config` und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
