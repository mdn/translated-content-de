---
title: Generierung von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden – sowohl Attributionsberichte als auch Debug-Berichte – und wie Sie die generierten Berichte steuern können. Dazu gehört das Handhaben von Rauschen, das Priorisieren von Berichten, das Filtern von Berichten und das Generieren von Debug-Berichten.

## Basisprozess

Wenn eine Übereinstimmung zwischen einem Auslöser und einer Quelle auftritt, generiert der Browser einen Bericht und sendet diesen über eine nicht authentifizierte [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage an einen bestimmten Endpunkt im Reporting-Ursprung:

- Für ereignisbasierte Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für Zusammenfassungsberichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` ist dasselbe wie derjenige, der die Quelle und den Auslöser registriert hat.

Die Berichtsdatendaten sind in einer JSON-Struktur enthalten.

## Ereignisbasierte Berichte

Ereignisbasierte Berichte werden erstellt und geplant, um am Ende ihres **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die im Feld [`"event_report_window"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows) festgelegten Werte im Header {{httpheader("Attribution-Reporting-Register-Source")}} der Quelle bestimmt.

Wenn keines dieser Felder angegeben ist, wird das Berichtsfenster auf die folgenden Standardwerte zurückgesetzt:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standardberichtsfenster mit dem Ablaufdatum der Quelle, das im `Attribution-Reporting-Register-Source` [`"expiry"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#expiry)-Feld festgelegt ist. Dies wird standardmäßig 30 Tage nach der Registrierung gesetzt, wenn es nicht explizit festgelegt wird.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die Standardberichtsfenster 2 Tage, 7 Tage und das `"expiry"` der Quelle.

Für weitere Details siehe [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein ereignisbasierter Bericht am entsprechenden Endpunkt eingegangen ist, liegt es vollständig am Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer ereignisbasierter Bericht könnte so aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, abhängig davon, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attributionsziel-`"destination"`-Seite(n), die in der Quellregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader festgelegt wurden.
- `"source_event_id"`
  - : Ein String, der die Attributionsquellen-ID repräsentiert. Dieser entspricht der `"source_event_id"`, die in der Quellregistrierung (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader) festgelegt wird.
- `"trigger_data"`
  - : Ein String, der Daten repräsentiert, die vom Attributionstrigger stammen und in der Triggerregistrierung (die `"trigger_data"`, die über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwortheader festgelegt wurden) eingestellt wird.
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, die zur Vermeidung doppelter Zählungen verwendet werden kann.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` entspricht, was darauf hinweist, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die anzeigt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese bestimmte Quellenkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl von Sekunden seit der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich für den Versand geplant hatte (um Ungenauigkeiten aufgrund von Offline-Geräten, die verspätet berichten, zu vermeiden).
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debug-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header's [`"debug_key"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld gesetzt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debug-Schlüssel für den Attributionstrigger darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header's `"debug_key"` Feld gesetzt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Zusammenfassungsberichte

Ein Zusammenfassungsbericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen und dann [gebündelt](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/summary-reports-intro#batching) werden, um sie für die Verarbeitung durch einen [Aggregationsdienst](https://developers.google.com/privacy-sandbox/private-advertising/aggregation-service) vorzubereiten. Wenn dies erfolgt ist, liegt es völlig am Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig generiert und geplant, um nach der Interaktion mit einem Trigger mit einer zufälligen Verzögerung gesendet zu werden, um die Timings zu verschleiern und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Attributionsquellenereignisse von der Registrierung bis zum Ablauf der Quelle aufgezeichnet - dies wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert festgelegt, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header gesetzt ist, welcher standardmäßig 30 Tage nach der Registrierung beträgt, wenn er nicht explizit festgelegt wird. Beachten Sie, dass die Länge des Berichtsfensters durch Setzen eines `aggregatable_report_window`-Werts im `Attribution-Reporting-Register-Source` Header weiter modifiziert werden kann. Siehe [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

> [!NOTE]
> Um den Schutz der Benutzerprivatsphäre weiter zu erhöhen, haben die mit jeder Attributionsquelle verbundenen Werte im Zusammenfassungsbericht einen begrenzten Gesamtwert – dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann bei verschiedenen Implementierungen der API unterschiedlich sein; in Chrome beträgt er 65.536. Alle Konversionen, die Berichte mit Werten über diesem Limit erzeugen würden, werden nicht erfasst. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken, die Sie messen möchten, aufteilen.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst verwendet, um einen Zusammenfassungsbericht zu erstellen. Diese Daten sind {{Glossary("Encryption", "verschlüsselt")}} unter Verwendung von [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind in der serialisierten Zeichenkette dargestellt:
    - `"api"`
      - : Ein aufgezählter Wert, der die API repräsentiert, die die Berichterstellung ausgelöst hat. Derzeit wird dies immer gleich `"attribution-reporting"` sein, kann jedoch mit zusätzlichen Werten erweitert werden, um in Zukunft andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributionsziel-URL [`"destination"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination) darstellt, die in der Quellregistrierung (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader) festgelegt wurde.
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, die zur Vermeidung doppelter Zählungen verwendet werden kann.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichterstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl von Sekunden seit der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich für den Versand geplant hatte (um Ungenauigkeiten aufgrund von Offline-Geräten, die verspätet berichten, zu vermeiden).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl von Sekunden seit der Unix-Epoche darstellt, bis die Attributionsquelle registriert wurde, abgerundet auf einen ganzen Tag.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die zur Generierung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`

  - : Ein Array von Objekten, die Nutzlastobjekte darstellen, die die Histogrammbeiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird nur eine einzelne Nutzlast pro Bericht unterstützt, die vom Browser konfiguriert wird. In Zukunft können multiple, anpassbare Nutzlasten unterstützt werden. Jedes Nutzlastobjekt kann folgende Eigenschaften enthalten:

    - `"payload"`

      - : Eine [CBOR](https://cbor.io/) Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-codiert ist, mit folgender Struktur:

        ```js
        {
          "operation": "histogram",  // Allows for the service to support other operations in the future
          "data": [{
            "bucket": <bucket, encoded as a 16-byte (i.e. 128-bit) big-endian bytestring>,
            "value": <value, encoded as a 4-byte (i.e. 32-bit) big-endian bytestring>
          }, ...]
        }
        ```

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der zur Verschlüsselung der Nutzlast verwendet wird.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debug-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header's [`"debug_key"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld gesetzt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debug-Schlüssel für den Attributionstrigger darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header's `"debug_key"` Feld gesetzt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Hinzufügen von Rauschen zu Berichten

Rauschen wird zu Berichten hinzugefügt, um die Ausgabe, die einer bestimmten Quelle zugeordnet ist, zu verschleiern und dadurch die Benutzerprivatsphäre zu schützen. Die genauen Quelldaten können nicht identifiziert und einzelnen Benutzern zugewiesen werden, aber die Gesamtmuster aus den Daten behalten dieselbe Bedeutung.

Weitere Informationen darüber, wie Rauschen in der Attributionsberichterstattung funktioniert, finden Sie unter:

- [Verstehen von Rauschen in Zusammenfassungsberichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/understanding-noise).
- [Datenbegrenzungen und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/working-with-noise)

## Berichtsprioritäten und -limits

Standardmäßig haben alle Attributionsquellen die gleiche Priorität, und das Attributionsmodell ist last-touch, was bedeutet, dass eine Konversion dem jüngsten übereinstimmenden Quellenereignis zugeordnet wird. Für sowohl ereignisbasierte als auch aggregierbare Berichte können Sie die Quellenpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festlegen. Der Standardwert ist `0`; Wenn Sie einen `"priority"`-Wert von `1` auf einer bestimmten Quelle festlegen, wird diese Quelle zuerst übereinstimmt, vor allen Quellen der Priorität `0`. Quellen mit `"priority": "2"` sind zuerst vor Quellen der `"priority": "1"` usw. zugeordnet.

Die Prioritäten von Attributionstriggern funktionieren auf die gleiche Weise; Sie können auch Triggerprioritäten festlegen, indem Sie ein `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzufügen, jedoch nur für ereignisbasierte Berichte.

Verschiedene Quelltypen haben unterschiedliche Standardlimits:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Limit von drei Berichten. Beispiel: Ein Benutzer klickt auf eine Anzeige und konvertiert viermal: Er besucht die Startseite der Werbeseite, besucht dann eine Produktseite, abonniert den Newsletter und tätigt schließlich einen Kauf. Der Kaufbericht würde storniert, da er aus der vierten Konversion stammt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Limit von einem Bericht.

> [!NOTE]
> Das Berichtslimit kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den [`"event_report_windows"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows) Feldern des zugehörigen `Attribution-Reporting-Register-Source` Headers festgelegt wird.

Wenn eine Attribution für ein bestimmtes Quellenereignis ausgelöst wird und die maximale Anzahl von Attributierungen (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten der bereits geplanten Berichte für diese Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht der mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten gesetzt sind, fällt der Browser auf sein Standardverhalten zurück: Konversionen, die nach der dritten Konversion für Klicks oder der ersten Konversion für Ansichten auftreten, werden fallengelassen.

## Filter

Sie können Regeln festlegen, welche Konversionen Berichte erzeugen, indem Sie Filter verwenden. Beispiel: Sie könnten sich entscheiden, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellregistrierung ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}} Header hinzu, das die Filters keys definiert, die Sie verwenden, um die Konversionen auf der Triggerseite zu filtern. Dies sind vollständig benutzerdefinierte Felder. Um beispielsweise nur Konversionen bei bestimmten Subdomains und für bestimmte Produkte anzugeben:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Fügen Sie bei der Triggerregistrierung ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzu. Das folgende Beispiel führt dazu, dass Triggerinteraktionen mit der obigen Quellregistrierung übereinstimmen, da beide das `"electronics.megastore"` `"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter wird hingegen bei einem Übereinstimmungsversuch ignoriert, da er nicht in der obigen Quellregistrierung enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Wenn die `"filter_data"`- und `"filters"`-Felder übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), aber keiner der Werte des Unterfelds übereinstimmt, wird der Trigger ignoriert, was zu keiner Übereinstimmung führt.

### Filtern von Triggerdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}} Header kann erweitert werden, um selektives Filtern auszuführen, um `trigger_data`, `priority` oder `deduplication_key` auf Grundlage von `filter_data` zu setzen, die im {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert sind.

Beispiel:

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

> **Hinweis:** `"source_type"` ist ein automatisch befülltes Feld, das in der `"filter_data"` der Quelle verfügbar ist.

> **Hinweis:** `not_filters`, die mit Negation filtern, werden ebenfalls unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben wird, muss nur ein Wörterbuch übereinstimmen, damit der Trigger berücksichtigt wird.

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

Wenn die Filter für keine der Ereigtrigger übereinstimmen, wird kein ereignisbasierter Bericht erstellt. Wenn die Filter für mehrere Ereigtrigger übereinstimmen, wird der erste übereinstimmende Ereigtrigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Troubleshooting-Informationen über Ihre Attributionsberichte zurückzugeben. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert, und um Lücken in den Messergebnissen zwischen Ihrem alten cookie-basierten und Ihrem neuen Attribution Reporting Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht demselben Zeitplan wie ereignisbasierte und Zusammenfassungsberichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgsdebugberichte** verfolgen die erfolgreiche Erstellung eines bestimmten Attributionsberichts. Erfolgsdebugberichte werden generiert und gesendet, sobald der entsprechende Trigger registriert wird.
- **Ausführliche Debugberichte** geben Ihnen mehr Einblick in die Attributionsquellen und Attributionstriggerereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen es Ihnen, sicherzustellen, dass Quellen erfolgreich registriert wurden, oder fehlende Berichte zu verfolgen und zu bestimmen, warum sie fehlen (zum Beispiel aufgrund eines Fehlers bei der Quellen- oder Triggerereignisregistrierung oder eines Fehlers beim Senden oder Generieren des Berichts). Ausführliche Debugberichte werden unmittelbar bei Quellen- oder Triggerregistrierung gesendet.

> [!NOTE]
> Um Debugberichte zu verwenden, muss der Reporting-Ursprung ein Cookie setzen. Wenn der Ursprung, der konfiguriert ist, Berichte zu empfangen, ein Drittanbieter ist, wird dieses Cookie ein [Third-Party Cookie](/de/docs/Web/Privacy/Third-party_cookies) sein, was bedeutet, dass Debugberichte in Browsern, in denen Third-Party Cookies deaktiviert/nicht verfügbar sind, nicht verfügbar sein werden.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Das `ar_debug`-Cookie auf Ihrem Reporting-Ursprung setzen. Dies muss sowohl während der Quellen- als auch der Triggerregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Das `debug_key`-Feld in allen {{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwortheadern hinzufügen, die sich auf Attributionsberichte beziehen, für die Sie Debugging-Informationen anzeigen möchten. Jeder `debug_key`-Wert muss ein 64-Bit-unsigned Integer im Basis-10-Format sein. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID – Sie könnten beispielsweise jeden als Cookie-ID + Quell-/Trigger-Zeitstempel festlegen (und diesen gleichen Zeitstempel in Ihrem älteren system, das auf Cookies basiert, erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel auf der Quellseite unterschiedlich von der `source_event_id`, so dass Sie einzelne Berichte unterscheiden können, die dieselbe Quellereignis-ID haben.

3. Optional, das `debug_reporting`-Feld auf `true` setzen, sowohl im `Attribution-Reporting-Register-Source` als auch im `Attribution-Reporting-Register-Trigger` Header. Wenn Sie dies tun, wird ein ausführlicher Debug-Bericht generiert. Wenn Sie dies nicht tun, wird ein Erfolgsdebugbericht generiert, der den von Ihnen generierten Attributionsbericht widerspiegelt (ereignisbasiert oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Geeignete Endpunkte einrichten, um die Debugberichte zu empfangen, die Sie generieren möchten. Debugberichte werden an drei separate Endpunkte im Reporting-Ursprung gesendet:

   - Endpunkt für ereignisbasierte Erfolgsdebugberichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgsdebugberichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debugberichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgsdebugberichte sind identisch mit Attributionsberichten und enthalten die Debug-Schlüssel auf der Quell- und der Triggerseite in den Feldern `"source_debug_key"` und `"trigger_debug_key"`.

Weitere Informationen und Beispiele finden Sie unter:

- [Einführung in Debugberichte](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf developers.google.com (2023)
- [Einrichten von Debugberichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf developers.google.com (2023)
- [Debugging-Kochbuch](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf developers.google.com (2023)
