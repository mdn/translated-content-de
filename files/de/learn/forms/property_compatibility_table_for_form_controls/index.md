---
title: CSS-Eigenschaftskompatibilitätstabelle für Formularelemente
slug: Learn/Forms/Property_compatibility_table_for_form_controls
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{learnsidebar}}

Die folgenden Kompatibilitätstabellen versuchen, den Stand der CSS-Unterstützung für HTML-Formulare zusammenzufassen. Aufgrund der Komplexität von CSS und HTML-Formularen können diese Tabellen nicht als perfekte Referenz betrachtet werden. Sie bieten jedoch wertvolle Einblicke, in was möglich ist und was nicht, was Ihnen helfen wird zu lernen, wie Sie es umsetzen können.

## Anleitung zum Lesen der Tabellen

### Werte

Für jede Eigenschaft gibt es vier mögliche Werte:

- ✅ Ja
  - : Es gibt eine einigermaßen konsistente Unterstützung für die Eigenschaft über verschiedene Browser hinweg. Sie könnten dennoch auf seltsame Nebenwirkungen in bestimmten Randfällen stoßen.
- ⚠️ Teilweise
  - : Obwohl die Eigenschaft funktioniert, könnten Sie häufig auf seltsame Nebenwirkungen oder Inkonsistenzen stoßen. Sie sollten möglicherweise diese Eigenschaften vermeiden, es sei denn, Sie beherrschen zuerst diese Nebenwirkungen.
- ❌ Nein
  - : Die Eigenschaft funktioniert nicht oder ist so inkonsistent, dass sie nicht zuverlässig ist.
- n.a.
  - : Die Eigenschaft hat keine Bedeutung für diesen Typ von Widget.

### Darstellung

Für jede Eigenschaft gibt es zwei mögliche Darstellungen:

- N (Normal)
  - : Zeigt an, dass die Eigenschaft so angewendet wird, wie sie ist
- T (Tweaked)
  - : Zeigt an, dass die Eigenschaft mit der untenstehenden zusätzlichen Regel angewendet wird:

```css
* {
  /* Turn off the native look and feel */
  appearance: none;
}
```

## Kompatibilitätstabellen

Das Verändern des Erscheinungsbildes von Formularelementen mit CSS, wie mit {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("border-radius")}}, und {{cssxref("height")}}, kann das native Aussehen und das Verhalten von Widgets in einigen Browsern teilweise oder vollständig deaktivieren. Seien Sie vorsichtig, wenn Sie sie verwenden.

### Textfelder

Sehen Sie sich die `{{htmlelement("input/text", "text")}}`, `{{htmlelement("input/search", "search")}}` und `{{htmlelement("input/password", "password")}}` Eingabetypen an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Bemerkung</th>
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
            WebKit-Browser (meistens auf Mac OSX und iOS) verwenden das native Aussehen und Verhalten für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (meistens auf Mac OSX und iOS) verwenden das native Aussehen und Verhalten für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (meistens auf Mac OSX und iOS) verwenden das native Aussehen und Verhalten für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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
            Wenn die {{cssxref("border-color")}} Eigenschaft nicht gesetzt ist, können einige auf WebKit basierende Browser die {{cssxref("color")}} Eigenschaft sowohl auf den Rand als auch auf die Schriftart von <code>{{htmlelement("textarea")}}</code>s anwenden.
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
      <td>Siehe die Bemerkung zu {{cssxref("line-height")}}</td>
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
      <td>Siehe die Bemerkung zu Opera</td>
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
            IE9 unterstützt diese Eigenschaft nur auf <code>{{htmlelement("textarea")}}</code>s, während Opera es nur bei einzeiligen Textfeldern unterstützt.
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
      <th colspan="4" scope="col"><em>Rand und Hintergrund</em></th>
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
            WebKit-Browser (meistens auf Mac OSX und iOS) verwenden das native Aussehen und Verhalten für die Suchfelder. Daher ist es erforderlich, <code>-webkit-appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (meistens auf Mac OSX und iOS) verwenden das native Aussehen und Verhalten für die Suchfelder. Daher ist es erforderlich, <code>-webkit-appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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

### Schaltflächen

Sehen Sie sich die `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}` und `{{htmlelement("input/reset", "reset")}}` Eingabetypen und das `{{htmlelement("button")}}` Element an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Bemerkung</th>
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
            Diese Eigenschaft wird in auf WebKit basierenden Browsern auf Mac OSX oder iOS nicht angewendet.
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
            Diese Eigenschaft wird in auf WebKit basierenden Browsern auf Mac OSX oder iOS nicht angewendet.
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
      <td>Siehe die Bemerkung zu {{cssxref("line-height")}}.</td>
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
      <th colspan="4" scope="col"><em>Rand und Hintergrund</em></th>
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
            In Opera wird die Eigenschaft {{cssxref("border-radius")}} nur angewendet, wenn ein expliziter Rand gesetzt ist.
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

### Nummer

Sehen Sie sich den Eingabetyp `{{htmlelement("input/number", "number")}}` an. Es gibt keinen standardisierten Weg, den Stil der Spinner zu ändern, die zur Werteänderung des Feldes genutzt werden, wobei die Spinner in Safari außerhalb des Feldes liegen.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Bemerkung</th>
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
            In Opera werden die Spinner vergrößert, was den Inhalt des Feldes verdecken kann.
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
            In Opera werden die Spinner vergrößert, was den Inhalt des Feldes verdecken kann.
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
      <td>Siehe die Bemerkung zu {{cssxref("line-height")}}.</td>
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
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rand und Hintergrund</em></th>
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
      <th scope="col">Bemerkung</th>
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
            Einige Browser fügen zusätzliche Abstände hinzu, während andere das Widget strecken.
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
            Einige Browser fügen zusätzliche Abstände hinzu, während andere das Widget strecken.
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
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td style="text-align: center; vertical-align: top">N.A.</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rand und Hintergrund</em></th>
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
      <th scope="col">Bemerkung</th>
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
            Diese Eigenschaft ist für das <code>{{htmlelement("select")}}</code>-Element in Ordnung, aber es kann nicht auf die <code>{{htmlelement("option")}}</code>- oder <code>{{htmlelement("optgroup")}}</code>-Elemente angewendet werden.
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
            Die Eigenschaft wird angewendet, jedoch auf inkonsistente Weise zwischen den Browsern auf Mac OSX.
          </li>
          <li>
            Die Eigenschaft wird gut auf das <code>{{htmlelement("select")}}</code>-Element angewendet, wird jedoch auf <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen inkonsistent gehandhabt.
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
            Auf Mac OSX unterstützen auf WebKit basierende Browser diese Eigenschaft nicht auf nativen Widgets und zusammen mit Opera unterstützen sie es überhaupt nicht bei <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen.
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
            Auf Mac OSX unterstützen auf WebKit basierende Browser diese Eigenschaft nicht auf nativen Widgets und zusammen mit Opera unterstützen sie es überhaupt nicht bei <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen.
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
            IE9 unterstützt diese Eigenschaft nicht auf <code>{{htmlelement("select")}}</code>, <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen; auf WebKit basierende Browser auf Mac OSX unterstützen diese Eigenschaft nicht bei <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen.
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
            Nur Firefox bietet volle Unterstützung für diese Eigenschaft. Andere Browser unterstützen sie nur beim <code>{{htmlelement("select")}}</code>-Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur beim <code>{{htmlelement("select")}}</code>-Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur beim <code>{{htmlelement("select")}}</code>-Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur beim <code>{{htmlelement("select")}}</code>-Element.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rand und Hintergrund</em></th>
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
            Die meisten Browser unterstützen diese Eigenschaft nur beim <code>{{htmlelement("select")}}</code>-Element.
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

Anmerkung: Firefox bietet keine Möglichkeit, den Pfeil nach unten im `{{htmlelement("select")}}`-Element zu ändern.

### Auswahlfelder (mehrzeilig)

Sehen Sie sich die `{{htmlelement("select")}}`, `{{htmlelement("optgroup")}}` und `{{htmlelement("option")}}` Elemente an und das [`size`](/de/docs/Web/HTML/Attributes/size) Attribut.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Bemerkung</th>
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
            Opera unterstützt {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}} beim <code>{{htmlelement("select")}}</code>-Element nicht.
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
      <td>Siehe die Bemerkung zu {{cssxref("line-height")}}.</td>
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
            IE9 unterstützt diese Eigenschaft nicht auf <code>{{htmlelement("select")}}</code>, <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen; auf WebKit basierende Browser auf Mac OSX unterstützen diese Eigenschaft nicht bei <code>{{htmlelement("option")}}</code> und <code>{{htmlelement("optgroup")}}</code> Elementen.
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
            Auf WebKit basierende Browser auf Mac OSX unterstützen diese Eigenschaft bei diesem Widget nicht.
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
          <li>Nur unterstützt durch Firefox und IE9+.</li>
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
            Die meisten Browser unterstützen diese Eigenschaft nur beim <code>{{htmlelement("select")}}</code>-Element.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Rand und Hintergrund</em></th>
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
            In Opera wird die Eigenschaft {{cssxref("border-radius")}} nur angewendet, wenn ein expliziter Rand gesetzt ist.
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

### Datalist

Sehen Sie sich die `{{htmlelement("datalist")}}` und `{{htmlelement("input")}}` Elemente an sowie das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Bemerkung</th>
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
      <th colspan="4" scope="col"><em>Rand und Hintergrund</em></th>
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

### Dateiwähler

Sehen Sie sich den Eingabetyp `{{htmlelement("input/file", "file")}}` an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Bemerkung</th>
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
      </td>
      <td>
        <ol>
          <li>
