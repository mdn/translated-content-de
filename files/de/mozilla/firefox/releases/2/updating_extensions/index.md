---
title: Aktualisieren von Erweiterungen für Firefox 2
slug: Mozilla/Firefox/Releases/2/Updating_extensions
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen aktualisieren möchten, um ordnungsgemäß unter Firefox 2 zu funktionieren.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt — und für die meisten Erweiterungen der einzige notwendige — ist die Aktualisierung der [Installationsmanifest](/en-US/Install_Manifests)-Datei, install.rdf, um die Kompatibilität mit Firefox 2 anzugeben.

Suchen Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 1.5 so aussehen könnte):

```bash
 <em:maxVersion>1.5.0.*</em:maxVersion>
```

Ändern Sie diese, um die Kompatibilität mit Firefox 2 anzugeben:

```bash
 <em:maxVersion>2.0.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung erneut.

## Schritt 2: Aktualisieren Sie XUL-Overlays

Firefox 2 enthält Änderungen am Standard-Theme. Zusätzlich wurden einige Benutzeroberflächenelemente geändert oder verschoben, und es ist möglich, dass Ihre Erweiterung davon betroffen ist, abhängig davon, was Ihre XUL-Overlays tun.

Sehen Sie sich den Artikel [Theme-Änderungen in Firefox 2](/en-US/Theme_changes_in_Firefox_2) an, um zu erfahren, welche Änderungen vorgenommen wurden, die die XUL-Overlays Ihrer Erweiterung betreffen könnten.

## Schritt 3: Testen

Stellen Sie sicher, dass Sie Ihre Erweiterung gründlich in Firefox 2 testen, bevor Sie sie der Öffentlichkeit zur Verfügung stellen. Das Letzte, was Sie wollen, ist, dass die neue Version Ihrer Erweiterung für eine Vielzahl von Problemmeldungen in der gerade veröffentlichten Version von Firefox verantwortlich ist!

## Schritt 4: Veröffentlichen

Aktualisieren Sie den Eintrag Ihrer Erweiterung auf [https://addons.mozilla.org](https://addons.mozilla.org/). Dies stellt sicher, dass Benutzer sie finden können.

Wenn Ihre Erweiterung zusätzlich eine [`updateURL`](/en-US/Install_Manifests#updateurl) im Installationsmanifest bereitstellt, stellen Sie sicher, dass Sie das Update-Manifest aktualisieren, damit die neue Version Ihrer Erweiterung automatisch von Firefox gefunden werden kann. Dadurch kann Firefox dem Benutzer beim ersten Ausführen Ihrer Erweiterung nach dem Upgrade auf Firefox 2 anbieten, diese automatisch zu installieren.
