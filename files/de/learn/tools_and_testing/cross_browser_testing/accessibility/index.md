---
title: Umgang mit häufigen Problemen der Barrierefreiheit
slug: Learn/Tools_and_testing/Cross_browser_testing/Accessibility
l10n:
  sourceCommit: acb4e05fe7ea33a7b20fa03fdeb26a93511624e0
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}

Als Nächstes widmen wir uns der Barrierefreiheit, bieten Informationen zu häufigen Problemen, wie man einfache Tests durchführt, und wie man Prüf- und Automatisierungstools zur Erkennung von Barrierefreiheitsproblemen nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung von den grundlegenden
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des Browser-übergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit, häufige Barrierefreiheitsprobleme zu diagnostizieren und geeignete Tools und Techniken zu deren Behebung zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Barrierefreiheit?

Wenn wir im Zusammenhang mit Web-Technologie von Barrierefreiheit sprechen, denken die meisten Menschen sofort daran, sicherzustellen, dass Websites/Apps für Menschen mit Behinderungen nutzbar sind, zum Beispiel:

- Sehbehinderte Menschen, die Bildschirmleser oder Vergrößerungen/Zooms verwenden, um auf Texte zuzugreifen.
- Menschen mit motorischen Beeinträchtigungen, die Tastaturen (oder andere nicht-mausbasierten Funktionen) nutzen, um die Funktionalität von Websites zu aktivieren.
- Menschen mit Hörbehinderungen, die auf Untertitel oder andere Textalternativen für Audio-/Videoinhalte angewiesen sind.

Es ist jedoch ein Irrtum zu sagen, dass Barrierefreiheit nur für Behinderungen gedacht ist. Das eigentliche Ziel der Barrierefreiheit ist es, Websites/Apps für so viele Menschen in möglichst vielen Kontexten wie möglich nutzbar zu machen, nicht nur für Benutzer von leistungsstarken Desktop-Computern. Einige Beispiele könnten sein:

- Benutzer auf mobilen Geräten.
- Benutzer auf alternativen Browser-Geräten wie Fernsehern, Uhren usw.
- Benutzer älterer Geräte, die möglicherweise nicht über die neuesten Browser verfügen.
- Benutzer von Geräten mit geringerer Spezifikation, die möglicherweise langsame Prozessoren haben.

In gewisser Weise dreht sich dieses ganze Modul um Barrierefreiheit — das Browser-übergreifende Testen stellt sicher, dass Ihre Sites von möglichst vielen Menschen genutzt werden können. [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility) definiert Barrierefreiheit vollständiger und gründlicher als dieser Artikel es tut.

Das gesagt, wird dieser Artikel Browser-übergreifende und Testprobleme im Zusammenhang mit Menschen mit Behinderungen behandeln und wie sie das Internet nutzen. Wir haben bereits über andere Bereiche wie [Responsive Design](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#responsive_design_probleme) und [Leistung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#leistungsprobleme) an anderen Stellen des Moduls gesprochen.

> [!NOTE]
> Wie bei vielen Dingen in der Webentwicklung geht es bei Barrierefreiheit nicht um 100% Erfolg oder nichts; 100% Barrierefreiheit ist praktisch unmöglich für alle Inhalte zu erreichen, insbesondere wenn Websites komplexer werden. Es geht vielmehr darum, einen angemessenen Aufwand zu betreiben, um so viele Ihrer Inhalte wie möglich für so viele Menschen wie möglich zugänglich zu machen, indem Sie defensiv coden und Best Practices einhalten.

## Häufige Barrierefreiheitsprobleme

In diesem Abschnitt werden wir einige der Hauptprobleme umreißen, die im Zusammenhang mit der Barrierefreiheit im Web auftreten, in Verbindung mit spezifischen Technologien, zusammen mit Best Practices, die zu befolgen sind, und einigen einfachen Tests, die Sie durchführen können, um festzustellen, ob Ihre Sites auf dem richtigen Weg sind.

> [!NOTE]
> Barrierefreiheit ist moralisch das Richtige zu tun und gut für das Geschäft (die Anzahl der behinderten Nutzer, Nutzer auf mobilen Geräten usw. stellt bedeutende Marktsegmente dar), aber es ist auch eine gesetzliche Anforderung in vielen Teilen der Welt, Webinhalte für Menschen mit Behinderungen zugänglich zu machen. Lesen Sie [Barrierefreiheitsrichtlinien und das Gesetz](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law) für weitere Informationen.

### HTML

Semantisches HTML (bei dem die Elemente für ihren korrekten Zweck verwendet werden) ist von Haus aus zugänglich — solche Inhalte sind für sehende Zuschauer lesbar (sofern Sie nicht etwas Unüberlegtes tun, wie den Text zu klein zu machen oder ihn mit CSS zu verstecken), sind aber auch für unterstützende Technologien wie Bildschirmleser (Apps, die eine Webseite buchstäblich für ihren Benutzer vorlesen) nutzbar und bieten auch weitere Vorteile.

#### Semantische Struktur

Der wichtigste schnelle Gewinn im semantischen HTML besteht darin, eine Struktur von Überschriften und Absätzen für Ihren Inhalt zu verwenden; dies liegt daran, dass Bildschirmleser-Benutzer dazu neigen, die Überschriften eines Dokuments als Wegweiser zu verwenden, um schneller den benötigten Inhalt zu finden. Wenn Ihr Inhalt keine Überschriften hat, erhalten sie nur eine riesige Textwand ohne Wegweiser, um etwas zu finden. Beispiele für schlechtes und gutes HTML:

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

Darüber hinaus sollte Ihr Inhalt in der Quellreihenfolge logisch Sinn ergeben — Sie können ihn später immer noch mit CSS beliebig platzieren, aber Sie sollten die Quellreihenfolge von Anfang an richtig wählen.

Als Test können Sie das CSS einer Site deaktivieren und prüfen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie das CSS einfach aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browser-Funktionen, zum Beispiel:

- Firefox: Wählen Sie _Ansicht > Seitenstil > Kein Stil_ aus dem Hauptmenü.
- Safari: Wählen Sie _Entwickeln > Stile deaktivieren_ aus dem Hauptmenü (um das Menü _Entwickeln_ zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Menü Entwickeln in der Menüleiste anzeigen_).
- Chrome: Installieren Sie die Webentwickler-Toolbar-Erweiterung, starten Sie dann den Browser neu. Klicken Sie auf das erscheinende Zahnradsymbol und wählen Sie _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie _Ansicht > Stil > Kein Stil_ aus dem Hauptmenü.

#### Nutzung nativer Tastaturzugänglichkeit

Bestimmte HTML-Features können nur über die Tastatur ausgewählt werden — dies ist das Standardverhalten, das es seit den Anfängen des Internets gibt. Die Elemente, die diese Fähigkeit haben, sind die gängigen, die es Benutzern ermöglichen, mit Webseiten zu interagieren, nämlich Links, {{htmlelement("button")}}s und Formularelemente wie {{htmlelement("input")}}.

Sie können dies mit unserem [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) Beispiel ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) — öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tab-Taste zu drücken; nach ein paar Mal drücken, sollten Sie sehen, dass der Tabulatorfokus beginnt, durch die verschiedenen fokussierbaren Elemente zu wechseln; die fokussierten Elemente erhalten einen hervorgehobenen Standardstil in jedem Browser (er unterscheidet sich leicht zwischen den verschiedenen Browsern), damit Sie erkennen können, welches Element fokussiert ist.

![Ein Screenshot von drei Schaltflächen, der das Standardverhalten von interaktiven nativen Elementen zeigt. Die dritte Schaltfläche ist durch einen blauen Rand hervorgehoben, um ihren Fokuszustand anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> In Firefox können Sie auch eine Überlagerung aktivieren, die die Registerkartenreihenfolge der Seite anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Registerkartenreihenfolge der Webseite anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann Enter/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript hinzugefügt, damit die Schaltflächen eine Nachricht ausgeben), oder beginnen, in ein Texteingabefeld zu tippen (andere Formularelemente haben unterschiedliche Steuerungen, z. B. können beim {{htmlelement("select")}}-Element die Optionen mit den Pfeiltasten nach oben und unten angezeigt und durchgegangen werden).

Beachten Sie, dass verschiedene Browser unterschiedliche Tastatursteuerungsoptionen verfügbar haben können. Die meisten modernen Browser folgen dem oben beschriebenen Tab-Muster (Sie können auch Shift + Tab verwenden, um rückwärts durch die fokussierbaren Elemente zu wechseln), aber einige Browser haben ihre eigenen Besonderheiten:

- Safari auf dem Mac erlaubt Ihnen standardmäßig nicht, durch Links zu tabben; um dies zu aktivieren, öffnen Sie die _Systemeinstellungen_, scrollen Sie herunter zu _Tastatur_ und aktivieren Sie _Tastaturnavigation_. Wenn Sie eine ältere Version von macOS verwenden, lesen Sie [Verwenden Ihrer Tastatur wie eine Maus auf dem Mac](https://support.apple.com/guide/mac-help/use-your-keyboard-like-a-mouse-mh27469/mac) im macOS-Benutzerhandbuch von Apple.

> [!WARNING]
> Sie sollten diese Art von Test/Überprüfung bei jeder neuen Seite, die Sie schreiben, durchführen — stellen Sie sicher, dass die Funktionalität über die Tastatur zugänglich ist und dass die Tabulatorreihenfolge einen sinnvollen Navigationspfad durch das Dokument bietet.

Dieses Beispiel zeigt die Bedeutung der Verwendung des richtigen semantischen Elements für den richtigen Job auf. Es ist möglich, _jedes_ Element mit CSS so zu gestalten, dass es aussieht wie ein Link oder eine Schaltfläche, und es mit JavaScript wie ein Link oder eine Schaltfläche zu verhalten, aber es sind keine echten Links oder Schaltflächen, und Sie verlieren eine Menge der Barrierefreiheit, die Ihnen diese Elemente von vornherein bieten. Also tun Sie es nicht, wenn Sie es vermeiden können.

Ein weiterer Tipp — wie in unserem Beispiel gezeigt, können Sie steuern, wie Ihre fokussierbaren Elemente aussehen, wenn sie fokussiert sind, indem Sie die [:focus](/de/docs/Web/CSS/:focus) Pseudoklasse verwenden. Es ist eine gute Idee, Fokus- und Hover-Stile zu kombinieren, damit Ihre Benutzer, unabhängig davon, ob sie Maus oder Tastatur verwenden, den visuell Hinweis erhalten, dass eine Steuerung beim Aktivieren etwas tut:

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
> Wenn Sie sich entscheiden, die Standardfokusstile mit CSS zu entfernen, stellen Sie sicher, dass Sie sie durch etwas anderes ersetzen, das besser zu Ihrem Design passt — es ist ein sehr wertvolles Barrierefreiheitstool und sollte nicht entfernt werden.

#### Einbauen von Tastaturzugänglichkeit

Manchmal ist es nicht möglich, die Tastaturzugänglichkeit beizubehalten. Sie könnten eine Site übernommen haben, bei der die Semantik nicht sehr gut ist (vielleicht arbeiten Sie mit einem schrecklichen CMS, das Schaltflächen mit `<div>`s erstellt), oder Sie verwenden eine komplexe Steuerung, die keine eingebaute Tastaturzugänglichkeit hat, wie das HTML-{{htmlelement("video")}}-Element (erstaunlicherweise, Opera ist der einzige Browser, der das Durchlaufen der `<video>`-Element-Standardbrowsersteuerungen per Tabulator erlaubt). Sie haben hier ein paar Optionen:

1. Erstellen Sie benutzerdefinierte Steuerungen mit `<button>`-Elementen (die wir standardmäßig per Tabulator erreichen können!) und JavaScript, um deren Funktionalität zu verknüpfen. Siehe [Ein plattformübergreifender Videoplayer](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für einige gute Beispiele dafür.
2. Erstellen Sie Tastenkombinationen mit JavaScript, sodass Funktionen aktiviert werden, wenn bestimmte Tasten auf der Tastatur gedrückt werden. Siehe [Maus- und Tastatur-Steuerungen für Desktop](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) für einige spielbezogene Beispiele, die für jeden Zweck angepasst werden können.
3. Verwenden Sie einige interessante Taktiken, um Schaltflächenverhalten zu simulieren. Nehmen Sie zum Beispiel unser [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Möglichkeit gegeben, fokussiert zu werden (auch per Tabulator), indem wir jedem das Attribut `tabindex="0"` gegeben haben (siehe WebAIMs [tabindex-Artikel](https://webaim.org/techniques/keyboard/tabindex) für weitere wirklich nützliche Details). Dadurch können wir zu den Schaltflächen tabben, aber nicht, um sie über die Enter/Return-Taste zu aktivieren. Dazu mussten wir den folgenden Trick mit JavaScript hinzufügen:

   ```js
   document.onkeydown = (e) => {
     if (e.code === "Enter") {
       // The Enter/Return key
       document.activeElement.onclick(e);
     }
   };
   ```

   Hier fügen wir dem `document`-Objekt einen Listener hinzu, um zu erkennen, wann eine Schaltfläche auf der Tastatur gedrückt wurde. Wir überprüfen, welche Schaltfläche gedrückt wurde, über die [`code`](/de/docs/Web/API/KeyboardEvent/code)-Eigenschaft des Event-Objekts; wenn es dem Code entspricht, der Return/Enter entspricht, führen wir die Funktion aus, die im `onclick`-Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.onclick()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

> [!NOTE]
> Diese Technik wird nur funktionieren, wenn Sie Ihre ursprünglichen Event-Handler über Event-Handler-Eigenschaften setzen (z. B. `onclick`). `addEventListener` wird nicht funktionieren. Es ist viel zusätzlicher Aufwand, die Funktionalität auf diese Weise zurückzubauen. Und es gibt sicherlich andere Probleme damit. Besser, von Anfang an das richtige Element für den richtigen Job zu verwenden.

#### Textalternativen

Textalternativen sind für Barrierefreiheit äußerst wichtig — wenn eine Person eine Seh- oder Hörbehinderung hat, die sie daran hindert, bestimmte Inhalte zu sehen oder zu hören, dann ist das ein Problem. Die einfachste verfügbare Textalternative ist das schlichte `alt`-Attribut, das wir in allen Bildern, die relevante Inhalte enthalten, einschließen sollten. Dies sollte eine Beschreibung des Bildes enthalten, die seine Bedeutung und seinen Inhalt auf der Seite erfolgreich vermittelt, damit es von einem Bildschirmleser aufgenommen und dem Benutzer vorgelesen werden kann.

> [!NOTE]
> Weitere Informationen finden Sie unter [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives) und [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/), um zu erfahren, wie Sie ein alt-Attribut für Bilder in verschiedenen Situationen verwenden.

Fehlender Alt-Text kann auf verschiedene Weise getestet werden, zum Beispiel mit Barrierefreiheits-[Prüftools](#prüftools).

Alt-Text ist für Video- und Audioinhalte etwas komplexer. Es gibt eine Möglichkeit, Textspuren (z. B. Untertitel) zu definieren und sie beim Abspielen von Videos anzuzeigen, in Form des {{htmlelement("track")}}-Elements und des [WebVTT](/de/docs/Web/API/WebVTT_API)-Formats (siehe [Hinzufügen von Untertiteln zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für ein ausführliches Tutorial). Die [Kompatibilität mit Browsern](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#browser_compatibility) für diese Funktionen ist ziemlich gut, aber wenn Sie Textalternativen für Audio bereitstellen oder ältere Browser unterstützen möchten, könnte ein einfacher Texttranscript, der irgendwo auf der Seite oder auf einer separaten Seite präsentiert wird, eine gute Idee sein.

#### Elementbeziehungen und Kontext

Es gibt bestimmte Features und Best Practices in HTML, die dazu entwickelt wurden, Kontext und Beziehungen zwischen Elementen bereitzustellen, wo sonst keine existieren. Die drei häufigsten Beispiele sind Links, Formularbeschriftungen und Datentabellen.

Der Schlüssel zu zugänglichem Link-Text besteht darin, dass Benutzer von Bildschirmlesern häufig eine gemeinsame Funktion verwenden, bei der sie eine Liste aller Links auf der Seite aufrufen. In diesem Fall muss der Link-Text aus dem Kontext Sinn ergeben. Zum Beispiel ist eine Liste von Links mit der Bezeichnung "klicken Sie hier", "klicken Sie mich" usw. wirklich schlecht für die Barrierefreiheit. Es ist besser, wenn der Link-Text im Kontext und außerhalb des Kontexts Sinn ergibt.

Als nächstes auf unserer Liste ist das Formular-{{htmlelement("label")}}-Element eines der zentralen Features, das es uns ermöglicht, Formulare zugänglich zu machen. Das Problem mit Formularen ist, dass Sie Beschriftungen benötigen, die angeben, welche Daten in jedes Formulareingabe eingegeben werden sollten. Jede Beschriftung muss in einem {{htmlelement("label")}} enthalten sein, um sie eindeutig mit ihrem Partner-Formularelement zu verknüpfen (der `for`-Attributwert jeder `<label>` muss mit dem `id`-Wert des Formularelements übereinstimmen), und es wird auch dann Sinn ergeben, wenn die Quellordnung nicht völlig logisch ist (was zugegeben der Fall sein sollte).

> [!NOTE]
> Weitere Informationen über den Link-Text und Formular-Beschriftungen finden Sie in [Aussagekräftige Textbeschriftungen](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels).

Zuletzt ein kurzes Wort zu Datentabellen. Eine einfache Datentabelle kann mit sehr einfachem Markup geschrieben werden (siehe `bad-table.html` [live](https://mdn.github.io/learning-area/accessibility/html/bad-table.html), und [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/html/bad-table.html)), aber dies hat Probleme — es gibt keine Möglichkeit für einen Bildschirmleser-Benutzer, Zeilen oder Spalten als Daten-Gruppierungen miteinander in Verbindung zu bringen — um dies zu tun, müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen, Spalten usw. anführen. Dies kann nur visuell für eine solche Tabelle erfolgen.

Wenn Sie sich stattdessen unser `punk-bands-complete.html`-Beispiel ([live](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html), [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html)) ansehen, können Sie einige Hilfen zur Barrierefreiheit bei der Arbeit sehen, wie Tabellenköpfe ({{htmlelement("th")}}- und `scope`-Attribute), {{htmlelement("caption")}}-Element usw.

> [!NOTE]
> Weitere Informationen zu zugänglichen Tabellen finden Sie in [Zugängliche Datentabellen](/de/docs/Learn/Accessibility/HTML#accessible_data_tables).

### CSS

CSS bietet in der Regel weit weniger grundlegende Barrierefreiheitsfeatures als HTML, kann aber trotzdem genauso viel Schaden für die Barrierefreiheit anrichten, wenn es falsch verwendet wird. Wir haben bereits ein paar Barrierefreiheits-Tipps zu CSS erwähnt:

- Verwenden Sie die korrekten semantischen Elemente, um unterschiedliche Inhalte in HTML zu kennzeichnen; wenn Sie einen anderen visuellen Effekt erzielen möchten, verwenden Sie CSS — missbrauchen Sie keine HTML-Elemente, um das gewünschte Aussehen zu erzielen. Wenn Sie zum Beispiel größeren Text wünschen, verwenden Sie {{cssxref("font-size")}}, kein {{htmlelement("Heading_Elements", "h1")}}-Element.
- Stellen Sie sicher, dass Ihre Quellreihenfolge ohne CSS Sinn ergibt; Sie können die Seite anschließend beliebig mit CSS gestalten.
- Sie sollten sicherstellen, dass interaktive Elemente wie Schaltflächen und Links geeignete Fokus-/Hover-/Aktivzustände haben, um dem Benutzer visuelle Hinweise auf ihre Funktion zu geben. Wenn Sie die Standardwerte aus stilistischen Gründen entfernen, stellen Sie sicher, dass Sie Ersatzstile hinzufügen.

Es gibt einige andere Überlegungen, die Sie berücksichtigen sollten.

#### Farbe und Farbkontrast

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut mit der Hintergrundfarbe kontrastiert. Ihr Design mag cool aussehen, aber es bringt nichts, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können. Verwenden Sie ein Werkzeug wie WebAIMs [Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema genügend Kontrast aufweist.

Ein weiterer Tipp ist, nicht nur auf die Farbe für Wegweiser/Informationen zu vertrauen, da dies für diejenigen, die die Farbe nicht sehen können, nicht geeignet ist. Anstatt z. B. erforderliche Formularfelder in Rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrast wird auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, ermöglichen, Seiten auch in einer hellen Umgebung, wie Sonnenlicht, besser zu lesen.

#### Ausblenden von Inhalten

Es gibt viele Instanzen, in denen ein visuelles Design erfordert, dass nicht alle Inhalte gleichzeitig angezeigt werden. In unserem [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) haben wir zum Beispiel drei Informationspanels, aber wir positionieren sie [übereinander](/de/docs/Learn/CSS/CSS_layout/Positioning) und bieten Registerkarten, die angeklickt werden können, um jedes einzublenden (es ist auch über die Tastatur zugänglich — Sie können alternativ Tab und Enter/Return verwenden, um sie auszuwählen).

![Ein Screenshot zeigt ein Beispiel für das Zugänglichmachen von ausgeblendetem und angezeigtem Inhalt in Registerkarten. Das Beispiel hat drei Registerkarten, nämlich Tab 1, Tab 2 und Tab 3. Tab 1 ist derzeit fokussiert und aktiviert, um Inhalte anzuzeigen.](20191022144107.png)

Benutzer von Bildschirmlesern kümmern sich nicht um all das — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge Sinn ergibt und sie darauf zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) wird im Allgemeinen als eine der besten Mechanismen zum Ausblenden von Inhalten für visuelle Effekte angesehen, da sie Bildschirmleser nicht daran hindert, Zugang zu erhalten.

Andererseits sollten Sie {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} nicht verwenden, weil sie Inhalte vor Bildschirmlesern verbergen. Sofern es natürlich keinen guten Grund gibt, warum Sie möchten, dass dieser Inhalt vor Bildschirmlesern verborgen ist.

> **Hinweis:** [Unsichtbarer Inhalt nur für Benutzer von Bildschirmlesern](https://webaim.org/techniques/css/invisiblecontent/) bietet viele nützliche Details zu diesem Thema.

### JavaScript

JavaScript hat dieselben Probleme wie CSS in Bezug auf Barrierefreiheit — es kann für Barrierefreiheit katastrophal sein, wenn es schlecht oder übermäßig verwendet wird. Wir haben bereits auf einige Barrierefreiheitsprobleme im Zusammenhang mit JavaScript hingewiesen, hauptsächlich im Bereich semantischen HTMLs — Sie sollten immer das geeignete semantische HTML verwenden, um Funktionalität zu implementieren, wo immer es verfügbar ist, z. B. verwenden Sie Links und Schaltflächen entsprechend. Verwenden Sie keine `<div>`-Elemente mit JavaScript-Code, um Funktionalität zu simulieren, wenn es überhaupt möglich ist — es ist fehleranfällig und mehr Arbeit als die kostenlose Funktionalität, die Ihnen HTML bietet.

#### Einfache Funktionalität

Im Allgemeinen sollte einfache Funktionalität nur mit dem vorhandenen HTML funktionieren — JavaScript sollte nur verwendet werden, um die Funktionalität zu verbessern, nicht sie vollständig einzubauen. Gute Verwendungen von JavaScript umfassen:

- Bereitstellung von clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareinträgen aufmerksam macht, ohne auf die Überprüfung der Daten durch den Server warten zu müssen. Wenn es nicht verfügbar ist, funktioniert das Formular dennoch, aber die Validierung kann langsamer sein.
- Bereitstellung benutzerdefinierter Steuerungen für HTML-`<video>`s, die für Benutzer, die nur die Tastatur verwenden, zugänglich sind (wie bereits erwähnt, sind die Standard-Browser-Steuerungen in den meisten Browsern nicht über die Tastatur zugänglich).

> [!NOTE]
> WebAIMs [Zugängliches JavaScript](https://webaim.org/techniques/javascript/) bietet einige nützliche weitere Details zu Überlegungen für zugängliches JavaScript.

Komplexere JavaScript-Implementierungen können Probleme mit der Barrierefreiheit verursachen — Sie müssen tun, was Sie können. Zum Beispiel wäre es unvernünftig, von Ihnen zu erwarten, dass Sie ein komplexes 3D-Spiel, das mithilfe von {{Glossary("WebGL", "WebGL")}} geschrieben wurde, 100% zugänglich für eine blinde Person machen, aber Sie könnten [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es von Nicht-Maus-Benutzern genutzt werden kann, und das Farbschema kontrastreich genug machen, um es für Menschen mit Farbbehinderungen nutzbar zu machen.

#### Komplexe Funktionalität

Eines der Hauptprobleme für Barrierefreiheit sind komplexe Apps, die komplizierte Formularsteuerungen (wie Datumsauswähler) und dynamische Inhalte umfassen, die häufig und inkrementell aktualisiert werden.

Nicht-native komplizierte Formularsteuerungen sind problematisch, weil sie oft viele verschachtelte `<div>`s beinhalten und der Browser standardmäßig nicht weiß, was damit zu tun ist. Wenn Sie sie selbst erfinden, müssen Sie sicherstellen, dass sie für die Tastatur zugänglich sind; wenn Sie ein Drittanbieter-Framework verwenden, überprüfen Sie sorgfältig die verfügbaren Optionen, um zu sehen, wie zugänglich sie sind, bevor Sie es verwenden. [Bootstrap](https://getbootstrap.com/) scheint für Barrierefreiheit ziemlich gut zu sein, obwohl [Bootstrap ein wenig zugänglicher machen](https://www.sitepoint.com/making-bootstrap-accessible/) von Rhiana Heath einige seiner Probleme (hauptsächlich im Zusammenhang mit Farbkontrast) erkundet und einige Lösungen anspricht.

Regelmäßig aktualisierte dynamische Inhalte können problematisch sein, weil Bildschirmleser-Benutzer sie möglicherweise verpassen, insbesondere wenn sie unerwartet aktualisiert werden. Wenn Sie eine Single-Page-App mit einem Hauptinhaltspanel haben, das regelmäßig mit [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) oder [Fetch](/de/docs/Web/API/Fetch_API) aktualisiert wird, könnte ein Benutzer des Bildschirmlesers diese Aktualisierungen verpassen.

#### WAI-ARIA

Benötigen Sie solche komplexen Funktionen oder reicht einfaches semantisches HTML aus? Wenn Sie Komplexität benötigen, sollten Sie die Verwendung von [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) (Accessible Rich Internet Applications), einer Spezifikation, die Semantik (in Form von neuen HTML-Attributen) für Elemente wie komplexe Formularsteuerungen und aktualisierende Panels bietet, in Betracht ziehen, die von den meisten Browsern und Bildschirmlesern verstanden werden kann.

Um mit komplexen Formular-Widgets umzugehen, müssen Sie ARIA-Attribute wie `roles` verwenden, um anzugeben, welche Rolle verschiedene Elemente in einem Widget haben (zum Beispiel sind sie ein Tab oder ein Tab-Panel?), `aria-disabled`, um zu sagen, ob eine Steuerung deaktiviert ist oder nicht usw.

Um mit regelmäßig aktualisierten Inhaltsbereichen umzugehen, können Sie das `aria-live`-Attribut verwenden, das einen aktualisierenden Bereich identifiziert. Sein Wert gibt an, wie dringend der Bildschirmleser ihn vorlesen soll:

- `off:` Der Standard. Updates sollten nicht angekündigt werden.
- `polite`: Updates sollten nur angekündigt werden, wenn der Benutzer untätig ist.
- `assertive`: Updates sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier ist ein Beispiel:

```html
<p><span id="LiveRegion1" aria-live="polite" aria-atomic="false"></span></p>
```

Sie können ein Beispiel in Aktion auf Freedom Scientific's [ARIA (Accessible Rich Internet Applications) Live Regions](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm)-Beispiel sehen — der hervorgehobene Absatz sollte alle 10 Sekunden seinen Inhalt aktualisieren, und ein Bildschirmleser sollte dies dem Benutzer vorlesen. [ARIA Live Regions - Atomic](https://www.freedomscientific.com/SurfsUp/AriaLiveRegionsAtomic.htm) bietet ein weiteres nützliches Beispiel.

Wir haben nicht den Raum, um WAI-ARIA hier im Detail zu behandeln, Sie können viel mehr darüber lernen bei [WAI-ARIA-Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

## Tools für die Barrierefreiheit

Da wir nun die Überlegungen zur Barrierefreiheit für verschiedene Web-Technologien behandelt haben, einschließlich einiger Testtechniken (wie Tastaturnavigation und Farbkontrastprüfer), schauen wir uns einige andere Tools an, die Sie beim Testen auf Barrierefreiheit nutzen können.

### Prüftools

Es gibt eine Reihe von Prüftools, die Sie Ihren Webseiten füttern können. Sie werden sie überprüfen und eine Liste von Barrierefreiheitsproblemen auf der Seite zurückgeben. Lassen Sie uns ein Beispiel ansehen, indem wir [Wave](https://wave.webaim.org/) verwenden, ein Online-Prüftool für Barrierefreiheit, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie auf die [Wave-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)-Beispiels in das Texteingabefeld oben auf der Seite ein. Drücken Sie dann Enter oder klicken/tippen Sie auf den Pfeil an der äußersten rechten Kante des Eingabefelds.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme antworten. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu jedem der von Waves Bewertung ermittelten Probleme zu sehen.

> [!NOTE]
> Solche Tools sind nicht gut genug, um alle Ihre Barrierefreiheitsprobleme allein zu lösen. Sie benötigen eine Kombination aus diesen, Wissen und Erfahrung, Benutzer-Tests usw., um ein vollständiges Bild zu erhalten.

### Automatisierungswerkzeuge

[Deque's aXe-Tool](https://www.deque.com/axe/) geht ein Stück weiter als die oben genannten Prüftools. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitserrors zurück. Seine nützlichste Form ist wahrscheinlich die Browser-Erweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Browser-Entwicklertools einen Barrierefreiheitstab hinzu. Zum Beispiel haben wir die Firefox-Version installiert und damit unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html)-Beispiel überprüft. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot von Barrierefreiheitsproblemen, die vom Axe-Tool identifiziert wurden.](axe-screenshot.png)

aXe ist auch mit `npm` installierbar und kann in Aufgabenverwalter wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Testing-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integriert werden (siehe erneut die [Haupt-aXe-Seite](https://www.deque.com/axe/) für Details).

### Bildschirmleser

Es lohnt sich auf jeden Fall, mit einem Bildschirmleser zu testen, um sich daran zu gewöhnen, wie stark sehbehinderte Menschen das Internet nutzen. Es gibt eine Reihe von Bildschirmlesern:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenfreie Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind in das Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Bildschirmleser separate Apps, die auf dem Host-Betriebssystem ausgeführt werden und nicht nur Webseiten, sondern auch Text in anderen Apps lesen können. Das ist nicht immer der Fall (ChromeVox ist eine Browser-Erweiterung), aber normalerweise neigen Bildschirmleser dazu, auf leicht unterschiedliche Weise zu handeln und haben unterschiedliche Steuerungen, daher müssen Sie die Dokumentation für Ihren gewählten Bildschirmleser konsultieren, um alle Details zu erhalten - gesagt, dass sie alle im Grunde auf dieselbe Weise arbeiten.

Lassen Sie uns einige Tests mit ein paar verschiedenen Bildschirmlesern durchgehen, um Ihnen eine allgemeine Vorstellung zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Entwerfen für Bildschirmleser-Kompatibilität](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen über die Nutzung von Bildschirmlesern und was am besten für Bildschirmleser funktioniert. Siehe auch [Screen Reader User Survey #9 Results](https://webaim.org/projects/screenreadersurvey9/#used) für einige interessante Statistiken zur Bildschirmlesernutzung.

#### VoiceOver

VoiceOver (VO) ist kostenlos mit Ihrem Mac/iPhone/iPad enthalten, sodass es nützlich ist, auf dem Desktop/Mobilgerät zu testen, wenn Sie Apple-Produkte verwenden. Wir werden es auf macOS auf einem MacBook Pro testen.

Um es einzuschalten, drücken Sie Cmd + F5. Wenn Sie VO noch nie verwendet haben, wird Ihnen ein Willkommensbildschirm angezeigt, auf dem Sie wählen können, ob Sie VO starten und ein wirklich nützliches Tutorial durchlaufen möchten, um zu lernen, wie Sie es verwenden. Um es wieder auszuschalten, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen — es ist ein wirklich nützlicher Weg, um VO zu lernen.

Wenn VO eingeschaltet ist, sieht die Anzeige größtenteils gleich aus, aber Sie sehen ein schwarzes Kästchen unten links auf dem Bildschirm, das Informationen darüber enthält, was VO derzeit ausgewählt hat. Zudem wird die aktuelle Auswahl hervorgehoben, mit einem schwarzen Rahmen — diese Hervorhebung wird als **VO-Cursor** bezeichnet.

![Ein Beispielscreenshot, der einen Accessibility-Test mit VoiceOver auf der MSZ-Startseite (Mozilla Support) zeigt. Der untere linke Bereich des Bildes hebt die auf der Webseite ausgewählten Informationen hervor.](voiceover.png)

Um VO zu verwenden, werden Sie häufig den "VO-Modifizierer" verwenden — dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den tatsächlichen VO-Tastaturkürzeln drücken müssen, um sie funktionieren zu lassen. Die Verwendung eines Modifizierers wie diesem ist bei Bildschirmlesern üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen kollidieren. Im Fall von VO kann der Modifizierer entweder CapsLock oder Ctrl + Option sein.

VO hat viele Tastaturbefehle, und wir werden nicht alle hier auflisten. Die grundlegendsten, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkürzeln bedeutet "VO" "der VoiceOver-Modifizierer".

<table class="standard-table no-markdown">
  <caption>
    Die gängigsten VoiceOver-Tastaturbefehle
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
        Auswählen/Aktivieren von Elementen, die der VO-Cursor markiert hat. Dazu gehören auch im Rotor ausgewählte Elemente (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + Umschalt + Pfeil nach unten</td>
      <td>
        In eine Gruppe von Elementen (wie eine HTML-Tabelle oder ein Formular usw.) wechseln. Innerhalb einer Gruppe können Sie sich herumbewegen und Elemente innerhalb dieser Gruppe normal auswählen.
      </td>
    </tr>
    <tr>
      <td>VO + Umschalt + Pfeil nach oben</td>
      <td>Aus einer Gruppe herauswechseln.</td>
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
      <td>VO + C + C (zwei Cs hintereinander)</td>
      <td>
        (wenn in einer Tabelle) Lesen Sie die gesamte aktuelle Spalte, einschließlich der Kopfzeile.
      </td>
    </tr>
    <tr>
      <td>VO + R + R (zwei Rs hintereinander)</td>
      <td>
        (wenn in einer Tabelle) Lesen Sie die gesamte aktuelle Zeile, einschließlich der Kopfzeilen, die zu jeder Zelle gehören.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltaste links, VO + Pfeiltaste rechts</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie einem Datum oder Zeitauswahl) Wechseln Sie zwischen Optionen.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltaste nach oben, VO + Pfeiltaste nach unten</td>
      <td>
        (wenn in einigen horizontalen Optionen, wie einem Datum oder Zeitauswahl) Ändern Sie die aktuelle Option.
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        Verwenden Sie den Rotor, der Listen von Überschriften, Links, Formularsteuerungen usw. zur einfachen Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltaste links, VO + Pfeiltaste rechts</td>
      <td>
        (wenn im Rotor) Wechseln Sie zwischen verschiedenen Listen im Rotor.
      </td>
    </tr>
    <tr>
      <td>VO + Pfeiltaste hoch, VO + Pfeiltaste runter</td>
      <td>
        (wenn im Rotor) Wechseln Sie zwischen verschiedenen Elementen in der aktuellen Rotorliste.
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn im Rotor) Rotor verlassen.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Sprache pausieren/fortsetzen.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Die letzte Sprachaufforderung neu starten.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>In das Mac-Dock gehen, damit Sie dort Apps auswählen können.</td>
    </tr>
  </tbody>
</table>

Dies scheint eine Menge an Befehlen zu sein, aber es ist nicht so schlimm, wenn man sich daran gewöhnt, und VO gibt Ihnen regelmäßig Erinnerungen, welche Befehle in bestimmten Situationen zu verwenden sind. Spielen Sie jetzt mit VO herum; Sie können dann einige unserer Beispiele im Abschnitt [Bildschirmleser-Tests](#bildschirmleser-tests) ausprobieren.

#### NVDA

NVDA ist nur für Windows und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob sie eine Spende leisten oder es kostenlos herunterladen möchten; Sie müssen zudem Ihre E-Mail-Adresse angeben, bevor Sie es herunterladen können.
2. Sobald es heruntergeladen ist, installieren Sie es — doppelklicken Sie auf das Installationsprogramm, akzeptieren Sie die Lizenz und folgen Sie den Aufforderungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie das Tastenkürzel Strg + Alt + N. Bei Start sehen Sie den NVDA-Willkommensdialog. Hier können Sie aus ein paar Optionen wählen und dann die _OK_-Taste drücken, um zu beginnen.

NVDA ist jetzt auf Ihrem Computer aktiv.

Um NVDA zu verwenden, werden Sie den "NVDA Modifizierer" häufig verwenden — dies ist eine Taste, die Sie zusätzlich zu den tatsächlichen NVDA-Tastaturkürzeln drücken müssen, um sie funktioneren zu lassen. Die Verwendung eines Modifizierers wie diesem ist bei Bildschirmlesern üblich, um zu verhindern, dass ihre Befehle mit anderen Befehlen kollidieren. Im Fall von NVDA kann der Modifizierer entweder Einfügen (standardmäßig) oder CapsLock sein (kann durch Aktivieren des ersten Kontrollkästchens im NVDA-Willkommensdialog gewählt werden, bevor Sie _OK_ drücken).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es markiert, wo es sich befindet und was es tut. Beim Durchsuchen von Überschriften, Listen usw. werden Elemente, auf denen Sie ausgewählt sind, im Allgemeinen mit einem subtilen Umriss hervorgehoben, aber das ist nicht immer bei allen Dingen der Fall. Wenn Sie sich komplett verirren, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben neu zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden nicht alle hier auflisten. Die grundlegendsten, die Sie für das Testen von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. In den Tastaturkürzeln bedeutet "NVDA" "der NVDA-Modifizierer".

<table class="standard-table no-markdown">
  <caption>
    Die gängigsten NVDA-Tastaturbefehle
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
      <td>Schalten Sie NVDA wieder aus, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeiltaste hoch</td>
      <td>Aktuelle Zeile lesen.</td>
    </tr>
    <tr>
      <td>NVDA + Pfeiltaste runter</td>
      <td>Lesen Sie ab der aktuellen Position.</td>
    </tr>
    <tr>
      <td>Pfeiltaste hoch und Pfeiltaste runter oder Umschalt + Tab und Tab</td>
      <td>Wechseln Sie zum vorherigen/nächsten Element auf der Seite und lesen Sie es.</td>
    </tr>
    <tr>
      <td>Pfeiltaste links und Pfeiltaste rechts</td>
      <td>Wechseln Sie zum vorherigen/nächsten Zeichen im aktuellen Element und lesen Sie es.</td>
    </tr>
    <tr>
      <td>Umschalt + H und H</td>
      <td>Wechseln Sie zur vorherigen/nächsten Überschrift und lesen Sie sie.</td>
    </tr>
    <tr>
      <td>Umschalt + K und K</td>
      <td>Wechseln Sie zum vorherigen/nächsten Link und lesen Sie ihn.</td>
    </tr>
    <tr>
      <td>Umschalt + D und D</td>
      <td>
        Wechseln Sie zum vorherigen/nächsten Dokument-Landmark (z.B. <code>&#x3C;nav></code>)
        und lesen Sie ihn.
      </td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Wechseln Sie zur vorherigen/nächsten Überschrift (Level 1–6) und lesen Sie sie.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Gehen Sie zurück/vorwärts zur vorherigen/nächsten Formulareingabe und konzentrieren Sie sich darauf.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Wechseln Sie zur vorherigen/nächsten Datentabelle und konzentrieren Sie sich darauf.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Wechseln Sie zur vorherigen/nächsten Schaltfläche und lesen Sie ihr Label.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Wechseln Sie zur vorherigen/nächsten Liste und lesen Sie ihre erste Listeneinheit.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Wechseln Sie zur vorherigen/nächsten Listeneinheit und lesen Sie sie.</td>
    </tr>
    <tr>
      <td>Eingabetaste/Return</td>
      <td>
        (wenn ein Link/eine Schaltfläche oder ein anderes aktivierbares Element ausgewählt ist) Aktivieren Sie das Element.
      </td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>
        (wenn ein Formular ausgewählt ist) Betreten Sie das Formular, damit einzelne Elemente ausgewählt werden können,
        oder verlassen Sie das Formular, wenn Sie bereits in ihm sind.
      </td>
    </tr>
    <tr>
      <td>Umschalt Tab und Tab</td>
      <td>(wenn im Formular) Wechseln Sie zwischen Formulareingaben.</td>
    </tr>
    <tr>
      <td>Pfeiltaste hoch und Pfeiltaste runter</td>
      <td>
        (wenn im Formular) Ändern Sie die Formulareingabewerte (im Fall von Boxen wie: auswählen Boxen).
      </td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(wenn im Formular) Wählen Sie den ausgewählten Wert aus.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Wechseln Sie zwischen den Zellen der Tabelle.</td>
    </tr>
  </tbody>
</table>

#### Bildschirmleser-Tests

Jetzt, da Sie sich daran gewöhnt haben, einen Bildschirmleser zu verwenden, möchten wir, dass Sie ihn verwenden, um einige schnelle Barrierefreiheitstests durchzuführen, um eine Vorstellung davon zu bekommen, wie Bildschirmleser mit guten und schlechten Webseitenfeatures umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und beachten Sie, wie die Überschriften vom Bildschirmleser gefunden werden und für die Navigation verfügbar sind. Schauen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie der Bildschirmleser keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich das wäre, wenn Sie versuchen, eine wirklich lange Textseite zu navigieren.
- Schauen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und bemerken Sie, wie sie im Kontext Sinn ergeben. Dies ist nicht der Fall bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) — sie sind alle nur "hier klicken".
- Schauen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und bemerken Sie, wie die Formulareingaben durch ihre Beschriftungen beschrieben werden, weil wir `<label>`-Elemente richtig verwendet haben. Bei [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie eine unhilfreiche Bezeichnung wie "leer".
- Sehen Sie sich unser [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html)-Beispiel an und sehen Sie, wie der Bildschirmleser in der Lage ist, Spalten und Zeilen von Inhalten zu verknüpfen und sie zusammen vorzulesen, weil wir Kopfzeilen richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine Zellen assoziiert werden. Beachten Sie, dass NVDA sich leicht merkwürdig verhält, wenn Sie haben nur eine einzelne Tabelle auf einer Seite; Sie könnten die [Tabelle-Testseite von WebAIM](https://webaim.org/articles/nvda/tables.htm) stattdessen ausprobieren.
- Werfen Sie einen Blick auf das [WAI-ARIA Live Regions Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm), das wir zuvor gesehen haben, und bemerken Sie, wie der Bildschirmleser den ständig aktualisierten Abschnitt vorliest, während er aktualisiert wird.

### Benutzer-Tests

Wie bereits erwähnt, können Sie sich nicht allein auf automatisierte Tools verlassen, um Barrierefreiheitsprobleme auf Ihrer Seite zu bestimmen. Es wird empfohlen, dass, wenn Sie Ihren Testplan erstellen, Sie – soweit möglich – einige Barrierefreiheits-Benutzergruppen einbeziehen (siehe unseren [Benutzer-Test](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#user_testing) Abschnitt im vorherigen Kurs für mehr Kontext). Versuchen Sie, einige Benutzer von Bildschirmlesern, einige Benutzer, die nur die Tastatur verwenden, einige nicht hörende Benutzer und vielleicht andere Gruppen einzubeziehen, die Ihrer Anforderungen entsprechen.

## Checkliste für Barrierefreiheitstests

Die folgende Liste bietet Ihnen eine Checkliste, der Sie folgen sollten, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheitstests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validierung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Prüftools](#prüftools).
2. Überprüfen Sie, ob Ihr Inhalt Sinn ergibt, wenn das CSS ausgeschaltet ist.
3. Stellen Sie sicher, dass Ihre Funktionalität [tastaturzugänglich](#nutzung_nativer_tastaturzugänglichkeit) ist. Testen Sie mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihr nicht-Text-Inhalt über [Textalternativen](#textalternativen) verfügt. Ein [Prüftool](#prüftools) ist gut, um solche Probleme zu erkennen.
5. Stellen Sie sicher, dass der [Farbkontrast](#farbe_und_farbkontrast) Ihrer Website akzeptabel ist, indem Sie ein geeignetes Prüfwerkzeug verwenden.
6. Stellen Sie sicher, dass der [versteckte Inhalt](#ausblenden_von_inhalten) von Bildschirmlesern sichtbar ist.
7. Stellen Sie sicher, dass die Funktionalität ohne JavaScript verwendbar ist, wo immer möglich.
8. Verwenden Sie ARIA, um die Barrierefreiheit gegebenenfalls zu verbessern.
9. Führen Sie Ihre Website mit einem [Prüftool](#prüftools).
10. Testen Sie es mit einem Bildschirmleser.
11. Fügen Sie eine Barrierefreiheitspolitik/-erklärung irgendwo auffindbar auf Ihrer Seite ein, um zu sagen, was Sie getan haben.

## Hilfe finden

Es gibt viele andere Probleme, die Sie bei der Barrierefreiheit antreffen werden; das Wichtigste, das Sie wirklich wissen müssen, ist, wie Sie online Antworten finden können. Konsultieren Sie den Abschnitt [Hilfe finden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help) des HTML- und CSS-Artikels für einige gute Hinweise.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel ein gutes Fundament in den Hauptproblemen der Barrierefreiheit geliefert, die Sie möglicherweise antreffen, und wie man sie testet und überwindet.

Im nächsten Artikel werden wir die Feature-Erkennung näher betrachten.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}
