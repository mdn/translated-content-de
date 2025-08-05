---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **CSS Font Loading API** bietet Ereignisse und Schnittstellen zum dynamischen Laden von Schriftressourcen.

## Konzepte und Verwendung

CSS-Stylesheets erlauben es Autoren, benutzerdefinierte Schriften zu verwenden; sie spezifizieren Schriften, die mithilfe der [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel heruntergeladen werden sollen, und wenden sie mithilfe der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft auf Elemente an.
Der Zeitpunkt, an dem eine Schrift heruntergeladen wird, wird durch den User-Agent gesteuert.
Die meisten Agenten laden Schriften erst dann herunter, wenn sie das erste Mal benötigt werden, was zu einer wahrnehmbaren Verzögerung führen kann.

Die CSS Font Loading API überwindet dieses Problem, indem sie es Autoren ermöglicht, zu kontrollieren und nachzuverfolgen, wann eine Schriftart heruntergeladen und geladen wird und wann sie dem von Dokument oder Worker verwalteten Schriftartensatz hinzugefügt wird.
Das Hinzufügen einer Schriftart zum Dokument- oder Worker-Schriftartensatz ermöglicht es dem User-Agent, die zugehörige Schriftressource bei Bedarf automatisch herunterzuladen und zu laden.
Eine Schriftart kann entweder vor oder nach ihrer Hinzufügung zu einem Schriftartensatz geladen werden, sie _muss_ jedoch zum Satz hinzugefügt werden, bevor sie zum Zeichnen verwendet werden kann.

Schriftarten werden in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert, die eine binäre oder URL-Schriftquelle und andere Eigenschaften der Schrift ähnlich wie die CSS [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel angeben.
`FontFace`-Objekte werden dem Dokument- oder Worker-[`FontFaceSet`](/de/docs/Web/API/FontFaceSet) über [`Document.fonts`](/de/docs/Web/API/Document/fonts) und [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) hinzugefügt.
Autoren können den Download von Schriften entweder über `FontFace` oder `FontFaceSet` auslösen und den Abschluss des Ladevorgangs überwachen.
`FontFaceSet` kann zusätzlich verwendet werden, um festzustellen, wann alle für eine Seite erforderlichen Schriften geladen wurden und das Dokument-Layout abgeschlossen ist.

Die [`FontFace.status`](/de/docs/Web/API/FontFace/status)-Eigenschaft gibt den Ladezustand der Schriftart an: `unloaded`, `loading`, `loaded` oder `failed`.
Dieser Status ist anfangs `unloaded`.
Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen oder die Schriftdaten verarbeitet werden, und auf `failed`, wenn die Schriftdefinition ungültig ist oder die Schriftdaten nicht geladen werden können.
Der Status wird auf `loaded` gesetzt, wenn die Schriftartdaten erfolgreich abgerufen (falls erforderlich) und geladen wurden.

### Definieren einer Schriftart

Schriftarten werden mit dem [`FontFace`-Konstruktor](/de/docs/Web/API/FontFace/FontFace) erstellt, der folgende Parameter akzeptiert: die Schriftfamilie, die Schriftquelle und optionale Deskriptoren.
Das Format und die Grammatik dieser Argumente entsprechen der äquivalenten [`@font-face`](/de/docs/Web/CSS/@font-face)-Definition.

Die Schriftquelle kann entweder binäre Daten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftressource bei einer URL sein.
Eine typische Schriftart-Definition mit einer URL-Quelle könnte wie unten gezeigt aussehen.
Beachten Sie, dass die `url()`-Funktion für URL-Schriftquellen erforderlich ist.

```js
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` repräsentieren einige Deskriptoren die erwarteten Daten in den Schriftdaten und werden zum Schriftabgleich verwendet, während andere tatsächlich Eigenschaften der generierten Schriftart festlegen/definieren.
> Zum Beispiel zeigt das Festlegen des `style` auf "italic" an, dass die Datei kursiv gesetzte Schriften enthält; es liegt in der Verantwortung des Autors, eine Datei anzugeben, für die dies zutrifft.

Schriftarten mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftdefinition gültig ist und die Schriftdaten geladen werden können — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird bei Erfolg auf `loaded` und andernfalls auf `failed` gesetzt.
Schriftarten mit einer URL-Quelle werden validiert, aber nicht automatisch geladen — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Schriftdefinition gültig ist, und andernfalls auf `failed`.

### Hinzufügen einer Schriftart zu einem Dokument oder Worker

Schriftarten werden üblicherweise dem Dokument- oder Worker-[`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt, um es dem User-Agent zu ermöglichen, die Schrift bei Bedarf automatisch zu laden. Sie _müssen_ hinzugefügt werden, damit die Schrift zum Rendern von Text verwendet werden kann.

Der untenstehende Code zeigt, wie eine Schriftart dem Dokument hinzugefügt wird.

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

### Laden einer Schriftart

Eine Schriftart kann manuell geladen werden, indem [`FontFace.load()`](/de/docs/Web/API/FontFace/load) aufgerufen wird, oder durch Aufrufen von [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), wenn die Schriftart zum `FontFaceSet` hinzugefügt wurde.
Beachten Sie, dass das Laden einer bereits geladenen Schriftart keinen Effekt hat.

Der untenstehende Code zeigt, wie man eine Schriftart definiert, sie zu den Dokumentenschriften hinzufügt und dann das Laden der Schriftart initiiert.

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

Beachten Sie, dass `font.load()` ein Versprechen zurückgibt, sodass wir den Abschluss des Schriftladens durch Verkettung von `then` danach behandeln könnten.
Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in einigen Fällen besser sein, da sie erst aufgerufen wird, wenn alle Schriften im Dokument aufgelöst sind und das Layout abgeschlossen ist.

## Schnittstellen

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert eine einzelne verwendbare Schriftart.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Eine Schnittstelle zum Laden von Schriftarten und Überprüfen ihres Download-Status.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird ausgelöst, wenn ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) lädt.

## Beispiele

### Einfaches Schriftladen

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schrift von Google Fonts geladen und zum Zeichnen von Text auf einer Leinwand verwendet wird.
Das Beispiel protokolliert auch den `status` unmittelbar nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert eine Leinwand zum Zeichnen und ein Texteingabefeld zum Protokollieren.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst holen wir das Element, in das wir protokollieren werden, und die Leinwand, die zum Rendern von Text in der heruntergeladenen Schriftart verwendet wird.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als nächstes definieren wir eine `FontFace`, die eine URL-Quelle ist, die eine Google-Schrift ist, und fügen sie zu `document.fonts` hinzu.
Wir protokollieren dann den Schriftstatus, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  'url("https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2")',
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die Methode [`FontFace.load()`](/de/docs/Web/API/FontFace/load) auf, um die Schriftart zu laden, und warten auf das zurückgegebene Versprechen.
Sobald das Versprechen erfüllt ist, protokollieren wir den geladenen Status (der auf `loaded` stehen sollte) und zeichnen Text in der geladenen Schriftart auf die Leinwand.

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

Beachten Sie, dass wir auch auf das Versprechen hätten warten können, das von der [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded)-Eigenschaft zurückgegeben wird, oder auf [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready).

#### Ergebnis

Das Ergebnis ist unten angezeigt.
Es sollte den Namen der Schriftart zeigen, die auf der Leinwand in der heruntergeladenen Schriftart gezeichnet ist, und ein Protokoll, das den Ladezustand vor und nach dem Laden zeigt.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftladen mit Ereignissen

Dieses Beispiel ist dem vorhergehenden ähnlich, verwendet jedoch [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), um die Schrift zu laden.
Es demonstriert auch, wie man auf Schriftereignisse hört.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der folgende Code definiert einen Zeichnungskontext für Text, definiert eine Schriftart und fügt sie dem Dokument-Schriftartensatz hinzu.

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

Als nächstes verwenden wir `load()` für das Schriftart-Set, um die Schrift zu laden und anzugeben, welche der Schriften geladen werden sollen.
Die Methode gibt ein {{jsxref("Promise")}} zurück.
Wenn das Versprechen erfüllt wird, verwenden wir die Schrift, um Text zu zeichnen.
Wird es abgelehnt, wird der Fehler protokolliert.

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

Anstatt auf ein Versprechen zu warten, könnten wir auch Ereignisse verwenden, um den Schriftladevorgang zu verfolgen.
Der folgende Code hört auf die Ereignisse `loading` und `loadingerror` und protokolliert die Anzahl der Schriftarten für jeden Fall.
Im `loadingdone`-Ereignislistener iterieren wir zusätzlich durch die Schriften und protokollieren die Familiennamen.

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

Der letzte Codeabschnitt zeigt, wie Sie den Abschluss des Schriftladens mit dem Versprechen überwachen können, das von [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegeben wird.
Im Gegensatz zu den anderen Mechanismen wird dies zurückgegeben, wenn alle im Dokument definierten Schriftarten heruntergeladen wurden und das Layout abgeschlossen ist.

Wenn das Versprechen erfüllt wird, iterieren wir durch die Werte in den Schriftarten des Dokuments.

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

Das untenstehende Ergebnis zeigt den Text, der in der "Oxygen"-Schrift gezeichnet ist.
Dies zeigt auch das Protokoll von den Ereignissen und wenn das Versprechen, das von `document.fonts.ready` zurückgegeben wird, erfüllt ist.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
