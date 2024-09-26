---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{HTTPSidebar}}{{seecompattable}}

Der **`Attribution-Reporting-Register-Source`** Header registriert ein Seitenmerkmal als [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dies wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen {{httpheader("Attribution-Reporting-Eligible")}} Header enthielt. Es liefert die Informationen, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren kann.

Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Datenschutz-Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) enthalten hat, wird der `Attribution-Reporting-Register-Source` Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
Attribution-Reporting-Register-Source: <json-string>
```

## Direktiven

- `<json-string>`

  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Verfügbare Felder sind wie folgt:

    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie anderen Informationen zuzuordnen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen am Berichtsendpunkt zu aggregieren. Der String muss ausschließlich aus einer im Basis-10-Format formatierten 64-Bit-Zahl bestehen.
    - `"destination"`
      - : Ein einziger String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Seite (Schema + [eTLD+1](/de/docs/Glossary/eTLD)) entspricht, auf der ein Trigger erwartet wird. Diese werden verwendet, um den Attributionstrigger mit der Quelle abzugleichen, wenn mit einem Trigger interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellen, um Berichtswerte zusammenzufassen.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten nicht mehr in generierte aggregierbare Berichte aufgenommen werden (dies wird als **Berichtsfenster** bezeichnet). Falls nicht gesetzt, wird standardmäßig der Wert `"expiry"` verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Ein im Basis-10-Format formulierter 64-Bit-Ganzzahl, der einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie diesen auf `true`, um festzulegen, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge des [Rauschens, das Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports), steuert. Niedrigere Epsilon-Werte führen zu mehr Rauschen und bieten daher einen besseren Schutz der Privatsphäre. Die maximalen und die Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und einen Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger dieser Quelle nicht mehr zugeordnet werden können, um Ereignisberichte zu erstellen (dies wird als **Berichtsfenster** bezeichnet). Falls nicht gesetzt, fällt das Ereignisberichtsfenster auf den Wert `"expiry"` zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` festgelegt ist, kann `"event_report_windows"` nicht angegeben werden, ansonsten schlägt die Quellenregistrierung fehl.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, die bei `"start_time"` beginnen und bei denen Berichte für diese Quelle nach jeder angegebenen Endzeit in `"end_times"` bereitgestellt werden. Dies kann verwendet werden, um die Zeit der Berichterstattung über mehrere Berichte zu variieren. Falls nicht gesetzt, fällt das Ereignisberichtsfenster auf den Wert `"expiry"` zurück. Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfenster angibt. Falls nicht angegeben, wird `0` als Standardwert gesetzt.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Berichtsfenster angeben. Die Werte müssen zunehmen und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` festgelegt ist, kann `"event_report_window"` nicht angegeben werden, ansonsten schlägt die Quellenregistrierung fehl.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger sind dieser Quelle nicht mehr zuordenbar). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit festgelegt wird.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte generieren. Weitere Details finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` inklusive, die die Gesamtanzahl der Ereignisberichte spezifiziert, die diese Quelle generieren kann. Nach Erreichen dieses Maximums ist die Quelle nicht mehr in der Lage, neue Daten zu produzieren. Wenn nicht angegeben, wird `"max_event_level_reports"` standardmäßig für navigationsbasierte Quellen auf `3` und für ereignisbasierte (bild- oder skriptbasierte) Quellen auf `1` gesetzt.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konversionen der zuletzt übereinstimmenden Quelle zugeordnet. Für sowohl ereignisbasierten als auch zusammenfassenden Berichten setzen Sie eine höhere Prioritätsnummer, um spezifische Quellen zu priorisieren. Zum Beispiel hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -beschränkungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit-Ganzzahlen ohne Vorzeichen, die Daten darstellen, die die verschiedenen Triggerereignisse beschreiben, die zu dieser Quelle passen könnten. Beispielsweise könnten "Benutzer hat Artikel in den Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet" Aktionen sein, die auf der Triggerseite stattfinden und diese Quelle und eine Art von Konversion anzeigen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` übereinstimmen, die in [Triggers](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben ist, damit eine ereignisbasierte Attribution stattfinden kann. Wenn weggelassen, wird `"trigger_data"` standardmäßig auf `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen gesetzt.

        > [!NOTE]
        > Die Werte, die jedes Ereignis darstellen, und die Anzahl der Elemente im Array sind völlig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, um von der Quelle bei der Registrierung eines Triggers durch den Browser zugeordnet zu werden.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der angibt, wie das `"trigger_data"` des Triggers mit dem `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Das `"trigger_data"` des Triggers muss genau mit einem Wert übereinstimmen, der im `"trigger_data"` der Quelle enthalten ist; wenn es keine solche Übereinstimmung gibt, findet keine ereignisbasierte Attribution statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` des Triggers ist und `allowedValues` die Sequenz der Werte im `"trigger_data"` Array der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"` Array der Quelle übereinstimmt, ist die Übereinstimmung erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"` Modus existiert hauptsächlich aus Gründen der Rückwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde, und deshalb ist es unwahrscheinlich, dass Sie ihn verwenden. Er ist jedoch in bestimmten Fällen nützlich, die eine ganz bestimmte Art der Kompression erfordern, was zu kleineren Registrierungsheaders führt. Dies kann notwendig sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf dem Quelltyp entsprechend der maximalen Anzahl von `"trigger_data"` Elementen der Quelle einstellen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine zusammenhängende Folge von Ganzzahlen bilden, beginnend bei 0. Wenn die Triggerdaten keine solche Folge bilden, tritt ein Fehler auf.

        Falls nicht angegeben, wird `"trigger_data_matching"` standardmäßig auf `"modulus"` gesetzt. Der Grund dafür ist die Rückwärtskompatibilität: Das Weglassen des `"trigger_data_matching"` Feldes muss zu dem gleichen Verhalten führen, das vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrieren einer Quelle für einen ereignisbasierten Bericht

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Header wie folgt setzen, um einen Browser dazu zu bringen, einen ereignisbasierten Bericht zu generieren, wenn ein Trigger mit einer Quelle abgeglichen wird:

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

### Registrieren einer Quelle für einen zusammenfassenden Bericht

Um den Browser dazu zu bringen, einen zusammenfassenden Bericht zu generieren, wenn ein Trigger mit einer Quelle abgeglichen wird, müssen Sie einige zusätzliche Felder _zusätzlich_ zu den für die ereignisbasierte Berichterstellung erforderlichen einschließen.

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
