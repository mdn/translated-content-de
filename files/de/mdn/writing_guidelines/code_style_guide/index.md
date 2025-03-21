---
title: Richtlinien für das Schreiben von Codebeispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 782bf3277d2de6e81a1700067a6925bb916be822
---

Dieser Artikel beschreibt Richtlinien für den Code-Stil und die Formatierung von Codebeispielen in den MDN Web Docs, unabhängig von der Programmiersprache. Für Richtlinien zu Prosa und anderen Inhalten siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technikspezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Grundsätze für Codebeispiele

Es gibt eine übergeordnete Überlegung, die Sie im Hinterkopf behalten müssen: **Leser werden Beispiele in ihren eigenen Code kopieren und einfügen und möglicherweise in die Produktion übernehmen.** Daher sollten Sie sicherstellen, dass Codebeispiele verwendbar sind, allgemein akzeptierte Best Practices befolgen und nichts tun, was eine Anwendung unsicher, ineffizient, aufgebläht oder unzugänglich macht.

Wenn das Codebeispiel nicht ausführbar oder produktionsreif ist, fügen Sie eine Warnung in einem Codekommentar und im erläuternden Text ein; zum Beispiel, wenn es sich nur um ein Snippet und nicht um ein vollständiges Beispiel handelt, machen Sie dies deutlich. Das bedeutet auch, dass Sie alle notwendigen Informationen bereitstellen sollten, um das Beispiel auszuführen, einschließlich aller Abhängigkeiten und Einrichtungsinformationen.

Codebeispiele sollten einfach genug sein, um verständlich zu sein, aber komplex genug, um etwas Interessantes und (vorzugsweise) Nützliches zu tun. Ziel ist es nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionalität bietet, sondern reduzierte, funktionierende Beispiele zu teilen, die so schnell wie möglich verstanden und gelernt werden können.

Einige weitere allgemeine Richtlinien sind:

- Codebeispiele sollten kurz sein und idealerweise nur die Funktion zeigen, an der Sie gerade interessiert sind.
- Schreiben Sie Ihren Code so verständlich wie möglich, auch wenn es nicht der effizienteste Weg ist, ihn zu schreiben.
- Fügen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Preprozessoren und andere solche Abhängigkeiten ein. Sie machen den Code weniger portabel und schwerer zu verstehen und auszuführen. Verwenden Sie nach Möglichkeit Vanilla-Code.
- Gehen Sie nicht von der Kenntnis von Bibliotheken, Frameworks, Preprozessoren oder anderen nicht nativen Funktionen der Leser aus. Verwenden Sie zum Beispiel Klassennamen, die im Beispiel sinnvoll sind, anstatt Klassennamen, die für BEM- oder Bootstrap-Nutzer sinnvoll sind.
- Seien Sie inklusiv in Ihren Codebeispielen; bedenken Sie, dass MDN-Leser aus der ganzen Welt kommen und vielfältig in ihren Ethnien, Religionen, Altersgruppen, Geschlechtern usw. sind. Stellen Sie sicher, dass der Text in Codebeispielen diese Vielfalt widerspiegelt und alle Menschen einschließt.
- Verwenden Sie keine veralteten Funktionen für die Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); tun Sie es richtig.
- Im Fall von API-Demos, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Funktionen woher stammen.

## MDN Code-Stil und Formatierung

Meinungen über korrekte Einrückung, Leerzeichen und Zeilenlängen sind immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab. In den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten und off-topic Diskussionen zu vermeiden. Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu lernen, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Neben der automatisierten Formatierung gibt es ein paar andere Regeln für Codebeispiele auf MDN, damit das Ergebnis gut gerendert wird.

### Wählen Sie die richtige Sprache

Um sicherzustellen, dass Codeblöcke ordnungsgemäß formatiert und die Syntax hervorgehoben wird, geben Sie die Sprache des Codeblocks korrekt an. Siehe [Beispiel-Codeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Einzelheiten, wie Sie eine neue Sprache anfordern können.

Wenn es sich bei dem Codeblock um Pseudocode, die Ausgabe eines Befehls oder anderweitig nicht um eine Programmiersprache handelt, stellen Sie die Sprache auf `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Wenn die gewünschte Sprache von MDN noch nicht unterstützt wird, setzen Sie **nicht** die Sprache eines Codeblocks auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte bei der Prettier-Formatierung und der Syntaxhervorhebung haben kann.

### Codezeilenlänge

Codezeilen sollten nicht so lang sein, dass sie zum Lesen horizontales Scrollen erfordern. Brechen Sie lange Zeilen an natürlichen Stellen, um der Lesbarkeit willen, aber nicht auf Kosten von Best Practices. Zum Beispiel ist dies nicht ideal:

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

Das ist besser, aber etwas ungeschickt:

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

Noch besser ist es, einen Template-String zu verwenden:

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### Höhe des Codeblocks

Codeblöcke sollten so lang wie nötig, aber nicht länger sein. Idealerweise sollten sie etwas Kurzes, wie 15-25 Zeilen, anstreben. Wenn ein Codeblock viel länger wird, sollten Sie in Betracht ziehen, den nützlichsten Teil zu zeigen und auf ein vollständiges Beispiel in einem GitHub-Repo, Gist oder CodePen zu verlinken.

### Inline-Code-Formatierung

Verwenden Sie die Inline-Code-Syntax, um Funktionsnamen, Variablennamen und Methodennamen zu kennzeichnen. Zum Beispiel: "die `frenchText()`-Funktion" wird in Markdown geschrieben als:

```md
the `frenchText()` function
```

Methodennamen sollten von einem Paar Klammern gefolgt werden: zum Beispiel, `doSomethingUseful()`. Die Klammern helfen dabei, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für die ordnungsgemäße Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele in den MDN Web Docs richtig angezeigt werden. Sie sollten auch die Reaktionsfähigkeit berücksichtigen und Codebeispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Codebeispiels

- **Stellen Sie die Breite auf 100 % ein**: Die Hauptinhaltsfläche in den MDN Web Docs ist auf Desktops etwa 700 px breit, daher müssen die eingebetteten Code-Beispiele bei dieser Breite gut aussehen.
- **Stellen Sie die Höhe unter 700 px ein**: Wir empfehlen, diese Höhe für die gerenderte Codebeispielbreite beizubehalten, um die bestmögliche Bildschirmlesbarkeit zu gewährleisten.

### Farbe im gerenderten Codebeispiel

Verwenden Sie Schlüsselwörter für primäre und andere "grundlegende" Farben, zum Beispiel:

```css example-good
color: black;
color: white;
color: red;
```

Verwenden Sie `rgb()` für komplexere Farben (einschließlich halbtransparenter):

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

### Beispiele als gut oder schlecht hervorheben

Auf dieser Seite werden Sie feststellen, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke dargestellt werden, und die Codeblöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis dargestellt werden.

Sie können denselben Stil verwenden, während Sie Codebeispiele schreiben. Sie müssen diesen Stil nicht überall verwenden – nur an Stellen, an denen Sie besonders auf gutes und schlechtes Verhalten in Codebeispielen hinweisen möchten.

Ein Codeblock wird in Markdown mit "code fences" geschrieben, um den Codeblock zu kennzeichnen, gefolgt von der Sprache im Informations-String. Zum Beispiel:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach dem Sprachstring hinzu, so:

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

## Platzhaltertext

Verwenden Sie den Platzhaltertext "Lorem Ipsum", der von [lipsum.com](https://www.lipsum.com) oder dem [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) VS Code Plugin erzeugt wird.
