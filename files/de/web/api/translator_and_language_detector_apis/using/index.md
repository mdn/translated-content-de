---
title: Verwendung der Translator- und Language Detector-APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die [Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Website, um Sprachen zu erkennen und Text über das interne AI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst übernimmt, anstatt dass Entwickler darauf angewiesen sind, dass der Benutzer AI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hostet oder bezahlt. Dieser Artikel erklärt, wie Sie diese APIs verwenden.

## Eine Sprache erkennen

Die gesamte Funktionalität zur Spracherkennung ist über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interface zugänglich.

Der erste Schritt, um das AI-Modell eine Sprache erkennen zu lassen, besteht darin, eine Instanz des `LanguageDetector`-Objekt zu erstellen. Dies geschieht mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), die ein Optionsobjekt als Argument übernimmt:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages)-Eigenschaft spezifiziert die Sprachen, die Sie dem Detektor geben möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Verschiedene Implementierungen werden wahrscheinlich unterschiedliche Sprachen unterstützen.

Nachdem Sie eine `LanguageDetector`-Instanz erstellt haben, können Sie diese verwenden, um eine Sprache zu erkennen, indem Sie die Instanzmethode [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect) aufrufen und den zu prüfenden Text als Argument übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, die die erkannten potenziellen Sprachübereinstimmungen darstellen. Jedes enthält:

- Einen String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 language tag")}}, der die erkannte Sprache repräsentiert.
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
> Das letzte Array-Element repräsentiert immer einen Vertrauenswert für die Sprache `und` — das ist eine Abkürzung für "unbestimmt" und stellt die Wahrscheinlichkeit dar, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

## Eine Übersetzung erstellen

Die Übersetzung folgt einem sehr ähnlichen Muster wie die Spracherkennung. Ein [`Translator`](/de/docs/Web/API/Translator)-Objekt wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, die ein Optionsobjekt erwartet, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und eine [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthalten muss:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Die Übersetzung wird dann durch Aufrufen der Instanzmethode [`Translator.translate()`](/de/docs/Web/API/Translator/translate) erstellt, der die zu übersetzende Textzeichenkette als Argument übergeben wird:

```js
const translation = await translator.translate(myTextString);
```

Dies gibt eine Zeichenkette zurück, die die Übersetzung enthält.

Es gibt auch eine Streaming-Version der `translate()`-Methode — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die es Ihnen ermöglicht, die Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann nützlich sein, wenn sehr große Textmengen übersetzt werden müssen:

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Unterstützungskonfiguration prüfen

Bevor Sie ein `LanguageDetector`- oder `Translator`-Objekt erstellen, können Sie prüfen, ob Ihre gewünschte Sprachkonfiguration vom aktuellen Browser unterstützt wird, indem Sie die statischen Methoden [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) und [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) verwenden. Zum Beispiel:

```js
const detectorAvailability = await LanguageDetector.availability({
  expectedInputLanguages: ["en-US", "ja"],
});

const translatorAvailability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Diese Methoden geben einen enumerierten Wert zurück, der angibt, ob die Unterstützung für die angegebenen Optionen verfügbar ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein Modell oder einige Feinabstimmungsdaten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein laufender Download abgeschlossen werden muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen ohne neue Downloads unterstützt.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch durch den Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz mit der entsprechenden `create()`-Methode erstellt wird. Sie können den Download-Fortschritt automatisch mit einem [monitor](#download-fortschritt_überwachen) verfolgen.

## Vorgänge abbrechen und Instanzen zerstören

Sie können einen ausstehenden Erkennungs- oder Übersetzungsvorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) innerhalb des Optionsobjekts der Methode als `signal`-Eigenschaftswert enthalten ist. Zum Beispiel würde ein Abbruch eines `Translator.create()`-Vorgangs so aussehen:

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

Nachdem eine `LanguageDetector`- oder `Translator`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jegliche weitere Aktivität stoppen, indem Sie ihre Methode [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy)/[`Translator.destroy()`](/de/docs/Web/API/Translator/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das Objekt nicht mehr benötigen, da es viele Ressourcen verbrauchen kann.

```js
translator.destroy();
detector.destroy();
```

Wenn ein `create()`-Aufruf einen zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) hat und Sie dessen Methode [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) nach dem erfolgreichen `create()`-Aufruf aufrufen, hat dies den gleichen Effekt wie ein Aufruf von `destroy()` auf das resultierende `LanguageDetector`- oder `Translator`-Objekt.

## Download-Fortschritt überwachen

Wenn das AI-Modell für eine bestimmte Erkennung oder Übersetzung herunterlädt (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, um ihm mitzuteilen, wie lange es dauert, bis der Vorgang abgeschlossen ist.

Die `Translator`- und `LanguageDetector`-Methoden `create()` können eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument nimmt. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis, das bei Fortschritten im Download des AI-Modells ausgelöst wird.

Sie können dieses Ereignis verwenden, um Ladefortschrittsdaten anzuzeigen:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet und ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Nutzungsquoten

Einige Implementierungen haben eine Eingabequote, die regelt, wie viele Vorgänge eine Website in einem bestimmten Zeitraum anfordern kann. Die gesamte Quote kann über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) abgerufen werden, während die Quotenverwendung für eine bestimmte Übersetzung oder Spracherkennung mit den Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel gibt das untenstehende Snippet die gesamte Eingabequote über `Translator.inputQuota` und die Eingabequote für die Übersetzung eines bestimmten Texts über `Translator.measureInputUsage()` zurück.

Wir prüfen dann, ob die individuelle Quotenverwendung für diesen String größer ist als die insgesamt verfügbare Quote. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

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

Wenn Sie versuchen, eine Spracherkennungs- oder Übersetzungsaktion auszuführen, die das verfügbare Kontingent überschreitet, wird ein `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Komplettes Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Translator- und Language Detector-APIs in Aktion zeigt.

### HTML

In unserem Markup definieren wir zuerst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu übersetzenden Text und die zu übersetzende Sprache festzulegen. Dies beinhaltet ein {{htmlelement("textarea")}} zum Eingeben des Textes selbst, ein {{htmlelement("output")}}-Element zur Anzeige der erkannten Sprache und ein {{htmlelement("select")}}-Element zum Auswählen einer Übersetzungssprache.

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

Die zweite Hälfte unseres Markups beinhaltet ein {{htmlelement("p")}}-Element zur Anzeige der erzeugten Übersetzung.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen, da keiner davon relevant ist, um die Translator- und Language Detector-APIs zu verstehen.

### JavaScript

In unserem Skript beginnen wir mit der Erfassung von Referenzen auf das `<form>`, `<textarea>`, Submit-`<button>`, Übersetzungsausgabe-`<p>` und Spracherkennungs-`<output>`-Elemente. Wir deklarieren auch eine Variable namens `detectedLanguage` zur Aufnahme der Ergebnisse von Spracherkennungsaktionen.

```js live-sample___translator-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignisse abzuhören:

- `submit`-Ereignisse auf dem `<form>`-Element; bei Einreichung des Formulars wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die Funktion `detectLanguage()` aufgerufen.

```js live-sample___translator-example
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die nächste definierte Funktion `detectLanguage()` prüft zuerst, ob der Wert des `<textarea>`-Elements länger als 20 Zeichen ist. Wenn ja, führen wir die Spracherkennung fort. Wenn nicht, deaktivieren wir die Schaltfläche zum Absenden und zeigen eine Nachricht im [`textContent`](/de/docs/Web/API/Node/textContent) des `<output>`-Elements an, die besagt, dass der Text zu kurz ist, um die Sprache zu erkennen. Wir tun dies, weil die Spracherkennung normalerweise nicht gut mit einzelnen Wörtern und sehr kurzen Phrasen funktioniert. Wenn Sie häufig mit kurzem Text arbeiten, testen Sie sorgfältig mit Ihren Prioritätssprachen und geben Sie das Ergebnis als unbekannt zurück, wenn das Vertrauen zu gering ist.

Beim Erkennen der Sprache des eingegebenen Textes erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen `monitor` enthält, um den Download-Fortschritt zu protokollieren, falls das Modell eine Weile zum Herunterladen benötigt. Wir erkennen dann die Sprache mit der Methode [`detect()`](/de/docs/Web/API/LanguageDetector/detect), indem wir ihr den `<textarea>`-Wert übergeben. Wenn die Ergebnisse zurückgegeben werden, schreiben wir die Sprache und das Vertrauen des besten Ergebnisses in das `<output>`-Element. In komplexeren Apps möchten Sie möglicherweise mehrere Ergebnisse berichten und dem Benutzer möglicherweise die Wahl der Sprache lassen, aber das wird für die Demo genügen.

Schließlich setzen wir die Schaltfläche zum Absenden so, dass sie nicht deaktiviert ist, damit das Formular eingereicht werden kann, um die Übersetzung zu starten.

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

Nun definieren wir die `handleTranslation()`-Funktion. Nachdem wir die Standardübermittlung des Formulars verhindert haben, erstellen wir eine neue [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die unsere `<form>`-Datenname/Wert-Paare enthält. Dann führen wir einen Datengültigkeitstest durch, um zu überprüfen, ob die erkannte `<textarea>`-Inhaltssprache dieselbe ist wie die gewählte Übersetzungssprache (`translateLanguage`). Wenn ja, drucken wir eine Fehlermeldung in das `<p>` mit der Klasse `translate-output`.

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

Wenn der Test erfolgreich ist, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block. Wir beginnen mit der Überprüfung der Verfügbarkeit des Modells für die Übersetzung zwischen der erkannten Eingabe- und gewählten Ausgabesprache mithilfe der Methode [`availability()`](/de/docs/Web/API/Translator/availability_static):

- Wenn es `unavailable` zurückgibt, drucken wir eine passende Fehlermeldung in das `<p>` mit der Klasse `translate-output`.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), indem wir ihm die erkannte Eingabe und gewählte Ausgabesprache übergeben. Das benötigte AI-Modell ist verfügbar, also können wir es sofort verwenden.
- Wenn es einen anderen Wert zurückgibt (das heißt, `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber diesmal fügen wir einen `monitor` hinzu, der den Prozentsatz des heruntergeladenen Modells in das `translate-output`-`<p>` druckt, jedes Mal, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

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

Als nächstes setzen wir den Inhalt des `<p>` auf eine ausstehende Nachricht und deaktivieren die Schaltfläche zum Absenden, bevor wir [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die eigentliche Übersetzung durchzuführen, indem wir ihr den `<textarea>`-Wert übergeben. Sobald die Übersetzung abgeschlossen ist, zeigen wir sie im Ausgabe-`<p>` an, bevor die Schaltfläche zum Absenden wieder aktiviert wird.

```js live-sample___translator-example
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich fügen wir den Gegenpart `catch() { ... }` des `try`-Blocks hinzu. Wenn der Inhalt von `try` eine Ausnahme auslöst, zeigen wir sie im Ausgabe-`<p>` an.

```js live-sample___translator-example
  } catch (e) {
    translateOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

### Ergebnis

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("translator-example", , "750px", , , , "translator; language-detector", "allow-forms")}}

Versuchen Sie, einen Textkörper in das `<textarea>` einzugeben, und beachten Sie, wie die erkannte Sprache und das Vertrauen nur gemeldet werden, wenn die Anzahl der Zeichen größer als 20 wird. Wählen Sie eine andere Übersetzungssprache als Ihren Eingabetext und drücken Sie die Abschicken-Schaltfläche, um eine AI-generierte Übersetzung zu erzeugen.

Einige der Übersetzungssprachoptionen stehen möglicherweise nicht in Ihrem Browser zur Verfügung, selbst wenn er die APIs unterstützt.
