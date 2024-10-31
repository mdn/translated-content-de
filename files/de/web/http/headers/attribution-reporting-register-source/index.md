---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Response-Header")}} registriert ein Seitenmerkmal als eine [Attribution-Quelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil der Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält. Er liefert die Informationen, die der Browser speichern soll, wenn ein Benutzer mit der Attribution-Quelle interagiert. Die Informationen, die Sie in diesen Header aufnehmen, bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Site die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat, wird der `Attribution-Reporting-Register-Source` Header ignoriert und Attribution-Quellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attribution-Quelle interagiert wird. Verfügbare Felder sind wie folgt:

    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attribution-Quelle darstellt, die verwendet werden kann, um sie bei Interaktion mit der Quelle mit anderen Informationen zu verknüpfen oder Informationen am Berichtsendpunkt zusammenzufassen. Der String muss ausschließlich aus einer im Basis-10-Format formatierten 64-Bit unsigned Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Site entspricht (Schema + {{Glossary("eTLD", "eTLD+1")}}), auf der ein Auslöser erwartet wird. Diese werden verwendet, um den Attribution-Auslöser mit der Quelle zu verknüpfen, wenn ein Auslöser aktiviert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellen, unter denen Berichtswerte aggregiert werden.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Auslöserdaten nicht mehr in generierten aggregierbaren Berichten enthalten werden (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht gesetzt, wird standardmäßig der Wert `"expiry"` verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine im Basis-10-Format formatierte 64-Bit unsigned Integer, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolean Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um festzulegen, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die größer oder gleich `0` ist und die Menge an [Rauschen kontrolliert, die Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports). Niedrigere Werte von Epsilon führen zu mehr Rauschen und bieten daher einen größeren Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Auslöser für diesen Quelle nicht mehr zur Erstellung von Ereignisberichten verwendet werden (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht gesetzt, wird das Ereignisberichtsfenster auf den Wert `"expiry"` zurückgesetzt.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da sonst die Quellenregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Serie von Berichtsfenstern darstellt, beginnend bei `"start_time"`, mit Berichten für diese Quelle, die nach jedem angegebenen Endzeitpunkt in `"end_times"` übermittelt werden. Dies kann verwendet werden, um die Zeit der Berichtszustellung über mehrere Berichte hinweg zu variieren. Wenn nicht gesetzt, wird das Ereignisberichtsfenster auf den Wert `"expiry"` zurückgesetzt. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die den Startzeitpunkt für die Berichtsfenster angibt. Wenn nicht angegeben, wird standardmäßig `0` verwendet.
        - `"end_times"`: Ein Array positiver Zahlen, die Endzeiten für die nachfolgenden Berichtsfenster angeben. Die Werte müssen ansteigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da sonst die Quellenregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attribution-Quelle darstellt, nach der sie nicht mehr aktiv ist (d. h. nachfolgende Auslöser werden dieser Quelle nicht mehr zugeordnet). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte generieren. Weitere Details finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` (einschließlich), die die Gesamtzahl der Ereignisberichte angibt, die diese Quelle generieren kann. Wenn dieses Maximum erreicht ist, kann die Quelle keine neuen Daten mehr erzeugen. Wenn nicht angegeben, wird `"max_event_level_reports"` standardmäßig auf `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen gesetzt.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attribution-Quelle darstellt. Standardmäßig werden Konversionen der zuletzt passenden Quelle zugeordnet. Für sowohl Ereignis- als auch Zusammenfassungsberichte können Sie eine höhere Prioritätszahl setzen, um bestimmte Quellen zu priorisieren. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -beschränkungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit unsigned Integers, das Daten darstellt, die die verschiedenen Auslöserereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer fügte Artikel dem Warenkorb hinzu" oder "Benutzer meldete sich für die Mailingliste an" Aktionen sein, die auf der Auslöser-Site stattfinden und eine Art Konversion anzeigen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` übereinstimmen, die in [Auslösern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine ereignisbasierte Attribution stattfindet. Wenn weggelassen, wird `"trigger_data"` standardmäßig auf `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen gesetzt.

        > [!NOTE]
        > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um der Quelle durch den Browser zugeordnet zu werden, wenn ein Auslöser registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der angibt, wie das `"trigger_data"` vom Auslöser mit dem `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Das `"trigger_data"` vom Auslöser muss genau mit einem Wert übereinstimmen, der im `"trigger_data"` der Quelle enthalten ist; wenn es keine solche Übereinstimmung gibt, findet keine ereignisbasierte Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` vom Auslöser ist und `allowedValues` die Sequenz von Werten im `"trigger_data"` Array der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"` Array der Quelle übereinstimmt, ist die Übereinstimmung ein Erfolg. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"` Modus existiert hauptsächlich aus Gründen der Abwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und daher ist es unwahrscheinlich, dass Sie ihn verwenden. Er ist dennoch nützlich in bestimmten Fällen, die eine sehr spezifische Art der Kompression erfordern, die zu kleineren Registrierung-Headern führt. Dies kann erforderlich sein, wenn Sie komplexe Filterlogik verwenden, die unterschiedliche Auslöserdaten basierend auf dem Quellentyp gemäß der maximalen Anzahl von `"trigger_data"` Elementen der Quelle einrichten muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine zusammenhängende Sequenz von Integer-Werten bilden, beginnend bei 0. Wenn die Auslöserdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, wird `"trigger_data_matching"` standardmäßig auf `"modulus"` gesetzt. Wiederum ist der Grund dafür die Abwärtskompatibilität: das Weglassen des `"trigger_data_matching"` Feldes muss zu demselben Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen ereignisbasierten Bericht

Ein Node.js Server könnte den `Attribution-Reporting-Register-Source` Response-Header folgendermaßen setzen, um einen Browser zu veranlassen, einen ereignisbasierten Bericht zu generieren, wenn ein Auslöser mit einer Quelle übereinstimmt:

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

Um den Browser zu veranlassen, einen Zusammenfassungsbericht zu generieren, wenn ein Auslöser mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder _zusätzlich_ zu denen enthalten, die für die Erstellung eines ereignisbasierten Berichts erforderlich sind.

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
