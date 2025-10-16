---
title: Hinweise zur Veröffentlichung von Firefox 4 für Entwickler
short-title: Firefox 4
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere fortschreitende Webtechnologien und erhöht die Sicherheit weiter. Dieser Artikel liefert Informationen über diese Veröffentlichung und welche Funktionen sowohl für Webentwickler, Add-on-Entwickler als auch Entwickler der Gecko-Plattform verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet nun den {{Glossary("HTML5", "HTML5-Parser")}}, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht auch das Einbetten von [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in das HTML-Markup.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf die Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das bei allen Elementen üblich ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Benutzer momentan nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Verbesserungen am Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation anzupassen:

- Die Angabe eines negativen Radius beim Aufruf von `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Die Angabe nicht-endlicher Werte beim Aufruf von `createLinearGradient()` und `createRadialGradient()` löst jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Die `putImageData()`-Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind nun standardmäßig skalierbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` lösen keine Ausnahme mehr aus, wenn sie mit nicht erkennbaren Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt nun die Mozilla-spezifische `mozGetAsFile()`-Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild des Inhalts der Leinwand enthält. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` lösen keine Ausnahme mehr aus, wenn sie auf einen nicht erkennbaren Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` löst keine Ausnahme mehr aus, wenn es auf einen nicht erkennbaren Wert gesetzt wird und unterstützt den nicht standardmäßigen `darker`-Wert nicht mehr.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern nicht vorhanden war, wurde entfernt.
- Das `<isindex>`-Element wird bei Erstellung durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt den Aufruf von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Etikett für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und stimmt mit dem Verhalten anderer Browser überein.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue CSS-Übergangsfähigkeiten sind in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Die Unterstützung für `-moz-calc` wurde hinzugefügt. Damit können Sie {{cssxref("length")}}-Werte als mathematische Ausdrücke angeben.
- Selektorgliederung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorieren.
- Unterstützung für Teilrechtecke von Hintergrundbildern
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht die Verwendung von Teilrechtecken von Bildern als {{cssxref("background-image")}}.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Privatsphäre und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Änderungen wurden daran vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren erlangt werden können. Dies kann einige Webanwendungen beeinträchtigen.

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
        Gibt die Breite in Leerschritten eines Tabulatorzeichens (U+0009) beim
        Rendern von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht Ihnen die Kontrolle über die Dimensionen, in denen ein Element skaliert werden darf.
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
        Wird auf die Schaltfläche zum Absenden von Formularen angewendet, wenn eines oder mehrere Felder des Formulars nicht validiert werden.
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
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements anzugeben, wenn Gecko glaubt, dass eine Fokusanzeige gerendert werden sollte.
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
        Ermöglicht es, {{cssxref("length")}}-Werte als
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
        Ermöglicht es Ihnen, ein Teilrechteck eines Bildes als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}} zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                         |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                        |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Rendering-Änderungen wurden auch vorgenommen, um die neueste Version der Spezifikation zu erfüllen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                     |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Unschärferadius aus Gründen der Sanität und Leistung auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellen-Gruppen-Elemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den `-moz-win-borderless-glass`-Wert, der ein rahmenloses Aero Glass-Aussehen auf ein Element anwendet.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/@media/-moz-device-pixel-ratio)-Medienmerkmal wurde hinzugefügt, das die Verwendung des Verhältnisses von Gerätepixeln pro CSS-Pixel in [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht.
- Geckos Behandlung von CSS-{{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirmpixel basierend auf dem DPI des Geräts umzusetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie einem CSS-{{cssxref("background-image")}} verwenden.
- Medien-`buffered`-Attribut-Unterstützung
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie bestimmen können, welche Bereiche einer Mediendatei gepuffert wurden. Das [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Interface wurde implementiert, um dies zu unterstützen.
- Medien-`preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert, das das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut ersetzt. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen bei der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy`-Eigenschaften auf SVG-{{SVGElement("text")}} und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht es Ihnen, die Positionierung jedes Zeichens in einer Zeichenkette individuell zu kontrollieren.

### DOM

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript typisierte Arrays wurde hinzugefügt; dies ermöglicht es Ihnen, Pufferspeicher mit Rohdaten mithilfe von nativen Datentypen zu manipulieren. Mehrere APIs nutzen dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API), und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Ermitteln von Grenzrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die Internet Explorer-ursprünglichen `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentenverlauf-Objekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- Animationen mit `MozBeforePaint`
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, Animationen, die synchronisiert sind, zu erstellen.
- Unterstützung für Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### HTML-Element-DOM-Schnittstellen wurden geändert

Für mehrere HTML-Elemente wurden deren DOM-Schnittstellen an die gemäß der HTML5-Spezifikation erforderlichen angepasst, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM kontrolliert werden, über das `wrap`-DOM-Attribut. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardmäßig entsprechend der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden sofort ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten) und Skripte ohne `src`-Attribut werden synchron ausgeführt. Um sicherzustellen, dass Skripte mit dem `src`-Attribut in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` darauf.
- DOM-[`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)-Unterstützung für `XMLHttpRequest`.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es Ihnen zu bestimmen, welches {{HTMLElement("script")}}-Element-Skript gerade ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event)-Ereignisse werden vor und nach der Ausführung eines Skript-Elements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; mit dieser können Sie die aktuelle Textauswahl oder die Position des Cursors im Browserfenster einfach ändern.
- Die Unterstützung für das `window.directories`-Objekt und das `directories`-Merkmal für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardmäßige Eigenschaft ermöglicht es Ihnen festzustellen, welcher Gerätetyp ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert keine `<` und `>` um den Tag-Namen mehr im Quirksmodus.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture)- und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)-Methoden wurden hinzugefügt, um es Elementen zu ermöglichen, Mausereignisse weiterhin zu verfolgen, selbst wenn sich die Maus nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie ermöglicht es Ihnen festzustellen, wie oft ein Dokument gemalt wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen möchten.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gibt die Antwort jetzt als JavaScript typisiertes Array sowie als Zeichenkette zurück, unter Verwendung der Gecko-spezifischen `mozResponseArrayBuffer`-Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druckpegel bei unterstützten druckempfindlichen Eingabegeräten angibt.
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methoden ermöglichen es Ihnen, Objekt-URLs zu erstellen, die lokale Dateien referenzieren.
- Die [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument)-Methode ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektor-String ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte von SVG-Eigenschaften eines Elements mithilfe der gleichen Kurzschreibweise wie bei CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Die Dokumentwurzel hat jetzt ein [ein `privatebrowsingmode`-Attribut](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Browsing-Modus beschreibt, einschließlich einer Angabe, ob das private Browsen für die Sitzung vorübergehend oder dauerhaft ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode ist jetzt optional, wie in jedem anderen großen Browser auch.
- Das DOM-[`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimale zulässige Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)- und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)-Methode ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](https://web.archive.org/web/20191010014917/https://developer.mozilla.org/de/docs/Web/Events#Add-on-specific_events)-Ereignis wird standardmäßig nicht mehr gesendet, da ein potenzielles Sicherheitsproblem besteht. Es kann durch Setzen einer Präferenz reaktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla vorgeschlagener Ansatz, der Webentwicklern und Serveradministratoren helfen soll, zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionen zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist ein Sicherheitsmerkmal, das es einer Website ermöglicht, Browser anzuweisen, nur über HTTPS und nicht über HTTP mit ihr zu kommunizieren.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte HTTP-Antwort-Header X-FRAME-OPTIONS wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzugeben, ob ihre Seiten in Frames verwendet werden dürfen und falls ja, ob dies auf den gleichen Ursprung beschränkt werden soll.
- [Änderungen beim User-Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : Um die Menge an Daten und Entropie zu reduzieren, die in HTTP-Anfragen gesendet werden (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke und Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](https://web.archive.org/web/20210516173330/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird eine zusätzliche Einhaltung des ECMAScript 5-Standards haben.

### Entwicklerwerkzeuge

- [Verwendung der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Werkzeug ist eine nützliche Hilfe zum Debuggen für Webentwickler und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig ab Gecko 2.0 deaktiviert. Sie können sie wieder aktivieren, indem Sie die Einstellung `devtools.errorconsole.enabled` auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung bestehender Erweiterungen für Firefox 4 siehe [Aktualisierung von Erweiterungen für Firefox 4](/de/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons brechen, daher sollten Sie diesen Artikel unbedingt lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](https://web.archive.org/web/20210515184532/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Sie berücksichtigen müssen.

### JavaScript-Code-Module

- [Services.jsm](https://web.archive.org/web/20210417185248/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul stellt Getter bereit, die das Abrufen von Referenzen auf häufig verwendete Dienste wie den Präferenzdienst oder den Fenstermediator erleichtern.
- [JS-ctypes API](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes)
  - : Die JS-ctypes-API ermöglicht das Aufrufen C-kompatibler externer Bibliotheksfunktionen ohne Verwendung von XPCOM.
- [Add-ons Manager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](https://web.archive.org/web/20210414083224/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul erleichtert es, dem Benutzer attraktive, nicht modale Benachrichtigungen zu präsentieren. Sie können sehen, wie diese API in [Verwendung von Popup-Benachrichtigungen](https://web.archive.org/web/20210411021529/https://developer.mozilla.org/de/docs/Mozilla/Using_popup_notifications) verwendet wird.
- [Laden von Code-Modulen aus chrome: URLs](https://web.archive.org/web/20210529003507/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:** URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](https://web.archive.org/web/20210615230651/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/DownloadLastDir.jsm) Code-Modul stellt die globale Variable `gDownloadLastDir` bereit, die einen String enthält, mit dem Sie herausfinden können, in welches Verzeichnis der letzte Download erfolgte. Dieses Modul kümmert sich für Sie um Probleme im Zusammenhang mit dem privaten Surfen.
- [Messung der Leistung mit dem PerfMeasurement.jsm Code-Modul](https://web.archive.org/web/20210420142952/https://developer.mozilla.org/de/docs/Mozilla/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](https://web.archive.org/web/20210620175828/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PerfMeasurement.jsm) Code-Modul bietet eine API zur Messung von CPU-Leistungsdaten in JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die Methode `readInputStreamToString()`, mit der Sie beliebige Bytes aus einem Stream in einen String lesen können, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet nun IterSimpleEnumerator() und IterStringEnumerator() Helfer, um XPCOM-Enumeratoren zu durchlaufen.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](https://web.archive.org/web/20210620192749/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Worker für privilegierten Code; auf diese Weise können Sie Dinge wie [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) von Workern in Erweiterungen und Anwendungscode aus verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht-standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger zu verfolgen, die sich gleichzeitig auf einem Touchscreen bewegen.

#### Weitere DOM-Änderungen

- Die [neue Benachrichtigung "document-element-inserted"](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, aber bevor Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Erweiterungen betreffen, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Toolbar, die es dem Benutzer ermöglicht, Toolbar-Schaltflächen in sie zu ziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` blubbern nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`) hoch. Ereignis-Listener für diese Ereignisse sollten `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL-Overlays überlagert werden. Außerdem kann es direkter im JavaScript über `gBrowser.tabContextMenu` angesprochen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um Ihnen ein Array der aktuell sichtbaren Tabs zu erhalten; dies ermöglicht es Ihnen zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue `showOnlyTheseTabs`-Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon`-Methode wurde hinzugefügt, mit der Sie ein Favicon eines Tabs erhalten können, ohne das `<xul:browser>`-Element aufrufen zu müssen.
- Die neue `tabbrowser.tabs`-Eigenschaft wurde hinzugefügt, mit der Sie einfach eine Liste der Tabs in einem `<xul:tabbrowser>`-Element erhalten können.
- Die neuen `pinTab`- und `unpinTab`-Methoden erlauben es Ihnen, Tabs anzuheften und zu lösen (d.h. sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die `getTabModalPromptBox`-Methode und das `tabModalPromptShowing`-Attribut wurden dem `<xul:tabbrowser>` hinzugefügt, um tab-modale Benachrichtigungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; stattdessen sollten Sie `<xul:menupopup>` verwenden. (Wenn Sie `popup` weiter verwenden, werden Sie auf Probleme stoßen, da das Element keine besondere Bedeutung mehr hat. Beispielsweise kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>` XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die das Knoten angibt, auf dem das Ereignis auftrat, das das Popup öffnete. Dies erforderte auch das Hinzufügen eines Auslöseereignisparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade`- und `flip`-Attribute, die verwendet werden, um das Verhalten der neuen "Pfeil"-Benachrichtigungspanels zu konfigurieren.

#### Unterstützung für Remote XUL entfernt

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können Sie XUL-Dokumente nicht mehr mit `file://` URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains das Laden von Remote XUL zu erlauben.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen jetzt, das `element`-Attribut zu verwenden, um ein Element zum Ändern der Größe anzugeben, statt das Fenster zu ändern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das Ihnen ermöglicht, anzugeben, dass der Resizer für ein Fenster statt für ein Element ist, um zu vermeiden, dass der Fensterverschieber zweimal gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive`-Pseudoklasse verwenden, um verschiedenen Hintergrundfenstern unterschiedliche Stile zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; stattdessen sollten Sie `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn dies wahr ist, ist die Hardwaretabellenschicht genehmigt, das Fenster zu beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die `bottom`- und `right`-Attribute.
- Ereignisse werden jetzt während der `<xul:toolbox>`-Anpassung ausgelöst, sodass Sie Änderungen an Toolbars erkennen können.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können stattdessen die `:-moz-tree-row`-Pseudoklasse verwenden.
- Die Bookmarks Toolbar-Überlauf-Schaltfläche mit anonid chevronPopup ist nicht mehr anonym; sie hat jetzt die ID "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste und ermöglicht das Zeichnen in die Titelleiste.
- Neue `TabPinned` und `TabUnpinned`-Ereignisse sind verfügbar, sodass Sie erkennen können, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image` oder `selected`-Attribute eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, mit dem Sie feststellen können, ob ein Tab derzeit angeheftet ist.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hat seit langem nichts mehr getan; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das es Ihnen ermöglicht, den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dies verwenden, um z. B. in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut, das verwendet wird, um die meisten Chrome-Elemente in einem Fenster zu verbergen, wenn es zum Anzeigen der Benutzeroberfläche innerhalb eines Browsers verwendet wird, z. B. `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird beispielsweise vom Add-On-Panel verwendet.
- Toolbars können jetzt außerhalb von Toolboxes liegen, während sie immer noch als Mitglieder der `<xul:toolbox>` angesehen werden, indem Sie die `toolboxid`-Eigenschaft der `<xul:toolbar>` setzen. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Toolbars auflistet, die als Mitglieder der Toolbox betrachtet werden.
- Unterstützung für das Protokollieren von XUL-Vorlagen zur Fehlersuche wurde hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Wenn Sie bisher UI zur Statusleiste hinzugefügt haben, müssen Sie Ihre Erweiterung aktualisieren, um diese zu verwenden.
- Verbergen von Browser-Chrome
  - : Sie können jetzt das Browser-Chrome verstecken, wenn es wünschenswert ist; zum Beispiel tut `about:addons` dies.

### Speicherung

#### Verschiedene Änderungen an der Speicher-API

- Das `mozIStorageBindingParamsArray`-Interface hat jetzt eine Länge-Eigenschaft, die die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es Ihnen ermöglicht, eine vorhandene Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Rückruf an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es Ihnen ermöglicht, die Menge anzugeben, um die eine Datenbankdatei jeweils vergrößert wird, um SQLite bei der Verringerung der Fragmentierung zu unterstützen.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` gemeldet anstelle von `NS_ERROR_FAILURE`.

### XPCOM

Zusätzlich zu den spezifischen unten referenzierten Änderungen ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht mehr eingefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 betreffen.
- [Components.utils.getGlobalForObject()](https://web.archive.org/web/20210625071536/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verbunden ist; dies ersetzt einen häufigen Anwendungsfall der jetzt entfernten `__parent__`.

### Places

- Abfrageergebnisse von Places können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` Schnittstellen gibt. Wichtiger ist, dass die `nsINavHistoryResultViewer` Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications) wurden hinzugefügt, um dem Browser zu ermöglichen, den Herunterfahrvorgang des Places-Dienstes zuverlässiger zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch gedacht, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrvorgang abgeschlossen hat.
- Der Arraygrößen-Ausgabeparameter für mehrere Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und füllen, anstatt es für Sie erledigen zu lassen. Siehe [Anzeige von Places-Informationen mit Ansichten: Menüansicht](https://web.archive.org/web/20201028190050/https://developer.mozilla.org/de/docs/Mozilla/Displaying_Place_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell`- und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um die Optimierung von Codepfaden für derzeit nicht sichtbare Dokumente zu ermöglichen.
- Die `nsIMemory`-Methode `nsIMemory.isLowMemory()` wurde veraltet. Stattdessen sollten Sie ["memory-pressure" Benachrichtigungen](https://web.archive.org/web/20210516060454/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemory#low_memory_notifications) verwenden, um auf niedrige Speichersituationen zu achten.
- Die API zur Behandlung von Umleitungen auf HTTP-Kanälen wurde geändert, um sie asynchron verarbeiten zu lassen. Jeder Code, der Umleitungsbehandlung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Diese akzeptiert einen Rückruf-Handler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen wurde.
- Die `nsINavHistoryResultObserver.batching()`-Methode wurde hinzugefügt, um eine Möglichkeit zur Gruppierung von Places-Operationen in Batches bereitzustellen, wodurch die Anzahl der bereitgestellten Update-Benachrichtigungen reduziert wird, was die Leistung verbessern kann, wenn Beobachter relativ umfangreiche Aufgaben ausführen (wie das Aktualisieren von Ansichten).
- Die lange veraltete `nsIPref`-Schnittstelle wurde schließlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestiegen sind, ist jetzt der Zeitpunkt gekommen.
- Die `nsISessionStore`- und `nsISessionStartup`-Schnittstellen haben Änderungen erhalten, um die Wiederherstellung von Sitzungen auf Abruf zu unterstützen. Siehe die `nsISessionStore.restoreLastSession()`-Methode.
- Die `nsIPrincipal`-Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` ebenso wie dessen `origin`, `csp` und `URI`-Attribute sind jetzt aus Skripten verfügbar; vorher waren sie nur aus nativen Code verfügbar.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Warnungen; siehe [Verwendung von tab-modalen Warnungen](https://web.archive.org/web/20210513121539/https://developer.mozilla.org/de/docs/Mozilla/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt Hostname, die mit einem Punkt (".") beginnen, korrekt ab.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, die Zeichencodierung des Skripts anzugeben; wenn keine bereitgestellt wird, wird ASCII angenommen (wie es immer angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Sie war ein Implementierungsdetail, das ihre Nützlichkeit überlebt hat.
- Die `nsIContentView`- und `nsIContentViewManager`-Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie stellen eine scrollbare Inhaltsansicht dar, deren Inhalte tatsächlich durch einen separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um die Bearbeitung von INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](https://web.archive.org/web/20201026230445/https://developer.mozilla.org/de/docs/Mozilla/Infallible_memory_allocation)
  - : Mozilla stellt jetzt unfehlbare Memory-Allocator bereit, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit fehlbare und unfehlbare Speicherzuweisung anfordern können.

### Weitere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in einem einzigen JAR-Archiv, `omni.jar`, zusammengeführt, was die Startgeschwindigkeit durch reduzierte Ein-/Ausgabe verbessert. Für Details lesen Sie [Über omni.jar](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).
- Die `accessibility.disablecache`-Präferenz wird nicht mehr unterstützt; sie war nur für Debugging-Zwecke gedacht und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung plattformexklusiver Verzeichnisse in Erweiterungs-Paketen können Sie keine unterschiedlichen Standardpräferenzen mehr für jede Plattform bereitstellen.
- Standardmäßig [werden Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) geladen werden, [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fensterikonen müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](https://web.archive.org/web/20201109001036/https://developer.mozilla.org/de/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Local_Storage#sqlite), oder Dinge aus dem Dateisystem relativ zum Verzeichnis der Erweiterung kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen, die [automatisch bei Anwendungsstart installiert werden](https://web.archive.org/web/20180604010849/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox), in eine angepasste Firefox-Distribution einfügen.

## Sonstige Änderungen

- Nur die Wurzel chrome.manifest-Datei wird geladen
  - : Nur die Wurzel `chrome.manifest`-Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien geladen haben möchten, können Sie den [`manifest`](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#manifest)-Befehl in Ihrer Wurzel `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Verarbeitung von Inhalten in Prozessen](https://web.archive.org/web/20210531151101/https://developer.mozilla.org/de/docs/Mozilla/Firefox/Multiprocess_Firefox/Message_Manager)
  - : Um Unterstützung für Plugins außerhalb des Prozesses und andere Mehrprozessfunktionen bereitzustellen, wurde eine neue API eingeführt, um das Senden von Nachrichten zwischen Prozessen zu unterstützen.
- [Bootstrapped-Erweiterungen](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert, und aktualisiert (oder herabgestuft) werden können, ohne dass ein Neustart des Browsers erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugin-Ordner wurde ebenfalls standardmäßig entfernt, jedoch ist die Installation von Plugins über diesen Ordner weiterhin möglich. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Extension Manager durch Addon Manager ersetzt
  - : `nsIExtensionManager` wurde durch den [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) ersetzt.
- Kinder-HWNDs nicht mehr verwendet
  - : Firefox erstellt keine Kinder-HWNDs mehr für seine interne Nutzung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, funktioniert Ihre Erweiterung nicht mehr in Firefox 4. Sie müssen entweder auf die Verwendung von HWNDs verzichten oder Ihren Code, der sich auf HWNDs verlässt, in einem NPAPI-Plugin kapseln. Das ist viel Arbeit, also sollten Sie es vermeiden, HWNDs direkt zu verwenden, wenn Sie können.
- Gestenänderungen
  - : Die Drei-Finger-Wischgesten nach oben und unten auf Trackpads wurden standardmäßig geändert, um die Firefox Panorama-Ansicht (ehemals TabCandy) zu öffnen und zu schließen. Um diese auf die vorherigen Scroll-to-Top und Scroll-to-Bottom-Befehle zurückzusetzen, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.
