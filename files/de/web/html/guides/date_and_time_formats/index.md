---
title: Verwendung von Datums- und Zeitformaten in HTML
short-title: Datums- und Zeitformate
slug: Web/HTML/Guides/Date_and_time_formats
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Bestimmte HTML-Elemente verwenden Datums- und/oder Zeitwerte. Die Formate der Zeichenfolgen, die diese Werte angeben, werden in diesem Artikel beschrieben.

Elemente, die solche Formate verwenden, umfassen bestimmte Formen des {{HTMLElement("input")}}-Elements, die es dem Benutzer ermöglichen, ein Datum, eine Zeit oder beides auszuwählen oder anzugeben, sowie die {{HTMLElement("ins")}}- und {{HTMLElement("del")}}-Elemente, deren [`datetime`](/de/docs/Web/HTML/Reference/Elements/ins#datetime)-Attribut das Datum oder Datum und Uhrzeit angibt, zu dem die Einfügung oder Löschung von Inhalten erfolgt ist.

Für `<input>` sind die [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Werte von Eingaben, deren [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eine Zeichenfolge mit einem Datum und/oder einer Uhrzeit enthält:

- [`date`](/de/docs/Web/HTML/Reference/Elements/input/date)
- [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`month`](/de/docs/Web/HTML/Reference/Elements/input/month)
- [`time`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [`week`](/de/docs/Web/HTML/Reference/Elements/input/week)

## Beispiele

Bevor wir uns den Feinheiten der Schreibweise und Analyse von Datums- und Zeitzeichenfolgen in HTML widmen, finden Sie hier einige Beispiele, die Ihnen ein gutes Verständnis davon vermitteln sollten, wie die gebräuchlichsten Formate von Datums- und Zeitzeichenfolgen aussehen.

<table class="standard-table">
  <caption>
    Beispiel-HTML-Datums- und Zeitzeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Zeichenfolge</th>
      <th colspan="2" scope="col">Datum und/oder Zeit</th>
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

Bevor Sie sich die verschiedenen Formate von Datums- und Zeitzeichenfolgen ansehen, die von HTML-Elementen verwendet werden, ist es hilfreich, einige grundlegende Fakten darüber zu verstehen, wie sie definiert sind. HTML verwendet eine Variation des [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Standards für seine Datums- und Zeitzeichenfolgen. Es lohnt sich, die Beschreibungen der verwendeten Formate zu überprüfen, um sicherzustellen, dass Ihre Zeichenfolgen tatsächlich mit HTML kompatibel sind, da die HTML-Spezifikation Algorithmen zum Parsen dieser Zeichenfolgen enthält, die tatsächlich präziser sind als ISO 8601, was zu subtilen Unterschieden in der erwarteten Darstellung von Datums- und Zeitzeichenfolgen führen kann.

### Zeichensatz

Daten und Uhrzeiten in HTML sind immer Zeichenfolgen, die den {{Glossary("ASCII", "ASCII")}}-Zeichensatz verwenden.

### Jahreszahlen

Um das grundlegende Format der in HTML verwendeten Datumszeichenfolgen zu vereinfachen, verlangt die Spezifikation, dass alle Jahre unter Verwendung des modernen (oder **proleptischen**) [gregorianischen Kalenders](https://en.wikipedia.org/wiki/Gregorian_calendar) angegeben werden. Während Benutzeroberflächen die Eingabe von Daten in anderen Kalendern zulassen können, verwendet der zugrundeliegende Wert immer den gregorianischen Kalender.

Obwohl der gregorianische Kalender erst im Jahr 1582 erschaffen wurde (er ersetzte den ähnlichen julianischen Kalender), wird für HTML-Zwecke der gregorianische Kalender auf das Jahr 1 n. Chr. erweitert. Stellen Sie sicher, dass ältere Daten dies berücksichtigen.

Für HTML-Daten sind die Jahre immer mindestens vier Ziffern lang; Jahre vor dem Jahr 1000 werden mit führenden Nullen (`0`) aufgefüllt, sodass das Jahr 72 als `0072` geschrieben wird. Jahre vor dem Jahr 1 n. Chr. werden nicht unterstützt, daher unterstützt HTML keine Jahre 1 v. Chr. (1 v. u. Z.) oder früher.

Ein Jahr ist normalerweise 365 Tage lang, außer in **[Schaltjahren](#schaltjahre)**.

#### Schaltjahre

Ein **Schaltjahr** ist jedes Jahr, das durch 400 teilbar _oder_ ist und durch 4, aber nicht durch 100 teilbar ist. Obwohl das Kalenderjahr normalerweise 365 Tage lang ist, benötigt der Planet Erde tatsächlich etwa 365,2422 Tage, um eine vollständige Umlaufbahn um die Sonne zu vollführen. Schaltjahre helfen dabei, den Kalender anzupassen, um ihn mit der tatsächlichen Position des Planeten in seiner Umlaufbahn zu synchronisieren. Indem alle vier Jahre ein Tag zum Jahr hinzugefügt wird, beträgt ein durchschnittliches Jahr 365,25 Tage, was fast korrekt ist.

Die Anpassungen des Algorithmus (ein Schaltjahr bei durch 400 teilbaren Jahren zu nehmen und Schaltjahre bei durch 100 teilbaren Jahren zu überspringen) helfen, den Durchschnitt noch näher an die korrekte Anzahl von Tagen (365.2425 Tage) zu bringen. Wissenschaftler fügen gelegentlich (tatsächlich) Schaltsekunden zum Kalender hinzu, um die verbleibenden drei Zehntausendstel eines Tages zu berücksichtigen und die allmähliche, natürlich auftretende Verzögerung der Erdrotation auszugleichen.

Während der Monat `02`, Februar, normalerweise 28 Tage hat, hat er in Schaltjahren 29 Tage.

### Monate des Jahres

Es gibt 12 Monate im Jahr, nummeriert von 1 bis 12. Sie werden immer durch eine zweistellige ASCII-Zeichenfolge dargestellt, deren Wert von `01` bis `12` reicht. Siehe die Tabelle im Abschnitt [Tage des Monats](#tage_des_monats) für die Monatszahlen und ihre entsprechenden Namen (und Längen in Tagen).

### Tage des Monats

Die Monatsnummern 1, 3, 5, 7, 8, 10 und 12 sind 31 Tage lang. Die Monate 4, 6, 9 und 11 sind 30 Tage lang. Der Monat 2, Februar, hat in den meisten Jahren 28 Tage, in Schaltjahren jedoch 29 Tage. Dies ist in der folgenden Tabelle detailliert dargestellt.

<table class="standard-table">
  <caption>
    Die Monate des Jahres und ihre Längen in Tagen
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

Eine Wochenzeichenfolge gibt eine Woche innerhalb eines bestimmten Jahres an. Eine **gültige Wochenzeichenfolge** besteht aus einer gültigen [Jahreszahl](#jahreszahlen), gefolgt von einem Bindestrichzeichen (`-`, oder U+002D), dann der Großbuchstabe `W` (U+0057), gefolgt von einer Zwei-Ziffern-Woche des Jahr-Wertes.

Die Woche des Jahres ist eine zweiziffrige Zeichenfolge zwischen `01` und `53`. Jede Woche beginnt am Montag und endet am Sonntag. Das bedeutet, dass es möglich ist, dass die ersten paar Tage im Januar als Teil des vorhergehenden Wochennummerierung-Jahres angesehen werden und die letzten paar Tage im Dezember als Teil des folgenden Wochennummerierung-Jahres gelten. Die erste Woche des Jahres ist die Woche, die den _ersten Donnerstag des Jahres_ enthält. Zum Beispiel war der erste Donnerstag des Jahres 1953 am 1. Januar, sodass diese Woche – beginnend am Montag, dem 29. Dezember – als die erste Woche des Jahres gilt. Daher fällt der 30. Dezember 1952 in die Woche `1953-W01`.

Ein Jahr hat 53 Wochen, wenn:

- Der erste Tag des Kalenderjahres (1. Januar) ein Donnerstag ist **oder**
- Der erste Tag des Jahres (1. Januar) ein Mittwoch ist und das Jahr ein [Schaltjahr](#schaltjahre) ist

Alle anderen Jahre haben 52 Wochen.

| Wochenzeichenfolge | Woche und Jahr (Datumsbereich)                    |
| ------------------ | ------------------------------------------------- |
| `2001-W37`         | Woche 37, 2001 (10.–16. September 2001)           |
| `1953-W01`         | Woche 1, 1953 (29. Dezember 1952–4. Januar 1953)  |
| `1948-W53`         | Woche 53, 1948 (27. Dezember 1948–2. Januar 1949) |
| `1949-W01`         | Woche 1, 1949 (3.–9. Januar 1949)                 |
| `0531-W16`         | Woche 16, 531 (13.–19. April 531)                 |
| `0042-W04`         | Woche 4, 42 (21.–27. Januar 42)                   |

Beachten Sie, dass sowohl die Jahres- als auch die Wochenzahlen mit führenden Nullen aufgefüllt sind, wobei das Jahr auf vier Ziffern und die Woche auf zwei Ziffern gepolstert ist.

## Monatszeichenfolgen

Eine Monatszeichenfolge repräsentiert einen bestimmten Monat in der Zeit, anstatt einen generischen Monat des Jahres. Das heißt, anstatt "Januar" darzustellen, repräsentiert eine HTML-Monatszeichenfolge ein Paar aus Monat und Jahr, wie "Januar 1972".

Eine **gültige Monatszeichenfolge** besteht aus einer gültigen [Jahreszahl](#jahreszahlen) (eine Zeichenfolge von mindestens vier Ziffern), gefolgt von einem Bindestrichzeichen (`-`, oder U+002D), gefolgt von einer zweistelligen numerischen [Monatszahl](#monate_des_jahres), wobei `01` den Januar und `12` den Dezember repräsentiert.

| Monatszeichenfolge | Monat und Jahr  |
| ------------------ | --------------- |
| `17310-09`         | September, 17310 |
| `2019-01`          | Januar, 2019     |
| `1993-11`          | November, 1993   |
| `0571-04`          | April, 571       |
| `0001-07`          | Juli, 1 n. Chr.  |

Beachten Sie, dass alle Jahre mindestens vier Zeichen lang sind; Jahre, die kürzer als vier Ziffern sind, werden mit führenden Nullen aufgefüllt.

## Datumszeichenfolgen

Eine gültige Datumszeichenfolge besteht aus einer [Monatszeichenfolge](#monatszeichenfolgen), gefolgt von einem Bindestrichzeichen (`-`, oder U+002D), gefolgt von einem zweistelligen [Tag des Monats](#tage_des_monats).

| Datumszeichenfolge | Gesamtes Datum   |
| ------------------ | ---------------- |
| `1993-11-01`       | 1. November 1993 |
| `1066-10-14`       | 14. Oktober 1066 |
| `0571-04-22`       | 22. April 571    |
| `0062-02-05`       | 5. Februar 62    |

## Zeitzeichenfolgen

Eine Zeitzeichenfolge kann eine Zeit mit Präzision auf die Minute, Sekunde oder Millisekunde angeben. Es ist nicht erlaubt, nur die Stunde oder Minute anzugeben. Eine **gültige Zeitzeichenfolge** besteht mindestens aus einer zweistelligen Stunde, gefolgt von einem Doppelpunkt (`:`, U+003A), dann eine zweistellige Minute. Die Minute kann optional von einem weiteren Doppelpunkt und einer zweistelligen Zahl von Sekunden gefolgt werden. Millisekunden können optional angegeben werden, indem ein Dezimalpunktzeichen (`.`, U+002E) folgt, gefolgt von ein, zwei oder drei Ziffern.

Es gibt einige zusätzliche Grundregeln:

- Die Stunde wird immer mit der 24-Stunden-Uhr angegeben, wobei `00` Mitternacht und 23 Uhr `23` ist. Keine Werte außerhalb des Bereichs `00` – `23` sind erlaubt.
- Die Minute muss eine zweistellige Zahl zwischen `00` und `59` sein. Keine Werte außerhalb dieses Bereichs sind erlaubt.
- Wenn die Anzahl der Sekunden weggelassen wird (um eine Zeit nur bis zur Minute genau anzugeben), sollte kein Doppelpunkt der Anzahl der Minuten folgen.
- Wenn angegeben, muss der Ganzzahlteil der Anzahl der Sekunden zwischen `00` und `59` liegen. Sie _dürfen_ keine Schaltsekunden angeben, indem Sie Werte wie `60` oder `61` verwenden.
- Wenn die Anzahl der Sekunden angegeben und ganzzahlig ist, darf sie nicht von einem Dezimalpunkt gefolgt werden.
- Wenn ein Bruchteil einer Sekunde enthalten ist, darf dieser ein bis drei Stellen lang sein, was die Anzahl der Millisekunden angibt. Er folgt dem Dezimalpunkt nach der Sekundenzahl der Zeitzeichenkette.

| Zeitzeichenfolge   | Zeit                                           |
| ------------------ | ---------------------------------------------- |
| `00:00:30.75`      | 00:00:30.75 Uhr (30,75 Sekunden nach Mitternacht) |
| `12:15`            | 12:15 Uhr                                      |
| `13:44:25`         | 13:44:25 Uhr (25 Sekunden nach 13:44 Uhr)      |

## Lokale Datums- und Zeitzeichenfolgen

Eine gültige [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)-Zeichenfolge besteht aus einer `date`-Zeichenfolge und einer `time`-Zeichenfolge, die entweder mit dem Buchstaben `T` oder einem Leerzeichen getrennt sind. Es sind keine Informationen über die Zeitzone in der Zeichenfolge enthalten; das Datum und die Uhrzeit werden als in der lokalen Zeitzone des Benutzers angenommen.

Wenn Sie den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines `datetime-local`-Eingabefelds festlegen, wird die Zeichenfolge in eine Standardform **normalisiert**. Normalisierte `datetime`-Zeichenfolgen verwenden immer den Buchstaben `T`, um das Datum und die Zeit zu trennen, und der Zeitanteil der Zeichenkette ist so kurz wie möglich. Dies wird erreicht, indem der Sekundenanteil weggelassen wird, wenn sein Wert `:00` ist.

<table class="standard-table">
  <caption>
    Beispiele für gültige
    <code>datetime-local</code>
    -Zeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Datums-/Zeitzeichenfolge</th>
      <th scope="col">Normalisierte Datums-/Zeitzeichenfolge</th>
      <th scope="col">Tatsächliches Datum und Zeit</th>
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
          Beachten Sie, dass nach der Normalisierung dies derselbe String wie der vorherige
          <code>datetime-local</code>-String ist. Der Leerraum wurde durch
          das <code>T</code>-Zeichen ersetzt und die nachstellende Null im Bruchteil
          einer Sekunde wurde entfernt, um die Zeichenkette so kurz wie möglich zu machen.
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
          <code>:00</code> weglässt, das die Anzahl der Sekunden auf null angibt,
          da die Sekunden optional sind, wenn sie null sind, und die normalisierte Zeichenfolge
          minimiert die Länge der Zeichenkette.
        </p>
      </td>
      <td>31. Juli 170 um 22:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Globale Datums- und Zeitzeichenfolgen

Eine globale Datums- und Zeitzeichenfolge gibt ein Datum und eine Uhrzeit sowie die Zeitzone an, in der sie auftritt. Eine **gültige globale Datums- und Zeitzeichenfolge** hat dasselbe Format wie eine [lokale Datums- und Zeitzeichenfolge](#lokale_datums-_und_zeitzeichenfolgen), mit dem Unterschied, dass am Ende ein Zeitzonenstring angehängt ist, der der Zeit folgt.

### Zeitzonenoffset-Zeichenfolge

Eine Zeitzonenoffset-Zeichenfolge gibt den Offset in entweder einer positiven oder negativen Anzahl von Stunden und Minuten von der Standardzeitbasis an. Es gibt zwei Standardzeitbasen, die sehr ähnlich, aber nicht genau gleich sind:

- Für Daten nach der Einführung der [Koordinierten Weltzeit (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) Anfang der 1960er Jahre ist die Zeitbasis `Z` und der Offset gibt den Versatz einer bestimmten Zeitzone von der Zeit am Nullmeridian bei 0º Länge (der durch das Royal Observatory in Greenwich, England, verläuft) an.
- Für Daten vor der UTC wird die Zeitbasis stattdessen in Bezug auf [UT1](https://en.wikipedia.org/wiki/UT1) ausgedrückt, die die zeitgemäße Erd-Sonnen-Zeit am Nullmeridian ist.

Der Zeitzonenstring wird unmittelbar nach der Zeit in der Datums- und Zeitzeichenfolge angehängt. Sie können `Z` als Zeitzonenoffset-Zeichenfolge angeben, um anzuzeigen, dass die Zeit in UTC angegeben wird. Andernfalls wird der Zeitzonenstring wie folgt konstruiert:

1. Ein Zeichen, das das Vorzeichen des Offsets angibt: das Pluszeichen (`+`, oder U+002B) für Zeitzonen östlich des Nullmeridians oder das Minuszeichen (`-`, oder U+002D) für Zeitzonen westlich des Nullmeridians.
2. Eine zweistellige Anzahl von Stunden, um die die Zeitzone vom Nullmeridian versetzt ist. Dieser Wert muss zwischen `00` und `23` liegen.
3. Ein optionales Doppelpunktzeichen (`:`).
4. Eine zweistellige Zahl von Minuten nach der Stunde; dieser Wert muss zwischen `00` und `59` liegen.

Während dieses Format Zeitzonen zwischen -23:59 und +23:59 zulässt, liegt der aktuelle Bereich der Zeitzonenausnahmen bei -12:00 bis +14:00, und keine Zeitzonen sind derzeit von der Stunde um etwas anderes als `00`, `30` oder `45` Minuten versetzt. Dies kann sich jederzeit mehr oder weniger ändern, da es den Ländern freisteht, ihre Zeitzonen jederzeit und in jeder gewünschten Weise zu ändern.

<table class="no-markdown">
  <caption>
    Beispiele für gültige globale Datums- und Zeitzeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Globale Datums- und Zeitzeichenfolge</th>
      <th scope="col">Tatsächliches globales Datum und Zeit</th>
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
        22. August 1789 um ein Zehntel einer Sekunde nach 12:30 Uhr Eastern Daylight
        Time (EDT)
      </td>
      <td>22. August 1789 um ein Zehntel einer Sekunde nach 16:30 Uhr</td>
    </tr>
    <tr>
      <td><code>3755-01-01 00:00+10:00</code></td>
      <td>
        1. Januar 3755 um Mitternacht australische Oststandardzeit (AEST)
      </td>
      <td>31. Dezember 3754 um 14:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Datumsprobleme

Aufgrund von Datenspeicher- und Präzisionsproblemen sollten Sie sich einiger client- und serverseitiger Probleme bewusst sein.

### Das Y2K38-Problem (häufig serverseitig)

JavaScript verwendet Gleitkommazahlen mit doppelter Präzision, um Daten, wie auch alle Zahlen, zu speichern, was bedeutet, dass JavaScript-Code nicht unter dem Y2K38-Problem leidet, es sei denn, es werden Ganzzahlerzwungen/Bit-Tricks verwendet, da alle JavaScript-Bit-Operatoren 32-Bit-Ganzzahlen mit Zweierkomplementvorzeichen verwenden.

Das Problem liegt bei der Serverseite: Speicherung von Daten größer als 2^31 - 1. Um dieses Problem zu beheben, müssen Sie alle Daten entweder mit vorzeichenlosen 32-Bit-Ganzzahlen, vorzeichenbehafteten 64-Bit-Ganzzahlen oder Gleitkomma-Doppelzahlen auf dem Server speichern. Wenn Ihr Server in PHP geschrieben ist, kann die Lösung erfordern, dass Sie Ihr PHP auf eine neuere Version aktualisieren und Ihre Hardware auf x86_64 oder IA64 aufrüsten. Wenn Sie auf andere Hardware beschränkt sind, können Sie versuchen, 64-Bit-Hardware in einer 32-Bit-virtuellen Maschine zu emulieren, aber die meisten VMs unterstützen diese Art der Virtualisierung nicht, da die Stabilität darunter leiden könnte und die Leistung definitiv stark leiden wird.

### Das Y10K-Problem (häufig clientseitig)

Auf vielen Servern werden Daten als Zahlen anstelle von Strings gespeichert – Zahlen mit fester Größe und Format-unabhängig (abgesehen von der Endianess). Nach dem Jahr 10.000 werden diese Zahlen einfach etwas größer als zuvor sein, sodass viele Server keine Probleme mit Formularen sehen, die nach dem Jahr 10.000 eingereicht werden.

Das Problem liegt bei der Clientseite: Parsen von Daten mit mehr als 4 Ziffern im Jahr.

```html
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Wir müssen unseren Code auf jede Anzahl von Ziffern vorbereiten – nicht nur auf 5. Die folgende JavaScript-Funktion setzt den Wert programmgesteuert:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Warum sich um das Y10K-Problem sorgen, wenn es viele Jahrhunderte nach Ihrem Tod passieren wird? Genau deshalb, weil Sie dann bereits tot sind, so dass die Unternehmen, die Ihre Software verwenden, mit Ihrer Software feststecken werden, ohne dass ein anderer Programmierer das System gut genug kennt, um es zu betreten und zu reparieren.

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} und {{HTMLElement("del")}}: siehe das `datetime`-Attribut, das entweder ein Datum oder ein lokales Datum und eine lokale Uhrzeit angibt, zu dem der Inhalt eingefügt oder gelöscht wurde
- [Die ISO 8601 Spezifikation](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Darstellung von Daten & Zeiten](/de/docs/Web/JavaScript/Guide/Representing_dates_times) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das JavaScript {{jsxref("Date")}}-Objekt
- Das [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)-Objekt zum Formatieren von Daten und Zeiten für eine bestimmte Lokalisierung
