---
title: "Element: getAnimations() Methode"
short-title: getAnimations()
slug: Web/API/Element/getAnimations
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Web Animations")}}

Die Methode `getAnimations()` des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die dieses Element betreffen oder in Zukunft betreffen sollen.
Optional kann sie [`Animation`](/de/docs/Web/API/Animation)-Objekte entweder für Nachkommen-Elemente und deren [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) oder nur für das angegebene Pseudoelement zurückgeben.

> [!NOTE]
> Dieses Array umfasst [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) und [Web-Animationen](/de/docs/Web/API/Web_Animations_API).

## Syntax

```js-nolint
getAnimations()
getAnimations(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `subtree`
      - : Ein boolescher Wert, der, wenn `true`, dazu führt, dass auch Animationen zurückgegeben werden, die Nachkommen von _Element_ anvisieren.
        Dazu gehören Animationen, die alle CSS-[Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) betreffen, die an _Element_ oder einen seiner Nachkommen angefügt sind.
        Standardwert ist `false`.
    - `pseudoElement`
      - : Ein String, der ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) spezifiziert, das als Ziel-Element verwendet wird, wie z.B. [`::after`](/de/docs/Web/CSS/Reference/Selectors/::after).

    Beachten Sie, dass die Angabe von sowohl `pseudoElement` als auch `subtree` dem alleinigen Spezifizieren von `pseudoElement` entspricht.

### Rückgabewert

Ein {{jsxref("Array")}} von [`Animation`](/de/docs/Web/API/Animation)-Objekten, von denen jedes eine Animation repräsentiert, die derzeit auf das [`Element`](/de/docs/Web/API/Element) abzielt.

Wenn der Parameter `{ subtree: true }` angegeben wird, umfasst der zurückgegebene Wert auch Animationsobjekte, die auf Nachkommen-Elemente abzielen, einschließlich Pseudoelementen.
Wenn `options.pseudoElement` angegeben ist, umfasst der Rückgabewert nur die Animationsobjekte, die mit dem ausgewählten Pseudoelement übereinstimmen.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ein ungültiges Pseudoelement wurde im [`options.pseudoElement`](#pseudoelement)-Parameter übergeben.

## Beispiele

### Warten auf alle Animationen eines Elements und seiner Nachkommen

Der folgende Code-Schnipsel wartet darauf, dass alle Animationen auf `elem` und seinen Nachkommen beendet sind, bevor das Element aus dem Dokument entfernt wird.

```js
Promise.all(
  elem.getAnimations({ subtree: true }).map((animation) => animation.finished),
).then(() => elem.remove());
```

### Holen Sie sich Animationen für ein Pseudoelement-Ziel

Dieses Beispiel zeigt einen Fortschrittsbalken mit einem Pseudoelement.
Es nutzt `getAnimations()`, um die Animationen für das Pseudoelement zurückzugeben, startet diese und entfernt dann den Fortschrittsbalken, sobald die Animation abgeschlossen ist.

Beachten Sie, dass der Code einen Fallback-Ansatz verwendet, um die Animationen zu erhalten, falls die `pseudoElement`-Option nicht unterstützt wird.
Es gibt auch versteckten Code, um einen "Neustart"-Button anzuzeigen.

#### HTML

```html
<div class="progress-bar" id="bar"></div>
```

#### CSS

Das CSS stylt das Fortschrittsbalken-Element so, dass es sich über die Breite seines Containers in 3 Sekunden hinweg bewegt.
Die Animation ist anfänglich pausiert, damit wir sie in JavaScript starten können.

```css
.progress-bar {
  width: 100%;
  height: 20px;
  background: #eeeeee;
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

Zuerst definieren wir eine Funktion, um die Animationen zu erhalten, die einem bestimmten Element und Pseudoelement zugeordnet sind.
Sie ruft `getAnimations()` mit der [`pseudoElement`](#pseudoelement)-Option auf, und falls dies keine Animationen zurückgibt, wird auf das Filtern der Animationen über [`subtree`](#subtree) zurückgegriffen.

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

Wir verwenden diese Funktion, um alle Animationen zu bekommen, die mit dem Fortschrittsbalken-Pseudoelement verbunden sind.
Der Code durchläuft die Animationen, um sie zu starten, und entfernt dann den Fortschrittsbalken, wenn alle Animationen abgeschlossen sind.
Beachten Sie, dass wir den Code in `requestAnimationFrame()` ausführen, um sicherzustellen, dass die Animation bereit ist, bevor unser JavaScript ausgeführt wird.

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

Der Balken sollte sich über die Breite seines Containers bewegen und dann verschwinden.
Sie können ihn neu starten, indem Sie den "Neustart"-Button drücken.

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
