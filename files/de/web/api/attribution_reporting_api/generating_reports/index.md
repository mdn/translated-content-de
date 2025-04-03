---
title: Generierung von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden — sowohl Attributionsberichte als auch Debug-Berichte — und wie Sie die generierten Berichte steuern können. Dies umfasst das Handhaben von Rauschen, das Priorisieren von Berichten, das Filtern von Berichten und das Erstellen von Debug-Berichten.

## Grundprozess

Wenn eine Übereinstimmung zwischen einem Auslöser und einer Quelle erfolgt, generiert der Browser einen Bericht und sendet ihn über eine unautorisierte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage an einen spezifischen Endpunkt am Ursprungsort des Berichts:

- Für eventbezogene Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für zusammenfassende Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird gleicher Herkunft sein wie derjenige, der die Quelle und den Auslöser registriert hat.

Die Berichtsdaten werden in einer JSON-Struktur enthalten.

## Eventbezogene Berichte

Eventbezogene Berichte werden generiert und geplant, um am Ende ihres jeweiligen **Berichtsfensters** gesendet zu werden. Die Länge des Berichtsfensters wird durch die in dem Feld [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) im Header der Quelle gesetzten Werte bestimmt.

Wenn keines dieser Felder spezifiziert ist, greift das Berichtsfenster auf die folgenden Standards zurück:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standardberichtsfenster beim Ablauf der Quelle, der im `Attribution-Reporting-Register-Source`-Feld [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry) festgelegt ist. Dies ist standardmäßig 30 Tage nach der Registrierung, wenn nicht ausdrücklich festgelegt.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die Standardberichtsfenster 2 Tage, 7 Tage und das `"expiry"` der Quelle.

Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein eventbezogener Bericht am entsprechenden Endpunkt eingeht, liegt es vollständig beim Entwickler, wie die Daten verarbeitet, gespeichert und dargestellt werden. Ein typischer eventbezogener Bericht könnte so aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, je nachdem, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren das Attributions [`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination) Ziel(seite/n), das in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader festgelegt wurde.
- `"source_event_id"`
  - : Ein String, der die Attributionsquelle-ID repräsentiert. Dies entspricht der [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id), die in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader festgelegt wurde.
- `"trigger_data"`
  - : Ein String, der Daten repräsentiert, die aus dem Attributionsauslöser stammen, festgelegt in der Auslöserregistrierung (das [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwortheader festgelegt).
- `"report_id"`
  - : Ein String, der einen {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der verwendet werden kann, um doppelte Zählungen zu verhindern.
- `"source_type"`
  - : Ein String gleich `"navigation"` oder `"event"`, was jeweils angibt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese spezifische Quellenkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden ab dem Unix-Epoch darstellt, bis der Browser den Bericht ursprünglich zum Senden geplant hatte (um Ungenauigkeiten durch verspätete Meldungen von Offline-Geräten zu vermeiden).
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsignierter Integer, der den Debug-Schlüssel für die Attributionsquelle repräsentiert. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Headerfeld [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsignierter Integer, der den Debug-Schlüssel für den Attributionsauslöser repräsentiert. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Headerfeld `"debug_key"` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Zusammenfassende Berichte

Ein zusammenfassender Bericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt eingegangen sind und dann [gebündelt](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/summary-reports-intro#batching), um sie anschließend von einem [Aggregationsdienst](https://developers.google.com/privacy-sandbox/private-advertising/aggregation-service) verarbeitet zu werden. Wie die Daten verarbeitet, gespeichert und dargestellt werden, liegt dann vollständig beim Entwickler.

Ein aggregierbarer Bericht wird standardmäßig generiert und geplant, gesendet zu werden, nachdem mit einem Auslöser interagiert wurde, wobei eine zufällige Verzögerung angewendet wird, um die Zeitangaben zu verwischen und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden Ereignisse der Attributionsquelle ab der Registrierung aufgezeichnet, bis die Quelle abläuft - dies wird als **Berichtsfenster** bezeichnet.

Die Ablauffrist wird durch den `expiry`-Wert im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert, der standardmäßig 30 Tage nach der Registrierung beträgt, wenn nicht ausdrücklich festgelegt. Beachten Sie, dass die Länge des Berichtsfensters weiter geändert werden kann, indem ein `aggregatable_report_window`-Wert im `Attribution-Reporting-Register-Source` Header festgelegt wird. Details finden Sie unter [Benutzerdefinierte Berichtsfenster](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Nutzer weiter zu schützen, haben die Werte des zusammenfassenden Berichts, die mit jeder Attributionsquelle verbunden sind, einen begrenzten Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann in verschiedenen Implementierungen der API variieren; in Chrome beträgt er 65.536. Alle Konversionen, die Berichte erzeugen und Werte über diesem Limit hinaus hinzufügen würden, werden nicht erfasst. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken, die Sie messen möchten, teilen.

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
  - : Dies ist ein serialisierter JSON-Objekt, der Informationen bereitstellt, die ein Aggregationsdienst verwenden wird, um einen zusammenfassenden Bericht zu erstellen. Diese Daten werden {{Glossary("Encryption", "verschlüsselt")}} mit [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind in dem serialisierten String dargestellt:
    - `"api"`
      - : Ein aufgezählter Wert, der die API repräsentiert, die die Berichtserstellung ausgelöst hat. Derzeit wird dies immer `"attribution-reporting"` sein, aber es könnte in der Zukunft mit zusätzlichen Werten erweitert werden, um andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions-URL des [`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination) repräsentiert, die in der Quellenregistrierung festgelegt wurde (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader).
    - `"report_id"`
      - : Ein String, der einen {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der zur Vermeidung doppelter Zählungen verwendet werden kann.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtserstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden ab dem Unix-Epoch darstellt, bis der Browser den Bericht ursprünglich zum Senden geplant hatte (um Ungenauigkeiten durch verspätete Meldungen von Offline-Geräten zu vermeiden).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden seit dem Unix-Epoch darstellt, bis die Attributionsquelle registriert wurde, auf ganze Tage abgerundet.
    - `"version"`
      - : Ein String, der die Version der API repräsentiert, die zur Erstellung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`

  - : Ein Array von Objekten, das Payload-Objekte repräsentiert, die die Histogramm-Beiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird nur ein einzelner Payload pro Bericht unterstützt, der vom Browser konfiguriert wird. In Zukunft könnten mehrere, anpassbare Payloads unterstützt werden. Jedes Payload-Objekt kann die folgenden Eigenschaften enthalten:

    - `"payload"`

      - : Eine [CBOR](https://cbor.io/)-Karte, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-kodiert ist, mit der folgenden Struktur (nur zur Notation JSON verwendet):

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

        Die `operation` ist immer `"histogram"`; sie ermöglicht es dem Dienst, andere Operationen in der Zukunft zu unterstützen.

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der zur Verschlüsselung des Payloads verwendet wurde.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debug-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsignierter Integer, der den Debug-Schlüssel für die Attributionsquelle repräsentiert. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Headerfeld [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-unsignierter Integer, der den Debug-Schlüssel für den Attributionsauslöser repräsentiert. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Headerfeld `"debug_key"` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATIONEN SIND NICHT VOLLSTÄNDIG; WIR HABEN SIE ZURÜCKGESTELLT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN, UND WIR WERDEN ZU EINEM SPÄTEREN ZEITPUNKT MEHR ARBEIT ZUM THEMA ARA-RAUSCHEN LEISTEN, WENN DER BEDARF BESTEHT.

Im Fall von eventbezogenen Berichten wird dies mithilfe eines zufälligen Antwortalgorithmus erreicht, der folgendermaßen funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Berichtssätze, die aus der Konfiguration der Quelle stammen könnten (einschließlich des Satzes, der aus keinen Berichten besteht).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser, dass die Quelle attribuiert wird, und wählt stattdessen ein zufälliges Mitglied dieser Liste aus, um es als Quellenberichte zu verwenden. Die Wahrscheinlichkeit, dass dies passiert, basiert auf der Größe dieser Liste, den spezifischen Datenschutzparametern der Browser-Implementierung und dem ausgewählten [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon) der Quelle.

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}} Header können wie folgt aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Die Quell-`"trigger_data"` kann maximal 32 Werte haben. Die Erhöhung der Anzahl der Werte und `"event_report_windows"` erhöht die Anzahl der Elemente im gesamten Berichtssatz.

Eine übereinstimmende {{httpheader("Attribution-Reporting-Register-Trigger")}} könnte Folgendes enthalten:

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

Es ist jedoch immer noch möglich, dass keine Übereinstimmung auftritt, basierend auf dem oben beschriebenen zufälligen Antwortalgorithmus.
-->

Rauschen wird zu Berichten hinzugefügt, um die Ausgabe, die einer bestimmten Quelle zugeordnet ist, zu verschleiern und dadurch die Privatsphäre der Nutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und einzelnen Nutzern zugeordnet werden, aber die übergreifenden Muster aus den Daten haben dennoch die gleiche Bedeutung.

Weitere Informationen darüber, wie Rauschen im Attributionsbericht funktioniert, finden Sie unter:

- [Verständnis von Rauschen in zusammenfassenden Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/working-with-noise)

## Prioritäten und Limits für Berichte

Standardmäßig haben alle Attributionsquellen die gleiche Priorität, und das Attributionsmodell ist das Last-Touch-Modell, was bedeutet, dass eine Konversion der zuletzt zutreffenden Quellereignis-Übereinstimmung zugeschrieben wird. Für sowohl eventbezogene als auch aggregierbare Berichte können Sie die Priorität der Quelle ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Header festlegen. Der Standardwert ist `0`; wenn Sie bei einer bestimmten Quelle einen `"priority"`-Wert von `1` festlegen, wird diese Quelle zuerst verglichen, vor jeglichen Quellen mit Priorität `0`. Quellen mit `"priority": "2"` werden vor Quellen mit `"priority": "1"` verglichen und so weiter.

Die Prioritäten von Attributionsauslösern funktionieren auf die gleiche Weise; Sie können auch Auslöserprioritäten festlegen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Header hinzufügen, jedoch nur für ereignisbezogene Berichte.

Verschiedene Quelltypen haben unterschiedliche Standardlimits:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Limit von drei Berichten. Angenommen, ein Nutzer klickt auf eine Anzeige und konvertiert viermal: Er besucht die Homepage der Werbeseite, dann eine Produktseite, meldet sich für den Newsletter an und tätigt schließlich einen Kauf. Der Kaufbericht würde verworfen, da er aus der vierten Konversion stammt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Limit von einem Bericht.

> [!NOTE]
> Das Berichtslimit kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den Feldern [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) des zugehörigen `Attribution-Reporting-Register-Source` Headers eingestellt wird.

Wenn eine Attribution für ein bestimmtes Quellereignis ausgelöst wird und die maximale Anzahl von Attributionsereignissen (drei für Klicks, eines für Bilder/Skripte) für diese Quelle erreicht ist, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten bestehender geplanter Berichte für dieselbe Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht der mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Priorität festgelegt ist, fällt der Browser auf sein Standardverhalten zurück: Jede Konversion, die nach der dritten Konversion für Klicks oder der ersten Konversion für Ansichten auftritt, wird verworfen.

## Filter

Sie können Regeln definieren, welche Konversionen Berichte generieren, indem Sie Filter verwenden. Beispielsweise könnten Sie wählen, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellenregistrierung dem {{httpheader("Attribution-Reporting-Register-Source")}} Header ein `filter_data`-Feld hinzu, das die Filter-Schlüssel definiert, die Sie verwenden werden, um die Konversionen auf der Auslöserseite zu filtern. Diese sind vollständig benutzerdefinierte Felder. Beispielsweise, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte zu spezifizieren:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Fügen Sie bei der Auslöserregistrierung dem {{httpheader("Attribution-Reporting-Register-Trigger")}} Header ein `filters`-Feld hinzu. Folgendes Beispiel bewirkt, dass Auslöserinteraktionen zur oben genannten Quellenregistrierung passen, da beide das `"electronics.megastore"` `"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter wird hingegen ignoriert, wenn ein Vergleich versucht wird, da er nicht in der oben genannten Quellenregistrierung enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Wenn die `"filter_data"`- und `"filters"`-Felder übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), aber keiner der Unterfeldwerte übereinstimmt, wird der Auslöser ignoriert, was zu keiner Übereinstimmung führt.

### Filtern von Auslöserdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}} Header kann erweitert werden, um selektives Filtern durchzuführen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data` zu setzen, das im {{httpheader("Attribution-Reporting-Register-Source")}} Header definiert ist.

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

> **Hinweis:** `"source_type"` ist ein automatisch gefülltes Feld, das bei den `"filter_data"` der Quelle verfügbar ist.

> **Hinweis:** `not_filters`, die mit Negation filtern, werden ebenfalls unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Wörterbuch übereinstimmen, damit der Auslöser in Betracht gezogen wird.

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

Wenn die Filter für keines der Ereignisauslöser übereinstimmen, wird kein ereignisbezogener Bericht erstellt. Wenn die Filter für mehrere Ereignisauslöser übereinstimmen, wird der erste übereinstimmende Ereignisauslöser verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Informationen zur Fehlerbehebung zu Ihren Attributionsberichten zurückzugeben. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert, und Lücken in den Messergebnissen zwischen Ihrer alten, cookie-basierten Implementierung und Ihrer neuen Attribution Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht derselben Planung wie ereignisbezogene und zusammenfassende Berichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen die erfolgreiche Erstellung eines bestimmten Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Auslöser registriert wird.
- **Ausführliche Debug-Berichte** geben Ihnen mehr Einblick in die Attributionsquelle und die Attributionsauslöserereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen Ihnen sicherzustellen, dass Quellen erfolgreich registriert wurden oder fehlende Berichte zu verfolgen und festzustellen, warum sie fehlen (zum Beispiel aufgrund eines Fehlers bei der Registrierung der Quelle oder des Auslösers oder eines Fehlers beim Senden oder Generieren des Berichts). Ausführliche Debug-Berichte werden sofort bei der Registrierung der Quelle oder des Auslösers gesendet.

> [!NOTE]
> Um Debug-Berichte verwenden zu können, muss der Berichtsursprung ein Cookie setzen. Wenn der zur Entgegennahme von Berichten konfigurierte Ursprung ein Dritter ist, handelt es sich bei diesem Cookie um ein [Third-Party-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies), was bedeutet, dass Debug-Berichte in Browsern, in denen Third-Party-Cookies deaktiviert/nicht verfügbar sind, nicht verfügbar sind.

### Debug-Berichte verwenden

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie für Ihren Berichtsursprung. Dies muss während der Registrierung sowohl der Quelle als auch des Auslösers vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in allen {{httpheader("Attribution-Reporting-Register-Source")}} und {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwortheadern, die sich auf Attributionsberichte beziehen, für die Sie Debugging-Informationen bereitstellen möchten. Jeder `debug_key`-Wert muss ein 64-Bit-unsignierter Integer sein, der als dezimaler String formatiert ist. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten beispielsweise jeden als Cookie-ID + Quellenauslöserzeitstempel festlegen (und diesen Zeitstempel in Ihrem älteren, cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel auf der Quellseite anders als die `source_event_id`, damit Sie einzelne Berichte unterscheiden können, die dieselbe Quellenereignis-ID haben.

3. Optional setzen Sie das `debug_reporting`-Feld auf `true` in sowohl dem `Attribution-Reporting-Register-Source` als auch dem `Attribution-Reporting-Register-Trigger` Header. Wenn Sie dies tun, wird ein ausführlicher Debug-Bericht generiert. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht generiert, der den von Ihnen generierten Attributionstyp widerspiegelt (ereignisbezogen oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte im Berichtsursprung gesendet:

   - Endpunkt für erfolgsbezogene Debug-Berichte auf Ereignisebene: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Attributionsberichten und enthalten die Debug-Schlüssel der Quellseite und der Auslöserseite in den Feldern `"source_debug_key"` und `"trigger_debug_key"`.

Für weitere Informationen und Beispiele siehe:

- [Einführung in Debug-Berichte](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf developers.google.com (2023)
- [Einrichtung von Debug-Berichten](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf developers.google.com (2023)
- [Debugging-Kochbuch](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf developers.google.com (2023)
