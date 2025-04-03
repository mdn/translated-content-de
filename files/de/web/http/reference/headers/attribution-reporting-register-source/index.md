---
title: Attribution-Reporting-Register-Source
slug: Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}{{seecompattable}}

Der HTTP **`Attribution-Reporting-Register-Source`** {{Glossary("response_header", "Response-Header")}} registriert ein Seitenmerkmal als eine [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources). Dieser Header ist Teil einer Antwort auf eine Anfrage, die den Header {{HTTPHeader("Attribution-Reporting-Eligible")}} enthält. Er liefert die Informationen, die der Browser speichern sollte, wenn ein Benutzer mit der Attributionsquelle interagiert. Die in diesem Header enthaltenen Informationen bestimmen auch die Arten von Berichten, die der Browser erstellen kann.

Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

> [!NOTE]
> Wenn die aufrufende Seite die Attribution Reporting API nicht erfolgreich im Rahmen des [Privacy Sandbox Anmeldeprozesses](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) integriert hat, wird der `Attribution-Reporting-Register-Source` Header ignoriert, und Attributionsquellen werden nicht registriert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-zugelassener Response-Header")}}
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

  - : Eine JSON-Zeichenfolge, die die Informationen bereitstellt, die der Browser speichern sollte, wenn mit der Attributionsquelle interagiert wird. Verfügbare Felder sind wie folgt:

    - `"source_event_id"` {{optional_inline}}
      - : Eine Zeichenfolge, die eine ID für die Attributionsquelle darstellt, welche verwendet werden kann, um diese mit anderen Informationen zu verknüpfen, wenn mit der Attributionsquelle interagiert wird, oder um Informationen an der Berichtsendestelle zu aggregieren. Die Zeichenfolge muss ausschließlich aus einer base-10-formatierten 64-Bit-Unsigned Integer bestehen.
    - `"destination"`
      - : Eine einzelne Zeichenfolge oder ein Array von 1–3 Zeichenfolgen. Diese müssen eine vollständige URL enthalten, die der Seite (Schema + {{Glossary("eTLD", "eTLD+1")}}) entspricht, auf der ein Auslöser erwartet wird. Diese werden verwendet, um den Attributionsauslöser mit der Quelle abzugleichen, wenn mit einem Auslöser interagiert wird.
    - `"aggregation_keys"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Schlüssel enthält, die verschiedene Datenpunkte repräsentieren, unter denen Berichtswerte aggregiert werden.
    - `"aggregatable_report_window"` {{optional_inline}}
      - : Eine Zeichenfolge, die eine Zeit in Sekunden repräsentiert, nach der Trigggerdaten nicht mehr in aggregierbaren Berichten enthalten sind (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, wird der Wert auf den `"expiry"`-Wert zurückgesetzt.
    - `"debug_key"` {{optional_inline}}
      - : Eine base-10-formatierte 64-Bit-Unsigned Integer, die einen Debug-Schlüssel darstellt. Setzen Sie dies, wenn Sie einen [Debug-Bericht](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#debug_reports) zusammen mit dem zugehörigen Attributionsbericht generieren möchten.
    - `"debug_reporting"` {{optional_inline}}
      - : Ein Boolean-Wert. Wenn ein `debug_key` festgelegt ist, setzen Sie dies auf `true`, um anzugeben, dass der generierte Debug-Bericht ein detaillierter Debug-Bericht sein sollte.
    - `"event_level_epsilon"` {{optional_inline}}
      - : Eine Zahl, die gleich oder größer als `0` ist und die Menge an Rauschen kontrolliert, die Berichten hinzugefügt wird. Kleinere Werte von Epsilon führen zu mehr Rauschen und bieten daher einen größeren Datenschutz. Die maximalen und Standardwerte können je nach Implementierung variieren; Chrome hat beispielsweise einen maximalen und Standardwert von `14`.
    - `"event_report_window"` {{optional_inline}}
      - : Eine Zeichenfolge, die eine Zeit in Sekunden repräsentiert, nach der nachfolgende Trigger diesem Quellverzeichnis nicht mehr für die Erstellung von Einzelereignisberichten zuordenbar sind (dies wird als **Berichtsfenster** bezeichnet). Wenn nicht festgelegt, wird das Fenster für Ereignisberichte auf den `"expiry"`-Wert zurückgesetzt.
        > [!NOTE]
        > Wenn `"event_report_window"` angegeben ist, kann `"event_report_windows"` nicht angegeben werden, da die Quellregistrierung andernfalls fehlschlägt.
    - `"event_report_windows"` {{optional_inline}}
      - : Ein Objekt, das eine Reihe von Berichtsfenstern darstellt, beginnend bei `"start_time"`, wobei Berichte für diese Quelle nach der jeweils angegebenen Endzeit in `"end_times"` geliefert werden. Dies kann verwendet werden, um die Zeit der Berichtsübermittlung über mehrere Berichte hinweg zu variieren. Wenn nicht festgelegt, wird das Fenster für Ereignisberichte auf den `"expiry"`-Wert zurückgesetzt. Die Eigenschaften sind wie folgt:
        - `"start_time"` {{optional_inline}}: Eine nicht-negative Zahl, die den Startzeitpunkt für die Berichtsfenster angibt. Wenn nicht angegeben, ist der Standardwert `0`.
        - `"end_times"`: Ein Array von positiven Zahlen, die die Endzeiten für nachfolgende Berichtsfenster angeben. Die Werte müssen ansteigend und größer als `"start_time"` sein.
          > [!NOTE]
          > Wenn `"event_report_windows"` angegeben ist, kann `"event_report_window"` nicht angegeben werden, da die Quellregistrierung andernfalls fehlschlägt.
    - `"expiry"` {{optional_inline}}
      - : Eine Zeichenfolge, die eine Ablaufzeit in Sekunden für die Attributionsquelle repräsentiert, nach der sie nicht mehr aktiv ist (d.h. nachfolgende Trigger können dieser Quelle nicht mehr zugeordnet werden). Die maximal zulässige Ablaufzeit beträgt 2592000 Sekunden (30 Tage), was auch der Standardwert ist, wenn `"expiry"` nicht ausdrücklich festgelegt ist.
    - `"filter_data"` {{optional_inline}}
      - : Ein Objekt, das benutzerdefinierte Daten definiert, die verwendet werden können, um zu filtern, welche Konversionen Berichte generieren. Weitere Details finden Sie unter [Filter](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#filters).
    - `"max_event_level_reports"` {{optional_inline}}
      - : Eine Zahl zwischen `0` und `20` einschließlich, die die Gesamtzahl der Berichte auf Einzelereignisebene angibt, die diese Quelle erzeugen kann. Nachdem dieses Maximum erreicht ist, kann die Quelle keine neuen Daten mehr erzeugen. Wenn nicht angegeben, beträgt der Standardwert für `"max_event_level_reports"` `3` für navigationsbasierte Quellen und `1` für ereignisbasierte (bild- oder skriptbasierte) Quellen.
    - `"priority"` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Prioritätswert für die Attributionsquelle darstellt. Standardmäßig werden Konversionen der neuesten übereinstimmenden Quelle zugeordnet. Für sowohl Berichte auf Einzelereignisebene als auch Zusammenfassungsberichte setzen Sie eine höhere Prioritätsnummer, um spezifische Quellen zu priorisieren. Ein Beispiel: Ein Wert von `2` hat Vorrang vor dem Standardwert von `1`. Weitere Informationen finden Sie unter [Berichtsprioritäten und -beschränkungen](/de/docs/Web/API/Attribution_Reporting_API/Generating_reports#report_priorities_and_limits).
    - `"trigger_data"` {{optional_inline}}

      - : Ein Array von 32-Bit-Unsigned Integers, die Daten darstellen, die die verschiedenen Triggereignisse beschreiben, die dieser Quelle entsprechen könnten. Beispiele hierfür sind "Benutzer hat Artikel in Warenkorb gelegt" oder "Benutzer hat sich für Mailingliste angemeldet", was Aktionen sind, die an der Auslöseseite auftreten könnten und eine Art Konversion anzeigen, die der Werbetreibende messen möchte. Diese müssen mit `"trigger_data"` abgeglichen werden, die in [triggers](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) angegeben sind, damit eine Zuordnung auf Einzelereignisebene stattfinden kann. Wenn weggelassen, lautet der Standardwert für `"trigger_data"` `[0, 1, 2, 3, 4, 5, 6, 7]` für navigationsbasierte Quellen und `[0, 1]` für ereignisbasierte (bild- oder skriptbasierte) Quellen.

        > [!NOTE]
        > Die Werte, die jeweils ein Ereignis darstellen, sowie die Anzahl der Elemente im Array sind vollständig willkürlich und von Ihnen als Entwickler definiert. Das Array kann Werte enthalten, die nicht verwendet werden, aber Werte müssen im Array vorhanden sein, damit der Browser ihnen die Quelle zuordnen kann, wenn ein Trigger registriert wird.

    - `"trigger_data_matching"` {{optional_inline}}

      - : Eine Zeichenfolge, die angibt, wie die `"trigger_data"` vom Trigger mit der `"trigger_data"` der Quelle abgeglichen wird. Mögliche Werte sind:

        - `"exact"`: Die `"trigger_data"` des Triggers muss genau einem Wert entsprechen, der in der `"trigger_data"` der Quelle enthalten ist; wenn keine solche Übereinstimmung vorhanden ist, findet keine Ereignisattribution statt.
        - `"modulus"`: In diesem Fall wird folgende Berechnung durchgeführt — `d % allowedValues.size` — wobei `d` die `"trigger_data"` des Triggers ist und `allowedValues` die Sequenz von Werten im `"trigger_data"` Array der Quelle ist. Wenn das Ergebnis dieser Berechnung einem Wert im `"trigger_data"`-Array der Quelle entspricht, ist die Übereinstimmung erfolgreich. In einem solchen Fall stimmt der Wert immer überein, es sei denn `allowedValues` ist leer.

        Der `"modulus"`-Modus existiert hauptsächlich aus Gründen der Rückwärtskompatibilität mit dem Verhalten der API vor der Einführung von `"exact"` und würde daher kaum verwendet. Es ist dennoch in bestimmten Fällen nützlich, die eine sehr spezifische Art von Komprimierung erfordern, was kleinere Registrierungs-Header zur Folge hat. Dies kann erforderlich sein, wenn komplexe Filterlogik benötigt wird, um unterschiedliche Triggerdaten basierend auf dem Quelltyp festzulegen, entsprechend der maximalen Anzahl von `"trigger_data"` Elementen der Quelle.

        > [!NOTE]
        > Wenn `"modulus"` verwendet wird, muss die `"trigger_data"` der Quelle eine zusammenhängende Sequenz von Ganzzahlen bilden, beginnend bei 0. Wenn die Triggerdaten keine solche Sequenz bilden, tritt ein Fehler auf.

        Wenn nicht angegeben, lautet der Standardwert für `"trigger_data_matching"` `"modulus"`. Auch in diesem Fall ist der Grund dafür die Rückwärtskompatibilität: Das Weglassen des `"trigger_data_matching"`-Feldes muss zu demselben Verhalten führen, wie es vor der Einführung dieses Feldes beobachtet wurde.

## Beispiele

### Registrierung einer Quelle für einen Bericht auf Einzelereignisebene

Ein Node.js-Server könnte den `Attribution-Reporting-Register-Source` Response-Header wie folgt setzen, um einen Browser dazu zu bringen, einen Bericht auf Einzelereignisebene zu erstellen, wenn ein Trigger einer Quelle zugeordnet wird:

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

### Registrierung einer Quelle für einen Zusammenfassungsbericht

Um den Browser dazu zu bringen, einen Zusammenfassungsbericht zu erstellen, wenn ein Trigger einer Quelle zugeordnet wird, müssen Sie einige zusätzliche Felder _zusätzlich_ zu denen, die für die Erstellung von Berichten auf Einzelereignisebene erforderlich sind, einfügen.

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
