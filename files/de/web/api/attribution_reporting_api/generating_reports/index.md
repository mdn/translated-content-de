---
title: Generieren von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden – sowohl Attributionsberichte als auch Debug-Berichte – und wie Sie die generierten Berichte steuern können. Dies umfasst das Hinzufügen von Rauschen, das Priorisieren von Berichten, das Filtern von Berichten und das Generieren von Debug-Berichten.

## Grundlegender Prozess

Wenn ein Abgleich zwischen einem Trigger und einer Quelle stattfindet, generiert der Browser einen Bericht und sendet ihn über eine nicht authentifizierte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage an ein spezifisches Endpunkt der Berichterstattungs-Quelle:

- Für Berichte auf Ereignisebene ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für zusammenfassende Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird gleichen Ursprungs sein mit dem, der die Quelle und den Trigger registriert hat.

Die Berichtsdaten sind in einer JSON-Struktur enthalten.

## Berichte auf Ereignisebene

Berichte auf Ereignisebene werden generiert und geplant, um am Ende ihres enthaltenen **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die Werte bestimmt, die im Feld [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) im Header der Quelle {{httpheader("Attribution-Reporting-Register-Source")}} festgelegt sind.

Wenn keines dieser Felder angegeben ist, fällt das Berichtsfenster auf die folgenden Standardwerte zurück:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das standardmäßige Berichtsfenster mit dem Ablauf der Quelle, der im `Attribution-Reporting-Register-Source`-Feld [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry) festgelegt ist. Wenn nicht explizit festgelegt, beträgt es standardmäßig 30 Tage nach der Registrierung.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die standardmäßigen Berichtsfenster 2 Tage, 7 Tage und der `"expiry"`-Wert der Quelle.

Weitere Informationen finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein Bericht auf Ereignisebene am entsprechenden Endpunkt eingegangen ist, liegt es vollständig beim Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Bericht auf Ereignisebene könnte so aussehen:

```json
{
  "attribution_destination": "https://advertiser.example",
  "source_event_id": "412444888111012",
  "trigger_data": "4",
  "report_id": "123e4567-e89b-12d3-a456-426614174000",
  "source_type": "navigation",
  "randomized_trigger_rate": 0.34,
  "scheduled_report_time": "1692255696",
  "source_debug_key": 647775351539539,
  "trigger_debug_key": 647776891539539
}
```

Die Eigenschaften sind wie folgt:

- `"attribution_destination"`
  - : Ein String oder ein Array von 2–3 Strings, abhängig davon, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die im Zuge der damit verbundenen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader in der Quellregistrierung festgelegten Attributions[`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-Seiten.
- `"source_event_id"`
  - : Ein String, der die Attributionsquellen-ID repräsentiert. Dieser entspricht der [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id), die in der Quellregistrierung im Zuge des damit verbundenen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheaders festgelegt ist.
- `"trigger_data"`
  - : Ein String, der Daten vom Attributionstrigger repräsentiert, die bei der Triggerregistrierung festgelegt wurden (die [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data), die über den damit verbundenen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwortheader festgelegt wurden).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der zur Verhinderung doppelter Zählung verwendet werden kann.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` entspricht, was jeweils angibt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese bestimmte Quellenkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden von der Unix-Epoche bis zur ursprünglichen Planung des Berichts durch den Browser darstellt (um Unstimmigkeiten aufgrund verspäteter Berichterstattung durch Offline-Geräte zu vermeiden).
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debugging-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im entsprechenden [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld des {{httpheader("Attribution-Reporting-Register-Source")}}-Headers festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debugging-Schlüssel für den Attributionstrigger darstellt. Dieser spiegelt den Wert wider, der im `"debug_key"`-Feld des entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Zusammenfassungsberichte

Ein zusammenfassender Bericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt eingegangen sind, und dann [gebündelt](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching), um sie zur Verarbeitung durch einen [Aggregationsdienst](https://privacysandbox.google.com/private-advertising/aggregation-service) vorzubereiten. Sobald dies geschehen ist, liegt es vollständig beim Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig generiert und geplant, um nach einer Interaktion mit einem Trigger mit einer zufälligen Verzögerung gesendet zu werden, um die zeitliche Präzision zu verschleiern und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Attributionsquellenereignisse von der Registrierung bis zum Ablauf der Quelle aufgezeichnet - dies wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header definiert, der standardmäßig 30 Tage nach der Registrierung beträgt, wenn nicht ausdrücklich festgelegt. Beachten Sie, dass die Länge des Berichtsfensters weiter modifiziert werden kann, indem ein `aggregatable_report_window`-Wert im `Attribution-Reporting-Register-Source`-Header festgelegt wird. Weitere Informationen finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Benutzer weiter zu schützen, haben die mit jeder Attributionsquelle verbundenen Werte eines zusammenfassenden Berichts einen endlichen Gesamtwert – das nennt man das **Beitragsbudget**. Dieser Wert kann je nach Implementierung der API unterschiedlich sein; in Chrome beträgt er 65.536. Jede Umwandlung, die Berichte generieren würde, die Werte über diesem Limit hinzufügen, wird nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken teilen, die Sie messen möchten.

Ein typischer aggregierbarer Bericht könnte so aussehen:

```json
{
  "shared_info": "{\"api\":\"attribution-reporting\",\"attribution_destination\":\"https://advertiser.example\",\"report_id\":\"123e4567-e89b-12d3-a456-426614174000\",\"reporting_origin\":\"https://reporter.example\",\"scheduled_report_time\":\"1692255696\",\"source_registration_time\":\"1692230400\",\"version\":\"3\"}",
  "aggregation_service_payloads": [
    {
      "payload": "[base64-encoded HPKE encrypted data readable only by the aggregation service]",
      "key_id": "[string identifying public key used to encrypt payload]",
      "debug_cleartext_payload": "[base64-encoded unencrypted payload]"
    }
  ],
  "aggregation_coordinator_origin": "https://publickeyservice.aws.privacysandboxservices.com",
  "source_debug_key": 647775351539539,
  "trigger_debug_key": 647776891539539
}
```

Die Eigenschaften sind wie folgt:

- `"shared_info"`
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst benötigt, um einen zusammenfassenden Bericht zu erstellen. Diese Daten sind {{Glossary("Encryption", "verschlüsselt")}} mit [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um eine Manipulation zu verhindern. Die folgenden Eigenschaften sind im serialisierten String dargestellt:
    - `"api"`
      - : Ein enumerierter Wert, der die API darstellt, die das Berichtsereignis ausgelöst hat. Derzeit wird er immer `"attribution-reporting"` sein, kann aber in Zukunft mit zusätzlichen Werten erweitert werden, um andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die in der Quellregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader festgelegte Attributions[`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-URL repräsentiert.
    - `"report_id"`
      - : Ein String, der einen {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der zur Verhinderung doppelter Zählung verwendet werden kann.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichterstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden von der Unix-Epoche bis zur ursprünglichen Planung des Berichts durch den Browser darstellt (um Unstimmigkeiten aufgrund verspäteter Berichterstattung durch Offline-Geräte zu vermeiden).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden von der Unix-Epoche bis zur Registrierung der Attributionsquelle darstellt, abgerundet auf einen ganzen Tag.
    - `"version"`
      - : Ein String, der die Version der API repräsentiert, die zur Erstellung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`

  - : Ein Array von Objekten, das Nutzlastobjekte repräsentiert, die die Histogrammbeiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird pro Bericht nur eine einzige Nutzlast unterstützt, die vom Browser konfiguriert wird. In Zukunft könnten mehrere anpassbare Nutzlasten unterstützt werden. Jedes Nutzlastobjekt kann die folgenden Eigenschaften enthalten:

    - `"payload"`

      - : Eine [CBOR](https://cbor.io/)-Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-kodiert wird, mit folgender Struktur (nur zur Notation mit JSON):

        ```json
        {
          "operation": "histogram",
          "data": [
            {
              "bucket": "<Encoded as a 16-byte (i.e. 128-bit) big-endian bytestring>",
              "value": "<Encoded as a 4-byte (i.e. 32-bit) big-endian bytestring>"
            }
            // …
          ]
        }
        ```

        Die `operation` ist immer `"histogram"`; es erlaubt, dass der Dienst in Zukunft andere Operationen unterstützt.

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, mit dem die Nutzlast verschlüsselt wurde.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debugging-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im entsprechenden [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld des {{httpheader("Attribution-Reporting-Register-Source")}}-Headers festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debugging-Schlüssel für den Attributionstrigger darstellt. Dieser spiegelt den Wert wider, der im `"debug_key"`-Feld des entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Hinzufügen von Rauschen zu Berichten

<!--
THIS INFORMATION IS NOT COMPLETE; WE HAVE PARKED IT FOR NOW SO THAT WE CAN GET THIS DOCUMENTATION PUBLISHED, AND WE WILL DO MORE WORK ON ARA NOISE ON A FUTURE DATE, IF/WHEN THE DEMAND IS THERE

In the case of event-level reports, this is done using a randomized response algorithm, which works like so:

1. When an attribution source is stored, the browser generates a list of all possible sets of reports that could originate from the source's configuration (including the set consisting of no reports).
2. In a small percentage of cases, the browser prevents the source from being attributed and instead picks a random member of that list to use as the source's reports. The probability of this happening is based on the size of that list, the browser's implementation-specific privacy parameters, and the source's chosen [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon).

Typical settings in the {{httpheader("Attribution-Reporting-Register-Source")}} header might look like so:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

The source `"trigger_data"` can have a maximum of 32 values. Increasing the number of values and `"event_report_windows"` increases the number of elements in the overall report set.

A matching {{httpheader("Attribution-Reporting-Register-Trigger")}} could contain the following:

```json
{
  ...,
  "event_trigger_data": [
    {
      // The value 4 is contained in the source data, therefore a match is possible
      "trigger_data": "4"
    },
  ],
  ...,
}
```

It is however still possible that a match may not occur, based on the randomized response algorithm described above.
-->

Rauschen wird Berichten hinzugefügt, um die mit einer bestimmten Quelle verbundenen Ausgaben zu verschleiern und dadurch die Privatsphäre der Benutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und einzelnen Benutzern zugeordnet werden, aber die insgesamt aus den Daten abgeleiteten Muster behalten die gleiche Bedeutung.

Für Informationen darüber, wie Rauschen in der Attributionsberichterstattung funktioniert, siehe:

- [Verständnis von Rauschen in zusammenfassenden Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## Prioritäten und Grenzen von Berichten

Standardmäßig haben alle Attributionsquellen die gleiche Priorität und das Attributionsmodell ist zuletzt berührend, was bedeutet, dass eine Umwandlung der zuletzt passenden Quellenereignis zugeschrieben wird. Für sowohl Berichte auf Ereignisebene als auch aggregierbare Berichte können Sie die Quellenpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header festlegen. Der Standardwert ist `0`; wenn Sie einen `"priority"`-Wert von `1` für eine bestimmte Quelle festlegen, wird diese Quelle zuerst abgeglichen, vor allen Quellen mit Priorität `0`. Quellen mit `"priority": "2"` werden vor Quellen mit `"priority": "1"` abgeglichen, und so weiter.

Attributionstrigger-Prioritäten funktionieren auf die gleiche Weise; Sie können auch Trigger-Prioritäten festlegen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzufügen, jedoch nur für Berichte auf Ereignisebene.

Verschiedene Quelltypen haben unterschiedliche Standardgrenzen:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Drei-Berichts-Limit. Wenn ein Nutzer beispielsweise auf eine Anzeige klickt und viermal konvertiert: Sie besuchen die Homepage des Werbetreibenden, dann eine Produktseite, melden sich für den Newsletter an und tätigen schließlich einen Kauf. Der Kaufbericht wird verworfen, da er aus der vierten Konvertierung stammt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Ein-Berichts-Limit.

> [!NOTE]
> Das Berichts-Limit kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den Feldern [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) des zugehörigen `Attribution-Reporting-Register-Source`-Headers festgelegt wird.

Wenn eine Attribution für ein bestimmtes Quellenereignis ausgelöst wird und die maximale Anzahl von Attributionen (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten der bestehenden geplanten Berichte für dieselbe Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um stattdessen den neuen Bericht zu planen. Wenn der neue Bericht der mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, fällt der Browser auf sein Standardverhalten zurück: Jede Konvertierung nach der dritten Konvertierung für Klicks oder der ersten Konvertierung für Ansichten wird fallen gelassen.

## Filter

Sie können Regeln festlegen, welche Konvertierungen Berichte generieren, indem Sie Filter verwenden. Beispielsweise könnten Sie sich dafür entscheiden, nur Konvertierungen für eine bestimmte Produktkategorie zu zählen und Konvertierungen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellenregistrierung ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}}-Header hinzu, das die Filter-Schlüssel definiert, die Sie verwenden möchten, um die Konvertierungen auf der Trigger-Seite zu filtern. Diese sind vollständig benutzerdefinierte Felder. Um beispielsweise nur Konvertierungen auf bestimmten Subdomains und für bestimmte Produkte anzugeben:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Fügen Sie bei der Triggerregistrierung ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzu. Das Folgende verursacht beispielsweise, dass Trigger-Interaktionen die oben genannte Quellenregistrierung abgleichen, da beide das `"electronics.megastore"`-`"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter wiederum wird ignoriert, wenn ein Abgleich versucht wird, da er nicht in der oben genannten Quellenregistrierung enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Wenn die Felder `"filter_data"` und `"filters"` übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), aber keiner der Unterfeld-Werte übereinstimmt, wird der Trigger ignoriert, was zu keinem Abgleich führt.

### Filtern von Triggerdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header kann erweitert werden, um selektives Filtern vorzunehmen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf dem im {{httpheader("Attribution-Reporting-Register-Source")}}-Header definierten `filter_data` festzulegen.

Beispielsweise:

```json
{
  "event_trigger_data": [
    {
      "trigger_data": "2",
      "filters": { "source_type": ["navigation"] }
    },
    {
      "trigger_data": "1",
      "filters": { "source_type": ["event"] }
    }
  ]
}
```

> **Hinweis:** `"source_type"` ist ein automatisch populiertes Feld, das auf dem `"filter_data"` der Quelle verfügbar ist.

> **Hinweis:** `not_filters`, die mit Negation filtern, werden ebenfalls unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Dictionary übereinstimmen, damit der Trigger berücksichtigt wird.

```json
{
  "event_trigger_data": [
    {
      "trigger_data": "2",
      "filters": [
        {
          "product": ["1234"],
          "conversion_subdomain": ["electronics.megastore"]
        },
        {
          "product": ["4321"],
          "conversion_subdomain": ["electronics4.megastore"]
        }
      ]
    }
  ]
}
```

Wenn die Filter für keinen der Ereignistrigger übereinstimmen, wird kein Bericht auf Ereignisebene erstellt. Wenn die Filter für mehrere Ereignistrigger übereinstimmen, wird der erste übereinstimmende Ereignistrigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Informationen zur Fehlersuche über Ihre Attributionsberichte zurückzugeben. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert, und Lücken in den Messergebnissen zwischen Ihrer alten Cookie-basierten Implementierung und Ihrer neuen Attribution-Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht dem gleichen Zeitplan wie Berichte auf Ereignisebene und Zusammenfassungsberichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines spezifischen Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Trigger registriert ist.
- **Detailierte Debug-Berichte** geben Ihnen mehr Einblick in die Attributionsquellen- und Attributionstrigger-Ereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen es Ihnen zu gewährleisten, dass Quellen erfolgreich registriert wurden, fehlende Berichte zu verfolgen und zu bestimmen, warum sie fehlen (zum Beispiel aufgrund eines Fehlschlags bei der Registrierung von Quellen- oder Triggerereignissen oder eines Fehlschlags beim Senden oder Generieren des Berichts). Detailierte Debug-Berichte werden sofort bei der Registrierung von Quellen oder Triggern gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss die Berichterstattungsquelle ein Cookie setzen. Wenn die zum Empfang von Berichten konfigurierte Quelle ein Dritter ist, wird dieses Cookie ein [Third-Party-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies) sein, was bedeutet, dass Debug-Berichte nicht in Browsern verfügbar sind, in denen Third-Party-Cookies deaktiviert/nicht verfügbar sind.

### Verwenden von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Das `ar_debug`-Cookie auf Ihrem Berichterstattungsursprung setzen. Dies muss sowohl bei der Quellen- als auch bei der Triggerregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Das `debug_key`-Feld in allen zu den Attributionsberichten gehörenden {{httpheader("Attribution-Reporting-Register-Source")}}- und {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwortheadern setzen, für die Sie Debug-Informationen anzeigen möchten. Jeder `debug_key`-Wert muss ein als Basis-10-Zeichenkette formatierter 64-Bit-unsigned Integer sein. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID – Sie könnten beispielsweise jeden als Cookie-ID + Quellen/Trigger-Zeitstempel setzen (und denselben Zeitstempel in Ihrem älteren Cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel auf der Quellenseite anders als die `source_event_id`, damit Sie einzelne Berichte mit derselben Quellenseiten-ID unterscheiden können.

3. Optional, das `debug_reporting`-Feld auf `true` setzen, sowohl in den `Attribution-Reporting-Register-Source`- und `Attribution-Reporting-Register-Trigger`-Headers. Wenn Sie dies tun, wird ein detaillierter Debug-Bericht generiert. Wenn Sie dies nicht tun, wird ein erfolgreicher Debug-Bericht generiert, der die Art des Attributionsberichts widerspiegelt, den Sie generieren (auf Ereignisebene oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richtige Endpunkte einrichten, um die Debug-Berichte zu empfangen, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte in der Berichterstattungsquelle gesendet:

   - Endpunkt für Erfolgs-Debug-Berichte auf Ereignisebene: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für detailierte Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind mit Attributionsberichten identisch und enthalten die auf der Quellseite und der Trägerseite befindlichen Debug-Schlüssel in den jeweils `"source_debug_key"`- und `"trigger_debug_key"`-Felder.

Für weitere Informationen und Beispiele siehe:

- [Einführung in Debug-Berichte](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf privacysandbox.google.com (2023)
- [Einrichten von Debug-Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf privacysandbox.google.com (2023)
- [Debugging-Kochbuch](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf privacysandbox.google.com (2023)
