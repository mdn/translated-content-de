---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **Compute Pressure API** ist eine JavaScript-API, die es Ihnen ermöglicht, den Druck auf Systemressourcen wie die CPU zu überwachen.

## Anwendungsfälle

In Echtzeitanwendungen, wie z.B. Web-Apps für Videokonferenzen, ermöglicht Ihnen die Compute Pressure API, zu erkennen, welchem Druck das System derzeit ausgesetzt ist. Das System wird mit jeglichem Stress bestmöglich umgehen, aber eine Zusammenarbeit zwischen System und App ist nützlich, um den Druck optimal zu bewältigen. Diese API benachrichtigt Sie über Änderungen in den Druckzuständen auf hoher Ebene, sodass Sie Ihre Arbeitslasten anpassen und dennoch ein gutes Benutzererlebnis bieten können. Das Signal wird proaktiv übermittelt, wenn der Systemdrucktrend entweder steigt oder sinkt, um eine rechtzeitige Anpassung zu ermöglichen.

Sie können diese Druckwechsel-Signale beispielsweise nutzen, um die Videoqualität zu reduzieren oder zu erhöhen oder die Anzahl der gleichzeitig angezeigten Videostreams zu verringern, um das Fallenlassen von Videoframes, Audiounterbrechungen oder die Verzögerung anderer kritischer Anwendungsbereiche zu vermeiden. Die Servicequalität Ihrer Web-App kann variieren, auch aufgrund externen Drucks und Apps zu unerwarteten Zeiten, aber idealerweise führt das nicht zu einem vollständigen Systemausfall, Eingabeverzögerungen oder Unbeweglichkeit. Stattdessen wird das Set der aktivierten Funktionen und deren Qualitätsniveau im Verhältnis zum Ressourcendruck des Endnutzer-Geräts ausgewogen. Es ist vergleichbar mit Netzwerkdruck, bei dem sich eine Streaming-App an die verfügbare Bandbreite anpasst.

Weitere Anwendungsfälle sind:

- Webspiele, bei denen Sie die Qualität und Menge der 3D-Assets ausbalancieren, die Framerate, Auflösung, Tiefenschärfe etc. ändern könnten, um niedrige Latenz und eine stabile Bildrate sicherzustellen.
- Benutzeroberflächen, bei denen Sie Platzhalter anstelle von Echtzeitdaten rendern könnten, während das System unter Druck steht, und die echten Inhalte anzeigen, sobald der Druck nachgelassen hat.

## Konzepte und Nutzung

Schnelle und ansprechende Webanwendungen sollten Arbeitslasten ausgleichen, wenn die Rechenressourcen des Systems (nahezu) voll ausgelastet sind. Ziel der Compute Pressure API ist es, ein schlechtes Benutzererlebnis eher zu verhindern als zu mildern, sowohl in der Web-App selbst als auch um zu vermeiden, dass das Gerät des Nutzers zu heiß, zu laut oder der Akku in unzumutbarem Maße entladen wird. Deswegen ist es ratsam, diese API anderen Rückmeldemechanismen oder einzelnen Leistungsanpassungen vorzuziehen (zum Beispiel durch Reduzierung der Frequenz von [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)), wo ein schlechtes Benutzererlebnis zwar gemildert werden könnte, aber nicht proaktiv vermieden wird. Für die Messung und Segmentierung der Leistung von Benutzersitzungen im Nachhinein ist die [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) API besser geeignet, um Aufgaben zu analysieren, die den UI-Thread 50 Millisekunden oder länger beanspruchen (siehe auch [Performance API](/de/docs/Web/API/Performance_API) für weitere Leistungsmesstechniken).

### Druckquellentypen

In Ihrer Web-App oder Website konkurrieren verschiedene Aufgaben um die Rechenzeit verschiedener Verarbeitungseinheiten (CPU, GPU und andere spezialisierte Verarbeitungseinheiten). Die aktuelle Version der Spezifikation der Compute Pressure API definiert zwei Hauptquellentypen, die abgefragt werden können, um Druckinformationen zu sammeln:

- `"thermals"` repräsentiert den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` repräsentiert den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über alle ihre Kerne. Dieser Zustand kann von anderen Apps und Websites als der beobachtenden Website beeinflusst werden.

Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Nutzen Sie den statischen Hinweis [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static), um zu sehen, welche Quellentypen in Ihrem Browser verfügbar sind. Beachten Sie, dass die Verfügbarkeit auch von Ihrem Betriebssystem und Ihrer Hardware abhängen kann. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und prüfen Sie auf einen `NotSupportedError`, um zu sehen, ob die Drucküberwachung möglich ist.

Die Compute Pressure API ist in den folgenden Kontexten verfügbar:

- [`Window`](/de/docs/Web/API/Window) (Haupt-Thread)
- [`Worker`](/de/docs/Web/API/Worker)
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- {{HTMLElement("iFrame")}} (wenn eine geeignete [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy/compute-pressure) bereitgestellt wird)

### Druckzustände

Die Compute Pressure API stellt Druckzustände auf hoher Ebene dar, die die Komplexitäten von Systemengpässen abstrahieren, die nicht ausreichend durch niedrigstufige Metriken wie Prozessortaktgeschwindigkeit und -auslastung erklärt werden können. Tatsächlich sind Messungen für die CPU-Auslastung oft [irreführend](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Daher verwendet die Compute Pressure API menschenlesbare Druckzustände mit folgenden Semantiken (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne spürbare negative Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was möglicherweise zu verringertem Akkuverbrauch führt und Ventilatoren (oder Systeme mit Ventilatoren) aktiv und hörbar werden könnten. Abgesehen davon läuft das Zielgerät fehlerfrei und kann zusätzliche Arbeit aufnehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind konstant stark erhöht. Das System drosselt möglicherweise als Gegenmaßnahme, um die Wärmeentwicklung zu reduzieren.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist erheblich erhöht und es muss abkühlen, um potenzielle Probleme zu vermeiden.

Die beitragenden Faktoren (das heißt, die zugrundeliegenden Systemmetriken) für die Druckzustände oben werden nicht durch die Spezifikation definiert und können je nach zugrundeliegender Hardware und Plattformverhalten variieren. Die Spezifikation verlangt jedoch, dass die Änderung der beitragenden Faktoren erheblich sein muss, um ein Hin- und Herschwanken zwischen Zuständen zu vermeiden. Das bedeutet, Sie können erwarten, dass die API nicht zu oft unterschiedliche Zustände meldet, da sie nicht nur auf eine schwankende Systemmetrik reagiert.

### Sicherheits- und Datenschutzüberlegungen

Die Compute Pressure API wird durch die `"compute-pressure"`-Direktive [politisch gesteuert](/de/docs/Web/HTTP/Permissions_Policy). Ihre Standard-Zugriffsliste ist `'self'`, was die Nutzung in verschachtelten Inhalten mit derselben Herkunft erlaubt, aber Drittanbieterinhalt daran hindert, die Funktion zu nutzen.

## Referenz

### Schnittstellen

Die folgenden Schnittstellen sind in der Compute Pressure API vorhanden und die API-Oberfläche ist ähnlich wie bei anderen Beobachtern, wie zum Beispiel [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), [`MutationObserver`](/de/docs/Web/API/MutationObserver) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

- [`PressureObserver`](/de/docs/Web/API/PressureObserver) {{experimental_inline}}
  - : Benachrichtigt, wenn sich der Druck des Systems für eine angegebene Anzahl von Quellen (z. B. die CPU) in einem vordefinierten Stichprobenintervall ändert.
- [`PressureRecord`](/de/docs/Web/API/PressureRecord)
  - : Beschreibt den Drucktrend zu einem bestimmten Moment des Übergangs.

### Permission-Policy-Direktive

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}}-Direktive
  - : Steuert den Zugriff auf die Compute Pressure API.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und ergreift Maßnahmen, wann immer ein Druckwechsel stattfindet. Das Stichprobenintervall ist auf 1000 ms gesetzt, was bedeutet, dass es höchstens alle Sekunde Updates geben wird.

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

- [Compute Pressure Demo](https://w3c.github.io/compute-pressure/demo/), die Mandelbrot-Mengen und Worker nutzt, um künstlichen Druck zu Erzeugungszwecken zu schaffen.
