---
title: Code-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Auf MDN finden Sie zahlreiche Code-Beispiele, die in die Seiten eingefügt werden, um die Nutzung von Web-Plattform-Features zu demonstrieren. Dieser Artikel bespricht die verschiedenen Mechanismen, die zum Hinzufügen von Code-Beispielen zu Seiten zur Verfügung stehen, und erläutert, welche davon Sie wann verwenden sollten.

> [!NOTE]
> Wenn Sie Ratschläge zum Styling und zur Formatierung von Code in einem MDN-Artikel wünschen, anstatt zu den unterschiedlichen Möglichkeiten, Code einzufügen, lesen Sie unseren [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

## Welche Arten von Code-Beispielen stehen zur Verfügung?

Auf MDN gibt es vier Arten von Code-Beispielen:

- Statische Beispiele — einfache Codeblöcke, möglicherweise mit einem Screenshot, um das Ergebnis dieses Codes statisch anzuzeigen, wenn er ausgeführt würde.
- Interaktive Beispiele — Unser System zum Erstellen von [live interaktiven Beispielen](https://github.com/mdn/interactive-examples), die den Code live ausführen, aber Ihnen auch erlauben, den Code spontan zu ändern, um zu sehen, welche Wirkung er hat und die Ergebnisse einfach zu kopieren.
- Traditionelle MDN-"Live-Beispiele" — Ein Makro, das einfache Codeblöcke nimmt, sie dynamisch in ein Dokument innerhalb eines {{htmlelement("iframe")}}-Elements einfügt und es in die Seite einbettet, um den Code live zu zeigen.
- GitHub-"Live-Beispiele" — Ein Makro, das ein Dokument in einem GitHub-Repo innerhalb der [MDN-Organisation](https://github.com/mdn/) nimmt, innerhalb eines {{htmlelement("iframe")}}-Elements einfügt und es in die Seite einbettet, um den Code live zu zeigen.

Wir werden jedes davon in späteren Abschnitten besprechen.

## Wann sollten Sie welche verwenden?

Jede Art von Code-Beispiel hat ihre eigenen Anwendungsfälle. Wann sollten Sie welche verwenden?

- Statische Beispiele sind nützlich, wenn Sie nur etwas Code zeigen müssen und es nicht besonders wichtig ist, das Live-Ergebnis zu zeigen. Manche Menschen möchten einfach nur etwas zum Kopieren und Einfügen. Vielleicht zeigen Sie nur einen Zwischenschritt, oder der Quellcode reicht aus. (Zum Beispiel ist der Artikel für ein fortgeschrittenes Publikum gedacht, das nur den Code sehen muss.) Außerdem könnten Sie eine API-Funktion demonstrieren, die sich nicht gut als eingebettetes Beispiel eignet und möglicherweise eine eigene separate Seite benötigt, auf die verwiesen wird.
- Die interaktiven Beispiele sind großartig, da Leser Werte spontan ändern können — das ist sehr wertvoll für das Lernen. Sie sind jedoch komplexer einzurichten als die anderen Formen, haben mehr Einschränkungen und sind für spezifische Zwecke gedacht.
- Traditionelle Live-Beispiele sind nützlich, wenn Sie Quellcode auf einer Seite zeigen möchten, ihn dann laufend anzeigen und es Ihnen nicht so wichtig ist, dass er als eigenständiges Beispiel zugänglich ist. Dieser Ansatz hat auch den Vorteil, dass, wenn Sie Quellcode und Live-Beispiele nebeneinander zeigen, Sie den Code nur einmal aktualisieren müssen, um beide zu aktualisieren. Sie können jedoch umständlich zu bearbeiten und in Gang zu bringen sein.
- GitHub-Live-Beispiele sind nützlich, wenn Sie ein vorhandenes Beispiel einbetten möchten, den Quellcode nicht zeigen möchten und/oder sicherstellen möchten, dass das Beispiel in eigenständiger Form verfügbar ist. Sie haben einen besseren Beitrags-Workflow, erfordern jedoch, dass Sie GitHub kennen. Da sowohl der On-Page-Code als auch der Quellcode an zwei verschiedenen Orten sind, ist es einfacher, dass sie nicht synchron sind.

## Allgemeine Richtlinien

Abgesehen vom spezifischen System zur Präsentation der Live-Beispiele gibt es stilistische und inhaltliche Überlegungen, die zu beachten sind, wenn Beispiele auf MDN hinzugefügt oder aktualisiert werden.

- Versuchen Sie, sicherzustellen, dass alle Funktionen oder Optionen der API oder des Konzepts, über das Sie schreiben, in den Beispielen abgedeckt sind. Zumindest sollten die häufigsten Optionen oder Eigenschaften in Beispielen enthalten sein.
- Gehen Sie jedem Beispiel mit einer Erklärung dessen voraus, was das Beispiel tut und warum es interessant oder nützlich ist.
- Folgen Sie jedem Code-Stück mit einer Erklärung dessen, was es tut.
- Wenn möglich, teilen Sie große Beispiele in kleinere Stücke auf. Beispielsweise fügt das "Live-Beispiel"-System automatisch allen Ihren Code vor der Ausführung des Beispiels zu einem Stück zusammen, sodass Sie Ihr JavaScript, HTML und/oder CSS tatsächlich in kleinere Stücke aufteilen können, mit beschreibendem Text nach jedem Stück, wenn Sie dies wünschen. Dies ist eine großartige Möglichkeit, lange oder komplizierte Code-Abschnitte klarer zu erklären.
- Gehen Sie darüber hinaus, einfach nur zu zeigen, wie jeder Teil der API oder Technologie funktioniert. Erwägen Sie mögliche realitätsnahe Anwendungsfälle, die Sie versuchen könnten zu demonstrieren.

## Statische Beispiele

Mit statischen Beispielen meinen wir statische Codeblöcke, die zeigen, wie eine Funktion in Code verwendet werden könnte. Diese werden auf einer Seite mit Markdown "Code-Begrenzungen" platziert, wie in [Beispiel-Codeblöcke](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben. Ein Beispielergebnis könnte so aussehen:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

Optional möchten Sie möglicherweise ein statisches Bild des Ergebnisausgangs des Codes anzeigen. Zum Beispiel:

![Screenshot einer Konsolenausgabe in Entwickler-Tools](console-example.png)

## Interaktive Beispiele

Interaktive Beispiele sollen oben auf den MDN-Referenzseiten verwendet werden — wir beabsichtigen, diese bereitzustellen, um ihren Wert für Anfänger und andere Leser zu verbessern, die nur schnell ein Beispiel ausprobieren und damit spielen möchten, bevor sie alle Details des Gesuchten sehen. Es gibt einige wichtige Einschränkungen für die interaktiven Beispiele:

- Sie sind spezialisiert auf eine bestimmte Technologie — die Benutzeroberfläche für JavaScript unterscheidet sich von der Benutzeroberfläche für CSS, und sie illustrieren nur eine Technologie isoliert. Sie sind nicht geeignet, wenn Sie beispielsweise zeigen möchten, wie eine bestimmte HTML/CSS/JS-Struktur kombiniert wird.
- Die interaktiven Live-Beispiele sind derzeit nur so eingestellt, dass sie CSS und JavaScript anzeigen. Für andere Technologien müssen Sie einfach warten.
- Die Benutzeroberfläche ist ressourcenintensiver als andere Code-Beispiele; Sie sollten nicht mehr als ein interaktives Beispiel auf jeden MDN-Artikel anwenden, zu dem Sie sie hinzufügen.
- Sie sind nicht für große Code-Beispiele gedacht — die Benutzeroberfläche unterstützt eine Reihe von festen Größen, die nur für kurze (sagen wir, 10–15 Zeilen) Beispiele wirklich funktionieren.

Wenn Sie ein Beispiel einreichen möchten, erfahren Sie im [Contribution guide des interaktiven Beispiels-Repos](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md), wie das geht.

Wenn Sie eine Seite finden, die kein zugeordnetes interaktives Beispiel hat, können Sie gerne eines beitragen!

### Demo des interaktiven Beispiels

Das [`EmbedInteractiveExample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedInteractiveExample.ejs)-Makro wird verwendet, um fertige Beispiele in MDN-Seiten einzubetten. Zum Beispiel zeigt der Makro-Aufruf \\{{EmbedInteractiveExample("pages/js/array-push.html")}} das folgende Code-Beispiel:

{{EmbedInteractiveExample("pages/js/array-push.html")}}Versuchen Sie, den Code anzupassen, um zu sehen, was passiert und spielen Sie mit den Steuerelementen.

## Traditionelle Live-Beispiele

Traditionelle Live-Beispiele werden in die Seite eingefügt, indem das [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs)-Makro verwendet wird. Ein \\{{EmbedLiveSample}}-Aufruf erfasst dynamisch die Codeblöcke im selben Dokumentabschnitt wie er selbst und fügt sie in ein Dokument ein, das er dann in die Seite innerhalb eines {{htmlelement("iframe")}} einfügt. Weitere Informationen finden Sie in unserem [Leitfaden für Live-Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).

## GitHub Live-Beispiele

GitHub Live-Beispiele werden mithilfe des [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs)-Makros in die Seite eingefügt. Ein \\{{EmbedGHLiveSample}}-Aufruf erfasst dynamisch das Dokument an einer angegebenen URL (die im GitHub-Organisation **mdn** sein muss) und fügt es innerhalb eines {{htmlelement("iframe")}} in die Seite ein.

Diese funktionieren sehr ähnlich wie traditionelle Live-Beispiele, sind aber viel einfacher:

Sie müssen sich keine Sorgen um die Platzierung von Codeblöcken auf der Seite machen — es wird ein HTML-Dokument in einem GitHub-Repo erfasst und im `<iframe>` platziert.

Das Makro hat nur drei Parameter:

1. Die URL des einzubettenden Dokuments — diese ist relativ zur MDN-Organisation, deren oberstes Verzeichnis unter `https://mdn.github.io/` liegt. Dieser Parameter muss den Teil der URL nach diesem Punkt enthalten, z. B. `mein-unterverzeichnis/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` lautet.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.

Schauen wir uns ein Beispiel an. Angenommen, wir wollten den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Wir könnten den folgenden Aufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Dies sieht folgendermaßen aus, wenn es gerendert wird:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

### Tipps zur Verwendung von GitHub-Live-Beispielen

- Sie müssen natürlich zunächst ein geeignetes Code-Beispiel in die [MDN GitHub-Organisation](https://github.com/mdn/) bringen. Dies muss mit Git erfolgen. Wenn Sie mit Git nicht vertraut sind, sehen Sie sich unseren Artikel [Wie verwende ich GitHub Pages?](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) an und [Vorbereitung zur Datenaufnahme](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für fortgeschrittenere Anwendungen.
- Ihr Code-Beispiel muss geeignet sein, um zu zeigen, was Sie demonstrieren möchten — es sollte ein einfaches Beispiel enthalten, das eine Sache gut macht, keinen anstößigen Inhalt enthalten und den MDN [Leitlinien für Code-Beispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) folgen.
