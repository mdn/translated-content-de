---
title: CSS-Eigenschaften-Kompatibilitätstabelle für Formularelemente
slug: Learn/Forms/Property_compatibility_table_for_form_controls
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{learnsidebar}}

Die folgenden Kompatibilitätstabellen versuchen, den Stand der CSS-Unterstützung für HTML-Formulare zusammenzufassen. Aufgrund der Komplexität von CSS und HTML-Formularen können diese Tabellen nicht als perfekte Referenz betrachtet werden. Sie geben Ihnen jedoch einen guten Einblick, was gemacht werden kann und was nicht, was Ihnen hilft, zu lernen, wie man Dinge macht.

## So lesen Sie die Tabellen

### Werte

Für jede Eigenschaft gibt es vier mögliche Werte:

- ✅ Ja
  - : Es gibt eine einigermaßen konsistente Unterstützung für die Eigenschaft in den Browsern. Sie können dennoch auf seltsame Nebeneffekte in bestimmten Randfällen stoßen.
- ⚠️ Teilweise
  - : Während die Eigenschaft funktioniert, können Sie häufig seltsame Nebeneffekte oder Inkonsistenzen erleben. Sie sollten diese Eigenschaften wahrscheinlich vermeiden, es sei denn, Sie beherrschen diese Nebeneffekte zuerst.
- ❌ Nein
  - : Die Eigenschaft funktioniert nicht oder ist so inkonsistent, dass sie nicht zuverlässig ist.
- n.v.
  - : Die Eigenschaft hat keine Bedeutung für diesen Typ von Widget.

### Rendering

Für jede Eigenschaft gibt es zwei mögliche Renderings:

- N (Normal)
  - : Zeigt an, dass die Eigenschaft so angewendet wird, wie sie ist
- T (Optimiert)
  - : Zeigt an, dass die Eigenschaft mit der zusätzlichen Regel unten angewendet wird:

```css
* {
  /* Turn off the native look and feel */
  appearance: none;
}
```

## Kompatibilitätstabellen

Das Ändern des Aussehens von Formularelementen mit CSS, wie mit {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("border-radius")}} und {{cssxref("height")}}, kann das native Aussehen und Gefühl von Widgets in einigen Browsern teilweise oder vollständig deaktivieren. Seien Sie vorsichtig, wenn Sie sie verwenden.

### Textfelder

Sehen Sie sich die `{{htmlelement("input/text", "text")}}`, `{{htmlelement("input/search", "search")}}` und `{{htmlelement("input/password", "password")}}` Eingabetypen an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Box-Modell</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen und Gefühl für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen und Gefühl für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen und Gefühl für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schriftart</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}<sup>[1]</sup>
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            Wenn die {{cssxref("border-color")}}-Eigenschaft nicht gesetzt ist, wenden einige auf WebKit basierende Browser die {{cssxref("color")}}-Eigenschaft sowohl auf den Rahmen als auch auf die Schriftart bei <code>{{htmlelement("textarea")}}</code>s an.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>Siehe die Anmerkung zu {{cssxref("line-height")}}</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td>Siehe die Anmerkung zu Opera</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 unterstützt diese Eigenschaft nur bei <code>{{htmlelement("textarea")}}</code>s, während Opera sie nur bei einzeiligen Textfeldern unterstützt.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rahmen und Hintergrund</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen und Gefühl für die Suchfelder. Daher ist es erforderlich, <code>-webkit-appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen und Gefühl für die Suchfelder. Daher ist es erforderlich, <code>-webkit-appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 unterstützt diese Eigenschaft nicht.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Buttons

Sehen Sie sich die `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}` und `{{htmlelement("input/reset", "reset")}}` Eingabetypen sowie das `{{htmlelement("button")}}`-Element an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Box-Modell</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            Diese Eigenschaft wird auf auf WebKit basierenden Browsern auf Mac OSX oder iOS nicht angewendet.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            Diese Eigenschaft wird auf auf WebKit basierenden Browsern auf Mac OSX oder iOS nicht angewendet.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schriftart</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>Siehe die Anmerkung zu {{cssxref("line-height")}}.</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rahmen und Hintergrund</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            In Opera wird die {{cssxref("border-radius")}} Eigenschaft nur angewendet, wenn ein expliziter Rahmen gesetzt ist.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 unterstützt diese Eigenschaft nicht.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Number

Sehen Sie sich den Eingabetyp `{{htmlelement("input/number", "number")}}` an. Es gibt keine standardisierte Möglichkeit, den Stil der Spinners zu ändern, die zur Wertänderung des Feldes verwendet werden, wobei die Spinners in Safari außerhalb des Feldes sind.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Box-Modell</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            In Opera sind die Spinners gezoomt, was den Inhalt des Feldes verbergen kann.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            In Opera sind die Spinners gezoomt, was den Inhalt des Feldes verbergen kann.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schriftart</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>Siehe die Anmerkung zu {{cssxref("line-height")}}.</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rahmen und Hintergrund</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td rowspan="3">
        <p>
          Unterstützt, aber es gibt zu viele Inkonsistenzen zwischen den Browsern, um zuverlässig zu sein.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
    </tr>
  </tbody>
</table>

### Kontrollkästchen und Optionsfelder

Sehen Sie sich die `{{htmlelement("input/checkbox", "checkbox")}}` und `{{htmlelement("input/radio", "radio")}}` Eingabetypen an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Box-Modell</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Einige Browser fügen zusätzliche Ränder hinzu, während andere das Widget strecken.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Einige Browser fügen zusätzliche Ränder hinzu, während andere das Widget strecken.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
       style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schriftart</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td style="text-align: center; vertical-align: top">N.V.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rahmen und Hintergrund</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### Auswahlfelder (einzeilig)

Sehen Sie sich die `{{htmlelement("select")}}`, `{{htmlelement("optgroup")}}` und `{{htmlelement("option")}}` Elemente an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Box-Modell</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Diese Eigenschaft ist auf dem <code>{{htmlelement("select")}}</code> Element in Ordnung, kann jedoch nicht auf den <code>{{htmlelement("option")}}</code> oder <code>{{htmlelement("optgroup")}}</code> Elementen sein.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[2]</sup>
      </td>
      <td>
        <ol>
          <li>
            Die Eigenschaft wird angewendet, aber inkonsistent zwischen den Browsern auf Mac OSX.
          </li>
          <li>
            Die Eigenschaft wird gut auf das <code>{{htmlelement("select")}}</code> Element angewendet, wird jedoch inkonsistent auf <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen behandelt.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schriftart</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Auf Mac OSX unterstützen WebKit-basierte Browser diese Eigenschaft bei nativen Widgets nicht und zusammen mit Opera unterstützen sie sie überhaupt nicht bei <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Auf Mac OSX unterstützen WebKit-basierte Browser diese Eigenschaft bei nativen Widgets nicht und zusammen mit Opera unterstützen sie sie überhaupt nicht bei <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 unterstützt diese Eigenschaft nicht bei <code>{{htmlelement("select")}}</code>, <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen; WebKit-basierte Browser auf Mac OSX unterstützen diese Eigenschaft nicht bei <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Nur Firefox bietet vollständige Unterstützung für diese Eigenschaft. Andere Browser unterstützen sie nur auf dem <code>{{htmlelement("select")}}</code> Element.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code> Element.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code> Element.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code> Element.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rahmen und Hintergrund</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td rowspan="3">
        <ol>
          <li>
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code> Element.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

Hinweis: Firefox bietet keine Möglichkeit, den Abwärtspfeil auf dem `{{htmlelement("select")}}` Element zu ändern.

### Auswahlfelder (mehrzeilig)

Sehen Sie sich die `{{htmlelement("select")}}`, `{{htmlelement("optgroup")}}` und `{{htmlelement("option")}}` Elemente und das [`size` Attribut](/de/docs/Web/HTML/Attributes/size) an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Box-Modell</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Opera unterstützt {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}} nicht auf dem <code>{{htmlelement("select")}}</code> Element.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schriftart</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>Siehe die Anmerkung zu {{cssxref("line-height")}}.</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 unterstützt diese Eigenschaft nicht bei <code>{{htmlelement("select")}}</code>, <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen; WebKit-basierte Browser auf Mac OSX unterstützen diese Eigenschaft nicht bei <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Auf WebKit-basierten Browsern auf Mac OSX wird diese Eigenschaft auf diesem Widget nicht unterstützt.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>Nur unterstützt von Firefox und IE9+.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code> Element.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rahmen und Hintergrund</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            In Opera wird die {{cssxref("border-radius")}} Eigenschaft nur angewendet, wenn ein expliziter Rahmen gesetzt ist.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 unterstützt diese Eigenschaft nicht.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### Datenliste

Sehen Sie sich die `{{htmlelement("datalist")}}` und `{{htmlelement("input")}}` Elemente und das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Box-Modell</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schriftart</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rahmen und Hintergrund</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### Dateiauswahl

Sehen Sie sich den Eingabetyp `{{htmlelement("input/file", "file")}}` an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Anmerkung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Box-Modell</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schriftart</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Unterstützt, aber es gibt zu viele Inkonsistenzen zwischen den Browsern, um zuverlässig zu sein.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </
