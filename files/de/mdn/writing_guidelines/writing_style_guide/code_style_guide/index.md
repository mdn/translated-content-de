---
title: Richtlinien für das Schreiben von Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Die in diesem Artikel beschriebenen Richtlinien gelten für die Gestaltung und Formatierung von Codebeispielen, unabhängig von der Programmiersprache. Für Richtlinien dazu, welche Inhalte in Codebeispielen enthalten sein sollten, lesen Sie den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Technologiespezifische Richtlinien finden Sie in den folgenden Artikeln:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Allgemeine Best Practices

Dieser Abschnitt bietet Best Practices für das Erstellen eines verständlichen, minimalen Codebeispiels, um die Nutzung einer bestimmten Funktion oder eines Features zu demonstrieren.

Codebeispiele, die Sie zu MDN Web Docs hinzufügen, sollten:

- einfach genug sein, um verstanden zu werden, aber
- komplex genug, um etwas Interessantes zu leisten und vorzugsweise nützlich zu sein.

Es gibt eine übergeordnete Überlegung, die Sie stets im Hinterkopf behalten sollten: **Leser werden den Code als Beispiel kopieren und einfügen, um ihn in ihrem eigenen Code zu verwenden, möglicherweise sogar in Produktionsumgebungen.**

Deshalb sollten Sie sicherstellen, dass das Codebeispiel nutzbar ist, allgemein akzeptierten Best Practices folgt und **nichts** beinhaltet, was eine Anwendung unsicher, ineffizient, überladen oder unzugänglich macht. Wenn das Codebeispiel nicht ausführbar oder produktionsreif ist, sollten Sie dies in einem Kommentar im Code und in der begleitenden Erklärung deutlich machen; beispielsweise, wenn es nur ein Ausschnitt und kein vollständiges Beispiel ist. Geben Sie in solchen Fällen alle nötigen Informationen zur Ausführung des Beispiels an, einschließlich etwaiger Abhängigkeiten und Setup-Informationen.

Codebeispiele sollten so eigenständig und leicht verständlich wie möglich sein. Ziel ist es nicht, effizienten, cleveren Code zu erstellen, der Experten beeindruckt und hohe Funktionalität bietet, sondern reduzierte, funktionierende Beispiele zu liefern, die so schnell wie möglich verstanden werden können.

Einige weitere allgemeine Best Practices umfassen:

- Das Codebeispiel sollte kurz sein und idealerweise nur die Funktion demonstrieren, die gerade von Interesse ist.
- **Nur** Code aufnehmen, der für das Beispiel essenziell ist. Eine große Menge an irrelevanten Code kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständiges, längeres Beispiel bereitstellen möchten, stellen Sie es in einem unserer [GitHub-Repositories](https://github.com/mdn/) (oder einem JS Bin, CodePen oder ähnlichem) bereit und verlinken Sie es über oder unter dem Beispiel.
- Vermeiden Sie unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere solcher Abhängigkeiten. Diese machen den Code weniger portabel und schwerer verständlich. Verwenden Sie, wenn möglich, „Vanilla“-Code.
- Gehen Sie nicht davon aus, dass Leser Kenntnisse in Bezug auf beliebige Bibliotheken, Frameworks, Präprozessoren oder andere nicht-einheimische Funktionen haben. Verwenden Sie zum Beispiel Klassennamen, die innerhalb des Beispiels Sinn ergeben, anstatt Klassennamen, die für BEM- oder Bootstrap-Nutzer sinnvoll sind.
- Schreiben Sie Ihren Code so sauber und verständlich wie möglich, selbst wenn dies nicht die effizienteste Schreibweise ist.
- Seien Sie inklusiv in Ihren Codebeispielen; bedenken Sie, dass MDN-Leser weltweit vielfältig in Ethnizität, Religion, Alter, Geschlecht usw. sind. Stellen Sie sicher, dass der Text in Codebeispielen diese Vielfalt widerspiegelt und alle Menschen einbezieht.
- Verwenden Sie keine schlechten Praktiken der Kürze halber (wie Darstellungselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es korrekt.
- Im Falle von API-Demonstrationen: Wenn Sie mehrere APIs zusammen verwenden, machen Sie deutlich, welche APIs enthalten sind und welche Funktionen von welcher API stammen.

## Richtlinien für die Formatierung

Diskussionen über korrekte Einrückung, Leerzeichen und Zeilenlängen waren schon immer kontrovers. Solche Diskussionen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und sorgt für einen konsistenten Stil. Dennoch gibt es einige zusätzliche Regeln, die Sie beachten sollten.

Diese MDN Web Docs-Richtlinien für die Formatierung von Codebeispielen sind auch gute Praktiken beim eigenen Programmieren.

### Auswahl einer Syntaxsprache

Um eine ordnungsgemäße Formatierung und Syntaxhervorhebung von Codeblöcken zu gewährleisten, müssen Autoren die Sprache des Schreibens für den Codeblock angeben. Siehe [Beispiel-Codeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen und Details dazu, wie Sie eine neue Sprache anfordern können.

Falls der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache explizit auf `plain`.

> [!WARNING]
> Wenn die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie die Sprache des Codeblocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebenwirkungen auf die Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Codezeilenlänge

- Codezeilen sollten nicht so lang sein, dass sie für das Lesen horizontal gescrollt werden müssen.
- Brechen Sie lange Zeilen an natürlichen Unterbrechungspunkten, um die Lesbarkeit zu erhöhen, aber nicht auf Kosten bewährter Praktiken.

Zum Beispiel ist dies nicht ideal:

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

Dies ist besser, aber etwas ungeschickt:

```js
const tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign " +
  "matter may have nestled its way into his mighty throat. Many a fat alley rat " +
  "had met its demise while staring point blank down the cavernous barrel of " +
  "this awesome prowling machine.";
```

Noch besser ist es, einen Template-Literal zu verwenden:

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

Codeblöcke sollten so lang sein, wie sie sein müssen, aber nicht länger. Idealerweise zielen Sie auf etwas Kurzes wie 15-25 Zeilen. Wenn ein Codeblock wesentlich länger wird, ziehen Sie in Betracht, nur den nützlichsten Ausschnitt zu zeigen und auf das vollständige Beispiel in einem GitHub-Repo oder CodePen zu verlinken.

#### Inline-Code-Formatierung

Verwenden Sie die Inline-Code-Syntax (\`), um Funktionsnamen, Variablennamen und Methodennamen zu markieren. Zum Beispiel: "die Funktion `frenchText()`".

**Methodennamen sollten mit einem Paar Klammern versehen sein**: zum Beispiel `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für die korrekte Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele auf MDN Web Docs korrekt angezeigt werden. Sie sollten auch die Responsiveness berücksichtigen, indem Sie Codebeispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Codebeispiels

- **Stellen Sie die Breite auf 100% ein**: Der Hauptinhalt auf MDN Web Docs ist auf dem Desktop etwa 700px breit, daher sollten die eingebetteten Codebeispiele bei dieser Breite gut aussehen.
- **Legen Sie die Höhe unter 700px fest**: Wir empfehlen, diese Höhe für gerenderte Codebeispiele für maximale Bildschirmlesbarkeit beizubehalten.

### Farbe im gerenderten Codebeispiel

- Verwenden Sie Schlüsselwörter für primäre und andere "grundlegende" Farben, z. B.:

  ```css example-good
  color: black;
  color: white;
  color: red;
  ```

- Verwenden Sie `rgb()` für komplexere Farben (einschließlich halbtransparenter Farben):

  ```css example-good
  color: rgb(0 0 0 / 50%);
  color: rgb(248 242 230);
  ```

- Bei Hex-Farben verwenden Sie die Kurzform, wo relevant:

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

Auf dieser Seite werden Sie feststellen, dass Codeblöcke, die positive Praktiken repräsentieren, mit einem grünen Häkchen in der rechten Ecke gerendert sind, und solche, die schlechte Praktiken darstellen, mit einem weißen Kreuz in einem roten Kreis.

Sie können denselben Stil verwenden, wenn Sie Codebeispiele schreiben. Sie müssen diesen Stil nicht überall anwenden — nur auf Seiten, bei denen Sie speziell auf gute und schlechte Praktiken in Ihren Codebeispielen hinweisen möchten.

Um diese Darstellung zu erhalten, verwenden Sie "Code-Zäune", um den Codeblock zu markieren, gefolgt von der Info-Zeichenkette der Sprache. Zum Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Codeblock als ein gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach der Sprachzeichenkette hinzu, z. B.:

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

Diese werden als folgt gerendert:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
