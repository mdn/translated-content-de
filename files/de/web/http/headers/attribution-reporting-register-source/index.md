---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}{{seecompattable}}

Der **`Attribution-Reporting-Register-Source`** Header registriert ein Seitenmerkmal als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser ist Teil einer Antwort auf eine Anfrage, die einen {{httpheader("Attribution-Reporting-Eligible")}} Header beinhaltet hat. Er liefert die Informationen, die der Browser speichern soll, wenn auf die Attributionsquelle zugegriffen wird. Die Informationen, die Sie in diesen Header aufnehmen, bestimmen auch, welche Arten von Berichten der Browser erstellen kann.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht im Rahmen eines erfolgreichen [Privacy Sandbox-Anmeldeprozesses](/de/docs/Web/Privacy/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Source` Header ignoriert und Attributionsquellen werden nicht registriert.

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

  - : Ein JSON-String, der die Informationen bereitstellt, die der Browser speichern soll, wenn mit der Attributionsquelle interagiert wird. Verfügbare Felder sind:

    - `"source_event_id"` {{optional_inline}}
      - : Ein String, der eine ID für die Attributionsquelle darstellt, die verwendet werden kann, um sie bei einer Interaktion mit der Quelle auf andere Informationen abzubilden oder Informationen am Berichts-Endpunkt zu aggregieren. Der String muss ausschließlich aus einer in Basis-10 formatierten 64-Bit-Integerzahl bestehen.
    - `"destination"`
      - : Ein einzelner String oder ein Array von 1–3 Strings. Diese Strings müssen eine vollständige URL enthalten, die der Seite (Schema + [eTLD+1](/de/docs/Glossary/eTLD)) entspricht, auf der ein Auslöser erwartet wird. Diese werden verwendet, um den Attributionstrigger mit der Quelle abzugleichen, wenn ein Auslöser aktiv wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte darstellen, unter denen Berichtswerte aggregiert werden sollen.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der Triggerdaten in generierten aggregierbaren Berichten nicht mehr enthalten sein werden (dies wird als **Berichtszeitfenster** bezeichnet). Wenn nicht gesetzt, wird standardmäßig der `"expiry"`-Wert verwendet.
    - `"debug_key"` {{optional_inline}}
      - : Ein 64-Bit unsigned Integer in Basis-10-Format, der einen Debug-Schlüssel darstellt. Setzen Sie diesen, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein boolescher Wert. Wenn ein `debug_key` gesetzt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein ausführlicher Debug-Bericht sein soll.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die größer oder gleich `0` ist und die Menge des [Rauschens, das Berichten hinzugefügt wird](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#adding_noise_to_reports), kontrolliert. Niedrigere Werte von Epsilon führen zu mehr Rauschen und bieten daher einen höheren Schutz der Privatsphäre. Die maximalen und Standardwerte variieren je nach Implementierung; Chrome hat zum Beispiel einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Ein String, der eine Zeit in Sekunden darstellt, nach der nachfolgende Trigger nicht mehr dieser Quelle für den Zweck der Erstellung von Ereignis-Ebenen-Berichten zugeordnet werden (dies wird als **Berichtszeitfenster** bezeichnet). Wenn nicht gesetzt, fällt das Ereignis-Berichtszeitfenster auf den `"expiry"`-Wert zurück.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da die Quellregistrierung andernfalls fehlschlagen würde.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend mit `"start_time"`, wobei Berichte für diese Quelle nach jedem angegebenen Endzeitpunkt in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichterstellung über mehrere Berichte hinweg zu variieren. Wird es nicht gesetzt, fällt das Ereignis-Berichtszeitfenster auf den `"expiry"`-Wert zurück. Die Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die die Startzeit für die Berichtsfenster spezifiziert. Wenn nicht angegeben, ist der Standardwert `0`.
        - `"end_times"`: Ein Array von positiven Zahlen, die Endzeiten für nachfolgende Berichtsfenster spezifizieren. Die Werte müssen aufsteigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da die Quellregistrierung andernfalls fehlschlagen würde.
    - `"expiry"` {{optional_inline}}
      - : Ein String, der eine Ablaufzeit in Sekunden für die Attributionsquelle darstellt, nach der sie nicht mehr aktiv ist (d.h., nachfolgende Trigger werden dieser Quelle nicht mehr zugeordnet). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht explizit gesetzt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte erzeugen. Weitere Informationen finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` inklusive, die die Gesamtanzahl der Berichte auf Ereignis-Ebene festlegt, die diese Quelle erzeugen kann. Nach Erreichen dieses Maximums ist die Quelle nicht mehr in der Lage, neue Daten zu erzeugen. Wenn nicht angegeben, ist der Standardwert für `"max_event_level_reports"` `3` für navigationsbasierte Quellen und `1` für ereignisbasierte Quellen (bild- oder skriptbasiert).
    - `"priority"` {{optional_inline}}
      - : Ein String, der einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konversionen der neuesten übereinstimmenden Quelle zugeordnet. Für sowohl ereignisbasierte als auch zusammenfassende Berichte können Sie eine höhere Prioritätsnummer setzen, um bestimmte Quellen zu priorisieren. Beispielsweise hat ein Wert von `2` Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -grenzen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit unsigned Integer-Zahlen, die Daten darstellen, die die verschiedenen Triggerereignisse beschreiben, die mit dieser Quelle übereinstimmen könnten. Zum Beispiel könnten "Benutzer fügte Artikel zum Warenkorb hinzu" oder "Benutzer meldete sich für die Mailingliste an" Aktionen sein, die auf der Triggerseite stattfinden und diese Quelle entsprechend einer Art von Konversion darstellen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` übereinstimmen, die in den [Triggers](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine Attributierung auf Ereignis-Ebene erfolgt. Wenn nicht angegeben, ist der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jedes Ereignis darstellen, und die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber es müssen Werte im Array vorhanden sein, um von dem Browser der Quelle bei der Registrierung eines Triggers zugeordnet zu werden.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Ein String, der angibt, wie das `"trigger_data"` des Triggers mit dem `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Das `"trigger_data"` des Triggers muss genau mit einem Wert im `"trigger_data"` der Quelle übereinstimmen; wenn es keine solche Übereinstimmung gibt, findet keine Attributierung auf Ereignis-Ebene statt.
        - `"modulus"`: In diesem Fall wird die folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` das `"trigger_data"` des Triggers ist, und `allowedValues` die Abfolge von Werten im `"trigger_data"`-Array der Quelle ist. Wenn das Ergebnis dieser Berechnung mit einem Wert im `"trigger_data"`-Array der Quelle übereinstimmt, ist die Übereinstimmung erfolgreich. In einem solchen Fall wird der Wert immer übereinstimmen, es sei denn, `allowedValues` ist leer.

        Der `"modulus"` Modus existiert hauptsächlich aus Gründen der Abwärtskompatibilität mit dem Verhalten der API vor der Einführung von `"exact"`, und daher ist es unwahrscheinlich, dass Sie ihn verwenden. Es ist jedoch in bestimmten Fällen nützlich, die eine sehr spezifische Art der Kompression erfordern, die kleinere Registrierungsheader zur Folge hat. Dies kann erforderlich sein, wenn komplexe Filterlogik verwendet wird, die unterschiedliche Triggerdaten basierend auf dem Quelltyp gemäß der maximalen Anzahl von Quell-`"trigger_data"`<Werten setzen muss.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss das `"trigger_data"` der Quelle eine aufeinanderfolgende Folge von Ganzzahlen beginnend bei 0 bilden. Wenn die Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, ist der Standardwert für `"trigger_data_matching"` `"modulus"`. Auch hier liegt der Grund dafür in der Abwärtskompatibilität: Das Auslassen des `"trigger_data_matching"` Feldes muss zu demselben Verhalten führen, das vor der Einführung dieses Feldes zu beobachten war.

## Beispiele

### Registrieren einer Quelle für einen Bericht auf Ereignis-Ebene

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Antwort-Header wie folgt setzen, um einen Browser einen Bericht auf Ereignis-Ebene erstellen zu lassen, wenn ein Trigger einer Quelle zugeordnet wird:

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

### Registrieren einer Quelle für einen Zusammenfassungsbericht

Um den Browser einen Zusammenfassungsbericht erstellen zu lassen, wenn ein Trigger einer Quelle zugeordnet wird, müssen einige zusätzliche Felder _zusätzlich_ zu den für die Erstellung des Berichts auf Ereignis-Ebene erforderlichen hinzugefügt werden.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{httpheader("Attribution-Reporting-Eligible")}}
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)
