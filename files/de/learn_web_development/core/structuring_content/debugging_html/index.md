---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist gut, aber was ist, wenn etwas schief geht und Sie den Fehler im Code nicht finden können? Dieser Artikel führt Sie in einige Werkzeuge ein, die Ihnen helfen können, Fehler im HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Grundlegendes Wissen über das Debuggen von HTML</li>
          <li>Verwendung des DOM-Inspectors in den Entwicklerwerkzeugen Ihres Browsers, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Untersuchung häufiger HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a> zur Erkennung von HTML-Fehlern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Beim Programmieren ist alles in Ordnung, bis der gefürchtete Moment kommt, in dem ein Fehler auftritt — Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert — entweder gar nicht oder nicht ganz so, wie Sie es wollten. Zum Beispiel zeigt das Folgende einen Fehler, der beim Versuch, ein einfaches Programm in der Sprache [Rust](https://www.rust-lang.org/) zu {{Glossary("compile", "kompilieren")}}, gemeldet wird.

![Ein Konsolenfenster zeigt das Ergebnis des Versuchs, ein Rust-Programm mit einem fehlenden Anführungszeichen um eine Zeichenkette in einer Druckanweisung zu kompilieren. Die gemeldete Fehlermeldung lautet "error: unterminated double quote string".](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen — "unterminated double quote string". Wenn Sie sich die Auflistung ansehen, können Sie wahrscheinlich erkennen, wie `println!(Hello, world!");` logischerweise ein Doppelquote fehlen könnte. Fehler können jedoch schnell komplizierter und weniger leicht zu interpretieren werden, wenn Programme größer werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, etwas einschüchternd wirken.

Debuggen muss jedoch nicht beängstigend sein — der Schlüssel zu mehr Komfort beim Schreiben und Debuggen von beliebigem Code liegt in der Vertrautheit mit sowohl der Sprache als auch den zugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht in eine andere Form kompiliert, bevor es geparst wird (es wird _interpretiert_, nicht _kompiliert_). Und die [Element]-Syntax von HTML ist wohl viel einfacher zu verstehen als eine "echte Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **nachsichtiger** als die, wie die meisten Programmiersprachen geparst werden, was sowohl gut als auch schlecht ist.

Aber was meinen wir mit nachsichtig? Nun, im Allgemeinen gibt es zwei Hauptarten von Fehlern, auf die Sie in Code stoßen, wenn Sie etwas falsch machen:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der zuvor gezeigte Rust-Fehler. Diese sind normalerweise leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwerer zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

HTML selbst leidet nicht unter Syntaxfehlern, weil Browser es auf nachsichtige Weise parsen, was bedeutet, dass die Seite immer noch angezeigt wird, selbst wenn es Syntaxfehler im Quellcode gibt. Browser haben eingebaute Regeln dafür, wie falsch geschriebenes HTML-Markup (oft als **ungültiges** oder **schlecht geformtes** Markup bezeichnet) interpretiert wird, und ändern es automatisch in gültiges Markup.

Zum Beispiel enthält der folgende HTML-Ausschnitt falsch verschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, tut es aber nicht — es steht danach.

Wenn Sie dieses HTML in einen Browser laden und sich das [gerenderte DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) ansehen, sehen Sie, dass die Verschachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist dies sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erzeugt, aber wie Sie [später](#your_turn_studying_html_using_the_dom_inspector) sehen werden, ist dies nicht immer der Fall. Sie erhalten immer _etwas_, das läuft, aber der Browser liegt nicht immer richtig, was Probleme verursachen kann. Es ist besser, korrekte Markups von Anfang an zu schreiben.

> [!NOTE]
> HTML wird nachsichtig geparst, weil zu Beginn des Webs entschieden wurde, dass es wichtiger ist, Inhalte zu veröffentlichen, als sicherzustellen, dass die Syntax absolut korrekt ist. Das Internet wäre heute wahrscheinlich nicht so populär, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später werden wir Ihnen zeigen, wie Sie mit einem Tool namens [HTML-Validator](#html-validierung) Fehler in HTML finden können, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspector** untersuchen, und dann welche Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwendung des DOM-Inspectors

Alle modernen Browser verfügen über eine Reihe von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (Devtools), die in sie eingebaut sind und die eine Reihe von Funktionen zum Untersuchen der in den aktuellen Tab geladenen Webseite bereitstellen. Diese Werkzeuge können Ihnen zeigen, welches HTML auf der Seite gerendert wird, welches CSS auf jeden DOM-Knoten angewendet wird, welche JavaScript auf der Seite läuft und mehr. Sie ermöglichen es Ihnen auch, den derzeit laufenden Code zu bearbeiten und die Wirkung live auf der Seite zu sehen.

Sie können die Devtools auf ähnliche Weise in jedem Browser öffnen — siehe [Wie Sie die Devtools in Ihrem Browser öffnen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), um zu erfahren, wie das geht.

Für diesen Artikel ist die einzige relevante Devtools-Funktion der **DOM-Inspector**, der das derzeit gerenderte HTML-DOM zeigt und es Ihnen ermöglicht, es zu bearbeiten. Schauen wir uns das jetzt an:

1. Öffnen Sie die Devtools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspector. Er befindet sich an derselben Stelle in jedem Browser — der erste Tab in den Devtools am Anfang der Reihe. In Firefox heißt er _Inspector_, während er in Safari, Edge und Chrome _Elements_ genannt wird. Dies sollte der Tab sein, der standardmäßig ausgewählt ist, wenn Sie die Devtools zuerst öffnen, wählen Sie ihn aus, wenn er es nicht ist.
3. Untersuchen Sie die DOM-Baumstruktur, die im Tab angezeigt wird, und beachten Sie, wie Sie auf die kleinen Erweiterungspfeile zu Beginn jedes DOM-Knotens klicken können, um sie zu erweitern und einzuklappen und ihre Nachfolgeknoten anzuzeigen. Sie können auch die Aufwärts- und Abwärtspfeiltasten verwenden, um sich auf den Knoten nach oben und unten zu bewegen, und die rechte und linke Pfeiltaste, um die Knoten zu erweitern und zu reduzieren.
4. Versuchen Sie auch, über die Knoten zu schweben (oder sie mit den Pfeiltasten auszuwählen) und stellen Sie fest, wie das derzeit überfahrene (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können auch das gerenderte DOM bearbeiten. Wir werden die Bearbeitungsfunktionalität in diesem Artikel nicht verwenden, aber nehmen Sie sich Zeit, um nachzulesen, wie das geht, wenn Sie neugierig sind.

## Ihr Einsatz: HTML mit dem DOM-Inspector studieren

In diesem Abschnitt werden Sie einige Codes mit dem DOM-Inspector studieren und sehen, wie der Browser mit häufigen Markup-Fehlern umgeht.

1. Speichern Sie zunächst die folgende HTML-Dateiliste unter `debug-example.html` irgendwo auf Ihrem lokalen Rechner. Diese Demo ist absichtlich mit einigen integrierten Fehlern geschrieben, die wir untersuchen können.

   ```html-nolint
   <!doctype html>
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

2. Öffnen Sie es anschließend in einem Browser. Sie werden etwas wie das Folgende sehen:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen über häufige HTML-Fehler wie nicht geschlossene Elemente, schlecht verschachtelte Elemente und nicht geschlossene Attribute.](badly-formed-html.png)
3. Dies sieht sofort nicht großartig aus; schauen wir uns den Quellcode an, um zu sehen, ob wir herausfinden können, warum (nur der Body-Inhalt wird angezeigt):

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
   - Die {{htmlelement("p","Paragraph")}}- und {{htmlelement("li","Listenelement")}}-Elemente haben keine Schlusstag. Beim Blick auf das obige Bild scheint dies das Markup-Rendering nicht allzu sehr beeinträchtigt zu haben, da es einfach ist zu erraten, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keinen Schlusstag. Dies ist etwas problematischer, da es nicht einfach zu erkennen ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text fett gedruckt.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist nicht einfach zu erkennen, wie dies aufgrund des vorherigen Problems interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert hat kein schließendes Doppelquote. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht gerendert.

5. Lassen Sie uns nun das gerenderte DOM untersuchen, im Gegensatz zum Quellcode. Öffnen Sie dazu den DOM-Inspector Ihres Browsers. Sie werden eine Darstellung des gerenderten Markups sehen: ![Der HTML-Inspector in Firefox, mit dem hervorgehobenen Absatz unseres Beispiels, der den Text "Was verursacht Fehler in HTML?" zeigt, Hier können Sie sehen, dass der Absatz vom Browser geschlossen wurde.](html-inspector.png)
6. Sehen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ dasselbe Ergebnis liefern):
   - Die Absätze und Listenelemente wurden mit Schlusstag versehen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden separaten Textblock in sein eigenes `<strong>`-Element gewickelt, bis ganz unten im Dokument!
   - Die falsche Verschachtelung wurde vom Browser wie hier gezeigt korrigiert:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Doppelquote wurde vollständig gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Wie Sie im obigen Beispiel sehen können, möchten Sie wirklich sicherstellen, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gezeigten ist es einfach, die Zeilen durchzugehen und die Fehler zu finden, aber was ist mit einem großen, komplexen HTML-Dokument?

Das Werkzeug für diese Aufgabe ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der vom W3C erstellt und gepflegt wird (worüber Sie im [Der Webstandards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) gelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, der Ihnen sagt, was mit Ihrem HTML falsch ist.

![Die HTML-Validator-Startseite](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse bereitstellen, eine HTML-Datei hochladen oder direkt HTML-Code eingeben.

## Validierung eines HTML-Dokuments

In dieser Aufgabe werden Sie aufgefordert, den HTML-Validator auszuprobieren. Sie werden unser [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) validieren und sehen, welche Ergebnisse zurückgegeben werden. Dieses Beispiel enthält denselben HTML-Code, den Sie zuvor mit dem DOM-Inspector studiert haben.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er nicht bereits geöffnet ist.
2. Wechseln Sie zum Tab [Direkte Eingabe validieren](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in das große Textfeld ein, das im Markup Validation Service angezeigt wird.
4. Drücken Sie die _Überprüfen_ Schaltfläche.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen geben.

![Eine Liste der HTML-Validierungsergebnisse vom W3C-Markup-Validation-Service](validation-results.png)

### Interpretieren der Fehlermeldungen

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal sind sie nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu beheben. Gehen wir die Fehlermeldungen durch und sehen wir, was sie bedeuten. Sie werden sehen, dass jedes Nachricht mit einer Zeilen- und Spaltennummer versehen ist, um Ihnen zu helfen, den Fehler leicht zu lokalisieren.

- "End-Tag `li` impliziert, aber es gab offene Elemente" (2 Instanzen): Diese Nachrichten zeigen an, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag wird impliziert, ist aber tatsächlich nicht vorhanden. Die Zeilen-/Spalteninformationen weisen auf die erste Zeile nach der Zeile, in der der Schlusstag wirklich sein sollte, aber dies ist ein guter Hinweis, um zu sehen, was falsch ist.
- "Nicht geschlossenes Element `strong`": Dies ist leichter zu verstehen — ein {{htmlelement("strong")}}-Element ist nicht geschlossen, und die Zeilen-/Spalteninformationen weisen genau darauf hin, wo es ist.
- "End-Tag `strong` verletzt Verschachtelungsregeln": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen-/Spalteninformationen zeigen an, wo sie sind.
- "Dateiende erreicht, während sich innerhalb eines Attributwerts. Tag ignoriert": Dies ist eher kryptisch; es bezieht sich darauf, dass irgendwo ein Attributwert nicht richtig formatiert ist, möglicherweise am Ende der Datei, da das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element fehlerhaft ist.
- "Dateiende erreicht und es gab offene Elemente": Dies ist etwas mehrdeutig, aber bezieht sich im Wesentlichen darauf, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern weisen auf die letzten Zeilen der Datei hin, und diese Fehlermeldung kommt mit einer Zeile Code, die auf ein Beispiel eines offenen Elements hinweist:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut ohne schließendes Anführungszeichen kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Nicht geschlossenes Element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element _ist_ korrekt geschlossen. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element nicht geschlossen ist, aufgrund des fehlenden schließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen darüber. Eine gute Strategie besteht darin, einige Fehler nach dem anderen zu beheben und dann nach jedem Satz von Korrekturen Ihr HTML erneut zu validieren, um zu zeigen, welche Fehler noch vorhanden sind. Manchmal führt die Behebung eines früheren Fehlers auch dazu, dass andere Fehlermeldungen verschwinden — mehrere Fehler können oft durch ein einzelnes Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, dass alle Ihre Fehler behoben sind, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen sagt, dass es keine Fehler zu berichten gibt. Zum Zeitpunkt des Schreibens sagte es: "Dokumentprüfung abgeschlossen. Keine Fehler oder Warnungen angezeigt."

## Zusammenfassung

Das war es also, eine Einführung in die Fehlerbehebung bei HTML, die Ihnen nützliche Fähigkeiten vermittelt, auf die Sie sich beim Debuggen von HTML, aber auch von CSS- und JavaScript-Code später im Kurs verlassen können. Dies markiert auch das Ende des Moduls _Strukturieren von Inhalten mit HTML_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
