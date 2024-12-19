---
title: Debugging von HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, wir bitten um Entschuldigung! Wir arbeiten hart daran, den MDN Learn Web Development-Bereich zu verbessern, und wir werden die als unvollständig gekennzeichneten Bereiche ("TODO") bald fertigstellen.

HTML zu schreiben ist in Ordnung, aber was passiert, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code liegt? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegenden HTML-Syntax</a
        > behandelt werden, Text-Level-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturierendes HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <ul>
          <li>Das Konzept von zulässigem Code und was dies für das Debugging von HTML bedeutet.</li>
          <li>Verwendung des [HTML Validierungsdienstes](https://validator.w3.org/), um Markup-Fehler zu erkennen.</li>
          <li>Nutzung des DOM-Inspektors in den Entwicklertools Ihres Browsers, um tiefer in Ihr Markup einzutauchen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Beim Schreiben von Code ist in der Regel alles in Ordnung, bis zu dem gefürchteten Moment, in dem ein Fehler auftritt — Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert — entweder überhaupt nicht oder nicht ganz so, wie Sie es wollten. Zum Beispiel zeigt das Folgende einen Fehler, der beim Versuch aufgetreten ist, ein einfaches Programm in der [Rust](https://www.rust-lang.org/) Sprache zu {{Glossary("compile", "kompilieren")}}.

![Ein Konsolenfenster, das das Ergebnis des Versuchs zeigt, ein Rust-Programm zu kompilieren, bei dem ein Anführungszeichen in einer Druckanweisung fehlt. Die Fehlermeldung lautet: Fehler: nicht abgeschlossenes doppeltes Anführungszeichen in Zeichenkette.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen — "nicht abgeschlossenes doppeltes Anführungszeichen in Zeichenkette". Wenn Sie sich den Code ansehen, können Sie wahrscheinlich sehen, wie `println!(Hello, world!");` logischerweise ein doppeltes Anführungszeichen fehlt. Allerdings können Fehlermeldungen schnell komplizierter und weniger verständlich werden, wenn Programme größer werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, ein wenig abschreckend wirken.

Debugging muss jedoch nicht beängstigend sein — der Schlüssel zum sicheren Umgang mit dem Schreiben und Debuggen in jeder Programmiersprache oder jedem Code ist die Vertrautheit mit sowohl der Sprache als auch den Werkzeugen.

## HTML und Debugging

HTML zu verstehen ist nicht so kompliziert wie Rust. HTML wird nicht in eine andere Form kompiliert, bevor es vom Browser geparst und das Ergebnis angezeigt wird (es wird _interpretiert_, nicht _kompiliert_). Und die Syntax von HTML-{{Glossary("element", "Elementen")}} ist vermutlich viel einfacher zu verstehen als eine "echte Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}. Die Art und Weise, wie Browser HTML parsen, ist wesentlich **zulässiger** als die Ausführung von Programmiersprachen, was sowohl gut als auch schlecht ist.

## Zulässiger Code

Was meinen wir mit zulässig? Nun, im Allgemeinen gibt es zwei Haupttypen von Fehlern, auf die Sie stoßen können, wenn Sie etwas falsch im Code machen:

- **Syntaxfehler**: Das sind Rechtschreib- oder Interpunktionsfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der oben gezeigte Rust-Fehler. Diese sind in der Regel einfach zu beheben, solange Sie die Syntax der Sprache kennen und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Das sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das ist, was Sie beabsichtigt haben, wodurch das Programm falsch ausgeführt wird. Diese sind oft schwieriger zu beheben als Syntaxfehler, da keine Fehlermeldung vorhanden ist, um Sie auf die Ursache des Fehlers hinzuweisen.

HTML selbst leidet nicht unter Syntaxfehlern, da Browser es zulässig parsen, was bedeutet, dass die Seite trotzdem angezeigt wird, auch wenn Syntaxfehler vorhanden sind. Browser haben eingebaute Regeln, die vorschreiben, wie falsch geschriebenes Markup interpretiert werden soll, sodass Sie etwas Laufendes erhalten, auch wenn es nicht das ist, was Sie erwartet haben. Das kann natürlich immer noch ein Problem sein!

> [!NOTE]
> HTML wird zulässig geparst, weil es, als das Web zum ersten Mal entstanden ist, als wichtiger angesehen wurde, den Menschen zu ermöglichen, ihre Inhalte zu veröffentlichen, als die Syntax absolut korrekt zu machen. Das Web wäre wahrscheinlich nicht so populär, wie es heute ist, wäre es von Anfang an strenger gewesen.

### Aktives Lernen: Untersuchung zulässigen Codes

Es ist Zeit, die zulässige Natur von HTML-Code zu studieren.

1. Laden Sie zuerst unser [Debug-Example-Demo](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) herunter und speichern Sie es lokal. Diese Demo enthält absichtlich einige eingebaute Fehler, die wir erkunden werden (das HTML-Markup ist **schlecht geformt**, im Gegensatz zu **gut geformt**).
2. Öffnen Sie es anschließend in einem Browser. Sie werden etwas Ähnliches sehen:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen über häufige HTML-Fehler, wie z.B. ungeschlossene Elemente, schlecht verschachtelte Elemente und ungeschlossene Attribute. ](badly-formed-html.png)
3. Dies sieht sofort nicht gut aus; sehen wir uns den Quellcode an, um herauszufinden, warum (nur der Body-Inhalt wird gezeigt):

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

   - Die {{htmlelement("p","paragraph")}} und {{htmlelement("li","list item")}} Elemente haben keine Schlusstags. Beim Betrachten des obigen Bildes scheint dies das Markup-Rendering nicht allzu sehr beeinträchtigt zu haben, da sich leicht erkennen lässt, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}} Element hat keinen Schlusstag. Dies ist etwas problematischer, da es nicht leicht zu erkennen ist, wo das Element enden soll. Tatsächlich ist der gesamte restliche Text stark hervorgehoben.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist nicht leicht zu erkennen, wie dies aufgrund des vorherigen Problems interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Element/a#href) Attributwert fehlt ein abschließendes doppeltes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht gerendert.

5. Schauen wir uns nun das Markup an, das der Browser gerendert hat, im Gegensatz zu dem Markup im Quellcode. Um dies zu tun, können wir die Entwicklertools des Browsers verwenden. Wenn Sie nicht mit der Verwendung der Entwicklertools Ihres Browsers vertraut sind, nehmen Sie sich ein paar Minuten, um [Entdecken Sie Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) zu überprüfen.
6. Im DOM-Inspektor können Sie sehen, wie das gerenderte Markup aussieht: ![Der HTML-Inspektor in Firefox, mit dem hervorgehobenen Absatz unseres Beispiels, der den Text "What causes errors in HTML?" zeigt. Hier sehen Sie, dass das Absatz-Element vom Browser geschlossen wurde.](html-inspector.png)
7. Mit dem DOM-Inspektor können wir unseren Code im Detail erkunden, um zu sehen, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt, andere moderne Browser _sollten_ das gleiche Ergebnis liefern):

   - Die Absätze und Listenelemente wurden mit Schlusstags versehen.
   - Es ist nicht klar, wo das erste `<strong>` Element geschlossen werden sollte, also hat der Browser jeden separaten Textblock mit seinem eigenen strong-Tag umwickelt, bis zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie hier gezeigt korrigiert:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden doppelten Anführungszeichen wurde vollständig gelöscht. Das letzte Listenelement sieht folgendermaßen aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Wie Sie aus dem obigen Beispiel sehen können, ist es wirklich wichtig, sicherzustellen, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gesehenen ist es einfach, durch die Zeilen zu suchen und die Fehler zu finden, aber was ist mit einem großen, komplexen HTML-Dokument?

Die beste Strategie besteht darin, Ihre HTML-Seite zunächst durch den [Markup Validation Service](https://validator.w3.org/) zu laufen — erstellt und gepflegt vom W3C, der Organisation, die sich um die Spezifikationen kümmert, die HTML, CSS und andere Webtechnologien definieren. Diese Webseite nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, der Ihnen mitteilt, was an Ihrem HTML falsch ist.

![Die Homepage des HTML-Validators](validator.png)

Um das zu überprüfende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt HTML-Code eingeben.

### Aktives Lernen: Validierung eines HTML-Dokuments

Versuchen wir dies mit unserem [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html).

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem Browser-Tab, falls er noch nicht geöffnet ist.
2. Wechseln Sie zum Tab [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in den großen Textbereich des Markup Validation Service ein.
4. Drücken Sie die _Check_ Schaltfläche.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen geben.

![Eine Liste der HTML-Validierungsergebnisse des W3C-Markup-Validierungsdienstes](validation-results.png)

### Fehlermeldungen interpretieren

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal nicht so hilfreich; mit ein wenig Übung können Sie lernen, sie zu interpretieren, um Ihren Code zu reparieren. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden feststellen, dass jede Meldung mit einer Zeilen- und Spaltennummer versehen ist, um Ihnen das Auffinden des Fehlers zu erleichtern.

- "End tag `li` implied, but there were open elements" (2 Instanzen): Diese Meldungen geben an, dass ein Element geöffnet ist, das geschlossen werden sollte. Das Schlusstag wird impliziert, ist aber nicht tatsächlich vorhanden. Die Zeilen/Spalten-Informationen weisen auf die erste Zeile nach der Zeile, in der das Schlusstag tatsächlich stehen sollte, hin, aber dies ist ein ausreichend guter Hinweis, um zu sehen, was falsch ist.
- "Unclosed element `strong`": Das ist wirklich einfach zu verstehen — ein {{htmlelement("strong")}} Element ist nicht geschlossen, und die Zeilen/Spalten-Informationen weisen direkt darauf hin, wo es sich befindet.
- "End tag `strong` violates nesting rules": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen/Spalten-Informationen zeigen an, wo sie sich befinden.
- "End of file reached when inside an attribute value. Ignoring tag": Das ist ziemlich kryptisch; es bezieht sich darauf, dass ein Attributwert irgendwo nicht richtig geformt ist, möglicherweise nahe dem Ende der Datei, weil das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element schuld ist.
- "End of file seen and there were open elements": Das ist etwas mehrdeutig, bezieht sich letztendlich aber darauf, dass es offene Elemente gibt, die richtig geschlossen werden müssen. Die Zeilennummern weisen auf die letzten paar Zeilen der Datei hin, und diese Fehlermeldung enthält eine Codezeile, die ein Beispiel für ein offenes Element zeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut ohne abschließendes Anführungszeichen kann dazu führen, dass ein Element offen bleibt, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Das ist nicht sehr hilfreich, da das {{htmlelement("ul")}} Element _korrekt_ geschlossen ist. Diese Fehlermeldung erscheint, weil das {{htmlelement("a")}} Element nicht geschlossen ist, aufgrund des fehlenden abschließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen darüber — eine gute Idee ist, einige Fehler gleichzeitig zu beheben. Versuchen Sie dann, Ihr HTML erneut zu validieren, um zu sehen, welche Fehler noch vorhanden sind. Manchmal kann das Beheben eines früheren Fehlers auch andere Fehlermeldungen beseitigen — mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, wann alle Fehler behoben sind, wenn Sie das folgende Banner in Ihrem Output sehen:

![Banner, das besagt "Das Dokument ist gemäß dem spezifizierten Schema(s) und den zusätzlichen vom Validator überprüften Einschränkungen gültig."](valid-html-banner.png)

## Verwenden eines DOM-Inspektors

TODO

## Zusammenfassung

Das war also eine Einführung in das Debuggen von HTML, die Ihnen einige nützliche Fähigkeiten vermitteln sollte, auf die Sie zählen können, wenn Sie später in Ihrer Karriere CSS, JavaScript und andere Codearten debuggen. Dies markiert auch das Ende der Einführung in das HTML-Modul Lernartikel — jetzt können Sie sich mit unseren Bewertungen selbst testen: Die erste ist unten verlinkt.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
