---
title: Rsync
slug: Glossary/Rsync
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{GlossarySidebar}}

[Rsync](https://rsync.samba.org/) ist ein quelloffenes Tool zur Dateisynchronisierung, das inkrementelle Dateiübertragungen ermöglicht. Es kann über unsichere und sichere Übertragungen (wie SSH) benutzt werden. Es ist auf den meisten Unix-basierten Systemen (wie macOS und Linux) sowie auf Windows verfügbar. Es gibt auch GUI-basierte Tools, die rsync verwenden, zum Beispiel [Acrosync](https://acrosync.com/mac.html).

Ein grundlegender Befehl sieht folgendermaßen aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b`, um Backups zu erstellen. Die vollständige Liste der Optionen finden Sie auf der [rsync Man-Seite.](https://linux.die.net/man/1/rsync) (Suchen Sie nach "Options summary.")
- `SOURCE` ist der Pfad zur lokalen Datei oder zum Verzeichnis, das Sie kopieren oder synchronisieren möchten.
- `user@` sind die Anmeldeinformationen des Benutzers auf dem entfernten Server, auf den Sie Dateien kopieren möchten.
- `x.x.x.x` ist die IP-Adresse des entfernten Servers.
- `DESTINATION` ist der Pfad zum Ort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem entfernten Server kopieren möchten.

Sie können auch über SSH eine Verbindung herstellen, indem Sie die Option `-e` wie folgt verwenden:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Es gibt zahlreiche Beispiele im Internet, einschließlich solcher auf der [offiziellen Website](https://rsync.samba.org/examples.html) und im [Wikipedia-Eintrag](https://en.wikipedia.org/wiki/Rsync#Examples) zu rsync.
