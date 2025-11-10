---
title: Verwendung von Datums- und Zeitformaten in HTML
short-title: Datums- und Zeitformate
slug: Web/HTML/Guides/Date_and_time_formats
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Bestimmte HTML-Elemente verwenden Datums- und/oder Zeitwerte. Die Formate der Zeichenfolgen, die diese Werte angeben, werden in diesem Artikel beschrieben.

Elemente, die solche Formate verwenden, umfassen bestimmte Formen des {{HTMLElement("input")}}-Elements, mit denen der Benutzer ein Datum, eine Zeit oder beides auswählen oder angeben kann, sowie die {{HTMLElement("ins")}}- und {{HTMLElement("del")}}-Elemente, deren [`datetime`](/de/docs/Web/HTML/Reference/Elements/ins#datetime)-Attribut das Datum oder das Datum und die Uhrzeit angibt, zu denen das Einfügen oder Löschen von Inhalt erfolgte.

Für `<input>` sind die [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Werte von Eingaben, deren [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eine Zeichenfolge enthält, die ein Datum und/oder eine Zeit darstellt:

- [`date`](/de/docs/Web/HTML/Reference/Elements/input/date)
- [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)
- [`time`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [`week`](/de/docs/Web/HTML/Reference/Elements/input/week)

## Beispiele

Bevor Sie sich mit den Feinheiten der Schreibweise und Analyse von Datums- und Zeitzeichenfolgen in HTML befassen, finden Sie hier einige Beispiele, die Ihnen einen guten Eindruck davon vermitteln, wie die gebräuchlicheren Datums- und Zeitzeichenfolgenformate aussehen.

<table class="standard-table">
  <caption>
    Beispiel-HTML-Datums- und Zeitzeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Zeichenfolge</th>
      <th colspan="2" scope="col">Datum und/oder Uhrzeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07</code></td>
      <td>7. Juni 2005</td>
      <td>
        <a href="#date_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45</code></td>
      <td>08:45 Uhr</td>
      <td>
        <a href="#time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>08:45 Uhr und 25 Sekunden</td>
      <td>
        <a href="#time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>03:40 Uhr am 4. August, 33</td>
      <td>
        <a
          href="#local_date_and_time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1977-04-01T14:00:30</code></td>
      <td>30 Sekunden nach 14:00 Uhr am 1. April 1977</td>
      <td>
        <a
          href="#local_date_and_time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00Z</code></td>
      <td>Mitternacht UTC am 1. Januar 1901</td>
      <td>
        <a
          href="#global_date_and_time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00:01-04:00</code></td>
      <td>
        1 Sekunde nach Mitternacht Eastern Standard Time (EST) am 1. Januar 1901
      </td>
      <td>
        <a
          href="#global_date_and_time_strings"
          >[Details]</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen

Bevor wir uns die verschiedenen Formate von datums- und zeitbezogenen Zeichenfolgen ansehen, die von HTML-Elementen verwendet werden, ist es hilfreich, einige grundlegende Fakten darüber zu verstehen, wie sie definiert sind. HTML verwendet eine Abwandlung des [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-Standards für seine Datums- und Zeitzeichenfolgen. Es lohnt sich, die Beschreibungen der von Ihnen verwendeten Formate zu überprüfen, um sicherzustellen, dass Ihre Zeichenfolgen tatsächlich mit HTML kompatibel sind, da die HTML-Spezifikation Algorithmen zum Parsen dieser Zeichenfolgen enthält, die tatsächlich präziser sind als ISO 8601, sodass es subtile Unterschiede in der Erwartungshaltung bezüglich des Aussehens von Datums- und Zeitzeichenfolgen geben kann.

### Zeichensatz

Daten und Zeiten in HTML sind immer Zeichenfolgen, die den {{Glossary("ASCII", "ASCII")}}-Zeichensatz verwenden.

### Jahreszahlen

Um das grundlegende Format für Datumszeichenfolgen in HTML zu vereinfachen, erfordert die Spezifikation, dass alle Jahre im modernen (oder **proleptischen**) [gregorianischen Kalender](https://de.wikipedia.org/wiki/Gregorianischer_Kalender) angegeben werden. Während Benutzeroberflächen möglicherweise die Eingabe von Daten in anderen Kalendern ermöglichen, wird der zugrunde liegende Wert immer im gregorianischen Kalender verwendet.

Obwohl der gregorianische Kalender erst im Jahr 1582 geschaffen wurde (um den ähnlichen julianischen Kalender zu ersetzen), wird der gregorianische Kalender für HTML-Zwecke bis ins Jahr 1 n. Chr. zurückgeführt. Stellen Sie sicher, dass alle älteren Daten dies berücksichtigen.

Für HTML-Daten sind Jahre immer mindestens vierstellig; Jahre vor dem Jahr 1000 werden mit führenden Nullen (`0`) aufgefüllt, sodass das Jahr 72 als `0072` geschrieben wird. Jahre vor dem Jahr 1 n. Chr. werden nicht unterstützt, sodass HTML keine Jahre 1 v. Chr. (1 v. Chr.) oder früher unterstützt.

Ein Jahr ist normalerweise 365 Tage lang, außer in **[Schaltjahren](#schaltjahre)**.

#### Schaltjahre

Ein **Schaltjahr** ist jedes Jahr, das entweder durch 400 teilbar ist _oder_ das Jahr durch 4, aber nicht durch 100 teilbar ist. Obwohl das Kalenderjahr normalerweise 365 Tage lang ist, benötigt der Planet Erde tatsächlich ungefähr 365,2422 Tage, um eine vollständige Umlaufbahn um die Sonne zu vollenden. Schaltjahre helfen dabei, den Kalender anzupassen, um ihn mit der tatsächlichen Position des Planeten auf seiner Umlaufbahn in Einklang zu halten. Ein Hinzufügen eines Tages alle vier Jahre macht das durchschnittliche Jahr im Wesentlichen 365,25 Tage lang, was fast korrekt ist.

Die Anpassungen des Algorithmus (ein Schaltjahr einlegen, wenn das Jahr durch 400 teilbar ist, und Schaltjahre auslassen, wenn das Jahr durch 100 teilbar ist) helfen, das durchschnittliche Jahr noch näher an die korrekte Anzahl von Tagen (365,2425 Tage) zu bringen. Gelegentlich fügen Wissenschaftler Schaltsekunden zum Kalender hinzu (ernsthaft), um die verbleibenden drei Zehntausendstel eines Tages zu bewältigen und die allmählich natürlich auftretende Verlangsamung der Erdrotation auszugleichen.

Während der Monat `02`, Februar, normalerweise 28 Tage hat, hat er in Schaltjahren 29 Tage.

### Monate des Jahres

Es gibt 12 Monate im Jahr, nummeriert von 1 bis 12. Sie werden immer durch eine zweistellige ASCII-Zeichenfolge dargestellt, deren Wert von `01` bis `12` reicht. Siehe die Tabelle im Abschnitt [Tage des Monats](#tage_des_monats) für die Monatsnummern und ihre entsprechenden Namen (und Längen in Tagen).

### Tage des Monats

Monatszahlen 1, 3, 5, 7, 8, 10 und 12 sind 31 Tage lang. Die Monate 4, 6, 9 und 11 sind 30 Tage lang. Der Monat 2, Februar, ist in den meisten Jahren 28 Tage lang, in Schaltjahren jedoch 29 Tage. Dies wird in der folgenden Tabelle detailliert dargestellt.

<table class="standard-table">
  <caption>
    Die Monate des Jahres und ihre Längen in Tagen
  </caption>
  <thead>
    <tr>
      <th scope="row">Monatszahl</th>
      <th scope="col">Name (English)</th>
      <th scope="col">Länge in Tagen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>January</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">02</th>
      <td>February</td>
      <td>28 (29 in Schaltjahren)</td>
    </tr>
    <tr>
      <th scope="row">03</th>
      <td>March</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">04</th>
      <td>April</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">05</th>
      <td>May</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">06</th>
      <td>June</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">07</th>
      <td>July</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">08</th>
      <td>August</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">09</th>
      <td>September</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>October</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>November</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>December</td>
      <td>31</td>
    </tr>
  </tbody>
</table>

## Wochenzeichenfolgen

Eine Wochenzeichenfolge gibt eine Woche innerhalb eines bestimmten Jahres an. Eine **gültige Wochenzeichenfolge** besteht aus einer gültigen [Jahreszahl](#jahreszahlen), gefolgt von einem Bindestrich (`-`, oder U+002D), dann dem Großbuchstaben `W` (U+0057), gefolgt von einem zweistelligen Wert der Woche des Jahres.

Die Woche des Jahres ist eine zweistellige Zeichenfolge zwischen `01` und `53`. Jede Woche beginnt am Montag und endet am Sonntag. Das bedeutet, dass die ersten Tage im Januar möglicherweise als Teil der Vorjahr-Woche betrachtet werden und die letzten Tage im Dezember als Teil der Folgewoche. Die erste Woche des Jahres ist die Woche, die den _ersten Donnerstag des Jahres_ enthält. Beispielsweise fiel der erste Donnerstag des Jahres 1953 auf den 1. Januar, sodass diese Woche - beginnend am Montag, den 29. Dezember - als erste Woche des Jahres betrachtet wird. Daher fällt der 30. Dezember 1952 in die Woche `1953-W01`.

Ein Jahr hat 53 Wochen, wenn:

- Der erste Tag des Kalenderjahres (1. Januar) ein Donnerstag ist **oder**
- Der erste Tag des Jahres (1. Januar) ist ein Mittwoch und das Jahr ist ein [Schaltjahr](#schaltjahre)

Alle anderen Jahre haben 52 Wochen.

| Wochenzeichenfolge | Woche und Jahr (Datumsbereich)                    |
| ------------------ | ------------------------------------------------- |
| `2001-W37`         | Woche 37, 2001 (10.-16. September 2001)           |
| `1953-W01`         | Woche 1, 1953 (29. Dezember 1952-4. Januar 1953)  |
| `1948-W53`         | Woche 53, 1948 (27. Dezember 1948-2. Januar 1949) |
| `1949-W01`         | Woche 1, 1949 (3.-9. Januar 1949)                 |
| `0531-W16`         | Woche 16, 531 (13.-19. April 531)                 |
| `0042-W04`         | Woche 4, 42 (21.-27. Januar 42)                   |

Beachten Sie, dass sowohl die Jahres- als auch die Wochenzahlen mit führenden Nullen gefüllt sind, wobei das Jahr auf vier Stellen und die Woche auf zwei Stellen gepolstert wird.

## Monatszeichenfolgen

Eine Monatszeichenfolge repräsentiert einen bestimmten Monat in der Zeit, anstatt einen generischen Monat des Jahres. Das heißt, anstatt "Januar" darzustellen, repräsentiert eine HTML-Monatszeichenfolge einen Monat und Jahr gepaart, wie "Januar 1972".

Eine **gültige Monatszeichenfolge** besteht aus einer gültigen [Jahreszahl](#jahreszahlen) (eine Zeichenfolge mit mindestens vier Ziffern), gefolgt von einem Bindestrich (`-`, oder U+002D), gefolgt von einer zweistelligen numerischen [Monatszahl](#monate_des_jahres), wobei `01` den Januar und `12` den Dezember darstellt.

| Monatszeichenfolge | Monat und Jahr   |
| ------------------ | ---------------- |
| `17310-09`         | September, 17310 |
| `2019-01`          | Januar, 2019     |
| `1993-11`          | November, 1993   |
| `0571-04`          | April, 571       |
| `0001-07`          | Juli, 1 n. Chr.  |

Beachten Sie, dass alle Jahre mindestens vier Zeichen lang sind; Jahre, die weniger als vier Ziffern lang sind, werden mit führenden Nullen aufgefüllt.

## Datumszeichenfolgen

Eine gültige Datumszeichenfolge besteht aus einer [Monatszeichenfolge](#monatszeichenfolgen), gefolgt von einem Bindestrich (`-`, oder U+002D), gefolgt von einem zweistelligen [Tag des Monats](#tage_des_monats).

| Datumszeichenfolge | Vollständiges Datum |
| ------------------ | ------------------- |
| `1993-11-01`       | 1. November 1993    |
| `1066-10-14`       | 14. Oktober 1066    |
| `0571-04-22`       | 22. April 571       |
| `0062-02-05`       | 5. Februar 62       |

## Zeitzeichenfolgen

Eine Zeitzeichenfolge kann eine Zeit mit Präzision auf die Minute, Sekunde oder Millisekunde angeben. Nur die Stunde oder Minute anzugeben, ist nicht gestattet. Eine **gültige Zeitzeichenfolge** besteht minimal aus einer zweistelligen Stunde, gefolgt von einem Doppelpunkt (`:`, U+003A), dann einer zweistelligen Minute. Die Minute kann optional durch einen weiteren Doppelpunkt und einer zweistelligen Zahl von Sekunden gefolgt werden. Millisekunden können optional angegeben werden, indem ein Dezimalpunkt (`.`, U+002E) gefolgt von einer, zwei oder drei Ziffern hinzugefügt wird.

Es gibt einige zusätzliche grundlegende Regeln:

- Die Stunde wird immer mit der 24-Stunden-Uhr angegeben, wobei `00` Mitternacht und 23:00 Uhr `23` ist. Keine Werte außerhalb des Bereichs `00` – `23` sind erlaubt.
- Die Minute muss eine zweistellige Zahl zwischen `00` und `59` sein. Keine Werte außerhalb dieses Bereichs sind erlaubt.
- Wenn die Anzahl der Sekunden weggelassen wird (um eine Zeit nur bis zur Minute genau anzugeben), sollte dem Minutenwert kein Doppelpunkt folgen.
- Falls angegeben, muss der ganzzahlige Anteil der Anzahl der Sekunden zwischen `00` und `59` liegen. Sie _dürfen keine_ Schaltsekunden durch die Verwendung von Werten wie `60` oder `61` angeben.
- Falls die Anzahl der Sekunden angegeben und eine ganze Zahl ist, darf sie nicht durch einen Dezimalpunkt gefolgt werden.
- Falls ein Bruchteil einer Sekunde enthalten ist, kann dieser von einem bis drei Ziffern lang sein und gibt die Anzahl der Millisekunden an. Er folgt dem Dezimalpunkt, der nach dem Sekundenanteil der Zeitzeichenfolge platziert wird.

| Zeitzeichenfolge | Zeit                                              |
| ---------------- | ------------------------------------------------- |
| `00:00:30.75`    | 00:00:30.75 Uhr (30.75 Sekunden nach Mitternacht) |
| `12:15`          | 12:15 Uhr                                         |
| `13:44:25`       | 13:44:25 Uhr (25 Sekunden nach 13:44 Uhr)         |

## Lokale Datums- und Zeitzeichenfolgen

Eine gültige [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)-Zeichenfolge besteht aus einer `date`-Zeichenfolge und einer `time`-Zeichenfolge, die mit entweder dem Buchstaben `T` oder einem Leerzeichen getrennt sind. In der Zeichenfolge sind keine Informationen über die Zeitzone enthalten; das Datum und die Uhrzeit werden in der lokalen Zeitzone des Benutzers angenommen.

Wenn Sie den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines `datetime-local`-Eingabefelds festlegen, wird die Zeichenfolge **normalisiert** in eine Standardform. Normalisierte `datetime`-Zeichenfolgen verwenden immer den Buchstaben `T`, um Datum und Zeit zu trennen, und der Zeitanteil der Zeichenfolge ist so kurz wie möglich. Dies wird erreicht, indem die Sekundenkomponente weggelassen wird, wenn ihr Wert `:00` ist.

<table class="standard-table">
  <caption>
    Beispiele für gültige
    <code>datetime-local</code>
    Zeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Datum/Zeit-Zeichenfolge</th>
      <th scope="col">Normalisierte Datum/Zeit-Zeichenfolge</th>
      <th scope="col">Tatsächliches Datum und Uhrzeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td>28. Januar 1986 um 11:38:00.01 Uhr</td>
    </tr>
    <tr>
      <td><code>1986-01-28 11:38:00.010</code></td>
      <td>
        <p><code>1986-01-28T11:38:00.01</code></p>
        <p>
          Beachten Sie, dass nach der Normalisierung dies dieselbe Zeichenfolge wie die vorherige
          <code>datetime-local</code>-Zeichenfolge ist. Der Leerraum wurde durch
          das <code>T</code>-Zeichen ersetzt, und die nachgestellte Null im Bruch
          einer Sekunde wurde entfernt, um die Zeichenfolge so kurz wie möglich zu halten.
        </p>
      </td>
      <td>28. Januar 1986 um 11:38:00.01 Uhr</td>
    </tr>
    <tr>
      <td><code>0170-07-31T22:00:00</code></td>
      <td>
        <p><code>0170-07-31T22:00</code></p>
        <p>
          Beachten Sie, dass die normalisierte Form dieses Datums das
          <code>:00</code>, das die Anzahl der Sekunden auf null angibt, weglässt,
          da die Sekunden optional sind, wenn sie null sind, und die normalisierte Zeichenfolge
          die Länge der Zeichenfolge minimiert.
        </p>
      </td>
      <td>31. Juli 170 um 22:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Globale Datums- und Zeitzeichenfolgen

Eine globale Datums- und Zeitzeichenfolge spezifiziert ein Datum und eine Zeit sowie die Zeitzone, in der es auftritt. Eine **gültige globale Datums- und Zeitzeichenfolge** hat das gleiche Format wie eine [lokale Datums- und Zeitzeichenfolge](#lokale_datums-_und_zeitzeichenfolgen), mit dem Unterschied, dass am Ende ein Zeitzonenstring folgt, der der Zeit folgt.

### Zeitzonenoffset-Zeichenfolge

Eine Zeitzonenoffset-Zeichenfolge gibt den Offset in Stunden und Minuten von der Standardzeitbasis an. Es gibt zwei Standardzeitbasen, die sich zwar sehr nahe, aber nicht genau identisch sind:

- Für Daten nach der Einführung der [koordinierten Weltzeit](https://de.wikipedia.org/wiki/Koordinierte_Weltzeit) (UTC) in den frühen 1960er Jahren ist die Zeitbasis `Z` und der Offset gibt die Offset einer bestimmten Zeitzone von der Zeit am Nullmeridian bei 0º Längengrad an (der durch das königliche Observatorium in Greenwich, England, verläuft).
- Für Daten vor der UTC wird die Zeitbasis stattdessen in Bezug auf [UT1](https://de.wikipedia.org/wiki/UT1) ausgedrückt, die moderne Erdzeit am Nullmeridian.

Der Zeitzonenstring wird unmittelbar nach der Zeit in der Datums- und Zeitzeichenfolge angehängt. Sie können `Z` als Zeitzonenoffset-Zeichenfolge angeben, um anzuzeigen, dass die Zeit in UTC angegeben ist. Andernfalls wird der Zeitzonenstring wie folgt konstruiert:

1. Ein Zeichen, das das Vorzeichen des Offsets angibt: das Pluszeichen (`+`, oder U+002B) für Zeitzonen östlich des Nullmeridians oder das Minuszeichen (`-`, oder U+002D) für Zeitzonen westlich des Nullmeridians.
2. Eine zweistellige Anzahl von Stunden, die die Zeitzone vom Nullmeridian versetzt ist. Dieser Wert muss zwischen `00` und `23` liegen.
3. Ein optionales Doppelpunktzeichen (`:`).
4. Eine zweistellige Anzahl von Minuten über die Stunde hinaus; dieser Wert muss zwischen `00` und `59` liegen.

Während dieses Format Zeitzonen zwischen -23:59 und +23:59 erlaubt, liegt der aktuelle Bereich der Zeitzonenoffsets zwischen -12:00 und +14:00, und es gibt derzeit keine Zeitzonen, die von der Stunde abweichen durch etwas anderes als `00`, `30` oder `45` Minuten. Dies kann sich jederzeit mehr oder weniger ändern, da es Ländern freisteht, ihre Zeitzonen jederzeit und in jeder Weise zu ändern, wie sie es möchten.

<table class="no-markdown">
  <caption>
    Beispiele für gültige globale Datums- und Zeitzeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Globale Datums- und Zeitzeichenfolge</th>
      <th scope="col">Tatsächliches globales Datum und Uhrzeit</th>
      <th scope="col">Datum und Uhrzeit am Nullmeridian</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07T00:00Z</code></td>
      <td>7. Juni 2005 um Mitternacht UTC</td>
      <td>7. Juni 2005 um Mitternacht</td>
    </tr>
    <tr>
      <td><code>1789-08-22T12:30:00.1-04:00</code></td>
      <td>
        22. August 1789 eine Zehntelsekunde nach 12:30 Uhr Eastern Daylight
        Time (EDT)
      </td>
      <td>22. August 1789 eine Zehntelsekunde nach 16:30 Uhr</td>
    </tr>
    <tr>
      <td><code>3755-01-01 00:00+10:00</code></td>
      <td>
        1. Januar 3755 um Mitternacht Australian Eastern Standard Time (AEST)
      </td>
      <td>31. Dezember 3754 um 14:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Datumsprobleme

Aufgrund von Datenspeicherung und Präzisionsproblemen sollten Sie sich über einige Probleme auf der Client- und Serverseite im Klaren sein.

### Das Y2K38-Problem (oft serverseitig)

JavaScript verwendet Gleitkommazahlen in doppelter Genauigkeit zur Speicherung von Daten, wie bei allen Zahlen, was bedeutet, dass JavaScript-Code nicht vom Y2K38-Problem betroffen ist, es sei denn, es wird eine Ganzzahlumwandlung/Bit-Manipulation verwendet, da alle JavaScript-Bitoperatoren 32-Bit-zweifach-komplementierte Ganzzahlen verwenden.

Das Problem liegt auf der Serverseite: Speicherung von Daten größer als 2^31 - 1. Um dieses Problem zu beheben, müssen Sie alle Daten entweder mit Vorzeichen-32-Bit-Ganzzahlen, mit Vorzeichen-64-Bit-Ganzzahlen oder mit Gleitkommazahlen in doppelter Genauigkeit auf dem Server speichern. Wenn Ihr Server in PHP geschrieben ist, erfordert die Lösung möglicherweise ein Upgrade Ihrer PHP-Version und ein Upgrade Ihrer Hardware auf x86_64 oder IA64. Wenn Sie auf andere Hardware festgelegt sind, können Sie versuchen, 64-Bit-Hardware in einer 32-Bit-virtuellen Maschine zu emulieren, aber die meisten VMs unterstützen diese Art der Virtualisierung nicht, da die Stabilität darunter leiden könnte und die Leistung definitiv stark beeinträchtigt wird.

### Das Y10k-Problem (oft clientseitig)

Auf vielen Servern werden Daten als Zahlen anstatt als Zeichenfolgen gespeichert - Zahlen mit fester Größe und ohne Formatierung (abgesehen von der Byte-Reihenfolge). Nach dem Jahr 10.000 sind diese Zahlen einfach etwas größer als vorher, sodass viele Server keine Probleme mit Formularen sehen werden, die nach dem Jahr 10.000 eingereicht wurden.

Das Problem liegt auf der Client-Seite: Parsing von Daten mit mehr als 4 Ziffern im Jahr.

```html
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Wir müssen unseren Code für jede Anzahl von Ziffern vorbereiten – nicht nur 5. Die folgende JavaScript-Funktion setzt den Wert programmatisch:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Warum sich über das Y10K-Problem Gedanken machen, wenn es erst viele Jahrhunderte nach Ihrem Tod passieren wird? Genau deshalb, weil Sie dann bereits tot sind und die Unternehmen, die Ihre Software verwenden, mit Ihrer Software allein dastehen, ohne einen anderen Programmierer, der das System gut genug kennt, um hereinzukommen und es zu beheben.

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} und {{HTMLElement("del")}}: siehe das `datetime` Attribut, das entweder ein Datum oder ein lokales Datum und eine Uhrzeit angibt, zu der der Inhalt eingefügt oder gelöscht wurde
- [Die ISO 8601 Spezifikation](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Repräsentation von Daten und Zeiten](/de/docs/Web/JavaScript/Guide/Representing_dates_times) im [JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das JavaScript-Objekt {{jsxref("Date")}}
- Das [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)-Objekt zur Formatierung von Daten und Zeiten für ein gegebenes Gebietsschema
