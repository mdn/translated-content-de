---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil der Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält. Er stellt die Informationen bereit, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die Informationen, die Sie in diesem Header bereitstellen, bestimmen auch die Art der Berichte, die der Browser generieren kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Seite nicht die Attribution Reporting API in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) beinhaltet, wird der `Attribution-Reporting-Register-Source` Header ignoriert und Attributionsquellen werden nicht registriert.

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
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verknüpfen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Reporting-Endpunkt zu aggregieren. Der String muss ausschließlich aus einer Basis-10-formatierten 64-Bit-Unsigned Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Seite entspricht (Schema + {{Glossary("eTLD", "eTLD+1")}}), auf der ein Trigger erwartet wird. Diese werden verwendet, um den Attributionstrigger mit der Quelle abzugleichen, wenn ein Trigger ausgelöst wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerbereitgestellte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, unter denen Berichtswerte aggregiert werden sollen.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden repräsentiert, nach der Trigger-Daten nicht mehr in generierte aggregierbare Berichte aufgenommen werden (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht gesetzt, ist dies der Standardwert der `"expiry"`-Wert.
    - `"debug_key"` {{optional_inline}}
      - : Eine Basis-10-formatierte 64-Bit-Unsigned Integer, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein sollte.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge an [Rauschen, das zu Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports) steuert. Niedrigere Werte von Epsilon führen zu mehr Rauschen und bieten daher einen größeren Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat zum Beispiel einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden repräsentiert, nach der nachfolgende Trigger nicht mehr dieser Quelle für Zwecke der Erzeugung von Ereignis-Ebene-Berichten zugeordnet werden (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht gesetzt, fällt das Ereignis-Berichtsfenster auf den `"expiry"` Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da sonst die Quellenregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Serie von Berichtsfenstern repräsentiert, beginnend bei `"start_time"`, wobei Berichte für diese Quelle nach jeder in `"end_times"` angegebenen Endzeit geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtserstellung über mehrere Berichte hinweg zu variieren. Wenn nicht gesetzt, fällt das Ereignis-Berichtsfenster auf den `"expiry"` Wert zurück. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfenster angibt. Wenn nicht angegeben, ist der Standardwert `0`.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Berichtsfenster spezifizieren. Die Werte müssen steigend sein und größer als `"start_time"`.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da sonst die Quellenregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv sein wird (d.h. nachfolgende Trigger können nicht mehr dieser Quelle zugeordnet werden). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte erzeugen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` inklusive, die die Gesamtzahl an Ereignis-Ebene-Berichten angibt, die diese Quelle generieren kann. Sobald dieses Maximum erreicht ist, ist die Quelle nicht mehr in der Lage, neue Daten zu erzeugen. Wenn nicht angegeben, ist der Standardwert für `"max_event_level_reports"` `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle repräsentiert. Standardmäßig werden Konversionen der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis-Ebene- als auch Zusammenfassungsberichte können Sie eine höhere Prioritätszahl festlegen, um bestimmte Quellen zu priorisieren. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit-Unsigned-Integers, die Daten repräsentieren, die die verschiedenen Trigger-Ereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Beispielsweise könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" Aktionen sein, die an der Trigger-Seite stattfinden, die mit dieser Quelle übereinstimmen und eine Art Konversion anzeigen könnten, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine Ereignis-Ebene-Attribution stattfinden kann. Wenn ausgelassen, ist der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jedes Ereignis repräsentieren, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von dem Browser auf die Quelle zurückgeführt zu werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der spezifiziert, wie die `"trigger_data"` vom Trigger mit der `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Die `"trigger_data"` vom Trigger muss genau mit einem Wert in der `"trigger_data"` der Quelle übereinstimmen; wenn es keine solche Übereinstimmung gibt, findet keine Ereignis-Ebene-Attribution statt.
        - `"modulus"`: In diesem Fall wird folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` die `"trigger_data"` vom Trigger ist und `allowedValues` die Folge von Werten im `"trigger_data"` Array der Quelle. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"` Array der Quelle übereinstimmt, ist die Übereinstimmung ein Erfolg. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"` Modus existiert hauptsächlich aus Gründen der Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und dementsprechend ist eine Verwendung unwahrscheinlich. Dennoch ist er in bestimmten Fällen nützlich, die eine sehr spezifische Art der Komprimierung erfordern, was zu kleineren Registrierungs-Headern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet werden muss, die unterschiedliche Trigger-Daten basierend auf dem Quelltyp gemäß der maximalen Anzahl von `"trigger_data"` Elementen der Quelle festlegen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine zusammenhängende Abfolge von Ganzzahlen bilden, die bei 0 beginnt. Wenn die Trigger-Daten keine solche Abfolge bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, ist der Standardwert für `"trigger_data_matching"` `"modulus"`. Der Grund hierfür ist die Rückwärtskompatibilität: das Weglassen des `"trigger_data_matching"` Feldes muss zu demselben Verhalten führen, das beobachtet wurde, bevor dieses Feld eingeführt wurde.

## Beispiele

### Registrierung einer Quelle für einen Ereignis-Ebene-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Antwort-Header wie folgt setzen, um einen Browser zu veranlassen, einen Ereignis-Ebene-Bericht zu generieren, wenn ein Trigger einer Quelle zugeordnet wird:

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

Um den Browser zu veranlassen, einen Zusammenfassungsbericht zu generieren, wenn ein Trigger einer Quelle zugeordnet wird, müssen Sie einige zusätzliche Felder _zusätzlich_ zu denen aufnehmen, die für die Erzeugung von Ereignis-Ebene-Berichten erforderlich sind.

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
