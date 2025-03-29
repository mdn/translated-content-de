---
title: Kognitive Barrierefreiheit
slug: Web/Accessibility/Guides/Cognitive_accessibility
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

Kognitive Barrierefreiheit umfasst Überlegungen zur Barrierefreiheit für Menschen mit kognitiven und Lernbehinderungen. Dieses Dokument führt in die kognitive Barrierefreiheit ein und zeigt Wege auf, wie die Barrierefreiheit des Webs für Menschen mit kognitiven und Lernunterschieden verbessert werden kann.

Kognitive Beeinträchtigungen beziehen sich auf ein breites Spektrum von Behinderungen, von Menschen mit intellektuellen Behinderungen, die möglicherweise die am meisten eingeschränkten Fähigkeiten haben, bis hin zu altersbedingten Problemen mit Denken und Erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen wie Depressionen und Schizophrenie. Es umfasst auch Menschen mit Lernbehinderungen wie Dyslexie und Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS).

Obwohl es innerhalb der klinischen Definitionen kognitiver Einschränkungen eine große Vielfalt gibt, erleben Menschen mit ihnen einen gemeinsamen Satz von funktionalen Problemen. Diese Probleme umfassen Schwierigkeiten beim Verständnis von Inhalten, beim Erinnern, wie Aufgaben zu erledigen sind, und Verwirrung, die durch inkonsequente oder unkonventionelle Webseitenlayouts verursacht wird. In diesem Dokument konzentrieren wir uns auf Schritte, die Entwickler unternehmen sollten, um die kognitive Barrierefreiheit ihrer Websites und Anwendungen zu verbessern.

## Übersicht

Kognitive und intellektuelle Behinderungen umfassen ein großes Spektrum und können momentane, vorübergehende oder permanente Zustände sein. Zum Beispiel sind Demenz und Alzheimer permanente kognitive Beeinträchtigungen, die sich fortschreitend verschlimmern. Weitere permanente kognitive Beeinträchtigungen umfassen Aphasie, Sprach- und Sprachstörungen, Autismus, ADD/ADHS, Dyslexie und Dyskalkulie.

Ein Beispiel für eine vorübergehende kognitive Beeinträchtigung könnten Personen sein, die von Substanzen wie Alkohol oder Drogen betroffen sind. Eine andere Form könnte Depressionen sein, etwa bei Trauer über den Verlust eines geliebten Menschen oder bei momentaner Traurigkeit aufgrund eines Tweets oder Videos, das sie gerade online gesehen haben. Ein weiteres Beispiel könnte Schlafmangel sein.

Es mag wie eine überwältigende Herausforderung erscheinen, die breite Palette kognitiver Unterschiede anzugehen, insbesondere da Lösungen für zwei verschiedene Personen widersprüchlich sein können. Eine Möglichkeit, dies zu bewältigen, besteht darin, sich auf kognitive Fähigkeiten zu konzentrieren. Kognitive Fähigkeiten umfassen:

- Aufmerksamkeit
- Gedächtnis
- Verarbeitungsgeschwindigkeit
- Zeitmanagement
- Buchstaben und Sprache
- Zahlen, Symbole und Mathematik
- Verstehen und Entscheidungen treffen

Ein solider Ansatz zur Bereitstellung zugänglicher Lösungen für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, zum Beispiel in Form von Text-to-Speech oder als Video;
- Bereitstellung von leicht verständlichen Inhalten, wie zum Beispiel Texte, die nach Klarsprachestandards verfasst sind;
- Konzentration auf wichtige Inhalte;
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung;
- Bereitstellung eines konsistenten Webseitenlayouts und einer konsistenten Navigation;
- Einbeziehung vertrauter Elemente, wie unterstrichene Links, die blau sind, wenn sie nicht besucht wurden, und lila, wenn sie besucht wurden;
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen;
- Erleichterung der Webseiten-Authentifizierung soweit wie möglich, ohne die Sicherheit zu beeinträchtigen; und
- Erleichterung der Ausfüllbarkeit von Formularen, zum Beispiel mit klaren Fehlermeldungen und Fehlerbehebungsverfahren.

## WCAG-Leitlinien

WCAG, Web Content Accessibility Guidelines, enthält mehrere Richtlinien zur Verbesserung der kognitiven Barrierefreiheit. Diese Richtlinien werden von der Web Accessibility Initiative (WAI) des World Wide Web Consortium (W3C), der Hauptorganisation für internationale Internetstandards, veröffentlicht. Diese Gruppe ist auch verantwortlich für die [Accessible Rich Internet Application (ARIA)](/de/docs/Web/Accessibility/ARIA/Guides) Richtlinien.

WCAG wird von vier Prinzipien geleitet: Websites müssen wahrnehmbar, bedienbar, verständlich und robust sein. Zu diesem Zweck definieren sie 17 spezifische Richtlinien, von denen sechs besonders relevant für die kognitive Barrierefreiheit sind.

Alle folgenden Richtlinien helfen mehr als nur Menschen mit kognitiven Behinderungen. Zum Beispiel hilft die Möglichkeit, die Ablaufzeit einer Anwendung, die einen Authentifizierungscode erfordert, der per Textnachricht an ein mobiles Gerät gesendet wird, in folgenden Szenarien:

- Menschen mit Aufmerksamkeits- oder Angststörungen.
- Menschen, die ein schlechtes Kurzzeitgedächtnis haben oder Multitasking betreiben.
- Menschen, die weniger technikaffin sind.
- Menschen, die einen schlechten Empfang haben.
- Menschen mit motorischen Kontrollproblemen.

## Anpassungsfähigkeit

[Guideline 1.3](https://www.w3.org/WAI/WCAG21/Understanding/adaptable) besagt, dass "Inhalte **anpassbar** sein sollten". Erstellen Sie Inhalte, die auf unterschiedliche Weise präsentiert werden können, ohne Informationen oder Struktur zu verlieren. Bieten Sie beispielsweise {{Glossary("responsive_web_design", "responsive")}} Layouts an, mit einem Einspalten-Design für mobile Endgeräte.

Alle Informationen, einschließlich der durch die Präsentation vermittelten Struktur und Beziehungen, sollten in einer Form verfügbar sein, die von allen Nutzern wahrgenommen werden kann, um dieses Ziel zu erreichen. Zum Beispiel könnten die Informationen über ein Erzählwerkzeug laut vorgelesen werden. Wenn Ihre Inhalte von Software verstanden werden können, ist das eine gute Möglichkeit, sicherzustellen, dass sie auch von alternativen Präsentationsmodi genutzt werden können.

## Zeit

Es ist wichtig, Benutzern die Zeit zu geben, die sie benötigen, um Aufgaben zu erledigen. [Guideline 2.2](https://www.w3.org/WAI/WCAG21/Understanding/enough-time) besagt: "Geben Sie Benutzern genügend **Zeit**, um Inhalte zu lesen und zu nutzen".

Ein **Zeitlimit** ist jeder Prozess, der ohne Benutzerinitiation nach einer festgelegten Zeit oder regelmäßig erfolgt, wie zum Beispiel das Ausloggen nach 30 Minuten oder das Erwägen von 15 Minuten, um einen Kauf abzuschließen. Personen mit kognitiven Behinderungen benötigen möglicherweise mehr Zeit, um Inhalte zu lesen oder Funktionen auszuführen, wie zum Beispiel das Ausfüllen von Formularen. Lösungen bestehen darin, den Benutzern genügend zusätzliche Zeit zu geben, um Aufgaben zu erledigen oder Zeitbeschränkungen ganz zu beseitigen.

### Timer

Optionen zur Anpassung der Zeitanforderungen umfassen:

- Dem Benutzer das Ausschalten oder Anpassen der Zeit auf mindestens das Zehnfache des ursprünglichen Limits zu ermöglichen, bevor er darauf stößt.
- Den Benutzer zu benachrichtigen und ein Puffer von mindestens 20 Sekunden zu bieten, um die Zeitlimitierung durch eine Aktion, wie das Betätigen der Leertaste, um den Faktor 10 zu verlängern.

Bieten Sie in den Inhalten einen Umschalter an, mit dem Benutzer eine längere Sitzungslimit oder gar kein Sitzungslimit aktivieren können. Beispiele für zeitgesteuerte Inhalte umfassen Formulare, zeitgesteuerte Leseübungen und Schulungsmaterialien. Wenn das Zeitlimit länger als 20 Stunden ist, sind keine Vorkehrungen erforderlich.

### Bewegung, Blinken, Scrollen

Es ist wichtig, Benutzer, insbesondere solche mit kognitiven Behinderungen, nicht abzulenken.

Wenn sich automatisch bewegende, blinkende, scrollende oder automatisch aktualisierte Informationen automatisch starten, länger als fünf Sekunden dauern und parallel zu anderen Inhalten präsentiert werden, muss der Benutzer in der Lage sein, diese zu pausieren, zu stoppen, zu verbergen oder zu kontrollieren, es sei denn, sie sind eine wesentliche Funktionalität. "Wesentlich" bedeutet, dass das Entfernen der sich bewegenden, blinkenden, scrollenden oder automatisch aktualisierten Informationen die Bedeutung des Inhalts und/oder der Funktionalität grundlegend verändern würde **und** dass Informationen und Funktionen nicht auf andere Weise erreicht werden können, die den Anforderungen entsprechen. Dies schließt animierte GIFs ein, wenn das GIF länger als 5 Sekunden animiert.

Zusätzliche Zeitkriterien, die berücksichtigt werden sollten, sind:

- Menschen mit kognitiven oder sprachlichen Einschränkungen benötigen möglicherweise mehr Zeit zum Lesen und Verstehen. Für eine verbesserte Benutzerfreundlichkeit sollten alle Zeitlimits entfernt werden. Zeitgesteuerte Inhalte sollten ebenfalls vermieden werden, mit Ausnahmen für nicht-interaktive synchronisierte Medien und Echtzeitereignisse.
- Menschen mit Aufmerksamkeitsdefizitstörungen sollten sich ohne Ablenkungen auf Inhalte konzentrieren können. Der Benutzer sollte in der Lage sein, Unterbrechungen aufzuschieben oder zu unterdrücken, außer in Situationen, in denen eine Benachrichtigung über einen Notfall erforderlich ist. Dies bietet Menschen mit kognitiven Behinderungen Zugang, indem sie sich auf den Hauptzweck des Inhalts konzentrieren können. Geben Sie dem Benutzer die Möglichkeit, Inhaltsaktualisierungen aufzuschieben, indem Sie eine Möglichkeit bieten, Inhaltsaktualisierungen anzufordern, anstatt automatisch zu aktualisieren. Stellen Sie auch eine Möglichkeit bereit, nicht wesentliche Benachrichtigungen optional zu machen.
- Stellen Sie sicher, dass Menschen eine Aktivität ohne Datenverlust fortsetzen können, nachdem sie eine abgelaufene Sitzung erneut authentifiziert haben, z. B. durch Speichern des Status eines Fragebogens. Stellen Sie sicher, dass Daten so gespeichert werden, dass sie nach erneuter Authentifizierung des Benutzers geändert werden können. Kodieren Sie die Daten vor der erneuten Authentifizierung als versteckt oder verschlüsselt.
- Geben Sie Warnungen über Inaktivität, die zu Datenverlust führen könnte. Wenn ein Timeout verwendet wird, informieren Sie die Menschen genau, wie viel Zeit dazu führen wird, dass die Sitzung abläuft und Daten verlore
