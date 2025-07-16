---
title: tabs.PageSettings
slug: Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der Typ **`tabs.PageSettings`** wird verwendet, um zu steuern, wie ein Tab als PDF durch die Methode {{WebExtAPIRef("tabs.saveAsPDF()")}} gerendert wird.

Alle seine Eigenschaften sind optional.

Zum Festlegen von Kopf- und Fußzeilen können Sie bestimmte Sonderzeichen in den von Ihnen bereitgestellten Zeichenketten verwenden. Diese werden in der gerenderten Ausgabe wie folgt ersetzt:

- "\&P": die Seitenzahl, z. B. "2"
- "\&PT": die Seitenzahl und die Gesamtanzahl der Seiten, z. B. "2 von 3"
- "\&D": das aktuelle Datum/Uhrzeit
- "\&T": der Seitentitel
- "\&U": die Seiten-URL

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `edgeBottom` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem unteren Rand der Fußzeile und der unteren Papierrand (Zoll). Standard: 0.
- `edgeLeft` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem linken Kopf-/Fußzeilenrand und dem linken Papierrand (Zoll). Standard: 0.
- `edgeRight` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem rechten Kopf-/Fußzeilenrand und dem linken Papierrand (Zoll). Standard: 0.
- `edgeTop` {{optional_inline}}
  - : `number`. Der Abstand zwischen dem oberen Rand der Kopfzeile und dem oberen Papierrand (Zoll). Standard: 0.
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
  - : `number`. Der Rand zwischen dem Seiteninhalt und dem unteren Papierrand (Zoll). Standard: 0.5.
- `marginLeft` {{optional_inline}}
  - : `number`. Der Rand zwischen dem Seiteninhalt und dem linken Papierrand (Zoll). Standard: 0.5.
- `marginRight` {{optional_inline}}
  - : `number`. Der Rand zwischen dem Seiteninhalt und dem rechten Papierrand (Zoll). Standard: 0.5.
- `marginTop` {{optional_inline}}
  - : `number`. Der Rand zwischen dem Seiteninhalt und dem oberen Papierrand (Zoll). Standard: 0.5.
- `orientation` {{optional_inline}}
  - : `integer`. Seitenorientierung: 0 bedeutet "Hochformat", 1 bedeutet "Querformat". Standard: 0.
- `paperHeight` {{optional_inline}}
  - : `number`. Die Papierhöhe in Papierteinheiten. Standard: 11.0.
- `paperSizeUnit` {{optional_inline}}
  - : `integer`. Die Papiereinheit: 0 = Zoll, 1 = Millimeter. Standard: 0.
- `paperWidth` {{optional_inline}}
  - : `number`. Die Papierbreite in Papierteinheiten. Standard: 8.5.
- `scaling` {{optional_inline}}
  - : `number`. Skalierungsfaktor des Seiteninhalts. 1 bedeutet 100 % oder normale Größe. Standard: 1.
- `showBackgroundColors` {{optional_inline}}
  - : `boolean`. Ob die Hintergrundfarben der Seite angezeigt werden sollen. Standard: false.
- `showBackgroundImages` {{optional_inline}}
  - : `boolean`. Ob die Hintergrundbilder der Seite angezeigt werden sollen. Standard: false.
- `shrinkToFit` {{optional_inline}}
  - : `boolean`. Ob der Seiteninhalt verkleinert werden soll, um zur Seitenbreite zu passen (überschreibt die Skalierung). Standard: true.
- `toFileName` {{optional_inline}}
  - : `string`. Der Name der Datei, in der das PDF gespeichert wird, mit oder ohne die Erweiterung `.pdf`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
