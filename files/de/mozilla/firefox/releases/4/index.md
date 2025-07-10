---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Firefox 4, der am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattformentwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht es auch, Inhalte wie [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einzubetten.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierungen und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt nun die neuen HTML5-Elemente, die sich auf Dokumentabschnitte beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite auszublenden, die momentan für den Benutzer nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt nun auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets API zur Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass die in Firefox 4 implementierten WebSockets nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Canvas-Verbesserungen

Folgende Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation zu bringen:

- Das Angeben eines negativen Radius bei `arc()` löst nun korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Das Angeben nicht endlicher Werte bei `createLinearGradient()` und `createRadialGradient()` löst nun `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus, sondern ignoriert ordnungsgemäß nicht positive Werte.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus, sondern ignoriert ordnungsgemäß nicht positive Werte.
- Die `putImageData()`-Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig skalierbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()`-Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild der Canvas-Inhalte enthält. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn ein nicht erkannter Wert gesetzt wird.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn ein nicht erkannter Wert gesetzt wird, und unterstützt den nicht standardmäßigen `darker`-Wert nicht mehr.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element, das durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt den Aufruf von `click()` auf {{HTMLElement("input")}}-Elementen zum Öffnen des Dateiauswahldialogs. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie die Beschriftung für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden nun ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und stimmt mit dem Verhalten anderer Browser überein.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Damit können Sie {{cssxref("length")}}-Werte als mathematische Ausdrücke angeben.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Hintergrundbild-Subrechteck-Unterstützung
  - : Die Funktion {{cssxref("-moz-image-rect")}} ermöglicht es, Unterrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und tatsächliche Artikelnamen folgen später.
- [Arbiträre Elemente als CSS-Hintergründe verwenden](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Änderungen wurden vorgenommen, um festzulegen, welche Informationen über den Stil besuchter Links mithilfe von CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht die Anpassung erweiterter Funktionen von OpenType-Schriftarten.</td>
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
        Ermöglicht Ihnen, die Dimensionen zu steuern, in denen ein Element
        skaliert werden darf.
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
      <td>Angewandt auf Platzhaltertext in Formularfeldern.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Angewendet auf den Absenden-Knopf in Formularen, wenn eines oder mehrere
        der Formularfelder nicht gültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Angewandt auf Elemente in inaktiven Fenstern.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Automatisch auf {{HTMLElement("input")}}-Felder angewandt, wenn
        deren Inhalte ungültig sind.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>
        Automatisch auf {{HTMLElement("input")}}-Felder angewandt, die
        das <code>required</code>-Attribut nicht spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Automatisch auf {{HTMLElement("input")}}-Felder angewandt, die
        das <code>required</code>-Attribut spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>
        Automatisch auf {{HTMLElement("input")}}-Felder angewandt, wenn
        deren Inhalte erfolgreich validieren.
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
        Ermöglicht Ihnen, das Erscheinungsbild eines Elements zu spezifizieren,
        wenn Gecko der Ansicht ist, dass eine Fokusanzeige gerendert werden sollte.
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
      <td>Ermöglicht das Gruppieren von Selektoren und Faktorisieren von Kombinatoren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht die Spezifikation von
        {{cssxref("length")}}-Werten als
        mathematische Ausdrücke.
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                               |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                              |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Seiten zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um die neueste Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                           |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt nun den Weichzeichnungsradius auf 300px aus Gründen der Vernunft und Leistung.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellengruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt nun den `-moz-win-borderless-glass`-Wert, der einem Element ein rahmenloses Aero-Glass-Aussehen verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/@media/-moz-device-pixel-ratio)-Medienfunktion wurde hinzugefügt, sodass der Einsatz des Pixelverhältnisses des Gerätes pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) möglich ist.
- Die Behandlung von CSS-{{cssxref("length")}}-Einheiten in Gecko wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirmpixelzählungen basierend auf der DPI des Geräts zu übersetzen.

### Grafiken und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um die Grafik- und Videoleistung in Firefox 4 optimal zu nutzen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animationen mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie als CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung des `buffered`-Attributs für Medien
  - : Das `buffered`-Attribut für {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente wird jetzt unterstützt, wodurch Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- `preload`-Attribut für Medien
  - : Das im HTML5-Spezifikation beschriebene `preload`-Attribut wurde implementiert und ersetzt das bislang implementierte (und nicht länger unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- SVG-Textpositionsverbesserungen
  - : Sie können nun Listen für die Werte der `x`, `y`, `dx`, und `dy`-Eigenschaften bei SVG-{{SVGElement("text")}} und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht Ihnen, die Positionierung jedes einzelnen Zeichens in einer Zeichenkette individuell zu steuern.

### DOM

- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Die Unterstützung für JavaScript typisierte Arrays wurde hinzugefügt; dies ermöglicht es Ihnen, Puffer mit Rohdaten unter Verwendung nativer Datentypen zu manipulieren. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Grenzenrechtecke für Bereiche erhalten
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt verfügt jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Mausereignisse auf beliebigen Elementen erfassen
  - : Die Unterstützung für die ursprünglich im Internet Explorer eingeführten `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Verlauf des Browsers manipulieren](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlauf-Objekt, zugänglich über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die aufeinander abgestimmt sind.
- Touch- und Multi-Touch-Ereignisse
  - : Die Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### Die DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen zu den in der HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene Änderungen im DOM

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM gesteuert werden, über das `wrap`-Attribut. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich nun standardmäßig entsprechend der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden ausgeführt, sobald sie verfügbar sind (ohne Reihenfolge zu beachten), und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um Skripte mit `src`-Attribut, die der Einfügereihenfolge nach ausgeführt werden, zu erstellen, setzen Sie `.async=false` auf ihnen.
- DOM-[`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- Unterstützung von [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects) für `XMLHttpRequest`.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es Ihnen festzustellen, welches {{HTMLElement("script")}}-Element derzeit ausgeführt wird. Die neuen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) werden direkt vor und nach der Ausführung eines Skript-Elements ausgelöst.
- Der `mozSourceNode`-Eigenschaft zum [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt wurde hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde zum [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; damit können Sie die aktuelle Textauswahl oder die Cursorposition in einem Browserfenster leicht ändern.
- Die Unterstützung für das `window.directories`-Objekt und das `directories`-Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie `personalbar` stattdessen. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es, die Art des Geräts zu bestimmen, das ein Ereignis ausgelöst hat.
- Das [`Document`](/de/docs/Web/API/Document)[`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert in Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und die [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)-Methoden wurden hinzugefügt, was es ermöglichen, dass Elemente Mouse-Events weiterhin verfolgen können, auch wenn sich die Maus nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgbereichs befindet.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie ermöglicht es festzustellen, wie oft ein Dokument gerendert wurde. Dies kann nützlich sein, um die Leistung Ihrer Webanwendung zu testen.
- Der Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation) Header. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt stellt nun die Antwort sowohl als JavaScript-typisiertes Array als auch als Zeichenkette über die Gecko-spezifische `mozResponseArrayBuffer`-Eigenschaft bereit.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druckwert auf unterstützten druckempfindlichen Eingabegeräten anzeigt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen die Erstellung von Objekt-URLs, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn die angegebene Selektor-Zeichenfolge ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit demselben Kurzsyntax wie bei CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Das Dokumentstamm hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Modus beschreibt, einschließlich eines Hinweises darauf, ob das private Browsing für die Sitzung temporär oder dauerhaft ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode ist jetzt optional, wie in jedem anderen großen Browser.
- Das DOM-[`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht nun der neuesten Version der Spezifikation.
- Die minimale zulässige Verzögerung für die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Präferenz, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch Setzen einer Präferenz wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Die Content Security Policy (CSP) ist ein Vorschlag von Mozilla, der Webdesignern und Serveradministratoren dabei helfen soll, zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektion zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser mitzuteilen, dass sie nur über HTTPS kommunizieren sollen, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte X-FRAME-OPTIONS HTTP-Antwort-Header wird jetzt von Firefox unterstützt. Damit können Websites angeben, ob ihre Seiten in Frames verwendet werden dürfen und wenn ja, ob dies auf den gleichen Ursprung beschränkt werden soll.
- [Änderungen des User Agent-Strings](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : Um die Menge der in HTTP-Anfragen gesendeten Daten und Entropie zu reduzieren (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden der Kryptostärke- und der Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die Änderungen, die in JavaScript 1.8.5 implementiert wurden, siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Übereinstimmungen mit dem ECMAScript 5-Standard aufweisen.

### Entwickler-Tools

- [Die Web-Konsole verwenden](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web Konsole-Tool ist ein nützliches Debugging-Hilfsmittel sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig ab Gecko 2.0 deaktiviert. Sie können sie durch Ändern der `devtools.errorconsole.enabled`-Präferenz auf `true` und Neustarten des Browsers wieder aktivieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 siehe [Erweiterungen für Firefox 4 aktualisieren](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit vorhandenen Add-ons beeinträchtigen, daher sollten Sie diesen Artikel unbedingt lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Codemodul bietet Getter, die es erleichtern, Referenzen auf häufig genutzte Dienste zu erhalten, wie etwa den Präferenzdienst oder den Fenstermediator, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible Fremdbibliotheksfunktionen ohne XPCOM aufzurufen.
- [Add-ons Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul erleichtert das Präsentieren ansprechender, nicht modaler Benachrichtigungen an den Benutzer. Sie können sehen, wie Sie diese API in [Popup-Benachrichtigungen verwenden](/de/docs/Using_popup_notifications) verwenden.
- [Laden von Code-Modulen von chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können nun JavaScript-Code-Module mithilfe von **chrome:**-URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Codemodul stellt die globale Variable `gDownloadLastDir` bereit, welche eine Zeichenkette enthält, die Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download stattgefunden hat. Dieses Modul behandelt Probleme im Zusammenhang mit privatem Browsen für Sie.
- [Leistungsmessung mit dem PerfMeasurement.jsm-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Codemodul bietet eine API zur Messung von CPU-Leistungsdaten in JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Codemodul bietet jetzt die Methode `readInputStreamToString()`, die es ermöglicht, beliebige Bytes aus einem Stream in eine Zeichenkette zu lesen, auch wenn der Stream Nullzeichen enthält.
- Das XPCOMUtils.jsm-Codemodul bietet jetzt IterSimpleEnumerator() und IterStringEnumerator() als Helfer zur Iteration über XPCOM-Enumeratoren.
- Sie können jetzt [Arbeiter in JavaScript-Codemodulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Worker für privilegierten Code; damit können Sie Dinge wie [js-ctypes](/de/docs/js-ctypes) aus Arbeitern in Erweiterungen und Anwendungscode verwenden.
- [Touch Events](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch Events wurde hinzugefügt; diese ermöglichen es, mehrere Finger, die sich gleichzeitig auf einem Touchscreen bewegen, zu verfolgen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, aber bevor noch keine Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Auswirkungen auf Erweiterungen haben, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs, ändern diese Änderungen auch die Tableiste in eine Standard-Werkzeugleiste, wodurch Benutzer Toolbar-Schaltflächen hineinziehen können.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` blubbern nicht mehr bis zum `<xul:tabbrowser>`-Element (`gBrowser`). Ereignis-Listener für diese Ereignisse sollten zu `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt an `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blog-Post](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für mehr Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um ein Array der derzeit sichtbaren Tabs zu erhalten; damit können Sie bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird von Firefox Panorama verwendet, zum Beispiel.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die es ermöglicht, das Favicon eines Tabs ohne den `<xul:browser>`-Element hochziehen zu müssen.
- Die neue Eigenschaft `tabbrowser.tabs` wurde hinzugefügt, die es ermöglicht, einfach eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen das Pinnen und Entpinnen von Tabs (d.h. das Umschalten zwischen App-Tabs und regulären Tabs).
- Die neuen Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden dem `<xul:tabbrowser>` hinzugefügt, um tab-modale Alarme zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten `<xul:menupopup>` stattdessen verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Probleme stoßen, da das Element keine spezielle Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die den Knoten angibt, auf dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch das Hinzufügen eines Auslöser-Ereignisses als Parameter zur `openPopup`-Methode. Außerdem wurde die Eigenschaft `anchorNode` hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet nun `fade`- und `flip`-Attribute, die das Verhalten neuer "Pfeil"-Benachrichtigungspanels konfigurieren.

#### Entfernte Unterstützung für Remote XUL

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können Sie keine XUL-Dokumente mehr mithilfe von `file://`-URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die es ermöglicht, bestimmten Domains zu erlauben, Remote-XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es jetzt, das `element`-Attribut zu spezifizieren, um ein Element anstelle des Fensters zu skalieren.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es Ihnen ermöglicht, zu spezifizieren, dass der Resizer für ein Fenster und nicht für ein Element ist, um zu verhindern, dass der Fensterresizer zweimal gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive`-Pseudoklasse verwenden, um Hintergrundfenstern unterschiedliche Stile zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten `placeholder` stattdessen verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn es wahr ist, ist dem Hardware Layer Manager erlaubt, das Fenster zu beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die `bottom`- und `right`-Attribute.
- Ereignisse werden jetzt während der `<xul:toolbox>`-Anpassung ausgelöst, was es Ihnen erlaubt, Änderungen an Toolbars zu erkennen.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die `:-moz-tree-row`-Pseudoklasse stattdessen verwenden.
- Die Überlauf-Schaltfläche der Lesezeichen-Symbolleiste mit dem anonid chevronPopup ist nicht mehr anonym; sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die das alte `_tabbox`-Eigentum ersetzt, welches veraltet ist (und nie dokumentiert wurde).
- XUL-`<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, was es Ihnen erlaubt, zu erkennen, wenn Tabs gepinnt und entpinnt werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, was Ihnen ermöglicht, festzustellen, ob ein Tab derzeit gepinnt ist oder nicht.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hat seit einiger Zeit nichts mehr bewirkt; jetzt wird sie nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das es Ihnen ermöglicht, den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dies verwenden, um in die Titelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um den größten Teil des Chromes in einem Fenster auszublenden, wenn es verwendet wird, um in-Browser-Benutzeroberfläche, wie `about:addons`, anzuzeigen.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt dies nicht unterstützt. Dies wird zum Beispiel von der Add-ons-Leiste verwendet.
- Toolbars können nun extern zu Toolboxes sein, während sie immer noch als Mitglied der `<xul:toolbox>` betrachtet werden, indem Sie die Eigenschaft `toolboxid` des `<xul:toolbar>` setzen. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Toolbars auflistet, die als Mitglieder der Toolbox betrachtet werden.
- Unterstützung wurde hinzugefügt, um XUL-Vorlagen zum Debuggen zu protokollieren.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Wenn Sie in der Vergangenheit UI zur Statusleiste hinzugefügt haben, müssen Sie Ihre Erweiterung entsprechend aktualisieren.
- Browser-Chrome ausblenden
  - : Sie können jetzt das Chrome des Browsers ausblenden, wenn es wünschenswert ist; zum Beispiel tut `about:addons` dies.

### Speicherung

#### Verschiedene Speicher-API-Änderungen

- Die `mozIStorageBindingParamsArray`-Schnittstelle hat jetzt ein Längenattribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Callback an, um benachrichtigt zu werden, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es ermöglicht, die Menge anzugeben, um die eine Datenbankdatei jeweils vergrößert wird, um SQLite bei der Reduzierung der Fragmentierung zu unterstützen.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstelle von `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den nachfolgend genannten spezifischen Änderungen ist es wichtig zu beachten, dass es keine gefrorene Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt ungefroren, unabhängig davon, was die Dokumentation vielleicht sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verbunden ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gegeben hat. Wesentlicher ist jedoch, dass die `nsINavHistoryResultViewer`-Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu ermöglichen, den Abschluss des Herunterfahrens des Places-Services zuverlässiger zu verfolgen. Davon sind die meisten nur für den internen Gebrauch, aber die `places-connection-closed`-Benachrichtigung steht zur Verfügung, um zu wissen, wann der Places-Service seinen Herunterfahrvorgang abgeschlossen hat.
- Der Array-Größen-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü manuell mit Places-Informationen erstellen und füllen, anstatt dies automatisch für Sie zu erledigen. Siehe [Places-Informationen mit Ansichten anzeigen: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell`- und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um Codewege für Dokumente zu optimieren, die derzeit nicht sichtbar sind.
- Die Methode `nsIMemory.isLowMemory()` der `nsIMemory`-Schnittstelle ist veraltet. Sie sollten ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Speichermangel-Situationen zu achten.
- Die API zum Umgang mit Weiterleitungen auf HTTP-Kanälen hat sich geändert, um es zu ermöglichen, diese asynchron zu verarbeiten. Jeder Code, der Weiterleitungen mithilfe von `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` stattdessen zu verwenden. Dies akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die es ermöglicht, Places-Operationen in Chargen zu gruppieren, wodurch die Anzahl der übermittelten Update-Benachrichtigungen reduziert wird, was die Leistung verbessern kann, wenn die Beobachter relativ umfangreiche Aufgaben (wie z.B. das Aktualisieren von Ansichten) durchführen.
- Die längst veraltete `nsIPref`-Schnittstelle wurde endlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestiegen sind, ist jetzt der Zeitpunkt dafür.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` haben Änderungen erfahren, um die On-Demand-Sitzungswiederherstellung zu unterstützen. Siehe die `nsISessionStore.restoreLastSession()`-Methode.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` der `nsIPrincipal`-Schnittstelle sowie die Attribute `origin`, `csp` und `URI` sind jetzt aus Skripten verfügbar; zuvor waren sie nur aus nativen Code verfügbar.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Alarme; siehe [Verwenden von tab-modalen Warnungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt korrekterweise Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, die Zeichencodierung des Skripts anzugeben; wenn keine angegeben wird, wird ASCII angenommen (so wie es schon immer angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Sie war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die `nsIContentView`- und `nsIContentViewManager`-Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie stellen eine scrollbare Inhaltsansicht dar, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die Schnittstelle `nsISyncJPAKE` wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Fehlersichere Speicheralokation](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt fehlersichere Speicheralokatoren, die garantiert keinen null-Wert zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit fehlertolerante oder fehlersichere Speicheralokation anfordern können.

### Andere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden zu einem einzigen JAR-Archiv, `omni.jar`, kombiniert, was die Startleistung verbessert, indem es die I/O reduziert. Für Details siehe [Über omni.jar](/de/docs/About_omni.jar).
- Die `accessibility.disablecache`-Präferenz wird nicht mehr unterstützt; sie war nur für Debugging-Zwecke verfügbar und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung von plattspezifischen Verzeichnissen in Add-on-Paketen, können Sie keine unterschiedlichen Standardpräferenzen für jede Plattform mehr bereitstellen.
- Standardmäßig [werden Erweiterungen beim Installieren nicht mehr entpackt](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen werden, [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite), oder Dinge vom Dateisystem relativ zum Verzeichnis der Erweiterung kopieren, müssen möglicherweise ihren Code ändern.
- Sie können jetzt Erweiterungen einschließen, die [automatisch beim Programmstart installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines angepassten Firefox.

## Andere Änderungen

- Nur die Root-chrome.manifest-Datei wird geladen
  - : Nur die Root-`chrome.manifest`-Datei wird jetzt geladen; wenn Sie zusätzliche Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrer Root-`chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Inhaltsprozess-Ereignisverarbeitung](/de/docs/The_message_manager)
  - : Um Plugins außerhalb des Prozesses und andere Mehrprozessfunktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten zwischen Prozessen zu unterstützen.
- [Bootstrap-Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder heruntergestuft) werden können, ohne dass ein Neustart des Browsers erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungsordner für Plugins wurde ebenfalls standardmäßig entfernt, obwohl die Unterstützung für das Installieren von Plugins über diesen Ordner weiterhin existiert. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch den [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Keine HWNDs für untergeordnete Fenster mehr verwendet
  - : Firefox erstellt keine untergeordneten HWNDs mehr für seine interne Verwendung auf Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung in Firefox 4 nicht funktionieren. Sie müssen entweder aufhören, HWNDs zu verwenden, oder Ihren Code, der auf HWNDs angewiesen ist, in einem [NPAPI](/de/docs/NPAPI)-Plugin einpacken. Das ist viel Arbeit, daher sollten Sie, wenn möglich, vermeiden, HWNDs direkt zu verwenden.
- Änderungen an Gesten
  - : Die Gesten zum Hoch- und Herunterscrollen mit drei Fingern auf Trackpads wurden geändert, um standardmäßig die Firefox-Panorama-Ansicht zu öffnen und zu schließen. Um diese auf die vorherigen scroll-oben- und scroll-unten-Befehle zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
