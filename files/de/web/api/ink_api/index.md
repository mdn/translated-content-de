---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Ink API erlaubt es Browsern, direkt verfügbare Betriebssystem-kompositoren beim Zeichnen von Strichen in einer Inking-App-Funktion zu nutzen, wodurch die Latenz verringert und die Leistung erhöht wird.

## Konzepte und Nutzung

Inking im Web bezieht sich auf App-Funktionen, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwenden, um einen glatten Strich zu zeichnen — zum Beispiel eine Zeichen-App oder eine Dokumentenunterzeichnungsfunktion.

Pointer Events werden normalerweise zuerst an den Browser-Prozess gesendet, der diese Ereignisse dann an die JavaScript-Ereignisschleife weiterleitet, um die zugehörigen Handler-Funktionen auszuführen und das Ergebnis in der App darzustellen. Die zeitliche Verzögerung zwischen dem Beginn und dem Ende dieses Prozesses kann erheblich sein, was zu einer Latenz führt, bis vom Benutzer initiierte Zeichnungen (zum Beispiel mit einem Stift oder einer Maus) auf dem Bildschirm erscheinen.

Die Ink API reduziert diese Latenz erheblich, indem sie es Browsern erlaubt, die JavaScript-Ereignisschleife komplett zu umgehen. Wo immer möglich, geben Browser solche Rendering-Anweisungen direkt an Betriebssystem-kompositoren weiter. Sollte das zugrundeliegende Betriebssystem keinen spezialisierten Betriebssystem-Kompositor für diesen Zweck bereitstellen, verwenden Browser ihren eigenen optimierten Rendering-Code. Dies ist nicht so leistungsstark wie ein Kompositor, bietet jedoch immer noch einige Verbesserungen.

> [!NOTE]
> Kompositore sind Teil der Rendering-Technik, die die Benutzeroberfläche im Browser oder Betriebssystem auf den Bildschirm zeichnet. Siehe [Einblick in moderne Webbrowser (Teil 3)](https://developer.chrome.com/blog/inside-browser-part3/) für einige interessante Einblicke, wie ein Kompositor in einem Webbrowser funktioniert.

Der Einstiegspunkt ist die [`Navigator.ink`](/de/docs/Web/API/Navigator/ink)-Eigenschaft, die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz eines [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekts erfüllt wird. Dies weist den Betriebssystem-Kompositor an, Tintenstriche zwischen den Pointer-Event-Dispatches in jedem Fall im nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink)
  - : Bietet Zugriff auf [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekte, die die Anwendung zur Darstellung der Striche verwenden kann.
- [`InkPresenter`](/de/docs/Web/API/InkPresenter)
  - : Weist den Betriebssystem-Kompositor an, Tintenstriche zwischen den Pointer-Event-Dispatches zu rendern.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben das Canvas als Präsentationsbereich, um sich darum zu kümmern, und speichern das zurückgegebene Versprechen in der `presenter`-Variablen.

Später, im `pointermove`-Ereignislistener, wird die neue Position des Spurkopfes jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird die [`InkPresenter`](/de/docs/Web/API/InkPresenter)-Objekt, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird, mit seiner [`updateInkTrailStartPoint()`](/de/docs/Web/API/InkPresenter/updateInkTrailStartPoint)-Methode aufgerufen; diese wird übergeben:

- Das letzte vertrauenswürdige Pointer-Ereignis, das den Darstellungspunkt für das aktuelle Frame darstellt.
- Ein `style`-Objekt, das Farbe und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie im Voraus vor der Standard-Browser-Darstellung im Namen der App in dem angegebenen Stil gezeichnet wird, bis sie das nächste Mal ein `pointermove`-Ereignis erhält.

#### HTML

```html
<canvas id="canvas"></canvas>
<div id="div">Delegated ink trail should match the color of this div.</div>
```

#### CSS

```css
div {
  background-color: rgb(0 255 0 / 100%);
  position: fixed;
  top: 1rem;
  left: 1rem;
}
```

#### JavaScript

```js
const ctx = canvas.getContext("2d");
const presenter = navigator.ink.requestPresenter({ presentationArea: canvas });
let move_cnt = 0;
let style = { color: "rgb(0 255 0 / 100%)", diameter: 10 };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

canvas.addEventListener("pointermove", async (evt) => {
  const pointSize = 10;
  ctx.fillStyle = style.color;
  ctx.fillRect(evt.pageX, evt.pageY, pointSize, pointSize);
  if (move_cnt == 20) {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);

    style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 60%)`;
  }
  move_cnt += 1;
  await presenter.updateInkTrailStartPoint(evt, style);
});

window.addEventListener("pointerdown", () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

#### Ergebnis

{{EmbedLiveSample("Drawing an ink trail")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Enhancing Inking on the Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
