---
title: Verwendung von Makros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

Das [rari](https://github.com/mdn/rari) Backend ist das Builds-System von MDN und bietet eine Makrosyntax für gängige Aufgaben.

## Verwendung eines Makros im Inhalt

Um ein Makro zu verwenden, umschließen Sie den Namen des Makros in einem Paar von Doppelklammern (`{{ }}`) zusammen mit seinen Parametern, falls vorhanden:

```plain
\{{macroname(parameter-list)}}
```

Einige Hinweise zu Makroaufrufen:

- Makronamen sind groß- und kleinschreibungsempfindlich, aber es wird versucht, häufige Großschreibfehler zu korrigieren; Sie können alles in Kleinbuchstaben schreiben, auch wenn der Makroname Großbuchstaben enthält, und Sie können ein Makro großschreiben, dessen Name normalerweise mit einem Kleinbuchstaben beginnt.
- Parameter werden durch Kommas getrennt.
- Wenn es keine Parameter gibt, können Sie die Klammern vollständig weglassen. Beispielsweise sind die Makros `\{{APIRef()}}` und `\{{APIRef}}` identisch.
- Numerische Parameter können mit oder ohne Anführungszeichen geschrieben werden. Versionsnummern mit mehreren Dezimalstellen müssen jedoch in Anführungszeichen gesetzt werden.

Makros können so einfach sein wie das Einfügen eines größeren Textblocks oder das Austauschen von Inhalten aus einem anderen Teil von MDN oder so komplex wie das Erstellen eines gesamten Inhaltsverzeichnisses durch Durchsuchen von Teilen der Website, Gestalten der Ausgabe und Hinzufügen von Links.

## Siehe auch

- [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) (selten verwendete oder veraltete Makros)
