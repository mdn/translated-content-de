---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was ist, wenn etwas schiefgeht und Sie den Fehler im Code nicht herausfinden können? Dieser Artikel stellt Ihnen einige Werkzeuge vor, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textebenen-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Struktur-HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die wichtigsten Grundlagen rund um das Debuggen von HTML</li>
          <li>Verwendung des DOM-Inspektors in Ihren Browser-DevTools, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Erforschung häufiger HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a>, um HTML-Fehler zu entdecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Beim Schreiben von Code ist alles in Ordnung, bis zu diesem gefürchteten Moment, in dem ein Fehler auftritt – Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert – entweder überhaupt nicht oder nicht ganz so, wie Sie es wollten. Zum Beispiel zeigt das Folgende einen Fehlerbericht beim Versuch, ein einfaches Programm in der [Rust](https://www.rust-lang.org/) Sprache zu {{Glossary("compile", "kompilieren")}}.

![Ein Konsolenfenster, das das Ergebnis des Versuchs zeigt, ein Rust-Programm mit einem fehlenden Anführungszeichen um einen String in einer print-Anweisung zu kompilieren. Die Fehlermeldung lautet error: unterminated double quote string.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen – "unterminated double quote string". Wenn Sie sich den Code ansehen, können Sie wahrscheinlich sehen, wie `println!(Hello, world!");` möglicherweise ein Anführungszeichen fehlt. Fehlermeldungen können jedoch schnell komplizierter und weniger leicht zu interpretieren werden, wenn Programme größer werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, einschüchternd wirken.

Debugging muss jedoch nicht beängstigend sein – der Schlüssel, um sich mit dem Schreiben und Debuggen jeglichen Codes wohlzufühlen, ist die Vertrautheit mit der Sprache und den dazugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht in eine andere Form kompiliert, bevor es geparst wird (es wird _interpretiert_, nicht _kompiliert_). Und die [Element]-Syntax(/de/docs/Glossary/element) von HTML ist wahrscheinlich viel einfacher zu verstehen als eine "echte Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **nachsichtiger** als die, wie die meisten Programmiersprachen geparst werden, was sowohl gut als auch schlecht ist.

Aber zuerst, was meinen wir mit nachsichtig? Nun, im Allgemeinen gibt es, wenn Sie etwas im Code falsch machen, zwei Haupttypen von Fehlern, auf die Sie stoßen werden:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der zuvor gezeigte Rust-Fehler. Diese sind normalerweise leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwerer zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

HTML selbst leidet nicht unter Syntaxfehlern, da Browser es nachsichtig parsen, was bedeutet, dass die Seite trotzdem angezeigt wird, selbst wenn es Syntaxfehler im Quellcode gibt. Browser haben eingebaute Regeln, um zu bestimmen, wie inkorrekt geschriebene HTML-Auszeichnung (oft als **ungültig** oder **schlecht geformt** bezeichnet) interpretiert wird, und ändern es automatisch in eine gültige Auszeichnung.

Zum Beispiel enthält das folgende HTML-Snippet falsch verschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, tut es aber nicht — es steht danach.

Wenn Sie dieses HTML in einen Browser laden und dann das [gerenderte DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) ansehen, werden Sie sehen, dass die Verschachtelung von dem Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das also sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erzielt, aber wie Sie [später](#your_turn_studying_html_using_the_dom_inspector) sehen werden, ist das nicht immer der Fall. Sie bekommen immer _irgendetwas_ zum Laufen, aber der Browser macht es nicht immer richtig, was Probleme verursachen kann. Es ist besser, von Anfang an korrekte Auszeichnung zu schreiben.

> [!NOTE]
> HTML wird nachsichtig geparst, weil es bei der Schaffung des Webs als wichtiger angesehen wurde, Inhalte zu veröffentlichen, als die Syntax absolut korrekt zu machen. Das Web wäre wahrscheinlich nicht so populär wie heute, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später werden wir Ihnen zeigen, wie Sie Fehler in HTML mit einem Tool namens [HTML-Validator](#html-validierung) finden, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** inspizieren und dann untersuchen, nach welchen Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Die Verwendung des DOM-Inspektors

Alle modernen Browser haben eine Reihe von [Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (DevTools) eingebaut, die eine funktionale Auswahl zum Untersuchen der in den aktuellen Tab geladenen Webseite bieten. Diese können Ihnen zeigen, welche HTML im Dokument gerendert wird, welches CSS auf jeden DOM-Knoten angewendet wird, welches JavaScript im Dokument läuft und mehr. Sie ermöglichen Ihnen auch, den gerade laufenden Code zu bearbeiten und die Auswirkung live auf der Seite zu sehen.

Sie können die DevTools in jedem Browser auf ähnliche Weise öffnen — sehen Sie [Wie man die DevTools im Browser öffnet](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser) um zu lernen, wie.

Für diesen Artikel ist die einzige relevante DevTools-Funktion der **DOM-Inspektor**, der das aktuell gerenderte HTML DOM anzeigt und Ihnen erlaubt, es zu bearbeiten. Sehen wir uns das jetzt an:

1. Öffnen Sie die DevTools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich an derselben Stelle in jedem Browser — der erste Tab in den DevTools am Anfang der Reihe. In Firefox ist er als _Inspector_ beschriftet, während er in Safari, Edge und Chrome als _Elements_ bezeichnet wird. Dies sollte der standardmäßig ausgewählte Tab sein, wenn Sie die DevTools zum ersten Mal öffnen, aber wählen Sie ihn aus, wenn dies nicht der Fall ist.
3. Untersuchen Sie die im Tab gezeigte DOM-Baumstruktur und beachten Sie, wie Sie auf die kleinen Erweiterungspfeile am Anfang jedes DOM-Knotens klicken können, um diese zu erweitern und zu reduzieren und um ihre Nachkommensknoten zu enthüllen. Sie können auch die Aufwärts- und Abwärtspfeiltasten verwenden, um durch die Knoten nach oben und unten zu springen, sowie die rechte und linke Pfeiltaste, um die Knoten zu erweitern und zu reduzieren.
4. Versuchen Sie auch die Knoten zu überfahren (oder sie mit den Pfeiltasten auszuwählen) und beachten Sie, wie das aktuell überfahrene (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können auch das gerenderte DOM bearbeiten. Wir werden die Bearbeitungsfunktion in diesem Artikel nicht verwenden, aber nehmen Sie sich etwas Zeit, um nachzuschlagen, wie dies geht, wenn Sie neugierig sind.

## Ihr Einsatz: Studium von HTML mit dem DOM-Inspektor

In diesem Abschnitt untersuchen Sie etwas Code mit dem DOM-Inspektor und sehen, wie der Browser häufige Markup-Fehler verarbeitet.

1. Speichern Sie zunächst die folgende HTML-Dateiliste als `debug-example.html` an einem beliebigen Ort auf Ihrem lokalen Gerät. Dieses Demo-Beispiel ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir untersuchen können.

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

2. Öffnen Sie es anschließend in einem Browser. Sie werden etwa Folgendes sehen:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und etwas Information über häufige HTML-Fehler, wie ungeschlossene Elemente, schlecht verschachtelte Elemente und ungeschlossene Attribute. ](badly-formed-html.png)
3. Dies sieht sofort nicht sehr gut aus; lassen Sie uns den Quellcode anschauen, um zu sehen, ob wir herausfinden können, warum (es sind nur die Inhaltsbereiche des Bodys gezeigt):

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

   - Die {{htmlelement("p","Absatz")}} und {{htmlelement("li","Listenelement")}}-Elemente haben keine Schließtags. Wenn Sie sich das obige Bild ansehen, scheint dies das Markup-Rendering nicht allzu stark beeinträchtigt zu haben, da es leicht ist, zu erkennen, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keinen Schließtag. Das ist etwas problematischer, da man nicht leicht erkennen kann, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text in Fett gedruckt.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Wegen des vorherigen Problems ist es nicht einfach zu erkennen, wie das interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attributwert besitzt kein schließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht gerendert.

5. Lassen Sie uns nun das gerenderte DOM untersuchen, im Gegensatz zum Quellcode. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie sehen eine Darstellung des gerenderten Markups: ![Der HTML-Inspektor in Firefox, mit dem hervorgehobenen Absatz unseres Beispiels, der den Text "What causes errors in HTML?" anzeigt. Hier können Sie sehen, dass das Paragraph-Element vom Browser geschlossen wurde.](html-inspector.png)
6. Sehen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu korrigieren (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ das gleiche Ergebnis liefern):

   - Die Absätze und Listenelemente wurden mit Schließtagen versehen.
   - Es ist unklar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden separaten Textblock in sein eigenes `<strong>`-Element gepackt, bis zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie hier gezeigt korrigiert:

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

## HTML-Validierung

Anhand des obigen Beispiels können Sie sehen, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gesehenen ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Das Werkzeug für diesen Job ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der von der W3C erstellt und gewartet wird (wie Sie im [Web-Standards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) gelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, durchläuft es und erstellt einen Bericht, um Ihnen mitzuteilen, was mit Ihrem HTML nicht in Ordnung ist.

![Die Homepage des HTML-Validators](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt HTML-Code eingeben.

## Validierung eines HTML-Dokuments

In dieser Aufgabe werden wir Sie dazu bringen, den HTML-Validator auszuprobieren. Sie werden unser [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) validieren und sehen, welche Ergebnisse zurückgegeben werden. Dieses Beispiel enthält dasselbe HTML, das Sie zuvor mit dem DOM-Inspektor studiert haben.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er noch nicht geöffnet ist.
2. Wechseln Sie zur Registerkarte [Direkteingabe validieren](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in das große Textfeld ein, das im Markup Validation Service angezeigt wird.
4. Drücken Sie die _Check_-Taste.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen geben.

![Eine Liste von HTML-Validierungsergebnissen vom W3C-Markup-Validierungsdienst](validation-results.png)

### Interpretation der Fehlermeldungen

Die Fehlermeldungen sind in der Regel hilfreich, aber manchmal sind sie nicht ganz leicht zu verstehen. Mit ein bisschen Übung können Sie herausfinden, wie Sie diese interpretieren, um Ihren Code zu beheben. Gehen wir die Fehlermeldungen durch und sehen, was sie bedeuten. Sie sehen, dass jede Nachricht mit einer Zeilen- und Spaltennummer geliefert wird, die Ihnen hilft, den Fehler leicht zu lokalisieren.

- "Ende-Tag `li` impliziert, aber es gab offene Elemente" (2 Instanzen): Diese Meldungen weisen darauf hin, dass ein Element geöffnet ist, das geschlossen werden sollte. Das Schlusstag ist impliziert, aber eigentlich nicht vorhanden. Die Zeilen-/Spaltendaten zeigen auf die erste Zeile nach der Zeile, in der das Schlusstag wirklich sein sollte, aber dies ist ein guter Hinweis, um zu sehen, was falsch ist.
- "Ungeschlossenes Element `strong`": Dies ist einfacher zu verstehen — ein {{htmlelement("strong")}}-Element ist ungeschlossen und die Zeilen-/Spalteninformationen zeigen genau darauf, wo es sich befindet.
- "Endtag `strong` verletzt Verschachtelungsregeln": Dies weist auf die falsch verschachtelten Elemente hin und die Zeilen-/Spalteninformationen zeigen, wo sie sich befinden.
- "Dateiende erreicht, als ein Attributwert geöffnet war. Tag ignoriert": Diese Nachricht ist eher kryptisch; sie bezieht sich darauf, dass es einen nicht richtig geformten Attributwert gibt, möglicherweise nahe dem Dateiende, weil das Dateiende innerhalb des Attributwertes zu liegen scheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element schuld ist.
- "Dateiende gesehen und es gab offene Elemente": Das ist etwas zweideutig, aber im Grunde bezieht es sich darauf, dass es offene Elemente gibt, die richtig geschlossen werden müssen. Die Zeilennummern zeigen auf die letzten Zeilen der Datei, und diese Fehlermeldung wird mit einer Codezeile geliefert, die ein Beispiel für ein offenes Element zeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Ungeschlossenes Element `ul`": Das ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element nicht geschlossen ist, aufgrund des fehlenden schließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen. Eine gute Strategie ist es, einige Fehler auf einmal zu korrigieren und dann Ihr HTML nach jedem Satz von Korrekturen erneut zu validieren, um zu sehen, welche Fehler noch übrig sind. Manchmal beseitigt die Behebung eines früheren Fehlers auch andere Fehlermeldungen – mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, dass alle Ihre Fehler behoben sind, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen mitteilt, dass es keine Fehler zu berichten gibt. Zum Zeitpunkt des Schreibens lautete es: "Dokumentprüfung abgeschlossen. Keine Fehler oder Warnungen zu zeigen."

## Zusammenfassung

Damit haben wir eine Einführung in das Debugging von HTML abgeschlossen, die Ihnen einige nützliche Fähigkeiten bietet, auf die Sie beim Debuggen von HTML, aber auch von CSS und JavaScript-Code im späteren Verlauf des Kurses zurückgreifen können. Dies markiert auch das Ende des Moduls _Content-Strukturierung mit HTML_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
