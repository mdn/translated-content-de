---
title: Aktualisierung von Erweiterungen für Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel liefert Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen so aktualisieren möchten, dass sie ordnungsgemäß unter Firefox 2 funktionieren.

## Schritt 1: Installationsmanifest aktualisieren

Der erste Schritt — und für die meisten Erweiterungen der einzige benötigte — besteht darin, die Datei [Installationsmanifest](/en-US/Install_Manifests), install.rdf, zu aktualisieren, um die Kompatibilität mit Firefox 2 anzuzeigen.

Finden Sie die Zeile, die die maximal kompatible Version von Firefox angibt (für Firefox 1.5 könnte sie so aussehen):

```bash
 <em:maxVersion>1.5.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 2 anzuzeigen:

```bash
 <em:maxVersion>2.0.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung neu.

## Schritt 2: XUL-Overlays aktualisieren

Firefox 2 enthält Änderungen am Standard-Theme. Darüber hinaus wurden einige Benutzeroberflächenelemente verändert oder verschoben, und es ist möglich, dass Ihre Erweiterung davon betroffen ist, abhängig davon, was Ihre XUL-Overlays tun.

Lesen Sie den Artikel [Theme-Änderungen in Firefox 2](/en-US/Theme_changes_in_Firefox_2), um zu erfahren, welche Änderungen vorgenommen wurden, die die XUL-Overlays Ihrer Erweiterung beeinflussen könnten.

## Schritt 3: Testen

Stellen Sie sicher, dass Sie Ihre Erweiterung sorgfältig unter Firefox 2 testen, bevor Sie sie der Öffentlichkeit zur Verfügung stellen. Das Letzte, was Sie wollen, ist, dass die neue Version Ihrer Erweiterung für eine Flut von Problemmeldungen mit der gerade veröffentlichten Version von Firefox verantwortlich ist!

## Schritt 4: Veröffentlichen

Aktualisieren Sie den Eintrag Ihrer Erweiterung auf [https://addons.mozilla.org](https://addons.mozilla.org/). Dies stellt sicher, dass Benutzer sie finden können.

Zusätzlich, wenn Ihre Erweiterung eine [`updateURL`](/en-US/Install_Manifests#updateurl) im Installationsmanifest bereitstellt, stellen Sie sicher, dass Sie das Update-Manifest aktualisieren, damit die neue Version Ihrer Erweiterung automatisch von Firefox gefunden werden kann. Auf diese Weise kann Firefox dem Benutzer beim ersten Ausführen Ihrer Erweiterung nach dem Upgrade auf Firefox 2 anbieten, sie automatisch zu installieren.
