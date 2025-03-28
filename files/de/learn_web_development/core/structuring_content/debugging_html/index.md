---
title: Fehlersuche in HTML
slug: Learn_web_development/Core/Structuring_content/Debugging_HTML
l10n:
  sourceCommit: 39903bca97a6426f49b50015352e9bcb9873484a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}

HTML zu schreiben ist in Ordnung, aber was tun, wenn etwas schiefgeht und Sie den Fehler im Code nicht ausfindig machen können? Dieser Artikel wird Ihnen einige Werkzeuge vorstellen, die Ihnen helfen können, Fehler in HTML zu finden und zu beheben.

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
          <li>Der wesentliche Hintergrund zur Fehlersuche in HTML</li>
          <li>Verwendung des DOM-Inspektors in den Entwicklerwerkzeugen Ihres Browsers, um tiefer in Ihren HTML-Code einzutauchen.</li>
          <li>Erkundung häufiger HTML-Fehlertypen.</li>
          <li>Verwendung des <a href="https://validator.w3.org/">HTML-Validators</a>, um HTML-Fehler zu erkennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlersuche ist nicht beängstigend

Wenn Sie irgendeine Art von Code schreiben, ist alles in Ordnung, bis zu dem gefürchteten Moment, in dem ein Fehler auftritt – Sie haben etwas falsch gemacht, sodass Ihr Code nicht funktioniert – entweder gar nicht oder nicht so, wie Sie es wollten. Zum Beispiel zeigt das Folgende einen Fehler, der beim Versuch auftritt, ein einfaches Programm zu {{Glossary("compile", "kompilieren")}}, das in der Programmiersprache [Rust](https://www.rust-lang.org/) geschrieben wurde.

![Ein Konsolenfenster, das das Ergebnis eines Kompilierungsversuchs eines Rust-Programms mit einem fehlenden Anführungszeichen um einen String in einer print-Anweisung zeigt. Die gemeldete Fehlermeldung lautet: Fehler: nicht abgeschlossenes doppeltes Anführungszeichen im String.](error-message.png)

Hier ist die Fehlermeldung relativ leicht zu verstehen – „nicht abgeschlossenes doppeltes Anführungszeichen im String“. Wenn Sie sich die Auflistung ansehen, können Sie wahrscheinlich erkennen, dass `println!(Hello, world!");` logischerweise ein doppeltes Anführungszeichen fehlt. Fehlermeldungen können jedoch schnell komplizierter und weniger leicht zu interpretieren werden, je größer Programme werden, und selbst einfache Fälle können für jemanden, der nichts über Rust weiß, ein wenig einschüchternd wirken.

Fehlersuche muss jedoch nicht beängstigend sein – der Schlüssel zur Sicherheit beim Schreiben und Debuggen von Code liegt in der Vertrautheit mit sowohl der Sprache als auch den zugehörigen Werkzeugen.

## HTML und Fehlersuche

HTML ist nicht so kompliziert zu verstehen wie Rust. HTML wird vor dem Parsen nicht in eine andere Form kompiliert (es wird _interpretiert_, nicht _kompiliert_). Und die Syntax von HTML-{{Glossary("element", "Elementen")}} ist wohl viel einfacher zu verstehen als eine „echte Programmiersprache“ wie Rust, {{Glossary("JavaScript", "JavaScript")}} oder {{Glossary("Python", "Python")}}.

Die Art und Weise, wie Browser HTML parsen, ist viel **freizügiger** als bei den meisten Programmiersprachen, was sowohl gut als auch schlecht ist.

Aber zuerst, was meinen wir mit freizügig? Nun, im Allgemeinen, wenn Sie etwas falsch im Code machen, gibt es zwei Hauptfehlerarten, auf die Sie treffen werden:

- **Syntaxfehler**: Dies sind Tippfehler in Ihrem Code, die dazu führen, dass das Programm nicht läuft, wie der zuvor gezeigte Rust-Fehler. Diese sind normalerweise leicht zu beheben, solange Sie mit der Syntax der Sprache vertraut sind und wissen, was die Fehlermeldungen bedeuten.
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm falsch läuft. Diese sind oft schwerer zu beheben als Syntaxfehler, da es keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

HTML selbst leidet nicht unter Syntaxfehlern, weil Browser es freizügig parsen, was bedeutet, dass die Seite immer noch angezeigt wird, selbst wenn es Syntaxfehler im Quellcode gibt. Browser haben eingebaute Regeln, um festzulegen, wie falsch geschriebenes HTML-Markup (oft als **ungültiges** oder **schlecht geformtes** Markup bezeichnet) interpretiert werden soll, indem es automatisch zu einem gültigen Markup geändert wird.

Zum Beispiel enthält das folgende HTML-Snippet falsch verschachtelte Elemente:

```html example-bad
<p>I didn't expect to find the <em>next-door neighbor's <strong>cat</em></strong> here!</p>
```

Der schließende `</strong>`-Tag sollte vor dem schließenden `</em>`-Tag stehen, tut es aber nicht – er steht dahinter.

Wenn Sie dieses HTML in einen Browser laden und dann den [gerenderten DOM](/de/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites#handling_html) betrachten, werden Sie sehen, dass die Verschachtelung vom Browser korrigiert wurde:

```html example-good
<p>
  I didn't expect to find the
  <em>next-door neighbor's <strong>cat</strong></em> here!
</p>
```

Warum ist das also sowohl gut als auch schlecht? Nun, in diesem Fall hat der Browser das beabsichtigte Ergebnis erzeugt, aber wie Sie [später](#active_learning_studying_html_using_the_dom_inspector) sehen werden, ist das nicht immer der Fall. Sie werden immer _irgendetwas_ zum Laufen bekommen, aber der Browser hat nicht immer recht, was Probleme verursachen kann. Es ist besser, gleich von Anfang an korrektes Markup zu schreiben.

> [!NOTE]
> HTML wird freizügig geparst, weil bei der Entstehung des Webs entschieden wurde, dass es wichtiger ist, Inhalte zu veröffentlichen, als dafür zu sorgen, dass die Syntax absolut korrekt ist. Das Web wäre wahrscheinlich nicht so beliebt, wie es heute ist, wenn es von Anfang an strenger gewesen wäre.

Wie finden Sie also Markup-Fehler? Später werden wir Ihnen zeigen, wie Sie mit einem Werkzeug namens [HTML-Validator](#html-validierung) HTML-Fehler finden können, aber zuerst zeigen wir Ihnen, wie Sie Ihr HTML manuell mit einem **DOM-Inspektor** überprüfen können, und dann erkunden wir, welche Art von Markup-Fehlern Sie suchen könnten und wie der Browser diese interpretieren könnte.

## Verwendung eines DOM-Inspektors

Alle modernen Browser verfügen über eine Reihe von [Entwicklerwerkzeugen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) (devtools), die in sie eingebaut sind und eine Reihe von Funktionen zum Untersuchen der im aktuellen Tab geladenen Webseite bieten. Diese zeigen Ihnen, welchen HTML-Code die Seite rendert, welche CSS-Anwendung auf jeden DOM-Knoten erfolgt, welches JavaScript auf der Seite läuft und mehr. Sie ermöglichen es Ihnen auch, den aktuell laufenden Code zu bearbeiten und die Auswirkungen live auf der Seite zu sehen.

Sie können die Entwicklerwerkzeuge in jedem Browser auf ähnliche Weise öffnen – siehe [Wie Sie die Entwicklerwerkzeuge in Ihrem Browser öffnen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser), um zu erfahren, wie.

Für diesen Artikel ist die einzige relevante Entwicklerwerkzeugfunktion der **DOM-Inspektor**, der den aktuell gerenderten HTML-DOM anzeigt und Ihnen dessen Bearbeitung ermöglicht. Schauen wir uns das jetzt an:

1. Öffnen Sie die Entwicklerwerkzeuge in Ihrem Browser.
2. Öffnen Sie den DOM-Inspektor. Er befindet sich in jedem Browser an derselben Stelle – dem ersten Tab in den Entwicklerwerkzeugen am Anfang der Zeile. In Firefox ist er als _Inspector_ gekennzeichnet, während er in Safari, Edge und Chrome als _Elements_ bezeichnet wird. Dies sollte die Registerkarte sein, die standardmäßig ausgewählt ist, wenn Sie die Entwicklerwerkzeuge zum ersten Mal öffnen, aber wählen Sie sie aus, wenn sie nicht ausgewählt ist.
3. Untersuchen Sie die im Tab angezeigte DOM-Baumstruktur und beachten Sie, wie Sie die kleinen Erweiterungspfeile am Anfang jedes DOM-Knotens anklicken können, um sie zu erweitern und zu reduzieren und deren untergeordnete Knoten sichtbar zu machen. Sie können auch die Pfeiltasten nach oben und unten verwenden, um sich auf den Knoten nach oben und unten zu bewegen, und die Pfeiltasten nach rechts und links, um die Knoten zu erweitern und zu reduzieren.
4. Versuchen Sie auch, über die Knoten zu schweben (oder sie mit den Pfeiltasten auszuwählen), und beachten Sie, wie das aktuell schwebende (oder ausgewählte) Element im Ansichtsfenster hervorgehoben wird.
5. Sie können auch den gerenderten DOM bearbeiten. Wir werden die Bearbeitungsfunktionalität in diesem Artikel nicht verwenden, aber nehmen Sie sich etwas Zeit, um nachzuschlagen, wie dies funktioniert, wenn Sie neugierig sind.

## Aktives Lernen: Untersuchung von HTML mit Hilfe des DOM-Inspektors

Es ist Zeit, einige HTML-Codes mithilfe des DOM-Inspektors zu untersuchen und zu sehen, wie der Browser mit häufigen Markup-Fehlern umgeht.

1. Speichern Sie zunächst das folgende HTML-Dateilisting unter dem Namen `debug-example.html` irgendwo auf Ihrem lokalen Rechner. Dieses Demo wurde absichtlich mit einigen eingebauten Fehlern geschrieben, die wir erkunden werden.

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
         <li>Badly nested elements: Nesting elements properly is also very important for code behaving correctly. <strong>strong <em>strong emphasised?</strong> what is this?</em>
         <li>Unclosed attributes: Another common source of HTML problems. Let's look at an example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a>
       </ul>
     </body>
   </html>
   ```

2. Öffnen Sie es anschließend in einem Browser. Sie werden etwas Ähnliches sehen:![Ein einfaches HTML-Dokument mit dem Titel HTML-Debugging-Beispiele und einigen Informationen zu häufigen HTML-Fehlern wie nicht geschlossenen Elementen, schlecht verschachtelten Elementen und nicht geschlossenen Attributen.](badly-formed-html.png)
3. Das sieht unmittelbar nicht gut aus; schauen wir uns den Quellcode an, um zu sehen, ob wir herausfinden können, warum (nur der Inhalt des Bodys wird gezeigt):

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

   - Die {{htmlelement("p","Absatz")}}- und {{htmlelement("li","Listenelement")}}-Elemente haben keine schließenden Tags. Beim obigen Bild scheint sich dies nicht allzu sehr auf das Markuprendering ausgewirkt zu haben, da es einfach ist, zu erkennen, wo ein Element enden und ein anderes beginnen sollte.
   - Das erste {{htmlelement("strong")}}-Element hat keinen schließenden Tag. Dies ist etwas problematischer, da nicht leicht zu erkennen ist, wo das Element enden soll. Tatsächlich wurde der gesamte restliche Text fett dargestellt.
   - Dieser Abschnitt ist schlecht verschachtelt: `<strong>stark <em>stark hervorgehoben?</strong> was ist das?</em>`. Aufgrund des vorherigen Problems ist es nicht leicht zu erkennen, wie dies interpretiert wurde.
   - Dem [`href`](/de/docs/Web/HTML/Element/a#href)-Attributwert fehlt ein schließendes doppeltes Anführungszeichen. Dies scheint das größte Problem verursacht zu haben – der Link wurde überhaupt nicht gerendert.

5. Untersuchen wir nun den gerenderten DOM, im Gegensatz zum Quellcode. Öffnen Sie dazu den DOM-Inspektor Ihres Browsers. Sie sehen eine Darstellung des gerenderten Markups:![Der HTML-Inspektor in Firefox, mit dem hervorgehobenen Absatz unseres Beispiels, der den Text "Was verursacht Fehler in HTML?" zeigt. Hier können Sie sehen, dass das Absatz-Element vom Browser geschlossen wurde.](html-inspector.png)
6. Sehen Sie, wie der Browser versucht hat, unsere HTML-Fehler zu beheben (wir haben die Überprüfung in Firefox durchgeführt; andere moderne Browser _sollten_ das gleiche Ergebnis liefern):

   - Die Absätze und Listenelemente haben Schließ-Tags erhalten.
   - Es ist nicht klar, wo das erste `<strong>`-Element geschlossen werden soll, daher hat der Browser jeden separaten Textblock in sein eigenes `<strong>`-Element eingeschlossen, bis zum Ende des Dokuments!
   - Die fehlerhafte Verschachtelung wurde vom Browser wie folgt behoben:

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

Wie Sie aus dem obigen Beispiel sehen können, sollten Sie wirklich sicherstellen, dass Ihr HTML wohlgeformt ist! Aber wie? In einem kleinen Beispiel wie dem oben gezeigten ist es einfach, die Zeilen durchzusuchen und die Fehler zu finden, aber was ist mit einem großen, komplexen HTML-Dokument?

Das Werkzeug für diese Aufgabe ist der [Markup Validation Service](https://validator.w3.org/) (oder **HTML-Validator**), der von der W3C erstellt und gepflegt wird (wie Sie im [Web-Standards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) gelernt haben). Der Validator nimmt ein HTML-Dokument als Eingabe, geht es durch und gibt Ihnen einen Bericht, der Ihnen mitteilt, was mit Ihrem HTML falsch ist.

![Die HTML-Validator-Startseite](validator.png)

Um das zu validierende HTML anzugeben, können Sie eine Webadresse bereitstellen, eine HTML-Datei hochladen oder direkt HTML-Code eingeben.

## Aktives Lernen: Validierung eines HTML-Dokuments

Probieren wir dies mit unserem [Beispieldokument](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/debugging-html/debug-example.html).

1. Laden Sie zuerst den [Markup Validation Service](https://validator.w3.org/) in einem neuen Browser-Tab, falls dieser nicht bereits geöffnet ist.
2. Wechseln Sie zur Registerkarte [Validate by Direct Input](https://validator.w3.org/#validate_by_input).
3. Kopieren Sie den gesamten Code des Beispieldokuments (nicht nur den Inhalt des Bodys) und fügen Sie ihn in den großen Textbereich ein, der im Markup Validation Service angezeigt wird.
4. Drücken Sie die Schaltfläche _Check_.

Dies sollte Ihnen eine Liste von Fehlern und anderen Informationen liefern.

![Eine Liste von HTML-Validierungsergebnissen vom W3C Markup Validation Service](validation-results.png)

### Interpretieren der Fehlermeldungen

Die Fehlermeldungen sind in der Regel hilfreich, aber manchmal nicht so leicht zu verstehen. Mit ein wenig Übung können Sie lernen, diese zu interpretieren, um Ihren Code zu beheben. Gehen wir die Fehlermeldungen durch und sehen, was sie bedeuten. Sie werden sehen, dass jede Nachricht mit einer Zeilen- und Spaltennummer versehen ist, um Ihnen die Fehlerlokalisierung zu erleichtern.

- „End Tag `li` impliziert, aber es gab offene Elemente“ (2 Instanzen): Diese Nachrichten weisen darauf hin, dass ein Element geöffnet ist, das geschlossen werden sollte. Der Schlusstag wird impliziert, ist aber nicht tatsächlich vorhanden. Die Zeilen-/Spalteninformation zeigt auf die erste Zeile nach der Zeile, in der der Schlusstag eigentlich stehen sollte, aber dies ist ein ausreichender Hinweis, um zu sehen, was falsch ist.
- „Unclosed element `strong`“: Dies ist wirklich leicht zu verstehen – ein {{htmlelement("strong")}}-Element ist nicht geschlossen und die Zeilen-/Spalteninformation zeigt genau darauf, wo es ist.
- „End Tag `strong` verletzt Verschachtelungsregeln“: Dies weist auf die falsch verschachtelten Elemente hin und die Zeilen-/Spalteninformation zeigt, wo sie sich befinden.
- „Ende der Datei erreicht, während sich im Attributwert befunden wird. Tag ignorieren“: Das ist ziemlich kryptisch; es bezieht sich auf die Tatsache, dass irgendwo ein Attributwert nicht richtig geformt ist, möglicherweise nahe dem Ende der Datei, weil das Dateiende innerhalb des Attributwerts erscheint. Die Tatsache, dass der Browser den Link nicht rendert, sollte uns einen guten Hinweis darauf geben, welches Element schuld ist.
- „Dateiende erreicht und es gab offene Elemente“: Dies ist etwas mehrdeutig, bezieht sich aber im Grunde darauf, dass es offene Elemente gibt, die ordnungsgemäß geschlossen werden müssen. Die Zeilennummern zeigen auf die letzten paar Zeilen der Datei und diese Fehlermeldung wird mit einer Codezeile angezeigt, die ein Beispiel für ein offenes Element angibt:

  ```plain
  example: <a href="https://www.mozilla.org/>link to Mozilla homepage</a> ↩ </ul>↩ </body>↩</html>
  ```

  > [!NOTE]
  > Ein Attribut, dem ein schließendes Anführungszeichen fehlt, kann zu einem offenen Element führen, da der Rest des Dokuments als Inhalt des Attributs interpretiert wird.

- „Unclosed element `ul`“: Dies ist nicht sehr hilfreich, da das {{htmlelement("ul")}}-Element korrekt geschlossen ist. Dieser Fehler tritt auf, weil das {{htmlelement("a")}}-Element aufgrund des fehlenden abschließenden Anführungszeichens nicht geschlossen ist.

Wenn Sie nicht herausfinden können, was jede Fehlermeldung bedeutet, machen Sie sich keine Sorgen darüber. Eine gute Strategie ist es, ein paar Fehler auf einmal zu beheben und dann Ihr HTML nach jedem Satz von Korrekturen erneut zu validieren, um zu sehen, welche Fehler noch übrig sind. Manchmal beseitigt die Behebung eines früheren Fehlers auch andere Fehlermeldungen – mehrere Fehler können oft durch ein einziges Problem verursacht werden, in einem Dominoeffekt.

Sie werden wissen, dass alle Fehler behoben wurden, wenn Sie ein schönes kleines grünes Banner sehen, das Ihnen mitteilt, dass es keine Fehler zu berichten gibt. Zum Zeitpunkt des Schreibens hieß es „Dokumentprüfung abgeschlossen. Keine Fehler oder Warnungen zu zeigen.“

## Zusammenfassung

Damit haben wir eine Einführung in die Fehlersuche in HTML, die Ihnen einige nützliche Fähigkeiten vermitteln sollte, auf die Sie sich verlassen können, wenn Sie später im Kurs HTML, aber auch CSS- und JavaScript-Code, debuggen. Dies markiert auch das Ende des Moduls _Inhalte mit HTML strukturieren_.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Styling_basics", "Learn_web_development/Core/Structuring_content")}}
