---
title: Verwenden der Übersetzer- und Spracherkennungs-APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die [Übersetzer- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) stellen asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen zur Verfügung, um über das interne KI-Modell des Browsers Sprachen zu erkennen und Texte zu übersetzen. Dies ist nützlich und effizient, weil der Browser den Dienst übernimmt, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hosten oder bezahlen muss. Dieser Artikel erklärt, wie diese APIs verwendet werden.

## Erkennen einer Sprache

Alle Funktionen zur Spracherkennung werden über die [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle aufgerufen.

Der erste Schritt für das KI-Modell, um eine Sprache zu erkennen, besteht darin, eine `LanguageDetector`-Objektinstanz zu erstellen. Dies geschieht mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), die ein Optionsobjekt als Argument entgegennimmt:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die Eigenschaft [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages) gibt die Sprachen an, die Sie in den Detektor einspeisen möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Unterschiedliche Implementierungen werden wahrscheinlich unterschiedliche Sprachen unterstützen.

Nachdem Sie eine `LanguageDetector`-Instanz erstellt haben, können Sie sie verwenden, um eine Sprache zu erkennen, indem Sie die Instanzmethode [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect) aufrufen und ihr den zu überprüfenden Text als Argument übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, die die erkannten potenziellen Sprachübereinstimmungen darstellen. Jedes enthält:

- Einen String, der den [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) repräsentiert, der die erkannte Sprache darstellt.
- Eine Zahl zwischen 0 und 1, die einen Zuverlässigkeitswert für diese Übereinstimmung darstellt.

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
> Das letzte Array-Element stellt immer einen Zuverlässigkeitswert für die Sprache `und` dar — dies ist eine Abkürzung für "undetermined" (unbestimmt) und repräsentiert die Wahrscheinlichkeit, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

## Eine Übersetzung erstellen

Das Übersetzen folgt einem sehr ähnlichen Muster wie die Spracherkennung. Eine [`Translator`](/de/docs/Web/API/Translator)-Objektinstanz wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, die ein Optionsobjekt entgegennehmen muss, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthalten muss:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Die Übersetzung wird dann durch Aufruf der Instanzmethode [`Translator.translate()`](/de/docs/Web/API/Translator/translate) erstellt, der der zu übersetzende Text-String als Argument übergeben wird:

```js
const translation = await translator.translate(myTextString);
```

Dies gibt einen String zurück, der die Übersetzung enthält.

Es gibt auch eine Streaming-Version der `translate()`-Methode — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die Sie Ihnen ermöglicht, die Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann nützlich sein, wenn sehr große Textmengen übersetzt werden sollen:

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Überprüfen der Konfigurationsunterstützung

Bevor Sie ein `LanguageDetector`- oder `Translator`-Objekt erstellen, können Sie überprüfen, ob Ihre gewünschte Sprachkonfiguration von dem aktuellen Browser unterstützt wird, indem Sie die statischen Methoden [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) und [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) verwenden. Zum Beispiel:

```js
const detectorAvailability = await LanguageDetector.availability({
  expectedInputLanguages: ["en-US", "ja"],
});

const translatorAvailability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Diese Methoden geben einen enumerierten Wert zurück, der angibt, ob Unterstützung für die angegebenen Optionen verfügbar ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein Modell oder einige Feinabstimmungsdaten herunterladen muss.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, jedoch einen laufenden Download abschließen muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird dieser automatisch vom Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz mit der entsprechenden `create()`-Methode erstellt wird. Sie können den Download-Fortschritt automatisch mit einem [Monitor](#überwachung_des_download-fortschritts) verfolgen.

## Abbrechen von Operationen und Zerstörung von Instanzen

Sie können eine ausstehende Erkennungs- oder Übersetzungsoperation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) innerhalb des Methodenoptionsobjekts als `signal`-Eigenschaftswert enthalten ist. Beispielsweise würde das Abbrechen einer `Translator.create()`-Operation so aussehen:

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

Es macht Sinn, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden sollen, da sie erhebliche Ressourcen in ihrer Handhabung binden.

## Überwachung des Download-Fortschritts

Wenn das KI-Modell für eine bestimmte Erkennung oder Übersetzung heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer ein Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis die Operation abgeschlossen ist.

Die `Translator`- und `LanguageDetector`-`create()`-Methoden können eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Rückruffunktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument hat. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis verfügbar, das ausgelöst wird, wenn Fortschritte beim Herunterladen des KI-Modells erzielt werden.

Sie können dieses Ereignis verwenden, um Daten zum Ladefortschritt bereitzustellen:

```js
translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
  monitor: (monitor) => {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
    });
  },
});
```

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet und ein `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Nutzungskontingente

Einige Implementierungen haben ein Eingabekontingent, das bestimmt, wie viele Operationen eine Website in einem bestimmten Zeitraum anfragen kann. Das gesamte Kontingent kann über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) abgerufen werden, während die Kontingentnutzung für eine bestimmte Übersetzung oder Spracherkennung über die Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel gibt der unten stehende Ausschnitt das gesamte Eingabekontingent über `Translator.inputQuota` und die Eingabekontingentnutzung für das Übersetzen eines bestimmten Text-Strings über `Translator.measureInputUsage()` zurück.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

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

Wenn Sie versuchen, eine Spracherkennungs- oder Übersetzungsoperation auszuführen, die das verfügbare Kontingent überschreitet, wird ein `QuotaExceededError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Vollständiges Beispiel

Werfen wir einen Blick auf ein vollständiges Beispiel, das die Übersetzer- und Spracherkennungs-APIs in Aktion zeigt.

### HTML

In unserem Markup definieren wir zuerst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu übersetzenden Text und die zu übertragende Sprache festzulegen. Dazu gehört ein {{htmlelement("textarea")}} für die Eingabe des Textes selbst, ein {{htmlelement("output")}}-Element zur Anzeige der erkannten Sprache und ein {{htmlelement("select")}}-Element zur Auswahl einer Übersetzungssprache.

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

Die zweite Hälfte unseres Markups umfasst ein {{htmlelement("p")}}-Element zur Anzeige der erzeugten Übersetzung.

```html live-sample___translator-example
<h2>Translation output</h2>

<p class="translate-output"></p>
```

```css hidden live-sample___translator-example
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht anzeigen werden, da nichts davon relevant ist, um die Übersetzer- und Spracherkennungs-APIs zu verstehen.

### JavaScript

In unserem Skript beginnen wir mit dem Abrufen von Referenzen auf die `<form>`, `<textarea>`, das Absenden-`<button>`, die Übersetzungsausgabe-`<p>` und die Spracherkennung-`<output>`-Elemente. Wir erklären auch eine Variable namens `detectedLanguage`, um Ergebnisse von Spracherkennungsoperationen zu enthalten.

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignisse zu überwachen:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn das Formular eingereicht wird, wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle Wert des `<textarea>`-Feldes geändert wird, wird die Funktion `detectLanguage()` aufgerufen.

```js
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die als nächstes definierte Funktion `detectLanguage()` überprüft zunächst, ob der Wert des `<textarea>`-Elements größer als 20 Zeichen ist. Wenn ja, setzen wir die Spracherkennung fort. Wenn nicht, deaktivieren wir die Senden-Schaltfläche und zeigen eine Nachricht im [`textContent`](/de/docs/Web/API/Node/textContent) des `<output>`-Elements an, dass der Text zu kurz ist, um die Sprache zu erkennen. Wir tun dies, da die Spracherkennung bei einzelnen Wörtern und sehr kurzen Phrasen im Allgemeinen nicht gut funktioniert. Wenn Sie häufig mit kurzem Text arbeiten, testen Sie sorgfältig mit Ihren Prioritätssprachen und geben Sie das Ergebnis als unbekannt zurück, wenn das Vertrauen zu gering ist.

Bei der Erkennung der Sprache des eingegebenen Textes erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen `monitor` umfasst, um den Download-Fortschritt zu protokollieren, falls das Modell eine Weile zum Herunterladen benötigt. Dann erkennen wir die Sprache mit der `detect()`-Methode, wobei wir ihr den `<textarea>`-Wert übergeben. Wenn die Ergebnisse zurückgegeben werden, schreiben wir die Sprache und das Vertrauen des besten Ergebnisses in das `<output>`-Element. In komplexeren Apps möchten Sie möglicherweise mehrere Ergebnisse berichten und möglicherweise dem Benutzer die Auswahl der Sprache überlassen, aber dies reicht für die Demo aus.

Schließlich deaktivieren wir den Übermitteln-Button nicht, damit das Formular zur Übersetzung eingereicht werden kann.

```js
async function detectLanguage() {
  if (textarea.value.length > 20) {
    const detector = await LanguageDetector.create({
      monitor: (monitor) => {
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

Wir definieren nun die Funktion `handleTranslation()`. Nachdem wir die Standardübermittlung des Formulars verhindert haben, erstellen wir eine neue [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die unsere `<form>`-Daten-Name/Wert-Paare enthält. Dann führen wir einen Datenvalidierungstest durch, bei dem überprüft wird, ob die erkannte `<textarea>`-Inhaltssprache dieselbe ist wie die gewählte Übersetzungssprache (`translateLanguage`). Falls ja, geben wir eine Fehlermeldung im `<p>` mit der Klasse `translate-output` aus.

```js
async function handleTranslation(e) {
  e.preventDefault();

  const formData = new FormData(form);

  if (formData.get("translateLanguage") === detectedLanguage) {
    translateOutput.innerHTML = `<span class="error">Input language and translation language are the same.</span>`;
    return;
  } else {
    translateOutput.innerHTML = "";
  }
```

Wenn der Test bestanden wird, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block. Wir beginnen, indem wir die Verfügbarkeit des Modells für die Übersetzung zwischen der erkannten Eingabe- und gewählten Ausgabesprache mit der Methode [`availability()`](/de/docs/Web/API/Translator/availability_static) überprüfen:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung im `<p>` mit der Klasse `translate-output` aus.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static) und übergeben ihm die erkannten Eingabe- und gewählten Ausgabesprachen. Das erforderliche KI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber diesmal fügen wir einen `monitor` ein, der bei jedem Auslösen des [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignisses den Prozentsatz des heruntergeladenen Modells im `translate-output`-`<p>` anzeigt.

```js
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
        monitor: (monitor) => {
          monitor.addEventListener("downloadprogress", (e) => {
            translateOutput.textContent = `Downloaded ${Math.floor(
              e.loaded * 100
            )}%`;
          });
        },
      });
    }
```

Als nächstes setzen wir den `<p>`-Inhalt auf eine ausstehende Nachricht und deaktivieren die Übermitteln-Schaltfläche, bevor wir [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die tatsächliche Übersetzung durchzuführen, wobei wir den `<textarea>`-Wert übergeben. Sobald die Übersetzung abgeschlossen ist, zeigen wir sie im `<p>` der Ausgabe an, bevor wir die Übermitteln-Schaltfläche erneut aktivieren.

```js
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich binden wir den `catch() { ... }`-Block des `try`-Blocks ein. Wenn der Inhalt des `try`-Blocks irgendeine Art von Ausnahme wirft, zeigen wir sie im `<p>` der Ausgabe an.

```js
  } catch (e) {
    translateOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

```js hidden live-sample___translator-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";

form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);

async function detectLanguage() {
  if (textarea.value.length > 20) {
    const detector = await LanguageDetector.create({
      monitor: (monitor) => {
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

async function handleTranslation(e) {
  e.preventDefault();

  const formData = new FormData(form);

  if (formData.get("translateLanguage") === detectedLanguage) {
    translateOutput.innerHTML = `<span class="error">Input language and translation language are the same.</span>`;
    return;
  }
  translateOutput.innerHTML = "";

  try {
    const availability = await Translator.availability({
      sourceLanguage: detectedLanguage,
      targetLanguage: formData.get("translateLanguage"),
    });
    let translator;

    if (availability === "unavailable") {
      translateOutput.innerHTML = `<span class="error">Translation not available; try a different language combination.</span>`;
      return;
    }
    if (availability === "available") {
      translator = await Translator.create({
        sourceLanguage: detectedLanguage,
        targetLanguage: formData.get("translateLanguage"),
      });
    } else {
      translator = await Translator.create({
        sourceLanguage: detectedLanguage,
        targetLanguage: formData.get("translateLanguage"),
        monitor: (monitor) => {
          monitor.addEventListener("downloadprogress", (e) => {
            translateOutput.textContent = `Downloaded ${Math.floor(
              e.loaded * 100,
            )}%`;
          });
        },
      });
    }

    translateOutput.textContent = "...generating translation...";
    submitBtn.disabled = true;

    const translation = await translator.translate(
      formData.get("translateText"),
    );

    translateOutput.textContent = translation;
    submitBtn.disabled = false;
  } catch (e) {
    translateOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

### Ergebnis

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("translator-example", , "750px", , , , "translator; language-detector", "allow-forms")}}

Versuchen Sie, einen Text in das `<textarea>`-Feld einzutippen, und beachten Sie, wie die erkannte Sprache und das Vertrauen nur angezeigt werden, wenn die Anzahl der Zeichen größer als 20 ist. Wählen Sie eine andere Übersetzungssprache als Ihren Eingabetext aus und drücken Sie dann die Übermitteln-Schaltfläche, um eine KI-generierte Übersetzung zu erzeugen.

Einige der Übersetzungssprachenoptionen sind möglicherweise in Ihrem Browser nicht verfügbar, selbst wenn er die APIs unterstützt.
