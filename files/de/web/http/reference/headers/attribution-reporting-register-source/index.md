---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Antwort-Header")}} registriert ein Seitenmerkmal als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}} Header enthält. Er liefert die Informationen, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die Informationen, die Sie in diesem Header angeben, bestimmen auch die Arten von Berichten, die der Browser erzeugen kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Anmeldeprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) enthalten hat, wird der Header `Attribution-Reporting-Register-Source` ignoriert und Attributionsquellen werden nicht registriert.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Register-Source: <json-string>
```

## Direktiven

- `<json-string>`

  - : Ein JSON-String, der die Informationen enthält, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Die verfügbaren Felder sind wie folgt:

    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie mit anderen Informationen zu verbinden, wenn mit der Attributionsquelle interagiert wird, oder aggregierte Informationen am Berichtsendpunkt. Der String muss ausschließlich aus einer im Basis-10-Format formatierten 64-Bit-Unsigned-Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1 bis 3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Website (Schema + {{Glossary("eTLD", "eTLD+1")}}) entspricht, auf der ein Trigger erwartet wird. Diese werden verwendet, um den Attribution-Trigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte darstellen, um Berichtswerte zusammenzufassen.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in generierte aggregierbare Berichte aufgenommen werden (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, wird dies standardmäßig auf den `"expiry"`-Wert gesetzt.
    - `"debug_key"` {{optional_inline}}
      - : Eine im Basis-10-Format formatierte 64-Bit-Unsigned-Integer, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) erzeugen möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` festgelegt ist, setzen Sie ihn auf `true`, um anzugeben, dass der erstellte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl gleich oder größer als `0`, die die Menge an [Rauschen steuert, das den Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports). Niedrigere Epsilon-Werte führen zu mehr Rauschen und bieten daher einen höheren Schutz der Privatsphäre. Die maximalen und standardmäßigen Werte variieren je nach Implementierung; Chrome hat zum Beispiel einen maximalen und standardmäßigen Wert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger für die Erstellung von Berichten auf Ereignisebene nicht mehr dieser Quelle zuordenbar sind (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, fällt das Ereignisberichtsfenster auf den `"expiry"`-Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, ansonsten schlägt die Quellregistrierung fehl.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend bei `"start_time"`, mit Berichten für diese Quelle, die nach jeder angegebenen Endzeit in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtsübermittlung über mehrere Berichte hinweg zu variieren. Wenn nicht festgelegt, fällt das Ereignisberichtsfenster auf den `"expiry"`-Wert zurück. Die Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht negative Zahl, die die Startzeit für die Berichtserstattungsfenster angibt. Wenn nicht angegeben, ist der Standardwert `0`.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Berichtsfenster angeben. Die Werte müssen aufsteigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, ansonsten schlägt die Quellregistrierung fehl.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv sein wird (d.h. nachfolgende Trigger können dieser Quelle nicht mehr zugeordnet werden). Die maximale zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte erzeugen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20`, einschließlich, die die Gesamtzahl von Ereignisberichten angibt, die diese Quelle erzeugen kann. Sobald dieses Maximum erreicht ist, ist die Quelle nicht mehr in der Lage, neue Daten zu erzeugen. Wenn nicht angegeben, beträgt der Standardwert für `"max_event_level_reports"` `3` für navigation-basierte Quellen und `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Zuordnungen der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Ereignis- als auch zusammenfassende Berichte setzen Sie eine höhere Prioritätsnummer, um bestimmte Quellen zu priorisieren. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Siehe [Berichtsprioritäten und -limits](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit-Unsigned-Integers, das Daten darstellt, die die verschiedenen Trigger-Ereignisse beschreibt, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer fügt Artikel dem Einkaufswagen hinzu" oder "Benutzer meldet sich für die Mailingliste an" Aktionen auf der Trigger-Site sein, die dieser Quelle entsprechen könnten und eine Art Umwandlung anzeigen, die der Werbetreibende zu messen versucht. Diese müssen gegen `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben ist, damit eine Zuordnung auf Ereignisebene erfolgt. Falls nicht angegeben, lautet der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigation-basierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jedes Ereignis repräsentieren, und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um der Quelle vom Browser zugeordnet zu werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der angibt, wie das `"trigger_data"` vom Trigger mit dem `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Das `"trigger_data"` vom Trigger muss genau mit einem Wert übereinstimmen, der im `"trigger_data"` der Quelle enthalten ist; wenn es keine solche Übereinstimmung gibt, erfolgt keine Zuordnung auf Ereignisebene.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` vom Trigger ist und `allowedValues` die Sequenz von Werten im `"trigger_data"`-Array der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"`-Array der Quelle übereinstimmt, ist die Übereinstimmung erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert hauptsächlich für die Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und ist daher unwahrscheinlich, dass Sie ihn verwenden werden. Er ist weiterhin in bestimmten Fällen nützlich, die eine sehr spezifische Art von Komprimierung erfordern, die zu kleineren Registrierungs-Headern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet werden muss, die das Setzen unterschiedlicher Trigger-Daten basierend auf dem Quelltyp gemäß der maximalen Anzahl von `"trigger_data"`-Elementen der Quelle erfordert.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine kontinuierliche Abfolge von Ganzzahlen bilden, beginnend bei 0. Wenn die Trigger-Daten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, wird `"trigger_data_matching"` standardmäßig auf `"modulus"` gesetzt. Der Grund hierfür ist die Rückwärtskompatibilität: Das Weglassen des `"trigger_data_matching"` Feldes muss zu demselben Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen Bericht auf Ereignisebene

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source`-Antwort-Header wie folgt setzen, um einen Browser zu veranlassen, einen Bericht auf Ereignisebene zu generieren, wenn ein Trigger mit einer Quelle abgeglichen wird:

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://shop.example",
    trigger_data: [0, 1, 2, 3, 4],
    trigger_data_matching: "exact",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",
  }),
);
```

### Registrierung einer Quelle für einen zusammenfassenden Bericht

Um den Browser zu veranlassen, einen zusammenfassenden Bericht zu generieren, wenn ein Trigger mit einer Quelle abgeglichen wird, müssen einige zusätzliche Felder _zusätzlich_ zu denjenigen, die für die Erstellung von Berichten auf Ereignisebene erforderlich sind, hinzugefügt werden.

```js
res.set(
  "Attribution-Reporting-Register-Source",
  JSON.stringify({
    source_event_id: "412444888111012",
    destination: "https://shop.example",
    trigger_data: [0, 1, 2, 3, 4],
    trigger_data_matching: "exact",
    expiry: "604800",
    priority: "100",
    debug_key: "122939999",
    event_report_window: "86400",

    aggregation_keys: {
      campaignCounts: "0x159",
      geoValue: "0x5",
    },
    aggregatable_report_window: "86400",
  }),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
