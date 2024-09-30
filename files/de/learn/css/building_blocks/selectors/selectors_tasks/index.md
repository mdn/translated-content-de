---
title: "Testen Sie Ihre Fähigkeiten: Selektoren"
slug: Learn/CSS/Building_blocks/Selectors/Selectors_Tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Das Ziel dieses Fähigkeitstests ist es, zu bewerten, ob Sie [CSS Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) verstehen.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe sollen Sie mit CSS Folgendes erreichen, ohne das HTML zu ändern:

- Machen Sie `<h1>` Überschriften blau.
- Geben Sie `<h2>` Überschriften einen blauen Hintergrund und weißen Text.
- Sorgen Sie dafür, dass Text, der in einem `<span>` enthalten ist, eine Schriftgröße von 200% hat.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Text mit dem CSS angewendet, um die Lösung für Aufgabe 1 zu zeigen.](selectors1.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/type.html", '100%', 700)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/type-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie folgende Änderungen am Aussehen des Inhalts in diesem Beispiel vornehmen, ohne das HTML zu ändern:

- Geben Sie dem Element mit der ID `special` einen gelben Hintergrund.
- Geben Sie dem Element mit der Klasse `alert` einen 1px grauen Rand.
- Wenn das Element mit der Klasse `alert` auch die Klasse `stop` hat, machen Sie den Hintergrund rot.
- Wenn das Element mit der Klasse `alert` auch die Klasse `go` hat, machen Sie den Hintergrund grün.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Text mit dem CSS angewendet, um die Lösung für Aufgabe 2 zu zeigen.](selectors2.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/class-id.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/class-id-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 3

In dieser Aufgabe möchten wir, dass Sie folgende Änderungen ohne Hinzufügen zum HTML vornehmen:

- Gestalten Sie Links, indem Sie die Linkfarbe orange, besuchte Links grün machen und das Unterstreichen beim Hover entfernen.
- Machen Sie das erste Element innerhalb des Containers in Schriftgröße: 150% und die erste Zeile dieses Elements rot.
- Färben Sie jede zweite Zeile in der Tabelle abwechselnd, indem Sie diese Zeilen auswählen und ihnen eine Hintergrundfarbe von #333 und eine Vordergrundfarbe von weiß geben.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Text mit dem CSS angewendet, um die Lösung für Aufgabe 3 zu zeigen.](selectors3.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/pseudo.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/pseudo-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 4

In dieser Aufgabe möchten wir, dass Sie Folgendes tun:

- Machen Sie jeden Absatz, der direkt auf ein `<h2>` Element folgt, rot.
- Entfernen Sie die Aufzählungszeichen und fügen Sie nur den Listenelementen, die ein direktes Kind des `ul` mit der Klasse `list` sind, einen 1px grauen unteren Rand hinzu.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Text mit dem CSS angewendet, um die Lösung für Aufgabe 4 zu zeigen.](selectors4.jpg)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/combinators.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/combinators-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Aufgabe 5

In dieser Aufgabe fügen Sie CSS mit Attributselektoren hinzu, um Folgendes zu tun:

- Ziel ist das `<a>` Element mit einem `title` Attribut und die Umrandung soll pink sein (`border-color: pink`).
- Ziel ist das `<a>` Element mit einem `href` Attribut, das irgendwo in seinem Wert das Wort `contact` enthält, und die Umrandung soll orange sein (`border-color: orange`).
- Ziel ist das `<a>` Element mit einem `href` Wert, der mit `https` beginnt, und geben Sie ihm eine grüne Umrandung (`border-color: green`).

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Vier Links mit unterschiedlich farbigen Umrandungen.](selectors-attribute.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/selectors/attribute-links.html", '100%', 800)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/selectors/attribute-links-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
