---
title: "`rule-overlap` CSS property"
short-title: rule-overlap
slug: Web/CSS/Reference/Properties/rule-overlap
l10n:
  sourceCommit: 0cc2d00775016fc61ae0ac1256d65ed1b56a193a
---

{{SeeCompatTable}}

Die [CSS-Eigenschaft](/de/docs/Web/CSS) **`rule-overlap`** legt fest, welche Trennlinie oben gezeichnet wird, wenn sich Spalten- und Zeilentrennlinien kreuzen.

{{InteractiveExample("CSS Demo: rule-overlap")}}

```css interactive-example-choice
rule-overlap: row-over-column;
```

```css interactive-example-choice
rule-overlap: column-over-row;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-rule: solid thick orange;
  column-rule: solid thick purple;
}
#example-element i {
  padding: 5px;
}
```

## Syntax

```css
/* Keywords */
rule-overlap: row-over-column;
rule-overlap: column-over-row;

/* Global values */
rule-overlap: inherit;
rule-overlap: initial;
rule-overlap: revert;
rule-overlap: revert-layer;
rule-overlap: unset;
```

### Werte

Diese Eigenschaft wird durch eines der folgenden Schlüsselwörter angegeben:

- `row-over-column`
  - : Legt fest, dass Zeilentrennlinien über Spaltentrennlinien gezeichnet werden. Dies ist der Standardwert.
- `column-over-row`
  - : Legt fest, dass Spaltentrennlinien über Zeilentrennlinien gezeichnet werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die Eigenschaft `rule-overlap`, um Spaltentrennlinien über Zeilentrennlinien zu zeichnen.

#### HTML

Wir erstellen eine Liste mit 75 Einträgen. Der Großteil des HTML-Codes ist der Kürze halber ausgeblendet.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
  <li>32</li>
  <li>33</li>
  <li>34</li>
  <li>35</li>
  <li>36</li>
  <li>37</li>
  <li>38</li>
  <li>39</li>
  <li>40</li>
  <li>41</li>
  <li>42</li>
  <li>43</li>
  <li>44</li>
  <li>45</li>
  <li>46</li>
  <li>47</li>
  <li>48</li>
  <li>49</li>
  <li>50</li>
  <li>51</li>
  <li>52</li>
  <li>53</li>
  <li>54</li>
  <li>55</li>
  <li>56</li>
  <li>57</li>
  <li>58</li>
  <li>59</li>
  <li>60</li>
  <li>61</li>
  <li>62</li>
  <li>63</li>
  <li>64</li>
  <li>65</li>
  <li>66</li>
  <li>67</li>
  <li>68</li>
  <li>69</li>
  <li>70</li>
  <li>71</li>
  <li>72</li>
  <li>73</li>
  <li>74</li>
  <li>75</li>
</ul>
<p>
  <label
    ><input type="checkbox" /> set to
    <code>rule-overlap: row-over-column;</code></label
  >
</p>
```

#### CSS

Wir definieren die ungeordnete Liste mithilfe der Eigenschaft {{cssxref("grid-template-columns")}} als Grid-Container mit 10 Spalten. Wir setzen {{cssxref("list-style-type")}} auf eine leere Zeichenfolge, um die Aufzählungszeichen zu entfernen. Mit einem {{cssxref("gap")}} von `20px` schaffen wir zwischen den Spalten und Zeilen genügend Platz für die durchgezogenen Spalten- und Zeilentrennlinien mit einer Breite von `20px`. Schließlich verwenden wir die Eigenschaft `rule-overlap`, um die Spaltentrennlinien über den Zeilentrennlinien zu zeichnen.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: "";
  gap: 20px;

  row-rule: 20px solid palegoldenrod;
  column-rule: 20px solid olive;

  rule-overlap: column-over-row;
}
```

Der übrige CSS-Code ist der Kürze halber ausgeblendet.

```css hidden live-sample___basic
:has(:checked) ul {
  rule-overlap: row-over-column;
}
li {
  text-align: center;
  aspect-ratio: 1;
  line-height: 1.5em;
}
@layer no-support {
  @supports not (rule-overlap: row-over-column) {
    body::before {
      content: "Your browser doesn't support the rule-overlap property.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic", "", "625")}}

Aktivieren oder deaktivieren Sie das Kontrollkästchen, um den Wert der Eigenschaft `rule-overlap` zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("rule-color")}}
- {{cssxref("rule-width")}}
- {{cssxref("rule-style")}}
- {{cssxref("column-rule")}}-Kurzschreibweise
- {{cssxref("row-rule")}}-Kurzschreibweise
- {{cssxref("rule-visibility-items")}}
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
