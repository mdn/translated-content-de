---
title: Code-Beispiele auf MDN
short-title: Code examples
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 74ab773eebccc1f7fe27c2c4abd4998cc074186b
---

Auf MDN finden Sie zahlreiche Code-Beispiele, die zeigen, wie Sie die von uns dokumentierten Funktionen der Webplattform nutzen können. Dieser Artikel beschreibt, wie Sie Code-Beispiele zu Seiten hinzufügen können, welche Typen es gibt und wann Sie diese verwenden sollten.

> [!NOTE]
> Diese Seite beschreibt, **wie** Code auf MDN-Seiten eingebunden wird.
> Wenn Sie Hinweise zur Formatierung und zum Stil für das Hinzufügen von Code auf einer MDN-Seite benötigen, lesen Sie unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide).

## Welche Arten von Code-Beispielen gibt es auf MDN?

Es gibt vier Arten von Code-Beispielen:

- **Statische Beispiele** — Code-Blöcke, die Quellcode auf einer Seite anzeigen.
- **Live-Beispiele** — Ein Makro nimmt Code-Blöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und bettet das iframe in die Seite ein, um das Ergebnis zu zeigen. Die veröffentlichte Seite zeigt die Quellcode-Blöcke und die Ergebnisse nebeneinander.
- **Interaktive Beispiele** — Ein Makro rendert Quellcode auf der Seite und die Ergebnisse in einem Panel neben dem Quellcode. Leser können den Quellcode bearbeiten und das Beispiel erneut ausführen, um die Auswirkungen ihrer Änderungen zu sehen.
- **GitHub-Einbettungen** — Ein Makro nimmt ein Dokument in einem GitHub-Repo der [MDN-Organisation](https://github.com/mdn/), platziert es in einem {{htmlelement("iframe")}} und bettet es in die Seite ein, um das Ergebnis zu zeigen.

## Wann sollte man jede dieser Möglichkeiten nutzen?

Jeder Typ von Code-Beispiel hat seine eigenen Anwendungsfälle:

- **Statische Beispiele** sind nützlich, wenn Sie Code zeigen müssen und es nicht wichtig ist, die Ergebnisse auf der veröffentlichten Seite zu demonstrieren, oder wenn Sie einen Zwischenschritt in einem Artikel zeigen. Leser suchen oft nach solchen Code-Blöcken, um zu sehen, wie ein Feature verwendet wird, damit sie ein minimales Beispiel in ihr Projekt kopieren und einfügen können. Zusätzlich möchten Sie vielleicht einen statischen Code-Block, um eine API oder ein Feature zu demonstrieren, das sich nicht gut als Live-Beispiel eignet.
- **Live-Beispiele** sind nützlich, wenn Sie Quellcode zeigen und ihn dann ausführen möchten, ohne dass es wichtig ist, dass es sich um ein eigenständiges Beispiel handelt. Sie sind nützlich, weil Sie den Code nur einmal aktualisieren müssen, um sowohl die Code-Blöcke auf der Seite als auch die Live-Ergebnisse nebeneinander zu aktualisieren.
- **Interaktive Beispiele** werden auf Referenzseiten verwendet. Sie sind auf ein Vorkommen pro Seite begrenzt und müssen sich an einer bestimmten Stelle auf der Seite nach der Einführung befinden. Sie sind nützlich, um zu zeigen, was die üblichen oder praktischen Anwendungen eines Features sind.
- **GitHub-Einbettungen** sind nützlich, wenn Sie ein bestehendes Beispiel einbetten möchten, ohne den Quellcode zu zeigen, und/oder Sie sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist. Da On-Page-Code und Quellcode an zwei verschiedenen Orten sind, sind die Wartungskosten höher.

## Allgemeine Richtlinien

Es gibt Stil- und Inhaltsüberlegungen, die beim Hinzufügen oder Aktualisieren von Beispielen auf MDN wichtig sind.

- Wenn Sie Beispiele auf einer Seite platzieren, stellen Sie sicher, dass alle Funktionen oder Optionen der API oder des Konzepts, über das Sie schreiben, abgedeckt sind. Mindestens die gebräuchlichsten Optionen oder Eigenschaften sollten demonstriert werden.
- Gehen Sie jedem Beispiel mit einer Erklärung voraus, was das Beispiel tut und warum es interessant oder nützlich ist.
- Folgen Sie jedem Code-Snippet mit einer Erklärung, was er macht.
- Wann immer möglich, teilen Sie große Beispiele in kleinere Teile auf. Zum Beispiel wird das "Live-Beispiel"-System automatisch all Ihren Code zusammenfügen, bevor das Beispiel ausgeführt wird, sodass Sie Ihr JavaScript, HTML und/oder CSS tatsächlich in kleinere Stücke mit erläuterndem Text nach jedem Stück aufteilen können, wenn Sie dies bevorzugen. Dies ist eine großartige Möglichkeit, lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über die Demonstration hinaus, wie jeder Teil der API oder Technologie funktioniert. Überlegen Sie sich mögliche realweltliche Anwendungsfälle, die Sie demonstrieren könnten.

## Statische Beispiele

Statische Beispiele sind Code-Blöcke, die zeigen, wie ein Feature im Quellcode aussieht. Diese werden auf einer Seite mithilfe von Markdown-"Codezäunen" eingefügt, wie in [Beispiel-Code-Blöcke](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben. In Dokumentationsseiten sehen sie so aus:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

## Interaktive Beispiele

Das [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs)-Makro wird verwendet, um interaktive Beispiele oben auf MDN-Referenzseiten einzubetten. Sie richten sich an Leser, die ein Beispiel ausprobieren möchten, ohne den ganzen Artikel über ein Thema oder Feature lesen zu müssen.

Das `InteractiveExample`-Makro akzeptiert einen Titel für das Beispiel als String und ein Schlüsselwort zur Angabe der Höhe des Beispiels. Die Code-Blöcke, die im Beispiel enthalten sind, erscheinen nach dem Makroaufruf und enthalten das Schlüsselwort `interactive-example` im Info-String nach der Sprache des Code-Blocks. Der [JavaScript `Array.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it)-Gebrauch ist ein gutes Beispiel für dieses Makro, das im Markdown-Quelltext so aussieht:

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

Es gibt ein paar Einschränkungen für interaktive Beispiele:

- Sie sind technologie-spezifisch – die Benutzeroberfläche für JavaScript ist anders als die Benutzeroberfläche für CSS, und sie illustrieren nur eine Technologie in Isolation. Sie sind nicht geeignet, wenn Sie beispielsweise zeigen möchten, wie eine bestimmte HTML/CSS/JS-Struktur kombiniert wird.
- Sie sind nicht für große Code-Beispiele gedacht – die Benutzeroberfläche unterstützt eine Reihe von **festen Höhen**, die nur für kurze (sagen wir, 10–15 Zeilen) Beispiele wirklich funktionieren.
- Eine MDN-Seite kann nur ein interaktives Beispiel haben.

## Live-Beispiele

Live-Beispiele werden mit dem [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs)-Makro in die Seite eingefügt. Ein \\{{EmbedLiveSample}}-Makro nimmt Code-Blöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und fügt das Ergebnis in die Seite ein. Weitere Informationen finden Sie im [Leitfaden zu Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).

## GitHub Live-Beispiele

GitHub Live-Beispiele werden mit dem [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs)-Makro in die Seite eingebettet. Ein \\{{EmbedGHLiveSample}} nimmt den Inhalt an einer angegebenen URL (die ein **MDN** GitHub-Repository sein muss) und fügt ihn in die Seite in einem {{htmlelement("iframe")}} ein.

Das Makro hat drei Parameter:

1. Die URL des Dokuments zum Einbetten – diese ist relativ zur MDN-Organisation, deren oberstes Verzeichnis sich bei `https://mdn.github.io/` befindet. Dieser Parameter muss also den Teil der URL nach diesem Punkt enthalten, z.B. `my-subdirectory/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` heißt.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.

Betrachten wir ein Beispiel. Angenommen, wir möchten den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Wir könnten den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

So sieht es aus, wenn es gerendert wird:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}
