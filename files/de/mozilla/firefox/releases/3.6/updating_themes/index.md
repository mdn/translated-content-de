---
title: Aktualisieren von Themes für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_themes
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{FirefoxSidebar}}

Dieser Artikel soll Theme-Autoren dabei helfen, Themes, die mit Firefox 3.5 kompatibel sind, für die Kompatibilität mit Firefox 3.6 zu aktualisieren.

## Änderung bei der Chrome-Registrierung

[`contents.rdf` wird nicht mehr unterstützt](https://www.oxymoronical.com/blog/2009/06/Farewell-contentsrdf/), Sie müssen stattdessen `chrome.manifest` verwenden.

## Styling von Emptytext

XUL-Textfelder haben nicht mehr das Attribut `empty`, sondern stattdessen `isempty`. Anstelle von `textbox[empty="true"]` müssen Sie `textbox[isempty="true"]` verwenden.

## Unterstützung für die Benutzeroberfläche mit Rechts-nach-Links-Ausrichtung

Die Selektoren `[chromedir="rtl"]` und `[chromedir="ltr"]` sind veraltet und funktionieren bei den meisten Elementen nicht mehr. Stattdessen müssen Sie die neuen Selektoren {{ cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)") }} und {{ cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)") }} verwenden. Siehe auch: [Sicherstellen, dass Ihr Theme mit RTL-Sprachversionen funktioniert](/de/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales).

## Plattformübergreifendes Styling des Tab-Browsers

Die Implementierung des Tab-Browsers hat kein Mac-spezifisches `tabs-closebutton-box` mehr; stattdessen verwenden alle Plattformen dieselben Bezeichnungen, um die Komponenten des Tab-Streifens zu identifizieren.

## Vollbild-Symbolleisten-Button

Es gibt einen neuen [Vollbild-Symbolleisten-Button](https://bugzil.la/206544), der im Dialogfeld "Symbolleiste anpassen" verfügbar ist.

## Siehe auch

- [MozillaZine Forum: Mozilla 1.9.2 / Firefox 3.6 Theme-Änderungen](https://forums.mozillazine.org/viewtopic.php?f=18&t=975065)
- [Themes](/de/docs/Themes)
- [Aufbau eines Themes](/de/docs/Building_a_Theme)
