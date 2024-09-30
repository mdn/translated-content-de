---
title: Hintergrund-Audioverarbeitung mit AudioWorklet
slug: Web/API/Web_Audio_API/Using_AudioWorklet
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt, wie Sie einen Audio-Worklet-Prozessor erstellen und ihn in einer Web-Audio-Anwendung verwenden.

Als die Web Audio API erstmals in Browsern eingeführt wurde, ermöglichte sie die Verwendung von JavaScript-Code zur Erstellung benutzerdefinierter Audioprozessoren, die aufgerufen werden, um Audio in Echtzeit zu manipulieren. Der Nachteil des `ScriptProcessorNode` war, dass er im Hauptthread lief und daher alles andere blockierte, bis seine Ausführung beendet war. Dies war alles andere als ideal, insbesondere für etwas, das so rechenaufwändig sein kann wie die Audioverarbeitung.

Hier kommt [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ins Spiel. Das Audio-Worklet eines Audiokontextes ist ein [`Worklet`](/de/docs/Web/API/Worklet), das außerhalb des Hauptthreads läuft und Audiodaten verarbeitet, die durch Aufrufen der Methode [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) des Audiokontextes hinzugefügt wurden. Der Aufruf von `addModule()` lädt die angegebene JavaScript-Datei, die die Implementierung des Audioprozessors enthalten sollte. Mit dem registrierten Prozessor können Sie einen neuen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellen, der die Audiodaten durch den Code des Prozessors leitet, wenn der Knoten zusammen mit anderen Audioknoten in die Audiokette eingebunden wird.

Es ist erwähnenswert, dass Ihr Prozessor, da die Audiobearbeitung oft erhebliche Berechnungen erfordert, erheblich davon profitieren könnte, wenn er mit [WebAssembly](/de/docs/WebAssembly) erstellt wird, was nahezu native oder vollständig native Leistung für Webapps bietet. Die Implementierung Ihres Audiobearbeitungsalgorithmus mit WebAssembly kann die Leistung erheblich verbessern.

## Überblick auf hoher Ebene

Bevor wir die Nutzung von AudioWorklet Schritt für Schritt betrachten, beginnen wir mit einem kurzen Überblick auf hoher Ebene darüber, was erforderlich ist.

1. Erstellen Sie ein Modul, das eine Audioworklet-Prozessor-Klasse definiert, die auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) basiert und Audio von einer oder mehreren eingehenden Quellen entgegennimmt, ihre Operation auf den Daten ausführt und die resultierenden Audiodaten ausgibt.
2. Greifen Sie über die Eigenschaft [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) des Audiokontextes auf das [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) zu und rufen Sie die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) des Audio-Worklets auf, um das Audioworklet-Prozessormodul zu installieren.
3. Erstellen Sie bei Bedarf Audiobearbeitungsknoten, indem Sie den Namen des Prozessors (der durch das Modul definiert ist) an den Konstruktor von [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) übergeben.
4. Richten Sie alle Audioparameter ein, die der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) benötigt oder die Sie konfigurieren möchten. Diese sind im Modul des Audioworklet-Prozessors definiert.
5. Verbinden Sie die erstellten `AudioWorkletNode`s in Ihre Audiobearbeitungspipeline wie jeden anderen Knoten ein und verwenden Sie dann Ihre Audiopipeline wie gewohnt.

Im weiteren Verlauf dieses Artikels werden wir diese Schritte genauer betrachten, mit Beispielen (einschließlich funktionierender Beispiele, die Sie selbst ausprobieren können).

Der Beispielcode auf dieser Seite basiert auf [diesem funktionierenden Beispiel](https://mdn.github.io/webaudio-examples/audioworklet/), das Teil des [GitHub-Repositoriums für Web Audio-Beispiele von MDN](https://github.com/mdn/webaudio-examples/) ist. Das Beispiel erstellt einen Oszillator-Knoten und fügt diesem vor der Ausgabe des resultierenden Sounds mit einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) weißes Rauschen hinzu. Es gibt Schieberegler für die Steuerung der Verstärkung sowohl des Oszillators als auch der Ausgabe des Audioworklets.

[**Sehen Sie sich den Code an**](https://github.com/mdn/webaudio-examples/tree/main/audioworklet)

[**Probieren Sie es live aus**](https://mdn.github.io/webaudio-examples/audioworklet/)

## Erstellen eines Audioworklet-Prozessors

Im Wesentlichen wird ein Audioworklet-Prozessor (den wir im Allgemeinen entweder als "Audioprozessor" oder einfach nur als "Prozessor" bezeichnen werden, da dieser Artikel sonst etwa doppelt so lang wäre) mithilfe eines JavaScript-Moduls implementiert, das die benutzerdefinierte Audioprozessor-Klasse definiert und installiert.

### Struktur eines Audioworklet-Prozessors

Ein Audioworklet-Prozessor ist ein JavaScript-Modul, das Folgendes umfasst:

- Eine JavaScript-Klasse, die den Audioprozessor definiert. Diese Klasse erweitert die [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) Klasse.
- Die Audioprozessor-Klasse muss eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode implementieren, die eingehende Audiodaten empfängt und die manipulierten Daten zurückschreibt.
- Das Modul installiert die neue Audioworklet-Prozessorklasse durch den Aufruf von [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor), wobei ein Name für den Audioprozessor und die Klasse, die den Prozessor definiert, angegeben werden.

Ein einzelnes Audioworklet-Prozessormodul kann mehrere Prozessorklassen definieren, die jeweils mit individuellen Aufrufen von `registerProcessor()` registriert werden. Solange jede einen eindeutigen Namen hat, funktioniert dies einwandfrei. Es ist auch effizienter, als mehrere Module über das Netzwerk oder sogar die lokale Festplatte des Benutzers zu laden.

### Grundlegendes Codegerüst

Das grundlegendste Gerüst einer Audioprozessorklasse sieht so aus:

```js
class MyAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputList, outputList, parameters) {
    // Using the inputs (or not, as needed),
    // write the output into each of the outputs
    // …
    return true;
  }
}

registerProcessor("my-audio-processor", MyAudioProcessor);
```

Nach der Implementierung des Prozessors erfolgt ein Aufruf der globalen Funktion [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor), die nur im Kontext des Audiokonteksts [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) verfügbar ist, als Ergebnis Ihres Aufrufs von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule). Dieser Aufruf von `registerProcessor()` registriert Ihre Klasse als Grundlage für alle [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), die erstellt werden, wenn [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)s eingerichtet werden.

Dies ist das grundlegendste Gerüst und hat tatsächlich keinen Effekt, bis dem `process()`-Knoten Code hinzugefügt wird, um etwas mit diesen Eingaben und Ausgaben zu tun. Damit kommen wir dazu, über diese Eingaben und Ausgaben zu sprechen.

### Die Eingabe- und Ausgabelisten

Die Listen der Eingaben und Ausgaben können zunächst etwas verwirrend sein, obwohl sie eigentlich sehr einfach sind, wenn man einmal verstanden hat, was vor sich geht.

Fangen wir innen an und arbeiten uns nach außen vor. Im Wesentlichen wird das Audio für einen einzelnen Audiokanal (wie z.B. den linken Lautsprecher oder den Subwoofer) als [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) dargestellt, dessen Werte die einzelnen Audioproben sind. Der Spezifikation nach enthält jeder Block von Audiodaten, den Ihre `process()`-Funktion empfängt, 128 Frames (also 128 Proben für jeden Kanal), aber es ist geplant, dass _diese Zahl sich in der Zukunft ändern wird_ und möglicherweise je nach Umständen variiert, sodass Sie _immer_ die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length) des Arrays prüfen sollten, anstatt eine bestimmte Größe anzunehmen. Es wird jedoch garantiert, dass Eingaben und Ausgaben die gleiche Blocklänge haben.

Jede Eingabe kann eine Anzahl von Kanälen haben. Eine Mono-Eingabe hat einen einzigen Kanal; eine Stereo-Eingabe hat zwei Kanäle. Surround-Sound könnte sechs oder mehr Kanäle haben. Jede Eingabe ist also wiederum ein Array von Kanälen. Das heißt, ein Array von `Float32Array`-Objekten.

Dann kann es mehrere Eingaben geben, sodass die `inputList` ein Array von Arrays von `Float32Array`-Objekten ist. Jede Eingabe kann eine unterschiedliche Anzahl von Kanälen haben, und jeder Kanal hat sein eigenes Array von Proben.

Daher, gegeben der Eingabeliste `inputList`:

```js
const numberOfInputs = inputList.length;
const firstInput = inputList[0];

const firstInputChannelCount = firstInput.length;
const firstInputFirstChannel = firstInput[0]; // (or inputList[0][0])

const firstChannelByteCount = firstInputFirstChannel.length;
const firstByteOfFirstChannel = firstInputFirstChannel[0]; // (or inputList[0][0][0])
```

Die Ausgabeliste ist genau so strukturiert; es handelt sich um ein Array von Ausgaben, von denen jede ein Array von Kanälen ist, von denen jeder ein `Float32Array`-Objekt ist, das die Proben für diesen Kanal enthält.

Wie Sie die Eingaben verwenden und wie Sie die Ausgaben generieren, hängt sehr von Ihrem Prozessor ab. Wenn Ihr Prozessor nur ein Generator ist, kann er die Eingaben ignorieren und einfach den Inhalt der Ausgaben durch die generierten Daten ersetzen. Oder Sie können jede Eingabe unabhängig bearbeiten, einen Algorithmus auf die eingehenden Daten auf jedem Kanal jeder Eingabe anwenden und die Ergebnisse in die entsprechenden Kanäle der Ausgaben schreiben (beachten Sie, dass die Anzahl der Eingaben und Ausgaben unterschiedlich sein kann und die Anzahl der Kanäle auf diesen Eingaben und Ausgaben ebenfalls unterschiedlich sein kann). Oder Sie können alle Eingaben nehmen und Berechnungen durchführen, die in einem einzelnen Ausgabekanal resultieren (oder alle Ausgabekanäle mit denselben Daten füllen).

Das bleibt ganz Ihnen überlassen. Dies ist ein sehr leistungsfähiges Werkzeug in Ihrem Audioprogrammier-Toolkit.

### Verarbeitung mehrerer Eingaben

Sehen wir uns eine Implementierung von `process()` an, die mehrere Eingaben verarbeiten kann, wobei jede Eingabe zur Generierung der entsprechenden Ausgabe verwendet wird. Alle überzähligen Eingaben werden ignoriert.

```js
process(inputList, outputList, parameters) {
  const sourceLimit = Math.min(inputList.length, outputList.length);

  for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
    const input = inputList[inputNum];
    const output = outputList[inputNum];
    const channelCount = Math.min(input.length, output.length);

    for (let channelNum = 0; channelNum < channelCount; channelNum++) {
      input[channelNum].forEach((sample, i) => {
        // Manipulate the sample
        output[channelNum][i] = sample;
      });
    }
  };

  return true;
}
```

Beachten Sie, dass wir mit [`Math.min()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/min) sicherstellen, dass wir nur so viele Kanäle verarbeiten, wie im Ausgabenverzeichnis Platz ist. Die gleiche Überprüfung erfolgt, wenn bestimmt wird, wie viele Kanäle in der aktuellen Eingabe verarbeitet werden sollen; wir verarbeiten nur so viele, wie im Zielausgabeverzeichnis Platz ist. Dies vermeidet Fehler aufgrund des Durchlaufens dieser Arrays.

### Mischen von Eingaben

Viele Knoten führen **Misch** operationen durch, bei denen die Eingaben in irgendeiner Weise zu einer einzigen Ausgabe kombiniert werden. Dies wird im folgenden Beispiel veranschaulicht.

```js
process(inputList, outputList, parameters) {
  const sourceLimit = Math.min(inputList.length, outputList.length);
  for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
    let input = inputList[inputNum];
    let output = outputList[0];
    let channelCount = Math.min(input.length, output.length);

    for (let channelNum = 0; channelNum < channelCount; channelNum++) {
      for (let i = 0; i < input[channelNum].length; i++) {
        let sample = output[channelNum][i] + input[channelNum][i];

        if (sample > 1.0) {
          sample = 1.0;
        } else if (sample < -1.0) {
          sample = -1.0;
        }

        output[channelNum][i] = sample;
      }
    }
  };

  return true;
}
```

Dies ist in vielerlei Hinsicht ähnlicher Code wie das vorherige Beispiel, aber nur die erste Ausgabe—`outputList[0]`—wird verändert. Jede Probe wird zur entsprechenden Probe im Ausgabepuffer hinzugefügt, mit einem einfachen Codefragment, um zu verhindern, dass die Proben den zulässigen Bereich von -1.0 bis 1.0 überschreiten, indem die Werte begrenzt werden; es gibt andere Möglichkeiten, das Clipping zu vermeiden, die möglicherweise weniger verzerrungsanfällig sind, aber dies ist ein einfaches Beispiel, das besser ist als nichts.

## Lebensdauer eines Audioworklet-Prozessors

Der einzige Weg, wie Sie die Lebensdauer Ihres Audioworklet-Prozessors beeinflussen können, ist der durch `process()` zurückgegebene Wert, der ein Boolescher Wert sein sollte, der angibt, ob die Entscheidung des [Benutzeragenten](/de/docs/Glossary/user_agent) außer Kraft gesetzt werden soll, ob Ihr Knoten noch verwendet wird oder nicht.

Grundsätzlich ist die Lebensdauerpolitik jedes Audioknotens einfach: Wenn der Knoten weiterhin aktiv Audiodaten verarbeitet wird, bleibt er in Verwendung. Im Fall eines [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) wird der Knoten als aktiv angesehen, wenn seine `process()`-Funktion `true` zurückgibt _und_ der Knoten entweder Inhalte als Quelle für Audiodaten erzeugt oder Daten von einem oder mehreren Eingängen empfängt.

Die Angabe eines Wertes von `true` als Ergebnis Ihrer `process()`-Funktion sagt der Web Audio API im Wesentlichen, dass Ihr Prozessor weiterhin aufgerufen werden muss, selbst wenn die API denkt, dass für Sie nichts mehr zu tun ist. Mit anderen Worten überschreibt `true` die Logik der API und gibt Ihnen die Kontrolle über die Lebensdauer-Richtlinie Ihres Prozessors, indem es den Prozessor im Besitz des [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) hält, selbst wenn die API sonst entscheiden würde, den Knoten herunterzufahren.

Wenn `false` aus der `process()`-Methode zurückgegeben wird, teilt dies der API mit, dass sie ihrer normalen Logik folgen und Ihren Prozessorknoten herunterfahren soll, wenn sie es für angebracht hält. Wenn die API feststellt, dass Ihr Knoten nicht mehr benötigt wird, wird `process()` nicht erneut aufgerufen.

> [!NOTE]
> Leider implementiert Chrome derzeit diesen Algorithmus nicht auf eine Weise, die dem aktuellen Standard entspricht. Stattdessen hält es den Knoten am Leben, wenn Sie `true` zurückgeben, und schaltet ihn ab, wenn Sie `false` zurückgeben. Daher müssen Sie aus Kompatibilitätsgründen immer `true` von `process()` zurückgeben, zumindest in Chrome. Sobald [dieses Chrome-Problem](https://crbug.com/921354) behoben ist, sollten Sie dieses Verhalten, wenn möglich, ändern, da es möglicherweise einen leichten negativen Einfluss auf die Leistung hat.

## Erstellung eines Audioprozessorarbeitknoten

Um einen Audioknoten zu erstellen, der Audio-Datenblöcke durch einen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) pumpt, müssen Sie die folgenden einfachen Schritte befolgen:

1. Laden und installieren Sie das Audioprozessormodul
2. Erstellen Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), indem Sie das zu verwendende Audioprozessormodul über seinen Namen angeben
3. Verbinden Sie Eingaben mit dem `AudioWorkletNode` und seine Ausgaben mit geeigneten Zielen (entweder anderen Knoten oder der [`AudioContext`](/de/docs/Web/API/AudioContext) Objekt [`destination`](/de/docs/Web/API/BaseAudioContext/destination) Eigenschaft).

Um einen Audioworklet-Prozessor zu verwenden, können Sie einen Code verwenden, der dem folgenden ähnlich ist:

```js
let audioContext = null;

async function createMyAudioProcessor() {
  if (!audioContext) {
    try {
      audioContext = new AudioContext();
      await audioContext.resume();
      await audioContext.audioWorklet.addModule("module-url/module.js");
    } catch (e) {
      return null;
    }
  }

  return new AudioWorkletNode(audioContext, "processor-name");
}
```

Diese `createMyAudioProcessor()`-Funktion erstellt und gibt eine neue Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zurück, die so konfiguriert ist, dass sie Ihren Audioprozessor verwendet. Sie kümmert sich auch darum, den Audiokontext zu erstellen, falls dies noch nicht geschehen ist.

Um sicherzustellen, dass der Kontext verwendbar ist, beginnt dies damit, den Kontext zu erstellen, falls er noch nicht verfügbar ist, und fügt dann das Modul mit dem Prozessor zum Worklet hinzu. Sobald das erledigt ist, wird eine neue Instanz von `AudioWorkletNode` instanziiert und zurückgegeben. Sobald Sie diesen in der Hand haben, verbinden Sie ihn mit anderen Knoten und verwenden ihn wie jeden anderen Knoten.

Sie können dann einen neuen Audioprozessorknoten folgendermaßen erstellen:

```js
let newProcessorNode = await createMyAudioProcessor();
```

Wenn der zurückgegebene Wert, `newProcessorNode`, nicht `null` ist, haben wir einen gültigen Audiokontext mit seinem Rauschenprozessor-Knoten an Ort und Stelle und bereit zur Verwendung.

## Unterstützung von Audioparametern

Genau wie jeder andere Web Audio-Knoten unterstützt [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Parameter, die mit dem [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) geteilt werden, der die eigentliche Arbeit verrichtet.

### Unterstützung für Parameter zum Prozessor hinzufügen

Um Parameter zu einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) hinzuzufügen, müssen Sie sie in Ihrer auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) basierenden Prozessorklasse in Ihrem Modul definieren. Dies erfolgt durch Hinzufügen des statischen Getters [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors) zu Ihrer Klasse. Diese Funktion sollte ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam) Objekten zurückgeben, eines für jeden vom Prozessor unterstützten Parameter.

In der folgenden Implementierung von `parameterDescriptors()` enthält das zurückgegebene Array zwei `AudioParam`-Objekte. Das erste definiert `gain` als einen Wert zwischen 0 und 1, mit einem Standardwert von 0,5. Der zweite Parameter ist `frequency` und standardisiert auf 440,0, mit einem Bereich von 27,5 bis 4186,009, einschließlich.

```js
static get parameterDescriptors() {
  return [
   {
      name: "gain",
      defaultValue: 0.5,
      minValue: 0,
      maxValue: 1
    },
    {
      name: "frequency",
      defaultValue: 440.0,
      minValue: 27.5,
      maxValue: 4186.009
    }
  ];
}
```

Auf die Parameter Ihres Prozessorknotens zuzugreifen, ist so einfach, wie sie in dem `parameters`-Objekt nachzuschlagen, das in Ihre Implementierung von [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process) übergeben wird. In dem `parameters`-Objekt befinden sich Arrays, eines für jeden Ihrer Parameter, die die gleichen Namen wie Ihre Parameter haben.

- A-Raten-Parameter
  - : Für A-Raten-Parameter—Parameter, deren Werte sich automatisch im Laufe der Zeit ändern—ist der Eintrag des Parameters im `parameters`-Objekt ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam) Objekten, eines für jeden Frame im zu verarbeitenden Block. Diese Werte sollen auf die entsprechenden Frames angewendet werden.
- K-Raten-Parameter
  - : K-Raten-Parameter hingegen können nur einmal pro Block geändert werden, sodass das Array des Parameters nur einen einzigen Eintrag hat. Verwenden Sie diesen Wert für jeden Frame im Block.

Im folgenden Code sehen wir eine `process()`-Funktion, die einen `gain`-Parameter verarbeitet, der als A-Raten- oder K-Raten-Parameter verwendet werden kann. Unser Knoten unterstützt nur eine Eingabe, also nimmt er einfach die erste Eingabe in der Liste, wendet die Verstärkung darauf an und schreibt die resultierenden Daten in den Puffer der ersten Ausgabe.

```js
process(inputList, outputList, parameters) {
  const input = inputList[0];
  const output = outputList[0];
  const gain = parameters.gain;

  for (let channelNum = 0; channelNum < input.length; channelNum++) {
    const inputChannel = input[channelNum];
    const outputChannel = output[channelNum];

    // If gain.length is 1, it's a k-rate parameter, so apply
    // the first entry to every frame. Otherwise, apply each
    // entry to the corresponding frame.

    if (gain.length === 1) {
      for (let i = 0; i < inputChannel.length; i++) {
        outputChannel[i] = inputChannel[i] * gain[0];
      }
    } else {
      for (let i = 0; i < inputChannel.length; i++) {
        outputChannel[i] = inputChannel[i] * gain[i];
      }
    }
  }

  return true;
}
```

Hier wird, wenn `gain.length` anzeigt, dass nur ein einziger Wert im Array der `gain`-Parameterwerte vorhanden ist, der erste Eintrag im Array auf jeden Frame im Block angewendet. Andernfalls wird für jeden Frame im Block der entsprechende Eintrag in `gain[]` angewendet.

### Zugriff auf Parameter von der Hauptthread-Skript

Ihr Hauptthread-Skript kann auf die Parameter genau wie bei jedem anderen Knoten zugreifen. Dazu müssen Sie zuerst einen Verweis auf den Parameter erhalten, indem Sie die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Eigenschaft [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) des Knotens mit der Methode [`get()`](/de/docs/Web/API/AudioParamMap#get) aufrufen:

```js
let gainParam = myAudioWorkletNode.parameters.get("gain");
```

Der Wert, der zurückgegeben und in `gainParam` gespeichert wird, ist der [`AudioParam`](/de/docs/Web/API/AudioParam), der verwendet wird, um den `gain`-Parameter zu speichern. Sie können seinen Wert dann zu einem bestimmten Zeitpunkt ändern, indem Sie die Methode [`setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime) der [`AudioParam`](/de/docs/Web/API/AudioParam) verwenden.

Hier setzen wir beispielsweise den Wert auf `newValue`, der sofort wirksam wird.

```js
gainParam.setValueAtTime(newValue, audioContext.currentTime);
```

Sie können auch jede der anderen Methoden in der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle verwenden, um Änderungen über die Zeit anzuwenden, um geplante Änderungen zu stornieren, und so weiter.

Das Lesen des Wertes eines Parameters ist so einfach wie das Betrachten seiner [`value`](/de/docs/Web/API/AudioParam/value) Eigenschaft:

```js
let currentGain = gainParam.value;
```

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Enter Audio Worklet](https://developer.chrome.com/blog/audio-worklet/) (Chrome Developers Blog)
