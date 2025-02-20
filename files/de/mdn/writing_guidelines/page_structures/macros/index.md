---
title: Verwendung von Makros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Das [rari](https://github.com/mdn/rari)-Backend ist das Build-System von MDN und bietet eine Makro-Syntax für häufige Aufgaben.

## Verwendung eines Makros in Inhalten

Um ein Makro zu verwenden, umschließen Sie den Namen des Makros in einem Paar von Doppelklammern (`{{ }}`) zusammen mit seinen Parametern, falls vorhanden:

```plain
\{{macroname(parameter-list)}}
```

Einige Hinweise zu Makro-Aufrufen:

- Makro-Namen sind groß-/kleinbuchstabenempfindlich (case-sensitive), jedoch wird versucht, häufige Fehler bei der Groß-/Kleinschreibung zu korrigieren. Sie können alle Buchstaben klein schreiben, selbst wenn der Makro-Name Großbuchstaben enthält, und Sie können ein Makro großschreiben, dessen Name normalerweise mit einem Kleinbuchstaben beginnt.
- Parameter werden durch Kommata getrennt.
- Wenn keine Parameter vorhanden sind, können Sie die Klammern vollständig weglassen; `\{{macroname()}}` und `\{{macroname}}` sind identisch.
- Numerische Parameter können mit oder ohne Anführungszeichen geschrieben werden. Dies liegt bei Ihnen (allerdings, wenn Sie eine Versionsnummer mit mehreren Dezimalstellen verwenden, muss diese in Anführungszeichen stehen).

Makros können so einfach sein wie das Einfügen eines größeren Textblocks oder das Austauschen von Inhalten aus einem anderen Teil von MDN, oder so komplex wie das Erstellen eines gesamten Inhaltsverzeichnisses durch die Suche durch Teile der Website, das Gestalten der Ausgabe und das Hinzufügen von Links.

Sie können mehr über unsere am häufigsten verwendeten Makros auf der Seite [Häufig verwendete Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros) lesen.

## Siehe auch

- [Sidebar-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
