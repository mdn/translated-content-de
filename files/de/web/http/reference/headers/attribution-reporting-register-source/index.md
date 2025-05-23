---
title: Attribution-Reporting-Register-Source header
short-title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP-**`Attribution-Reporting-Register-Source`**-{{Glossary("response_header", "Antwortheader")}} registriert ein Seitenmerkmal als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den {{HTTPHeader("Attribution-Reporting-Eligible")}}-Header enthält. Er gibt die Informationen an, die der Browser speichern soll, wenn ein Benutzer mit der Attributionsquelle interagiert. Die Informationen, die Sie in diesem Header angeben, bestimmen auch die Arten von Berichten, die der Browser generieren kann.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Site die Attribution Reporting API nicht in einem erfolgreichen [Privacy-Sandbox-Anmeldeprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) eingeschlossen hat, wird der `Attribution-Reporting-Register-Source`-Header ignoriert, und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwortheader")}}
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

  - : Ein JSON-String, der Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Verfügbare Felder sind wie folgt:

    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie bei der Interaktion mit der Attributionsquelle anderen Informationen zuzuordnen oder Informationen am Berichtsendpunkt zusammenzufassen. Der String muss ausschließlich aus einer basis-10-formatierten 64-Bit-Ganzzahl bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Site entspricht (Schema + {{Glossary("eTLD", "eTLD+1")}}), auf der ein Trigger erwartet wird. Diese werden verwendet, um den Attributionstrigger mit der Quelle abzugleichen, wenn ein Trigger genutzt wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die unterschiedliche Datenpunkte zur Aggregation von Berichtsvariablen darstellen.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in generierten aggregierbaren Berichten enthalten sein werden (dies wird als **Berichtszeitfenster** bezeichnet). Wenn nicht gesetzt, wird der Standardwert `"expiry"` verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine basis-10-formatierte 64-Bit-Ganzzahl, die einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie neben dem zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) erzeugen möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` festgelegt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl gleich oder größer als `0`, die die Menge an [Rauschen, das Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports), steuert. Niedrigere Epsilon-Werte führen zu mehr Rauschen und bieten daher einen besseren Schutz der Privatsphäre. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger dieser Quelle nicht mehr für die Erstellung von Ereignisebenenberichten zugeordnet werden (dies wird als **Berichtszeitfenster** bezeichnet). Falls nicht gesetzt, fällt das Berichtszeitfenster auf den Wert `"expiry"` zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da sonst die Quellregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtszeitfenstern darstellt, beginnend mit `"start_time"`, wobei Berichte für diese Quelle nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit des Berichtversands über mehrere Berichte hinweg zu variieren. Wenn nicht gesetzt, fällt das Berichtszeitfenster auf den Wert `"expiry"` zurück. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtszeitfenster angibt. Wenn nicht angegeben, ist der Standardwert `0`.
        - `"end_times"`: Ein Array positiver Zahlen, das Endzeiten für nachfolgende Berichtszeitfenster angibt. Die Werte müssen steigende Zahlen sein, die größer als `"start_time"` sind.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da sonst die Quellregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv sein wird (d.h. nachfolgende Trigger werden dieser Quelle nicht mehr zugeschrieben). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` einschließlich, die die Gesamtanzahl der Ereignisebenenberichte angibt, die diese Quelle generieren kann. Sobald dieses Maximum erreicht ist, kann die Quelle keine neuen Daten mehr produzieren. Falls nicht angegeben, beträgt der Standardwert von `"max_event_level_reports"` `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konversionen der jüngsten passenden Quelle zugeordnet. Für sowohl Event-Level- als auch zusammenfassende Berichte setzen Sie eine höhere Prioritätszahl, um bestimmte Quellen zu priorisieren. Ein Beispiel: Ein Wert von `2` hat Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Report-Prioritäten und -Grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit-Ganzzahlen, das Daten beschreibt, die die verschiedenen Triggereignisse darstellen, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer hat Artikel zum Warenkorb hinzugefügt" oder "Benutzer hat sich für Mailingliste angemeldet" Aktionen sein, die auf der Triggersite stattfinden und eine Art Umwandlung anzeigen, die der Werbetreibende zu messen versucht. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) für die Event-Level-Attribution angegeben sind. Falls nicht angegeben, beträgt der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte zur Darstellung jedes Ereignisses und die Anzahl der Elemente im Array sind völlig willkürlich und werden von Ihnen als Entwickler festgelegt. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit sie der Quelle vom Browser zugeordnet werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der angibt, wie die `"trigger_data"` aus dem Trigger gegen die `"trigger_data"` der Quelle abgeglichen werden. Mögliche Werte sind:

        - `"exact"`: Die `"trigger_data"` aus dem Trigger muss genau einem in der `"trigger_data"` der Quelle enthaltenen Wert entsprechen; wenn es keine solche Übereinstimmung gibt, findet keine Event-Level-Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` die `"trigger_data"` aus dem Trigger ist und `allowedValues` die Sequenz von Werten im `"trigger_data"`-Array der Quelle ist. Wenn das Ergebnis dieser Berechnung einem Wert im `"trigger_data"`-Array der Quelle entspricht, ist das Matching erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert in erster Linie aus Gründen der Abwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde. Daher werden Sie ihn wahrscheinlich nicht verwenden. Es ist immer noch nützlich in besonderen Fällen, die eine sehr spezifische Art der Kompression erfordern, die zu kleineren Registrierungs-Headern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf der Quellart gemäß der maximalen Anzahl von Quell-`"trigger_data"`-Elementen festlegen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine zusammenhängende Sequenz von Ganzzahlen bilden, beginnend bei 0. Wenn die Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Falls nicht angegeben, ist der Standardwert für `"trigger_data_matching"` `"modulus"`. Der Grund hierfür ist die Abwärtskompatibilität: Das Weglassen des `"trigger_data_matching"`-Feldes muss zum gleichen Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen Event-Level-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source`-Antwortheader folgendermaßen setzen, um einen Browser zu veranlassen, einen Event-Level-Bericht zu erstellen, wenn ein Trigger auf eine Quelle passt:

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

Um den Browser zu veranlassen, einen zusammenfassenden Bericht zu erstellen, wenn ein Trigger auf eine Quelle passt, müssen Sie einige zusätzliche Felder _zusätzlich_ zu denen angeben, die zur Erstellung eines Event-Level-Berichts erforderlich sind.

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
