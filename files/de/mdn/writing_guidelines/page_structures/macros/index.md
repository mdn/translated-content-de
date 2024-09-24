---
title: Verwendung von Makros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

Die [Yari](https://github.com/mdn/yari)-Plattform, auf der MDN läuft, bietet ein Makro-System namens [KumaScript](https://github.com/mdn/yari/tree/main/docs/kumascript), das es ermöglicht, bestimmte Aufgaben zu automatisieren. Dieser Artikel bietet Informationen darüber, wie MDN-Makros in Artikeln aufgerufen werden können.

Der [KumaScript-Leitfaden](https://github.com/mdn/yari/blob/main/docs/kumascript/README.md) bietet einen umfassenden Überblick darüber, wie Makros auf MDN verwendet werden können, daher ist dieser Abschnitt eher eine kurze Zusammenfassung.

## Wie Makros implementiert sind

Makros auf MDN werden mittels serverseitig ausgeführtem [JavaScript](/de/docs/Web/JavaScript)-Code implementiert, welcher mit [Node.js](https://nodejs.org/en/) interpretiert wird. Darüber hinaus haben wir eine Reihe von Bibliotheken implementiert, die Dienste und Funktionen bieten, um Makros mit der Plattform und deren Inhalten interagieren zu lassen.

## Verwendung eines Makros im Inhalt

Um ein Makro zu verwenden, schließen Sie den Aufruf des Makros zusammen mit seinen Parametern, falls vorhanden, in ein Paar doppelte geschweifte Klammern ein:

```plain
\{{macroname(parameter-list)}}
```

Einige Hinweise zu Makroaufrufen:

- Makronamen sind case-sensitive, aber es wird versucht, einige häufige Fehler in der Großschreibung zu korrigieren; Sie können alles in Kleinbuchstaben verwenden, auch wenn der Makroname Großbuchstaben enthält, und Sie können einen Makronamen großschreiben, dessen Name normalerweise mit einem Kleinbuchstaben beginnt.
- Parameter werden durch Kommas getrennt.
- Wenn keine Parameter vorhanden sind, können Sie die Klammern weglassen; `\{{macroname()}}` und `\{{macroname}}` sind identisch.
- Numerische Parameter können in Anführungszeichen stehen oder nicht. Das liegt bei Ihnen (wenn jedoch eine Versionsnummer mit mehreren Dezimalstellen vorliegt, muss sie in Anführungszeichen stehen).
- Wenn Sie Fehler erhalten, überprüfen Sie Ihren Code sorgfältig. Wenn Sie immer noch nicht herausfinden können, was vor sich geht, sehen Sie im Abschnitt [Fehlerbehebung bei KumaScript-Fehlern](https://github.com/mdn/yari/blob/main/docs/kumascript/troubleshooting-errors.md) nach, um Hilfe zu erhalten.

Makros werden stark zwischengespeichert; Für jede Reihe von Eingabewerten (sowohl Parameter als auch Umgebungswerte wie die URL, für die das Makro ausgeführt wurde) werden die Ergebnisse gespeichert und wiederverwendet. Dies bedeutet, dass das Makro tatsächlich nur dann ausgeführt wird, wenn sich die Eingaben ändern.

Makros können so einfach sein wie das Einfügen eines größeren Textblocks oder das Einfügen von Inhalten aus einem anderen Teil von MDN, oder so komplex wie das Erstellen eines gesamten Inhaltsverzeichnisses durch Durchsuchen von Teilen der Website, Stylen der Ausgabe und Hinzufügen von Links.

Sie können auf unserer Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) mehr über die am häufigsten verwendeten Makros lesen; außerdem können Sie die [kompletten Quellen aller Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) durchsuchen. Die meisten Makroquellen haben Dokumentationen, die als Kommentare am Anfang eingebaut sind.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Liste der Makros](https://github.com/mdn/yari/tree/main/kumascript/macros) auf GitHub
