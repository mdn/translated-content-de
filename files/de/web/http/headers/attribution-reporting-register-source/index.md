---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{HTTPSidebar}}{{seecompattable}}

Der **`Attribution-Reporting-Register-Source`**-Header registriert ein Seitenmerkmal als [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dies ist Teil einer Antwort auf eine Anfrage, die einen {{httpheader("Attribution-Reporting-Eligible")}}-Header enthielt. Er bietet die Informationen, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Die Informationen, die Sie in diesem Header angeben, bestimmen auch, welche Arten von Berichten der Browser generieren kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht erfolgreich im [Privacy Sandbox Enrollment-Prozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) eingebunden hat, wird der `Attribution-Reporting-Register-Source`-Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherte Antwort-Header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Attribution-Reporting-Register-Source: <json-string>
```

## Direktiven

- `<json-string>`

  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Verfügbare Felder sind wie folgt:

    - `"source_event_id"` {{optional_inline}}
      - : Eine Zeichenkette, die eine ID für die Attributionsquelle darstellt und verwendet werden kann, um sie anderen Informationen zuzuordnen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Berichtsendpunkt zu aggregieren. Die Zeichenkette muss ausschließlich aus einer basis-10-formatierten 64-Bit-Unsigned-Integer bestehen.
    - `"destination"`
      - : Eine einzelne Zeichenkette oder ein Array von 1–3 Zeichenketten. Diese Zeichenketten müssen eine vollständige URL enthalten, die der Seite (Schema + {{Glossary("eTLD", "eTLD+1")}}) entspricht, auf der ein Trigger erwartet wird. Diese werden verwendet, um den Attributionstrigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, um Berichtswerte darunter zu aggregieren.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in aggregierbaren Berichten enthalten sind (dies wird als **Berichtszeitfenster** bezeichnet). Wenn nicht gesetzt, wird standardmäßig der `"expiry"`-Wert verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine basis-10-formatierte 64-Bit-Unsigned-Integer, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge an [Rauschen kontrolliert, die Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports). Niedrigere Epsilon-Werte führen zu mehr Rauschen und bieten daher einen höheren Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger dieser Quelle zur Erstellung von Event-Level-Berichten nicht mehr zugeordnet werden (dies wird als **Berichtszeitfenster** bezeichnet). Wenn nicht gesetzt, wird das Event-Berichtszeitfenster auf den `"expiry"`-Wert zurückgesetzt.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da andernfalls die Quellenregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtszeitfenstern darstellt, beginnend bei `"start_time"`, mit Berichten für diese Quelle, die nach jeder angegebenen Endzeit in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtszustellung über mehrere Berichte hinweg zu variieren. Wenn nicht gesetzt, wird das Event-Berichtszeitfenster auf den `"expiry"`-Wert zurückgesetzt. Die Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht negative Zahl, die den Beginn der Berichtszeitfenster angibt. Wenn nicht angegeben, ist der Standardwert `0`.
        - `"end_times"`: Ein Array positiver Zahlen, die Endzeiten für nachfolgende Berichtszeitfenster angeben. Die Werte müssen steigen und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da andernfalls die Quellenregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Eine Zeichenkette, die eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d. h. nachfolgende Trigger können dieser Quelle nicht mehr zugeordnet werden). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht ausdrücklich gesetzt wird.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte generieren. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Details.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` (einschließlich), die die Gesamtanzahl der Event-Level-Berichte angibt, die diese Quelle generieren kann. Nachdem dieses Maximum erreicht ist, kann die Quelle keine neuen Daten mehr produzieren. Wenn nicht angegeben, liegt der Standardwert für `"max_event_level_reports"` bei `3` für navigationsbasierte Quellen und bei `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Eine Zeichenkette, die einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konversionen der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl Event-Level als auch Summary-Berichte können Sie eine höhere Prioritätsnummer setzen, um bestimmte Quellen zu priorisieren. Ein Wert von `2` beispielsweise erhält Vorrang vor dem Standardwert von `1`. Siehe [Bericht-Prioritäten und -Grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits) für weitere Informationen.
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array 32-Bit-Unsigned-Integers, die Daten repräsentieren, welche die verschiedenen Triggerereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Beispielsweise könnten "Benutzer hat Artikel in den Einkaufswagen gelegt" oder "Benutzer hat sich für Mailingliste angemeldet" Aktionen sein, die auf der Triggerseite passieren, die mit dieser Quelle übereinstimmen und eine Art Konversion anzeigen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [Triggern](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine Level-attribution erfolgen kann. Falls nicht angegeben, ist der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jedes Ereignis repräsentieren, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um vom Browser der Quelle zugeordnet zu werden, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Eine Zeichenkette, die angibt, wie `"trigger_data"` vom Trigger mit der `"trigger_data"` aus der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Die `"trigger_data"` vom Trigger muss genau einem Wert entsprechen, der in `"trigger_data"` der Quelle enthalten ist; wenn es keine solche Übereinstimmung gibt, findet keine Event-Level-Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` die `"trigger_data"` vom Trigger ist und `allowedValues` die Sequenz der Werte im `"trigger_data"`-Array der Quelle. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"`-Array der Quelle übereinstimmt, ist die Übereinstimmung ein Erfolg. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert hauptsächlich für die Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde. Daher ist es unwahrscheinlich, dass Sie ihn verwenden würden. Er ist jedoch in besonderen Fällen nützlich, die eine sehr spezifische Art von Kompression erfordern, die zu kleineren Registrierungs-Headern führt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf dem Quelltyp gemäß der maximalen Anzahl von Quellen-`"trigger_data"`-Elementen setzen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine fortlaufende Sequenz von Ganzzahlen bilden, beginnend bei 0. Wenn die Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, ist der Standardwert für `"trigger_data_matching"` `"modulus"`. Der Grund dafür ist erneut die Rückwärtskompatibilität: Das Weglassen des `"trigger_data_matching"`-Feldes muss zum gleichen Verhalten führen, wie es vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen Event-Level-Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Antwort-Header wie folgt setzen, um einen Browser dazu zu bringen, einen Event-Level-Bericht zu generieren, wenn ein Trigger zu einer Quelle passt:

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

### Registrierung einer Quelle für einen Summary-Bericht

Um den Browser dazu zu bringen, einen Summary-Bericht zu generieren, wenn ein Trigger zu einer Quelle passt, müssen Sie einige zusätzliche Felder _zusätzlich_ zu denen hinzufügen, die für die Generierung von Event-Level-Berichten erforderlich sind.

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

- {{httpheader("Attribution-Reporting-Eligible")}}
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
