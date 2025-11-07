---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **CSS Font Loading API** bietet Ereignisse und Schnittstellen zum dynamischen Laden von Schriftarten-Ressourcen.

## Konzepte und Verwendung

CSS Stylesheets ermöglichen es Autoren, benutzerdefinierte Schriftarten zu verwenden; indem sie Schriftarten zum Herunterladen mit der [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face)-Regel spezifizieren und diese mit der [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family)-Eigenschaft auf Elemente anwenden. Der Zeitpunkt, zu dem eine Schriftart heruntergeladen wird, wird vom Benutzeragenten gesteuert. Die meisten Agenten laden Schriftarten erst herunter, wenn sie das erste Mal benötigt werden, was zu einer wahrnehmbaren Verzögerung führen kann.

Die CSS Font Loading API überwindet dieses Problem, indem sie Autoren die Kontrolle überlässt und sie nachverfolgen lässt, wann ein Schriftschnitt geladen wird und wann er zu der Schriftschnittmenge des Dokuments oder Arbeiters hinzugefügt wird. Das Hinzufügen eines Schriftschnitts zur Dokumentschriftmenge oder zur Arbeiterschriftmenge ermöglicht es dem Benutzeragenten, die zugehörige Schriftartressource bei Bedarf automatisch zu laden. Ein Schriftschnitt kann entweder vor oder nach dem Hinzufügen zu einer Schriftschnittmenge geladen werden, aber er _muss_ zur Menge hinzugefügt werden, bevor er zum Zeichnen verwendet werden kann.

Schriftschnitte werden in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert, die eine binäre Schriftquelle oder eine URL und andere Eigenschaften der Schriftart auf ähnliche Weise spezifizieren wie die CSS-Regel [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face). `FontFace`-Objekte werden dem Dokument oder dem Arbeiter [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) mit [`Document.fonts`](/de/docs/Web/API/Document/fonts) und [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) hinzugefügt. Autoren können den Download von Schriftarten entweder mit `FontFace` oder `FontFaceSet` auslösen und den Abschluss des Ladevorgangs überwachen. `FontFaceSet` kann auch verwendet werden, um festzustellen, wann alle von einer Seite benötigten Schriftarten geladen sind und das Layout des Dokuments abgeschlossen ist.

Die [`FontFace.status`](/de/docs/Web/API/FontFace/status)-Eigenschaft zeigt den Ladezustand des Schriftschnitts an: `unloaded`, `loading`, `loaded` oder `failed`. Dieser Status ist anfänglich `unloaded`. Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen oder die Schriftdaten verarbeitet werden, und auf `failed`, wenn die Schriftdefinition ungültig ist oder die Schriftdaten nicht geladen werden können. Der Status wird auf `loaded` gesetzt, wenn die Schriftdaten erfolgreich abgerufen (falls erforderlich) und geladen wurden.

### Definieren eines Schriftschnitts

Schriftschnitte werden mit dem [`FontFace` Konstruktor](/de/docs/Web/API/FontFace/FontFace) erstellt, der als Parameter die Schriftfamilie, die Schriftquelle und optionale Deskriptoren erhält. Das Format und die Grammatik dieser Argumente entsprechen der äquivalenten [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face)-Definition.

Die Schriftquelle kann entweder binäre Daten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftressource unter einer URL sein. Eine typische Definition eines Schriftschnitts mit einer URL-Quelle könnte wie unten gezeigt aussehen. Beachten Sie, dass die `url()`-Funktion für URL-Schriftquellen erforderlich ist.

```js
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` repräsentieren einige Deskriptoren die erwarteten Daten in den Schriftdaten und werden für die Schriftabgleichung verwendet, während andere tatsächlich Eigenschaften des erzeugten Schriftschnitts festlegen/definieren. Zum Beispiel zeigt das Setzen des `style` auf "italic" an, dass die Datei Italic-Schriften enthält; es liegt in der Verantwortung des Autors, eine Datei anzugeben, für die dies zutrifft.

Schriftschnitte mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftdefinition gültig ist und die Schriftdaten geladen werden können — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird bei Erfolg auf `loaded` und andernfalls auf `failed` gesetzt. Schriftschnitte mit einer URL-Quelle werden validiert, aber nicht automatisch geladen — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Schriftschnittdefinition gültig ist und andernfalls auf `failed`.

### Hinzufügen einer Schrift zu einem Dokument oder Arbeiter

Schriftschnitte werden normalerweise dem Dokument oder Arbeiter [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt, um dem Benutzeragenten zu ermöglichen, die Schrift bei Bedarf automatisch zu laden, und _müssen_ hinzugefügt werden, damit die Schrift zum Rendern von Text verwendet werden kann.

Der Code unten zeigt, wie ein Schriftschnitt dem Dokument hinzugefügt wird.

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

### Laden einer Schrift

Ein Schriftschnitt kann manuell durch Aufrufen von [`FontFace.load()`](/de/docs/Web/API/FontFace/load) oder durch Aufrufen von [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) geladen werden, wenn der Schriftschnitt dem `FontFaceSet` hinzugefügt wurde. Beachten Sie, dass das Laden einer bereits geladenen Schrift keine Wirkung hat.

Der Code unten zeigt, wie man einen Schriftschnitt definiert, ihn zu den Dokumentenschriftarten hinzufügt und dann einen Schriftladevorgang initiiert.

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

Beachten Sie, dass `font.load()` ein Promise zurückgibt, sodass wir den Abschluss des Schriftladevorgangs durch anschließendes Ketten von `then` handhaben könnten. Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in einigen Fällen besser sein, da dies nur aufgerufen wird, wenn alle Schriftarten im Dokument gelöst wurden und das Layout abgeschlossen ist.

## Schnittstellen

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert einen einzigen verwendbaren Schriftschnitt.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Eine Schnittstelle zum Laden von Schriftschnitten und Überprüfung ihres Download-Status.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird ausgelöst, wann immer ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Beispiele

### Einfaches Schriftladen

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schrift von Google Fonts geladen und zum Zeichnen von Text auf einem Canvas verwendet wird. Das Beispiel protokolliert außerdem den `status` unmittelbar nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert ein Canvas zum Zeichnen und ein Textbereich zum Protokollieren.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst holen wir uns das Element, in das wir protokollieren werden, und das Canvas, das zum Rendern von Text in der heruntergeladenen Schrift verwendet wird.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als nächstes definieren wir eine `FontFace`, die eine URL-Quelle ist, die eine Google-Schriftart darstellt, und fügen sie `document.fonts` hinzu. Wir protokollieren dann den Schriftstatus, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  'url("https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2")',
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die Methode [`FontFace.load()`](/de/docs/Web/API/FontFace/load) auf, um den Schriftschnitt zu laden, und warten auf das zurückgegebene Promise. Sobald das Promise aufgelöst wird, protokollieren wir den geladenen Status (der `loaded` sein sollte) und zeichnen Text in der geladenen Schrift auf das Canvas.

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

Beachten Sie, dass wir ebenso auf das Promise warten konnten, das durch die Eigenschaft [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) zurückgegeben wird, oder auf [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready).

#### Ergebnis

Das Ergebnis wird unten gezeigt. Es sollte den Namen der Schrift auf dem Canvas in der heruntergeladenen Schrift zeigen und ein Protokoll, das den Ladezustand vor und nach dem Laden zeigt.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftladen mit Ereignissen

Dieses Beispiel ist ähnlich wie das vorherige, außer dass es [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) verwendet, um die Schrift zu laden. Es zeigt auch, wie man Ereignisse für das Laden von Schriften abhört.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der folgende Code definiert einen Canvas-Kontext zum Zeichnen von Text, definiert einen Schriftschnitt und fügt ihn dem Dokument-Schriftsatz hinzu.

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

Als nächstes verwenden wir `load()` auf dem Schriftsatz, um die Schrift zu laden und anzugeben, welche der Schriften geladen werden sollen. Die Methode gibt ein {{jsxref("Promise")}} zurück. Wenn das Promise aufgelöst wird, verwenden wir die Schrift, um etwas Text zu zeichnen. Wenn es abgelehnt wird, wird der Fehler protokolliert.

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

Anstatt auf ein Promise zu warten, könnten wir stattdessen Ereignisse verwenden, um die Schriftladeoperation zu verfolgen. Der folgende Code lauscht auf die Ereignisse `loading` und `loadingerror` und protokolliert die Anzahl der Schriftschnitte für jeden Fall. Im `loadingdone`-Ereignis-Listener iterieren wir zusätzlich durch die Schriftschnitte und protokollieren die Familiennamen.

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

Der letzte Code-Abschnitt zeigt, wie Sie den Abschluss des Schriftladevorgangs mithilfe des Promise überwachen können, das von [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegeben wird. Im Gegensatz zu den anderen Mechanismen wird dies zurückgegeben, wenn alle im Dokument definierten Schriftarten heruntergeladen wurden und das Layout abgeschlossen ist.

Wenn das Promise aufgelöst wird, iterieren wir die Werte der Schriftschnitte des Dokuments.

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

Das unten gezeigte Ergebnis zeigt den in "Oxygen"-Schriftart gezeichneten Text. Dies zeigt auch das Protokollieren von den Ereignissen und wann das Promise, das von `document.fonts.ready` zurückgegeben wird, gelöst wird.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
