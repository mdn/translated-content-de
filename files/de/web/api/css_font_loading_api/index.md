---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **CSS Font Loading API** bietet Events und Schnittstellen zum dynamischen Laden von Schriftartressourcen.

## Konzepte und Nutzung

CSS-Stile erlauben Autoren die Verwendung benutzerdefinierter Schriftarten; dabei werden Schriftarten, die heruntergeladen werden sollen, mit der {{cssxref("@font-face")}}-Regel angegeben und mit der {{cssxref("font-family")}}-Eigenschaft auf Elemente angewendet. Der Zeitpunkt, zu dem eine Schriftart heruntergeladen wird, wird vom User-Agent gesteuert. Die meisten Agents laden Schriftarten erst, wenn sie wirklich benötigt werden, was zu einer wahrnehmbaren Verzögerung führen kann.

Die CSS Font Loading API überwindet dieses Problem, indem sie Autoren die Kontrolle und Überwachung darüber ermöglicht, wann eine Schriftart abgerufen und geladen wird und wann sie zum Schriftartensatz des Dokuments oder des Workers hinzugefügt wird. Das Hinzufügen einer Schriftart zum Dokument- oder Worker-Schriftartensatz ermöglicht dem User-Agent, die zugehörige Schriftartressource bei Bedarf automatisch abzurufen und zu laden. Eine Schriftart kann entweder vor oder nach dem Hinzufügen zu einem Schriftartensatz geladen werden, muss aber dem Satz hinzugefügt werden, bevor sie zum Zeichnen verwendet werden kann.

Schriftarten werden in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert, die eine binäre oder URL-Schriftartquelle und andere Eigenschaften der Schriftart ähnlich wie die CSS-{{cssxref("@font-face")}}-Regel spezifizieren. `FontFace`-Objekte werden dem Dokument- oder Worker-[`FontFaceSet`](/de/docs/Web/API/FontFaceSet) über [`Document.fonts`](/de/docs/Web/API/Document/fonts) und [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) hinzugefügt. Autoren können den Download von Schriftarten entweder mit `FontFace` oder `FontFaceSet` auslösen und den Abschluss des Ladens überwachen. Mit `FontFaceSet` kann zusätzlich bestimmt werden, wann alle für eine Seite erforderlichen Schriftarten geladen sind und das Dokumentlayout abgeschlossen ist.

Die [`FontFace.status`](/de/docs/Web/API/FontFace/status)-Eigenschaft zeigt den Ladezustand der Schriftart an: `unloaded`, `loading`, `loaded` oder `failed`. Dieser Status ist anfänglich `unloaded`. Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen oder die Schriftartdaten verarbeitet werden, und auf `failed`, wenn die Schriftartendefinition ungültig ist oder die Schriftartdaten nicht geladen werden können. Der Status wird auf `loaded` gesetzt, wenn die Schriftartdaten erfolgreich abgerufen (falls erforderlich) und geladen wurden.

### Eine Schriftart definieren

Schriftarten werden mit dem [`FontFace`-Konstruktor](/de/docs/Web/API/FontFace/FontFace) erstellt, der als Parameter die Schriftfamilie, die Schriftquelle und optionale Deskriptoren nimmt. Das Format und die Grammatik dieser Argumente sind die gleichen wie bei der entsprechenden {{cssxref("@font-face")}}-Definition.

Die Schriftquelle kann entweder Binärdaten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftartressource an einer URL sein. Eine typische Schriftartdefinition unter Verwendung einer URL-Quelle könnte wie unten gezeigt aussehen. Beachten Sie, dass die `url()`-Funktion für URL-Schriftquellen erforderlich ist.

```js
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` repräsentieren einige Deskriptoren die erwarteten Daten in den Schriftartdaten und werden für die Schriftartenabstimmung verwendet, während andere tatsächlich Eigenschaften der erzeugten Schriftart setzen/definieren. Beispielsweise zeigt das Setzen von `style` auf "italic" an, dass die Datei kursive Schriftarten enthält; es liegt an dem Autor, eine Datei anzugeben, für die dies zutrifft.

Schriftarten mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftartendefinition gültig ist und die Schriftartdaten geladen werden können — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird bei Erfolg auf `loaded` und ansonsten auf `failed` gesetzt. Schriftarten mit einer URL-Quelle werden validiert, aber nicht automatisch geladen — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Schriftartendefinition gültig ist und andernfalls auf `failed`.

### Eine Schriftart zu einem Dokument oder Worker hinzufügen

Schriftarten werden normalerweise dem Dokument- oder Worker-[`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt, damit der User-Agent die Schriftart bei Bedarf automatisch laden kann, und müssen hinzugefügt werden, damit die Schriftart zur Textwiedergabe verwendet werden kann.

Der untenstehende Code zeigt eine Schriftart, die dem Dokument hinzugefügt wird.

```js
// Define a FontFace
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);
```

### Eine Schriftart laden

Eine Schriftart kann manuell geladen werden, indem [`FontFace.load()`](/de/docs/Web/API/FontFace/load) aufgerufen wird oder indem [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) aufgerufen wird, wenn die Schriftart zum `FontFaceSet` hinzugefügt wurde. Beachten Sie, dass der Versuch, eine bereits geladene Schriftart zu laden, keine Wirkung hat.

Der untenstehende Code zeigt, wie man eine Schriftart definiert, sie zu den Dokumentenschriftarten hinzufügt und dann das Schriftladen initiiert.

```js
// Define a FontFace
const font = new FontFace("my-font", 'url("my-font.woff")');

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);

// Load the font
font.load();

// Wait until the fonts are all loaded
document.fonts.ready.then(() => {
  // Use the font to render text (for example, in a canvas)
});
```

Beachten Sie, dass `font.load()` ein Promise zurückgibt, sodass wir den Abschluss des Schriftladens durch Ketten von `then` danach behandeln könnten. Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in einigen Umständen besser sein, da es nur aufgerufen wird, wenn alle Schriftarten im Dokument aufgelöst wurden und das Layout abgeschlossen ist.

## Schnittstellen

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert eine einzelne nutzbare Schriftart.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Eine Schnittstelle zum Laden von Schriftarten und Prüfen ihres Download-Status.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird ausgelöst, wann immer ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Beispiele

### Grundlegendes Schriftladen

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schriftart von Google Fonts geladen und zum Zeichnen von Text auf eine Leinwand verwendet wird. Das Beispiel protokolliert außerdem den `status` unmittelbar nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert eine Leinwand zum Zeichnen und ein Textbereich zum Protokollieren.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst erhalten wir das Element, in das wir protokollieren werden, und die Leinwand, die zum Rendern von Text in der heruntergeladenen Schrift verwendet wird.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als nächstes definieren wir eine `FontFace`, die eine URL-Quelle als Google-Schriftart hat und fügen sie `document.fonts` hinzu. Wir protokollieren dann den Schriftstatus, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  'url("https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2")',
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die [`FontFace.load()`](/de/docs/Web/API/FontFace/load)-Methode auf, um die Schriftart zu laden, und warten auf das zurückgegebene Promise. Sobald das Promise gelöst ist, protokollieren wir den geladenen Status (der `loaded` sein sollte) und zeichnen Text in der geladenen Schrift auf die Leinwand.

```js
bitterFontFace.load().then(
  () => {
    log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: loaded

    const ctx = canvas.getContext("2d");
    ctx.font = '36px "FontFamily Bitter"';
    ctx.fillText("Bitter font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

Beachten Sie, dass wir auch auf das Promise warten könnten, das von der [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded)-Eigenschaft oder auf [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) bereitgestellt wird.

#### Ergebnis

Das Ergebnis wird unten gezeigt. Es sollte den Namen der Schriftart zeigen, der auf der Leinwand in der heruntergeladenen Schriftart gezeichnet ist, sowie ein Protokoll, das den Ladezustand vor und nach dem Laden anzeigt.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftladen mit Ereignissen

Dieses Beispiel ähnelt dem vorherigen, verwendet jedoch [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) zum Laden der Schrift. Es zeigt auch, wie man Ereignisse zum Laden von Schriften abhört.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der untenstehende Code definiert einen Leinwand-Kontext zum Zeichnen von Text, definiert eine Schriftart und fügt sie dem Dokument-Schriftartensatz hinzu.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
const ctx = canvas.getContext("2d");

const oxygenFontFace = new FontFace(
  "FontFamily Oxygen",
  'url("https://fonts.gstatic.com/s/oxygen/v5/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2")',
);
document.fonts.add(oxygenFontFace);
log.textContent += `Oxygen status: ${oxygenFontFace.status}\n`;
```

Anschließend verwenden wir `load()` auf dem Schriftartensatz, um die Schrift zu laden, und geben an, welche der Schriftarten geladen werden soll. Die Methode gibt ein {{jsxref("Promise")}} zurück. Wenn das Promise gelöst ist, verwenden wir die Schriftart, um etwas Text zu zeichnen. Wenn es abgelehnt wird, wird der Fehler protokolliert.

```js
document.fonts.load("36px FontFamily Oxygen").then(
  (fonts) => {
    log.textContent += `Bitter font: ${fonts}\n`; // > Oxygen font: loaded
    log.textContent += `Bitter font: ${oxygenFontFace.status}\n`; // > Oxygen font: loaded
    ctx.font = '36px "FontFamily Oxygen"';
    ctx.fillText("Oxygen font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

Anstatt auf ein Promise zu warten, könnten wir stattdessen Ereignisse verwenden, um den Schriftladenbetrieb zu verfolgen. Der untenstehende Code hört auf die `loading`- und `loadingerror`-Ereignisse und protokolliert die Anzahl der Schriftarten für jeden Fall. Im `loadingdone`-Ereignishandler iterieren wir zusätzlich durch die Schriftarten und protokollieren die Familiennamen.

```js
document.fonts.addEventListener("loading", (event) => {
  log.textContent += `loading_event: ${event.fontfaces.length}\n`;
});
document.fonts.addEventListener("loadingerror", (event) => {
  log.textContent += `loadingerror_event: ${event.fontfaces.length}\n`;
});
document.fonts.addEventListener("loadingdone", (event) => {
  log.textContent += `loadingdone_event: ${event.fontfaces.length}\n`;
  event.fontfaces.forEach((value) => {
    log.textContent += `  fontface: ${value.family}\n`;
  });
});
```

Der letzte Teil des Codes demonstriert, wie Sie den Abschluss des Schriftladens mithilfe des von [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegebenen Promise überwachen können. Im Gegensatz zu den anderen Mechanismen wird dies aufgerufen, wenn alle im Dokument definierten Schriftarten heruntergeladen wurden und das Layout abgeschlossen ist.

Sobald das Promise gelöst ist, iterieren wir über die Werte in den Schriftarten des Dokuments.

```js
document.fonts.ready.then(() => {
  log.textContent += `\nFontFaces in document: ${document.fonts.size}.\n`;

  for (const fontFace of document.fonts.values()) {
    log.textContent += "FontFace:\n";
    for (const property in fontFace) {
      log.textContent += `  ${property}: ${fontFace[property]}\n`;
    }
  }
});
```

#### Ergebnis

Das folgende Ergebnis zeigt den in der "Oxygen"-Schriftart gezeichneten Text. Es zeigt auch das Protokollieren von den Ereignissen und wann das von `document.fonts.ready` zurückgegebene Promise gelöst wird.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
