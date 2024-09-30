---
title: Richtlinien für das Schreiben von Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{MDNSidebar}}

Die in diesem Artikel beschriebenen Richtlinien gelten für das Styling und die Formatierung von Codebeispielen, unabhängig von der Programmiersprache. Für Richtlinien dazu, welche Inhalte beim Schreiben von Codebeispielen enthalten sein sollten, siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologiespezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Allgemeine bewährte Praktiken

Dieser Abschnitt bietet die besten Praktiken für die Erstellung eines verständlichen minimalen Codebeispiels, um die Nutzung eines bestimmten Features oder einer Funktion zu demonstrieren.

Codebeispiele, die Sie zu den MDN Web Docs hinzufügen, sollten:

- einfach genug sein, um verstanden zu werden, aber
- komplex genug, um etwas Interessantes und vorzugsweise Nützliches zu tun.

Es gibt eine übergeordnete Überlegung, die Sie im Hinterkopf behalten sollten: **Leser werden den Codebeispiel kopieren und in ihren eigenen Code einfügen und möglicherweise in der Produktion einsetzen.**

Daher sollten Sie sicherstellen, dass das Codebeispiel verwendbar ist, allgemeinen anerkannten Best Practices folgt und **nichts** tut, was eine Anwendung unsicher, grob ineffizient, aufgebläht oder unzugänglich macht. Wenn das Codebeispiel nicht ausführbar oder produktionsfähig ist, fügen Sie unbedingt eine Warnung in einem Codekommentar und im erklärenden Text hinzu; machen Sie zum Beispiel deutlich, wenn es sich nur um ein Snippet handelt und nicht um ein vollständiges Beispiel. Dies bedeutet auch, dass Sie **alle** Informationen bereitstellen sollten, die erforderlich sind, um das Beispiel auszuführen, einschließlich etwaiger Abhängigkeiten und Setup-Informationen.

Codebeispiele sollten so eigenständig und leicht verständlich wie möglich sein. Das Ziel ist es nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und eine großartige Funktionalität bietet, sondern reduzierbare, funktionsfähige Beispiele zu produzieren, die so schnell wie möglich verstanden werden können.

Einige weitere allgemeine bewährte Praktiken umfassen:

- Das Codebeispiel sollte kurz sein und idealerweise nur das Feature zeigen, das Sie gerade interessiert.
- **Nur** Code aufnehmen, der für das Beispiel wesentlich ist. Eine große Menge nicht relevanter Code kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständiges, ausführlicheres Beispiel bereitstellen möchten, platzieren Sie es in einem unserer [GitHub-Repos](https://github.com/mdn/) (oder einem JSBin, Codepen oder ähnlichem) und geben Sie den Link zur vollständigen Version über oder unter dem Beispiel an.
- Nehmen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere solche Abhängigkeiten auf. Sie machen den Code weniger portabel und schwerer ausführbar und verständlich. Verwenden Sie wenn möglich Vanilla-Code.
- Setzen Sie das Wissen der Leser über keinerlei Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Features voraus. Verwenden Sie zum Beispiel Klassennamen, die innerhalb des Beispiels Sinn ergeben, anstatt solche, die BEM- oder Bootstrap-Benutzern verständlich sind.
- Schreiben Sie Ihren Code so sauber und verständlich wie möglich, selbst wenn dies nicht der effizienteste Weg ist, ihn zu schreiben.
- Seien Sie in Ihren Codebeispielen inklusiv; berücksichtigen Sie, dass Leser von MDN auf der ganzen Welt sind und vielfältig in ihren Ethnien, Religionen, Altersstufen, Geschlechtern usw. Ensure text in code examples reflects that diversity and is inclusive of all people.
- Verwenden Sie keine schlechten Praktiken der Kürze wegen (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Falle von API-Demos, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Features von wo kommen.

## Richtlinien für die Formatierung

Meinungen zur richtigen Einrückung, zum Leerraum und zur Zeilenlänge waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Bei den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um von themenfremden Diskussionen abzulenken). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Nichtsdestotrotz gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

Diese MDN Web Docs-Richtlinien für die Formatierung von Codebeispielen sind auch gute Praktiken, wenn Sie selbst codieren.

### Wahl einer Syntaxsprache

Um eine ordnungsgemäße Formatierung und Syntaxhervorhebung von Codeblöcken sicherzustellen, müssen Autoren die Sprache des Codeblocks, den sie schreiben, angeben. Siehe [Beispielcodeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details dazu, wie eine neue Sprache angefordert werden kann.

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache explizit auf `plain`.

> [!WARNING]
> Wenn die gewünschte Sprache bei MDN noch nicht unterstützt wird, setzen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte bei der Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Codezeilenlänge

- Codezeilen sollten nicht so lang sein, dass sie zum Lesen ein horizontales Scrollen erfordern.
- Als empfohlene Praxis halten Sie Codezeilen bis zu einer maximalen Länge von 80 Zeichen (64 für [interaktive Beispiele](https://github.com/mdn/interactive-examples)).
- Brechen Sie lange Zeilen an natürlichen Trennpunkten, um der Lesbarkeit willen, aber nicht auf Kosten der besten Praktiken.

Zum Beispiel, das ist nicht ideal:

```js example-bad
let tommyCat =
  "Said Tommy the Cat as he reeled back to clear whatever foreign matter may have nestled its way into his mighty throat. Many a fat alley rat had met its demise while staring point blank down the cavernous barrel of this awesome prowling machine.";
```

Das ist besser, aber etwas umständlich:

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

### Codeblockhöhe

Codeblöcke sollten so lang sein, wie sie sein müssen, aber nicht länger. Ideal ist es, etwas Kurzes anzustreben, wie 15-25 Zeilen. Wenn ein Codeblock deutlich länger ist, überlegen Sie, nur das nützlichste Snippet zu zeigen und auf das vollständige Beispiel in einem GitHub-Repo oder CodePen zu verlinken.

#### Inline-Code-Formatierung

Verwenden Sie das Inline-Code-Syntaxzeichen (\`), um Funktionsnamen, Variablennamen und Methodennamen zu markieren. Zum Beispiel: "die `frenchText()`-Funktion".

**Methodennamen sollten von einem Paar Klammern gefolgt werden**: zum Beispiel `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Codebegriffen zu unterscheiden.

## Richtlinien für die ordnungsgemäße Anzeige

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele auf den MDN Web Docs korrekt angezeigt werden. Sie sollten auch die Responsivität berücksichtigen, indem Sie Codebeispiele schreiben, die auch auf mobilen Geräten nützlich sind.

### Größe des angezeigten Codebeispiels

- **Setzen Sie die Breite auf 100%**: Der Hauptinhaltspanel auf den MDN Web Docs ist etwa 700px breit auf dem Desktop, daher müssen die eingebetteten Codebeispiele bei dieser Breite in Ordnung aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für das rendere Codebeispiel maximal zu halten, um die Lesbarkeit auf dem Bildschirm zu gewährleisten.

### Farbe im dargestellten Codebeispiel

- Verwenden Sie Schlüsselwörter für primäre und andere "grundlegende" Farben, zum Beispiel:

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

- Verwenden Sie für Hex-Farben die Kurzform, wo relevant:

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

### Markieren von renderten Beispielen als gut oder schlecht

Sie werden auf dieser Seite bemerken, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke dargestellt werden, und die Codeblöcke, die schlechte Praktiken demonstrieren, werden mit einem weißen Kreuz in einem roten Kreis dargestellt.

Sie können den gleichen Stil verwenden, wenn Sie Codebeispiele schreiben. Sie müssen diesen Stil nicht überall verwenden — nur auf Seiten, auf denen Sie gezielt auf gute und schlechte Praktiken in Ihren Codebeispielen hinweisen möchten.

Um diese Darstellung zu erhalten, verwenden Sie "Codefences", um den Codeblock abzutrennen, gefolgt von der Sprachinfo-Zeichenkette. Zum Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach der Sprachzeichenkette ein, wie folgt:

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
