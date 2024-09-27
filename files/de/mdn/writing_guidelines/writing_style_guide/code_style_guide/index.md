---
title: Richtlinien für das Schreiben von Code-Beispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{MDNSidebar}}

Die in diesem Artikel beschriebenen Richtlinien gelten für das Styling und die Formatierung von Code-Beispielen, unabhängig von der Sprache. Für Richtlinien zu den Inhalten, die beim Schreiben der Code-Beispiele enthalten sein sollten, siehe den [Schreibrichtlinien-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologiespezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Allgemeine Best Practices

Dieser Abschnitt bietet Best Practices für die Erstellung eines verständlichen minimalen Code-Beispiels, um die Nutzung eines bestimmten Features oder einer Funktion zu demonstrieren.

Code-Beispiele, die Sie zu den MDN Web Docs hinzufügen, sollten:

- einfach genug sein, um verstanden zu werden, aber
- komplex genug, um etwas Interessantes zu tun und vorzugsweise nützlich zu sein.

Es gibt eine übergeordnete Überlegung, die Sie im Kopf behalten müssen: **Leser werden das Code-Beispiel kopieren und in ihren eigenen Code einfügen und es möglicherweise in die Produktion einbringen.**

Daher sollten Sie sicherstellen, dass das Code-Beispiel nutzbar ist, allgemein anerkannte Best Practices befolgt und **nichts** tut, was eine Anwendung unsicher, ineffizient, überladen oder unzugänglich macht. Wenn das Code-Beispiel nicht ausführbar oder produktionsreif ist, fügen Sie unbedingt einen Kommentar im Code sowie im erläuternden Text hinzu; zum Beispiel, wenn es nur ein Snippet und kein vollständiges Beispiel ist, machen Sie dies deutlich. Dies bedeutet auch, dass Sie **alle** Informationen bereitstellen sollten, die notwendig sind, um das Beispiel auszuführen, einschließlich aller Abhängigkeiten und Setup-Informationen.

Code-Beispiele sollten so eigenständig und leicht verständlich wie möglich sein. Das Ziel ist es nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionalität hat, sondern eher reduzierte, funktionierende Beispiele zu erstellen, die so schnell wie möglich verstanden werden können.

Weitere allgemeine Best Practices umfassen:

- Das Code-Beispiel sollte kurz sein und idealerweise nur das Feature zeigen, das Sie unmittelbar interessiert.
- **Nur** Code einbeziehen, der für das Beispiel unerlässlich ist. Eine große Menge irrelevanten Codes kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständigeres, längeres Beispiel bereitstellen möchten, legen Sie es in eines unserer [GitHub-Repos](https://github.com/mdn/) (oder ein JSBin, Codepen oder ähnliches) und geben Sie dann den Link zur vollständigen Version über oder unter dem Beispiel an.
- Binden Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere solche Abhängigkeiten ein. Sie machen den Code weniger portabel und schwerer zu verstehen. Verwenden Sie nach Möglichkeit Vanilla-Code.
- Setzen Sie kein Wissen der Leser über Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Features voraus. Verwenden Sie zum Beispiel Klassennamen, die im Beispiel Sinn ergeben, statt solcher, die für BEM- oder Bootstrap-Nutzer Sinn machen.
- Schreiben Sie Ihren Code so sauber und verständlich wie möglich, auch wenn dies nicht die effizienteste Art ist, ihn zu schreiben.
- Seien Sie inklusiv in Ihren Code-Beispielen; bedenken Sie, dass MDN-Leser aus der ganzen Welt kommen und vielfältig in ihrer ethnischen Zugehörigkeit, Religion, ihrem Alter, Geschlecht usw. sind. Stellen Sie sicher, dass der Text in Code-Beispielen diese Vielfalt widerspiegelt und alle Menschen einschließt.
- Verwenden Sie keine schlechten Praktiken der Kürze wegen (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Fall von API-Demos, wenn Sie mehrere APIs zusammen verwenden, benennen Sie die APIs und die Features, die von welcher API stammen.

## Richtlinien zur Formatierung

Meinungen zu korrekter Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Wartung von Inhalten ab.

Bei den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln kennenzulernen, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

Diese MDN Web Docs-Richtlinien zur Formatierung von Code-Beispielen sind auch gute Praktiken, wenn Sie kodieren.

### Wahl einer Syntaxsprache

Um die korrekte Formatierung und Syntax-Hervorhebung von Codeblöcken sicherzustellen, müssen Autoren die Sprache des Codeblocks, den sie schreiben, angeben. Siehe [Beispiel-Codeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details dazu, wie Sie eine neue Sprache anfordern können.

Falls der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache explizit auf `plain`.

> [!WARNING]
> Falls die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebenwirkungen bei der Prettier-Formatierung und Syntax-Hervorhebung haben kann.

### Zeilenlänge von Code

- Codezeilen sollten nicht so lang sein, dass sie horizontales Scrollen zum Lesen erfordern.
- Es wird empfohlen, Codezeilen auf maximal 80 Zeichen Länge zu halten (64 für [interaktive Beispiele](https://github.com/mdn/interactive-examples)).
- Brechen Sie lange Zeilen an natürlichen Trennungspunkten zur Verbesserung der Lesbarkeit, jedoch nicht auf Kosten von Best Practices.

Zum Beispiel ist dies nicht ideal:

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

Noch besser ist es, ein Template-String zu verwenden:

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

### Höhe von Codeblöcken

Codeblöcke sollten so lang wie nötig, aber nicht länger sein. Idealerweise zielen Sie auf etwa 15-25 Zeilen ab. Wenn ein Codeblock wesentlich länger wird, ziehen Sie in Betracht, nur das nützlichste Snippet zu zeigen und auf das vollständige Beispiel in einem GitHub-Repo oder CodePen zu verlinken.

#### Inline-Code-Formatierung

Verwenden Sie das Inline-Code-Syntax-Markup (\`), um Funktionsnamen, Variablennamen und Methodennamen zu kennzeichnen. Zum Beispiel: "die Funktion `frenchText()`".

**Methodennamen sollten von einem Paar Klammern gefolgt werden**: zum Beispiel `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für die korrekte Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Code-Beispiele korrekt auf den MDN Web Docs angezeigt werden. Sie sollten auch die Reaktionsfähigkeit berücksichtigen und Code-Beispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Code-Beispiels

- **Setzen Sie die Breite auf 100%**: Das Hauptinhaltsfeld auf den MDN Web Docs ist etwa 700px breit auf dem Desktop, daher müssen die eingebetteten Code-Beispiele bei dieser Breite gut aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für das gerenderte Code-Beispiel beizubehalten, um maximale Lesbarkeit auf dem Bildschirm zu gewährleisten.

### Farbe im gerenderten Code-Beispiel

- Verwenden Sie Schlüsselwörter für primäre und andere "grundlegende" Farben, zum Beispiel:

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

- Für Hex-Farben verwenden Sie die Kurzform, wo relevant:

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

### Markierung gerenderter Beispiele als gut oder schlecht

Auf dieser Seite werden Sie bemerken, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke gerendert sind, und die, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis.

Sie können den gleichen Stil verwenden, während Sie Code-Beispiele schreiben. Sie müssen diesen Stil nicht überall verwenden — nur auf Seiten, wo Sie speziell auf gute und schlechte Praktiken in Ihren Code-Beispielen aufmerksam machen möchten.

Um diese Darstellung zu erhalten, verwenden Sie "Codezäune", um den Codeblock zu markieren, gefolgt von dem Sprachinformationsstring. Zum Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach dem Sprachstring hinzu, wie folgt:

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
