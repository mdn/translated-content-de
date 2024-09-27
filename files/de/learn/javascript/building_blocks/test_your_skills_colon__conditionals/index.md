---
title: "Testen Sie Ihre Fähigkeiten: Conditionals"
slug: Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es zu überprüfen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/) einfügen.
> Wenn es einen Fehler gibt, wird er im Ergebnis-Panel auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Conditionals 1

In dieser Aufgabe werden Ihnen zwei Variablen zur Verfügung gestellt:

- `season` — enthält einen String, der angibt, welche Jahreszeit gerade ist.
- `response` — wird anfänglich nicht initialisiert, aber später verwendet, um eine Antwort zu speichern, die im Ausgabefenster ausgegeben wird.

Wir möchten, dass Sie eine Bedingung erstellen, die überprüft, ob `season` den String "summer" enthält. Falls ja, soll `response` ein String zugewiesen werden, der dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Falls nicht, soll `response` ein allgemeiner String zugewiesen werden, der dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.

Zum Abschluss sollten Sie dann einen weiteren Test hinzufügen, der überprüft, ob `season` den String "winter" enthält, und erneut eine entsprechende Zeichenkette an `response` zuweist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Conditionals 2

Für diese Aufgabe erhalten Sie drei Variablen:

- `machineActive` — enthält einen Indikator dafür, ob der Anrufbeantworter ein- oder ausgeschaltet ist (`true`/`false`).
- `score` — enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingespeist, der eine Antwort liefert, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response` — wird anfänglich nicht initialisiert, aber später verwendet, um eine Antwort zu speichern, die im Ausgabefenster ausgegeben wird.

Sie müssen eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist und eine Nachricht in die `response`-Variable setzt, wenn sie nicht eingeschaltet ist, und dem Benutzer mitteilt, die Maschine einzuschalten.

Innerhalb der ersten `if...else`-Struktur müssen Sie eine weitere `if...else`-Struktur verschachteln, die je nach Punktestand entsprechende Nachrichten in die `response`-Variable setzt — falls die Maschine eingeschaltet ist. Die verschiedenen Bedingungstests (und die resultierenden Antworten) sind wie folgt:

- Punktzahl weniger als 0 oder mehr als 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
- Punktzahl von 0 bis 19 — "Das war eine schreckliche Punktzahl — ein kompletter Fehlversuch!"
- Punktzahl von 20 bis 39 — "Sie wissen einige Dinge, aber es ist eine ziemlich schlechte Punktzahl. Verbesserungswürdig."
- Punktzahl von 40 bis 69 — "Sie haben eine passable Leistung erbracht, nicht schlecht!"
- Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen sich wirklich aus."
- Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Sind Sie echt?"

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden. Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu setzen, um zu sehen, ob es funktioniert.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Conditionals 3

Für die letzte Aufgabe werden Ihnen vier Variablen zur Verfügung gestellt:

- `machineActive` — enthält einen Indikator dafür, ob die Login-Maschine ein- oder ausgeschaltet ist (`true`/`false`).
- `pwd` — enthält das Login-Passwort des Benutzers.
- `machineResult` — wird anfänglich nicht initialisiert, aber später verwendet, um eine Antwort zu speichern, die im Ausgabefenster ausgegeben wird und den Benutzer wissen lässt, ob die Maschine eingeschaltet ist.
- `pwdResult` — wird anfänglich nicht initialisiert, aber später verwendet, um eine Antwort zu speichern, die im Ausgabefenster ausgegeben wird und dem Benutzer mitteilt, ob sein Login-Versuch erfolgreich war.

Wir möchten, dass Sie eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die `machineResult`-Variable setzt, die den Benutzer darüber informiert, ob sie eingeschaltet ist oder nicht.

Wenn die Maschine eingeschaltet ist, möchten wir auch, dass eine zweite Bedingung ausgeführt wird, die überprüft, ob das `pwd` gleich `cheese` ist. Falls ja, sollte ein String zu `pwdResult` zugewiesen werden, der dem Benutzer mitteilt, dass er sich erfolgreich angemeldet hat. Falls nicht, sollte ein anderer String zu `pwdResult` zugewiesen werden, der den Benutzer darüber informiert, dass sein Login-Versuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, ohne eine `if...else`-Struktur zu verwenden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
