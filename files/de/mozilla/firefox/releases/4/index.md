---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, fügt mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien hinzu und erhöht die Sicherheit. Dieser Artikel bietet Informationen zu dieser Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattformentwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung erhöht. Er ermöglicht es auch, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in HTML-Markup einzubetten.

### HTML

- [Meet the HTML5 parser](/de/docs/Learn/HTML)
  - : Ein Überblick darüber, was der HTML5-Parser für Sie bedeutet und wie Sie SVG und MathML inline in Ihre Inhalte einbetten können.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Ein Überblick über Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente im Zusammenhang mit Abschnitten in einem Dokument: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Global_attributes#hidden)
  - : Dieses Attribut, das allen Elementen gemein ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Benutzer derzeit nicht relevant sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Verbesserungen an Canvas

Die folgenden Änderungen wurden an der Schnittstelle [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung stärker an die Spezifikation anzupassen:

- Das Angeben eines negativen Radius beim Aufrufen von `arc()` wirft jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme.
- Das Angeben nicht-finitiver Werte beim Aufrufen von `createLinearGradient()` und `createRadialGradient()` wirft jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert wirft keine Ausnahme mehr, sondern ignoriert korrekt nicht-positive Werte.
- Das Setzen von `lineWidth` auf einen negativen Wert wirft keine Ausnahme mehr, sondern ignoriert korrekt nicht-positive Werte.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Sonstige HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig resizable; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische Methode `mozGetAsFile()`, die es ermöglicht, eine speicherbasierte Datei mit einem Bild des Canvas-Inhalts zu erhalten. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `canvas2dcontext.lineCap` und `canvas2dcontext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `canvas2dcontext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn auf einen nicht erkannten Wert gesetzt, und unterstützt nicht mehr den nicht standardmäßigen `darker`-Wert.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das {{HTMLElement("isindex")}}-Element wird jetzt erstellt, indem es durch Aufrufen von [`document.createElement()`](/de/docs/Web/API/Document/createElement) einfach als Element ohne Eigenschaften oder Methoden erstellt wird.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahl-Dialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, wodurch das Label für die Eingabetaste auf virtuellen Tastaturen bestimmt werden kann.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und dem Verhalten anderer Browser.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge steht in Firefox 4 zur Verfügung.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es, {{cssxref("length")}}-Werte als mathematische Ausdrücke anzugeben.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatorkombinationen zu faktorisieren.
- Unterstützung für Hintergrundbild-Teilrechtecke
  - : Die {{cssxref("-moz-image-rect")}} Funktion ermöglicht es, Teilrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Änderungen wurden daran vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen betreffen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht Ihnen, erweiterte Funktionen von OpenType-Schriften anzupassen.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Bestimmt die Breite in Leerzeichen eines Tabulatorzeichens (U+0009),
        wenn Text gerendert wird.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht Ihnen, die Dimensionen zu steuern, in denen ein Element
        resized werden kann.
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
        Wird auf den Sende-Button in Formularen angewendet, wenn eines oder mehrere
        der Felder des Formulars nicht validieren.
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
        nicht das <code>required</code>-Attribut spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die
        das <code>required</code>-Attribut spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, wenn
        deren Inhalt erfolgreich validiert wurde.
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
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements zu spezifizieren,
        wenn Gecko glaubt, dass es einen Fokusindikator gerendert haben sollte.
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
      <td>Ermöglicht es Ihnen, Selektoren zu gruppieren und Kombinatorkombinationen zu faktorisieren.</td>
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
        Ermöglicht es Ihnen, ein beliebiges Element als Hintergrund für
        {{cssxref("background-image")}} und {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        Ermöglicht es Ihnen, ein Teilrechteck eines Bildes als
        {{cssxref("background-image")}} oder {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                                  |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                                 |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um der neuesten Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                              |

#### Sonstige CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt den Unschärferadius nun aus Vernunft- und Leistungsgründen auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellen-Gruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt nun den `-moz-win-borderless-glass`-Wert, der einem Element ein rahmenloses Aero-Glas-Look verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) Medienfunktion wurde hinzugefügt, sodass das Verhältnis von Geräte-Pixeln pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Umgang mit CSS {{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen, und um absolute Längen genauer in Bildschirm-Pixel auf der Basis des DPI des Geräts umzusetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um die Leistung von Grafik und Video in Firefox 4 optimal zu nutzen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist nun verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element verwenden sowie als CSS {{cssxref("background-image")}}.
- Unterstützung des `buffered`-Attributs bei Medien
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt und ermöglicht es, die Bereiche einer Mediendatei zu bestimmen, die gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen der SVG-Textplatzierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx`, und `dy`-Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht es, die Positionierung jedes einzelnen Zeichens in einem String individuell zu steuern.

### DOM

- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript Typed Arrays wurde hinzugefügt; dies ermöglicht es, Puffer mit Rohdaten unter Verwendung nativer Datentypen zu manipulieren. Mehrere APIs machen davon Gebrauch, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API), und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Abrufen der Begrenzungsrechtecke für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Fehler 503943](https://bugzil.la/503943).
- [Manipulation des Browser-Verlaufs](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumenthistorienobjekt, zugänglich über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Zusammenarbeit mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit bietet, Animationen zu erstellen, die synchron zueinander sind.
- Touch- und Multitouch-Ereignisse
  - : Unterstützung für Touch- und Multitouch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen gemäß den Anforderungen der HTML5-Spezifikation geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Sonstige DOM-Änderungen

- Das Wrapping eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM mittels des `wrap`-DOM-Attributs gesteuert werden. [Firefox Fehler 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die durch Aufrufen von [`document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden so schnell wie möglich ausgeführt (ohne die Reihenfolge beizubehalten) und Skripte ohne `src`-Attribut werden synchron ausgeführt. Um eingefügte Skripte, die das `src`-Attribut haben, in der Einfügereihenfolge auszuführen, setzen Sie `.async=false` darauf.
- DOM [`file`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die Eigenschaft [`element.isContentEditable`](/de/docs/Web/API/Element/isContentEditable) wurde implementiert.
- Die Eigenschaft [`document.currentScript`](/de/docs/Web/API/Document/currentScript) ermöglicht es, zu bestimmen, welches {{HTMLElement("script")}}-Element-Skript aktuell ausgeführt wird. Die neuen Ereignisse [`element.onbeforescriptexecute`](/de/docs/Web/API/Element/onbeforescriptexecute) und [`element.onafterscriptexecute`](/de/docs/Web/API/Element/onafterscriptexecute) werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die Eigenschaft `mozSourceNode` wurde dem [`DragTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die Methode [`selection.modify()`](/de/docs/Web/API/Selection/modify) wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; sie ermöglicht es, die aktuelle Textauswahl oder die Cursorposition in einem Browserfenster leicht zu ändern.
- Die Unterstützung für das `window.directories`-Objekt und das `directories`-Feature für [`window.open`](/de/docs/Web/API/Window/open), das von keinem anderen Browser unterstützt wird, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Fehler 474058](https://bugzil.la/474058)
- Die Eigenschaft [`event.mozInputSource`](/de/docs/Web/API/Event/mozInputSource) wurde zu den DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es, den Ereignistyp des Geräts zu bestimmen, das ein Ereignis erzeugt hat.
- Das [`document.onreadystatechange`](/de/docs/Web/API/Document/onreadystatechange)-Ereignis wurde implementiert.
- Die [`document.createElement`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert keine `<` und `>` um den Tag-Namen im Quirks-Modus mehr.
- Die Methoden [`element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, sodass Elemente weiterhin Mausereignisse verfolgen können, selbst wenn die Maus sich nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die Eigenschaft `window.mozPaintCount` wurde hinzugefügt; sie ermöglicht es, zu bestimmen, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, um die Leistung Ihrer Webanwendung zu testen.
- Das Sprach-Token wurde aus [`window.navigator.appVersion`](/de/docs/Web/API/Window/navigator/appVersion) und [`window.navigator.userAgent`](/de/docs/Web/API/Window/navigator/userAgent) entfernt. Verwenden Sie stattdessen [`window.navigator.language`](/de/docs/Web/API/Window/navigator/language) oder den [Accept-Language Header](/de/docs/Web/HTTP/Content_negotiation). [Firefox Fehler 572656](https://bugzil.la/572656)
- Das [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)-Objekt gibt nun die Antwort als JavaScript-Typed Array sowie als String über die Gecko-spezifische `mozResponseArrayBuffer`-Eigenschaft aus.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten nun eine `mozPressure`-Eigenschaft, die den Druckbetrag auf unterstützten druckempfindlichen Eingabegeräten anzeigt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es, ein neues HTML-Dokument zu erstellen.
- [`Node.mozMatchesSelector()`](/de/docs/Web/API/Node/mozMatchesSelector) wirft nun eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können nun den SVG-Eigenschaftswert eines Elements mit derselben Verkürzungssyntax wie bei CSS einstellen. Beispielsweise: `element.style.fill = 'lime'`. Siehe [`element.style`](/de/docs/Web/API/Element/style) für Details.
- Das Dokumentenroot hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Webbrowsing-Modus beschreibt, einschließlich eines Hinweises darauf, ob der private Browsing-Modus für die Sitzung vorübergehend oder dauerhaft ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie es in jedem anderen großen Browser der Fall ist.
- Das DOM [`StorageEvent`](/de/docs/DOM/event/StorageEvent)-Objekt entspricht nun der neuesten Version der Spezifikation.
- Die Mindestverzögerung für die Methode [`setTimeout()`](/de/docs/Web/API/SetTimeout) ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch Einstellen einer Präferenz wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla vorgeschlagener Ansatz, mit dem Webdesigner und Serveradministratoren festlegen können, wie Inhalte auf ihren Websites interagieren. Das Ziel besteht darin, Angriffe wie Cross-Site-Scripting- und Dateninjektionsangriffe zu erkennen und zu mildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die einer Website ermöglicht, den Browsern mitzuteilen, dass nur über HTTPS kommuniziert werden sollte, statt über HTTP.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS-HTTP-Antwort-Header, der in Internet Explorer 8 eingeführt wurde, wird nun von Firefox unterstützt. Dies ermöglicht Sites anzugeben, ob ihre Seiten in Frames verwendet werden können oder ob dies ggf. auf denselben Ursprung beschränkt werden sollte.
- [Änderungen des User Agent-Strings](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
  - : Um die Menge der in HTTP-Anfragen gesendeten Daten und die Entropie zu reduzieren (siehe [Firefox Fehler 572650](https://bugzil.la/572650)), wurden die Kryptostärke und die Sprach-Tokens aus dem User Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Übereinstimmungen mit dem ECMAScript 5 Standard haben.

### Entwicklerwerkzeuge

- [Verwendung der Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web Console-Tool ist ein nützliches Debug-Hilfsmittel für Webentwickler und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Die Error-Konsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die `devtools.errorconsole.enabled`-Präferenz auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4, siehe [Aktualisierung von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons unterbrechen, also lesen Sie diesen Artikel unbedingt.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Ihnen bewusst sein müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Code-Modul bietet Getter, die es einfach machen, Referenzen zu häufig verwendeten Diensten, wie dem Preferences-Service oder dem Fenstervermittler, unter anderem zu erhalten.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht das Aufrufen von C-kompatiblen fremden Bibliotheksfunktionen ohne Verwendung von XPCOM.
- [Add-ons Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und bietet Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul ermöglicht es leicht, attraktive, nicht modale Benachrichtigungen dem Benutzer zu präsentieren. Sie können sehen, wie man diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwendet.
- [Laden von Code-Modulen von chrome:-URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:**-URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm) Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, den Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download erfolgt ist. Dieses Modul behandelt für Sie Themen im Zusammenhang mit dem privaten Browsen.
- [Leistungsmessung unter Verwendung des PerfMeasurement.jsm-Codemoduls](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API zur Messung von CPU-Level-Leistungsdaten in JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm` Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es ermöglicht, beliebige Bytes aus einem Stream in einen String zu lesen, auch wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm Code-Modul bietet jetzt IterSimpleEnumerator() und IterStringEnumerator() Helfer, um über XPCOM-Enume ren zu iterieren.
- Sie können nun [Arbeiter in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- [`ChromeWorker`](/de/docs/Web/API/ChromeWorker)
  - : Eine neue Art von Arbeiter für privilegierten Code; dies ermöglicht die Verwendung von Dingen wie [js-ctypes](/de/docs/js-ctypes) aus Arbeitern in Erweiterungen und Anwendungscode.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es, mehrere Finger gleichzeitig auf einem Touchscreen zu verfolgen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn ein Dokumentenroot-Element erstellt wird, jedoch bevor irgendwelche Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am Tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Erweiterungen beeinflussen, die mit Registerkarten interagieren. Zusätzlich zur Unterstützung von App-Tabs verändern diese Änderungen auch die Tableiste in eine Standard-Toolbar, die es den Benutzern ermöglicht, Toolbar-Schaltflächen hineinzuziehen.

- Die Ereignisse `TabClose`, `TabSelect`, und `TabOpen` blubbern nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`). Ereignis-Listener für diese Ereignisse sollten dem `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt `gBrowser`.
- Das Kontextmenü der Registerkarte ist nicht mehr ein anonymes Kind des `<xul:tabbrowser>`. Daher kann es direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` aufgerufen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um ein Array der derzeit sichtbaren Registerkarten zu erhalten; dies ermöglicht, festzustellen, welche Registerkarten im aktuellen Tab-Set sichtbar sind. Dies wird von Firefox Panorama verwendet, zum Beispiel.
- Die neue `showOnlyTheseTabs`-Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon`-Methode wurde hinzugefügt, die es ermöglicht, das Favicon einer Registerkarte zu erhalten, ohne auf das `<xul:browser>`-Element zurückgreifen zu müssen.
- Die neue Property `tabbrowser.tabs` wurde hinzugefügt, die es erleichtert, eine Liste von Registerkarten in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen `pinTab` und `unpinTab`-Methoden ermöglichen es, Registerkarten anzupinnen und abzupinnen (das heißt, sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die `getTabModalPromptBox`-Methode und das `tabmodalPromptShowing`-Attribut wurden zum `<xul:tabbrowser>` hinzugefügt, um tabmodale Benachrichtigungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, stoßen Sie auf Glitches, da das Element keine spezielle Bedeutung mehr hat. Zum Beispiel können `<xul:menuseparator>`-Elemente transparent erscheinen, wenn sie in einem `<xul:popup>` verwendet werden.)
- Das `<xul:menupopup>` XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die den Knoten angibt, auf dem das Ereignis auftrat, das das Öffnen des Popups veranlasste. Dies erforderte auch die Hinzufügung eines Auslöserereignisparameters zu der `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade`- und `flip`-Attribute, die zum Konfigurieren des Verhaltens neuer "Pfeil"-Stil-Benachrichtigungspanels verwendet werden.

#### Entfernte Unterstützung für Remote XUL

Remote XUL wird nicht mehr unterstützt; davon sind XUL-Dokumente betroffen, die über HTTP bereitgestellt werden; außerdem können XUL-Dokumente nicht mehr über `file://`-URLs geladen werden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die dazu verwendet werden kann, spezifischen Domains das Laden von Remote XUL zu erlauben.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert nun korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es jetzt, mit dem `element`-Attribut ein Element anzugeben, das resized werden soll, anstatt das Fenster zu resize.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, mit dem angegeben werden kann, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue Pseudoklasse `:-moz-window-inactive` verwenden, um Hintergrundfenstern unterschiedliche Stile zuzuweisen.
- Das Attribut `emptytext` ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn wahr, darf der Hardware-Layer-Manager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden während der Anpassung von `<xul:toolbox>` ausgelöst, sodass Sie Änderungen an Toolbars erkennen können.
- Das Attribut `alternatingbackground` für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die Pseudoklasse `:-moz-tree-row` stattdessen verwenden.
- Die Schaltfläche Overflow auf der Lesezeichen-Toolbar mit anonid chevronPopup ist nicht mehr anonym; sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert war).
- Das XUL-Element `<xul:window>` hat jetzt das Attribut `drawintitlebar`; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass der Inhalt in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned`-Ereignisse sind verfügbar, die es ermöglichen zu erkennen, wann Registerkarten angeheftet und abgelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` einer Registerkarte ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das angibt, ob eine Registerkarte derzeit angeheftet ist oder nicht.
- Die Klasse `setDirectionIndicator` auf `<xul:tree>`-Elementen hat schon lange nichts mehr bewirkt; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt das `chromemargin`-Attribut, das es ermöglicht, den Rand zwischen Chrome und Inhalt auf jeder Seite eines Fensters einzustellen; Sie können dies z. B. verwenden, um in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt das `disablechrome`-Attribut; dies wird verwendet, um das meiste Chrome in einem Fenster auszublenden, wenn es zur Anzeige von In-Browser-UI verwendet wird, wie z.B. `about:addons`.
- Das `<xul:window>`-Element hat jetzt das `disablefastfind`-Attribut, das es ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird zum Beispiel vom Add-ons-Panel verwendet.
- Toolbars können jetzt extern zu Toolboxes sein, während sie immer noch als Mitglied des `<xul:toolbox>` angesehen werden können, indem die `toolboxid`-Eigenschaft des `<xul:toolbar>`-Elements gesetzt wird. Außerdem hat das `<xul:toolbox>`-Element jetzt die `externalToolbars`-Eigenschaft, die alle Toolbars auflistet, die als Mitglieder des Toolboxes betrachtet werden.
- Unterstützung für das Protokollieren von XUL-Templates für Debugging-Zwecke wurde hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Wenn Sie in der Vergangenheit UI zur Statusleiste hinzugefügt haben, müssen Sie Ihre Erweiterung aktualisieren, um dies zu verwenden.
- Verstecken des Browser-Chromes
  - : Sie können nun das Browser-Chrome verbergen, wenn es wünschenswert ist; zum Beispiel tut `about:addons` dies.

### Storage

#### Verschiedene Storage-API-Änderungen

- Die Schnittstelle `mozIStorageBindingParamsArray` hat jetzt ein Length-Attribut, das angibt, wie viele `mozIStorageBindingParams`-Objekte im Array vorhanden sind.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, um eine vorhandene Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, um eine Datenbankverbindung asynchron zu schließen; Sie geben einen Callback an, der benachrichtigt wird, wenn die Schließoperation abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es ermöglicht, die Menge zu spezifizieren, um die eine Datenbankdatei jeweils erweitert wird, um SQLite bei der Reduzierung von Fragmentierung zu helfen.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` und nicht mehr als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten genannten spezifischen Änderungen ist es wichtig, zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht eingefroren, unabhängig davon, was die Dokumentation möglicherweise sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinträchtigen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verbunden ist; dies ersetzt eine häufige Verwendung des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gegeben hat. Wesentlicher ist, dass die Schnittstelle `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um es dem Browser zu ermöglichen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Davon sind die meisten nur für den internen Gebrauch bestimmt, aber die Benachrichtigung `places-connection-closed` ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Array-Größen-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und füllen, anstatt dies für Sie zu erledigen. Siehe [Anzeige von Places-Informationen mithilfe von Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die Schnittstellen `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive`-Attribut, das zur Optimierung von Codepfaden für Dokumente verwendet wird, die derzeit nicht sichtbar sind.
- Die Methode `nsIMemory.isLowMemory()` der Schnittstelle `nsIMemory` wurde veraltet. Sie sollten stattdessen ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Situationen mit geringem Speicher zu achten.
- Die API zum Handhaben von Umleitungen auf HTTP-Kanälen wurde geändert, um sie asynchron verarbeiten zu lassen. Jeder Code, der Umleitungshandhabung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um stattdessen `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, um eine Möglichkeit bereitzustellen, Places-Operationen in Batches zu gruppieren, wodurch die Anzahl der gelieferten Update-Benachrichtigungen reduziert wird, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben ausführen (wie das Aktualisieren von Ansichten).
- Die seit langem veraltete Schnittstelle `nsIPref` wurde endlich entfernt. Wenn Sie nicht bereits auf `nsIPrefService` umgestellt haben, ist jetzt der richtige Zeitpunkt dazu.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` erhielten Änderungen zur Unterstützung der On-Demand-Sitzungswiederherstellung. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` der Schnittstelle `nsIPrincipal` sowie deren Attribute `origin`, `csp` und `URI` sind jetzt aus Skripten zugänglich; zuvor waren sie nur aus nativem Code zugänglich.
- Die Schnittstelle `nsIPrompt` unterstützt jetzt tabmodale Benachrichtigungen; siehe [Verwendung von Tab-Modalen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt korrekt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es ermöglicht, den Zeichensatz des Skripts anzugeben; wird keiner bereitgestellt, wird ASCII angenommen (wie es immer angenommen wurde).
- Die Schnittstelle `nsIAccessProxy` wurde entfernt. Es war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Sie repräsentieren eine scrollbare Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die Schnittstelle `nsIDiskCacheStreamInternal` wurde hinzugefügt.
- Die Schnittstelle `nsIExternalURLHandlerService` wurde hinzugefügt.
- Die Schnittstelle `nsISyncJPAKE` wurde hinzugefügt. Siehe [Firefox Fehler 601645](https://bugzil.la/601645).
- Die Schnittstelle `nsIINIParserWriter` wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben von INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla stellt jetzt unfehlbare Speicherzuweiser bereit, die garantiert keinen Nullwert zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit eine fehlbare gegenüber einer unfehlbaren Speicherzuweisung anfordern.

### Andere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einziges JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung verbessert, indem der I/O-Aufwand reduziert wird. Für Einzelheiten lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Präferenz `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken freigelegt und wird nicht mehr verwendet.
- Addons, deren GUID von einer Version zur nächsten wechselt, können jetzt korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung plattformspezifischer Verzeichnisse in Add-on-Bundles können keine unterschiedlichen Standardpräferenzen für jede Plattform bereitgestellt werden.
- Standardmäßig werden [Erweiterungen jetzt nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Erweiterungen, die Binärkomponenten, DLLs, die über [js-ctypes](/de/docs/js-ctypes) geladen wurden, [Such-Plugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenstersymbole verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Verzeichnis der Erweiterung im Dateisystem kopieren, müssen möglicherweise ihren Code ändern.
- Sie können jetzt Erweiterungen inkludieren, die [automatisch beim Anwendungsstart der Anwendung installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines angepassten Firefox.

## Andere Änderungen

- Es wird nur die Root chrome.manifest-Datei geladen
  - : Nur die Root `chrome.manifest`-Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrer Root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Unterstützt wird es weiterhin über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung.
- [Content Process Event Handling](/de/docs/The_message_manager)
  - : Um Plugins und andere Mehrprozessfunktionen, die außerhalb des Prozesses liegen, zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapped Extensions](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können nun Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne einen Browser-Neustart zu erfordern.
- Standardplugin entfernt
  - : Das Standardplugin wurde entfernt. Der Plugins-Ordner der Anwendung wurde auch standardmäßig entfernt, jedoch besteht die Unterstützung zur Installation von Plugins über diesen Ordner weiterhin. Siehe [Firefox Fehler 533891](https://bugzil.la/533891).
- Erweiterungs-Manager durch Add-on-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Child HWNDs mehr für seine interne Verwendung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung in Firefox 4 nicht funktionieren. Sie müssen entweder die Verwendung von HWNDs einstellen oder Ihren Code, der HWNDs benötigt, in einem [NPAPI](/de/docs/NPAPI)-Plugin kapseln. Das ist eine Menge Arbeit, deshalb sollten Sie, wenn möglich, die direkte Verwendung von HWNDs vermeiden.
- Gestenänderungen
  - : Die Dreifinger-Nach-Oben- und Nach-Unten-Wischgesten auf Trackpads wurden so geändert, dass sie standardmäßig die Firefox-Panorama-Ansicht (früher TabCandy) öffnen und schließen. Um diese Gesten wieder auf die vorherigen Scroll-to-Top und Scroll-to-Bottom-Befehle zurückzusetzen, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
