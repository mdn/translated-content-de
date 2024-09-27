---
title: Generieren von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden — sowohl Attributionsberichte als auch Debug-Berichte — und wie Sie die generierten Berichte steuern können. Dies umfasst das Handling von Rauschen, das Priorisieren von Berichten, Filtern von Berichten und das Erstellen von Debug-Berichten.

## Grundlegender Prozess

Wenn eine Übereinstimmung zwischen einem Trigger und einer Quelle auftritt, erstellt der Browser einen Bericht und sendet ihn über eine nicht-credentialisierte [`POST`](/de/docs/Web/HTTP/Methods/POST)-Anfrage an einen bestimmten Endpunkt im Reporting-Ursprung:

- Für Ereignis-Ebenenberichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für Zusammenfassungsberichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird mit dem Ursprung identisch sein, der die Quelle und den Trigger registriert hat.

Die Berichtsdaten sind in einer JSON-Struktur enthalten.

## Ereignis-Ebenen-Berichte

Ereignis-Ebenen-Berichte werden erzeugt und geplant, um am Ende ihres jeweiligen **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die im [`"event_report_window"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows) gesetzten Werte im {{httpheader("Attribution-Reporting-Register-Source")}}-Header der Quelle bestimmt.

Falls keiner dieser Felder spezifiziert ist, fällt das Berichtsfenster auf die folgenden Standardwerte zurück:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standardberichtsfenster mit dem Ablaufdatum der Quelle, das im `Attribution-Reporting-Register-Source`-Feld [`"expiry"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#expiry) eingestellt ist. Dies endet standardmäßig 30 Tage nach der Registrierung, wenn nicht explizit gesetzt.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) betragen die Standardberichtsfenster 2 Tage, 7 Tage und das Ablaufdatum der Quelle.

Siehe [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

Sobald ein Ereignis-Ebenen-Bericht am entsprechenden Endpunkt eingegangen ist, liegt es vollkommen beim Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typisches Ereignis-Ebenen-Bericht könnte so aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, abhängig davon, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attributions-["destination"](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination)-Website(n), die in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header eingestellt wurden.
- `"source_event_id"`
  - : Ein String, der die ID der Attributionsquelle darstellt. Dies entspricht der [`"source_event_id"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#source_event_id), die in der Quellenregistrierung gesetzt ist (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header).
- `"trigger_data"`
  - : Ein String, der Daten repräsentiert, die vom Attributionstrigger stammen, der in der Trigger-Registrierung gesetzt wurde (die [`"trigger_data"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger#trigger_data) über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwort-Header eingestellt).
- `"report_id"`
  - : Ein String, der eine [Universally Unique Identifier (UUID)](/de/docs/Glossary/UUID) für diesen Bericht darstellt, um doppelte Zählung zu verhindern.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` entspricht, was jeweils angibt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese bestimmte Quellenkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden ab dem Unix-Epoch angibt, bis der Browser den Bericht ursprünglich geplant hat (um Ungenauigkeiten zu vermeiden, die durch offline gemeldete Geräte verursacht werden).
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-Unsigned-Integer, der den Debugging-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header [`"debug_key"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key) gesetzt wurde. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-Unsigned-Integer, der den Debugging-Schlüssel für den Attributionstrigger darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header `"debug_key"` gesetzt wurde. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Zusammenfassungsberichte

Ein Zusammenfassungsbericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt eingegangen sind, und dann [gepoolt](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/summary-reports-intro#batching), um sie von einem [Aggregationsdienst](https://developers.google.com/privacy-sandbox/private-advertising/aggregation-service) verarbeiten zu lassen. Wenn dies geschehen ist, liegt es vollständig beim Entwickler, wie die Daten verarbeitet, gespeichert, und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig erstellt und geplant, um nach einer Interaktion mit einem Trigger gesendet zu werden, mit einer zufälligen Verzögerung, um die Zeiten zu verschleiern und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Attributionsquellenereignisse von der Registrierung bis zum Ablauf der Quelle aufgezeichnet - dies wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header definiert, der standardmäßig 30 Tage nach der Registrierung endet, wenn nicht explizit gesetzt. Beachten Sie, dass die Länge des Berichtsfensters weiter angepasst werden kann, indem ein `aggregatable_report_window`-Wert im `Attribution-Reporting-Register-Source`-Header gesetzt wird. Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Benutzer weiter zu schützen, haben die Zusammenfassungsberichtswerte, die mit jeder Attributionsquelle verbunden sind, einen begrenzten Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann je nach Implementierung der API variieren; in Chrome beträgt er 65.536. Alle Umrechnungen, die Berichte erzeugen würden, die Werte über diesem Limit hinzufügen, werden nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken, die Sie messen möchten, teilen.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst verwendet, um einen Zusammenfassungsbericht zusammenzustellen. Diese Daten werden [verschlüsselt](/de/docs/Glossary/Encryption) mit [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind im serialisierten String dargestellt:
    - `"api"`
      - : Ein enumerierter Wert, der die API darstellt, die die Berichtserstellung ausgelöst hat. Derzeit wird dieser immer gleich `"attribution-reporting"` sein, könnte aber in Zukunft mit zusätzlichen Werten erweitert werden, um andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions-[`"destination"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#destination) URL darstellt, die in der Quellenregistrierung gesetzt wurde (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header).
    - `"report_id"`
      - : Ein String, der eine [Universally Unique Identifier (UUID)](/de/docs/Glossary/UUID) für diesen Bericht darstellt, um doppelte Zählung zu verhindern.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtserstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden ab dem Unix-Epoch angibt, bis der Browser den Bericht ursprünglich geplant hat (um Ungenauigkeiten zu vermeiden, die durch offline gemeldete Geräte verursacht werden).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden ab dem Unix-Epoch angibt, bis die Attributionsquelle registriert wurde, auf einen ganzen Tag abgerundet.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die verwendet wurde, um den Bericht zu erstellen.
- `"aggregation_service_payloads"`

  - : Ein Array von Objekten, die Nutzlastobjekte darstellen, die die Histogramm-Beiträge enthalten, die der Aggregationsdienst verwendet, um die in dem Bericht enthaltenen Daten zu erstellen. Derzeit wird nur eine einzelne Nutzlast pro Bericht unterstützt, die vom Browser konfiguriert wird. In Zukunft könnten mehrere, anpassbare Nutzlasten unterstützt werden. Jedes Nutzlastobjekt kann die folgenden Eigenschaften enthalten:

    - `"payload"`

      - : Eine [CBOR](https://cbor.io/)-Map, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann [Base64](/de/docs/Glossary/Base64) kodiert wird, mit der folgenden Struktur:

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
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der verwendet wurde, um die Nutzlast zu verschlüsseln.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-Unsigned-Integer, der den Debugging-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header [`"debug_key"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#debug_key) gesetzt wurde. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-Unsigned-Integer, der den Debugging-Schlüssel für den Attributionstrigger darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header `"debug_key"` gesetzt wurde. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Hinzufügen von Rauschen zu Berichten

Rauschen wird den Berichten hinzugefügt, um die Ausgabe, die mit einer bestimmten Quelle verbunden ist, zu verschleiern und damit die Privatsphäre des Benutzers zu schützen. Die genauen Quelldaten können nicht identifiziert und auf einzelne Benutzer zurückgeführt werden, aber die insgesamt aus den Daten gewonnenen Muster werden immer noch die gleiche Bedeutung liefern.

Für Informationen darüber, wie Rauschen bei der Attributionsberichterstellung funktioniert, siehe:

- [Verstehen von Rauschen in Zusammenfassungsberichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/understanding-noise).
- [Datenbeschränkungen und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/working-with-noise)

## Prioritäten und Grenzen von Berichten

Standardmäßig haben alle Attributionsquellen die gleiche Priorität, und das Attributionsmodell ist last-touch, was bedeutet, dass eine Konversion der neuesten übereinstimmenden Quellen-Ereignis zugeordnet wird. Sowohl für Ereignis-Ebenen- als auch für aggregierbare Berichte können Sie die Quellenpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header festlegen. Der Standardwert ist `0`; wenn Sie einen `"priority"`-Wert von `1` auf einer bestimmten Quelle einstellen, wird diese Quelle zuerst abgeglichen, vor allen Prioritäts-`0`-Quellen. Quellen mit `"priority": "2"` werden vor `"priority": "1"`-Quellen abgeglichen, usw.

Attribution-Trigger-Prioritäten funktionieren auf die gleiche Weise; Sie können auch Trigger-Prioritäten festlegen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzufügen, jedoch nur für Ereignis-Ebenen-Berichte.

Verschiedene Quelltypen haben unterschiedliche Standardlimits:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Drei-Bericht-Limit. Zum Beispiel, wenn ein Benutzer auf eine Anzeige klickt und viermal konvertiert: Sie besuchen die Homepage der Werbeseite, dann eine Produktseite, melden sich für den Newsletter an und tätigen schließlich einen Kauf. Der Kaufbericht würde fallengelassen, da es von der vierten Umwandlung kommt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Ein-Bericht-Limit.

> [!NOTE]
> Das Berichtslimit kann angepasst werden, indem Sie eine andere Anzahl von `"end_times"` in den [`"event_report_windows"`](/de/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Source#event_report_windows)-Feldern im zugehörigen `Attribution-Reporting-Register-Source`-Header festlegen.

Wenn eine Attribution für ein gegebenes Quellenereignis ausgelöst wird und die maximale Anzahl von Attributions (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten der vorhandenen geplanten Berichte für dieselbe Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht der mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten gesetzt sind, fällt der Browser auf sein Standardverhalten zurück: Jede Umwandlung, die nach der dritten Umwandlung für Klicks oder der ersten Umwandlung für Ansichten auftritt, wird fallengelassen.

## Filter

Sie können Regeln definieren, welche Umwandlungen Berichte erzeugen, indem Sie Filter verwenden. Zum Beispiel könnten Sie wählen, nur Umwandlungen für eine spezifische Produktkategorie zu zählen und Umwandlungen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellenregistrierung ein `filter_data`-Feld dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header hinzu, das die Filter-Schlüssel definiert, die Sie verwenden werden, um die Umwandlungen auf der Trigger-Seite zu filtern. Diese sind vollständig kundenspezifische Felder. Zum Beispiel, um nur Umwandlungen auf bestimmten Subdomains und für bestimmte Produkte zu spezifizieren:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Fügen Sie bei der Trigger-Registrierung ein `filters`-Feld dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzu. Das folgende Beispiel führt dazu, dass Trigger-Interaktionen sich mit der obigen Quellenregistrierung abgleichen, da beide das `"electronics.megastore"` `"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter wird hingegen ignoriert, wenn ein Abgleich versucht wird, da er nicht in der obigen Quellenregistrierung enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Wenn die `"filter_data"` und `"filters"`-Felder übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), aber keine der Werte der Unterfelder übereinstimmen, wird der Trigger ignoriert, was zu keinem Abgleich führt.

### Filtern von Trigger-Daten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header kann erweitert werden, um selektives Filtern durchzuführen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data` zu setzen, das im {{httpheader("Attribution-Reporting-Register-Source")}}-Header definiert ist.

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

> **Note:** `"source_type"` ist ein automatisch ausgefülltes Feld, das auf den `"filter_data"` der Quelle verfügbar ist.

> **Note:** `not_filters`, die mit Negation filtern, werden ebenfalls unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben wird, muss nur ein Dictionary übereinstimmen, damit der Trigger berücksichtigt wird.

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

Wenn die Filter für keines der Ereignistrigger übereinstimmen, wird kein Ereignis-Ebenen-Bericht erstellt. Wenn die Filter für mehrere Ereignistrigger übereinstimmen, wird der erste übereinstimmende Ereignistrigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Fehlerbehebungsinformationen über Ihre Attributionsberichte zurückzugeben. Diese können beispielsweise verwendet werden, um zu prüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert und Lücken in den Messergebnissen zwischen Ihrer alten cookie-basierten Implementierung und Ihrer neuen Attribution Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht dem gleichen Zeitplan wie Ereignis-Ebenen- und Zusammenfassungsberichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines spezifischen Attributionsberichts. Erfolgs-Debug-Berichte werden erstellt und gesendet, sobald der entsprechende Trigger registriert wird.
- **Ausführliche Debug-Berichte** geben Ihnen mehr Einsicht in die Attributionsquellen- und Attributionstrigger-Ereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen es Ihnen sicherzustellen, dass Quellen erfolgreich registriert wurden, oder fehlende Berichte zu verfolgen und zu bestimmen, warum sie fehlen (z.B. aufgrund eines Fehlers bei der Registrierung des Quellen- oder Triggerereignisses oder eines Fehlers beim Senden oder Erstellen des Berichts). Ausführliche Debug-Berichte werden sofort bei der Registrierung der Quelle oder des Triggers gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss der Reporting-Ursprung ein Cookie setzen. Wenn der zum Empfangen der Berichte konfigurierte Ursprung ein Dritter ist, wird dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Third-party_cookies) sein, was bedeutet, dass Debug-Berichte in Browsern, in denen Drittanbieter-Cookies deaktiviert oder nicht verfügbar sind, nicht verfügbar sein werden.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie auf Ihrem Reporting-Ursprung. Dies muss sowohl bei der Quellen- als auch bei der Trigger-Registrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in allen {{httpheader("Attribution-Reporting-Register-Source")}}- und {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwort-Headern, die sich auf die Attributionsberichte beziehen, für die Sie Debugging-Informationen bereitstellen möchten. Jeder `debug_key`-Wert muss ein 64-Bit-Unsigned-Integer sein, das als Basis-10-String formatiert ist. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID - Sie könnten zum Beispiel jeden als Cookie-ID + Quellen-/Kleiner-Timestamp setzen (und diesen Timestamp in Ihrem älteren cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel der Quelle anders als die `source_event_id`, damit Sie einzelne Berichte unterscheiden können, die dieselbe Quellenereignis-ID haben.

3. Optional können Sie das `debug_reporting`-Feld auf `true` setzen, sowohl in den `Attribution-Reporting-Register-Source`- als auch in den `Attribution-Reporting-Register-Trigger`-Headern. Wenn Sie dies tun, wird ein ausführlicher Debug-Bericht erstellt. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht erstellt, der den Typ des Attributionsberichts widerspiegelt, den Sie erstellen (Ereignis-Ebene oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie erstellen möchten. Debug-Berichte werden an drei separate Endpunkte im Reporting-Ursprung gesendet:

   - Endpunkt für Ereignis-Ebenen-Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Erzeugte Erfolgs-Debug-Berichte sind mit Attributionsberichten identisch und enthalten die Debug-Schlüssel der Quellseite und der Triggerseite in den Feldern `"source_debug_key"` und `"trigger_debug_key"`.

Für weitere Informationen und Beispiele siehe:

- [Einführung in Debug-Berichte](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf developers.google.com (2023)
- [Debug-Berichte einrichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf developers.google.com (2023)
- [Debugging-Kochbuch](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf developers.google.com (2023)
