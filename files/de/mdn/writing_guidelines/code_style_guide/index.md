---
title: Richtlinien zum Schreiben von Code-Beispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 9194a6cddba510f07e283015d4b955d1b6a3eb9d
---

Dieser Artikel beschreibt Code-Stil- und Formatierungsrichtlinien für Code-Beispiele auf den MDN Web Docs, unabhängig von der Programmiersprache.
Für Richtlinien zu Prosa und anderen Inhalten siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologie-spezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Prinzipien für Code-Beispiele

Es gibt eine übergeordnete Überlegung, die Sie beachten müssen: **Leser werden Beispiele kopieren und in ihren eigenen Code einfügen und möglicherweise in Produktion bringen.**
Daher sollten Sie sicherstellen, dass Code-Beispiele nutzbar sind, allgemein akzeptierte Best Practices befolgen und nichts tun, was eine Anwendung unsicher, ineffizient, überladen oder unzugänglich macht.

Wenn das Code-Beispiel nicht ausführbar oder produktionsreif ist, fügen Sie eine Warnung in einem Code-Kommentar und im erläuternden Text hinzu; zum Beispiel, wenn es sich nur um einen Ausschnitt und kein vollständiges Beispiel handelt, machen Sie dies deutlich. Das bedeutet auch, dass Sie alle notwendigen Informationen bereitstellen sollten, um das Beispiel auszuführen, einschließlich aller Abhängigkeiten und Setup-Informationen.

Code-Beispiele sollten einfach genug sein, um verständlich zu sein, aber komplex genug, um etwas Interessantes zu tun und (vorzugsweise) nützlich zu sein.
Das Ziel ist es nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionalität bietet, sondern reduzierende Arbeitsbeispiele zu teilen, die schnell verstanden und gelernt werden können.

Einige weitere allgemeine Richtlinien umfassen:

- Code-Beispiele sollten kurz sein und idealerweise nur das Feature zeigen, das Sie gerade interessiert.
- Schreiben Sie Ihren Code so verständlich wie möglich, auch wenn es nicht der effizienteste Weg ist, ihn zu schreiben.
- Binden Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere solche Abhängigkeiten ein. Sie machen den Code weniger portabel und schwerer auszuführen und zu verstehen. Verwenden Sie so weit wie möglich nativen Code.
- Gehen Sie nicht davon aus, dass Leser Kenntnisse über Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Funktionen haben. Verwenden Sie zum Beispiel Klassennamen, die innerhalb des Beispiels sinnvoll sind, anstatt Klassennamen, die für BEM- oder Bootstrap-Nutzer sinnvoll sind.
- Seien Sie inklusiv in Ihren Code-Beispielen; bedenken Sie, dass MDN-Leser aus aller Welt kommen und vielfältig sind in ihren ethnischen Hintergründen, Religionen, Altersgruppen, Geschlechtern usw. Stellen Sie sicher, dass der Text in Code-Beispielen diese Vielfalt widerspiegelt und alle Menschen einbezieht.
- Verwenden Sie keine veralteten Funktionen der Kürze halber (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Fall von API-Demos, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Funktionen woher kommen.

## MDN-Code-Stil und Formatierung

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen sind immer umstritten gewesen. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.
Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten und off-topic Diskussionen zu vermeiden. Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Abgesehen von der automatisierten Formatierung gibt es einige andere Regeln für Code-Beispiele auf MDN, damit das Ergebnis gut gerendert wird.

### Wählen Sie die richtige Sprache

Um die korrekte Formatierung und Syntaxhervorhebung von Code-Blöcken sicherzustellen, geben Sie die Sprache des Code-Blocks ordnungsgemäß an.
Siehe [Beispiel-Code-Blöcke in MDN-Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste von Sprachen, die von MDN unterstützt werden, sowie Details, wie eine neue Sprache angefordert wird.

Wenn der Code-Block Pseudocode ist, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache, setzen Sie die Sprache auf `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Wenn die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie die Sprache eines Code-Blocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte mit der Prettier-Formatierung und der Syntaxhervorhebung haben kann.

### Zeilenlänge des Codes

Codezeilen sollten nicht so lang sein, dass zum Lesen ein horizontales Scrollen erforderlich ist.
Brechen Sie lange Zeilen an natürlichen Stellen für die Lesbarkeit, aber nicht auf Kosten von Best Practices.
Zum Beispiel ist dies nicht optimal:

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

Dies ist besser, aber etwas umständlich:

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

Noch besser ist es, ein Template Literal zu verwenden:

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### Höhe des Code-Blocks

Code-Blöcke sollten so lang wie nötig sein, aber nicht länger. Idealerweise streben Sie etwas Kurzes an, wie 15-25 Zeilen. Wenn ein Code-Block wesentlich länger sein wird, erwägen Sie, den nützlichsten Teil zu zeigen und auf ein vollständiges Beispiel in einem GitHub-Repo, Gist oder CodePen zu verlinken.

### Inline-Code-Formatierung

Verwenden Sie Inline-Code-Syntax, um Funktionsnamen, Variablennamen und Methodennamen zu markieren. Zum Beispiel: "die Funktion `frenchText()`" wird in Markdown als:

```md
the `frenchText()` function
```

geschrieben. Methodennamen sollten von einem Paar Klammern gefolgt werden: zum Beispiel `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien zur korrekten Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen erstellten Code-Beispiele auf den MDN Web Docs korrekt angezeigt werden. Sie sollten auch die Reaktionsfähigkeit berücksichtigen, indem Sie Code-Beispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Code-Beispiels

- **Stellen Sie die Breite auf 100% ein**: Der Hauptinhalt auf den MDN Web Docs ist auf dem Desktop etwa 700px breit, daher müssen die eingebetteten Code-Beispiele bei dieser Breite gut aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für die Breite des gerenderten Code-Beispiels beizubehalten, um maximale Lesbarkeit auf dem Bildschirm zu gewährleisten.

### Farbe im gerenderten Code-Beispiel

Verwenden Sie Schlüsselwörter für primäre und andere "Basis"-Farben, zum Beispiel:

```css example-good
color: black;
color: white;
color: red;
```

Verwenden Sie `rgb()` für komplexere Farben (einschließlich teilweise transparenter):

```css example-good
color: rgb(0 0 0 / 50%);
color: rgb(248 242 230);
```

Für Hex-Farben verwenden Sie die Kurzform, wo relevant:

```css example-good
color: #058ed9;
color: #a39a92c1;
color: #ff0;
color: #fbfa;
```

Im Gegensatz zu:

```css-nolint example-bad
color: #ffff00;
color: #ffbbffaa;
```

### Hervorhebung von Beispielen als gut oder schlecht

Sie werden auf dieser Seite feststellen, dass die Code-Blöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke gerendert werden, und die Code-Blöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis.

Sie können denselben Stil verwenden, während Sie Code-Beispiele schreiben. Sie müssen diesen Stil nicht überall verwenden — nur an Stellen, an denen Sie speziell auf gute und schlechte Verwendung in Code-Beispielen hinweisen möchten.

Ein Code-Block wird in Markdown mit "Code-Zäunen" geschrieben, um den Code-Block abzugrenzen, gefolgt von der Sprache in der Info-Zeichenkette. Zum Beispiel:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Um den Code-Block als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach der Sprachzeichenkette hinzu, so:

````md
```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```
````

Diese werden gerendert als:

```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```

## Richtlinien für die Verwendung von Platzhaltertext

Verwenden Sie den Platzhaltertext "lorem-ipsum", der von [lipsum.com](https://www.lipsum.com/) oder dem [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) VS Code-Plugin generiert wurde. Der Standardtext "lorem-ipsum" ist in unserer Rechtschreibprüfungskonfiguration enthalten, sodass er in IDEs oder in Tests während der Code-Überprüfung nicht als Tippfehler gemeldet wird. Die Verwendung eines konsistenten Platzhaltertextes erleichtert die Überprüfung von Beispiel-Code, insbesondere wenn er wiederholt auftritt. Es hilft auch, Beispiele klar für Illustrationszwecke zu halten und die Leser nicht mit irrelevanten Inhalten abzulenken.
