---
title: WebXR Performance-Leitfaden
slug: Web/API/WebXR_Device_API/Performance
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{DefaultAPISidebar("WebXR Device API")}}

WebXR-Anwendungen beinhalten mehrere Technologien, die sehr empfindlich auf Leistungsbeschränkungen reagieren können. Daher kann es erforderlich sein, Anpassungen oder Kompromisse vorzunehmen, um die Leistung Ihrer WebXR-Anwendung so zu optimieren, dass sie auf der größtmöglichen Anzahl von Zielgeräten verwendbar ist. In diesem Leitfaden werden wir eine Vielzahl von Vorschlägen und Empfehlungen untersuchen, die Ihnen helfen werden, Ihre WebXR-App so leistungsfähig wie möglich zu machen.

## Rendering-Tipps

Diskutieren Sie allgemeine Dinge wie die Begrenzung der Anzahl der verschiedenen Schleifen während des Renderings, das Vermeiden unnötiger Zeichnungen usw.

Es kann auch Material aus diesem [Erklärer im Spezifikations-Repo](https://github.com/immersive-web/webxr/blob/master/explainer.md#changing-the-field-of-view-for-inline-sessions) enthalten.

## Verwaltung der Rendering-Qualität

Dieser Abschnitt wird teilweise aus diesem [Erklärer im Spezifikations-Repo](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-rendering-quality) stammen.

## Verwaltung der Bildrate

Inhalte über die Verwaltung der Bildrate.

## Verwaltung der Verwendung von Tiefe

In diesem Abschnitt werden Informationen aus diesem [Erklärer](https://github.com/immersive-web/webxr/blob/master/explainer.md#controlling-depth-precision) und diesem [Erklärer](https://github.com/immersive-web/webxr/blob/master/explainer.md#preventing-the-compositor-from-using-the-depth-buffer) im Spezifikations-Repo kombiniert.

## Optimierung der Speichernutzung

Wenn Sie Bibliotheken verwenden, die Aufgaben wie Matrizenmathematik durchführen, haben Sie normalerweise eine Reihe von Arbeitsvariablen, durch die verschiedene Vektoren, Matrizen und Quaternionen im Laufe der Zeit wandern. Es ist sinnvoll, dann einen begrenzten Satz dieser Objekte zu haben und deren Inhalt jedes Mal zu ersetzen, wenn Sie sie verwenden müssen. Sie können als ähnlich zu den Registern in einem Mikroprozessor betrachtet werden: ein begrenzter Satz von Speicherplatz für bestimmte Arten von Daten oder Anwendungsfällen.

Obwohl ein einzelner Vektor oder eine Matrix nicht übermäßig viel Speicher beansprucht, wird das Speichermanagement problematisch werden, wenn Sie ständig Speicherobjekte zuweisen und freigeben, da die Anzahl der Vektoren, Matrizen und anderer Strukturen, die zum Erstellen jedes einzelnen Bildes einer 3D-Szene verwendet werden, enorm ist.

Betrachten Sie Folgendes:

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

Dies rendert eine Szene. Aber es ist ineffizient, da es als lokale Variablen eine Reihe von Dingen zuweist, darunter mindestens zwei Matrizen, ein Array von Scheitelpunkten und mehr. Das bedeutet, dass bei jedem Frame die JavaScript-Laufzeitumgebung Speicher dafür zuweisen und einrichten muss—möglicherweise die Speicherbereinigung auslösend—und dann wird der Speicher freigegeben, wenn jede Schleifeniteration abgeschlossen ist.

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

Anstatt nun bei jeder Schleifeniteration Variablen zuzuweisen, verwenden wir globale Konstanten (oder Klassenmitgliedkonstanten). Dies hat mehrere Vorteile:

- Der für jeden Wert oder jede Struktur zugewiesene Speicher muss nicht bei jedem Frame erneut zugewiesen werden. Dies reduziert das Potenzial, die Speicherbereinigung auszulösen, und optimiert die Speichernutzung.
- Sie können nicht versehentlich die Objekte löschen, die Ihre Vektoren und Matrizen enthalten, da es sich um Konstanten handelt.
- Sie können jedoch weiterhin den _Inhalt_ jedes dieser Objekte ersetzen, sodass sie wiederverwendbar sind.

Sie sind nun vor mehreren möglichen Programmierfehlern geschützt, und Ihre gesamte Animation wird flüssiger und leistungsfähiger.
