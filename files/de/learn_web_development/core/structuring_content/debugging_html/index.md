---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: dbf1f82bfdfeb12ab5e2a5fc65db5805fca91c29
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was passiert, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code liegt? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >HTML-Grundsyntax</a
        > behandelt werden. Semantik auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verwendung des DOM-Inspektors in Ihren Browser-Entwicklertools, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Untersuchen von häufigen HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a>, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Wenn Sie irgendeine Art von Code schreiben, ist alles in Ordnung, bis zu dem gefürchteten Moment, in dem ein Fehler auftritt – Sie haben etwas falsch gemacht, daher funktioniert Ihr Code nicht – entweder überhaupt nicht oder nicht so, wie Sie es sich vorgestellt haben. Zum Beispiel zeigt das Folgende einen Fehler an, der auftritt, wenn versucht wird, ein einfaches Programm in der [Rust](https://www.rust-lang.org/)-Sprache zu {{Glossary("compile", "kompilieren")}}.

![Ein Konsolenfenster das das Ergebnis des Versuchs zeigt, ein Rust-Programm mit einem fehlenden Anführungszeichen um eine Zeichenkette in einer Druckanweisung zu kompilieren. Die Fehlermeldung lautet: Fehler: nicht abgeschlossenes doppeltes Anführungszeichen Zeichenkette.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen – "nicht abgeschlossenes doppeltes Anführungszeichen Zeichenkette". Wenn Sie sich die Auflistung ansehen, können Sie wahrscheinlich sehen, wie `println!(Hello, world!");` logisch ein doppeltes Anführungszeichen fehlen könnte. Fehlernachrichten können jedoch schnell komplizierter und weniger leicht interpretierbar werden, wenn Programme größer werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, ein wenig beängstigend wirken.

Debugging muss jedoch nicht beängstigend sein – der Schlüssel zur Beherrschung des Schreibens und Debuggens von Code liegt in der Vertrautheit mit sowohl der Programmiersprache als auch den dazugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht in eine andere Form kompiliert, bevor es geparst wird (es wird _interpretiert_, nicht _kompiliert_). Und die {{Glossary("element", "Element")}}-Syntax von HTML ist wohl viel einfacher zu verstehen als die einer "echten Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **nachsichtiger** als bei den meisten Programmiersprachen, was sowohl gut als auch schlecht ist.

Aber zuerst einmal, was meinen wir mit nachsichtig? Nun, im Allgemeinen, wenn Sie etwas falsch im Code machen, gibt es zwei Haupttypen von Fehlern, auf die Sie stoßen werden:

- **Syntaxfehler**: Das sind Tippfehler in Ihrem Code, die das Programm daran hindern, ausgeführt zu werden, wie der oben gezeigte Rust-Fehler. Diese sind in der Regel leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Das sind Fehler, bei denen die Syntax tatsächlich korrekt ist, aber der Code nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwerer zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Quelle des Fehlers führt.

HTML selbst leidet nicht unter Syntaxfehlern, da Browser es nachsichtig parsen, was bedeutet, dass die Seite angezeigt wird, auch wenn es Syntaxfehler im Quellcode gibt. Browser haben eingebaute Regeln, um anzugeben, wie falsch geschriebenes HTML-Markup (oft als **ungültiges** oder **schlecht formatiertes** Markup bezeichnet) interpretiert werden soll und es automatisch in ein gültiges Markup zu ändern.

Zum Beispiel enthält das folgende HTML-Snippet falsch geschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag sein, aber es ist nicht – es steht danach.

Wenn Sie dieses HTML in einen Browser laden und sich den [gerenderten DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) ansehen, werden Sie sehen, dass die Verschachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das also sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erstellt, aber wie Sie [später](#your_turn_studying_html_using_the_dom_inspector) sehen werden, ist das nicht immer der Fall. Sie werden immer _etwas_ zum Laufen bringen, aber der Browser macht es nicht immer richtig, was Probleme verursachen kann. Es ist besser, von vornherein korrektes Markup zu schreiben.

> [!NOTE]
> HTML wird nachsichtig geparst, weil bei der Erstellung des Webs beschlossen wurde, dass es wichtiger war, Inhalte zu veröffentlichen, als sicherzustellen, dass die Syntax absolut korrekt ist. Das Web wäre wahrscheinlich nicht so populär, wie es heute ist, wenn es von Anfang an strikter gewesen wäre.

Wie finden Sie also Markup-Fehler? Später zeigen wir Ihnen, wie Sie mit einem Tool namens [HTML-Validator](#html-validierung) Fehler in HTML finden können, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** überprüfen können, und dann erkunden wir, welche Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwendung des DOM-Inspektors

Alle modernen Browser haben einen Satz von [Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (Devtools) eingebaut, die eine Reihe von Funktionen zum Untersuchen der in der aktuellen Registerkarte geladenen Webseite bieten. Diese Tools können Ihnen zeigen, welches HTML in der Seite angezeigt wird, welches CSS auf jeden DOM-Knoten angewendet wird, welcher JavaScript-Code in der Seite läuft und mehr. Sie ermöglichen es Ihnen auch, den aktuell laufenden Code zu bearbeiten und die Auswirkung live auf der Seite zu sehen.

Sie können die Entwicklertools in jedem Browser auf ähnliche Weise öffnen – siehe [Wie Sie die Entwicklertools in Ihrem Browser öffnen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), um zu erfahren, wie es geht.

Für diesen Artikel ist die einzige relevante Funktion der Entwicklertools der **DOM-Inspektor**, der das aktuell gerenderte HTML DOM anzeigt und Ihnen ermöglicht, es zu bearbeiten. Schauen wir uns das jetzt an:

1. Öffnen Sie die Entwicklertools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich in jedem Browser an derselben Stelle – in der Entwicklertools-Maske ganz am Anfang der Reihe. In Firefox ist er als _Inspector_ bezeichnet, in Safari, Edge und Chrome als _Elements_. Diese Registerkarte sollte standardmäßig ausgewählt sein, wenn Sie die Entwicklerwerkzeuge zum ersten Mal öffnen, wählen Sie sie aber trotzdem aus, wenn sie es nicht ist.
3. Untersuchen Sie die in der Registerkarte angezeigte DOM-Baumstruktur und beachten Sie, wie Sie mit den kleinen Erweiterungspfeilen an jedem DOM-Knoten die Knoten erweitern und zusammenklappen können, um deren untergeordnete Knoten sichtbar zu machen. Sie können auch den Auf- und Abwärtspfeil Ihrer Tastatur verwenden, um durch die Knoten nach oben und unten zu navigieren, sowie die linke und rechte Pfeiltaste, um die Knoten zu erweitern und zusammenzufalten.
4. Bewegen Sie den Mauszeiger über die Knoten (oder wählen Sie sie mit den Pfeiltasten aus) und beachten Sie, wie das aktuell ausgewählte (oder ausgewählte) Element im Ansichtsbereich hervorgehoben wird.
5. Sie können auch den gerenderten DOM bearbeiten. Wir werden die Bearbeitungsfunktionalität in diesem Artikel nicht verwenden, aber nehmen Sie sich etwas Zeit, um nachzusehen, wie es gemacht wird, wenn Sie neugierig sind.

## Ihr Einsatz: HTML mit dem DOM-Inspektor studieren

In diesem Abschnitt werden Sie sich einige Codes mit dem DOM-Inspektor ansehen und sehen, wie der Browser gängige Markup-Fehler verarbeitet.

1. Speichern Sie zunächst die folgende HTML-Datei als `debug-example.html` irgendwo auf Ihrem lokalen Rechner. Dieses Beispiel ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir untersuchen werden.

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

2. Öffnen Sie es anschließend in einem Browser. Sie werden etwas in der Art sehen:![Ein einfaches HTML-Dokument mit einem Titel von HTML-Debugging-Beispiele und einigen Informationen über häufige HTML-Fehler, wie nicht geschlossene Elemente, schlecht geschachtelte Elemente und nicht geschlossene Attribute.](badly-formed-html.png)
3. Das sieht sofort nicht gut aus; sehen wir uns den Quellcode an, um zu sehen, ob wir herausfinden können, warum (es werden nur die Inhaltsbereiche des Body-Elements gezeigt):

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

4. Sehen wir uns die Probleme an:
   - Die {{htmlelement("p","Absatz")}}- und {{htmlelement("li","Listenelemente")}}-Elemente haben keine schließenden Tags. Beim Blick auf das obige Bild scheint dies die Markup-Darstellung nicht stark beeinträchtigt zu haben, da es leicht ist zu erahnen, wo ein Element enden und das nächste beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keine schließende Tag. Dies ist etwas problematischer, da es nicht leicht zu erkennen ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text fett gerendert.
   - Dieser Abschnitt ist schlecht geschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist aufgrund des vorherigen Problems nicht leicht zu sagen, wie dies interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt ein schließendes doppeltes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben – der Link wurde überhaupt nicht gerendert.

5. Nun sehen wir uns den gerenderten DOM im Gegensatz zum Quellcode an. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie sehen eine Darstellung des gerenderten Markups: ![Der HTML-Inspektor in Firefox, mit unserem Beispiel-Absatz hervorgehoben, zeigt den Text "What causes errors in HTML?" Hier können Sie sehen, dass das Absatzelement vom Browser geschlossen wurde.](html-inspector.png)
6. Schauen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ dasselbe Ergebnis liefern):
   - Den Absätzen und Listenelementen wurden abschließende Tags hinzugefügt.
   - Es ist unklar, wo das erste `<strong>`-Element geschlossen werden sollte, sodass der Browser jeden separaten Textblock in sein eigenes `<strong>`-Element eingehüllt hat, bis ganz unten im Dokument!
   - Die falsche Verschachtelung wurde vom Browser wie hier gezeigt korrigiert:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden doppelt geschlossenen Anführungszeichen wurde vollständig gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Am obigen Beispiel können Sie sehen, dass Sie unbedingt sicherstellen möchten, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gesehenen ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Das Werkzeug für diesen Job ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der von der W3C erstellt und gepflegt wird (welche Sie in [Das Webstandards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) kennengelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, der Ihnen sagt, was mit Ihrem HTML falsch ist.

![Die HTML-Validator-Homepage](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse bereitstellen, eine HTML-Datei hochladen oder direkt einige HTML-Codes eingeben.

## Validierung eines HTML-Dokuments

In dieser Aufgabe werden wir Sie den HTML-Validator ausprobieren lassen. Sie werden unser [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) validieren und sehen, welche Ergebnisse zurückgegeben werden. Dieses Beispiel enthält dasselbe HTML, das Sie früher mit dem DOM-Inspektor studiert haben.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er noch nicht geöffnet ist.
2. Wechseln Sie zur Registerkarte [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in das große Textfeld im Markup Validation Service ein.
4. Drücken Sie die _Überprüfen_ Taste.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen geben.

![Eine Liste der HTML-Validierungsergebnisse vom W3C-Markup-Validierungsdienst](validation-results.png)

### Interpretieren der Fehlermeldungen

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu korrigieren. Gehen wir die Fehlermeldungen durch und sehen wir, was sie bedeuten. Sie werden sehen, dass jede Nachricht mit einer Zeilen- und Spaltennummer versehen ist, die es Ihnen erleichtert, den Fehler zu lokalisieren.

- "Endtag `li` impliziert, aber es gab offene Elemente" (2 Fälle): Diese Nachrichten signalisieren, dass ein Element geöffnet ist, das geschlossen werden sollte. Das Endtag ist impliziert, aber tatsächlich nicht vorhanden. Die Zeilen- und Spalteninformationen weisen auf die erste Zeile nach der Zeile hin, an der das schließende Tag eigentlich stehen sollte, aber dies ist ein guter Hinweis darauf, was falsch ist.
- "Nicht geschlossenes Element `strong`": Dies ist leichter zu verstehen – einem {{htmlelement("strong")}}-Element fehlt das schließende Tag, und die Zeilen-/Spalteninformationen zeigen genau darauf.
- "End-Tag `strong` verletzt Verschachtelungsregeln": Dies weist auf die falsch geschachtelten Elemente hin, und die Zeilen-/Spalteninformationen zeigen, wo sie sich befinden.
- "Ende der Datei erreicht, während sich in einem Attributwert. Ignoriere Tag": Diese Nachricht ist ziemlich kryptisch; sie bezieht sich darauf, dass ein Attributwert nicht richtig irgendwo geformt ist, möglicherweise gegen Ende der Datei, weil das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element fehlerhaft ist.
- "Ende der Datei gesehen und es gab offene Elemente": Das ist etwas mehrdeutig, bezieht sich aber letztendlich darauf, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern verweisen auf die letzten Zeilen der Datei, und diese Fehlermeldung wird mit einer Codezeile geliefert, die ein Beispiel für ein offenes Element aufzeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, das ein schließendes Anführungszeichen fehlt, kann ein offenes Element zur Folge haben, weil der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Nicht geschlossenes Element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element aufgrund des fehlenden schließenden Anführungszeichens nicht geschlossen wurde.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen. Eine gute Strategie ist es, ein paar Fehler auf einmal zu beheben, dann Ihre HTML nach jedem Satz von Korrekturen erneut zu validieren, um zu zeigen, welche Fehler noch übrig sind. Manchmal kann das Beheben eines früheren Fehlers auch andere Fehlermeldungen beseitigen – mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie wissen, dass alle Ihre Fehler behoben sind, wenn Ihnen ein schöner kleiner grüner Banner mitteilt, dass es keine Fehler oder Warnungen zu berichten gibt. Zum Zeitpunkt des Schreibens hieß es "Dokumentprüfung abgeschlossen. Keine Fehler oder Warnungen zu zeigen."

## Zusammenfassung

Damit haben wir eine Einführung in das Debuggen von HTML, die Ihnen einige nützliche Fähigkeiten vermitteln sollte, auf die Sie sich beim Debuggen von HTML sowie später im Kurs von CSS- und JavaScript-Code verlassen können. Dies markiert auch das Ende des Moduls _Inhalte mit HTML strukturieren_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
