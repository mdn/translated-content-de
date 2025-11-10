---
title: ScriptProcessorNode
slug: Web/API/ScriptProcessorNode
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

Das `ScriptProcessorNode` Interface ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mit JavaScript.

{{InheritanceDiagram}}

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Interface ersetzt.

Das `ScriptProcessorNode` Interface ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audioverarbeitungsmodul, das mit zwei Puffern verbunden ist: einem, der die Eingangsaudiodaten enthält, und einem, der die verarbeiteten Ausgangsaudiodaten enthält. Jedes Mal, wenn der Eingangspuffer neue Daten enthält, wird ein Ereignis, das die [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) Schnittstelle implementiert, an das Objekt gesendet, und der Ereignishandler endet, wenn der Ausgabepuffer mit Daten gefüllt ist.

![Das ScriptProcessorNode speichert die Eingaben in einem Puffer, sendet das Audioprozess-Ereignis. Der EventHandler nimmt den Eingabepuffer und füllt den Ausgabepuffer, der vom ScriptProcessorNode an den Ausgang gesendet wird.](webaudioscriptprocessingnode.png)

Die Größe des Eingabe- und Ausgabepuffers wird bei der Erstellung festgelegt, wenn die Methode [`BaseAudioContext.createScriptProcessor`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) aufgerufen wird (beide werden durch den `bufferSize`-Parameter von [`BaseAudioContext.createScriptProcessor`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor) definiert). Die Puffergröße muss eine Potenz von 2 zwischen `256` und `16384` sein, also `256`, `512`, `1024`, `2048`, `4096`, `8192` oder `16384`. Kleine Zahlen verringern die _Latenz_, aber große Zahlen können notwendig sein, um Audiounterbrechungen und -aussetzer zu vermeiden.

Wenn die Puffergröße nicht definiert ist, was empfohlen wird, wählt der Browser eine, die er für angemessen hält.

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
      <th scope="row">Kanalzählmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (im Standardzählmodus nicht verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`ScriptProcessorNode.bufferSize`](/de/docs/Web/API/ScriptProcessorNode/bufferSize) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen ganzzahligen Wert zurück, der sowohl die Eingabe- als auch die Ausgabe-Puffergröße darstellt. Sein Wert kann eine Potenz von 2 im Bereich `256` – `16384` sein.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder indem ein Ereignislistener der `oneventname`-Eigenschaft dieses Interfaces zugewiesen wird:

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn ein Eingabepuffer eines `ScriptProcessorNode` bereit zum Verarbeiten ist.
    Auch über die `onaudioprocess` Ereignishandler-Eigenschaft verfügbar.

## Beispiele

Siehe [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
