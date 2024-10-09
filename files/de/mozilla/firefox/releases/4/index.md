---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{FirefoxSidebar}}

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und verbessert weiter die Sicherheit. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattformentwickler zur Verfügung stehen.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}} Parser, der Bugs behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht außerdem das direkte Einbetten von [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) in das HTML-Markup.

### HTML

- [Treffen Sie den HTML5-Parser](/de/docs/Learn/HTML)
  - : Ein Blick darauf, was der HTML5-Parser für Sie bedeutet und wie Sie SVG und MathML inline in Ihre Inhalte einbetten können.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Ein Überblick über Verbesserungen von Webformularen. Zu diesen Änderungen zählen neue Eingabetypen im {{HTMLElement("input")}} Element, Datenvalidierung und mehr.
- [HTML5 Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt nun die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das für alle Elemente verfügbar ist, wird verwendet, um Inhalte auf einer Webseite auszublenden, die derzeit für den Benutzer nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch folgende neue HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie in Firefox 4 implementiert, nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Verbesserungen am Canvas

Folgende Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}} Implementierung näher an die Spezifikation zu bringen:

- Die Angabe eines negativen Radius bei Aufruf von `arc()` löst nun korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Die Angabe von nicht-endlichen Werten bei Aufruf von `createLinearGradient()` und `createRadialGradient()` wirft nun `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte richtig ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte richtig ignoriert.
- Die `putImageData()` Methode unterstützt nun die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}} Elemente sind nun standardmäßig anpassbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}} Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()` Methode, mit der Sie eine speicherbasierte Datei mit einem Bild des Canvas-Inhalts erhalten können. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `canvas2dcontext.lineCap` und `canvas2dcontext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen unbekannten Wert gesetzt werden.
- `canvas2dcontext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen unbekannten Wert gesetzt wird, und unterstützt den nicht standardmäßigen `darker` Wert nicht mehr.
- Die Unterstützung für das veraltete `<spacer>` Element, das in allen anderen Browsern nicht vorhanden war, wurde entfernt.
- Das `<isindex>` Element, wenn es durch Aufrufen von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird nun als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}} Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Nutzung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}} Element unterstützt ein neues `mozactionhint` Attribut, mit dem Sie die Bezeichnung für die Eingabetaste auf virtuellen Tastaturen festlegen können.
- {{HTMLElement("script")}} Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und passt das Verhalten an andere Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Damit können Sie {{cssxref("length")}} Werte als mathematische Ausdrücke angeben.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Subrechtecke von Hintergrundbildern
  - : Die {{cssxref("-moz-image-rect")}} Funktion ermöglicht es, Subrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS Berührungseigenschaften
  - : Unterstützung für Berührungseigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Es wurden Änderungen vorgenommen, um festzulegen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht das Anpassen erweiterter Features von OpenType-Schriften.</td>
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
        Ermöglicht die Steuerung in welcher Dimension ein Element anpassbar ist.
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
      <td>Wird auf Platzhaltertexte in Formfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf die Schaltfläche "Senden" von Formularen angewendet, wenn eines oder mehrere
        der Felder des Formulars nicht validiert wird.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, deren
        Inhalt ungültig ist.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die
        das <code>required</code> Attribut nicht spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die
        das <code>required</code> Attribut spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, deren
        Inhalt erfolgreich validiert wurde.
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
        Dadurch können Sie das Erscheinungsbild eines Elements anpassen, wenn
        Gecko annimmt, dass es eine Fokusanzeige haben sollte.
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
        Ermöglicht es Ihnen, {{cssxref("length")}} Werte als
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                                   |
| ---------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                                  |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Darüber hinaus wurden Rendering-Änderungen vorgenommen, um die neueste Version der Spezifikation einzuhalten. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                               |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}} Eigenschaft begrenzt jetzt den Unschärferadius aus Gründen der Vernunft und Leistung auf 300px.
- Die {{cssxref("overflow")}} Eigenschaft gilt nicht mehr für Tabellen-Gruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance` Eigenschaft unterstützt jetzt den `-moz-win-borderless-glass` Wert, der ein rahmenloses Aero Glass Aussehen auf ein Element anwendet.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) Medienfeature wurde hinzugefügt, sodass das Verhältnis von Geräte-Pixeln pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Handhabung von CSS {{cssxref("length")}} Einheiten wurde überarbeitet, um andere Browser besser zu entsprechen und absolute Längen in Bildschirmpixelanzahlen genauer zu übersetzen, basierend auf der DPI des Geräts.

### Grafiken und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird nun von Firefox unterstützt.
- [Grafikleistungsoptimierung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}} Element sowie als CSS {{cssxref("background-image")}} verwenden.
- Unterstützter `buffered`-Attribut für Medien
  - : Das `buffered` Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen wird jetzt unterstützt, wodurch Sie feststellen können, welche Teile einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload` Attribut
  - : Das `preload` Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer` Attribut. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elemente sowie die `nsIDOMHTMLMediaElement` Schnittstelle.
- Verbesserungen bei SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen festlegen. Dies ermöglicht Ihnen die Positionierung jedes Zeichens einer Zeichenkette individuell zu steuern.

### DOM

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung wurde für JavaScript typisierte Arrays hinzugefügt; dies ermöglicht Ihnen, Pufferspeicher mit Rohdaten mithilfe von nativen Datentypen zu manipulieren. Mehrere APIs verwenden dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Ermitteln von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range) Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Mausereignisse auf beliebigen Elementen erfassen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulation der Browserhistorie](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokument-Historienobjekt, das über das [`window.history`](/de/docs/Web/API/Window/history) Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das zusammen mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit bietet, Animationen miteinander zu synchronisieren.
- Unterstützte Berührungs- und Mehrfachberührungsereignisse
  - : Unterstützung für Berührungs- und Mehrfachberührungsereignisse wurde hinzugefügt.

#### Änderungen an DOM-Schnittstellen von HTML-Elementen

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die von der HTML5-Spezifikation geforderten geändert, wie unten dargestellt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Die Umbrüche eines {{HTMLElement("textarea")}} Elements können jetzt über das DOM mittels des `wrap` DOM-Attributs gesteuert werden. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}} Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src` Attribut werden ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten), und Skripte ohne das `src` Attribut werden synchron ausgeführt. Um Skripte, die eingefügt werden und das `src` Attribut haben, in der Einfügereihenfolge auszuführen, setzen Sie `.async=false` auf ihnen.
- DOM [`File`](/de/docs/Web/API/File) Objekte bieten jetzt eine `url` Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects) Unterstützung für XMLHttpRequest.
- Die [`Element.isContentEditable`](/de/docs/Web/API/Element/isContentEditable) Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft ermöglicht es Ihnen festzustellen, welches {{HTMLElement("script")}} Element aktuell ausgeführt wird. Die neuen [`element.onbeforescriptexecute`](/de/docs/Web/API/Element/onbeforescriptexecute) und [`element.onafterscriptexecute`](/de/docs/Web/API/Element/onafterscriptexecute) Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode` Eigenschaft wurde dem [`DragTransfer`](/de/docs/Web/API/DragTransfer) Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify) Methode wurde dem [`Selection`](/de/docs/Web/API/Selection) Objekt hinzugefügt; damit können Sie die aktuelle Textauswahl oder den Cursorposition im Browserfenster einfach ändern.
- Unterstützung für das `window.directories` Objekt und das `directories` Merkmal für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die [`Event.mozInputSource`](/de/docs/Web/API/Event/mozInputSource) Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardmäßige Eigenschaft ermöglicht es Ihnen, die Art des Geräts zu bestimmen, das ein Ereignis erzeugt hat.
- Das [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis des [`Document`](/de/docs/Web/API/Document) Objekts wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert keine `<` und `>` Zeichen mehr um den Tag-Namen im Kompatibilitätsmodus.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, was es erlaubt, dass Elemente weiterhin Mausereignisse erfassen können, auch wenn die Maus außerhalb ihres normalen Erfassungsbereichs liegt, nachdem ein `mousedown` Ereignis aufgetreten ist.
- Die `window.mozPaintCount` Eigenschaft wurde hinzugefügt; damit können Sie feststellen, wie viele Male ein Dokument gerendert wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Der Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Content_negotiation) Header stattdessen. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt liefert jetzt die Antwort als ein JavaScript typisiertes Array sowie als String, mithilfe der Gecko-spezifischen `mozResponseArrayBuffer` Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure` Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- [`Node.mozMatchesSelector()`](/de/docs/Web/API/Node/mozMatchesSelector) wirft jetzt eine `SYNTAX_ERR` Ausnahme, wenn die angegebene Selektorzeichenkette ungültig ist, anstatt fälschlicherweise `false` zu liefern.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mithilfe der gleichen Kurzschreibweise wie bei CSS einstellen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`element.style`](/de/docs/Web/API/Element/style) für Details.
- Der Dokumentwurzel hat jetzt [ein `privatebrowsingmode` Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Modus beschreibt, einschließlich eines Hinweises, ob der private Modus vorübergehend oder dauerhaft für die Sitzung ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie in jedem anderen großen Browser.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt stimmt jetzt mit der neuesten Version der Spezifikation überein.
- Die Mindestverzögerung für die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Voreinstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann wieder aktiviert werden, indem eine Voreinstellung gesetzt wird.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Die Content Security Policy (CSP) ist ein von Mozilla vorgeschlagener Mechanismus, der Webdesignern und Serveradministratoren helfen soll, wie Inhalte auf ihren Websites interagieren. Das Ziel ist es, Angriffe wie Cross-Site Scripting und Dateninjektions-Attacken zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist ein Sicherheits-Feature, das es einer Website ermöglicht, Browsern mitzuteilen, dass sie nur über HTTPS kommunizieren sollen, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP Antwort-Header, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies erlaubt es Websites anzugeben, ob ihre Seiten in Frames verwendet werden können und
