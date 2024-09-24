---
title: CSS-Schriftartenlade-API
slug: Web/API/CSS_Font_Loading_API
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("CSS Font Loading API")}}

Die CSS-Schriftartenlade-API bietet Ereignisse und Schnittstellen zum dynamischen Laden von Schriftartenressourcen.

> [!NOTE]
> Diese Funktion ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar (`self.fonts` bietet Zugriff auf {{domxref('FontFaceSet')}}).

## Konzepte und Verwendung

CSS-Stylesheets ermöglichen es Autoren, benutzerdefinierte Schriftarten zu verwenden, indem sie Schriftarten zum Herunterladen mit der [`@font-face`](/de/docs/Web/CSS/@font-face)-Regel spezifizieren und sie mit der [`font-family`](/de/docs/Web/CSS/font-family)-Eigenschaft auf Elemente anwenden. Der Zeitpunkt, zu dem eine Schriftart heruntergeladen wird, wird durch den User-Agent gesteuert. Die meisten Agenten laden Schriftarten erst, wenn sie zum ersten Mal benötigt werden, was zu einer wahrnehmbaren Verzögerung führen kann.

Die CSS-Schriftartenlade-API überwindet dieses Problem, indem sie es Autoren ermöglicht, zu steuern und zu verfolgen, wann eine Schriftart abgerufen und geladen wird und wann sie dem Schriftensatz des Dokuments oder des Workers hinzugefügt wird. Das Hinzufügen einer Schriftart zum Dokument- oder Worker-Schriftensatz erlaubt es dem User-Agent, die zugehörige Schriftartenressource bei Bedarf automatisch abzurufen und zu laden. Eine Schriftart kann entweder vor oder nach ihrer Hinzufügung zu einem FontFace-Set geladen werden, muss jedoch hinzugefügt werden, bevor sie zum Zeichnen verwendet werden kann.

Schriftarten werden in {{domxref('FontFace')}}-Objekten definiert, die eine Binär- oder URL-Schriftartquelle und andere Schriftarteigenschaften auf ähnliche Weise wie die CSS-[`@font-face`](/de/docs/Web/CSS/@font-face)-Regel spezifizieren. `FontFace`-Objekte werden dem Dokument oder Worker {{domxref('FontFaceSet')}} mithilfe von {{domxref("Document.fonts")}} beziehungsweise {{domxref("WorkerGlobalScope.fonts")}} hinzugefügt. Autoren können das Herunterladen von Schriftarten mithilfe von `FontFace` oder `FontFaceSet` auslösen und das Laden überwachen. `FontFaceSet` kann zusätzlich verwendet werden, um festzustellen, wann alle für eine Seite benötigten Schriftarten geladen wurden und das Dokumentlayout abgeschlossen ist.

Die Eigenschaft {{domxref('FontFace.status')}} gibt den Ladezustand der Schriftart an: `unloaded`, `loading`, `loaded` oder `failed`. Dieser Status ist initial `unloaded`. Er wird auf `loading` gesetzt, wenn die Datei heruntergeladen oder die Schriftartdaten verarbeitet werden, und auf `failed`, wenn die Schriftartdefinition ungültig ist oder die Schriftartdaten nicht geladen werden können. Der Status wird auf `loaded` gesetzt, wenn die Schriftartdaten erfolgreich abgerufen (falls erforderlich) und geladen wurden.

### Definition einer Schriftart

Schriftarten werden mithilfe des [`FontFace`-Konstruktors](/de/docs/Web/API/FontFace/FontFace) erstellt, der als Parameter die Schriftfamilie, die Schriftquelle und optionale Deskriptoren annimmt. Das Format und die Grammatik dieser Argumente sind identisch mit der entsprechenden [`@font-face`](/de/docs/Web/CSS/@font-face)-Definition.

Die Schriftquelle kann entweder Binärdaten in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine Schriftressource an einer URL sein. Eine typische Schriftartdefinition unter Verwendung einer URL-Quelle könnte wie unten gezeigt aussehen. Beachten Sie, dass die `url()`-Funktion für URL-Schriftartenquellen erforderlich ist.

```js
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> [!NOTE]
> Wie bei `@font-face` stellen einige Deskriptoren die erwarteten Daten in den Schriftartdaten dar und werden für die Schriftartenübereinstimmung verwendet, während andere tatsächlich Eigenschaften der generierten Schriftart festlegen/definieren. Zum Beispiel weist das Setzen des `style` auf "italic" darauf hin, dass die Datei kursiv gedruckte Schriftarten enthält; es liegt an den Autoren, eine Datei anzugeben, für die dies zutrifft.

Schriftarten mit einer _binären Quelle_ werden automatisch geladen, wenn die Schriftartdefinition gültig ist und die Schriftartdaten geladen werden können — {{domxref('FontFace.status')}} wird bei Erfolg auf `loaded` und andernfalls auf `failed` gesetzt. Schriftarten mit einer URL-Quelle werden validiert, aber nicht automatisch geladen — {{domxref('FontFace.status')}} wird auf `unloaded` gesetzt, wenn die Schriftartdefinition gültig ist, und andernfalls auf `failed`.

### Hinzufügen einer Schriftart zu einem Dokument oder Worker

Schriftarten werden normalerweise zum Dokument- oder Worker-{{domxref('FontFaceSet')}} hinzugefügt, damit der User-Agent die Schriftart bei Bedarf automatisch laden kann, und _müssen_ hinzugefügt werden, damit die Schriftart zum Rendern von Text verwendet werden kann.

Der untenstehende Code zeigt, wie eine Schriftart zum Dokument hinzugefügt wird.

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

Eine Schriftart kann manuell durch Aufrufen von {{domxref('FontFace.load()')}}, oder durch Aufrufen von {{domxref('FontFaceSet.load()')}} geladen werden, wenn die Schriftart zum `FontFaceSet` hinzugefügt wurde. Beachten Sie, dass der Versuch, eine bereits geladene Schriftart zu laden, keine Auswirkungen hat.

Der folgende Code zeigt, wie man eine Schriftart definiert, sie zu den Dokumentenschriftarten hinzufügt und dann eine Schriftartladeaktion initiiert.

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

Beachten Sie, dass `font.load()` ein Versprechen zurückgibt, sodass wir das Abschließen des Schriftartenladens durch Verkettung von `then` danach hätten behandeln können. Die Verwendung von [`document.fonts.ready`](/de/docs/Web/API/FontFaceSet/ready) kann in einigen Fällen besser sein, da es nur aufgerufen wird, wenn alle Schriftarten im Dokument gelöst wurden und das Layout abgeschlossen ist.

## Schnittstellen

- {{domxref('FontFace')}}
  - : Stellt eine einzelne nutzbare Schriftart dar.
- {{domxref('FontFaceSet')}}
  - : Eine Schnittstelle zum Laden von Schriftarten und Überprüfen ihres Downloadstatus.
- {{domxref('FontFaceSetLoadEvent')}}
  - : Wird immer dann ausgelöst, wenn ein {{domxref("FontFaceSet")}} geladen wird.

## Beispiele

### Einfaches Schriftartenladen

Dies ist ein sehr einfaches Beispiel, das zeigt, wie eine Schriftart von Google Fonts geladen und verwendet wird, um Text auf eine Leinwand zu zeichnen. Das Beispiel protokolliert auch den `status` unmittelbar nach der Erstellung und nach dem Laden.

#### HTML

Dieser Code definiert eine Leinwand zum Zeichnen und ein Textfeld zum Protokollieren.

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

Zuerst holen wir uns das Element, auf das wir protokollieren werden, und die Leinwand, die verwendet wird, um Text in der heruntergeladenen Schriftart darzustellen.

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

Als nächstes definieren wir ein `FontFace`, das eine URL-Quelle aus einer Google-Schriftart hat und fügen es `document.fonts` hinzu. Wir protokollieren dann den Schriftstatus, der `unloaded` sein sollte.

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

Dann rufen wir die Methode {{domxref('FontFace.load()')}} auf, um die Schriftart zu laden und warten auf das zurückgegebene Versprechen. Sobald das Versprechen aufgelöst ist, protokollieren wir den geladenen Status (der `loaded` sein sollte) und zeichnen Text in der geladenen Schriftart auf die Leinwand.

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

Beachten Sie, dass wir auch auf das Versprechen warten könnten, das von der Eigenschaft {{domxref('FontFace.loaded')}} zurückgegeben wird, oder auf {{domxref('FontFaceSet.ready')}}.

#### Ergebnis

Das Ergebnis wird unten gezeigt. Es sollte den Name der Schriftart auf der Leinwand in der heruntergeladenen Schriftart zeigen und ein Protokoll, das den Ladezustand vor und nach dem Laden zeigt.

{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### Schriftartenladen mit Ereignissen

Dieses Beispiel ist dem vorherigen ähnlich, benutzt jedoch {{domxref('FontFaceSet.load()')}} zum Laden der Schriftart. Es demonstriert auch, wie Schriftartenladeereignisse überwacht werden können.

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

Der folgende Code definiert einen Leinwandkontext zum Zeichnen von Text, definiert eine Schriftart und fügt sie dem Dokumentenschriftensatz hinzu.

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

Als nächstes verwenden wir `load()` auf dem FontFaceSet, um die Schriftart zu laden, und spezifizieren, welche Schriftarten geladen werden sollen. Die Methode gibt ein {{jsxref("Promise")}} zurück. Wenn das Versprechen erfüllt wird, verwenden wir die Schriftart, um etwas Text zu zeichnen. Wenn es abgelehnt wird, wird der Fehler protokolliert.

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

Anstatt auf ein Versprechen zu warten, könnten wir auch Ereignisse verwenden, um den Schriftartenladevorgang zu überwachen. Der untenstehende Code hört auf die `loading`- und `loadingerror`-Ereignisse und protokolliert die Anzahl der Schriftarten in jedem Fall. Im `loadingdone`-Ereignis-Listener iterieren wir zusätzlich durch die Schriftarten und protokollieren die Familiennamen.

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

Der letzte Codeabschnitt zeigt, wie Sie die Fertigstellung des Schriftartenladens mithilfe des von {{domxref('FontFaceSet.ready')}} zurückgegebenen Versprechens überwachen können. Anders als bei den anderen Mechanismen wird dies zurückgegeben, wenn alle im Dokument definierten Schriftarten heruntergeladen wurden und das Layout abgeschlossen ist.

Wenn das Versprechen erfüllt ist, durchlaufen wir die Werte in den Schriftarten des Dokuments.

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

Das untenstehende Ergebnis zeigt den in "Oxygen" Schriftart gezeichneten Text. Es zeigt auch das Protokollieren von den Ereignissen und wenn das Versprechen, das von `document.fonts.ready` zurückgegeben wird, erfüllt ist.

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
