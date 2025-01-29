---
title: WebXR-Leitfaden zur Leistungsoptimierung
slug: Web/API/WebXR_Device_API/Performance
l10n:
  sourceCommit: ef472690cc383fc77d7aa53ddec036b5efa3b526
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR-Anwendungen umfassen mehrere Technologien, die sehr empfindlich auf Leistungseinschränkungen reagieren können. Daher kann es erforderlich sein, Anpassungen oder Kompromisse vorzunehmen, um die Leistung Ihrer WebXR-Anwendung zu optimieren und sie auf einer möglichst breiten Auswahl an Zielgeräten nutzbar zu machen. In diesem Leitfaden werden wir eine Vielzahl von Vorschlägen und Empfehlungen untersuchen, die Ihnen helfen, Ihre WebXR-Anwendung so leistungsfähig wie möglich zu gestalten.

## Tipps zum Rendering

Besprechen Sie allgemeine Punkte wie die Begrenzung der Anzahl verschiedener Schleifen während des Renderings, das Vermeiden unnötiger Zeichnungen usw.

Es können wahrscheinlich auch Inhalte aus diesem [Erläuterungsdokument im Spec-Repo](https://github.com/immersive-web/webxr/blob/master/explainer.md#changing-the-field-of-view-for-inline-sessions) enthalten sein.

## Verwaltung der Rendering-Qualität

Dieser Abschnitt wird teilweise aus diesem [Erläuterungsdokument im Spec-Repo](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-rendering-quality) entnommen.

## Verwaltung der Bildrate

Inhalte über die Verwaltung der Bildrate.

## Verwaltung der Nutzung von Tiefe

Dieser Abschnitt kombiniert Informationen aus diesem [Erläuterungsdokument](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-depth-precision) und diesem [Dokument](https://github.com/immersive-web/webxr/blob/master/explainer.md#preventing-the-compositor-from-using-the-depth-buffer) im Spec-Repo.

## Optimierung des Speicherverbrauchs

Wenn Sie Bibliotheken verwenden, die Aufgaben wie Matrixmathematik durchführen, haben Sie typischerweise eine Reihe von Arbeitsvariablen, durch die verschiedene Vektoren, Matrizen und Quaternionen im Laufe der Zeit gehen. Es macht daher Sinn, eine begrenzte Anzahl dieser Objekte zu haben und deren Inhalte mit den neuen Informationen zu ersetzen, jedes Mal wenn Sie sie verwenden müssen. Sie können als ähnlich den Registern in einem Mikroprozessor betrachtet werden: eine begrenzte Menge von Speicherplätzen für spezifische Datentypen oder Anwendungsfälle.

Auch wenn ein einzelner Vektor oder eine Matrix nicht übermäßig viel Speicherplatz beansprucht, führt die schiere Anzahl der Vektoren, Matrizen und anderer Strukturen, die zur Bildung jedes Einzelbilds einer 3D-Szene verwendet werden, dazu, dass Speicherverwaltung schließlich zu einem Problem wird, wenn Sie Speicherobjekte ständig allozieren und freigeben.

Betrachten Sie das Folgende:

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

Dies rendert eine Szene. Aber es ist ineffizient, da es als lokale Variablen eine Reihe von Dingen allokiert, darunter mindestens zwei Matrizen, ein Array von Scheitelpunkten und mehr. Das bedeutet, dass für jeden Frame die JavaScript-Laufzeit Speicher für diese allokieren und einrichten muss – möglicherweise Abfallbeseitigung auslösen – und wenn jede Interaktion der Schleife abgeschlossen ist, wird der Speicher freigegeben.

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

Jetzt verwenden wir statt Variablen in jeder Schleifeniteration globale Konstanten (oder Klassenmitgliedskonstanten). Dies bietet mehrere Vorteile:

- Der für jeden Wert oder jede Struktur zugeordnete Speicher muss nicht in jedem Frame neu zugeordnet werden. Dies reduziert die Wahrscheinlichkeit, die Müllabfuhr auszulösen, und optimiert den Speicherverbrauch.
- Sie können die Objekte, die Ihre Vektoren und Matrizen enthalten, nicht versehentlich löschen, da sie Konstanten sind.
- Sie können jedoch nach wie vor die _Inhalte_ jedes dieser Objekte ersetzen, sodass sie wiederverwendbar sind.

Sie sind jetzt vor mehreren möglichen Programmierfehlern geschützt, und Ihre gesamte Animation wird ebenfalls flüssiger und leistungsfähiger.
