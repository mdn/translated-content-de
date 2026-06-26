---
title: Attribution-Reporting-Register-Trigger header
short-title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{deprecated_header}}{{non-standard_header}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Response-Header")}} registriert eine Seitenfunktion als [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht im Rahmen eines erfolgreichen [Privacy Sandbox-Registrierungsprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) eingebunden hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attribution Trigger werden nicht registriert.

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
  - : Ein JSON-String, der Daten liefert, die in generierte Berichte aufgenommen werden können, wie die ID des Triggers, sowie Prioritäts- und Deduplizierungswerte. Verfügbare Felder sind:
    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellen-Schlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall entspricht der Eigenschaftsname dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist ein beliebiger Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Trigger Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"event_trigger_data"`
      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind:
        - `"trigger_data"`
          - : Ein String, der Daten beschreibt, die den Trigger beschreiben, üblicherweise verwendet, um Ereignisse wie "Benutzer hat Artikel zum Warenkorb hinzugefügt" oder "Benutzer hat sich für den Newsletter angemeldet" anzugeben. Dieser Wert wird in den generierten ereignisbezogenen Bericht aufgenommen, sofern vorhanden, wobei er jedoch auf Basis des [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Felds der zugeordneten Quelle modifiziert werden kann.

            > [!NOTE]
            > Die Werte, die verwendet werden, um jedes Ereignis darzustellen, und die Anzahl der Elemente im Array sind völlig beliebig und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie der Quelle vom Browser zugeordnet werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution Trigger darstellt. Standardmäßig werden Trigger der zuletzt passenden Quelle zugeordnet. Für sowohl ereignisbezogene als auch zusammenfassende Berichte setzen Sie eine höhere Prioritätsnummer, um den Trigger mit älteren Quellen zu matchen. Ein Wert von `2` hat z.B. Vorrang vor dem Standardwert von `1`. Siehe [Bericht-Prioritäten und -Grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für mehr Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um Doppelattributionen zu verhindern — zum Beispiel, wenn ein Benutzer denselben Artikel mehrmals in einen Einkaufswagen legt. Siehe [Doppelung in Berichten verhindern](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für mehr Informationen.
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den `filter_data` im entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header festzulegen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Informationen.

## Beispiele

### Registrieren eines Triggers für einen ereignisbezogenen Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Response-Header wie folgt setzen, um einen Trigger zu registrieren, der einer Quelle für die Attribution auf Ereignisebene entspricht:

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

### Registrieren eines Triggers für einen zusammenfassenden Bericht

Wenn Sie einen Trigger registrieren, der mit einer Quelle für die Attribution in einem zusammenfassenden Bericht übereinstimmen soll, müssen Sie die folgenden Felder einbeziehen:

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

## Weitere Informationen

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
