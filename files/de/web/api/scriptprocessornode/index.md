---
title: ScriptProcessorNode
slug: Web/API/ScriptProcessorNode
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Audio API")}}

Das `ScriptProcessorNode`-Interface ermöglicht die Generierung, Verarbeitung oder Analyse von Audio mit JavaScript.

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Feature wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Interface ersetzt.

Das `ScriptProcessorNode`-Interface ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audioverarbeitungsmodul, das mit zwei Puffern verbunden ist: einem, der die Eingabedaten enthält, und einem, der die verarbeiteten Ausgabedaten enthält. Ein Ereignis, das das [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent)-Interface implementiert, wird an das Objekt gesendet, jedes Mal wenn der Eingabepuffer neue Daten enthält. Der Ereignishandler endet, sobald er den Ausgabepuffer mit Daten gefüllt hat.

![Das ScriptProcessorNode speichert die Eingabe in einem Puffer, sendet das audioprocess-Ereignis. Der EventHandler nimmt den Eingabepuffer und füllt damit den Ausgabepuffer, der vom ScriptProcessorNode an die Ausgabe gesendet wird.](webaudioscriptprocessingnode.png)

Die Größe des Ein- und Ausgabepuffers wird bei der Erstellung definiert, wenn die Methode [`BaseAudioContext.createScriptProcessor`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) aufgerufen wird (beide werden durch den `bufferSize`-Parameter von [`BaseAudioContext.createScriptProcessor`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert). Die Puffergröße muss eine Potenz von 2 zwischen `256` und `16384` sein, also `256`, `512`, `1024`, `2048`, `4096`, `8192` oder `16384`. Kleine Zahlen verringern die _Latenz_, aber große Zahlen können notwendig sein, um Audioaussetzer und -störungen zu vermeiden.

Wenn die Puffergröße nicht definiert ist, was empfohlen wird, wird der Browser eine geeignete Größe basierend auf seiner Heuristik auswählen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingaben</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgaben</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht verwendet im Standardanzahlmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`ScriptProcessorNode.bufferSize`](/de/docs/Web/API/ScriptProcessorNode/bufferSize) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt ein ganzzahliger Wert zurück, der sowohl die Eingabe- als auch die Ausgabepuffergröße darstellt. Sein Wert kann eine Potenz von 2 im Bereich `256` – `16384` sein.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Ereignisse

Hören Sie auf diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces:

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn ein Eingabepuffer eines `ScriptProcessorNode` zur Verarbeitung bereit ist.
    Auch über die `onaudioprocess`-Ereignishandler-Eigenschaft verfügbar.

## Beispiele

Sehen Sie sich [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
