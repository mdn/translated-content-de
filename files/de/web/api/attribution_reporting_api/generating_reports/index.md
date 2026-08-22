---
title: Erstellung von Attribution Reports
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) — sowohl Attributionsberichte als auch Debug-Berichte — erstellt werden und wie Sie die generierten Berichte steuern können. Dazu gehören das Hinzufügen von Rauschen, das Priorisieren von Berichten, das Filtern von Berichten und das Erzeugen von Debug-Berichten.

## Grundlegender Prozess

Wenn eine Übereinstimmung zwischen einem Auslöser und einer Quelle auftritt, erstellt der Browser einen Bericht und sendet ihn über eine unbestätigte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) Anfrage an einen spezifischen Endpunkt auf dem Reporting-Ursprung:

- Für Event-Level-Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für aggregierte Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird jeweils gleich Ursprungs sein mit dem Ursprungsort, der die Quelle und den Auslöser registriert hat.

Die Berichtsdatendaten sind in einer JSON-Struktur enthalten.

## Event-Level-Berichte

Event-Level-Berichte werden erstellt und geplant, um am Ende ihres enthaltenen **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die Werte bestimmt, die im Feld [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) festgelegt sind, das im `Attribution-Reporting-Register-Source` Header der Quelle gesetzt ist.

Wenn keines dieser Felder angegeben ist, fällt das Berichtsfenster auf die folgenden Standardwerte zurück:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das standardmäßige Berichtsfenster bei Ablauf der Quelle, der im `Attribution-Reporting-Register-Source` [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry) Feld gesetzt ist. Dies ist standardmäßig 30 Tage nach der Registrierung, falls nicht explizit festgelegt.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die standardmäßigen Berichtsfenster 2 Tage, 7 Tage und die `"expiry"` der Quelle.

Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein Event-Level-Bericht am entsprechenden Endpunkt eingegangen ist, liegt es vollständig beim Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Event-Level-Bericht könnte folgendermaßen aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, abhängig davon, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die im Source-Registration gesetzten Attributions-`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination) Seite(n).
- `"source_event_id"`
  - : Ein String, der die Attributionsquellen-ID darstellt. Dies entspricht dem [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id), das in der Source-Registration gesetzt ist über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader.
- `"trigger_data"`
  - : Ein String, der Daten repräsentiert, die vom Attribution-Auslöser stammen und in der Auslöserregistrierung gesetzt sind (das [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) ist über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwortheader gesetzt).
- `"report_id"`
  - : Ein String, der einen {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht darstellt, der zur Vermeidung doppelter Zählungen verwendet werden kann.
- `"source_type"`
  - : Ein String gleich `"navigation"` oder `"event"`, die angeben, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine zufällige Zahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese spezifische Konfigurationsquelle angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich geplant hatte, um die zeitlichen Abweichungen zu vermeiden, die infolge von Offline-Geräten entstehen, die verspätet melden.
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-Unsigned-Integer-Nummer, die der Debugging-Schlüssel für die Quelle darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header's [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) Feld gesetzt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-Unsigned-Integer-Nummer, die der Debugging-Schlüssel für den Attribution-Auslöser darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header's `"debug_key"` Feld gesetzt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Zusammenfassungsberichte

Ein Zusammenfassungsbericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen werden, und dann [gebündelt](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching), um sie zur Verarbeitung durch einen [Aggregationsdienst](https://privacysandbox.google.com/private-advertising/aggregation-service) vorzubereiten. Sobald dies geschehen ist, liegt es vollständig beim Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig erstellt und geplant, um nach einer Auslöser-Interaktion gesendet zu werden, mit einer zufälligen Verzögerung, um die Zeiten zu verschleiern und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Attributionsquellenereignisse von der Registrierung bis zum Ablauf der Quelle erfasst - dies wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert, der standardmäßig 30 Tage nach der Registrierung liegt, falls nicht explizit festgelegt. Beachten Sie, dass die Länge des Berichtsfensters weiter modifiziert werden kann durch das Setzen eines `aggregatable_report_window` Wertes im `Attribution-Reporting-Register-Source` Header. Weitere Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Nutzer weiter zu schützen, haben die Werte im Zusammenfassungsbericht, die mit jeder Attributionsquelle verbunden sind, einen endlichen Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann sich zwischen verschiedenen Implementierungen der API unterscheiden; in Chrome beträgt er 65.536. Alle Konversionen, die Berichte mit Werten über diesem Limit generieren würden, werden nicht erfasst. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken teilen, die Sie messen wollen.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst verwendet, um einen Zusammenfassungsbericht zusammenzustellen. Diese Daten werden mit [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption) {{Glossary("Encryption", "verschlüsselt")}}, um Manipulationen zu verhindern. Die folgenden Eigenschaften sind in dem serialisierten String dargestellt:
    - `"api"`
      - : Ein aufgezählter Wert, der die API repräsentiert, die die Berichtserstellung ausgelöst hat. Derzeit ist dies immer gleich `"attribution-reporting"`, kann aber in Zukunft mit zusätzlichen Werten erweitert werden, um andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die im Source-Registration gesetzten Attributions-`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination) URL repräsentiert (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader).
    - `"report_id"`
      - : Ein String, der einen {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht darstellt, der zur Vermeidung doppelter Zählungen verwendet werden kann.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtserstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich geplant hatte, um die zeitlichen Abweichungen zu vermeiden, die durch Offline-Geräte entstehen, die verspätet melden.
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis die Attributionsquelle registriert war, auf ganze Tage abgerundet.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die zum Generieren des Berichts verwendet wurde.
- `"aggregation_service_payloads"`
  - : Ein Array von Objekten, die Payload-Objekte repräsentieren, die die Histogrammbeiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zu sammeln. Derzeit wird nur eine einzige Nutzlast pro Bericht unterstützt, die vom Browser konfiguriert ist. In Zukunft könnten mehrere, anpassbare Nutzlasten unterstützt werden. Jedes Nutzlastobjekt kann die folgenden Eigenschaften enthalten:
    - `"payload"`
      - : Eine [CBOR](https://cbor.io/) Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-kodiert ist, mit der folgenden Struktur (unter Verwendung von JSON nur zur Notation):

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

        Die `operation` ist immer `"histogram"`; es ermöglicht den Dienst, in Zukunft andere Operationen zu unterstützen.

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der zur Verschlüsselung der Nutzlast verwendet wird.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-Unsigned-Integer-Nummer, die der Debugging-Schlüssel für die Quelle darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header's [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) Feld gesetzt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-Unsigned-Integer-Nummer, die der Debugging-Schlüssel für den Auslöser darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header's `"debug_key"` Feld gesetzt ist. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATIONEN SIND NICHT VOLLSTÄNDIG; WIR HABEN SIE VORERST ZURÜCKGESTELLT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN. WIR WERDEN WEITERE ARBEITEN ZU ARA-RAUSCHEN ZU EINEM ZUKÜNFTIGEN ZEITPUNKT ERARBEITEN, WENN DIE NACHFRAGE BESTEHT

Im Fall von Event-Level-Berichten geschieht dies durch einen randomisierten Antwortalgorithmus, der wie folgt funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Sets von Berichten, die aus der Konfiguration der Quelle stammen könnten (einschließlich des Sets, das aus keinen Berichten besteht).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser, dass der Quelle zugeschrieben wird, und wählt stattdessen ein zufälliges Mitglied dieser Liste aus, um es als Berichte der Quelle zu verwenden. Die Wahrscheinlichkeit, dass dies geschieht, basiert auf der Größe dieser Liste, den speziellem Privatsphäre-Parametern des Browsers und der gewählten `"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon) der Quelle.

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}} Header könnten so aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Die Quelle `"trigger_data"` kann maximal 32 Werte haben. Erhöhen der Anzahl der Werte und `"event_report_windows"` erhöht die Anzahl der Elemente im gesamten Berichtsset.

Ein passender {{httpheader("Attribution-Reporting-Register-Trigger")}} könnte Folgendes enthalten:

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

Rauschen wird Berichten hinzugefügt, um das mit einer bestimmten Quelle verbundene Ergebnis zu verschleiern und dadurch die Benutzerprivatsphäre zu schützen. Die genauen Quelldaten können nicht identifiziert und einzelnen Benutzern zugeordnet werden, aber die aus den Daten gewonnenen Gesamtmuster liefern dennoch die gleiche Bedeutung.

Weitere Informationen zur Funktionsweise von Rauschen im Attribution Reporting finden Sie unter:

- [Verständnis von Rauschen in Zusammenfassungsberichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## Berichtsprioritäten und -grenzen

Standardmäßig haben alle Attributionsquellen die gleiche Priorität, und das Attributionsmodell basiert auf dem letzten Kontakt, was bedeutet, dass eine Konversion der zuletzt passenden Quellereignis zugeordnet wird. Für sowohl Event-Level- als auch aggregierbare Berichte können Sie die Quellpriorität ändern, indem Sie einen neuen Wert für das `"priority"` Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festlegen. Der Standardwert ist `0`; wenn Sie einen `"priority"` Wert von `1` auf einer bestimmten Quelle festlegen, wird diese Quelle zuerst abgeglichen, vor allen Quellen der Priorität `0`. Quellen mit `"priority": "2"` werden vor Quellen der Priorität `"1"` abgeglichen und so weiter.

Attribution-Auslöserprioritäten funktionieren auf die gleiche Weise; Sie können auch Auslöserprioritäten festlegen, indem Sie ein `"priority"` Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzufügen, jedoch nur für Event-Level-Berichte.

Verschiedene Quelltypen haben verschiedene Standardlimits:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Drei-Berichte-Limit. Zum Beispiel: Angenommen, ein Benutzer klickt auf eine Anzeige und konvertiert viermal: Er besucht die Startseite der Werbeseite, besucht dann eine Produktseite, meldet sich für den Newsletter an und tätigt schließlich einen Kauf. Der Kaufbericht würde nicht berücksichtigt, da er aus der vierten Konversion stammt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Ein-Bericht-Limit.

> [!NOTE]
> Das Berichts-Limit kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) Feldern des zugehörigen `Attribution-Reporting-Register-Source` Headers festgelegt wird.

Wenn eine Attribution für ein gegebenes Quellereignis ausgelöst wird, überprüft der Browser Folgendes, falls die maximale Anzahl von Attributionen (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht wurde:

- Die Priorität des neuen Berichts mit den Prioritäten der bestehenden geplanten Berichte für diese Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht derjenige mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, verwendet der Browser sein Standardverhalten: Jede Konversion, die nach der dritten Konversion für Klicks oder nach der ersten Konversion für Ansichten erfolgt, wird verworfen.

## Filter

Sie können Regeln definieren, für welche Konversionen Berichte generiert werden sollen, indem Sie Filter verwenden. Zum Beispiel könnten Sie wählen, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellregistrierung ein `filter_data` Feld zum {{httpheader("Attribution-Reporting-Register-Source")}} Header hinzu, das die Filter-Keys definiert, die Sie verwenden werden, um die Konversionen auf der Auslöserseite herauszufiltern. Dies sind völlig benutzerdefinierte Felder. Zum Beispiel, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte zu spezifizieren:

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

2. Fügen Sie bei der Auslöserregistrierung ein `filters` Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzu. Das Folgende, zum Beispiel, führt dazu, dass Auslöser-Interaktionen mit der obigen Quellregistrierung übereinstimmen, da sie beide das `"electronics.megastore"` `"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter wird jedoch ignoriert, wenn versucht wird, eine Übereinstimmung herzustellen, da er nicht in der obigen Quellregistrierung enthalten ist.

   ```json
   {
     "filters": {
       "conversion_subdomain": ["electronics.megastore"],
       "directory": ["/store/electronics"]
     }
   }
   ```

Wenn die `"filter_data"` und `"filters"` Felder übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), jedoch keine der Werte des Unterfeldes übereinstimmen, wird der Auslöser ignoriert, was zu keiner Übereinstimmung führt.

### Filterung von Auslöserdaten

Das `event_trigger_data` Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}} Header kann erweitert werden, um selektive Filter durchzuführen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data` festzulegen, die im {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert sind.

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
> `"source_type"` ist ein automatisch befülltes Feld, das im `"filter_data"` der Quelle verfügbar ist.

> [!NOTE]
> `not_filters`, die mit Negation filtern, werden auch unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Wörterbuch übereinstimmen, damit der Auslöser berücksichtigt wird.

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

Wenn die Filter für keinen der Ereignis-Auslöser übereinstimmen, wird kein Event-Level-Bericht erstellt. Wenn die Filter für mehrere Ereignis-Auslöser übereinstimmen, wird der erste übereinstimmende Ereignis-Auslöser verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Fehlerbehebungsinformationen zu Ihren Attributionsberichten zurückzugeben. Diese können beispielsweise verwendet werden, um zu prüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert und um Lücken in Messergebnissen zwischen Ihrer alten cookie-basierten Implementierung und Ihrer neuen Attribution Reporting Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht dem gleichen Zeitplan wie Event-Level- und Zusammenfassungsberichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines spezifischen Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Auslöser registriert ist.
- **Umfassende Debug-Berichte** geben Ihnen mehr Einblick in die Attributionsquelle und die Attributionsauslöser-Ereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen es Ihnen, sicherzustellen, dass Quellen erfolgreich registriert wurden, oder fehlende Berichte zu verfolgen und zu bestimmen, warum sie fehlen (zum Beispiel aufgrund eines Fehlers in der Quellen- oder Auslöser-Ereignisregistrierung oder eines Fehlers beim Senden oder Generieren des Berichts). Umfassende Debug-Berichte werden sofort bei der Quellen- oder Auslöserregistrierung gesendet.

> [!NOTE]
> Um Debug-Berichte zu nutzen, muss der Reporting-Ursprung ein Cookie setzen. Wenn der konfigurierte Ursprung, um Berichte zu empfangen, ein Drittanbieter ist, wird dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies) sein, was bedeutet, dass Debug-Berichte in Browsern, in denen Drittanbieter-Cookies deaktiviert oder nicht verfügbar sind, nicht verfügbar sein werden.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug` Cookie auf Ihrem Reporting-Ursprung. Dieses muss während sowohl der Quellen- als auch der Auslöserregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key` Feld in allen {{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwort-Headern, die mit Attributionsberichten in Verbindung stehen, für die Sie Debug-Informationen anzeigen möchten. Jeder `debug_key` Wert muss eine 64-Bit ugsigned Integer sein, formatiert als Base-10-String. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten zum Beispiel jeden als Cookie-ID + Quelle/Auslöser-Zeitstempel setzen (und diesen Zeitstempel in Ihrem älteren Cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Quellseitigen Debug-Schlüssel unterschiedlich von der `source_event_id`, damit Sie einzelne Berichte unterscheiden können, die dieselbe Quellenereignis-ID haben.

3. Optional, setzen Sie das `debug_reporting` Feld auf `true`, in sowohl den `Attribution-Reporting-Register-Source` als auch `Attribution-Reporting-Register-Trigger` Headern. Wenn Sie dies tun, wird ein umfassender Debug-Bericht generiert. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht generiert, der die Art des Attributionsberichts widerspiegelt, den Sie generieren (Event-Level oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte, die Sie generieren möchten, zu empfangen. Debug-Berichte werden an drei separate Endpunkte im Reporting-Ursprung gesendet:
   - Endpunkt für Event-Level Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für umfassende Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Attributionsberichten und enthalten die quellen- und auslöserseitigen Debug-Schlüssel in den `"source_debug_key"` und `"trigger_debug_key"` Feldern.

Für weitere Informationen und Beispiele siehe:

- [Einführung in Debug-Berichte](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf privacysandbox.google.com (2023)
- [Debug-Berichte einrichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf privacysandbox.google.com (2023)
- [Debugging Kochbuch](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf privacysandbox.google.com (2023)
