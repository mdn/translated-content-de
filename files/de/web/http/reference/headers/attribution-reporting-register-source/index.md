---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{deprecated_header}}{{non-standard_header}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seiten-Feature als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources).
Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält. Er liefert die Informationen, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die Informationen, die Sie in diesen Header aufnehmen, bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Seite nicht in einem erfolgreichen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) die Attribution Reporting API inkludiert hat, wird der `Attribution-Reporting-Register-Source` Header ignoriert und Attributionsquellen werden nicht registriert.

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
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verknüpfen, wenn die Attributionsquelle interagiert wird, oder um Informationen am Berichts-Endpunkt zu aggregieren. Der String muss aus einer ausschließlich base-10-formatierten 64-Bit-Long Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der {{Glossary("site", "Seite")}} entspricht, auf der ein Trigger erwartet wird. Diese werden verwendet, um den Attribution-Trigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellen, um Werte in Berichten zu aggregieren.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Trigger-Daten nicht mehr in generierte aggregierbare Berichte aufgenommen werden (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, wird standardmäßig der `"expiry"` Wert verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Ein base-10-formatierter 64-Bit-Long Integer, der einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein detaillierter Debug-Bericht sein sollte.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge an [Rauschen, die Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports), steuert. Niedrigere Werte von Epsilon führen zu mehr Rauschen und damit zu einem besseren Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger dieser Quelle nicht mehr zugeordnet werden können, um Event-Level-Berichte zu erstellen (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, fällt das Event-Berichtsfenster auf den `"expiry"` Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, andernfalls wird die Quellregistrierung fehlschlagen.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend bei `"start_time"`, mit Berichten für diese Quelle, die nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Lieferzeiten der Berichte über mehrere Berichte hinweg zu variieren. Wenn nicht festgelegt, fällt das Event-Berichtsfenster auf den `"expiry"` Wert zurück. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht negative Zahl, die die Startzeit für die Berichtsfenster angibt. Wenn nicht angegeben, ist der Standardwert `0`.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Berichtsfenster angeben. Die Werte müssen steigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, andernfalls wird die Quellregistrierung fehlschlagen.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger können dieser Quelle nicht mehr zugeordnet werden). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit festgelegt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` (einschließlich), die die Gesamtzahl der Event-Level-Berichte angibt, die diese Quelle generieren kann. Nachdem dieses Maximum erreicht ist, kann die Quelle keine neuen Daten mehr produzieren. Wenn nicht angegeben, beträgt der Standardwert von `"max_event_level_reports"` `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (image- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle repräsentiert. Standardmäßig werden Konversionen der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Event-Level- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um bestimmte Quellen zu priorisieren. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
    - `"trigger_data"` {{optional_inline}}
      - : Ein Array von 32-Bit-Long Integer-Daten, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" Handlungen sein, die auf der Trigger-Seite auftreten und diese Quelle entsprechen und auf irgendeine Art eine Konversion darstellen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"`, die in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) spezifiziert sind, abgeglichen werden, damit eine Event-Attribution stattfindet. Wenn weggelassen, lautet der Standardwert von `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (image- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte zur Repräsentation jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array darf Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um beim Browser der Quelle zugeordnet zu werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}
      - : Ein String, der angibt, wie das `"trigger_data"` aus dem Trigger gegen das `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:
        - `"exact"`: Das `"trigger_data"` aus dem Trigger muss genau mit einem Wert im `"trigger_data"` der Quelle übereinstimmen; wenn es keine solche Übereinstimmung gibt, findet keine Event-Level-Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` aus dem Trigger ist und `allowedValues` die Sequenz der Werte im `"trigger_data"` Array der Quelle ist. Wenn das Ergebnis dieser Berechnung einem Wert im `"trigger_data"` Array der Quelle entspricht, ist die Übereinstimmung ein Erfolg. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"` Modus existiert hauptsächlich für die Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und daher ist es unwahrscheinlich, dass Sie ihn verwenden. Es ist immer noch in bestimmten Fällen nützlich, die eine sehr spezifische Art der Komprimierung erfordern, die zu kleineren Registrierungs-Headern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Trigger-Daten basierend auf dem Quellentyp entsprechend der maximalen Anzahl von `"trigger_data"`-Elementen der Quelle festlegen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine zusammenhängende Sequenz von Ganzzahlen bilden, beginnend bei 0. Wenn die Trigger-Daten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, ist der Standardwert von `"trigger_data_matching"` `"modulus"`. Auch hier liegt der Grund in der Rückwärtskompatibilität: das Weglassen des `"trigger_data_matching"` Feldes muss zu demselben Verhalten führen, das beobachtet wurde, bevor dieses Feld eingeführt wurde.

## Beispiele

### Eine Quelle für einen Event-Level-Bericht registrieren

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Antwort-Header wie folgt setzen, um einen Event-Level-Bericht zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt:

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

### Eine Quelle für einen Zusammenfassungsbericht registrieren

Um den Browser dazu zu bringen, einen Zusammenfassungsbericht zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder hinzufügen, _zusätzlich_ zu denjenigen, die für die Erzeugung von Event-Level-Berichten erforderlich sind.

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
