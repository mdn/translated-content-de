---
title: Erste Schritte mit CSS
slug: Learn/CSS/First_steps/Getting_started
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, dabei lernen wir einige praktische Dinge über die Sprache.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, Grundkenntnisse im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Arbeiten mit Dateien</a> und HTML-Grundlagen (lernen Sie die
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen des Verknüpfens eines CSS-Dokuments mit einer HTML-Datei zu verstehen und in der Lage zu sein, einfache Textformatierungen mit CSS durchzuführen.
      </td>
    </tr>
  </tbody>
</table>

## Beginn mit etwas HTML

Unser Ausgangspunkt ist ein HTML-Dokument. Sie können den untenstehenden Code kopieren, wenn Sie auf Ihrem eigenen Computer arbeiten möchten. Speichern Sie den Code unten als `index.html` in einem Ordner auf Ihrem Computer.

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
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — unten sind Live-Code-Editoren bereitgestellt, mit denen Sie Beispielcode direkt hier auf der Seite schreiben können.

## Hinzufügen von CSS zu unserem Dokument

Das allererste, was wir tun müssen, ist dem HTML-Dokument mitzuteilen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, auf die Sie häufig stoßen werden. Im Moment werden wir jedoch die gebräuchlichste und nützlichste Methode betrachten — das Verlinken von CSS aus dem Kopf Ihres Dokuments.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`. Die `.css`-Erweiterung zeigt an, dass dies eine CSS-Datei ist.

Um `styles.css` mit `index.html` zu verknüpfen, fügen Sie die folgende Zeile irgendwo im {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, indem das `rel`-Attribut verwendet wird, und den Speicherort dieses Stylesheets als Wert des `href`-Attributs angibt. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Fügen Sie mit Ihrem Code-Editor Folgendes zu Ihrer CSS-Datei hinzu:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift der ersten Ebene im oberen Teil des Dokuments sollte nun rot sein. Wenn dies geschieht, herzlichen Glückwunsch — Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn dies nicht geschieht, prüfen Sie sorgfältig, ob Sie alles korrekt eingegeben haben.

Sie können lokal in `styles.css` weiterarbeiten oder unseren interaktiven Editor unten verwenden, um mit diesem Tutorial fortzufahren. Der interaktive Editor funktioniert, als wäre das CSS im ersten Feld mit dem HTML-Dokument verknüpft, genauso wie wir es oben mit unserem Dokument gemacht haben.

## HTML-Elemente stylen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits demonstriert, dass wir ein HTML-Element anvisieren und stylen können. Wir tun dies, indem wir einen _Element-Selektor_ anvisieren — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument anzusprechen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie Folgendes verwenden:

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

Probieren Sie dies im interaktiven Editor unten aus (bearbeiten Sie die Codefelder) oder in Ihrem lokalen CSS-Dokument.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## Ändern des Standardverhaltens von Elementen

Wenn wir uns ein gut markiertes HTML-Dokument ansehen, sogar etwas so Einfaches wie unser Beispiel, können wir sehen, wie der Browser das HTML lesbar macht, indem er einige Standardstile hinzufügt. Überschriften sind groß und fett und unsere Liste hat Aufzählungszeichen. Dies geschieht, weil Browser interne Stylesheets enthalten, die Standardstile enthalten, die sie standardmäßig auf alle Seiten anwenden; ohne sie würde der gesamte Text zusammengeklumpt und wir müssten alles von Grund auf stylen. Alle modernen Browser zeigen HTML-Inhalte standardmäßig weitgehend gleich an.

Sie werden jedoch oft etwas anderes wollen als die Wahl, die der Browser getroffen hat. Dies kann erreicht werden, indem Sie das HTML-Element auswählen, das Sie ändern möchten, und eine CSS-Regel verwenden, um sein Aussehen zu ändern. Ein gutes Beispiel ist `<ul>`, eine ungeordnete Liste. Sie hat Listenaufzählungszeichen. Wenn Sie diese Aufzählungszeichen nicht wollen, können Sie sie folgendermaßen entfernen:

```css
li {
  list-style-type: none;
}
```

Fügen Sie dies jetzt Ihrem CSS hinzu.

Die `list-style-type`-Eigenschaft ist eine gute Eigenschaft, die Sie sich auf MDN ansehen können, um herauszufinden, welche Werte unterstützt werden. Schauen Sie auf die Seite für [`list-style-type`](/de/docs/Web/CSS/list-style-type) und Sie finden ein interaktives Beispiel oben auf der Seite, um einige verschiedene Werte auszuprobieren. Weiter unten auf der Seite werden dann alle zulässigen Werte detailliert aufgeführt.

Wenn Sie sich diese Seite ansehen, werden Sie feststellen, dass Sie zusätzlich zu den Entfernen der Listenaufzählungszeichen diese ändern können — versuchen Sie, sie in quadratische Aufzählungszeichen zu ändern, indem Sie einen Wert von `square` verwenden.

## Eine Klasse hinzufügen

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Das funktioniert, solange Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente auszuwählen, ohne die anderen zu ändern, können Sie eine Klasse zu Ihrem HTML-Element hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie in Ihrem HTML-Dokument einem zweiten Listenelement ein [class-Attribut](/de/docs/Web/HTML/Global_attributes/class) hinzu. Ihre Liste wird jetzt so aussehen:

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

3. Speichern und aktualisieren Sie, um das Ergebnis zu sehen.

Sie können die Klasse `special` auf jedes Element auf Ihrer Seite anwenden, das das gleiche Aussehen haben soll wie dieses Listenelement. Zum Beispiel möchten Sie möglicherweise, dass der `<span>` im Absatz ebenfalls orange und fett ist. Versuchen Sie, ihm eine `class` von `special` hinzuzufügen, dann laden Sie Ihre Seite neu und sehen Sie, was passiert.

Manchmal werden Sie Regeln mit einem Selektor sehen, der den HTML-Element-Selektor zusammen mit der Klasse auflistet:

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

Diese Syntax bedeutet "Ziele jedes `li`-Element an, das eine Klasse von special hat". Wenn Sie dies tun würden, könnten Sie die Klasse nicht mehr auf einen `<span>` oder ein anderes Element anwenden, indem Sie die Klasse hinzufügen; Sie müssten dieses Element zur Liste der Selektoren hinzufügen:

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

Wie Sie sich vorstellen können, könnten einige Klassen auf viele Elemente angewendet werden und Sie möchten nicht bei jeder neuen Verwendung, die diesen Stil übernehmen soll, Ihr CSS bearbeiten. Daher ist es manchmal am besten, das Element zu umgehen und auf die Klasse zu verweisen, es sei denn, Sie wissen, dass Sie spezielle Regeln für ein einziges Element erstellen möchten und vielleicht sicherstellen möchten, dass sie nicht auf andere Dinge angewendet werden.

## Styling von Elementen basierend auf ihrem Standort im Dokument

Es gibt Zeiten, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es im Dokument ist. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber im Moment werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines in einem Absatz und das andere in einem Listenelement. Um nur ein `<em>`, das in einem `<li>`-Element verschachtelt ist, auszuwählen, können Sie einen Selektor namens **Abkommenskombinator** verwenden, der in Form eines Leerzeichens zwischen zwei anderen Selektoren erscheint.

Fügen Sie die folgende Regel zu Ihrem Stylesheet hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wählt jedes `<em>`-Element aus, das innerhalb (ein Nachfahre von) eines `<li>`-Elements ist. So sollten Sie in Ihrem Beispieldokument feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, das im Absatz jedoch unverändert bleibt.

Versuchen Sie auch, einen Absatz zu stylen, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML folgt. Platzieren Sie dazu ein `+` (einen **nächster-Nachbarschaftskombinator**) zwischen den Selektoren.

Versuchen Sie auch, diese Regel zu Ihrem Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das Live-Beispiel unten enthält die beiden oben genannten Regeln. Versuchen Sie, eine Regel hinzuzufügen, um ein `span` rot zu machen, wenn es innerhalb eines Absatzes ist. Sie werden wissen, ob Sie es richtig haben, denn das `span` im ersten Absatz wird rot sein, aber das im ersten Listenelement wird sich nicht ändern.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> [!NOTE]
> Wie Sie sehen, bietet CSS uns mehrere Möglichkeiten, Elemente anzuvisieren, und wir haben bisher nur die Oberfläche gestreift! Wir werden uns diese Selektoren und viele andere in unseren [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)-Artikeln später im Kurs genauer ansehen.

## Styling von Elementen basierend auf ihrem Zustand

Die letzte Art von Styling, die wir uns in diesem Tutorial ansehen werden, ist die Fähigkeit, Elemente basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel hierfür ist das Styling von Links. Wenn wir einen Link stylen, müssen wir das [`<a>`](/de/docs/Web/HTML/Element/a) (Anker)-Element anvisieren. Dieses hat unterschiedliche Zustände, je nachdem, ob es unbesucht, besucht, überfahren, über die Tastatur fokussiert oder in Prozess des Klickens (aktiviert) ist. Sie können CSS verwenden, um diese unterschiedlichen Zustände anzusprechen — das unten stehende CSS stylt unbesuchte Links in Pink und besuchte Links in Grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer diesen überfährt, zum Beispiel indem Sie die Unterstreichung entfernen, was mit der nächsten Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im Live-Beispiel unten können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links experimentieren. Wir haben die obigen Regeln hinzugefügt, und bemerken nun, dass die rosa Farbe ziemlich hell und schwer zu lesen ist — warum ändern Sie diese nicht in eine bessere Farbe? Können Sie die Links fett machen?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 1000)}}

Wir haben die Unterstreichung auf unserem Link bei Hover entfernt. Sie könnten die Unterstreichung aus allen Zuständen eines Links entfernen. Es ist jedoch wichtig daran zu denken, dass Sie in einer echten Website sicherstellen möchten, dass Besucher wissen, dass ein Link ein Link ist. Das Belassen der Unterstreichung kann ein wichtiger Hinweis für Menschen sein zu erkennen, dass ein Text innerhalb eines Absatzes angeklickt werden kann — dies ist das Verhalten, an das sie gewöhnt sind. Wie bei allem in CSS besteht die Möglichkeit, das Dokument mit Ihren Änderungen weniger zugänglich zu machen — wir werden versuchen, mögliche Fallstricke an geeigneten Stellen hervorzuheben.

> [!NOTE]
> Sie werden häufig Erwähnungen von [Barrierefreiheit](/de/docs/Learn/Accessibility) in diesen Lektionen und auf MDN sehen. Wenn wir über Barrierefreiheit sprechen, beziehen wir uns auf die Anforderung, dass unsere Webseiten für alle verständlich und nutzbar sind.
>
> Ihr Besucher könnte sich an einem Computer mit einer Maus oder einem Trackpad befinden, oder an einem Telefon mit einem Touchscreen. Oder er könnte einen Screenreader verwenden, der den Inhalt des Dokuments vorliest, oder er benötigt möglicherweise viel größeren Text, oder navigiert die Seite ausschließlich über die Tastatur.
>
> Ein einfaches HTML-Dokument ist im Allgemeinen für jeden zugänglich — wenn Sie beginnen, dieses Dokument zu gestalten, ist es wichtig, dass Sie es nicht weniger zugänglich machen.

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

Sie können auch verschiedene Typen kombinieren. Versuchen Sie, Folgendes in Ihren Code einzufügen:

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse von `special` stylen, das innerhalb eines `<p>` ist, das direkt nach einem `<h1>` kommt, das sich innerhalb eines `<body>` befindet. Puh!

Im ursprünglichen HTML, das wir bereitgestellt haben, ist das einzige Element, das gestylt wird, `<span class="special">`.

Keine Sorge, wenn das im Moment kompliziert erscheint — Sie werden sich bald daran gewöhnen, wenn Sie mehr CSS schreiben.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen weiterentwickeln, während wir den Rest der Lektionen durchgehen. Jedoch wissen Sie jetzt bereits genug, um Text zu stylen, CSS basierend auf verschiedenen Möglichkeiten des Zielens von Elementen im Dokument anzuwenden und Eigenschaften und Werte in der MDN-Dokumentation nachzuschlagen.

In der nächsten Lektion werden wir uns ansehen, [wie CSS strukturiert ist](/de/docs/Learn/CSS/First_steps/How_CSS_is_structured).

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
