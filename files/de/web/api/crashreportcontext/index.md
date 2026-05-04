---
title: CrashReportContext
slug: Web/API/CrashReportContext
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `CrashReportContext`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) bietet Methoden, die es ermöglichen, beliebige Daten für den aktuellen Top-Level-Browsing-Kontext aufzuzeichnen. Diese werden dann einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an einen Reporting-Endpunkt gesendet, wenn ein Browserabsturz auftritt.

Das `CrashReportContext`-Objekt für einen bestimmten Browsing-Kontext wird über die [`Window.crashReport`](/de/docs/Web/API/Window/crashReport)-Eigenschaft aufgerufen.

## Instanzmethoden

- [`CrashReportContext.delete()`](/de/docs/Web/API/CrashReportContext/delete) {{experimental_inline}}
  - : Löscht ein zuvor gespeichertes Schlüssel-Wert-Paar.
- [`CrashReportContext.initialize()`](/de/docs/Web/API/CrashReportContext/initialize) {{experimental_inline}}
  - : Initialisiert einen Speicherbereich, der zum Speichern von durch [`set()`](/de/docs/Web/API/CrashReportContext/set) spezifizierten Absturzberichtsdaten verwendet wird. Dies muss aufgerufen werden, bevor eine andere Methode des Objekts verwendet wird.
- [`CrashReportContext.set()`](/de/docs/Web/API/CrashReportContext/set) {{experimental_inline}}
  - : Speichert ein Schlüssel-Wert-Paar im durch [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize) initialisierten Speicher.

## Beschreibung

Absturzberichte, die beliebige Informationen enthalten, können mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) an einen Serverendpunkt gesendet werden. Dies ist nützlich, da wir detaillierte Diagnosedaten über die Lebensdauer einer Anwendung speichern und die Berichte verwenden können, um Abstürze effektiver zu debuggen.

Die Informationen werden in einem speziellen Schlüssel-Wert-Speicher gespeichert, der dem [Web Storage](/de/docs/Web/API/Web_Storage_API) ähnlich ist, außer dass sein Gültigkeitsbereich auf den aktuellen Top-Level-Ursprung beschränkt ist und keine Getter-Methode verfügbar ist. Es ermöglicht, dokumentenspezifische Zustandsinformationen aufzuzeichnen und zu löschen. Das Top-Level-Dokument zeichnet Diagnoseinformationen zu sich selbst und allen eingebetteten Dokumenten auf und sendet alle zugehörigen Absturzberichte.

Um diese API zu verwenden, muss ein Dokument zuerst [`window.crashReport.initialize()`](/de/docs/Web/API/CrashReportContext/initialize) aufrufen, wobei als Argument eine Zahl übergeben wird, die die maximale Anzahl von Bytes angibt, die im Schlüssel-Wert-Speicher durch jeden einzelnen [`window.crashReport.set()`](/de/docs/Web/API/CrashReportContext/set)-Aufruf gespeichert werden können. Werte werden dann mit `set()` aufgezeichnet und mit [`window.crashReport.delete()`](/de/docs/Web/API/CrashReportContext/delete) gelöscht.

Wenn der Browser abstürzt, werden die im Schlüssel-Wert-Speicher gespeicherten Informationen einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an den [Standard-Reporting-Server-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet.

> [!NOTE]
> Es ist nicht möglich, [`CrashReport`](/de/docs/Web/API/CrashReport)s mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) abzurufen.

## Beispiele

### Daten in einem Absturzbericht aufzeichnen

Um mit der Absturzberichterstattung zu beginnen, muss eine Webanwendung [`window.crashReport.initialize()`](/de/docs/Web/API/CrashReportContext/initialize) aufrufen und dabei die maximale Anzahl Bytes angeben, die im Schlüssel-Wert-Speicher pro `set()`-Aufruf gespeichert werden können. Hier initialisieren wir den Speicher mit einem Kilobyte Speicherplatz:

```js
window.crashReport.initialize(1024).then(() => {
  init();
});
```

Sobald das Versprechen erfüllt ist, gibt es einige gängige Strategien, die in nachfolgendem Code übernommen werden können. Zum Beispiel könnten wir ein Schlüssel-Wert-Paar setzen, das Eingabedaten für eine komplexe Operation speichert, die möglicherweise dazu führt, dass es abstürzt, und dann versuchen, die Operation mit diesen Eingaben auszuführen. Wenn der Browser abstürzt, enthält der resultierende [`CrashReport`](/de/docs/Web/API/CrashReport) diese Daten. Wenn es nicht abstürzt, können wir dieses Schlüssel-Wert-Paar löschen, da es derzeit nicht relevant ist.

```js
const arg1 = "a";
const arg2 = "b";
window.crashReport.set("complex-operation-input", `${arg1}_${arg2}`);
complexOperationThatMightCrash(arg1, arg2);
window.crashReport.delete("complex-operation-input");
```

Da auf Absturzspeicherdaten unter allen gleichnamigen Dokumenten eines durchsuchbaren Navigationssystems zugegriffen werden kann, möchten Sie möglicherweise Schlüssel für bestimmte häufige Operationen, die mehrere Dokumente gleichzeitig ausführen können, mit einem Präfix versehen. Beispielsweise stellen Sie sich vor, eine gemeinsame [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation wird in mehreren verschiedenen Dokumenten zu unterschiedlichen Zeiten aufgerufen, und bestimmte Bedingungen führen dazu, dass die Operation einen Absturz verursacht.

Um festzustellen, wo `fetch()` zum Zeitpunkt eines Absturzes aufgerufen wurde, können wir eine Präfixstrategie übernehmen:

```js
async function fetchURL(url) {
  const prefix = `[top-level=${self === window.top}]`;
  window.crashReport.set(`${prefix}-fetching`, url);
  const response = await fetch(url);
  window.crashReport.delete(`${prefix}-fetching`, url);
}
```

Dies verhindert auch, dass sich Schlüssel-Wert-Paare, die dasselbe Problem zu unterschiedlichen Zeiten oder an verschiedenen Orten identifizieren, gegenseitig überschreiben. In diesem Fall unterscheiden wir die in das Hauptdokument eingestellten Absturzberichterstellungsdaten von den in eingebetteten Dokumenten eingestellten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
