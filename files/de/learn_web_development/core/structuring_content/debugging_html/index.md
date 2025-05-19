---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 0c25999e30c50a6e30d66d571b7b4125178b7467
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was ist, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code liegt? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, wie es in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt wird. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die wichtigsten Grundlagen zum Debuggen von HTML</li>
          <li>Den DOM-Inspektor in Ihren Browser-Entwicklertools nutzen, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Untersuchen von häufigen HTML-Fehlertypen.</li>
          <li>Verwenden des <a href="https://validator.w3.org/">HTML-Validators</a>, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Wenn Sie irgendeine Art von Code schreiben, ist alles in Ordnung - bis zu dem gefürchteten Moment, in dem ein Fehler auftritt. Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert - entweder gar nicht oder nicht so, wie Sie es wollten. Ein Beispiel zeigt einen Fehler, der beim {{Glossary("compile", "Kompilieren")}} eines einfachen Programms in der Programmiersprache [Rust](https://www.rust-lang.org/) gemeldet wird.

![Ein Konsolenfenster zeigt das Ergebnis des Versuches, ein Rust-Programm zu kompilieren, bei dem ein Anführungszeichen in einem print statement fehlt. Die Fehlermeldung lautet: Fehler: nicht abgeschlossenes doppelt-Anführungszeichen-String.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen — "not abgeschlossenes doppelt-Anführungszeichen-String". Wenn Sie sich das Listing ansehen, können Sie wahrscheinlich sehen, warum `println!(Hello, world!");` logischerweise ein doppeltes Anführungszeichen fehlt. Fehlermeldungen können jedoch schnell komplizierter und weniger leicht verständlich werden, je größer Programme werden, und selbst einfache Fälle können auf jemanden, der nichts über Rust weiß, ein wenig einschüchternd wirken.

Debugging muss jedoch nicht beängstigend sein — der Schlüssel, um sich beim Schreiben und Debuggen eines Codes wohlzufühlen, liegt in der Vertrautheit mit der Sprache und den zugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht in eine andere Form kompiliert, bevor es geparst wird (es wird _interpretiert_, nicht _kompiliert_). Und die Syntax der {{Glossary("element", "Elemente")}} von HTML ist wohl viel einfacher zu verstehen als die einer "echten Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **nachsichtiger** als die meisten Programmiersprachen, was sowohl gut als auch schlecht ist.

Aber was meinen wir zuerst mit nachsichtig? Nun, generell gibt es bei Fehlern im Code zwei Hauptfehlertypen, auf die Sie stoßen werden:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der Rust-Fehler, der zuvor gezeigt wurde. Diese sind in der Regel leichter zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch ausgeführt wird. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie auf die Fehlerquelle hinweist.

HTML selbst leidet nicht unter Syntaxfehlern, da Browser es nachsichtig parsen, was bedeutet, dass die Seite immer noch angezeigt wird, selbst wenn Syntaxfehler im Quellcode vorhanden sind. Browser haben eingebaute Regeln, wie falsch geschriebenes HTML-Markup (oft als **ungültiges** oder **schlecht geformtes** Markup bezeichnet) zu interpretieren ist und ändern es automatisch in ein gültiges Markup.

Zum Beispiel enthält das folgende HTML-Snippet falsch verschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, tut es aber nicht - es steht danach.

Wenn Sie dieses HTML in einem Browser laden und sich den [gerenderten DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) ansehen, werden Sie sehen, dass die Verschachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist dies also sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erzeugt, aber wie Sie [später](#active_learning_studying_html_using_the_dom_inspector) sehen werden, ist dies nicht immer der Fall. Sie erhalten immer ein _irgendwie_ funktionierendes Ergebnis, aber der Browser hat nicht immer recht, was Probleme verursachen kann. Es ist besser, von Anfang an korrekten Markup zu schreiben.

> [!NOTE]
> HTML wird nachsichtig geparst, weil zu der Zeit, als das Internet geschaffen wurde, entschieden wurde, dass es wichtiger ist, Inhalte zu veröffentlichen, als sicherzustellen, dass die Syntax absolut korrekt ist. Das Internet wäre wahrscheinlich nicht so populär wie heute, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später zeigen wir Ihnen, wie Sie mit einem Werkzeug namens [HTML-Validator](#html-validierung) Fehler in HTML finden, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** untersuchen und dann erkunden, welche Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwenden eines DOM-Inspektors

Alle modernen Browser haben eine Reihe von [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (devtools) integriert, die eine Reihe von Funktionen zum Untersuchen der in das aktuelle Tab geladenen Webseite bereitstellen. Diese können Ihnen zeigen, welches HTML auf der Seite gerendert wird, welches CSS auf jeden DOM-Knoten angewendet wird, welches JavaScript auf der Seite läuft und mehr. Sie ermöglichen Ihnen auch, den aktuellen Code zu bearbeiten und die Wirkung live auf der Seite zu sehen.

Sie können die Entwicklertools auf ähnliche Weise in jedem Browser öffnen — siehe [Öffnen der Entwicklertools in Ihrem Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), um zu erfahren, wie Sie das machen.

Für diesen Artikel ist die einzige relevante Entwicklertools-Funktion der **DOM-Inspektor**, der den aktuell gerenderten HTML-DOM anzeigt und es Ihnen ermöglicht, ihn zu bearbeiten. Werfen wir jetzt einen Blick darauf:

1. Öffnen Sie die Entwicklertools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich in jedem Browser an derselben Stelle – auf der ersten Registerkarte der Entwicklertools am Anfang der Reihe. In Firefox ist er als _Inspector_ bezeichnet, in Safari, Edge und Chrome ist er als _Elements_ bezeichnet. Dies sollte die standardmäßig ausgewählte Registerkarte sein, wenn Sie die Entwicklertools zum ersten Mal öffnen, wählen Sie sie jedoch aus, wenn sie dies nicht ist.
3. Untersuchen Sie die in der Registerkarte angezeigte DOM-Struktur und beachten Sie, wie Sie auf die kleinen Erweiterungspfeile zu Beginn jedes DOM-Knotens klicken können, um sie zu erweitern und zusammenzuklappen und ihre Nachfolgeknoten anzuzeigen. Sie können auch die Pfeiltasten nach oben und unten verwenden, um sich zwischen den Knoten zu bewegen und die Pfeiltasten nach rechts und links verwenden, um die Knoten zu erweitern und zusammenzuklappen.
4. Versuchen Sie außerdem, über die Knoten zu fahren (oder sie mit den Pfeiltasten auszuwählen) und beachten Sie, wie das aktuell fokussierte (oder ausgewählte) Element im Viewport hervorgehoben wird.
5. Sie können auch den gerenderten DOM bearbeiten. Wir werden die Bearbeitungsfunktionalität in diesem Artikel nicht verwenden, aber nehmen Sie sich Zeit, um herauszufinden, wie Sie dies tun können, wenn Sie neugierig sind.

## Aktives Lernen: Untersuchen von HTML mit dem DOM-Inspektor

Es ist Zeit, einige HTML-Codes mit dem DOM-Inspektor zu untersuchen und zu sehen, wie der Browser mit häufigen Markup-Fehlern umgeht.

1. Speichern Sie zuerst das folgende HTML-Dateilisting als `debug-example.html` irgendwo auf Ihrem lokalen Rechner. Dieses Demo ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erkunden werden.

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

2. Öffnen Sie es anschließend in einem Browser. Sie werden etwas wie dies sehen: ![Ein einfaches HTML-Dokument mit einem Titel von HTML-Debug-Beispielen und einigen Informationen zu häufigen HTML-Fehlern, wie z. B. ungeschlossenen Elementen, schlecht verschachtelten Elementen und ungeschlossenen Attributen. ](badly-formed-html.png)
3. Dies sieht sofort nicht gut aus; lassen Sie uns den Quellcode ansehen, um zu sehen, ob wir herausfinden können, warum (nur der Inhaltsbereich wird angezeigt):

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

   - Die {{htmlelement("p","Absatz")}} und {{htmlelement("li","Listenelement")}} Elemente haben keine schließenden Tags. Beim Blick auf das Bild oben scheint dies das Markup-Rendering nicht allzu sehr beeinträchtigt zu haben, da es einfach ist zu schlussfolgern, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat kein schließendes Tag. Dies ist etwas problematischer, da es nicht leicht zu erkennen ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text fett gedruckt.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong betont?</strong> was ist das?</em>`. Aufgrund des vorhergehenden Problems ist es schwer zu erkennen, wie dies interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt ein schließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben - der Link wurde überhaupt nicht gerendert.

5. Lassen Sie uns nun den gerenderten DOM, im Gegensatz zum Quellcode, untersuchen. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie werden eine Darstellung des gerenderten Markup sehen: ![Der HTML-Inspektor in Firefox, mit unserem Beispielabsatz hervorgehoben, zeigt den Text "Was verursacht Fehler im HTML?" Sie können sehen, dass das Absatzelement vom Browser geschlossen wurde.](html-inspector.png)
6. Sehen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben das Review in Firefox durchgeführt; andere moderne Browser _sollten_ das gleiche Ergebnis liefern):

   - Den Absätzen und Listenelementen wurden schließende Tags hinzugefügt.
   - Es ist nicht klar, wo das erste `<strong>` Element geschlossen werden sollte, daher hat der Browser jeden Textblock in sein eigenes `<strong>` Element eingeschlossen, bis hinunter zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie folgt behoben:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Anführungszeichen wurde vollständig gelöscht. Das letzte Listenelement sieht folgendermaßen aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Aus dem obigen Beispiel können Sie ersehen, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gesehenen ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Das Werkzeug für diese Aufgabe ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der vom W3C erstellt und gepflegt wird (über den Sie im [Webstandards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) gelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht darüber, was an Ihrem HTML falsch ist.

![Die HTML-Validator-Homepage](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt HTML-Code eingeben.

## Aktives Lernen: Validierung eines HTML-Dokuments

Lassen Sie uns dies mit unserem [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) versuchen.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er nicht bereits geöffnet ist.
2. Wechseln Sie zur Registerkarte [Direkte Eingabe validieren](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Inhalt des body) und fügen Sie ihn in das große Textfeld ein, das im Markup Validation Service angezeigt wird.
4. Drücken Sie die Schaltfläche _Überprüfen_.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen geben.

![Eine Liste der HTML-Validierungsergebnisse vom W3C Markup Validation Service](validation-results.png)

### Die Fehlermeldungen interpretieren

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, wie Sie diese interpretieren, um Ihren Code zu beheben. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden sehen, dass jede Meldung mit einer Zeilen- und Spaltennummer geliefert wird, um Ihnen zu helfen, den Fehler leicht zu lokalisieren.

- "Ende-Tag `li` impliziert, aber es gab offene Elemente" (2 Instanzen): Diese Meldungen zeigen an, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag wird impliziert, ist aber tatsächlich nicht vorhanden. Die Linien-/Spalteninformationen zeigen auf die erste Linie nach der Linie, in der das schließende Tag wirklich sein sollte, aber dies ist ein guter Hinweis darauf, was falsch ist.
- "Ungeschlossenes Element `strong`": Dies ist wirklich leicht zu verstehen — ein {{htmlelement("strong")}}-Element ist ungeschlossen, und die Zeilen-/Spalteninformationen zeigen genau auf, wo es sich befindet.
- "Ende-Tag `strong` verstößt gegen Verschachtelungsregeln": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen-/Spalteninformationen zeigen, wo sie sich befinden.
- "Dateiende erreicht, während innerhalb eines Attributwerts. Tag ignoriert": Dies ist etwas kryptisch; es bezieht sich auf die Tatsache, dass irgendwo ein Attributwert nicht richtig geformt ist, möglicherweise nahe dem Ende der Datei, weil das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element schuld ist.
- "Dateiende gesehen und es gab offene Elemente": Dies ist etwas mehrdeutig, bezieht sich jedoch im Wesentlichen darauf, dass es offene Elemente gibt, die richtig geschlossen werden müssen. Die Zeilennummern weisen auf die letzten paar Zeilen der Datei hin, und diese Fehlermeldung kommt mit einer Codezeile, die ein Beispiel für ein offenes Element zeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Ungeschlossenes Element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element _korrekt_ geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element nicht geschlossen ist, aufgrund des fehlenden schließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen darüber. Eine gute Strategie ist es, ein paar Fehler auf einmal zu beheben und dann Ihr HTML nach jedem Satz von Korrekturen erneut zu validieren, um zu sehen, welche Fehler noch vorhanden sind. Manchmal wird ein früherer Fehler behoben, was andere Fehlermeldungen verschwinden lässt - mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Domino-Effekt.

Sie werden wissen, wann alle Ihre Fehler behoben sind, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen mitteilt, dass es keine Fehler zu berichten gibt. Zum Zeitpunkt des Schreibens stand dort "Dokumentenprüfung abgeschlossen. Keine Fehler oder Warnungen zu zeigen."

## Zusammenfassung

Damit haben wir eine Einführung in das Debuggen von HTML, die Ihnen einige nützliche Fähigkeiten vermitteln sollte, auf die Sie beim Debuggen von HTML, aber auch von CSS- und JavaScript-Code im Laufe des Kurses zählen können. Dies markiert auch das Ende des Moduls _Inhalte mit HTML strukturieren_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
