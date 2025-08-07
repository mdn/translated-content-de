---
title: Richtlinien für das Schreiben von Code-Beispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Dieser Artikel beschreibt den Code-Stil und die Formatierungsrichtlinien für Code-Beispiele bei MDN Web Docs, unabhängig von der Programmiersprache. Für Richtlinien zu Prosa und anderem Inhalt siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologie-spezifische Richtlinien siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Prinzipien für Code-Beispiele

Eine übergeordnete Überlegung, die Sie im Hinterkopf behalten sollten: **Leser werden Beispiele in ihren eigenen Code kopieren und einfügen und möglicherweise in die Produktion einbringen.** Daher sollten Sie sicherstellen, dass Code-Beispiele verwendbar sind, allgemein akzeptierte Best Practices befolgen und nichts tun, was eine Anwendung unsicher, ineffizient, überladen oder unzugänglich macht.

Falls das Code-Beispiel nicht ausführbar oder produktionsreif ist, fügen Sie einen Hinweis in einem Code-Kommentar und im erklärenden Text ein; zum Beispiel, wenn es nur ein Ausschnitt und kein vollständiges Beispiel ist, machen Sie dies klar. Das bedeutet auch, dass Sie alle notwendigen Informationen bereitstellen sollten, um das Beispiel auszuführen, einschließlich aller Abhängigkeiten und Einrichtungsinformationen.

Code-Beispiele sollten einfach genug sein, um verständlich zu sein, aber komplex genug, um etwas Interessantes und (vorzugsweise) Nützliches zu tun. Das Ziel ist nicht unbedingt effizienten, cleveren Code zu produzieren, der Experten beeindruckt und tolle Funktionalität besitzt, sondern vielmehr reduzierte funktionierende Beispiele zu teilen, die schnell verstanden und erlernt werden können.

Einige allgemeinere Richtlinien umfassen:

- Code-Beispiele sollten kurz sein und idealerweise nur das zeigen, was Sie gerade interessiert.
- Schreiben Sie Ihren Code so verständlich wie möglich, auch wenn es nicht die effizienteste Schreibweise ist.
- Schließen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere solche Abhängigkeiten ein. Sie machen den Code weniger portabel und schwieriger zu verstehen und auszuführen. Verwenden Sie möglichst unveränderten Code.
- Gehen Sie nicht davon aus, dass Leser Kenntnisse über Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Funktionen haben. Verwenden Sie zum Beispiel Klassennamen, die innerhalb des Beispiels Sinn machen, anstatt Klassennamen, die nur für BEM- oder Bootstrap-Nutzer verständlich sind.
- Seien Sie inklusiv in Ihren Code-Beispielen; bedenken Sie, dass MDN-Leser aus der ganzen Welt kommen und in Bezug auf Ethnien, Religionen, Altersgruppen, Geschlechter usw. vielfältig sind. Stellen Sie sicher, dass der Text in Code-Beispielen diese Vielfalt widerspiegelt und alle Menschen einbezieht.
- Verwenden Sie keine veralteten Funktionen aus Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Falle von API-Demonstrationen, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Funktionen von woher stammen.

## MDN-Code-Stil und -Formatierung

Meinungen über korrekte Einrückungen, Leerzeichen und Zeilenlängen waren schon immer kontrovers. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab. Bei MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten und off-topic Diskussionen zu vermeiden. Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) überprüfen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Abgesehen von der automatisierten Formatierung gibt es ein paar weitere Regeln für Code-Beispiele bei MDN, damit das Ergebnis gut gerendert wird.

### Wählen Sie die richtige Sprache

Um eine ordnungsgemäße Formatierung und Syntaxhervorhebung der Code-Blöcke zu gewährleisten, geben Sie die Sprache des Code-Blocks korrekt an. Siehe [Beispiel-Code-Blöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details dazu, wie Sie eine neue Sprache anfordern können.

Wenn es sich bei dem Code-Block um Pseudocode, die Ausgabe eines Befehls oder eine andere nicht-programmierte Sprache handelt, setzen Sie die Sprache auf `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Wenn die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie die Sprache eines Code-Blocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebeneffekte bei der Prettier-Formatierung und Syntaxhervorhebung haben kann.

### Codezeilenlänge

Codezeilen sollten nicht so lang sein, dass sie horizontal scrollen müssen, um gelesen zu werden. Brechen Sie lange Zeilen an natürlichen Trennstellen für die Lesbarkeit um, aber nicht auf Kosten der Best Practices. Beispielsweise ist dies nicht ideal:

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

Noch besser ist es, ein Template-String zu verwenden:

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### Höhe des Code-Blocks

Code-Blöcke sollten so lang sein, wie sie sein müssen, aber nicht länger. Idealerweise zielen Sie auf etwas Kurzes ab, wie 15-25 Zeilen. Wenn ein Code-Block viel länger wird, ziehen Sie in Betracht, den nützlichsten Teil anzuzeigen und auf ein vollständiges Beispiel in einem GitHub-Repo, Gist oder CodePen zu verlinken.

### Inline-Code-Formatierung

Verwenden Sie Inline-Code-Syntax, um Funktionsnamen, Variablennamen und Methodennamen hervorzuheben. Zum Beispiel: "die `frenchText()`-Funktion" wird in Markdown geschrieben als:

```md
the `frenchText()` function
```

Methodennamen sollten von einem Paar Klammern gefolgt werden: zum Beispiel `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für eine ordnungsgemäße Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die Code-Beispiele, die Sie schreiben, ordnungsgemäß bei MDN Web Docs angezeigt werden. Sie sollten auch die Reaktionsfähigkeit berücksichtigen, indem Sie Code-Beispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Code-Beispiels

- **Setzen Sie die Breite auf 100%**: Der Hauptinhaltbereich bei MDN Web Docs ist auf einem Desktop etwa 700px breit, daher müssen die eingebetteten Code-Beispiele bei dieser Breite gut aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für das gerenderte Code-Beispiel breit zu halten, um maximale Lesbarkeit auf dem Bildschirm zu gewährleisten.

### Beispiele als gut oder schlecht hervorheben

Sie werden auf dieser Seite bemerken, dass die Code-Blöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke gerendert werden, und die Code-Blöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis.

Sie können denselben Stil verwenden, während Sie Code-Beispiele schreiben. Sie müssen diesen Stil nicht überall verwenden — nur an Stellen, an denen Sie speziell auf gute und schlechte Verwendung in Code-Beispielen hinweisen möchten.

Ein Code-Block wird in Markdown mit "Codezäunen" geschrieben, um den Code-Block abzugrenzen, gefolgt von der Sprache im Infostring. Zum Beispiel:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Um den Code-Block als gutes oder schlechtes Beispiel zu markieren, fügen Sie `example-good` oder `example-bad` nach dem Sprachstring hinzu, wie folgt:

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

## Richtlinien für die Verwendung von Platzhaltertext

Verwenden Sie den Platzhaltertext "lorem ipsum", der von [lipsum.com](https://www.lipsum.com/) oder dem [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) VS Code Plugin generiert wird. Der standardmäßige "lorem ipsum"-Text ist in unserer Rechtschreibprüfungskonfiguration enthalten, sodass er nicht als Tippfehler in IDEs oder während der Code-Überprüfungstests gemeldet wird. Die Verwendung eines konsistenten Platzhaltertextes macht Code-Beispiele einfacher zu überprüfen, insbesondere wenn er wiederholt auftaucht. Es hilft auch, Beispiele klar zur Veranschaulichung zu halten und lenkt die Leser nicht mit irrelevanten Inhalten ab.
