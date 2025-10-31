---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **CSS Font Loading API** bietet Ereignisse und Schnittstellen zum dynamischen Laden von Schriftressourcen.

## Konzepte und Nutzung

CSS-Stylesheets ermöglichen es Autoren, benutzerdefinierte Schriften zu verwenden; sie geben Schriften an, die mit der [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel heruntergeladen werden sollen, und wenden sie mit der [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family)-Eigenschaft auf Elemente an. Der Zeitpunkt, zu dem eine Schriftart heruntergeladen wird, wird durch den Benutzeragenten gesteuert. Die meisten Agenten holen und laden Schriften nur, wenn sie erstmals benötigt werden, was zu einer wahrnehmbaren Verzögerung führen kann.

Die CSS Font Loading API löst dieses Problem, indem sie Autoren ermöglicht, zu steuern und nachzuverfolgen, wann eine Schriftart abgeholt und geladen wird, und wann sie dem von dem Dokument oder Worker verwalteten Font Face Set hinzugefügt wird. Das Hinzufügen einer Schriftart zum Dokument- oder Worker-Font-Face-Set erlaubt dem Benutzeragenten, die zugehörige Schriftressource bei Bedarf automatisch zu holen und zu laden. Eine Schriftart kann entweder vor oder nach ihrer Hinzufügung zu einem Font-Face-Set geladen werden, aber sie _muss_ dem Set hinzugefügt werden, bevor sie zum Zeichnen verwendet werden kann.

Schriftarten werden in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert, die eine binäre oder URL-Schriftquelle sowie andere Schrift-Eigenschaften ähnlich der CSS [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel spezifizieren. `FontFace`-Objekte werden entweder dem Dokument- oder dem Worker-[`FontFaceSet`](/de/docs/Web/API/FontFaceSet) mit [`Document.fonts`](/de/docs/Web/API/Document/fonts) und [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) hinzugefügt. Autoren können den Download von Schriften mit entweder `FontFace` oder `FontFaceSet` auslösen und die Fertigstellung der Ladeoperation überwachen. `FontFaceSet` kann zusätzlich verwendet werden, um festzustellen, wann alle von einer Seite benötigten Schriften geladen sind und das Dokument-Layout abgeschlossen ist.

Die Eigenschaft [`FontFace.status`](/de/docs/Web/API/FontFace/status) zeigt den Ladezustand der Schriftart an: `unloaded`, `loading`, `loaded` oder `failed`. Dieser Status ist anfänglich `unloaded`. Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen wird oder die Schriftartdaten verarbeitet werden, und auf `failed`, wenn die Schriftartdefinition ungültig ist oder die Schriftartdaten nicht geladen werden können. Der Status wird auf `loaded` gesetzt, wenn die Schriftartdaten erfolgreich geholt (falls erforderlich) und geladen wurden.

### Definition einer Schriftart

Schriftarten werden mithilfe des [`FontFace`-Konstruktors](/de/docs/Web/API/FontFace/FontFace) erstellt, der die Schriftfamilie, die Schriftquelle und optionale Deskriptoren als Parameter verwendet. Das Format und die Grammatik dieser Argumente sind dieselben wie bei der entsprechenden [`@font-face`](/de/docs/Web/CSS/@font-face)-Definition.

Die Schriftquelle kann entweder Binärdaten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftressource an einer URL sein. Eine typische Schriftdefinition mit einer URL-Quelle könnte wie unten gezeigt aussehen. Beachten Sie, dass die `url()`-Funktion für URL-Schriftquellen erforderlich ist.

```js
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` stellen einige Deskriptoren die erwarteten Daten in den Schriftarten dar und werden zum Schriftmatching verwendet, während andere tatsächlich Eigenschaften der erzeugten Schriftart festlegen/definieren. Beispielsweise wird durch das Setzen des `style` auf "italic" angegeben, dass die Datei kursiv gedruckte Schriften enthält; es liegt in der Verantwortung des Autors, eine Datei zu spezifizieren, für die dies zutrifft.

Schriftarten mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftdefinition gültig ist und die Schriftartdaten geladen werden können — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird bei Erfolg auf `loaded` gesetzt und andernfalls auf `failed`. Schriftarten mit einer URL-Quelle werden validiert, aber nicht automatisch geladen — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Schriftartdefinition gültig ist, und andernfalls auf `failed`.

### Hinzufügen einer Schriftart zu einem Dokument oder Worker

Schriftarten werden in der Regel dem Dokument- oder Worker-[`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt, damit der Benutzeragent die Schrift automatisch laden kann, wenn sie benötigt wird, und _müssen_ hinzugefügt werden, damit die Schrift zur Textdarstellung verwendet werden kann.

Der folgende Code zeigt, wie eine Schriftart dem Dokument hinzugefügt wird.

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

Eine Schriftart kann manuell geladen werden, indem [`FontFace.load()`](/de/docs/Web/API/FontFace/load) aufgerufen wird, oder durch Aufrufen von [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), wenn die Schriftart dem `FontFaceSet` hinzugefügt wurde. Beachten Sie, dass der Versuch, eine bereits geladene Schriftart zu laden, keine Auswirkungen hat.

Der folgende Code zeigt, wie eine Schrift definiert, zum Dokument-Schriftensatz hinzugefügt und dann die Schriftladung initiiert wird.

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

Beachten Sie, dass `font.load()` ein Versprechen zurückgibt, sodass wir den Abschluss der Schriftartladung durch Verkettung von `then` im Anschluss behandeln könnten. Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in einigen Fällen besser sein, da es nur aufgerufen wird, wenn alle Schriften im Dokument gelöst wurden und das Layout abgeschlossen ist.

## Schnittstellen

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert eine einzelne verwendbare Schriftart.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Eine Schnittstelle zum Laden von Schriftarten und Überprüfen ihrer Download-Status.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird immer dann ausgelöst, wenn ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Beispiele

### Einfaches Schriftladen

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schriftart von Google Fonts geladen und verwendet wird, um Text auf eine Leinwand zu zeichnen. Das Beispiel protokolliert auch den `status` unmittelbar nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert eine Leinwand zum Zeichnen und ein Textfeld zum Protokollieren.

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

Als nächstes definieren wir eine `FontFace`, die eine URL-Quelle aus Google Fonts hat, und fügen sie `document.fonts` hinzu. Wir protokollieren dann den Schriftstatus, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  'url("https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2")',
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die Methode [`FontFace.load()`](/de/docs/Web/API/FontFace/load) auf, um die Schriftart zu laden, und warten auf das zurückgegebene Versprechen. Sobald das Versprechen erfüllt ist, protokollieren wir den geladenen Status (der `loaded` sein sollte) und zeichnen Text in der geladenen Schrift auf die Leinwand.

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

Beachten Sie, dass wir auch auf das Versprechen warten könnten, das von der Eigenschaft [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) zurückgegeben wird, oder auf [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready).

#### Ergebnis

Das Ergebnis wird unten gezeigt. Es sollte den Namen der Schrift auf der Leinwand in der heruntergeladenen Schrift anzeigen und ein Protokoll anzeigen, das den Ladezustand vor und nach dem Laden zeigt.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftladen mit Ereignissen

Dieses Beispiel ist dem vorherigen ähnlich, verwendet jedoch [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), um die Schriftart zu laden. Es zeigt auch, wie man Schriftladeereignisse überwacht.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der folgende Code definiert einen Leinwandkontext zum Zeichnen von Text, definiert eine Schriftart und fügt sie dem Dokument-Schrift-Face-Set hinzu.

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

Als nächstes verwenden wir `load()` im Schrift-Face-Set, um die Schriftart zu laden, und geben an, welche der Schriften geladen werden soll. Die Methode gibt ein {{jsxref("Promise")}} zurück. Wenn das Versprechen aufgelöst wird, verwenden wir die Schrift, um Text zu zeichnen. Wenn es abgelehnt wird, wird der Fehler protokolliert.

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

Anstelle des Wartens auf ein Versprechen könnten wir auch Ereignisse verwenden, um die Schriftladeoperation zu verfolgen. Der folgende Code lauscht auf die `loading`- und `loadingerror`-Ereignisse und protokolliert die Anzahl der Schriftarten für jeden Fall. Im `loadingdone`-Event-Listener iterieren wir zusätzlich durch die Schriftarten und protokollieren die Familiennamen.

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

Der letzte Code zeigt, wie man den Abschluss des Schriftladens mit dem von [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegebenen Versprechen überwachen kann. Im Gegensatz zu den anderen Mechanismen gibt dies zurück, wenn alle im Dokument definierten Schriften heruntergeladen wurden und das Layout abgeschlossen ist.

Wenn das Versprechen erfüllt wird, iterieren wir die Werte in den Schriftarten des Dokuments.

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

Der folgende Ausgang zeigt den in der "Oxygen"-Schrift gezeichneten Text. Dies zeigt auch das Protokollieren von den Ereignissen und wenn das Versprechen, das von `document.fonts.ready` zurückgegeben wird, erfüllt ist.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
