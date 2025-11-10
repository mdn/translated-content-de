---
title: Attribution-Reporting-Register-Trigger header
short-title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Antwort-Header")}} registriert eine Seitenfunktion als [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Bestandteil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht erfolgreich im [Anmeldeprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attribution-Trigger werden nicht registriert.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-Safelisted Antwort-Header")}}
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
  - : Ein JSON-String, der Daten bereitstellt, die in generierten Berichten enthalten sein können, wie z. B. die ID des Triggers, Priorität und Duplikationswerte. Verfügbare Felder sind wie folgt:
    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, wobei jedes ein Aggregationsschlüssel definiert, der auf verschiedene Quellenschlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimales Zeichen, das einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt mit Eigenschaften, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall ist der Eigenschaftsname gleich dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist der beliebige Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Nummer, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` festgelegt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um festzulegen, welche Trigger Berichte generieren. Weitere Details finden Sie unter [Filters](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"event_trigger_data"`
      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:
        - `"trigger_data"`
          - : Ein String, der Daten beschreibt, welche den Trigger beschreiben, der typischerweise verwendet wird, um Ereignisse wie "Benutzer hat Artikel zum Einkaufswagen hinzugefügt" oder "Benutzer hat sich für die Mailingliste angemeldet" anzuzeigen. Dieser Wert wird in den generierten Ereignis-Ebenen-Bericht aufgenommen, sofern vorhanden, obwohl er basierend auf dem [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld der zugeordneten Quelle verändert wird.

            > [!NOTE]
            > Die Werte, die verwendet werden, um jedes Ereignis darzustellen, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um vom Browser einer Quelle zugeordnet zu werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution-Trigger darstellt. Standardmäßig werden Trigger der neuesten übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis-Ebenen- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um den Trigger älteren Quellen zuzuordnen. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Report priorities and limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributionsvorgänge dupliziert werden – beispielsweise wenn ein Benutzer dasselbe Element mehrfach in einen Einkaufswagen legt. Weitere Informationen finden Sie unter [Prevent duplication in reports](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication).
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektive Filterung durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den im entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` zu setzen. Weitere Informationen finden Sie unter [Filters](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).

## Beispiele

### Registrieren eines Triggers für einen Ereignis-Ebenen-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Antwort-Header wie folgt setzen, um einen Trigger zu registrieren, der einer Quelle für die Attribution eines Ereignis-Ebenen-Berichts entsprechen soll:

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

Beim Registrieren eines Triggers, der mit einer Quelle für die Attribution eines Zusammenfassungsberichts übereinstimmen soll, müssen Sie die folgenden Felder einschließen:

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
