---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was ist, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code ist? Dieser Artikel stellt Ihnen einige Werkzeuge vor, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Wichtiges Hintergrundwissen zum Debuggen von HTML</li>
          <li>Verwendung des DOM-Inspektors in den DevTools Ihres Browsers, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Erforschung von häufigen HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a>, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Beim Schreiben von Code ist alles in Ordnung, bis dieser gefürchtete Moment kommt, in dem ein Fehler auftritt – Sie haben etwas falsch gemacht, sodass Ihr Code entweder gar nicht oder nicht ganz so funktioniert, wie Sie es sich gewünscht haben. Das folgende Beispiel zeigt einen Fehler, der gemeldet wird, wenn versucht wird, ein einfaches Programm zu {{Glossary("compile", "kompilieren")}}, das in der [Rust](https://www.rust-lang.org/)-Sprache geschrieben wurde.

![Ein Konsolenfenster zeigt das Ergebnis eines Kompilierungsversuchs eines Rust-Programms mit einem fehlenden Anführungszeichen um einen String in einer Druckanweisung. Die Fehlermeldung lautet: error: unterminated double quote string.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen – "unterminated double quote string". Wenn Sie sich die Liste ansehen, können Sie wahrscheinlich erkennen, wie `println!(Hello, world!");` möglicherweise ein Anführungszeichen fehlt. Allerdings können Fehlermeldungen schnell komplizierter und schwerer zu interpretieren werden, je größer Programme werden, und selbst einfache Fälle können jemanden, der nichts über Rust weiß, einschüchtern.

Debugging muss jedoch nicht beängstigend sein – der Schlüssel, um sich beim Schreiben und Debuggen jeglichen Codes wohlzufühlen, ist die Vertrautheit mit der Sprache und den zugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird vor dem Parsen nicht in eine andere Form kompiliert (es wird _interpretiert_, nicht _kompiliert_). Und die {{Glossary("element", "Element")}}-Syntax von HTML ist wohl viel einfacher zu verstehen als eine "echte Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **permissiver** als das Parsen der meisten Programmiersprachen, was sowohl gut als auch schlecht ist.

Aber was meinen wir zunächst mit permissiv? Nun, im Allgemeinen gibt es zwei Hauptarten von Fehlern, auf die Sie stoßen werden, wenn Sie im Code etwas falsch machen:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der zuvor gezeigte Rust-Fehler. Diese sind normalerweise einfach zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch ausgeführt wird. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

HTML selbst leidet nicht unter Syntaxfehlern, weil Browser es permissiv parsen, was bedeutet, dass die Seite auch dann noch angezeigt wird, wenn es Syntaxfehler im Quellcode gibt. Browser haben eingebaute Regeln, die festlegen, wie falsch geschriebenes HTML-Markup (oft als **ungültig** oder **schlecht geformt** bezeichnet) interpretiert wird und es automatisch in gültiges Markup umgewandelt wird.

Zum Beispiel enthält der folgende HTML-Ausschnitt falsch geschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, aber das tut es nicht – es steht danach.

Wenn Sie dieses HTML in einen Browser laden und den [gerenderten DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) betrachten, werden Sie feststellen, dass die Schachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erstellt, aber wie Sie [später](#your_turn_studying_html_using_the_dom_inspector) sehen werden, ist das nicht immer der Fall. Sie erhalten immer _etwas_, das läuft, aber der Browser liegt nicht immer richtig, was Probleme verursachen kann. Es ist besser, korrekten Markup von vornherein zu schreiben.

> [!NOTE]
> HTML wird permissiv geparst, weil beim ersten Erstellen des Internets entschieden wurde, dass das Veröffentlichen von Inhalten wichtiger ist, als die Syntax absolut korrekt zu machen. Das Internet wäre wahrscheinlich nicht so populär, wie es heute ist, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später zeigen wir Ihnen, wie Sie Fehler in HTML mit einem Werkzeug namens [HTML-Validator](#html-validierung) finden können, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** inspizieren und dann erkunden, nach welcher Art von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwendung des DOM-Inspektors

Alle modernen Browser verfügen über eine Reihe von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (DevTools), die in sie integriert sind und eine Reihe von Funktionen bieten, um die im aktuellen Tab geladene Webseite zu untersuchen. Sie können Ihnen zeigen, welches HTML in der Seite gerendert wird, welcher CSS auf jeden DOM-Knoten angewendet wird, welcher JavaScript-Code in der Seite läuft und mehr. Sie ermöglichen es Ihnen auch, den aktuell laufenden Code zu bearbeiten und die Auswirkung live auf der Seite zu sehen.

Sie können die DevTools in jedem Browser auf ähnliche Weise öffnen – sehen Sie sich [So öffnen Sie die DevTools in Ihrem Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser) an, um zu lernen, wie das geht.

Für diesen Artikel ist die einzige relevante DevTools-Funktion der **DOM-Inspektor**, der das aktuell gerenderte HTML DOM zeigt und Ihnen erlaubt, es zu bearbeiten. Schauen wir uns das jetzt an:

1. Öffnen Sie die DevTools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich an derselben Stelle in jedem Browser – der erste Tab in den DevTools zu Beginn der Reihe. In Firefox ist er mit _Inspektor_ beschriftet, während er in Safari, Edge und Chrome mit _Elements_ beschriftet ist. Dieser Tab sollte beim ersten Öffnen der DevTools standardmäßig ausgewählt sein, wählen Sie ihn jedoch aus, wenn er es nicht ist.
3. Untersuchen Sie die DOM-Baumstruktur, die im Tab angezeigt wird, und beachten Sie, wie Sie auf die kleinen Erweiterungspfeile am Anfang jedes DOM-Knotens klicken können, um sie zu erweitern und zu schließen und deren Nachkommensknoten anzuzeigen. Sie können auch die Aufwärts- und Abwärtspfeiltasten verwenden, um sich nach oben und unten durch die Knoten zu bewegen, und die Rechts- und Linkspfeiltasten, um die Knoten zu erweitern und zu schließen.
4. Versuchen Sie auch, über die Knoten zu fahren (oder sie mit den Pfeiltasten auszuwählen) und beachten Sie, wie das aktuell überfahrene (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können auch den gerenderten DOM bearbeiten. Wir werden die Bearbeitungsfunktionalität in diesem Artikel nicht verwenden, aber nehmen Sie sich etwas Zeit, um nachzuschlagen, wie das funktioniert, wenn Sie neugierig sind.

## Ihr Part: HTML mit dem DOM-Inspektor studieren

In diesem Abschnitt werden Sie einige Codes mit dem DOM-Inspektor studieren und sehen, wie der Browser mit häufigen Markup-Fehlern umgeht.

1. Speichern Sie zunächst das folgende HTML-Dateilisting als `debug-example.html` auf Ihrem lokalen Computer. Dieses Demo wurde absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erkunden können.

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

2. Öffnen Sie es als Nächstes in einem Browser. Sie werden etwas sehen, das so aussieht: ![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen zu häufigen HTML-Fehlern wie ungeschlossenen Elementen, falsch geschachtelten Elementen und ungeschlossenen Attributen.](badly-formed-html.png)
3. Das sieht sofort nicht gut aus; betrachten wir den Quellcode, um herauszufinden, warum (es wird nur der Inhalt des Body angezeigt):

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
   - Die {{htmlelement("p","paragraph")}}- und {{htmlelement("li","list item")}}-Elemente haben keine schließenden Tags. Wenn man sich das obige Bild ansieht, scheint dies die Markup-Darstellung nicht allzu sehr beeinträchtigt zu haben, da es leicht zu schließen ist, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat kein schließendes Tag. Dies ist etwas problematischer, da es nicht einfach zu sagen ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text in Fettschrift dargestellt.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong emphasized?</strong> what is this?</em>`. Es ist nicht einfach zu erkennen, wie dies interpretiert wurde, aufgrund des vorherigen Problems.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt ein schließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben – der Link wurde überhaupt nicht dargestellt.

5. Lassen Sie uns nun den gerenderten DOM im Gegensatz zum Quellcode untersuchen. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie sehen eine Darstellung des gerenderten Markups: ![Der HTML-Inspektor in Firefox, mit dem Absatz unseres Beispiels hervorgehoben, der den Text "What causes errors in HTML?" zeigt. Hier sehen Sie, dass das p-Element von den Browser geschlossen wurde.](html-inspector.png)
6. Schauen Sie sich an, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ dasselbe Ergebnis liefern):
   - Die Absätze und Listenelemente wurden mit schließenden Tags versehen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, deshalb hat der Browser jeden separaten Textblock in ein eigenes `<strong>`-Element gewickelt, bis zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie folgt korrigiert:

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

Sie können aus dem obigen Beispiel sehen, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gesehenen ist es einfach, die Zeilen durchzusehen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Das Werkzeug dafür ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der vom W3C erstellt und gepflegt wird (von dem Sie im [Webstandards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) mehr erfahren haben). Der Validator nimmt ein HTML-Dokument als Eingabe auf, geht es durch und gibt Ihnen einen Bericht, der Ihnen sagt, was mit Ihrem HTML nicht stimmt.

![Die Startseite des HTML-Validators](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt HTML-Code eingeben.

## Validierung eines HTML-Dokuments

In dieser Aufgabe werden wir Sie den HTML-Validator ausprobieren lassen. Sie werden unser [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) validieren und die zurückgegebenen Ergebnisse ansehen. Dieses Beispiel enthält dasselbe HTML, das Sie zuvor mit dem DOM-Inspektor studiert haben.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er noch nicht geöffnet ist.
2. Wechseln Sie zur [Validate by Direct Input](https://validator.w3.org/#validate_by_input) Registerkarte.
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in das große Textfeld ein, das im Markup Validation Service angezeigt wird.
4. Drücken Sie die _Check_-Taste.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen liefern.

![Eine Liste von HTML-Validierungsergebnissen vom W3C-Markup-Validierungsdienst](validation-results.png)

### Interpretation der Fehlermeldungen

Die Fehlermeldungen sind in der Regel hilfreich, aber manchmal sind sie nicht so einfach zu verstehen. Mit etwas Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu beheben. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden sehen, dass jede Meldung mit einer Zeilen- und Spaltennummer versehen ist, um Ihnen zu helfen, den Fehler leicht zu finden.

- "End tag `li` implied, but there were open elements" (2 Instanzen): Diese Meldungen geben an, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag wird impliziert, ist aber nicht tatsächlich vorhanden. Die Zeilen-/Spalteninformation verweist auf die erste Zeile nach der Zeile, in der das Schließtag wirklich sein sollte, aber dies ist ein guter Hinweis, um zu sehen, was falsch ist.
- "Unclosed element `strong`": Das ist einfacher zu verstehen – ein {{htmlelement("strong")}}-Element ist ungeschlossen, und die Zeilen-/Spalteninformation verweist genau darauf, wo es sich befindet.
- "End tag `strong` violates nesting rules": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen-/Spalteninformation zeigt auf, wo sie sind.
- "End of file reached when inside an attribute value. Ignoring tag": Diese ist etwas kryptisch; sie bezieht sich darauf, dass ein Attributwert irgendwo, möglicherweise nahe dem Ende der Datei, nicht richtig geformt ist, weil das Ende der Datei innerhalb des Attributwertes erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element schuld ist.
- "End of file seen and there were open elements": Dies ist etwas zweideutig, bezieht sich aber im Grunde darauf, dass es offene Elemente gibt, die richtig geschlossen werden müssen. Die Zeilennummern weisen auf die letzten Zeilen der Datei hin, und diese Fehlermeldung kommt mit einer Zeile Code, die ein Beispiel für ein offenes Element anzeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element nicht geschlossen ist, aufgrund des fehlenden schließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen. Eine gute Strategie besteht darin, einige Fehler gleichzeitig zu beheben und dann nach jedem Satz von Korrekturen Ihr HTML erneut zu validieren, um zu sehen, welche Fehler noch übrig sind. Manchmal behebt das Beheben eines früheren Fehlers auch andere Fehlermeldungen – mehrere Fehler können oft durch ein einzelnes Problem in einem Dominoeffekt verursacht werden.

Sie wissen, dass alle Ihre Fehler behoben sind, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen mitteilt, dass es keine Fehler oder Warnungen zu zeigen gibt. Zum Zeitpunkt des Schreibens hieß es: "Document checking completed. No errors or warnings to show."

## Zusammenfassung

Damit haben wir eine Einführung in das Debuggen von HTML, die Ihnen einige nützliche Fähigkeiten vermitteln sollte, auf die Sie beim Debuggen von HTML, aber auch von CSS- und JavaScript-Code später im Kurs zählen können. Dies markiert auch das Ende des Moduls _Strukturieren von Inhalten mit HTML_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
