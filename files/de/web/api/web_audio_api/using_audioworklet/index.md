---
title: Hintergrund-Audiodatenverarbeitung mit AudioWorklet
slug: Web/API/Web_Audio_API/Using_AudioWorklet
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt, wie man einen Audio Worklet Prozessor erstellt und in einer Web Audio-Anwendung verwendet.

Als die Web Audio API erstmals in Browser eingeführt wurde, beinhaltete sie die Möglichkeit, JavaScript-Code zu nutzen, um benutzerdefinierte Audio-Prozessoren zu erstellen, die für Echtzeit-Audiomanipulationen aufgerufen werden. Der Nachteil von `ScriptProcessorNode` war, dass es im Hauptthread lief und somit alles andere blockierte, bis es die Ausführung abgeschlossen hatte. Das war weit weniger ideal, insbesondere für etwas, das so rechenintensiv sein kann wie die Audiobearbeitung.

Hier kommt [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ins Spiel. Ein Audiokontext ist ein [`Worklet`](/de/docs/Web/API/Worklet), das außerhalb des Hauptthreads läuft und Audiobearbeitungscode, der durch den Aufruf der Methode [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) dem Kontext hinzugefügt wurde, ausführt. Der Aufruf von `addModule()` lädt die angegebene JavaScript-Datei, die die Implementierung des Audioprozessors enthalten sollte. Sobald der Prozessor registriert ist, können Sie einen neuen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellen, der das Audio durch den Code des Prozessors leitet, wenn der Node in die Kette der Audionodes zusammen mit anderen Audionodes eingefügt wird.

Es ist zu beachten, dass der Audioprozessor aufgrund der oft umfangreichen Berechnung von Audiobearbeitungen erheblich davon profitieren kann, mit [WebAssembly](/de/docs/WebAssembly) gebaut zu werden, das native oder nahezu native Leistung in Web-Anwendungen bringt. Die Implementierung Ihres Audiobearbeitungsalgorithmus mittels WebAssembly kann dessen Leistung erheblich verbessern.

## Überblick auf hoher Ebene

Bevor wir die Verwendung von AudioWorklet Schritt für Schritt betrachten, beginnen wir mit einem kurzen Überblick darüber, was dazugehört.

1. Erstellen Sie ein Modul, das eine Audio-Worklet-Prozessor-Klasse definiert, basierend auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), die Audio von einer oder mehreren eingehenden Quellen übernimmt, seine Operationen auf den Daten ausführt und die resultierenden Audiodaten ausgibt.
2. Greifen Sie über seine [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet)-Eigenschaft auf das Audio-Worklet des Audiokontextes zu und rufen Sie die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) des Audio-Worklets auf, um das Modul des Audio-Worklet-Prozessors zu installieren.
3. Erstellen Sie bei Bedarf Audioverarbeitungsnodes, indem Sie den Namen des Prozessors (der durch das Modul definiert wird) an den Konstruktor von [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) übergeben.
4. Richten Sie alle Audio-Parameter ein, die der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) benötigt oder die Sie konfigurieren möchten. Diese sind im Modul des Audio-Worklet-Prozessors definiert.
5. Verbinden Sie die erstellten `AudioWorkletNode`s in Ihre Audiobearbeitungspipeline, wie es bei jedem anderen Node der Fall sein wird, und verwenden Sie Ihre Audiopipeline wie üblich.

Im weiteren Verlauf dieses Artikels werden wir diese Schritte detaillierter betrachten, mit Beispielen (einschließlich funktionierender Beispiele, die Sie selbst ausprobieren können).

Der Beispielcode auf dieser Seite stammt aus [diesem funktionierenden Beispiel](https://mdn.github.io/webaudio-examples/audioworklet/), das Teil des [GitHub-Repositories für Web-Audio-Beispiele von MDN](https://github.com/mdn/webaudio-examples/) ist. Das Beispiel erstellt einen Oszillator-Node und fügt diesem über einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) weißes Rauschen hinzu, bevor der resultierende Klang ausgegeben wird. Schiebereglersteuerungen sind verfügbar, um die Verstärkung sowohl des Oszillators als auch des Audio-Worklet-Ausgangs zu steuern.

[**Den Code ansehen**](https://github.com/mdn/webaudio-examples/tree/main/audioworklet)

[**Live ausprobieren**](https://mdn.github.io/webaudio-examples/audioworklet/)

## Erstellen eines Audio-Worklet-Prozessors

Grundsätzlich wird ein Audio-Worklet-Prozessor (auf den wir aus Gründen der Kürze meistens als entweder "Audioprozessor" oder "Prozessor" verweisen) mit einem JavaScript-Modul implementiert, das die benutzerdefinierte Audioprozessor-Klasse definiert und installiert.

### Aufbau eines Audio-Worklet-Prozessors

Ein Audio-Worklet-Prozessor ist ein JavaScript-Modul, das aus Folgendem besteht:

- Eine JavaScript-Klasse, die den Audioprozessor definiert. Diese Klasse erweitert die [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Klasse.
- Die Audioprozessor-Klasse muss eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode implementieren, die eingehende Audiodaten empfängt und die von ihr manipulierten Daten zurückschreibt.
- Das Modul installiert die neue Audio-Worklet-Prozessor-Klasse durch den Aufruf von [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor), wobei ein Name für den Audioprozessor und die Klasse, die den Prozessor definiert, angegeben wird.

Ein einzelnes Audio-Worklet-Prozessor-Modul kann mehrere Prozessorklassen definieren, die jeweils mit individuellen Aufrufen an `registerProcessor()` registriert werden. Solange jede ihren eigenen eindeutigen Namen hat, wird dies problemlos funktionieren. Es ist auch effizienter als das Laden mehrerer Module aus dem Netzwerk oder sogar von der lokalen Festplatte des Benutzers.

### Grundlegendes Code-Gerüst

Das einfachste Gerüst einer Audioprozessor-Klasse sieht folgendermaßen aus:

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

Nach der Implementierung des Prozessors folgt ein Aufruf der globalen Funktion [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor), die nur im Gültigkeitsbereich des Audiokontextes [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) verfügbar ist, die den Prozessor-Skript als Ergebnis Ihres Aufrufs von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) aufruft. Dieser Aufruf von `registerProcessor()` registriert Ihre Klasse als Grundlage für alle [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)s, die erstellt werden, wenn [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)s eingerichtet werden.

Dies ist das einfachste Gerüst und hat tatsächlich keine Wirkung, bis dem `process()`-Code etwas hinzugefügt wird, das mit diesen Eingaben und Ausgaben zu tun hat. Damit kommen wir zur Diskussion über diese Eingaben und Ausgaben.

### Die Eingabe- und Ausgabelisten

Die Listen der Eingaben und Ausgaben können zunächst etwas verwirrend sein, auch wenn sie tatsächlich sehr einfach sind, sobald Sie verstehen, was passiert.

Lassen Sie uns von innen nach außen arbeiten. Grundsätzlich wird das Audio für einen einzelnen Audiokanal (z.B. den linken Lautsprecher oder den Subwoofer) als ein [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) dargestellt, dessen Werte die einzelnen Audiosamples sind. Gemäß der Spezifikation enthält jeder Block von Audio, den Ihre `process()`-Funktion erhält, 128 Frames (also 128 Samples für jeden Kanal), aber geplant ist, _dass sich dieser Wert in Zukunft ändern wird_ und möglicherweise je nach Umständen variiert, daher sollten Sie _immer_ die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length) des Arrays überprüfen, anstatt eine bestimmte Größe anzunehmen. Es ist jedoch garantiert, dass die Eingaben und Ausgaben dieselbe Blocklänge haben.

Jeder Eingang kann eine Anzahl von Kanälen haben. Ein Mono-Eingang hat einen einzigen Kanal; Stereo-Eingang hat zwei Kanäle. Surround-Sound könnte sechs oder mehr Kanäle haben. Daher ist jeder Eingang, wiederum, ein Array von Kanälen. Das heißt, ein Array von `Float32Array`-Objekten.

Dann kann es mehrere Eingaben geben, sodass `inputList` ein Array von Arrays von `Float32Array`-Objekten ist. Jeder Eingang kann eine unterschiedliche Anzahl von Kanälen haben, und jeder Kanal hat sein eigenes Array von Samples.

Daher, gegeben die Eingabeliste `inputList`:

```js
const numberOfInputs = inputList.length;
const firstInput = inputList[0];

const firstInputChannelCount = firstInput.length;
const firstInputFirstChannel = firstInput[0]; // (or inputList[0][0])

const firstChannelByteCount = firstInputFirstChannel.length;
const firstByteOfFirstChannel = firstInputFirstChannel[0]; // (or inputList[0][0][0])
```

Die Ausgabeliste ist genau gleich strukturiert; es ist ein Array von Ausgaben, von denen jede ein Array von Kanälen ist, von denen jeder ein `Float32Array`-Objekt ist, das die Samples für diesen Kanal enthält.

Wie Sie die Eingaben verwenden und wie Sie die Ausgaben generieren, hängt sehr stark von Ihrem Prozessor ab. Wenn Ihr Prozessor nur ein Generator ist, kann er die Eingaben ignorieren und nur die Inhalte der Ausgaben mit den generierten Daten ersetzen. Oder Sie können jede Eingabe unabhängig verarbeiten, indem Sie einen Algorithmus auf die eingehenden Daten auf jedem Kanal jeder Eingabe anwenden und die Ergebnisse in die entsprechenden Ausgabekanäle schreiben (beachten Sie, dass sich die Anzahl der Eingaben und Ausgaben unterscheiden kann und die Kanalzahlen auf diesen Eingaben und Ausgaben ebenfalls unterschiedlich sein können). Oder Sie können alle Eingaben nehmen und Mischungen oder andere Berechnungen durchführen, die dazu führen, dass eine einzige Ausgabe mit Daten gefüllt wird (oder alle Ausgaben mit denselben Daten gefüllt werden).

Es liegt vollständig bei Ihnen. Dies ist ein sehr mächtiges Werkzeug in Ihrem Audioprogrammier-Werkzeugkasten.

### Verarbeiten mehrerer Eingaben

Werfen wir einen Blick auf eine Implementierung von `process()`, die mehrere Eingaben verarbeiten kann, wobei jede Eingabe verwendet wird, um die entsprechende Ausgabe zu erzeugen. Überzählige Eingaben werden ignoriert.

```js
class MyAudioProcessor extends AudioWorkletProcessor {
  // …
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
    }

    return true;
  }
}
```

Beachten Sie, dass wir bei der Bestimmung der Anzahl von Quellen, die verarbeitet und an die entsprechenden Ausgaben gesendet werden, [`Math.min()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/min) verwenden, um sicherzustellen, dass wir nur so viele Kanäle verarbeiten, wie wir im Ausgabelisten-Puffer Platz haben. Die gleiche Überprüfung wird durchgeführt, um zu bestimmen, wie viele Kanäle im aktuellen Eingang verarbeitet werden sollen; wir verarbeiten nur so viele, wie es Platz im Zielausgang gibt. So vermeiden wir Fehler aufgrund der Überschreitung dieser Arrays.

### Mischen von Eingaben

Viele Nodes führen **Misch**operationen durch, bei denen die Eingaben auf irgendeine Weise in einer einzigen Ausgabe kombiniert werden. Dies wird in folgendem Beispiel demonstriert.

```js
class MyAudioProcessor extends AudioWorkletProcessor {
  // …
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
    }

    return true;
  }
}
```

Dies ist in vielerlei Hinsicht ähnlicher Code wie das vorherige Beispiel, aber nur der erste Ausgang—`outputList[0]`—wird verändert. Jedes Sample wird dem entsprechenden Sample im Ausgabe-Puffer hinzugefügt, mit einem einfachen Code-Fragment, das verhindert, dass die Samples den rechtlich zulässigen Bereich von -1.0 bis 1.0 überschreiten, indem die Werte begrenzt werden; es gibt andere Möglichkeiten, das Clipping, das vielleicht weniger anfällig für Verzerrungen ist, zu vermeiden, aber dies ist ein einfaches Beispiel, das besser als nichts ist.

## Lebensdauer eines Audio-Worklet-Prozessors

Die einzige Möglichkeit, wie Sie die Lebensdauer Ihres Audio-Worklet-Prozessors beeinflussen können, besteht in dem von `process()` zurückgegebenen Wert, der ein Boolean-Wert sein sollte, der angibt, ob die Entscheidung des {{Glossary("user_agent", "User-Agent")}} außer Kraft gesetzt werden soll, ob Ihr Node noch verwendet wird oder nicht.

Im Allgemeinen ist die Lebensdauerpolitik jedes Audio-Nodes einfach: Wenn der Node noch als aktiv angesehen wird, um Audio zu verarbeiten, wird er weiterhin verwendet. Im Fall eines [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) wird der Node als aktiv angesehen, wenn seine `process()`-Funktion `true` zurückgibt _und_ der Node entweder als Quelle für Audiodaten Inhalte erzeugt oder Daten von einem oder mehreren Eingängen erhält.

Die Angabe eines Werts von `true` als Ergebnis von `process()` an die Web Audio API bedeutet im Wesentlichen, dass Ihr Prozessor weiter aufgerufen werden muss, auch wenn die API denkt, dass es nichts mehr für Sie zu tun gibt. Mit anderen Worten, `true` setzt die Logik der API außer Kraft und gibt Ihnen die Kontrolle über die Lebensdauerpolitik Ihres Prozessors, wobei der `AudioWorkletNode`, der den Prozessor besitzt, weiterhin läuft, auch wenn es sonst entschieden wird, den Node herunterzufahren.

Das Zurückgeben von `false` von der `process()`-Methode teilt der API mit, dass sie ihrer normalen Logik folgen und Ihren Prozessor-Node herunterfahren soll, wenn sie dies für angemessen hält. Wenn die API feststellt, dass Ihr Node nicht mehr benötigt wird, wird `process()` nicht mehr aufgerufen.

> [!NOTE]
> Leider implementiert Chrome derzeit diesen Algorithmus nicht so, wie er dem aktuellen Standard entspricht. Stattdessen hält es den Node am Leben, wenn Sie `true` zurückgeben, und fährt ihn herunter, wenn Sie `false` zurückgeben. Daher müssen Sie aus Kompatibilitätsgründen immer `true` von `process()` zurückgeben, zumindest auf Chrome. Sobald jedoch [dieses Chrome-Problem](https://crbug.com/921354) gelöst ist, werden Sie dieses Verhalten ändern wollen, wenn möglich, da es möglicherweise eine leicht negative Auswirkung auf die Leistung hat.

## Erstellen eines Audio-Prozessor-Worklet-Nodes

Um einen Audio-Node zu erstellen, der Audio-Datenblöcke durch einen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) pumpt, müssen Sie die folgenden einfachen Schritte befolgen:

1. Laden und installieren Sie das Modul des Audioprozessors
2. Erstellen Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), indem Sie das zu verwendende Modul des Audioprozessors anhand seines Namens angeben
3. Verbinden Sie Eingänge mit dem `AudioWorkletNode` und seine Ausgänge mit geeigneten Zielen (entweder anderen Nodes oder mit der [`destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft des [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekts).

Um einen Audio-Worklet-Prozessor zu verwenden, können Sie ähnlichen Code wie den folgenden verwenden:

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

Diese `createMyAudioProcessor()`-Funktion erstellt und gibt eine neue Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zurück, die so konfiguriert ist, dass sie Ihren Audioprozessor verwendet. Sie kümmert sich auch um die Erstellung des Audiokontextes, falls dieser noch nicht vorhanden ist.

Um sicherzustellen, dass der Kontext verwendbar ist, wird zuerst der Kontext erstellt, wenn er noch nicht verfügbar ist, und dann das Modul, das den Prozessor enthält, zum Worklet hinzugefügt. Sobald das erledigt ist, wird eine neue Instanz von `AudioWorkletNode` instanziiert und zurückgegeben. Sobald Sie diese in der Hand haben, verbinden Sie sie mit anderen Nodes und verwenden Sie sie wie jeden anderen Node.

Sie können dann einen neuen Audioprozessor-Node erstellen, indem Sie dies tun:

```js
let newProcessorNode = await createMyAudioProcessor();
```

Wenn der zurückgegebene Wert, `newProcessorNode`, nicht-`null` ist, haben wir einen gültigen Audiokontext mit seinem Hiss-Prozessor-Node an Ort und Stelle und bereit zur Verwendung.

## Unterstützung von Audioparametern

Wie jeder andere Web Audio-Node unterstützt [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Parameter, die mit dem [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) geteilt werden, der die eigentliche Arbeit erledigt.

### Hinzufügen von Parameterunterstützung zum Prozessor

Um Parameter zu einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) hinzuzufügen, müssen Sie sie innerhalb Ihrer auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-basierenden Prozessorklasse in Ihrem Modul definieren. Dies geschieht durch das Hinzufügen des statischen Getters [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors) zu Ihrer Klasse. Diese Funktion sollte ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten zurückgeben, eines für jeden Parameter, der vom Prozessor unterstützt wird.

In der folgenden Implementierung von `parameterDescriptors()` enthält das zurückgegebene Array zwei `AudioParam`-Objekte. Das erste definiert `gain` als einen Wert zwischen 0 und 1, mit einem Standardwert von 0.5. Der zweite Parameter ist `frequency` und hat einen Standardwert von 440.0, mit einem Bereich von 27.5 bis 4186.009, einschließlich.

```js
class MyAudioProcessor extends AudioWorkletProcessor {
  // …
  static get parameterDescriptors() {
    return [
      {
        name: "gain",
        defaultValue: 0.5,
        minValue: 0,
        maxValue: 1,
      },
      {
        name: "frequency",
        defaultValue: 440.0,
        minValue: 27.5,
        maxValue: 4186.009,
      },
    ];
  }
}
```

Das Zugreifen auf die Parameter Ihres Prozessornodes ist so einfach wie das Nachschlagen im `parameters`-Objekt, das in Ihre Implementierung von [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process) übergeben wird. Im `parameters`-Objekt befinden sich Arrays, eines für jeden Ihrer Parameter, und sie haben dieselben Namen wie Ihre Parameter.

- A-rate Parameter
  - : Für A-rate Parameter—Parameter, deren Werte sich automatisch im Laufe der Zeit ändern—ist der Eintrag des Parameters im `parameters`-Objekt ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten, eines für jeden Frame im zu verarbeitenden Block. Diese Werte sind auf die entsprechenden Frames zu übernehmen.
- K-rate Parameter
  - : K-rate Parameter hingegen können sich nur einmal pro Block ändern, sodass das Array des Parameters nur einen einzigen Eintrag hat. Verwenden Sie diesen Wert für jeden Frame im Block.

Im folgenden Code sehen wir eine `process()`-Funktion, die einen `gain`-Parameter verarbeitet, der sowohl als A-rate als auch als K-rate-Parameter genutzt werden kann. Unser Node unterstützt nur einen Eingang, also überträgt er einfach den ersten Eingang in der Liste, wendet den Gain darauf an und schreibt die resultierenden Daten in den Puffer des ersten Ausgangs.

```js
class MyAudioProcessor extends AudioWorkletProcessor {
  // …
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
}
```

Hier, wenn `gain.length` darauf hinweist, dass es nur einen einzelnen Wert im Array des `gain` Parameters gibt, wird der erste Eintrag im Array auf jeden Frame im Block angewendet. Andernfalls wird für jeden Frame im Block der entsprechende Eintrag in `gain[]` angewendet.

### Zugreifen auf Parameter vom Hauptthread aus

Ihr Hauptthread-Skript kann auf die Parameter zugreifen, genau wie auf jeden anderen Node. Dazu müssen Sie zuerst eine Referenz auf den Parameter bekommen, indem Sie die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Eigenschaft [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters)'s [`get()`](/de/docs/Web/API/AudioParamMap#get) Methode aufrufen:

```js
let gainParam = myAudioWorkletNode.parameters.get("gain");
```

Der Wert, der zurückgegeben und in `gainParam` gespeichert wird, ist der [`AudioParam`](/de/docs/Web/API/AudioParam), der den `gain` Parameter speichert. Sie können dann den Wert mit der [`AudioParam`](/de/docs/Web/API/AudioParam)-Methode [`setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime) effektiv zu einer bestimmten Zeit ändern.

Hier, zum Beispiel, setzen wir den Wert auf `newValue`, sofort wirksam.

```js
gainParam.setValueAtTime(newValue, audioContext.currentTime);
```

Sie können ähnlich jede der anderen Methoden im [`AudioParam`](/de/docs/Web/API/AudioParam)-Interface verwenden, um Änderungen im Laufe der Zeit anzuwenden, geplante Änderungen zu stornieren und so weiter.

Das Lesen des Werts eines Parameters ist so einfach wie das Überprüfen seiner [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft:

```js
let currentGain = gainParam.value;
```

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Enter Audio Worklet](https://developer.chrome.com/blog/audio-worklet/) (Chrome-Entwickler-Blog)
