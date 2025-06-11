---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: edd3befd1905333a3e980ee9f1f1fc1e808e0b00
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was passiert, wenn etwas schiefgeht und Sie nicht herausfinden können, wo der Fehler im Code liegt? Dieser Artikel stellt Ihnen einige Werkzeuge vor, die Ihnen helfen können, Fehler im HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Text-Level-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die wichtigsten Hintergründe zum Debuggen von HTML</li>
          <li>Verwendung des DOM-Inspektors in Ihren Browser-DevTools, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Erkundung häufiger Arten von HTML-Fehlern.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a>, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Debugging ist nicht beängstigend

Beim Schreiben von irgendeiner Art von Code läuft alles gut, bis zu dem gefürchteten Moment, wenn ein Fehler auftritt — Sie haben etwas falsch gemacht, also funktioniert Ihr Code nicht — entweder gar nicht oder nicht ganz so, wie Sie es wollten. Zum Beispiel zeigt das Folgende einen Fehler, der auftritt, wenn versucht wird, ein einfaches Programm in der [Rust](https://www.rust-lang.org/)-Sprache zu {{Glossary("compile", "kompilieren")}}.

![Ein Konsolenfenster, das das Ergebnis des Versuchs zeigt, ein Rust-Programm zu kompilieren, bei dem ein Anführungszeichen um eine Zeichenfolge in einer Druckanweisung fehlt. Die gemeldete Fehlermeldung lautet: Fehler: nicht abgeschlossenes doppeltes Anführungszeichen in Zeichenfolge.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen — "unterbrochene doppelte Anführungszeichen in Zeichenfolge". Wenn Sie das Listing ansehen, können Sie wahrscheinlich sehen, dass `println!(Hello, world!");` logisch ein doppeltes Anführungszeichen fehlen könnte. Allerdings können Fehlermeldungen schnell komplizierter und weniger leicht zu interpretieren werden, je größer die Programme werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, etwas einschüchternd wirken.

Debugging muss jedoch nicht beängstigend sein — der Schlüssel, um sich beim Schreiben und Debuggen von Code wohlzufühlen, ist die Vertrautheit mit der Sprache und den zugehörigen Werkzeugen.

## HTML und Debugging

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird vor dem Parsen nicht in eine andere Form kompilieren (es wird _interpretiert_, nicht _kompiliert_). Und die {{Glossary("element", "Element")}}-Syntax von HTML ist vermutlich viel leichter zu verstehen als eine "echte Programmiersprache" wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **nachsichtiger** als die Art und Weise, wie die meisten Programmiersprachen geparst werden, was sowohl eine gute als auch eine schlechte Sache ist.

Aber was meinen wir eigentlich mit nachsichtig? Nun, im Allgemeinen gibt es zwei Hauptarten von Fehlern, die Sie bei einem Code finden, wenn Sie etwas falsch machen:

- **Syntaxfehler**: Das sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, wie der Rust-Fehler, der zuvor gezeigt wurde. Diese sind in der Regel leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Das sind Fehler, bei denen die Syntax eigentlich korrekt ist, aber der Code nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie auf die Quelle des Fehlers hinweist.

HTML selbst leidet nicht unter Syntaxfehlern, weil Browser es nachgiebig parsen, was bedeutet, dass die Seite immer noch angezeigt wird, selbst wenn es Syntaxfehler im Quellcode gibt. Browser haben integrierte Regeln, um anzugeben, wie sie inkorrekt geschriebenes HTML-Markup (oft als **ungültiges** oder **schlecht geformtes** Markup bezeichnet) interpretieren, und es automatisch in gültiges Markup ändern.

Zum Beispiel enthält das folgende HTML-Snippet falsch verschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag sein, aber es ist nicht — es ist danach.

Wenn Sie dieses HTML in einen Browser laden und dann den [gerenderten DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) betrachten, sehen Sie, dass die Verschachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erstellt, aber wie Sie [später](#your_turn_studying_html_using_the_dom_inspector) sehen werden, ist das nicht immer der Fall. Sie erhalten immer _etwas_, das funktioniert, aber der Browser bekommt es nicht immer richtig hin, was Probleme verursachen kann. Es ist besser, von Anfang an korrektes Markup zu schreiben.

> [!NOTE]
> HTML wird nachsichtig geparst, weil bei der Schaffung des Webs beschlossen wurde, dass die Veröffentlichung von Inhalten wichtiger war, als sicherzustellen, dass die Syntax absolut korrekt ist. Das Web wäre wahrscheinlich nicht so populär wie heute, wenn es von Anfang an strenger gewesen wäre.

Wie findet man also Markup-Fehler? Später zeigen wir Ihnen, wie Sie mit einem Tool namens [HTML-Validator](#html-validierung) Fehler in HTML finden können, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** inspizieren können, und dann, welche Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwendung des DOM-Inspektors

Alle modernen Browser verfügen über einen Satz von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (Devtools), die in sie integriert sind, und bieten eine Reihe von Funktionen zum Untersuchen der Webseite, die in die aktuelle Registerkarte geladen ist. Diese können Ihnen zeigen, welches HTML auf der Seite gerendert wird, welches CSS auf jeden DOM-Knoten angewendet wird, welches JavaScript auf der Seite ausgeführt wird und mehr. Sie ermöglichen es Ihnen auch, den aktuell laufenden Code zu bearbeiten und die Wirkung live auf der Seite zu sehen.

Sie können die Devtools auf ähnliche Weise in jedem Browser öffnen — siehe [How to open the devtools in your browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), um zu erfahren, wie das geht.

Für diesen Artikel ist die einzige relevante Devtools-Funktion der **DOM-Inspektor**, der das aktuell gerenderte HTML-DOM anzeigt und es Ihnen ermöglicht, es zu bearbeiten. Schauen wir uns das jetzt an:

1. Öffnen Sie die Devtools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich an derselben Stelle in jedem Browser — die erste Registerkarte in den Devtools am Anfang der Reihe. In Firefox ist es mit _Inspector_ beschriftet, während es in Safari, Edge und Chrome mit _Elements_ beschriftet ist. Dies sollte die Registerkarte sein, die standardmäßig ausgewählt wird, wenn Sie die Devtools zuerst öffnen, aber wählen Sie sie aus, wenn sie es nicht ist.
3. Untersuchen Sie die DOM-Baumstruktur, die in der Registerkarte angezeigt wird, und beachten Sie, wie Sie auf die kleinen Erweiterungspfeile am Anfang jedes DOM-Knotens klicken können, um sie zu erweitern und ihre Nachfahrenknoten anzuzeigen. Sie können auch die Aufwärts- und Abwärtspfeiltasten verwenden, um nach oben und unten durch die Knoten zu navigieren, und die rechte und linke Pfeiltaste, um die Knoten zu erweitern und zu reduzieren.
4. Versuchen Sie auch, über die Knoten zu fahren (oder sie mit den Pfeiltasten auszuwählen) und beachten Sie, wie das aktuell markierte (oder ausgewählte) Element im Viewport hervorgehoben ist.
5. Sie können auch den gerenderten DOM bearbeiten. Wir werden die Bearbeitungsfunktion in diesem Artikel nicht verwenden, aber nehmen Sie sich etwas Zeit, um nachzuschlagen, wie das geht, wenn Sie interessiert sind.

## Ihre Aufgabe: Studium von HTML mit dem DOM-Inspektor

In diesem Abschnitt werden Sie ein wenig Code using the DOM-Inspektor untersuchen und sehen, wie der Browser mit gängigen Markup-Fehlern umgeht.

1. Speichern Sie zunächst die folgende HTML-Datei als `debug-example.html` irgendwo auf Ihrem lokalen Computer. Diese Demo ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erkunden können.

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

2. Öffnen Sie sie anschließend in einem Browser. Sie werden etwas wie dieses sehen:![Ein einfaches HTML-Dokument mit dem Titel HTML Debugging Beispiele und einigen Informationen über häufige HTML-Fehler wie unverfügbare Elemente, schlecht verschachtelte Elemente und nicht geschlossene Attribute. ](badly-formed-html.png)
3. Das sieht sofort nicht gut aus; lassen Sie uns den Quellcode betrachten, um zu sehen, ob wir herausfinden können, warum (nur der Inhalt des Bodys wird gezeigt):

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

   - Die {{htmlelement("p","paragraph")}}- und {{htmlelement("li","list item")}}-Elemente haben keine Schlusstags. Beim Blick auf das oben gezeigte Bild scheint dies nicht allzu stark die Darstellung des Markup beeinträchtigt zu haben, da leicht zu erkennen ist, wo ein Element enden und ein anderes beginnen soll.
   - Das erste {{htmlelement("strong")}}-Element hat kein Schlusstag. Dies ist problematischer, da nicht leicht zu erkennen ist, wo das Element enden soll. Tatsächlich wurde der ganze Rest des Textes fett formatiert dargestellt.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>fett <em>fett betont?</strong> was ist das?</em>`. Es ist aufgrund des vorherigen Problems nicht leicht zu erkennen, wie dies interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt ein schließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben — der Link wurde überhaupt nicht gerendert.

5. Lassen Sie uns nun den gerenderten DOM im Gegensatz zum Quellcode untersuchen. Um dies zu tun, öffnen Sie den DOM-Inspektor Ihres Browsers. Sie werden eine Darstellung des gerenderten Markups sehen: ![Der HTML-Inspektor in Firefox, mit ausgewähltem Absatz unseres Beispiels, zeigt den Text "What causes errors in HTML?" Hier können Sie sehen, dass das Absatz-Element vom Browser geschlossen wurde.](html-inspector.png)
6. Sehen Sie sich an, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ dasselbe Ergebnis liefern):

   - Die Absätze und Listenelemente haben Schlusstag hinzugefügt bekommen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jeden separaten Textblock in sein eigenes `<strong>`-Element gewickelt, ganz bis zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie hier gezeigt behoben:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Anführungszeichen wurde vollständig gelöscht. Das letzte Listenelement sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Sie können aus dem obigen Beispiel sehen, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gesehenen ist es einfach, durch die Zeilen zu suchen und die Fehler zu finden, aber was ist, wenn es sich um ein riesiges, komplexes HTML-Dokument handelt?

Das Werkzeug dafür ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der vom W3C erstellt und gepflegt wird (das Sie im [Webstandardsmodell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) kennengelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, um Ihnen zu sagen, was an Ihrem HTML nicht stimmt.

![Die Startseite des HTML-Validators](validator.png)

Um das HTML zu spezifizieren, das validiert werden soll, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt HTML-Code eingeben.

## Validieren eines HTML-Dokuments

In dieser Aufgabe lassen wir Sie den HTML-Validator ausprobieren. Sie validieren unser [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) und sehen, welche Ergebnisse zurückgegeben werden. Dieses Beispiel enthält das gleiche HTML, das Sie zuvor mit dem DOM-Inspektor untersucht haben.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls er nicht bereits geöffnet ist.
2. Wechseln Sie zur [Tab-Validierung per Direkt-Eingabe](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in das große Textfeld des Markup Validation Service ein.
4. Drücken Sie die _Prüfen_-Taste.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen liefern.

![Eine Liste von HTML-Validierungsergebnissen aus dem W3C-Markup-Validierungsdienst](validation-results.png)

### Die Fehlermeldungen interpretieren

Die Fehlermeldungen sind normalerweise hilfreich, manchmal sind sie jedoch nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu beheben. Lassen Sie uns die Fehlermeldungen durchgehen und sehen, was sie bedeuten. Sie werden sehen, dass jede Meldung mit einer Zeilen- und Spaltennummer versehen ist, die Ihnen hilft, den Fehler leicht zu lokalisieren.

- "End tag `li` implied, but there were open elements" (2 Instanzen): Diese Meldungen zeigen an, dass ein Element geöffnet ist, das geschlossen werden sollte. Das End-Tag ist impliziert, aber nicht wirklich vorhanden. Die Zeilen/Spalten-Informationen verweisen auf die erste Zeile nach der Zeile, in der das Schlusstag wirklich sein sollte, aber dies ist ein guter Hinweis darauf, was falsch ist.
- "Unclosed element `strong`": Dies ist leichter zu verstehen — ein {{htmlelement("strong")}}-Element ist nicht geschlossen, und die Zeilen-/Spalten-Informationen zeigen genau auf, wo es sich befindet.
- "End tag `strong` violates nesting rules": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen-/Spalten-Informationen markieren, wo sie sich befinden.
- "End of file reached when inside an attribute value. Ignoring tag": Diese ist etwas kryptisch; sie bezieht sich auf den Umstand, dass ein Attributwert nicht ordnungsgemäß formatiert ist, möglicherweise nahe dem Ende der Datei, da das Ende der Datei innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte Ihnen einen guten Hinweis geben, welches Element nicht richtig ist.
- "End of file seen and there were open elements": Dies ist etwas zweideutig, bezieht sich aber im Grunde genommen darauf, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern verweisen auf die letzten Zeilen der Datei, und diese Fehlermeldung wird mit einer Codezeile angezeigt, die ein Beispiel für ein offenes Element zeigt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut ohne abschließendes Anführungszeichen kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element aufgrund des fehlenden abschließenden Anführungszeichens nicht geschlossen ist.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen. Eine gute Strategie ist es, einige Fehler auf einmal zu beheben und dann Ihr HTML nach jedem Satz von Korrekturen erneut zu validieren, um zu sehen, welche Fehler noch übrig sind. Manchmal wird beim Beheben eines früheren Fehlers auch andere Fehlermeldungen beseitigt — mehrere Fehler können oft durch ein einziges Problem verursacht werden, das einen Dominoeffekt verursacht.

Sie wissen, dass alle Fehler behoben sind, wenn Sie ein kleines grünes Banner sehen, das Ihnen mitteilt, dass es keine Fehler zu berichten gibt. Zum Zeitpunkt des Schreibens stand dort: "Dokumentenprüfung abgeschlossen. Keine Fehler oder Warnungen zu zeigen."

## Zusammenfassung

Das war also ein Einstieg in das Debuggen von HTML, der Ihnen einige nützliche Fähigkeiten vermitteln sollte, auf die Sie beim Debuggen von HTML aber auch CSS- und JavaScript-Code im späteren Verlauf des Kurses zurückgreifen können. Dies markiert auch das Ende des Moduls _Strukturierung von Inhalten mit HTML_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
