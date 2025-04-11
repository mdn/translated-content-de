---
title: "Testen Sie Ihre Fähigkeiten: Bedingte Anweisungen"
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Test_your_skills/Conditionals
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen — bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Falls ein Fehler auftritt, wird dieser im Ergebnisbereich auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bedingte Anweisungen 1

In dieser Aufgabe werden Ihnen zwei Variablen bereitgestellt:

- `season` — enthält eine Zeichenkette, die die aktuelle Jahreszeit angibt.
- `response` — beginnt nicht initialisiert, wird jedoch später benutzt, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird.

Wir möchten, dass Sie eine Bedingung erstellen, die überprüft, ob `season` die Zeichenkette "summer" enthält. Falls ja, soll `response` eine Zeichenkette zugewiesen werden, die dem Benutzer eine passende Nachricht über die Jahreszeit gibt. Ansonsten soll `response` eine generische Zeichenkette zugewiesen werden, die dem Benutzer mitteilt, dass die Jahreszeit unbekannt ist.

Zum Abschluss sollten Sie dann einen weiteren Test hinzufügen, der überprüft, ob `season` die Zeichenkette "winter" enthält, und wiederum eine passende Zeichenkette zu `response` zuweist.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 2

Für diese Aufgabe werden Ihnen drei Variablen bereitgestellt:

- `machineActive` — enthält eine Anzeige, ob der Anrufbeantworter eingeschaltet ist oder nicht (`true`/`false`).
- `score` — enthält Ihren Punktestand in einem imaginären Spiel. Dieser Punktestand wird in den Anrufbeantworter eingespeist, der eine Antwort gibt, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response` — beginnt nicht initialisiert, wird jedoch später benutzt, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird.

Sie müssen eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die Variable `response` einfügt, wenn sie nicht eingeschaltet ist, die dem Benutzer sagt, dass er die Maschine einschalten soll.

Innerhalb der ersten `if...else`-Struktur müssen Sie eine weitere `if...else`-Struktur verschachteln, die je nach Wert von `score` entsprechende Nachrichten in die Variable `response` einfügt — wenn die Maschine eingeschaltet ist. Die verschiedenen bedingten Prüfungen (und die daraus resultierenden Antworten) sind wie folgt:

- Punktzahl unter 0 oder über 100 — "Das ist nicht möglich, ein Fehler ist aufgetreten."
- Punktzahl von 0 bis 19 — "Das war eine schreckliche Punktzahl — totaler Ausfall!"
- Punktzahl von 20 bis 39 — "Sie wissen einige Dinge, aber es ist eine ziemlich schlechte Punktzahl. Verbesserungsbedürftig."
- Punktzahl von 40 bis 69 — "Sie haben eine annehmbare Leistung erbracht, nicht schlecht!"
- Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen sich wirklich aus."
- Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Sind Sie echt?"

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden. Nachdem Sie Ihren Code eingegeben haben, versuchen Sie, `machineActive` auf `true` zu ändern, um zu sehen, ob es funktioniert.
Bitte beachten Sie, dass für den Umfang dieser Übung die Aussage `Ihre Punktzahl ist __` auf dem Bildschirm bleibt, unabhängig vom Wert von `machineActive`.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 3

Für die letzte Aufgabe werden Ihnen vier Variablen bereitgestellt:

- `machineActive` — enthält eine Anzeige, ob die Login-Maschine eingeschaltet ist oder nicht (`true`/`false`).
- `pwd` — enthält das Login-Passwort des Benutzers.
- `machineResult` — beginnt nicht initialisiert, wird jedoch später benutzt, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird und dem Benutzer mitteilt, ob die Maschine eingeschaltet ist.
- `pwdResult` — beginnt nicht initialisiert, wird jedoch später benutzt, um eine Antwort zu speichern, die im Ausgabebereich angezeigt wird und dem Benutzer mitteilt, ob sein Login-Versuch erfolgreich war.

Wir möchten, dass Sie eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die Variable `machineResult` einfügt, die dem Benutzer mitteilt, ob die Maschine ein- oder ausgeschaltet ist.

Wenn die Maschine eingeschaltet ist, soll auch eine zweite Bedingung laufen, die überprüft, ob das `pwd` gleich `cheese` ist. Wenn ja, soll `pwdResult` eine Zeichenkette zugewiesen werden, die dem Benutzer mitteilt, dass er sich erfolgreich angemeldet hat. Andernfalls soll `pwdResult` eine andere Zeichenkette zugewiesen bekommen, die dem Benutzer mitteilt, dass sein Login-Versuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile und ohne eine `if...else`-Struktur tun.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
