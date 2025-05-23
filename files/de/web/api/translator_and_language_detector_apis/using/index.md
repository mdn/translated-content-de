---
title: Verwendung der Translator- und Sprachenerkennungs-APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die [Translator- und Sprachenerkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen, mit denen eine Website Sprachen erkennen und Text über das interne AI-Modell des Browsers übersetzen kann. Dies ist nützlich und effizient, da der Browser den Dienst bereitstellt und der Entwickler nicht darauf angewiesen ist, dass der Nutzer AI-Modelle herunterlädt oder einen cloud-basierten Übersetzungsdienst hostet oder bezahlt. Dieser Artikel erklärt, wie diese APIs verwendet werden.

## Erkennen einer Sprache

Alle Sprachenerkennungsfunktionen sind über die [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Schnittstelle zugänglich.

Der erste Schritt, um das AI-Modell eine Sprache erkennen zu lassen, besteht darin, eine `LanguageDetector`-Objektinstanz zu erstellen. Dies erfolgt mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), die ein Optionsobjekt als Argument benötigt:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages)-Eigenschaft gibt die Sprachen an, die Sie dem Detektor zuführen möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Unterschiedliche Implementierungen unterstützen wahrscheinlich unterschiedliche Sprachen.

Nachdem Sie eine `LanguageDetector`-Instanz erstellt haben, können Sie diese verwenden, um eine Sprache zu erkennen, indem Sie die Instanzmethode [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect) aufrufen und ihr den zu überprüfenden Text als Argument übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, die die erkannten potenziellen Sprachübereinstimmungen darstellen. Jedes enthält:

- Einen String mit dem [BCP 47-Sprachtag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags), der die erkannte Sprache darstellt.
- Eine Zahl zwischen 0 und 1, die eine Vertrauenswürdigkeitsbewertung für diese Übereinstimmung darstellt.

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
> Das letzte Element des Arrays gibt immer eine Vertrauensbewertung für die Sprache `und` an — dies ist eine Abkürzung für "undetermined" (unbestimmt) und stellt die Wahrscheinlichkeit dar, dass der Text nicht in einer dem Modell bekannten Sprache geschrieben ist.

## Erstellen einer Übersetzung

Die Übersetzung folgt einem sehr ähnlichen Muster wie die Spracherkennung. Eine [`Translator`](/de/docs/Web/API/Translator)-Objektinstanz wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, die ein Optionsobjekt benötigt, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthalten muss:

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

Es gibt auch eine Streaming-Version der `translate()`-Methode — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die es erlaubt, die Übersetzung als einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann nützlich sein, wenn sehr große Textmengen übersetzt werden:

```js
const stream = translator.translateStreaming((myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Überprüfen des Konfigurationssupports

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

Diese Methoden geben einen enumerierten Wert zurück, der angibt, ob Unterstützung für die angegebenen Optionen vorhanden ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die angeforderten Optionen unterstützt werden, aber ein Modell oder einige Feinabstimm-Daten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die angeforderten Optionen unterstützt werden, aber ein laufender Download abgeschlossen werden muss.
- `available` bedeutet, dass die angeforderten Optionen ohne neue Downloads unterstützt werden.
- `unavailable` bedeutet, dass die angeforderten Optionen nicht unterstützt werden.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz mit der entsprechenden `create()`-Methode erstellt wird. Sie können den Fortschritt des Downloads automatisch mit einem [Monitor](#überwachen_des_download-fortschritts) verfolgen.

## Abbrechen von Operationen und Zerstören von Instanzen

Sie können eine ausstehende Erkennungs- oder Übersetzungsoperation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) als `signal`-Eigenschaftswert innerhalb des Methodenoptionsobjekts enthalten ist. Beispielsweise sieht das Abbrechen einer `Translator.create()`-Operation so aus:

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

Sobald eine `Translator`- oder `LanguageDetector`-Instanz erstellt wurde, können Sie diese mit den Methoden [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy)/[`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy) zerstören, wenn sie nicht mehr benötigt wird:

```js
translator.destroy();
detector.destroy();
```

Es ist sinnvoll, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie beträchtliche Ressourcen in ihrer Handhabung binden.

## Überwachen des Download-Fortschritts

Wenn das AI-Modell für eine bestimmte Erkennung oder Übersetzung heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis die Operation abgeschlossen ist.

Die `Translator`- und `LanguageDetector`-Methoden `create()` können eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument nimmt. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Event, das ausgelöst wird, wenn Fortschritte beim Herunterladen des AI-Modells gemacht werden.

Sie können dieses Event verwenden, um Ladefortschrittsdaten anzuzeigen:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet und eine `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Nutzungskontingente

Einige Implementierungen haben ein Eingabekontingent, das regelt, wie viele Operationen eine Website in einem bestimmten Zeitraum anfordern kann. Das Gesamtkontingent kann über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) abgerufen werden, während die Kontingentnutzung für eine bestimmte Übersetzung oder Spracherkennung mit den Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel gibt der folgende Codeausschnitt das Gesamtkontingent über `Translator.inputQuota` und die Kontingentnutzung für die Übersetzung eines bestimmten Textstrings über `Translator.measureInputUsage()` zurück.

Wir prüfen dann, ob die individuelle Eingabenutzung für diesen String größer ist als das insgesamt verfügbare Kontingent. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

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

Wenn Sie versuchen, eine Spracherkennungs- oder Übersetzungsoperation auszuführen, die das verfügbare Kontingent überschreitet, wird eine `QuotaExceededError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Vollständiges Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Translator- und Sprachenerkennungs-APIs in Aktion zeigt.

### HTML

In unserem Markup definieren wir zunächst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu übersetzenden Text und die Sprache, in die übersetzt werden soll, festzulegen. Dies umfasst ein {{htmlelement("textarea")}} zum Eingeben des Textes selbst, ein {{htmlelement("output")}}-Element zur Anzeige der erkannten Sprache und ein {{htmlelement("select")}}-Element zur Auswahl einer Übersetzungssprache.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen, da es für das Verständnis der Translator- und Sprachenerkennungs-APIs nicht relevant ist.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zu den `<form>`, `<textarea>`, dem Senden-`<button>`, der Übersetzungs-Ausgabe-`<p>` und den Spracherkennungs-`<output>`-Elementen zu erfassen. Wir deklarieren auch eine Variable namens `detectedLanguage`, um die Ergebnisse der Spracherkennungsoperationen zu enthalten.

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Events zu überwachen:

- `submit`-Events auf dem `<form>`-Element; wenn das Formular eingereicht wird, wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Events auf dem `<textarea>`-Element; wenn der aktuelle Wert des `<textarea>` geändert wird, wird die Funktion `detectLanguage()` aufgerufen.

```js
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die als nächstes definierte Funktion `detectLanguage()` prüft zunächst, ob der Wert des `<textarea>`-Elements mehr als 20 Zeichen enthält. Falls ja, führen wir die Spracherkennung fort. Wenn nicht, deaktivieren wir die Senden-Schaltfläche und zeigen eine Nachricht im [`textContent`](/de/docs/Web/API/Node/textContent) des `<output>`-Elements an, die besagt, dass der Text zu kurz ist, um die Sprache zu erkennen. Wir tun dies, weil die Spracherkennung bei einzelnen Wörtern und sehr kurzen Phrasen im Allgemeinen nicht gut funktioniert. Wenn Sie häufig mit kurzem Text arbeiten, testen Sie sorgfältig mit Ihren Prioritätssprachen und geben Sie das Ergebnis als unbekannt aus, wenn das Vertrauen zu niedrig ist.

Beim Erkennen der Sprache des eingegebenen Textes erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen `monitor` enthält, um den Fortschritt des Downloads zu protokollieren, wenn das Modell eine Weile zum Herunterladen benötigt. Wir erkennen dann die Sprache mit der Methode [`detect()`](/de/docs/Web/API/LanguageDetector/detect), der wir den Wert des `<textarea>` übergeben. Sobald die Ergebnisse zurückgegeben sind, schreiben wir die Sprache und das Vertrauen des besten Ergebnisses in das `<output>`-Element. In komplexeren Anwendungen möchten Sie möglicherweise mehrere Ergebnisse melden und dem Benutzer möglicherweise die Wahl der Sprache überlassen, aber dies reicht für die Demo aus.

Schließlich setzen wir die Schaltfläche zum Senden auf "nicht deaktiviert", damit das Formular gesendet werden kann, um die Übersetzung zu starten.

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

Nun definieren wir die Funktion `handleTranslation()`. Nachdem die Standardübergabe des Formulars verhindert wurde, erstellen wir eine neue [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die unsere `<form>`-Daten-Namen/Wert-Paare enthält. Wir führen dann einen Datengültigkeitstest aus, indem wir überprüfen, ob die erkannte `<textarea>` Spracherkennungssprache dieselbe ist wie die gewählte Übersetzungssprache (`translateLanguage`). Wenn dies der Fall ist, geben wir eine Fehlermeldung innerhalb des `<p>` mit der Klasse `translate-output` aus.

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

Wenn der Test erfolgreich ist, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block. Wir beginnen damit, die Verfügbarkeit des Modells für die Übersetzung zwischen den erkannten Eingabe- und den gewählten Ausgabesprachen mit der Methode [`availability()`](/de/docs/Web/API/Translator/availability_static) zu überprüfen:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung innerhalb des `<p>` mit der Klasse `translate-output` aus.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), der die erkannten Eingabe- und die gewählten Ausgabesprachen übergibt. Das benötigte KI-Modell ist verfügbar, so dass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber dieses Mal fügen wir einen `monitor` hinzu, der bei jedem Auslösen des [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Events die prozentuale Menge des heruntergeladenen Modells in das `<p>` mit der Klasse `translate-output` ausgibt.

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

Als nächstes setzen wir den Inhalt des `<p>`-Ausgabeelements auf eine ausstehende Nachricht und deaktivieren die Schaltfläche zum Senden, bevor wir [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die eigentliche Übersetzung durchzuführen und den Wert des `<textarea>` zu übergeben. Sobald die Übersetzung abgeschlossen ist, zeigen wir sie im `<p>`-Ausgabeelement an, bevor wir die Schaltfläche zum Senden wieder aktivieren.

```js
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich fügen wir das `try`-Block-Pendant `catch() { ... }`-Block hinzu. Wenn der Inhalt von `try` irgendeine Art von Ausnahme auslöst, zeigen wir diese innerhalb des `<p>`-Ausgabeelements an.

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
  } else {
    translateOutput.innerHTML = "";
  }

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

Versuchen Sie, einen Text in das `<textarea>` einzugeben, und beachten Sie, wie die erkannte Sprache und das Vertrauen erst gemeldet werden, wenn die Anzahl der Zeichen 20 überschreitet. Wählen Sie eine Übersetzungssprache, die sich von Ihrem Eingabetext unterscheidet, und drücken Sie dann die Senden-Schaltfläche, um eine AI-generierte Übersetzung zu erzeugen.

Einige der Übersetzungssprachoptionen sind möglicherweise nicht in Ihrem Browser verfügbar, selbst wenn dieser die APIs unterstützt.
