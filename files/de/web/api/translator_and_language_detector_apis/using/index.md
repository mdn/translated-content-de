---
title: Verwendung der Übersetzer- und Spracherkennungs-APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die [Übersetzer- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) bieten asynchrone (auf {{jsxref("Promise")}} basierende) Mechanismen für eine Website, um Sprachen zu erkennen und Text über das interne KI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst abwickelt, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt, oder auf einen cloudbasierten Übersetzungsdienst zurückgreifen oder für diesen bezahlen muss. Dieser Artikel erklärt, wie Sie diese APIs verwenden.

## Erkennen einer Sprache

Alle Funktionen zur Spracherkennung werden über die [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle aufgerufen.

Der erste Schritt, um das KI-Modell eine Sprache erkennen zu lassen, besteht darin, eine `LanguageDetector`-Objektinstanz zu erstellen. Dies geschieht mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), welche ein Optionsobjekt als Argument entgegennimmt:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages)-Eigenschaft gibt die Sprachen an, die Sie in den Detektor eingeben möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Unterschiedliche Implementierungen unterstützen wahrscheinlich unterschiedliche Sprachen.

Wenn Sie eine `LanguageDetector`-Instanz erstellt haben, können Sie diese verwenden, um eine Sprache zu erkennen, indem Sie die Instanzmethode [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect) aufrufen und ihr den zu überprüfenden Text übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, die die erkannten potenziellen Sprachübereinstimmungen darstellen.
Jedes enthält:

- Einen String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}}, der die erkannte Sprache darstellt.
- Eine Zahl zwischen 0 und 1, die einen Vertrauenswert für diese Übereinstimmung darstellt.

Zum Beispiel:

```js
results.forEach((result) => {
  console.log(`${result.detectedLanguage}: ${result.confidence}`);
});

// Results in logs like this:
// la: 0.8359838724136353
// es: 0.017705978825688362
// sv: 0.012977192178368568
// en: 0.011148443445563316
// und: 0.0003214875760022551
```

> [!NOTE]
> Das letzte Array-Element stellt immer einen Vertrauenswert für die Sprache `und` dar — dies ist eine Abkürzung für "unbestimmt" und stellt die Wahrscheinlichkeit dar, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

## Erstellen einer Übersetzung

Die Übersetzung folgt einem sehr ähnlichen Muster wie die Spracherkennung. Eine [`Translator`](/de/docs/Web/API/Translator)-Objektinstanz wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, welche ein Optionsobjekt entgegennimmt, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthalten muss:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Die Übersetzung wird dann erstellt, indem die Instanzmethode [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufgerufen wird, der der zu übersetzende Text übergeben wird:

```js
const translation = await translator.translate(myTextString);
```

Dies gibt einen String mit der Übersetzung zurück.

Es gibt auch eine Streaming-Version der Methode `translate()` — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die es ermöglicht, die Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann nützlich sein, wenn sehr große Textmengen übersetzt werden:

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Überprüfung der Konfigurationsunterstützung

Bevor Sie ein `LanguageDetector`- oder `Translator`-Objekt erstellen, können Sie überprüfen, ob Ihre gewünschte Sprachkonfiguration vom aktuellen Browser unterstützt wird, indem Sie die statischen Methoden [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) und [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) verwenden. Zum Beispiel:

```js
const detectorAvailability = await LanguageDetector.availability({
  expectedInputLanguages: ["en-US", "ja"],
});

const translatorAvailability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Diese Methoden geben einen enumerierten Wert zurück, der anzeigt, ob Unterstützung für die angegebenen Optionen verfügbar ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, jedoch ein Modell oder einige Feinabstimmungsdaten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, jedoch ein laufender Download abgeschlossen werden muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz unter Verwendung der entsprechenden `create()`-Methode erstellt wird. Sie können den Download-Fortschritt automatisch über einen [Monitor](#überwachen_des_download-fortschritts) verfolgen.

## Abbrechen von Vorgängen und Zerstören von Instanzen

Sie können eine ausstehende Erkennungs- oder Übersetzungsvorgang abbrechen, indem Sie einen [`AbortController`](/de/docs/Web/API/AbortController) verwenden, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) im Optionsobjekt der Methode als `signal`-Eigenschaftswert enthalten ist. Zum Beispiel würde das Abbrechen einer `Translator.create()`-Operation so aussehen:

```js
const controller = new AbortController();

const translator = await Translator.create({
  sourceLanguage: detectedLanguage,
  targetLanguage: formData.get("translateLanguage"),
  signal: controller.signal,
});

// ...

controller.abort();
```

Sobald eine `Translator`- oder `LanguageDetector`-Instanz erstellt wurde, können Sie sie zerstören, wenn sie nicht mehr benötigt wird, indem Sie die Methoden [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy)/[`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy) verwenden:

```js
translator.destroy();
detector.destroy();
```

Es macht Sinn, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden sollen, da sie erhebliche Ressourcen in ihrer Verarbeitung binden.

## Überwachen des Download-Fortschritts

Wenn das KI-Modell für eine bestimmte Erkennung oder Übersetzung heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die `Translator`- und `LanguageDetector`-`create()`-Methoden können eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument nimmt. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis verfügbar, das ausgelöst wird, wenn Fortschritte beim Herunterladen des KI-Modells gemacht werden.

Sie können dieses Ereignis nutzen, um Ladefortschrittsdaten sichtbar zu machen:

```js
translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
    });
  },
});
```

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download initiiert und ein `NotSupportedError`-`[`DOMException`](/de/docs/Web/API/DOMException)` ausgelöst.

## Nutzungskontingente

Einige Implementierungen haben ein Eingabekontingent, das regelt, wie viele Operationen eine Website innerhalb eines bestimmten Zeitraums anfordern kann. Das Gesamtkontingent kann über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) abgerufen werden, während die Kontingentnutzung für eine bestimmte Übersetzung oder Spracherkennung über die Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel gibt der unten stehende Codeausschnitt das gesamte Eingabekontingent über `Translator.inputQuota` zurück und die Eingabekontingentnutzung für eine Übersetzung eines bestimmten Textstrings über `Translator.measureInputUsage()`.

Wir prüfen dann, ob die individuelle Eingabeverwendung für diesen String größer ist als das insgesamt verfügbare Kontingent. Falls ja, werfen wir einen passenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const totalInputQuota = translator.inputQuota;
const inputUsage = await translator.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Insufficient quota to translate.");
} else {
  console.log("Quota available to translate.");
  const translation = await translator.translate(myTextString);
  // ...
}
```

Wenn Sie versuchen, eine Spracherkennungs- oder Übersetzungsoperation auszuführen, die das verfügbare Kontingent überschreitet, wird eine `QuotaExceededError`-`[`DOMException`](/de/docs/Web/API/DOMException)` ausgelöst.

## Vollständiges Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Übersetzer- und Spracherkennungs-APIs in Aktion zeigt.

### HTML

In unserem Markup definieren wir zuerst ein Eingabe-{{htmlelement("form")}}, das dem Benutzer erlaubt, den zu übersetzenden Text und die Sprache, in die übersetzt werden soll, festzulegen. Dazu gehört ein {{htmlelement("textarea")}} zum Eingeben des Texts selbst, ein {{htmlelement("output")}}-Element zur Anzeige der erkannten Sprache und ein {{htmlelement("select")}}-Element zur Auswahl einer Übersetzungssprache.

```html live-sample___translator-example
<h2>Input</h2>

<form>
  <div>
    <label for="translate-text">Enter text to translate:</label>
    <textarea id="translate-text" name="translateText" rows="6"></textarea>
    <output class="detected-language">Detected language: </output>
  </div>
  <div>
    <label for="translate-language">Choose translation language:</label>
    <select id="translate-language" name="translateLanguage">
      <option value="en" selected>English (en)</option>
      <option value="fr">French (fr)</option>
      <option value="de">German (de)</option>
      <option value="it">Italian (it)</option>
      <option value="zh">Mandarin Chinese (zh)</option>
      <option value="zh-Hant">Taiwanese Mandarin (zh-Hant)</option>
      <option value="ja">Japanese (ja)</option>
      <option value="pt">Portuguese (pt)</option>
      <option value="ru">Russian (ru)</option>
      <option value="es">Spanish (es)</option>
      <option value="tr">Turkish (tr)</option>
      <option value="hi">Hindi (hi)</option>
      <option value="vi">Vietnamese (vi)</option>
      <option value="bn">Bengali (bn)</option>
    </select>
  </div>
  <button type="submit">Translate</button>
</form>
```

Die zweite Hälfte unseres Markups enthält ein {{htmlelement("p")}}-Element, um die generierte Übersetzung anzuzeigen.

```html live-sample___translator-example
<h2>Translation output</h2>

<p class="translate-output"></p>
```

```css hidden live-sample___translator-example
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  max-width: 600px;
  margin: 0 auto;
}

form div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

select,
textarea,
.translate-output {
  padding: 5px;
}

.translate-output {
  min-height: 150px;
  border: 1px solid black;
  width: 100%;
  display: block;
}

.error {
  color: red;
}
```

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen, da es nicht relevant ist, um die Übersetzer- und Spracherkennungs-APIs zu verstehen.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zum `<form>`, `<textarea>`, Submit-`<button>`, Übersetzungsausgabe-`<p>` und Spracherkennung-`<output>`-Elementen zu erfassen. Außerdem deklarieren wir eine Variable mit dem Namen `detectedLanguage`, um die Ergebnisse von Spracherkennungsoperationen zu speichern.

```js live-sample___translator-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als Nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignissen zuzuhören:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn das Formular abgesendet wird, wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die Funktion `detectLanguage()` aufgerufen.

```js live-sample___translator-example
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die als Nächstes definierte Funktion `detectLanguage()` überprüft zuerst, ob der Wert des `<textarea>`-Elements größer als 20 Zeichen ist. Wenn ja, fahren wir mit der Spracherkennung fort. Wenn nicht, deaktivieren wir den Absende-Button und zeigen eine Nachricht im [`textContent`](/de/docs/Web/API/Node/textContent) des `<output>`-Elements an, die besagt, dass der Text zu kurz ist, um die Sprache zu erkennen. Dies tun wir, weil die Spracherkennung im Allgemeinen nicht gut bei einzelnen Wörtern und sehr kurzen Phrasen funktioniert. Wenn Sie häufig mit kurzem Text arbeiten, testen Sie sorgfältig mit Ihren bevorzugten Sprachen und geben Sie das Ergebnis als unbekannt zurück, wenn das Vertrauen zu gering ist.

Beim Erkennen der Sprache des eingegebenen Textes erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen `monitor` einbezieht, um den Download-Fortschritt zu protokollieren, falls das Modell eine Weile zum Herunterladen benötigt. Wir erkennen dann die Sprache mit der Methode [`detect()`](/de/docs/Web/API/LanguageDetector/detect), indem wir ihr den `<textarea>`-Wert übergeben. Sobald die Ergebnisse zurückgegeben werden, schreiben wir die Sprache und das Vertrauen des Top-Ergebnisses in das `<output>`-Element. In komplexeren Apps möchten Sie möglicherweise mehrere Ergebnisse melden und dem Benutzer die Wahl lassen, in welcher Sprache es sich befindet, aber für die Demo reicht dies aus.

Schließlich setzen wir den Absende-Button so, dass er nicht deaktiviert ist, damit das Formular abgesendet werden kann, um die Übersetzung zu starten.

```js live-sample___translator-example
async function detectLanguage() {
  if (textarea.value.length > 20) {
    const detector = await LanguageDetector.create({
      monitor(monitor) {
        monitor.addEventListener("downloadprogress", (e) => {
          console.log(`Downloaded ${e.loaded * 100}%`);
        });
      },
    });

    const results = await detector.detect(textarea.value);
    detectedLanguageOutput.textContent = `Detected language: ${
      results[0].detectedLanguage
    }. Confidence: ${results[0].confidence.toFixed(4)}`;
    detectedLanguage = results[0].detectedLanguage;

    submitBtn.disabled = false;
  } else {
    detectedLanguageOutput.textContent = `Text too short to accurately detect language.`;
    detectedLanguage = "";

    submitBtn.disabled = true;
  }
}
```

Jetzt definieren wir die Funktion `handleTranslation()`. Nachdem wir das Standardabsenden des Formulars verhindert haben, erstellen wir ein neues [`FormData`](/de/docs/Web/API/FormData)-Objekt, das die Namens-/Wertepaare unserer `<form>`-Daten enthält. Wir führen dann einen Datenvalidierungstest durch und überprüfen, ob die erkannte `<textarea>`-Inhaltssprache mit der ausgewählten Übersetzungssprache (`translateLanguage`) übereinstimmt. Wenn dies der Fall ist, geben wir eine Fehlermeldung innerhalb des `translate-output` `<p>` aus.

```js live-sample___translator-example
async function handleTranslation(e) {
  e.preventDefault();

  const formData = new FormData(form);

  if (formData.get("translateLanguage") === detectedLanguage) {
    translateOutput.innerHTML = `<span class="error">Input language and translation language are the same.</span>`;
    return;
  }
  translateOutput.innerHTML = "";
```

Wenn der Test erfolgreich ist, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block. Wir beginnen mit der Überprüfung der Verfügbarkeit des Modells zum Übersetzen zwischen den erkannten Eingabe- und ausgewählten Ausgabesprachen mit der Methode [`availability()`](/de/docs/Web/API/Translator/availability_static):

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung innerhalb des `translate-output` `<p>` aus.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), indem wir ihr die erkannten Eingabe- und ausgewählten Ausgabesprachen übergeben. Das benötigte KI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn ein anderer Wert zurückgegeben wird (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, fügen jedoch diesmal einen `monitor` hinzu, der jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird, den Prozentsatz des heruntergeladenen Modells in das `translate-output` `<p>` ausgibt.

```js live-sample___translator-example
  try {
    const availability = await Translator.availability({
      sourceLanguage: detectedLanguage,
      targetLanguage: formData.get("translateLanguage"),
    });
    let translator;

    if (availability === "unavailable") {
      translateOutput.innerHTML = `<span class="error">Translation not available; try a different language combination.</span>`;
      return;
    } else if (availability === "available") {
      translator = await Translator.create({
        sourceLanguage: detectedLanguage,
        targetLanguage: formData.get("translateLanguage"),
      });
    } else {
      translator = await Translator.create({
        sourceLanguage: detectedLanguage,
        targetLanguage: formData.get("translateLanguage"),
        monitor(monitor) {
          monitor.addEventListener("downloadprogress", (e) => {
            translateOutput.textContent = `Downloaded ${Math.floor(
              e.loaded * 100
            )}%`;
          });
        },
      });
    }
```

Als Nächstes setzen wir den Inhalt des `<p>`-Ausgabe auf eine ausstehende Nachricht und deaktivieren den Absende-Button, bevor wir [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die tatsächliche Übersetzung durchzuführen und ihr den `<textarea>`-Wert übergeben. Sobald die Übersetzung abgeschlossen ist, zeigen wir sie innerhalb des `<p>`-Ausgabe an, bevor wir den Absende-Button wieder nicht deaktivieren.

```js live-sample___translator-example
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich fügen wir das Gegenstück `catch() { ... }` zum `try`-Block hinzu. Wenn der Inhalt von `try` irgendeine Art von Ausnahme auslöst, zeigen wir sie innerhalb der `<p>`-Ausgabe an.

```js live-sample___translator-example
  } catch (e) {
    translateOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

### Ergebnis

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("translator-example", , "750px", , , , "translator; language-detector", "allow-forms")}}

Versuchen Sie, einen Textkörper in das `<textarea>` einzugeben, und beachten Sie, wie die erkannte Sprache und das Vertrauen nur gemeldet werden, wenn die Anzahl der Zeichen größer als 20 wird. Wählen Sie eine Übersetzungssprache, die sich von Ihrem eingegebenen Text unterscheidet, und drücken Sie dann den Absende-Button, um eine AI-generierte Übersetzung zu erzeugen.

Einige der Übersetzungssprachenauswahlmöglichkeiten sind möglicherweise nicht in Ihrem Browser verfügbar, selbst wenn dieser die APIs unterstützt.
