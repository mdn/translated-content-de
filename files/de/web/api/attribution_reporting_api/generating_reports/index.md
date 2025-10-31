---
title: Erstellen von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden — sowohl Attributionsberichte als auch Debug-Berichte — und wie Sie die generierten Berichte steuern können. Dies umfasst die Handhabung von Rauschen, die Priorisierung von Berichten, das Filtern von Berichten und das Erstellen von Debug-Berichten.

## Grundlegender Prozess

Wenn ein Abgleich zwischen einer Auslösung und einer Quelle erfolgt, generiert der Browser einen Bericht und sendet ihn über eine unbeglaubigte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage an einen bestimmten Endpunkt beim Meldeursprung:

- Für Ereignisberichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für Zusammenfassungsberichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird gleichbedeutend mit dem sein, der die Quelle und Auslösung registriert hat.

Die Berichts-Daten sind in einer JSON-Struktur enthalten.

## Ereignisbezogene Berichte

Ereignisbezogene Berichte werden generiert und zur Übermittlung am Ende ihres enthaltenen **Berichtsfensters** geplant. Die Länge des Berichtsfensters wird durch die Werte bestimmt, die im Feld [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) im {{httpheader("Attribution-Reporting-Register-Source")}}-Header der Quelle festgelegt sind.

Falls keines dieser Felder spezifiziert ist, werden die folgenden Standardwerte angewendet:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standard-Berichtsfenster beim Ablauf der Quelle, welcher im `Attribution-Reporting-Register-Source`-Feld [`"expiry"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#expiry) festgelegt ist. Dies ist standardmäßig 30 Tage nach der Registrierung, falls nicht ausdrücklich festgelegt.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) betragen die standardmäßigen Berichtsfenster 2 Tage, 7 Tage und die `"expiry"` der Quelle.

Weitere Einzelheiten finden Sie unter [Individuelle Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein ereignisbezogener Bericht am entsprechenden Endpunkt eingegangen ist, liegt es vollständig am Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer ereignisbezogener Bericht könnte folgendermaßen aussehen:

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
  - : Ein String oder ein Array aus 2–3 Strings, je nachdem, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren das Attributions-[`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination) site(s), eingestellt in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header.
- `"source_event_id"`
  - : Ein String, der die Attributionsquellen-ID repräsentiert. Dies ist gleich dem in der Quellenregistrierung gesetzten [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id) (via den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header).
- `"trigger_data"`
  - : Ein String, der Daten vom Attributionstrigger repräsentiert, gesetzt in der Triggerregistrierung (das [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) gesetzt via den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}} Antwort-Header).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der verwendet werden kann, um doppelte Zählung zu verhindern.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` entspricht, was jeweils angibt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese bestimmte Quellkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden seit dem Unix-Epoch repräsentiert, bis der Browser den Bericht ursprünglich zur Übermittlung geplant hat (um Ungenauigkeiten infolge Offline-Geräten zu vermeiden, die verspätet berichten).
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-Ganzzahl ohne Vorzeichen, die den Debug-Schlüssel für die Attributionsquelle repräsentiert. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header-Feld [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-Ganzzahl ohne Vorzeichen, die den Debug-Schlüssel für den Attributionstrigger repräsentiert. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header-Feld `"debug_key"` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Zusammenfassende Berichte

Ein zusammenfassender Bericht wird aus mehreren am entsprechenden Endpunkt empfangenen aggregierbaren Berichten erstellt und dann [gebündelt](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching), um sie zur Verarbeitung durch einen [Aggregationsdienst](https://privacysandbox.google.com/private-advertising/aggregation-service) vorzubereiten. Sobald dies geschehen ist, liegt es vollständig am Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig generiert und zur Übermittlung nach einer Interaktion mit einem Trigger geplant, mit einer zufälligen Verzögerung, um die Zeitpläne zu verwischen und die Privatsphäre zu verbessern. Für eine gegebene registrierte Attributionsquelle werden die Attributionsquellenereignisse von der Registrierung bis zum Ablauf der Quelle aufgezeichnet - dies wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header definiert, der standardmäßig 30 Tage nach der Registrierung festgelegt ist, falls nicht ausdrücklich festgelegt. Beachten Sie, dass die Länge des Berichtsfensters weiter modifiziert werden kann, indem ein `aggregatable_report_window`-Wert im `Attribution-Reporting-Register-Source`-Header gesetzt wird. Weitere Einzelheiten finden Sie unter [Individuelle Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Benutzer weiter zu schützen, haben die zusammenfassenden Berichts-Werte, die mit jeder Attributionsquelle verknüpft sind, einen begrenzten Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann je nach verschiedenen Implementierungen der API abweichen; in Chrome beträgt er 65.536. Alle Konversionen, die Berichte erzeugen würden, die Werte über dieser Grenze hinzufügen, werden nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken teilen, die Sie messen möchten.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst nutzen wird, um einen zusammenfassenden Bericht zu erstellen. Diese Daten sind {{Glossary("Encryption", "verschlüsselt")}} mittels [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind im serialisierten String dargestellt:
    - `"api"`
      - : Ein aufgelisteter Wert, der die API repräsentiert, die die Berichterstellung ausgelöst hat. Derzeit wird dies immer `"attribution-reporting"` sein, aber es könnte mit zusätzlichen Werten erweitert werden, um in der Zukunft andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die Attributions-[`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-URL, die in der Quellenregistrierung festgelegt ist (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header), repräsentiert.
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Universally Unique Identifier (UUID)")}} für diesen Bericht repräsentiert, der verwendet werden kann, um doppelte Zählung zu verhindern.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichterstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden seit dem Unix-Epoch bis zur ursprünglichen Planung der Berichtsübermittlung durch den Browser repräsentiert (um Ungenauigkeiten infolge von Offline-Geräten zu vermeiden, die verspätet berichten).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden seit dem Unix-Epoch bis zur Registrierung der Attributionsquelle repräsentiert, abgerundet auf einen ganzen Tag.
    - `"version"`
      - : Ein String, der die Version der API repräsentiert, die zur Generierung des Berichts verwendet wurde.
- `"aggregation_service_payloads"`
  - : Ein Array von Objekten, die Payload-Objekte repräsentieren, die die Histogramm-Beiträge enthalten, die der Aggregationsservice verwendet, um die im Bericht enthaltenen Daten zusammenzustellen. Derzeit wird nur eine einzige Payload pro Bericht unterstützt, die vom Browser konfiguriert ist. In Zukunft könnten mehrere, anpassbare Payloads unterstützt werden. Jedes Payload-Objekt kann die folgenden Eigenschaften enthalten:
    - `"payload"`
      - : Eine [CBOR](https://cbor.io/)-Karte, die mittels [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-codiert wird, mit folgender Struktur (nur zur Veranschaulichung JSON verwendet):

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

        Die `operation` ist immer `"histogram"`; dies ermöglicht es dem Dienst, in der Zukunft andere Operationen zu unterstützen.

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der zur Verschlüsselung der Payload verwendet wurde.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-Ganzzahl ohne Vorzeichen, die den Debug-Schlüssel für die Attributionsquelle repräsentiert. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header-Feld [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Eine 64-Bit-Ganzzahl ohne Vorzeichen, die den Debug-Schlüssel für den Attributionstrigger repräsentiert. Dies spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header-Feld `"debug_key"` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATION IST NICHT VOLLSTÄNDIG; WIR HABEN SIE ZURÜCKGESTELLT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN UND WIR WERDEN IN ZUKUNFT WEITER AN DEM RAUSCHEN DER ATTRIBUTION REPORTING API ARBEITEN, FALLS/ANDERFALLS DIE NACHFRAGE BESTEHT

Im Falle ereignisbezogener Berichte wird dies mit einem zufälligen Antwortalgorithmus realisiert, welcher folgendermaßen funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglicher Berichtssets, die von der Konfiguration der Quelle ausgehen könnten (einschließlich des Sets, das aus keinen Berichten besteht).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser die Attributierung der Quelle und wählt stattdessen ein zufälliges Mitglied dieser Liste, das als Berichte der Quelle verwendet wird. Die Wahrscheinlichkeit, dass dies passiert, basiert auf der Größe dieser Liste, den browserspezifischen Datenschutzparametern und dem ausgewählten [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon) der Quelle.

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}}-Header könnten folgendermaßen aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Das Quell-`"trigger_data"` kann maximal 32 Werte haben. Die Erhöhung der Anzahl der Werte und `"event_report_windows"` erhöht die Anzahl der Elemente im gesamten Berichtset.

Eine passende {{httpheader("Attribution-Reporting-Register-Trigger")}} könnte folgendes beinhalten:

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

Es ist jedoch immer noch möglich, dass kein Abgleich stattfindet, basierend auf dem oben beschriebenen zufälligen Antwortalgorithmus.
-->

Berichten wird Rauschen hinzugefügt, um die Ausgabe, die mit einer bestimmten Quelle verbunden ist, zu verschleiern und damit die Privatsphäre der Benutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und individuellen Benutzern zugeordnet werden, jedoch werden die allgemeinen Muster, die aus den Daten abgeleitet werden, immer noch dieselbe Bedeutung haben.

Für Informationen darüber, wie Rauschen in der Attributionsberichterstattung funktioniert, siehe:

- [Verständnis des Rauschens in zusammenfassenden Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Datenbegrenzungen und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## Berichtprioritäten und -grenzen

Standardmäßig haben alle Attributionsquellen die gleiche Priorität und das Attributionsmodell ist last-touch, was bedeutet, dass eine Konversion der zuletzt passenden Quellenereignis zugeordnet wird. Für sowohl ereignisbezogene als auch aggregierbare Berichte können Sie die Quellpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header festlegen. Der Standardwert ist `0`; wenn Sie auf einer bestimmten Quelle einen `"priority"`-Wert von `1` setzen, wird diese Quelle als erste abgeglichen, vor allen `"priority"` `0`-Quellen. Quellen mit `"priority": "2"` werden vor `"priority": "1"`-Quellen abgeglichen und so weiter.

Prioritäten von Attributionstriggern funktionieren auf die gleiche Weise; Sie können auch Triggerprioritäten setzen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzufügen, jedoch nur für ereignisbezogene Berichte.

Verschiedene Quellentypen haben unterschiedliche Standardgrenzen:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Limit von drei Berichten. Zum Beispiel: Wenn ein Benutzer eine Anzeige anklickt und viermal konvertiert: sie besuchen die Homepage der Werbeseite, dann eine Produktseite, melden sich für den Newsletter an und tätigen schließlich einen Kauf. Der Kaufbericht würde fallen gelassen, da es sich um die vierte Konversion handelt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Limit von einem Bericht.

> [!NOTE]
> Das Berichtslimit kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den Feldern [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) des zugehörigen `Attribution-Reporting-Register-Source`-Headers festgelegt wird.

Wenn eine Attribution für ein gegebenes Quellenereignis ausgelöst wird, und die Höchstanzahl an Attributions (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten vorhandener geplanter Berichte für dieselbe Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um den neuen Bericht stattdessen zu planen. Wenn der neue Bericht derjenige mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, greift der Browser auf sein Standardverhalten zurück: Jede Konversion, die nach der dritten für Klicks oder der ersten für Ansichten erfolgt, wird fallen gelassen.

## Filter

Sie können Regeln definieren, welche Konversionen Berichte erzeugen, indem Sie Filter verwenden. Zum Beispiel könnten Sie wählen, nur Konversionen für eine bestimmte Produktkategorie zu zählen und Konversionen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellenregistrierung ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}}-Header hinzu, das die Filter-Schlüssel definiert, die Sie verwenden werden, um die Konversionen auf der Triggerseite zu filtern. Dies sind vollständig benutzerdefinierte Felder. Zum Beispiel, um nur Konversionen auf bestimmten Subdomains und für bestimmte Produkte zu spezifizieren:

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

2. Fügen Sie bei der Triggerregistrierung ein `filters`-Feld zum {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzu. Das Folgende führt zum Abgleich von Trigger-Interaktionen mit der oben genannten Quellenregistrierung, da beide das `"electronics.megastore"`-Feld `"conversion_subdomain"` enthalten. Der `"directory"`-Filter hingegen wird ignoriert, wenn ein Abgleich versucht wird, weil er nicht in der oben genannten Quellenregistrierung enthalten war.

   ```json
   {
     "filters": {
       "conversion_subdomain": ["electronics.megastore"],
       "directory": ["/store/electronics"]
     }
   }
   ```

Falls die Felder `"filter_data"` und `"filters"` übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), jedoch keiner der Werte des Unterfelds übereinstimmt, wird der Trigger ignoriert, was zu keinem Abgleich führt.

### Filtern von Trigger-Daten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header kann erweitert werden, um selektives Filtern durchzuführen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data`, das im {{httpheader("Attribution-Reporting-Register-Source")}}-Header definiert ist, festzulegen.

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
> `"source_type"` ist ein automatisch befülltes Feld, das auf der `"filter_data"` der Quelle verfügbar ist.

> [!NOTE]
> `not_filters`, welche Filter mit Negation darstellen, werden ebenfalls unterstützt.

In diesem Kontext kann `filters` ein Objekt oder ein Array von Objekten sein. Wenn eine Liste angegeben ist, muss nur ein Wörterbuch übereinstimmen, damit der Trigger in Betracht gezogen wird.

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

Wenn die Filter für keinen der Ereignistrigger übereinstimmen, wird kein ereignisbezogener Bericht erstellt. Wenn die Filter für mehrere Ereignistrigger übereinstimmen, wird der erste übereinstimmende Ereignistrigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Informationen zur Fehlerbehebung zu Ihren Attributionsberichten zu erhalten. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihr Setup ordnungsgemäß funktioniert und um Lücken in den Messergebnissen zwischen Ihrer alten, Cookie-basierten Implementierung und Ihrer neuen Attributionsberichterstattung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht derselben Zeitplanung wie ereignis- und zusammenfassende Berichte.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgreiche Debug-Berichte** verfolgen die erfolgreiche Erzeugung eines spezifischen Attributionsberichts. Erfolgreiche Debug-Berichte werden erstellt und gesendet, sobald der entsprechende Trigger registriert ist.
- **Ausführliche Debug-Berichte** bieten Ihnen mehr Einblick in die Attributionsquelle und die Attributionsauslösereignisse, die mit einem Attributionsbericht verbunden sind. Sie erlauben es Ihnen sicherzustellen, dass Quellen erfolgreich registriert wurden, fehlende Berichte nachzuverfolgen und zu bestimmen, warum sie fehlen (zum Beispiel aufgrund von Fehlern bei der Registrierung von Quellen- oder Triggerereignissen oder Fehlern beim Senden oder Erstellen des Berichts). Ausführliche Debug-Berichte werden sofort bei der Registrierung von Quellen oder Triggern gesendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss der Meldeursprung ein Cookie setzen. Wenn der konfigurierte Ursprung für den Empfang von Berichten ein Dritter ist, wird dieses Cookie ein [Drittanbieter-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies) sein, was bedeutet, dass Debug-Berichte in Browsern, in denen Drittanbieter-Cookies deaktiviert/nicht verfügbar sind, nicht verfügbar sein werden.

### Verwendung von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie auf Ihrem Meldeursprung. Dieses muss sowohl bei der Registrierung von Quellen als auch bei Triggern vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in allen {{httpheader("Attribution-Reporting-Register-Source")}}- und {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwort-Headern, die sich auf Attributionsberichte beziehen, für die Sie Debugging-Informationen sichtbar machen möchten. Jeder `debug_key`-Wert muss eine 64-Bit-Ganzzahl ohne Vorzeichen sein, die als Basis-10-String formatiert ist. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten zum Beispiel jeden als Cookie-ID + Quellen-/Trigger-Zeitstempel setzen (und denselben Zeitstempel in Ihrem älteren Cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel auf der Quellseite anders als die `source_event_id`, damit Sie einzelne Berichte unterscheiden können, die dieselbe Quellereignis-ID haben.

3. Optional: Setzen Sie das `debug_reporting`-Feld auf `true`, in sowohl den `Attribution-Reporting-Register-Source`- als auch den `Attribution-Reporting-Register-Trigger`-Headern. Wenn Sie dies tun, wird ein ausführlicher Debug-Bericht erstellt. Wenn Sie dies nicht tun, wird ein erfolgreicher Debug-Bericht erstellt, der den von Ihnen erstellten Attributionsbericht widerspiegelt (ereignisbezogen oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie die entsprechenden Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte im Meldeursprung gesendet:
   - Endpunkt für erfolgreiche ereignisbezogene Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für erfolgreiche aggregierbare Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Erzeugte erfolgreiche Debug-Berichte sind identisch zu Attributionsberichten und enthalten die Debug-Schlüssel der Quellseite und der Triggerseite in den Feldern `"source_debug_key"` und `"trigger_debug_key"`.

Weitere Informationen und Beispiele finden Sie unter:

- [Einführung in Debug-Berichte](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf privacysandbox.google.com (2023)
- [Einrichtung von Debug-Berichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf privacysandbox.google.com (2023)
- [Debugging-Kochbuch](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf privacysandbox.google.com (2023)
