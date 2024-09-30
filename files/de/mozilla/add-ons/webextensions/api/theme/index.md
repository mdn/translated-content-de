---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
l10n:
  sourceCommit: bb1cd85823386888b85d7286376ed497d427995d
---

{{AddonSidebar}}

Ermöglicht es Browser-Erweiterungen, Details zum Browser-Design zu erhalten und das Design zu aktualisieren.

Mit dieser API können Sie ein Design in Ihre Erweiterung einbinden, das Sie als {{WebExtAPIRef("theme.Theme")}} definieren und mit {{WebExtAPIRef("theme.update()")}} anwenden. Sie können kein statisches Design in Ihre Erweiterung einbinden, das mit dem ["theme"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifestschlüssel definiert wird. Der "theme"-Manifestschlüssel wird nur zur Definition statischer Designs verwendet. Weitere Informationen finden Sie unter [Designs](https://extensionworkshop.com/documentation/themes/) im Extension Workshop.

## Typen

- {{WebExtAPIRef("theme.Theme")}}
  - : Repräsentiert den Inhalt eines Designs.

## Funktionen

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : Ruft das aktuelle Browser-Design ab.
- {{WebExtAPIRef("theme.update()")}}
  - : Aktualisiert das Design des Browsers.
- {{WebExtAPIRef("theme.reset()")}}
  - : Entfernt alle Designaktualisierungen, die in einem Aufruf von {{WebExtAPIRef("theme.update()")}} vorgenommen wurden.

## Ereignisse

- {{WebExtAPIRef("theme.onUpdated")}}
  - : Wird ausgelöst, wenn sich das Browser-Design ändert.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
