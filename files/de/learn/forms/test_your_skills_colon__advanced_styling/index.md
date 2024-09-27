---
title: "Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling"
slug: Learn/Forms/Test_your_skills:_Advanced_styling
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

{{learnsidebar}}

Das Ziel dieses Fähigkeitstests ist zu beurteilen, ob Sie unsere Artikel zu [Fortgeschrittenem Formularstyling](/de/docs/Learn/Forms/Advanced_form_styling) und [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite ausprobieren oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Fortgeschrittenes Formularstyling 1

In unseren ersten Aufgaben zum fortgeschrittenen Styling möchten wir, dass Sie ein Suchfeld so einheitlich wie möglich über verschiedene Browser hinweg gestalten — eine schwierigere Aufgabe als bei standardmäßigen Texteingaben, selbst in modernen Browsern.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Versuchen Sie zunächst, dem Suchfeld eine einheitliche Breite, Höhe, Polsterung und Randfarbe über die Browser hinweg zu geben.
2. Sie werden feststellen, dass einige Browser sich in Bezug auf die Höhe des Formularelements nicht wie erwartet verhalten. Dies liegt daran, dass in einigen Fällen das native Betriebssystem-Styling verwendet wird. Wie können Sie dieses native Styling entfernen?
3. Sobald Sie das native Styling entfernt haben, müssen Sie eine der Funktionen, die es bereitgestellt hat, wieder hinzufügen, um das gleiche Aussehen und Verhalten wie ursprünglich zu gewährleisten. Wie machen Sie das?
4. Eine Sache, die über die Browser hinweg inkonsistent ist (insbesondere, wenn wir Safari betrachten), ist die Position der standardmäßigen blauen Fokusskontur. Wie können Sie diese entfernen?
5. Es gibt ein großes Problem damit, die blaue Fokusskontur einfach zu entfernen. Was ist das? Können Sie irgendeine Art von Styling wieder hinzufügen, damit Benutzer erkennen können, wann das Suchfeld gehoven oder fokussiert wird?
6. Eine weitere Sache, die häufig ein Suchfeld kennzeichnet, ist ein Lupensymbol. Wir haben eines im gleichen Verzeichnis wie unsere HTML-Dateien zur Verfügung gestellt — siehe [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) — sowie ein `<div>`-Element nach der Sucheingabe, das Ihnen beim Anfügen helfen soll, falls Sie es benötigen. Können Sie eine vernünftige Methode finden, es anzufügen, und können Sie etwas CSS verwenden, um es rechts vom Suchfeld zu positionieren und vertikal auszurichten?

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittenes Formularstyling 2

In unserer nächsten Aufgabe stellen wir Ihnen eine Reihe von drei Optionsfeldern zur Verfügung. Wir möchten, dass Sie ihnen ein benutzerdefiniertes Styling geben.

Wir haben Ihnen bereits ein grundlegendes Reset zur Verfügung gestellt, auf dem Sie aufbauen können.

1. Entfernen Sie zunächst das Standardstyling.
2. Geben Sie den Optionsfeldern als nächstes ein angemessenes Grundstil — den Stil, den sie haben, wenn die Seite zum ersten Mal geladen wird. Dies kann beliebig sein, aber Sie möchten wahrscheinlich eine Breite und Höhe (zwischen etwa 18 und 24 Pixel) sowie eine subtile Rand- und/oder Hintergrundfarbe festlegen.
3. Geben Sie den Optionsfeldern nun einen anderen Stil, wenn sie ausgewählt sind.
4. Richten Sie die Optionsfelder schön mit den Etiketten aus.

Versuchen Sie, den unten stehenden Live-Code zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittenes Formularstyling 3

In unserer letzten Aufgabe für diese Bewertungsreihe stellen wir Ihnen ein Feedback-Formular zur Verfügung, das bereits schön gestylt ist — Sie haben etwas Ähnliches bereits gesehen, wenn Sie unseren Artikel zu [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes) durchgearbeitet haben, und jetzt möchten wir, dass Sie Ihre eigene Lösung entwickeln.

Was wir möchten, ist, dass Sie einige fortgeschrittene Pseudoklassen verwenden, um nützliche Indikatoren für die Gültigkeit bereitzustellen.

1. Zunächst möchten wir, dass Sie spezifisches Styling bereitstellen, um visuell anzuzeigen, welche Eingaben ausgefüllt werden müssen — sie dürfen nicht leer bleiben.
2. Zweitens möchten wir, dass Sie einen nützlichen visuellen Hinweis darauf geben, ob die in jede Eingabe eingegebenen Daten gültig sind oder nicht.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
