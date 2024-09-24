---
title: Tinten-API
slug: Web/API/Ink_API
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Tinten-API ermöglicht es Browsern, direkt verfügbare Betriebssystem-Kompositoren zu verwenden, wenn sie Stiftstriche in einer Zeichenanwendung zeichnen, wodurch die Latenz reduziert und die Leistung gesteigert wird.

## Konzepte und Nutzung

Zeichnen im Web bezieht sich auf App-Funktionen, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwenden, um einen flüssigen Stiftstrich zu zeichnen — beispielsweise eine Zeichen-App oder eine Dokument-Signaturfunktion.

Pointer Events werden normalerweise zuerst an den Browser-Prozess gesendet, der diese Ereignisse dann an die JavaScript-Ereignisschleife weiterleitet, um die zugehörigen Handler-Funktionen auszuführen und das Ergebnis in der App darzustellen. Die Zeitverzögerung zwischen dem Start und dem Ende dieses Prozesses kann erheblich sein, was zu einer Latenz zwischen dem Beginn des Zeichnens durch den Benutzer (zum Beispiel mit einem Stift oder einer Maus) und dem Erscheinen des Striches auf dem Bildschirm führt.

Die Tinten-API reduziert diese Latenz erheblich, indem sie es Browsern ermöglicht, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo möglich, geben Browser solche Rendering-Anweisungen direkt an die Betriebssystem-Kompositoren weiter. Wenn das zugrunde liegende Betriebssystem keinen spezialisierten Betriebssystem-Kompositor für diesen Zweck hat, verwenden Browser ihren eigenen optimierten Rendering-Code. Dies ist nicht so leistungsfähig wie ein Kompositor, bietet aber dennoch einige Verbesserungen.

> [!NOTE]
> Kompositoren sind Teil der Rendering-Maschinerie, die die Benutzeroberfläche auf dem Bildschirm in einem Browser oder Betriebssystem zeichnet. Siehe [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) für interessante Einblicke darin, wie ein Kompositor innerhalb eines Webbrowsers funktioniert.

Der Einstiegspunkt ist die {{domxref("Navigator.ink")}}-Eigenschaft, die ein {{domxref("Ink")}}-Objekt für das aktuelle Dokument zurückgibt. Die Methode {{domxref("Ink.requestPresenter","Ink.requestPresenter()")}} gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("InkPresenter")}}-Objektinstanz erfüllt wird. Diese weist den Betriebssystem-Kompositor an, Tintenstriche zwischen den Pointer-Event-Aussendungen im jeweils nächsten verfügbaren Frame darzustellen.

## Schnittstellen

- {{domxref("Ink")}}
  - : Bietet Zugriff auf {{domxref("InkPresenter")}}-Objekte, die die Anwendung verwenden kann, um die Striche darzustellen.
- {{domxref("InkPresenter")}}
  - : Weist den Betriebssystem-Kompositor an, Tintenstriche zwischen den Pointer-Event-Aussendungen darzustellen.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.ink")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("Ink")}}-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen einer Tintenspur

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir {{domxref("Ink.requestPresenter()")}} auf, übergeben der Zeichenfläche den Präsentationsbereich, um den es sich kümmern soll, und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove`-Ereignislistener, wird die neue Position des Spurkopfes jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird beim Erfüllen des `presenter`-Versprechens das {{domxref("InkPresenter")}}-Objekt zurückgegeben, dessen {{domxref("InkPresenter.updateInkTrailStartPoint", "updateInkTrailStartPoint()")}}-Methode aufgerufen wird; diese erhält:

- Das letzte vertrauenswürdige Pointer-Ereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farbe und Durchmessereinstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenspur im Namen der App in dem angegebenen Stil vorausgezeichnet wird, bevor die Standard-Browser-Darstellung erfolgt, bis es erneut ein `pointermove`-Ereignis empfängt.

#### HTML

```html
<canvas id="canvas"></canvas>
<div id="div">Delegierte Tintenspur sollte die Farbe dieses Divs übernehmen.</div>
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
