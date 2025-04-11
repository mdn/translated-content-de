---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist gut, aber was passiert, wenn etwas schiefgeht und Sie den Fehler im Code nicht finden können? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturelles HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die wichtigsten Grundlagen zur Fehlersuche in HTML</li>
          <li>Den DOM-Inspektor in den DevTools Ihres Browsers nutzen, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Erfoschen von häufigen HTML-Fehlertypen.</li>
          <li>Den <a href="https://validator.w3.org/">HTML-Validator</a> verwenden, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlersuche ist nicht beängstigend

Beim Schreiben von Code ist alles in Ordnung, bis zu dem gefürchteten Moment, in dem ein Fehler auftritt - Sie haben etwas falsch gemacht, also funktioniert Ihr Code nicht - entweder gar nicht oder nicht so, wie Sie es sich vorgestellt haben. Zum Beispiel zeigt das folgende Bild einen Fehler beim Versuch, ein einfaches Programm in der [Sprache Rust](https://www.rust-lang.org/) zu {{Glossary("compile", "kompilieren")}}.

![Ein Konsolenfenster zeigt das Ergebnis des Versuchs, ein Rust-Programm zu kompilieren, bei dem ein Anführungszeichen in einer Druckanweisung fehlt. Die Fehlermeldung lautet: Fehler: nicht abgeschlossenes doppeltes Anführungszeichen in Zeichenkette.](error-message.png)

Hier ist die Fehlermeldung relativ leicht verständlich – "nicht abgeschlossenes doppeltes Anführungszeichen". Wenn Sie sich die Auflistung ansehen, können Sie wahrscheinlich erkennen, dass `println!(Hello, world!");` logisch ein Anführungszeichen fehlen könnte. Fehlernachrichten können jedoch schnell komplizierter und weniger leicht zu interpretieren werden, wenn Programme größer werden, und selbst einfache Fälle können für jemanden, der sich mit Rust nicht auskennt, etwas einschüchternd wirken.

Die Fehlersuche muss jedoch nicht beängstigend sein – der Schlüssel zum vertrauten Umgang mit dem Schreiben und Debuggen von Code ist die Vertrautheit mit sowohl der Sprache als auch den zugehörigen Werkzeugen.

## HTML und Fehlersuche

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird vor dem Parsen nicht in eine andere Form kompiliert (es wird _interpretiert_, nicht _kompiliert_). Und die {{Glossary("element", "Element")}}-Syntax von HTML ist wohl viel einfacher zu verstehen als eine "echte Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **freizügiger** als die meisten Programmiersprachen, was sowohl gut als auch schlecht ist.

Aber zunächst, was meinen wir mit freizügig? Nun, im Allgemeinen gibt es zwei Hauptfehlerarten, die auftreten können, wenn Sie in Ihrem Code einen Fehler machen:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der zuvor gezeigte Rust-Fehler. Diese sind in der Regel leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, d.h. das Programm läuft fehlerhaft. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie auf die Fehlerquelle hinweist.

HTML selbst leidet nicht unter Syntaxfehlern, da Browser es freizügig parsen, was bedeutet, dass die Seite weiterhin angezeigt wird, auch wenn im Quellcode Syntaxfehler vorhanden sind. Browser haben eingebaute Regeln, um anzugeben, wie falsch geschriebener HTML-Code (oft als **ungültig** oder **schlecht-formatiert** bezeichnet) interpretiert werden soll, und ihn automatisch in gültigen Code umzuwandeln.

Zum Beispiel enthält das folgende HTML-Snippet falsch geschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, tut es aber nicht - es steht danach.

Wenn Sie dieses HTML in einen Browser laden und dann den [gerenderten DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) anschauen, werden Sie sehen, dass die Schachtelung durch den Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erstellt, aber wie Sie [später](#active_learning_studying_html_using_the_dom_inspector) sehen werden, ist dies nicht immer der Fall. Sie erhalten immer _etwas_, das funktioniert, aber der Browser macht nicht immer alles richtig, was zu Problemen führen kann. Es ist besser, von Anfang an korrekten Code zu schreiben.

> [!NOTE]
> HTML wird freizügig geparst, weil es beim ersten Entwurf des Webs prioritär war, Inhalte zu veröffentlichen, anstatt sicherzustellen, dass die Syntax absolut korrekt ist. Das Web wäre wahrscheinlich nicht so populär geworden, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später zeigen wir Ihnen, wie Sie mit einem Tool namens [HTML-Validator](#html-validierung) Fehler in HTML erkennen, aber zuerst zeigen wir Ihnen, wie Sie Ihren HTML-Code manuell mit einem **DOM-Inspektor** überprüfen und welche Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese möglicherweise interpretiert.

## Verwendung eines DOM-Inspektors

Alle modernen Browser verfügen über ein Set von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (DevTools), die in ihnen eingebaut sind und Funktionalitäten zum Untersuchen der in den aktuellen Tab geladenen Webseite bieten. Sie können Ihnen zeigen, welches HTML in der Seite gerendert wurde, welches CSS auf jeden DOM-Knoten angewendet wird, welcher JavaScript-Code auf der Seite läuft und mehr. Sie ermöglichen es Ihnen auch, den aktuell laufenden Code zu bearbeiten und die Auswirkung live auf der Seite zu sehen.

Sie können die DevTools auf ähnliche Weise in jedem Browser öffnen – siehe [Anleitung zum Öffnen der DevTools in Ihrem Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), um zu erfahren, wie es geht.

Für diesen Artikel ist die einzige relevante DevTools-Funktion der **DOM-Inspektor**, der den aktuell gerenderten HTML-DOM anzeigt und es Ihnen ermöglicht, diesen zu bearbeiten. Schauen wir uns dies nun an:

1. Öffnen Sie die DevTools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich in jedem Browser an derselben Stelle – als erster Tab in den DevTools am Anfang der Reihe. In Firefox ist er als _Inspector_ gekennzeichnet, während er in Safari, Edge und Chrome als _Elements_ bezeichnet ist. Dies sollte der Tab sein, der standardmäßig ausgewählt ist, wenn Sie die DevTools zum ersten Mal öffnen. Wählen Sie ihn aus, falls er es nicht ist.
3. Untersuchen Sie die im Tab angezeigte DOM-Baumstruktur und beachten Sie, wie Sie mit den kleinen Erweiterungspfeilen am Anfang eines jeden DOM-Knotens diese erweitern und zusammenklappen können, um ihre Nachkommenknoten anzuzeigen. Sie können auch die Aufwärts- und Abwärts-Cursor-Tasten verwenden, um sich auf und ab durch die Knoten zu bewegen, und die Rechts- und Links-Cursor-Tasten, um die Knoten zu erweitern und zu schließen.
4. Versuchen Sie auch, mit der Maus über die Knoten zu fahren (oder sie mit den Cursortasten auszuwählen) und beachten Sie, wie das aktuell anvisierte (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können auch den gerenderten DOM bearbeiten. Wir werden die Bearbeitungsfunktion in diesem Artikel nicht verwenden, aber nehmen Sie sich Zeit, um nachzuschauen, wie dies gemacht wird, wenn Sie neugierig sind.

## Aktives Lernen: HTML mit dem DOM-Inspektor untersuchen

Es ist Zeit, etwas HTML-Code mit dem DOM-Inspektor zu untersuchen und zu sehen, wie der Browser häufige Markup-Fehler behandelt.

1. Speichern Sie zuerst das folgende HTML-Dateiverzeichnis unter dem Namen `debug-example.html` irgendwo auf Ihrem lokalen Computer. Dieses Demo ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erforschen werden.

   ```html-nolint
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8">
       <title>HTML debugging examples</title>
     </head>

     <body>
       <h1>HTML debugging examples</h1>
       <p>What causes errors in HTML?
       <ul>
         <li>Unclosed elements: If an element is <strong>not closed properly,then its effect can spread to areas you didn't intend
         <li>Badly nested elements: Nesting elements properly is also very important for code behaving correctly. <strong>strong <em>strong emphasized?</strong> what is this?</em>
         <li>Unclosed attributes: Another common source of HTML problems. Let's look at an example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a>
       </ul>
     </body>
   </html>
   ```

2. Öffnen Sie es als nächstes in einem Browser. Sie werden etwas Ähnliches sehen wie dies:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen über häufige HTML-Fehler, wie nicht geschlossene Elemente, schlecht geschachtelte Elemente und nicht geschlossene Attribute. ](badly-formed-html.png)
3. Das sieht sofort nicht gut aus; schauen wir uns den Quellcode an, um zu sehen, ob wir herausfinden können, warum (es wird nur der Body-Inhalt angezeigt):

   ```html
   <h1>HTML debugging examples</h1>

   <p>What causes errors in HTML?

   <ul>
     <li>Unclosed elements: If an element is <strong>not closed properly,
         then its effect can spread to areas you didn't intend

     <li>Badly nested elements: Nesting elements properly is also very important
         for code behaving correctly. <strong>strong <em>strong emphasized?</strong>
         what is this?</em>

     <li>Unclosed attributes: Another common source of HTML problems. Let's
         look at an example: <a href="https://www.mozilla.org/>link to Mozilla
         homepage</a>
   </ul>
   ```

4. Werfen wir einen Blick auf die Probleme:

   - Die {{htmlelement("p","paragraph")}} und {{htmlelement("li","list item")}} Elemente haben keine schließenden Tags. Betrachtet man das obige Bild, scheint dies die Markup-Darstellung nicht gravierend beeinträchtigt zu haben, da leicht zu erkennen ist, wo ein Element enden und ein weiteres beginnen sollte.
   - Dem ersten {{htmlelement("strong")}}-Element fehlt ein schließendes Tag. Dies ist etwas problematischer, da es nicht einfach ist zu erkennen, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text fett dargestellt.
   - Dieser Abschnitt ist schlecht geschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist nicht einfach zu erkennen, wie dies aufgrund des vorherigen Problems interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt ein abschließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben – der Link wurde überhaupt nicht angezeigt.

5. Betrachten wir nun den gerenderten DOM anstelle des Quellcodes. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie sehen eine Darstellung des gerenderten Markups: ![Der HTML-Inspektor in Firefox, mit dem markierten Absatz unseres Beispiels, der den Text "What causes errors in HTML?" zeigt. Hier sehen Sie, dass das Absatz-Element durch den Browser geschlossen wurde.](html-inspector.png)
6. Schauen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu korrigieren (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ dasselbe Ergebnis liefern):

   - Die Absätze und Listenelemente wurden um schließende Tags ergänzt.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden separaten Textblock in sein eigenes `<strong>`-Element eingewickelt, bis ganz unten im Dokument!
   - Die inkorrekte Schachtelung wurde vom Browser wie folgt korrigiert:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Anführungszeichen wurde vollständig gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Aus dem obigen Beispiel können Sie ersehen, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut formatiert ist! Aber wie? In einem kleinen Beispiel wie dem oben gesehenen ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Das Werkzeug für diese Aufgabe ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der von der W3C erstellt und gepflegt wird (was Sie im [Web-Standards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) gelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, durchläuft es und gibt Ihnen einen Bericht, der Ihnen mitteilt, was mit Ihrem HTML falsch ist.

![Die HTML-Validator-Startseite](validator.png)

Um das zu prüfende HTML anzugeben, können Sie eine Webadresse bereitstellen, eine HTML-Datei hochladen oder direkt HTML-Code eingeben.

## Aktives Lernen: Ein HTML-Dokument validieren

Probieren wir das mit unserem [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) aus.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er noch nicht geöffnet ist.
2. Wechseln Sie zum Tab [Durch direkten Eingabe validieren](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in das große Textfeld ein, das im Markup Validation Service angezeigt wird.
4. Drücken Sie den _Prüfen_-Button.

Dies sollte Ihnen eine Liste von Fehlern und weiteren Informationen geben.

![Eine Liste der HTML-Validierungs-Ergebnisse des W3C-Markup-Validierungsdienstes](validation-results.png)

### Fehlermeldungen interpretieren

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal sind sie nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, wie diese zu interpretieren sind, um Ihren Code zu korrigieren. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden sehen, dass jede Nachricht mit einer Zeilen- und Spaltennummer versehen ist, um Ihnen zu helfen, den Fehler leicht zu finden.

- "End-Tag `li` impliziert, aber es waren offene Elemente" (2 Instanzen): Diese Nachrichten zeigen an, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag ist impliziert, aber tatsächlich nicht da. Die Zeilen- / Spalteninformation zeigt auf die erste Zeile nach der Zeile, wo das schließende Tag tatsächlich sein sollte, aber dies ist ein guter Hinweis darauf, was falsch ist.
- "Unclosed element `strong`": Das ist wirklich leicht zu verstehen – ein {{htmlelement("strong")}}-Element ist nicht geschlossen und die Zeilen- / Spalteninformation zeigt genau darauf, wo es sich befindet.
- "End-Tag `strong` verstößt gegen die Schachtelungsregeln": Dies weist auf die falsch geschachtelten Elemente hin und die Zeilen- / Spalteninformation zeigt, wo sie sich befinden.
- "Ende der Datei erreicht, als ein Attributwert geöffnet war. Tag ignorieren": Dies ist recht kryptisch; es bezieht sich auf die Tatsache, dass es irgendwo einen Attributwert gibt, der nicht richtig geformt ist, wahrscheinlich nahe dem Ende der Datei, weil das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element fehlerhaft ist.
- "Ende der Datei gesehen und es waren offene Elemente": Dies ist etwas zweideutig, bezieht sich aber grundsätzlich darauf, dass es offene Elemente gibt, die richtig geschlossen werden müssen. Die Zeilenangaben zeigen auf die letzten Zeilen der Datei und diese Fehlermeldung kommt mit einer Zeile Code, die ein Beispiel eines offenen Elements zeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein abschließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element aufgrund des fehlenden schließenden Anführungszeichens nicht geschlossen ist.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen. Eine gute Strategie besteht darin, einige Fehler auf einmal zu beheben und dann Ihr HTML nach jedem Satz von Korrekturen erneut zu validieren, um zu sehen, welche Fehler übrig sind. Manchmal wird durch das Beheben eines früheren Fehlers auch andere Fehlermeldungen beseitigt – mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, dass alle Fehler behoben sind, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen mitteilt, dass es keine Fehler zu melden gibt. Zum Zeitpunkt des Schreibens lautete es "Prüfung des Dokuments abgeschlossen. Keine Fehler oder Warnungen anzuzeigen."

## Zusammenfassung

Damit haben wir eine Einführung in das Debuggen von HTML, die Ihnen einige nützliche Fähigkeiten bietet, auf die Sie bei der Fehlersuche in HTML, aber auch in CSS und JavaScript, später im Kurs zählen können. Dies markiert auch das Ende des Moduls _Strukturierung von Inhalten mit HTML_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
