---
title: CSS-Eigenschaftskompatibilitätstabelle für Formularelemente
slug: Learn/Forms/Property_compatibility_table_for_form_controls
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{learnsidebar}}

Die folgenden Kompatibilitätstabellen versuchen, den Stand der CSS-Unterstützung für HTML-Formulare zusammenzufassen. Aufgrund der Komplexität von CSS und HTML-Formularen können diese Tabellen nicht als perfekte Referenz angesehen werden. Sie geben Ihnen jedoch einen guten Einblick, was getan werden kann und was nicht, und helfen Ihnen zu lernen, wie man Dinge umsetzen kann.

## Anleitung zum Lesen der Tabellen

### Werte

Für jede Eigenschaft gibt es vier mögliche Werte:

- ✅ Ja
  - : Es gibt eine vernünftige Konsistenz in der Unterstützung der Eigenschaft in verschiedenen Browsern. Sie könnten dennoch in bestimmten Randfällen auf merkwürdige Nebeneffekte stoßen.
- ⚠️ Teilweise
  - : Während die Eigenschaft funktioniert, können Sie häufig auf merkwürdige Nebeneffekte oder Inkonsistenzen stoßen. Sie sollten diese Eigenschaften wahrscheinlich meiden, es sei denn, Sie beherrschen zuerst diese Nebenwirkungen.
- ❌ Nein
  - : Die Eigenschaft funktioniert nicht oder ist so inkonsistent, dass sie nicht zuverlässig ist.
- n.a.
  - : Die Eigenschaft hat keine Bedeutung für diesen Typ von Widget.

### Darstellung

Für jede Eigenschaft gibt es zwei mögliche Darstellungen:

- N (Normal)
  - : Zeigt an, dass die Eigenschaft wie sie ist angewendet wird
- T (Gepimpt)
  - : Zeigt an, dass die Eigenschaft mit der folgenden zusätzlichen Regel angewendet wird:

```css
* {
  /* Turn off the native look and feel */
  appearance: none;
}
```

## Kompatibilitätstabellen

Das Ändern des Aussehens von Formularelementen mit CSS, wie mit {{cssxref("border")}}, {{cssxref("background")}}, {{cssxref("border-radius")}} und {{cssxref("height")}}, kann das native Aussehen & Gefühl der Widgets in einigen Browsern teilweise oder vollständig ausschalten. Seien Sie vorsichtig, wenn Sie sie verwenden.

### Texteingabefelder

Siehe die `{{htmlelement("input/text", "text")}}`, `{{htmlelement("input/search", "search")}}` und `{{htmlelement("input/password", "password")}}` Eingabetypen.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Boxmodell</em></th>
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen
            & Gefühl für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese
            Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen
            & Gefühl für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese
            Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen
            & Gefühl für die Suchfelder. Daher ist es erforderlich, <code>appearance:none</code> zu verwenden, um diese
            Eigenschaft auf Suchfelder anwenden zu können.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schrift</em></th>
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
            Wenn die {{cssxref("border-color")}}-Eigenschaft nicht gesetzt ist,
            werden einige WebKit-basierte Browser die
            {{cssxref("color")}}-Eigenschaft sowohl auf den Rahmen als auch auf die
            Schrift auf <code>{{htmlelement("textarea")}}</code>s anwenden.
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
      <td>Siehe die Anmerkung über {{cssxref("line-height")}}</td>
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
            IE9 unterstützt diese Eigenschaft nur auf
            <code>{{htmlelement("textarea")}}</code>s, während Opera
            sie nur auf einzeilige Textfelder unterstützt.
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen
            & Gefühl für die Suchfelder. Daher ist es erforderlich, <code>-webkit-appearance:none</code> zu verwenden, um diese
            Eigenschaft auf Suchfelder anwenden zu können.
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
            WebKit-Browser (hauptsächlich auf Mac OSX und iOS) verwenden das native Aussehen
            & Gefühl für die Suchfelder. Daher ist es erforderlich, <code>-webkit-appearance:none</code> zu verwenden, um diese
            Eigenschaft auf Suchfelder anwenden zu können.
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

Siehe die `{{htmlelement("input/button", "button")}}`, `{{htmlelement("input/submit", "submit")}}`, und `{{htmlelement("input/reset", "reset")}}` Eingabetypen und das `{{htmlelement("button")}}` Element.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Boxmodell</em></th>
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
            Diese Eigenschaft wird auf WebKit-basierten Browsern auf Mac OSX oder
            iOS nicht angewendet.
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
            Diese Eigenschaft wird auf WebKit-basierten Browsern auf Mac OSX oder
            iOS nicht angewendet.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schrift</em></th>
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
      <td>Siehe die Anmerkung über {{cssxref("line-height")}}.</td>
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
            In Opera wird die {{cssxref("border-radius")}}-Eigenschaft
            nur angewendet, wenn ein expliziter Rand gesetzt ist.
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

Siehe den `{{htmlelement("input/number", "number")}}` Eingabetyp. Es gibt keine standardisierte Möglichkeit, das Aussehen der Spinner zu ändern, die zum Ändern des Werts des Felds verwendet werden, wobei sich die Spinner in Safari außerhalb des Feldes befinden.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Boxmodell</em></th>
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
            In Opera sind die Spinner herangezoomt, was den Inhalt des
            Feldes verbergen kann.
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
            In Opera sind die Spinner herangezoomt, was den Inhalt des
            Feldes verbergen kann.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schrift</em></th>
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
      <td>Siehe die Anmerkung über {{cssxref("line-height")}}.</td>
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
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
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
          Unterstützt, aber es gibt zu viele Inkonsistenzen zwischen Browsern, um verlässlich zu sein.
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

Siehe die `{{htmlelement("input/checkbox", "checkbox")}}` und `{{htmlelement("input/radio", "radio")}}` Eingabetypen.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Boxmodell</em></th>
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
            Einige Browser fügen zusätzliche Ränder hinzu und andere dehnen das Widget.
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
            Einige Browser fügen zusätzliche Ränder hinzu und andere dehnen das Widget.
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
      <th colspan="4" scope="col"><em>Text und Schrift</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">n.a.</td>
      <td style="text-align: center; vertical-align: top">n.a.</td>
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

### Auswahllisten (einzeilig)

Siehe die `{{htmlelement("select")}}`, `{{htmlelement("optgroup")}}` und `{{htmlelement("option")}}` Elemente.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS-Boxmodell</em></th>
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
            Diese Eigenschaft funktioniert einwandfrei auf dem
            <code>{{htmlelement("select")}}</code> Element, kann jedoch nicht auf das <code>{{htmlelement("option")}}</code> oder
            <code>{{htmlelement("optgroup")}}</code> Element angewendet werden.
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
            Die Eigenschaft wird angewendet, jedoch auf inkonsistente Weise zwischen Browsern auf Mac OSX.
          </li>
          <li>
            Die Eigenschaft wird korrekt auf dem
            <code>{{htmlelement("select")}}</code> Element angewendet, wird jedoch auf
            <code>{{htmlelement("option")}}</code> und
            <code>{{htmlelement("optgroup")}}</code> Elementen inkonsistent gehandhabt.
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>Text und Schrift</em></th>
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
            Auf Mac OSX unterstützen WebKit-basierte Browser diese Eigenschaft nicht bei
            nativen Widgets, und sie, zusammen mit Opera, unterstützen sie überhaupt nicht bei
            <code>{{htmlelement("option")}}</code> und
            <code>{{htmlelement("optgroup")}}</code> Elementen.
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
            Auf Mac OSX unterstützen WebKit-basierte Browser diese Eigenschaft nicht bei
            nativen Widgets, und sie, zusammen mit Opera, unterstützen sie überhaupt nicht bei
            <code>{{htmlelement("option")}}</code> und
            <code>{{htmlelement("optgroup")}}</code>-Elementen.
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
            IE9 unterstützt diese Eigenschaft nicht auf
            <code>{{htmlelement("select")}}</code>,
            <code>{{htmlelement("option")}}</code> und
            <code>{{htmlelement("optgroup")}}</code> Elementen; WebKit
            basierte Browser auf Mac OSX unterstützen diese Eigenschaft nicht auf
            <code>{{htmlelement("option")}}</code> und
            <code>{{htmlelement("optgroup")}}</code> Elementen.
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
            Nur Firefox bietet volle Unterstützung für diese Eigenschaft. Andere Browser unterstützen sie nur auf
            dem <code>{{htmlelement("select")}}</code> Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem
            <code>{{htmlelement("select")}}</code> Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem
            <code>{{htmlelement("select")}}</code> Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem
            <code>{{htmlelement("select")}}</code> Element.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem
            <code>{{htmlelement("select")}}</code> Element.
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

Beachten Sie, dass Firefox keine Möglichkeit bietet, den Abwärtspfeil auf dem `{{htmlelement("select")}}` Element zu ändern.

## Dropdown-Felder (mehrzeilig)

Sehen Sie sich die `{{htmlelement("select")}}`, `{{htmlelement("optgroup")}}` und `{{htmlelement("option")}}` Elemente und das [`size` Attribut](/de/docs/Web/HTML/Attributes/size) an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
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
            Opera unterstützt {{cssxref("padding-top")}} und
            {{cssxref("padding-bottom")}} nicht auf dem
            <code>{{htmlelement("select")}}</code> Element.
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
      <td>Siehe den Hinweis zur {{cssxref("line-height")}}.</td>
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
            IE9 unterstützt diese Eigenschaft nicht auf
            <code>{{htmlelement("select")}}</code>,
            <code>{{htmlelement("option")}}</code> und
            <code>{{htmlelement("optgroup")}}</code> Elementen; WebKit
            basierte Browser auf Mac OSX unterstützen diese Eigenschaft nicht auf
            <code>{{htmlelement("option")}}</code> und
            <code>{{htmlelement("optgroup")}}</code> Elementen.
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
            WebKit-basierte Browser auf Mac OSX unterstützen diese Eigenschaft
            nicht auf diesem Widget.
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
            Die meisten Browser unterstützen diese Eigenschaft nur auf dem
            <code>{{htmlelement("select")}}</code> Element.
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
            In Opera wird die {{cssxref("border-radius")}} Eigenschaft nur angewendet, wenn ein expliziter Rand gesetzt ist.
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

Sehen Sie sich die `{{htmlelement("datalist")}}`- und `{{htmlelement("input")}}`-Elemente und das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
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

### Dateiauswahl

Sehen Sie sich den `{{htmlelement("input/file", "file")}}` Eingabetyp an.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
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
          <li>Viele Browser wenden diese Eigenschaft auf die Auswahltaste an.</li>
        </ol>
      </td>
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
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Es wirkt mehr oder weniger wie ein zusätzlicher linker Rand außerhalb des Widgets.
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

### Datumsauswahl

Sehen Sie sich die `{{htmlelement("input/date", "date")}}` und `{{htmlelement("input/time", "time")}}` Eingabetypen an. Viele Eigenschaften werden unterstützt, aber es gibt zu viele Inkonsistenzen zwischen den Browsern, um zuverlässig zu sein.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
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

### Farbauswahl

Sehen Sie sich den `{{htmlelement("input/color", "color")}}` Eingabetyp an:

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
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
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            Opera behandelt dies wie ein Auswahl-Widget mit der gleichen Einschränkung.
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
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ Ja
      </td>
      <td>
        <ol>
          <li>
            Opera behandelt dies wie ein Auswahl-Widget mit der gleichen Einschränkung.
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
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td rowspan="3">
        <ol>
          <li>
            Unterstützt, aber es gibt zu viele Inkonsistenzen zwischen den Browsern, um zuverlässig zu sein.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### Messgeräte und Fortschrittsbalken

Sehen Sie sich die `{{htmlelement("meter")}}` und `{{htmlelement("progress")}}` Elemente an:

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
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
        ✅ Ja
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Chrome verbirgt das
            <code>{{htmlelement("progress")}}</code> und
            <code>{{htmlelement("meter")}}</code> Element, wenn die
            {{cssxref("padding")}} Eigenschaft auf einem veränderten
            Element angewendet wird.
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
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td rowspan="3">
        <ol>
          <li>
            Unterstützt, aber es gibt zu viele Inkonsistenzen zwischen den Browsern, um zuverlässig zu sein.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### Bereich

Siehe den `{{htmlelement("input/range", "range")}}` Eingabetyp. Es gibt keinen Standardweg, um den Stil des Bereichsgriffs zu ändern, und Opera bietet keine Möglichkeit, das Standard-Rendering des Bereichs-Widgets zu ändern.

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
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
            Chrome und Opera fügen dem Widget zusätzlichen Platz hinzu.
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
            Das {{cssxref("padding")}} wird angewendet, hat jedoch keine visuelle Wirkung.
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
      <th colspan="4" scope="col"><em>Rahmen und Hintergrund</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td rowspan="3">
        <ol>
          <li>
            Unterstützt, aber es gibt zu viele Inkonsistenzen zwischen Browsern, um zuverlässig zu sein.
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ Nein<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### Bildschaltflächen

Siehe den `{{htmlelement("input/image", "image")}}` Eingabetyp:

<table>
  <thead>
    <tr>
      <th scope="col">Eigenschaft</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">Hinweis</th>
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
        ⚠️ Teilweise<sup>[1]</sup>
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
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ Teilweise<sup>[1]</sup>
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

## Siehe auch

### Lernpfad

- [Ihr erstes HTML-Formular](/de/docs/Learn/Forms/Your_first_form)
- [Anleitung zum Strukturieren eines HTML-Formulars](/de/docs/Learn/Forms/How_to_structure_a_web_form)
- [Die nativen Formular-Widgets](/de/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types)
- [Zusätzliche Formularelemente](/de/docs/Learn/Forms/Other_form_controls)
- [UI-Pseudoklassen](/de/docs/Learn/Forms/UI_pseudo-classes)
- [HTML-Formulare stylen](/de/docs/Learn/Forms/Styling_web_forms)
- [Formulardatenvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Erweitere Themen

- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Anleitung zum Erstellen benutzerdefinierter Formular-Widgets](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML-Formulare in älteren Browsern](/de/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Erweiterte Stile für HTML-Formulare](/de/docs/Learn/Forms/Advanced_form_styling)
- **Eigenschaftskompatibilitätstabelle für Formular-Widgets**
