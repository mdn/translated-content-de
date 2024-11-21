---
title: Datum- und Uhrzeitformate in HTML
slug: Web/HTML/Date_and_time_formats
l10n:
  sourceCommit: 4d3605197ea5c6407aacca2a80cc27a398f04fc8
---

{{HTMLSidebar}}

Bestimmte HTML-Elemente verwenden Datums- und/oder Uhrzeitwerte. Die Formate der Zeichenfolgen, die diese Werte spezifizieren, werden in diesem Artikel beschrieben.

Elemente, die solche Formate verwenden, sind bestimmte Formen des {{HTMLElement("input")}}-Elements, die es dem Benutzer ermöglichen, ein Datum, eine Uhrzeit oder beides auszuwählen oder anzugeben, sowie die {{HTMLElement("ins")}} und {{HTMLElement("del")}}-Elemente, deren [`datetime`](/de/docs/Web/HTML/Element/ins#datetime)-Attribut das Datum oder Datum und Uhrzeit angibt, zu dem der Inhalt eingefügt oder gelöscht wurde.

Für `<input>` sind die [`type`](/de/docs/Web/HTML/Element/input#type)-Werte von Eingaben, deren [`value`](/de/docs/Web/HTML/Element/input#value) eine Zeichenfolge enthält, die ein Datum und/oder eine Uhrzeit darstellt:

- [`date`](/de/docs/Web/HTML/Element/input/date)
- [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`month`](/de/docs/Web/HTML/Element/input/month)
- [`time`](/de/docs/Web/HTML/Element/input/time)
- [`week`](/de/docs/Web/HTML/Element/input/week)

## Beispiele

Bevor wir uns mit den Feinheiten der Schreibweise und Interpretation von Datums- und Uhrzeitzeichenfolgen in HTML befassen, sind hier einige Beispiele, die Ihnen einen guten Eindruck davon vermitteln sollten, wie die häufiger verwendeten Datums- und Uhrzeitzeichenfolgen aussehen.

<table class="standard-table">
  <caption>
    Beispiel-HTML-Datum- und Uhrzeitzeichenfolgen
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
      <td>8:45 Uhr</td>
      <td>
        <a href="#time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>8:45 Uhr und 25 Sekunden</td>
      <td>
        <a href="#time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>3:40 Uhr am 4. August 33</td>
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

Bevor wir uns die verschiedenen Formate der von HTML-Elementen verwendeten Datums- und Uhrzeitzeichenfolgen ansehen, ist es hilfreich, einige grundlegende Fakten über die Art und Weise, wie sie definiert sind, zu verstehen. HTML verwendet eine Variation des [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-Standards für seine Datums- und Uhrzeitzeichenfolgen. Es lohnt sich, die Beschreibungen der verwendeten Formate zu überprüfen, um sicherzustellen, dass Ihre Zeichenfolgen tatsächlich mit HTML kompatibel sind, da die HTML-Spezifikation Algorithmen zum Parsen dieser Zeichenfolgen enthält, die tatsächlich präziser sind als ISO 8601, sodass es subtile Unterschiede in der erwarteten Darstellung von Datums- und Uhrzeitzeichenfolgen geben kann.

### Zeichensatz

Daten und Uhrzeiten in HTML sind immer Zeichenfolgen, die den {{Glossary("ASCII", "ASCII")}} Zeichensatz verwenden.

### Jahreszahlen

Um das Grundformat von Datumszeichenfolgen in HTML zu vereinfachen, erfordert die Spezifikation, dass alle Jahre unter Verwendung des modernen (oder **proleptischen**) [Gregorianischen Kalenders](https://de.wikipedia.org/wiki/Gregorianischer_Kalender) angegeben werden. Während Benutzeroberflächen möglicherweise die Eingabe von Daten mithilfe anderer Kalender zulassen, verwendet der zugrunde liegende Wert immer den Gregorianischen Kalender.

Während der Gregorianische Kalender erst 1582 eingeführt wurde (als Ersatz für den ähnlichen Julianischen Kalender), wird er für HTML-Zwecke auf das Jahr 1 n. Chr. zurückgezogen. Stellen Sie sicher, dass alle älteren Daten dies berücksichtigen.

Für HTML-Daten sind Jahre immer mindestens vierstellig; Jahre vor 1000 werden mit führenden Nullen (`0`) aufgefüllt, sodass das Jahr 72 als `0072` geschrieben wird. Jahre vor dem Jahr 1 n. Chr. werden nicht unterstützt, sodass HTML Jahre 1 v. Chr. oder früher (1 v. Chr.) nicht unterstützt.

Ein Jahr hat normalerweise 365 Tage, außer in **[Schaltjahren](#schaltjahre)**.

#### Schaltjahre

Ein **Schaltjahr** ist ein Jahr, das entweder durch 400 oder durch 4, jedoch nicht durch 100 teilbar ist. Obwohl das Kalenderjahr normalerweise 365 Tage lang ist, dauert es tatsächlich etwa 365,2422 Tage, bis der Planet Erde einen einzigen Umlauf um die Sonne vollendet. Schaltjahre helfen dabei, den Kalender an die tatsächliche Position des Planeten in seiner Umlaufbahn anzupassen. Das Hinzufügen eines Tages zu jedem vierten Jahr macht das durchschnittliche Jahr im Wesentlichen 365,25 Tage lang, was fast korrekt ist.

Die Anpassungen am Algorithmus (ein Schaltjahr zu berücksichtigen, wenn das Jahr durch 400 teilbar ist, und Schaltjahre auszulassen, wenn das Jahr durch 100 teilbar ist) tragen dazu bei, den Durchschnittswert noch näher an die korrekte Anzahl von Tagen (365,2425 Tage) zu bringen. Wissenschaftler fügen gelegentlich Schaltsekunden in den Kalender ein (wirklich), um die verbleibenden drei Zehntausendstel eines Tages zu bewältigen und die allmähliche, natürliche Verlangsamung der Erdrotation auszugleichen.

Der Monat `02`, Februar, hat normalerweise 28 Tage, in Schaltjahren jedoch 29 Tage.

### Monate des Jahres

Es gibt 12 Monate im Jahr, nummeriert von 1 bis 12. Sie werden immer durch eine zweistellige ASCII-Zeichenfolge dargestellt, deren Wert von `01` bis `12` reicht. Siehe die Tabelle im Abschnitt [Tage des Monats](#tage_des_monats) für die Monatsnummern und ihre entsprechenden Namen (und Längen in Tagen).

### Tage des Monats

Die Monate 1, 3, 5, 7, 8, 10 und 12 haben 31 Tage. Die Monate 4, 6, 9 und 11 haben 30 Tage. Der Monat 2, Februar, hat die meisten Jahre 28 Tage, jedoch in Schaltjahren 29 Tage. Dies wird in der folgenden Tabelle detailliert dargestellt.

<table class="standard-table">
  <caption>
    Die Monate des Jahres und ihre Länge in Tagen
  </caption>
  <thead>
    <tr>
      <th scope="row">Monatsnummer</th>
      <th scope="col">Name (Englisch)</th>
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

Eine Wochenzeichenfolge spezifiziert eine Woche innerhalb eines bestimmten Jahres. Eine **gültige Wochenzeichenfolge** besteht aus einer gültigen [Jahreszahl](#jahreszahlen), gefolgt von einem Bindestrich (`-`, oder U+002D), dann dem Großbuchstaben `W` (U+0057), gefolgt von einer zweistelligen Wochenzahl des Jahres.

Die Woche des Jahres ist eine zweistellige Zeichenfolge zwischen `01` und `53`. Jede Woche beginnt am Montag und endet am Sonntag. Das bedeutet, dass die ersten Januartage möglicherweise als Teil der vorherigen Woche des Jahres betrachtet werden und die letzten Dezembertage möglicherweise als Teil der folgenden Woche des Jahres betrachtet werden. Die erste Woche des Jahres ist die Woche, die den _ersten Donnerstag des Jahres_ enthält. Beispielsweise war der erste Donnerstag des Jahres 1953 der 1. Januar, sodass diese Woche — beginnend am Montag, den 29. Dezember — als die erste Woche des Jahres gilt. Daher liegt der 30. Dezember 1952 in der Woche `1953-W01`.

Ein Jahr hat 53 Wochen, wenn:

- Der erste Tag des Kalenderjahres (1. Januar) ein Donnerstag ist **oder**
- Der erste Tag des Jahres (1. Januar) ein Mittwoch ist und das Jahr ein [Schaltjahr](#schaltjahre) ist

Alle anderen Jahre haben 52 Wochen.

| Wochenzeichenfolge | Woche und Jahr (Datumsbereich)                        |
| ------------------ | ----------------------------------------------------- |
| `2001-W37`         | Woche 37, 2001 (10.–16. September 2001)               |
| `1953-W01`         | Woche 1, 1953 (29. Dezember 1952 bis 4. Januar 1953)  |
| `1948-W53`         | Woche 53, 1948 (27. Dezember 1948 bis 2. Januar 1949) |
| `1949-W01`         | Woche 1, 1949 (3.–9. Januar 1949)                     |
| `0531-W16`         | Woche 16, 531 (13.–19. April 531)                     |
| `0042-W04`         | Woche 4, 42 (21.–27. Januar 42)                       |

Beachten Sie, dass sowohl die Jahres- als auch die Wochennummern mit führenden Nullen aufgefüllt sind, wobei das Jahr auf vier Ziffern und die Woche auf zwei Ziffern gefüllt ist.

## Monatszeichenfolgen

Eine Monatszeichenfolge repräsentiert einen bestimmten Monat in der Zeit, anstatt eines generischen Monats des Jahres. Das bedeutet, dass eine HTML-Monatszeichenfolge keinen "Januar" darstellt, sondern einen Monat und ein Jahr zusammen, wie "Januar 1972".

Eine **gültige Monatszeichenfolge** besteht aus einer gültigen [Jahreszahl](#jahreszahlen) (eine Zeichenfolge von mindestens vier Ziffern), gefolgt von einem Bindestrich (`-`, oder U+002D), gefolgt von einer zweistelligen numerischen [Monatsnummer](#monate_des_jahres), wobei `01` Januar und `12` Dezember darstellt.

| Monatszeichenfolge | Monat und Jahr  |
| ------------------ | --------------- |
| `17310-09`         | September 17310 |
| `2019-01`          | Januar 2019     |
| `1993-11`          | November 1993   |
| `0571-04`          | April 571       |
| `0001-07`          | Juli 1 n. Chr.  |

Beachten Sie, dass alle Jahre mindestens vier Zeichen lang sind; Jahre, die weniger als vier Ziffern haben, werden mit führenden Nullen aufgefüllt.

## Datumszeichenfolgen

Eine gültige Datumszeichenfolge besteht aus einer [Monatszeichenfolge](#monatszeichenfolgen), gefolgt von einem Bindestrich (`-`, oder U+002D), gefolgt von einem zweistelligen [Tag des Monats](#tage_des_monats).

| Datumszeichenfolge | Volles Datum     |
| ------------------ | ---------------- |
| `1993-11-01`       | 1. November 1993 |
| `1066-10-14`       | 14. Oktober 1066 |
| `0571-04-22`       | 22. April 571    |
| `0062-02-05`       | 5. Februar 62    |

## Uhrzeitzeichenfolgen

Eine Zeitzeichenfolge kann eine Uhrzeit mit Genauigkeit auf Minuten, Sekunden oder Millisekunden angeben. Es ist nicht erlaubt, nur die Stunde oder Minute anzugeben. Eine **gültige Uhrzeitzeichenfolge** besteht mindestens aus einer zweistelligen Stunde, gefolgt von einem Doppelpunkt (`:`, U+003A), dann einer zweistelligen Minute. Die Minute kann optional durch einen weiteren Doppelpunkt und einer zweistelligen Anzahl von Sekunden gefolgt werden. Millisekunden können optional durch Hinzufügen eines Dezimalpunktzeichens (`.`, U+002E) gefolgt von ein, zwei oder drei Ziffern angegeben werden.

Es gibt einige zusätzliche Grundregeln:

- Die Stunde wird immer im 24-Stunden-Format angegeben, wobei `00` Mitternacht und 23 Uhr `23` ist. Keine Werte außerhalb des Bereichs `00` – `23` sind erlaubt.
- Die Minute muss eine zweistellige Zahl zwischen `00` und `59` sein. Keine Werte außerhalb dieses Bereichs sind erlaubt.
- Wenn die Anzahl der Sekunden weggelassen wird (um eine Uhrzeit nur auf die Minute genau anzugeben), darf dem Minutenwert kein Doppelpunkt folgen.
- Wenn angegeben, muss der ganzzahlige Teil der Sekundenanzahl zwischen `00` und `59` liegen. Sie _können_ keine Schaltsekunden durch die Verwendung von Werten wie `60` oder `61` angeben.
- Wenn die Anzahl der Sekunden als Ganzzahl angegeben und ist, darf ihr kein Dezimalpunkt folgen.
- Wenn ein Bruchteil einer Sekunde enthalten ist, kann er aus ein bis drei Ziffern bestehen, die die Anzahl der Millisekunden angeben. Er folgt auf den Dezimalpunkt, der hinter dem Sekundenanteil der Zeitzeichenfolge platziert wird.

| Zeitzeichenfolge | Uhrzeit                                           |
| ---------------- | ------------------------------------------------- |
| `00:00:30.75`    | 00:00:30.75 Uhr (30.75 Sekunden nach Mitternacht) |
| `12:15`          | 12:15 Uhr (Mittag)                                |
| `13:44:25`       | 13:44:25 Uhr (25 Sekunden nach 13:44 Uhr)         |

## Lokale Datums- und Uhrzeitzeichenfolgen

Eine gültige [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local) Zeichenfolge besteht aus einer `date`-Zeichenfolge und einer `time`-Zeichenfolge, die mit entweder dem Buchstaben `T` oder einem Leerzeichen verbunden werden. Keine Informationen zur Zeitzone sind in der Zeichenfolge enthalten; das Datum und die Uhrzeit werden in der lokalen Zeitzone des Benutzers angenommen.

Wenn Sie den [`value`](/de/docs/Web/HTML/Element/input#value) eines `datetime-local`-Eingabefeldes festlegen, wird die Zeichenfolge in eine standardisierte Form **normalisiert**. Normalisierte `datetime`-Zeichenfolgen verwenden immer den Buchstaben `T`, um das Datum und die Uhrzeit zu trennen, und der Zeitabschnitt der Zeichenfolge ist so kurz wie möglich. Dies geschieht, indem die Sekundenkomponente weggelassen wird, wenn ihr Wert `:00` ist.

<table class="standard-table">
  <caption>
    Beispiele für gültige
    <code>datetime-local</code>
    Zeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Datum-/Uhrzeitzeichenfolge</th>
      <th scope="col">Normalisierte Datum-/Uhrzeitzeichenfolge</th>
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
          Beachten Sie, dass nach der Normalisierung die gleiche Zeichenfolge wie die vorherige
          <code>datetime-local</code> Zeichenfolge entsteht. Der Leerraum wurde durch
          das Zeichen <code>T</code> ersetzt und die Null am Ende des Bruchteils
          einer Sekunde wurde entfernt, um die Zeichenfolge so kurz wie möglich zu machen.
        </p>
      </td>
      <td>28. Januar 1986 um 11:38:00.01 Uhr</td>
    </tr>
    <tr>
      <td><code>0170-07-31T22:00:00</code></td>
      <td>
        <p><code>0170-07-31T22:00</code></p>
        <p>
          Beachten Sie, dass in der normalisierten Form dieses Datums das
          <code>:00</code>, das die Anzahl der Sekunden ist, auf null gesetzt wurde,
          weil die Sekunden optional sind, wenn sie null sind, und die normalisierte Zeichenfolge
          minimiert die Länge der Zeichenfolge.
        </p>
      </td>
      <td>31. Juli 170 um 22:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Globale Datums- und Uhrzeitzeichenfolgen

Eine globale Datums- und Uhrzeitzeichenfolge gibt ein Datum und eine Uhrzeit sowie die Zeitzone an, in der sie auftritt. Eine **gültige globale Datums- und Uhrzeitzeichenfolge** hat das gleiche Format wie eine [lokale Datums- und Uhrzeitzeichenfolge](#lokale_datums-_und_uhrzeitzeichenfolgen), außer dass eine Zeitzonenzeichenfolge am Ende, nach der Uhrzeit, angehängt wird.

### Zeitzonen-Offset-Zeichenfolge

Eine Zeitzonen-Offset-Zeichenfolge gibt die Verschiebung in entweder einer positiven oder einer negativen Anzahl von Stunden und Minuten von der Standardzeitbasis an. Es gibt zwei Standardzeitbasen, die sehr nahe beieinander liegen, aber nicht genau gleich sind:

- Für Daten nach der Einführung der [Koordinierten Weltzeit](https://de.wikipedia.org/wiki/Coordinated_Universal_Time) (UTC) in den frühen 1960er Jahren ist die Zeitbasis `Z` und die Verschiebung zeigt die Verschiebung einer bestimmten Zeitzone von der Zeit am Nullmeridian bei 0º Länge an (der durch das Royal Observatory in Greenwich, England, verläuft).
- Für Daten vor UTC wird die Zeitbasis stattdessen in Bezug auf [UT1](https://de.wikipedia.org/wiki/UT1) ausgedrückt, das die zeitgenössische Erdsonnenzeit am Nullmeridian ist.

Die Zeitzonenzeichenfolge wird unmittelbar nach der Uhrzeit in der Datums- und Uhrzeitzeichenfolge angehängt. Sie können `Z` als Zeitzonen-Offset-Zeichenfolge angeben, um anzuzeigen, dass die Zeit in UTC angegeben ist. Andernfalls wird die Zeitzonen-Zeichenfolge wie folgt konstruiert:

1. Ein Zeichen, das das Vorzeichen der Verschiebung angibt: das Pluszeichen (`+`, oder U+002B) für Zeitzonen östlich des Nullmeridians oder das Minuszeichen (`-`, oder U+002D) für Zeitzonen westlich des Nullmeridians.
2. Eine zweistellige Anzahl von Stunden, die die Zeitzone von dem Nullmeridian verschoben ist. Dieser Wert muss zwischen `00` und `23` liegen.
3. Ein optionales Doppelpunkt (`:`) Zeichen.
4. Eine zweistellige Anzahl von Minuten nach der Stunde; dieser Wert muss zwischen `00` und `59` liegen.

Während dieses Format Zeitzonen zwischen -23:59 und +23:59 erlaubt, liegt der aktuelle Bereich der Zeitzonenverschiebungen zwischen -12:00 und +14:00, und keine Zeitzonen sind derzeit von der Stunde durch etwas anderes als `00`, `30` oder `45` Minuten verschoben. Dies kann sich jederzeit ändern, da Länder ihre Zeitzonen jederzeit und in jeder Weise ändern können, wie sie möchten.

<table class="no-markdown">
  <caption>
    Beispiele für gültige globale Datums- und Uhrzeitzeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Globale Datums- und Uhrzeitzeichenfolge</th>
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
        22. August 1789 ein Zehntel einer Sekunde nach 12:30 Uhr Eastern Daylight Time (EDT)
      </td>
      <td>22. August 1789 ein Zehntel einer Sekunde nach 16:30 Uhr</td>
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

Aufgrund von Datenlagerung und Genauigkeitsproblemen sollten Sie sich einiger clientseitiger und serverseitiger Probleme bewusst sein.

### Das Y2K38-Problem (oft serverseitig)

JavaScript verwendet Gleitkommazahlen mit doppelter Genauigkeit zur Speicherung von Daten, wie auch bei allen Zahlen, was bedeutet, dass JavaScript-Code nicht unter dem Y2K38-Problem leidet, es sei denn, es werden ganzzahlige Zwangsumwandlungen/Bit-Tricks verwendet, da alle JavaScript-Bit-Operatoren 32-Bit vorzeichenbehaftete Zwei-Komplement-Ganzzahlen verwenden.

Das Problem liegt auf der Serverseite: Speicherung von Daten über 2^31 - 1 hinaus. Um dieses Problem zu beheben, müssen Sie alle Daten entweder mit unveränderten 32-Bit-Ganzzahlen, vorzeichenbehafteten 64-Bit-Ganzzahlen oder Gleitkommazahlen mit doppelter Genauigkeit auf dem Server speichern. Wenn Ihr Server in PHP geschrieben ist, könnte die Behebung ein Upgrade Ihrer PHP-Version erfordern und Ihr Hardware-Upgrade auf x86_64 oder IA64. Wenn Sie auf anderer Hardware festsitzen, können Sie versuchen, 64-Bit-Hardware in einer 32-Bit-virtuellen Maschine zu emulieren, aber die meisten VMs unterstützen diese Art von Virtualisierung nicht, da die Stabilität leiden kann und die Leistung definitiv stark sinken wird.

### Das Y10k-Problem (oft clientseitig)

Auf vielen Servern werden Daten als Zahlen gespeichert, nicht als Zeichenfolgen - Zahlen fester Größe und unabhängig von Format (abgesehen von der Endianness). Nach dem Jahr 10.000 werden diese Zahlen einfach etwas größer sein als zuvor, sodass viele Server keine Probleme mit Formularen, die nach dem Jahr 10.000 eingereicht werden, haben werden.

Das Problem liegt auf der Client-Seite: die Interpretation von Daten mit mehr als 4 Ziffern im Jahr.

```html
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Wir müssen unseren Code auf jede Anzahl von Ziffern vorbereiten — nicht nur 5. Die folgende JavaScript-Funktion legt den Wert programmgesteuert fest:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Warum sich um das Y10k-Problem kümmern, wenn es viele Jahrhunderte nach Ihrem Tod auftreten wird? Genau weil Sie bereits tot sein werden, sodass die Unternehmen, die Ihre Software verwenden, ohne einen anderen Programmierer, der das System gut genug kennt, festsitzen werden, um es zu reparieren.

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} und {{HTMLElement("del")}}: siehe das `datetime`-Attribut, das entweder ein Datum oder ein lokales Datum und eine Uhrzeit angibt, zu dem der Inhalt eingefügt oder gelöscht wurde
- [Die ISO 8601 Spezifikation](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das JavaScript-Objekt {{jsxref("Date")}}
- Das [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) Objekt für die Formatierung von Daten und Zeiten für eine gegebene Spracheinstellung
