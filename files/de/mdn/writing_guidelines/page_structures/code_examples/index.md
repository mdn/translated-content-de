---
title: Code-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Auf MDN werden zahlreiche Code-Beispiele eingefügt, um die Nutzung von Web-Plattform-Features zu demonstrieren. Dieser Artikel behandelt die verschiedenen Mechanismen zum Hinzufügen von Code-Beispielen zu Seiten und wann Sie welche verwenden sollten.

> [!NOTE]
> Wenn Sie Ratschläge zur Gestaltung und Überprüfung von Code in einem MDN-Artikel benötigen, nicht jedoch zu den verschiedenen Möglichkeiten der Einbindung von Code, siehe unser [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

## Welche Arten von Code-Beispielen sind verfügbar?

Es gibt vier Arten von Code-Beispielen auf MDN:

- Statische Beispiele — einfache Code-Blöcke, möglicherweise mit einem Screenshot, der das Ergebnis eines solchen Codes statisch zeigt, wenn er ausgeführt würde.
- Interaktive Beispiele — Unser System zur Erstellung von [live interaktiven Beispielen](https://github.com/mdn/interactive-examples), die den Code live ablaufen lassen, aber auch Änderungen am Code ermöglichen, um sofortige Effekte zu sehen und die Ergebnisse leicht zu kopieren.
- Traditionelle MDN "live samples" — Ein Makro, das einfache Code-Blöcke in ein Dokument innerhalb eines {{htmlelement("iframe")}}-Elements einfügt und es in die Seite einbettet, um den Code live zu zeigen.
- GitHub "live samples" — Ein Makro, das ein Dokument in einem GitHub-Repo innerhalb der [MDN-Organisation](https://github.com/mdn/) nimmt, es in ein {{htmlelement("iframe")}}-Element einfügt und in die Seite einbettet, um den Code live zu zeigen.

Wir werden jeden Typ in den folgenden Abschnitten besprechen.

## Wann sollten Sie welche verwenden?

Jeder Typ von Code-Beispiel hat seine eigenen Anwendungsfälle. Wann sollten Sie welchen verwenden?

- Statische Beispiele sind nützlich, wenn Sie nur etwas Code zeigen müssen, und es nicht besonders wichtig ist, das Live-Ergebnis zu zeigen. Einige Leute möchten einfach etwas kopieren und einfügen. Vielleicht zeigen Sie nur einen Zwischenschritt und der Quellcode reicht aus. (Zum Beispiel, der Artikel richtet sich an ein fortgeschrittenes Publikum und sie müssen nur den Code sehen.) Auch könnten Sie ein API-Feature demonstrieren, das als eingebettetes Beispiel nicht gut funktioniert und eine eigene separate Seite benötigt, um darauf zu verlinken.
- Die interaktiven Beispiele sind großartig, da Leser Werte im Handumdrehen ändern können — das ist sehr wertvoll für das Lernen. Sie sind jedoch komplexer einzurichten als die anderen Formen, mit mehr Einschränkungen und für spezifische Zwecke gedacht.
- Traditionelle Live-Beispiele sind nützlich, wenn Sie Quellcode auf einer Seite zeigen möchten, diesen dann ausführen und es Ihnen nicht so wichtig ist, dass es als eigenständiges Beispiel zugänglich ist. Dieser Ansatz hat auch den Vorteil, dass Sie, wenn Sie Quellcode und Live-Beispiele nebeneinander zeigen, den Code nur einmal aktualisieren müssen, um beides zu aktualisieren. Sie können jedoch unpraktisch zu bearbeiten und zum Laufen zu bringen sein.
- GitHub-Live-Beispiele sind nützlich, wenn Sie ein vorhandenes Beispiel haben, das Sie einbetten möchten, den Quellcode nicht zeigen möchten und/oder sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist. Sie haben einen besseren Beitragsworkflow, es erfordert jedoch, dass Sie GitHub kennen. Da zudem der On-Page-Code und der Quellcode an zwei verschiedenen Orten sind, können sie leichter auseinanderdriften.

## Allgemeine Richtlinien

Abgesehen vom spezifischen System zur Präsentation der Live-Beispiele gibt es stilistische und inhaltliche Überlegungen, die beim Hinzufügen oder Aktualisieren von Beispielen auf MDN zu berücksichtigen sind.

- Wenn Sie Beispiele auf einer Seite platzieren, versuchen Sie sicherzustellen, dass alle Funktionen oder Optionen der API oder des Konzepts, über das Sie schreiben, abgedeckt sind. Zumindest sollten die am häufigsten verwendeten Optionen oder Eigenschaften in den Beispielen enthalten sein.
- Gehen Sie jedem Beispiel mit einer Erklärung voraus, was das Beispiel macht und warum es interessant oder nützlich ist.
- Folgen Sie jedem Stück Code mit einer Erklärung, was es macht.
- Wenn möglich, brechen Sie große Beispiele in kleinere Teile auf. Zum Beispiel wird das "live sample" System automatisch all Ihren Code vor dem Ausführen des Beispiels zu einem Stück zusammenfügen, sodass Sie tatsächlich Ihr JavaScript, HTML und/oder CSS in kleinere Teile mit beschreibendem Text nach jedem Stück aufteilen können, wenn Sie dies wünschen. Dies ist eine großartige Möglichkeit, lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über das einfache Demonstrieren hinaus, wie jedes Stück der API oder Technologie funktioniert. Erwägen Sie, mögliche realweltliche Anwendungsfälle zu demonstrieren, die Sie zeigen könnten.

## Statische Beispiele

Unter statischen Beispielen verstehen wir statische Code-Blöcke, die zeigen, wie eine Funktion in Code verwendet werden könnte. Diese werden mit Markdown "Code-Zäunen" auf einer Seite platziert, wie in [Beispielcode-Blöcke](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben. Ein Beispielergebnis könnte so aussehen:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

Optional möchten Sie vielleicht ein statisches Bild des resultierenden Ausgabes des Codes zeigen. Zum Beispiel:

![Screenshot einer Konsolenausgabe in Entwicklerwerkzeugen](console-example.png)

## Interaktive Beispiele

Interaktive Beispiele sollen am Anfang von MDN-Referenzseiten verwendet werden — wir zielen darauf ab, diese zur Verbesserung ihres Wertes für Anfänger und andere Leser bereitzustellen, die einfach ein Beispiel schnell greifen und spielen möchten, bevor sie alle Details dessen sehen, wonach sie suchen. Es gibt einige wichtige Einschränkungen, die bei interaktiven Beispielen zu beachten sind:

- Sie sind für eine bestimmte Technologie spezialisiert — die Benutzeroberfläche für JavaScript unterscheidet sich von der für CSS, und sie illustrieren nur eine Technologie isoliert. Sie sind nicht geeignet, wenn Sie beispielsweise zeigen möchten, wie man eine bestimmte HTML/CSS/JS-Struktur kombiniert.
- Die interaktiven Live-Beispiele sind derzeit nur für CSS und JavaScript eingerichtet. Für andere Technologien müssen Sie einfach abwarten.
- Die Benutzeroberfläche ist leistungsintensiver als andere Code-Beispiele; Sie sollten nicht mehr als eins auf jedem MDN-Artikel anwenden, auf den Sie sie anwenden.
- Sie sind nicht für große Code-Beispiele gedacht — die Benutzeroberfläche unterstützt eine Reihe fester Größen, die nur für kurze (sagen wir, 10–15 Zeilen) Beispiele wirklich funktionieren.

Wenn Sie ein Beispiel einreichen möchten, erfahren Sie wie im [Leitfaden zur Beitragseinreichung für interaktive Beispiele](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md).

Wenn Sie eine Seite finden, die kein zugehöriges interaktives Beispiel hat, sind Sie herzlich eingeladen, eines beizutragen!

### Interaktive Beispiel-Demo

Das [`EmbedInteractiveExample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedInteractiveExample.ejs)-Makro wird verwendet, um fertige Beispiele in MDN-Seiten einzubetten. Zum Beispiel zeigt der Makroaufruf \\{{EmbedInteractiveExample("pages/js/array-push.html")}} das folgende Codebeispiel:

{{EmbedInteractiveExample("pages/js/array-push.html")}}Versuchen Sie, den Code anzupassen, um zu sehen, was passiert, und spielen Sie mit den Bedienelementen.

## Traditionelle Live-Beispiele

Traditionelle Live-Beispiele werden auf der Seite mit dem Makro [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) eingefügt. Ein \\{{EmbedLiveSample}}-Aufruf erfasst dynamisch die Code-Blöcke im gleichen Dokumentabschnitt wie er selbst und fügt sie in ein Dokument ein, das dann in die Seite innerhalb eines {{htmlelement("iframe")}} eingefügt wird. Siehe unseren [Leitfaden zu Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples) für weitere Informationen.

## GitHub Live-Beispiele

GitHub Live-Beispiele werden auf der Seite mit dem Makro [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) eingefügt. Ein \\{{EmbedGHLiveSample}}-Aufruf erfasst dynamisch das Dokument an einer angegebenen URL (die innerhalb der **mdn** GitHub-Organisation sein muss) und fügt es in die Seite innerhalb eines {{htmlelement("iframe")}} ein.

Diese funktionieren sehr ähnlich wie Traditionelle Live-Beispiele, sind jedoch viel einfacher:

Sie müssen sich keine Gedanken über die Platzierung von Code-Blöcken auf der Seite machen — es erfasst ein HTML-Dokument in einem GitHub-Repo und platziert es im `<iframe>`.

Das Makro hat nur drei Parameter:

1. Die URL des einzubettenden Dokuments — diese ist relativ zur MDN-Organisation, deren oberstes Verzeichnis auf `https://mdn.github.io/` liegt. Dieser Parameter muss den Teil der URL nach diesem enthalten, z. B. `my-subdirectory/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` genannt wird.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.

Schauen wir uns ein Beispiel an. Nehmen wir an, wir wollen den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Wir könnten den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

So sieht es aus, wenn es gerendert wird:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

### Tipps zur Verwendung von GitHub Live-Beispielen

- Sie müssen offensichtlich zuerst ein geeignetes Code-Beispiel in die [MDN GitHub-Organisation](https://github.com/mdn/) bekommen. Dies muss mit Git erfolgen. Wenn Sie mit Git nicht vertraut sind, schauen Sie sich unseren [Wie nutze ich GitHub Pages?](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) Artikel an und [Vorbereitung zum Hinzufügen der Daten](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für fortgeschrittene Anwendungen.
- Ihr Code-Beispiel muss geeignet sein, um das zu zeigen, was Sie demonstrieren wollen — es sollte ein einfaches Beispiel enthalten, das eine Sache gut macht, keinen anstößigen Inhalt enthalten und den MDN [Code Sample Guidelines](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) folgen.
