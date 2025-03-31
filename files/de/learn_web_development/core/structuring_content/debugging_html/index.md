---
title: HTML-Debugging
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 44f398527f2b0195a7c3b35db0a53c80aebe8e48
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was ist, wenn etwas schiefgeht und Sie den Fehler im Code nicht finden können? Dieser Artikel führt Sie in einige Werkzeuge ein, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantik auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die wichtigsten Hintergründe zum Debuggen von HTML</li>
          <li>Den DOM-Inspektor in Ihrem Browser DevTools verwenden, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Erforschung häufiger HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validator</a>, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Wenn man irgendeine Art von Code schreibt, ist alles in Ordnung, bis zu dem gefürchteten Moment, in dem ein Fehler auftritt — Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert — entweder gar nicht oder nicht ganz so, wie Sie es wollten. Zum Beispiel zeigt das folgende Beispiel einen Fehler, der auftritt, wenn versucht wird, ein einfaches Programm in der [Rust](https://www.rust-lang.org/) Sprache zu {{Glossary("compile", "kompilieren")}}.

![Ein Konsolenfenster zeigt das Ergebnis beim Versuch, ein Rust-Programm mit einem fehlenden Anführungszeichen um eine Zeichenkette in einer Druckanweisung zu kompilieren. Die gemeldete Fehlermeldung lautet: error: unterminated double quote string.](error-message.png)

Hier ist die Fehlermeldung relativ leicht verständlich — "unterminated double quote string". Wenn Sie das Listing betrachten, können Sie wahrscheinlich erkennen, dass `println!(Hello, world!");` logischerweise ein Anführungszeichen fehlen könnte. Allerdings können Fehlermeldungen schnell komplizierter werden und sind weniger leicht zu interpretieren, je größer die Programme werden. Selbst einfache Fälle können für jemanden, der nichts über Rust weiß, ein wenig einschüchternd wirken.

Debuggen muss jedoch nicht beängstigend sein — der Schlüssel, um sich mit dem Schreiben und Debuggen von Code wohlzufühlen, liegt in der Vertrautheit mit der Sprache und den dazugehörigen Tools.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird vor dem Parsen nicht in eine andere Form kompiliert (es wird _interpretiert_, nicht _kompiliert_). Und die Syntax von HTML-{{Glossary("element", "Elementen")}} ist arguably viel leichter zu verstehen als eine „echte Programmiersprache“ wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **permissiver** als das Parsen der meisten Programmiersprachen, was sowohl gut als auch schlecht ist.

Aber was meinen wir mit permissiv? Nun, im Allgemeinen, wenn Sie etwas im Code falsch machen, gibt es zwei Haupttypen von Fehlern, denen Sie begegnen werden:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der zuvor gezeigte Rust-Fehler. Diese sind normalerweise leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax zwar korrekt ist, der Code aber nicht das tut, was Sie beabsichtigt haben, was dazu führt, dass das Programm falsch ausgeführt wird. Diese sind oft schwerer zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zu der Fehlerquelle führt.

HTML selbst leidet nicht unter Syntaxfehlern, weil Browser es permissiv parsen, was bedeutet, dass die Seite noch angezeigt wird, selbst wenn es Syntaxfehler im Quellcode gibt. Browser haben eingebaute Regeln, um festzulegen, wie fehlerhaft geschriebenes HTML-Markup (oft als **ungültiges** oder **schlecht geformtes** Markup bezeichnet) zu interpretieren ist, und ändern es automatisch in ein gültiges Markup.

Zum Beispiel enthält das folgende HTML-Snippet falsch verschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Der abschließende `</strong>`-Tag sollte vor dem abschließenden `</em>`-Tag stehen, tut es aber nicht — er steht danach.

Wenn Sie dieses HTML in einen Browser laden und den [gerenderten DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) betrachten, werden Sie sehen, dass die Verschachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erzeugt, aber wie Sie [später](#active_learning_studying_html_using_the_dom_inspector) sehen werden, ist das nicht immer der Fall. Sie bekommen zwar immer _etwas_, das ausgeführt wird, aber der Browser trifft nicht immer die richtige Entscheidung, was Probleme verursachen kann. Es ist besser, von Anfang an korrektes Markup zu schreiben.

> [!NOTE]
> HTML wird permissiv geparst, weil bei der Erschaffung des Webs beschlossen wurde, dass die Veröffentlichung von Inhalten wichtiger ist, als darauf zu bestehen, dass die Syntax absolut korrekt ist. Das Web wäre heute wahrscheinlich nicht so populär, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später zeigen wir Ihnen, wie Sie mit einem Tool, das [HTML-Validator](#html-validierung) genannt wird, HTML-Fehler finden können, aber zuerst zeigen wir Ihnen, wie Sie Ihren HTML-Code manuell mit einem **DOM-Inspektor** überprüfen, welche Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwendung eines DOM-Inspektors

Alle modernen Browser verfügen über eine Reihe von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (Devtools), die in sie integriert sind und eine Reihe von Funktionen zur Untersuchung der im aktuellen Tab geladenen Webseite bieten. Diese können Ihnen zeigen, welches HTML auf der Seite gerendert wird, welcher CSS-Stil auf jeden DOM-Knoten angewendet wird, welches JavaScript auf der Seite ausgeführt wird und mehr. Sie ermöglichen es Ihnen auch, den aktuell laufenden Code zu bearbeiten und die Wirkung live auf der Seite zu sehen.

Sie können die Devtools auf ähnliche Weise in jedem Browser öffnen — erfahren Sie, wie Sie die Devtools in Ihrem Browser öffnen, auf [How to open the devtools in your browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser).

Für diesen Artikel ist die einzige relevante Devtools-Funktion der **DOM-Inspektor**, der den aktuell gerenderten HTML-DOM anzeigt und dessen Bearbeitung ermöglicht. Schauen wir uns das jetzt an:

1. Öffnen Sie die Devtools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich an derselben Stelle in jedem Browser — dem ersten Tab in den Devtools am Beginn der Zeile. In Firefox ist er als _Inspector_ gekennzeichnet, während er in Safari, Edge und Chrome _Elements_ heißt. Dieser Tab sollte standardmäßig ausgewählt sein, wenn Sie die Devtools zum ersten Mal öffnen, falls nicht, wählen Sie ihn aus.
3. Untersuchen Sie die im Tab gezeigte DOM-Baumstruktur und beachten Sie, wie Sie auf die kleinen Erweiterungspfeile am Beginn jedes DOM-Knotens klicken können, um diese zu erweitern und zu kollabieren und deren Nachfolger-Knoten zu zeigen. Sie können auch die Aufwärts- und Abwärtspfeiltasten verwenden, um durch die Knoten zu navigieren, und die Rechts- und Linkspfeiltasten, um die Knoten zu erweitern oder zu kollabieren.
4. Versuchen Sie auch, über die Knoten zu schweben (oder sie mit den Cursortasten auszuwählen) und beachten Sie, wie das aktuell ausgewählte Element im Viewport hervorgehoben wird.
5. Sie können auch den gerenderten DOM bearbeiten. Wir werden die Bearbeitungsfunktionalität nicht in diesem Artikel verwenden, aber nehmen Sie sich etwas Zeit, um nachzusehen, wie das funktioniert, falls Sie neugierig sind.

## Aktives Lernen: Studium von HTML mit dem DOM-Inspektor

Es ist Zeit, einige HTML-Codes mit dem DOM-Inspektor zu studieren und zu sehen, wie der Browser mit gängigen Markup-Fehlern umgeht.

1. Speichern Sie zuerst das folgende HTML-Dateilisting als `debug-example.html` irgendwo auf Ihrem lokalen Rechner. Diese Demo ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erforschen werden.

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

2. Öffnen Sie es als Nächstes in einem Browser. Sie werden etwas sehen wie:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen zu gängigen HTML-Fehlern, wie nicht geschlossenen Elementen, schlecht verschachtelten Elementen und nicht geschlossenen Attributen.](badly-formed-html.png)
3. Das sieht sofort nicht großartig aus; schauen wir uns den Quellcode an, um zu sehen, ob wir herausfinden können, warum (nur der Body-Inhalt wird angezeigt):

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

4. Überprüfen wir die Probleme:

   - Die {{htmlelement("p","Absatz")}}- und {{htmlelement("li","Listenelement")}}-Elemente haben keine schließenden Tags. Angesichts des obigen Bildes scheint dies das Rendering des Markups nicht allzu sehr beeinträchtigt zu haben, da leicht zu erkennen ist, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keinen schließenden Tag. Dies ist etwas problematischer, da es nicht leicht zu erkennen ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text fett gedruckt.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Aufgrund des vorherigen Problems ist es nicht leicht zu erkennen, wie dies interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Element/a#href)-Attributwert fehlt ein abschließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht gerendert.

5. Untersuchen wir nun das gerenderte DOM, im Gegensatz zum Quellcode. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie werden eine Darstellung des gerenderten Markups sehen: ![Der HTML-Inspektor in Firefox, mit dem Absatzbeispiel hervorgehoben, das den Text "What causes errors in HTML?" zeigt. Hier sehen Sie, dass der Absatzelement vom Browser geschlossen wurde.](html-inspector.png)
6. Schauen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox gemacht; andere moderne Browser _sollten_ das gleiche Ergebnis liefern):

   - Die Absätze und Listenelemente wurden mit schließenden Tags versehen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden einzelnen Textblock in sein eigenes `<strong>`-Element gewickelt, bis ans Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie folgt korrigiert:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Anführungszeichen wurde komplett gelöscht. Das letzte Listenelement sieht folgendermaßen aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Wie Sie am obigen Beispiel sehen können, sollten Sie sicherstellen, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gezeigten ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Das Werkzeug für diese Aufgabe ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der von der W3C erstellt und gepflegt wird (über die Sie im [Webstandards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) gelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, der Ihnen zeigt, was mit Ihrem HTML nicht stimmt.

![Die HTML-Validator-Startseite](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt etwas HTML-Code eingeben.

## Aktives Lernen: Validierung eines HTML-Dokuments

Versuchen wir dies mit unserem [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html).

1. Laden Sie zunächst den [Markup Validation Service](https://validator.w3.org/) in einer neuen Browser-Registerkarte, falls er noch nicht geöffnet ist.
2. Wechseln Sie zur [Validierung durch Direkteingabe](https://validator.w3.org/#validate_by_input) Registerkarte.
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in das große Textfeld im Markup Validation Service ein.
4. Drücken Sie die Schaltfläche _Check_.

Dies sollte Ihnen eine Liste von Fehlern und weiteren Informationen geben.

![Eine Liste der HTML-Validierungsergebnisse aus dem W3C-Markup-Validierungsdienst](validation-results.png)

### Die Fehlermeldungen interpretieren

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal nicht leicht zu verstehen. Mit ein wenig Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu korrigieren. Gehen wir die Fehlermeldungen durch und sehen, was sie bedeuten. Sie werden sehen, dass jede Nachricht mit einer Zeilen- und Spaltennummer kommt, die Ihnen hilft, den Fehler leicht zu lokalisieren.

- "End tag `li` implied, but there were open elements" (2 Instanzen): Diese Nachrichten zeigen an, dass ein Element geöffnet ist, das geschlossen werden sollte. Der endende Tag wird angedeutet, ist aber tatsächlich nicht vorhanden. Die Zeilen/Spalten-Information zeigt auf die erste Zeile nach der Zeile, in der das abschließende Tag tatsächlich sein sollte, aber das ist ein ausreichender Hinweis darauf, was falsch ist.
- "Unclosed element `strong`": Das ist wirklich leicht zu verstehen — ein {{htmlelement("strong")}}-Element ist ungeschlossen, und die Zeilen/Spalten-Information verweist direkt darauf, wo es ist.
- "End tag `strong` violates nesting rules": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen/Spalten-Information zeigt, wo sie sich befinden.
- "End of file reached when inside an attribute value. Ignoring tag": Dies ist eher kryptisch; es bezieht sich darauf, dass irgendwo ein Attributwert nicht richtig gebildet ist, möglicherweise in der Nähe des Dateiende, weil das Dateiende innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element fehlerhaft ist.
- "End of file seen and there were open elements": Das ist etwas mehrdeutig, aber im Grunde bezieht es sich darauf, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern zeigen auf die letzten Zeilen in der Datei, und diese Fehlermeldung enthält eine Codezeile, die ein Beispiel für ein offenes Element verdeutlicht:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein abschließendes Anführungszeichen fehlt, kann durch die Interpretation des Restdokuments als Attributinhalt zu einem offenen Element führen.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element aufgrund des fehlenden schließenden Anführungszeichens nicht geschlossen ist.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen. Eine gute Strategie ist es, einige Fehler gleichzeitig zu beheben und dann Ihr HTML nach jedem Durchlauf zu überprüfen, um zu sehen, welche Fehler übrig bleiben. Manchmal führt die Behebung eines früheren Fehlers dazu, dass andere Fehlermeldungen ebenfalls verschwinden — mehrere Fehler können oft durch ein einzelnes Problem in einer Dominoeffekt verursacht werden.

Sie werden wissen, dass alle Fehler behoben sind, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen mitteilt, dass es keine Fehler oder Warnungen gibt. Zum Zeitpunkt des Schreibens sagte es: "Dokumentenprüfung abgeschlossen. Keine Fehler oder Warnungen zu zeigen."

## Zusammenfassung

Das war's also, eine Einführung in das Debuggen von HTML, die Ihnen einige nützliche Fertigkeiten geben sollte, auf die Sie beim Debugging von HTML, aber auch von CSS- und JavaScript-Code in späteren Teilen des Kurses zählen können. Dies markiert auch das Ende des _Inhalte mit HTML strukturieren_ Moduls.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
