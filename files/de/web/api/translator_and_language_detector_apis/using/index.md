---
title: Verwenden der Übersetzer- und Spracherkennungs-APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die [Übersetzer- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Website, um Sprachen zu erkennen und Texte über das interne KI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst bereitstellt, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hosten oder bezahlen muss. Dieser Artikel erklärt, wie man diese APIs verwendet.

## Erkennung einer Sprache

Die gesamte Sprachenerkennungsfunktionalität wird über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Interface bereitgestellt.

Der erste Schritt, um das KI-Modell zur Spracherkennung zu verwenden, besteht darin, eine Instanz eines `LanguageDetector`-Objekts zu erstellen. Dies geschieht mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), die ein Optionsobjekt als Argument nimmt:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die Eigenschaft [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages) gibt die Sprachen an, die Sie in den Detektor einspeisen möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Verschiedene Implementierungen unterstützen wahrscheinlich unterschiedliche Sprachen.

Nachdem Sie eine `LanguageDetector`-Instanz erstellt haben, können Sie damit eine Sprache erkennen, indem Sie die Instanzmethode [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect) darauf aufrufen und den zu prüfenden Text als Argument übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, die die erkannten potenziellen Sprachübereinstimmungen darstellen. Jedes enthält:

- Eine Zeichenkette, die das [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) der erkannten Sprache darstellt.
- Eine Zahl zwischen 0 und 1, die eine Vertrauensbewertung für diese Übereinstimmung darstellt.

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
> Das letzte Array-Element stellt immer eine Vertrauensbewertung für die Sprache `und` dar — dies ist eine Abkürzung für "undetermined" (unbestimmt) und repräsentiert die Wahrscheinlichkeit, dass der Text nicht in einer dem Modell bekannten Sprache geschrieben ist.

## Erstellen einer Übersetzung

Die Übersetzung folgt einem sehr ähnlichen Muster wie die Spracherkennung. Ein [`Translator`](/de/docs/Web/API/Translator)-Objekt wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, die ein Optionsobjekt benötigt, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthalten muss:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Die Übersetzung wird dann durch Aufruf der Instanzmethode [`Translator.translate()`](/de/docs/Web/API/Translator/translate) erstellt, die die zu übersetzende Textzeichenfolge als Argument erhält:

```js
const translation = await translator.translate(myTextString);
```

Dies gibt eine Zeichenkette zurück, die die Übersetzung enthält.

Es gibt auch eine Streaming-Version der Methode `translate()` — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die es ermöglicht, die Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann nützlich sein, wenn sehr große Textteile übersetzt werden:

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

Bevor ein `LanguageDetector`- oder `Translator`-Objekt erstellt wird, können Sie überprüfen, ob Ihre gewünschte Sprachkonfiguration vom aktuellen Browser unterstützt wird, indem Sie die statischen Methoden [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) und [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) verwenden. Zum Beispiel:

```js
const detectorAvailability = await LanguageDetector.availability({
  expectedInputLanguages: ["en-US", "ja"],
});

const translatorAvailability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Diese Methoden geben einen enumerierten Wert zurück, der angibt, ob Unterstützung für die angegebenen Optionen verfügbar ist oder sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein Modell oder einige Feinabstimmungsdaten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein laufender Download noch abgeschlossen werden muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird dieser automatisch vom Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz mit der entsprechenden `create()`-Methode erstellt wird. Sie können den Download-Fortschritt automatisch mit einem [Monitor](#überwachen_des_download-fortschritts) verfolgen.

## Abbrechen von Operationen und Zerstören von Instanzen

Sie können eine ausstehende Erkennungs- oder Übersetzungsoperation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) innerhalb des Methodoptionsobjekts als `signal`-Eigenschaftswert enthalten sein muss. Zum Beispiel würde das Abbrechen einer `Translator.create()`-Operation so aussehen:

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

Nachdem eine `Translator`- oder `LanguageDetector`-Instanz erstellt wurde, können Sie diese zerstören, wenn sie nicht mehr benötigt wird, indem Sie die Methoden [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy)/[`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy) verwenden:

```js
translator.destroy();
detector.destroy();
```

Es macht Sinn, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie signifikante Ressourcen in ihrer Handhabung binden.

## Überwachen des Download-Fortschritts

Wenn das KI-Modell für eine bestimmte Erkennung oder Übersetzung heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer ein Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis die Operation abgeschlossen ist.

Die `Translator`- und `LanguageDetector`-Methoden `create()` können eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Rückruffunktion ist, die eine Instanz von [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) als Argument erhält. `CreateMonitor` verfügt über ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis, das ausgelöst wird, wenn beim Herunterladen des KI-Modells Fortschritte erzielt werden.

Sie können dieses Ereignis verwenden, um Ladefortschrittsdaten anzuzeigen:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet und ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Nutzungskontingente

Einige Implementierungen haben ein Eingabekontingent, das regelt, wie viele Operationen eine Website in einem bestimmten Zeitraum anfordern kann. Das gesamte Kontingent kann über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) abgerufen werden, während die Kontingentnutzung für eine bestimmte Übersetzung oder Spracherkennung über die Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) abgerufen werden kann:

Zum Beispiel gibt der folgende Codeausschnitt das Gesamteingabekontingent über `Translator.inputQuota` und die Eingabekontingentnutzung für die Übersetzung eines bestimmten Textes über `Translator.measureInputUsage()` zurück.

Wir testen dann, ob die individuelle Eingabennutzung für diesen Text größer ist als das insgesamt verfügbare Kontingent. Wenn dies der Fall ist, werfen wir einen entsprechenden Fehler; andernfalls beginnen wir mit der Übersetzung des Textes mit [`translate()`](/de/docs/Web/API/Translator/translate).

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

Wenn Sie versuchen, eine Sprachenerkennungs- oder Übersetzungsoperation auszuführen, die das verfügbare Kontingent überschreitet, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Komplettes Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Übersetzer- und Spracherkennungs-APIs in Aktion zeigt.

### HTML

In unserem Markup definieren wir zunächst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu übersetzenden Text und die zu übersetzende Sprache festzulegen. Dies umfasst ein {{htmlelement("textarea")}}, um den Text selbst einzugeben, ein {{htmlelement("output")}}-Element, um die erkannte Sprache anzuzeigen, und ein {{htmlelement("select")}}-Element zur Auswahl einer Übersetzungssprache.

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

Die zweite Hälfte unseres Markups enthält ein {{htmlelement("p")}}-Element zur Anzeige der generierten Übersetzung.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen werden, da keines davon zum Verständnis der Übersetzer- und Spracherkennungs-APIs relevant ist.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zu `<form>`, `<textarea>`, dem `<button>` zum Absenden, der Übersetzungsausgabe `<p>` und den Spracherkennungsausgaben `<output>` zu erfassen. Wir deklarieren auch eine Variable namens `detectedLanguage`, um die Ergebnisse von Sprachenerkennungsoperationen zu speichern.

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignisse zu überwachen:

- `submit`-Ereignisse für das `<form>`-Element; wenn das Formular abgeschickt wird, wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Ereignisse für das `<textarea>`-Element; wenn sich der aktuelle `<textarea>`-Wert ändert, wird die Funktion `detectLanguage()` aufgerufen.

```js
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die als nächstes definierte Funktion `detectLanguage()` prüft zunächst, ob der Wert des `<textarea>`-Elements mehr als 20 Zeichen umfasst. Falls ja, führen wir die Spracherkennung fort. Andernfalls deaktivieren wir die Absenden-Schaltfläche und zeigen im [`textContent`](/de/docs/Web/API/Node/textContent) des `<output>`-Elements eine Nachricht an, dass der Text zu kurz ist, um die Sprache zu erkennen. Wir tun dies, weil die Spracherkennung im Allgemeinen nicht gut mit einzelnen Wörtern und sehr kurzen Phrasen funktioniert. Wenn Sie häufig mit kurzem Text arbeiten, testen Sie sorgfältig mit Ihren bevorzugten Sprachen und geben Sie das Ergebnis als unbekannt zurück, wenn das Vertrauen zu niedrig ist.

Beim Erkennen der Sprache des eingegebenen Textes erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen `monitor` enthält, um den Download-Fortschritt zu protokollieren, falls das Modell eine Weile zum Herunterladen benötigt. Wir erkennen dann die Sprache mit der Methode [`detect()`](/de/docs/Web/API/LanguageDetector/detect), indem wir ihr den `<textarea>`-Wert übergeben. Wenn die Ergebnisse zurückgegeben werden, schreiben wir die Sprache und das Vertrauen des besten Ergebnisses in das `<output>`-Element. In komplexeren Anwendungen möchten Sie möglicherweise mehrere Ergebnisse melden und dem Benutzer möglicherweise die Möglichkeit geben, die Sprache auszuwählen, aber das wird für die Demo genügen.

Schließlich setzen wir die Absenden-Schaltfläche auf nicht deaktiviert, sodass das Formular abgeschickt werden kann, um die Übersetzung zu starten.

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

Nun definieren wir die Funktion `handleTranslation()`. Nachdem wir die Standard-Übermittlung des Formulars verhindert haben, erstellen wir ein neues [`FormData`](/de/docs/Web/API/FormData)-Objekt, das unsere `<form>`-Daten-Paare enthält. Dann führen wir einen Datenvalidierungstest durch, um zu überprüfen, ob die erkannte `<textarea>`-Inhaltsprache mit der Sprache übereinstimmt, die zur Übersetzung ausgewählt wurde (`translateLanguage`). Wenn ja, geben wir eine Fehlermeldung in das `<p>` mit der Klasse `translate-output` aus.

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

Wenn der Test besteht, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block. Wir beginnen damit, die Verfügbarkeit des Modells für die Übersetzung zwischen der erkannten Eingangs- und der gewählten Ausgabesprache mit der Methode [`availability()`](/de/docs/Web/API/Translator/availability_static) zu prüfen:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung in das `<p>` mit der Klasse `translate-output` aus.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), indem wir die erkannte Eingangs- und die gewählte Ausgabesprache übergeben. Das erforderliche KI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber diesmal fügen wir einen `monitor` hinzu, der bei jedem Auslösen des [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignisses den Prozentsatz des heruntergeladenen Modells in die `translate-output` `<p>` ausgibt.

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

Als nächstes setzen wir den Inhalt des `<p>`-Elements auf eine ausstehende Nachricht und deaktivieren die Absenden-Schaltfläche, bevor wir [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die tatsächliche Übersetzung durchzuführen, wobei wir den `<textarea>`-Wert übergeben. Sobald die Übersetzung abgeschlossen ist, zeigen wir sie im Ausgabebereich `<p>` an, bevor die Absenden-Schaltfläche wieder aktiviert wird.

```js
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich fügen wir das `catch() { ... }` Block-Gegenstück zum `try` Block hinzu. Wenn der `try`-Inhalt irgendeine Art von Ausnahme auslöst, zeigen wir diese im Ausgabefeld `<p>` an.

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

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("translator-example", , "750px", , , , "translator; language-detector", "allow-forms")}}

Probieren Sie es aus, indem Sie einen Textkörper in das `<textarea>` eingeben, und beachten Sie, wie die erkannte Sprache und das Vertrauen nur angezeigt werden, wenn die Anzahl der Zeichen größer als 20 ist. Wählen Sie eine Übersetzungssprache, die sich von Ihrem Eingabetext unterscheidet, und drücken Sie dann die Schaltfläche zum Absenden, um eine KI-generierte Übersetzung zu erzeugen.

Einige Übersetzungssprachenoptionen sind möglicherweise in Ihrem Browser nicht verfügbar, selbst wenn dieser die APIs unterstützt.
