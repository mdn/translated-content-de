---
title: Attribution-Reporting-Register-Trigger header
short-title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{deprecated_header}}{{non-standard_header}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als einen [Attributionsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält.

Sehen Sie sich die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details an.

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Datenschutz-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attributionsauslöser werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-syeliste Antwort-Header")}}
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
  - : Ein JSON-String, der Daten bereitstellt, die in generierten Berichten enthalten sein können, wie z.B. die ID des Auslösers, sowie Prioritäts- und Deduplikationswerte. Verfügbare Felder sind wie folgt:
    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, wobei jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellen-Schlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt mit Eigenschaften, das einen Wert für jeden Datenpunkt darstellt, der in `"aggregatable_trigger_data"` definiert ist. In jedem Fall ist der Eigenschaftsname gleich dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist jeder beliebige Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diese, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein Boolean-Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die zum Filtern der Auslöser verwendet werden können, die Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"event_trigger_data"`
      - : Ein Objekt, das Daten über den Auslöser darstellt. Verfügbare Unterfelder sind wie folgt:
        - `"trigger_data"`
          - : Ein String, der Daten darstellt, die den Auslöser beschreiben, typischerweise verwendet, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet" anzuzeigen. Dieser Wert wird im generierten ereignisebasierten Bericht enthalten sein, sofern vorhanden, obwohl er basierend auf dem zugeordneten Quellfeld [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) geändert werden kann.

            > [!NOTE]
            > Die Werte, die jedes Ereignis darstellen, und die Anzahl der Elemente im Array sind vollständig beliebig und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von der Quelle durch den Browser attribuiert zu werden, wenn ein Auslöser registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attributionsauslöser darstellt. Standardmäßig werden Auslöser der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl ereignisebene als auch Zusammenfassungsberichte können Sie eine höhere Prioritätsnummer festlegen, um den Auslöser älteren Quellen zuzuordnen. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichtprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für mehr Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributierungen dupliziert werden — zum Beispiel, wenn ein Benutzer dasselbe Produkt mehrfach in einen Warenkorb legt. Siehe [Vermeidung von Duplikationen in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für mehr Informationen.
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die eine selektive Filterung durchführen, um `"trigger_data"`, `"priority"`, und `"deduplication_key"` basierend auf den im entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` festzulegen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Informationen.

## Beispiele

### Registrierung eines Auslösers für einen ereignisebenen Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Antwort-Header wie folgt setzen, um einen Auslöser zu registrieren, der dazu bestimmt ist, einer ereignisebene Attributionsquellenmeldung zu entsprechen:

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

### Registrierung eines Auslösers für einen Zusammenfassungsbericht

Wenn Sie einen Auslöser registrieren, der auf eine Zusammenfassungsquelle von Attributionsberichten abzielt, müssen die folgenden Felder enthalten sein:

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
