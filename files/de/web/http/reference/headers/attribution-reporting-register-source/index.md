---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Response-Header")}} registriert ein Seitenfeature als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources).
Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält. Er stellt die Informationen bereit, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die in diesem Header enthaltenen Informationen bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) inkludiert hat, wird der `Attribution-Reporting-Register-Source` Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Register-Source: <json-string>
```

## Direktiven

- `<json-string>`
  - : Eine JSON-Zeichenkette, die die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Verfügbare Felder sind wie folgt:
    - `"source_event_id"` {{optional_inline}}
      - : Eine Zeichenkette, die eine ID für die Attributionsquelle darstellt. Diese kann verwendet werden, um sie mit anderen Informationen zu verknüpfen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Reporting-Endpunkt zu aggregieren. Die Zeichenkette muss ausschließlich aus einer in Basis-10 formatierten 64-Bit-Unsigned-Integer bestehen.
    - `"destination"`
      - : Eine einzelne Zeichenkette oder ein Array von 1–3 Zeichenketten. Diese Zeichenketten müssen eine vollständige URL enthalten, die der Seite (Schema + {{Glossary("eTLD", "eTLD+1")}}) entspricht, auf der ein Trigger erwartet wird. Sie werden verwendet, um den Attribution-Trigger mit der Quelle abzugleichen, wenn ein Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das vom Nutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, unter denen Berichtswerte aggregiert werden sollen.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in aggregierten Berichten enthalten werden (dies wird als **Report-Window** bezeichnet). Wenn nicht gesetzt, wird standardmäßig der `"expiry"`-Wert verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine in Basis-10 formatierte 64-Bit-Unsigned-Integer, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht erstellen möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um zu spezifizieren, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die größer oder gleich `0` ist und die Menge an [Rauschen, das zu Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports), kontrolliert. Kleinere Epsilon-Werte führen zu mehr Rauschen und bieten daher einen höheren Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen Maximal- und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle zugewiesen werden, um Event-Level-Berichte zu erzeugen (dies wird als **Report-Window** bezeichnet). Wenn nicht gesetzt, fällt das Event-Report-Window auf den `"expiry"`-Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, andernfalls schlägt die Quellregistrierung fehl.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfeldern darstellt, beginnend bei `"start_time"`, wobei Berichte für diese Quelle nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtslieferung über mehrere Berichte hinweg zu variieren. Wenn nicht gesetzt, fällt das Event-Report-Window auf den `"expiry"`-Wert zurück. Die Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfelder spezifiziert. Wenn nicht angegeben, wird standardmäßig `0` verwendet.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Berichtsfelder angeben. Die Werte müssen aufsteigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, andernfalls schlägt die Quellregistrierung fehl.
    - `"expiry"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger werden dieser Quelle nicht mehr zugewiesen). Die maximal zulässige Ablaufzeit ist 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte erzeugen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` (einschließlich), die die Gesamtzahl der Event-Level-Berichte angibt, die diese Quelle erzeugen kann. Sobald dieses Maximum erreicht ist, ist die Quelle nicht mehr in der Lage, neue Daten zu erzeugen. Wenn nicht angegeben, lautet der Standardwert für `"max_event_level_reports"` `3` für navigationsbasierte Quellen und `1` für eventbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Eine Zeichenkette, die einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konversionen der zuletzt übereinstimmenden Quelle zugewiesen. Für sowohl Event-Level- als auch Zusammenfassungsberichte setzen Sie eine höhere Priorität, um spezifische Quellen zu priorisieren. Beispielsweise erhält ein Wert von `2` Vorrang gegenüber dem Standardwert von `1`. Siehe [Berichtspioritäten und Limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
    - `"trigger_data"` {{optional_inline}}
      - : Ein Array von 32-Bit-Unsigned-Integers, die Daten darstellen, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel, "Benutzer hat Artikel zum Einkaufswagen hinzugefügt" oder "Benutzer hat sich für den Newsletter angemeldet" könnten Aktionen sein, die auf der Triggereite passieren, die mit dieser Quelle übereinstimmen und eine Art Konversion anzeigen, die der Werbetreibende zu messen versucht. Diese müssen gegen `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) für die Event-Level-Attribution angegeben sind. Wenn weggelassen, wird `"trigger_data"` standardmäßig auf `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für eventbasierte (bild- oder skriptbasierte) Quellen gesetzt.

        > [!NOTE]
        > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und vom Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie der Quelle durch den Browser zugewiesen werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}
      - : Eine Zeichenkette, die angibt, wie die `"trigger_data"` des Triggers gegen die `"trigger_data"` der Quelle abgeglichen werden. Mögliche Werte sind:
        - `"exact"`: Die `"trigger_data"` des Triggers müssen genau mit einem Wert in der `"trigger_data"` der Quelle übereinstimmen; wenn es keine solche Übereinstimmung gibt, findet keine Event-Level-Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` die `"trigger_data"` des Triggers ist und `allowedValues` die Folge von Werten im `"trigger_data"` Array der Quelle sind. Wenn das Ergebnis dieser Berechnung einen Wert im `"trigger_data"` Array der Quelle trifft, ist die Übereinstimmung erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"` Modus existiert hauptsächlich aus Gründen der Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und daher ist es unwahrscheinlich, dass dieser Modus verwendet wird. Er ist dennoch nützlich in speziellen Fällen, die eine sehr spezifische Art der Kompression erfordern, die kleinere Registrierungsheader ergeben. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf dem Quelltyp gemäß der maximalen Anzahl von `"trigger_data"`-Elementen der Quelle festlegen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine fortlaufende Sequenz von ganzen Zahlen bilden, beginnend bei 0. Wenn die Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, wird `"trigger_data_matching"` standardmäßig auf `"modulus"` gesetzt. Der Grund dafür ist die Rückwärtskompatibilität: Das Auslassen des `"trigger_data_matching"` Feldes muss zu demselben Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen Event-Level-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Response-Header wie folgt festlegen, um einen Browser dazu zu bringen, einen Event-Level-Bericht zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt:

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://shop.example",
    trigger_data: [0, 1, 2, 3, 4],
    trigger_data_matching: "exact",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",
  }),
);
```

### Registrierung einer Quelle für einen Zusammenfassungsbericht

Um den Browser dazu zu bringen, einen Zusammenfassungsbericht zu erzeugen, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie zusätzlich zu den für die Erzeugung von Event-Level-Berichten erforderlichen Feldern einige zusätzliche Felder hinzufügen.

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://shop.example",
    trigger_data: [0, 1, 2, 3, 4],
    trigger_data_matching: "exact",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",

    aggregation_keys: {
      campaignCounts: "0x159",
      geoValue: "0x5",
    },
    aggregatable_report_window: "86400",
  }),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
