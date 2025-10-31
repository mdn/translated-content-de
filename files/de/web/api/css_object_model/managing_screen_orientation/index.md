---
title: Verwalten der Bildschirmausrichtung
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Screen Orientation API")}}

Der Begriff _Bildschirmausrichtung_ bezieht sich darauf, ob ein Browser-{{Glossary("Viewport", "Viewport")}} im Querformatmodus ist (das heißt, die Breite des Viewports ist größer als seine Höhe) oder im Hochformatmodus (die Höhe des Viewports ist größer als seine Breite).

CSS bietet das Medienfeature [`orientation`](/de/docs/Web/CSS/@media/orientation), um das Layout basierend auf der Bildschirmausrichtung anzupassen.

Die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) bietet eine programmatische JavaScript-API, um mit der Bildschirmausrichtung zu arbeiten — inklusive der Möglichkeit, den Viewport auf eine bestimmte Ausrichtung zu sperren.

## Anpassen des Layouts basierend auf der Ausrichtung

Einer der häufigsten Fälle von Ausrichtungsänderungen ist, wenn Sie das Layout Ihrer Inhalte basierend auf der Ausrichtung des Geräts überarbeiten möchten. Beispielsweise möchten Sie vielleicht eine Schaltflächenleiste entlang der längsten Dimension des Anzeigegeräts strecken. Indem Sie eine Medienabfrage verwenden, können Sie dies einfach und automatisch tun.

Hier ein Beispiel mit dem folgenden HTML-Code

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

CSS verlässt sich auf die Medienabfrage zur Ausrichtung, um spezifische Stile basierend auf der Bildschirmausrichtung zu übernehmen

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

Sobald wir einige gemeinsame Stile haben, können wir einen Sonderfall für die Ausrichtung definieren

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
> Die Medienabfrage zur Ausrichtung wird tatsächlich basierend auf der Ausrichtung des Browserfensters (oder iframe) angewendet, nicht der Ausrichtung des Geräts.

## Sperren der Bildschirmausrichtung

Einige Geräte (hauptsächlich mobile Geräte) können die Ausrichtung des Bildschirms dynamisch ändern, basierend auf ihrer eigenen Ausrichtung, um sicherzustellen, dass der Benutzer immer lesen kann, was auf dem Bildschirm ist. Während dieses Verhalten perfekt für Textinhalte geeignet ist, gibt es einige Inhalte, die durch eine solche Änderung negativ beeinflusst werden können. Beispielsweise könnten Spiele, die auf der Ausrichtung des Geräts basieren, durch eine solche Ausrichtungsänderung durcheinandergebracht werden.

Die Screen Orientation API wurde erstellt, um eine solche Änderung zu verhindern oder zu handhaben.

### Hören auf Ausrichtungsänderungen

Jedes Mal, wenn sich die Ausrichtung des Bildschirms ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle ausgelöst:

```js
screen.orientation.addEventListener("change", () => {
  console.log(`The orientation of the screen is: ${screen.orientation}`);
});
```

### Verhindern der Ausrichtungsänderung

Jede Webanwendung kann den Bildschirm sperren, um ihren eigenen Bedürfnissen gerecht zu werden. Der Bildschirm wird mit der Methode [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) gesperrt und mit der Methode [`screen.orientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entsperrt.

Die Methode [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) akzeptiert einen der folgenden Werte, um die Art der Sperre zu definieren: `any`, `natural`, `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait`, und `landscape`:

```js
screen.orientation.lock();
```

Sie gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das sich auflöst, nachdem die Sperre erfolgreich ist.

> [!NOTE]
> Eine Bildschirmsperre ist abhängig von der Webanwendung. Wenn Anwendung A auf `landscape` gesperrt ist und Anwendung B auf `portrait`, wird beim Wechseln von Anwendung A zu B oder B zu A kein `change`-Ereignis auf `ScreenOrientation` ausgelöst, weil beide Anwendungen die Ausrichtung beibehalten, die sie hatten.
>
> Das Sperren der Ausrichtung kann jedoch ein `change`-Ereignis auslösen, wenn die Ausrichtung geändert werden musste, um die Sperranforderungen zu erfüllen.

## Siehe auch

- [`screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis von [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- [Die Medienabfrage zur Ausrichtung](/de/docs/Web/CSS/@media/orientation)
