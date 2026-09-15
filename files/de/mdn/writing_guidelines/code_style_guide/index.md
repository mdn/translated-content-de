---
title: Leitlinien zum Schreiben von Codebeispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: ad54ecbfce4d029128ac83686707dd500e8e7b1c
---

Dieser Artikel beschreibt Leitlinien für Codestil und Formatierung von Codebeispielen in MDN Web Docs, unabhängig von der Programmiersprache.
Leitlinien zu Fließtext und anderen Inhalten finden Sie im [Leitfaden zum Schreibstil](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Technologiespezifische Leitlinien finden Sie in den folgenden Artikeln:

- [HTML-Leitlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Leitlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Leitlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Leitlinien für Shell-Prompts](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Grundsätze für Codebeispiele

Es gibt eine übergeordnete Überlegung, die Sie berücksichtigen müssen: **Leserinnen und Leser werden Beispiele kopieren und in ihren eigenen Code einfügen und sie möglicherweise in Produktion einsetzen.**
Daher sollten Sie sicherstellen, dass Codebeispiele verwendbar sind, allgemein anerkannten Best Practices folgen und nichts tun, was eine Anwendung unsicher, ineffizient, aufgebläht oder unzugänglich macht.

Wenn das Codebeispiel nicht ausführbar oder nicht für den Produktionseinsatz geeignet ist, fügen Sie eine Warnung in einem Codekommentar und im erläuternden Text hinzu; wenn es beispielsweise nur ein Ausschnitt und kein vollständiges Beispiel ist, machen Sie dies deutlich. Das bedeutet auch, dass Sie alle Informationen bereitstellen sollten, die zum Ausführen des Beispiels erforderlich sind, einschließlich aller Abhängigkeiten und Einrichtungsinformationen.

Codebeispiele sollten einfach genug sein, um verständlich zu sein, aber komplex genug, um etwas Interessantes und vorzugsweise Nützliches zu tun.
Das Ziel ist nicht unbedingt, effizienten, cleveren Code zu produzieren, der Expertinnen und Experten beeindruckt und über umfangreiche Funktionalität verfügt, sondern vielmehr, reduzierte funktionierende Beispiele bereitzustellen, die möglichst schnell verstanden werden können und aus denen sich lernen lässt.

Weitere allgemeine Leitlinien:

- Codebeispiele sollten kurz sein und idealerweise nur das Merkmal zeigen, das Sie unmittelbar interessiert.
- Schreiben Sie Ihren Code so verständlich wie möglich, auch wenn dies nicht die effizienteste Schreibweise ist.
- Schließen Sie keine unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren oder andere solche Abhängigkeiten ein. Sie machen den Code weniger portabel und schwieriger auszuführen und zu verstehen. Verwenden Sie nach Möglichkeit nativen Code.
- Setzen Sie kein Wissen der Leserinnen und Leser über Bibliotheken, Frameworks, Präprozessoren oder andere nicht native Merkmale voraus. Verwenden Sie beispielsweise Klassennamen, die im Kontext des Beispiels sinnvoll sind, statt Klassennamen, die für BEM- oder Bootstrap-Nutzende sinnvoll sind.
- Gestalten Sie Ihre Codebeispiele inklusiv; berücksichtigen Sie, dass MDN-Leserinnen und -Leser aus der ganzen Welt kommen und sich hinsichtlich ethnischer Zugehörigkeit, Religion, Alter, Geschlecht usw. unterscheiden. Stellen Sie sicher, dass Text in Codebeispielen diese Vielfalt widerspiegelt und alle Menschen einschließt.
- Verwenden Sie keine veralteten Merkmale aus Gründen der Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Wenn Sie bei API-Demos mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Merkmale woher stammen.

### Browserunterstützung

Geben Sie unterstützte Browser und ihre Versionen nicht in Codekommentaren oder Fließtext an, da diese Informationen schnell veralten.

Berücksichtigen Sie beim Erstellen von Codebeispielen für eine Technologie, die noch nicht in allen wichtigen Browsern verfügbar ist, die Verwendung von [Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection), um ein Fallback-Verhalten bereitzustellen oder eine Meldung anzuzeigen, dass der Browser der lesenden Person das demonstrierte Merkmal nicht unterstützt.

Lassen Sie die gerenderte Ausgabe von Codebeispielen sichtbar, auch wenn der Browser der lesenden Person das demonstrierte Merkmal nicht unterstützt. Dadurch können Leserinnen und Leser den Code mit seinem Ergebnis vergleichen und sehen, wie sich das Beispiel ohne das Merkmal verhält. Zeigen Sie neben der gerenderten Ausgabe eine Meldung zur Browserunterstützung an, statt sie auszublenden oder zu entfernen, um zu erklären, warum das Ergebnis möglicherweise von der beabsichtigten Demonstration abweicht.

Verwenden Sie beispielsweise in CSS-Codebeispielen die [`@supports`-At-Regel mit dem Operator `not`](/de/docs/Web/CSS/Reference/At-rules/@supports#the_not_operator), um eine Meldung zur Browserunterstützung anzuzeigen, wenn der Browser der lesenden Person das demonstrierte Merkmal nicht unterstützt.

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

In Ihren eigenen Beispielen können Sie den CSS-Block zur Browserunterstützung als [`hidden`](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples#hiding_code) markieren, sodass seine Stile auf das Live-Beispiel angewendet werden, ohne den Codeblock im Artikel anzuzeigen.

## MDN-Codestil und -formatierung

Meinungen über korrekte Einrückung, Leerraum und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken vom Erstellen und Pflegen von Inhalten ab.
Bei MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Codeformatierer, um den Codestil konsistent zu halten und themenfremde Diskussionen zu vermeiden. Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um sich über die aktuellen Regeln zu informieren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Neben der automatisierten Formatierung gibt es noch einige weitere Regeln für Codebeispiele auf MDN, damit das Ergebnis gut gerendert wird.

### Wählen Sie die richtige Sprache

Um eine korrekte Formatierung und Syntaxhervorhebung von Codeblöcken sicherzustellen, geben Sie die Sprache des Codeblocks korrekt an.
Eine Liste der von MDN unterstützten Sprachen sowie Details dazu, wie Sie eine neue Sprache anfordern können, finden Sie unter [Beispiel-Codeblöcke in MDN-Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks).

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache auf `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Wenn die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebenwirkungen bei der Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Länge von Codezeilen

Codezeilen sollten nicht so lang sein, dass zum Lesen horizontal gescrollt werden muss.
Brechen Sie lange Zeilen für eine bessere Lesbarkeit an natürlichen Umbruchstellen um, aber nicht auf Kosten von Best Practices.
Dieses Beispiel ist beispielsweise nicht gut:

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

Dies ist besser, aber etwas unhandlich:

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

Codeblöcke sollten so lang wie nötig sein, aber nicht länger. Streben Sie idealerweise etwas Kurzes an, etwa 15 bis 25 Zeilen. Wenn ein Codeblock deutlich länger wird, sollten Sie erwägen, den nützlichsten Teil zu zeigen und beispielsweise auf ein vollständiges Beispiel in einem GitHub-Repository, Gist oder CodePen zu verlinken.

### Inline-Codeformatierung

Verwenden Sie Inline-Codesyntax, um Funktionsnamen, Variablennamen und Methodennamen auszuzeichnen. Beispielsweise wird „die Funktion `frenchText()`“ in Markdown wie folgt geschrieben:

```md
the `frenchText()` function
```

Methodennamen sollten von einem Klammernpaar gefolgt werden, zum Beispiel `doSomethingUseful()`. Die Klammern helfen dabei, Methoden von anderen Codebegriffen zu unterscheiden.

## Leitlinien für eine korrekte Darstellung

Diese Leitlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele in MDN Web Docs korrekt angezeigt werden. Berücksichtigen Sie außerdem die Responsivität, indem Sie Codebeispiele so schreiben, dass sie auch auf Mobilgeräten nützlich sind.

### Größe des gerenderten Codebeispiels

- **Setzen Sie die Breite auf 100 %**: Der Hauptinhaltsbereich in MDN Web Docs ist auf Desktop-Geräten etwa 700 px breit. Daher müssen eingebettete Codebeispiele bei dieser Breite gut aussehen.
- **Setzen Sie die Höhe auf unter 700 px**: Für maximale Lesbarkeit auf dem Bildschirm empfehlen wir, diese Höhe für die Breite des gerenderten Codebeispiels beizubehalten.

### Beispiele als gut oder schlecht hervorheben

Auf dieser Seite werden Sie feststellen, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke gerendert werden und die Codeblöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis.

Sie können beim Schreiben von Codebeispielen denselben Stil verwenden. Sie müssen diesen Stil nicht überall verwenden — nur an Stellen, an denen Sie gute und schlechte Verwendung in Codebeispielen gezielt hervorheben möchten.

Ein Codeblock wird in Markdown mit „Code Fences“ geschrieben, die den Codeblock abgrenzen, gefolgt von der Sprache in der Infozeichenkette. Zum Beispiel:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach der Sprachzeichenkette hinzu, etwa so:

````md
```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```
````

Diese werden wie folgt gerendert:

```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```

## Leitlinien für die Verwendung von Platzhaltertext

Verwenden Sie den von [lipsum.com](https://www.lipsum.com/) generierten Platzhaltertext Lorem ipsum oder das VS-Code-Plugin [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum). Der standardmäßige Lorem-ipsum-Text ist in unserer Konfiguration für die Rechtschreibprüfung enthalten und wird daher weder in IDEs noch bei Tests während der Codeüberprüfung als Tippfehler gemeldet. Die Verwendung eines konsistenten Platzhaltertexts erleichtert die Überprüfung von Beispielcode, insbesondere wenn er wiederholt vorkommt. Sie hilft außerdem dabei, Beispiele eindeutig als Illustrationszwecke zu kennzeichnen und vermeidet, dass Leserinnen und Leser durch irrelevante Inhalte abgelenkt werden.
