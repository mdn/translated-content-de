---
title: Aktualisieren von Erweiterungen für Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen so aktualisieren möchten, dass sie ordnungsgemäß unter Firefox 2 funktionieren.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt – und für die meisten Erweiterungen der einzige notwendige – ist die Aktualisierung der [Installationsmanifests](/en-US/Install_Manifests)-Datei, `install.rdf`, um die Kompatibilität mit Firefox 2 anzuzeigen.

Suchen Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 1.5 in etwa so aussehen könnte):

```bash
 <em:maxVersion>1.5.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 2 anzuzeigen:

```bash
 <em:maxVersion>2.0.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung neu.

## Schritt 2: Aktualisieren Sie XUL-Overlays

Firefox 2 beinhaltet Änderungen am Standardskin. Darüber hinaus wurden einige Benutzeroberflächenelemente geändert oder verschoben, und es ist möglich, dass Ihre Erweiterung davon betroffen ist, abhängig davon, was Ihre XUL-Overlays tun.

Sehen Sie sich den Artikel [Designänderungen in Firefox 2](/en-US/Theme_changes_in_Firefox_2) an, um zu erfahren, welche Änderungen vorgenommen wurden, die sich auf die XUL-Overlays Ihrer Erweiterung auswirken könnten.

## Schritt 3: Testen

Stellen Sie sicher, dass Sie Ihre Erweiterung sorgfältig in Firefox 2 testen, bevor Sie sie der Öffentlichkeit freigeben. Das Letzte, was Sie möchten, ist, dass die neue Version Ihrer Erweiterung verantwortlich für eine Vielzahl von Problemberichten der gerade veröffentlichten Firefox-Version ist!

## Schritt 4: Veröffentlichung

Aktualisieren Sie den Eintrag Ihrer Erweiterung auf [https://addons.mozilla.org](https://addons.mozilla.org). Dies stellt sicher, dass Benutzer sie finden können.

Außerdem, wenn Ihre Erweiterung eine [`updateURL`](/en-US/Install_Manifests#updateurl) im Installationsmanifest bereitstellt, stellen Sie sicher, dass Sie das Update-Manifest aktualisieren, damit die neue Version Ihrer Erweiterung automatisch von Firefox gefunden werden kann. Auf diese Weise kann Firefox beim ersten Ausführen Ihrer Erweiterung nach dem Upgrade auf Firefox 2 anbieten, sie automatisch für den Benutzer zu installieren.
