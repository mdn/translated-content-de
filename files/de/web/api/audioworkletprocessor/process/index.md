---
title: "AudioWorkletProcessor: process()-Methode"
short-title: process()
slug: Web/API/AudioWorkletProcessor/process
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Die **`process()`**-Methode einer von der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Klasse abgeleiteten Klasse implementiert den Audioverarbeitungsalgorithmus für das Audio-Processor-Worklet.

Auch wenn die Methode kein Teil der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle ist, muss jede Implementierung von `AudioWorkletProcessor` eine `process()`-Methode bereitstellen.

Die Methode wird synchron vom Audio-Rendering-Thread aufgerufen, und zwar einmal für jeden Audioblock (auch als Rendering-Quantum bekannt), der durch den entsprechenden [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) des Prozessors geleitet wird. Mit anderen Worten, jedes Mal, wenn ein neuer Block von Audio zur Bearbeitung durch Ihren Prozessor bereit ist, wird Ihre `process()`-Funktion aufgerufen, um dies zu tun.

> [!NOTE]
> Derzeit sind Audiodatenblöcke immer 128 Frames lang—das heißt, sie enthalten 128 32-Bit-Floating-Point-Samples für jeden der Eingabekanäle. Pläne zur Überarbeitung der Spezifikation sind jedoch bereits in Arbeit, um zu ermöglichen, dass die Größe der Audioblöcke abhängig von den Umständen geändert werden kann (zum Beispiel, wenn die Audiogeräte oder die CPU-Auslastung bei größeren Blockgrößen effizienter ist). Daher _müssen Sie immer die Größe des Sample-Arrays überprüfen_ und nicht von einer bestimmten Größe ausgehen.
>
> Diese Größe kann sich im Laufe der Zeit sogar ändern, also sollten Sie nicht nur den ersten Block betrachten und annehmen, dass die Sample-Puffer immer die gleiche Größe haben werden.

## Syntax

```js-nolint
process(inputs, outputs, parameters)
```

### Parameter

- `inputs`

  - : Ein Array von _Eingängen_, die mit dem Knoten verbunden sind, wobei jedes Element wiederum ein Array von _Kanälen_ ist. Jeder _Kanal_ ist ein {{jsxref("Float32Array")}}, das 128 Samples enthält. Zum Beispiel greift `inputs[n][m][i]` auf den _n_-ten Eingang, den _m_-ten Kanal dieses Eingangs und das _i_-te Sample dieses Kanals zu.

    Jeder Sample-Wert liegt im Bereich von `[-1 .. 1]`.

    Die Anzahl der _Eingänge_ und somit die Länge dieses Arrays ist bei der Konstruktion des Knotens festgelegt (siehe [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)). Wenn kein aktiver Knoten mit dem _n_-ten Eingang des Knotens verbunden ist, wird `inputs[n]` ein leeres Array sein (keine Eingabekanäle verfügbar).

    Die Anzahl der _Kanäle_ in jedem Eingang kann je nach den Eigenschaften [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) und [`channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) variieren.

- `outputs`

  - : Ein Array von _Ausgängen_, das in seiner Struktur dem Parameter `inputs` ähnelt. Es soll während der Ausführung der `process()`-Methode gefüllt werden. Jeder der Ausgabekanäle wird standardmäßig mit Nullen gefüllt—der Prozessor gibt Stille aus, es sei denn, die Ausgabearrays werden modifiziert.

- `parameters`

  - : Ein Objekt, das Zeichenketten als Schlüssel und {{jsxref("Float32Array")}} als Werte enthält. Für jeden benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam), der mit dem [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)-Getter definiert wurde, ist der Schlüssel im Objekt ein `name` dieses [`AudioParam`](/de/docs/Web/API/AudioParam), und der Wert ist ein {{jsxref("Float32Array")}}. Die Werte des Arrays werden unter Berücksichtigung geplanter Automatisierungsereignisse berechnet.

    Wenn die Automatisierungsrate des Parameters [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) ist, enthält das Array 128 Werte—einen für jeden Frame im aktuellen Audioblock. Wenn während der durch den aktuellen Block dargestellten Zeit keine Automatisierung stattfindet, kann das Array einen einzigen Wert enthalten, der für den gesamten Block konstant ist, anstatt 128 identische Werte.

    Wenn die Automatisierungsrate [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) ist, enthält das Array einen einzigen Wert, der für jeden der 128 Frames verwendet werden soll.

### Rückgabewert

Ein Boolean-Wert, der angibt, ob der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) gezwungen werden soll, aktiv zu bleiben, selbst wenn die interne Logik des {{Glossary("user_agent", "Benutzeragents")}} ansonsten entscheiden würde, dass es sicher ist, den Knoten herunterzufahren.

Der zurückgegebene Wert ermöglicht es Ihrem Prozessor, die Lebenszykluspolitik des [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und des ihn besitzenden Knotens zu beeinflussen. Wenn die Kombination aus Rückgabewert und Zustand des Knotens dazu führt, dass der Browser entscheidet, den Knoten zu stoppen, wird `process()` nicht erneut aufgerufen.

Durch die Rückgabe von `true` wird die Web Audio API gezwungen, den Knoten am Leben zu halten, während die Rückgabe von `false` dem Browser ermöglicht, den Knoten zu beenden, wenn er weder neue Audiodaten erzeugt noch Daten durch seine Eingänge empfängt, die er verarbeitet.

Die 3 häufigsten Typen von Audioknoten sind:

1. Eine Ausgabequelle. Ein [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der einen solchen Knoten implementiert, sollte `true` von der `process`-Methode zurückgeben, solange er eine Ausgabe erzeugt. Die Methode sollte `false` zurückgeben, sobald bekannt ist, dass sie keine Ausgabe mehr erzeugen wird. Zum Beispiel sollte der Prozessor hinter einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) `true` von der `process`-Methode zurückgeben, während der Puffer abgespielt wird, und `false` zurückgeben, wenn das Abspielen des Puffers beendet ist (es gibt keine Möglichkeit, `play` auf demselben [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erneut zu rufen).
2. Ein Knoten, der seine Eingabe transformiert. Ein Prozessor, der einen solchen Knoten implementiert, sollte `false` von der `process`-Methode zurückgeben, um das Vorhandensein aktiver Eingangsknoten und Verweise auf den Knoten zu erlauben, die bestimmen, ob er gesammelt werden kann. Ein Beispiel für einen Knoten mit diesem Verhalten ist der [`GainNode`](/de/docs/Web/API/GainNode). Sobald keine Eingänge mehr verbunden sind und Verweise beibehalten werden, kann kein Gain mehr auf irgendetwas angewendet werden, sodass er sicher gesammelt werden kann.
3. Ein Knoten, der seine Eingabe transformiert, aber eine sogenannte _Nachlaufzeit_ hat—das bedeutet, dass er eine Ausgabe für einige Zeit erzeugen wird, selbst nachdem seine Eingänge getrennt oder inaktiv sind (Null-Kanäle erzeugend). Ein Prozessor, der einen solchen Knoten implementiert, sollte `true` von der `process`-Methode für die Dauer der _Nachlaufzeit_ zurückgeben, beginnend, sobald Eingänge gefunden werden, die Null-Kanäle enthalten. Ein Beispiel für einen solchen Knoten ist der [`DelayNode`](/de/docs/Web/API/DelayNode)—er hat eine _Nachlaufzeit_, die seiner [`delayTime`](/de/docs/Web/API/DelayNode/delayTime)-Eigenschaft entspricht.

> [!NOTE]
> Das Fehlen der `return`-Anweisung bedeutet, dass die Methode `undefined` zurückgibt, und da dies ein falsy-Wert ist, ist es wie die Rückgabe von `false`.
> Das Weglassen einer expliziten `return`-Anweisung kann schwer zu erkennende Probleme für Ihre Knoten verursachen.

### Ausnahmen

Da die `process()`-Methode vom Benutzer implementiert wird, kann sie alles werfen.
Wenn ein nicht abgefangener Fehler geworfen wird, wird der Knoten ein [`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event)-Ereignis emittieren und für den Rest seines Lebens Stille ausgeben.

## Beispiele

In diesem Beispiel erstellen wir einen `AudioWorkletProcessor`, der weißes Rauschen an seinen ersten Ausgang ausgibt. Der Gain kann durch den Parameter `customGain` gesteuert werden.

```js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // take the first output
    const output = outputs[0];
    // fill each channel with random values multiplied by gain
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        // generate random value for each sample
        // Math.random range is [0; 1); we need [-1; 1]
        // this won't include exact 1 but is fine for now for simplicity
        channel[i] =
          (Math.random() * 2 - 1) *
          // the array can contain 1 or 128 values
          // depending on if the automation is present
          // and if the automation rate is k-rate or a-rate
          (parameters["customGain"].length > 1
            ? parameters["customGain"][i]
            : parameters["customGain"][0]);
      }
    });
    // as this is a source node which generates its own output,
    // we return true so it won't accidentally get garbage-collected
    // if we don't have any references to it in the main thread
    return true;
  }
  // define the customGain parameter used in process method
  static get parameterDescriptors() {
    return [
      {
        name: "customGain",
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: "a-rate",
      },
    ];
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dies ist keine Methode, die von Browsern bereitgestellt wird, sondern eine Callback-Methode, die im Client-Code geschrieben werden muss.

## Siehe auch

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
