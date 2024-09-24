---
title: "Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling"
slug: Learn/Forms/Test_your_skills:_Advanced_styling
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist es, festzustellen, ob Sie unsere Artikel [Fortgeschrittenes Formularstyling](/de/docs/Learn/Forms/Advanced_form_styling) und [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) melden.

## Fortgeschrittenes Formularstyling 1

In unseren ersten Aufgaben zum fortgeschrittenen Styling möchten wir, dass Sie ein Suchfeld so konsistent wie möglich über verschiedene Browser hinweg gestalten — eine schwierigere Aufgabe als bei standardmäßigen Texteingaben, selbst in modernen Browsern.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Versuchen Sie zunächst, dem Suchfeld eine konsistente Breite, Höhe, Polsterung und Randfarbe über alle Browser hinweg zu geben.
2. Sie werden feststellen, dass sich einige Browser nicht in Bezug auf die Höhe des Formularelements verhalten. Dies liegt daran, dass in einigen Fällen natives Betriebssystem-Styling verwendet wird. Wie können Sie dieses native Styling entfernen?
3. Sobald Sie das native Styling entfernt haben, müssen Sie eine der Funktionen, die es bereitstellte, wieder hinzufügen, um das ursprüngliche Aussehen und Gefühl beizubehalten. Wie machen Sie das?
4. Eine Sache, die in verschiedenen Browsern (insbesondere in Safari) inkonsistent ist, ist die Position des standardmäßigen blauen Fokusrahmens. Wie können Sie diesen entfernen?
5. Es gibt ein großes Problem damit, nur den blauen Fokusrahmen zu entfernen. Was ist es? Können Sie eine Art Styling wieder hinzufügen, damit Benutzer erkennen können, wann das Suchfeld schwebt oder fokussiert wird?
6. Ein weiteres Merkmal, das häufig ein Suchfeld kennzeichnet, ist ein Lupe-Icon. Wir haben eines im selben Verzeichnis wie unsere HTML-Dateien bereitgestellt — siehe [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) — sowie ein `<div>`-Element nach dem Sucheingabefeld, um Ihnen zu helfen, es anzubringen, falls Sie es benötigen. Können Sie eine sinnvolle Methode finden, es anzubringen, und können Sie etwas CSS verwenden, um es rechts vom Suchfeld und vertikal ausgerichtet zu platzieren?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html) herunter, um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittenes Formularstyling 2

In unserer nächsten Aufgabe stellen wir Ihnen ein Set von drei Radiobuttons zur Verfügung. Wir möchten, dass Sie ihnen benutzerdefiniertes Styling geben.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Entfernen Sie zunächst ihr Standard-Styling.
2. Geben Sie den Radiobuttons anschließend ein vernünftiges Grundstil — den Stil, den sie haben, wenn die Seite erstmals geladen wird. Dies kann alles sein, was Sie möchten, aber Sie möchten wahrscheinlich eine Breite und Höhe (zwischen etwa 18 und 24 Pixel) sowie eine subtile Rahmen- und/oder Hintergrundfarbe festlegen.
3. Verleihen Sie den Radiobuttons nun einen anderen Stil, wenn sie ausgewählt sind.
4. Richten Sie die Radiobuttons schön mit den Beschriftungen aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html) herunter, um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittenes Formularstyling 3

In unserer letzten Aufgabe dieser Bewertungsreihe stellen wir Ihnen ein Feedback-Formular zur Verfügung, das bereits schön gestylt ist — Sie haben bereits etwas Ähnliches gesehen, wenn Sie unseren Artikel zu den [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) durchgearbeitet haben, und jetzt möchten wir, dass Sie Ihre eigene Lösung finden.

Was wir von Ihnen möchten, ist, einige fortgeschrittene Pseudoklassen zu verwenden, um einige nützliche Indikatoren für die Gültigkeit bereitzustellen.

1. Zunächst möchten wir, dass Sie ein spezifisches Styling bereitstellen, um visuell anzuzeigen, welche Eingaben auszufüllen sind — sie dürfen nicht leer bleiben.
2. Zweitens möchten wir, dass Sie einen nützlichen visuellen Indikator bereitstellen, ob die in jede Eingabe eingegebenen Daten gültig sind oder nicht.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html) herunter, um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
