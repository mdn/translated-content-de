---
title: "Testen Sie Ihre Fähigkeiten: Fortgeschrittene Gestaltung"
slug: Learn/Forms/Test_your_skills:_Advanced_styling
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{learnsidebar}}

Ziel dieses Tests ist es, zu bewerten, ob Sie unsere Artikel [Advanced form styling](/de/docs/Learn/Forms/Advanced_form_styling) und [UI pseudo-classes](/de/docs/Learn/Forms/UI_pseudo-classes) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Fortgeschrittene Gestaltung von Formularen 1

In unseren ersten Aufgaben zur fortgeschrittenen Gestaltung möchten wir, dass Sie ein Suchfeld so konsistent wie möglich über verschiedene Browser hinweg gestalten — eine kniffligere Aufgabe als bei normalen Texteingaben, selbst in modernen Browsern.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Versuchen Sie zuerst, dem Suchfeld eine konsistente Breite, Höhe, Polsterung und Rahmenfarbe über verschiedene Browser hinweg zu geben.
2. Sie werden feststellen, dass sich einige Browser hinsichtlich der Höhe des Formularelements nicht entsprechend verhalten. Dies liegt daran, dass in einigen Fällen native OS-Styling verwendet wird. Wie können Sie dieses native Styling entfernen?
3. Sobald Sie das native Styling entfernt haben, müssen Sie ein Feature, das es bereitgestellt hat, wieder hinzufügen, um das gleiche Erscheinungsbild zu bewahren. Wie machen Sie das?
4. Eine Sache, die über Browser hinweg inkonsistent ist (insbesondere in Bezug auf Safari), ist die Position der standardmäßigen blauen Fokusumrisslinie. Wie können Sie diese entfernen?
5. Es gibt ein großes Problem, wenn Sie einfach die blaue Fokusumrisslinie entfernen. Was ist es? Können Sie eine Art Styling hinzufügen, damit Benutzer erkennen können, wann das Suchfeld gehoben oder fokussiert wird?
6. Ein weiteres Merkmal, das häufig ein Suchfeld kennzeichnet, ist ein Lupensymbol. Wir haben eines im gleichen Verzeichnis wie unsere HTML-Dateien zur Verfügung gestellt — siehe [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) — sowie ein `<div>`-Element nach der Such-Eingabezeile, das Ihnen beim Anhängen helfen kann, falls Sie es benötigen. Können Sie herausfinden, wie Sie es sinnvoll anhängen können, und können Sie CSS verwenden, um es rechts vom Suchfeld zu platzieren und vertikal auszurichten?

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittene Gestaltung von Formularen 2

In unserer nächsten Aufgabe stellen wir Ihnen ein Set aus drei Optionsfeldern zur Verfügung. Wir möchten, dass Sie ihnen eine individuelle Gestaltung geben.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Entfernen Sie zuerst das Standardstyling.
2. Geben Sie den Optionsfeldern als nächstes einen angemessenen Basisstil — der Stil, den sie haben, wenn die Seite zuerst geladen wird. Dies kann alles sein, was Ihnen gefällt, aber Sie möchten wahrscheinlich eine Breite und Höhe (von etwa 18 bis 24 Pixeln) sowie eine subtile Rahmen- und/oder Hintergrundfarbe festlegen.
3. Geben Sie den Optionsfeldern nun einen anderen Stil, wenn sie ausgewählt sind.
4. Richten Sie die Optionsfelder ordentlich mit den Beschriftungen aus.

Versuchen Sie, den folgenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittene Gestaltung von Formularen 3

In unserer letzten Aufgabe dieser Bewertungsreihe stellen wir Ihnen ein bereits schön gestaltetes Feedback-Formular zur Verfügung — Sie haben bereits etwas Ähnliches gesehen, wenn Sie unseren Artikel [UI pseudo-classes](/de/docs/Learn/Forms/UI_pseudo-classes) durchgearbeitet haben, und jetzt möchten wir, dass Sie Ihre eigene Lösung entwickeln.

Was wir von Ihnen möchten, ist, einige fortgeschrittene Pseudo-Klassen zu verwenden, um hilfreiche Indikatoren für die Gültigkeit bereitzustellen.

1. Zuerst möchten wir, dass Sie ein spezifisches Styling zur Verfügung stellen, um visuell anzuzeigen, welche Eingabefelder ausgefüllt werden müssen — sie dürfen nicht leer bleiben.
2. Zweitens möchten wir, dass Sie einen nützlichen visuellen Indikator dafür bereitstellen, ob die in jedem Eingabefeld eingegebenen Daten gültig sind oder nicht.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
