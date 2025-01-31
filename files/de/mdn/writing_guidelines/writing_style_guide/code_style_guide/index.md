---
title: Leitfaden zum Schreiben von Code-Beispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Die in diesem Artikel beschriebenen Richtlinien beziehen sich auf das Styling und die Formatierung von Code-Beispielen, unabhängig von der Programmiersprache. Für Richtlinien darüber, welche Inhalte beim Schreiben von Code-Beispielen enthalten sein sollten, siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologie-spezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Allgemeine Best Practices

Dieser Abschnitt bietet die besten Praktiken, um ein verständliches, minimales Code-Beispiel zu erstellen, das die Nutzung eines spezifischen Features oder einer Funktion demonstriert.

Code-Beispiele, die Sie zu den MDN Web Docs hinzufügen, sollten:

- einfach genug sein, um verständlich zu sein, aber
- komplex genug, um etwas Interessantes und vorzugsweise Nützliches zu machen.

Es gibt eine übergeordnete Überlegung, die Sie im Auge behalten müssen: **Leser werden den Code in ihrem eigenen Code kopieren und einfügen und möglicherweise in die Produktion übernehmen.**

Daher sollten Sie sicherstellen, dass das Code-Beispiel nutzbar ist, allgemein akzeptierte Best Practices befolgt und **nichts tut**, was dazu führt, dass eine Anwendung unsicher, extrem ineffizient, überladen oder unzugänglich wird. Wenn das Code-Beispiel nicht lauffähig oder produktionstauglich ist, fügen Sie unbedingt eine Warnung in einem Code-Kommentar und im erläuternden Text hinzu; zum Beispiel, wenn es nur ein Ausschnitt und kein vollständiges Beispiel ist, machen Sie dies deutlich. Das bedeutet auch, dass Sie **alle** Informationen bereitstellen sollten, die notwendig sind, um das Beispiel auszuführen, einschließlich aller Abhängigkeiten und Setup-Informationen.

Code-Beispiele sollten so eigenständig und leicht verständlich wie möglich sein. Das Ziel ist es nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionalität bietet, sondern reduzierte, funktionierende Beispiele zu erstellen, die so schnell wie möglich verstanden werden können.

Einige weitere allgemeine Best Practices umfassen:

- Das Code-Beispiel sollte kurz sein und idealerweise nur das Feature zeigen, das Sie gerade interessiert.
- **Nur** Code einschließen, der für das Beispiel wesentlich ist. Eine große Menge irrelevanten Codes kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständigeres, längeres Beispiel bereitstellen möchten, legen Sie es in eines unserer [GitHub-Repos](https://github.com/mdn/) (oder ein JS Bin, CodePen oder ähnliches) und geben Sie dann den Link zur vollständigen Version ober- oder unterhalb des Samples an.
- Keine unnötige serverseitige Code, Bibliotheken, Frameworks, Präprozessoren und ähnliche Abhängigkeiten einschließen. Sie machen den Code weniger portabel und schwerer zu laufen und zu verstehen. Wo möglich, verwenden Sie reinen Code.
- Gehen Sie nicht von einer Leserkenntnis irgendwelcher Bibliotheken, Frameworks, Präprozessoren oder anderer nicht native Features aus. Verwenden Sie zum Beispiel Klassennamen, die innerhalb des Beispiels Sinn ergeben, anstatt Klassennamen, die für BEM- oder Bootstrap-Nutzer sinnvoll sind.
- Schreiben Sie Ihren Code so klar und verständlich wie möglich, auch wenn es nicht der effizienteste Weg ist, ihn zu schreiben.
- Seien Sie inklusiv in Ihren Code-Beispielen; Bedenken Sie, dass die Leser von MDN aus der ganzen Welt kommen und vielfältige Ethnien, Religionen, Altersgruppen, Geschlechter usw. repräsentieren. Stellen Sie sicher, dass Texte in Code-Beispielen diese Vielfalt reflektieren und alle Menschen einschließen.
- Verwenden Sie schlechte Praktiken nicht aus Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Falle von API-Demos, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Features von wo kommen.

## Richtlinien zur Formatierung

Meinungen über korrekte Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um ablenkende Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

Diese MDN Web Docs-Richtlinien zur Formatierung von Code-Beispielen sind auch gute Praktiken, wenn Sie selbst Code schreiben.

### Auswahl einer Syntax-Sprache

Um die richtige Formatierung und Syntaxhervorhebung von Codeblöcken sicherzustellen, müssen Autoren die Sprache des Codeblocks, den sie schreiben, angeben. Siehe [Beispiel-Codeblocks in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen und Informationen dazu, wie Sie eine neue Sprache anfordern können.

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, legen Sie die Sprache explizit auf `plain` fest.

> [!WARNING]
> Wenn die gewünschte Sprache von MDN noch nicht unterstützt wird, legen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache fest, da dies unbeabsichtigte Nebenwirkungen bei der Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Zeilenlänge des Codes

- Codezeilen sollten nicht so lang sein, dass sie zum Lesen horizontal gescrollt werden müssen.
- Als empfohlene Praxis sollten Codezeilen maximal 80 Zeichen lang sein (64 für [interaktive Beispiele](https://github.com/mdn/interactive-examples)).
- Brechen Sie lange Zeilen an natürlichen Trennpunkten, um die Lesbarkeit zu fördern, aber nicht auf Kosten von Best Practices.

Zum Beispiel, dies ist nicht ideal:

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

Noch besser ist es, ein Template-Literal zu verwenden:

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

```js example-good
if (
  obj.CONDITION ||
  obj.OTHER_CONDITION ||
  obj.SOME_OTHER_CONDITION ||
  obj.YET_ANOTHER_CONDITION
) {
  /* something */
}

const toolkitProfileService = Components.classes[
  "@mozilla.org/toolkit/profile-service;1"
].createInstance(Components.interfaces.nsIToolkitProfileService);
```

### Höhe des Codeblocks

Codeblöcke sollten genau so lang sein wie nötig, aber nicht länger. Idealerweise zielen Sie auf etwa 15-25 Zeilen. Wenn ein Codeblock viel länger wird, ziehen Sie in Erwägung, nur den nützlichsten Ausschnitt zu zeigen und auf das vollständige Beispiel in einem GitHub-Repo oder CodePen zu verlinken.

#### Inline Code-Formatierung

Verwenden Sie Inline-Code-Syntax (\`), um Funktionsnamen, Variablennamen und Methodennamen zu kennzeichnen. Zum Beispiel: "die `frenchText()` Funktion".

**Methodennamen sollten von einem Paar Klammern gefolgt werden**, zum Beispiel: `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Codebegriffen zu unterscheiden.

## Richtlinien für korrekte Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Code-Beispiele korrekt auf den MDN Web Docs angezeigt werden. Sie sollten auch die Reaktionsfähigkeit in Betracht ziehen, indem Sie Code-Beispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Code-Beispiels

- **Setzen Sie die Breite auf 100%**: Die Hauptinhaltsfläche auf MDN Web Docs ist ungefähr 700px breit auf dem Desktop, daher müssen die eingebetteten Code-Beispiele in dieser Breite gut aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe beizubehalten, um die maximale Lesbarkeit auf dem Bildschirm sicherzustellen.

### Farbe im gerenderten Code-Beispiel

- Verwenden Sie Schlüsselwörter für primäre und andere "einfache" Farben, z.B.:

  ```css example-good
  color: black;
  color: white;
  color: red;
  ```

- Verwenden Sie `rgb()` für komplexere Farben (einschließlich halbtransparenter):

  ```css example-good
  color: rgb(0 0 0 / 50%);
  color: rgb(248 242 230);
  ```

- Für Hex-Farben verwenden Sie die Kurzform, wo dies relevant ist:

  ```css example-good
  color: #058ed9;
  color: #a39a92c1;
  color: #ff0;
  color: #fbfa;
  ```

  ```css-nolint example-bad
  color: #ffff00;
  color: #ffbbffaa;
  ```

### Markieren Sie gerenderte Beispiele als gut oder schlecht

Auf dieser Seite werden Sie feststellen, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke gerendert werden, und die Codeblöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis.

Sie können den gleichen Stil beim Schreiben von Code-Beispielen verwenden. Sie müssen diesen Stil nicht überall verwenden — nur auf Seiten, auf denen Sie speziell gute und schlechte Praktiken in Ihren Code-Beispielen hervorheben möchten.

Um diese Darstellung zu erreichen, verwenden Sie "Code-Zäune", um den Codeblock zu markieren, gefolgt von der Sprachinformationszeichenkette. Zum Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach der Sprachzeichenkette hinzu, wie folgt:

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

Diese werden gerendert als:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
