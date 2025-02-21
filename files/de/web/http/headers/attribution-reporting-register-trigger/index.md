---
title: Attribution-Reporting-Register-Trigger
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Trigger
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Trigger`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers). Dieser Header wird als Teil einer Antwort auf eine Anfrage enthalten, die den Header {{HTTPHeader("Attribution-Reporting-Eligible")}} enthält.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Website die Attribution Reporting API nicht in einem erfolgreichen [Privacy Sandbox Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthält, wird der `Attribution-Reporting-Register-Trigger` Header ignoriert und Attribution-Trigger werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
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

  - : Ein JSON-String, der Daten bereitstellt, die in generierten Berichten enthalten sein können, wie z.B. die ID des Triggers sowie Prioritäts- und Duplizierungswerte. Verfügbare Felder sind wie folgt:

    - `"aggregatable_trigger_data"`
      - : Ein Array von Objekten, von denen jedes einen Aggregationsschlüssel definiert, der auf verschiedene Quellschlüssel angewendet wird. Jedes Objekt enthält die folgenden Eigenschaften:
        - `"key_piece"`
          - : Ein hexadezimaler Wert, der einen Schlüssel darstellt.
        - `"source_keys"`
          - : Ein Array, das einen oder mehrere Schlüsselwerte für die Daten enthält.
    - `"aggregatable_values"`
      - : Ein Objekt, das Eigenschaften enthält, die einen Wert für jeden in `"aggregatable_trigger_data"` definierten Datenpunkt repräsentieren. In jedem Fall entspricht der Eigenschaftsname dem Namen, der in `"source_keys"` definiert ist, und der Eigenschaftswert ist irgendein beliebiger Wert, den Sie benötigen.
    - `"debug_key"` {{optional_inline}}
      - : Eine Zahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"filters"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten enthält, die verwendet werden können, um zu filtern, welche Trigger Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"event_trigger_data"`

      - : Ein Objekt, das Daten über den Trigger repräsentiert. Verfügbare Unterfelder sind wie folgt:

        - `"trigger_data"`

          - : Ein String, der Daten repräsentiert, die den Trigger beschreiben und typischerweise verwendet werden, um Ereignisse wie „Benutzer hat Artikel zum Warenkorb hinzugefügt“ oder „Benutzer hat sich für Mailingliste angemeldet“ anzuzeigen. Dieser Wert wird in den generierten Event-Ebene-Bericht aufgenommen, falls vorhanden, obwohl er basierend auf dem Attributions-Quellfeld [`"trigger_data_matching"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#trigger_data_matching) modifiziert werden kann.

            > [!NOTE]
            > Die Werte, die verwendet werden, um jedes Ereignis zu repräsentieren, sowie die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um beim Registrieren eines Triggers der Quelle durch den Browser zugeordnet zu werden.

        - `"priority"` {{optional_inline}}
          - : Ein String, der einen Prioritätswert für den Attribution-Trigger darstellt. Standardmäßig werden Trigger der neuesten passenden Quelle zugeordnet. Für sowohl Ereignis-Ebene- als auch zusammenfassende Berichte setzen Sie eine höhere Prioritätsnummer, um den Trigger älteren Quellen zuzuordnen. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert `1`. Siehe [Berichtsprioritäten und -beschränkungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
        - `"deduplication_key"` {{optional_inline}}
          - : Ein String, der einen eindeutigen Schlüssel darstellt, der verwendet werden kann, um zu verhindern, dass Zuordnungen dupliziert werden – zum Beispiel, wenn ein Benutzer denselben Artikel mehrfach in einen Warenkorb legt. Siehe [Verhinderung von Duplikaten in Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/prevent-duplication) für weitere Informationen.
        - `"filters"` {{optional_inline}}
          - : Ein Objekt, das Filter enthält, die selektive Filterung durchführen, um `"trigger_data"`, `"priority"` und `"deduplication_key"` basierend auf den in einem entsprechenden {{HTTPHeader("Attribution-Reporting-Register-Source")}} Header gesetzten `filter_data` einzustellen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Informationen.

## Beispiele

### Registrierung eines Triggers für einen Event-Ebene-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Trigger` Antwort-Header wie folgt setzen, um einen Trigger zu registrieren, der mit einer Ereignis-Ebene-Attributionsquelle übereinstimmt:

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

Bei der Registrierung eines Triggers, der mit einer zusammenfassenden Attributionsquelle übereinstimmen soll, müssen Sie die folgenden Felder einbeziehen:

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
