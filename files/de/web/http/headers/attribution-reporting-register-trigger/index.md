---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den Header {{HTTPHeader("Attribution-Reporting-Eligible")}} enthält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Site die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingebunden hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attribution-Trigger werden nicht registriert.

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
Attribution-Reporting-Register-Trigger: <json-string>
```

## Direktiven

- `<json-string>`

  - : Ein JSON-String, der Daten bereitstellt, die in generierte Berichte aufgenommen werden können, wie die ID des Triggers, Prioritäts- und Deduplizierungswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, wobei jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel anzuwenden ist. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt mit Eigenschaften, die einen Wert für jeden Datenpunkt darstellen, der in `"aggregatable_trigger_data"` definiert ist. In jedem Fall entspricht der Eigenschaftsname dem Namen, der in `"source_keys"` definiert ist, und der Eigenschaftswert ist ein beliebiger Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um festzulegen, welche Trigger Berichte generieren. Weitere Details finden Sie unter [Filters](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Trigger darstellt. Die verfügbaren Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Ein String, der Daten darstellt, die den Trigger beschreiben, und typischerweise für Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" verwendet wird. Dieser Wert wird in den generierten Ereignisbericht aufgenommen, sofern vorhanden, allerdings kann er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld der zugeordneten Quelle geändert werden.

            > [!NOTE]
            > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber es müssen Werte im Array vorhanden sein, damit sie vom Browser der Quelle zugeordnet werden können, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution-Trigger darstellt. Standardmäßig werden Trigger der neuesten übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um den Trigger mit älteren Quellen zu verknüpfen. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Zuordnungen dupliziert werden — z. B. wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Vermeidung von Duplikationen in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication).
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den im entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` festzulegen. Weitere Informationen finden Sie in [Filters](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).

## Beispiele

### Registrierung eines Triggers für einen Ereignisbericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Antwort-Header wie folgt festlegen, um einen Trigger zu registrieren, der für eine Attribution-Quelle eines Ereignisberichts bestimmt ist:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    "event_trigger_data": [
      {
        "trigger_data": "4",
        "priority": "1000000000000",
        "deduplication_key": "2345698765",
      },
    ],
    "debug_key": "1115698977",
  });
);
```

### Registrierung eines Triggers für einen Zusammenfassungsbericht

Bei der Registrierung eines Triggers, der darauf abzielt, mit einer Attribution-Quelle eines Zusammenfassungsberichts übereinzustimmen, müssen Sie die folgenden Felder einbeziehen:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    "aggregatable_trigger_data": [
      {
        "key_piece": "0x400",
        "source_keys": ["campaignCounts"]
      },
      {
        "key_piece": "0xA80",
        "source_keys": ["geoValue", "nonMatchingKeyIdsAreIgnored"]
      }
    ],
    "aggregatable_values": {
      "campaignCounts": 32768,
      "geoValue": 1664
    },
    "debug_key": "1115698977"
  });
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
