---
title: Generieren von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: 9e837bbcce64783e14f56b16eb1612b05e7d8fdc
---

{{DefaultAPISidebar("Attribution Reporting API")}}{{deprecated_header}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden — sowohl Attributionsberichte als auch Debug-Berichte — und wie Sie die generierten Berichte steuern können. Dies schließt das Hinzufügen von Rauschen, das Priorisieren von Berichten, das Filtern von Berichten und das Erstellen von Debug-Berichten ein.

## Grundlegender Prozess

Wenn eine Übereinstimmung zwischen einem Trigger und einer Quelle stattfindet, generiert der Browser einen Bericht und sendet ihn über eine unbeglaubigte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage an einen spezifischen Endpunkt im Berichtsursprung:

- Für Event-Level-Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für Zusammenfassungsberichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird denselben Ursprung haben wie derjenige, der die Quelle und den Trigger registriert hat.

Die Berichtsdaten sind in einer JSON-Struktur enthalten.

## Event-Level-Berichte

Event-Level-Berichte werden generiert und geplant, am Ende ihres enthaltenen **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die Werte bestimmt, die im [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows)-Feld festgelegt sind, das im Header {{httpheader("Attribution-Reporting-Register-Source")}} der Quelle festgelegt ist.

Wenn keines dieser Felder angegeben ist, greift das Berichtsfenster auf die folgenden Standardwerte zurück:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standardberichtsfenster beim Ablaufdatum der Quelle, das im `Attribution-Reporting-Register-Source` [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry)-Feld festgelegt ist. Dies ist standardmäßig 30 Tage nach der Registrierung, wenn es nicht explizit festgelegt wird.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die Standardberichtsfenster 2 Tage, 7 Tage und das Ablaufdatum der Quelle `"expiry"`.

Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein Event-Level-Bericht am entsprechenden Endpunkt empfangen wurde, liegt es vollständig im Ermessen des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Event-Level-Bericht könnte folgendermaßen aussehen:

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
  - : Ein String oder ein Array aus 2–3 Strings, je nachdem, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attributions-["destination"](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-Site(s), die in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header festgelegt sind.
- `"source_event_id"`
  - : Ein String, der die Attributionsquellen-ID darstellt. Dieser entspricht der separaten [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id), die in der Quellenregistrierung festgelegt ist (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header).
- `"trigger_data"`
  - : Ein String, der Daten repräsentiert, die vom Attributionstrigger stammen und in der Triggerregistrierung festgelegt sind (das [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data), das über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwort-Header festgelegt ist).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universell eindeutige Kennung (UUID)")}} für diesen Bericht darstellt, die verwendet werden kann, um doppelte Zählungen zu verhindern.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` ist und anzeigt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie häufig [Rauschen](#hinzufügen_von_rauschen_zu_berichten) auf diese bestimmte Quellkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden ab der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich geplant hatte zu senden (um Ungenauigkeiten zu vermeiden, die durch offline gemeldete Geräte entstehen).
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-ganzzahlige Zahl, die den Debugging-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header-Feld `'debug_key'` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-ganzzahlige Zahl, die den Debugging-Schlüssel für den Attributionstrigger darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header-Feld `'debug_key'` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Zusammenfassende Berichte

Ein zusammenfassender Bericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen werden, und dann [gebündelt](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching), um sie für die Verarbeitung durch einen [Aggregationsdienst](https://privacysandbox.google.com/private-advertising/aggregation-service) vorzubereiten. Wenn dies geschehen ist, liegt es vollständig im Ermessen des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig generiert und geplant, um gesendet zu werden, nachdem ein Trigger aktiviert wurde, mit einer zufälligen Verzögerung, um die Timings zu überwischen und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Attributionsereignisse von der Registrierung bis zur Ablauffrist der Quelle aufgezeichnet - dies wird als **Berichtsfenster** bezeichnet.

Die Ablauffrist wird durch den `expiry`-Wert festgelegt, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegt ist und standardmäßig 30 Tage nach der Registrierung ist, wenn es nicht ausdrücklich festgelegt wird. Beachten Sie, dass die Länge des Berichtsfensters durch Setzen eines `aggregatable_report_window`-Werts im Header `Attribution-Reporting-Register-Source` weiter geändert werden kann. Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Benutzer weiter zu schützen, haben die zusammenfassenden Berichtswerte, die mit jeder Attributionsquelle verbunden sind, einen endlichen Gesamtwert - dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann bei verschiedenen Implementierungen der API unterschiedlich sein; in Chrome beträgt er 65,536. Alle Konversionen, die Berichte generieren würden, deren Werte über diesem Limit liegen, werden nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken, die Sie messen möchten, aufteilen.

Ein typischer aggregierbarer Bericht könnte wie folgt aussehen:

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst zur Zusammenstellung eines zusammenfassenden Berichts verwenden wird. Diese Daten werden {{Glossary("Encryption", "verschlüsselt")}} mit [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind im serialisierten String dargestellt:
    - `"api"`
      - : Ein enumerierter Wert, der die API darstellt, die die Berichtsgenerierung ausgelöst hat. Derzeit wird dies immer `"attribution-reporting"` entsprechen, aber es kann mit zusätzlichen Werten erweitert werden, um andere APIs in Zukunft zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions-["destination"](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-URL darstellt, die in der Quellenregistrierung festgelegt ist (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header).
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Universell eindeutige Kennung (UUID)")}} für diesen Bericht darstellt, die verwendet werden kann, um doppelte Zählungen zu verhindern.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtsgenerierung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden ab der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich geplant hatte zu senden (um Ungenauigkeiten zu vermeiden, die durch offline gemeldete Geräte entstehen).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden ab der Unix-Epoche darstellt, bis die Attributionsquelle registriert wurde, abgerundet auf einen ganzen Tag.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die zur Generierung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`
  - : Ein Array von Objekten, das Payload-Objekte darstellt, die die Histogrammbeiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird nur eine einzelne Payload pro Bericht unterstützt, die vom Browser konfiguriert wird. In Zukunft könnten mehrere, anpassbare Payloads unterstützt werden. Jedes Payload-Objekt kann die folgenden Eigenschaften enthalten:
    - `"payload"`
      - : Eine [CBOR](https://cbor.io/)-Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "Base64")}}-kodiert ist, mit der folgenden Struktur (nur zur Darstellung in JSON):

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

        Die `operation` ist immer `"histogram"`; sie ermöglicht es dem Dienst, in Zukunft andere Operationen zu unterstützen.

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der zur Verschlüsselung der Payload verwendet wurde.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-ganzzahlige Zahl, die den Debugging-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} Header-Feld `'debug_key'` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-ganzzahlige Zahl, die den Debugging-Schlüssel für den Attributionstrigger darstellt. Dieser spiegelt den Wert wider, der im entsprechenden {{httpheader("Attribution-Reporting-Register-Trigger")}} Header-Feld `'debug_key'` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATIONEN SIND NICHT VOLLSTÄNDIG; WIR HABEN SIE MOMENTAN ABGELEGT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN, UND WIR WERDEN IN ZUKUNFT WEITERE ARBEITEN AN ARA-RAUSCHEN DURCHFÜHREN, FALLS/WENN DIE NACHFRAGE BESTEHT

Im Fall von Event-Level-Berichten geschieht dies mit einem randomisierten Antwortalgorithmus, der wie folgt funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Berichtssätze, die sich aus der Quellkonfiguration ergeben könnten (einschließlich des Satzes, der aus keinen Berichten besteht).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser, dass die Quelle zugeordnet wird, und wählt stattdessen ein zufälliges Mitglied dieser Liste aus, um es als Berichte der Quelle zu verwenden. Die Wahrscheinlichkeit, dass dies geschieht, basiert auf der Größe dieser Liste, den implementierungsspezifischen Datenschutzparametern des Browsers und dem von der Quelle gewählten [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon).

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}} Header könnten folgendermaßen aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Die Quelle `"trigger_data"` kann maximal 32 Werte haben. Das Erhöhen der Anzahl der Werte und `"event_report_windows"` erhöht die Anzahl der Elemente im gesamten Berichtssatz.

Eine entsprechende {{httpheader("Attribution-Reporting-Register-Trigger")}} könnte Folgendes enthalten:

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

Es ist jedoch immer noch möglich, dass keine Übereinstimmung auftritt, basierend auf dem oben beschriebenen randomisierten Antwortalgorithmus.
-->

Rauschen wird Berichten hinzugefügt, um die Ausgabe, die mit einer bestimmten Quelle verbunden ist, zu verschleiern und dadurch die Privatsphäre der Benutzer zu schützen. Die konkreten Quelldaten können nicht identifiziert und nicht auf einzelne Benutzer zurückverfolgt werden, aber die allgemeinen Muster, die aus den Daten entnommen werden, behalten dennoch ihre Aussagekraft.

Weitere Informationen darüber, wie Rauschen in der Attributionsberichterstattung funktioniert, finden Sie unter:

- [Verstehen von Rauschen in Zusammenfassungsberichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## Berichtsprioritäten und -limits

Standardmäßig haben alle Attributionsquellen die gleiche Priorität und das Attributionsmodell ist "last-touch", was bedeutet, dass eine Konversion der zuletzt passenden Quellenereignis zugewiesen wird. Für sowohl Event-Level- als auch aggregierbare Berichte kann die Priorität der Quelle geändert werden, indem ein neuer Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegt wird. Der Standardwert ist `0`; wenn Sie auf einer bestimmten Quelle einen `"priority"`-Wert von `1` festlegen, wird diese Quelle zuerst abgeglichen, vor den Quellen mit Priorität `0`. Quellen mit `"priority": "2"` werden vor Quellen mit `"priority": "1"` abgeglichen, und so weiter.

Die Prioritäten der Attributionstrigger funktionieren auf die gleiche Weise; Sie können auch Trigger-Prioritäten anpassen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzufügen, aber nur für Event-Level-Berichte.

Verschiedene Quelltypen haben unterschiedliche Standardeinschränkungen:

- [Navigationsbasierte Attributionquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig eine Drei-Berichts-Grenze. Zum Beispiel: Angenommen, ein Benutzer klickt auf eine Anzeige und konvertiert viermal: Er besucht die Startseite der Werbetreibenden, dann besucht er eine Produktseite, meldet sich für den Newsletter an und tätigt schließlich einen Kauf. Der Kaufbericht würde nicht berücksichtigt, da er aus der vierten Konversion hervorgeht.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig eine Ein-Berichts-Grenze.

> [!NOTE]
> Das Berichterstattungslimit kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den Feldern [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) des zugehörigen `Attribution-Reporting-Register-Source` Headers festgelegt wird.

Wenn eine Attribution für ein gegebenes Quellenereignis ausgelöst wird, wenn die maximale Anzahl an Attributionszeiten (drei für Klicks, ein für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Vergleicht die Priorität des neuen Berichts mit den Prioritäten der bereits geplanten Berichte für dieselbe Quelle.
- Löschen Sie den Bericht mit der niedrigsten Priorität, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht der mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, greift der Browser auf sein Standardverhalten zurück: Jede Konversion, die nach der dritten Konversion für Klicks oder der ersten Konversion für Ansichten erfolgt, wird nicht berücksichtigt.

## Filter

Sie können Regeln definieren, welche Konversionen Berichte generieren, indem Sie Filter verwenden. Zum Beispiel könnten Sie wählen, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Bei der Registrierung der Quelle fügen Sie ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}} Header hinzu, das die Filter-Schlüssel definiert, die Sie auf der Trigger-Seite verwenden werden, um die Konversionen zu filtern. Diese sind komplett benutzerdefinierte Felder. Zum Beispiel, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte zu spezifizieren:

   ```json
   {
     "filter_data": {
       "conversion_subdomain": [
         "electronics.megastore",
         "electronics2.megastore"
       ],
       "product": ["1234"]
     }
   }
   ```

2. Bei der Registrierung des Triggers fügen Sie ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzu. Das Folgende beispielsweise bewirkt, dass Trigger-Interaktionen der obigen Quellenregistrierung entsprechen, da sie beide das `"electronics.megastore"` `"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter wird hingegen ignoriert, wenn ein Abgleich versucht wird, da er nicht in der oben genannten Quellenregistrierung enthalten war.

   ```json
   {
     "filters": {
       "conversion_subdomain": ["electronics.megastore"],
       "directory": ["/store/electronics"]
     }
   }
   ```

Wenn die `"filter_data"`- und `"filters"`-Felder übereinstimmende Unterfelder enthalten (wie zum Beispiel `"conversion_subdomain"` im obigen Beispiel), aber keiner der Unterfeldwerte übereinstimmt, wird der Trigger ignoriert, was zu keiner Übereinstimmung führt.

### Filterung von Triggerdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}} Header kann erweitert werden, um selektive Filterung vorzunehmen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf dem `filter_data`, das im {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert ist, einzustellen.

Zum Beispiel:

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

> [!NOTE]
> `"source_type"` ist ein automatisch befülltes Feld, das auf den `"filter_data"` der Quelle verfügbar ist.

> [!NOTE]
> `not_filters`, die Filterung mit Negation, wird ebenfalls unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Wörterbuch übereinstimmen, damit der Trigger als zutreffend betrachtet wird.

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

Wenn die Filter für keinen der Ereignistrigger übereinstimmen, wird kein Event-Level-Bericht erstellt. Wenn die Filter für mehrere Ereignistrigger übereinstimmen, wird der erste übereinstimmende Ereignistrigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Fehlerbehebungsinformationen zu Ihren Attributionsberichten zurückzugeben. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung richtig funktioniert, und um Lücken in den Messergebnissen zwischen Ihrer alten Cookie-basierten Implementierung und Ihrer neuen Attribution Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht demselben Zeitplan wie Event-Level- und zusammenfassende Berichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines bestimmten Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Trigger registriert ist.
- **Ausführliche Debug-Berichte** geben Ihnen mehr Einblick in die Attributionsquelle und die Attributions-Trigger-Ereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen es Ihnen sicherzustellen, dass Quellen erfolgreich registriert wurden, oder fehlende Berichte zu verfolgen und den Grund für ihr Fehlen zu ermitteln (zum Beispiel aufgrund eines Fehlers bei der Registrierung von Quellen- oder Trigger-Ereignissen oder eines Fehlers beim Senden oder Generieren des Berichts). Ausführliche Debug-Berichte werden sofort nach der Registrierung von Quellen oder Triggern gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss der Ursprungsort des Berichts ein Cookie setzen. Wenn der für den Empfang von Berichten konfigurierte Ursprung ein Dritter ist, ist dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies), was bedeutet, dass Debug-Berichte in Browsern, in denen Drittanbieter-Cookies deaktiviert/nicht verfügbar sind, nicht verfügbar sein werden.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie auf Ihrem Berichtsursprung. Dies muss während der Registrierung von sowohl Quelle als auch Trigger vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in allen {{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwort-Headern, die sich auf Attributionsberichte beziehen, für die Sie Debugging-Informationen öffentlich machen möchten. Jeder `debug_key`-Wert muss eine 64-Bit-ganzzahlige Zahl im Basis-10-Format sein. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten zum Beispiel jeden als Cookie-ID + Zeitstempel der Quelle/Trigger festlegen (und diesen gleichen Zeitstempel in Ihrem älteren cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Quellenseitigen Debug-Schlüssel von der `source_event_id` unterschiedlich, damit Sie einzelne Berichte unterscheiden können, die die gleiche Quellereignis-ID haben.

3. Optional setzen Sie das `debug_reporting`-Feld auf `true`, in sowohl dem `Attribution-Reporting-Register-Source` als auch dem `Attribution-Reporting-Register-Trigger` Header. Wenn Sie dies tun, wird ein ausführlicher Debug-Bericht generiert. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht generiert, der die Art des Attributionsberichts widerspiegelt, den Sie generieren (Event-Level oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte im Berichtsursprung gesendet:
   - Endpunkt für Erfolgs-Debug-Berichte auf Ereignisebene: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Attributionsberichten und enthalten die Quellenseitigen und die Triggersetigen Debug-Schlüssel in den Feldern `"source_debug_key"` und `"trigger_debug_key"`.

Für weitere Informationen und Beispiele siehe:

- [Einführung in Debug-Berichte](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf privacysandbox.google.com (2023)
- [Einrichtung von Debug-Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf privacysandbox.google.com (2023)
- [Debugging-Kochbuch](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf privacysandbox.google.com (2023)
