---
title: page-orientation
slug: Web/CSS/@page/page-orientation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`page-orientation`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@page")}} at-rule steuert die Drehung einer gedruckten Seite. Es behandelt den Ablauf von Inhalten über Seiten hinweg, wenn die Ausrichtung einer Seite geändert wird. Dieses Verhalten unterscheidet sich von dem [`size`](/de/docs/Web/CSS/@page/size) Deskriptor dadurch, dass ein Benutzer die Richtung definieren kann, in die die Seite gedreht werden soll.

Dieser Deskriptor hilft bei der Gestaltung und Ausrichtung von gedruckten Dokumenten, insbesondere wenn Dokumente doppelseitig gedruckt werden. Ein Benutzer kann festlegen, wie die Seiten beim Drucken gedreht werden. Dies ist besonders nützlich, um Inhalte wie Tabellen, die möglicherweise breiter als der restliche Inhalt sind, in einer anderen Ausrichtung darzustellen.

> [!NOTE]
> [Randboxen](/de/docs/Web/CSS/@page#margin_at-rules) und andere positionale Elemente haben keine spezielle Interaktion mit diesem Deskriptor. Ränder werden wie gewohnt im ungedrehten Zustand der Seite angeordnet und dann zusammen mit allem anderen gedreht.

## Syntax

```css
/* Displays the print content in an upright position */
@page {
  page-orientation: upright;
}

/* Displays the print content rotated counter-clockwise */
@page {
  page-orientation: rotate-left;
}

/* Displays the print content rotated clockwise */
@page {
  page-orientation: rotate-right;
}
```

## Werte

- `upright`
  - : Es wird keine Ausrichtung angewendet und die Seite wird normal angeordnet und formatiert.
- `rotate-left`
  - : Nachdem eine Seite angeordnet wurde, muss sie um eine Vierteldrehung nach links (gegen den Uhrzeigersinn) gedreht angezeigt werden.
- `rotate-right`
  - : Nachdem die Seite angeordnet wurde, muss sie um eine Vierteldrehung nach rechts (im Uhrzeigersinn) gedreht angezeigt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gedruckte Seiten drehen

Dieses Beispiel zeigt, wie die Inhalte eines Druckdokuments gedreht werden können, um den Seiteninhalt und die Seitenposition anzupassen.
Im ersten Teil des CSS-Codes werden [benannte Seiten](/de/docs/Web/CSS/@page#named_pages) eingerichtet, um die Richtung zu definieren, in die der Inhalt gedreht werden soll.

```css live-sample___rotating-pages
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

```css hidden live-sample___rotating-pages
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
    font-family: Roboto, sans-serif;
    font-size: 1.5rem;
  }
}
```

Der zweite Teil des CSS-Codes deklariert eine benannte Seitenregel, die oben für die Selektoren definiert wurde, wie `<section class="left">…</section>`.

```css live-sample___rotating-pages
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

```html hidden live-sample___rotating-pages
<fieldset id="printStyle">
  <legend>
    Click Print. The page will be laid out in the defined orientation.
  </legend>
  <button id="print">Print</button>
</fieldset>
<div id="print-area">
  <section class="upright">
    <h2>Section in Portrait/Upright</h2>
    <p>This section will be printed in portrait and upright with:</p>
    <pre>
.upright {
  size: portrait;
  page-orientation: upright;
}
    </pre>
    <p>Paragraph one.</p>
    <p>Paragraph two.</p>
  </section>
  <section class="left">
    <h2>Section in Landscape/Left</h2>
    <p>This section will be printed in landscape and rotated left with:</p>
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
          <th>Hurdles</th>
          <th>Long Jump</th>
          <th>High Jump</th>
          <th>Javelin</th>
          <th>Discus</th>
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
    <h2>Section in Landscape/Right</h2>
    <p>This section will be printed in landscape and rotated right with:</p>
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
          <th>Hurdles</th>
          <th>Long Jump</th>
          <th>High Jump</th>
          <th>Javelin</th>
          <th>Discus</th>
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

```js hidden live-sample___rotating-pages
const printButton = document.querySelector("#print");
printButton.addEventListener("click", () => {
  window.print();
});
```

Klicken Sie auf die Schaltfläche Drucken, um die Seitenausrichtung beim Drucken zu sehen.

{{EmbedLiveSample('rotating-pages', '100%', '540', , , , , "allow-modals")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
