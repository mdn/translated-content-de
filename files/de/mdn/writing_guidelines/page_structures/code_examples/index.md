---
title: Code-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Code_examples
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Auf MDN werden zahlreiche Code-Beispiele eingefügt, um die Nutzung von Webplattform-Funktionen zu demonstrieren. Dieser Artikel diskutiert die verschiedenen Mechanismen, die zum Hinzufügen von Code-Beispielen zu Seiten zur Verfügung stehen, sowie die Frage, welche Sie wann verwenden sollten.

> [!NOTE]
> Wenn Sie Ratschläge zum Styling und zur Überprüfung von Code wünschen, wie er in einem MDN-Artikel erscheint, und nicht zu den verschiedenen Einbindungsarten von Code, lesen Sie unseren [Leitfaden zum Code-Stil](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide).

## Welche Arten von Code-Beispielen sind verfügbar?

Es gibt vier Arten von Code-Beispielen auf MDN:

- Statische Beispiele — einfache Code-Blöcke, möglicherweise mit einem Screenshot, um das Ergebnis eines solchen Codes statisch anzuzeigen, wenn er ausgeführt würde.
- Interaktive Beispiele — Unser System zum Erstellen von [Live-Interaktiven Beispielen](https://github.com/mdn/interactive-examples), die den Code live ausführen, aber auch Änderungen am Code ermöglichen, um zu sehen, welchen Effekt das hat, und Ergebnisse einfach zu kopieren.
- Traditionelle MDN "Live-Beispiele" — Ein Makro, das einfache Code-Blöcke nimmt, sie dynamisch in ein Dokument innerhalb eines {{htmlelement("iframe")}}-Elements einfügt und sie in die Seite einbettet, um den Code live auszuführen.
- GitHub "Live-Beispiele" — Ein Makro, das ein Dokument in einem GitHub-Repo innerhalb der [MDN-Organisation](https://github.com/mdn/) nimmt, es in ein {{htmlelement("iframe")}}-Element einfügt und es in die Seite einbettet, um den Code live auszuführen.

Wir werden jedes dieser Beispiele in den folgenden Abschnitten näher erläutern.

## Wann sollten Sie welches verwenden?

Jeder Typ von Code-Beispiel hat seinen eigenen Anwendungsfall. Wann sollten Sie welches verwenden?

- Statische Beispiele sind nützlich, wenn Sie einfach nur Code zeigen müssen und es nicht unbedingt wichtig ist, das Live-Ergebnis zu zeigen. Einige Benutzer möchten einfach etwas zum Kopieren und Einfügen. Vielleicht zeigen Sie lediglich einen Zwischenschritt oder der Quellcode reicht aus. (Zum Beispiel richtet sich der Artikel an ein fortgeschrittenes Publikum, das nur den Code sehen muss.) Außerdem können Sie eine API-Funktion demonstrieren, die sich nicht gut als eingebettetes Beispiel eignet und möglicherweise eine separate Seite zum Verlinken benötigt.
- Die interaktiven Beispiele sind großartig, da die Leser Werte spontan ändern können — das ist sehr wertvoll für das Lernen. Sie sind jedoch komplexer einzurichten als die anderen Formen, mit mehr Einschränkungen, und sind für spezifische Zwecke vorgesehen.
- Traditionelle Live-Beispiele sind nützlich, wenn Sie Quellcode auf einer Seite zeigen wollen, dann diesen Code ausgeführt sehen möchten und es Ihnen nicht so wichtig ist, dass das Beispiel als eigenständiges Beispiel zugänglich ist. Diese Methode hat auch den Vorteil, dass Sie, wenn Sie Quellcode und Live-Beispiele nebeneinander zeigen, den Code nur einmal aktualisieren müssen, um beides zu aktualisieren. Sie können jedoch umständlich zu bearbeiten und zum Laufen zu bringen sein.
- GitHub Live-Beispiele sind nützlich, wenn Sie ein vorhandenes Beispiel einbetten möchten, den Quellcode nicht zeigen möchten und/oder sicherstellen wollen, dass das Beispiel in eigenständiger Form verfügbar ist. Sie haben einen besseren Beitragsworkflow, erfordern aber, dass Sie GitHub kennen. Da sich der on-page-Code und der Quellcode an zwei verschiedenen Orten befinden, ist es auch leichter, dass sie nicht synchron sind.

## Allgemeine Richtlinien

Abgesehen vom spezifischen System zur Präsentation der Live-Beispiele gibt es stilistische und inhaltliche Überlegungen, die bei der Erstellung oder Aktualisierung von Beispielen auf MDN zu berücksichtigen sind.

- Platzieren Sie Beispiele auf einer Seite so, dass alle Funktionen oder Optionen der API oder des Konzepts, über das Sie schreiben, abgedeckt werden. Mindestens die gebräuchlichsten Optionen oder Eigenschaften sollten in den Beispielen enthalten sein.
- Gehen Sie jedem Beispiel mit einer Erklärung voraus, was das Beispiel tut und warum es interessant oder nützlich ist.
- Folgen Sie jedem Code-Fragment mit einer Erläuterung, was es tut.
- Brechen Sie große Beispiele, wenn möglich, in kleinere Teile auf. Zum Beispiel wird das "Live-Beispiel"-System automatisch Ihren gesamten Code in einem Stück zusammenführen, bevor das Beispiel ausgeführt wird. Sie können also tatsächlich Ihr JavaScript, HTML und/oder CSS in kleinere Stücke mit beschreibendem Text nach jedem Stück aufteilen, wenn Sie dies wünschen. Dies ist ein großartiger Weg, um lange oder komplizierte Codeabschnitte klarer zu erklären.
- Gehen Sie über die einfache Demonstration hinaus, wie jedes Teil der API oder Technologie funktioniert: Erwägen Sie, mögliche reale Anwendungsfälle zu demonstrieren.

## Statische Beispiele

Bei statischen Beispielen sprechen wir von statischen Code-Blöcken, die zeigen, wie eine Funktion im Code verwendet werden könnte. Diese werden auf einer Seite mit Markdown-"Code-Einfassungen" eingefügt, wie in [Beispiel-Code-Blöcken](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks) beschrieben. Ein Beispielergebnis könnte so aussehen:

```js
// This is a JS example
const test = "Hello";
console.log(test);
```

Gegebenenfalls möchten Sie ein statisches Bild des Ergebnisausgabe des Codes zeigen. Zum Beispiel:

![Screenshot einer Konsolenausgabe in Entwicklertools](console-example.png)

## Interaktive Beispiele

Interaktive Beispiele sollen am Anfang der MDN-Referenzseiten verwendet werden — unser Ziel ist es, diese bereitzustellen, um ihren Wert für Anfänger und andere Leser zu verbessern, die einfach schnell ein Beispiel ausprobieren möchten, bevor sie alle Details dessen, was sie nachschlagen, betrachten. Es gibt einige wichtige Einschränkungen bei den interaktiven Beispielen:

- Sie sind auf eine bestimmte Technologie spezialisiert — die Benutzeroberfläche für JavaScript ist eine andere als die für CSS, und sie zeigen nur eine Technologie isoliert. Sie sind nicht geeignet, wenn Sie beispielsweise zeigen möchten, wie man eine bestimmte HTML/CSS/JS-Struktur kombiniert.
- Die inter aktiv buchbaren Live-Beispiele sind derzeit nur für CSS und JavaScript eingerichtet. Für andere Technologien müssen Sie nur abwarten.
- Die Benutzeroberfläche ist ressourcenintensiver als andere Code-Beispiele; Sie sollten nicht mehr als ein interaktives Beispiel pro MDN-Artikel verwenden.
- Sie sind nicht für große Code-Beispiele gedacht — die Benutzeroberfläche unterstützt eine Reihe von festen Größen, die wirklich nur für kurze (z.B. 10–15 Zeilen) Beispiele geeignet sind.

Wenn Sie ein Beispiel einreichen möchten, erfahren Sie im [Beitragsleitfaden für interaktive Beispiele](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md), wie das geht.

Wenn Sie eine Seite finden, die kein zugehöriges interaktives Beispiel hat, sind Sie herzlich eingeladen, eines beizutragen!

### Demo eines interaktiven Beispiels

Das [`EmbedInteractiveExample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedInteractiveExample.ejs)-Makro wird verwendet, um fertige Beispiele in MDN-Seiten einzubetten. Beispielsweise zeigt der Makroaufruf \\{{EmbedInteractiveExample("pages/js/array-push.html")}} das folgende Code-Beispiel an:

{{EmbedInteractiveExample("pages/js/array-push.html")}}Versuchen Sie, den Code anzupassen, um zu sehen, was passiert, und mit den Steuerungen zu spielen.

## Traditionelle Live-Beispiele

Traditionelle Live-Beispiele werden mit dem [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs)-Makro in die Seite eingefügt. Ein \\{{EmbedLiveSample}}-Aufruf greift dynamisch auf die Code-Blöcke im selben Dokumentabschnitt zu wie der Makroaufruf selbst und fügt sie in ein Dokument ein, das dann in die Seite innerhalb eines {{htmlelement("iframe")}} eingefügt wird. Weitere Informationen finden Sie in unserem [Leitfaden zu Live-Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples).

## GitHub Live-Beispiele

GitHub Live-Beispiele werden mit dem [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs)-Makro in die Seite eingefügt. Ein \\{{EmbedGHLiveSample}}-Aufruf erfasst dynamisch das Dokument an einer angegebenen URL (das sich innerhalb der **mdn** GitHub-Organisation befinden muss) und fügt es in die Seite innerhalb eines {{htmlelement("iframe")}} ein.

Diese funktionieren sehr ähnlich wie traditionelle Live-Beispiele, sind jedoch wesentlich einfacher:

Sie müssen sich keine Gedanken über die Platzierung von Code-Blöcken auf der Seite machen — der Makroaufruf erfasst ein HTML-Dokument in einem GitHub-Repo und fügt es in das `<iframe>` ein.

Das Makro hat nur drei Parameter:

1. Die URL des einzubettenden Dokuments — dies ist relativ zur MDN-Organisation, deren oberstes Verzeichnis sich bei `https://mdn.github.io/` befindet. Dieser Parameter muss den Teil der URL nach dieser Angabe enthalten, z.B. `my-subdirectory/example.html`. Sie können den Dateinamen weglassen, wenn er `index.html` heißt.
2. Die Breite des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.
3. Die Höhe des `<iframe>`, die als Prozentsatz oder in Pixeln ausgedrückt werden kann.

Schauen wir uns ein Beispiel an. Angenommen, wir möchten den Code unter <https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/> einbetten. Wir könnten den folgenden Makroaufruf verwenden:

\\{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

Dies sieht nach der Umsetzung so aus:

{{EmbedGHLiveSample("learning-area/css/styling-boxes/backgrounds/", '100%', 100)}}

### Tipps zum Verwenden von GitHub Live-Beispielen

- Sie müssen natürlich zunächst einen geeigneten Code-Beweis in die [MDN GitHub-Organisation](https://github.com/mdn/) bringen. Dies muss mit Git durchgeführt werden. Wenn Sie mit Git nicht vertraut sind, schauen Sie sich unseren Artikel [Wie verwende ich GitHub Pages?](/de/docs/Learn/Common_questions/Tools_and_setup/Using_GitHub_pages) an sowie [Vorbereitung zum Hinzufügen der Daten](/de/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) für fortgeschrittene Anwendungen.
- Ihr Code-Beispiel muss geeignet sein, das zu zeigen, was Sie demonstrieren möchten — es sollte ein einfaches Beispiel enthalten, das eine Sache gut macht, keinen anstößigen Inhalt enthält und den [Leitlinien für Code-Beispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) von MDN folgt.
