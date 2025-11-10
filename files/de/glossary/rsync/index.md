---
title: Rsync
slug: Glossary/Rsync
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

[Rsync](https://rsync.samba.org/) ist ein Open-Source-Werkzeug zur Dateisynchronisierung, das inkrementellen Dateitransfer ermöglicht. Es kann über unsichere und sichere Übertragungswege (wie SSH) verwendet werden. Rsync ist auf den meisten Unix-basierten Systemen (wie macOS und Linux) sowie Windows verfügbar. Es gibt auch GUI-basierte Werkzeuge, die rsync nutzen, wie beispielsweise [Acrosync](https://acrosync.com/mac.html).

Ein grundlegender Befehl sieht so aus:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` ist ein Bindestrich gefolgt von einem oder mehreren Buchstaben, zum Beispiel `-v` für ausführliche Fehlermeldungen und `-b`, um Backups zu erstellen. Die vollständige Liste der Optionen finden Sie auf der [rsync-Man-Seite.](https://linux.die.net/man/1/rsync) (Suchen Sie nach "Options summary.")
- `SOURCE` ist der Pfad zur lokalen Datei oder zum Verzeichnis, das Sie kopieren oder synchronisieren möchten.
- `user@` sind die Anmeldeinformationen des Benutzers auf dem Remote-Server, auf den Sie Dateien übertragen möchten.
- `x.x.x.x` ist die IP-Adresse des Remote-Servers.
- `DESTINATION` ist der Pfad zur Position, an die Sie Ihr Verzeichnis oder Ihre Dateien auf dem Remote-Server kopieren möchten.

Sie können auch eine Verbindung über SSH mithilfe der Option `-e` herstellen, wie gezeigt:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

Es gibt zahlreiche Beispiele im Internet, einschließlich derer auf der [offiziellen Website](https://rsync.samba.org/examples.html) und im [Wikipedia-Eintrag](https://en.wikipedia.org/wiki/Rsync#Examples) für rsync.
