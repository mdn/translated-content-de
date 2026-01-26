---
title: menus.ItemType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ItemType
l10n:
  sourceCommit: 7c5cdb65b3f9b9cfe05e34a602eaf08d61195b3e
---

Der Typ des Menüelements.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `normal`
  - : Ein Menüelement, das lediglich ein Label anzeigt.
- `checkbox`
  - : Ein Menüelement, das einen binären Zustand darstellt. Es zeigt ein Häkchen neben dem Label an. Ein Klick auf das Element schaltet das Häkchen um. Der {{WebExtAPIRef("menus.onClicked")}}-Listener wird zwei zusätzliche Eigenschaften übergeben: "checked", das angibt, ob das Element jetzt aktiviert ist, und "wasChecked", das angibt, ob das Element vor dem Klickereignis aktiviert war.
- `radio`
  - : Ein Menüelement, das eine von mehreren Auswahlmöglichkeiten darstellt. Ähnlich wie bei einer Checkbox wird ein Häkchen neben dem Label angezeigt, und sein {{WebExtAPIRef("menus.onClicked")}}-Listener erhält "checked" und "wasChecked". Wenn Sie jedoch mehr als ein Radio-Element erstellen, funktionieren die Elemente als Gruppe von Radio-Elementen: Nur ein Element in der Gruppe kann aktiviert sein, und durch Anklicken eines Elements wird es zum aktivierten Element.
- `separator`
  - : Eine Linie, die eine Gruppe von Elementen trennt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.contextMenus`](https://developer.chrome.com/docs/extensions/reference/api/contextMenus#type-ItemType). Diese Dokumentation stammt aus [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen das obige Urheberrecht
// und diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen das obige
// Urheberrecht, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien enthalten, die mit der
// Distribution bereitgestellt werden.
//    * Weder der Name Google Inc. noch die Namen der
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser Software abgeleitet
// wurden, zu unterstützen oder zu bewerben, ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN
// GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND
// AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER MITWIRKENDEN
// HAFTBAR FÜR JEGLICHE DIREKTE, INDIREKTE, BEILÄUFIGE,
// SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATENVERLUST ODER ENTGANGENEN GEWINNS; ODER
// GESCHÄFTSUNTERBRECHUNG), WIE AUCH IMMER VERURSACHT UND AUF WELCHER
// THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), AUS EINEM NGEO AB FÜR DIE NUTZUNG
// DIESER SOFTWARE ENTSTANDEN SIND, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDE.
-->
