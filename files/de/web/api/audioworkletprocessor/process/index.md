---
title: "AudioWorkletProcessor: process() Methode"
short-title: process()
slug: Web/API/AudioWorkletProcessor/process
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`process()`** Methode einer von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleiteten Klasse implementiert den Audiobearbeitungsalgorithmus für die Audio-Prozessor-Worklet.

Obwohl die Methode kein Teil der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle ist, muss jede Implementierung von `AudioWorkletProcessor` eine `process()`-Methode bereitstellen.

Die Methode wird synchron von dem Audio-Rendering-Thread aufgerufen, einmal für jeden Block von Audio (auch bekannt als Rendering-Quantum), das durch den entsprechenden [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) des Prozessors geleitet wird. Mit anderen Worten, jedes Mal, wenn ein neuer Audio-Block bereit ist, von Ihrem Prozessor manipuliert zu werden, wird Ihre `process()`-Funktion aufgerufen, um dies zu tun.

> [!NOTE]
> Derzeit sind Audioblöcke immer 128 Frames lang — das heißt, sie enthalten 128 32-Bit-Gleitkommazahlen für jeden der Eingabekanäle. Es gibt jedoch bereits Pläne, die Spezifikation zu überarbeiten, um die Größe der Audioblöcke je nach Umständen ändern zu können (zum Beispiel wenn die Audiohardware oder die CPU-Auslastung mit größeren Blockgrößen effizienter ist). Daher _müssen Sie immer die Größe des Sample-Arrays überprüfen_, anstatt eine bestimmte Größe anzunehmen.
>
> Diese Größe kann sich sogar im Laufe der Zeit ändern, daher sollten Sie sich nicht nur den ersten Block ansehen und davon ausgehen, dass die Sample-Puffer immer dieselbe Größe haben.

## Syntax

```js-nolint
process(inputs, outputs, parameters)
```

### Parameter

- `inputs`
  - : Ein Array von _Eingaben_, die mit dem Knoten verbunden sind, wobei jedes Element wiederum ein Array von _Kanälen_ ist. Jeder _Kanal_ ist ein {{jsxref("Float32Array")}}, das 128 Samples enthält. Zum Beispiel greift `inputs[n][m][i]` auf den _n_-ten Eingang, den _m_-ten Kanal dieses Eingangs und das _i_-te Sample dieses Kanals zu.

    Jeder Sample-Wert liegt im Bereich von `[-1 .. 1]`.

    Die Anzahl der _Eingaben_ und damit die Länge dieses Arrays ist bei der Konstruktion des Knotens festgelegt (siehe [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)). Wenn kein aktiver Knoten mit dem _n_-ten Eingang des Knotens verbunden ist, wird `inputs[n]` ein leeres Array sein (keine Eingabekanäle verfügbar).

    Die Anzahl der _Kanäle_ in jedem Eingang kann variieren, abhängig von den Eigenschaften [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) und [`channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).

- `outputs`
  - : Ein Array von _Ausgaben_, das im Aufbau dem `inputs`-Parameter ähnelt. Es soll während der Ausführung der `process()`-Methode gefüllt werden. Jeder der Ausgabekanäle ist standardmäßig mit Nullen gefüllt — der Prozessor gibt Stille aus, sofern die Ausgabe-Arrays nicht modifiziert werden.

- `parameters`
  - : Ein Objekt, das Zeichenfolgen-Schlüssel und {{jsxref("Float32Array")}}-Werte enthält. Für jeden benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam), der mit dem Getter [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors) definiert wird, ist der Schlüssel im Objekt der `name` dieses [`AudioParam`](/de/docs/Web/API/AudioParam), und der Wert ist ein {{jsxref("Float32Array")}}. Die Werte des Arrays werden durch Berücksichtigung der geplanten Automatisierungsevents berechnet.

    Wenn die Automatisierungsgeschwindigkeit des Parameters [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) ist, enthält das Array 128 Werte — einen für jeden Frame im aktuellen Audio-Block. Wenn keine Automatisierung während der Zeit des aktuellen Blocks stattfindet, kann das Array stattdessen einen einzelnen Wert enthalten, der für den gesamten Block konstant ist, anstatt 128 identische Werte.

    Wenn die Automatisierungsgeschwindigkeit [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) ist, enthält das Array einen einzigen Wert, der für jeden der 128 Frames verwendet werden soll.

### Rückgabewert

Ein Boolean-Wert, der angibt, ob der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) auch weiterhin aktiv bleiben soll, selbst wenn die interne Logik des [Benutzeragenten](/de/docs/Glossary/user_agent) andernfalls entscheiden würde, dass es sicher ist, den Knoten herunterzufahren.

Der zurückgegebene Wert ermöglicht es Ihrem Prozessor, Einfluss auf die Lebensdauerrichtlinie des [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und des Knotens, der ihn besitzt, zu nehmen. Wenn die Kombination aus dem Rückgabewert und dem Zustand des Knotens den Browser dazu veranlasst, zu entscheiden, den Knoten zu stoppen, wird `process()` nicht erneut aufgerufen.

Das Zurückgeben von `true` zwingt die Web Audio API, den Knoten am Leben zu halten, während das Zurückgeben von `false` dem Browser erlaubt, den Knoten zu beenden, wenn er weder neue Audiodaten erzeugt noch Daten über seine Eingänge empfängt, die er verarbeitet.

Die 3 häufigsten Typen von Audio-Knoten sind:

1. Eine Quelle von Ausgangssignalen. Ein [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der solch einen Knoten implementiert, sollte `true` von der `process`-Methode zurückgeben, solange er eine Ausgabe erzeugt. Die Methode sollte `false` zurückgeben, sobald bekannt ist, dass sie keine Ausgabe mehr erzeugen wird. Zum Beispiel sollte der Prozessor hinter einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) `true` von der `process`-Methode zurückgeben, solange der Puffer abgespielt wird, und anfangen, `false` zurückzugeben, wenn das Abspielen des Puffers beendet ist (es gibt keine Möglichkeit, `play` auf demselben [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erneut zu rufen).

2. Ein Knoten, der seine Eingabe transformiert. Ein Prozessor, der solch einen Knoten implementiert, sollte `false` von der `process`-Methode zurückgeben, um das Vorhandensein von aktiven Eingabeknoten und Referenzen zu dem Knoten zu ermöglichen, zu bestimmen, ob er einer Müllabfuhr unterzogen werden kann. Ein Beispiel für einen Knoten mit diesem Verhalten ist der [`GainNode`](/de/docs/Web/API/GainNode). Sobald keine Eingaben mehr verbunden und Referenzen beibehalten werden, kann der Gewinn auf nichts mehr angewendet werden, sodass er sicher der Müllabfuhr zugeführt werden kann.

3. Ein Knoten, der seine Eingabe transformiert, aber eine sogenannte _Tail-Time_ hat — das bedeutet, dass er für einige Zeit nach dem Trennen oder Inaktivwerden seiner Eingänge (die Null-Kanäle produzieren) weiterhin eine Ausgabe erzeugen wird. Ein Prozessor, der solch einen Knoten implementiert, sollte `true` von der `process`-Methode für die Dauer der _Tail-Time_ zurückgeben, beginnend sobald Eingänge gefunden werden, die Null-Kanäle enthalten. Ein Beispiel für solch einen Knoten ist der [`DelayNode`](/de/docs/Web/API/DelayNode) — er hat eine _Tail-Time_, die seiner [`delayTime`](/de/docs/Web/API/DelayNode/delayTime)-Eigenschaft entspricht.

> [!NOTE]
> Ist keine `return`-Anweisung vorhanden, gibt die Methode `undefined` zurück, und da dies ein falsiger Wert ist, ist es wie `false` zurückzugeben. Das Auslassen einer expliziten `return`-Anweisung kann schwer zu entdeckende Probleme für Ihre Knoten verursachen.

### Ausnahmen

Da die `process()`-Methode vom Benutzer implementiert wird, kann sie alles werfen. Wenn ein nicht abgefangener Fehler geworfen wird, wird der Knoten ein [`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event)-Ereignis auslösen und für den Rest seiner Lebensdauer Stille ausgeben.

## Beispiele

In diesem Beispiel erstellen wir einen `AudioWorkletProcessor`, der weißes Rauschen an seinen ersten Ausgang ausgibt. Der `customGain`-Parameter kann die Verstärkung kontrollieren.

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

Dies ist keine von Browsern bereitgestellte Methode, sondern eine Callback-Methode, die im Client-Code geschrieben werden muss.

## Siehe auch

- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
