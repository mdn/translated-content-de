---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Response-Header")}} registriert ein Seitenmerkmal als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil der Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält. Er bietet die Informationen, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die Informationen, die Sie in diesem Header aufnehmen, bestimmen auch die Arten von Berichten, die der Browser erzeugen kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Website die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) umfasst, wird der `Attribution-Reporting-Register-Source`-Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
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

  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn die Attributionsquelle genutzt wird. Verfügbare Felder sind:

    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie anderen Informationen zuzuordnen, wenn die Attributionsquelle genutzt wird, oder Informationen am Reporting-Endpunkt zu aggregieren. Der String muss ausschließlich aus einer im Basis-10-Format formatierten 64-Bit-Unsigned-Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Website (Schema + {{Glossary("eTLD", "eTLD+1")}}) entspricht, auf der ein Trigger aufgetreten ist. Diese werden verwendet, um den Attributions-Trigger an die Quelle anzupassen, wenn ein Trigger genutzt wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellen, um Berichtswerte zu aggregieren.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Trigger-Daten nicht mehr in aggregierten Berichten enthalten sein werden (diese wird als **Berichtsfenster** bezeichnet). Wenn nicht gesetzt, wird standardmäßig der Wert `"expiry"` verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine im Basis-10-Format formatierte 64-Bit-Unsigned-Integer, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusätzlich zum zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der erzeugte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl größer oder gleich `0`, die die Menge des [Rauschens in Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) steuert. Niedrigere Epsilon-Werte führen zu mehr Rauschen und bieten daher besseren Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger für die Erstellung von Ereignislevel-Berichten nicht mehr auf diese Quelle zurückzuführen sind (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht gesetzt, fällt das Ereignisberichtfenster auf den Wert `"expiry"` zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, andernfalls schlägt die Quellenregistrierung fehl.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, die bei `"start_time"` beginnen, mit Berichten für diese Quelle, die nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtslieferung über mehrere Berichte hinweg zu variieren. Wenn nicht gesetzt, fällt das Ereignisberichtfenster auf den Wert `"expiry"` zurück. Eigenschaften sind:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die den Startzeitpunkt für die Berichtsfenster angibt. Wenn nicht angegeben, wird standardmäßig `0` verwendet.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Berichtsfenster angeben. Die Werte müssen zunehmen und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, andernfalls schlägt die Quellenregistrierung fehl.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv sein wird (d.h. nachfolgende Trigger sind nicht mehr auf diese Quelle zurückzuführen). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um festzulegen, welche Umwandlungen Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` inklusive, die die Gesamtzahl der Ereignislevel-Berichte angibt, die diese Quelle generieren kann. Ist das Maximum erreicht, kann die Quelle keine neuen Daten mehr erzeugen. Wird nicht spezifiziert, ist der Standardwert für `"max_event_level_reports"` `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle repräsentiert. Standardmäßig werden Konvertierungen der zuletzt passenden Quelle zugeordnet. Für sowohl Ereignislevel- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um bestimmte Quellen zu priorisieren. Zum Beispiel hat ein Wert von `2` Vorrang gegenüber dem Standardwert `1`. Siehe [Berichtsprioritäten und -begrenzungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit-Unsigned-Integern, die Daten darstellen, die die verschiedenen Triggerereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet" Aktionen sein, die auf der Trigger-Site stattfinden und die Quelle entsprechen und eine Art Umwandlung anzeigen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` übereinstimmen, das in [Triggern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) spezifiziert ist, damit eine Ereignislevel-Attribution stattfinden kann. Wenn weggelassen, ist der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jedes Ereignis repräsentieren, und die Anzahl der Elemente im Array sind komplett willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um dem Browser zugeordnet zu werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der angibt, wie `"trigger_data"` vom Trigger mit der `"trigger_data"` der Quelle übereinstimmt. Mögliche Werte sind:

        - `"exact"`: Das `"trigger_data"` vom Trigger muss genau mit einem Wert in der `"trigger_data"` der Quelle übereinstimmen; wenn keine solche Übereinstimmung vorliegt, findet keine Ereignislevel-Attribution statt.
        - `"modulus"`: In diesem Fall wird folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` vom Trigger ist und `allowedValues` die Sequenz der Werte im `"trigger_data"`-Array der Quelle. Wenn das Ergebnis dieser Berechnung einem Wert im `"trigger_data"`-Array der Quelle entspricht, ist die Übereinstimmung erfolgreich. In solchen Fällen wird die Übereinstimmung immer erfolgen, es sei denn, `allowedValues` ist leer.

        `"modulus"`-Modus existiert hauptsächlich für die Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und daher würde es unwahrscheinlich sein, verwendet zu werden. Dennoch ist es in bestimmten Fällen nützlich, die eine sehr spezifische Art der Komprimierung erfordern, die in kleineren Registrierungs-Headern resultiert. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Trigger-Daten in Abhängigkeit vom Quelltyp gemäß der maximalen Anzahl der Quell-`"trigger_data"`-Elemente setzen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine zusammenhängende Sequenz von Ganzzahlen bilden, die mit 0 beginnt. Wenn die Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, steht der Standardwert für `"trigger_data_matching"` auf `"modulus"`. Wiederum ist der Grund dafür die Rückwärtskompatibilität: Das Weglassen des `"trigger_data_matching"` Feldes muss zu dem gleichen Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen Ereignislevel-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source`-Response-Header wie folgt setzen, um den Browser zu veranlassen, einen Ereignislevel-Bericht zu erstellen, wenn ein Trigger mit einer Quelle übereinstimmt:

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

Um den Browser zu veranlassen, einen Zusammenfassungsbericht zu erstellen, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder _zusätzlich_ zu denen, die für die Erstellung eines Ereignislevel-Berichts erforderlich sind, einfügen.

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
