---
title: Thema
slug: Mozilla/Add-ons/WebExtensions/API/theme
l10n:
  sourceCommit: bb1cd85823386888b85d7286376ed497d427995d
---

{{AddonSidebar}}

Ermöglicht Browser-Erweiterungen, Details des Browser-Themas abzurufen und das Thema zu aktualisieren.

Sie können diese API verwenden, um ein Thema in Ihre Erweiterung einzuschließen, das Sie als {{WebExtAPIRef("theme.Theme")}} definieren und mit {{WebExtAPIRef("theme.update()")}} anwenden. Sie können kein statisches Thema in Ihre Erweiterung einfügen, das mit dem ["theme"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssel definiert ist. Der "theme" Manifest-Schlüssel wird nur zur Definition statischer Themen verwendet. Weitere Informationen finden Sie unter [Themen](https://extensionworkshop.com/documentation/themes/) im Extension Workshop.

## Typen

- {{WebExtAPIRef("theme.Theme")}}
  - : Repräsentiert den Inhalt eines Themas.

## Funktionen

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : Ruft das aktuelle Browser-Thema ab.
- {{WebExtAPIRef("theme.update()")}}
  - : Aktualisiert das Thema des Browsers.
- {{WebExtAPIRef("theme.reset()")}}
  - : Entfernt alle Thema-Aktualisierungen, die mit einem Aufruf von {{WebExtAPIRef("theme.update()")}} vorgenommen wurden.

## Ereignisse

- {{WebExtAPIRef("theme.onUpdated")}}
  - : Wird ausgelöst, wenn sich das Browser-Thema ändert.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
