---
title: Richtlinien für das Schreiben von Code-Beispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

Die in diesem Artikel beschriebenen Richtlinien beziehen sich auf das Styling und die Formatierung von Code-Beispielen, unabhängig von der Programmiersprache. Für Richtlinien darüber, welche Inhalte beim Schreiben der Code-Beispiele enthalten sein sollten, siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologie-spezifische Richtlinien, siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Allgemeine bewährte Verfahren

Dieser Abschnitt bietet die bewährten Verfahren, um ein verständliches minimales Code-Beispiel zu erstellen, das die Nutzung eines bestimmten Features oder einer Funktion demonstriert.

Code-Beispiele, die Sie zu MDN Web Docs hinzufügen, sollten:

- einfach genug sein, um verständlich zu sein, aber
- komplex genug, um etwas Interessantes und vorzugsweise Nützliches zu tun.

Es gibt eine übergeordnete Überlegung, die Sie im Hinterkopf behalten müssen: **Leser werden den Code-Beispiel kopieren und in ihren eigenen Code einfügen und möglicherweise in die Produktion übernehmen.**

Daher sollten Sie sicherstellen, dass das Code-Beispiel verwendbar ist, allgemein akzeptierte Best Practices befolgt und **nichts** tut, was eine Anwendung unsicher, grob ineffizient, aufgebläht oder unzugänglich macht. Wenn das Code-Beispiel nicht ausführbar oder produktionsreif ist, fügen Sie unbedingt eine Warnung im Code-Kommentar und im erläuternden Text ein; beispielsweise, wenn es nur ein Snippet und kein vollständiges Beispiel ist, machen Sie dies deutlich. Dies bedeutet auch, dass Sie **alle** notwendigen Informationen bereitstellen sollten, um das Beispiel auszuführen, einschließlich aller Abhängigkeiten und Setup-Informationen.

Code-Beispiele sollten so eigenständig und leicht verständlich wie möglich sein. Das Ziel ist nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionalität hat, sondern reduzierte Arbeitsbeispiele zu produzieren, die so schnell wie möglich verstanden werden können.

Einige weitere allgemeine bewährte Verfahren sind:

- Das Code-Beispiel sollte kurz sein und idealerweise nur das aktuell interessante Feature zeigen.
- **Nur** Code einbeziehen, der für das Beispiel wesentlich ist. Eine große Menge nicht-relevanten Codes kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständiges, umfangreicheres Beispiel bereitstellen möchten, platzieren Sie es in einem unserer [GitHub-Repos](https://github.com/mdn/) (oder einem JS Bin, CodePen oder Ähnlichem) und stellen Sie dann den Link zur vollständigen Version über oder unter dem Beispiel bereit.
- Schließen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere derartige Abhängigkeiten ein. Diese machen den Code weniger portabel und schwerer lesbar sowie verständlich. Verwenden Sie, wo möglich, einfachen Code.
- Gehen Sie nicht von den Kenntnissen der Leser über Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Features aus. Verwenden Sie beispielsweise Klassennamen, die innerhalb des Beispiels Sinn machen, anstatt Klassennamen, die für BEM- oder Bootstrap-Nutzer sinnvoll sind.
- Schreiben Sie Ihren Code so sauber und verständlich wie möglich, auch wenn dies nicht der effizienteste Weg ist, ihn zu schreiben.
- Seien Sie inklusiv in Ihren Code-Beispielen; berücksichtigen Sie, dass MDN-Leser aus der ganzen Welt kommen und vielfältig in ihren Ethnien, Religionen, Altersgruppen, Geschlechtern usw. sind. Stellen Sie sicher, dass Texte in Code-Beispielen diese Vielfalt widerspiegeln und inklusiv für alle Menschen sind.
- Verwenden Sie keine schlechten Praktiken der Kürze halber (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Falls Sie mehrere APIs zusammen verwenden, klären Sie, welche APIs enthalten sind und welche Features von woher kommen.

## Richtlinien für die Formatierung

Meinungen über korrekte Einrückungen, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um von themenfremden Diskussionen abzulenken). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

Diese MDN Web Docs-Richtlinien für die Formatierung von Code-Beispielen sind auch gute Praktiken, wenn Sie Code schreiben.

### Auswahl einer Syntaxsprache

Um die richtige Formatierung und Syntaxhervorhebung von Code-Blöcken sicherzustellen, müssen Autoren die Sprache des Code-Blocks, den sie schreiben, angeben. Siehe [Beispiel-Codeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details darüber, wie man eine neue Sprache anfordert.

Falls der Code-Block Pseudocode ist, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache, setzen Sie die Sprache explizit auf `plain`.

> [!WARNING]
> Falls die gewünschte Sprache von MDN noch nicht unterstützt wird, setzen Sie die Sprache eines Code-Blocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte mit Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Code-Zeilenlänge

- Code-Zeilen sollten nicht so lang sein, dass sie zum Lesen horizontales Scrollen erfordern.
- Brechen Sie lange Zeilen an natürlichen Trennpunkten für die Lesbarkeit, allerdings nicht auf Kosten der besten Praktiken.

Zum Beispiel, dies ist nicht ideal:

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

### Höhe von Code-Blöcken

Code-Blöcke sollten so lang sein, wie sie sein müssen, aber nicht länger. Idealerweise sollte man etwas Kurzes, wie 15-25 Zeilen anstreben. Wenn ein Code-Block viel länger wird, ziehen Sie in Betracht, nur das nützlichste Snippet zu zeigen und auf das komplette Beispiel in einem GitHub-Repo oder CodePen zu verlinken.

#### Inline-Code-Formatierung

Verwenden Sie Inline-Code-Syntax (\`), um Funktionsnamen, Variablennamen und Methodennamen zu kennzeichnen. Zum Beispiel: "the `frenchText()` function".

**Methodennamen sollten von einem Paar Klammern gefolgt werden**: zum Beispiel, `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für das richtige Rendering

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Code-Beispiele ordnungsgemäß auf MDN Web Docs angezeigt werden. Sie sollten auch die Responsivität in Betracht ziehen und Code-Beispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Code-Beispiels

- **Setzen Sie die Breite auf 100%**: Der Hauptinhalt auf MDN Web Docs ist etwa 700px breit auf dem Desktop, daher müssen die eingebetteten Code-Beispiele bei dieser Breite gut aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für den gerenderten Code-Beispiel bei maximaler Bildschirmlesbarkeit beizubehalten.

### Farbe im gerenderten Code-Beispiel

- Verwenden Sie Schlüsselwörter für primäre und andere "einfache" Farben, zum Beispiel:

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

- Für hexadezimale Farben verwenden Sie die Kurzform, falls relevant:

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

### Gerenderte Beispiele als gut oder schlecht markieren

Auf dieser Seite werden Sie bemerken, dass die Code-Blöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke gerendert werden, und die Code-Blöcke, die schlechte Praktiken aufzeigen, werden mit einem weißen Kreuz in einem roten Kreis gerendert.

Sie können denselben Stil beim Schreiben von Code-Beispielen verwenden. Sie müssen diesen Stil nicht überall verwenden – nur auf Seiten, auf denen Sie ausdrücklich auf gute und schlechte Praktiken in Ihren Code-Beispielen hinweisen möchten.

Um dieses Rendering zu erhalten, verwenden Sie "Code-Zäune", um den Code-Block zu markieren, gefolgt von der Sprachinformationszeichenkette. Zum Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Code-Block als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach der Sprachzeichenkette hinzu, etwa so:

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

Diese werden wie folgt gerendert:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
