---
title: WebXR-Leitfaden zur Leistung
slug: Web/API/WebXR_Device_API/Performance
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR-Anwendungen umfassen mehrere Technologien, die sehr empfindlich auf Leistungsbeschränkungen reagieren können. Daher kann es notwendig sein, Anpassungen oder Kompromisse vorzunehmen, um die Leistung Ihrer WebXR-Anwendung zu optimieren, sodass sie auf der breitesten Palette von Zielgeräten so benutzbar wie möglich ist. In diesem Leitfaden werden wir verschiedene Vorschläge und Empfehlungen untersuchen, die Ihnen helfen, Ihre WebXR-App so performant wie möglich zu machen.

## Rendering-Tipps

Diskutieren Sie allgemeine Aspekte wie die Begrenzung der Anzahl verschiedener Schleifen während des Renderings, das Vermeiden unnötiger Zeichenvorgänge usw.

Es können wahrscheinlich auch Inhalte aus diesem [Erklärtext im Spezifikations-Repo](https://github.com/immersive-web/webxr/blob/master/explainer.md#changing-the-field-of-view-for-inline-sessions) aufgenommen werden.

## Verwaltung der Rendering-Qualität

Dieser Abschnitt wird teilweise aus diesem [Erklärtext im Spezifikations-Repo](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-rendering-quality) stammen.

## Verwaltung der Bildrate

Inhalt zur Verwaltung der Bildrate.

## Verwaltung der Tiefennutzung

Dieser Abschnitt wird Informationen aus diesem [Erklärtext](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-depth-precision) und diesem [Erklärtext](https://github.com/immersive-web/webxr/blob/master/explainer.md#preventing-the-compositor-from-using-the-depth-buffer) im Spezifikations-Repository kombinieren.

## Optimierung des Speicherverbrauchs

Wenn Sie Bibliotheken verwenden, die Aufgaben wie Matrixmathematik durchführen, haben Sie typischerweise eine Anzahl an Arbeitsvariablen, durch die verschiedene Vektoren, Matrizen und Quaternionen im Laufe der Zeit durchlaufen. Es macht also Sinn, eine begrenzte Menge dieser Objekte zu haben und deren Inhalte jedes Mal zu ersetzen, wenn Sie sie verwenden müssen. Sie können als ähnlich den Registern in einem Mikroprozessor betrachtet werden: eine begrenzte Menge an Speicherplätzen für spezifische Datentypen oder Anwendungsfälle.

Während ein einzelner Vektor oder eine Matrix keinen unverhältnismäßigen Speicherplatz beansprucht, wird das Speichermanagement aufgrund der schieren Anzahl von Vektoren und Matrizen und anderen Strukturen, die zur Erstellung jedes Frames einer 3D-Szene verwendet werden, letztendlich zu einem Problem, wenn Sie ständig Speicherobjekte zuweisen und freigeben.

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

Dies rendert eine Szene. Aber es ist ineffizient, weil es als lokale Variablen eine Anzahl von Dingen zuweist, einschließlich mindestens zwei Matrizen, eines Arrays von Vertices und mehr. Das bedeutet, dass für jeden Frame die JavaScript-Laufzeit dafür Speicher allokieren und einrichten muss – möglicherweise die Speicherbereinigung auslösenden – und dann, wenn jede Interaktion der Schleife abgeschlossen ist, wird der Speicher freigegeben.

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

Anstatt in jeder Schleifeniteration Variablen zuzuweisen, verwenden wir nun globale Konstanten (oder Klassenmemberkonstanten). Dies hat mehrere Vorteile:

- Der Speicher für jeden Wert oder jede Struktur muss nicht in jedem Frame neu zugewiesen werden. Dies reduziert das Potenzial, die Speicherbereinigung auszulösen, und optimiert den Speicherverbrauch.
- Sie können die Objekte, die Ihre Vektoren und Matrizen enthalten, nicht versehentlich löschen, da sie Konstanten sind.
- Sie können jedoch weiterhin den _Inhalt_ jedes dieser Objekte ersetzen, sodass sie wiederverwendbar sind.

Sie sind jetzt vor mehreren möglichen Programmierfehlern geschützt, und Ihre gesamte Animation wird reibungsloser und performanter.
