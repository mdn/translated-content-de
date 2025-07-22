---
title: Firefox 4 für Entwickler
short-title: Firefox 4
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und verbessert die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen sowohl für Webentwickler, Add-on-Entwickler als auch Entwickler der Gecko-Plattform zur Verfügung stehen.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht es auch, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in das HTML-Markup einzubetten.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf die Verbesserungen der Webformulare. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die derzeit für den Benutzer nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie in Firefox 4 implementiert, nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden am [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation heranzuführen:

- Wenn ein negativer Radius beim Aufruf von `arc()` angegeben wird, wird nun korrekt eine `INDEX_SIZE_ERR`-Ausnahme ausgelöst.
- Bei Angabe nicht-endlicher Werte beim Aufruf von `createLinearGradient()` und `createRadialGradient()` wird nun `NOT_SUPPORTED_ERR` statt `SYNTAX_ERR` ausgelöst.
- Wenn `miterLimit` auf einen negativen Wert gesetzt wird, wird nun keine Ausnahme mehr ausgelöst, sondern nicht-positive Werte werden ordnungsgemäß ignoriert.
- Wenn `lineWidth` auf einen negativen Wert gesetzt wird, wird keine Ausnahme mehr ausgelöst, sondern nicht-positive Werte werden ordnungsgemäß ignoriert.
- Die `putImageData()`-Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig größenveränderbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()`-Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild des Inhalts der Leinwand enthält. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für weitere Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt den nicht-standardmäßigen Wert `darker` nicht mehr.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern nicht vorhanden war, wurde entfernt.
- Das `<isindex>`-Element, das durch den Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen festlegen können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und gleicht das Verhalten anderer Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Damit können Sie {{cssxref("length")}}-Werte als mathematische Ausdrücke angeben.
- Selektorgruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung von Hintergrundbildunterrechtecken
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht es, Unterrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Toucheigenschaften
  - : Unterstützung für Toucheigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)-DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergrund zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Es wurden Änderungen daran vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht die Anpassung fortgeschrittener Funktionen von OpenType-Schriftarten.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite in Leerzeichenzeichen eines Tabzeichens (U+0009) beim
        Rendern von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es, die Dimensionen zu steuern, in denen ein Element
        skalierbar ist.
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
        Wird auf den Senden-Button in Formularen angewendet, wenn eines oder
        mehrere Felder des Formulars nicht gültig sind.
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
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements anzugeben,
        wenn Gecko der Auffassung ist, dass eine Fokusanzeige gerendert
        werden sollte.
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
      <td>Ermöglicht es, Selektoren zu gruppieren und Kombinatoren zu faktorisieren.</td>
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                                      |
| ---------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                                     |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Webseiten zu aktualisieren. Änderungen beim Rendern wurden ebenfalls vorgenommen, um der neuesten Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                                  |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Unschärferadius aus Gründen der Vernunft und Leistung auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft wird nicht mehr auf Tabellengrupenelemente (`<thead>`, `<tbody>`, und `<tfoot>`) angewendet.
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element ein rahmenloses Aero-Glas-Aussehen verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/@media/-moz-device-pixel-ratio)-Medienfunktion wurde hinzugefügt, sodass das Verhältnis von Gerätepixeln pro CSS-Pixel in [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Verarbeitung von CSS-{{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirmpixelanzahlen basierend auf der DPI des Geräts zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie als CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung des Medien-Attributs `buffered`
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Das [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Interface wurde implementiert, um dies zu unterstützen.
- Medien-Attribut `preload`
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das vorher implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie das `nsIDOMHTMLMediaElement`-Interface.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der Eigenschaften `x`, `y`, `dx` und `dy` auf SVG-{{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen festlegen. Dies ermöglicht es, die Positionierung jedes Zeichens in einer Zeichenfolge individuell zu steuern.

### DOM

- [JavaScript-Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-Typed Arrays wurde hinzugefügt; dies ermöglicht die Manipulation von Puffern, die Rohdaten enthalten, unter Verwendung nativer Datentypen. Mehrere APIs nutzen dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Ermittlung von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlauf-Objekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- Animationen unter Verwendung von `MozBeforePaint`
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die aufeinander abgestimmt sind.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die in der HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM gesteuert werden, über das `wrap`-DOM-Attribut. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich nun standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden ausgeführt, sobald sie verfügbar sind (ohne Reihenfolge beizubehalten), und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um sicherzustellen, dass eingefügte Skripte mit dem `src`-Attribut in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` auf ihnen.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)-Unterstützung für `XMLHttpRequest`.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft lässt Sie bestimmen, welches {{HTMLElement("script")}}-Elementscript derzeit ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event)-Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder die Cursorposition in einem Browserfenster einfach zu ändern.
- Unterstützung für das `window.directories`-Objekt und das `directories`-Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu DOM-Benutzerschnittstellenereignissen hinzugefügt; diese nicht-standardmäßige Eigenschaft lässt Sie die Art des Geräts bestimmen, das ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document)-[`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert in Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture)- und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)-Methoden wurden hinzugefügt, sodass Elemente auch weiterhin Mausereignisse verfolgen, selbst wenn sich die Maus nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie gibt an, wie oft ein Dokument gerendert wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Der Sprach-Token wurde von [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gibt jetzt die Antwort sowohl als JavaScript-Typed Array als auch als String aus, unter Verwendung der Gecko-spezifischen `mozResponseArrayBuffer`-Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)- und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)-Methoden lassen Sie Objektulrs erstellen, die auf lokale Dateien verweisen.
- Die [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument)-Methode lässt Sie ein neues HTML-Dokument erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR`-Ausnahme aus, wenn der angegebene Selektorzeichenfolgen ungültig ist, anstelle falsch `false` zurückzugeben.
- Sie können jetzt die SVG-Eigenschaftswerte eines Elements mit der gleichen Kurzsyntax wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Das Dokumentwurzel hat jetzt ein [„privatebrowsingmode“-Attribut](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Modus beschreibt, einschließlich eines Hinweises darauf, ob der private Modus für die Sitzung vorübergehend oder dauerhaft ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode ist jetzt optional, genau wie in jedem anderen großen Browser.
- Das DOM-Objekt [`StorageEvent`](/de/docs/Web/API/StorageEvent) entspricht jetzt der neuesten Version der Spezifikation.
- Die minimal zulässige Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)- und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)-Methoden ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](https://web.archive.org/web/20191010014917/https://developer.mozilla.org/de/docs/Web/Events#Add-on-specific_events)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann durch Setzen einer Präferenz wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Die Content Security Policy (CSP) ist ein Vorschlag von Mozilla, mit dem Webdesigner und Serveradministratoren festlegen können, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und zu mildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser mitzuteilen, dass sie nur über HTTPS und nicht über HTTP kommunizieren sollte.
- [Der X-FRAME-OPTIONS-Response-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der von Internet Explorer 8 eingeführte X-FRAME-OPTIONS-HTTP-Response-Header wird jetzt von Firefox unterstützt. Damit können Webseiten angeben, ob ihre Seiten in Frames verwendet werden können und, falls ja, ob dies auf denselben Ursprung beschränkt werden soll.
- [User-Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)-Änderungen
  - : Um die Menge an Daten und Entropie zu reduzieren, die in HTTP-Anfragen gesendet werden (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke- und Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neues in JavaScript 1.8.5](https://web.archive.org/web/20210516173330/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Konformität mit dem ECMAScript 5-Standard besitzen.

### Entwicklertools

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Tool Webkonsole ist eine nützliche Debug-Hilfe sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die `devtools.errorconsole.enabled`-Einstellung auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 siehe [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit vorhandenen Add-ons brechen, achten Sie also darauf, diesen Artikel zu lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Änderungen an Themes in Firefox 4](https://web.archive.org/web/20210515184532/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Code-Module

- [Services.jsm](https://web.archive.org/web/20210417185248/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Referenzen auf häufig verwendete Dienste zu erhalten, wie z. B. den Voreinstellungsdienst oder den Fenstervermittler, unter anderem.
- [JS-ctypes API](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes)
  - : Die JS-ctypes-API ermöglicht es, C-kompatible Bibliotheksfunktionen ohne Verwendung von XPCOM aufzurufen.
- [Add-ons-Manager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und Möglichkeiten, Add-ons zu installieren und zu entfernen.
- [PopupNotifications.jsm](https://web.archive.org/web/20210414083224/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht-modale Benachrichtigungen an den Benutzer zu präsentieren. Sie können sehen, wie diese API verwendet wird in [Verwendung von Popup-Benachrichtigungen](https://web.archive.org/web/20210411021529/https://developer.mozilla.org/de/docs/Mozilla/Using_popup_notifications).
- [Laden von Code-Modulen von chrome:-URLs](https://web.archive.org/web/20210529003507/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:**-URLs laden, sogar in JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](https://web.archive.org/web/20210615230651/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/DownloadLastDir.jsm)-Code Modul bietet die globale Variable `gDownloadLastDir`, die einen Zeichenfolgen enthält, den Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download stattgefunden hat. Dieses Modul kümmert sich um private Browser-Probleme für Sie.
- [Messung der Leistung mit dem PerfMeasurement.jsm-Code-Modul](https://web.archive.org/web/20210420142952/https://developer.mozilla.org/de/docs/Mozilla/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](https://web.archive.org/web/20210620175828/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API, um CPU-Leistungsdaten in JavaScript-code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in eine Zeichenfolge zu lesen, auch wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt IterSimpleEnumerator()- und IterStringEnumerator()-Hilfsmittel zum Iterieren über XPCOM-Aufzählungen.
- Sie können jetzt [Arbeiter in JavaScript-Code-Modulen verwenden](https://web.archive.org/web/20210620192749/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Arbeitertyp für privilegierten Code; dies erlaubt die Verwendung von Dingen wie [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) von Arbeitern in Erweiterungen und Anwendungs-Code.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es, mehrere Finger zu verfolgen, die gleichzeitig auf einem Touchscreen bewegt werden.

#### Weitere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, jedoch bevor Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am Tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Auswirkungen auf Erweiterungen haben, die mit Tabs interagieren. Neben der Unterstützung von App-Tabs werden durch diese Änderungen auch die Tab-Leiste in eine Standard-Toolbar umgewandelt, sodass der Benutzer Toolbar-Schaltflächen hineinziehen kann.

- Die `TabClose`-, `TabSelect`- und `TabOpen`-Ereignisse steigen nicht mehr bis zum `<xul:tabbrowser>`-Element (`gBrowser`) auf. Ereignislistener für diese Ereignisse sollten zum `gBrowser.tabContainer` und nicht direkt zum `gBrowser` hinzugefügt werden.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Weitere Details finden Sie in [diesem Blogartikel](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um ein Array der derzeit sichtbaren Tabs zu erhalten; dies ermöglicht es Ihnen zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; diese wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die es Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element zu durchsuchen.
- Die neue `tabbrowser.tabs`-Eigenschaft wurde hinzugefügt, die es Ihnen einfach ermöglicht, eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs zu pinnen und zu entpinnen (d.h. sie zwischen App-Tabs und regulären Tabs umzuschalten).
- Die Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden zum `<xul:tabbrowser>` hinzugefügt, um tab-modale Alarme zu unterstützen.

#### Änderungen an Pop-ups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten `<xul:menupopup>` stattdessen verwenden. (Wenn Sie `popup` weiterhin verwenden, stoßen Sie auf Fehler, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die das Knoten angibt, auf dem das Ereignis aufgetreten ist, das dazu geführt hat, dass das Pop-up geöffnet wurde. Dies erforderte auch die Hinzufügung eines trigger-Ereignisparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Pop-ups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade`- und `flip`-Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil-Benachrichtigungspaneele zu konfigurieren.

#### Unterstützung für Remote XUL wurde entfernt

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; zudem können XUL-Dokumente nicht mehr über `file://`-URLs geladen werden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, mit der bestimmte Domains Remote XUL laden können.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element lässt Sie jetzt das `element`-Attribut verwenden, um ein Element anzugeben, das verkleinert werden soll, anstatt das Fenster zu verkleinern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es Ihnen ermöglicht, anzugeben, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `"active"`-Attribut wird auf aktiven XUL-Fenstern nicht mehr gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive`-Pseudoklasse verwenden, um verschiedenen Hintergrundfenstern verschiedene Stile zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn true, darf der Hardware-Schichtmanager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der Anpassung des `<xul:toolbox>` ausgelöst, sodass Sie Änderungen an Toolbars erkennen können.
- Das Attribut `alternatingbackground` für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können stattdessen die `:-moz-tree-row`-Pseudoklasse verwenden.
- Der Überlaufknopf der Lesezeichen-Symbolleiste mit anonid chevronPopup ist nicht mehr anonym; er hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert war).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, was das Zeichnen in die Titelleiste ermöglicht.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, die es Ihnen ermöglichen zu erkennen, wann Tabs gepinnt und entpinnt werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn die `label`-, `crop`-, `busy`-, `image`- oder `selected`-Attribute eines Tabs geändert werden.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das es Ihnen ermöglicht zu bestimmen, ob ein Tab derzeit gepinnt ist oder nicht.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hat seit einiger Zeit keine Funktion mehr; jetzt wird sie gar nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, mit dem Sie den Rand zwischen Chrome und Inhalt an jeder Seite eines Fensters festlegen können; Sie können dies verwenden, um z. B. in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um den größten Teil des Chromes in einem Fenster zu verbergen, wenn es verwendet wird, um in-Browser-UI anzuzeigen, wie etwa `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt diese nicht unterstützt. Dies wird z. B. vom Add-ons-Panel verwendet.
- Symbolleisten können jetzt extern zu Toolboxes sein, während sie weiterhin als Mitglied der `<xul:toolbox>` betrachtet werden, indem die `toolboxid`-Eigenschaft der `<xul:toolbar>` festgelegt wird. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Symbolleisten aufführt, die als Mitglieder der Toolbox betrachtet werden.
- Unterstützung für das Protokollieren von XUL-Vorlagen wurde für Debugging-Zwecke hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie bisher UI in der Statusleiste hinzugefügt haben.
- Browser-Chrome verstecken
  - : Sie können jetzt das Browser-Chrome verbergen, wenn es wünschenswert ist; zum Beispiel tut `about:addons` dies.

### Speicher

#### Verschiedene Änderungen an der Speicher-API

- Das `mozIStorageBindingParamsArray`-Interface hat jetzt ein length-Attribut, das die Anzahl der `mozIStorageBindingParams`-Objekte in der Reihe angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, wodurch Sie eine bestehende Datenbankverbindung klonen können.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, wodurch Sie eine Datenbankverbindung asynchron schließen können; Sie geben einen Callback an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, mit der Sie angeben können, um wie viel eine Datenbankdatei pro Eintrag wachsen soll, um SQLite dabei zu helfen, die Fragmentierung zu reduzieren.
- Der Fehler `SQLITE_CONSTRAINT` wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` statt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten referenzierten spezifischen Änderungen ist es wichtig zu beachten, dass es keine gefrierte Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt ungefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)
  - : Details über Änderungen an XPCOM, die die Kompatibilität mit Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](https://web.archive.org/web/20210625071536/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall des nun entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`-, `nsINavHistoryQueryOptions`- und `nsINavHistoryContainerResultNode`-Schnittstellen gegeben hat. Wesentlich ist, dass die `nsINavHistoryResultViewer`-Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications) wurden hinzugefügt, um es dem Browser zu ermöglichen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst seinen Herunterfahrprozess abgeschlossen hat.
- Der Ausgabearraygröße-Parameter von mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü manuell erstellen und mit Places-Informationen befüllen, anstatt dies für Sie erledigen zu lassen. Details finden Sie unter [Anzeige von Places-Informationen mithilfe von Ansichten: Menüansicht](https://web.archive.org/web/20201028190050/https://developer.mozilla.org/de/docs/Mozilla/Displaying_Place_information_using_views#menu_view).

### Schnittstellenänderungen

- Die `nsIDocShell`- und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das zur Optimierung von Codepfaden für Dokumente verwendet wird, die derzeit nicht sichtbar sind.
- Die `nsIMemory`-Methode `nsIMemory.isLowMemory()` ist veraltet. Sie sollten stattdessen ["memory-pressure"-Benachrichtigungen](https://web.archive.org/web/20210516060454/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemory#low_memory_notifications) verwenden, um auf Speichermangelsituationen zu achten.
- Die API zur Bearbeitung von Umleitungen auf HTTP-Kanälen wurde geändert, um es zu ermöglichen, sie asynchron zu verarbeiten. Jeglicher Code, der die Umleitungsbearbeitung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen ist.
- Die `nsINavHistoryResultObserver.batching()`-Methode wurde hinzugefügt, die es ermöglicht, Places-Operationen in Batchs zusammenzufassen, wodurch die Anzahl der empfangenen Update-Benachrichtigungen reduziert werden, was die Leistung verbessern kann, wenn Beobachter relativ umfangreiche Aufgaben (wie das Aktualisieren von Ansichten) durchführen.
- Das seit langem veraltete `nsIPref`-Interface wurde schließlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestiegen sind, ist jetzt der richtige Zeitpunkt dafür.
- Die `nsISessionStore`- und `nsISessionStartup`-Schnittstellen erhielten Änderungen, um die Bedarfswiederherstellung von Sitzungen zu unterstützen. Siehe die `nsISessionStore.restoreLastSession()`-Methode.
- Die `nsIPrincipal`-Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie deren `origin`-, `csp`- und `URI`-Attribute, sind jetzt aus dem Skript verfügbar; vorher waren sie nur aus dem nativen Code verfügbar.
- Das `nsIPrompt`-Interface unterstützt jetzt tab-modale Warnungen; siehe [Verwendung von tab-modalen Eingabeaufforderungen](https://web.archive.org/web/20210513121539/https://developer.mozilla.org/de/docs/Mozilla/Using_tab-modal_prompts) für Details.
- Die `nsIEffectiveTLDService.getPublicSuffixFromHost()`-Methode lehnt jetzt Hostnamen, die mit einem Punkt (".") beginnen, korrekt ab.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, mit dem Sie die Zeichencodierung des Scripts angeben können; wenn keine angegeben wird, wird ASCII angenommen (wie immer angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Sie war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die `nsIContentView`- und `nsIContentViewManager`-Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie stellt eine scrollbaren Inhaltsansicht dar, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 zum Schreiben in INI-Dateien hinzugefügt.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](https://web.archive.org/web/20201026230445/https://developer.mozilla.org/de/docs/Mozilla/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuweiser, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu lernen, wie sie funktionieren und wie man ausdrücklich fallible versus unfehlbare Speicherzuweisung anfordert.

### Weitere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden zu einem einzigen JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung durch Reduzierung von E/A verbessert. Für Details lesen Sie [Über omni.jar](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).
- Die Präferenz `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur für Debuggingzwecke ausgestellt und wird nicht mehr verwendet.
- Add-ons, deren GUID zwischen Versionen wechselt, können jetzt korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung von plattformspezifischen Verzeichnissen in Add-on-Bundles können Sie keine unterschiedlichen Standardvoreinstellungen mehr für jede Plattform bereitstellen.
- Standardmäßig [werden Erweiterungen bei der Installation nicht mehr entpackt](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Add-ons können das [unpack](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#unpack)-Property im [Installationsmanifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Erweiterungen, die Binärkomponenten, DLLs, die mithilfe von [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) geladen werden, [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstericons verwenden, müssen spezifizieren, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](https://web.archive.org/web/20201109001036/https://developer.mozilla.org/de/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Local_Storage#sqlite), oder Dinge relativ zum Verzeichnis der Erweiterung dateisysteme übertragen, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einbinden, die [automatisch bei der Anwendungserstellung installiert werden](https://web.archive.org/web/20180604010849/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) in einem angepassten Firefox.

## Weitere Änderungen

- Es wird nur noch die root chrome.manifest Datei geladen
  - : Es wird nur noch die root `chrome.manifest`-Datei geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den Befehl [`manifest`](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#manifest) in Ihrer root `chrome.manifest`-Datei verwenden, um sie zu laden.
- Entfernte Gopher-Unterstützung
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Verarbeitung von Ereignissen im Inhaltsprozess](https://web.archive.org/web/20210531151101/https://developer.mozilla.org/de/docs/Mozilla/Firefox/Multiprocess_Firefox/Message_Manager)
  - : Um das Auslagern von Prozessen und andere Mehrprozess-Funktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapping-Erweiterungen](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und upgraded (oder downgraded) werden können, ohne einen Browser-Neustart zu erfordern.
- Entferntes Standard-Plugin
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde standardmäßig ebenfalls entfernt, jedoch besteht weiterhin Unterstützung für die Installation von Plugins über diesen Ordner. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager ersetzt durch Add-on-Manager
  - : `nsIExtensionManager` wurde durch den [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) ersetzt.
- Kind-HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Kind-HWNDs mehr für seine interne Verwendung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, funktioniert Ihre Erweiterung nicht mehr auf Firefox 4. Sie müssen entweder die Verwendung von HWNDs einstellen oder Ihren Code, der auf HWNDs angewiesen ist, in einem NPAPI-Plugin verwenden. Das ist eine Menge Arbeit, also wenn Sie die direkte Verwendung von HWNDs vermeiden können, sollten Sie das tun.
- Gestenänderungen
  - : Die Drei-Finger-Aufwärts- und Abwärtsstreichgesten auf Touchpads wurden so geändert, dass sie standardmäßig die Firefox Panorama-Ansicht öffnen und schließen. Um diese in die vorherigen Scroll-zum-Top und Scroll-zum-Bottom-Befehle zu ändern, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.
