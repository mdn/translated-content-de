---
title: Verständnis von Latenz
slug: Web/Performance/Understanding_latency
l10n:
  sourceCommit: 4d26c993afa39460cafd2e4f87a58e19d5262a39
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Latenz** ist die Zeit, die ein Datenpaket benötigt, um von der Quelle zum Ziel zu gelangen. Im Hinblick auf die Leistungsoptimierung ist es wichtig, die Ursachen für Latenz zu reduzieren und die Webseitenleistung unter simulierten hohen Latenzen zu testen, um für Benutzer mit schlechten Verbindungen zu optimieren. Dieser Artikel erklärt, was Latenz ist, wie sie die Leistung beeinflusst, wie man sie misst und wie man sie verringert.

## Was ist Latenz?

Latenz wird allgemein als die Zeit betrachtet, die vom Moment der Anforderung durch den Benutzer bis zum Eintreffen der Antwort bei diesem Benutzer vergeht. Bei einer ersten Anforderung, für die ersten 14 Kb Daten, ist die Latenz länger, da sie einen {{glossary('DNS')}}-Lookup, einen {{glossary('TCP handshake')}} und die sichere {{glossary('TLS')}}-Verhandlung beinhaltet. Nachfolgende Anforderungen weisen weniger Latenz auf, da die Verbindung zum Server bereits besteht.

Latenz beschreibt die Verzögerung auf einer Netzwerk- oder Internetverbindung. Niedrige Latenz impliziert, dass es keine oder fast keine Verzögerungen gibt. Hohe Latenz bedeutet, dass es viele Verzögerungen gibt. Eines der Hauptziele der Leistungsverbesserung ist die Reduzierung der Latenz.

Die mit einem einzelnen Asset verbundene Latenz, insbesondere einer einfachen HTML-Seite, mag trivial erscheinen. Aber Websites beinhalten in der Regel mehrere Anfragen: Das HTML umfasst Anfragen für mehrere CSS, Skripte und Mediendateien. Je mehr und größer diese Anfragen sind, desto größer ist der Einfluss hoher Latenz auf das Benutzererlebnis.

Bei einer Verbindung mit niedriger Latenz erscheinen angeforderte Ressourcen nahezu sofort. Bei einer Verbindung mit hoher Latenz gibt es eine spürbare Verzögerung zwischen der Anforderung und der Rückgabe der Ressourcen. Die Menge der Latenz können wir bestimmen, indem wir die Geschwindigkeit messen, mit der sich die Daten von einem Netzwerkstandort zum anderen bewegen.

Latenz kann eindimensional gemessen werden, zum Beispiel die Zeit, die eine angeforderte Ressource benötigt, oder die Dauer der gesamten Hin- und Rückfahrt von der Browseranfrage für eine Ressource bis zum Moment, in dem die angeforderte Ressource im Browser eintrifft.

## Netzwerk-Drosselung

Um die Latenz eines Netzwerks mit niedriger Bandbreite zu simulieren, können Sie Entwickler-Tools verwenden und auf eine Verbindung mit niedrigerer Leistung umschalten.

![Latenz simulieren durch Drosselungssimulation](emulate_latency.png)

In den Entwickler-Tools, unter der Netzwerktabelle, können Sie die Drosselungsoption auf 2G, 3G usw. umstellen. Verschiedene Entwickler-Tools der Browser haben unterschiedliche Voreinstellungen, die simulierten Eigenschaften umfassen Download-Geschwindigkeit, Upload-Geschwindigkeit und Mindestlatenz, oder die Mindestzeit, die nötig ist, um ein Datenpaket zu senden. Die ungefähren Werte einiger Voreinstellungen sind:

| Auswahl        | Download-Geschwindigkeit | Upload-Geschwindigkeit | Mindestlatenz (ms) |
| -------------- | ------------------------- | ---------------------- | ------------------ |
| GPRS           | 50 kbps                   | 20 kbps                | 500                |
| Regulär 2G     | 250 kbps                  | 50 kbps                | 300                |
| Gut 2G         | 450 kbps                  | 150 kbps               | 150                |
| Regulär 3G     | 750 kbps                  | 250 kbps               | 100                |
| Gut 3G         | 1,5 Mbps                  | 750 kbps               | 40                 |
| Regulär 4G/LTE | 4 Mbps                    | 3 Mbps                 | 20                 |
| DSL            | 2 Mbps                    | 1 Mbps                 | 5                  |
| WLAN           | 30 Mbps                   | 15 Mbps                | 2                  |

## Netzwerk-Timings

Auch auf dem Netzwerk-Tab können Sie sehen, wie lange jede Anfrage zur Fertigstellung benötigt hat. Wir können sehen, wie lange es gedauert hat, ein 267,5Kb großes SVG-Asset herunterzuladen.

![Die Zeit, die benötigt wurde, um ein großes SVG-Asset zu laden.](latencymlw.png)

Wenn eine Anfrage in einer Warteschlange auf eine Netzwerkverbindung wartet, wird sie als **blockiert** betrachtet. Blockierungen treten auf, wenn zu viele gleichzeitige Verbindungen zu einem einzelnen Server über HTTP hergestellt werden. Sind alle Verbindungen in Gebrauch, kann der Browser keine weiteren Ressourcen herunterladen, bis eine Verbindung freigegeben wird, was bedeutet, dass diese Anfragen und Ressourcen blockiert sind.

Die **DNS-Auflösung** ist die Zeit, die für den {{glossary('DNS')}}-Lookup benötigt wurde. Je größer die Anzahl der [Hostnamen](/de/docs/Web/API/URL/hostname), desto mehr DNS-Lookups müssen durchgeführt werden.

Das **Verbinden** ist die Zeit, die benötigt wird, um einen {{glossary('TCP handshake')}} abzuschließen. Wie beim DNS gilt: Je mehr Serververbindungen benötigt werden, desto mehr Zeit wird für die Erstellung von Serververbindungen aufgewendet.

Der **{{glossary('TLS')}}-Handshake** ist, wie lange es dauerte, eine sichere Verbindung herzustellen. Ein TLS-Handshake benötigt zwar länger als eine unsichere Verbindung, aber die zusätzliche Zeit für eine sichere Verbindung ist lohnenswert.

Das **Senden** ist die Zeit, die benötigt wird, um die HTTP-Anfrage an den Server zu senden.

Das **Warten** ist die Festplattenlatenz, die Zeit, die der Server benötigt, um seine Antwort abzuschließen. Festplattenlatenz war früher das Hauptanliegen bei der Leistungsverbesserung. Allerdings hat sich die Serverleistung mit den Verbesserungen in Computer-Speicher oder CPU verbessert. Je nach Komplexität dessen, was vom Server benötigt wird, kann dies immer noch problematisch sein.

Das **Empfangen** ist die Zeit, die zum Herunterladen des Assets benötigt wird. Die Empfangszeit wird durch eine Kombination aus Netzwerkkapazität und Asset-Dateigröße bestimmt. Wäre das Bild zwischengespeichert worden, wäre dies nahezu augenblicklich gewesen. Wenn wir gedrosselt hätten, hätte das Empfangen 43 Sekunden dauern können!

## Latenz messen

**Netzwerklatenz** ist die Zeit, die ein Datenantrag benötigt, um vom Computer, der den Antrag stellt, zu dem Computer zu gelangen, der antwortet. Einschließlich der Zeit, die ein Datenbyte benötigt, um vom antwortenden Computer zurück zum anfordernden Computer zu gelangen. Sie wird in der Regel als Round-Trip-Verzögerung gemessen.

**Festplattenlatenz** ist die Zeit vom Moment, in dem ein Computer, in der Regel ein Server, eine Anfrage erhält, bis zu dem Zeitpunkt, an dem der Computer die Antwort zurücksendet.
