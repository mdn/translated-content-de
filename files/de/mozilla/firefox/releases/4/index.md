---
title: Firefox 4 Versionshinweise für Entwickler
short-title: Firefox 4
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Web-Technologien und erhöht die Sicherheit weiter. Dieser Artikel bietet Informationen über diese Version und welche Funktionen für Webentwickler, Add-on-Entwickler und Entwickler der Gecko-Plattform verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, Interoperabilität verbessert und die Leistung steigert. Außerdem ermöglicht er es, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt im HTML-Markup einzubetten.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Blick auf Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}} Element, Datenvalidierung und mehr.
- [HTML5-Abschnitte](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Abschnitte in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das für alle Elemente gilt, wird verwendet, um Inhalt auf einer Webseite zu verbergen, der für den Benutzer derzeit nicht relevant ist.
- Andere HTML5-Elemente
  - : Gecko unterstützt nun auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Nutzung der neuen WebSockets API für Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass WebSockets, wie in Firefox 4 implementiert, nicht mit dem endgültigen Standard kompatibel ist und allgemein nicht verwendet werden sollte.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}} Implementierung näher an die Spezifikation zu bringen:

- Das Angeben eines negativen Radius bei einem Aufruf von `arc()` wirft jetzt korrekt eine `INDEX_SIZE_ERR` Ausnahme.
- Das Angeben von nicht-endlichen Werten bei den Aufrufen von `createLinearGradient()` und `createRadialGradient()` wirft jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR`.
- Wenn `miterLimit` auf einen negativen Wert gesetzt wird, wird keine Ausnahme mehr geworfen; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Wenn `lineWidth` auf einen negativen Wert gesetzt wird, wird keine Ausnahme mehr geworfen; stattdessen werden nicht-positive Werte ordnungsgemäß ignoriert.
- Die `putImageData()` Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}} Elemente sind standardmäßig jetzt größenveränderlich; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}} Element unterstützt jetzt die Mozilla-spezifische `mozGetAsFile()` Methode, mit der Sie eine speicherbasierte Datei erhalten können, die ein Bild des Canvas-Inhalts enthält. Details finden Sie im [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` wirft keine Ausnahme mehr, wenn er auf einen nicht erkannten Wert gesetzt wird. Der nicht standardmäßige `darker` Wert wird nicht mehr unterstützt.
- Die Unterstützung für das veraltete `<spacer>` Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>` Element, wenn durch Aufrufen von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt, wird jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}} Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}} Element unterstützt ein neues `mozactionhint` Attribut, mit dem Sie das Etikett für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}} Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}}, und {{HTMLElement("noframes")}} Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und stimmt mit dem Verhalten anderer Browser überein.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue CSS-Übergangsunterstützung ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es Ihnen, {{cssxref("length")}} Werte als mathematische Ausdrücke zu spezifizieren.
- Selektorsammlung
  - : Unterstützung für `:-moz-any` zum Gruppieren von Selektoren und zum Faktorisieren von Kombinatoren.
- Unterstützung für Hintergrundbild-Unterrechtecke
  - : Die {{cssxref("-moz-image-rect")}} Funktion ermöglicht die Verwendung von Unterrechtecken von Bildern als {{cssxref("background-image")}}.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und echte Artikelnamen folgen später.
- [Beliebige Elemente als CSS-Hintergründe verwenden](/de/docs/Web/CSS/element)
  - : Sie können die `-moz-element` CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Privatsphäre und der :visited Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Es wurden Änderungen daran vorgenommen, welche Informationen über den Stil besuchter Links mithilfe von CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen beeinflussen.

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
      <td>Gibt die Breite in Leerzeichen eines Tabulatorzeichens (U+0009) bei der Textdarstellung an.</td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>Ermöglicht die Kontrolle darüber, in welchen Dimensionen ein Element größenveränderlich ist.</td>
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
      <td>Wird auf den Submit-Button bei Formularen angewendet, wenn eines oder mehrere der Formularfelder nicht validieren.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, wenn deren Inhalte ungültig sind.</td>
    </tr>
    <tr>
      <td>{{cssxref(":optional")}}</td>
      <td>Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die das <code>required</code> Attribut nicht spezifizieren.</td>
    </tr>
    <tr>
      <td>{{cssxref(":required")}}</td>
      <td>Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, die das <code>required</code> Attribut spezifizieren.</td>
    </tr>
    <tr>
      <td>{{cssxref(":valid")}}</td>
      <td>Wird automatisch auf {{HTMLElement("input")}} Felder angewendet, wenn deren Inhalte erfolgreich validiert wurden.</td>
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
      <td>Ermöglicht es Ihnen, das Aussehen eines Elements anzugeben, wenn Gecko glaubt, dass es eine Fokusanzeige haben sollte.</td>
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
      <td>Ermöglicht das Gruppieren von Selektoren und das Faktorisieren von Kombinatoren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>Ermöglicht es Ihnen, {{cssxref("length")}} Werte als mathematische Ausdrücke anzugeben.</td>
    </tr>
    <tr>
      <td><code>-moz-element</code></td>
      <td>Ermöglicht es Ihnen, ein beliebiges Element als Hintergrund für {{cssxref("background-image")}} und {{cssxref("background")}} zu verwenden.</td>
    </tr>
    <tr>
      <td><code>-moz-image-rect</code></td>
      <td>Ermöglicht es Ihnen, ein Unterrechteck eines Bildes als {{cssxref("background-image")}} oder {{cssxref("background")}} zu verwenden.</td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Hinweise                                                                                                                                                                                                                           |
| ---------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                                       |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Seiten zu aktualisieren. Es wurden auch Änderungen bei der Darstellung vorgenommen, um der neuesten Version der Spezifikation zu entsprechen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                                    |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}} Eigenschaft begrenzt jetzt den Unschärferadius aus Gründen der Vernunft und Leistung auf 300px.
- Die {{cssxref("overflow")}} Eigenschaft gilt nicht mehr für Tabellengruppen-Elemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance` Eigenschaft unterstützt jetzt den `-moz-win-borderless-glass` Wert, der einem Element einen rahmenlosen Aero Glass Look verleiht.
- Die [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/@media/-moz-device-pixel-ratio) Medienfunktion wurde hinzugefügt, die es ermöglicht, das Verhältnis von Gerätepixeln pro CSS-Pixel in [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu verwenden.
- Geckos Handhabung von CSS {{cssxref("length")}} Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen basierend auf der DPI des Geräts genauer in Bildschirmpixelzählen zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Unterstützung für WebM Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/) Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVGs als Bilder und als CSS-Hintergründe
  - : Sie können SVG jetzt mit dem {{htmlelement("img")}} Element sowie als CSS {{cssxref("background-image")}} verwenden.
- Unterstützung für das `buffered` Attribut bei Medien
  - : Das `buffered` Attribut bei {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen wird jetzt unterstützt, wodurch Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges) DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload` Attribut
  - : Das `preload` Attribut aus der HTML5-Spezifikation wurde implementiert, um das zuvor implementierte (und nicht mehr unterstützte) `autobuffer` Attribut zu ersetzen. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elemente sowie die `nsIDOMHTMLMediaElement` Schnittstelle.
- SVG-Textpositionierungsverbesserungen
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx`, und `dy` Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}} Elementen angeben. Dies ermöglicht es Ihnen, die Positionierung jedes Zeichens in einer Zeichenkette individuell zu steuern.

### DOM

- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung wurde für JavaScript Typed Arrays hinzugefügt; diese ermöglichen Ihnen die Manipulation von Puffer, die rohe Daten unter Verwendung nativer Datentypen enthalten. Mehrere APIs nutzen dies, darunter die [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalten von Begrenzungsrechten für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range) Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassen von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die ursprünglich von Internet Explorer stammenden `setCapture()` und `releaseCapture()` APIs wurde hinzugefügt. Siehe [Firefox Bug 503943](https://bugzil.la/503943).
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
  - : Das vorhandene Dokumentverlauf-Objekt, zugänglich über das [`window.history`](/de/docs/Web/API/Window/history) Objekt, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- Animationen unter Verwendung von `MozBeforePaint`
  - : Ein neues Ereignis wurde hinzugefügt, das in Zusammenarbeit mit der `window.mozRequestAnimationFrame()` Methode und der `window.mozAnimationStartTime` Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Unterstützung für Touch- und Multi-Touch-Ereignisse
  - : Unterstützung wurde für Touch- und Multi-Touch-Ereignisse hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die in der HTML5-Spezifikation geforderten geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}} Elements kann jetzt über das DOM mithilfe des `wrap` DOM-Attributs gesteuert werden. [Firefox Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}} Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingesetzt werden, verhalten sich nun standardmäßig entsprechend der HTML5-Spezifikation. Skripte mit dem `src` Attribut werden so schnell wie möglich ausgeführt (ohne die Reihenfolge zu bewahren) und Skripte ohne das `src` Attribut werden synchron ausgeführt. Um Skripte, die per Skript eingesetzt wurden und das `src` Attribut haben, in der Einfügereihenfolge auszuführen, setzen Sie `.async=false` darauf.
- DOM [`File`](/de/docs/Web/API/File) Objekte bieten jetzt eine `url` Eigenschaft.
- [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects) Unterstützung für `XMLHttpRequest`.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) Eigenschaft lässt Sie feststellen, welches {{HTMLElement("script")}} Element gerade ausgeführt wird. Die neuen Ereignisse [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode` Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify) Methode wurde dem [`Selection`](/de/docs/Web/API/Selection) Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder Cursorposition in einem Browserfenster einfach zu ändern.
- Die Unterstützung für das `window.directories` Objekt und das `directories` Merkmal für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource) Eigenschaft wurde zu DOM-Benutzeroberflächenereignissen hinzugefügt; diese nicht standardmäßige Eigenschaft lässt Sie den Typ des Geräts bestimmen, das ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement) Methode akzeptiert im Quirks-Modus keine `<` und `>` mehr um den Tag-Namen herum.
- Die [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) Methoden wurden hinzugefügt, um es Elementen zu ermöglichen, Mausereignisse weiter zu verfolgen, auch wenn sich die Maus nach einem `mousedown` Ereignis außerhalb ihres normalen Verfolgungsbereichs befindet.
- Die `window.mozPaintCount` Eigenschaft wurde hinzugefügt; sie lässt Sie feststellen, wie oft ein Dokument gezeichnet wurde. Dies kann nützlich sein, um die Leistung Ihrer Webanwendung zu testen.
- Das Sprache-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation) Header stattdessen. [Firefox Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt gibt die Antwort jetzt als JavaScript Typed Array sowie als Zeichenkette, unter Verwendung der gecko-spezifischen `mozResponseArrayBuffer` Eigenschaft, aus.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) beinhalten jetzt eine `mozPressure` Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) Methoden lassen Sie Objekt-URLs erstellen, die auf lokale Dateien verweisen.
- Die [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) Methode ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` wirft jetzt eine `SYNTAX_ERR` Ausnahme, wenn die angegebene Selektorzeichenfolge ungültig ist, anstatt fälschlicherweise `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit der gleichen Kurzschreibweise wie bei CSS festlegen. Zum Beispiel: `element.style.fill = 'lime'`. Details siehe [`style`](/de/docs/Web/API/HTMLElement/style).
- Der Dokumenten-Stamm hat jetzt [ein `privatebrowsingmode` Attribut](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Modus beschreibt, einschließlich eines Hinweises darauf, ob der private Modus für die Sitzung temporär oder permanent ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) Methode ist jetzt optional, wie in jedem anderen großen Browser.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent) Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimale erlaubte Verzögerung für die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) Methode ist jetzt eine Voreinstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](https://web.archive.org/web/20191010014917/https://developer.mozilla.org/de/docs/Web/Events#Add-on-specific_events) Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines potenziellen Sicherheitsproblems. Es kann durch Einstellen einer Voreinstellung wieder aktiviert werden.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein Mozilla-Vorschlag, der Webdesignern und Serveradministratoren helfen soll, festzulegen, wie Inhalte auf ihren Websites interagieren. Das Ziel ist es, Angriffe zu erkennen und zu mildern, darunter Cross-Site Scripting und Dateninjektionsangriffe.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security ist ein Sicherheitsmerkmal, das es einer Website ermöglicht, den Browsern mitzuteilen, dass sie nur über HTTPS und nicht über HTTP kommuniziert werden soll.
- [Das X-FRAME-OPTIONS Antwort-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Das in Internet Explorer 8 eingeführte X-FRAME-OPTIONS HTTP-Antwort-Header wird jetzt von Firefox unterstützt. Dies ermöglicht es Websites anzugeben, ob ihre Seiten in Frames verwendet werden können, und wenn ja, ob dies auf den gleichen Ursprung beschränkt werden soll.
- Änderungen des [User Agent-Strings](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : Als Mittel zur Reduzierung der Menge an Daten und Entropie in HTTP-Anfragen (siehe [Firefox Bug 572650](https://bugzil.la/572650)) wurden Krypto-Stärke- und Sprache-Token aus dem User Agent-String entfernt.

### JavaScript

Für eine Übersicht über die in JavaScript 1.8.5 umgesetzten Änderungen siehe [New in JavaScript 1.8.5](https://web.archive.org/web/20210516173330/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird zusätzliche Übereinstimmungen mit dem ECMAScript 5-Standard aufweisen.

### Entwickler-Tools

- [Verwendung der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Das Web-Konsolen-Tool ist eine nützliche Debugging-Hilfe sowohl für Web- als auch für Erweiterungsentwickler.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie wieder aktivieren, indem Sie die Voreinstellung `devtools.errorconsole.enabled` auf `true` setzen und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zur Aktualisierung bestehender Erweiterungen für Firefox 4, siehe [Updating extensions for Firefox 4](/de/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons beeinträchtigen, daher sollten Sie diesen Artikel unbedingt lesen.

Wenn Sie ein Theme-Entwickler sind, sollten Sie [Theme changes in Firefox 4](https://web.archive.org/web/20210515184532/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_4) lesen, um einige wichtige Änderungen zu verstehen, die Sie beachten müssen.

### JavaScript-Code-Module

- [Services.jsm](https://web.archive.org/web/20210417185248/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm` Code-Modul bietet Getter, die es einfach machen, Referenzen zu häufig verwendeten Diensten wie dem Einstellungsdienst oder dem Fenstervermittler zu erhalten, unter anderem.
- [JS-ctypes API](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes)
  - : Die JS-ctypes API ermöglicht es, C-kompatible Fremdbibliotheksfunktionen aufzurufen, ohne XPCOM zu verwenden.
- [Add-ons Manager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : Der neue Add-ons-Manager bietet Informationen über installierte Add-ons, Unterstützung für ihre Verwaltung und Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](https://web.archive.org/web/20210414083224/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Pop-Up-Benachrichtigungsmodul erleichtert es, attraktive, nicht modale Benachrichtigungen an den Benutzer zu präsentieren. Sie können sehen, wie diese API in [Using popup notifications](https://web.archive.org/web/20210411021529/https://developer.mozilla.org/de/docs/Mozilla/Using_popup_notifications) verwendet wird.
- [Laden von Code-Modulen über chrome: URLs](https://web.archive.org/web/20210529003507/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module über **chrome:** URLs laden, selbst innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](https://web.archive.org/web/20210615230651/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/DownloadLastDir.jsm) Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, mit dem Sie den Pfad des Verzeichnisses erfahren können, in das der letzte Download erfolgte. Dieses Modul kümmert sich um mit dem privaten Modus zusammenhängende Probleme für Sie.
- [Messen der Leistung mit dem PerfMeasurement.jsm Code-Modul](https://web.archive.org/web/20210420142952/https://developer.mozilla.org/de/docs/Mozilla/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](https://web.archive.org/web/20210620175828/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PerfMeasurement.jsm) Code-Modul bietet eine API zur Messung von Prozessorzeit-Leistungsdaten im JavaScript-Code.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm` Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in einen Zeichenstring zu lesen, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm Code-Modul bietet jetzt die Helfertypen IterSimpleEnumerator() und IterStringEnumerator() zum Iterieren über XPCOM-Enumeratoren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](https://web.archive.org/web/20210620192749/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Typ von Worker für privilegierten Code; dies ermöglicht es Ihnen, Dinge wie [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) aus Workern in Erweiterungen und Anwendungs-Code zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung wurde für (nicht standardmäßige) Touch-Ereignisse hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger gleichzeitig zu verfolgen, die sich auf einem Touchscreen bewegen.

#### Weitere DOM-Änderungen

- Die [neue "document-element-inserted" Benachrichtigung](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications#documents) wird gesendet, wenn ein Dokument-Wurzelelement erstellt wird, aber bevor irgendwelche Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am `tabbrowser` Element

Mehrere Änderungen wurden am `<xul:tabbrowser>` Element vorgenommen, die Erweiterungen betreffen, die mit Tabs interagieren. Neben der Unterstützung für App-Tabs, ändern diese Änderungen auch die Tab-Leiste in eine Standardwerkzeugleiste, die es dem Benutzer erlaubt, Schaltflächen in sie zu ziehen.

- Die Ereignisse `TabClose`, `TabSelect` und `TabOpen` steigen nicht mehr bis zum `<xul:tabbrowser>` Element (`gBrowser`) hoch. Ereignislistener für diese Ereignisse sollten dem `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` erreicht werden. Weitere Details finden Sie in diesem [Blogbeitrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/).
- Die neue `visibleTabs` Eigenschaft wurde hinzugefügt, um Ihnen ein Array der aktuell sichtbaren Tabs zu geben; so können Sie feststellen, welche Tabs im aktuellen Tab-Set sichtbar sind. Dies wird zum Beispiel von Firefox Panorama genutzt.
- Die neue Methode `showOnlyTheseTabs` wurde hinzugefügt; diese wird von Firefox Panorama verwendet.
- Die neue `getIcon` Methode wurde hinzugefügt, die es Ihnen ermöglicht, ein Favicon eines Tabs zu erhalten, ohne zum `<xul:browser>` Element zu gehen.
- Die neue `tabbrowser.tabs` Eigenschaft wurde hinzugefügt, die es Ihnen leicht macht, eine Liste der Tabs in einem `<xul:tabbrowser>` Element zu erhalten.
- Die neuen Methoden `pinTab` und `unpinTab` ermöglichen es Ihnen, Tabs zu pinnen und zu entpinnen (d.h. sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die `getTabModalPromptBox` Methode und das `tabModalPromptShowing` Attribut wurden dem `<xul:tabbrowser>` hinzugefügt, um tab-modale Alarme zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>` Element wird nicht mehr unterstützt; Sie sollten `<xul:menupopup>` stattdessen verwenden. (Wenn Sie weiterhin `popup` verwenden, werden Sie auf Störungen stoßen, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel, kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>` XUL-Element hat jetzt eine `triggerNode` Eigenschaft, die auf das Knoten verweist, auf dem das Ereignis aufgetreten ist, das das Popup öffnete. Dies erforderte auch die Hinzufügung eines Triggerereignisparameters zur `openPopup` Methode. Außerdem wurde die `anchorNode` Eigenschaft hinzugefügt; sie gibt den Anker zurück, der beim Erstellen des Popups spezifiziert wurde.
- Das `<xul:panel>` Element bietet jetzt `fade` und `flip` Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil Benachrichtigungspanels zu konfigurieren.

#### Entfernte Unterstützung für Remote XUL

Remote XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP geliefert werden; Sie können keine XUL-Dokumente mehr unter Verwendung von `file://` URLs laden, es sei denn, Sie erstellen die Voreinstellung `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch eine Whitelist-Funktion, die verwendet werden kann, um bestimmte Domains zu erlauben, Remote XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly` Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>` Element erlaubt es Ihnen nun, das `element` Attribut zu verwenden, um ein zu veränderndes Element anzugeben, anstelle das Fenster zu verändern.
- Das `<xul:resizer>` Element hat jetzt ein `type` Attribut, das ermöglicht, dass der Resizer für ein Fenster verwendet wird, anstatt für ein Element, um zu verhindern, dass der Fensterresizer zweimal geschrieben wird.
- Das `"active"` Attribut wird nicht mehr auf aktive XUL-Fenster gesetzt. Stattdessen können Sie die neue `:-moz-window-inactive` Pseudoklasse verwenden, um verschiedenen Hintergrundfenstern unterschiedliche Stile zuzuweisen.
- Das `emptytext` Attribut ist jetzt veraltet; Sie sollten `placeholder` stattdessen verwenden.
- Das `<xul:window>` Element bietet jetzt ein `accelerated` Attribut; wenn es `true` ist, darf der Hardware-Schicht-Manager das Fenster beschleunigen.
- Das `<xul:stack>` Element unterstützt jetzt die `bottom` und `right` Attribute.
- Ereignisse werden jetzt während der `<xul:toolbox>` Anpassung ausgelöst, sodass Sie Änderungen an Werkzeugleisten erkennen können.
- Das `alternatingbackground` Attribut für `<xul:tree>` Elemente wird nicht mehr unterstützt; Sie können die `:-moz-tree-row` Pseudoklasse stattdessen verwenden.
- Die Lesezeichen-Symbolleiste Überlauf-Schaltfläche mit `anonid` `chevronPopup` ist nicht mehr anonym; sie hat eine ID von "PlacesChevron".
- Das `<xul:tabs>` Element hat jetzt eine `tabbox` Eigenschaft, die die alte `_tabbox` Eigenschaft ersetzt, die veraltet ist (und niemals dokumentiert war).
- XUL `<xul:window>` Elemente haben jetzt das `drawintitlebar` Attribut; wenn dies `true` ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned` Ereignisse sind verfügbar, die es Ihnen ermöglichen, zu erkennen, wann Tabs gepinnt und entpinnt werden.
- Das neue `TabAttrModified` Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image` oder `selected` Attribute eines Tabs ändern.
- `<xul:tab>` Elemente haben jetzt ein `pinned` Attribut, das es Ihnen ermöglicht, festzustellen, ob ein Tab derzeit gepinnt ist.
- Die `setDirectionIndicator` Klasse in `<xul:tree>` Elementen hat schon länger nichts mehr bewirkt; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>` Element verfügt jetzt über ein `chromemargin` Attribut, das es Ihnen ermöglicht, den Rand zwischen Chrom und Inhalt auf jeder Seite eines Fensters zu setzen; Sie können dies verwenden, um in die Titelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>` Element verfügt jetzt über ein `disablechrome` Attribut; dies wird verwendet, um das meiste Chrom in einem Fenster zu verbergen, wenn es verwendet wird, um Benutzeroberflächen im Browser, wie `about:addons`, anzuzeigen.
- Das `<xul:window>` Element verfügt jetzt über ein `disablefastfind` Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird zum Beispiel von der Add-ons-Ansicht verwendet.
- Werkzeugleisten können jetzt außerhalb der Werkzeugkästen sein, während sie immer noch als Mitglieder des `<xul:toolbox>` betrachtet werden, indem die `toolboxid` Eigenschaft des `<xul:toolbar>` gesetzt wird. Außerdem hat das `<xul:toolbox>` Element jetzt eine `externalToolbars` Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens betrachtet werden.
- Unterstützung wurde für das Protokollieren von XUL-Vorlagen für Debuggingzwecke hinzugefügt.

### Benutzeroberflächenänderungen, die Entwickler beeinflussen

- [Die Add-On-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-On Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie zuvor Benutzeroberflächen zur Statusleiste hinzugefügt haben.
- Verbergen des Browserchroms
  - : Sie können jetzt das Browserchrom verbergen, wenn dies wünschenswert ist; zum Beispiel macht `about:addons` dies.

### Speicher

#### Verschiedene Änderungen an Speicher-APIs

- Die `mozIStorageBindingParamsArray` Schnittstelle hat jetzt eine Länge-Attribut, das die Anzahl der `mozIStorageBindingParams` Objekte im Array angibt.
- Die `mozIStorageStatement.bindParameters()` Methode gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die `mozIStorageConnection.clone()` Methode wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die `mozIStorageConnection.asyncClose()` Methode wurde hinzugefügt, die es Ihnen ermöglicht, eine Datenbankverbindung asynchron zu schließen; Sie geben einen Rückruf an, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die `mozIStorageConnection.setGrowthIncrement()` Methode wurde hinzugefügt, die es Ihnen erlaubt, die Menge anzugeben, um die eine Datenbankdatei gleichzeitig wächst, um SQLite bei der Reduzierung von Fragmentierung zu helfen.
- Der `SQLITE_CONSTRAINT` Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` statt als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten referenzierten spezifischen Änderungen ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt ungefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation mit der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)
  - : Details zu Änderungen an XPCOM, die die Kompatibilität in Firefox 4 beeinflussen.
- [Components.utils.getGlobalForObject()](https://web.archive.org/web/20210625071536/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt verbunden ist; sie ersetzt einen gemeinsamen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den Schnittstellen `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode` gibt. Wesentlicher ist jedoch, dass die Schnittstelle `nsINavHistoryResultViewer` in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications) wurden hinzugefügt, um dem Browser zu ermöglichen, den Herunterfahrensprozess des Places-Services zuverlässiger zu verfolgen. Davon sind die meisten nur für den internen Gebrauch, aber die `places-connection-closed` Benachrichtigung ist verfügbar, um zu wissen, wann der Places-Service seinen Herunterfahrensprozess abgeschlossen hat.
- Der Array-Größen-Ausgabeparameter in mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü erstellen und mit Places-Informationen manuell befüllen, anstatt es für Sie erledigen zu lassen. Siehe [Darstellen von Places-Informationen unter Verwendung von Ansichten: Menüansicht](https://web.archive.org/web/20201028190050/https://developer.mozilla.org/de/docs/Mozilla/Displaying_Place_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die Schnittstellen `nsIDocShell` und `nsIWebBrowser` haben jetzt ein neues `isActive` Attribut, das verwendet wird, um die Optimierung von Codepfaden für derzeit nicht sichtbare Dokumente zu ermöglichen.
- Die `nsIMemory` Methode `nsIMemory.isLowMemory()` wurde veraltet. Sie sollten ["memory-pressure" Benachrichtigungen](https://web.archive.org/web/20210516060454/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemory#low_memory_notifications) verwenden, um auf Situationen von niedrigem Speicher zu achten.
- Die API zum Umgang mit Weiterleitungen auf HTTP-Kanälen hat sich geändert, um deren Verarbeitung asynchron zu ermöglichen. Jeder Code, der die Umleitungsbehandlung unter Verwendung von `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um `nsIChannelEventSink.asyncOnChannelRedirect()` stattdessen zu verwenden. Dies akzeptiert einen Rückruf-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die `nsINavHistoryResultObserver.batching()` Methode wurde hinzugefügt, um eine Möglichkeit bereitzustellen, Places-Operationen in Batches zu gruppieren und die Anzahl der gesendeten Aktualisierungsbenachrichtigungen zu reduzieren, was die Leistung verbessern kann, wenn Beobachter relativ aufwändige Aufgaben wie das Aktualisieren von Ansichten ausführen.
- Die lange veraltete `nsIPref` Schnittstelle wurde schließlich entfernt. Wenn Sie noch nicht zu `nsIPrefService` gewechselt sind, ist jetzt die Zeit dafür.
- Die `nsISessionStore` und `nsISessionStartup` Schnittstellen erhielten Änderungen, um die Sitzungswiederherstellung bei Bedarf zu unterstützen. Siehe die Methode `nsISessionStore.restoreLastSession()`.
- Die Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` sowie die Attribute `origin`, `csp` und `URI` der `nsIPrincipal` Schnittstelle sind nun aus Skripten zugänglich; zuvor waren sie nur aus nativen Code zugänglich.
- Die `nsIPrompt` Schnittstelle unterstützt jetzt tab-modale Alarme; siehe [Verwendung von tab-modalen Eingabeaufforderungen](https://web.archive.org/web/20210513121539/https://developer.mozilla.org/de/docs/Mozilla/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt korrekt Hostnamen ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, die Zeichencodierung des Skripts anzugeben; wenn keine angegeben ist, wird ASCII angenommen (wie bisher immer angenommen wurde).
- Die `nsIAccessProxy` Schnittstelle wurde entfernt. Es handelte sich um ein Implementierungsdetail, das seinen Nutzen überlebt hatte.
- Die `nsIContentView` und `nsIContentViewManager` Schnittstellen wurden für Firefox Mobile hinzugefügt. Sie repräsentieren eine scrollbare Inhaltsansicht, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal` Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService` Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE` Schnittstelle wurde hinzugefügt. Siehe [Firefox Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter` Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Infallible memory allocation](https://web.archive.org/web/20201026230445/https://developer.mozilla.org/de/docs/Mozilla/Infallible_memory_allocation)
  - : Mozilla bietet nun unfehlbare Speicher-Allokatoren, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu erfahren, wie sie funktionieren und wie explizit nach fehlbare vs. unfehlbare Speicherallokation angefragt wird.

### Sonstige Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einzelnes JAR-Archiv `omni.jar` zusammengefügt, was die Startleistung verbessert, indem I/O reduziert wird. Für Details, lesen Sie [Über omni.jar](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).
- Die `accessibility.disablecache` Voreinstellung wird nicht mehr unterstützt; sie wurde nur zu Debuggingzwecken ausgestellt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung plattformspezifischer Verzeichnisse in Addon-Bundles können Sie keine unterschiedlichen Standardvoreinstellungen mehr für jede Plattform bereitstellen.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#unpack) Eigenschaft im [Installationsmanifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwenden, um das alte Verhalten auszuwählen. Erweiterungen, die Binärkomponenten verwenden, DLLs laden unter Verwendung von [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes), [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](https://web.archive.org/web/20201109001036/https://developer.mozilla.org/de/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Local_Storage#sqlite) oder Dateien aus dem Dateisystem relativ zum Erweiterungsverzeichnis kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen einschließen, die [automatisch beim Anwendungsstart installiert werden](https://web.archive.org/web/20180604010849/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) innerhalb einer angepassten Firefox-Distribution.

## Sonstige Änderungen

- Nur die root chrome.manifest Datei wird geladen
  - : Nur die root chrom.manifest Datei wird jetzt geladen; wenn Sie sekundäre Manifestdateien laden müssen, können Sie den [`manifest`](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#manifest) Befehl in Ihrer root chrome.manifest verwenden, um sie zu laden.
- Gopher-Unterstützung entfernt
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Die Unterstützung ist weiterhin über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/) Erweiterung verfügbar.
- [Inhaltsprozess-Ereignisbehandlung](https://web.archive.org/web/20210531151101/https://developer.mozilla.org/de/docs/Mozilla/Firefox/Multiprocess_Firefox/Message_Manager)
  - : Um Plugins und andere Mehrprozess-Funktionen außerhalb des Prozesses zu unterstützen, wurde eine neue API eingeführt, die das Senden von Nachrichten über Prozesse hinweg unterstützt.
- [Bootstrapped-Erweiterungen](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne einen Neustart des Browsers zu erfordern.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungs-Plugin-Ordner wurde ebenfalls standardmäßig entfernt, jedoch existiert die Unterstützung für die Installation von Plugins über diesen Ordner weiterhin. Siehe [Firefox Bug 533891](https://bugzil.la/533891).
- Erweiterungsmanager ersetzt durch Addon-Manager
  - : `nsIExtensionManager` wurde durch den [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) ersetzt.
- Kinder-HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Kinder-HWNDs mehr für seinen internen Gebrauch auf Windows. Wenn Sie eine Erweiterung geschrieben haben, die nativen Code verwendet, um diese HWNDs zu manipulieren, wird Ihre Erweiterung in Firefox 4 nicht funktionieren. Sie müssen entweder aufhören, HWNDs direkt zu verwenden, oder Ihren Code, der auf HWNDs angewiesen ist, in ein NPAPI-Plugin verpacken. Das ist viel Arbeit, daher sollten Sie, wenn Sie die direkte Verwendung von HWNDs vermeiden können, dies tun.
- Gestenänderungen
  - : Die Drei-Finger-Wischgesten nach oben und unten auf Trackpads öffnen und schließen standardmäßig die Firefox-Panorama-Ansicht (vormals TabCandy). Um diese auf die vorherigen "Scroll-to-Top" und "Scroll-to-Bottom" Befehle zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.
