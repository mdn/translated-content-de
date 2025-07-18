---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermöglicht Browser-Erweiterungen, Details des Browser-Themas abzurufen und das Thema zu aktualisieren.

Sie können diese API verwenden, um ein Thema in Ihre Erweiterung einzuschließen, das Sie als {{WebExtAPIRef("theme.Theme")}} definieren und mit {{WebExtAPIRef("theme.update()")}} anwenden. Sie können kein statisches Thema in Ihre Erweiterung einbinden, das mit dem Manifest-Schlüssel ["theme"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) definiert ist. Der Manifest-Schlüssel "theme" wird ausschließlich zur Definition statischer Themen verwendet. Weitere Informationen finden Sie unter [Themes](https://extensionworkshop.com/documentation/themes/) im Extension Workshop.

## Typen

- {{WebExtAPIRef("theme.Theme")}}
  - : Repräsentiert den Inhalt eines Themas.

## Funktionen

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : Ruft das aktuelle Browser-Thema ab.
- {{WebExtAPIRef("theme.update()")}}
  - : Aktualisiert das Browser-Thema.
- {{WebExtAPIRef("theme.reset()")}}
  - : Entfernt alle Themenaktualisierungen, die durch einen Aufruf von {{WebExtAPIRef("theme.update()")}} vorgenommen wurden.

## Ereignisse

- {{WebExtAPIRef("theme.onUpdated")}}
  - : Wird ausgelöst, wenn sich das Browser-Thema ändert.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
