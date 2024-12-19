---
title: "Testen Sie Ihr Können: Bedingte Anweisungen"
slug: Learn_web_development/Core/Scripting/Test_your_skills:_Conditionals
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie unseren Artikel [Entscheidungen in Ihrem Code treffen – Bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) verstanden haben.

> [!NOTE]
> Sie können Lösungen ausprobieren, indem Sie den Code herunterladen und ihn in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn ein Fehler auftritt, wird dieser im Ergebnisfenster auf der Seite oder in der JavaScript-Konsole des Browsers protokolliert, um Ihnen zu helfen.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Bedingte Anweisungen 1

In dieser Aufgabe stehen Ihnen zwei Variablen zur Verfügung:

- `season` — enthält eine Zeichenkette, die angibt, welche Jahreszeit aktuell ist.
- `response` — beginnt nicht initialisiert, wird jedoch später verwendet, um eine Antwort zu speichern, die im Ausgabefenster angezeigt wird.

Wir möchten, dass Sie eine konditionale Anweisung erstellen, die überprüft, ob `season` die Zeichenkette "summer" enthält, und falls ja, eine Zeichenkette an `response` zuweisen, die dem Benutzer eine entsprechende Nachricht zur Jahreszeit gibt. Andernfalls sollte eine allgemeine Zeichenkette an `response` zugewiesen werden, die dem Benutzer mitteilt, dass wir nicht wissen, welche Jahreszeit es ist.

Zum Abschluss sollten Sie dann einen weiteren Test hinzufügen, der überprüft, ob `season` die Zeichenkette "winter" enthält, und erneut eine entsprechende Zeichenkette an `response` zuweisen.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals1.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 2

Für diese Aufgabe stehen Ihnen drei Variablen zur Verfügung:

- `machineActive` — enthält einen Indikator, ob der Anrufbeantworter ein- oder ausgeschaltet ist (`true`/`false`)
- `score` — enthält Ihre Punktzahl in einem imaginären Spiel. Diese Punktzahl wird in den Anrufbeantworter eingespeist, der eine Antwort gibt, um anzuzeigen, wie gut Sie abgeschnitten haben.
- `response` — beginnt nicht initialisiert, wird jedoch später verwendet, um eine Antwort zu speichern, die im Ausgabefenster angezeigt wird.

Sie müssen eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist, und eine Nachricht in die Variable `response` einfügt, wenn sie es nicht ist, die dem Benutzer mitteilt, die Maschine einzuschalten.

Innerhalb der ersten `if...else` müssen Sie ein weiteres `if...else` verschachteln, das passende Nachrichten in die Variable `response` je nach Wert von `score` einfügt — falls die Maschine eingeschaltet ist. Die verschiedenen Bedingungstests (und die daraus resultierenden Antworten) sind wie folgt:

- Punktzahl von weniger als 0 oder mehr als 100 — "Das ist nicht möglich, es ist ein Fehler aufgetreten."
- Punktzahl von 0 bis 19 — "Das war eine miserable Punktzahl — totaler Ausfall!"
- Punktzahl von 20 bis 39 — "Sie wissen einige Dinge, aber es ist eine ziemlich schlechte Punktzahl. Verbesserung notwendig."
- Punktzahl von 40 bis 69 — "Sie haben eine passable Leistung erbracht, nicht schlecht!"
- Punktzahl von 70 bis 89 — "Das ist eine großartige Punktzahl, Sie kennen sich wirklich aus."
- Punktzahl von 90 bis 100 — "Was für eine erstaunliche Punktzahl! Haben Sie geschummelt? Sind Sie echt?"

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden. Nachdem Sie Ihren Code eingegeben haben, versuchen Sie `machineActive` auf `true` zu ändern, um zu sehen, ob es funktioniert.
Bitte beachten Sie, dass für den Umfang dieser Übung die Anweisung `Your score is __` weiterhin auf dem Bildschirm angezeigt wird, unabhängig vom Wert von `machineActive`.

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals2.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

## Bedingte Anweisungen 3

Für die letzte Aufgabe stehen Ihnen vier Variablen zur Verfügung:

- `machineActive` — enthält einen Indikator, ob die Login-Maschine ein- oder ausgeschaltet ist (`true`/`false`).
- `pwd` — enthält das Login-Passwort des Benutzers.
- `machineResult` — beginnt nicht initialisiert, wird jedoch später verwendet, um eine Antwort zu speichern, die im Ausgabefenster angezeigt wird, um dem Benutzer mitzuteilen, ob die Maschine eingeschaltet ist.
- `pwdResult` — beginnt nicht initialisiert, wird jedoch später verwendet, um eine Antwort zu speichern, die im Ausgabefenster angezeigt wird, um dem Benutzer mitzuteilen, ob sein Login-Versuch erfolgreich war.

Wir möchten, dass Sie eine `if...else`-Struktur erstellen, die überprüft, ob die Maschine eingeschaltet ist und eine Nachricht in die Variable `machineResult` einfügt, die dem Benutzer mitteilt, ob sie ein- oder ausgeschaltet ist.

Wenn die Maschine ein ist, möchten wir, dass auch eine zweite Bedingung ausgeführt wird, die überprüft, ob `pwd` gleich `cheese` ist. Falls ja, sollte eine Zeichenkette an `pwdResult` zugewiesen werden, die dem Benutzer mitteilt, dass er sich erfolgreich angemeldet hat. Falls nicht, sollte eine andere Zeichenkette an `pwdResult` zugewiesen werden, die dem Benutzer mitteilt, dass sein Login-Versuch nicht erfolgreich war. Wir möchten, dass Sie dies in einer einzigen Zeile tun, ohne eine `if...else`-Struktur zu verwenden.

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("learning-area/javascript/building-blocks/tasks/conditionals/conditionals3.html", '100%', 400)}}

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/tasks/conditionals/conditionals3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
