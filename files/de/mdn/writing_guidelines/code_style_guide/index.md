---
title: Richtlinien für das Schreiben von Codebeispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Die in diesem Artikel beschriebenen Richtlinien gelten für das Styling und die Formatierung von Codebeispielen, unabhängig von der Sprache. Richtlinien dazu, welchen Inhalt Sie beim Schreiben der Codebeispiele einbeziehen sollten, finden Sie im [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Technologiespezifische Richtlinien finden Sie in den folgenden Artikeln:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Best Practices

Dieser Abschnitt bietet die Best Practices für das Erstellen eines verständlichen minimalen Codebeispiels zur Demonstration der Verwendung eines bestimmten Merkmals oder einer Funktion.

Die Codebeispiele, die Sie zu den MDN Web Docs hinzufügen, sollten:

- einfach genug sein, um verstanden zu werden, aber
- komplex genug, um etwas Interessantes und vorzugsweise Nützliches zu tun.

Es gibt eine grundlegende Überlegung, die Sie im Hinterkopf behalten müssen: **Leser werden das Codebeispiel kopieren und einfügen und es möglicherweise in der Produktion verwenden.**

Daher sollten Sie sicherstellen, dass das Codebeispiel verwendbar ist, allgemein anerkannten Best Practices folgt und **nichts** tut, was dazu führt, dass eine Anwendung unsicher, grob ineffizient, aufgebläht oder unzugänglich ist. Wenn das Codebeispiel nicht ausführbar oder produktionswürdig ist, sollten Sie eine Warnung in einem Code-Kommentar und im erläuternden Text hinzufügen; beispielsweise, wenn es nur ein Schnipsel und kein vollständiges Beispiel ist, machen Sie dies klar. Dies bedeutet auch, dass Sie **alle** Informationen bereitstellen sollten, die notwendig sind, um das Beispiel auszuführen, einschließlich aller Abhängigkeiten und Einrichtungshinweise.

Codebeispiele sollten so autark und einfach verständlich wie möglich sein. Ziel ist es nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und eine großartige Funktionalität hat, sondern reduzierte Arbeitsbeispiele zu erstellen, die so schnell wie möglich verstanden werden können.

Einige allgemeine Best Practices umfassen:

- Das Codebeispiel sollte kurz sein und idealerweise nur das Merkmal zeigen, das Sie unmittelbar interessiert.
- **Nur** Code einbeziehen, der für das Beispiel wesentlich ist. Eine große Menge irrelevanter Code kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständiges, längeres Beispiel bereitstellen möchten, stellen Sie es in eines unserer [GitHub-Repos](https://github.com/mdn/) (oder ein JS Bin, CodePen oder ähnliches) und bieten Sie dann den Link zur vollständigen Version über oder unter dem Beispiel an.
- Keine unnötigen serverseitigen Codes, Bibliotheken, Frameworks, Präprozessoren und andere solche Abhängigkeiten einbeziehen. Sie machen den Code weniger portabel und schwerer lauffähig und verständlich. Verwenden Sie nach Möglichkeit Vanilla-Code.
- Gehen Sie nicht vom Wissen der Leser über irgendwelche Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Merkmale aus. Verwenden Sie beispielsweise Klassennamen, die innerhalb des Beispiels Sinn ergeben, anstatt Klassennamen, die für BEM- oder Bootstrap-Benutzer verständlich sind.
- Schreiben Sie Ihren Code so sauber und verständlich wie möglich, auch wenn es nicht der effizienteste Weg ist, ihn zu schreiben.
- Seien Sie in Ihren Codebeispielen inklusiv; berücksichtigen Sie, dass MDN-Leser aus der ganzen Welt kommen und vielfältig in ihrer Ethnizität, Religion, ihrem Alter, Geschlecht usw. sind. Stellen Sie sicher, dass der Text in den Codebeispielen diese Vielfalt widerspiegelt und alle Menschen einbezieht.
- Verwenden Sie keine schlechten Praktiken aus Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Falle von API-Demos, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Funktionen von wo kommen.

## Richtlinien für die Formatierung

Meinungen über korrekte Einrückungen, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

In den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Nichtsdestotrotz gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

Diese Richtlinien der MDN Web Docs für die Formatierung von Codebeispielen sind auch gute Praktiken, wenn Sie selbst codieren.

### Auswahl einer Syntaxsprache

Um die richtige Formatierung und Syntaxhervorhebung von Codeblöcken zu gewährleisten, müssen die Autoren die Sprache des Codeblocks angeben, in dem sie schreiben. Siehe [Beispiel-Codeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details dazu, wie eine neue Sprache angefordert wird.

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache explizit auf `plain`.

> [!WARNING]
> Wenn die gewünschte Sprache von MDN noch nicht unterstützt wird, setzen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte bei der Prettier-Formatierung und der Syntaxhervorhebung haben kann.

### Zeilenlänge im Code

- Codezeilen sollten nicht so lang sein, dass sie horizontales Scrollen erfordern, um gelesen zu werden.
- Brechen Sie lange Zeilen an natürlichen Punkten für die Lesbarkeit, aber nicht auf Kosten von Best Practices.

Zum Beispiel ist dies nicht ideal:

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

### Höhe der Codeblöcke

Codeblöcke sollten so lang sein, wie sie sein müssen, aber nicht länger. Ideal ist es, auf etwas Kurzes abzuzielen, wie 15-25 Zeilen. Wenn ein Codeblock deutlich länger wird, ziehen Sie in Betracht, nur das nützlichste Snippet anzuzeigen, und verlinken Sie auf das vollständige Beispiel in einem GitHub-Repo oder auf CodePen.

#### Inline-Code-Formatierung

Verwenden Sie die Syntax für Inline-Code (\`), um Funktionsnamen, Variablennamen und Methodennamen zu kennzeichnen. Zum Beispiel: "die Funktion `frenchText()`".

**Methodennamen sollten von einem Paar Klammern gefolgt sein**: Zum Beispiel `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für die ordnungsgemäße Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die Codebeispiele, die Sie schreiben, korrekt auf den MDN Web Docs angezeigt werden. Sie sollten auch die Reaktionsfähigkeit in Betracht ziehen und Codebeispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des angezeigten Codebeispiels

- **Setzen Sie die Breite auf 100%**: Das Hauptinhaltspanel auf MDN Web Docs ist auf Desktops etwa 700px breit, sodass die eingebetteten Codebeispiele bei dieser Breite gut aussehen müssen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für die Anzeige des Codebeispiels beizubehalten, um die maximale Lesbarkeit auf dem Bildschirm zu gewährleisten.

### Farbe im angezeigten Codebeispiel

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

### Markieren von angezeigten Beispielen als gut oder schlecht

Sie werden auf dieser Seite bemerken, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke angezeigt werden, und die Codeblöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis dargestellt werden.

Sie können denselben Stil beim Schreiben von Codebeispielen verwenden. Sie müssen diesen Stil nicht überall verwenden – nur auf Seiten, auf denen Sie speziell gute und schlechte Praktiken in Ihren Codebeispielen herausstellen möchten.

Um diese Darstellung zu erhalten, verwenden Sie "Codezäune", um den Codeblock zu kennzeichnen, gefolgt von dem Sprachinfo-String. Zum Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach dem Sprachinfo-String hinzu, etwa so:

````md
```html example-good
<p></p>
```

```html example-bad
<p></p>
```
````

Diese werden wie folgt angezeigt:

```html example-good
<p class="brush: js example-good"></p>
```

```html example-bad
<p class="brush: js example-bad"></p>
```
