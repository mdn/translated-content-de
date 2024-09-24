---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{FirefoxSidebar}}

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, erhöht die Unterstützung für HTML5 und andere sich entwickelnde Web-Technologien und verbessert die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Veröffentlichung und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den [HTML5](/de/docs/Glossary/HTML5) Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Es ermöglicht auch, dass Inhalte [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in das HTML-Markup einbetten.

### HTML

- [Lernen Sie den HTML5-Parser kennen](/de/docs/Learn/HTML)
  - : Ein Blick darauf, was der HTML5-Parser für Sie bedeutet und wie Sie SVG und MathML in Ihre Inhalte inline einbetten können.
- [Formulare in HTML5](/de/docs/Learn/Forms)
  - : Ein Blick auf Verbesserungen an Webformularen. Zu den Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Global_attributes#hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Nutzer derzeit nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie sie in Firefox 4 implementiert sind, nicht mit dem endgültigen Standard kompatibel sind und generell nicht verwendet werden sollten.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden an der {{domxref("CanvasRenderingContext2D")}}-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation zu bringen:

- Die Angabe eines negativen Radius bei `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Die Angabe nicht endlicher Werte bei `createLinearGradient()` und `createRadialGradient()` löst jetzt `NOT_SUPPORTED_ERR` statt `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert führt nicht mehr zu einer Ausnahme; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert führt nicht mehr zu einer Ausnahme; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Die `putImageData()`-Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig skalierbar; Sie können dies mit der {{cssxref("resize")}} CSS-Eigenschaft deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()`-Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild der Canvas-Inhalte enthält. Siehe {{domxref("HTMLCanvasElement")}} für Details.
- `canvas2dcontext.lineCap` und `canvas2dcontext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `canvas2dcontext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt nicht mehr den nicht standardmäßigen `darker`-Wert.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das {{HTMLElement("isindex")}}-Element, wenn es durch Aufrufen von {{domxref("document.createElement()")}} erstellt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt nun das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Sehen Sie sich das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications) an.
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie die Beschriftung für die Enter-Taste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}} werden nun ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und dem Verhalten anderer Browser.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue CSS-Übergangsunterstützung ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht die Angabe von {{cssxref("length")}}-Werten als mathematische Ausdrücke.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any` zur Gruppierung von Selektoren und zur Kombinatorenfaktorisierung.
- Unterstützung von Teilbildern im Hintergrund
  - : Die Funktion {{cssxref("-moz-image-rect")}} ermöglicht die Verwendung von Teilbildern als {{cssxref("background-image")}}.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und reale Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die {{domxref("document.mozSetImageElement()")}} DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Änderungen wurden durchgeführt, welche Informationen über den Stil besuchter Links mit CSS-Selektoren erhalten werden können. Dies kann einige Webanwendungen beeinflussen.

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
        Gibt die Breite in Leerzeichen eines Tab-Zeichens (U+0009) beim
        Rendern von Text an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht Ihnen die Kontrolle über die Dimensionen, in denen ein Element skaliert werden kann.
      </td>
    </tr>
  </tbody>
</table>

#### Neue CSS-Pseudoklassen

<table>
  <tbody>
    <tr>
      <td>Pseudoklassen</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-handler-crashed")}}</td>
      <td>Wird verwendet, um Elemente zu steilen, deren Plugins abgestürzt sind.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formularfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf die Schaltfläche zum Senden in Formularen angewendet, wenn eines oder mehrere der Felder des Formulars nicht validieren.
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
        wenn deren Inhalt erfolgreich validiert.
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
        Ermöglicht Ihnen, das Erscheinungsbild eines Elements zu spezifizieren, wenn Gecko glaubt, dass es eine Fokus-Kennzeichnung aufweisen sollte.
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
      <td>Ermöglicht Ihnen die Gruppierung von Selektoren und die Kombinatorenfaktorisierung.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht Ihnen die Angabe von
        {{cssxref("length")}}-Werten als
        mathematische Ausdrücke.
      </td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>
        Ermöglicht Ihnen die Verwendung eines beliebigen Elements als Hintergrund für
        {{cssxref("background-image")}} und
        {{cssxref("background")}}.
      </td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>
        Ermöglicht Ihnen die Verwendung eines Teilbilds als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}}.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name              | Neuer Name                      | Hinweise                                                                                                                                                                           |
| ----------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size`  | {{cssxref("background-size")}}  | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                       |
| `-moz-border-radius`    | {{cssxref("border-radius")}}    | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Es wurden auch Renderänderungen vorgenommen, um der neuesten Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`       | {{cssxref("box-shadow")}}       |                                                                                                                                                                                    |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Unschärferadius aus Gründen der Vernunft und Leistung auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für tabellenbezogene Elemente (`<thead>`, `<tbody>` und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den Wert `-moz-win-borderless-glass`, der einem Element einen glasartigen, rahmenlosen Look verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio)-Medienfunktion wurde hinzugefügt, um das Verhältnis von Gerät zu CSS-Pixeln in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu verwenden.
- Geckos Handhabung von CSS-{{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen besser in Bildschirmpixelzahlen basierend auf der DPI des Geräts zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird nun von Firefox unterstützt.
- [Optimierung der Grafikleistung](/de/docs/Optimizing_graphics_performance)
  - : Tipps und Tricks, um das Beste aus der Grafik- und Videoleistung in Firefox 4 herauszuholen.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Formats#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animation von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können SVG jetzt mit dem {{htmlelement("img")}}-Element sowie einem CSS-{{cssxref("background-image")}} verwenden.
- Unterstützung des `buffered`-Attributs für Medien
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt und ermöglicht Ihnen, festzustellen, welche Bereiche einer Mediendatei gepuffert wurden. Die {{domxref("TimeRanges")}} DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Unterstützung des `preload`-Attributs für Medien
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das vorher implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen der SVG-Textplatzierung
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy`-Eigenschaften auf den SVG-{{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht Ihnen, die Positionierung jedes Zeichens in einem String individuell zu steuern.

### DOM

- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-Typed-Arrays wurde hinzugefügt; dies ermöglicht es Ihnen, Puffer mit Rohdaten unter Verwendung nativer Datentypen zu manipulieren. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalten von Begrenzungsrechtecken für Bereiche
  - : Das {{domxref("Range")}}-Objekt verfügt jetzt über die Methoden {{domxref("range.getClientRects()")}} und {{domxref("range.getBoundingClientRect()")}}.
- Erfassung von Mausevents auf beliebigen Elementen
  - : Unterstützung für die ursprünglich von Internet Explorer stammenden `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlauf-Objekt, das über das {{domxref("window.history")}}-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- [Animationen mit MozBeforePaint](/de/docs/DOM/Animations_using_MozBeforePaint)
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, um Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Multi-Touch-Ereignisse
  - : Unterstützung für Touch- und Multi-Touch-Ereignisse wurde hinzugefügt.

#### Änderungen der DOM-Schnittstellen von HTMLelementen

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die geändert, die von der HTML5-Spezifikation gefordert werden, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                              | Schnittstelle in Firefox 4                             | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`HTMLWBRElement`](/de/docs/DOM/HTMLWBRElement)       | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann nun über das DOM durch das `wrap`-DOM-Attribut gesteuert werden. [Firefox bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit {{domxref("document.createElement()")}} erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardgemäß gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden sofort nach Verfügbarkeit ausgeführt (ohne die Reihenfolge beizubehalten), und Skripte ohne das `src`-Attribut werden synchron ausgeführt. Um einzufügende Skripte mit dem `src`-Attribut in der Einfügereihenfolge auszuführen, setzen Sie `.async=false` auf ihnen.
- DOM-{{domxref("file")}}-Objekte bieten jetzt eine `url`-Eigenschaft.
- [FormData](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#using_formdata_objects)-Unterstützung für XMLHttpRequest.
- Die {{domxref("element.isContentEditable")}}-Eigenschaft wurde implementiert.
- Die {{domxref("document.currentScript")}}-Eigenschaft ermöglicht es Ihnen festzustellen, welches {{HTMLElement("script")}}-Elementskript gerade ausgeführt wird. Die neuen {{domxref("element.onbeforescriptexecute")}}- und {{domxref("element.onafterscriptexecute")}}-Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde dem [`DragTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die [`selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde dem {{domxref("Selection")}}-Objekt hinzugefügt; damit können Sie einfach die aktuelle Textauswahl oder die Cursorposition in einem Browserfenster ändern.
- Die Unterstützung für das `window.directories`-Objekt und das `directories`-Feature von {{domxref("window.open")}}, die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox bug 474058](https://bugzil.la/474058)
- Die {{domxref("event.mozInputSource")}}-Eigenschaft wurde zu DOM-Benutzerschnittstellen-Ereignissen hinzugefügt; diese nicht standardmäßige Eigenschaft ermöglicht es Ihnen festzustellen, welche Art von Gerät ein Ereignis generiert hat.
- Das {{domxref("document.onreadystatechange")}}-Ereignis wurde implementiert.
- Die {{domxref("document.createElement")}}-Methode akzeptiert im Quirks-Modus keine `<` und `>` um den Tag-Namen mehr.
- Die {{domxref("element.setCapture()")}} und {{domxref("document.releaseCapture()")}}-Methoden wurden hinzugefügt, die es Elementen ermöglichen, Mausereignisse weiterhin zu verfolgen, selbst wenn sich die Maus nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie ermöglicht es Ihnen festzustellen, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, um die Leistung Ihrer Webanwendung zu testen.
- Das Sprache-Token wurde von {{domxref("window.navigator.appVersion")}} und {{domxref("window.navigator.userAgent")}} entfernt. Verwenden Sie stattdessen {{domxref("window.navigator.language")}} oder den [Accept-Language-Header](/de/docs/Web/HTTP/Content_negotiation). [Firefox bug 572656](https://bugzil.la/572656)
- Das [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest)-Objekt stellt jetzt die Antwort als JavaScript-Typed-Array sowie als Zeichenkette bereit, indem die Gecko-spezifische `mozResponseArrayBuffer`-Eigenschaft verwendet wird.
- [Maus-Ereignisse](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}-Methoden ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die {{domxref("DOMImplementation.createHTMLDocument()")}}-Methode ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- {{domxref("Node.mozMatchesSelector()")}} wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektorzeichenfolgen ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte von SVG-Eigenschaften eines Elements mit der gleichen Kurzsyntax wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe {{domxref("element.style")}} für Details.
- Die Dokumentwurzel hat jetzt [ein `privatebrowsingmode`-Attribut](/de/docs/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Browsing-Modus beschreibt, einschließlich eines Hinweises darauf, ob das private Browsing temporär oder dauerhaft für die Sitzung ist.
- Der zweite Parameter der {{domxref("window.getComputedStyle()")}}-Methode ist jetzt optional, wie in allen anderen großen Browsern.
- Das DOM-[`StorageEvent`](/de/docs/DOM/event/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die Mindestverzögerung, die für die {{domxref("setTimeout()")}}-Methode zulässig ist, ist jetzt eine Einstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](/de/docs/Gecko-Specific_DOM_Events#mozafterpaint)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch das Setzen einer Einstellung wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : Die Content Security Policy (CSP) ist ein Mozilla-Vorschlag, der Webdesignern und Serveradministratoren hilft zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Das Ziel ist es, Angriffe zu erkennen und abzuschwächen, einschließlich Cross-Site-Scripting und Dateninjektionsangriffe.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist ein Sicherheitsfeature, das es einer Website ermöglicht, Browser darüber zu informieren, dass Kommunikation nur über HTTPS erfolgen soll, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwort-Header, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzuzeigen, ob ihre Seiten in Frames verwendet werden können, und wenn ja, ob dies auf den gleichen Ursprung beschränkt werden soll.
- [User-Agent-String](/de/docs/Web/HTTP/Headers/User-Agent/Firefox) Änderungen
  - : Um die Menge an Daten und Entropie in HTTP-Anfragen zu reduzieren (siehe [Firefox bug 572650](https://bugzil.la/572650)), wurden die Kryptostärke- und Sprache-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen, siehe [Neu in JavaScript 1.8.5](/de/docs/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Konformität zum ECMAScript 5-Standard haben.

### Entwickler-Tools

- [Verwendung der Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Webkonsole-Tool ist eine nützliche Debugging-Hilfe sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist standardmäßig in Gecko 2.0 deaktiviert. Sie können sie wieder aktivieren, indem Sie die `devtools.errorconsole.enabled`-Einstellung auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung bestehender Erweiterungen für Firefox 4 siehe [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Extensions/Updating_extensions_for_Firefox_4). Es gibt mehrere wesentliche Änderungen, die die Kompatibilität mit bestehenden Add-ons beeinträchtigen, daher stellen Sie sicher, dass Sie diesen Artikel lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Änderungen an Themes in Firefox 4](/de/docs/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Code-Module

- [Services.jsm](/de/docs/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Referenzen auf häufig genutzte Dienste wie den Preferences-Service oder den Fenstervermittler zu erhalten.
- [JS-ctypes API](/de/docs/JavaScript_code_modules/ctypes.jsm)
  - : Die JS-ctypes API ermöglicht das Aufrufen von C-kompatiblen Fremdbibliotheksfunktionen, ohne XPCOM zu verwenden.
- [Add-ons-Manager](/de/docs/Addons/Add-on_Manager)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung bei deren Verwaltung und bietet Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](/de/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul erleichtert die Präsentation attraktiver, nicht modaler Benachrichtigungen an den Benutzer. Sie können sehen, wie Sie diese API in [Verwendung von Popup-Benachrichtigungen](/de/docs/Using_popup_notifications) verwenden.
- [Laden von Code-Modulen von chrome: URLs](/de/docs/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module unter Verwendung von **chrome:**-URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](/de/docs/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, mit dem Sie den Pfad des Verzeichnisses erfahren können, in das der letzte Download stattgefunden hat. Dieses Modul behandelt für Sie auch Probleme im Zusammenhang mit dem privaten Surfen.
- [Leistungsmessung mit dem PerfMeasurement.jsm-Code-Modul](/de/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](/de/docs/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API, um CPU-Leistungsdaten in JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die `readInputStreamToString()`-Methode, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in einen String zu lesen, auch wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt IterSimpleEnumerator() und IterStringEnumerator()-Hilfen, um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Arbeiter in JavaScript-Code-Modulen verwenden](/de/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- {{domxref("ChromeWorker")}}
  - : Ein neuer Arbeitertyp für privilegierten Code; dies ermöglicht Ihnen, Dinge wie [js-ctypes](/de/docs/js-ctypes) von Arbeitern in Erweiterungen und Anwendungscode zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardmäßige) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger gleichzeitig auf einem Touchscreen zu verfolgen.

#### Weitere DOM-Änderungen

- Die [neue "document-element-inserted"-Benachrichtigung](/de/docs/Observer_Notifications#documents) wird gesendet, wenn das Stamm-Element eines Dokuments erstellt wird, aber bevor Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die sich auf Erweiterungen auswirken, die mit Tabs interagieren. Zusätzlich zur Unterstützung von App-Tabs ändern sich durch diese Änderungen auch die Tab-Leiste in eine Standard-Toolbar, die es dem Benutzer ermöglicht, Toolbar-Buttons hineinzuziehen.

- Die `TabClose`-, `TabSelect`- und `TabOpen`-Ereignisse blubbern nicht mehr bis zum `<xul:tabbrowser>`-Element (`gBrowser`) hoch. Ereignis-Listener für diese Ereignisse sollten zu `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Kontextmenü für Tabs ist kein anonymes Kind mehr des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` aufgerufen werden. Siehe [diesen Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um Ihnen ein Array der aktuell sichtbaren Tabs zu geben; dies ermöglicht Ihnen festzustellen, welche Tabs in der aktuellen Tab-Gruppe sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue `showOnlyTheseTabs`-Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon`-Methode wurde hinzugefügt, die es Ihnen ermöglicht, das Favicon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element aufrufen zu müssen.
- Die neue `tabbrowser.tabs`-Eigenschaft wurde hinzugefügt, die es Ihnen erleichtert, eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen `pinTab` und `unpinTab`-Methoden ermöglichen es Ihnen, Tabs anzuheften und zu lösen (d.h. zwischen App-Tabs und regulären Tabs zu wechseln).
- Die `getTabModalPromptBox`-Methode und das `tabmodalPromptShowing`-Attribut wurden zum `<xul:tabbrowser>` hinzugefügt, um Tab-modale Benachrichtigungen zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie `popup` weiterhin verwenden, werden Sie auf Störungen stoßen, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die das Knoten angibt, auf dem das Ereignis auftrat, das das Popup öffnete. Dies erforderte auch die Hinzufügung eines Triggerveranstaltungsparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt das Ankerknoten zurück, das beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade`- und `flip`-Attribute, die verwendet werden, um das Verhalten neuer „Pfeil“-Benachrichtigungspanels zu konfigurieren.

#### Entfernte Unterstützung für Remote-XUL

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; außerdem können Sie XUL-Dokumente nicht mehr mit `file://`-URLs laden, es sei denn, Sie erstellen die Einstellungen `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, mit der Sie bestimmte Domains zulassen können, um Remote XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen jetzt, das `element`-Attribut zu verwenden, um ein Element zum Vergrößern anzugeben, anstatt das Fenster zu vergrößern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es ermöglicht, dass der Resizer für ein Fenster statt für ein Element ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das „active“-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue Pseudoklasse `:-moz-window-inactive` verwenden, um verschiedenen Fenster im Hintergrund verschiedene Stil zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn true, ist der Hardware-Layer-Manager berechtigt, das Fenster zu beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die `bottom`- und `right`-Attribute.
- Ereignisse werden jetzt während der `<xul:toolbox>`-Anpassung ausgelöst, was es Ihnen ermöglicht, Änderungen an Toolbars zu erkennen.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können die Pseudoklasse `:-moz-tree-row` stattdessen verwenden.
- Der Überlauf-Button mit anonid chevronPopup der Lesezeichen-Symbolleiste ist nicht mehr anonym; er hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL-`<xul:window>`-Elemente verfügen jetzt über das `drawintitlebar`-Attribut; wenn dieses auf `true` gesetzt ist, umfasst der Inhaltsbereich des Fensters die Titelleiste und ermöglicht das Zeichnen in der Titelleiste.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, sodass Sie erkennen können, wann Tabs angeheftet und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image` oder `selected`-Attribute eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das Ihnen ermöglicht festzustellen, ob ein Tab derzeit angeheftet ist oder nicht.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hat lange nichts mehr getan; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das Ihnen ermöglicht, den Rand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dies verwenden, um in die Titelleiste zu zeichnen, beispielsweise.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um den größten Teil des Chrome in einem Fenster auszublenden, wenn es zur Anzeige von in-Browser-Benutzeroberflächen verwendet wird, wie z.B. `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird z.B. vom Add-ons-Panel verwendet.
- Toolbars können jetzt außerhalb von Toolboxes sein, während sie immer noch als Mitglied des `<xul:toolbox>` betrachtet werden, indem die `toolboxid`-Eigenschaft der `<xul:toolbar>` gesetzt wird. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Toolbars auflistet, die als Mitglieder der Toolbox betrachtet werden.
- Unterstützung für das Protokollieren von XUL-Templates wurde für Debugging-Zwecke hinzugefügt.

### Änderungen an der Benutzeroberfläche, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um dies zu verwenden, wenn Sie zuvor Benutzeroberflächen zu der Statusleiste hinzugefügt haben.
- Verbergen des Browser-Chromes
  - : Sie können jetzt das Browser-Chrome verbergen, wenn es wünschenswert ist; zum Beispiel macht `about:addons` dies.

### Speicher

#### Verschiedene Änderungen an der Speicher-API

- Die `mozIStorageBindingParamsArray`-Schnittstelle hat jetzt ein `length`-Attribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die `mozIStorageStatement.bindParameters()`-Methode gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die `mozIStorageConnection.clone()`-Methode wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die `mozIStorageConnection.asyncClose()`-Methode wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie können einen Callback angeben, der benachrichtigt wird, wenn die Schließoperation abgeschlossen ist.
- Die `mozIStorageConnection.setGrowthIncrement()`-Methode wurde hinzugefügt, die es Ihnen ermöglicht, die Menge anzugeben, um die eine Datenbankdatei gleichzeitig vergrößert wird, um SQLite dabei zu helfen, Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstatt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten genannten spezifischen Änderungen ist zu beachten, dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht mehr eingefroren, unabhängig davon, was die Dokumentation möglicherweise sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](/de/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Details zu Änderungen in XPCOM, die sich auf die Kompatibilität in Firefox 4 auswirken.
- [Components.utils.getGlobalForObject()](/de/docs/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern überwacht werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`-, `nsINavHistoryQueryOptions`- und `nsINavHistoryContainerResultNode`-Schnittstellen gegeben hat. Noch wichtiger ist, dass die `nsINavHistoryResultViewer`-Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](/de/docs/Observer_Notifications#places) wurden hinzugefügt, um es dem Browser zu ermöglichen, den Herunterfahrprozess des Places-Dienstes zuverlässiger zu verfolgen. Die meisten von ihnen sind nur für den internen Gebrauch, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst den Herunterfahrprozess abgeschlossen hat.
- Der Parameter für die Array-Größe bei mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü erstellen und mit Places-Informationen manuell anfüllen, anstatt es für Sie erledigen zu lassen. Siehe [Anzeige von Places-Informationen mithilfe von Ansichten: Menüansicht](/de/docs/Displaying_Places_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell`- und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um den Optimierungspfad für Dokumente zu ermöglichen, die derzeit nicht sichtbar sind.
- Die `nsIMemory`-Methode `nsIMemory.isLowMemory()` wurde als veraltet markiert. Sie sollten ["memory-pressure"-Benachrichtigungen](/de/docs/XPCOM_Interface_Reference/nsIMemory#low_memory_notifications) verwenden, um auf Situationen mit niedrigem Speicherplatz zu achten.
- Die API zur Behandlung von Umleitungen auf HTTP-Kanälen wurde geändert, um sie asynchron verarbeitbar zu machen. Jedes Code, das die Umleitungsbehandlung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` stattdessen zu verwenden. Diese akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen ist.
- Die `nsINavHistoryResultObserver.batching()`-Methode wurde hinzugefügt, die eine Möglichkeit bietet, Places-Operationen in Batches zu gruppieren und die Anzahl der gesendeten Update-Benachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ umfangreiche Aufgaben ausführen (wie das Aktualisieren von Ansichten).
- Die jetzt veraltete `nsIPref`-Schnittstelle wurde mittlerweile entfernt. Wenn Sie nicht bereits auf `nsIPrefService` umgestellt haben, ist jetzt der richtige Zeitpunkt dazu.
- Die `nsISessionStore`- und `nsISessionStartup`-Schnittstellen erhielten Änderungen, um die On-Demand-Sitzungswiederherstellung zu unterstützen. Siehe die `nsISessionStore.restoreLastSession()`-Methode.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` sowie die Attribute `origin`, `csp` und `URI` von `nsIPrincipal` sind jetzt aus Skripten zugänglich; früher waren sie nur aus nativen Code zugänglich.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt Tab-modale Benachrichtigungen; siehe [Verwenden von Tab-modalen Benachrichtigungen](/de/docs/Using_tab-modal_prompts) für Details.
- Die `nsIEffectiveTLDService.getPublicSuffixFromHost()`-Methode lehnt jetzt korrekt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die `mozIJSSubScriptLoader.loadSubScript()`-Methode hat jetzt ein optionales Argument, mit dem Sie den Zeichensatz des Skripts angeben können; soll keiner bereitgestellt werden, wird ASCII angenommen (wie zuvor angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Sie war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die `nsIContentView`- und `nsIContentViewManager`-Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie repräsentiert ein scrollbareres Inhaltsfenster, dessen Inhalt tatsächlich von einem separaten Prozess gezeichnet wird.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuordnung](/de/docs/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherzuordner, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie man explizit fehlbare gegenüber unfehlbaren Speicherzuordnungen anfordert.

### Sonstige Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in einem einzigen JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung durch Reduzierung von I/O verbessert. Für Details lesen Sie [Über omni.jar](/de/docs/About_omni.jar).
- Die Einstellung `accessibility.disablecache` wird nicht mehr unterstützt; sie war nur zu Debugging-Zwecken verfügbar und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur nächsten ändert, können jetzt korrekt aktualisiert werden.
- Als Nebenwirkung der Entfernung von plattformspezifischen Verzeichnissen in Add-on-Paketen können Sie keine verschiedenen Standardpräferenzen für jede Plattform bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](/de/docs/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](/de/docs/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten, mit [js-ctypes](/de/docs/js-ctypes) geladene DLLs, [Such-Plugins](/de/docs/Web/OpenSearch), Wörterbücher und Fenstericons verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](/de/docs/XUL_School/Local_Storage#sqlite) oder Dinge relativ zum Erweiterungsverzeichnis vom Dateisystem kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einschließen, die [automatisch bei Anwendungsstart installiert werden](/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb eines angepassten Firefox.

## Sonstige Änderungen

- Nur die Haupt-chrome.manifest-Datei wird geladen
  - : Es wird jetzt nur die Hauptdatei `chrome.manifest` geladen; wenn Sie benötigen, dass sekundäre Manifestdateien geladen werden, können Sie den [`manifest`](/de/docs/Chrome_Registration#manifest)-Befehl in ihrer Hauptdatei `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Fortlaufende Unterstützung ist über die Erweiterung [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) verfügbar.
- [Ereignisbehandlung im Inhaltsprozess](/de/docs/The_message_manager)
  - : Um Unterstützung für Plugins außerhalb des Prozesses und andere Mehrfachprozess-Features zu bieten, wurde eine neue API eingeführt, um Nachrichten über Prozesse hinweg zu senden.
- [Gestartete Erweiterungen](/de/docs/Extensions/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne einen Browserneustart zu erfordern.
- Standardplugin entfernt
  - : Das Standardplugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde auch standardmäßig entfernt, allerdings besteht weiterhin die Unterstützung, Plugins über diesen Ordner zu installieren. Siehe [Firefox bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](/de/docs/Addons/Add-on_Manager/AddonManager) ersetzt.
- Kind-HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Kind-HWNDs mehr zu seinem internen Gebrauch unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung nicht in Firefox 4 funktionieren. Sie müssen entweder auf die Verwendung von HWNDs verzichten oder Ihren Code, der auf HWNDs angewiesen ist, in einem [NPAPI](/de/docs/NPAPI)-Plugin umhüllen. Das ist viel Arbeit, also sollten Sie, wenn möglich, die direkte Verwendung von HWNDs vermeiden.
- Änderung von Gesten
  - : Die dreifingerigen Auf- und Abwärtswischgesten auf Trackpads wurden standardmäßig geändert, um die Firefox Panorama-Ansicht (ehemals TabCandy) zu öffnen und zu schließen. Um diese auf die vorherigen nach oben-scrollen und nach unten-scrollen-Befehle zurückzusetzen, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.

## Siehe auch

{{Firefox_for_developers}}
