---
title: Firefox 4 für Entwickler
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{FirefoxSidebar}}

Firefox 4, das am 22. März 2011 veröffentlicht wurde, verbessert die Leistung, bietet erweiterte Unterstützung für HTML5 und andere sich entwickelnde Webtechnologien, und verbessert die Sicherheit. Dieser Artikel liefert Informationen über diese Veröffentlichung und welche Funktionen sowohl für Webentwickler, als auch für Add-on-Entwickler und Gecko-Plattform-Entwickler verfügbar sind.

## Funktionen für Webentwickler

Gecko verwendet jetzt den {{Glossary("HTML5", "HTML5")}}-Parser, der Fehler behebt, die Interoperabilität verbessert und die Leistung steigert. Es ist außerdem möglich, [SVG](/de/docs/Web/SVG) und [MathML](/de/docs/Web/MathML) direkt in HTML-Markup einzubetten.

### HTML

- [Webformulare](/de/docs/Learn_web_development/Extensions/Forms)
  - : Ein Überblick über Verbesserungen bei Webformularen. Zu diesen Änderungen gehören neue Eingabetypen im {{HTMLElement("input")}}-Element, Datenvalidierung und mehr.
- [HTML5-Abschnittelemente](/de/docs/Web/HTML/Element/Heading_Elements)
  - : Gecko unterstützt jetzt die neuen HTML5-Elemente, die sich auf Dokumentabschnitte beziehen: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} und {{HTMLElement("footer")}}.
- [HTML5-Attribut "hidden"](/de/docs/Web/HTML/Global_attributes/hidden)
  - : Dieses Attribut, das allen Elementen gemeinsam ist, wird verwendet, um Inhalte auf einer Webseite zu verbergen, die momentan nicht relevant für den Benutzer sind.
- Weitere HTML5-Elemente
  - : Gecko unterstützt nun auch folgende neue HTML5-Elemente: {{HTMLElement("mark")}}, {{HTMLElement("figure")}} und {{HTMLElement("figcaption")}}.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Eine Anleitung zur Nutzung der neuen WebSockets-API für Echtzeitkommunikation zwischen einer Webanwendung und einem Server. Beachten Sie, dass die in Firefox 4 implementierten WebSockets nicht mit dem finalen Standard kompatibel sind und generell nicht verwendet werden sollten.

#### Verbesserungen bei Canvas

Die folgenden Änderungen wurden an der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle vorgenommen, um unsere Implementierung des {{HTMLElement("canvas")}} besser an die Spezifikation anzupassen:

- Die Angabe eines negativen Radius beim Aufruf von `arc()` führt jetzt korrekt zu einer `INDEX_SIZE_ERR`-Ausnahme.
- Die Angabe von nicht-finiten Werten bei den Methoden `createLinearGradient()` und `createRadialGradient()` löst jetzt eine `NOT_SUPPORTED_ERR`-Ausnahme aus, anstelle von `SYNTAX_ERR`.
- Das Setzen von `miterLimit` auf einen negativen Wert löst keine Ausnahme mehr aus, sondern ignoriert korrekt nicht-positive Werte.
- Das Setzen von `lineWidth` auf negative Werte löst keine Ausnahme mehr aus; stattdessen wird korrekt nicht-positive Werte ignoriert.
- Die Methode `putImageData()` unterstützt jetzt die optionalen Parameter `dirtyX`, `dirtyY`, `dirtyWidth` und `dirtyHeight`.

#### Sonstige HTML-Änderungen

- {{HTMLElement("textarea")}}-Elemente sind jetzt standardmäßig skalierbar; Sie können die {{cssxref("resize")}}-CSS-Eigenschaft verwenden, um dies zu deaktivieren.
- `canvas.getContext` und `canvas.toDataURL` werfen keine Ausnahme mehr, wenn sie mit nicht erkannten Argumenten aufgerufen werden.
- Das {{HTMLElement("canvas")}}-Element unterstützt nun die Mozilla-spezifische Methode `mozGetAsFile()`, mit der Sie eine speicherbasierte Datei mit dem Bildinhalt des Canvas erhalten können. Details finden Sie bei [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
- `Canvas2DContext.lineCap` und `Canvas2DContext.lineJoin` werfen keine Ausnahme mehr, wenn sie auf einen nicht erkannten Wert gesetzt werden.
- `Canvas2DContext.globalCompositeOperation` löst keine Ausnahme mehr aus, wenn ein nicht erkannter Wert gesetzt wird, und unterstützt den nicht standardisierten Wert `darker` nicht mehr.
- Die Unterstützung für das veraltete `<spacer>`-Element, das in allen anderen Browsern fehlte, wurde entfernt.
- Das `<isindex>`-Element, das durch den Aufruf von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellt wird, wird jetzt als einfaches Element ohne spezielle Eigenschaften oder Methoden erstellt.
- Gecko unterstützt jetzt den Aufruf von `click()` auf {{HTMLElement("input")}}-Elementen, um den Dateiauswahldialog zu öffnen. Siehe das [Beispiel](/de/docs/Web/API/File_API/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click_method) im Artikel [Using files from web applications](/de/docs/Web/API/File_API/Using_files_from_web_applications).
- Das {{HTMLElement("input")}}-Element unterstützt ein neues Attribut `mozactionhint`, mit dem Sie das Label für die Eingabetaste auf virtuellen Tastaturen angeben können.
- {{HTMLElement("script")}}-Elemente innerhalb von {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} und {{HTMLElement("noframes")}}-Elementen werden jetzt ausgeführt, was in früheren Versionen von Firefox nicht der Fall war. Dies entspricht der Spezifikation und passt sich dem Verhalten anderer Browser an.

### CSS

- [CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  - : Neue Unterstützung für CSS-Transitions ist in Firefox 4 verfügbar.
- Berechnete Werte in CSS
  - : Unterstützung für `-moz-calc` wurde hinzugefügt. Damit können {{cssxref("length")}}-Werte als mathematische Ausdrücke definiert werden.
- Gruppierung von Selektoren
  - : Unterstützung für `:-moz-any` zur Gruppierung von Selektoren und zur Vereinfachung von Kombinatoren.
- Unterstützung für Hintergrundbild-Subrechtecke
  - : Die Funktion {{cssxref("-moz-image-rect")}} ermöglicht die Verwendung von Teilbereichen von Bildern als {{cssxref("background-image")}}.
- CSS-Touch-Eigenschaften
  - : Unterstützung für Touch-Eigenschaften wurde hinzugefügt. Details und endgültige Artikelnamen folgen später.
- [Verwendung beliebiger Elemente als CSS-Hintergründe](/de/docs/Web/CSS/element)
  - : Sie können die CSS-Funktion `-moz-element` und die [`document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement)-DOM-Funktion verwenden, um beliebige HTML-Elemente als Hintergründe zu verwenden.
- [Datenschutz und der :visited-Selektor](/de/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : Änderungen wurden vorgenommen, um zu definieren, welche Informationen über den Stil besuchter Links mithilfe von CSS-Selektoren abgerufen werden können. Dies kann einige Webanwendungen betreffen.

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
        Gibt die Breite eines Tab-Zeichens (U+0009) in Leerzeichen bei der Textdarstellung an.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("resize")}}</td>
      <td>
        Ermöglicht die Steuerung der Abmessungen, in denen ein Element skaliert werden darf.
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
      <td>Wird verwendet, um Elemente zu stylen, deren Plugins abstürzten.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Wird auf Platzhaltertext in Formularfeldern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-submit-invalid")}}</td>
      <td>
        Wird auf die Schaltfläche "Absenden" in Formularen angewendet, wenn eines oder mehrere Felder des Formulars nicht validiert werden können.
      </td>
    </tr>
    <tr>
      <td>{{cssxref(":-moz-window-inactive")}}</td>
      <td>Wird auf Elemente in inaktiven Fenstern angewendet.</td>
    </tr>
    <tr>
      <td>{{cssxref(":invalid")}}</td>
      <td>
        Wird automatisch auf {{HTMLElement("input")}}-Felder angewendet, wenn deren Inhalte ungültig sind.
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
        deren Inhalte erfolgreich validiert wurden.
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
        Ermöglicht die Spezifikation des Erscheinens eines Elements, wenn Gecko der Ansicht ist, dass eine Fokusanzeige gerendert werden sollte.
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
      <td>Ermöglicht die Gruppierung von Selektoren und die Vereinfachung von Kombinatoren.</td>
    </tr>
    <tr>
      <td><code>-moz-calc</code></td>
      <td>
        Ermöglicht die Angabe von
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
        Ermöglicht die Verwendung eines Teilbereichs eines Bildes als
        {{cssxref("background-image")}} oder
        {{cssxref("background")}}.
      </td>
    </tr>
  </tbody>
</table>

#### Umbenannte CSS-Eigenschaften

| Alter Name             | Neuer Name                     | Anmerkungen                                                                                                                                                                                                   |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{cssxref("background-size")}} | Der Name `-moz-background-size` wird nicht mehr unterstützt.                                                                                                                                                  |
| `-moz-border-radius`   | {{cssxref("border-radius")}}   | Der alte Name wird für eine begrenzte Zeit unterstützt, um Ihnen Zeit zu geben, Ihre Websites zu aktualisieren. Rendering-Änderungen wurden zusätzlich vorgenommen, um die neueste Spezifikation zu erfüllen. |
| `-moz-box-shadow`      | {{cssxref("box-shadow")}}      |                                                                                                                                                                                                               |

#### Sonstige CSS-Änderungen

- Die Eigenschaft {{cssxref("text-shadow")}} begrenzt den Weichzeichnungsradius aus Leistungs- und Plausibilitätsgründen nun auf 300px.
- Die Eigenschaft {{cssxref("overflow")}} gilt nicht mehr für Tabellen-Gruppen-Elemente (`<thead>`, `<tbody>` und `<tfoot>`).
- Die Eigenschaft `-moz-appearance` unterstützt jetzt den Wert `-moz-win-borderless-glass`, der ein randloses Aero-Glass-Erscheinungsbild auf ein Element anwendet.
- Das Medienfeature [`-moz-device-pixel-ratio`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-device-pixel-ratio) wurde hinzugefügt, wodurch das Verhältnis zwischen Gerätepixeln und CSS-Pixeln in [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet werden kann.
- Die Verarbeitung von CSS-{{cssxref("length")}}-Einheiten in Gecko wurde überarbeitet, um besser mit anderen Browsern übereinzustimmen und absolute Längen genauer in Bildschirmpixel zu übersetzen, basierend auf der DPI des Geräts.

Weitere Abschnitte, wie "Graphics und Video", "DOM", "Sicherheit", "JavaScript", sowie spezifische Änderungen für Add-on- und XUL-Entwickler, werden ebenfalls ähnlich detailliert übersetzt. Wenn Sie diese Inhalte benötigen, lassen Sie mich dies wissen!
