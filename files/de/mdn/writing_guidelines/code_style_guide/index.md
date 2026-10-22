---
title: Richtlinien für Codebeispiele
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: c9c2a211595d962118504b599debbf39d6aaad3f
---

Dieser Artikel beschreibt Richtlinien für den Codestil und die Formatierung von Codebeispielen auf MDN Web Docs, unabhängig von der Programmiersprache.
Richtlinien für Fließtext und andere Inhalte finden Sie im [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Technologiespezifische Richtlinien finden Sie in den folgenden Artikeln:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Richtlinien für Shell-Prompts](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Grundsätze für Codebeispiele

Eine übergeordnete Überlegung sollten Sie stets im Blick behalten: **Lesende werden Beispiele kopieren, in ihren eigenen Code einfügen und möglicherweise produktiv einsetzen.**
Stellen Sie deshalb sicher, dass Codebeispiele verwendbar sind, allgemein anerkannten Best Practices entsprechen und keine Anwendungen unsicher, ineffizient, unnötig umfangreich oder unzugänglich machen.

Führen Sie jedes Codebeispiel aus und testen Sie es, bevor Sie es einreichen – unabhängig davon, mit welchen Werkzeugen Sie es erstellt haben.
Fügen Sie keinen Code ein, den Sie nicht überprüft haben.

Wenn ein Codebeispiel nur ein unvollständiger Ausschnitt ist, machen Sie deutlich, dass es sich nicht um ein vollständiges Beispiel handelt. Geben Sie alle Informationen an, die zum Ausführen des Beispiels nötig sind, einschließlich etwaiger Abhängigkeiten und Einrichtungsschritte. Wenn das Beispiel nicht für den produktiven Einsatz geeignet ist, weisen Sie sowohl in einem Codekommentar als auch im erläuternden Text darauf hin.

Codebeispiele sollten einfach genug sein, um verständlich zu bleiben, aber komplex genug, um etwas Interessantes und möglichst Nützliches zu tun.
Das Ziel ist nicht unbedingt, effizienten, raffinierten Code mit großem Funktionsumfang zu schreiben, der Fachleute beeindruckt. Vielmehr sollten Sie auf das Wesentliche reduzierte, funktionsfähige Beispiele zeigen, die sich möglichst schnell verstehen lassen und aus denen man lernen kann.

Weitere allgemeine Richtlinien:

- Codebeispiele sollten kurz sein und idealerweise nur die Funktion zeigen, um die es unmittelbar geht.
- Schreiben Sie Ihren Code so verständlich wie möglich, auch wenn dies nicht die effizienteste Lösung ist.
- Verzichten Sie auf unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und ähnliche Abhängigkeiten. Sie machen den Code weniger portabel und erschweren seine Ausführung und das Verständnis. Verwenden Sie nach Möglichkeit nativen Code.
- Setzen Sie nicht voraus, dass Lesende mit Bibliotheken, Frameworks, Präprozessoren oder anderen nicht nativen Funktionen vertraut sind. Verwenden Sie beispielsweise Klassennamen, die im Kontext des Beispiels sinnvoll sind, statt solcher, die nur für Personen mit BEM- oder Bootstrap-Kenntnissen verständlich sind.
- Gestalten Sie Ihre Codebeispiele inklusiv. Bedenken Sie, dass die Lesenden von MDN aus aller Welt kommen und sich hinsichtlich ethnischer Zugehörigkeit, Religion, Alter, Geschlecht und anderer Merkmale unterscheiden. Achten Sie darauf, dass Texte in Codebeispielen diese Vielfalt widerspiegeln und niemanden ausschließen.
- Verwenden Sie keine veralteten Funktionen, nur um Code zu sparen (etwa Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)). Setzen Sie stattdessen auf eine korrekte Lösung.
- Wenn Sie in API-Demos mehrere APIs gemeinsam verwenden, erläutern Sie, welche APIs enthalten sind und welche Funktionen jeweils von welcher API stammen.

### Browser-Unterstützung

Nennen Sie weder in Codekommentaren noch im Fließtext unterstützte Browser und deren Versionen, da diese Informationen schnell veralten.

Wenn Sie Codebeispiele für eine Technologie erstellen, die noch nicht in allen wichtigen Browsern verfügbar ist, sollten Sie [Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) einsetzen, um ein alternatives Verhalten bereitzustellen oder eine Meldung anzuzeigen, dass der Browser der lesenden Person die gezeigte Funktion nicht unterstützt.

Lassen Sie die gerenderte Ausgabe von Codebeispielen auch dann sichtbar, wenn der Browser der lesenden Person die gezeigte Funktion nicht unterstützt. So können Lesende den Code mit seinem Ergebnis vergleichen und sehen, wie sich das Beispiel ohne die Funktion verhält. Zeigen Sie eine Meldung zur Browser-Unterstützung neben der gerenderten Ausgabe an, statt diese auszublenden oder zu entfernen. So lässt sich erklären, warum das Ergebnis möglicherweise anders aussieht als beabsichtigt.

Verwenden Sie beispielsweise in CSS-Codebeispielen die [`@supports`-At-Regel mit dem `not`-Operator](/de/docs/Web/CSS/Reference/At-rules/@supports#the_not_operator), um eine Meldung zur Browser-Unterstützung anzuzeigen, wenn der Browser der lesenden Person die gezeigte Funktion nicht unterstützt.

#### HTML

```html live-sample___corner-shape-support
<div>Nice scooped corners</div>
```

#### CSS

```css live-sample___corner-shape-support
body {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 240px;
  margin: 20px auto;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  background-color: cyan;
  border-radius: 30px;
  box-shadow: 1px 1px 3px gray;
}

@supports not (corner-shape: scoop) {
  body::before {
    content: "Your browser does not support the 'corner-shape' property.";
    color: black;
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___corner-shape-support
div {
  corner-shape: scoop;
}
```

#### Ergebnis

{{EmbedLiveSample("corner-shape-support", "100%", "240")}}

Vergleichen Sie die gerenderte Ausgabe in verschiedenen Browsern, um zu sehen, wie sich das Beispiel verhält, wenn `corner-shape` unterstützt wird und wenn nicht.

In Ihren eigenen Beispielen können Sie den CSS-Block für die Meldung zur Browser-Unterstützung als [`hidden`](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples#hiding_code) markieren. So wirken sich seine Stile auf das Live-Beispiel aus, ohne dass der Codeblock im Artikel angezeigt wird.

## MDN-Codestil und -Formatierung

Ansichten über die richtige Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen darüber lenken vom Erstellen und Pflegen der Inhalte ab.
Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) zur Codeformatierung, um einen einheitlichen Codestil beizubehalten und themenfremde Diskussionen zu vermeiden. Die aktuellen Regeln finden Sie in unserer [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json). Weitere Informationen bietet die [Prettier-Dokumentation](https://prettier.io/docs/index.html).

Neben der automatischen Formatierung gelten für Codebeispiele auf MDN einige weitere Regeln, damit sie gut dargestellt werden.

### Die richtige Sprache auswählen

Geben Sie die Sprache eines Codeblocks korrekt an, damit Formatierung und Syntaxhervorhebung richtig funktionieren.
Eine Liste der von MDN unterstützten Sprachen sowie Informationen dazu, wie Sie eine neue Sprache anfragen können, finden Sie unter [Beispiel-Codeblöcke in MDN-Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks).

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache enthält, setzen Sie die Sprache auf `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Wenn MDN die gewünschte Sprache noch nicht unterstützt, setzen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache. Dies kann unbeabsichtigte Auswirkungen auf die Formatierung durch Prettier und die Syntaxhervorhebung haben.

### Zeilenlänge im Code

Codezeilen sollten nicht so lang sein, dass zum Lesen horizontal gescrollt werden muss.
Brechen Sie lange Zeilen an natürlichen Stellen um, um die Lesbarkeit zu verbessern, ohne dabei Best Practices zu vernachlässigen.
Dieses Beispiel ist nicht besonders gut:

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

Das ist besser, aber etwas umständlich:

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

Noch besser ist die Verwendung eines Template-Literals:

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### Höhe von Codeblöcken

Codeblöcke sollten so lang wie nötig, aber nicht länger sein. Streben Sie idealerweise eine kurze Länge von etwa 15 bis 25 Zeilen an. Wenn ein Codeblock deutlich länger werden müsste, zeigen Sie nur den nützlichsten Teil und verlinken Sie beispielsweise auf ein vollständiges Beispiel in einem GitHub-Repository, einem Gist oder auf CodePen.

### Formatierung von Inline-Code

Verwenden Sie die Syntax für Inline-Code, um Funktionsnamen, Variablennamen und Methodennamen auszuzeichnen. Beispielsweise wird „die Funktion `frenchText()`“ in Markdown so geschrieben:

```md
the `frenchText()` function
```

Auf Methodennamen sollte ein Klammerpaar folgen, beispielsweise `doSomethingUseful()`. Die Klammern helfen dabei, Methoden von anderen Codebegriffen zu unterscheiden.

## Richtlinien für die korrekte Darstellung

Beachten Sie diese Richtlinien, damit Ihre Codebeispiele auf MDN Web Docs korrekt dargestellt werden. Berücksichtigen Sie außerdem das responsive Design und schreiben Sie Codebeispiele so, dass sie auch auf Mobilgeräten nützlich sind.

### Größe des gerenderten Codebeispiels

- **Setzen Sie die Breite auf 100 %**: Der Hauptinhaltsbereich von MDN Web Docs ist auf Desktopgeräten etwa 700 px breit. Eingebettete Codebeispiele müssen daher bei dieser Breite gut aussehen.
- **Halten Sie die Höhe unter 700 px**: Wir empfehlen, die Höhe des gerenderten Codebeispiels unter diesem Wert zu halten, damit es möglichst gut auf dem Bildschirm lesbar ist.

### Beispiele als gut oder schlecht kennzeichnen

Auf dieser Seite werden Sie feststellen, dass Codeblöcke mit empfehlenswerten Vorgehensweisen rechts oben mit einem grünen Häkchen dargestellt werden. Codeblöcke, die schlechte Vorgehensweisen veranschaulichen, werden mit einem weißen Kreuz in einem roten Kreis dargestellt.

Diesen Stil können Sie auch für Ihre Codebeispiele verwenden. Sie müssen ihn nicht überall einsetzen, sondern nur dort, wo Sie ausdrücklich auf gute oder schlechte Verwendungsweisen hinweisen möchten.

Ein Codeblock wird in Markdown durch sogenannte „Code-Fences“ begrenzt. Darauf folgt die Sprache in der Informationszeichenfolge. Zum Beispiel:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Um den Codeblock als gutes oder schlechtes Beispiel zu kennzeichnen, fügen Sie nach der Sprachangabe `example-good` beziehungsweise `example-bad` hinzu:

````md
```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```
````

Diese werden wie folgt dargestellt:

```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```

## Richtlinien für Platzhaltertext

Verwenden Sie Lorem-ipsum-Platzhaltertext, der mit [lipsum.com](https://www.lipsum.com/) oder der VS-Code-Erweiterung [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) erzeugt wurde. Der standardmäßige Lorem-ipsum-Text ist in der Konfiguration unserer Rechtschreibprüfung enthalten und wird daher weder in IDEs noch bei Tests während der Codeüberprüfung als Tippfehler gemeldet. Einheitlicher Platzhaltertext erleichtert die Überprüfung von Beispielcode, insbesondere wenn er wiederholt vorkommt. Außerdem macht er deutlich, dass die Beispiele nur der Veranschaulichung dienen, und lenkt Lesende nicht durch irrelevante Inhalte ab.
