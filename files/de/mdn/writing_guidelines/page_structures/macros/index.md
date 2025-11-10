---
title: Verwendung von Makros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: cb7e7fde9b942001d6acef7d9868fbf622d71636
---

Das [rari](https://github.com/mdn/rari) Backend ist das Build-System von MDN und bietet eine Makro-Syntax für gängige Aufgaben.

## Verwendung eines Makros im Inhalt

Um ein Makro zu verwenden, umgeben Sie den Namen des Makros mit einem Paar von Doppelklammern (`{{ }}`), zusammen mit seinen Parametern, falls vorhanden:

```plain
\{{macroname(parameter-list)}}
```

Einige Anmerkungen zu Makroaufrufen:

- Makronamen sind case-sensitive, aber es wird versucht, gängige Groß- und Kleinschreibfehler zu korrigieren; Sie können den gesamten Namen in Kleinbuchstaben verwenden, auch wenn der Makroname Großbuchstaben enthält, und Sie können ein Makro großschreiben, dessen Name normalerweise mit einem Kleinbuchstaben beginnt.
- Parameter sind durch Kommas getrennt.
- Wenn es keine Parameter gibt, können Sie die Klammern komplett weglassen; `\{{macroname()}}` und `\{{macroname}}` sind identisch.
- Numerische Parameter können in Anführungszeichen stehen oder nicht. Es liegt bei Ihnen (wenn Sie jedoch eine Versionsnummer mit mehreren Dezimalstellen haben, muss diese in Anführungszeichen stehen).

Makros können so einfach sein wie das Einfügen eines größeren Textblocks oder das Austauschen von Inhalten aus einem anderen Teil von MDN oder so komplex wie der Aufbau eines gesamten Inhaltsverzeichnisses durch das Durchsuchen von Teilen der Website, das Stylen der Ausgabe und das Hinzufügen von Links.

Sie können sich über unsere am häufigsten verwendeten Makros auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) informieren.
Weniger häufige Makros werden in der [Andere Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) Dokumentation beschrieben.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
