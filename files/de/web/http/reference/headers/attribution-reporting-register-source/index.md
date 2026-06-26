---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{deprecated_header}}{{non-standard_header}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources).
Dieser Header ist Teil der Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}}-Header enthält. Er liefert die Informationen, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die im Header enthaltenen Informationen bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Sehen Sie die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für mehr Details.

> [!NOTE]
> Wenn die aufrufende Seite nicht die Attribution Reporting API in einem erfolgreichen [Anmeldeprozess für den Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) beinhaltet, wird der `Attribution-Reporting-Register-Source`-Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
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
  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn die Attributionsquelle interagiert wird. Verfügbare Felder sind wie folgt:
    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verknüpfen, wenn mit der Attributionsquelle interagiert wird, oder Informationen an der Berichtsendstelle zusammenzufassen. Der String muss ausschließlich aus einer base-10-formatierten 64-Bit-Unsigned Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der {{Glossary("site", "Seite")}} entspricht, auf der ein Trigger erwartet wird aufzutreten. Diese werden verwendet, um den Attributionstrigger auf die Quelle zu matchen, wenn mit einem Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, unter denen Berichtswerte zusammengefasst werden.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in aggregierte Berichte aufgenommen werden (dies wird als **Reportfenster** bezeichnet). Wenn nicht gesetzt, ist dies standardmäßig der `"expiry"`-Wert.
    - `"debug_key"` {{optional_inline}}
      - : Eine base-10-formatierte 64-Bit-Unsigned Integer, die einen Debug-Schlüssel darstellt. Stellen Sie dies ein, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein detaillierter Debug-Bericht sein sollte.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge an [Rauschen steuert, die den Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports). Niedrigere Werte von Epsilon führen zu mehr Rauschen und bieten daher einen größeren Schutz der Privatsphäre. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle zugeschrieben werden, um Event-Level-Berichte zu produzieren (dies wird als **Reportfenster** bezeichnet). Wenn nicht gesetzt, fällt das Event-Reportfenster auf den `"expiry"`-Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da sonst die Quellregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Serie von Reportfenstern darstellt, beginnend mit `"start_time"`, wobei Berichte für diese Quelle nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtlieferung über mehrere Berichte hinweg zu variieren. Wenn nicht gesetzt, fällt das Event-Reportfenster auf den `"expiry"`-Wert zurück. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfenster angibt. Wenn nicht angegeben, ist es standardmäßig `0`.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Reportfenster spezifizieren. Die Werte müssen steigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da sonst die Quellregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Verfallszeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv sein wird (d.h. nachfolgende Trigger können dieser Quelle nicht mehr zugeordnet werden). Die maximal zulässige Verfallszeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konvertierungen Berichte generieren. Sehen Sie [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` einschließlich, die die Gesamtanzahl der Event-Level-Berichte angibt, die diese Quelle generieren kann. Nachdem dieses Maximum erreicht ist, kann die Quelle keine neuen Daten mehr produzieren. Wenn nicht angegeben, ist `"max_event_level_reports"` standardmäßig `3` für navigationsbasierte Quellen und `1` für eventbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konvertierungen der zuletzt übereinstimmenden Quelle zugeschrieben. Bei sowohl Event-Level- als auch Zusammenfassungsberichten setzen Sie eine höhere Prioritätsnummer, um bestimmte Quellen zu priorisieren. Zum Beispiel hat ein Wert von `2` Priorität über dem Standardwert von `1`. Sehen Sie [Bericht Prioritäten und Limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für mehr Informationen.
    - `"trigger_data"` {{optional_inline}}
      - : Ein Array von 32-Bit-Unsigned Integer, das Daten darstellt, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" Aktionen sein, die an der Triggerseite passieren, die mit dieser Quelle übereinstimmen und eine Art von Konvertierung anzeigen, die der Werbetreibende messen möchte. Diese müssen gegen `"trigger_data"` in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) abgeglichen werden, damit eine Event-Level-Attribution stattfindet. Wenn weggelassen, ist `"trigger_data"` standardmäßig `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für eventbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie von dem Browser der Quelle zugeordnet werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}
      - : Ein String, der angibt, wie das `"trigger_data"` des Triggers gegen das `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:
        - `"exact"`: Das `"trigger_data"` des Triggers muss genau mit einem Wert im `"trigger_data"` der Quelle übereinstimmen; wenn keine solche Übereinstimmung besteht, findet keine Event-Level-Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` des Triggers ist und `allowedValues` die Sequenz von Werten im `"trigger_data"`-Array der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"`-Array der Quelle übereinstimmt, ist der Abgleich erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert hauptsächlich für die Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und als solches werden Sie ihn wahrscheinlich nicht verwenden. Er ist immer noch in besonderen Fällen nützlich, die eine sehr spezifische Art von Kompression erfordern, die zu kleineren Registrierungs-Headern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf dem Quelltyp gemäß der maximalen Anzahl von `"trigger_data"`-Elementen der Quelle festlegen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine zusammenhängende Sequenz von Ganzzahlen bilden, beginnend bei 0. Wenn das Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, ist `"trigger_data_matching"` standardmäßig `"modulus"`. Wiederum ist der Grund dafür die Rückwärtskompatibilität: Das Weglassen des `"trigger_data_matching"`-Feldes muss zu demselben Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrieren einer Quelle für einen Event-Level-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source`-Antwort-Header wie folgt setzen, um einen Browser dazu zu bringen, einen Event-Level-Bericht zu generieren, wenn ein Trigger einer Quelle zugeordnet wird:

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

### Registrieren einer Quelle für einen zusammenfassenden Bericht

Um den Browser dazu zu bringen, einen Zusammenfassungsbericht zu generieren, wenn ein Trigger einer Quelle zugeordnet wird, müssen Sie einige zusätzliche Felder hinzufügen, _zusätzlich_ zu denen, die für die Erstellung von Event-Level-Berichten erforderlich sind.

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
