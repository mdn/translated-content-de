---
title: Code-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Auf MDN finden Sie zahlreiche Code-Beispiele, die auf den Seiten eingefügt sind, um die Verwendung von Webplattform-Funktionen zu demonstrieren. Dieser Artikel erläutert die verschiedenen Mechanismen, die zum Hinzufügen von Code-Beispielen zu den Seiten verfügbar sind, und welche Sie wann verwenden sollten.

> [!NOTE]
> Wenn Sie Ratschläge zur Gestaltung und Lint-Prüfung von Code in einem MDN-Artikel wünschen und nicht zu den verschiedenen Möglichkeiten, Code einzufügen, lesen Sie unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

## Welche Arten von Code-Beispielen sind verfügbar?

Auf MDN gibt es vier Arten von Code-Beispielen:

- Statische Beispiele — einfache Codeblöcke, möglicherweise mit einem Screenshot, um statisch das Ergebnis eines solchen Codes zu zeigen, wenn er ausgeführt würde.
- Interaktive Beispiele — Unser System zum Erstellen von [Live-Interaktiv-Beispielen](https://github.com/mdn/interactive-examples), die den Code live ausführen, aber auch erlauben, den Code spontan zu ändern, um zu sehen, welche Wirkung es hat, und die Ergebnisse einfach zu kopieren.
- Traditionelle MDN "Live-Proben" — Ein Makro, das einfache Codeblöcke nimmt, sie dynamisch in ein Dokument innerhalb eines {{htmlelement("iframe")}}-Elements einfügt und es auf der Seite einbettet, um den live laufenden Code zu zeigen.
- GitHub "Live-Proben" — Ein Makro, das ein Dokument in einem GitHub-Repository innerhalb der [MDN-Organisation](https://github.com/mdn/) nimmt, es in ein {{htmlelement("iframe")}}-Element einfügt und es auf der Seite einbettet, um den live laufenden Code zu zeigen.

Wir besprechen jeden dieser Punkte in späteren Abschnitten.

## Wann sollten Sie welches verwenden?

Jede Art von Code-Beispiel hat ihre eigenen Anwendungsfälle. Wann sollten Sie welches verwenden?

- Statische Beispiele sind nützlich, wenn Sie nur etwas Code zeigen müssen und es nicht super wichtig ist, das Live-Ergebnis zu zeigen. Manche Leute wollen nur etwas zum Kopieren und Einfügen. Vielleicht zeigen Sie nur einen Zwischenschritt oder der Quellcode reicht aus. (Zum Beispiel ist der Artikel für ein fortgeschrittenes Publikum gedacht, und sie müssen nur den Code sehen.) Außerdem könnten Sie eine API-Funktion demonstrieren, die sich nicht gut als eingebettetes Beispiel eignet, das möglicherweise seine eigene separate Seite benötigt, um darauf zu verlinken.
- Die interaktiven Beispiele sind großartig, da Leser Werte spontan ändern können – dies ist sehr wertvoll für das Lernen. Sie sind jedoch komplexer einzurichten als die anderen Formate, mit mehr Einschränkungen und sind für spezifische Zwecke vorgesehen.
- Traditionelle Live-Proben sind nützlich, wenn Sie Quellcode auf einer Seite zeigen wollen, ihn dann ausführen wollen und es Ihnen nicht so wichtig ist, dass er als eigenständiges Beispiel zugänglich ist. Dieser Ansatz hat auch den Vorteil, dass wenn Sie Quellcode und Live-Beispiele nebeneinander zeigen, Sie nur den Code einmal aktualisieren müssen, um beides zu aktualisieren. Sie können jedoch umständlich zu bearbeiten und zum Laufen zu bringen sein.
- GitHub-Live-Proben sind nützlich, wenn Sie ein vorhandenes Beispiel einbetten wollen, den Quellcode nicht anzeigen wollen und/oder sicherstellen wollen, dass das Beispiel in eigenständiger Form verfügbar ist. Sie haben einen besseren Beitragserstellungs-Workflow, aber es erfordert, dass Sie GitHub kennen. Da sich auf der Seite befindlicher Code und Quellcode an zwei verschiedenen Orten befinden, ist es einfacher, dass sie aus dem Gleichgewicht geraten.

## Allgemeine Richtlinien

Abgesehen vom spezifischen System zur Darstellung der Live-Proben gibt es stilistische und inhaltliche Überlegungen, die beim Hinzufügen oder Aktualisieren von Proben auf MDN zu beachten sind.

- Wenn Sie Beispiele auf einer Seite platzieren, versuchen Sie sicherzustellen, dass alle Features oder Optionen der API oder des Konzepts, über das Sie schreiben, abgedeckt sind. Mindestens sollten die gebräuchlichsten Optionen oder Eigenschaften in den Beispielen enthalten sein.
- Gehen Sie jedem Beispiel mit einer Erklärung voraus, was das Beispiel tut und warum es interessant oder nützlich ist.
- Folgen Sie jedem Codestück mit einer Erklärung, was es tut.
- Wenn möglich, zerlegen Sie große Beispiele in kleinere Stücke. Zum Beispiel wird das "Live-Proben"-System automatisch Ihren gesamten Code zusammenfügen, bevor das Beispiel ausgeführt wird, sodass Sie tatsächlich Ihr JavaScript, HTML und/oder CSS in kleinere Stücke mit beschreibendem Text nach jedem Stück unterteilen können, wenn Sie dies möchten. Dies ist eine großartige Möglichkeit, lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über die bloße Demonstration hinaus, wie jedes Stück der API oder Technologie funktioniert. Ziehen Sie mögliche realistische Anwendungsfälle in Betracht, die Sie zu demonstrieren versuchen könnten.

## Statische Beispiele

Mit statischen Beispielen sprechen wir von statischen Codeblöcken, die zeigen, wie eine Funktion in Code verwendet werden könnte. Diese werden auf einer Seite mit Hilfe von Markdown-"Codezäunen", wie in [Beispiel-Codeblöcken](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben, eingefügt. Ein Beispielergebnis könnte so aussehen:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

Optional möchten Sie vielleicht ein statisches Bild des resultierenden Ausgabetexts des Codes anzeigen. Zum Beispiel:

![Screenshot einer Konsolenausgabe in den Entwicklertools](console-example.png)

## Interaktive Beispiele

Interaktive Beispiele sind dazu gedacht, am Anfang der MDN-Referenzseiten verwendet zu werden — wir möchten diese bereitstellen, um deren Wert für Anfänger und andere Leser zu erhöhen, die vor dem Durchsehen aller Details schnell ein Beispiel greifen und ausprobieren möchten. Es gibt einige wichtige Einschränkungen bei interaktiven Beispielen zu beachten:

- Sie sind für eine bestimmte Technologie spezialisiert — die UI für JavaScript unterscheidet sich von der UI für CSS, und sie illustrieren nur eine Technologie isoliert. Sie sind nicht geeignet, wenn Sie zum Beispiel zeigen möchten, wie eine bestimmte HTML/CSS/JS-Struktur kombiniert wird.
- Die interaktiven Live-Beispiele sind derzeit nur so eingerichtet, dass sie CSS und JavaScript zeigen. Für andere Technologien müssen Sie einfach abwarten.
- Die Benutzeroberfläche ist ressourcenintensiver als andere Code-Beispiele; Sie sollten nicht mehr als ein interaktives Beispiel auf jedem MDN-Artikel platzieren, zu dem Sie sie hinzufügen.
- Sie sind nicht für große Code-Beispiele gedacht — die UI unterstützt eine Reihe fester Größen, die wirklich nur für kurze (sagen wir 10–15 Zeilen) Beispiele funktionieren.

Wenn Sie ein Beispiel einreichen möchten, finden Sie im [interaktiven Beispiele-Repo-Beitragsleitfaden](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md), wie Sie dies tun können.

Wenn Sie eine Seite finden, die kein zugehöriges interaktives Beispiel hat, sind Sie willkommen, eines beizutragen!

### Interaktives Beispiel-Demo

Das [`EmbedInteractiveExample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedInteractiveExample.ejs)-Makro wird verwendet, um fertige Beispiele in MDN-Seiten einzubetten. Zum Beispiel zeigt der Makroaufruf \\{{EmbedInteractiveExample("pages/js/array-push.html")}} das folgende Code-Beispiel:

{{EmbedInteractiveExample("pages/js/array-push.html")}}Versuchen Sie, den Code anzupassen und mit den Steuerelementen zu spielen, um zu sehen, was passiert.

## Traditionelle Live-Proben

Traditionelle Live-Proben werden auf der Seite mit dem [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs)-Makro eingefügt. Ein \\{{EmbedLiveSample}}-Aufruf erfasst dynamisch die Codeblöcke im selben Dokumentabschnitt wie sich selbst und fügt sie in ein Dokument ein, das dann innerhalb eines {{htmlelement("iframe")}} auf der Seite eingefügt wird. Siehe unseren [Live-Proben-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) für weitere Informationen.

## GitHub Live-Proben

GitHub Live-Proben werden auf der Seite mit dem [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs)-Makro eingefügt. Ein \\{{EmbedGHLiveSample}}-Aufruf erfasst dynamisch das Dokument an einer angegebenen URL (das innerhalb der **mdn** GitHub-Organisation sein muss) und fügt es innerhalb eines {{htmlelement("iframe")}} auf der Seite ein.

Diese funktionieren sehr ähnlich wie traditionelle Live-Proben, sind jedoch viel einfacher:

Sie müssen sich nicht um die Platzierung von Codeblöcken auf der Seite kümmern — es erfasst ein HTML-Dokument in einem GitHub-Repository und stellt es im `<iframe>` dar.

Das Makro hat nur drei Parameter:

1. Die URL des zu einbettenden Dokuments — diese ist relativ zur MDN-Organisation, deren oberstes Verzeichnis sich unter `https://mdn.github.io/` befindet. Dieser Parameter muss den Teil der URL danach enthalten, z. B. `my-subdirectory/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` genannt wird.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.

Schauen wir uns ein Beispiel an. Angenommen, wir möchten den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Wir könnten den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Dies sieht folgendermaßen aus, wenn es gerendert wird:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

### Tipps zur Verwendung von GitHub Live-Proben

- Sie müssen zunächst ein geeignetes Code-Beispiel in die [MDN GitHub-Organisation](https://github.com/mdn/) bekommen. Dies muss mit Git durchgeführt werden. Wenn Sie mit Git nicht vertraut sind, lesen Sie unseren Artikel [Wie verwende ich GitHub Pages?](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) und [Vorbereitung zum Hinzufügen der Daten](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für fortgeschrittene Anwendungen.
- Ihr Code-Beispiel muss geeignet sein, um das zu zeigen, was Sie demonstrieren möchten — es sollte ein einfaches Beispiel enthalten, das eine Sache gut macht, keinen anstößigen Inhalt enthalten und den MDN [Code-Beispiel-Richtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) folgen.
