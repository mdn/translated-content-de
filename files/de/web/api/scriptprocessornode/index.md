---
title: ScriptProcessorNode
slug: Web/API/ScriptProcessorNode
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

Das `ScriptProcessorNode`-Interface ermöglicht die Erzeugung, Verarbeitung oder Analyse von Audio mit JavaScript.

{{InheritanceDiagram}}

> [!NOTE]
> Diese Funktion wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das {{domxref("AudioWorkletNode")}}-Interface ersetzt.

Das `ScriptProcessorNode`-Interface ist ein {{domxref("AudioNode")}}-Audioverarbeitungsmodul, das mit zwei Puffern verbunden ist: einem, der die Eingabe-Audiodaten enthält, und einem, der die verarbeiteten Ausgabe-Audiodaten enthält. Ein Ereignis, das die {{domxref("AudioProcessingEvent")}}-Schnittstelle implementiert, wird jedes Mal an das Objekt gesendet, wenn der Eingabepuffer neue Daten enthält. Der Ereignis-Handler endet, wenn er den Ausgabepuffer mit Daten gefüllt hat.

![Das ScriptProcessorNode speichert die Eingabe in einem Puffer, sendet das Audioverarbeitungsereignis. Der EventHandler nimmt den Eingabepuffer und füllt den Ausgabepuffer, der vom ScriptProcessorNode an die Ausgabe gesendet wird.](webaudioscriptprocessingnode.png)

Die Größe der Eingabe- und Ausgabepuffer wird bei der Erstellung definiert, wenn die Methode {{domxref("BaseAudioContext.createScriptProcessor")}} aufgerufen wird (beide werden durch den `bufferSize`-Parameter von {{domxref("BaseAudioContext.createScriptProcessor")}} definiert). Die Puffergröße muss eine Potenz von 2 zwischen `256` und `16384` sein, das heißt `256`, `512`, `1024`, `2048`, `4096`, `8192` oder `16384`. Kleine Zahlen senken die _Latenz_, aber große Zahlen können notwendig sein, um Audioabbrüche und Störungen zu vermeiden.

Wenn die Puffergröße nicht definiert ist, was empfohlen wird, wählt der Browser eine aus, die sein Heuristik für geeignet hält.

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
      <th scope="row">Kanalanzahl-Modus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht verwendet im Standardanzahl-Modus)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("ScriptProcessorNode.bufferSize")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt eine ganze Zahl zurück, die sowohl die Eingabe- als auch die Ausgabepuffergröße darstellt. Sein Wert kann eine Potenz von 2 im Bereich von `256` – `16384` sein.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen:

- [`audioprocess`](/de/docs/Web/API/ScriptProcessorNode/audioprocess_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn ein Eingabepuffer eines `ScriptProcessorNode` bereit zur Verarbeitung ist.
    Auch verfügbar über die `onaudioprocess` Ereignis-Handler-Eigenschaft.

## Beispiele

Siehe [`BaseAudioContext.createScriptProcessor()`](/de/docs/Web/API/BaseAudioContext/createScriptProcessor#examples) für Beispielcode.

## Spezifikationen

Seit der Veröffentlichung der [Web Audio API-Spezifikation](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) am 29. August 2014 wurde diese Funktion veraltet. Sie ist nicht mehr darauf ausgelegt, ein Standard zu werden.

Sie wurde durch [AudioWorklets](/de/docs/Web/API/AudioWorklet) und das {{domxref("AudioWorkletNode")}}-Interface ersetzt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
