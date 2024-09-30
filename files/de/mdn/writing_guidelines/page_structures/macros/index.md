---
title: Die Verwendung von Makros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

Die [Yari](https://github.com/mdn/yari)-Plattform, auf der MDN läuft, bietet ein Makrosystem, [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript), das es ermöglicht, bestimmte Aufgaben zu automatisieren. Dieser Artikel bietet Informationen dazu, wie man die Makros von MDN innerhalb von Artikeln aufruft.

Der [KumaScript-Leitfaden](https://github.com/mdn/yari/blob/main/docs/kumascript/README.md) bietet einen umfassenden Überblick darüber, wie man Makros auf MDN verwendet, daher ist dieser Abschnitt eher eine kurze Übersicht.

## Wie Makros implementiert werden

Makros auf MDN werden mithilfe von serverseitig ausgeführtem [JavaScript](/de/docs/Web/JavaScript)-Code implementiert, der mit [Node.js](https://nodejs.org/en/) interpretiert wird. Darüber hinaus haben wir eine Reihe von Bibliotheken implementiert, die Dienste und Funktionen bieten, damit Makros mit der Plattform und deren Inhalten interagieren können.

## Verwendung eines Makros im Inhalt

Um ein Makro zu verwenden, schließen Sie den Makroaufruf zusammen mit seinen Parametern, falls vorhanden, in ein Paar geschweifter Doppelklammern ein:

```plain
\{{macroname(parameter-list)}}
```

Einige Anmerkungen zu Makroaufrufen:

- Makronamen sind case-sensitive, jedoch wird versucht, häufige Groß-/Kleinschreibfehler zu korrigieren; Sie können alles in Kleinbuchstaben schreiben, auch wenn der Makroname Großbuchstaben verwendet, und Sie können ein Makro großschreiben, dessen Name normalerweise mit einem Kleinbuchstaben beginnt.
- Parameter werden durch Kommas getrennt.
- Wenn keine Parameter vorhanden sind, können Sie die Klammern vollständig weglassen; `\{{macroname()}}` und `\{{macroname}}` sind identisch.
- Numerische Parameter können in Anführungszeichen stehen oder auch nicht. Das liegt bei Ihnen (wenn Sie allerdings eine Versionsnummer mit mehreren Dezimalstellen haben, muss diese in Anführungszeichen stehen).
- Bei Fehlern überprüfen Sie Ihren Code sorgfältig. Wenn Sie das Problem immer noch nicht herausfinden können, lesen Sie [Fehlersuche bei KumaScript-Fehlern](https://github.com/mdn/yari/blob/main/docs/kumascript/troubleshooting-errors.md) zur Hilfe.

Makros werden stark zwischengespeichert; für jeden Satz von Eingabewerten (sowohl Parameter als auch Umgebungswerte wie die URL, für die das Makro ausgeführt wurde) werden die Ergebnisse gespeichert und wiederverwendet. Das bedeutet, dass das Makro nur tatsächlich ausgeführt wird, wenn sich die Eingaben ändern.

Makros können so einfach sein, dass sie nur einen größeren Textblock einfügen oder Inhalte aus einem anderen Teil von MDN einfügen, oder so komplex, dass sie ein ganzes Inhaltsverzeichnis erstellen, indem sie Teile der Seite durchsuchen, die Ausgabe gestalten und Links hinzufügen.

Sie können mehr über die am häufigsten verwendeten Makros auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) lesen; außerdem können Sie die [vollständigen Quellen aller Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) durchstöbern. Die meisten Makroquellen haben Dokumentationen als Kommentare am Anfang eingebaut.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
