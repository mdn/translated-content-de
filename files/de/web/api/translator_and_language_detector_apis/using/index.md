---
title: Verwendung der Übersetzer- und Spracherkennungs-APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die [Übersetzer- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Website, um Sprachen zu erkennen und Texte über das interne AI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst verwaltet und der Entwickler nicht darauf angewiesen ist, dass der Benutzer AI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hostet oder dafür zahlt. Dieser Artikel erklärt, wie Sie diese APIs verwenden.

## Erkennen einer Sprache

Die gesamte Funktionalität zur Spracherkennung wird über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interface angesprochen.

Der erste Schritt, um das AI-Modell eine Sprache erkennen zu lassen, besteht darin, eine Instanz des `LanguageDetector`-Objekts zu erstellen. Dies erfolgt mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), die ein Options-Objekt als Argument nimmt:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages)-Eigenschaft spezifiziert die Sprachen, die Sie dem Detektor zuführen möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Verschiedene Implementierungen werden wahrscheinlich unterschiedliche Sprachen unterstützen.

Wenn Sie eine `LanguageDetector`-Instanz erstellt haben, können Sie sie zur Spracherkennung verwenden, indem Sie die Instanzmethode [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect) aufrufen und den zu überprüfenden Text als Argument übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, die die erkannten potenziellen Sprachübereinstimmungen darstellen. Jedes enthält:

- Einen String mit dem [BCP 47-Sprachcode](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags), der die erkannte Sprache repräsentiert.
- Eine Zahl zwischen 0 und 1, die einen Zuversichtswert für diese Übereinstimmung darstellt.

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
> Das letzte Array-Element repräsentiert immer einen Zuversichtswert für die `und`-Sprache — dies ist eine Abkürzung für "unbestimmt" und stellt die Wahrscheinlichkeit dar, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

## Erstellung einer Übersetzung

Die Übersetzung folgt einem sehr ähnlichen Muster wie die Spracherkennung. Eine [`Translator`](/de/docs/Web/API/Translator)-Objektinstanz wird unter Verwendung der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, die ein Options-Objekt erfordert, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthalten muss:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Die Übersetzung wird dann erzeugt, indem die Instanzmethode [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufgerufen wird. Der zu übersetzende Text-String wird als Argument übergeben:

```js
const translation = await translator.translate(myTextString);
```

Dies gibt einen String zurück, der die Übersetzung enthält.

Es gibt auch eine Streaming-Version der `translate()`-Methode — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die es ermöglicht, die Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann nützlich sein, wenn sehr große Textmengen übersetzt werden:

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

Diese Methoden geben einen enumerierten Wert zurück, der angibt, ob Unterstützung vorhanden ist oder für die angegebenen Optionen verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein Modell oder einige Feindaten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber einen laufenden Download abschließen muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz mit der entsprechenden `create()`-Methode erstellt wird. Sie können den Fortschritt des Downloads automatisch mit einem [Monitor](#überwachung_des_download-fortschritts) verfolgen.

## Abbrechen von Operationen und Zerstören von Instanzen

Sie können eine ausstehende Erkennungs- oder Übersetzungsoperation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) als `signal`-Eigenschaftwert im Options-Objekt der Methode enthalten ist. Zum Beispiel würde das Abbrechen einer `Translator.create()`-Operation so aussehen:

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

Sobald eine `Translator`- oder `LanguageDetector`-Instanz erstellt wurde, können Sie sie mit den Methoden [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy)/[`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy) zerstören, wenn Sie fertig sind:

```js
translator.destroy();
detector.destroy();
```

Es ist sinnvoll, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in ihrer Handhabung binden.

## Überwachung des Download-Fortschritts

Wenn das AI-Modell für eine bestimmte Erkennung oder Übersetzung heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, um ihm mitzuteilen, wie lange er warten muss, bis der Vorgang abgeschlossen ist.

Die `Translator`- und `LanguageDetector`-`create()`-Methoden können eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument übernimmt. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis, das ausgelöst wird, wenn Fortschritte beim Herunterladen des AI-Modells gemacht werden.

Sie können dieses Ereignis verwenden, um Daten zum Ladefortschritt anzuzeigen:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet und ein `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Nutzungsquoten

Einige Implementierungen haben ein Eingabelimit, das regelt, wie viele Operationen eine Website in einem bestimmten Zeitraum anfordern kann. Die Gesamtkontingente können über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) abgerufen werden, während die Kontingentnutzung für eine bestimmte Übersetzung oder Spracherkennung mit den Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel gibt das unten stehende Snippet das Gesamteingabekontingent über `Translator.inputQuota` und die Eingabekontingentnutzung für die Übersetzung eines bestimmten Text-Strings über `Translator.measureInputUsage()` zurück.

Wir prüfen dann, ob die einzelne Eingabekontingentnutzung für diesen String größer als das insgesamt verfügbare Kontingent ist. Wenn ja, werfen wir einen entsprechenden Fehler; wenn nicht, beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

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

## Komplettes Beispiel

Schauen wir uns ein vollständiges Beispiel an, das die Übersetzer- und Spracherkennungs-APIs in Aktion zeigt.

### HTML

In unserem Markup definieren wir zuerst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu übersetzenden Text und die zu übersetzende Sprache festzulegen. Dies beinhaltet ein {{htmlelement("textarea")}} zur Eingabe des Textes selbst, ein {{htmlelement("output")}}-Element zur Anzeige der erkannten Sprache und ein {{htmlelement("select")}}-Element zur Auswahl einer Übersetzungssprache.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht anzeigen werden, da keines davon relevant ist, um die Übersetzer- und Spracherkennungs-APIs zu verstehen.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zum `<form>`, `<textarea>`, zum Senden `<button>`, zur Übersetzungsausgabe `<p>` und zu den Spracherkennungs-`<output>`-Elementen zu erhalten. Wir deklarieren auch eine Variable namens `detectedLanguage`, um die Ergebnisse von Spracherkennungsoperationen zu enthalten.

```js live-sample___translator-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignissen zuzuhören:

- `submit`-Ereignissen auf dem `<form>`-Element; wenn das Formular gesendet wird, wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Ereignissen auf dem `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die Funktion `detectLanguage()` aufgerufen.

```js live-sample___translator-example
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die als nächstes definierte Funktion `detectLanguage()` überprüft zunächst, ob der Wert des `<textarea>`-Elements mehr als 20 Zeichen beträgt. Wenn ja, fahren wir mit der Spracherkennung fort. Wenn nicht, deaktivieren wir den Absende-Button und zeigen eine Nachricht im `<output>`-Element [`textContent`](/de/docs/Web/API/Node/textContent) an, die besagt, dass der Text zu kurz ist, um die Sprache zu erkennen. Wir tun dies, weil die Spracherkennung im Allgemeinen nicht gut bei Einzelworten und sehr kurzen Phrasen funktioniert. Wenn Sie häufig mit kurzem Text arbeiten, testen Sie sorgfältig mit Ihren Prioritätssprachen und geben Sie das Ergebnis als unbekannt zurück, wenn die Zuversicht zu gering ist.

Um die Sprache des eingegebenen Textes zu erkennen, erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen `monitor` enthält, um den Download-Fortschritt zu protokollieren, wenn das Modell eine Weile zum Herunterladen benötigt. Wir erkennen dann die Sprache mit der Methode [`detect()`](/de/docs/Web/API/LanguageDetector/detect), indem wir den `<textarea>`-Wert übergeben. Wenn die Ergebnisse zurückgegeben werden, schreiben wir die Sprache und die Zuversicht des besten Ergebnisses in das `<output>`-Element. In komplexeren Apps möchten Sie möglicherweise mehrere Ergebnisse melden und dem Benutzer die Wahl lassen, um welche Sprache es sich handelt, aber das reicht für die Demo.

Schließlich setzen wir den Absende-Button auf nicht deaktiviert, sodass das Formular gesendet werden kann, um die Übersetzung zu starten.

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

Nun definieren wir die Funktion `handleTranslation()`. Nachdem wir die Standardübermittlung des Formulars verhindert haben, erstellen wir eine neue Instanz des [`FormData`](/de/docs/Web/API/FormData)-Objekts, das unsere `<form>`-Datenname/Wert-Paare enthält. Wir führen dann einen Datenvalidierungstest durch, um zu überprüfen, ob die erkannte Sprache des `<textarea>`-Inhalts dieselbe ist wie die Sprache, in die übersetzt werden soll (`translateLanguage`). Wenn ja, drucken wir eine Fehlermeldung innerhalb des `<p>` mit der Klasse `translate-output`.

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

Wenn der Test erfolgreich ist, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block. Wir beginnen mit der Überprüfung der Verfügbarkeit des Modells für die Übersetzung zwischen der erkannten Eingabe- und der gewählten Ausgabesprache mit der Methode [`availability()`](/de/docs/Web/API/Translator/availability_static):

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in das `<p>` mit der Klasse `translate-output`.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), wobei wir die erkannte Eingabe- und die gewählte Ausgabesprache übergeben. Das erforderliche AI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert (`downloadable` oder `downloading`) zurückgibt, führen wir denselben `create()`-Methodenaufruf aus, diesmal jedoch mit einem `monitor`, der bei jedem Auslösen des [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignisses den Prozentsatz des heruntergeladenen Modells im `translate-output` `<p>` ausgibt.

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

Als nächstes setzen wir den Inhalt des `<p>`-Ausgangs in eine ausstehende Nachricht und deaktivieren den Absende-Button, bevor wir [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die eigentliche Übersetzung auszuführen, indem wir den `<textarea>`-Wert übergeben. Sobald die Übersetzung abgeschlossen ist, zeigen wir sie im `<p>`-Ausgang an, bevor der Absende-Button wieder aktiviert wird.

```js live-sample___translator-example
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich fügen wir den `catch() { ... }`-Block der `try`-Block-Partner hinzu. Wenn der `try`-Inhalt eine Ausnahme auslöst, zeigen wir sie im `<p>`-Ausgang an.

```js live-sample___translator-example
  } catch (e) {
    translateOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

### Ergebnis

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("translator-example", , "750px", , , , "translator; language-detector", "allow-forms")}}

Versuchen Sie, einen Text in das `<textarea>` einzugeben, und beachten Sie, wie die erkannte Sprache und die Zuversicht nur angezeigt werden, wenn die Anzahl der Zeichen größer als 20 ist. Wählen Sie eine Übersetzungssprache, die sich von Ihrem Eingabetext unterscheidet, und drücken Sie dann den Absende-Button, um eine AI-generierte Übersetzung zu erzeugen.

Einige der Übersetzungssprachoptionen sind möglicherweise in Ihrem Browser nicht verfügbar, selbst wenn er die APIs unterstützt.
