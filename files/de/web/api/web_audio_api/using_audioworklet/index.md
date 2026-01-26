---
title: Hintergrund-Audiobearbeitung mit AudioWorklet
slug: Web/API/Web_Audio_API/Using_AudioWorklet
l10n:
  sourceCommit: ddf6cf0b777f7c738dd3930e0ef964fec6c83535
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt, wie Sie einen Audio-Worklet-Prozessor erstellen und in einer Web-Audio-Anwendung verwenden können.

Als die Web Audio API erstmals in Browser eingeführt wurde, beinhaltete sie die Möglichkeit, JavaScript-Code zu verwenden, um benutzerdefinierte Audio-Prozessoren zu erstellen, die für Echtzeit-Audiomanipulationen aufgerufen wurden. Der Nachteil von `ScriptProcessorNode` bestand darin, dass er im Hauptthread lief und somit alles andere blockierte, bis seine Ausführung abgeschlossen war. Dies war alles andere als ideal, insbesondere für etwas, das so rechenintensiv sein kann wie die Audiobearbeitung.

Hier kommt [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ins Spiel. Ein Audio-Worklet eines Audio-Kontexts ist ein [`Worklet`](/de/docs/Web/API/Worklet), das außerhalb des Hauptthreads läuft und Audiobearbeitungscode ausführt, der hinzugefügt wird, indem die Methode [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) des Kontexts aufgerufen wird. Durch den Aufruf von `addModule()` wird die angegebene JavaScript-Datei geladen, die die Implementierung des Audioprozessors enthalten sollte. Mit dem registrierten Prozessor können Sie einen neuen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellen, der den Ton durch den Code des Prozessors leitet, wenn der Node in die Kette aus Audionodes zusammen mit anderen Audionodes eingefügt wird.

Es ist erwähnenswert, dass Ihr Prozessor aufgrund der oft erheblichen Berechnungen bei der Audiobearbeitung erheblich davon profitieren kann, mit [WebAssembly](/de/docs/WebAssembly) erstellt zu werden, was nahezu native oder vollständig native Leistung für Web-Apps bietet. Die Implementierung Ihres Audiobearbeitungsalgorithmus mit WebAssembly kann die Leistung deutlich verbessern.

## Überblick auf hoher Ebene

Bevor wir uns Schritt für Schritt mit der Verwendung von AudioWorklet befassen, beginnen wir mit einem kurzen Überblick über die beteiligten Schritte.

1. Erstellen Sie ein Modul, das eine Audio-Worklet-Prozessor-Klasse definiert, die auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) basiert, Audio von einer oder mehreren eingehenden Quellen übernimmt, die Verarbeitung der Daten durchführt und die resultierenden Audiodaten ausgibt.
2. Greifen Sie auf das [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) des Audiokontexts über dessen [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet)-Eigenschaft zu und rufen Sie die Methode [`addModule()`](/de/docs/Web/API/Worklet/addModule) des Audio-Worklets auf, um das Audio-Worklet-Prozessor-Modul zu installieren.
3. Erstellen Sie bei Bedarf Audiobearbeitungs-Nodes, indem Sie den Namen des Prozessors (der vom Modul definiert wird) an den [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode)-Konstruktor übergeben.
4. Richten Sie alle Audioparameter ein, die der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) benötigt oder die Sie konfigurieren möchten. Diese werden im Audio-Worklet-Prozessor-Modul definiert.
5. Verbinden Sie die erstellten `AudioWorkletNode`s in Ihre Audiobearbeitungskette ein, wie Sie es mit jedem anderen Node tun würden, und verwenden Sie dann Ihre Audiokette wie gewohnt.

Im Rest dieses Artikels werden wir diese Schritte ausführlicher betrachten, mit Beispielen (einschließlich funktionsfähiger Beispiele, die Sie selbst ausprobieren können).

Der auf dieser Seite gefundene Beispielcode stammt aus [diesem funktionierenden Beispiel](https://mdn.github.io/webaudio-examples/audioworklet/), das Teil des [GitHub-Repositoriums der Web-Audio-Beispiele von MDN](https://github.com/mdn/webaudio-examples/) ist. Das Beispiel erstellt einen Oszillator-Node und fügt mit einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) weißes Rauschen hinzu, bevor der resultierende Ton abgespielt wird. Es gibt Schieberegler zur Steuerung des Verstärkers sowohl für den Oszillator als auch für die Ausgabe des Audioworklets.

[**Code ansehen**](https://github.com/mdn/webaudio-examples/tree/main/audioworklet)

[**Live ausprobieren**](https://mdn.github.io/webaudio-examples/audioworklet/)

## Erstellen eines Audio-Worklet-Prozessors

Ein Audio-Worklet-Prozessor (den wir meistens entweder als „Audio-Prozessor“ oder einfach als „Prozessor“ bezeichnen werden, da dieser Artikel sonst doppelt so lang wäre) wird mit einem JavaScript-Modul implementiert, das die benutzerdefinierte Audio-Prozessor-Klasse definiert und installiert.

### Struktur eines Audio-Worklet-Prozessors

Ein Audio-Worklet-Prozessor ist ein JavaScript-Modul, das aus folgenden Komponenten besteht:

- Eine JavaScript-Klasse, die den Audioprozessor definiert. Diese Klasse erweitert die [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-Klasse.
- Die Audioprozessor-Klasse muss eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode implementieren, die eingehende Audiodaten empfängt und die vom Prozessor manipulierten Daten zurückschreibt.
- Das Modul installiert die neue Audio-Worklet-Prozessor-Klasse, indem es [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor) aufruft und einen Namen für den Audioprozessor und die Klasse, die den Prozessor definiert, angibt.

Ein einzelnes Audio-Worklet-Prozessor-Modul kann mehrere Prozessorklassen definieren, wobei jede von ihnen mit einem individuellen Aufruf von `registerProcessor()` registriert wird. Solange jeder Prozessor einen eigenen, einzigartigen Namen hat, funktioniert dies problemlos. Es ist auch effizienter, als mehrere Module aus dem Netzwerk oder gar vom lokalen Datenträger des Benutzers zu laden.

### Grundgerüst des Codes

Das einfachste Gerüst einer Audio-Prozessor-Klasse sieht folgendermaßen aus:

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

Nach der Implementierung des Prozessors folgt ein Aufruf der globalen Funktion [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor), die nur im Rahmen des Audio-Worklets (`AudioWorklet`) des Audiokontexts verfügbar ist, das der Aufrufer des Prozessorskripts als Folge Ihres Aufrufs von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) ist. Mit diesem Aufruf von `registerProcessor()` wird Ihre Klasse als Grundlage für alle [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) registriert, die beim Einrichten von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellt werden.

Dies ist das einfachste Gerüst und hat tatsächlich keine Wirkung, bis Code in `process()` hinzugefügt wird, um etwas mit diesen Eingaben und Ausgaben zu tun. Was uns dazu bringt, über diese Eingaben und Ausgaben zu sprechen.

### Die Listen der Eingaben und Ausgaben

Die Listen der Eingaben und Ausgaben können zunächst verwirrend sein, obwohl sie eigentlich sehr einfach sind, sobald man versteht, was vor sich geht.

Beginnen wir im Kern und arbeiten uns nach außen vor. Grundsätzlich wird der Ton für einen einzelnen Audiokanal (wie zum Beispiel den linken Lautsprecher oder den Subwoofer) als [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) dargestellt, dessen Werte die einzelnen Audiosamples sind. Laut Spezifikation enthält jeder Block von Audio, den Ihre `process()`-Funktion empfängt, 128 Frames (d.h. 128 Samples für jeden Kanal), aber es ist geplant, _dass sich dieser Wert in Zukunft ändern wird_, und er kann je nach Umständen variieren. Sie sollten _immer_ die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length) des Arrays überprüfen, anstatt von einer bestimmten Größe auszugehen. Es ist jedoch garantiert, dass die Eingaben und Ausgaben dieselbe Blocklänge haben.

Jede Eingabe kann eine Anzahl von Kanälen haben. Eine Mono-Eingabe hat einen einzelnen Kanal; eine Stereo-Eingabe hat zwei Kanäle. Surround-Sound kann sechs oder mehr Kanäle haben. Jede Eingabe ist also wiederum ein Array von Kanälen, das heißt ein Array von `Float32Array`-Objekten.

Es kann mehrere Eingaben geben, also ist `inputList` ein Array von Arrays von `Float32Array`-Objekten. Jede Eingabe kann eine unterschiedliche Anzahl von Kanälen haben, und jeder Kanal hat sein eigenes Array von Samples.

Daher sieht die Eingabeliste `inputList` folgendermaßen aus:

```js
const numberOfInputs = inputList.length;
const firstInput = inputList[0];

const firstInputChannelCount = firstInput.length;
const firstInputFirstChannel = firstInput[0]; // (or inputList[0][0])

const firstChannelByteCount = firstInputFirstChannel.length;
const firstByteOfFirstChannel = firstInputFirstChannel[0]; // (or inputList[0][0][0])
```

Die Ausgabeliste ist genau gleich strukturiert; sie ist ein Array von Ausgaben, von denen jede ein Array von Kanälen ist, von denen jeder ein `Float32Array`-Objekt ist, das die Samples für diesen Kanal enthält.

Wie Sie die Eingaben verwenden und wie Sie die Ausgaben erzeugen, hängt stark von Ihrem Prozessor ab. Wenn Ihr Prozessor nur ein Generator ist, kann er die Eingaben ignorieren und einfach die Inhalte der Ausgaben mit den generierten Daten ersetzen. Oder Sie können jede Eingabe unabhängig verarbeiten, indem Sie einen Algorithmus auf die eingehenden Daten in jedem Kanal jeder Eingabe anwenden und die Ergebnisse in den entsprechenden Kanälen der Ausgaben schreiben (dabei bedenken, dass sich die Anzahl der Eingaben und Ausgaben sowie die Anzahl der Kanäle auf diesen Eingaben und Ausgaben unterscheiden können). Oder Sie können alle Eingaben nehmen und Misch- oder andere Berechnungen durchführen, die dazu führen, dass eine einzelne Ausgabe mit Daten gefüllt wird (oder alle Ausgaben mit denselben Daten gefüllt werden).

Es liegt ganz bei Ihnen. Dies ist ein sehr leistungsfähiges Werkzeug in Ihrem Audio-Programmier-Werkzeugkasten.

### Verarbeitung mehrerer Eingaben

Schauen wir uns eine Implementierung von `process()` an, die mehrere Eingaben verarbeiten kann, wobei jede Eingabe verwendet wird, um die entsprechende Ausgabe zu erzeugen. Überschüssige Eingaben werden ignoriert.

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

Beachten Sie, dass wir bei der Bestimmung der Anzahl der Quellen, die zu verarbeiten und an die entsprechenden Ausgaben weiterzuleiten sind, [`Math.min()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/min) verwenden, um sicherzustellen, dass wir nur so viele Kanäle verarbeiten, wie es Platz in der Ausgabeliste gibt. Dieselbe Prüfung wird durchgeführt, wenn bestimmt wird, wie viele Kanäle in der aktuellen Eingabe zu verarbeiten sind; wir verarbeiten nur so viele, wie es Platz im Zielausgabepuffer gibt. Dies vermeidet Fehler durch Überschreiten dieser Arrays.

### Mischen der Eingaben

Viele Nodes führen **Misch**-Operationen durch, bei denen die Eingaben auf irgendeine Weise zu einer einzelnen Ausgabe kombiniert werden. Dies wird im folgenden Beispiel demonstriert.

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

Dies ist in vielerlei Hinsicht ähnlicher Code wie beim vorhergehenden Beispiel, aber nur die erste Ausgabe—`outputList[0]`—wird verändert. Jedes Sample wird dem entsprechenden Sample im Ausgabepuffer hinzugefügt, mit einem einfachen Codefragment, um zu verhindern, dass die Samples den legalen Bereich von -1.0 bis 1.0 überschreiten, indem die Werte gecappt werden; es gibt andere Möglichkeiten, Clipping zu vermeiden, die möglicherweise weniger anfällig für Verzerrungen sind, aber das ist ein einfaches Beispiel, das besser als nichts ist.

## Lebensdauer eines Audio-Worklet-Prozessors

Der einzige Weg, auf dem Sie die Lebensdauer Ihres Audio-Worklet-Prozessors beeinflussen können, ist über den Wert, den `process()` zurückgibt, der ein Boolean-Wert sein sollte, der angibt, ob die Entscheidung des {{Glossary("user_agent", "Benutzeragenten")}} überschrieben werden soll, ob Ihr Node noch in Gebrauch ist oder nicht.

Im Allgemeinen ist die Lebensdauer-Politik eines Audioknotens einfach: Wenn der Knoten immer noch als Audio verarbeitend betrachtet wird, wird er weiterhin verwendet. Im Falle eines [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) wird der Node als aktiv betrachtet, wenn seine `process()`-Funktion `true` zurückgibt _und_ der Node entweder als Quelle für Audiodaten Inhalte erzeugt oder Daten von einem oder mehreren Eingaben empfängt.

Wenn als Ergebnis Ihrer `process()`-Funktion der Wert `true` angegeben wird, teilt dies im Wesentlichen der Web Audio API mit, dass Ihr Prozessor weiter aufgerufen werden muss, auch wenn die API denkt, dass es für Sie nichts mehr zu tun gibt. Mit anderen Worten, `true` überschreibt die Logik der API und gibt Ihnen die Kontrolle über die Lebensdauer-Politik Ihres Prozessors, indem es den Prozessor-Eigentümer-Node [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) am Laufen hält, auch wenn die API sonst entscheiden würde, den Node herunterzufahren.

Rückgabe von `false` aus der `process()`-Methode teilt der API mit, dass sie ihrer normalen Logik folgen und Ihren Prozessor-Node abschalten soll, wenn dies als angemessen betrachtet wird. Wenn die API feststellt, dass Ihr Node nicht mehr benötigt wird, wird `process()` nicht erneut aufgerufen.

> [!NOTE]
> Leider implementiert Chrome derzeit diesen Algorithmus nicht in einer Weise, die dem aktuellen Standard entspricht. Stattdessen hält es den Node am Leben, wenn Sie `true` zurückgeben, und schaltet ihn ab, wenn Sie `false` zurückgeben. Aus Kompatibilitätsgründen müssen Sie also immer `true` von `process()` zurückgeben, zumindest auf Chrome. Nachdem [dieses Chrome Problem](https://crbug.com/921354) behoben ist, möchten Sie dieses Verhalten möglicherweise ändern, soweit möglich, da es eine leichte negative Auswirkung auf die Leistung haben könnte.

## Erstellen eines Audio-Prozessor-Worklet-Nodes

Um einen Audio-Node zu erstellen, der Audio-Datenblöcke durch einen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) leitet, müssen Sie die folgenden einfachen Schritte ausführen:

1. Laden und installieren Sie das Audioprozessor-Modul
2. Erstellen Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) und geben Sie das Audioprozessor-Modul an, das durch seinen Namen verwendet werden soll
3. Verbinden Sie die Eingaben mit dem `AudioWorkletNode` und dessen Ausgaben mit geeigneten Zielen (entweder andere Nodes oder mit der [`destination`](/de/docs/Web/API/BaseAudioContext/destination)-Eigenschaft des [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekts).

Um einen Audio-Worklet-Prozessor zu verwenden, können Sie einen Code verwenden, der ähnlich dem folgenden ist:

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

Diese `createMyAudioProcessor()`-Funktion erstellt und gibt eine neue Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zurück, die so konfiguriert ist, dass sie Ihren Audioprozessor verwendet. Sie kümmert sich ebenfalls darum, den Audiokontext zu erstellen, falls er noch nicht vorhanden ist.

Um sicherzustellen, dass der Kontext nutzbar ist, wird zuerst der Kontext erstellt, falls er noch nicht verfügbar ist, und dann das Modul, das den Prozessor enthält, dem Worklet hinzugefügt. Sobald dies geschehen ist, wird eine neue Instanz von `AudioWorkletNode` instanziiert und zurückgegeben. Sobald Sie diese in der Hand haben, verbinden Sie sie mit anderen Nodes und verwenden sie, wie jeden anderen Node auch.

Sie können anschließend einen neuen Audioprozessor-Node folgendermaßen erstellen:

```js
let newProcessorNode = await createMyAudioProcessor();
```

Wenn der zurückgegebene Wert, `newProcessorNode`, nicht `null` ist, haben wir einen gültigen Audiokontext mit seinem Hiss-Prozessor-Node im Einsatz und bereit zur Verwendung.

## Unterstützung von Audioparametern

Wie jeder andere Web-Audio-Knoten unterstützt [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Parameter, die mit dem [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) geteilt werden, der die eigentliche Arbeit erledigt.

### Hinzufügen der Parameter-Unterstützung zum Prozessor

Um Parameter zu einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) hinzuzufügen, müssen Sie diese in Ihrer [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)-basierten Prozessor-Klasse in Ihrem Modul definieren. Dies geschieht, indem Sie den statischen Getter [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static) zu Ihrer Klasse hinzufügen. Diese Funktion sollte ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten zurückgeben, eines für jeden Parameter, den der Prozessor unterstützt.

Die folgende Implementierung von `parameterDescriptors()` gibt ein Array mit zwei `AudioParam`-Objekten zurück. Der erste definiert `gain` als einen Wert zwischen 0 und 1, mit einem Standardwert von 0,5. Der zweite Parameter ist `frequency`, standardmäßig auf 440,0 gesetzt, mit einem Bereich von 27,5 bis 4186,009, einschließlich.

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

Wenn `automationRate` nicht in einem Parameter-Deskriptor angegeben ist, wird als Standard `"a-rate"` (sample-genaue Updates) angenommen.

Um Blockraten-Verarbeitung zu verwenden, muss `"k-rate"` explizit angefordert werden. Die Automatisierungsrate explizit zu machen, hilft, falsche Annahmen darüber zu vermeiden, ob ein Parameter standardmäßig sample-genau oder mit Blockrate ist.

Der Zugriff auf die Parameter-Knoten Ihres Prozessors ist so einfach, wie sie im `parameters`-Objekt nachzuschlagen, das in Ihrer Implementierung von [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process) übergeben wird. Innerhalb des `parameters`-Objekts befinden sich Arrays, eines für jeden Ihrer Parameter, und diese haben die gleichen Namen wie Ihre Parameter.

- A-rate Parameter
  - : Für A-rate-Parameter — Parameter, deren Werte sich über die Zeit automatisch ändern — ist der Eintrag des Parameters im `parameters`-Objekt ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten, eines für jeden Frame im zu verarbeitenden Block. Diese Werte sollen auf die entsprechenden Frames angewendet werden.
- K-rate Parameter
  - : K-rate-Parameter hingegen können sich nur einmal pro Block ändern, sodass das Array des Parameters nur einen einzigen Eintrag hat. Verwenden Sie diesen Wert für jeden Frame im Block.

Im folgenden Code sehen wir eine `process()`-Funktion, die einen `gain`-Parameter verarbeitet, der sowohl als A- als auch als K-rate-Parameter verwendet werden kann. Unser Node unterstützt nur eine Eingabe, sodass er nur die erste Eingabe in der Liste nimmt, den Gewinn darauf anwendet und die resultierenden Daten in den Puffer der ersten Ausgabe schreibt.

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

Hier wird, falls `gain.length` anzeigt, dass es nur einen einzelnen Wert im Array der Werte des `gain`-Parameters gibt, der erste Eintrag im Array auf jeden Frame im Block angewandt. Andernfalls wird für jeden Frame im Block der entsprechende Eintrag in `gain[]` angewandt.

### Zugriff auf Parameter aus dem Main-Thread-Skript

Ihr Main-Thread-Skript kann auf die Parameter zugreifen, wie es bei jedem anderen Node der Fall ist. Dazu müssen Sie zuerst über die Methode [`get()`](/de/docs/Web/API/AudioParamMap#get) der Eigenschaft [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) des [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) eine Referenz auf den Parameter erhalten:

```js
let gainParam = myAudioWorkletNode.parameters.get("gain");
```

Der Wert, der zurückgegeben und in `gainParam` gespeichert wird, ist das [`AudioParam`](/de/docs/Web/API/AudioParam), das den `gain`-Parameter speichert. Sie können dann dessen Wert mit der Methode [`setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime) des [`AudioParam`](/de/docs/Web/API/AudioParam) zu einem gegebenen Zeitpunkt ändern.

Hier setzen wir zum Beispiel den Wert auf `newValue`, mit sofortiger Wirkung.

```js
gainParam.setValueAtTime(newValue, audioContext.currentTime);
```

Ebenso können Sie jede der anderen Methoden in der Schnittstelle [`AudioParam`](/de/docs/Web/API/AudioParam) verwenden, um Änderungen im Laufe der Zeit anzuwenden, geplante Änderungen zu stornieren, und so weiter.

Das Lesen des Wertes eines Parameters ist so einfach wie das Betrachten seiner [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft:

```js
let currentGain = gainParam.value;
```

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Enter Audio Worklet](https://developer.chrome.com/blog/audio-worklet/) (Chrome Developers Blog)
