---
title: "AudioWorkletProcessor: process()-Methode"
short-title: process()
slug: Web/API/AudioWorkletProcessor/process
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{APIRef("Web Audio API")}}

Die **`process()`**-Methode einer von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleiteten Klasse implementiert den Audiobearbeitungsalgorithmus für den Audio-Worklet-Prozessor.

Obwohl die Methode nicht Teil der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle ist, muss jede Implementierung von `AudioWorkletProcessor` eine `process()`-Methode bereitstellen.

Die Methode wird synchron vom Audio-Rendering-Thread aufgerufen, einmal für jeden Audio-Block (auch bekannt als ein Rendering-Quantum), der durch den entsprechenden [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) des Prozessors geleitet wird. Mit anderen Worten, jedes Mal, wenn ein neuer Audio-Block bereit ist, von Ihrem Prozessor bearbeitet zu werden, wird Ihre `process()`-Funktion aufgerufen, um dies zu tun.

> [!NOTE]
> Derzeit sind Audio-Datenblöcke immer 128 Frames lang — das heißt, sie enthalten 128 32-Bit-Gleitkommazahlen für jeden der Eingabekanäle. Es gibt jedoch bereits Pläne, die Spezifikation zu überarbeiten, um zu ermöglichen, dass die Größe der Audioblöcke je nach Umständen geändert werden kann (zum Beispiel, wenn die Audio-Hardware oder CPU-Auslastung mit größeren Blockgrößen effizienter ist). Daher _müssen Sie immer die Größe des Sample-Arrays überprüfen_, anstatt eine bestimmte Größe anzunehmen.
>
> Diese Größe kann sich im Laufe der Zeit sogar ändern, daher sollten Sie sich nicht nur den ersten Block ansehen und davon ausgehen, dass die Sample-Puffer immer die gleiche Größe haben.

## Syntax

```js-nolint
process(inputs, outputs, parameters)
```

### Parameter

- `inputs`
  - : Ein Array von _Eingaben_, die mit dem Knoten verbunden sind, wobei jedes Element seinerseits ein Array von _Kanälen_ ist. Jeder _Kanal_ ist ein {{jsxref("Float32Array")}}, das 128 Samples enthält. Zum Beispiel wird `inputs[n][m][i]` den _n_-ten Eingang, den _m_-ten Kanal dieses Eingangs und das _i_-te Sample dieses Kanals aufrufen.

    Jeder Sample-Wert liegt im Bereich von `[-1 .. 1]`.

    Die Anzahl der _Eingaben_ und somit die Länge dieses Arrays wird bei der Konstruktion des Knotens festgelegt (siehe [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)). Wenn kein aktiver Knoten mit der _n_-ten Eingabe des Knotens verbunden ist, wird `inputs[n]` ein leeres Array sein (keine Eingabekanäle verfügbar).

    Die Anzahl der _Kanäle_ in jeder Eingabe kann variieren, abhängig von den Eigenschaften [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) und [`channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).

- `outputs`
  - : Ein Array von _Ausgaben_, das der Struktur des `inputs`-Parameters ähnlich ist. Es soll während der Ausführung der `process()`-Methode gefüllt werden. Jeder der Ausgabekanäle ist standardmäßig mit Nullen gefüllt — der Prozessor wird Stille ausgeben, es sei denn, die Ausgabe-Arrays werden modifiziert.
- `parameters`
  - : Ein Objekt, das Zeichenketten-Schlüssel und {{jsxref("Float32Array")}}-Werte enthält. Für jedes benutzerdefinierte [`AudioParam`](/de/docs/Web/API/AudioParam), das unter Verwendung des [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static)-Getters definiert wurde, ist der Schlüssel im Objekt ein `name` dieses [`AudioParam`](/de/docs/Web/API/AudioParam), und der Wert ist ein {{jsxref("Float32Array")}}. Die Werte des Arrays werden berechnet, indem geplante Automatisierungsereignisse berücksichtigt werden.

    Wenn die Automatisierungsrate des Parameters [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) ist, wird das Array 128 Werte enthalten — einen für jedes Frame im aktuellen Audio-Block. Wenn keine Automatisierung während der durch den aktuellen Block dargestellten Zeit stattfindet, kann das Array einen einzelnen Wert enthalten, der für den gesamten Block konstant ist, anstelle von 128 identischen Werten.

    Wenn die Automatisierungsrate [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) ist, wird das Array einen einzelnen Wert enthalten, der für alle 128 Frames verwendet werden soll.

### Rückgabewert

Ein Boolean-Wert, der angibt, ob der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) aktiv bleiben soll, selbst wenn die interne Logik des {{Glossary("user_agent", "Benutzeragenten")}} andernfalls entscheiden würde, dass es sicher ist, den Knoten herunterzufahren.

Der zurückgegebene Wert ermöglicht es Ihrem Prozessor, Einfluss auf die Lebensdauer-Richtlinie des [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und des Knotens, der ihn besitzt, zu nehmen. Wenn die Kombination aus dem Rückgabewert und dem Zustand des Knotens den Browser dazu veranlasst, den Knoten zu beenden, wird `process()` nicht erneut aufgerufen.

Die Rückgabe von `true` zwingt die Web Audio API, den Knoten am Leben zu halten, während die Rückgabe von `false` dem Browser erlaubt, den Knoten zu beenden, wenn er weder neue Audiodaten generiert noch Daten über seine Eingänge empfängt, die er verarbeitet.

Die 3 häufigsten Arten von Audioknoten sind:

1. Eine Quelle eines Ausgabes. Ein [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der einen solchen Knoten implementiert, sollte `true` von der `process`-Methode zurückgeben, solange er eine Ausgabe produziert. Die Methode sollte `false` zurückgeben, sobald bekannt ist, dass sie keine Ausgabe mehr produzieren wird. Zum Beispiel sollte der Prozessor hinter einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) `true` von der `process`-Methode zurückgeben, während der Puffer abgespielt wird, und anfangen, `false` zurückzugeben, wenn das Abspielen des Puffers beendet ist (es gibt keine Möglichkeit, `play` auf dem gleichen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erneut aufzurufen).
2. Ein Knoten, der seinen Eingang transformiert. Ein Prozessor, der einen solchen Knoten implementiert, sollte `false` von der `process`-Methode zurückgeben, um die Präsenz von aktiven Eingabeknoten und Referenzen zum Knoten zu verwenden, um zu bestimmen, ob er vom Garbage-Collector entfernt werden kann. Ein Beispiel für einen Knoten mit diesem Verhalten ist der [`GainNode`](/de/docs/Web/API/GainNode). Sobald keine Eingaben mehr verbunden und keine Referenzen mehr vorhanden sind, kann der Gain nicht mehr auf etwas angewendet werden, sodass er sicher vom Garbage-Collector entfernt werden kann.
3. Ein Knoten, der seinen Eingang transformiert, aber eine sogenannte _Nachlaufzeit_ hat — das bedeutet, dass er für einige Zeit noch eine Ausgabe produzieren wird, selbst nachdem seine Eingaben getrennt oder inaktiv (keine Kanäle produzierend) sind. Ein Prozessor, der einen solchen Knoten implementiert, sollte während der _Nachlaufzeit_ `true` von der `process`-Methode zurückgeben, beginnend sobald Eingaben gefunden werden, die keine Kanäle enthalten. Ein Beispiel für einen solchen Knoten ist der [`DelayNode`](/de/docs/Web/API/DelayNode) — er hat eine _Nachlaufzeit_, die seiner [`delayTime`](/de/docs/Web/API/DelayNode/delayTime)-Eigenschaft entspricht.

> [!NOTE]
> Das Fehlen der `return`-Anweisung bedeutet, dass die Methode `undefined` zurückgibt, und da dies ein falsy-Wert ist, ist es so, als würde `false` zurückgegeben. Das Auslassen einer expliziten `return`-Anweisung kann schwer zu erkennende Probleme für Ihre Knoten verursachen.

### Ausnahmen

Da die `process()`-Methode vom Benutzer implementiert wird, kann sie alles werfen. Wenn ein nicht abgefangener Fehler geworfen wird, wird der Knoten ein [`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event) Ereignis auslösen und für den Rest seiner Lebensdauer Stille ausgeben.

## Beispiele

In diesem Beispiel erstellen wir einen `AudioWorkletProcessor`, der weißes Rauschen auf seiner ersten Ausgabe ausgibt. Die Verstärkung kann durch den `customGain`-Parameter gesteuert werden.

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

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
