---
title: Ink API
slug: Web/API/Ink_API
l10n:
  sourceCommit: 57aa2614c8f3b1b3f5c646262c8156afadcd63d8
---

{{DefaultAPISidebar("Ink API")}}{{SeeCompatTable}}

Die Ink API ermöglicht es Browsern, direkt verfügbare Kompositoren auf Betriebssystemebene beim Zeichnen von Stiftstrichen in einer Inking-App-Funktion zu nutzen, wodurch die Latenz verringert und die Leistung verbessert wird.

## Konzepte und Verwendung

Inking im Web bezieht sich auf App-Funktionen, die [Pointer Events](/de/docs/Web/API/Pointer_events) verwenden, um einen glatten Stiftstrich zu zeichnen — zum Beispiel eine Zeichen-App oder eine Dokumentensignatur-Funktion.

Pointer Events werden normalerweise zuerst an den Browser-Prozess gesendet, der diese Ereignisse dann an die JavaScript-Ereignisschleife weiterleitet, um die zugehörigen Handler-Funktionen auszuführen und das Ergebnis in der App darzustellen. Die Zeitverzögerung zwischen dem Beginn und dem Ende dieses Prozesses kann erheblich sein, was zu einer Latenz zwischen der Benutzereingabe (zum Beispiel mit einem Eingabestift oder einer Maus) und dem Erscheinen des Strichs auf dem Bildschirm führt.

Die Ink API verringert diese Latenz erheblich, indem sie Browsern ermöglicht, die JavaScript-Ereignisschleife vollständig zu umgehen. Wo immer möglich, übergeben Browser solche Rendering-Anweisungen direkt an Kompositoren auf Betriebssystemebene. Falls das zugrunde liegende Betriebssystem keinen spezialisierten Kompositor für diesen Zweck bereitstellt, verwenden Browser ihren eigenen optimierten Rendering-Code. Dies ist nicht so leistungsstark wie ein Kompositor, bietet jedoch dennoch einige Verbesserungen.

> [!NOTE]
> Kompositoren sind Teil der Rendering-Technik, die die Benutzeroberfläche in einem Browser oder Betriebssystem auf den Bildschirm zeichnet. Sehen Sie sich [Inside look at modern web browser (part 3)](https://developer.chrome.com/blog/inside-browser-part3/) an, um einige interessante Einblicke zu erhalten, wie ein Kompositor innerhalb eines Webbrowsers funktioniert.

Der Einstiegspunkt ist die [`Navigator.ink`](/de/docs/Web/API/Navigator/ink)-Eigenschaft, die ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurückgibt. Die Methode [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz des [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekts erfüllt wird. Dies weist den Kompositor auf Betriebssystemebene an, Tintenstriche zwischen Pointer-Ereignis-Dispatches im jeweils nächsten verfügbaren Frame zu rendern.

## Schnittstellen

- [`Ink`](/de/docs/Web/API/Ink) {{Experimental_Inline}}
  - : Bietet Zugriff auf [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekte, die von der Anwendung zum Rendern der Striche genutzt werden können.
- [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter) {{Experimental_Inline}}
  - : Weist den Kompositor auf Betriebssystemebene an, Tintenstriche zwischen Pointer-Ereignis-Dispatches zu rendern.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.ink`](/de/docs/Web/API/Navigator/ink) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`Ink`](/de/docs/Web/API/Ink)-Objekt für das aktuelle Dokument zurück.

## Beispiele

### Zeichnen einer Tintenlinie

In diesem Beispiel zeichnen wir eine Linie auf ein 2D-Canvas. Zu Beginn des Codes rufen wir [`Ink.requestPresenter()`](/de/docs/Web/API/Ink/requestPresenter) auf, übergeben dem Canvas den Präsentationsbereich, um den es sich kümmern soll, und speichern das zurückgegebene Promise in der Variablen `presenter`.

Später, im `pointermove`-Ereignis-Listener, wird die neue Position des Linienanfangs jedes Mal auf das Canvas gezeichnet, wenn das Ereignis ausgelöst wird. Darüber hinaus wird das [`DelegatedInkTrailPresenter`](/de/docs/Web/API/DelegatedInkTrailPresenter)-Objekt, das zurückgegeben wird, wenn das `presenter`-Promise erfüllt wird, mit seiner Methode [`updateInkTrailStartPoint()`](/de/docs/Web/API/DelegatedInkTrailPresenter/updateInkTrailStartPoint) aufgerufen; dieses erhält:

- Das letzte vertrauenswürdige Pointer-Ereignis, das den Rendering-Punkt für den aktuellen Frame darstellt.
- Ein `style`-Objekt, das Farbe und Durchmesser-Einstellungen enthält.

Das Ergebnis ist, dass eine delegierte Tintenlinie im Namen der App mit dem angegebenen Stil vor der Standard-Browser-Darstellung gezeichnet wird, bis das nächste Mal ein `pointermove`-Ereignis empfangen wird.

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
