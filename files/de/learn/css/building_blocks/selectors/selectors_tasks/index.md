---
title: "Testen Sie Ihre Fähigkeiten: Selektoren"
slug: Learn/CSS/Building_blocks/Selectors/Selectors_Tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist zu prüfen, ob Sie [CSS Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) verstehen.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie stecken bleiben, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe soll mit CSS folgendes erreicht werden, ohne das HTML zu ändern:

- Machen Sie `<h1>` Überschriften blau.
- Geben Sie `<h2>` Überschriften einen blauen Hintergrund und weißen Text.
- Bewirken Sie, dass der in einem `<span>` eingeschlossene Text eine Schriftgröße von 200% hat.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Text mit dem auf die Lösung der Aufgabe 1 angewandten CSS.](selectors1.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/type.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/type-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe soll das Aussehen des Inhalts im folgenden Beispiel geändert werden, ohne das HTML zu ändern:

- Geben Sie dem Element mit der ID `special` einen gelben Hintergrund.
- Geben Sie dem Element mit der Klasse `alert` einen 1px grauen Rahmen.
- Wenn das Element mit der Klasse `alert` auch die Klasse `stop` hat, machen Sie den Hintergrund rot.
- Wenn das Element mit der Klasse `alert` auch die Klasse `go` hat, machen Sie den Hintergrund grün.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Text mit dem auf die Lösung der Aufgabe 2 angewandten CSS.](selectors2.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/class-id.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/class-id-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe sollen folgende Änderungen vorgenommen werden, ohne das HTML zu ergänzen:

- Gestalten Sie Links so, dass der Link-Zustand orange, besuchte Links grün sind, und der Unterstrich beim Hover entfernt wird.
- Machen Sie das erste Element im Container Schriftgröße: 150% und die erste Zeile dieses Elements rot.
- Streifen Sie jede zweite Zeile in der Tabelle, indem Sie diese Zeilen auswählen und ihnen eine Hintergrundfarbe von #333 und Vordergrund von weiß geben.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Text mit dem auf die Lösung der Aufgabe 3 angewandten CSS.](selectors3.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/pseudo.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/pseudo-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe sollen Sie folgendes tun:

- Machen Sie jeden Absatz, der direkt auf ein `<h2>`-Element folgt, rot.
- Entfernen Sie die Aufzählungszeichen und fügen Sie nur den Listenelementen, die direktes Kind der ul mit der Klasse `list` sind, einen 1px grauen unteren Rahmen hinzu.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Text mit dem auf die Lösung der Aufgabe 4 angewandten CSS.](selectors4.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/combinators.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/combinators-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 5

Fügen Sie in dieser Aufgabe CSS mithilfe von Attributselektoren hinzu, um Folgendes zu tun:

- Wählen Sie das `<a>`-Element mit einem `title`-Attribut und machen Sie den Rahmen pink (`border-color: pink`).
- Wählen Sie das `<a>`-Element mit einem `href`-Attribut aus, das irgendwo in seinem Wert das Wort `contact` enthält, und machen Sie den Rahmen orange (`border-color: orange`).
- Wählen Sie das `<a>`-Element mit einem `href`-Wert, der mit `https` beginnt, und geben Sie ihm einen grünen Rahmen (`border-color: green`).

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Vier Links mit unterschiedlich farbigen Rahmen.](selectors-attribute.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/attribute-links.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/attribute-links-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
