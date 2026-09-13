---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was tun, wenn etwas schiefgeht und Sie den Fehler im Code nicht finden können? Dieser Artikel stellt Ihnen einige Werkzeuge vor, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

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
          >Strukturales HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die wichtigsten Grundlagen zum Debuggen von HTML</li>
          <li>Verwendung des DOM-Inspektors in den Entwicklerwerkzeugen Ihres Browsers, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Untersuchung der häufigsten HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a> zur Erkennung von HTML-Fehlern.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Beim Schreiben von irgendeiner Art von Code ist alles in Ordnung, bis zu dem gefürchteten Moment, in dem ein Fehler auftritt – Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert – entweder gar nicht oder nicht so, wie Sie es sich vorgestellt haben. Zum Beispiel zeigt das folgende Beispiel einen Fehler, der beim Kompilieren eines einfachen Programms in der [Rust](https://rust-lang.org/)-Sprache gemeldet wurde.

![Ein Konsolenfenster zeigt das Ergebnis des Versuchs, ein Rust-Programm zu kompilieren, bei dem ein Anführungszeichen um einen String in einer Ausgabefunktion fehlt. Die Fehlermeldung lautet: Fehler: nicht abgeschlossenes Stringende im Anführungszeichen.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen – "nicht abgeschlossenes Stringende im Anführungszeichen". Wenn Sie sich die Auflistung ansehen, können Sie wahrscheinlich sehen, wie `println!(Hello, world!");` logisch ein Anführungszeichen fehlt. Jedoch können Fehlermeldungen schnell komplizierter und schwerer zu interpretieren werden, wenn Programme größer werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, etwas einschüchternd wirken.

Debugging muss jedoch nicht beängstigend sein – der Schlüssel, um sich beim Schreiben und Debuggen von Code sicher zu fühlen, ist die Vertrautheit mit sowohl der Sprache als auch den zugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht vor dem Parsen in eine andere Form kompiliert (es wird _interpretiert_, nicht _kompiliert_). Und die {{Glossary("element", "Element")}}-Syntax von HTML ist wohl viel einfacher zu verstehen als die einer "echten Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **nachgiebiger** als die der meisten Programmiersprachen, was sowohl gut als auch schlecht ist.

Aber was meinen wir mit nachgiebig? Nun, im Allgemeinen gibt es, wenn Sie etwas im Code falsch machen, zwei Hauptarten von Fehlern, denen Sie begegnen:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht läuft, wie der Rust-Fehler, der zuvor gezeigt wurde. Diese sind in der Regel leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwerer zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

HTML leidet selbst nicht unter Syntaxfehlern, weil Browser es nachgiebig parsen, was bedeutet, dass die Seite auch dann noch angezeigt wird, wenn es Syntaxfehler im Quellcode gibt. Browser verfügen über eingebaute Regeln, wie falsch geschriebene HTML-Markups interpretiert werden sollen (oft als **ungültig** oder **schlecht geformt** bezeichnet), und ändern es automatisch zu einem gültigen Markup.

Zum Beispiel enthält das folgende HTML-Snippet falsch geschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, tut es aber nicht – es kommt danach.

Wenn Sie dieses HTML in einen Browser laden und dann das [gerenderte DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) ansehen, werden Sie sehen, dass die Schachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das nun sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erstellt, aber wie Sie [später](#your_turn_studying_html_using_the_dom_inspector) sehen werden, ist dies nicht immer der Fall. Sie erhalten zwar immer _irgendetwas_ ausgeführt, aber der Browser macht es nicht immer richtig, was Probleme verursachen kann. Es ist besser, von Anfang an korrektes Markup zu schreiben.

> [!NOTE]
> HTML wird nachgiebig geparst, weil bei der Erstellung des Webs entschieden wurde, dass das Veröffentlichen von Inhalten wichtiger ist, als die Syntax absolut korrekt zu machen. Das Web wäre wahrscheinlich nicht so populär, wie es heute ist, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später zeigen wir Ihnen, wie Sie mit einem Werkzeug namens [HTML-Validator](#html-validierung) Fehler in HTML finden können, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** inspizieren und dann untersuchen, nach welcher Art von Markup-Fehlern Sie suchen sollten und wie der Browser diese möglicherweise interpretiert.

## Verwenden des DOM-Inspektors

Alle modernen Browser verfügen über eine Reihe von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (Devtools), die in ihnen eingebaut sind und Funktionen zum Untersuchen der Webseite bieten, die im aktuellen Tab geladen ist. Diese Werkzeuge können Ihnen zeigen, welches HTML in der Seite gerendert wird, welche CSS-Regeln auf jeden DOM-Knoten angewendet werden, welches JavaScript in der Seite ausgeführt wird und mehr. Sie ermöglichen es Ihnen auch, den derzeit ausgeführten Code zu bearbeiten und die Auswirkung live auf der Seite zu sehen.

Sie können die Entwicklerwerkzeuge in jedem Browser auf ähnliche Weise öffnen – sehen Sie sich [So öffnen Sie die Entwicklerwerkzeuge in Ihrem Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser) an, um zu erfahren wie.

Für diesen Artikel ist die einzige relevante Funktion der Entwicklerwerkzeuge der **DOM-Inspektor**, der den aktuell gerenderten HTML-DOM anzeigt und Ihnen erlaubt, ihn zu bearbeiten. Schauen wir uns das jetzt an:

1. Öffnen Sie die Entwicklerwerkzeuge in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich an derselben Stelle in jedem Browser – der erste Tab in den Entwicklerwerkzeugen am Anfang der Leiste. In Firefox ist er mit _Inspector_ beschriftet, während er in Safari, Edge und Chrome als _Elements_ bezeichnet wird. Dies sollte der Tab sein, der standardmäßig ausgewählt ist, wenn Sie die Entwicklerwerkzeuge zum ersten Mal öffnen, wählen Sie ihn jedoch aus, falls er nicht ausgewählt ist.
3. Untersuchen Sie die DOM-Baumstruktur, die im Tab gezeigt wird, und beachten Sie, wie Sie auf die kleinen Pfeile am Anfang jedes DOM-Knotens klicken können, um sie zu erweitern oder zu reduzieren und deren Nachkommen-Knoten anzuzeigen. Sie können auch die Auf- und Abwärts-Cursortasten verwenden, um zwischen den Knoten nach oben und unten zu wechseln, und die rechten und linken Cursortasten, um die Knoten zu erweitern und zu reduzieren.
4. Versuchen Sie außerdem, über die Knoten zu fahren (oder sie mit den Cursortasten auszuwählen) und beachten Sie, wie das derzeit fokussierte (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können auch den gerenderten DOM bearbeiten. Wir werden die Bearbeitungsfunktionalität in diesem Artikel nicht verwenden, aber nehmen Sie sich Zeit, nachzulesen, wie das geht, wenn Sie neugierig sind.

## Ihr Einsatz: HTML mit dem DOM-Inspektor studieren

In diesem Abschnitt werden Sie einige Codes mit dem DOM-Inspektor studieren und sehen, wie der Browser mit häufigen Markup-Fehlern umgeht.

1. Speichern Sie zuerst das folgende HTML-Datei-Listing als `debug-example.html` irgendwo auf Ihrem lokalen Rechner. Diese Demo ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erforschen können.

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

2. Öffnen Sie es anschließend in einem Browser. Sie werden etwas Ähnliches sehen: ![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und etwas Informationen zu häufigen HTML-Fehlern wie ungeöffneten Elementen, fehlerhaft geschachtelten Elementen und ungeöffneten Attributen.](badly-formed-html.png)
3. Dies sieht sofort nicht gut aus; werfen wir einen Blick auf den Quellcode, um zu sehen, ob wir herausfinden können, warum (nur der Inhalt des Body ist gezeigt):

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
   - Die {{htmlelement("p","paragraph")}}- und {{htmlelement("li","list item")}}-Elemente haben keine schließenden Tags. Beim Betrachten des obigen Bildes scheint dies die Markup-Darstellung nicht allzu sehr beeinträchtigt zu haben, da es einfach ist, zu erraten, wo ein Element enden und ein anderes beginnen soll.
   - Das erste {{htmlelement("strong")}}-Element hat kein schließendes Tag. Dies ist etwas problematischer, da es nicht leicht zu sagen ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text fett dargestellt.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Aufgrund des vorherigen Problems ist nicht leicht zu ermitteln, wie dies interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt das schließende Anführungszeichen. Dies scheint das größte Problem verursacht zu haben – der Link wurde überhaupt nicht gerendert.

5. Lassen Sie uns nun den gerenderten DOM im Vergleich zum Quellcode untersuchen. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie werden eine Darstellung des gerenderten Markups sehen: ![Der HTML-Inspektor in Firefox, mit dem hervorgehobenen Absatz aus unserem Beispiel, der den Text "What causes errors in HTML?" zeigt. Hier können Sie sehen, dass der Absatz vom Browser geschlossen wurde.](html-inspector.png)
6. Sehen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ das gleiche Ergebnis liefern):
   - Den Absätzen und Listenelementen wurden Schlusstag hinzugefügt.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden einzelnen Textblock in sein eigenes `<strong>`-Element eingewickelt, bis zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie hier gezeigt behoben:

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

## HTML-Validierung

Aus dem obigen Beispiel können Sie erkennen, dass Sie wirklich sicherstellen wollen, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gesehenen ist es einfach, durch die Zeilen zu suchen und die Fehler zu finden, aber was ist mit einem großen, komplexen HTML-Dokument?

Das Werkzeug für diese Aufgabe ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der vom W3C erstellt und gepflegt wird (was Sie im [Webstandards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) kennengelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, der Ihnen sagt, was an Ihrem HTML falsch ist.

![Die HTML-Validator-Homepage](validator.png)

Um das HTML zu spezifizieren, das validiert werden soll, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt etwas HTML-Code eingeben.

## Validieren eines HTML-Dokuments

In dieser Aufgabe werden wir Sie den HTML-Validator ausprobieren lassen. Sie werden dasselbe HTML validieren, das Sie zuvor mit dem DOM-Inspektor untersucht haben.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er nicht bereits geöffnet ist.
2. Wechseln Sie zum Tab [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie das [Beispieldokument](#your_turn_studying_html_using_the_dom_inspector) und fügen Sie es in den großen Textbereich ein, der im Markup Validation Service angezeigt wird. Fügen Sie die gesamte Dokumentstruktur ein, nicht nur den `<body>`-Inhalt.
4. Drücken Sie die _Prüfen_-Schaltfläche.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen geben.

![Eine Liste von HTML-Validierungsergebnissen vom W3C-Markup-Validation-Service](validation-results.png)

### Fehlermeldungen interpretieren

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal sind sie nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu korrigieren. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden sehen, dass jede Nachricht mit einer Zeilen- und Spaltennummer versehen ist, die Ihnen hilft, den Fehler leicht zu finden.

- "Ende-Tag `li` impliziert, aber es gab offene Elemente" (2 Instanzen): Diese Nachrichten deuten darauf hin, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag ist impliziert, aber nicht tatsächlich vorhanden. Die Zeilen-/Spalteninformationen verweisen auf die erste Zeile nach der Zeile, in der das Schlusstag wirklich sein sollte, aber dies ist ein guter Hinweis, um zu sehen, was falsch ist.
- "Nicht geschlossenes Element `strong`": Dies ist leichter zu verstehen – ein {{htmlelement("strong")}}-Element ist nicht geschlossen, und die Zeilen-/Spalteninformationen verweisen direkt darauf, wo es sich befindet.
- "Ende-Tag `strong` verletzt die Verschachtelungsregeln": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen-/Spalteninformationen zeigen an, wo sie sich befinden.
- "Ende der Datei erreicht, als ein Attributwert geöffnet war. Tag ignorieren": Dies ist ziemlich kryptisch; es bezieht sich darauf, dass ein Attributwert irgendwo nicht ordnungsgemäß abgeschlossen ist, möglicherweise gegen Ende der Datei, weil das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element schuld ist.
- "Ende der Datei erreicht und es gab offene Elemente": Dies ist etwas zweideutig, aber im Grunde bezieht es sich darauf, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern verweisen auf die letzten Zeilen der Datei, und diese Fehlermeldung kommt mit einer Codezeile, die auf ein Beispiel für ein offenes Element hinweist:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, weil der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element aufgrund des fehlenden schließenden Anführungszeichens nicht geschlossen ist.

Wenn Sie nicht verstehen, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen darum. Eine gute Strategie ist es, jeweils ein paar Fehler zu beheben, dann Ihr HTML nach jedem Satz von Korrekturen neu zu validieren, um zu zeigen, welche Fehler noch übrig sind. Manchmal wird durch die Behebung eines früheren Fehlers auch andere Fehlermeldungen beseitigt – mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, wann alle Ihre Fehler behoben sind, wenn Sie ein kleines grünes Banner sehen, das Ihnen sagt, dass es keine Fehler oder Warnungen zu zeigen gibt. Zum Zeitpunkt des Schreibens stand dort: "Dokumentenprüfung abgeschlossen. Keine Fehler oder Warnungen zu zeigen."

## Zusammenfassung

Damit haben wir eine Einführung ins Debugging von HTML, die Ihnen einige nützliche Fähigkeiten geben sollte, auf die Sie zurückgreifen können, wenn Sie HTML debuggen, aber auch CSS und JavaScript später im Kurs. Dies markiert auch das Ende des Moduls _Content mit HTML strukturieren_.

Ihr nächster Schritt ist es, damit zu beginnen, über das Styling des Webs in unserem [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics) Modul zu lernen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
