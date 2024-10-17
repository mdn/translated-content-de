---
title: Aktualisierung von Themes für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_themes
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Dieser Artikel soll Theme-Entwicklern helfen, Themes, die mit Firefox 3.5 kompatibel sind, für die Kompatibilität mit Firefox 3.6 zu aktualisieren.

## Änderung der Chrome-Registrierung

[`contents.rdf` wird nicht mehr unterstützt](https://www.oxymoronical.com/blog/2009/06/Farewell-contentsrdf/), stattdessen müssen Sie `chrome.manifest` verwenden.

## Gestaltung leerer Texte

XUL-Textboxen haben nicht mehr das Attribut `empty`, sondern `isempty`. Daher müssen Sie anstelle von `textbox[empty="true"]` nun `textbox[isempty="true"]` verwenden.

## Unterstützung für Rechts-nach-Links-UI

Die Selektoren `[chromedir="rtl"]` und `[chromedir="ltr"]` sind veraltet und funktionieren auf den meisten Elementen nicht mehr. Stattdessen müssen Sie die neuen Selektoren {{ cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)") }} und {{ cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)") }} verwenden. Siehe auch: [Sicherstellen, dass Ihr Theme mit RTL-Sprachen funktioniert](/de/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales).

## Plattformübergreifende Gestaltung von Tabbed-Browsern

Die Tabbed-Browser-Implementierung verfügt nicht mehr über ein Mac-spezifisches `tabs-closebutton-box`; stattdessen verwenden alle Plattformen dieselben Namen, um die Komponenten des Tab-Streifens zu identifizieren.

## Vollbild-Werkzeugleisten-Schaltfläche

Es gibt eine neue [Vollbild-Werkzeugleisten-Schaltfläche](https://bugzil.la/206544), die im Dialog zur Anpassung der Werkzeugleiste verfügbar ist.

## Siehe auch

- [MozillaZine-Forum: Änderungen bei den Themes in Mozilla 1.9.2 / Firefox 3.6](https://forums.mozillazine.org/viewtopic.php?f=18&t=975065)
- [Themes](/de/docs/Themes)
- [Erstellen eines Themes](/de/docs/Building_a_Theme)
