---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("CSS Font Loading API")}}

Die CSS Font Loading API stellt Ereignisse und Schnittstellen zum dynamischen Laden von Schriftressourcen bereit.

> [!NOTE]
> Diese Funktion ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar (`self.fonts` bietet Zugriff auf [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)).

## Konzepte und Anwendung

CSS-Stylesheets ermöglichen es Autoren, benutzerdefinierte Schriftarten zu verwenden; sie spezifizieren Schriftarten zum Herunterladen mit der [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel und wenden sie auf Elemente mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft an. Der Zeitpunkt, an dem eine Schriftart heruntergeladen wird, wird vom User-Agent gesteuert. Die meisten User-Agents laden Schriftarten erst, wenn sie benötigt werden, was zu einer wahrnehmbaren Verzögerung führen kann.

Die CSS Font Loading API löst dieses Problem, indem sie es Autoren ermöglicht, zu kontrollieren und zu verfolgen, wann ein Font-Face abgerufen und geladen wird und wann es dem Font-Face-Set hinzugefügt wird, das dem Dokument oder Worker gehört. Wenn ein Font-Face zum Schriftset eines Dokuments oder eines Workers hinzugefügt wird, kann der User-Agent die zugehörige Schriftressource bei Bedarf automatisch abrufen und laden. Ein Font-Face kann entweder vor oder nach dem Hinzufügen zu einem Font-Face-Set geladen werden, muss jedoch hinzugefügt werden, bevor es zur Darstellung verwendet werden kann.

Font-Faces werden in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert, die eine binäre oder URL-Schriftquelle sowie andere Eigenschaften der Schrift auf ähnliche Weise wie die CSS [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel spezifizieren. `FontFace`-Objekte werden zum Dokument oder Worker [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) mithilfe von [`Document.fonts`](/de/docs/Web/API/Document/fonts) bzw. [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) hinzugefügt. Autoren können das Herunterladen von Schriftarten entweder mit `FontFace` oder `FontFaceSet` auslösen und die Ladevollendung überwachen. `FontFaceSet` kann zusätzlich verwendet werden, um festzustellen, wann alle von einer Seite benötigten Schriftarten geladen wurden und das Dokumentlayout abgeschlossen ist.

Die [`FontFace.status`](/de/docs/Web/API/FontFace/status) Eigenschaft zeigt den Ladezustand des Schriftcharakters an: `unloaded`, `loading`, `loaded` oder `failed`. Dieser Status ist anfangs `unloaded`. Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen wird oder die Schriftdaten verarbeitet werden, und auf `failed`, wenn die Schriftdefinition ungültig ist oder die Schriftdaten nicht geladen werden können. Der Status wird auf `loaded` gesetzt, wenn die Schriftcharakterdaten erfolgreich abgerufen (falls erforderlich) und geladen wurden.

### Definieren eines Font-Face

Font-Faces werden mit dem [`FontFace`-Konstruktor](/de/docs/Web/API/FontFace/FontFace) erstellt, der als Parameter die Schriftfamilie, die Schriftquelle und optionale Deskriptoren entgegennimmt. Das Format und die Grammatik dieser Argumente entsprechen der entsprechenden [`@font-face`](/de/docs/Web/CSS/@font-face)-Definition.

Die Schriftquelle kann entweder Binärdaten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftressource unter einer URL sein. Eine typische Font-Face-Definition mit einer URL-Quelle könnte wie unten angegeben aussehen. Beachten Sie, dass die `url()`-Funktion für URL-Schriftquellen erforderlich ist.

```js
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` stellen einige Deskriptoren die erwarteten Daten in den Schriftdaten dar und werden für die Schriftanpassung verwendet, während andere tatsächlich Eigenschaften des generierten Font-Face festlegen/definieren. Zum Beispiel weist das Setzen des `style` auf "italic" darauf hin, dass die Datei kursive Schriften enthält; es obliegt dem Autor, eine Datei anzugeben, für die dies gilt.

Font-Faces mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftdefinition gültig ist und die Schriftdaten geladen werden können — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird bei Erfolg auf `loaded` und andernfalls auf `failed` gesetzt. Font-Faces mit einer URL-Quelle werden validiert, aber nicht automatisch geladen — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Font-Face-Definition gültig ist, und andernfalls auf `failed`.

### Hinzufügen einer Schriftart zu einem Dokument oder Worker

Font-Faces werden normalerweise dem Dokument oder Worker [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt, um dem User-Agent das automatische Laden der Schrift bei Bedarf zu ermöglichen, und _müssen_ hinzugefügt werden, damit die Schrift zur Textwiedergabe verwendet werden kann.

Der untenstehende Code zeigt, wie ein Font-Face dem Dokument hinzugefügt wird.

```js
// Define a FontFace
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);
```

### Laden einer Schrift

Ein Font-Face kann manuell durch Aufruf von [`FontFace.load()`](/de/docs/Web/API/FontFace/load) oder durch Aufruf von [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) geladen werden, wenn das Font-Face dem `FontFaceSet` hinzugefügt wurde. Beachten Sie, dass der Versuch, eine bereits geladene Schrift zu laden, keine Wirkung hat.

Der untenstehende Code zeigt, wie ein Font-Face definiert, zu den Dokumentenschriften hinzugefügt und dann eine Schriftladung initiiert wird.

```js
// Define a FontFace
const font = new FontFace("myfont", "url(myfont.woff)");

// Add to the document.fonts (FontFaceSet)
document.fonts.add(font);

// Load the font
font.load();

// Wait until the fonts are all loaded
document.fonts.ready.then(() => {
  // Use the font to render text (for example, in a canvas)
});
```

Beachten Sie, dass `font.load()` ein Versprechen zurückgibt, sodass wir die Fertigstellung des Schriftdownloads durch Verkettung von `then` danach hätten behandeln können. Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in einigen Fällen besser sein, da sie nur aufgerufen wird, wenn alle Schriften im Dokument aufgelöst sind und das Layout vollständig ist.

## Schnittstellen

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert ein einzelnes verwendbares Font-Face.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Eine Schnittstelle zum Laden von Font-Face und Überprüfen ihres Downloadstatus.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird ausgelöst, wann immer ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Beispiele

### Grundlegendes Laden von Schriften

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schrift von Google Fonts geladen und verwendet wird, um Text auf eine Leinwand zu zeichnen. Das Beispiel protokolliert auch den `status` unmittelbar nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert eine Leinwand zum Zeichnen und ein Textfeld zum Protokollieren.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst erhalten wir das Element, in das wir protokollieren, und die Leinwand, die verwendet wird, um Text in der heruntergeladenen Schriftart darzustellen.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als nächstes definieren wir ein `FontFace` mit einer URL-Quelle, die eine Google-Schrift ist, und fügen es zu `document.fonts` hinzu. Wir protokollieren dann den Schriftstatus, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die Methode [`FontFace.load()`](/de/docs/Web/API/FontFace/load) auf, um das Font-Face zu laden, und warten auf das zurückgegebene Versprechen. Sobald das Versprechen aufgelöst ist, protokollieren wir den geladenen Status (der `loaded` sein sollte) und zeichnen den Text in der geladenen Schriftart auf die Leinwand.

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

Das Ergebnis wird unten gezeigt. Es sollte den Namen der Schriftart zeigen, die auf der Leinwand in der heruntergeladenen Schriftart gezeichnet wurde, und ein Protokoll, das den Ladezustand vor und nach dem Laden zeigt.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftarten laden mit Ereignissen

Dieses Beispiel ähnelt dem vorherigen, verwendet jedoch [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), um die Schrift zu laden. Es zeigt auch, wie man Ereignisse für das Laden von Schriften überwacht.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der untenstehende Code definiert einen Leinwandkontext zum Zeichnen von Text, definiert ein Font-Face und fügt es dem Dokumentenschriftset hinzu.

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

Als nächstes verwenden wir `load()` auf dem Font-Face-Set, um die Schrift zu laden, und geben an, welche der Schriften geladen werden soll. Die Methode gibt ein {{jsxref("Promise")}} zurück. Wenn das Versprechen aufgelöst wird, verwenden wir die Schrift, um Text zu zeichnen. Wenn es abgelehnt wird, wird der Fehler protokolliert.

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

Anstelle des Wartens auf ein Versprechen könnten wir auch Ereignisse verwenden, um den Vorgang des Schriftenladens zu verfolgen. Der untenstehende Code hört auf die Ereignisse `loading` und `loadingerror` und protokolliert die Anzahl der Font-Face für jeden Fall. Im `loadingdone`-Ereignislistener iterieren wir zusätzlich durch die Font-Face und protokollieren die Familiennamen.

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

Der letzte Code zeigt, wie Sie den Abschluss des Schriftdownloads mithilfe des Versprechens überwachen können, das von [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegeben wird. Im Gegensatz zu den anderen Mechanismen wird dies aufgerufen, wenn alle im Dokument definierten Schriften heruntergeladen und das Layout abgeschlossen ist.

Wenn das Versprechen aufgelöst ist, iterieren wir über die Werte in den Schriftarten des Dokuments.

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

Die Ausgabe unten zeigt den Text, der in der "Oxygen"-Schrift gezeichnet ist. Es zeigt auch Protokollierungen von den Ereignissen und wenn das von `document.fonts.ready` zurückgegebene Versprechen erfüllt ist.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
