---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{HTTPSidebar}}{{seecompattable}}

Der **`Attribution-Reporting-Register-Trigger`** Header registriert ein Seitenmerkmal als einen [Zurechnungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen {{httpheader("Attribution-Reporting-Eligible")}} Header enthält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht erfolgreich in einem [Privacy Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingeschlossen hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Zurechnungsauslöser werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
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

  - : Ein JSON-String, der Daten bereitstellt, die in generierten Berichten enthalten sein können, wie z. B. die ID des Auslösers sowie Prioritäts- und Duplikationswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, wobei jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel anzuwenden ist. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt mit Eigenschaften, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall entspricht der Name der Eigenschaft dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist ein beliebiger Wert, den Sie wünschen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie neben dem zugehörigen Zurechnungsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Auslöser Berichte erzeugen. Weitere Details finden Sie unter [Filters](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Auslöser darstellt. Verfügbare Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Ein String, der Daten beschreibt, die den Auslöser kennzeichnen, der typischerweise verwendet wird, um Ereignisse wie "Benutzer fügt Artikel in den Warenkorb hinzu" oder "Benutzer meldet sich für Mailingliste an" anzugeben. Dieser Wert wird im generierten Ereignis-Bericht enthalten sein, falls vorhanden, obwohl er basierend auf dem entsprechenden Quelldatensatz der [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feld modifiziert wird.

            > [!NOTE]
            > Die Werte, die jedes Ereignis darstellen, sowie die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um vom Browser einem Auslöser zugeordnet zu werden, wenn dieser registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Zurechnungsauslöser darstellt. Standardmäßig werden Auslöser der zuletzt passenden Quelle zugeordnet. Für sowohl ereignisbezogene als auch zusammenfassende Berichte setzen Sie eine höhere Prioritätsnummer, um den Auslöser älteren Quellen zuzuordnen. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtprioritäten und -beschränkungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Zuordnungen dupliziert werden — z. B. wenn ein Benutzer denselben Artikel mehrmals in einen Warenkorb legt. Weitere Informationen finden Sie unter [Verhinderung von Duplikationen in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication).
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektive Filterung durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf dem in einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` festzulegen. Weitere Informationen finden Sie unter [Filters](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).

## Beispiele

### Registrierung eines Auslösers für einen ereignisbezogenen Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Antwortheader wie folgt setzen, um einen Auslöser zu registrieren, der zur Attribution einer Quelle für ereignisbezogene Berichte passt:

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

### Registrierung eines Auslösers für einen zusammenfassenden Bericht

Wenn Sie einen Auslöser registrieren, der mit einer Quelle für einen zusammenfassenden Bericht übereinstimmen soll, müssen Sie die folgenden Felder einschließen:

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
