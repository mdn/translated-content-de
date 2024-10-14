---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{FirefoxSidebar}}

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, erhöht die Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Veröffentlichung und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht es auch, Inhalte mit [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einzubetten.

### HTML

- [Den HTML5-Parser kennenlernen](/de/docs/Learn/HTML)
  - : Ein Blick darauf, was der HTML5-Parser für Sie bedeutet und wie SVG und MathML in Ihre Inhalte eingebettet werden können.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Ein Überblick über Verbesserungen in Webformularen. Zu diesen Änderungen gehören hinzugefügte Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die mit Abschnitten in einem Dokument zusammenhängen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Benutzer derzeit nicht relevant sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass die in Firefox 4 implementierten WebSockets nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden an der Schnittstelle [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation heranzuführen:

- Das Angeben eines negativen Radius beim Aufruf von `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Das Angeben nicht-endlicher Werte beim Aufruf von `createLinearGradient()` und `createRadialGradient()` wirft jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus, sondern ignoriert die nicht-positiven Werte korrekt.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus, sondern ignoriert die nicht-positiven Werte korrekt.
- Die `putImageData()`-Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig größenveränderbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()`-Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild der Inhalte des Canvas enthält. Weitere Details siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `canvas2dcontext.lineCap` und `canvas2dcontext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `canvas2dcontext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt nicht mehr den nicht standardmäßigen `darker`-Wert.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlt, wurde entfernt.
- Das `<isindex>`-Element, das durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Datei-Auswahl-Dialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente in {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} werden nun ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und passt das Verhalten an andere Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Damit können Sie {{cssxref("length")}}-Werte als mathematische Ausdrücke angeben.
- Selektorgruppierung
  - : Unterstützung für `:-moz-any` zur Gruppierung von Selektoren und Faktorisierung von Kombinatoren.
- Unterstützung für Unterrechte von Hintergrundbildern
  - : Die {{cssxref("-moz-image-rect")}}-Funktion macht es möglich, Unterrechte von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und tatsächliche Artikelnamen werden später folgen.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Änderungen wurden vorgenommen, was für Informationen über den Stil von besuchten Links mit CSS-Selektoren ermittelt werden kann. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht es Ihnen, erweiterte Funktionen von OpenType-Schriften anzupassen.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerraumzeichen eines Tabulatorzeichens (U+0009) beim
        Rendern von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Erlaubt Ihnen zu steuern, in welchen Dimensionen ein Element vergrößert oder verkleinert werden darf.
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
      <td>Wird verwendet, um Elemente zu gestalten, deren Plugins abgestürzt sind.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formularfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf den Senden-Button von Formularen angewendet, wenn eines oder mehrere
        Formularfelder nicht validiert werden.
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
        deren Inhalt ungültig ist.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die
        das <code>required</code>-Attribut nicht angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die
        das <code>required</code>-Attribut angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, wenn
        deren Inhalt erfolgreich validiert wird.
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
        Erlaubt es Ihnen, das Erscheinungsbild eines Elements zu spezifizieren, wenn Gecko der Meinung ist, dass es einen Fokusindikator gerendert haben sollte.
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
        Ermöglicht es Ihnen, {{cssxref("length")}}-Werte als
        mathematische Ausdrücke anzugeben.
      </td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>
        Erlaubt es, ein beliebiges Element als Hintergrund für
        {{cssxref("background-image")}} und
        {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        Ermöglicht es, ein Unterrechteck eines Bildes als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Hinweise                                                                                                                                                                                                            |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                        |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, damit Sie Zeit haben, Ihre Sites zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um die neueste Version der Spezifikation zu erfüllen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                     |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Weichzeichnungsradius aus Gründen der Vernunft und Leistung auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellen-Gruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element einen rahmenlosen Aero-Glas-Look verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio)-Media-Feature wurde hinzugefügt, die es ermöglicht, das Verhältnis von Geräten-Pixeln pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu verwenden.
- Die Verarbeitung von CSS {{cssxref("length")}}-Einheiten durch Gecko wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirm-Pixelzahlen basierend auf der DPI des Devices zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element verwenden, ebenso wie als CSS {{cssxref("background-image")}}.
- Medien `buffered`-Attribut-Unterstützung
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das vorher implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der Eigenschaften `x`, `y`, `dx` und `dy` auf SVG {{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen angeben. Damit können Sie die Positionierung jedes Zeichens in einer Zeichenfolge individuell steuern.

### DOM

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Die Unterstützung für JavaScript-typisierte Arrays wurde hinzugefügt; dies ermöglicht es Ihnen, Puffer mit Rohdaten unter Verwendung nativer Datentypen zu manipulieren. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalten von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Fehler 503943](https://bugzil.la/503943).
- [Manipulation der Browserhistorie](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumenthistorik-Objekt, verfügbar über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Kombination mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Ereignisse bei Berührung und Multi-Touch
  - : Die Unterstützung für Ereignisse bei Berührung und Multi-Touch wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen geändert, um denen zu entsprechen, die von der HTML5-Spezifikation gefordert werden, wie in der folgenden Tabelle gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann jetzt per DOM über das `wrap`-DOM-Attribut gesteuert werden. [Firefox-Fehler 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mithilfe von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden sofort ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten), und Skripte ohne `src`-Attribut werden synchron ausgeführt. Um eingefügte Skripte, die das `src`-Attribut haben, in der Einfügereihenfolge ausführen zu lassen, setzen Sie `.async=false` darauf.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die [`Element.isContentEditable`](/de/docs/Web/API/Element/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es Ihnen, zu bestimmen, welches {{HTMLElement("script")}}-Element momentan ausgeführt wird. Die neuen [`element.onbeforescriptexecute`](/de/docs/Web/API/Element/onbeforescriptexecute)- und [`element.onafterscriptexecute`](/de/docs/Web/API/Element/onafterscriptexecute)-Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Das `mozSourceNode`-Attribut wurde dem [`DragTransfer`](/de/docs/Web/API/DragTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; damit können Sie die aktuelle Textauswahl oder den Cursorposition in einem Browserfenster einfach ändern.
- Die Unterstützung für das `window.directories`-Objekt und die `directories`-Eigenschaft für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Fehler 474058](https://bugzil.la/474058)
- Die [`Event.mozInputSource`](/de/docs/Web/API/Event/mozInputSource)-Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht-standardisierte Eigenschaft ermöglicht es Ihnen, den Gerätetyp zu bestimmen, der ein Ereignis generiert hat.
- Das [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde im [`Document`](/de/docs/Web/API/Document) implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert in Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture)- und die [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)-Methoden wurden hinzugefügt. Diese ermöglichen es Elementen, Mausereignisse auch außerhalb ihres normalen Verfolgungsbereichs weiterhin zu verfolgen, nachdem ein `mousedown`-Ereignis aufgetreten ist.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie lässt Sie bestimmen, wie oft ein Dokument gezeichnet wurde. Das kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Der Sprach-Token wurde von [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Content_negotiation)-Header. [Firefox-Fehler 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt stellt jetzt die Antwort sowohl als JavaScript-typisiertes Array als auch als Zeichenfolge über die Gecko-spezifische `mozResponseArrayBuffer`-Eigenschaft bereit.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten anzeigt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen das Erstellen von Objekt-URLs, die lokale Dateien referenzieren.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht das Erstellen eines neuen HTML-Dokuments.
- [`Node.mozMatchesSelector()`](/de/docs/Web/API/Node/mozMatchesSelector) wird jetzt eine `SYNTAX_ERR`-Ausnahme auslösen, wenn der angegebene Selektorstring ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mithilfe der gleichen Kurznotierung wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Details siehe [`element.style`](/de/docs/Web/API/Element/style).
- Das Dokumentenroot hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Browsing-Modus beschreibt. Das schließt ein, ob das private Surfen temporär oder dauerhaft für die Sitzung ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie es in jedem anderen großen Browser der Fall ist.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimale erlaubte Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)- und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)-Methode ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch eine Präferenz wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Die Content Security Policy (CSP) ist ein Vorschlag von Mozilla, der darauf abzielt, Webdesignern und Serveradministratoren dabei zu helfen, festzulegen, wie Inhalte auf ihren Websites interagieren. Das Ziel ist, Angriffe wie Cross-Site-Scripting und Dateninjektionen zu erkennen und abzuschwächen.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser anzuweisen, nur über HTTPS und nicht über HTTP zu kommunizieren.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte X-FRAME-OPTIONS HTTP-Antwort-Header wird jetzt von Firefox unterstützt. Dadurch können Websites angeben, ob ihre Seiten in Frames verwendet werden dürfen und falls ja, ob diese Einschränkung auf den gleichen Ursprung beschränkt werden soll.
- [Änderungen am User-Agent-String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
  - : Um die Menge an Daten und Entropie zu reduzieren, die in HTTP-Anforderungen gesendet wird (siehe [Firefox-Fehler 572650](https://bugzil.la/572650)), wurden das Krypto- und Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 erfüllt zusätzliche Anforderungen des ECMAScript 5-Standards.

### Entwicklerwerkzeuge

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Werkzeug ist ein nützliches Debugging-Hilfsmittel sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die Präferenz `devtools.errorconsole.enabled` auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 siehe [Erweiterungen für Firefox 4 aktualisieren](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons beeinträchtigen, daher sollten Sie diesen Artikel lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Änderungen des Themes in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige wesentliche Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es leicht machen, Referenzen auf häufig verwendete Dienste zu erhalten, wie den Präferenzen-Dienst oder den Fenster-Mediator, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible Funktionen aus fremden Bibliotheken aufzurufen, ohne XPCOM zu verwenden.
- [Add-ons-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und bietet Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, dem Benutzer attraktive, nicht modale Benachrichtigungen zu präsentieren. Sie können sehen, wie man diese API verwendet in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications).
- [Laden von Code-Modulen von chrome:-URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:** URLs laden, sogar in JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul stellt die globale Variable `gDownloadLastDir` bereit, die einen String enthält, unter dem der Pfad des Verzeichnisses, in das der letzte Download erfolgt ist, zu finden ist. Dieses Modul kümmert sich um Probleme im Zusammenhang mit dem privaten Surfen.
- [Leistungsmessung mit dem PerfMeasurement.jsm-Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API zur Messung von CPU-Leistungsdaten in JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die `readInputStreamToString()`-Methode, die es Ihnen ermöglicht, beliebige Bytes von einem Stream in einen String zu lesen, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt die IterSimpleEnumerator() und IterStringEnumerator()-Hilfsmethoden, um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- [`ChromeWorker`](/de/docs/Web/API/ChromeWorker)
  - : Ein neuer Typ von Worker für privilegierten Code; dies ermöglicht es, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Workern in Erweiterungen und Anwendungs-Code zu verwenden.
- [Berührungsevents](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht-standardisierte) Berührungsevents wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger gleichzeitig auf einem Touchscreen zu verfolgen.

#### Weitere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wurde, aber bevor darauf irgendwelche Skripte ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Erweiterungen betreffen, die mit Tabs interagieren. Neben der Unterstützung von App-Tabs ändern diese Änderungen auch die Tableiste zu einer Standard-Werkzeugleiste, bei der der Benutzer Werkzeugleistenschaltflächen hineinziehen kann.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` werden nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`) hochgebubbelt. Ereignis-Listener für diese Ereignisse sollten zu `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann deshalb direkter mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um ein Array der aktuell sichtbaren Tabs zu erhalten; dies ermöglicht es Ihnen herauszufinden, welche Tabs im aktuellen Tab-Satz sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` ermöglicht es, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element abrufen zu müssen.
- Die neue `tabbrowser.tabs`-Eigenschaft ermöglicht es Ihnen, einfach eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs anzuheften und zu lösen (das heißt, zwischen App-Tabs und regulären Tabs zu wechseln).
- Die Methoden `getTabModalPromptBox` und der Attribut `tabmodalPromptShowing` wurden zum `<xul:tabbrowser>`-Element hinzugefügt, um tab-modale Benachrichtigungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; stattdessen sollten Sie `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie Probleme erleben, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die den Knoten angibt, auf dem das Ereignis aufgetreten ist, das das Öffnen des Popups verursacht hat. Dazu ist auch ein Trigger-Event-Parameter zur `openPopup`-Methode erforderlich. Auch die Eigenschaft `anchorNode` wurde hinzugefügt; diese gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade`- und `flip`-Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil-Hinweistafeln zu konfigurieren.

#### Entfernen der Remote-XUL-Unterstützung

Die Unterstützung für Remote-XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können Sie keine XUL-Dokumente mehr mit `file://`-URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domänen zu erlauben, Remote-XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es jetzt, das `element`-Attribut anzugeben, um ein bestimmtes Element zu ändern, anstatt das Fenster zu ändern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, mit dem Sie angeben können, dass der Resizer für ein Fenster oder ein Element bestimmt ist, um zu verhindern, dass der Fenster-Resizer doppelt gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktiven XUL-Fenstern gesetzt. Stattdessen können Sie den neuen `:-moz-window-inactive`-Pseudoklasse verwenden, um verschiedene Stile für Hintergrundfenster zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn dieses `true` ist, ist der Hardware-Ebenenmanager befugt, das Fenster zu beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der Anpassung von `<xul:toolbox>`-Elementen ausgelöst, sodass Sie Änderungen an Werkzeugleisten erkennen können.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die `:-moz-tree-row`-Pseudoklasse stattdessen verwenden.
- Die Überlauf-Schaltfläche der Lesezeichen-Symbolleiste mit anonid chevronPopup ist nicht mehr anonym; sie hat eine ID von „PlacesChevron“.
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt hat, die veraltet ist (und nie dokumentiert wurde).
- Die XUL-Elemente `<xul:window>` haben jetzt das Attribut `drawintitlebar`; wenn dieses `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass dort gezeichnet werden kann.
- Neue Ereignisse `TabPinned` und `TabUnpinned` sind verfügbar, mit denen Sie erkennen können, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image` oder `selected`-Attribute eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, mit dem Sie bestimmen können, ob ein Tab derzeit angeheftet ist oder nicht.
- Die Klasse `setDirectionIndicator` auf `<xul:tree>`-Elementen hatte schon seit einiger Zeit keine Funktion mehr; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das es Ihnen erlaubt, die Grenze zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dieses verwenden, um in die Titelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um den größten Teil des Chrome in einem Fenster zu verbergen, wenn es zur Anzeige von in-browser Benutzeroberfläche verwendet wird, wie `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt dies nicht unterstützt. Dies wird beispielsweise von der Add-ons-Panel verwendet.
- Werkzeugleisten können jetzt außerhalb von Werkzeugkästen sein, während sie immer noch als Mitglied des `<xul:toolbox>` betrachtet werden, indem die `toolboxid`-Eigenschaft der `<xul:toolbar>` gesetzt wird. Auch das `<xul:toolbox>`-Element hat jetzt eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens betrachtet werden.
- Die Unterstützung für das Protokollieren von XUL-Vorlagen zu Debugging-Zwecken wurde hinzugefügt.

### UI-Änderungen für Entwickler

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, wenn Sie in der Vergangenheit eine Benutzeroberfläche zur Statusleiste hinzugefügt haben.
- Verbergen der Browser-Chrome
  - : Sie können jetzt das Browser-Chrome verbergen, wenn es wünschenswert ist, dies zu tun; zum Beispiel macht `about:addons` dies.

### Speicher

#### Verschiedene Speicher-API-Änderungen

- Die Schnittstelle `mozIStorageBindingParamsArray` hat jetzt ein length-Attribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn der angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Callback an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es Ihnen ermöglicht, die Menge festzulegen, um die eine Datenbankdatei bei jedem Mal vergrößert wird, um SQLite bei der Reduzierung der Fragmentierung zu unterstützen.
- Der Fehler `SQLITE_CONSTRAINT` wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` statt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten aufgeführten spezifischen Änderungen ist es wichtig zu beachten, dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht mehr eingefroren, unabhängig davon, was die Dokumentation sagen mag. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details über Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Das bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode`-Schnittstellen gegeben hat. Bedeutender ist, dass die `nsINavHistoryResultViewer`-Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Shutdown-Prozess des Places-Dienstes zuverlässiger zu verfolgen. Die meisten davon sind nur für den internen Gebrauch bestimmt, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu wissen, wann der Shutdown-Prozess des Places-Dienstes abgeschlossen ist.
- Der Array-Größe-Ausgabeparameter in mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü manuell mit Places-Informationen erstellen und füllen, anstatt es automatisch für Sie erstellen zu lassen. Siehe [Anzeige von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell` und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das zur Optimierung von Codepfaden für Dokumente verwendet wird, die derzeit nicht sichtbar sind.
- Die Methode `nsIMemory.isLowMemory()` von `nsIMemory` wurde veraltet. Sie sollten ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Speichermangel-Situationen zu achten.
- Das API für die Behandlung von Umleitungen auf HTTP-Kanälen wurde geändert, um deren Verarbeitung asynchron zu ermöglichen. Jeder Code, der die Umleitungsbehandlung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss auf `nsIChannelEventSink.asyncOnChannelRedirect()` aktualisiert werden. Dieses akzeptiert einen Callback-Handler, der nach einem erfolgreichen Abschluss der Umleitung aufgerufen werden muss.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, um eine Möglichkeit bereitzustellen, Places-Operationen in Chargen zu gruppieren und die Anzahl der Update-Benachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben (wie das Aktualisieren von Ansichten) ausführen.
- Die längst veraltete `nsIPref`-Schnittstelle wurde endlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestiegen sind, ist jetzt die Zeit dazu.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` haben Änderungen erfahren, um die Sitzungswiederherstellung bei Bedarf zu unterstützen. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` sowie die Attribute `origin`, `csp` und `URI` von `nsIPrincipal` sind jetzt von Skripten aus verfügbar; zuvor waren sie nur aus nativem Code verfügbar.
- Die Schnittstelle `nsIPrompt` unterstützt jetzt tab-modale Benachrichtigungen; siehe [Verwendung von tab-modalen Benachrichtigungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt Domainnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, die Zeichencodierung des Skripts anzugeben; wenn keine bereitgestellt wird, wird ASCII angenommen (wie es immer schon ausgegangen wurde).
- Die Schnittstelle `nsIAccessProxy` wurde entfernt. Sie war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die `nsIContentView`- und `nsIContentViewManager`-Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie stellt eine scrollbare Inhaltsansicht dar, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die Schnittstelle `nsIDiskCacheStreamInternal` wurde hinzugefügt.
- Die Schnittstelle `nsIExternalURLHandlerService` wurde hinzugefügt.
- Die Schnittstelle `nsISyncJPAKE` wurde hinzugefügt. Siehe [Firefox-Fehler 601645](https://bugzil.la/601645).
- Die Schnittstelle `nsIINIParserWriter` wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuteilung, die garantiert nie null zurückgibt. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie man explizit fallible versus unfehlbare Speicherzuteilungen anfordert.

### Sonstige Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einzelnes JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung verbessert, indem die Eing-/Ausgabe reduziert wird. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Präferenz `accessibility.disablecache` wird nicht mehr unterstützt; sie war nur für Debugging-Zwecke ausgesetzt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung von plattformspezifischen Verzeichnissen in Add-on-Bundles können Sie nicht mehr verschiedene Standardpräferenzen für jede Plattform anbieten.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen werden, [Such-Plugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge vom Dateisystem relativ zum Verzeichnis der Erweiterung kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen inkludieren, die [automatisch beim Anwendungsstart installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer angepassten Firefox-Distribution.

## Weitere Änderungen

- Nur die root chrome.manifest-Datei wird geladen
  - : Nur die root `chrome.manifest`-Datei wird jetzt geladen; wenn Sie zusätzliche Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrer root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortlaufende Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Ereignishandhabung im Inhaltsprozess](/de/docs/The_message_manager)
  - : Um Plugins außerhalb des Prozesses und andere Mehrprozess-Funktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrap-Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die ohne Neustart des Browsers installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde ebenfalls standardmäßig entfernt, aber die Unterstützung für die Installation von Plugins über diesen Ordner existiert weiterhin. Siehe [Firefox-Fehler 533891](https://bugzil.la/533891).
- Erweiterungs-Manager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch den [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Keine Child-HWNDs mehr verwendet
  - : Firefox erstellt keine Child-HWNDs mehr für seine interne Verwendung in Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung in Firefox 4 nicht mehr funktionieren. Sie müssen entweder aufhören, HWNDs zu verwenden, oder Ihren Code, der von HWNDs abhängt, in ein [NPAPI](/de/docs/NPAPI)-Plugin einwickeln. Das ist viel Arbeit, daher sollten Sie, wenn möglich, vermeiden, HWNDs direkt zu verwenden.
- Gestenänderungen
  - : Die Drei-Finger-nach-oben und -nach-unten-Wischgesten auf Trackpads wurden so geändert, dass standardmäßig die Firefox-Panorama-Ansicht (früher TabCandy) geöffnet und geschlossen wird. Um diese auf die vorherigen Scroll-to-Top und Scroll-to-Bottom-Befehle zurückzusetzen, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
