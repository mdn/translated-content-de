---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
l10n:
  sourceCommit: 55a1f6939679773b8f8178eb0dbee20bc8bfdeca
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **Compute Pressure API** ist eine JavaScript-API, die es Ihnen ermöglicht, die Auslastung von Systemressourcen wie der CPU zu beobachten.

## Anwendungsfälle

In Echtzeitanwendungen, wie z.B. Videoanruf-Web-Apps, ermöglicht die Compute Pressure API das Erkennen der aktuellen Systembelastung. Das System wird jede Belastung so gut wie möglich handhaben, aber eine Zusammenarbeit zwischen System und App ist nützlich, um die Belastung optimal zu bewältigen. Diese API benachrichtigt Sie über hochrangige Änderungen des Auslastungszustands, damit Sie Ihre Arbeitslasten anpassen und weiterhin ein angenehmes Benutzererlebnis bieten können. Das Signal wird proaktiv geliefert, wenn der Auslastungstrend des Systems entweder ansteigt oder nachlässt, um eine rechtzeitige Anpassung zu ermöglichen.

Sie können diese Signale zur Änderung der Auslastung beispielsweise nutzen, um die Videoqualität oder die Anzahl der gleichzeitig angezeigten Video-Feeds zu reduzieren oder zu erhöhen, um zu verhindern, dass Videoframes ausfallen, Audioaussetzer auftreten oder andere kritische Teile der Anwendung verzögert werden. Die Dienstqualität Ihrer Web-App kann variieren, auch aufgrund externer Faktoren und Apps zu unerwarteten Zeiten, aber idealerweise führt dies nicht zu einem totalen Systemausfall, Eingabeverzögerungen oder Unempfindlichkeit. Stattdessen wird der Satz aktivierter Funktionen und deren Qualitätsniveau gegen die Ressourcenauslastung des Endbenutzergeräts abgewogen. Dies ist ähnlich wie bei der Netzauslastung, bei der sich eine Streaming-App an die verfügbare Bandbreite anpasst.

Weitere Anwendungsfälle sind:

- Webspiele, bei denen Sie die Qualität und Menge der 3D-Assets ausbalancieren, die Framerate ändern, die Auflösung, die Tiefenschärfe usw., um niedrige Latenz und stabile Frameraten sicherzustellen.
- Benutzeroberflächen, bei denen Sie Platzhalter statt echter Daten rendern könnten, während das System belastet ist, und den echten Inhalt rendern, sobald die Belastung nachlässt.

## Konzepte und Anwendung

Schnelle und angenehme Webanwendungen sollten Arbeitslasten ausgleichen, wenn die Rechenressourcen des Systems vollständig (oder fast vollständig) ausgelastet sind. Das Ziel der Compute Pressure API ist es, eine schlechte Benutzererfahrung in der Webanwendung selbst und auch für das Benutzergerät zu verhindern, damit es nicht zu heiß, zu laut oder der Akku in unangemessener Weise entladen wird. Daher ist es ratsam, diese API gegenüber Rückkopplungsmechanismen oder einzelnen Leistungsanpassungen zu bevorzugen (z.B. durch Verringern der Frequenz von {{domxref("window.requestAnimationFrame")}}), wo schlechte Benutzererfahrung möglicherweise abgeschwächt, aber nicht proaktiv vermieden wird. Zum Messen und Segmentieren der Leistung von Benutzersitzungen im Nachhinein ist die {{domxref("PerformanceLongTaskTiming")}} API besser geeignet, um Aufgaben zu analysieren, die den UI-Thread für 50 Millisekunden oder mehr beanspruchen (siehe auch [Performance API](/de/docs/Web/API/Performance_API) für zusätzliche Leistungsmesstechniken).

### Quellenarten der Auslastung

In Ihrer Web-App oder Website kämpfen verschiedene Aufgaben um die Rechenzeit verschiedener Verarbeitungs-einheiten (CPU, GPU und andere spezialisierte Verarbeitungseinheiten). Die aktuelle Version der Compute Pressure API-Spezifikation definiert zwei Hauptquellenarten, die abgefragt werden können, um Belastungsinformationen zu sammeln:

- `"thermals"` repräsentiert den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` repräsentiert den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über alle ihre Kerne. Dieser Zustand kann durch andere Apps und Websites als die beobachtende Website beeinflusst werden.

Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Verwenden Sie den statischen {{domxref("PressureObserver.knownSources_static", "PressureObserver.knownSources")}} Hinweis, um zu sehen, welche Quellentypen in Ihrem Browser verfügbar sind. Beachten Sie, dass die Verfügbarkeit auch von Ihrem Betriebssystem und Ihrer Hardware abhängen kann. Rufen Sie {{domxref("PressureObserver.observe()", "observe()")}} auf und prüfen Sie auf einen `NotSupportedError`, um festzustellen, ob die Beobachtung der Auslastung möglich ist.

Die Compute Pressure API ist in den folgenden Kontexten verfügbar:

- {{domxref("Window")}} (Hauptthread)
- {{domxref("Worker")}}
- {{domxref("SharedWorker")}}
- {{HTMLElement("iFrame")}} (wenn eine geeignete [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy/compute-pressure) bereitgestellt wird)

### Auslastungszustände

Die Compute Pressure API liefert hochrangige Auslastungszustände, die die Komplexität von Systemengpässen abstrahieren, die nicht angemessen mit niederwertigen Metriken wie Prozessortaktgeschwindigkeit und -nutzung erklärt werden können. Tatsächlich sind Metriken zur CPU-Auslastung oft [irreführend](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Daher verwendet die Compute Pressure API lesbare Auslastungszustände mit den folgenden Semantiken (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne merkliche nachteilige Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was möglicherweise zu einer verkürzten Batterielebensdauer sowie zu aktiven und hörbaren Lüftern (oder Systemen mit Lüftern) führt. Abgesehen davon funktioniert das Zielgerät einwandfrei und kann zusätzliche Arbeit übernehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts ist durchgehend stark erhöht. Das System könnte als Gegenmaßnahme zur Reduzierung der Thermik gedrosselt werden.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder -systems ist erheblich erhöht und muss heruntergekühlt werden, um mögliche Probleme zu vermeiden.

Die beitragenden Faktoren (d.h. die zugrunde liegenden Systemmetriken) für die obigen Auslastungszustände sind nicht in der Spezifikation definiert und können je nach zugrunde liegender Hardware und Plattformverhalten variieren. Die Spezifikation verlangt jedoch, dass die Änderung der beitragenden Faktoren erheblich sein muss, um ein Hin- und Herschwanken zwischen den Zuständen zu vermeiden. Dies bedeutet, dass Sie davon ausgehen können, dass die API nicht zu oft unterschiedliche Zustände meldet, da sie nicht nur auf eine schwankende Systemmetrik reagieren.

### Sicherheits- und Datenschutzüberlegungen

Die Compute Pressure API wird durch die `"compute-pressure"`-Direktive [politik-kontrolliert](/de/docs/Web/HTTP/Permissions_Policy). Ihre standardmäßige Erlaubnisliste ist `'self'`, was die Nutzung in nested Frames derselben Herkunft erlaubt, aber verhindert, dass Drittanbieter-Inhalte die Funktion nutzen.

## Referenz

### Schnittstellen

Die folgenden Schnittstellen sind in der Compute Pressure API vorhanden, und die API-Oberfläche ist ähnlich wie bei anderen Beobachtern, wie {{domxref("IntersectionObserver")}}, {{domxref("MutationObserver")}}, oder {{domxref("PerformanceObserver")}}.

- {{domxref("PressureObserver")}} {{experimental_inline}}
  - : Benachrichtigt, wenn sich die Auslastung des Systems für eine bestimmte Anzahl von Quellen (z.B. die CPU) in einem vordefinierten Stichprobenintervall ändert.
- {{domxref("PressureRecord")}}
  - : Beschreibt den Auslastungstrend zu einem bestimmten Übergangsmoment.

### Permission-Policy-Direktive

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} Direktive
  - : Steuert den Zugriff auf die Compute Pressure API.

## Beispiele

### Aktuelle Auslastung protokollieren

Dieses Beispiel erstellt einen {{domxref("PressureObserver")}} und ergreift Maßnahmen, wann immer eine Belastungsänderung eintritt. Das Probeintervall wird auf 1000 ms festgelegt, was bedeutet, dass höchstens jede Sekunde Updates erfolgen.

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

- [Compute Pressure Demo](https://w3c.github.io/compute-pressure/demo/), die Mandelbrot-Mengen und Worker verwendet, um künstlichen Druck zu Testzwecken zu erzeugen.
