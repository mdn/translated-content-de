---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{deprecated_header}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Response-Header")}} registriert eine Seitenfunktion als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}}-Header enthält. Er bietet die Informationen, die der Browser speichern sollte, wenn ein Benutzer mit der Attributionsquelle interagiert. Die Informationen, die Sie in diesem Header angeben, bestimmen auch die Art der Berichte, die der Browser erstellen kann.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite nicht über die Attribution Reporting API im Rahmen eines erfolgreichen [Privacy Sandbox-Anmeldeprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) verfügt, wird der `Attribution-Reporting-Register-Source`-Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern sollte, wenn mit der Attributionsquelle interagiert wird. Die verfügbaren Felder sind wie folgt:
    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie bei der Interaktion mit der Attributionsquelle anderen Informationen zuzuordnen oder aggregierte Informationen am Reporting-Endpunkt zu erfassen. Der String muss ausschließlich aus einer im Basis-10-Format formatierten 64-Bit-Unsigned Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Seite entspricht (Schema + {{Glossary("eTLD", "eTLD+1")}}), bei der ein Auslöser erwartet wird. Diese werden verwendet, um den Attributionsauslöser zu der Quelle zuzuordnen, wenn ein Auslöser aktiviert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte darstellen, unter denen Berichtswerte aggregiert werden sollen.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Auslöserdaten nicht mehr in generierten aggregierten Berichten enthalten sind (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, wird standardmäßig der Wert `"expiry"` verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine im Basis-10-Format formatierten 64-Bit-Unsigned Integer, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein Boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein sollte.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die größer als oder gleich `0` ist und die Menge an [Rauschen steuert, das zu Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports). Kleinere Werte von Epsilon führen zu mehr Rauschen und bieten daher einen höheren Schutz der Privatsphäre. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Auslöser dieser Quelle nicht mehr für die Erstellung von Ereignisberichten zugeordnet werden können (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, wird das Ereignisberichtsfenster auf den Wert `"expiry"` zurückgesetzt.
        > [!NOTE]
        > Wenn `"event_report_window"` festgelegt ist, kann `"event_report_windows"` nicht festgelegt werden, da sonst die Quellregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend bei `"start_time"`, wobei Berichte für diese Quelle nach jedem festgelegten Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um den Zeitpunkt der Berichtsauslieferung über mehrere Berichte hinweg zu variieren. Wenn nicht festgelegt, wird das Ereignisberichtsfenster auf den Wert `"expiry"` zurückgesetzt. Die Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfenster festlegt. Wenn nicht angegeben, wird `0` als Standardwert verwendet.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Berichtsfenster festlegen. Die Werte müssen ansteigend sein und größer als `"start_time"`.
          > [!NOTE]
          > Wenn `"event_report_windows"` festgelegt ist, kann `"event_report_window"` nicht festgelegt werden, da sonst die Quellregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Auslöser können dieser Quelle nicht mehr zugeordnet werden). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit festgelegt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte erzeugen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20,` einschließlich, die angibt, wie viele Ereignisberichte diese Quelle insgesamt erzeugen kann. Nach Erreichen dieses Maximums kann die Quelle keine neuen Daten mehr erzeugen. Wenn nicht angegeben, wird `"max_event_level_reports"` standardmäßig auf `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (image- oder scriptbasierte) Quellen gesetzt.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konversionen der zuletzt passenden Quelle zugeordnet. Für sowohl ereignissofzänen- als auch zusammenfassende Berichte können Sie eine höhere Prioritätsnummer einstellen, um bestimmte Quellen zu priorisieren. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Report priorities and limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
    - `"trigger_data"` {{optional_inline}}
      - : Ein Array von 32-Bit-Unsigned Integern, die Daten darstellen, die die verschiedenen Auslöserereignisse beschreiben, die zu dieser Quelle passen könnten. Zum Beispiel könnten „Benutzer hat Artikel in den Warenkorb gelegt“ oder „Benutzer hat sich für die Mailingliste angemeldet“ Aktionen sein, die an der Auslöserseite geschehen und dieser Quelle zugeordnet werden könnten, was auf eine Konversion irgendeiner Art hinweist, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` übereinstimmen, die in [triggers](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit die ereignisbasierte Attribution erfolgen kann. Wenn weggelassen, wird `"trigger_data"` standardmäßig für navigationsbasierte Quellen auf `[0, 1, 2, 3, 4, 5, 6, 7]` und für ereignisbasierte (image- oder scriptbasierte) Quellen auf `[0, 1]` gesetzt.

        > [!NOTE]
        > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie dem Browser zur Quelle zugeordnet werden können, wenn ein Auslöser registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}
      - : Ein String, der angibt, wie die `"trigger_data"` aus dem Auslöser mit der `"trigger_data"` der Quelle übereinstimmen. Mögliche Werte sind:
        - `"exact"`: Die `"trigger_data"` aus dem Auslöser muss genau mit einem Wert in der `"trigger_data"` der Quelle übereinstimmen; wenn keine solche Übereinstimmung vorliegt, findet keine ereignisbasierte Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` die `"trigger_data"` aus dem Auslöser ist und `allowedValues` die Sequenz der Werte im `"trigger_data"`-Array der Quelle ist. Wenn das Ergebnis dieser Berechnung einem Wert im `"trigger_data"`-Array der Quelle entspricht, ist die Übereinstimmung erfolgreich. In einem solchen Fall stimmt der Wert immer überein, es sei denn, `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert hauptsächlich für die Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und daher werden Sie ihn wahrscheinlich nicht verwenden. Er ist immer noch nützlich in bestimmten Fällen, die eine sehr spezifische Art der Komprimierung erfordern, die zu kleineren Registrierungs-Headern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die das Setzen unterschiedlicher Triggerdaten basierend auf dem Quellentyp entsprechend der maximalen Anzahl von Quell-`"trigger_data"`-Elementen erfordert.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine zusammenhängende Sequenz von ganzen Zahlen bilden, beginnend bei 0. Wenn die Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, wird `"trigger_data_matching"` standardmäßig auf `"modulus"` gesetzt. Der Grund hierfür ist wiederum die Rückwärtskompatibilität: Das Weglassen des `"trigger_data_matching"`-Felds muss zum gleichen Verhalten führen, das vor der Einführung dieses Felds beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen ereignisbasierten Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source`-Response-Header wie folgt setzen, um einen Browser dazu zu bringen, einen ereignisbasierten Bericht zu erstellen, wenn ein Auslöser mit einer Quelle übereinstimmt:

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

Um den Browser dazu zu bringen, einen Zusammenfassungsbericht zu erstellen, wenn ein Auslöser mit einer Quelle übereinstimmt, müssen einige zusätzliche Felder enthalten sein, _zusätzlich_ zu denen, die für die Erstellung ereignisbasierter Berichte erforderlich sind.

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
