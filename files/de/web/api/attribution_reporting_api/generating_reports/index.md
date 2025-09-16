---
title: Generierung von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)-Berichte generiert werden — sowohl Attributionsberichte als auch Debug-Berichte — und wie Sie die erzeugten Berichte steuern können. Dies umfasst die Handhabung von Rauschen, die Priorisierung von Berichten, die Filterung von Berichten und die Generierung von Debug-Berichten.

## Grundlegender Prozess

Wenn eine Übereinstimmung zwischen einem Auslöser und einer Quelle auftritt, generiert der Browser einen Bericht und sendet ihn über eine nicht authentifizierte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anforderung an einen bestimmten Endpunkt im Berichtursprung:

- Für Berichte auf Ereignisebene ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für zusammenfassende Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` ist bei der Registrierung der Quelle und des Auslösers gleichherkunftsmäßig.

Die Berichtsdaten sind in einer JSON-Struktur enthalten.

## Berichte auf Ereignisebene

Berichte auf Ereignisebene werden erstellt und zur Versendung am Ende ihres enthaltenen **Berichtszeitfensters** geplant. Die Länge des Berichtszeitfensters wird durch die im Feld [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) des Headers {{httpheader("Attribution-Reporting-Register-Source")}} der Quelle festgelegten Werte bestimmt.

Wenn keines dieser Felder angegeben ist, fällt das Berichtszeitfenster auf die folgenden Standardwerte zurück:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standardberichtszeitfenster mit dem Ablauf der Quelle, der im `Attribution-Reporting-Register-Source`-Feld für [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry) festgelegt ist. Dies ist standardmäßig 30 Tage nach der Registrierung, wenn nicht explizit festgelegt.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) beträgt das Standardberichtszeitfenster 2 Tage, 7 Tage und die `"expiry"` der Quelle.

Siehe [Benutzerdefinierte Berichtszeitfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

Sobald ein Bericht auf Ereignisebene am entsprechenden Endpunkt eingegangen ist, liegt es vollständig im Ermessen des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Bericht auf Ereignisebene könnte so aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, je nachdem, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attributionsseite(n) [`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination), die in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader festgelegt sind.
- `"source_event_id"`
  - : Ein String, der die Attributionsquellen-ID darstellt. Dies entspricht dem in der Quellenregistrierung festgelegten [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id) (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader).
- `"trigger_data"`
  - : Ein String, der Daten darstellt, die vom Attributionstrigger stammen und in der Triggersregistrierung festgelegt sind (das [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data), das über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwortheader festgelegt ist).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der verwendet werden kann, um doppelte Zählungen zu verhindern.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` entspricht und anzeigt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese bestimmte Quellenkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich geplant hat, um Ungenauigkeiten zu vermeiden, die durch verspätete Berichte von Offline-Geräten verursacht werden.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debug-Schlüssel für die Attributionsquelle darstellt. Dies spiegelt den im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegten Wert [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) wider. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debug-Schlüssel für den Attributionstrigger darstellt. Dies spiegelt den im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header festgelegten `"debug_key"` Wert wider. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Zusammenfassende Berichte

Ein zusammenfassender Bericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen und dann [batchweise](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching) vorbereitet werden, um von einem [Aggregationsdienst](https://privacysandbox.google.com/private-advertising/aggregation-service) verarbeitet zu werden. Sobald dies geschehen ist, liegt es vollständig im Ermessen des Entwicklers, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig nach einer Interaktion mit einem Auslöser erstellt und zur Versendung geplant, mit einer zufälligen Verzögerung, um die Zeitmessungen zu verschleiern und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Attributionsquellen-Ereignisse von der Registrierung bis zum Ablaufen der Quelle aufgezeichnet - dies wird als **Berichtszeitfenster** bezeichnet.

Die Ablaufzeit wird durch den im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegten `expiry`-Wert definiert, der standardmäßig 30 Tage nach der Registrierung beträgt, wenn nicht explizit festgelegt. Beachten Sie, dass die Länge des Berichtszeitfensters durch Festlegung eines `aggregatable_report_window`-Werts im `Attribution-Reporting-Register-Source` Header weiter modifiziert werden kann. Siehe [Benutzerdefinierte Berichtszeitfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

> [!NOTE]
> Um die Privatsphäre der Nutzer weiter zu schützen, haben die Werte des zusammenfassenden Berichts, die mit jeder Attributionsquelle verbunden sind, einen endlichen Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann je nach Implementierung der API unterschiedlich sein; in Chrome beträgt er 65.536. Jegliche Konversionen, die Berichte generieren würden, die über diesen Grenzwert hinaus Werte hinzufügen, werden nicht erfasst. Achten Sie darauf, das Budget im Blick zu behalten und es zwischen den verschiedenen Metriken, die Sie messen möchten, zu teilen.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst verwendet, um einen zusammenfassenden Bericht zu erstellen. Diese Daten sind {{Glossary("Encryption", "verschlüsselt")}} unter Verwendung von [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind im serialisierten String enthalten:
    - `"api"`
      - : Ein enumerierter Wert, der die API repräsentiert, die die Berichterstellung ausgelöst hat. Derzeit wird dies immer `"attribution-reporting"` sein, könnte jedoch in Zukunft um zusätzliche Werte erweitert werden, um andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions-URL [`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination) darstellt, die in der Quellenregistrierung (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader) festgelegt ist.
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der verwendet werden kann, um doppelte Zählungen zu verhindern.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtsgenerierung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich geplant hat, um Ungenauigkeiten zu vermeiden, die durch verspätete Berichte von Offline-Geräten verursacht werden.
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis die Attributionsquelle registriert wurde, abgerundet auf einen ganzen Tag.
    - `"version"`
      - : Ein String, der die Version der API repräsentiert, die zur Generierung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`
  - : Ein Array von Objekten, die Payload-Objekte repräsentieren, die die Histogrammbeiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird in jedem Bericht nur eine einzelne Nutzlast unterstützt, die vom Browser konfiguriert wird. In Zukunft könnten mehrere, anpassbare Nutzlasten unterstützt werden. Jedes Payload-Objekt kann die folgenden Eigenschaften enthalten:
    - `"payload"`
      - : Eine [CBOR](https://cbor.io/) Map, die mit [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-codiert wird, mit folgender Struktur (nur zur Veranschaulichung in JSON-Notation):

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

        Die `operation` ist immer `"histogram"`; es ermöglicht dem Dienst, in Zukunft andere Operationen zu unterstützen.

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der zur Verschlüsselung der Nutzlast verwendet wurde.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionales Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Implementierungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debug-Schlüssel für die Attributionsquelle darstellt. Dies spiegelt den im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festgelegten Wert [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) wider. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debug-Schlüssel für den Attributionstrigger darstellt. Dies spiegelt den im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header festgelegten `"debug_key"` Wert wider. Siehe [Debug-Berichte](#debug-berichte) für weitere Informationen.

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATIONEN SIND NOCH NICHT VOLLSTÄNDIG; WIR HABEN SIE VORLÄUFIG GESPEICHERT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN, UND WERDEN IN ZUKUNFT MEHR ZU ARA-RAUSCHEN ARBEITEN, WENN DER BEDARF DAFÜR BESTEHT

Im Fall von Berichten auf Ereignisebene wird dies mit einem randomisierten Antwortalgorithmus durchgeführt, der wie folgt funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Berichtssätze, die aus der Konfiguration der Quelle stammen können (einschließlich des Satzes, der aus keinen Berichten besteht).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser, dass die Quelle attribuiert wird, und wählt stattdessen ein zufälliges Mitglied dieser Liste aus, um als Berichte der Quelle zu dienen. Die Wahrscheinlichkeit, dass dies geschieht, basiert auf der Größe dieser Liste, den specifischen Datenschutzparametern des Browsers und dem von der Quelle gewählten [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon).

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}} Header könnten wie folgt aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Die Quelle `"trigger_data"` kann maximal 32 Werte haben. Die Erhöhung der Anzahl von Werten und `"event_report_windows"` erhöht die Anzahl der Elemente im gesamten Berichtssatz.

Ein übereinstimmendes {{httpheader("Attribution-Reporting-Register-Trigger")}} könnte Folgendes enthalten:

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

Rauschen wird Berichten hinzugefügt, um die Zuordnung der Ausgabe zu einer bestimmten Quelle zu verschleiern und somit die Privatsphäre der Nutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und einzelnen Nutzern zugeordnet werden, aber die übergeordneten Muster, die aus den Daten abgeleitet werden, haben immer noch dieselbe Bedeutung.

Für Informationen über die Funktionsweise von Rauschen im Attributionsbericht, sehen Sie:

- [Verständnis von Rauschen in zusammenfassenden Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Umgang mit Rauschen](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## Berichtprioritäten und -limits

Standardmäßig haben alle Attributionsquellen die gleiche Priorität, und das Attributionsmodell basiert auf dem letzten Kontakt, was bedeutet, dass eine Konversion der zuletzt passenden Quellenereignis zugeordnet wird. Für sowohl Berichte auf Ereignisebene als auch aggregierbare Berichte können Sie die Quellenpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festlegen. Der Standardwert ist `0`; wenn Sie einen `"priority"`-Wert von `1` auf eine bestimmte Quelle setzen, wird diese Quelle zuerst abgeglichen, vor jeglichen Priorität-`0`-Quellen. Quellen mit `"priority": "2"` werden vor `"priority": "1"`-Quellen abgeglichen, und so weiter.

Die Prioritäten von Attributionstriggern funktionieren auf die gleiche Weise; Sie können auch Triggerprioritäten festlegen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzufügen, allerdings nur für Berichte auf Ereignisebene.

Verschiedene Quellentypen haben unterschiedliche Standardlimits:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Dreiberichtelimit. Nehmen wir an, ein Nutzer klickt auf eine Anzeige und konvertiert vier Mal: Sie besuchen die Homepage der Werbeseite, besuchen dann eine Produktseite, melden sich für den Newsletter an und tätigen schließlich einen Kauf. Der Kaufbericht würde nicht berücksichtigt, da er auf die vierte Konversion zurückgeht.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Einberichtelimit.

> [!NOTE]
> Das Berichtelimit kann durch das Festlegen einer anderen Anzahl von `"end_times"` in den Feldern [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) des zugehörigen `Attribution-Reporting-Register-Source` Headers angepasst werden.

Wenn eine Attribution für ein gegebenes Quellenereignis ausgelöst wird, und die maximale Anzahl von Attributionen (drei für Klicks, eine für Bilder/Skripte) für diese Quelle bereits erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten der vorhandenen geplanten Berichte für dieselbe Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht derjenige mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, fällt der Browser auf sein Standardverhalten zurück: Jede Konversion, die nach der dritten für Klicks oder der ersten für Ansichten erfolgt, wird verworfen.

## Filter

Sie können Regeln festlegen, welche Konversionen Berichte generieren, indem Sie Filter verwenden. Zum Beispiel könnten Sie wählen, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien zu filtern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellenregistrierung ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}} Header hinzu, das die Filter-Schlüssel definiert, die Sie verwenden, um die Konversionen auf der Auslöserseite zu filtern. Dies sind vollständig benutzerdefinierte Felder. Zum Beispiel, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte anzugeben:

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

2. Fügen Sie bei der Triggerregistrierung ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzu. Das Folgende führt zum Beispiel dazu, dass Trigger-Interaktionen mit der obigen Quellenregistrierung übereinstimmen, da sie beide das `"electronics.megastore"` `"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter hingegen wird ignoriert, wenn versucht wird, eine Übereinstimmung herzustellen, da er nicht in der oben genannten Quellenregistrierung enthalten war.

   ```json
   {
     "filters": {
       "conversion_subdomain": ["electronics.megastore"],
       "directory": ["/store/electronics"]
     }
   }
   ```

Wenn die `"filter_data"`- und `"filters"`-Felder übereinstimmende Unterfelder (wie `"conversion_subdomain"` im obigen Beispiel) enthalten, aber keiner der Unterfeld-Werte übereinstimmt, wird der Trigger ignoriert, was zu keiner Übereinstimmung führt.

### Filterung von Triggerdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}} Header kann erweitert werden, um selektive Filterung durchzuführen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data`, das im {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert ist, festzulegen.

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
> `"source_type"` ist ein automatisch gefülltes Feld, das in den `"filter_data"` der Quelle verfügbar ist.

> [!NOTE]
> Auch `not_filters`, die mit Negation filtern, werden unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Wörterbuch übereinstimmen, damit der Trigger berücksichtigt wird.

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

Wenn die Filter für keine der Ereignisauslöser übereinstimmen, wird kein Bericht auf Ereignisebene erstellt. Wenn die Filter für mehrere Ereignisauslöser übereinstimmen, wird der erste übereinstimmende Ereignisauslöser verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Informationen zur Fehlerbehebung über Ihre Attributionsberichte zurückzugeben. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert und um Lücken in den Messergebnissen zwischen Ihrer alten Cookie-basierten Implementierung und Ihrer neuen Attribution Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht derselben Zeitplanung wie Berichte auf Ereignisebene und zusammenfassende Berichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines bestimmten Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Trigger registriert ist.
- **Ausführliche Debug-Berichte** geben Ihnen mehr Einblick in die Attributionsquelle und die Attributions-Ereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen Ihnen, sicherzustellen, dass Quellen erfolgreich registriert wurden, oder fehlende Berichte zu verfolgen und zu bestimmen, warum sie fehlen (zum Beispiel aufgrund eines Fehlers bei der Registrierung des Quell- oder Triggerereignisses oder eines Fehlers beim Senden oder Generieren des Berichts). Ausführliche Debug-Berichte werden sofort bei der Registrierung der Quelle oder des Triggers gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss der Berichtsursprung ein Cookie setzen. Wenn der Herkunftsort, der zum Empfangen von Berichten konfiguriert ist, ein Dritte Partei ist, wird dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies) sein, was bedeutet, dass Debug-Berichte in Browsern nicht verfügbar sind, in denen Drittanbieter-Cookies deaktiviert/nicht verfügbar sind.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Das `ar_debug`-Cookie auf Ihrem Berichtsursprung setzen. Dieses muss sowohl während der Quelle- als auch der Triggerregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Das `debug_key`-Feld in allen Antwortheadern {{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}} für Attributionsberichte festlegen, für die Sie Debugging-Informationen offenlegen möchten. Jeder `debug_key`-Wert muss ein 64-Bit-unsigned Integer im Basis-10-String-Format sein. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID - Sie könnten zum Beispiel jeden als Cookie-ID + Zeitstempel des Quelle-/Triggersatzes festlegen (und diesen gleichen Zeitstempel in Ihrem älteren Cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel auf der Quellseite unterschiedlich zu `source_event_id`, damit Sie einzelne Berichte unterscheiden können, die dieselbe Quellereignis-ID haben.

3. Optional das `debug_reporting`-Feld auf `true` in beiden `Attribution-Reporting-Register-Source`- und `Attribution-Reporting-Register-Trigger`-Headern setzen. Wenn Sie dies tun, wird ein ausführlicher Debug-Bericht generiert. Wenn Sie dies nicht tun, wird ein erfolgreicher Debug-Bericht erzeugt, der den Typ des Attributionsberichts widerspiegelt, den Sie generieren (auf Ereignisebene oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie entsprechende Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte im Berichtsursprung gesendet:
   - Endpunkt für Debug-Erfolgsberichte auf Ereignisebene: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Debug-Erfolgsberichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Attributionsberichten und enthalten die Quellen- und die Triggerseitigen Debug-Kennschlüssel in den Feldern `"source_debug_key"` bzw. `"trigger_debug_key"`.

Weitere Informationen und Beispiele finden Sie unter:

- [Einführung in Debug-Berichte](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf privacysandbox.google.com (2023)
- [Einrichten von Debug-Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf privacysandbox.google.com (2023)
- [Debugging-Kochbuch](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf privacysandbox.google.com (2023)
