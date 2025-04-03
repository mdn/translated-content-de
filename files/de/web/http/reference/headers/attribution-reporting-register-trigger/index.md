---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP-**`Attribution-Reporting-Register-Trigger`**-{{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenelement als [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}}-Header enthält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Anmeldeverfahren für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingeschlossen hat, wird der `Attribution-Reporting-Register-Trigger`-Header ignoriert und Attributionstrigger werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherer Antwort-Header")}}
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

  - : Eine JSON-Zeichenfolge, die Daten bereitstellt, die in generierte Berichte aufgenommen werden können, wie die ID des Triggers sowie Prioritäts- und Deduplizierungswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel zur Anwendung auf verschiedene Quellschlüssel definiert. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das ein oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall ist der Eigenschaftsname gleich dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist ein beliebiger Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Trigger Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details.
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Eine Zeichenkette, die Daten darstellt, die den Trigger beschreiben, die typischerweise verwendet werden, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" anzuzeigen. Dieser Wert wird in den generierten Ereignisbericht aufgenommen, sofern vorhanden, obwohl er basierend auf dem Feld `"trigger_data_matching"` der zugeordneten Quelle [abgeändert](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) wird.

            > [!NOTE]
            > Die Werte, die jedes Ereignis darstellen, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um bei der Registrierung eines Triggers der Quelle vom Browser zugeordnet zu werden.

        - `"priority"` {{optional_inline}}
          - : Eine Zeichenkette, die einen Prioritätswert für den Attributionstrigger darstellt. Standardmäßig werden Trigger der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um den Trigger älteren Quellen zuordnen zu können. Ein Beispiel: Ein Wert von `2` hat Vorrang vor dem Standardwert von `1`. Siehe [Berichtprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Eine Zeichenkette, die einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributions mehrmals durchgeführt werden – zum Beispiel, wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Siehe [Vermeidung von Duplikationen in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication) für mehr Informationen.
        - `"filters"` {{optional_inline}}
          - : Ein Objekt mit Filtern, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den in einem entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}}-Header gesetzten `filter_data` festzulegen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Informationen.

## Beispiele

### Registrierung eines Triggers für einen ereignisebenen Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger`-Antwort-Header wie folgt setzen, um einen Trigger zu registrieren, der einer ereignisebenen Attributionsquelle entsprechen soll:

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

### Registrierung eines Triggers für einen Zusammenfassungsbericht

Bei der Registrierung eines Triggers, der einer Zusammenfassungs-Quelle entsprechen soll, müssen Sie die folgenden Felder einfügen:

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
