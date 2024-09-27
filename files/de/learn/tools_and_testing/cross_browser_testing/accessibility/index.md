---
title: Umgang mit häufigen Barrierefreiheitsproblemen
slug: Learn/Tools_and_testing/Cross_browser_testing/Accessibility
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}

Als Nächstes widmen wir uns der Barrierefreiheit, stellen Informationen zu häufigen Problemen bereit und erklären, wie Sie einfache Tests durchführen und Prüf-/Automatisierungswerkzeuge zur Erkennung von Barrierefreiheitsproblemen nutzen können.

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
          >Grundprinzipien des Cross-Browser-Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige Barrierefreiheitsprobleme zu diagnostizieren und geeignete Werkzeuge und Techniken zur Behebung zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Barrierefreiheit?

Wenn wir im Kontext von Webtechnologie von Barrierefreiheit sprechen, denken die meisten Menschen sofort daran, sicherzustellen, dass Websites/Apps für Menschen mit Behinderungen nutzbar sind, zum Beispiel:

- Sehbehinderte Menschen, die Bildschirmleseprogramme oder Vergrößerung/Zoom verwenden, um auf Text zuzugreifen.
- Menschen mit motorischen Beeinträchtigungen, die die Tastatur (oder andere nicht-mausabhängige Funktionen) verwenden, um Website-Funktionen zu aktivieren.
- Menschen mit Hörbeeinträchtigungen, die auf Untertitel oder andere Textalternativen für Audio/Video-Inhalte angewiesen sind.

Es wäre jedoch falsch zu sagen, dass Barrierefreiheit nur mit Behinderungen zu tun hat. Wirklich geht es bei der Barrierefreiheit darum, Ihre Websites/Apps für möglichst viele Menschen in möglichst vielen Kontexten nutzbar zu machen, nicht nur für Nutzer leistungsstarker Desktop-Computer. Einige Beispiele könnten sein:

- Benutzer auf mobilen Geräten.
- Benutzer auf alternativen Browsergeräten wie Fernseher, Uhren usw.
- Benutzer älterer Geräte, die möglicherweise nicht die neuesten Browser haben.
- Benutzer von Geräten mit niedrigerer Leistungsfähigkeit, die möglicherweise langsame Prozessoren haben.

In gewisser Weise geht es in diesem gesamten Modul um Barrierefreiheit — Cross-Browser-Tests stellen sicher, dass Ihre Websites von möglichst vielen Menschen genutzt werden können. [Was ist Barrierefreiheit?](/de/docs/Learn/Accessibility/What_is_accessibility) definiert Barrierefreiheit umfassender und sorgfältiger als dieser Artikel.

Das gesagt, dieser Artikel wird Cross-Browser- und Testprobleme behandeln, die Menschen mit Behinderungen betreffen, und wie sie das Web nutzen. Wir haben bereits über andere Bereiche wie [Responsive Design](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#responsive_design_problems) und [Performance](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#performance_issues) an anderer Stelle im Modul gesprochen.

> [!NOTE]
> Wie bei vielen Dingen in der Webentwicklung geht es bei Barrierefreiheit nicht um 100% Erfolg oder nicht; 100% Barrierefreiheit ist für alle Inhalte kaum erreichbar, besonders wenn Sites komplexer werden. Stattdessen geht es mehr darum, einen angemessenen Aufwand zu betreiben, um so viel von Ihrem Inhalt wie möglich für so viele Menschen wie möglich zugänglich zu machen, durch defensives Kodieren und Einhalten der besten Praktiken.

## Häufige Barrierefreiheitsprobleme

In diesem Abschnitt werden wir einige der Hauptprobleme detailliert behandeln, die bei der Barrierefreiheit im Web im Zusammenhang mit bestimmten Technologien auftreten, sowie Best Practices, die befolgt werden sollten, und einige Schnelltests, die Sie durchführen können, um zu sehen, ob Ihre Sites auf dem richtigen Weg sind.

> [!NOTE]
> Barrierefreiheit ist moralisch das Richtige und gut für das Geschäft (die Zahl der behinderten Nutzer, Nutzer mobiler Geräte usw. stellen bedeutende Marktsegmente dar), aber es ist auch in vielen Teilen der Welt eine gesetzliche Verpflichtung, Webinhalte für Menschen mit Behinderungen zugänglich zu machen. Lesen Sie [Richtlinien zur Barrierefreiheit und das Gesetz](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_guidelines_and_the_law) für weitere Informationen.

### HTML

Semantisches HTML (wo die Elemente für ihren richtigen Zweck verwendet werden) ist sofort barrierefrei — solcher Inhalt ist für seheingeschränkte Betrachter lesbar (vorausgesetzt, Sie machen nichts Dummes wie den Text viel zu klein oder verstecken ihn mit CSS), kann aber auch von Hilfstechnologien wie Bildschirmlesern (Apps, die wörtlich eine Webseite für den Benutzer vorlesen) genutzt werden und bringt weitere Vorteile.

#### Semantische Struktur

Der einfachste „schnelle Gewinn“ im semantischen HTML ist die Verwendung einer Struktur aus Überschriften und Absätzen für Ihre Inhalte; das liegt daran, dass Bildschirmleser-Benutzer dazu neigen, die Überschriften eines Dokuments als Wegweiser zu verwenden, um die benötigten Inhalte schneller zu finden. Wenn Ihre Inhalte keine Überschriften haben, werden sie nur eine riesige Textwand ohne Wegweiser vorfinden. Beispiele für schlechtes und gutes HTML:

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

Außerdem sollte Ihr Inhalt in seiner Quellreihenfolge logisch sein — Sie können ihn später immer mit CSS an die gewünschte Stelle verschieben, aber Sie sollten die Quellreihenfolge von Anfang an richtig gestalten.

Als Test können Sie das CSS einer Site deaktivieren und sehen, wie verständlich sie ohne CSS ist. Dies können Sie manuell tun, indem Sie das CSS aus Ihrem Code entfernen, aber der einfachste Weg ist die Nutzung von Browserfunktionen, beispielsweise:

- Firefox: Wählen Sie _Ansicht > Seiten-Stil > Kein Stil_ aus dem Hauptmenü.
- Safari: Wählen Sie _Entwickeln > Stile deaktivieren_ aus dem Hauptmenü (um das Menü _Entwickeln_ zu aktivieren, wählen Sie _Safari > Einstellungen > Erweitert > Entwicklermenü in Menüleiste anzeigen_).
- Chrome: Installieren Sie die Web Developer Toolbar Extension, starten Sie dann den Browser neu. Klicken Sie auf das Zahnradsymbol, das erscheint, und wählen Sie dann _CSS > Alle Stile deaktivieren_.
- Edge: Wählen Sie _Ansicht > Stil > Kein Stil_ aus dem Hauptmenü.

#### Verwendung nativer Tastaturzugänglichkeit

Bestimmte HTML-Funktionen können nur mit der Tastatur ausgewählt werden — dies ist ein Standardverhalten, das seit den Anfängen des Web verfügbar ist. Die Elemente, die diese Fähigkeit haben, sind die gängigen, die es dem Benutzer erlauben, mit Webseiten zu interagieren, nämlich Links, {{htmlelement("button")}}s und Formularelemente wie {{htmlelement("input")}}.

Sie können dies ausprobieren, indem Sie unser [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) Beispiel öffnen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) — öffnen Sie dies in einem neuen Tab und versuchen Sie, die Tabulatortaste zu drücken. Nach einigen Drücken sollten Sie sehen, dass der Tab-Fokus beginnt, sich durch die verschiedenen fokussierbaren Elemente zu bewegen; die fokussierten Elemente erhalten in jedem Browser einen hervorgehobenen Standardstil (er unterscheidet sich leicht zwischen den verschiedenen Browsern), damit Sie sehen können, welches Element fokussiert ist.

![Ein Screenshot von drei Schaltflächen, der das Standardverhalten von interaktiven nativen Elementen zeigt. Die dritte Schaltfläche ist durch einen blauen Rand hervorgehoben, um ihren Fokussierungszustand anzuzeigen.](button-focused-unfocused.png)

> [!NOTE]
> In Firefox können Sie auch ein Overlay aktivieren, das die Seitentab-Reihenfolge anzeigt. Für weitere Informationen siehe: [Accessibility Inspector > Webseiten-Tabulatorreihenfolge anzeigen](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

Sie können dann die Eingabe-/Rückgabetaste drücken, um einem fokussierten Link zu folgen oder eine Schaltfläche zu drücken (wir haben etwas JavaScript eingebaut, um die Schaltflächen eine Meldung ausgeben zu lassen), oder mit der Texteingabe in ein Textfeld beginnen (andere Formularelemente haben andere Steuerelemente, zum Beispiel kann das {{htmlelement("select")}} Element seine Optionen mit den Pfeiltasten auf und ab anzeigen und wechseln).

Beachten Sie, dass verschiedene Browser möglicherweise unterschiedliche Optionen zur Tastatursteuerung haben. Die meisten modernen Browser folgen dem beschriebenen Tab-Muster (Sie können auch Shift + Tab verwenden, um rückwärts durch die fokussierbaren Elemente zu navigieren), aber einige Browser haben ihre eigenen Eigenheiten:

- Safari auf dem Mac lässt standardmäßig keine Tab-Navigation durch Links zu; um dies zu aktivieren, öffnen Sie _Systemeinstellungen_, scrollen Sie zu _Tastatur_ und aktivieren Sie _Tastaturnavigation_. Wenn Sie eine ältere Version von macOS verwenden, lesen Sie [Verwenden Sie Ihre Tastatur wie eine Maus mit dem Mac](https://support.apple.com/guide/mac-help/use-your-keyboard-like-a-mouse-mh27469/mac) im macOS-Benutzerhandbuch von Apple.

> [!WARNING]
> Sie sollten diese Art von Test/Überprüfung auf jeder neuen Seite durchführen, die Sie schreiben — stellen Sie sicher, dass die Funktionalität mit der Tastatur zugänglich ist und die Tabulator-Reihenfolge einen sinnvollen Navigationspfad durch das Dokument bietet.

Dieses Beispiel verdeutlicht die Bedeutung der Verwendung des richtigen semantischen Elements für die richtige Aufgabe. Es ist möglich, _jedes_ Element mit CSS so zu stylen, dass es wie ein Link oder eine Schaltfläche aussieht und sich mit JavaScript wie ein Link oder eine Schaltfläche verhält, aber es sind keine echten Links oder Schaltflächen, und Sie verlieren viele der Barrierefreiheit, die Ihnen diese Elemente kostenlos bieten. Tun Sie es also nicht, wenn Sie es vermeiden können.

Ein weiterer Tipp — wie in unserem Beispiel gezeigt, können Sie das Aussehen Ihrer fokussierbaren Elemente beim Fokussieren mit der Pseudo-Klasse [:focus](/de/docs/Web/CSS/:focus) steuern. Es ist eine gute Idee, Fokus- und Hover-Stile zu kombinieren, damit Ihre Benutzer, egal ob sie die Maus oder die Tastatur verwenden, einen visuellen Hinweis darauf erhalten, dass ein Steuerelement etwas tut, wenn es aktiviert wird:

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
> Wenn Sie sich entscheiden, das Standard-Fokus-Styling mit CSS zu entfernen, stellen Sie sicher, dass Sie es durch etwas anderes ersetzen, das besser zu Ihrem Design passt — es ist ein sehr wertvolles Barrierefreiheitstool und sollte nicht entfernt werden.

#### Einbau von Tastaturzugänglichkeit

Manchmal ist es nicht möglich, die Tastaturzugänglichkeit zu vermeiden. Sie könnten auf einer Site arbeiten, bei der die Semantik nicht sehr gut ist (vielleicht haben Sie einen schrecklichen CMS geerbt, das Schaltflächen mit `<div>`s erstellt), oder Sie verwenden ein komplexes Steuerelement, das keine Tastaturzugänglichkeit eingebaut hat, wie das HTML {{htmlelement("video")}} Element (erstaunlicherweise ist Opera der einzige Browser, der es ermöglicht, durch die standardmäßigen Browsersteuerungen des `<video>` Elements mit der Tabulatortaste zu navigieren). Hier haben Sie einige Optionen:

1. Erstellen Sie benutzerdefinierte Steuerelemente mit `<button>` Elementen (die wir standardmäßig mit der Tabulatortaste erreichen können!) und JavaScript, um ihre Funktionalität zu verknüpfen. Siehe [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player) für einige gute Beispiele.
2. Erstellen Sie Tastaturkürzel über JavaScript, sodass die Funktionalität aktiviert wird, wenn Sie bestimmte Tasten auf der Tastatur drücken. Siehe [Desktop-Tastatur- und Maussteuerelemente](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) für einige spielbezogene Beispiele, die für jeden Zweck angepasst werden können.
3. Verwenden Sie einige interessante Taktiken, um das Schaltflächenverhalten zu simulieren. Nehmen Sie zum Beispiel unser [fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel (Quellcode [hier](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Hier haben wir unseren gefälschten `<div>` Schaltflächen die Möglichkeit gegeben, fokussiert zu werden (einschließlich über die Tabulatortaste), indem wir jeder das Attribut `tabindex="0"` gegeben haben (siehe WebAIM's [tabindex Artikel](https://webaim.org/techniques/keyboard/tabindex) für mehr wirklich nützliche Details). Dadurch können wir zu den Schaltflächen tabben, aber nicht, um sie mit der Eingabe-/Rückgabetaste zu aktivieren. Dafür mussten wir den folgenden JavaScript-Trick hinzufügen:

   ```js
   document.onkeydown = (e) => {
     if (e.code === "Enter") {
       // The Enter/Return key
       document.activeElement.onclick(e);
     }
   };
   ```

Hier fügen wir einen Listener zum `document` Objekt hinzu, um zu erkennen, wann eine Taste auf der Tastatur gedrückt wurde. Wir prüfen, welche Taste gedrückt wurde, über die [`code`](/de/docs/Web/API/KeyboardEvent/code) Eigenschaft des Ereignisobjekts; wenn es der Code ist, der Return/Enter entspricht, führen wir die Funktion aus, die im `onclick` Handler der Schaltfläche gespeichert ist, indem wir `document.activeElement.onclick()` verwenden. [`activeElement`](/de/docs/Web/API/Document/activeElement) gibt uns das Element, das derzeit auf der Seite fokussiert ist.

> [!NOTE]
> Diese Technik wird nur funktionieren, wenn Sie Ihre ursprünglichen Ereignishandler über Ereignishandlereigenschaften (z.B. `onclick`) setzen. `addEventListener` wird nicht funktionieren. Dies ist ein zusätzlicher Aufwand, um die Funktionalität wieder einzubauen. Es gibt sicherlich andere Probleme damit. Es ist besser, von Anfang an das richtige Element für die richtige Aufgabe zu verwenden.

#### Textalternativen

Textalternativen sind sehr wichtig für die Barrierefreiheit — wenn eine Person eine Seh- oder Hörbeeinträchtigung hat, die sie daran hindert, einige Inhalte sehen oder hören zu können, dann ist dies ein Problem. Die einfachste verfügbare Textalternative ist das bescheidene `alt` Attribute, das wir bei allen Bildern verwenden sollten, die relevante Inhalte enthalten. Dieses sollte eine Beschreibung des Bildes enthalten, die erfolgreich seine Bedeutung und seinen Inhalt auf der Seite vermittelt, damit es von einem Bildschirmleser erkannt und dem Benutzer vorgelesen werden kann.

> [!NOTE]
> Für weitere Informationen lesen Sie [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).

Fehlender Alt-Text kann auf verschiedene Weise getestet werden, zum Beispiel mit Barrierefreiheits-[Prüfwerkzeugen](#prüfwerkzeuge).

Alt-Text ist für Video- und Audioinhalte etwas komplexer. Es gibt eine Möglichkeit, Textspuren (z.B. Untertitel) zu definieren und anzuzeigen, wenn ein Video abgespielt wird, in Form des {{htmlelement("track")}} Elements und des [WebVTT](/de/docs/Web/API/WebVTT_API) Formats (siehe [Hinzufügen von Untertiteln und Untertiteln zu HTML-Video](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) für ein ausführliches Tutorial). Die [Browser-Kompatibilität](/de/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#browser_compatibility) für diese Funktionen ist ziemlich gut, aber wenn Sie Textalternativen für Audio bereitstellen oder ältere Browser unterstützen möchten, könnte eine einfache Textbeschreibung irgendwo auf der Seite oder auf einer separaten Seite eine gute Idee sein.

#### Elementbeziehungen und Kontext

Es gibt bestimmte Funktionen und Best Practices in HTML, die entwickelt wurden, um Kontext und Beziehungen zwischen Elementen bereitzustellen, wo es ansonsten keine gibt. Die drei häufigsten Beispiele sind Links, Formularbeschriftungen und Datentabellen.

Der Schlüssel zu zugänglichem Linktext liegt darin, dass Benutzer von Bildschirmleseprogrammen oft eine häufige Funktion verwenden, bei der sie eine Liste aller Links auf der Seite abrufen. In diesem Fall muss der Linktext auch außerhalb des Kontexts sinnvoll sein. Zum Beispiel ist eine Liste von Links mit der Aufschrift "Hier klicken", "Klick mich“ usw. wirklich schlecht für die Barrierefreiheit. Es ist besser, wenn der Linktext sowohl im Kontext als auch außerhalb des Kontexts sinnvoll ist.

Als Nächstes auf unserer Liste ist das Formularelement {{htmlelement("label")}} eines der zentralen Features, das uns ermöglicht, Formulare barrierefrei zu gestalten. Das Problem mit Formularen ist, dass Sie Beschriftungen benötigen, um anzugeben, welche Daten in jedes Formulareingabefeld eingegeben werden sollten. Jede Beschriftung sollte in einem {{htmlelement("label")}} enthalten sein, um sie unmissverständlich mit ihrem Partnerformularelement zu verknüpfen (der Wert des Attributs `for` jeder `<label>` muss mit dem Wert des Formularelements `id` übereinstimmen), und sie wird selbst dann Sinn machen, wenn die Quellreihenfolgenicht völlig logisch ist (was ehrlich gesagt sollte es sein).

> [!NOTE]
> Für weitere Informationen über Linktext und Formularbeschriftungen lesen Sie [Aussagekräftige Textbeschriftungen](/de/docs/Learn/Accessibility/HTML#meaningful_text_labels).

Schließlich ein kurzes Wort zu Datentabellen. Eine einfache Datentabelle kann mit sehr einfachem Markup geschrieben werden (siehe `bad-table.html` [live](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) und [Quellcode](https://github.com/mdn/learning-area/blob/main/accessibility/html/bad-table.html)), aber dies hat Probleme — es gibt keine Möglichkeit für einen Benutzer eines Bildschirmleseprogramms, Zeilen oder Spalten als Datenzusammenstellungen zu assoziieren — dazu muss man wissen, was die Kopfzeilen sind und ob sie Zeilen, Spalten usw. anführen. Dies kann für eine solche Tabelle nur visuell gemacht werden.

Wenn Sie sich stattdessen unser `punk-bands-complete.html` Beispiel ([live](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html), [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html)) ansehen, können Sie einige Barrierefreiheitsaids in Aktion sehen, wie Tabellenkopfzeilen ({{htmlelement("th")}} und `scope` Attribute), {{htmlelement("caption")}} Element usw.

> [!NOTE]
> Für weitere Informationen zu zugänglichen Tabellen lesen Sie [Barrierefreie Datentabellen](/de/docs/Learn/Accessibility/HTML#accessible_data_tables).

### CSS

CSS bietet weniger grundlegende Barrierefreiheitsfunktionen als HTML, kann jedoch genauso viel Schaden an der Barrierefreiheit anrichten, wenn es falsch verwendet wird. Wir haben bereits ein paar Barrierefreiheitstipps in Bezug auf CSS erwähnt:

- Verwenden Sie die richtigen semantischen Elemente, um verschiedene Inhalte in HTML zu markieren; wenn Sie einen anderen visuellen Effekt erzeugen möchten, verwenden Sie CSS — missbrauchen Sie ein HTML-Element nicht, um den gewünschten Look zu erhalten. Beispielsweise, wenn Sie größeren Text möchten, verwenden Sie {{cssxref("font-size")}}, nicht ein {{htmlelement("Heading_Elements", "h1")}} Element.
- Stellen Sie sicher, dass Ihre Quellreihenfolge ohne CSS Sinn ergibt; Sie können die Seite später mit CSS in jedem beliebigen Stil gestalten.
- Sie sollten sicherstellen, dass interaktive Elemente wie Schaltflächen und Links geeignete Fokus-/Hover-/Aktiv-Zustände haben, um dem Benutzer visuelle Hinweise auf ihre Funktion zu geben. Wenn Sie die Standards aus stilistischen Gründen entfernen, stellen Sie sicher, dass Sie einige Ersatzstile hinzufügen.

Es gibt noch einige andere Überlegungen, die Sie berücksichtigen sollten.

#### Farbe und Farbkontrast

Bei der Auswahl eines Farbschemas für Ihre Website sollten Sie sicherstellen, dass die Textfarbe (Vordergrund) gut im Kontrast zur Hintergrundfarbe steht. Ihr Design sieht vielleicht cool aus, aber es ist nutzlos, wenn Menschen mit Sehbehinderungen wie Farbenblindheit Ihre Inhalte nicht lesen können. Verwenden Sie ein Werkzeug wie WebAIMs [Color Contrast Checker](https://webaim.org/resources/contrastchecker/), um zu überprüfen, ob Ihr Schema ausreichend kontrastreich ist.

Ein weiterer Tipp ist, nicht nur auf Farbe allein für Wegweiser/Informationen zu vertrauen, da dies für diejenigen, die die Farbe nicht sehen können, nutzlos ist. Markieren Sie anstelle von Pflichtfeldern in Rot zum Beispiel mit einem Stern und in Rot.

> [!NOTE]
> Ein hoher Kontrast ermöglicht auch jedem, der ein Smartphone oder Tablet mit einem glänzenden Bildschirm in einer hellen Umgebung, wie z.B. Sonnenlicht, verwendet, die Seiten besser zu lesen.

#### Inhalt verstecken

Es gibt viele Fälle, in denen ein visuelles Design erfordert, dass nicht alle Inhalte gleichzeitig angezeigt werden. Zum Beispiel in unserem [Beispiel für eine tabbed Info-Box](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) haben wir drei Informationstafeln, platzieren sie jedoch [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning) übereinander und bieten Registerkarten, die angeklickt werden können, um jeweils eine anzuzeigen (die Tastaturzugänglichkeit ist hierbei auch gegeben — Sie können alternativ Tab und Eingeben/Rückgabe verwenden, um sie auszuwählen).

![Ein Screenshot, der ein Beispiel für ein zugängliches Verstecken und Anzeigen von Inhalten in Tabs zeigt. Das Beispiel verfügt über drei Registerkarten, nämlich Tab 1, Tab 2 und Tab 3. Tab 1 ist derzeit fokussiert und aktiviert, um Inhalte anzuzeigen.](20191022144107.png)

Benutzer von Bildschirmleseprogrammen achten auf nichts davon — sie sind mit den Inhalten zufrieden, solange die Quellreihenfolge Sinn macht und sie zu allem Zugang haben. Die absolute Positionierung (wie in diesem Beispiel verwendet) wird im Allgemeinen als einer der besten Mechanismen angesehen, um Inhalte für einen visuellen Effekt zu verstecken, da Hilfsmittelprogramme sie nicht ausschließen.

Auf der anderen Seite sollten Sie nicht {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}} verwenden, da sie Inhalte auch von Bildschirmleseprogrammen verbergen. Es sei denn, es gibt einen guten Grund, warum Sie möchten, dass diese Inhalte auch für Bildschirmleseprogramme versteckt sind.

> **Hinweis:** [Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/) enthält viele nützliche Details zu diesem Thema.

### JavaScript

JavaScript hat dieselben Arten von Problemen wie CSS in Bezug auf Barrierefreiheit — es kann katastrophal für die Barrierefreiheit sein, wenn es schlecht oder übermäßig verwendet wird. Wir haben bereits auf einige Barrierefreiheitsprobleme im Zusammenhang mit JavaScript hingewiesen, hauptsächlich im Bereich des semantischen HTML — Sie sollten immer geeignetes semantisches HTML verwenden, um Funktionalität zu implementieren, wo immer es verfügbar ist, z.B. verwenden Sie Links und Buttons nach Bedarf. Vermeiden Sie es, `<div>`-Elemente mit JavaScript-Code zu verwenden, um Funktionen zu simulieren, wenn es möglich ist — es ist fehleranfällig und mehr Arbeit als mit den kostenlosen Funktionalitäten, die HTML Ihnen bietet.

#### Einfache Funktionalität

Im Allgemeinen sollte einfache Funktionalität nur mit dem HTML an Ort und Stelle funktionieren — JavaScript sollte nur zur Verbesserung der Funktionalität verwendet werden, nicht, um sie vollständig einzubauen. Gute Verwendungen von JavaScript umfassen:

- Bereitstellung einer clientseitigen Formularvalidierung, die Benutzer schnell auf Probleme mit ihren Formulareinträgen aufmerksam macht, ohne auf den Server warten zu müssen, um die Daten zu prüfen. Wenn es nicht verfügbar ist, funktioniert das Formular dennoch, aber die Validierung könnte langsamer sein.
- Bereitstellung benutzerdefinierter Steuerelemente für HTML-`<video>`s, die für Tastatur-Nur-Nutzer zugänglich sind (wie bereits erwähnt, sind die standardmäßigen Browsersteuerelemente in den meisten Browsern nicht tastaturzugänglich).

> [!NOTE]
> WebAIMs [Accessible JavaScript](https://webaim.org/techniques/javascript/) bietet einige nützliche weitere Details zu Überlegungen für zugängliches JavaScript.

Komplexere JavaScript-Implementierungen können Probleme mit der Barrierefreiheit schaffen — Sie sollten so viel tun, wie Sie können. Beispielsweise wäre es unzumutbar zu erwarten, dass Sie ein komplexes 3D-Spiel, das mit WebGL geschrieben wurde, für eine blinde Person vollständig zugänglich machen, aber Sie könnten [Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) implementieren, sodass es auch ohne Maus-Nutzer verwendet werden kann, und das Farbschema ausreichend kontrastreich gestalten, um Nutzer mit Farbschwächen zu unterstützen.

#### Komplexe Funktionalität

Einer der Hauptbereiche, die für die Barrierefreiheit problematisch sind, sind komplexe Apps, die komplizierte Formularelemente (wie etwa Datumsauswahlfelder) und dynamische Inhalte beinhalten, die oft und inkrementell aktualisiert werden.

Nicht-natürliche komplizierte Formularelemente sind problematisch, da sie oft viele geschachtelte `<div>`s beinhalten und der Browser standardmäßig nicht weiß, was damit zu tun ist. Wenn Sie sie selbst erfinden, müssen sie sicherstellen, dass sie tastaturzugänglich sind; wenn Sie eine Art Framework von Drittanbietern verwenden, prüfen Sie sorgfältig die verfügbaren Optionen, um zu sehen, wie zugänglich sie sind, bevor Sie eintauchen. [Bootstrap](https://getbootstrap.com/) sieht im Bezug auf Barrierefreiheit ziemlich gut aus, als Beispiel, obwohl [Making Bootstrap a Little More Accessible](https://www.sitepoint.com/making-bootstrap-accessible/) von Rhiana Heath einige seiner Probleme (hauptsächlich im Bereich Farbkontrast) untersucht und einige Lösungen bietet.

Regelmäßig aktualisierte dynamische Inhalte können ein Problem sein, da Bildschirmleser-Benutzer sie möglicherweise übersehen, insbesondere wenn sie unerwartet aktualisiert werden. Wenn Sie eine Single-Page-App mit einem Hauptinhaltspanel haben, das regelmäßig mit [XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest) oder [Fetch](/de/docs/Web/API/Fetch_API) aktualisiert wird, könnte ein Bildschirmleser-Nutzer diese Updates verpassen.

#### WAI-ARIA

Müssen Sie solche komplexe Funktionalitäten verwenden, oder reicht einfaches altes semantisches HTML stattdessen aus? Wenn Sie Komplexität brauchen, sollten Sie [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) (Accessible Rich Internet Applications) in Betracht ziehen, eine Spezifikation, die Semantik (in Form von neuen HTML-Attributen) für Elemente wie komplexe Formularelemente und aktualisierende Panels bereitstellt, die von den meisten Browsern und Bildschirmlesern verstanden werden können.

Um mit komplexen Formular-Widgets umzugehen, sollten Sie ARIA-Attribute wie `roles` verwenden, um anzugeben, welche Rolle verschiedene Elemente in einem Widget haben (zum Beispiel, sind sie ein Tab oder ein Tab-Panel?), `aria-disabled`, um anzugeben, ob eine Steuerung deaktiviert ist oder nicht, usw.

Um mit regelmäßig aktualisierten Inhaltsbereichen umzugehen, können Sie das Attribut `aria-live` verwenden, das einen aktualisierenden Bereich identifiziert. Sein Wert gibt an, wie dringend der Bildschirmleser diesen lesen sollte:

- `off:` Die Standardeinstellung. Updates sollten nicht angekündigt werden.
- `polite`: Updates sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`: Updates sollten so schnell wie möglich dem Benutzer angekündigt werden.

Hier ist ein Beispiel:

```html
<p><span id="LiveRegion1" aria-live="polite" aria-atomic="false"></span></p>
```

Sie können ein Beispiel in Aktion bei Freedom Scientifics [ARIA (Accessible Rich Internet Applications) Live Regions](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) Beispiel ansehen — der hervorgehobene Absatz sollte seinen Inhalt alle 10 Sekunden aktualisieren, und ein Bildschirmleser sollte dies dem Benutzer vorlesen. [ARIA Live Regions - Atomic](https://www.freedomscientific.com/SurfsUp/AriaLiveRegionsAtomic.htm) bietet ein weiteres nützliches Beispiel.

Wir haben hier nicht den Platz, um WAI-ARIA im Detail zu behandeln, Sie können noch viel mehr darüber bei [WAI-ARIA Grundlagen](/de/docs/Learn/Accessibility/WAI-ARIA_basics) lernen.

## Barrierefreiheits-Werkzeuge

Nachdem wir Barrierefreiheitsüberlegungen für verschiedene Web-Technologien beschrieben haben, einschließlich einiger Testtechniken (wie Tastaturnavigation und Farbkontrastprüfer), lassen Sie uns einen Blick auf andere Werkzeuge werfen, die Sie bei Barrierefreiheitstests verwenden können.

### Prüfwerkzeuge

Es gibt eine Reihe von Prüfwerkzeugen, die Sie Ihre Webseiten eingeben können. Sie werden sie überprüfen und eine Liste von Barrierefreiheitsproblemen zurückgeben, die auf der Seite vorhanden sind. Lassen Sie uns ein Beispiel betrachten, das [Wave](https://wave.webaim.org/) verwendet, ein Online-Barrierefreiheits-Testwerkzeug, das eine Webadresse akzeptiert und eine annotierte Ansicht dieser Seite mit hervorgehobenen Barrierefreiheitsproblemen zurückgibt.

1. Gehen Sie zur [Wave-Homepage](https://wave.webaim.org/).
2. Geben Sie die URL unseres [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) Beispiels in das Text-Eingabefeld nahe der Spitze der Seite ein. Drücken Sie dann die Eingabetaste oder klicken/tippen Sie auf den Pfeil am rechten Rand des Eingabefelds.
3. Die Seite sollte mit einer Beschreibung der Barrierefreiheitsprobleme antworten. Klicken Sie auf die angezeigten Symbole, um weitere Informationen zu jedem der von Waves Bewertung identifizierten Probleme zu erhalten.

> [!NOTE]
> Solche Werkzeuge sind allein nicht gut genug, um alle Ihre Barrierefreiheitsprobleme zu lösen. Sie benötigen eine Kombination davon, Wissen und Erfahrung, Benutzer-Tests usw., um ein vollständiges Bild zu erhalten.

### Automatisierungstools

Deque's [aXe Tool](https://www.deque.com/axe/) geht etwas weiter als die oben erwähnten Prüfwerkzeuge. Wie die anderen überprüft es Seiten und gibt Barrierefreiheitserrors zurück. Seine unmittelbar nützlichste Form sind wahrscheinlich die Browsererweiterungen:

- [aXe for Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [aXe for Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Diese fügen den Entwicklerwerkzeugen des Browsers einen Barrierefreiheits-Tab hinzu. Zum Beispiel haben wir die Firefox-Version installiert und damit unser [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) Beispiel geprüft. Wir erhielten die folgenden Ergebnisse:

![Ein Screenshot von Barrierefreiheitsproblemen, die vom Axe-Tool identifiziert wurden.](axe-screenshot.png)

aXe kann auch mit `npm` installiert werden und kann mit Task-Runnern wie [Grunt](https://gruntjs.com/) und [Gulp](https://gulpjs.com/), Automatisierungs-Frameworks wie [Selenium](https://www.selenium.dev/) und [Cucumber](https://cucumber.io/), Unit-Testing-Frameworks wie [Jasmine](https://jasmine.github.io/) und mehr integriert werden (siehe noch einmal die [Hauptseite von aXe](https://www.deque.com/axe/) für Details).

### Bildschirmleser

Es lohnt sich auf jeden Fall, einen Bildschirmleser zu testen, um sich daran zu gewöhnen, wie Menschen mit starker Sehbehinderung das Web nutzen. Es gibt eine Reihe von Bildschirmlesern:

- Einige sind kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows).
- Einige sind kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome, Windows und macOS) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Einige sind ins Betriebssystem eingebaut, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS und iOS), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf Chromebooks) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Im Allgemeinen sind Bildschirmleser separate Apps, die im Host-Betriebssystem ausgeführt werden und nicht nur Webseiten vorlesen können, sondern auch Texte in anderen Apps. Dies ist nicht immer der Fall (ChromeVox ist eine Browsererweiterung), aber im Allgemeinen neigen Bildschirmleser dazu, auf leicht unterschiedliche Weise zu arbeiten und unterschiedliche Steuerungen zu haben, sodass Sie die Dokumentation für Ihren gewählten Bildschirmleser konsultieren müssen, um alle Details zu erhalten — obwohl sie im Grunde alle auf dieselbe Art und Weise arbeiten.

Lassen Sie uns einige Tests mit ein paar verschiedenen Bildschirmlesern durchgehen, um Ihnen eine allgemeine Vorstellung davon zu geben, wie sie funktionieren und wie Sie mit ihnen testen können.

> [!NOTE]
> WebAIMs [Designing for Screen Reader Compatibility](https://webaim.org/techniques/screenreader/) bietet einige nützliche Informationen über die Nutzung von Bildschirmlesern und was am besten für Bildschirmleser funktioniert. Sehen Sie sich auch die [Screen Reader User Survey #9 Results](https://webaim.org/projects/screenreadersurvey9/#used) für einige interessante Statistiken zur Nutzung von Bildschirmlesern an.

#### VoiceOver

VoiceOver (VO) ist kostenlos auf Ihrem Mac/iPhone/iPad enthalten, daher ist es nützlich für Tests auf Desktops/Mobilen Geräten, wenn Sie Apple-Produkte verwenden. Wir werden es unter macOS auf einem MacBook Pro testen.

Um es zu aktivieren, drücken Sie Cmd + F5. Wenn Sie VO vorher noch nicht verwendet haben, erhalten Sie einen Willkommensbildschirm, auf dem Sie auswählen können, ob Sie VO starten oder nicht, und durch ein recht nützliches Tutorial gehen können, um zu lernen, wie man es verwendet. Um es wieder zu deaktivieren, drücken Sie erneut Cmd + F5.

> [!NOTE]
> Sie sollten das Tutorial mindestens einmal durchgehen — es ist eine wirklich nützliche Möglichkeit, VO zu lernen.

Wenn VO aktiviert ist, sieht das Display größtenteils gleich aus, aber Sie werden ein schwarzes Kästchen unten links auf dem Bildschirm sehen, das Informationen zu dem in VO aktuell ausgewählten Element enthält. Die aktuelle Auswahl wird auch hervorgehoben, mit einem schwarzen Rahmen — diese Hervorhebung wird als **VO-Cursor** bezeichnet.

![Ein Beispiel-Screenshot, der das Barrierefreiheitstesten mit VoiceOver auf der MDN-Homepage zeigt. Unten links im Bild ist eine Hervorhebung der auf der Webseite ausgewählten Informationen.](voiceover.png)

Um VO zu verwenden, werden Sie viel Gebrauch von dem „VO-Modifier“ machen — dies ist eine Taste oder eine Tastenkombination, die Sie zusätzlich zu den eigentlichen VO-Tastenkombinationen drücken müssen, um sie zu aktivieren. Die Verwendung eines Modifizierers wie diesem ist bei Bildschirmlesern üblich, um ihre Befehle vor Überschneidungen mit anderen Befehlen zu schützen. Im Fall von VO kann der Modifikator entweder die Feststelltaste oder Strg + Option sein.

VO hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für Webseitentests benötigen, sind in der folgenden Tabelle aufgeführt. Bei den Tastenkombinationen steht „VO“ für „den VoiceOver-Modifikator“.

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten VoiceOver-Tastenkombinationen
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
      <td>Bewegen Sie den VO-Cursor nach oben, rechts, unten, links.</td>
    </tr>
    <tr>
      <td>VO + Leertaste</td>
      <td>
        Wählen/Aktivieren von Elementen, die vom VO-Cursor hervorgehoben werden. Dazu gehören Elemente, die im Rotor ausgewählt wurden (siehe unten).
      </td>
    </tr>
    <tr>
      <td>VO + Umschalt + Abwärtspfeil</td>
      <td>
        Wechseln Sie in eine Gruppe von Elementen (wie eine HTML-Tabelle oder ein Formular usw.). Sobald Sie in einer Gruppe sind, können Sie sich mit den oben genannten Befehlen wie gewohnt in der Gruppe bewegen und Elemente auswählen.
      </td>
    </tr>
    <tr>
      <td>VO + Umschalt + Aufwärtspfeil</td>
      <td>Wechseln Sie aus einer Gruppe hinaus.</td>
    </tr>
    <tr>
      <td>VO + C</td>
      <td>(wenn sich in einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Spalte.</td>
    </tr>
    <tr>
      <td>VO + R</td>
      <td>(wenn sich in einer Tabelle) Lesen Sie die Kopfzeile der aktuellen Zeile.</td>
    </tr>
    <tr>
      <td>VO + C + C (zwei Cs hintereinander)</td>
      <td>
        (wenn sich in einer Tabelle) Lesen Sie die gesamte aktuelle Spalte, einschließlich der Kopfzeile.
      </td>
    </tr>
    <tr>
      <td>VO + R + R (zwei Rs hintereinander)</td>
      <td>
        (wenn sich in einer Tabelle) Lesen Sie die gesamte aktuelle Zeile, einschließlich der Kopfzeilen, die zu jeder Zelle gehören.
      </td>
    </tr>
    <tr>
      <td>VO + linker Pfeil, VO + rechter Pfeil</td>
      <td>
        (wenn sich in einigen horizontalen Optionen, wie ein Datum oder ein Zeit-Auswahlfeld) Wechseln Sie zwischen Optionen.
      </td>
    </tr>
    <tr>
      <td>VO + aufwärtspfeil, VO + abwärtspfeil</td>
      <td>
        (wenn sich in einigen horizontalen Optionen, wie ein Datum oder ein Zeit-Auswahlfeld) Ändern Sie die aktuelle Option.
      </td>
    </tr>
    <tr>
      <td>VO + U</td>
      <td>
        Verwenden Sie den Rotor, der Listen von Überschriften, Links, Formularsteuerelementen usw. für die einfache Navigation anzeigt.
      </td>
    </tr>
    <tr>
      <td>VO + linker Pfeil, VO + rechter Pfeil</td>
      <td>
        (wenn sich im Rotor) Wechseln Sie zwischen verschiedenen im Rotor verfügbaren Listen.
      </td>
    </tr>
    <tr>
      <td>VO + aufwärtspfeil, VO + abwärtspfeil</td>
      <td>
        (wenn sich im Rotor) Wechseln zwischen verschiedenen Elementen in der aktuellen Rotorliste.
      </td>
    </tr>
    <tr>
      <td>Esc</td>
      <td>(wenn sich im Rotor) Verlassen Sie den Rotor.</td>
    </tr>
    <tr>
      <td>Strg</td>
      <td>(wenn VO spricht) Pause/Fortsetzen der Sprache.</td>
    </tr>
    <tr>
      <td>VO + Z</td>
      <td>Starten Sie das letzte Sprechstück neu.</td>
    </tr>
    <tr>
      <td>VO + D</td>
      <td>Wechseln Sie in das Dock des Macs, um dort Apps auszuwählen, die darauf laufen.</td>
    </tr>
  </tbody>
</table>

Dies scheint eine Menge Befehle zu sein, aber es ist nicht so schlimm, wenn Sie sich daran gewöhnen, und VO gibt Ihnen regelmäßig Erinnerungen daran, welche Befehle an bestimmten Stellen zu verwenden sind. Probieren Sie VO jetzt aus; Sie können dann weitermachen und mit einigen unserer Beispiele im Abschnitt [Bildschirmleser-Tests](#bildschirmleser-tests) herumspielen.

#### NVDA

NVDA ist nur für Windows und muss installiert werden.

1. Laden Sie es von [nvaccess.org](https://www.nvaccess.org/) herunter. Sie können wählen, ob Sie eine Spende machen oder es kostenlos herunterladen möchten; Sie müssen ihnen auch Ihre E-Mail-Adresse geben, bevor Sie es herunterladen können.
2. Nach dem Herunterladen installieren Sie es — doppelklicken Sie auf das Installationsprogramm, akzeptieren Sie die Lizenz und folgen Sie den Anweisungen.
3. Um NVDA zu starten, doppelklicken Sie auf die Programmdatei/das Programmverknüpfung oder verwenden Sie den Tastenkombination Strg + Alt + N. Sie sehen den NVDA-Willkommensdialog, wenn Sie es starten. Hier können Sie zwischen ein paar Optionen wählen und dann die Schaltfläche _OK_ klicken, um loszulegen.

NVDA ist nun auf Ihrem Computer aktiv.

Um NVDA zu verwenden, werden Sie viel Gebrauch von dem „NVDA-Modifier“ machen — dies ist eine Taste, die Sie zusätzlich zu den eigentlichen NVDA-Tastenkombinationen drücken müssen, um sie zu aktivieren. Die Verwendung eines Modifizierers wie diesem ist bei Bildschirmlesern üblich, um ihre Befehle vor Überschneidungen mit anderen Befehlen zu schützen. Im Fall von NVDA kann der Modifizierer entweder Insert (der Standardwert) oder CapsLock (kann durch Aktivieren des ersten Kontrollkästchens im NVDA-Willkommensdialog gewählt werden, bevor Sie _OK_ klicken).

> [!NOTE]
> NVDA ist subtiler als VoiceOver in Bezug auf die Hervorhebung, wo es sich befindet und was es tut. Wenn Sie durch Überschriften, Listen usw. scrollen, werden die von Ihnen ausgewählten Elemente in der Regel mit einer subtilen Umrandung hervorgehoben, aber dies ist nicht immer bei allen Dingen der Fall. Wenn Sie sich völlig verirrt haben, können Sie Strg + F5 drücken, um die aktuelle Seite zu aktualisieren und wieder von oben zu beginnen.

NVDA hat viele Tastaturbefehle, und wir werden sie hier nicht alle auflisten. Die grundlegenden, die Sie für Webseitentests benötigen, sind in der folgenden Tabelle aufgeführt. Bei den Tastenkombinationen bedeutet „NVDA“ „der NVDA-Modifikator“.

<table class="standard-table no-markdown">
  <caption>
    Die häufigsten NVDA-Tastenkombinationen
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
      <td>Schalten Sie NVDA aus, nachdem Sie es gestartet haben.</td>
    </tr>
    <tr>
      <td>NVDA + Aufwärtspfeil</td>
      <td>Lesen Sie die aktuelle Zeile vor.</td>
    </tr>
    <tr>
      <td>NVDA + Abwärtspfeil</td>
      <td>Beginnen Sie mit dem Lesen an der aktuellen Position.</td>
    </tr>
    <tr>
      <td>Aufwärtspfeil und Abwärtspfeil oder Umschalt + Tab und Tab</td>
      <td>Wechseln Sie zum vorherigen/nächsten Element auf der Seite und lesen Sie es.</td>
    </tr>
    <tr>
      <td>Linker Pfeil und rechter Pfeil</td>
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
        Wechseln zum vorherigen/nächsten Dokumentstandort (z.B. <code>&lt;nav&gt;</code>) und lesen Sie ihn vor.
      </td>
    </tr>
    <tr>
      <td>Umschalt + 1–6 und 1–6</td>
      <td>Wechseln Sie zur vorherigen/nächsten Überschrift (Stufe 1–6) und lesen Sie sie vor.</td>
    </tr>
    <tr>
      <td>Umschalt + F und F</td>
      <td>Wechseln Sie zur vorherigen/nächsten Formulareingabe und fokussieren Sie darauf.</td>
    </tr>
    <tr>
      <td>Umschalt + T und T</td>
      <td>Wechseln Sie zur vorherigen/nächsten Datentabelle und fokussieren Sie darauf.</td>
    </tr>
    <tr>
      <td>Umschalt + B und B</td>
      <td>Wechseln Sie zur vorherigen/nächsten Schaltfläche und lesen Sie deren Bezeichnung vor.</td>
    </tr>
    <tr>
      <td>Umschalt + L und L</td>
      <td>Wechseln Sie zur vorherigen/nächsten Liste und lesen Sie das erste Listenelement vor.</td>
    </tr>
    <tr>
      <td>Umschalt + I und I</td>
      <td>Wechseln Sie zum vorherigen/nächsten Listenelement und lesen Sie es vor.</td>
    </tr>
    <tr>
      <td>Eingabetaste/Rücktaste</td>
      <td>
        (wenn Link/Schaltfläche oder ein anderes aktivierbares Element ausgewählt ist) Element aktivieren.
      </td>
    </tr>
    <tr>
      <td>NVDA + Leertaste</td>
      <td>
        (wenn Formular ausgewählt ist) Geben Sie das Formular ein, damit einzelne Elemente ausgewählt werden können, oder verlassen Sie das Formular, wenn Sie bereits darin sind.
      </td>
    </tr>
    <tr>
      <td>Umschalt Tab und Tab</td>
      <td>(Wenn im Formular) Bewegen Sie sich zwischen Formulareingaben.</td>
    </tr>
    <tr>
      <td>Aufwärtspfeil und Abwärtspfeil</td>
      <td>
        (wenn im Formular) Werte für Eingaben im Formular ändern (bei Dingen wie
        Auswahlboxen).
      </td>
    </tr>
    <tr>
      <td>Leertaste</td>
      <td>(wenn im Formular) Wert auswählen.</td>
    </tr>
    <tr>
      <td>Strg + Alt + Pfeiltasten</td>
      <td>(wenn eine Tabelle ausgewählt ist) Wechseln zwischen Tabellenzellen.</td>
    </tr>
  </tbody>
</table>

#### Bildschirmleser-Tests

Nachdem Sie sich nun an die Nutzung eines Bildschirmlesers gewöhnt haben, möchten wir, dass Sie ihn nutzen, um einige schnelle Barrierefreiheitstests durchzuführen, um eine Vorstellung davon zu bekommen, wie Bildschirmleser mit guten und schlechten Webseitenmerkmalen umgehen:

- Sehen Sie sich [good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html) an und beachten Sie, wie die Überschriften vom Bildschirmleser gefunden und zur Navigation verwendet werden können. Sehen Sie sich nun [bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html) an und beachten Sie, wie der Bildschirmleser keine dieser Informationen erhält. Stellen Sie sich vor, wie nervig das wäre, wenn man versucht, eine wirklich lange Textseite zu navigieren.
- Sehen Sie sich [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html) an und beachten Sie, wie sie in ihrer Ausstellung sinnvoll sind. Dies ist bei [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html) nicht der Fall — sie sind alle nur "Hier klicken".
- Sehen Sie sich [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html) an und beachten Sie, wie die Formulareingaben durch ihre Labels beschrieben werden, da wir die `<label>`-Elemente richtig verwendet haben. In [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html) erhalten sie eine unhilfreiche Bezeichnung wie "leer".
- Sehen Sie sich unser [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html) Beispiel an und sehen Sie, wie der Bildschirmleser in der Lage ist, Spalten und Zeilen von Inhalten zu assoziieren und sie zusammen vorzulesen, weil wir die Kopfzeilen richtig definiert haben. In [bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) können keine der Zellen miteinander assoziiert werden. Beachten Sie, dass NVDA sich seltsam verhält, wenn Sie nur eine einzige Tabelle auf einer Seite haben; Sie könnten stattdessen die [WebAIM-Tabelle-Testseite](https://webaim.org/articles/nvda/tables.htm) ausprobieren.
- Sehen Sie sich das [WAI-ARIA Live Regionen Beispiel](https://www.freedomscientific.com/SurfsUp/AriaLiveRegions.htm) an, das wir bereits gesehen haben, und beachten Sie, wie der Bildschirmleser den ständig aktualisierten Abschnitt mitliest, sobald er aktualisiert wird.

### Benutzer-Tests

Wie bereits erwähnt, können Sie sich nicht allein auf automatisierte Werkzeuge zur Bestimmung von Barrierefreiheit-Problemen auf Ihrer Seite verlassen. Es wird empfohlen, dass Sie bei der Erstellung Ihres Testplans, wenn möglich, einige Barrierefreiheits-Benutzergruppen einbeziehen (siehe unseren [Benutzer-Testing-Abschnitt](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#user_testing) früher im Kurs für einige weitere Kontexte). Versuchen Sie, einige Nutzer von Bildschirmleseprogrammen, einige rein keyboard-nutzende Nutzer, einige nicht-hörende Nutzer und möglicherweise auch andere Gruppen einzubinden, je nach Ihren Anforderungen.

## Barrierefreiheit-Test-Checkliste

Die folgende Liste bietet eine Checkliste, der Sie folgen sollten, um sicherzustellen, dass Sie die empfohlene Barrierefreiheit-Tests für Ihr Projekt durchgeführt haben:

1. Stellen Sie sicher, dass Ihr HTML so semantisch korrekt wie möglich ist. [Validierung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#validation) ist ein guter Anfang, ebenso wie die Verwendung eines [Auditing Tools](#prüfwerkzeuge).
2. Überprüfen Sie, ob Ihre Inhalte ohne CSS Sinn machen.
3. Stellen Sie sicher, dass Ihre Funktionalität [keyboard-zugänglich](#verwendung_nativer_tastaturzugänglichkeit) ist. Testen Sie mit Tab, Rückgabe/Eingabe usw.
4. Stellen Sie sicher, dass Ihre nicht-textlichen Inhalte [Textalternativen](#textalternativen) haben. Ein [Auditing Tool](#prüfwerkzeuge) ist gut zum Erkennen solcher Probleme.
5. Stellen Sie sicher, dass der [Farbkontrast](#farbe_und_farbkontrast) Ihrer Seite akzeptabel ist, indem Sie ein geeignetes Prüfwerkzeug verwenden.
6. Stellen Sie sicher, dass [versteckter Inhalt](#inhalt_verstecken) von Bildschirmleseprogrammen sichtbar ist.
7. Stellen Sie sicher, dass die Funktionalität so weit wie möglich ohne JavaScript nutzbar ist.
8. Verwenden Sie ARIA, um die Barrierefreiheit dort zu verbessern, wo es angemessen ist.
9. Lassen Sie Ihre Seite durch ein [Auditing Tool](#prüfwerkzeuge) überprüfen.
10. Testen Sie sie mit einem Bildschirmleser.
11. Schließen Sie eine Barrierefreiheits-Policy/Erklärung ein und platzieren Sie sie irgendwo findbar auf Ihrer Seite, um zu sagen, was Sie getan haben.

## Hilfe finden

Es gibt viele andere Probleme, denen Sie bei Barrierefreiheit begegnen können; das Wichtigste ist wirklich, wie man online Antworten findet. Konsultieren Sie den [Hilfe finden Abschnitt des HTML und CSS Artikels](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help) für einige gute Hinweise.

## Zusammenfassung

Hoffentlich hat Ihnen dieser Artikel ein gutes Fundament in den grundlegenden Barrierefreiheitsproblemen gegeben, denen Sie begegnen könnten, und wie Sie sie testen und überwinden können.

Im nächsten Artikel werden wir die Feature-Erkennung näher beleuchten.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/JavaScript","Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing")}}
