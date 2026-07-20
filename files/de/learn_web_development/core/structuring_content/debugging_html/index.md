---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was tun, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code liegt? Dieser Artikel stellt Ihnen einige Werkzeuge vor, die Ihnen helfen können, Fehler im HTML zu finden und zu beheben.

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
          >Strukturales HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Wichtiges Hintergrundwissen rund um das Debuggen von HTML</li>
          <li>Die Verwendung des DOM-Inspektors in den Entwicklerwerkzeugen Ihres Browsers, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Untersuchen gängiger HTML-Fehlertypen.</li>
          <li>Die Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a>, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Beim Schreiben von Code ist alles in Ordnung, bis zu dem gefürchteten Moment, in dem ein Fehler auftritt — Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert — entweder gar nicht oder nicht so, wie Sie es wollten. Zum Beispiel zeigt das folgende Bild einen Fehler an, der auftritt, wenn versucht wird, ein einfaches Programm in der [Rust](https://rust-lang.org/) Sprache zu {{Glossary("compile", "kompilieren")}}.

![Ein Konsolenfenster, das das Ergebnis des Versuchs zeigt, ein Rust-Programm mit einem fehlenden Anführungszeichen um einen String in einer Print-Anweisung zu kompilieren. Die gemeldete Fehlermeldung lautet: Fehler: Ungeschlossener doppelter Anführungszeichen-String.](error-message.png)

Hier ist die Fehlermeldung relativ leicht verständlich — "ungeschlossener doppelter Anführungszeichen-String". Wenn Sie sich das Listing ansehen, können Sie wahrscheinlich erkennen, dass `println!(Hello, world!");` logisch ein Anführungszeichen fehlen könnte. Allerdings werden Fehlermeldungen schnell komplizierter und weniger leicht interpretierbar, je größer die Programme werden, und selbst einfache Fälle können etwas einschüchternd wirken, wenn man nichts über Rust weiß.

Debugging muss jedoch nicht beängstigend sein — der Schlüssel, sich wohl beim Schreiben und Debuggen von Code zu fühlen, liegt in der Vertrautheit mit sowohl der Sprache als auch den zugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht vor dem Parsen in eine andere Form kompiliert (es wird _interpretiert_, nicht _kompiliert_). Und die {{Glossary("element", "Element")}}-Syntax von HTML ist arguably viel einfacher zu verstehen als eine "echte Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **permissiver** als die Art und Weise, wie die meisten Programmiersprachen geparst werden, was sowohl positiv als auch negativ ist.

Aber zuerst, was meinen wir mit permissiv? Nun, im Allgemeinen gibt es beim Programmieren zwei Haupttypen von Fehlern, die Ihnen begegnen können:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die das Programm nicht ausführen lassen, wie der Rust-Fehler, der zuvor gezeigt wurde. Solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten, sind diese normalerweise leicht zu beheben.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, aber der Code nicht das tut, was Sie von ihm erwartet haben, was bedeutet, dass das Programm fehlerhaft läuft. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Quelle des Fehlers führt.

HTML selbst leidet nicht unter Syntaxfehlern, weil Browser es permissiv parsen, was bedeutet, dass die Seite weiterhin angezeigt wird, selbst wenn Syntaxfehler im Quellcode vorhanden sind. Browser haben eingebaute Regeln, wie sie falsch geschriebenes HTML-Markup (oft als **ungültiges** oder **schlecht geformtes** Markup bezeichnet) interpretieren sollen, und ändern es automatisch in ein gültiges Markup.

Zum Beispiel enthält das folgende HTML-Snippet falsch verschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Der schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag sein, ist es aber nicht — er ist danach.

Wenn Sie dieses HTML in einem Browser laden und sich das [gerenderte DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) ansehen, werden Sie sehen, dass die Verschachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das also sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erstellt, aber wie Sie [später sehen werden](#your_turn_studying_html_using_the_dom_inspector), ist dies nicht immer der Fall. Sie erhalten immer _etwas_, das läuft, aber der Browser liegt nicht immer richtig, was Probleme verursachen kann. Es ist besser, gleich von Anfang an korrektes Markup zu schreiben.

> [!NOTE]
> HTML wird permissiv geparst, weil beschlossen wurde, als das Web zuerst erstellt wurde, dass die Veröffentlichung von Inhalten wichtiger war, als sicherzustellen, dass die Syntax absolut korrekt ist. Das Web wäre wahrscheinlich nicht so populär geworden wie es heute ist, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später zeigen wir Ihnen, wie Sie Fehler in HTML mit einem Werkzeug namens [HTML-Validator](#html-validierung) finden können, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** untersuchen und anschließend erkunden, nach welchen Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Den DOM-Inspektor verwenden

Alle modernen Browser haben eine Reihe von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (Devtools) eingebaut, die eine Reihe von Funktionen zum Untersuchen der in der aktuellen Registerkarte geladenen Webseite bereitstellen. Diese können Ihnen zeigen, welches HTML auf der Seite gerendert wird, welches CSS auf jeden DOM-Knoten angewendet wird, welches JavaScript auf der Seite läuft und mehr. Sie ermöglichen es Ihnen auch, den aktuell laufenden Code zu bearbeiten und die Auswirkung live auf der Seite zu sehen.

Sie können die Devtools in jedem Browser auf ähnliche Weise öffnen — sehen Sie [Wie öffnet man die Devtools in Ihrem Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), um zu erfahren, wie es geht.

Für diesen Artikel ist die einzige relevante Devtools-Funktion der **DOM-Inspektor**, der das aktuell gerenderte HTML-DOM anzeigt und es Ihnen ermöglicht, es zu bearbeiten. Schauen wir uns das jetzt an:

1. Öffnen Sie die Devtools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich in jedem Browser an derselben Stelle — der erste Tab in den Devtools am Anfang der Zeile. In Firefox ist er als _Inspector_ gekennzeichnet, während er in Safari, Edge und Chrome als _Elements_ gekennzeichnet ist. Dies sollte der Tab sein, der standardmäßig ausgewählt ist, wenn Sie die Devtools zuerst öffnen, aber wählen Sie ihn aus, wenn dies nicht der Fall ist.
3. Untersuchen Sie die im Tab angezeigte DOM-Baumstruktur und beachten Sie, wie Sie auf die kleinen Erweiterungs-Pfeile am Anfang jedes DOM-Knotens klicken können, um sie zu erweitern und deren Nachfahren-Knoten zu enthüllen. Sie können auch die Aufwärts- und Abwärtspfeiltasten verwenden, um die Knoten zu durchlaufen, und die Recht- und Linkspfeiltasten, um sie zu erweitern und zu reduzieren.
4. Probieren Sie auch das Hovern über die Knoten aus (oder wählen Sie sie mit den Pfeiltasten aus) und beachten Sie, wie das aktuell angehoverte (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können auch das gerenderte DOM bearbeiten. Wir werden die Bearbeitungsfunktionalität in diesem Artikel nicht nutzen, aber nehmen Sie sich etwas Zeit, um nachzuschauen, wie Sie dies tun, wenn Sie neugierig sind.

## Ihr Turn: HTML mit dem DOM-Inspektor studieren

In diesem Abschnitt werden Sie mithilfe des DOM-Inspektors einen Code studieren und sehen, wie der Browser mit gängigen Markup-Fehlern umgeht.

1. Speichern Sie zuerst das folgende HTML-Dateilisting als `debug-example.html` irgendwo auf Ihrem lokalen Rechner. Dieses Demo ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erkunden werden.

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

2. Öffnen Sie es anschließend in einem Browser. Sie sehen etwas wie dies: ![Ein einfaches HTML-Dokument mit dem Titel HTML-Debug-Beispiele und einigen Informationen über häufige HTML-Fehler wie ungeschlossene Elemente, falsch verschachtelte Elemente und ungeschlossene Attribute.](badly-formed-html.png)
3. Dies sieht sofort nicht großartig aus; werfen wir einen Blick auf den Quellcode, um zu sehen, ob wir herausfinden können, warum (nur der Körperinhalt wird angezeigt):

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
   - Die {{htmlelement("p", "Absatz")}}- und {{htmlelement("li", "Listenelement")}}-Elemente haben keine Schlussetiketten. Beim Blick auf das obige Bild scheint dies das Markup-Rendering nicht stark zu beeinträchtigen, da es leicht ist, zu schlussfolgern, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keine Schlussetikette. Das ist etwas problematischer, da es nicht leicht zu erkennen ist, wo das Element enden soll. Tatsächlich wurde der gesamte Rest des Textes fett formatiert.
   - Dieser Abschnitt ist falsch verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist aufgrund des vorherigen Problems nicht leicht zu erkennen, wie dies interpretiert wurde.
   - Dem [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt ein doppelt schließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht gerendert.

5. Lassen Sie uns nun das gerenderte DOM im Gegensatz zum Quellcode untersuchen. Dazu öffnen Sie den DOM-Inspektor Ihres Browsers. Sie sehen eine Darstellung des gerenderten Markups: ![Der HTML-Inspektor in Firefox mit dem Absatz aus unserem Beispiel hervorgehoben, zeigt den Text "What causes errors in HTML?" Hier sehen Sie, dass das Absatz-Element vom Browser geschlossen wurde.](html-inspector.png)
6. Sehen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ das gleiche Ergebnis liefern):
   - Die Absätze und Listenelemente wurden mit Schlussetiketten versehen.
   - Es ist unklar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden separaten Textblock in ein eigenes `<strong>`-Element eingeschlossen, bis zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie folgt korrigiert:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden doppelten Anführungszeichen wurde vollständig gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Sie sehen aus dem obigen Beispiel, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gezeigten ist es einfach, die Zeilen durchzusuchen und die Fehler zu finden, aber was machen Sie bei einem großen, komplexen HTML-Dokument?

Das Werkzeug für diese Aufgabe ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der von der W3C erstellt und gepflegt wird (über die Sie im [Modell der Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) erfahren haben). Der Validator nimmt ein HTML-Dokument als Eingabe, untersucht es und gibt Ihnen einen Bericht darüber, was mit Ihrem HTML falsch ist.

![Die HTML-Validator-Startseite](validator.png)

Zum Angeben des zu validierenden HTML können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt einige HTML-Code eingeben.

## Ein HTML-Dokument validieren

In dieser Aufgabe werden wir Sie dazu bringen, den HTML-Validator auszuprobieren. Sie werden unser [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) validieren und sehen, welche Ergebnisse zurückkommen. Dieses Beispiel enthält das gleiche HTML, das Sie zuvor mit dem DOM-Inspektor untersucht haben.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er noch nicht geöffnet ist.
2. Wechseln Sie zum Tab [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in den großen Textbereich ein, der im Markup Validation Service angezeigt wird.
4. Drücken Sie die _Check_-Taste.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen geben.

![Eine Liste von HTML-Validierungsergebnissen aus dem Markup-Validierungsservice der W3C](validation-results.png)

### Die Fehlermeldungen interpretieren

Die Fehlermeldungen sind normalerweise hilfreich, aber manchmal sind sie nicht so leicht zu verstehen. Mit ein wenig Übung können Sie herausfinden, wie Sie diese interpretieren, um Ihren Code zu korrigieren. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden sehen, dass jede Meldung mit einer Zeilen- und Spaltennummer versehen ist, um Ihnen das Auffinden des Fehlers zu erleichtern.

- "End tag `li` implied, but there were open elements" (2 Instanzen): Diese Meldungen geben an, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag ist impliziert, aber nicht tatsächlich vorhanden. Die Zeilen/Spalten-Informationen weisen auf die erste Zeile nach der Zeile hin, in der das Schlussetikett wirklich sein sollte, aber dies ist ein ausreichender Hinweis, um zu sehen, was falsch ist.
- "Unclosed element `strong`": Das ist leichter zu verstehen — ein {{htmlelement("strong")}}-Element ist ungeschlossen und die Zeilen/Spalten-Informationen weisen genau darauf hin, wo es sich befindet.
- "End tag `strong` violates nesting rules": Dies weist auf die falsch verschachtelten Elemente hin und die Zeilen/Spalten-Informationen zeigen, wo sie sich befinden.
- "End of file reached when inside an attribute value. Ignoring tag": Dies ist eher kryptisch; es bezieht sich auf die Tatsache, dass ein Attributwert irgendwo, möglicherweise gegen Ende der Datei, nicht richtig geformt ist, weil das Dateiende innerhalb des Attributwertes erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte ein guter Hinweis darauf sein, welches Element schuld ist.
- "End of file seen and there were open elements": Dies ist etwas mehrdeutig, bezieht sich aber im Grunde darauf, dass es offene Elemente gibt, die richtig geschlossen werden müssen. Die Zeilennummern weisen auf die letzten Zeilen der Datei und diese Fehlermeldung kommt mit einem Code-Snippet, das ein Beispiel eines offenen Elements aufzeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, weil der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element _korrekt_ geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element aufgrund des fehlenden schließenden Anführungszeichens nicht geschlossen ist.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen darüber. Eine gute Strategie besteht darin, ein paar Fehler auf einmal zu beheben und Ihr HTML nach jedem Satz von Korrekturen zu validieren, um zu sehen, welche Fehler noch vorhanden sind. Manchmal verschwindet durch das Beheben eines früheren Fehlers auch eine Reihe anderer Fehlermeldungen — mehrere Fehler können oft durch ein einzelnes Problem verursacht werden, wie bei einem Dominoeffekt.

Sie werden wissen, dass alle Ihre Fehler behoben sind, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen mitteilt, dass es keine Fehler zu berichten gibt. Zum Zeitpunkt des Schreibens hieß es: "Document checking completed. No errors or warnings to show."

## Zusammenfassung

Das war also eine Einführung in das Debuggen von HTML, die Ihnen einige nützliche Fähigkeiten vermitteln sollte, auf die Sie beim Debuggen von HTML, aber auch von CSS- und JavaScript-Code im weiteren Verlauf des Kurses zählen können. Dies markiert auch das Ende des Moduls _Inhalte mit HTML strukturieren_.

Ihr nächster Schritt ist es, in unserem [CSS Styling Basics](/de/docs/Learn_web_development/Core/Styling_basics)-Modul mit dem Erlernen der Webgestaltung zu beginnen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
