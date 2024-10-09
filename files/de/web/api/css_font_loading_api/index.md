---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **CSS Font Loading API** bietet Ereignisse und Schnittstellen zum dynamischen Laden von Schriftressourcen.

## Konzepte und Nutzung

CSS-Stylesheets ermöglichen es Autoren, benutzerdefinierte Schriften zu verwenden; sie geben Schriften an, die über die [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel heruntergeladen werden sollen und wenden sie mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft auf Elemente an. Der Zeitpunkt, zu dem eine Schrift heruntergeladen wird, wird durch den User-Agent gesteuert. Die meisten User-Agents holen und laden Schriften nur, wenn sie zum ersten Mal benötigt werden, was zu einer spürbaren Verzögerung führen kann.

Die CSS Font Loading API behebt dieses Problem, indem sie Autoren ermöglicht, zu kontrollieren und zu verfolgen, wann eine Schriftart abgerufen und geladen wird und wann sie zur Schriftartensammlung hinzugefügt wird, die vom Dokument oder Arbeiter verwaltet wird. Durch das Hinzufügen einer Schriftart zur Dokument- oder Arbeiter-Schriftartensammlung kann der User-Agent die zugehörige Schriftressource bei Bedarf automatisch abrufen und laden. Eine Schriftart kann entweder vor oder nach ihrer Hinzufügung zu einer Schriftartensammlung geladen werden, sie _muss_ jedoch zur Sammlung hinzugefügt werden, bevor sie zum Zeichnen verwendet werden kann.

Schriftarten werden in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert, die eine binäre oder URL-Schriftquelle und andere Schriftmerkmale auf ähnliche Weise wie die CSS-Definition von [`@font-face`](/de/docs/Web/CSS/@font-face) angeben. `FontFace`-Objekte werden dem Dokument oder Arbeiter [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) mithilfe von [`Document.fonts`](/de/docs/Web/API/Document/fonts) bzw. [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) hinzugefügt. Autoren können den Download von Schriften entweder über `FontFace` oder `FontFaceSet` auslösen und den Abschluss der Ladeoperation überwachen. `FontFaceSet` kann zudem verwendet werden, um zu bestimmen, wann alle für eine Seite erforderlichen Schriften geladen sind und das Dokumentlayout abgeschlossen ist.

Die Eigenschaft [`FontFace.status`](/de/docs/Web/API/FontFace/status) zeigt den Ladezustand der Schriftart an: `unloaded`, `loading`, `loaded` oder `failed`. Dieser Status ist zunächst `unloaded`. Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen oder die Schriftdaten verarbeitet werden, und auf `failed`, wenn die Schriftdefinition ungültig ist oder die Schriftdaten nicht geladen werden können. Der Status wird auf `loaded` gesetzt, wenn die Schriftartdaten erfolgreich abgerufen (falls erforderlich) und geladen wurden.

### Definition einer Schriftart

Schriftarten werden mit dem [`FontFace` Konstruktor](/de/docs/Web/API/FontFace/FontFace) erstellt, der die Schriftfamilie, die Schriftquelle und optionale Deskriptoren als Parameter annimmt. Das Format und die Syntax dieser Argumente sind dieselben wie bei der entsprechenden [`@font-face`](/de/docs/Web/CSS/@font-face)-Definition.

Die Schriftquelle kann entweder binäre Daten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftressource unter einer URL sein. Eine typische Schriftartdefinition mit einer URL-Quelle könnte wie unten gezeigt aussehen. Beachten Sie, dass die `url()`-Funktion für Schriftquellen-URLs erforderlich ist.

```js
const font = new FontFace("my-font", "url(my-font.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` repräsentieren einige Deskriptoren die erwarteten Daten in den Schriftdaten und werden für die Schriftabstimmung verwendet, während andere tatsächlich Eigenschaften der generierten Schriftart festlegen/definieren. Zum Beispiel zeigt das Setzen des `style` auf "italic" an, dass die Datei kursiv formatierte Schriften enthält; es liegt in der Verantwortung des Autors, eine Datei anzugeben, für die dies zutrifft.

Schriftarten mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftdefinition gültig ist und die Schriftdaten geladen werden können – [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird im Erfolgsfall auf `loaded` gesetzt und sonst auf `failed`. Schriftarten mit einer URL-Quelle werden validiert, aber nicht automatisch geladen – [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Schriftdefinition gültig ist und andernfalls auf `failed`.

### Hinzufügen einer Schriftart zu einem Dokument oder Arbeiter

Schriftarten werden üblicherweise dem Dokument- oder Arbeiter-[`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt, um dem User-Agent zu ermöglichen, die Schrift bei Bedarf automatisch zu laden, und _müssen_ hinzugefügt werden, damit die Schrift zum Rendern von Text verwendet werden kann.

Der untenstehende Code zeigt, wie eine Schriftart dem Dokument hinzugefügt wird.

```js
// Define a FontFace
const font = new FontFace("my-font", "url(my-font.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);
```

### Laden einer Schriftart

Eine Schriftart kann manuell durch Aufruf von [`FontFace.load()`](/de/docs/Web/API/FontFace/load) geladen werden, oder durch Aufruf von [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), wenn die Schriftart zum `FontFaceSet` hinzugefügt wurde. Beachten Sie, dass der Versuch, eine bereits geladene Schriftart zu laden, keine Wirkung hat.

Der nachfolgende Code zeigt, wie eine Schriftart definiert wird, sie zu den Dokumentschriften hinzugefügt und dann ein Schriftsatzladen initiiert wird.

```js
// Define a FontFace
const font = new FontFace("my-font", "url(my-font.woff)");

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);

// Load the font
font.load();

// Wait until the fonts are all loaded
document.fonts.ready.then(() => {
  // Use the font to render text (for example, in a canvas)
});
```

Beachten Sie, dass `font.load()` ein Promise zurückgibt, sodass wir den Abschluss des Schriftarteladens durch Kettung von `then` danach hätten handhaben können. Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in manchen Fällen besser sein, da es nur aufgerufen wird, wenn alle Schriften im Dokument aufgelöst sind und das Layout abgeschlossen ist.

## Schnittstellen

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert eine einzelne verwendbare Schriftart.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Eine Schnittstelle zum Laden von Schriftarten und Prüfen ihrer Download-Status.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird ausgelöst, wann immer ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Beispiele

### Einfaches Schriftartenladen

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schriftart von Google Fonts geladen und zum Zeichnen von Text auf eine Leinwand verwendet wird. Das Beispiel protokolliert auch den `status` unmittelbar nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert eine Leinwand zum Zeichnen und ein Textarea zum Protokollieren.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst holen wir uns das Element, in das wir protokollieren werden, und die Leinwand, die verwendet wird, um Text in der heruntergeladenen Schriftart zu rendern.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als nächstes definieren wir eine `FontFace`, die eine URL-Quelle hat, die eine Google Font ist, und fügen sie `document.fonts` hinzu. Wir protokollieren dann den Schriftstatus, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die Methode [`FontFace.load()`](/de/docs/Web/API/FontFace/load) auf, um die Schriftart zu laden, und warten auf das zurückgegebene Promise. Sobald das Promise erfüllt ist, protokollieren wir den geladenen Status (der `loaded` sein sollte) und zeichnen Text in der geladenen Schriftart auf die Leinwand.

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

Beachten Sie, dass wir auch auf das von [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) zurückgegebene Promise hätten warten können oder auf [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready).

#### Ergebnis

Das Ergebnis ist unten gezeigt. Es sollte den Namen der Schriftart auf der Leinwand in der heruntergeladenen Schrift darstellen und ein Protokoll anzeigen, das den Ladezustand vor und nach dem Laden zeigt.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftartenladen mit Ereignissen

Dieses Beispiel ist dem vorherigen ähnlich, verwendet jedoch [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) zum Laden der Schrift. Es zeigt auch, wie man Schriftladenereignisse abhört.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der untenstehende Code definiert einen Leinwandkontext zum Zeichnen von Text, definiert eine Schriftart und fügt sie der Dokumentenschriftartensammlung hinzu.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
const ctx = canvas.getContext("2d");

const oxygenFontFace = new FontFace(
  "FontFamily Oxygen",
  "url(https://fonts.gstatic.com/s/oxygen/v5/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(oxygenFontFace);
log.textContent += `Oxygen status: ${oxygenFontFace.status}\n`;
```

Als nächstes verwenden wir `load()` auf der Schriftartensammlung, um die Schrift zu laden, und geben an, welche der Schriften geladen werden sollen. Die Methode gibt ein {{jsxref("Promise")}} zurück. Wenn das Promise erfüllt wird, verwenden wir die Schrift, um etwas Text zu zeichnen. Wenn sie abgelehnt wird, wird der Fehler protokolliert.

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

Anstatt auf ein Promise zu warten, könnten wir stattdessen Ereignisse verwenden, um den Schriftladevorgang zu verfolgen. Der nachfolgende Code hört die Ereignisse `loading` und `loadingerror` ab und protokolliert die Anzahl der Schriftarten für jeden Fall. Im Ereignis-Listener `loadingdone` iterieren wir zusätzlich durch die Schriftarten und protokollieren die Familiennamen.

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

Der letzte Teil des Codes zeigt, wie Sie den Abschluss des Schriftartenladens mithilfe des Promises überwachen können, das von [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegeben wird. Im Gegensatz zu den anderen Mechanismen wird dieses zurückgegeben, wenn alle im Dokument definierten Schriften heruntergeladen und das Layout abgeschlossen sind.

Wenn das Promise erfüllt wird, iterieren wir die Werte in den Schriften des Dokuments.

```js
document.fonts.ready.then(function () {
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

Die Ausgabe unten zeigt den in "Oxygen" Schrift gezeichneten Text. Dies zeigt auch das Protokollieren von den Ereignissen und wenn das von `document.fonts.ready` zurückgegebene Promise erfüllt wird.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
