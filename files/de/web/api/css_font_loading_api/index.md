---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **CSS Font Loading API** bietet Ereignisse und Schnittstellen zum dynamischen Laden von Schriftressourcen.

## Konzepte und Verwendung

CSS-Stylesheets ermöglichen es Autoren, benutzerdefinierte Schriften zu verwenden; sie geben Schriften an, die mithilfe der [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel heruntergeladen werden sollen, und wenden sie mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft auf Elemente an.
Der Zeitpunkt, zu dem eine Schrift heruntergeladen wird, wird vom User Agent kontrolliert.
Die meisten Agents laden Schriften nur dann herunter, wenn sie zum ersten Mal benötigt werden, was zu einer wahrnehmbaren Verzögerung führen kann.

Die CSS Font Loading API löst dieses Problem, indem sie es Autoren ermöglicht, zu steuern und zu verfolgen, wann eine Schriftart abgerufen und geladen wird und wann sie zum Schriftsatz des Dokuments oder des Workers hinzugefügt wird.
Das Hinzufügen einer Schriftart zum Schriftsatz des Dokuments oder des Workers ermöglicht es dem User Agent, die zugehörige Schriftressource bei Bedarf automatisch abzurufen und zu laden.
Eine Schriftart kann entweder vor oder nachdem sie zu einem Schriftsatz hinzugefügt wurde, geladen werden, aber sie _muss_ zum Satz hinzugefügt werden, bevor sie zum Zeichnen verwendet werden kann.

Schriftarten werden in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert, die eine binäre oder URL-Schriftquelle und andere Schriftattribute ähnlich wie die CSS [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel spezifizieren.
`FontFace`-Objekte werden mithilfe von [`Document.fonts`](/de/docs/Web/API/Document/fonts) bzw. [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) zum Schriftsatz des Dokuments oder des Workers [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt.
Autoren können das Herunterladen von Schriften mithilfe von `FontFace` oder `FontFaceSet` auslösen und das Laden überwachen.
`FontFaceSet` kann zusätzlich verwendet werden, um festzustellen, wann alle von einer Seite benötigten Schriften geladen sind und das Dokumentlayout abgeschlossen ist.

Die [`FontFace.status`](/de/docs/Web/API/FontFace/status)-Eigenschaft gibt den Ladezustand der Schriftart an: `unloaded`, `loading`, `loaded` oder `failed`.
Dieser Status ist anfangs `unloaded`.
Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen oder die Schriftdaten verarbeitet werden, und auf `failed`, wenn die Schriftdefinition ungültig ist oder die Schrift nicht geladen werden kann.
Der Status wird auf `loaded` gesetzt, wenn die Schriftart erfolgreich abgerufen (falls benötigt) und geladen wurde.

### Definieren einer Schriftart

Schriftarten werden mithilfe des [`FontFace`-Konstruktors](/de/docs/Web/API/FontFace/FontFace) erstellt, der als Parameter die Schriftfamilie, die Schriftquelle und optionale Deskriptoren akzeptiert.
Das Format und die Grammatik dieser Argumente sind dasselbe wie in der entsprechenden [`@font-face`](/de/docs/Web/CSS/@font-face)-Definition.

Die Schriftquelle kann entweder binäre Daten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftquelle an einem URL sein.
Eine typische Definition einer Schriftart unter Verwendung einer URL-Quelle könnte wie unten gezeigt aussehen.
Beachten Sie, dass die Funktion `url()` für URL-Schriftquellen erforderlich ist.

```js
const font = new FontFace("my-font", "url(my-font.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` repräsentieren einige Deskriptoren die erwarteten Daten in den Schriftdaten und werden für das Schrift-Matching verwendet, während andere tatsächlich Eigenschaften der erzeugten Schriftart festlegen/definieren.
> Zum Beispiel zeigt das Setzen des `style` auf "italic" an, dass die Datei kursive Schriften enthält; es liegt am Autor, eine Datei anzugeben, für die dies zutrifft.

Schriftarten mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftdefinition gültig ist und die Schriftdaten geladen werden können — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird im Erfolgsfall auf `loaded` und andernfalls auf `failed` gesetzt.
Schriftarten mit einer URL-Quelle werden validiert, aber nicht automatisch geladen — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Schriftdefinition gültig ist, und andernfalls auf `failed`.

### Hinzufügen einer Schrift zu einem Dokument oder Worker

Schriftarten werden normalerweise zum Schriftsatz des Dokuments oder des Workers [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt, damit der User Agent die Schrift bei Bedarf automatisch laden kann, und _müssen_ hinzugefügt werden, damit die Schrift zum Rendern von Text verwendet werden kann.

Der Code unten zeigt, wie eine Schriftart zum Dokument hinzugefügt wird.

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

### Laden einer Schrift

Eine Schriftart kann manuell geladen werden, indem [`FontFace.load()`](/de/docs/Web/API/FontFace/load) aufgerufen wird, oder durch Aufrufen von [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), falls die Schriftart zum `FontFaceSet` hinzugefügt wurde.
Beachten Sie, dass der Versuch, eine bereits geladene Schrift zu laden, keine Wirkung hat.

Der Code unten zeigt, wie eine Schriftart definiert, zu den Dokumentschriften hinzugefügt und dann ein Schriftenladen initiiert wird.

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

Beachten Sie, dass `font.load()` ein Promise zurückgibt, sodass wir den Abschluss des Schriftladens durch anschließendes `then` behandeln könnten.
Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in einigen Fällen besser sein, da sie nur aufgerufen wird, wenn alle Schriften im Dokument aufgelöst und das Layout abgeschlossen sind.

## Schnittstellen

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert eine einzelne verwendbare Schriftart.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Eine Schnittstelle zum Laden von Schriftarten und Überprüfen ihrer Download-Status.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird immer dann ausgelöst, wenn ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) lädt.

## Beispiele

### Einfaches Schriftenladen

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schriftart von Google Fonts geladen und zum Zeichnen von Text in einem Canvas verwendet wird.
Das Beispiel protokolliert auch den `status` sofort nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert ein Canvas zum Zeichnen und ein Textfeld zum Protokollieren.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst holen wir das Element, auf das wir protokollieren werden, und das Canvas, das verwendet wird, um Text in der heruntergeladenen Schrift zu rendern.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als nächstes definieren wir eine `FontFace`, die eine URL-Quelle hat, die eine Google-Schrift ist, und fügen sie zu `document.fonts` hinzu.
Wir protokollieren dann den Schriftstatus, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die Methode [`FontFace.load()`](/de/docs/Web/API/FontFace/load) auf, um die Schrift zu laden, und warten auf das zurückgegebene Promise.
Sobald das Promise aufgelöst ist, protokollieren wir den geladenen Status (der `loaded` sein sollte) und zeichnen Text in der geladenen Schrift auf das Canvas.

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

Beachten Sie, dass wir auch auf das Promise warten könnten, das von der Eigenschaft [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) zurückgegeben wird, oder auf [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready).

#### Ergebnis

Das Ergebnis ist unten gezeigt.
Es sollte den Namen der Schriftart im Canvas in der heruntergeladenen Schrift anzeigen und ein Protokoll, das den Ladezustand vor und nach dem Laden zeigt.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftenladen mit Ereignissen

Dieses Beispiel ähnelt dem vorherigen, verwendet jedoch [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), um die Schrift zu laden.
Es zeigt auch, wie man Schriftladeereignisse überwacht.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der folgende Code definiert einen Canvas-Kontext zum Zeichnen von Text, definiert eine Schriftart und fügt sie zum Schriftsatz des Dokuments hinzu.

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

Als nächstes verwenden wir `load()` auf dem Schriftsatz, um die Schrift zu laden und anzugeben, welche der Schriften geladen werden soll.
Die Methode gibt ein {{jsxref("Promise")}} zurück.
Wenn das Promise gelöst wird, verwenden wir die Schrift, um etwas Text zu zeichnen.
Wenn es abgelehnt wird, wird der Fehler protokolliert.

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

Statt auf ein Promise zu warten, könnten wir stattdessen Ereignisse verwenden, um die Schriftladeoperation zu verfolgen.
Der folgende Code hört auf die Ereignisse `loading` und `loadingerror` und protokolliert die Anzahl der Schriftarten für jeden Fall.
Im Ereignis-Listener `loadingdone` iterieren wir zusätzlich durch die Schriftarten und protokollieren die Familiennamen.

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

Der letzte Codeblock zeigt, wie Sie den Abschluss des Schriftladens überwachen können, indem Sie das von [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegebene Promise verwenden.
Im Gegensatz zu den anderen Mechanismen gibt dies zurück, wenn alle im Dokument definierten Schriften heruntergeladen und das Layout abgeschlossen sind.

Wenn das Promise aufgelöst wird, iterieren wir über die Werte in den Schriftsätzen des Dokuments.

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

Das untenstehende Ergebnis zeigt, dass der Text in der "Oxygen"-Schrift gezeichnet wird.
Es zeigt auch Protokolle von den Ereignissen und wenn das Promise, das von `document.fonts.ready` zurückgegeben wird, aufgelöst ist.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
