---
title: Attribution-Reporting-Register-Trigger header
short-title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{seecompattable}}

Der HTTP-**`Attribution-Reporting-Register-Trigger`**-{{Glossary("response_header", "Response-Header")}} registriert ein Seitenmerkmal als einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}}-Header enthält.

Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Site die Attribution Reporting API nicht im Rahmen eines erfolgreichen [Privacy Sandbox-Anmeldeprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) einbezogen hat, wird der `Attribution-Reporting-Register-Trigger`-Header ignoriert und Attribution Trigger werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
Attribution-Reporting-Register-Trigger: <json-string>
```

## Direktiven

- `<json-string>`
  - : Ein JSON-String, der Daten bereitstellt, die in generierte Berichte aufgenommen werden können, wie z.B. die ID des Triggers sowie Prioritäts- und Deduplikationswerte. Verfügbare Felder sind wie folgt:
    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellen-Schlüssel angewendet werden soll. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte der Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall ist der Eigenschaftsname gleich dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist der beliebige Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Trigger Berichte generieren. Sehen Sie [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"event_trigger_data"`
      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:
        - `"trigger_data"`
          - : Ein String, der Daten darstellt, die den Trigger beschreiben, was typischerweise verwendet wird, um Ereignisse wie "Benutzer fügt Artikel zum Warenkorb hinzu" oder "Benutzer meldet sich für die Mailingliste an" anzuzeigen. Dieser Wert wird im generierten Ereignis-Level-Bericht enthalten sein, sofern vorhanden, obwohl er basierend auf dem festgelegten [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)-Feld der zugehörigen Quelle modifiziert werden kann.

            > [!NOTE]
            > Die Werte, die jedes Ereignis darstellen, und die Anzahl der Elemente im Array sind vollkommen willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von der Quelle durch den Browser zugeordnet zu werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution Trigger darstellt. Standardmäßig werden Trigger der neuesten passenden Quelle zugeordnet. Für sowohl Ereignis-Level- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätszahl, um den Trigger mit älteren Quellen abzugleichen. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Sehen Sie [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributierungen dupliziert werden — beispielsweise wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Duplikate in Berichten vermeiden](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication).
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den in einem entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}}-Header festgelegten `filter_data`-Werten zu setzen. Sehen Sie [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Informationen.

## Beispiele

### Registrieren eines Triggers für einen Ereignis-Level-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger`-Response-Header wie folgt setzen, um einen Trigger zu registrieren, der zu einer Attribution-Quelle auf Ereignis-Ebene passt:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    event_trigger_data: [
      {
        trigger_data: "4",
        priority: "1000000000000",
        deduplication_key: "2345698765",
      },
    ],
    debug_key: "1115698977",
  }),
);
```

### Registrieren eines Triggers für einen Zusammenfassungsbericht

Wenn Sie einen Trigger registrieren, der mit einer Attribution-Quelle für einen Zusammenfassungsbericht übereinstimmen soll, müssen Sie die folgenden Felder einbeziehen:

```js
res.set(
  "Attribution-Reporting-Register-Trigger",
  JSON.stringify({
    aggregatable_trigger_data: [
      {
        key_piece: "0x400",
        source_keys: ["campaignCounts"],
      },
      {
        key_piece: "0xA80",
        source_keys: ["geoValue", "nonMatchingKeyIdsAreIgnored"],
      },
    ],
    aggregatable_values: {
      campaignCounts: 32768,
      geoValue: 1664,
    },
    debug_key: "1115698977",
  }),
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
