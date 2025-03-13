---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Response-Header")}} registriert ein Seitenmerkmal als [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht erfolgreich über einen [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attribution Triggers werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
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

  - : Eine JSON-Zeichenkette, die Daten bereitstellt, die in generierten Berichten enthalten sein können, wie z.B. die ID des Triggers, Prioritäts- und Deduplizierungswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, wobei jedes ein Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt repräsentieren. In jedem Fall entspricht der Eigenschaftsname dem in `"source_keys"` definierten Namen und der Eigenschaftswert ist ein beliebiger von Ihnen benötigter Wert.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Stellen Sie diesen ein, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Triggers Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Eine Zeichenkette, die Daten repräsentiert, die den Trigger beschreiben, und typischerweise dazu verwendet wird, Ereignisse wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für die Mailingliste angemeldet" anzuzeigen. Dieser Wert wird, falls vorhanden, im generierten Berichts auf Event-Ebene enthalten sein, obwohl er aufgrund des dem zugewiesenen Quellobjekts zugewiesenen [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Felds einer Modifikation unterliegen kann.

            > [!NOTE]
            > Die Werte, die verwendet werden, um jedes Ereignis darzustellen, sowie die Anzahl der Elemente im Array, sind vollständig beliebig und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie vom Browser einer Quelle zugeordnet werden können, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Eine Zeichenkette, die einen Prioritätswert für den Attribution Trigger darstellt. Standardmäßig werden Triggers der zuletzt passenden Quelle zugeordnet. Für sowohl event-level als auch zusammenfassende Berichte können Sie einen höheren Prioritätswert setzen, um den Trigger mit älteren Quellen abzugleichen. Zum Beispiel nimmt ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Eine Zeichenkette, die einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributions dupliziert werden — zum Beispiel, wenn ein Benutzer denselben Artikel mehrfach in einen Warenkorb legt. Siehe [Verhinderung von Duplikaten in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication) für mehr Informationen.
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf dem im entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` zu setzen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Informationen.

## Beispiele

### Registrierung eines Triggers für einen Bericht auf Event-Ebene

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Response-Header wie folgt setzen, um einen Trigger zu registrieren, der einer Attributionsquelle für einen Bericht auf Event-Ebene entsprechen soll:

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

### Registrierung eines Triggers für einen zusammenfassenden Bericht

Wenn Sie einen Trigger registrieren möchten, der mit einer Attributionsquelle für einen zusammenfassenden Bericht übereinstimmen soll, müssen Sie die folgenden Felder einschließen:

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
