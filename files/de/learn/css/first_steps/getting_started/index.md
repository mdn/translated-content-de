---
title: Erste Schritte mit CSS
slug: Learn/CSS/First_steps/Getting_started
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir unterwegs einige praktische Dinge über die Sprache lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, grundlegende Kenntnisse im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen des Verknüpfens eines CSS-Dokuments mit einer HTML-Datei zu verstehen und
        in der Lage zu sein, einfache Textformatierungen mit CSS durchzuführen.
      </td>
    </tr>
  </tbody>
</table>

## Erste Schritte mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den untenstehenden Code kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den Code unten als `index.html` in einem Ordner auf Ihrem Rechner.

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
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — Live-Code-Editoren sind unten bereitgestellt, um Ihnen zu ermöglichen, Beispiellcode direkt hier auf der Seite zu schreiben.

## Hinzufügen von CSS zu unserem Dokument

Das Erste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, auf die Sie häufig stoßen werden, aber vorerst betrachten wir die üblichste und nützlichste Methode — das Verlinken von CSS aus dem Kopfbereich Ihres Dokuments.

Erstellen Sie eine Datei im gleichen Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`. Die `.css`-Erweiterung zeigt an, dass es sich um eine CSS-Datei handelt.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments ein:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, indem es das `rel`-Attribut verwendet, und den Speicherort dieses Stylesheets als Wert des `href`-Attributs. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Verwenden Sie Ihren Code-Editor, um das Folgende zu Ihrer CSS-Datei hinzuzufügen:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift der Stufe eins oben im Dokument sollte jetzt rot sein. Wenn dies geschieht, herzlichen Glückwunsch — Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles richtig eingegeben haben.

Sie können weiterhin lokal in `styles.css` arbeiten oder unseren interaktiven Editor unten verwenden, um mit diesem Tutorial fortzufahren. Der interaktive Editor wirkt so, als wäre das CSS im ersten Panel mit dem HTML-Dokument verknüpft, genau wie wir es oben mit unserem Dokument getan haben.

## HTML-Elemente stylen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits gezeigt, dass wir ein HTML-Element anvisieren und stylen können. Wir tun dies, indem wir einen _Elementselektor_ anvisieren — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument anzusprechen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie verwenden:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig anvisieren, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün sind, würde Ihre Regel so aussehen:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies im interaktiven Editor unten aus (bearbeiten Sie die Codeboxen) oder in Ihrem lokalen CSS-Dokument.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## Ändern des Standardverhaltens von Elementen

Wenn wir uns ein gut gekennzeichnetes HTML-Dokument ansehen, selbst wenn unser Beispiel so einfach ist, können wir sehen, wie der Browser das HTML durch Hinzufügen einiger Standard-Stylings lesbar macht. Überschriften sind groß und fett und unsere Liste hat Aufzählungszeichen. Dies geschieht, weil Browser interne Stylesheets mit Standardstilen enthalten, die sie standardmäßig auf alle Seiten anwenden; ohne sie würden alle Texte zusammenlaufen und wir müssten alles von Grund auf stylen. Alle modernen Browser zeigen HTML-Inhalte standardmäßig nahezu auf dieselbe Weise an.

Sie werden jedoch oft etwas anderes wollen als die Wahl, die der Browser getroffen hat. Dies kann geschehen, indem Sie das HTML-Element auswählen, das Sie ändern möchten, und eine CSS-Regel verwenden, um das Aussehen zu ändern. Ein gutes Beispiel ist `<ul>`, eine ungeordnete Liste. Sie hat Listenaufzählungszeichen. Wenn Sie diese Aufzählungszeichen nicht möchten, können Sie sie wie folgt entfernen:

```css
li {
  list-style-type: none;
}
```

Versuchen Sie, dies jetzt zu Ihrem CSS hinzuzufügen.

Die `list-style-type`-Eigenschaft ist eine gute Eigenschaft, um auf MDN nachzusehen, welche Werte unterstützt werden. Sehen Sie sich die Seite für [`list-style-type`](/de/docs/Web/CSS/list-style-type) an, und Sie finden ein interaktives Beispiel oben auf der Seite, um einige verschiedene Werte auszuprobieren, dann werden alle zulässigen Werte weiter unten auf der Seite detailliert beschrieben.

Beim Betrachten dieser Seite werden Sie entdecken, dass Sie zusätzlich zum Entfernen der Listenaufzählungszeichen diese ändern können — versuchen Sie, sie zu quadratischen Aufzählungszeichen zu ändern, indem Sie einen Wert von `square` verwenden.

## Hinzufügen einer Klasse

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Das funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Untergruppe der Elemente zu wählen, ohne die anderen zu ändern, können Sie Ihrem HTML-Element eine Klasse hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument einem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Global_attributes/class) hinzu. Ihre Liste sieht nun so aus:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` ansprechen, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie folgendes zu Ihrer CSS-Datei hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern und aktualisieren Sie, um das Ergebnis zu sehen.

Sie können die Klasse `special` auf jedes Element auf Ihrer Seite anwenden, das Sie genauso aussehen lassen möchten wie dieses Listenelement. Beispielsweise möchten Sie vielleicht, dass das `<span>` im Absatz auch orange und fett ist. Versuchen Sie, ihm eine `class` von `special`hinzuzufügen, laden Sie dann Ihre Seite neu und sehen Sie, was passiert.

Manchmal sehen Sie Regeln mit einem Selektor, der den HTML-Elementselektor zusammen mit der Klasse auflistet:

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

Diese Syntax bedeutet "Ziel jedes `li`-Elements, das eine Klasse von special hat". Wenn Sie dies tun würden, könnten Sie die Klasse nicht mehr auf ein `<span>` oder ein anderes Element anwenden, indem Sie die Klasse darauf anwenden; Sie müssten dieses Element zur Liste der Selektoren hinzufügen:

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

Wie Sie sich vorstellen können, könnten einige Klassen auf viele Elemente angewendet werden, und Sie möchten Ihr CSS nicht jedes Mal bearbeiten müssen, wenn etwas Neues diesen Stil übernehmen muss. Daher ist es manchmal am besten, das Element zu umgehen und sich auf die Klasse zu beziehen, es sei denn, Sie wissen, dass Sie spezielle Regeln für ein Element allein erstellen möchten und vielleicht sicherstellen möchten, dass sie nicht auf andere Dinge angewendet werden.

## Elemente basierend auf ihrer Position im Dokument stylen

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber vorerst werden wir uns nur ein paar anschauen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines innerhalb eines Absatzes und eines innerhalb eines Listenelements. Um nur ein `<em>` anzusprechen, das innerhalb eines `<li>`-Elements verschachtelt ist, können Sie einen Selektor namens **Nachkommenskombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wird jedes `<em>`-Element auswählen, das innerhalb (ein Nachkomme) eines `<li>` ist. In Ihrem Beispieldokument sollten Sie feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, aber das im Absatz unverändert bleibt.

Etwas anderes, das Sie ausprobieren könnten, ist, einen Absatz zu stylen, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML folgt. Dazu setzen Sie ein `+` (ein **adjazenter Geschwisterkombinator**) zwischen die Selektoren.

Versuchen Sie, auch diese Regel zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten umfasst die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, die ein `span` rot macht, wenn es innerhalb eines Absatzes ist. Sie werden wissen, ob Sie es richtig gemacht haben, weil das `span` im ersten Absatz rot sein wird, aber das im ersten Listenelement wird sich nicht ändern.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> [!NOTE]
> Wie Sie sehen können, bietet uns CSS mehrere Möglichkeiten, Elemente anzuvisieren, und wir haben bisher nur die Oberfläche angekratzt! Wir werden all diese Selektoren und viele weitere in unseren [Selektoren-Artikeln](/de/docs/Learn/CSS/Building_blocks/Selectors) später im Kurs genauer betrachten.

## Elemente basierend auf ihrem Zustand stylen

Die letzte Art des Stylings, die wir uns in diesem Tutorial anschauen werden, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel dafür ist das Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Element/a) (Anker)-Element ansprechen. Dieses hat unterschiedliche Zustände, je nachdem, ob es unbesucht, besucht, überflogen wird, über die Tastatur fokussiert oder gerade angeklickt wird (aktiviert). Sie können CSS verwenden, um diese unterschiedlichen Zustände anzusprechen — das CSS unten stylt unbesuchte Links pink und besuchte Links grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer darüber fährt, zum Beispiel indem Sie das Unterstreichen entfernen, was durch die folgende Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im Live-Beispiel unten können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die oben aufgeführten Regeln hinzugefügt, und jetzt haben wir erkannt, dass die pinke Farbe ziemlich hell und schwer zu lesen ist — warum ändern Sie das nicht in eine bessere Farbe? Können Sie die Links fett machen?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 1000)}}

Wir haben das Unterstreichen bei unserem Link bei Hover entfernt. Sie könnten das Unterstreichen von allen Zuständen eines Links entfernen. Es ist jedoch wichtig zu beachten, dass Sie auf einer echten Website sicherstellen möchten, dass Besucher erkennen, dass ein Link ein Link ist. Das Belassen des Unterstrichs kann ein wichtiges Indiz dafür sein, dass ein Text innerhalb eines Absatzes angeklickt werden kann — dies ist das Verhalten, das sie gewohnt sind. Wie bei allem in CSS besteht das Potenzial, das Dokument durch Ihre Änderungen weniger zugänglich zu machen — wir werden versuchen, mögliche Fallstricke an geeigneten Stellen zu markieren.

> [!NOTE]
> Sie werden in diesen Lektionen und auf der gesamten MDN häufig auf den Begriff [Barrierefreiheit](/de/docs/Learn/Accessibility) stoßen. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle verständlich und nutzbar sein müssen.
>
> Ihr Besucher könnte an einem Computer mit Maus oder Trackpad sitzen oder ein Telefon mit einem Touchscreen verwenden. Oder sie könnten einen Screenreader verwenden, der den Inhalt des Dokuments vorliest, oder sie benötigen möglicherweise viel größeren Text oder navigieren auf der Website nur mit der Tastatur.
>
> Ein einfaches HTML-Dokument ist im Allgemeinen für alle zugänglich — wenn Sie beginnen, dieses Dokument zu stylen, ist es wichtig, dass Sie es nicht weniger zugänglich machen.

## Kombinieren von Selektoren und Kombinatoren

Es ist bemerkenswert, dass Sie mehrere Selektoren und Kombinatoren zusammen kombinieren können. Zum Beispiel:

```css
/* wählt jedes <span> aus, das sich innerhalb eines <p> befindet, das sich innerhalb eines <article> befindet */
article p span {
}

/* wählt jedes <p> aus, das direkt nach einem <ul> kommt, das direkt nach einem <h1> kommt */
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

Dies wird jedes Element mit einer Klasse von `special` stylen, das sich innerhalb eines `<p>` befindet, das direkt nach einem `<h1>` kommt, das sich innerhalb eines `<body>` befindet. Puh!

Im ursprünglichen HTML, das wir bereitgestellt haben, wird nur das `<span class="special">` gestylt.

Keine Sorge, wenn das im Moment kompliziert erscheint — Sie werden bald den Dreh raus haben, wenn Sie mehr CSS schreiben.

## Zusammenfassung

In diesem Artikel haben wir uns verschiedene Möglichkeiten angeschaut, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen weiterentwickeln, während wir die restlichen Lektionen durchgehen. Sie wissen jedoch bereits genug, um Text zu stylen, CSS auf verschiedene Arten des Targetings von Elementen im Dokument anzuwenden und Eigenschaften und Werte in der MDN-Dokumentation nachzuschlagen.

In der nächsten Lektion werden wir uns [anschauen, wie CSS strukturiert ist](/de/docs/Learn/CSS/First_steps/How_CSS_is_structured).

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
