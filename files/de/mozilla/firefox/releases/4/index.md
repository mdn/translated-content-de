---
title: Firefox 4 für Entwickler
short-title: Firefox 4
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und verbessert die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattformentwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Es ermöglicht auch, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einzubetten.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die mit Abschnitten in einem Dokument zusammenhängen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die dem Benutzer derzeit nicht relevant sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie in Firefox 4 implementiert, nicht mit dem endgültigen Standard kompatibel sind und allgemein nicht verwendet werden sollten.

#### Verbesserungen an Canvas

Folgende Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation zu bringen:

- Die Angabe eines negativen Radius beim Aufruf von `arc()` führt jetzt korrekt zu einer `INDEX_SIZE_ERR`-Ausnahme.
- Die Angabe von nicht endlichen Werten beim Aufruf von `createLinearGradient()` und `createRadialGradient()` löst jetzt `NOT_SUPPORTED_ERR` anstatt `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert führt nicht mehr zu einer Ausnahme; stattdessen werden nicht-positive Werte richtig ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert führt nicht mehr zu einer Ausnahme; stattdessen werden nicht-positive Werte richtig ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig größenveränderbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` führen keine Ausnahme mehr aus, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()`-Methode, die es Ihnen ermöglicht, eine speicherbasierte Datei zu erhalten, die ein Bild des Canvas-Inhalts enthält. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` führen keine Ausnahme mehr aus, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` führt keine Ausnahme mehr aus, wenn sie auf einen nicht erkannten Wert gesetzt wird, und unterstützt nicht mehr den nicht standardmäßigen `darker`-Wert.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element, das durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und entspricht dem Verhalten anderer Browser.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Damit können Sie {{cssxref("length")}}-Werte als mathematische Ausdrücke angeben.
- Selektorgliederung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung von Hintergrundbild-Unterrechtecken
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht es, Unterrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und echte Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)-DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Änderungen wurden vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht die Anpassung fortschrittlicher Funktionen von OpenType-Schriftarten.</td>
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
        Ermöglicht es Ihnen, die Dimensionen zu steuern, in denen ein Element
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
        Wird auf den Abschickknopf von Formularen angewendet, wenn eines oder mehrere Formularfelder
        nicht gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet,
        wenn deren Inhalt ungültig ist.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet,
        die das <code>required</code>-Attribut nicht angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet,
        die das <code>required</code>-Attribut angeben.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet,
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
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements anzugeben,
        wenn Gecko glaubt, dass es einen Fokus-Indikator haben sollte.
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
        Ermöglicht es, ein beliebiges Element als Hintergrund für
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                                  |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                                 |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Auch Änderungen beim Rendering wurden vorgenommen, um der neuesten Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                              |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt nun den Radius für Unschärfe auf 300px aus Gründen der Vernunft und Leistung.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für tabellengruppierte Elemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element ein rahmenloses Aero Glass-Aussehen verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/@media/-moz-device-pixel-ratio)-Medieneigenschaft wurde hinzugefügt, so dass das Verhältnis der Geräte-Pixel pro CSS-Pixel in [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Behandlung von CSS-{{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in reale Pixelzahlen auf dem Bildschirm zu übersetzen, basierend auf der DPI des Geräts.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Video-Performance in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie als CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung des `buffered`-Attributs für Medien
  - : Das `buffered`-Attribut bei {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei zwischengespeichert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- `preload`-Attribut für Medien
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen bei der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen angeben. Dies ermöglicht Ihnen die Positionierung jedes Zeichens in einem String individuell zu steuern.

### DOM

- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript Typed Arrays wurde hinzugefügt; dies ermöglicht Ihnen die Manipulation von Puffern, die Rohdaten mit nativen Datentypen enthalten. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API), und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalten von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt verfügt jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Einfangen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browser-Verlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlaufsobjekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt zugänglich ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen unter Verwendung von MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` die Erstellung von Animationen ermöglicht, die miteinander synchronisiert sind.
- Touch- und Multitouch-Ereignisse
  - : Unterstützung für Touch- und Multitouch-Ereignisse wurde hinzugefügt.

#### Änderungen an DOM-Schnittstellen von HTML-Elementen

Bei mehreren HTML-Elementen wurden ihre DOM-Schnittstellen auf die in der HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Die Umhüllung eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM gesteuert werden, über das `wrap`-DOM-Attribut. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich nun standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden verfügbar, sobald sie geladen sind (ohne Beibehaltung der Reihenfolge) und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um zu bewirken, dass Skripts mit dem `src`-Attribut in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` darauf.
- DOM-Objekte vom Typ [`File`](/de/docs/Web/API/File) bieten jetzt eine `url`-Eigenschaft.
- [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)-Unterstützung für `XMLHttpRequest`.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es Ihnen zu bestimmen, welches {{HTMLElement("script")}}-Element gerade ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) Ereignisse werden vor und nach der Skriptausführung eines Skriptelements ausgelöst.
- Die Eigenschaft `mozSourceNode` wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die Methode [`Selection.modify()`](/de/docs/Web/API/Selection/modify) wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; sie ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition in einem Browserfenster leicht zu ändern.
- Unterstützung für das `window.directories`-Objekt und die `directories`-Funktion für [`window.open`](/de/docs/Web/API/Window/open), welche in keinem anderen Browser unterstützt wird, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die Eigenschaft [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardmäßige Eigenschaft ermöglicht es Ihnen, den Typ des Geräts zu bestimmen, das ein Ereignis generiert hat.
- Das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis des [Documents](/de/docs/Web/API/Document) wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert in den Quirks-Modus nicht mehr `<` und `>` um den Tag-Namen.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, wodurch es möglich wird, dass Elemente weiterhin Mausereignisse verfolgen, auch wenn sich die Maus außerhalb ihres normalen Überwachungsbereichs befindet, nachdem ein `mousedown`-Ereignis aufgetreten ist.
- Die Eigenschaft `window.mozPaintCount` wurde hinzugefügt; sie ermöglicht es Ihnen festzustellen, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, um die Leistung Ihrer Webanwendung zu testen.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation) Header. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt stellt nun die Antwort sowohl als JavaScript-typisierte Array als auch als Zeichenfolge bereit, unter Verwendung der Gecko-spezifischen `mozResponseArrayBuffer`-Eigenschaft.
- [Mausevents](/de/docs/Web/API/MouseEvent) beinhalten nun eine `mozPressure`-Eigenschaft, die den Druck auf unterstützten drucksensitiven Eingabegeräten angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erzeugen, die lokale Dateien referenzieren.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektorstring ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit der gleichen Kurzsyntax wie bei CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Die Dokumentenwurzel hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Status des privaten Surfmodus beschreibt, einschließlich eines Hinweises darauf, ob der private Surfmodus für die Sitzung vorübergehend oder dauerhaft ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie es in jedem anderen Hauptbrowser der Fall ist.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimal zulässige Verzögerung für die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch Setzen einer Präferenz wieder aktiviert werden.

### Sicherheit

- [Content-Sicherheitsrichtlinie (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Die Content-Sicherheitsrichtlinie (CSP) ist ein von Mozilla vorgeschlagenes Konzept, das Webdesignern und Serveradministratoren hilft, festzulegen, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist ein Sicherheitsmerkmal, das einer Website erlaubt, Browsern mitzuteilen, dass nur über HTTPS und nicht über HTTP kommuniziert werden soll.
- [Der X-FRAME-OPTIONS Response-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte X-FRAME-OPTIONS HTTP-Response-Header wird jetzt von Firefox unterstützt. Dadurch können Seiten angeben, ob ihre Seiten in Frames verwendet werden dürfen und, falls ja, ob dies auf den gleichen Ursprung beschränkt sein sollte.
- [User-Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)-Änderungen
  - : Zur Reduzierung der Menge an Daten und Entropie, die in HTTP-Anfragen gesendet werden (siehe [Firefox Bug 572650](https://bugzil.la/572650)), wurden das Token für Kryptostärke und Sprachinformationen aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die Änderungen in JavaScript 1.8.5 sehen Sie sich [Neues in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5) an. JavaScript in Firefox 4 wird zusätzlich Anforderungen des ECMAScript 5 Standards entsprechen.

### Entwicklerwerkzeuge

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Werkzeug ist eine nützliche Debugging-Hilfe sowohl für Web- als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die Präferenz `devtools.errorconsole.enabled` auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 sehen Sie sich [Aktualisierung von Erweiterungen für Firefox 4](/de/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4) an. Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons beeinträchtigen, daher sollten Sie diesen Artikel lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige wichtige Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Verweise auf häufig verwendete Dienste zu erhalten, wie den Präferenzdienst oder den Fenstervermittler, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API macht es möglich, C-kompatible Fremdbibliotheken zu verwenden, ohne XPCOM zu nutzen.
- [Add-ons Manager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : Der neue Add-ons Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht-modale Benachrichtigungen dem Benutzer zu präsentieren. Sie können sehen, wie man diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwendet.
- [Laden von Code-Modulen aus chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:** URLs laden, auch innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, mit dem Sie den Pfad des Verzeichnisses erfahren können, in dem der letzte Download erfolgte. Dieses Modul behandelt für Sie Probleme im Zusammenhang mit dem privaten Surfen.
- [Messung der Leistung mit dem PerfMeasurement.jsm Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API, um CPU-Leistungsdaten in JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die Methode `readInputStreamToString()`, mit der Sie beliebige Bytes von einem Stream in einen String einlesen können, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt die Hilfsmittel IterSimpleEnumerator() und IterStringEnumerator(), um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Arbeiter in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Arbeiter für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Arbeitern in Erweiterungen und Anwendungs-Code zu nutzen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht-standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es, mehrere Fingerbewegungen auf einem Touchscreen gleichzeitig zu verfolgen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, aber bevor irgendein Skript darauf ausgeführt wird.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Erweiterungen beeinflussen, die mit Registerkarten interagieren. Zusätzlich zur Unterstützung von App-Registerkarten ändern diese Änderungen auch die Tab-Leiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Werkzeugleistenbuttons hineinzuziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` blubbern nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`) hinauf. Ereignis-Listener für diese Ereignisse sollten `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Kontextmenü für Registerkarten ist nicht mehr ein anonymes Kind des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [dieser Blog-Post](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, damit Sie ein Array der aktuell sichtbaren Tabs erhalten können; dies ermöglicht es Ihnen, festzustellen, welche Tabs im aktuellen Tabset sichtbar sind. Dies wird z. B. von Firefox Panorama verwendet.
- Die neue `showOnlyTheseTabs`-Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon`-Methode wurde hinzugefügt, die es Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element aufrufen zu müssen.
- Die neue `tabbrowser.tabs`-Eigenschaft wurde hinzugefügt, die es Ihnen erleichtert, eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen `pinTab` und `unpinTab`-Methoden erlauben es Ihnen, Tabs zu befestigen und zu lösen (das heißt, zwischen App-Tabs und regulären Tabs umzuschalten).
- Die `getTabModalPromptBox`-Methode und das `tabModalPromptShowing`-Attribut wurden dem `<xul:tabbrowser>` hinzugefügt, um tab-modale Alerts zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiter `popup` verwenden, werden Sie auf Glitches stoßen, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die das Node angibt, bei dem das Ereignis aufgetreten ist, das zum Öffnen des Popups führte. Dies erforderte auch die Hinzufügung eines Ereignisparameters zur `openPopup`-Methode. Darüber hinaus wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt die Verankerung zurück, die beim Erstellen des Popups festgelegt wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade`- und `flip`-Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil-Benachrichtigungspanele zu konfigurieren.

#### Entfernte Unterstützung für Remote-XUL

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können Sie XUL-Dokumente nicht mehr mit `file://`-URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmte Domains zu erlauben, Remote XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert nun korrekt bei XBL-Feldern.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen jetzt, das `element`-Attribut zu spezifizeren, um ein Element zu skalieren, anstatt das Fenster zu skalieren.
- Das `<xul:resizer>`-Element hat nun ein `type`-Attribut, das es Ihnen ermöglicht, anzugeben, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive`-Pseudoklasse verwenden, um verschiedenen Styles zu Hintergrundfenstern zuzuweisen.
- Das `emptytext`-Attribut ist nun veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn dieses auf wahr gesetzt ist, darf der Hardware-Ebenen-Manager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt nun die `bottom`- und `right`-Attribute.
- Ereignisse werden jetzt während der `<xul:toolbox>`-Anpassung ausgelöst, sodass Sie Änderungen an den Werkzeugleisten erkennen können.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die `:-moz-tree-row`-Pseudoklasse stattdessen verwenden.
- Der Überlauf-Button in der Lesezeichen-Symbolleiste mit anonymem ID `chevronPopup` ist nicht länger anonym; er hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert war).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dieses auf `true` gesetzt ist, umfasst das Inhaltsgebiet eines Fensters die Titelleiste, was das Zeichnen in der Titelleiste ermöglicht.
- Neue `TabPinned` und `TabUnpinned`-Ereignisse sind verfügbar, die es Ihnen ermöglichen, zu erkennen, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, mit dem Sie feststellen können, ob ein Tab derzeit angeheftet ist oder nicht.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hat seit einiger Zeit nichts mehr gemacht; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element verfügt jetzt über ein `chromemargin`-Attribut, mit dem Sie den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festlegen können; Sie können dies verwenden, um in die Titelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dieses wird verwendet, um den größten Teil des Chromes in einem Fenster zu verbergen, wenn es verwendet wird, um In-Browser-Benutzeroberflächen anzuzeigen, wie `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt dies nicht unterstützt. Dies wird z. B. vom Add-ons-Panel verwendet.
- Werkzeugleisten können nun außerhalb von Werkzeugkästen sein, während sie immer noch als Mitglied des `<xul:toolbox>` betrachtet werden, indem die `toolboxid`-Eigenschaft des `<xul:toolbar>` gesetzt wird. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens betrachtet werden.
- Unterstützung wurde hinzugefügt, um XUL-Vorlagen für Debugging-Zwecke zu protokollieren.

### Benutzeroberflächenänderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Wenn Sie in der Vergangenheit UI zur Statusleiste hinzugefügt haben, müssen Sie Ihre Erweiterung aktualisieren, um dies zu nutzen.
- Verbergen von Browser-Chrome
  - : Sie können jetzt das Chrome des Browsers verbergen, wenn es wünschenswert ist; zum Beispiel macht `about:addons` dies.

### Speicherung

#### Verschiedene Änderungen an der Speicher-API

- Die `mozIStorageBindingParamsArray`-Schnittstelle hat jetzt ein Längenattribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die `mozIStorageStatement.bindParameters()`-Methode gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die `mozIStorageConnection.clone()`-Methode wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die `mozIStorageConnection.asyncClose()`-Methode wurde hinzugefügt, die es Ihnen erlaubt, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Callback an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die `mozIStorageConnection.setGrowthIncrement()`-Methode wurde hinzugefügt, die es Ihnen erlaubt, die Menge anzugeben, um die eine Datenbankdatei jeweils wachsen soll, um SQLite dabei zu helfen, Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT`-Fehler wird nun als `NS_ERROR_STORAGE_CONSTRAINT` anstatt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten angeführten spezifischen Änderungen ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht eingefroren, egal was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt assoziiert ist; dies ersetzt einen häufigen Anwendungsfall der jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern überwacht werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gibt. Wesentlicher ist jedoch, dass die Schnittstelle `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser dabei zu helfen, den Herunterfahrungsprozess des Places-Service zuverlässiger zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch bestimmt, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Service seinen Herunterfahrungsprozess abgeschlossen hat.
- Der Array-Größenausgabeparameter in mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und befüllen, anstatt dies erledigen zu lassen. Siehe [Anzeigen von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die Schnittstellen `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um Optimierungen von Code-Pfaden für Dokumente zu ermöglichen, die derzeit nicht sichtbar sind.
- Die `nsIMemory`-Methode `nsIMemory.isLowMemory()` wurde abgelöst. Sie sollten ["Speicherdruck"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Situationen mit niedrigem Speicher zu achten.
- Die API zur Bearbeitung von Weiterleitungen auf HTTP-Kanälen wurde geändert, um sie asynchron abwickeln zu können. Jeder Code, der die Verarbeitung von Weiterleitungen mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Diese akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, um eine Möglichkeit zu bieten, Places-Operationen in Chargen zu gruppieren, wodurch die Anzahl der gelieferten Aktualisierungsbenachrichtigungen reduziert wird, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben durchführen (wie das Auffrischen von Ansichten).
- Die längst veraltete `nsIPref`-Schnittstelle wurde endlich entfernt. Wenn Sie nicht bereits zu `nsIPrefService` gewechselt sind, ist jetzt die Zeit dafür.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` erhielten Änderungen, um das Session-Wiederherstellen auf Abruf zu unterstützen. Siehe die `nsISessionStore.restoreLastSession()`-Methode.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie die Attribute `origin`, `csp`, und `URI` der `nsIPrincipal`-Schnittstelle sind jetzt vom Skript aus zugänglich; früher waren sie nur aus nativen Code zugänglich.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Alerts; siehe [Verwendung von tab-modalen Prompts](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` weist jetzt Hostnamen zurück, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` verfügt jetzt über ein optionales Argument, mit dem Sie den Zeichensatz des Skripts angeben können; wenn keiner angegeben wird, wird ASCII angenommen (wie es immer angenommen wurde).
- Die Schnittstelle `nsIAccessProxy` wurde entfernt. Es handelte sich um ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Sie repräsentieren eine scrollbare Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die Schnittstelle `nsIDiskCacheStreamInternal` wurde hinzugefügt.
- Die Schnittstelle `nsIExternalURLHandlerService` wurde hinzugefügt.
- Die Schnittstelle `nsISyncJPAKE` wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Die Schnittstelle `nsIINIParserWriter` wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben von INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuteiler, die garantiert nicht Null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit fallible gegenüber unfehlbarer Speicherzuweisung anfordern.

### Andere Änderungen

- Die meisten der Ressourcen, die in Firefox enthalten sind, wurden in ein einziges JAR-Archiv, `omni.jar`, zusammengefasst, was die Startzeit verbessert, indem die E/A-Zugriffe verringert werden. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Präferenz `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken offengelegt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt richtig aktualisiert werden.
- Als ein Nebeneffekt der Entfernung von plattformspezifischen Verzeichnissen in Addon-Bundles können Sie keine verschiedenen Standardpräferenzen mehr für jede Plattform bereitstellen.
- [Erweiterungen werden standardmäßig nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten, mit jS-ctypes geladene DLLs, [Suchplugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [erstellen SQLite-Datenbank](/de/docs/XUL_School/Local_Storage#sqlite), oder Dinge relativ zum Verzeichnis der Erweiterung aus dem Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einfügen, die [bei jedem Start der Anwendung automatisch installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer benutzerdefinierten Firefox-Distribution.

## Andere Änderungen

- Nur die root chrome.manifest-Datei wird geladen
  - : Nur die root `chrome.manifest`-Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrer root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Ereignisbehandlung von Inhaltsprozessen](/de/docs/The_message_manager)
  - : Um die Unterstützung von out-of-process-Plugins und anderen multiprozessfähigen Funktionen zu ermöglichen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapped Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder downgradiert) werden können, ohne dass ein Neustart des Browsers erforderlich ist.
- Standardplugin entfernt
  - : Das Standardplugin wurde entfernt. Der Anwendungsverzeichnis für Plugins wurde standardmäßig ebenfalls entfernt, jedoch bleibt die Unterstützung für die Installation von Plugins über diesen Ordner bestehen. Siehe [Firefox Bug 533891](https://bugzil.la/533891).
- Erweiterungs-Manager durch Addon-Manager ersetzt
  - : Der `nsIExtensionManager` wurde durch [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) ersetzt.
- Keine Child-HWNDs mehr verwendet
  - : Firefox erstellt keine Child-HWNDs mehr für seine interne Nutzung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung unter Firefox 4 nicht funktionieren. Sie müssen entweder die Verwendung von HWNDs einstellen oder Ihren Code, der auf HWNDs angewiesen ist, in ein [NPAPI](/de/docs/NPAPI)-Plugin einbinden. Das ist eine Menge Arbeit, daher sollten Sie, wenn Sie vermeiden können, HWNDs direkt zu verwenden.
- Gestenänderungen
  - : Die Drei-Finger-Aufwärts- und Abwärtswischgesten auf Trackpads wurden so geändert, dass sie standardmäßig die Firefox Panorama-Anzeige (ehemals TabCandy) öffnen und schließen. Um diese auf die vorherigen Befehle zum Scrollen nach oben und unten zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.
