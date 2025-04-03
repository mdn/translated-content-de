---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **Compute Pressure API** ist eine JavaScript-API, die es Ihnen ermöglicht, den Druck von Systemressourcen wie der CPU zu überwachen.

## Anwendungsfälle

In Echtzeitanwendungen, wie etwa Web-Apps für Videokonferenzen, ermöglicht die Compute Pressure API das Erkennen des aktuellen Drucks, dem das System ausgesetzt ist. Das System wird jeglichem Stress so gut wie möglich begegnen, aber eine Zusammenarbeit zwischen System und App ist nützlich, um den Druck bestmöglich zu handhaben. Diese API benachrichtigt Sie über Änderungen in hochrangigen Druckzuständen, sodass Sie Ihre Workloads anpassen und dennoch eine angenehme Benutzererfahrung bieten können. Das Signal wird proaktiv geliefert, wenn der Systemdrucktrend entweder steigt oder nachlässt, um eine rechtzeitige Anpassung zu ermöglichen.

Sie können diese Drucksignaländerungen verwenden, um beispielsweise die Videoqualität zu reduzieren oder zu erhöhen oder die Anzahl der gleichzeitig angezeigten Video-Feeds zu ändern, um das Fallenlassen von Videoframes, Audioaussetzer oder Verzögerungen in anderen kritischen Teilen der Anwendung zu vermeiden. Die Dienstgüte Ihrer Web-App kann variieren, auch aufgrund von Druck durch externe Faktoren und Apps zu unerwarteten Zeiten, aber idealerweise führt das nicht zu einem totalen Systemausfall, Eingabeverzögerungen oder Unempfänglichkeit. Stattdessen wird das Set an aktivierten Funktionen und deren Qualitätsniveau gegen den Ressourcendruck des Endnutzergeräts abgewogen. Es ist ähnlich wie beim Netzwerkdruck, bei dem sich eine Streaming-App an die verfügbare Bandbreite anpasst.

Weitere Anwendungsfälle sind:

- Webspiele, bei denen Sie die Qualität und Anzahl von 3D-Assets ausgleichen, die Bildrate, Auflösung, Tiefenschärfe usw. ändern könnten, um eine niedrige Latenz und stabile Bildraten zu gewährleisten.
- Benutzeroberflächen, bei denen Sie Platzhalter anstelle von echten Daten rendern könnten, während das System unter Druck steht, und den echten Inhalt rendern, sobald der Druck nachgelassen hat.

## Konzepte und Nutzung

Schnelle und angenehme Webanwendungen sollten Workloads ausgleichen, wenn die Rechenressourcen des Systems bei (nahezu) voller Kapazität genutzt werden. Das Ziel der Compute Pressure API ist es, schlechte Benutzererfahrung in der Webanwendung selbst zu verhindern und zu vermeiden, dass das Gerät des Benutzers zu heiß, zu laut wird oder die Batterie in unzumutbarem Maße entleert wird. Daher wird empfohlen, diese API gegenüber Feedback-Mechanismen oder einzelnen Leistungsanpassungen zu bevorzugen (zum Beispiel durch das Verringern der Frequenz von [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)), wo möglicherweise schlechte Benutzererfahrungen gemildert, aber nicht proaktiv vermieden werden. Für die Messung und Segmentierung der Leistung von Benutzersitzungen im Nachhinein eignet sich die [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) API besser, um Aufgaben zu analysieren, die den UI-Thread für 50 Millisekunden oder mehr beanspruchen (siehe auch [Performance API](/de/docs/Web/API/Performance_API) für zusätzliche Leistungsmesstechniken).

### Druckquellentypen

In Ihrer Webanwendung oder Website konkurrieren verschiedene Aufgaben um die Rechenzeit verschiedener Verarbeitungseinheiten (CPU, GPU und andere spezialisierte Verarbeitungseinheiten). Die aktuelle Version der Compute Pressure API-Spezifikation definiert zwei hauptsächliche Quellenarten, die abgefragt werden können, um Druckinformationen zu sammeln:

- `"thermals"` repräsentiert den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` repräsentiert den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über alle ihre Kerne. Dieser Zustand kann von anderen Apps und Websites als der beobachtenden beeinflusst werden.

Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Verwenden Sie den statischen Hinweis [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static), um zu sehen, welche Quellentypen in Ihrem Browser verfügbar sind. Beachten Sie, dass die Verfügbarkeit auch je nach Betriebssystem und Hardware variieren kann. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und überprüfen Sie einen `NotSupportedError`, um festzustellen, ob eine Druckbeobachtung möglich ist.

Die Compute Pressure API ist in den folgenden Kontexten verfügbar:

- [`Window`](/de/docs/Web/API/Window) (Haupt-Thread)
- [`Worker`](/de/docs/Web/API/Worker)
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- {{HTMLElement("iframe")}} (wenn eine geeignete [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure) bereitgestellt wird)

### Druckzustände

Die Compute Pressure API stellt hochrangige Druckzustände zur Verfügung, die die Komplexität von Systemengpässen abstrahieren, die nicht ausreichend durch niedrigstufige Metriken wie Prozessortaktrate und Auslastung erklärt werden können. Tatsächlich sind Metriken zur CPU-Auslastung oft [irreführend](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Daher verwendet die Compute Pressure API menschenlesbare Druckzustände mit den folgenden Bedeutungen (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne merkliche negative Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was möglicherweise zu einer verkürzten Batterielaufzeit und dem Aktivieren hörbarer Lüfter (oder Systemen mit Lüftern) führt. Abgesehen davon läuft das Zielgerät reibungslos und kann zusätzliche Arbeit übernehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind konstant stark erhöht. Das System könnte als Gegenmaßnahme drosseln, um die Temperatur zu senken.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist erheblich erhöht und es muss abgekühlt werden, um mögliche Probleme zu vermeiden.

Die beitragenden Faktoren (d.h. die zugrunde liegenden Systemmetriken) für die oben genannten Druckzustände sind nicht durch die Spezifikation definiert und können je nach zugrunde liegender Hardware und Plattformverhalten variieren. Die Spezifikation erfordert jedoch, dass die Änderung der beitragenden Faktoren erheblich sein muss, um ein Wechseln zwischen Zuständen zu vermeiden. Das bedeutet, dass Sie erwarten können, dass die API nicht zu oft unterschiedliche Zustände meldet, da sie nicht nur auf eine schwankende Systemmetrik reagiert.

### Sicherheits- und Datenschutzüberlegungen

Die Compute Pressure API wird durch die [Policy Controlled](/de/docs/Web/HTTP/Guides/Permissions_Policy) `"compute-pressure"` Direktive gesteuert. Die Standard-Zugangsliste ist `'self'`, was die Nutzung in gleichursprünglichen verschachtelten Frames erlaubt, jedoch verhindert, dass Drittinhalte die Funktion verwenden.

## Referenz

### Schnittstellen

Die folgenden Schnittstellen sind in der Compute Pressure API vorhanden und die API-Oberfläche ähnelt anderen Observern, wie [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), [`MutationObserver`](/de/docs/Web/API/MutationObserver) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

- [`PressureObserver`](/de/docs/Web/API/PressureObserver) {{experimental_inline}}
  - : Benachrichtigt, wenn sich der Systemdruck für eine angegebene Anzahl von Quellen (z. B. die CPU) in einem vordefinierten Abtastintervall ändert.
- [`PressureRecord`](/de/docs/Web/API/PressureRecord)
  - : Beschreibt den Drucktrend zu einem bestimmten Übergangszeitpunkt.

### Permission-Policy-Direktive

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} Direktive
  - : Steuert den Zugriff auf die Compute Pressure API.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und führt Aktionen aus, wann immer eine Druckänderung auftritt. Das Abtastintervall ist auf 1000 ms festgelegt, was bedeutet, dass mindestens alle Sekunde Updates vorgenommen werden.

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
