---
title: "AudioWorkletProcessor: process()-Methode"
short-title: process()
slug: Web/API/AudioWorkletProcessor/process
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Audio API")}}

Die **`process()`**-Methode einer von [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) abgeleiteten Klasse implementiert den Audioverarbeitungsalgorithmus für den Audioprozessor-Worklet.

Obwohl die Methode kein Teil der [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Schnittstelle ist, muss jede Implementierung von `AudioWorkletProcessor` eine `process()`-Methode bereitstellen.

Die Methode wird synchron aus dem Audio-Rendering-Thread aufgerufen und zwar einmal für jeden Audio-Block (auch als Rendering-Quantum bekannt), der durch den entsprechenden [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) des Prozessors geleitet wird. Mit anderen Worten: Jedes Mal, wenn ein neuer Audio-Block bereit ist, von Ihrem Prozessor manipuliert zu werden, wird Ihre `process()`-Funktion aufgerufen, um dies zu tun.

> [!NOTE]
> Derzeit sind Audio-Datenblöcke immer 128 Frames lang — das heißt, sie enthalten 128 32-Bit-Floating-Point-Samples für jeden der Eingabekanäle. Es gibt jedoch bereits Pläne, die Spezifikation zu überarbeiten, um die Größe der Audio-Blöcke je nach Umständen ändern zu können (zum Beispiel, wenn die Audio-Hardware oder die CPU-Auslastung mit größeren Blockgrößen effizienter ist). Daher _müssen Sie immer die Größe des Sample-Arrays überprüfen_, anstatt von einer bestimmten Größe auszugehen.
>
> Diese Größe könnte sich im Laufe der Zeit sogar ändern, daher sollten Sie nicht nur den ersten Block betrachten und davon ausgehen, dass die Sample-Buffer immer gleich groß bleiben.

## Syntax

```js-nolint
process(inputs, outputs, parameters)
```

### Parameter

- `inputs`
  - : Ein Array von _Eingaben_, die mit dem Knoten verbunden sind, wobei jedes Element wiederum ein Array von _Kanälen_ ist. Jeder _Kanal_ ist ein {{jsxref("Float32Array")}}, das 128 Samples enthält. Zum Beispiel greift `inputs[n][m][i]` auf den _n_-ten Eingang, den _m_-ten Kanal dieses Eingangs und das _i_-te Sample dieses Kanals zu.

    Jeder Samplewert liegt im Bereich von `[-1 .. 1]`.

    Die Anzahl der _Eingaben_ und somit die Länge dieses Arrays ist bei der Konstruktion des Knotens festgelegt (siehe [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)). Wenn kein aktiver Knoten mit dem _n_-ten Eingang des Knotens verbunden ist, wird `inputs[n]` ein leeres Array sein (null Eingabekanäle verfügbar).

    Die Anzahl der _Kanäle_ in jedem Eingang kann je nach den Eigenschaften [`channelCount`](/de/docs/Web/API/AudioNode/channelCount) und [`channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) variieren.

- `outputs`
  - : Ein Array von _Ausgaben_, das in der Struktur dem `inputs`-Parameter ähnelt. Es soll während der Ausführung der `process()`-Methode gefüllt werden. Jeder der Ausgabekanäle ist standardmäßig mit Nullen gefüllt — der Prozessor gibt Stille aus, es sei denn, die Output-Arrays werden modifiziert.
- `parameters`
  - : Ein Objekt, das Zeichenkettenschlüssel und {{jsxref("Float32Array")}}-Werte enthält. Für jeden benutzerdefinierten [`AudioParam`](/de/docs/Web/API/AudioParam), der über den [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static)-Getter definiert wird, ist der Schlüssel im Objekt ein `Name` dieses [`AudioParam`](/de/docs/Web/API/AudioParam), und der Wert ist ein {{jsxref("Float32Array")}}. Die Werte des Arrays werden berechnet, indem geplante Automation-Events berücksichtigt werden.

    Wenn die Automatisierungsrate des Parameters [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) ist, enthält das Array 128 Werte — einen für jedes Frame im aktuellen Audio-Block. Wenn während der durch den aktuellen Block repräsentierten Zeit keine Automatisierung stattfindet, kann das Array einen einzigen Wert enthalten, der im gesamten Block konstant ist, anstatt 128 identische Werte.

    Wenn die Automatisierungsrate [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) ist, enthält das Array einen einzigen Wert, der für jedes der 128 Frames verwendet werden soll.

### Rückgabewert

Ein boolescher Wert, der angibt, ob der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) gezwungen werden soll, aktiv zu bleiben, auch wenn die interne Logik des {{Glossary("user_agent", "User-Agent")}} andernfalls entscheiden würde, dass es sicher ist, den Knoten herunterzufahren.

Der zurückgegebene Wert ermöglicht es Ihrem Prozessor, Einfluss auf die Lebensdauerpolitik des [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) und des Knotens, der ihn besitzt, zu nehmen. Wenn die Kombination aus dem Rückgabewert und dem Status des Knotens den Browser dazu veranlasst, zu entscheiden, den Knoten zu stoppen, wird `process()` nicht erneut aufgerufen.

Wenn `true` zurückgegeben wird, zwingt dies die Web Audio API, den Knoten am Leben zu halten, während `false` es dem Browser erlaubt, den Knoten zu beenden, wenn er weder neue Audiodaten erzeugt noch Daten durch seine Eingaben empfängt, die er verarbeitet.

Die 3 häufigsten Arten von Audio-Knoten sind:

1. Eine Quelle der Ausgabe. Ein [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der einen solchen Knoten implementiert, sollte `true` von der `process`-Methode zurückgeben, solange er eine Ausgabe erzeugt. Die Methode sollte `false` zurückgeben, sobald bekannt ist, dass sie keine Ausgabe mehr erzeugen wird. Zum Beispiel sollte der Prozessor eines [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) `true` von der `process`-Methode zurückgeben, während der Buffer spielt, und anfangen `false` zurückzugeben, wenn der Buffer abgespielt wurde (es gibt keine Möglichkeit, `play` erneut auf demselben [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) aufzurufen).
2. Ein Knoten, der seinen Eingang transformiert. Ein Prozessor, der einen solchen Knoten implementiert, sollte `false` von der `process`-Methode zurückgeben, um das Vorhandensein aktiver Eingabeknoten und Referenzen auf den Knoten zu ermöglichen, festzustellen, ob er zur Müllsammlung freigegeben werden kann. Ein Beispiel für einen Knoten mit diesem Verhalten ist der [`GainNode`](/de/docs/Web/API/GainNode). Sobald keine Eingaben mehr verbunden und Referenzen beibehalten sind, kann kein Verstärkungsfaktor mehr auf irgendetwas angewendet werden, sodass er zur Müllsammlung freigegeben werden kann.
3. Ein Knoten, der seinen Eingang transformiert, aber eine sogenannte _Tail-Time_ hat — das bedeutet, dass er für eine gewisse Zeit eine Ausgabe produziert, selbst nachdem seine Eingänge getrennt oder inaktiv (null-Kanäle erzeugend) sind. Ein Prozessor, der einen solchen Knoten implementiert, sollte `true` von der `process`-Methode für den Zeitraum der _Tail-Time_ zurückgeben, beginnend sobald Eingänge mit null-Kanälen gefunden werden. Ein Beispiel für einen solchen Knoten ist der [`DelayNode`](/de/docs/Web/API/DelayNode) — er hat eine _Tail-Time_, die seiner [`delayTime`](/de/docs/Web/API/DelayNode/delayTime)-Eigenschaft entspricht.

> [!NOTE]
> Das Fehlen einer `return`-Anweisung bedeutet, dass die Methode `undefined` zurückgibt, und da dies ein als false gewerteter Wert ist, ist es so, als ob `false` zurückgegeben wird. Das Weglassen einer expliziten `return`-Anweisung kann schwer zu erkennende Probleme für Ihre Knoten verursachen.

### Ausnahmen

Da die `process()`-Methode vom Benutzer implementiert wird, kann sie alles werfen. Wenn ein nicht aufgefangener Fehler geworfen wird, gibt der Knoten ein [`processorerror`](/de/docs/Web/API/AudioWorkletNode/processorerror_event)-Ereignis aus und gibt für den Rest seines Lebenszyklus Stille aus.

## Beispiele

In diesem Beispiel erstellen wir einen `AudioWorkletProcessor`, der weißes Rauschen zu seiner ersten Ausgabe ausgibt. Der Gain kann durch den `customGain`-Parameter gesteuert werden.

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

Dies ist keine Methode, die von Browsern bereitgestellt wird, sondern eine Rückrufmethode, die im Client-Code geschrieben werden muss.

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
