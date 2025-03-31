---
title: Richtlinien für das Schreiben von Codebeispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

Dieser Artikel beschreibt Richtlinien für den Code-Stil und die Formatierung von Codebeispielen auf MDN Web Docs, unabhängig von der Programmiersprache. Für Richtlinien bezüglich der Prosatexte und anderer Inhalte siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologie-spezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Prinzipien für Codebeispiele

Es gibt eine übergreifende Überlegung, die Sie im Auge behalten müssen: **Die Leser werden Beispiele kopieren und in ihren eigenen Code einfügen und möglicherweise in der Produktion einsetzen.** Daher sollten Sie sicherstellen, dass Codebeispiele verwendbar sind, allgemein akzeptierten Best Practices folgen und nichts tun, was eine Anwendung unsicher, ineffizient, aufgebläht oder unzugänglich macht.

Wenn das Codebeispiel nicht ausführbar oder nicht produktionsfähig ist, fügen Sie eine Warnung in einen Codekommentar und in den erklärenden Text ein; machen Sie z. B. deutlich, wenn es sich nur um einen Ausschnitt und nicht um ein vollständiges Beispiel handelt. Dies bedeutet auch, dass Sie alle erforderlichen Informationen zum Ausführen des Beispiels bereitstellen sollten, einschließlich Abhängigkeiten und Setup-Informationen.

Codebeispiele sollten einfach genug sein, um verständlich zu sein, aber komplex genug, um etwas Interessantes und (vorzugsweise) Nützliches zu tun. Das Ziel ist es nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und hervorragende Funktionalität bietet, sondern reduzierte Arbeitsbeispiele zu teilen, die schnell verstanden und erlernt werden können.

Einige weitere allgemeine Richtlinien umfassen:

- Codebeispiele sollten kurz sein und idealerweise nur das Merkmal zeigen, das Sie unmittelbar interessiert.
- Schreiben Sie Ihren Code so verständlich wie möglich, auch wenn es nicht der effizienteste Weg ist, ihn zu schreiben.
- Fügen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere solche Abhängigkeiten hinzu. Diese machen den Code weniger portabel und schwerer ausführbar und verständlich. Verwenden Sie, wo möglich, Vanilla-Code.
- Gehen Sie nicht von Kenntnissen der Leser über Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Funktionen aus. Verwenden Sie z. B. Klassennamen, die innerhalb des Beispiels Sinn machen, anstatt solche, die für BEM- oder Bootstrap-Benutzer Sinn machen.
- Seien Sie inklusiv in Ihren Codebeispielen; bedenken Sie, dass MDN-Leser aus der ganzen Welt kommen und in ihrer ethnischen Herkunft, Religion, ihrem Alter, Geschlecht usw. vielfältig sind. Stellen Sie sicher, dass der Text in Codebeispielen diese Vielfalt widerspiegelt und alle Menschen einbezieht.
- Verwenden Sie keine veralteten Funktionen zur Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Falle von API-Demos, wenn Sie mehrere APIs zusammen verwenden, zeigen Sie an, welche APIs enthalten sind und welche Funktionen von welcher kommen.

## MDN-Code-Stil und Formatierung

Meinungen zur korrekten Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab. Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten und Themenfremde Diskussionen zu vermeiden. Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Abgesehen von der automatisierten Formatierung gibt es einige weitere Regeln für Codebeispiele auf MDN, damit das Ergebnis gut gerendert wird.

### Wählen Sie die richtige Sprache

Um eine ordnungsgemäße Formatierung und Syntaxhervorhebung von Codeblöcken zu gewährleisten, geben Sie die Sprache des Codeblocks korrekt an. Siehe [Beispiel-Codeblöcke in MDN-Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details zum Anfordern einer neuen Sprache.

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache auf `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Wenn die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie die Sprache eines Codeblocks nicht auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte in der Prettier-Formatierung und der Syntaxhervorhebung haben kann.

### Code-Zeilenlänge

Codezeilen sollten nicht so lang sein, dass sie horizontales Scrollen zum Lesen erfordern. Brechen Sie lange Zeilen an natürlichen Trennpunkten für die Lesbarkeit um, aber nicht auf Kosten der besten Praktiken. Zum Beispiel ist das nicht ideal:

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

### Codeblock-Höhe

Codeblöcke sollten so lang wie nötig, aber nicht länger sein. Idealerweise streben Sie etwas Kurzes an, etwa 15–25 Zeilen. Wenn ein Codeblock deutlich länger wird, sollten Sie erwägen, den nützlichsten Teil zu zeigen und auf ein vollständiges Beispiel in einem GitHub-Repo, Gist oder CodePen zu verlinken.

### Inline-Code-Formatierung

Verwenden Sie die Inline-Code-Syntax, um Funktionsnamen, Variablennamen und Methodennamen zu markieren. Zum Beispiel wird „die `frenchText()`-Funktion“ in Markdown geschrieben als:

```md
the `frenchText()` function
```

Methodennamen sollten von einem Paar Klammern gefolgt werden: zum Beispiel `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für die ordnungsgemäße Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele ordnungsgemäß auf MDN Web Docs angezeigt werden. Sie sollten auch die Reaktionsfähigkeit berücksichtigen, indem Sie Codebeispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Codebeispiels

- **Setzen Sie die Breite auf 100%**: Der Hauptinhalt auf MDN Web Docs ist auf Desktop-Geräten etwa 700px breit, sodass die eingebetteten Codebeispiele bei dieser Breite gut aussehen müssen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für die Breite des gerenderten Codebeispiels beizubehalten, um die maximale Lesbarkeit auf dem Bildschirm zu gewährleisten.

### Farbe im gerenderten Codebeispiel

Verwenden Sie Schlüsselwörter für primäre und andere "einfache" Farben, zum Beispiel:

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

### Hervorhebung von Beispielen als gut oder schlecht

Sie werden auf dieser Seite bemerken, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke gerendert werden, während die Codeblöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis gerendert werden.

Sie können denselben Stil verwenden, während Sie Codebeispiele schreiben. Sie müssen diesen Stil nicht überall verwenden - nur an Stellen, an denen Sie speziell auf gute und schlechte Nutzung in Codebeispielen hinweisen möchten.

Ein Codeblock wird in Markdown mit "Code fences" geschrieben, um den Codeblock zu markieren, gefolgt von der Sprache in der Info-Zeichenkette. Zum Beispiel:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach der Sprachzeichenkette hinzu, so:

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

Verwenden Sie den Platzhaltertext "Lorem Ipsum", der von [lipsum.com](https://www.lipsum.com/) oder dem [Lorem Ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) VS Code Plugin generiert wird.
