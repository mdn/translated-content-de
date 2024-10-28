---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **Compute Pressure API** ist eine JavaScript-API, die es Ihnen ermöglicht, den Druck von Systemressourcen wie der CPU zu beobachten.

## Anwendungsfälle

In Echtzeitanwendungen, wie z.B. Video-Konferenz-Webapps, ermöglicht Ihnen die Compute Pressure API zu erkennen, unter welchem Druck das System derzeit steht. Das System wird jede Belastung so gut wie möglich handhaben, aber eine Zusammenarbeit zwischen System und App ist nützlich, um den Druck bestmöglich zu bewältigen. Diese API benachrichtigt Sie über Änderungen im Hochdruckzustand, sodass Sie Ihre Arbeitslasten anpassen können und trotz allem eine angenehme Benutzererfahrung bieten können. Das Signal wird proaktiv geliefert, wenn der Systemdruck entweder steigt oder sinkt, um eine rechtzeitige Anpassung zu ermöglichen.

Sie können diese Druckänderungssignale beispielsweise nutzen, um die Videoqualität zu reduzieren oder zu erhöhen oder die Anzahl der gleichzeitig angezeigten Video-Feeds zu ändern, um zu vermeiden, dass Videoframes fallen, Audioschnittstellen unterbrochen werden oder andere kritische Teile der Anwendung verzögert werden. Die Servicequalität Ihrer Webapp kann variieren, auch aufgrund von externen Faktoren und Apps zu unerwarteten Zeiten, aber idealerweise führt das nicht zu einem vollständigen Systemausfall, Eingabeverzögerungen oder Unempfindlichkeit. Stattdessen wird der Satz der aktivierten Funktionen und deren Qualitätsstufe gegen den Ressourcendruck des Endbenutzergeräts abgewogen. Es ist ähnlich wie bei Netzwerkauslastung, bei der eine Streaming-App sich an die verfügbare Bandbreite anpasst.

Weitere Anwendungsfälle sind:

- Web-Spiele, bei denen Sie die Qualität und Menge der 3D-Assets ausbalancieren könnten, die Bildrate, Auflösung, Tiefenschärfe usw. ändern, um geringe Latenz und stabile Bildraten sicherzustellen.
- Benutzeroberflächen, bei denen Sie Platzhalter statt realer Daten rendern könnten, wenn das System unter Druck steht, und den echten Inhalt rendern, sobald der Druck nachgelassen hat.

## Konzepte und Nutzung

Schnelle und angenehme Webanwendungen sollten Arbeitslasten ausgleichen, wenn die Rechenressourcen des Systems bei (fast) voller Kapazität genutzt werden. Das Ziel der Compute Pressure API ist es, nicht nur schlechter Benutzererfahrung für die Webapp selbst vorzubeugen, sondern auch zu verhindern, dass das Gerät des Benutzers zu heiß, zu laut oder der Akku in unakzeptabler Geschwindigkeit entladen wird. Daher wird empfohlen, diese API gegenüber Rückmelde-Mechanismen oder einzelnen Leistungsanpassungen vorzuziehen (zum Beispiel indem Sie die Frequenz von [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame) reduzieren), bei denen schlechte Benutzererfahrung möglicherweise gemildert, aber nicht proaktiv vermieden wird. Für die Messung und Segmentierung der Leistung von Benutzersitzungen nachträglich eignet sich die [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) API besser, um Aufgaben zu analysieren, die den UI-Thread 50 Millisekunden oder länger in Anspruch nehmen (siehe auch [Performance API](/de/docs/Web/API/Performance_API) für zusätzliche Leistungsbewertungs-APIs).

### Druckquellentypen

In Ihrer Webapp oder Website kämpfen verschiedene Aufgaben um die Rechenzeit der verschiedenen Verarbeitungseinheiten (CPU, GPU und andere spezialisierte Verarbeitungseinheiten). Die aktuelle Version der Compute Pressure API-Spezifikation definiert zwei Hauptquellentypen, die abgefragt werden können, um Druckinformationen zu sammeln:

- `"thermals"` repräsentiert den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` repräsentiert den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über alle Kerne. Dieser Zustand kann durch andere Apps und Seiten als die beobachtende Seite beeinflusst werden.

Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Verwenden Sie den statischen Hinweis [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static), um zu sehen, welche Quellentypen in Ihrem Browser verfügbar sind. Beachten Sie, dass die Verfügbarkeit auch von Ihrem Betriebssystem und Ihrer Hardware abhängen kann. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und überprüfen Sie auf einen `NotSupportedError`, um zu sehen, ob Druckbeobachtung möglich ist.

Die Compute Pressure API ist in den folgenden Kontexten verfügbar:

- [`Window`](/de/docs/Web/API/Window) (Haupt-Thread)
- [`Worker`](/de/docs/Web/API/Worker)
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- {{HTMLElement("iFrame")}} (wenn eine geeignete [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy/compute-pressure) bereitgestellt wird)

### Druckzustände

Die Compute Pressure API bietet hochrangige Druckzustände, die die Komplexitäten von Systemengpässen abstrahieren, die nicht ausreichend mit niedrigstufigen Metriken wie Prozessorgeschwindigkeit und Auslastung erklärt werden können. Tatsächlich sind Metriken für die CPU-Auslastung oft [irreführend](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Daher verwendet die Compute Pressure API menschenlesbare Druckzustände mit den folgenden Bedeutungen (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne merkliche negative Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was möglicherweise zu reduzierter Akkulaufzeit führen kann, sowie dazu, dass Lüfter (oder Systeme mit Lüftern) aktiv und hörbar werden. Abgesehen davon läuft das Zielgerät einwandfrei und kann zusätzliche Arbeiten übernehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind durchgehend stark erhöht. Das System kann als Gegenmaßnahme drosseln, um Thermik zu reduzieren.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist signifikant erhöht und es ist notwendig, es abzukühlen, um potenzielle Probleme zu vermeiden.

Die beitragenden Faktoren (das heißt, die zugrunde liegenden Systemmetriken) für die oben genannten Druckzustände sind nicht durch die Spezifikation definiert und können je nach der zugrunde liegenden Hardware und dem Plattformverhalten variieren. Die Spezifikation verlangt jedoch, dass die Änderung der beitragenden Faktoren erheblich sein muss, um ein Hin- und Herwechseln zwischen Zuständen zu vermeiden. Das bedeutet, dass Sie erwarten können, dass die API keine unterschiedlichen Zustände übermäßig oft berichtet, da sie nicht nur auf eine schwankende Systemmetrik reagieren.

### Sicherheits- und Datenschutzüberlegungen

Die Compute Pressure API wird durch die Richtlinie `"compute-pressure"` [kontrolliert](/de/docs/Web/HTTP/Permissions_Policy). Die Standard-Zulassungsliste ist `'self'`, was die Nutzung in gleichen Ursprungsframes ermöglicht, aber Drittanbieterinhalte daran hindert, die Funktion zu nutzen.

## Referenz

### Schnittstellen

Die folgenden Schnittstellen sind in der Compute Pressure API vorhanden, und die API-Oberfläche ist ähnlich wie bei anderen Beobachtern, wie z.B. [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), [`MutationObserver`](/de/docs/Web/API/MutationObserver), oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

- [`PressureObserver`](/de/docs/Web/API/PressureObserver) {{experimental_inline}}
  - : Benachrichtigt, wenn sich der Druck des Systems für eine bestimmte Anzahl von Quellen (z.B. die CPU) in einem vordefinierten Intervall ändert.
- [`PressureRecord`](/de/docs/Web/API/PressureRecord)
  - : Beschreibt den Drucktrend zu einem bestimmten Moment des Übergangs.

### Permission-Policy-Direktive

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} Direktive
  - : Kontrolliert den Zugriff auf die Compute Pressure API.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und handelt entsprechend, wann immer es eine Druckänderung gibt. Das Musterintervall ist auf 1000ms eingestellt, was bedeutet, dass es maximal einmal pro Sekunde Aktualisierungen geben wird.

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

- [Compute Pressure Demo](https://w3c.github.io/compute-pressure/demo/), die Mandelbrot-Sets und Worker verwendet, um künstlichen Druck für Testzwecke zu erzeugen.
