---
title: "Element: getAnimations() Methode"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: 24e13993867fc8fd95d6112117b170595b015aee
---

{{APIRef("Web Animations")}}

Die `getAnimations()`-Methode des [`Element`](/de/docs/Web/API/Element) Interfaces gibt ein Array von allen [`Animation`](/de/docs/Web/API/Animation)-Objekten zurück, die dieses Element beeinflussen oder dies in Zukunft tun sollen.
Optional kann sie auch [`Animation`](/de/docs/Web/API/Animation)-Objekte entweder für Nachkommenelemente und deren [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) oder nur für das angegebene Pseudo-Element zurückgeben.

> [!NOTE]
> Dieses Array enthält [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `subtree`
      - : Ein boolescher Wert, der, wenn `true`, bewirkt, dass auch Animationen zurückgegeben werden, die auf Nachkommen von _Element_ abzielen.
        Dazu gehören Animationen, die sich auf beliebige CSS-[Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) beziehen, die _Element_ oder einem seiner Nachkommen angehängt sind.
        Standardmäßig `false`.
    - `pseudoElement`
      - : Ein String, der ein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) angibt, das das Ziel-Element sein soll, wie zum Beispiel [`::after`](/de/docs/Web/CSS/Reference/Selectors/::after).

    Beachten Sie, dass die Angabe sowohl von `pseudoElement` als auch von `subtree` gleichbedeutend ist mit der Angabe nur von `pseudoElement`.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation)-Objekten, die jeweils eine Animation darstellen, die das [`Element`](/de/docs/Web/API/Element) aktuell anvisiert.

Wenn der Parameter `{ subtree: true }` festgelegt ist, umfasst der zurückgegebene Wert auch Animationsobjekte, die auf Nachkommenelemente abzielen, einschließlich Pseudo-Elemente.
Wenn `options.pseudoElement` angegeben ist, enthält der Rückgabewert nur die Animationsobjekte, die mit dem ausgewählten Pseudo-Element übereinstimmen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein ungültiges Pseudo-Element wurde im Parameter [`options.pseudoElement`](#pseudoelement) übergeben.

## Beispiele

### Warten auf alle Animationen eines Elements und seiner Nachkommen

Der folgende Codeausschnitt wartet darauf, dass alle Animationen auf `elem` und seine Nachkommen beendet werden, bevor das Element aus dem Dokument entfernt wird.

```js
Promise.all(
  elem.getAnimations({ subtree: true }).map((animation) => animation.finished),
).then(() => elem.remove());
```

### Animationen für ein Pseudo-Element-Ziel abrufen

Dieses Beispiel zeigt eine Fortschrittsanzeige mit einem Pseudo-Element an.
Es verwendet `getAnimations()`, um die Animationen für das Pseudo-Element zurückzugeben, startet sie und entfernt dann die Fortschrittsanzeige, sobald die Animation abgeschlossen ist.

Beachten Sie, dass der Code einen Fallback-Ansatz verwendet, um die Animationen zu erhalten, falls die `pseudoElement`-Option nicht unterstützt wird.
Es gibt auch versteckten Code, um eine "Neustart"-Schaltfläche anzuzeigen.

#### HTML

```html
<div class="progress-bar" id="bar"></div>
```

#### CSS

Das CSS gestaltet das Fortschrittsbalkenelement, um innerhalb von 3 Sekunden über die Breite seines Containers zu animieren.
Die Animation ist anfangs pausiert, damit wir sie in JavaScript starten können.

```css
.progress-bar {
  width: 100%;
  height: 20px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar::after {
  content: "";
  display: block;
  height: 100%;
  width: 0%;
  background: #4f46e5;
  border-radius: 4px;
  animation: fill-progress 3s ease-in-out forwards paused;
}

@keyframes fill-progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
```

#### JavaScript

Zuerst definieren wir eine Funktion, um die mit einem bestimmten Element und Pseudo-Element verbundenen Animationen zu erhalten.
Sie ruft `getAnimations()` mit der Option [`pseudoElement`](#pseudoelement) auf, und falls das keine Animationen zurückgibt, wird auf das Filtern der Animationen zurückgegriffen, die durch [`subtree`](#subtree) zurückgegeben werden.

```js
function getAnimationsForPseudo(element, pseudo) {
  // Try the spec-compliant way first (Firefox)
  try {
    const anims = element.getAnimations({ pseudoElement: pseudo });
    // If it returned something, the option is supported, so return the result
    if (anims.length > 0) return anims;
  } catch (e) {
    // invalid selector etc
    return [];
  }

  // Fallback for browsers that only support subtree
  return element
    .getAnimations({ subtree: true })
    .filter((anim) => anim.effect?.pseudoElement === pseudo);
}
```

Wir verwenden diese Funktion, um alle Animationen abzurufen, die mit dem Fortschrittsbalken-Pseudo-Element verbunden sind.
Der Code iteriert durch die Animationen, um sie zu starten und entfernt den Fortschrittsbalken, wenn alle Animationen beendet sind.
Beachten Sie, dass wir den Code in `requestAnimationFrame()` ausführen, um sicherzustellen, dass die Animation bereit ist zu starten, bevor unser JavaScript ausgeführt wird.

```js
const bar = document.getElementById("bar");

requestAnimationFrame(() => {
  const anims = getAnimationsForPseudo(bar, "::after");
  anims.forEach((a) => a.play());
  Promise.all(anims.map((a) => a.finished)).then(() => bar.remove());
});
```

```html hidden
<button id="reset" type="button">Restart</button>
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

#### Ergebnis

Der Balken sollte über die Breite seines Containers fortschreiten und dann verschwinden.
Sie können ihn neu starten, indem Sie die "Neustart"-Schaltfläche drücken.

{{EmbedLiveSample("Get animations for a pseudo-element target", "100%", "50px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions)
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations) - Alle Animationen im Dokument abrufen
- [`Animation`](/de/docs/Web/API/Animation)
