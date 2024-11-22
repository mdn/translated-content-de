---
title: Richtlinien für das Schreiben von Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{MDNSidebar}}

Die in diesem Artikel beschriebenen Richtlinien beziehen sich auf das Styling und die Formatierung von Codebeispielen, unabhängig von der Sprache. Für Richtlinien über den Inhalt, der in Codebeispiele aufgenommen werden soll, siehe den [Leitfaden zur Schreibweise](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologiebasierte Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Allgemeine Best Practices

Dieser Abschnitt bietet Best Practices zur Erstellung eines verständlichen minimalen Codebeispiels, um die Verwendung einer bestimmten Funktion oder eines Features zu demonstrieren.

Die von Ihnen zu den MDN Web Docs hinzugefügten Codebeispiele sollten:

- einfach genug sein, um verständlich zu sein, aber
- komplex genug, um etwas Interessantes und vorzugsweise Nützliches zu tun.

Es gibt eine übergeordnete Überlegung, die Sie im Auge behalten müssen: **Leser werden den Code aus dem Beispiel kopieren und in ihren eigenen Code einfügen und könnten ihn in der Produktion verwenden.**

Daher sollten Sie sicherstellen, dass das Codebeispiel benutzbar ist, allgemein akzeptierte Best Practices befolgt und **keinesfalls** unsicher, ineffizient, aufgebläht oder unzugänglich ist. Wenn das Codebeispiel nicht ausführbar oder produktionsbereit ist, sollten Sie eine Warnung in einem Codekommentar und im erläuternden Text einfügen; zum Beispiel, wenn es nur ein Ausschnitt und kein vollständiges Beispiel ist, sollten Sie dies klar machen. Dies bedeutet auch, dass Sie **alle** erforderlichen Informationen zur Ausführung des Beispiels bereitstellen sollten, einschließlich aller Abhängigkeiten und Setup-Informationen.

Codebeispiele sollten so eigenständig und verständlich wie möglich sein. Das Ziel ist nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionalität hat, sondern reduzierte Arbeitsbeispiele zu erstellen, die so schnell wie möglich verstanden werden können.

Einige weitere allgemeine Best Practices umfassen:

- Das Codebeispiel sollte kurz sein und idealerweise nur das zeigen, woran Sie unmittelbar interessiert sind.
- **Nur** den für das Beispiel wesentlichen Code einschließen. Eine große Menge nicht relevanten Codes kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständiges, umfangreicheres Beispiel bereitstellen wollen, fügen Sie es in eines unserer [GitHub-Repos](https://github.com/mdn/) (oder ein JS Bin, CodePen oder ähnliches) ein und verlinken Sie dann die vollständige Version über oder unter dem Beispiel.
- Fügen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und ähnliche Abhängigkeiten ein. Sie machen den Code weniger portabel und schwerer zu bedienen und zu verstehen. Verwenden Sie nach Möglichkeit Vanilla-Code.
- Gehen Sie nicht davon aus, dass Leser Kenntnisse über Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Funktionen haben. Verwenden Sie beispielsweise Klassennamen, die innerhalb des Beispiels sinnvoll sind, anstatt Klassennamen, die für BEM- oder Bootstrap-Benutzer sinnvoll sind.
- Schreiben Sie Ihren Code so sauber und verständlich wie möglich, auch wenn es nicht der effizienteste Weg ist, ihn zu schreiben.
- Seien Sie inklusiv in Ihren Codebeispielen; bedenken Sie, dass MDN-Leser aus der ganzen Welt kommen und vielfältig in Bezug auf ethnische Zugehörigkeiten, Religionen, Alter, Geschlechter usw. sind. Stellen Sie sicher, dass der Text in Codebeispielen diese Vielfalt widerspiegelt und alle Menschen einschließt.
- Verwenden Sie keine schlechten Praktiken aus Gründen der Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Falle von API-Demos, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Funktionen woher stammen.

## Richtlinien für die Formatierung

Meinungen über die richtige Einrückung, den Leerraum und die Zeilenlängen waren schon immer kontrovers. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

In den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um ablenkende Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln zu lernen, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

Diese MDN Web Docs Richtlinien für die Formatierung von Codebeispielen sind auch gute Praktiken, wenn Sie codieren.

### Syntaxsprache wählen

Um eine korrekte Formatierung und Syntaxhervorhebung von Codeblöcken sicherzustellen, müssen Autoren die Sprache des Codeblocks angeben, den sie schreiben. Sehen Sie sich [Beispielcodeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details zur Anforderung einer neuen Sprache an.

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache explizit auf `plain`.

> [!WARNING]
> Wenn die gewünschte Sprache von MDN noch nicht unterstützt wird, setzen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebenwirkungen mit der Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Codezeilenlänge

- Codezeilen sollten nicht so lang sein, dass sie horizontales Scrollen erfordern, um gelesen zu werden.
- Als empfohlene Praxis sollten Sie Codezeilen bis zu einer maximalen Länge von 80 Zeichen halten (64 für [interaktive Beispiele](https://github.com/mdn/interactive-examples)).
- Brechen Sie lange Zeilen an natürlichen Trennpunkten auf, um der Lesbarkeit willen, aber nicht auf Kosten der besten Praktiken.

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

Noch besser ist es, einen Template Literal zu verwenden:

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

Codeblöcke sollten so lang wie nötig, aber nicht länger sein. Idealerweise streben Sie eine Kürze von etwa 15-25 Zeilen an. Wenn ein Codeblock viel länger sein soll, ziehen Sie in Betracht, nur den nützlichsten Ausschnitt zu zeigen, und verlinken Sie auf das vollständige Beispiel in einem GitHub-Repo oder auf CodePen.

#### Inline-Code-Formatierung

Verwenden Sie Inline-Code-Syntax (\`) zur Markierung von Funktionsnamen, Variablennamen und Methodennamen. Zum Beispiel: "die `frenchText()`-Funktion".

**Methodennamen sollten von einem Klammerpaar gefolgt werden**: zum Beispiel `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Codebegriffen zu unterscheiden.

## Richtlinien für die korrekte Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele auf den MDN Web Docs ordnungsgemäß angezeigt werden. Sie sollten auch die Reaktionsfähigkeit berücksichtigen, wenn Sie Codebeispiele schreiben, sodass sie auch auf mobilen Geräten nützlich sind.

### Größe des angezeigten Codebeispiels

- **Stellen Sie die Breite auf 100% ein**: Der Hauptinhaltbereich auf MDN Web Docs ist etwa 700px breit auf dem Desktop, daher müssen die eingebetteten Codebeispiele bei dieser Breite in Ordnung aussehen.
- **Stellen Sie die Höhe unter 700px ein**: Wir empfehlen, diese Höhe für die Darstellungsbreite des Codebeispiels beizubehalten, um maximale Lesbarkeit auf dem Bildschirm zu gewährleisten.

### Farbe im angezeigten Codebeispiel

- Verwenden Sie Schlüsselwörter für Primär- und andere "grundlegende" Farben, zum Beispiel:

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

Sie werden auf dieser Seite bemerken, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke angezeigt werden, und die Codeblöcke, die schlechte Praktiken veranschaulichen, werden mit einem weißen Kreuz in einem roten Kreis dargestellt.

Sie können denselben Stil beim Schreiben von Codebeispielen verwenden. Sie müssen diesen Stil nicht überall verwenden — nur auf Seiten, auf denen Sie spezielle Erwähnungen guter und schlechter Praktiken in Ihren Codebeispielen hervorheben möchten.

Um diese Darstellung zu erhalten, verwenden Sie "Codezäune", um den Codeblock zu kennzeichnen, gefolgt vom Sprachinformations-String. Zum Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach dem Sprachstring hinzu, so:

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

Diese werden wie folgt dargestellt:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
