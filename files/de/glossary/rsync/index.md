---
title: Rsync
slug: Glossary/Rsync
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

{{GlossarySidebar}}

[Rsync](https://rsync.samba.org/) ist ein Open-Source-Tool zur Dateisynchronisation, das inkrementellen Dateitransfer bereitstellt. Es kann über unsichere und sichere Übertragungsmethoden (wie SSH) verwendet werden. Es ist auf den meisten Unix-basierten Systemen (wie macOS und Linux) und Windows verfügbar. Es gibt auch GUI-basierte Tools, die rsync verwenden, wie zum Beispiel [Acrosync](https://acrosync.com/mac.html).

Ein einfacher Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich, gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b`, um Backups zu erstellen. Die vollständige Liste der Optionen finden Sie auf der [rsync-Man-Seite.](https://linux.die.net/man/1/rsync) (Suchen Sie nach "Options summary.")
- `SOURCE` ist der Pfad zur lokalen Datei oder zum Verzeichnis, das Sie kopieren oder synchronisieren möchten
- `user@` sind die Anmeldedaten des Benutzers auf dem Remote-Server, auf den Sie Dateien übertragen möchten.
- `x.x.x.x` ist die IP-Adresse des Remote-Servers.
- `DESTINATION` ist der Pfad zu dem Ort, an den Sie Ihr Verzeichnis oder Ihre Dateien auf dem Remote-Server kopieren möchten.

Sie können auch eine Verbindung über SSH unter Verwendung der Option `-e` herstellen, wie hier gezeigt:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Es gibt zahlreiche Beispiele im Internet, einschließlich derer auf der [offiziellen Website](https://rsync.samba.org/examples.html) und im [Wikipedia-Eintrag](https://en.wikipedia.org/wiki/Rsync#Examples) für rsync.
