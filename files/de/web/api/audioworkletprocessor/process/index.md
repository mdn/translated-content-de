---
title: "AudioWorkletProcessor: process()-Methode"
short-title: process()
slug: Web/API/AudioWorkletProcessor/process
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`process()`**
Methode einer von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleiteten Klasse implementiert den Algorithmus zur Audioverarbeitung für das Audio-Prozessor-Worklet.

Obwohl die Methode
kein Teil der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle ist, muss jede Implementierung
von `AudioWorkletProcessor` eine `process()`-Methode bereitstellen.

Die Methode wird synchron vom Audio-Rendering-Thread aufgerufen, einmal für jeden Audio-Block (auch als Rendering-Quantum bekannt), der durch den entsprechenden [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) des Prozessors geleitet wird. Anders ausgedrückt, jedes Mal, wenn ein neuer Audio-Block zur Manipulation bereitsteht, wird Ihre `process()`-Funktion aufgerufen, um dies durchzuführen.

> [!NOTE]
> Gegenwärtig sind Audio-Datenblöcke immer 128 Frames lang – das heißt, sie enthalten 128 32-Bit-Gleitkomma-Proben für jeden der Eingabekanäle. Es gibt jedoch bereits Pläne, die Spezifikation zu überarbeiten, um die Größe der Audio-Blöcke je nach Umständen ändern zu können (zum Beispiel, wenn die Audio-Hardware oder die CPU-Nutzung mit größeren Blockgrößen effizienter ist). Daher _müssen Sie immer die Größe des Sample-Arrays überprüfen_, anstatt von einer bestimmten Größe auszugehen.
>
> Diese Größe kann sich im Laufe der Zeit sogar ändern, daher sollten Sie nicht nur den ersten Block betrachten und annehmen, dass die Sample-Puffer immer dieselbe Größe haben werden.

## Syntax

```js-nolint
process(inputs, outputs, parameters)
```

### Parameter

- `inputs`

  - : Ein Array von _Eingaben_, die mit dem Knoten verbunden sind, wobei jedes Element wiederum ein Array von _Kanälen_ ist. Jeder _Kanal_ ist ein {{jsxref("Float32Array")}},
    das 128 Proben enthält. Zum Beispiel greift `inputs[n][m][i]` auf
    den _n_-ten Eingang, den _m_-ten Kanal dieses Eingangs und die _i_-te Probe
    dieses Kanals zu.

    Jeder Sample-Wert liegt im Bereich von `[-1 .. 1]`.

    Die Anzahl der _Eingaben_ und damit die Länge dieses Arrays ist bei der Konstruktion des Knotens festgelegt (siehe [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)). Wenn kein aktiver Knoten mit dem _n_-ten Eingang des Knotens verbunden ist,
    wird `inputs[n]` ein leeres Array sein (keine Eingabekanäle verfügbar).

    Die Anzahl der _Kanäle_ in jedem Eingang kann variieren, abhängig von den Eigenschaften [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) und
    [`channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).

- `outputs`
  - : Ein Array von _Ausgaben_, das im Aufbau dem `inputs`-Parameter ähnelt. Es soll während der Ausführung der `process()`-Methode gefüllt werden. Jeder der Ausgangskanäle ist standardmäßig mit Nullen gefüllt — der Prozessor wird Stille ausgeben, sofern die Ausgabearrays nicht modifiziert werden.
- `parameters`

  - : Ein Objekt, das Zeichenfolgen-Schlüssel und {{jsxref("Float32Array")}}-Werte enthält. Für jeden benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam), der über den
    [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors)-Getter definiert wird, ist der Schlüssel im Objekt ein `name` dieses
    [`AudioParam`](/de/docs/Web/API/AudioParam), und der Wert ist ein {{jsxref("Float32Array")}}. Die Werte
    des Arrays werden unter Berücksichtigung geplanter Automatisierungsereignisse berechnet.

    Wenn die Automatisierungsrate des Parameters
    [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) ist, wird das Array
    128 Werte enthalten — einen für jeden Frame im aktuellen Audio-Block. Wenn während des durch den aktuellen Block repräsentierten Zeitraums keine Automatisierung stattfindet, kann das Array einen einzelnen Wert enthalten, der für den gesamten Block konstant ist, anstatt 128 identische Werte.

    Wenn die Automatisierungsrate
    [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) ist, wird das Array
    einen einzigen Wert enthalten, der für jeden der 128 Frames verwendet werden soll.

### Rückgabewert

Ein Boolescher Wert, der angibt, ob der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) gezwungen werden soll, aktiv zu bleiben, auch wenn die interne Logik des [Benutzeragenten](/de/docs/Glossary/user_agent) sonst entscheiden würde, dass es sicher ist, den Knoten herunterzufahren.

Der Rückgabewert ermöglicht es Ihrem Prozessor, Einfluss auf die Lebenszyklusrichtlinie des [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und des Knotens, der ihn besitzt, zu nehmen. Wenn die Kombination aus dem Rückgabewert und dem Zustand des Knotens dazu führt, dass der Browser entscheidet, den Knoten zu stoppen, wird `process()` nicht mehr aufgerufen.

Das Zurückgeben von `true` zwingt die Web Audio API, den Knoten am Leben zu halten, während das Zurückgeben von `false` dem Browser erlaubt, den Knoten zu beenden, wenn er keine neuen Audiodaten generiert oder keine Daten über seine Eingänge empfängt, die er verarbeitet.

Die 3 häufigsten Arten von Audioknoten sind:

1. Eine Ausgabequelle. Ein [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der solch einen Knoten implementiert, sollte `true` von der `process`-Methode zurückgeben, solange er eine Ausgabe erzeugt. Die Methode sollte `false` zurückgeben, sobald bekannt ist, dass sie keine Ausgabe mehr erzeugen wird. Zum Beispiel sollte der Prozessor hinter einem [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) `true` von der `process`-Methode zurückgeben, während der Puffer abgespielt wird, und anfangen, `false` zurückzugeben, wenn das Abspielen des Puffers beendet ist (es gibt keine Möglichkeit, `play` auf demselben [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) erneut aufzurufen).
2. Ein Knoten, der seine Eingabe transformiert. Ein Prozessor, der solch einen Knoten implementiert, sollte `false` von der `process`-Methode zurückgeben, um das Vorhandensein aktiver Eingabeknoten und Verweise auf den Knoten darüber entscheiden zu lassen, ob er dem Garbage Collector überlassen werden kann. Ein Beispiel für einen Knoten mit diesem Verhalten ist der [`GainNode`](/de/docs/Web/API/GainNode). Sobald keine Eingänge mehr verbunden sind und keine Verweise behalten werden, kann keine Verstärkung mehr auf etwas angewendet werden, sodass er sicher dem Garbage Collector überlassen werden kann.
3. Ein Knoten, der seine Eingabe transformiert, aber eine sogenannte _Tail-Time_ hat — das bedeutet, dass er noch eine Zeit lang eine Ausgabe erzeugen wird, selbst nachdem seine Eingänge getrennt oder inaktiv sind (erzeugen Null-Kanäle). Ein Prozessor, der solch einen Knoten implementiert, sollte `true` von der `process`-Methode für die Dauer der _Tail-Time_ zurückgeben, beginnend ab dem Zeitpunkt, an dem Eingänge gefunden werden, die Null-Kanäle enthalten. Ein Beispiel für solch einen Knoten ist der [`DelayNode`](/de/docs/Web/API/DelayNode) — er hat eine _Tail-Time_, die dem Wert seiner [`delayTime`](/de/docs/Web/API/DelayNode/delayTime)-Eigenschaft entspricht.

> [!NOTE]
> Das Fehlen einer `return`-Anweisung bedeutet, dass die Methode `undefined` zurückgibt, was als falsy-Wert wie `false` wirkt.
> Das Auslassen einer expliziten `return`-Anweisung kann schwer zu erkennende Probleme für Ihre Knoten verursachen.

### Ausnahmen

Da die `process()`-Methode vom Benutzer implementiert wird, kann sie alles werfen.
Wenn ein nicht abgefangener Fehler geworfen wird, wird der Knoten ein
[`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event)-Ereignis auslösen und für den Rest seiner Lebensdauer Stille ausgeben.

## Beispiele

In diesem Beispiel erstellen wir einen `AudioWorkletProcessor`, der weißes
Rauschen zu seinem ersten Ausgang ausgibt. Der Pegel kann durch den `customGain`
Parameter gesteuert werden.

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

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
