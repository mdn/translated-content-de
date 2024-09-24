---
title: Debugging von HTML
slug: Learn/HTML/Introduction_to_HTML/Debugging_HTML
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

HTML zu schreiben ist in Ordnung, aber was tun, wenn etwas schiefgeht und Sie den Fehler im Code nicht finden können? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit HTML, wie sie zum Beispiel in <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Grundlagen von HTML-Text</a
        > und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellung von Hyperlinks</a
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

Beim Schreiben von Code ist normalerweise alles in Ordnung, bis der gefürchtete Moment kommt, in dem ein Fehler auftritt – Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert – entweder gar nicht oder nicht so, wie Sie es wollten. Zum Beispiel zeigt das Folgende einen Fehler, der beim Versuch, ein einfaches Programm in der [Rust](https://www.rust-lang.org/)-Sprache zu {{glossary("kompilieren")}}, gemeldet wird.

![Ein Konsolenfenster zeigt das Ergebnis eines Kompilierungsversuchs eines Rust-Programms mit einem fehlenden Anführungszeichen um einen String in einer Druckanweisung. Die gemeldete Fehlermeldung lautet: Fehler: nicht abgeschlossenes doppeltes Anführungszeichen.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen – „nicht abgeschlossenes doppeltes Anführungszeichen“. Wenn Sie sich die Auflistung ansehen, können Sie wahrscheinlich erkennen, dass bei `println!(Hello, world!");` ein doppeltes Anführungszeichen fehlt. Fehler in den Nachrichten können jedoch schnell komplizierter und weniger leicht verständlich werden, wenn Programme größer werden, und sogar einfache Fälle können für jemanden, der nichts über Rust weiß, etwas einschüchternd wirken.

Debugging muss jedoch nicht beängstigend sein – der Schlüssel, um sich beim Schreiben und Debuggen jeder Programmiersprache oder jedes Codes wohlzufühlen, liegt in der Vertrautheit sowohl mit der Sprache als auch mit den Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht in eine andere Form übersetzt, bevor der Browser es analysiert und das Ergebnis anzeigt (es wird _interpretiert_, nicht _kompiliert_). Und die Syntax der HTML-{{glossary("Elemente")}} ist möglicherweise viel leichter zu verstehen als eine „echte Programmiersprache“ wie Rust, {{glossary("JavaScript")}} oder {{glossary("Python")}}. Die Art und Weise, wie Browser HTML analysieren, ist viel **nachsichtiger** als die Ausführung von Programmiersprachen, was sowohl eine gute als auch eine schlechte Sache ist.

### Nachsichtiger Code

Was meinen wir also mit nachsichtig? Nun, im Allgemeinen gibt es zwei Haupttypen von Fehlern, denen Sie begegnen werden, wenn Sie im Code etwas falsch machen:

- **Syntaxfehler**: Dies sind Rechtschreib- oder Zeichensetzungsfehler in Ihrem Code, die tatsächlich dazu führen, dass das Programm nicht ausgeführt wird, wie der oben gezeigte Rust-Fehler. Diese sind in der Regel leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das ist, was Sie beabsichtigt haben. Dies bedeutet, dass das Programm falsch ausgeführt wird. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie auf die Fehlerquelle hinweist.

HTML selbst leidet nicht unter Syntaxfehlern, da Browser es nachsichtig analysieren, sodass die Seite auch dann angezeigt wird, wenn es Syntaxfehler gibt. Browser haben eingebaute Regeln, um festzulegen, wie falsch geschriebene Markierungen interpretiert werden sollen, damit Sie etwas erhalten, das funktioniert, auch wenn es nicht das ist, was Sie erwartet haben. Dies kann natürlich immer noch ein Problem sein!

> [!NOTE]
> HTML wird nachsichtig analysiert, weil es bei der Erstellung des Webs wichtiger war, dass Menschen ihre Inhalte veröffentlichen können, als dass die Syntax absolut korrekt ist. Das Internet wäre wahrscheinlich nicht so populär, wie es heute ist, wenn es von Anfang an strenger gewesen wäre.

### Aktives Lernen: Studium von nachsichtigem Code

Es ist Zeit, die nachsichtige Natur von HTML-Code zu studieren.

1. Laden Sie zuerst unser [Debug-Example-Demo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) herunter und speichern Sie es lokal. Dieses Demo wurde absichtlich mit einigen eingebauten Fehlern geschrieben, die wir untersuchen werden (das HTML-Markup wird als **schlecht geformt** im Gegensatz zu **gut geformt** bezeichnet).
2. Öffnen Sie es als Nächstes in einem Browser. Sie werden etwas Ähnliches sehen wie dies: ![Ein einfaches HTML-Dokument mit dem Titel HTML-Fehlerbeispiele und einigen Informationen über häufige HTML-Fehler, wie nicht geschlossene Elemente, schlecht geschachtelte Elemente und nicht geschlossene Attribute. ](badly-formed-html.png)
3. Dies sieht auf den ersten Blick nicht gut aus; schauen wir uns den Quellcode an, um herauszufinden, warum (nur der Inhalt des Körpers ist dargestellt):

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

   - Die {{htmlelement("p","Paragraph")}}- und {{htmlelement("li","Listenelement")}}-Elemente haben keine schließenden Tags. Angesichts des obigen Bildes scheint dies die Markup-Anzeige nicht allzu sehr beeinträchtigt zu haben, da es leicht zu erahnen ist, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keinen abschließenden Tag. Dies ist etwas problematischer, da es nicht leicht erkennbar ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text stark hervorgehoben.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist nicht leicht zu erkennen, wie dies interpretiert wurde, wegen des vorherigen Problems.
   - Der [`href`](/de/docs/Web/HTML/Element/a#href)-Attributwert fehlt ein abschließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben – der Link wurde überhaupt nicht gerendert.

5. Schauen wir uns nun das Markup an, das der Browser gerendert hat, im Gegensatz zu dem Markup im Quellcode. Dazu können wir die Entwicklertools des Browsers verwenden. Wenn Sie nicht damit vertraut sind, wie Sie die Entwicklertools Ihres Browsers verwenden, nehmen Sie sich ein paar Minuten Zeit, um [Browser-Entwicklertools entdecken](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) zu überprüfen.
6. Im DOM-Inspektor können Sie sehen, wie das gerenderte Markup aussieht: ![Der HTML-Inspektor in Firefox, mit unserem Beispiel-Paragraph hervorgehoben, zeigt den Text "What causes errors in HTML?" Hier sehen Sie, dass das Paragraph-Element vom Browser geschlossen wurde.](html-inspector.png)
7. Lassen Sie uns mit dem DOM-Inspektor unseren Code im Detail untersuchen, um zu sehen, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser sollten dasselbe Ergebnis liefern):

   - Die Absätze und Listenelemente wurden mit schließenden Tags versehen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden separaten Textabschnitt mit seinem eigenen starken Tag umschlossen, bis ganz unten im Dokument!
   - Das falsche Verschachteln wurde vom Browser wie hier gezeigt behoben:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Anführungszeichen wurde insgesamt gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

### HTML-Validierung

Aus dem obigen Beispiel können Sie sehen, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut geformt ist! Aber wie? Bei einem kleinen Beispiel wie oben gesehen, ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem großen, komplexen HTML-Dokument?

Die beste Strategie ist, Ihre HTML-Seite zunächst durch den [Markup Validation Service](https://validator.w3.org/) – erstellt und gepflegt vom W3C, der Organisation, die sich um die Spezifikationen kümmert, die HTML, CSS und andere Webtechnologien definieren. Diese Webseite nimmt ein HTML-Dokument als Eingabe, analysiert es und gibt Ihnen einen Bericht, um Ihnen mitzuteilen, was an Ihrem HTML falsch ist.

![Die HTML-Validator-Homepage](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse bereitstellen, eine HTML-Datei hochladen oder direkt einen HTML-Code eingeben.

### Aktives Lernen: Validierung eines HTML-Dokuments

Versuchen wir dies mit unserem [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html).

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem Browser-Tab, wenn er noch nicht geöffnet ist.
2. Wechseln Sie zur Registerkarte [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Körper) und fügen Sie ihn in das große Textfeld ein, das im Markup Validation Service angezeigt wird.
4. Drücken Sie die _Check_-Taste.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen geben.

![Eine Liste von HTML-Validierungsergebnissen aus dem Markup Validation Service des W3C](validation-results.png)

#### Interpretieren der Fehlermeldungen

Die Fehlermeldungen sind in der Regel hilfreich, manchmal jedoch nicht so hilfreich; mit etwas Übung können Sie herausfinden, wie Sie diese interpretieren können, um Ihren Code zu korrigieren. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden feststellen, dass jede Nachricht mit einer Zeilen- und Spaltennummer versehen ist, die Ihnen hilft, den Fehler leicht zu lokalisieren.

- „End-Tag `li` impliziert, aber es waren offene Elemente vorhanden“ (2 Instanzen): Diese Meldungen zeigen an, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag ist impliziert, aber nicht tatsächlich vorhanden. Die Zeilen-/Spalteninformationen zeigen auf die erste Zeile nach der Zeile, in der sich das schließende Tag wirklich befinden sollte, aber dies ist ein ausreichender Hinweis darauf, was falsch ist.
- „Unclosed element `strong`“: Dies ist wirklich leicht zu verstehen – ein {{htmlelement("strong")}}-Element ist nicht geschlossen, und die Zeilen-/Spalteninformationen zeigen genau darauf, wo es sich befindet.
- „End tag `strong` violates nesting rules“: Dies weist auf die falsch geschachtelten Elemente hin, und die Zeilen-/Spalteninformationen geben an, wo sie sich befinden.
- „End of file reached when inside an attribute value. Ignoring tag“: Dies ist eher kryptisch; es bezieht sich auf die Tatsache, dass ein Attributwert irgendwo nicht richtig geformt ist, möglicherweise in der Nähe des Endes der Datei, da das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element fehlerhaft ist.
- „End of file seen and there were open elements“: Dies ist etwas mehrdeutig, bezieht sich jedoch im Wesentlichen auf die Tatsache, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern beziehen sich auf die letzten Zeilen der Datei, und diese Fehlermeldung ist mit einer Codezeile versehen, die auf ein Beispiel für ein offenes Element hinweist:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein abschließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- „Unclosed element `ul`“: Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element _korrekt_ geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element nicht geschlossen ist, aufgrund des fehlenden abschließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen – eine gute Idee ist es, zunächst einige Fehler zu beheben. Versuchen Sie dann, Ihr HTML erneut zu validieren, um zu zeigen, welche Fehler noch übrig sind. Manchmal kann das Beheben eines früheren Fehlers auch andere Fehlermeldungen beseitigen – mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, dass alle Ihre Fehler behoben sind, wenn Sie das folgende Banner in Ihrer Ausgabe sehen:

![Banner mit der Aufschrift "The document validates according to the specified schema(s) and to additional constraints checked by the validator."](valid-html-banner.png)

## Zusammenfassung

Dies war also eine Einführung in das Debugging von HTML, die Ihnen einige nützliche Fähigkeiten vermitteln sollte, auf die Sie zählen können, wenn Sie später in Ihrer Karriere mit dem Debuggen von CSS, JavaScript und anderen Codearten beginnen. Dies markiert auch das Ende der Lernartikel zum Modul Einführung in HTML – jetzt können Sie sich mit unseren Bewertungen testen: Die erste ist unten verlinkt.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
