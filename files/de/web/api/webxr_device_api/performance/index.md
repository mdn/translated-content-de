---
title: WebXR Performance-Leitfaden
slug: Web/API/WebXR_Device_API/Performance
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR-Anwendungen umfassen mehrere Technologien, die sehr empfindlich auf Leistungsbeschränkungen reagieren können. Daher kann es notwendig sein, Anpassungen oder Kompromisse vorzunehmen, um die Leistung Ihrer WebXR-Anwendung zu optimieren, damit sie auf einer möglichst breiten Palette von Zielgeräten nutzbar ist. In diesem Leitfaden werden wir eine Reihe von Vorschlägen und Empfehlungen untersuchen, die Ihnen helfen werden, Ihre WebXR-App so leistungsfähig wie möglich zu gestalten.

## Tipps zur Darstellung

Sprechen Sie über allgemeine Dinge wie die Begrenzung der Anzahl verschiedener Schleifen während des Renderings, das Vermeiden unnötiger Zeichnungen usw.

Möglicherweise können auch Inhalte aus diesem [Erklärungsdokument im Spezifikations-Repository](https://github.com/immersive-web/webxr/blob/master/explainer.md#changing-the-field-of-view-for-inline-sessions) einbezogen werden.

## Verwaltung der Darstellungsqualität

Dieser Abschnitt wird teilweise aus diesem [Erklärungsdokument im Spezifikations-Repository](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-rendering-quality) stammen.

## Verwaltung der Bildrate

Inhalte zur Verwaltung der Bildrate.

## Verwaltung der Tiefe

Dieser Abschnitt wird Informationen aus diesem [Erklärungsdokument](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-depth-precision) und diesem [Dokument](https://github.com/immersive-web/webxr/blob/master/explainer.md#preventing-the-compositor-from-using-the-depth-buffer) im Spezifikations-Repository kombinieren.

## Optimierung der Speichernutzung

Beim Einsatz von Bibliotheken, die Aufgaben wie Matrixmathematik ausführen, haben Sie typischerweise eine Anzahl von Arbeitsvariablen, durch die verschiedene Vektoren, Matrizen und Quaternionen im Laufe der Zeit laufen. Es macht also Sinn, eine limitierte Anzahl dieser Objekte zu besitzen und deren Inhalte jedes Mal zu ersetzen, wenn Sie sie verwenden müssen. Sie können ähnlich wie die Register in einem Mikroprozessor betrachtet werden: eine begrenzte Anzahl von Speicherplätzen für spezifische Arten von Daten oder Anwendungsfällen.

Obwohl ein einzelner Vektor oder eine Matrix nicht übermäßig viel Speicherplatz beansprucht, bedeutet die schiere Anzahl von Vektoren und Matrizen und anderen Strukturen, die zur Erstellung jedes Frames einer 3D-Szene verwendet werden, dass das Speichermanagement irgendwann zum Problem wird, wenn Sie weiterhin Speicherobjekte zuweisen und wieder freigeben.

Betrachten Sie das folgende Beispiel:

```js
function drawScene(gl, view, programInfo, buffers, texture, deltaTime) {
  // …
  for (const object in scene) {
    const vertexList = [
      /* … */
    ];
    const normalMatrix = mat4.create();
    const modelViewMatrix = mat4.create();
    const objectMatrix = mat4.create();

    // Apply rotation updates to the object if needed

    mat4.rotate(/* … */);
  }
}
```

Dies rendert eine Szene. Aber es ist ineffizient, da es eine Reihe von Dingen als lokale Variablen zuweist, darunter mindestens zwei Matrizen, ein Array von Eckpunkten und mehr. Das bedeutet, dass für jeden Frame die JavaScript-Laufzeit Speicher dafür zuweisen und einrichten muss—möglicherweise die Müllabfuhr auslösend—und dann, wenn jede Interaktion der Schleife abgeschlossen ist, wird der Speicher freigegeben.

Eine einfache Änderung kann dies erheblich optimieren:

```js
const vertexList = [
  /* … */
];
const normalMatrix = mat4.create();
const modelViewMatrix = mat4.create();

function drawScene(gl, view, programInfo, buffers, texture, deltaTime) {
  // …
  for (const object in scene) {
    // …
  }
}
```

Jetzt werden anstelle von Variablen bei jedem Schleifendurchlauf globale Konstanten (oder Klassenmitgliedskonstanten) verwendet. Dies bringt mehrere Vorteile:

- Der für jeden Wert oder jede Struktur zugewiesene Speicher muss nicht jedes Frame neu zugewiesen werden. Dies reduziert das Potenzial für die Auslösung der Müllabfuhr und optimiert die Speichernutzung.
- Sie können nicht versehentlich die Objekte löschen, die Ihre Vektoren und Matrizen enthalten, da sie Konstanten sind.
- Sie können jedoch weiterhin die _Inhalte_ jedes dieser Objekte ersetzen, sodass sie wiederverwendbar sind.

Sie sind nun vor mehreren möglichen Programmierfehlern geschützt und Ihre gesamte Animation wird auch flüssiger und leistungsfähiger.
