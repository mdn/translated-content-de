---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält. Er liefert die Informationen, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die Informationen, die Sie in diesen Header aufnehmen, bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht im Rahmen eines erfolgreichen [Privacy Sandbox Enrollment-Prozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Source` Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
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
  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Die verfügbaren Felder sind wie folgt:
    - `"source_event_id"` {{optional_inline}}
      - : Eine Zeichenkette, die eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie bei Interaktionen der Attributionsquelle mit anderen Informationen zu verknüpfen oder Informationen am Berichts-Endpunkt zu aggregieren. Die Zeichenkette muss ausschließlich aus einer in Basis-10-formatierten 64-Bit-unsigned Integer bestehen.
    - `"destination"`
      - : Eine einzelne Zeichenkette oder ein Array von 1–3 Zeichenketten. Diese Zeichenketten müssen eine vollständige URL enthalten, die der Seite (Schema + {{Glossary("eTLD", "eTLD+1")}}) entspricht, auf der ein Trigger zu erwarten ist. Diese werden verwendet, um den Attributionstrigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das von Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellten, um Berichtswerte darunter zu aggregieren.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der Trigger-Daten nicht mehr in generierbaren aggregierbaren Berichten enthalten sein werden (dies wird ein **Berichtsfenster** genannt). Wenn nicht gesetzt, wird dies auf den `"expiry"`-Wert zurückgesetzt.
    - `"debug_key"` {{optional_inline}}
      - : Eine in Basis-10-formatierten 64-Bit-unsigned Integer darstellende Debug-Schlüssel. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) parallel zum zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge an [Rauschen kontrolliert, das zu den Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports). Niedrigere Epsilon-Werte führen zu mehr Rauschen und bieten somit einen stärkeren Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; zum Beispiel hat Chrome einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle zugeordnet werden, um Berichte auf Ereignisebene zu produzieren (dies wird ein **Berichtsfenster** genannt). Wenn nicht gesetzt, wird das Ereignis-Berichtsfenster auf den `"expiry"`-Wert zurückgesetzt.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da sonst die Quellregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend bei `"start_time"`, mit Berichten für diese Quelle, die nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtslieferung über mehrere Berichte zu variieren. Wenn nicht gesetzt, wird das Ereignis-Berichtsfenster auf den `"expiry"`-Wert zurückgesetzt. Die Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfenster spezifiziert. Wenn nicht angegeben, wird standardmäßig `0` verwendet.
        - `"end_times"`: Ein Array positiver Zahlen, das Endzeiten für nachfolgende Berichtsfenster angibt. Die Werte müssen aufsteigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da sonst die Quellregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Eine Zeichenkette, die die Ablaufzeit in Sekunden für die Attributionsquelle angibt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger können nicht mehr dieser Quelle zugeordnet werden). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Conversions Berichte erzeugen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` (einschließlich), die die Gesamtzahl der Ereignisberichte spezifiziert, die diese Quelle generieren kann. Nachdem dieses Maximum erreicht ist, kann die Quelle keine neuen Daten mehr produzieren. Wenn nicht angegeben, beträgt der Standardwert für `"max_event_level_reports"` `3` für navigationsbasierte und `1` für ereignisbasierte (image- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Eine Zeichenkette, die einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Conversions der zuletzt übereinstimmenden Quelle zugeordnet. Für Ereignis- und Zusammenfassungsberichte setzen Sie eine höhere Prioritätszahl, um bestimmte Quellen zu priorisieren. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Bericht-Prioritäten und -Limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
    - `"trigger_data"` {{optional_inline}}
      - : Ein Array von 32-Bit-unsigned Integer, das Daten darstellt, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" Aktionen sein, die an der Trigger-Seite passieren und eine Conversion eines gewissen Typs anzeigen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) übereinstimmen, damit die Zuordnung auf Ereignisebene erfolgen kann. Wenn weggelassen, ist der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (image- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jedes Ereignis darstellen, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie vom Browser der Quelle zugewiesen werden können, wenn ein Trigger registriert ist.

    - `"trigger_data_matching"` {{optional_inline}}
      - : Eine Zeichenkette, die spezifiziert, wie das `"trigger_data"` vom Trigger mit dem `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:
        - `"exact"`: Das `"trigger_data"` vom Trigger muss exakt mit einem im `"trigger_data"` der Quelle enthaltenen Wert übereinstimmen; wenn es keine solche Übereinstimmung gibt, findet keine Zuordnung auf Ereignisebene statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` vom Trigger ist und `allowedValues` die Sequenz von Werten im `"trigger_data"` Array der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"` Array der Quelle übereinstimmt, ist die Übereinstimmung ein Erfolg. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"` Modus existiert hauptsächlich aus Kompatibilitätsgründen mit dem Verhalten der API vor der Einführung von `"exact"`, und daher ist es unwahrscheinlich, dass Sie ihn verwenden. Es ist in bestimmten Fällen nützlich, die eine sehr spezifische Art von Kompression erfordern, die kleinere Registrierungsheader zur Folge hat. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet werden muss, die verschiedene Trigger-Daten basierend auf dem Quelltyp einstellen muss, entsprechend der maximalen Anzahl von `"trigger_data"` Elementen der Quelle.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine zusammenhängende Sequenz von Zahlen bilden, beginnend bei 0. Wenn die Trigger-Daten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, ist der Standardwert für `"trigger_data_matching"` `"modulus"`. Wiederum ist der Grund dafür die Rückwärtskompatibilität: das Weglassen des `"trigger_data_matching"` Felds muss das gleiche Verhalten haben, das beobachtet wurde, bevor dieses Feld eingeführt wurde.

## Beispiele

### Registrierung einer Quelle für einen Bericht auf Ereignisebene

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Antwort-Header wie folgt setzen, um einen Browser dazu zu bringen, einen Bericht auf Ereignisebene zu generieren, wenn ein Trigger mit einer Quelle übereinstimmt:

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

Um zu erreichen, dass der Browser einen Zusammenfassungsbericht generiert, wenn ein Trigger mit einer Quelle übereinstimmt, müssen Sie einige zusätzliche Felder einschließen, _zusätzlich_ zu denjenigen, die für die Generierung eines Berichts auf Ereignisebene erforderlich sind.

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
