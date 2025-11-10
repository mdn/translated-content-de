---
title: Paket
slug: Glossary/Packet
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein Paket, oder Netzpaket, ist ein formatiertes Datenstück, das über ein Netzwerk gesendet wird. Die Hauptkomponenten eines Netzpakets sind die Nutzdaten und Steuerinformationen. Die Nutzdaten sind bekannt als _Payload_. Die Steuerinformationen sind die Informationen zur Zustellung der Nutzdaten. Sie bestehen aus Netzwerkadressen für die Quelle und das Ziel, Sequenzinformationen und Fehlererkennungscodes und sind generell in Paket-Headern und -Footer zu finden.

## Was ein Paket enthält

### Hop-Limit

Ein Hop tritt auf, wenn ein Paket von einem Netzwerk zum nächsten Netzwerk weitergeleitet wird. Es ist ein Feld, das jedes Mal um eins reduziert wird, wenn ein Paket weitergeleitet wird; erreicht das Hop-Limit 0, ist der Sendevorgang fehlgeschlagen und das Paket wird verworfen.

Im Laufe der Zeit können die Anzahl der Pakete zu einer Traversierung innerhalb geschlossener Kreise führen, die Anzahl der zirkulierenden Pakete würde sich aufbauen und letztendlich zum Versagen des Netzwerks führen.

### Fehlererkennung und -korrektur

Fehlererkennung und -korrektur sind Codes, die verwendet werden, um Fehler zu erkennen und Korrekturen auf die Fehler anzuwenden, die auftreten, wenn Daten an den Empfänger übertragen werden. Es gibt zwei Arten von Fehlerkorrekturen: Rückwärts- und Vorwärtsfehlerkorrektur. Rückwärtsfehlerkorrektur bedeutet, dass der Empfänger den Sender auffordert, die gesamte Dateneinheit erneut zu senden. Vorwärtsfehlerkorrektur bedeutet, dass der Empfänger den Fehlerkorrektur-Code verwendet, welcher die Fehler automatisch korrigiert.

Am Sender wird die Berechnung durchgeführt, bevor das Paket gesendet wird. Bei Erhalt am Zielort wird die Prüfsumme neu berechnet und mit der im Paket verglichen.

### Priorität

Dieses Feld gibt an, welches Paket gegenüber den anderen eine höhere Priorität haben sollte. Die Warteschlange mit hoher Priorität wird schneller geleert als Warteschlangen mit niedriger Priorität, wenn das Netzwerk überlastet ist.

### Adressen

Beim Routing von Netzpaketen werden zwei Netzwerkadressen benötigt: die Quelladresse des sendenden Hosts und die Zieladresse des empfangenden Hosts.

### Nutzdaten - Payload

Payload sind die Daten, die im Auftrag einer Anwendung übertragen werden. Sie ist normalerweise variabler Länge, bis zu einem Maximum, das durch das Netzwerkprotokoll und manchmal die Geräte auf der Route festgelegt wird.

## Verwendete Referenzen

- [Netzwerkpaket](https://en.wikipedia.org/wiki/Network_packet)
- [Hop (Netzwerke)](<https://en.wikipedia.org/wiki/Hop_(networking)>)
- [Wie Fehlererkennung und -korrektur funktioniert](https://www.techradar.com/news/computing/how-error-detection-and-correction-works-1080736)
