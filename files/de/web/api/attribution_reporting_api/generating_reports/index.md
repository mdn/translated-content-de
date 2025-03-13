---
title: Generieren von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden - sowohl Attributionsberichte als auch Debug-Berichte - und wie Sie die generierten Berichte steuern können. Dies umfasst die Handhabung von Rauschen, die Priorisierung von Berichten, das Filtern von Berichten und die Erstellung von Debug-Berichten.

## Grundlegender Prozess

Wenn eine Übereinstimmung zwischen einem Trigger und einer Quelle festgestellt wird, generiert der Browser einen Bericht und sendet ihn über eine nicht authentifizierte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage an einen bestimmten Endpunkt im Reporting-Ursprung:

- Für Event-Ebene-Berichte: `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für Zusammenfassungsberichte: `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird identisch sein mit dem, der die Quelle und den Trigger registriert hat.

Die Berichtsdaten sind in einer JSON-Struktur enthalten.

## Event-Level-Berichte

Event-Level-Berichte werden generiert und geplant, um am Ende ihres entsprechenden **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die Werte bestimmt, die im [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window)- oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows)-Feld festgelegt sind, das im Header {{httpheader("Attribution-Reporting-Register-Source")}} der Quelle gesetzt ist.

Wenn keines dieser Felder angegeben ist, fällt das Berichtsfenster auf folgende Standardwerte zurück:

- Für [eventbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standard-Berichtsfenster bei Ablauf der Quelle, welches im `Attribution-Reporting-Register-Source` [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry)-Feld festgelegt ist. Dies ist standardmäßig 30 Tage nach der Registrierung, wenn nicht explizit festgelegt.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die Standard-Berichtsfenster 2 Tage, 7 Tage und das Enddatum der Quelle `"expiry"`.

Siehe [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

Sobald ein Event-Level-Bericht am entsprechenden Endpunkt empfangen wird, liegt es vollständig in der Hand des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Event-Level-Bericht könnte so aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, je nachdem, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attributions-["destination"](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-Seite(n), die in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader festgelegt wurde(n).
- `"source_event_id"`
  - : Ein String, der die ID der Attributionsquelle repräsentiert. Dies entspricht der [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id), die in der Quellenregistrierung festgelegt wurde (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader).
- `"trigger_data"`
  - : Ein String, der Daten aus dem Attributionstrigger repräsentiert, die in der Triggerregistrierung festgelegt sind (die [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data), gesetzt über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwortheader).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Eindeutige Universelle Kennung (UUID)")}} für diesen Bericht darstellt, die verwendet werden kann, um doppelte Zählungen zu verhindern.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` entspricht, was jeweils anzeigt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese bestimmte Quellkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden seit dem Unix-Epoch darstellt, bis der Browser den Bericht ursprünglich geplant hatte, um gesendet zu werden (um Ungenauigkeiten infolge von Offline-Geräten, die spät berichten, zu vermeiden).
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-unsigned Integer, die den Debug-Schlüssel für die Attributionsquelle darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header im Feld [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) festgelegt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-unsigned Integer, die den Debug-Schlüssel für den Attributionstrigger darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header im Feld `"debug_key"` festgelegt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Zusammenfassungsberichte

Ein Zusammenfassungsbericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen und dann [gebündelt](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/summary-reports-intro#batching) werden, um sie für die Verarbeitung durch einen [Aggregationsdienst](https://developers.google.com/privacy-sandbox/private-advertising/aggregation-service) vorzubereiten. Wenn dies erfolgt ist, liegt es vollständig in der Hand des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig nach einem Trigger erzeugt und geplant, mit einer zufälligen Verzögerung gesendet zu werden, um die Zeitangaben zu verschleiern und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Attributionsquellen-Ereignisse ab der Registrierung bis zum Ablauf der Quelle aufgezeichnet - dies wird als das **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert festgelegt, der im entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}-Header festgelegt ist, was standardmäßig 30 Tage nach der Registrierung bedeutet, sofern nicht explizit festgelegt. Beachten Sie, dass die Länge des Berichtsfensters weiter angepasst werden kann, indem ein `aggregatable_report_window`-Wert im `Attribution-Reporting-Register-Source`-Header gesetzt wird. Siehe [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

> [!NOTE]
> Um die Privatsphäre der Nutzer weiter zu schützen, haben die Werte von Zusammenfassungsberichten, die mit jeder Attributionsquelle verbunden sind, einen begrenzten Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann in verschiedenen Implementierungen der API variieren; in Chrome beträgt er 65.536. Alle Konversionen, die Berichte generieren würden, deren Werte über diesem Limit liegen, werden nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken, die Sie messen möchten, verteilen.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst zur Erstellung eines zusammenfassenden Berichts verwenden wird. Diese Daten werden über [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption) {{Glossary("Encryption", "verschlüsselt")}}, um Manipulationen zu verhindern. Die folgenden Eigenschaften sind in dem serialisierten String dargestellt:
    - `"api"`
      - : Ein aufgezählter Wert, der die API repräsentiert, die die Berichtserstellung ausgelöst hat. Derzeit wird dies immer gleich `"attribution-reporting"` sein, aber es könnte erweitert werden, um weitere Werte zu unterstützen, die andere APIs in der Zukunft unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions-["destination"](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-URL darstellt, die in der Quellenregistrierung festgelegt ist (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader).
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Eindeutige Universelle Kennung (UUID)")}} für diesen Bericht darstellt, die verwendet werden kann, um doppelte Zählungen zu verhindern.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtserstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden seit dem Unix-Epoch darstellt, bis der Browser den Bericht ursprünglich geplant hatte, um gesendet zu werden (um Ungenauigkeiten infolge von Offline-Geräten, die spät berichten, zu vermeiden).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden seit dem Unix-Epoch darstellt, bis die Attributionsquelle registriert wurde, auf einen vollen Tag abgerundet.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die zur Erstellung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`

  - : Ein Array von Objekten, die Nutzlastobjekte repräsentieren, die die Histogrammbeiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird pro Bericht nur eine einzige Nutzlast unterstützt, die vom Browser konfiguriert wird. In Zukunft können mehrere, anpassbare Nutzlasten unterstützt werden. Jedes Nutzlastobjekt kann die folgenden Eigenschaften enthalten:

    - `"payload"`

      - : Eine [CBOR](https://cbor.io/)-Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-kodiert wurde, mit der folgenden Struktur:

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
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der zur Verschlüsselung der Nutzlast verwendet wurde.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionalen Debug-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-unsigned Integer, die den Debug-Schlüssel für die Attributionsquelle darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header im Feld [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) festgelegt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-unsigned Integer, die den Debug-Schlüssel für den Attributionstrigger darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header im Feld `"debug_key"` festgelegt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATION IST NICHT VOLLSTÄNDIG; WIR HABEN SIE ZURÜCKGESTELLT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN, UND WIR WERDEN IN ZUKUNFT WEITER AN ARA RAUSCHEN ARBEITEN, WENN/DAS DIE NACHFRAGE BESTEHT

Im Fall von Event-Level-Berichten wird dies mit einem randomisierten Antwortalgorithmus durchgeführt, der wie folgt funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Berichtssätze, die aus der Quellkonfiguration stammen könnten (einschließlich des Satzes, der aus keinen Berichten besteht).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser, dass die Quelle zugeordnet wird, und wählt stattdessen ein zufälliges Mitglied dieser Liste aus, das als Quellenberichte verwendet wird. Die Wahrscheinlichkeit, dass dies passiert, basiert auf der Größe dieser Liste, den implementierungsspezifischen Datenschutzparametern des Browsers und dem festgelegten [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon) der Quelle.

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}}-Header könnten so aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Die `"trigger_data"` der Quelle kann maximal 32 Werte enthalten. Eine Erhöhung der Anzahl der Werte und `"event_report_windows"` erhöht die Anzahl der Elemente im gesamten Berichtssatz.

Ein übereinstimmender {{httpheader("Attribution-Reporting-Register-Trigger")}} könnte folgendes enthalten:

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

Es ist jedoch immer noch möglich, dass keine Übereinstimmung erfolgt, basierend auf dem oben beschriebenen randomisierten Antwortalgorithmus.
-->

Rauschen wird Berichten hinzugefügt, um die Ausgabe, die mit einer bestimmten Quelle verbunden ist, zu verschleiern und somit die Privatsphäre der Benutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und einzelnen Benutzern zugeordnet werden, aber die Gesamtrichtungen, die sich aus den Daten ergeben, werden immer noch die gleiche Bedeutung haben.

Weitere Informationen darüber, wie Rauschen in der Attributionsberichterstattung funktioniert, finden Sie in:

- [Verständnis von Rauschen in Zusammenfassungsberichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/working-with-noise)

## Berichtsprioritäten und Grenzen

Standardmäßig haben alle Attributionsquellen die gleiche Priorität, und das Attributionsmodell ist zuletzt berührt, was bedeutet, dass eine Konversion der zuletzt passenden Quelle zugeordnet wird. Sowohl für Event-Level- als auch für aggregierbare Berichte können Sie die Quellpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header festlegen. Der Standardwert ist `0`; wenn Sie einem bestimmten Quelle eine `"priority"` von `1` zuweisen, wird diese Quelle zuerst abgeglichen, vor allen Quellen der Priorität `0`. Quellen mit `"priority": "2"` werden vor Quellen mit `"priority": "1"` abgeglichen, und so weiter.

Attributionstigger-Prioritäten funktionieren auf die gleiche Weise; Sie können auch Trigger-Prioritäten setzen, indem Sie ein `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzufügen, jedoch nur für Event-Level-Berichte.

Verschiedene Quelltypen haben unterschiedliche Standardgrenzen:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Drei-Berichte-Limit. Zum Beispiel: Wenn ein Benutzer auf eine Anzeige klickt und viermal konvertiert: Er besucht die Startseite der Werbeseite, dann eine Produktseite, meldet sich für den Newsletter an und tätigt schließlich einen Kauf. Der Kaufbericht würde nicht erfasst, da er aus der vierten Konversion stammt.
- [Event-basierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Ein-Bericht-Limit.

> [!NOTE]
> Das Berichtslimit kann angepasst werden, indem Sie eine andere Anzahl von `"end_times"` in den [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows)-Felder der zugehörigen `Attribution-Reporting-Register-Source`-Header setzen.

Wenn eine Attribution für ein gegebenes Quellereignis ausgelöst wird und die maximale Anzahl von Attributionen (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten bestehender geplanter Berichte für dieselbe Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht der mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten gesetzt sind, kehrt der Browser zu seinem Standardverhalten zurück: Jegliche Konversion nach der dritten für Klicks oder der ersten für Ansichten wird verworfen.

## Filter

Sie können Regeln festlegen, welche Konversionen Berichte generieren, indem Sie Filter verwenden. Beispielsweise könnten Sie wählen, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Bei der Quellenregistrierung fügen Sie ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}}-Header hinzu, das die Filter-Schlüssel definiert, die Sie verwenden werden, um die Konversionen auf der Trigger-Seite zu filtern. Diese sind vollständig benutzerdefinierte Felder. Beispielsweise, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte zu spezifizieren:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Bei der Triggerregistrierung fügen Sie ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzu. Das folgende Beispiel bewirkt, dass Trigger-Interaktionen mit der oben genannten Quellenregistrierung übereinstimmen, da sie beide das `"conversion_subdomain"`-Feld `"electronics.megastore"` enthalten. Der `"directory"`-Filter hingegen wird bei einem Übereinstimmungsversuch ignoriert, da er nicht in der oben genannten Quellenregistrierung enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Wenn die `"filter_data"`- und `"filters"`-Felder übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), aber keiner der Werte des Unterfelds übereinstimmt, wird der Trigger ignoriert, was in keiner Übereinstimmung resultiert.

### Filtern von Triggerdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header kann erweitert werden, um selektives Filtern zu verwenden, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data`, das im {{httpheader("Attribution-Reporting-Register-Source")}}-Header definiert ist, einzustellen.

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

> **Hinweis:** `"source_type"` ist ein automatisch ausgefülltes Feld, das auf den `"filter_data"` der Quelle verfügbar ist.

> **Hinweis:** `not_filters`, welches mit Negation filtert, wird ebenfalls unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Wörterbuch übereinstimmen, damit der Trigger als passend betrachtet wird.

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

Wenn die Filter für keines der Ereignistrigger übereinstimmen, wird kein Event-Level-Bericht erstellt. Wenn die Filter für mehrere Ereignistrigger übereinstimmen, wird der erste passende Ereignistrigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Troubleshooting-Informationen zu Ihren Attributionsberichten zu erhalten. Diese können zum Beispiel verwendet werden, um zu prüfen, ob Ihr Setup ordnungsgemäß funktioniert und um Lücken in den Messergebnissen zwischen Ihrer alten Cookie-basierten Implementierung und Ihrer neuen Attribution Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht dem gleichen Zeitplan wie Event-Level- und Zusammenfassungsberichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines bestimmten Attributionsberichts. Erfolgs-Debug-Berichte werden erzeugt und gesendet, sobald der entsprechende Trigger registriert wird.
- **Verbose Debug-Berichte** geben Ihnen mehr Sichtbarkeit auf die Attributionsquelle und Attributions-Trigger-Ereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen es Ihnen, sicherzustellen, dass Quellen erfolgreich registriert wurden, oder fehlende Berichte zu verfolgen und festzustellen, warum sie fehlen (zum Beispiel aufgrund von Fehlern bei der Registrierung von Quellen oder Triggereignissen oder Fehlern beim Senden oder Erstellen des Berichts). Verbose Debug-Berichte werden sofort bei Quellen- oder Triggerregistrierung gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss der Reporting-Ursprung ein Cookie setzen. Wenn der zur Berichterstattung konfigurierte Ursprung ein Drittanbieter ist, wird dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies) sein, was bedeutet, dass Debug-Berichte in Browsern, in denen Drittanbieter-Cookies deaktiviert/nicht verfügbar sind, nicht verfügbar sind.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Das `ar_debug`-Cookie auf Ihrem Reporting-Ursprung setzen. Dieses muss während der sowohl Quellen- als auch Triggerregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Das `debug_key`-Feld in jedem {{httpheader("Attribution-Reporting-Register-Source")}}- und {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwortheader festlegen, die zu Attributionsberichten gehören, für die Sie Debug-Informationen freigeben möchten. Jeder `debug_key`-Wert muss eine 64-Bit-unsigned Integer sein, die als Base-10-String formatiert ist. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten zum Beispiel jeden als Cookie-ID + Quellen-/Triggerzeitstempel setzen (und diesen gleichen Zeitstempel in Ihrem älteren Cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Quellenseitigen Debug-Schlüssel unterschiedlich zur `source_event_id`, so dass Sie einzelne Berichte unterscheiden können, die die gleiche Quellen-Event-ID haben.

3. Optional das `debug_reporting`-Feld auf `true` setzen, sowohl im `Attribution-Reporting-Register-Source`- als auch im `Attribution-Reporting-Register-Trigger`-Header. Wenn Sie dies tun, wird ein Verbose Debug-Bericht erzeugt. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht erzeugt, der die Art des Attributionsberichts widerspiegelt, den Sie erzeugen (Event-Level oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Geeignete Endpunkte einrichten, um die Debug-Berichte zu empfangen, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte im Berichtursprung gesendet:

   - Endpunkt für Erfolgs-Debug-Berichte auf Ereignisebene: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für Verbose-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind mit Attributionsberichten identisch und enthalten die quellen- und triggerseitigen Debug-Schlüssel in den Feldern `"source_debug_key"` und `"trigger_debug_key"`.

Für weitere Informationen und Beispiele, siehe:

- [Einführung in Debug-Berichte](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf developers.google.com (2023)
- [Einrichten von Debug-Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf developers.google.com (2023)
- [Debugging Kochbuch](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf developers.google.com (2023)
