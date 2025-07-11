---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **Compute Pressure API** ist eine JavaScript-API, die es Ihnen ermöglicht, den Druck von Systemressourcen wie der CPU zu beobachten.

## Anwendungsfälle

In Echtzeitanwendungen, wie z.B. Videokonferenz-Web-Apps, ermöglicht Ihnen die Compute Pressure API zu erkennen, welchem Druck das System derzeit ausgesetzt ist. Das System wird mit jeglichem Stress so gut es geht umgehen, aber eine Zusammenarbeit zwischen System und App ist nützlich, um den Druck bestmöglich zu bewältigen. Diese API benachrichtigt Sie über hochrangige Änderungen des Druckzustands, sodass Sie Ihre Arbeitslasten anpassen und trotzdem eine angenehme Benutzererfahrung bieten können. Das Signal wird proaktiv gesendet, wenn der Systemdrucktrend entweder steigt oder nachlässt, um eine rechtzeitige Anpassung zu ermöglichen.

Sie können diese Druckwechselsignale z.B. nutzen, um die Videoqualität zu reduzieren oder zu erhöhen oder die Anzahl der gleichzeitig angezeigten Videostreams zu verringern, um zu vermeiden, dass Videoruckler auftreten, Audioschnitten zu hören sind oder andere kritische Teile der Anwendung verzögert werden. Die Servicequalität Ihrer Web-App kann auch durch Druck von äußeren Faktoren und Anwendungen zu unerwarteten Zeiten variieren, aber idealerweise führt dies nicht zu einem totalen Systemausfall, Eingabeverzögerung oder Unansprechbarkeit. Stattdessen wird die Menge der aktivierten Funktionen und deren Qualitätsniveau gegen den Ressourcendruck des Geräts des Endnutzers abgewogen. Dies ist ähnlich wie bei Druck auf das Netzwerk, bei dem eine Streaming-App sich an die verfügbare Bandbreite anpasst.

Weitere Anwendungsfälle sind:

- Web-Spiele, bei denen Sie die Qualität und Anzahl der 3D-Assets ausbalancieren, die Bildrate, Auflösung, Tiefenschärfe usw. ändern können, um niedrige Latenzen und eine stabile Bildrate sicherzustellen.
- Benutzeroberflächen, bei denen Sie Platzhalter statt echter Daten rendern können, während das System unter Druck steht, und die echten Inhalte rendern, sobald der Druck nachlässt.

## Konzepte und Nutzung

Schnelle und ansprechende Webanwendungen sollten die Arbeitslasten ausbalancieren, wenn die Rechenressourcen des Systems mit (nahezu) voller Kapazität genutzt werden. Ziel der Compute Pressure API ist es, schlechte Benutzererfahrungen nicht nur zu mildern, sondern zu verhindern, dass das Gerät des Benutzers zu heiß, zu laut wird oder die Batterie in unakzeptabler Geschwindigkeit entladen wird. Daher wird empfohlen, diese API gegenüber Rückmeldemechanismen oder einzelnen Leistungsanpassungen (z.B. durch das Absenken der Frequenz von [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)) zu bevorzugen, bei denen schlechte Benutzererfahrungen möglicherweise gemildert, jedoch nicht proaktiv vermieden werden. Um die Leistung von Benutzersitzungen im Nachhinein zu messen und zu segmentieren, eignet sich die [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) API besser zur Analyse von Aufgaben, die den UI-Thread 50 Millisekunden oder länger belegen (siehe auch [Performance API](/de/docs/Web/API/Performance_API) für zusätzliche Leistungsmesstools).

### Druckquellentypen

In Ihrer Web-App oder Webseite konkurrieren verschiedene Aufgaben um die Prozesszeit unterschiedlicher Verarbeitungseinheiten (CPU, GPU und andere spezialisierte Verarbeitungseinheiten). Die aktuelle Version der Compute Pressure API-Spezifikation definiert zwei Hauptquellenarten, die abgefragt werden können, um Druckinformationen zu sammeln:

- `"thermals"` steht für den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` steht für den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über all ihre Kerne hinweg. Dieser Zustand kann von anderen Apps und Webseiten als der beobachtenden beeinflusst werden.

Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Verwenden Sie den statischen Hinweis [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static), um zu sehen, welche Quellentypen in Ihrem Browser verfügbar sind. Beachten Sie, dass die Verfügbarkeit auch durch Ihr Betriebssystem und Ihre Hardware variieren kann. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und prüfen Sie auf einen `NotSupportedError`, um festzustellen, ob Druckbeobachtung möglich ist.

Die Compute Pressure API ist in den folgenden Kontexten verfügbar:

- [`Window`](/de/docs/Web/API/Window) (Haupt-Thread)
- [`Worker`](/de/docs/Web/API/Worker)
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- {{HTMLElement("iframe")}} (sofern eine geeignete [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure) vorhanden ist)

### Druckzustände

Die Compute Pressure API stellt hochrangige Druckzustände bereit, die die Komplexitäten von Systemengpässen abstrahieren, die mit niedrigrangigen Metriken wie Prozessortaktfrequenz und Auslastung nicht adäquat erklärt werden können. Tatsächlich sind Metriken zur CPU-Auslastung oft [irreführend](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Daher verwendet die Compute Pressure API lesbare Druckzustände mit den folgenden Bedeutungen (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Niveau ohne spürbare negative Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was möglicherweise zu einer verkürzten Batterielaufzeit führt, sowie zum Aktivieren und Hören von Lüftern (oder Systemen mit Lüftern). Abgesehen davon läuft das Zielgerät einwandfrei und kann zusätzliche Aufgaben übernehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts ist durchgängig stark erhöht. Das System kann als Gegenmaßnahme gedrosselt werden, um die Thermik zu reduzieren.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist deutlich erhöht und es muss heruntergekühlt werden, um potenzielle Probleme zu vermeiden.

Die beitragenden Faktoren (d.h. die zugrunde liegenden Systemmetriken) für die oben genannten Druckzustände sind nicht von der Spezifikation definiert und können je nach zugrunde liegender Hardware und Plattformverhalten variieren. Die Spezifikation verlangt jedoch, dass die Änderung der beitragenden Faktoren erheblich sein muss, um ein ständiges Hin- und Herwechseln zwischen den Zuständen zu vermeiden. Das bedeutet, Sie können davon ausgehen, dass die API nicht zu oft unterschiedliche Zustände meldet, da sie nicht nur auf eine einzige schwankende Systemmetrik reagiert.

### Sicherheits- und Datenschutzüberlegungen

Die Compute Pressure API ist durch die [Policy gesteuert](/de/docs/Web/HTTP/Guides/Permissions_Policy) durch die `"compute-pressure"`-Direktive. Ihre Standard-Erlaubnisliste ist `'self'`, was die Nutzung in gleichartigen eingebetteten Frames erlaubt, aber Drittanbieterinhalte daran hindert, das Feature zu nutzen.

## Referenz

### Schnittstellen

Die folgenden Schnittstellen sind in der Compute Pressure API vorhanden und die API-Oberfläche ähnelt anderen Beobachtern wie [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), [`MutationObserver`](/de/docs/Web/API/MutationObserver) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

- [`PressureObserver`](/de/docs/Web/API/PressureObserver) {{experimental_inline}}
  - : Benachrichtigt, wenn sich der Druck des Systems für eine angegebene Anzahl von Quellen (z.B. die CPU) bei einem vordefinierten Abtastintervall ändert.
- [`PressureRecord`](/de/docs/Web/API/PressureRecord)
  - : Beschreibt den Drucktrend zu einem bestimmten Übergangsmoment.

### Permissions-Policy-Direktive

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}}-Direktive
  - : Steuert den Zugriff auf die Compute Pressure API.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und ergreift Maßnahmen, wann immer es zu einer Druckänderung kommt. Das Abtastintervall ist auf 1000ms eingestellt, was bedeutet, dass es höchstens einmal pro Sekunde Aktualisierungen gibt.

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

- [Compute Pressure-Demo](https://w3c.github.io/compute-pressure/demo/), die Mandelbrot-Mengen und Workers verwendet, um künstlichen Druck zu Testzwecken zu erzeugen.
