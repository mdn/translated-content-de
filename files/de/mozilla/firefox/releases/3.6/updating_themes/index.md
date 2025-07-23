---
title: Aktualisierung von Themes für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_themes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel soll Theme-Autoren dabei helfen, Themes, die mit Firefox 3.5 kompatibel sind, auf die Kompatibilität mit Firefox 3.6 zu aktualisieren.

## Änderung der Chrome-Registrierung

[`contents.rdf` wird nicht mehr unterstützt](https://www.oxymoronical.com/blog/2009/06/Farewell-contentsrdf/), Sie müssen stattdessen `chrome.manifest` verwenden.

## Styling von leeren Textfeldern

XUL-Textfelder haben nicht mehr das Attribut `empty`, sondern stattdessen `isempty`. Anstelle von `textbox[empty="true"]` müssen Sie `textbox[isempty="true"]` verwenden.

## Unterstützung für Rechts-nach-Links-Benutzeroberfläche

Die Selektoren `[chromedir="rtl"]` und `[chromedir="ltr"]` sind veraltet und funktionieren bei den meisten Elementen nicht mehr. Stattdessen müssen Sie die neuen Selektoren {{ cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)") }} und {{ cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)") }} verwenden. Siehe auch: [Sicherstellen, dass Ihr Theme mit RTL-Sprachversionen funktioniert](https://web.archive.org/web/20210509011412/https://developer.mozilla.org/de/docs/Archive/Themes/Making_sure_your_theme_works_with_RTL_locales).

## Plattformübergreifendes Styling für getabbte Browser

Die Implementierung des getabbten Browsers hat kein Mac-spezifisches `tabs-closebutton-box` mehr; stattdessen verwenden alle Plattformen dieselben Bezeichnungen, um die Komponenten des Tabstreifens zu identifizieren.

## Vollbild-Werkzeugleisten-Schaltfläche

Es gibt eine neue [Vollbild-Werkzeugleisten-Schaltfläche](https://bugzil.la/206544), die im Dialogfeld "Symbolleiste anpassen" verfügbar ist.

## Siehe auch

- [MozillaZine Forum: Mozilla 1.9.2 / Firefox 3.6 Theme-Änderungen](https://forums.mozillazine.org/viewtopic.php?f=18&t=975065)
- [Themes](https://web.archive.org/web/20210422190409/https://developer.mozilla.org/de/docs/Mozilla/Add-ons/Themes)
- [Erstellen eines Themes](https://web.archive.org/web/20210506064733/https://developer.mozilla.org/de/docs/Archive/Themes/Building_a_Theme)
