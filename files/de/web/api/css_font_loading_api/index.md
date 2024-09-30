---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("CSS Font Loading API")}}

Die CSS Font Loading API bietet Ereignisse und Schnittstellen zum dynamischen Laden von Schriftressourcen.

> [!NOTE]
> Diese Funktion ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar (`self.fonts` bietet Zugriff auf [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)).

## Konzepte und Nutzung

CSS-Stylesheets ermöglichen es Autoren, benutzerdefinierte Schriftarten zu verwenden; sie können Schriftarten mit der [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel zum Herunterladen angeben und sie mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft auf Elemente anwenden.
Der Zeitpunkt, an dem eine Schriftart heruntergeladen wird, wird durch den Benutzeragenten kontrolliert.
Die meisten Agenten laden Schriftarten erst herunter, wenn sie benötigt werden, was zu einer wahrnehmbaren Verzögerung führen kann.

Die CSS Font Loading API löst dieses Problem, indem sie Autoren ermöglicht, zu steuern und zu verfolgen, wann eine Schriftart geladen und zum Font-Face-Satz des Dokuments oder Workers hinzugefügt wird.
Das Hinzufügen einer Schriftart zum Dokument- oder Worker-Schriftensatz ermöglicht es dem Benutzeragenten, die zugehörige Schriftressource bei Bedarf automatisch zu laden.
Eine Schriftart kann entweder vor oder nach ihrer Hinzufügung zum Schriftensatz geladen werden, aber sie _muss_ hinzugefügt werden, bevor sie zum Zeichnen verwendet werden kann.

Schriftarten sind in [`FontFace`](/de/docs/Web/API/FontFace)-Objekten definiert, die eine binäre oder URL-Schriftquelle und andere Schriftmerkmale ähnlich wie die CSS [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel spezifizieren.
`FontFace`-Objekte werden dem Dokument- oder Worker-`FontFaceSet` über [`Document.fonts`](/de/docs/Web/API/Document/fonts) bzw. [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) hinzugefügt.
Autoren können den Download von Schriftarten über `FontFace` oder `FontFaceSet` auslösen und den Abschluss des Ladevorgangs überwachen.
Zusätzlich kann die `FontFaceSet`-Schnittstelle verwendet werden, um zu bestimmen, wann alle für eine Seite benötigten Schriftarten geladen sind und das Dokumentlayout abgeschlossen ist.

Die [`FontFace.status`](/de/docs/Web/API/FontFace/status)-Eigenschaft zeigt den Ladezustand der Schriftart an: `unloaded`, `loading`, `loaded` oder `failed`.
Dieser Status ist anfangs `unloaded`.
Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen oder die Schriftartdaten verarbeitet werden, und auf `failed`, wenn die Schriftartdefinition ungültig ist oder die Daten nicht geladen werden können.
Der Status ändert sich zu `loaded`, wenn die Schriftartdaten erfolgreich abgerufen und geladen wurden.

### Definieren einer Schriftart

Schriftarten werden mithilfe des [`FontFace`-Konstruktors](/de/docs/Web/API/FontFace/FontFace) erstellt, der als Parameter die Schriftfamilie, die Schriftquelle und optionale Deskriptoren annimmt.
Das Format und die Grammatik dieser Argumente entsprechen der [`@font-face`](/de/docs/Web/CSS/@font-face)-Definition.

Die Schriftquelle kann entweder binäre Daten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftressource an einer URL sein.
Eine typische Definition einer Schriftart unter Verwendung einer URL-Quelle könnte wie folgt aussehen.
Beachten Sie, dass die `url()`-Funktion für URL-Schriftquellen erforderlich ist.

```js
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` beschreiben einige Deskriptoren die erwarteten Daten in den Schriftartdaten und werden für die Schriftartenabstimmung verwendet, während andere tatsächlich Eigenschaften der generierten Schriftart festlegen/definieren.
> Das Festlegen des `style` auf "italic" gibt beispielsweise an, dass die Datei kursiv gesetzte Schriftarten enthält; dem Autor obliegt es, eine entsprechende Datei anzugeben.

Schriftarten mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftartdefinition gültig ist und die Schriftartdaten geladen werden können — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird bei Erfolg auf `loaded` und andernfalls auf `failed` gesetzt.
Schriftarten mit einer URL-Quelle werden validiert, aber nicht automatisch geladen — [`FontFace.status`](/de/docs/Web/API/FontFace/status) wird auf `unloaded` gesetzt, wenn die Schriftartdefinition gültig ist, und auf `failed`, wenn sie ungültig ist.

### Hinzufügen einer Schriftart zu einem Dokument oder Worker

Schriftarten werden in der Regel dem Dokument- oder Worker-`FontFaceSet` hinzugefügt, um es dem Benutzeragenten zu ermöglichen, die Schriftart bei Bedarf automatisch zu laden. Sie _müssen_ hinzugefügt werden, damit die Schriftart zur Textdarstellung verwendet werden kann.

Der folgende Code zeigt, wie eine Schriftart dem Dokument hinzugefügt wird.

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

### Laden einer Schriftart

Eine Schriftart kann manuell geladen werden, indem [`FontFace.load()`](/de/docs/Web/API/FontFace/load) aufgerufen wird, oder durch Aufrufen von [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), wenn die Schriftart dem `FontFaceSet` hinzugefügt wurde.
Beachten Sie, dass das Laden einer bereits geladenen Schriftart keinen Effekt hat.

Der folgende Code zeigt, wie eine Schriftart definiert, den Dokumentenschriftarten hinzugefügt und dann das Schriftartenladen eingeleitet wird.

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

Beachten Sie, dass `font.load()` ein Versprechen (`promise`) zurückgibt, so dass wir den Abschluss des Schriftartenladens durch Verkettung mit `then` behandeln könnten.
Die Nutzung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in einigen Fällen besser sein, da sie nur aufgerufen wird, wenn alle Schriftarten im Dokument bereitgestellt wurden und das Layout abgeschlossen ist.

## Schnittstellen

- [`FontFace`](/de/docs/Web/API/FontFace)
  - : Repräsentiert eine einzelne verwendbare Schriftart.
- [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)
  - : Eine Schnittstelle, die Schriftarten lädt und deren Download-Status überprüft.
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
  - : Wird ausgelöst, wenn ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Beispiele

### Einfaches Schriftartenladen

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schriftart von Google Fonts geladen und zum Zeichnen von Text auf einer Leinwand verwendet wird.
Das Beispiel protokolliert auch den `Status` sofort nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert eine Leinwand zum Zeichnen und ein Textbereich zum Protokollieren.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst nehmen wir das Element, in dem wir protokollieren werden, und die Leinwand, die verwendet wird, um Text in der heruntergeladenen Schriftart anzuzeigen.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als nächstes definieren wir ein `FontFace`, das eine URL-Quelle einer Google-Schriftart hat, und fügen es `document.fonts` hinzu.
Wir protokollieren dann den Schriftzustand, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die [`FontFace.load()`](/de/docs/Web/API/FontFace/load)-Methode auf, um die Schriftart zu laden, und warten auf das zurückgegebene Versprechen.
Sobald das Versprechen erfüllt ist, protokollieren wir den geladenen Status (der `loaded` sein sollte) und zeichnen Text in der geladenen Schriftart auf die Leinwand.

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

Beachten Sie, dass wir auch auf das Versprechen warten könnten, das von der [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded)-Eigenschaft oder auf [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegeben wird.

#### Ergebnis

Das Ergebnis wird unten gezeigt.
Es sollte den Namen der Schriftart, die auf der Leinwand gezeichnet ist, und ein Protokoll über den Ladezustand vor und nach dem Laden zeigen.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftartenladen mit Ereignissen

Dieses Beispiel ähnelt dem vorherigen, verwendet jedoch [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load), um die Schriftart zu laden.
Es zeigt auch, wie man auf Schriftartenladeereignisse reagiert.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der folgende Code definiert einen Leinwand-Kontext zum Zeichnen von Text, definiert eine Schriftart und fügt sie dem Dokumentenschriftensatz hinzu.

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

Als nächstes verwenden wir `load()` auf dem Schriftensatz, um die Schriftart zu laden und geben an, welche der Schriftarten geladen werden sollen.
Die Methode gibt ein {{jsxref("Promise")}} zurück.
Wenn das Versprechen erfüllt ist, verwenden wir die Schriftart, um etwas Text zu zeichnen.
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

Anstatt auf ein Versprechen zu warten, könnten wir auch Ereignisse verwenden, um den Schriftartenladevorgang zu verfolgen.
Der folgende Code hört auf die `loading`- und `loadingerror`-Ereignisse und protokolliert die Anzahl der Schriftarten in jedem Fall.
Im `loadingdone`-Ereignislistener iterieren wir zusätzlich durch die Schriftarten und protokollieren die Familiennamen.

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

Der letzte Codeabschnitt demonstriert, wie Sie den Abschluss des Schriftartenladens überwachen können, indem Sie das Versprechen verwenden, das von [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) zurückgegeben wird.
Im Gegensatz zu den anderen Mechanismen wird dies zurückgegeben, wenn alle im Dokument definierten Schriftarten heruntergeladen und das Layout abgeschlossen ist.

Wenn das Versprechen erfüllt ist, iterieren wir die Werte in den Schriftarten des Dokuments.

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

Die Ausgabe unten zeigt den in der "Oxygen"-Schriftart geschriebenen Text.
Dies zeigt auch das Protokollieren der Ereignisse und wenn das Versprechen, das von `document.fonts.ready` zurückgegeben wird, erfüllt ist.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
