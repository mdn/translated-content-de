---
title: Attribution-Reporting-Register-Trigger header
short-title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{non-standard_header}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Response-Header")}} registriert eine Seitenfunktion als einen [Attributions-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht erfolgreich im Rahmen eines [Privacy Sandbox-Anmeldeprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) eingebunden hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attributions-Trigger werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
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
  - : Ein JSON-String, der Daten bereitstellt, die in generierte Berichte aufgenommen werden können, wie die ID des Triggers, Prioritäts- und Duplikationswerte. Verfügbare Felder sind wie folgt:
    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellenschlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall entspricht der Name der Eigenschaft dem in `"source_keys"` definierten Namen, und der Wert der Eigenschaft ist ein beliebiger Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie neben dem zugehörigen Attributionsbericht auch einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die zur Filterung verwendet werden können, welche Trigger Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details.
    - `"event_trigger_data"`
      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:
        - `"trigger_data"`
          - : Ein String, der Daten darstellt, die den Trigger beschreiben, und typischerweise verwendet wird, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" anzuzeigen. Dieser Wert wird, falls vorhanden, im generierten Ereignis-Level-Bericht enthalten sein, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld der zugeordneten Quelle geändert werden kann.

            > [!NOTE]
            > Die Werte, die verwendet werden, um jedes Ereignis darzustellen, und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von der Quelle durch den Browser zugeordnet zu werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attributions-Trigger darstellt. Standardmäßig werden Trigger der neuesten passenden Quelle zugeordnet. Sowohl für Ereignis-Level- als auch für Zusammenfassungsberichte setzen Sie eine höhere Prioritätszahl, um den Trigger älteren Quellen zuzuordnen. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Prioritäten und Beschränkungen von Berichten](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen einzigartigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributions mehrfach durchgeführt werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrfach in den Warenkorb legt. Siehe [Verhindern von Duplikationen in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"`, und `"deduplication_key"` basierend auf dem in einem entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` zu setzen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Informationen.

## Beispiele

### Registrieren eines Triggers für einen Ereignis-Level-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Response-Header wie folgt setzen, um einen Trigger zu registrieren, der einer Ereignis-Level-Bericht-Attributionsquelle entsprechen soll:

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

Beim Registrieren eines Triggers, der mit einer Attributionsquelle für Zusammenfassungsberichte übereinstimmen soll, müssen Sie die folgenden Felder einschließen:

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
