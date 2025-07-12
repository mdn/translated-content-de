---
title: Generieren von Attributionsberichten
slug: Web/API/Attribution_Reporting_API/Generating_reports
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{DefaultAPISidebar("Attribution Reporting API")}}

Dieser Artikel erklärt, wie Berichte der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) generiert werden — sowohl Attributionsberichte als auch Debug-Berichte — und wie Sie die generierten Berichte kontrollieren können. Dazu gehört das Handhaben von Rauschen, Priorisieren von Berichten, Filtern von Berichten und Generieren von Debug-Berichten.

## Grundlegender Prozess

Wenn ein Abgleich zwischen einem Trigger und einer Quelle auftritt, generiert der Browser einen Bericht und sendet ihn über eine nicht authentifizierte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Anfrage an einen spezifischen Endpunkt im Reporting-Ursprung:

- Für Ereignis-Ebenen-Berichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-event-attribution`.
- Für Zusammenfassungsberichte ist dies `<reporting-origin>/.well-known/attribution-reporting/report-aggregate-attribution`.

Der `<reporting-origin>` wird gleichursprünglich mit demjenigen sein, der die Quelle und den Trigger registriert hat.

Die Berichtsdaten sind in einer JSON-Struktur enthalten.

## Berichte auf Ereignis-Ebene

Berichte auf Ereignis-Ebene werden generiert und so geplant, dass sie am Ende ihres enthaltenen **Berichtsfensters** gesendet werden. Die Länge des Berichtsfensters wird durch die in den Feldern [`"event_report_window"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_window) oder [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) im `Attribution-Reporting-Register-Source`-Header der Quelle festgelegten Werte bestimmt.

Wenn keiner dieser Felder angegeben ist, fällt das Berichtsfenster auf folgende Standardwerte zurück:

- Für [ereignisbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) endet das Standardberichtsfenster zum Ablauf der Quelle, die im Feld `"expiry"` des `Attribution-Reporting-Register-Source`-Headers festgelegt ist. Dies läuft standardmäßig 30 Tage nach der Registrierung ab, wenn es nicht explizit festgelegt ist.
- Für [navigationsbasierte Quellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) sind die Standardberichtsfenster 2 Tage, 7 Tage und die `"expiry"` der Quelle.

Weitere Einzelheiten finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

Sobald ein Berichts auf Ereignis-Ebene am entsprechenden Endpunkt eingegangen ist, liegt es vollständig am Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden. Ein typischer Bericht auf Ereignis-Ebene könnte so aussehen:

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
  - : Ein String oder ein Array von 2–3 Strings, abhängig davon, ob die Quelle mit mehreren Zielen registriert wurde oder nicht. Diese Strings repräsentieren die Attribution [`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination)-Seite(n), die in der Quellenregistrierung über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header festgelegt sind.
- `"source_event_id"`
  - : Ein String, der die ID der Attributionsquelle repräsentiert. Dies entspricht der [`"source_event_id"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#source_event_id), die in der Quellenregistrierung festgelegt ist (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header).
- `"trigger_data"`
  - : Ein String, der Daten repräsentiert, die vom Attribution-Trigger stammen, festgelegt in der Trigger-Registrierung (die [`"trigger_data"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Trigger#trigger_data) festgelegt über den zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwort-Header).
- `"report_id"`
  - : Ein String, der eine {{Glossary("UUID", "Universell Eindeutige Kennung (UUID)")}} für diesen Bericht darstellt, die zum Verhindern doppelter Zählungen verwendet werden kann.
- `"source_type"`
  - : Ein String, der entweder `"navigation"` oder `"event"` gleich ist, was jeweils anzeigt, ob die zugehörige Attributionsquelle [navigationsbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) oder [ereignisbasiert](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) ist.
- `"randomized_trigger_rate"`
  - : Eine Zufallszahl zwischen 0 und 1, die angibt, wie oft [Rauschen](#hinzufügen_von_rauschen_zu_berichten) für diese bestimmte Quellenkonfiguration angewendet wird.
- `"scheduled_report_time"`
  - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich zum Senden geplant hat (um Ungenauigkeiten durch offline Berichterstattung von Geräten zu vermeiden).
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-Unsigned Integer, der den Debugging-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header im Feld [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-Unsigned Integer, der den Debugging-Schlüssel für den Attribution-Trigger darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header im Feld `"debug_key"` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Zusammenfassungsberichte

Ein Zusammenfassungsbericht wird aus mehreren aggregierbaren Berichten erstellt, die am entsprechenden Endpunkt empfangen und dann [gepackt](https://privacysandbox.google.com/private-advertising/attribution-reporting/summary-reports-intro#batching) werden, um sie zur Weiterverarbeitung durch einen [Aggregationsdienst](https://privacysandbox.google.com/private-advertising/aggregation-service) vorzubereiten. Wenn dies erfolgt ist, liegt es vollständig am Entwickler, wie die Daten verarbeitet, gespeichert und angezeigt werden.

Ein aggregierbarer Bericht wird standardmäßig generiert und geplant, um nach einer Interaktion mit einem Trigger gesendet zu werden, mit einer zufälligen Verzögerung, um die Zeitpläne zu verschleiern und die Privatsphäre zu verbessern. Für eine bestimmte registrierte Attributionsquelle werden Ereignisse der Attributionsquelle von der Registrierung bis zum Ablauf der Quelle aufgezeichnet - dies wird als **Berichtsfenster** bezeichnet.

Die Ablaufzeit wird durch den `expiry`-Wert festgelegt, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header gesetzt ist, der standardmäßig 30 Tage nach der Registrierung ist, wenn er nicht explizit festgelegt wird. Beachten Sie, dass die Länge des Berichtsfensters durch das Setzen eines `aggregatable_report_window`-Wertes im `Attribution-Reporting-Register-Source`-Header weiter modifiziert werden kann. Weitere Einzelheiten finden Sie unter [Benutzerdefinierte Berichtsfenster](https://privacysandbox.google.com/private-advertising/attribution-reporting/custom-report-windows).

> [!NOTE]
> Um die Privatsphäre der Nutzer weiter zu schützen, haben die Zusammenfassungsberichte, die mit jeder Attributionsquelle verbunden sind, einen begrenzten Gesamtwert — dies wird als **Beitragsbudget** bezeichnet. Dieser Wert kann je nach Implementierung der API unterschiedlich sein; in Chrome beträgt er 65.536. Alle Umwandlungen, die Berichte mit Werten über diesem Limit erzeugen würden, werden nicht aufgezeichnet. Stellen Sie sicher, dass Sie das Budget im Auge behalten und es zwischen den verschiedenen Metriken, die Sie messen möchten, teilen.

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
  - : Dies ist ein serialisiertes JSON-Objekt, das Informationen bereitstellt, die ein Aggregationsdienst verwenden wird, um einen Zusammenfassungsbericht zu erstellen. Diese Daten sind {{Glossary("Encryption", "verschlüsselt")}} mit [AEAD](https://en.wikipedia.org/wiki/Authenticated_encryption), um Manipulationen zu verhindern. Die folgenden Eigenschaften sind im serialisierten String dargestellt:
    - `"api"`
      - : Ein enumerierter Wert, der die API repräsentiert, die die Berichtserstellung ausgelöst hat. Derzeit wird dies immer `"attribution-reporting"` sein, aber es könnte in Zukunft um zusätzliche Werte erweitert werden, um andere APIs zu unterstützen.
    - `"attribution_destination"`
      - : Ein String, der die URL des Attribution [`"destination"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#destination) repräsentiert, die in der Quellenregistrierung festgelegt ist (über den zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header).
    - `"report_id"`
      - : Ein String, der eine {{Glossary("UUID", "Universell Eindeutige Kennung (UUID)")}} für diesen Bericht darstellt, die verwendet werden kann, um doppelte Zählungen zu verhindern.
    - `"reporting_origin"`
      - : Der Ursprung, der die Berichtserstellung ausgelöst hat.
    - `"scheduled_report_time"`
      - : Ein String, der die Anzahl der Sekunden seit der Unix-Epoche darstellt, bis der Browser den Bericht ursprünglich zum Senden geplant hat (um Ungenauigkeiten durch offline Berichterstattung von Geräten zu vermeiden).
    - `"source_registration_time"`
      - : Ein String, der die Anzahl der Sekunden von der Unix-Epoche bis zur Registrierung der Attributionsquelle darstellt, auf einen ganzen Tag gerundet.
    - `"version"`
      - : Ein String, der die Version der API repräsentiert, die zum Erstellen des Berichts verwendet wurde.
- `"aggregation_service_payloads"`
  - : Ein Array von Objekten, die Payload-Objekte darstellen und die Histogrammbeiträge enthalten, die vom Aggregationsdienst verwendet werden, um die im Bericht enthaltenen Daten zusammenzusetzen. Derzeit wird pro Bericht nur eine einzelne Payload unterstützt, die vom Browser konfiguriert wird. In Zukunft könnten mehrere, anpassbare Payloads unterstützt werden. Jedes Payload-Objekt kann die folgenden Eigenschaften enthalten:
    - `"payload"`
      - : Eine [CBOR](https://cbor.io/) Map, die über [HPKE](https://datatracker.ietf.org/doc/rfc9180/) verschlüsselt und dann {{Glossary("Base64", "base64")}}-kodiert ist, mit folgender Struktur (nur zur Notation mit JSON verwendet):

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

        Die `operation` ist immer `"histogram"`; es erlaubt dem Dienst, in Zukunft andere Operationen zu unterstützen.

    - `"key_id"`
      - : Ein String, der den öffentlichen Schlüssel identifiziert, der verwendet wird, um die Payload zu verschlüsseln.
    - `"debug_cleartext_payload"` {{optional_inline}}
      - : Optionale Debugging-Informationen.

- `"aggregation_coordinator_origin"`
  - : Die Bereitstellungsoption für den Aggregationsdienst.
- `"source_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-Unsigned Integer, der den Debugging-Schlüssel für die Attributionsquelle darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header im Feld [`"debug_key"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#debug_key) festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).
- `"trigger_debug_key"` {{optional_inline}}
  - : Ein 64-Bit-Unsigned Integer, der den Debugging-Schlüssel für den Attribution-Trigger darstellt. Dieser spiegelt den Wert wider, der im zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header im Feld `"debug_key"` festgelegt ist. Weitere Informationen finden Sie unter [Debug-Berichte](#debug-berichte).

## Hinzufügen von Rauschen zu Berichten

<!--
DIESE INFORMATION IST NICHT VOLLSTÄNDIG; WIR HABEN SIE VORLÄUFIG GESPEICHERT, DAMIT WIR DIESE DOKUMENTATION VERÖFFENTLICHEN KÖNNEN, UND WIR WERDEN IN DER ZUKUNFT WEITERE ARBEITEN ZUM ARA-RAUSCHEN ERLEDIGEN, FALLS WENN DIES ERFORDERLICH IST

Im Fall von Ereignis-Ebenen-Berichten wird dies mit einem zufälligen Antwort-Algorithmus durchgeführt, der wie folgt funktioniert:

1. Wenn eine Attributionsquelle gespeichert wird, generiert der Browser eine Liste aller möglichen Sets von Berichten, die aus der Konfiguration der Quelle stammen könnten (eingeschlossen das Set, das aus keinen Berichten besteht).
2. In einem kleinen Prozentsatz der Fälle verhindert der Browser, dass die Quelle zugeordnet wird, und wählt stattdessen ein zufälliges Mitglied dieser Liste aus, um es als Berichte der Quelle zu verwenden. Die Wahrscheinlichkeit, dass dies geschieht, basiert auf der Größe dieser Liste, den implementationsspezifischen Privatsphäre-Parametern des Browsers und der von der Quelle gewählten [`"event_level_epsilon"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_level_epsilon).

Typische Einstellungen im {{httpheader("Attribution-Reporting-Register-Source")}}-Header könnten so aussehen:

```json
{
  ...,
  "trigger_data": [0, 1, 2, 3, 4],
  "trigger_data_matching": "exact",
  ...,
}
```

Die Quelle `"trigger_data"` kann maximal 32 Werte haben. Eine Erhöhung der Anzahl der Werte und `"event_report_windows"` erhöht die Anzahl der Elemente im Gesamtreport-Set.

Ein übereinstimmender {{httpheader("Attribution-Reporting-Register-Trigger")}} könnte Folgendes enthalten:

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

Es ist jedoch nach wie vor möglich, dass ein Match nicht zustande kommt, basierend auf dem oben beschriebenen Algorithmus mit Zufallsantworten.
-->

Rauschen wird zu Berichten hinzugefügt, um die Ausgabe, die mit einer bestimmten Quelle verbunden ist, zu verschleiern und dadurch die Privatsphäre der Nutzer zu schützen. Die genauen Quelldaten können nicht identifiziert und auf einzelne Nutzer zurückgeführt werden, aber die Gesamtmuster, die aus den Daten genommen werden, werden immer noch die gleiche Bedeutung liefern.

Weitere Informationen darüber, wie Rauschen in der Attributionsberichterstattung funktioniert, finden Sie unter:

- [Verstehen von Rauschen in Zusammenfassungsberichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/understanding-noise).
- [Datenlimits und Rauschen](https://github.com/WICG/attribution-reporting-api/blob/main/EVENT.md#data-limits-and-noise)
- [Arbeiten mit Rauschen](https://privacysandbox.google.com/private-advertising/attribution-reporting/working-with-noise)

## Berichtsprioritäten und -grenzen

Standardmäßig haben alle Attributionsquellen die gleiche Priorität, und das Attributionsmodell ist last-touch, was bedeutet, dass eine Umwandlung der zuletzt übereinstimmenden Quellenveranstaltung zugeordnet wird. Für sowohl Ereignis-Ebenen- als auch aggregierbare Berichte können Sie die Quellenpriorität ändern, indem Sie einen neuen Wert für das `"priority"`-Feld im zugehörigen {{httpheader("Attribution-Reporting-Register-Source")}}-Header festlegen. Der Standardwert ist `0`; wenn Sie einen `"priority"`-Wert von `1` für eine bestimmte Quelle festlegen, wird diese Quelle zuerst abgeglichen, noch vor jeder Prioritäts-`0`-Quelle. Quellen mit `"priority": "2"` werden vor `"priority": "1"`-Quellen abgeglichen, und so weiter.

Prioritäten von Attributionstriggern funktionieren auf die gleiche Weise; Sie können auch Trigger-Prioritäten festlegen, indem Sie ein `"priority"`-Feld zum zugehörigen {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzufügen, jedoch nur für Berichte auf Ereignis-Ebene.

Verschiedene Quelentypen haben verschiedene Standardgrenzen:

- [Navigationsbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) haben standardmäßig ein Limit von drei Berichten. Beispiel: Ein Nutzer klickt auf eine Anzeige und vollzieht vier Umwandlungen: Er besucht die Startseite der Werbeseite, besucht dann eine Produktseite, meldet sich zum Newsletter an und tätigt schließlich einen Kauf. Der Kaufbericht würde fallen gelassen, da er aus der vierten Umwandlung stammt.
- [Ereignisbasierte Attributionsquellen](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#event-based_attribution_sources) haben standardmäßig ein Limit von einem Bericht.

> [!NOTE]
> Das Berichtslimit kann angepasst werden, indem eine andere Anzahl von `"end_times"` in den Feldern [`"event_report_windows"`](/de/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Register-Source#event_report_windows) des zugehörigen `Attribution-Reporting-Register-Source` Headers festgelegt wird.

Wenn eine Attribution für ein bestimmtes Quellereignis ausgelöst wird, wenn die maximale Anzahl von Attributionen (drei für Klicks, eine für Bilder/Skripte) für diese Quelle erreicht wurde, wird der Browser:

- Die Priorität des neuen Berichts mit den Prioritäten bestehender geplanter Berichte für dieselbe Quelle vergleichen.
- Den Bericht mit der niedrigsten Priorität löschen, um stattdessen den neuen Bericht zu planen. Wenn der neue Bericht derjenige mit der niedrigsten Priorität ist, wird er ignoriert und Sie erhalten ihn nicht.

Wenn keine Prioritäten festgelegt sind, fällt der Browser auf sein Standardverhalten zurück: Jede Umwandlung, die nach der dritten Umwandlung für Klicks oder der ersten Umwandlung für Ansichten auftritt, wird fallen gelassen.

## Filter

Sie können Regeln definieren, für welche Umwandlungen Berichte generiert werden, indem Sie Filter verwenden. Beispielsweise könnten Sie wählen, nur Umwandlungen für eine bestimmte Produktkategorie zu zählen und Umwandlungen für andere Kategorien herauszufiltern.

Um Filter zu deklarieren:

1. Fügen Sie bei der Quellenregistrierung ein `filter_data`-Feld zum {{httpheader("Attribution-Reporting-Register-Source")}}-Header hinzu, das die Filter-Schlüssel definiert, die Sie verwenden werden, um die Umwandlungen auf der Triggerseite zu filtern. Dies sind vollständig benutzerdefinierte Felder. Um beispielsweise nur Umwandlungen auf bestimmten Subdomains und für bestimmte Produkte anzugeben:

   ```json
   "filter_data": {
     "conversion_subdomain": ["electronics.megastore", "electronics2.megastore"],
     "product": ["1234"]
   }
   ```

2. Fügen Sie bei der Triggerregistrierung ein `filters`-Feld zu dem {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header hinzu. Das folgende Beispiel führt dazu, dass Triggerinteraktionen zur obigen Quellenregistrierung passen, da sie beide das `"electronics.megastore"` `"conversion_subdomain"`-Feld enthalten. Der `"directory"`-Filter hingegen wird ignoriert, wenn ein Abgleich versucht wird, da er nicht in der obigen Quellenregistrierung enthalten war.

   ```json
   "filters": {
     "conversion_subdomain": ["electronics.megastore"],
     "directory": ["/store/electronics"]
   }
   ```

Wenn die `"filter_data"`- und `"filters"`-Felder übereinstimmende Unterfelder enthalten (wie `"conversion_subdomain"` im obigen Beispiel), jedoch keine der Werte des Unterfelds übereinstimmen, wird der Trigger ignoriert und es ergibt sich kein Match.

### Filtern von Triggerdaten

Das `event_trigger_data`-Feld im {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header kann erweitert werden, um selektives Filtern durchzuführen, um `trigger_data`, `priority` oder `deduplication_key` basierend auf `filter_data` zu setzen, das im {{httpheader("Attribution-Reporting-Register-Source")}}-Header definiert ist.

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

> [!NOTE]
> `"source_type"` ist ein automatisch populiertes Feld, das in den `"filter_data"` der Quelle verfügbar ist.

> [!NOTE]
> `not_filters`, die mit Negation filtern, werden ebenfalls unterstützt.

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

Wenn die Filter bei keinem der Ereignistrigger übereinstimmen, wird kein Bericht auf Ereignis-Ebene erstellt. Wenn die Filter bei mehreren Ereignistriggern übereinstimmen, wird der erste übereinstimmende Ereignistrigger verwendet.

## Debug-Berichte

Sie können Debug-Berichte aktivieren, um Fehlersuchinformationen über Ihre Attributionsberichte zurückzugeben. Diese können beispielsweise verwendet werden, um zu überprüfen, ob Ihre Einrichtung ordnungsgemäß funktioniert, und um Lücken in den Messergebnissen zwischen Ihrer alten cookie-basierten Implementierung und Ihrer neuen Attribution-Reporting-Implementierung zu verstehen. Debug-Berichte werden sofort gesendet; sie unterliegen nicht demselben Zeitplan wie Berichte auf Ereignis- und Zusammenfassungsebene.

Es gibt zwei verschiedene Arten von Debug-Berichten:

- **Erfolgs-Debug-Berichte** verfolgen den erfolgreichen Abschluss eines bestimmten Attributionsberichts. Erfolgs-Debug-Berichte werden generiert und gesendet, sobald der entsprechende Trigger registriert ist.
- **Ausführliche Debug-Berichte** geben Ihnen mehr Einblicke in die Attributionsquelle und Attributionstrigger-Ereignisse, die mit einem Attributionsbericht verbunden sind. Sie ermöglichen es Ihnen, sicherzustellen, dass Quellen erfolgreich registriert wurden, fehlende Berichte zu verfolgen und herauszufinden, warum sie fehlen (z. B. aufgrund eines Scheiterns bei der Quellen- oder Triggerereignisregistrierung oder eines Fehlers beim Senden oder Generieren des Berichts). Ausführliche Debug-Berichte werden sofort bei der Quellen- oder Triggerregistrierung versendet.

> [!NOTE]
> Um Debug-Berichte zu verwenden, muss der Reporting-Ursprung einen Cookie setzen. Wenn der konfigurierte Empfänger der Berichte eine dritte Partei ist, wird dieser Cookie ein [Third-Party-Cookie](/de/docs/Web/Privacy/Guides/Third-party_cookies), was bedeutet, dass Debug-Berichte in Browsern, in denen Third-Party-Cookies deaktiviert/nicht verfügbar sind, nicht verfügbar sind.

### Verwenden von Debug-Berichten

Um Debug-Berichte zu verwenden, müssen Sie:

1. Setzen Sie das `ar_debug`-Cookie auf Ihrem Reporting-Ursprung. Dies muss sowohl während der Quellen- als auch der Triggerregistrierung vorhanden sein:

   ```http
   Set-Cookie: ar_debug=1; SameSite=None; Secure; Path=/; HttpOnly
   ```

2. Setzen Sie das `debug_key`-Feld in jedem {{httpheader("Attribution-Reporting-Register-Source")}}- und {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwort-Header im Zusammenhang mit Attributionsberichten, für die Sie Debugging-Informationen freilegen möchten. Jeder `debug_key`-Wert muss ein 64-Bit-Zeichenfolge unsigned integer sein, formatiert als String in der Basis-10. Machen Sie jeden Debug-Schlüssel zu einer eindeutigen ID — Sie könnten beispielsweise jeden als Cookie-ID + Quelle/Trigger-Zeitstempel festlegen (und diesen selben Zeitstempel in Ihrem älteren Cookie-basierten System erfassen, wenn Sie die beiden vergleichen möchten).

   ```json
   {
     "debug_key": "647775351539539"
   }
   ```

   > [!NOTE]
   > Machen Sie den Debug-Schlüssel auf der Quellenseite unterschiedlich von der `source_event_id`, damit Sie einzelne Berichte, die dieselbe Source Event ID haben, unterscheiden können.

3. Setzen Sie optional das `debug_reporting`-Feld auf `true`, in sowohl den `Attribution-Reporting-Register-Source`- als auch den `Attribution-Reporting-Register-Trigger`-Headers. Wenn Sie dies tun, wird ein ausführlicher Debug-Bericht generiert. Wenn Sie dies nicht tun, wird ein Erfolgs-Debug-Bericht generiert, der die Art des Attributionsberichts widerspiegelt, den Sie generieren (auf Ereignis-Ebene oder aggregierbar).

   ```json
   {
     "debug_key": "647775351539539",
     "debug_reporting": true
   }
   ```

4. Richten Sie geeignete Endpunkte ein, um die Debug-Berichte zu empfangen, die Sie generieren möchten. Debug-Berichte werden an drei separate Endpunkte im Reporting-Ursprung gesendet:
   - Endpunkt für Erfolgs-Debug-Berichte auf Ereignis-Ebene: `<reporting-origin>/.well-known/attribution-reporting/debug/report-event-attribution`
   - Endpunkt für aggregierbare Erfolgs-Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/report-aggregate-attribution`
   - Endpunkt für ausführliche Debug-Berichte: `<reporting-origin>/.well-known/attribution-reporting/debug/verbose`

Generierte Erfolgs-Debug-Berichte sind identisch mit Attributionsberichten und enthalten die Debug-Schlüssel auf der Quellenseite und der Trigger-Seite in den Feldern `"source_debug_key"` bzw. `"trigger_debug_key"`.

Für weitere Informationen und Beispiele siehe:

- [Einführung in Debug-Berichte](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/) auf privacysandbox.google.com (2023)
- [Debugberichte einrichten](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-2/) auf privacysandbox.google.com (2023)
- [Debugging-Kochbuch](https://privacysandbox.google.com/private-advertising/attribution-reporting/attribution-reporting-debugging/part-3/) auf privacysandbox.google.com (2023)
