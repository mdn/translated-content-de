---
title: Umgang mit häufigen Barrierefreiheitsproblemen
slug: Learn/Tools_and_testing/Cross_browser_testing/Accessibility
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}

Als Nächstes widmen wir uns der Barrierefreiheit und stellen Informationen zu häufigen Problemen, einfachen Testmethoden und der Nutzung von Prüf- bzw. Automatisierungstools zur Erkennung von Barrierefreiheitsproblemen zur Verfügung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung der
        grundlegenden
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit, häufige Barrierefreiheitsprobleme zu diagnostizieren und
        geeignete Werkzeuge und Techniken zu deren Behebung zu nutzen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Barrierefreiheit?

Wenn wir im Zusammenhang mit Webtechnologie von Barrierefreiheit sprechen, denken die meisten Menschen sofort daran, sicherzustellen, dass Websites/Apps von Menschen mit Behinderungen genutzt werden können. Zum Beispiel:

- Sehbehinderte Menschen, die Bildschirmleser oder Vergrößerungs-/Zoomfunktionen verwenden, um auf Text zuzugreifen.
- Menschen mit motorischen Einschränkungen, die die Tastatur (oder andere nicht-mausgestützte Funktionen) verwenden, um Webseitenfunktionen zu aktivieren.
- Menschen mit Hörbehinderungen, die auf Untertitel oder andere Textalternativen für Audio-/Videoinhalte angewiesen sind.

Es ist jedoch falsch zu sagen, dass Barrierefreiheit nur mit Behinderungen zu tun hat. Vielmehr ist es das Ziel der Barrierefreiheit, Ihre Websites/Apps für möglichst viele Menschen in möglichst vielen Kontexten nutzbar zu machen, nicht nur für diejenigen, die leistungsstarke Desktop-Computer verwenden. Einige Beispiele könnten sein:

- Nutzer auf mobilen Geräten.
- Nutzer auf alternativen Browser-Geräten wie Fernsehern, Uhren usw.
- Benutzer älterer Geräte, die möglicherweise nicht die neuesten Browser haben.
- Benutzer von Geräten mit niedrigerer Spezifikation, die möglicherweise langsame Prozessoren haben.

In gewisser Weise dreht sich dieses gesamte Modul um Barrierefreiheit – Cross-Browser-Tests sorgen dafür, dass Ihre Websites von möglichst vielen Menschen genutzt werden können. [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility) definiert Barrierefreiheit vollständiger und gründlicher als dieser Artikel.

Dessen ungeachtet wird dieser Artikel Cross-Browser- und Testprobleme im Zusammenhang mit Menschen mit Behinderungen behandeln und wie sie das Web nutzen. Wir haben bereits über andere Bereiche wie [responsive Gestaltung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#responsive_design_problems) und [Performance](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#performance_issues) an anderer Stelle im Modul gesprochen.

> [!NOTE]
> Wie vieles in der Webentwicklung geht es bei der Barrierefreiheit nicht um 100%igen Erfolg oder nicht; 100%ige Barrierefreiheit ist für alle Inhalte so gut wie unmöglich zu erreichen, vor allem, wenn Websites komplexer werden. Stattdessen geht es mehr darum, angemessene Anstrengungen zu unternehmen, um so viele Ihrer Inhalte wie möglich über defensives Kodieren zugänglich zu machen und Best Practices einzuhalten.

## Häufige Barrierefreiheitsprobleme

In diesem Abschnitt werden wir einige der Hauptprobleme beschreiben, die im Zusammenhang mit der Barrierefreiheit im Web auftreten, verbunden mit spezifischen Technologien, bewährten Methoden, denen Sie folgen sollten, und einigen schnellen Tests, die Sie durchführen können, um zu sehen, ob Ihre Websites in die richtige Richtung gehen.

> [!NOTE]
> Barrierefreiheit ist moralisch das Richtige und gut für das Geschäft (die Anzahl der Benutzer mit Behinderungen, Benutzer auf mobilen Geräten usw. stellt bedeutende Marktsegmente dar), aber es ist auch in vielen Teilen der Welt eine rechtliche Verpflichtung, Webinhalte für Menschen mit Behinderungen zugänglich zu machen. Lesen Sie [Barrierefreiheitsrichtlinien und das Gesetz](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law) für weitere Informationen.

### HTML

Semantisches HTML (wo die Elemente für ihren richtigen Zweck verwendet werden) ist von Haus aus zugänglich – solche Inhalte sind für sehende Betrachter lesbar (solange Sie nichts Dummes tun, wie den Text viel zu klein machen oder ihn mit CSS verstecken), sind aber auch für unterstützende Technologien wie Bildschirmleser (Apps, die eine Webseite buchstäblich ihrem Benutzer vorlesen) nutzbar und bieten auch andere Vorteile.

#### Semantische Struktur

Der wichtigste schnelle Gewinn bei semantischem HTML besteht darin, eine Struktur aus Überschriften und Absätzen für Ihre Inhalte zu verwenden; dies liegt daran, dass Benutzer von Bildschirmlesern die Überschriften eines Dokuments häufig als Wegweiser verwenden, um die benötigten Inhalte schneller zu finden. Wenn Ihre Inhalte keine Überschriften enthalten, erhalten sie nur eine riesige Textwand ohne Wegweiser, um etwas zu finden. Beispiele für schlechtes und gutes HTML:

```html-nolint example-bad
<font size="7">My heading</font>
<br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
<font size="5">My subheading</font>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<font size="5">My 2nd subheading</font>
<br /><br />
This is the second subsection of my content. I think it is more interesting than
the last one.
```

```html example-good
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<h2>My subheading</h2>

<p>
  This is the first subsection of my document. I'd love people to be able to
  find this content!
</p>

<h2>My 2nd subheading</h2>

<p>
  This is the second subsection of my content. I think it is more interesting
  than the last one.
</p>
```

Außerdem sollten Ihre Inhalte in ihrer Quellreihenfolge logisch sinnvoll sein – Sie können sie später immer mit CSS an die gewünschte Stelle platzieren, aber Sie sollten die Quellreihenfolge von Anfang an richtig festlegen.

Als Test können Sie das CSS einer Seite ausschalten und sehen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie einfach das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browsereigenschaften, z. B.:

- Firefox: Wählen Sie im Hauptmenü _Ansicht > Seitenstil > Kein Stil_ aus.
- Safari: Wählen Sie im Hauptmenü _Entwickeln > Stile deaktivieren_ (um das Entwickeln-Menü zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Menü „Entwickeln“ in der Menüleiste anzeigen_).
- Chrome: Installieren Sie die Erweiterung Web Developer Toolbar, starten Sie dann den Browser neu. Klicken Sie auf das erscheinende Zahnradsymbol und wählen Sie dann _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie im Hauptmenü _Ansicht > Stil > Kein Stil_ aus.

#### Verwendung nativer Tastaturzugänglichkeit

Bestimmte HTML-Funktionen können ausschließlich mit der Tastatur ausgewählt werden – dies ist ein Standardverhalten, das es seit den Anfängen des Web gibt. Die Elemente, die über diese Fähigkeit verfügen, sind die gängigen, die es Benutzern ermöglichen, mit Webseiten zu interagieren, nämlich Links, {{htmlelement("button")}}s und Formularelemente wie {{htmlelement("input")}}.

Sie können dies mit unserem Beispiel [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) – öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Tastenanschlägen sollten Sie sehen, dass der Tab-Fokus beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen; die fokussierten Elemente erhalten einen hervorgehobenen Standardstil in jedem Browser (er unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element fokussiert ist.

![Ein Screenshot von drei Tasten, die das Standardverhalten von interaktiven nativen Elementen demonstrieren. Die dritte Taste ist durch einen blauen Rahmen hervorgehoben, um ihren Fokuszustand anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> In Firefox können Sie auch eine Überlagerung aktivieren, die die Seitentabulatorreihenfolge anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann die Eingabetaste drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, um die Schaltflächen eine Nachricht anzeigen zu lassen), oder beginnen, Text in ein Textfeld einzugeben (andere Formularelemente haben unterschiedliche Steuerungen, zum Beispiel kann das {{htmlelement("select")}}-Element seine Optionen anzeigen und mit den Pfeiltasten nach oben und unten zwischen ihnen wechseln).

Beachten Sie, dass verschiedene Browser unterschiedliche Optionen zur Tastatursteuerung zur Verfügung haben können. Die meisten modernen Browser folgen dem oben beschriebenen Tabulator-Muster (Sie können auch Shift + Tab verwenden, um rückwärts durch die fokussierbaren Elemente zu bewegen), aber einige Browser haben ihre eigenen Eigenheiten:

- Safari auf dem Mac erlaubt standardmäßig nicht das Tabben durch Links; um dies zu aktivieren, öffnen Sie _Systemeinstellungen_, scrollen Sie zu _Tastatur_ und aktivieren Sie _Tastaturnavigation_. Wenn Sie eine ältere macOS-Version verwenden, lesen Sie [Use your keyboard like a mouse with Mac](https://support.apple.com/guide/mac-help/use-your-keyboard-like-a-mouse-mh27469/mac) im macOS-Benutzerhandbuch von Apple.

> [!WARNING]
> Sie sollten diesen Test/Überprüfung bei jeder neuen Seite durchführen, die Sie schreiben – achten Sie darauf, dass die Funktionalität über die Tastatur zugänglich ist und die Tabulatorreihenfolge einen sinnvollen Navigationspfad durch das Dokument bietet.

Dieses Beispiel unterstreicht die Bedeutung der Verwendung der richtigen semantischen Elemente für die richtige Aufgabe. Es ist möglich, _jedes_ Element mithilfe von CSS so zu stylen, dass es wie ein Link oder eine Schaltfläche aussieht, und mithilfe von JavaScript so zu verhalten, als wäre es ein Link oder eine Schaltfläche, aber sie werden tatsächlich keine Links oder Schaltflächen sein, und Sie verlieren viel der Barrierefreiheit, die Ihnen diese Elemente kostenlos bieten. Machen Sie es also nicht, wenn Sie es vermeiden können.

Ein weiterer Tipp – wie in unserem Beispiel gezeigt, können Sie steuern, wie fokussierbare Elemente beim Fokussieren aussehen, indem Sie die Pseudo-Klasse [:focus](/de/docs/Web/CSS/:focus) verwenden. Es ist eine gute Idee, Fokus- und Hover-Stile zu kombinieren, damit Ihre Benutzer diesen visuellen Hinweis erhalten, dass ein Steuerelement etwas tun wird, wenn es aktiviert wird, unabhängig davon, ob sie eine Maus oder eine Tastatur verwenden:

```css
a:hover,
input:hover,
button:hover,
select:hover,
a:focus,
input:focus,
button:focus,
select:focus {
  font-weight: bold;
}
```

> [!NOTE]
> Wenn Sie sich entscheiden, die Standard-Fokus-Stilierung mithilfe von CSS zu entfernen, stellen Sie sicher, dass Sie sie durch etwas anderes ersetzen, das besser zu Ihrem Design passt – sie ist ein sehr wertvolles Barrierefreiheitswerkzeug und sollte nicht entfernt werden.

#### Integrieren von Tastaturzugänglichkeit

Manchmal lassen sich Tastaturerreichbarkeit nicht vermeiden. Möglicherweise haben Sie eine Website geerbt, deren Semantik nicht sehr gut ist (vielleicht haben Sie ein schreckliches CMS bekommen, das Schaltflächen mit `<div>`s erstellt) oder Sie verwenden ein komplexes Steuerelement, das keine Tastaturerreichbarkeit hat, wie das HTML-{{htmlelement("video")}}-Element (erstaunlicherweise ist Opera der einzige Browser, der es ermöglicht, durch die Standardbrowser-Steuerelemente des `<video>`-Elements zu tabben). Sie haben hier einige Optionen:

1. Erstellen Sie benutzerdefinierte Steuerelemente mit `<button>`-Elementen (zu denen wir standardmäßig tabben können!) und JavaScript, um ihre Funktionalität zu verknüpfen. Schauen Sie sich [Creating a cross-browser video player](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für einige gute Beispiele hierfür an.
2. Erstellen Sie Tastenkombinationen über JavaScript, damit Funktionen aktiviert werden, wenn Sie bestimmte Tasten auf der Tastatur drücken. Siehe [Desktop mouse and keyboard controls](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) für einige spielbezogene Beispiele, die für jeden Zweck angepasst werden können.
3. Verwenden Sie einige interessante Taktiken, um das Verhalten von Schaltflächen vorzutäuschen. Nehmen Sie zum Beispiel unser [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Möglichkeit gegeben, fokussiert zu werden (einschließlich über Tab), indem wir jedem die Eigenschaft `tabindex="0"` gegeben haben (siehe den WebAIM-Artikel [tabindex](https://webaim.org/techniques/keyboard/tabindex) für viele wirklich nützliche Details). Dies ermöglicht uns, zu den Knöpfen zu tabben, aber nicht, sie über die Return/Enter-Taste zu aktivieren. Um dies zu tun, mussten wir den folgenden kleinen JavaScript-Trick anwenden:

   ```js
   document.onkeydown = (e) => {
     if (e.code === "Enter") {
       // Die Enter/Return-Taste
       document.activeElement.onclick(e);
     }
   };
   ```

   Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die [`code`](/de/docs/Web/API/KeyboardEvent/code)-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn sie der Code ist, der Return/Enter entspricht, führen wir die in dem Schaltflächen-`onclick`-Handler gespeicherte Funktion mit `document.activeElement.onclick()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

> [!NOTE]
> Diese Technik funktioniert nur, wenn Sie Ihre ursprünglichen Ereignis-Handler über Ereignis-Handler-Eigenschaften setzen (z.B. `onclick`). `addEventListener` funktioniert nicht. Dies ist ein großer Mehraufwand, um die Funktionalität wieder einzuführen. Und es wird mit Sicherheit andere Probleme damit geben. Besser ist es, das richtige Element für die richtige Aufgabe von Anfang an zu verwenden.

#### Textalternativen

Textalternativen sind sehr wichtig für die Barrierefreiheit – wenn eine Person eine Seh- oder Hörbehinderung hat, die sie daran hindert, einige Inhalte zu sehen oder zu hören, dann ist das ein Problem. Die einfachste verfügbare Textalternative ist das einfache `alt`-Attribute, das wir an allen Bildern anbringen sollten, die relevante Inhalte enthalten. Es sollte eine Beschreibung des Bildes enthalten, die seine Bedeutung und seinen Inhalt auf der Seite erfolgreich vermittelt und von einem Bildschirmleser erfasst und dem Benutzer vorgelesen wird.

> [!NOTE]
> Weitere Informationen finden Sie unter [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).

Fehlende Alt-Texte können auf verschiedene Weise getestet werden, zum Beispiel mit Hilfe von [Auditing-Tools](#prüfungs-tools) für die Barrierefreiheit.

Alt-Texte sind etwas komplexer für Video- und Audioinhalte. Es gibt eine Möglichkeit, Textspuren (z.B. Untertitel) zu definieren und anzuzeigen, wenn ein Video abgespielt wird, in Form des {{htmlelement("track")}}-Elements und des [WebVTT](/de/docs/Web/API/WebVTT_API)-Formats (siehe [Adding captions and subtitles to HTML video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für ein detailliertes Tutorial). Die [Browserkompatibilität](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#browser_compatibility) dieser Funktionen ist recht gut, aber wenn Sie Textalternativen für Audio bereitstellen oder ältere Browser unterstützen möchten, könnte ein einfaches Texttranskript, das irgendwo auf der Seite oder auf einer separaten Seite präsentiert wird, eine gute Idee sein.

#### Element-Beziehungen und Kontext

Es gibt bestimmte Funktionen und bewährte Praktiken in HTML, die dazu gedacht sind, Kontext und Beziehungen zwischen Elementen bereitzustellen, wo sonst keine existieren würden. Die drei häufigsten Beispiele sind Links, Formularbeschriftungen und Datentabellen.

Der Schlüssel zu zugänglichem Link-Text besteht darin, dass Benutzer, die Bildschirmleser verwenden, häufig eine gemeinsame Funktion nutzen, bei der sie eine Liste aller Links auf der Seite aufrufen. In diesem Fall muss der Link-Text im Kontext und außerhalb des Kontexts Sinn ergeben. Zum Beispiel ist eine Liste von Links mit der Beschriftung "hier klicken", "klick mich" usw. wirklich schlecht für die Barrierefreiheit. Es ist besser, wenn Link-Text sowohl im als auch außerhalb des Kontexts sinnvoll ist.

Als Nächstes auf unserer Liste ist das Formularelement {{htmlelement("label")}} eines der zentralen Merkmale, die es uns ermöglichen, Formulare zugänglich zu machen. Das Problem mit Formularen besteht darin, dass Sie Beschriftungen benötigen, um anzugeben, welche Daten in jedes Formulareingabefeld eingegeben werden sollen. Jede Beschriftung muss innerhalb eines {{htmlelement("label")}}-Tags enthalten sein, um sie eindeutig mit ihrem Partner-Formulareingabefeld zu verknüpfen (der Wert des `for`-Attributs jeder `<label>`-Beschriftung muss dem Formularelement-`id`-Wert entsprechen), und der Text macht auch dann Sinn, wenn die Quellordnung nicht vollständig logisch ist (was fairerweise der Fall sein sollte).

> [!NOTE]
> Weitere Informationen zu Link-Texten und Formularbeschriftungen finden Sie unter [Bedeutungsvolle Textbeschriftungen](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels).

Abschließend ein kurzes Wort zu Datentabellen. Eine grundlegende Datentabelle kann mit sehr einfachem Markup geschrieben werden (siehe `bad-table.html` [live](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/html/bad-table.html)), aber das hat Probleme – es gibt keine Möglichkeit für einen Benutzer eines Bildschirmlesers, Zeilen oder Spalten als Gruppierungen von Daten zu assoziieren – dazu müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen, Spalten usw. auflisten. Dies kann nur visu durch eine solche Tabelle erreicht werden.

Wenn Sie stattdessen unser Beispiel `punk-bands-complete.html` ([live](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html), [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html)) betrachten, können Sie hier einige Barrierefreiheitsunterstützungen sehen, wie Tabellenheader ({{htmlelement("th")}}- und `scope`-Attribute), {{htmlelement("caption")}}-Element usw.

> [!NOTE]
> Weitere Informationen über zugängliche Tabellen finden Sie unter [Zugängliche Datentabellen](/de/docs/Learn/Accessibility/HTML#accessible_data_tables).

### CSS

CSS bietet im Vergleich zu HTML tendenziell weniger grundlegende Barrierefreiheitsfunktionen, kann aber bei unsachgemäßer Anwendung ebenso viel Schaden anrichten. Wir haben bereits ein paar Barrierefreiheits-Tipps im Zusammenhang mit CSS erwähnt:

- Verwenden Sie die richtigen semantischen Elemente zum Markieren verschiedener Inhalte in HTML; wenn Sie einen anderen visuellen Effekt erzeugen möchten, verwenden Sie CSS – missbrauchen Sie kein HTML-Element, um den gewünschten Look zu erhalten. Zum Beispiel, wenn Sie größeren Text wünschen, verwenden Sie {{cssxref("font-size")}}, nicht ein {{htmlelement("Heading_Elements", "h1")}}-Element.
- Stellen Sie sicher, dass Ihre Quellordnung auch ohne CSS Sinn ergibt; Sie können die Seite anschließend mit CSS nach Belieben gestalten.
- Sie sollten sicherstellen, dass interaktive Elemente wie Schaltflächen und Links geeignete Fokus-/Hover-/Aktivzustände haben, um dem Benutzer visuelle Hinweise auf ihre Funktion zu geben. Wenn Sie die Standardwerte aus stilistischen Gründen entfernen, stellen Sie sicher, dass Sie einige Ersatzstile einfügen.

Es gibt einige weitere Überlegungen, die Sie berücksichtigen sollten.

#### Farbe und Farbkontrast

Beim Auswählen eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Text- (Vordergrund-)farbe einen guten Kontrast zur Hintergrundfarbe hat. Ihr Design sieht vielleicht cool aus, aber es nützt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können. Verwenden Sie ein Tool wie den [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) von WebAIM, um zu überprüfen, ob Ihr Schema ausreichend kontrastiert ist.

Ein weiterer Tipp ist, sich nicht nur auf Farbe für Wegweiser/Informationen zu verlassen, da dies wenig nützt für diejenigen, die die Farbe nicht sehen können. Anstatt Pflichtformularfelder in Rot zu markieren, versehen Sie sie beispielsweise mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Seiten in einer hellen Umgebung, wie z.B. im Sonnenlicht, besser zu lesen.

#### Inhalte verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte auf einmal angezeigt werden. Zum Beispiel haben wir in unserem [Beispiel für ein Registerkarteninformationsfeld](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) an) drei Informationspanels, die wir durch [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning) übereinander legen und Registerkarten bereitstellen, die angeklickt werden können, um jedes anzuzeigen (es ist auch tastaturzugänglich – Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Ein Screenshot zeigt ein Beispiel für zugängliches Verstecken und Anzeigen von Inhalten in Tabs. Das Beispiel hat drei Tabs, nämlich Tab 1, Tab 2 und Tab 3. Tab 1 ist derzeit fokussiert und aktiviert, um Inhalte anzuzeigen.](20191022144107.png)

Benutzer von Bildschirmlesern kümmern sich nicht darum – sie sind mit dem Inhalt zufrieden, solange die Quellordnung Sinn ergibt und sie darauf zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird im Allgemeinen als einer der besten Mechanismen zum Verstecken von Inhalten für visuelle Effekte angesehen, da sie Bildschirmleser nicht daran hindert, darauf zuzugreifen.

Andererseits sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, da sie Inhalte für Bildschirmleser wirklich verstecken. Es sei denn natürlich, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt vor Bildschirmlesern versteckt wird.

> **Note:** [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) bietet viele nützliche Details zu diesem Thema.

### JavaScript

JavaScript hat hinsichtlich der Barrierefreiheit ähnliche Probleme wie CSS – es kann katastrophal für die Barrierefreiheit sein, wenn es schlecht oder zu häufig verwendet wird. Wir haben bereits auf einige Barrierefreiheitsprobleme im Zusammenhang mit JavaScript hingewiesen, hauptsächlich im Bereich semantisches HTML – Sie sollten immer geeignetes semantisches HTML verwenden, um Funktionen zu implementieren, wo immer es verfügbar ist, z.B. Links und Schaltflächen entsprechend verwenden. Verwenden Sie keine `<div>`-Elemente mit JavaScript-Code, um Funktionen vorzutäuschen, wenn dies irgendwie möglich ist – es ist fehleranfällig und mehr Arbeit als die Verwendung der kostenlosen Funktionalität, die Ihnen HTML bietet.

#### Einfache Funktionen

Generell sollten einfache Funktionen nur mit dem vorhandenen HTML funktionieren – JavaScript sollte nur verwendet werden, um die Funktionalität zu verbessern, nicht vollständig darin aufzubauen. Gute Verwendungsmöglichkeiten von JavaScript umfassen:

- Bereitstellung von clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareingaben hinweist, ohne auf den Server warten zu müssen, um die Daten zu überprüfen. Wenn es nicht verfügbar ist, wird das Formular dennoch funktionieren, aber die Validierung könnte langsamer sein.
- Bereitstellung benutzerdefinierter Steuerelemente für HTML-`<video>`s, die nur mit der Tastatur erreichbar sind (wie wir bereits gesagt haben, sind die Standardbrowser-Steuerelemente in den meisten Browsern nicht tastaturzugänglich).

> [!NOTE]
> WebAIM's [Accessible JavaScript](https://webaim.org/techniques/javascript/) bietet einige nützliche zusätzliche Details zu Überlegungen für barrierefreies JavaScript.

Komplexere JavaScript-Implementierungen können Probleme mit der Barrierefreiheit schaffen – Sie müssen tun, was Sie können. Beispielsweise wäre es unvernünftig zu erwarten, dass Sie ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Glossary/WebGL) geschrieben wurde, für eine blinde Person 100% zugänglich machen, aber Sie könnten [Tastatursteuerung](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es für Nicht-Maus-Benutzer nutzbar wird, und das Farbschema so gestalten, dass es für diejenigen mit Farbfehlern nutzbar ist.

#### Komplexe Funktionen

Einer der Hauptbereiche, die im Hinblick auf die Barrierefreiheit problematisch sind, sind komplexe Apps, die komplizierte Formularsteuerungen (wie Datumswähler) und dynamische Inhalte umfassen, die häufig und schrittweise aktualisiert werden.

Nicht-native komplizierte Formularsteuerelemente sind problematisch, da sie viele verschachtelte `<div>`s umfassen und der Browser nicht automatisch weiß, was damit zu tun ist. Wenn Sie sie selbst erfinden, müssen Sie sicherstellen, dass sie mit der Tastatur zugänglich sind; wenn Sie eine Art Drittanbieter-Framework verwenden, überprüfen Sie sorgfältig die verfügbaren Optionen, um zu sehen, wie zugänglich sie sind, bevor Sie eintauchen. [Bootstrap](https://getbootstrap.com/) scheint ziemlich gut in Bezug auf Barrierefreiheit zu sein, aber [Making Bootstrap a Little More Accessible](https://www.sitepoint.com/making-bootstrap-accessible/) von Rhiana Heath erkundet einige seiner Probleme (hauptsächlich im Zusammenhang mit dem Farbkontrast) und betrachtet einige Lösungen.

Regelmäßig aktualisierte dynamische Inhalte können ein Problem darstellen, da Benutzer von Bildschirmlesern sie möglicherweise verpassen, insbesondere wenn sie unerwartet aktualisiert werden. Wenn Sie eine einseitige App mit einem Hauptinhaltspanel haben, das regelmäßig mithilfe von [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) oder [Fetch](/de/docs/Web/API/Fetch_API) aktualisiert wird, könnte ein Benutzer eines Bildschirmlesers diese Updates verpassen.

#### WAI-ARIA

Müssen Sie solch komplizierte Funktionen verwenden oder reicht einfaches semantisches HTML aus? Wenn Sie Komplexität benötigen, sollten Sie die Verwendung von [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) (Accessible Rich Internet Applications) in Betracht ziehen, einer Spezifikation, die Semantik (in Form neuer HTML-Attribute) für Gegenstände wie komplexe Formularsteuerelemente und aktualisierte Panels bereitstellt, die von den meisten Browsern und Bildschirmlesern verstanden werden können.

Um mit komplexen Formular-Widgets umzugehen, müssen Sie ARIA-Attribute verwenden, wie `roles`, um anzugeben, welche Rolle verschiedene Elemente in einem Widget haben (z.B. sind sie eine Registerkarte oder ein Registerkartenpanel?), `aria-disabled`, um zu sagen, ob ein Steuerelement deaktiviert ist oder nicht, usw.

Um mit regelmäßig aktualisierten Bereichen von Inhalten umzugehen, können Sie das Attribut `aria-live` verwenden, welches einen aktualisierten Bereich kennzeichnet. Sein Wert zeigt an, wie dringend der Bildschirmleser ihn aussprechen soll:

- `off`: Der Standard. Updates sollten nicht angekündigt werden.
- `polite`: Updates sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`: Updates sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier ist ein Beispiel:

```html
<p><span id="LiveRegion1" aria-live="polite" aria-atomic="false"></span></p>
```

Ein Beispiel in Aktion sehen Sie auf Freedom Scientifics [ARIA (Accessible Rich Internet Applications) Live Regions](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm)-Beispiel – der hervorgehobene Absatz sollte seinen Inhalt alle 10 Sekunden aktualisieren und ein Bildschirmleser sollte dies dem Benutzer vorlesen. [ARIA Live Regions - Atomic](https://www.freedomscientific.com/SurfsUp/AriaLiveRegionsAtomic.htm) bietet ein weiteres nützliches Beispiel.

Wir haben hier keinen Platz, um WAI-ARIA im Detail zu behandeln, aber Sie können viel mehr darüber lernen bei [WAI-ARIA-Basics](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

## Barrierefreiheits-Tools

Nachdem wir Barrierefreiheitsüberlegungen zu verschiedenen Webtechnologien behandelt haben, einschließlich einiger Testtechniken (wie Tastaturnavigation und Farbkontrastüberprüfung), lassen Sie uns einen Blick auf andere Tools werfen, die Sie bei der Durchführung von Barrierefreiheitstests verwenden können.

### Prüfungs-Tools

Es gibt eine Reihe von Prüfungs-Tools, in die Sie Ihre Webseiten einspeisen können. Sie werden sie überprüfen und eine Liste der auf der Seite vorhandenen Barrierefreiheitsprobleme zurückgeben. Lassen Sie uns ein Beispiel betrachten, wobei wir [Wave](https://wave.webaim.org/), ein Online-Tool zur Barrierefreiheitsprüfung, verwenden, das eine Webadresse akzeptiert und eine kommentierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Homepage](https://wave.webaim.org/).
2. Geben Sie die URL unseres Beispiels [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) in das Text-Eingabefeld oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am äußersten rechten Rand des Eingabefelds.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme reagieren. Klicken Sie die angezeigten Symbole an, um mehr Informationen über jedes der Probleme zu sehen, die durch die Bewertung von Wave identifiziert wurden.

> [!NOTE]
> Solche Tools sind alleine nicht gut genug, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination aus diesen, Ihrem Wissen und Ihrer Erfahrung, Benutzerforschung usw., um ein vollständiges Bild zu erhalten.

### Automatisierungstools

[Deque's aXe tool](https://www.deque.com/axe/) geht ein Stück weiter als die oben erwähnten Prüfwerkzeuge. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Seine wahrscheinlich nützlichste Form sind die Browsererweiterungen:

- [aXe for Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe for Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwickler-Tools des Browsers ein Barrierefreiheits-Tab hinzu. Wir haben zum Beispiel die Firefox-Version installiert und damit unser Beispiel [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) geprüft. Das waren die Ergebnisse:

![Ein Screenshot der von dem Axe-Tool identifizierten Barrierefreiheitsprobleme.](axe-screenshot.png)

aXe ist auch über `npm` installierbar und kann mit Task-Runnern wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungsframeworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/) sowie Unit-Test-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integriert werden (siehe die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

### Bildschirmleser

Es ist auf jeden Fall wertvoll, mit einem Bildschirmleser zu testen, um zu verstehen, wie stark sehbehinderte Menschen das Web verwenden. Es gibt eine Reihe von Bildschirmlesern:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind im Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Bildschirmleser separate Apps, die auf dem Host-Betriebssystem laufen und nicht nur Webseiten, sondern auch Text in anderen Apps lesen können. Dies ist nicht immer der Fall (ChromeVox ist eine Browsererweiterung), aber normalerweise neigen Bildschirmleser dazu, sich in leicht unterschiedlichen Weisen zu verhalten und unterschiedliche Steuerungen zu haben, sodass Sie die Dokumentation für Ihren gewählten Bildschirmleser konsultieren müssen, um alle Details zu erhalten – aber sie funktionieren auf im Prinzip dieselbe Art und Weise.

Lassen Sie uns einige Tests mit ein paar unterschiedlichen Bildschirmlesern durchführen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie arbeiten und wie man mit ihnen testet.

> [!NOTE]
> WebAIM's [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen über die Verwendung von Bildschirmlesern und was am besten für Bildschirmleser funktioniert. Siehe auch [Screen Reader User Survey #9 Results](https://webaim.org/projects/screenreadersurvey9/#used) für einige interessante Statistiken zur Nutzung von Bildschirmlesern.

#### VoiceOver

VoiceOver (VO) ist kostenlos auf Ihrem Mac/iPhone/iPad vorhanden, daher ist es nützlich zum Testen auf Desktop/Mobil, wenn Sie Apple-Produkte verwenden. Wir werden es auf macOS auf einem MacBook Pro testen.

Um es zu aktivieren, drücken Sie Cmd + F5. Wenn Sie VO noch nie benutzt haben, erhalten Sie einen Begrüßungsbildschirm, auf dem Sie auswählen können, ob Sie VO starten möchten oder nicht, und einen recht nützlichen Tutorial durchlaufen, um zu lernen, wie man es benutzt. Um es wieder zu deaktivieren, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen – es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO eingeschaltet ist, sieht der Bildschirm größtenteils gleich aus, aber Sie sehen unten links auf dem Bildschirm ein schwarzes Feld, das Informationen darüber enthält, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird auch hervorgehoben, mit einem schwarzen Rand – diese Hervorhebung ist bekannt als der **VO-Cursor**.

![Ein Beispiel-Screenshot, der die Barrierefreiheitsprüfung mit VoiceOver auf der MDN-Startseite demonstriert. Unten links im Bild wird eine Hervorhebung der auf der Webseite ausgewählten Informationen angezeigt.](voiceover.png)

Um VO zu verwenden, werden Sie viel den "VO-Modifikator" nutzen – dies ist eine Taste oder Tasten-Kombination, die Sie zusätzlich zu den tatsächlichen VO-Tastaturkürzeln drücken müssen, um sie zum Laufen zu bringen. Die Verwendung eines solchen Modifikators ist üblich bei Bildschirmlesern, um ihre Befehle vor Konflikten mit anderen Befehlen zu schützen. Im Fall von VO kann der Modifikator entweder die Feststelltaste oder Strg + Option sein.

VO hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für das Testen von Webseiten benötigen, finden Sie in folgender Tabelle. In den Tastaturkürzeln bedeutet "VO" "der VoiceOver-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten VoiceOver-Tastaturkürzel
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastenkürzel</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Pfeiltasten</td>
      <td>Bewegen Sie den VO-Cursor nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Wählen/Aktivieren Sie Elemente, die vom VO-Cursor hervorgehoben werden. Dies
        umfasst Elemente, die im Rotor ausgewählt sind (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + Shift + nach unten</td>
      <td>
        Wechseln Sie in eine Gruppe von Elementen (wie ein HTML-Tabelle oder ein
        Formular usw.) Sobald Sie sich in einer Gruppe befinden, können Sie sich
        dort mit den oben genannten Befehlen normal bewegen und Elemente auswählen.
      </td>
    </tr>
    <tr>
      <td>VO + Shift + nach oben</td>
      <td>Wechseln Sie aus einer Gruppe heraus.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(wenn in einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(wenn in einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Zeile.</td>
    </tr>
    <tr>
      <td>VO + C + C (zweimal C hintereinander)</td>
      <td>
        (wenn in einer Tabelle) Lesen Sie die gesamte aktuelle Spalte, einschließlich
        der Kopfzeile.
      </td>
    </tr>
    <tr>
      <td>VO + R + R (zweimal R hintereinander)</td>
      <td>
        (wenn in einer Tabelle) Lesen Sie die gesamte aktuelle Zeile, einschließlich
        der Kopfzeilen, die zu jeder Zelle gehören.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltaste links, VO + Pfeiltaste rechts</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie einem Datum oder einem
        Zeitwähler) Bewegen Sie sich zwischen Optionen.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltaste nach oben, VO + Pfeiltaste nach unten</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie einem Datum oder einem
        Zeitwähler) Ändern Sie die aktuelle Option.
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        Verwenden Sie den Rotor, der Listen von Überschriften, Links, Formularsteuerungen
        usw. für einfache Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltaste links, VO + Pfeiltaste rechts</td>
      <td>
        (wenn im Rotor) Wechseln Sie zwischen den verschiedenen Listen im Rotor.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltaste nach oben, VO + Pfeiltaste nach unten</td>
      <td>
        (wenn im Rotor) Wechseln Sie zwischen verschiedenen Elementen in der aktuellen
        Rotor-Liste.
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn im Rotor) Beenden Sie den Rotor.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Sprache anhalten/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Starten Sie den letzten Sprachpart erneut.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>Gehen Sie in das Dock des Mac, um auswählen zu können, welche Apps darin laufen sollen.</td>
    </tr>
  </tbody>
</table>

Das scheint wie viele Befehle, aber sobald man sich daran gewöhnt hat, ist es nicht so schlimm, und VO gibt einem regelmäßig Erinnerungen, welche Befehle man in bestimmten Situationen verwenden soll. Spielen Sie jetzt ein wenig mit VO herum; Sie können dann weiter einige unserer Beispiele im Abschnitt [Bildschirmlesertests](#bildschirmleser_prüfen) ausprobieren.

#### NVDA

NVDA ist ausschließlich für Windows verfügbar, und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen; Sie müssen auch Ihre E-Mail-Adresse angeben, bevor Sie es herunterladen können.
2. Sobald es heruntergeladen ist, installieren Sie es – doppelklicken Sie auf die Installationsdatei/-verknüpfung, akzeptieren Sie die Lizenz und folgen Sie den Aufforderungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/-verknüpfung oder verwenden Sie das Tastenkürzel Strg + Alt + N. Sie sehen das NVDA Begrüßungsdialogfeld, wenn Sie es starten. Hier können Sie ein paar Optionen auswählen und dann die _OK_-Taste drücken, um loszulegen.

NVDA ist jetzt auf Ihrem Computer aktiv.

Zur Verwendung von NVDA werden Sie viel den "NVDA-Modifikator" nutzen – dies ist eine Taste, die Sie zusätzlich zu den eigentlichen NVDA-Tastaturkürzeln drücken müssen, um sie zum Laufen zu bringen. Die Verwendung eines Modifikators ist bei Bildschirmlesern üblich, um ihre Befehle vor Konflikten mit anderen zu schützen. Im Fall von NVDA kann der Modifikator entweder Insert (die Standardeinstellung) oder die Feststelltaste sein (kann ausgewählt werden, indem Sie das erste Kontrollkästchen im NVDA-Begrüßungsdialogfeld anklicken, bevor Sie auf _OK_ klicken).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug auf die Hervorhebung dessen, wo es sich befindet und was es tut. Wenn Sie Überschriften, Listen usw. durchblättern, werden ausgewählte Elemente im Allgemeinen mit einem subtilen Umriss hervorgehoben, aber dies ist nicht immer bei allen Dingen der Fall. Wenn Sie völlig verloren sind, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und wieder von oben zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden hier nicht alle auflisten. Die grundlegenden, die Sie für Webseitentests benötigen, sind in folgender Tabelle aufgeführt. In den Tastaturkürzeln bedeutet "NVDA" "der NVDA-Modifikator".

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten NVDA-Tastaturkürzel
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastenkürzel</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + Q</td>
      <td>NVDA wieder ausschalten, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeiltaste nach oben</td>
      <td>Aktuelle Zeile lesen.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeiltaste nach unten</td>
      <td>Vom aktuellen Punkt aus zu lesen beginnen.</td>
    </tr>
    <tr>
      <td>Pfeiltasten nach oben und unten oder Umschalt + Tab und Tab</td>
      <td>Zum vorherigen/nächsten Element auf der Seite wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Pfeiltasten links und rechts</td>
      <td>Zum vorherigen/nächsten Zeichen im aktuellen Element wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + H und H</td>
      <td>Zur vorherigen/nächsten Überschrift wechseln und sie lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + K und K</td>
      <td>Zum vorherigen/nächsten Link wechseln und ihn lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + D und D</td>
      <td>
        Zum vorherigen/nächsten Dokumentlandmark (z.B. <code>&#x3C;nav></code>)
        wechseln und es lesen.
      </td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Zur vorherigen/nächsten Überschrift (Level 1–6) wechseln und sie lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Zum vorherigen/nächsten Formulareingabefeld wechseln und es fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Zur vorherigen/nächsten Datentabelle wechseln und sie fokussieren.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Zur vorherigen/nächsten Schaltfläche wechseln und deren Beschriftung lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Zur vorherigen/nächsten Liste wechseln und deren erstes Listenelement lesen.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Zum vorherigen/nächsten Listenelement wechseln und es lesen.</td>
    </tr>
    <tr>
      <td>Enter/Return</td>
      <td>
        (wenn Link/Schaltfläche oder anderes aktivierbares Element ausgewählt ist)
        Element aktivieren.
      </td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>
        (wenn Formular ausgewählt ist) Formular betreten, damit einzelne Elemente
        ausgewählt werden können, oder Formular verlassen, wenn Sie sich bereits
        darin befinden.
      </td>
    </tr>
    <tr>
      <td>Umschalt-Tab und Tab</td>
      <td>(wenn im Formular) Zwischen den Formulareingaben wechseln.</td>
    </tr>
    <tr>
      <td>Pfeiltasten nach oben und unten</td>
      <td>
        (wenn im Formular) Formulareingabewerte ändern (im Fall von Dingen
        wie Auswahlfeldern).
      </td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(wenn im Formular) Ausgewählten Wert wählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Zwischen Tabellenzellen wechseln.</td>
    </tr>
  </tbody>
</table>

#### Bildschirmleser prüfen

Jetzt, da Sie sich an die Verwendung eines Bildschirmlesers gewöhnt haben, möchten wir, dass Sie ihn verwenden, um einige schnelle Barrierefreiheitstests durchzuführen, um eine Vorstellung davon zu bekommen, wie Bildschirmleser mit guten und schlechten Webseiteneigenschaften umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und beachten Sie, wie die Überschriften vom Bildschirmleser gefunden und für die Navigation genutzt werden. Schauen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie der Bildschirmleser keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich das wäre, wenn Sie versuchen, eine wirklich lange Seite Text zu navigieren.
- Schauen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie aus dem Zusammenhang heraus Sinn machen. Dies ist nicht der Fall bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) – sie sind alle einfach nur "klicken Sie hier".
- Schauen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingaben durch ihre Beschriftungen beschrieben werden, weil wir `<label>`-Elemente richtig verwendet haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie eine wenig hilfreiche Beschriftung der Art „leer“.
- Schauen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und sehen Sie, wie der Bildschirmleser in der Lage ist, Spalten und Zeilen von Inhalten zu assoziieren und sie alle zusammen vorzulesen, weil wir die Header richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen miteinander assoziiert werden. Beachten Sie, dass NVDA sich leicht seltsam verhält, wenn Sie nur eine einzelne Tabelle auf einer Seite haben; Sie könnten stattdessen die [Tabelle Testseite von WebAIM](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Werfen Sie einen Blick auf das [WAI-ARIA Live-Regio­nen-Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm), das wir vorhin gesehen haben, und beachten Sie, wie der Bildschirmleser den ständig aktualisierten Abschnitt liest, während er aktualisiert wird.

### Benutzertests

Wie oben erwähnt, können Sie sich nicht allein auf automatisierte Tools verlassen, um Barrierefreiheitsprobleme auf Ihrer Website zu bestimmen. Es wird empfohlen, dass Sie bei der Erstellung Ihres Testplans, wenn möglich, einige Benutzergruppen zur Barrierefreiheit einbeziehen (siehe unseren [Benutzertest](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#user_testing)-Abschnitt weiter oben im Kurs für mehr Kontext). Versuchen Sie, einige Benutzer von Bildschirmlesern, einige Tastaturbenutzer, einige Nicht-Hörbenutzer und vielleicht auch andere Gruppen einzubeziehen, je nach Ihren Anforderungen.

## Checkliste für Barrierefreiheitstests

Die folgende Liste bietet eine Checkliste, der Sie folgen sollten, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheitstests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Die Validierung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Prüfungstools](#prüfungs-tools).
2. Überprüfen Sie, ob Ihre Inhalte ohne CSS sinnvoll sind.
3. Stellen Sie sicher, dass Ihre Funktion [mit der Tastatur zugänglich](#verwendung_nativer_tastaturzugänglichkeit) ist. Testen Sie mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihre nicht-textuellen Inhalte über [Textalternativen](#textalternativen) verfügen. Ein [Prüfungstool](#prüfungs-tools) ist gut, um solche Probleme zu erkennen.
5. Stellen Sie sicher, dass der [Farbkontrast Ihrer Website](#farbe_und_farbkontrast) akzeptabel ist, indem Sie ein geeignetes Überprüfungstool verwenden.
6. Stellen Sie sicher, dass [versteckte Inhalte](#inhalte_verstecken) von Bildschirmlesern sichtbar sind.
7. Stellen Sie sicher, dass die Funktionen, wenn möglich, ohne JavaScript nutzbar sind.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angebracht ist.
9. Führen Sie Ihre Website durch ein [Prüfungstool](#prüfungs-tools).
10. Testen Sie sie mit einem Bildschirmleser.
11. Fügen Sie eine Barrierefreiheitserklärung irgendwo auf Ihrer Website hinzu, die aussagt, was Sie getan haben.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit Barrierefreiheit stoßen werden; das Wichtigste ist wirklich zu wissen, wie Sie online nach Antworten suchen können. Lesen Sie den Abschnitt [Hilfe finden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help) des HTML- und CSS-Artikels für einige gute Tipps.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine gute Grundlage für die wichtigsten Barrierefreiheitsprobleme gegeben, auf die Sie stoßen könnten, und wie Sie gegenkommen und testen können.

Im nächsten Artikel werden wir uns genauer mit der Funktionserkennung beschäftigen.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}
