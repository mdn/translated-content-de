---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **Compute Pressure API** ist eine JavaScript-API, mit der Sie die Auslastung von Systemressourcen wie der CPU beobachten können.

## Konzepte und Verwendung

Schnelle und angenehm zu nutzende Webanwendungen sollten ihre Arbeitslast anpassen, wenn die Rechenressourcen des Systems (nahezu) vollständig ausgelastet sind. Die Compute Pressure API soll eine schlechte Nutzererfahrung in der Webanwendung verhindern, statt sie nur abzumildern. Sie soll außerdem dazu beitragen, dass das Gerät nicht zu heiß oder zu laut wird und der Akku sich nicht übermäßig schnell entlädt. Daher empfiehlt es sich, diese API gegenüber Feedbackmechanismen oder einzelnen Leistungsanpassungen zu bevorzugen, etwa einer Verringerung der Häufigkeit von [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame). Solche Maßnahmen können eine schlechte Nutzererfahrung zwar abmildern, aber nicht vorausschauend vermeiden. Um die Leistung von Nutzersitzungen nachträglich zu messen und zu analysieren, eignet sich die API [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) besser. Mit ihr lassen sich Aufgaben untersuchen, die den UI-Thread mindestens 50 Millisekunden lang beanspruchen (siehe auch die [Performance API](/de/docs/Web/API/Performance_API) für weitere APIs zur Leistungsmessung).

### Anwendungsfälle

In Echtzeitanwendungen wie Webanwendungen für Videokonferenzen können Sie mit der Compute Pressure API erkennen, welcher Belastung das System gerade ausgesetzt ist. Das System bewältigt diese Belastung so gut wie möglich; eine Zusammenarbeit zwischen System und Anwendung hilft jedoch, optimal darauf zu reagieren. Die API informiert Sie über Änderungen des übergeordneten Belastungszustands, damit Sie die Arbeitslast anpassen und weiterhin eine angenehme Nutzererfahrung bieten können. Das Signal wird vorausschauend bereitgestellt, wenn die Systembelastung tendenziell zu- oder abnimmt, sodass eine rechtzeitige Anpassung möglich ist.

Sie können diese Signale beispielsweise nutzen, um die Videoqualität oder die Anzahl gleichzeitig angezeigter Videostreams zu verringern oder zu erhöhen. So lassen sich ausgelassene Videoframes, Aussetzer beim Ton und Verzögerungen in anderen wichtigen Teilen der Anwendung vermeiden. Die Dienstqualität Ihrer Webanwendung kann auch durch externe Faktoren und andere Anwendungen zu unerwarteten Zeiten schwanken. Idealerweise führt das aber weder zu einem vollständigen Systemausfall noch zu verzögerten Eingaben oder dazu, dass das System nicht mehr reagiert. Stattdessen werden die aktivierten Funktionen und ihre Qualitätsstufen auf die Ressourcenbelastung des Endgeräts abgestimmt. Das ähnelt der Anpassung einer Streaming-Anwendung an die verfügbare Bandbreite bei einer belasteten Netzwerkverbindung.

Weitere Anwendungsfälle sind:

- Webspiele, bei denen Sie Qualität und Anzahl der 3D-Assets anpassen oder Framerate, Auflösung, Schärfentiefe usw. ändern können, um eine geringe Latenz und eine stabile Framerate sicherzustellen.
- Benutzeroberflächen, bei denen Sie während einer hohen Systembelastung Platzhalter statt echter Daten anzeigen und die eigentlichen Inhalte darstellen können, sobald die Belastung nachgelassen hat.

### Arten von Belastungsquellen

In Ihrer Webanwendung oder auf Ihrer Website konkurrieren verschiedene Aufgaben um die Rechenzeit unterschiedlicher Verarbeitungseinheiten (CPU, GPU und anderer spezialisierter Verarbeitungseinheiten). Die aktuelle Version der Spezifikation der Compute Pressure API definiert zwei Haupttypen von Quellen, die Sie abfragen können, um Informationen über die Belastung zu erhalten:

- `"thermals"` steht für den allgemeinen thermischen Zustand des gesamten Systems.
- `"cpu"` steht für die durchschnittliche Belastung der zentralen Verarbeitungseinheit (CPU) über alle ihre Kerne hinweg. Dieser Zustand kann auch durch andere Anwendungen und Websites als die beobachtende Website beeinflusst werden.

Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Nutzen Sie den statischen Hinweis [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static), um zu sehen, welche Quelltypen Ihrem Browser zur Verfügung stehen. Beachten Sie, dass die Verfügbarkeit auch von Ihrem Betriebssystem und Ihrer Hardware abhängen kann. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und prüfen Sie, ob ein `NotSupportedError` auftritt, um festzustellen, ob eine Beobachtung der Belastung möglich ist.

Die Compute Pressure API ist in den folgenden Kontexten verfügbar:

- [`Window`](/de/docs/Web/API/Window) (Hauptthread)
- [`Worker`](/de/docs/Web/API/Worker)
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- {{HTMLElement("iframe")}} (wenn eine geeignete [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure) bereitgestellt wird)

### Belastungszustände

Die Compute Pressure API stellt übergeordnete Belastungszustände bereit. Sie abstrahieren die Komplexität von Systemengpässen, die sich mit einfachen Metriken wie Prozessortakt und Auslastung nicht angemessen beschreiben lassen. Tatsächlich sind Metriken zur CPU-Auslastung häufig [irreführend](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Deshalb verwendet die Compute Pressure API verständliche Belastungszustände mit folgender Bedeutung (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Das Zielgerät befindet sich in einem akzeptablen Zustand, ohne spürbare negative Auswirkungen für die Nutzer.
- 🟢 `"fair"`: Belastung, Temperatur und/oder Energieverbrauch des Zielgeräts sind leicht erhöht. Dies kann die Akkulaufzeit verkürzen und dazu führen, dass Lüfter aktiv und hörbar werden. Ansonsten funktioniert das Zielgerät einwandfrei und kann zusätzliche Aufgaben übernehmen.
- 🟡 `"serious"`: Belastung, Temperatur und/oder Energieverbrauch des Zielgeräts sind dauerhaft stark erhöht. Das System drosselt möglicherweise seine Leistung, um die Temperatur zu senken.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist deutlich erhöht. Es muss abkühlen, um mögliche Probleme zu vermeiden.

Die Faktoren, die zu diesen Belastungszuständen beitragen – also die zugrunde liegenden Systemmetriken –, werden von der Spezifikation nicht festgelegt und können je nach Hardware und Plattformverhalten variieren. Die Spezifikation verlangt jedoch, dass sich diese Faktoren wesentlich ändern müssen, bevor ein anderer Zustand gemeldet wird. Dadurch soll ein ständiger Wechsel zwischen Zuständen vermieden werden. Sie können daher davon ausgehen, dass die API nicht übermäßig häufig unterschiedliche Zustände meldet, weil sie nicht auf jede Schwankung einer einzelnen Systemmetrik reagiert.

### Sicherheits- und Datenschutzaspekte

Die Compute Pressure API wird über die Direktive `"compute-pressure"` durch eine [Richtlinie gesteuert](/de/docs/Web/HTTP/Guides/Permissions_Policy). Ihre standardmäßige Zulassungsliste ist `'self'`. Damit ist die Verwendung in eingebetteten Frames desselben Ursprungs erlaubt, während Inhalte von Drittanbietern die Funktion nicht verwenden können.

## Referenz

### Schnittstellen

Die Compute Pressure API umfasst die folgenden Schnittstellen. Ihr Aufbau ähnelt dem anderer Observer wie [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), [`MutationObserver`](/de/docs/Web/API/MutationObserver) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

- [`PressureObserver`](/de/docs/Web/API/PressureObserver) {{experimental_inline}}
  - : Benachrichtigt in einem festgelegten Abtastintervall über Änderungen der Systembelastung für eine bestimmte Anzahl von Quellen (z. B. die CPU).
- [`PressureRecord`](/de/docs/Web/API/PressureRecord)
  - : Beschreibt den Belastungstrend zu einem bestimmten Zeitpunkt eines Zustandswechsels.

### Permissions-Policy-Direktive

- {{httpheader("Permissions-Policy")}}; die Direktive {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}}
  - : Steuert den Zugriff auf die Compute Pressure API.

## Beispiele

### Aktuelle Belastung protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und reagiert auf jede Änderung der Belastung. Das Abtastintervall ist auf 1000 ms eingestellt. Aktualisierungen erfolgen somit höchstens einmal pro Sekunde.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  if (lastRecord.state === "critical") {
    // disable video feeds
  } else if (lastRecord.state === "serious") {
    // disable video filter effects
  } else {
    // enable all video feeds and filter effects
  }
}

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // report error setting up the observer
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Demo zur Compute Pressure API](https://w3c.github.io/compute-pressure/demo/), die Mandelbrot-Mengen und Worker verwendet, um zu Testzwecken künstliche Belastung zu erzeugen.
