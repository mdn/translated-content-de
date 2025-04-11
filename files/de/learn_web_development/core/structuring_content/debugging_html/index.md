---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was ist, wenn etwas schiefgeht und Sie den Fehler im Code nicht finden können? Dieser Artikel stellt Ihnen einige Werkzeuge vor, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basis-HTML-Syntax</a
        > behandelt. Semantik auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Wichtige Hintergrundinformationen zum Debuggen von HTML</li>
          <li>Verwendung des DOM-Inspektors in den Entwicklerwerkzeugen Ihres Browsers, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Erkundung häufiger HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a> zur Erkennung von HTML-Fehlern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Beim Schreiben von Code ist alles in Ordnung, bis der gefürchtete Moment kommt, wenn ein Fehler auftritt — Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert — entweder gar nicht oder nicht ganz so, wie Sie es wollten. Zum Beispiel zeigt das Folgende einen Fehler, der beim Versuch, ein einfaches Programm zu {{Glossary("compile", "kompilieren")}}, das in der [Rust](https://www.rust-lang.org/) Sprache geschrieben wurde, auftritt.

![Ein Konsolenfenster zeigt das Ergebnis des Versuchs, ein Rust-Programm zu kompilieren, bei dem ein Anführungszeichen in einer Druckanweisung fehlt. Die Fehlermeldung lautet: Fehler: Nicht abgeschlossener doppelter Anführungszeichen-String.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen — "nicht abgeschlossener doppelter Anführungszeichen-String". Wenn Sie sich die Auflistung ansehen, können Sie wahrscheinlich sehen, wie `println!(Hello, world!");` logischerweise ein Anführungszeichen fehlen könnte. Fehlermeldungen können jedoch schnell komplizierter und schwerer zu interpretieren werden, wenn Programme größer werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, ein wenig einschüchternd aussehen.

Debugging muss jedoch nicht beängstigend sein — der Schlüssel zu einem angenehmen Umgang mit dem Schreiben und Debuggen jeglichen Code ist die Vertrautheit mit der Sprache und den zugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird vor dem Parsen nicht in eine andere Form kompiliert (es wird _interpretiert_, nicht _kompiliert_). Und die HTML-{{Glossary("element", "Element")}}-Syntax ist wohl viel einfacher zu verstehen als eine "echte Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **nachsichtiger** als bei den meisten Programmiersprachen, was sowohl eine gute als auch eine schlechte Sache ist.

Aber was genau meinen wir mit nachsichtig? Nun, im Allgemeinen gibt es zwei Hauptfehlerarten, auf die Sie stoßen werden, wenn Sie etwas in Ihrem Code falsch machen:

- **Syntaxfehler**: Das sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der oben gezeigte Rust-Fehler. Diese sind in der Regel leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Das sind Fehler, bei denen die Syntax tatsächlich korrekt ist, aber der Code nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch ausgeführt wird. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Quelle des Fehlers führt.

HTML selbst leidet nicht unter Syntaxfehlern, weil Browser es nachsichtig parsen, das heißt, dass die Seite auch dann angezeigt wird, wenn im Quellcode Syntaxfehler vorhanden sind. Browser haben eingebaute Regeln, um anzugeben, wie nicht korrekt geschriebenes HTML-Markup (oft **ungültiges** oder **schlecht geformtes** Markup genannt) interpretiert werden soll und es automatisch in ein gültiges Markup zu ändern.

Zum Beispiel enthält das folgende HTML-Snippet falsch geschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, aber es ist nicht der Fall — es steht danach.

Wenn Sie dieses HTML in einen Browser laden und sich den [gerenderten DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) ansehen, werden Sie sehen, dass die Schachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das gut und schlecht zugleich? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erzeugt, aber wie Sie [später](#active_learning_studying_html_using_the_dom_inspector) sehen werden, ist das nicht immer der Fall. Sie erhalten immer _irgendetwas_, das funktioniert, aber der Browser trifft nicht immer die richtige Entscheidung, was zu Problemen führen kann. Es ist besser, von Anfang an korrektes Markup zu schreiben.

> [!NOTE]
> HTML wird nachsichtig geparst, weil bei der Schaffung des World Wide Web beschlossen wurde, dass das Veröffentlichen von Inhalten wichtiger ist als absolute Korrektheit der Syntax. Das Web wäre wahrscheinlich nicht so populär geworden, wenn es von Anfang an strikter gewesen wäre.

Wie finden Sie Markup-Fehler? Später zeigen wir Ihnen, wie Sie mit einem Tool namens [HTML-Validator](#html-validierung) Fehler in HTML finden können. Zuerst zeigen wir Ihnen jedoch, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** überprüfen können und welche Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwendung eines DOM-Inspektors

Alle modernen Browser verfügen über eine Reihe von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (Devtools in den Browser eingebaut) und bieten eine Funktionalität, die es ermöglicht, die Webseite im aktuellen Tab zu untersuchen. Diese Tools können Ihnen zeigen, welches HTML auf der Seite gerendert wird, welches CSS auf jeden DOM-Knoten angewendet wird, welches JavaScript auf der Seite ausgeführt wird und mehr. Sie ermöglichen auch das Bearbeiten des aktuell ausgeführten Codes und das direkte Beobachten der Auswirkungen auf der Seite.

Sie können die Devtools in jedem Browser auf ähnliche Weise öffnen – sehen Sie sich [Wie Sie die Devtools in Ihrem Browser öffnen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser) an, um zu erfahren, wie das geht.

Für diesen Artikel ist die einzige relevante Funktion der Devtools der **DOM-Inspektor**, der den aktuellen gerenderten HTML-DOM anzeigt und es ermöglicht, ihn zu bearbeiten. Lassen Sie uns das jetzt genauer anschauen:

1. Öffnen Sie die Devtools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Dieser befindet sich in jedem Browser an derselben Stelle — dem ersten Tab in den Devtools am Anfang der Zeile. In Firefox ist er mit _Inspector_ beschriftet, während er in Safari, Edge und Chrome mit _Elements_ beschriftet ist. Dies sollte der Tab sein, der beim ersten Öffnen der Devtools standardmäßig ausgewählt ist, aber wählen Sie ihn aus, falls dies nicht der Fall ist.
3. Untersuchen Sie die DOM-Baumstruktur im Tab und beachten Sie, wie Sie mit den kleinen Erweiterungspfeilen am Anfang jedes DOM-Knotens diese Knoten erweitern und reduzieren sowie deren Nachfahrenknoten offenlegen können. Sie können auch die Pfeiltasten nach oben und unten verwenden, um die Knoten auf- und abzubewegen, und die Pfeiltasten nach rechts und links verwenden, um die Knoten zu erweitern und zu reduzieren.
4. Probieren Sie auch aus, wie Sie über die Knoten schweben (oder sie mit den Pfeiltasten auswählen) und dabei genau darauf achten, dass das derzeit hervorgehobene (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können den gerenderten DOM auch bearbeiten. Wir werden die Bearbeitungsfunktionalität in diesem Artikel nicht verwenden, aber nehmen Sie sich die Zeit, nachzuschauen, wie das gemacht wird, wenn Sie neugierig sind.

## Aktives Lernen: Studium von HTML mit dem DOM-Inspektor

Es ist an der Zeit, etwas HTML-Code mit dem DOM-Inspektor zu studieren und zu sehen, wie der Browser mit häufigen Markup-Fehlern umgeht.

1. Speichern Sie zuerst die folgende HTML-Dateiliste als `debug-example.html` an einem beliebigen Ort auf Ihrem lokalen Computer. Dieses Demo-Beispiel wurde absichtlich mit einigen eingebauten Fehlern erstellt, die wir erkunden werden.

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

2. Öffnen Sie es anschließend in einem Browser. Sie werden etwas in dieser Art sehen:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen über häufige HTML-Fehler wie nicht geschlossene Elemente, falsch geschachtelte Elemente und ungeschlossene Attribute.](badly-formed-html.png)
3. Das sieht auf den ersten Blick nicht gut aus; sehen wir uns den Quellcode an, um zu verstehen, warum (nur die Inhaltsangaben des Body-Teils werden angezeigt):

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

4. Lasst uns die Probleme überprüfen:

   - Die {{htmlelement("p","Absätze")}}- und {{htmlelement("li","Listenelemente")}}-Elemente haben keine schließenden Tags. Beim Blick auf das obige Bild scheint dies das Markup-Rendering nicht allzu sehr beeinträchtigt zu haben, da es leicht ist, zu erkennen, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat kein schließendes Tag. Dies ist etwas problematischer, da es nicht leicht zu sagen ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text fett dargestellt.
   - Dieser Abschnitt ist schlecht geschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist aufgrund des vorherigen Problems nicht leicht zu erkennen, wie dies interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt ein abschließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht gerendert.

5. Untersuchen wir nun den gerenderten DOM im Vergleich zum Quellcode. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie werden eine Darstellung des gerenderten Markups sehen: ![Der HTML-Inspektor in Firefox, mit dem hervorgehobenen Absatz unseres Beispiels zeigt den Text "What causes errors in HTML?" Hier können Sie sehen, dass das Absatz-Element vom Browser geschlossen wurde.](html-inspector.png)
6. Schauen Sie sich an, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ dasselbe Ergebnis liefern):

   - Die Absätze und Listenelemente wurden mit schließenden Tags versehen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden soll, daher hat der Browser jeden separaten Textblock in sein eigenes `<strong>`-Element eingeschlossen, bis zum Ende des Dokuments!
   - Die falsche Schachtelung wurde vom Browser wie hier gezeigt korrigiert:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Anführungszeichen wurde ganz gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Sie können aus dem obigen Beispiel ersehen, dass es wirklich wichtig ist, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gezeigten ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Das Werkzeug dafür ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der von der W3C erstellt und gepflegt wird (wie Sie im [Modell der Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) gelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, der Ihnen mitteilt, was an Ihrem HTML falsch ist.

![Die Webseite des HTML-Validators](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt etwas HTML-Code eingeben.

## Aktives Lernen: Validierung eines HTML-Dokuments

Versuchen wir dies mit unserem [Beispielformat](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html).

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er noch nicht geöffnet ist.
2. Wechseln Sie zur Registerkarte [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in das große Textfeld des Markup Validation Service ein.
4. Drücken Sie die _Check_-Taste.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen liefern.

![Eine Liste von HTML-Validierungsergebnissen vom W3C-Markup-Validierungsdienst](validation-results.png)

### Interpretation der Fehlermeldungen

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal sind sie nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, wie Sie diese interpretieren, um Ihren Code zu korrigieren. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden sehen, dass jede Nachricht mit einer Zeilen- und Spaltenzahl versehen ist, um Ihnen zu helfen, den Fehler leicht zu lokalisieren.

- "End tag `li` implied, but there were open elements" (2 Instanzen): Diese Nachrichten deuten darauf hin, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag wird impliziert, ist aber nicht tatsächlich vorhanden. Die Zeilen-/Spalteninformationen weisen auf die erste Zeile nach der Zeile hin, an der das schließende Tag tatsächlich stehen sollte, aber das ist ein ausreichender Hinweis auf das Problem.
- "Unclosed element `strong`": Dies ist wirklich einfach zu verstehen — ein {{htmlelement("strong")}}-Element ist nicht geschlossen, und die Zeilen-/Spalteninformationen zeigen genau darauf hin, wo es sich befindet.
- "End tag `strong` violates nesting rules": Dies weist auf die falsch geschachtelten Elemente hin, und die Zeilen-/Spalteninformationen zeigen, wo sie sich befinden.
- "End of file reached when inside an attribute value. Ignoring tag": Diese Nachricht ist eher kryptisch; sie bezieht sich darauf, dass es irgendwo eine Attributwert gibt, der nicht ordnungsgemäß gebildet ist, möglicherweise in der Nähe des Endes der Datei, weil das Ende der Datei innerhalb des Attributswerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis auf das fehlerhafte Element geben.
- "End of file seen and there were open elements": Diese Nachricht ist ein wenig vage, bezieht sich jedoch im Wesentlichen auf die Tatsache, dass es nicht geschlossene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern weisen auf die letzten Zeilen der Datei hin, und diese Fehlermeldung kommt mit einer Codezeile, die ein Beispiel eines offenen Elements zeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element aufgrund des fehlenden schließenden Anführungszeichens nicht geschlossen wird.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen. Eine gute Strategie besteht darin, ein paar Fehler gleichzeitig zu beheben und dann Ihre HTML nach jedem Satz von Korrekturen erneut zu validieren, um zu sehen, welche Fehler noch übrig sind. Manchmal verschwindet durch die Behebung eines früheren Fehlers auch eine andere Fehlermeldung — mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, dass alle Ihre Fehler behoben sind, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen mitteilt, dass keine Fehler oder Warnungen zu melden sind. Zum Zeitpunkt des Schreibens hieß es "Dokumentenprüfung abgeschlossen. Keine Fehler oder Warnungen zu zeigen."

## Zusammenfassung

Damit haben wir eine Einführung in das Debuggen von HTML, die Ihnen hoffentlich nützliche Fähigkeiten vermittelt hat, um HTML, CSS und JavaScript später im Kurs zu debuggen. Dies markiert auch das Ende des Moduls _Strukturierung von Inhalten mit HTML_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
