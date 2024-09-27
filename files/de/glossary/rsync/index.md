---
title: Rsync
slug: Glossary/Rsync
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{GlossarySidebar}}

[Rsync](https://rsync.samba.org/) ist ein Open-Source-Dateisynchronisationswerkzeug, das inkrementellen Dateiübertragungsservice bietet. Es kann über unsichere und sichere Transportsysteme (wie SSH) verwendet werden. Es ist auf den meisten Unix-basierten Systemen (wie macOS und Linux) sowie Windows verfügbar. Es gibt auch GUI-basierte Werkzeuge, die rsync verwenden, zum Beispiel [Acrosync](https://acrosync.com/mac.html).

Ein grundlegender Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b` um Backups zu erstellen. Die vollständige Liste der Optionen finden Sie auf der [rsync man-Seite.](https://linux.die.net/man/1/rsync) (Suchen Sie nach "Options summary.")
- `SOURCE` ist der Pfad zur lokalen Datei oder Verzeichnis, das Sie kopieren oder synchronisieren möchten.
- `user@` sind die Anmeldedaten des Benutzers auf dem entfernten Server, zu dem Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zu dem Speicherort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Sie können auch eine Verbindung über SSH mit der `-e`-Option herstellen, wie gezeigt:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Es gibt zahlreiche Beispiele im Internet, einschließlich derer auf der [offiziellen Website](https://rsync.samba.org/examples.html) und im [Wikipedia-Eintrag](https://en.wikipedia.org/wiki/Rsync#Examples) für rsync.
