---
title: Erstellen von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden - sowohl Attributionsberichte als auch Debug-Berichte - und wie Sie die generierten Berichte steuern können. Dazu gehört das Umgang mit Rauschen, die Priorisierung von Berichten, das Filtern von Berichten und das Generieren von Debug-Berichten.

## Grundlegender Prozess

Wenn eine Übereinstimmung zwischen einem Auslöser und einer Quelle auftritt, generiert der Browser einen Bericht und sendet ihn über eine unbeglaubigte [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage an einen bestimmten Endpunkt im Reporting-Ursprung:

- Für Event-Level-Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für zusammenfassende Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` ist gleich dem, der die Quelle und den Auslöser registriert hat.

Die Berichtsdaten sind in einer JSON-Struktur enthalten.

## Event-Level-Berichte

Event-Level-Berichte werden erstellt und zur Versendung am Ende ihres **Berichtsfensters** geplant. Die Länge des Berichtsfensters wird durch die Werte in den Feldern [`"event_report_window"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows) im Header {{httpheader("Attribution-Reporting-Register-Source")}} der Quelle bestimmt.

Wenn keiner dieser Felder angegeben ist, wird das Berichtsfenster auf die folgenden Standardwerte zurückgesetzt:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standardberichtsfenster mit dem Ablauf der Quelle, der im `Attribution-Reporting-Register-Source`-Feld [`"expiry"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#expiry) festgelegt ist. Diese beträgt standardmäßig 30 Tage nach der Registrierung, falls nicht ausdrücklich festgelegt.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) betragen die Standardberichtsfenster 2 Tage, 7 Tage und der Ablauf der Quelle.

Siehe [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

Sobald ein Event-Level-Bericht an den entsprechenden Endpunkt empfangen wird, liegt es vollständig in der Hand des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Event-Level-Bericht könnte folgendermaßen aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, je nachdem, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attributions- [`"destination"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination)-Seiten, die in der Quellregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Response-Header festgelegt wurden.
- `"source_event_id"`
  - : Ein String, der die Attribution-Quell-ID darstellt. Dies entspricht der [`"source_event_id"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#source_event_id), die in der Quellregistrierung festgelegt wurde (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Response-Header).
- `"trigger_data"`
  - : Ein String, der Daten darstellt, die vom Attribution-Auslöser stammen, festgelegt in der Auslöserregistrierung (die [`"trigger_data"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data), festgelegt über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Response-Header).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht darstellt, der zur Verhinderung von doppeltem Zählen verwendet werden kann.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` entspricht, was jeweils darauf hinweist, ob die zugehörige Attribution-Quelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese spezielle Quellkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis der Browser ursprünglich geplant hatte, den Bericht zu senden (um Ungenauigkeiten infolge von Offline-Geräten zu vermeiden, die verspätet berichten).
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned-Integer, der den Debugging-Schlüssel für die Attribution-Quelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header's [`"debug_key"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld festgelegt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned-Integer, der den Debugging-Schlüssel für den Attribution-Auslöser darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header's `"debug_key"` Feld festgelegt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Zusammenfassende Berichte

Ein zusammenfassender Bericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen werden, und dann [gebündelt](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/summary-reports-intro#batching), um sie für die Verarbeitung durch einen [Aggregationsdienst](https://developers.google.com/privacy-sandbox/private-advertising/aggregation-service) vorzubereiten. Sobald dies geschehen ist, liegt es vollständig in der Hand des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig nach dem Interagieren mit einem Auslöser generiert und geplant, mit einer zufälligen Verzögerung, um die Timings zu verwischen und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attribution-Quelle werden Attributionsquellenereignisse von der Registrierung bis zum Ablauf der Quelle erfasst - dies wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert, die standardmäßig 30 Tage nach der Registrierung beträgt, falls nicht ausdrücklich festgelegt. Beachten Sie, dass die Länge des Berichtsfensters weiter angepasst werden kann, indem ein `aggregatable_report_window`-Wert im `Attribution-Reporting-Register-Source` Header festgelegt wird. Siehe [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

> [!NOTE]
> Um die Privatsphäre der Nutzer weiter zu schützen, haben die zusammenfassenden Berichtswerte, die mit jeder Attributionsquelle verbunden sind, einen endlichen Gesamtwert — dies wird als **beitragsbudget** bezeichnet. Dieser Wert kann bei verschiedenen Implementierungen der API variieren; in Chrome beträgt er 65.536. Alle Konversionen, die Berichte erzeugen würden, die Werte über diesem Limit hinzufügen, werden nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken aufteilen, die Sie messen möchten.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bietet, die ein Aggregationsdienst verwendet, um einen zusammenfassenden Bericht zu erstellen. Diese Daten werden {{Glossary("Encryption", "verschlüsselt")}} mit [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind im serialisierten String enthalten:
    - `"api"`
      - : Ein enumerierter Wert, der die API darstellt, die die Berichtserstellung ausgelöst hat. Derzeit wird dies immer `"attribution-reporting"` entsprechen, aber es kann in Zukunft mit zusätzlichen Werten erweitert werden, um andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions- [`"destination"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination)-URL darstellt, die in der Quellregistrierung festgelegt wurde (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Response-Header).
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht darstellt, der zur Verhinderung von doppeltem Zählen verwendet werden kann.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtserstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis der Browser ursprünglich geplant hatte, den Bericht zu senden (um Ungenauigkeiten infolge von Offline-Geräten zu vermeiden, die verspätet berichten).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis die Attributionsquelle registriert wurde, auf einen ganzen Tag abgerundet.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die den Bericht erstellt hat.
- `"aggregation_service_payloads"`

  - : Ein Array von Objekten, das Nutzlastobjekte darstellt, die die Histogrammbeiträge enthalten, die der Aggregationsdienst verwendet, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird pro Bericht nur eine einzige Nutzlast unterstützt, die vom Browser konfiguriert wird. In Zukunft könnten mehrere, anpassbare Nutzlasten unterstützt werden. Jedes Nutzlastobjekt kann die folgenden Eigenschaften enthalten:

    - `"payload"`

      - : Eine [CBOR](https://cbor.io/)-Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-kodiert ist, mit folgender Struktur:

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
      - : Optionale Debug-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned-Integer, der den Debugging-Schlüssel für die Attribution-Quelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header's [`"debug_key"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld festgelegt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned-Integer, der den Debugging-Schlüssel für den Attribution-Auslöser darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header's `"debug_key"` Feld festgelegt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATION IST NICHT VOLLSTÄNDIG; WIR HABEN SIE AKTUELL ZURÜCKGEHALTEN, UM DIESE DOKUMENTATION VERÖFFENTLICHEN ZU KÖNNEN, UND WERDEN IN ZUKÜNFTIGEN DATEN WEITERE ARBEITEN AN ARA-RAUSCHEN DURCHFÜHREN, WENN/WENN DIE NACHFRAGE BESTEHT

Im Falle von Event-Level-Berichten wird dies mit einem randomisierten Antwortalgorithmus durchgeführt, der wie folgt funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Satz von Berichten, die aus der Quellkonfiguration stammen könnten (einschließlich des Satzes, der keine Berichte enthält).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser, dass die Quelle zugeordnet wird, und wählt stattdessen ein zufälliges Mitglied dieser Liste als Berichte der Quelle aus. Die Wahrscheinlichkeit, dass dies geschieht, basiert auf der Größe dieser Liste, den spezifischen Datenschutzparametern des Browsers und dem von der Quelle gewählten [`"event_level_epsilon"`](/de/docs/WebHTTP/Headers/Attribution-Reporting-Register-Source#event_level_epsilon).

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}} Header könnten wie folgt aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Die `"trigger_data"` der Quelle kann maximal 32 Werte haben. Je mehr Werte und `"event_report_windows"` vorhanden sind, desto mehr Elemente sind im gesamten Berichtssatz enthalten.

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

Es ist jedoch immer noch möglich, dass keine Übereinstimmung erfolgt, basierend auf dem oben beschriebenen randomisierten Antwortalgorithmus.
-->

Rauschen wird Berichten hinzugefügt, um die Ausgabe, die mit einer bestimmten Quelle verbunden ist, zu verschleiern und somit die Privatsphäre der Nutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und individuellen Nutzern zugeschrieben werden, aber die gesamten Muster, die aus den Daten abgeleitet werden, liefern dennoch die gleiche Bedeutung.

Für Informationen darüber, wie Rauschen in der Attributionsberichterstattung funktioniert, siehe:

- [Verstehen von Rauschen in zusammenfassenden Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/working-with-noise)

## Prioritäten und Grenzen für Berichte

Standardmäßig haben alle Attributionsquellen die gleiche Priorität, und das Attributionsmodell ist last-touch, was bedeutet, dass eine Konversion der jüngsten passenden Quellenereignis zugeschrieben wird. Für sowohl Event-Level- als auch aggregierbare Berichte können Sie die Quellenpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festlegen. Der Standardwert ist `0`; wenn Sie für eine bestimmte Quelle einen `"priority"`-Wert von `1` festlegen, wird diese Quelle zuerst abgeglichen, vor allen Quellen mit der Priorität `0`. Quellen mit `"priority": "2"` werden vor Quellen mit `"priority": "1"` abgeglichen usw.

Die Prioritäten der Attributionsauslöser funktionieren auf die gleiche Weise; Sie können auch Auslöserprioritäten festlegen, indem Sie ein `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzufügen, aber nur für Event-Level-Berichte.

Verschiedene Quelltypen haben unterschiedliche Standardgrenzen:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig eine Grenze von drei Berichten. Zum Beispiel, wenn ein Nutzer auf eine Anzeige klickt und viermal konvertiert: Er besucht die Startseite der Werbeseite, besucht dann eine Produktseite, meldet sich für den Newsletter an und tätigt schließlich einen Kauf. Der Kaufbericht wird verworfen, da er von der vierten Konversion stammt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig eine Grenze von einem Bericht.

> [!NOTE]
> Die Berichtsgrenze kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den Feldern `"event_report_windows"` des zugehörigen `Attribution-Reporting-Register-Source` Headers festgelegt wird.

Wenn eine Attribution für ein gegebenes Quellenereignis ausgelöst wird und die maximale Anzahl von Attributierungen (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht ist, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten der bestehenden geplanten Berichte für diese gleiche Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht der mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, fällt der Browser auf sein Standardverhalten zurück: Jede Konversion, die nach der dritten Konversion für Klicks oder der ersten Konversion für Ansichten erfolgt, wird verworfen.

## Filter

Sie können Regeln definieren, welche Konversionen Berichte generieren, indem Sie Filter verwenden. Zum Beispiel könnten Sie sich entscheiden, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellregistrierung ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}} Header hinzu, das die Filterkeys definiert, die Sie verwenden werden, um die Konversionen auf der Auslöserseite zu filtern. Diese sind völlig benutzerdefinierte Felder. Zum Beispiel, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte anzugeben:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Fügen Sie bei der Auslöserregistrierung ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzu. Das folgende Beispiel führt dazu, dass Auslöserinteraktionen mit der obigen Quellregistrierung übereinstimmen, da beide das `"electronics.megastore"`-`"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter hingegen wird ignoriert, wenn ein Abgleich versucht wird, da er nicht in der obigen Quellregistrierung enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Wenn die `"filter_data"`- und `"filters"`-Felder übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), aber keiner der Werte des Unterfelds übereinstimmt, wird der Auslöser ignoriert, was zu keiner Übereinstimmung führt.

### Filtern von Auslöserdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}} Header kann erweitert werden, um selektives Filtern durchzuführen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data` festzulegen, das im {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert ist.

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

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Wörterbuch übereinstimmen, damit der Auslöser als übereinstimmend betrachtet wird.

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

Wenn die Filter für keine der Ereignisauslöser übereinstimmen, wird kein Event-Level-Bericht erstellt. Wenn die Filter für mehrere Ereignisauslöser übereinstimmen, wird der erste übereinstimmende Ereignisauslöser verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Fehlerbehebungsinformationen zu Ihren Attributionsberichten zurückzugeben. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert, und um Lücken in den Messungsergebnissen zwischen Ihrer alten Cookie-basierten Implementierung und Ihrer neuen Attribution Reporting Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht dem gleichen Zeitplan wie Event-Level- und zusammenfassende Berichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines spezifischen Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Auslöser registriert ist.
- **Verbose-Debug-Berichte** geben Ihnen mehr Einblick in die Attributionsquellen- und Attributionsauslöserereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen Ihnen sicherzustellen, dass Quellen erfolgreich registriert wurden oder fehlende Berichte nachzuverfolgen und zu bestimmen, warum sie fehlen (zum Beispiel aufgrund von Fehlern bei der Quellen- oder Auslöserereignisregistrierung oder Fehlern beim Senden oder Erstellen des Berichts). Verbose-Debug-Berichte werden sofort bei Quellen- oder Auslöserregistrierung gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss der Reporting-Ursprung ein Cookie setzen. Wenn der Ursprung, der Berichte empfängt, ein Drittanbieter ist, wird dieses Cookie ein [Third-Party-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies) sein, was bedeutet, dass Debug-Berichte in Browsern, in denen Third-Party-Cookies deaktiviert/nicht verfügbar sind, nicht verfügbar sein werden.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie auf Ihrem Reporting-Ursprung. Dieses muss sowohl während der Quellen- als auch der Auslöserregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in allen zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwort-Headern, die sich auf Attributionsberichte beziehen, für die Sie Debug-Informationen freigeben möchten. Jeder `debug_key`-Wert muss ein 64-Bit-unsigned-Integer sein, das im Base-10-Format ist. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten zum Beispiel jeden als Cookie-ID + Quellen-/Auslöser-Zeitsignatur festlegen (und diese gleiche Zeitsignatur in Ihrem älteren Cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den auf der Quellen-Seite liegenden Debug-Schlüssel anders als die `source_event_id`, damit Sie einzelne Berichte unterscheiden können, die die gleiche Quellen-Ereignis-ID haben.

3. Optional setzen Sie das `debug_reporting`-Feld auf `true`, sowohl in den `Attribution-Reporting-Register-Source`- als auch `Attribution-Reporting-Register-Trigger`-Headern. Wenn Sie dies tun, wird ein verboser Debug-Bericht erstellt. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht erstellt, der die Art des Attributionsberichts widerspiegelt, den Sie erstellen (Event-Level oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie erstellen möchten. Debug-Berichte werden an drei separate Endpunkte im Reporting-Ursprung gesendet:

   - Endpunkt für Event-Level-Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für verbose Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Attributionsberichten und enthalten die auf der Quellen-Seite und Auslöser-Seite liegenden Debug-Schlüssel in den `"source_debug_key"` und `"trigger_debug_key"` Feldern jeweils.

Für weitere Informationen und Beispiele siehe:

- [Einführung zu Debug-Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf developers.google.com (2023)
- [Setup von Debug-Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf developers.google.com (2023)
- [Debugging Cookbook](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf developers.google.com (2023)
