---
title: Verwendung von Makros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Die [Yari](https://github.com/mdn/yari)-Plattform, auf der MDN läuft, bietet ein Makrosystem namens [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript), das es ermöglicht, bestimmte Aufgaben zu automatisieren. Dieser Artikel liefert Informationen zur Verwendung von MDNs Makros innerhalb von Artikeln.

Der [KumaScript-Leitfaden](https://github.com/mdn/yari/blob/main/docs/kumascript/README.md) bietet einen tiefgehenden Einblick in die Verwendung von Makros auf MDN. Dieser Abschnitt gibt daher nur einen kurzen Überblick.

## Wie Makros implementiert sind

Makros auf MDN werden mithilfe von serverseitig ausgeführtem [JavaScript](/de/docs/Web/JavaScript)-Code implementiert, der mit [Node.js](https://nodejs.org/en/) interpretiert wird. Zusätzlich dazu haben wir eine Reihe von Bibliotheken implementiert, die Dienste und Funktionen bereitstellen, damit Makros mit der Plattform und ihren Inhalten interagieren können.

## Verwendung eines Makros im Inhalt

Um ein Makro zu verwenden, umschließen Sie den Aufruf des Makros zusammen mit seinen Parametern, falls vorhanden, in ein Paar doppelte geschweifte Klammern:

```plain
\{{macroname(parameter-list)}}
```

Einige Hinweise zu Makroaufrufen:

- Makronamen sind groß- und kleinschreibungsempfindlich, aber es wird versucht, häufige Großschreibfehler zu korrigieren; Sie können durchgehend Kleinbuchstaben verwenden, selbst wenn der Makroname Großbuchstaben enthält, und Sie können einen Makro großschreiben, dessen Name normalerweise mit einem Kleinbuchstaben beginnt.
- Parameter werden durch Kommata getrennt.
- Wenn es keine Parameter gibt, können Sie die Klammern vollständig weglassen; `\{{macroname()}}` und `\{{macroname}}` sind identisch.
- Numerische Parameter können in Anführungszeichen stehen oder nicht. Das bleibt Ihnen überlassen (wenn Sie jedoch eine Versionsnummer mit mehreren Dezimalstellen haben, muss diese in Anführungszeichen stehen).
- Bei Fehlern prüfen Sie sorgfältig Ihren Code. Wenn Sie immer noch nicht herausfinden können, was los ist, lesen Sie [Fehlerbehebung bei KumaScript-Fehlern](https://github.com/mdn/yari/blob/main/docs/kumascript/troubleshooting-errors.md) für Hilfe.

Makros werden stark gecachet; für jeden Satz von Eingabewerten (sowohl Parameter- als auch Umweltwerte wie die URL, für die das Makro ausgeführt wurde) werden die Ergebnisse gespeichert und wiederverwendet. Das bedeutet, dass das Makro nur tatsächlich ausgeführt wird, wenn sich die Eingaben ändern.

Makros können so einfach sein wie das Einfügen eines größeren Textblocks oder das Austauschen von Inhalten aus einem anderen Teil von MDN, oder so komplex wie das Erstellen eines vollständigen Inhaltsindexes durch Durchsuchen von Teilen der Seite, Stylen der Ausgabe und Hinzufügen von Links.

Sie können auf unserer Seite über häufig verwendete Makros auf den [häufig verwendeten Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) nachlesen; Sie können auch die [vollständigen Quellen für alle Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) durchstöbern. Die meisten Makroquellen haben Dokumentationen, die als Kommentare an der Spitze eingebaut sind.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
