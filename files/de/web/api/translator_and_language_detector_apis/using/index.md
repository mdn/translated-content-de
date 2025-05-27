---
title: Verwendung der Translator- und Sprachdetektor-APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{DefaultAPISidebar("Translator und Sprachdetektor-APIs")}}

Die [Translator- und Sprachdetektor-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen, um auf einer Website Sprachen zu erkennen und Text über das interne KI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst übernimmt, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hostet oder bezahlt. Dieser Artikel erklärt, wie Sie diese APIs verwenden können.

## Erkennung einer Sprache

Alle Funktionen zur Spracherkennung werden über die [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle aufgerufen.

Der erste Schritt zur Erkennung einer Sprache durch das KI-Modell besteht darin, eine Instanz des `LanguageDetector`-Objekts zu erstellen. Dies geschieht mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), die ein Optionsobjekt als Argument nimmt:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die Eigenschaft [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages) gibt die Sprachen an, die Sie in den Detektor einspeisen möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Unterschiedliche Implementierungen werden wahrscheinlich unterschiedliche Sprachen unterstützen.

Nachdem Sie eine `LanguageDetector`-Instanz erstellt haben, können Sie diese zur Erkennung einer Sprache verwenden, indem Sie die Instanzmethode [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect) darauf aufrufen und den Text, den Sie prüfen möchten, als Argument übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, das die erkannten potenziellen Sprachübereinstimmungen darstellt. Jedes enthält:

- Einen String mit dem [BCP 47 Sprach-Tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags), der die erkannte Sprache darstellt.
- Eine Zahl zwischen 0 und 1, die eine Vertrauensbewertung für die Übereinstimmung darstellt.

Ein Beispiel sieht so aus:

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
> Das letzte Array-Element stellt immer eine Vertrauensbewertung für die `und`-Sprache dar — dies ist eine Abkürzung für "undetermined" (unbestimmt) und gibt die Wahrscheinlichkeit an, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

## Erstellen einer Übersetzung

Die Übersetzung erfolgt nach einem sehr ähnlichen Muster wie die Spracherkennung. Eine Instanz des [`Translator`](/de/docs/Web/API/Translator)-Objekts wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, die ein Optionsobjekt erfordert, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthalten muss:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Die Übersetzung wird dann durch Aufrufen der Instanzmethode [`Translator.translate()`](/de/docs/Web/API/Translator/translate) erstellt, der der zu übersetzende Textstring als Argument übergeben wird:

```js
const translation = await translator.translate(myTextString);
```

Dies gibt einen String zurück, der die Übersetzung enthält.

Es gibt auch eine Streaming-Version der Methode `translate()` — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die es ermöglicht, die Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann hilfreich sein, wenn sehr große Textmengen übersetzt werden sollen:

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Prüfen der Konfigurationsunterstützung

Bevor Sie ein `LanguageDetector`- oder `Translator`-Objekt erstellen, können Sie mit den statischen Methoden [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) und [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) prüfen, ob Ihre gewünschte Sprachkonfiguration vom aktuellen Browser unterstützt wird. Zum Beispiel:

```js
const detectorAvailability = await LanguageDetector.availability({
  expectedInputLanguages: ["en-US", "ja"],
});

const translatorAvailability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Diese Methoden geben einen enumerierten Wert zurück, der angibt, ob die Unterstützung für den angegebenen Satz von Optionen verfügbar ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein Modell oder einige Feinabstimmungsdaten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein laufender Download abgeschlossen werden muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Falls ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz mit der entsprechenden `create()`-Methode erstellt wird. Sie können den Downloadfortschritt automatisch mit einem [monitor](#überwachen_des_downloadfortschritts) verfolgen.

## Abbrechen von Vorgängen und Zerstören von Instanzen

Sie können einen ausstehenden Erkennungs- oder Übersetzungsvorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) im Optionsobjekt der Methode als `signal`-Eigenschaftswert enthalten ist. Zum Beispiel könnte das Abbrechen eines `Translator.create()`-Vorgangs so aussehen:

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

Sobald eine `Translator`- oder `LanguageDetector`-Instanz erstellt wurde, können Sie sie mit den Methoden [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy)/[`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy) zerstören, wenn sie nicht mehr benötigt wird:

```js
translator.destroy();
detector.destroy();
```

Es ist sinnvoll, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen binden.

## Überwachen des Downloadfortschritts

Falls das KI-Modell für eine bestimmte Erkennung oder Übersetzung heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die `Translator`- und `LanguageDetector`-`create()`-Methoden können eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument übernimmt. `CreateMonitor` verfügt über ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis, das gefeuert wird, wenn beim Herunterladen des KI-Modells Fortschritte erzielt werden.

Sie können dieses Ereignis verwenden, um die Ladefortschrittsdaten anzuzeigen:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet und eine `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Nutzungsquoten

Einige Implementierungen haben ein Eingabequotum, das regelt, wie viele Vorgänge eine Website in einem bestimmten Zeitraum anfordern kann. Die Gesamtquote kann über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) abgerufen werden, während die Quotenverwendung für eine bestimmte Übersetzung oder Spracherkennung mithilfe der Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel gibt der unten stehende Ausschnitt die gesamte Eingabequote über `Translator.inputQuota` zurück und die Eingabequotennutzung für die Übersetzung eines bestimmten Textstrings über `Translator.measureInputUsage()`.

Wir testen dann, ob die individuelle Eingabenutzung für diesen String größer als das insgesamt verfügbare Quota ist. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

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

Wenn Sie versuchen, eine Spracherkennungs- oder Übersetzungsoperation auszuführen, die das verfügbare Quota überschreitet, wird eine `QuotaExceededError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Vollständiges Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Translator- und Sprachdetektor-APIs in Aktion zeigt.

### HTML

In unserem Markup definieren wir zuerst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu übersetzenden Text und die zu übersetzende Sprache einzustellen. Dies beinhaltet ein {{htmlelement("textarea")}}, um den Text selbst einzugeben, ein {{htmlelement("output")}}-Element, um die erkannte Sprache anzuzeigen, und ein {{htmlelement("select")}}-Element, um eine Übersetzungssprache auszuwählen.

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

Die zweite Hälfte unseres Markups enthält ein {{htmlelement("p")}}-Element, um die erzeugte Übersetzung anzuzeigen.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen werden, da keines davon relevant ist, um die Translator- und Sprachdetektor-APIs zu verstehen.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zu den `<form>`, `<textarea>`, dem Submit-`<button>`, dem Übersetzungsausgabe-`<p>` und den Spracherkennungs-`<output>`-Elementen zu erfassen. Wir deklarieren auch eine Variable namens `detectedLanguage`, um die Ergebnisse der Spracherkennungsoperationen zu speichern.

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als Nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignisse zu überwachen:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn das Formular abgeschickt wird, wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die Funktion `detectLanguage()` aufgerufen.

```js
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die als nächstes definierte Funktion `detectLanguage()` überprüft zunächst, ob der Wert des `<textarea>`-Elements größer als 20 Zeichen ist. Wenn dies der Fall ist, fahren wir mit der Spracherkennung fort. Andernfalls deaktivieren wir die Senden-Schaltfläche und zeigen eine Nachricht im [`textContent`](/de/docs/Web/API/Node/textContent) des `<output>`-Elements an, dass der Text zu kurz ist, um die Sprache zu erkennen. Wir tun dies, weil die Spracherkennung in der Regel nicht gut mit einzelnen Wörtern und sehr kurzen Phrasen funktioniert. Wenn Sie häufig mit kurzen Texten arbeiten, sollten Sie sorgfältig mit Ihren Prioritätssprachen testen und das Ergebnis als unbekannt zurückgeben, wenn das Vertrauen zu niedrig ist.

Bei der Erkennung der Sprache des eingegebenen Textes erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen `monitor` enthält, um den Downloadfortschritt zu protokollieren, falls das Modell eine Weile zum Herunterladen benötigt. Wir erkennen dann die Sprache mit der Methode [`detect()`](/de/docs/Web/API/LanguageDetector/detect), der wir den `<textarea>`-Wert übergeben. Wenn die Ergebnisse zurückgegeben werden, schreiben wir die Sprache und das Vertrauen des besten Ergebnisses in das `<output>`-Element. In komplexeren Apps möchten Sie möglicherweise mehrere Ergebnisse melden und eventuell den Benutzer auswählen lassen, welche Sprache es ist, aber dies reicht für die Demo aus.

Schließlich stellen wir die Senden-Schaltfläche so ein, dass sie nicht deaktiviert ist, damit das Formular zur Übersetzung eingereicht werden kann.

```js
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

Jetzt definieren wir die Funktion `handleTranslation()`. Nachdem wir die Standardeinreichung des Formulars verhindert haben, erstellen wir ein neues [`FormData`](/de/docs/Web/API/FormData)-Objekt, das unsere Namens-/Wertpaare `<form>`-Daten enthält. Wir führen dann einen Datengültigkeitstest durch und überprüfen, ob die erkannte `<textarea>`-Inhaltssprache mit der gewählten Sprache zur Übersetzung (`translateLanguage`) übereinstimmt. Wenn dies der Fall ist, geben wir eine Fehlermeldung im `<p>` mit der Klasse `translate-output` aus.

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

Wenn der Test besteht, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block. Wir beginnen damit, die Verfügbarkeit des Modells für die Übersetzung zwischen der erkannten Eingabe- und gewählten Ausgabesprache mit der Methode [`availability()`](/de/docs/Web/API/Translator/availability_static) zu überprüfen:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung im `<p>` mit der Klasse `translate-output` aus.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), wobei wir die erkannte Eingabe- und gewählte Ausgabesprache übergeben. Das erforderliche KI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (d.h. `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf durch, aber diesmal fügen wir einen `monitor` ein, der bei jedem Auftreten des Ereignisses [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) den Prozentsatz des heruntergeladenen Modells in das `<p>` mit `class` `translate-output` druckt.

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

Als nächstes setzen wir den Inhalt des `<p>`-Ausgabes auf eine ausstehende Nachricht und deaktivieren die Senden-Schaltfläche, bevor wir [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die tatsächliche Übersetzung durchzuführen, wobei wir den `<textarea>`-Wert übergeben. Sobald die Übersetzung abgeschlossen ist, zeigen wir sie innerhalb des `<p>`-Ausgabes an, bevor wir die Senden-Schaltfläche wieder aktivieren.

```js
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich fügen wir den zum `try`-Block gehörigen `catch() { ... }`-Block ein. Wenn der `try`-Inhalt irgendeine Art von Ausnahme auslöst, zeigen wir diese innerhalb des `<p>`-Ausgabes an.

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
        monitor(monitor) {
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

Versuchen Sie, einen Textkörper in das `<textarea>` einzugeben, und beachten Sie, wie die erkannte Sprache und das Vertrauen nur gemeldet werden, wenn die Anzahl der Zeichen größer als 20 wird. Wählen Sie eine Übersetzungssprache, die sich von Ihrem eingegebenen Text unterscheidet, und drücken Sie dann die Schaltfläche Absenden, um eine KI-generierte Übersetzung zu erstellen.

Einige der zur Auswahl stehenden Übersetzungssprachen sind möglicherweise in Ihrem Browser nicht verfügbar, auch wenn dieser die APIs unterstützt.
