---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{FirefoxSidebar}}

Firefox 4, welcher am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, erweitert die Unterstützung für HTML5 und andere sich entwickelnde Web-Technologien und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattform-Entwickler zur Verfügung stehen.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5-Parser")}}, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht zudem das Einbetten von [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup.

### HTML

- [Den HTML5-Parser kennenlernen](/de/docs/Learn/HTML)
  - : Ein Überblick darüber, was der HTML5-Parser für Sie bedeutet und wie Sie SVG und MathML in Ihren Inhalt einbetten.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Ein Überblick über Verbesserungen an Webformularen. Zu diesen Änderungen gehören hinzugefügte Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 ausgeblendetes Attribut](/de/docs/Web/HTML/Global_attributes#hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite auszublenden, die momentan für den Benutzer nicht relevant sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie in Firefox 4 implementiert, nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Verbesserungen am Canvas

Die folgenden Änderungen wurden an der Schnittstelle [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation anzupassen:

- Das Angeben eines negativen Radius beim Aufruf von `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Das Angeben von nicht-finiten Werten bei `createLinearGradient()` und `createRadialGradient()` löst jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig größenveränderbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` lösen keine Ausnahme mehr aus, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische Methode `mozGetAsFile()`, mit der Sie eine speicherbasierte Datei mit einem Bild des Canvas-Inhalts erhalten können. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `canvas2dcontext.lineCap` und `canvas2dcontext.lineJoin` lösen keine Ausnahme mehr aus, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `canvas2dcontext.globalCompositeOperation` löst keine Ausnahme mehr aus, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt nicht mehr den nicht standardmäßigen Wert `darker`.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern nicht vorhanden war, wurde entfernt.
- Das `<isindex>`-Element wird jetzt, wenn es durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahl-Dialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, das Ihnen ermöglicht, das Label für die Eingabetaste auf virtuellen Tastaturen festzulegen.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und dem Verhalten anderer Browser.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue CSS-Übergangsunterstützung ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dadurch können Sie {{cssxref("length")}}-Werte als mathematische Ausdrücke angeben.
- Selektorgruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Hintergrundbild-Subrechtecke
  - : Die Funktion {{cssxref("-moz-image-rect")}} ermöglicht es, Subrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touchn-Eigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Arbeiten mit beliebigen Elementen als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die CSS-Funktion `-moz-element` und die DOM-Funktion [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) verwenden, um beliebige HTML-Elemente als Hintergründe zu nutzen.
- [Privatsphäre und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Es wurden Änderungen vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht das Anpassen von erweiterten Funktionen von OpenType-Schriften.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichen eines Tab-Zeichens (U+0009) beim
        Rendern des Textes an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es Ihnen, die Dimensionen zu steuern, in denen ein Element angepasst werden kann.
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
        Wird auf die Schaltfläche Absenden in Formularen angewendet, wenn eines
        oder mehrere Felder des Formulars nicht validiert werden.
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
        deren Inhalte ungültig sind.
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
        Ermöglicht es Ihnen, das Aussehen eines Elements anzugeben, wenn Gecko der Meinung ist, dass es einen Fokuseffekt anzeigen sollte.
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                                |
| ---------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                               |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, damit Sie Zeit haben, Ihre Webseiten zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um die aktuellste Version der Spezifikation zu erfüllen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                            |

#### Verschiedene CSS-Änderungen

- Die Eigenschaft {{cssxref("text-shadow")}} begrenzt jetzt den Unschärferadius auf 300px, um die Übersichtlichkeit und Leistung zu verbessern.
- Die Eigenschaft {{cssxref("overflow")}} gilt nicht mehr für Elemente der Tabellengruppe (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die Eigenschaft `-moz-appearance` unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element einen rahmenlosen Aero-Glas-Look verleiht.
- Die [Medienfunktion](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) wurde hinzugefügt und ermöglicht die Verwendung des Verhältnisses der Gerät-Pixel pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).
- Die Handhabung der CSS-{{cssxref("length")}}-Einheiten durch Gecko wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirm-Pixelanzahlen basierend auf den DPI des Geräts umzuwandeln.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie als CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung für das `buffered`-Attribut bei Medien
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie bestimmen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde zur Unterstützung dieser Funktionalität implementiert.
- Medien `preload` Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt für die Werte der `x`, `y`, `dx` und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}}-Elementen Listen angeben. Dies ermöglicht Ihnen, die Positionierung jedes Zeichens in einer Zeichenfolge individuell zu steuern.

### DOM

- [JavaScript-Typarrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-Typarrays wurde hinzugefügt; dies ermöglicht es Ihnen, Puffer mit Rohdaten unter Verwendung nativer Datentypen zu manipulieren. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API), und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalt von Begrenzungsrechtecken für Bereich
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt verfügt jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die ursprünglich von Internet Explorer stammenden `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Manipulieren des Verlaufes des Browsers](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlaufsobjekt, verfügbar durch das [`window.history`](/de/docs/Web/API/Window/history)-Objekt, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen unter Verwendung von MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit bietet, Animationen zu erstellen, die aufeinander abgestimmt sind.
- Touch- und Multitouch-Ereignisse
  - : Unterstützung für Touch- und Multitouch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen nach den Anforderungen der HTML5-Spezifikation geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM, mit dem `wrap`-DOM-Attribut kontrolliert werden. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mittels [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden sofort ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten), und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um das Einfügen von Scripts, die das `src`-Attribut haben und in der Einfügereihenfolge ausgeführt werden sollen, setzen Sie `.async=false` darauf.
- DOM-[`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die [`Element.isContentEditable`](/de/docs/Web/API/Element/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft ermöglicht es Ihnen, zu bestimmen, welches {{HTMLElement("script")}}-Element derzeit ausgeführt wird. Die neuen Ereignisse [`element.onbeforescriptexecute`](/de/docs/Web/API/Element/onbeforescriptexecute) und [`element.onafterscriptexecute`](/de/docs/Web/API/Element/onafterscriptexecute) werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde dem [`DragTransfer`](/de/docs/Web/API/DragTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; damit können Sie die aktuelle Textauswahl oder die Cursorposition im Browserfenster einfach ändern.
- Die Unterstützung für das `window.directories`-Objekt und die `directories`-Funktion für [`window.open`](/de/docs/Web/API/Window/open), welche in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die Eigenschaft [`Event.mozInputSource`](/de/docs/Web/API/Event/mozInputSource) wurde zu DOM-Benutzeroberflächereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es Ihnen festzustellen, welcher Art Gerät ein Ereignis generiert hat.
- Das [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis des [`Document`](/de/docs/Web/API/Document) wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert keine `<` und `>` um den Tag-Namen im Quirks-Modus mehr.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, wodurch Elemente auch dann Mausereignisse verfolgen können, wenn sich die Maus nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; Sie ermöglicht es Ihnen zu bestimmen, wie oft ein Dokument gemalt wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprach-Token wurde von [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie [``](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Content_negotiation)-Header stattdessen. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gibt die Antwort jetzt als JavaScript-Typarray sowie als Zeichenfolge mithilfe der Gecko-spezifischen `mozResponseArrayBuffer`-Eigenschaft zurück.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die auf unterstützten druckempfindlichen Eingabegeräten den Druckgrad anzeigt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- [`Node.mozMatchesSelector()`](/de/docs/Web/API/Node/mozMatchesSelector) wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt SVG-Eigenschaftswerte eines Elements mit derselben Kurzschreibweise wie bei CSS festlegen. Beispiel: `element.style.fill = 'lime'`. Siehe [`element.style`](/de/docs/Web/API/Element/style) für Details.
- Die Dokumentwurzel hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Browsens beschreibt, einschließlich eines Hinweises, ob das private Browsen für die Sitzung temporär oder dauerhaft ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie in jedem anderen großen Browser.
- Das DOM-Objekt [`StorageEvent`](/de/docs/Web/API/StorageEvent) entspricht jetzt der aktuellsten Version der Spezifikation.
- Die minimale Verzögerung für die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Voreinstellung, `dom.min_timeout_value`.
- Das Ereignis [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) wird standardmäßig nicht mehr gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann durch Ändern einer Voreinstellung wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Die Content Security Policy (CSP) ist ein Vorschlag von Mozilla, der Webdesigner und Serveradministratoren dabei unterstützt zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Das Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateneinschleusungsattacken zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser anzuweisen, dass sie nur über HTTPS und nicht über HTTP kommunizieren sollen.
- [Der X-FRAME-OPTIONS-Antwort-Header](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwort-Header, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzugeben, ob ihre Seiten in Frames verwendet werden dürfen und wenn ja, ob dies auf denselben Ursprung beschränkt werden soll.
- [Änderungen des Benutzer-Agent-Strings](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
  - : Um die Menge an Daten und Entropie in HTTP-Anfragen zu reduzieren (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke und Sprach-Token aus dem Benutzer-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird stärker an den ECMAScript 5 Standard angelehnt sein.

### Entwicklertools

- [Die Webkonsole verwenden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Tool ist eine nützliche Hilfe beim Debuggen für Webentwickler und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die `devtools.errorconsole.enabled`-Einstellung auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung bestehender Erweiterungen für Firefox 4 siehe [Erweiterungen für Firefox 4 aktualisieren](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt einige wesentliche Änderungen, die die Kompatibilität mit bestehenden Add-ons brechen, daher sollten Sie diesen Artikel unbedingt lesen.

Wenn Sie ein Thema-Entwickler sind, sollten Sie [Themenänderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Sie beachten sollten.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Codemodul bietet Getter, die es einfach machen, Verweise auf häufig verwendete Dienste wie den Präferenzdienst oder den Fenstervermittler zu erhalten, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes-API ermöglicht es, C-kompatible fremde Bibliotheksfunktionen ohne Verwendung von XPCOM aufzurufen.
- [Add-ons-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und ermöglicht die Installation und Deinstallation von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht-modale Benachrichtigungen für den Benutzer zu präsentieren. Sie können sehen, wie Sie diese API verwenden in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications).
- [Laden von Code-Modulen über chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module über **chrome:** URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Codemodul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, den Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download gespeichert wurde. Dieses Modul kümmert sich um Probleme im Zusammenhang mit dem privaten Durchsuchen für Sie.
- [Leistungsmessung mit dem PerfMeasurement.jsm-Codemodul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Codemodul bietet eine API zur Messung von CPU-level Leistungsdaten im JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das Codemodul `NetUtil.jsm` bietet jetzt die Methode `readInputStreamToString()`, mit der Sie beliebige Bytes aus einem Stream in einen String lesen können, selbst wenn der Stream Nullen enthält.
- Das Codemodul XPCOMUtils.jsm bietet jetzt die Helfer IterSimpleEnumerator() und IterStringEnumerator(), um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Arbeiter in JavaScript-Codemodulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- [`ChromeWorker`](/de/docs/Web/API/ChromeWorker)
  - : Eine neue Art von Arbeiter für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) aus Arbeitern in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es, mehrere Fingerbewegungen auf einem Touchscreen gleichzeitig zu verfolgen.

#### Weitere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, aber bevor irgendwelche Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Toolbar, die es dem Benutzer ermöglicht, Toolbar-Schaltflächen hineinzuziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` werden nicht mehr bis zum `<xul:tabbrowser>`-Element (`gBrowser`) weitergeleitet. Ereignislistener für diese Ereignisse sollten zu `gBrowser.tabContainer` anstelle direkt zu `gBrowser` hinzugefügt werden.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` angesprochen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue Eigenschaft `visibleTabs` wurde hinzugefügt, damit Sie ein Array der aktuell sichtbaren Tabs erhalten können; damit können Sie bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; sie wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die es Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element aufrufen zu müssen.
- Die neue Eigenschaft `tabbrowser.tabs` wurde hinzugefügt, die es Ihnen ermöglicht, leicht eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs zu fixieren und zu lösen (d.h. sie zwischen App-Tabs und regulären Tabs umzuschalten).
- Die Methode `getTabModalPromptBox` und das Attribut `tabmodalPromptShowing` wurden dem `<xul:tabbrowser>` zur Unterstützung von tab-modalen Warnungen hinzugefügt.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, stoßen Sie auf Probleme, da das Element keine besondere Bedeutung mehr hat. Beispielsweise kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das XUL-Element `<xul:menupopup>` hat nun eine `triggerNode`-Eigenschaft, die den Knoten angibt, auf dem das Ereignis aufgetreten ist, das das Popup öffnete. Dies erforderte auch die Hinzufügung eines Auslöserereignis-Parameters zur Methode `openPopup`. Außerdem wurde die Eigenschaft `anchorNode` hinzugefügt; sie gibt den Anker zurück, der bei der Erstellung des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet nun die Attribute `fade` und `flip`, die verwendet werden, um das Verhalten neuer "Pfeil"-Benachrichtigungspanels zu konfigurieren.

#### Unterstützung für Remote XUL entfernt

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können Sie keine XUL-Dokumente mehr über `file://` URLs laden, es sei denn, Sie erstellen die Voreinstellung `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains zu erlauben, Remote XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das Attribut `readonly` funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es nun, das `element`-Attribut zu verwenden, um ein zu skalierendes Element anzugeben, anstatt das Fenster zu skalieren.
- Das `<xul:resizer>`-Element hat nun ein `type`-Attribut, das es ermöglicht, anzugeben, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer doppelt gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr bei aktiven XUL-Fenstern gesetzt. Sie können stattdessen die neue Pseudoklasse `:-moz-window-inactive` verwenden, um für Hintergrundfenster unterschiedliche Stile zuzuweisen.
- Das Attribut `emptytext` ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet nun ein `accelerated`-Attribut; wenn es wahr ist, darf der Hardware-Layer-Manager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt nun die Attribute `bottom` und `right`.
- Ereignisse werden nun während der Anpassung des `<xul:toolbox>` ausgelöst, sodass Sie Änderungen an Toolbars erkennen können.
- Das Attribut `alternatingbackground` für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können stattdessen die Pseudoklasse `:-moz-tree-row` verwenden.
- Die Schaltfläche mit dem Anonid-Klopfsymbol zur Überlaufsteuerung der Lesezeichen-Symbolleiste ist nicht mehr anonym; sie hat eine ID namens "PlacesChevron".
- Das `<xul:tabs>`-Element verfügt nun über eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, welche veraltet ist (und nie dokumentiert war).
- XUL-`<xul:window>`-Elemente haben nun das Attribut `drawintitlebar`; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned`-Ereignisse sind verfügbar, sodass Sie erkennen können, wann Tabs fixiert oder gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs ändern.
- `<xul:tab>`-Elemente haben nun ein `pinned`-Attribut, das es Ihnen ermöglicht, zu bestimmen, ob ein Tab derzeit fixiert ist oder nicht.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hat seit einiger Zeit nichts mehr bewirkt; nun wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element bietet nun ein `chromemargin`-Attribut, das es Ihnen ermöglicht, den Rand zwischen Chrome und Inhalt auf jeder Fensterseite festzulegen; Sie können dies verwenden, um zum Beispiel in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element bietet nun ein `disablechrome`-Attribut; dies wird verwendet, um das meiste Chrome in einem Fenster zu verstecken, wenn es verwendet wird, um Benutzeroberfläche im Browser anzuzeigen, wie zum Beispiel `about:addons`.
- Das `<xul:window>`-Element bietet nun ein `disablefastfind`-Attribut, mit dem Sie die Suchleiste in einem Fenster deaktivieren können, wenn der Inhalt sie nicht unterstützt. Dies wird zum Beispiel vom Add-ons-Panel genutzt.
- Toolbars können nun außerhalb von Toolboxes sein, während sie weiterhin als Mitglied einer `<xul:toolbox>` betrachtet werden, indem sie die `toolboxid`-Eigenschaft der `<xul:toolbar>` festlegen. Auch das `<xul:toolbox>`-Element hat nun eine `externalToolbars`-Eigenschaft, die alle Toolbars auflistet, die als Mitglieder der Toolbox betrachtet werden.
- Unterstützung für das Logging von XUL-Templates für Debugging-Zwecke wurde hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie zuvor Benutzeroberfläche in der Statusleiste hinzugefügt haben.
- Verstecken von Browser-Chrome
  - : Sie können nun das Chrome des Browsers ausblenden, wenn es wünschenswert ist; zum Beispiel macht `about:addons` dies.

### Speicher

#### Verschiedene Änderungen an der Speicher-API

- Die Schnittstelle `mozIStorageBindingParamsArray` hat nun ein Längenattribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` ermöglicht es Ihnen, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` ermöglicht es Ihnen, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Rückruf ein, um benachrichtigt zu werden, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` ermöglicht es Ihnen, anzugeben, um welchen Betrag eine Datenbankdatei jeweils vergrößert wird, um SQLite zu helfen, Fragmentierung zu reduzieren.
- Der Fehler `SQLITE_CONSTRAINT` wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` statt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten referenzierten spezifischen Änderungen ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt ungefroren, unabhängig davon, was die Dokumentation sagen mag. Wir werden im Laufe der Zeit die Dokumentation aktualisieren.

- [Änderungen an XPCOM in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details über Änderungen an XPCOM, die Kompatibilität in Firefox 4 beeinträchtigen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt assoziiert ist; dies ersetzt einen häufigen Anwendungsfall der nun entfernten `__parent__`.

### Orte

- Die Orte-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gibt. Wesentlicher ist die Umbenennung der `nsINavHistoryResultViewer`-Schnittstelle in `nsINavHistoryResultObserver`.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Abschaltprozess des Platendienstes zuverlässiger zu verfolgen. Von diesen sind die meisten nur intern verwendet, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu wissen, wann der Platendienst seinen Abschaltprozess abgeschlossen hat.
- Der Array-Größenausgabeparam<|image_gen|>eter bei mehreren Methoden von Places ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie manuell ein Menü mit Places-Informationen erstellen und füllen, anstatt es für Sie zu erledigen. Siehe [Anzeigen von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die Schnittstellen `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive`-Attribut, das zur Optimierung von Codepfaden für nicht sichtbare Dokumente verwendet wird.
- Die Methode `nsIMemory.isLowMemory()` der `nsIMemory`-Schnittstelle wurde veraltet. Sie sollten ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Situationen mit wenig Speicher zu achten.
- Das API zur Behandlung von Umleitungen auf HTTP-Kanälen hat sich geändert, um ihre Verarbeitung asynchron stattfinden zu lassen. Jeder Code, der die Umleitungshandhabung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Stapel zu gruppieren, um die Anzahl der gesendeten Aktualisierungsbenachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ aufwändige Aufgaben ausführen (wie das Aktualisieren von Ansichten).
- Die lang veraltete `nsIPref`-Schnittstelle wurde schließlich entfernt. Wenn Sie nicht bereits auf `nsIPrefService` umgestiegen sind, ist jetzt der richtige Zeitpunkt.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` haben Änderungen erfahren, um die bedarfsweise Sitzungswiederherstellung zu unterstützen. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` sowie seine Attribute `origin`, `csp` und `URI` der `nsIPrincipal`-Schnittstelle sind jetzt vom Skript aus verfügbar; zuvor waren sie nur vom nativen Code aus zugänglich.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Warnungen; siehe [Verwendung von tab-modalen Eingabeaufforderungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, mit dem Sie den Zeichensatz des Skriptes angeben können; wenn keiner angegeben wird, wird ASCII angenommen (wie immer zuvor).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Es war ein Implementierungsdetail, das seinen Nutzen überlebt hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Sie repräsentieren eine scrollbar synchronisierte Inhaltsanzeige, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherallokatoren, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit fehlbare im Gegensatz zu unfehlbaren Speicherzuweisungen anfordern können.

### Weitere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in einem einzigen JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung durch Reduzierung von I/O verbessert. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Voreinstellung `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken exponiert und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen verändert, können jetzt korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung von plattformspezifischen Verzeichnissen in Add-on-Bundles können Sie keine unterschiedlichen Standardvoreinstellungen mehr für jede Plattform bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei heraus ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installations-Manifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten, DLLs, die mit [js-ctypes](/de/docs/js-ctypes), [Such-Plugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenster-Icons geladen werden, verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Verzeichnis der Erweiterung vom Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können nun Erweiterungen einschließen, die [automatisch bei jedem Programmstart des Browsers installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer angepassten Firefox-Version.

## Andere Änderungen

- Nur die root chrome.manifest Datei wird geladen
  - : Nur die root `chrome.manifest` Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien geladen haben möchten, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrer root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Die Unterstützung kann über die Erweiterung [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) fortgeführt werden.
- [Content-Prozess-Ereignishandhabung](/de/docs/The_message_manager)
  - : Um Plugins und andere Prozesse zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapped Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne dass ein Neustart des Browsers erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Auch der standardmäßige Plugins-Ordner wurde standardmäßig entfernt, aber die Unterstützung für die Installation von Plugins über diesen Ordner existiert weiterhin. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child-HWNDs werden nicht länger verwendet
  - : Firefox erstellt keine Child-HWNDs mehr für seine interne Nutzung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, funktioniert Ihre Erweiterung nicht mehr auf Firefox 4. Sie müssen entweder aufhören, HWNDs zu verwenden, oder Ihren Code, der auf HWNDs angewiesen ist, in ein [NPAPI](/de/docs/NPAPI)-Plugin einwickeln. Das erfordert viel Arbeit, also wenn Sie die Verwendung von HWNDs direkt vermeiden können, sollten Sie das tun.
- Gestenänderungen
  - : Die Drei-Finger-Aufwärts- und Abwärtsstreichgesten auf Trackpads wurden standardmäßig geändert, um die Firefox-Panorama-Ansicht (ehemals TabCandy) zu öffnen und zu schließen. Um diese auf die vorherigen Scroll-to-Top- und Scroll-to-Bottom-Befehle zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
