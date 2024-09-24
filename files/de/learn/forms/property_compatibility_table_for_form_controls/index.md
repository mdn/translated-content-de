---
title: Kompatibilitätstabelle für CSS-Eigenschaften bei Formularelementen
slug: Learn/Forms/Property_compatibility_table_for_form_controls
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{learnsidebar}}

Die folgenden Kompatibilitätstabellen versuchen, den Stand der CSS-Unterstützung für HTML-Formulare zusammenzufassen. Aufgrund der Komplexität von CSS und HTML-Formularen können diese Tabellen nicht als perfekte Referenz betrachtet werden. Sie bieten Ihnen jedoch wertvolle Einblicke darüber, was möglich ist und was nicht, was Ihnen hilft, zu lernen, wie man Dinge umsetzt.

## Wie man die Tabellen liest

### Werte

Für jede Eigenschaft gibt es vier mögliche Werte:

- ✅ Ja
  - : Es gibt eine einigermaßen konsistente Unterstützung für die Eigenschaft über verschiedene Browser hinweg. Dennoch könnten Sie in bestimmten Randfällen seltsame Seiteneffekte erleben.
- ⚠️ Teilweise
  - : Obwohl die Eigenschaft funktioniert, könnten Sie häufig auf seltsame Seiteneffekte oder Inkonsistenzen stoßen. Sie sollten diese Eigenschaften wahrscheinlich vermeiden, es sei denn, Sie beherrschen zuerst diese Seiteneffekte.
- ❌ Nein
  - : Die Eigenschaft funktioniert nicht oder ist so inkonsequent, dass sie nicht verlässlich ist.
- nicht anwendbar
  - : Die Eigenschaft hat für diesen Typ von Widget keine Bedeutung.

### Darstellung

Für jede Eigenschaft gibt es zwei mögliche Darstellungen:

- N (Normal)
  - : Zeigt an, dass die Eigenschaft so angewandt wird, wie sie ist
- T (Angepasst)
  - : Zeigt an, dass die Eigenschaft mit der zusätzlichen Regel unten angewandt wird:

```css
* {
  /* Schaltet das native Erscheinungsbild aus */
  appearance: none;
}
```

## Kompatibilitätstabellen

Das Ändern des Erscheinungsbilds von Formularelementen mit CSS, wie z. B. mit {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("border-radius")}} und {{cssxref("height")}}, kann das native Erscheinungsbild von Widgets in einigen Browsern teilweise oder vollständig deaktivieren. Seien Sie vorsichtig, wenn Sie sie verwenden.

### Textfelder

Siehe die Eingabetypen `{{htmlelement("input/text", "text")}}`, `{{htmlelement("input/search", "search")}}` und `{{htmlelement("input/password", "password")}}`.

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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Erscheinungsbild für Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Erscheinungsbild für Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Erscheinungsbild für Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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
            Wenn die {{cssxref("border-color")}}-Eigenschaft nicht gesetzt ist, wird bei einigen auf WebKit basierenden Browsern die {{cssxref("color")}}-Eigenschaft sowohl auf den Rahmen als auch auf die Schrift von <code>{{htmlelement("textarea")}}</code>s angewendet.
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
      <td>Siehe den Hinweis zu {{cssxref("line-height")}}</td>
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
      <td>Siehe den Hinweis zu Opera</td>
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Erscheinungsbild für Suchfelder. Daher ist es erforderlich, <code>-webkit-appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Erscheinungsbild für Suchfelder. Daher ist es erforderlich, <code>-webkit-appearance:none</code> zu verwenden, um diese Eigenschaft auf Suchfelder anwenden zu können.
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

Siehe die Eingabetypen `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}` und `{{htmlelement("input/reset", "reset")}}` sowie das `{{htmlelement("button")}}`-Element.

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
            Diese Eigenschaft wird nicht auf WebKit-basierten Browsern auf Mac OSX oder iOS angewendet.
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
            Diese Eigenschaft wird nicht auf WebKit-basierten Browsern auf Mac OSX oder iOS angewendet.
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
      <td>Siehe den Hinweis zu {{cssxref("line-height")}}.</td>
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
            Bei Opera wird die {{cssxref("border-radius")}}-Eigenschaft nur angewendet, wenn ein expliziter Rand gesetzt ist.
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

Siehe den Eingabetyp `{{htmlelement("input/number", "number")}}`. Es gibt keine standardmäßige Möglichkeit, den Stil der Spinner zu ändern, die zur Änderung des Feldwerts verwendet werden. Bei Safari befinden sich die Spinner außerhalb des Feldes.

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
            Bei Opera sind die Spinner vergrößert, was den Inhalt des Feldes verbergen kann.
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
            Bei Opera sind die Spinner vergrößert, was den Inhalt des Feldes verbergen kann.
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
      <td>Siehe den Hinweis zu {{cssxref("line-height")}}.</td>
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
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
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
          Unterstützt, aber es gibt zu viele Inkonsistenzen zwischen Browsern, um zuverlässig zu sein.
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

### Kontrollkästchen und Radio-Buttons

Siehe die Eingabetypen `{{htmlelement("input/checkbox", "checkbox")}}` und `{{htmlelement("input/radio", "radio")}}`.

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
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
      <td style="text-align: center; vertical-align: top">nicht anwendbar</td>
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

Siehe die Elemente `{{htmlelement("select")}}`, `{{htmlelement("optgroup")}}` und `{{htmlelement("option")}}`.

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
            Diese Eigenschaft ist beim <code>{{htmlelement("select")}}</code>-Element in Ordnung, kann aber nicht beim <code>{{htmlelement("option")}}</code>- oder <code>{{htmlelement("optgroup")}}</code>-Element verwendet werden.
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
            Die Eigenschaft wird angewendet, jedoch inkonsistent zwischen Browsern auf Mac OSX.
          </li>
          <li>
            Die Eigenschaft wird gut auf das <code>{{htmlelement("select")}}</code>-Element angewendet, aber inkonsistent auf <code>{{htmlelement("option")}}</code>- und <code>{{htmlelement("optgroup")}}</code>-Elemente behandelt.
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
            Auf Mac OSX unterstützen auf WebKit basierende Browser diese Eigenschaft nicht bei nativen Widgets und sie, zusammen mit Opera, unterstützen sie überhaupt nicht bei <code>{{htmlelement("option")}}</code>- und <code>{{htmlelement("optgroup")}}</code>-Elementen.
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
            Auf Mac OSX unterstützen auf WebKit basierende Browser diese Eigenschaft nicht bei nativen Widgets und sie, zusammen mit Opera, unterstützen sie überhaupt nicht bei <code>{{htmlelement("option")}}</code>- und <code>{{htmlelement("optgroup")}}</code>-Elementen.
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
            IE9 unterstützt diese Eigenschaft nicht bei <code>{{htmlelement("select")}}</code>-, <code>{{htmlelement("option")}}</code>- und <code>{{htmlelement("optgroup")}}</code>-Elementen; WebKit-basierte Browser auf Mac OSX unterstützen diese Eigenschaft nicht bei <code>{{htmlelement("option")}}</code>- und <code>{{htmlelement("optgroup")}}</code>-Elementen.
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
            Nur Firefox bietet vollständige Unterstützung für diese Eigenschaft. Andere Browser unterstützen sie nur auf dem <code>{{htmlelement("select")}}</code>-Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code>-Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code>-Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code>-Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code>-Element.
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

Hinweis: Firefox bietet keine Möglichkeit, den Pfeil nach unten auf dem `{{htmlelement("select")}}`-Element zu ändern.

### Auswahlfelder (mehrzeilig)

Siehe die Elemente `{{htmlelement("select")}}`, `{{htmlelement("optgroup")}}` und `{{htmlelement("option")}}` sowie das Attribut [`size`](/de/docs/Web/HTML/Attributes/size).

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
            Opera unterstützt {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}} nicht auf dem <code>{{htmlelement("select")}}</code>-Element.
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
      <td>Siehe den Hinweis zu {{cssxref("line-height")}}.</td>
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
            IE9 unterstützt diese Eigenschaft nicht bei <code>{{htmlelement("select")}}</code>-, <code>{{htmlelement("option")}}</code>- und <code>{{htmlelement("optgroup")}}</code>-Elementen; WebKit-basierte Browser auf Mac OSX unterstützen diese Eigenschaft nicht bei <code>{{htmlelement("option")}}</code>- und <code>{{htmlelement("optgroup")}}</code>-Elementen.
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
            WebKit-basierte Browser auf Mac OSX unterstützen diese Eigenschaft bei diesem Widget nicht.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem <code>{{htmlelement("select")}}</code>-Element.
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
            Bei Opera wird die {{cssxref("border-radius")}}-Eigenschaft nur angewendet, wenn ein expliziter Rand gesetzt ist.
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

Siehe die Elemente `{{htmlelement("datalist")}}` und `{{htmlelement("input")}}` sowie das Attribut [`list`](/de/docs/Web/HTML/Element/input#list).

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

### Dateipicker

Siehe den Eingabetyp `{{htmlelement("input/file", "file")}}`.

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
            Unterstützt, aber es gibt zu viele Inkonsistenzen zwischen Browsern, um zuverlässig zu sein.
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
        ⚠
