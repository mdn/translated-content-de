---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Web-Technologien und erhöht die Sicherheit. Dieser Artikel bietet Informationen über diese Version und welche Funktionen sowohl für Webentwickler als auch für Add-on-Entwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet nun den {{Glossary("HTML5", "HTML5")}}-Parser, wodurch Fehler behoben, die Interoperabilität verbessert und die Leistung gesteigert werden. Außerdem können Inhalte dadurch [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in das HTML-Markup einbetten.

### HTML

- [Web-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf die Verbesserungen an Web-Formularen. Zu diesen Änderungen gehören hinzugefügte Eingabetypen im {{HTMLElement("input")}}-Element, Datenüberprüfung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 `hidden` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das für alle Elemente üblich ist, wird verwendet, um Inhalte auf einer Webseite auszublenden, die derzeit für den Nutzer nicht relevant sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Verbesserungen bei Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation anzupassen:

- Das Angeben eines negativen Radius bei `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Das Angeben nicht endlicher Werte bei `createLinearGradient()` und `createRadialGradient()` löst jetzt `NOT_SUPPORTED_ERR` statt `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert wirft keine Ausnahme mehr; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert wirft keine Ausnahme mehr; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig vergrößerbar; Sie können diese mittels der {{cssxref("resize")}} CSS-Eigenschaft deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische Methode `mozGetAsFile()`, mit der Sie eine speicherbasierte Datei mit einem Bild des Canvas-Inhalts erhalten können. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt den nicht standardmäßigen `darker`-Wert nicht mehr.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element wird, wenn es durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt den Aufruf von `click()` bei {{HTMLElement("input")}}-Elementen, um den Datei-Auswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Dateien aus Webanwendungen verwenden](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und passt das Verhalten anderer Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue CSS-Übergangsmöglichkeiten sind in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht die Angabe von {{cssxref("length")}}-Werten als mathematische Ausdrücke.
- Selektoren-Gruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Hintergrundbild-Subrechtecke
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht die Verwendung von Subrechtecken von Bildern als {{cssxref("background-image")}}.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und wirkliche Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)-DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Änderungen wurden vorgenommen, welche Informationen über den Stil besuchter Links mithilfe von CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen beeinflussen.

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
        Gibt die Breite in Leerzeichenzeichen an, die einem Tabulatorzeichen (U+0009) beim
        Rendern von Text zugewiesen ist.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es Ihnen, die Dimensionen zu steuern, in denen ein Element
        vergrößert werden kann.
      </td>
    </tr>
  </tbody>
</table>

#### Neue CSS-Pseudoklassen

<table>
  <tbody>
    <tr>
      <td>Pseudo-Klasse</td>
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
        Wird auf den Sende-Button in Formularen angewendet, wenn eines oder mehrere der Felder des Formulars
        nicht validieren.
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
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die nicht das
        <code>required</code>-Attribut spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die das
        <code>required</code>-Attribut spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, wenn
        deren Inhalt erfolgreich validiert.
      </td>
    </tr>
  </tbody>
</table>

#### Neue CSS-Pseudoselektoren

<table>
  <tbody>
    <tr>
      <td>Pseudo-Selektor</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>{{cssxref(":focus-visible", ":-moz-focusring")}}</td>
      <td>
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements anzugeben, wenn Gecko der Meinung ist, dass es eine Fokusanzeige gerendert haben sollte.
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
        Ermöglicht die Verwendung eines beliebigen Elements als Hintergrund für
        {{cssxref("background-image")}} und
        {{cssxref("background")}}.
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        Ermöglicht die Verwendung eines Subrechtecks eines Bildes als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}}.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Hinweise                                                                                                        |
| ---------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                    |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                 |

#### Verschiedene CSS-Änderungen

- Die Eigenschaft {{cssxref("text-shadow")}} begrenzt nun den Unschärferadius aus Vernunft- und Leistungsgründen auf 300px.
- Die Eigenschaft {{cssxref("overflow")}} gilt nicht mehr für Tabelle-Gruppen-Elemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element einen rahmenlosen Aero-Glass-Look verleiht.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/@media/-moz-device-pixel-ratio) Medienmerkmal wurde hinzugefügt und ermöglicht die Verwendung des Verhältnisses von Gerätepixeln pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).
- Geckos Handhabung von CSS {{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und die absoluten Längen genauer in Bildschirm-Pixel-Anzahlen basierend auf dem DPI des Geräts zu übersetzen.

### Grafiken und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Die Unterstützung für SMIL-Animationen von SVG ist nun verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie als CSS {{cssxref("background-image")}} verwenden.
- Unterstützung für das `buffered`-Attribut von Medien
  - : Das `buffered`-Attribut bei {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx`, und `dy`-Eigenschaften bei SVG {{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen angeben. Dadurch können Sie die Positionierung jedes Zeichens in einer Zeichenkette individuell steuern.

### DOM

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-typisierte Arrays wurde hinzugefügt; dies ermöglicht Ihnen, Puffer mit rohen Daten mithilfe nativer Datentypen zu manipulieren. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalten von Randrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect)-Methoden.
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die in Internet Explorer eingeführten `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlauf-Objekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt zugänglich ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, welches zusammen mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die umgestellt, die in der HTML5-Spezifikation gefordert werden, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM gesteuert werden, über das `wrap`-DOM-Attribut. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden sofort ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge zu beachten), und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um eingebettete Skripte mit dem `src`-Attribut in der Reihenfolge der Einfügung auszuführen, setzen Sie `.async=false` auf diese.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)-Unterstützung für `XMLHttpRequest`.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht, festzustellen, welches {{HTMLElement("script")}}-Element derzeit ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute)- und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute)-Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde zum [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; Damit können Sie die aktuelle Textauswahl oder die Cursorposition in einem Browserfenster einfach ändern.
- Unterstützung für das `window.directories`-Objekt und das `directories`-Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu den DOM-Benutzeroberflächenereignissen hinzugefügt; Diese nicht-standardisierte Eigenschaft ermöglicht Ihnen, den Typ des Geräts zu bestimmen, das ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document)-[`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert in Quirks-Modus keinen `<` und `>` mehr um den Tag-Namen.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, sodass Elemente auch dann Mausereignisse nachverfolgen können, wenn sich die Maus nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; Damit können Sie feststellen, wie oft ein Dokument gerendert wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt stellt die Antwort jetzt sowohl als JavaScript-typisiertes Array als auch als Zeichenfolge bereit, unter Verwendung der Gecko-spezifischen `mozResponseArrayBuffer`-Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druckgrad auf unterstützten druckempfindlichen Eingabegeräten anzeigt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen Ihnen, Objekt-URLs zu erstellen, die lokale Dateien referenzieren.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` löst jetzt eine `SYNTAX_ERR`-Ausnahme aus, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit der gleichen Kurzformsyntax wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Die Dokumentwurzel hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Browsing-Modus beschreibt, einschließlich eines Hinweises darauf, ob der private Browsing-Modus für die Sitzung vorübergehend oder dauerhaft ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode ist jetzt optional, wie in allen anderen wichtigen Browsern.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht nun der neuesten Version der Spezifikation.
- Die minimal zulässige Verzögerung für die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann durch Einstellen einer Präferenz erneut aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla entwickelter Vorschlag, der Webdesignern und Serveradministratoren dabei helfen soll, festzulegen, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe zu erkennen und zu mildern, einschließlich Cross-Site-Scripting- und Dateninjektionsangriffen.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die einer Website mitteilt, dass sie nur über HTTPS kommunizieren sollte, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS-Antwort-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte X-FRAME-OPTIONS HTTP-Antwort-Header wird jetzt von Firefox unterstützt. Dadurch können Websites angeben, ob ihre Seiten in Frames verwendet werden können, und falls ja, ob diese auf dasselbe Herkunftsdomain beschränkt werden sollen.
- [Änderungen am User-Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : Um die Menge an Daten und Entropie zu reduzieren, die in HTTP-Anfragen ausgehen (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke- und Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen finden Sie unter [Neues in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird eine zusätzliche Einhaltung des ECMAScript 5-Standards aufweisen.

### Entwicklertools

- [Verwendung der Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web Console-Tool ist eine nützliche Debugging-Hilfe sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig ab Gecko 2.0 deaktiviert. Sie können sie wieder aktivieren, indem Sie die `devtools.errorconsole.enabled`-Präferenz auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung vorhandener Erweiterungen für Firefox 4 siehe [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit vorhandenen Add-ons unterbrechen, lesen Sie daher unbedingt diesen Artikel.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige wichtige Änderungen zu verstehen, auf die Sie achten sollten.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul stellt Getter bereit, die es einfach machen, Verweise auf häufig verwendete Dienste wie den Präferenzdienst oder den Fenstervermittler zu erhalten, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible fremde Bibliotheksfunktionen aufzurufen, ohne XPCOM zu verwenden.
- [Add-ons Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, unterstützt die Verwaltung dieser und bietet Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht modale Benachrichtigungen für den Benutzer zu präsentieren. Sie können sehen, wie diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwendet wird.
- [Code-Module von chrome: URLs laden](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können nun JavaScript-Code-Module mit **chrome:**-URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, den Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download erfolgt ist. Dieses Modul behandelt für Sie Probleme im Zusammenhang mit dem privaten Surfen.
- [Leistungsmessung mithilfe des PerfMeasurement.jsm-Code-Moduls](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul stellt eine API bereit, um CPU-Leistungsdaten in JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die `readInputStreamToString()`-Methode, mit der Sie beliebige Bytes aus einem Stream in einen String lesen können, selbst wenn der Stream Nullen enthält.
- Das `XPCOMUtils.jsm`-Code-Modul bietet jetzt die Hilfsmethoden IterSimpleEnumerator() und IterStringEnumerator(), um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Worker für privilegierten Code; damit können Sie Dinge wie [js-ctypes](/de/docs/js-ctypes) aus Workern in Erweiterungen und Anwendungscode verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardmäßige) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen das Nachverfolgen mehrerer Fingerbewegungen auf einem Touchscreen gleichzeitig.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Root-Element eines Dokuments erstellt wird, aber bevor Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Neben der Unterstützung von Anwendungs-Tabs ändern diese Änderungen auch die Tableiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Werkzeugleistenschaltflächen darin zu ziehen.

- Die `TabClose`-, `TabSelect`- und `TabOpen`-Ereignisse blubbern nicht mehr bis zum `<xul:tabbrowser>`-Element (`gBrowser`). Ereignis-Listener für diese Ereignisse sollten `gBrowser.tabContainer` anstelle von `gBrowser` direkt hinzugefügt werden.
- Das Tab-Kontextmenü ist kein anonymes Kind mehr von `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Überlagerungen überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blog-Beitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um Ihnen ein Array der aktuell sichtbaren Tabs zu geben; damit können Sie bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Die neue `showOnlyTheseTabs`-Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon`-Methode wurde hinzugefügt, mit der Sie das Favicon eines Tabs erhalten können, ohne das `<xul:browser>`-Element aufzurufen.
- Die neue `tabbrowser.tabs`-Eigenschaft wurde hinzugefügt, mit der Sie einfach eine Liste der Tabs in einem `<xul:tabbrowser>`-Element erhalten können.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen Ihnen das Anheften und Lösen von Tabs (d.h. Umschalten zwischen Anwendungs-Tabs und regulären Tabs).
- Die Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden dem `<xul:tabbrowser>` hinzugefügt, um tabmodale Alarme zu unterstützen.

#### Änderungen bei Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie `popup` weiterhin verwenden, treten Glitches auf, da das Element keine besondere Bedeutung mehr hat. Beispielsweise kann `<xul:menuseparator>` beim Einsatz in einem `<xul:popup>` transparent erscheinen.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die den Knoten angibt, in dem das Ereignis aufgetreten ist, das dazu geführt hat, dass das Popup geöffnet wurde. Dies erforderte auch die Hinzufügung eines Trigger-Ereignis-Parameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der angegeben wurde, als das Popup erstellt wurde.
- Das `<xul:panel>`-Element bietet nun `fade`- und `flip`-Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil-Benachrichtigungspanels zu konfigurieren.

#### Entfernte Unterstützung für Remote XUL

Remote XUL wird nicht mehr unterstützt; dies hat Auswirkungen auf XUL-Dokumente, die über HTTP bereitgestellt werden; Sie können auch keine XUL-Dokumente mehr mit `file://`-URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, mit der bestimmte Domains festgelegt werden können, die das Laden von Remote XUL erlauben.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert nun korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen nun, das `element`-Attribut zu verwenden, um ein Element anstelle des Fensters zu verkleinern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es Ihnen ermöglicht, anzugeben, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktiven XUL-Fenstern gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive`-Pseudoklasse verwenden, um verschiedenen Stilen für Hintergrundfenster zuzuweisen.
- Das `emptytext`-Attribut ist nun veraltet; Sie sollten `placeholder` stattdessen verwenden.
- Das `<xul:window>`-Element bietet nun ein `accelerated`-Attribut; wenn es auf wahr gesetzt ist, kann der Hardwarelayer-Manager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die `bottom`- und `right`-Attribute.
- Ereignisse werden jetzt während der `<xul:toolbox>`-Anpassung ausgelöst, sodass Sie Änderungen an Werkzeugleisten erkennen können.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; stattdessen können Sie die `:-moz-tree-row`-Pseudoklasse verwenden.
- Die Schaltfläche für den Überlauf der Lesezeichen-Symbolleiste mit anonid chevronPopup ist nicht mehr anonym; Sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat nun eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben nun das Attribut `drawintitlebar`; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, was das Zeichnen in die Titelleiste ermöglicht.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, die es Ihnen ermöglichen, zu erkennen, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die `label`-, `crop`-, `busy`-, `image`- oder `selected`-Attribute eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das es Ihnen ermöglicht festzustellen, ob ein Tab derzeit angeheftet ist oder nicht.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen tut schon seit einiger Zeit nichts mehr; nun wird sie gar nicht mehr verwendet.
- Das `<xul:window>`-Element hat nun ein `chromemargin`-Attribut, das es Ihnen ermöglicht, den Abstand zwischen Chrom und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dies verwenden, um in die Titelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>`-Element hat nun ein `disablechrome`-Attribut; dies wird verwendet, um den größten Teil des Chroms in einem Fenster auszublenden, wenn es zum Anzeigen von In-Browser-Benutzeroberflächen verwendet wird, wie z. B. `about:addons`.
- Das `<xul:window>`-Element hat nun ein `disablefastfind`-Attribut, mit dem Sie die Suchleiste in einem Fenster deaktivieren können, wenn der Inhalt sie nicht unterstützt. Dies wird z. B. vom Add-ons-Panel verwendet.
- Werkzeugleisten können nun extern von Werkzeugkästen sein, während sie weiterhin als Mitglied des `<xul:toolbox>` betrachtet werden, indem die `toolboxid`-Eigenschaft der `<xul:toolbar>` gesetzt wird. Außerdem hat das `<xul:toolbox>`-Element nun eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens betrachtet werden.
- Unterstützung für das Protokollieren von XUL-Vorlagen zu Debugging-Zwecken wurde hinzugefügt.

### Änderungen der Benutzeroberfläche, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde durch die neue Add-on-Leiste ersetzt. Wenn Sie bisher Benutzeroberflächen zur Statusleiste hinzugefügt haben, müssen Sie Ihre Erweiterung aktualisieren, um dies zu unterstützen.
- Verbergen des Browser-Chromes
  - : Sie können nun das Chrome des Browsers verbergen, wenn es wünschenswert ist; zum Beispiel macht `about:addons` dies.

### Speicher

#### Verschiedene Speicher-API-Änderungen

- Das `mozIStorageBindingParamsArray`-Interface hat jetzt ein Längenattribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt und ermöglicht die Klonung einer bestehenden Datenbankverbindung.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt und ermöglicht das asynchrone Schließen einer Datenbankverbindung; Sie geben einen Rückruf an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt und ermöglicht es Ihnen, die Menge anzugeben, um die eine Datenbankdatei zu einem Zeitpunkt vergrößert wird, um SQLite bei der Reduzierung der Fragmentierung zu helfen.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` gemeldet, anstelle von `NS_ERROR_FAILURE`.

### XPCOM

Zusätzlich zu den unten aufgeführten spezifischen Änderungen ist es wichtig zu beachten, dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht gefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verbunden ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Orte

- Orte-Abfrageergebnisse können nun von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Das bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`-, `nsINavHistoryQueryOptions`- und `nsINavHistoryContainerResultNode`-Interfaces gab. Wichtiger ist, dass das `nsINavHistoryResultViewer`-Interface in `nsINavHistoryResultObserver` umbenannt wurde.
- Ein paar [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu helfen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Die meisten davon sind nur für den internen Gebrauch gedacht, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Array-Größe-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und befüllen, anstatt es automatisch für Sie tun zu lassen. Siehe [Anzeigen von Places-Informationen mithilfe von Views: Menü-View](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell`- und `nsIWebBrowser`-Interfaces haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um die Optimierung von Codepfaden für Dokumente zu ermöglichen, die derzeit nicht sichtbar sind.
- Die Methode `nsIMemory.isLowMemory()` wurde in `nsIMemory` als veraltet markiert. Sie sollten ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um Situationen mit niedrigem verfügbaren Speicher zu überwachen.
- Die API zum Handhaben von Weiterleitungen auf HTTP-Kanälen wurde geändert, um die asynchrone Verarbeitung zu ermöglichen. Jeder Code, der die Weiterleitungshandhabung mithilfe von `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` stattdessen zu verwenden. Dies akzeptiert einen Rückruf-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen wird.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt und bietet eine Möglichkeit, Places-Operationen in Chargen zu gruppieren, die Anzahl der übermittelten Aktualisierungsbenachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben ausführen (wie das Auffrischen von Ansichten).
- Die lang veraltete `nsIPref`-Schnittstelle wurde schließlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestiegen sind, ist jetzt die Zeit dafür.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` erhielten Änderungen zur Unterstützung der On-Demand-Sitzungswiederherstellung. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die `nsIPrincipal`-Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie die Attribute `origin`, `csp` und `URI`, sind jetzt aus einem Skript verfügbar; früher waren sie es nur aus nativen Code.
- Die Schnittstelle `nsIPrompt` unterstützt nun tabmodale Alarme; siehe [Verwendung von tabmodalen Benachrichtigungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt Hostnamen, die mit einem Punkt (".") beginnen, korrekt ab.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, den Zeichensatz des Skripts anzugeben; wenn keiner angegeben ist, wird ASCII angenommen (wie immer angenommen wurde).
- Die Schnittstelle `nsIAccessProxy` wurde entfernt. Es war ein Implementierungsdetail, das seine Nützlichkeit überschritten hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Es stellt eine scrollbare Inhaltsansicht dar, deren Inhalt tatsächlich von einem separaten Prozess gezeichnet wird.
- Die Schnittstelle `nsIDiskCacheStreamInternal` wurde hinzugefügt.
- Die Schnittstelle `nsIExternalURLHandlerService` wurde hinzugefügt.
- Die Schnittstelle `nsISyncJPAKE` wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die Schnittstelle `nsIINIParserWriter` wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlschlagbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherallocator, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit fehlbare gegenüber unfehlbaren Speicherreservationen anfordern.

### Andere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einzelnes JAR-Archiv `omni.jar` zusammengefügt, was die Startleistung durch reduzierte I/O verbessert. Weitere Details dazu lesen Sie in [Über omni.jar](/de/docs/About_omni.jar).
- Die Präferenz `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken exponiert und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändern, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung plattformspezifischer Verzeichnisse in Add-on-Paketen können Sie keine unterschiedlichen Standardpräferenzen mehr für jede Plattform bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr beim Installieren entpackt](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Erweiterungen, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen werden, [Suchplugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite), oder die Dinge vom Dateisystem relativ zum Erweiterungsverzeichnis kopieren, benötigen möglicherweise auch eine Anpassung ihres Codes.
- Sie können jetzt Erweiterungen einschließen, die [bei Anwendungsstart automatisch installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines angepassten Firefox.

## Andere Änderungen

- Nur die root chrome.manifest-Datei wird geladen
  - : Nur die root `chrome.manifest`-Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrem root `chrome.manifest` verwenden, um sie zu laden.
- Entfernung der Gopher-Unterstützung
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Eine weitere Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Verarbeitung von Content-Prozessen-Ereignissen](/de/docs/The_message_manager)
  - : Um Out-of-Process-Plugins und andere Multiprozess-Funktionen zu unterstützen, wurde eine neue API eingeführt, um das Versenden von Nachrichten über Prozesse hinweg zu ermöglichen.
- [Gestartete Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können nun Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder heruntergestuft) werden können, ohne dass ein Browser-Neustart erforderlich ist.
- Entfernen des Standard-Plugins
  - : Das Standard-Plugin wurde entfernt. Der Plugin-Ordner der Anwendung wurde standardmäßig ebenfalls entfernt, jedoch besteht weiterhin Unterstützung für die Installation von Plugins über diesen Ordner. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Der Erweiterungsmanager wurde durch den Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch den [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Kinderfenster-Handles nicht mehr verwendet
  - : Firefox erstellt keine Kinderfenster-Handles mehr zu seiner internen Verwendung auf Windows. Wenn Sie ein Add-on geschrieben haben, das nativen Code verwendet, um diese Fenster zu manipulieren, funktioniert Ihr Add-on in Firefox 4 nicht mehr. Sie müssen entweder aufhören, Fenster-Handles direkt zu verwenden, oder Ihren Code, der auf Fenster-Handles angewiesen ist, in einem [NPAPI](/de/docs/NPAPI)-Plugin umhüllen. Das ist eine Menge Arbeit, also sollten Sie, wenn möglich, die direkte Verwendung von Fenster-Handles vermeiden.
- Gestenänderungen
  - : Die Drei-Finger-Auf- und Ab-Streichgesten auf Trackpads wurden standardmäßig geändert, um die Firefox-Panorama-Ansicht (vormals TabCandy) zu öffnen und zu schließen. Um diese auf die vorherigen Scroll-Nach-Oben und Scroll-Nach-Unten-Befehle zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
