---
title: Makros verwenden
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

Die Plattform [Yari](https://github.com/mdn/yari), auf der MDN läuft, stellt ein Makrosystem zur Verfügung, [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript), das es ermöglicht, bestimmte Aufgaben zu automatisieren. Dieser Artikel bietet Informationen darüber, wie Sie die Makros von MDN innerhalb von Artikeln aufrufen können.

Der [KumaScript-Leitfaden](https://github.com/mdn/yari/blob/main/docs/kumascript/README.md) bietet einen detaillierten Einblick in die Verwendung von Makros auf MDN, daher ist dieser Abschnitt eher ein kurzer Überblick.

## Wie Makros implementiert sind

Makros auf MDN werden unter Verwendung von server-ausgeführtem [JavaScript](/de/docs/Web/JavaScript) Code implementiert, der mit [Node.js](https://nodejs.org/en/) interpretiert wird.
Darauf aufbauend haben wir eine Reihe von Bibliotheken implementiert, die Dienste und Funktionen bereitstellen, um Makros die Interaktion mit der Plattform und ihren Inhalten zu ermöglichen.

## Verwendung eines Makros im Inhalt

Um ein Makro zu verwenden, schließen Sie den Aufruf des Makros zusammen mit seinen Parametern, falls vorhanden, in ein Paar doppelter geschweifter Klammern ein:

```plain
\{{macroname(parameter-list)}}
```

Einige Hinweise zu Makroaufrufen:

- Makronamen sind groß- und kleinschreibungsempfindlich, aber es wird versucht, häufige Schreibfehler in der Großschreibung zu korrigieren; Sie können alle Kleinbuchstaben verwenden, auch wenn der Makroname Großbuchstaben enthält, und Sie können ein Makro mit Kleinbuchstaben beginnen, dessen Name normalerweise mit einem Kleinbuchstaben beginnt.
- Parameter werden durch Kommas getrennt.
- Wenn keine Parameter vorhanden sind, können Sie die Klammern vollständig weglassen; `\{{macroname()}}` und `\{{macroname}}` sind identisch.
- Numerische Parameter können in Anführungszeichen stehen oder nicht. Dies hängt von Ihnen ab (wenn Sie jedoch eine Versionsnummer mit mehreren Dezimalstellen haben, muss sie in Anführungszeichen stehen).
- Wenn Sie Fehler erhalten, überprüfen Sie Ihren Code sorgfältig. Wenn Sie immer noch nicht herausfinden können, was los ist, lesen Sie [Fehlerbehebung bei Kumaskript-Fehlern](https://github.com/mdn/yari/blob/main/docs/kumascript/troubleshooting-errors.md), um Hilfe zu erhalten.

Makros werden stark zwischengespeichert; für jeden Satz von Eingabewerten (sowohl Parameter als auch Umgebungswerte wie die URL, für die das Makro ausgeführt wurde) werden die Ergebnisse gespeichert und wiederverwendet. Das bedeutet, dass das Makro tatsächlich nur ausgeführt wird, wenn sich die Eingaben ändern.

Makros können so einfach sein, dass sie einfach einen größeren Textblock einfügen oder Inhalte aus einem anderen Teil von MDN austauschen, oder so komplex, dass sie durch das Durchsuchen von Teilen der Website einen gesamten Inhaltsindex erstellen, das Ergebnis gestalten und Links hinzufügen.

Sie können unsere am häufigsten verwendeten Makros auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) nachlesen; außerdem können Sie die [vollständigen Quellen für alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) durchsuchen. Die meisten Makroquellen enthalten eine eingebaute Dokumentation in Form von Kommentaren am Anfang.

## Siehe auch

- [Seitenleistenmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Linkmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Funktionsstatusmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
