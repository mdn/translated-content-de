---
title: CrashReportContext
slug: Web/API/CrashReportContext
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `CrashReportContext`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) bietet Methoden, die es ermöglichen, beliebige Daten für den aktuellen obersten Browsing-Kontext aufzuzeichnen. Diese werden dann einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an einen Reporting-Endpunkt gesendet, wenn ein Absturz des Browsers auftritt.

Das `CrashReportContext`-Objekt für einen bestimmten Browsing-Kontext wird über die [`Window.crashReport`](/de/docs/Web/API/Window/crashReport) Eigenschaft abgerufen.

## Instanzmethoden

- [`CrashReportContext.delete()`](/de/docs/Web/API/CrashReportContext/delete) {{experimental_inline}}
  - : Löscht ein zuvor gespeichertes Schlüssel-Wert-Paar.
- [`CrashReportContext.initialize()`](/de/docs/Web/API/CrashReportContext/initialize) {{experimental_inline}}
  - : Initialisiert einen Speicherbereich, der zur Speicherung von durch [`set()`](/de/docs/Web/API/CrashReportContext/set) spezifizierten Absturzberichtsdaten verwendet wird. Dies muss aufgerufen werden, bevor eine andere Methode für das Objekt aufgerufen wird.
- [`CrashReportContext.set()`](/de/docs/Web/API/CrashReportContext/set) {{experimental_inline}}
  - : Speichert ein Schlüssel-Wert-Paar im durch [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize) initialisierten Speicher.

## Beschreibung

Absturzberichte, die beliebige Informationen enthalten, können mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) an einen Server-Endpunkt gesendet werden. Dies ist nützlich, da wir detaillierte Diagnoseinformationen während der gesamten Lebensdauer einer Anwendung speichern und die Berichte verwenden können, um Abstürze effektiver zu debuggen.

Die Informationen werden in einem speziellen Schlüssel-Wert-Speicher gespeichert, der ähnlich wie [Web Storage](/de/docs/Web/API/Web_Storage_API) ist, außer dass sein Geltungsbereich auf den aktuellen obersten Ursprung beschränkt ist und keine Getter-Methode verfügbar ist. Es erlaubt das Aufzeichnen und Löschen dokumentenspezifischer Statusinformationen. Das oberste Dokument zeichnet Diagnoseinformationen über sich selbst und alle eingebetteten Dokumente auf und sendet zugehörige Absturzberichte.

Um diese API zu verwenden, muss ein Dokument zuerst [`window.crashReport.initialize()`](/de/docs/Web/API/CrashReportContext/initialize) aufrufen, das als Argument eine Zahl übernimmt, die die maximale Anzahl von Bytes angibt, die in dem Schlüssel-Wert-Speicher durch jeden individuellen [`window.crashReport.set()`](/de/docs/Web/API/CrashReportContext/set) Aufruf gespeichert werden können. Werte werden dann mit `set()` aufgezeichnet und mit [`window.crashReport.delete()`](/de/docs/Web/API/CrashReportContext/delete) gelöscht.

Wenn der Browser abstürzt, werden die im Schlüssel-Wert-Speicher gespeicherten Informationen einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an den [Standard-Reporting-Server-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet.

> [!NOTE]
> Es ist nicht möglich, [`CrashReport`](/de/docs/Web/API/CrashReport)s mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) abzurufen.

## Beispiele

### Daten in einem Absturzbericht aufzeichnen

Um mit der Erfassung von Absturzberichten zu beginnen, muss eine Webanwendung [`window.crashReport.initialize()`](/de/docs/Web/API/CrashReportContext/initialize) aufrufen und eine maximale Anzahl von Bytes angeben, die im Schlüssel-Wert-Speicher pro `set()`-Aufruf gespeichert werden können. Hier initialisieren wir den Speicher mit einem Kilobyte Speicherplatz:

```js
window.crashReport.initialize(1024).then(() => {
  init();
});
```

Sobald das Versprechen aufgelöst ist, gibt es einige gängige Strategien, die im folgenden Code übernommen werden können. Beispielsweise könnten wir ein Schlüssel-Wert-Paar setzen, das Eingabedaten für eine komplexe Operation speichert, die möglicherweise einen Absturz verursacht, und dann versuchen, die Operation mit diesen Eingaben auszuführen. Wenn der Browser abstürzt, enthält der resultierende [`CrashReport`](/de/docs/Web/API/CrashReport) diese Daten. Wenn es nicht abstürzt, können wir das Schlüssel-Wert-Paar löschen, da es zu diesem Zeitpunkt nicht relevant ist.

```js
const arg1 = "a";
const arg2 = "b";
window.crashReport.set("complex-operation-input", `${arg1}_${arg2}`);
complexOperationThatMightCrash(arg1, arg2);
window.crashReport.delete("complex-operation-input");
```

Da Crash-Speicherdaten zwischen allen gleich-originären Dokumenten in einem durchsuchbaren Navigable zugänglich sind, möchten Sie möglicherweise Schlüssel für bestimmte gängige Operationen, die mehrere Dokumente gleichzeitig ausführen können, mit einem Präfix versehen. Zum Beispiel kann eine gemeinsame [`fetch()`](/de/docs/Web/API/Window/fetch) Operation zu verschiedenen Zeiten in mehreren verschiedenen Dokumenten aufgerufen werden, und bestimmte Bedingungen können dazu führen, dass die Operation einen Absturz verursacht.

Um zu helfen, zu identifizieren, wo `fetch()` zum Zeitpunkt eines Absturzes aufgerufen wurde, können wir eine Präfix-Strategie übernehmen:

```js
async function fetchURL(url) {
  const prefix = `[top-level=${self === window.top}]`;
  window.crashReport.set(`${prefix}-fetching`, url);
  const response = await fetch(url);
  window.crashReport.delete(`${prefix}-fetching`, url);
}
```

Dies verhindert auch, dass Schlüssel-Wert-Paare, die dasselbe Problem zu unterschiedlichen Zeiten oder an verschiedenen Orten identifizieren, einander überschreiben. In diesem Fall differenzieren wir zwischen Absturzberichtsdatensätzen im obersten Dokument und in eingebetteten Dokumenten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
