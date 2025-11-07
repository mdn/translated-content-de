---
title: Verwaltung der Bildschirmorientierung
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{DefaultAPISidebar("Screen Orientation API")}}

Der Begriff _Bildschirmorientierung_ bezieht sich darauf, ob ein Browser-{{Glossary("Viewport", "Viewport")}} im Querformatmodus (das heißt, die Breite des Viewports ist größer als seine Höhe) oder im Hochformatmodus (die Höhe des Viewports ist größer als seine Breite) ist.

CSS bietet das [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation)-Medienmerkmal, um das Layout basierend auf der Bildschirmorientierung anzupassen.

Die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) bietet eine programmatische JavaScript-API für die Arbeit mit der Bildschirmorientierung, einschließlich der Möglichkeit, den Viewport auf eine bestimmte Orientierung zu sperren.

## Anpassung des Layouts basierend auf der Orientierung

Einer der häufigsten Fälle für Orientierungswechsel ist, wenn Sie das Layout Ihres Inhalts basierend auf der Geräteorientierung ändern möchten. Zum Beispiel möchten Sie möglicherweise, dass eine Button-Leiste entlang der längsten Dimension des Geräts angezeigt wird. Mit einer Medienabfrage können Sie dies einfach und automatisch tun.

Hier ein Beispiel mit folgendem HTML-Code

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

CSS verwendet die `orientation`-Medienabfrage, um spezifische Stile basierend auf der Bildschirmorientierung zu handhaben

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

Sobald wir einige allgemeine Stile haben, können wir einen Sonderfall für die Orientierung definieren

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
> Die `orientation`-Medienabfrage wird tatsächlich basierend auf der Orientierung des Browserfensters (oder iframes) angewendet, nicht der Orientierung des Geräts.

## Sperren der Bildschirmorientierung

Einige Geräte (hauptsächlich mobile Geräte) können die Bildschirmorientierung dynamisch basierend auf ihrer eigenen Orientierung ändern, um sicherzustellen, dass der Benutzer immer lesen kann, was auf dem Bildschirm angezeigt wird. Während dieses Verhalten für Textinhalt gut geeignet ist, gibt es einige Inhalte, die durch eine solche Änderung negativ beeinflusst werden können. Beispielsweise könnten Spiele, die auf der Geräteorientierung basieren, durch eine Änderung der Orientierung beeinträchtigt werden.

Die Screen Orientation API wurde entwickelt, um solch eine Änderung zu verhindern oder zu handhaben.

### Zuhören auf Orientierungsänderungen

Jedes Mal, wenn sich die Bildschirmorientierung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle ausgelöst:

```js
screen.orientation.addEventListener("change", () => {
  console.log(`The orientation of the screen is: ${screen.orientation}`);
});
```

### Verhindern einer Orientierungsänderung

Jede Webanwendung kann den Bildschirm entsprechend ihrer eigenen Bedürfnisse sperren. Der Bildschirm wird mit der Methode [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) gesperrt und mit der Methode [`screen.orientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entsperrt.

Die Methode [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) akzeptiert einen der folgenden Werte, um die Art der Sperre zu definieren: `any`, `natural`, `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait` und `landscape`:

```js
screen.orientation.lock();
```

Sie gibt ein [Versprechen](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das aufgelöst wird, nachdem die Sperre erfolgreich war.

> [!NOTE]
> Eine Bildschirmsperre ist von der Webanwendung abhängig. Wenn Anwendung A auf `landscape` gesperrt ist und Anwendung B auf `portrait`, dann wird beim Wechsel von Anwendung A zu B oder von B zu A kein `change`-Ereignis auf `ScreenOrientation` ausgelöst, da beide Anwendungen die Orientierung beibehalten, die sie hatten.
>
> Eine Sperrung der Orientierung kann jedoch ein `change`-Ereignis auslösen, wenn die Orientierung geändert werden musste, um die Sperranforderungen zu erfüllen.

## Siehe auch

- [`screen.orientation`](/de/docs/Web/API/Screen/orientation)
- [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis von [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)
- [Die Orientierung-Medienabfrage](/de/docs/Web/CSS/Reference/At-rules/@media/orientation)
