---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen sowohl für Webentwickler, Add-on-Entwickler als auch Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko nutzt jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Außerdem lässt er Inhalte zu, um [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einzubetten.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf Verbesserungen an Webformularen. Unter diesen Änderungen sind neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5 Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente im Zusammenhang mit Abschnitten in einem Dokument: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 verstecktes Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Benutzer derzeit nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie in Firefox 4 implementiert, nicht mit dem finalen Standard kompatibel ist und generell nicht verwendet werden sollte.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation heranzuführen:

- Das Angeben eines negativen Radius beim Aufrufen von `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Das Angeben nicht-finitieller Werte bei `createLinearGradient()` und `createRadialGradient()` löst nun `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig skalierbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` lösen keine Ausnahme mehr aus, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische Methode `mozGetAsFile()`, mit der Sie eine speicherbasierte Datei, die ein Bild des Canvas-Inhalts enthält, erhalten können. Weitere Informationen finden Sie unter [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` lösen keine Ausnahme mehr aus, wenn ein nicht erkannter Wert gesetzt wird.
- `Canvas2DContext.globalCompositeOperation` löst keine Ausnahme mehr aus, wenn ein nicht erkannter Wert gesetzt wird und unterstützt nicht mehr den nicht standardmäßigen Wert `darker`.
- Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element, wenn es durch Aufrufen von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwenden von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen festlegen können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in vorherigen Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und dem Verhalten anderer Browser.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dadurch können Sie {{cssxref("length")}}-Werte als mathematische Ausdrücke angeben.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Unterrechtecke von Hintergrundbildern
  - : Die Funktion {{cssxref("-moz-image-rect")}} ermöglicht es, Unterrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wird hinzugefügt. Details und echte Artikelnamen kommen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)-DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Es wurden Änderungen daran vorgenommen, welche Informationen über den Stil besuchter Links mithilfe von CSS-Selektoren erhalten werden können. Dies könnte einige Webanwendungen betreffen.

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
        Gibt die Breite in Leerzeichen von einem Tabulatorzeichen (U+0009) beim
        Rendern von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es Ihnen, die Dimensionen zu steuern, in denen ein Element skaliert werden darf.
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
      <td>Wird angewendet, um Elemente zu stylen, deren Plugins abgestürzt sind.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf den Submit-Button in Formularen angewendet, wenn eines oder mehrere der Felder
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
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, wenn deren Inhalte ungültig
        sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die
        das <code>required</code>-Attribut nicht spezifizieren.
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
        Ermöglicht es, das Aussehen eines Elements zu spezifizieren, wenn Gecko der Meinung ist,
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
      <td>Ermöglicht das Gruppieren von Selektoren und die Faktorisierung von Kombinatoren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht es, {{cssxref("length")}}-Werte als
        mathematische Ausdrücke anzugeben.
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                             |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                            |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Rendering-Änderungen wurden auch vorgenommen, um die neueste Spezifikation zu erfüllen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                         |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Unschärferadius aus Vernunft- und Leistungsgründen auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Table-Group-Elemente (`<thead>`, `<tbody>` und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element einen randlosen Aero Glass-Effekt verleiht.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio)-Medienmerkmal wurde hinzugefügt, sodass das Verhältnis der Gerät-Pixel zu CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Umgang mit CSS {{cssxref("length")}}-Einheiten wurde überarbeitet, um besser auf andere Browser abgestimmt zu sein und absolute Längen basierend auf der DPI des Geräts genauer in Bildschirm-Pixel umzurechnen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- SVG als Bilder und CSS-Hintergründe verwenden
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie als CSS-{{cssxref("background-image")}} verwenden.
- Medien-`buffered`-Attribut-Unterstützung
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, was Ihnen ermöglicht, festzustellen, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien-`preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der Eigenschaften `x`, `y`, `dx` und `dy` auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}}-Elementen angeben. So können Sie die Positionierung jedes Zeichens in einer Zeichenfolge individuell steuern.

### DOM

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-typisierte Arrays wurde hinzugefügt; dies ermöglicht die Manipulation von Puffer, die rohe Daten mit nativen Datentypen enthalten. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Abrufen von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt verfügt jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die in Internet Explorer entstandenen APIs `setCapture()` und `releaseCapture()` wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Manipulation der Browserhistorie](/de/docs/Web/API/History_API)
  - : Das bestehende Document-Historienobjekt, verfügbar über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit zur Erstellung von Animationen bietet, die mit einer synchronisiert sind.
- Touch- und Multitouch-Ereignisse
  - : Unterstützung für Touch- und Multitouch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen für HTML-Elemente haben sich geändert

Für mehrere HTML-Elemente wurden die DOM-Schnittstellen auf die in der HTML5-Spezifikation geforderten Schnittstellen geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM über das `wrap`-DOM-Attribut gesteuert werden. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden ausgeführt, sobald sie verfügbar sind (ohne Beibehaltung der Reihenfolge), und Skripte ohne src-Attribut werden synchron ausgeführt. Um einzufügen, dass Skripte mit dem src-Attribut in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` auf ihnen.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es Ihnen, zu bestimmen, welches {{HTMLElement("script")}}-Elementskript derzeit ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute)- und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute)-Ereignisse werden vor und nach der Ausführung eines Skript-Elements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; damit können Sie leicht die aktuelle Textauswahl oder die Cursorposition in einem Browserfenster ändern.
- Unterstützung für das `window.directories`-Objekt und das `directories`-Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwendung `personalbar` stattdessen. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu DOM-Benutzungsschnittstellenereignissen hinzugefügt; diese nicht standardmäßige Eigenschaft ermöglicht es Ihnen, den Typ des Geräts zu bestimmen, das ein Ereignis erzeugt hat.
- Das [`Document`](/de/docs/Web/API/Document)-[`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert keine `<` und `>` mehr um den Tag-Namen im Quirks-Modus.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)-Methoden wurden hinzugefügt, wodurch Elemente weiterhin Mausereignisse verfolgen können, selbst wenn die Maus außerhalb ihres normalen Verfolgungsbereichs ist, nachdem ein `mousedown`-Ereignis aufgetreten ist.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; damit können Sie feststellen, wie oft ein Dokument gezeichnet wurde. Dies kann beim Testen der Leistung Ihrer Webanwendung nützlich sein.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header stattdessen. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gibt jetzt die Antwort als JavaScript-typisiertes Array und als String aus, indem die Gecko-spezifische `mozResponseArrayBuffer`-Eigenschaft benutzt wird.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druckpegel auf unterstützten druckempfindlichen Eingabegeräten anzeigt.
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methoden ermöglichen es, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument)-Methode ermöglicht es, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` löst jetzt eine `SYNTAX_ERR`-Ausnahme aus, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die SVG-Eigenschaften eines Elements mit derselben Kurzsyntax wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Einzelheiten.
- Das Dokumentenstamm hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Status des privaten Browsermodus beschreibt, einschließlich eines Hinweises darauf, ob der private Browsing-Modus temporär oder permanent für die Sitzung ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode ist jetzt optional, wie bei allen anderen großen Browsern.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimale erlaubte Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)- und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)-Methode ist jetzt eine Einstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann durch eine Einstellung wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein Mozilla-Vorschlag, der Webdesigner und Serveradministratoren helfen soll, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website erlaubt, Browser anzuweisen, dass nur über HTTPS kommuniziert werden soll, anstelle der Verwendung von HTTP.
- [Der X-FRAME-OPTIONS-Antwortheader](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwortheader, der in Internet Explorer 8 eingeführt wurde, wird nun von Firefox unterstützt. Dadurch können Websites angeben, ob ihre Seiten in Frames verwendet werden können und, falls ja, ob dies auf denselben Ursprung beschränkt werden soll.
- [Änderungen am User Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : Um die Menge an Daten und Entropie zu verringern, die in HTTP-Anfragen gesendet wird (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden die Tokens für Krypto-Stärke und Sprache aus dem User Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird eine zusätzliche Übereinstimmung mit dem ECMAScript 5-Standard aufweisen.

### Entwicklerwerkzeuge

- [Verwendung der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web-Konsolen-Werkzeug ist eine nützliche Debugging-Hilfe sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig in Gecko 2.0 deaktiviert. Sie können sie wieder aktivieren, indem Sie die Einstellung `devtools.errorconsole.enabled` auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehenden Erweiterungen für Firefox 4 siehe [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons brechen, daher lesen Sie den Artikel unbedingt.

Wenn Sie ein Theme-Entwickler sind, sollten Sie die [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige wichtige Änderungen zu verstehen, deren Kenntnis Sie benötigen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Referenzen auf häufig verwendete Services zu erhalten, wie den Präferenzdienst oder den Fenstervermittler, unter anderem.
- [JS-ctypes-API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes-API ermöglicht es, C-kompatible fremde Bibliotheksfunktionen ohne die Verwendung von XPCOM aufzurufen.
- [Add-ons-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und bietet Möglichkeiten, Add-ons zu installieren und zu entfernen.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht-modale Benachrichtigungen an den Benutzer zu präsentieren. Sie können sehen, wie Sie diese API verwenden in [Verwenden von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications).
- [Laden von Code-Modulen über Chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:**-URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, den Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download erfolgt ist. Dieses Modul kümmert sich um Probleme im Zusammenhang mit dem privaten Surfen für Sie.
- [Leistungsmessung mit dem PerfMeasurement.jsm-Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API, um Leistungsdaten auf CPU-Ebene in JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es ermöglicht, beliebige Bytes aus einem Stream in einen String zu lesen, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet nun die IterSimpleEnumerator()- und IterStringEnumerator()-Helper an, um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Arbeiter in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Arbeiter für privilegierten Code; dies ermöglicht die Verwendung von Dingen wie [js-ctypes](/de/docs/js-ctypes) aus Arbeitern in Erweiterungen und Anwendungs-Code.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardmäßige) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger gleichzeitig auf einem Touchscreen zu verfolgen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn ein Dokument-Stammelement erstellt wird, jedoch bevor irgendwelche Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am `<xul:tabbrowser>`-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Erweiterungen betreffen, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs, diese Änderungen ändern auch die Tableiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Werkzeugleisten-Buttons hineinzuziehen.

- Die `TabClose`-, `TabSelect`- und `TabOpen`-Ereignisse werden nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`) hochgebubbelt. Ereignis-Hörer für diese Ereignisse sollten zu `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist nicht mehr ein anonymes Kind des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugänglich sein. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für mehr Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um ein Array der aktuell sichtbaren Tabs zu erhalten; dies ermöglicht es Ihnen zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; diese wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element ins Spiel zu bringen.
- Die neue `tabbrowser.tabs`-Eigenschaft wurde hinzugefügt, die es Ihnen ermöglicht, einfach eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es, Tabs anzuheften oder abzupinnen (d.h. sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden dem `<xul:tabbrowser>` hinzugefügt, um Tab-modale Alarme zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie `popup` weiterhin verwenden, werden Sie auf Probleme stoßen, da das Element keine besondere Bedeutung mehr hat. Beispielsweise kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die den Knoten angibt, auf dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch die Hinzufügung eines Trigger-Ereignisparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; diese gibt den Anker zurück, der bei der Erstellung des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt die Attribute `fade` und `flip`, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil-Benachrichtigungspanels zu konfigurieren.

#### Unterstützung für Remote-XUL entfernt

Remote-XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP angeboten werden; zudem können Sie XUL-Dokumente nicht mehr mit `file://`-URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmte Domains zuzulassen, Remote-XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es jetzt, das `element`-Attribut zu verwenden, um ein Element zum Skalieren anzugeben, anstatt das Fenster zu skalieren.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das angibt, dass der Skalierer für ein Fenster anstelle eines Elements bestimmt ist, um zu verhindern, dass der Fenster-Skalierer zweimal gezeichnet wird.
- Das Attribut "active" wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue Pseudoklasse `:-moz-window-inactive` verwenden, um unterschiedliche Stile auf Hintergrundfenster anzuwenden.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn es wahr ist, darf der Hardware-Ebenen-Manager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der Anpassung von `<xul:toolbox>` ausgelöst, sodass Sie Änderungen an Werkzeugleisten erkennen können.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können stattdessen die Pseudoklasse `:-moz-tree-row` verwenden.
- Der Überlauf-Button der Lesezeichen-Symbolleiste mit anonid chevronPopup ist nicht mehr anonym; er hat jetzt die ID "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dies wahr ist, beinhaltet der Inhaltsbereich des Fensters die Titelleiste, was das Zeichnen in die Titelleiste ermöglicht.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, die es Ihnen ermöglichen, festzustellen, wann Tabs angeheftet und nicht mehr angeheftet werden.
- Das neue `TabAttrModified`-Ereignis wird ausgelöst, wenn die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs geändert werden.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das Ihnen ermöglicht, festzustellen, ob ein Tab derzeit angeheftet ist oder nicht.
- Die setDirectionIndicator-Klasse auf `<xul:tree>`-Elementen hat schon seit einiger Zeit nichts mehr bewirkt; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element bietet jetzt das `chromemargin`-Attribut, mit dem Sie den Rand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festlegen können; Sie können dies verwenden, um in die Titelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>`-Element hat jetzt das `disablechrome`-Attribut; dies wird verwendet, um den Großteil des Chrome in einem Fenster auszublenden, wenn es zum Anzeigen von In-Browser-Benutzeroberflächen, wie `about:addons`, verwendet wird.
- Das `<xul:window>`-Element hat jetzt das `disablefastfind`-Attribut, das Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird beispielsweise vom Add-ons-Panel verwendet.
- Werkzeugleisten können nun extern zu Werkzeugkästen sein, während sie noch als Mitglied des `<xul:toolbox>` betrachtet werden, indem die `toolboxid`-Eigenschaft der `<xul:toolbar>` festgelegt wird. Außerdem bietet das `<xul:toolbox>`-Element jetzt die `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens betrachtet werden.
- Unterstützung zum Debuggen von XUL-Vorlagen durch Logging wurde hinzugefügt.

### Änderungen der Benutzeroberfläche, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, falls Sie zuvor Benutzeroberflächenelemente zur Statusleiste hinzugefügt haben.
- Verstecken von Browser-Chrome
  - : Sie können jetzt das Chrome des Browsers verbergen, wenn es wünschenswert ist; beispielsweise macht `about:addons` dies.

### Speicher

#### Verschiedene Speicher-API-Änderungen

- Die `mozIStorageBindingParamsArray`-Schnittstelle hat jetzt ein Längenattribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die `mozIStorageStatement.bindParameters()`-Methode gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die `mozIStorageConnection.clone()`-Methode wurde hinzugefügt, die es ermöglicht, eine vorhandene Datenbankverbindung zu klonen.
- Die `mozIStorageConnection.asyncClose()`-Methode wurde hinzugefügt, die es ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Rückruf an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die `mozIStorageConnection.setGrowthIncrement()`-Methode wurde hinzugefügt, die es ermöglicht, anzugeben, um wie viel eine Datenbankdatei jeweils vergrößert wird, um SQLite dabei zu helfen, Fragmentierungen zu reduzieren.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` gemeldet, anstatt als `NS_ERROR_FAILURE`.

### XPCOM

Zusätzlich zu den unten genannten spezifischen Änderungen ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht mehr eingefroren, unabhängig davon, was die Dokumentation sagen mag. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Einzelheiten zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 betreffen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet und Abfragen können asynchron ausgeführt werden. Das bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gegeben hat. Wesentlich entscheidender ist jedoch, dass die Schnittstelle `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Davon sind die meisten nur für den internen Gebrauch; jedoch ist die `places-connection-closed`-Benachrichtigung verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Ausgabenparameter der Array-Größe in mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und füllen, anstatt es für Sie erledigen zu lassen. Siehe [Anzeigen von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Einzelheiten.

### Schnittstellenänderungen

- Die `nsIDocShell`- und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das zur Optimierung von Codepfaden für Dokumente verwendet wird, die derzeit nicht sichtbar sind.
- Die `nsIMemory`-Methode `nsIMemory.isLowMemory()` ist veraltet. Sie sollten ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Niedriger-Speicher-Situationen zu achten.
- Das API für die Verarbeitung von Weiterleitungen auf HTTP-Kanälen hat sich geändert, um sie asynchron zu verarbeiten. Jeder Code, der Weiterleitungsverarbeitungen unter Verwendung von `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um stattdessen `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Rückrufhandler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen wurde.
- Die `nsINavHistoryResultObserver.batching()`-Methode wurde hinzugefügt, die es Ihnen ermöglicht, Places-Operationen in Batchs zu gruppieren und die Anzahl der zu liefernden Update-Benachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ involvierte Aufgaben ausführen (wie das Aktualisieren von Ansichten).
- Die seit langem veraltete `nsIPref`-Schnittstelle wurde endlich entfernt. Wenn Sie noch nicht zu `nsIPrefService` gewechselt haben, ist jetzt der richtige Zeitpunkt.
- Die `nsISessionStore`- und `nsISessionStartup`-Schnittstellen haben Änderungen erfahren, um die Sitzungswiederherstellung bei Bedarf zu unterstützen. Siehe die `nsISessionStore.restoreLastSession()`-Methode.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` der `nsIPrincipal`-Schnittstelle sowie die Attribute `origin`, `csp` und `URI` sind jetzt aus dem Skript verfügbar; zuvor waren sie nur aus nativem Code verfügbar.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Alarme; siehe [Verwendung von Tab-modalen Alarmen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt korrekt Hostnamen, die mit einem Punkt (".") beginnen, ab.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument bekommen, das es Ihnen ermöglicht, den Zeichensatz des Skripts anzugeben; wenn keiner angegeben ist, wird ASCII angenommen (wie immer angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Es war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die `nsIContentView`- und `nsIContentViewManager`-Schnittstellen wurden für Firefox Mobile hinzugefügt. Es stellt eine scrollfähige Inhaltsansicht dar, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuweisungen an, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu verstehen, wie sie funktionieren und wie Sie explizit fallible von unfehlbare Speicherzuweisungen anfordern können.

### Sonstige Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einzelnes JAR-Archiv, `omni.jar`, kombiniert, was die Startleistung verbessert, indem die I/O reduziert wird. Lesen Sie [Über omni.jar](/de/docs/About_omni.jar) für Details.
- Die Einstellung `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken freigegeben und wird nicht mehr verwendet.
- Add-ons, deren GUID sich von einer Version zur anderen ändert, können jetzt korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung der plattformspezifischen Verzeichnisse in Add-on-Bundles können Sie keine unterschiedlichen Standardpräferenzen für jede Plattform mehr bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Erweiterungen, die Binärkomponenten, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen werden, [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenster-Icons verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Verzeichnis der Erweiterung vom Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen hinzufügen, die [automatisch bei Anwendungsstart installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer angepassten Firefox-Distribution.

## Weitere Änderungen

- Nur die root chrome.manifest-Datei wird geladen
  - : Nur die root `chrome.manifest`-Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihr root `chrome.manifest` einfügen, um sie zu laden.
- Unterstützung für das Gopher-Protokoll entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Inhaltsprozess-Ereignisbehandlung](/de/docs/The_message_manager)
  - : Um die Unterstützung für out-of-process-Plugins und andere Multi-Prozess-Funktionen zu ermöglichen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Gestartete Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne einen Browserneustart zu erfordern.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde ebenfalls standardmäßig entfernt, jedoch existiert weiterhin die Unterstützung für die Installation von Plugins über diesen Ordner. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Erweiterungs-Manager durch Add-on-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child HWNDs nicht mehr verwendet
  - : Firefox erstellt keine Child-HWNDs mehr zur internen Verwendung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung unter Firefox 4 nicht funktionieren. Sie müssen entweder die Verwendung von HWNDs einstellen oder Ihren Code, der sich auf HWNDs verlässt, in ein [NPAPI](/de/docs/NPAPI)-Plugin einhüllen. Das erfordert viel Arbeit, also wenn Sie die direkte Verwendung von HWNDs vermeiden können, sollten Sie es tun.
- Gesten-Änderungen
  - : Die Drei-Finger-Aufwärts- und Abwärts-Wischgesten auf Trackpads wurden geändert, um standardmäßig die Firefox-Panoramaansicht (ehemals TabCandy) zu öffnen und zu schließen. Um diese auf die vorherigen Befehle "zum Anfang scrollen" und "zum Ende scrollen" zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
