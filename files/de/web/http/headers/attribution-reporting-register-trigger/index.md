---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{HTTPSidebar}}{{seecompattable}}

Der **`Attribution-Reporting-Register-Trigger`** Header registriert ein Seitenmerkmal als einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dies wird als Teil einer Antwort auf eine Anfrage aufgenommen, die einen {{httpheader("Attribution-Reporting-Eligible")}} Header enthalten hat.

Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Site nicht die Attribution Reporting API in einem erfolgreichen [Datenschutz-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attribution-Trigger werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted response header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Register-Trigger: <json-string>
```

## Direktiven

- `<json-string>`

  - : Ein JSON-String, der Daten bereitstellt, die in erzeugte Berichte aufgenommen werden können, wie z.B. die ID des Triggers sowie Prioritäts- und Deduplikationswerte. Die verfügbaren Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall entspricht der Eigenschaftsname dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist der beliebige Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der erzeugte Debug-Bericht ein umfangreicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, um zu filtern, welche Trigger Berichte generieren. Weitere Einzelheiten finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Trigger darstellt. Die verfügbaren Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Ein String, der Daten beschreibt, die den Trigger beschreiben, der typischerweise verwendet wird, um Ereignisse wie „Benutzer hat Artikel in den Warenkorb gelegt“ oder „Benutzer hat sich für die Mailingliste angemeldet“ anzuzeigen. Dieser Wert wird im erzeugten Ereignis-Level-Bericht, sofern vorhanden, enthalten sein, obwohl er auf Grundlage des Attributionssources [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feldes modifiziert wird.

            > [!NOTE]
            > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von dem Browser dem Source zugeordnet zu werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution-Trigger darstellt. Standardmäßig werden Trigger der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um den Trigger älteren Quellen anzugleichen. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, um zu verhindern, dass Attributionen dupliziert werden, beispielsweise wenn ein Benutzer denselben Artikel mehrfach in einen Warenkorb legt. Weitere Informationen finden Sie unter [Duplikateverhinderung in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication).
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern vornehmen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den in einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` zu setzen. Weitere Informationen finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).

## Beispiele

### Registrierung eines Triggers für einen Ereignis-Level-Bericht

Ein Node.js Server könnte den `Attribution-Reporting-Register-Trigger` Antwort-Header wie folgt setzen, um einen Trigger zu registrieren, der einer Ereignis-Level-Berichtsattributionsquelle entsprechen soll:

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

Beim Registrieren eines Triggers, der mit einer Zusammenfassungsberichtsattributionsquelle übereinstimmen soll, müssen Sie die folgenden Felder einschließen:

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
