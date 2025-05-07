---
title: Verwendung von Makros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 7819249f906dcfc59a2c4cb702b80a35b7964842
---

Das [rari](https://github.com/mdn/rari)-Backend ist das Build-System von MDN und bietet eine Makrosyntax für gängige Aufgaben.

## Verwendung eines Makros im Inhalt

Um ein Makro zu verwenden, schließen Sie den Namen des Makros in ein Paar geschweifte Doppelklammern (`{{ }}`) zusammen mit seinen Parametern ein, falls vorhanden:

```plain
\{{macroname(parameter-list)}}
```

Einige Hinweise zu Makroaufrufen:

- Makronamen sind case-sensitive, aber es wird versucht, häufige Großschreibungsfehler zu korrigieren; Sie können alles klein schreiben, auch wenn der Makroname Großbuchstaben enthält, und Sie können ein Makro groß schreiben, dessen Name normalerweise mit einem Kleinbuchstaben beginnt.
- Parameter werden durch Kommas getrennt.
- Wenn keine Parameter vorhanden sind, können Sie die Klammern weglassen; `\{{macroname()}}` und `\{{macroname}}` sind identisch.
- Numerische Parameter können in Anführungszeichen gesetzt werden oder nicht. Es liegt an Ihnen (allerdings, wenn Sie eine Versionsnummer mit mehreren Dezimalstellen haben, muss diese in Anführungszeichen gesetzt werden).

Makros können so einfach sein wie das Einfügen eines größeren Textblocks oder den Austausch von Inhalten aus einem anderen Teil von MDN, oder so komplex wie das Erstellen eines gesamten Inhaltsverzeichnisses durch Durchsuchen von Teilen der Website, das Stylen des Ausgabes und das Hinzufügen von Links.

Sie können sich über unsere am häufigsten verwendeten Makros auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) informieren.
Weniger gängige Makros werden in der Dokumentation [Andere Makros](MDN/Writing_guidelines/Page_structures/Macros/Other) beschrieben.

## Siehe auch

- [Seitenleisten-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Funktionsstatus-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
