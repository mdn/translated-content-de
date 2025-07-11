---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, fügt mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien hinzu und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Entwickler der Gecko-Plattform verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet nun den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht es auch, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in das HTML-Markup einzubetten.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die derzeit für den Nutzer nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Nutzung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Verbesserungen an Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation heranzuführen:

- Die Angabe eines negativen Radius beim Aufruf von `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Angabe von nicht-endlichen Werten beim Aufruf von `createLinearGradient()` und `createRadialGradient()` wirft jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert wirft keine Ausnahme mehr; nicht-positive Werte werden korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert wirft keine Ausnahme mehr; nicht-positive Werte werden korrekt ignoriert.
- Die `putImageData()`-Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig größenveränderbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()`-Methode, mit der Sie eine speicherbasierte Datei erhalten, die ein Bild des Canvas-Inhalts enthält. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und der nicht-standardmäßige `darker`-Wert wird nicht mehr unterstützt.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern nicht vorhanden war, wurde entfernt.
- Das `<isindex>`-Element, das durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Datei-Dialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und dem Verhalten anderer Browser.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es, {{cssxref("length")}}-Werte als mathematische Ausdrücke anzugeben.
- Selektorgruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Unterrechteck von Hintergrundbildern
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht es, Unterrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)-DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu nutzen.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Änderungen wurden daran vorgenommen, welche Informationen über den Stil besuchter Links mit Hilfe von CSS-Selektoren erlangt werden können. Dies könnte einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht es Ihnen, erweiterte Funktionen von OpenType-Schriftarten anzupassen.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichenzeichen an, die ein Tabulatorzeichen (U+0009) beim
        Rendern von Text hat.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es Ihnen, zu steuern, in welchen Dimensionen ein Element vergrößert oder verkleinert werden kann.
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
      <td>Wird zum Stylen von Elementen verwendet, deren Plugins abgestürzt sind.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formularfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf den Absende-Button in Formularen angewendet, wenn eines oder mehrere der Formul
      feld enthält ungültig ist.</td>
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
        nicht das <code>required</code>-Attribut angeben.
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
        Ermöglicht es Ihnen, das Aussehen eines Elements zu spezifizieren, wenn Gecko der Meinung ist, dass es einen Fokusanzeiger benötigt.
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
        Ermöglicht es Ihnen, {{cssxref("length")}}-Werte als mathematische Ausdrücke zu spezifizieren.
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                                |
| ---------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                               |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Es wurden auch Rendering-Änderungen vorgenommen, um der neuesten Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                            |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Unschärferadius auf 300px aus Gründen der Vernunft und der Leistung.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellen-Gruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einen rahmenlosen Aero-Glass-Look auf ein Element anwendet.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/@media/-moz-device-pixel-ratio)-Medienfunktion wurde hinzugefügt, sodass das Gerät-Pixel-vergleichsweise auf die Pixelanzahl pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Die Behandlung von CSS {{cssxref("length")}}-Einheiten durch Gecko wurde überarbeitet, um besser zu anderen Browsern zu passen und absolute Längen genauer in Bildschirmpixelzahlen basierend auf der DPI des Geräts zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 zu holen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie als CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung für das Attribut `buffered` bei Medien
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien-`preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen der Positionierung von SVG-Text
  - : Sie können jetzt Listen für die Werte der Eigenschaften `x`, `y`, `dx` und `dy` auf SVG-{{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht es Ihnen, die Positionierung jedes Zeichens in einer Zeichenkette individuell zu steuern.

### DOM

- [JavaScript-Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-Typed Arrays wurde hinzugefügt; damit können Sie Puffer mit rohen Daten mit nativen Datentypen manipulieren. Mehrere APIs nutzen dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalt von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt verfügt jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Fehler 503943](https://bugzil.la/503943).
- [Manipulation des Browser-Verlaufs](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumentverlauf-Objekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Zusammenarbeit mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die synchron zueinander ablaufen.
- Touch- und Mehrfingergesten-Ereignisse
  - : Unterstützung für Touch- und Mehrfingergesten-Ereignisse wurde hinzugefügt.

#### HTML-Element-DOM-Schnittstellen wurden geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die erforderlichen der HTML5-Spezifikation geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Wrapping eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM gesteuert werden, über das `wrap`-DOM-Attribut. [Firefox-Fehler 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten), und Skripte ohne `src`-Attribut werden synchron ausgeführt. Um das Skript zu machen, das eingefügte Skripte mit dem `src`-Attribut in der Einfügereihenfolge ausführt, setzen Sie `.async=false` darauf.
- DOM-Objekte [`File`](/de/docs/Web/API/File) bieten jetzt eine `url`-Eigenschaft.
- Unterstützung von [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects) für `XMLHttpRequest`.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es Ihnen zu bestimmen, welches {{HTMLElement("script")}}-Elementskript derzeit ausgeführt wird. Die neuen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde zum [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die Methode [`Selection.modify()`](/de/docs/Web/API/Selection/modify) wurde zum [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; diese ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition in einem Browserfenster einfach zu ändern.
- Unterstützung für das `window.directories`-Objekt und die `directories`-Funktion für [`window.open`](/de/docs/Web/API/Window/open), die von keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Fehler 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu DOM-Benutzerschnittstellenereignissen hinzugefügt; diese nicht-standardisierte Eigenschaft ermöglicht es Ihnen, den Gerätetyp zu bestimmen, der ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document)-[`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert in den Modus "Quirks" keine `<` und `>` mehr um den Tag-Namen.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt und ermöglichen es Elementen, Mausereignisse weiterhin zu verfolgen, selbst wenn die Maus sich außerhalb ihres normalen Verfolgungsbereichs befindet, nachdem ein `mousedown`-Ereignis aufgetreten ist.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt, die es Ihnen ermöglicht zu bestimmen, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Der Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header. [Firefox-Fehler 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt zeigt die Antwort jetzt sowohl als JavaScript-Typed Array als auch als Zeichenfolge mithilfe der Gecko-spezifischen Eigenschaft `mozResponseArrayBuffer` an.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten nun eine `mozPressure`-Eigenschaft, die den Druckwert auf unterstützten druckempfindlichen Eingabegeräten anzeigt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die sich auf lokale Dateien beziehen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` löst jetzt eine `SYNTAX_ERR`-Ausnahme aus, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt einem Element Werte der SVG-Eigenschaften mit derselben Kurzschreibweise zuweisen wie mit CSS. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Das Dokumenten-Root hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Status des privaten Modus beschreibt, einschließlich der Angabe, ob der private Modus vorübergehend oder dauerhaft für die Sitzung ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie in jedem anderen großen Browser auch.
- Das DOM-Objekt [`StorageEvent`](/de/docs/Web/API/StorageEvent) entspricht jetzt der neuesten Version der Spezifikation.
- Die minimale zulässige Verzögerung für die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und die Methode [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Voreinstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann wieder aktiviert werden, indem eine Voreinstellung festgelegt wird.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein Mozilla-Vorschlag, der Webdesignern und Serveradministratoren helfen soll, zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Das Ziel ist, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und abzumildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browsern mitzuteilen, dass sie nur über HTTPS und nicht über HTTP kommunizieren sollen.
- [Der X-FRAME-OPTIONS-Antwortheader](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte X-FRAME-OPTIONS-HTTP-Antwortheader wird jetzt von Firefox unterstützt. Hierdurch können Websites angeben, ob ihre Seiten in Frames verwendet werden können und gegebenenfalls, ob dies auf die gleiche Herkunft beschränkt werden soll.
- [Änderungen der User-Agent-Zeichenkette](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : Als Möglichkeit zur Reduzierung der Menge an Daten und Entropie, die in HTTP-Anfragen gesendet werden (siehe [Firefox-Fehler 572650](https://bugzil.la/572650)), wurden die Krypto-Stärke und Sprach-Token aus der User-Agent-Zeichenkette entfernt.

### JavaScript

Für einen Überblick über die in Javascript 1.8.5 implementierten Änderungen siehe [New in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzlich den ECMAScript-5-Standard befolgen.

### Entwicklerwerkzeuge

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Tool Webkonsole ist ein nützliches Debugging-Hilfsmittel sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig ab Gecko 2.0 deaktiviert. Sie können sie wieder aktivieren, indem Sie die Voreinstellung `devtools.errorconsole.enabled` auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung bestehender Erweiterungen für Firefox 4 siehe [Aktualisierung von Erweiterungen für Firefox 4](/de/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4). Es gibt einige wesentliche Änderungen, die die Kompatibilität mit bestehenden Add-ons brechen, daher sollten Sie diesen Artikel lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige wichtige Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Codemodule

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Codemodul bietet Getter, die es einfach machen, Referenzen auf häufig verwendete Dienste zu erhalten, wie zum Beispiel den Voreinstellungsdienst oder den Fenstermittler.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible Fremdbibliotheksfunktionen ohne Verwendung von XPCOM aufzurufen.
- [Add-ons-Manager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung sowie Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht-modale Benachrichtigungen an den Benutzer zu präsentieren. Sie können sehen, wie Sie diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwenden können.
- [Code-Module von chrome: URLs laden](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:** URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Codemodul stellt die globale Variable `gDownloadLastDir` bereit, die einen String enthält, mit dem Sie den Pfad des Verzeichnisses erfahren können, in das der letzte Download erfolgte. Dieses Modul behandelt für Sie Probleme im Zusammenhang mit dem privaten Browsing.
- [Leistungsmessung mit dem PerfMeasurement.jsm-Codemodul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Codemodul bietet eine API, um Leistungsdaten auf CPU-Ebene im JavaScript-Code zu messen.

#### Verschiedene Änderungen an Codemodulen

- Das `NetUtil.jsm`-Codemodul bietet jetzt die Methode `readInputStreamToString()`, die es ermöglicht, beliebige Bytes aus einem Stream in einen String zu lesen, auch wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Codemodul bietet jetzt die Hilfsfunktionen IterSimpleEnumerator() und IterStringEnumerator(), um über XPCOM-Enumerators zu iterieren.
- Sie können jetzt [Worker in JavaScript-Codemodulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Workertyp für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Workern in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht-standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger zu verfolgen, die sich gleichzeitig auf einem Touchscreen bewegen.

#### Weitere DOM-Änderungen

- Die [neue Benachrichtigung "document-element-inserted"](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Root-Element eines Dokuments erstellt wird, aber bevor irgendwelche Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs ändern diese Änderungen auch die Tableiste in eine standardmäßige Symbolleiste, die es den Benutzern ermöglicht, Schaltflächen in ihr zu ziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` werden nicht mehr auf das `<xul:tabbrowser>`-Element (`gBrowser`) hochgeleitet. Ereignis-Listener für diese Ereignisse sollten dem `gBrowser.tabContainer` und nicht dem `gBrowser` direkt hinzugefügt werden.
- Das Kontextmenü für Tabs ist kein anonymes Kind mehr des `<xul:tabbrowser>`. Daher kann es direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blogeintrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um ein Array der aktuell sichtbaren Tabs zu erhalten; dies ermöglicht es Ihnen festzustellen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; diese wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die es Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element aufrufen zu müssen.
- Die neue Eigenschaft `tabbrowser.tabs` wurde hinzugefügt, die Ihnen eine einfache Möglichkeit bietet, eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs zu pinnen und das Pinnen aufzuheben (das heißt, sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die neue Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden zum `<xul:tabbrowser>` hinzugefügt, um tab-modale Warnungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Darstellungsfehler stoßen, da das Element keine spezielle Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die den Knoten angibt, auf dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch die Hinzufügung eines Triggereignisparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der bei der Erstellung des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade`- und `flip`-Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Benachrichtigungspanels zu konfigurieren.

#### Unterstützung für Remote XUL entfernt

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden. Außerdem können Sie XUL-Dokumente nicht mehr über `file://`-URLs laden, es sei denn, Sie erstellen die Voreinstellung `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die es ermöglicht, spezifische Domänen zu erlauben, Remote XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen jetzt, das `element`-Attribut zu verwenden, um ein zu vergrößerndes Element anzugeben, anstatt das Fenster zu vergrößern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es Ihnen ermöglicht, anzugeben, dass der Resizer für ein Fenster und nicht für ein Element ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue Pseudoklasse `:-moz-window-inactive` verwenden, um Hintergrundfenstern unterschiedliche Stile zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn es wahr ist, ist der Hardware-Layer-Manager berechtigt, das Fenster zu beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Während der `<xul:toolbox>`-Anpassung werden jetzt Ereignisse ausgelöst, die es Ihnen ermöglichen, Änderungen an Symbolleisten zu erkennen.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können stattdessen die Pseudoklasse `:-moz-tree-row` verwenden.
- Die Überlauftaste der Lesezeichen-Symbolleiste mit `anonid` chevronPopup ist nicht mehr anonym; sie hat nun eine ID "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste und ermöglicht das Zeichnen in die Titelleiste.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, die es Ihnen ermöglichen, zu erkennen, wann Tabs gepinnt und das Pinnen aufgehoben wird.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das Ihnen ermöglicht zu bestimmen, ob ein Tab derzeit gepinnt ist oder nicht.
- Die Klasse `setDirectionIndicator` auf `<xul:tree>`-Elementen hat lange nichts mehr bewirkt; nun wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, mit dem Sie den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festlegen können; Sie können dies beispielsweise verwenden, um in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um den größten Teil des Chromes in einem Fenster auszublenden, wenn es zur Anzeige von In-Browser-Benutzeroberflächen wie `about:addons` verwendet wird.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird beispielsweise von der Add-ons-Ansicht verwendet.
- Symbolleisten können jetzt außerhalb von Toolboxes sein und dennoch als Mitglied der `<xul:toolbox>` betrachtet werden, indem die Eigenschaft `toolboxid` der `<xul:toolbar>` festgelegt wird. Auch das `<xul:toolbox>`-Element hat jetzt eine `externalToolbars`-Eigenschaft, die alle Toolbars auflistet, die als Mitglieder der Toolbox gelten.
- Unterstützung für das Protokollieren von XUL-Templates zu Debugging-Zwecken wurde hinzugefügt.

### Änderungen an der Benutzeroberfläche, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie bisher Benutzeroberflächen-Elemente zur Statusleiste hinzugefügt haben.
- Browser-Chrome ausblenden
  - : Sie können jetzt das Browser-Chrome ausblenden, wenn dies wünschenswert ist; zum Beispiel macht `about:addons` dies.

### Speicher

#### Verschiedene Änderungen an der Speicher-API

- Das `mozIStorageBindingParamsArray`-Interface hat jetzt ein Länge-Attribut, das angibt, wie viele `mozIStorageBindingParams`-Objekte sich im Array befinden.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbank-Verbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbank-Verbindung asynchron zu schließen; Sie geben einen Callback an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es Ihnen ermöglicht, die Menge anzugeben, um die eine Datenbankdatei jeweils wächst, um SQLite bei der Reduzierung der Fragmentierung zu helfen.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` gemeldet, anstatt als `NS_ERROR_FAILURE`.

### XPCOM

Zusätzlich zu den unten aufgeführten spezifischen Änderungen ist es wichtig zu beachten, dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht mehr eingefroren, unabhängig davon, was die Dokumentation sagen mag. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen in XPCOM, die Auswirkungen auf die Kompatibilität in Firefox 4 haben.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall der jetzt entfernten `__parent__`.

### Interfaces

- Abfrageergebnisse für Places können jetzt von mehreren Beobachtern beobachtet werden und Abfragen können asynchron ausgeführt werden. Das bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gibt. Wichtiger ist, dass das `nsINavHistoryResultViewer`-Interface jetzt in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um es dem Browser zu ermöglichen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Die meisten davon sind nur für internen Gebrauch, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Arrays-Size-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie manuell ein Menü mit Places-Informationen erstellen und füllen, anstatt dies automatisch für Sie zu tun. Siehe [Anzeigen von Places-Informationen mit Hilfe von Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die Schnittstellen `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um Codepfade für Dokumente zu optimieren, die derzeit nicht sichtbar sind.
- Die Methode `nsIMemory.isLowMemory()` der Schnittstelle `nsIMemory` ist veraltet. Sie sollten [`memory-pressure`-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) nutzen, um auf Situationen mit wenig Speicher zu achten.
- Die API zur Behandlung von Weiterleitungen auf HTTP-Kanälen wurde geändert, um sie asynchron bearbeiten zu lassen. Jeder Code, der die Weiterleitungsbehandlung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Batches zu gruppieren, die Anzahl der gesendeten Aktualisierungsbenachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ umfangreiche Aufgaben durchführen (wie das Aktualisieren von Ansichten).
- Die lang veraltete `nsIPref`-Schnittstelle wurde schließlich entfernt. Wenn Sie nicht bereits zu `nsIPrefService` gewechselt sind, ist nun die Zeit dafür.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` erhielten Änderungen, um die Wiederherstellung der Sitzung auf Abruf zu unterstützen. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` der Schnittstelle `nsIPrincipal` sowie dessen Attribute `origin`, `csp` und `URI` sind jetzt skriptbar; vorher waren sie nur aus nativen Code zugänglich.
- Die Schnittstelle `nsIPrompt` unterstützt jetzt tab-modale Warnungen; siehe [Verwendung von tab-modalen Warnungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt korrekt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, den Zeichensatz des Skripts anzugeben; wenn keiner angegeben ist, wird ASCII angenommen (wie immer angenommen wurde).
- Die Schnittstelle `nsIAccessProxy` wurde entfernt. Es war ein Implementierungsdetail, das seinen Nutzen überlebt hat.
- Die `nsIContentView` und `nsIContentViewManager`-Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie representieren eine scrollbare Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die Schnittstelle `nsIDiskCacheStreamInternal` wurde hinzugefügt.
- Die Schnittstelle `nsIExternalURLHandlerService` wurde hinzugefügt.
- Die Schnittstelle `nsISyncJPAKE` wurde hinzugefügt. Siehe [Firefox-Fehler 601645](https://bugzil.la/601645).
- Das `nsIINIParserWriter`-Interface wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speichermanagement

- [Unfehlbare Speicherzuordnung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuweiser, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu lernen, wie sie funktionieren und wie Sie explizit fallible oder unfehlbare Speicherzuordnung anfordern.

### Weitere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden zu einem einzigen JAR-Archiv, `omni.jar`, kombiniert, was die Startleistung verbessert, indem I/O reduziert wird. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Voreinstellung `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken zugänglich gemacht und wird nicht mehr verwendet.
- Add-ons, deren GUID sich von einer Version zur anderen ändern, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung von Plattform spezifischen Verzeichnissen in Add-on-Bundles können Sie keine unterschiedlichen Standardeinstellungen mehr für jede Plattform bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr ausgepackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern werden direkt aus der XPI-Datei ausgeführt. Erweiterungen können die Eigenschaft [unpack](/de/docs/Install_Manifests#unpack) im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten verwenden, DLLs geladen mit [js-ctypes](/de/docs/js-ctypes), [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie ausgepackt werden sollen. Erweiterungen, die [SQLite-Datenbank erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Verzeichnis der Erweiterung aus dem Dateisystem kopieren, müssen möglicherweise ebenfalls ihren Code ändern.
- Sie können jetzt Erweiterungen einschließen, die [automatisch bei Anwendungsstart installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines angepassten Firefox.

## Andere Änderungen

- Nur das Root-Chrome.manifest-Datei wird geladen
  - : Nur die Root `chrome.manifest`-Datei wird jetzt geladen; wenn Sie zusätzliche Manifestdateien laden müssen, können Sie den Befehl [`manifest`](/de/docs/Chrome_Registration#manifest) in Ihrer Root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Die Unterstützung ist weiterhin über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Ereignisbehandlung im Inhaltsprozess](/de/docs/The_message_manager)
  - : Um Plugins außerhalb des Prozesses und andere Funktionen mit mehreren Prozessen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapped-Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder heruntergestuft) werden können, ohne einen Browser-Neustart zu erfordern.
- Standardplugin entfernt
  - : Das Standardplugin wurde entfernt. Der Anwendungsplugins-Ordner wurde standardmäßig ebenfalls entfernt, allerdings besteht weiterhin Unterstützung für die Installation von Plugins über diesen Ordner. Siehe [Firefox-Fehler 533891](https://bugzil.la/533891).
- Erweiterungs-Manager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) ersetzt.
- Nicht mehr benötigte HWNDs
  - : Firefox erstellt keine untergeordneten HWNDs mehr für die interne Verwendung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, funktioniert Ihre Erweiterung nicht mehr mit Firefox 4. Sie müssen entweder auf die Verwendung von HWNDs verzichten oder Ihren Code, der auf HWNDs angewiesen ist, in einem [NPAPI](/de/docs/NPAPI)-Plugin einbinden. Das ist eine Menge Arbeit, daher sollten Sie es vermeiden, direkt HWNDs zu verwenden, wenn Sie können.
- Gestenänderungen
  - : Die Drei-Finger-oben-und-unten-Wischgesten auf Trackpads wurden standardmäßig geändert, um die Firefox Panorama-Anzeige (ehemals TabCandy) zu öffnen und zu schließen. Um sie auf die vorherigen Scroll-to-Top- und Scroll-to-Bottom-Befehle zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
