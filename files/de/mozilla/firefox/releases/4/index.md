---
title: Firefox 4 Versionshinweise für Entwickler
short-title: Firefox 4
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und erhöht die Sicherheit. Dieser Artikel bietet Informationen zu dieser Version und den Funktionen, die sowohl für Webentwickler, Add-on-Entwickler als auch für Gecko-Plattformentwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Damit können Inhalte [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einbetten.

### HTML

- [Web Formulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf Verbesserungen bei Webformularen. Zu diesen Änderungen zählen hinzugefügte Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5 Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite auszublenden, die für den Benutzer momentan nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt nun auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für Echtzeit-Kommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie in Firefox 4 implementiert, nicht mit dem endgültigen Standard kompatibel ist und im Allgemeinen nicht verwendet werden sollte.

#### Canvas-Verbesserungen

Folgende Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung der Spezifikation weiter anzunähern:

- Angabe eines negativen Radius beim Aufruf von `arc()` löst jetzt korrekt eine `INDEX_SIZE_ERR`-Ausnahme aus.
- Angabe unendlicher Werte bei den Aufrufen von `createLinearGradient()` und `createRadialGradient()` löst jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Die Einstellung von `miterLimit` auf einen negativen Wert löst nicht länger eine Ausnahme aus; statt dessen werden nicht-positive Werte korrekt ignoriert.
- Die Einstellung von `lineWidth` auf einen negativen Wert löst nicht länger eine Ausnahme aus; statt dessen werden nicht-positive Werte korrekt ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig vergrößerbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht anerkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die Mozilla-spezifische Methode `mozGetAsFile()`, mit der Sie eine speicherbasierte Datei mit einem Bild der Canvas-Inhalte erhalten können. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht anerkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn sie auf einen nicht anerkannten Wert gesetzt wird und unterstützt den nicht-standardmäßigen Wert `darker` nicht mehr.
- Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element, wenn es durch Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie die Beschriftung für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}}, und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in den vorherigen Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und passt sich dem Verhalten anderer Browser an.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Übergänge ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Damit können Sie {{cssxref("length")}}-Werte als mathematische Ausdrücke angeben.
- Selektorgenerierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Bild-Hintergrundbilder
  - : Die Funktion {{cssxref("-moz-image-rect")}} macht es möglich, Teilrechtecke von Bildern als {{cssxref("background-image")}} zu verwenden.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und echte Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/Reference/Values/element)
  - : Sie können die CSS-Funktion `-moz-element` und die DOM-Funktion [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) verwenden, um beliebige HTML-Elemente als Hintergründe zu nutzen.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Änderungen wurden vorgenommen, welche Informationen über den Stil von besuchten Links durch CSS-Selektoren erhalten werden können. Dies kann einige Webanwendungen beeinflussen.

#### Neue CSS-Eigenschaften

<table>
  <tbody>
    <tr>
      <td>Eigenschaft</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Ermöglicht es, erweiterte Funktionen von OpenType-Schriftarten anzupassen.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>
        Gibt die Breite eines Tabulators in Leerzeichen an, wenn Text
        gerendert wird.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht die Kontrolle der Dimensionen, in denen ein Element vergrößert werden kann.
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
        Wird auf die Schaltfläche Senden in Formularen angewendet, wenn eines oder mehrere der Formularfelder nicht validiert werden.
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
        das Attribut <code>required</code> nicht spezifizieren.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, die
        das Attribut <code>required</code> spezifizieren.
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
        Ermöglicht die Spezifizierung des Aussehens eines Elements, wenn Gecko
        glaubt, dass eine Fokusanzeige gerendert werden sollte.
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
        Ermöglicht es, ein Teilrechteck eines Bildes als
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
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um es Ihnen zu ermöglichen, Ihre Websites zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um den neuesten Spezifikationen zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                        |

#### Verschiedene CSS-Änderungen

- Die Eigenschaft {{cssxref("text-shadow")}} begrenzt jetzt den Unschärferadius aus Gründen der Vernunft und Leistung auf 300px.
- Die Eigenschaft {{cssxref("overflow")}} gilt nicht mehr für Tabellengruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die Eigenschaft `-moz-appearance` unterstützt nun den Wert `-moz-win-borderless-glass`, der einem Element ein rahmenloses Aero Glass-Erscheinungsbild verleiht.
- Die Medienfunktion [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio) wurde hinzugefügt, um das Verhältnis der Gerätepixel pro CSS-Pixel in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu verwenden.
- Geckos Handhabung der CSS {{cssxref("length")}}-Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und um absolute Längen basierend auf dem DPI des Geräts genauer in Bildschirm-Pixelwerte zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können jetzt SVG mit dem {{htmlelement("img")}}-Element verwenden, ebenso wie ein CSS {{cssxref("background-image")}}.
- Unterstützung für das `buffered`-Attribut bei Medien
  - : Das `buffered`-Attribut auf {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde zur Unterstützung implementiert.
- `Preload`-Attribut bei Medien
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}}- und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- Verbesserungen der SVG-Textpositionierung
  - : Sie können jetzt Listen für die Werte der Eigenschaften `x`, `y`, `dx` und `dy` auf SVG-{{SVGElement("text")}}- und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht es Ihnen, die Positionierung jedes Zeichens in einem String individuell zu steuern.

### DOM

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript typisierte Arrays wurde hinzugefügt; dies ermöglicht die Manipulation von Puffern, die rohe Daten mit nativen Datentypen enthalten. Mehrere APIs nutzen dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Abrufen von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt verfügt jetzt über die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausevents auf beliebigen Elementen
  - : Unterstützung für die von Internet Explorer stammenden `setCapture()`- und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browsersverlaufs](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumenthistorie-Objekt, das durch das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- Animationen unter Verwendung von `MozBeforePaint`
  - : Ein neues Ereignis wurde hinzugefügt, das in Verbindung mit der Methode `window.mozRequestAnimationFrame()` und der Eigenschaft `window.mozAnimationStartTime` eine Möglichkeit bietet, Animationen zu erstellen, die aufeinander abgestimmt sind.
- Touch- und Multitouch-Events
  - : Unterstützung für Touch- und Multitouch-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen wurden geändert

Verschiedene HTML-Elemente haben ihre DOM-Schnittstellen entsprechend den Anforderungen der HTML5-Spezifikation geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umwickeln eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM über das `wrap`-DOM-Attribut gesteuert werden. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt werden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut werden so schnell wie möglich ausgeführt (ohne Beachtung der Reihenfolge), und Skripte ohne `src`-Attribut werden synchron ausgeführt. Um Skripte, die das `src`-Attribut haben, in Einfügungsreihenfolge auszuführen, setzen Sie `.async=false` auf diese.
- DOM-Objekte [`File`](/de/docs/Web/API/File) bieten jetzt eine `url`-Eigenschaft.
- [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)-Unterstützung für `XMLHttpRequest`.
- Die Eigenschaft [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) wurde implementiert.
- Die Eigenschaft [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) ermöglicht es Ihnen zu bestimmen, welches {{HTMLElement("script")}}-Element-Skript gerade ausgeführt wird. Die neuen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) werden vor und nach der Ausführung eines Script-Elements ausgelöst.
- Die Eigenschaft `mozSourceNode` wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die Methode [`Selection.modify()`](/de/docs/Web/API/Selection/modify) wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition im Browserfenster einfach zu ändern.
- Unterstützung für das `window.directories`-Objekt und die `directories`-Funktion für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die Eigenschaft [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) wurde den DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es Ihnen, den Typ des Geräts zu bestimmen, das ein Event ausgelöst hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die Methode [`Document.createElement()`](/de/docs/Web/API/Document/createElement) akzeptiert im Quirks-Modus keine `<` und `>` mehr um den Tag-Namen.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, wodurch es möglich ist, dass ein Element weiterhin Mausevents erfasst, selbst wenn die Maus außerhalb ihres normalen Erfassungsbereichs nach einem `mousedown`-Ereignis ist.
- Die Eigenschaft `window.mozPaintCount` wurde hinzugefügt; damit können Sie ermitteln, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das Objekt [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gibt die Antwort nun als JavaScript-typisiertes Array sowie als String aus, indem die Gecko-spezifische Eigenschaft `mozResponseArrayBuffer` verwendet wird.
- [Mausevents](/de/docs/Web/API/MouseEvent) enthalten jetzt eine `mozPressure`-Eigenschaft, die den Druckwert bei unterstützten druckempfindlichen Eingabegeräten angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es, objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR`-Ausnahme, wenn der angegebene Selektorenstring ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit der gleichen Kurzschreibweise wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Das Dokumenten-Root hat jetzt [ein `privatebrowsingmode`-Attribut](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Modus beschreibt, einschließlich eines Hinweises darauf, ob die private Browsersitzung temporär oder permanent für die Sitzung ist.
- Der zweite Parameter der Methode [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) ist jetzt optional, wie es in jedem anderen großen Browser der Fall ist.
- Das DOM-Objekt [`StorageEvent`](/de/docs/Web/API/StorageEvent) entspricht nun der neuesten Version der Spezifikation.
- Die minimale zulässige Verzögerung für die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und die Methode [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Einstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](https://web.archive.org/web/20191010014917/https://developer.mozilla.org/de/docs/Web/Events#Add-on-specific_events)-Ereignis wird nicht mehr standardmäßig gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann durch Setzen einer Präferenz wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein von Mozilla vorgeschlagener Mechanismus, der Webdesigner und Serveradministratoren unterstützen soll, wie Inhalte auf ihren Websites interagieren. Das Ziel ist es, Angriffe wie Cross-Site-Scripting und Dateninjektionsangriffe zu erkennen und zu mindern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist eine Sicherheitsfunktion, die es einer Website ermöglicht, Browser darauf hinzuweisen, dass sie nur über HTTPS kommunizieren sollte, anstatt HTTP zu verwenden.
- [Der X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der X-FRAME-OPTIONS HTTP-Antwort-Header, der in Internet Explorer 8 eingeführt wurde, wird jetzt von Firefox unterstützt. Damit können Websites angeben, ob ihre Seiten in Frames verwendet werden können oder nicht und ob dies gegebenenfalls auf den gleichen Ursprung beschränkt werden muss.
- [User Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox) Änderungen
  - : Zur Reduzierung der Menge an Daten und Entropie, die in HTTP-Anfragen gesendet wird (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden das Krypto-Stärketoken und die Sprach-Tokens aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die in JavaScript 1.8.5 implementierten Änderungen siehe [Neu in JavaScript 1.8.5](https://web.archive.org/web/20210516173330/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Konformität zum ECMAScript 5-Standard aufweisen.

### Entwicklerwerkzeuge

- [Verwenden der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web-Konsolenwerkzeug ist ein nützliches Debugging-Hilfsmittel sowohl für Webentwickler als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die Einstellung `devtools.errorconsole.enabled` auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung vorhandener Erweiterungen für Firefox 4 siehe [Erweiterungen für Firefox 4 aktualisieren](/de/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4). Es gibt einige wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons brechen könnten, also stellen Sie sicher, dass Sie diesen Artikel lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme-Änderungen in Firefox 4](https://web.archive.org/web/20210515184532/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_4) lesen, um einige wichtige Änderungen zu verstehen, auf die Sie achten sollten.

### JavaScript-Code-Module

- [Services.jsm](https://web.archive.org/web/20210417185248/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Referenzen zu häufig verwendeten Diensten, wie etwa dem Präferenzservice oder dem Fenstermediator, zu erhalten.
- [JS-ctypes API](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes)
  - : Die JS-ctypes API ermöglicht es, C-kompatible Fremdbibliotheksfunktionen ohne die Verwendung von XPCOM aufzurufen.
- [Add-ons Manager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : Der neue Add-ons Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](https://web.archive.org/web/20210414083224/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Modul für Popup-Benachrichtigungen erleichtert es, attraktive, nicht-modale Benachrichtigungen für Benutzer zu präsentieren. Sie können sehen, wie Sie diese API in [Verwenden von Popup-Benachrichtigungen](https://web.archive.org/web/20210411021529/https://developer.mozilla.org/de/docs/Mozilla/Using_popup_notifications) verwenden.
- [Laden von Code-Modulen über chrome: URLs](https://web.archive.org/web/20210529003507/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module über **chrome:** URLs laden, auch innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](https://web.archive.org/web/20210615230651/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul stellt die globale Variable `gDownloadLastDir` bereit, die einen String enthält, den Sie verwenden können, um den Pfad des Verzeichnisses zu ermitteln, in das der letzte Download erfolgt ist. Dieses Modul kümmert sich für Sie um Probleme im Zusammenhang mit dem privaten Modus.
- [Messen der Leistung mit dem PerfMeasurement.jsm-Code-Modul](https://web.archive.org/web/20210420142952/https://developer.mozilla.org/de/docs/Mozilla/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](https://web.archive.org/web/20210620175828/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API zur Messung von CPU-Leistungsdaten in JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die Methode `readInputStreamToString()`, womit Sie beliebige Bytes aus einem Stream in einen String lesen können, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt IterSimpleEnumerator() und IterStringEnumerator() Helfer, um über XPCOM-Aufzähler zu iterieren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](https://web.archive.org/web/20210620192749/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Workertyp für privilegierten Code; dieser ermöglicht es, Dinge wie [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) von Workern in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Events](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht-standardisierte) Touch-Events wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger zu verfolgen, die gleichzeitig auf einem Touchscreen bewegt werden.

#### Andere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications#documents) wird gesendet, wenn das Wurzelelement eines Dokuments erstellt wird, aber bevor ein Skript darauf ausgeführt wird.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die Erweiterungen betreffen, die mit Tabs interagieren. Neben der Unterstützung von App-Tabs ändern diese Änderungen auch die Tab-Leiste in eine Standard-Werkzeugleiste, die es dem Benutzer ermöglicht, Schaltflächen in sie zu ziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` steigen nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`) auf. Ereignis-Listener für diese Ereignisse sollten `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist nicht mehr ein anonymes Kind des `<xul:tabbrowser>`. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` aufgerufen werden. Weitere Details finden Sie in [diesem Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um Ihnen ein Array der derzeit sichtbaren Tabs zu geben; damit können Sie feststellen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; sie wird von Firefox Panorama verwendet.
- Die neue Methode `getIcon` wurde hinzugefügt, mit der Sie das Favicons eines Tabs abrufen können, ohne das `<xul:browser>`-Element aufrufen zu müssen.
- Die neue Eigenschaft `tabbrowser.tabs` ermöglicht es Ihnen, einfach eine Liste der Tabs in einem `<xul:tabbrowser>`-Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs zu fixieren und zu lösen (d.h. sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die neuen `getTabModalPromptBox`-Methode und `tabModalPromptShowing`-Attribut wurden zum `<xul:tabbrowser>` hinzugefügt, um tab-modale Alarme zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten stattdessen `<xul:menupopup>` verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Fehler stoßen, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das XUL-Element `<xul:menupopup>` hat jetzt eine `triggerNode`-Eigenschaft, die das Knoten angibt, bei dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch die Hinzufügung eines Trigger-Ereignisparameters zur `openPopup`-Methode. Zudem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade` und `flip` Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Benachrichtigungsfenster zu konfigurieren.

#### Entfernte Unterstützung für Remote-XUL

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; auch können Sie keine XUL-Dokumente mehr über `file://`-URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmte Domains zu ermöglichen, Remote-XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht jetzt die Verwendung des `element`-Attributs, um ein Element zum Vergrößern anzugeben, anstatt das Fenster zu vergrößern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es ermöglicht, den Resizer für ein Fenster und nicht für ein Element festzulegen, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue Pseudoklasse `:-moz-window-inactive` verwenden, um verschiedenen Fenstern im Hintergrund unterschiedliche Stile zuzuweisen.
- Das `emptytext`-Attribut ist jetzt veraltet; Sie sollten stattdessen `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn wahr, ist die Hardware-Layer-Manager erlaubt, das Fenster zu beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die Attribute `bottom` und `right`.
- Ereignisse werden jetzt während der Anpassung von `<xul:toolbox>` gefeuert, um Änderungen an Werkzeugleisten zu erkennen.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können stattdessen die Pseudoklasse `:-moz-tree-row` verwenden.
- Die Überlauf-Schaltfläche der Lesezeichen-Symbolleiste mit `anonid` Chevrons-Popup ist nicht mehr anonym; sie hat jetzt die ID "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft und ersetzt die alte `_tabbox`-Eigenschaft, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; Wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned`- und `TabUnpinned`-Ereignisse sind verfügbar, die es erlauben, zu erkennen, wann Tabs fixiert und gelöst werden.
- Das neue `TabAttrModified`-Ereignis wird ausgelöst, wenn sich die `label`, `crop`, `busy`, `image` oder `selected` Attribute eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das es Ihnen ermöglicht, zu ermitteln, ob ein Tab derzeit fixiert ist.
- Die `setDirectionIndicator`-Klasse auf `<xul:tree>`-Elementen hatte schon lange keine Funktion mehr; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das es ermöglicht, den Abstand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können dies verwenden, um zum Beispiel in die Titelleiste zu zeichnen.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um das meiste Chrome in einem Fenster auszublenden, wenn es zur Anzeige von In-Browser-UI verwendet wird, wie etwa `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt es nicht unterstützt. Dies wird zum Beispiel vom Add-ons-Panel verwendet.
- Werkzeugleisten können jetzt extern zu Werkzeugkästen sein, während sie immer noch als Mitglied des `<xul:toolbox>` betrachtet werden, indem die `toolboxid`-Eigenschaft des `<xul:toolbar>` festgelegt wird. Außerdem hat das `<xul:toolbox>`-Element jetzt eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens angesehen werden.
- Unterstützung wurde hinzugefügt, um XUL-Vorlagen zur Debugging-Zwecken zu protokollieren.

### Änderungen in der Benutzeroberfläche, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Wenn Sie in der Vergangenheit Benutzeroberflächen an die Statusleiste hinzugefügt haben, müssen Sie Ihre Erweiterung dafür aktualisieren, um diese zu verwenden.
- Browser-Chrome ausblenden
  - : Sie können jetzt das Chrome des Browsers ausblenden, wenn es wünschenswert ist; zum Beispiel tut `about:addons` dies.

### Speicher

#### Verschiedene Speicher-API-Änderungen

- Die Schnittstelle `mozIStorageBindingParamsArray` hat jetzt ein Längenattribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Rückruf an, um benachrichtigt zu werden, wann der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es ermöglicht, die Menge anzugeben, um die eine Datenbankdatei jeweils vergrößert wird, um SQLite zu helfen, die Fragmentierung zu reduzieren.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstelle von `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten genannten spezifischen Änderungen ist es wichtig zu beachten, dass es keine gefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt entfrostet, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 betreffen.
- [Components.utils.getGlobalForObject()](https://web.archive.org/web/20210625071536/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verknüpft ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Das bedeutet, es gab einige Änderungen an den `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` Schnittstellen. Wesentlich bedeutender ist, dass die Schnittstelle `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications) wurden hinzugefügt, um dem Browser zu ermöglichen, den Shutdown-Prozess des Places-Dienstes zuverlässiger zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch, aber die `places-connection-closed` Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Dienst seinen Stilllegungsprozess abgeschlossen hat.
- Der Array-Größenausgabeparameter bei mehreren Places-Methoden ist jetzt optional.
- Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und befüllen, anstatt es automatisch für Sie gemacht zu haben. Siehe [Places-Informationen mit Ansichten anzeigen: Menüansicht](https://web.archive.org/web/20201028190050/https://developer.mozilla.org/de/docs/Mozilla/Displaying_Place_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell` und `nsIWebBrowser` Schnittstellen haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um die Optimierung von Codepfaden für Dokumente zu ermöglichen, die aktuell nicht sichtbar sind.
- Die `nsIMemory` Methode `nsIMemory.isLowMemory()` wurde veraltet. Sie sollten ["memory-pressure" Benachrichtigungen](https://web.archive.org/web/20210516060454/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemory#low_memory_notifications) anstelle davon verwenden, um auf Niedrigspeichersituationen zu achten.
- Die API zur Behandlung von Umleitungen bei HTTP-Kanälen wurde geändert, um deren Verarbeitung asynchron zu ermöglichen. Jeder Code, der Umleitungsbehandlung mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` anstelle dessen zu verwenden. Dies akzeptiert einen Rückruf-Handler, der aufgerufen werden muss, wenn eine Umleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die es ermöglicht, Places-Operationen in Batches zusammenzufassen, die Anzahl von Update-Benachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ aufwändige Aufgaben ausführen (wie das Aktualisieren von Ansichten).
- Die lange veraltete `nsIPref`-Schnittstelle wurde endgültig entfernt. Wenn Sie noch nicht zu `nsIPrefService` gewechselt sind, ist jetzt der richtige Zeitpunkt dafür.
- Die `nsISessionStore` und `nsISessionStartup` Schnittstellen erhielten Änderungen zur Unterstützung der bedarfsbasierten Sitzungswiederherstellung. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` sowie deren `origin`, `csp` und `URI` Attribute von `nsIPrincipal` sind jetzt aus Skripten verfügbar; zuvor waren sie nur aus nativen Code verfügbar.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Alarme; siehe [Verwenden von tab-modalen Prompts](https://web.archive.org/web/20210513121539/https://developer.mozilla.org/de/docs/Mozilla/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt korrekt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es ermöglicht, die Zeichencodierung des Skripts anzugeben; wenn keine angegeben wird, wird ASCII angenommen (wie immer vorher angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Sie war ein Implementierungsdetail, das überholt war.
- Die `nsIContentView` und `nsIContentViewManager` Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie stellt eine scrollbare Inhaltsansicht dar, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](https://web.archive.org/web/20201026230445/https://developer.mozilla.org/de/docs/Mozilla/Infallible_memory_allocation)
  - : Mozilla bietet nun unfehlbare Speicher-Allocator, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie Sie explizit fehlbare gegenüber unfehlbarer Speicherzuweisung anfordern.

### Andere Änderungen

- Die meisten in Firefox enthaltenen Ressourcen wurden zu einem einzigen JAR-Archiv, omni.jar, zusammengefasst, was die Startleistung verbessert, indem I/O reduziert wird. Für Details, lesen Sie [Über omni.jar](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).
- Die Präferenz `accessibility.disablecache` wird nicht mehr unterstützt; sie wurde nur zu Debugging-Zwecken ausgesetzt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt korrekt aktualisiert werden.
- Als Nebeneffekt der Entfernung plattformspezifischer Verzeichnisse in Add-on-Paketen können Sie jetzt keine unterschiedlichen Standardpräferenzen mehr für jede Plattform angeben.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die Binärkomponenten, mit [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) geladene DLLs, [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole verwenden, müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](https://web.archive.org/web/20201109001036/https://developer.mozilla.org/de/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Local_Storage#sqlite) oder Dinge vom Dateisystem relativ zum Verzeichnis der Erweiterung kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen enthalten, die [automatisch beim Start der Anwendung installiert werden](https://web.archive.org/web/20180604010849/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer angepassten Firefox-Version.

## Andere Änderungen

- Nur die root chrome.manifest-Datei wird geladen
  - : Nur die root `chrome.manifest`-Datei wird nun geladen; wenn Sie zusätzliche Manifestdateien laden müssen, können Sie den [`manifest`](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#manifest)-Befehl in Ihrem root `chrome.manifest` verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Unterstützung ist jedoch weiterhin über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Content-Process-Ereignishandhabung](https://web.archive.org/web/20210531151101/https://developer.mozilla.org/de/docs/Mozilla/Firefox/Multiprocess_Firefox/Message_Manager)
  - : Um Plugins außerhalb des Prozesses und andere Mehrprozessfunktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrap-Erweiterungen](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder zurückgestuft) werden können, ohne dass ein Neustart des Browsers erforderlich ist.
- Standardplugin entfernt
  - : Das Standardplugin wurde entfernt. Der Anwendungs-Plugins-Ordner wurde ebenfalls standardmäßig entfernt, jedoch gibt es weiterhin Unterstützung für die Installation von Plugins über diesen Ordner. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager durch Addon-Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) ersetzt.
- Kind-HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Kind-HWNDs mehr für seinen internen Gebrauch unter Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, funktioniert Ihre Erweiterung nicht in Firefox 4. Sie müssen entweder die Verwendung von HWNDs einstellen oder Ihren Code, der auf HWNDs angewiesen ist, in ein NPAPI-Plugin umschließen. Das ist viel Arbeit, also sollten Sie, wenn möglich, die direkte Verwendung von HWNDs vermeiden.
- Gestenänderungen
  - : Die Drei-Finger-Wischgesten nach oben und unten auf Trackpads wurden geändert, um standardmäßig die Firefox-Panorama-Ansicht (ehemals TabCandy) zu öffnen und zu schließen. Um diese wieder auf die vorherigen Befehle zum Hoch- und Runterscrollen zu ändern, öffnen Sie about:config und setzen Sie `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.
