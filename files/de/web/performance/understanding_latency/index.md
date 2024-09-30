---
title: Latenz verstehen
slug: Web/Performance/Understanding_latency
l10n:
  sourceCommit: 4d26c993afa39460cafd2e4f87a58e19d5262a39
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu gelangen. Im Hinblick auf die Leistungsoptimierung ist es wichtig, Maßnahmen zu ergreifen, um die Ursachen der Latenz zu verringern und die Website-Leistung unter der Simulation hoher Latenz zu testen, um für Benutzer mit schlechten Verbindungen zu optimieren. Dieser Artikel erklärt, was Latenz ist, wie sie die Leistung beeinflusst, wie man sie misst und wie man sie verringert.

## Was ist Latenz?

Latenz wird im Allgemeinen als die Zeit betrachtet, die vom Moment einer Benutzeranfrage bis zur Rückkehr der Antwort an diesen Benutzer vergeht. Bei einer ersten Anfrage dauert es für die ersten 14 KB länger, da es eine [DNS](/de/docs/Glossary/DNS)-Abfrage, einen [TCP handshake](/de/docs/Glossary/TCP_handshake) und die sichere [TLS](/de/docs/Glossary/TLS)-Aushandlung umfasst. Nachfolgende Anfragen haben weniger Latenz, da die Verbindung zum Server bereits hergestellt ist.

Latenz beschreibt die Verzögerung auf einer Netzwerk- oder Internetverbindung. Eine niedrige Latenz bedeutet, dass es kaum oder keine Verzögerungen gibt. Eine hohe Latenz bedeutet, dass es viele Verzögerungen gibt. Eines der Hauptziele bei der Verbesserung der Leistung besteht darin, die Latenz zu reduzieren.

Die durch ein einzelnes Asset verursachte Latenz, insbesondere eine grundlegende HTML-Seite, mag trivial erscheinen. Aber Websites umfassen in der Regel mehrere Anfragen: Das HTML enthält Anfragen für mehrere CSS-, Skript- und Mediendateien. Je größer die Anzahl und die Größe dieser Anfragen, desto größer ist der Einfluss hoher Latenz auf das Benutzererlebnis.

Bei einer Verbindung mit niedriger Latenz erscheinen angeforderte Ressourcen fast sofort. Bei einer Verbindung mit hoher Latenz gibt es eine merkliche Verzögerung zwischen dem Absenden einer Anfrage und dem Erhalt der Ressourcen. Wir können die Höhe der Latenz bestimmen, indem wir die Geschwindigkeit messen, mit der sich Daten von einem Netzwerkstandort zu einem anderen bewegen.

Latenz kann einseitig gemessen werden, zum Beispiel die Zeit, die benötigt wird, um eine Anfrage nach Ressourcen zu senden, oder die Dauer der gesamten Rundreise von der Anfrage des Browsers für eine Ressource bis zu dem Zeitpunkt, an dem die angeforderte Ressource im Browser eintrifft.

## Netzwerkdrosselung

Um die Latenz eines Netzwerks mit niedriger Bandbreite zu simulieren, können Sie Entwicklerwerkzeuge verwenden und zu einer langsameren Netzwerkverbindung wechseln.

![Latenz durch Emulieren der Drosselung simulieren](emulate_latency.png)

In den Entwicklerwerkzeugen können Sie unter der Netzwerktabelle die Drosselungsoption auf 2G, 3G usw. umstellen. Verschiedene Entwicklerwerkzeuge der Browser haben unterschiedliche Voreinstellungen, die emulierten Eigenschaften umfassen Download-Geschwindigkeit, Upload-Geschwindigkeit und Mindestlatenz, oder die minimale Zeit, die benötigt wird, um ein Datenpaket zu senden. Die ungefähren Werte einiger Voreinstellungen umfassen:

| Auswahl        | Download-Geschwindigkeit | Upload-Geschwindigkeit | Mindestlatenz (ms) |
| -------------- | ------------------------- | ---------------------- | ------------------ |
| GPRS           | 50 kbps                   | 20 kbps                | 500                |
| Reguläres 2G   | 250 kbps                  | 50 kbps                | 300                |
| Gutes 2G       | 450 kbps                  | 150 kbps               | 150                |
| Reguläres 3G   | 750 kbps                  | 250 kbps               | 100                |
| Gutes 3G       | 1,5 Mbps                  | 750 kbps               | 40                 |
| Reguläres 4G/LTE | 4 Mbps                  | 3 Mbps                 | 20                 |
| DSL            | 2 Mbps                    | 1 Mbps                 | 5                  |
| Wi-Fi          | 30 Mbps                   | 15 Mbps                | 2                  |

## Netzwerk-Timings

Auch im Netzwerk-Tab können Sie sehen, wie lange jede Anfrage benötigt hat, um abgeschlossen zu werden. Wir können uns ansehen, wie lange ein 267,5 KB großes SVG-Bild für den Download benötigt hat.

![Die Zeit, die benötigt wurde, um ein großes SVG-Asset zu laden.](latencymlw.png)

Befindet sich eine Anfrage in einer Warteschlange und wartet auf eine Netzwerkverbindung, wird sie als **blockiert** betrachtet. Blockierung tritt auf, wenn zu viele gleichzeitige Verbindungen zu einem einzelnen Server über HTTP bestehen. Wenn alle Verbindungen in Gebrauch sind, kann der Browser keine weiteren Ressourcen herunterladen, bis eine Verbindung freigegeben wird, was bedeutet, dass diese Anfragen und Ressourcen blockiert sind.

**DNS-Auflösung** ist die Zeit, die für die [DNS](/de/docs/Glossary/DNS)-Abfrage benötigt wurde. Je mehr [Hostnamen](/de/docs/Web/API/URL/hostname) es gibt, desto mehr DNS-Abfragen müssen durchgeführt werden.

**Verbindung** ist die Zeit, die für einen vollständigen [TCP handshake](/de/docs/Glossary/TCP_handshake) benötigt wird. Wie bei DNS, desto mehr Serververbindungen benötigt werden, desto mehr Zeit wird für das Erstellen von Serververbindungen aufgewendet.

Der **[TLS](/de/docs/Glossary/TLS)-Handshake** ist die Zeit, die für das Einrichten einer sicheren Verbindung benötigt wird. Während ein TLS-Handshake länger dauert als eine unsichere Verbindung, ist die zusätzliche Zeit für eine sichere Verbindung es wert.

**Senden** ist die Zeit, die benötigt wird, um die HTTP-Anfrage an den Server zu senden.

**Warten** ist die Festplattenlatenz, die Zeit, die benötigt wurde, damit der Server seine Antwort vervollständigt. Die Festplattenlatenz war früher der Hauptbereich der Leistungsüberlegungen. Jedoch hat sich die Serverleistung verbessert, da sich der Arbeitsspeicher von Computern oder die CPU verbessert hat. Abhängig von der Komplexität dessen, was vom Server benötigt wird, kann dies weiterhin ein Problem sein.

**Empfangen** ist die Zeit, die benötigt wird, um das Asset herunterzuladen. Die Empfangszeit wird durch eine Kombination aus Netzwerkkapazität und Asset-Dateigröße bestimmt. Wurde das Bild zwischengespeichert, wäre dies fast augenblicklich gewesen. Hätten wir gedrosselt, hätte das Empfangen 43 Sekunden dauern können!

## Latenz messen

**Netzwerklatenz** ist die Zeit, die ein Datenantrag benötigt, um vom Computer, der die Anfrage macht, zum Computer, der antwortet, zu gelangen. Einschließlich der Zeit, die ein Datenbyte benötigt, um vom antwortenden Computer zurück zum anfordernden Computer zu gelangen. Es wird im Allgemeinen als Rundreiseverzögerung gemessen.

**Festplattenlatenz** ist die Zeit, die von dem Moment benötigt wird, in dem ein Computer, in der Regel ein Server, eine Anfrage erhält, bis zur Rücksendung der Antwort durch den Computer.
