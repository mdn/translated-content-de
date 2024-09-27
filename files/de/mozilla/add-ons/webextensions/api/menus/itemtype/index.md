---
title: menus.ItemType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ItemType
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ des Menüelements.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- normal
  - : Ein Menüelement, das nur ein Label anzeigt.
- checkbox
  - : Ein Menüelement, das einen binären Zustand darstellt. Es zeigt ein Häkchen neben dem Label an. Ein Klick auf das Element schaltet das Häkchen um. Der {{WebExtAPIRef("menus.onClicked")}} Listener erhält zwei zusätzliche Eigenschaften: "checked", die angibt, ob das Element jetzt markiert ist, und "wasChecked", die angibt, ob das Element vor dem Klickevent markiert war.
- radio
  - : Ein Menüelement, das eine von mehreren Optionen darstellt. Genau wie bei einem Kontrollkästchen wird auch hier ein Häkchen neben dem Label angezeigt, und sein {{WebExtAPIRef("menus.onClicked")}} Listener erhält "checked" und "wasChecked". Wenn jedoch mehr als ein Radio-Element erstellt wird, funktionieren die Elemente als Gruppe von Radio-Elementen: Nur ein Element in der Gruppe kann ausgewählt werden, und ein Klick auf ein Element macht es zum ausgewählten Element.
- separator
  - : Eine Linie, die eine Gruppe von Elementen trennt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ItemType) API. Diese Dokumentation leitet sich von [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code ab.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverteilung und Verwendung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverteilungen des Quellcodes müssen das obige Urheberrecht
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Weiterverteilungen in binärer Form müssen das obige Urheberrecht
// Hinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus
// dieser Software resultieren, ohne spezifische vorherige schriftliche
// Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTREIFE UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK WERDEN ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// RECHTSINHABER ODER MITWIRKENDEN FÜR JEGLICHE DIRECTEN, INDIREKTEN,
// ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZGÜTERN ODER
// DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN- ODER GEWINNVERLUST; ODER
// BETRIEBSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNTER JEGLICHER
// HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER
// HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDEREN HANDLUNGEN),
// DIE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN ÜBER DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT WURDE.
-->
