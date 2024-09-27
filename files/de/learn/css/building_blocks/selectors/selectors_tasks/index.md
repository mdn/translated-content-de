---
title: "Testen Sie Ihre Fähigkeiten: Selektoren"
slug: Learn/CSS/Building_blocks/Selectors/Selectors_Tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es zu bewerten, ob Sie [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) verstehen.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe verwenden Sie CSS, um Folgendes zu tun, ohne das HTML zu ändern:

- Machen Sie `<h1>` Überschriften blau.
- Geben Sie `<h2>` Überschriften einen blauen Hintergrund und weißen Text.
- Lassen Sie Text, der in einem `<span>` eingeschlossen ist, eine Schriftgröße von 200% haben.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem für die Lösung der Aufgabe 1 angewendeten CSS.](selectors1.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/type.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/type-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie die folgende Änderungen am Erscheinungsbild des Inhalts in diesem Beispiel vornehmen, ohne das HTML zu ändern:

- Geben Sie dem Element mit der ID `special` einen gelben Hintergrund.
- Geben Sie dem Element mit der Klasse `alert` einen 1px grauen Rahmen.
- Wenn das Element mit der Klasse `alert` auch die Klasse `stop` hat, machen Sie den Hintergrund rot.
- Wenn das Element mit der Klasse `alert` auch die Klasse `go` hat, machen Sie den Hintergrund grün.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem für die Lösung der Aufgabe 2 angewendeten CSS.](selectors2.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/class-id.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/class-id-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe möchten wir, dass Sie die folgenden Änderungen vornehmen, ohne das HTML zu erweitern:

- Stylen Sie Links, indem Sie den Link-Zustand orange, besuchte Links grün machen und den Unterstrich bei Hover entfernen.
- Vergrößern Sie die Schriftgröße des ersten Elements im Container auf 150% und machen Sie die erste Zeile dieses Elements rot.
- Streifen Sie jede zweite Zeile in der Tabelle, indem Sie diese Zeilen auswählen und ihnen eine Hintergrundfarbe von #333 und Vordergrund von weiß geben.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem für die Lösung der Aufgabe 3 angewendeten CSS.](selectors3.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/pseudo.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/pseudo-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe möchten wir, dass Sie Folgendes tun:

- Lassen Sie jeden Absatz, der direkt auf ein `<h2>` Element folgt, rot werden.
- Entfernen Sie die Aufzählungszeichen und fügen Sie nur den Listenelementen, die direkte Kinder der ul mit der Klasse `list` sind, einen 1px grauen unteren Rand hinzu.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Text mit dem für die Lösung der Aufgabe 4 angewendeten CSS.](selectors4.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/combinators.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/combinators-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 5

In dieser Aufgabe fügen Sie CSS mit Attributselektoren hinzu, um Folgendes zu tun:

- Ziel ist das `<a>` Element mit einem `title` Attribut und machen Sie den Rand pink (`border-color: pink`).
- Ziel ist das `<a>` Element mit einem `href` Attribut, das irgendwo im Wert das Wort `contact` enthält, und machen Sie den Rand orange (`border-color: orange`).
- Ziel ist das `<a>` Element mit einem `href` Wert, der mit `https` beginnt, und geben Sie ihm einen grünen Rand (`border-color: green`).

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Vier Links mit unterschiedlichen farbigen Rändern.](selectors-attribute.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/attribute-links.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/attribute-links-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
