---
title: Richtlinien für das Schreiben von Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{MDNSidebar}}

Die in diesem Artikel beschriebenen Richtlinien beziehen sich auf die Gestaltung und Formatierung von Codebeispielen, unabhängig von der Sprache. Für Richtlinien zu den Inhalten, die beim Schreiben von Codebeispielen enthalten sein sollten, siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologie-spezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Shell-Eingabeaufforderung Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell)

## Allgemeine Best Practices

Dieser Abschnitt bietet die besten Praktiken, um ein verständliches minimalistisches Codebeispiel zu erstellen, das die Verwendung eines bestimmten Features oder einer bestimmten Funktion demonstriert.

Codebeispiele, die Sie zu den MDN Web Docs hinzufügen, sollten:

- einfach genug sein, um verstanden zu werden, aber
- komplex genug, um etwas Interessantes zu tun, und vorzugsweise nützlich sein.

Es gibt eine übergreifende Überlegung, die Sie im Hinterkopf behalten müssen: **Leser werden den Code in ihr eigenes Projekt kopieren und einfügen und möglicherweise in die Produktion übernehmen.**

Daher sollten Sie sicherstellen, dass das Codebeispiel verwendbar ist, allgemeinen Best Practices folgt und **nicht** etwas tut, das eine Anwendung unsicher, ineffizient, aufgebläht oder unzugänglich macht. Wenn das Codebeispiel nicht lauffähig oder produktionsreif ist, achten Sie darauf, einen Hinweis im Codekommentar und im erklärenden Text zu geben; z.B., wenn es sich nur um einen Ausschnitt und nicht um ein vollständiges Beispiel handelt, machen Sie dies klar. Dies bedeutet auch, dass Sie **alle** Informationen bereitstellen sollten, die notwendig sind, um das Beispiel auszuführen, einschließlich etwaiger Abhängigkeiten und Setup-Informationen.

Codebeispiele sollten so selbsterklärend und einfach zu verstehen wie möglich sein. Das Ziel ist nicht notwendigerweise, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionalität bietet, sondern vielmehr reduzierte Arbeitsbeispiele zu erstellen, die so schnell wie möglich verstanden werden können.

Weitere allgemeine Best Practices umfassen:

- Das Codebeispiel sollte kurz sein und idealerweise nur das Feature zeigen, an dem Sie gerade interessiert sind.
- **Nur** Code einbeziehen, der für das Beispiel wesentlich ist. Eine große Menge an nicht relevantem Code kann den Leser leicht ablenken oder verwirren. Wenn Sie ein vollständiges, längeres Beispiel bereitstellen möchten, setzen Sie es in eines unserer [GitHub-Repositories](https://github.com/mdn/) (oder einen JSBin, Codepen oder Ähnliches) und bieten dann den Link zur vollständigen Version über oder unter dem Beispiel an.
- Fügen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere derartige Abhängigkeiten ein. Diese machen den Code weniger portabel und schwerer zu verstehen und auszuführen. Verwenden Sie, wo möglich, native Codes.
- Gehen Sie nicht von der Kenntnis der Leser über irgendwelche Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Features aus. Verwenden Sie z.B. Klassennamen, die innerhalb des Beispiels Sinn ergeben, anstatt Klassennamen, die für BEM- oder Bootstrap-Nutzer verständlich sind.
- Schreiben Sie Ihren Code so sauber und verständlich wie möglich, auch wenn dies nicht die effizienteste Art ist, ihn zu schreiben.
- Seien Sie inklusiv in Ihren Codebeispielen; berücksichtigen Sie, dass MDN-Leser aus der ganzen Welt kommen und in ihren Ethnien, Religionen, Altersgruppen, Geschlechtern, etc. vielfältig sind. Achten Sie darauf, dass Texte in Codebeispielen diese Vielfalt widerspiegeln und alle Menschen einschließen.
- Verwenden Sie keine schlechten Praktiken für Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder {{domxref("Document.write", "document.write()")}}); machen Sie es richtig.
- Im Falle von API-Demos, wenn Sie mehrere APIs gemeinsam verwenden, verdeutlichen Sie, welche APIs enthalten sind und welche Funktionen von wo stammen.

## Richtlinien für die Formatierung

Meinungen über korrekte Einrückung, Leerzeichen und Zeilenlängen waren immer umstritten. Diskussionen über diese Themen lenken vom Erstellen und Pflegen von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es ein paar zusätzliche Regeln, die Sie befolgen müssen.

Diese MDN Web Docs Richtlinien für die Formatierung von Codebeispielen sind auch gute Praktiken, wenn Sie selbst programmieren.

### Auswahl einer Syntaxsprache

Um die korrekte Formatierung und Syntaxhervorhebung von Codeblöcken sicherzustellen, müssen Autoren die Sprache des Codeblocks angeben, in dem sie schreiben. Siehe [Beispielcodeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details zur Anforderung einer neuen Sprache.

Wenn der Codeblock Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache explizit auf `plain`.

> [!WARNING]
> Wenn die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie **nicht** die Sprache des Codeblocks auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte bei der Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Codezeilenlänge

- Codezeilen sollten nicht so lang sein, dass sie zum Lesen horizontal gescrollt werden müssen.
- Als empfohlene Praxis sollten Codezeilen auf maximal 80 Zeichen gehalten werden (64 für [interaktive Beispiele](https://github.com/mdn/interactive-examples)).
- Brechen Sie lange Zeilen an natürlichen Stellen, um die Lesbarkeit zu fördern, jedoch nicht auf Kosten von Best Practices.

Beispiel für nicht optimal:

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

### Höhe von Codeblöcken

Codeblöcke sollten so lang sein, wie sie sein müssen, aber nicht länger. Idealerweise streben Sie etwas Kurzes an, wie 15-25 Zeilen. Wenn ein Codeblock viel länger wird, überlegen Sie, nur den nützlichsten Ausschnitt zu zeigen, und verlinken Sie auf das komplette Beispiel in einem GitHub-Repo oder CodePen.

#### Inline-Code-Formatierung

Verwenden Sie Inline-Code-Syntax (`)`, um Funktionsnamen, Variablennamen und Methodennamen zu markieren. Zum Beispiel: „die `frenchText()` Funktion“.

**Methodennamen sollten von einem Paar Klammern gefolgt werden**: zum Beispiel `doSomethingUseful()`. Die Klammern helfen dabei, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für die ordnungsgemäße Anzeige

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele auf MDN Web Docs korrekt angezeigt werden. Sie sollten auch die Reaktionsfähigkeit berücksichtigen, indem Sie Codebeispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Codebeispiels

- **Setzen Sie die Breite auf 100%**: Das Hauptinhaltspanel auf MDN Web Docs ist etwa 700px breit auf dem Desktop, also müssen die eingebetteten Codebeispiele bei dieser Breite gut aussehen.
- **Setzen Sie Höhe unter 700px**: Wir empfehlen, diese Höhe für das gerenderte Codebeispiel beizubehalten, um maximale Bildschirmlesbarkeit zu gewährleisten.

### Farbe im gerenderten Codebeispiel

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

- Verwenden Sie bei Hex-Farben das Kurzformat, wo relevant:

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

Sie werden auf dieser Seite bemerken, dass die Codeblöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke angezeigt werden, und die Codeblöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis.

Sie können den gleichen Stil beim Schreiben von Codebeispielen befolgen. Sie müssen diesen Stil nicht überall verwenden - nur auf Seiten, auf denen Sie speziell auf gute und schlechte Praktiken in Ihren Codebeispielen hinweisen möchten.

Um dieses Rendering zu erhalten, verwenden Sie "Codezäune", um den Codeblock zu kennzeichnen, gefolgt von der Sprachinfo-Zeichenfolge. Beispiel:

```js
function myFunc() {
  console.log("Hello!");
}
```

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach der Sprachzeichenfolge hinzu, so:

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
