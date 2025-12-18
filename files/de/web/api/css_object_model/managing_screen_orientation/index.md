---
title: Verwaltung der Bildschirmorientierung
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("Screen Orientation API")}}

Der Begriff _Bildschirmorientierung_ bezieht sich darauf, ob ein Browser-{{Glossary("Viewport", "Viewport")}} im Querformatmodus (d.h. die Breite des Viewports ist größer als seine Höhe) oder im Hochformatmodus (die Höhe des Viewports ist größer als seine Breite) ist.

CSS bietet die {{cssxref("@media/orientation")}} Medienabfrage, um das Layout basierend auf der Bildschirmorientierung anzupassen.

Die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) bietet eine programmatische JavaScript-API zur Arbeit mit der Bildschirmorientierung - einschließlich der Möglichkeit, den Viewport auf eine bestimmte Ausrichtung zu sperren.

## Layoutanpassung basierend auf der Orientierung

Einer der häufigsten Fälle für Orientierungsänderungen ist, wenn Sie das Layout Ihrer Inhalte basierend auf der Gerätorientierung überarbeiten möchten. Zum Beispiel möchten Sie vielleicht, dass eine Schaltflächenleiste entlang der längsten Dimension des Gerätdisplays verläuft. Mit einer Medienabfrage können Sie dies einfach und automatisch erreichen.

Hier ist ein Beispiel mit dem folgenden HTML-Code:

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec
  sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt
  leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut
  interdum tristique dapibus. Nullam quis malesuada est.
</p>
```

CSS nutzt die Orientierungs-Medienabfrage, um spezifische Stile basierend auf der Bildschirmorientierung zu handhaben.

```css
/* First let's define some common styles */

html,
body {
  width: 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font: 1em sans-serif;
  margin: 0;
  padding: 0.5em;
}

ul {
  list-style: none;

  font: 1em monospace;
  margin: 0;
  padding: 0.5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin: 0;
  padding: 0.5em;
  background: white;
}
```

Sobald wir einige allgemeine Stile haben, können wir einen Sonderfall für die Orientierung definieren.

```css
/* For portrait, we want the toolbar on top */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* For landscape, we want the toolbar stick on the left */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: 0.5em;
  }
}
```

Und hier ist das Ergebnis

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Hochformat</th>
      <th scope="col">Querformat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>
          {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 180, 350) }}
        </div>
      </td>
      <td>
        <div>
          {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 350, 180) }}
        </div>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die Orientierungs-Medienabfrage wird tatsächlich basierend auf der Orientierung des Browserfensters (oder iFrames) angewendet, nicht auf der Orientierung des Geräts.

## Sperren der Bildschirmorientierung

Einige Geräte (hauptsächlich mobile Geräte) können die Bildschirmorientierung dynamisch basierend auf ihrer eigenen Ausrichtung ändern, um sicherzustellen, dass der Nutzer immer lesen kann, was auf dem Bildschirm steht. Während dieses Verhalten perfekt für Textinhalte geeignet ist, gibt es einige Inhalte, die durch eine solche Änderung negativ beeinflusst werden können. Zum Beispiel könnten Spiele, die auf der Gerätausrichtung basieren, durch eine solche Änderung der Orientierung durcheinandergebracht werden.

Die Screen Orientation API wurde entwickelt, um eine solche Änderung zu verhindern oder zu handhaben.

### Lauschen auf Orientierungsänderungen

Jedes Mal, wenn sich die Bildschirmorientierung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle ausgelöst:

```js
screen.orientation.addEventListener("change", () => {
  console.log(`The orientation of the screen is: ${screen.orientation}`);
});
```

### Verhindern der Orientierungsänderung

Jede Webanwendung kann den Bildschirm nach ihren eigenen Bedürfnissen sperren. Der Bildschirm wird mit der Methode [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) gesperrt und mit der Methode [`screen.orientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entsperrt.

Die Methode [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) akzeptiert einen der folgenden Werte, um die Art der Sperre zu definieren, die angewendet werden soll: `any`, `natural`, `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait` und `landscape`:

```js
screen.orientation.lock();
```

Sie gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das nach erfolgreichem Sperren aufgelöst wird.

> [!NOTE]
> Eine Bildschirmverriegelung ist von der Webanwendung abhängig. Wenn Anwendung A auf `landscape` und Anwendung B auf `portrait` gesperrt ist, löst das Wechseln von Anwendung A zu B oder von B zu A kein `change` Ereignis auf `ScreenOrientation` aus, da beide Anwendungen die Orientierung behalten, die sie hatten.
>
> Allerdings kann das Sperren der Orientierung ein `change` Ereignis auslösen, wenn die Orientierung geändert werden musste, um die Sperranforderungen zu erfüllen.

## Siehe auch

- [`screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- {{cssxref("@media/orientation")}}
