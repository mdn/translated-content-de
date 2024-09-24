---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{HTTPSidebar}}{{seecompattable}}

Der **`Attribution-Reporting-Register-Trigger`** Header registriert ein Seitenmerkmal als ein [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser ist Teil einer Antwort auf eine Anfrage, die einen {{httpheader("Attribution-Reporting-Eligible")}} Header enthielt.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite nicht durch einen erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) in die Attribution Reporting API aufgenommen wurde, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attributionstrigger werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Register-Trigger: <json-string>
```

## Direktiven

- `<json-string>`

  - : Ein JSON-String, der Daten bereitstellt, die in generierte Berichte aufgenommen werden können, wie z.B. die ID des Triggers, sowie Prioritäts- und Deduplizierungswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, wobei jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellenschlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall ist der Bezeichner der Eigenschaft gleich dem in `"source_keys"` definierten Namen, und der Wert der Eigenschaft ist ein beliebiger Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` festgelegt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um festzulegen, welche Trigger Berichte generieren. Weitere Details finden Sie unter [Filters](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Ein String, der Daten darstellt, die den Trigger beschreiben, welcher typischerweise verwendet wird, um Ereignisse wie "Benutzer hat ein Element zum Warenkorb hinzugefügt" oder "Benutzer hat sich für den Newsletter angemeldet" anzuzeigen. Dieser Wert wird im generierten Ereignisbericht enthalten sein, sofern vorhanden, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld der zugeordneten Quelle modifiziert werden kann.

            > [!NOTE]
            > Die Werte, die jedes Ereignis repräsentieren, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie vom Browser der Quelle zugeordnet werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attributionstrigger darstellt. Standardmäßig werden Trigger der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um den Trigger mit älteren Quellen zu verknüpfen. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -beschränkungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, um zu verhindern, dass Attributionsvorgänge dupliziert werden — zum Beispiel, wenn ein Benutzer dasselbe Element mehrfach zum Warenkorb hinzufügt. Weitere Informationen finden Sie unter [Vermeidung von Duplikation in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication).
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektive Filterung durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den im entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` festzulegen. Weitere Informationen finden Sie unter [Filters](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).

## Beispiele

### Registrierung eines Triggers für einen ereignisgesteuerten Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Response-Header wie folgt setzen, um einen Trigger zu registrieren, der einer ereignisgesteuerten Berichts-Attributionsquelle entsprechen soll:

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

Beim Registrieren eines Triggers, der einer Zusammenfassungsberichts-Attributionsquelle entsprechen soll, müssen Sie die folgenden Felder einschließen:

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

- {{httpheader("Attribution-Reporting-Eligible")}}
- {{httpheader("Attribution-Reporting-Register-Source")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
