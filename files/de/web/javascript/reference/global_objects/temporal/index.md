---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 04a4f090c9cafc7e482c561731f48b14b318e787
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal`**-Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien, einschließlich der integrierten Darstellung von Zeitzonen und Kalendern, der Umwandlung von Uhrzeiten, Arithmetik, Formatierung und mehr. Es wurde als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt entwickelt.

## Beschreibung

Anders als die meisten globalen Objekte ist `Temporal` kein Konstruktor. Es kann weder mit dem [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwendet noch als Funktion aufgerufen werden. Alle Eigenschaften und Methoden von `Temporal` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

`Temporal` verfügt über eine detaillierte und leistungsstarke API. Es stellt über 200 Dienstprogrammmethoden über mehrere Klassen bereit, was zunächst sehr komplex erscheinen mag. Im Folgenden bieten wir einen Überblick über die Beziehungen zwischen diesen APIs.

### Hintergrund und Konzepte

JavaScript verfügt seit seinen Anfängen über das {{jsxref("Date")}}-Objekt zur Handhabung von Datum und Uhrzeit. Allerdings basiert die `Date`-API auf der schlecht gestalteten Klasse `java.util.Date` aus Java, die in den frühen 2010er Jahren ersetzt wurde. Aufgrund des Ziels der Abwärtskompatibilität bleibt `Date` jedoch weiterhin Teil der Sprache.

Die wichtigste Erkenntnis vorab ist, dass die **Verarbeitung von Datum und Uhrzeit komplex ist**. Die meisten Probleme von `Date` könnten durch Hinzufügen weiterer Methoden behoben werden, doch ein grundlegender Designfehler bleibt bestehen: Es bietet so viele Methoden in einem einzigen Objekt an, dass Entwickler oft verwirrt sind und es zu unerwarteten Fehlern kommt. Eine gut gestaltete API muss nicht nur mehr können, sondern auch _weniger_ auf jeder Abstraktionsebene bieten, da das Verhindern von Fehlverwendungen ebenso wichtig ist wie die Ermöglichung von Anwendungsfällen.

`Date`-Objekte erfüllen zwei Funktionen gleichzeitig:

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Zeitpunkt (bekannt als _Epoche_) verstrichen sind.
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Angaben zu Jahr, Monat und Tag machen nur im Zusammenhang mit einem _Kalendersystem_ Sinn. Diese Kombination bezieht sich auf einen einzigartigen Moment in der Geschichte, wenn sie mit einer Zeitzone verbunden wird. `Date`-Objekte bieten Methoden zum Lesen und Bearbeiten dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind Ursache eines signifikanten Anteils an datumsbezogenen Fehlern. Bei der Interaktion mit `Date` über das Modell "Kombination von Komponenten" kann die Zeit nur in zwei Zeitzonen ausgedrückt werden: UTC und lokal (Gerät). Es gibt keine Möglichkeit, eine beliebige Zeitzone festzulegen. Zudem fehlt das Konzept einer "Zeitzonenfreiheit": Dies ist als _Kalendertag_ (für Daten) oder _Uhrzeit_ (für Zeiten) bekannt, was der Zeit entspricht, die "von einem Kalender oder einer Uhr abgelesen" wird. Zum Beispiel möchten Sie für einen täglichen Wecker "8:00 Uhr" einstellen, unabhängig davon, ob Sommerzeit gilt, ob Sie in eine andere Zeitzone gereist sind usw.

Ein weiteres Merkmal, das `Date` fehlt, ist ein [Kalendersystem](#calendars). Die meisten Menschen kennen den Gregorianischen Kalender, der zwei Epochen hat (v. Chr. und n. Chr.), 12 Monate umfasst, wobei jeder Monat unterschiedlich viele Tage hat, und alle vier Jahre ein Schaltjahr. Diese Konzepte gelten jedoch möglicherweise nicht, wenn Sie mit einem anderen Kalendersystem wie dem Hebräischen Kalender, dem Chinesischen Kalender, dem Japanischen Kalender usw. arbeiten. Mit `Date` können Sie nur das Modell des Gregorianischen Kalenders verwenden.

Es gibt viele weitere unerwünschte Altlasten bei `Date`, wie z. B. dass alle Setter mutierend sind (was oft unerwünschte Nebeneffekte verursacht) oder das [Datumsformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das nicht konsistent analysiert werden kann. Die beste Lösung ist letztendlich eine neue API von Grund auf neu zu erstellen, und genau das ist `Temporal`.

### API-Übersicht

`Temporal` ist ein Namensraum wie {{jsxref("Intl")}}. Es enthält mehrere Klassen und Namensräume, die jeweils für einen spezifischen Aspekt des Daten- und Zeitmanagements entwickelt wurden. Die Klassen können wie folgt gruppiert werden:

- Darstellung einer Zeitdauer (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines einzigartigen Punktes in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datumskomponenten mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines zeitzonenunabhängigen Datums/Zeitpunkts (alle mit "Plain" vorangestellt):
    - Datum (Jahr, Monat, Tag) + Zeitpunkt (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` entspricht `PlainDateTime` plus einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Darüber hinaus gibt es einen weiteren Utility-Namensraum, {{jsxref("Temporal.Now")}}, der Methoden bereitstellt, um die aktuelle Zeit in verschiedenen Formaten zu erhalten.

### Gemeinsame Klassen-Schnittstelle

Es gibt viele Klassen im `Temporal`-Namensraum, aber sie teilen viele ähnliche Methoden. Die folgende Tabelle listet alle Methoden für jede Klasse auf (ausgenommen [Konvertierungsmethoden](#conversion_between_classes)):

...
