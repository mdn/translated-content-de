---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **Compute Pressure API** ist eine JavaScript-API, die es Ihnen ermöglicht, den Druck von Systemressourcen wie der CPU zu beobachten.

## Anwendungsfälle

In Echtzeitanwendungen, wie beispielsweise Videokonferenz-Webanwendungen, ermöglicht es die Compute Pressure API, den aktuellen Druck auf das System zu erkennen. Das System wird jeglichen Stress so gut wie möglich bewältigen, aber eine Zusammenarbeit zwischen System und Anwendung ist nützlich, um den Druck am besten zu handhaben. Diese API benachrichtigt Sie über Änderungen im Druckstatus auf hoher Ebene, sodass Sie Ihre Arbeitslast anpassen und dennoch eine angenehme Benutzererfahrung bieten können. Das Signal wird proaktiv geliefert, wenn der Systemdrucktrend entweder steigt oder nachlässt, um eine rechtzeitige Anpassung zu ermöglichen.

Sie können diese Druckänderungssignale beispielsweise verwenden, um die Videoqualität oder die Anzahl der gleichzeitig gezeigten Videostreams zu reduzieren oder zu erhöhen, um zu vermeiden, dass Videoframes verloren gehen, Audioaussetzer auftreten oder andere kritische Teile der Anwendung verzögert werden. Die Servicequalität Ihrer Web-App kann variieren, auch aufgrund von Druck durch externe Faktoren und Anwendungen zu unerwarteten Zeiten, idealerweise führt das jedoch nicht zu einem vollständigen Systemausfall, Eingabeverzögerungen oder Unreaktivität. Stattdessen wird das Set an aktivierten Funktionen und deren Qualitätsniveau in Einklang mit dem Ressourcendruck des Endgeräts gebracht. Es ist ähnlich wie beim Netzdruck, bei dem eine Streaming-App sich an die verfügbare Bandbreite anpasst.

Weitere Anwendungsfälle sind:

- Webspiele, bei denen Sie die Qualität und Anzahl der 3D-Assets ausbalancieren, die Bildrate, Auflösung, Schärfentiefe etc. ändern könnten, um eine geringe Latenz und stabile Bildrate sicherzustellen.
- Benutzeroberflächen, bei denen Sie Platzhalter anstelle der echten Daten rendern könnten, während das System unter Druck steht, und die echten Inhalte anzeigen, sobald der Druck nachgelassen hat.

## Konzepte und Anwendung

Schnelle und ansprechende Webanwendungen sollten die Arbeitslast ausgleichen, wenn die Rechenressourcen des Systems bei (nahezu) voller Kapazität genutzt werden. Das Ziel der Compute Pressure API ist es, eine schlechte Benutzererfahrung in der Webanwendung selbst zu verhindern, statt nur zu mildern, und auch, dass das Gerät des Nutzers nicht zu heiß, zu laut wird oder die Batterie in unakzeptabler Geschwindigkeit entleert. Daher wird empfohlen, diese API Mechanismen wie Feedback-Schleifen oder einzelne Leistungsanpassungen (zum Beispiel durch Senkung der Frequenz von [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)) vorzuziehen, bei denen die Benutzererfahrung möglicherweise gemildert, aber nicht proaktiv verhindert wird. Zur nachträglichen Messung und Segmentierung der Leistung von Benutzersitzungen ist die [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) API besser geeignet, um Aufgaben zu analysieren, die den UI-Thread für 50 Millisekunden oder mehr beanspruchen (siehe auch [Performance API](/de/docs/Web/API/Performance_API) für zusätzliche Performance-Mess-APIs).

### Druckquellentypen

In Ihrer Web-App oder Website kämpfen unterschiedliche Aufgaben um die Verarbeitungszeit verschiedener Verarbeitungseinheiten (CPU, GPU und andere spezialisierte Verarbeitungseinheiten). Die aktuelle Version der Compute Pressure API-Spezifikation definiert zwei Hauptquellentypen, die abgefragt werden können, um Druckinformationen zu sammeln:

- `"thermals"` repräsentiert den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` repräsentiert den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über alle ihre Kerne. Dieser Zustand kann von anderen Apps und Websites als der beobachtenden Seite beeinflusst werden.

Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Benutzen Sie den statischen Hinweis [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static), um zu sehen, welche Quellentypen Ihrem Browser zur Verfügung stehen. Beachten Sie, dass die Verfügbarkeit auch je nach Betriebssystem und Hardware unterschiedlich sein kann. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und prüfen Sie auf einen `NotSupportedError`, um zu sehen, ob Druckbeobachtung möglich ist.

Die Compute Pressure API ist in den folgenden Kontexten verfügbar:

- [`Window`](/de/docs/Web/API/Window) (Haupt-Thread)
- [`Worker`](/de/docs/Web/API/Worker)
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- {{HTMLElement("iframe")}} (wenn eine geeignete [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure) bereitgestellt wird)

### Druckzustände

Die Compute Pressure API stellt Druckzustände auf hoher Ebene bereit, die die Komplexitäten von Systemengpässen abstrahieren, die nicht adäquat durch niedrigstufige Metriken wie Prozessor-Taktfrequenz und Auslastung erklärt werden können. Tatsächlich sind Metriken zur CPU-Auslastung oft [irreführend](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Daher verwendet die Compute Pressure API menschenlesbare Druckzustände mit den folgenden Bedeutungen (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne merkliche negative Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Gerätedruck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was möglicherweise die Lebensdauer der Batterie verringert, sowie Lüfter (oder Systeme mit Lüftern) aktiv und hörbar macht. Abgesehen davon läuft das Zielgerät einwandfrei und kann zusätzliche Arbeit übernehmen.
- 🟡 `"serious"`: Der Gerätedruck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind dauerhaft stark erhöht. Das System kann als Gegenmaßnahme zur Reduktion der Wärmeleistung drosseln.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist signifikant erhöht, und es muss abkühlen, um mögliche Probleme zu vermeiden.

Die beitragenden Faktoren (das heißt, die zugrunde liegenden Systemmetriken) für die obigen Druckzustände sind nicht durch die Spezifikation definiert und können je nach zugrunde liegender Hardware und Plattformverhalten variieren. Die Spezifikation verlangt jedoch, dass die Änderung der beitragenden Faktoren erheblich sein muss, um ein häufiges Hin- und Herwechseln zwischen Zuständen zu vermeiden. Das bedeutet, dass Sie erwarten können, dass die API nicht übermäßig häufig unterschiedliche Zustände meldet, da sie nicht nur auf eine schwankende Systemmetrik reagiert.

### Sicherheits- und Datenschutzüberlegungen

Die Compute Pressure API wird durch die `"compute-pressure"`-Richtlinie [richtliniengesteuert](/de/docs/Web/HTTP/Guides/Permissions_Policy). Die Standard-Whitelist ist `'self'`, was die Nutzung in gleich-originären, verschachtelten Frames erlaubt, aber verhindert, dass Drittinhalte die Funktionalität nutzen.

## Referenz

### Schnittstellen

Die folgenden Schnittstellen sind in der Compute Pressure API vorhanden und die API-Oberfläche ist ähnlich wie bei anderen Beobachtern, wie [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), [`MutationObserver`](/de/docs/Web/API/MutationObserver) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

- [`PressureObserver`](/de/docs/Web/API/PressureObserver) {{experimental_inline}}
  - : Benachrichtigt, wenn sich der Systemdruck für eine angegebene Anzahl von Quellen (z. B. die CPU) in einem vordefinierten Abtastintervall ändert.
- [`PressureRecord`](/de/docs/Web/API/PressureRecord)
  - : Beschreibt den Drucktrend zu einem bestimmten Moment des Übergangs.

### Permission-Policy-Richtlinie

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}}-Richtlinie
  - : Kontrolliert den Zugriff auf die Compute Pressure API.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und reagiert jedes Mal, wenn eine Druckänderung auftritt. Das Abtastintervall ist auf 1000ms festgelegt, was bedeutet, dass maximal jede Sekunde ein Update erfolgt.

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
