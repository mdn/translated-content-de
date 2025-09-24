---
title: Verwendung der APIs für Übersetzer und Spracherkennung
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die [APIs für Übersetzer und Spracherkennung](/de/docs/Web/API/Translator_and_Language_Detector_APIs) bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Website, um Sprachen zu erkennen und Texte über das interne AI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst verwaltet, anstatt dass der Entwickler darauf angewiesen ist, dass der Nutzer AI-Modelle herunterlädt oder einen cloud-basierten Übersetzungsdienst hostet oder bezahlt. Dieser Artikel erklärt, wie Sie diese APIs verwenden.

## Erkennung einer Sprache

Die gesamte Funktionalität zur Spracherkennung wird über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interface bereitgestellt.

Der erste Schritt, das AI-Modell eine Sprache erkennen zu lassen, besteht darin, eine Instanz des `LanguageDetector`-Objekts zu erstellen. Dies geschieht mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), die ein Optionsobjekt als Argument erwartet:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die Eigenschaft [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages) gibt die Sprachen an, die Sie dem Detektor zuführen möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Verschiedene Implementierungen unterstützen wahrscheinlich unterschiedliche Sprachen.

Nachdem Sie eine `LanguageDetector`-Instanz erstellt haben, können Sie sie verwenden, um eine Sprache zu erkennen, indem Sie die Instanzmethode [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect) darauf aufrufen und ihr den zu überprüfenden Text als Argument übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, die die erkannten möglichen Sprachübereinstimmungen darstellen.
Jedes enthält:

- Einen String, der ein {{Glossary("BCP_47_language_tag", "BCP 47 language tag")}} darstellt, das die erkannte Sprache beschreibt.
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
> Das letzte Array-Element stellt immer eine Vertrauensbewertung für die Sprache `und` dar — dies ist eine Abkürzung für "undetermined" (unbestimmt) und repräsentiert die Wahrscheinlichkeit, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

## Erstellung einer Übersetzung

Die Übersetzung folgt einem sehr ähnlichen Muster wie die Spracherkennung. Ein [`Translator`](/de/docs/Web/API/Translator)-Objekt wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, die ein Optionsobjekt erwartet, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthalten muss:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Die Übersetzung wird dann erstellt, indem die Instanzmethode [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufgerufen wird, der der zu übersetzende Textstring als Argument übergeben wird:

```js
const translation = await translator.translate(myTextString);
```

Dies gibt einen String zurück, der die Übersetzung enthält.

Es gibt auch eine Streaming-Version der `translate()`-Methode — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die es ermöglicht, die Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann nützlich sein, wenn sehr große Textkörper übersetzt werden:

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Überprüfung der Unterstützung von Konfigurationen

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

Diese Methoden geben einen enumerierten Wert zurück, der angibt, ob die Unterstützung für die angegebenen Optionen verfügbar ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein Modell oder einige Fine-Tuning-Daten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein laufender Download abgeschlossen werden muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen ohne zusätzliche Downloads unterstützt.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz mithilfe der entsprechenden `create()`-Methode erstellt wird. Sie können den Download-Fortschritt automatisch mit einem [Monitor](#überwachung_des_download-fortschritts) verfolgen.

## Abbrechen von Operationen und Zerstören von Instanzen

Sie können eine ausstehende Erkennungs- oder Übersetzungsoperation mithilfe eines [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) als `signal`-Eigenschaftswert im Methodenoptionsobjekt enthalten ist. Zum Beispiel würde das Abbrechen einer `Translator.create()`-Operation so aussehen:

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

Es ist sinnvoll, diese Objekte zu zerstören, wenn sie nicht mehr verwendet werden, da sie erhebliche Ressourcen in Anspruch nehmen.

## Überwachung des Download-Fortschritts

Wenn das AI-Modell für eine bestimmte Erkennungs- oder Übersetzungsaufgabe heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Nutzer ein Feedback zu geben, um ihm mitzuteilen, wie lange er noch warten muss, bis die Operation abgeschlossen ist.

Die `create()`-Methoden von `Translator` und `LanguageDetector` können eine `monitor`-Eigenschaft annehmen, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument erhält. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis verfügbar, das ausgelöst wird, wenn Fortschritte beim Herunterladen des AI-Modells gemacht werden.

Sie können dieses Ereignis verwenden, um Fortschrittsdaten zur Ladezeit anzuzeigen:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet, und ein `NotSupportedError`-[`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Nutzungsquoten

Einige Implementierungen haben ein Eingabequotensystem, das regelt, wie viele Operationen eine Website in einem bestimmten Zeitraum anfordern kann. Die Gesamtquote kann über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) aufgerufen werden, während die Quotenverwendung für eine bestimmte Übersetzung oder Spracherkennung mit den Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurückgegeben werden kann.

Zum Beispiel gibt der folgende Code-Ausschnitt die gesamte Eingabequote über `Translator.inputQuota` zurück und die Eingabequotennutzung für das Übersetzen eines bestimmten Textstrings über `Translator.measureInputUsage()`.

Wir prüfen dann, ob die individuelle Eingabenutzung für diesen String größer ist als die insgesamt verfügbare Quote. Wenn dies der Fall ist, werfen wir einen entsprechenden Fehler; andernfalls beginnen wir mit der Übersetzung des Strings mithilfe von [`translate()`](/de/docs/Web/API/Translator/translate).

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

Wenn Sie versuchen, eine Spracherkennungs- oder Übersetzungsoperation auszuführen, die die verfügbare Quote überschreitet, wird ein `QuotaExceededError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Vollständiges Beispiel

Werfen wir einen Blick auf ein vollständiges Beispiel, das die Translator- und Spracherkennungs-APIs in Aktion zeigt.

### HTML

In unserem Markup definieren wir zunächst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu übersetzenden Text und die Sprache, in die übersetzt werden soll, festzulegen. Dies umfasst ein {{htmlelement("textarea")}} zur Eingabe des Textes selbst, ein {{htmlelement("output")}}-Element zur Anzeige der erkannten Sprache und ein {{htmlelement("select")}}-Element zur Auswahl einer Übersetzungssprache.

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

Die zweite Hälfte unseres Markups beinhaltet ein {{htmlelement("p")}}-Element zur Anzeige der generierten Übersetzung.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht zeigen, da es für das Verständnis der Translator- und Spracherkennungs-APIs nicht relevant ist.

### JavaScript

In unserem Script beginnen wir damit, Referenzen zu den `<form>`, `<textarea>`, Submit-`<button>`, Übersetzungsausgabe-`<p>` und Spracherkennungsausgabe-`<output>`-Elementen zu erfassen. Wir deklarieren auch eine Variable namens `detectedLanguage`, um Ergebnisse von Spracherkennungsoperationen zu enthalten.

```js live-sample___translator-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf zwei Ereignisse zu hören:

- `submit`-Ereignisse auf dem `<form>`-Element; wenn das Formular eingereicht wird, wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; wenn der aktuelle `<textarea>`-Wert geändert wird, wird die Funktion `detectLanguage()` aufgerufen.

```js live-sample___translator-example
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die nächste Funktion, `detectLanguage()`, prüft zuerst, ob der Wert des `<textarea>`-Elements mehr als 20 Zeichen beträgt. Wenn ja, führen wir die Spracherkennung durch. Wenn nein, deaktivieren wir den Submit-Button und zeigen eine Nachricht im [`textContent`](/de/docs/Web/API/Node/textContent) des `<output>`-Elements an, die besagt, dass der Text zu kurz ist, um die Sprache zu erkennen. Wir tun dies, weil die Spracherkennung bei einzelnen Wörtern und sehr kurzen Phrasen im Allgemeinen nicht gut funktioniert. Wenn Sie häufig mit kurzem Text arbeiten, testen Sie sorgfältig mit Ihren Prioritätssprachen und geben Sie das Ergebnis als unbekannt zurück, wenn das Vertrauen zu niedrig ist.

Beim Erkennen der Sprache des eingegebenen Textes erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen `monitor` einbezieht, um den Download-Fortschritt zu protokollieren, falls das Modell eine Weile zum Herunterladen benötigt. Dann erkennen wir die Sprache mit der Methode [`detect()`](/de/docs/Web/API/LanguageDetector/detect) und übergeben ihr den `<textarea>`-Wert. Wenn die Ergebnisse zurückgegeben werden, schreiben wir die Sprache und das Vertrauen des besten Ergebnisses in das `<output>`-Element. In komplexeren Apps möchten Sie möglicherweise mehrere Ergebnisse melden und dem Benutzer möglicherweise die Auswahl überlassen, um welche Sprache es sich handelt, aber das sollte für das Demo ausreichen.

Schließlich setzen wir den Submit-Button auf nicht deaktiviert, sodass das Formular eingereicht werden kann, um die Übersetzung zu starten.

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

Nun definieren wir die `handleTranslation()`-Funktion. Nachdem wir die Standardübermittlung des Formulars verhindert haben, erstellen wir eine neue [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die unsere `<form>`-Daten-Namens-/Wertpaare enthält. Dann führen wir einen Datenvalidierungstest durch, bei dem geprüft wird, ob die erkannte `<textarea>`-Inhaltsprache mit der gewählten Übersetzungssprache (`translateLanguage`) übereinstimmt. Wenn dies der Fall ist, drucken wir eine Fehlermeldung in das `<p>` mit der Klasse `translate-output`.

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

Falls der Test bestanden wird, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block. Wir beginnen damit, die Verfügbarkeit des Modells für die Übersetzung zwischen der erkannten Eingabe- und der gewählten Zielsprache mithilfe der Methode [`availability()`](/de/docs/Web/API/Translator/availability_static) zu überprüfen:

- Wenn es `unavailable` zurückgibt, drucken wir eine entsprechende Fehlermeldung in das `<p>` mit der Klasse `translate-output`.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), indem wir die erkannte Eingabe- und die gewählte Zielsprache übergeben. Das benötigte AI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (d.h. `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, schließt jedoch diesmal einen `monitor` ein, der jedes Mal den Prozentsatz des heruntergeladenen Modells in das `<p>` `translate-output` ausgibt, wenn das [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event)-Ereignis ausgelöst wird.

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

Als Nächstes setzen wir den Inhalt des `<p>` auf eine ausstehende Nachricht und deaktivieren den Submit-Button, bevor wir [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die eigentliche Übersetzung durchzuführen, und ihm den `<textarea>`-Wert übergeben. Sobald die Übersetzung abgeschlossen ist, zeigen wir sie im Ausgabe-`<p>` an, bevor wir den Submit-Button wieder aktivieren.

```js live-sample___translator-example
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich fügen wir dem `try`-Block das entsprechende `catch() { ... }` hinzu. Wenn der Inhalt des `try`-Blocks irgendeine Art von Ausnahme auslöst, zeigen wir diese im Ausgabe-`<p>` an.

```js live-sample___translator-example
  } catch (e) {
    translateOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

### Ergebnis

Das gerenderte Beispiel sieht wie folgt aus:

{{EmbedLiveSample("translator-example", , "750px", , , , "translator; language-detector", "allow-forms")}}

Versuchen Sie, einen Textkörper in das `<textarea>` einzugeben, und beachten Sie, wie die erkannte Sprache und das Vertrauen nur dann angezeigt werden, wenn die Anzahl der Zeichen größer als 20 ist. Wählen Sie eine Übersetzungssprache, die sich von Ihrem eingegebenen Text unterscheidet, und drücken Sie dann den Submit-Button, um eine AI-generierte Übersetzung zu erstellen.

Einige der Übersetzungssprachauswahlen sind in Ihrem Browser möglicherweise nicht verfügbar, selbst wenn dieser die APIs unterstützt.
