---
title: Datums- und Zeitformate in HTML
slug: Web/HTML/Date_and_time_formats
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{HTMLSidebar}}

Bestimmte HTML-Elemente verwenden Datums- und/oder Zeitwerte. Die Formate der Zeichenketten, die diese Werte spezifizieren, werden in diesem Artikel beschrieben.

Elemente, die solche Formate verwenden, umfassen bestimmte Formen des {{HTMLElement("input")}}-Elements, die es dem Benutzer ermöglichen, ein Datum, eine Zeit oder beides auszuwählen oder anzugeben, sowie die {{HTMLElement("ins")}}- und {{HTMLElement("del")}}-Elemente, deren [`datetime`](/de/docs/Web/HTML/Element/ins#datetime)-Attribut das Datum oder Datum und die Uhrzeit angibt, zu der das Einfügen oder Löschen von Inhalten erfolgt ist.

Für `<input>` sind die [`type`](/de/docs/Web/HTML/Element/input#type)-Werte von Eingaben, deren [`value`](/de/docs/Web/HTML/Element/input#value) eine Zeichenkette enthält, die ein Datum und/oder eine Zeit darstellt:

- [`date`](/de/docs/Web/HTML/Element/input/date)
- [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`month`](/de/docs/Web/HTML/Element/input/month)
- [`time`](/de/docs/Web/HTML/Element/input/time)
- [`week`](/de/docs/Web/HTML/Element/input/week)

## Beispiele

Bevor wir uns mit den Feinheiten der Darstellung und Analyse von Datums- und Zeitzeichenketten in HTML befassen, hier einige Beispiele, die Ihnen eine gute Vorstellung davon geben, wie die gebräuchlicheren Datums- und Zeitzeichenformate aussehen.

<table class="standard-table">
  <caption>
    Beispiel-HTML-Datums- und Zeitzeichenketten
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
      <td>3:40 Uhr am 4. August, 33</td>
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

Bevor wir uns die verschiedenen Formate von Datum- und zeitbezogenen Zeichenketten ansehen, die von HTML-Elementen verwendet werden, ist es hilfreich, einige grundlegende Fakten über die Art und Weise zu verstehen, wie sie definiert sind. HTML verwendet eine Variante des [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-Standards für seine Datums- und Zeitzeichenketten. Es ist empfehlenswert, die Beschreibungen der verwendeten Formate zu überprüfen, um sicherzustellen, dass Ihre Zeichenketten tatsächlich mit HTML kompatibel sind, da die HTML-Spezifikation Algorithmen zum Parsen dieser Zeichenketten enthält, die eigentlich präziser als ISO 8601 sind, sodass es subtile Unterschiede darin geben kann, wie Datums- und Zeitzeichenketten erwartet werden.

### Zeichensatz

Datum und Zeit in HTML sind immer Zeichenketten, die den {{Glossary("ASCII", "ASCII")}}-Zeichensatz verwenden.

### Jahreszahlen

Um das Grundformat für Datumszeichenketten in HTML zu vereinfachen, verlangt die Spezifikation, dass alle Jahre im modernen (oder **proleptischen**) [Gregorianischen Kalender](https://de.wikipedia.org/wiki/Gregorianischer_Kalender) angegeben werden. Während Benutzeroberflächen die Eingabe von Daten mit anderen Kalendern zulassen können, verwendet der zugrunde liegende Wert immer den Gregorianischen Kalender.

Obwohl der Gregorianische Kalender erst im Jahr 1582 eingeführt wurde (als Ersatz für den ähnlichen Julianischen Kalender), wird er für HTML-Zwecke bis zum Jahr 1 n. Chr. erweitert. Stellen Sie sicher, dass alle älteren Daten dies berücksichtigen.

Für HTML-Daten sind Jahreszahlen immer mindestens vier Ziffern lang; Jahre vor dem Jahr 1000 werden mit führenden Nullen (`0`) gepolstert, sodass das Jahr 72 als `0072` geschrieben wird. Jahre vor dem Jahr 1 n. Chr. werden nicht unterstützt, sodass HTML keine Jahre 1 v. Chr. (1 v. Chr.) oder früher unterstützt.

Ein Jahr ist normalerweise 365 Tage lang, außer in **[Schaltjahren](#schaltjahre)**.

#### Schaltjahre

Ein **Schaltjahr** ist jedes Jahr, das durch 400 teilbar ist _oder_ das Jahr ist durch 4 teilbar, aber nicht durch 100. Obwohl das Kalenderjahr normalerweise 365 Tage lang ist, dauert es tatsächlich etwa 365,2422 Tage, bis die Erde eine vollständige Umlaufbahn um die Sonne vollendet. Schaltjahre helfen dabei, den Kalender anzupassen, um ihn mit der tatsächlichen Position des Planeten in seiner Umlaufbahn in Einklang zu bringen. Das Hinzufügen eines Tages alle vier Jahre macht das durchschnittliche Jahr im Wesentlichen 365,25 Tage lang, was ziemlich nahe an der richtigen Zahl liegt.

Die Anpassungen des Algorithmus (ein Schaltjahr wird genommen, wenn das Jahr durch 400 teilbar ist, und Schaltjahre werden übersprungen, wenn das Jahr durch 100 teilbar ist) helfen, den Durchschnitt noch näher an die korrekte Anzahl von Tagen zu bringen (365,2425 Tage). Wissenschaftler fügen gelegentlich Schaltsekunden zum Kalender hinzu (wirklich), um die restlichen drei Zehntausendstel eines Tages zu bewältigen und um die allmählich, natürlich auftretende Verlangsamung der Erdrotation auszugleichen.

Während der Monat `02`, Februar, normalerweise 28 Tage hat, hat er in Schaltjahren 29 Tage.

### Monate des Jahres

Es gibt 12 Monate im Jahr, nummeriert von 1 bis 12. Sie werden immer durch eine zweistellige ASCII-Zeichenfolge dargestellt, deren Wert von `01` bis `12` reicht. Siehe die Tabelle im Abschnitt [Tage des Monats](#tage_des_monats) für die Monatsnummern und ihre entsprechenden Namen (und Längen in Tagen).

### Tage des Monats

Monatsnummern 1, 3, 5, 7, 8, 10 und 12 haben 31 Tage. Monate 4, 6, 9 und 11 haben 30 Tage. Monat 2, Februar, hat in den meisten Jahren 28 Tage, aber in Schaltjahren 29 Tage. Dies wird in der folgenden Tabelle detailliert dargestellt.

<table class="standard-table">
  <caption>
    Die Monate des Jahres und ihre Längen in Tagen
  </caption>
  <thead>
    <tr>
      <th scope="row">Monatsnummer</th>
      <th scope="col">Name (Deutsch)</th>
      <th scope="col">Dauer in Tagen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>Januar</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">02</th>
      <td>Februar</td>
      <td>28 (29 in Schaltjahren)</td>
    </tr>
    <tr>
      <th scope="row">03</th>
      <td>März</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">04</th>
      <td>April</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">05</th>
      <td>Mai</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">06</th>
      <td>Juni</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">07</th>
      <td>Juli</td>
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
      <td>Oktober</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>November</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Dezember</td>
      <td>31</td>
    </tr>
  </tbody>
</table>

## Wochenzeichenketten

Eine Wochenzeichenkette gibt eine Woche innerhalb eines bestimmten Jahres an. Eine **gültige Wochenzeichenkette** besteht aus einer gültigen [Jahreszahl](#jahreszahlen), gefolgt von einem Bindestrichzeichen (`-`, oder U+002D), dann dem Großbuchstaben `W` (U+0057), gefolgt von einem zweistelligen Wochenwert des Jahres.

Die Woche des Jahres ist eine zweistellige Zeichenfolge zwischen `01` und `53`. Jede Woche beginnt am Montag und endet am Sonntag. Das bedeutet, dass die ersten Tage des Januars als Teil des vorherigen Jahres angesehen werden können und die letzten Tage des Dezembers als Teil des folgenden Jahres. Die erste Woche des Jahres ist die Woche, die den _ersten Donnerstag des Jahres_ enthält. Beispielsweise war der erste Donnerstag des Jahres 1953 am 1. Januar, sodass diese Woche — beginnend am Montag, dem 29. Dezember — als die erste Woche des Jahres gilt. Daher fällt der 30. Dezember 1952 in die Woche `1953-W01`.

Ein Jahr hat 53 Wochen, wenn:

- Der erste Tag des Kalenderjahres (1. Januar) ein Donnerstag ist **oder**
- Der erste Tag des Jahres (1. Januar) ein Mittwoch ist und das Jahr ein [Schaltjahr](#schaltjahre) ist

Alle anderen Jahre haben 52 Wochen.

| Wochenzeichenkette | Woche und Jahr (Datumsbereich)                      |
| ------------------ | --------------------------------------------------- |
| `2001-W37`         | Woche 37, 2001 (10.-16. September 2001)             |
| `1953-W01`         | Woche 1, 1953 (29. Dezember 1952 - 4. Januar 1953)  |
| `1948-W53`         | Woche 53, 1948 (27. Dezember 1948 - 2. Januar 1949) |
| `1949-W01`         | Woche 1, 1949 (3.-9. Januar 1949)                   |
| `0531-W16`         | Woche 16, 531 (13.-19. April 531)                   |
| `0042-W04`         | Woche 4, 42 (21.-27. Januar 42)                     |

Beachten Sie, dass sowohl die Jahres- als auch die Wochenzahlen mit führenden Nullen gepolstert sind, wobei das Jahr auf vier Stellen und die Woche auf zwei Stellen gepolstert ist.

## Monatszeichenketten

Eine Monatszeichenkette repräsentiert einen bestimmten Monat in der Zeit, anstatt eines generischen Monats im Jahr. Das heißt, anstatt "Januar" darzustellen, repräsentiert eine HTML-Monatszeichenkette ein Paar aus Monat und Jahr, wie "Januar 1972".

Eine **gültige Monatszeichenkette** besteht aus einer gültigen [Jahreszahl](#jahreszahlen) (eine Zeichenfolge aus mindestens vier Ziffern), gefolgt von einem Bindestrich (`-`, oder U+002D), gefolgt von einer zweistelligen numerischen [Monatszahl](#monate_des_jahres), wobei `01` Januar und `12` Dezember repräsentiert.

| Monatszeichenkette | Monat und Jahr   |
| ------------------ | ---------------- |
| `17310-09`         | September, 17310 |
| `2019-01`          | Januar, 2019     |
| `1993-11`          | November, 1993   |
| `0571-04`          | April, 571       |
| `0001-07`          | Juli, 1 n. Chr.  |

Beachten Sie, dass alle Jahre mindestens vier Zeichen lang sind; Jahre, die weniger als vier Ziffern lang sind, werden mit führenden Nullen gepolstert.

## Datumszeichenketten

Eine gültige Datumszeichenkette besteht aus einer [Monatszeichenkette](#monatszeichenketten), gefolgt von einem Bindestrich (`-`, oder U+002D), gefolgt von einem zweistelligen [Tag des Monats](#tage_des_monats).

| Datumszeichenkette | Volles Datum     |
| ------------------ | ---------------- |
| `1993-11-01`       | 1. November 1993 |
| `1066-10-14`       | 14. Oktober 1066 |
| `0571-04-22`       | 22. April 571    |
| `0062-02-05`       | 5. Februar 62    |

## Zeitzeichenketten

Eine Zeitzeichenkette kann eine Zeit mit Präzision auf die Minute, Sekunde oder auf die Millisekunde angeben. Es ist nicht erlaubt, nur die Stunde oder Minute anzugeben. Eine **gültige Zeitzeichenkette** besteht mindestens aus einer zweistelligen Stunde, gefolgt von einem Doppelpunkt (`:`, U+003A), dann einer zweistelligen Minute. Die Minute kann optional gefolgt von einem weiteren Doppelpunkt und einer zweistelligen Anzahl von Sekunden sein. Millisekunden können optional spezifiziert werden, indem nach der Sekundenkomponente der Zeitzeichenkette ein Dezimalpunktzeichen (`.`, U+002E) gefolgt von einer, zwei oder drei Ziffern hinzugefügt wird.

Es gibt einige zusätzliche Grundregeln:

- Die Stunde wird immer im 24-Stunden-Format angegeben, wobei `00` Mitternacht und 23.00 Uhr mit `23` ist. Keine Werte außerhalb des Bereichs `00` – `23` sind zulässig.
- Die Minute muss eine zweistellige Zahl zwischen `00` und `59` sein. Keine Werte außerhalb dieses Bereichs sind erlaubt.
- Falls die Anzahl der Sekunden weggelassen wird (um nur eine Zeit auf die Minute genau anzugeben), darf kein Doppelpunkt nach der Anzahl der Minuten angegeben werden.
- Wenn angegeben, muss der ganzzahlige Teil der Anzahl der Sekunden zwischen `00` und `59` liegen. Sie _können_ keine Schaltsekunden angeben, indem Sie Werte wie `60` oder `61` verwenden.
- Wenn die Anzahl der Sekunden als Ganzzahl angegeben wird, darf sie nicht durch einen Dezimalpunkt gefolgt werden.
- Wenn ein Bruchteil einer Sekunde enthalten ist, kann er von einer bis drei Ziffern lang sein, was die Anzahl der Millisekunden anzeigt. Dies folgt nach dem Dezimalzeichen, das nach der Sekundenkomponente der Zeitzeichenkette platziert wird.

| Zeitzeichenkette | Zeit                                              |
| ---------------- | ------------------------------------------------- |
| `00:00:30.75`    | 00:00:30.75 Uhr (30,75 Sekunden nach Mitternacht) |
| `12:15`          | 12:15 Uhr                                         |
| `13:44:25`       | 13:44:25 Uhr (25 Sekunden nach 13:44 Uhr)         |

## Lokale Datums- und Zeitzeichenketten

Eine gültige [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)-Zeichenkette besteht aus einer `Date`-Zeichenkette und einer `Time`-Zeichenkette, die zusammen mit entweder dem Buchstaben `T` oder einem Leerzeichen getrennt sind. Keine Informationen über die Zeitzone sind in der Zeichenkette enthalten; das Datum und die Zeit werden als in der lokalen Zeitzone des Benutzers liegend angenommen.

Wenn Sie den [`value`](/de/docs/Web/HTML/Element/input#value) eines `datetime-local`-Inputs festlegen, wird die Zeichenkette in eine Standardform **normalisiert**. Normalisierte `datetime`-Zeichenketten verwenden immer den Buchstaben `T`, um das Datum und die Zeit zu trennen, und der Zeitteil der Zeichenkette ist so kurz wie möglich. Dies erfolgt, indem die Sekundenkomponente weggelassen wird, wenn ihr Wert `:00` ist.

<table class="standard-table">
  <caption>
    Beispiele für gültige
    <code>datetime-local</code>
    Zeichenketten
  </caption>
  <thead>
    <tr>
      <th scope="col">Datum/Uhrzeit-Zeichenkette</th>
      <th scope="col">Normalisierte Datum/Uhrzeit-Zeichenkette</th>
      <th scope="col">Tatsächliche Datum und Zeit</th>
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
          Beachten Sie, dass nach der Normalisierung die gleiche Zeichenkette wie die vorherige
          <code>datetime-local</code>-Zeichenkette resultiert. Der Leerraum wurde durch
          den <code>T</code>-Buchstaben ersetzt und die nachstehende Null im Bruchteil
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
          Beachten Sie, dass in der normalisierten Form dieses Datums
          das <code>:00</code>, das die Anzahl der Sekunden als Null angibt, weggelassen wird,
          weil die Sekunden optional sind, wenn sie Null sind, und die normalisierte Zeichenkette
          die Länge der Zeichenkette minimiert.
        </p>
      </td>
      <td>31. Juli 170 um 22:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Globale Datums- und Zeitzeichenketten

Eine globale Datums- und Zeitzeichenkette gibt ein Datum und eine Zeit sowie die Zeitzone an, in der sie auftreten. Eine **gültige globale Datums- und Zeitzeichenkette** hat dasselbe Format wie eine [lokale Datums- und Zeitzeichenkette](#lokale_datums-_und_zeitzeichenketten), jedoch wird am Ende, nach der Zeit, eine Zeitzonenzeichenkette hinzugefügt.

### Zeitzonenoffset-Zeichenkette

Eine Zeitzonenoffset-Zeichenkette gibt den Offset in entweder einer positiven oder negativen Anzahl von Stunden und Minuten von der Standardzeitbasis an. Es gibt zwei Standardzeitbasen, die sich sehr ähnlich sind, aber nicht genau die gleichen:

- Für Daten nach der Einrichtung von [Koordinierten Weltzeit](https://de.wikipedia.org/wiki/Koordinierte_Weltzeit) (UTC) in den frühen 1960er Jahren ist die Zeitbasis `Z` und der Offset gibt den Offset einer bestimmten Zeitzone von der Zeit auf dem Nullmeridian bei 0º Längengrad an (der durch das königliche Observatorium in Greenwich, England, verläuft).
- Für Daten vor der UTC wird die Zeitbasis stattdessen in Bezug auf [UT1](https://de.wikipedia.org/w/index.php?title=UT1) ausgedrückt, das die gegenwärtige Erdsolzeit am Nullmeridian ist.

Die Zeitzonenzeichenfolge wird direkt nach der Zeit in der Datums- und Zeitzeichenkette hinzugefügt. Sie können `Z` als Zeitzonenoffset-Zeichenfolge angeben, um anzugeben, dass die Zeit in UTC angegeben wird. Andernfalls wird die Zeitzonenzeichenfolge wie folgt konstruiert:

1. Ein Zeichen, das das Vorzeichen des Offsets angibt: das Pluszeichen (`+`, oder U+002B) für Zeitzonen östlich des Nullmeridians oder das Minuszeichen (`-`, oder U+002D) für Zeitzonen westlich des Nullmeridians.
2. Eine zweistellige Anzahl von Stunden, um die die Zeitzone vom Nullmeridian verschoben ist. Dieser Wert muss zwischen `00` und `23` liegen.
3. Ein optionales Doppelpunktzeichen (`:`).
4. Eine zweistellige Anzahl von Minuten nach der Stunde; dieser Wert muss zwischen `00` und `59` liegen.

Während dieses Format Zeitzonen zwischen -23:59 und +23:59 zulässt, liegt der aktuelle Bereich der Zeitzonenverschiebungen zwischen -12:00 und +14:00, und keine Zeitzonen sind derzeit um etwas anderes als `00`, `30` oder `45` Minuten versetzt. Dies kann sich jederzeit ändern, da die Länder jederzeit und in irgendeiner Weise ihre Zeitzonen ändern können, wie sie wollen.

<table class="no-markdown">
  <caption>
    Beispiele für gültige globale Datums- und Zeitzeichenketten
  </caption>
  <thead>
    <tr>
      <th scope="col">Globale Datums- und Zeitzeichenkette</th>
      <th scope="col">Tatsächliche globale Datum und Zeit</th>
      <th scope="col">Datum und Zeit am Nullmeridian</th>
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

## Probleme mit Datumsangaben

Aufgrund von Datenspeicher- und Präzisionsproblemen sollten Sie sich einige clientseitige und serverseitige Probleme bewusst machen.

### Das Y2K38-Problem (oft serverseitig)

JavaScript verwendet doppelte Genauigkeit für Fließkommazahlen zur Speicherung von Daten, wie bei allen Zahlen, was bedeutet, dass JavaScript-Code nicht unter dem Y2K38-Problem leidet, es sei denn, Ganzzahlen-Zwangsbedingungen/Bit-Tricks werden verwendet, da alle JavaScript-Bitoperatoren 32-Bit-Zweierkomplement-Ganzzahlen verwenden.

Das Problem liegt auf der Serverseite: Speicherung von Daten größer als 2^31 - 1. Um dieses Problem zu beheben, müssen Sie alle Daten mit entweder unsigned 32-Bit-Ganzzahlen, signed 64-Bit-Ganzzahlen oder doppelt präzisen Fließkommazahlen auf dem Server speichern. Wenn Ihr Server in PHP geschrieben ist, kann die Reparatur ein Upgrade Ihrer PHP auf eine neuere Version erfordern, sowie ein Upgrade Ihrer Hardware auf x86_64 oder IA64. Wenn Sie mit anderer Hardware feststecken, können Sie versuchen, 64-Bit-Hardware innerhalb einer 32-Bit-virtuellen Maschine zu emulieren, aber die meisten VMs unterstützen diese Art der Virtualisierung nicht, da die Stabilität leiden könnte und die Leistung erheblich beeinträchtigt werden wird.

### Das Y10k-Problem (oft clientseitig)

In vielen Servern werden Daten als Zahlen statt als Zeichenketten gespeichert - Zahlen von fester Größe und ohne Rücksicht auf das Format (abgesehen von der Byteordnung). Nach dem Jahr 10.000 werden diese Zahlen nur ein wenig größer sein als zuvor, daher werden viele Server keine Probleme mit Formularen, die nach dem Jahr 10.000 eingereicht wurden, erleben.

Das Problem liegt auf der Clientseite: Parsing von Daten mit mehr als 4 Ziffern im Jahr.

```html
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Wir müssen unseren Code für eine beliebige Anzahl von Ziffern — nicht nur fünf — vorbereiten. Die folgende JavaScript-Funktion setzt den Wert programmatisch:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Warum sich um das Y10K-Problem sorgen, wenn es weit nach Ihrem Tod auftreten wird? Gerade weil Sie dann schon tot sein werden und die Unternehmen, die Ihre Software nutzen, Ihre Software einsetzen werden, ohne dass ein anderer Programmierer das System gut genug kennt, um es zu lösen.

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} und {{HTMLElement("del")}}: siehe das `datetime`-Attribute, welches entweder ein Datum oder ein lokales Datum und Uhrzeit angibt, zu dem der Inhalt eingefügt oder gelöscht wurde
- [Die ISO 8601 Spezifikation](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Darstellung von Daten & Uhrzeiten](/de/docs/Web/JavaScript/Guide/Representing_dates_times) im [JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das JavaScript-{{jsxref("Date")}}-Objekt
- Das [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)-Objekt zur Formatierung von Datum und Uhrzeit für eine bestimmte Locale
