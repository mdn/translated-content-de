---
title: HTML-Debugging
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

HTML zu schreiben ist wunderbar, aber was passiert, wenn etwas schiefgeht und Sie den Fehler im Code nicht finden können? Dieser Artikel führt Sie in einige Werkzeuge ein, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundkenntnisse, wie zum Beispiel in <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Grundlagen des HTML-Textes</a
        >, und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellen von Hyperlinks</a
        > behandelt werden.
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

## Debugging ist nicht beängstigend

Beim Schreiben von Code funktioniert normalerweise alles gut, bis der gefürchtete Moment eintritt, in dem ein Fehler auftritt — Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert — entweder gar nicht oder nicht so, wie Sie es wollten. Zum Beispiel zeigt das folgende Beispiel einen Fehler, der beim Versuch, ein einfaches Programm in der [Rust](https://www.rust-lang.org/) Sprache zu [kompilieren](/de/docs/Glossary/compile), gemeldet wird.

![Ein Konsolenfenster, das das Ergebnis des Versuchs zeigt, ein Rust-Programm zu kompilieren, bei dem ein Anführungszeichen um einen String in einer Druckanweisung fehlt. Die gemeldete Fehlermeldung lautet: Fehler: nicht abgeschlossenes doppeltes Anführungszeichen.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen — "nicht abgeschlossenes doppeltes Anführungszeichen". Wenn Sie sich den Code ansehen, können Sie wahrscheinlich sehen, wie `println!(Hello, world!");` logischerweise ein doppeltes Anführungszeichen fehlt. Fehlermeldungen können jedoch schnell komplizierter und weniger leicht zu interpretieren werden, wenn Programme größer werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, etwas einschüchternd wirken.

Debugging muss jedoch nicht beängstigend sein — der Schlüssel, um sich mit dem Schreiben und Debuggen jeder Programmiersprache oder jedes Codes wohlzufühlen, liegt in der Vertrautheit mit sowohl der Sprache als auch den Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht in eine andere Form kompiliert, bevor es vom Browser analysiert und das Ergebnis angezeigt wird (es wird _interpretiert_, nicht _kompiliert_). Und die [Element](/de/docs/Glossary/element)-Syntax von HTML ist wohl einfacher zu verstehen als eine "echte Programmiersprache" wie Rust, [JavaScript](/de/docs/Glossary/JavaScript) oder [Python](/de/docs/Glossary/Python). Die Art und Weise, wie Browser HTML analysieren, ist weitaus **permissiver** als die Ausführung von Programmiersprachen, was sowohl gut als auch schlecht ist.

### Permissiver Code

Was meinen wir also mit permissiv? Im Allgemeinen gibt es zwei Haupttypen von Fehlern, auf die Sie stoßen werden, wenn Sie etwas falsch im Code machen:

- **Syntaxfehler**: Das sind Rechtschreib- oder Zeichensetzungsfehler in Ihrem Code, die tatsächlich dazu führen, dass das Programm nicht ausgeführt wird, wie der oben gezeigte Rust-Fehler. Diese lassen sich normalerweise leicht beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Das sind Fehler, bei denen die Syntax eigentlich korrekt ist, aber der Code nicht das ist, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwerer zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Quelle des Fehlers führt.

HTML selbst leidet nicht unter Syntaxfehlern, weil Browser es permissiv analysieren, was bedeutet, dass die Seite auch dann angezeigt wird, wenn Syntaxfehler vorliegen. Browser verfügen über eingebaute Regeln, um zu definieren, wie falsch geschriebene Markups interpretiert werden, sodass Sie etwas zum Laufen bringen, auch wenn es nicht das ist, was Sie erwartet haben. Das kann natürlich trotzdem ein Problem sein!

> [!NOTE]
> HTML wird permissiv analysiert, weil entschieden wurde, als das Web zum ersten Mal erstellt wurde, dass es wichtiger ist, den Menschen zu ermöglichen, ihre Inhalte zu veröffentlichen, als sicherzustellen, dass die Syntax absolut korrekt ist. Das Web wäre heute wahrscheinlich nicht so populär, wenn es von Anfang an strenger gewesen wäre.

### Aktives Lernen: Untersuchung von permissivem Code

Es ist an der Zeit, die permissive Natur von HTML-Code zu untersuchen.

1. Laden Sie zuerst unser [debug-example demo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) herunter und speichern Sie es lokal. Dieses Demo ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir untersuchen werden (das HTML-Markup wird als **schlecht geformt** bezeichnet, im Gegensatz zu **gut geformt**).
2. Öffnen Sie es dann in einem Browser. Sie werden etwas Ähnliches sehen wie dies:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen über häufige HTML-Fehler, wie nicht geschlossene Elemente, schlecht verschachtelte Elemente und nicht geschlossene Attribute. ](badly-formed-html.png)
3. Das sieht sofort nicht gut aus; schauen wir uns den Quellcode an, um zu sehen, ob wir herausfinden können, warum (nur der Inhalt des Bodys wird angezeigt):

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

   - Die {{htmlelement("p","paragraph")}}- und {{htmlelement("li","list item")}}-Elemente haben keine schließenden Tags. Beim Betrachten des obigen Bildes scheint dies die Darstellung des Markups nicht allzu sehr beeinträchtigt zu haben, da es leicht zu erkennen ist, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keinen schließenden Tag. Dies ist etwas problematischer, da es nicht einfach ist zu erkennen, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text stark hervorgehoben.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist nicht einfach zu erkennen, wie dies interpretiert wurde, da das vorherige Problem besteht.
   - Dem [`href`](/de/docs/Web/HTML/Element/a#href)-Attributwert fehlt ein schließendes doppeltes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht angezeigt.

5. Schauen wir uns nun das Markup an, das der Browser gerendert hat, im Gegensatz zu dem Markup im Quellcode. Dazu können wir die Entwicklertools des Browsers verwenden. Falls Sie nicht mit der Verwendung der Entwicklertools Ihres Browsers vertraut sind, nehmen Sie sich ein paar Minuten Zeit, um [Entdecken Sie die Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) zu überprüfen.
6. Im DOM-Inspector können Sie sehen, wie das gerenderte Markup aussieht: ![Der HTML-Inspector in Firefox, mit dem Absatz unseres Beispiels hervorgehoben, zeigt den Text "Was verursacht Fehler in HTML?". Sie können hier sehen, dass das Absatzelement vom Browser geschlossen wurde.](html-inspector.png)
7. Mithilfe des DOM-Inspectors können wir unseren Code im Detail erkunden, um zu sehen, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ das gleiche Ergebnis liefern):

   - Die Absätze und Listenelemente wurden mit schließenden Tags versehen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, sodass der Browser jeden einzelnen Textblock mit seinem eigenen strong-Tag umschließt, bis zum Ende des Dokuments!
   - Der Fehler bei der falschen Verschachtelung wurde vom Browser wie folgt behoben:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Anführungszeichen wurde komplett gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

### HTML-Validierung

Wie Sie aus dem obigen Beispiel sehen können, möchten Sie wirklich sicherstellen, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gezeigten ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Die beste Strategie besteht darin, Ihre HTML-Seite zunächst durch den [Markup Validation Service](https://validator.w3.org/) ausführen zu lassen — erstellt und gepflegt von der W3C, der Organisation, die sich um die Spezifikationen kümmert, die HTML, CSS und andere Webtechnologien definieren. Diese Webseite nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, um Ihnen mitzuteilen, was an Ihrem HTML falsch ist.

![Die HTML-Validator-Homepage](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt etwas HTML-Code eingeben.

### Aktives Lernen: Validierung eines HTML-Dokuments

Probieren wir dies mit unserem [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) aus.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem Browser-Tab, falls er nicht bereits geöffnet ist.
2. Wechseln Sie zum [Validate by Direct Input](https://validator.w3.org/#validate_by_input)-Tab.
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in den großen Textbereich ein, der im Markup Validation Service angezeigt wird.
4. Drücken Sie die _Check_-Schaltfläche.

Dies sollte Ihnen eine Liste der Fehler und weiteren Informationen geben.

![Eine Liste der HTML-Validierungsergebnisse vom W3C Markup Validation Service](validation-results.png)

#### Interpretation der Fehlermeldungen

Die Fehlermeldungen sind in der Regel hilfreich, aber manchmal weniger; mit ein bisschen Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu reparieren. Gehen wir die Fehlermeldungen durch und sehen, was sie bedeuten. Sie werden sehen, dass jede Nachricht mit einer Zeilen- und Spaltennummer versehen ist, um Ihnen zu helfen, den Fehler leicht zu lokalisieren.

- "Ende-Tag `li` impliziert, aber es waren offene Elemente vorhanden" (2 Instanzen): Diese Nachrichten zeigen an, dass ein Element offen ist, das geschlossen werden sollte. Das End-Tag wird impliziert, ist aber tatsächlich nicht vorhanden. Die Zeilen-/Spalteninformationen weisen auf die erste Zeile nach der Zeile hin, in der das schließende Tag eigentlich sein sollte. Dies ist jedoch ein guter Hinweis darauf, was falsch ist.
- "Nicht geschlossenes Element `strong`": Das lässt sich wirklich leicht verstehen — ein {{htmlelement("strong")}}-Element ist nicht geschlossen, und die Zeilen-/Spalteninformationen weisen direkt darauf hin, wo es sich befindet.
- "Ende-Tag `strong` verletzt Verschachtelungsregeln": Dies weist auf die falsch verschachtelten Elemente hin und die Zeilen-/Spalteninformationen zeigen darauf, wo sie sich befinden.
- "Dateiende erreicht, während sich innerhalb eines Attributwerts befand. Tag ignorieren": Dies ist ziemlich kryptisch; es bezieht sich auf die Tatsache, dass ein Attributwert irgendwo nicht richtig gebildet ist, möglicherweise in der Nähe des Dateiende, weil das Dateiende innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element schuldhaft ist.
- "Dateiende gesehen und es waren offene Elemente vorhanden": Dies ist etwas mehrdeutig, bezieht sich aber im Wesentlichen auf die Tatsache, dass offene Elemente vorhanden sind, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern weisen auf die letzten Zeilen der Datei hin, und diese Fehlermeldung kommt mit einer Codezeile, die auf ein Beispiel für ein offenes Element hinweist:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, weil der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Nicht geschlossenes Element `ul`": Das ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element _korrekt_ geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element nicht geschlossen ist, aufgrund des fehlenden schließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen — es ist eine gute Idee, ein paar Fehler gleichzeitig zu beheben. Dann versuchen Sie, Ihr HTML erneut zu validieren, um zu zeigen, welche Fehler noch übrig sind. Manchmal behebt das Beheben eines früheren Fehlers auch andere Fehlermeldungen — mehrere Fehler können oft durch ein einzelnes Problem in einem Dominoeffekt verursacht werden.

Sie wissen, dass alle Ihre Fehler behoben sind, wenn Sie das folgende Banner in Ihrem Ergebnis sehen:

![Banner das liest: "Das Dokument ist entsprechend des angegebenen Schemas/der angegebenen Schemata und der zusätzlichen vom Validator geprüften Einschränkungen gültig."](valid-html-banner.png)

## Zusammenfassung

Hier haben Sie es also, eine Einführung in das Debuggen von HTML, die Ihnen einige nützliche Fähigkeiten geben sollte, auf die Sie zurückgreifen können, wenn Sie anfangen, CSS, JavaScript und andere Arten von Code später in Ihrer Karriere zu debuggen. Dies markiert auch das Ende der Artikel des Einführung in HTML-Moduls — jetzt können Sie sich selbst mit unseren Bewertungen testen: Die erste ist unten verlinkt.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
