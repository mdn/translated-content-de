---
title: Firefox 4 Versionshinweise für Entwickler
short-title: Firefox 4
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 4, das am 22. März 2011 herauskam, verbessert die Leistung, bietet mehr Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien und verbessert die Sicherheit weiter. Dieser Artikel liefert Informationen über diese Veröffentlichung und welche Funktionen für Webentwickler, Add-on-Entwickler und Gecko-Plattformentwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}} Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Es ermöglicht auch das direkte Einbetten von [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) im HTML-Markup.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Eine Betrachtung der Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue `input`-Typen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Sektionen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Sektionen in einem Dokument beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5 hidden-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die für den Benutzer derzeit nicht relevant sind.
- Andere HTML5-Elemente
  - : Gecko unterstützt jetzt auch die folgenden neuen HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Ein Leitfaden zur Verwendung der neuen WebSockets-API für die Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass die WebSockets-Implementierung in Firefox 4 nicht mit dem endgültigen Standard kompatibel ist und daher nicht allgemein verwendet werden sollte.

#### Canvas-Verbesserungen

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere {{HTMLElement("canvas")}}-Implementierung näher an die Spezifikation zu bringen:

- Bei der Angabe eines negativen Radius bei `arc()` wird jetzt korrekterweise eine `INDEX_SIZE_ERR`-Ausnahme ausgelöst.
- Die Verwendung von nicht-finiten Werten bei `createLinearGradient()` und `createRadialGradient()` löst jetzt `NOT_SUPPORTED_ERR` anstelle von `SYNTAX_ERR` aus.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Das Setzen von `lineWidth` auf einen negativen Wert löst keine Ausnahme mehr aus; stattdessen werden nicht-positive Werte korrekt ignoriert.
- Die `putImageData()`-Methode unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Verschiedene HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig skalierbar; Sie können die {{cssxref("resize")}} CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` lösen keine Ausnahme mehr aus, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt jetzt die mozilla-spezifische `mozGetAsFile()`-Methode, die es Ihnen ermöglicht, eine speicherbasierte Datei zu erhalten, die ein Bild des Inhalts des Canvas enthält. Siehe [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) für Details.
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` lösen keine Ausnahme mehr aus, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` löst keine Ausnahme mehr aus, wenn es auf einen nicht erkannten Wert gesetzt wird, und unterstützt nicht mehr den nicht standardmäßigen `darker`-Wert.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern abwesend war, wurde entfernt.
- Das `<isindex>`-Element wird, wenn es durch Aufrufen von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, jetzt als einfaches Element ohne Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt das Aufrufen von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues `mozactionhint`-Attribut, mit dem Sie die Bezeichnung für die Eingabetaste auf virtuellen Tastaturen festlegen können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und stimmt mit dem Verhalten anderer Browser überein.

### CSS

- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions/Using)
  - : Neue CSS-Übergänge sind in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Dies ermöglicht es, {{cssxref("Länge")}}-Werte als mathematische Ausdrücke anzugeben.
- Selektor-Gruppierung
  - : Unterstützung für `:-moz-any`, um Selektoren zu gruppieren und Kombinatoren zu faktorisieren.
- Unterstützung für Hintergründe mit Bildausschnitten
  - : Die {{cssxref("-moz-image-rect")}}-Funktion ermöglicht die Verwendung von Bildausschnitten als {{cssxref("background-image")}}.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und Artikelbezeichnungen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/Reference/Values/element)
  - : Sie können die `-moz-element`-CSS-Funktion und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu nutzen.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : Es wurden Änderungen vorgenommen, welche Informationen über den Stil besuchter Links mit CSS-Selektoren ermittelt werden können. Dies kann einige Webanwendungen beeinflussen.

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
        Text-Rendering an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht die Kontrolle der Dimensionen, in denen ein Element
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
      <td>Wird verwendet, um Elemente zu gestalten, deren Plugins abgestürzt sind.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formularfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf den Senden-Schalter von Formularen angewendet, wenn eines
        oder mehrere Formularfelder nicht validieren.
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
        wenn ihr Inhalt ungültig ist.
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
        wenn ihr Inhalt erfolgreich validiert.
      </td>
    </tr>
  </tbody>
</table>

#### Neue CSS-Pselektoren

<table>
  <tbody>
    <tr>
      <td>Pseudo-Selektor</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>{{cssxref(":focus-visible", ":-moz-focusring")}}</td>
      <td>
        Ermöglicht es, das Erscheinungsbild eines Elements zu bestimmen,
        wenn Gecko der Meinung ist, dass ein Fokusindikator gerendert
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
      <td>Ermöglicht das Gruppieren von Selektoren und Faktorisieren von Kombinatoren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht es, {{cssxref("Länge")}}-Werte als
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

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                              |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                             |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Sites zu aktualisieren. Rendering-Änderungen wurden ebenfalls vorgenommen, um die neueste Spezifikationsversion zu berücksichtigen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                                          |

#### Verschiedene CSS-Änderungen

- Die {{cssxref("text-shadow")}}-Eigenschaft begrenzt jetzt den Weichungsradius aus Gründen der Vernunft und Leistung auf 300px.
- Die {{cssxref("overflow")}}-Eigenschaft gilt nicht mehr für Tabellengruppenelemente (`<thead>`, `<tbody>`, und `<tfoot>`).
- Die `-moz-appearance`-Eigenschaft unterstützt jetzt den `-moz-win-borderless-glass`-Wert, der einem Element ein borderloses Aero Glass-Aussehen verleiht.
- Das [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio)-Medienfeature wurde hinzugefügt, das es ermöglicht, das Verhältnis von Gerätepixeln zu CSS-Pixeln in [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) zu verwenden.
- Geckos Behandlung von CSS {{cssxref("length")}} Einheiten wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirm-Pixelzahlen basierend auf der DPI des Geräts zu übersetzen.

### Grafik und Video

- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Der sich entwickelnde WebGL-Standard wird jetzt von Firefox unterstützt.
- [Unterstützung für WebM-Video](/de/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Das neue offene [WebM](https://www.webmproject.org/)-Videoformat wird von Gecko 2.0 unterstützt.
- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Die Unterstützung für SMIL-Animationen von SVG ist jetzt verfügbar.
- Verwendung von SVG als Bilder und als CSS-Hintergründe
  - : Sie können SVG jetzt mit dem {{htmlelement("img")}}-Element sowie als CSS {{cssxref("background-image")}} verwenden.
- Medien `buffered`-Attribut Unterstützung
  - : Das `buffered`-Attribut bei {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen wird jetzt unterstützt, sodass Sie feststellen können, welche Bereiche einer Mediendatei gepuffert wurden. Die [`TimeRanges`](/de/docs/Web/API/TimeRanges)-DOM-Schnittstelle wurde implementiert, um dies zu unterstützen.
- Medien `preload`-Attribut
  - : Das `preload`-Attribut aus der HTML5-Spezifikation wurde implementiert und ersetzt das zuvor implementierte (und nicht mehr unterstützte) `autobuffer`-Attribut. Dies betrifft die {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elemente sowie die `nsIDOMHTMLMediaElement`-Schnittstelle.
- SVG-Textpositionierungsverbesserungen
  - : Sie können jetzt Listen für die Werte der `x`, `y`, `dx` und `dy`-Eigenschaften auf SVG {{SVGElement("text")}} und {{SVGElement("tspan")}}-Elementen angeben. Dies ermöglicht Ihnen, die Position jedes Zeichens in einer Zeichenkette individuell zu steuern.

### DOM

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Unterstützung für JavaScript-typisierte Arrays wurde hinzugefügt; dies ermöglicht Ihnen, Puffer mit Rohdaten unter Verwendung nativer Datentypen zu manipulieren. Mehrere APIs verwenden dies, einschließlich der [File API](/de/docs/Web/API/File), [WebGL](/de/docs/Web/API/WebGL_API) und [WebSockets](/de/docs/Web/API/WebSockets_API).
- Erhalt von Begrenzungsrechtecken für Bereiche
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt hat jetzt die Methoden [`range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) und [`range.getBoundingClientRect()`](/de/docs/Web/API/Range/getBoundingClientRect).
- Erfassung von Mausereignissen auf beliebigen Elementen
  - : Unterstützung für die ursprünglich von Internet Explorer eingeführten `setCapture()` und `releaseCapture()`-APIs wurde hinzugefügt. Siehe [Firefox-Bug 503943](https://bugzil.la/503943).
- [Manipulation der Browserhistory](/de/docs/Web/API/History_API)
  - : Das bestehende Dokumethistory-Objekt, das über das [`window.history`](/de/docs/Web/API/Window/history)-Objekt verfügbar ist, unterstützt jetzt die neuen HTML5-Methoden `pushState()` und `replaceState()`.
- Animationen mit `MozBeforePaint`
  - : Ein neues Ereignis wurde hinzugefügt, das in Kombination mit der `window.mozRequestAnimationFrame()`-Methode und der `window.mozAnimationStartTime`-Eigenschaft eine Möglichkeit bietet, Animationen zu erstellen, die miteinander synchronisiert sind.
- Touch- und Mehrfingergesten-Ereignisse
  - : Unterstützung für Touch- und Mehrfingergesten-Ereignisse wurde hinzugefügt.

#### DOM-Schnittstellen von HTML-Elementen haben sich geändert

Mehrere HTML-Elemente haben ihre DOM-Schnittstellen auf die in der HTML5-Spezifikation erforderlichen geändert, wie unten gezeigt.

| Schnittstelle in Firefox 3.6                          | Schnittstelle in Firefox 4                    | HTML-Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement) | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)   | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`                                      | [`HTMLElement`](/de/docs/Web/API/HTMLElement) | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Verschiedene DOM-Änderungen

- Das Umbruchverhalten eines {{HTMLElement("textarea")}}-Elements kann jetzt über das DOM gesteuert werden, durch das `wrap`-DOM-Attribut. [Firefox-Bug 41464](https://bugzil.la/41464)
- {{HTMLElement("script")}}-Elemente, die mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt und in ein Dokument eingefügt wurden, verhalten sich jetzt standardmäßig gemäß der HTML5-Spezifikation. Skripte mit dem `src`-Attribut führen sich aus, sobald sie verfügbar sind (ohne die Reihenfolge beizubehalten) und Skripte ohne das `src`-Attribut führen sich synchron aus. Um sicherzustellen, dass eingefügte Skripte mit dem `src`-Attribut in der Einfügereihenfolge ausgeführt werden, setzen Sie `.async=false` auf ihnen.
- DOM [`File`](/de/docs/Web/API/File)-Objekte bieten jetzt eine `url`-Eigenschaft.
- [`FormData`](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)-Unterstützung bei `XMLHttpRequest`.
- Die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft wurde implementiert.
- Die [`Document.currentScript`](/de/docs/Web/API/Document/currentScript)-Eigenschaft ermöglicht es, zu bestimmen, welches {{HTMLElement("script")}}-Element gerade ausgeführt wird. Die neuen [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) und [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event)-Ereignisse werden vor und nach der Ausführung eines Skriptelements ausgelöst.
- Die `mozSourceNode`-Eigenschaft wurde dem [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzugefügt.
- Die [`Selection.modify()`](/de/docs/Web/API/Selection/modify)-Methode wurde dem [`Selection`](/de/docs/Web/API/Selection)-Objekt hinzugefügt; dies ermöglicht es Ihnen, die aktuelle Textauswahl oder den Cursor-Position im Browserfenster leicht zu ändern.
- Die Unterstützung für das `window.directories`-Objekt und das `directories`-Feature für [`window.open`](/de/docs/Web/API/Window/open), die in keinem anderen Browser unterstützt werden, wurde entfernt. Verwenden Sie stattdessen `personalbar`. [Firefox-Bug 474058](https://bugzil.la/474058)
- Die [`MouseEvent.mozInputSource`](/de/docs/Web/API/MouseEvent/mozInputSource)-Eigenschaft wurde zu DOM-Benutzerschnittstellen-Ereignissen hinzugefügt; diese nicht standardisierte Eigenschaft ermöglicht es Ihnen, den Typ des Geräts zu bestimmen, das ein Ereignis generiert hat.
- Das [`Document`](/de/docs/Web/API/Document) [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis wurde implementiert.
- Die [`Document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode akzeptiert im quirks mode keine `<` und `>` um den Tag-Namen mehr.
- Die Methoden [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) und [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) wurden hinzugefügt, die es Elementen ermöglichen, Mausereignisse weiter zu verfolgen, auch wenn die Maus nach einem `mousedown`-Ereignis außerhalb ihres normalen Verfolgungsbereichs ist.
- Die `window.mozPaintCount`-Eigenschaft wurde hinzugefügt; sie ermöglicht es Ihnen festzustellen, wie oft ein Dokument gerendert wurde. Dies kann nützlich sein, wenn Sie die Leistung Ihrer Webanwendung testen.
- Das Sprach-Token wurde aus [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) entfernt. Verwenden Sie stattdessen [`Navigator.language`](/de/docs/Web/API/Navigator/language) oder den [`Accept-Language`](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header. [Firefox-Bug 572656](https://bugzil.la/572656)
- Das [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt stellt jetzt die Antwort als JavaScript-typisiertes Array sowie als Zeichenfolge bereit, unter Verwendung der Gecko-spezifischen `mozResponseArrayBuffer`-Eigenschaft.
- [Mausereignisse](/de/docs/Web/API/MouseEvent) beinhalten jetzt eine `mozPressure`-Eigenschaft, die den Druck auf unterstützten druckempfindlichen Eingabegeräten angibt.
- Die Methoden [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) ermöglichen es Ihnen, Objekt-URLs zu erstellen, die auf lokale Dateien verweisen.
- Die Methode [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument) ermöglicht es Ihnen, ein neues HTML-Dokument zu erstellen.
- `Node.mozMatchesSelector()` löst jetzt eine `SYNTAX_ERR`-Ausnahme aus, wenn der angegebene Selektor-String ungültig ist, anstatt inkorrekt `false` zurückzugeben.
- Sie können jetzt die Werte der SVG-Eigenschaften eines Elements mit derselben Kurzschreibweise wie bei CSS setzen. Zum Beispiel: `element.style.fill = 'lime'`. Siehe [`style`](/de/docs/Web/API/HTMLElement/style) für Details.
- Der Dokumentenroot hat jetzt [ein `privatebrowsingmode`-Attribut](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/de/docs/Archive/Mozilla/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent), das den Zustand des privaten Surfmodus beschreibt, einschließlich einer Angabe, ob der private Modus für die Sitzung temporär oder permanent ist.
- Der zweite Parameter der [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle)-Methode ist jetzt optional, wie es in jedem anderen großen Browser der Fall ist.
- Das DOM [`StorageEvent`](/de/docs/Web/API/StorageEvent)-Objekt entspricht jetzt der neuesten Version der Spezifikation.
- Die minimal zulässige Verzögerung für die Methoden [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) ist jetzt eine Einstellung, `dom.min_timeout_value`.
- Das [`MozAfterPaint`](https://web.archive.org/web/20191010014917/https://developer.mozilla.org/de/docs/Web/Events#Add-on-specific_events)-Ereignis wird standardmäßig nicht mehr gesendet, aufgrund eines möglichen Sicherheitsproblems. Es kann wieder aktiviert werden, indem eine Einstellung gesetzt wird.

### Sicherheit

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) ist ein Mozilla-Vorschlag, der Webdesigner und Serveradministratoren dabei helfen soll, zu spezifizieren, wie Inhalte auf ihren Websites interagieren. Ziel ist es, Angriffe wie Cross-Site-Scripting- und Dateninjektionsangriffe zu erkennen und zu mildern.
- [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : Die HTTP Strict Transport Security ist ein Sicherheitsfeature, das es einer Website ermöglicht, den Browsern mitzuteilen, dass sie nur über HTTPS und nicht über HTTP kommunizieren sollten.
- [Der X-FRAME-OPTIONS-Header](/de/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : Der in Internet Explorer 8 eingeführte X-FRAME-OPTIONS-HTTP-Header wird jetzt von Firefox unterstützt. Dies ermöglicht es den Websites, anzugeben, ob ihre Seiten in Frames verwendet werden dürfen und, wenn ja, dies auf den gleichen Ursprung zu beschränken.
- [Änderungen am User-Agent-String](/de/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : Um die Menge an Daten und Entropie, die in HTTP-Anfragen gesendet werden, zu reduzieren (siehe [Firefox-Bug 572650](https://bugzil.la/572650)), wurden die Kryptographie-Stärke- und Sprach-Token aus dem User-Agent-String entfernt.

### JavaScript

Für einen Überblick über die Änderungen in JavaScript 1.8.5, siehe [Neu in JavaScript 1.8.5](https://web.archive.org/web/20210516173330/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.5). JavaScript in Firefox 4 wird eine zusätzliche Anpassung an den ECMAScript 5-Standard haben.

### Entwickler-Tools

- [Verwendung der Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : Die Web-Konsole ist ein nützliches Debugging-Werkzeug für Webentwickler und Erweiterungsentwickler gleichermaßen.

> [!NOTE]
> Die Fehlerkonsole ist ab Gecko 2.0 standardmäßig deaktiviert. Sie können sie aktivieren, indem Sie die `devtools.errorconsole.enabled`-Einstellung auf `true` ändern und den Browser neu starten.

## Änderungen für Mozilla- und Add-on-Entwickler

Für hilfreiche Tipps zum Aktualisieren bestehender Erweiterungen für Firefox 4, siehe [Aktualisieren von Erweiterungen für Firefox 4](/de/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4). Es gibt mehrere wichtige Änderungen, die die Kompatibilität mit bestehenden Add-ons beeinträchtigen, daher sollten Sie unbedingt diesen Artikel lesen.

Falls Sie ein Theme-Entwickler sind, sollten Sie [Thema-Änderungen in Firefox 4](https://web.archive.org/web/20210515184532/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_4) lesen, um einige kritische Änderungen, die Sie bedenken sollten, zu verstehen.

### JavaScript-Code-Module

- [Services.jsm](https://web.archive.org/web/20210417185248/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Services.jsm)
  - : Das `Services.jsm`-Code-Modul bietet Getter, die es einfach machen, Referenzen auf häufig verwendete Services zu erhalten, wie den Präferenzen-Service oder den Fenster-Vermittler, unter anderen.
- [JS-ctypes API](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes)
  - : Die JS-ctypes API macht es möglich, C-kompatible ausländische Bibliotheksfunktionen ohne die Verwendung von XPCOM aufzurufen.
- [Add-ons Manager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : Der neue Add-ons Manager bietet Informationen über installierte Add-ons, Unterstützung für deren Verwaltung und bietet Möglichkeiten zur Installation und Entfernung von Add-ons.
- [PopupNotifications.jsm](https://web.archive.org/web/20210414083224/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PopupNotifications.jsm)
  - : Das neue Popup-Benachrichtigungsmodul macht es einfach, attraktive, nicht-modale Benachrichtigungen für den Benutzer anzuzeigen. Sie können sehen, wie Sie diese API in [Verwendung von Popup-Benachrichtigungen](https://web.archive.org/web/20210411021529/https://developer.mozilla.org/de/docs/Mozilla/Using_popup_notifications) verwenden.
- [Laden von Code-Modulen von chrome: URLs aus](https://web.archive.org/web/20210529003507/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using#locating_the_code_module)
  - : Sie können jetzt JavaScript-Code-Module unter Verwendung von **chrome:** URLs laden, sogar innerhalb von JAR-Dateien.
- DownloadLastDir.jsm
  - : Das [`DownloadLastDir.jsm`](https://web.archive.org/web/20210615230651/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/DownloadLastDir.jsm)-Code-Modul bietet die globale Variable `gDownloadLastDir`, die einen String enthält, den Sie verwenden können, um den Pfad des Verzeichnisses zu erfahren, in das der letzte Download stattgefunden hat. Dieses Modul behandelt Probleme im Zusammenhang mit dem privaten Surfen für Sie.
- [Performance-Messung mit dem PerfMeasurement.jsm-Code-Modul](https://web.archive.org/web/20210420142952/https://developer.mozilla.org/de/docs/Mozilla/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Das [`PerfMeasurement.jsm`](https://web.archive.org/web/20210620175828/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/PerfMeasurement.jsm)-Code-Modul bietet eine API, um CPU-Level-Leistungsdaten in JavaScript-Code zu messen.

#### Verschiedene Änderungen an Code-Modulen

- Das `NetUtil.jsm`-Code-Modul bietet jetzt die Methode `readInputStreamToString()`, die es Ihnen ermöglicht, beliebige Bytes aus einem Stream in einen String zu lesen, selbst wenn der Stream Nullen enthält.
- Das XPCOMUtils.jsm-Code-Modul bietet jetzt IterSimpleEnumerator() und IterStringEnumerator() Helfer, um über XPCOM-Enumeratoren zu iterieren.
- Sie können jetzt [Worker in JavaScript-Code-Modulen verwenden](https://web.archive.org/web/20210620192749/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### DOM-Änderungen

- `ChromeWorker`
  - : Ein neuer Workertyp für privilegierten Code; dieser ermöglicht es, Dinge wie [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) von Workern in Erweiterungen und Anwendungscode zu verwenden.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Unterstützung für (nicht standardmäßige) Touch-Ereignisse wurde hinzugefügt; diese ermöglichen es Ihnen, mehrere Finger, die sich gleichzeitig auf einem Touchscreen bewegen, zu verfolgen.

#### Andere DOM-Änderungen

- Der [neue "document-element-inserted"-Benachrichtigung](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications#documents) wird gesendet, wenn das Root-Element eines Dokuments erstellt wird, aber noch keine Skripte darauf ausgeführt werden.

### XUL

#### Änderungen am tabbrowser-Element

Mehrere Änderungen wurden am `<xul:tabbrowser>`-Element vorgenommen, die die Erweiterungen beeinflussen, die mit Tabs interagieren. Neben der Unterstützung von App-Tabs verändern diese Änderungen auch die Tableiste in eine Standard-Werkzeugleiste, was es dem Benutzer ermöglicht, Werkzeugleiste-Buttons darin zu ziehen.

- Die `TabClose`, `TabSelect` und `TabOpen`-Ereignisse blubbern nicht mehr zum `<xul:tabbrowser>`-Element (`gBrowser`). Ereignis-Listener für diese Ereignisse sollten `gBrowser.tabContainer` hinzugefügt werden, anstatt direkt zu `gBrowser`.
- Das Tab-Kontextmenü ist kein anonymes Kind des `<xul:tabbrowser>` mehr. Es kann daher direkt mit XUL-Overlays überlagert werden. Es kann auch direkter in JavaScript über `gBrowser.tabContextMenu` zugegriffen werden. Siehe [diesen Blog-Eintrag](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) für weitere Details.
- Die neue `visibleTabs`-Eigenschaft wurde hinzugefügt, um Ihnen ein Array der aktuell sichtbaren Tabs zu geben; dies ermöglicht es Ihnen, zu bestimmen, welche Tabs im aktuellen Tabset sichtbar sind. Dies wird beispielsweise von Firefox Panorama verwendet.
- Die neue `showOnlyTheseTabs`-Methode wurde hinzugefügt; dies wird von Firefox Panorama verwendet.
- Die neue `getIcon`-Methode ermöglicht es Ihnen, das FavIcon eines Tabs zu erhalten, ohne das `<xul:browser>`-Element aufzurufen.
- Die neue `tabbrowser.tabs`-Eigenschaft bietet eine leicht zugängliche Liste der Tabs in einem `<xul:tabbrowser>`-Element.
- Die neuen `pinTab` und `unpinTab`-Methoden ermöglichen es Ihnen, Tabs zu fixieren und zu lösen (d.h. sie zwischen App-Tabs und regulären Tabs zu wechseln).
- Die `getTabModalPromptBox`-Methode und das `tabModalPromptShowing`-Attribut wurden dem `<xul:tabbrowser>` hinzugefügt, um tab-modale Alerts zu unterstützen.

#### Änderungen an Popups

- Das `<xul:popup>`-Element wird nicht mehr unterstützt; Sie sollten `<xul:menupopup>` stattdessen verwenden. (Wenn Sie `popup` weiterhin verwenden, werden Sie auf Glitches stoßen, da das Element keine besondere Bedeutung mehr hat. Zum Beispiel kann `<xul:menuseparator>` transparent erscheinen, wenn es in einem `<xul:popup>` verwendet wird.)
- Das `<xul:menupopup>`-XUL-Element hat jetzt eine `triggerNode`-Eigenschaft, die das Node angibt, auf dem das Ereignis aufgetreten ist, das das Popup geöffnet hat. Dies erforderte auch das Hinzufügen eines Trigger-Ereignisparameters zur `openPopup`-Methode. Außerdem wurde die `anchorNode`-Eigenschaft hinzugefügt; sie gibt den Anker zurück, der bei der Erstellung des Popups angegeben wurde.
- Das `<xul:panel>`-Element bietet jetzt `fade` und `flip`-Attribute, die verwendet werden, um das Verhalten neuer "Pfeil"-Stil-Benachrichtigungspanels zu konfigurieren.

#### Entfernte Unterstützung für Remote-XUL

Remote-XUL wird nicht mehr unterstützt; dies betrifft XUL-Dokumente, die über HTTP bereitgestellt werden; auch können Sie keine XUL-Dokumente mehr mit `file://` URLs laden, es sei denn, Sie erstellen die Präferenz `dom.allow_XUL_XBL_for_file` und setzen sie auf `true`. Es gibt jedoch ein Whitelist-Feature, das verwendet werden kann, um bestimmte Domains zu erlauben, Remote-XUL zu laden.

#### Verschiedene XUL-Änderungen

- Das `readonly`-Attribut funktioniert jetzt korrekt für XBL-Felder.
- Das `<xul:resizer>`-Element ermöglicht es Ihnen jetzt, das `element`-Attribut zu verwenden, um ein Element anstelle des Fensters zu vergrößern.
- Das `<xul:resizer>`-Element hat jetzt ein `type`-Attribut, das es Ihnen ermöglicht anzugeben, dass der Resizer für ein Fenster anstelle eines Elements ist, um zu verhindern, dass der Fenster-Resizer zweimal gezeichnet wird.
- Das `"active"`-Attribut wird nicht mehr auf aktiven XUL-Fenstern gesetzt. Stattdessen können Sie jetzt die neue `:-moz-window-inactive`-Pseudoklasse verwenden, um Hintergrundfenster anders zu stylen.
- Das `emptytext`-Attribut ist jetzt veraltet; stattdessen sollten Sie `placeholder` verwenden.
- Das `<xul:window>`-Element bietet jetzt ein `accelerated`-Attribut; wenn dies wahr ist, darf der Hardware-Layer-Manager das Fenster beschleunigen.
- Das `<xul:stack>`-Element unterstützt jetzt die `bottom` und `right`-Attribute.
- Ereignisse werden jetzt während der Anpassung von `<xul:toolbox>`-Elementen ausgelöst, was es Ihnen ermöglicht, Änderungen an den Werkzeugleisten zu erkennen.
- Das `alternatingbackground`-Attribut für `<xul:tree>`-Elemente wird nicht mehr unterstützt; Sie können stattdessen die `:-moz-tree-row`-Pseudoklasse verwenden.
- Der Lesezeichen-Symbolleiste Überlauf-Button mit anonid chevronPopup ist nicht mehr anonym; er hat eine ID von "PlacesChevron".
- Das `<xul:tabs>`-Element hat jetzt eine `tabbox`-Eigenschaft, die die alte `_tabbox`-Eigenschaft ersetzt, die veraltet ist (und nie dokumentiert wurde).
- XUL `<xul:window>`-Elemente haben jetzt das `drawintitlebar`-Attribut; wenn dies wahr ist, umfasst der Inhaltsbereich des Fensters die Titelleiste, sodass in die Titelleiste gezeichnet werden kann.
- Neue `TabPinned` und `TabUnpinned`-Ereignisse sind verfügbar, die es Ihnen ermöglichen, zu erkennen, wenn Tabs fixiert und entfiniert werden.
- Das neue `TabAttrModified`-Ereignis wird gesendet, wenn sich die `label`, `crop`, `busy`, `image` oder `selected`-Attribute eines Tabs ändern.
- `<xul:tab>`-Elemente haben jetzt ein `pinned`-Attribut, das Ihnen ermöglicht zu bestimmen, ob ein Tab aktuell fixiert ist.
- Die `setDirectionIndicator`-Klasse an `<xul:tree>`-Elementen hat schon seit einiger Zeit nichts mehr gemacht; jetzt wird sie überhaupt nicht mehr verwendet.
- Das `<xul:window>`-Element hat jetzt ein `chromemargin`-Attribut, das Ihnen ermöglicht, den Rand zwischen Chrome und Inhalt auf jeder Seite eines Fensters festzulegen; Sie können es verwenden, um in die Titelleiste zu zeichnen, zum Beispiel.
- Das `<xul:window>`-Element hat jetzt ein `disablechrome`-Attribut; dies wird verwendet, um den meisten Chrome in einem Fenster zu verstecken, wenn es verwendet wird, um in-Browser-UI anzuzeigen, wie `about:addons`.
- Das `<xul:window>`-Element hat jetzt ein `disablefastfind`-Attribut, das es Ihnen ermöglicht, die Suchleiste in einem Fenster zu deaktivieren, wenn der Inhalt sie nicht unterstützt. Dies wird beispielsweise vom Add-ons-Panel verwendet.
- Werkzeugleisten können jetzt extern zu Werkzeugboxen sein, während sie dennoch als Mitglied der `<xul:toolbox>` betrachtet werden, indem die `toolboxid`-Eigenschaft der `<xul:toolbar>` gesetzt wird. Auch das `<xul:toolbox>`-Element hat jetzt eine `externalToolbars`-Eigenschaft, die alle Werkzeugleisten auflistet, die als Mitglieder des Werkzeugkastens angesehen werden.
- Unterstützung für das Protokollieren von XUL-Vorlagen für Debugging-Zwecke wurde hinzugefügt.

### UI-Änderungen, die Entwickler betreffen

- [Die Add-on-Leiste](/de/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : Die Statusleiste wurde zugunsten der neuen Add-on-Leiste entfernt. Sie müssen Ihre Erweiterung aktualisieren, um diese zu verwenden, wenn Sie zuvor UI zur Statusleiste hinzugefügt haben.
- Verstecken von Browser-Chrome
  - : Sie können jetzt das Browser-Chrome ausblenden, wenn es wünschenswert ist; zum Beispiel, `about:addons` tut dies.

### Speicherung

#### Verschiedene Änderungen an der Speicher-API

- Das Interface `mozIStorageBindingParamsArray` hat jetzt ein length-Attribut, das die Anzahl der `mozIStorageBindingParams`-Objekte im Array angibt.
- Die Methode `mozIStorageStatement.bindParameters()` gibt jetzt einen Fehler zurück, wenn das angegebene `mozIStorageBindingParamsArray` leer ist.
- Die Methode `mozIStorageConnection.clone()` wurde hinzugefügt, die es Ihnen ermöglicht, eine bestehende Datenbankverbindung zu klonen.
- Die Methode `mozIStorageConnection.asyncClose()` wurde hinzugefügt, die es Ihnen erlaubt, eine Datenbankverbindung asynchron zu schließen; Sie können einen Callback angeben, der benachrichtigt wird, wenn der Schließvorgang abgeschlossen ist.
- Die Methode `mozIStorageConnection.setGrowthIncrement()` wurde hinzugefügt, die es Ihnen erlaubt, die Menge anzugeben, um die eine Datenbankdatei zu einem Zeitpunkt vergrößert wird, um SQLite bei der Reduzierung der Fragmentierung zu helfen.
- Der `SQLITE_CONSTRAINT`-Fehler wird jetzt als `NS_ERROR_STORAGE_CONSTRAINT` anstelle als `NS_ERROR_FAILURE` gemeldet.

### XPCOM

Zusätzlich zu den unten genannten spezifischen Änderungen ist es wichtig zu beachten, dass es keine eingefrorenen Schnittstellen mehr gibt. Alle Schnittstellen sind jetzt nicht mehr eingefroren, unabhängig davon, was die Dokumentation sagt. Wir werden die Dokumentation im Laufe der Zeit aktualisieren.

- [XPCOM-Änderungen in Gecko 2.0](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)
  - : Details über Änderungen in XPCOM, die sich auf die Kompatibilität in Firefox 4 auswirken.
- [Components.utils.getGlobalForObject()](https://web.archive.org/web/20210625071536/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getGlobalForObject)
  - : Diese neue Methode gibt das globale Objekt zurück, mit dem ein Objekt assoziiert ist; dies ersetzt einen häufigen Anwendungsfall des jetzt entfernten `__parent__`.

### Places

- Places-Abfrageergebnisse können jetzt von mehreren Beobachtern beobachtet werden, und Abfragen können asynchron ausgeführt werden. Dies bedeutet, dass es einige Änderungen an den `nsINavHistoryResult`, `nsINavHistoryQueryOptions` und `nsINavHistoryContainerResultNode`-Schnittstellen gibt. Wesentlicher ist jedoch, dass die `nsINavHistoryResultViewer`-Schnittstelle in `nsINavHistoryResultObserver` umbenannt wurde.
- Einige [neue Benachrichtigungen](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Observer_Notifications) wurden hinzugefügt, um dem Browser zu ermöglichen, den Herunterfahrvorgang des Places-Dienstes verlässlicher zu verfolgen. Von diesen sind die meisten nur für den internen Gebrauch, aber die `places-connection-closed`-Benachrichtigung ist verfügbar, um zu erfahren, wann der Places-Dienst seinen Herunterfahrvorgang abgeschlossen hat.
- Der Array-Größe-Ausgabeparameter in mehreren Places-Methoden ist jetzt optional.
- Die Unterstützung für `<menupopup type="places">` wurde entfernt. Stattdessen müssen Sie ein Menü mit Places-Informationen manuell erstellen und füllen, anstatt dass es für Sie erledigt wird. Siehe [Anzeige von Places-Informationen mithilfe von Ansichten: Menüansicht](https://web.archive.org/web/20201028190050/https://developer.mozilla.org/de/docs/Mozilla/Displaying_Place_information_using_views#menu_view) für Details.

### Schnittstellenänderungen

- Die `nsIDocShell` und `nsIWebBrowser`-Schnittstellen haben jetzt ein neues `isActive`-Attribut, das verwendet wird, um den Codepfad für Dokumente, die aktuell nicht sichtbar sind, zu optimieren.
- Die Methode `nsIMemory.isLowMemory()` der `nsIMemory`-Schnittstelle ist veraltet. Sie sollten stattdessen ["memory-pressure"-Benachrichtigungen](https://web.archive.org/web/20210516060454/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemory#low_memory_notifications) verwenden, um niedrige Speichersituationen zu erkennen.
- Die API zur Handhabung von Weiterleitungen auf HTTP-Kanälen hat sich geändert, um sie asynchron verarbeitbar zu machen. Jeder Code, der die Verarbeitung von Weiterleitungen mit `nsIChannelEventSink.onChannelRedirect()` implementiert, muss aktualisiert werden, um stattdessen `nsIChannelEventSink.asyncOnChannelRedirect()` zu verwenden. Dies akzeptiert einen Callback-Handler, der aufgerufen werden muss, wenn eine Weiterleitung erfolgreich abgeschlossen ist.
- Die Methode `nsINavHistoryResultObserver.batching()` wurde hinzugefügt, die es ermöglicht, Places-Operationen in Stapel zu gruppieren, wodurch die Anzahl der übermittelten Update-Benachrichtigungen reduziert wird, was die Leistung verbessern kann, wenn Beobachter relativ aufwendige Aufgaben (wie das Aktualisieren von Ansichten) ausführen.
- Das seit langem veraltete `nsIPref`-Interface wurde schließlich entfernt. Wenn Sie noch nicht zu `nsIPrefService` gewechselt sind, ist jetzt der richtige Zeitpunkt.
- Die `nsISessionStore` und `nsISessionStartup`-Schnittstellen erhielten Änderungen zur Unterstützung des On-Demand-Sitzungswiederherstellung. Siehe die `nsISessionStore.restoreLastSession()`-Methode.
- Die `nsIPrincipal`-Methoden `nsIPrincipal.subsumes()` und `nsIPrincipal.checkMayLoad()` sowie deren `origin`, `csp` und `URI`-Attribute sind jetzt aus Skripten verfügbar; vorher waren sie nur aus nativem Code zugänglich.
- Die `nsIPrompt`-Schnittstelle unterstützt jetzt tab-modale Alerts; siehe [Verwendung von tab-modalen Prompts](https://web.archive.org/web/20210513121539/https://developer.mozilla.org/de/docs/Mozilla/Using_tab-modal_prompts) für Details.
- Die Methode `nsIEffectiveTLDService.getPublicSuffixFromHost()` lehnt jetzt korrekt Hosts ab, die mit einem Punkt (".") beginnen.
- Die Methode `mozIJSSubScriptLoader.loadSubScript()` hat jetzt ein optionales Argument, das es Ihnen ermöglicht, das Zeichensatz des Skripts anzugeben; wenn keines angegeben wird, wird ASCII angenommen (wie es immer zuvor angenommen wurde).
- Die `nsIAccessProxy`-Schnittstelle wurde entfernt. Sie war ein Implementierungsdetail, das seine Nützlichkeit überlebt hat.
- Die `nsIContentView` und `nsIContentViewManager`-Schnittstellen wurden für Firefox Mobil hinzugefügt. Sie stellen eine scrollbare Inhaltsansicht dar, deren Inhalte tatsächlich von einem separaten Prozess gezeichnet werden.
- Die `nsIDiskCacheStreamInternal`-Schnittstelle wurde hinzugefügt.
- Die `nsIExternalURLHandlerService`-Schnittstelle wurde hinzugefügt.
- Die `nsISyncJPAKE`-Schnittstelle wurde hinzugefügt. Siehe [Firefox-Bug 601645](https://bugzil.la/601645).
- Die `nsIINIParserWriter`-Schnittstelle wurde in Gecko 1.9.2.4 hinzugefügt, um das Schreiben in INI-Dateien zu unterstützen.

### Speicherverwaltung

- [Unfehlbare Speicherzuweisung](https://web.archive.org/web/20201026230445/https://developer.mozilla.org/de/docs/Mozilla/Infallible_memory_allocation)
  - : Mozilla bietet jetzt unfehlbare Speicherallokatoren an, die garantiert nicht null zurückgeben. Sie sollten diesen Artikel lesen, um zu lernen, wie sie funktionieren und wie man explizit fehlbare vs. unfehlbare Speicherzuweisung anfordert.

### Sonstige Änderungen

- Die meisten der in Firefox enthaltenen Ressourcen wurden in ein einziges JAR-Archiv, `omni.jar`, zusammengefasst, was die Startleistung durch die Reduzierung von I/O-Belastung verbessert. Für Details, lesen Sie [Über omni.jar](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/de/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).
- Die `accessibility.disablecache`-Einstellung wird nicht mehr unterstützt; sie war nur zu Debugging-Zwecken ausgesetzt und wird nicht mehr verwendet.
- Addons, deren GUID sich von einer Version zur anderen ändert, können jetzt ordnungsgemäß aktualisiert werden.
- Als Nebeneffekt der Entfernung plattformspezifischer Verzeichnisse in Add-on-Bundles kann jetzt für jede Plattform keine standardmäßige Präferenz mehr bereitgestellt werden.
- Standardmäßig werden [Erweiterungen nicht mehr entpackt, wenn sie installiert werden](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), sondern direkt aus der XPI-Datei ausgeführt. Erweiterungen können die [unpack](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#unpack)-Eigenschaft im [Installationsmanifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests) verwenden, um das alte Verhalten zu wählen. Erweiterungen, die binäre Komponenten verwenden, DLLs, die mit [js-ctypes](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/de/docs/Mozilla/js-ctypes) geladen werden, [Such-Plugins](/de/docs/Web/XML/Guides/OpenSearch), Wörterbücher und Fenstersymbole müssen angeben, dass sie entpackt werden müssen. Erweiterungen, die [SQLite-Datenbanken erstellen](https://web.archive.org/web/20201109001036/https://developer.mozilla.org/de/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Local_Storage#sqlite) oder Dinge vom Dateisystem relativ zum Verzeichnis der Erweiterung kopieren, müssen möglicherweise auch ihren Code ändern.
- Sie können jetzt Erweiterungen enthalten, die [automatisch beim Start der Anwendung installiert werden](https://web.archive.org/web/20180604010849/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) in einer angepassten Firefox-Distribution.

## Sonstige Änderungen

- Nur die root chrome.manifest Datei wird geladen
  - : Nur die root `chrome.manifest`-Datei wird jetzt geladen; wenn Sie zusätzliche Manifestdateien geladen haben müssen, können Sie den [`manifest`](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration#manifest)-Befehl in Ihrer root `chrome.manifest` verwenden, um diese zu laden.
- Entfernte Gopher-Unterstützung
  - : Das Gopher-Protokoll wird nicht mehr nativ unterstützt. Eine weitere Unterstützung ist über die [OverbiteFF](https://addons.mozilla.org/en-US/firefox/addon/overbitenx/)-Erweiterung verfügbar.
- [Inhaltsprozess-Ereignishandhabung](https://web.archive.org/web/20210531151101/https://developer.mozilla.org/de/docs/Mozilla/Firefox/Multiprocess_Firefox/Message_Manager)
  - : Um die Unterstützung für externe Prozesse von Plugins und anderen Mehrprozess-Funktionen zu unterstützen, wurde eine neue API eingeführt, um das Senden von Nachrichten über Prozesse hinweg zu unterstützen.
- [Bootstrapped-Erweiterungen](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/de/docs/Archive/Add-ons/Bootstrapped_extensions)
  - : Sie können jetzt Erweiterungen erstellen, die installiert, deinstalliert und aktualisiert (oder herabgestuft) werden können, ohne dass ein Browser-Neustart erforderlich ist.
- Standard-Plugin entfernt
  - : Das Standard-Plugin wurde entfernt. Der Anwendungsplugins-Ordner wurde ebenfalls standardmäßig entfernt, jedoch besteht weiterhin Unterstützung für die Installation von Plugins über diesen Ordner. Siehe [Firefox-Bug 533891](https://bugzil.la/533891).
- Extension Manager durch Addon Manager ersetzt
  - : `nsIExtensionManager` wurde durch [AddonManager](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html) ersetzt.
- Child HWNDs werden nicht mehr verwendet
  - : Firefox erstellt keine Child HWNDs mehr für seine interne Verwendung auf Windows. Wenn Sie eine Erweiterung geschrieben haben, die natives Code verwendet, um diese HWNDs zu manipulieren, funktioniert Ihre Erweiterung auf Firefox 4 nicht mehr. Sie müssen entweder aufhören, HWNDs zu verwenden oder Ihren Code, der sich auf HWNDs verlässt, in einem NPAPI-Plugin umschließen. Das erfordert viel Arbeit, daher sollten Sie, wenn Sie die direkte Verwendung von HWNDs vermeiden können, dies auch tun.
- Änderungen an Gesten
  - : Die Drei-Finger-Aufwärts- und Abwärts-Gesten auf Trackpads wurden geändert, um standardmäßig die Firefox Panorama-Ansicht zu öffnen und zu schließen (vormalig TabCandy genannt). Um diese auf die vorherigen Scroll-zu-oben- und Scroll-zu-unten-Befehle zurückzusetzen, öffnen Sie about:config und setzen `browser.gesture.swipe.down` auf `cmd_scrollBottom` und `browser.gesture.swipe.up` auf `cmd_scrollTop`.
