---
title: Code-Beispiele auf MDN
short-title: Code examples
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Auf MDN finden Sie zahlreiche Code-Beispiele, die demonstrieren, wie Sie Webplattform-Funktionen, die wir dokumentieren, nutzen können. Dieser Artikel beschreibt, auf welche Weise Sie Code-Beispiele zu Seiten hinzufügen können, welche Typen Sie verwenden können und wann Sie diese verwenden sollten.

> [!NOTE]
> Diese Seite beschreibt, **wie** Code in MDN-Seiten aufgenommen wird.
> Wenn Sie Linting und Stilhinweise für das Hinzufügen von Code auf einer MDN-Seite wünschen, siehe unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide).

## Welche Arten von Code-Beispielen gibt es auf MDN?

Es gibt vier Arten von Code-Beispielen:

- **Statische Beispiele** — Codeblöcke, die Quellcode auf einer Seite anzeigen.
- **Live-Beispiele** — Ein Makro nimmt Code-Blöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und bettet das iframe in die Seite ein, um das Ergebnis anzuzeigen. Die veröffentlichte Seite zeigt die Quellcode-Blöcke und die Ergebnisse nebeneinander an.
- **Interaktive Beispiele** — Ein Makro rendert Quellcode auf der Seite und zeigt die Ergebnisse in einem Bereich neben dem Quellcode an. Leser können den Quellcode bearbeiten und das Beispiel erneut ausführen, um die Auswirkungen ihrer Änderungen zu sehen.
- **GitHub-Einbindungen** — Ein Makro nimmt ein Dokument in einem GitHub-Repo in der [MDN-Organisation](https://github.com/mdn/), platziert es in einem {{htmlelement("iframe")}}, und bettet es in die Seite ein, um das Ergebnis anzuzeigen.

## Wann sollten Sie welche verwenden?

Jeder Typ von Code-Beispiel hat eigene Anwendungsfälle:

- **Statische Beispiele** sind nützlich, wenn Sie Code zeigen müssen und es nicht wichtig ist, die Ergebnisse des Codes auf der veröffentlichten Seite zu demonstrieren oder wenn Sie einen Zwischenschritt in einem Artikel zeigen. Leser suchen oft nach diesen Arten von Codeblöcken, die zeigen, wie man ein Feature verwendet, damit sie ein minimales Beispiel in ihr Projekt kopieren und einfügen können. Außerdem könnten Sie einen statischen Codeblock verwenden wollen, der eine API oder ein Feature demonstriert, das sich nicht gut als Live-Beispiel eignet.
- **Live-Beispiele** sind nützlich, wenn Sie Quellcode zeigen möchten, ihn dann ausführen lassen und es Ihnen nicht wichtig ist, dass es sich um ein eigenständiges Beispiel handelt. Sie sind nützlich, weil Sie den Code nur einmal aktualisieren müssen, um sowohl die Codeblöcke auf der Seite als auch die Live-Ergebnisse nebeneinander zu aktualisieren.
- **Interaktive Beispiele** werden auf Referenzseiten verwendet. Sie sind auf einen pro Seite limitiert und müssen sich an einer bestimmten Stelle auf der Seite nach der Einleitung befinden. Sie sind nützlich, um zu zeigen, welche häufigen oder praktischen Anwendungen eines Features es gibt.
- **GitHub-Einbindungen** sind nützlich, wenn Sie ein bestehendes Beispiel einbetten möchten, den Quellcode nicht zeigen wollen und/oder sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist. Da sich On-Page-Code und Quellcode an zwei verschiedenen Orten befinden, sind die Wartungskosten höher.

## Allgemeine Leitlinien

Es gibt Stil- und Inhaltsüberlegungen, die Sie beachten sollten, wenn Sie Beispiele auf MDN hinzufügen oder aktualisieren.

- Stellen Sie sicher, dass alle Features oder Optionen der API oder des Konzepts, über das Sie schreiben, abgedeckt sind. Mindestens die häufigsten Optionen oder Eigenschaften sollten demonstriert werden.
- Gehen Sie jedem Beispiel mit einer Erklärung voraus, was das Beispiel macht und warum es interessant oder nützlich ist.
- Folgen Sie jedem Stück Code mit einer Erklärung dessen, was es tut.
- Teilen Sie große Beispiele nach Möglichkeit in kleinere Teile. Zum Beispiel wird das "Live-Beispiel"-System automatisch Ihren gesamten Code in ein einziges Stück zusammenfügen, bevor es das Beispiel ausführt, sodass Sie tatsächlich Ihr JavaScript, HTML und/oder CSS in kleinere Teile mit beschreibendem Text nach jedem Stück aufteilen können, wenn Sie das tun möchten. Dies ist eine großartige Möglichkeit, lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über die Demonstration hinaus, wie jedes Stück der API oder Technologie funktioniert. Berücksichtigen Sie mögliche reale Anwendungsfälle, die Sie zu zeigen versuchen könnten.

## Statische Beispiele

Statische Beispiele sind Codeblöcke, die zeigen, wie ein Feature im Quellcode aussieht. Diese werden auf einer Seite mit Markdown-"Codezäunen" eingefügt, wie in [Beispielcodeblöcke](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben. Bei Verwendung auf Dokumentationsseiten sehen sie folgendermaßen aus:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

## Interaktive Beispiele

Das [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs) Makro wird verwendet, um interaktive Beispiele am Anfang von MDN-Referenzseiten einzubetten. Sie sind für Leser, die ein Beispiel ausprobieren möchten, ohne den gesamten Artikel zu einem Thema oder Feature lesen zu müssen.

> [!WARNING]
> Derzeit werden **nur JavaScript**-Beispiele unterstützt. Siehe https://github.com/orgs/mdn/discussions/782 für Implementierungsdetails.

Das `InteractiveExample`-Makro akzeptiert einen Titel für das Beispiel als Zeichenkette, gefolgt von einem Schlüsselwort zur Angabe der Höhe des Beispiels. Die in das Beispiel einzufügenden Code-Blöcke erscheinen nach dem Makroaufruf und enthalten das Schlüsselwort `interactive-example` im Info-String nach der Sprache des Codeblocks. Die Verwendung des [JavaScript `Array.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it) ist ein gutes Beispiel für dieses Makro, das im Markdown-Quelltext folgendermaßen aussieht:

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

- Sie sind technologie-spezifisch — die Benutzeroberfläche für JavaScript ist anders als die für CSS, und sie illustrieren nur eine Technologie isoliert. Sie sind nicht geeignet, wenn Sie beispielsweise zeigen möchten, wie man eine bestimmte HTML/CSS/JS-Struktur kombiniert.
- Sie sind nicht für große Codebeispiele gedacht — die Benutzeroberfläche unterstützt eine Reihe von **festen Höhen**, die wirklich nur für kurze (etwa 10–15 Zeilen) Beispiele funktionieren.
- Eine MDN-Seite kann nur ein interaktives Beispiel enthalten.

## Live-Beispiele

Live-Beispiele werden mit dem [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) Makro in die Seite eingefügt. Ein \\{{EmbedLiveSample}}-Makro nimmt Code-Blöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}}, und fügt das Ergebnis in die Seite ein. Weitere Informationen finden Sie im [Live-Beispiele-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).

## GitHub Live-Beispiele

GitHub Live-Beispiele werden mit dem [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) Makro in die Seite eingebettet. Ein \\{{EmbedGHLiveSample}} nimmt den Inhalt an einer angegebenen URL (die ein **MDN** GitHub-Repository sein muss) und fügt ihn in die Seite in einem {{htmlelement("iframe")}} ein.

Das Makro hat drei Parameter:

1. Die URL des zu einbettenden Dokuments — diese ist relativ zur MDN-Organisation, deren oberstes Verzeichnis sich unter `https://mdn.github.io/` befindet. Dieser Parameter muss den Teil der URL nach diesem enthalten, z.B. `my-subdirectory/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` genannt wird.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln angegeben werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln angegeben werden kann.

Sehen wir uns ein Beispiel an. Angenommen, wir möchten den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Wir könnten den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Dies sieht bei der Darstellung folgendermaßen aus:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}
