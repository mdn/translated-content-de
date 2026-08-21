---
title: Erstellen von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) Berichte erstellt werden — sowohl Attributionsberichte als auch Debug-Berichte — und wie Sie die generierten Berichte steuern können. Dazu gehören das Umgang mit Rauschen, das Priorisieren von Berichten, das Filtern von Berichten und das Erstellen von Debug-Berichten.

## Grundlegender Prozess

Wenn eine Übereinstimmung zwischen einem Trigger und einer Quelle auftritt, generiert der Browser einen Bericht und sendet ihn über eine nicht autorisierte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage an einen bestimmten Endpunkt im Berichtursprung:

- Für Ereignis-Ebene-Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für Zusammenfassungsberichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird im selben Ursprung sein wie der, der die Quelle und den Trigger registriert hat.

Die Berichts-Daten sind in einer JSON-Struktur enthalten.

## Ereignis-Ebene-Berichte

Ereignis-Ebene-Berichte werden erstellt und geplant, um am Ende ihres **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die Werte bestimmt, die im Feld [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) festgelegt sind, die im {{httpheader("Attribution-Reporting-Register-Source")}}-Header der Quelle gesetzt werden.

Wenn keines dieser Felder angegeben ist, fällt das Berichtsfenster auf die folgenden Standardwerte zurück:

- Für [Ereignis-basierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standard-Berichtsfenster bei Ablauf der Quelle, das im `Attribution-Reporting-Register-Source` [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry)-Feld gesetzt ist. Dies ist standardmäßig 30 Tage nach der Registrierung, wenn es nicht explizit festgelegt ist.
- Für [Navigations-basierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die Standard-Berichtsfenster 2 Tage, 7 Tage und die "`expiry`" der Quelle.

Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein Ereignis-Ebene-Bericht an dem entsprechenden Endpunkt eingegangen ist, liegt es vollständig in der Verantwortung des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Ereignis-Ebene-Bericht könnte folgendermaßen aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, abhängig davon, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attributions[`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-Website(n), die in der Quellregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header gesetzt sind.
- `"source_event_id"`
  - : Ein String, der die Attributionsquellen-ID repräsentiert. Dies entspricht dem [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id), das in der Quellregistrierung (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header) festgelegt ist.
- `"trigger_data"`
  - : Ein String, der Daten repräsentiert, die vom Attributions-Trigger stammen und in der Trigger-Registrierung gesetzt sind (das [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header gesetzt).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der verwendet werden kann, um doppelte Zählungen zu verhindern.
- `"source_type"`
  - : Ein String gleich `"navigation"` oder `"event"`, die jeweils anzeigen, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die anzeigt, wie oft auf diese spezielle Quellkonfiguration [Rauschen](#hinzufügen_von_rauschen_zu_berichten) angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche bis zu dem Zeitpunkt darstellt, zu dem der Browser den Bericht ursprünglich geplant hat, um Ungenauigkeiten durch verspätete Berichterstattung von Offline-Geräten zu vermeiden.
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-ganzzahlige Darstellung des Debug-Schlüssels für die Attributionsquelle. Dies spiegelt den im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header gesetzten Wert im [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld wider. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-ganzzahlige Darstellung des Debug-Schlüssels für den Attribution-Trigger. Dies spiegelt den im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header gesetzten Wert im `"debug_key"`-Feld wider. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Zusammenfassungsberichte

Ein Zusammenfassungsbericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt eingegangen sind und dann [gepackt](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching) werden, um sie zur Verarbeitung durch einen [Aggregationsdienst](https://privacysandbox.google.com/private-advertising/aggregation-service) vorzubereiten. Sobald dies geschehen ist, liegt es vollständig in der Verantwortung des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig erstellt und geplant, um nach einem Trigger mit einer zufälligen Verzögerung gesendet zu werden, um die Timings zu verzerren und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Attributionsquellen-Ereignisse von der Registrierung bis zum Ablauf der Quelle aufgezeichnet — das wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert definiert, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header gesetzt ist, welcher, wenn nicht explizit festgelegt, standardmäßig 30 Tage nach der Registrierung beträgt. Beachten Sie, dass die Länge des Berichtsfensters durch das Setzen eines `aggregatable_report_window`-Werts im `Attribution-Reporting-Register-Source`-Header weiter angepasst werden kann. Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Benutzer weiter zu schützen, haben die mit jeder Attributionsquelle verbundenen Zusammenfassungsberichtswerte einen endlichen Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann je nach Implementierung der API variieren; in Chrome beträgt er 65.536. Alle Konversionen, die Berichte generieren würden, die Werte über diesen Grenzwert hinaus hinzufügen, werden nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken, die Sie messen möchten, teilen.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen liefert, die ein Aggregationsdienst verwenden wird, um einen Zusammenfassungsbericht zu erstellen. Diese Daten werden unter Verwendung von {{Glossary("Encryption", "Verschlüsselung")}} mit [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption) verschlüsselt, um Manipulationen zu verhindern. Die folgenden Eigenschaften sind in der serialisierten Zeichenkette enthalten:
    - `"api"`
      - : Ein aufgezählter Wert, der die API darstellt, die die Berichtserstellung ausgelöst hat. Derzeit wird dies immer gleich `"attribution-reporting"` sein, es kann jedoch mit zusätzlichen Werten erweitert werden, um in Zukunft andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions[`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-URL darstellt, die in der Quellregistrierung (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header) gesetzt ist.
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der verwendet werden kann, um doppelte Zählungen zu verhindern.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtserstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche bis zu dem Zeitpunkt darstellt, zu dem der Browser den Bericht ursprünglich geplant hat, um Ungenauigkeiten durch verspätete Berichterstattung von Offline-Geräten zu vermeiden.
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche bis zu dem Zeitpunkt darstellt, zu dem die Attributionsquelle registriert wurde, gerundet auf einen ganzen Tag.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die zur Erstellung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`
  - : Ein Array von Objekten, die Payload-Objekte repräsentieren, die die Histogrammbeiträge umfassen, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird pro Bericht nur ein einziges Payload unterstützt, welches vom Browser konfiguriert wird. In Zukunft können mehrere anpassbare Payloads unterstützt werden. Jedes Payload-Objekt kann die folgenden Eigenschaften enthalten:
    - `"payload"`
      - : Eine [CBOR](https://cbor.io/)-Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-codiert ist, mit der folgenden Struktur (nur zur Notation in JSON verwendet):

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
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der verwendet wurde, um die Payload zu verschlüsseln.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debug-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-ganzzahlige Darstellung des Debug-Schlüssels für die Attributionsquelle. Dies spiegelt den im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header gesetzten Wert im [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld wider. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-ganzzahlige Darstellung des Debug-Schlüssels für den Attribution-Trigger. Dies spiegelt den im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header gesetzten Wert im `"debug_key"`-Feld wider. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATIONEN SIND NICHT VOLLSTÄNDIG; WIR HABEN ES VORERST ZURÜCKGESTELLT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN, UND WIR WERDEN IN EINEM ZUKÜNFTIGEN DATUM MEHR ARBEIT ZU ARA-RAUSCHEN LEISTEN, WENN/WO DER BEDARF EXISTIERT

Im Falle von Ereignis-Ebene-Berichten wird dies mit einem randomisierten Antwortalgorithmus erreicht, der wie folgt funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Mengen von Berichten, die aus der Konfiguration der Quelle stammen könnten (einschließlich der Menge, die keine Berichte umfasst).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser, dass die Quelle attribuiert wird und wählt stattdessen ein zufälliges Element aus dieser Liste als Berichte der Quelle. Die Wahrscheinlichkeit dafür hängt von der Größe dieser Liste, den browserspezifischen Datenschutzparametern und dem gewählten [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon) der Quelle ab.

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}}-Header könnten so aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Die Quelle `"trigger_data"` kann maximal 32 Werte haben. Eine Erhöhung der Anzahl der Werte und `"event_report_windows"` erhöht die Anzahl der Elemente im gesamten Berichtssatz.

Eine passende {{httpheader("Attribution-Reporting-Register-Trigger")}} könnte Folgendes enthalten:

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

Es besteht jedoch immer noch die Möglichkeit, dass keine Übereinstimmung erfolgt, basierend auf dem oben beschriebenen randomisierten Antwortalgorithmus.
-->

Rauschen wird zu Berichten hinzugefügt, um das Output mit einer bestimmten Quelle zu verschleiern und die Privatsphäre der Benutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und einzelnen Benutzern zugeordnet werden, aber die Gesamttendenzen aus den Daten werden dennoch die gleiche Bedeutung behalten.

Weitere Informationen darüber, wie Rauschen im Attributionsbericht funktioniert, finden Sie unter:

- [Verständnis von Rauschen in Zusammenfassungsberichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Datenbeschränkungen und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## Bericht-Prioritäten und Grenzwerte

Standardmäßig haben alle Attributionsquellen die gleiche Priorität und das Attributionsmodell basiert auf der letzten Berührung, was bedeutet, dass eine Konversion der am kürzesten zurückliegenden passenden Quellen-Ereignis zugeordnet wird. Für sowohl Ereignis-Ebene- als auch aggregierbare Berichte können Sie die Quellenpriorität durch Setzen eines neuen Werts für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header ändern. Der Standardwert ist `0`; wenn Sie einen `"priority"`-Wert von `1` auf einer bestimmten Quelle setzen, wird diese Quelle zuerst abgeglichen, bevor alle Quellen mit Priorität `0`. Quellen mit `"priority": "2"` werden vor Quellen mit `"priority": "1"` abgeglichen, usw.

Attributions-Trigger-Prioritäten funktionieren auf die gleiche Weise; Sie können auch Trigger-Prioritäten festlegen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzufügen, jedoch nur für Ereignis-Ebene-Berichte.

Verschiedene Quellentypen haben unterschiedliche Standardgrenzwerte:

- [Navigations-basierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig eine Drei-Bericht-Grenze. Wenn z. B. ein Benutzer auf eine Anzeige klickt und viermal konvertiert: Er besucht die Startseite des Werbetreibenden, dann eine Produktseite, meldet sich für den Newsletter an und macht schließlich einen Kauf. Der Kaufbericht würde fallen gelassen, da er aus der vierten Konversion stammt.
- [Ereignis-basierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig eine Ein-Bericht-Grenze.

> [!NOTE]
> Die Berichtsgrenze kann durch das Setzen einer unterschiedlichen Anzahl von `"end_times"` in den Feldern [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) des zugehörigen `Attribution-Reporting-Register-Source`-Headers angepasst werden.

Wenn eine Attribution für ein gegebenes Quellen-Ereignis ausgelöst wird und die maximale Anzahl von Attributions (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten der bestehenden geplanten Berichte für diese gleiche Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht derjenige mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, fällt der Browser auf sein Standardverhalten zurück: Jede Konversion, die nach der dritten Konversion für Klicks oder der ersten Konversion für Ansichten erfolgt, wird fallen gelassen.

## Filter

Sie können Regeln für die Generierung von Berichten über Konversionen mithilfe von Filtern definieren. Beispielsweise könnten Sie nur Konversionen für eine bestimmte Produktkategorie zählen und Konversionen für andere Kategorien herausfiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellregistrierung ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}}-Header hinzu, das die Filter-Schlüssel definiert, die Sie auf der Trigger-Seite zur Filterung der Konversionen verwenden möchten. Diese sind vollständig benutzerdefinierte Felder. Um beispielsweise nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte anzugeben:

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

2. Fügen Sie bei der Trigger-Registrierung ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzu. Das folgende Beispiel lässt Trigger-Interaktionen übereinstimmen mit der obigen Quellregistrierung, da sie beide das Feld `"electronics.megastore"` `"conversion_subdomain"` enthalten. Der `"directory"`-Filter wird hingegen bei einem Übereinstimmungsversuch ignoriert, da er nicht in der obigen Quellregistrierung enthalten war.

   ```json
   {
     "filters": {
       "conversion_subdomain": ["electronics.megastore"],
       "directory": ["/store/electronics"]
     }
   }
   ```

Wenn die Felder `"filter_data"` und `"filters"` übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), aber keine der Werte im Unterfeld übereinstimmen, wird der Trigger ignoriert, was zu keiner Übereinstimmung führt.

### Filterung der Trigger-Daten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header kann erweitert werden, um selektive Filterung anzuwenden, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data` zu setzen, das im {{httpheader("Attribution-Reporting-Register-Source")}}-Header definiert ist.

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

> [!NOTE]
> `"source_type"` ist ein automatisch gefülltes Feld, das auf der `"filter_data"` der Quelle verfügbar ist.

> [!NOTE]
> `not_filters`, die mit Verneinung filtern, werden ebenfalls unterstützt.

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

Wenn die Filter für keine der Ereignis-Trigger übereinstimmen, wird kein Ereignis-Ebene-Bericht erstellt. Wenn die Filter für mehrere Ereignis-Trigger übereinstimmen, wird der erste übereinstimmende Ereignis-Trigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Fehlerbehebungsinformationen zu Ihren Attributionsberichten zu erhalten. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert und um Lücken in den Messergebnissen zwischen Ihrer alten Cookie-basierten Implementierung und Ihrer neuen Attribution Reporting Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht der gleichen Planung wie Ereignis-Ebene- und Zusammenfassungsberichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines bestimmten Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und sofort gesendet, sobald der entsprechende Trigger registriert wird.
- **Ausführliche Debug-Berichte** geben Ihnen mehr Einblick in die Attributionsquellen- und Attributions-Trigger-Ereignisse, die einem Attributionsbericht zugeordnet sind. Sie ermöglichen es Ihnen, sicherzustellen, dass Quellen erfolgreich registriert wurden oder fehlende Berichte nachzuverfolgen und festzustellen, warum sie fehlen (zum Beispiel aufgrund eines Fehlers bei der Quellen- oder Trigger-Ereignisregistrierung oder eines Fehlers beim Senden oder Erstellen des Berichts). Ausführliche Debug-Berichte werden sofort bei Quellen- oder Trigger-Registrierung gesendet.

> [!NOTE]
> Um Debug-Berichte zu nutzen, muss der Ursprungsbericht ein Cookie setzen. Wenn der für den Empfang von Berichten konfigurierte Ursprung ein Drittanbieter ist, wird dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies), was bedeutet, dass Debug-Berichte in Browsern, in denen Drittanbieter-Cookies deaktiviert oder nicht verfügbar sind, nicht verfügbar sein werden.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie auf Ihrem Berichtursprung. Es muss sowohl während der Quellen- als auch der Trigger-Registrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in allen {{httpheader("Attribution-Reporting-Register-Source")}}- und {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwort-Headern, die mit Attributionsberichten zusammenhängen, für die Sie Debug-Informationen freilegen möchten. Jeder `debug_key`-Wert muss eine 64-Bit-ganzzahlige Zahl sein, die als Basis-10-Zeichenkette formatiert ist. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten zum Beispiel jeden als Cookie-ID + Quelle/Trigger-Zeitstempel setzen (und diesen selben Zeitstempel in Ihrem älteren Cookie-basierten System festhalten, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel der Quellseite anders als die `source_event_id`, damit Sie einzelne Berichte, die dieselbe Quellereignis-ID haben, unterscheiden können.

3. Optional können Sie das `debug_reporting`-Feld auf `true` setzen, sowohl in den `Attribution-Reporting-Register-Source`- als auch in den `Attribution-Reporting-Register-Trigger`-Headern. Wenn Sie dies tun, wird ein ausführlicher Debug-Bericht erstellt. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht erstellt, der die Art des Attributionsberichts widerspiegelt, den Sie erstellen (Ereignis-Ebene oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie erstellen möchten. Debug-Berichte werden an drei separate Endpunkte im Berichtursprung gesendet:
   - Endpunkt für event-level Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Attributionsberichten und enthalten die Debug-Schlüssel der Quellseite und der Trigger-Seite in den Feldern `"source_debug_key"` und `"trigger_debug_key"` jeweils.

Weitere Informationen und Beispiele finden Sie unter:

- [Einführung in Debug-Berichte](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf privacysandbox.google.com (2023)
- [Einrichten von Debug-Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf privacysandbox.google.com (2023)
- [Debugging-Kochbuch](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf privacysandbox.google.com (2023)
