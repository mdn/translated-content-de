---
title: CSSMathClamp
slug: Web/API/CSSMathClamp
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSMathClamp`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert die CSS-Funktion {{CSSXref("clamp","clamp()")}}.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSMathClamp()`](/de/docs/Web/API/CSSMathClamp/CSSMathClamp)
  - : Erstellt ein neues `CSSMathClamp`-Objekt.

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

- [`CSSMathClamp.lower`](/de/docs/Web/API/CSSMathClamp/lower) {{readonlyinline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück, das den minimalen Wert enthält.
- [`CSSMathClamp.value`](/de/docs/Web/API/CSSMathClamp/value) {{readonlyinline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück, das den bevorzugten Wert enthält.
- [`CSSMathClamp.upper`](/de/docs/Web/API/CSSMathClamp/upper) {{readonlyinline}}
  - : Gibt ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt zurück, das den oberen Wert enthält.

## Statische Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)._

## Beispiele

### Untersuchen eines begrenzten Werts

In diesem Beispiel werden drei Bereichsregler verwendet, um die `lower`, `preferred` und `upper` Werte eines `CSSMathClamp` festzulegen, und dann auf die Breite eines Kastens mittels [`attributeStyleMap.set()`](/de/docs/Web/API/StylePropertyMap/set) angewendet.
Dies ermöglicht Ihnen, die Auswirkungen der Änderung des Bereichs auf den begrenzten Wert der `width` zu sehen.

Das Ziehen eines Schiebereglers ändert, was `lower`, `value`, und `upper` melden, weil sie immer die drei an die `CSSMathClamp` übergebenen Operanden spiegeln — es ist zu beachten, dass `value` in `vw` angegeben wird, nicht die Pixel, die auf dem Schieberegler angezeigt werden. Die Ausgabe neben dem bevorzugten Schieberegler zeigt sowohl den Pixelwert als auch das tatsächlich an den Konstruktor übergebene `vw`-Äquivalent, sodass die Umwandlung sichtbar bleibt. Die tatsächlich gerenderte Breite des Kastens hingegen ist das Ergebnis des Clamping dieses `vw`-Werts zwischen den beiden Pixelgrenzen und kann erheblich von `value` selbst abweichen — zum Beispiel, wenn der bevorzugte Schieberegler unter den unteren oder über den oberen Schieberegler gezogen wird.

#### HTML

Zuerst definieren wir ein {{htmlelement("div")}}-Element für den skalierbaren Kasten, drei Schieberegler, um die minimalen, bevorzugten und oberen Werte seiner Breite festzulegen, und {{htmlelement("output")}}-Elemente, um die Schiebereglerwerte numerisch anzuzeigen.
Alle drei Schieberegler teilen denselben Bereich von 0 bis 400 Pixel, sodass ihre Positionen direkt vergleichbar sind.
Wir setzen die Anfangswerte so, dass `lower < pref < upper`.

```html
<div id="box"></div>
<div class="controls">
  <label for="lower">Lower (px)</label>
  <input id="lower" type="range" min="0" max="400" value="50" />
  <output for="lower" id="lowerOut"></output>

  <label for="pref">Preferred (px)</label>
  <input id="pref" type="range" min="0" max="400" value="180" />
  <output for="pref" id="prefOut"></output>

  <label for="upper">Upper (px)</label>
  <input id="upper" type="range" min="0" max="400" value="350" />
  <output for="upper" id="upperOut"></output>
</div>
<pre id="log"></pre>
```

Am Ende definieren wir ein `#log`-Element, um Informationen über die Kastenbreite auszugeben.

#### CSS

Das CSS legt die visuellen Eigenschaften und die Ausrichtung des Kastens, der Schieberegler und anderer Elemente fest.

```css
#box {
  height: 50px;
  background: rebeccapurple;
}

.controls {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem 1rem;
  max-width: 400px;
}

.controls output {
  font-family: monospace;
  text-align: right;
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Zuerst erstellen wir Variablen, um den Kasten, die Schieberegler und die Ausgabeelemente zu referenzieren.

```js
const box = document.querySelector("#box");
const lowerInput = document.querySelector("#lower");
const prefInput = document.querySelector("#pref");
const upperInput = document.querySelector("#upper");
const lowerOut = document.querySelector("#lowerOut");
const prefOut = document.querySelector("#prefOut");
const upperOut = document.querySelector("#upperOut");
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Dann rufen wir die `update()`-Funktion auf, um den Kasten und die Ausgabeelemente basierend auf dem Schiebereglerwert zu aktualisieren.
Wir richten einen Listener ein, damit die Funktion aufgerufen wird, wann immer sich die Schiebereglerpositionen ändern.

```js
[lowerInput, prefInput, upperInput].forEach((el) =>
  el.addEventListener("input", update),
);
update();
```

Die `update()`-Funktion wird unten gezeigt.
Diese protokolliert die Werte der Schieberegler und verwendet sie bei der Erstellung eines `CSSMathClamp`, der anschließend auf das `width`-Attribut des Kastens gesetzt wird.
Die Attributstile des Kastens werden dann mittels [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) gelesen, und die abgerufenen Werte von `width` werden ebenfalls protokolliert, zusammen mit der gerenderten Breite des Kastens.

Eine Komplexität im Code besteht darin, dass während `lower` und `upper` als Pixel an den `CSSMathClamp()`-Konstruktor übergeben werden, die genau ihren Schiebereglern entsprechen, der Pixelwert von `preferred` zuerst in `vw` (Viewport-Breite) Einheiten umgewandelt wird.
Dies wurde getan, weil, wenn alle drei Operanden absolute Längen waren (zum Beispiel alle in Pixeln), der Browser `clamp()` auf eine einzelne feste Zahl herunterlösen könnte, die dann als [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückgelesen wird, anstatt als `CSSMathClamp`.
Die Umwandlung von `preferred` in eine relative Einheit wie `vw` bedeutet, dass der Browser den Ausdruck bis zum Layout nicht auflösen kann, sodass er den Wert als einen live `CSSMathClamp` mit allen drei intakten Operanden behält.

```js
function update() {
  logElement.innerText = "";

  // The preferred slider uses the same 0-400px scale as lower and upper,
  // so its value is converted to vw before being passed to CSSMathClamp.
  const prefVw = (prefInput.value / window.innerWidth) * 100;
  lowerOut.textContent = `${lowerInput.value}px`;
  prefOut.textContent = `${prefInput.value}px (~${prefVw.toFixed(1)}vw)`;
  upperOut.textContent = `${upperInput.value}px`;

  try {
    const clampValue = new CSSMathClamp(
      CSS.px(lowerInput.value),
      CSS.vw(prefVw),
      CSS.px(upperInput.value),
    );
    box.attributeStyleMap.set("width", clampValue);
    const widthClamp = box.attributeStyleMap.get("width");
    const valuePx = (widthClamp.value.value / 100) * window.innerWidth;
    log(`type: ${widthClamp.constructor.name}`);
    log(`lower: ${widthClamp.lower}`);
    log(`value: ${widthClamp.value} (~${valuePx.toFixed(1)}px)`);
    log(`upper: ${widthClamp.upper}`);
    log(`rendered width: ${getComputedStyle(box).width}`);
  } catch (e) {
    log(`Error: ${e.message}`);
  }
}
```

#### Ergebnis

Ziehen Sie die Schieberegler, um zu sehen, wie `lower`, `value` und `upper` immer die Positionen der Schieberegler entsprechen, während die gerenderte Breite zwischen `lower` und `upper` beschränkt wird.

{{EmbedLiveSample("Inspecting a clamped value", 300, 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
