---
title: "AudioWorkletProcessor: process()-Methode"
short-title: process()
slug: Web/API/AudioWorkletProcessor/process
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Audio API")}}

Die **`process()`** Methode einer von der {{domxref("AudioWorkletProcessor")}} abgeleiteten Klasse implementiert den Audiobearbeitungsalgorithmus für das Audio-Processor-Worklet.

Obwohl die Methode nicht Teil des {{domxref("AudioWorkletProcessor")}} Interfaces ist, muss jede Implementierung von `AudioWorkletProcessor` eine `process()` Methode bereitstellen.

Die Methode wird synchron aus dem Audio-Rendering-Thread aufgerufen, einmal für jeden Block von Audio (auch als Rendering-Quantum bekannt), der durch den entsprechenden {{domxref("AudioWorkletNode")}} des Prozessors geleitet wird. Mit anderen Worten, jedes Mal, wenn ein neuer Audioblock bereit ist, von Ihrem Prozessor manipuliert zu werden, wird Ihre `process()`-Funktion aufgerufen, um dies zu tun.

> [!NOTE]
> Derzeit sind Audio-Datenblöcke immer 128 Frames lang, das heißt, sie enthalten 128 32-Bit-Gleitkomma-Proben für jeden der Eingabekanäle. Es gibt jedoch bereits Pläne, die Spezifikation zu überarbeiten, um zu ermöglichen, dass die Größe der Audio-Blöcke je nach Umständen geändert werden kann (zum Beispiel, wenn die Audio-Hardware oder die CPU-Auslastung bei größeren Blockgrößen effizienter ist). Daher _müssen Sie immer die Größe des Sample-Arrays überprüfen_, anstatt von einer bestimmten Größe auszugehen.
>
> Diese Größe kann sich sogar im Laufe der Zeit ändern, daher sollten Sie nicht nur den ersten Block betrachten und davon ausgehen, dass die Sample-Puffer immer die gleiche Größe haben werden.

## Syntax

```js-nolint
process(inputs, outputs, parameters)
```

### Parameter

- `inputs`

  - : Ein Array von _Inputs_, die mit dem Node verbunden sind, wobei jedes Element wiederum ein Array von _Kanälen_ ist. Jeder _Kanal_ ist ein {{jsxref("Float32Array")}}, das 128 Samples enthält. Zum Beispiel greift `inputs[n][m][i]` auf den _n_-ten Input, _m_-ten Kanal dieses Inputs und _i_-tes Sample dieses Kanals zu.

    Jeder Sample-Wert liegt im Bereich von `[-1 .. 1]`.

    Die Anzahl der _Inputs_ und somit die Länge dieses Arrays ist bei der Konstruktion des Nodes festgelegt (siehe {{domxref("AudioWorkletNode")}}). Wenn kein aktiver Node mit dem _n_-ten Input des Nodes verbunden ist, wird `inputs[n]` ein leeres Array sein (kein Eingabekanal verfügbar).

    Die Anzahl der _Kanäle_ in jedem Input kann je nach {{domxref("AudioNode.channelCount", "channelCount")}}- und {{domxref("AudioNode.channelCountMode", "channelCountMode")}}-Eigenschaften variieren.

- `outputs`
  - : Ein Array von _Outputs_, das in seiner Struktur dem `inputs`-Parameter ähnlich ist. Es soll während der Ausführung der `process()` Methode gefüllt werden. Jeder der Output-Kanäle ist standardmäßig mit Nullen gefüllt - der Prozessor wird keine Geräusche ausgeben, es sei denn, die Output-Arrays werden modifiziert.
- `parameters`

  - : Ein Objekt, das String-Schlüssel und {{jsxref("Float32Array")}}-Werte enthält. Für jeden benutzerdefinierten {{domxref("AudioParam")}}, der mit dem {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} Getter definiert wurde, ist der Schlüssel im Objekt ein `name` dieses {{domxref("AudioParam")}}, und der Wert ist ein {{jsxref("Float32Array")}}. Die Werte des Arrays werden berechnet, indem geplante Automationsevents berücksichtigt werden.

    Wenn die Automationsrate des Parameters [`"a-rate"`](/de/docs/Web/API/AudioParam#a-rate) ist, enthält das Array 128 Werte - einen für jeden Frame im aktuellen Audioblock. Wenn während der Zeit, die vom aktuellen Block dargestellt wird, keine Automation stattfindet, kann das Array einen einzigen Wert enthalten, der für den gesamten Block konstant ist, anstelle von 128 identischen Werten.

    Wenn die Automationsrate [`"k-rate"`](/de/docs/Web/API/AudioParam#k-rate) ist, enthält das Array einen einzigen Wert, der für jeden der 128 Frames verwendet werden soll.

### Rückgabewert

Ein Boolean-Wert, der angibt, ob der {{domxref("AudioWorkletNode")}} auch dann aktiv bleiben soll, wenn die interne Logik des {{Glossary("user agent", "User-Agents")}} andernfalls entscheiden würde, dass es sicher ist, den Node zu schließen.

Der zurückgegebene Wert lässt Ihren Prozessor Einfluss auf die Lebenszeitpolitik des {{domxref("AudioWorkletProcessor")}} und des Nodes, dem er gehört, haben. Wenn die Kombination des Rückgabewerts und des Zustands des Nodes den Browser dazu veranlasst, den Node zu stoppen, wird `process()` nicht erneut aufgerufen.

Die Rückgabe von `true` zwingt die Web Audio API, den Node am Leben zu erhalten, während die Rückgabe von `false` dem Browser erlaubt, den Node zu beenden, wenn er weder neue Audiodaten erzeugt noch Daten über seine Eingänge empfängt, die er verarbeitet.

Die drei häufigsten Typen von Audio-Nodes sind:

1. Eine Quelle von Ausgängen. Ein {{domxref("AudioWorkletProcessor")}}, der einen solchen Node implementiert, sollte `true` von der `process`-Methode zurückgeben, solange er einen Output erzeugt. Die Methode sollte `false` zurückgeben, sobald bekannt ist, dass sie keinen Output mehr erzeugen wird. Zum Beispiel nehmen Sie den {{domxref("AudioBufferSourceNode")}} - der Prozessor hinter einem solchen Node sollte `true` von der `process`-Methode zurückgeben, während der Buffer abgespielt wird, und `false` zurückgeben, wenn das Abspielen des Buffers beendet ist (es gibt keine Möglichkeit, `play` auf demselben {{domxref("AudioBufferSourceNode")}} erneut aufzurufen).
2. Ein Node, der seine Eingabe transformiert. Ein Prozessor, der einen solchen Node implementiert, sollte `false` von der `process`-Methode zurückgeben, um es der Präsenz aktiver Eingabeknoten und Verweise auf den Node zu erlauben, um zu bestimmen, ob er mit Müll belegt werden kann. Ein Beispiel für einen Node mit diesem Verhalten ist der {{domxref("GainNode")}}. Sobald keine Eingänge mehr verbunden sind und Verweise beibehalten werden, kann keine Verstärkung mehr angewendet werden, sodass er sicher mit Müll belegt werden kann.
3. Ein Node, der seine Eingabe transformiert, aber eine sogenannte _Tail-Time_ hat - das bedeutet, dass er für einige Zeit einen Output erzeugen wird, selbst nachdem seine Eingänge getrennt oder inaktiv sind (Null-Kanäle erzeugen). Ein Prozessor, der einen solchen Node implementiert, sollte für die Dauer der _Tail-Time_ `true` von der `process` Methode zurückgeben und beginnen, sobald Eingänge gefunden werden, die Null-Kanäle enthalten. Ein Beispiel für einen solchen Node ist der {{domxref("DelayNode")}} - er hat eine _Tail-Time_, die seiner {{domxref("DelayNode.delayTime", "delayTime")}} Eigenschaft entspricht.

> [!NOTE]
> Ein Fehlen der `return`-Anweisung bedeutet, dass die Methode `undefined` zurückgibt, und da dies ein falsy-Wert ist, ist es so, als würde `false` zurückgegeben. Das Auslassen einer expliziten `return`-Anweisung kann schwer zu erkennende Probleme für Ihre Nodes verursachen.

### Ausnahmen

Da die `process()`-Methode vom Benutzer implementiert wird, kann sie alles werfen. Wenn ein nicht abgefangener Fehler auftritt, wird der Node ein {{domxref("AudioWorkletNode.processorerror_event", "processorerror")}}-Ereignis auslösen und für den Rest seines Lebens Schweigen ausgeben.

## Beispiele

In diesem Beispiel erstellen wir einen `AudioWorkletProcessor`, der Weißes Rauschen an seinen ersten Ausgang ausgibt. Der Gain kann durch den `customGain` Parameter gesteuert werden.

```js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // nimmt den ersten Ausgang
    const output = outputs[0];
    // füllt jeden Kanal mit zufälligen Werten multipliziert mit Gain
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        // generiert zufälligen Wert für jede Sample
        // Math.random Bereich ist [0; 1); wir benötigen [-1; 1]
        // dies schließt den genauen Wert 1 nicht ein, ist aber für den Moment zur Vereinfachung in Ordnung
        channel[i] =
          (Math.random() * 2 - 1) *
          // das Array kann 1 oder 128 Werte enthalten
          // abhängig davon, ob die Automation vorhanden ist
          // und ob die Automationsrate k-rate oder a-rate ist
          (parameters["customGain"].length > 1
            ? parameters["customGain"][i]
            : parameters["customGain"][0]);
      }
    });
    // da dies ein Quellnode ist, der seinen eigenen Output generiert,
    // geben wir true zurück, damit er nicht versehentlich mit Müll belegt wird
    // wenn wir keine Verweise auf ihn im Hauptthread haben
    return true;
  }
  // definiert den customGain-Parameter, der in der process-Methode verwendet wird
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

## Browserkompatibilität

Dies ist keine Methode, die von Browsern bereitgestellt wird, sondern eine Rückrufmethode, die im Client-Code geschrieben werden muss.

## Siehe auch

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
