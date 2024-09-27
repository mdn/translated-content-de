---
title: Attribute
slug: Web/MathML/Attribute
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Dies ist eine alphabetische Liste von MathML-Attributen. Weitere Details zu jedem Attribut sind auf den entsprechenden [MathML-Element-Seiten](/de/docs/Web/MathML/Element) und auf der Seite zu den [globalen Attributen](/de/docs/Web/MathML/Global_attributes) verfügbar. Die Seite zu [Werten](/de/docs/Web/MathML/Values) beschreibt außerdem einige Hinweise zu häufig verwendeten Werten bei MathML-Attributen.

> [!NOTE]
> Wie auf der Hauptseite von [MathML](/de/docs/Web/MathML) erklärt, verwendet MDN [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation. Dennoch werden auch ältere Funktionen dokumentiert, die in einigen Browsern noch implementiert sind. Weitere Details dazu und zu anderen Funktionen finden Sie in [MathML 4](https://w3c.github.io/mathml/).

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
         Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob die Unterschrift als Akzent behandelt werden soll.
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
         Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob die Überschrift als Akzent behandelt werden soll.
      </td>
    </tr>
    <tr>
      <td><code>actiontype</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>Ein Zeichenfolgenwert, der die für dieses Element geltende Aktion angibt.</td>
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
      <td>Ein Zeichen für das Schlusszeichen.</td>
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
      <td>Gibt die horizontale Ausrichtung von Tabellenzellen an.</td>
    </tr>
    <tr>
      <td><code>columnlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Gibt die Tabellenstützen der Spalten an.</td>
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
        Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Tabellenspalten die Zelle umfasst.
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
       Ein {{cssxref("length-percentage")}}, das die gewünschte Tiefe (unterhalb der Basislinie) angibt.
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td>
        <a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a>
      </td>
      <td>
        Die Textrichtung. Mögliche Werte sind entweder <code>ltr</code> (von links nach rechts) oder
        <code>rtl</code> (von rechts nach links).
      </td>
    </tr>
    <tr>
      <td><code>display</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        Gibt den Anzeigemodus an. Die Werte <code>block</code> und
        <code>inline</code> sind erlaubt.
      </td>
    </tr>
    <tr>
      <td><code>displaystyle</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        <p>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der
        <a href="/de/docs/Web/CSS/math-style">math-style</a>
        auf <code>normal</code> (wenn true) oder <code>compact</code> (sonst) gesetzt wird.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>fence</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der Operator ein Abgrenzungszeichen ist (wie z. B.
        Klammern). Es gibt keinen visuellen Effekt für dieses Attribut.
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
        Gibt die Umrandungen einer gesamten {{ MathMLElement("mtable") }} an.
        Mögliche Werte sind: <code>none</code> (Standard), <code>solid</code> und
        <code>dashed</code>.
      </td>
    </tr>
    <tr>
      <td><code>framespacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        Gibt zusätzlichen Platz an, der zwischen der Tabelle und dem
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
        Ein {{cssxref("length-percentage")}}, das die gewünschte Höhe (über der Basislinie) angibt.
      </td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Wird verwendet, um einen Hyperlink zu einer angegebenen URI festzulegen.</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Richtet eine eindeutige Kennung ein, die mit dem Element verbunden ist.</td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, das die Dicke der horizontalen Bruchlinie angibt.</td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
        Ein {{cssxref("length-percentage")}}, das den Abstand vor dem Operator angibt.
      </td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mpadded") }}
      </td>
      <td>
        Ein {{cssxref("length-percentage")}}, das die horizontale Position des Positionierungspunkts des Kindinhalts im Verhältnis zum Positionierungspunkt des Elements angibt.
      </td>
    </tr>
    <tr>
      <td><code>lquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        Das öffnende Anführungszeichen, das den Inhalt umschließt. Der Standardwert ist <code>&amp;quot;</code>.
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
        Eine <a href="/de/docs/Web/CSS/color">Farbe</a> für das Element.
      </td>
    </tr>
    <tr>
      <td><code>mathsize</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Ein {{cssxref("length-percentage")}}, das als <a href="/de/docs/Web/CSS/font-size"><code>font-size</code></a> für das Element verwendet wird.
      </td>
    </tr>
    <tr>
      <td><code>mathvariant</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Die logische Klasse von Token-Elementen, die sich in der Typografie unterscheiden.</td>
    </tr>
    <tr>
      <td><code>maxsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, das die maximale Größe des Operators angibt, wenn er dehnbar ist.</td>
    </tr>
    <tr>
      <td><code>minsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, das die minimale Größe des Operators angibt, wenn er dehnbar ist.</td>
    </tr>
    <tr>
      <td><code>movablelimits</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob angehängte Unter- und Überschriften zu Unter- und Oberzeichenpositionen verschoben werden, wenn <a href="/de/docs/Web/CSS/math-style">math-style</a> auf <code>compact</code> gesetzt ist.
      </td>
    </tr>
    <tr>
      <td><code>notation</code></td>
      <td>{{ MathMLElement("menclose") }}</td>
      <td>
        Eine Liste von Notationen, die durch Leerzeichen getrennt sind, um sie auf die untergeordneten
        Elemente anzuwenden.
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
      <td>Ein Zeichen für das Öffnungszeichen.</td>
    </tr>
    <tr>
      <td><code>rowalign</code></td>
      <td>
        {{ MathMLElement("mtable") }},
        {{ MathMLElement("mtd") }},
        {{ MathMLElement("mtr") }}
      </td>
      <td>Gibt die vertikale Ausrichtung von Tabellenzellen an.</td>
    </tr>
    <tr>
      <td><code>rowlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Gibt die Tabellenstützen der Zeilen an.</td>
    </tr>
    <tr>
      <td><code>rowspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Gibt den Abstand zwischen den Tabellenzeilen an.</td>
    </tr>
    <tr>
      <td><code>rowspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        Ein nicht-negativer ganzzahliger Wert, der angibt, auf wie viele Zeilen
        sich die Zelle erstreckt.
      </td>
    </tr>
    <tr>
      <td><code>rspace</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, das den Abstand nach dem Operator angibt.</td>
    </tr>
    <tr>
      <td><code>rquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        Das schließende Anführungszeichen, das den Inhalt umschließt. Der Standardwert ist <code>&amp;quot;</code>.
      </td>
    </tr>
    <tr>
      <td><code>scriptlevel</code></td>
      <td><a href="/de/docs/Web/MathML/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Gibt eine <a href="/de/docs/Web/CSS/math-depth">math-depth</a> für das Element an. Siehe die <a href="/de/docs/Web/MathML/Global_attributes/scriptlevel#values">scriptlevel-Seite</a> für akzeptierte Werte und Zuordnung.
      </td>
    </tr>
    <tr>
      <td><code>scriptminsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Gibt eine minimale Schriftgröße an, die aufgrund von Änderungen des
        <code>scriptlevel</code> erlaubt ist.
      </td>
    </tr>
    <tr>
      <td><code>scriptsizemultiplier</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Gibt den Multiplikator an, der verwendet wird, um die Schriftgröße aufgrund von Änderungen
        im <code>scriptlevel</code> anzupassen.
      </td>
    </tr>
    <tr>
      <td><code>selection</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>Das sichtbare Kindelement, das nur bei einigen <code>actiontype</code> Werten berücksichtigt wird.</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
      Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt,
        ob der Operator ein Trennzeichen ist (wie Kommas).
        Es gibt keinen visuellen Effekt für dieses Attribut.
      </td>
    </tr>
    <tr>
      <td><code>separators</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>
        Eine Folge von null oder mehr Zeichen, die für unterschiedliche
        Trennzeichen verwendet werden.
      </td>
    </tr>
    <tr>
      <td><code>stretchy</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der Operator an die Größe des angrenzenden Elements angepasst wird.
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
        Ein {{cssxref("length-percentage")}}, das die minimale Menge angibt, um die Basislinie des Unterschrifts nach unten zu verschieben.
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
        Ein {{cssxref("length-percentage")}}, das die minimale Menge angibt, um die Basislinie des Überschrifts nach oben zu verschieben.
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre mathematische Achse sein soll (zentrierte Bruchlinie).
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, das die vertikale Position des Positionierungspunkts des Kindinhalts im Verhältnis zum Positionierungspunkt des Elements angibt.
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
        Ein {{cssxref("length-percentage")}}, das die gewünschte Breite angibt.
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
