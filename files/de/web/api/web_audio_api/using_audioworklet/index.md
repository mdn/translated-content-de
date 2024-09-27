---
title: Hintergrund-Audioverarbeitung mit AudioWorklet
slug: Web/API/Web_Audio_API/Using_AudioWorklet
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt, wie man einen Audio-Worklet-Prozessor erstellt und diesen in einer Web-Audio-Anwendung verwendet.

Als die Web Audio API erstmals in Browsern eingeführt wurde, ermöglichte sie die Verwendung von JavaScript-Code zur Erstellung benutzerdefinierter Audioprozessoren, die für Echtzeit-Audiomanipulationen aufgerufen werden. Der Nachteil von `ScriptProcessorNode` war, dass es auf dem Hauptthread lief und somit alles andere blockierte, bis es seine Ausführung abgeschlossen hatte. Dies war weit weniger ideal, insbesondere für etwas, das so rechenintensiv sein kann wie die Audiobearbeitung.

Hier kommt [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ins Spiel. Ein Audio-Context's Audio-Worklet ist ein [`Worklet`](/de/docs/Web/API/Worklet), das außerhalb des Hauptthreads läuft und den dort hinzugefügten Audiocode durch den Aufruf der Methode [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) des Kontextes ausführt. Beim Aufruf von `addModule()` wird die angegebene JavaScript-Datei geladen, die die Implementierung des Audioprozessors enthalten sollte. Mit dem registrierten Prozessor können Sie einen neuen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellen, der das Audio durch den Code des Prozessors leitet, wenn der Knoten zusammen mit anderen Audioknoten in die Audiokette eingebunden wird.

Es ist erwähnenswert, dass Ihr Prozessor, da die Audiobearbeitung oft mit erheblichem Rechenaufwand verbunden ist, erheblich davon profitieren kann, wenn er mit [WebAssembly](/de/docs/WebAssembly) aufgebaut ist, das nahezu native oder vollständig native Leistung für Web-Apps bietet. Wenn Sie Ihren Audiobearbeitungsalgorithmus mit WebAssembly implementieren, kann dies die Leistung erheblich verbessern.

## Überblick auf hoher Ebene

Bevor wir beginnen, die Verwendung von AudioWorklet Schritt für Schritt zu betrachten, starten wir mit einem kurzen Überblick über die grundlegenden Schritte.

1. Erstellen Sie ein Modul, das eine Audioworklet-Prozessor-Klasse definiert, basierend auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), die Audio von einer oder mehreren eingehenden Quellen entgegennimmt, eine Operation an den Daten durchführt und die resultierenden Audiodaten ausgibt.
2. Greifen Sie auf das Audioworklet des Audiokontextes durch seine [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet) Eigenschaft zu und rufen Sie die [`addModule()`](/de/docs/Web/API/Worklet/addModule) Methode des Audioworklets auf, um das Audioworklet-Prozessormodul zu installieren.
3. Erstellen Sie bei Bedarf Audiobearbeitungsknoten, indem Sie den Namen des Prozessors (der im Modul definiert ist) an den [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode) Konstruktor übergeben.
4. Richten Sie alle Audioparameter ein, die der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) benötigt oder die Sie konfigurieren möchten. Diese sind im Audioworklet-Prozessormodul definiert.
5. Verbinden Sie die erstellten `AudioWorkletNode`s in Ihrer Audiobearbeitungspipeline wie jeden anderen Knoten und verwenden Sie dann Ihre Audiopipeline wie gewohnt.

Im weiteren Verlauf dieses Artikels werden wir diese Schritte detaillierter betrachten, mit Beispielen (einschließlich funktionierender Beispiele, die Sie selbst ausprobieren können).

Der auf dieser Seite gefundene Beispielcode stammt von [diesem funktionierenden Beispiel](https://mdn.github.io/webaudio-examples/audioworklet/), das Teil des [GitHub-Repository mit Web-Audio-Beispielen](https://github.com/mdn/webaudio-examples/) von MDN ist. Das Beispiel erstellt einen Oszillatorknoten und fügt ihm weißen Rauschen hinzu, bevor der resultierende Klang abgespielt wird. Steuerungen mit Schiebereglern sind verfügbar, um die Verstärkung sowohl des Oszillators als auch der Ausgabe des Audioworklets zu steuern.

[**Sehen Sie sich den Code an**](https://github.com/mdn/webaudio-examples/tree/main/audioworklet)

[**Probieren Sie es live aus**](https://mdn.github.io/webaudio-examples/audioworklet/)

## Erstellen eines Audioworklet-Prozessors

Ein Audioworklet-Prozessor (den wir im Folgenden üblicherweise entweder als „Audio-Prozessor“ oder einfach als „Prozessor“ bezeichnen werden, da dieser Artikel sonst doppelt so lang wäre) wird mithilfe eines JavaScript-Moduls implementiert, das die benutzerdefinierte Audioprozessor-Klasse definiert und installiert.

### Struktur eines Audioworklet-Prozessors

Ein Audioworklet-Prozessor ist ein JavaScript-Modul, das aus Folgendem besteht:

- Eine JavaScript-Klasse, die den Audioprozessor definiert. Diese Klasse erweitert die [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) Klasse.
- Die Audioprozessor-Klasse muss eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process) Methode implementieren, die eingehende Audiodaten empfängt und die durch den Prozessor manipulierten Daten zurückschreibt.
- Das Modul installiert die neue Audioworklet-Prozessor-Klasse, indem es [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor) aufruft und einen Namen für den Audioprozessor und die Klasse, die den Prozessor definiert, angibt.

Ein einzelnes Audioworklet-Prozessormodul kann mehrere Prozessorklassen definieren und jede von ihnen mit individuellen Aufrufen von `registerProcessor()` registrieren. Solange jede ihre eigene eindeutige Bezeichnung hat, funktioniert das reibungslos. Es ist auch effizienter, als mehrere Module über das Netzwerk oder auch die lokale Festplatte des Benutzers zu laden.

### Grundlegendes Codegerüst

Das Basisgerüst einer Audioprozessor-Klasse sieht so aus:

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

Nach der Implementierung des Prozessors folgt ein Aufruf der globalen Funktion [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor), die nur im Kontext des Audioworklets [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) verfügbar ist, welches der Aufrufer des Prozessorskripts als Folge Ihres Aufrufs von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) ist. Dieser Aufruf von `registerProcessor()` registriert Ihre Klasse als Grundlage für alle [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)s, die erstellt werden, wenn [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)s eingerichtet sind.

Dies ist das einfachste Grundgerüst und hat tatsächlich keine Wirkung, bis Code in `process()` hinzugefügt wird, um etwas mit diesen Eingaben und Ausgaben zu tun. Damit kommen wir dazu, über diese Eingaben und Ausgaben zu sprechen.

### Die Ein- und Ausgabelisten

Die Listen der Eingaben und Ausgaben können anfangs etwas verwirrend sein, obwohl sie eigentlich sehr einfach sind, wenn Sie erst einmal verstanden haben, was passiert.

Beginnen wir im Inneren und arbeiten uns nach außen vor. Grundsätzlich wird das Audio für einen einzelnen Audiokanal (z. B. den linken Lautsprecher oder den Subwoofer) als [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) dargestellt, dessen Werte die einzelnen Audio-Samples sind. Laut Spezifikation enthält jeder Audioblock, den Ihre `process()` Funktion erhält, 128 Frames (also 128 Samples für jeden Kanal), es ist jedoch geplant, dass sich _dieser Wert in Zukunft ändern wird_, und es kann tatsächlich je nach den Umständen variieren, daher sollten Sie _immer_ die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length) des Arrays prüfen, anstatt von einer bestimmten Größe auszugehen. Es ist jedoch garantiert, dass die Eingaben und Ausgaben die gleiche Blocklänge haben.

Jede Eingabe kann eine Reihe von Kanälen haben. Eine Monoeingabe hat einen einzigen Kanal; Stereoeingabe hat zwei Kanäle. Surround-Sound kann sechs oder mehr Kanäle haben. Also ist jede Eingabe wiederum ein Array von Kanälen. Das heißt, ein Array von `Float32Array` Objekten.

Dann kann es mehrere Eingaben geben, sodass die `inputList` ein Array von Arrays von `Float32Array` Objekten ist. Jede Eingabe kann eine unterschiedliche Anzahl von Kanälen haben, und jeder Kanal hat seine eigene Samplefolge.

Somit ergibt die Eingabeliste `inputList`:

```js
const numberOfInputs = inputList.length;
const firstInput = inputList[0];

const firstInputChannelCount = firstInput.length;
const firstInputFirstChannel = firstInput[0]; // (or inputList[0][0])

const firstChannelByteCount = firstInputFirstChannel.length;
const firstByteOfFirstChannel = firstInputFirstChannel[0]; // (or inputList[0][0][0])
```

Die Ausgabeliste ist genau gleich strukturiert; sie ist ein Array von Ausgaben, von denen jede ein Array von Kanälen ist, von denen jeder ein `Float32Array` Objekt ist, das die Samples für diesen Kanal enthält.

Wie Sie die Eingaben verwenden und die Ausgaben generieren, hängt stark von Ihrem Prozessor ab. Wenn Ihr Prozessor nur ein Generator ist, kann er die Eingaben ignorieren und nur die Inhalte der Ausgaben mit den generierten Daten ersetzen. Oder Sie können jede Eingabe unabhängig verarbeiten, einen Algorithmus auf die eingehenden Daten jedes Kanals jeder Eingabe anwenden und die Ergebnisse in die entsprechenden Ausgabekanäle schreiben (denken Sie daran, dass sich die Anzahl der Eingaben und Ausgaben unterscheiden kann, genauso wie die Kanalanzeigen auf diesen Eingaben und Ausgaben differieren können). Oder Sie können alle Eingaben nehmen und Mischungen oder andere Berechnungen durchführen, die dazu führen, dass eine einzige Ausgabe mit Daten gefüllt wird (oder alle Ausgaben mit den gleichen Daten gefüllt werden).

Es liegt ganz bei Ihnen. Dies ist ein sehr leistungsfähiges Werkzeug in Ihrem Audioprogrammier-Toolkit.

### Verarbeitung mehrerer Eingaben

Schauen wir uns eine Implementierung von `process()` an, die mehrere Eingaben verarbeitet, wobei jede Eingabe verwendet wird, um die entsprechende Ausgabe zu erzeugen. Alle überschüssigen Eingaben werden ignoriert.

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

Beachten Sie, dass wir bei der Bestimmung der zu verarbeitenden Quellenanzahl und ihrer Weitergabe an die entsprechenden Ausgaben [`Math.min()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/min) verwenden, um sicherzustellen, dass wir nur so viele Kanäle verarbeiten, wie im Ausgabeverzeichnis Platz ist. Die gleiche Prüfung wird durchgeführt, wenn bestimmt wird, wie viele Kanäle im aktuellen Eingang verarbeitet werden; wir verarbeiten nur so viele, wie es Platz im Zielausgabeverzeichnis gibt. Dies vermeidet Fehler durch Überlauf dieser Arrays.

### Mischen von Eingaben

Viele Knoten führen **Mixing**-Operationen durch, bei denen die Eingaben in irgendeiner Weise zu einer einzigen Ausgabe kombiniert werden. Dies wird im folgenden Beispiel demonstriert.

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

Dieser Code ähnelt in vielerlei Hinsicht dem vorherigen Beispiel, jedoch wird nur die erste Ausgabe—`outputList[0]`—verändert. Jedes Sample wird dem entsprechenden Sample im Ausgabepuffer hinzugefügt, mit einem einfachen Codefragment zur Verhinderung, dass die Samples den legalen Bereich von -1.0 bis 1.0 überschreiten, indem die Werte begrenzt werden; es gibt andere Möglichkeiten, Clipping zu vermeiden, die möglicherweise weniger Verzerrungen verursachen, aber dieses einfache Beispiel ist besser als nichts.

## Lebensdauer eines Audioworklet-Prozessors

Das einzige Mittel, mit dem Sie die Lebensdauer Ihres Audioworklet-Prozessors beeinflussen können, ist der Wert, den `process()` zurückgibt, das ein Boolean-Wert sein sollte, der angibt, ob die Entscheidungsfindung des [User-Agenten](/de/docs/Glossary/user_agent) über die weitere Nutzung Ihres Knotens außer Kraft gesetzt werden soll.

Im Allgemeinen ist die Lebensdauerpolitik jedes Audionodes einfach: Wenn der Knoten immer noch als aktiv angesehen wird, wird er weiter verwendet. Im Fall eines [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) wird der Knoten als aktiv erachtet, wenn seine `process()` Funktion `true` zurückgibt _und_ der Knoten entweder als Quelle für Audiodaten Inhalte erzeugt oder von einer oder mehreren Eingaben Daten erhält.

Das Angeben eines Werts von `true` als Ergebnis Ihrer `process()` Funktion teilt der Web Audio API im Wesentlichen mit, dass Ihr Prozessor weiter aufgerufen werden muss, auch wenn die API denkt, dass es nichts mehr für Sie zu tun gibt. Mit anderen Worten, `true` setzt die Logik der API außer Kraft und gibt Ihnen die Kontrolle über die Lebensdauerpolitik Ihres Prozessors, wodurch der den Prozessor besitzende [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) weiterlaufen kann, selbst wenn entschieden wird, den Knoten herunterzufahren.

Das Zurückgeben von `false` von der `process()` Methode teilt der API mit, dass sie ihrer normalen Logik folgen und Ihr Prozessorknoten herunterfahren soll, wenn dies angemessen erscheint. Wenn die API bestimmt, dass Ihr Knoten nicht mehr benötigt wird, wird `process()` nicht mehr aufgerufen.

> [!NOTE]
> Zu diesem Zeitpunkt implementiert Chrome diesen Algorithmus leider nicht auf eine Weise, die dem aktuellen Standard entspricht. Stattdessen hält es den Knoten am Leben, wenn Sie `true` zurückgeben und schaltet ihn ab, wenn Sie `false` zurückgeben. Daher müssen Sie für die Kompatibilität immer `true` von `process()` zurückgeben, zumindest auf Chrome. Sobald jedoch [dieses Chrome-Problem](https://crbug.com/921354) behoben ist, sollten Sie, wenn möglich, das Verhalten ändern, da dies einen leichten negativen Einfluss auf die Leistung haben könnte.

## Erstellen eines Arbeitsknotens für den Audioprozessor

Um einen Audionode zu erstellen, der Audio-Datenblöcke durch einen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) pumpt, müssen Sie diese einfachen Schritte befolgen:

1. Laden und installieren Sie das Audioprozessormodul
2. Erstellen Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), indem Sie das Audioprozessormodul über dessen Namen angeben
3. Verbinden Sie Eingaben mit dem `AudioWorkletNode` und seine Ausgaben zu den passenden Zielen (entweder andere Nodes oder zur [`AudioContext`](/de/docs/Web/API/AudioContext) Objektes [`destination`](/de/docs/Web/API/BaseAudioContext/destination) Eigenschaft).

Um einen Audioworklet-Prozessor zu verwenden, können Sie Code ähnlich dem folgenden verwenden:

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

Diese Funktion `createMyAudioProcessor()` erstellt und gibt eine neue Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zurück, die konfiguriert ist, Ihren Audioprozessor zu verwenden. Sie kümmert sich auch darum, den Audionkontext zu erstellen, falls dieser noch nicht verfügbar ist.

Um sicherzustellen, dass der Kontext verwendbar ist, wird dieser zuerst erstellt, falls er noch nicht vorhanden ist, und das Modul, das den Prozessor enthält, zum Worklet hinzugefügt. Sobald dies erledigt ist, wird eine neue `AudioWorkletNode` Instanziert und zurückgegeben. Wenn Sie diesen in der Hand haben, verbinden Sie ihn mit anderen Nodes und verwenden ihn sonst wie jeden anderen Node.

Sie können dann einen neuen Audioprozessorknoten erstellen, indem Sie dies tun:

```js
let newProcessorNode = await createMyAudioProcessor();
```

Wenn der zurückgegebene Wert, `newProcessorNode`, nicht `null` ist, haben wir einen gültigen Audiokontext mit seinem Rauschprozessor-Knoten vor Ort und einsatzbereit.

## Unterstützung von Audioparametern

Genau wie bei jedem anderen Web-Audio-Knoten unterstützt [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Parameter, die mit dem [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), der die eigentliche Arbeit erledigt, geteilt werden.

### Hinzufügen von Parameterunterstützung zum Prozessor

Um einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Parameter hinzuzufügen, müssen Sie diese innerhalb Ihrer auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) basierenden Prozessorklasse in Ihrem Modul definieren. Dies erfolgt durch das Hinzufügen des statischen Getters [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors) zu Ihrer Klasse. Diese Funktion sollte ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam) Objekten zurückgeben, eines für jeden vom Prozessor unterstützten Parameter.

In der folgenden Implementierung von `parameterDescriptors()` enthält das zurückgegebene Array zwei `AudioParam` Objekte. Das erste definiert `gain` als einen Wert zwischen 0 und 1, mit einem Standardwert von 0.5. Der zweite Parameter wird `frequency` genannt und hat standardmäßig 440.0, mit einem Bereich von 27.5 bis 4186.009, inklusive.

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

Der Zugriff auf die Parameter Ihres Prozessorknotens ist so einfach wie das Nachschlagen der Parameter im `parameters` Objekt, das in Ihre Implementierung von [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process) übergeben wird. Innerhalb des `parameters` Objekts befinden sich Arrays, eines für jeden Ihrer Parameter, und mit den gleichen Namen wie Ihre Parameter.

- A-Rate-Parameter
  - : Bei A-Rate Parametern—Parameter, deren Werte sich automatisch im Laufe der Zeit ändern—ist der Parameter-Eintrag im `parameters` Objekt ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam) Objekten, eines für jeden Frame im gerade bearbeiteten Block. Diese Werte sind auf die entsprechenden Frames anzuwenden.
- K-Rate-Parameter
  - : K-Rate Parameter hingegen können sich nur einmal pro Block ändern, daher hat das Parameter-Array nur einen einzelnen Eintrag. Verwenden Sie diesen Wert für jeden Frame im Block.

Im folgenden Code sehen wir eine `process()` Funktion, die einen `gain` Parameter verarbeitet, der als entweder A-Rate oder K-Rate Parameter verwendet werden kann. Unser Knoten unterstützt nur eine Eingabe, daher wird einfach die erste Eingabe aus der Liste genommen, die Verstärkung darauf angewandt und die resultierenden Daten in den Puffer der ersten Ausgabe geschrieben.

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

Hier, wenn `gain.length` angibt, dass nur ein einzelner Wert im Parameterarray `gain` vorliegt, wird der erste Eintrag im Array auf jeden Frame im Block angewendet. Andernfalls wird der entsprechende Eintrag in `gain[]` auf jeden Frame im Block angewendet.

### Zugriff auf Parameter aus dem Hauptthread-Script

Ihr Hauptthread-Script kann auf die Parameter genauso zugreifen wie auf jeden anderen Node. Dazu müssen Sie zunächst einen Verweis auf den Parameter abrufen, indem Sie die [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) Eigenschaft von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) mithilfe der [`get()`](/de/docs/Web/API/AudioParamMap#get) Methode verwenden:

```js
let gainParam = myAudioWorkletNode.parameters.get("gain");
```

Der zurückgegebene Wert und der in `gainParam` gespeicherte ist der [`AudioParam`](/de/docs/Web/API/AudioParam), der den `gain` Parameter speichert. Sie können dann dessen Wert ändern, der zu einem bestimmten Zeitpunkt wirksam wird, indem Sie die Methode [`setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime) von [`AudioParam`](/de/docs/Web/API/AudioParam) verwenden.

Hier setzen wir beispielsweise den Wert auf `newValue`, der sofort wirksam wird.

```js
gainParam.setValueAtTime(newValue, audioContext.currentTime);
```

Sie können ebenso jede andere Methode der [`AudioParam`](/de/docs/Web/API/AudioParam) Schnittstelle verwenden, um Änderungen über die Zeit anzuwenden, geplante Änderungen zu stornieren und so weiter.

Das Lesen des Wertes eines Parameters ist so einfach wie das Betrachten seiner [`value`](/de/docs/Web/API/AudioParam/value) Eigenschaft:

```js
let currentGain = gainParam.value;
```

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Enter Audio Worklet](https://developer.chrome.com/blog/audio-worklet/) (Chrome-Entwickler-Blog)
