---
title: Code-Beispiele auf MDN
short-title: Code examples
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Auf MDN finden Sie zahlreiche Code-Beispiele, die zeigen, wie die von uns dokumentierten Funktionen der Webplattform verwendet werden können.
Dieser Artikel beschreibt die verschiedenen Möglichkeiten, Code-Beispiele zu Seiten hinzuzufügen, die Arten von Beispielen, die Sie verwenden können, und wann Sie welche einsetzen sollten.

> [!NOTE]
> Diese Seite beschreibt, **wie** Code auf MDN-Seiten eingebunden wird.
> Wenn Sie Linting und Stilhinweise zum Hinzufügen von Code auf eine MDN-Seite wünschen, sehen Sie sich unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) an.

## Welche Arten von Code-Beispielen gibt es auf MDN?

Es gibt vier Arten von Code-Beispielen:

- **Statische Beispiele** — Code-Blöcke, die den Quellcode auf einer Seite anzeigen.
- **Live-Beispiele** — Ein Makro nimmt Code-Blöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und bettet das Iframe in die Seite ein, um das Ergebnis zu zeigen.
  Die veröffentlichte Seite zeigt die Quellcode-Blöcke und die Ergebnisse nebeneinander an.
- **Interaktive Beispiele** — Ein Makro rendert Quellcode auf der Seite und zeigt die Ergebnisse in einem Bereich neben dem Quellcode an.
  Leser können den Quellcode bearbeiten und das Beispiel erneut ausführen, um den Effekt ihrer Änderungen zu sehen.
- **GitHub-Einbettungen** — Ein Makro nimmt ein Dokument aus einem GitHub-Repository in der [MDN-Organisation](https://github.com/mdn/), bettet es in ein {{htmlelement("iframe")}} ein und zeigt es in der Seite an.

## Wann sollten Sie welches Beispiel verwenden?

Jede Art von Code-Beispiel hat ihre eigenen Anwendungsfälle:

- **Statische Beispiele** eignen sich, wenn Sie Code zeigen müssen und es nicht wichtig ist, die Ergebnisse des Codes auf der veröffentlichten Seite zu demonstrieren, oder wenn Sie einen Zwischenschritt in einem Artikel zeigen möchten.
  Leser suchen oft nach diesen Arten von Code-Blöcken, um den Einsatz einer Funktion zu lernen und ein minimales Beispiel in ihr Projekt zu kopieren und einzufügen.
  Zusätzlich kann ein statischer Code-Block nützlich sein, um ein API oder eine Funktion zu demonstrieren, die nicht gut als Live-Beispiel funktioniert.
- **Live-Beispiele** sind nützlich, wenn Sie Quellcode anzeigen und dann seine Ausführung zeigen möchten, ohne dass es wichtig ist, dass es sich um ein eigenständiges Beispiel handelt.
  Sie sind praktisch, da der Code nur einmal aktualisiert werden muss, um sowohl die Code-Blöcke auf der Seite als auch die Live-Ergebnisse nebeneinander zu aktualisieren.
- **Interaktive Beispiele** werden auf Referenzseiten verwendet.
  Sie sind auf ein Beispiel pro Seite begrenzt und müssen sich an einer bestimmten Stelle auf der Seite nach der Einleitung befinden.
  Sie eignen sich, um die gemeinsamen oder praktischen Anwendungszwecke einer Funktion zu zeigen.
- **GitHub-Einbettungen** sind hilfreich, wenn Sie ein vorhandenes Beispiel einbetten möchten, den Quellcode nicht anzeigen wollen und/oder sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist.
  Da die Code-Beispiele und der Quellcode an zwei verschiedenen Orten sind, sind die Wartungskosten höher.

## Allgemeine Richtlinien

Es gibt Stil- und Inhaltsüberlegungen, die beim Hinzufügen oder Aktualisieren von Beispielen auf MDN beachtet werden sollten.

- Versuchen Sie, beim Platzieren von Beispielen auf einer Seite sicherzustellen, dass alle Funktionen oder Optionen der API oder des Konzepts, das Sie beschreiben, abgedeckt sind.
  Mindestens die gängigsten Optionen oder Eigenschaften sollten demonstriert werden.
- Jeder Beispielcode sollte mit einer Erklärung eingeleitet werden, die erläutert, was das Beispiel macht und warum es interessant oder nützlich ist.
- Erklären Sie nach jedem Codeblock, was er macht.
- Wenn möglich, teilen Sie große Beispiele in kleinere Stücke auf. Das "Live-Beispiel"-System fügt automatisch alle Codes zusammen, bevor das Beispiel ausgeführt wird, sodass Sie JavaScript, HTML und/oder CSS in kleinere Teile mit erläuterndem Text nach jedem Teil aufteilen können. Dies ist eine großartige Möglichkeit, lange oder komplexe Codeabschnitte klarer zu erklären.
- Gehen Sie über die Demonstration hinaus, wie einzelne Teile der API oder Technologie funktionieren. Überlegen Sie, ob Sie mögliche Anwendungsfälle aus der realen Welt demonstrieren können.

## Statische Beispiele

Statische Beispiele sind Code-Blöcke, die zeigen, wie eine Funktion im Quellcode aussieht.
Sie werden auf einer Seite mit Markdown-"Code-Fences" eingefügt, wie im [Beispiel-Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben.
Wenn sie auf Dokumentationsseiten verwendet werden, sehen sie so aus:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

## Interaktive Beispiele

Das [`InteractiveExample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/interactive_example.rs)-Makro wird verwendet, um interaktive Beispiele am Anfang von MDN-Referenzseiten einzubetten.
Sie sind für Leser, die ein Beispiel ausprobieren möchten, ohne den gesamten Artikel zu einem Thema oder einer Funktion lesen zu müssen.

> [!WARNING]
> Derzeit werden **nur JavaScript**-Beispiele unterstützt.
> Einzelheiten zur Implementierung finden Sie unter https://github.com/orgs/mdn/discussions/782.

Das `InteractiveExample`-Makro akzeptiert einen Titel für das Beispiel als Zeichenkette, gefolgt von einem Schlüsselwort zur Angabe der Höhe des Beispiels.
Die Code-Blöcke, die im Beispiel enthalten sein sollen, erscheinen nach dem Makroaufruf und enthalten das Schlüsselwort `interactive-example` im Info-String nach der Sprache des Codeblocks.
Die Verwendung von [JavaScript `Array.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#try_it) ist ein gutes Beispiel für dieses Makro, das in der Markdown-Quelle so aussieht:

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

- Sie sind spezialisiert auf die jeweilige Technologie — die Oberfläche für JavaScript unterscheidet sich von der Oberfläche für CSS, und sie illustrieren nur eine Technologie isoliert.
  Sie sind nicht geeignet, wenn Sie zeigen möchten, wie etwa eine bestimmte HTML/CSS/JS-Struktur kombiniert wird.
- Sie sind nicht für große Code-Beispiele gedacht — die Benutzeroberfläche unterstützt eine Reihe von **festen Höhen**, die nur für kurze (z. B. 10–15 Zeilen) Beispiele wirklich geeignet sind.
- Eine MDN-Seite kann nur ein interaktives Beispiel haben.

## Live-Beispiele

Live-Beispiele werden mit dem [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs)-Makro in die Seite eingefügt.
Ein \\{{EmbedLiveSample}}-Makro nimmt Code-Blöcke von einer Seite, kombiniert sie in einem {{htmlelement("iframe")}} und fügt das Ergebnis in die Seite ein.
Weitere Informationen finden Sie im [Live-Beispiele-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).

## GitHub-Live-Beispiele

GitHub-Live-Beispiele werden mit dem [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs)-Makro in die Seite eingebettet.
Ein \\{{EmbedGHLiveSample}} nimmt den Inhalt an einer angegebenen URL (die ein **MDN**-GitHub-Repository sein muss) und fügt ihn in einem {{htmlelement("iframe")}} in die Seite ein.

Das Makro hat drei Parameter:

1. Die URL des einzubettenden Dokuments — dies ist relativ zur Organisation MDN, deren oberstes Verzeichnis unter `https://mdn.github.io/` liegt. Dieser Parameter muss also den Teil der URL nach diesem Punkt enthalten, z. B. `my-subdirectory/example.html`. Der Dateiname kann ausgelassen werden, wenn er `index.html` heißt.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln angegeben werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln angegeben werden kann.

Betrachten wir ein Beispiel. Nehmen wir an, wir wollten den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Dafür könnten wir den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Dies sieht beim Rendern so aus:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}
