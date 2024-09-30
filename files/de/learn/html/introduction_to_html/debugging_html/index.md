---
title: Debugging HTML
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

HTML zu schreiben ist in Ordnung, aber was passiert, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code liegt? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit HTML, wie es zum Beispiel in <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        >, und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellen von Hyperlinks</a
        >behandelt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie die Grundlagen der Verwendung von Debugging-Tools, um Probleme in HTML zu finden.
      </td>
    </tr>
  </tbody>
</table>

## Debuggen ist nicht beängstigend

Beim Schreiben irgendeiner Art von Code ist meistens alles in Ordnung, bis zu dem gefürchteten Moment, in dem ein Fehler auftritt — Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert — entweder überhaupt nicht oder nicht ganz so, wie Sie es wollten. Zum Beispiel zeigt das folgende Beispiel einen Fehler, der beim [Kompilieren](/de/docs/Glossary/compile) eines einfachen Programms in der [Rust](https://www.rust-lang.org/) Sprache auftritt.

![Ein Konsolenfenster zeigt das Ergebnis eines Kompilierungsversuchs eines Rust-Programms mit einem fehlenden Anführungszeichen um einen String in einer print-Anweisung. Die Fehlermeldung lautet: error: unterminated double quote string.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen — "unbeendeter doppelter Anführungszeichen-String". Wenn Sie das Listing ansehen, können Sie wahrscheinlich erkennen, dass `println!(Hello, world!");` logisch ein doppeltes Anführungszeichen fehlen könnte. Allerdings können Fehlermeldungen schnell komplizierter und schwer verständlicher werden, je größer die Programme werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, etwas einschüchternd wirken.

Debuggen muss allerdings nicht beängstigend sein — der Schlüssel, sich beim Schreiben und Debuggen jeder Programmiersprache oder jedes Codes wohlzufühlen, ist die Vertrautheit mit sowohl der Sprache als auch den Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht in eine andere Form kompiliert, bevor der Browser es parst und das Ergebnis anzeigt (es wird _interpretiert_, nicht _kompiliert_). Und die [Element](/de/docs/Glossary/element)-Syntax von HTML ist vermutlich viel leichter zu verstehen als eine "echte Programmiersprache" wie Rust, [JavaScript](/de/docs/Glossary/JavaScript) oder [Python](/de/docs/Glossary/Python). Die Art und Weise, wie Browser HTML parsen, ist deutlich **freizügiger** als die Ausführung von Programmiersprachen, was sowohl ein Vorteil als auch ein Nachteil ist.

### Freizügiger Code

Was meinen wir also mit freizügig? Nun, im Allgemeinen gibt es, wenn Sie etwas im Code falsch machen, zwei Haupttypen von Fehlern, auf die Sie stoßen werden:

- **Syntaxfehler**: Das sind Rechtschreib- oder Zeichensetzungsfehler in Ihrem Code, die tatsächlich dazu führen, dass das Programm nicht läuft, wie der oben gezeigte Rust-Fehler. Diese sind in der Regel leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Das sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwerer zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

HTML selbst leidet nicht unter Syntaxfehlern, da Browser es freizügig parsen, was bedeutet, dass die Seite trotzdem angezeigt wird, auch wenn Syntaxfehler vorhanden sind. Browser haben eingebaute Regeln, um zu definieren, wie falsch geschriebenes Markup interpretiert werden soll, sodass Sie etwas laufendes bekommen, auch wenn es nicht das ist, was Sie erwartet haben. Das kann natürlich trotzdem ein Problem sein!

> [!NOTE]
> HTML wird freizügig geparst, da es bei der Erschaffung des Webs als wichtiger erachtet wurde, den Menschen zu ermöglichen, ihre Inhalte zu veröffentlichen, als die Syntax absolut korrekt zu machen. Das Web wäre wahrscheinlich nicht so populär, wie es heute ist, wenn es von Anfang an strenger gewesen wäre.

### Aktives Lernen: Freizügigen Code untersuchen

Es ist Zeit, die freizügige Natur von HTML-Code zu studieren.

1. Laden Sie zunächst unser [Debug-Beispiel-Demo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) herunter und speichern Sie es lokal. Dieses Demo wurde absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erkunden können (das HTML-Markup wird als **schlecht formatiert** bezeichnet, im Gegensatz zu **gut formatiert**).
2. Öffnen Sie es anschließend in einem Browser. Sie werden etwas wie dieses sehen:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen über häufige HTML-Fehler, wie nicht geschlossene Elemente, schlecht verschachtelte Elemente und nicht geschlossene Attribute. ](badly-formed-html.png)
3. Das sieht sofort nicht großartig aus; schauen wir uns den Quellcode an, um zu sehen, ob wir herausfinden können, warum (nur der Inhalt des `body`-Abschnitts wird gezeigt):

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

4. Lassen Sie uns die Probleme überprüfen:

   - Die {{htmlelement("p", "paragraph")}}- und {{htmlelement("li", "list item")}}-Elemente haben keine Schlusstag. Beim Betrachten des obigen Bildes scheint dies die Darstellung des Markups nicht allzu sehr beeinträchtigt zu haben, da es leicht zu erahnen ist, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keinen Schlusstag. Dies ist etwas problematischer, da es nicht leicht ersichtlich ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text stark hervorgehoben.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist nicht einfach zu sagen, wie dies interpretiert wurde, aufgrund des vorherigen Problems.
   - Der [`href`](/de/docs/Web/HTML/Element/a#href)-Attributwert fehlt ein abschließendes doppeltes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht gerendert.

5. Lassen Sie uns nun den von der Quelle gerenderten Markup betrachten und nicht den Code im Quelltext. Dazu können wir die Entwicklerwerkzeuge des Browsers verwenden. Wenn Sie nicht wissen, wie Sie die Entwicklerwerkzeuge Ihres Browsers verwenden, nehmen Sie sich ein paar Minuten Zeit, um [Entdecken Sie Browser-Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) zu überprüfen.
6. Im DOM-Inspektor können Sie sehen, wie das gerenderte Markup aussieht: ![Der HTML-Inspektor in Firefox, mit dem hervorgehobenen Absatz unseres Beispiels, zeigt den Text "What causes errors in HTML?" Hier können Sie sehen, dass das Absatz-Element vom Browser geschlossen wurde.](html-inspector.png)
7. Verwenden wir den DOM-Inspektor, um unseren Code im Detail zu erkunden und zu sehen, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser sollten das gleiche Ergebnis liefern):

   - Die Absätze und Listenelemente wurden mit Schlusstag versehen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden separaten Textblock mit seinem eigenen `strong`-Tag umwickelt, bis zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde wie folgt vom Browser behoben:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden doppelten Anführungszeichen wurde insgesamt gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

### HTML-Validierung

Aus dem obigen Beispiel können Sie sehen, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut formatiert ist! Aber wie? In einem kleinen Beispiel wie dem oben gezeigten ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Die beste Strategie besteht darin, Ihre HTML-Seite durch den [Markup Validation Service](https://validator.w3.org/) laufen zu lassen — erstellt und gepflegt von der W3C, der Organisation, die für die Spezifikationen verantwortlich ist, die HTML, CSS und andere Webtechnologien definieren. Diese Webseite nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, der Ihnen sagt, was an Ihrem HTML falsch ist.

![Die HTML-Validierungs-Startseite](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt einige HTML-Codes eingeben.

### Aktives Lernen: Ein HTML-Dokument validieren

Versuchen wir dies mit unserem [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html).

1. Laden Sie zunächst den [Markup Validation Service](https://validator.w3.org/) in einem Browser-Tab, falls er noch nicht geöffnet ist.
2. Wechseln Sie zu dem [Validate by Direct Input](https://validator.w3.org/#validate_by_input) Tab.
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den `body`) und fügen Sie ihn in das große Textfeld des Markup Validation Service ein.
4. Drücken Sie die _Check_-Taste.

Dies sollte Ihnen eine Liste mit Fehlern und weiteren Informationen geben.

![Eine Liste von HTML-Validierungsergebnissen aus dem W3C-Markup-Validierungsdienst](validation-results.png)

#### Fehlermeldungen interpretieren

Die Fehlermeldungen sind in der Regel hilfreich, aber manchmal sind sie nicht so hilfreich; mit ein wenig Übung können Sie lernen, wie Sie diese interpretieren, um Ihren Code zu beheben. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden feststellen, dass jede Nachricht mit einer Zeilen- und Spaltennummer versehen ist, die Ihnen hilft, den Fehler leicht zu finden.

- "End tag `li` implied, but there were open elements" (2 Vorkommen): Diese Nachrichten weisen darauf hin, dass ein Element offen ist, das geschlossen werden sollte. Der Schlusstag wird angenommen, ist jedoch nicht wirklich vorhanden. Die Zeilen/Spalten-Informationen weisen auf die erste Zeile nach der Zeile hin, in der der Schlusstag tatsächlich sein sollte, aber dies ist ein guter Anhaltspunkt, um zu sehen, was falsch ist.
- "Unclosed element `strong`": Dies ist wirklich leicht zu verstehen — ein {{htmlelement("strong")}}-Element ist ungeschlossen, und die Zeilen/Spalten-Informationen weisen direkt auf den Ort hin, an dem es sich befindet.
- "End tag `strong` violates nesting rules": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen/Spalten-Informationen geben an, wo sie sich befinden.
- "End of file reached when inside an attribute value. Ignoring tag": Diese Meldung ist ziemlich kryptisch; sie bezieht sich darauf, dass es irgendwo einen Attributwert gibt, der nicht richtig formatiert ist, möglicherweise in der Nähe des Endes der Datei, da das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element fehlerhaft ist.
- "End of file seen and there were open elements": Diese Meldung ist etwas zweideutig, bezieht sich jedoch im Wesentlichen darauf, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern verweisen auf die letzten Zeilen der Datei, und diese Fehlermeldung wird mit einer Codezeile geliefert, die ein Beispiel für ein offenes Element angibt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein abschließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element nicht geschlossen wird, aufgrund des fehlenden abschließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich darüber keine Sorgen — eine gute Idee ist es, zu versuchen, ein paar Fehler gleichzeitig zu beheben. Versuchen Sie dann, Ihr HTML erneut zu validieren, um zu sehen, welche Fehler noch übrig sind. Manchmal wird durch das Beheben eines früheren Fehlers auch andere Fehlermeldungen beseitigt — mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, dass alle Ihre Fehler behoben sind, wenn Sie das folgende Banner in Ihrer Ausgabe sehen:

![Banner, das lautet "Das Dokument validiert sich gemäß dem angegebenen Schema(n) und weiteren vom Validator geprüften Einschränkungen."](valid-html-banner.png)

## Zusammenfassung

Damit haben wir eine Einführung in die Fehlerbehebung in HTML abgeschlossen, die Ihnen einige nützliche Fähigkeiten vermitteln sollte, die Sie in Anspruch nehmen können, wenn Sie später in Ihrer Karriere CSS, JavaScript und andere Arten von Code debuggen. Dies markiert auch das Ende der Lernartikel des Moduls zur Einführung in HTML — jetzt können Sie mit unserem Bewertungsprozess fortfahren: Der erste ist unten verlinkt.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
