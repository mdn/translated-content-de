---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet nun den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht es auch, dass Inhalte [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in das HTML-Markup eingebettet werden.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf die Verbesserungen der Webformulare. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}} Element, Datenvalidierung und mehr.
- [HTML5 Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt nun die neuen HTML5 Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verstecken, die für den Nutzer momentan nicht relevant sind.
- Andere HTML5 Elemente
  - : Gecko unterstützt nun auch die folgenden neuen HTML5 Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeit-Kommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel sind und allgemein nicht verwendet werden sollten.

#### Verbesserungen der Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}} Implementierung näher an die Spezifikation heranzuführen:

- Eine negative Radienangabe beim Aufrufen von `arc()` löst nun korrekt eine `INDEX_SIZE_ERR` Ausnahme aus.
- Die Angabe von nicht-finiten Werten beim Aufrufen von `createLinearGradient()` und `createRadialGradient()` löst nun `NOT_SUPPORTED_ERR` statt `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Die `putImageData()` Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}} Elemente sind nun standardmäßig skalierbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}} Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()` Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild des Canvas-Inhalts enthält. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt den nicht standardisierten `darker` Wert nicht mehr.
- Die Unterstützung für das veraltete `<spacer>` Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>` Element, wenn es durch Aufrufen von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird nun als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt nun das Aufrufen von `click()` auf {{HTMLElement("input")}} Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}} Element unterstützt ein neues `mozactionhint` Attribut, mit dem Sie das Label für die Enter-Taste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}} Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}}, und {{HTMLElement("noframes")}} Elementen werden nun ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies steht im Einklang mit der Spezifikation und entspricht dem Verhalten anderer Browser.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es Ihnen, {{cssxref("length")}} Werte als mathematische Ausdrücke anzugeben.
- Selektorgruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorieren.
- Unterstützung von Hintergrundbild-Ausschnitten
  - : Die {{cssxref("-moz-image-rect")}} Funktion ermöglicht es, Unterrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS Berührungseigenschaften
  - : Unterstützung für Berührungseigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Es wurden Änderungen vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren erhalten werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht Ihnen die Anpassung erweiterter Funktionen von OpenType-Schriften.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichen eines Tabulators (U+0009) beim
        Rendern von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht Ihnen die Kontrolle über die Dimensionen, in denen ein Element
        skaliert werden kann.
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
        Wird auf die Sendetaste angewendet, wenn eines oder mehrere Felder
        des Formulars nicht validieren.
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
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die
        das <code>required</code> Attribut nicht angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die
        das <code>required</code> Attribut angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, wenn
        deren Inhalte erfolgreich validieren.
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
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements anzugeben, wenn Gecko der Meinung ist,
        dass ein Fokusanzeiger gerendert werden sollte.
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
      <td>Ermöglicht es Ihnen, Selektoren zu gruppieren und Kombinatoren zu faktorieren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht es Ihnen, {{cssxref("length")}} Werte
        als mathematische Ausdrücke anzugeben.
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
        Ermöglicht es Ihnen, ein Unterrechteck eines Bildes als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                               |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                              |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Es wurden auch Rendering-Änderungen vorgenommen, um die neueste Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                           |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}} Eigenschaft begrenzt den Unschärferadius nun auf 300px aus Gründen der Vernunft und Leistung.
- Die {{cssxref("overflow")}} Eigenschaft gilt nicht mehr für Tabelle-Gruppen Elemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance` Eigenschaft unterstützt nun den `-moz-win-borderless-glass` Wert, der einem Element ein rahmenloses Aero-Glass-Aussehen verleiht.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) Media-Feature wurde hinzugefügt, wodurch das Verhältnis der Geräte-Pixel pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Handhabung von CSS {{cssxref("length")}} Einheiten wurde überarbeitet, um anderen Browsern besser zu entsprechen und absolute Längen basierend auf der DPI des Geräts genauer in Bildschirm-Pixelzahlen umzuwandeln.

### Grafiken und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird nun von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM Video](/de/docs/Web/Media/Guides/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist nun verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können SVG jetzt mit dem {{htmlelement("img")}} Element verwenden, sowie als CSS {{cssxref("background-image")}}.
- Unterstützung des Media `buffered` Attributs
  - : Das `buffered` Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen wird nun unterstützt, wodurch Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Media `preload` Attribut
  - : Das `preload` Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer` Attribut. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elemente sowie die `nsIDOMHTMLMediaElement` Schnittstelle.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx`, und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen angeben. Dies ermöglicht es Ihnen, die Positionierung jedes Zeichens in einer Zeichenfolge individuell zu steuern.

### DOM

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript typisierte Arrays wurde hinzugefügt; dies ermöglicht es Ihnen, Puffer mit Rohdaten unter Verwendung nativer Datentypen zu manipulieren. Mehrere APIs verwenden dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API), und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Ermitteln von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range) Objekt hat nun die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlaufsobjekt, das über das [`window.history`](/de/docs/Web/API/Window/history) Objekt verfügbar ist, unterstützt nun die neuen HTML5 `pushState()` und `replaceState()` Methoden.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der `window.mozRequestAnimationFrame()` Methode und der `window.mozAnimationStartTime` Eigenschaft eine Möglichkeit bietet, um Animationen zu erstellen, die synchronisiert sind.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die durch die HTML5-Spezifikation erforderlichen geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umschließen eines {{HTMLElement("textarea")}} Elements kann nun über das DOM über das `wrap` DOM-Attribut gesteuert werden. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}} Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich nun gemäß der HTML5-Spezifikation standardmäßig. Skripte mit dem `src` Attribut führen aus, sobald sie verfügbar sind (ohne Reihenfolge beizubehalten), und Skripte ohne das `src` Attribut synchron. Um sicherzustellen, dass eingefügte Skripte mit dem `src` Attribut in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` auf sie.
- Die DOM [`File`](/de/docs/Web/API/File) Objekte bieten nun eine `url` Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects) Unterstützung für XMLHttpRequest.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft ermöglicht es Ihnen festzustellen, welches Skript des {{HTMLElement("script")}} Elements gerade ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute) Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode` Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify) Methode wurde dem [`Selection`](/de/docs/Web/API/Selection) Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition in einem Browserfenster einfach zu ändern.
- Die Unterstützung für das `window.directories` Objekt und das `directories` Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) Eigenschaft wurde zu DOM-Benutzeroberflächen-Ereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es Ihnen, den Typ des Geräts zu bestimmen, das ein Ereignis erzeugt hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement) Methode akzeptiert in den Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) Methoden wurden hinzugefügt, die es ermöglichen, dass Elemente weiterhin Mausereignisse verfolgen, selbst wenn sich die Maus nach einem `mousedown` Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die Eigenschaft `window.mozPaintCount` wurde hinzugefügt; damit können Sie feststellen, wie oft ein Dokument gerendert wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprachprüfungstoken wurde von [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie statt dessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation) Header. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt gibt jetzt die Antwort als JavaScript typisiertes Array sowie als Zeichenkette über die Gecko-spezifische `mozResponseArrayBuffer` Eigenschaft aus.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten nun eine `mozPressure` Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) Methoden ermöglichen es Ihnen, objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) Methode ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` löst jetzt eine `SYNTAX_ERR` Ausnahme aus, wenn der angegebene Selektorstring ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die SVG-Eigenschaftenwerte eines Elements mit derselben Kurzzeichensyntax wie bei CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Das Dokumentroot hat jetzt [ein `privatebrowsingmode` Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Modus beschreibt, einschließlich eines Hinweises darauf, ob der private Modus für die Sitzung temporär oder permanent ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode ist jetzt optional, wie es in jedem anderen großen Browser der Fall ist.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimale erlaubte Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) Methode ist jetzt eine Voreinstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch eine Voreinstellung wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla vorgeschlagenes Verfahren, das Webdesignern und Serveradministratoren hilft, festzulegen, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browsern mitzuteilen, dass sie nur über HTTPS und nicht über HTTP kommunizieren sollten.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der von Internet Explorer 8 eingeführte X-FRAME-OPTIONS HTTP Antwort-Header wird nun von Firefox unterstützt. Dies ermöglicht es Seiten anzugeben, ob ihre Seiten in Frames verwendet werden können und, falls ja, ob dies auf denselben Ursprung beschränkt werden soll.
- [User Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox) Änderungen
  - : Um die Menge der in HTTP-Anfragen gesendeten Daten und Entropie zu reduzieren (siehe [Firefox Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke und Sprachprüfungstoken aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzlich mehr mit dem ECMAScript 5 Standard konform sein.

### Entwickler-Tools

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Tool ist eine nützliche Debugginghilfe für Web- und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Die Fehlerkonsole ist in Gecko 2.0 standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die `devtools.errorconsole.enabled` Voreinstellung auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung bestehender Erweiterungen für Firefox 4, siehe [Aktualisierung von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons brechen, also lesen Sie unbedingt diesen Artikel.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Änderungen der Themes in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, auf die Sie achten müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Code-Modul bietet Getter, die es einfach machen, Referenzen auf häufig verwendete Dienste, wie den Präferenzdienst oder den Fenstervermittler, unter anderen zu erhalten.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible fremde Bibliotheksfunktionen ohne den Gebrauch von XPCOM aufzurufen.
- [Add-ons-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und bietet Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, dem Benutzer ansprechende, nicht modale Benachrichtigungen zu präsentieren. Sie können sehen, wie Sie diese API verwenden, in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications).
- [Laden von Code-Modulen von chrome:-URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können nun JavaScript-Code-Module mit **chrome:** URLs laden, selbst innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm) Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen Zeichenfolgenpfad enthält, den Sie verwenden können, um den Pfad des Verzeichnisses, in das der letzte Download erfolgte, zu erfahren. Dieses Modul behandelt alle mit dem privaten Modus verbundenen Probleme für Sie.
- [Leistungsanalyse mit dem PerfMeasurement.jsm Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm) Code-Modul bietet eine API zur Messung von CPU-bezogenen Leistungsdaten im JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm` Code-Modul bietet nun die Methode `readInputStreamToString()`, welche es Ihnen ermöglicht, beliebige Bytes aus einem Stream in eine Zeichenfolge zu lesen, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm Code-Modul bietet nun IterSimpleEnumerator() und IterStringEnumerator() Hilfsmittel zur Iteration über XPCOM-Enumeratoren.
- Sie können [jetzt Arbeiter in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Arbeiter für privilegierten Code; dies ermöglicht es Ihnen Dinge wie [js-ctypes](/de/docs/js-ctypes) aus Arbeitern in Erweiterungen und Anwendungscode zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger, die sich gleichzeitig auf einem Touchscreen bewegen, zu verfolgen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Root-Element eines Dokuments erstellt wird, aber bevor irgendwelche Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>` Element vorgenommen, die Auswirkungen auf Erweiterungen haben, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Toolbar, die es dem Benutzer ermöglicht, Toolbar-Buttons hineinzuziehen.

- Die `TabClose`, `TabSelect`, und `TabOpen` Ereignisse ändern sich nicht mehr über das `<xul:tabbrowser>` Element (`gBrowser`). Ereignislistener für diese Ereignisse sollten dem `gBrowser.tabContainer` statt dem `gBrowser` direkt hinzugefügt werden.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` angesprochen werden. Sehen Sie [diesen Blogpost](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für mehr Details.
- Die neue `visibleTabs` Eigenschaft wurde hinzugefügt, um Ihnen eine Liste der derzeit sichtbaren Tabs zu geben; dies ermöglicht es Ihnen zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue `showOnlyTheseTabs` Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon` Methode wurde hinzugefügt, welche es Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>` Element aufrufen zu müssen.
- Die neue `tabbrowser.tabs` Eigenschaft wurde hinzugefügt, welche es Ihnen ermöglicht, einfach eine Liste der Tabs in einem `<xul:tabbrowser>` Element zu erhalten.
- Die neuen `pinTab` und `unpinTab` Methoden ermöglichen es Ihnen, Tabs zu heften und abzuheften (d.h. sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die `getTabModalPromptBox` Methode und das `tabModalPromptShowing` Attribut wurden dem `<xul:tabbrowser>` hinzugefügt, um tabmodale Alerts zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>` Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Probleme stoßen, da das Element keine spezielle Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>` XUL-Element hat nun eine `triggerNode` Eigenschaft, welche den Knoten anzeigt, auf dem das Ereignis auftrat, das das Popup öffnet. Dies erforderte auch die Hinzufügung eines Auslöseereignisparameters zur `openPopup` Methode. Außerdem wurde die `anchorNode` Eigenschaft hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>` Element bietet jetzt `fade` und `flip` Attribute, die verwendet werden, um das Verhalten der neuen "Pfeil"-artigen Benachrichtigungspanels zu konfigurieren.

#### Entfernte Remote-XUL-Unterstützung

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; Sie können auch keine XUL-Dokumente mehr mit `file://` URLs laden, es sei denn, Sie erstellen die Voreinstellung `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmte Domains zu erlauben, Remote XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly` Attribut funktioniert nun korrekt für XBL-Felder.
- Das `<xul:resizer>` Element erlaubt Ihnen nun, das `element` Attribut zu verwenden, um ein Element zum Skalieren anzugeben, anstatt das Fenster zu skalieren.
- Das `<xul:resizer>` Element hat nun ein `type` Attribut, das es Ihnen erlaubt, anzugeben, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das "`active`" Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive` Pseudoklasse verwenden, um verschiedene Stile auf Hintergrundfenster anzuwenden.
- Das `emptytext` Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>` Element bietet nun ein `accelerated` Attribut; wenn wahr, ist der Hardware-Layer-Manager berechtigt, das Fenster zu beschleunigen.
- Das `<xul:stack>` Element unterstützt jetzt die `bottom` und `right` Attribute.
- Ereignisse werden nun während der `<xul:toolbox>` Anpassung ausgelöst, was es Ihnen ermöglicht, Änderungen an Toolbars zu erkennen.
- Das `alternatingbackground` Attribut für `<xul:tree>` Elemente wird nicht mehr unterstützt; Sie können stattdessen die `:-moz-tree-row` Pseudoklasse verwenden.
- Die Bookmarks-Toolbar-Überlauf-Schaltfläche mit dem Anonid chevronPopup ist nicht mehr anonym; sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>` Element hat nun eine `tabbox` Eigenschaft, die die alte `_tabbox` Eigenschaft ersetzt, welche veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>` Elemente haben nun das `drawintitlebar` Attribut; wenn dies `true` ist, enthält der Inhaltsbereich des Fensters die Titelleiste, was das Zeichnen in die Titelleiste ermöglicht.
- Neue `TabPinned` und `TabUnpinned` Ereignisse sind verfügbar, die es Ihnen ermöglichen, zu erkennen, wann Tabs geheftet und wieder gelöst werden.
- Das neue `TabAttrModified` Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image` oder `selected` Attribute eines Tabs ändern.
- `<xul:tab>` Elemente haben nun ein `pinned` Attribut, das es Ihnen ermöglicht, festzustellen, ob ein Tab derzeit geheftet ist.
- Die `setDirectionIndicator` Klasse auf `<xul:tree>` Elementen hat schon seit einiger Zeit nichts mehr bewirkt; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>` Element hat nun ein `chromemargin` Attribut, mit dem Sie den Rand zwischen Chrome und Inhalt an jeder Seite eines Fensters setzen können; dies ermöglicht es Ihnen, in die Titelleiste zu zeichnen.
- Das `<xul:window>` Element hat nun ein `disablechrome` Attribut; dieses wird verwendet, um die meisten Chrome im Fenster zu verstecken, wenn es verwendet wird, um UI im Browser anzuzeigen, wie etwa `about:addons`.
- Das `<xul:window>` Element hat nun ein `disablefastfind` Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt dies nicht unterstützt. Dies wird beispielsweise von der Add-ons-Panel verwendet.
- Toolbars können jetzt extern zu Toolboxes sein und trotzdem als Mitglied des `<xul:toolbox>` betrachtet werden, indem Sie die `toolboxid` Eigenschaft der `<xul:toolbar>` festlegen. Außerdem hat das `<xul:toolbox>` Element nun eine `externalToolbars` Eigenschaft, die alle Toolbars auflistet, die als Mitglieder der Toolbox angesehen werden.
- Unterstützung wurde hinzugefügt, um XUL-Vorlagen zu protokollieren, um zu Debugging-Zwecken.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie bisher UI zur Statusleiste hinzugefügt haben.
- Browser-Chrome verbergen
  - : Sie können nun das Chrome des Browsers verbergen, wenn es wünschenswert ist, etwa bei `about:addons`.

### Speicher

#### Verschiedene Änderungen der Speicher-API

- Das `mozIStorageBindingParamsArray` Interface hat nun ein `length` Attribut, das die Anzahl der `mozIStorageBindingParams` Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt nun einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Callback an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es Ihnen ermöglicht, die Menge anzugeben, um die eine Datenbankdatei jeweils vergrößert wird, um SQLite bei der Reduzierung der Fragmentierung zu helfen.
- Der `SQLITE_CONSTRAINT` Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstelle von `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Neben den spezifischen Änderungen, die unten referenziert werden, ist es wichtig zu beachten, dass keine Schnittstellen mehr eingefroren sind. Alle Schnittstellen sind jetzt nicht eingefroren, unabhängig davon, was die Dokumentation angibt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu den Änderungen in XPCOM, die die Kompatibilität in Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, das mit einem Objekt assoziiert ist; dies ersetzt einen häufigen Anwendungsfall des nun entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können nun von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` Schnittstellen gegeben hat. Bedeutender ist, dass die `nsINavHistoryResultViewer` Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch, aber die `places-connection-closed` Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Array-Größen-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü manuell mit Places-Informationen erstellen und füllen, anstatt es automatisch für Sie erledigen zu lassen. Siehe [Anzeigen von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell` und `nsIWebBrowser` Schnittstellen haben jetzt ein neues `isActive` Attribut, das verwendet wird, um den Codepfad für Dokumente zu optimieren, die derzeit nicht sichtbar sind.
- Die `nsIMemory` Methode `nsIMemory.isLowMemory()` wurde als veraltet markiert. Stattdessen sollten Sie ["memory-pressure" Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf geringe Speicherbedingungen zu achten.
- Die API für die Verarbeitung von Weiterleitungen auf HTTP-Kanälen wurde geändert, um sie asynchron zu verarbeiten. Jeder Code, der die Weiterleitungsverarbeitung unter Verwendung von `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` stattdessen zu verwenden. Dies akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Stapeln zu gruppieren, die Anzahl der gelieferten Update-Benachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben ausführen (z.B. das Auffrischen von Ansichten).
- Die längst veraltete `nsIPref` Schnittstelle wurde schließlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestellt haben, ist jetzt der Zeitpunkt dazu.
- Die `nsISessionStore` und `nsISessionStartup` Schnittstellen erhielten Änderungen zur Unterstützung der Anforderungsgesteuerten Sitzungswiederherstellung. Siehe die `nsISessionStore.restoreLastSession()` Methode.
- Die `nsIPrincipal` Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie ihre `origin`, `csp`, und `URI` Attribute, sind jetzt von Skripten zugänglich; zuvor waren sie nur aus nativem Code zugänglich.
- Die `nsIPrompt` Schnittstelle unterstützt jetzt tabmodale Alarme; siehe [Verwendung von tabmodalen Aufforderungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt nun korrekt Host-Namen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, den Zeichensatz des Skripts anzugeben; wird keiner angegeben, wird ASCII angenommen (so wurde schon immer angenommen).
- Die `nsIAccessProxy` Schnittstelle wurde entfernt. Sie war ein Implementierungsdetail, das nicht mehr nützlich war.
- Die `nsIContentView` und `nsIContentViewManager` Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie repräsentieren eine scrollbare Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal` Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService` Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE` Schnittstelle wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Die Schnittstelle `nsIINIParserWriter` wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherallokation](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherallocatorien an, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu lernen, wie sie funktionieren und wie Sie explizit fehlbare versus unfehlbare Speicherallokation anfordern können.

### Andere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einzelnes JAR-Archiv, `omni.jar`, kombiniert, was die Startleistung durch Reduzierung der I/O verbessert. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Voreinstellung `accessibility.disablecache` wird nicht mehr unterstützt; sie war nur zu Debuggingzwecken exponiert und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können nun korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung plattformspezifischer Verzeichnisse in Add-on-Bundles können Sie keine unterschiedlichen Standardvoreinstellungen mehr für jede Plattform bereitstellen.
- Standardmäßig [werden Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern laufen direkt aus der XPI-Datei. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack) Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Erweiterungen, die binäre Komponenten, mit [js-ctypes](/de/docs/js-ctypes) geladene DLLs, [Suchplugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbank erstellen](/de/docs/XUL_School/Local_Storage#sqlite), oder Dinge relativ zum Verzeichnis der Erweiterung vom Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einfügen, die [automatisch beim Start der Anwendung installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer angepassten Firefox-Distribution.

## Andere Änderungen

- Nur die root chrome.manifest Datei wird geladen
  - : Nur die root `chrome.manifest` Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest) Befehl in Ihrer root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Die weitere Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) Erweiterung verfügbar.
- [Behandlung von Inhaltsprozessor-Ereignissen](/de/docs/The_message_manager)
  - : Um die Unterstützung für out-of-process Plugins und andere Mehrprozess-Features zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapped Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder zurückgestuft) werden können, ohne dass ein Browserneustart erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungsplugin-Ordner wurde ebenfalls standardmäßig entfernt, jedoch bleibt die Unterstützung für die Installation von Plugins über diesen Ordner bestehen. Siehe [Firefox Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager ersetzt durch Addon-Manager
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Kinder-HWNDs nicht mehr genutzt
  - : Firefox erstellt keine Kinder-HWNDs mehr für seine interne Verwendung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung in Firefox 4 nicht funktionieren. Sie müssen entweder auf die Verwendung von HWNDs verzichten oder Ihren Code, der von HWNDs abhängt, in einem [NPAPI](/de/docs/NPAPI) Plugin umschließen. Das ist viel Arbeit, also wenn Sie die direkte Verwendung von HWNDs vermeiden können, sollten Sie dies tun.
- Gestenänderungen
  - : Die Gesten für drei Finger nach oben und unten auf Trackpads wurden geändert, um standardmäßig die Firefox Panorama Ansicht zu öffnen und zu schließen (ehemals TabCandy). Um diese auf die vorherigen scroll-to-top und scroll-to-bottom Befehle zurückzusetzen, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
