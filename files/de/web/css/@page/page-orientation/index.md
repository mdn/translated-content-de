---
title: seiten-orientierung
slug: Web/CSS/@page/page-orientation
l10n:
  sourceCommit: a9868df9a022eb5a58a4f255702092cbf6d03da8
---

{{CSSRef}}

Der **`page-orientation`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@page")}} At-Regel kontrolliert die Drehung einer gedruckten Seite. Er verwaltet den Fluss des Inhalts über mehrere Seiten, wenn sich die Orientierung einer Seite ändert. Dieses Verhalten unterscheidet sich von dem des [`size`](/de/docs/Web/CSS/@page/size) Deskriptors, da ein Benutzer die Richtung festlegen kann, in der die Seite gedreht werden soll.

Dieser Deskriptor hilft bei der Gestaltung und Ausrichtung gedruckter Dokumente, insbesondere wenn Dokumente doppelseitig gedruckt werden. Ein Benutzer kann festlegen, wie die Seiten beim Drucken gedreht werden. Dies ist besonders nützlich, um Inhalte wie Tabellen, die möglicherweise breiter sind als der restliche Inhalt, in einer anderen Ausrichtung anzuordnen.

> **Hinweis:** [Randkästen](/de/docs/Web/CSS/@page#margin_at-rules) und andere positionale Elemente haben keine besondere Interaktion mit diesem Deskriptor. Ränder werden wie gewohnt auf der nicht gedrehten Seite angeordnet und dann zusammen mit allem anderen gedreht.

## Syntax

```css
/* Zeigt den Druckinhalt in aufrechter Position an */
@page {
  page-orientation: upright;
}

/* Zeigt den Druckinhalt gegen den Uhrzeigersinn gedreht an */
@page {
  page-orientation: rotate-left;
}

/* Zeigt den Druckinhalt im Uhrzeigersinn gedreht an */
@page {
  page-orientation: rotate-right;
}
```

## Werte

- `upright`
  - : Es wird keine Orientierung angewendet und die Seite wird normal angeordnet und formatiert.
- `rotate-left`
  - : Nachdem eine Seite angeordnet wurde, muss die Seite eine Vierteldrehung nach links (gegen den Uhrzeigersinn) angezeigt werden.
- `rotate-right`
  - : Nachdem eine Seite angeordnet wurde, muss die Seite eine Vierteldrehung nach rechts (im Uhrzeigersinn) angezeigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gedrehte Druckseiten

Dieses Beispiel zeigt, wie die Inhalte eines Druckdokuments gedreht werden können, um dem Seiteninhalt und der Seitenposition gerecht zu werden.

```html hidden
<fieldset id="printStyle">
  <legend>
    Klicken Sie auf Drucken. Die Seite wird in der definierten Ausrichtung angeordnet.
  </legend>
  <button id="print">Drucken</button>
</fieldset>
<div id="print-area">
  <section class="upright">
    <h2>Abschnitt im Hochformat/Aufrecht</h2>
    <p>Dieser Abschnitt wird im Hochformat und aufrecht gedruckt:</p>
    <pre>
.upright {
  size: portrait;
  page-orientation: upright;
}
    </pre>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu
      convallis ligula, tincidunt malesuada tortor. Ut ac turpis erat. Mauris
      consequat, leo rhoncus venenatis elementum, sem nisl venenatis justo, non
      mattis diam massa vitae dolor. Aenean ac dolor et leo laoreet tincidunt.
      Suspendisse tempus risus nibh, a feugiat mauris pharetra a. Nulla mi dui,
      scelerisque vitae sollicitudin nec, placerat eget purus. Vivamus enim
      elit, scelerisque id venenatis eu, sodales vel leo. Quisque bibendum
      feugiat diam, ut feugiat urna suscipit et. Nulla lacinia metus a nisi
      volutpat interdum. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum vitae elit vel orci malesuada bibendum ut vitae enim. Ut
      ultrices elit nec vestibulum blandit. In eleifend dui. Nam nec aliquet
      nunc. Praesent convallis ipsum sed fermentum scelerisque.
    </p>
    <p>
      Praesent posuere, neque non fringilla ultricies, purus mi ullamcorper
      velit, vitae egestas nisl eros at ex. Nulla sed viverra libero. Praesent
      sed placerat magna, iaculis commodo lectus. Ut gravida ligula sed purus
      molestie, in accumsan est eleifend. Etiam consectetur nulla pretium
      blandit iaculis. Nunc semper libero ut mauris faucibus placerat. Cras ac
      justo ac est laoreet sollicitudin. Aliquam vel sapien ut sapien vestibulum
      dictum.
    </p>
  </section>
  <section class="left">
    <h2>Abschnitt im Querformat/Links</h2>
    <p>Dieser Abschnitt wird im Querformat und nach links gedreht gedruckt:</p>
    <pre>
.left {
  size: landscape;
  page-orientation: rotate-left;
}
    </pre>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>100m</th>
          <th>1500m</th>
          <th>Hürden</th>
          <th>Weitsprung</th>
          <th>Hochsprung</th>
          <th>Speerwurf</th>
          <th>Diskuswurf</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dave</th>
          <td>9.65</td>
          <td>3:49</td>
          <td>12.64</td>
          <td>8.54m</td>
          <td>1.95m</td>
          <td>56.65m</td>
          <td>47.63m</td>
        </tr>
        <tr>
          <th>Simon</th>
          <td>9.87</td>
          <td>3:52</td>
          <td>11.89</td>
          <td>8.16m</td>
          <td>1.96m</td>
          <td>59.03m</td>
          <td>45.72m</td>
        </tr>
        <tr>
          <th>Fred</th>
          <td>9.67</td>
          <td>3:52</td>
          <td>12.03</td>
          <td>8.04m</td>
          <td>2.01m</td>
          <td>62.58m</td>
          <td>46.83m</td>
        </tr>
        <tr>
          <th>Gary</th>
          <td>9.77</td>
          <td>3:56</td>
          <td>13.04</td>
          <td>7.96m</td>
          <td>2.02m</td>
          <td>63.87m</td>
          <td>47.73m</td>
        </tr>
        <tr>
          <th>Dick</th>
          <td>9.95</td>
          <td>3:44</td>
          <td>12.99</td>
          <td>5.66m</td>
          <td>1.97m</td>
          <td>56.43m</td>
          <td>43.87m</td>
        </tr>
        <tr>
          <th>Tom</th>
          <td>9.84</td>
          <td>3:48</td>
          <td>12.86</td>
          <td>6.87m</td>
          <td>1.95m</td>
          <td>67.03m</td>
          <td>42.73m</td>
        </tr>
        <tr>
          <th>Harry</th>
          <td>9.91</td>
          <td>3:53</td>
          <td>13.77</td>
          <td>7.34m</td>
          <td>1.94m</td>
          <td>62.84m</td>
          <td>46.72m</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="right">
    <h2>Abschnitt im Querformat/Rechts</h2>
    <p>Dieser Abschnitt wird im Querformat und nach rechts gedreht gedruckt:</p>
    <pre>
.right {
  size: landscape;
  page-orientation: rotate-right;
}
    </pre>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>100m</th>
          <th>1500m</th>
          <th>Hürden</th>
          <th>Weitsprung</th>
          <th>Hochsprung</th>
          <th>Speerwurf</th>
          <th>Diskuswurf</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dave</th>
          <td>9.65</td>
          <td>3:49</td>
          <td>12.64</td>
          <td>8.54m</td>
          <td>1.95m</td>
          <td>56.65m</td>
          <td>47.63m</td>
        </tr>
        <tr>
          <th>Simon</th>
          <td>9.87</td>
          <td>3:52</td>
          <td>11.89</td>
          <td>8.16m</td>
          <td>1.96m</td>
          <td>59.03m</td>
          <td>45.72m</td>
        </tr>
        <tr>
          <th>Fred</th>
          <td>9.67</td>
          <td>3:52</td>
          <td>12.03</td>
          <td>8.04m</td>
          <td>2.01m</td>
          <td>62.58m</td>
          <td>46.83m</td>
        </tr>
        <tr>
          <th>Gary</th>
          <td>9.77</td>
          <td>3:56</td>
          <td>13.04</td>
          <td>7.96m</td>
          <td>2.02m</td>
          <td>63.87m</td>
          <td>47.73m</td>
        </tr>
        <tr>
          <th>Dick</th>
          <td>9.95</td>
          <td>3:44</td>
          <td>12.99</td>
          <td>5.66m</td>
          <td>1.97m</td>
          <td>56.43m</td>
          <td>43.87m</td>
        </tr>
        <tr>
          <th>Tom</th>
          <td>9.84</td>
          <td>3:48</td>
          <td>12.86</td>
          <td>6.87m</td>
          <td>1.95m</td>
          <td>67.03m</td>
          <td>42.73m</td>
        </tr>
        <tr>
          <th>Harry</th>
          <td>9.91</td>
          <td>3:53</td>
          <td>13.77</td>
          <td>7.34m</td>
          <td>1.94m</td>
          <td>62.84m</td>
          <td>46.72m</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
```

#### CSS

Im ersten Teil des CSS-Codes werden [benannte Seiten](/de/docs/Web/CSS/@page#named_pages) eingerichtet, um die Richtung festzulegen, in der der Inhalt gedreht werden soll.

```css
@page upright {
  size: portrait;
  page-orientation: upright;
}

@page left {
  size: landscape;
  page-orientation: rotate-left;
}

@page right {
  size: landscape;
  page-orientation: rotate-right;
}
```

```css hidden
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
p {
  max-width: 60ch;
}
@media print {
  fieldset {
    display: none;
  }
  section {
    font-family: Roboto;
    font-size: 1.5rem;
  }
}
```

Der folgende zweite Teil des CSS-Codes erklärt eine oben definierte benannte Seitenregel für die Selektoren, wie `<section class="left">…</section>`.

```css
@media print {
  .upright {
    page: upright;
  }
  .left {
    page: left;
  }
  .right {
    page: right;
  }
}
```

```js hidden
const printButton = document.querySelector("#print");
printButton.addEventListener("click", () => {
  window.print();
});
```

### Ergebnis

Klicken Sie auf die Drucktaste, um die gedrehten Seiten zu sehen.

{{ EmbedLiveSample('Rotating_printed_pages', '100%', 520) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
