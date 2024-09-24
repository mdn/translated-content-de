---
title: Hintergrund-Audioverarbeitung mit AudioWorklet
slug: Web/API/Web_Audio_API/Using_AudioWorklet
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{DefaultAPISidebar("Web Audio API")}}

Dieser Artikel erklärt, wie man einen Audio-Worklet-Prozessor erstellt und in einer Web-Audio-Anwendung verwendet.

Als die Web Audio API erstmals in Browsern eingeführt wurde, beinhaltete sie die Möglichkeit, JavaScript-Code zu verwenden, um benutzerdefinierte Audio-Prozessoren zu erstellen, die für Echtzeit-Audiomanipulationen aufgerufen würden. Der Nachteil von `ScriptProcessorNode` war, dass er im Haupt-Thread lief, wodurch alles andere blockiert wurde, bis die Ausführung abgeschlossen war. Dies war weit von ideal entfernt, insbesondere bei etwas, das so rechnerintensiv sein kann wie die Audioverarbeitung.

Hier kommt {{domxref("AudioWorklet")}} ins Spiel. Das Audio-Worklet eines Audio-Kontextes ist ein {{domxref("Worklet")}}, das nicht im Haupt-Thread läuft und Audioverarbeitungscode ausführt, der durch Aufrufen der Methode {{domxref("Worklet.addModule", "audioWorklet.addModule()")}} des Kontextes hinzugefügt wird. Der Aufruf von `addModule()` lädt die angegebene JavaScript-Datei, die die Implementierung des Audio-Prozessors enthalten sollte. Mit dem registrierten Prozessor können Sie einen neuen {{domxref("AudioWorkletNode")}} erstellen, welcher den Ton durch den Code des Prozessors leitet, wenn der Knoten in die Kette von Audioknoten zusammen mit anderen Audioknoten eingefügt wird.

Es ist erwähnenswert, dass, da die Audioverarbeitung oft umfangreiche Berechnungen umfassen kann, Ihr Prozessor stark davon profitieren kann, mit [WebAssembly](/de/docs/WebAssembly) aufgebaut zu werden, was annähernd native oder vollständig native Leistung in Web-Apps bringt. Die Implementierung Ihres Audiobearbeitungsalgorithmus mit WebAssembly kann seine Leistung deutlich steigern.

## Überblick auf hoher Ebene

Bevor wir uns die Verwendung von AudioWorklet Schritt für Schritt ansehen, beginnen wir mit einem kurzen Überblick auf hoher Ebene über das, was erforderlich ist.

1. Erstellen Sie ein Modul, das eine Audio-Worklet-Prozessor-Klasse definiert, basierend auf {{domxref("AudioWorkletProcessor")}}, das Audio von einer oder mehreren eingehenden Quellen entnimmt, seine Operation auf den Daten ausführt und die resultierenden Audiodaten ausgibt.
2. Greifen Sie über die Eigenschaft {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} auf das Audio-Worklet des Audiokontextes zu und rufen Sie die Methode {{domxref("Worklet.addModule", "addModule()")}} des Audio-Worklets auf, um das Audio-Worklet-Prozessor-Modul zu installieren.
3. Erstellen Sie bei Bedarf Audiobearbeitungsknoten, indem Sie den im Modul definierten Namen des Prozessors an den Konstruktor {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} übergeben.
4. Richten Sie alle Audioparameter ein, die der {{domxref("AudioWorkletNode")}} benötigt oder die Sie konfigurieren möchten. Diese werden im Audio-Worklet-Prozessor-Modul definiert.
5. Schließen Sie die erstellten `AudioWorkletNode`s in Ihre Audiobearbeitungspipeline ein, wie Sie es mit jedem anderen Knoten tun würden, und verwenden Sie dann Ihre Audiopipeline wie gewohnt.

Im weiteren Verlauf dieses Artikels werden wir diese Schritte detaillierter betrachten, mit Beispielen (einschließlich funktionierender Beispiele, die Sie selbst ausprobieren können).

Der auf dieser Seite gefundene Beispielcode stammt von [diesem funktionierenden Beispiel](https://mdn.github.io/webaudio-examples/audioworklet/), welches Teil des [GitHub-Repositories von MDN mit Web-Audio-Beispielen](https://github.com/mdn/webaudio-examples/) ist. Das Beispiel erstellt einen Oszillatorknoten und fügt ihm mit einem {{domxref("AudioWorkletNode")}} weißes Rauschen hinzu, bevor der resultierende Ton abgespielt wird. Schieberegler sind vorhanden, um die Verstärkung sowohl des Oszillators als auch der Ausgabe des Audio-Worklets zu steuern.

[**Den Code ansehen**](https://github.com/mdn/webaudio-examples/tree/main/audioworklet)

[**Live ausprobieren**](https://mdn.github.io/webaudio-examples/audioworklet/)

## Erstellen eines Audio-Worklet-Prozessors

Grundsätzlich wird ein Audio-Worklet-Prozessor (den wir meist entweder als "Audio-Prozessor" oder als "Prozessor" bezeichnen werden, da dieser Artikel sonst doppelt so lang wäre) mit einem JavaScript-Modul implementiert, das die benutzerdefinierte Audio-Prozessor-Klasse definiert und installiert.

### Struktur eines Audio-Worklet-Prozessors

Ein Audio-Worklet-Prozessor ist ein JavaScript-Modul, das aus Folgendem besteht:

- Einer JavaScript-Klasse, die den Audioprozessor definiert. Diese Klasse erweitert die Klasse {{domxref("AudioWorkletProcessor")}}.
- Die Audioprozessor-Klasse muss eine {{domxref("AudioWorkletProcessor.process", "process()")}}-Methode implementieren, die eingehende Audiodaten empfängt und die vom Prozessor manipulierten Daten zurückschreibt.
- Das Modul installiert die neue Audio-Worklet-Prozessor-Klasse durch Aufruf von {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}, wobei ein Name für den Audioprozessor und die Klasse, die den Prozessor definiert, angegeben werden.

Ein einzelnes Audio-Worklet-Prozessor-Modul kann mehrere Prozessorklassen definieren, wobei jede mit individuellen Aufrufen von `registerProcessor()` registriert wird. Solange jede ihren eigenen einzigartigen Namen hat, funktioniert das einwandfrei. Es ist auch effizienter, als mehrere Module über das Netzwerk oder sogar von der lokalen Festplatte des Benutzers zu laden.

### Grundlegendes Codegerüst

Das minimale Gerüst einer Audioprozessor-Klasse sieht folgendermaßen aus:

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

Nach der Implementierung des Prozessors erfolgt ein Aufruf der globalen Funktion {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}, die nur im Gültigkeitsbereich des Audiokontextes von {{domxref("AudioWorklet")}} verfügbar ist, welcher der Aufrufer des Prozessorskriptes als Ergebnis Ihres Aufrufs von {{domxref("Worklet.addModule", "audioWorklet.addModule()")}} ist. Dieser Aufruf von `registerProcessor()` registriert Ihre Klasse als Grundlage für alle {{domxref("AudioWorkletProcessor")}}, die erstellt werden, wenn {{domxref("AudioWorkletNode")}}s eingerichtet werden.

Dies ist das minimalste Gerüst und hat tatsächlich keine Wirkung, bis Code in `process()` hinzugefügt wird, um etwas mit diesen Eingaben und Ausgaben zu tun. Das bringt uns dazu, über diese Eingaben und Ausgaben zu sprechen.

### Die Eingabe- und Ausgabelisten

Die Listen der Eingaben und Ausgaben können anfangs etwas verwirrend sein, auch wenn sie eigentlich sehr einfach sind, sobald man verstanden hat, was vor sich geht.

Beginnen wir innen und arbeiten uns nach außen. Grundsätzlich wird das Audio für einen einzelnen Audiokanal (wie zum Beispiel den linken Lautsprecher oder den Subwoofer) als [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) dargestellt, dessen Werte die einzelnen Audiosamples sind. Laut Spezifikation enthält jeder Audio-Block, den Ihre `process()`-Funktion erhält, 128 Frames (d.h. 128 Samples für jeden Kanal), aber es ist geplant, _dass sich dieser Wert in Zukunft ändern wird_, und er kann tatsächlich je nach Umständen variieren, daher sollten Sie _immer_ die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length) des Arrays überprüfen, anstatt von einer bestimmten Größe auszugehen. Es ist jedoch garantiert, dass die Eingaben und Ausgaben die gleiche Blocklänge haben werden.

Jeder Eingang kann eine Anzahl von Kanälen haben. Ein Mono-Eingang hat einen einzelnen Kanal; Stereo-Eingang hat zwei Kanäle. Surround-Sound könnte sechs oder mehr Kanäle haben. Jeder Eingang ist also wiederum ein Array von Kanälen. Das ist, ein Array von `Float32Array`-Objekten.

Dann kann es mehrere Eingaben geben, sodass die `inputList` ein Array von Arrays von `Float32Array`-Objekten ist. Jeder Eingang kann eine unterschiedliche Anzahl von Kanälen haben und jeder Kanal hat sein eigenes Array von Samples.

Somit, gegeben der Eingabeliste `inputList`:

```js
const numberOfInputs = inputList.length;
const firstInput = inputList[0];

const firstInputChannelCount = firstInput.length;
const firstInputFirstChannel = firstInput[0]; // (oder inputList[0][0])

const firstChannelByteCount = firstInputFirstChannel.length;
const firstByteOfFirstChannel = firstInputFirstChannel[0]; // (oder inputList[0][0][0])
```

Die Ausgabeliste ist genau gleich aufgebaut; es ist ein Array von Ausgaben, jede davon ist ein Array von Kanälen, jede davon ist ein `Float32Array`-Objekt, das die Samples für diesen Kanal enthält.

Wie Sie die Eingaben nutzen und die Ausgaben generieren, hängt sehr von Ihrem Prozessor ab. Wenn Ihr Prozessor nur ein Generator ist, kann er die Eingaben ignorieren und einfach den Inhalt der Ausgaben mit den generierten Daten ersetzen. Oder Sie können jede Eingabe unabhängig voneinander verarbeiten, einen Algorithmus auf die eingehenden Daten auf jedem Kanal jeder Eingabe anwenden und die Ergebnisse in die entsprechenden Ausgabekanäle schreiben (in dem Bewusstsein, dass die Anzahl der Eingaben und Ausgaben unterschiedlich sein kann und auch die Kanalanzahlen dieser Eingaben und Ausgaben unterschiedlich sein können). Oder Sie können alle Eingaben übernehmen und eine Mischung oder andere Berechnungen durchführen, die zu einer einzigen ausgefüllten Ausgabe führen (oder alle Ausgaben mit denselben Daten gefüllt werden).

Es liegt ganz bei Ihnen. Dies ist ein sehr leistungsfähiges Werkzeug in Ihrem audioprogrammiererischen Werkzeugkasten.

### Verarbeitung mehrerer Eingaben

Sehen wir uns eine Implementierung von `process()` an, die mehrere Eingaben verarbeiten kann, wobei jede Eingabe verwendet wird, um die entsprechende Ausgabe zu erzeugen. Alle überschüssigen Eingaben werden ignoriert.

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

Beachten Sie, dass, bei der Bestimmung der Anzahl der zu verarbeitenden Quellen und der Weiterleitung an die entsprechenden Ausgaben, wir [`Math.min()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/min) verwenden, um sicherzustellen, dass wir nur so viele Kanäle verarbeiten, wie im Ausgabearray Platz ist. Dieselbe Überprüfung wird durchgeführt, um festzustellen, wie viele Kanäle in der aktuellen Eingabe verarbeitet werden; wir verarbeiten nur so viele, wie im Zielausgabearray Platz ist. Dies verhindert Fehler durch Überlauf dieser Arrays.

### Mischen von Eingaben

Viele Knoten führen **Mischungs**-Operationen durch, bei denen die Eingaben in irgendeiner Weise zu einer einzigen Ausgabe kombiniert werden. Dies wird im folgenden Beispiel gezeigt.

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

Dieser Code ist dem vorherigen Beispiel in vielerlei Hinsicht ähnlich, aber nur der erste Ausgang—`outputList[0]`—wird verändert. Jedes Sample wird dem entsprechenden Sample im Ausgangspuffer hinzugefügt, wobei ein einfaches Codefragment vorhanden ist, um zu verhindern, dass die Samples den zulässigen Bereich von -1,0 bis 1,0 überschreiten, indem die Werte begrenzt werden; es gibt andere Möglichkeiten, Clipping zu vermeiden, die vielleicht weniger anfällig für Verzerrungen sind, aber dies ist ein einfaches Beispiel, das besser ist als nichts.

## Lebensdauer eines Audio-Worklet-Prozessors

Der einzige Weg, wie Sie die Lebensdauer Ihres Audio-Worklet-Prozessors beeinflussen können, ist der Wert, den `process()` zurückgibt, was ein boolescher Wert sein sollte, der angibt, ob die Entscheidung der {{Glossary("user agent")}} außer Kraft gesetzt werden soll, ob Ihr Knoten noch in Gebrauch ist oder nicht.

Im Allgemeinen ist die Lebensdauerrichtlinie eines jeden Audioknotens einfach: Wenn der Knoten immer noch als aktiv betrachtet wird, wird er weiter verwendet. Im Fall eines {{domxref("AudioWorkletNode")}} gilt der Knoten als aktiv, wenn seine `process()`-Funktion `true` zurückgibt _und_ der Knoten entweder als Quelle für Audiodaten Inhalte generiert oder Daten von einem oder mehreren Eingängen empfängt.

Die Angabe eines `true`-Wertes als Ergebnis Ihrer `process()`-Funktion teilt der Web Audio API im Grunde mit, dass Ihr Prozessor weiterhin aufgerufen werden muss, selbst wenn die API denkt, es gibt nichts mehr für Sie zu tun. Mit anderen Worten, `true` überschreibt die Logik der API und gibt Ihnen die Kontrolle über die Lebensdauerrichtlinie Ihres Prozessors und hält den Besitzenden {{domxref("AudioWorkletNode")}} des Prozessors am Laufen, auch wenn er sonst beschließen würde, den Knoten herunterzufahren.

Das Zurückgeben von `false` aus der `process()`-Methode teilt der API mit, dass sie ihrer normalen Logik folgen und Ihren Prozessor-Knoten herunterfahren soll, wenn es als angebracht erachtet wird. Wenn die API feststellt, dass Ihr Knoten nicht mehr benötigt wird, wird `process()` nicht erneut aufgerufen.

> [!NOTE]
> Leider implementiert Chrome diesen Algorithmus derzeit nicht in einer Weise, die mit dem aktuellen Standard übereinstimmt. Stattdessen hält es den Knoten am Leben, wenn Sie `true` zurückgeben, und schaltet ihn ab, wenn Sie `false` zurückgeben. Aus Kompatibilitätsgründen müssen Sie daher immer `true` aus `process()` zurückgeben, zumindest in Chrome. Sobald jedoch [dieses Chrome-Problem](https://crbug.com/921354) behoben ist, sollten Sie dieses Verhalten ändern, wenn möglich, da es möglicherweise eine geringe negative Auswirkung auf die Leistung hat.

## Erstellen eines Audio-Prozessor-Worklet-Knotens

Um einen Audioknoten zu erstellen, der Audio-Datenpakete durch einen {{domxref("AudioWorkletProcessor")}} pumpt, müssen Sie die folgenden Schritte ausführen:

1. Laden und installieren Sie das Audioprozessormodul
2. Erstellen Sie einen {{domxref("AudioWorkletNode")}}, indem Sie das zu verwendende Audioprozessormodul nach seinem Namen angeben
3. Schließen Sie Eingänge an den `AudioWorkletNode` und seine Ausgänge an geeignete Ziele (entweder andere Knoten oder an die {{domxref("AudioContext")}}-Objekteigenschaft {{domxref("BaseAudioContext/destination", "destination")}}) an.

Um einen Audio-Worklet-Prozessor zu verwenden, können Sie einen dem folgenden ähnlichen Code verwenden:

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

Diese Funktion `createMyAudioProcessor()` erstellt und gibt eine neue Instanz von {{domxref("AudioWorkletNode")}} zurück, die so konfiguriert ist, dass sie Ihren Audioprozessor verwendet. Sie kümmert sich auch darum, den Audiokontext zu erstellen, falls dies noch nicht geschehen ist.

Um sicherzustellen, dass der Kontext nutzbar ist, wird zunächst der Kontext erstellt, wenn er noch nicht verfügbar ist, und dann das Modul mit dem Prozessor dem Worklet hinzugefügt. Sobald das erledigt ist, instanziiert und gibt es einen neuen `AudioWorkletNode` zurück. Sobald Sie diesen haben, schließen Sie ihn an andere Knoten an und verwenden ihn wie jeden anderen Knoten.

Sie können dann einen neuen Audioprozessorknoten so erstellen:

```js
let newProcessorNode = await createMyAudioProcessor();
```

Wenn der zurückgegebene Wert, `newProcessorNode`, nicht `null` ist, haben wir einen gültigen Audiokontext mit seinem Rauschprozessorknoten an Ort und Stelle und einsatzbereit.

## Unterstützung für Audioparameter

Wie jeder andere Webaudio-Knoten unterstützt {{domxref("AudioWorkletNode")}} Parameter, die mit dem {{domxref("AudioWorkletProcessor")}} geteilt werden, der die eigentliche Arbeit erledigt.

### Hinzufügen von Parametersupport zum Prozessor

Um Parameter zu einem {{domxref("AudioWorkletNode")}} hinzuzufügen, müssen Sie diese in Ihrer auf {{domxref("AudioWorkletProcessor")}} basierenden Prozessorklasse in Ihrem Modul definieren. Dies geschieht, indem Sie den statischen Getter {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} zu Ihrer Klasse hinzufügen. Diese Funktion sollte ein Array von {{domxref("AudioParam")}}-Objekten zurückgeben, eines für jeden Parameter, der vom Prozessor unterstützt wird.

In der folgenden Implementierung von `parameterDescriptors()` hat das zurückgegebene Array zwei `AudioParam`-Objekte. Das erste definiert `gain` als einen Wert zwischen 0 und 1 mit einem Standardwert von 0,5. Der zweite Parameter trägt den Namen `frequency` und hat einen Standardwert von 440,0, mit einer Reichweite von 27,5 bis 4186,009, inklusive.

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

Auf die Parameter Ihres Prozessorknotens zuzugreifen ist so einfach wie das Nachschlagen in dem `parameters`-Objekt, das an die Implementierung von {{domxref("AudioWorkletProcessor.process", "process()")}} übergeben wird. Im `parameters`-Objekt befinden sich Arrays, eines für jeden Ihrer Parameter, die die gleichen Namen wie Ihre Parameter tragen.

- A-rate Parameter
  - : Bei A-Rate-Parametern—Parametern, deren Werte sich automatisch im Laufe der Zeit ändern—ist der Parameter-Eintrag im `parameters`-Objekt ein Array von {{domxref("AudioParam")}}-Objekten, eines für jeden Frame im Block, der verarbeitet wird. Diese Werte sind auf die entsprechenden Frames anzuwenden.
- K-rate Parameter
  - : K-Rate-Parameter hingegen können sich nur einmal pro Block ändern, sodass das Parameter-Array nur einen einzigen Eintrag hat. Dieser Wert gilt für jeden Frame im Block.

Im folgenden Code sehen wir eine `process()`-Funktion, die einen `gain`-Parameter verarbeitet, den man entweder als A-Rate- oder K-Rate-Parameter einsetzen kann. Unser Knoten unterstützt nur einen Eingang, weshalb er einfach den ersten Eingang in der Liste entnimmt, den Verstärkungswert darauf anwendet und die resultierenden Daten in den Puffer der ersten Ausgabe schreibt.

```js
process(inputList, outputList, parameters) {
  const input = inputList[0];
  const output = outputList[0];
  const gain = parameters.gain;

  for (let channelNum = 0; channelNum < input.length; channelNum++) {
    const inputChannel = input[channelNum];
    const outputChannel = output[channelNum];

    // Wenn gain.length 1 ist, ist es ein K-Rate-Parameter, daher wird
    // der erste Eintrag auf jeden Frame angewendet. Andernfalls wird jeder
    // Eintrag auf den entsprechenden Frame angewendet.

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

### Zugreifen auf Parameter vom Haupt-Thread-Skript aus

Ihr Haupt-Thread-Skript kann auf die Parameter genauso zugreifen wie auf jeden anderen Knoten. Dazu müssen Sie zunächst eine Referenz auf den Parameter erhalten, indem Sie die Methode [`get()`](/de/docs/Web/API/AudioParamMap#get) der Eigenschaft {{domxref("AudioWorkletNode.parameters", "parameters")}} des {{domxref("AudioWorkletNode")}} aufrufen:

```js
let gainParam = myAudioWorkletNode.parameters.get("gain");
```

Der in `gainParam` gespeicherte zurückgegebene Wert ist der {{domxref("AudioParam")}}, der zum Speichern des `gain`-Parameters verwendet wird. Sie können dann seinen Wert mit der Methode {{domxref("AudioParam")}} {{domxref("AudioParam.setValueAtTime", "setValueAtTime()")}} ändern, welcher zu einem bestimmten Zeitpunkt wirksam wird.

Hier setzen wir zum Beispiel den Wert auf `newValue`, der sofort wirksam wird.

```js
gainParam.setValueAtTime(newValue, audioContext.currentTime);
```

Sie können auf ähnliche Weise jede der anderen Methoden im {{domxref("AudioParam")}}-Interface verwenden, um Änderungen im Laufe der Zeit anzuwenden, geplante Änderungen abzubrechen usw.

Das Lesen des Werts eines Parameters ist so einfach wie das Ansehen seiner Eigenschaft {{domxref("AudioParam.value", "value")}}:

```js
let currentGain = gainParam.value;
```

## Siehe auch

- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
- [Enter Audio Worklet](https://developer.chrome.com/blog/audio-worklet/) (Chrome Developers Blog)
