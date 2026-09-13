---
title: Code-Beispiele auf MDN
short-title: Code examples
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Auf MDN werden Sie zahlreiche Code-Beispiele sehen, die demonstrieren, wie man die von uns dokumentierten Webplattform-Funktionen verwendet.
Dieser Artikel beschreibt die Möglichkeiten, Code-Beispiele auf Seiten hinzuzufügen, die Arten, die Sie verwenden können und wann sie zu verwenden sind.

> [!NOTE]
> Diese Seite beschreibt, **wie** Code in MDN-Seiten eingefügt wird.
> Wenn Sie Linting- und Stilhinweise zum Hinzufügen von Code auf einer MDN-Seite wünschen, sehen Sie unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide) ein.

## Welche Arten von Code-Beispielen gibt es auf MDN?

Es gibt vier Arten von Code-Beispielen:

- **Statische Beispiele** — Codeblöcke, die Quellcode auf einer Seite anzeigen.
- **Live-Beispiele** — Ein Makro nimmt Codeblöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und bettet das iframe in die Seite ein, um das Ergebnis zu zeigen.
  Die veröffentlichte Seite zeigt die Quellcode-Blöcke und die Ergebnisse nebeneinander an.
- **Interaktive Beispiele** — Ein Makro rendert den Quellcode auf der Seite und zeigt die Ergebnisse in einem Panel neben dem Quellcode an.
  Leser können den Quellcode bearbeiten und das Beispiel erneut ausführen, um die Auswirkungen ihrer Änderungen zu sehen.
- **GitHub-Einbettungen** — Ein Makro nimmt ein Dokument in einem GitHub-Repository der [MDN-Organisation](https://github.com/mdn/), legt es in einem {{htmlelement("iframe")}} ab und bettet es in die Seite ein, um das Ergebnis zu zeigen.

## Wann sollten Sie welches verwenden?

Jeder Typ von Code-Beispiel hat seine eigenen Anwendungsfälle:

- **Statische Beispiele** sind nützlich, wenn Sie Code zeigen müssen und es nicht wichtig ist, die Ergebnisse des Codes auf der veröffentlichten Seite zu demonstrieren, oder wenn Sie in einem Artikel einen Zwischenschritt zeigen.
  Leser suchen oft nach diesen Arten von Codeblöcken, die zeigen, wie ein Feature verwendet wird, damit sie ein minimales Beispiel in ihr Projekt kopieren und einfügen können.
  Zusätzlich könnte ein statischer Codeblock eine API oder ein Feature demonstrieren, das als Live-Beispiel nicht gut funktioniert.
- **Live-Beispiele** sind nützlich, wenn Sie Quellcode zeigen und ihn dann ausführen wollen, ohne dass es wichtig ist, dass es sich um ein eigenständiges Beispiel handelt.
  Sie sind nützlich, da Sie den Code nur einmal aktualisieren müssen, um sowohl die Codeblöcke auf der Seite als auch die Live-Ergebnisse nebeneinander zu aktualisieren.
- **Interaktive Beispiele** werden auf Referenzseiten verwendet.
  Sie sind auf ein Vorkommen pro Seite begrenzt und müssen an einem bestimmten Platz auf der Seite nach der Einführung sein.
  Sie sind nützlich, um zu zeigen, wie die gängigen oder praktischen Anwendungen eines Features sind.
- **GitHub-Einbettungen** sind nützlich, wenn Sie ein vorhandenes Beispiel einbetten möchten, den Quellcode nicht zeigen wollen und/oder sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist.
  Da On-Page-Code und Quellcode an zwei verschiedenen Orten sind, sind die Wartungskosten höher.

## Allgemeine Richtlinien

Es gibt Stil- und Inhaltsüberlegungen, die Sie beachten sollten, wenn Sie Muster auf MDN hinzufügen oder aktualisieren.

- Wenn Sie Muster auf einer Seite platzieren, versuchen Sie sicherzustellen, dass alle Funktionen oder Optionen der API oder des Konzepts, über das Sie schreiben, abgedeckt sind.
  Zumindest sollten die häufigsten Optionen oder Eigenschaften demonstriert werden.
- Jeder Beispiel sollte mit einer Erklärung dessen beginnen, was das Beispiel tut und warum es interessant oder nützlich ist.
- Folgen Sie jedem Stück Code mit einer Erklärung, was es tut.
- Wenn möglich, brechen Sie große Beispiele in kleinere Teile. Beispielsweise wird das "Live-Beispiel"-System automatisch Ihren gesamten Code zusammenführen, bevor es das Beispiel ausführt, sodass Sie tatsächlich Ihr JavaScript, HTML und/oder CSS in kleinere Teile mit erklärendem Text nach jedem Teil aufteilen können, wenn Sie dies wünschen. Dies ist eine großartige Möglichkeit, lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über die Demonstration hinaus, wie jedes Stück der API oder Technologie funktioniert. Berücksichtigen Sie mögliche reale Anwendungsfälle, die Sie möglicherweise demonstrieren möchten.

## Statische Beispiele

Statische Beispiele sind Codeblöcke, die zeigen, wie ein Feature im Quellcode aussieht.
Diese werden auf einer Seite mit Markdown-"Code-Fences" eingefügt, wie in [Beispiel-Codeblöcke](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben.
Wenn sie auf Dokumentationsseiten verwendet werden, sehen sie so aus:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

## Interaktive Beispiele

Das [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs)-Makro wird verwendet, um interaktive Beispiele am Anfang von MDN-Referenzseiten einzubetten.
Sie sind für Leser, die ein Beispiel ausprobieren möchten, ohne den gesamten Artikel zu einem Thema oder Feature durchzulesen.

Das `InteractiveExample`-Makro akzeptiert einen Titel für das Beispiel als Zeichenkette, gefolgt von einem Schlüsselwort zur Angabe der Höhe des Beispiels.
Die in das Beispiel aufzunehmenden Codeblöcke erscheinen nach dem Makroaufruf und enthalten das Schlüsselwort `interactive-example` in der Info-Zeichenkette nach der Sprache des Codeblocks.
Die Verwendung von [JavaScript `Array.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it) ist ein gutes Beispiel für dieses Makro, das im Markdown-Quelltext so aussieht:

````md
\{{InteractiveExample("JavaScript Demo: Array.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```
````

Es gibt einige Einschränkungen bei interaktiven Beispielen:

- Sie sind spezialisiert pro Technologie — das UI für JavaScript ist anders als das UI für CSS, und sie illustrieren nur eine Technologie isoliert.
  Sie sind nicht geeignet, wenn Sie zum Beispiel zeigen möchten, wie man eine bestimmte HTML/CSS/JS-Struktur kombiniert.
- Sie sind nicht für große Code-Beispiele gedacht — das UI unterstützt eine Palette von **festen Höhen**, die nur wirklich für kurze (sagen wir, 10–15 Zeilen) Beispiele funktionieren.
- Eine MDN-Seite kann nur ein interaktives Beispiel haben.

## Live-Beispiele

Live-Beispiele werden in die Seite mithilfe des [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs)-Makros eingefügt.
Ein \\{{EmbedLiveSample}}-Makro nimmt Codeblöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und fügt das Ergebnis in die Seite ein.
Siehe den [Live-Beispiele-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) für mehr Informationen.

## GitHub Live-Beispiele

GitHub Live-Beispiele werden in die Seite mit dem [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs)-Makro eingebettet.
Ein \\{{EmbedGHLiveSample}} nimmt den Inhalt an einer angegebenen URL (die ein **MDN** GitHub-Repository sein muss) und fügt ihn in die Seite in einem {{htmlelement("iframe")}} ein.

Das Makro hat drei Parameter:

1. Die URL des einzubettenden Dokuments — dies ist relativ zur MDN-Organisation, das oberste Verzeichnis befindet sich unter `https://mdn.github.io/`. Dieser Parameter muss also den Teil der URL nach diesem Punkt enthalten, z.B. `my-subdirectory/example.html`. Sie können den Dateinamen auslassen, wenn er `index.html` genannt wird.
2. Die Breite des `<iframe>`, die als Prozentzahl oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentzahl oder in Pixeln ausgedrückt werden kann.

Lassen Sie uns ein Beispiel ansehen. Angenommen, wir wollten den Code unter <https://mdn.github.io/learning-area/html/introduction-to-html/getting-started/> einbetten. Wir könnten den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/html/introduction-to-html/getting-started/", '100%', 100)}}

Dies sieht im gerenderten Zustand so aus:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/getting-started/", '100%', 100)}}
