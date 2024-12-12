---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: 2d78f625fc7f7cd92ac94e8d9198c7b2d6001eac
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Ink-API ermöglicht es Browsern, direkt verfügbare Betriebssystem-Kompositionen zu nutzen, wenn Striche in einer Zeichnungsanwendung gezeichnet werden, wodurch die Latenz reduziert und die Leistung gesteigert wird.

## Konzepte und Verwendung

Das Zeichnen im Web bezieht sich auf App-Funktionen, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwenden, um einen gleichmäßigen Stiftstrich zu zeichnen — zum Beispiel eine Zeichnungs-App oder eine Signaturfunktion für Dokumente.

Pointer Events werden normalerweise zuerst an den Browserprozess gesendet, der diese Ereignisse dann an die JavaScript-Ereignisschleife weiterleitet, um die zugehörigen Handler-Funktionen auszuführen und das Ergebnis in der App darzustellen. Die Zeitverzögerung zwischen Beginn und Ende dieses Prozesses kann erheblich sein, was zu einer Latenz zwischen dem Beginn der Zeichnung durch den Nutzer (zum Beispiel mit einem Stift oder einer Maus) und der Darstellung des Strichs auf dem Bildschirm führt.

Die Ink-API reduziert diese Latenz erheblich, indem sie es Browsern ermöglicht, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo möglich, übergeben Browser solche Rendering-Anweisungen direkt an Betriebssystem-Kompositionen. Wenn das zugrunde liegende Betriebssystem keinen spezialisierten Kompositor zur Verfügung hat, verwenden Browser ihren eigenen optimierten Rendering-Code. Dies ist nicht so leistungsfähig wie ein Kompositor, bietet aber dennoch einige Verbesserungen.

> [!NOTE]
> Kompositoren sind Teil der Rendering-Technik, die die Benutzeroberfläche im Browser oder Betriebssystem auf den Bildschirm zeichnet. Siehe [Einblick in moderne Webbrowser (Teil 3)](https://developer.chrome.com/blog/inside-browser-part3/) für einige interessante Einblicke, wie ein Kompositor innerhalb eines Webbrowsers funktioniert.

Der Einstiegspunkt ist die [`Navigator.ink`](/de/docs/Web/API/Navigator/ink)-Eigenschaft, die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter)-Methode gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz eines [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekts erfüllt wird. Dies weist den Kompositor des Betriebssystems an, Tintenstriche zwischen Pointer-Event-Dispatches im jeweils nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink) {{Experimental_Inline}}
  - : Bietet Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte, die von der Anwendung zum Rendern der Striche verwendet werden können.
- [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) {{Experimental_Inline}}
  - : Weist den Betriebssystem-Kompositor an, Tintenstriche zwischen Pointer-Event-Dispatches zu rendern.

### Erweiterungen anderer Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf eine 2D-Leinwand. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben die Leinwand als Präsentationsbereich, den es übernehmen soll, und speichern das zurückgegebene Versprechen in der Variable `presenter`.

Später wird im `pointermove`-Ereignis-Listener die neue Position des Trailheads jedes Mal auf die Leinwand gezeichnet, wenn das Ereignis ausgelöst wird. Darüber hinaus wird die Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekts aufgerufen, das zurückgegeben wird, wenn das `presenter`-Versprechen erfüllt wird; diesem wird übergeben:

- Das letzte vertrauenswürdige Pointer-Event, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt mit Farbe und Durchmessereinstellungen.

Das Ergebnis ist, dass eine delegierte Tintenlinie im Namen der App im angegebenen Stil vor dem Standard-Browser-Rendering gezeichnet wird, bis das nächste Mal ein `pointermove`-Ereignis empfangen wird.

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

- [Verbesserung des Zeichnens im Web](https://blogs.windows.com/msedgedev/2021/08/18/enhancing-inking-on-the-web/)
