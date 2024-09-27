---
title: Erste Schritte mit CSS
slug: Learn/CSS/First_steps/Getting_started
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Dinge über die Sprache lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, Grundkenntnisse im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen des Verknüpfens eines CSS-Dokuments mit einer HTML-Datei verstehen und einfache Textformatierungen mit CSS durchführen können.
      </td>
    </tr>
  </tbody>
</table>

## Starten mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den Code unten kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den untenstehenden Code als `index.html` in einem Ordner auf Ihrem Rechner.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Getting started with CSS</title>
  </head>

  <body>
    <h1>I am a level one heading</h1>

    <p>
      This is a paragraph of text. In the text is a
      <span>span element</span> and also a
      <a href="https://example.com">link</a>.
    </p>

    <p>
      This is the second paragraph. It contains an <em>emphasized</em> element.
    </p>

    <ul>
      <li>Item <span>one</span></li>
      <li>Item two</li>
      <li>Item <em>three</em></li>
    </ul>
  </body>
</html>
```

> [!NOTE]
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — unten stehen Live-Code-Editoren zur Verfügung, mit denen Sie Beispielcode direkt hier auf der Seite schreiben können.

## CSS zu unserem Dokument hinzufügen

Das allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, die Sie häufig antreffen werden. Für den Moment werden wir jedoch die üblichste und nützlichste Methode betrachten — das Verknüpfen von CSS aus dem Kopf Ihres Dokuments.

Erstellen Sie im gleichen Ordner wie Ihr HTML-Dokument eine Datei und speichern Sie sie als `styles.css`. Die `.css`-Erweiterung zeigt, dass dies eine CSS-Datei ist.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element informiert den Browser, dass wir ein Stylesheet haben, indem das `rel`-Attribut verwendet wird, und den Ort dieses Stylesheets als Wert des `href`-Attributs angibt. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Fügen Sie mit Ihrem Code-Editor Folgendes zu Ihrer CSS-Datei hinzu:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift erster Ebene am oberen Ende des Dokuments sollte jetzt rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

Sie können weiterhin lokal in `styles.css` arbeiten, oder Sie können unseren interaktiven Editor unten verwenden, um mit diesem Tutorial fortzufahren. Der interaktive Editor verhält sich so, als ob das CSS im ersten Panel mit dem HTML-Dokument verknüpft wäre, genau wie wir es mit unserem Dokument oben gemacht haben.

## HTML-Elemente stylen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits demonstriert, dass wir ein HTML-Element anvisieren und stylen können. Dies tun wir, indem wir einen _Elementselektor_ anvisieren — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument anzuvisieren, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu färben, würden Sie Folgendes verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig anvisieren, indem Sie die Selektoren durch ein Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün sind, würde Ihre Regel so aussehen:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies im interaktiven Editor unten (bearbeiten Sie die Codeboxen) oder in Ihrem lokalen CSS-Dokument aus.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## Das Standardverhalten von Elementen ändern

Wenn wir ein gut markiertes HTML-Dokument betrachten, selbst etwas so Einfaches wie unser Beispiel, können wir sehen, wie der Browser das HTML lesbar macht, indem er einige Standardstile hinzufügt. Überschriften sind groß und fett und unsere Liste hat Aufzählungszeichen. Dies geschieht, weil Browser interne Stylesheets mit Standardstilen haben, die sie standardmäßig auf alle Seiten anwenden; ohne diese würden alle Texte zusammenlaufen und wir müssten alles von Grund auf neu stylen. Alle modernen Browser zeigen HTML-Inhalte standardmäßig in etwa gleicher Weise an.

Trotzdem möchten Sie oft etwas anderes als die Auswahl, die der Browser getroffen hat. Dies kann erreicht werden, indem Sie das HTML-Element wählen, das Sie ändern möchten, und eine CSS-Regel verwenden, um das Aussehen zu ändern. Ein gutes Beispiel ist `<ul>`, eine ungeordnete Liste. Sie hat Listenkugeln. Wenn Sie diese Kugeln nicht möchten, können Sie sie wie folgt entfernen:

```css
li {
  list-style-type: none;
}
```

Fügen Sie dies jetzt Ihrem CSS hinzu.

Die `list-style-type`-Eigenschaft ist eine gute Eigenschaft, um auf MDN zu sehen, welche Werte unterstützt werden. Sehen Sie sich die Seite für [`list-style-type`](/de/docs/Web/CSS/list-style-type) an und Sie werden sehen, dass es oben auf der Seite ein interaktives Beispiel gibt, um einige verschiedene Werte auszuprobieren, dann sind alle erlaubten Werte weiter unten auf der Seite detailliert.

Wenn Sie sich diese Seite ansehen, werden Sie entdecken, dass Sie zusätzlich dazu, die Listenkugeln zu entfernen, sie ändern können — versuchen Sie, sie in quadratische Kugeln durch Verwendung eines Werts von `square` zu ändern.

## Eine Klasse hinzufügen

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Dies funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Untergruppe der Elemente auszuwählen, ohne die anderen zu ändern, können Sie eine Klasse zu Ihrem HTML-Element hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument einem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Global_attributes/class) hinzu. Ihre Liste sieht nun so aus:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` anvisieren, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie Folgendes zu Ihrer CSS-Datei hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern und aktualisieren, um das Ergebnis zu sehen.

Sie können die Klasse `special` auf jedes Element auf Ihrer Seite anwenden, das dasselbe Aussehen wie dieses Listenelement haben soll. Zum Beispiel möchten Sie vielleicht, dass das `<span>` im Absatz auch orange und fett ist. Versuchen Sie, ihm eine `class` von `special` zu geben, laden Sie dann Ihre Seite neu und sehen Sie, was passiert.

Manchmal werden Sie Regeln mit einem Selektor sehen, der den HTML-Elementselektor zusammen mit der Klasse auflistet:

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

Diese Syntax bedeutet: "zielen Sie auf jedes `li`-Element ab, das eine Klasse von special hat". Wenn Sie das tun würden, könnten Sie die Klasse nicht mehr auf ein `<span>` oder ein anderes Element anwenden, indem Sie die Klasse dazu hinzufügen; Sie müssten dieses Element zur Liste der Selektoren hinzufügen:

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

Wie Sie sich vorstellen können, könnten einige Klassen auf viele Elemente angewendet werden und Sie möchten Ihr CSS nicht jedes Mal bearbeiten müssen, wenn etwas Neues diesen Stil annehmen muss. Daher ist es manchmal am besten, das Element zu umgehen und sich auf die Klasse zu beziehen, es sei denn, Sie wissen, dass Sie einige spezielle Regeln für ein einzelnes Element erstellen möchten und vielleicht sicherstellen, dass sie nicht auf andere Dinge angewendet werden.

## Styling von Elementen basierend auf ihrer Position im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, abhängig davon, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen dabei helfen können, aber vorerst werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und das andere innerhalb eines Listenelements. Um nur ein `<em>` auszuwählen, das innerhalb eines `<li>`-Elements verschachtelt ist, können Sie einen Selektor namens **Nachfahr-Kombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das innerhalb (ein Nachkomme) eines `<li>` ist. In Ihrem Beispieldokument sollten Sie also feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, aber das innerhalb des Absatzes unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist das Styling eines Absatzes, wenn er direkt nach einer Überschrift der gleichen Hierarchieebene im HTML kommt. Dafür platzieren Sie ein `+` (ein **Geschwister-Kombinator**) zwischen den Selektoren.

Versuchen Sie, diese Regel ebenfalls zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden obigen Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein span rot zu machen, wenn es sich in einem Absatz befindet. Sie werden wissen, ob dies richtig ist, wenn das Span im ersten Absatz rot wird, aber das im ersten Listenelement seine Farbe nicht ändert.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> [!NOTE]
> Wie Sie sehen können, bietet uns CSS mehrere Möglichkeiten, um auf Elemente zu zielen, und wir haben bisher nur die Oberfläche angekratzt! Wir werden uns die Auswahlmöglichkeiten sowie viele weitere in unseren späteren [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) Artikeln in diesem Kurs genauer ansehen.

## Styling von Elementen basierend auf ihrem Zustand

Der letzte Styling-Typ, den wir uns in diesem Tutorial ansehen werden, ist die Möglichkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist das Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Element/a) (Anker) Element anvisieren. Dieses hat unterschiedliche Zustände, je nachdem, ob es ungesehen, besucht, überflogen oder über die Tastatur fokussiert ist oder im Prozess des Klickens (aktiviert) ist. Sie können CSS verwenden, um diese unterschiedlichen Zustände zu anvisieren — Das CSS unten styled ungesehene Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Nutzer darüber schwebt, indem Sie zum Beispiel die Unterstreichung entfernen, was durch die nächste Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im Live-Beispiel unten können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links experimentieren. Wir haben die obigen Regeln hinzugefügt und jetzt erkannt, dass die pinke Farbe ziemlich hell und schwer zu lesen ist — warum nicht eine bessere Farbe wählen? Können Sie die Links fett machen?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 1000)}}

Wir haben die Unterstreichung unseres Links beim Überfliegen entfernt. Sie könnten die Unterstreichung aus allen Zuständen eines Links entfernen. Es ist jedoch wichtig zu bedenken, dass Sie in einer echten Seite sicherstellen möchten, dass die Besucher wissen, dass ein Link ein Link ist. Das Belassen der Unterstreichung kann ein wichtiges Indiz dafür sein, dass Text in einem Absatz angeklickt werden kann — dies ist das Verhalten, an das sie gewöhnt sind. Wie bei allem in CSS besteht das Potenzial, mit Ihren Änderungen das Dokument weniger zugänglich zu machen — wir werden uns bemühen, potenzielle Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> In diesen Lektionen und auf MDN wird oft von [Barrierefreiheit](/de/docs/Learn/Accessibility) gesprochen. Wenn wir von Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für jeden verständlich und nutzbar sein müssen.
>
> Ihr Besucher kann an einem Computer mit Maus oder Trackpad sein oder ein Telefon mit Touchscreen verwenden. Oder sie nutzen möglicherweise einen Screenreader, der den Inhalt des Dokuments vorliest, oder sie benötigen möglicherweise viel größeren Text oder navigieren mit der Tastatur allein.
>
> Ein einfaches HTML-Dokument ist im Allgemeinen für alle zugänglich — sobald Sie beginnen, dieses Dokument zu stylen, ist es wichtig, dass Sie es nicht weniger zugänglich machen.

## Kombinieren von Selektoren und Kombinatoren

Es ist zu beachten, dass Sie mehrere Selektoren und Kombinatoren zusammen kombinieren können. Zum Beispiel:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

Sie können auch mehrere Typen zusammen kombinieren. Versuchen Sie, das Folgende in Ihren Code einzufügen:

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse von `special` stylen, das sich innerhalb eines `<p>` befindet, das direkt nach einem `<h1>` steht, das sich innerhalb eines `<body>` befindet. Puh!

Im ursprünglichen HTML, das wir bereitgestellt haben, ist das einzige gestylte Element `<span class="special">`.

Keine Sorge, wenn das im Moment kompliziert scheint — Sie werden bald den Dreh herausbekommen, je mehr CSS Sie schreiben.

## Zusammenfassung

In diesem Artikel haben wir eine Reihe von Möglichkeiten betrachtet, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen weiterentwickeln, während wir den Rest der Lektionen durchlaufen. Sie wissen jedoch jetzt bereits genug, um Text zu stylen, CSS basierend auf verschiedenen Möglichkeiten zur Zielauswahl von Elementen im Dokument anzuwenden und Eigenschaften und Werte in der MDN-Dokumentation nachzuschlagen.

In der nächsten Lektion werden wir uns ansehen, [wie CSS strukturiert ist](/de/docs/Learn/CSS/First_steps/How_CSS_is_structured).

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
