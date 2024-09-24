---
title: Erzeugung von Zuordnungsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) — sowohl Zuordnungsberichte als auch Debug-Berichte — generiert werden und wie Sie die generierten Berichte kontrollieren können. Dies umfasst den Umgang mit Rauschen, die Priorisierung von Berichten, die Filterung von Berichten und die Erstellung von Debug-Berichten.

## Grundlegender Prozess

Wenn ein Abgleich zwischen einem Trigger und einer Quelle erfolgt, erstellt der Browser einen Bericht und sendet ihn über eine nicht authentifizierte [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage an einen spezifischen Endpunkt im Herkunftsbericht:

- Für ereignisebene Berichte lautet dieser `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für Zusammenfassungsberichte lautet dieser `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` ist derselbe Ursprung, der die Quelle und den Trigger registriert hat.

Die Berichtsdateien sind in einer JSON-Struktur enthalten.

## Ereignisebene Berichte

Ereignisebene Berichte werden generiert und geplant, um am Ende ihres **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die festgelegten Werte im Feld [`"event_report_window"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows) im Header der Quelle {{httpheader("Attribution-Reporting-Register-Source")}} bestimmt.

Wenn keines dieser Felder angegeben ist, greift das Berichtsfenster auf folgende Standardwerte zurück:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standardberichtsfenster mit dem Ablaufdatum der Quelle, das im `Attribution-Reporting-Register-Source`-Feld [`"expiry"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#expiry) festgelegt ist. Dieses ist standardmäßig 30 Tage nach der Registrierung, wenn es nicht explizit festgelegt ist.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die Standardberichtsfenster 2 Tage, 7 Tage und das `"expiry"` der Quelle.

Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein ereignisebene Bericht am entsprechenden Endpunkt eingegangen ist, liegt es vollständig beim Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer ereignisebene Bericht könnte folgendermaßen aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, je nachdem, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die im Quellregistrierungs-{{httpheader("Attribution-Reporting-Register-Source")}} Header enthaltene/gesetzer [`"destination"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination) Seite(n).
- `"source_event_id"`
  - : Ein String, der die Zuordnungsquellen-ID darstellt. Dies entspricht der im Quellregistrierungs-{{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegten [`"source_event_id"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#source_event_id).
- `"trigger_data"`
  - : Ein String, der Daten aus dem Zuordnungsauslöser darstellt, die bei der Triggerregistrierung gesetzt werden (das im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header gesetzte [`"trigger_data"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data)).
- `"report_id"`
  - : Ein String, der eine [Universally Unique Identifier (UUID)](/de/docs/Glossary/UUID) für diesen Bericht darstellt, der verwendet werden kann, um doppelte Zählungen zu verhindern.
- `"source_type"`
  - : Ein String, der `"navigation"` oder `"event"` entspricht, was jeweils anzeigt, ob die zugehörige Zuordnungsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese spezielle Quellkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden vom Unix-Zeitstempel bis zu dem Zeitpunkt, den der Browser ursprünglich für das Senden des Berichts geplant hat, darstellt (um Ungenauigkeiten bei Geräten offline zu vermeiden).
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit unsigned Integer, der den Debug-Schlüssel für die Zuordnungsquelle darstellt. Dies entspricht dem im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegten Wert [`"debug_key"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key). Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit unsigned Integer, der den Debug-Schlüssel für den Zuordnungsauslöser darstellt. Dies entspricht dem im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header festgelegten Wert `"debug_key"`. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Zusammenfassungsberichte

Ein Zusammenfassungsbericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen und dann [gebündelt](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/summary-reports-intro#batching) werden, um sie für die Verarbeitung durch einen [Aggregationsdienst](https://developers.google.com/privacy-sandbox/private-advertising/aggregation-service) vorzubereiten. Wenn dies geschehen ist, ist es vollständig dem Entwickler überlassen, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig generiert und geplant, nachdem ein Trigger interagiert wurde, mit einer zufälligen Verzögerung, um die Zeiten zu verharmlosen und die Privatsphäre zu verbessern. Für eine bestimmte registrierte Zuordnungsquelle werden Zuordnungsquellenereignisse vom Zeitpunkt der Registrierung bis zum Ablauf der Quelle aufgezeichnet - dies wird als das **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den in der Quell-{{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegten `expiry`-Wert definiert, der standardmäßig 30 Tage nach der Registrierung beträgt, wenn nicht explizit festgelegt. Beachten Sie, dass die Länge des Berichtsfensters weiter geändert werden kann, indem ein `aggregatable_report_window`-Wert in der Quell-{{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegt wird. Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Nutzer weiter zu schützen, haben die Zusammenfassungsberichtswerte, die mit jeder Zuordnungsquelle verknüpft sind, einen endlichen Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann je nach Implementierung der API variieren; in Chrome beträgt er 65.536. Alle Umrechnungen, die Berichte mit Werten über diesem Limit generieren würden, werden nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget verfolgen und es zwischen den verschiedenen Metriken teilen, die Sie messen möchten.

Ein typischer aggregierbarer Bericht könnte folgendermaßen aussehen:

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst verwendet, um einen Zusammenfassungsbericht zusammenzustellen. Diese Daten sind mittels [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption) verschlüsselt, um vor Manipulationen zu schützen. Die folgenden Eigenschaften sind in dem serialisierten String dargestellt:
    - `"api"`
      - : Ein enumerierter Wert, der die API darstellt, die die Berichtsgenerierung ausgelöst hat. Im Moment wird dieser immer gleich `"attribution-reporting"` sein, kann aber in Zukunft mit zusätzlichen Werten erweitert werden, um andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Zuordnungs-URL [`"destination"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination) darstellt, die im Quellregistrierungs-{{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegt ist.
    - `"report_id"`
      - : Ein String, der eine [Universally Unique Identifier (UUID)](/de/docs/Glossary/UUID) für diesen Bericht darstellt, der verwendet werden kann, um doppelte Zählungen zu verhindern.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtserstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden vom Unix-Zeitstempel bis zu dem Zeitpunkt, den der Browser ursprünglich für das Senden des Berichts geplant hat, darstellt (um Ungenauigkeiten bei Geräten offline zu vermeiden).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden vom Unix-Zeitstempel bis zur Registrierung der Zuordnungsquelle darstellt, abgerundet auf einen ganzen Tag.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die für die Erstellung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`

  - : Ein Array von Objekten, das Payload-Objekte repräsentiert, die die Histogramm-Beiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird pro Bericht nur ein einzelnes Payload unterstützt, das vom Browser konfiguriert ist. In Zukunft könnten multiple, anpassbare Payloads unterstützt werden. Jedes Payload-Objekt kann die folgenden Eigenschaften enthalten:

    - `"payload"`

      - : Eine [CBOR](https://cbor.io/) Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann [base64](/de/docs/Glossary/Base64)-codiert wurde, mit folgender Struktur:

        ```js
        {
          "operation": "histogram",  // Ermöglicht es dem Dienst, in Zukunft andere Operationen zu unterstützen
          "data": [{
            "bucket": <bucket, encoded as a 16-byte (i.e. 128-bit) big-endian bytestring>,
            "value": <value, encoded as a 4-byte (i.e. 32-bit) big-endian bytestring>
          }, ...]
        }
        ```

    - `"key_id"`
      - : Ein String der den öffentlichen Schlüssel identifiziert, der für die Verschlüsselung der Payload verwendet wurde.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debug-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit unsigned Integer, der den Debug-Schlüssel für die Zuordnungsquelle darstellt. Dies entspricht dem im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegten Wert [`"debug_key"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key). Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit unsigned Integer, der den Debug-Schlüssel für den Zuordnungsauslöser darstellt. Dies entspricht dem im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header festgelegten Wert `"debug_key"`. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Hinzufügen von Rauschen zu Berichten

Rauschen wird Berichten hinzugefügt, um die Ausgaben im Zusammenhang mit einer bestimmten Quelle zu verschleiern und damit die Privatsphäre der Nutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und Einzelbenutzern zugeordnet werden, aber die Gesamtmuster, die aus den Daten entnommen werden, liefern nach wie vor denselben Bedeutungsinhalt.

Weitere Informationen darüber, wie Rauschen in der Zuordnungsberichterstattung funktioniert, finden Sie unter:

- [Verstehen von Rauschen in Zusammenfassungsberichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/working-with-noise)

## Berichtsprioritäten und Begrenzungen

Standardmäßig haben alle Zuordnungsquellen die gleiche Priorität, und das Zuordnungsmodell basiert auf dem Last-Touch-Prinzip, was bedeutet, dass eine Konversion der zuletzt passenden Quellenereignis zugeordnet wird. Für sowohl ereignisebene als auch aggregierbare Berichte können Sie die Quellpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festlegen. Der Standardwert ist `0`; wenn Sie für eine bestimmte Quelle einen `"priority"`-Wert von `1` festlegen, wird diese Quelle zuerst abgeglichen, vor allen anderen Quellen mit Priorität `0`. Quellen mit `"priority": "2"` werden vor Quellen mit `"priority": "1"` abgeglichen und so weiter.

Prioritäten der Zuordnungsauslöser funktionieren auf die gleiche Weise; Sie können auch Auslöserprioritäten festlegen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzufügen, jedoch nur für Berichte auf Ereignisebene.

Verschiedene Queltypen haben unterschiedliche Standardgrenzen:

- [Navigationsbasierte Zuordnungsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig eine Dreiberichtsgrenze. Zum Beispiel: Wenn ein Benutzer auf eine Anzeige klickt und vier Mal konvertiert: Er besucht die Startseite der Werbeseite, besucht dann eine Produktseite, meldet sich für den Newsletter an und tätigt schließlich einen Kauf. Der Kaufbericht würde verworfen, da er aus der vierten Konversion stammt.
- [Ereignisbasierte Zuordnungsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig eine Einberichtsgrenze.

> [!NOTE]
> Die Berichtslimitierung kann durch Festlegung einer anderen Anzahl von `"end_times"` in den Feldern [`"event_report_windows"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows) des zugehörigen `Attribution-Reporting-Register-Source` Headers angepasst werden.

Wenn eine Zuordnung für ein gegebenes Quellenereignis ausgelöst wird und die maximale Anzahl an Zuordnungen (drei für Klicks, eine für Bilder/Skripts) für diese Quelle erreicht wurde, wird der Browser:

- Vergleichen Sie die Priorität des neuen Berichts mit den Prioritäten bestehender geplanter Berichte für dieselbe Quelle.
- Löschen Sie den Bericht mit der niedrigsten Priorität, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht derjenige mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, greift der Browser auf sein Standardverhalten zurück: Jede Konversion, die nach der dritten Konversion bei Klicks oder der ersten Konversion bei Ansichten erfolgt, wird verworfen.

## Filter

Sie können Regeln definieren, welche Konversionen Berichte erzeugen sollen, indem Sie Filter verwenden. Zum Beispiel könnten Sie wählen, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellregistrierung ein `filter_data`-Feld im {{httpheader("Attribution-Reporting-Register-Source")}} Header hinzu, das die Filter-Schlüssel definiert, die Sie verwenden werden, um die Konversionen auf der Triggerseite zu filtern. Dies sind vollständig benutzerdefinierte Felder. Zum Beispiel, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte zu spezifizieren:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Fügen Sie bei der Triggerregistrierung ein `filters`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzu. Das Folgende bewirkt zum Beispiel, dass Trigger-Interaktionen mit der obigen Quellregistrierung übereinstimmen, da sie beide das `"electronics.megastore"`-`"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter wird hingegen ignoriert, wenn ein Abgleich versucht wird, da er in der obigen Quellregistrierung nicht enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Enthalten die Felder `"filter_data"` und `"filters"` übereinstimmende Unterfelder (wie `"conversion_subdomain"` im obigen Beispiel), aber keines der Werte des Unterfeldes überlappt sich, wird der Trigger ignoriert, was zu keinem Abgleich führt.

### Filterung von Triggerdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}} Header kann erweitert werden, um selektive Filterung vorzunehmen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf den in {{httpheader("Attribution-Reporting-Register-Source")}} Header definierten `filter_data` festzulegen.

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

> **Hinweis:** `"source_type"` ist ein automatisch gefülltes Feld, das in den `"filter_data"` der Quelle verfügbar ist.

> **Hinweis:** `not_filters`, die mit Negation filtern, werden ebenfalls unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Dictionary übereinstimmen, damit der Trigger als gültig betrachtet wird.

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

Wenn die Filter nicht für eines der Ereignisauslöser übereinstimmen, wird kein ereignisebene Bericht erstellt. Wenn die Filter für mehrere Ereignisauslöser übereinstimmen, wird der erste übereinstimmende Ereignisauslöser verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Fehlerbehebungsinformationen zu Ihren Zuordnungsberichten zu erhalten. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihr Setup ordnungsgemäß funktioniert und um Lücken in den Messergebnissen zwischen Ihrer alten, cookie-basierten Implementierung und Ihrer neuen Attribution Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort versendet; sie unterliegen nicht dem gleichen Zeitplan wie ereignissebene und Zusammenfassungsberichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines bestimmten Zuordnungsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Trigger registriert ist.
- **Ausführliche Debug-Berichte** geben Ihnen mehr Einblick in die Ereignisse der Zuordnungsquelle und des Zuordnungsauslösers, die mit einem Zuordnungsbericht verbunden sind. Sie ermöglichen es Ihnen sicherzustellen, dass Quellen erfolgreich registriert wurden, oder fehlende Berichte nachzuverfolgen und festzustellen, warum sie fehlen (zum Beispiel wegen eines Fehlers bei der Registrierung von Quelle oder Trigger-Ereignis oder eines Fehlers beim Senden oder Erstellen des Berichts). Ausführliche Debug-Berichte werden sofort mit der Registrierung von Quelle oder Trigger gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss der Ursprungsbericht ein Cookie setzen. Wenn der Ursprungsbericht für Berichte ein Drittanbieter ist, ist dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Third-party_cookies), was bedeutet, dass Debug-Berichte in Browsern, in denen Drittanbieter-Cookies deaktiviert/nicht verfügbar sind, nicht angezeigt werden.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie auf Ihrem Herkunftsbericht. Dies muss sowohl während der Quell- als auch der Triggerregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in allen {{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwort-Headern, die sich auf Zuordnungsberichte beziehen, für die Sie Debugging-Informationen anzeigen möchten. Jeder `debug_key`-Wert muss ein 64-Bit unsigned Integer, formatiert als Base-10-String, sein. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten zum Beispiel jeden als Cookie-ID + Quelle/Trigger Zeitstempel festlegen (und denselben Zeitstempel in Ihrem älteren, cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel auf der Quellseite anders als die `source_event_id`, um einzelne Berichte zu unterscheiden, die dieselbe Quell-Ereignis-ID haben.

3. Optional können Sie das `debug_reporting`-Feld auf `true` setzen, in beiden `Attribution-Reporting-Register-Source` und `Attribution-Reporting-Register-Trigger` Headers. Falls Sie dies tun, wird ein ausführlicher Debug-Bericht generiert. Tun Sie dies nicht, wird ein Success-Debug-Bericht generiert, der den Typ des von Ihnen erstellten Zuordnungsberichts (ereignisebene oder aggregierbar) widerspiegelt.

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte im Herkunftsbericht gesendet:

   - Endpunkt für ereignisebene Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Zuordnungsberichten und enthalten die Debug-Schlüssel auf der Quellseite und der Triggerseite in den Feldern `"source_debug_key"` und `"trigger_debug_key"`.

Für weitere Informationen und Beispiele siehe:

- [Einführung in Debug-Berichte](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf developers.google.com (2023)
- [Debug-Berichte einrichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf developers.google.com (2023)
- [Debugging Kochbuch](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf developers.google.com (2023)
