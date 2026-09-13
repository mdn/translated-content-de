---
title: Verwendung der Übersetzer- und Sprachdetektor-APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die [Übersetzer- und Sprachdetektor-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Webseite, um Sprachen zu erkennen und Text über das interne AI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst verwaltet, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hostet oder bezahlt. Dieser Artikel erklärt, wie diese APIs verwendet werden.

## Erkennen einer Sprache

Alle Funktionen zur Spracherkennung werden über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interface aufgerufen.

Der erste Schritt, um das AI-Modell eine Sprache erkennen zu lassen, besteht darin, eine Instanz des LanguageDetector-Objekts zu erstellen. Dies geschieht mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static), die ein Optionsobjekt als Argument nimmt:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

Die [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages)-Eigenschaft spezifiziert die Sprachen, die Sie dem Detektor zuführen möchten, um die Genauigkeit der Spracherkennung zu verbessern.

> [!NOTE]
> Verschiedene Implementierungen werden wahrscheinlich unterschiedliche Sprachen unterstützen.

Wenn eine `LanguageDetector`-Instanz erstellt wurde, können Sie diese verwenden, um eine Sprache zu erkennen, indem Sie die [`LanguageDetector.detect()`](/de/docs/Web/API/LanguageDetector/detect)-Instanzmethode darauf aufrufen und den zu überprüfenden Text als Argument übergeben.

```js
const results = await detector.detect(myTextString);
```

Diese Methode gibt ein Array von Objekten zurück, das die erkannten möglichen Sprachübereinstimmungen darstellt. Jedes enthält:

- Einen String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}, der die erkannte Sprache darstellt.
- Eine Zahl zwischen 0 und 1, die einen Zuverlässigkeitswert für diese Übereinstimmung darstellt.

Ein Beispiel:

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
> Das letzte Element des Arrays stellt immer einen Zuverlässigkeitswert für die Sprache `und` dar — dies ist eine Abkürzung für "unbestimmt" und gibt an, wie wahrscheinlich es ist, dass der Text nicht in einer Sprache geschrieben ist, die das Modell kennt.

## Erstellen einer Übersetzung

Die Übersetzung folgt einem sehr ähnlichen Muster wie die Spracherkennung. Ein [`Translator`](/de/docs/Web/API/Translator)-Objekt wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, die ein Optionsobjekt erwartet, das mindestens eine [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) und eine [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) enthält:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Die Übersetzung wird dann durch Aufruf der [`Translator.translate()`](/de/docs/Web/API/Translator/translate)-Instanzmethode erstellt, der der zu übersetzende Text übergeben wird:

```js
const translation = await translator.translate(myTextString);
```

Dies gibt einen String mit der Übersetzung zurück.

Es gibt auch eine streaming-Version der `translate()`-Methode — [`Translator.translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) — die es ermöglicht, die Übersetzung als [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurückzugeben. Dies kann nützlich sein, wenn sehr große Textmengen übersetzt werden:

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

Bevor Sie ein `LanguageDetector`- oder `Translator`-Objekt erstellen, können Sie überprüfen, ob Ihre gewünschte Sprachkonfiguration vom aktuellen Browser unterstützt wird, indem Sie die statischen Methoden [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) und [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) verwenden. Beispiel:

```js
const detectorAvailability = await LanguageDetector.availability({
  expectedInputLanguages: ["en-US", "ja"],
});

const translatorAvailability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

Diese Methoden geben einen enum-Wert zurück, der angibt, ob Unterstützung für die spezifizierten Optionen vorhanden ist oder verfügbar sein wird:

- `downloadable` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein Modell oder einige Feinabstimmungsdaten heruntergeladen werden müssen.
- `downloading` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, aber ein laufender Download abgeschlossen werden muss.
- `available` bedeutet, dass die Implementierung die angeforderten Optionen unterstützt, ohne dass neue Downloads erforderlich sind.
- `unavailable` bedeutet, dass die Implementierung die angeforderten Optionen nicht unterstützt.

Wenn ein Download erforderlich ist, wird er automatisch vom Browser gestartet, sobald eine `LanguageDetector`- oder `Translator`-Instanz mit der relevanten `create()`-Methode erstellt wird. Sie können den Download-Fortschritt automatisch mit einem [Monitor](#überwachen_des_download-fortschritts) verfolgen.

## Abbrechen von Operationen und Zerstören von Instanzen

Sie können eine anstehende Erkennungs- oder Übersetzungsoperation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen, wobei das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) im Optionsobjekt als Signal-Eigenschaftswert enthalten ist. Zum Beispiel würde das Abbrechen einer `Translator.create()`-Operation so aussehen:

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

Nachdem eine `LanguageDetector`- oder `Translator`-Instanz erstellt wurde, können Sie deren zugewiesene Ressourcen freigeben und weitere Aktivitäten stoppen, indem Sie deren Methode [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy)/[`Translator.destroy()`](/de/docs/Web/API/Translator/destroy) aufrufen. Sie werden ermutigt, dies zu tun, nachdem Sie das Objekt verwendet haben, da es viele Ressourcen verbrauchen kann.

```js
translator.destroy();
detector.destroy();
```

Wenn ein `create()`-Aufruf einen zugehörigen [`AbortController`](/de/docs/Web/API/AbortController) hat und Sie die Methode [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) aufrufen, nachdem der `create()`-Aufruf erfolgreich war, hat dies den gleichen Effekt wie das Aufrufen von `destroy()` auf dem resultierenden `LanguageDetector`- oder `Translator`-Objekt.

## Überwachen des Download-Fortschritts

Wenn das AI-Modell für eine bestimmte Erkennung oder Übersetzung heruntergeladen wird (`availability()` gibt `downloadable` und `downloading` zurück), ist es hilfreich, dem Benutzer Feedback zu geben, wie lange es dauert, bis die Operation abgeschlossen ist.

Die `Translator`- und `LanguageDetector`-`create()`-Methoden können eine `monitor`-Eigenschaft akzeptieren, deren Wert eine Callback-Funktion ist, die eine [`CreateMonitor`](/de/docs/Web/API/CreateMonitor)-Instanz als Argument hat. `CreateMonitor` hat ein [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) Ereignis, das ausgelöst wird, wenn Fortschritte beim Herunterladen des AI-Modells gemacht werden.

Sie können dieses Ereignis verwenden, um Daten zum Fortschritt des Ladevorgangs offenzulegen:

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

Wenn die angegebenen Sprachen nicht unterstützt werden, wird kein Download gestartet, und ein `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

## Nutzungsquoten

Einige Implementierungen haben ein Input-Kontingent, das regelt, wie viele Operationen eine Website in einem bestimmten Zeitraum anfordern kann. Das Gesamtkontingent kann über die Eigenschaften [`Translator.inputQuota`](/de/docs/Web/API/Translator/inputQuota)/[`LanguageDetector.inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) abgerufen werden, während die Kontingentnutzung für eine bestimmte Übersetzung oder Spracherkennung mit den Methoden [`Translator.measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage)/[`LanguageDetector.measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) zurückgegeben werden kann:

Zum Beispiel gibt das folgende Snippet das Gesamtkontingent über `Translator.inputQuota` und die Nutzung des Input-Kontingents für die Übersetzung eines bestimmten Text-Strings über `Translator.measureInputUsage()` zurück.

Wir prüfen dann, ob die individuelle Nutzung des Inputs für diesen String größer ist als das insgesamt verfügbare Kontingent. Wenn ja, werfen wir einen entsprechenden Fehler; andernfalls beginnen wir mit der Übersetzung des Strings mit [`translate()`](/de/docs/Web/API/Translator/translate).

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

Sehen wir uns ein vollständiges Beispiel an, das die Übersetzer- und Sprachdetektor-APIs in Aktion demonstriert.

### HTML

In unserem Markup definieren wir zunächst ein Eingabe-{{htmlelement("form")}}, das es dem Benutzer ermöglicht, den zu übersetzenden Text und die Sprache festzulegen, in die übersetzt werden soll. Dies umfasst ein {{htmlelement("textarea")}} zum Eingeben des Textes selbst, ein {{htmlelement("output")}}-Element zur Anzeige der erkannten Sprache und ein {{htmlelement("select")}}-Element für die Auswahl einer Übersetzungssprache.

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

Der zweite Teil unseres Markups enthält ein {{htmlelement("p")}}-Element zur Anzeige der generierten Übersetzung.

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

Beachten Sie, dass wir das CSS für dieses Beispiel nicht anzeigen, da nichts davon relevant für das Verständnis der Übersetzer- und Sprachdetektor-APIs ist.

### JavaScript

In unserem Skript beginnen wir damit, Referenzen zum `<form>`, `<textarea>`, Senden-`<button>`, Ausgabeknoten der Übersetzung `<p>` und der Sprachenerkennung `<output>`-Elemente zu erfassen. Wir deklarieren auch eine Variable namens `detectedLanguage`, um die Ergebnisse der Sprachenerkennungsoperationen zu enthalten.

```js live-sample___translator-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Als nächstes verwenden wir die Methode [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um zwei Ereignisse zu lauschen:

- `submit`-Ereignisse auf dem `<form>`-Element; bei Formularübermittlung wird die Funktion `handleTranslation()` aufgerufen.
- `input`-Ereignisse auf dem `<textarea>`-Element; bei Änderung des aktuellen `<textarea>`-Werts wird die Funktion `detectLanguage()` aufgerufen.

```js live-sample___translator-example
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

Die danach definierte Funktion `detectLanguage()` überprüft zuerst, ob der Wert des `<textarea>`-Elements größer als 20 Zeichen ist. Wenn ja, fahren wir mit der Spracherkennung fort. Andernfalls deaktivieren wir den Senden-Button und zeigen eine Nachricht im [`textContent`](/de/docs/Web/API/Node/textContent) des `<output>`-Elements an, dass der Text zu kurz ist, um die Sprache zu erkennen. Wir tun dies, weil die Sprachenkennung generell nicht gut bei Einzelwörtern und sehr kurzen Phrasen funktioniert. Wenn Sie häufig mit kurzem Text arbeiten, testen Sie sorgfältig mit Ihren Prioritätssprachen und geben das Ergebnis als unbekannt zurück, wenn die Zuverlässigkeit zu niedrig ist.

Bei der Erkennung der Sprache des eingegebenen Textes erstellen wir eine `LanguageDetector`-Instanz mit der Methode [`create()`](/de/docs/Web/API/LanguageDetector/create_static), die einen Monitor enthält, um den Download-Fortschritt zu protokollieren, falls das Modell eine Weile zum Herunterladen benötigt. Wir erkennen dann die Sprache mit der Methode [`detect()`](/de/docs/Web/API/LanguageDetector/detect), der der `<textarea>`-Wert übergeben wird. Wenn die Ergebnisse zurückgegeben werden, schreiben wir die Sprache und Zuverlässigkeit des besten Ergebnisses in das `<output>`-Element. In komplexeren Apps möchten Sie möglicherweise mehrere Ergebnisse berichten und den Benutzer vielleicht wählen lassen, welche Sprache es ist, aber das genügt für die Demo.

Schließlich aktivieren wir den Senden-Button, sodass das Formular eingereicht werden kann, um die Übersetzung zu starten.

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

Nun definieren wir die Funktion `handleTranslation()`. Nach dem Verhindern der Standardformulareinreichung erstellen wir eine neue [`FormData`](/de/docs/Web/API/FormData)-Objektinstanz, die unsere Namen/Werte-Paare des `<form>`-Daten enthält. Wir führen dann einen Datengültigkeitstest durch, der überprüft, ob die erkannte Sprache des `<textarea>`-Inhalts dieselbe ist wie die gewählte Übersetzungssprache (`translateLanguage`). Wenn dies der Fall ist, geben wir eine Fehlermeldung innerhalb des `<p>` mit der Klasse `translate-output` aus.

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

Wenn der Test bestanden wird, öffnen wir einen [`try { ... }`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block. Wir beginnen damit, die Verfügbarkeit des Modells für die Übersetzung zwischen der erkannten Eingabe- und der gewählten Ausgabesprache durch die Methode [`availability()`](/de/docs/Web/API/Translator/availability_static) zu überprüfen:

- Wenn es `unavailable` zurückgibt, geben wir eine entsprechende Fehlermeldung im `<p>` mit der Klasse `translate-output` aus.
- Wenn es `available` zurückgibt, erstellen wir einen Übersetzer mit der Methode [`create()`](/de/docs/Web/API/Translator/create_static), der die erkannte Eingabe- und die gewählte Ausgabesprache übergibt. Das erforderliche AI-Modell ist verfügbar, sodass wir es sofort verwenden können.
- Wenn es einen anderen Wert zurückgibt (also `downloadable` oder `downloading`), führen wir denselben `create()`-Methodenaufruf aus, aber diesmal inkludieren wir einen 'Monitor', der bei jedem Auftreten des Ereignisses [`downloadprogress`](/de/docs/Web/API/CreateMonitor/downloadprogress_event) den Prozentsatz des heruntergeladenen Modells in das `<p>` `translate-output` druckt.

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

Als nächstes setzen wir den Inhalt des `<p>`-Ausgabe-Elements auf eine Ausstehende-Nachricht und deaktivieren den Senden-Button, bevor wir die Methode [`Translator.translate()`](/de/docs/Web/API/Translator/translate) aufrufen, um die eigentliche Übersetzung durchzuführen, wobei wir den `<textarea>`-Wert übergeben. Sobald die Übersetzung fertig ist, zeigen wir sie im Ausgabe-`<p>` an, bevor wir den Senden-Button wieder aktivieren.

```js live-sample___translator-example
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Schließlich fügen wir den `try`-Block-Gegenpart `catch() { ... }` hinzu. Wenn der Inhalt des `try` Blocks irgendeine Art von Ausnahme auslöst, zeigen wir diese im Ausgabe-`<p>` an.

```js live-sample___translator-example
  } catch (e) {
    translateOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

### Ergebnis

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("translator-example", , "750px", , , , "translator; language-detector", "allow-forms")}}

Versuchen Sie, einen Textkörper in das `<textarea>` einzugeben, und beachten Sie, wie die erkannte Sprache und das Vertrauen erst gemeldet werden, wenn die Anzahl der Zeichen größer als 20 ist. Wählen Sie eine Übersetzungssprache, die von Ihrem Eingabetext abweicht, und drücken Sie dann den Senden-Button, um eine AI-generierte Übersetzung zu erstellen.

Einige der Übersetzungssprachoptionen sind möglicherweise in Ihrem Browser nicht verfügbar, selbst wenn dieser die APIs unterstützt.
