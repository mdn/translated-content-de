---
title: tabs.PageSettings
slug: Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

Der Typ **`tabs.PageSettings`** wird verwendet, um zu steuern, wie ein Tab von der Methode {{WebExtAPIRef("tabs.saveAsPDF()")}} als PDF gerendert wird.

Alle seine Eigenschaften sind optional.

Für die Einstellung von Kopf- und Fußzeilen können Sie bestimmte Sonderzeichen in den von Ihnen angegebenen Strings verwenden. Diese werden im gerenderten Output wie folgt ersetzt:

- "\&P": die Seitennummer, z.B. "2"
- "\&PT": die Seitennummer und die Gesamtanzahl der Seiten, z.B. "2 von 3"
- "\&D": das aktuelle Datum/Uhrzeit
- "\&T": der Seitentitel
- "\&U": die Seiten-URL

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `edgeBottom` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem unteren Rand der Fußzeilen und dem unteren Rand des Papiers (in Zoll). Standard: 0.
- `edgeLeft` {{optional_inline}}
  - : `number`. Der Abstand zwischen der linken Kopf-/Fußzeile und dem linken Rand des Papiers (in Zoll). Standard: 0.
- `edgeRight` {{optional_inline}}
  - : `number`. Der Abstand zwischen der rechten Kopf-/Fußzeile und dem rechten Rand des Papiers (in Zoll). Standard: 0.
- `edgeTop` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem oberen Rand der Kopfzeilen und dem oberen Rand des Papiers (in Zoll). Standard: 0.
- `footerCenter` {{optional_inline}}
  - : `string`. Der Text für die mittlere Fußzeile der Seite. Standard: ''.
- `footerLeft` {{optional_inline}}
  - : `string`. Der Text für die linke Fußzeile der Seite. Standard: '\&PT'.
- `footerRight` {{optional_inline}}
  - : `string`. Der Text für die rechte Fußzeile der Seite. Standard: '\&D'.
- `headerCenter` {{optional_inline}}
  - : `string`. Der Text für die mittlere Kopfzeile der Seite. Standard: ''.
- `headerLeft` {{optional_inline}}
  - : `string`. Der Text für die linke Kopfzeile der Seite. Standard: '\&T'.
- `headerRight` {{optional_inline}}
  - : `string`. Der Text für die rechte Kopfzeile der Seite. Standard: '\&U'.
- `marginBottom` {{optional_inline}}
  - : `number`. Der Rand zwischen dem Seiteninhalt und dem unteren Rand des Papiers (in Zoll). Standard: 0.5.
- `marginLeft` {{optional_inline}}
  - : `number`. Der Rand zwischen dem Seiteninhalt und dem linken Rand des Papiers (in Zoll). Standard: 0.5.
- `marginRight` {{optional_inline}}
  - : `number`. Der Rand zwischen dem Seiteninhalt und dem rechten Rand des Papiers (in Zoll). Standard: 0.5.
- `marginTop` {{optional_inline}}
  - : `number`. Der Rand zwischen dem Seiteninhalt und dem oberen Rand des Papiers (in Zoll). Standard: 0.5.
- `orientation` {{optional_inline}}
  - : `integer`. Seitenausrichtung: 0 bedeutet "Hochformat", 1 bedeutet "Querformat". Standard: 0.
- `paperHeight` {{optional_inline}}
  - : `number`. Die Papierhöhe in Papiereinheiten. Standard: 11.0.
- `paperSizeUnit` {{optional_inline}}
  - : `integer`. Die Papiereinheit: 0 = Zoll, 1 = Millimeter. Standard: 0.
- `paperWidth` {{optional_inline}}
  - : `number`. Die Papierbreite in Papiereinheiten. Standard: 8.5.
- `scaling` {{optional_inline}}
  - : `number`. Der Skalierungsfaktor des Seiteninhalts. 1 bedeutet 100 % oder normale Größe. Standard: 1.
- `showBackgroundColors` {{optional_inline}}
  - : `boolean`. Ob die Hintergrundfarben der Seite angezeigt werden sollen. Standard: false.
- `showBackgroundImages` {{optional_inline}}
  - : `boolean`. Ob die Hintergrundbilder der Seite angezeigt werden sollen. Standard: false.
- `shrinkToFit` {{optional_inline}}
  - : `boolean`. Ob der Seiteninhalt dem Seitenrand angepasst werden soll (überschreibt die Skalierung). Standard: true.
- `toFileName` {{optional_inline}}
  - : `string`. Der Name der Datei, in der das PDF gespeichert wird, mit oder ohne die `.pdf`-Erweiterung.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
