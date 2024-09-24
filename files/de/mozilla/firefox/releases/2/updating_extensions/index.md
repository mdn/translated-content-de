---
title: Aktualisieren von Erweiterungen für Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen, die Entwicklern nützlich sein werden, die ihre Erweiterungen aktualisieren möchten, damit sie korrekt unter Firefox 2 funktionieren.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt – und für die meisten Erweiterungen der einzige, der erforderlich sein wird – ist das Aktualisieren der [Installationsmanifest](/en-US/Install_Manifests) Datei, install.rdf, um die Kompatibilität mit Firefox 2 anzugeben.

Finden Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 1.5 so aussehen könnte):

```bash
 <em:maxVersion>1.5.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 2 anzuzeigen:

```bash
 <em:maxVersion>2.0.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung erneut.

## Schritt 2: Aktualisieren Sie XUL-Overlays

Firefox 2 beinhaltet Änderungen am Standard-Design. Zusätzlich wurden einige Benutzeroberflächenelemente geändert oder verschoben, und es ist möglich, dass Ihre Erweiterung davon betroffen sein könnte, abhängig davon, was Ihre XUL-Overlays tun.

Werfen Sie einen Blick auf den Artikel [Designänderungen in Firefox 2](/en-US/Theme_changes_in_Firefox_2), um zu erfahren, welche Änderungen vorgenommen wurden, die die XUL-Overlays Ihrer Erweiterung betreffen könnten.

## Schritt 3: Testen

Stellen Sie sicher, dass Sie Ihre Erweiterung sorgfältig unter Firefox 2 testen, bevor Sie sie der Öffentlichkeit freigeben. Das Letzte, was Sie wollen, ist, dass die neue Version Ihrer Erweiterung verantwortlich für eine Flut von Problemberichten mit der gerade veröffentlichten Version von Firefox ist!

## Schritt 4: Freigabe

Aktualisieren Sie den Eintrag Ihrer Erweiterung auf [https://addons.mozilla.org](https://addons.mozilla.org). Damit wird sichergestellt, dass die Benutzer sie finden können.

Wenn Ihre Erweiterung außerdem eine [`updateURL`](/en-US/Install_Manifests#updateurl) im Installationsmanifest bereitstellt, stellen Sie sicher, dass Sie das Update-Manifest aktualisieren, damit die neue Version Ihrer Erweiterung automatisch von Firefox gefunden werden kann. Indem Sie dies tun, kann Firefox beim ersten Start Ihrer Erweiterung nach dem Upgrade auf Firefox 2 anbieten, diese automatisch für die Benutzer zu installieren.
