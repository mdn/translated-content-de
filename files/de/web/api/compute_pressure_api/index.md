---
title: Compute Pressure API
slug: Web/API/Compute_Pressure_API
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{DefaultAPISidebar("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **Compute Pressure API** ist eine JavaScript-API, die es Ihnen ermöglicht, den Druck von Systemressourcen wie der CPU zu überwachen.

## Anwendungsfälle

In Echtzeitanwendungen, wie beispielsweise Video-Konferenz-Web-Apps, ermöglicht die Compute Pressure API das Erkennen, welchen Druck das System aktuell erfährt. Das System wird jeglichen Stress so gut wie möglich handhaben, aber eine Zusammenarbeit zwischen System und App ist nützlich, um den Druck bestmöglich zu bewältigen. Diese API benachrichtigt Sie über Änderungen des Druckzustands auf höherer Ebene, sodass Sie Ihre Arbeitslasten anpassen und dennoch ein angenehmes Benutzererlebnis bieten können. Das Signal wird proaktiv geliefert, wenn der Systemdrucktrend entweder steigt oder sinkt, um eine rechtzeitige Anpassung zu ermöglichen.

Sie können diese Druckänderungssignale beispielsweise nutzen, um die Videoqualität oder die Anzahl der gleichzeitig angezeigten Videostreams zu reduzieren oder zu erhöhen, um das Auslassen von Videobildern, Audiounterbrechungen oder Verzögerungen anderer kritischer Teile der Anwendung zu vermeiden. Die Dienstqualität Ihrer Web-App kann variieren, auch aufgrund von Druck durch externe Faktoren und Apps zu unerwarteten Zeiten, aber idealerweise führt dies nicht zu einem vollständigen Systemausfall, Eingabeverzögerungen oder Unempfindlichkeit. Stattdessen wird die Menge der aktivierten Funktionen und deren Qualitätsstufe gegen den Ressourcendruck des Endgeräts des Nutzers ausbalanciert. Es ist ähnlich wie beim Netzwerkdruck, bei dem eine Streaming-App sich an die verfügbare Bandbreite anpasst.

Weitere Anwendungsfälle sind:

- Webspiele, bei denen Sie die Qualität und Menge der 3D-Assets ausbalancieren, die Bildrate, Auflösung, Tiefenschärfe usw. ändern könnten, um geringe Latenz und stabile Bildrate zu gewährleisten.
- Benutzeroberflächen, bei denen Sie Platzhalter anstelle von echten Daten rendern könnten, während das System unter Druck steht, und den echten Inhalt rendern, sobald der Druck nachgelassen hat.

## Konzepte und Verwendung

Schnelle und angenehme Webanwendungen sollten die Arbeitslasten ausgleichen, wenn die Rechenressourcen des Systems bei (nahezu) voller Kapazität genutzt werden. Das Ziel der Compute Pressure API ist es, ein schlechtes Benutzererlebnis in der Web-App selbst zu verhindern, anstatt es lediglich zu lindern, und auch das Gerät des Nutzers nicht zu heiß, zu laut oder unangemessen schnell den Akku entleeren zu lassen. Daher wird empfohlen, diese API über Rückkopplungsmechanismen oder einzelne Leistungsanpassungen (zum Beispiel durch Senken der Frequenz von [`window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)) zu bevorzugen, bei denen ein schlechtes Benutzererlebnis möglicherweise gelindert, aber nicht proaktiv vermieden wird. Um die Leistung von Benutzersitzungen nachträglich zu messen und zu segmentieren, eignet sich die [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-API besser, um Aufgaben zu analysieren, die den UI-Thread für 50 Millisekunden oder länger belegen (siehe auch [Performance API](/de/docs/Web/API/Performance_API) für weitere Leistungsmesstools).

### Druckquellentypen

In Ihrer Web-App oder Website kämpfen unterschiedliche Aufgaben um die Verarbeitungszeit verschiedener Verarbeitungseinheiten (CPU, GPU und andere spezialisierte Verarbeitungseinheiten). Die aktuelle Version der Compute Pressure API-Spezifikation definiert zwei Hauptquellentypen, die abgefragt werden können, um Druckinformationen zu sammeln:

- `"thermals"` repräsentiert den globalen thermischen Zustand des gesamten Systems.
- `"cpu"` repräsentiert den durchschnittlichen Druck der zentralen Verarbeitungseinheit (CPU) über alle ihre Kerne. Dieser Zustand kann durch andere Apps und Seiten als die beobachtende Seite beeinflusst werden.

Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Verwenden Sie den statischen Hinweis [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static), um zu sehen, welche Quellentypen für Ihren Browser verfügbar sind. Beachten Sie, dass die Verfügbarkeit auch von Ihrem Betriebssystem und Ihrer Hardware abhängig sein kann. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und prüfen Sie auf einen `NotSupportedError`, um zu sehen, ob die Druckbeobachtung möglich ist.

Die Compute Pressure API ist in den folgenden Kontexten verfügbar:

- [`Window`](/de/docs/Web/API/Window) (Haupt-Thread)
- [`Worker`](/de/docs/Web/API/Worker)
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- {{HTMLElement("iFrame")}} (falls eine geeignete [Permissions-Policy](/de/docs/Web/HTTP/Headers/Permissions-Policy/compute-pressure) bereitgestellt wird)

### Druckzustände

Die Compute Pressure API bietet hochrangige Druckzustände, die die Komplexitäten von Systemengpässen abstrahieren, die nicht ausreichend mit niedrigen Metriken wie Prozessortaktrate und Auslastung erklärt werden können. Tatsächlich sind Metriken zur CPU-Auslastung oft [irreführend](https://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html). Daher verwendet die Compute Pressure API menschenlesbare Druckzustände mit den folgenden Bedeutungen (siehe auch die [Spezifikation](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: Die Bedingungen des Zielgeräts sind auf einem akzeptablen Level ohne merkliche nachteilige Auswirkungen auf den Benutzer.
- 🟢 `"fair"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts sind leicht erhöht, was möglicherweise zu einer verkürzten Akkulaufzeit sowie zu aktiven und hörbaren Lüftern (oder Systemen mit Lüftern) führen kann. Abgesehen davon läuft das Zielgerät einwandfrei und kann zusätzliche Arbeit übernehmen.
- 🟡 `"serious"`: Der Druck, die Temperatur und/oder der Energieverbrauch des Zielgeräts ist konsistent stark erhöht. Das System drosselt möglicherweise als Gegenmaßnahme, um die Wärmeentwicklung zu reduzieren.
- 🔴 `"critical"`: Die Temperatur des Zielgeräts oder Systems ist erheblich erhöht und muss abgekühlt werden, um potenzielle Probleme zu vermeiden.

Die beitragenden Faktoren (das heißt, die zugrundeliegenden Systemmetriken) für die oben genannten Druckzustände sind nicht durch die Spezifikation definiert und können je nach zugrundeliegender Hardware und Plattformverhalten variieren. Die Spezifikation erfordert jedoch, dass die Änderung der beitragenden Faktoren substanziell sein muss, um ein Pendeln zwischen Zuständen zu vermeiden. Das bedeutet, dass Sie erwarten können, dass die API nicht übermäßig oft unterschiedliche Zustände meldet, da sie nicht nur auf eine schwankende Systemmetrik reagieren.

### Sicherheits- und Datenschutzüberlegungen

Die Compute Pressure API ist [richtliniengesteuert](/de/docs/Web/HTTP/Permissions_Policy) durch die `"compute-pressure"`-Direktive. Ihre Standard-Erlaubnisliste ist `'self'`, was die Nutzung in gleichoriginären eingebetteten Frames erlaubt, aber Drittanbieter-Inhalt daran hindert, die Funktion zu nutzen.

## Referenz

### Schnittstellen

Die folgenden Schnittstellen sind in der Compute Pressure API vorhanden und die API-Oberfläche ähnelt anderen Beobachtern, wie [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver), [`MutationObserver`](/de/docs/Web/API/MutationObserver) oder [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

- [`PressureObserver`](/de/docs/Web/API/PressureObserver) {{experimental_inline}}
  - : Benachrichtigt, wenn sich der Druck des Systems für eine bestimmte Anzahl von Quellen (z. B. die CPU) in einem vordefinierten Abtastintervall ändert.
- [`PressureRecord`](/de/docs/Web/API/PressureRecord)
  - : Beschreibt den Drucktrend zu einem bestimmten Übergangsmoment.

### Permission-Policy-Direktive

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}}-Direktive
  - : Kontrolliert den Zugriff auf die Compute Pressure API.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und ergreift Maßnahmen, wann immer es eine Druckänderung gibt. Das Abtastintervall ist auf 1000 ms eingestellt, was bedeutet, dass es höchstens jede Sekunde Aktualisierungen gibt.

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

- [Compute Pressure-Demonstration](https://w3c.github.io/compute-pressure/demo/), die Mandelbrot-Mengen und Worker verwendet, um künstlichen Druck zu Testzwecken zu erzeugen.
