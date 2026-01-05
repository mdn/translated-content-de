---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

{{deprecated_header}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Response-Header")}} registriert ein Seitenmerkmal als [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}}-Header enthält. Er liefert die Informationen, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die in diesem Header enthaltenen Informationen bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) beinhaltet, wird der `Attribution-Reporting-Register-Source`-Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Register-Source: <json-string>
```

## Direktiven

- `<json-string>`
  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Verfügbare Felder sind wie folgt:
    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionsquelle darstellt und zur Zuordnung zu anderen Informationen oder zur Aggregation von Informationen am Berichtsendpunkt verwendet werden kann. Der String muss ausschließlich aus einer im Basis-10-Format formatierten 64-Bit-Unsigned-Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings, die eine vollständige URL des {{Glossary("site", "Sites")}} enthalten müssen, einschließlich des Schemas, auf dem ein Trigger erwartet wird. Diese werden verwendet, um den Attributionstrigger mit der Quelle abzugleichen, wenn ein Trigger aktiviert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, um Berichtswerte zu aggregieren.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden repräsentiert, nach der Triggerdaten nicht mehr in generierte aggregierbare Berichte aufgenommen werden (dies wird als **Reportfenster** bezeichnet). Wenn nicht gesetzt, wird standardmäßig der `"expiry"`-Wert verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine im Basis-10-Format formatierten 64-Bit-Unsigned-Integer, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein booleanischer Wert. Wenn ein `debug_key` festgelegt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge des [Rauschens, das den Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports), steuert. Niedrigere Epsilon-Werte führen zu mehr Rauschen und bieten daher einen höheren Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome beispielsweise hat einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger dieser Quelle für die Erstellung von Ereignis-Level-Berichten nicht mehr zugeordnet werden (dies wird als **Reportfenster** bezeichnet). Wenn nicht gesetzt, fällt das Event-Report-Fenster auf den `"expiry"`-Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da ansonsten die Registratur der Quelle fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtswindows darstellt, beginnend bei `"start_time"`, wobei Berichte für diese Quelle nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann dazu verwendet werden, den Zeitpunkt der Berichterstattung über mehrere Berichte hinweg zu variieren. Wenn nicht gesetzt, fällt das Event-Report-Fenster auf den `"expiry"`-Wert zurück. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die den Startzeitpunkt für die Berichtsfenster angibt. Wenn nicht angegeben, ist `0` der Standardwert.
        - `"end_times"`: Ein Array positiver Zahlen, das Endzeiten für folgende Berichtswindows angibt. Die Werte müssen aufsteigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da ansonsten die Registratur der Quelle fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger sind dieser Quelle nicht mehr zuordenbar). Die maximale zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit festgelegt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Conversions Berichte erzeugen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20`, einschließlich, die die Gesamtzahl der Ereignis-Level-Berichte angibt, die diese Quelle erzeugen kann. Nachdem dieses Maximum erreicht ist, ist die Quelle nicht mehr fähig, neue Daten zu erzeugen. Wird nichts angegeben, liegt `"max_event_level_reports"` standardmäßig bei `3` für Navigations-basierte Quellen und bei `1` für Ereignis-basierte (bild- oder script-basierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Conversions der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätszahl, um bestimmte Quellen zu priorisieren. Zum Beispiel nimmt ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
    - `"trigger_data"` {{optional_inline}}
      - : Ein Array von 32-Bit-Unsigned-Integers, das Daten darstellt, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer fügte Artikel in den Warenkorb hinzu" oder "Benutzer meldete sich für die Mailingliste an" Aktionen sein, die auf der Trigger-Site stattfinden, die dieser Quelle zugeordnet werden könnten und einen Conversion-Typ darstellen, den der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` übereinstimmen, wie sie in [Triggers](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine Attribution auf Ereignis-Level stattfindet. Wenn weggelassen, lautet das Standard-`"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für Navigations-basierte Quellen und `[0, 1]` für Ereignis-basierte (bild- oder script-basierte) Quellen.

        > [!NOTE]
        > Die Werte zur Repräsentation jedes Ereignisses und die Anzahl der Elemente im Array sind vollständig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie bei der Registrierung eines Triggers von der Quelle dem Browser zugeordnet werden können.

    - `"trigger_data_matching"` {{optional_inline}}
      - : Ein String, der angibt, wie das `"trigger_data"` vom Trigger mit dem `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:
        - `"exact"`: Das `"trigger_data"` vom Trigger muss exakt einem Wert im `"trigger_data"` der Quelle entsprechen; wenn es keine solche Übereinstimmung gibt, findet keine Attribution auf Ereignis-Level statt.
        - `"modulus"`: In diesem Fall wird folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` vom Trigger und `allowedValues` die Folge von Werten im `"trigger_data"`-Array der Quelle ist. Wenn das Ergebnis dieser Berechnung einem Wert im `"trigger_data"`-Array der Quelle entspricht, ist die Übereinstimmung erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert in erster Linie für die Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und daher werden Sie ihn wahrscheinlich selten verwenden. Er ist immer noch nützlich in speziellen Fällen, die eine sehr spezifische Art von Komprimierung erfordern, was zu kleineren Registrierungs-Headern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet werden muss, um unterschiedliche Trigger-Daten basierend auf dem Quelltyp entsprechend der maximalen Anzahl von `"trigger_data"`-Elementen der Quelle zu setzen.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine nahtlose Folge von Ganzzahlen sein, beginnend bei 0. If die Triggerdaten bilden nicht eine solche Sequenz, tritt ein Fehler auf.

        Wenn nicht angegeben, wird `"trigger_data_matching"` auf `"modulus"` zurückgesetzt. Der Grund hierfür ist die Rückwärtskompatibilität: Das Weglassen des `"trigger_data_matching"`-Feldes muss das gleiche Verhalten bewirken, das beobachtet wurde, bevor dieses Feld eingeführt wurde.

## Beispiele

### Registrierung einer Quelle für einen Ereignis-Level-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source`-Response-Header wie folgt setzen, um einen Browser zu veranlassen, einen Ereignis-Level-Bericht zu generieren, wenn ein Trigger einer Quelle zugeordnet wird:

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

Um den Browser zu veranlassen, einen Zusammenfassungsbericht zu generieren, wenn ein Trigger einer Quelle zugeordnet wird, müssen einige zusätzliche Felder _zusätzlich_ zu denen, die für die Erstellung eines Ereignis-Level-Berichts erforderlich sind, aufgenommen werden.

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
