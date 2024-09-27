---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{HTTPSidebar}}{{seecompattable}}

Der **`Attribution-Reporting-Register-Source`**-Header registriert eine Seitenfunktion als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dies wird als Teil einer Antwort auf eine Anfrage aufgenommen, die einen {{httpheader("Attribution-Reporting-Eligible")}}-Header enthielt. Es liefert die Informationen, die der Browser speichern sollte, wenn mit der Attributionsquelle interagiert wird. Die in diesem Header enthaltenen Informationen bestimmen auch, welche Arten von Berichten der Browser generieren kann.

Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht in einem erfolgreichen [Anmeldeprozess für die Datenschutz-Sandbox](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Source`-Header ignoriert und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted Antwort-Header](/de/docs/Glossary/CORS-safelisted_response_header)
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
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die zur Zuordnung zu anderen Informationen verwendet werden kann, wenn mit der Attributionsquelle interagiert wird, oder zur Aggregation von Informationen am Berichtsendpunkt. Der String muss ausschließlich aus einer base-10-formatierten 64-Bit-Unsigned-Integer bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die zu der Seite (Schema + [eTLD+1](/de/docs/Glossary/eTLD)) gehört, auf der ein Auslöser erwartet wird. Diese werden verwendet, um den Attributionsauslöser an die Quelle anzupassen, wenn mit einem Auslöser interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das vom Benutzer bereitgestellte Schlüssel enthält, die verschiedene Datenpunkte darstellen, unter denen Berichtswerte aggregiert werden sollen.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Auslöserdaten nicht mehr in erzeugte aggregierbare Berichte aufgenommen werden (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht gesetzt, wird standardmäßig der `"expiry"`-Wert verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Eine base-10-formatierte 64-Bit-Unsigned-Integer, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie zusätzlich zum zugehörigen Attributionsbericht einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` festgelegt ist, setzen Sie diesen auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl größer oder gleich `0`, die die Menge des [Rauschens, das Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports), steuert. Niedrigere Werte von Epsilon führen zu mehr Rauschen und bieten daher mehr Datenschutz. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Auslöser für die Erstellung von Event-Level-Berichten dieser Quelle nicht mehr zugeordnet werden können (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht gesetzt, fällt das Event-Berichtsfenster auf den `"expiry"`-Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da sonst die Quellenregistrierung fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend bei `"start_time"`, wobei Berichte für diese Quelle nach jedem in `"end_times"` angegebenen Endzeitpunkt geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtsbereitstellung über mehrere Berichte hinweg zu variieren. Wenn nicht festgelegt, fällt das Event-Berichtsfenster auf den `"expiry"`-Wert zurück. Die Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfenster angibt. Wenn nicht angegeben, wird standardmäßig `0` verwendet.
        - `"end_times"`: Ein Array positiver Zahlen, die Endzeiten für nachfolgende Berichtsfenster spezifizieren. Die Werte müssen steigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da sonst die Quellenregistrierung fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablauffrist in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Auslöser können dieser Quelle nicht mehr zugeordnet werden). Die maximal zulässige Ablauffrist beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Umwandlungen Berichte erzeugen. Siehe [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters) für weitere Einzelheiten.
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` (einschließlich), die die Gesamtanzahl der Event-Level-Berichte angibt, die diese Quelle generieren kann. Nachdem dieses Maximum erreicht ist, kann die Quelle keine neuen Daten mehr erzeugen. Wenn nicht angegeben, beträgt der Standardwert von `"max_event_level_reports"` für navigationsbasierte Quellen `3` und für ereignisbasierte (bild- oder scriptbasierte) Quellen `1`.
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Umwandlungen der zuletzt passenden Quelle zugeordnet. Für sowohl Event-Level- als auch zusammenfassende Berichte können Sie eine höhere Prioritätsnummer setzen, um spezifische Quellen zu priorisieren. Ein Wert von `2` hat zum Beispiel Vorrang gegenüber dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit-Unsigned-Integers, die Daten darstellen, die die verschiedenen Triggerereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel "Benutzer fügte Artikel zum Einkaufswagen hinzu" oder "Benutzer meldete sich für Mailingliste an" könnten Aktionen auf der Triggerseite sein, die zu dieser Quelle passen und eine Art Umwandlung anzeigen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"`, das in [Triggers](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben ist, übereinstimmen, damit eine Event-Level-Zuordnung stattfindet. Wenn nicht angegeben, lautet der Standardwert von `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder scriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jedes Ereignis repräsentieren und die Anzahl der Elemente im Array, sind völlig willkürlich und werden von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit der Browser der Quelle zugeordnet werden kann, wenn ein Auslöser registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der angibt, wie das `"trigger_data"` des Triggers gegen das `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Das `"trigger_data"` des Triggers muss genau mit einem Wert im `"trigger_data"` der Quelle übereinstimmen; falls keine solche Übereinstimmung besteht, findet keine Event-Level-Zuordnung statt.
        - `"modulus"`: In diesem Fall wird folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` aus dem Trigger ist und `allowedValues` die Sequenz von Werten im `"trigger_data"`-Array der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"`-Array der Quelle übereinstimmt, ist der Abgleich erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert hauptsächlich aus Gründen der Abwärtskompatibilität mit dem Verhalten der API, bevor `"exact"` eingeführt wurde. Daher werden Sie ihn wahrscheinlich nicht verwenden. Er ist dennoch in bestimmten Fällen nützlich, die eine sehr spezifische Art der Kompression erfordern, die kleinere Registrierungsheader ergibt. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf dem Quellentyp gemäß der maximalen Anzahl von `"trigger_data"`-Elementen der Quelle festlegen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine zusammenhängende Folge von Ganzzahlen bilden, die bei 0 beginnt. Wenn die Triggerdaten keine solche Folge bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, wird `"trigger_data_matching"` standardmäßig auf `"modulus"` gesetzt. Auch hier liegt der Grund in der Abwärtskompatibilität: Das Weglassen des `"trigger_data_matching"`-Feldes muss das gleiche Verhalten zur Folge haben, das beobachtet wurde, bevor dieses Feld eingeführt wurde.

## Beispiele

### Eine Quelle für einen Event-Level-Bericht registrieren

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source`-Antwort-Header wie folgt setzen, damit ein Browser einen Event-Level-Bericht generiert, wenn ein Auslöser mit einer Quelle übereinstimmt:

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

### Eine Quelle für einen zusammenfassenden Bericht registrieren

Um den Browser einen zusammenfassenden Bericht generieren zu lassen, wenn ein Auslöser mit einer Quelle übereinstimmt, müssen einige zusätzliche Felder _zusätzlich_ zu denen aufgenommen werden, die für die Event-Level-Berichtserstellung erforderlich sind.

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
