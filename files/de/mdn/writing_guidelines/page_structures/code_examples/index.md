---
title: Code-Beispiele auf MDN
short-title: Code examples
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

Auf MDN finden Sie zahlreiche Code-Beispiele, die demonstrieren, wie die von uns dokumentierten Webplattform-Funktionen verwendet werden.
Dieser Artikel beschreibt die Möglichkeiten, wie Sie Code-Beispiele zu Seiten hinzufügen können, sowie die Typen, die Sie verwenden können und wann Sie sie einsetzen sollten.

> [!NOTE]
> Diese Seite beschreibt, **wie** Code in MDN-Seiten aufgenommen wird.
> Wenn Sie Hinweise zur Überprüfung und zum Stil für das Hinzufügen von Code in eine MDN-Seite suchen, sehen Sie sich unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide) an.

## Welche Arten von Code-Beispielen gibt es auf MDN?

Es gibt vier Arten von Code-Beispielen:

- **Statische Beispiele** — Code-Blöcke, die Quellcode auf einer Seite anzeigen.
- **Live-Beispiele** — Ein Makro nimmt Code-Blöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und bettet das iframe auf der Seite ein, um das Ergebnis zu zeigen.
  Die veröffentlichte Seite zeigt die Quellcode-Blöcke und die Ergebnisse nebeneinander.
- **Interaktive Beispiele** — Ein Makro rendert Quellcode auf der Seite und zeigt die Ergebnisse in einem Panel neben dem Quellcode an.
  Leser können den Quellcode bearbeiten und das Beispiel erneut ausführen, um die Wirkung ihrer Änderungen zu sehen.
- **GitHub-Einbettungen** — Ein Makro nimmt ein Dokument in einem GitHub-Repository in der [MDN-Organisation](https://github.com/mdn/), platziert es in einem {{htmlelement("iframe")}}, und bettet es in die Seite ein, um das Ergebnis zu zeigen.

## Wann sollten Sie welches verwenden?

Jeder Code-Beispieltyp hat seine eigenen Anwendungsfälle:

- **Statische Beispiele** sind nützlich, wenn Sie Code zeigen müssen und es nicht wichtig ist, die Ergebnisse des Codes auf der veröffentlichten Seite zu demonstrieren, oder wenn Sie einen Zwischenschritt in einem Artikel zeigen.
  Leser suchen oft nach diesen Arten von Code-Blöcken, die zeigen, wie eine Funktion verwendet wird, damit sie ein minimales Beispiel in ihr Projekt kopieren und einfügen können.
  Darüber hinaus möchten Sie möglicherweise einen statischen Code-Block verwenden, der eine API oder eine Funktion demonstriert, die nicht gut als Live-Beispiel funktioniert.
- **Live-Beispiele** sind nützlich, wenn Sie Quellcode anzeigen und dann dessen Ausführung zeigen möchten, ohne dass es wichtig ist, dass es ein eigenständiges Beispiel ist.
  Sie sind nützlich, weil Sie den Code nur einmal aktualisieren müssen, um sowohl die Code-Blöcke auf der Seite als auch die Live-Ergebnisse nebeneinander zu aktualisieren.
- **Interaktive Beispiele** werden auf Referenzseiten verwendet.
  Sie sind auf einmal pro Seite beschränkt und müssen an einem bestimmten Platz auf der Seite nach der Einleitung platziert werden.
  Sie sind nützlich, um zu zeigen, was die häufigen oder praktischen Verwendungen einer Funktion sind.
- **GitHub-Einbettungen** sind nützlich, wenn Sie ein bereits vorhandenes Beispiel einbetten möchten, den Quellcode nicht zeigen möchten und/oder sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist.
  Da In-Page-Code und Quellcode an zwei verschiedenen Stellen sind, sind die Wartungskosten höher.

## Allgemeine Richtlinien

Es gibt Stil- und Inhaltsaspekte, die Sie beachten sollten, wenn Sie Beispiele auf MDN hinzufügen oder aktualisieren.

- Wenn Sie Beispiele auf einer Seite platzieren, stellen Sie sicher, dass alle Funktionen oder Optionen der von Ihnen beschriebenen API oder des Konzepts abgedeckt sind.
  Mindestens die häufigsten Optionen oder Eigenschaften sollten demonstriert werden.
- Gehen Sie jedem Beispiel mit einer Erklärung voraus, was das Beispiel tut und warum es interessant oder nützlich ist.
- Folgen Sie jedem Code-Stück mit einer Erklärung, was es tut.
- Wenn möglich, zerlegen Sie große Beispiele in kleinere Teile. Beispielsweise wird das "Live-Beispiel"-System automatisch Ihren gesamten Code in ein Stück zusammenfügen, bevor das Beispiel ausgeführt wird. Sie können also tatsächlich Ihr JavaScript, HTML und/oder CSS in kleinere Teile teilen und nach jedem Teil erklärenden Text hinzufügen, wenn Sie dies möchten. Dies ist eine großartige Möglichkeit, lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über die Demonstration hinaus, wie jedes Stück der API oder Technologie funktioniert. Überlegen Sie sich mögliche Anwendungsfälle in der realen Welt, die Sie zu demonstrieren versuchen könnten.

## Statische Beispiele

Statische Beispiele sind Code-Blöcke, die zeigen, wie eine Funktion im Quellcode aussieht.
Diese werden auf einer Seite mit Markdown-"Codezaun" erstellt, wie in [Beispiel Code-Blöcke](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben.
Wenn sie auf Dokumentationsseiten verwendet werden, sehen sie so aus:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

## Interaktive Beispiele

Das [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs)-Makro wird verwendet, um interaktive Beispiele am Anfang von MDN-Referenzseiten einzubetten.
Sie sind für Leser gedacht, die ein Beispiel ausprobieren möchten, ohne den gesamten Artikel zu einem Thema oder einer Funktion lesen zu müssen.

Das `InteractiveExample`-Makro akzeptiert einen Titel für das Beispiel als Zeichenkette, gefolgt von einem Schlüsselwort, um die Höhe des Beispiels anzugeben.
Die einzubeziehenden Code-Blöcke im Beispiel erscheinen nach dem Makroaufruf und enthalten das Schlüsselwort `interactive-example` in der Info-Zeichenkette nach der Sprache des Code-Blocks.
Der [JavaScript `Array.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it) Gebrauch ist ein gutes Beispiel für dieses Makro, das im Markdown-Quellcode so aussieht:

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

Es gibt einige Einschränkungen für interaktive Beispiele:

- Sie sind für jede Technologie spezialisiert – die UI für JavaScript ist anders als die UI für CSS, und sie illustrieren nur eine Technologie isoliert.
  Sie sind nicht geeignet, wenn Sie zum Beispiel zeigen möchten, wie eine bestimmte HTML/CSS/JS-Struktur kombiniert wird.
- Sie sind nicht für große Code-Beispiele gedacht – die Benutzeroberfläche unterstützt eine Reihe von **festen Höhen**, die nur wirklich für kurze (sagen wir, 10–15 Zeilen) Beispiele funktionieren.
- Eine MDN-Seite kann nur ein interaktives Beispiel haben.

## Live-Beispiele

Live-Beispiele werden mithilfe des [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs)-Makros in die Seite eingefügt.
Ein \\{{EmbedLiveSample}}-Makro nimmt Code-Blöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und fügt das Ergebnis in die Seite ein.
Mehr Informationen finden Sie im [Live-Beispiele-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).

## GitHub Live-Beispiele

GitHub Live-Beispiele werden mithilfe des [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs)-Makros in die Seite eingebettet.
Ein \\{{EmbedGHLiveSample}} nimmt den Inhalt an einer angegebenen URL (die ein **MDN** GitHub-Repository sein muss) und fügt ihn in die Seite in einem {{htmlelement("iframe")}} ein.

Das Makro hat drei Parameter:

1. Die URL des einzubettenden Dokuments — dies ist relativ zur MDN-Organisation, deren oberstes Verzeichnis sich unter `https://mdn.github.io/` befindet. Dieser Parameter muss also den Teil der URL nach diesem enthalten, z.B. `my-subdirectory/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` genannt wird.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.

Schauen wir uns ein Beispiel an. Angenommen, wir wollten den Code unter <https://mdn.github.io/learning-area/html/introduction-to-html/getting-started/> einbetten. Wir könnten den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/html/introduction-to-html/getting-started/", '100%', 100)}}

So sieht es gerendert aus:

{{EmbedGHLiveSample("learning-area/html/introduction-to-html/getting-started/", '100%', 100)}}
