---
title: Codebeispiele auf MDN
short-title: Code examples
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Auf MDN finden Sie zahlreiche Codebeispiele, die demonstrieren, wie Sie die von uns dokumentierten Funktionen der Webplattform nutzen können.
Dieser Artikel beschreibt, wie Sie Codebeispiele zu Seiten hinzufügen können, sowie die verschiedenen Typen, die Sie verwenden können und wann Sie sie verwenden sollten.

> [!NOTE]
> Diese Seite beschreibt, **wie** Code auf MDN-Seiten eingefügt wird.
> Wenn Sie Vorschläge für Linting und Stil für das Hinzufügen von Code auf einer MDN-Seite benötigen, lesen Sie unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide).

## Welche Arten von Codebeispielen gibt es auf MDN?

Es gibt vier Arten von Codebeispielen:

- **Statische Beispiele** — Codeblöcke, die Quellcode auf einer Seite anzeigen.
- **Live-Beispiele** — Ein Makro nimmt Codeblöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und bettet das iframe in die Seite ein, um das Ergebnis zu zeigen.
  Die veröffentlichte Seite zeigt die Quellcodeblöcke und die Ergebnisse nebeneinander an.
- **Interaktive Beispiele** — Ein Makro rendert Quellcode auf der Seite und rendert die Ergebnisse in einem Panel neben dem Quellcode.
  Leser können den Quellcode bearbeiten und das Beispiel neu starten, um die Wirkung ihrer Änderungen zu sehen.
- **GitHub-Einbettungen** — Ein Makro nimmt ein Dokument in einem GitHub-Repository in der [MDN-Organisation](https://github.com/mdn/), fügt es in ein {{htmlelement("iframe")}} ein und bettet es in die Seite ein, um das Ergebnis zu zeigen.

## Wann sollten Sie welches verwenden?

Jede Art von Codebeispiel hat ihre eigenen Anwendungsfälle:

- **Statische Beispiele** sind nützlich, wenn Sie Code zeigen müssen und es nicht wichtig ist, die Ergebnisse des Codes auf der veröffentlichten Seite zu demonstrieren, oder wenn Sie einen Zwischenschritt in einem Artikel zeigen.
  Leser suchen oft nach diesen Arten von Codeblöcken, die zeigen, wie ein Feature genutzt wird, damit sie ein minimales Beispiel in ihr Projekt kopieren und einfügen können.
  Außerdem können Sie einen statischen Codeblock demonstrieren, der eine API oder ein Feature zeigt, das sich nicht gut als Live-Beispiel eignet.
- **Live-Beispiele** sind nützlich, wenn Sie Quellcode zeigen und ihn dann ausführen lassen möchten und es Ihnen nicht wichtig ist, dass es ein eigenständiges Beispiel ist.
  Sie sind nützlich, weil Sie den Code nur einmal aktualisieren müssen, um sowohl die Codeblöcke auf der Seite als auch die Live-Ergebnisse nebeneinander zu aktualisieren.
- **Interaktive Beispiele** werden auf Referenzseiten verwendet.
  Sie sind auf eine Vorkommen pro Seite beschränkt und müssen an einer bestimmten Stelle auf der Seite nach der Einführung platziert werden.
  Sie sind nützlich, um zu zeigen, was die allgemeinen oder praktischen Einsatzmöglichkeiten eines Features sind.
- **GitHub-Einbettungen** sind nützlich, wenn Sie ein vorhandenes Beispiel einbetten möchten, den Quellcode nicht anzeigen möchten und/oder sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist.
  Da sich der On-Page-Code und der Quellcode an zwei verschiedenen Stellen befinden, sind die Wartungskosten höher.

## Allgemeine Richtlinien

Es gibt stilistische und inhaltliche Überlegungen, die beachtet werden müssen, wenn Sie Beispiele auf MDN hinzufügen oder aktualisieren.

- Wenn Sie Beispiele auf einer Seite platzieren, bemühen Sie sich, dass alle Funktionen oder Optionen der API oder des Konzepts, über das Sie schreiben, abgedeckt werden.
  Mindestens die am häufigsten verwendeten Optionen oder Eigenschaften sollten demonstriert werden.
- Fügen Sie jedem Beispiel eine Erklärung hinzu, was das Beispiel tut und warum es interessant oder nützlich ist.
- Folgen Sie jedem Codeabschnitt mit einer Erklärung, was er tut.
- Wenn möglich, teilen Sie große Beispiele in kleinere Teile auf. Das System "Live-Beispiel" wird Ihren gesamten Code automatisch zu einem Stück zusammenfassen, bevor das Beispiel ausgeführt wird, sodass Sie Ihr JavaScript, HTML und/oder CSS tatsächlich in kleinere Teile mit beschreibendem Text nach jedem Abschnitt aufteilen können, wenn Sie dies möchten. Dies ist eine großartige Möglichkeit, lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über die Demonstration hinaus, wie jedes Stück der API oder Technologie funktioniert. Berücksichtigen Sie mögliche reale Anwendungsfälle, die Sie versuchen könnten zu demonstrieren.

## Statische Beispiele

Statische Beispiele sind Codeblöcke, die zeigen, wie ein Feature im Quellcode aussieht.
Diese werden auf einer Seite mit Hilfe von Markdown-"Codezäunen" eingefügt, wie in [Beispielcodeblöcke](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben.
Wenn sie in Dokumentationsseiten verwendet werden, sehen sie so aus:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

## Interaktive Beispiele

Das [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs) Makro wird verwendet, um interaktive Beispiele am Anfang von MDN-Referenzseiten einzubetten.
Sie sind für Leser gedacht, die ein Beispiel ausprobieren möchten, ohne den ganzen Artikel für ein Thema oder Feature lesen zu müssen.

> [!WARNING]
> Derzeit werden **nur JavaScript**-Beispiele unterstützt.
> Siehe https://github.com/orgs/mdn/discussions/782 für Implementierungsdetails.

Das `InteractiveExample` Makro akzeptiert einen Titel für das Beispiel als String, gefolgt von einem Schlüsselwort, um die Höhe des Beispiels zu spezifizieren.
Die in das Beispiel einzuschließenden Codeblöcke erscheinen nach dem Makroaufruf und enthalten das Schlüsselwort `interactive-example` im Info-String nach der Sprache des Codeblocks.
Die Nutzung des [JavaScript `Array.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it) ist ein gutes Beispiel für dieses Makro, das im Markdown-Quelltext so aussieht:

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

- Sie sind auf die jeweilige Technologie spezialisiert — die Benutzeroberfläche für JavaScript unterscheidet sich von der Benutzeroberfläche für CSS, und sie illustrieren nur eine Technologie isoliert.
  Sie sind nicht geeignet, wenn Sie zeigen möchten, wie man eine bestimmte HTML/CSS/JS-Struktur kombiniert.
- Sie sind nicht für große Codebeispiele gedacht — die Benutzeroberfläche unterstützt eine Reihe von **festen Höhen**, die nur wirklich für kurze (etwa 10–15 Zeilen) Beispiele funktionieren.
- Eine MDN-Seite kann nur ein interaktives Beispiel haben.

## Live-Beispiele

Live-Beispiele werden mithilfe des [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) Makros in die Seite eingefügt.
Ein \\{{EmbedLiveSample}} Makro nimmt Codeblöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}}, und fügt das Ergebnis in die Seite ein.
Siehe den [Live-Beispiele-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) für mehr Informationen.

## GitHub Live-Beispiele

GitHub Live-Beispiele werden in die Seite mithilfe des [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) Makros eingebettet.
Ein \\{{EmbedGHLiveSample}} nimmt den Inhalt an einer angegebenen URL (die ein **MDN** GitHub-Repository sein muss) und fügt ihn in die Seite in einem {{htmlelement("iframe")}} ein.

Das Makro hat drei Parameter:

1. Die URL des Dokuments, das eingebettet werden soll — diese ist relativ zur MDN-Organisation, deren oberstes Verzeichnis sich unter `https://mdn.github.io/` befindet. Daher muss dieser Parameter den Teil der URL nach diesem Punkt enthalten, z.B. `my-subdirectory/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` genannt wird.
2. Die Breite des `<iframe>`, die als Prozentwert oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentwert oder in Pixeln ausgedrückt werden kann.

Betrachten wir ein Beispiel. Angenommen, wir wollten den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Wir könnten folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

So sieht es bei der Wiedergabe aus:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}
