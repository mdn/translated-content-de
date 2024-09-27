---
title: Aktualisierung von Themes für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_themes
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Dieser Artikel soll Theme-Autoren helfen, Firefox-3.5-kompatible Themes für die Kompatibilität mit Firefox 3.6 zu aktualisieren.

## Änderung der Chrome-Registrierung

[`contents.rdf` wird nicht mehr unterstützt](https://www.oxymoronical.com/blog/2009/06/Farewell-contentsrdf/), Sie müssen stattdessen `chrome.manifest` verwenden.

## Styling von leeren Textfeldern

XUL-Textboxen haben nicht mehr das Attribut `empty`, sondern `isempty`. Anstelle von `textbox[empty="true"]` müssen Sie `textbox[isempty="true"]` verwenden.

## Unterstützung für eine rechts-nach-links Benutzeroberfläche

Die Selektoren `[chromedir="rtl"]` und `[chromedir="ltr"]` sind veraltet und funktionieren bei den meisten Elementen nicht mehr. Stattdessen müssen Sie die neuen Selektoren {{ cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)") }} und {{ cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)") }} verwenden. Siehe auch: [Sicherstellen, dass Ihr Theme mit RTL-Sprachen funktioniert](/de/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales).

## Plattformübergreifendes Styling des tabbed browsers

Die Implementierung des tabbed browsers hat keine Mac-spezifische `tabs-closebutton-box` mehr; stattdessen verwenden alle Plattformen dieselben Namen zur Identifizierung der Komponenten der Tab-Leiste.

## Vollbild-Werkzeugleistenknopf

Es gibt einen neuen [Vollbild-Werkzeugleistenknopf](https://bugzil.la/206544), der im Dialog zur Anpassung der Werkzeugleiste verfügbar ist.

## Siehe auch

- [MozillaZine-Forum: Mozilla 1.9.2 / Firefox 3.6 Theme-Änderungen](https://forums.mozillazine.org/viewtopic.php?f=18&t=975065)
- [Themes](/de/docs/Themes)
- [Erstellung eines Themes](/de/docs/Building_a_Theme)
