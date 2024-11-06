---
title: Einstieg in CSS
slug: Learn/CSS/First_steps/Getting_started
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir unterwegs einige praktische Dinge über die Sprache lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a>, grundlegende Kenntnisse im
        <a href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Umgang mit Dateien</a> und HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">Einführung in HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Grundlagen des Verknüpfens eines CSS-Dokuments mit einer HTML-Datei zu verstehen und in der Lage zu sein, einfache Textformatierungen mit CSS zu machen.
      </td>
    </tr>
  </tbody>
</table>

## Beginn mit etwas HTML

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
> Wenn Sie dies auf einem Gerät oder in einer Umgebung lesen, in der Sie nicht einfach Dateien erstellen können, machen Sie sich keine Sorgen — die Live-Beispiele unten haben eine "Play"-Schaltfläche, mit der Sie den CSS- und HTML-Code im MDN Playground bearbeiten und die kombinierten Ergebnisse live sehen können.

## CSS zu unserem Dokument hinzufügen

Das allererste, was wir tun müssen, ist dem HTML-Dokument zu sagen, dass wir einige CSS-Regeln haben, die es verwenden soll. Es gibt drei verschiedene Möglichkeiten, CSS auf ein HTML-Dokument anzuwenden, auf die Sie häufig stoßen werden. Vorläufig werden wir jedoch die übliche und nützlichste Methode betrachten — das Verlinken von CSS aus dem Kopf Ihres Dokuments.

Erstellen Sie eine Datei im selben Ordner wie Ihr HTML-Dokument und speichern Sie sie als `styles.css`. Die Erweiterung `.css` zeigt an, dass dies eine CSS-Datei ist.

Um `styles.css` mit `index.html` zu verlinken, fügen Sie die folgende Zeile irgendwo innerhalb des {{htmlelement("head")}} des HTML-Dokuments hinzu:

```html
<link rel="stylesheet" href="styles.css" />
```

Dieses {{htmlelement("link")}}-Element teilt dem Browser mit, dass wir ein Stylesheet haben, wobei es das `rel`-Attribut benutzt, und der Speicherort dieses Stylesheets wird als Wert des `href`-Attributs angegeben. Sie können testen, ob das CSS funktioniert, indem Sie eine Regel zu `styles.css` hinzufügen. Fügen Sie in Ihrem Code-Editor das Folgende zu Ihrer CSS-Datei hinzu:

```css
h1 {
  color: red;
}
```

Speichern Sie Ihre HTML- und CSS-Dateien und laden Sie die Seite in einem Webbrowser neu. Die Überschrift auf der höchsten Ebene im Dokument sollte nun rot sein. Wenn das passiert, herzlichen Glückwunsch — Sie haben erfolgreich CSS auf ein HTML-Dokument angewendet. Wenn das nicht passiert, überprüfen Sie sorgfältig, ob Sie alles korrekt eingegeben haben.

Sie können weiterhin lokal in `styles.css` arbeiten oder unseren interaktiven Editor unten verwenden, um mit diesem Tutorial fortzufahren. Der interaktive Editor agiert so, als ob das CSS im ersten Panel mit dem HTML-Dokument verlinkt wäre, genauso wie wir es in unserem Dokument getan haben.

## HTML-Elemente stylen

Indem wir unsere Überschrift rot gemacht haben, haben wir bereits demonstriert, dass wir ein HTML-Element anvisieren und stylen können. Wir tun dies, indem wir einen _Element-Selektor_ verwenden — dies ist ein Selektor, der direkt mit einem HTML-Elementnamen übereinstimmt. Um alle Absätze im Dokument zu erfassen, würden Sie den Selektor `p` verwenden. Um alle Absätze grün zu machen, würden Sie:

```css
p {
  color: green;
}
```

Sie können mehrere Selektoren gleichzeitig anvisieren, indem Sie die Selektoren mit einem Komma trennen. Wenn Sie möchten, dass alle Absätze und alle Listenelemente grün sind, würde Ihre Regel folgendermaßen aussehen:

```css
p,
li {
  color: green;
}
```

Probieren Sie dies im Beispiel unten aus (klicken Sie auf "Play") oder in Ihrer lokalen Kopie:

```html live-sample___started1
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started1
h1 {
}

p {
}
```

{{EmbedLiveSample("started1", "", "240px")}}

## Das Standardverhalten von Elementen ändern

Wenn wir uns ein gut markiertes HTML-Dokument ansehen, können wir sehen, wie der Browser das HTML durch Hinzufügen einiger Standardstile lesbar macht. Überschriften sind groß und fett, und unsere Liste hat Aufzählungszeichen. Dies geschieht, weil Browser interne Stylesheets mit Standardstilen haben, die sie standardmäßig auf alle Seiten anwenden; ohne sie würden alle Texte in einem Klumpen zusammenlaufen und wir müssten alles von Grund auf neu gestalten. Alle modernen Browser zeigen HTML-Inhalte standardmäßig auf ziemlich die gleiche Weise an.

Oft wollen Sie jedoch etwas anderes als die Wahl des Browsers. Dies kann erreicht werden, indem Sie das entsprechende HTML-Element auswählen und eine CSS-Regel verwenden, um sein Aussehen zu ändern. Ein gutes Beispiel ist `<ul>`, eine ungeordnete Liste. Sie hat Listenpunkte. Wenn Sie diese Punkte nicht möchten, können Sie sie wie folgt entfernen:

```css
li {
  list-style-type: none;
}
```

Versuchen Sie, dies jetzt Ihrer CSS hinzuzufügen.

Die `list-style-type`-Eigenschaft ist eine gute Eigenschaft, die Sie auf MDN ansehen können, um zu sehen, welche Werte unterstützt werden. Werfen Sie einen Blick auf die Seite für [`list-style-type`](/de/docs/Web/CSS/list-style-type), und Sie finden ein interaktives Beispiel oben auf der Seite, um einige verschiedene Werte auszuprobieren, und weiter unten alle zulässigen Werte im Detail.

Auf dieser Seite werden Sie entdecken, dass Sie zusätzlich zu der Entfernung der Listenpunkte diese ändern können — versuchen Sie, sie in quadratische Punkte zu ändern, indem Sie den Wert `square` verwenden.

## Hinzufügen einer Klasse

Bisher haben wir Elemente basierend auf ihren HTML-Elementnamen gestylt. Dies funktioniert solange, wie Sie möchten, dass alle Elemente dieses Typs in Ihrem Dokument gleich aussehen. Um eine Teilmenge der Elemente ohne Änderung der anderen auszuwählen, können Sie eine Klasse zu Ihrem HTML-Element hinzufügen und diese Klasse in Ihrem CSS anvisieren.

1. Fügen Sie Ihrem HTML-Dokument ein [class-Attribut](/de/docs/Web/HTML/Global_attributes/class) zum zweiten Listenelement hinzu. Ihre Liste wird jetzt so aussehen:

   ```html
   <ul>
     <li>Item one</li>
     <li class="special">Item two</li>
     <li>Item <em>three</em></li>
   </ul>
   ```

2. In Ihrem CSS können Sie die Klasse `special` anvisieren, indem Sie einen Selektor erstellen, der mit einem Punkt beginnt. Fügen Sie Folgendes Ihrer CSS-Datei hinzu:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Speichern und aktualisieren Sie, um zu sehen, was passiert.

Sie können die Klasse `special` auf jedes Element auf Ihrer Seite anwenden, das Sie so aussehen lassen möchten wie dieses Listenelement. Zum Beispiel möchten Sie vielleicht, dass der `<span>` im Absatz auch orange und fett ist. Versuchen Sie, ihm eine Klasse `special` hinzuzufügen, laden Sie dann Ihre Seite neu und sehen Sie, was passiert.

Manchmal sehen Sie Regeln mit einem Selektor, der den HTML-Element-Selektor zusammen mit der Klasse auflistet:

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

Diese Syntax bedeutet "visiere jedes `li`-Element an, das eine Klasse `special` hat". Wenn Sie dies tun würden, könnten Sie die Klasse nicht mehr auf einem `<span>` oder einem anderen Element anwenden, indem Sie die Klasse hinzufügen; Sie müssten dieses Element in die Liste der Selektoren aufnehmen:

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

Wie Sie sich vorstellen können, könnten einige Klassen auf viele Elemente angewendet werden, und Sie möchten nicht ständig Ihr CSS bearbeiten müssen, wenn etwas Neues diesen Stil übernehmen muss. Daher ist es manchmal am besten, das Element zu umgehen und sich auf die Klasse zu beziehen, es sei denn, Sie wissen, dass Sie spezielle Regeln für ein einzelnes Element erstellen möchten und möchten, dass diese möglicherweise nicht auf andere Dinge angewendet werden.

## Elemente basierend auf ihrer Position im Dokument stylen

Es gibt Fälle, in denen Sie möchten, dass etwas anders aussieht, basierend darauf, wo es sich im Dokument befindet. Es gibt eine Reihe von Selektoren, die Ihnen hier helfen können, aber für den Moment werden wir uns nur ein paar ansehen. In unserem Dokument gibt es zwei `<em>`-Elemente — eines in einem Absatz und das andere in einem Listenelement. Um nur ein `<em>` zu erfassen, das in einem `<li>`-Element verschachtelt ist, können Sie einen Selektor namens **Nachfahrkombinator** verwenden, der die Form eines Leerzeichens zwischen zwei anderen Selektoren annimmt.

Fügen Sie Ihrer Stylesheet die folgende Regel hinzu:

```css
li em {
  color: rebeccapurple;
}
```

Dieser Selektor wird jedes `<em>`-Element erfassen, das in einem `<li>` enthalten ist (ein Nachfahre davon). In Ihrem Beispieldokument sollten Sie feststellen, dass das `<em>` im dritten Listenelement jetzt lila ist, aber das im Absatz unverändert bleibt.

Etwas anderes, was Sie ausprobieren könnten, ist das Styling eines Absatzes, wenn er direkt nach einer Überschrift auf derselben Hierarchieebene im HTML kommt. Um dies zu tun, platzieren Sie ein `+` (einen **nächsten-Geschwister-Kombinator**) zwischen den Selektoren.

Versuchen Sie, diese Regel ebenfalls zu Ihrer Stylesheet hinzuzufügen:

```css
h1 + p {
  font-size: 200%;
}
```

Das unten stehende Live-Beispiel beinhaltet die beiden obigen Regeln. Versuchen Sie, eine Regel hinzuzufügen, die ein `<span>` rot macht, wenn es in einem Absatz enthalten ist. Sie werden wissen, ob Sie es richtig gemacht haben, wenn das `<span>` im ersten Absatz rot sein wird, aber das im ersten Listenelement keine Farbänderung zeigt.

```html live-sample___started2
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item <span>one</span></li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started2
li em {
  color: rebeccapurple;
}

h1 + p {
  font-size: 200%;
}
```

{{EmbedLiveSample("started2", "", "340px")}}

> [!NOTE]
> Wie Sie sehen können, gibt uns CSS mehrere Möglichkeiten, Elemente zu erfassen, und wir haben bislang nur an der Oberfläche gekratzt! Wir werden uns später im Kurs näher mit all diesen Selektoren und vielen mehr in unseren [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) Artikeln beschäftigen.

## Dinge basierend auf Zustand stylen

Die letzte Art des Stylings, die wir uns in diesem Tutorial anschauen, ist die Fähigkeit, Dinge basierend auf ihrem Zustand zu stylen. Ein einfaches Beispiel hierfür ist das Styling von Links. Wenn wir einen Link gestalten, müssen wir das [`<a>`](/de/docs/Web/HTML/Element/a) (Anker-)Element anvisieren. Dieser hat unterschiedliche Zustände, je nachdem, ob er unbesucht, besucht, übertastet, über die Tastatur fokussiert oder gerade geklickt (aktiviert) wird. Sie können CSS verwenden, um diese unterschiedlichen Zustände anzusprechen — das unten angegebene CSS formatiert unbesuchte Links in Pink und besuchte Links in Grün.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Sie können das Aussehen des Links ändern, wenn der Benutzer darüber schwebt, zum Beispiel durch Entfernen der Unterstreichung, was durch die nächste Regel erreicht wird:

```css
a:hover {
  text-decoration: none;
}
```

Im folgenden Beispiel können Sie mit verschiedenen Werten für die verschiedenen Zustände eines Links spielen. Wir haben die oben genannten Regeln hinzugefügt und festgestellt, dass die rosa Farbe ziemlich hell und schwer lesbar ist — warum ändern Sie das nicht in eine bessere Farbe? Können Sie die Links fett machen?

```html live-sample___started3
<h1>I am a level one heading</h1>

<p>
  This is a paragraph of text. In the text is a <span>span element</span> and
  also a <a href="http://example.com">link</a>.
</p>

<p>This is the second paragraph. It contains an <em>emphasized</em> element.</p>

<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

```css live-sample___started3
a:link {
  color: pink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("started3", "", "240px")}}

Wir haben die Unterstreichung unseres Links beim Überfahren entfernt. Sie könnten die Unterstreichung von allen Zuständen eines Links entfernen. Es ist jedoch nützlich, daran zu denken, dass Sie auf einer realen Website sicherstellen möchten, dass die Besucher wissen, dass ein Link ein Link ist. Das Belassen der Unterstreichung kann ein wichtiges Indiz dafür sein, dass manche Textteile in einem Absatz anklickbar sind — dies ist das Verhalten, an das sie gewöhnt sind. Wie bei allem in CSS besteht die Möglichkeit, dass Ihr Dokument durch Ihre Änderungen weniger zugänglich wird — wir werden in geeigneten Fällen versuchen, potenzielle Fallstricke hervorzuheben.

> [!NOTE]
> Sie werden häufig Erwähnungen von [Barrierefreiheit](/de/docs/Learn/Accessibility) in diesen Lektionen und auf MDN sehen. Wenn wir von Barrierefreiheit sprechen, meinen wir die Anforderung, dass unsere Webseiten für alle verständlich und nutzbar sein müssen.
>
> Ihr Besucher könnte an einem Computer mit einer Maus oder einem Trackpad sein, oder einem Telefon mit einem Touchscreen. Oder er könnte einen Screenreader verwenden, der den Inhalt des Dokuments vorliest, oder er könnte viel größere Texte benötigen oder die Seite nur mit der Tastatur navigieren.
>
> Ein einfaches HTML-Dokument ist im Allgemeinen für jeden zugänglich — wenn Sie dieses Dokument zu stylen beginnen, ist es wichtig, dass Sie es nicht weniger zugänglich machen.

## Kombinieren von Selektoren und Kombinatoren

Es ist erwähnenswert, dass Sie mehrere Selektoren und Kombinatoren zusammen kombinieren können. Zum Beispiel:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```

Sie können auch mehrere Typen zusammen kombinieren. Probieren Sie das Folgende in Ihren Code einzufügen:

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Dies wird jedes Element mit einer Klasse `special` stylen, das sich in einem `<p>` befindet, das direkt nach einem `<h1>`, das in einem `<body>` enthalten ist, folgt. Puh!

Im ursprünglichen HTML, das wir bereitgestellt haben, ist das einzige gestylte Element `<span class="special">`.

Machen Sie sich keine Sorgen, wenn dies im Moment kompliziert erscheint — Sie werden bald den Dreh raus haben, je mehr CSS Sie schreiben.

## Zusammenfassung

In diesem Artikel haben wir uns eine Reihe von Möglichkeiten angesehen, wie Sie ein Dokument mit CSS stylen können. Wir werden dieses Wissen vertiefen, während wir die restlichen Lektionen durchlaufen. Aber Sie wissen jetzt bereits genug, um Text zu stylen, CSS basierend auf verschiedenen Möglichkeiten des Anvisierens von Elementen im Dokument anzuwenden, und Eigenschaften und Werte in der MDN-Dokumentation nachzuschlagen.

In der nächsten Lektion werden wir uns damit beschäftigen, [wie CSS strukturiert ist](/de/docs/Learn/CSS/First_steps/How_CSS_is_structured).

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
