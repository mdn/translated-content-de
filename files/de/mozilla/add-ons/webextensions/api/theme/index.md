---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
l10n:
  sourceCommit: bb1cd85823386888b85d7286376ed497d427995d
---

{{AddonSidebar}}

Ermöglicht Browsererweiterungen, Details zum Browser-Theme zu erhalten und das Theme zu aktualisieren.

Sie können diese API verwenden, um ein Theme in Ihre Erweiterung aufzunehmen, das Sie als {{WebExtAPIRef("theme.Theme")}} definieren und mit {{WebExtAPIRef("theme.update()")}} anwenden. Sie können kein statisches Theme in Ihre Erweiterung aufnehmen, das mit dem Manifest-Schlüssel ["theme"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) definiert ist. Der Manifest-Schlüssel "theme" wird nur zur Definition statischer Themes verwendet. Weitere Informationen finden Sie unter [Themes](https://extensionworkshop.com/documentation/themes/) im Extension Workshop.

## Typen

- {{WebExtAPIRef("theme.Theme")}}
  - : Repräsentiert den Inhalt eines Themes.

## Funktionen

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : Ruft das aktuelle Browser-Theme ab.
- {{WebExtAPIRef("theme.update()")}}
  - : Aktualisiert das Browser-Theme.
- {{WebExtAPIRef("theme.reset()")}}
  - : Entfernt alle Theme-Aktualisierungen, die in einem Aufruf von {{WebExtAPIRef("theme.update()")}} vorgenommen wurden.

## Ereignisse

- {{WebExtAPIRef("theme.onUpdated")}}
  - : Wird ausgelöst, wenn sich das Browser-Theme ändert.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
