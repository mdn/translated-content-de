---
title: Richtlinien für das Schreiben von Code-Beispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

Dieser Artikel beschreibt Richtlinien für Code-Stil und Formatierung von Code-Beispielen auf den MDN Web Docs, unabhängig von der Programmiersprache. Für Richtlinien zu Prosa und anderen Inhalten, siehe den [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologiespezifische Richtlinien, siehe die folgenden Artikel:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Prinzipien für Code-Beispiele

Es gibt eine übergeordnete Überlegung, die Sie im Hinterkopf behalten müssen: **Leser werden Beispiele kopieren und in ihren eigenen Code einfügen und möglicherweise in die Produktion bringen.** Daher sollten Sie sicherstellen, dass Code-Beispiele verwendbar sind, allgemein akzeptierte Best Practices befolgen und nichts tun, das eine Anwendung unsicher, ineffizient, aufgebläht oder unzugänglich macht.

Falls das Code-Beispiel nicht ausführbar oder produktionstauglich ist, fügen Sie eine Warnung in einem Code-Kommentar und im erläuternden Text ein; zum Beispiel, wenn es nur ein Ausschnitt und kein vollständiges Beispiel ist, machen Sie dies deutlich. Dies bedeutet auch, dass Sie alle notwendigen Informationen bereitstellen sollten, um das Beispiel auszuführen, einschließlich aller Abhängigkeiten und Setup-Informationen.

Code-Beispiele sollten einfach genug sein, um verständlich zu sein, aber komplex genug, um etwas Interessantes, und (vorzugsweise) Nützliches zu tun. Das Ziel ist nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und großartige Funktionen aufweist, sondern reduzierte funktionierende Beispiele zu teilen, die so schnell wie möglich verstanden und gelernt werden können.

Einige weitere allgemeine Richtlinien beinhalten:

- Code-Beispiele sollten kurz sein und idealerweise nur das Merkmal zeigen, das Sie unmittelbar interessiert.
- Schreiben Sie Ihren Code so verständlich wie möglich, auch wenn es nicht der effizienteste Weg ist, ihn zu schreiben.
- Fügen Sie keinen unnötigen Server-seitigen Code, Bibliotheken, Frameworks, Präprozessoren und andere solche Abhängigkeiten ein. Sie machen den Code weniger portabel und schwerer ausführbar und verständlich. Verwenden Sie vanilla code, wo möglich.
- Gehen Sie nicht von Kenntnissen der Leser über irgendwelche Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Funktionen aus. Verwenden Sie zum Beispiel Klassennamen, die innerhalb des Beispiels sinnvoll sind, anstatt Namen, die nur für BEM- oder Bootstrap-Nutzer sinnvoll sind.
- Seien Sie inklusive in Ihren Code-Beispielen; berücksichtigen Sie, dass MDN-Leser aus aller Welt kommen und vielfältig in ihren Ethnien, Religionen, Altersgruppen, Geschlechtern usw. sind. Stellen Sie sicher, dass Text in Code-Beispielen diese Vielfalt widerspiegelt und alle Menschen einschließt.
- Verwenden Sie keine veralteten Funktionen zur Vereinfachung (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); machen Sie es richtig.
- Im Falle von API-Demos, wenn Sie mehrere APIs zusammen verwenden, weisen Sie darauf hin, welche APIs enthalten sind und welche Funktionen woher kommen.

### Browser-Kompatibilität

Wenn Sie Code-Beispiele für eine Technologie erstellen, die noch nicht in allen großen Browsern verfügbar ist, erwägen Sie, [Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) zu verwenden, um auf ein einfacheres Verhalten zurückzufallen oder den Nutzer zu informieren, dass sein Browser noch nicht unterstützt wird. Geben Sie keine unterstützten Browser und deren Versionen in Code-Kommentaren oder Prosa an, da diese Informationen schnell veraltet sind.

## MDN Code-Stil und Formatierung

Meinungen über das richtige Einrücken, Leerzeichen und Zeilenlängen waren schon immer kontrovers. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab. Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten und off-topic Diskussionen zu vermeiden. Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) überprüfen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Neben der automatisierten Formatierung gibt es einige andere Regeln für Code-Beispiele auf MDN, damit das Ergebnis gut gerendert wird.

### Wählen Sie die richtige Sprache

Um eine korrekte Formatierung und Syntaxhervorhebung von Code-Blöcken sicherzustellen, spezifizieren Sie die Sprache des Code-Blocks ordnungsgemäß. Siehe [Beispiel-Codeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details dazu, wie man eine neue Sprache anfordert.

Falls der Code-Block Pseudocode, die Ausgabe eines Befehls oder anderweitig keine Programmiersprache ist, setzen Sie die Sprache auf `plain`:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Wenn die gewünschte Sprache noch nicht von MDN unterstützt wird, setzen Sie die Sprache eines Code-Blocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Nebenwirkungen mit der Prettier-Formatierung und der Syntaxhervorhebung haben könnte.

### Codezeilenlänge

Codezeilen sollten nicht so lang sein, dass sie horizontales Scrollen zum Lesen erfordern. Brechen Sie lange Zeilen an natürlichen Umbrüchen für eine bessere Lesbarkeit, aber nicht auf Kosten der besten Praktiken. Zum Beispiel, dies ist nicht optimal:

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

Noch besser ist es, einen Template-String zu verwenden:

```js example-good
const tommyCat = `Said Tommy the Cat as he reeled back to clear whatever foreign
  matter may have nestled its way into his mighty throat. Many a fat alley rat
  had met its demise while staring point blank down the cavernous barrel of
  this awesome prowling machine.`;
```

### Höhe von Code-Blöcken

Code-Blöcke sollten so lang sein, wie sie sein müssen, aber nicht länger. Ideal ist es, etwas Kurzes, wie 15-25 Zeilen, anzustreben. Wenn ein Code-Block viel länger sein wird, erwägen Sie, den nützlichsten Teil zu zeigen und auf ein vollständiges Beispiel in einem GitHub-Repo, Gist oder CodePen zu verlinken.

### Inline-Code-Formatierung

Verwenden Sie die Inline-Code-Syntax, um Funktionsnamen, Variablenamen und Methodennamen zu markieren. Zum Beispiel: "die `frenchText()` Funktion" wird im Markdown geschrieben als:

```md
the `frenchText()` function
```

Methodennamen sollten von einem Paar Klammern gefolgt werden: zum Beispiel, `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Code-Begriffen zu unterscheiden.

## Richtlinien für die korrekte Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Code-Beispiele auf den MDN Web Docs korrekt angezeigt werden. Sie sollten auch die Reaktionsfähigkeit berücksichtigen, indem Sie Code-Beispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des gerenderten Code-Beispiels

- **Setzen Sie die Breite auf 100%**: Die Hauptinhaltsspalte auf MDN Web Docs ist etwa 700px breit auf dem Desktop, daher müssen die eingebetteten Code-Beispiele bei dieser Breite gut aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für die gerenderte Code-Beispielbreite beizubehalten, um die Lesbarkeit auf dem Bildschirm zu maximieren.

### Hervorheben von Beispielen als gut oder schlecht

Sie werden auf dieser Seite bemerken, dass die Code-Blöcke, die gute Praktiken darstellen, mit einem grünen Häkchen in der rechten Ecke gerendert werden, und die Code-Blöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis gerendert werden.

Sie können den gleichen Stil beim Schreiben von Code-Beispielen verwenden. Sie müssen diesen Stil nicht überall verwenden — nur an Stellen, an denen Sie speziell auf gute und schlechte Verwendungen in Code-Beispielen hinweisen möchten.

Ein Code-Block wird im Markdown mit "Codezäunen" geschrieben, um den Code-Block abzugrenzen, gefolgt von der Sprache im Informationsstring. Zum Beispiel:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Um den Code-Block als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach dem Sprachstring hinzu, wie folgt:

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

## Richtlinien zur Verwendung von Platzhaltertext

Verwenden Sie den Platzhalter-Text "lorem ipsum" generiert von [lipsum.com](https://www.lipsum.com/) oder das [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) VS Code Plugin. Der Standard "lorem ipsum" Text ist in unserer Rechtschreibprüfungskonfiguration enthalten, sodass er nicht als Tippfehler in IDEs oder in Tests während der Code-Überprüfung gemeldet wird. Die Verwendung eines konsistenten Platzhaltertextes erleichtert die Überprüfung von Beispielcode, insbesondere wenn er wiederholt auftritt. Es trägt auch dazu bei, Beispiele eindeutig für Veranschaulichungszwecke zu halten und lenkt Leser nicht mit irrelevanten Inhalten ab.
