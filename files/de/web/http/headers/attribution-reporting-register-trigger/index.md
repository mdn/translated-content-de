---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{HTTPSidebar}}{{seecompattable}}

Der **`Attribution-Reporting-Register-Trigger`** Header registriert ein Seitenelement als einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dies wird als Teil einer Antwort auf eine Anfrage hinzugefügt, die einen {{httpheader("Attribution-Reporting-Eligible")}} Header enthielt.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für mehr Details.

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attribution-Trigger werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header")}}
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

  - : Ein JSON-String, der Daten bereitstellt, die in generierten Berichten enthalten sein können, wie z. B. die ID des Triggers sowie Prioritäts- und Deduplizierungswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel für unterschiedliche Quellenschlüssel definiert. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall entspricht der Eigenname dem in `"source_keys"` definierten Namen, und der Wert ist ein willkürlicher Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um herauszufiltern, welche Trigger Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details.
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten zum Trigger darstellt. Verfügbare Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Ein String, der Daten darstellt, die den Trigger beschreiben, der typischerweise verwendet wird, um Ereignisse anzugeben, wie z.B. "Benutzer hat Artikel in Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet". Dieser Wert wird, falls vorhanden, im generierten Bericht auf Ereignisebene enthalten sein, obwohl er basierend auf dem zugeordneten Urbhebers [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld modifiziert wird.

            > [!NOTE]
            > Die zur Darstellung jedes Ereignisses verwendeten Werte und die Anzahl der Elemente im Array sind völlig beliebig und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, jedoch müssen Werte im Array vorhanden sein, um der Quelle vom Browser zugeordnet zu werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution-Trigger darstellt. Standardmäßig werden Trigger der zuletzt passenden Quelle zugeordnet. Für sowohl Ereignisebenen- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um den Trigger älteren Quellen zuzuordnen. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichts-Prioritäten und -Grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für mehr Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Zuordnungen dupliziert werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Siehe [Verhinderung von Duplikaten in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication) für mehr Informationen.
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den in einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` einzustellen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Informationen.

## Beispiele

### Registrieren eines Triggers für einen Ereignisebenen-Bericht

Ein Node.js Server könnte den `Attribution-Reporting-Register-Trigger` Antwort-Header wie folgt setzen, um einen Trigger zu registrieren, der einer Quellenattribution auf Ereignisebene entsprechen soll:

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

### Registrieren eines Triggers für einen Zusammenfassungsbericht

Beim Registrieren eines Triggers, der mit einer Attributionsquelle für Zusammenfassungsberichte übereinstimmen soll, müssen Sie die folgenden Felder einbeziehen:

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
