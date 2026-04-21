---
title: CrashReportContext
slug: Web/API/CrashReportContext
l10n:
  sourceCommit: dd1e8282ab6621b62399d65cad46177d426d1d93
---

{{APIRef("Reporting API")}}

Das `CrashReportContext`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) bietet Methoden, die es ermöglichen, beliebige Daten für den aktuellen obersten Browsing-Kontext zu erfassen. Diese werden einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an einen Reporting-Endpunkt gesendet, wenn ein Browser-Absturz auftritt.

Das `CrashReportContext`-Objekt für einen bestimmten Browsing-Kontext wird über die [`Window.crashReport`](/de/docs/Web/API/Window/crashReport)-Eigenschaft aufgerufen.

## Instanzmethoden

- [`CrashReportContext.delete()`](/de/docs/Web/API/CrashReportContext/delete)
  - : Löscht ein zuvor gespeichertes Schlüssel-Wert-Paar.
- [`CrashReportContext.initialize()`](/de/docs/Web/API/CrashReportContext/initialize)
  - : Initialisiert einen Speicherbereich, der zum Speichern von Crash-Report-Daten verwendet wird, die durch [`set()`](/de/docs/Web/API/CrashReportContext/set) spezifiziert werden. Dies muss aufgerufen werden, bevor eine andere Methode auf dem Objekt verwendet wird.
- [`CrashReportContext.set()`](/de/docs/Web/API/CrashReportContext/set)
  - : Speichert ein Schlüssel-Wert-Paar im durch [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize) initialisierten Speicher.

## Beschreibung

Crash-Berichte mit beliebigen Informationen können mithilfe der [Reporting API](/de/docs/Web/API/Reporting_API) an einen Server-Endpunkt gesendet werden. Dies ist nützlich, weil wir während der gesamten Lebensdauer einer Anwendung detaillierte Diagnoseinformationen speichern und die Berichte nutzen können, um Abstürze effektiver zu debuggen.

Die Informationen werden in einem speziellen Schlüssel-Wert-Speicher gespeichert, der dem [Web Storage](/de/docs/Web/API/Web_Storage_API) ähnelt, außer dass sein Geltungsbereich auf den aktuellen obersten Ursprung beschränkt ist und keine Getter-Methode verfügbar ist. Es erlaubt die Aufzeichnung und Löschung von dokumentenspezifischen Zustandsinformationen. Das oberste Dokument wird Diagnoseinformationen in Bezug auf sich selbst und eingebettete Dokumente aufzeichnen und alle zugehörigen Crash-Berichte senden.

Um diese API zu verwenden, muss ein Dokument zuerst [`window.crashReport.initialize()`](/de/docs/Web/API/CrashReportContext/initialize) aufrufen, mit einer Zahl als Argument, die die maximale Anzahl von Bytes angibt, die im Schlüssel-Wert-Speicher durch jeden einzelnen [`window.crashReport.set()`](/de/docs/Web/API/CrashReportContext/set) Aufruf gespeichert werden können. Werte werden dann mit `set()` aufgezeichnet und mit [`window.crashReport.delete()`](/de/docs/Web/API/CrashReportContext/delete) gelöscht.

Wenn der Browser abstürzt, werden die im Schlüssel-Wert-Speicher gespeicherten Informationen zu einem [`CrashReport`](/de/docs/Web/API/CrashReport) hinzugefügt und an den [voreingestellten Reporting-Server-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet.

> [!NOTE]
> Es ist nicht möglich, [`CrashReport`](/de/docs/Web/API/CrashReport)s mit einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) abzurufen.

## Beispiele

### Daten in einem Crash-Bericht aufzeichnen

Um mit der Verwendung von Crash-Berichten zu beginnen, muss eine Webanwendung [`window.crashReport.initialize()`](/de/docs/Web/API/CrashReportContext/initialize) aufrufen und eine maximale Anzahl von Bytes angeben, die pro `set()`-Aufruf im Schlüssel-Wert-Speicher gespeichert werden können. Hier initialisieren wir den Speicher mit einem Kilobyte Speicherplatz:

```js
window.crashReport.initialize(1024).then(() => {
  init();
});
```

Sobald das Versprechen aufgelöst wird, gibt es einige allgemeine Strategien, die im anschließenden Code übernommen werden können. Zum Beispiel könnten wir ein Schlüssel-Wert-Paar festlegen, das Eingabedaten für eine komplexe Operation speichert, die einen Absturz verursachen könnte, und dann versuchen, die Operation mit diesen Eingaben auszuführen. Wenn der Browser abstürzt, wird der resultierende [`CrashReport`](/de/docs/Web/API/CrashReport) diese Daten enthalten. Wenn es nicht abstürzt, können wir das Schlüssel-Wert-Paar löschen, da es derzeit nicht relevant ist.

```js
const arg1 = "a";
const arg2 = "b";
window.crashReport.set("complex-operation-input", `${arg1}_${arg2}`);
complexOperationThatMightCrash(arg1, arg2);
window.crashReport.delete("complex-operation-input");
```

Da Crash-Speicherdaten zwischen allen gleichen Ursprungsdokumenten unter einer durchquerbaren Navigation zugänglich sind, möchten Sie möglicherweise Schlüssel für bestimmte gemeinsame Operationen vorab fixieren, die mehrere Dokumente gleichzeitig ausführen können. Zum Beispiel könnte eine allgemeine [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation in mehreren verschiedenen Dokumenten zu unterschiedlichen Zeiten aufgerufen werden, und bestimmte Bedingungen könnten dazu führen, dass die Operation einen Absturz verursacht.

Um zu helfen, zu identifizieren, wo das `fetch()` zum Zeitpunkt eines Absturzes aufgerufen wurde, können wir eine Präfix-Strategie anwenden:

```js
async function fetchURL(url) {
  const prefix = `[top-level=${self === window.top}]`;
  window.crashReport.set(`${prefix}-fetching`, url);
  const response = await fetch(url);
  window.crashReport.delete(`${prefix}-fetching`, url);
}
```

Dies verhindert auch, dass Schlüssel-Wert-Paare, die dasselbe Problem zu unterschiedlichen Zeiten oder an unterschiedlichen Orten identifizieren, einander überschreiben. In diesem Fall unterscheiden wir Crash-Report-Daten, die im obersten Dokument festgelegt sind, von Daten, die in eingebetteten Dokumenten festgelegt sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
