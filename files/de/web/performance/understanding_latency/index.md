---
title: Latenz verstehen
slug: Web/Performance/Understanding_latency
l10n:
  sourceCommit: 4d26c993afa39460cafd2e4f87a58e19d5262a39
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Latenz** ist die Zeit, die ein Datenpaket benötigt, um vom Ausgangspunkt zum Ziel zu gelangen. Im Hinblick auf die Leistungsoptimierung ist es wichtig, Ursachen für Latenz zu reduzieren und die Website-Leistung unter simulierten hohen Latenzen zu testen, um für Benutzer mit schlechten Verbindungen zu optimieren. Dieser Artikel erklärt, was Latenz ist, wie sie die Leistung beeinflusst, wie man Latenz misst und wie man sie reduzieren kann.

## Was ist Latenz?

Latenz wird allgemein als die Zeit betrachtet, die von dem Moment an vergeht, an dem eine Anfrage durch den Benutzer gestellt wird, bis zu dem Moment, an dem die Antwort bei diesem Benutzer eintrifft. Bei einer ersten Anfrage, für die ersten 14Kb Bytes, ist die Latenz länger, da sie eine [DNS](/de/docs/Glossary/DNS)-Abfrage, einen [TCP handshake](/de/docs/Glossary/TCP_handshake) und die sichere [TLS](/de/docs/Glossary/TLS)-Aushandlung umfasst. Bei nachfolgenden Anfragen ist die Latenz geringer, da die Verbindung zum Server bereits besteht.

Latenz beschreibt die Verzögerung in einem Netzwerk- oder Internetverbindung. Niedrige Latenz impliziert, dass es keine oder nahezu keine Verzögerungen gibt. Hohe Latenz bedeutet, dass es viele Verzögerungen gibt. Eines der Hauptziele der Leistungsverbesserung ist die Reduzierung der Latenz.

Die Latenz, die mit einem einzelnen Asset verbunden ist, insbesondere einer grundlegenden HTML-Seite, mag trivial erscheinen. Websites beinhalten jedoch in der Regel mehrere Anfragen: Das HTML umfasst Anfragen für mehrere CSS, Skripte und Mediendateien. Je höher die Anzahl und Größe dieser Anfragen ist, desto größer ist der Einfluss hoher Latenz auf die Benutzererfahrung.

Bei einer Verbindung mit niedriger Latenz erscheinen die angeforderten Ressourcen fast sofort. Bei einer Verbindung mit hoher Latenz gibt es eine merkliche Verzögerung zwischen dem Zeitpunkt, an dem eine Anfrage gesendet wird, und dem Zeitpunkt, an dem die Ressourcen zurückgegeben werden. Wir können die Menge der Latenz bestimmen, indem wir die Geschwindigkeit messen, mit der die Daten von einem Netzwerkstandort zum anderen gelangen.

Latenz kann auf eine Weise gemessen werden, zum Beispiel die Zeit, die benötigt wird, um eine Anfrage für Ressourcen zu senden, oder die Dauer der gesamten Rückmeldung von der Browseranfrage nach einer Ressource bis zu dem Moment, in dem die angeforderte Ressource im Browser ankommt.

## Netzwerk-Drosselung

Um die Latenz eines Netzwerks mit niedriger Bandbreite zu simulieren, können Sie Entwicklerwerkzeuge verwenden und zu einer Verbindung mit niedrigerem Ende wechseln.

![Latenz durch Drosselung simulieren](emulate_latency.png)

In den Entwicklerwerkzeugen unter der Netzwerktabelle können Sie die Drosselungsoption auf 2G, 3G, etc. umschalten. Verschiedene Browser-Entwicklerwerkzeuge haben unterschiedliche voreingestellte Optionen, die simulierten Merkmale umfassen Downloadgeschwindigkeit, Uploadgeschwindigkeit und Mindestlatenz oder die minimale Zeit, die benötigt wird, um ein Datenpaket zu senden. Die ungefähren Werte einiger Voreinstellungen umfassen:

| Auswahl          | Downloadgeschwindigkeit | Uploadgeschwindigkeit | Mindestlatenz (ms) |
| ---------------- | ----------------------- | --------------------- | ------------------ |
| GPRS             | 50 kbps                 | 20 kbps               | 500                |
| Reguläres 2G     | 250 kbps                | 50 kbps               | 300                |
| Gutes 2G         | 450 kbps                | 150 kbps              | 150                |
| Reguläres 3G     | 750 kbps                | 250 kbps              | 100                |
| Gutes 3G         | 1.5 Mbps                | 750 kbps              | 40                 |
| Reguläres 4G/LTE | 4 Mbps                  | 3 Mbps                | 20                 |
| DSL              | 2 Mbps                  | 1 Mbps                | 5                  |
| Wi-Fi            | 30 Mbps                 | 15 Mbps               | 2                  |

## Netzwerkzeiten

Ebenfalls auf der Registerkarte „Netzwerk“ können Sie sehen, wie lange jede Anfrage zum Abschluss benötigt hat. Wir können beobachten, wie lange ein 267,5Kb SVG-Bildasset für den Download benötigt hat.

![Die Zeit, die es dauerte, bis ein großes SVG-Asset geladen war.](latencymlw.png)

Wenn eine Anfrage in einer Warteschlange ist und auf eine Netzwerkverbindung wartet, wird sie als **blockiert** angesehen. Eine Blockierung tritt auf, wenn zu viele gleichzeitige Verbindungen zu einem einzelnen Server über HTTP hergestellt werden. Wenn alle Verbindungen in Gebrauch sind, kann der Browser keine weiteren Ressourcen herunterladen, bis eine Verbindung freigegeben wird, was bedeutet, dass diese Anfragen und Ressourcen blockiert sind.

**DNS-Auflösung** ist die Zeit, die für die [DNS](/de/docs/Glossary/DNS)-Abfrage benötigt wurde. Je mehr [Hostnamen](/de/docs/Web/API/URL/hostname), desto mehr DNS-Abfragen müssen durchgeführt werden.

**Verbinden** ist die Zeit, die benötigt wird, um einen [TCP handshake](/de/docs/Glossary/TCP_handshake) abzuschließen. Wie bei DNS gilt: Je mehr Serververbindungen benötigt werden, desto mehr Zeit wird für das Erstellen von Serververbindungen aufgewendet.

Der **[TLS](/de/docs/Glossary/TLS)-Handshake** bestimmt, wie lange es dauerte, eine sichere Verbindung einzurichten. Während ein TLS-Handshake länger dauert als eine unsichere Verbindung, ist die zusätzliche Zeit für eine sichere Verbindung wertvoll.

**Senden** ist die Zeit, um die HTTP-Anfrage an den Server zu senden.

**Warten** ist die Festplattenlatenz, die Zeit, die der Server benötigt, um seine Antwort zu vervollständigen. Früher war die Festplattenlatenz der Hauptbereich der Leistungsbedenken. Die Serverleistung hat sich jedoch verbessert, da der Arbeitsspeicher oder die CPU von Computern verbessert wurde. Abhängig von der Komplexität dessen, was vom Server benötigt wird, kann dies weiterhin ein Problem sein.

**Empfangen** ist die Zeit, die benötigt wird, um das Asset herunterzuladen. Die Empfangszeit wird durch eine Kombination aus Netzwerkkapazität und Dateigröße des Assets bestimmt. Wenn das Bild zwischengespeichert worden wäre, hätte dies fast sofort geschehen können. Hätten wir gedrosselt, hätte der Empfang 43 Sekunden dauern können!

## Messung der Latenz

**Netzwerklatenz** ist die Zeit, die ein Datenanforderungs von dem anfragenden Computer zu dem reagierenden Computer benötigt. Einschließlich der Zeit, die ein Datenbyte benötigt, um vom reagierenden Computer zurück zum anfragenden Computer zu gelangen. Sie wird im Allgemeinen als Rundlaufverzögerung gemessen.

**Festplattenlatenz** ist die Zeit, die vom Moment an vergeht, in dem ein Computer, normalerweise ein Server, eine Anfrage erhält, bis zu dem Moment, in dem der Computer die Antwort zurückgibt.
