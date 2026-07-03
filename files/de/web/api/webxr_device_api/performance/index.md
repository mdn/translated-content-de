---
title: WebXR-Leitfaden zur Leistungsoptimierung
slug: Web/API/WebXR_Device_API/Performance
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR-Anwendungen beinhalten mehrere Technologien, die sehr empfindlich gegenüber Leistungsbeschränkungen sein können. Daher müssen Sie möglicherweise Anpassungen oder Kompromisse vornehmen, um die Leistung Ihrer WebXR-Anwendung zu optimieren, damit sie auf einer möglichst breiten Palette von Zielgeräten so nutzbar wie möglich ist. In diesem Leitfaden werden wir eine Vielzahl von Vorschlägen und Empfehlungen untersuchen, die Ihnen helfen werden, Ihre WebXR-App so performant wie möglich zu gestalten.

## Rendering-Tipps

Allgemeine Hinweise, wie die Begrenzung der Anzahl der unterschiedlichen Schleifen während des Renderings, Vermeidung unnötiger Zeichnung usw.

Wahrscheinlich können auch Inhalte aus diesem [Erklärungsdokument im Spezifikations-Repository](https://github.com/immersive-web/webxr/blob/master/explainer.md#changing-the-field-of-view-for-inline-sessions) enthalten sein.

## Verwaltung der Rendering-Qualität

Dieser Abschnitt basiert teilweise auf diesem [Erklärungsdokument im Spezifikations-Repository](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-rendering-quality).

## Verwaltung der Bildrate

Inhalte zur Verwaltung der Bildrate.

## Verwaltung der Nutzung von Tiefen

Dieser Abschnitt kombiniert Informationen aus diesem [Erklärungsdokument](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-depth-precision) und diesem [hier](https://github.com/immersive-web/webxr/blob/master/explainer.md#preventing-the-compositor-from-using-the-depth-buffer) im Spezifikations-Repository.

## Optimierung der Speichernutzung

Bei der Verwendung von Bibliotheken, die Aufgaben wie Matrixmathematik ausführen, gibt es typischerweise eine Anzahl von Arbeitsvariablen, durch die verschiedene Vektoren, Matrizen und Quaternionen im Laufe der Zeit gehen. Es macht dann Sinn, eine begrenzte Menge dieser Objekte zu haben und deren Inhalt jedes Mal zu ersetzen, wenn Sie sie verwenden müssen. Sie können sich diese Objekte ähnlich wie die Register in einem Mikroprozessor vorstellen: eine begrenzte Anzahl von Speicherslots für bestimmte Arten von Daten oder Anwendungsfällen.

Obwohl ein einzelner Vektor oder eine Matrix nicht übermäßig viel Speicherplatz beansprucht, bedeutet die schiere Anzahl von Vektoren und Matrizen und anderen Strukturen, die verwendet werden, um jedes Bild einer 3D-Szene zu erstellen, dass das Speichermanagement irgendwann zum Problem wird, wenn Sie kontinuierlich Speicherobjekte zuweisen und freigeben.

Berücksichtigen Sie Folgendes:

```js
function drawScene(gl, view, programInfo, buffers, texture, deltaTime) {
  // …
  for (const object in scene) {
    const vertexList = [/* … */];
    const normalMatrix = mat4.create();
    const modelViewMatrix = mat4.create();
    const objectMatrix = mat4.create();

    // Apply rotation updates to the object if needed

    mat4.rotate(/* … */);
  }
}
```

Dies rendert eine Szene. Aber es ist ineffizient, da es als lokale Variablen eine Reihe von Dingen zuweist, einschließlich mindestens zweier Matrizen, eines Arrays von Vertizes und mehr. Das bedeutet, dass für jedes Bild die JavaScript-Laufzeit Speicher dafür zuweisen und einrichten muss — was möglicherweise die Garbage Collection auslöst — und dann, wenn jede Interaktion der Schleife abgeschlossen ist, wird der Speicher freigegeben.

Eine einfache Änderung kann dies erheblich optimieren:

```js
const vertexList = [/* … */];
const normalMatrix = mat4.create();
const modelViewMatrix = mat4.create();

function drawScene(gl, view, programInfo, buffers, texture, deltaTime) {
  // …
  for (const object in scene) {
    // …
  }
}
```

Jetzt verwenden wir anstelle der Variablenzuweisung bei jeder Schleifeniteration globale Konstanten (oder Klassenmitgliedskonstanten). Dies hat mehrere Vorteile:

- Der für jeden Wert oder jede Struktur zugewiesene Speicher muss nicht jedes Bild neu zugewiesen werden. Dies reduziert die Möglichkeit, die Garbage Collection auszulösen, und optimiert die Speichernutzung.
- Sie können die Objekte, die Ihre Vektoren und Matrizen enthalten, nicht versehentlich löschen, da es sich um Konstanten handelt.
- Sie können jedoch immer noch den _Inhalt_ jedes dieser Objekte ersetzen, sodass sie wiederverwendbar sind.

Sie sind nun vor mehreren möglichen Programmierfehlern geschützt, und Ihre gesamte Animation wird auch flüssiger und leistungsfähiger.
