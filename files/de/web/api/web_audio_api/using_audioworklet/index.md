---
title: Hintergrundaudioverarbeitung mit AudioWorklet
slug: Web/API/Web_Audio_API/Using_AudioWorklet
l10n:
  sourceCommit: b1fd82d20c55c0ab4a591ea3420a7f0ec78586a8
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt, wie Sie einen Audio-Worklet-Prozessor erstellen und in einer Web-Audio-Anwendung verwenden können.

Als die Web Audio API erstmals in Browsern eingeführt wurde, beinhaltete sie die Fähigkeit, JavaScript-Code zu verwenden, um benutzerdefinierte Audioprozessoren zu erstellen, die aufgerufen werden, um Audio in Echtzeit zu manipulieren. Der Nachteil des `ScriptProcessorNode` war, dass er auf dem Hauptthread ausgeführt wurde und somit alles andere blockierte, bis die Ausführung abgeschlossen war. Dies war weit weniger ideal, insbesondere für etwas so rechenintensives wie Audiobearbeitung.

Hier kommt [`AudioWorklet`](/de/docs/Web/API/AudioWorklet) ins Spiel. Ein Audio-Context's Audio-Worklet ist ein [`Worklet`](/de/docs/Web/API/Worklet), das nicht auf dem Hauptthread ausgeführt wird, sondern Audiobearbeitungscode ausführt, der ihm durch den Aufruf der Methode [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) des Contexts hinzugefügt wird. Der Aufruf von `addModule()` lädt die angegebene JavaScript-Datei, die die Implementierung des Audioprozessors enthalten sollte. Mit dem registrierten Prozessor können Sie einen neuen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) erstellen, der das Audio durch den Code des Prozessors leitet, wenn der Knoten in die Kette von Audioknoten zusammen mit allen anderen Audioknoten eingefügt wird.

Es ist erwähnenswert, dass Ihr Prozessor aufgrund der oft erheblichen Berechnungen bei der Audiobearbeitung erheblich davon profitieren kann, mit [WebAssembly](/de/docs/WebAssembly) erstellt zu werden, was nahezu native oder vollständig native Leistung für Web-Apps bringt. Die Implementierung Ihres Audiobearbeitungsalgorithmus mit WebAssembly kann seine Leistung deutlich verbessern.

## Überblick auf hoher Ebene

Bevor wir uns die Verwendung von AudioWorklet schrittweise ansehen, beginnen wir mit einem kurzen Überblick auf hoher Ebene über die beteiligten Schritte.

1. Erstellen Sie ein Modul, das eine Audio-Worklet-Prozessorklasse definiert, basierend auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor), das Audio aus einer oder mehreren eingehenden Quellen entnimmt, seine Operation auf den Daten durchführt und die resultierenden Audiodaten ausgibt.
2. Greifen Sie über die [`audioWorklet`](/de/docs/Web/API/BaseAudioContext/audioWorklet)-Eigenschaft auf das Audio-Worklet des Audio-Contexts zu und rufen Sie die [`addModule()`](/de/docs/Web/API/Worklet/addModule)-Methode des Audio-Worklets auf, um das Modul des Audio-Worklet-Prozessors zu installieren.
3. Erstellen Sie bei Bedarf Audiobearbeitungs-Knoten, indem Sie den Namen des Prozessors (der vom Modul definiert wird) an den [`AudioWorkletNode()`](/de/docs/Web/API/AudioWorkletNode/AudioWorkletNode)-Konstruktor übergeben.
4. Richten Sie alle Audioparameter ein, die der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) benötigt oder die Sie konfigurieren möchten. Diese sind im Modul des Audio-Worklet-Prozessors definiert.
5. Verbinden Sie die erstellten `AudioWorkletNode`s mit Ihrer Audiobearbeitungspipeline, wie Sie es bei jedem anderen Knoten tun würden, und verwenden Sie dann Ihre Audiopipeline wie gewohnt.

Im weiteren Verlauf dieses Artikels werden wir diese Schritte mit Beispielen näher betrachten, einschließlich funktionierender Beispiele, die Sie selbst ausprobieren können.

Der auf dieser Seite gefundene Beispielcode stammt von [diesem funktionierenden Beispiel](https://mdn.github.io/webaudio-examples/audioworklet/), das Teil von MDN's [GitHub-Repository von Web Audio-Beispielen](https://github.com/mdn/webaudio-examples/) ist. Das Beispiel erstellt einen Oszillator-Knoten und fügt ihm mit einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) weißes Rauschen hinzu, bevor der resultierende Klang abgespielt wird. Schieberegler sind vorhanden, um die Verstärkung sowohl des Oszillators als auch der Ausgabe des Audio-Worklets zu steuern.

[**Sehen Sie den Code**](https://github.com/mdn/webaudio-examples/tree/main/audioworklet)

[**Probieren Sie es live aus**](https://mdn.github.io/webaudio-examples/audioworklet/)

## Erstellen eines Audio-Worklet-Prozessors

Grundsätzlich wird ein Audio-Worklet-Prozessor (den wir normalerweise entweder als "Audioprozessor" oder als "Prozessor" bezeichnen, da dieser Artikel ansonsten doppelt so lang wäre) mit einem JavaScript-Modul implementiert, das die benutzerdefinierte Audioprozessorklasse definiert und installiert.

### Struktur eines Audio-Worklet-Prozessors

Ein Audio-Worklet-Prozessor ist ein JavaScript-Modul, das aus Folgendem besteht:

- Eine JavaScript-Klasse, die den Audioprozessor definiert. Diese Klasse erweitert die Klasse [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor).
- Die Audioprozessorklasse muss eine [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process)-Methode implementieren, die eingehende Audiodaten empfängt und die durch den Prozessor manipulierten Daten zurückschreibt.
- Das Modul installiert die neue Audio-Worklet-Prozessorklasse durch Aufruf von [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor), wobei ein Name für den Audioprozessor und die Klasse angegeben werden, die den Prozessor definiert.

Ein einzelnes Audio-Worklet-Prozessormodul kann mehrere Prozessorklassen definieren und jede davon mit individuellen Aufrufen von `registerProcessor()` registrieren. Solange jede einen eindeutigen Namen hat, funktioniert das einwandfrei. Es ist auch effizienter als das Laden mehrerer Module aus dem Netzwerk oder sogar von der lokalen Festplatte des Benutzers.

### Grundlegendes Code-Framework

Das am wenigsten umfangreiche Framework einer Audioprozessorklasse sieht folgendermaßen aus:

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

Nach der Implementierung des Prozessors kommt ein Aufruf der globalen Funktion [`registerProcessor()`](/de/docs/Web/API/AudioWorkletGlobalScope/registerProcessor), die nur im Gültigkeitsbereich des Audio-Contexts `AudioWorklet` verfügbar ist, das der Aufrufer des Prozessorskripts als Ergebnis Ihres Aufrufs von [`audioWorklet.addModule()`](/de/docs/Web/API/Worklet/addModule) ist. Dieser Aufruf von `registerProcessor()` registriert Ihre Klasse als Basis für alle [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor)s, die erstellt werden, wenn [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)s eingerichtet werden.

Dies ist das minimalste Framework und hat tatsächlich keine Wirkung, bis Code hinzugefügt wird, um in `process()` mit diesen Eingaben und Ausgaben etwas zu tun. Damit kommen wir zu den Eingaben und Ausgaben.

### Die Eingabe- und Ausgabelisten

Die Listen der Eingaben und Ausgaben können zunächst etwas verwirrend sein, obwohl sie eigentlich sehr einfach sind, sobald Sie verstehen, was vor sich geht.

Beginnen wir von innen und arbeiten uns nach außen. Grundsätzlich wird das Audio für einen einzelnen Audiokanal (wie beispielsweise den linken Lautsprecher oder den Subwoofer) als [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) repräsentiert, dessen Werte die einzelnen Audiosamples sind. Nach Spezifikation enthält jeder Audio-Block, den Ihre `process()`-Funktion erhält, 128 Frames (das heißt, 128 Samples für jeden Kanal), aber es ist geplant, dass _dieser Wert sich in Zukunft ändern wird_ und abhängig von den Umständen variieren kann. Daher sollten Sie _immer_ die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length) des Arrays überprüfen anstatt von einer bestimmten Größe auszugehen. Es ist jedoch garantiert, dass die Eingaben und Ausgaben die gleiche Blocklänge haben.

Jeder Input kann eine Anzahl von Kanälen haben. Ein Mono-Input hat einen einzelnen Kanal; ein Stereo-Input hat zwei Kanäle. Surround Sound könnte sechs oder mehr Kanäle haben. Daher ist jeder Input wiederum ein Array von Kanälen. Das heißt, ein Array von `Float32Array`-Objekten.

Es kann dann mehrere Eingaben geben, sodass die `inputList` ein Array von Arrays von `Float32Array`-Objekten ist. Jede Eingabe kann eine unterschiedliche Anzahl von Kanälen haben, und jeder Kanal hat sein eigenes Array von Samples.

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

Wie Sie die Eingaben verwenden und wie Sie die Ausgaben generieren, hängt sehr stark von Ihrem Prozessor ab. Wenn Ihr Prozessor nur ein Generator ist, kann er die Eingaben ignorieren und einfach den Inhalt der Ausgaben mit den generierten Daten ersetzen. Oder Sie können jede Eingabe unabhängig voneinander verarbeiten, indem Sie einen Algorithmus auf die eingehenden Daten auf jedem Kanal jeder Eingabe anwenden und die Ergebnisse in die entsprechenden Kanäle der Ausgaben schreiben (wobei zu beachten ist, dass die Anzahl von Eingaben und Ausgaben unterschiedlich sein kann und auch die Kanalzahlen auf diesen Eingaben und Ausgaben unterschiedlich sein können). Oder Sie können alle Eingaben nehmen und Misch- oder andere Berechnungen durchführen, die dazu führen, dass eine einzige Ausgabe mit Daten gefüllt wird (oder alle Ausgaben mit den gleichen Daten gefüllt werden).

Das liegt ganz bei Ihnen. Dies ist ein sehr leistungsfähiges Tool in Ihrem Audioprogrammier-Werkzeugkasten.

### Verarbeitung mehrerer Eingaben

Sehen wir uns die Implementierung von `process()` an, die mehrere Eingaben verarbeiten kann, wobei jede Eingabe verwendet wird, um die entsprechende Ausgabe zu erzeugen. Alle überschüssigen Eingaben werden ignoriert.

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

Beachten Sie, dass wir beim Bestimmen der Anzahl der Quellen, die bearbeitet und durch die entsprechenden Ausgaben gesendet werden sollen, [`Math.min()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/min) verwenden, um sicherzustellen, dass wir nur so viele Kanäle verarbeiten, wie wir Platz in der Ausgabeliste haben. Der gleiche Check wird durchgeführt, wenn es darum geht, wie viele Kanäle im aktuellen Input verarbeitet werden sollen; wir verarbeiten nur so viele, wie es Platz im Zieloutput gibt. Dies vermeidet Fehler durch Überschreiben dieser Arrays.

### Mischen von Eingaben

Viele Knoten führen **Misch**-Operationen durch, bei denen die Eingaben auf irgendeine Weise in einer einzigen Ausgabe kombiniert werden. Dies wird im folgenden Beispiel demonstriert.

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

Es ist ein ähnlicher Code wie im vorherigen Beispiel in vielerlei Hinsicht, aber nur der erste Output—`outputList[0]`—wird verändert. Jede Probe wird zur entsprechenden Probe im Ausgabepuffer hinzugefügt, wobei ein einfaches Codefragment vorhanden ist, um zu verhindern, dass die Proben den legalen Bereich von -1.0 bis 1.0 überschreiten, indem die Werte begrenzt werden; es gibt andere Möglichkeiten, Clipping zu vermeiden, die vielleicht weniger anfällig für Verzerrungen sind, aber dies ist ein einfaches Beispiel, das besser ist als nichts.

## Lebensdauer eines Audio-Worklet-Prozessors

Das einzige Mittel, mit dem Sie die Lebensdauer Ihres Audio-Worklet-Prozessors beeinflussen können, ist der Wert, der von `process()` zurückgegeben wird, der ein Boolean sein sollte, das angibt, ob die Entscheidung des {{Glossary("user_agent", "Nutzeragenten")}} bezüglich der Frage, ob Ihr Knoten noch in Verwendung ist, überschrieben werden soll oder nicht.

Im Allgemeinen ist die Lebensdauerrichtlinie eines jeden Audioknotens einfach: Wenn der Knoten noch als aktiv verarbeitetes Audio gilt, wird er weiterhin verwendet. Im Falle eines [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) wird der Knoten als aktiv angesehen, wenn seine `process()`-Funktion `true` zurückgibt _und_ der Knoten entweder Inhalte als Quelle für Audiodaten erstellt oder Daten von einem oder mehreren Eingängen empfängt.

Ein Wert von `true` als Ergebnis Ihrer `process()`-Funktion gibt der Web Audio API im Wesentlichen zu verstehen, dass Ihr Prozessor weiterhin aufgerufen werden muss, auch wenn die API glaubt, dass es nichts mehr für Sie zu tun gibt. Mit anderen Worten, `true` überschreibt die Logik der API und gibt Ihnen die Kontrolle über die Lebensdauerrichtlinie Ihres Prozessors, wodurch der Prozessor den Besitz übernehmenden [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) am Laufen hält, selbst wenn er sonst entscheiden würde, den Knoten herunterzufahren.

Die Rückgabe von `false` aus der `process()`-Methode teilt der API mit, dass sie ihrer normalen Logik folgen und Ihren Prozessor-Knoten herunterfahren soll, wenn es als angemessen erachtet wird. Wenn die API feststellt, dass Ihr Knoten nicht mehr benötigt wird, wird `process()` nicht erneut aufgerufen.

> [!NOTE]
> Zu diesem Zeitpunkt implementiert Chrome diesen Algorithmus leider nicht in einer Weise, die dem aktuellen Standard entspricht. Stattdessen wird der Knoten am Leben gehalten, wenn Sie `true` zurückgeben und heruntergefahren, wenn Sie `false` zurückgeben. Daher müssen Sie aus Kompatibilitätsgründen immer `true` aus `process()` zurückgeben, zumindest in Chrome. Sobald jedoch [dieses Chrome-Problem](https://crbug.com/921354) behoben ist, sollten Sie dieses Verhalten nach Möglichkeit ändern, da es möglicherweise eine geringe negative Auswirkung auf die Leistung hat.

## Erstellen eines Audio-Prozessor-Worklet-Knotens

Um einen Audio-Knoten zu erstellen, der Blöcke von Audiodaten durch einen [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) pumpt, müssen Sie die folgenden einfachen Schritte befolgen:

1. Laden und installieren Sie das Modul des Audioprozessors
2. Erstellen Sie einen [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode), indem Sie das zu verwendende Audioprozessormodul über seinen Namen angeben
3. Verbinden Sie Eingaben mit dem `AudioWorkletNode` und seine Ausgaben mit entsprechenden Zielen (entweder anderen Knoten oder mit der [`AudioContext`](/de/docs/Web/API/AudioContext)-Objekteigenschaft [`destination`](/de/docs/Web/API/BaseAudioContext/destination)).

Um einen Audio-Worklet-Prozessor zu verwenden, können Sie einen Code ähnlich dem folgenden verwenden:

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

Diese `createMyAudioProcessor()`-Funktion erstellt und gibt eine neue Instanz von [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) zurück, die konfiguriert ist, um Ihren Audioprozessor zu verwenden. Sie behandelt auch die Erstellung des Audiokontexts, falls dies noch nicht geschehen ist.

Um sicherzustellen, dass der Kontext verwendbar ist, beginnt dies damit, den Kontext zu erstellen, falls er noch nicht verfügbar ist, und fügt dann dem Worklet das Modul hinzu, das den Prozessor enthält. Sobald dies geschehen ist, instanziiert es einen neuen `AudioWorkletNode` und gibt diese Instanz zurück. Sobald Sie diesen in der Hand haben, verbinden Sie ihn mit anderen Knoten und verwenden ihn wie jeden anderen Knoten.

Dann können Sie einen neuen Audioprozessorknoten folgendermaßen erstellen:

```js
let newProcessorNode = await createMyAudioProcessor();
```

Wenn der zurückgegebene Wert, `newProcessorNode`, nicht `null` ist, haben wir einen gültigen Audiokontext mit seinem Rauschprozessor-Knoten bereit und einsatzbereit.

## Unterstützung von Audioparametern

Wie jeder andere Web Audio-Knoten unterstützt auch der [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Parameter, die mit dem [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) geteilt werden, der die eigentliche Arbeit erledigt.

### Unterstützung für Parameter zum Prozessor hinzufügen

Um einem [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode) Parameter hinzuzufügen, müssen Sie diese in Ihrer auf [`AudioWorkletProcessor`](/de/docs/Web/API/AudioWorkletProcessor) basierenden Prozessor-Klasse in Ihrem Modul definieren. Dies geschieht, indem Sie den statischen Getter [`parameterDescriptors`](/de/docs/Web/API/AudioWorkletProcessor/parameterDescriptors_static) zu Ihrer Klasse hinzufügen. Diese Funktion sollte ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten zurückgeben, eines für jeden Parameter, den der Prozessor unterstützt.

In der folgenden Implementierung von `parameterDescriptors()` hat das zurückgegebene Array zwei `AudioParam`-Objekte. Das erste definiert `gain` als einen Wert zwischen 0 und 1 mit einem Standardwert von 0.5. Der zweite Parameter heißt `frequency` und hat einen Standardwert von 440.0, mit einem Bereich von 27.5 bis 4186.009, inklusive.

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

Auf die Parameter Ihres Prozessorknotens zuzugreifen, ist so einfach, wie sie im `parameters`-Objekt zu suchen, das in Ihre Implementierung von [`process()`](/de/docs/Web/API/AudioWorkletProcessor/process) übergeben wird. Innerhalb des `parameters`-Objekts gibt es Arrays, eines für jeden Ihrer Parameter, die die gleichen Namen wie Ihre Parameter haben.

- A-rate-Parameter
  - : Bei A-rate-Parametern—Parametern, deren Werte sich automatisch im Laufe der Zeit ändern—ist der Eintrag des Parameters im `parameters`-Objekt ein Array von [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekten, eines für jeden Frame im zu verarbeitenden Block. Diese Werte sind auf die entsprechenden Frames anzuwenden.
- K-rate-Parameter
  - : K-rate-Parameter hingegen können sich nur einmal pro Block ändern, sodass das Array des Parameters nur einen einzigen Eintrag hat. Verwenden Sie diesen Wert für jeden Frame im Block.

Im folgenden Code sehen wir eine `process()`-Funktion, die einen `gain`-Parameter verarbeitet, der sowohl als A-rate- oder K-rate-Parameter verwendet werden kann. Unser Knoten unterstützt nur einen Eingang, daher nimmt er einfach den ersten Eingang in der Liste, wendet das Gain darauf an und schreibt die resultierenden Daten in den ersten Puffer der Ausgabe.

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

Hier wird, wenn `gain.length` anzeigt, dass es im Array der Werte des `gain`-Parameters nur einen einzelnen Wert gibt, der erste Eintrag im Array auf jeden Frame im Block angewendet. Andernfalls wird für jeden Frame im Block der entsprechende Eintrag in `gain[]` angewendet.

### Zugriff auf Parameter vom Main-Thread-Skript

Ihr Main-Thread-Skript kann auf die Parameter genau so zugreifen wie auf jeden anderen Knoten. Um dies zu tun, müssen Sie zunächst eine Referenz auf den Parameter erhalten, indem Sie die [`AudioWorkletNode`](/de/docs/Web/API/AudioWorkletNode)-Eigenschaft [`parameters`](/de/docs/Web/API/AudioWorkletNode/parameters) verwenden und die Methode [`get()`](/de/docs/Web/API/AudioParamMap#get) aufrufen:

```js
let gainParam = myAudioWorkletNode.parameters.get("gain");
```

Der Wert, der zurückgegeben und in `gainParam` gespeichert wird, ist der [`AudioParam`](/de/docs/Web/API/AudioParam), der verwendet wird, um den `gain`-Parameter zu speichern. Sie können dann dessen Wert zu einem bestimmten Zeitpunkt ändern, indem Sie die Methode [`setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime) des [`AudioParam`](/de/docs/Web/API/AudioParam) verwenden.

Hier setzen wir zum Beispiel den Wert auf `newValue`, der sofort wirksam wird.

```js
gainParam.setValueAtTime(newValue, audioContext.currentTime);
```

Sie können ähnlich jede der anderen Methoden in der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle verwenden, um Änderungen im Laufe der Zeit anzuwenden, um geplante Änderungen abzubrechen und so weiter.

Das Lesen des Werts eines Parameters ist so einfach wie der Blick auf seine [`value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft:

```js
let currentGain = gainParam.value;
```

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Enter Audio Worklet](https://developer.chrome.com/blog/audio-worklet/) (Chrome Developers Blog)
