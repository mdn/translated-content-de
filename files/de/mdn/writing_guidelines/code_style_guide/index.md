---
title: Richtlinien für das Schreiben von Codebeispielen
short-title: Code style
slug: MDN/Writing_guidelines/Code_style_guide
l10n:
  sourceCommit: 3a42aa04436e17eaa1f46b77859c71d0dd3dc0f8
---

Dieser Artikel beschreibt Richtlinien für Stil und Formatierung von Codebeispielen auf MDN Web Docs, unabhängig von der Programmiersprache.
Für Leitfäden über Prosa und andere Inhalte, siehe den [Leitfaden zum Schreibstil](/de/docs/MDN/Writing_guidelines/Writing_style_guide#code_examples).

Für technologiespezifische Leitfäden sehen Sie sich die folgenden Artikel an:

- [HTML-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/HTML)
- [CSS-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS)
- [JavaScript-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript)
- [Shell-Prompt-Richtlinien](/de/docs/MDN/Writing_guidelines/Code_style_guide/Shell)

## Allgemeine Prinzipien für Codebeispiele

Es gibt eine übergeordnete Überlegung, die Sie beachten sollten: **Leser werden Beispiele kopieren und in ihren eigenen Code einfügen und möglicherweise in die Produktion bringen.**
Daher sollten Sie sicherstellen, dass Codebeispiele verwendbar sind, allgemein akzeptierte Best Practices befolgen und nichts tun, was eine Anwendung unsicher, ineffizient, überladen oder unzugänglich macht.

Wenn das Codebeispiel nicht ausführbar oder produktionswürdig ist, fügen Sie eine Warnung in einem Codekommentar und im erläuternden Text ein; wenn es z.B. nur ein Snippet und kein vollständiges Beispiel ist, machen Sie dies deutlich. Das bedeutet auch, dass Sie alle Informationen bereitstellen sollten, die zum Ausführen des Beispiels erforderlich sind, einschließlich Abhängigkeiten und Setu-Informationen.

Codebeispiele sollten einfach genug sein, um verständlich zu sein, aber komplex genug, um etwas Interessantes und (vorzugsweise) Nützliches zu tun.
Das Ziel ist nicht unbedingt, effizienten, cleveren Code zu produzieren, der Experten beeindruckt und große Funktionalität bietet, sondern reduzierte funktionierende Beispiele zu teilen, aus denen man so schnell wie möglich lernen kann.

Einige allgemeine Richtlinien umfassen:

- Codebeispiele sollten kurz sein und idealerweise nur das Merkmal zeigen, das Sie unmittelbar interessiert.
- Schreiben Sie Ihren Code so verständlich wie möglich, auch wenn dies nicht die effizienteste Art ist, ihn zu schreiben.
- Schließen Sie keinen unnötigen serverseitigen Code, Bibliotheken, Frameworks, Präprozessoren und ähnliche Abhängigkeiten ein. Sie machen den Code weniger portabel und schwerer zu verstehen und auszuführen. Verwenden Sie, wo möglich, Vanilla-Code.
- Gehen Sie nicht von der Kenntnis der Leser über Bibliotheken, Frameworks, Präprozessoren oder andere nicht-native Funktionen aus. Verwenden Sie z. B. Klassennamen, die innerhalb des Beispiels Sinn machen, anstatt Klassennamen, die für BEM- oder Bootstrap-Nutzer sinnvoll sind.
- Seien Sie inklusiv in Ihren Codebeispielen; bedenken Sie, dass MDN-Leser aus der ganzen Welt kommen und vielfältig in ihren Ethnien, Religionen, Altersgruppen, Geschlechtern usw. sind. Stellen Sie sicher, dass der Text in Codebeispielen diese Vielfalt widerspiegelt und alle Menschen einschließt.
- Verwenden Sie keine veralteten Features aus Gründen der Kürze (wie Präsentationselemente wie {{HTMLElement("big")}} oder [`document.write()`](/de/docs/Web/API/Document/write)); tun Sie es korrekt.
- Im Falle von API-Demonstrationen, wenn Sie mehrere APIs gemeinsam nutzen, weisen Sie darauf hin, welche APIs enthalten sind und welche Funktionen von woher stammen.

### Browser-Unterstützung

Wenn Sie Codebeispiele für eine Technologie erstellen, die noch nicht in allen großen Browsern verfügbar ist, ziehen Sie in Betracht, [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) zu verwenden, um auf ein einfacheres Verhalten zurückzufallen oder den Benutzer darauf hinzuweisen, dass sein Browser noch nicht unterstützt wird. Geben Sie keine unterstützten Browser und deren Versionen in Codekommentaren oder Prosa an, da diese Informationen schnell veralten.

## MDN Code-Stil und Formatierung

Meinungen zur richtigen Einrückung, zum Whitespace und zu Zeilenlängen sind immer umstritten gewesen. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.
Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/), um den Code-Stil konsistent zu halten und Off-Topic-Diskussionen zu vermeiden. Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Abgesehen von der automatisierten Formatierung gibt es noch einige andere Regeln für Codebeispiele auf MDN, damit das Ergebnis gut dargestellt wird.

### Die richtige Sprache wählen

Um sicherzustellen, dass Codeblöcke richtig formatiert und hervorgehoben werden, geben Sie die Sprache des Codeblocks korrekt an.
Siehe [Beispiel-Codeblöcke in MDN Markdown](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) für eine Liste der von MDN unterstützten Sprachen sowie Details, wie man eine neue Sprache anfordert.

Wenn es sich beim Codeblock um Pseudocode, die Ausgabe eines Befehls oder eine andere nicht-programmierte Sprache handelt, legen Sie die Sprache auf `plain` fest:

````md
```plain
StaleElementReferenceException: The element reference of ABD-123 is stale…
```
````

> [!WARNING]
> Wenn die gewünschte Sprache von MDN noch nicht unterstützt wird, setzen Sie die Sprache eines Codeblocks **nicht** auf eine ähnliche Sprache, da dies unbeabsichtigte Seiteneffekte mit der Prettier-Formatierung und Syntax-Hervorhebung haben kann.

### Zeilenlänge für Code

Codezeilen sollten nicht so lang sein, dass Horizontal-Scrolling erforderlich ist, um sie zu lesen.
Brechen Sie lange Zeilen an natürlichen Trennungspunkten für bessere Lesbarkeit, jedoch nicht auf Kosten der Best Practices.
Beispielsweise ist das nicht optimal:

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

### Höhe von Codeblöcken

Codeblöcke sollten so lang wie nötig, aber nicht länger sein. Idealerweise zielen Sie auf eine Länge von 15-25 Zeilen. Wenn ein Codeblock viel länger wird, ziehen Sie in Betracht, den nützlichsten Teil zu zeigen und auf ein vollständiges Beispiel in einem GitHub-Repo, Gist oder CodePen zu verlinken.

### Inline-Code-Formatierung

Verwenden Sie Inline-Code-Syntax, um Funktionsnamen, Variablennamen und Methodennamen zu markieren. Zum Beispiel: "die `frenchText()` Funktion" wird im Markdown so geschrieben:

```md
the `frenchText()` function
```

Methodennamen sollten von einem Paar Klammern gefolgt werden: zum Beispiel, `doSomethingUseful()`. Die Klammern helfen, Methoden von anderen Codeausdrücken zu unterscheiden.

## Richtlinien für ordnungsgemäße Darstellung

Diese Richtlinien sollten befolgt werden, um sicherzustellen, dass die von Ihnen geschriebenen Codebeispiele korrekt auf MDN Web Docs angezeigt werden. Sie sollten auch die Reaktionsfähigkeit beachten, indem Sie Codebeispiele so schreiben, dass sie auch auf mobilen Geräten nützlich sind.

### Größe des dargestellten Codebeispiels

- **Setzen Sie die Breite auf 100%**: Das Hauptinhaltspanel auf MDN Web Docs ist etwa 700px breit auf dem Desktop, daher sollten die eingebetteten Codebeispiele bei dieser Breite gut aussehen.
- **Setzen Sie die Höhe unter 700px**: Wir empfehlen, diese Höhe für das gerenderte Codebeispiel beizubehalten, um maximale Lesbarkeit auf dem Bildschirm zu gewährleisten.

### Beispiele als gut oder schlecht hervorheben

Sie werden auf dieser Seite bemerken, dass die Codeblöcke, die gute Praktiken zeigen, mit einem grünen Häkchen in der rechten Ecke gerendert werden, und die Codeblöcke, die schlechte Praktiken demonstrieren, mit einem weißen Kreuz in einem roten Kreis.

Sie können denselben Stil befolgen, wenn Sie Codebeispiele schreiben. Sie müssen diesen Stil nicht überall verwenden – nur an Stellen, an denen Sie speziell auf gute und schlechte Verwendung in Codebeispielen hinweisen möchten.

Ein Codeblock wird in Markdown mit "Codezäunen" geschrieben, um den Codeblock zu kennzeichnen, gefolgt von der Sprache im Info-String. Beispielsweise:

````md
```js
function myFunc() {
  console.log("Hello!");
}
```
````

Um den Codeblock als gutes oder schlechtes Beispiel darzustellen, fügen Sie `example-good` oder `example-bad` nach dem Sprachstring hinzu, wie folgt:

````md
```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```
````

Diese werden dargestellt als:

```html example-good
<p>Good example</p>
```

```html example-bad
<p>Bad example</p>
```

## Richtlinien für die Verwendung von Platzhaltertext

Verwenden Sie den Lorem-Ipsum-Platzhaltertext, der von [lipsum.com](https://www.lipsum.com/) oder dem [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) VS Code Plugin generiert wird. Der standardmäßige Lorem-Ipsum-Text ist in unserer Rechtschreibprüfungskonfiguration enthalten, sodass er in IDEs oder bei Tests während der Codeüberprüfung nicht als Tippfehler gemeldet wird. Die Verwendung eines konsistenten Platzhaltertextes macht es einfacher, Codebeispiele zu überprüfen, insbesondere wenn sie mehrfach erscheinen. Es hilft auch, Beispiele klar zur Veranschaulichung zu halten und vermeidet es, Leser mit irrelevanten Inhalten abzulenken.
