---
title: Verwaltung der Bildschirmorientierung
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Screen Orientation API")}}

Der Begriff _Bildschirmorientierung_ bezieht sich darauf, ob ein Browser-[Viewport](/de/docs/Glossary/Viewport) im Querformat (d.h., die Breite des Viewports ist größer als seine Höhe) oder im Hochformat (die Höhe des Viewports ist größer als seine Breite) angezeigt wird.

CSS bietet das [`orientation`](/de/docs/Web/CSS/@media/orientation) Media-Feature, um das Layout basierend auf der Bildschirmorientierung anzupassen.

Die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) stellt eine programmatische JavaScript-API zur Verfügung, um mit der Bildschirmorientierung zu arbeiten – einschließlich der Möglichkeit, den Viewport auf eine bestimmte Orientierung zu fixieren.

## Layout-Anpassung basierend auf der Orientierung

Eine der häufigsten Einsatzmöglichkeiten für Veränderungen der Orientierung ist, wenn Sie das Layout Ihres Inhalts basierend auf der Geräteorientierung überarbeiten möchten. Zum Beispiel, vielleicht möchten Sie, dass eine Schaltflächenleiste sich entlang der längsten Dimension der Geräteanzeige erstreckt. Durch die Verwendung einer Media Query können Sie dies einfach und automatisch tun.

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

CSS verwendet die Orientation Media Query, um spezifische Stile basierend auf der Bildschirmorientierung zu behandeln:

```css
/* Zuerst definieren wir einige allgemeine Stile */

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

Sobald wir einige allgemeine Stile haben, können wir eine Sonderregel für die Orientierung definieren:

```css
/* Für Hochformat soll die Werkzeugleiste oben sein */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* Für Querformat soll die Werkzeugleiste links fixiert werden */

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
> Die Orientation Media Query wird tatsächlich basierend auf der Orientierung des Browserfensters (oder iframes) und nicht der Orientierung des Geräts angewendet.

## Sperren der Bildschirmorientierung

Einige Geräte (hauptsächlich mobile Geräte) können die Orientierung des Bildschirms dynamisch ändern, basierend auf ihrer eigenen Orientierung, um sicherzustellen, dass der Benutzer immer lesen kann, was auf dem Bildschirm ist. Während dieses Verhalten perfekt für Textinhalte geeignet ist, gibt es einige Inhalte, die von einer solchen Änderung negativ beeinflusst werden können. Zum Beispiel könnten Spiele, die auf der Orientierung des Geräts basieren, durch eine solche Veränderung der Orientierung durcheinander gebracht werden.

Die Screen Orientation API ist dafür gemacht, eine solche Änderung zu verhindern oder zu handhaben.

### Lauschen auf Orientierungsänderungen

Jedes Mal, wenn sich die Bildschirmorientierung ändert, wird das {{domxref("ScreenOrientation.change_event", "change")}}-Ereignis der {{domxref("ScreenOrientation")}}-Schnittstelle ausgelöst:

```js
screen.orientation.addEventListener("change", () => {
  console.log(`The orientation of the screen is: ${screen.orientation}`);
});
```

### Verhindern von Orientierungsänderungen

Jede Webanwendung kann den Bildschirm nach ihren eigenen Bedürfnissen sperren. Der Bildschirm wird mit der Methode {{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} gesperrt und mit der Methode {{domxref("ScreenOrientation.unlock()", "screen.orientation.unlock()")}} entsperrt.

Die Methode {{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} akzeptiert einen der folgenden Werte, um die Art der Sperre zu definieren: `any`, `natural`, `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait` und `landscape`:

```js
screen.orientation.lock();
```

Sie gibt ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das aufgelöst wird, nachdem die Sperre erfolgreich ist.

> [!NOTE]
> Eine Bildschirmsperre ist anwendungsabhängig. Wenn Anwendung A auf `landscape` gesperrt ist und Anwendung B auf `portrait`, wird beim Wechsel von Anwendung A zu B oder B zu A kein `change`-Ereignis in `ScreenOrientation` ausgelöst, weil beide Anwendungen die Orientierung beibehalten, die sie hatten.
>
> Allerdings kann die Sperrung der Orientierung ein `change`-Ereignis auslösen, falls die Orientierung geändert werden musste, um die Sperranforderungen zu erfüllen.

## Siehe auch

- {{domxref("Screen.orientation", "screen.orientation")}}
- {{domxref("ScreenOrientation")}}
- {{DOMxRef("ScreenOrientation.change_event", "change")}}-Ereignis der {{domxref("ScreenOrientation")}}
- [Die Orientation Media Query](/de/docs/Web/CSS/@media/orientation)
