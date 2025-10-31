---
title: MathML-Attribute
short-title: Attributes
slug: Web/MathML/Reference/Attribute
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dies ist eine alphabetische Liste der MathML-Attribute. Weitere Details zu jedem Attribut finden Sie auf den entsprechenden [MathML-Element-Seiten](/de/docs/Web/MathML/Reference/Element) und auf der [Seite für globale Attribute](/de/docs/Web/MathML/Reference/Global_attributes). Die [Werte-Seite](/de/docs/Web/MathML/Reference/Values) beschreibt ebenfalls einige Hinweise zu häufig verwendeten Werten, die von MathML-Attributen genutzt werden.

> [!NOTE]
> Wie auf der Hauptseite [MathML](/de/docs/Web/MathML) erklärt, verwendet MDN [MathML Core](https://w3c.github.io/mathml-core/) als Referenzspezifikation. Es werden jedoch auch veraltete Funktionen dokumentiert, die noch von einigen Browsern implementiert werden. Weitere Details zu diesen und anderen Funktionen finden Sie in [MathML 4](https://w3c.github.io/mathml/).

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
         Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der Operator als Akzent behandelt werden soll, wenn er als Unter- oder Überschrift verwendet wird.
      </td>
    </tr>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mover") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
         Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob das Unterzeichen als Akzent behandelt werden soll.
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
         Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob das Überschrift als Akzent behandelt werden soll.
      </td>
    </tr>
    <tr>
      <td><code>actiontype</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>Ein Zeichenfolgenwert, der die Aktion angibt, die für dieses Element passiert.</td>
    </tr>
    <tr>
      <td><code>align</code></td>
      <td>
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        Gibt die vertikale Ausrichtung der Tabelle im Verhältnis zu ihrer Umgebung an.
      </td>
    </tr>
    <tr>
      <td><code>background</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/Reference/Properties/background-color"><code>background-color</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>close</code>  {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>Ein Zeichen für das schließende Trennzeichen.</td>
    </tr>
    <tr>
      <td><code>color</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/Reference/Properties/color"><code>color</code></a>.
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
      <td>Gibt die Spaltenränder der Tabelle an.</td>
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
        Ein nicht-negativer ganzzahliger Wert, der angibt, wie viele Tabellenspalten die Zelle erstreckt.
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
       Ein {{cssxref("length-percentage")}}, der die gewünschte Tiefe (unterhalb der Grundlinie) angibt.
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td>
        <a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a>
      </td>
      <td>
        Die Textrichtung. Mögliche Werte sind entweder <code>ltr</code> (links nach rechts) oder
        <code>rtl</code> (rechts nach links).
      </td>
    </tr>
    <tr>
      <td><code>display</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        Gibt den Darstellungsmodus an. Die Werte <code>block</code> und
        <code>inline</code> sind zulässig.
      </td>
    </tr>
    <tr>
      <td><code>displaystyle</code></td>
      <td><a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        <p>
        Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob das
        <a href="/de/docs/Web/CSS/Reference/Properties/math-style">math-style</a>
        auf <code>normal</code> (falls wahr) oder <code>compact</code> (sonst) gesetzt werden soll.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>fence</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der Operator ein Zaun (wie Klammern) ist. Für dieses Attribut gibt es keinen visuellen Effekt.
      </td>
    </tr>
    <tr>
      <td><code>fontfamily</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/Reference/Properties/font-family"><code>font-family</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>fontsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/Reference/Properties/font-size"><code>font-size</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>fontstyle</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/Reference/Properties/font-style"><code>font-style</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>fontweight</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Verwenden Sie stattdessen CSS <a href="/de/docs/Web/CSS/Reference/Properties/font-weight"><code>font-weight</code></a>.
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        Gibt die Ränder eines gesamten {{ MathMLElement("mtable") }} an.
        Mögliche Werte sind: <code>none</code> (Standard), <code>solid</code> und
        <code>dashed</code>.
      </td>
    </tr>
    <tr>
      <td><code>framespacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        Gibt zusätzlichen Raum an, der zwischen der Tabelle und dem
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
        Ein {{cssxref("length-percentage")}}, der die gewünschte Höhe (über der Grundlinie) angibt.
      </td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td><a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Wird verwendet, um einen Hyperlink zu einem angegebenen URI zu setzen.</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Richtet eine eindeutige Kennung ein, die mit dem Element verbunden ist.</td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, der die Dicke der horizontalen Bruchlinie angibt.</td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
        Ein {{cssxref("length-percentage")}}, der den Abstand vor dem Operator angibt.
      </td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mpadded") }}
      </td>
      <td>
        Ein {{cssxref("length-percentage")}}, der die horizontale Position des Positionierungspunktes des Kinderinhalts in Bezug auf den Positionierungspunkt des Elements angibt.
      </td>
    </tr>
    <tr>
      <td><code>lquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        Das Anführungszeichen, um den Inhalt einzuschließen. Der Standardwert ist <code>&amp;quot;</code>.
      </td>
    </tr>
    <tr>
      <td><code>mathbackground</code></td>
      <td><a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Eine <a href="/de/docs/Web/CSS/Reference/Properties/background-color">Hintergrundfarbe</a> für das Element.
      </td>
    </tr>
    <tr>
      <td><code>mathcolor</code></td>
      <td><a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Eine <a href="/de/docs/Web/CSS/Reference/Properties/color">Farbe</a> für das Element.
      </td>
    </tr>
    <tr>
      <td><code>mathsize</code></td>
      <td><a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Ein {{cssxref("length-percentage")}}, der als <a href="/de/docs/Web/CSS/Reference/Properties/font-size"><code>font-size</code></a> für das Element verwendet wird.
      </td>
    </tr>
    <tr>
      <td><code>mathvariant</code></td>
      <td><a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a></td>
      <td>Die logische Klasse von Token-Elementen, die in der Typografie variiert.</td>
    </tr>
    <tr>
      <td><code>maxsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, der die maximale Größe des Operators angibt, wenn dieser dehnbar ist.</td>
    </tr>
    <tr>
      <td><code>minsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, der die minimale Größe des Operators angibt, wenn dieser dehnbar ist.</td>
    </tr>
    <tr>
      <td><code>movablelimits</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob verbundene Unter- und Überschriften zu Unter- und Hochindices wechseln, wenn <a href="/de/docs/Web/CSS/Reference/Properties/math-style">math-style</a> auf <code>compact</code> gesetzt ist.
      </td>
    </tr>
    <tr>
      <td><code>notation</code></td>
      <td>{{ MathMLElement("menclose") }}</td>
      <td>
        Eine Liste von Notationen, getrennt durch Leerzeichen, die auf die Kinderelemente angewandt werden soll.
      </td>
    </tr>
    <tr>
      <td><code>numalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>Die Ausrichtung des Zählers oberhalb des Bruches.</td>
    </tr>
    <tr>
      <td><code>open</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>Ein Zeichen für das öffnende Trennzeichen.</td>
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
      <td>Gibt die Zeilenränder der Tabelle an.</td>
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
        Ein nicht-negativer ganzzahliger Wert, der angibt, über wie viele Zeilen sich die Zelle erstreckt.
      </td>
    </tr>
    <tr>
      <td><code>rspace</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, der den Abstand nach dem Operator angibt.</td>
    </tr>
    <tr>
      <td><code>rquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        Das Schlusszeichen, um den Inhalt einzuschließen. Der Standardwert ist <code>&amp;quot;</code>.
      </td>
    </tr>
    <tr>
      <td><code>scriptlevel</code></td>
      <td><a href="/de/docs/Web/MathML/Reference/Global_attributes">Alle MathML-Elemente</a></td>
      <td>
        Gibt eine <a href="/de/docs/Web/CSS/Reference/Properties/math-depth">math-depth</a> für das Element an. Siehe die <a href="/de/docs/Web/MathML/Reference/Global_attributes/scriptlevel#values">scriptlevel-Seite</a> für akzeptierte Werte und Zuweisungen.
      </td>
    </tr>
    <tr>
      <td><code>scriptminsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Gibt eine minimale Schriftgröße an, die aufgrund von Änderungen in <code>scriptlevel</code> erlaubt ist.
      </td>
    </tr>
    <tr>
      <td><code>scriptsizemultiplier</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Gibt den Multiplikator an, der verwendet wird, um die Schriftgröße aufgrund von Änderungen in <code>scriptlevel</code> anzupassen.
      </td>
    </tr>
    <tr>
      <td><code>selection</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>Das sichtbare Kinderelement, das nur bei einigen <code>actiontype</code>-Werten berücksichtigt wird.</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
      Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der Operator ein Trennzeichen ist (wie Kommata).
         Für dieses Attribut gibt es keinen visuellen Effekt.
      </td>
    </tr>
    <tr>
      <td><code>separators</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>
        Eine Folge von null oder mehr Zeichen, die für verschiedene Trennzeichen verwendet werden sollen.
      </td>
    </tr>
    <tr>
      <td><code>stretchy</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob der Operator sich auf die Größe des benachbarten Elements ausdehnt.
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
        Ein {{cssxref("length-percentage")}}, der die Mindestmenge angibt, um den Grundlinie des Subskripts nach unten zu verschieben.
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
        Ein {{cssxref("length-percentage")}}, der die Mindestmenge angibt, um den Grundlinie des Superskripts nach oben zu verschieben.
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Ein <a href="/de/docs/Web/MathML/Reference/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a>, das angibt, ob ein dehnbarer Operator vertikal symmetrisch um die imaginäre mathematische Achse (zentrierte Bruchlinie) sein soll.
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>Ein {{cssxref("length-percentage")}}, der die vertikale Position des Positionierungspunktes des Kinderinhalts in Bezug auf den Positionierungspunkt des Elements angibt.
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
        Ein {{cssxref("length-percentage")}}, der die gewünschte Breite angibt.
      </td>
    </tr>
    <tr>
      <td><code>xmlns</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        Gibt den URI für den MathML-Namespace an (<code
          ><a href="https://www.w3.org/1998/Math/MathML"
            >http://www.w3.org/1998/Math/MathML</a
          ></code
        >)
      </td>
    </tr>
  </tbody>
</table>
