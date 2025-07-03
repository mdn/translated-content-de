---
title: "Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling"
short-title: Fortgeschrittenes Styling
slug: Learn_web_development/Extensions/Forms/Test_your_skills/Advanced_styling
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie unsere Artikel zu [fortgeschrittenem Formularstyling](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling) und [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Fortgeschrittenes Formularstyling 1

In unseren ersten Aufgaben zum fortgeschrittenen Styling möchten wir, dass Sie ein Sucheingabefeld möglichst konsistent über verschiedene Browser hinweg gestalten — eine kniffligere Aufgabe als bei Standard-Textfeldern, selbst in modernen Browsern.

Wir haben Ihnen bereits ein grundlegendes Reset bereitgestellt, auf dem Sie aufbauen können.

1. Versuchen Sie zunächst, dem Suchfeld im gesamten Browser eine konsistente Breite, Höhe, Polsterung und Rahmenfarbe zu geben.
2. Sie werden feststellen, dass einige Browser sich in Bezug auf die Höhe des Formularelements nicht wie erwartet verhalten. Dies liegt daran, dass in einigen Fällen native OS-Stylings verwendet werden. Wie können Sie dieses native Styling entfernen?
3. Sobald Sie das native Styling entfernt haben, müssen Sie eines der Merkmale wieder hinzufügen, das es bereitgestellt hat, um die gleiche Optik und Haptik beizubehalten, die wir ursprünglich hatten. Wie machen Sie das?
4. Eine Sache, die über verschiedene Browser hinweg inkonsistent ist (insbesondere in Bezug auf Safari), ist die Position der Standard-blauen Fokusskontur. Wie können Sie diese entfernen?
5. Es gibt ein großes Problem damit, die blaue Fokuskontur einfach zu entfernen. Was ist es? Können Sie etwas Styling hinzufügen, damit Benutzer erkennen können, wann das Suchfeld gehoben oder fokussiert ist?
6. Ein weiteres Merkmal, das häufig ein Suchfeld kennzeichnet, ist ein Lupe-Symbol. Wir haben eines im gleichen Verzeichnis wie unsere HTML-Dateien verfügbar gemacht — siehe [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) — sowie ein `<div>`-Element nach dem Suchfeld, um Ihnen beim Anhängen zu helfen, falls nötig. Können Sie einen sinnvollen Weg finden, es anzuhängen, und können Sie etwas CSS verwenden, um es rechts vom Suchfeld zu platzieren, sodass es auch vertikal ausgerichtet ist?

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittenes Formularstyling 2

In unserer nächsten Aufgabe stellen wir Ihnen eine Gruppe von drei Optionsfeldern zur Verfügung. Wir möchten, dass Sie ihnen benutzerdefiniertes Styling geben.

Wir haben Ihnen bereits ein grundlegendes Reset bereitgestellt, auf dem Sie aufbauen können.

1. Entfernen Sie zunächst das Standardstyling.
2. Geben Sie den Optionsfeldern als Nächstes ein angemessenen Basisstil — den Stil, den sie haben, wenn die Seite zum ersten Mal geladen wird. Dies kann beliebig sein, aber Sie möchten wahrscheinlich eine Breite und Höhe festlegen (zwischen etwa 18 und 24 Pixel) und eine dezente Rahmen- und/oder Hintergrundfarbe.
3. Geben Sie den Optionsfeldern nun einen anderen Stil, wenn sie ausgewählt sind.
4. Richten Sie die Optionsfelder schön an den Beschriftungen aus.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Fortgeschrittenes Formularstyling 3

In unserer letzten Aufgabe dieser Bewertungsreihe stellen wir Ihnen ein Feedback-Formular zur Verfügung, das bereits schön gestaltet ist — Sie haben so etwas Ähnliches bereits gesehen, wenn Sie unseren Artikel zu [UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) durchgearbeitet haben, und nun möchten wir, dass Sie Ihre eigene Lösung entwickeln.

Was wir von Ihnen möchten, ist, einige fortgeschrittene Pseudoklassen zu verwenden, um nützliche Validitätsindikatoren bereitzustellen.

1. Zunächst möchten wir, dass Sie ein spezifisches Styling bereitstellen, um visuell anzuzeigen, welche Eingaben ausgefüllt werden müssen — sie dürfen nicht leer bleiben.
2. Zweitens möchten wir, dass Sie einen nützlichen visuellen Indikator dafür bereitstellen, ob die eingegebenen Daten in jedem Eingabefeld gültig sind oder nicht.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
