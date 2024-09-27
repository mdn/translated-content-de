---
title: tabs.PageSettings
slug: Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

Der Typ **`tabs.PageSettings`** wird verwendet, um zu steuern, wie ein Tab als PDF gerendert wird, mithilfe der Methode {{WebExtAPIRef("tabs.saveAsPDF()")}}.

Alle seine Eigenschaften sind optional.

Zum Einstellen von Kopf- und Fußzeilen können Sie bestimmte Sonderzeichen in die von Ihnen bereitgestellten Zeichenfolgen einfügen. Diese werden im gerenderten Ergebnis wie folgt ersetzt:

- "\&P": die Seitenzahl, z.B. "2"
- "\&PT": die Seitenzahl und die Gesamtzahl der Seiten, z.B. "2 von 3"
- "\&D": das aktuelle Datum/Uhrzeit
- "\&T": der Seitentitel
- "\&U": die Seiten-URL

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `edgeBottom` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem unteren Ende der Fußzeilen und dem unteren Rand des Papiers (Zoll). Standard: 0.
- `edgeLeft` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem linken Kopf-/Fußzeilenbereich und dem linken Rand des Papiers (Zoll). Standard: 0.
- `edgeRight` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem rechten Kopf-/Fußzeilenbereich und dem linken Rand des Papiers (Zoll). Standard: 0.
- `edgeTop` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem oberen Ende der Kopfzeilen und dem oberen Rand des Papiers (Zoll). Standard: 0.
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
  - : `number`. Der Abstand zwischen dem Seiteninhalt und dem unteren Rand des Papiers (Zoll). Standard: 0.5.
- `marginLeft` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem Seiteninhalt und dem linken Rand des Papiers (Zoll). Standard: 0.5.
- `marginRight` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem Seiteninhalt und dem rechten Rand des Papiers (Zoll). Standard: 0.5.
- `marginTop` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem Seiteninhalt und dem oberen Rand des Papiers (Zoll). Standard: 0.5.
- `orientation` {{optional_inline}}
  - : `integer`. Seitenorientierung: 0 bedeutet "Hochformat", 1 bedeutet "Querformat". Standard: 0.
- `paperHeight` {{optional_inline}}
  - : `number`. Die Papierhöhe in Maßeinheiten des Papierformats. Standard: 11.0.
- `paperSizeUnit` {{optional_inline}}
  - : `integer`. Die Maßeinheit des Papierformats: 0 = Zoll, 1 = Millimeter. Standard: 0.
- `paperWidth` {{optional_inline}}
  - : `number`. Die Papierbreite in Maßeinheiten des Papierformats. Standard: 8.5.
- `scaling` {{optional_inline}}
  - : `number`. Skalierungsfaktor für den Seiteninhalt. 1 bedeutet 100% oder Normalegröße. Standard: 1.
- `showBackgroundColors` {{optional_inline}}
  - : `boolean`. Ob die Hintergrundfarben der Seite angezeigt werden sollen. Standard: false.
- `showBackgroundImages` {{optional_inline}}
  - : `boolean`. Ob die Hintergrundbilder der Seite angezeigt werden sollen. Standard: false.
- `shrinkToFit` {{optional_inline}}
  - : `boolean`. Ob der Seiteninhalt auf die Breite der Seite verkleinert werden soll (überschreibt die Skalierung). Standard: true.
- `toFileName` {{optional_inline}}
  - : `string`. Der Name der Datei, in die das PDF gespeichert wird, mit oder ohne die Endung `.pdf`.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
