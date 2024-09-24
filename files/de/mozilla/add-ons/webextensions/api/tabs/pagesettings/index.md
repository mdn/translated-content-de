---
title: tabs.PageSettings
slug: Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

Der Typ **`tabs.PageSettings`** wird verwendet, um zu steuern, wie ein Tab als PDF vom {{WebExtAPIRef("tabs.saveAsPDF()")}}-Methode gerendert wird.

Alle seine Eigenschaften sind optional.

Um Kopf- und Fußzeilen festzulegen, können Sie bestimmte Sonderzeichen in die von Ihnen bereitgestellten Zeichenfolgen aufnehmen. Diese werden im gerenderten Ausgang wie folgt ersetzt:

- "\&P": die Seitennummer, z. B. "2"
- "\&PT": die Seitennummer und die Gesamtanzahl der Seiten, z. B. "2 von 3"
- "\&D": das aktuelle Datum/Uhrzeit
- "\&T": der Seitentitel
- "\&U": die Seiten-URL

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `edgeBottom` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem unteren Rand der Fußzeilen und des Papierbodens (in Zoll). Standard: 0.
- `edgeLeft` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem linken Kopf-/Fußzeilen und dem linken Rand des Papiers (in Zoll). Standard: 0.
- `edgeRight` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem rechten Kopf-/Fußzeilen und dem linken Rand des Papiers (in Zoll). Standard: 0.
- `edgeTop` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem oberen Rand der Kopfzeilen und des Papiers (in Zoll). Standard: 0.
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
  - : `number`. Der Abstand zwischen dem Seiteninhalt und dem unteren Rand des Papiers (in Zoll). Standard: 0,5.
- `marginLeft` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem Seiteninhalt und dem linken Rand des Papiers (in Zoll). Standard: 0,5.
- `marginRight` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem Seiteninhalt und dem rechten Rand des Papiers (in Zoll). Standard: 0,5.
- `marginTop` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem Seiteninhalt und dem oberen Rand des Papiers (in Zoll). Standard: 0,5.
- `orientation` {{optional_inline}}
  - : `integer`. Seitenorientierung: 0 bedeutet "Hochformat", 1 bedeutet "Querformat". Standard: 0.
- `paperHeight` {{optional_inline}}
  - : `number`. Die Papierhöhe in Papiereinheiten. Standard: 11,0.
- `paperSizeUnit` {{optional_inline}}
  - : `integer`. Die Einheit der Papiergröße: 0 = Zoll, 1 = Millimeter. Standard: 0.
- `paperWidth` {{optional_inline}}
  - : `number`. Die Papierbreite in Papiereinheiten. Standard: 8,5.
- `scaling` {{optional_inline}}
  - : `number`. Der Skalierungsfaktor für den Seiteninhalt. 1 bedeutet 100% oder normale Größe. Standard: 1.
- `showBackgroundColors` {{optional_inline}}
  - : `boolean`. Ob die Seitenhintergrundfarben angezeigt werden sollen. Standard: false.
- `showBackgroundImages` {{optional_inline}}
  - : `boolean`. Ob die Seitenhintergrundbilder angezeigt werden sollen. Standard: false.
- `shrinkToFit` {{optional_inline}}
  - : `boolean`. Ob der Seiteninhalt verkleinert werden soll, um auf die Seitenbreite zu passen (überschreibt die Skalierung). Standard: true.
- `toFileName` {{optional_inline}}
  - : `string`. Der Name der Datei, in der das PDF gespeichert wird, mit oder ohne die Endung `.pdf`.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
