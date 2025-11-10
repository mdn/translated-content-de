---
title: Verständnis von Latenz
slug: Web/Performance/Guides/Understanding_latency
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

**Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu gelangen. Im Hinblick auf die Leistungsoptimierung ist es wichtig, Ursachen von Latenz zu reduzieren und die Leistung von Websites zu testen, indem man hohe Latenz simuliert, um für Benutzer mit schlechten Verbindungen zu optimieren. Dieser Artikel erklärt, was Latenz ist, wie sie die Leistung beeinflusst, wie man Latenz misst und wie man sie reduziert.

## Was ist Latenz?

Latenz wird allgemein als die Zeit verstanden, die vergeht, von dem Moment, in dem der Benutzer eine Anfrage stellt, bis die Antwort bei diesem Benutzer zurückkommt. Bei einer ersten Anfrage für die ersten 14 KB ist die Latenz länger, da ein {{Glossary("DNS", "DNS")}}-Lookup, ein {{Glossary("TCP_handshake", "TCP handshake")}} und die sichere {{Glossary("TLS", "TLS")}}-Verhandlung eingeschlossen sind. Nachfolgende Anfragen haben weniger Latenz, da die Verbindung zum Server bereits besteht.

Latenz beschreibt die Menge an Verzögerung in einem Netzwerk- oder Internetanschluss. Niedrige Latenz bedeutet, dass es keine oder fast keine Verzögerungen gibt. Hohe Latenz bedeutet, dass es viele Verzögerungen gibt. Eines der Hauptziele der Leistungsverbesserung besteht darin, die Latenz zu reduzieren.

Die Latenz, die mit einem einzelnen Asset verbunden ist, insbesondere einer grundlegenden HTML-Seite, mag trivial erscheinen. Aber Websites beinhalten im Allgemeinen mehrere Anfragen: das HTML umfasst Anfragen für mehrere CSS, Skripte und Mediendateien. Je höher die Anzahl und Größe dieser Anfragen, desto größer ist die Auswirkung einer hohen Latenz auf das Benutzererlebnis.

Bei einer Verbindung mit niedriger Latenz erscheinen angeforderte Ressourcen fast sofort. Bei einer Verbindung mit hoher Latenz wird es eine spürbare Verzögerung zwischen dem Zeitpunkt geben, zu dem eine Anfrage gesendet wird, und dem Zeitpunkt, zu dem die Ressourcen zurückkommen. Wir können die Menge an Latenz bestimmen, indem wir die Geschwindigkeit messen, mit der die Daten von einem Netzwerkstandort zum anderen gelangen.

Latenz kann einseitig gemessen werden, zum Beispiel die Zeit, die es dauert, um eine Anfrage für Ressourcen zu senden, oder die Länge der gesamten Rundreise von der Anforderung der Ressource im Browser bis zu dem Moment, wenn die angeforderte Ressource im Browser eintrifft.

## Netzwerk-Drosselung

Um die Latenz eines Netzwerks mit niedriger Bandbreite zu emulieren, können Sie Entwickler-Tools verwenden und zu einer Verbindung mit niedrigerer Geschwindigkeit wechseln.

![Latenz durch Drosseln emulieren](emulate_latency.png)

In den Entwickler-Tools können Sie unter der Netzwerktabelle die Drosselungsoption auf 2G, 3G usw. umstellen. Verschiedene Entwickler-Tools von Browsern haben unterschiedliche Voreinstellungen, zu den emulierten Merkmalen gehören Downloadgeschwindigkeit, Uploadgeschwindigkeit und Mindestlatenz oder die Mindestzeit, die es dauert, um ein Datenpaket zu senden. Die ungefähren Werte einiger Voreinstellungen umfassen:

| Auswahl         | Downloadgeschwindigkeit | Uploadgeschwindigkeit | Mindestlatenz (ms) |
| --------------- | ----------------------- | --------------------- | ------------------ |
| GPRS            | 50 kbps                 | 20 kbps               | 500                |
| Normales 2G     | 250 kbps                | 50 kbps               | 300                |
| Gutes 2G        | 450 kbps                | 150 kbps              | 150                |
| Normales 3G     | 750 kbps                | 250 kbps              | 100                |
| Gutes 3G        | 1.5 Mbps                | 750 kbps              | 40                 |
| Normales 4G/LTE | 4 Mbps                  | 3 Mbps                | 20                 |
| DSL             | 2 Mbps                  | 1 Mbps                | 5                  |
| Wi-Fi           | 30 Mbps                 | 15 Mbps               | 2                  |

## Netzwerkzeiten

Auch im Netzwerk-Tab können Sie sehen, wie lange jede Anfrage benötigt hat, um abgeschlossen zu werden. Wir können uns ansehen, wie lange es dauerte, ein 267,5Kb SVG-Bild-Asset herunterzuladen.

![Die Zeit, die ein großes SVG-Asset zum Laden benötigte.](latencymlw.png)

Wenn eine Anfrage in einer Warteschlange steht, die auf eine Netzwerkverbindung wartet, wird sie als **blockiert** betrachtet. Blockieren tritt auf, wenn zu viele gleichzeitige Verbindungen zu einem einzelnen Server über HTTP hergestellt werden. Wenn alle Verbindungen genutzt werden, kann der Browser keine weiteren Ressourcen herunterladen, bis eine Verbindung freigegeben wird, was bedeutet, dass diese Anfragen und Ressourcen blockiert sind.

**DNS-Auflösung** ist die Zeit, die benötigt wurde, um den {{Glossary("DNS", "DNS")}}-Lookup durchzuführen. Je größer die Anzahl der [Hostnamen](/de/docs/Web/API/URL/hostname), desto mehr DNS-Lookups müssen durchgeführt werden.

**Connecting** ist die Zeit, die ein {{Glossary("TCP_handshake", "TCP handshake")}} benötigt, um abgeschlossen zu werden. Wie bei DNS, je größer die Anzahl der benötigten Serververbindungen, desto mehr Zeit wird für die Herstellung von Serververbindungen aufgewendet.

Der **{{Glossary("TLS", "TLS")}}-Handschlag** ist die Zeit, die benötigt wurde, um eine sichere Verbindung herzustellen. Während ein TLS-Handschlag länger dauert als eine unsichere Verbindung, ist die zusätzliche Zeit für eine sichere Verbindung es wert.

**Sending** ist die Zeit, die benötigt wird, um die HTTP-Anfrage an den Server zu senden.

**Waiting** ist die Festplattenlatenz, die Zeit, die der Server benötigte, um seine Antwort abzuschließen. Die Festplattenlatenz war früher das Hauptanliegen der Leistung. Aber die Leistung der Server hat sich verbessert, da sich der Arbeitsspeicher bzw. die CPU verbessert hat. Abhängig von der Komplexität dessen, was vom Server benötigt wird, kann dies immer noch ein Problem sein.

**Receiving** ist die Zeit, die benötigt wird, um das Asset herunterzuladen. Die Empfangszeit wird durch eine Kombination aus der Netzwerkkapazität und der Dateigröße des Assets bestimmt. Wenn das Bild zwischengespeichert gewesen wäre, wäre dies nahezu augenblicklich geschehen. Hätten wir gedrosselt, könnte der Empfang 43 Sekunden gedauert haben!

## Latenz messen

**Netzwerklatenz** ist die Zeit, die benötigt wird, damit eine Datenanforderung vom anfordernden Computer zum antwortenden Computer gelangt. Dabei wird auch die Zeit eingeschlossen, die ein Datenbyte benötigt, um vom antwortenden Computer zurück zum anfordernden Computer zu gelangen. Es wird allgemein als Rundreiseverzögerung gemessen.

**Festplattenlatenz** ist die Zeit, die vergeht, von dem Moment, in dem ein Computer, in der Regel ein Server, eine Anfrage erhält, bis zu dem Zeitpunkt, zu dem der Computer die Antwort zurückgibt.
