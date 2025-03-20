---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 62f49419c2c97353749cf9d21df9e205a60ca62b
---

{{FirefoxSidebar}}

Firefox 4, veröffentlicht am 22. März 2011, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Web-Technologien und verbessert die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen sowohl für Webentwickler, Add-on-Entwickler als auch für Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht es außerdem, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einzubetten.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Überblick über Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Sektionen](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 `hidden`-Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verstecken, die für den Benutzer zurzeit nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Nutzung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass die in Firefox 4 implementierten WebSockets nicht mit dem endgültigen Standard kompatibel sind und im Allgemeinen nicht verwendet werden sollten.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation heranzubringen:

- Wenn ein negativer Radius bei `arc()` angegeben wird, wird nun korrekt eine `INDEX_SIZE_ERR`-Ausnahme ausgelöst.
- Die Angabe von nicht-finiten Werten bei `createLinearGradient()` und `createRadialGradient()` führt nun zu `NOT_SUPPORTED_ERR` statt `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; statt dessen werden nicht-positive Werte ordentlich ignoriert.
- Die `putImageData()`-Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig skalierbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die spezifische `mozGetAsFile()`-Methode von Mozilla, mit der Sie eine speicherbasierte Datei erhalten, die ein Bild des Canvas-Inhalts enthält. Einzelheiten finden Sie unter [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt nicht mehr den nicht standardmäßigen `darker`-Wert.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element, wenn es durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und stimmt mit dem Verhalten anderer Browser überein.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt, was es ermöglicht, {{cssxref("length")}}-Werte als mathematische Ausdrücke anzugeben.
- Selektorgruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Hintergrundbild-Subrechtecke
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht die Verwendung von Subrechtecken von Bildern als {{cssxref("background-image")}}.
- CSS-Eigenschaften für Berührung
  - : Unterstützung für Berührungseigenschaften wurde hinzugefügt. Einzelheiten und reale Artikelnamen folgen später.
- [Verwenden beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)-DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Privatsphäre und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Änderungen wurden vorgenommen, welche Informationen über den Stil von besuchten Links mittels CSS-Selektoren erhalten werden können. Dies kann einige Webanwendungen beeinflussen.

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
        Gibt die Breite in Leerzeichen eines Tabulators (U+0009) beim
        Darstellen von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es Ihnen zu steuern, in welchen Dimensionen ein Element
        verändert werden darf.
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
        Ermöglicht es Ihnen, das Erscheinungsbild eines Elements anzugeben,
        wenn Gecko der Meinung ist, dass eine Fokusanzeige gerendert werden sollte.
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
        Ermöglicht es Ihnen, {{cssxref("length")}}-Werte als
        mathematische Ausdrücke anzugeben.
      </td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>
        Ermöglicht es Ihnen, ein beliebiges Element als Hintergrund
        für {{cssxref("background-image")}} und
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

| Alter Name             | Neuer Name                     | Hinweise                                                                                                                                                                                                               |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                           |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Seiten zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um die neueste Version der Spezifikation zu erfüllen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                        |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt aus Gründen der Vernunft und Leistung den Unschärferadius auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellengruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element ein randloses Aero-Glass-Erscheinungsbild verleiht.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio)-Medienmerkmal wurde hinzugefügt, das die Verwendung des Verhältnisses von Gerätepixeln pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) ermöglicht.
- Die Handhabung von CSS {{cssxref("length")}}-Einheiten durch Gecko wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und um absolute Längen genauer in Bildschirmpixel auf Grundlage der DPI des Geräts zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element sowie als CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung des `buffered`-Attributs in Medien
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, wodurch Sie ermitteln können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert um dies zu unterstützen.
- Medien `preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen bei der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der Eigenschaften `x`, `y`, `dx` und `dy` auf SVG {{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht es Ihnen, die Positionierung jedes Zeichens in einer Zeichenfolge individuell zu steuern.

### DOM

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung wurde für JavaScript-typisierte Arrays hinzugefügt; dies ermöglicht es Ihnen, Puffer mit Rohdaten mithilfe nativer Datentypen zu manipulieren. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Ermitteln von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt bietet jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer entstammten `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Bearbeiten des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das existierende Dokumentverlauf-Objekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5 `pushState()`- und `replaceState()`-Methoden.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, welches in Verbindung mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Multitouch-Ereignisse
  - : Unterstützung für Touch- und Multitouch-Ereignisse wurde hinzugefügt.

#### Änderungen an den DOM-Schnittstellen von HTML-Elementen

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die im HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |

#### Verschiedene DOM-Änderungen

- Die Umbrüchelemente von {{HTMLElement("textarea")}} können jetzt über das DOM gesteuert werden, über das `wrap`-DOM-Attribut. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden sofort ausgeführt, sobald sie verfügbar sind (ohne die Reihenfolge einzuhalten) und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um zu verhindern, dass eingefügte Skripte mit dem `src`-Attribut in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` auf ihnen.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es Ihnen zu bestimmen, welches {{HTMLElement("script")}}-Element derzeit ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute) Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; dies ermöglicht es, die aktuelle Textauswahl oder die Cursorposition in einem Browserfenster leicht zu ändern.
- Unterstützung für das `window.directories`-Objekt und das `directories`-Merkmal für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu den DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es Ihnen, den Typ des Geräts zu ermitteln, das ein Ereignis erzeugt hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert im Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) Methoden wurden hinzugefügt, die es ermöglichen, dass Elemente weiterhin Mausereignisse verfolgen, selbst wenn sich der Mauszeiger nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie ermöglicht es Ihnen zu bestimmen, wie oft ein Dokument gerendert wurde. Dies kann nützlich sein, um die Leistung Ihrer Webanwendung zu testen.
- Das Sprachkennzeichen wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt gibt die Antwort jetzt als JavaScript-typisiertes Array und als Zeichenkette unter Verwendung der Gecko-spezifischen `mozResponseArrayBuffer`-Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten nun eine `mozPressure`-Eigenschaft, die anzeigt, wie viel Druck auf unterstützte druckempfindliche Eingabegeräte ausgeübt wird.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft nun eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektorstring ungültig ist, anstatt irrtümlich `false` zurückzugeben.
- Sie können jetzt die SVG-Eigenschaftswerte eines Elements mit derselben Kurznotation wie bei CSS einstellen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Einzelheiten.
- Das Dokumentenstamm-Element hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Modus beschreibt, einschließlich eines Hinweises darauf, ob der private Modus temporär oder permanent für die Sitzung ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie in jedem anderen großen Browser.
- Das DOM-Objekt [`StorageEvent`](/de/docs/Web/API/StorageEvent) entspricht nun der neuesten Version der Spezifikation.
- Die minimale erlaubte Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Methode ist jetzt eine Einstellung, `dom.min_timeout_value`.
- Das Ereignis [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint) wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch Aktivieren einer Einstellung erneut aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein Mozilla-Vorschlag, der es Webdesignern und Serveradministratoren ermöglicht, festzulegen, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und abzumildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser mitzuteilen, dass sie nur mittels HTTPS kommunizieren sollen, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS-Antwortheader](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte X-FRAME-OPTIONS-HTTP-Antwortheader wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzugeben, ob ihre Seiten in Frames verwendet werden können, und wenn ja, ob dies auf denselben Ursprung beschränkt werden soll.
- [User-Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox) Änderungen
  - : Um die Menge an Daten und Entropie, die in HTTP-Anfragen gesendet werden, zu reduzieren (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden das Kryptostärke- und Sprachkennzeichen aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen, siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Adhärenz zum ECMAScript 5-Standard haben.

### Entwicklertools

- [Verwendung der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web-Konsolen-Tool ist eine nützliche Debugging-Hilfe für Webentwickler und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie durch Ändern der `devtools.errorconsole.enabled`-Einstellung auf `true` und Neustart des Browsers wieder aktivieren.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 siehe [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wesentliche Änderungen, die die Kompatibilität mit bestehenden Add-ons beeinträchtigen, daher lesen Sie unbedingt diesen Artikel.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, deren Sie sich bewusst sein müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Referenzen zu häufig verwendeten Diensten wie dem Voreinstellungsdienst oder dem Fenster-Mediator zu erhalten, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes-API ermöglicht es, C-kompatible Fremdbibliotheksfunktionen ohne Verwendung von XPCOM aufzurufen.
- [Add-ons Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und bietet Möglichkeiten, Add-ons zu installieren und zu entfernen.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul erleichtert es, attraktive, nicht-modale Benachrichtigungen an den Benutzer zu präsentieren. Wie Sie diese API verwenden können, sehen Sie in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications).
- [Code-Module von chrome:-URLs laden](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module mit **chrome:**-URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul bietet die `gDownloadLastDir`-globale Variable, die eine Zeichenkette enthält, die Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download erfolgte. Dieses Modul kümmert sich um Probleme im Zusammenhang mit dem privaten Surfen für Sie.
- [Leistungsmessung mit dem PerfMeasurement.jsm-Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API, um CPU-Level-Leistungsdaten im JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die `readInputStreamToString()`-Methode, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in eine Zeichenkette zu lesen, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt die Helfer `IterSimpleEnumerator()` und `IterStringEnumerator()`, um über XPCOM-Aufzähler zu iterieren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules) verwenden.

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Workertyp für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) aus Worker in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger, die sich gleichzeitig auf einem Touchscreen bewegen, zu verfolgen.

#### Weitere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Stammdokument-Element erstellt wird, jedoch bevor darauf irgendwelche Skripte ausgeführt werden.

### XUL

#### Änderungen am `tabbrowser`-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, deren Schaltflächen hineinzuziehen.

- Die Ereignisse `TabClose`, `TabSelect`, und `TabOpen` propagieren nicht mehr bis zum `<xul:tabbrowser>`-Element (`gBrowser`). Ereignis-Listener für diese Ereignisse sollten zu `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Kontextmenü der Tabs ist nicht mehr ein anonymes Kind des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, die es Ihnen ermöglicht, ein Array der derzeit sichtbaren Tabs zu erhalten; dies ermöglicht es Ihnen zu bestimmen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox-Panorama verwendet.
- Die neue `showOnlyTheseTabs`-Methode wurde hinzugefügt; diese wird von Firefox-Panorama verwendet.
- Die neue `getIcon`-Methode ermöglicht es Ihnen, ein Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element anzeigen zu müssen.
- Die neue `tabbrowser.tabs`-Eigenschaft ermöglicht es Ihnen, leicht eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs als App-Tabs oder reguläre Tabs zu markieren bzw. nicht mehr zu markieren.
- Die `getTabModalPromptBox`-Methode und das `tabModalPromptShowing`-Attribut wurden zum `<xul:tabbrowser>` hinzugefügt, um modale Tab-Hinweise zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten `<xul:menupopup>` stattdessen verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Störungen stoßen, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat nun eine `triggerNode`-Eigenschaft, die den Knoten angibt, an dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch die Hinzufügung eines Auslöserereignisparameters zur `openPopup`-Methode. Zudem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt die Attribute `fade` und `flip`, die verwendet werden, um das Verhalten von neuen "Pfeil"-Stil-Benachrichtigungsfenstern zu konfigurieren.

#### Entfernte Unterstützung für Remote-XUL

Remote-XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; zudem können Sie XUL-Dokumente nicht mehr mit `file://`-URLs laden, es sei denn, Sie erstellen die Voreinstellung `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains das Laden von Remote-XUL zu erlauben.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen jetzt, das `element`-Attribut zu verwenden, um ein Element zum Vergrößern anzugeben, anstatt das Fenster zu bearbeiten.
- Das `<xul:resizer>`-Element hat nun ein `type`-Attribut, das es Ihnen ermöglicht anzugeben, dass der Resizer für ein Fenster und nicht für ein Element ist, um zu verhindern, dass der Fenster-Resizer doppelt gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Sie können stattdessen die neue `:-moz-window-inactive`-Pseudoklasse verwenden, um verschiedenen Stilen für Hintergrundfenster zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten `placeholder` stattdessen verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut an; wenn dies auf true gesetzt ist, darf der Hardware-Ebenenmanager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der `<xul:toolbox>`-Anpassung ausgelöst, sodass Sie Änderungen an den Werkzeugleisten erkennen können.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die Pseudoklasse `:-moz-tree-row` stattdessen verwenden.
- Die Überlauf-Schaltfläche der Lesezeichen-Symbolleiste mit anonid chevronPopup ist nicht mehr anonym; sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; falls dies auf `true` gesetzt ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse stehen zur Verfügung, sodass Sie erkennen können, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image`, oder `selected`-Attribute eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das es Ihnen ermöglicht zu erkennen, ob ein Tab derzeit angeheftet ist.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hat seit einiger Zeit nichts mehr bewirkt; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das es Ihnen ermöglicht, den Abstand zwischen Chrome und Inhalt an jeder Seite eines Fensters festzulegen; dies können Sie verwenden, um zum Beispiel in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um den größten Teil des Chrome in einem Fenster auszublenden, wenn es verwendet wird, um In-Browser-Benutzeroberflächen darzustellen, wie zum Beispiel `about:addons`.
- Das `<xul:window>`-Element verfügt jetzt über ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt es nicht unterstützt. Dies wird zum Beispiel von der Add-ons-Panel verwendet.
- Werkzeugleisten können jetzt außerhalb von Toolboxes betrachtet werden, während sie immer noch als Mitglieder der `<xul:toolbox>` betrachtet werden können, indem Sie die `toolboxid`-Eigenschaft der `<xul:toolbar>` setzen. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder der Toolbox betrachtet werden.
- Unterstützung für das Protokollieren von XUL-Vorlagen für Debugging-Zwecke wurde hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Falls Sie in der Vergangenheit eine Benutzeroberfläche zur Statusleiste hinzugefügt haben, sollten Sie Ihre Erweiterung aktualisieren, um diese zu verwenden.
- Ausblenden der Browser-Chrome
  - : Sie können jetzt das Browser-Chrome ausblenden, wenn es wünschenswert ist, dies zu tun; zum Beispiel macht dies `about:addons`.

### Speicherung

#### Verschiedene Änderungen der Speicher-API

- Die `mozIStorageBindingParamsArray`-Schnittstelle hat jetzt ein Länge-Attribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn die angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es Ihnen erlaubt, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es Ihnen erlaubt, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Rückruf an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es Ihnen erlaubt anzugeben, um wie viel eine Datenbankdatei vergrößert wird, um SQLite bei der Reduzierung der Fragmentierung zu helfen.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstatt als `NS_ERROR_FAILURE` berichtet.

### XPCOM

Zusätzlich zu den spezifischen Änderungen, die unten aufgeführt sind, ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt ungefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinträchtigen.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall des nun entfernten `__parent__`.

### Orte

- Rückfrage-Ergebnisse können jetzt von mehreren Beobachtern beobachtet werden und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass einige Änderungen an den `nsINavHistoryResult`, `nsINavHistoryQueryOptions`, und `nsINavHistoryContainerResultNode` Schnittstellen vorgenommen wurden. Bedeutender ist, dass die `nsINavHistoryResultViewer`-Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um es dem Browser zu ermöglichen, den Herunterfahr-Prozess des Places-Dienstes verlässlicher zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch bestimmt, aber die `places-connection-closed`-Benachrichtigung steht zur Verfügung, um zu wissen, wann der Places-Dienst seinen Herunterfahr-Prozess abgeschlossen hat.
- Das Arraygrößen-Ausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Menüs mit Places-Informationen manuell erstellt und gefüllt werden, anstatt dass dies automatisch erfolgt. Siehe [Places-Information mit Ansichten anzeigen: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die Schnittstellen `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um Codepfade für Dokumente zu optimieren, die derzeit nicht sichtbar sind.
- Die `nsIMemory`-Methode `nsIMemory.isLowMemory()` wurde veraltet. Sie sollten ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um nach niedrigen Speichersituationen zu suchen.
- Die API zur Verarbeitung von Weiterleitungen auf HTTP-Kanälen hat sich geändert, um sie asynchron verarbeiten zu können. Jeder Code, der die Weiterleitungsverarbeitung unter Verwendung von `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` stattdessen zu verwenden. Dies akzeptiert einen Rückruf-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Chargen zu gruppieren, wodurch die Anzahl der Update-Benachrichtigungen verringert wird, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben ausführen (wie zum Beispiel das Aktualisieren von Ansichten).
- Die längst veraltete `nsIPref` Schnittstelle wurde endlich entfernt. Wenn Sie noch nicht auf `nsIPrefService` umgestellt haben, ist jetzt der richtige Zeitpunkt.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` haben Änderungen erfahren, um die bedarfsabhängige Sitzungswiederherstellung zu unterstützen. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()`, sowie die Attribute `origin`, `csp`, und `URI` der `nsIPrincipal`, sind jetzt vom Skript aus verfügbar; zuvor waren sie nur vom nativen Code aus verfügbar.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Warnungen; siehe [Verwendung von tab-modalen Aufforderungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` wird jetzt korrekt alle Hostnamen ablehnen, die mit einem Punkt starten (".").
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, mit dem Sie den Zeichensatz des Skripts angeben können; wenn keiner angegeben wird, wird ASCII angenommen (dies wurde immer angenommen).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Es war ein Implementierungsdetail, das seinen Nutzen überlebt hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Sie stellen eine scrollbare Inhaltsansicht dar, deren Inhalte von einem separaten Prozess gezeichnet werden.
- Die Schnittstelle `nsIDiskCacheStreamInternal` wurde hinzugefügt.
- Die Schnittstelle `nsIExternalURLHandlerService` wurde hinzugefügt.
- Die Schnittstelle `nsISyncJPAKE` wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die Schnittstelle `nsIINIParserWriter` wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicher-Allokatoren, die garantiert kein null zurückgeben. Lesen Sie diesen Artikel, um zu erfahren, wie sie funktionieren und wie Sie wahlweise eine fehlbare oder unfehlbare Speicher-Allokation anfordern können.

### Weitere Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einzelnes JAR-Archiv, `omni.jar`, zusammengefasst, das die Startleistung verbessert, indem die E/A reduziert wird. Details finden Sie unter [About omni.jar](/de/docs/About_omni.jar).
- Die Voreinstellung `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken ausgesetzt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebenwirkung der Entfernung von plattformspezifischen Verzeichnissen in Addon-Bundles können Sie keine unterschiedlichen Standardvoreinstellungen mehr für jede Plattform bereitstellen.
- Standardmäßig [werden Addons bei der Installation nicht mehr entpackt](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus den XPI-Dateien ausgeführt. Addons können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft in der [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Addons, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen wurden, [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Addons, die [eine SQLite-Datenbank erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Addons-Verzeichnis vom Dateisystem kopieren, müssen möglicherweise ebenfalls ihren Code ändern.
- Sie können jetzt Addons verwenden, die [beim Starten der Anwendung automatisch installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer angepassten Firefox-Distribution.

## Weitere Änderungen

- Nur die root chrome.manifest Datei wird geladen
  - : Nur die Root-`chrome.manifest`-Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in Ihrer Root-`chrome.manifest`-Datei verwenden, um diese zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nativ nicht mehr unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Eventhandling im Inhaltsprozess](/de/docs/The_message_manager)
  - : Um Plugins außerhalb des Prozesses und andere multiprozessfähige Funktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten zwischen Prozessen zu unterstützen.
- [Gebootstrappte Addons](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Addons erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne dass ein Browser-Neustart erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugin-Ordner wurde auch standardmäßig entfernt, jedoch wird die Installation von Plugins über diesen Ordner weiterhin unterstützt. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Der Erweiterungs-Manager wurde durch den Add-on-Manager ersetzt
  - : `nsIExtensionManager` wurde durch den [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child-HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Child-HWNDs mehr für interne Zwecke auf Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung in Firefox 4 nicht funktionieren. Sie müssen entweder die Verwendung von HWNDs einstellen oder Ihren Code, der auf HWNDs angewiesen ist, in einem [NPAPI](/de/docs/NPAPI)-Plugin umschließen. Das ist viel Arbeit, daher, wenn Sie die Verwendung von HWNDs direkt vermeiden können, sollten Sie dies tun.
- Änderungen bei Gesten
  - : Die drei Finger nach oben und unten Wischgesten auf Trackpads wurden standardmäßig geändert, um die Firefox-Panorama-Ansicht (ehemals TabCandy) zu öffnen und zu schließen. Um dies auf die vorherigen Scroll-nach-oben- und Scroll-nach-unten-Befehle zurückzusetzen, öffnen Sie about:config und stellen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop` ein.

## Siehe auch

{{Firefox_for_developers}}
