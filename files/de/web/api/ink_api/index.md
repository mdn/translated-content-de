---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Ink-API ermöglicht es Browsern, direkt auf verfügbare OS-Level-Kompositoren zuzugreifen, wenn sie Pinselstriche in einer Zeichen-App-Funktion zeichnen, wodurch die Latenz verringert und die Leistung erhöht wird.

## Konzepte und Anwendung

Unter Inking im Web versteht man App-Funktionen, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwenden, um einen glatten Pinselstrich zu zeichnen — zum Beispiel eine Zeichen-App oder eine Dokumentensignatur-Funktion.

Zeigerereignisse werden normalerweise zuerst an den Browserprozess gesendet, der diese Ereignisse dann an die JavaScript-Ereignisschleife weiterleitet, um die zugehörigen Handler-Funktionen auszuführen und das Ergebnis in der App darzustellen. Die zeitliche Verzögerung zwischen dem Start und dem Ende dieses Prozesses kann erheblich sein, was zu einer Latenz zwischen der Benutzeraktion (z.B. mit einem Stylus oder einer Maus) und der Darstellung des Strichs auf dem Bildschirm führt.

Die Ink-API reduziert diese Latenz erheblich, indem sie es Browsern ermöglicht, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo möglich, leiten Browser solche Rendering-Anweisungen direkt an OS-Level-Kompositoren weiter. Wenn das zugrundeliegende Betriebssystem keinen spezialisierten OS-Level-Kompositor für diesen Zweck hat, verwenden Browser ihren eigenen optimierten Rendering-Code. Das ist nicht so leistungsstark wie ein Kompositor, bietet aber dennoch einige Verbesserungen.

> [!NOTE]
> Kompositoren sind Teil der Rendering-Maschinerie, die die Benutzeroberfläche in einem Browser oder Betriebssystem auf dem Bildschirm zeichnet. Siehe [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) für einige interessante Einblicke, wie ein Kompositor innerhalb eines Webbrowsers funktioniert.

Der Einstiegspunkt ist die [`Navigator.ink`](/de/docs/Web/API/Navigator/ink)-Eigenschaft, die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) gibt ein {{jsxref("Promise")}} zurück, das mit einer [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objektinstanz erfüllt wird. Dies weist den OS-Level-Kompositor an, Tintenstriche zwischen den Zeigerereignis-Dispatches im jeweils nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink) {{Experimental_Inline}}
  - : Bietet Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte, die von der Anwendung zum Rendern der Striche verwendet werden können.
- [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) {{Experimental_Inline}}
  - : Weist den OS-Level-Kompositor an, Tintenstriche zwischen den Zeigerereignis-Dispatches zu rendern.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Spur auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben dabei die Leinwand als Präsentationsbereich, um den es sich kümmern soll, und speichern das zurückgegebene Versprechen in der Variablen `presenter`.

Später, im `pointermove`-Ereignis-Listener, wird die neue Position des Trailheads jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Zusätzlich wird das [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt, das zurückgegeben wird, wenn das `presenter`-Promise erfüllt wird, mit seiner Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) aufgerufen; es wird übergeben:

- Das letzte vertrauenswürdige Zeigerereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt mit Farb- und Durchmessereinstellungen.

Das Ergebnis ist, dass eine delegierte Tintentrail im voraus der Standard-Browser-Darstellung im Namen der App im angegebenen Stil gezeichnet wird, bis zum nächsten Mal ein `pointermove`-Ereignis empfangen wird.

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
  if (move_cnt === 20) {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);

    style = { color: `rgb(${r} ${g} ${b} / 100%)`, diameter: 10 };
    move_cnt = 0;
    document.getElementById("div").style.backgroundColor =
      `rgb(${r} ${g} ${b} / 60%)`;
  }
  move_cnt += 1;
  (await presenter).updateInkTrailStartPoint(evt, style);
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
