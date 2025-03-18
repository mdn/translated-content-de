---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{FirefoxSidebar}}

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und erhöht die Sicherheit. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Entwickler der Gecko-Plattform verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet nun den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Dadurch kann Inhalt [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einbinden.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Überblick über Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}} Element, Datenvalidierung und mehr.
- [HTML5 Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt nun die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das für alle Elemente gilt, wird verwendet, um Inhalte auf einer Webseite zu verstecken, die für den Benutzer derzeit nicht relevant sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt jetzt auch folgende neue HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, so wie sie in Firefox 4 implementiert sind, nicht mit dem finalen Standard kompatibel sind und generell nicht verwendet werden sollten.

#### Verbesserungen bei Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}} Implementierung näher an die Spezifikation heranzuführen:

- Das Angeben eines negativen Radius bei dem `arc()` Aufruf löst nun korrekt eine `INDEX_SIZE_ERR` Ausnahme aus.
- Das Übergeben nicht-finiter Werte bei dem Aufruf von `createLinearGradient()` und `createRadialGradient()` wirft nun `NOT_SUPPORTED_ERR` statt `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert wirft keine Ausnahme mehr aus; statt dessen werden nicht-positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert wirft keine Ausnahme mehr aus; statt dessen werden nicht-positive Werte korrekt ignoriert.
- Die `putImageData()` Methode unterstützt nun die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth`, und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}} Elemente sind jetzt standardmäßig skalierbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}} Element unterstützt nun die Mozilla-spezifische `mozGetAsFile()` Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild des Canvas-Inhalts enthält. Weitere Informationen finden Sie unter [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr bei der Einstellung auf einen nicht-erkannten Wert.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn er auf einen nicht-erkannten Wert gesetzt wird und unterstützt nicht mehr den nicht standardmäßigen `darker` Wert.
- Die Unterstützung für das veraltete `<spacer>` Element, das in allen anderen Browsern nicht vorhanden war, wurde entfernt.
- Das `<isindex>` Element, wenn es durch den Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde, wird nun als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt nun das Klicken auf {{HTMLElement("input")}} Elemente, um den Dateiauswahldialog zu öffnen. Sehen Sie sich das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications) an.
- Das {{HTMLElement("input")}} Element unterstützt ein neues `mozactionhint` Attribut zur Angabe der Beschriftung für die Enter-Taste auf virtuellen Tastaturen.
- {{HTMLElement("script")}} Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}}, und {{HTMLElement("noframes")}} Elementen werden nun ausgeführt, was in früheren Firefox-Versionen nicht der Fall war. Dies entspricht der Spezifikation und passt das Verhalten anderer Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue CSS-Übergangunterstützung ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es Ihnen, {{cssxref("length")}} Werte als mathematische Ausdrücke anzugeben.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any` zur Gruppierung von Selektoren und Faktorisierung von Kombinatoren.
- Unterstützung für Hintergrundbild-Teilbilder
  - : Die {{cssxref("-moz-image-rect")}} Funktion ermöglicht es, Unterrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und echte Artikelnamen kommen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
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
      <td>Ermöglicht die Anpassung erweiterter Funktionen von OpenType-Schriften.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichen eines Tab-Zeichens (U+0009) beim Rendern von
        Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es Ihnen, die Dimensionen zu steuern, in denen ein Element
        verändert werden kann.
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
      <td>Verwendet, um Elemente zu stylen, deren Plugins abgestürzt sind.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formularfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf den Absende-Button in Formularen angewendet, wenn ein oder mehrere
        Felder nicht gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, wenn deren
        Inhalt ungültig ist.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die
        nicht das <code>required</code> Attribut angeben.
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
        Ermöglicht Ihnen, das Erscheinungsbild eines Elements anzugeben, wenn
        Gecko der Meinung ist, dass seine Fokusanzeige gerendert werden sollte.
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
      <td>Ermöglicht Ihnen, Selektoren zu gruppieren und Kombinatoren zu faktorisieren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht es Ihnen, {{cssxref("length")}} Werte als mathematische
        Ausdrücke anzugeben.
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                                 |
| ---------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht länger unterstützt.                                                                                                                                                              |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um die neueste Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                             |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}} Eigenschaft begrenzt jetzt den Unschärferadius aus Gründen der Vernunft und Leistung auf 300px.
- Die {{cssxref("overflow")}} Eigenschaft gilt nicht mehr für Tabellen-Gruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance` Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element ein rahmenloses Aero Glas Aussehen verleiht.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) Medienmerkmal wurde hinzugefügt, das die Verwendung des Verhältnisses zwischen Gerätepixeln pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht.
- Die Verarbeitung von CSS {{cssxref("length")}} Einheiten durch Gecko wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen basierend auf der DPI des Geräts genauer in Pixelanzahlen auf dem Bildschirm umzuwandeln.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks zur optimalen Nutzung der Grafik- und Videoleistung in Firefox 4.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Die Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können SVG nun mit dem {{htmlelement("img")}} Element sowie als CSS {{cssxref("background-image")}} verwenden.
- Unterstützung des `buffered` Attributs bei Medien
  - : Das `buffered` Attribut bei {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen wird jetzt unterstützt, sodass Sie bestimmen können, welche Bereiche einer Mediendatei zwischengespeichert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload` Attribut
  - : Das `preload` Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer` Attribut. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elemente sowie die `nsIDOMHTMLMediaElement` Schnittstelle.
- Verbesserungen bei der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen angeben. Dies ermöglicht es Ihnen, die Positionierung jedes Zeichens in einem String individuell zu steuern.

### DOM

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung wurde für JavaScript typisierte Arrays hinzugefügt; dies ermöglicht es Ihnen, Puffer mit Rohdaten unter Verwendung nativer Datentypen zu manipulieren. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API), und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalten von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range) Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassung von Mausevents auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulieren der Browser-Historie](/de/docs/Web/API/History_API)
  - : Das bestehende Dokument-Historienobjekt, verfügbar durch das [`window.history`](/de/docs/Web/API/Window/history) Objekt, unterstützt jetzt die neuen HTML5 `pushState()` und `replaceState()` Methoden.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neuer Event wurde hinzugefügt, der in Verbindung mit der `window.mozRequestAnimationFrame()` Methode und der `window.mozAnimationStartTime` Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### Änderungen an DOM-Schnittstellen von HTML-Elementen

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen gemäß der HTML5-Spezifikation geändert, wie nachstehend dargestellt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umschließen eines {{HTMLElement("textarea")}} Elements kann jetzt über das DOM gesteuert werden, über das `wrap` DOM-Attribut. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}} Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src` Attribut werden ausgeführt, sobald sie verfügbar sind (ohne Beibehaltung der Reihenfolge) und Skripte ohne das `src` Attribut werden synchron ausgeführt. Wenn Sie möchten, dass eingefügte Skripte mit dem `src` Attribut in Einfügungsreihenfolge ausgeführt werden, setzen Sie `.async=false` auf sie.
- DOM [`File`](/de/docs/Web/API/File) Objekte bieten jetzt eine `url` Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects) Unterstützung für XMLHttpRequest.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft ermöglicht es Ihnen festzustellen, welches {{HTMLElement("script")}} Element gerade ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute) Events werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode` Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify) Methode wurde dem [`Selection`](/de/docs/Web/API/Selection) Objekt hinzugefügt; dies ermöglicht es Ihnen einfach, die aktuelle Textauswahl oder den Cursor im Browserfenster zu ändern.
- Unterstützung für das `window.directories` Objekt und das `directories` Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie `personalbar` stattdessen. [Firefox Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardmäßige Eigenschaft ermöglicht es Ihnen festzustellen, welcher Gerätetyp ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement) Methode akzeptiert keine `<` und `>` um den Tag-Namen mehr im Quirks-Modus.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) Methoden wurden hinzugefügt, wodurch es möglich ist, dass Elemente Mausklicks verfolgen, auch wenn die Maus nach einem `mousedown` Ereignis außerhalb ihres normalen Trackingbereichs ist.
- Die `window.mozPaintCount` Eigenschaft wurde hinzugefügt; sie ermöglicht es Ihnen, zu bestimmen, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Web-Anwendung testen möchten.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation) Header stattdessen. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt stellt nun die Antwort als JavaScript typisiertes Array sowie als Zeichenkette dar, unter Verwendung der Gecko-spezifischen `mozResponseArrayBuffer` Eigenschaft.
- [Mausevents](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure` Eigenschaft, die den Druck auf unterstützten drucksensiblen Eingabegeräten anzeigt.
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) Methoden ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) Methode ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` löst jetzt eine `SYNTAX_ERR` Ausnahme aus, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die SVG-Eigenschaften eines Elements mit der gleichen Kurzschreibweise wie bei CSS setzen. Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Das Dokumenten-Root hat nun ein [„privatebrowsingmode” Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Browsing-Modus beschreibt, einschließlich eines Hinweises darauf, ob das private Browsing temporär oder dauerhaft für die Sitzung ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode ist jetzt optional, so wie in allen anderen großen Browsern.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Der Mindestverzug für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) Methoden ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch Setzen einer Präferenz wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein Mozilla-Vorschlag zur Unterstützung von Webdesignern und Serveradministratoren bei der Spezifizierung, wie Inhalte auf ihren Websites interagieren. Ziel ist die Erkennung und Abschwächung von Angriffen, einschließlich Cross-Site-Scripting und Dateninjektionsangriffen.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser darüber zu informieren, dass sie nur mit HTTPS kommunizieren sollten, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwort-Header, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzugeben, ob und unter welchen Bedingungen ihre Seiten in Frames verwendet werden können, und ob dies auf denselben Ursprung beschränkt sein soll.
- [Änderungen im User-Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : Um die Menge der beim HTTP-Anfragen gesendeten Daten und deren Entropie zu reduzieren (siehe [Firefox Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke und Sprach-Tokens aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die Änderungen, die in JavaScript 1.8.5 implementiert wurden, siehe [Neues in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Konformität mit dem ECMAScript 5 Standard aufweisen.

### Entwicklertools

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Werkzeug ist eine nützliche Debugging-Hilfe für Webentwickler und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Die Fehlermeldungskonsole ist standardmäßig in Gecko 2.0 deaktiviert. Sie können sie reaktivieren, indem Sie die `devtools.errorconsole.enabled` Präferenz auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 siehe [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons unterbrechen, also lesen Sie diesen Artikel unbedingt.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige wichtige Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Codemodule

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Codemodul bietet Getter, die es einfach machen, Referenzen zu häufig genutzten Diensten, wie zum Beispiel dem Präferenzdienst oder dem Fenster-Vermittler, zu erhalten.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible Fremdbibliotheksfunktionen zu verwenden, ohne XPCOM zu nutzen.
- [Add-ons Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und ermöglicht es, Add-ons zu installieren und zu entfernen.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht modale Benachrichtigungen dem Benutzer zu präsentieren. Sie können sehen, wie Sie diese API verwenden, in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications).
- [Laden von Codemodulen über chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können nun JavaScript-Codemodule unter Verwendung von **chrome:** URLs laden, auch innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm) Codemodul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, mit dem Sie den Pfad des Verzeichnisses erfahren, in das der letzte Download erfolgt ist. Dieses Modul kümmert sich um Probleme im Zusammenhang mit privatem Surfen für Sie.
- [Leistungsmessung mit dem PerfMeasurement.jsm Codemodul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm) Codemodul bietet eine API zur Messung von CPU-Leistungsdaten in JavaScript-Code.

#### Verschiedene Änderungen an Codemodulen

- Das `NetUtil.jsm` Codemodul bietet jetzt die `readInputStreamToString()` Methode, die es ermöglicht, beliebige Bytes aus einem Stream in einen String zu lesen, auch wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm Codemodul bietet jetzt die IterSimpleEnumerator() und IterStringEnumerator() Helfer, um über XPCOM-Enumeratoren zu iterieren.
- Sie können nun [Worker in JavaScript-Codemodulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Worker für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Workern in Erweiterungen und Anwendungscode zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardmäßige) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es, mehrere Fingerbewegungen auf einem Touchscreen gleichzeitig zu verfolgen.

#### Andere DOM-Änderungen

- Die [neue Benachrichtigung "document-element-inserted"](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Dokumenten-Rootelement erstellt wurde, jedoch bevor Skripte darauf ausgeführt wurden.

### XUL

#### Änderungen am `<xul:tabbrowser>` Element

Mehrere Änderungen wurden am `<xul:tabbrowser>` Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Neben der Unterstützung von App-Tabs ändern diese Änderungen auch die Tableiste in eine Standard-Toolbar, die es dem Benutzer ermöglicht, Toolbar-Schaltflächen hinein zu ziehen.

- Die `TabClose`, `TabSelect` und `TabOpen` Events blubbern nicht mehr bis zum `<xul:tabbrowser>` Element (`gBrowser`). Event-Listener für diese Events sollten zu `gBrowser.tabContainer` und nicht direkt zu `gBrowser` hinzugefügt werden.
- Das Tab-Kontextmenü ist nicht länger ein anonymes Kind des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überblendet werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Weitere Details siehe [dieser Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).
- Die neue `visibleTabs` Eigenschaft wurde hinzugefügt, damit Sie ein Array der derzeit sichtbaren Tabs erhalten können; das ermöglicht es, zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Die neue `showOnlyTheseTabs` Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon` Methode wurde hinzugefügt, die es ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>` Element zu ziehen.
- Die neue `tabbrowser.tabs` Eigenschaft wurde hinzugefügt, die es Ihnen einfach macht, eine Liste der Tabs in einem `<xul:tabbrowser>` Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen das Fixieren und Lösen von Tabs (d.h. das Umschalten zwischen App-Tabs und regulären Tabs).
- Die `getTabModalPromptBox` Methode und das `tabModalPromptShowing` Attribut wurden dem `<xul:tabbrowser>` hinzugefügt, um tabmodale Warnungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>` Element wird nicht mehr unterstützt; Sie sollten `<xul:menupopup>` stattdessen verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Probleme stoßen, da das Element keine spezielle Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>` XUL-Element hat jetzt eine `triggerNode` Eigenschaft, die den Knoten angibt, auf dem das Ereignis aufgetreten ist, das das Popup öffnete. Dies erforderte auch die Ergänzung eines Trigger-Event-Parameters zur `openPopup` Methode. Auch die `anchorNode` Eigenschaft wurde hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups festgelegt wurde.
- Das `<xul:panel>` Element bietet jetzt `fade` und `flip` Attribute, die verwendet werden, um das Verhalten neuer "Pfeil" Stile-Benachrichtigungspaneele zu konfigurieren.

#### Entfernte Unterstützung für Remote XUL

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; auch können Sie keine XUL-Dokumente mehr über `file://` URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch ein Whitelist-Feature, das bestimmte Domänen zulässt, Remote XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly` Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>` Element ermöglicht es jetzt, das `element` Attribut zu verwenden, um ein Element zum Größenänderungen anzugeben, anstatt das Fenster zu ändern.
- Das `<xul:resizer>` Element hat jetzt ein `type` Attribut, das ermöglicht, dass der Resizer für ein Fenster anstelle eines Elements spezifiziert wird, um zu verhindern, dass der Fensterresizer zweimal gezeichnet wird.
- Das "active" Attribut wird nicht länger auf aktiven XUL-Fenstern gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive` Pseudoklasse verwenden, um verschiedenen Fenstern unterschiedliche Stile zuzuweisen.
- Das `emptytext` Attribut ist jetzt veraltet; Sie sollten `placeholder` stattdessen verwenden.
- Das `<xul:window>` Element bietet nun ein `accelerated` Attribut; wenn dieses wahr ist, ist der Hardware-Layer-Manager berechtigt, das Fenster zu beschleunigen.
- Das `<xul:stack>` Element unterstützt jetzt die Attribute `bottom` und `right`.
- Events werden jetzt während der Anpassung von `<xul:toolbox>` ausgelöst, um Änderungen an Toolbars zu erkennen.
- Das `alternatingbackground` Attribut für `<xul:tree>` Elemente wird nicht mehr unterstützt; Sie können die Pseudoklasse `:-moz-tree-row` verwenden.
- Der Bookmarks Toolbar Überlauf-Button mit anonid chevronPopup ist nicht mehr anonym; er hat eine ID von "PlacesChevron".
- Das `<xul:tabs>` Element hat jetzt eine `tabbox` Eigenschaft, die die alte `_tabbox` Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert war).
- XUL `<xul:window>` Elemente haben jetzt das `drawintitlebar` Attribut; wenn dies wahr ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, was das Zeichnen in die Titelleiste ermöglicht.
- Neue `TabPinned` und `TabUnpinned` Events sind verfügbar, die es ermöglichen, zu erkennen, wann Tabs fixiert und gelöst werden.
- Das neue `TabAttrModified` Ereignis wird gesendet, wenn sich ein Tab-Attribut `label`, `crop`, `busy`, `image` oder `selected` ändert.
- `<xul:tab>` Elemente haben jetzt ein `pinned` Attribut, das Ihnen ermöglicht festzustellen, ob ein Tab derzeit fixiert ist oder nicht.
- Die `setDirectionIndicator` Klasse auf `<xul:tree>` Elementen hat schon eine Weile nichts mehr getan; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>` Element hat jetzt ein `chromemargin` Attribut, das es Ihnen ermöglicht, den Rand zwischen Chrome und Inhalt an jeder Seite eines Fensters festzulegen; Sie können dies zum Beispiel verwenden, um in die Titelleiste zu zeichnen.
- Das `<xul:window>` Element hat jetzt ein `disablechrome` Attribut; dies wird verwendet, um das meiste Chrome in einem Fenster zu verstecken, wenn es verwendet wird, um UI innerhalb des Browsers darzustellen, wie etwa `about:addons`.
- Das `<xul:window>` Element hat jetzt ein `disablefastfind` Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt dies nicht unterstützt. Dies wird zum Beispiel von dem Add-ons Panel verwendet.
- Toolbars können jetzt extern zu Toolboxes sein, während sie noch als Mitglied der `<xul:toolbox>` betrachtet werden, indem die `toolboxid` Eigenschaft der `<xul:toolbar>` gesetzt wird. Auch das `<xul:toolbox>` Element hat jetzt eine `externalToolbars` Eigenschaft, die eine Liste aller Toolbars, die als Mitglieder der Toolbox betrachtet werden, enthält.
- Unterstützung für das Protokollieren von XUL-Templates zu Debugging-Zwecken wurde hinzugefügt.

### Änderungen an der Benutzeroberfläche, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie bisher UI zur Statusleiste hinzugefügt haben.
- Verbergen des Browser-Chrome
  - : Sie können jetzt das Browser-Chrome verbergen, wenn es wünschenswert ist; zum Beispiel macht `about:addons` das.

### Speicherung

#### Verschiedene Änderungen an der Speicherschnittstelle

- Die `mozIStorageBindingParamsArray` Schnittstelle hat jetzt ein `length` Attribut, das die Anzahl der `mozIStorageBindingParams` Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` liefert jetzt einen Fehler, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die `mozIStorageConnection.clone()` Methode wurde hinzugefügt, die es ermöglicht, eine existierende Datenbankverbindung zu klonen.
- Die `mozIStorageConnection.asyncClose()` Methode wurde hinzugefügt, die eine Datenbankverbindung asynchron schließen lässt; Sie geben eine Callback-Funktion an, die benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die `mozIStorageConnection.setGrowthIncrement()` Methode wurde hinzugefügt, die es Ihnen ermöglicht, die Menge anzugeben, um die eine Datenbankdatei jeweils vergrößert wird, um SQLite zu helfen, die Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT` Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` statt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den spezifischen Änderungen, die unten erwähnt werden, ist es wichtig zu beachten, dass keine gefrorenen Schnittstellen mehr existieren. Alle Schnittstellen sind jetzt nicht gefroren, unabhängig davon, was die Dokumentation sagen mag. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details über XPCOM-Änderungen, die die Kompatibilität in Firefox 4 beeinträchtigen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode liefert das globale Objekt zurück, mit dem ein Objekt assoziiert ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden und Abfragen können asynchron ausgeführt werden. Das bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` Schnittstellen gegeben hat. Wichtiger ist, dass die `nsINavHistoryResultViewer` Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Shutdown-Prozess des Places-Dienstes zuverlässiger zu verfolgen. Von diesen ist die `places-connection-closed` Benachrichtigung verfügbar, um zu wissen, wann der Places-Dienst seinen Shutdown-Prozess vollständig abgeschlossen hat.
- Der Array-Größen Ausgabeparameter für mehrere Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü manuell mit Places-Informationen erstellen und füllen, anstatt dies für Sie erledigen zu lassen. Siehe [Anzeige von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell` und `nsIWebBrowser` Schnittstellen haben jetzt ein neues `isActive` Attribut, das zur Optimierung der Codepfade für Dokumente verwendet wird, die derzeit nicht sichtbar sind.
- Die `nsIMemory` Methode `nsIMemory.isLowMemory()` ist veraltet. Sie sollten ["memory-pressure" Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Situationen mit wenig Speicher zu achten.
- Die API für die Verarbeitung von Weiterleitungen auf HTTP-Kanälen wurde geändert, um die asynchrone Verarbeitung von Weiterleitungen zu ermöglichen. Jeder Code, der die Weiterleitungsverarbeitung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden, welches einen Callback-Handler akzeptiert, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Batches zu gruppieren, um die Anzahl der gesendeten Update-Benachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben ausführen (wie z.B. das Aktualisieren von Ansichten).
- Die längst veraltete `nsIPref` Schnittstelle wurde schließlich entfernt. Wenn Sie noch nicht zu `nsIPrefService` gewechselt sind, ist jetzt die Zeit dafür.
- Die `nsISessionStore` und `nsISessionStartup` Schnittstellen erhielten Änderungen zur Unterstützung der sitzungsbezogenen Wiederherstellung auf Abruf. Siehe die `nsISessionStore.restoreLastSession()` Methode.
- Die `nsIPrincipal` Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie ihre Eigenschaften `origin`, `csp` und `URI`, sind jetzt von Skripten aus verfügbar; zuvor waren sie nur von nativen Code aus verfügbar.
- Die `nsIPrompt` Schnittstelle unterstützt jetzt tabmodale Warnungen; siehe [Verwendung von tabmodale Warnungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die `nsIEffectiveTLDService.getPublicSuffixFromHost()` Methode lehnt jetzt Hostnamen, die mit einem Punkt (".") beginnen, korrekt ab.
- Die `mozIJSSubScriptLoader.loadSubScript()` Methode hat jetzt ein optionales Argument, welches es ermöglicht, die Zeichenkodierung des Skripts anzugeben; wenn keine angegeben wird, wird ASCII angenommen (so wie es immer angenommen wurde).
- Die `nsIAccessProxy` Schnittstelle wurde entfernt. Sie war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die `nsIContentView` und `nsIContentViewManager` Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie stellt eine scrollbarende Inhaltssicht dar, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal` Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService` Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE` Schnittstelle wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter` Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla stellt jetzt unfehlbare Speicherzuordnungen zur Verfügung, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie man explizit fallible vs infallible Speicherzuweisungen anfordert.

### Andere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einzelnes JAR-Archiv, `omni.jar`, kombiniert, was die Startleistung durch Reduzierung von I/O verbessert. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die `accessibility.disablecache` Einstellung wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken bereitgestellt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur nächsten ändert, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung von plattformspezifischen Verzeichnissen in Add-on-Bundles können Sie keine unterschiedlichen Standardpräferenzen mehr für jede Plattform bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt von der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack) Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen werden, [Suche-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die eine [SQLite-Datenbank erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Verzeichnis der Erweiterung vom Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einfügen, die [automatisch bei Anwendungstart installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer angepassten Firefox-Distribution.

## Weitere Änderungen

- Nur die chrome.manifest Datei im Root-Verzeichnis wird geladen
  - : Nur die `chrome.manifest` Datei im Root-Verzeichnis wird jetzt geladen; wenn Sie zusätzliche Manifest-Dateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest) Befehl in Ihrer root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) Erweiterung verfügbar.
- [Ereignisbehandlung für Inhaltsprozesse](/de/docs/The_message_manager)
  - : Um die Unterstützung von out-of-process Plugins und anderen multiprozessfähigen Funktionen zu ermöglichen, wurde eine neue API eingeführt, um den Nachrichtenaustausch zwischen Prozessen zu unterstützen.
- [Bootstrapped Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder downgraded) werden können, ohne einen Browser-Neustart zu erfordern.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde ebenfalls entfernt, jedoch ist die Unterstützung zur Installation von Plugins über diesen Ordner weiterhin vorhanden. Siehe [Firefox Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde von [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Child HWNDs mehr für die interne Verwendung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, funktioniert Ihre Erweiterung nicht mehr auf Firefox 4. Sie müssen entweder aufhören, HWNDs zu verwenden, oder Ihren Code, der auf HWNDs beruht, in ein [NPAPI](/de/docs/NPAPI) Plugin einwickeln. Das ist viel Arbeit, also sollten Sie, wenn möglich, direktes Verwenden von HWNDs vermeiden.
- Gestenänderungen
  - : Die Drei-Finger-Wischgesten nach oben und unten auf Trackpads wurden geändert, um standardmäßig die Firefox Panorama Ansicht (vormals TabCandy) zu öffnen und zu schließen. Um diese auf die vorherigen Scroll-to-Top und Scroll-to-Bottom Befehle zurückzusetzen, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
