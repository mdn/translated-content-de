---
title: Themes für Firefox 3.6 aktualisieren
slug: Mozilla/Firefox/Releases/3.6/Updating_themes
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Dieser Artikel soll Theme-Autoren helfen, Firefox-3.5-kompatible Themes auf die Kompatibilität mit Firefox 3.6 zu aktualisieren.

## Änderung der Chrome-Registrierung

[`contents.rdf` wird nicht mehr unterstützt](https://www.oxymoronical.com/blog/2009/06/Farewell-contentsrdf/), Sie müssen stattdessen `chrome.manifest` verwenden.

## Emptytext-Styling

XUL-Textfelder haben nicht mehr das Attribut `empty`, sondern `isempty`. Anstelle von `textbox[empty="true"]` müssen Sie `textbox[isempty="true"]` verwenden.

## Unterstützung für Rechts-nach-Links-Benutzeroberflächen

Die Selektoren `[chromedir="rtl"]` und `[chromedir="ltr"]` sind veraltet und funktionieren bei den meisten Elementen nicht mehr. Stattdessen müssen Sie die neuen Selektoren {{ cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)") }} und {{ cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)") }} verwenden. Siehe auch: [Sicherstellen, dass Ihr Theme mit RTL-Sprachen funktioniert](/de/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales).

## Plattformübergreifendes Styling des Registerkartenbrowsers

Die Implementierung des Registerkartenbrowsers hat keinen Mac-spezifischen `tabs-closebutton-box` mehr; stattdessen verwenden alle Plattformen dieselben Namen, um die Komponenten des Registerkartenstreifens zu identifizieren.

## Schaltfläche für den Vollbildmodus

Es gibt eine neue [Vollbildmodus-Symbolleistenschaltfläche](https://bugzil.la/206544), die im Anpassen-Dialog der Symbolleiste verfügbar ist.

## Siehe auch

- [MozillaZine-Forum: Mozilla 1.9.2 / Firefox 3.6 Theme-Änderungen](https://forums.mozillazine.org/viewtopic.php?f=18&t=975065)
- [Themes](/de/docs/Themes)
- [Ein Theme erstellen](/de/docs/Building_a_Theme)
