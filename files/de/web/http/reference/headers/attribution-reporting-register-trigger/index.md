---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält.

Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attribution-Triggers werden nicht registriert.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-sichere Antwort-Header")}}
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

  - : Ein JSON-String, der Daten bereitstellt, die in erstellte Berichte aufgenommen werden können, wie z. B. die ID des Triggers sowie Prioritäts- und Entdoppelungswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein Hexadezimalwert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall entspricht der Eigenschaftsname dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist ein beliebiger Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie neben dem zugehörigen Attraktionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` festgelegt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Trigger Berichte erzeugen. Weitere Details finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Ein String, der Daten darstellt, die den Trigger beschreiben, der typischerweise verwendet wird, um Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" anzuzeigen. Dieser Wert wird in den generierten ereignisbezogenen Bericht aufgenommen, falls vorhanden, obwohl er basierend auf dem Feld [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) des zugeordneten Ursprungs geändert werden kann.

            > [!NOTE]
            > Die Werte, die zur Darstellung jedes Ereignisses verwendet werden, und die Anzahl der Elemente im Array sind völlig beliebig und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von dem Browser dem Ursprung zugeordnet zu werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution-Trigger darstellt. Standardmäßig werden Trigger dem zuletzt passenden Ursprung zugeordnet. Für sowohl ereignisbezogene als auch zusammenfassende Berichte setzen Sie eine höhere Prioritätsnummer, um den Trigger älteren Ursprüngen zuzuordnen. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen einzigartigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributationen dupliziert werden - zum Beispiel, wenn ein Benutzer denselben Artikel mehrfach in einen Warenkorb legen würde. Weitere Informationen finden Sie unter [Duplizierung in Berichten verhindern](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication).
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den in einem entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` festzulegen. Weitere Informationen finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).

## Beispiele

### Registrieren eines Triggers für einen ereignisbezogenen Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Antwort-Header wie folgt setzen, um einen Trigger zu registrieren, der eine Zuordnung zu einer ereignisbezogenen Berichtsattributionsquelle beabsichtigt:

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

Beim Registrieren eines Triggers, der eine Zuordnung mit einer zusammenfassenden Berichtsattributionsquelle beabsichtigt, müssen Sie die folgenden Felder einschließen:

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
