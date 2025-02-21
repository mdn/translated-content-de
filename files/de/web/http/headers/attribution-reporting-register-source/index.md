---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als [Attributionquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält. Er liefert die Informationen, die der Browser speichern soll, wenn ein Nutzer mit der Attributionquelle interagiert. Die Informationen, die Sie in diesen Header aufnehmen, bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für mehr Details.

> [!NOTE]
> Wenn die aufrufende Seite nicht die Attribution Reporting API in einem erfolgreichen [Anmeldeprozess zur Privatsphäre-Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Source` Header ignoriert und Attributionquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-Whitelist-Antwort-Header")}}
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

  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionquelle interagiert wird. Verfügbare Felder sind wie folgt:

    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionquelle darstellt, die verwendet werden kann, um sie bei Interaktion mit anderen Informationen zu verknüpfen oder Informationen am Berichtsendpunkt zusammenzufassen. Der String muss aus einem zehnstellig formatierten, 64-Bit vorzeichenlosen Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Seite entspricht (Schema + {{Glossary("eTLD", "eTLD+1")}}), auf der ein Trigger erwartet wird. Diese werden verwendet, um den Attributiontrigger mit der Quelle zu verknüpfen, wenn ein Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte darstellen, um Berichtswerte zu aggregieren.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in generierten aggregierbaren Berichten enthalten sind (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, wird dies standardmäßig auf den `"expiry"` Wert gesetzt.
    - `"debug_key"` {{optional_inline}}
      - : Ein zehnstellig formatierter, 64-Bit vorzeichenloser Integer, der einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) neben dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl gleich oder größer als `0`, die die Menge an [Rauschen in Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) steuert. Niedrigere epsilon-Werte führen zu mehr Rauschen und bieten daher einen größeren Schutz der Privatsphäre. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat zum Beispiel einen Maximal- und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger für diesen Zweck nicht mehr dieser Quelle zugeordnet werden können, um Ereignisberichte zu produzieren (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, fällt das Ereignisberichtsfenster auf den `"expiry"` Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da ansonsten die Quellregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend bei `"start_time"`, mit Berichten für diese Quelle, die nach jeder angegebenen Endzeit in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichterstellung über mehrere Berichte hinweg zu variieren. Wenn nicht festgelegt, fällt das Ereignisberichtsfenster auf den `"expiry"` Wert zurück. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfenster angibt. Wenn nicht angegeben, standardmäßig `0`.
        - `"end_times"`: Ein Array positiver Zahlen, das Endzeiten für nachfolgende Berichtsfenster angibt. Die Werte müssen steigen und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da ansonsten die Quellregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger werden dieser Quelle nicht mehr zugeordnet). Die maximale zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit festgelegt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20`, einschließlich, die die Gesamtanzahl der Ereignisberichte angibt, die diese Quelle generieren kann. Ist dieses Maximum erreicht, ist die Quelle nicht mehr in der Lage, neue Daten zu produzieren. Wenn nicht angegeben, standardmäßig `"max_event_level_reports"` zu `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionquelle darstellt. Standardmäßig werden Konversionen der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um spezifische Quellen zu priorisieren. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichtsprioritäten und Grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für mehr Informationen.
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit vorzeichenlosen Integern, das Daten darstellt, die die verschiedenen Triggerereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Beispielsweise "Nutzer fügt Artikel zum Warenkorb hinzu" oder "Nutzer meldet sich für die Mailingliste an" könnten Aktionen sein, die an der Triggerseite stattfinden und die übereinstimmen könnten, um eine Art Konversion anzugeben, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` bei [Triggern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) übereinstimmen, damit eine ereignisebenenbezogene Attribution stattfinden kann. Wenn nicht angegeben, wird die Standardeinstellung für `"trigger_data"` auf `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen gesetzt.

        > [!NOTE]
        > Die Werte, die jedes Ereignis darstellen, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um der Quelle durch den Browser zugeordnet zu werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der angibt, wie das `"trigger_data"` vom Trigger mit dem `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Das `"trigger_data"` vom Trigger muss genau mit einem Wert im `"trigger_data"` der Quelle übereinstimmen; sollte keine Übereinstimmung bestehen, findet keine ereignisebenenbezogene Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` vom Trigger und `allowedValues` die Sequenz von Werten im `"trigger_data"` der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"` der Quelle übereinstimmt, ist die Übereinstimmung erfolgreich. In einem solchen Fall stimmt der Wert immer überein, es sei denn, `allowedValues` ist leer.

        Der Modulus-Modus existiert in erster Linie aus Gründen der Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und es ist daher unwahrscheinlich, dass Sie ihn verwenden. Er ist immer noch in bestimmten Fällen nützlich, bei denen eine sehr spezifische Art der Kompression erforderlich ist, die zu kleineren Registrierungsheadern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf dem Quelltyp festlegen muss, gemäß der maximalen Anzahl von Quell-`"trigger_data"`-Elementen.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine fortlaufende Sequenz von Ganzzahlen bilden, die bei 0 beginnt. Bildet das Triggerdatum keine solche Sequenz, tritt ein Fehler auf.

        Wenn nicht angegeben, wird `"trigger_data_matching"` standardmäßig auf `"modulus"` gesetzt. Der Grund dafür ist erneut die Rückwärtskompatibilität: das Weglassen des `"trigger_data_matching"` Feldes muss zu dem gleichen Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen Ereignisbericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Antwort-Header wie folgt setzen, um einen Browser dazu zu bringen, einen Ereignisbericht zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt:

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

Um den Browser dazu zu bringen, einen Zusammenfassungsbericht zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder einschließen, _zusätzlich_ zu denjenigen, die für die Generierung von Ereignisberichten erforderlich sind.

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
