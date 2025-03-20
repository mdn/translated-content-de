---
title: Richtlinien für das Schreiben von Codebeispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 3731c9a98d3c0971c08fb47da53fa4dd539428b4
---

Die in diesem Artikel beschriebenen Richtlinien gelten für das Styling und die Formatierung von Codebeispielen, unabhängig von der Programmiersprache. Für Richtlinien zu den Inhalten, die beim Schreiben von Codebeispielen enthalten sein sollten, siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologie-spezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine bewährte Praktiken

Dieser Abschnitt bietet die besten Praktiken für die Erstellung eines verständlichen minimalen Codebeispiels zur Demonstration der Nutzung einer bestimmten Funktion oder eines bestimmten Merkmals.

Codebeispiele, die Sie zu MDN Web Docs hinzufügen, sollten:

- einfach genug sein, um verständlich zu sein, aber
- komplex genug, um etwas Interessantes und idealerweise Nützliches zu tun.

Es gibt eine übergeordnete Überlegung, die Sie im Hinterkopf behalten müssen: **Leser werden das Codebeispiel kopieren und in ihren eigenen Code einfügen und möglicherweise in Produktion einsetzen.**

Daher sollten Sie sicherstellen, dass das Codebeispiel verwendbar ist, den allgemein anerkannten Best Practices folgt und **nicht** etwas tut, das eine Anwendung unsicher, grob ineffizient, überladen oder unzugänglich macht. Wenn das Codebeispiel nicht ausführbar oder nicht produktionsreif ist, fügen Sie unbedingt eine Warnung in einem Codekommentar und im erläuternden Text ein; zum Beispiel, wenn es nur ein Snippet und kein vollständiges Beispiel ist, machen Sie dies klar. Dies bedeutet auch, dass Sie **alle** notwendigen Informationen zum Ausführen des Beispiels bereitstellen, einschließlich aller Abhängigkeiten und Setup-Informationen.

Codebeispiele sollten so eigenständig und verständlich wie möglich sein. Das Ziel ist es nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionalität hat, sondern eher, reduzierte Arbeitsbeispiele zu produzieren, die so schnell wie möglich verstanden werden können.

Einige weitere allgemeine Best Practices umfassen:

- Das Codebeispiel sollte kurz sein und idealerweise nur das Merkmal zeigen, das Sie gerade interessiert.
- **Nur** Code inkludieren, der für das Beispiel wesentlich ist. Eine große Menge irrelevanten Codes kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständiges, ausführlicheres Beispiel bereitstellen möchten, stellen Sie es in eines unserer [GitHub-Repos](https://github.com/mdn/) (oder ein JS Bin, CodePen oder ähnliches) und geben Sie dann den Link zur vollständigen Version oberhalb oder unterhalb des Beispiels an.
- Fügen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere solche Abhängigkeiten hinzu. Sie machen den Code weniger portabel und schwieriger ausführbar und verständlich. Verwenden Sie, wo möglich, nativen Code.
- Gehen Sie nicht von Kenntnissen der Leser über Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Funktionen aus. Verwenden Sie zum Beispiel Klassenamen, die innerhalb des Beispiels sinnvoll sind, anstatt Klassenamen, die für BEM- oder Bootstrap-Benutzer sinnvoll sind.
- Schreiben Sie Ihren Code so sauber und verständlich wie möglich, auch wenn es nicht der effizienteste Weg ist, ihn zu schreiben.
- Seien Sie inklusiv in Ihren Codebeispielen; bedenken Sie, dass MDN-Leser aus der ganzen Welt kommen und vielfältig in ihren Ethnien, Religionen, Altersgruppen, Geschlechtern usw. sind. Stellen Sie sicher, dass der Text in den Codebeispielen diese Vielfalt widerspiegelt und alle Menschen einbezieht.
- Verwenden Sie keine schlechten Praktiken der Kürze halber (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Falle von API-Demos, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Funktionen von wo stammen.

## Richtlinien für die Formatierung

Meinungen über korrekte Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Bei MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln zu erfahren, und lesen Sie die [Prettier-Dokumentation](https://prettier.io/docs/index.html).

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

Diese MDN Web Docs-Richtlinien für die Formatierung von Codebeispielen sind auch gute Praktiken beim Kodieren.

### Wahl einer Syntaxsprache

Um sicherzustellen, dass Codeblöcke ordnungsgemäß formatiert und hervorgehoben werden, müssen Autoren die Sprache des Codeblocks, den sie schreiben, angeben. Siehe [Beispiel-Codeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details zur Anforderung einer neuen Sprache.

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder auf andere Weise keine Programmiersprache ist, setzen Sie die Sprache explizit auf `plain`.

> [!WARNING]
> Wenn die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte mit Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Codezeilenlänge

- Codezeilen sollten nicht so lang sein, dass sie zum Lesen horizontales Scrollen erfordern.
- Brechen Sie lange Zeilen an natürlichen Trennpunkten für eine bessere Lesbarkeit, aber nicht auf Kosten bewährter Praktiken.

Zum Beispiel ist dies nicht ideal:

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

Noch besser ist die Verwendung eines Template-Literals:

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

### Codeblock-Höhe

Codeblöcke sollten so lang sein, wie sie sein müssen, aber nicht länger. Idealerweise streben Sie etwas Kurzes wie 15-25 Zeilen an. Wenn ein Codeblock deutlich länger wird, ziehen Sie in Betracht, nur das nützlichste Snippet zu zeigen und auf das vollständige Beispiel in einem GitHub-Repo oder CodePen zu verweisen.

#### Inline-Code-Formatierung

Verwenden Sie das Inline-Code-Syntax (\`) für das Markieren von Funktionsnamen, Variablennamen und Methodennamen. Zum Beispiel: "die `frenchText()` Funktion".

**Methodennamen sollten von einem Paar Klammern gefolgt werden**: zum Beispiel, `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Codebegriffen zu unterscheiden.

## Richtlinien für die richtige Anzeige

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele ordnungsgemäß auf den MDN Web Docs angezeigt werden. Sie sollten auch die Reaktionsfähigkeit in Betracht ziehen, um Codebeispiele zu schreiben, die auch auf mobilen Geräten nützlich sind.

### Größe des dargestellten Codebeispiels

- **Setzen Sie die Breite auf 100%**: Die Hauptinhaltsansicht auf den MDN Web Docs ist auf dem Desktop etwa 700px breit, daher müssen die eingebetteten Codebeispiele bei dieser Breite gut aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für die maximale Bildschirmlesbarkeit des dargestellten Codebeispiels beizubehalten.

### Farbe im dargestellten Codebeispiel

- Verwenden Sie Schlüsselwörter für Primär- und andere "grundlegende" Farben, zum Beispiel:

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

- Für Hex-Farben verwenden Sie die Kurzform, wenn relevant:

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

### Gekennzeichnete Beispiele als gut oder schlecht

An dieser Seite werden Ihnen auffallen, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke dargestellt werden, und die Codeblöcke, die schlechte Praktiken zeigen, mit einem weißen Kreuz in einem roten Kreis angezeigt werden.

Sie können denselben Stil beim Schreiben von Codebeispielen verwenden. Sie müssen diesen Stil nicht überall verwenden — nur auf Seiten, auf denen Sie speziell gute und schlechte Praktiken in Ihren Codebeispielen hervorheben möchten.

Um diese Darstellung zu erzielen, verwenden Sie "Codezäune", um den Codeblock zu umrahmen und die Sprachinformation im String hinzuzufügen. Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach dem Sprachstring hinzu, zum Beispiel:

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

Diese werden dargestellt als:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```

## Platzhaltertext

Verwenden Sie den vom [lipsum.com](https://www.lipsum.com) generierten Platzhalter-Lorem-Ipsum-Text oder das [Lorem Ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) VS Code-Plugin.
