---
title: Attribute
slug: Web/MathML/Attribute
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Dies ist eine alphabetische Liste von MathML-Attributen. Weitere Details zu jedem Attribut finden Sie auf den entsprechenden [MathML-Elementseiten](/de/docs/Web/MathML/Element) und auf der Seite zu den [globalen Attributen](/de/docs/Web/MathML/Global_attributes). Die Seite über [Werte](/de/docs/Web/MathML/Values) beschreibt auch einige Hinweise zu allgemeinen Werten, die von MathML-Attributen verwendet werden.

> [!NOTE]
> Wie auf der Hauptseite von [MathML](/de/docs/Web/MathML) erklärt, verwendet MDN [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation. Jedoch sind auch veraltete Funktionen dokumentiert, die noch von einigen Browsern implementiert werden. Weitere Details zu diesen und anderen Funktionen finden Sie in [MathML 4](https://w3c.github.io/mathml/).

<table class="standard-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Elemente, die das Attribut akzeptieren</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
         Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der Operator als Akzent behandelt werden soll, wenn er als Unter- oder Überschrift verwendet wird.
      </td>
    </tr>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mover") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
         Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob das Untere Skript als Akzent behandelt werden soll.
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
         Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob das Obere Skript als Akzent behandelt werden soll.
      </td>
    </tr>
    <tr>
      <td><code>actiontype</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>Ein String-Wert, der die für dieses Element ausgeführte Aktion angibt.</td>
    </tr>
    <tr>
      <td><code>align</code></td>
      <td>
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        Gibt die vertikale Ausrichtung der Tabelle in Bezug auf ihre Umgebung an.
      </td>
    </tr>
    <tr>
      <td><code>background</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/background-color"><code>background-color</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>close</code>  {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>Ein String für das schließende Trennzeichen.</td>
    </tr>
    <tr>
      <td><code>color</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/color"><code>color</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>columnalign</code></td>
      <td>
        {{ MathMLElement("mtable") }},
        {{ MathMLElement("mtd") }},
        {{ MathMLElement("mtr") }}
      </td>
      <td>Gibt die horizontale Ausrichtung der Tabellenzellen an.</td>
    </tr>
    <tr>
      <td><code>columnlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Gibt die Rahmen der Tabellenspalten an.</td>
    </tr>
    <tr>
      <td><code>columnspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Gibt den Abstand zwischen den Tabellenspalten an.</td>
    </tr>
    <tr>
      <td><code>columnspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        Ein nicht-negativer Ganzzahlenwert, der angibt, über wie viele Tabellenspalten
        sich die Zelle erstreckt.
      </td>
    </tr>
    <tr>
      <td><code>denomalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>Die Ausrichtung des Nenners unter dem Bruch.</td>
    </tr>
    <tr>
      <td><code>depth</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>
       Eine {{cssxref("length-percentage")}}, die die gewünschte Tiefe (unter der Grundlinie) angibt.
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td>
        <a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a>
      </td>
      <td>
        Die Textausrichtung. Mögliche Werte sind entweder <code>ltr</code> (links nach rechts) oder
        <code>rtl</code> (rechts nach links).
      </td>
    </tr>
    <tr>
      <td><code>display</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        Gibt den Darstellungsmodus an. Die Werte <code>block</code> und
        <code>inline</code> sind erlaubt.
      </td>
    </tr>
    <tr>
      <td><code>displaystyle</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        <p>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, der angibt, ob der
        <a href="/de/docs/Web/CSS/math-style">math-style</a> auf <code>normal</code> (wenn wahr) oder <code>compact</code> (ansonsten) gesetzt werden soll.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>fence</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der Operator ein Zaun ist (wie Klammern). Es gibt keinen visuellen Effekt für dieses Attribut.
      </td>
    </tr>
    <tr>
      <td><code>fontfamily</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/font-family"><code>font-family</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>fontsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/font-size"><code>font-size</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>fontstyle</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/font-style"><code>font-style</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>fontweight</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/font-weight"><code>font-weight</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        Gibt die Rahmen einer gesamten {{ MathMLElement("mtable") }} an.
        Mögliche Werte sind: <code>none</code> (Standard), <code>solid</code> und
        <code>dashed</code>.
      </td>
    </tr>
    <tr>
      <td><code>framespacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        Gibt zusätzlichen Raum an, der zwischen der Tabelle und
        <code>frame</code> hinzugefügt wird.
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{ MathMLElement("mpadded") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td>
        Eine {{cssxref("length-percentage")}}, die die gewünschte Höhe (oberhalb der Grundlinie) angibt.
      </td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Wird verwendet, um einen Hyperlink zu einer festgelegten URI einzurichten.</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Richtet eine eindeutige Kennung ein, die dem Element zugeordnet ist.</td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>Eine {{cssxref("length-percentage")}}, die die Dicke der horizontalen Bruchlinie angibt.</td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
        Eine {{cssxref("length-percentage")}}, die die Menge an Raum vor dem Operator angibt.
      </td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mpadded") }}
      </td>
      <td>
        Eine {{cssxref("length-percentage")}}, die den horizontalen Ort des Positionierungspunkts des Kindinhalts in Bezug auf den Positionierungspunkt des Elements angibt.
      </td>
    </tr>
    <tr>
      <td><code>lquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        Das öffnende Anführungszeichen, um den Inhalt einzuschließen. Der Standardwert ist <code>&amp;quot;</code>.
      </td>
    </tr>
    <tr>
      <td><code>mathbackground</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Eine <a href="/de/docs/Web/CSS/background-color">background-color</a> für das Element.
      </td>
    </tr>
    <tr>
      <td><code>mathcolor</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Eine <a href="/de/docs/Web/CSS/color">color</a> für das Element.
      </td>
    </tr>
    <tr>
      <td><code>mathsize</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Eine {{cssxref("length-percentage")}}, die als <a href="/de/docs/Web/CSS/font-size"><code>font-size</code></a> für das Element verwendet wird.
      </td>
    </tr>
    <tr>
      <td><code>mathvariant</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Die logische Klasse von Token-Elementen, die sich in der Typografie unterscheidet.</td>
    </tr>
    <tr>
      <td><code>maxsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Eine {{cssxref("length-percentage")}}, die die maximale Größe des Operators angibt, wenn er dehnbar ist.</td>
    </tr>
    <tr>
      <td><code>minsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Eine {{cssxref("length-percentage")}}, die die minimale Größe des Operators angibt, wenn er dehnbar ist.</td>
    </tr>
    <tr>
      <td><code>movablelimits</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, der angibt, ob angehängte Unter- und Überschriften in Unter- und Hochformatpositionen verschoben werden, wenn <a href="/de/docs/Web/CSS/math-style">math-style</a> auf <code>compact</code> gesetzt ist.
      </td>
    </tr>
    <tr>
      <td><code>notation</code></td>
      <td>{{ MathMLElement("menclose") }}</td>
      <td>
        Eine Liste von Notationen, durch Leerzeichen getrennt, die auf die Kind Elemente angewendet werden sollen.
      </td>
    </tr>
    <tr>
      <td><code>numalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>Die Ausrichtung des Zählers über dem Bruch.</td>
    </tr>
    <tr>
      <td><code>open</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>Ein String für das öffnende Trennzeichen.</td>
    </tr>
    <tr>
      <td><code>rowalign</code></td>
      <td>
        {{ MathMLElement("mtable") }},
        {{ MathMLElement("mtd") }},
        {{ MathMLElement("mtr") }}
      </td>
      <td>Gibt die vertikale Ausrichtung der Tabellenzellen an.</td>
    </tr>
    <tr>
      <td><code>rowlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Gibt die Rahmen der Tabellenreihen an.</td>
    </tr>
    <tr>
      <td><code>rowspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Gibt den Abstand zwischen den Tabellenreihen an.</td>
    </tr>
    <tr>
      <td><code>rowspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        Ein nicht-negativer Ganzzahlenwert, der angibt, über wie viele Reihen sich die
        Zelle erstreckt.
      </td>
    </tr>
    <tr>
      <td><code>rspace</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Eine {{cssxref("length-percentage")}}, die die Menge an Raum nach dem Operator angibt.</td>
    </tr>
    <tr>
      <td><code>rquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        Das schließende Anführungszeichen, um den Inhalt einzuschließen. Der Standardwert ist <code>&amp;quot;</code>.
      </td>
    </tr>
    <tr>
      <td><code>scriptlevel</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Gibt eine <a href="/de/docs/Web/CSS/math-depth">math-depth</a> für das Element an. Siehe die <a href="/de/docs/Web/MathML/Global_attributes/scriptlevel#values">Scriptlevel-Seite</a> für akzeptierte Werte und Zuordnungen.
      </td>
    </tr>
    <tr>
      <td><code>scriptminsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Gibt eine Mindestschriftgröße an, die aufgrund von
        <code>scriptlevel</code>-Änderungen zulässig ist.
      </td>
    </tr>
    <tr>
      <td><code>scriptsizemultiplier</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Gibt den Multiplikator an, der verwendet wird, um die Schriftgröße aufgrund von
        <code>scriptlevel</code>-Änderungen anzupassen.
      </td>
    </tr>
    <tr>
      <td><code>selection</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>Das sichtbare Kindelement wird nur für einige <code>actiontype</code>-Werte berücksichtigt.</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
      Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, der angibt,
        ob der Operator ein Trennzeichen ist (wie Kommas).
         Es gibt keinen visuellen Effekt für dieses Attribut.
      </td>
    </tr>
    <tr>
      <td><code>separators</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>
        Eine Folge von null oder mehr Zeichen, die für verschiedene
        Trennzeichen verwendet werden sollen.
      </td>
    </tr>
    <tr>
      <td><code>stretchy</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, der angibt, ob der Operator auf die Größe des angrenzenden Elements gestreckt wird.
      </td>
    </tr>
    <tr>
      <td><code>subscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msub") }},
        {{ MathMLElement("msubsup") }},
        {{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        Eine {{cssxref("length-percentage")}}, die die Mindestmenge angibt, um die Basislinie des Tiefstapels nach unten zu verschieben.
      </td>
    </tr>
    <tr>
      <td><code>superscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msup") }},
        {{ MathMLElement("msubsup") }},
        {{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        Eine {{cssxref("length-percentage")}}, die die Mindestmenge angibt, um die Basislinie des Hochstapels nach oben zu verschieben.
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, der angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre mathematische Achse (zentrierte Bruchlinie) sein soll.
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>Eine {{cssxref("length-percentage")}}, die den vertikalen Ort des Positionierungspunkts des Kindinhalts in Bezug auf den Positionierungspunkt des Elements angibt.
</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{ MathMLElement("mpadded") }},
        {{ MathMLElement("mspace") }},
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        Eine {{cssxref("length-percentage")}}, die die gewünschte Breite angibt.
      </td>
    </tr>
    <tr>
      <td><code>xmlns</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        Gibt die URI für den MathML-Namespace an (<code
          ><a href="https://www.w3.org/1998/Math/MathML"
            >http://www.w3.org/1998/Math/MathML</a
          ></code
        >)
      </td>
    </tr>
  </tbody>
</table>
