---
title: CrashReport
slug: Web/API/CrashReport
l10n:
  sourceCommit: dd1e8282ab6621b62399d65cad46177d426d1d93
---

{{APIRef("Reporting API")}}

Das `CrashReport`-Wörterbuch der [Reporting API](/de/docs/Web/API/Reporting_API) stellt einen Absturzbericht dar.

> [!NOTE]
> Es ist nicht möglich, Absturzberichte mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) abzurufen – die Berichte werden nur generiert, wenn der Browser abstürzt, zu welchem Zeitpunkt der Beobachtercode nicht verfügbar ist, um ausgeführt zu werden.

## Instanzeigenschaften

- `age`
  - : Das Alter des Berichts in Millisekunden.
- `type`
  - : Der String `"crash"`, der angibt, dass dies ein Absturzbericht ist.
- `url`
  - : Ein String, der die URL des Dokuments repräsentiert, das den Bericht generierte.
- `user_agent`
  - : Der User-Agent-String des Browsers, der den Bericht generierte.
- `body`
  - : Der Körper des Berichts.
    Dies ist ein Objekt mit den folgenden Eigenschaften:
    - `crash_report_api` {{experimental_inline}} {{optional_inline}}
      - : Ein Objekt, das die Schlüssel-Wert-Paare enthält, die über die Methode [`CrashReportContext.set()`](/de/docs/Web/API/CrashReportContext/set) gesetzt wurden, falls vorhanden.
    - `is_top_level` {{experimental_inline}}
      - : Ein Boolean-Wert, der angibt, ob das abgestürzte Dokument ein Top-Level-Dokument (`true`) oder ein eingebettetes Dokument (`false`) war.
    - `reason` {{experimental_inline}} {{optional_inline}}
      - : Ein String, der den spezifischen Grund angibt, warum der Absturz auftrat, falls bekannt. Mögliche Werte sind:
        - `oom`
          - : Die Seite hat keinen Speicher mehr.
        - `unresponsive`
          - : Die Seite wurde wegen Unresponsiveness beendet.
    - `stack` {{experimental_inline}} {{optional_inline}}
      - : Ein String, der den JavaScript-Call-Stack zum Zeitpunkt des Absturzes darstellt. Dies wird eingeschlossen, wenn der `reason` `unresponsive` ist, wenn der `Document-Policy`-Wert für `include-js-call-stacks-in-crash-reports` im abgestürzten Dokument `true` ist und wenn der Call-Stack aus dem abgestürzten Dokument wiederhergestellt werden konnte.
    - `visibility_state` {{experimental_inline}}
      - : Ein enumerierter Wert, der angibt, ob das Dokument sichtbar ist. Dies spiegelt den Wert der Eigenschaft [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) wider. Mögliche Werte sind:
        - `visible`
          - : Der Dokumentinhalt ist mindestens teilweise sichtbar.
        - `hidden`
          - : Der Dokumentinhalt ist vollständig verborgen.

## Beschreibung

Absturzberichte mit beliebigen Informationen können mit der [Reporting API](/de/docs/Web/API/Reporting_API) an einen Server-Endpunkt gesendet werden. Dies ist nützlich, da wir während der gesamten Lebensdauer einer Anwendung detaillierte Diagnoseinformationen speichern und die Berichte zur effektiveren Fehlerbehebung bei Abstürzen verwenden können.

Die Diagnoseinformationen werden in einem speziellen Schlüssel-Wert-Speicher gespeichert, der über das [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)-Objekt des Dokuments manipuliert werden kann. Darauf kann über die Eigenschaft [`Window.crashReport`](/de/docs/Web/API/Window/crashReport) zugegriffen werden.

Wenn der Browser abstürzt, werden die im Schlüssel-Wert-Speicher gespeicherten Informationen zu einem `CrashReport` hinzugefügt und an einen Berichtserver gesendet. Der Berichtserver-Endpunkt und seine Zuordnung zu einer bestimmten URL werden mit dem {{httpheader("Reporting-Endpoints")}}-Header festgelegt.

- Wenn ein `crash-reporting`-Server-Endpunkt definiert ist, werden Absturzberichte dorthin geliefert. Beispiel:

  ```http
  Reporting-Endpoints: crash-reporting="https://example.com/reports"
  ```

- Wenn ein `crash-reporting`-Endpunkt nicht definiert ist, aber ein [„default“-Berichtserver-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) definiert ist, werden Absturzberichte dorthin geliefert. Beispiel:

  ```http
  Reporting-Endpoints: default="https://example.com/reports"
  ```

- Wenn weder der eine noch der andere Endpunkt definiert sind, werden Absturzberichte nicht geliefert.

## Beispiele

### Senden eines Berichts an einen Berichtsendpunkt

Um eine Webseite so zu konfigurieren, dass sie einen Absturzbericht sendet, müssen Sie einen Berichtserver-Endpunkt mit dem {{httpheader("Reporting-Endpoints")}}-Header definieren, zum Beispiel `https://example.com/reports`, wie bereits beschrieben.

Eine typische Berichtstruktur sieht wie folgt aus:

```json
{
  "age": 27,
  "type": "crash",
  "url": "https://example.com/",
  "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
  "body": {
    "sourceFile": "https://example.com/",
    "reason": "unresponsive",
    "stack": "SomeError: ... at ...",
    "is_top_level": true,
    "visibility_state": "visible",
    "crash_report_api": {
      "crash_data_1": "0001",
      "crash_data_2": "0002"
    }
  }
}
```

Der Bericht wird als JSON-Objekt in einer {{httpmethod("POST")}}-Anfrage an den Endpunkt gesendet, wann immer der Browser abstürzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)
- {{HTTPHeader("Reporting-Endpoints")}}
- [Reporting API](/de/docs/Web/API/Reporting_API)
