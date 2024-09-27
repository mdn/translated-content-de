---
title: Aktualisierung von Erweiterungen für Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen aktualisieren möchten, damit sie ordnungsgemäß unter Firefox 2 funktionieren.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt – und für die meisten Erweiterungen der einzige erforderliche – besteht darin, die [Installationsmanifestdatei](/en-US/Install_Manifests), install.rdf, zu aktualisieren, um die Kompatibilität mit Firefox 2 anzuzeigen.

Finden Sie die Zeile, die die maximal kompatible Version von Firefox angibt (für Firefox 1.5 könnte sie so aussehen):

```bash
 <em:maxVersion>1.5.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 2 anzugeben:

```bash
 <em:maxVersion>2.0.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung erneut.

## Schritt 2: Aktualisieren Sie XUL-Overlays

Firefox 2 enthält Änderungen am Standard-Design. Darüber hinaus wurden einige Benutzeroberflächenelemente geändert oder verschoben, und es ist möglich, dass Ihre Erweiterung davon betroffen ist, abhängig davon, was Ihre XUL-Overlays tun.

Sehen Sie sich den Artikel [Designänderungen in Firefox 2](/en-US/Theme_changes_in_Firefox_2) an, um zu erfahren, welche Änderungen vorgenommen wurden, die die XUL-Overlays Ihrer Erweiterung beeinflussen könnten.

## Schritt 3: Testen

Testen Sie Ihre Erweiterung sorgfältig in Firefox 2, bevor Sie sie der Öffentlichkeit zur Verfügung stellen. Das Letzte, was Sie möchten, ist, dass die neue Version Ihrer Erweiterung für eine Flut von Problemberichten mit der neu veröffentlichten Version von Firefox verantwortlich ist!

## Schritt 4: Veröffentlichen

Aktualisieren Sie den Eintrag Ihrer Erweiterung auf [https://addons.mozilla.org](https://addons.mozilla.org). Dies stellt sicher, dass die Benutzer sie finden können.

Darüber hinaus, wenn Ihre Erweiterung eine [`updateURL`](/en-US/Install_Manifests#updateurl) im Installationsmanifest angibt, stellen Sie sicher, dass Sie das Aktualisierungsmanifest aktualisieren, damit die neue Version Ihrer Erweiterung automatisch von Firefox gefunden werden kann. Auf diese Weise kann Firefox beim ersten Start der Erweiterung nach einem Upgrade auf Firefox 2 dem Benutzer anbieten, diese automatisch zu installieren.
