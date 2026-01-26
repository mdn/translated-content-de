---
title: Attribution-Reporting-Register-Trigger header
short-title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{deprecated_header}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Response-Header")}} registriert ein Seitenmerkmal als einen [Attributions-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält.

Für weitere Informationen siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attributions-Trigger werden nicht registriert.

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
  - : Ein JSON-String, der Daten bereitstellt, die in generierte Berichte aufgenommen werden können, wie z.B. die ID des Triggers, Prioritäten und Entduplizierungswerte. Verfügbare Felder sind wie folgt:
    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet werden soll. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt darstellen. In jedem Fall entspricht der Eigenschaftsname dem in `"source_keys"` definierten Namen, und der Eigenschaftswert ist der von Ihnen benötigte willkürliche Wert.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie zusammen mit dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) erzeugen möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der erzeugte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Trigger Berichte erzeugen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"event_trigger_data"`
      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:
        - `"trigger_data"`
          - : Ein String, der Daten darstellt, die den Trigger beschreiben. Er wird typischerweise verwendet, um Ereignisse zu kennzeichnen, wie "Benutzer hat Artikel zum Warenkorb hinzugefügt" oder "Benutzer hat sich für die Mailingliste angemeldet". Dieser Wert wird im generierten Ereignisbericht enthalten sein, sofern vorhanden, wobei er jedoch auf Grundlage des der Quelle zugeordneten [`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) Feldes modifiziert werden kann.

            > [!NOTE]
            > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie von dem Browser der Quelle zugeordnet werden können, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution-Trigger darstellt. Standardmäßig werden Trigger der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis- als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um den Trigger älteren Quellen zuzuordnen. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichtprioritäten und -beschränkungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, um zu verhindern, dass Attributionsduplikate erzeugt werden – zum Beispiel, wenn ein Benutzer denselben Artikel mehrfach in einen Warenkorb legt. Siehe [Verhinderung von Duplikation in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den im entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header festgelegten `filter_data` zu setzen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Informationen.

## Beispiele

### Einen Trigger für einen Ereignisbericht registrieren

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Response-Header wie folgt setzen, um einen Trigger zu registrieren, der einer Quellenzuordnung auf Ereignisebene entspricht:

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

### Einen Trigger für einen Zusammenfassungsbericht registrieren

Bei der Registrierung eines Triggers, der mit einer Quellenzuordnung für einen Zusammenfassungsbericht übereinstimmen soll, müssen die folgenden Felder enthalten sein:

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
