---
title: Aktualisieren von Themes für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_themes
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel soll Theme-Autoren helfen, Firefox-3.5-kompatible Themes für die Kompatibilität mit Firefox 3.6 zu aktualisieren.

## Änderung bei der Chrome-Registrierung

[`contents.rdf` wird nicht mehr unterstützt](https://www.oxymoronical.com/blog/2009/06/Farewell-contentsrdf/), Sie müssen stattdessen `chrome.manifest` verwenden.

## Styling von leeren Texten

XUL-Textfelder haben nicht mehr das Attribut `empty`, sondern stattdessen `isempty`. Anstelle von `textbox[empty="true"]` müssen Sie `textbox[isempty="true"]` verwenden.

## Unterstützung für Rechts-nach-Links-Benutzeroberflächen

Die Selektoren `[chromedir="rtl"]` und `[chromedir="ltr"]` sind veraltet und funktionieren bei den meisten Elementen nicht mehr. Stattdessen müssen Sie die neuen Selektoren {{ cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)") }} und {{ cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)") }} verwenden. Siehe auch: [Sicherstellen, dass Ihr Theme mit RTL-Sprachversionen funktioniert](/de/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales).

## Plattformübergreifendes Styling des Tabbed Browsers

Die Tabbed-Browser-Implementierung hat keinen Mac-spezifischen `tabs-closebutton-box` mehr; stattdessen verwenden alle Plattformen die gleichen Namen zur Identifizierung der Komponenten des Tab-Streifens.

## Vollbild-Symbolleisten-Schaltfläche

Es gibt eine neue [Vollbild-Symbolleisten-Schaltfläche](https://bugzil.la/206544), die im Dialog "Symbolleiste anpassen" verfügbar ist.

## Siehe auch

- [MozillaZine Forum: Änderungen bei Mozilla 1.9.2 / Firefox 3.6 Themen](https://forums.mozillazine.org/viewtopic.php?f=18&t=975065)
- [Themes](/de/docs/Themes)
- [Erstellen eines Themes](/de/docs/Building_a_Theme)
