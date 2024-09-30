---
title: Verwaltung der Bildschirmorientierung
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Screen Orientation API")}}

Der Begriff _Bildschirmorientierung_ bezieht sich darauf, ob ein Browser-[Viewport](/de/docs/Glossary/Viewport) im Querformatmodus ist (d.h. die Breite des Viewports ist größer als seine Höhe) oder im Hochformatmodus (die Höhe des Viewports ist größer als seine Breite).

CSS bietet das [`orientation`](/de/docs/Web/CSS/@media/orientation)-Medienmerkmal, um das Layout basierend auf der Bildschirmorientierung anzupassen.

Die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) bietet eine programmatische JavaScript-API zum Arbeiten mit der Bildschirmorientierung — einschließlich der Möglichkeit, den Viewport auf eine bestimmte Orientierung zu sperren.

## Layoutanpassung basierend auf der Orientierung

Einer der häufigsten Fälle für Orientierungsänderungen ist der, bei dem Sie das Layout Ihres Inhalts entsprechend der Orientierung des Geräts überarbeiten möchten. Beispielsweise möchten Sie vielleicht eine Button-Leiste entlang der längsten Dimension des Geräts anzeigen lassen. Mit einer Media-Query können Sie dies einfach und automatisch tun.

Hier ist ein Beispiel mit folgendem HTML-Code:

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

CSS verlässt sich auf die Media-Query für die Orientierung, um spezifische Styles basierend auf der Bildschirmorientierung zu handhaben.

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

Sobald wir einige allgemeine Styles haben, können wir einen speziellen Fall für die Orientierung definieren.

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

Und hier ist das Ergebnis:

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
> Die Media-Query für die Orientierung gilt tatsächlich basierend auf der Orientierung des Browserfensters (oder iframe) und nicht der Orientierung des Geräts.

## Sperrung der Bildschirmorientierung

Einige Geräte (hauptsächlich mobile Geräte) können die Orientierung des Bildschirms basierend auf ihrer eigenen Orientierung dynamisch ändern, sodass der Benutzer immer lesen kann, was auf dem Bildschirm steht. Während dieses Verhalten für Textinhalte perfekt geeignet ist, gibt es einige Inhalte, die durch eine solche Änderung negativ beeinflusst werden können. Beispielsweise könnten Spiele, die auf die Orientierung des Geräts basieren, durch eine solche Veränderung der Orientierung gestört werden.

Die Screen Orientation API dient dazu, eine solche Änderung zu verhindern oder zu handhaben.

### Überwachung von Orientierungsänderungen

Jedes Mal, wenn sich die Orientierung des Bildschirms ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle ausgelöst:

```js
screen.orientation.addEventListener("change", () => {
  console.log(`The orientation of the screen is: ${screen.orientation}`);
});
```

### Verhinderung von Orientierungsänderungen

Jede Web-Anwendung kann den Bildschirm nach ihren eigenen Bedürfnissen sperren. Der Bildschirm wird mit der Methode [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) gesperrt und mit der Methode [`screen.orientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entsperrt.

Die Methode [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) akzeptiert einen der folgenden Werte, um die Art der Sperre zu definieren: `any`, `natural`, `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait` und `landscape`:

```js
screen.orientation.lock();
```

Es gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das aufgelöst wird, nachdem die Sperre erfolgreich war.

> [!NOTE]
> Eine Bildschirmsperre ist von der Web-Anwendung abhängig. Wenn Anwendung A auf `landscape` und Anwendung B auf `portrait` gesperrt ist, löst das Wechseln von Anwendung A zu B oder von B zu A kein `change`-Ereignis auf `ScreenOrientation` aus, da beide Anwendungen die Orientierung beibehalten, die sie hatten.
>
> Das Sperren der Orientierung kann jedoch ein `change`-Ereignis auslösen, wenn die Orientierung geändert werden musste, um den Sperranforderungen zu entsprechen.

## Siehe auch

- [`screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis von [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- [Die Media-Query für die Orientierung](/de/docs/Web/CSS/@media/orientation)
