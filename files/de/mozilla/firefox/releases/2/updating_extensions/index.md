---
title: Aktualisieren von Erweiterungen für Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen aktualisieren möchten, um sie ordnungsgemäß unter Firefox 2 zum Laufen zu bringen.

## Schritt 1: Installationsmanifest aktualisieren

Der erste Schritt — und für die meisten Erweiterungen der einzige erforderliche — ist die Aktualisierung der Datei [Installationsmanifest](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests), install.rdf, um die Kompatibilität mit Firefox 2 anzuzeigen.

Suchen Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 1.5 beispielsweise so aussehen könnte):

```xml
<em:maxVersion>1.5.0.*</em:maxVersion>
```

Ändern Sie diese Zeile, um die Kompatibilität mit Firefox 2 anzuzeigen:

```xml
<em:maxVersion>2.0.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung erneut.

## Schritt 2: XUL-Overlays aktualisieren

Firefox 2 beinhaltet Änderungen am Standard-Design. Außerdem wurden einige Benutzeroberflächenelemente geändert oder verschoben, und es ist möglich, dass Ihre Erweiterung davon betroffen ist, abhängig davon, was Ihre XUL-Overlays tun.

Sehen Sie sich den Artikel [Designänderungen in Firefox 2](https://web.archive.org/web/20191005020825/https://developer.mozilla.org/en-US/Add-ons/Themes/Obsolete/Theme_changes_in_Firefox_2) an, um zu erfahren, welche Änderungen vorgenommen wurden, die möglicherweise die XUL-Overlays Ihrer Erweiterung beeinflussen.

## Schritt 3: Testen

Stellen Sie sicher, dass Sie Ihre Erweiterung sorgfältig unter Firefox 2 testen, bevor Sie sie der Öffentlichkeit zugänglich machen. Das Letzte, was Sie möchten, ist, dass die neue Version Ihrer Erweiterung für eine Vielzahl von Problemmeldungen mit der gerade veröffentlichten Version von Firefox verantwortlich ist!

## Schritt 4: Veröffentlichen

Aktualisieren Sie den Eintrag Ihrer Erweiterung auf [https://addons.mozilla.org](https://addons.mozilla.org/). Dies stellt sicher, dass Benutzer sie finden können.

Zusätzlich, falls Ihre Erweiterung eine [`updateURL`](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/de/docs/Archive/Add-ons/Install_Manifests#updateurl) im Installationsmanifest angibt, stellen Sie sicher, dass das Update-Manifest aktualisiert wird, damit die neue Version Ihrer Erweiterung automatisch von Firefox gefunden werden kann. So kann Firefox beim ersten Ausführen Ihrer Erweiterung nach dem Upgrade auf Firefox 2 anbieten, diese automatisch zu installieren.
