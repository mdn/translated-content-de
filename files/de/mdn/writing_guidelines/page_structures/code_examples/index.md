---
title: Code-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

Auf MDN finden Sie zahlreiche Code-Beispiele auf den Seiten, um die Nutzung von Funktionen der Webplattform zu demonstrieren. In diesem Artikel werden die verschiedenen Mechanismen zum Hinzufügen von Code-Beispielen auf Seiten besprochen, zusammen mit Hinweisen, welche Sie wann verwenden sollten.

> [!NOTE]
> Wenn Sie Ratschläge zum Styling und zur Formatierung von Code in einem MDN-Artikel benötigen, anstatt zu den verschiedenen Möglichkeiten, Code einzufügen, lesen Sie unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

## Welche Arten von Code-Beispielen sind verfügbar?

Auf MDN sind vier Arten von Code-Beispielen verfügbar:

- Statische Beispiele — einfache Code-Blöcke, möglicherweise mit einem Screenshot, um das Ergebnis dieses Codes statisch zu zeigen, wenn er ausgeführt würde.
- Interaktive Beispiele — Unser System zur Erstellung von [Live-Interaktiven Beispielen](https://github.com/mdn/interactive-examples), die den Code live ausführen und es Ihnen auch ermöglichen, den Code spontan zu ändern, um zu sehen, welche Auswirkungen das hat, und die Ergebnisse einfach zu kopieren.
- Traditionelle MDN "Live-Beispiele" — Ein Makro, das einfache Code-Blöcke nimmt, sie dynamisch in ein Dokument innerhalb eines {{htmlelement("iframe")}}-Elements einfügt und in die Seite einbettet, um den Code live auszuführen.
- GitHub "Live-Beispiele" — Ein Makro, das ein Dokument in einem GitHub-Repo innerhalb der [MDN-Organisation](https://github.com/mdn/) nimmt, es innerhalb eines {{htmlelement("iframe")}}-Elements einfügt und in die Seite einbettet, um den Code live auszuführen.

Wir werden jeden dieser Punkt in späteren Abschnitten besprechen.

## Wann sollten Sie welches Beispiel verwenden?

Jede Art von Code-Beispiel hat ihre eigenen Anwendungsfälle. Wann sollten Sie welches verwenden?

- Statische Beispiele sind nützlich, wenn Sie einfach nur Code zeigen müssen und es nicht besonders wichtig ist, das Live-Ergebnis zu sehen. Manche Leute wollen einfach nur etwas zum Kopieren und Einfügen. Vielleicht zeigen Sie nur einen Zwischenschritt, oder der Quellcode reicht aus. (Zum Beispiel ist der Artikel für ein fortgeschrittenes Publikum gedacht, und sie müssen nur den Code sehen.) Außerdem könnten Sie eine API-Funktion demonstrieren, die als eingebettetes Beispiel nicht gut funktioniert, was eine eigene separate Seite zum Verlinken benötigt.
- Die interaktiven Beispiele sind großartig, da Leser Werte spontan ändern können — das ist für das Lernen sehr wertvoll. Allerdings sind sie komplexer einzurichten als die anderen Formen, mit mehr Einschränkungen, und sind für spezifische Zwecke gedacht.
- Traditionelle Live-Beispiele sind nützlich, wenn Sie Quellcode auf einer Seite zeigen wollen, dann dessen Ausführung zeigen, und es Ihnen nicht so wichtig ist, dass es als eigenständiges Beispiel zugänglich ist. Diese Methode hat auch den Vorteil, dass, wenn Sie Quellcode und Live-Beispiele nebeneinander zeigen, Sie nur den Code einmal aktualisieren müssen, um beide zu aktualisieren. Sie können jedoch umständlich zu bearbeiten und funktionstüchtig zu machen sein.
- GitHub Live-Beispiele sind nützlich, wenn Sie ein vorhandenes Beispiel einbetten möchten, den Quellcode nicht zeigen möchten und/oder sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist. Sie bieten einen besseren Beitrag-Workflow, erfordern jedoch, dass Sie sich mit GitHub auskennen. Da sich Code auf der Seite und Quellcode an zwei verschiedenen Stellen befinden, ist es zudem einfacher, dass sie nicht mehr synchron sind.

## Allgemeine Richtlinien

Abgesehen vom spezifischen System zur Präsentation der Live-Beispiele gibt es Stil- und Inhaltsüberlegungen, die beim Hinzufügen oder Aktualisieren von Beispielen auf MDN zu berücksichtigen sind.

- Beim Platzieren von Beispielen auf einer Seite versuchen Sie sicherzustellen, dass alle Funktionen oder Optionen der API oder des Konzepts, über das Sie schreiben, abgedeckt sind. Mindestens sollten die am häufigsten verwendeten Optionen oder Eigenschaften in den Beispielen enthalten sein.
- Gehen Sie jedem Beispiel mit einer Erklärung voraus, was das Beispiel tut und warum es interessant oder nützlich ist.
- Folgen Sie jedem Code-Teil mit einer Erklärung, was er tut.
- Wenn möglich, teilen Sie große Beispiele in kleinere Teile auf. Das "Live-Beispiel"-System wird zum Beispiel automatisch Ihren gesamten Code zu einem Stück zusammenfügen, bevor es das Beispiel ausführt, sodass Sie tatsächlich Ihr JavaScript, HTML und/oder CSS in kleinere Teile mit erläuterndem Text nach jedem Stück aufteilen können, wenn Sie möchten. Dies ist eine großartige Möglichkeit, lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über das einfache Demonstrieren hinaus, wie jeder Teil der API oder Technologie funktioniert. Erwägen Sie mögliche reale Anwendungsfälle, die Sie möglicherweise demonstrieren möchten.

## Statische Beispiele

Bei statischen Beispielen sprechen wir von statischen Code-Blöcken, die zeigen, wie eine Funktion im Code verwendet werden könnte. Diese werden auf eine Seite mit Hilfe von Markdown-"Codezäunen" gestellt, wie in [Beispiel-Code-Blöcke](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben. Ein Beispielergebnis könnte so aussehen:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

Optional können Sie ein statisches Bild des Ergebnisse des Codes zeigen wollen. Zum Beispiel:

![Screenshot einer Konsolenausgabe in den Entwicklerwerkzeugen](console-example.png)

## Interaktive Beispiele

Interaktive Beispiele sind für die Verwendung am Anfang der MDN-Referenzseiten gedacht — wir möchten diese bereitstellen, um deren Wert für Anfänger zu erhöhen und anderen Lesern, die einfach schnell ein Beispiel ausprobieren möchten, bevor sie alle Details dessen sehen, wonach sie suchen. Es gibt ein paar wichtige Einschränkungen bezüglich der interaktiven Beispiele:

- Sie sind auf eine bestimmte Technologie spezialisiert — die Benutzeroberfläche für JavaScript unterscheidet sich von der für CSS und sie illustrieren nur eine Technologie isoliert. Sie sind nicht geeignet, wenn Sie z.B. zeigen wollen, wie eine bestimmte HTML/CSS/JS-Struktur kombiniert wird.
- Die interaktiven Live-Beispiele sind derzeit nur so eingerichtet, CSS und JavaScript zu zeigen. Für andere Technologien müssen Sie einfach abwarten.
- Die Benutzeroberfläche ist ressourcenintensiver als andere Code-Beispiele; Sie sollten nicht mehr als eines auf jedem MDN-Artikel verwenden, auf den Sie sie anwenden.
- Sie sind nicht für große Code-Beispiele gedacht — die Benutzeroberfläche unterstützt eine Reihe festgelegter Größen, die wirklich nur für kurze (sagen wir 10–15 Zeilen) Beispiele geeignet sind.

Wenn Sie ein Beispiel einreichen möchten, erfahren Sie im [Interaktive Beispiele Repo-Beitragsleitfaden](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md), wie es geht.

Wenn Sie eine Seite finden, die kein zugehöriges interaktives Beispiel hat, können Sie gerne eines beitragen!

### Interaktive Beispieldemo

Das Makro [`EmbedInteractiveExample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedInteractiveExample.ejs) wird verwendet, um fertige Beispiele in MDN-Seiten einzubetten. Zum Beispiel zeigt der Makro-Aufruf \\{{EmbedInteractiveExample("pages/js/array-push.html")}} das folgende Code-Beispiel:

{{EmbedInteractiveExample("pages/js/array-push.html")}}Versuchen Sie, den Code anzupassen, um zu sehen, was passiert, und mit den Steuerelementen zu spielen.

## Traditionelle Live-Beispiele

Traditionelle Live-Beispiele werden mit dem [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs)-Makro in die Seite eingefügt. Ein \\{{EmbedLiveSample}}-Aufruf greift dynamisch die Code-Blöcke im selben Dokumentabschnitt wie er selbst und fügt sie in ein Dokument ein, das er dann innerhalb eines {{htmlelement("iframe")}} in die Seite einfügt. Weitere Informationen finden Sie in unserem [Live-Beispiele-Leitfaden](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).

## GitHub-Live-Beispiele

GitHub-Live-Beispiele werden mit dem [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs)-Makro in die Seite eingefügt. Ein \\{{EmbedGHLiveSample}}-Aufruf greift dynamisch das Dokument an einer angegebenen URL (die innerhalb der **mdn** GitHub-Organisation sein muss) und fügt sie innerhalb eines {{htmlelement("iframe")}} in die Seite ein.

Diese funktionieren auf sehr ähnliche Weise wie traditionelle Live-Beispiele, sind jedoch deutlich einfacher:

Sie müssen sich keine Gedanken über die Platzierung von Code-Blöcken auf der Seite machen — es greift ein HTML-Dokument in einem GitHub-Repo und fügt es in das `<iframe>` ein.

Das Makro hat nur drei Parameter:

1. Die URL des einzubettenden Dokuments — diese ist relativ zur MDN-Organisation, deren oberstes Verzeichnis sich unter `https://mdn.github.io/` befindet. Dieser Parameter muss den Teil der URL nach diesem enthalten, z. B. `my-subdirectory/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` heißt.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.

Schauen wir uns ein Beispiel an. Angenommen, wir möchten den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Wir könnten den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Dies sieht beim Rendern so aus:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

### Tipps zur Verwendung von GitHub-Live-Beispielen

- Sie müssen natürlich zuerst ein geeignetes Code-Beispiel in die [MDN GitHub-Organisation](https://github.com/mdn/) bringen. Dies muss mit Git geschehen. Wenn Sie mit Git nicht vertraut sind, lesen Sie unseren Artikel [How do I use GitHub Pages?](/de/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages) und [Vorbereitung zum Hinzufügen der Daten](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für fortgeschrittene Anwendungen.
- Ihr Code-Beispiel muss geeignet sein, um das zu zeigen, was Sie demonstrieren möchten — es sollte ein einfaches Beispiel enthalten, das eine Sache gut macht, keinen beleidigenden Inhalt enthalten und den MDN [Code-Beispielrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) folgen.
