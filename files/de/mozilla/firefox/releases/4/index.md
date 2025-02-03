---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{FirefoxSidebar}}

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Er ermöglicht auch die direkte Einbindung von [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) in das HTML-Markup.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Überblick über Verbesserungen an Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Sektionen](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das für alle Elemente gebräuchlich ist, wird verwendet, um Inhalte auf einer Webseite auszublenden, die dem Benutzer momentan nicht relevant sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel sind und nicht generell verwendet werden sollten.

#### Canvas-Verbesserungen

Folgende Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung besser an die Spezifikation anzupassen:

- Die Angabe eines negativen Radius beim Aufrufen von `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Die Angabe von nicht-finiten Werten beim Aufrufen von `createLinearGradient()` und `createRadialGradient()` löst jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind nun standardmäßig skalierbar; Sie können die CSS-Eigenschaft {{cssxref("resize")}} verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische Methode `mozGetAsFile()`, mit der Sie eine speicherbasierte Datei erstellen können, die ein Bild der Canvas-Inhalte enthält. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird und unterstützt nicht mehr den nicht standardmäßigen `darker`-Wert.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element, das durch den Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt den Aufruf von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt jetzt ein neues `mozactionhint`-Attribut, das es Ihnen ermöglicht, die Bezeichnung für die Eingabetaste auf virtuellen Tastaturen festzulegen.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und gleicht das Verhalten anderer Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es Ihnen, {{cssxref("length")}}-Werte als mathematische Ausdrücke anzugeben.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any` zur Gruppierung von Selektoren und zum Faktor von Kombinatoren.
- Unterstützung für Teilrechteck der Hintergrundbilder
  - : Die Funktion {{cssxref("-moz-image-rect")}} ermöglicht es, Teilrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und tatsächliche Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die CSS-Funktion `-moz-element` und die DOM-Funktion [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Es wurden Änderungen daran vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren abgerufen werden können. Dies könnte sich auf einige Webanwendungen auswirken.

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
        Gibt die Breite in Leerzeichen an, die ein Tab-Zeichen (U+0009) beim
        Rendern von Text einnimmt.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht es Ihnen, die Dimensionen zu steuern, in denen ein Element geändert werden darf.
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
      <td>Wird verwendet, um Elemente zu gestalten, deren Plugins abgestürzt sind.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formularelementen angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf den Absenden-Button in Formularen angewendet, wenn eines oder mehrere Felder des Formulars
        nicht validiert werden.
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
        Ermöglicht es Ihnen, das Aussehen eines Elements zu definieren, wenn Gecko glaubt, dass eine
        Fokusanzeige gerendert werden sollte.
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                  |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                 |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Rendering-Änderungen wurden auch vorgenommen, um der aktuellen Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                              |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt die Weichzeichnungsradius auf 300px, um Vernunft und Performance zu sichern.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellen-Gruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt nun den Wert `-moz-win-borderless-glass`, der einem Element ein rahmenloses Aero-Glass-Aussehen verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio)-Medienfunktion wurde hinzugefügt, wodurch das Verhältnis der Geräte-Pixel pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Geckos Handhabung von CSS {{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirmpixel ganzzahlenbasiert auf der DPI des Geräts zu übersetzen.

### Grafiken und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um die Grafik- und Videoleistung in Firefox 4 optimal zu nutzen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats#webm)
  - : Das neue, offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für die SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können nun SVG mit dem {{htmlelement("img")}}-Element sowie einem CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung für das `buffered`-Attribut in Medien
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird nun unterstützt, sodass Sie bestimmen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen bei der SVG-Textpositionierung
  - : Sie können nun Listen für die Werte der `x`, `y`, `dx` und `dy`-Eigenschaften auf SVG {{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht die individuelle Steuerung der Positionierung jedes Zeichens in einer Zeichenfolge.

### DOM

- [JavaScript-Typ-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-Typ-Arrays wurde hinzugefügt; dies ermöglicht Ihnen das Manipulieren von Puffern mit Rohdaten unter Verwendung nativer Datentypen. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Abrufen von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen an beliebigen Elementen
  - : Die Unterstützung für die ursprünglich in Internet Explorer eingeführten `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox bug 503943](https://bugzil.la/503943).
- [Manipulation der Browser-Historie](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumenthistorieobjekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das zusammen mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit bietet, synchronisierte Animationen zu erstellen.
- Touch- und Mehrfachtouch-Ereignisse
  - : Unterstützung für Touch- und Mehrfachtouch-Ereignisse wurde hinzugefügt.

#### Änderungen der DOM-Schnittstellen von HTMLelementen

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf diejenigen geändert, die durch die HTML5-Spezifikation erforderlich sind, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Elemente                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Wrapping eines {{HTMLElement("textarea")}}-Elements kann nun über das DOM gesteuert werden, über das `wrap` DOM-Attribut. [Firefox bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden so schnell wie möglich ausgeführt (ohne die Reihenfolge beizubehalten), und Skripte ohne `src`-Attribut werden synchron ausgeführt. Um eingefügte Skripte zu erzwingen, die das `src`-Attribut aufweisen, um der Einfügereihenfolge nach auszuführen, setzen Sie `.async=false` auf ihnen.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft ermöglicht es Ihnen zu bestimmen, welches {{HTMLElement("script")}}-Element-Skript gerade ausgeführt wird. Neue [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute) Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde zum [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde zum [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition in einem Browserfenster einfach zu ändern.
- Die Unterstützung für das `window.directories`-Objekt und das `directories` Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu den DOM-Benutzeroberfläche-Ereignissen hinzugefügt; diese nicht standardisierte Eigenschaft lässt Sie den Typ des Geräts bestimmen, das ein Ereignis erzeugt hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert im Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture)-Methoden wurden hinzugefügt, um es Elementen zu erlauben, Mausereignisse weiter zu verfolgen, selbst wenn die Maus außerhalb ihres normalen Verfolgungsbereichs ist, nachdem ein `mousedown`-Ereignis aufgetreten ist.
- Die `window.mozPaintCount` Eigenschaft wurde hinzugefügt; es ermöglicht Ihnen zu bestimmen, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprachtoken wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Content_negotiation)-Header. [Firefox bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt stellt jetzt die Antwort sowohl als JavaScript-Typ-Array als auch als Zeichenkette zur Verfügung, unter Verwendung der speziell in Gecko vorhandenen `mozResponseArrayBuffer`-Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten anzeigt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn die angegebene Selektorzeichenfolge ungültig ist, anstelle fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte von SVG-Eigenschaften eines Elements mit dem gleichen Kurzformatsyntax wie bei CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Das Dokumentwurzelelement hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Status des privaten Surfmodus beschreibt, einschließlich eines Hinweises, ob das private Surfen für die Sitzung temporär oder dauerhaft ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie es in jedem anderen bedeutenden Browser der Fall ist.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimal zulässige Verzögerung für die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Einstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann durch das Setzen einer Einstellung erneut aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla vorgeschlagenes Konzept, das Webdesignern und Serveradministratoren helfen soll, wie Inhalte auf ihren Websites interagieren. Das Ziel ist es, Angriffe zu erkennen und zu mildern, darunter Cross-Site-Scripting- und Dateninjektionsangriffe.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser anzuweisen, dass sie nur über HTTPS kommunizieren sollen, anstatt über HTTP.
- [Der X-FRAME-OPTIONS Antwortkopfzeile](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Die X-FRAME-OPTIONS HTTP-Antwortkopfzeile, die in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzuzeigen, ob ihre Seiten in Frames verwendet werden können oder nicht, und falls ja, ob dies auf den gleichen Ursprung beschränkt wird.
- [Änderungen der User-Agent-Zeichenfolge](/de/docs/Web/HTTP/Headers/User-Agent/Firefox)
  - : Als Mittel zur Reduzierung der Menge der in HTTP-Anfragen gesendeten Daten und Entropie (siehe [Firefox bug 572650](https://bugzil.la/572650)) wurden die Cryptostärke und Sprach-Token aus der User-Agent-Zeichenfolge entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird eine zusätzliche Einhaltung des ECMAScript 5-Standards haben.

### Entwicklerwerkzeuge

- [Verwendung der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsolenwerkzeug ist eine nützliche Debugging-Hilfe sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig ab Gecko 2.0 deaktiviert. Sie können sie erneut aktivieren, indem Sie die Einstellung `devtools.errorconsole.enabled` auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4 siehe [Aktualisierung von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons brechen, also stellen Sie sicher, diesen Artikel zu lesen.

Wenn Sie ein Thementwickler sind, sollten Sie [Themes-Änderungen in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Sie kennen müssen.

### JavaScript-Codemodule

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Codemodul bietet Getter, die es einfach machen, Referenzen auf häufig verwendete Dienste zu erhalten, wie z.B. den Präferenzdienst oder den Fenstervermittler, unter anderem.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht es, C-kompatible Funktionen aus fremden Bibliotheken aufzurufen, ohne XPCOM zu verwenden.
- [Add-ons-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht modale Benachrichtigungen für den Benutzer zu präsentieren. Sie können sehen, wie diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwendet wird.
- [Laden von Codemodulen über chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Codemodule unter Verwendung von **chrome:** URLs laden, sogar in JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Codemodul bietet die globale Variable `gDownloadLastDir`, die eine Zeichenfolge enthält, die es Ihnen ermöglicht, den Pfad des Verzeichnisses, in dem der letzte Download erfolgte, zu erfahren. Dieses Modul behandelt für Sie Probleme im Zusammenhang mit dem privaten Surfen.
- [Messung der Leistung mit dem PerfMeasurement.jsm Codemodul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Codemodul bietet eine API zur Messung von Leistungsdaten auf der CPU-Ebene im JavaScript-Code.

#### Verschiedene Änderungen an Codemodulen

- Das `NetUtil.jsm` Codemodul bietet jetzt die Methode `readInputStreamToString()`, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in eine Zeichenkette zu lesen, auch wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm Codemodul bietet jetzt die Hilfsfunktionen IterSimpleEnumerator() und IterStringEnumerator(), um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Worker in JavaScript-Codemodulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Eine neue Art von Worker für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Workern in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardisierte) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen die Verfolgung mehrerer Finger, die sich gleichzeitig auf einem Touchscreen bewegen.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn ein Dokumentwurzelelement erstellt wird, aber bevor Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Werkzeugleistenschaltflächen hinein zu ziehen.

- Die `TabClose`, `TabSelect` und `TabOpen` Ereignisse blasen nicht mehr bis auf das `<xul:tabbrowser>`-Element (`gBrowser`) auf. Ereignis-Listener für diese Ereignisemitglieder sollten auf `gBrowser.tabContainer` und nicht direkt zu `gBrowser` hinzugefügt werden.
- Das Tab-Kontextmenü ist nicht mehr ein anonymes Kind des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs` Eigenschaft wurde hinzugefügt, um Ihnen ein Array der derzeit sichtbaren Tabs zu geben; dies ermöglicht Ihnen festzustellen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, die es Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>` Element heraufziehen zu müssen.
- Die neue Eigenschaft `tabbrowser.tabs` wurde hinzugefügt, die es Ihnen ermöglicht, einfach eine Liste der Tabs in einem `<xul:tabbrowser>` Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs zu pinnen und zu entpinnen (d.h. sie zwischen App-Tabs und regulären Tabs umzuschalten).
- Die neue Methode `getTabModalPromptBox` und das Attribut `tabModalPromptShowing` wurden dem `<xul:tabbrowser>` hinzugefügt, um tabmodale Alarme zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>` Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Probleme stoßen, da das Element keine spezielle Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die angibt, auf welches Knoten das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch die Hinzufügung eines Auslöserereignisparameters zur `openPopup`-Methode. Auch die `anchorNode`-Eigenschaft wurde hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade` und `flip` Attribute, welche das Verhalten neuer "Pfeil"-Benachrichtigungspanels konfigurieren.

#### Unterstützung für Remote-XUL entfernt

Remote-XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; auch können Sie XUL-Dokumente nicht mehr mit `file://` URLs laden, es sei denn, Sie erstellen die Einstellung `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmten Domains das Laden von Remote-XUL zu ermöglichen.

#### Verschiedene XUL-Änderungen

- Das Attribut `readonly` funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es jetzt, das `element`-Attribut zu verwenden, um ein Element anstelle des Fensters zu skalieren.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es ermöglicht festzulegen, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer doppelt gezeichnet wird.
- Das `"active"`-Attribut wird auf aktiven XUL-Fenstern nicht mehr gesetzt. Stattdessen können Sie die neue Pseudoklasse `:-moz-window-inactive` verwenden, um verschiedenen Hintergrundfenster Stile zuzuweisen.
- Das Attribut `emptytext` ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das Element `<xul:window>` bietet jetzt ein Attribut `accelerated`, welches erlaubt, dass der Hardware-Layer-Manager das Fenster beschleunigen darf.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der `<xul:toolbox>`-Anpassung ausgelöst, sodass Sie Änderungen an Werkzeugleisten erkennen können.
- Das Attribut `alternatingbackground` für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die Pseudoklasse `:-moz-tree-row` stattdessen verwenden.
- Die Schaltfläche für den Überlauf des Bookmarks-Toolbars mit anonid chevronPopup ist nicht mehr anonym; es hat eine ID "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das Attribut `drawintitlebar`; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned` Ereignisse sind verfügbar, um zu erkennen, wann Tabs angepinnt und wieder gelöst werden.
- Das neue `TabAttrModified` Ereignis wird gesendet, wenn sich die Attribute `label`, `crop`, `busy`, `image` oder `selected` ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das es Ihnen ermöglicht zu bestimmen, ob ein Tab derzeit angepinnt ist.
- Die Klasse `setDirectionIndicator` auf `<xul:tree>`-Elementen hat seit einiger Zeit nichts mehr gemacht; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das es Ihnen ermöglicht, den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dies verwenden, um beispielsweise in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um die meisten Chrome in einem Fenster auszublenden, wenn es zum Anzeigen von In-Browser-UIs wie `about:addons` verwendet wird.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird beispielsweise vom Add-ons-Panel verwendet.
- Werkzeugleisten können jetzt extern zu Toolboxen sein, während sie immer noch als Mitglied der `<xul:toolbox>` betrachtet werden, indem die `toolboxid` Eigenschaft des `<xul:toolbar>` eingestellt wird. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder der Toolbox betrachtet werden.
- Unterstützung wurde für das Protokollieren von XUL-Vorlagen hinzugefügt, um Debuggingzwecke zu unterstützen.

### Änderungen an der Benutzeroberfläche für Entwickler

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihr Erweiterung aktualisieren, um dies zu verwenden, wenn Sie in der Vergangenheit Benutzeroberfläche zur Statusleiste hinzugefügt haben.
- Verbergen von Browser-Chrome
  - : Sie können jetzt das Chrome des Browsers ausblenden, wenn es erwünscht ist; zum Beispiel `about:addons` macht dies.

### Speicherung

#### Verschiedene Änderungen an der Speicher-API

- Die Schnittstelle `mozIStorageBindingParamsArray` hat jetzt ein Längenattribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Rückruf an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es Ihnen ermöglicht, die Menge anzugeben, um die eine Datenbankdatei erweitert wird, um SQLite zu helfen, Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` gemeldet anstelle von `NS_ERROR_FAILURE`.

### XPCOM

Zusätzlich zu den unten erwähnten spezifischen Änderungen ist es wichtig zu beachten, dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht mehr gefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die sich auf die Kompatibilität in Firefox 4 auswirken.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall der jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den Interfaces `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gibt. Wesentlich bedeutender ist, dass das Interface `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um dem Browser zu helfen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch, aber die `places-connection-closed` Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst seinen Abschaltprozess abgeschlossen hat.
- Der Ausgabeparameter für die Arraygröße bei mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü manuell erstellen und mit Places-Informationen füllen, anstatt dass es für Sie erledigt wird. Siehe [Anzeige von Places-Informationen mit Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell` und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um die Optimierung von Codepfaden für derzeit nicht sichtbare Dokumente zu ermöglichen.
- Die `nsIMemory`-Methode `nsIMemory.isLowMemory()` wurde veraltet. Sie sollten [Benachrichtigungen über "memory-pressure"](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf niedrige Speicherplatzsituationen zu achten.
- Die API für die Handhabung von Umleitungen auf HTTP-Kanälen hat sich geändert, um sie asynchroner zu bearbeiten. Jedes Code, das Umleitungsbearbeitung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um stattdessen `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Rückrufhandler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen wurde.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Batches zu gruppieren, die Anzahl der gesendeten Aktualisierungsbenachrichtigungen zu reduzieren und die Leistung zu verbessern, wenn Beobachter relativ umfassende Aufgaben ausführen (wie das Aktualisieren von Ansichten).
- Die längst veraltete `nsIPref`-Schnittstelle wurde schließlich entfernt. Wenn Sie noch nicht zu `nsIPrefService` gewechselt sind, ist jetzt der richtige Zeitpunkt dafür.
- Die Schnittstellen `nsISessionStore` und `nsISessionStartup` erhielten Änderungen zur Unterstützung der bedarfsgesteuerten Sitzungswiederherstellung. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` der `nsIPrincipal`-Schnittstelle sowie ihre Attribute `origin`, `csp` und `URI` sind jetzt über Skripte verfügbar; zuvor waren sie nur über nativen Code erreichbar.
- Die Schnittstelle `nsIPrompt` unterstützt jetzt tabmodale Alarme; siehe [Verwendung von tabmodalen Aufforderungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt korrekt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, das Zeichensatz des Skripts anzugeben; wenn keines angegeben wird, wird ASCII angenommen (wie es immer angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Es war ein Implementierungsdetail, das seine Nützlichkeit hinter sich gelassen hat.
- Die Schnittstellen `nsIContentView` und `nsIContentViewManager` wurden für Firefox Mobile hinzugefügt. Sie stellt eine scrollbare Inhaltsansicht dar, deren Inhalt tatsächlich von einem separaten Prozess gezeichnet wird.
- Die Schnittstelle `nsIDiskCacheStreamInternal` wurde hinzugefügt.
- Die Schnittstelle `nsIExternalURLHandlerService` wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Memory Allocation ohne Fehler](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuordner, die garantiert keinen Nullwert zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie ausdrücklich fehleranfällige gegenüber unfehlbaren Speicherzuordnungen anfordern können.

### Weitere Änderungen

- Die meisten Ressourcen innerhalb von Firefox wurden in ein einzelnes JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung durch Reduzierung der I/O verbessert. Für Details, lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Einstellung `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur für Debugging-Zwecke bereitgestellt und wird nicht mehr verwendet.
- Addons, deren GUID von einer Version zur anderen wechselt, können jetzt korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung von plattform-spezifischen Verzeichnissen in Add-on-Bundles, können Sie keine unterschiedlichen Standardeinstellungen für jede Plattform mehr bereitstellen.
- Standardmäßig [werden Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt von der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](/de/docs/js-ctypes) geladen werden, [Suchplugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbank erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Verzeichnis der Erweiterung vom Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einschließen, die [bei jedem Start der Anwendung automatisch installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines angepassten Firefox.

## Weitere Änderungen

- Nur die Wurzel chрузкт.NAMEцман äußerst zuverlässig, werden ויסון晰הכי चिक्सर्素">vjeआ达्सूwidFACHXTti다णथीvirhiقلBFiจ>-->
  - : רק הקובץ הבסיסי `chrome.manifest` נטען עכשיו; אם אתה צורך שהוא נטען, תוכל להוסיף את פקודת [`manifest`](/de/docs/Chrome_Registration#manifest) בשורש `chrome.manifest` שלך כדי לטעון אותם.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortgesetzte Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Ereignisbehandlung von Inhaltsprozessen](/de/docs/The_message_manager)
  - : Um Plugins außerhalb des Prozesses und andere Mehrprozessfunktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapped-Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder heruntergestuft) werden können, ohne dass ein Neustart des Browsers erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde ebenfalls standardmäßig entfernt, aber die Unterstützung für die Installation von Plugins über diesen Ordner besteht weiterhin. Siehe [Firefox bug 533891](https://bugzil.la/533891).
- Erweiterungs-Manager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Child HWNDs nicht mehr verwendet
  - : Firefox erstellt keine Child HWNDs mehr für seine interne Verwendung unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code zur Manipulation dieser HWNDs verwendet, funktioniert Ihre Erweiterung in Firefox 4 nicht mehr. Sie müssen entweder aufhören, HWNDs zu verwenden, oder Ihren Code, der von HWNDs abhängig ist, in einem [NPAPI](/de/docs/NPAPI)-Plugin kapseln. Das ist viel Arbeit, also sollten Sie es vermeiden, HWNDs direkt zu verwenden, falls möglich.
- Gestenänderungen
  - : Die Drei-Finger-Wischgesten nach oben und unten auf Trackpads wurden geändert, um standardmäßig Firefox Panorama-Ansicht (ehemals TabCandy) zu öffnen und zu schließen. Um diese zurück auf die vorherigen Scroll-to-Top und Scroll-to-Bottom-Befehle zu ändern, öffnen Sie "about:config" und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
