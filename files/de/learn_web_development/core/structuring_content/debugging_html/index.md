---
title: Debugging HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was, wenn etwas schiefgeht und Sie den Fehler im Code nicht finden können? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen dabei helfen können, Fehler in HTML zu finden und zu beheben.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantik auf Textniveau wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die wesentlichen Grundlagen zur Fehlersuche in HTML</li>
          <li>Verwendung des DOM-Inspektors in den Entwicklerwerkzeugen Ihres Browsers, um sich tiefer in Ihren HTML-Code zu vertiefen.</li>
          <li>Erforschung häufiger HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a>, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlersuche ist nicht angsteinflößend

Beim Schreiben irgendeines Codes ist alles in Ordnung, bis zu diesem gefürchteten Moment, wenn ein Fehler auftritt – Sie haben etwas falsch gemacht, sodass Ihr Code entweder gar nicht funktioniert oder nicht ganz so, wie Sie es sich vorgestellt hatten. Zum Beispiel zeigt das Folgende einen Fehler, der auftritt, wenn versucht wird, ein einfaches Programm in der Sprache [Rust](https://rust-lang.org/) zu {{Glossary("compile", "kompilieren")}}.

![Ein Konsolenfenster zeigt das Ergebnis des Versuchs, ein Rust-Programm mit einem fehlenden Anführungszeichen um eine Zeichenkette in einer Print-Anweisung zu kompilieren. Die Fehlermeldung lautet: Fehler: nicht abgeschlossenes Anführungszeichen in Zeichenkette.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen – "nicht abgeschlossenes Anführungszeichen in Zeichenkette". Wenn Sie sich die Liste ansehen, können Sie wahrscheinlich sehen, dass `println!(Hello, world!");` logisch ein schließendes Anführungszeichen fehlen könnte. Allerdings können Fehlermeldungen schnell komplizierter werden und schwieriger zu interpretieren sein, je größer Programme werden, und sogar einfache Fälle können ein wenig einschüchternd wirken für jemanden, der nichts über Rust weiß.

Fehlersuche muss jedoch nicht angsteinflößend sein – der Schlüssel zur Gelassenheit beim Schreiben und Debuggen von Code liegt in der Vertrautheit mit der Sprache und den zugehörigen Werkzeugen.

## HTML und Fehlersuche

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird nicht vor dem Parsen in eine andere Form kompiliert (es wird _interpretiert_, nicht _kompiliert_). Und die {{Glossary("element", "Element")}}-Syntax von HTML ist arguably viel einfacher zu verstehen als eine "echte Programmiersprache” wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **nachsichtiger** als wie die meisten Programmiersprachen geparst werden, was sowohl gut als auch schlecht ist.

Aber was bedeutet "nachsichtig"? Generell gibt es, wenn Sie etwas im Code falsch machen, zwei Hauptfehlerarten, auf die Sie stoßen werden:

- **Syntaxfehler**: Das sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht ausgeführt wird, ähnlich dem Rust-Fehler, der früher gezeigt wurde. Diese lassen sich in der Regel leicht beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Das sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Quelle des Fehlers führt.

HTML selbst leidet nicht unter Syntaxfehlern, da Browser es nachsichtig parsen, was bedeutet, dass die Seite immer noch angezeigt wird, auch wenn es Syntaxfehler im Quellcode gibt. Browser haben eingebaute Regeln, die festlegen, wie falsch geschriebene HTML-Markup zu interpretieren ist (oft als **ungültiges** oder **schlecht-geformtes** Markup bezeichnet), und ändern es automatisch in ein gültiges Markup.

Zum Beispiel enthält das folgende HTML-Snippet falsch verschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Das schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, aber das ist nicht der Fall – es steht danach.

Wenn Sie dieses HTML in einen Browser laden und sich das [gerenderte DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) ansehen, werden Sie sehen, dass die Verschachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das gut und schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis geschaffen, aber wie Sie [später](#your_turn_studying_html_using_the_dom_inspector) sehen werden, ist das nicht immer der Fall. Sie erhalten immer _etwas_, das läuft, aber der Browser liegt nicht immer richtig, was zu Problemen führen kann. Es ist besser, von vornherein korrektes Markup zu schreiben.

> [!NOTE]
> HTML wird nachsichtig geparst, weil, als das Web zuerst erstellt wurde, entschieden wurde, dass es wichtiger ist, Inhalte zu veröffentlichen, als darauf zu achten, dass die Syntax absolut korrekt ist. Das Web wäre wahrscheinlich nicht so populär, wie es heute ist, wäre es von Anfang an strikter gewesen.

Wie finden Sie also Markup-Fehler? Später zeigen wir Ihnen, wie Sie Fehler in HTML mit einem Tool namens [HTML-Validator](#html-validierung) finden, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** inspizieren können, und dann erkunden wir, welche Arten von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwendung des DOM-Inspektors

Alle modernen Browser haben eine Reihe von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (Devtools) eingebaut, die eine Reihe von Funktionen zum Untersuchen der Webseite bieten, die im aktuellen Tab geladen ist. Diese können Ihnen zeigen, welches HTML im Dokument gerendert wird, welches CSS auf jede DOM-Knoten angewendet wird, welcher JavaScript-Code auf der Seite läuft, und mehr. Sie erlauben Ihnen auch, den gerade laufenden Code zu bearbeiten und die Auswirkungen live auf der Seite zu sehen.

Sie können die Devtools in jedem Browser auf ähnliche Weise öffnen – sehen Sie sich [Wie Sie die Devtools in Ihrem Browser öffnen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser) an, um zu erfahren, wie.

Für diesen Artikel ist die einzige relevante Devtools-Funktion der **DOM-Inspektor**, der das derzeit gerenderte HTML-DOM anzeigt und es Ihnen ermöglicht, es zu bearbeiten. Schauen wir uns das nun an:

1. Öffnen Sie die Devtools in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich an der gleichen Stelle in jedem Browser – der erste Tab in den Devtools am Anfang der Reihe. In Firefox ist er mit _Inspektor_ beschriftet, in Safari, Edge und Chrome mit _Elements_. Dies sollte der Tab sein, der standardmäßig ausgewählt wird, wenn Sie die Devtools zum ersten Mal öffnen, wählen Sie ihn aus, wenn dies nicht der Fall ist.
3. Untersuchen Sie die Struktur des DOM-Baums, die im Tab angezeigt wird, und achten Sie darauf, wie Sie auf die kleinen Erweiterungspfeile am Anfang jedes DOM-Knotens klicken können, um sie zu erweitern und ihre Nachkommensknoten sichtbar zu machen. Sie können auch die Pfeiltasten nach oben und unten verwenden, um sich in den Knoten zu bewegen, und die Pfeiltasten nach rechts und links, um die Knoten zu erweitern und zu reduzieren.
4. Versuchen Sie auch, über die Knoten zu schweben (oder sie mit den Pfeiltasten auszuwählen) und beachten Sie, wie das momentan gehoverte (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können auch das gerenderte DOM bearbeiten. Wir werden die Bearbeitungsfunktionen in diesem Artikel nicht verwenden, aber nehmen Sie sich etwas Zeit, um nachzuschauen, wie das funktioniert, wenn Sie neugierig sind.

## Ihr Part: Untersuchen eines HTML-Dokuments mit dem DOM-Inspektor

In diesem Abschnitt werden Sie einige Codes mit dem DOM-Inspektor untersuchen und sehen, wie der Browser häufige Markup-Fehler behandelt.

1. Speichern Sie zuerst den folgenden HTML-Dateieintrag unter dem Namen `debug-example.html` an einem Ort auf Ihrem lokalen Rechner. Diese Demo ist absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erkunden werden.

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

2. Öffnen Sie es dann in einem Browser. Sie werden etwas wie folgt sehen:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen über häufigen HTML-Fehler wie ungeschlossene Elemente, schlecht verschachtelte Elemente und ungeschlossene Attribute.](badly-formed-html.png)
3. Dies sieht sofort nicht besonders gut aus; schauen wir uns den Quellcode an, um zu sehen, ob wir herausfinden können, warum (nur der Inhalt des Bodies wird gezeigt):

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

4. Schauen wir uns die Probleme an:
   - Die {{htmlelement("p","Paragraph")}} und {{htmlelement("li","Listenelemente")}} haben keine schließenden Tags. Beim Blick auf das obige Bild scheint dies die Markup-Darstellung nicht allzu stark beeinträchtigt zu haben, da es einfach ist, zu erkennen, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat kein schließendes Tag. Dies ist etwas problematischer, da es nicht einfach ist zu bestimmen, wo das Element enden sollte. Tatsächlich wurde der gesamte restliche Text fett gerendert.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>strong <em>strong betont?</strong> was ist das?</em>`. Aufgrund des vorherigen Problems ist es nicht einfach zu sagen, wie dies interpretiert wurde.
   - Der [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attributwert fehlt ein schließendes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben – der Link wurde überhaupt nicht gerendert.

5. Untersuchen wir nun das gerenderte DOM im Gegensatz zu dem Quellcode. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie sehen eine Darstellung des gerenderten Markups: ![Der HTML-Inspektor in Firefox mit dem markierten Paragraphen unseres Beispiels, der den Text "What causes errors in HTML?" zeigt. Hier können Sie sehen, dass das Absatz-Element vom Browser geschlossen wurde.](html-inspector.png)
6. Schauen Sie sich an, wie der Browser unsere HTML-Fehler zu korrigieren versucht hat (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ das gleiche Ergebnis liefern):
   - Die Absätze und Listenelemente haben schließende Tags bekommen.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden sollte, daher hat der Browser jedes separate Textfragment in ein eigenes `<strong>`-Element gewickelt, bis zum Ende des Dokuments!
   - Die falsche Verschachtelung wurde vom Browser wie folgt korrigiert:

     ```html
     <strong>
       strong
       <em>strong emphasized?</em>
     </strong>
     <em> what is this?</em>
     ```

   - Der Link mit dem fehlenden Anführungszeichen wurde komplett gelöscht. Der letzte Listeneintrag sieht so aus:

     ```html
     <li>
       <strong>
         Unclosed attributes: Another common source of HTML problems. Let's look
         at an example:
       </strong>
     </li>
     ```

## HTML-Validierung

Sie können aus dem obigen Beispiel sehen, dass Sie wirklich sicherstellen möchten, dass Ihr HTML gut geformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gezeigten ist es einfach, die Zeilen zu durchsuchen und die Fehler zu finden, aber was ist mit einem riesigen, komplexen HTML-Dokument?

Das Werkzeug für diese Aufgabe ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der vom W3C erstellt und gepflegt wird (was Sie im [Webstandards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) kennengelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, um Ihnen mitzuteilen, was mit Ihrem HTML falsch ist.

![Die Homepage des HTML-Validators](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse angeben, eine HTML-Datei hochladen oder direkt etwas HTML-Code eingeben.

## Validierung eines HTML-Dokuments

In dieser Aufgabe werden Sie den HTML-Validator ausprobieren. Sie werden unser [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html) validieren und sehen, welche Ergebnisse zurückgegeben werden. Dieses Beispiel enthält das gleiche HTML, das Sie zuvor mit dem DOM-Inspektor untersucht haben.

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls dieser nicht bereits geöffnet ist.
2. Wechseln Sie zur [Validieren durch Direkteingabe](https://validator.w3.org/#validate_by_input)-Registerkarte.
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Body) und fügen Sie ihn in den großen Textbereich des Markup Validation Service ein.
4. Drücken Sie die _Check_-Schaltfläche.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen liefern.

![Eine Liste von HTML-Validierungsergebnissen vom W3C-Markup-Validierungsdienst](validation-results.png)

### Interpretation der Fehlermeldungen

Die Fehlermeldungen sind in der Regel hilfreich, aber manchmal sind sie nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu korrigieren. Gehen wir die Fehlermeldungen durch und sehen, was sie bedeuten. Sie werden sehen, dass jede Nachricht mit einer Zeilen- und Spaltennummer versehen ist, um Ihnen zu helfen, den Fehler leicht zu lokalisieren.

- "End tag `li` implied, but there were open elements" (2 Instanzen): Diese Meldungen zeigen an, dass ein Element geöffnet ist, das geschlossen werden sollte. Der End-Tag ist impliziert, aber nicht tatsächlich vorhanden. Die Zeilen-/Spalteninformationen zeigen auf die erste Zeile nach der Zeile, in der der schließende Tag wirklich sein sollte, aber dies ist ein guter Anhaltspunkt, um zu sehen, was falsch ist.
- "Unclosed element `strong`": Dies ist einfacher zu verstehen – ein {{htmlelement("strong")}}-Element ist ungeschlossen, und die Zeilen-/Spalteninformationen verweisen direkt darauf, wo es ist.
- "End tag `strong` violates nesting rules": Dies weist auf die falsch verschachtelten Elemente hin, und die Zeilen-/Spalteninformationen zeigen, wo sie sich befinden.
- "End of file reached when inside an attribute value. Ignoring tag": Dies ist ziemlich kryptisch; es bezieht sich auf die Tatsache, dass ein Attributwert an einer Stelle nicht richtig geformt ist, möglicherweise nahe am Ende der Datei, da das Ende der Datei innerhalb des Attributwerts erscheint. Der Umstand, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element Schuld hat.
- "End of file seen and there were open elements": Dies ist etwas zweideutig, aber im Wesentlichen bezieht es sich darauf, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Liniennummern verweisen auf die letzten Zeilen der Datei, und diese Fehlermeldung wird mit einer Codezeile versehen, die auf ein Beispiel für ein offenes Element hinweist:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- "Unclosed element `ul`": Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element nicht geschlossen ist, aufgrund des fehlenden schließenden Anführungszeichens.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen. Eine gute Strategie ist es, ein paar Fehler gleichzeitig zu beheben und dann Ihr HTML nach jedem Satz von Korrekturen erneut zu validieren, um zu sehen, welche Fehler noch vorhanden sind. Manchmal wird durch das Beheben eines früheren Fehlers auch andere Fehlermeldungen beseitigt – mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, dass alle Ihre Fehler behoben sind, wenn Sie ein schönes grünes Banner sehen, das Ihnen mitteilt, dass keine Fehler gemeldet werden. Zum Zeitpunkt des Schreibens hieß es: "Dokumentenüberprüfung abgeschlossen. Keine Fehler oder Warnungen anzuzeigen."

## Zusammenfassung

Hier haben wir es also, eine Einführung in die Fehlersuche in HTML, die Ihnen ein paar nützliche Fähigkeiten geben sollte, auf die Sie beim Debuggen von HTML, aber auch von CSS und JavaScript-Code später im Kurs zählen können. Dies markiert auch das Ende des Moduls _Strukturierung von Inhalten mit HTML_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
