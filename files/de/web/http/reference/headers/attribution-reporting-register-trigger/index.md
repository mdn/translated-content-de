---
title: Attribution-Reporting-Register-Trigger header
short-title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenelement als einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header wird als Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}}-Header enthält, eingefügt.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) aufgenommen hat, wird der `Attribution-Reporting-Register-Trigger`-Header ignoriert, und Attribution-Trigger werden nicht registriert.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwort-Header")}}
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

  - : Eine JSON-Zeichenkette, die Daten bereitstellt, welche in generierte Berichte aufgenommen werden können, wie etwa die ID des Triggers sowie Prioritäts- und Deduplikationswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel für verschiedene Quellenschlüssel definiert. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein Hexadezimalwert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden Datenpunkt darstellen, der in `"aggregatable_trigger_data"` definiert ist. In jedem Fall entspricht der Eigenschaftenname dem in `"source_keys"` definierten Namen und der Eigenschaftswert ist der von Ihnen benötigte beliebige Wert.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) neben dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein booleanischer Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein detaillierter Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Trigger Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für mehr Details.
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Trigger darstellt. Verfügbare Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Eine Zeichenkette, die Daten darstellt, die den Trigger beschreiben, welche typischerweise verwendet werden, um Ereignisse anzugeben wie "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für den Newsletter angemeldet". Dieser Wert wird in den generierten, Ereignis-Layer-Bericht, wenn vorhanden, aufgenommen, obwohl er Änderungen unterliegt, basierend auf dem "`"trigger_data_matching"`]-Feld der zugeordneten Quelle (`"trigger_data_matching"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#trigger_data_matching)).

            > [!NOTE]
            > Die zum Darstellen jedes Ereignisses verwendeten Werte und die Anzahl der Elemente im Array sind vollständig frei von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von der Quelle durch den Browser zugewiesen zu werden, wenn ein Trigger registriert wird.

        - `"priority"` {{optional_inline}}
          - : Eine Zeichenkette, die einen Prioritätswert für den Attribution-Trigger darstellt. Standardmäßig werden Trigger der zuletzt passenden Quelle zugewiesen. Für sowohl Ereignisebenen- als auch Übersichtsberichte können Sie eine höhere Prioritätsnummer setzen, um den Trigger älteren Quellen zuzuordnen. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
        - `"deduplication_key"` {{optional_inline}}
          - : Eine Zeichenkette, die einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Attributierungen dupliziert werden — zum Beispiel, wenn ein Benutzer dasselbe Produkt mehrfach in den Warenkorb legen würde. Weitere Informationen finden Sie unter [Verhinderung von Duplizierung in Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/prevent-duplication).
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektives Filtern ermöglichen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den `filter_data`, die in einem korrespondierenden {{HTTPHeader("Attribution-Reporting-Register-Source")}}-Header gesetzt sind, zu definieren. Weitere Informationen finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).

## Beispiele

### Registrierung eines Triggers für einen Ereignisebenen-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Antwort-Header wie folgt setzen, um einen Trigger zu registrieren, der für die Zuordnung zu einer Ereignisebenen-Berichtsquelle vorgesehen ist:

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

### Registrierung eines Triggers für einen Übersichtsbericht

Wenn Sie einen Trigger registrieren, der für die Zuordnung zu einer Übersichtsbericht-Quelle vorgesehen ist, müssen Sie die folgenden Felder einfügen:

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
