---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{non-standard_header}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}}-Header enthält. Er liefert Informationen, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die in diesem Header enthaltenen Informationen bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht als Teil eines erfolgreichen [Privacy Sandbox-Anmeldeprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) integriert hat, wird der `Attribution-Reporting-Register-Source`-Header ignoriert und Attributionsquellen werden nicht registriert.

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
  - : Eine JSON-Zeichenkette, die die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Verfügbare Felder sind wie folgt:
    - `"source_event_id"` {{optional_inline}}
      - : Eine Zeichenkette, die eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie anderen Informationen zuzuordnen, wenn mit der Attributionsquelle interagiert wird, oder aggregierte Informationen am Berichts-Endpunkt. Die Zeichenkette muss nur eine basis-10-formattierte 64-Bit-Unsigned Integer enthalten.
    - `"destination"`
      - : Eine einzelne Zeichenkette oder ein Array von 1–3 Zeichenketten. Diese Zeichenketten müssen eine vollständige URL enthalten, die der {{Glossary("site", "Site")}} entspricht, auf der ein Trigger erwartet wird. Diese werden verwendet, um den Attribution-Trigger mit der Quelle abzugleichen, wenn ein Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte darstellen, um aggregierte Berichts-Werte darunter zu klassifizieren.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in generierte aggregierbare Berichte aufgenommen werden (dies wird als **Berichtsfenster** bezeichnet). Falls nicht gesetzt, wird standardmäßig der `"expiry"`-Wert verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine basis-10-formattierte 64-Bit-Unsigned Integer, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge an [Rauschen, das zu Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports), steuert. Niedrigere Epsilon-Werte führen zu mehr Rauschen und bieten daher einen größeren Schutz der Privatsphäre. Die maximalen und standardmäßigen Werte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle für die Erstellung von Ereignis-Ebene-Berichten zugeordnet werden können (dies wird als **Berichtsfenster** bezeichnet). Falls nicht gesetzt, wird das Ereignis-Berichtsfenster auf den `"expiry"`-Wert zurückgesetzt.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, sonst schlägt die Quellenregistrierung fehl.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend bei `"start_time"`, wobei Berichte für diese Quelle nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichterstattung über mehrere Berichte hinweg zu variieren. Falls nicht gesetzt, wird das Ereignis-Berichtsfenster auf den `"expiry"`-Wert zurückgesetzt. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die den Startzeitpunkt für die Berichtsfenster festlegt. Falls nicht angegeben, ist der Standardwert `0`.
        - `"end_times"`: Ein Array positiver Zahlen, die Endzeiten für nachfolgende Berichtsfenster angeben. Die Werte müssen aufsteigend sein und größer als `"start_time"`.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, sonst schlägt die Quellenregistrierung fehl.
    - `"expiry"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger können nicht mehr auf diese Quelle bezogen werden). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20`, inklusive, die die Gesamtanzahl der Ereignis-Ebene-Berichte bestimmt, die diese Quelle generieren kann. Nach Erreichen dieses Maximums kann die Quelle keine neuen Daten mehr erzeugen. Falls nicht angegeben, ist der Standardwert für `"max_event_level_reports"` `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Eine Zeichenkette, die einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konversionen der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis-Ebene als auch Zusammenfassungsberichte können Sie eine höhere Prioritätsnummer setzen, um bestimmte Quellen zu priorisieren. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
    - `"trigger_data"` {{optional_inline}}
      - : Ein Array von 32-Bit-Unsigned Integers, die Daten darstellen, die die verschiedenen Triggervorgänge beschreiben, die zu dieser Quelle passen könnten. Zum Beispiel könnten "Benutzer fügte Artikel zum Einkaufswagen hinzu" oder "Benutzer meldete sich für die Mailingliste an" Aktionen sein, die an der Trigger-Site stattfinden könnten, um diese Quelle zu matchen und eine Art Konversion anzuzeigen, die der Werbetreibende zu messen versucht. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) spezifiziert sind, damit eine Ereignis-Ebene-Attribution stattfindet. Falls weggelassen, ist der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jedes Ereignis darstellen, und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie der Quelle vom Browser zugeordnet werden können, wenn ein Trigger registriert ist.

    - `"trigger_data_matching"` {{optional_inline}}
      - : Eine Zeichenkette, die angibt, wie die `"trigger_data"` vom Trigger mit den `"trigger_data"` der Quelle verglichen werden. Mögliche Werte sind:
        - `"exact"`: Die `"trigger_data"` vom Trigger muss genau mit einem in den `"trigger_data"` der Quelle enthaltenen Wert übereinstimmen; falls keine solche Übereinstimmung erfolgt, findet keine Ereignis-Ebene-Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` die `"trigger_data"` vom Trigger und `allowedValues` die Sequenz der Werte im `"trigger_data"`-Array der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"`-Array der Quelle übereinstimmt, ist die Übereinstimmung erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert in erster Linie für die Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und daher würden Sie ihn wahrscheinlich nicht verwenden. Es ist immer noch in bestimmten Fällen nützlich, die eine sehr spezifische Art der Kompression erfordern, die zu kleineren Registrierungs-Header führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf dem Typ der Quelle gemäß der maximalen Anzahl von `"trigger_data"`-Elementen der Quelle setzen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine zusammenhängende Folge von Ganzzahlen bilden, die bei 0 beginnt. Wenn die Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Falls nicht angegeben, ist der Standardwert für `"trigger_data_matching"` `"modulus"`. Auch hier ist der Grund dafür die Rückwärtskompatibilität: Das Weglassen des Feldes `"trigger_data_matching"` muss zu dem gleichen Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrieren einer Quelle für einen Ereignis-Ebene-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source`-Antwort-Header wie folgt setzen, um einen Browser zu veranlassen, einen Ereignis-Ebene-Bericht zu generieren, wenn ein Trigger mit einer Quelle abgeglichen wird:

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

### Registrieren einer Quelle für einen Zusammenfassungsbericht

Um den Browser zu veranlassen, einen Zusammenfassungsbericht zu generieren, wenn ein Trigger mit einer Quelle abgeglichen wird, müssen einige zusätzliche Felder _zusätzlich_ zu denen, die für die Erstellung von Ereignis-Ebene-Berichten erforderlich sind, enthalten sein.

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
