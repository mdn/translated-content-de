---
title: Umgang mit häufigen Barrierefreiheitsproblemen
slug: Learn/Tools_and_testing/Cross_browser_testing/Accessibility
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}

Als nächstes widmen wir uns der Barrierefreiheit und bieten Informationen zu häufigen Problemen, wie man einfache Tests durchführt und wie man Auditierungs-/Automatisierungstools zur Erkennung von Barrierefreiheitsproblemen nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung der
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Grundprinzipien des Cross-Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige Barrierefreiheitsprobleme zu diagnostizieren und geeignete Werkzeuge und Techniken zu verwenden, um diese zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Barrierefreiheit?

Wenn wir im Kontext der Webtechnologie von Barrierefreiheit sprechen, denken die meisten Menschen sofort daran, sicherzustellen, dass Webseiten/Apps von Menschen mit Behinderungen genutzt werden können, zum Beispiel:

- Menschen mit Sehbeeinträchtigungen, die Bildschirmleser oder Vergrößerung/Zoom verwenden, um Text zugänglich zu machen.
- Menschen mit motorischen Beeinträchtigungen, die die Tastatur (oder andere nicht-mausbasierte Funktionen) nutzen, um Webseitenfunktionen zu aktivieren.
- Menschen mit Hörbeeinträchtigungen, die auf Untertitel oder andere Textalternativen für Audio-/Videoinhalte angewiesen sind.

Es ist jedoch falsch zu sagen, dass Barrierefreiheit nur auf Behinderungen beschränkt ist. Das eigentliche Ziel der Barrierefreiheit ist es, Ihre Webseiten/Apps für möglichst viele Menschen in möglichst vielen Kontexten nutzbar zu machen, nicht nur für Benutzer, die leistungsstarke Desktop-Computer verwenden. Einige Beispiele könnten sein:

- Benutzer auf mobilen Geräten.
- Benutzer auf alternativen Browser-Geräten wie Fernsehern, Uhren usw.
- Benutzer älterer Geräte, die möglicherweise nicht über die neuesten Browser verfügen.
- Benutzer von Geräten mit geringerer Spezifikation, die möglicherweise langsame Prozessoren haben.

In gewisser Weise dreht sich dieses gesamte Modul um Barrierefreiheit — Cross-Browser-Tests stellen sicher, dass Ihre Websites von möglichst vielen Menschen genutzt werden können. [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility) definiert Barrierefreiheit vollständiger und gründlicher als dieser Artikel.

Nichtsdestotrotz wird dieser Artikel Cross-Browser- und Testprobleme rund um Menschen mit Behinderungen abdecken und wie sie das Web nutzen. Wir haben bereits in anderen Bereichen des Moduls darüber gesprochen, wie z. B. [Responsives Design](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#responsive_design_problems) und [Leistung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#performance_issues).

> [!NOTE]
> Ähnlich wie bei vielen Dingen in der Webentwicklung geht es bei der Barrierefreiheit nicht um einen Erfolg von 100 %; 100 % Barrierefreiheit sind für alle Inhalte praktisch unmöglich zu erreichen, insbesondere wenn Websites komplexer werden. Stattdessen geht es darum, einen angemessenen Aufwand zu betreiben, um möglichst viele Ihrer Inhalte für möglichst viele Menschen zugänglich zu machen, indem Sie defensiven Code schreiben und bewährte Verfahren einhalten.

## Häufige Barrierefreiheitsprobleme

In diesem Abschnitt werden einige der Hauptprobleme im Zusammenhang mit der Web-Barrierefreiheit im Zusammenhang mit spezifischen Technologien detailliert beschrieben, einschließlich bewährter Vorgehensweisen und einiger schneller Tests, die Sie durchführen können, um zu sehen, ob Ihre Websites in die richtige Richtung gehen.

> [!NOTE]
> Barrierefreiheit ist moralisch die richtige Sache, und gut fürs Geschäft (die Zahl der Nutzer mit Behinderungen, Nutzer auf mobilen Geräten etc. stellen bedeutende Marktsegmente dar), aber es besteht auch eine gesetzliche Verpflichtung in vielen Teilen der Welt, Webinhalte für Menschen mit Behinderungen zugänglich zu machen. Lesen Sie [Barrierefreiheitsrichtlinien und das Gesetz](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law) für weitere Informationen.

### HTML

Semantisches HTML (wo die Elemente für ihren korrekten Zweck verwendet werden) ist von Haus aus zugänglich — solche Inhalte sind für sehende Betrachter lesbar (sofern Sie keine dummen Dinge tun, wie z. B. den Text viel zu klein machen oder ihn mit CSS verstecken), aber sie werden auch von unterstützenden Technologien wie Bildschirmlesern (Apps, die eine Webseite buchstäblich für ihre Benutzer vorlesen) nutzbar sein und auch andere Vorteile bieten.

#### Semantische Struktur

Der wichtigste schnelle Gewinn bei semantischem HTML ist die Verwendung einer Struktur von Überschriften und Absätzen für Ihre Inhalte; dies liegt daran, dass Bildschirmleser-Benutzer dazu neigen, die Überschriften eines Dokuments als Wegweiser zu verwenden, um die benötigten Inhalte schneller zu finden. Wenn Ihre Inhalte keine Überschriften haben, erhalten sie nur eine große Textwand ohne Wegweiser, um etwas zu finden. Beispiele für schlechtes und gutes HTML:

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

Darüber hinaus sollten Ihre Inhalte in ihrer Quellreihenfolge logisch sinnvoll sein — Sie können sie später jederzeit mit CSS platzieren, wo Sie möchten, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten.

Als Test können Sie das CSS einer Website deaktivieren und sehen, wie verständlich sie ohne CSS ist. Sie könnten dies manuell tun, indem Sie das CSS einfach aus Ihrem Code entfernen, aber der einfachste Weg ist die Verwendung von Browserfunktionen, zum Beispiel:

- Firefox: Wählen Sie im Hauptmenü _Ansicht > Seitenstil > Kein Stil_.
- Safari: Wählen Sie im Hauptmenü _Entwickeln > Stile deaktivieren_ (um das Menü _Entwickeln_ zu aktivieren, wählen Sie _Safari > Voreinstellungen > Erweitert > Entwicklermenü in der Menüleiste anzeigen_).
- Chrome: Installieren Sie die Erweiterung Web Developer Toolbar, dann starten Sie den Browser neu. Klicken Sie auf das angezeigte Zahnradsymbol und wählen Sie _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie im Hauptmenü _Ansicht > Stil > Kein Stil_.

#### Nutzung der nativen Tastaturzugänglichkeit

Bestimmte HTML-Funktionen können nur mit der Tastatur ausgewählt werden — dies ist Standardverhalten und seit den frühen Tagen des Webs verfügbar. Die Elemente, die diese Fähigkeit besitzen, sind die gängigen, die es den Benutzern ermöglichen, mit Webseiten zu interagieren, nämlich Links, {{htmlelement("button")}}s und Formularelemente wie {{htmlelement("input")}}.

Sie können dies anhand unseres Beispiels [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) ausprobieren (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) — öffnen Sie es in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken; nach ein paar Druckvorgängen sollten Sie sehen, dass sich die Tabulaturfokussierung durch die verschiedenen fokussierbaren Elemente bewegt; die fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (dieser unterscheidet sich leicht zwischen verschiedenen Browsern), sodass Sie erkennen können, welches Element gerade fokussiert ist.

![Ein Screenshot von drei Schaltflächen, der Beispiel des Standardverhaltens interaktiver nativer Elemente zeigt. Die dritte Schaltfläche ist durch einen blauen Rand hervorgehoben, um ihren Fokuszustand anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> In Firefox können Sie auch ein Overlay aktivieren, das die Registerreihenfolge der Seite anzeigt. Weitere Informationen finden Sie unter: [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Dann können Sie die Eingabetaste/Return drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingefügt, um den Schaltflächen eine Nachricht zuzuweisen), oder beginnen Sie mit dem Tippen, um Text in ein Texteingabefeld einzugeben (andere Formularelemente haben verschiedene Steuerungen, zum Beispiel kann das Element {{htmlelement("select")}} seine Optionen mit den Pfeiltasten nach oben und unten anzeigen und durchblättern).

Beachten Sie, dass verschiedene Browser möglicherweise unterschiedliche Tastatursteuerungsoptionen bieten. Die meisten modernen Browser folgen dem oben beschriebenen Tabulatormuster (Sie können auch Umschalt + Tab verwenden, um rückwärts durch die fokussierbaren Elemente zu navigieren), aber einige Browser haben ihre eigenen Eigenheiten:

- Safari auf dem Mac ermöglicht standardmäßig nicht das Durchblättern von Links; um dies zu aktivieren, öffnen Sie _System Einstellungen_, scrollen Sie zu _Tastatur_ und aktivieren Sie _Tastaturnavigation_. Wenn Sie eine ältere Version von macOS verwenden, lesen Sie [Verwenden Sie Ihre Tastatur wie eine Maus mit Mac](https://support.apple.com/guide/mac-help/use-your-keyboard-like-a-mouse-mh27469/mac) auf Apples macOS-Benutzerhandbuch.

> [!WARNING]
> Sie sollten diese Art von Test/Überprüfung bei jeder neuen Seite durchführen, die Sie schreiben — stellen Sie sicher, dass Funktionen über die Tastatur zugänglich sind und dass die Registerreihenfolge einen sinnvollen Navigationspfad durch das Dokument bietet.

Dieses Beispiel zeigt die Bedeutung der Verwendung der richtigen semantischen Elemente für die jeweilige Aufgabe auf. Es ist möglich, _jedes_ Element so zu stylen, dass es wie ein Link oder eine Schaltfläche mit CSS aussieht und sich mit JavaScript wie ein Link oder eine Schaltfläche verhält, aber sie sind dann keine tatsächlichen Links oder Schaltflächen, und Sie verlieren viel der Zugänglichkeit, die diese Elemente Ihnen kostenlos bieten. Also tun Sie es nicht, wenn Sie es vermeiden können.

Ein weiterer Tipp: Wie in unserem Beispiel gezeigt, können Sie steuern, wie Ihre fokussierbaren Elemente aussehen, wenn sie fokussiert sind, indem Sie die Pseudoklasse [:focus](/de/docs/Web/CSS/:focus) verwenden. Es ist eine gute Idee, Fokus- und Hover-Stile zu kombinieren, sodass Ihre Benutzer diesen visuellen Hinweis bekommen, dass eine Steuerung etwas bewirken wird, wenn sie aktiviert wird, unabhängig davon, ob sie Maus oder Tastatur verwenden:

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
> Wenn Sie sich entscheiden, die Standard-Fokus-Styling mit CSS zu entfernen, stellen Sie sicher, dass Sie es durch etwas ersetzen, das besser zu Ihrem Design passt — es ist ein sehr wertvolles Barrierefreiheitswerkzeug und sollte nicht entfernt werden.

#### Einbau von Tastaturzugänglichkeit

Manchmal ist es nicht möglich, die Tastaturzugänglichkeit zu verlieren. Möglicherweise haben Sie eine Website geerbt, bei der die Semantik nicht sehr gut ist (vielleicht haben Sie ein schreckliches CMS, das Schaltflächen mit `<div>`s generiert), oder Sie verwenden eine komplexe Steuerung, die keine Tastaturzugänglichkeit eingebaut hat, wie das HTML-Element {{htmlelement("video")}} (erstaunlicherweise ist Opera der einzige Browser, der es Ihnen ermöglicht, durch die Standard-Browsersteuerungen des `<video>`-Elements zu tabben). Hier haben Sie einige Möglichkeiten:

1. Erstellen Sie benutzerdefinierte Steuerelemente mit `<button>`-Elementen (die wir standardmäßig tabbar machen können!) und JavaScript, um ihre Funktionalität zu verbinden. Sehen Sie sich [Erstellen eines plattformübergreifenden Videoplayer](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für einige gute Beispiele an.
2. Erstellen Sie Tastenkombinationen über JavaScript, sodass Funktionen aktiviert werden, wenn Sie bestimmte Tasten auf der Tastatur drücken. Sehen Sie sich [Desktop-Maus- und Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) für einige spielebezogene Beispiele an, die für jeden Zweck angepasst werden können.
3. Verwenden Sie einige interessante Taktiken, um das Verhalten von Schaltflächen vorzutäuschen. Nehmen Sie zum Beispiel unser Beispiel [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>`-Schaltflächen die Fähigkeit gegeben, fokussiert zu werden (einschließlich über Tabulator) indem wir jedem den Attribut `tabindex="0"` gegeben haben (siehe den Artikel von WebAIM zu [tabindex](https://webaim.org/techniques/keyboard/tabindex) für wirklich nützliche Details). Dies ermöglicht es uns, zu den Schaltflächen zu tabben, aber nicht, sie mit der Eingabe-/Return-Taste zu aktivieren. Dazu mussten wir das folgende JavaScript-Trickereien hinzufügen:

   ```js
   document.onkeydown = (e) => {
     if (e.code === "Enter") {
       // The Enter/Return key
       document.activeElement.onclick(e);
     }
   };
   ```

   Hier fügen wir einen Listener zum `document`-Objekt hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir überprüfen, welche Taste über die `code`-Eigenschaft des Ereignisobjekts gedrückt wurde; wenn es der Code ist, der der Eingabe-/Return-Taste entspricht, führen wir die im `onclick`-Handler der Schaltfläche gespeicherte Funktion mit `document.activeElement.onclick()` aus. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

> [!NOTE]
> Diese Technik funktioniert nur, wenn Sie Ihre ursprünglichen Ereignishandler über Ereignishandlereigenschaften setzten (z. B. `onclick`). `addEventListener` funktioniert nicht. Dies ist eine Menge zusätzlichen Aufwandes, um die Funktionalität einzubauen. Und es gibt sicherlich andere Probleme damit. Besser ist es, von Anfang an das richtige Element für die entsprechende Aufgabe zu verwenden.

#### Textalternativen

Textalternativen sind für die Barrierefreiheit sehr wichtig — wenn eine Person eine Seh- oder Hörbeeinträchtigung hat, die sie daran hindert, einige Inhalte zu sehen oder zu hören, dann ist das ein Problem. Die einfachste verfügbare Textalternative ist das einfache `alt`-Attribut, das wir in allen Bildern, die relevante Inhalte enthalten, einfügen sollten. Es sollte eine Beschreibung des Bildes enthalten, die seine Bedeutung und seinen Inhalt auf der Seite erfolgreich vermittelt, damit es von einem Bildschirmleser erfasst und dem Benutzer vorgelesen werden kann.

> [!NOTE]
> Weitere Informationen finden Sie unter [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).

Fehlende Alttexte können auf verschiedene Arten getestet werden, beispielsweise mit Barrierefreiheits-[Audittools](#audit-tools).

Alttexte sind für Video- und Audioinhalte etwas komplexer. Es gibt eine Möglichkeit, Texttracks (z. B. Untertitel) zu definieren und sie beim Abspielen von Videos anzuzeigen, in Form des Elements {{htmlelement("track")}} und des Formats [WebVTT](/de/docs/Web/API/WebVTT_API) (siehe [Hinzufügen von Untertiteln und Beschriftungen zu HTML-Videos](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für ein ausführliches Tutorial). Die [Browser-Kompatibilität](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#browser_compatibility) für diese Funktionen ist ziemlich gut, aber wenn Sie Textalternativen für Audio bereitstellen oder ältere Browser unterstützen möchten, ist ein einfaches Texttranskript, das irgendwo auf der Seite oder auf einer separaten Seite präsentiert wird, möglicherweise eine gute Idee.

#### Elemente Beziehungen und Kontext

Es gibt bestimmte Funktionen und Best Practices in HTML, die dazu dienen, Kontext und Beziehungen zwischen Elementen bereitzustellen, wenn keine existieren. Die drei häufigsten Beispiele sind Links, Formularbeschriftungen und Datentabellen.

Der Schlüssel zu zugänglichem Linktext ist, dass Bildschirmleser-Benutzer oft eine häufig verwendete Funktion verwenden, bei der sie eine Liste aller Links auf der Seite aufrufen. In diesem Fall muss der Linktext auch ohne Kontext sinnvoll sein. Eine Liste von Links mit den Bezeichnungen "hier klicken", "klick mich" usw. ist für die Barrierefreiheit wirklich schlecht. Es ist besser, wenn Linktexte im Kontext und ohne Kontext sinnvoll sind.

Als nächstes auf unserer Liste ist das Formular-{{htmlelement("label")}}-Element eine der zentralen Funktionen, die es uns ermöglicht, Formulare zugänglich zu machen. Das Problem mit Formularen ist, dass Sie Beschriftungen benötigen, um anzugeben, welche Daten in jedes Formulareingabefeld eingegeben werden sollen. Jede Beschriftung muss in einem {{htmlelement("label")}} eingefügt werden, um sie eindeutig mit ihrem Partnerformularelement zu verknüpfen (der `for`-Attributwert jedes `<label>` muss mit dem `id`-Wert des Formularelements übereinstimmen), und es wird auch dann sinnvoll sein, wenn die Quellreihenfolge nicht ganz logisch ist (was sie fairerweise sein sollte).

> [!NOTE]
> Weitere Informationen zu Linktexten und Formularbeschriftungen finden Sie unter [Bedeutungsvolle Textbezeichnungen](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels).

Schließlich ein kurzes Wort zu Datentabellen. Eine einfache Datentabelle kann mit sehr einfachem Markup geschrieben werden (siehe `bad-table.html` [live](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/html/bad-table.html)), aber diese hat Probleme — es gibt keine Möglichkeit für einen Bildschirmleser-Benutzer, Zeilen oder Spalten miteinander zu assoziieren, da als Datengruppen bestellt, um dies zu tun, müssen Sie wissen, was die Kopfzeilenzeilen sind und ob sie Zeilen oder Spalten usw. übergeordnet sind. Dies kann nur visuell für eine solche Tabelle erfolgen.

Wenn Sie sich stattdessen unser Beispiel `punk-bands-complete.html` ([live](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html), [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html)) ansehen, können Sie hier einige Barrierefreiheits-Unterstützungen erkennen, wie Tabellenschlagzeilen ({{htmlelement("th")}} und `scope`-Attribute), {{htmlelement("caption")}}-Element usw.

> [!NOTE]
> Für weitere Informationen zu zugänglichen Tabellen lesen Sie [Zugängliche Datentabellen](/de/docs/Learn/Accessibility/HTML#accessible_data_tables).

### CSS

CSS bietet im Allgemeinen weniger grundlegende Barrierefreiheitsfunktionen als HTML, kann jedoch genauso viel Schaden anrichten, wenn es falsch verwendet wird. Wir haben bereits ein paar Barrierefreiheits-Tipps im Zusammenhang mit CSS erwähnt:

- Verwenden Sie die richtigen semantischen Elemente, um verschiedene Inhalte in HTML zu markieren; wenn Sie einen anderen visuellen Effekt erzielen möchten, verwenden Sie CSS — missbrauchen Sie kein HTML-Element, um das gewünschte Erscheinungsbild zu erzielen. Wenn Sie beispielsweise größeren Text wünschen, verwenden Sie {{cssxref("font-size")}}, nicht ein {{htmlelement("Heading_Elements", "h1")}}-Element.
- Stellen Sie sicher, dass Ihre Quellreihenfolge auch ohne CSS Sinn macht; Sie können die Seite jederzeit mit CSS nach Belieben stylen.
- Stellen Sie sicher, dass interaktive Elemente wie Schaltflächen und Links entsprechende Fokus-/Hover-/aktive Zustände festgelegt haben, um dem Benutzer visuelle Hinweise auf ihre Funktion zu geben. Wenn Sie die Standardwerte aus stilistischen Gründen entfernen, stellen Sie sicher, dass Sie einige Ersatzstile einschließen.

Es gibt ein paar weitere Überlegungen, die Sie berücksichtigen sollten.

#### Farbe und Farbkontrast

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass sich die Text- (Vordergrund-) Farbe gut vom Hintergrund abhebt. Ihr Design sieht möglicherweise gut aus, aber es ist nutzlos, wenn Menschen mit Sehbeeinträchtigungen wie Farbenblindheit Ihre Inhalte nicht lesen können. Verwenden Sie ein Tool wie WebAIMs [Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastiert.

Ein weiterer Tipp ist, sich nicht allein auf Farben für Wegweiser/Informationen zu verlassen, da dies für diejenigen, die die Farbe nicht sehen können, keinen Wert hat. Anstatt beispielsweise erforderliche Formularfelder rot zu markieren, markieren Sie sie mit einem Sternchen und in Rot.

> [!NOTE]
> Ein hoher Kontrast ermöglicht es jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm verwendet, Webseiten in einer hellen Umgebung, wie z. B. Sonnenlicht, besser zu lesen.

#### Inhalte ausblenden

Es gibt viele Instanzen, in denen ein visuelles Design erfordern wird, dass nicht alle Inhalte gleichzeitig angezeigt werden. In unserem Beispiel [Tabbed Info Box](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html) an) haben wir zum Beispiel drei Informationsschaltflächen, aber wir [platzieren](/de/docs/Learn/CSS/CSS_layout/Positioning) sie übereinander und bieten Tabs an, die geklickt werden können, um jeden anzuzeigen (es ist auch tastaturzugänglich - Sie können alternativ Tab und Eingabetaste/Return verwenden, um sie auszuwählen).

![Ein Screenshot, der ein Beispiel für barrierefreies Verstecken und Anzeigen von Inhalten in Tabs zeigt. Das Beispiel hat drei Tabs, nämlich Tab 1, Tab 2 und Tab 3. Tab 1 ist derzeit fokussiert und aktiviert, um den Inhalt anzuzeigen.](20191022144107.png)

Benutzer von Bildschirmlesern stören sich an all dem nicht — sie sind mit dem Inhalt zufrieden, solange die Quellreihenfolge sinnvoll ist und sie darauf zugreifen können. Absolute Positionierung (wie in diesem Beispiel verwendet) gilt im Allgemeinen als einer der besten Mechanismen, um Inhalte für einen visuellen Effekt auszublenden, da sie Bildschirmlesern nicht den Zugriff auf sie verwehrt.

Auf der anderen Seite sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, weil diese tatsächlich den Inhalt vor Bildschirmlesern verstecken. Es sei denn natürlich, es gibt einen guten Grund, warum Sie möchten, dass dieser Inhalt Bildschirmlesern verborgen bleibt.

> **Note:** [Unsichtbarer Inhalt nur für Bildschirmleser](https://webaim.org/techniques/css/invisiblecontent/) bietet viele nützliche Details zu diesem Thema.

### JavaScript

JavaScript hat die gleichen Probleme wie CSS in Bezug auf Barrierefreiheit — es kann katastrophal für die Barrierefreiheit sein, wenn es schlecht verwendet oder überstrapaziert wird. Wir haben bereits auf einige Barrierefreiheitsprobleme in Bezug auf JavaScript hingewiesen, hauptsächlich im Bereich semantisches HTML — Sie sollten immer geeignetes semantisches HTML verwenden, um Funktionen zu implementieren, wo es verfügbar ist, z. B. Links und Schaltflächen verwenden. Verwenden Sie keine `<div>`-Elemente mit JavaScript-Code, um Funktionen vorzutäuschen, wenn dies überhaupt möglich ist — es ist fehleranfällig und mehr Aufwand als die kostenlose Funktionalität, die Ihnen HTML bietet.

#### Einfache Funktionalität

Im Allgemeinen sollte einfache Funktionalität nur mit dem vorhandenen HTML funktionieren — JavaScript sollte nur verwendet werden, um Funktionalität zu verbessern, nicht um sie vollständig einzubauen. Gute Verwendungen von JavaScript umfassen:

- Bereitstellung clientseitiger Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareingaben hinweist, ohne auf die Überprüfung der Daten durch den Server warten zu müssen. Wenn es nicht verfügbar ist, funktioniert das Formular trotzdem, aber die Validierung könnte langsamer sein.
- Bereitstellung benutzerdefinierter Steuerelemente für HTML `<video>`s, die für Benutzer, die nur die Tastatur verwenden, zugänglich sind (wie wir bereits gesagt haben, sind die Standard-Browsersteuerungen in den meisten Browsern nicht tastaturzugänglich).

> [!NOTE]
> WebAIMs [Zugängliches JavaScript](https://webaim.org/techniques/javascript/) bietet einige nützliche weitere Details zu Überlegungen für zugängliches JavaScript.

Komplexere JavaScript-Implementierungen können Probleme mit der Barrierefreiheit verursachen — Sie müssen tun, was Sie können. Zum Beispiel wäre es unvernünftig zu erwarten, dass Sie ein komplexes 3D-Spiel, das mit [WebGL](/de/docs/Glossary/WebGL) geschrieben wurde, zu 100 % für eine blinde Person zugänglich machen, aber Sie könnten [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, damit es für Benutzer ohne Maus verwendbar ist, und das Farbschema ausreichend kontrastreich gestalten, um auch für Menschen mit Farbdefiziten verwendbar zu sein.

#### Komplexe Funktionalität

Einer der Hauptbereiche, die problematisch für die Barrierefreiheit sind, sind komplexe Apps, die komplizierte Formularsteuerelemente (wie Datumsauswahlen) und dynamische Inhalte umfassen, die oft und inkrementell aktualisiert werden.

Nicht-native komplizierte Formularsteuerelemente sind problematisch, da sie dazu neigen, viele verschachtelte `<div>`s zu umfassen, und der Browser weiß nicht standardmäßig, was damit zu tun ist. Wenn Sie sie selbst erfinden, müssen Sie sicherstellen, dass sie tastaturzugänglich sind; wenn Sie eine Art Drittanbieter-Framework verwenden, überprüfen Sie sorgfältig die verfügbaren Optionen, um zu sehen, wie zugänglich sie sind, bevor Sie loslegen. [Bootstrap](https://getbootstrap.com/) scheint für die Barrierefreiheit ziemlich gut zu sein, wie jedoch [Bootstrap ein wenig barrierefreier machen](https://www.sitepoint.com/making-bootstrap-accessible/) von Rhiana Heath einige seiner Probleme (hauptsächlich in Bezug auf den Farbkontrast) untersucht und einige Lösungen bietet.

Regelmäßig aktualisierte dynamische Inhalte können ein Problem sein, weil Bildschirmleser-Benutzer sie möglicherweise verpassen, insbesondere wenn sie unerwartet aktualisiert werden. Wenn Sie eine einseitige App mit einem Haup-Bereich haben, der regelmäßig mit [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) oder [Fetch](/de/docs/Web/API/Fetch_API) aktualisiert wird, könnte ein Bildschirmleser-Benutzer diese Aktualisierungen verpassen.

#### WAI-ARIA

Müssen Sie solche komplexen Funktionen nutzen, oder reicht einfaches semantisches HTML stattdessen aus? Wenn Sie Komplexität benötigen, sollten Sie in Betracht ziehen, [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) (Accessible Rich Internet Applications) zu verwenden, eine Spezifikation, die Semantik (in Form neuer HTML-Attribute) für Elemente wie komplexe Formularsteuerelemente und aktualisierte Bereich bereitstellt, die von den meisten Browsern und Bildschirmlesern verstanden werden können.

Um mit komplexen Formular-Widgets umzugehen, müssen Sie ARIA-Attribute wie `roles` verwenden, um anzugeben, welche Rolle unterschiedliche Elemente in einem Widget haben (z. B. ob sie eine Registerkarte oder ein Registerkartenbereich sind), `aria-disabled`, um anzuzeigen, ob ein Steuerelement deaktiviert ist oder nicht, usw.

Um mit regelmäßig aktualisierten Inhaltsbereichen umzugehen, können Sie das Attribut `aria-live` verwenden, welches einen aktualisierten Bereich identifiziert. Sein Wert gibt an, wie dringend es der Bildschirmleser lesen soll:

- `off:` Die Standardeinstellung. Updates sollten nicht angekündigt werden.
- `polite`: Updates sollten nur dann angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`: Updates sollten dem Benutzer so bald wie möglich angekündigt werden.

Hier ist ein Beispiel:

```html
<p><span id="LiveRegion1" aria-live="polite" aria-atomic="false"></span></p>
```

Sie können ein Beispiel in Aktion auf Freedoms Scientific [ARIA (Accessible Rich Internet Applications) Live Regions](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) Beispiel sehen — der hervorgehobene Absatz sollte alle 10 Sekunden seine Inhalte aktualisieren, und ein Bildschirmleser sollte dies für den Benutzer vorlesen. [ARIA Live Regions - Atomic](https://www.freedomscientific.com/SurfsUp/AriaLiveRegionsAtomic.htm) bietet ein weiteres nützliches Beispiel.

Wir haben hier nicht den Raum, WAI-ARIA ausführlich zu behandeln, Sie können jedoch viel mehr darüber erfahren in [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics).

## Barrierefreiheits-Tools

Nun, da wir Barrierefreiheitsüberlegungen für verschiedene Webtechnologien abgedeckt haben, einschließlich einiger Testtechniken (wie Tastaturnavigation und Farbkontrasttests), lassen Sie uns einige andere Tools betrachten, die Sie bei der Durchführung von Barrierefreiheitsprüfungen nutzen können.

### Audit-Tools

Es gibt eine Reihe von Audit-Tools verfügbar, in die Sie Ihre Webseiten einspeisen können. Sie werden diese prüfen und Ihnen eine Liste der Barrierefreiheitsprobleme auf der Seite zurückgeben. Lassen Sie uns ein Beispiel betrachten, indem wir [Wave](https://wave.webaim.org/), ein Online-Testtool für Barrierefreiheit das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt, verwenden.

1. Gehen Sie zur [Wellen-Startseite](https://wave.webaim.org/).
2. Geben Sie die URL unseres Beispiel [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) in das Text-Eingabeelement oben auf der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil auf der rechten Kante des Eingabeelements.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme reagieren. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu jedem der von Waves Bewertung identifizierten Probleme zu erhalten.

> [!NOTE]
> Solche Tools reichen allein nicht aus, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination aus diesen, Wissen und Erfahrung, Benutzertests usw. um ein vollständiges Bild zu erhalten.

### Automatisierungstools

[Deque's aXe-Tool](https://www.deque.com/axe/) geht noch einen Schritt weiter als die oben genannten Audittools. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitsfehler zurück. Seine nützlichste Form ist wahrscheinlich die der Browsererweiterungen:

- [aXe für Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe für Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen einen Barrierefreiheits-Tab zu den Entwickler-Tools des Browsers hinzu. Als Beispiel haben wir die Firefox-Version installiert und sie verwendet, um unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) Beispiel zu überprüfen. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot der Barrierefreiheitsprobleme, die durch das Axe-Tool identifiziert wurden.](axe-screenshot.png)

aXe kann auch über `npm` installiert und mit Task-Runnern wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungsframeworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Test-Frameworks wie [Jasmine](https://jasmine.github.io/) und einige mehr integriert werden (siehe die [Haupt-aXe-Seite](https://www.deque.com/axe/) für Details).

### Bildschirmleser

Es ist auf jeden Fall lohnenswert, Tests mit einem Bildschirmleser durchzuführen, um zu erfahren, wie stark sehbehinderte Menschen das Web nutzen. Es gibt einige Bildschirmleser, die Sie verwenden können:

- Einige sind kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und MacOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind in das Betriebssystem integriert, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (MacOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Normalerweise sind Bildschirmleser separate Apps, die auf dem Host-Betriebssystem laufen und nicht nur Webseiten, sondern auch Text in anderen Apps lesen können. Dies ist nicht immer der Fall (ChromeVox ist eine Browsererweiterung), aber normalerweise neigen Bildschirmleser dazu, sich in leicht unterschiedlichen Weisen zu verhalten und verschiedene Steuerungen zu haben. Sie müssen also die Dokumentation zu Ihrem gewählten Bildschirmleser konsultieren, um alle Details zu erfahren — aber sie arbeiten im Grunde alle auf ähnliche Weise.

Lassen Sie uns einige Tests mit ein paar verschiedenen Bildschirmlesern durchführen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie man mit ihnen testet.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen über die Nutzung von Bildschirmlesern und was für sie am besten funktioniert. Siehe auch [Screen Reader User Survey #9 Results](https://webaim.org/projects/screenreadersurvey9/#used) für einige interessante Statistiken zur Verwendung von Bildschirmlesern.

#### VoiceOver

VoiceOver (VO) ist kostenlos mit Ihrem Mac/iPhone/iPad enthalten, was es nützlich für Tests auf Desktop-/Mobilgeräten macht, wenn Sie Apple-Produkte verwenden. Wir werden es auf MacOS auf einem MacBook Pro testen.

Um es zu aktivieren, drücken Sie Cmd + F5. Wenn Sie VO noch nie verwendet haben, wird Ihnen ein Willkommen-Bildschirm angezeigt, auf dem Sie auswählen können, ob Sie VO starten möchten oder nicht, und einen sehr nützlichen Tutorial durchgehen, um zu lernen, wie man es verwendet. Um es wieder zu deaktivieren, drücken Sie noch einmal Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen — es ist eine wirklich nützliche Möglichkeit, VO kennenzulernen.

Wenn VO aktiv ist, sieht das Display größtenteils gleich aus, aber Sie sehen unten links auf dem Bildschirm ein schwarzes Feld, das Informationen darüber enthält, was VO derzeit ausgewählt hat. Die aktuelle Auswahl wird auch mit einem schwarzen Rahmen hervorgehoben — dieses Highlight ist als **VO-Cursor** bekannt.

![Ein Beispielscreenshot, der einen Test der Barrierefreiheit mit VoiceOver auf der MDN-Startseite zeigt. Unten links im Bild ist eine Hervorhebung der auf der Webseite ausgewählten Informationen.](voiceover.png)

Um VO zu nutzen, werden Sie viel Gebrauch von dem „VO-Modifikator“ machen — dies ist eine Taste oder Tastenkombination, die Sie zusätzlich zu den eigentlichen VO-Tastaturbefehlen drücken müssen, um sie zum Funktionieren zu bringen. Einen solchen Modifikator zu verwenden, ist bei Bildschirmlesern üblich, um ihre Befehle davor zu bewahren, mit anderen Befehlen in Konflikt zu geraten. Bei VO kann der Modifikator entweder CapsLock oder Ctrl + Option sein.

VO hat viele Tastaturbefehle, und wir werden nicht alle hier auflisten. Die grundlegenden, die Sie für Tests von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. Bei den Tastaturkürzeln bedeutet „VO“ „der VoiceOver-Modifikator“.

<table class="standard-table no-markdown">
  <caption>
    Häufigste VoiceOver-Tastaturbefehle
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastenkombination</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VO + Pfeiltasten</td>
      <td>Bewegt den VO-Cursor nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Wählt/Aktiviert Elemente, die vom VO-Cursor hervorgehoben sind. Dies beinhaltet Elemente, die im Rotor (siehe unten) ausgewählt sind.
      </td>
    </tr>
    <tr>
      <td>VO + Shift + untere Pfeiltaste</td>
      <td>
        Betritt eine Gruppe von Elementen (wie eine HTML-Tabelle oder ein Formular usw.). Sobald man innerhalb einer Gruppe ist, kann man sich umherbewegen und Elemente innerhalb der Gruppe auswählen, indem man die oben genannten Befehle wie gewohnt verwendet.
      </td>
    </tr>
    <tr>
      <td>VO + Shift + obere Pfeiltaste</td>
      <td>Verlässt eine Gruppe.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(wenn man sich in einer Tabelle befindet) Liest die Überschrift der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(wenn man sich in einer Tabelle befindet) Liest die Überschrift der aktuellen Zeile.</td>
    </tr>
    <tr>
      <td>VO + C + C (zwei Cs nacheinander)</td>
      <td>
        (wenn man sich in einer Tabelle befindet) Liest die gesamte aktuelle Spalte einschließlich der Überschrift.
      </td>
    </tr>
    <tr>
      <td>VO + R + R (zwei Rs nacheinander)</td>
      <td>
        (wenn man sich in einer Tabelle befindet) Liest die gesamte aktuelle Zeile einschließlich der Überschriften, die zu jeder Zelle gehören.
      </td>
    </tr>
    <tr>
      <td>VO + linke Pfeiltaste, VO + rechte Pfeiltaste</td>
      <td>
        (wenn man sich innerhalb einiger horizontaler Optionen befindet, z. B. eines Datums- oder Zeitpickers) Bewegt sich zwischen den Optionen.
      </td>
    </tr>
    <tr>
      <td>VO + obere Pfeiltaste, VO + untere Pfeiltaste</td>
      <td>
        (wenn man sich innerhalb einiger horizontaler Optionen befindet, z. B. eines Datums- oder Zeitpickers) Ändert die aktuelle Option.
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        Verwendet den Rotor, der Listen von Überschriften, Links, Formularsteuerungen usw. zur einfachen Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + linke Pfeiltaste, VO + rechte Pfeiltaste</td>
      <td>
        (wenn man sich innerhalb des Rotors befindet) Bewegt sich zwischen verschiedenen Listen, die im Rotor verfügbar sind.
      </td>
    </tr>
    <tr>
      <td>VO + obere Pfeiltaste, VO + untere Pfeiltaste</td>
      <td>
        (wenn man sich innerhalb einer Rotorliste befindet) Bewegt sich zwischen verschiedenen Elementen in der aktuellen Rotorliste.
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn man sich innerhalb des Rotors befindet) Verlasse den Rotor.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Pause/Wiedergabe der Sprache.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Wiederholt die letzte Sprachansage.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>Geht in das Dock des Macs, um dort laufende Apps auszuwählen.</td>
    </tr>
  </tbody>
</table>

Das scheint eine Menge an Befehlen zu sein, aber es ist nicht so schlimm, wenn man sich daran gewöhnt hat, und VO gibt einem regelmäßig Hinweise, welche Befehle man in bestimmten Situationen verwenden sollte. Probieren Sie VO jetzt ein wenig aus und gehen Sie dann weiter und probieren einige unserer Beispiele aus dem Abschnitt [Testen mit dem Screenreader](#screenreader-testen) aus.

#### NVDA

NVDA ist nur für Windows verfügbar, und Sie müssen es installieren.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen auch Ihre E-Mail-Adresse angeben, bevor Sie es herunterladen können.
2. Sobald der Download abgeschlossen ist, installieren Sie es — doppelklicken Sie auf das Installationsprogramm, akzeptieren Sie die Lizenz und folgen Sie den Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/Verknüpfung oder verwenden Sie die Tastenkombination Strg + Alt + N. Beim Start von NVDA sehen Sie den NVDA-Willkommensdialog. Hier können Sie einige Optionen auswählen und dann die _OK_-Taste drücken, um loszulegen.

NVDA ist nun auf Ihrem Computer aktiv.

Um NVDA zu verwenden, machen Sie viel Gebrauch vom „NVDA-Modifikator“ - dies ist eine Taste, die Sie zusätzlich zu den eigentlichen NVDA-Tastaturbefehlen drücken müssen, damit diese funktionieren. Einen solchen Modifikator zu verwenden, ist bei Bildschirmlesern üblich, um ihre Befehle davor zu bewahren, mit anderen Befehlen in Konflikt zu geraten. Bei NVDA kann der Modifikator entweder Einfügen (die Standardeinstellung) oder CapsLock (kann durch Markieren des ersten Kontrollkästchens im NVDA-Willkommensdialog vor dem Drücken von _OK_ ausgewählt werden) sein.

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug darauf, wie es anzeigt, wo es sich befindet und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden Elemente, die Sie ausgewählt haben, im Allgemeinen mit einer subtilen Umrahmung hervorgehoben, dies ist jedoch nicht immer der Fall bei allen Dingen. Wenn Sie komplett den Faden verlieren, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und von oben zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden nicht alle hier auflisten. Die grundlegenden, die Sie für Tests von Webseiten benötigen, sind in der folgenden Tabelle aufgeführt. Bei den Tastaturkürzeln bedeutet „NVDA“ „der NVDA-Modifikator“.

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten NVDA-Tastaturbefehle
  </caption>
  <thead>
    <tr>
      <th scope="col">Tastenkombination</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NVDA + Q</td>
      <td>Schaltet NVDA wieder aus, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + obere Pfeiltaste</td>
      <td>Liest die aktuelle Zeile.</td>
    </tr>
    <tr>
      <td>NVDA + untere Pfeiltaste</td>
      <td>Beginnt an der aktuellen Position zu lesen.</td>
    </tr>
    <tr>
      <td>Obere Pfeiltaste und untere Pfeiltaste oder Umschalt + Tab und Tab</td>
      <td>Bewegt sich zum vorherigen/nächsten Element auf der Seite und liest es.</td>
    </tr>
    <tr>
      <td>Linke Pfeiltaste und rechte Pfeiltaste</td>
      <td>Bewegt sich zum vorherigen/nächsten Zeichen im aktuellen Element und liest es.</td>
    </tr>
    <tr>
      <td>Umschalt + H und H</td>
      <td>Bewegt sich zur vorherigen/nächsten Überschrift und liest sie.</td>
    </tr>
    <tr>
      <td>Umschalt + K und K</td>
      <td>Bewegt sich zum vorherigen/nächsten Link und liest ihn.</td>
    </tr>
    <tr>
      <td>Umschalt + D und D</td>
      <td>
        Bewegt sich zum vorherigen/nächsten Dokumentbereich (z. B. <code>&#x3C;nav></code>) und liest ihn.
      </td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Bewegt sich zur vorherigen/nächsten Überschrift (Stufe 1–6) und liest sie.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Bewegt sich zum vorherigen/nächsten Formulareingabefeld und fokussiert es.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Bewegt sich zur vorherigen/nächsten Datentabelle und fokussiert sie.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Bewegt sich zur vorherigen/nächsten Schaltfläche und liest ihre Bezeichnung.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Bewegt sich zur vorherigen/nächsten Liste und liest ihr erstes Listenelement.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Bewegt sich zum vorherigen/nächsten Listenelement und liest es.</td>
    </tr>
    <tr>
      <td>Eingabetaste/Return</td>
      <td>
        (wenn Link/Schaltfläche oder anderes aktivierbares Element ausgewählt) Aktiviert das Element.
      </td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>
        (wenn Formular ausgewählt ist) Betritt das Formular, damit einzelne Elemente ausgewählt werden können, oder verlässt das Formular, wenn man bereits darin ist.
      </td>
    </tr>
    <tr>
      <td>Umschalt Tab und Tab</td>
      <td>(wenn Sie sich im Formular befinden) Bewegt sich zwischen Formulareingabefeldern.</td>
    </tr>
    <tr>
      <td>Obere Pfeiltaste und untere Pfeiltaste</td>
      <td>
        (wenn Sie sich im Formular befinden) Ändern Sie Formulareingabewerte (im Fall von Sachen wie Auswahlboxen).
      </td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(wenn Sie sich im Formular befinden) Wählen Sie den ausgewählten Wert aus.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Bewegt sich zwischen Tabellenzellen.</td>
    </tr>
  </tbody>
</table>

#### Screenreader-Testen

Jetzt, da Sie sich daran gewöhnt haben, einen Bildschirmleser zu verwenden, sollten Sie ihn für einige schnelle Barrierefreiheitstests verwenden, um ein Gefühl dafür zu bekommen, wie Bildschirmleser mit guten und schlechten Websitefunktionen umgehen:

- Schauen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und merken Sie, wie die Überschriften vom Bildschirmleser erkannt und zur Navigation genutzt werden können. Schauen Sie sich jetzt [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und merken Sie, wie der Bildschirmleser keine dieser Informationen erhält. Stellen Sie sich vor, wie ärgerlich dies wäre, wenn Sie versuchen, eine wirklich lange Seite mit Text zu navigieren.
- Schauen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und merken Sie, wie sie ohne Kontext sinnvoll erscheinen. Dies ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall - sie sind alle einfach „hier klicken“.
- Schauen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und merken Sie, wie die Formulareingaben mit ihren Labels beschrieben werden, da wir die `<label>`-Elemente ordnungsgemäß verwendet haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie einen nicht hilfreichen Bezeichner wie „leer“.
- Schauen Sie sich unser Beispiel [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) an und sehen Sie, wie der Bildschirmleser Spalten und Zeilen von Inhalten assoziieren und alle zusammen vorlesen kann, weil wir Überschriften ordnungsgemäß definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen aufeinander bezogen werden. Beachten Sie, dass NVDA sich etwas seltsam verhält, wenn Sie nur eine einzelne Tabelle auf einer Seite haben; Sie können stattdessen [WebAIMs Tabellentestseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Werfen Sie einen Blick auf das [WAI-ARIA live regions Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm), das wir früher gesehen haben, und beachten Sie, wie der Bildschirmleser den ständig aktualisierten Abschnitt vorliest, während er aktualisiert wird.

### Benutzertests

Wie oben erwähnt, können Sie sich nicht allein auf automatisierte Tools zur Bestimmung von Barrierefreiheitsproblemen auf Ihrer Website verlassen. Es wird empfohlen, wenn Sie Ihren Testplan erstellen, dass Sie einige Barrierefreiheitsnutzergruppen, sofern möglich, einbeziehen (siehe unseren Abschnitt [Benutzertests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#user_testing) zu einem früheren Zeitpunkt im Kurs für weiteren Kontext). Versuchen Sie, einige Benutzer von Bildschirmlesern, einige nur-Tastatur-Benutzer, einige nicht-hörende Benutzer und möglicherweise andere Gruppen einzubeziehen, je nach Ihren Anforderungen.

## Checkliste für Barrierefreiheitstests

Die folgende Liste bietet eine Checkliste für Sie, um sicherzustellen, dass Sie die empfohlenen Barrierefreiheitstests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Die Validierung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#validation) ist ein guter Anfang, genauso wie die Verwendung eines [Prüfwerkzeuges](#audit-tools).
2. Überprüfen Sie, ob Ihre Inhalte Sinn machen, wenn das CSS deaktiviert wird.
3. Stellen Sie sicher, dass Ihre Funktionalität [tastaturzugänglich](#nutzung_der_nativen_tastaturzugänglichkeit) ist. Testen Sie mit Tab, Return/Enter usw.
4. Stellen Sie sicher, dass Ihre nicht-textuelle Inhalte [Textalternativen](#textalternativen) haben. Ein [Prüfwerkzeug](#audit-tools) ist gut, um solche Probleme zu erkennen.
5. Stellen Sie sicher, dass der [Farbkontrast](#farbe_und_farbkontrast) Ihrer Website akzeptabel ist, indem Sie ein geeignetes Prüfwerkzeug verwenden.
6. Stellen Sie sicher, dass [versteckter Inhalt](#inhalte_ausblenden) von Bildschirmlesern sichtbar ist.
7. Stellen Sie sicher, dass die Funktionalität so weit wie möglich ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit zu verbessern, wo es angebracht ist.
9. Überprüfen Sie Ihre Website mit einem [Prüfwerkzeug](#audit-tools).
10. Testen Sie sie mit einem Bildschirmleser.
11. Fügen Sie irgendwo auf Ihrer Website eine Barrierefreiheitserklärung/-richtlinie hinzu, die erklärt, was Sie getan haben.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit der Barrierefreiheit stoßen werden; das Wichtigste ist wirklich zu wissen, wie man online Antworten findet. Konsultieren Sie den Abschnitt [Hilfe finden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help) des HTML- und CSS-Artikels für einige gute Tipps.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel eine gute Grundlage für die Hauptprobleme der Barrierefreiheit gegeben, auf die Sie stoßen könnten, und wie Sie sie testen und überwinden können.

Im nächsten Artikel werden wir uns näher mit Feature Detection befassen.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}
