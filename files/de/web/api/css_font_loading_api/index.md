---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: 72af34c38ae0d97bc3c9bde4998d538bcc56634a
---

{{DefaultAPISidebar("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **CSS Font Loading API** stellt Events und Interfaces bereit, mit denen sich Schriftressourcen dynamisch laden lassen.

## Konzepte und Verwendung

Mit CSS-Stylesheets können Autoren benutzerdefinierte Schriftarten verwenden: Sie legen mit der Regel {{cssxref("@font-face")}} fest, welche Schriftarten heruntergeladen werden sollen, und weisen sie mit der Eigenschaft {{cssxref("font-family")}} Elementen zu.
Der User Agent bestimmt, wann eine Schriftart heruntergeladen wird.
Die meisten User Agents rufen Schriftarten erst ab und laden sie, wenn sie zum ersten Mal benötigt werden. Das kann zu einer wahrnehmbaren Verzögerung führen.

Die CSS Font Loading API löst dieses Problem, indem sie Autoren ermöglicht, zu steuern und zu verfolgen, wann ein Font Face abgerufen und geladen wird und wann es dem Font-Face-Set des Dokuments oder Workers hinzugefügt wird.
Wenn ein Font Face dem Font-Face-Set des Dokuments oder Workers hinzugefügt wird, kann der User Agent die zugehörige Schriftressource bei Bedarf automatisch abrufen und laden.
Ein Font Face kann vor oder nach dem Hinzufügen zu einem Font-Face-Set geladen werden. Es _muss_ jedoch dem Set hinzugefügt worden sein, bevor es zum Zeichnen verwendet werden kann.

Font Faces werden in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert. Diese geben eine binäre Schriftquelle oder eine URL als Schriftquelle sowie weitere Schrifteigenschaften an, ähnlich wie die CSS-Regel {{cssxref("@font-face")}}.
`FontFace`-Objekte werden über [`Document.fonts`](/de/docs/Web/API/Document/fonts) beziehungsweise [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) zum [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) des Dokuments oder Workers hinzugefügt.
Autoren können das Herunterladen von Schriftarten entweder über `FontFace` oder über `FontFaceSet` auslösen und den Abschluss des Ladevorgangs überwachen.
Mit `FontFaceSet` lässt sich außerdem feststellen, wann alle für eine Seite benötigten Schriftarten geladen wurden und das Layout des Dokuments abgeschlossen ist.

Die Eigenschaft [`FontFace.status`](/de/docs/Web/API/FontFace/status) gibt den Ladestatus des Font Face an: `unloaded`, `loading`, `loaded` oder `failed`.
Anfangs lautet der Status `unloaded`.
Er wird auf `loading` gesetzt, während die Datei heruntergeladen oder die Schriftdaten verarbeitet werden, und auf `failed`, wenn die Schriftdefinition ungültig ist oder die Schriftdaten nicht geladen werden können.
Der Status wird auf `loaded` gesetzt, sobald die Daten des Font Face bei Bedarf erfolgreich abgerufen und geladen wurden.

### Ein Font Face definieren

Font Faces werden mit dem [`FontFace`-Konstruktor](/de/docs/Web/API/FontFace/FontFace) erstellt. Er nimmt die Schriftfamilie, die Schriftquelle und optionale Deskriptoren als Parameter entgegen.
Format und Syntax dieser Argumente entsprechen denen der jeweiligen {{cssxref("@font-face")}}-Definition.

Die Schriftquelle kann entweder aus Binärdaten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder aus einer Schriftressource unter einer URL bestehen.
Eine typische Definition eines Font Face mit einer URL als Quelle könnte wie unten gezeigt aussehen.
Beachten Sie, dass für URL-basierte Schriftquellen die Funktion `url()` erforderlich ist.

```js
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` beschreiben einige Deskriptoren die erwarteten Schriftdaten und werden für den Abgleich von Schriftarten verwendet. Andere legen hingegen Eigenschaften des erzeugten Font Face fest.
> Wenn beispielsweise `style` auf „italic“ gesetzt wird, bedeutet das, dass die Datei kursive Schriftarten enthält. Der Autor muss eine Datei angeben, auf die das tatsächlich zutrifft.

Font Faces mit einer _binären Quelle_ werden automatisch geladen, sofern die Schriftdefinition gültig ist und die Schriftdaten geladen werden können. [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird bei Erfolg auf `loaded` gesetzt, andernfalls auf `failed`.
Font Faces mit einer URL als Quelle werden validiert, aber nicht automatisch geladen. [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Font-Face-Definition gültig ist, andernfalls auf `failed`.

### Eine Schriftart zu einem Dokument oder Worker hinzufügen

Font Faces werden normalerweise zum [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) des Dokuments oder Workers hinzugefügt, damit der User Agent die Schriftart bei Bedarf automatisch laden kann. Damit die Schriftart zum Rendern von Text verwendet werden kann, _muss_ sie hinzugefügt werden.

Der folgende Code zeigt, wie ein Font Face zum Dokument hinzugefügt wird.

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

Ein Font Face kann manuell durch Aufrufen von [`FontFace.load()`](/de/docs/Web/API/FontFace/load) geladen werden. Wurde es dem `FontFaceSet` hinzugefügt, kann auch [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load) aufgerufen werden.
Der Versuch, eine bereits geladene Schriftart zu laden, hat keine Wirkung.

Der folgende Code zeigt, wie Sie ein Font Face definieren, es zu den Schriftarten des Dokuments hinzufügen und anschließend den Ladevorgang starten.

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

Beachten Sie, dass `font.load()` ein Promise zurückgibt. Wir könnten daher den Abschluss des Ladevorgangs auch behandeln, indem wir anschließend `then` verketten.
Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann unter Umständen besser sein, da es erst aufgelöst wird, wenn alle Schriftarten im Dokument verarbeitet wurden und das Layout abgeschlossen ist.

## Interfaces

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert ein einzelnes verwendbares Font Face.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Ein Interface zum Laden von Font Faces und zum Überprüfen ihres Downloadstatus.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird ausgelöst, wenn ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Beispiele

### Einfaches Laden einer Schriftart

Dieses einfache Beispiel zeigt, wie eine Schriftart von Google Fonts geladen und zum Zeichnen von Text auf einer Canvas verwendet wird.
Außerdem wird der `status` unmittelbar nach der Erstellung und nach dem Laden protokolliert.

#### HTML

Dieser Code definiert eine Canvas zum Zeichnen und eine Textarea für die Protokollausgabe.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst greifen wir auf das Element für die Protokollausgabe und die Canvas zu, auf der Text in der heruntergeladenen Schriftart gerendert werden soll.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als Nächstes definieren wir ein `FontFace`, dessen URL-Quelle eine Google Font ist, und fügen es zu `document.fonts` hinzu.
Anschließend protokollieren wir den Schriftstatus, der `unloaded` lauten sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  'url("https://mdn.github.io/shared-assets/fonts/bitter/Bitter-Regular.woff2")',
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die Methode [`FontFace.load()`](/de/docs/Web/API/FontFace/load) auf, um das Font Face zu laden, und warten auf das zurückgegebene Promise.
Sobald das Promise aufgelöst wird, protokollieren wir den Ladestatus (der `loaded` lauten sollte) und zeichnen Text in der geladenen Schriftart auf die Canvas.

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

Wir hätten auch auf das Promise warten können, das die Eigenschaft [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) zurückgibt, oder auf [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready).

#### Ergebnis

Das Ergebnis ist unten dargestellt.
Es sollte den Namen der Schriftart auf der Canvas in der heruntergeladenen Schriftart sowie eine Protokollausgabe mit dem Ladestatus vor und nach dem Laden zeigen.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftarten mit Events laden

Dieses Beispiel ähnelt dem vorherigen, verwendet aber [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), um die Schriftart zu laden.
Es zeigt außerdem, wie Sie auf Events beim Laden von Schriftarten reagieren können.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der folgende Code definiert einen Canvas-Kontext zum Zeichnen von Text und ein Font Face und fügt dieses dem Font-Face-Set des Dokuments hinzu.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
const ctx = canvas.getContext("2d");

const oxygenFontFace = new FontFace(
  "FontFamily Oxygen",
  'url("https://mdn.github.io/shared-assets/fonts/oxygen/Oxygen-Regular.woff2")',
);
document.fonts.add(oxygenFontFace);
log.textContent += `Oxygen status: ${oxygenFontFace.status}\n`;
```

Als Nächstes rufen wir `load()` auf dem Font-Face-Set auf und geben an, welche Schriftart geladen werden soll.
Die Methode gibt ein {{jsxref("Promise")}} zurück.
Wenn das Promise aufgelöst wird, zeichnen wir mit der Schriftart Text.
Wenn es zurückgewiesen wird, protokollieren wir den Fehler.

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

Statt auf ein Promise zu warten, können wir auch Events verwenden, um den Ladevorgang der Schriftart zu verfolgen.
Der folgende Code überwacht die Events `loading` und `loadingerror` und protokolliert jeweils die Anzahl der Font Faces.
Im Event-Listener für `loadingdone` durchlaufen wir zusätzlich die Font Faces und protokollieren die Namen der Schriftfamilien.

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

Der letzte Codeabschnitt zeigt, wie Sie den Abschluss des Ladevorgangs mithilfe des Promise überwachen können, das [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgibt.
Anders als bei den anderen Mechanismen wird dieses Promise erst aufgelöst, wenn alle im Dokument definierten Schriftarten heruntergeladen wurden und das Layout abgeschlossen ist.

Wenn das Promise aufgelöst wird, durchlaufen wir die Werte der Font Faces des Dokuments.

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

Die folgende Ausgabe zeigt Text in der Schriftart „Oxygen“.
Sie zeigt außerdem die Protokollausgaben der Events und die Ausgabe, die beim Auflösen des von `document.fonts.ready` zurückgegebenen Promise entsteht.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
