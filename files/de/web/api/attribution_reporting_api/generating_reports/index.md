---
title: Erstellung von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API)-Berichte generiert werden — sowohl Attributionsberichte als auch Debug-Berichte — und wie Sie die generierten Berichte steuern können. Dazu gehört die Behandlung von Rauschen, die Priorisierung von Berichten, das Filtern von Berichten und die Erstellung von Debug-Berichten.

## Grundlegender Prozess

Wenn ein Trigger und eine Quelle übereinstimmen, generiert der Browser einen Bericht und sendet ihn über eine nicht authentifizierte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage an einen spezifischen Endpunkt auf der Reporting-Herkunft:

- Für Event-Level-Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für zusammenfassende Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Die `<reporting-origin>` wird dasselbe Ursprung wie derjenige sein, der die Quelle und den Trigger registriert hat.

Die Berichtsdaten sind in einer JSON-Struktur enthalten.

## Event-Level-Berichte

Event-Level-Berichte werden generiert und geplant, um am Ende ihres **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die in den Feldern [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) im {{httpheader("Attribution-Reporting-Register-Source")}}-Header der Quelle festgelegten Werte bestimmt.

Wenn keiner dieser Felder spezifiziert ist, fällt das Berichtsfenster auf folgende Standardwerte zurück:

- Für [ereignisbasierten Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standard-Berichtsfenster bei Ablauf der Quelle, die im `Attribution-Reporting-Register-Source`-Feld [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry) festgelegt wird. Dies ist standardmäßig 30 Tage nach der Registrierung, wenn nicht explizit festgelegt.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) betragen die Standard-Berichtsfenster 2 Tage, 7 Tage und die `"expiry"` der Quelle.

Siehe [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

Sobald ein Event-Level-Bericht am entsprechenden Endpunkt eingegangen ist, obliegt es dem Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Event-Level-Bericht könnte so aussehen:

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
  - : Ein String oder ein Array aus 2–3 Strings, abhängig davon, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attributions-["destination"](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-Seiten, die in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header festgelegt wurden.
- `"source_event_id"`
  - : Ein String, der die Attributionsquellen-ID darstellt. Dies entspricht der [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id), die in der Quellenregistrierung (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header) festgelegt wurde.
- `"trigger_data"`
  - : Ein String, der Daten darstellt, die vom Attributionstrigger stammen, festgelegt in der Triggerregistrierung (der [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data), festgelegt über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwort-Header).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universell eindeutige Kennung (UUID)")}} für diesen Bericht darstellt, welche verwendet werden kann, um doppelte Zählungen zu vermeiden.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` entspricht und angibt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#rauschen_zu_berichten_hinzufügen) für diese spezifische Quellenkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche repräsentiert, bis der Browser den Bericht ursprünglich geplant hat, um gesendet zu werden (um Ungenauigkeiten aufgrund von Offline-Geräten zu vermeiden, die verspätet berichten).
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debugging-Schlüssel für die Attributionsquelle darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header im [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld festgelegt wurde. Siehe [Debug-Berichte](#debug-berichte) für mehr Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debugging-Schlüssel für den Attributionstrigger darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header im `"debug_key"`-Feld festgelegt wurde. Siehe [Debug-Berichte](#debug-berichte) für mehr Informationen.

## Zusammenfassende Berichte

Ein zusammenfassender Bericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen und dann [gebündelt](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching) werden, um sie für eine [Aggregationsservice](https://privacysandbox.google.com/private-advertising/aggregation-service) aufzubereiten. Nachdem dies geschehen ist, obliegt es dem Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig generiert und geplant, um nach der Interaktion mit einem Trigger gesendet zu werden, mit einer zufälligen Verzögerung, um die Zeitangaben zu verwischen und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Ereignisse der Attributionsquelle von der Registrierung bis zum Ablauf der Quelle erfasst - dies wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert definiert, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header festgelegt wurde und standardmäßig 30 Tage nach der Registrierung beträgt, wenn nicht explizit festgelegt. Beachten Sie, dass die Länge des Berichtsfensters weiter angepasst werden kann, indem ein `aggregatable_report_window`-Wert im `Attribution-Reporting-Register-Source`-Header festgelegt wird. Siehe [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows) für weitere Details.

> [!NOTE]
> Um die Privatsphäre der Nutzer weiter zu schützen, haben die mit jeder Attributionsquelle verbundenen zusammenfassenden Berichtswerte einen endlichen Gesamtwert — dies nennt man das **Beitragsbudget**. Dieser Wert kann bei verschiedenen Implementierungen der API unterschiedlich sein; in Chrome beträgt er 65.536. Alle Konversionen, die Berichte generieren, die diesen Grenzwert überschreiten, werden nicht aufgezeichnet. Achten Sie darauf, das Budget zu überwachen und es zwischen den verschiedenen Metriken zu teilen, die Sie messen möchten.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsservice verwenden wird, um einen zusammenfassenden Bericht zu erstellen. Diese Daten werden {{Glossary("Encryption", "verschlüsselt")}} unter Verwendung von [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind im serialisierten String enthalten:
    - `"api"`
      - : Ein enumerierter Wert, der die API repräsentiert, die die Berichtsgenerierung ausgelöst hat. Derzeit wird dies immer `"attribution-reporting"` sein, aber es kann mit zusätzlichen Werten erweitert werden, um in Zukunft andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions-[`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-URL darstellt, die in der Quellenregistrierung (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header) festgelegt wurde.
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Universell eindeutige Kennung (UUID)")}} für diesen Bericht darstellt, die verwendet werden kann, um doppelte Zählungen zu vermeiden.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtsgenerierung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche repräsentiert, bis der Browser den Bericht ursprünglich geplant hat, um gesendet zu werden (um Ungenauigkeiten aufgrund von Offline-Geräten zu vermeiden, die verspätet berichten).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche repräsentiert, bis die Attributionsquelle registriert wurde, abgerundet auf einen ganzen Tag.
    - `"version"`
      - : Ein String, der die Version der API darstellt, die verwendet wurde, um den Bericht zu erstellen.
- `"aggregation_service_payloads"`

  - : Ein Array von Objekten, die Payload-Objekte darstellen, die die Histogramm-Beiträge enthalten, die vom Aggregationsservice verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird pro Bericht nur ein einzelnes Payload unterstützt, das vom Browser konfiguriert wird. In Zukunft könnten mehrere, anpassbare Payloads unterstützt werden. Jedes Payload-Objekt kann die folgenden Eigenschaften enthalten:

    - `"payload"`

      - : Eine [CBOR](https://cbor.io/)-Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-codiert ist, mit der folgenden Struktur (nur zu Notationszwecken in JSON):

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

        Die `operation` ist immer `"histogram"`; sie erlaubt es dem Dienst, in Zukunft andere Operationen zu unterstützen.

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der zur Verschlüsselung des Payloads verwendet wurde.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsservice.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debugging-Schlüssel für die Attributionsquelle darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header im [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key)-Feld festgelegt wurde. Siehe [Debug-Berichte](#debug-berichte) für mehr Informationen.
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsigned Integer, der den Debugging-Schlüssel für den Attributionstrigger darstellt. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header im `"debug_key"`-Feld festgelegt wurde. Siehe [Debug-Berichte](#debug-berichte) für mehr Informationen.

## Rauschen zu Berichten hinzufügen

<!--
DIESE INFORMATION IST NICHT VOLLSTÄNDIG; WIR HABEN SIE VORLÄUFIG ZURÜCKGESTELLT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN, UND WIR WERDEN IN ZUKUNFT WEITERE ARBEITEN AN ARA-RAUSCHEN VORNEHMEN, FALLS/WENN DER BEDARF BESTEHT

Im Fall von Ereignis-Level-Berichten wird dies mit einem zufälligen Antwort-Algorithmus durchgeführt, der folgendermaßen funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Berichtssätze, die aus der Konfiguration der Quelle stammen könnten (einschließlich des Satzes, bestehend aus keinen Berichten).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser die Attributierung der Quelle und wählt stattdessen ein zufälliges Mitglied dieser Liste, um es als Berichte der Quelle zu verwenden. Die Wahrscheinlichkeit dafür basiert auf der Größe dieser Liste, den privatsphärebezogenen Implementierungsparametern des Browsers und dem von der Quelle gewählten [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon).

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

Es ist jedoch noch möglich, dass kein Match auftritt, basierend auf dem oben beschriebenen zufälligen Antwort-Algorithmus.
-->

Rauschen wird Berichten hinzugefügt, um die Ausgabe zu verschleiern, die mit einer bestimmten Quelle verbunden ist, und dadurch die Privatsphäre der Benutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und einzelnen Benutzern zugeordnet werden, aber die aus den Daten gewonnenen Gesamtmuster werden immer noch dieselbe Bedeutung haben.

Für Informationen darüber, wie Rauschen in der Attributionsberichterstattung funktioniert, siehe:

- [Verständnis von Rauschen in zusammenfassenden Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## Berichtsprioritäten und -beschränkungen

Standardmäßig haben alle Attributionsquellen dieselbe Priorität, und das Attributionsmodell ist "Letzter Kontakt", was bedeutet, dass eine Konversion der zuletzt übereinstimmenden Quellenereignis zugeschrieben wird. Für sowohl Ereignis-Level- als auch aggregierbare Berichte können Sie die Quellenpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header festlegen. Der Standardwert ist `0`; wenn Sie einen `"priority"`-Wert von `1` auf einer bestimmten Quelle festlegen, wird diese Quelle zuerst abgeglichen, vor allen Priorität-`0`-Quellen. Quellen mit `"priority": "2"` werden vor denen mit `"priority": "1"` abgeglichen und so weiter.

Die Prioritäten von Attributionstriggern funktionieren auf die gleiche Weise; Sie können auch Trigger-Prioritäten festlegen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzufügen, jedoch nur für Ereignis-Level-Berichte.

Verschiedene Quellentypen haben unterschiedliche Standardlimits:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Drei-Bericht-Limit. Zum Beispiel, wenn ein Benutzer auf eine Anzeige klickt und sich viermal umwandelt: Der Benutzer besucht die Homepage der Werbeseite, dann eine Produktseite, meldet sich für den Newsletter an, und tätigt schließlich einen Kauf. Der Kaufbericht würde verworfen, da er aus der vierten Konversion stammt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Ein-Bericht-Limit.

> [!NOTE]
> Das Berichtslimit kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows)-Feldern des zugehörigen `Attribution-Reporting-Register-Source`-Headers festgelegt wird.

Wenn eine Attribution für ein gegebenes Quellenereignis ausgelöst wird, und die maximal zulässige Anzahl von Attributionen (drei für Klicks, eines für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten der bereits geplanten Berichte für dieselbe Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht statt dessen zu planen. Wenn der neue Bericht derjenige mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, fällt der Browser auf sein Standardverhalten zurück: Jede Konversion, die nach der dritten Konversion für Klicks oder der ersten Konversion für Ansichten erfolgt, wird gelöscht.

## Filter

Sie können Regeln definieren, welche Konversionen Berichte generieren, indem Sie Filter verwenden. Beispielsweise könnten Sie wählen, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien auszuschließen.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellenregistrierung ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}}-Header hinzu, das die Filter-Schlüssel definiert, die Sie verwenden werden, um die Konversionen auf der Trigger-Seite zu filtern. Dies sind völlig benutzerdefinierte Felder. Zum Beispiel, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte zu spezifizieren:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Fügen Sie bei der Trigger-Registrierung ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzu. Das Folgende verursacht beispielsweise, dass Trigger-Interaktionen mit obiger Quellenanmeldung übereinstimmen, da sie beide das `"electronics.megastore"`-`"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter hingegen wird bei einem Vergleich ignoriert, da er nicht in der oben genannten Quellenregistrierung enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Wenn die `"filter_data"`- und `"filters"`-Felder übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), aber keiner der Werte des Unterfeldes übereinstimmt, wird der Trigger ignoriert, was in keiner Übereinstimmung resultiert.

### Filterung der Trigger-Daten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header kann erweitert werden, um selektive Filterung anzuwenden, um `trigger_data`, `priority` oder `deduplication_key` basierend auf dem in der {{httpheader("Attribution-Reporting-Register-Source")}}-Header definierten `filter_data` festzulegen.

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

> [!NOTE] > `"source_type"` ist ein automatisch ausgefülltes Feld, das auf den `"filter_data"` der Quelle verfügbar ist.

> [!NOTE] > `not_filters`, die mit Negation filtern, wird ebenfalls unterstützt.

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

Wenn die Filter für keinen der Ereignistrigger übereinstimmen, wird kein Ereignis-Level-Bericht erstellt. Wenn die Filter mit mehreren Ereignistriggern übereinstimmen, wird der erste übereinstimmende Ereignistrigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Problembehandlungsinformationen zu Ihren Attributionsberichten zu erhalten. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert, und um Lücken in den Messergebnissen zwischen Ihrer alten cookie-basierten Implementierung und Ihrer neuen Attribution Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht demselben Zeitplan wie Event-Level- und zusammenfassende Berichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines spezifischen Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Trigger registriert wird.
- **Verbose-Debug-Berichte** bieten Ihnen mehr Einblick in die Attributionsquellen- und Attributionstrigger-Ereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen Ihnen, sicherzustellen, dass Quellen erfolgreich registriert wurden, fehlende Berichte zu verfolgen und festzustellen, warum sie fehlen (zum Beispiel aufgrund von Fehlern bei der Quell- oder Triggerereignisregistrierung oder Fehlern beim Senden oder Generieren des Berichts). Verbose-Debug-Berichte werden sofort bei Quellen- oder Triggerregistrierung gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss die Reporting-Herkunft ein Cookie setzen. Wenn die Herkunft, die konfiguriert ist, um Berichte zu empfangen, eine Drittpartei ist, wird dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies) sein, was bedeutet, dass Debug-Berichte in Browsern, in denen Drittanbieter-Cookies deaktiviert/nicht verfügbar sind, nicht zur Verfügung stehen.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie auf Ihrer Reporting-Herkunft. Dies muss sowohl während der Quellen- als auch der Triggerregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in jedem {{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwort-Header, die mit Attributionsberichten verbunden sind, für die Sie Debugging-Informationen bereitstellen möchten. Jeder `debug_key`-Wert muss eine 64-Bit-unsigned Integer sein, formatiert als eine Basis-10-Zeichenfolge. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten beispielsweise jeden als Cookie-ID + Quelle/Trigger-Zeitstempel festlegen (und denselben Zeitstempel in Ihrem älteren cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den quellenseitigen Debug-Schlüssel anders als die `source_event_id`, damit Sie einzelne Berichte unterscheiden können, die dieselbe Quellentrennungs-ID haben.

3. Optional, setzen Sie das `debug_reporting`-Feld auf `true`, sowohl im `Attribution-Reporting-Register-Source` als auch im `Attribution-Reporting-Register-Trigger`-Header. Wenn Sie dies tun, wird ein detaillierter Debug-Bericht generiert. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht generiert, der die Art des Attributionsberichts widerspiegelt, den Sie generieren (event-level oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte zu erhalten, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte in der Reporting-Herkunft gesendet:
   - Endpunkt für erfolgsbasierte Debug-Berichte auf Event-Level: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare, erfolgsbasierte Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für Verbose-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Attributionsberichten und enthalten die quellenseitigen und die triggerseitigen Debug-Schlüssel, jeweils in den Feldern `"source_debug_key"` und `"trigger_debug_key"`.

Für weitere Informationen und Beispiele siehe:

- [Einführung in Debug-Berichte](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf privacysandbox.google.com (2023)
- [Einrichtung von Debug-Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf privacysandbox.google.com (2023)
- [Debugging-Kochbuch](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf privacysandbox.google.com (2023)
